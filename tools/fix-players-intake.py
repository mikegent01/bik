#!/usr/bin/env python3
"""One-time intake fixes for Players.json (idempotent, safe to re-run).

1. Feyward Dan: point ``details.background`` at the existing
   "Dimensional Escapee" item id (it ships as free text, which the
   dnd5e details-ref validation flags as broken).
2. Wario: convert the NPC statblock into a full ``character``
   (Human / Criminal / Barbarian 7, Path of the Berserker).  Keeps his
   whole kit, HP, AC, biography and token art; mints four fresh items
   (race/class/subclass/background) with emptied advancement shells so
   the DM completes level-up choices inside Foundry.

Run: ``python3 tools/fix-players-intake.py`` from the repo root.
"""
from __future__ import annotations

import copy
import json
import sys

PLAYERS = "Players.json"

DAN_BG_ID = "d7b8ef0d38ae40d2"  # Dimensional Escapee (already in Dan's items)

# Minted ids (16-char Foundry shape) for Wario's new character items.
WARIO_HUMAN_ID = "WHumanRace000001"
WARIO_BARB_ID = "WBarbarianClass0"
WARIO_ZERK_ID = "WBerserkerSub000"
WARIO_CRIM_ID = "WCriminalBackgr0"

WARIO_XP = 23000  # level 7 threshold, matches Remi
PLACEHOLDER_IMG = "icons/svg/mystery-man.svg"
CAMPAIGN_SOURCE = {"custom": "Waluipedia campaign", "rules": "2014", "revision": 1}


def load() -> list:
    with open(PLAYERS, encoding="utf-8") as fh:
        return json.load(fh)


def save(actors: list) -> None:
    # Byte-stable: the file ships as indent=2, literal UTF-8, no EOF newline.
    with open(PLAYERS, "w", encoding="utf-8") as fh:
        fh.write(json.dumps(actors, indent=2, ensure_ascii=False))


def by_name(actors: list, name: str) -> dict:
    return next(a for a in actors if a.get("name") == name)


def fix_dan(dan: dict) -> bool:
    details = (dan.get("system") or {}).setdefault("details", {})
    if details.get("background") == DAN_BG_ID:
        return False
    item_ids = {i.get("_id") for i in dan.get("items") or []}
    assert DAN_BG_ID in item_ids, "Dimensional Escapee item missing from Dan"
    details["background"] = DAN_BG_ID
    return True


def _mint(template: dict, *, item_id: str, name: str, desc: str) -> dict:
    """Deepcopy a live item, then scrub template-specific provenance."""
    assert len(item_id) == 16, item_id
    item = copy.deepcopy(template)
    item["_id"] = item_id
    item["name"] = name
    item["img"] = PLACEHOLDER_IMG
    item["folder"] = None
    item["effects"] = []
    item["flags"] = {}
    stats = item.get("_stats") or {}
    for key in ("compendiumSource", "duplicateSource"):
        stats.pop(key, None)
    system = item["system"]
    system["advancement"] = []
    system["description"] = {"value": desc, "chat": ""}
    system["source"] = dict(CAMPAIGN_SOURCE)
    return item


def convert_wario(wario: dict, actors: list) -> bool:
    if wario.get("type") == "character":
        return False
    system = wario["system"]
    details = system["details"]

    waluigi = by_name(actors, "Waluigi")
    w_details = waluigi["system"]["details"]
    markop = by_name(actors, "Markop Judi")

    def template(actor: dict, type_: str) -> dict:
        return next(i for i in actor["items"] if i.get("type") == type_)

    # -- 1. Mint the four character items from live template shapes. --
    existing_sorts = [i.get("sort") or 0 for i in wario.get("items") or []]
    nxt = (max(existing_sorts) + 100000) if existing_sorts else 100000

    race = _mint(
        template(waluigi, "race"),
        item_id=WARIO_HUMAN_ID,
        name="Human",
        desc="<p>A Mushroom Kingdom human with an unstoppable appetite.</p>",
    )
    race["system"]["identifier"] = "human"
    race["system"]["type"] = {"value": "humanoid", "subtype": "human", "custom": ""}
    race["system"]["movement"] = {
        "walk": "30",
        "units": "ft",
        "hover": False,
        "ignoredDifficultTerrain": [],
    }
    race["system"]["senses"] = {
        "ranges": {
            "darkvision": None,
            "blindsight": None,
            "truesight": None,
            "tremorsense": None,
        },
        "units": "ft",
        "special": "",
    }

    cls = _mint(
        template(markop, "class"),
        item_id=WARIO_BARB_ID,
        name="Barbarian",
        desc="<p>Greed-fueled rage: fists, bombs, and shoulder charges.</p>",
    )
    cls["system"]["identifier"] = "barbarian"
    cls["system"]["levels"] = 7
    cls["system"]["hd"] = {"spent": 0, "denomination": "d12", "additional": ""}
    cls["system"]["primaryAbility"] = {"value": ["str"], "all": False}
    cls["system"]["spellcasting"] = {
        "progression": "none",
        "ability": "",
        "preparation": {},
    }
    cls["system"]["startingEquipment"] = []

    sub = _mint(
        template(markop, "subclass"),
        item_id=WARIO_ZERK_ID,
        name="Path of the Berserker",
        desc="<p>Frenzy first, questions never. Waaah.</p>",
    )
    sub["system"]["identifier"] = "path-of-the-berserker"
    sub["system"]["classIdentifier"] = "barbarian"
    sub["system"]["spellcasting"] = {
        "progression": "none",
        "ability": "",
        "preparation": {},
    }

    bg = _mint(
        template(by_name(actors, "Feyward Dan"), "background"),
        item_id=WARIO_CRIM_ID,
        name="Criminal",
        desc="<p>A rap sheet longer than a Mario golf course.</p>",
    )
    bg["system"]["identifier"] = "criminal"
    bg["system"]["startingEquipment"] = []

    for item in (race, cls, sub, bg):
        item["sort"] = nxt
        nxt += 100000
    wario.setdefault("items", []).extend([race, cls, sub, bg])

    # -- 2. Rework details: strip NPC-only keys, add PC keys. --
    for key in ("cr", "habitat", "treasure", "type"):
        details.pop(key, None)
    details["race"] = WARIO_HUMAN_ID
    details["background"] = WARIO_CRIM_ID
    details["originalClass"] = WARIO_BARB_ID
    details["xp"] = {"value": WARIO_XP}
    for key in (
        "age",
        "appearance",
        "eyes",
        "faith",
        "gender",
        "hair",
        "height",
        "skin",
        "trait",
        "weight",
    ):
        value = w_details.get(key, "")
        details[key] = value if not value else ""  # never copy Waluigi's prose

    # -- 3. System blocks: strip NPC source, add PC bastion/favorites. --
    system.pop("source", None)
    system["bastion"] = {"name": "", "description": ""}
    system["favorites"] = []

    # -- 4. Actor flags. --
    wario["type"] = "character"
    wario.setdefault("prototypeToken", {})["actorLink"] = True
    return True


def main() -> int:
    actors = load()
    changed = []
    if fix_dan(by_name(actors, "Feyward Dan")):
        changed.append("dan background ref")
    if convert_wario(by_name(actors, "Wario"), actors):
        changed.append("wario npc->character")
    if not changed:
        print("Players.json intake: already applied, no changes.")
        return 0
    save(actors)
    print("Players.json intake: applied: " + ", ".join(changed))
    return 0


if __name__ == "__main__":
    sys.exit(main())
