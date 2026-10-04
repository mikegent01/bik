#!/usr/bin/env python3
"""tools/organize-actors.py — the folders-and-tags pass of the sheets suite.

Builds a throw-away mirror (a GM folder tree, loose statblocks, a Players
folder) with a tiny sheet index, runs the organizer and proves: the website
groups win, name rules file the Koopa Troop, folder rules file the manor's
cast, generic creatures land in Bestiary / <type>, Players is never re-filed,
files move with their actors, the manifest follows, tags and colours are
written, a second pass is a no-op, the GM's later move is respected (and
--force overrides it), a later article promotes an actor out of the Bestiary,
identifiers are repaired by split / refused by check, and the real mirror is
organized.

    python3 tools/tests/test-organize-actors.py
"""
import importlib.util
import json
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
PY = sys.executable
TOOL = ROOT / "tools" / "organize-actors.py"
BRIDGE_TOOL = ROOT / "tools" / "foundry-bridge.py"
SCHEME = ROOT / "Reputation-Matrix2" / "actors" / "folders.json"
MIRROR = ROOT / "Reputation-Matrix2" / "actors" / "worlds" / "midlands"

fails, oks = [], []


def check(label, cond, extra=""):
    (oks if cond else fails).append(label + (f" — {extra}" if extra and not cond else ""))


def load(name, rel):
    spec = importlib.util.spec_from_file_location(name, ROOT / rel)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


org = load("organize_actors", "tools/organize-actors.py")
bridge = org.BRIDGE
MODULE_ID = bridge.MODULE_ID


def actor(name, _id, typ="npc", ctype="humanoid", folder_path=None, items=None, flags=None):
    doc = {"_id": _id, "name": name, "type": typ, "img": "icons/svg/mystery-man.svg",
           "system": {"details": {"type": {"value": ctype, "custom": ""}}} if typ == "npc" else {"details": {}},
           "items": items or [], "effects": [], "folder": None, "flags": flags or {}}
    if folder_path is not None:
        doc["flags"][MODULE_ID] = {"folderPath": list(folder_path)}
    return doc


def write(mirror, rel_dir, doc):
    d = mirror / rel_dir if rel_dir else mirror
    d.mkdir(parents=True, exist_ok=True)
    path = d / f"fvtt-Actor-{bridge.slugify(doc['name'])}-{doc['_id']}.json"
    path.write_text(bridge.render(doc), encoding="utf-8")
    return path


def read(path):
    return json.loads(Path(path).read_text(encoding="utf-8"))


def find(mirror, _id):
    hits = [p for p in mirror.rglob(f"*-{_id}.json")]
    return hits[0] if hits else None


def run(*args, world_dir):
    # the tool resolves worlds under the repo; point it at the temp world by name via WORLDS monkeypatch
    env = dict(os.environ, PYTHONIOENCODING="utf-8")
    cmd = [PY, str(TOOL), "--world", world_dir.name, "--index", str(world_dir.parent / "sheets.json"), *args]
    return subprocess.run(cmd, cwd=str(world_dir.parent.parent), stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                          encoding="utf-8", errors="replace", env=env)


scheme = json.loads(SCHEME.read_text(encoding="utf-8"))
check("scheme: format, Players, Bestiary with creature-type colours, website groups coloured, keep list",
      scheme.get("format") == "waluipedia-folders/1" and scheme["players"]["folder"] == "Players"
      and scheme["bestiary"]["folder"] == "Bestiary" and len(scheme["bestiary"]["types"]) >= 14
      and all(v.get("color") for v in scheme["groups"].values()) and "Players" in scheme["keep"])
builder = load("build_character_sheets", "tools/build-character-sheets.py")
check("scheme: every website group of the builder has a colour",
      set(g for g, _ in builder.GROUPS) | {"Disaster Inc.", "Elsewhere"} <= set(scheme["groups"]), str(set(g for g, _ in builder.GROUPS) - set(scheme["groups"])))
colors = json.loads((ROOT / "Reputation-Matrix2" / "data" / "factionColors.json").read_text(encoding="utf-8"))
check("scheme: groups that name a faction take the site's factionColors.json colour",
      all(scheme["groups"][g]["color"].lower() == colors[scheme["groups"][g]["faction"]].lower()
          for g in scheme["groups"] if scheme["groups"][g].get("faction") in colors and g not in ("Disaster Inc.",)))

with tempfile.TemporaryDirectory() as tmp:
    base = Path(tmp)
    worlds = base / "worlds"
    world = worlds / "testworld"
    world.mkdir(parents=True)
    # the organizer reads WORLDS from the repo; run it in-process against the temp tree instead
    org.WORLDS = str(worlds)
    index = {"sheets": [
        {"id": "aemenor", "name": "Aemenor", "source": "live", "kind": "npc", "group": "Iron Legion", "role": "officer", "party": False,
         "file": "actors/worlds/testworld/A House Divided/Characters of the Ruined Manor/fvtt-Actor-aemenor-A1aaaaaaaaaaaaaa.json"},
        {"id": "green_t", "name": "Green T", "source": "live", "kind": "pc", "group": "Disaster Inc.", "party": True,
         "file": "actors/worlds/testworld/fvtt-Actor-green-t-G1aaaaaaaaaaaaaa.json"},
        {"id": "usk", "name": "Usk", "source": "live", "kind": "npc", "group": "Disaster Inc.", "party": True,
         "file": "actors/worlds/testworld/fvtt-Actor-usk-U1aaaaaaaaaaaaaa.json"},
        {"id": "luigi", "name": "Luigi", "source": "generated", "kind": "npc", "group": "Mushroom Regency & Kingdom", "file": "actors/cast/fvtt-Actor-luigi.json",
         "alternates": [{"file": "actors/worlds/testworld/fvtt-Actor-luigi-L1aaaaaaaaaaaaaa.json", "source": "live", "kind": "npc"}]},
    ]}
    (worlds / "sheets.json").write_text(json.dumps(index), encoding="utf-8")
    manifest = {"format": "waluipedia-actors/1", "exportedFrom": "testworld", "folders": [], "actors": []}
    (world / "manifest.json").write_text(json.dumps(manifest), encoding="utf-8")

    write(world, "A House Divided/Characters of the Ruined Manor", actor("Aemenor", "A1aaaaaaaaaaaaaa", folder_path=["A House Divided", "Characters of the Ruined Manor"]))
    write(world, "A House Divided/Characters of the Feyward Manor", actor("Saedia", "S1aaaaaaaaaaaaaa", ctype="fey", folder_path=["A House Divided", "Characters of the Feyward Manor"]))
    write(world, "A House Divided/Creatures of the Feyward Manor", actor("Satyr Bard", "B1aaaaaaaaaaaaaa", ctype="fey", folder_path=["A House Divided", "Creatures of the Feyward Manor"]))
    write(world, "Iron Legion", actor("Guard", "I1aaaaaaaaaaaaaa", folder_path=["Iron Legion"]))
    write(world, "Players", actor("Waluigi", "W1aaaaaaaaaaaaaa", typ="character", folder_path=["Players"]))
    write(world, "Players", actor("Wario's Motorbike", "M1aaaaaaaaaaaaaa", ctype="construct", folder_path=["Players"]))
    write(world, "", actor("Green T", "G1aaaaaaaaaaaaaa", typ="character"))
    write(world, "", actor("Usk", "U1aaaaaaaaaaaaaa"))
    write(world, "", actor("Luigi", "L1aaaaaaaaaaaaaa"))
    write(world, "", actor("Goomba (Conscript Infantry)", "K1aaaaaaaaaaaaaa"))
    write(world, "", actor("Black Bear", "E1aaaaaaaaaaaaaa", ctype="beast"))
    write(world, "", actor("Arcane Eye", "X1aaaaaaaaaaaaaa", ctype="custom"))
    write(world, "", actor("Mystery Thing", "Y1aaaaaaaaaaaaaa", ctype=""))

    rc = org.main(["--world", "testworld", "--index", str(worlds / "sheets.json"), "--check", "--quiet"])
    check("--check on an unorganized mirror exits 1 and writes nothing", rc == 1 and find(world, "E1aaaaaaaaaaaaaa").parent == world)
    rc = org.main(["--world", "testworld", "--index", str(worlds / "sheets.json"), "--quiet"])
    check("the pass exits 0", rc == 0)

    where = {i: find(world, i) for i in ["A1aaaaaaaaaaaaaa", "S1aaaaaaaaaaaaaa", "B1aaaaaaaaaaaaaa", "I1aaaaaaaaaaaaaa", "W1aaaaaaaaaaaaaa", "M1aaaaaaaaaaaaaa",
                                         "G1aaaaaaaaaaaaaa", "U1aaaaaaaaaaaaaa", "L1aaaaaaaaaaaaaa", "K1aaaaaaaaaaaaaa", "E1aaaaaaaaaaaaaa", "X1aaaaaaaaaaaaaa", "Y1aaaaaaaaaaaaaa"]}
    rel = {i: p.relative_to(world).parent.as_posix() for i, p in where.items()}
    fp = {i: read(p)["flags"][MODULE_ID]["folderPath"] for i, p in where.items()}
    check("website group wins over the GM's adventure folder (Aemenor → Iron Legion)", rel["A1aaaaaaaaaaaaaa"] == "Iron Legion" and fp["A1aaaaaaaaaaaaaa"] == ["Iron Legion"])
    check("folder rule files the manor's named cast (Saedia → Overgrown Manor)", rel["S1aaaaaaaaaaaaaa"] == "Overgrown Manor")
    check("generic creatures go to Bestiary / <type> (Satyr Bard → Bestiary / Fey)", rel["B1aaaaaaaaaaaaaa"] == "Bestiary/Fey" and fp["B1aaaaaaaaaaaaaa"] == ["Bestiary", "Fey"])
    check("a GM folder named like a website group stays (Guard in Iron Legion)", rel["I1aaaaaaaaaaaaaa"] == "Iron Legion")
    check("Players is never re-filed (Waluigi, the motorbike)", rel["W1aaaaaaaaaaaaaa"] == "Players" and rel["M1aaaaaaaaaaaaaa"] == "Players")
    check("a party character found at the root is filed into Players (Green T)", rel["G1aaaaaaaaaaaaaa"] == "Players")
    check("a party NPC goes to the website group, not Players (Usk → Disaster Inc.)", rel["U1aaaaaaaaaaaaaa"] == "Disaster Inc" and fp["U1aaaaaaaaaaaaaa"] == ["Disaster Inc."])
    check("an index alternate counts as a website match (Luigi → Mushroom Regency & Kingdom)", rel["L1aaaaaaaaaaaaaa"] == "Mushroom Regency & Kingdom")
    check("name rules file the troops (Goomba → Koopa Troop)", rel["K1aaaaaaaaaaaaaa"] == "Koopa Troop")
    check("Bestiary / Beast; custom and blank creature types → Bestiary / Other", rel["E1aaaaaaaaaaaaaa"] == "Bestiary/Beast" and rel["X1aaaaaaaaaaaaaa"] == "Bestiary/Other" and rel["Y1aaaaaaaaaaaaaa"] == "Bestiary/Other")
    check("emptied GM directories are removed", not (world / "A House Divided").exists())

    sheets = {i: read(p)["flags"]["waluipedia-sheets"] for i, p in where.items()}
    check("tags: website group, kind, role, creature type, origin folder", sheets["A1aaaaaaaaaaaaaa"]["tags"] == ["Iron Legion", "npc", "officer", "humanoid", "A House Divided"], str(sheets["A1aaaaaaaaaaaaaa"]["tags"]))
    check("tags: Bestiary creatures", sheets["B1aaaaaaaaaaaaaa"]["tags"] == ["Bestiary", "npc", "fey", "A House Divided"], str(sheets["B1aaaaaaaaaaaaaa"]["tags"]))
    check("tags: a party NPC is tagged party; a PC is group + pc", "party" in sheets["U1aaaaaaaaaaaaaa"]["tags"] and sheets["G1aaaaaaaaaaaaaa"]["tags"] == ["Disaster Inc.", "pc"], str(sheets["G1aaaaaaaaaaaaaa"]["tags"]))
    check("tags: kept Players actors are tagged too (the motorbike)", sheets["M1aaaaaaaaaaaaaa"]["tags"] == ["Players", "npc", "construct"], str(sheets["M1aaaaaaaaaaaaaa"]["tags"]))
    check("colour: the folder's colour on the actor (Iron Legion grey, Bestiary / Fey orchid, Players gold)",
          sheets["A1aaaaaaaaaaaaaa"]["color"] == scheme["groups"]["Iron Legion"]["color"].upper()
          and sheets["B1aaaaaaaaaaaaaa"]["color"] == scheme["bestiary"]["types"]["fey"].upper()
          and sheets["W1aaaaaaaaaaaaaa"]["color"] == scheme["players"]["color"].upper())
    check("the placement is recorded with its basis and origin", sheets["B1aaaaaaaaaaaaaa"]["organized"] == {"path": ["Bestiary", "Fey"], "basis": "bestiary", "from": ["A House Divided", "Creatures of the Feyward Manor"]}
          and sheets["A1aaaaaaaaaaaaaa"]["organized"]["basis"] == "website" and "organized" not in sheets["W1aaaaaaaaaaaaaa"], str(sheets["B1aaaaaaaaaaaaaa"].get("organized")))
    man = read(world / "manifest.json")
    check("manifest follows the moves", man["actorCount"] == 13 and "Bestiary / Fey" in man["folders"] and any(r["file"] == "Bestiary/Fey/" + where["B1aaaaaaaaaaaaaa"].name for r in man["actors"]) and man["exportedFrom"] == "testworld")

    before = {p: p.read_text(encoding="utf-8") for p in world.rglob("*.json")}
    rc = org.main(["--world", "testworld", "--index", str(worlds / "sheets.json"), "--check", "--quiet"])
    after = {p: p.read_text(encoding="utf-8") for p in world.rglob("*.json")}
    check("a second pass is a no-op (--check exits 0, bytes identical)", rc == 0 and before == after)

    # the GM moves the Satyr Bard by hand (a later export says so); the organizer leaves it
    bard = where["B1aaaaaaaaaaaaaa"]
    doc = read(bard)
    doc["flags"][MODULE_ID]["folderPath"] = ["Encounters", "Grove"]
    moved_to = world / "Encounters" / "Grove" / bard.name
    moved_to.parent.mkdir(parents=True)
    moved_to.write_text(bridge.render(doc), encoding="utf-8")
    bard.unlink()
    rc = org.main(["--world", "testworld", "--index", str(worlds / "sheets.json"), "--quiet"])
    check("an actor the GM moved after filing stays where the GM put it", rc == 0 and moved_to.exists() and read(moved_to)["flags"][MODULE_ID]["folderPath"] == ["Encounters", "Grove"])
    check("…its tags follow the new home, the origin tag is kept", read(moved_to)["flags"]["waluipedia-sheets"]["tags"][0] == "Encounters" and "A House Divided" in read(moved_to)["flags"]["waluipedia-sheets"]["tags"])
    rc = org.main(["--world", "testworld", "--index", str(worlds / "sheets.json"), "--quiet", "--force"])
    check("--force re-files it", rc == 0 and find(world, "B1aaaaaaaaaaaaaa").relative_to(world).parent.as_posix() == "Bestiary/Fey")

    # the website learns about the Black Bear: next pass promotes it out of the Bestiary
    index["sheets"].append({"id": "black_bear", "name": "Black Bear", "source": "live", "kind": "npc", "group": "Rakasha & the Feywild", "party": False,
                            "file": "actors/worlds/testworld/Bestiary/Beast/" + where["E1aaaaaaaaaaaaaa"].name})
    (worlds / "sheets.json").write_text(json.dumps(index), encoding="utf-8")
    rc = org.main(["--world", "testworld", "--index", str(worlds / "sheets.json"), "--quiet"])
    bear = find(world, "E1aaaaaaaaaaaaaa")
    check("a new article moves an actor the organizer filed out of the Bestiary into its group", rc == 0 and bear.relative_to(world).parent.as_posix() == "Rakasha & the Feywild"
          and read(bear)["flags"]["waluipedia-sheets"]["organized"]["basis"] == "website")

    # combine paints the folders from the scheme
    payload, dupes = bridge.combine([str(world)], world="testworld")
    by_path = {" / ".join(f["path"]): f for f in payload["folders"]}
    check("combine: folder colours + descriptions from the scheme, folderStyles map in the packet",
          by_path["Players"]["color"] == scheme["players"]["color"] and by_path["Bestiary"]["description"]
          and by_path["Bestiary / Fey"]["color"] == scheme["bestiary"]["types"]["fey"] and by_path["Iron Legion"]["color"] == scheme["groups"]["Iron Legion"]["color"]
          and payload["folderStyles"]["Koopa Troop"]["color"] == scheme["groups"]["Koopa Troop"]["color"] and by_path["Encounters"]["color"] is None if "Encounters" in by_path else True)
    cast_like, _ = bridge.combine([str(world)], world="x", folder_prefix="Waluipedia Cast")
    cast_paths = {" / ".join(f["path"]): f for f in cast_like["folders"]}
    check("combine: a group under one parent folder (the cast packet's Waluipedia Cast / <group>) is coloured too, the parent is not",
          cast_paths["Waluipedia Cast / Iron Legion"]["color"] == scheme["groups"]["Iron Legion"]["color"] and cast_paths["Waluipedia Cast"]["color"] is None)

    # identifiers: split repairs, check refuses
    export = {"format": "waluipedia-actors/1", "exportedFrom": "idworld", "folders": [], "actors": [
        actor("Eager", "VudZ3W313Y4FILs0", typ="character", items=[
            {"_id": "R1aaaaaaaaaaaaaa", "name": "Toad — Eager Variant", "type": "race", "system": {"identifier": "toad-—-eager-variant"}},
            {"_id": "Q1aaaaaaaaaaaaaa", "name": "Dead Person's Shoes", "type": "equipment", "system": {"identifier": "dead-person's-shoes"}},
            {"_id": "C1aaaaaaaaaaaaaa", "name": "Fighter", "type": "class", "system": {"identifier": "fighter"}},
        ])]}
    (base / "idworld-all-actors.json").write_text(json.dumps(export), encoding="utf-8")
    bad_dir = base / "bad"
    bad_dir.mkdir()
    write(bad_dir, "", export["actors"][0])
    count, errors, warnings = bridge.check([str(bad_dir)])
    check("check: an invalid identifier is an error that names the expected slug", len(errors) == 2 and all("dnd5e rejects" in e for e in errors) and any("'toad-eager-variant'" in e for e in errors), str(errors))
    written, pruned, man2 = bridge.split(str(base / "idworld-all-actors.json"), str(base / "idmirror"))
    fixed = read(written[0])
    idents = [it["system"]["identifier"] for it in fixed["items"]]
    check("split: repairs them the way dnd5e slugifies and records it in the manifest",
          idents == ["toad-eager-variant", "dead-persons-shoes", "fighter"] and len(man2["identifiersRepaired"]) == 2 and man2["identifiersRepaired"][0]["to"] == "toad-eager-variant", str(idents))
    count, errors, warnings = bridge.check([str(base / "idmirror")])
    check("…after which check is clean", not errors)
    check("slug_identifier: NFKD, apostrophes, em dashes, dots, double dashes", bridge.slug_identifier("Disaster Inc. Catastrophe Scout") == "disaster-inc-catastrophe-scout"
          and bridge.slug_identifier("Wild Surge — Unstable Aura") == "wild-surge-unstable-aura" and bridge.slug_identifier("Éclair à la crème") == "eclair-a-la-creme"
          and bridge.slug_identifier("fighter (2014)") == "fighter-2014")

    # the sanitizer rule (the intake chain) agrees
    san = load("sanitize_foundry_actor", "tools/sanitize-foundry-actor.py")
    rep = san.Report()
    doc = json.loads(json.dumps(export["actors"][0]))
    san.rule_identifiers(doc, rep, None)
    check("sanitizer: rule_identifiers is fatal, fixes the same way", rep.fatal_count == 2 and [it["system"]["identifier"] for it in doc["items"]] == ["toad-eager-variant", "dead-persons-shoes", "fighter"]
          and any(r is san.rule_identifiers for r in san.RULES))

# the real mirror
org.WORLDS = str(ROOT / "Reputation-Matrix2" / "actors" / "worlds")
rc = org.main(["--check", "--quiet"])
check("the midlands mirror is organized (organize --check passes)", rc == 0)
rows = org.plan(str(MIRROR), scheme, org.load_index())
roots = sorted({r["target"][0] for r in rows})
check("the real mirror: nothing at the root, every top folder is Players, Bestiary or a website group",
      all(r["target"] for r in rows) and set(roots) <= {"Players", "Bestiary"} | set(scheme["groups"]), str(roots))
check("the real mirror: the party's sheets sit in Players with pc tags", all("pc" in r["tags"] and r["target"] == ["Players"] for r in rows if r["doc"]["type"] == "character"))
check("the real mirror: every actor is tagged and coloured", all(r["tags"] and r["color"] for r in rows))
check("the real mirror: the manor adventure's named cast is Overgrown Manor, its creatures Bestiary", any(r["target"] == ["Overgrown Manor"] for r in rows) and sum(1 for r in rows if r["target"][0] == "Bestiary") >= 60)
check("the real mirror: Koopa Troop, Mushroom Regency, Mages' Guild filed by name", {"Koopa Troop", "Mushroom Regency & Kingdom", "Mages' Guild"} <= set(roots))
no_bad = subprocess.run([PY, str(BRIDGE_TOOL), "check", str(MIRROR)], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, encoding="utf-8", errors="replace")
check("the real mirror: bridge check passes (no invalid identifiers left)", no_bad.returncode == 0, no_bad.stdout.splitlines()[-1] if no_bad.stdout else "")
cast = json.loads((ROOT / "Reputation-Matrix2" / "actors" / "cast" / "import.json").read_text(encoding="utf-8"))
check("the cast packet: folders coloured per website group, actors tagged", sum(1 for f in cast["folders"] if f.get("color")) >= 15
      and all(a["flags"]["waluipedia-sheets"].get("tags") for a in cast["actors"]) and cast.get("folderStyles"))

print(f"organize-actors: {len(oks)} ok, {len(fails)} failed")
for f in fails:
    print("  FAIL " + f)
sys.exit(1 if fails else 0)
