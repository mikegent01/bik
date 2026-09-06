#!/usr/bin/env python3
"""Convert Lady Aurelian Corvinarus from an NPC statblock into a player character.

Deterministic, stdlib only, no AI. Reads the original NPC export and writes a
`type: "character"` actor with real class levels.

WHY EACH DECISION WAS MADE
--------------------------
Everything below is derived from data already in her NPC block, not invented:

* **Level 9.** Her own `attributes.spell.level` is 9 and her slot array is
  exactly 4/3/3/3/1 — the 9th-level full-caster table. Nothing was chosen.
* **Bard, College of Glamour.** 24 of her 28 spells are on the Bard list, she
  is CHA 20 (her highest stat), her `attributes.spellcasting` is already
  `"cha"`, and Glamour is the fey-court subclass whose Mantle of Inspiration /
  Enthralling Performance match her written "delicate hostess" manipulation.
* **Druidcraft, Plant Growth and Speak with Plants** are not Bard spells. They
  are kept as Magical Secrets, which is the mechanism a Bard uses to hold
  off-list spells, so nothing is lost.
* **HP 66, not 97.** 97 came from `15d8+30`, a CR-8 monster budget. A level 9
  Bard has 9 hit dice: 8 + (8 x 5) + (9 x CON 2) = 66. Keeping 97 would hand a
  PC half again the hit points the class allows.
* **AC 16 becomes armour, not "natural".** PCs cannot have natural armour, so
  her Gown of Autumn's Last Light carries the AC instead.
* **Legendary Resistance, Multiattack and Innate Spellcasting are dropped.**
  They are monster-only mechanics with no PC equivalent; keeping them would
  make her unplayable alongside a normal party. `--keep-boss-abilities`
  retains them if she is wanted at written power.
* **Her flavour features are kept**: Delicate Hostess, Draconic Heritage,
  Dimensional Anchor, Wither and Bloom, and all her signature gear.

Usage:
    python3 tools/build-aurelian-pc.py            # writes the PC export
    python3 tools/build-aurelian-pc.py --check    # verify, write nothing
    python3 tools/build-aurelian-pc.py --keep-boss-abilities
"""

import argparse
import copy
import hashlib
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ACTORS = os.path.join(ROOT, "Reputation-Matrix2", "actors")
SRC = os.path.join(ACTORS, "original-fvtt-Actor-lady-aurelian-corvinarus-ADErrUjJaehXfDni.json")
DST = os.path.join(ACTORS, "fvtt-Actor-lady-aurelian-corvinarus-PC.json")

LEVEL = 9
PROF = 4                      # proficiency bonus at level 9
CON_MOD = 2                   # CON 14
# Level 9 Bard, d8 hit die: 8 at first level, then 8 levels at the average
# roll of 5, plus CON modifier every level. 8 + 40 + 18 = 66.
HP_MAX = 8 + (5 * (LEVEL - 1)) + (CON_MOD * LEVEL)

# Monster-only mechanics that have no player-character equivalent.
NPC_ONLY = {
    "Legendary Resistance (2/Day)",
    "Multiattack",
    "Innate Spellcasting",
    "Spellcasting",   # replaced by the real class feature
}

# Spells on her sheet that are NOT on the Bard list under either the 2014 or
# 2024 PHB. A Bard holds these through Magical Secrets, so they are tagged
# rather than removed. Verified by tools/analyze-aurelian-class.py -- note
# that Plant Growth and Speak with Plants ARE Bard spells and do not belong
# here, while Wall of Fire does.
MAGICAL_SECRETS = {"Druidcraft", "Thaumaturgy", "Wall of Fire"}

BARD_SKILLS = ["dec", "per", "prc", "ins", "arc", "his"]
SAVE_PROFICIENCIES = ["dex", "cha"]          # Bard saving throws


def sid(*parts):
    """Deterministic 16-char Foundry id."""
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
    s = pc["system"]

    # ---- abilities: same scores, add PC save proficiencies -----------------
    for key, ab in s["abilities"].items():
        ab["proficient"] = 1 if key in SAVE_PROFICIENCIES else 0
        ab.setdefault("bonuses", {"check": "", "save": ""})
        ab.setdefault("max", None)
        ab["check"] = {"roll": blank_roll()}
        ab["save"] = {"roll": blank_roll()}

    # ---- skills: NPC block had flat +2s; give real proficiencies -----------
    for key, sk in s["skills"].items():
        sk["value"] = 0
        sk["roll"] = blank_roll()
        sk.setdefault("bonuses", {"check": "", "passive": ""})
    for key in BARD_SKILLS:
        if key in s["skills"]:
            # Deception and Persuasion are her defining skills -> expertise.
            s["skills"][key]["value"] = 2 if key in ("dec", "per") else 1

    # ---- attributes --------------------------------------------------------
    at = s["attributes"]
    at["hp"] = {"value": HP_MAX, "max": HP_MAX, "temp": None, "tempmax": 0,
                "bonuses": {}}
    # A PC cannot have natural armour; the gown provides it instead.
    at["ac"] = {"flat": None, "calc": "default", "formula": ""}
    at["inspiration"] = False
    at["exhaustion"] = 0
    at["death"] = {"success": 0, "failure": 0, "roll": blank_roll(),
                   "bonuses": {"save": ""}}
    at["spellcasting"] = "cha"
    at.pop("hd", None)      # PCs track hit dice on the class item
    at.pop("spell", None)   # NPC-only caster level
    at.pop("price", None)
    # She keeps flight and darkvision: both are written into her fey nature.

    # ---- details -----------------------------------------------------------
    det = s["details"]
    det.pop("cr", None)
    det.pop("type", None)
    det.pop("spellLevel", None)
    det["alignment"] = "Neutral Evil"
    det["xp"] = {"value": 48000}          # start of level 9
    det["appearance"] = ("Porcelain-pale and autumn-haired, dressed in a gown "
                         "the colour of the last light through falling leaves. "
                         "Moves as though she weighs nothing at all.")
    det["trait"] = ("I apologise for things that are not my fault, and never "
                    "for the things that are.\nI never let anyone see me "
                    "make an effort.")
    det["ideal"] = ("Continuity. The bloodline has held the manor together "
                    "for four centuries and it will not fail in my hands. "
                    "(Lawful Evil)")
    det["bond"] = ("I am one of the anchors holding the Feywild shard in "
                   "place. If I fall, everyone inside falls with me.")
    det["flaw"] = ("I would rather be underestimated than respected, and I "
                   "will sacrifice almost anyone to stay that way.")
    det["gender"] = "Female"
    det["eyes"] = "Amber"
    det["hair"] = "Autumn orange"
    det["skin"] = "Porcelain"

    s["resources"] = {
        "primary": {"value": 5, "max": 5, "sr": False, "lr": True,
                    "label": "Bardic Inspiration"},
        "secondary": {"value": 0, "max": 0, "sr": False, "lr": False, "label": ""},
        "tertiary": {"value": 0, "max": 0, "sr": False, "lr": False, "label": ""},
    }
    s.setdefault("tools", {})
    s["tools"]["lute"] = {"value": 1, "ability": "cha", "bonuses": {"check": ""},
                          "roll": blank_roll()}
    s.setdefault("bastion", {"name": "", "description": ""})
    s.setdefault("favorites", [])

    # Slots stay 4/3/3/3/1 -- already correct for a level 9 full caster.
    for lvl in range(6, 10):
        s["spells"].setdefault("spell%d" % lvl, {"value": 0, "override": None})
    s["spells"]["pact"] = {"value": 0, "override": None}

    # ---- items -------------------------------------------------------------
    items = pc["items"]
    kept = []
    dropped = []
    for it in items:
        if not keep_boss and it.get("name") in NPC_ONLY:
            dropped.append(it["name"])
            continue
        if it.get("name") == "Spellcasting":
            dropped.append(it["name"])
            continue
        kept.append(it)

    # Tag off-list spells as Magical Secrets so the pick is auditable.
    for it in kept:
        if it.get("type") == "spell" and it.get("name") in MAGICAL_SECRETS:
            sysd = it.setdefault("system", {})
            src = sysd.setdefault("source", {})
            if isinstance(src, dict):
                src["custom"] = "Magical Secrets"

    # Species item -- she is fey, and a PC needs a real race document.
    race = {
        "_id": sid("aurelian", "race"),
        "name": "Fey (Corvinarus Bloodline)",
        "type": "race",
        "img": "icons/creatures/magical/fae-fairy-winged-glowing-green.webp",
        "system": {
            "identifier": "corvinarus-fey",
            "description": {"value":
                "<p>The Corvinarus line was grafted onto draconic power in "
                "988 BF and has existed partly outside normal reality ever "
                "since. Members are fey rather than humanoid, see in the "
                "dark, and are hard to charm or frighten.</p>", "chat": ""},
            "movement": {"walk": "30", "fly": "50", "hover": True,
                         "units": "ft", "ignoredDifficultTerrain": []},
            "senses": {"units": "ft", "special": "",
                       "ranges": {"darkvision": 120, "blindsight": None,
                                  "tremorsense": None, "truesight": None}},
            "type": {"value": "fey", "subtype": "archfey-touched", "custom": ""},
            "advancement": [],
            "source": {"custom": "Feyward campaign", "book": "", "page": "",
                       "license": "", "revision": 1, "rules": "2024"},
        },
        "effects": [], "flags": {}, "sort": 0,
        "ownership": {"default": 0},
    }

    bard = {
        "_id": sid("aurelian", "class", "bard"),
        "name": "Bard",
        "type": "class",
        "img": "icons/tools/instruments/lute-gold-brown.webp",
        "system": {
            "identifier": "bard",
            "levels": LEVEL,
            "hd": {"denomination": "d8", "spent": 0, "additional": ""},
            "primaryAbility": {"value": ["cha"], "all": False},
            "spellcasting": {"progression": "full", "ability": "cha",
                             "preparation": {"formula": ""}},
            "description": {"value":
                "<p>Nine levels of bardic training worn as court manner. "
                "Aurelian does not perform; she converses, and the magic "
                "arrives sounding like good breeding.</p>", "chat": ""},
            "advancement": [],
            "properties": [],
            "startingEquipment": [],
            "source": {"custom": "", "book": "PHB", "page": "",
                       "license": "", "revision": 1, "rules": "2024"},
        },
        "effects": [], "flags": {}, "sort": 100,
        "ownership": {"default": 0},
    }

    glamour = {
        "_id": sid("aurelian", "subclass", "glamour"),
        "name": "College of Glamour",
        "type": "subclass",
        "img": "icons/magic/control/fear-fright-mask-orange.webp",
        "system": {
            "identifier": "college-of-glamour",
            "classIdentifier": "bard",
            "description": {"value":
                "<p>Glamour is the fey court's own school: charm worn as "
                "courtesy, command dressed as invitation. It is the exact "
                "shape of Aurelian's hostess mask.</p>", "chat": ""},
            "advancement": [],
            "source": {"custom": "", "book": "PHB", "page": "",
                       "license": "", "revision": 1, "rules": "2024"},
        },
        "effects": [], "flags": {}, "sort": 200,
        "ownership": {"default": 0},
    }

    background = {
        "_id": sid("aurelian", "background"),
        "name": "Noble (Corvinarus Heir)",
        "type": "background",
        "img": "icons/environment/settlement/house-manor.webp",
        "system": {
            "identifier": "noble-corvinarus-heir",
            "description": {"value":
                "<p>Heir to a house that anchors a plane. The title is real, "
                "the manor is real, and the obligation is heavier than "
                "either.</p>", "chat": ""},
            "advancement": [], "startingEquipment": [],
            "source": {"custom": "Feyward campaign", "book": "", "page": "",
                       "license": "", "revision": 1, "rules": "2024"},
        },
        "effects": [], "flags": {}, "sort": 300,
        "ownership": {"default": 0},
    }

    def feat(name, img, html, sort):
        return {
            "_id": sid("aurelian", "feat", name),
            "name": name, "type": "feat", "img": img,
            "system": {
                "description": {"value": html, "chat": ""},
                "type": {"value": "class", "subtype": ""},
                "activation": {}, "duration": {}, "target": {}, "range": {},
                "uses": {"spent": 0, "max": "", "recovery": []},
                "activities": {},
                "source": {"custom": "Feyward campaign", "book": "", "page": "",
                           "license": "", "revision": 1, "rules": "2024"},
            },
            "effects": [], "flags": {}, "sort": sort,
            "ownership": {"default": 0},
        }

    class_feats = [
        feat("Bardic Inspiration (d8)",
             "icons/skills/social/diplomacy-handshake-yellow.webp",
             "<p>As a bonus action, grant another creature a d8 to add to one "
             "ability check, attack roll or saving throw. Five uses, regained "
             "on a long rest.</p>", 400),
        feat("Jack of All Trades",
             "icons/skills/trades/academics-merchant-scribe.webp",
             "<p>Add half proficiency, rounded down, to any ability check "
             "that does not already include it.</p>", 401),
        feat("Song of Rest (d8)",
             "icons/skills/trades/music-notes-sound-blue.webp",
             "<p>Allies who spend Hit Dice at a short rest regain an extra "
             "1d8 hit points.</p>", 402),
        feat("Expertise (Deception, Persuasion)",
             "icons/skills/social/theft-pickpocket-bribery-brown.webp",
             "<p>Double proficiency on Deception and Persuasion — the two "
             "skills the hostess mask is built from.</p>", 403),
        feat("Font of Inspiration",
             "icons/magic/light/explosion-star-blue-yellow.webp",
             "<p>Bardic Inspiration returns on a short rest as well as a "
             "long one.</p>", 404),
        feat("Countercharm",
             "icons/magic/sonic/scream-wail-shout-teal.webp",
             "<p>As an action, grant allies within 30 feet advantage on "
             "saves against being charmed or frightened.</p>", 405),
        feat("Magical Secrets",
             "icons/skills/trades/academics-book-study-purple.webp",
             "<p>Druidcraft, Thaumaturgy and Wall of Fire sit off the Bard "
             "list and are held through Magical Secrets — the first two from "
             "the manor's garden and its chapel, the third from the draconic "
             "graft of 988 BF.</p>", 406),
        feat("Mantle of Inspiration",
             "icons/creatures/magical/fae-fairy-winged-glowing-green.webp",
             "<p>Spend a Bardic Inspiration to grant temporary hit points to "
             "allies and let them immediately move without provoking.</p>", 407),
        feat("Enthralling Performance",
             "icons/magic/control/hypnosis-mesmerism-eye-tan.webp",
             "<p>After performing for at least a minute, charm up to five "
             "humanoids who fail a Charisma save. This is what the eternal "
             "party is actually for.</p>", 408),
        feat("Mantle of Majesty",
             "icons/magic/control/energy-stream-link-large-blue.webp",
             "<p>Cast <em>command</em> as a bonus action for one minute "
             "without expending a slot, and charmed creatures obey.</p>", 409),
    ]

    new_items = [race, background, bard, glamour] + class_feats + kept
    pc["items"] = new_items

    det["race"] = race["_id"]
    det["background"] = background["_id"]
    det["originalClass"] = bard["_id"]

    # PC ownership + clean provenance
    pc["ownership"] = {"default": 0}
    pc["name"] = "Lady Aurelian Corvinarus"
    pc["prototypeToken"] = pc.get("prototypeToken") or {}
    pt = pc["prototypeToken"]
    pt["actorLink"] = True
    pt["disposition"] = 1          # friendly / player-side
    pt["name"] = pc["name"]

    return pc, dropped


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--check", action="store_true",
                    help="verify and report, write nothing")
    ap.add_argument("--keep-boss-abilities", action="store_true",
                    help="retain Legendary Resistance and Multiattack")
    ap.add_argument("--out", default=DST)
    args = ap.parse_args()

    if not os.path.isfile(SRC):
        print("FATAL: source NPC export not found: %s" % SRC)
        return 2

    pc, dropped = build(keep_boss=args.keep_boss_abilities)

    counts = {}
    for it in pc["items"]:
        counts[it["type"]] = counts.get(it["type"], 0) + 1

    print("Lady Aurelian Corvinarus — NPC -> player character")
    print("  type          : %s" % pc["type"])
    print("  level         : %d Bard (College of Glamour)" % LEVEL)
    print("  hp            : %d  (was 97, a CR-8 monster budget)" % HP_MAX)
    print("  proficiency   : +%d" % PROF)
    print("  items         : %d" % len(pc["items"]))
    for t in sorted(counts):
        print("      %-12s %d" % (t, counts[t]))
    if dropped:
        print("  dropped (NPC-only): %s" % ", ".join(sorted(set(dropped))))

    problems = []
    if pc["type"] != "character":
        problems.append("type is not character")
    if len([i for i in pc["items"] if i["type"] == "race"]) != 1:
        problems.append("must have exactly one race")
    if len([i for i in pc["items"] if i["type"] == "background"]) != 1:
        problems.append("must have exactly one background")
    classes = [i for i in pc["items"] if i["type"] == "class"]
    if len(classes) != 1 or classes[0]["system"]["levels"] != LEVEL:
        problems.append("class/level wrong")
    subs = [i for i in pc["items"] if i["type"] == "subclass"]
    if len(subs) != 1 or subs[0]["system"]["classIdentifier"] != "bard":
        problems.append("subclass not linked to bard")
    ids = [i["_id"] for i in pc["items"]]
    if len(set(ids)) != len(ids):
        problems.append("duplicate item ids")
    if not args.keep_boss_abilities:
        for bad in ("Legendary Resistance (2/Day)", "Multiattack"):
            if any(i["name"] == bad for i in pc["items"]):
                problems.append("NPC-only ability survived: %s" % bad)
    if pc["system"]["details"].get("cr") is not None:
        problems.append("cr not removed")
    spells = [i for i in pc["items"] if i["type"] == "spell"]
    if len(spells) != 28:
        problems.append("expected 28 spells, found %d" % len(spells))
    tagged = {i["name"] for i in spells
              if ((i.get("system") or {}).get("source") or {}).get("custom")
              == "Magical Secrets"}
    if tagged != MAGICAL_SECRETS:
        problems.append("Magical Secrets tagging is %s, expected %s"
                        % (sorted(tagged), sorted(MAGICAL_SECRETS)))

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
