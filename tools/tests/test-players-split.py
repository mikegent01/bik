#!/usr/bin/env python3
"""Players.json intake: split coverage, Dan fix, Wario conversion, bike drift.

Guards the pipeline ``Players.json -> split-players.py -> rebuild-actors.py``:
every live entry is either split into a JSON-equal original or skipped for a
documented reason, and the one-time intake fixes are still in effect.
"""
from __future__ import annotations

import importlib.util
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
ACTORS = ROOT / "Reputation-Matrix2" / "actors"

oks: list[str] = []
fails: list[str] = []


def check(name: str, cond: bool, detail: str = "") -> None:
    (oks if cond else fails).append(name if cond else f"{name} :: {detail}")


def load_players() -> list:
    return json.loads((ROOT / "Players.json").read_text(encoding="utf-8"))


def load_actor_file(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def load_splitter():
    spec = importlib.util.spec_from_file_location(
        "split_players", ROOT / "tools" / "split-players.py"
    )
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


players = load_players()
check("Players.json is a root-level list", isinstance(players, list))
by_name = {a.get("name"): a for a in players}
check("eleven actors in Players.json", len(players) == 11, str(len(players)))
ids = [a.get("_id") for a in players]
check("actor _ids unique", len(set(ids)) == len(ids), str(sorted(ids)))

splitter = load_splitter()

# --- split coverage: every entry split or skipped-with-reason ---
fresh, skipped = splitter.split()
check("motorbike skipped by the split",
      any("Motorbike" in line for line in skipped), "; ".join(skipped))
check("only documented skips",
      all(any(name in line for name in splitter.SKIP) for line in skipped),
      "; ".join(skipped))
split_names = {a.get("name") for a in players} - set(splitter.SKIP)
check("ten entries split", len(fresh) == 10, "; ".join(fresh))

# --- originals are untouched JSON-equal slices of the live entries ---
for actor in players:
    name = actor.get("name")
    if name in splitter.SKIP:
        continue
    expected = f"original-fvtt-Actor-{splitter.slugify(name)}-{actor.get('_id')}.json"
    target = ACTORS / expected
    check(f"original exists for {name}", target.exists(), expected)
    if target.exists():
        check(f"original JSON-equal for {name}",
              load_actor_file(target) == actor, expected)

# --- idempotency: a second split changes nothing ---
fresh2, _ = splitter.split()
check("split is idempotent (second run all fresh)",
      all(line.startswith("fresh ") for line in fresh2), "; ".join(fresh2))

# --- Dan: background pointer resolves to the Dimensional Escapee item ---
dan = by_name.get("Feyward Dan", {})
dan_details = ((dan.get("system") or {}).get("details")) or {}
dan_items = {i.get("_id"): i for i in dan.get("items") or []}
check("dan background points at Dimensional Escapee",
      dan_details.get("background") == "d7b8ef0d38ae40d2",
      repr(dan_details.get("background")))
check("dan background id resolves to a background item",
      (dan_items.get(dan_details.get("background")) or {}).get("type") == "background")

# --- Wario: full character conversion ---
wario = by_name.get("Wario", {})
w_system = wario.get("system") or {}
w_details = w_system.get("details") or {}
w_items = {i.get("_id"): i for i in wario.get("items") or []}
check("wario is type character", wario.get("type") == "character",
      repr(wario.get("type")))
check("wario actorLink true",
      (wario.get("prototypeToken") or {}).get("actorLink") is True)
for key, want in (("race", "WHumanRace000001"),
                  ("background", "WCriminalBackgr0"),
                  ("originalClass", "WBarbarianClass0")):
    check(f"wario details.{key} resolves", key in w_details
          and w_details[key] in w_items, repr(w_details.get(key)))
check("wario has Human race item",
      (w_items.get("WHumanRace000001") or {}).get("name") == "Human")
barb = w_items.get("WBarbarianClass0") or {}
check("wario has Barbarian 7 class item",
      barb.get("name") == "Barbarian"
      and (barb.get("system") or {}).get("levels") == 7)
check("wario has Berserker subclass item",
      (w_items.get("WBerserkerSub000") or {}).get("name") == "Path of the Berserker")
check("wario has Criminal background item",
      (w_items.get("WCriminalBackgr0") or {}).get("name") == "Criminal")
check("wario minted items carry empty advancement shells",
      all(len(((w_items.get(mid) or {}).get("system") or {}).get("advancement") or []) == 0
          for mid in ("WHumanRace000001", "WBarbarianClass0",
                      "WBerserkerSub000", "WCriminalBackgr0")))
check("wario npc-only keys stripped",
      not any(k in w_details for k in ("cr", "habitat", "treasure", "type"))
      and "source" not in w_system)
check("wario pc blocks present",
      "bastion" in w_system and "favorites" in w_system)
check("wario xp at level 7 threshold", w_details.get("xp") == {"value": 23000},
      repr(w_details.get("xp")))

# --- motorbike drift: live entry must still match the generated file ---
bike_live = by_name.get("Wario's Motorbike", {})
bike_gen = load_actor_file(ACTORS / "fvtt-Actor-wario-motorbike.json")
live_sig = [(i.get("type"), i.get("name")) for i in bike_live.get("items") or []]
gen_sig = [(i.get("type"), i.get("name")) for i in bike_gen.get("items") or []]
check("motorbike live entry matches generated file", live_sig == gen_sig,
      f"live={live_sig} gen={gen_sig}")

# --- every split original has its sanitized import-ready file(s) ---
for actor in players:
    name = actor.get("name")
    if name in splitter.SKIP:
        continue
    stem = f"fvtt-Actor-{splitter.slugify(name)}-{actor.get('_id')}"
    check(f"sanitized exists for {name}", (ACTORS / f"{stem}.json").exists(), stem)
    if actor.get("type") == "character":
        check(f"NO-SPECIES exists for {name}",
              (ACTORS / f"{stem}-NO-SPECIES.json").exists(), stem)

print(f"\n{len(oks)} passed, {len(fails)} failed")
for line in oks:
    print("  ok   " + line)
for line in fails:
    print("  FAIL " + line)
sys.exit(1 if fails else 0)
