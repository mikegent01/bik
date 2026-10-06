#!/usr/bin/env python3
"""tools/organize-actors.py — the folders-and-tags pass of the sheets suite.

Builds a throw-away mirror (a GM folder tree, loose statblocks, a Players
folder) with a tiny sheet index, runs the organizer and proves: the website
groups win, name rules file the Koopa Troop, folder rules file the manor's
cast, generic creatures land in Bestiary / <type>, Players is never re-filed,
files move with their actors, the manifest follows, tags and colours are
written, a second pass is a no-op, the GM's later move is respected (and
--force overrides it), a later article promotes an actor out of the Bestiary,
identifiers are repaired by split / refused by check, folders below the
scheme's minimum fold into their parent / Elsewhere counting the cast and the
era packets too, an era packet's namesake is filed into the era folder, and
the real mirror is organized.

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
check("scheme: minimum 2 per folder, Elsewhere the fallback, the 955 BF era sub-folder named (year — event) with a colour, the Liberated Toads packet with its cohort sub-folders",
      scheme.get("minimum") == 2 and scheme.get("fallback") == "Elsewhere" and scheme["eras"]["peachs-castle-955"]["folder"] == "955 BF — Peach's Castle"
      and scheme["eras"]["peachs-castle-955"]["era"] == "955 BF" and scheme["eras"]["peachs-castle-955"]["color"]
      and scheme["packets"]["liberated-toads"]["folder"] == "Liberated Toads" and "Pond Patrol" in scheme["packets"]["liberated-toads"]["subfolders"])
ERA_FOLDER = scheme["eras"]["peachs-castle-955"]["folder"]
builder = load("build_character_sheets", "tools/build-character-sheets.py")
check("scheme: every website group of the builder has a colour",
      set(g for g, _ in builder.GROUPS) | {"Disaster Inc.", "Elsewhere"} <= set(scheme["groups"]), str(set(g for g, _ in builder.GROUPS) - set(scheme["groups"])))
colors = json.loads((ROOT / "Reputation-Matrix2" / "data" / "factionColors.json").read_text(encoding="utf-8"))
check("scheme: groups that name a faction take the site's factionColors.json colour",
      all(scheme["groups"][g]["color"].lower() == colors[scheme["groups"][g]["faction"]].lower()
          for g in scheme["groups"] if scheme["groups"][g].get("faction") in colors and g not in ("Disaster Inc.",)))

# ---- iconFixes: dead core icon paths renamed by the scheme, only to art the GM's Foundry has
_lib = org.BRIDGE.load_image_lib(org.BRIDGE.DEFAULT_IMAGE_LIB)
check("scheme: iconFixes name 10 dead icon paths; every replacement is in image paths.txt and no key is",
      len(scheme.get("iconFixes") or {}) == 10 and all(v in _lib for v in scheme["iconFixes"].values()) and not any(k in _lib for k in scheme["iconFixes"]))
_doc = {"name": "Midbus", "type": "npc", "img": "icons/skills/social/intimidation-impersonate.webp",
        "prototypeToken": {"texture": {"src": "icons/creatures/reptiles/turtle-shell-green.webp"}},
        "items": [{"name": "Body Slam", "type": "weapon", "img": "icons/skills/melee/strike-body-collision-red.webp"},
                  {"name": "Kept", "type": "feat", "img": "icons/magic/water/beam-ice-impact.webp"}]}
_fixes = org.icon_fixes(_doc, scheme, _lib)
check("icon_fixes lists the actor's art, the token's and each item's dead path with its replacement, nothing else",
      sorted(w for w, _, _ in _fixes) == ["img", "item:Body Slam", "token"] and all(n in _lib for _, _, n in _fixes), str(_fixes))
_fixed = org.apply_icon_fixes(_doc, _fixes)
check("apply_icon_fixes renames on a copy; a second pass finds nothing",
      _fixed["img"] == "icons/skills/social/intimidation-impressing.webp" and _fixed["prototypeToken"]["texture"]["src"] == "icons/creatures/reptiles/turtle-shell-glowing-green.webp"
      and _fixed["items"][0]["img"] == "icons/skills/melee/shield-block-bash-blue.webp" and _fixed["items"][1]["img"] == "icons/magic/water/beam-ice-impact.webp"
      and _doc["img"].endswith("impersonate.webp") and org.icon_fixes(_fixed, scheme, _lib) == [])
check("a replacement the library lacks is not applied (the table never points at art the GM does not have)",
      org.icon_fixes(_doc, dict(scheme, iconFixes={"icons/skills/melee/strike-body-collision-red.webp": "icons/nowhere/none.webp"}), _lib) == [])

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
    # the rule tests use a one-actor-per-folder world: run them with the real
    # scheme minus the folding (minimum 1); folding gets its own world below
    loose = dict(scheme, minimum=1)
    (base / "folders.json").write_text(json.dumps(loose), encoding="utf-8")
    ARGS = ["--world", "testworld", "--index", str(worlds / "sheets.json"), "--scheme", str(base / "folders.json")]

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
    # 1.9: a dnd5e character sheet does not make a player character — the roster (folders.json players.roster) does
    write(world, "", actor("Kirby", "C1aaaaaaaaaaaaaa", typ="character"))  # a GM NPC on a character sheet, at the root
    write(world, "Players", actor("Director Nobody", "N1aaaaaaaaaaaaaa", typ="character", folder_path=["Players"],
                                  flags={"waluipedia-sheets": {"organized": {"path": ["Players"], "basis": "website", "from": ["Iron Legion"]}}}))  # the old rule's doing
    write(world, "Players", actor("Sans", "Z1aaaaaaaaaaaaaa", typ="character", folder_path=["Players"]))  # the GM's own placement
    index["sheets"].append({"id": "kirby", "name": "Kirby", "source": "live", "kind": "pc", "group": "Dreamland", "party": False,
                            "file": "actors/worlds/testworld/fvtt-Actor-kirby-C1aaaaaaaaaaaaaa.json"})
    (worlds / "sheets.json").write_text(json.dumps(index), encoding="utf-8")

    rc = org.main(ARGS + ["--check", "--quiet"])
    check("--check on an unorganized mirror exits 1 and writes nothing", rc == 1 and find(world, "E1aaaaaaaaaaaaaa").parent == world)
    rc = org.main(ARGS + ["--quiet"])
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
    check("Bestiary / Beast; custom and blank creature types sit straight under Bestiary (no Other drawer)", rel["E1aaaaaaaaaaaaaa"] == "Bestiary/Beast" and rel["X1aaaaaaaaaaaaaa"] == "Bestiary" and rel["Y1aaaaaaaaaaaaaa"] == "Bestiary"
          and fp["X1aaaaaaaaaaaaaa"] == ["Bestiary"])
    check("emptied GM directories are removed", not (world / "A House Divided").exists())
    where2 = {i: find(world, i) for i in ["C1aaaaaaaaaaaaaa", "N1aaaaaaaaaaaaaa", "Z1aaaaaaaaaaaaaa"]}
    rel2 = {i: p.relative_to(world).parent.as_posix() for i, p in where2.items()}
    tags2 = {i: read(p)["flags"]["waluipedia-sheets"]["tags"] for i, p in where2.items()}
    check("1.9: a character sheet off the roster is an NPC — Kirby files into his website group, tagged npc, never Players",
          rel2["C1aaaaaaaaaaaaaa"] == "Dreamland" and tags2["C1aaaaaaaaaaaaaa"][:2] == ["Dreamland", "npc"], str((rel2, tags2)))
    check("1.9: an actor the organizer itself once filed into Players (the old 'character sheet = pc' rule) goes back where it came from",
          rel2["N1aaaaaaaaaaaaaa"] == "Iron Legion" and "pc" not in tags2["N1aaaaaaaaaaaaaa"], str((rel2["N1aaaaaaaaaaaaaa"], tags2["N1aaaaaaaaaaaaaa"])))
    check("1.9: an actor the GM put in Players stays (kept, tagged npc) — the bridge check is what reports it",
          rel2["Z1aaaaaaaaaaaaaa"] == "Players" and tags2["Z1aaaaaaaaaaaaaa"][:2] == ["Players", "npc"], str((rel2["Z1aaaaaaaaaaaaaa"], tags2["Z1aaaaaaaaaaaaaa"])))
    check("1.9: the roster names the player characters by live id (12 rows, every one with a website id; Green T off-ledger) and the companions (the motorbike, the Steel Defender)",
          len(scheme["players"]["roster"]) == 12 and all(r.get("actor") and r.get("character") and r.get("name") for r in scheme["players"]["roster"])
          and sum(1 for r in scheme["players"]["roster"] if r.get("ledger") is None) == 1 and {c["name"] for c in scheme["players"]["companions"]} == {"Wario's Motorbike", "Steel Defender"})

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
    check("manifest follows the moves", man["actorCount"] == 16 and "Bestiary / Fey" in man["folders"] and any(r["file"] == "Bestiary/Fey/" + where["B1aaaaaaaaaaaaaa"].name for r in man["actors"]) and man["exportedFrom"] == "testworld")

    before = {p: p.read_text(encoding="utf-8") for p in world.rglob("*.json")}
    rc = org.main(ARGS + ["--check", "--quiet"])
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
    rc = org.main(ARGS + ["--quiet"])
    check("an actor the GM moved after filing stays where the GM put it", rc == 0 and moved_to.exists() and read(moved_to)["flags"][MODULE_ID]["folderPath"] == ["Encounters", "Grove"])
    check("…its tags follow the new home, the origin tag is kept", read(moved_to)["flags"]["waluipedia-sheets"]["tags"][0] == "Encounters" and "A House Divided" in read(moved_to)["flags"]["waluipedia-sheets"]["tags"])
    rc = org.main(ARGS + ["--quiet", "--force"])
    check("--force re-files it", rc == 0 and find(world, "B1aaaaaaaaaaaaaa").relative_to(world).parent.as_posix() == "Bestiary/Fey")

    # the website learns about the Black Bear: next pass promotes it out of the Bestiary
    index["sheets"].append({"id": "black_bear", "name": "Black Bear", "source": "live", "kind": "npc", "group": "Rakasha & the Feywild", "party": False,
                            "file": "actors/worlds/testworld/Bestiary/Beast/" + where["E1aaaaaaaaaaaaaa"].name})
    (worlds / "sheets.json").write_text(json.dumps(index), encoding="utf-8")
    rc = org.main(ARGS + ["--quiet"])
    bear = find(world, "E1aaaaaaaaaaaaaa")
    check("a new article moves an actor the organizer filed out of the Bestiary into its group", rc == 0 and bear.relative_to(world).parent.as_posix() == "Rakasha & the Feywild"
          and read(bear)["flags"]["waluipedia-sheets"]["organized"]["basis"] == "website")

    # combine paints the folders from the scheme
    payload, dupes = bridge.combine([str(world)], world="testworld", scheme=loose)
    by_path = {" / ".join(f["path"]): f for f in payload["folders"]}
    check("combine: folder colours + descriptions from the scheme, folderStyles map in the packet",
          by_path["Players"]["color"] == scheme["players"]["color"] and by_path["Bestiary"]["description"]
          and by_path["Bestiary / Fey"]["color"] == scheme["bestiary"]["types"]["fey"] and by_path["Iron Legion"]["color"] == scheme["groups"]["Iron Legion"]["color"]
          and payload["folderStyles"]["Koopa Troop"]["color"] == scheme["groups"]["Koopa Troop"]["color"] and by_path["Encounters"]["color"] is None if "Encounters" in by_path else True)
    cast_like, _ = bridge.combine([str(world)], world="x", folder_prefix="Some Prefix", scheme=loose)
    cast_paths = {" / ".join(f["path"]): f for f in cast_like["folders"]}
    check("combine: a group under a --folder prefix is coloured too, the prefix folder is not",
          cast_paths["Some Prefix / Iron Legion"]["color"] == scheme["groups"]["Iron Legion"]["color"] and cast_paths["Some Prefix"]["color"] is None)

    # ---- folding + eras, with the real scheme (minimum 2)
    fold_world = worlds / "foldworld"
    fold_world.mkdir()
    (fold_world / "manifest.json").write_text(json.dumps(dict(manifest, exportedFrom="foldworld")), encoding="utf-8")
    fold_index = {"sheets": [
        {"id": "koopa_cmdr", "name": "Koopa Commander", "source": "generated", "kind": "npc", "group": "Koopa Troop", "file": "actors/cast/fvtt-Actor-koopa_cmdr.json"},
        {"id": "pirate", "name": "Pirate", "source": "live", "kind": "npc", "group": "Dark Shores", "party": False,
         "file": "actors/worlds/foldworld/fvtt-Actor-pirate-P2aaaaaaaaaaaaaa.json"},
        {"id": "bowser", "name": "Bowser", "source": "live", "kind": "pc", "group": "Koopa Troop", "party": True, "file": "actors/worlds/foldworld/Players/fvtt-Actor-bowser-O2aaaaaaaaaaaaaa.json",
         "versions": [{"version": "bowser--955-bf", "era": "955 BF", "file": "actors/cast/eras/fvtt-Actor-bowser--955-bf.json"}]},
    ]}
    (worlds / "fold-sheets.json").write_text(json.dumps(fold_index), encoding="utf-8")
    FARGS = ["--world", "foldworld", "--index", str(worlds / "fold-sheets.json")]
    write(fold_world, "Creatures", actor("Satyr", "F1aaaaaaaaaaaaaa", ctype="fey", folder_path=["Creatures"]))
    write(fold_world, "Creatures", actor("Dryad", "F2aaaaaaaaaaaaaa", ctype="fey", folder_path=["Creatures"]))
    write(fold_world, "Creatures", actor("Ochre Jelly", "J2aaaaaaaaaaaaaa", ctype="ooze", folder_path=["Creatures"]))
    write(fold_world, "Creatures", actor("Eyes that Bite", "N2aaaaaaaaaaaaaa", ctype="aberration", folder_path=["Creatures"]))
    write(fold_world, "", actor("Pirate", "P2aaaaaaaaaaaaaa"))
    write(fold_world, "", actor("Goomba (Scout)", "K2aaaaaaaaaaaaaa"))
    write(fold_world, "", actor("Koopatrol", "T2aaaaaaaaaaaaaa"))
    write(fold_world, "Players", actor("Bowser", "O2aaaaaaaaaaaaaa", typ="character", folder_path=["Players"]))
    rc = org.main(FARGS + ["--quiet"])
    fw = {i: find(fold_world, i) for i in ["F1aaaaaaaaaaaaaa", "F2aaaaaaaaaaaaaa", "J2aaaaaaaaaaaaaa", "N2aaaaaaaaaaaaaa", "P2aaaaaaaaaaaaaa", "K2aaaaaaaaaaaaaa", "T2aaaaaaaaaaaaaa", "O2aaaaaaaaaaaaaa"]}
    frel = {i: p.relative_to(fold_world).parent.as_posix() for i, p in fw.items()}
    fsheets = {i: read(p)["flags"]["waluipedia-sheets"] for i, p in fw.items()}
    check("fold: two fey keep Bestiary / Fey; the lone ooze and aberration sit straight under Bestiary",
          rc == 0 and frel["F1aaaaaaaaaaaaaa"] == "Bestiary/Fey" and frel["F2aaaaaaaaaaaaaa"] == "Bestiary/Fey" and frel["J2aaaaaaaaaaaaaa"] == "Bestiary" and frel["N2aaaaaaaaaaaaaa"] == "Bestiary", str(frel))
    check("fold: a lone top-level group goes to Elsewhere (Elsewhere's colour; the chip still names the website group)",
          frel["P2aaaaaaaaaaaaaa"] == "Elsewhere" and fsheets["P2aaaaaaaaaaaaaa"]["organized"]["path"] == ["Elsewhere"] and fsheets["P2aaaaaaaaaaaaaa"]["tags"][0] == "Dark Shores"
          and fsheets["P2aaaaaaaaaaaaaa"]["color"] == scheme["groups"]["Elsewhere"]["color"].upper(), str(fsheets["P2aaaaaaaaaaaaaa"]))
    check("fold: the generated cast counts — one Goomba + the cast's Koopa Commander keep Koopa Troop", frel["K2aaaaaaaaaaaaaa"] == "Koopa Troop")
    check("fold: the ooze's tag still names its creature type and origin", fsheets["J2aaaaaaaaaaaaaa"]["tags"] == ["Bestiary", "npc", "ooze", "Creatures"], str(fsheets["J2aaaaaaaaaaaaaa"]["tags"]))
    check("era: the world's Koopatrol (a 955 packet namesake) is filed where the packet files it — its faction, then the era sub-folder — with the faction and era tags and the era colour",
          frel["T2aaaaaaaaaaaaaa"] == f"Koopa Troop/{ERA_FOLDER}" and fsheets["T2aaaaaaaaaaaaaa"]["organized"]["basis"] == "era"
          and fsheets["T2aaaaaaaaaaaaaa"]["tags"][:1] == ["Koopa Troop"] and "955 BF" in fsheets["T2aaaaaaaaaaaaaa"]["tags"]
          and fsheets["T2aaaaaaaaaaaaaa"]["color"] == scheme["eras"]["peachs-castle-955"]["color"].upper(), str(fsheets["T2aaaaaaaaaaaaaa"]))
    check("era: Players still wins over the era rule (Bowser stays a player)", frel["O2aaaaaaaaaaaaaa"] == "Players")
    rc = org.main(FARGS + ["--check", "--quiet"])
    check("fold: a second pass is a no-op", rc == 0)
    # the website learns about the Dryad: it leaves Bestiary / Fey, and the Satyr — now alone — follows to Bestiary
    fold_index["sheets"].append({"id": "dryad", "name": "Dryad", "source": "live", "kind": "npc", "group": "Rakasha & the Feywild", "party": False,
                                 "file": "actors/worlds/foldworld/Bestiary/Fey/" + fw["F2aaaaaaaaaaaaaa"].name})
    fold_index["sheets"].append({"id": "satyr2", "name": "Satyr Piper", "source": "generated", "kind": "npc", "group": "Rakasha & the Feywild", "file": "actors/cast/fvtt-Actor-satyr2.json"})
    (worlds / "fold-sheets.json").write_text(json.dumps(fold_index), encoding="utf-8")
    rc = org.main(FARGS + ["--quiet"])
    satyr = find(fold_world, "F1aaaaaaaaaaaaaa")
    dryad = find(fold_world, "F2aaaaaaaaaaaaaa")
    check("fold: re-filing cascades — the Dryad joins its group, the lone Satyr folds up to Bestiary, origin tags survive both moves",
          rc == 0 and dryad.relative_to(fold_world).parent.as_posix() == "Rakasha & the Feywild" and satyr.relative_to(fold_world).parent.as_posix() == "Bestiary"
          and read(satyr)["flags"]["waluipedia-sheets"]["organized"]["from"] == ["Creatures"] and "Creatures" in read(satyr)["flags"]["waluipedia-sheets"]["tags"], str(read(satyr)["flags"]["waluipedia-sheets"]))
    rc = org.main(FARGS + ["--check", "--quiet"])
    check("fold: …and that is stable too", rc == 0)
    fold_pop = {"a": ["Bestiary", "Ooze"], "b": ["Lonely"], "c": ["Players"], "d": ["Koopa Troop", ERA_FOLDER], "d2": ["Koopa Troop"], "e": ["Elsewhere"], "f": ["Bestiary"], "g": []}
    folded = bridge.fold_singletons(fold_pop, scheme)
    check("fold_singletons: pure — sub-folder (a lone era sub-folder too) to parent, lone group to Elsewhere, Players / Bestiary / Elsewhere / root untouched",
          folded == {"a": ["Bestiary"], "b": ["Elsewhere"], "c": ["Players"], "d": ["Koopa Troop"], "d2": ["Koopa Troop"], "e": ["Elsewhere"], "f": ["Bestiary"], "g": []}, str(folded))

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
check("the real mirror: nothing at the root, every top folder is Players, Bestiary or a website group (the eras sit under their factions)",
      all(r["target"] for r in rows) and set(roots) <= {"Players", "Bestiary"} | set(scheme["groups"]), str(roots))
counts = {}
for r in rows:
    counts[tuple(r["target"])] = counts.get(tuple(r["target"]), 0) + 1
check("the real mirror: no Bestiary sub-folder holds a single creature; the 955 BF namesakes sit in their factions' era sub-folder (Koopatrol under Koopa Troop; Peach, Toadsworth and the brothers' past selves under Mushroom Regency & Kingdom)",
      all(n >= 2 for p, n in counts.items() if p[0] == "Bestiary" and len(p) > 1)
      and {r["doc"]["name"] for r in rows if r["target"] == ["Koopa Troop", ERA_FOLDER]} >= {"Koopatrol", "Bowser (955 BF)"}
      and {r["doc"]["name"] for r in rows if r["target"] == ["Mushroom Regency & Kingdom", ERA_FOLDER]} >= {"Princess Peach (955 BF)", "Toadsworth the Elder, Royal Chamberlain (955 BF)", "Mario (955 BF)", "Luigi (955 BF)"}, str(counts))
roster = bridge.load_roster(scheme)
by_id = {r["doc"].get("_id"): r for r in rows}
check("the real mirror: the twelve roster characters sit in Players with pc tags (basis roster, no filing record)",
      len(roster["rows"]) == 12 and all(by_id.get(a) and "pc" in by_id[a]["tags"] and by_id[a]["target"] == ["Players"] and by_id[a]["basis"] == "roster" for a in roster["ids"]),
      str([(a, by_id.get(a, {}).get("target"), by_id.get(a, {}).get("tags")) for a in roster["ids"]]))
check("the real mirror: nobody else is a pc — the GM's character-sheet NPCs (Kirby, Sans, Mario) are tagged npc and filed by the rules, not into Players",
      not any("pc" in r["tags"] for r in rows if r["doc"].get("_id") not in roster["ids"])
      and all(r["target"] != ["Players"] for r in rows if r["doc"]["type"] == "character" and r["doc"].get("_id") not in roster["ids"])
      and sum(1 for r in rows if r["doc"]["type"] == "character" and r["doc"].get("_id") not in roster["ids"]) >= 30,
      str([(r["doc"]["name"], r["target"]) for r in rows if r["doc"]["type"] == "character" and r["doc"].get("_id") not in roster["ids"]][:8]))
check("the real mirror: Players holds the roster and its companions only", all(r["doc"].get("_id") in roster["ids"] or r["doc"].get("_id") in roster["companions"] for r in rows if r["target"] == ["Players"]),
      str([r["doc"]["name"] for r in rows if r["target"] == ["Players"]]))
check("the real mirror: every actor is tagged and coloured", all(r["tags"] and r["color"] for r in rows))
check("the real mirror: the manor adventure's named cast is Overgrown Manor, its creatures Bestiary", any(r["target"] == ["Overgrown Manor"] for r in rows) and sum(1 for r in rows if r["target"][0] == "Bestiary") >= 60)
check("the real mirror: Koopa Troop and Mushroom Regency filed by name", {"Koopa Troop", "Mushroom Regency & Kingdom"} <= set(roots), str(sorted(roots)))
no_bad = subprocess.run([PY, str(BRIDGE_TOOL), "check", str(MIRROR)], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, encoding="utf-8", errors="replace")
check("the real mirror: bridge check passes (no invalid identifiers left)", no_bad.returncode == 0, no_bad.stdout.splitlines()[-1] if no_bad.stdout else "")
cast = json.loads((ROOT / "Reputation-Matrix2" / "actors" / "cast" / "import.json").read_text(encoding="utf-8"))
check("the cast packet: every folder coloured per website group, every actor tagged (the world has absorbed most of the cast; the Liberated Toads roster and the era versions remain generated)",
      cast["folders"] and all(f.get("color") for f in cast["folders"])
      and all(a["flags"]["waluipedia-sheets"].get("tags") for a in cast["actors"]) and cast.get("folderStyles"), str([(f["name"], f.get("color")) for f in cast["folders"]]))
cast_paths = {tuple(a["flags"][MODULE_ID]["folderPath"]) for a in cast["actors"]}
check("the cast packet: generated sheets file straight into their group (no Waluipedia Cast root), era versions into their era faction's era sub-folder (Bowser's under Koopa Troop, the brothers' under Mushroom Regency & Kingdom)",
      all(p[0] in scheme["groups"] and (len(p) == 1 or p[1] == ERA_FOLDER) for p in cast_paths)
      and ("Koopa Troop", ERA_FOLDER) in cast_paths and ("Mushroom Regency & Kingdom", ERA_FOLDER) in cast_paths
      and not any(p[0] == "Waluipedia Cast" for p in cast_paths), str(sorted(cast_paths))[:300])
check("the cast packet: era versions carry the era colour and the generated + era + both groups' tags (Bowser (955 BF): Koopa Troop first, Disaster Inc. kept)",
      all(a["flags"]["waluipedia-sheets"]["color"] == scheme["eras"]["peachs-castle-955"]["color"].upper() and {"generated", "955 BF"} <= set(a["flags"]["waluipedia-sheets"]["tags"])
          for a in cast["actors"] if a["flags"][MODULE_ID]["folderPath"][-1:] == [ERA_FOLDER])
      and any(a["flags"]["waluipedia-sheets"]["tags"][:1] == ["Koopa Troop"] and "Disaster Inc." in a["flags"]["waluipedia-sheets"]["tags"] for a in cast["actors"] if a["name"] == "Bowser (955 BF)"))

print(f"organize-actors: {len(oks)} ok, {len(fails)} failed")
for f in fails:
    print("  FAIL " + f)
sys.exit(1 if fails else 0)
