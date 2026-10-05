#!/usr/bin/env python3
"""Checks for tools/dedupe-images.py against a scratch checkout: exact
duplicates found, the most-referenced copy kept, protected copies (roster,
id-named portraits) never deleted, references rewritten the way they were
written (RM-relative, page-relative, URL-encoded), generated files untouched,
--check's verdict."""
import importlib.util
import json
import os
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
spec = importlib.util.spec_from_file_location("dedupe_images", os.path.join(ROOT, "tools", "dedupe-images.py"))
dd = importlib.util.module_from_spec(spec)
spec.loader.exec_module(dd)

OKS, FAILS = [], []


def check(label, cond, extra=""):
    (OKS if cond else FAILS).append(label + (f" — {extra}" if extra and not cond else ""))


def write(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    mode = "wb" if isinstance(data, bytes) else "w"
    with open(path, mode, **({} if isinstance(data, bytes) else {"encoding": "utf-8", "newline": ""})) as fh:
        fh.write(data)


with tempfile.TemporaryDirectory() as tmp:
    rm = os.path.join(tmp, "Reputation-Matrix2")
    A, B, C = b"\x89PNG-A" * 40, b"\x89PNG-B" * 40, b"\xff\xd8JPG-C" * 40
    files = {
        # a plain name + a _v2 copy: the plain one has fewer refs but the other is not protected either → most referenced wins
        "Reputation-Matrix2/portraits/chai.jpg": A, "Reputation-Matrix2/portraits/chai_v2.jpg": A,
        # an id-named portrait (dynamic lookup) with a _v2 copy that has MORE refs: the id-named one stays and absorbs the refs
        "Reputation-Matrix2/portraits/captain_toadette.png": B, "Reputation-Matrix2/portraits/captain_toadette_v2.png": B,
        # two id-named portraits with the same bytes: both stay
        "Reputation-Matrix2/portraits/oracle.png": C + b"1", "Reputation-Matrix2/portraits/the_oracle.png": C + b"1",
        # the same still in the root assets/ and the archive's: the archive's copy stays, the root ref steps across
        "assets/scene.jpg": C, "Reputation-Matrix2/assets/scene.jpg": C,
        # the roster is never touched
        "Reputation-Matrix2/assets/images/toads/roster/toad_01.png": A + b"r", "Reputation-Matrix2/assets/images/toads/roster/scene_shift.png": A + b"r",
        # a near-duplicate (different bytes) is not a duplicate
        "Reputation-Matrix2/portraits/chai_crop.jpg": A + b"x",
    }
    for relp, blob in files.items():
        write(os.path.join(tmp, relp), blob)
    chars = {"characters": [
        {"id": "chai", "name": "Chai", "image": "portraits/chai_v2.jpg"},
        {"id": "captain_toadette", "name": "Captain Toadette", "image": "portraits/captain_toadette_v2.png", "gallery": ["portraits/captain_toadette_v2.png", "portraits/captain_toadette.png"]},
        {"id": "oracle", "name": "Oracle", "image": "portraits/oracle.png"},
        {"id": "the_oracle", "name": "The Oracle", "image": "portraits/the_oracle.png"},
    ]}
    write(os.path.join(rm, "data", "characters.json"), json.dumps(chars, indent=2) + "\n")
    write(os.path.join(rm, "data", "events.json"), '[{"image": "portraits/chai_v2.jpg", "art": "../portraits/chai_v2.jpg", "scene": "assets/scene.jpg"}]')  # no trailing newline
    write(os.path.join(tmp, "index.html"), '<img src="assets/scene.jpg"><img src="Reputation-Matrix2/portraits/chai%5Fv2.jpg"><script>const x = `portraits/${id}.png`;</script>')
    write(os.path.join(rm, "app", "pages", "profile.js"), "const p = `portraits/${characterKey}.png`; // chai, captain_toadette: 'captain_toadette'\r\nconst q = 'portraits/chai_v2.jpg'; const s = 'assets/scene.jpg';\r\n")
    write(os.path.join(tmp, "chatroom.html"), '<img src="portraits/chai_v2.jpg">')  # generated: never edited
    write(os.path.join(rm, "actors", "cast", "fvtt-Actor-chai.json"), '{"img": "portraits/chai_v2.jpg"}')  # generated
    write(os.path.join(rm, "actors", "worlds", "w", "fvtt-Actor-chai.json"), '{"img": "portraits/chai_v2.jpg", "prototypeToken": {"texture": {"src": "portraits/chai_v2.jpg"}}}')
    write(os.path.join(tmp, "docs", "note.md"), "see `portraits/captain_toadette_v2.png` and `assets/scene.jpg`\n")

    dd.ROOT, dd.RM = tmp, rm
    tracked = sorted(files) + ["Reputation-Matrix2/data/characters.json", "Reputation-Matrix2/data/events.json", "index.html", "Reputation-Matrix2/app/pages/profile.js",
                               "chatroom.html", "Reputation-Matrix2/actors/cast/fvtt-Actor-chai.json", "Reputation-Matrix2/actors/worlds/w/fvtt-Actor-chai.json", "docs/note.md"]
    rows = dd.plan(tracked)
    by_keeper = {r["keeper"]: r for r in rows}
    check("exact duplicates only: 5 groups (chai, captain_toadette, oracle, scene, roster) — the crop with other bytes is not one",
          len(rows) == 5 and not any("chai_crop" in m for r in rows for m in r["members"]), json.dumps([r["members"] for r in rows]))
    chai = by_keeper.get("Reputation-Matrix2/portraits/chai_v2.jpg")
    check("the most-referenced copy is the keeper when neither is protected (chai_v2.jpg: 6 refs in sources — the generated files do not count; a .jpg is never a dynamic lookup)",
          chai is not None and chai["deletable"] == ["Reputation-Matrix2/portraits/chai.jpg"] and chai["refs"]["Reputation-Matrix2/portraits/chai_v2.jpg"] == 6 and chai["refs"]["Reputation-Matrix2/portraits/chai.jpg"] == 0,
          json.dumps({k: (r["refs"], r["deletable"]) for k, r in by_keeper.items()}))
    toadette = by_keeper.get("Reputation-Matrix2/portraits/captain_toadette.png")
    check("an id-named .png (dynamic portraits/${id}.png lookups) stays and absorbs the _v2 copy's references even though the copy had more",
          toadette is not None and toadette["deletable"] == ["Reputation-Matrix2/portraits/captain_toadette_v2.png"] and len(toadette["edits"]) == 3, json.dumps(toadette and toadette["edits"]))
    oracle = next((r for r in rows if "Reputation-Matrix2/portraits/oracle.png" in r["members"]), None)
    check("two id-named portraits with the same bytes both stay, the second listed as protected", oracle is not None and oracle["deletable"] == [] and len(oracle["kept"]) == 1 and "look up" in oracle["kept"][0][1], json.dumps(oracle))
    roster = next((r for r in rows if "toads/roster" in r["members"][0]), None)
    check("the liberated toads' roster is never deleted from", roster is not None and roster["deletable"] == [] and "never modified" in roster["kept"][0][1])
    scene = by_keeper.get("Reputation-Matrix2/assets/scene.jpg")
    check("references under Reputation-Matrix2/ resolve to the archive's assets/ (2 refs), root pages to the root copy (2 refs): the archive's copy wins the tie and the root references step across to it",
          scene is not None and scene["deletable"] == ["assets/scene.jpg"] and scene["refs"] == {"Reputation-Matrix2/assets/scene.jpg": 2, "assets/scene.jpg": 2}
          and {(e[0], e[4]) for e in scene["edits"]} == {("index.html", "Reputation-Matrix2/assets/scene.jpg"), ("docs/note.md", "Reputation-Matrix2/assets/scene.jpg")}, json.dumps(scene and (scene["refs"], scene["edits"])))
    check("no edit ever lands in a generated file", not any(e[0].startswith(("chatroom.html", "Reputation-Matrix2/actors/cast/")) for r in rows for e in r["edits"]))

    deletable, edits = dd.report(rows, verbose=False)
    per_file, removed = dd.apply(rows)
    check("apply deletes the spare files and leaves keepers, protected copies and the near-duplicate",
          sorted(removed) == ["Reputation-Matrix2/portraits/captain_toadette_v2.png", "Reputation-Matrix2/portraits/chai.jpg", "assets/scene.jpg"]
          and all(os.path.exists(os.path.join(tmp, p)) for p in ("Reputation-Matrix2/portraits/chai_v2.jpg", "Reputation-Matrix2/portraits/oracle.png", "Reputation-Matrix2/portraits/the_oracle.png", "Reputation-Matrix2/assets/images/toads/roster/scene_shift.png", "Reputation-Matrix2/portraits/chai_crop.jpg")), json.dumps(removed))
    chars2 = json.load(open(os.path.join(rm, "data", "characters.json"), encoding="utf-8"))
    check("characters.json: the _v2 reference and the gallery entry now name captain_toadette.png, written RM-relative as before; chai's keeper untouched",
          chars2["characters"][1]["image"] == "portraits/captain_toadette.png" and chars2["characters"][1]["gallery"] == ["portraits/captain_toadette.png", "portraits/captain_toadette.png"] and chars2["characters"][0]["image"] == "portraits/chai_v2.jpg", json.dumps(chars2["characters"][1]))
    with open(os.path.join(rm, "data", "events.json"), "rb") as fh:
        ev = fh.read()
    check("a file without a trailing newline keeps none (events.json), CRLF files keep CRLF", not ev.endswith(b"\n") and b"\r\n" in open(os.path.join(rm, "app", "pages", "profile.js"), "rb").read())
    idx = open(os.path.join(tmp, "index.html"), encoding="utf-8").read()
    check("a root page's reference across trees is rewritten; a URL-encoded reference to a keeper is left alone", 'src="Reputation-Matrix2/assets/scene.jpg"' in idx and "chai%5Fv2.jpg" in idx, idx)
    check("the generated files were not edited", open(os.path.join(tmp, "chatroom.html"), encoding="utf-8").read() == '<img src="portraits/chai_v2.jpg">')
    rows_after = dd.plan([p for p in tracked if p not in removed])
    check("a second plan finds nothing deletable (only the protected pairs remain)", all(r["deletable"] == [] for r in rows_after) and len(rows_after) == 2, json.dumps([r["members"] for r in rows_after]))

print(f"dedupe images: {len(OKS)} ok, {len(FAILS)} failed")
for f in FAILS:
    print("  FAIL " + f)
for o in OKS:
    print("  ok   " + o)
sys.exit(1 if FAILS else 0)
