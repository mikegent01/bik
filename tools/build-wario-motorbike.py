#!/usr/bin/env python3
"""Build a Foundry VTT NPC actor for Wario's motorbike.

Deterministic, stdlib only, no AI. The campaign record knows exactly one
motorbike: the one Wario rode into the Scorncrow Skirmish and stalled in the
leaves. This builds the cleaned `type: "npc"` export for it, matching the
Azure / Aurelian NPC schema used in Reputation-Matrix2/actors/.

DECISIONS AND THEIR EVIDENCE
----------------------------
* **NPC, not a player.** Wario's motorbike is a vehicle/mount, not a
  character; dnd5e does not restrict an NPC to one species, so there is no
  NO-SPECIES variant (characters only).
* **Stat block source: "Wario's Motorcycle (Customized)"** on Wario's sheet
  (`tools/item sheet examples/wario.json`): AC 16, 75 HP, speed 120 ft/round
  (~80 mph), damage threshold 10, crew 1 + 1 (uncomfortably), cargo 200 lb.
  The Scorncrow record shows the bike with its welded rear compartment and
  saddlebags, which is this record, not the weaponized chopper.
* **The Custom Chopper and the summoned-mount block stay on Wario's sheet**
  as distinct records (weaponized configuration: AC 16 / 75 HP / 70 ft;
  Wario Bike Summon: AC 14 / 50 HP / 60 ft). They are documented here rather
  than merged in, because merging would invent a stat block no record has.
* **CR blank.** Vehicles have no challenge rating, so `details.cr` is "".
* **Abilities are neutral 10s.** A vehicle has no ability scores of its own,
  but dnd5e requires the six fields. The ramming attack therefore rolls flat
  and its description says to use the driver's Strength + proficiency.
* **AC `calc: "flat"`, not `"natural"`.** The 16 comes from armor plating /
  reinforced frame, matching Wario's own actor (`calc: "flat"`).
* **No difficult-terrain immunity.** The chopper record claims it, but the
  customized record does not, and the Scorncrow record proves the opposite:
  the motorbike stalled in the leaves and branches.
* **Token art: `npc/ai/wario-bike.webp`.** The asset manifest for the
  campaign's Foundry data already contains this exact file (and is what the
  other actor exports reference by Foundry-relative path).

Usage:
    python3 tools/build-wario-motorbike.py
    python3 tools/build-wario-motorbike.py --check
"""

import argparse
import hashlib
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ACTORS = os.path.join(ROOT, "Reputation-Matrix2", "actors")
MANIFEST = os.path.join(ROOT, "Reputation-Matrix2", "tools", "item sheet examples",
                        "image paths.txt")
DST = os.path.join(ACTORS, "fvtt-Actor-wario-motorbike.json")

NAME = "Wario's Motorbike"
IMG = "npc/ai/wario-bike.webp"

# The customized motorcycle record (loot) in Wario's sheet.
AC = 16
HP = 75
SPEED = "120"
PRICE_GP = 5000

# Fixed metadata stamps so every rebuild is byte-identical; these are not
# real clock values, just the deterministic constants the folder uses.
CREATED_MS = 1787708946903
MODIFIED_MS = 1787708946903

ALNUM = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"


def sid(*parts):
    """A deterministic 16-char Foundry-shaped id derived from content."""
    h = hashlib.sha256("::".join(str(p) for p in parts).encode("utf-8")).digest()
    n = int.from_bytes(h, "big")
    out = []
    for _ in range(16):
        n, r = divmod(n, len(ALNUM))
        out.append(ALNUM[r])
    return "".join(out)


def blank_roll():
    return {"min": None, "max": None, "mode": 0}


def item_stats():
    st = {
        "compendiumSource": None,
        "duplicateSource": None,
        "exportSource": None,
        "coreVersion": "14.365",
        "systemId": "dnd5e",
        "systemVersion": "5.3.3",
        "lastModifiedBy": None,
        "createdTime": CREATED_MS,
        "modifiedTime": MODIFIED_MS,
    }
    return st


def feat(name, img, html, sort):
    return {
        "_id": sid("wario-motorbike", "feat", name),
        "name": name,
        "type": "feat",
        "img": img,
        "system": {
            "description": {"value": html, "chat": ""},
            "activities": {},
            "uses": {"spent": 0, "recovery": []},
            "advancement": {},
            "identifier": "",
            "source": {"revision": 1, "rules": "2024"},
            "crewed": False,
            "enchant": {},
            "prerequisites": {"items": [], "repeatable": False},
            "properties": [],
            "requirements": "",
            "type": {"value": "", "subtype": ""},
        },
        "_stats": item_stats(),
        "effects": [],
        "folder": None,
        "sort": sort,
        "flags": {},
        "ownership": {"default": 0},
    }


def weapon(name, img, html, damage_die, sort):
    """A clickable vehicle attack in the Aurelian weapon-item shape."""
    attack_activity = {
        "_id": "dnd5eactivity000",
        "type": "attack",
        "activation": {"type": "", "value": None, "condition": "", "override": False},
        "consumption": {"targets": [], "scaling": {"allowed": False, "max": ""},
                        "spellSlot": True},
        "description": {"chatFlavor": ""},
        "duration": {"concentration": False, "units": "inst", "special": "",
                     "override": False},
        "effects": [],
        "range": {"value": "0", "units": "ft", "special": "", "override": False},
        "target": {"template": {"count": "", "contiguous": False, "type": "",
                                "size": "", "width": "", "height": "",
                                "units": "ft", "stationary": False},
                   "affects": {"count": "", "type": "", "choice": False,
                               "special": ""},
                   "prompt": True, "override": False},
        "uses": {"spent": 0, "max": "", "recovery": []},
        "attack": {"ability": "", "bonus": "", "critical": {}, "flat": False,
                   "type": {"value": "melee", "classification": "weapon"}},
        "damage": {"critical": {}, "includeBase": True,
                   "parts": [{"number": damage_die[0], "denomination": damage_die[1],
                              "bonus": "", "types": ["bludgeoning"],
                              "custom": {"enabled": False, "formula": ""},
                              "scaling": {"mode": "", "number": None,
                                          "formula": ""}}]},
        "sort": 0,
        "flags": {},
        "visibility": {"level": {}, "requireAttunement": False,
                       "requireIdentification": False, "requireMagic": False},
        "img": None,
    }
    return {
        "_id": sid("wario-motorbike", "weapon", name),
        "name": name,
        "type": "weapon",
        "img": img,
        "system": {
            "description": {"value": html, "chat": ""},
            "unidentified": {"name": "Ramming Vehicle",
                             "description": "<p>A heavy motorcycle hurled at "
                                             "full throttle.</p>"},
            "identified": True,
            "quantity": 1,
            "weight": {"value": 0, "units": "lb"},
            "damage": {
                "versatile": {"number": None, "denomination": None, "bonus": "",
                              "types": [], "custom": {"enabled": False, "formula": ""},
                              "scaling": {"mode": "", "number": None, "formula": ""}},
                "base": {"number": damage_die[0], "denomination": damage_die[1],
                         "bonus": "", "types": ["bludgeoning"],
                         "custom": {"enabled": False, "formula": ""},
                         "scaling": {"mode": "", "number": None, "formula": ""}},
            },
            "range": {"value": 0, "units": "ft", "long": None, "reach": None},
            "properties": [],
            "equipped": True,
            "type": {"value": "natural", "baseItem": ""},
            "activities": {"dnd5eactivity000": attack_activity},
            "uses": {"spent": 0, "recovery": [], "max": ""},
            "identifier": "",
            "source": {"revision": 1, "rules": "2024"},
            "container": None,
            "price": {"value": 0, "denomination": "gp"},
            "rarity": "",
            "attunement": "",
            "attuned": False,
            "crew": {"value": []},
            "ammunition": {},
            "armor": {},
            "proficient": None,
            "mastery": "",
        },
        "_stats": item_stats(),
        "effects": [],
        "folder": None,
        "sort": sort,
        "flags": {},
        "ownership": {"default": 0},
    }


def loot(name, img, html, sort):
    return {
        "_id": sid("wario-motorbike", "loot", name),
        "name": name,
        "type": "loot",
        "img": img,
        "system": {
            "description": {"value": html, "chat": ""},
            "unidentified": {"name": "Concealed Stowage",
                             "description": "<p>A hidden panel under a "
                                             "motorcycle seat.</p>"},
            "identified": True,
            "weight": {"value": 0, "units": "lb"},
            "identifier": "",
            "source": {"revision": 1, "rules": "2024"},
            "container": None,
            "quantity": 1,
            "price": {"value": 0, "denomination": "gp"},
            "rarity": "",
            "properties": ["gear"],
            "type": {"value": "", "subtype": ""},
        },
        "_stats": item_stats(),
        "effects": [],
        "folder": None,
        "sort": sort,
        "flags": {},
        "ownership": {"default": 0},
    }


BIOGRAPHY = """<h1>Wario's Motorbike</h1>
<p>Wario's customized motorcycle &mdash; purple with yellow accents and a large
&quot;W&quot; emblem on the gas tank &mdash; is his primary getaway vehicle
when Warp Pipes are not available or practical. It is loud, obnoxious, and
belches black smoke; it can be heard coming from half a mile away, which
somewhat defeats the purpose of a getaway vehicle. Wario refuses to
acknowledge this flaw.</p>
<p><strong>Field record &mdash; The Scorncrow Skirmish.</strong> Wario arrived
on this motorbike roaring &quot;You want fun? Wario show you fun!&quot; at the
overgrown grove &mdash; and the motorbike stalled, caught fast in the leaves
and branches before it had travelled the length of its own entrance. It
remains stalled in the undergrowth, and Waluigi files the motorbike retrieval
fee as pending.</p>
<p><strong>Specifications.</strong> AC 16 (reinforced frame with armor
plating), 75 hit points, damage threshold 10 (attacks dealing less than 10
damage do not harm it), speed 120 feet per round (roughly 80 mph at full
throttle), crew 1 driver and 1 passenger (uncomfortably), cargo 200 pounds in
the rear compartment. The bike runs on &quot;Wario Fuel&quot; &mdash; a
proprietary blend that smells like garlic, burns purple, and is probably
illegal in most jurisdictions; Wario has never actually bought fuel for it,
and it never seems to run out.</p>
<p>Waluigi's machine reference sheet for the motorbike is filed with the
skirmish record. It is a machine-rendered study, so its maroon paint job is
not canon; the item record says purple with yellow accents.</p>
<p><strong>Other records of the same machine.</strong> Wario's sheet carries
this machine twice: as a customized motorcycle (the block above) and as a
weaponized &quot;Custom Chopper&quot; configuration (AC 16, 75 HP, speed 70
ft; forward-facing flamethrower, spiked wheel guards, and an oil slick
dispenser). His Wario Bike Summon feat uses a simpler summoned-mount block
(AC 14, 50 HP, speed 60 ft). This actor is the physical customized
motorcycle.</p>"""


def build():
    items = [
        weapon(
            "Ramming Speed",
            "icons/skills/melee/strike-hammer-destructive-orange.webp",
            "<p>Wario drives the motorbike directly into a creature or object. "
            "Make an attack roll using the <strong>driver's</strong> Strength "
            "modifier + proficiency bonus (this vehicle has no ability scores "
            "of its own, so the item rolls flat here). On a hit the target "
            "takes <strong>4d10 bludgeoning damage</strong>, and the driver "
            "must succeed on a DC 14 Dexterity saving throw or be thrown from "
            "the bike, taking 2d6 bludgeoning damage and landing prone 10 feet "
            "away. The motorbike takes half the damage dealt to the target.</p>",
            (4, 10), 100,
        ),
        feat(
            "Armored Plating (Damage Threshold 10)",
            "icons/commodities/metal/plating-metal-armor-tech-steel.webp",
            "<p><strong>Damage Threshold 10.</strong> Attacks dealing less "
            "than 10 damage do not harm the motorbike because of its "
            "reinforced frame and armor plating. AC is 16.</p>", 200,
        ),
        feat(
            "Nitro Boost",
            "icons/commodities/tech/engine-tech-thrust-yellow.webp",
            "<p>Once per short rest, Wario can activate the illegal nitrous "
            "oxide injectors. For 1 minute the motorbike's speed doubles to "
            "240 feet per round, but handling becomes extremely difficult: all "
            "vehicle maneuver checks are made with disadvantage, and there is "
            "a 20% chance each round that the engine overheats, forcing a stop "
            "for 1d4 rounds while it cools down.</p>", 300,
        ),
        feat(
            "Smoke Screen",
            "icons/commodities/tech/smoke-bomb-purple.webp",
            "<p>As a bonus action, the modified exhaust releases thick black "
            "smoke, filling a 20-foot cube behind the motorbike with heavily "
            "obscuring smoke that lasts 1 minute or until dispersed by strong "
            "wind. Used exclusively to escape pursuers or cover criminal "
            "activity &mdash; never for legitimate purposes.</p>", 400,
        ),
        feat(
            "Wario Fuel",
            "icons/consumables/vegetable/garlic-hardneck-purple.webp",
            "<p>The bike runs on &quot;Wario Fuel&quot;: a blend that smells "
            "like garlic, burns purple, and is probably illegal in most "
            "jurisdictions. Some say it is garlic oil, others suspect pure "
            "greed. Wario has never bought fuel for it, and it never seems to "
            "actually run out. If reduced to 0 HP, it can be resummoned after "
            "a long rest, emerging dented and smoking but functional.</p>",
            500,
        ),
        feat(
            "Signature Horn (WAH HA HA HA!)",
            "icons/tools/instruments/horn-megaphone-loudspeaker.webp",
            "<p>A mounted horn that plays a jarring &quot;WAH HA HA HA!&quot; "
            "when honked, which Wario uses constantly and inappropriately. The "
            "bike has been banned from at least seven cities for noise "
            "violations, emissions standards breaches, and general "
            "obnoxiousness.</p>", 600,
        ),
        feat(
            "Weaponized Loadout (Custom Chopper Configuration)",
            "icons/commodities/tech/engine-thrust-jet.webp",
            "<p>Wario's sheet also records a weaponized configuration of this "
            "machine as <em>Wario's Custom Chopper (Weaponized Motorcycle)</em> "
            "(AC 16, 75 HP, speed 70 ft, rare). It replaces the customizations "
            "above with: a forward-facing flamethrower (bonus action, 15-foot "
            "cone, DC 14 Dexterity save, 2d6 fire damage); spiked wheel guards "
            "(creatures hit by ramming attacks take an extra 1d6 piercing "
            "damage); and an oil slick dispenser (action, 30-foot line of "
            "difficult terrain lasting 1 minute, DC 14 Dexterity save or "
            "fall prone). Use this block when the scene calls for the "
            "weaponized build, not this one.</p>", 700,
        ),
        loot(
            "Hidden Compartment (Under the Seat)",
            "icons/containers/bags/case-simple-brown.webp",
            "<p>A secret compartment under the seat. A DC 18 Intelligence "
            "(Investigation) check finds it if you do not know it is there. "
            "It holds emergency funds (currently 500 gp), a backup Warp Pipe "
            "activator, and what Wario describes as &quot;insurance "
            "documents&quot; &mdash; actually blackmail material on various "
            "business partners.</p>", 800,
        ),
    ]

    actor = {
        "name": NAME,
        "type": "npc",
        "img": IMG,
        "system": {
            "abilities": {
                "str": {"value": 10, "proficient": 0,
                        "bonuses": {"check": "", "save": ""}, "max": None,
                        "check": {"roll": blank_roll()},
                        "save": {"roll": blank_roll()}},
                "dex": {"value": 10, "proficient": 0,
                        "bonuses": {"check": "", "save": ""}, "max": None,
                        "check": {"roll": blank_roll()},
                        "save": {"roll": blank_roll()}},
                "con": {"value": 10, "proficient": 0,
                        "bonuses": {"check": "", "save": ""}, "max": None,
                        "check": {"roll": blank_roll()},
                        "save": {"roll": blank_roll()}},
                "int": {"value": 10, "proficient": 0,
                        "bonuses": {"check": "", "save": ""}, "max": None,
                        "check": {"roll": blank_roll()},
                        "save": {"roll": blank_roll()}},
                "wis": {"value": 10, "proficient": 0,
                        "bonuses": {"check": "", "save": ""}, "max": None,
                        "check": {"roll": blank_roll()},
                        "save": {"roll": blank_roll()}},
                "cha": {"value": 10, "proficient": 0,
                        "bonuses": {"check": "", "save": ""}, "max": None,
                        "check": {"roll": blank_roll()},
                        "save": {"roll": blank_roll()}},
            },
            "attributes": {
                "ac": {"flat": AC, "calc": "flat", "formula": ""},
                "hp": {"value": HP, "max": HP, "formula": "", "temp": None,
                       "tempmax": None},
                "movement": {"walk": SPEED, "units": "ft", "hover": False,
                             "ignoredDifficultTerrain": []},
                "senses": {"units": "ft",
                           "ranges": {"darkvision": None, "blindsight": None,
                                      "tremorsense": None, "truesight": None},
                           "special": ""},
                "init": {"ability": "", "roll": blank_roll(), "bonus": ""},
                "attunement": {"max": 3},
                "spellcasting": "",
                "exhaustion": 0,
                "concentration": {"ability": "", "roll": blank_roll(),
                                  "bonuses": {"save": ""}, "limit": 1},
                "loyalty": {},
                "hd": {"spent": 0},
                "death": {"roll": blank_roll(), "success": 0, "failure": 0,
                          "bonuses": {"save": ""}},
                "price": {"value": PRICE_GP, "denomination": "gp"},
                "spell": {"level": 0},
            },
            "details": {
                "alignment": "unaligned",
                "type": {"value": "construct",
                         "subtype": "customized motorcycle (Wario's Enterprise)"},
                "cr": "",
                "biography": {"value": BIOGRAPHY,
                              "public": "A customized purple-and-yellow "
                                        "motorcycle with a large \"W\" on the "
                                        "gas tank, armored plating, and "
                                        "saddlebags. It is currently stalled "
                                        "in the undergrowth of the overgrown "
                                        "grove."},
                "race": "Customized Motorcycle",
                "ideal": "",
                "bond": "",
                "flaw": "",
                "habitat": {"value": [], "custom": ""},
                "treasure": {"value": []},
            },
            "traits": {
                "size": "lg",
                "languages": {"value": [], "custom": "", "communication": {}},
                "ci": {"value": [], "custom": ""},
                "di": {"value": [], "custom": "", "bypasses": []},
                "dr": {"value": [], "custom": "", "bypasses": []},
                "dv": {"value": [], "custom": ""},
                "dm": {"value": [], "custom": ""},
                "important": False,
            },
            "skills": {},
            "source": {"custom": "Wario's Enterprise", "revision": 1,
                       "rules": "2024"},
            "currency": {"pp": 0, "gp": 0, "ep": 0, "sp": 0, "cp": 0},
            "bonuses": {
                "mwak": {"attack": "", "damage": ""},
                "rwak": {"attack": "", "damage": ""},
                "msak": {"attack": "", "damage": ""},
                "rsak": {"attack": "", "damage": ""},
                "abilities": {"check": "", "save": "", "skill": ""},
                "spell": {"dc": ""},
            },
            "tools": {},
            "spells": {("spell%d" % l): {"value": 0} for l in range(1, 10)},
            "resources": {"legact": {"max": 0, "spent": 0},
                          "legres": {"max": 0, "spent": 0},
                          "lair": {"value": False, "initiative": None,
                                   "inside": False}},
        },
        "prototypeToken": {
            "name": NAME,
            "displayName": 0,
            "actorLink": False,
            "width": 2,
            "height": 1,
            "texture": {"src": IMG, "anchorX": 0.5, "anchorY": 0.5,
                        "fit": "contain", "scaleX": 1, "scaleY": 1,
                        "tint": "#ffffff", "alphaThreshold": 0.75},
            "lockRotation": False,
            "rotation": 0,
            "alpha": 1,
            "disposition": 0,
            "displayBars": 0,
            "bar1": {"attribute": "attributes.hp"},
            "bar2": {"attribute": None},
            "light": {"negative": False, "priority": 0, "alpha": 0.5,
                      "angle": 360, "bright": 0, "color": None,
                      "coloration": 1, "dim": 0, "attenuation": 0.5,
                      "luminosity": 0.5, "saturation": 0, "contrast": 0,
                      "shadows": 0,
                      "animation": {"type": None, "speed": 5, "intensity": 5,
                                    "reverse": False},
                      "darkness": {"min": 0, "max": 1}},
            "sight": {"enabled": False, "range": 0, "angle": 360,
                      "visionMode": "basic", "color": None,
                      "attenuation": 0.1, "brightness": 0, "saturation": 0,
                      "contrast": 0},
            "detectionModes": {},
            "occludable": {"radius": 0},
            "ring": {"enabled": False,
                     "colors": {"ring": None, "background": None},
                     "effects": 1,
                     "subject": {"scale": 1, "texture": None}},
            "turnMarker": {"mode": 1, "animation": None, "src": None,
                           "disposition": False},
            "movementAction": None,
            "flags": {},
            "randomImg": False,
            "appendNumber": False,
            "prependAdjective": False,
            "depth": 1,
        },
        "items": items,
        "effects": [],
        "folder": None,
        "ownership": {"default": 0},
        "flags": {},
        "_stats": {
            "compendiumSource": None,
            "duplicateSource": None,
            "exportSource": None,
            "coreVersion": "14.365",
            "systemId": "dnd5e",
            "systemVersion": "5.3.3",
            "createdTime": CREATED_MS,
            "modifiedTime": MODIFIED_MS,
            "lastModifiedBy": None,
        },
    }
    # NPC: spells must include a pact slot like the other npc exports.
    actor["system"]["spells"]["pact"] = {"value": 0}
    return actor


def load_manifest():
    out = set()
    with open(MANIFEST, encoding="utf-8") as fh:
        for line in fh:
            p = line.strip().replace("\\", "/").lstrip("/")
            if p:
                out.add(p)
    return out


def main():
    ap = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--check", action="store_true")
    ap.add_argument("--out", default=DST)
    args = ap.parse_args()

    if not os.path.isfile(MANIFEST):
        print("FATAL: asset manifest not found: %s" % MANIFEST)
        return 2

    actor = build()
    manifest = load_manifest()

    counts = {}
    for it in actor["items"]:
        counts[it["type"]] = counts.get(it["type"], 0) + 1

    print("Wario's Motorbike — vehicle NPC")
    print("  type          : %s" % actor["type"])
    print("  ac            : %d (flat, armor plating)" % AC)
    print("  hp            : %d  (item record: 75)" % HP)
    print("  speed         : %s ft/round  (item record: 120 ft/round)" % SPEED)
    print("  size          : Large (token 2x1)")
    print("  items         : %d" % len(actor["items"]))
    for t in sorted(counts):
        print("      %-12s %d" % (t, counts[t]))
    print("  cr            : blank (vehicles have no challenge rating)")
    print("  abilities     : neutral 10s; ramming uses the driver's modifiers")

    problems = []
    if actor["type"] != "npc":
        problems.append("type is not npc")
    if actor["system"]["details"]["cr"] != "":
        problems.append("cr should be blank for a vehicle")
    if actor["system"]["attributes"]["ac"]["flat"] != AC:
        problems.append("ac not %d" % AC)
    if actor["system"]["attributes"]["hp"]["value"] != HP:
        problems.append("hp not %d" % HP)
    if actor["system"]["attributes"]["movement"]["walk"] != SPEED:
        problems.append("speed not %s" % SPEED)
    races = [i for i in actor["items"] if i.get("type") == "race"]
    if races:
        problems.append("NPC must not carry a race item")
    ids = [i["_id"] for i in actor["items"]]
    if len(set(ids)) != len(ids):
        problems.append("duplicate item ids")
    if any(len(i) != 16 or not i.isalnum() for i in ids):
        problems.append("item ids are not 16-char Foundry ids")
    expected = {
        "Ramming Speed", "Armored Plating (Damage Threshold 10)",
        "Nitro Boost", "Smoke Screen", "Wario Fuel",
        "Signature Horn (WAH HA HA HA!)",
        "Weaponized Loadout (Custom Chopper Configuration)",
        "Hidden Compartment (Under the Seat)",
    }
    if {i["name"] for i in actor["items"]} != expected:
        problems.append("item set differs from the expected list")

    # every image reference must resolve against the campaign manifest
    refs = [actor["img"], actor["prototypeToken"]["texture"]["src"]]
    refs += [i["img"] for i in actor["items"]]
    for r in refs:
        p = r.replace("\\", "/").lstrip("/").split("?")[0]
        ok = p in manifest or p.startswith("icons/svg/") or p.startswith(
            ("http://", "https://", "data:"))
        if not ok:
            problems.append("image not in asset manifest: %s" % r)

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
        fh.write(json.dumps(actor, ensure_ascii=False, indent=2) + "\n")
    print("  written -> %s" % args.out)
    return 0


if __name__ == "__main__":
    sys.exit(main())
