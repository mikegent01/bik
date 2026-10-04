#!/usr/bin/env python3
"""Build the Peach's Castle 955 BF Foundry VTT actors (dnd5e 5.3.3 / core 14).

One NPC export per figure in docs/3d-reference/peachs-castle-955/ plus the
"Interloper at the Council" scene kit: Bowser and the force he brings when he
kicks in the doors of a crucial palace meeting. Thirty actors in all:

  court      Princess Peach (955 BF), Toadsworth the Elder, the Captain of the
             Palace Guard, nine palace-guard kits, four household roles and the
             hooded Mages' Guild adept.
  incursion  Bowser, the Interloper (955 BF) and twelve Koopa Troop units
             (Koopa Troopa, Goomba, Hammer Bro, Magikoopa, Koopatrol, Bob-omb
             sapper, Paratroopa, Sledge Bro, Dry Bones, Boo, Chargin' Chuck,
             Lakitu spotter).

Design rules (same as tools/build-sanctum-npcs.py):
  * type "npc", one file each, prototype token unlinked, no species/class/
    background items. Everything a table needs is on the sheet.
  * Deterministic: ids are sha256 of (owner, kind, name); running the script
    twice yields byte-identical files, so --check can diff against disk.
  * Portrait + token are the transparent cutouts installed under
    Reputation-Matrix2/portraits/peachs-castle-955/ (Foundry path
    portraits/peachs-castle-955/<file>.png). Item icons are Foundry core icons,
    verified against the DM's image library (`image paths.txt`) before writing.
  * Levels come from the XP ledger (data/abilityPoints.json): Peach and
    Toadsworth the Elder are level 4 there, so their CRs stay in that band.
    Bowser is a present-day PLAYER character (level 8, fvtt-Actor-bowser-*.json);
    the 955 BF interloper is a separate era statblock and must never replace it.
  * Nothing here is a filed event. The council scene is a GM scene kit; the
    canon anchor is events.json `highsun_1_955_bf_the_day_of`.

Usage:
    python3 tools/build-peachs-castle-955-actors.py            # write
    python3 tools/build-peachs-castle-955-actors.py --check    # verify on disk
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RM = os.path.join(ROOT, "Reputation-Matrix2")
ACTORS = os.path.join(RM, "actors", "peachs-castle-955")
PORTRAITS = os.path.join(RM, "portraits", "peachs-castle-955")
IMAGE_LIB = os.path.join(RM, "tools", "item sheet examples", "image paths.txt")
TOKEN_PREFIX = "portraits/peachs-castle-955/"
FOUNDRY_ID = re.compile(r"^[A-Za-z0-9]{16}$")

ABILITY_KEYS = ("str", "dex", "con", "int", "wis", "cha")
SKILL_ABILITY = {
    "acr": "dex", "ani": "wis", "arc": "int", "ath": "str", "dec": "cha",
    "his": "int", "ins": "wis", "itm": "cha", "inv": "int", "med": "wis",
    "nat": "int", "prc": "wis", "prf": "cha", "per": "cha", "rel": "int",
    "slt": "dex", "ste": "dex", "sur": "wis",
}
SOURCE = {"custom": "Waluipedia campaign", "book": "", "page": "",
          "license": "", "revision": 1, "rules": "2024"}

ERA = ("<p><em>Era sheet: Highsun 1, 955 BF, Peach's Castle.</em> Art and stats "
       "describe this figure on the night of the Day Of (events.json "
       "<code>highsun_1_955_bf_the_day_of</code>), not the present day of the "
       "campaign (1040 BF).</p>")
SCENE = ("<p><strong>Scene kit — The Interloper at the Council.</strong> Bowser and "
         "his force burst in on a crucial palace meeting. This is a GM scene kit, "
         "not a filed event; nothing on this sheet changes the canon record of what "
         "happened that night.</p>")


# ------------------------------------------------------------------ helpers

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


def abilities(scores, proficient=()):
    out = {}
    for k in ABILITY_KEYS:
        out[k] = {
            "value": scores[k],
            "proficient": 1 if k in proficient else 0,
            "bonuses": {"check": "", "save": ""},
            "max": None,
            "check": {"roll": blank_roll()},
            "save": {"roll": blank_roll()},
        }
    return out


def scores(s, d, c, i, w, ch):
    return dict(zip(ABILITY_KEYS, (s, d, c, i, w, ch)))


def skills(trained):
    out = {}
    for k, ab in SKILL_ABILITY.items():
        out[k] = {
            "value": trained.get(k, 0),
            "ability": ab,
            "roll": blank_roll(),
            "bonuses": {"check": "", "passive": ""},
        }
    return out


def uses_block(uses):
    """uses: None | ("1", "day") | ("1", "recharge", "5")."""
    if not uses:
        return {"spent": 0, "max": "", "recovery": []}
    if uses[1] == "recharge":
        rec = [{"period": "recharge", "formula": uses[2]}]
    else:
        rec = [{"period": uses[1], "type": "recoverAll"}]
    return {"spent": 0, "max": uses[0], "recovery": rec}


def feat(owner, name, img, html, uses=None):
    return {
        "_id": sid(owner, "feat", name),
        "name": name,
        "type": "feat",
        "img": img,
        "system": {
            "description": {"value": html, "chat": ""},
            "type": {"value": "monster", "subtype": ""},
            "activation": {}, "duration": {}, "target": {}, "range": {},
            "uses": uses_block(uses),
            "activities": {},
            "source": dict(SOURCE),
        },
        "effects": [], "flags": {}, "sort": 0,
        "ownership": {"default": 0},
    }


def _damage_part(number=None, denomination=None, types=(), bonus=""):
    return {"number": number, "denomination": denomination, "bonus": bonus,
            "types": list(types),
            "custom": {"enabled": False, "formula": ""},
            "scaling": {"mode": "", "number": None, "formula": ""}}


def attack(owner, name, img, html, *, dmg, ability="str", kind="melee",
           cls="weapon", wtype="simpleM", props=(), reach=None, rng=None,
           versatile=None):
    """A weapon item with one explicit attack activity.

    dmg / versatile: (number, denomination, [types]). The ability modifier is
    added by the system for weapon attacks, so the formulas carry no flat bonus.
    """
    activity = {
        "_id": "dnd5eactivity000",
        "type": "attack",
        "activation": {"type": "action", "value": 1, "condition": "", "override": False},
        "consumption": {"targets": [], "scaling": {"allowed": False, "max": ""},
                        "spellSlot": True},
        "description": {"chatFlavor": ""},
        "duration": {"concentration": False, "value": "", "units": "inst",
                     "special": "", "override": False},
        "effects": [],
        "range": {"units": "ft", "special": "", "override": False},
        "target": {"template": {"count": "", "contiguous": False, "type": "",
                                "size": "", "width": "", "height": "",
                                "units": "ft", "stationary": False},
                   "affects": {"count": "", "type": "", "choice": False,
                               "special": ""},
                   "prompt": True, "override": False},
        "uses": {"spent": 0, "max": "", "recovery": []},
        "attack": {"ability": ability, "bonus": "", "critical": {"threshold": None},
                   "flat": False, "type": {"value": kind, "classification": cls}},
        "damage": {"critical": {"bonus": ""}, "includeBase": True, "parts": []},
        "sort": 0, "flags": {},
        "visibility": {"level": {}, "requireAttunement": False,
                       "requireIdentification": False, "requireMagic": False},
        "img": None,
    }
    vers = _damage_part(*versatile) if versatile else _damage_part()
    return {
        "_id": sid(owner, "weapon", name),
        "name": name,
        "type": "weapon",
        "img": img,
        "system": {
            "description": {"value": html, "chat": ""},
            "source": dict(SOURCE),
            "quantity": 1,
            "weight": {"value": 0, "units": "lb"},
            "price": {"value": 0, "denomination": "gp"},
            "attunement": "", "rarity": "", "identified": True, "cover": None,
            "range": {"value": rng[0] if rng else None,
                      "long": rng[1] if rng else None,
                      "units": "ft", "reach": reach},
            "uses": {"spent": 0, "max": "", "recovery": []},
            "damage": {"versatile": vers, "base": _damage_part(*dmg)},
            "armor": {"value": 10},
            "hp": {"value": 0, "max": 0, "dt": None, "conditions": ""},
            "properties": list(props),
            "type": {"value": wtype, "baseItem": ""},
            "container": None, "equipped": True, "proficient": None,
            "identifier": "", "attuned": False, "ammunition": {},
            "crew": {"value": []},
            "activities": {"dnd5eactivity000": activity},
        },
        "effects": [], "flags": {}, "sort": 0,
        "ownership": {"default": 0},
    }


def npc(*, slug, name, token, side, size, sc, prof_saves=(), trained=None,
        ac, hp, hp_formula, cr, walk, fly=0, hover=False, darkvision=0,
        languages=("common",), type_value, type_subtype, alignment,
        biography, items, di=(), dr=(), dr_bypass=(), dv=(), ci=(),
        resources=None, token_size=1):
    img = TOKEN_PREFIX + token
    doc = {
        "name": name,
        "type": "npc",
        "img": img,
        "system": {
            "abilities": abilities(sc, prof_saves),
            "attributes": {
                "ac": {"flat": ac, "calc": "natural", "formula": ""},
                "hp": {"value": hp, "max": hp, "formula": hp_formula,
                       "temp": None, "tempmax": None},
                "movement": {"walk": str(walk), "units": "ft", "hover": hover,
                             "burrow": "0", "climb": "0", "fly": str(fly),
                             "swim": "0", "ignoredDifficultTerrain": []},
                "senses": {"units": "ft", "ranges": {"darkvision": darkvision},
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
            },
            "details": {
                "alignment": alignment,
                "type": {"value": type_value, "subtype": type_subtype},
                "cr": cr,
                "biography": {"value": biography, "public": ""},
            },
            "traits": {
                "size": size,
                "languages": {"value": list(languages), "custom": "",
                              "communication": {}},
                "ci": {"value": list(ci), "custom": ""},
                "di": {"value": list(di), "custom": "", "bypasses": []},
                "dr": {"value": list(dr), "custom": "", "bypasses": list(dr_bypass)},
                "dv": {"value": list(dv), "custom": "", "bypasses": []},
                "dm": {"amount": {}, "bypasses": []},
                "important": False,
            },
            "skills": skills(trained or {}),
            "source": {"custom": "Waluipedia campaign", "revision": 1,
                       "rules": "2024"},
            "currency": {"pp": 0, "gp": 0, "ep": 0, "sp": 0, "cp": 0},
            "bonuses": {},
            "tools": {},
            "spells": {},
            "resources": resources or {},
        },
        "prototypeToken": {
            "name": name,
            "displayName": 0,
            "actorLink": False,
            "width": token_size,
            "height": token_size,
            "texture": {"src": img, "anchorX": 0.5, "anchorY": 0.5,
                        "fit": "contain", "scaleX": 1, "scaleY": 1,
                        "tint": "#ffffff", "alphaThreshold": 0.75},
            "lockRotation": False,
            "rotation": 0,
            "alpha": 1,
            "disposition": 1 if side == "court" else -1,
            "displayBars": 0,
            "bar1": {"attribute": "attributes.hp"},
            "bar2": {"attribute": None},
        },
        "items": items,
        "effects": [],
        "folder": None,
        "ownership": {"default": 0},
        "flags": {},
        "_stats": {"coreVersion": "14.365", "systemId": "dnd5e",
                   "systemVersion": "5.3.3", "compendiumSource": None,
                   "duplicateSource": None},
    }
    for i, item in enumerate(doc["items"]):
        item["sort"] = 100000 * (i + 1)
    return slug, doc


def alt_tokens(*files):
    """Footnote listing the alternate token cutouts shipped for a kit."""
    links = ", ".join(f"<code>{TOKEN_PREFIX}{f}</code>" for f in files)
    return f"<p><em>Alternate tokens:</em> {links}.</p>"


# ------------------------------------------------------------- icon shelf
I = {
    "halberd": "icons/weapons/polearms/halberd-crescent-steel.webp",
    "spear": "icons/weapons/polearms/spear-simple-engraved.webp",
    "pike": "icons/weapons/polearms/pike-flared-brown.webp",
    "sabre": "icons/weapons/swords/sword-guard-brass-worn.webp",
    "shortsword": "icons/weapons/swords/shortsword-guard-brass.webp",
    "crossbow": "icons/weapons/crossbows/crossbow-simple-brown.webp",
    "mace": "icons/weapons/maces/mace-round-steel.webp",
    "dagger": "icons/weapons/daggers/dagger-simple-black.webp",
    "club": "icons/weapons/clubs/club-simple-barbed.webp",
    "staff": "icons/weapons/staves/staff-ornate-purple.webp",
    "hammer": "icons/weapons/hammers/hammer-war-spiked.webp",
    "maul": "icons/weapons/hammers/hammer-double-engraved.webp",
    "fist": "icons/skills/melee/unarmed-punch-fist.webp",
    "claw": "icons/creatures/claws/claw-straight-orange.webp",
    "bite": "icons/creatures/abilities/mouth-teeth-fire-orange.webp",
    "shield": "icons/skills/melee/shield-block-gray-orange.webp",
    "kite": "icons/equipment/shield/kite-wooden-oak-glow.webp",
    "buckler": "icons/equipment/shield/round-wooden-boss-steel-brown.webp",
    "lantern": "icons/sundries/lights/lantern-iron-yellow.webp",
    "candle": "icons/sundries/lights/candle-unlit-white.webp",
    "horn": "icons/tools/instruments/horn-red-brown.webp",
    "key": "icons/sundries/misc/key-steel.webp",
    "pot": "icons/tools/cooking/pot-camping-iron-black.webp",
    "sealed": "icons/sundries/documents/document-sealed-signatures-red.webp",
    "scroll": "icons/sundries/scrolls/scroll-bound-white-tan.webp",
    "diplomacy": "icons/skills/social/diplomacy-handshake.webp",
    "intimidate": "icons/skills/social/intimidation-impressing.webp",
    "halt": "icons/skills/social/wave-halt-stop.webp",
    "wings": "icons/skills/movement/feet-winged-boots-brown.webp",
    "run": "icons/skills/movement/figure-running-gray.webp",
    "strike": "icons/skills/melee/strike-slashes-orange.webp",
    "wound": "icons/skills/wounds/injury-pain-body-orange.webp",
    "fireball": "icons/magic/fire/explosion-fireball-large-orange.webp",
    "firebolt": "icons/magic/fire/projectile-fireball-embers-yellow.webp",
    "firefist": "icons/magic/fire/flame-burning-fist-strike.webp",
    "shockwave": "icons/magic/sonic/explosion-shock-wave-teal.webp",
    "shout": "icons/magic/sonic/scream-wail-shout-teal.webp",
    "bell": "icons/magic/sonic/bell-alarm-red-purple.webp",
    "fear": "icons/magic/control/fear-fright-monster-grin-red-orange.webp",
    "chains": "icons/magic/control/debuff-chains-purple.webp",
    "skull": "icons/magic/death/skull-horned-goat-pentagram-red.webp",
    "disintegrate": "icons/magic/unholy/strike-body-explode-disintegrate.webp",
    "fog": "icons/magic/air/fog-gas-smoke-dense-gray.webp",
    "wind": "icons/magic/air/wind-tornado-wall-blue.webp",
    "ward": "icons/magic/defensive/shield-barrier-flaming-diamond-orange.webp",
    "eye": "icons/magic/perception/eye-ringed-glow-angry-small-red.webp",
    "beam": "icons/magic/light/beam-strike-orange-gold.webp",
    "bolt": "icons/magic/lightning/bolt-strike-blue.webp",
    "blink": "icons/magic/movement/trail-streak-impact-blue.webp",
    "spin": "icons/magic/movement/pinwheel-turning-blue.webp",
    "orb": "icons/magic/water/orb-ice-web.webp",
    "paw": "icons/magic/nature/wolf-paw-glow-large-teal-blue.webp",
    "bone": "icons/commodities/bones/bone-broken-grey.webp",
    "up": "icons/skills/movement/arrow-upward-yellow.webp",
}


# ------------------------------------------------------------------ court

def guard_bio(role, lines, alts=None):
    html = ERA + (
        "<p><strong>Palace Guard — " + role + ".</strong> Royal-blue tabard with gold "
        "trim and the pink mushroom-crown crest, white gloves, brown belt, silver "
        "pauldrons and a silver kettle-helm brim ring over the red-spot cap. The "
        "livery is reconstructed from the archive, not an official reference.</p>")
    html += "".join(f"<p>{ln}</p>" for ln in lines)
    html += ("<p>Within the month after the Day Of, guard witnesses were "
             "<q>already dying</q> (<code>first_month_incidents</code>). Any guard "
             "who sees too much tonight has a short life expectancy on the record.</p>")
    if alts:
        html += alt_tokens(*alts)
    return html


def build_court():
    out = []

    # --- Princess Peach ------------------------------------------------
    o = "princess-peach-955"
    out.append(npc(
        slug=o, name="Princess Peach (955 BF)", token="peach.png", side="court",
        size="med", sc=scores(9, 14, 11, 14, 15, 20), prof_saves=("wis", "cha"),
        trained={"per": 2, "ins": 1, "his": 1, "prf": 1, "med": 1},
        ac=13, hp=45, hp_formula="10d8", cr=2, walk=30,
        type_value="humanoid", type_subtype="human", alignment="Lawful Good",
        biography=ERA + (
            "<p>The reigning monarch of the Mushroom Kingdom, alive and holding court. "
            "Pink gown, golden crown, white gloves, sapphire brooch, parasol. The XP "
            "ledger (<code>data/abilityPoints.json</code>) carries her at level 4, so "
            "this sheet sits at CR 2: a sovereign, not a duelist.</p>"
            "<p>On this night Luigi stands guard at the Royal Suite under her own "
            "orders, Fawful is already in the chimney, and Mayor Thornpaw is "
            "conferring with two hooded Mages' Guild mages. The present-day record "
            "lists her as <em>Deceased — assassinated under circumstances that remain "
            "disputed</em> (characters.json <code>princess_peach</code>). Use this "
            "sheet for flashback and council scenes only; the present-day portrait "
            "<code>portraits/princess_peach.jpg</code> is a different artefact.</p>"),
        items=[
            attack(o, "Parasol", I["club"],
                   "<p>A lace parasol with a steel rib. Finesse; she fights like someone "
                   "who was taught fencing as a courtesy and took it seriously.</p>",
                   dmg=(1, 6, ["bludgeoning"]), ability="dex", props=["fin"]),
            feat(o, "Royal Presence", I["diplomacy"],
                 "<p>Allies within 30 feet who can see the Princess have advantage on "
                 "saving throws against being frightened. A hostile creature that can "
                 "see her must succeed on a DC 15 Wisdom saving throw the first time it "
                 "tries to attack her on its turn; on a failure it chooses a different "
                 "target or loses the attack. Creatures immune to being charmed and "
                 "anyone who has already damaged her are unaffected.</p>"),
            feat(o, "Rally the Guard (Bonus Action, 3/Day)", I["halt"],
                 "<p>One allied palace guard within 60 feet that can hear her uses its "
                 "reaction to move up to its speed without provoking opportunity attacks "
                 "or to make one weapon attack.</p>", uses=("3", "day")),
            feat(o, "Parasol Glide", I["wind"],
                 "<p>While holding the parasol she takes no falling damage, descends at "
                 "60 feet per round and can move 2 feet horizontally for every foot she "
                 "falls. Balconies are exits.</p>"),
            feat(o, "The Vault Opens for Her", I["key"],
                 "<p>The royal vault answers to the Princess herself — which is why "
                 "Fawful's prize tonight is a lock of her hair. Only she (or something "
                 "that carries her) can open it. No mechanical benefit; a plot fact.</p>"),
        ]))

    # --- Toadsworth the Elder -----------------------------------------
    o = "toadsworth-the-elder-955"
    out.append(npc(
        slug=o, name="Toadsworth the Elder, Royal Chamberlain (955 BF)",
        token="toadsworth-elder.png", side="court",
        size="sm", sc=scores(8, 10, 12, 16, 17, 14), prof_saves=("wis",),
        trained={"his": 2, "ins": 1, "per": 1, "prc": 1, "inv": 1},
        ac=11, hp=27, hp_formula="6d6 + 6", cr=1, walk=25,
        type_value="humanoid", type_subtype="toad", alignment="Lawful Neutral",
        biography=ERA + (
            "<p>Royal Chamberlain for more than thirty years. Beige spotted cap, "
            "spectacles, white moustache, charcoal cloak with brooch over a purple "
            "waistcoat and bow tie; cane and pocket watch. Level 4 in the XP ledger "
            "(<code>toadsworth_sr</code>), so CR 1 — he wins rooms, not fights.</p>"
            "<p>After the Day Of he becomes Acting Regent; he dies around 1020 BF and "
            "his journals are disputed. The archive titles him <em>The Chamberlain Who "
            "May Have Betrayed Everything</em>. This sheet does not answer that: whether "
            "tonight he is a loyal old servant, a frightened one, or part of the "
            "arrangement is the GM's call, and both readings fit the stats. His son, "
            "Chancellor Toadsworth, is a different character.</p>"),
        items=[
            attack(o, "Walking Cane", I["club"],
                   "<p>Ebony, silver-headed, used mostly for pointing at people.</p>",
                   dmg=(1, 4, ["bludgeoning"]), props=["lgt"]),
            feat(o, "Keys to Every Door", I["key"],
                 "<p>The chamberlain's ring opens every ordinary lock in Peach's Castle — "
                 "state rooms, the Royal Suite corridor, the servants' stairs, the "
                 "chimney hatches — but not the royal vault, which answers to the "
                 "Princess alone. He knows which doors stick and which creak.</p>"),
            feat(o, "Steady Counsel", I["diplomacy"],
                 "<p>He can take the Help action as a bonus action, and when he helps an "
                 "ally with an Intelligence, Wisdom or Charisma check the ally also adds "
                 "+2 to the roll.</p>"),
            feat(o, "Thirty Years of Authority (Action, 1/Day)", I["halt"],
                 "<p>Every palace guard and household member within 60 feet that can hear "
                 "him may immediately use a reaction to move up to half its speed, and "
                 "each has advantage on its next attack roll or saving throw before the "
                 "start of his next turn. Guards do what the Chamberlain says, which is "
                 "exactly the problem if the Chamberlain is compromised.</p>",
                 uses=("1", "day")),
        ]))

    # --- Captain of the Palace Guard ----------------------------------
    o = "palace-guard-captain-955"
    out.append(npc(
        slug=o, name="Captain of the Palace Guard (955 BF)", token="guard-captain.png",
        side="court", size="sm", sc=scores(15, 14, 16, 12, 14, 14),
        prof_saves=("str", "con"), trained={"ath": 1, "prc": 1, "ins": 1, "itm": 1},
        ac=16, hp=52, hp_formula="8d6 + 24", cr=3, walk=25,
        type_value="humanoid", type_subtype="toad", alignment="Lawful Good",
        biography=guard_bio("Captain", [
            "Red plume on a silver morion, grey moustache, crimson sash, cavalry sabre, "
            "breastplate under the tabard. Unnamed in the archive — not Captain Toadette, "
            "whose mother is still a pregnant shopkeeper printing 575 pamphlets tonight.",
            "He carries a sealed order (visible on the plate). Who sealed it and what it "
            "says is the GM's call; it is the kind of prop that makes the Day Of a "
            "mystery rather than an accident.",
        ]),
        items=[
            attack(o, "Sabre", I["sabre"],
                   "<p>Cavalry sabre, parade-polished and combat-sharpened.</p>",
                   dmg=(1, 6, ["slashing"]), wtype="martialM", props=["fin", "lgt"]),
            feat(o, "Multiattack", I["strike"],
                 "<p>The Captain makes two Sabre attacks.</p>"),
            feat(o, "Leadership (Action, 1/Day)", I["halt"],
                 "<p>For 1 minute, each allied palace guard within 30 feet that can see "
                 "or hear him adds a d4 to its attack rolls and saving throws. The effect "
                 "ends early if the Captain is incapacitated.</p>", uses=("1", "day")),
            feat(o, "Hold the Line (Reaction)", I["shield"],
                 "<p>When an ally within 5 feet is hit by an attack, the Captain grants it "
                 "+2 AC against that attack, potentially turning the hit into a miss. He "
                 "must be able to see the attacker.</p>"),
            feat(o, "Sealed Orders", I["sealed"],
                 "<p>A folded order under wax, not yet broken. Plot prop: contents are "
                 "the GM's call.</p>"),
        ]))

    # --- Guard kits -----------------------------------------------------
    toad = dict(side="court", size="sm", walk=25, type_value="humanoid",
                type_subtype="toad", alignment="Lawful Good")

    o = "toad-gate-guard"
    out.append(npc(
        slug=o, name="Palace Gate Guard", token="guard-gate-halberd.png",
        sc=scores(14, 12, 14, 10, 12, 10), trained={"prc": 1, "ath": 1, "ins": 1},
        ac=16, hp=16, hp_formula="3d6 + 6", cr=0.5,
        biography=guard_bio("Gate", [
            "Halberd and blue kite shield. The gate pair are the first to see anything "
            "come up the causeway — and tonight, the first to see Bowser.",
        ]),
        items=[
            attack(o, "Palace Halberd", I["halberd"],
                   "<p>A light ceremonial halberd that is still a halberd. Reach.</p>",
                   dmg=(1, 8, ["slashing"]), wtype="martialM", props=["rch"], reach=10),
            feat(o, "Hold the Gate", I["kite"],
                 "<p>Creatures provoke an opportunity attack from the gate guard when "
                 "they enter its reach, not only when they leave it.</p>"),
            feat(o, "Challenge", I["eye"],
                 "<p>Advantage on Wisdom (Insight) checks to see through forged passes, "
                 "disguises and bluster at the gate.</p>"),
        ], **toad))

    o = "toad-door-guard"
    out.append(npc(
        slug=o, name="Palace Door Guard", token="guard-door-spear-a.png",
        sc=scores(13, 12, 14, 10, 12, 10), trained={"prc": 1},
        ac=14, hp=11, hp_formula="2d6 + 4", cr=0.25,
        biography=guard_bio("Door", [
            "Short spear, posted in pairs on the state-room and suite doors. Luigi holds "
            "the Royal Suite door tonight under the Princess's own orders; these two are "
            "everyone else's doors.",
        ], alts=["guard-door-spear-b.png"]),
        items=[
            attack(o, "Spear", I["spear"],
                   "<p>Thrown 20/60. Versatile.</p>",
                   dmg=(1, 6, ["piercing"]), props=["thr", "ver"], rng=(20, 60),
                   versatile=(1, 8, ["piercing"])),
            feat(o, "Watchful Post", I["eye"],
                 "<p>While on post the guard cannot be surprised and has advantage on "
                 "Wisdom (Perception) checks to notice creatures approaching its door.</p>"),
            feat(o, "Call It In", I["shout"],
                 "<p>On its turn (no action required) the guard shouts: every palace guard "
                 "within 60 feet that can hear it is alerted and moves toward the sound on "
                 "its next turn.</p>"),
        ], **toad))

    o = "toad-ceremonial-guard"
    out.append(npc(
        slug=o, name="Palace Guard at Attention", token="guard-attention-a.png",
        sc=scores(13, 10, 12, 10, 11, 10), trained={"prc": 1},
        ac=13, hp=9, hp_formula="2d6 + 2", cr=0.125,
        biography=guard_bio("Ceremonial post", [
            "Unarmed, at attention along the hall — the guards a visiting warlord walks "
            "straight past. They grab rather than strike.",
        ], alts=["guard-attention-b.png"]),
        items=[
            attack(o, "Unarmed Strike", I["fist"],
                   "<p>White-gloved and surprisingly firm.</p>",
                   dmg=(1, 4, ["bludgeoning"])),
            feat(o, "Seize", I["chains"],
                 "<p>Instead of damage, a hit with its Unarmed Strike grapples the target "
                 "(escape DC 11). Two ceremonial guards grappling the same creature give "
                 "it disadvantage on the escape check.</p>"),
            feat(o, "Parade Discipline", I["halt"],
                 "<p>Advantage on saving throws against being frightened while within 10 "
                 "feet of another palace guard.</p>"),
        ], **toad))

    o = "toad-guard-sergeant"
    out.append(npc(
        slug=o, name="Palace Guard Sergeant", token="guard-sergeant.png",
        sc=scores(14, 14, 14, 11, 13, 13), trained={"prc": 1, "itm": 1, "ath": 1},
        ac=15, hp=22, hp_formula="4d6 + 8", cr=1,
        biography=guard_bio("Sergeant", [
            "Red sash, short sword, the voice of the watch. Sergeants run the rota that "
            "decides which guard is standing where on the Day Of — a detail the "
            "disputed journals never agree on.",
        ]),
        items=[
            attack(o, "Shortsword", I["shortsword"], "<p>Standard issue.</p>",
                   dmg=(1, 6, ["piercing"]), wtype="martialM", props=["fin", "lgt"]),
            feat(o, "Multiattack", I["strike"],
                 "<p>The sergeant makes two Shortsword attacks.</p>"),
            feat(o, "Bark Orders (Bonus Action)", I["shout"],
                 "<p>One palace guard within 30 feet that can hear the sergeant uses its "
                 "reaction to move up to its speed without provoking opportunity attacks, "
                 "or to take the Dodge action.</p>"),
        ], **toad))

    o = "toad-crossbow-guard"
    out.append(npc(
        slug=o, name="Palace Crossbow Guard", token="guard-crossbow-a.png",
        sc=scores(11, 14, 12, 10, 12, 10), trained={"prc": 1},
        ac=14, hp=13, hp_formula="3d6 + 3", cr=0.5,
        biography=guard_bio("Gallery crossbow", [
            "Light crossbow, posted on the minstrels' gallery and the stair landings "
            "where the hall can be covered from above.",
        ], alts=["guard-crossbow-b.png"]),
        items=[
            attack(o, "Light Crossbow", I["crossbow"], "<p>Range 80/320.</p>",
                   dmg=(1, 8, ["piercing"]), ability="dex", kind="ranged",
                   wtype="simpleR", props=["amm", "lod", "two"], rng=(80, 320)),
            attack(o, "Dagger", I["dagger"], "<p>Thrown 20/60.</p>",
                   dmg=(1, 4, ["piercing"]), ability="dex", props=["fin", "lgt", "thr"],
                   rng=(20, 60)),
            feat(o, "Steady Aim", I["eye"],
                 "<p>If the guard has not moved this turn, it has advantage on its first "
                 "Light Crossbow attack this turn.</p>"),
        ], **toad))

    o = "toad-night-watch"
    out.append(npc(
        slug=o, name="Palace Night Watch", token="guard-nightwatch-lantern.png",
        sc=scores(12, 14, 12, 10, 14, 10), trained={"prc": 1, "ste": 1, "inv": 1},
        ac=13, hp=13, hp_formula="3d6 + 3", cr=0.5,
        biography=guard_bio("Night watch", [
            "Cloak, lantern on a pole, short sword. The night watch walks the corridors "
            "between posts — including the corridor Bowser gets dragged across.",
        ]),
        items=[
            attack(o, "Shortsword", I["shortsword"], "<p>Standard issue.</p>",
                   dmg=(1, 6, ["piercing"]), wtype="martialM", props=["fin", "lgt"]),
            feat(o, "Hooded Lantern", I["lantern"],
                 "<p>Bright light in a 30-foot radius and dim light for a further 30 "
                 "feet. Hooding or unhooding it is a bonus action.</p>"),
            feat(o, "Rounds Memory", I["eye"],
                 "<p>Knows every patrol route and every door that should be shut. "
                 "Advantage on checks to notice something out of place in the castle at "
                 "night.</p>"),
            feat(o, "Raise the Hue and Cry (Action)", I["bell"],
                 "<p>The watch shouts and swings the lantern: every palace guard within "
                 "300 feet is alerted, cannot be surprised for the next minute, and "
                 "converges on the watch's position (GM's call on how fast).</p>"),
        ], **toad))

    o = "toad-heavy-guard"
    out.append(npc(
        slug=o, name="Palace Heavy Guard", token="guard-pike-towershield.png",
        sc=scores(15, 10, 16, 10, 11, 10), trained={"ath": 1},
        ac=18, hp=26, hp_formula="4d6 + 12", cr=1,
        biography=guard_bio("Heavy (pike and tower shield)", [
            "Pike and full-height tower shield; the plug the guard puts in a corridor "
            "when something has to be stopped rather than challenged.",
        ]),
        items=[
            attack(o, "Palace Pike", I["pike"], "<p>Reach.</p>",
                   dmg=(1, 8, ["piercing"]), wtype="martialM", props=["rch"], reach=10),
            feat(o, "Shield Wall", I["shield"],
                 "<p>If the heavy guard has not moved this turn, it and every palace guard "
                 "within 5 feet behind it have half cover (+2 AC and Dexterity saves) "
                 "against attacks from the front.</p>"),
            feat(o, "Immovable", I["halt"],
                 "<p>Advantage on saving throws and checks against being shoved, knocked "
                 "prone or moved against its will. Speed 20 feet in the full kit.</p>"),
        ], **dict(toad, walk=20)))

    o = "toad-guard-recruit"
    out.append(npc(
        slug=o, name="Palace Guard Recruit", token="guard-recruit-horn.png",
        sc=scores(11, 12, 11, 10, 10, 11), trained={},
        ac=12, hp=7, hp_formula="2d6", cr=0.125,
        biography=guard_bio("Recruit (signal horn)", [
            "Brass signal horn and a dagger. Too new to be on a door, so he carries the "
            "horn that calls everyone else.",
        ]),
        items=[
            attack(o, "Dagger", I["dagger"], "<p>Thrown 20/60.</p>",
                   dmg=(1, 4, ["piercing"]), props=["fin", "lgt", "thr"], rng=(20, 60)),
            feat(o, "Sound the Horn (Action, 1/Day)", I["horn"],
                 "<p>The signal carries through the whole of Peach's Castle: every palace "
                 "guard is alerted and the Captain's reserve arrives in 1d4 + 1 rounds "
                 "(numbers are the GM's call). Once blown, the horn is dented and silent "
                 "for the rest of the scene.</p>", uses=("1", "day")),
            feat(o, "Green", I["wound"],
                 "<p>Disadvantage on saving throws against being frightened unless within "
                 "10 feet of a sergeant or the Captain.</p>"),
        ], **toad))

    o = "toad-veteran-guard"
    out.append(npc(
        slug=o, name="Palace Veteran Guard", token="guard-veteran-mace.png",
        sc=scores(15, 14, 14, 10, 13, 11), trained={"prc": 1, "ath": 1, "itm": 1},
        ac=16, hp=33, hp_formula="6d6 + 12", cr=2,
        biography=guard_bio("Veteran (mace and buckler)", [
            "Scarred, scowling, mace and buckler. The guard who has already seen one "
            "coup attempt and is not impressed by a second.",
        ]),
        items=[
            attack(o, "Mace", I["mace"], "<p>Flanged steel.</p>",
                   dmg=(1, 6, ["bludgeoning"])),
            feat(o, "Multiattack", I["strike"],
                 "<p>The veteran makes two Mace attacks.</p>"),
            feat(o, "Buckler Parry (Reaction)", I["buckler"],
                 "<p>When hit by a melee attack it can see, the veteran adds 2 to its AC "
                 "against that attack.</p>"),
            feat(o, "Seen It Before", I["intimidate"],
                 "<p>Advantage on saving throws against being frightened, and it is "
                 "never surprised by a Koopa.</p>"),
        ], **toad))

    # --- Household ------------------------------------------------------
    house = dict(side="court", size="sm", walk=25, type_value="humanoid",
                 type_subtype="toad", alignment="Neutral Good")

    o = "castle-chambermaid"
    out.append(npc(
        slug=o, name="Castle Chambermaid", token="court-chambermaid.png",
        sc=scores(8, 11, 12, 11, 13, 11), trained={"ste": 1, "prc": 1, "ins": 1},
        ac=10, hp=4, hp_formula="1d6 + 1", cr=0,
        biography=ERA + (
            "<p>Pink-spotted cap, apron, candle and a ring of household keys. "
            "Non-combatant. She has turned down the Royal Suite tonight, walked past "
            "Luigi on the door, and may have heard something in the chimney.</p>"),
        items=[
            attack(o, "Candlestick", I["candle"], "<p>Improvised.</p>",
                   dmg=(1, 4, ["bludgeoning"]), wtype="improv"),
            feat(o, "Back Stairs", I["run"],
                 "<p>She knows the servants' passages. Advantage on Dexterity (Stealth) "
                 "checks inside the castle, and she can lead up to five creatures through "
                 "the back stairs between any two floors without crossing a guarded "
                 "hall.</p>"),
            feat(o, "Household Keys", I["key"],
                 "<p>Linen rooms, servants' stairs, guest wing. Not the Royal Suite, not "
                 "the vault.</p>"),
        ], **house))

    o = "castle-cook"
    out.append(npc(
        slug=o, name="Castle Cook", token="court-cook-toque.png",
        sc=scores(13, 10, 12, 10, 11, 10), trained={"ath": 1},
        ac=10, hp=9, hp_formula="2d6 + 2", cr=0.125,
        biography=ERA + (
            "<p>Blue-spotted cap under a toque (or kerchief), copper pot in hand. The "
            "kitchens feed the council and know the dumbwaiter shafts.</p>"
            + alt_tokens("court-cook-kerchief.png")),
        items=[
            attack(o, "Copper Pot", I["pot"], "<p>Improvised. Loud.</p>",
                   dmg=(1, 4, ["bludgeoning"]), wtype="improv"),
            feat(o, "Hot Broth (Action, 1/Day)", I["firefist"],
                 "<p>Throws the pot: one creature within 5 feet must succeed on a DC 11 "
                 "Dexterity saving throw or take 1d6 fire damage.</p>", uses=("1", "day")),
            feat(o, "Larder Knowledge", I["run"],
                 "<p>Knows the kitchen tunnels and the dumbwaiters — an escape route "
                 "for Small creatures from the great hall to the cellars.</p>"),
        ], **house))

    o = "castle-herald"
    out.append(npc(
        slug=o, name="Castle Herald", token="court-herald-trumpet.png",
        sc=scores(9, 11, 11, 13, 12, 14), trained={"prf": 1, "per": 1, "his": 1},
        ac=10, hp=6, hp_formula="1d6 + 2", cr=0,
        biography=ERA + (
            "<p>Trumpet with the pink banner. Announces every arrival at the council — "
            "which, when the doors come off their hinges, becomes grimly funny.</p>"),
        items=[
            feat(o, "Fanfare (Action)", I["horn"],
                 "<p>Every ally within 60 feet that can hear the trumpet cannot be "
                 "surprised until the end of its next turn. The herald may also "
                 "formally announce whoever just entered, interloper included.</p>"),
            feat(o, "Protocol", I["scroll"],
                 "<p>Knows precedence, titles and the seating plan of the council. "
                 "Advantage on Intelligence (History) and Wisdom (Insight) checks about "
                 "court factions and who should not be sitting next to whom.</p>"),
        ], **house))

    o = "castle-page"
    out.append(npc(
        slug=o, name="Castle Page", token="court-page-scroll.png",
        sc=scores(9, 13, 10, 11, 11, 12), trained={"acr": 1, "ste": 1},
        ac=11, hp=5, hp_formula="1d6 + 1", cr=0,
        biography=ERA + (
            "<p>Scroll case under one arm, always running. Carries the council's agenda "
            "and the messages nobody wants carried.</p>"),
        items=[
            feat(o, "Message Runner", I["run"],
                 "<p>Can take the Dash or Disengage action as a bonus action.</p>"),
            feat(o, "Scroll Case", I["scroll"],
                 "<p>Tonight's agenda and whatever was slipped in beside it. Plot prop; "
                 "contents are the GM's call.</p>"),
        ], **house))

    o = "mages-guild-adept"
    out.append(npc(
        slug=o, name="Mages' Guild Adept (Hooded)", token="court-mage-a.png",
        sc=scores(9, 12, 12, 16, 12, 11), prof_saves=("int",),
        trained={"arc": 1, "his": 1, "ins": 1},
        ac=12, hp=27, hp_formula="6d6 + 6", cr=2,
        biography=ERA + (
            "<p>Violet hooded robe with silver sigils, crystal-topped staff, scroll "
            "satchel. The record says two hooded Mages' Guild mages conferred with Mayor "
            "Thornpaw tonight. Whose side they are on is the GM's call; this sheet works "
            "for a loyal court magician and for a conspirator.</p>"
            + alt_tokens("court-mage-b.png", "court-mage-c.png")),
        items=[
            attack(o, "Arcane Bolt", I["beam"],
                   "<p>Ranged spell attack, 60 feet.</p>",
                   dmg=(2, 8, ["force"]), ability="int", kind="ranged", cls="spell",
                   wtype="natural", rng=(60, None)),
            attack(o, "Crystal Staff", I["staff"], "<p>Versatile.</p>",
                   dmg=(1, 6, ["bludgeoning"]), props=["ver"],
                   versatile=(1, 8, ["bludgeoning"])),
            feat(o, "Guild Ward (Reaction, 2/Day)", I["ward"],
                 "<p>When hit by an attack, the adept gains +3 AC against it.</p>",
                 uses=("2", "day")),
            feat(o, "Guild Spellcasting", I["orb"],
                 "<p>Spellcasting ability Intelligence (spell save DC 13). At will: "
                 "<em>light, mage hand, prestidigitation</em>. 1/day each: <em>detect "
                 "magic, hold person, misty step</em>. Drop the SRD spells onto the sheet "
                 "if you want them rollable.</p>"),
            feat(o, "Hooded Conference", I["fog"],
                 "<p>The adept was seen conferring with Thornpaw in a side passage. "
                 "Advantage on Charisma (Deception) checks about where it was and why.</p>"),
        ], **dict(house, alignment="Lawful Neutral")))

    return out


# -------------------------------------------------------------- incursion

def foe_bio(lines, alts=None):
    html = ERA + SCENE + "".join(f"<p>{ln}</p>" for ln in lines)
    if alts:
        html += alt_tokens(*alts)
    return html


def build_incursion():
    out = []
    troop = dict(side="incursion", type_value="humanoid", type_subtype="koopa",
                 alignment="Lawful Neutral")

    # --- Bowser ---------------------------------------------------------
    o = "bowser-the-interloper-955"
    out.append(npc(
        slug=o, name="Bowser, the Interloper (955 BF)", token="foe-bowser.png",
        side="incursion", size="lg", token_size=2,
        sc=scores(21, 10, 20, 10, 11, 16), prof_saves=("str", "con"),
        trained={"ath": 1, "itm": 1}, ac=16, hp=126, hp_formula="12d10 + 60", cr=7,
        walk=30, di=["fire"], ci=["frightened"],
        resources={"legact": {"value": 2, "max": 2}, "legres": {"value": 2, "max": 2},
                   "lair": {"value": False, "initiative": None}},
        type_value="monstrosity", type_subtype="koopa", alignment="Chaotic Neutral",
        biography=foe_bio([
            "The Koopa King, eighty-five years before the present day: younger, louder "
            "and already in the habit of arriving uninvited. The archive puts him inside "
            "Peach's Castle on the Day Of and has the guards drag him across a corridor "
            "before the night is out — the propaganda that followed hung the "
            "assassination on him for a generation.",
            "<strong>Not the player character.</strong> The present-day Bowser is a PC at "
            "level 8 in the XP ledger (<code>fvtt-Actor-bowser-kzNSSjAedvhKTfZC.json</code>). "
            "This is an era NPC for the council scene; import it beside the PC, never over "
            "it. CR 7 keeps him beatable by a room full of guards plus a hero or two, "
            "which is what the record says happened.",
        ]),
        items=[
            attack(o, "Claw", I["claw"], "<p>Melee, 5 feet.</p>",
                   dmg=(2, 6, ["slashing"]), wtype="natural"),
            attack(o, "Bite", I["bite"], "<p>Melee, 5 feet.</p>",
                   dmg=(2, 8, ["piercing"]), wtype="natural"),
            feat(o, "Multiattack", I["strike"],
                 "<p>Bowser makes one Bite attack and two Claw attacks, or uses Fire "
                 "Breath if it is available.</p>"),
            feat(o, "Fire Breath (Recharge 5–6)", I["fireball"],
                 "<p>30-foot cone. Each creature in the area makes a DC 15 Dexterity "
                 "saving throw, taking 8d6 fire damage on a failure or half as much on a "
                 "success. Tapestries, banners and the council table catch fire.</p>",
                 uses=("1", "recharge", "5")),
            feat(o, "Shell Spin (Bonus Action)", I["spin"],
                 "<p>Bowser withdraws into his shell and spins up to 30 feet in a straight "
                 "line through Large or smaller creatures. Each creature in the line makes "
                 "a DC 15 Dexterity saving throw or takes 3d8 bludgeoning damage and is "
                 "knocked prone. Doors in the line are destroyed.</p>"),
            feat(o, "Roar (Action, 1/Day)", I["fear"],
                 "<p>Each hostile creature within 30 feet that can hear him must succeed "
                 "on a DC 14 Wisdom saving throw or be frightened until the end of its "
                 "next turn. Recruits and household staff save at disadvantage.</p>",
                 uses=("1", "day")),
            feat(o, "Legendary Resistance (2/Day)", I["ward"],
                 "<p>If Bowser fails a saving throw, he can choose to succeed instead.</p>",
                 uses=("2", "day")),
            feat(o, "Legendary Actions", I["paw"],
                 "<p>Bowser can take 2 legendary actions, choosing from the options below, "
                 "only at the end of another creature's turn, regaining them at the start "
                 "of his turn.</p><ul><li><strong>Claw.</strong> One Claw attack.</li>"
                 "<li><strong>Stomp (Costs 2 Actions).</strong> Each creature within 10 "
                 "feet on the ground makes a DC 15 Strength saving throw or is knocked "
                 "prone.</li></ul>"),
        ]))

    # --- Troop regulars (existing Hunyuan bases) -------------------------
    o = "koopa-troopa-soldier"
    out.append(npc(
        slug=o, name="Koopa Troopa Soldier", token="foe-koopa-troopa.png",
        size="sm", sc=scores(12, 12, 13, 9, 10, 9), trained={},
        ac=14, hp=13, hp_formula="3d6 + 3", cr=0.25, walk=25,
        biography=foe_bio([
            "Green-shell line infantry. The bulk of whatever Bowser brought through the "
            "gate; they fill the hall while the specialists do the breaking.",
        ]),
        items=[
            attack(o, "Shell Bash", I["fist"], "<p>Melee, 5 feet.</p>",
                   dmg=(1, 6, ["bludgeoning"]), wtype="natural"),
            feat(o, "Shell Retreat (Bonus Action)", I["shield"],
                 "<p>The Koopa withdraws into its shell: AC 18, speed 0, it cannot attack, "
                 "and it has advantage on Strength and Constitution saving throws. It "
                 "emerges as a bonus action on a later turn.</p>"),
            feat(o, "Kicked Shell", I["spin"],
                 "<p>A creature can use an action to kick a retreated Koopa 20 feet in a "
                 "straight line. Each creature in the line makes a DC 11 Dexterity saving "
                 "throw or takes 2d4 bludgeoning damage; the Koopa takes the same.</p>"),
        ], **troop))

    o = "goomba-rusher"
    out.append(npc(
        slug=o, name="Goomba Rusher", token="foe-goomba.png",
        size="sm", sc=scores(10, 10, 10, 6, 8, 6), trained={},
        ac=10, hp=7, hp_formula="2d6", cr=0.125, walk=20,
        type_value="monstrosity", type_subtype="goomba", alignment="Lawful Neutral",
        side="incursion",
        biography=foe_bio([
            "Brown, angry, numerous. Goombas go in first because nobody asked them.",
        ]),
        items=[
            attack(o, "Headbutt", I["fist"], "<p>Melee, 5 feet.</p>",
                   dmg=(1, 4, ["bludgeoning"]), wtype="natural"),
            feat(o, "Mob Rush", I["paw"],
                 "<p>The Headbutt deals an extra 1d4 bludgeoning damage if at least two "
                 "other Goombas are within 5 feet of the target.</p>"),
            feat(o, "Soft Cap", I["up"],
                 "<p>A critical hit from a creature above the Goomba (a jump, a drop "
                 "from a gallery) destroys it outright.</p>"),
        ]))

    o = "hammer-bro"
    out.append(npc(
        slug=o, name="Hammer Bro", token="foe-hammer-bro.png",
        size="med", sc=scores(15, 14, 14, 10, 11, 10), trained={"ath": 1},
        ac=15, hp=39, hp_formula="6d8 + 12", cr=2, walk=30,
        biography=foe_bio([
            "Green helmet, green shell, a bag of hammers that never seems to empty. "
            "Posted on the gallery or the stairs, lobbing into the council floor.",
        ]),
        items=[
            attack(o, "Hammer", I["hammer"],
                   "<p>Thrown 20/60. Versatile. Lobbed in an arc, so the thrown attack "
                   "ignores half and three-quarters cover.</p>",
                   dmg=(1, 8, ["bludgeoning"]), wtype="martialM", props=["thr", "ver"],
                   rng=(20, 60), versatile=(1, 10, ["bludgeoning"])),
            feat(o, "Multiattack", I["strike"],
                 "<p>The Hammer Bro makes two Hammer attacks.</p>"),
            feat(o, "Bottomless Hammer Bag", I["hammer"],
                 "<p>It never runs out of hammers. Thrown hammers vanish from the floor "
                 "a moment after landing, so nobody else gets to use them.</p>"),
            feat(o, "Hop", I["up"],
                 "<p>Its long jump is 15 feet and its high jump 10 feet, with or without "
                 "a running start.</p>"),
        ], **troop))

    o = "magikoopa"
    out.append(npc(
        slug=o, name="Magikoopa", token="foe-magikoopa.png",
        size="med", sc=scores(9, 14, 12, 17, 13, 12), prof_saves=("int", "wis"),
        trained={"arc": 1, "ins": 1}, ac=12, hp=31, hp_formula="7d6 + 7", cr=3, walk=30,
        biography=foe_bio([
            "Blue star-spangled robe, round spectacles, wand. The Troop's answer to the "
            "Mages' Guild, and very interested in what two hooded Guild mages are doing "
            "in a side passage tonight.",
        ]),
        items=[
            attack(o, "Wand Bolt", I["bolt"],
                   "<p>Ranged spell attack, 90 feet. A tumbling triangle-circle-square of "
                   "force.</p>",
                   dmg=(3, 6, ["force"]), ability="int", kind="ranged", cls="spell",
                   wtype="natural", rng=(90, None)),
            feat(o, "Blink (Bonus Action, Recharge 4–6)", I["blink"],
                 "<p>The Magikoopa teleports up to 30 feet to an unoccupied space it can "
                 "see, vanishing in a puff of blue smoke.</p>",
                 uses=("1", "recharge", "4")),
            feat(o, "Transfigure (Action, 1/Day)", I["disintegrate"],
                 "<p>One unattended mundane object within 60 feet (a chair, a statue, a "
                 "candelabra) becomes a Goomba Rusher or a Koopa Troopa Soldier that acts "
                 "on the Magikoopa's initiative. It turns back when reduced to 0 hit "
                 "points.</p>", uses=("1", "day")),
            feat(o, "Spellcasting", I["orb"],
                 "<p>Spellcasting ability Intelligence (spell save DC 13). At will: "
                 "<em>mage hand, minor illusion</em>. 1/day each: <em>shield, magic "
                 "missile</em>.</p>"),
        ], **troop))

    # --- New units ------------------------------------------------------
    o = "koopatrol"
    out.append(npc(
        slug=o, name="Koopatrol", token="foe-koopatrol.png",
        size="med", sc=scores(17, 10, 15, 10, 11, 10), prof_saves=("con",),
        trained={"ath": 1, "itm": 1}, ac=18, hp=52, hp_formula="8d8 + 16", cr=3,
        walk=25,
        biography=foe_bio([
            "Elite Koopa in full dark-steel plate, spiked helm, spiked pauldrons, spiked "
            "shell, black halberd. The ones who walk in behind Bowser and stand at the "
            "doors so nobody leaves the meeting early.",
        ]),
        items=[
            attack(o, "Halberd", I["halberd"], "<p>Reach. Heavy, two-handed.</p>",
                   dmg=(1, 10, ["slashing"]), wtype="martialM",
                   props=["hvy", "rch", "two"], reach=10),
            feat(o, "Multiattack", I["strike"],
                 "<p>The Koopatrol makes two Halberd attacks.</p>"),
            feat(o, "Spiked Carapace", I["wound"],
                 "<p>A creature that grapples the Koopatrol or hits it with an unarmed "
                 "strike takes 1d6 piercing damage.</p>"),
            feat(o, "Vanguard", I["shield"],
                 "<p>The Koopatrol moves through the spaces of allied Troop units freely, "
                 "and allies directly behind it have half cover against ranged attacks.</p>"),
        ], **troop))

    o = "bob-omb-sapper"
    out.append(npc(
        slug=o, name="Bob-omb Sapper", token="foe-bob-omb-sapper.png",
        side="incursion", size="sm", sc=scores(12, 14, 14, 8, 10, 6), trained={},
        ac=13, hp=22, hp_formula="4d6 + 8", cr=1, walk=20, darkvision=60,
        di=["poison"], ci=["poisoned", "exhaustion"],
        type_value="construct", type_subtype="bob-omb", alignment="Lawful Neutral",
        biography=foe_bio([
            "Iron casing, wind-up key, lit fuse, a tool belt with a detonator plunger. "
            "The sapper is why the council doors are no longer doors.",
        ]),
        items=[
            attack(o, "Bump", I["fist"], "<p>Melee, 5 feet.</p>",
                   dmg=(1, 4, ["bludgeoning"]), wtype="natural"),
            feat(o, "Detonate (Action)", I["fireball"],
                 "<p>The sapper explodes and is destroyed. Each creature within 10 feet "
                 "makes a DC 12 Dexterity saving throw, taking 4d6 fire damage on a "
                 "failure or half as much on a success.</p>"),
            feat(o, "Breaching Charge (Action, 1/Day)", I["firefist"],
                 "<p>The sapper braces against a door, portcullis or 5-foot section of "
                 "ordinary wall. At the start of its next turn the charge goes off: the "
                 "object is destroyed and each creature within 5 feet of it takes 2d6 "
                 "thunder damage (DC 12 Constitution save for half). The sapper survives "
                 "this one.</p>", uses=("1", "day")),
            feat(o, "Volatile", I["wound"],
                 "<p>If the sapper takes fire damage, it uses Detonate immediately. When "
                 "it drops to 0 hit points by any other means, it fizzles harmlessly.</p>"),
        ]))

    o = "koopa-paratroopa"
    out.append(npc(
        slug=o, name="Koopa Paratroopa", token="foe-paratroopa-spear.png",
        size="sm", sc=scores(12, 15, 12, 9, 11, 9), trained={"prc": 1},
        ac=14, hp=16, hp_formula="3d8 + 3", cr=0.5, walk=25, fly=40,
        biography=foe_bio([
            "Red shell, white wings, short spear. Comes in through the great-hall "
            "windows while everyone is watching the doors.",
        ]),
        items=[
            attack(o, "Spear", I["spear"], "<p>Thrown 20/60. Versatile.</p>",
                   dmg=(1, 6, ["piercing"]), props=["thr", "ver"], rng=(20, 60),
                   versatile=(1, 8, ["piercing"])),
            feat(o, "Flyby", I["wings"],
                 "<p>The Paratroopa does not provoke opportunity attacks when it flies out "
                 "of an enemy's reach.</p>"),
            feat(o, "Clipped Wings", I["wound"],
                 "<p>When reduced to half its hit points or fewer, it loses its wings and "
                 "its flying speed; it fights on as a Koopa Troopa Soldier with its "
                 "remaining hit points.</p>"),
        ], **troop))

    o = "sledge-bro"
    out.append(npc(
        slug=o, name="Sledge Bro", token="foe-sledge-bro.png",
        size="med", sc=scores(19, 10, 17, 9, 10, 9), prof_saves=("str",),
        trained={"ath": 1}, ac=15, hp=68, hp_formula="8d10 + 24", cr=4, walk=25,
        biography=foe_bio([
            "Twice the width of a Hammer Bro and carrying an iron sledgehammer most "
            "Toads could not lift. Furniture, doors and shield walls are all the same to "
            "him.",
        ]),
        items=[
            attack(o, "Sledgehammer", I["maul"], "<p>Heavy, two-handed.</p>",
                   dmg=(2, 6, ["bludgeoning"]), wtype="martialM", props=["hvy", "two"]),
            feat(o, "Multiattack", I["strike"],
                 "<p>The Sledge Bro makes two Sledgehammer attacks.</p>"),
            feat(o, "Ground Pound (Recharge 5–6)", I["shockwave"],
                 "<p>The Sledge Bro leaps and slams down. Each creature on the ground "
                 "within 10 feet makes a DC 14 Strength saving throw, taking 2d8 thunder "
                 "damage and falling prone on a failure, or half as much damage without "
                 "falling on a success. The floor in the area is difficult terrain.</p>",
                 uses=("1", "recharge", "5")),
            feat(o, "Door Breaker", I["hammer"],
                 "<p>The Sledgehammer deals double damage to objects and structures; a "
                 "wooden door or table it hits is simply destroyed.</p>"),
        ], **troop))

    o = "dry-bones"
    out.append(npc(
        slug=o, name="Dry Bones", token="foe-dry-bones.png",
        side="incursion", size="sm", sc=scores(12, 12, 14, 6, 8, 5), trained={},
        ac=13, hp=16, hp_formula="3d6 + 6", cr=0.5, walk=25, darkvision=60,
        di=["poison"], dv=["bludgeoning"], ci=["poisoned", "exhaustion"],
        type_value="undead", type_subtype="koopa", alignment="Neutral Evil",
        biography=foe_bio([
            "A Koopa that did not stay down. Bleached bones, grey shell, a faint light "
            "in the sockets. Dry Bones hold corridors because they do not mind being "
            "knocked apart.",
        ]),
        items=[
            attack(o, "Bone Club", I["bone"], "<p>Melee, 5 feet.</p>",
                   dmg=(1, 6, ["bludgeoning"])),
            attack(o, "Bone Throw", I["bone"],
                   "<p>Ranged 30/60. It throws one of its own ribs and grows it back.</p>",
                   dmg=(1, 4, ["bludgeoning"]), ability="dex", kind="ranged",
                   wtype="simpleR", rng=(30, 60)),
            feat(o, "Rattle Back Together", I["skull"],
                 "<p>When reduced to 0 hit points by anything other than fire or radiant "
                 "damage, the Dry Bones collapses into a heap instead of being destroyed. "
                 "1d4 rounds later it reassembles with all its hit points at the start of "
                 "its turn, unless a creature has used an action to scatter the heap.</p>"),
        ]))

    o = "boo-infiltrator"
    out.append(npc(
        slug=o, name="Boo Infiltrator", token="foe-boo.png",
        side="incursion", size="sm", sc=scores(6, 14, 12, 10, 12, 14), trained={"ste": 1},
        ac=12, hp=22, hp_formula="5d6 + 5", cr=1, walk=0, fly=30, hover=True,
        darkvision=60, di=["cold", "necrotic", "poison"],
        dr=["bludgeoning", "piercing", "slashing"], dr_bypass=["mgc"],
        ci=["charmed", "exhaustion", "frightened", "grappled", "paralyzed",
            "petrified", "poisoned", "prone", "restrained"],
        type_value="undead", type_subtype="boo", alignment="Chaotic Neutral",
        biography=foe_bio([
            "A round white ghost with a wide grin and a long tongue, already inside the "
            "walls before the doors come down. Boos are how an interloper knows exactly "
            "which room the meeting is in.",
        ]),
        items=[
            attack(o, "Chilling Touch", I["orb"], "<p>Melee, 5 feet.</p>",
                   dmg=(2, 6, ["cold"]), ability="dex", wtype="natural"),
            feat(o, "Incorporeal Movement", I["fog"],
                 "<p>The Boo can move through creatures and objects as if they were "
                 "difficult terrain. It takes 1d10 force damage if it ends its turn inside "
                 "an object.</p>"),
            feat(o, "Bashful", I["eye"],
                 "<p>At the start of its turn, if a hostile creature that can see the Boo "
                 "is looking straight at it (GM's call — a creature that has not been "
                 "surprised and has line of sight), the Boo covers its face and cannot "
                 "move closer to or attack that creature this turn.</p>"),
            feat(o, "Peek-a-Boo (Action)", I["fog"],
                 "<p>The Boo turns Invisible until the start of its next turn or until it "
                 "attacks.</p>"),
        ]))

    o = "chargin-chuck"
    out.append(npc(
        slug=o, name="Chargin' Chuck", token="foe-chargin-chuck.png",
        size="med", sc=scores(17, 12, 16, 8, 10, 10), trained={"ath": 1},
        ac=15, hp=45, hp_formula="6d8 + 18", cr=2, walk=40,
        biography=foe_bio([
            "Black helmet, red pads, number 17. The Troop's battering ram: he does not "
            "open doors, he arrives through them.",
        ]),
        items=[
            attack(o, "Tackle", I["fist"], "<p>Melee, 5 feet.</p>",
                   dmg=(1, 8, ["bludgeoning"]), wtype="natural"),
            feat(o, "Charge", I["run"],
                 "<p>If the Chuck moves at least 20 feet straight toward a target and then "
                 "hits it with a Tackle on the same turn, the target takes an extra 2d6 "
                 "bludgeoning damage and must succeed on a DC 13 Strength saving throw or "
                 "be knocked prone.</p>"),
            feat(o, "Through the Door", I["shockwave"],
                 "<p>During a Charge the Chuck bursts through wooden doors, screens and "
                 "non-load-bearing partitions without slowing; the object is destroyed.</p>"),
            feat(o, "Pile-On", I["paw"],
                 "<p>Advantage on Tackle attacks against prone creatures.</p>"),
        ], **troop))

    o = "lakitu-spotter"
    out.append(npc(
        slug=o, name="Lakitu Spotter", token="foe-lakitu.png",
        size="sm", sc=scores(8, 15, 12, 11, 14, 10), trained={"prc": 2},
        ac=13, hp=20, hp_formula="4d6 + 6", cr=1, walk=10, fly=40, hover=True,
        biography=foe_bio([
            "Spectacles, green shell, a smiling cloud and a fishing rod with a spiny egg "
            "on the line. Hangs under the hall's vaulting and tells the rest of the "
            "force where the Princess is sitting.",
        ]),
        items=[
            attack(o, "Spiny Egg Toss", I["skull"],
                   "<p>Ranged 20/60. On a hit a Spiny hatches in the target's space: a "
                   "1-hit-point hazard that deals 1d4 piercing damage to any creature that "
                   "enters or ends its turn in that space.</p>",
                   dmg=(1, 6, ["piercing"]), ability="dex", kind="ranged",
                   wtype="simpleR", rng=(20, 60)),
            feat(o, "Spotter (Bonus Action)", I["eye"],
                 "<p>The Lakitu marks one creature it can see. Until the start of its next "
                 "turn, Troop allies have advantage on their first attack roll against the "
                 "marked creature.</p>"),
            feat(o, "Cloud Step", I["wind"],
                 "<p>The Lakitu can take the Disengage action as a bonus action and "
                 "ignores difficult terrain while on its cloud.</p>"),
            feat(o, "Cloud Hijack", I["up"],
                 "<p>If the Lakitu is knocked off its cloud (reduced to 0 hit points), "
                 "the cloud lingers for 1 minute. A Small or Medium creature can climb on "
                 "and ride it (fly 40 feet, hover) until it dissipates.</p>"),
        ], **troop))

    return out


# ------------------------------------------------------------- validation

def load_image_lib():
    with open(IMAGE_LIB, encoding="utf-8", errors="replace") as fh:
        return {ln.strip().replace("\\", "/") for ln in fh if ln.strip()}


def validate(slug, actor, lib):
    problems = []
    if actor["type"] != "npc":
        problems.append("type must be npc")
    if actor["prototypeToken"]["actorLink"]:
        problems.append("prototype token must be unlinked")
    imgs = [actor["img"], actor["prototypeToken"]["texture"]["src"]]
    for it in actor["items"]:
        imgs.append(it["img"])
        if it["type"] in ("race", "class", "subclass", "background"):
            problems.append(f"NPC must not carry a {it['type']} item: {it['name']}")
        if not FOUNDRY_ID.match(it["_id"]):
            problems.append(f"bad item id {it['_id']}")
    for p in imgs:
        if p.startswith(TOKEN_PREFIX):
            if not os.path.exists(os.path.join(PORTRAITS, p[len(TOKEN_PREFIX):])):
                problems.append(f"token cutout missing from repo: {p}")
        elif p not in lib:
            problems.append(f"img not in image paths.txt: {p}")
    ids = [it["_id"] for it in actor["items"]]
    if len(ids) != len(set(ids)):
        problems.append("duplicate item _id")
    for key in ("value", "max"):
        if actor["system"]["attributes"]["hp"][key] <= 0:
            problems.append("hp must be positive")
    cr = actor["system"]["details"]["cr"]
    if not (0 <= cr <= 30):
        problems.append(f"cr out of range: {cr}")
    bio = actor["system"]["details"]["biography"]["value"]
    if "955 BF" not in bio:
        problems.append("biography must anchor the era (955 BF)")
    return [f"{slug}: {p}" for p in problems]


def render(doc):
    return json.dumps(doc, indent=2, ensure_ascii=False) + "\n"


def build_all():
    actors = build_court() + build_incursion()
    slugs = [s for s, _ in actors]
    if len(slugs) != len(set(slugs)):
        raise SystemExit("duplicate actor slug")
    return actors


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--check", action="store_true",
                    help="verify the files on disk match the generator")
    args = ap.parse_args()

    lib = load_image_lib()
    actors = build_all()
    problems = []
    for slug, doc in actors:
        problems += validate(slug, doc, lib)
    if problems:
        for p in problems:
            print("  " + p, file=sys.stderr)
        return 1

    expected = {f"fvtt-Actor-pc955-{slug}.json": render(doc) for slug, doc in actors}
    if args.check:
        bad = []
        for fname, text in expected.items():
            path = os.path.join(ACTORS, fname)
            if not os.path.exists(path):
                bad.append(f"missing {fname}")
                continue
            with open(path, encoding="utf-8") as fh:
                if fh.read() != text:
                    bad.append(f"stale {fname}")
        stray = sorted(f for f in os.listdir(ACTORS)
                       if f.startswith("fvtt-Actor-") and f not in expected)
        bad += [f"unexpected {f}" for f in stray]
        if bad:
            for b in bad:
                print("  " + b, file=sys.stderr)
            print(f"FAIL peachs-castle-955 actors: {len(bad)} problem(s); "
                  "run tools/build-peachs-castle-955-actors.py", file=sys.stderr)
            return 1
        print(f"OK peachs-castle-955 actors: {len(expected)} files current")
        return 0

    os.makedirs(ACTORS, exist_ok=True)
    for fname, text in expected.items():
        path = os.path.join(ACTORS, fname)
        tmp = path + ".tmp"
        with open(tmp, "w", encoding="utf-8") as fh:
            fh.write(text)
        os.replace(tmp, path)
        doc = json.loads(text)
        print(f"  wrote {fname}  (CR {doc['system']['details']['cr']}, "
              f"{len(doc['items'])} items)")
    print(f"Done. {len(expected)} actors in Reputation-Matrix2/actors/peachs-castle-955/")
    return 0


if __name__ == "__main__":
    sys.exit(main())
