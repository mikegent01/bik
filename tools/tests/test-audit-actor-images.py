#!/usr/bin/env python3
"""tools/audit-actor-images.py — the picture classes on synthetic files, the
packet walk, the strict rule (only art under portraits/ fails)."""
import importlib.util
import json
import os
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
TOOLS = os.path.dirname(HERE)
ROOT = os.path.dirname(TOOLS)

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:  # noqa: BLE001
    pass

spec = importlib.util.spec_from_file_location("audit_actor_images", os.path.join(TOOLS, "audit-actor-images.py"))
AUD = importlib.util.module_from_spec(spec)
spec.loader.exec_module(AUD)

from PIL import Image, ImageDraw  # noqa: E402

RESULTS = []


def check(name, ok, detail=""):
    RESULTS.append((name, bool(ok)))
    print("  %s %s%s" % ("ok  " if ok else "FAIL", name, "" if ok or not detail else " — " + str(detail)[:600]))


def figure(size=400, box=(100, 60, 300, 360), colour=(200, 40, 40, 255), bg=(0, 0, 0, 0), mode="RGBA"):
    im = Image.new("RGBA", (size, size), bg)
    d = ImageDraw.Draw(im)
    d.ellipse(box, fill=colour)
    return im if mode == "RGBA" else im.convert(mode)


tmp = tempfile.mkdtemp(prefix="audit-images-")
files = {}


def save(name, im, fmt=None):
    p = os.path.join(tmp, name)
    im.save(p, format=fmt)
    files[name] = p
    return p


# a clean transparent plate (a figure on nothing)
save("clean.png", figure())
# a leftover field: an opaque rectangle filling its own box (the keyer never ran)
rect = Image.new("RGBA", (400, 400), (0, 0, 0, 0))
ImageDraw.Draw(rect).rectangle((40, 40, 360, 360), fill=(250, 245, 230, 255))
save("field.png", rect)
# a small sprite
save("small.png", figure(box=(150, 150, 250, 260)))
# an opaque figure on a cream field (a cut-out never cut)
save("cream.jpg", figure(bg=(248, 242, 229, 255), mode="RGB"), "JPEG")
# a render still on its magenta key
save("key.png", figure(bg=(255, 0, 255, 255), mode="RGB"))
# a painted scene with a thin cream mat: busy inside, flat ring outside
scene = Image.new("RGB", (400, 400), (245, 240, 226))
inner = Image.merge("RGB", [Image.radial_gradient("L").resize((340, 340)), Image.linear_gradient("L").resize((340, 340)), Image.linear_gradient("L").rotate(90).resize((340, 340))])
scene.paste(inner, (30, 30))
save("framed.jpg", scene, "JPEG")
# a plain opaque portrait with no flat border at all
save("opaque.jpg", Image.radial_gradient("L").resize((400, 400)).convert("RGB"), "JPEG")

classes = {n: AUD.picture_facts(p)["class"] for n, p in files.items()}
check("picture_facts: clean plate, leftover field, small sprite, cream figure, magenta key, framed scene, plain opaque",
      classes == {"clean.png": "clean", "field.png": "field", "small.png": "small", "cream.jpg": "cream", "key.png": "key", "framed.jpg": "framed", "opaque.jpg": "opaque"}, classes)
facts = AUD.picture_facts(files["cream.jpg"])
check("the cream verdict says how much of the picture the field covers and the border colour", facts["fieldShare"] > 0.5 and facts["border"][0] > 240 and "never cut" in facts["why"], facts)
check("a file that is not a picture is unreadable, not a crash", AUD.picture_facts(__file__)["class"] == "unreadable")

# the packet walk: repo paths resolve under Reputation-Matrix2 / the root; img and token are both read; the users are listed
rm = os.path.join(ROOT, "Reputation-Matrix2")
plate_rel = "portraits/liberated-toads/roster/"
plates = sorted(f for f in os.listdir(os.path.join(rm, "portraits", "liberated-toads", "roster")) if f.endswith(".png"))
packet = os.path.join(tmp, "import.json")
with open(packet, "w", encoding="utf-8") as fh:
    json.dump({"format": "waluipedia-actors/1", "actors": [
        {"_id": "A1aaaaaaaaaaaaaa", "name": "Toad One", "type": "npc", "img": plate_rel + plates[0], "prototypeToken": {"texture": {"src": plate_rel + plates[0]}}},
        {"_id": "A2aaaaaaaaaaaaaa", "name": "Toad Two", "type": "npc", "img": plate_rel + plates[0], "prototypeToken": {"texture": {"src": "icons/svg/mystery-man.svg"}}},
        {"_id": "A3aaaaaaaaaaaaaa", "name": "Uploaded", "type": "npc", "img": "npc/some-upload.png", "prototypeToken": {"texture": {"src": "portraits/does-not-exist.png"}}},
        {"_id": "A4aaaaaaaaaaaaaa", "name": "Web", "type": "npc", "img": "https://cdn.example/x.webp"},
    ]}, fh)
rows = AUD.audit([packet])
by = {r["path"]: r for r in rows.values()}
check("audit walks img + token of every actor, one row per distinct path, who uses it (role per actor)",
      len(rows) == 5 and sorted(u["actor"] for u in by[plate_rel + plates[0]]["usedBy"]) == ["Toad One", "Toad One", "Toad Two"]
      and {u["role"] for u in by[plate_rel + plates[0]]["usedBy"]} == {"img", "token"}, json.dumps({k: [u["actor"] for u in v["usedBy"]] for k, v in by.items()}))
check("a repo plate is classified (the roster plates are clean or small, never field) and marked managed",
      by[plate_rel + plates[0]]["class"] in ("clean", "small") and by[plate_rel + plates[0]]["managed"] is True and by[plate_rel + plates[0]]["file"].startswith("Reputation-Matrix2/portraits/"), by[plate_rel + plates[0]])
check("a Foundry server path, a GM upload, a missing managed file and a URL keep the bridge's status as their class",
      by["icons/svg/mystery-man.svg"]["class"] == "placeholder" and by["npc/some-upload.png"]["class"] == "unknown"
      and by["portraits/does-not-exist.png"]["class"] == "missing" and by["https://cdn.example/x.webp"]["class"] == "external", {k: v["class"] for k, v in by.items()})
check("--only filters by actor name or path", set(AUD.audit([packet], only="toad two")) == {plate_rel + plates[0], "icons/svg/mystery-man.svg"} and set(AUD.audit([packet], only="npc/")) == {"npc/some-upload.png"})

# the strict rule: a cream file under portraits/ fails, the same file elsewhere is only reported
import io  # noqa: E402
import contextlib  # noqa: E402
import shutil  # noqa: E402

fake_root = os.path.join(tmp, "repo")
os.makedirs(os.path.join(fake_root, "Reputation-Matrix2", "portraits"))
os.makedirs(os.path.join(fake_root, "Reputation-Matrix2", "assets", "icons"))
shutil.copy(files["cream.jpg"], os.path.join(fake_root, "Reputation-Matrix2", "portraits", "cream.jpg"))
shutil.copy(files["cream.jpg"], os.path.join(fake_root, "Reputation-Matrix2", "assets", "icons", "cream.jpg"))
shutil.copy(files["clean.png"], os.path.join(fake_root, "Reputation-Matrix2", "portraits", "clean.png"))
packet2 = os.path.join(tmp, "import2.json")
with open(packet2, "w", encoding="utf-8") as fh:
    json.dump({"format": "waluipedia-actors/1", "actors": [
        {"_id": "B1aaaaaaaaaaaaaa", "name": "Kyrn", "type": "npc", "img": "assets/icons/cream.jpg"},
        {"_id": "B2aaaaaaaaaaaaaa", "name": "Clean", "type": "npc", "img": "portraits/clean.png"},
    ]}, fh)
prev = (AUD.BRIDGE.RM, AUD.BRIDGE.ROOT)
AUD.BRIDGE.RM, AUD.BRIDGE.ROOT = os.path.join(fake_root, "Reputation-Matrix2"), fake_root
try:
    out = io.StringIO()
    with contextlib.redirect_stdout(out):
        rc_icon = AUD.main(["--packet", packet2, "--strict"])
    text_icon = out.getvalue()
    with open(packet2, "w", encoding="utf-8") as fh:
        json.dump({"format": "waluipedia-actors/1", "actors": [{"_id": "B3aaaaaaaaaaaaaa", "name": "Toad", "type": "npc", "img": "portraits/cream.jpg"}]}, fh)
    out = io.StringIO()
    with contextlib.redirect_stdout(out):
        rc_plate = AUD.main(["--packet", packet2, "--strict", "--json", os.path.join(tmp, "out.json")])
    text_plate = out.getvalue()
finally:
    AUD.BRIDGE.RM, AUD.BRIDGE.ROOT = prev
check("--strict: a cream icon the GM picked is reported, not failed (exit 0, 'the GM's pick'); the same picture under portraits/ fails (exit 1)",
      rc_icon == 0 and "the GM's pick" in text_icon and "OK audit-actor-images" in text_icon and rc_plate == 1 and "FAIL audit-actor-images: 1 managed" in text_plate, text_icon + text_plate)
with open(os.path.join(tmp, "out.json"), encoding="utf-8") as fh:
    dumped = json.load(fh)
check("--json writes the table with the classes", dumped["classes"] == {"cream": 1} and dumped["paths"][0]["path"] == "portraits/cream.jpg" and dumped["paths"][0]["managed"] is True)

# the real packets: every plate the repo manages is clean (the Liberated Toads fix, verified over everything the world points at)
real = AUD.audit()
managed_bad = [r["path"] for r in real.values() if r.get("managed") and r["class"] in ("field", "cream", "key")]
check("the midlands world + Players packets: no managed plate carries a field, a key halo or a cream background (%d repo files, %d transparent plates clean)"
      % (sum(1 for r in real.values() if r["status"] == "ok"), sum(1 for r in real.values() if r["class"] in ("clean", "small"))), not managed_bad, managed_bad)
check("…and every Liberated Toads plate the packets use is transparent and clean or small",
      all(r["class"] in ("clean", "small") for r in real.values() if r["path"].startswith("portraits/liberated-toads/")),
      [(r["path"], r["class"]) for r in real.values() if r["path"].startswith("portraits/liberated-toads/") and r["class"] not in ("clean", "small")])

shutil.rmtree(tmp, ignore_errors=True)
ok = sum(1 for _, r in RESULTS if r)
print("audit-actor-images: %d ok, %d failed" % (ok, len(RESULTS) - ok))
sys.exit(0 if ok == len(RESULTS) else 1)
