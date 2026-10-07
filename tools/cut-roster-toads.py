#!/usr/bin/env python3
"""Cut the named Liberated Toads off their cream field — transparent token plates.

The website's roster cells (`Reputation-Matrix2/assets/images/toads/roster/
toad_NN_<slug>.png`, the art the micro-articles and the cast packet use) are
drawn on a cream or white FIELD. On the website that is the page; on a
Foundry map it is a cream rectangle around every Toad. This tool keys each
cell with the flat-field cutter of `tools/make-token-plates.py` (only the
field touching the border goes, so a white cap on a cream field stays) into

    Reputation-Matrix2/portraits/liberated-toads/roster/<same file name>

and VERIFIES every plate: border transparent, no leftover rectangle of field,
no half-keyed field, no key-coloured halo, something left on the plate. The
cast builder (`tools/build-character-sheets.py`) prefers the plate over the
cell for the actor's portrait AND token when it exists; the website keeps the
cells (`characters.json` is not touched).

    python3 tools/cut-roster-toads.py            cut what is missing or stale, verify, report
    python3 tools/cut-roster-toads.py --force    cut everything again
    python3 tools/cut-roster-toads.py --check    verify the plates on disk (exit 1 on a problem or a missing plate)
    python3 tools/cut-roster-toads.py --sheet .arena-tmp/roster-plates.png
                                                 a contact sheet of the plates on magenta, to look at

A cell the generator drew with its own alpha is trimmed and squared, nothing
keyed. The cut is deterministic: the same cell gives the same plate, so
`--check` can tell a stale plate (the cell changed) from a current one by
re-cutting into memory.
"""
import argparse
import glob
import importlib.util
import io
import json
import os
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
RM = os.path.join(ROOT, "Reputation-Matrix2")
CELLS = os.path.join(RM, "assets", "images", "toads", "roster")
CELL_GLOB = "toad_*.png"
RENDERS = os.path.join(RM, "assets", "images", "toads", "renders")
# A cell whose figure shares the field's colour (Toad ie Foxx: the cap's white is the same
# tone as the inner field, so any distance key eats the cap) is cut from a chroma render
# under renders/ instead; its cell is then derived from the plate (Toad on cream), never
# the other way round.
CUT_FROM_RENDER = {"toad_73_toad_ie_foxx.png"}
PLATES = os.path.realpath(os.path.join(RM, "portraits", "liberated-toads", "roster"))  # root `portraits` is a symlink
REL_PLATES = "portraits/liberated-toads/roster"
SMALL_PX = 300  # a plate below this is the website's small cell, not a bad cut — reported, not failed
HALO_PX = 400   # semi-transparent field-coloured pixels hugging the cut: the cream halo a
                # flat-field key leaves when it does not un-matte its blend band (0 on most
                # clean cuts, under 300 where the figure's own white cap anti-aliases, over a
                # thousand on the pre-un-matte plates)

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")


def _mtp():
    spec = importlib.util.spec_from_file_location("mtp", os.path.join(HERE, "make-token-plates.py"))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def cells():
    return sorted(glob.glob(os.path.join(CELLS, CELL_GLOB)))


def plate_for(cell):
    """Repo-relative plate path for a roster cell (what an actor's img / token carries), or None if the cell is not a roster cell."""
    cell = cell.replace("\\", "/")
    name = os.path.basename(cell)
    if "assets/images/toads/roster/" not in cell or not name.startswith("toad_") or not name.endswith(".png"):
        return None
    return f"{REL_PLATES}/{name}"


def plate_exists(cell):
    rel = plate_for(cell)
    return rel if rel and os.path.exists(os.path.join(RM, *rel.split("/"))) else None


def verify(mtp, path):
    """Problems with a plate (empty when it is clean) and its facts."""
    w, h, clear, flat = mtp.plate_facts(path)
    why = []
    if clear < mtp.BORDER_CLEAR:
        why.append("border not transparent (%d%%)" % round(clear * 100))
    if flat:
        why.append("a flat field is still there %s" % (flat,))
    why += mtp.background_audit(path)
    halo = mtp.fringe_count(path)
    if halo > HALO_PX:
        why.append("a light halo hugs the cut (%d px) — re-cut the plate" % halo)
    return why, {"size": [w, h], "border_clear": round(clear, 3), "small": max(w, h) < SMALL_PX, "halo": halo}


def cut_source(cell):
    """What the cutter keys: the chroma render for the cells a flat key cannot separate
    from their figure, the cell itself for everyone else."""
    name = os.path.basename(cell)
    if name in CUT_FROM_RENDER:
        render = os.path.join(RENDERS, name)
        if os.path.exists(render):
            return render
    return cell


def cut_to_bytes(mtp, cell):
    """Cut into memory (a temp file the cutter writes, read back) — the same bytes every time for the same cell."""
    with tempfile.TemporaryDirectory() as td:
        tmp = os.path.join(td, os.path.basename(cell))
        facts = mtp.cut(cut_source(cell), tmp)
        with open(tmp, "rb") as fh:
            data = fh.read()
    return data, facts


def run(args):
    mtp = _mtp()
    rows, problems = [], []
    todo = cells()
    if args.only:
        todo = [c for c in todo if any(o in os.path.basename(c) for o in args.only)]
    if not todo:
        print("no roster cells found under", CELLS, file=sys.stderr)
        return 1
    os.makedirs(PLATES, exist_ok=True)
    for cell in todo:
        name = os.path.basename(cell)
        dst = os.path.join(PLATES, name)
        data, facts = cut_to_bytes(mtp, cell)
        have = None
        if os.path.exists(dst):
            with open(dst, "rb") as fh:
                have = fh.read()
        state = "current" if have == data else ("stale" if have is not None else "missing")
        if args.check:
            if state != "current":
                problems.append(f"{name}: plate {state} — run tools/cut-roster-toads.py")
        elif state != "current" or args.force:
            with open(dst + ".tmp", "wb") as fh:
                fh.write(data)
            os.replace(dst + ".tmp", dst)
            state = "cut"
        why, v = ([], {"size": list(facts["size"]), "border_clear": facts["border_clear"], "small": max(facts["size"]) < SMALL_PX})
        if os.path.exists(dst):
            why, v = verify(mtp, dst)
        if why:
            problems.append(f"{name}: " + "; ".join(why))
        rows.append({"cell": name, "plate": f"{REL_PLATES}/{name}", "state": state, "key": facts["key"], "figure": list(facts["figure"]),
                     "size": v["size"], "keyed": facts["keyed"], "border_clear": v["border_clear"], "small": v["small"], "problems": why})
    width = max(len(r["cell"]) for r in rows)
    for r in rows:
        flag = ("  <-- " + "; ".join(r["problems"])) if r["problems"] else ("  (small cell)" if r["small"] else "")
        print(f"{r['state']:<8} {r['cell']:<{width}} {r['key']:<16} figure {r['figure'][0]}x{r['figure'][1]} -> {r['size'][0]}px  keyed {r['keyed']:.0%}  border clear {r['border_clear']:.0%}{flag}")
    small = sum(1 for r in rows if r["small"])
    cut = sum(1 for r in rows if r["state"] == "cut")
    print(f"{len(rows)} roster cells: {cut} cut, {sum(1 for r in rows if r['state'] == 'current')} current, "
          f"{sum(1 for r in rows if r['state'] in ('stale', 'missing'))} stale/missing, {small} small (the website's 180 px cells — usable tokens, soft portraits), "
          f"{len(problems)} problem(s)")
    for p in problems:
        print("  " + p, file=sys.stderr)
    if args.report:
        with open(args.report, "w", encoding="utf-8") as fh:
            json.dump({"plates": rows, "problems": problems}, fh, indent=2, ensure_ascii=False)
    if args.sheet:
        contact_sheet([os.path.join(PLATES, r["cell"]) for r in rows if os.path.exists(os.path.join(PLATES, r["cell"]))], args.sheet)
        print("sheet:", args.sheet)
    return 1 if problems else 0


def contact_sheet(paths, out, cell=160, cols=10):
    """The plates on magenta with their names — a leftover field shows at once."""
    from PIL import Image, ImageDraw
    rows = (len(paths) + cols - 1) // cols
    sheet = Image.new("RGBA", (cols * cell, rows * (cell + 18)), (255, 0, 255, 255))
    draw = ImageDraw.Draw(sheet)
    for i, p in enumerate(paths):
        im = Image.open(p).convert("RGBA")
        im.thumbnail((cell - 8, cell - 8))
        x, y = (i % cols) * cell, (i // cols) * (cell + 18)
        sheet.alpha_composite(im, (x + (cell - im.width) // 2, y + (cell - im.height) // 2))
        draw.text((x + 3, y + cell), os.path.basename(p)[:24].replace("toad_", ""), fill=(0, 0, 0, 255))
    os.makedirs(os.path.dirname(os.path.abspath(out)), exist_ok=True)
    sheet.convert("RGB").save(out)


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--check", action="store_true", help="verify the plates on disk against a fresh cut; write nothing")
    ap.add_argument("--force", action="store_true", help="cut every plate again")
    ap.add_argument("--only", nargs="*", help="cells whose file name contains any of these")
    ap.add_argument("--sheet", help="write a contact sheet (PNG) of the plates on magenta")
    ap.add_argument("--report", help="write the per-plate facts as JSON")
    args = ap.parse_args(argv)
    return run(args)


if __name__ == "__main__":
    sys.exit(main())
