#!/usr/bin/env python3
"""Session loot log + sheet wiring tests (no server needed).

Covers hubcore/loot.py validation/append, the loot-to-pile adapter, the
inventory.json extraction (structure + referential integrity), and the static
wiring the sheet viewer needs in index.html.

    python3 tools/tests/test-session-loot.py
"""
import importlib.util
import json
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
sys.path.insert(0, str(ROOT / "Reputation-Matrix2" / "tools" / "hub"))

from hubcore import loot, piles  # noqa: E402

fails, oks = [], []


def check(label, cond, extra=""):
    (oks if cond else fails).append(label + (f" — {extra}" if extra else ""))


def load_pile_script():
    spec = importlib.util.spec_from_file_location(
        "loot_pile", ROOT / "tools" / "session-loot-to-pile.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


# ---------------- validation ----------------
clean, errors = loot.validate({"session": "SE 12", "characterId": "waluigi",
                               "item": "Garlic Charm", "qty": 2, "source": "reward",
                               "note": "desk", "eventId": "e1", "characterName": "Waluigi"})
check("valid entries pass", not errors, "; ".join(errors))
check("validation trims + keeps fields", clean["item"] == "Garlic Charm" and clean["qty"] == 2)
clean, errors = loot.validate({"session": "SE 12", "characterId": "waluigi", "item": "x"})
check("defaults are qty 1 + found", not errors and clean["qty"] == 1 and clean["source"] == "found")
_, errors = loot.validate({"session": "", "characterId": "w", "item": "x"})
check("blank session rejected", any("session" in e for e in errors), "; ".join(errors))
_, errors = loot.validate({"session": "s", "characterId": "", "item": ""})
check("blank character + item rejected", len(errors) == 2, "; ".join(errors))
_, errors = loot.validate({"session": "s", "characterId": "w", "item": "x", "qty": 0})
check("zero qty rejected", any("qty" in e for e in errors))
_, errors = loot.validate({"session": "s", "characterId": "w", "item": "x", "qty": "many"})
check("non-numeric qty rejected", any("qty" in e for e in errors))
_, errors = loot.validate({"session": "s", "characterId": "w", "item": "x", "source": "bribed"})
check("unknown source rejected", any("source" in e for e in errors), "; ".join(errors))

# ---------------- append round-trip ----------------
with tempfile.TemporaryDirectory() as tmp:
    target = Path(tmp) / "session-loot.json"
    check("missing log loads empty", loot.load(target) == [])
    first = loot.append({"session": "SE 12", "characterId": "waluigi", "item": "Charm"}, target)
    check("first entry gets loot-0001 + timestamp",
          first["id"] == "loot-0001" and first["at"].endswith("Z"), first["id"])
    second = loot.append({"session": "SE 12", "characterId": "dan", "item": "Bomb", "qty": 3}, target)
    check("ids increment", second["id"] == "loot-0002", second["id"])
    check("no temp files left behind", list(Path(tmp).glob("*.tmp")) == [])
    try:
        loot.append({"session": "", "characterId": "w", "item": "x"}, target)
        check("invalid append raises", False)
    except ValueError:
        check("invalid append raises", True)
    check("failed append writes nothing", len(loot.load(target)) == 2)

# ---------------- pile adapter ----------------
mod = load_pile_script()
with tempfile.TemporaryDirectory() as tmp:
    target = Path(tmp) / "session-loot.json"
    loot.append({"session": "SE 12", "eventId": "se12", "characterId": "waluigi",
                 "characterName": "Waluigi", "item": "Garlic Grenade", "qty": 3,
                 "source": "reward", "note": "armory"}, target)
    loot.append({"session": "SE 12", "eventId": "se12", "characterId": "waluigi",
                 "item": "Garlic Grenade", "qty": 1, "source": "found"}, target)
    loot.append({"session": "SE 11", "characterId": "dan", "item": "Bomb"}, target)
    import hubcore.paths as hub_paths
    real = hub_paths.LOOT_PATH
    hub_paths.LOOT_PATH = target
    try:
        grouped = mod.collect(event="se12", session=None, characters=None)
        check("collect filters by event",
              list(grouped) == ["waluigi"] and len(grouped["waluigi"]) == 2)
        player = mod.to_player("waluigi", grouped["waluigi"], "se12")
        check("same-name lines merge qtys",
              len(player["lines"]) == 1 and player["lines"][0]["quantity"] == 4)
        check("receipts survive the merge", len(player["lines"][0]["receipts"]) == 2)
        check("pile summary keys present",
              player["itemCount"] == 4 and player["uniqueItems"] == 1 and player["totalGold"] == 0)
        actor = mod._relabel(piles.build_pile_actor(player, pile_name="SE 12 — Session Loot"))
        check("pile actor builds with the loot name", actor["name"] == "SE 12 — Session Loot")
        check("pile holds the converted item",
              len(actor["items"]) == 1 and actor["items"][0]["name"] == "Garlic Grenade",
              str([i["name"] for i in actor["items"]]))
        check("type guessing favors consumable for grenades",
              actor["items"][0]["type"] == "consumable", actor["items"][0]["type"])
        dumped = json.dumps(actor)
        check("pile copy is relabeled session loot",
              "approved purchases" not in dumped and "session loot" in dumped)
    finally:
        hub_paths.LOOT_PATH = real

# ---------------- inventory.json extraction ----------------
inv_path = ROOT / "Reputation-Matrix2" / "data" / "inventory.json"
inv = json.loads(inv_path.read_text(encoding="utf-8"))
check("inventory.json has all five sections",
      set(inv) == {"items", "inventories", "wallets", "currencies", "banking"}, ",".join(sorted(inv)))
check("items + inventories survived the move",
      len(inv["items"]) >= 30 and len(inv["inventories"]) >= 25,
      f"{len(inv['items'])} items, {len(inv['inventories'])} inventories")
check("hidden slot fallback still filed", "hidden_item_slot" in inv["items"])
bad_refs = sorted({x.get("itemId") for arr in inv["inventories"].values() for x in arr
                   if x.get("itemId") not in inv["items"]})
check("every inventoried itemId resolves", not bad_refs, ",".join(bad_refs[:5]))
check("black crystal spot check",
      inv["items"]["black_crystal"]["name"] == "Black Crystal")
loot_path = ROOT / "Reputation-Matrix2" / "data" / "session-loot.json"
check("session-loot.json is a list", isinstance(json.loads(loot_path.read_text(encoding="utf-8")), list))

# ---------------- static wiring in index.html ----------------
src = (ROOT / "index.html").read_text(encoding="utf-8")
for needle in ("'rolls','inventory','session-loot'];",
               "Object.assign(INVENTORY_SYSTEM, DATA.inventory",
               "const INVENTORY_SYSTEM={items:{},inventories:{}};",
               "route==='sheet'", "function view_sheet(",
               "sheet-loot-body", "Open character sheet"):
    check(f"index.html wires {needle[:42]}", needle in src)
sheet_files = re.findall(r"file:'(fvtt-Actor-[^']+\.json)'", src)
check("seven actor sheets mapped", len(sheet_files) == 7, str(len(sheet_files)))
missing = [f for f in sheet_files if not (ROOT / "Reputation-Matrix2" / "actors" / f).exists()]
check("every mapped actor file exists", not missing, ",".join(missing))

print(f"\n{len(oks)} passed, {len(fails)} failed")
for line in oks:
    print("  ok   " + line)
for line in fails:
    print("  FAIL " + line)
sys.exit(1 if fails else 0)
