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
(tick, light, button, flags, CORS header), the publish step that puts the
packets, the module and the art into the Foundry Data folder the suite finds
(what the module's Sync button reads first) and finally the suite's own
--check pass.

    python3 tools/tests/test-sheets-suite.py
"""
import functools
import http.server
import importlib.util
import json
import os
import subprocess
import sys
import tempfile
import threading
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
    # v1.7: the module's export-back inside Foundry's Data is a source too (newest stamp wins)
    data = os.path.join(tmp, "Data")
    back = suite.export_back_dir(data, "midlands")
    check("export_back_dir is <Data>/npc/waluipedia/<world>/export (what the module writes to); None without a Data folder",
          back == os.path.join(data, "npc", "waluipedia", "midlands", "export") and suite.export_back_dir(None, "midlands") is None)
    os.makedirs(back)
    with open(os.path.join(back, "midlands-all-actors.json"), "w", encoding="utf-8") as fh:
        json.dump({"format": "waluipedia-actors/1", "exportedFrom": "midlands", "exportedAt": "2026-10-06T09:00:00.000Z", "exportedBy": "waluipedia-mass-import 1.7.0 (update Actor)", "actors": []}, fh)
    found2 = suite.find_exports("midlands", downloads=tmp, extra_dirs=[back])
    check("find_exports with the export-back folder: the module's newer export comes first, Downloads after, a missing folder is ignored",
          found2 and found2[0][0] == os.path.join(back, "midlands-all-actors.json") and found2[0][1] == "2026-10-06T09:00:00.000Z"
          and [os.path.basename(p) for p, _ in found2[1:] if p.startswith(tmp) and "export" not in p] == ["midlands-all-actors (1).json", "midlands-all-actors.json"]
          and suite.find_exports("midlands", downloads=tmp, extra_dirs=[os.path.join(tmp, "nope")]) == found)
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
check("one import carries everything: the world mirror, the generated cast and the era packets the scheme names, in that precedence",
      [os.path.relpath(d, suite.ACTORS).replace(os.sep, "/") for d in suite.packet_sources("midlands")] == ["worlds/midlands", "cast", "peachs-castle-955", "bowsers-castle-1035"])
everything = read(ROOT / "Reputation-Matrix2/actors/worlds/midlands/import.json")
names = {(a["name"].lower(), a["type"]) for a in everything["actors"]}
n_mirror = read(ROOT / "Reputation-Matrix2/actors/worlds/midlands/manifest.json")["actorCount"]
n_cast = read(ROOT / "Reputation-Matrix2/actors/cast/import.json")["actorCount"]
n_era = sum(read(ROOT / f"Reputation-Matrix2/actors/{d}/import.json")["actorCount"] for d in ("peachs-castle-955", "bowsers-castle-1035"))
omitted = everything.get("omitted") or []
check("…the built packet holds the live world + cast + the era packets (955 BF court, 1035 BF castle); an era copy the world already has (same name + type) is left out and listed",
      everything["actorCount"] == n_mirror + n_cast + n_era - len(omitted) and len(omitted) >= 10 and ("koopatrol", "npc") in names and ("bowser (955 bf)", "character") in names
      and all(o["keptFrom"] == "Reputation-Matrix2/actors/worlds/midlands" and o["file"].startswith(("Reputation-Matrix2/actors/peachs-castle-955/", "Reputation-Matrix2/actors/bowsers-castle-1035/")) for o in omitted)
      and len({(o["name"].lower(), o["type"]) for o in omitted} & names) == len(omitted), str(omitted)[:200])
check("…every folder in it is coloured (groups, Bestiary types, Players, the era) and none is a one-actor sub-folder",
      all(f.get("color") for f in everything["folders"])
      and not [f["name"] for f in everything["folders"] if len(f["path"]) > 1 and sum(1 for a in everything["actors"] if a["flags"]["waluipedia-mass-import"]["folderPath"] == f["path"]) < 2],
      str([f["name"] for f in everything["folders"] if not f.get("color")]))

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
warlord = next(iter(mirror.rglob("fvtt-Actor-bowser-warlord-of-darkland-d1qwl5RJ3yk6THBe.json")), None)
check("Bowser: the Darkland warlord statblock is untouched (filed under Koopa Troop by the organizer)", warlord is not None and read(warlord)["type"] == "npc" and warlord.parent.name == "Koopa Troop")
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
check("start.py has a remembered 'two-way with GitHub' tick and --git-sync that reach the suite as --git-sync",
      '"git_sync": False' in start and 'v_git' in start and '(["--git-sync"] if git_sync else [])' in start and "--git-sync" in helptext.stdout)
suitehelp = subprocess.run([PY, str(ROOT / "tools/sheets-suite.py"), "--help"], cwd=ROOT, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
check("sheets-suite --help documents --git-sync / --git-interval", suitehelp.returncode == 0 and "--git-sync" in suitehelp.stdout and "--git-interval" in suitehelp.stdout)
readme = (ROOT / "README.md").read_text(encoding="utf-8")
check("README names the suite under start.py", "sheets-suite.py" in readme)

# ---- the organize step: folders + tags the way the website sorts its cast ----
suite_src = (ROOT / "tools/sheets-suite.py").read_text(encoding="utf-8")
one_pass_src = suite_src[suite_src.find("def one_pass("):suite_src.find("# ----", suite_src.find("def one_pass("))]
check("the pass organizes after promote + changes and before check / build / combine (so the index and packets see the new folders)",
      suite.TOOLS.get("organize") == "tools/organize-actors.py"
      and 0 < one_pass_src.find('TOOLS["promote"]]') < one_pass_src.find("step_changes(") < one_pass_src.find('TOOLS["organize"]') < one_pass_src.find('"check", mirror') < one_pass_src.find('TOOLS["build"]') < one_pass_src.find("step_combine("))
check("--check runs the organizer read-only", '["--check"]' in one_pass_src.split('TOOLS["organize"]')[1].split("\n")[0])
# ---- the spoils step: the registry's holdings become a generated changes file before the changes step applies it ----
check("the pass generates the spoils file after promote and before the changes step (so the same pass applies it)",
      suite.TOOLS.get("spoils") == "tools/spoils-to-changes.py"
      and 0 < one_pass_src.find('TOOLS["promote"]]') < one_pass_src.find("step_spoils(") < one_pass_src.find("step_changes("))
check("--check runs the spoils tool read-only (the generated file must already be current)", '"--check"' in suite_src[suite_src.find("def step_spoils("):suite_src.find("def step_changes(")])
check("a filed spoil (data/inventory.json) is a watch input — the registry line alone re-runs the pass", suite.INVENTORY_JSON in suite.watch_inputs("midlands", downloads=os.devnull))
check("the generated spoils file is scoped to the current export and carries the registry flag on every item",
      (lambda d: d.get("appliesTo", {}).get("world") == "midlands" and d["appliesTo"]["exportedAtOrBefore"] == json.load(open(ROOT / "Reputation-Matrix2/actors/worlds/midlands/manifest.json", encoding="utf-8"))["exportedAt"]
       and all(it.get("flags", {}).get("waluipedia", {}).get("inventoryItem") for c in d["changes"] for it in c.get("addItems", [])))
      (json.load(open(ROOT / "Reputation-Matrix2/actors/changes/spoils-midlands.json", encoding="utf-8"))))
check("the scheme the organizer and combine read is committed", (ROOT / "Reputation-Matrix2/actors/folders.json").exists())

# ---- Windows: a piped stdout is cp1252 there, and cp1252 cannot spell "→" ----
# (the first run under start.py on Windows died twice on that arrow: the
# builder step after it had written everything, then the watcher itself)
check("the suite hands every child tool UTF-8 streams", suite.CHILD_ENV.get("PYTHONIOENCODING") == "utf-8" and suite.CHILD_ENV.get("PYTHONUTF8") == "1")
check("the suite decodes its children as UTF-8, never the code page", 'encoding="utf-8"' in (ROOT / "tools/sheets-suite.py").read_text(encoding="utf-8").split("def run(")[1].split("def ")[0])
builder_src = (ROOT / "tools/build-character-sheets.py").read_text(encoding="utf-8")
builder_main = builder_src[builder_src.rfind("def main("):]
check("the builder's own report lines survive a cp1252 terminal", all(
    all(ord(ch) < 128 or ch.encode("cp1252", errors="ignore") for ch in line)
    for line in builder_main.splitlines() if "print(" in line or line.strip().startswith('f"')))
check("start.py reads the suite as UTF-8 and tells it to speak UTF-8",
      'env["PYTHONIOENCODING"] = "utf-8"' in start and 'encoding="utf-8", errors="replace"' in start.split("def launch_sheets_suite")[1].split("def ")[0]
      and 'sys.stdout.reconfigure(line_buffering=True, errors="replace")' in start.split("def main(")[1])
# the watcher outlives a pass that blows up
_said = []
_orig_say, _orig_pass = suite.say, suite.one_pass
suite.say = _said.append
suite.one_pass = lambda *a, **k: (_ for _ in ()).throw(RuntimeError("boom in a step"))
try:
    survived = suite.guarded_pass("midlands", 8765, "") is False
finally:
    suite.say, suite.one_pass = _orig_say, _orig_pass
check("a crash inside a watched pass is reported, not fatal", survived and any("RuntimeError: boom in a step" in t for t in _said), " | ".join(_said)[:300])

# ---- publishing into the Foundry Data folder (what Sync reads first) -----
# The GM imported the wrong file by URL and nothing in Foundry's Data folder
# moved: until now the suite only wrote the repo. Now it finds the Data
# folder, puts the packets + the module + the art there, and Foundry's Sync
# button reads them without a URL.
with tempfile.TemporaryDirectory() as tmp:
    data = os.path.join(tmp, "FoundryVTT", "Data")
    for d in ("worlds", "systems", "modules"):
        os.makedirs(os.path.join(data, d))
    check("find_foundry_data: an explicit --foundry-data wins and is validated", suite.find_foundry_data(data, {}) == (data, "--foundry-data"))
    check("find_foundry_data: the folder above Data (what Foundry calls the user data path) is accepted", suite.find_foundry_data(os.path.join(tmp, "FoundryVTT"), {})[0] == data)
    check("find_foundry_data: WALUIPEDIA_FOUNDRY_DATA / FOUNDRY_VTT_DATA_PATH", suite.find_foundry_data(None, {"WALUIPEDIA_FOUNDRY_DATA": data}) == (data, "WALUIPEDIA_FOUNDRY_DATA")
          and suite.find_foundry_data(None, {"FOUNDRY_VTT_DATA_PATH": os.path.join(tmp, "FoundryVTT")}) == (data, "FOUNDRY_VTT_DATA_PATH"))
    wrong = suite.find_foundry_data(tmp, {})
    check("find_foundry_data: a path that is not a Data folder is reported, never written to", wrong[0] is None and "not a Foundry Data folder" in wrong[1], wrong[1])
    check("find_foundry_data: nothing given, nothing there -> (None, 'not found')", suite.find_foundry_data(None, {"HOME": tmp, "LOCALAPPDATA": tmp}) == (None, "not found") or suite.find_foundry_data(None, {"HOME": tmp, "LOCALAPPDATA": tmp})[1] == "found")
    cands = suite.foundry_data_candidates(home="C:/Users/mikeg", sysname="Windows", environ={"LOCALAPPDATA": "C:/Users/mikeg/AppData/Local"})
    check("the Windows default is %LOCALAPPDATA%/FoundryVTT/Data", cands == [os.path.join("C:/Users/mikeg/AppData/Local", "FoundryVTT", "Data")], cands)
    os.makedirs(os.path.join(tmp, "FoundryVTT", "Config"))
    with open(os.path.join(tmp, "FoundryVTT", "Config", "options.json"), "w", encoding="utf-8") as fh:
        json.dump({"dataPath": os.path.join(tmp, "elsewhere")}, fh)
    cands = suite.foundry_data_candidates(home=tmp, sysname="Windows", environ={"LOCALAPPDATA": tmp})
    check("a dataPath in Config/options.json is tried before the default", cands[0] == os.path.join(tmp, "elsewhere", "Data") and cands[1] == data, cands)

    before, ver, changed = suite.install_module(data, True)
    MODULE_VERSION = json.loads((ROOT / "Reputation-Matrix2" / "Foundry" / "mass_import" / "module.json").read_text(encoding="utf-8"))["version"]
    check("install_module copies the module into <Data>/modules/<id> (version from module.json)", before is None and ver == MODULE_VERSION and "module.json" in changed
          and os.path.exists(os.path.join(data, "modules", suite.MODULE_ID, "scripts", "mass-import.js")) and os.path.exists(os.path.join(data, "modules", suite.MODULE_ID, "macros", "sync-from-waluipedia.js")))
    check("…a second install changes nothing; the version read back is the repo's", suite.install_module(data, True) == (MODULE_VERSION, MODULE_VERSION, []))
    check("the installed module is the loader + core pair (1.6: the entry Foundry caches stays tiny; the core is fetched fresh on every load)",
          os.path.exists(os.path.join(data, "modules", suite.MODULE_ID, "scripts", "mass-import-core.js")) and "mass-import-core.js?v=" in open(os.path.join(data, "modules", suite.MODULE_ID, "scripts", "mass-import.js"), encoding="utf-8").read())

    # the probe: a throwaway HTTP server standing in for Foundry, serving that Data folder
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=data)
    handler.log_message = lambda *a, **k: None
    httpd = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    base = f"http://127.0.0.1:{httpd.server_address[1]}"
    try:
        check("probe_served_module reads the version the server really serves", suite.probe_served_module(base) == ("served", MODULE_VERSION), suite.probe_served_module(base))
        check("…a server without the module says 'missing' (Foundry reads another Data folder)", suite.probe_served_module(base + "/npc")[0] == "missing")
        check("…nothing listening says 'down'", suite.probe_served_module("http://127.0.0.1:9")[0] == "down")
        ok_line = suite.served_module_verdict("served", MODULE_VERSION, MODULE_VERSION, data, base)
        check("verdict, same version: relaunch instructions, no talk of another folder", len(ok_line) == 1 and "Return to Setup" in ok_line[0] and "Ctrl+F5" in ok_line[0] and "different Data folder" not in ok_line[0], ok_line)
        old_line = suite.served_module_verdict("served", "1.2.0", MODULE_VERSION, data, base)
        check("verdict, older version served: names both versions and says Foundry reads a different Data folder (+ how to point the suite at it)", "1.2.0" in old_line[0] and MODULE_VERSION in old_line[0] and "different Data folder" in old_line[0] and "--foundry-data" in old_line[0], old_line)
        check("verdict, module missing on the server: not reading this folder", "NO modules/" in suite.served_module_verdict("missing", None, MODULE_VERSION, data, base)[0])
        check("verdict, server down: says so and names the URL", base in suite.served_module_verdict("down", None, MODULE_VERSION, data, base)[0])
    finally:
        httpd.shutdown()
    check("foundry_server_url: --foundry-url, then WALUIPEDIA_FOUNDRY_URL, then Config/options.json's port, then 30000",
          suite.foundry_server_url("http://h:1/") == "http://h:1" and suite.foundry_server_url(None, environ={"WALUIPEDIA_FOUNDRY_URL": "http://h:2"}) == "http://h:2"
          and suite.foundry_server_url(None, environ={}, options={"port": 30123}) == "http://127.0.0.1:30123" and suite.foundry_server_url(None, environ={}, options={}) == "http://127.0.0.1:30000")
    with open(os.path.join(tmp, "FoundryVTT", "Config", "options.json"), "w", encoding="utf-8") as fh:
        json.dump({"dataPath": os.path.join(tmp, "elsewhere"), "port": 30555}, fh)
    check("foundry_options reads Config/options.json beside Data (port and dataPath)", suite.foundry_options(environ={"LOCALAPPDATA": tmp}, home=tmp, sysname="Windows").get("port") == 30555)

    # a fake checkout with a tiny world mirror + cast packet, so the paths/URLs in packets.json can be checked exactly
    froot = os.path.join(tmp, "bik")
    fworlds = os.path.join(froot, "Reputation-Matrix2", "actors", "worlds")
    world = "testworld"
    os.makedirs(os.path.join(fworlds, world, "Players"))
    os.makedirs(os.path.join(froot, "Reputation-Matrix2", "actors", "cast"))
    actor = {"_id": "Ea1aaaaaaaaaaaaa", "name": "Eager", "type": "character", "flags": {"waluipedia-mass-import": {"folderPath": ["Players"]}}, "system": {}, "items": []}
    for rel, doc in ((os.path.join(world, "manifest.json"), {"format": "waluipedia-actors/1", "exportedFrom": world, "exportedAt": "2026-10-04T17:21:43.770Z", "actors": [{"name": "Eager", "type": "character", "_id": actor["_id"], "file": "Players/fvtt-Actor-eager.json"}]}),
                     (os.path.join(world, "players-import.json"), {"format": "waluipedia-actors/1", "exportedFrom": world, "actors": [actor]}),
                     (os.path.join(world, "import.json"), {"format": "waluipedia-actors/1", "exportedFrom": world, "actors": [actor]}),
                     (os.path.join("..", "cast", "import.json"), {"format": "waluipedia-actors/1", "exportedFrom": "waluipedia", "actors": []})):
        with open(os.path.join(fworlds, rel), "w", encoding="utf-8") as fh:
            json.dump(doc, fh)
    os.makedirs(os.path.join(data, "npc", "waluipedia", "cast"), exist_ok=True)
    with open(os.path.join(data, "npc", "waluipedia", "cast", "packets.json"), "w", encoding="utf-8") as fh:
        fh.write("{}")
    saved = (suite.ROOT, suite.ACTORS, suite.WORLDS, suite.say)
    said = []
    suite.ROOT, suite.ACTORS, suite.WORLDS, suite.say = froot, os.path.dirname(fworlds), fworlds, said.append
    try:
        ok1 = suite.step_publish(world, True, 8765, data, "--foundry-data", install=False, images=False)
        first = list(said); said.clear()
        ok2 = suite.step_publish(world, True, 8765, data, "--foundry-data", install=False, images=False)
        second = list(said); said.clear()
        ok3 = suite.step_publish(world, False, 8765, data, "--foundry-data", install=False, images=False)
        checked = list(said); said.clear()
        ok4 = suite.step_publish(world, True, 8765, None, "not found", install=False, images=False)
        nowhere = list(said)
    finally:
        suite.ROOT, suite.ACTORS, suite.WORLDS, suite.say = saved
    dest = os.path.join(data, "npc", "waluipedia", world)
    check("step_publish copies players-import.json, import.json and manifest.json into <Data>/npc/waluipedia/<world>/", ok1 and all(os.path.exists(os.path.join(dest, f)) for f in ("players-import.json", "import.json", "manifest.json", "packets.json")), " | ".join(first))
    check("…and tells the GM where Sync reads (the one import.json)", any("Sync reads npc/waluipedia/testworld/import.json" in t for t in first) and any("import.json, players-import.json, manifest.json" in t for t in first), " | ".join(first))
    info = read(os.path.join(dest, "packets.json"))
    check("packets.json: stamps + digest + every other place the same packets live (launcher URLs; GitHub manifest + cast + era for the module to merge)",
          info["format"] == "waluipedia-packets/2" and info["world"] == world and info["exportedAt"] == "2026-10-04T17:21:43.770Z" and info["publishedBy"] == "tools/sheets-suite.py"
          and info["packets"] == {"everything": "import.json", "players": "players-import.json", "manifest": "manifest.json"} and len(info["digest"]) == 40
          and info["launcher"]["everything"] == f"http://127.0.0.1:8765/Reputation-Matrix2/actors/worlds/{world}/import.json"
          and info["launcher"]["players"] == f"http://127.0.0.1:8765/Reputation-Matrix2/actors/worlds/{world}/players-import.json"
          and info["github"]["manifest"] == f"https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/worlds/{world}/manifest.json"
          and info["github"]["cast"] == "https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/cast/import.json"
          and info["github"]["era"] == "https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/peachs-castle-955/import.json", json.dumps(info))
    check("packets.json uses forward slashes whatever the OS", "\\" not in json.dumps(info))
    check("no separate cast packet dir any more (the cast rides in import.json); a stale one from an older suite is removed",
          not os.path.exists(os.path.join(data, "npc", "waluipedia", "cast")) and any("removed the old cast/ packet dir" in t for t in first), " | ".join(first))
    check("a second pass with the same packets copies nothing, says so, and keeps publishedAt (the module syncs once per real change)",
          ok2 and any("packets unchanged" in t for t in second) and read(os.path.join(dest, "packets.json"))["publishedAt"] == info["publishedAt"], " | ".join(second))
    with open(os.path.join(fworlds, world, "import.json"), "w", encoding="utf-8") as fh:
        json.dump({"format": "waluipedia-actors/1", "exportedFrom": world, "actors": [actor, dict(actor, _id="Eb1aaaaaaaaaaaaa", name="Dan")]}, fh)
    time.sleep(1.1)
    suite.ROOT, suite.ACTORS, suite.WORLDS, suite.say = froot, os.path.dirname(fworlds), fworlds, said.append
    try:
        ok5 = suite.step_publish(world, True, 8765, data, "--foundry-data", install=False, images=False)
        third = list(said); said.clear()
    finally:
        suite.ROOT, suite.ACTORS, suite.WORLDS, suite.say = saved
    info3 = read(os.path.join(dest, "packets.json"))
    check("a changed packet moves the digest and publishedAt", ok5 and info3["digest"] != info["digest"] and info3["publishedAt"] != info["publishedAt"] and any("import.json" in t for t in third), " | ".join(third))
    check("under --check the publish step only reports what it would copy", ok3 and any("would copy" in t for t in checked) and not any("->" in t and "unchanged" in t for t in checked), " | ".join(checked))
    check("with no Data folder the step explains the fallbacks (launcher URL, then GitHub) and passes", ok4 and any("falls back to the launcher URL, then GitHub" in t and "--foundry-data" in t for t in nowhere), " | ".join(nowhere))
    check("step_publish never writes the repo", not os.path.exists(os.path.join(fworlds, world, "packets.json")))
    # 1.8: art by URL — packets.json names the base + a probe for the module; the publish step prunes rather than copies
    suite.ROOT, suite.ACTORS, suite.WORLDS, suite.say = froot, os.path.dirname(fworlds), fworlds, said.append
    try:
        ok6 = suite.step_publish(world, True, 8765, data, "--foundry-data", install=False, images=False, art_base="http://100.64.0.9:8765/")
        arted = list(said); said.clear()
    finally:
        suite.ROOT, suite.ACTORS, suite.WORLDS, suite.say = saved
    info6 = read(os.path.join(dest, "packets.json"))
    check("packets.json carries artBase + artProbe when the packets reference art by URL (and null without)",
          ok6 and info6["artBase"] == "http://100.64.0.9:8765/" and info6["artProbe"] == "http://100.64.0.9:8765/favicon.ico" and info3.get("artBase") is None, json.dumps(info6))
    check("art_base_for: default loopback on the site's port; --art-base / WALUIPEDIA_ART_BASE win, get a scheme and one trailing slash; '' / copy / off = None",
          suite.art_base_for(8765, environ={}) == "http://127.0.0.1:8765/" and suite.art_base_for(8765, "100.64.0.9:9000", environ={}) == "http://100.64.0.9:9000/"
          and suite.art_base_for(8765, None, environ={"WALUIPEDIA_ART_BASE": "https://gm.tail1234.ts.net:8765//"}) == "https://gm.tail1234.ts.net:8765/"
          and suite.art_base_for(8765, "copy", environ={}) is None and suite.art_base_for(8765, "", environ={"WALUIPEDIA_ART_BASE": "x"}) is None and suite.art_base_for(8765, None, environ={"WALUIPEDIA_ART_BASE": "off"}) is None)
    check("the suite wires the art base through combine (--art-base) and publishes with prune-images --write instead of install-images",
          '"combine"] + sources + ["--out", os.path.relpath(whole, ROOT), "--world", world] + art' in suite_src and '"prune-images", "--foundry-data", foundry_data, "--art-base", art_base, "--write"' in suite_src
          and "elif images:" in suite_src and '"install-images"' in suite_src and 'ap.add_argument("--art-copy"' in suite_src)

check("start.py passes --foundry-data through to the suite (flag, remembered pref, GUI entry)", '"--foundry-data", foundry_data' in start and '"foundry_data": ""' in start and 'v_fd = tk.StringVar' in start and 'parser.add_argument("--foundry-data"' in start)
check("start.py --help documents --foundry-data", "--foundry-data DIR" in helptext.stdout)

# ---- the suite's own check pass -------------------------------------------
t0 = time.time()
run = subprocess.run([PY, str(ROOT / "tools/sheets-suite.py"), "--check"], cwd=ROOT, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
check("tools/sheets-suite.py --check passes (nothing stale, nothing written)", run.returncode == 0 and "done" in run.stdout, run.stdout[-600:])
# the same pass with the parent's stdout forced to cp1252 (what Windows does
# to a redirected stdout): still green, still UTF-8 on the wire
cp = subprocess.run([PY, str(ROOT / "tools/sheets-suite.py"), "--check"], cwd=ROOT, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                    env=dict(os.environ, PYTHONIOENCODING="cp1252", PYTHONUTF8="0"))
try:
    cp_text = cp.stdout.decode("utf-8")
except UnicodeDecodeError:
    cp_text = ""
check("the check pass is green and UTF-8 even when the terminal is cp1252", cp.returncode == 0 and "done" in cp_text and "—" in cp_text and "UnicodeEncodeError" not in cp_text, cp.stdout[-400:].decode("utf-8", "replace"))
pro = subprocess.run([PY, str(ROOT / "tools/promote-player-sheets.py"), "--check"], cwd=ROOT, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
check("tools/promote-player-sheets.py --check passes and flags Hjumpik's pending level-up", pro.returncode == 0 and "Hjumpik" in pro.stdout and "level up in Foundry" in pro.stdout, pro.stdout[-400:])

# ---- v1.7: the git leg (a throwaway origin + two clones; the suite's helpers pointed at one of them)
with tempfile.TemporaryDirectory() as tmp:
    env = dict(os.environ, GIT_AUTHOR_NAME="t", GIT_AUTHOR_EMAIL="t@x", GIT_COMMITTER_NAME="t", GIT_COMMITTER_EMAIL="t@x", GIT_CONFIG_GLOBAL=os.devnull, GIT_CONFIG_NOSYSTEM="1")
    def g(cwd, *args):
        return subprocess.run(["git"] + list(args), cwd=cwd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, env=env)
    origin = os.path.join(tmp, "origin.git"); a = os.path.join(tmp, "a"); b = os.path.join(tmp, "b")
    g(tmp, "init", "-q", "--bare", "-b", "main", origin)
    g(tmp, "clone", "-q", origin, a)
    os.makedirs(os.path.join(a, "Reputation-Matrix2", "actors", "worlds", "midlands"))
    os.makedirs(os.path.join(a, "data"))
    with open(os.path.join(a, "README.md"), "w") as fh: fh.write("x\n")
    with open(os.path.join(a, "Reputation-Matrix2", "actors", "worlds", "midlands", "manifest.json"), "w") as fh: fh.write('{"exportedAt": "1"}\n')
    g(a, "add", "-A"); g(a, "commit", "-q", "-m", "init"); g(a, "push", "-q", "-u", "origin", "main")
    g(tmp, "clone", "-q", origin, b)
    g(b, "branch", "-q", "--set-upstream-to=origin/main", "main")
    # point the suite's git helpers at clone b
    saved = (suite.ROOT, suite.WORLDS, suite.ACTORS, suite.CHILD_ENV)
    suite.ROOT = b; suite.ACTORS = os.path.join(b, "Reputation-Matrix2", "actors"); suite.WORLDS = os.path.join(suite.ACTORS, "worlds"); suite.CHILD_ENV = env
    try:
        st = suite.git_state()
        check("git_state: branch, upstream, clean, in step", st["ok"] and st["branch"] == "main" and st["upstream"] == "origin/main" and st["dirty"] == [] and st["behind"] == 0 and st["ahead"] == 0, str(st))
        check("git_sync_paths names only what the suite writes (mirror, cast, sheets.json, root export, generated spoils file)",
              suite.git_sync_paths("midlands") == ["Reputation-Matrix2/actors/worlds/midlands", "Reputation-Matrix2/actors/cast", "data/sheets.json", "midlands-all-actors.json", "Reputation-Matrix2/actors/changes/spoils-midlands.json"])
        pulled, msg = suite.git_pull("midlands")
        check("git_pull: nothing to pull says so and does nothing", pulled is False and "current with origin/main" in msg, msg)
        # GitHub moved (clone a pushes a module bump): the suite fast-forwards
        with open(os.path.join(a, "README.md"), "a") as fh: fh.write("module 1.7\n")
        g(a, "commit", "-q", "-am", "module 1.7"); g(a, "push", "-q")
        pulled, msg = suite.git_pull("midlands")
        check("git_pull: a clean checkout behind origin is fast-forwarded (the module / tools follow GitHub by themselves)", pulled is True and "fast-forwarded 1 commit" in msg and open(os.path.join(b, "README.md")).read().endswith("module 1.7\n"), msg)
        # a foreign local change blocks the pull; the suite's own files do not
        with open(os.path.join(a, "README.md"), "a") as fh: fh.write("more\n")
        g(a, "commit", "-q", "-am", "more"); g(a, "push", "-q")
        with open(os.path.join(b, "notes.txt"), "w") as fh: fh.write("mine\n")
        pulled, msg = suite.git_pull("midlands")
        check("git_pull: uncommitted changes outside the suite's files block the pull (never clobber the GM's work)", pulled is False and "not pulling" in msg and "1 uncommitted" in msg, msg)
        os.remove(os.path.join(b, "notes.txt"))
        # the suite wrote the mirror: commit + push
        with open(os.path.join(b, "Reputation-Matrix2", "actors", "worlds", "midlands", "manifest.json"), "w") as fh: fh.write('{"exportedAt": "2"}\n')
        os.makedirs(os.path.join(b, "data"), exist_ok=True)
        with open(os.path.join(b, "data", "sheets.json"), "w") as fh: fh.write("{}\n")
        with open(os.path.join(b, "scratch.txt"), "w") as fh: fh.write("not ours\n")
        committed, pushed, msg = suite.git_commit_and_push("midlands", stamp="2026-10-06T09:00:00.000Z", push=False)
        log = g(b, "log", "-1", "--format=%s").stdout.strip()
        shown = g(b, "show", "--stat", "--format=", "HEAD").stdout
        check("git_commit_and_push: commits only the suite's paths with a telling message, leaves other files alone, can hold the push",
              committed and not pushed and "2 file(s)" in msg and log == "sheets-suite: midlands mirror from export 2026-10-06T09:00:00.000Z — 2 file(s)" and "manifest.json" in shown and "sheets.json" in shown and "scratch" not in shown and os.path.exists(os.path.join(b, "scratch.txt")), msg + " | " + log)
        os.remove(os.path.join(b, "scratch.txt"))
        # behind AND ahead: the pull rebases our commit, then the push lands
        pulled, msg = suite.git_pull("midlands")
        check("git_pull: behind with local suite commits → rebased, not refused", pulled is True and "rebased" in msg, msg)
        committed, pushed, msg = suite.git_commit_and_push("midlands")
        check("git_commit_and_push: nothing new to commit is said plainly", committed is False and "nothing of the suite's" in msg, msg)
        code = g(b, "push", "-q").returncode
        st = suite.git_state()
        g(a, "fetch", "-q")
        check("…and after the push origin has the suite's commit (the GitHub side of the two-way sync)", code == 0 and st["ahead"] == 0 and st["behind"] == 0 and "sheets-suite: midlands mirror" in g(a, "log", "origin/main", "--format=%s").stdout, str(st) + g(a, "log", "origin/main", "--format=%s").stdout)
    finally:
        suite.ROOT, suite.WORLDS, suite.ACTORS, suite.CHILD_ENV = saved

print(f"sheets suite: {len(oks)} ok, {len(fails)} failed ({time.time() - t0:.1f}s for the check passes)")
for f in fails:
    print("  FAIL " + f)
for o in oks:
    print("  ok   " + o)
sys.exit(1 if fails else 0)
