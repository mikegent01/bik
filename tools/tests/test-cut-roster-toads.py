#!/usr/bin/env python3
"""Tests for tools/cut-roster-toads.py — the Liberated Toads roster cells off
their cream field — and the cast builder's preference for the plates.

  python3 tools/tests/test-cut-roster-toads.py
"""
import importlib.util
import os
import subprocess
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TOOL = os.path.join(ROOT, "tools", "cut-roster-toads.py")
RM = os.path.join(ROOT, "Reputation-Matrix2")

from PIL import Image, ImageDraw  # noqa: E402

PASSED = FAILED = 0


def check(cond, what):
    global PASSED, FAILED
    if cond:
        PASSED += 1
    else:
        FAILED += 1
        print("FAIL:", what)


def load(name, rel):
    spec = importlib.util.spec_from_file_location(name, os.path.join(ROOT, rel))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


crt = load("crt", "tools/cut-roster-toads.py")
mtp = crt._mtp()

# ---------------------------------------------------------------- mapping
check(crt.plate_for("assets/images/toads/roster/toad_68_wavey.png") == "portraits/liberated-toads/roster/toad_68_wavey.png", "a roster cell maps to its plate, same file name")
check(crt.plate_for("assets\\images\\toads\\roster\\toad_68_wavey.png") == "portraits/liberated-toads/roster/toad_68_wavey.png", "backslashes (Windows) map too")
check(crt.plate_for("assets/images/toads/roster/field_guard_pike.png") is None, "a role figure (field_*) is not a roster cell — the 19 role plates have their own cut")
check(crt.plate_for("assets/images/toads/sheets/toad_01.png") is None and crt.plate_for("portraits/liberated-toads/guard_pike.png") is None, "anything outside the roster folder is left alone")

# ------------------------------------------------------- a synthetic cell
with tempfile.TemporaryDirectory() as td:
    cell = os.path.join(td, "toad_99_test.png")
    im = Image.new("RGB", (180, 197), (247, 244, 234))  # the website's cream field
    d = ImageDraw.Draw(im)
    d.ellipse((40, 20, 140, 100), fill=(220, 30, 30))        # red cap
    d.ellipse((60, 40, 80, 60), fill=(255, 255, 255))        # a WHITE spot on the cap (must not be keyed with the field)
    d.rectangle((70, 95, 110, 170), fill=(250, 240, 220))    # a cream-ish body that touches nothing cream of the field
    d.rectangle((60, 170, 120, 190), fill=(90, 50, 20))      # boots
    im.save(cell)
    dst = os.path.join(td, "plate.png")
    facts = mtp.cut(cell, dst)
    out = Image.open(dst).convert("RGBA")
    px = out.load()
    w, h = out.size
    check(w == h and facts["border_clear"] >= mtp.BORDER_CLEAR, "the plate is square with a transparent border")
    why, v = crt.verify(mtp, dst)
    check(why == [], f"the synthetic cut verifies clean — {why}")
    # the figure is still there: find the red cap and the white spot in the plate
    reds = sum(1 for x in range(w) for y in range(h) if px[x, y][3] > 200 and px[x, y][0] > 180 and px[x, y][1] < 80)
    whites = sum(1 for x in range(w) for y in range(h) if px[x, y][3] > 200 and min(px[x, y][:3]) > 240)
    check(reds > 5000, f"the red cap survived ({reds} px)")
    check(whites > 200, f"the white spot inside the cap survived the cream key ({whites} px)")
    check(v["small"] is True, "a 180 px cell is reported small, not failed")
    # determinism: cutting again gives the same bytes (what --check relies on)
    data1, _ = crt.cut_to_bytes(mtp, cell)
    data2, _ = crt.cut_to_bytes(mtp, cell)
    check(data1 == data2 and data1 == open(dst, "rb").read(), "the cut is deterministic — the same cell gives the same bytes")
    # a cell that already carries alpha is trimmed and squared, nothing keyed
    acell = os.path.join(td, "toad_98_alpha.png")
    a = Image.new("RGBA", (300, 300), (0, 0, 0, 0))
    ImageDraw.Draw(a).ellipse((50, 50, 250, 250), fill=(30, 120, 200, 255))
    a.save(acell)
    afacts = mtp.cut(acell, os.path.join(td, "aplate.png"))
    check(afacts["key"] == "alpha" and afacts["border_clear"] >= mtp.BORDER_CLEAR, "a transparent cell is trimmed, not keyed")

# ------------------------------------------------- the repo's own plates
r = subprocess.run([sys.executable, TOOL, "--check"], cwd=ROOT, capture_output=True, text=True)
check(r.returncode == 0, f"every roster cell has a current, clean plate on disk — {r.stderr.strip()[-400:]}")
check("75 roster cells" in r.stdout and "0 problem(s)" in r.stdout, f"--check reports the 75 cells and no problem — {r.stdout.strip().splitlines()[-1:]}")
plates = sorted(os.listdir(crt.PLATES))
cells = sorted(os.path.basename(c) for c in crt.cells())
check(plates == cells, f"one plate per cell, same names ({len(plates)} / {len(cells)})")
for name in plates[:3] + plates[-3:]:
    p = os.path.join(crt.PLATES, name)
    _, _, clear, flat = mtp.plate_facts(p)
    check(clear >= mtp.BORDER_CLEAR and flat is None, f"{name}: transparent border, no field")

# --------------------------------------- the cast builder prefers the plate
bcs_src = open(os.path.join(ROOT, "tools", "build-character-sheets.py"), encoding="utf-8").read()
check("def roster_plate(" in bcs_src and "roster_plate(im) or im" in bcs_src and "roster_plate(fb) or fb" in bcs_src, "build-character-sheets.py routes a roster cell to its plate for the portrait and the token")
cast_dir = os.path.join(RM, "actors", "cast")
import json  # noqa: E402
cells_in_cast, plates_in_cast = 0, 0
for f in os.listdir(cast_dir):
    if not f.endswith(".json") or f == "import.json":
        continue
    doc = json.load(open(os.path.join(cast_dir, f), encoding="utf-8"))
    for pth in (doc.get("img"), ((doc.get("prototypeToken") or {}).get("texture") or {}).get("src")):
        if not isinstance(pth, str):
            continue
        if "assets/images/toads/roster/toad_" in pth:
            cells_in_cast += 1
        if pth.startswith("portraits/liberated-toads/roster/"):
            plates_in_cast += 1
            check(os.path.exists(os.path.join(RM, pth)), f"{f}: the plate it carries exists ({pth})")
check(cells_in_cast == 0 and plates_in_cast >= 54, f"the generated cast carries plates, never cream cells ({plates_in_cast} plate refs, {cells_in_cast} cell refs)")
site = json.load(open(os.path.join(RM, "data", "characters.json"), encoding="utf-8"))
chars = site if isinstance(site, list) else (site.get("characters") or site.get("items") or [])
check(any("assets/images/toads/roster/toad_" in (c.get("image") or "") for c in chars), "the website still shows the roster cells (characters.json untouched)")

print(f"cut roster toads: {PASSED} passed, {FAILED} failed")
sys.exit(1 if FAILED else 0)
