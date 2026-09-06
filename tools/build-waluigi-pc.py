#!/usr/bin/env python3
"""Convert Waluigi from an NPC statblock into a player character.

Deterministic, stdlib only, no AI. Reads the NPC export and writes a
`type: "character"` actor with real class levels.

DECISIONS AND THEIR EVIDENCE
----------------------------
* **Level 5.** `index.html` XP_SUMMARY records Waluigi at level 5 with 11,911
  XP. The site ledger is authoritative, so the sheet is built to match it
  rather than to fit his spell list.
* **Wizard, School of Evocation.** All 8 of his spells are on the Wizard list
  (Sorcerer covers 7, everyone else 3 or fewer), and `characters.json` calls
  him "a master of ice magic and arcane rays". Evocation is the ice/fire
  damage school and its Sculpt Spells is exactly the "everyone else eats it,
  Waluigi doesn't" flavour.
* **INT is the casting stat, and it is only 13 (+1).** This is the real cost
  of the Wizard choice: his NPC block declared `spellcasting: "cha"` with
  CHA 20, so moving to Wizard drops his spell save DC to 12 and his spell
  attack to +4. Nothing is silently patched to hide that -- see the warning
  the script prints. Swap to Sorcerer, or raise INT, if that is not wanted.
* **Three spells are above his level.** Ice Storm (4th), Cone of Cold (5th)
  and Wall of Ice (6th) cannot be cast at level 5. They are KEPT, in his
  spellbook, each tagged in its description as not yet castable. He loses
  nothing and the ledger stays true.
* **HP 37, not 112.** 112 came from `15d8+45`, a monster budget. A level 5
  d6 Wizard gets 6 + (4 x 4) + (5 x CON 3) = 37.
* **AC comes from the Cape, not "natural".** Player characters cannot use
  `calc: "natural"`, and his old formula keyed AC to Charisma, which no PC
  rule supports. Mage Armor plus the cape covers it.
* **Multiattack is dropped** as monster-only. `--keep-boss-abilities` retains
  it. The Stomp, Cheater's Gambit and Fey-Touched Step are his signature
  features and are all kept.

Usage:
    python3 tools/build-waluigi-pc.py
    python3 tools/build-waluigi-pc.py --check
    python3 tools/build-waluigi-pc.py --keep-boss-abilities
"""

import argparse
import copy
import hashlib
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ACTORS = os.path.join(ROOT, "Reputation-Matrix2", "actors")
SRC = os.path.join(ROOT, "Reputation-Matrix2", "tools", "item sheet examples",
                   "waluigi.json")
DST = os.path.join(ACTORS, "fvtt-Actor-waluigi-PC.json")

LEVEL = 5
PROF = 3
CON_MOD = 3                                   # CON 16
HP_MAX = 6 + (4 * (LEVEL - 1)) + (CON_MOD * LEVEL)   # d6 wizard => 37
INT_MOD = 1                                   # INT 13
SAVE_DC = 8 + PROF + INT_MOD                  # 12
SPELL_ATK = PROF + INT_MOD                    # +4

NPC_ONLY = {"Multiattack"}

# Above 3rd level a level 5 caster has no slots. Kept, but flagged.
TOO_HIGH = {"Ice Storm": 4, "Cone of Cold": 5, "Wall of Ice": 6}

WIZARD_SKILLS = ["arc", "ins", "inv", "dec", "ath"]
SAVE_PROFICIENCIES = ["int", "wis"]           # Wizard saving throws


def sid(*parts):
    h = hashlib.sha256("::".join(str(p) for p in parts).encode("utf-8")).digest()
    alnum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    n = int.from_bytes(h, "big")
    out = []
    for _ in range(16):
        n, r = divmod(n, len(alnum))
        out.append(alnum[r])
    return "".join(out)


def blank_roll():
    return {"min": None, "max": None, "mode": 0}


def build(keep_boss=False):
    with open(SRC, encoding="utf-8") as fh:
        npc = json.load(fh)

    pc = copy.deepcopy(npc)
    pc["type"] = "character"
    pc["name"] = "Waluigi"
    s = pc["system"]

    for key, ab in s["abilities"].items():
        ab["proficient"] = 1 if key in SAVE_PROFICIENCIES else 0
        ab.setdefault("bonuses", {"check": "", "save": ""})
        ab.setdefault("max", None)
        ab["check"] = {"roll": blank_roll()}
        ab["save"] = {"roll": blank_roll()}

    for key, sk in s.get("skills", {}).items():
        sk["value"] = 0
        sk["roll"] = blank_roll()
        sk.setdefault("bonuses", {"check": "", "passive": ""})
    for key in WIZARD_SKILLS:
        if key in s.get("skills", {}):
            # Deception is how he survives; Arcana is how he casts.
            s["skills"][key]["value"] = 2 if key in ("dec", "arc") else 1

    at = s["attributes"]
    at["hp"] = {"value": HP_MAX, "max": HP_MAX, "temp": None, "tempmax": 0,
                "bonuses": {}}
    at["ac"] = {"flat": None, "calc": "default", "formula": ""}
    at["inspiration"] = False
    at["exhaustion"] = 0
    at["death"] = {"success": 0, "failure": 0, "roll": blank_roll(),
                   "bonuses": {"save": ""}}
    at["spellcasting"] = "int"          # Wizard casts on Intelligence
    at.pop("hd", None)
    at.pop("spell", None)
    at.pop("price", None)
    # Keep his fey-altered movement and senses: both are written into the lore.

    det = s["details"]
    det.pop("cr", None)
    det.pop("type", None)
    det.pop("spellLevel", None)
    det["alignment"] = "Chaotic Neutral"
    det["xp"] = {"value": 11911}        # matches index.html XP_SUMMARY
    det["appearance"] = ("Absurdly tall, absurdly thin, moustache waxed to a "
                         "point sharp enough to file a grievance with. The "
                         "left leg does not always arrive at the same time as "
                         "the rest of him.")
    det["trait"] = ("I am the greatest athlete in the Mushroom Kingdom and I "
                    "will explain why, at length, unprompted.\nI keep records "
                    "on everyone. Everyone.")
    det["ideal"] = ("Recognition. Mario gets parades, Luigi gets sympathy, "
                    "Wario gets paid. I get an encyclopedia and I wrote it "
                    "myself. (Chaotic)")
    det["bond"] = ("Wario's ledger. I did not agree to the debt, I do not "
                   "accept the debt, and I have memorised every line of it.")
    det["flaw"] = ("I cannot let a slight go, and I cannot tell the "
                   "difference between a slight and a Tuesday.")
    det["gender"] = "Male"
    det["eyes"] = "Violet"
    det["hair"] = "Black"

    s["resources"] = {
        "primary": {"value": LEVEL, "max": LEVEL, "sr": True, "lr": False,
                    "label": "Arcane Recovery"},
        "secondary": {"value": 0, "max": 0, "sr": False, "lr": False, "label": ""},
        "tertiary": {"value": 0, "max": 0, "sr": False, "lr": False, "label": ""},
    }
    s.setdefault("bastion", {"name": "", "description": ""})
    s.setdefault("favorites", [])
    s.setdefault("tools", {})

    # Level 5 wizard slots: 4 / 3 / 2, nothing above 3rd.
    s["spells"] = {
        "spell1": {"value": 4, "override": None},
        "spell2": {"value": 3, "override": None},
        "spell3": {"value": 2, "override": None},
    }
    for lvl in range(4, 10):
        s["spells"]["spell%d" % lvl] = {"value": 0, "override": None}
    s["spells"]["pact"] = {"value": 0, "override": None}

    items = pc["items"]
    kept, dropped = [], []
    for it in items:
        if not keep_boss and it.get("name") in NPC_ONLY:
            dropped.append(it["name"])
            continue
        kept.append(it)

    # Flag the spells he knows but cannot yet cast, rather than deleting them.
    for it in kept:
        if it.get("type") == "spell" and it.get("name") in TOO_HIGH:
            sysd = it.setdefault("system", {})
            desc = sysd.setdefault("description", {})
            note = ("<p><em>In the spellbook, not yet castable: this is a "
                    "level %d spell and Waluigi is level %d. It becomes "
                    "available when he gains slots of that level.</em></p>"
                    % (TOO_HIGH[it["name"]], LEVEL))
            if note not in (desc.get("value") or ""):
                desc["value"] = note + (desc.get("value") or "")
            src = sysd.setdefault("source", {})
            if isinstance(src, dict):
                src["custom"] = "Spellbook — above current level"

    race = {
        "_id": sid("waluigi", "race"),
        "name": "Human (Fey-Altered)",
        "type": "race",
        "img": "icons/magic/water/ice-crystal-white.webp",
        "system": {
            "identifier": "human-fey-altered",
            "description": {"value":
                "<p>Human by birth, rearranged by the Feywild. A Guardian "
                "Butterfly shattered his left leg in the Manor and Sprites "
                "rebuilt it with rapid-growth magic, leaving bone that phases "
                "in and out of the Ethereal Plane and an unshakeable sense "
                "for gold and debts.</p>", "chat": ""},
            "movement": {"walk": "40", "climb": "30", "units": "ft",
                         "hover": False, "ignoredDifficultTerrain": []},
            "senses": {"units": "ft", "special": "Sense Gold & Debts (60 ft)",
                       "ranges": {"darkvision": 60, "blindsight": None,
                                  "tremorsense": None, "truesight": None}},
            "type": {"value": "humanoid", "subtype": "human (fey-altered)",
                     "custom": ""},
            "advancement": [],
            "source": {"custom": "Waluipedia", "book": "", "page": "",
                       "license": "", "revision": 1, "rules": "2024"},
        },
        "effects": [], "flags": {}, "sort": 0, "ownership": {"default": 0},
    }

    wizard = {
        "_id": sid("waluigi", "class", "wizard"),
        "name": "Wizard",
        "type": "class",
        "img": "icons/magic/water/snowflake-ice-blue.webp",
        "system": {
            "identifier": "wizard",
            "levels": LEVEL,
            "hd": {"denomination": "d6", "spent": 0, "additional": ""},
            "primaryAbility": {"value": ["int"], "all": False},
            "spellcasting": {"progression": "full", "ability": "int",
                             "preparation": {"formula": ""}},
            "description": {"value":
                "<p>Self-taught, aggressively so. Waluigi maintains that he "
                "invented ice magic and that the existing literature is "
                "plagiarism.</p>", "chat": ""},
            "advancement": [], "properties": [], "startingEquipment": [],
            "source": {"custom": "", "book": "PHB", "page": "",
                       "license": "", "revision": 1, "rules": "2024"},
        },
        "effects": [], "flags": {}, "sort": 100, "ownership": {"default": 0},
    }

    evocation = {
        "_id": sid("waluigi", "subclass", "evocation"),
        "name": "School of Evocation",
        "type": "subclass",
        "img": "icons/magic/water/orb-ice-web.webp",
        "system": {
            "identifier": "school-of-evocation",
            "classIdentifier": "wizard",
            "description": {"value":
                "<p>Six of his eight spells deal damage and four of those are "
                "cold. Evocation is simply what he already does, written "
                "down.</p>", "chat": ""},
            "advancement": [],
            "source": {"custom": "", "book": "PHB", "page": "",
                       "license": "", "revision": 1, "rules": "2024"},
        },
        "effects": [], "flags": {}, "sort": 200, "ownership": {"default": 0},
    }

    background = {
        "_id": sid("waluigi", "background"),
        "name": "Field Archivist (Disaster Inc.)",
        "type": "background",
        "img": "icons/sundries/books/book-embossed-jewel-silver-green.webp",
        "system": {
            "identifier": "field-archivist",
            "description": {"value":
                "<p>Author of the encyclopedia, reluctant employee of Wario's "
                "Enterprise, and the only person present at most of these "
                "events who took notes.</p>", "chat": ""},
            "advancement": [], "startingEquipment": [],
            "source": {"custom": "Waluipedia", "book": "", "page": "",
                       "license": "", "revision": 1, "rules": "2024"},
        },
        "effects": [], "flags": {}, "sort": 300, "ownership": {"default": 0},
    }

    def feat(name, img, html, sort):
        return {
            "_id": sid("waluigi", "feat", name),
            "name": name, "type": "feat", "img": img,
            "system": {
                "description": {"value": html, "chat": ""},
                "type": {"value": "class", "subtype": ""},
                "activation": {}, "duration": {}, "target": {}, "range": {},
                "uses": {"spent": 0, "max": "", "recovery": []},
                "activities": {},
                "source": {"custom": "Waluipedia", "book": "", "page": "",
                           "license": "", "revision": 1, "rules": "2024"},
            },
            "effects": [], "flags": {}, "sort": sort,
            "ownership": {"default": 0},
        }

    class_feats = [
        feat("Spellcasting (Wizard)",
             "icons/magic/water/snowflake-ice-blue.webp",
             "<p>Intelligence is his spellcasting ability. Spell save DC "
             "<strong>%d</strong>, spell attack <strong>+%d</strong>. Slots "
             "at level %d: four 1st, three 2nd, two 3rd.</p>"
             "<p><em>His Intelligence is 13, so these numbers are modest. "
             "That is the honest consequence of a Wizard build on this "
             "statblock.</em></p>" % (SAVE_DC, SPELL_ATK, LEVEL), 400),
        feat("Arcane Recovery",
             "icons/magic/light/explosion-star-blue-yellow.webp",
             "<p>Once per day on a short rest, recover expended spell slots "
             "totalling up to %d levels, none above 5th.</p>"
             % ((LEVEL + 1) // 2), 401),
        feat("Evocation Savant",
             "icons/magic/water/orb-ice-web.webp",
             "<p>Copying an evocation spell into the spellbook costs half the "
             "usual time and gold.</p>", 402),
        feat("Sculpt Spells",
             "icons/magic/water/orb-ice-glow.webp",
             "<p>When he casts an evocation spell of 1st level or higher, he "
             "may choose %d creatures to automatically succeed on their save "
             "and take no damage. Waluigi has never once included an ally in "
             "the blast on purpose, and says so loudly whenever he does.</p>"
             % (1 + 1), 403),
        feat("Potent Cantrip",
             "icons/magic/fire/beam-jet-stream-embers.webp",
             "<p>Creatures that succeed on a save against his cantrips still "
             "take half damage. Available from wizard level 6 — listed here "
             "for the next level-up.</p>", 404),
    ]

    new_items = [race, background, wizard, evocation] + class_feats + kept
    pc["items"] = new_items

    det["race"] = race["_id"]
    det["background"] = background["_id"]
    det["originalClass"] = wizard["_id"]

    pc["ownership"] = {"default": 0}
    pt = pc.get("prototypeToken") or {}
    pt["actorLink"] = True
    pt["disposition"] = 1
    pt["name"] = pc["name"]
    pc["prototypeToken"] = pt

    return pc, dropped


def main():
    ap = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--check", action="store_true")
    ap.add_argument("--keep-boss-abilities", action="store_true")
    ap.add_argument("--out", default=DST)
    args = ap.parse_args()

    if not os.path.isfile(SRC):
        print("FATAL: source NPC export not found: %s" % SRC)
        return 2

    pc, dropped = build(keep_boss=args.keep_boss_abilities)

    counts = {}
    for it in pc["items"]:
        counts[it["type"]] = counts.get(it["type"], 0) + 1

    print("Waluigi — NPC -> player character")
    print("  type          : %s" % pc["type"])
    print("  level         : %d Wizard (School of Evocation)" % LEVEL)
    print("  xp            : %d  (matches index.html XP_SUMMARY)"
          % pc["system"]["details"]["xp"]["value"])
    print("  hp            : %d  (was 112, a monster budget)" % HP_MAX)
    print("  spell save DC : %d   spell attack +%d" % (SAVE_DC, SPELL_ATK))
    print("  items         : %d" % len(pc["items"]))
    for t in sorted(counts):
        print("      %-12s %d" % (t, counts[t]))
    if dropped:
        print("  dropped (NPC-only): %s" % ", ".join(sorted(set(dropped))))

    print("\n  NOTE: Wizard casts on Intelligence, and his INT is 13 (+1).")
    print("        His NPC block used Charisma 20, so the DC drops from 17")
    print("        to %d. Sorcerer would keep CHA; this is the cost of the" % SAVE_DC)
    print("        Wizard choice, stated rather than hidden.")
    print("  NOTE: Ice Storm, Cone of Cold and Wall of Ice are above level %d."
          % LEVEL)
    print("        They stay in the spellbook, tagged as not yet castable.")

    problems = []
    if pc["type"] != "character":
        problems.append("type is not character")
    for typ in ("race", "background"):
        if len([i for i in pc["items"] if i["type"] == typ]) != 1:
            problems.append("must have exactly one %s" % typ)
    classes = [i for i in pc["items"] if i["type"] == "class"]
    if len(classes) != 1 or classes[0]["system"]["levels"] != LEVEL:
        problems.append("class/level wrong")
    subs = [i for i in pc["items"] if i["type"] == "subclass"]
    if len(subs) != 1 or subs[0]["system"]["classIdentifier"] != "wizard":
        problems.append("subclass not linked to wizard")
    ids = [i["_id"] for i in pc["items"]]
    if len(set(ids)) != len(ids):
        problems.append("duplicate item ids")
    det = pc["system"]["details"]
    for key in ("race", "background", "originalClass"):
        if det.get(key) not in ids:
            problems.append("details.%s does not resolve" % key)
    if det.get("cr") is not None:
        problems.append("cr not removed")
    if pc["system"]["attributes"]["spellcasting"] != "int":
        problems.append("spellcasting ability is not int")
    spells = [i for i in pc["items"] if i["type"] == "spell"]
    if len(spells) != 8:
        problems.append("expected 8 spells, found %d" % len(spells))
    tagged = {i["name"] for i in spells
              if ((i.get("system") or {}).get("source") or {}).get("custom")
              == "Spellbook — above current level"}
    if tagged != set(TOO_HIGH):
        problems.append("high-level tagging is %s, expected %s"
                        % (sorted(tagged), sorted(TOO_HIGH)))
    if not args.keep_boss_abilities and any(
            i["name"] in NPC_ONLY for i in pc["items"]):
        problems.append("NPC-only ability survived")

    if problems:
        print("\nFAILED:")
        for p in problems:
            print("  - %s" % p)
        return 1
    print("\n  all structural checks passed")

    if args.check:
        print("  --check: nothing written")
        return 0

    with open(args.out, "w", encoding="utf-8") as fh:
        fh.write(json.dumps(pc, ensure_ascii=False, indent=2) + "\n")
    print("  written -> %s" % args.out)
    return 0


if __name__ == "__main__":
    sys.exit(main())
