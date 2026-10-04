#!/usr/bin/env python3
"""The character-sheet suite and the player-sheet promotion — the pieces that
run under start.py (no server needed).

Loads tools/sheets-suite.py and tools/promote-player-sheets.py as modules and
proves: export discovery (world id off the file name, exportedAt off the
file head, newest first, Downloads copies included), the staleness rule the
split step uses, the appliesTo filter on changes files, the promoted sheets
in the midlands mirror (character type, live id, folder, ownership kept,
ledger XP, promotion record), the rule that nothing under Players/ is an
NPC statblock, the spoils that reached the sheets, start.py's wiring
(tick, light, button, flags, CORS header) and finally the suite's own
--check pass.

    python3 tools/tests/test-sheets-suite.py
"""
import importlib.util
import json
import os
import subprocess
import sys
import tempfile
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
PY = sys.executable


def load(name, rel):
    spec = importlib.util.spec_from_file_location(name, ROOT / rel)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


suite = load("sheets_suite", "tools/sheets-suite.py")
promote = load("promote_player_sheets", "tools/promote-player-sheets.py")

fails, oks = [], []


def check(label, cond, extra=""):
    (oks if cond else fails).append(label + (f" — {extra}" if extra and not cond else ""))


def read(path):
    with open(path, encoding="utf-8") as fh:
        return json.load(fh)


# ---- export discovery -----------------------------------------------------
check("world id comes off the export file name", suite.export_world("/x/midlands-all-actors.json") == "midlands"
      and suite.export_world("/x/midlands-all-actors (2).json") == "midlands" and suite.export_world("/x/Players.json") is None)
with tempfile.TemporaryDirectory() as tmp:
    old = os.path.join(tmp, "midlands-all-actors.json")
    new = os.path.join(tmp, "midlands-all-actors (1).json")
    other = os.path.join(tmp, "shadeward-all-actors.json")
    for p, stamp in ((old, "2026-10-01T10:00:00.000Z"), (new, "2026-10-04T17:21:43.770Z"), (other, "2026-10-05T00:00:00.000Z")):
        with open(p, "w", encoding="utf-8") as fh:
            json.dump({"format": "waluipedia-actors/1", "exportedFrom": suite.export_world(p), "exportedAt": stamp, "actors": []}, fh)
    check("exportedAt is read off the file head", suite.export_stamp(new) == "2026-10-04T17:21:43.770Z")
    found = suite.find_exports("midlands", downloads=tmp)
    check("find_exports lists Downloads copies for the world, newest first, never another world",
          [os.path.basename(p) for p, _ in found if p.startswith(tmp)] == ["midlands-all-actors (1).json", "midlands-all-actors.json"])
    bare = os.path.join(tmp, "bare-all-actors.json")
    with open(bare, "w", encoding="utf-8") as fh:
        json.dump([{"name": "x", "type": "npc"}], fh)
    check("an export without exportedAt falls back to its mtime as an ISO stamp", suite.export_stamp(bare).endswith("Z") and suite.export_stamp(bare)[:4].isdigit())
check("a newer export is stale against the mirror; the same stamp is not; no manifest is always stale",
      suite.export_is_newer("2026-10-04T17:21:43.770Z", "2026-10-04T17:21:43.769Z")
      and not suite.export_is_newer("2026-10-04T17:21:43.770Z", "2026-10-04T17:21:43.770Z")
      and suite.export_is_newer("2026-10-04T17:21:43.770Z", None))
check("the repo-root export is the mirror's export (the committed input matches the committed mirror)",
      suite.find_exports("midlands", downloads="") and not suite.export_is_newer(suite.find_exports("midlands", downloads="")[0][1], suite.mirror_stamp("midlands")))

# ---- changes files --------------------------------------------------------
applying = [os.path.basename(p) for p in suite.changes_for("midlands")]
check("the grove spoils file applies to the current midlands export", "2026-10-04-grove-spoils.json" in applying)
spoils = read(ROOT / "Reputation-Matrix2/actors/changes/2026-10-04-grove-spoils.json")
check("the spoils file is scoped to the export it was written against",
      spoils["appliesTo"]["world"] == "midlands" and spoils["appliesTo"]["exportedAtOrBefore"] == suite.mirror_stamp("midlands"))
check("the spoils file sets no XP (the ledger pin owns that)", not any("set" in c for c in spoils["changes"]))
check("packets are git-ignored build artefacts",
      "Reputation-Matrix2/actors/worlds/*/import.json" in (ROOT / ".gitignore").read_text(encoding="utf-8")
      and "Reputation-Matrix2/actors/worlds/*/players-import.json" in (ROOT / ".gitignore").read_text(encoding="utf-8"))

# ---- the promoted sheets --------------------------------------------------
mirror = ROOT / "Reputation-Matrix2/actors/worlds/midlands"
players = mirror / "Players"
by_id = {}
for p in players.glob("fvtt-Actor-*.json"):
    doc = read(p)
    by_id[doc["_id"]] = (p, doc)
check("nothing under Players/ is an NPC statblock except the companions",
      all(d["type"] == "character" or d["name"] in promote.COMPANIONS for _, d in by_id.values()))
check("Wario's Motorbike is the only NPC-typed actor left in Players/",
      sorted(d["name"] for _, d in by_id.values() if d["type"] != "character") == ["Wario's Motorbike"])
export = read(ROOT / "midlands-all-actors.json")
exported = {a["_id"]: a for a in export["actors"]}
xp = promote.B.load_xp_summary()
for promo in promote.PROMOTIONS:
    aid, name = promo["id"], promo["name"]
    live = by_id.get(aid)
    check(f"{name}: promoted sheet sits in Players/ under the live id", live is not None and live[1]["type"] == "character")
    if not live:
        continue
    path, doc = live
    src = exported[aid]
    check(f"{name}: the export had him as an NPC", src["type"] == "npc")
    check(f"{name}: ownership kept from the world (the players keep access)", doc["ownership"] == src["ownership"])
    check(f"{name}: the GM's art kept", doc["img"] == src["img"] and doc["prototypeToken"]["texture"]["src"] == src["prototypeToken"]["texture"]["src"])
    check(f"{name}: token linked to the actor", doc["prototypeToken"]["actorLink"] is True)
    check(f"{name}: folderPath flag says Players", doc["flags"]["waluipedia-mass-import"]["folderPath"] == ["Players"])
    rec = (doc["flags"].get("waluipedia-sheets") or {}).get("promoted") or {}
    check(f"{name}: promotion record names the mode, tool and ledger key", rec.get("mode") == promo["mode"] and rec.get("tool") == "tools/promote-player-sheets.py" and rec.get("ledger") == promo["ledger"])
    check(f"{name}: XP is the ledger's", doc["system"]["details"]["xp"]["value"] == int(xp[promo["ledger"]]["currentXP"]))
    classes = {it["name"]: it["system"].get("levels") for it in doc["items"] if it["type"] == "class"}
    want = promo.get("classes") or {promo["build"][0]: promo["level"]}
    check(f"{name}: class levels as promoted ({want})", classes == want, str(classes))
    details = doc["system"]["details"]
    item_ids = {it["_id"] for it in doc["items"]}
    check(f"{name}: species / background / class refs point at items on the sheet",
          details.get("race") in item_ids and details.get("background") in item_ids and details.get("originalClass") in item_ids)
    check(f"{name}: no NPC-only detail keys survive", not any(k in details for k in ("cr", "habitat", "treasure")))
salam = by_id["2TkQ7lDU0DJBrx9J"][1]
check("Salam keeps his statblock kit next to the new class items",
      [it["name"] for it in salam["items"] if it["type"] in ("weapon", "equipment", "consumable")] == ["Light Crossbow", "Leather Armor", "Torch", "Bolts"])
check("Salam: standard array, saves and class HP as recorded",
      {k: v["value"] for k, v in salam["system"]["abilities"].items()} == {"str": 12, "dex": 15, "con": 13, "int": 10, "wis": 14, "cha": 8}
      and [k for k, v in salam["system"]["abilities"].items() if v["proficient"]] == ["str", "dex"]
      and salam["system"]["attributes"]["hp"]["max"] == 25)
check("Salam: the assumptions are written into the biography for the player", "Promoted from an NPC statblock" in salam["system"]["details"]["biography"]["value"])
check("Salam: the NPC automation flag is gone", "5e-npc-combat-automation" not in salam["flags"])
bowser = by_id["9u5pnP0zaqw8AQQv"][1]
check("Bowser: the Darkland warlord statblock is untouched", read(mirror / "fvtt-Actor-bowser-warlord-of-darkland-d1qwl5RJ3yk6THBe.json")["type"] == "npc")
check("Bowser: the GM's duplicate became the intake PC sheet (Tortle Fighter 8)", any(it["type"] == "race" and it["name"] == "Tortle" for it in bowser["items"]))
wario = by_id["dEhGeFofEfnIG24J"][1]
check("Wario: Barbarian pinned to the ledger level, not the intake's guess", wario["system"]["details"]["xp"]["value"] == 18370 and xp["wario"]["level"] == 6)
manifest = read(mirror / "manifest.json")
rows = {r["_id"]: r for r in manifest["actors"]}
check("manifest rows follow the promoted actors", all(rows[p["id"]]["type"] == "character" and rows[p["id"]]["file"].startswith("Players/") for p in promote.PROMOTIONS))

# ---- every player sheet at ledger XP; the spoils --------------------------
for name, key in promote.LEDGER.items():
    doc = next((d for _, d in by_id.values() if d["name"] == name), None)
    check(f"{name}: sheet XP == ledger ({xp[key]['currentXP']})", doc is not None and doc["system"]["details"]["xp"]["value"] == int(xp[key]["currentXP"]))
green = next(read(p) for p in mirror.rglob("fvtt-Actor-*.json") if read(p)["name"] == "Green T")
check("Green T is left as the GM runs him (off-ledger, listed as exempt)", green["system"]["details"]["xp"]["value"] == 100000 and "Green T" in promote.LEDGER_EXEMPT)
eager = next(d for _, d in by_id.values() if d["name"] == "Eager")
sphere = [it for it in eager["items"] if it["name"] == "The Electric Sphere"]
check("Eager carries The Electric Sphere (trinket, flagged to the technology file)",
      len(sphere) == 1 and sphere[0]["type"] == "equipment" and sphere[0]["system"]["type"]["value"] == "trinket"
      and sphere[0]["flags"]["waluipedia"]["technology"] == "tech_grove_electric_sphere")
dan = next(d for _, d in by_id.values() if d["name"] == "Feyward Dan")
injury = [it for it in dan["items"] if it["name"].startswith("Injury: Sprained Thumb")]
check("Feyward Dan carries the row-59 injury as a feature flagged to the table",
      len(injury) == 1 and injury[0]["type"] == "feat" and injury[0]["flags"]["waluipedia"]["injury"]["roll"] == 59
      and injury[0]["flags"]["waluipedia"]["injury"]["table"] == "permanent_injury_d100")
lib = (ROOT / "Reputation-Matrix2/tools/item sheet examples/image paths.txt").read_text(encoding="utf-8", errors="replace").replace("\\", "/")
check("the new items use icons the repo can see", sphere[0]["img"] in lib and injury[0]["img"] in lib)

# ---- the sheets index -----------------------------------------------------
index = read(ROOT / "Reputation-Matrix2/data/sheets.json")
entry = {s["id"]: s for s in index["sheets"]}
check("the index resolves Bowser, Wario and Salam to live character sheets", all(entry[i]["source"] == "live" and entry[i]["kind"] == "pc" for i in ("bowser", "wario", "salam")))
check("Mario and Luigi keep their hand-authored PC sheets with the GM's statblocks as alternates",
      all(entry[i]["source"] == "generated" and entry[i]["kind"] == "pc" and any(a["source"] == "live" and a["kind"] == "npc" for a in entry[i]["alternates"]) for i in ("mario", "luigi")))
check("every public live sheet is a PC sheet apart from the companions", all(s["kind"] == "pc" for s in index["sheets"] if s["party"] and s["source"] == "live" and s["id"] not in ("mossy", "usk")))

# ---- start.py wiring ------------------------------------------------------
start = (ROOT / "start.py").read_text(encoding="utf-8")
check("start.py remembers a 'sheets' tick (default on)", '"sheets": True' in start and 'v_sheets' in start)
check("start.py launches tools/sheets-suite.py --watch and stops it with the rest", 'launch_sheets_suite' in start and '"--watch"' in start and 'stop_process(sheets_suite)' in start)
check("start.py shows a status light and an Open-the-sheets button", '("sheets", "character sheets")' in start and 'Open the sheets' in start and 'SHEETS_ROUTE = "#/sheets"' in start)
check("start.py serves with CORS so Foundry can fetch the packets", 'Access-Control-Allow-Origin' in start)
helptext = subprocess.run([PY, str(ROOT / "start.py"), "--help"], cwd=ROOT, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
check("start.py --help documents --sheets / --no-sheets", helptext.returncode == 0 and "--no-sheets" in helptext.stdout and "--sheets" in helptext.stdout)
readme = (ROOT / "README.md").read_text(encoding="utf-8")
check("README names the suite under start.py", "sheets-suite.py" in readme)

# ---- the suite's own check pass -------------------------------------------
t0 = time.time()
run = subprocess.run([PY, str(ROOT / "tools/sheets-suite.py"), "--check"], cwd=ROOT, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
check("tools/sheets-suite.py --check passes (nothing stale, nothing written)", run.returncode == 0 and "done" in run.stdout, run.stdout[-600:])
pro = subprocess.run([PY, str(ROOT / "tools/promote-player-sheets.py"), "--check"], cwd=ROOT, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
check("tools/promote-player-sheets.py --check passes and flags Hjumpik's pending level-up", pro.returncode == 0 and "Hjumpik" in pro.stdout and "level up in Foundry" in pro.stdout, pro.stdout[-400:])

print(f"sheets suite: {len(oks)} ok, {len(fails)} failed ({time.time() - t0:.1f}s for the check passes)")
for f in fails:
    print("  FAIL " + f)
for o in oks:
    print("  ok   " + o)
sys.exit(1 if fails else 0)
