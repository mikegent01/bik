#!/usr/bin/env python3
"""Build Foundry VTT NPC actors for The Oracle and Orange T.

Deterministic, stdlib only, no AI. Matches the Azure / Aurelian NPC schema
already used in Reputation-Matrix2/actors/.

ONE FILE PER CHARACTER. These are `type: "npc"`, and the NO-SPECIES variant
in rebuild-actors.py is generated for characters only, so each of these
produces exactly one sheet and no duplicates.

WHY TWO SEPARATE SHEETS
-----------------------
The archive holds three characters whose names collide badly:

  * **The Oracle** (`the_oracle`) — "Orantha Cornelius, suspected". The
    metaphysical custodian of Raventree Manor.
  * **Orange T** (`orange_t`) — the orange Toad found treating Bones in the
    collapsing Corvinarus library. Later ascends into the God Toad.
  * **Orangus Cornelius** (`orangus_cornelius`) — the defenestrated vampire
    lord. Not built here; he is a separate article and a separate problem.

The Oracle and Orange T are different people who were in the same building on
the same night, so they get one sheet each and neither borrows the other's
statistics.

EVIDENCE FOR EVERY NUMBER
-------------------------
Levels come from the live XP ledger in `data/abilityPoints.json`, which is the
authority for level/XP (see `item sheet examples/README.md` on authority
separation). Everything else comes from `characters.json` and `events.json`.

**The Oracle** — XP ledger: level 8, 39,250 XP, faction `corvinarus`.
  * CR 8 to match the ledger level, as Azure's CR 7 matches hers.
  * Ability spread is INT/CHA-forward: the record is entirely knowledge,
    scheduling of disclosure, and negotiation, never physical force.
  * **Checkpoint Reality** — the single best-documented feature: survived
    Green T's bullet to the brain by checkpointing, "not healing, not
    dodging". Written as a reaction that undoes a lethal event, once per day,
    because the record shows it as extraordinary rather than routine.
  * **Titan Growth** — granted Markop titan-scale growth during the Spider
    Grove battle, scaling a centaur to a building-sized frame.
  * **Scheduled Disclosure** — revealed the Shadowfell time dilation at the
    exact moment of Archie's transit preparation, not before.
  * **Flesh Vats**, **Ritual Custodian**, **Uncertain Identity** — all three
    are drawn verbatim from the notableFeatures list on his article.
  * Type `humanoid` with subtype `oracle (identity disputed)`, because the
    article refuses to settle species: "Possibly Toad, Possibly Something
    That Was Once A Toad".
  * Alignment is left "unaligned": Waluigi's article turns on the Oracle's
    motives being undetermined, and picking one would resolve in prose a
    question the archive deliberately holds open.

**Orange T** — XP ledger: level 2, 320 XP, faction `corvinarus`.
  * CR 2. He is deliberately low-CR: the whole point of the character is that
    he is positioned where powerful people do not think to look.
  * **Already There** — he was never seen arriving; he had established
    routines in a sanctum nobody saw him enter.
  * **Banishment** — he banished both Dans after treating Bowser's
    "not particularly" as consent, then said "oh oops". Waluigi does not
    believe the oops, so the feature is written as deliberate.
  * **Field Medicine** — he was treating Bones, competently and continuously,
    through a collapsing room.
  * **Sees What You Cannot** — pointed at something invisible and laughed
    when Bowser could not see it.
  * **Practiced Deflection** — "I'm here now and that's what matters."
  * **The Star Fragment** is NOT on this sheet. His ascension into the God
    Toad is a separate, later entity with its own XP entry (`godtoad`,
    level 3) and its own artifacts.json record. Putting divine power on the
    level 2 sheet would collapse two eras of the character into one file.
    The feature `A Future Nobody Has Audited` records the hook without
    granting the power.

Usage:
    python3 tools/build-sanctum-npcs.py
    python3 tools/build-sanctum-npcs.py --check
"""

import argparse
import hashlib
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ACTORS = os.path.join(ROOT, "Reputation-Matrix2", "actors")

ABILITY_KEYS = ("str", "dex", "con", "int", "wis", "cha")
SKILL_ABILITY = {
    "acr": "dex", "ani": "wis", "arc": "int", "ath": "str", "dec": "cha",
    "his": "int", "ins": "wis", "itm": "cha", "inv": "int", "med": "wis",
    "nat": "int", "prc": "wis", "prf": "cha", "per": "cha", "rel": "int",
    "slt": "dex", "ste": "dex", "sur": "wis",
}


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


def feat(owner, name, img, html, chat=""):
    return {
        "_id": sid(owner, "feat", name),
        "name": name,
        "type": "feat",
        "img": img,
        "system": {
            "description": {"value": html, "chat": chat},
            "type": {"value": "monster", "subtype": ""},
            "activation": {}, "duration": {}, "target": {}, "range": {},
            "uses": {"spent": 0, "max": "", "recovery": []},
            "activities": {},
            "source": {"custom": "Waluipedia campaign", "book": "", "page": "",
                       "license": "", "revision": 1, "rules": "2024"},
        },
        "effects": [], "flags": {}, "sort": 0,
        "ownership": {"default": 0},
    }


def weapon(owner, name, img, html, sort):
    return {
        "_id": sid(owner, "weapon", name),
        "name": name,
        "type": "weapon",
        "img": img,
        "system": {
            "description": {"value": html, "chat": ""},
            "activities": {},
            "source": {"custom": "Waluipedia campaign", "book": "", "page": "",
                       "license": "", "revision": 1, "rules": "2024"},
        },
        "effects": [], "flags": {}, "sort": sort,
        "ownership": {"default": 0},
    }


def npc(name, img, token_img, size, scores, prof_saves, trained, ac, hp,
        hp_formula, cr, walk, darkvision, languages, type_value, type_subtype,
        alignment, biography, items):
    doc = {
        "name": name,
        "type": "npc",
        "img": img,
        "system": {
            "abilities": abilities(scores, prof_saves),
            "attributes": {
                "ac": {"flat": ac, "calc": "natural", "formula": ""},
                "hp": {"value": hp, "max": hp, "formula": hp_formula,
                       "temp": None, "tempmax": None},
                "movement": {"walk": str(walk), "units": "ft", "hover": False,
                             "ignoredDifficultTerrain": []},
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
                "languages": {"value": languages, "custom": "",
                              "communication": {}},
                "ci": {"value": [], "custom": ""},
                "di": {"value": [], "custom": "", "bypasses": []},
                "dr": {"value": [], "custom": "", "bypasses": []},
                "dv": {"value": [], "custom": "", "bypasses": []},
                "dm": {"amount": {}, "bypasses": []},
                "important": False,
            },
            "skills": skills(trained),
            "source": {"custom": "Waluipedia campaign", "revision": 1,
                       "rules": "2024"},
            "currency": {"pp": 0, "gp": 0, "ep": 0, "sp": 0, "cp": 0},
            "bonuses": {},
            "tools": {},
            "spells": {},
            "resources": {},
        },
        "prototypeToken": {
            "name": name,
            "displayName": 0,
            "actorLink": False,
            "width": 1,
            "height": 1,
            "texture": {"src": token_img, "anchorX": 0.5, "anchorY": 0.5,
                        "fit": "contain", "scaleX": 1, "scaleY": 1,
                        "tint": "#ffffff", "alphaThreshold": 0.75},
            "lockRotation": False,
            "rotation": 0,
            "alpha": 1,
            "disposition": 0,
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
    return doc


# --------------------------------------------------------------- The Oracle

def build_oracle():
    owner = "the_oracle"
    ico = "icons/magic/time/"
    items = [
        feat(owner, "Checkpoint Reality", ico + "hourglass-tilted-gray.webp",
             "<p>When the Oracle would be reduced to 0 hit points or killed "
             "outright, they may instead establish a saved state of existence "
             "that the causing event cannot retroactively violate: the damage "
             "is undone and the Oracle returns to the position they held at "
             "the start of the turn. Green T put a bullet through the Oracle's "
             "brain. The Oracle did not heal it, dodge it, or shield against "
             "it. The Oracle checkpointed, and the bullet stopped having "
             "happened.</p><p><em>Once per day. This is a temporal function, "
             "not a defensive spell.</em></p>",
             "The event stops having happened."),
        feat(owner, "Titan Growth", "icons/magic/control/energy-stream-link-"
             "large-blue.webp",
             "<p>As an action, the Oracle scales a willing creature within 60 "
             "feet to titan proportions for 1 minute: the target's size "
             "increases by two categories, it gains 40 temporary hit points, "
             "and its melee damage increases by 2d6. Granted to Markop during "
             "the Spider Grove engagement — the healer, chosen over every "
             "obvious combat escalation candidate.</p>",
             "The Oracle picks who becomes enormous, and the pick is never "
             "the obvious one."),
        feat(owner, "Scheduled Disclosure", ico + "clock-stopwatch-white-blue.webp",
             "<p>The Oracle always knows more than has been said, and releases "
             "it on a schedule of their own. Advantage on Deception and "
             "Insight checks made to control when a fact becomes known. The "
             "month of Shadowfell time dilation was disclosed at the exact "
             "moment of Archie's transit preparation — not before, when it "
             "would have changed the plan.</p>",
             "Everything the Oracle says is true. The timing is the weapon."),
        feat(owner, "Custodian of the Vats",
             "icons/magic/unholy/strike-body-explode-disintegrate.webp",
             "<p>The Oracle maintains flesh vats containing malformed humanoid "
             "bodies suspended in luminescent fluid, used in dimensional "
             "stabilisation. Their origin, ownership and the Oracle's "
             "relationship to them remain undisclosed. The Oracle agreed to "
             "take custody of Bones with the caveat that it was "
             "'quite a burden', and agreed not to use the flesh vats while "
             "standing in proximity to functional flesh vats.</p>"),
        feat(owner, "Ritual Custodian",
             "icons/magic/symbols/runes-carved-stone-red.webp",
             "<p>The Oracle knows the ritual geometry of Raventree Manor the "
             "way a person knows a house they designed: which participants "
             "stand in geometric opposition, where the vats are, what the "
             "Separation Ritual requires. The ritual required blood. The "
             "Oracle declined to specify whose, what quantity, or for what "
             "mechanical purpose.</p>"),
        feat(owner, "Identity Unresolved",
             "icons/magic/control/fear-fright-white.webp",
             "<p>Possibly Orantha Cornelius. Possibly Darius. Possibly someone "
             "who has been checkpointing deaths long enough that the original "
             "identity is academically interesting and practically "
             "irrelevant. Divination that would fix the Oracle's true name or "
             "origin returns a result the caster cannot hold onto.</p>",
             "The Oracle is not a person. It is a role, wearing whoever was "
             "convenient."),
        weapon(owner, "Custodian's Intervention",
               "icons/magic/time/arrows-circling-green.webp",
               "<p>The Oracle does not fight. When forced to, the response is "
               "a localised causal edit rather than a blow: the target finds "
               "that the last few seconds went differently and takes 4d8 "
               "psychic damage as their memory reconciles two versions of "
               "them. The Oracle has never been observed initiating "
               "violence.</p>", 100),
    ]
    bio = (
        "<h1>The Oracle — The Metaphysical Custodian of Raventree Manor</h1>"
        "<p>The Oracle is not a person. It is a role, a function, a custodian "
        "of bleeding timelines wearing the face of whoever was convenient when "
        "the job needed filling. Waluigi cannot determine the correct pronoun "
        "and the Oracle has not volunteered one.</p>"
        "<p>Survived a bullet to the brain by checkpointing reality. Maintains "
        "flesh vats. Warned Archie Miser that he was absorbing too much power "
        "during the transit ritual and then allowed the ritual to proceed. "
        "Granted Markop titan-scale growth during the Spider Grove battle. "
        "Currently in the Fracture Atrium of the Corvinarus Sanctum during a "
        "catastrophe, and has not visibly intervened.</p>"
        "<p><em>Waluigi does not trust the Oracle. The Oracle keeps being "
        "useful. This does not improve trust.</em></p>"
        "<p><strong>Level 8 on the XP ledger (39,250 XP, Corvinarus). "
        "Alignment is recorded as unaligned on purpose: the archive holds the "
        "question of the Oracle's motives open, and this sheet does not close "
        "it.</strong></p>")
    return npc(
        name="The Oracle",
        img="portraits/the_oracle.png",
        token_img="portraits/the_oracle.png",
        size="med",
        scores={"str": 10, "dex": 14, "con": 16, "int": 20, "wis": 18, "cha": 18},
        prof_saves=("int", "wis", "cha"),
        trained={"arc": 2, "his": 2, "ins": 2, "dec": 1, "per": 1, "inv": 1,
                 "rel": 1, "med": 1},
        ac=16, hp=127, hp_formula="17d8 + 51", cr=8, walk=30, darkvision=120,
        languages=["common", "sylvan", "abyssal", "primordial"],
        type_value="humanoid", type_subtype="oracle (identity disputed)",
        alignment="unaligned",
        biography=bio, items=items,
    )


# ----------------------------------------------------------------- Orange T

def build_orange_t():
    owner = "orange_t"
    items = [
        feat(owner, "Already There",
             "icons/magic/perception/silhouette-stealth-shadow.webp",
             "<p>Orange T is never observed arriving. He is simply already "
             "present, with established routines, in a room nobody saw him "
             "enter. He cannot be surprised, and creatures attempting to "
             "determine how long he has been somewhere — or by what route he "
             "got there — learn nothing useful.</p>",
             "Not arriving. Not entering. Already there."),
        feat(owner, "Banishment",
             "icons/magic/movement/portal-vortex-orange.webp",
             "<p>As an action, Orange T banishes a creature he can see within "
             "60 feet to another plane (CHA save DC 13 negates). He used this "
             "on both Dans after treating Bowser's distracted "
             "'not particularly' as consent, casting before the objection "
             "could form, and then said 'oh oops'.</p>"
             "<p><em>Waluigi does not believe the oops.</em></p>",
             "The spell lands before the objection does."),
        feat(owner, "Field Medicine",
             "icons/magic/life/heart-cross-green.webp",
             "<p>Orange T stabilises a creature at 0 hit points as a bonus "
             "action, or restores 2d8 + 3 hit points as an action. He treated "
             "Bones continuously through a collapsing library with the "
             "comfortable familiarity of someone who had been doing it long "
             "enough to have a routine, and did not stop to watch the fight "
             "happening ten feet away.</p>"),
        feat(owner, "Sees What You Cannot",
             "icons/magic/perception/eye-ringed-glow-angry-small-teal.webp",
             "<p>Orange T perceives invisible creatures, objects and planar "
             "boundaries within 60 feet. He pointed at something in the "
             "sanctum and laughed when Bowser could not see it. He did not "
             "explain what it was.</p>"),
        feat(owner, "Practiced Deflection",
             "icons/skills/social/diplomacy-handshake-gray.webp",
             "<p>Advantage on saves and checks made to resist interrogation "
             "about his own presence, history or intentions. His standing "
             "answer is 'I'm here now and that's what matters' — the "
             "deflection of someone who decided long ago that the audit of "
             "his reasons is closed. He described Bones as 'from the future' "
             "and 'no one important' in consecutive sentences.</p>"),
        feat(owner, "A Future Nobody Has Audited",
             "icons/magic/light/explosion-star-glow-orange.webp",
             "<p><strong>Not a usable ability. A note for the DM.</strong> The "
             "archive records that the Toad once known as Orange T later used "
             "a Star Fragment to become a warping divinity, allied with "
             "Fawful, and that the Mages' Guild wants him captured — 'just get "
             "Orange T'. That entity is the <em>God Toad</em>, and it has its "
             "own record, its own XP entry and its own artifacts. None of that "
             "power is on this sheet. This is the Toad before the "
             "fragment.</p>",
             "Every file ends. This one stops."),
        weapon(owner, "Healer's Staff",
               "icons/weapons/staves/staff-simple-gold.webp",
               "<p>A plain working staff, used more often for leaning on than "
               "for fighting. 1d6 bludgeoning. Orange T watched a warhammer "
               "beating happen across the room without once reaching for "
               "it.</p>", 100),
    ]
    bio = (
        "<h1>Orange T — The Toad Who Was Already There and Would Prefer Not "
        "to Explain Why</h1>"
        "<p>A Toad associated with Raventree Manor's internal operations, "
        "found in the Corvinarus Sanctum treating Bones in the corner of a "
        "collapsing library while Bowser beat the original Dan nearly to "
        "death ten feet away. He did not intervene. He did not leave.</p>"
        "<p>He occupied the sanctum with the same energy Green T occupied the "
        "children's table at Orangus Cornelius's dinner: present in a space "
        "designed to make him irrelevant, positioned where powerful people "
        "would not think to look, and doing something more important than "
        "anyone watching would assume.</p>"
        "<p>He banished both Dans on a technicality of consent and said "
        "'oh oops'. He implied Bowser had a mission involving other Oracles "
        "that Bowser knew nothing about. He pointed at something invisible "
        "and laughed.</p>"
        "<p><strong>Level 2 on the XP ledger (320 XP, Corvinarus) — "
        "deliberately low. The point of the character is that he is beneath "
        "notice. His later ascension into the God Toad is a separate entity "
        "and a separate sheet; none of that power belongs here.</strong></p>")
    return npc(
        name="Orange T",
        img="portraits/orange_t.png",
        token_img="portraits/orange_t.png",
        size="sm",
        scores={"str": 8, "dex": 14, "con": 12, "int": 14, "wis": 16, "cha": 13},
        prof_saves=("wis",),
        trained={"med": 2, "ins": 1, "prc": 1, "arc": 1, "dec": 1, "ste": 1},
        ac=13, hp=22, hp_formula="5d6 + 5", cr=2, walk=25, darkvision=60,
        languages=["common", "sylvan"],
        type_value="humanoid", type_subtype="toad",
        alignment="neutral",
        biography=bio, items=items,
    )


BUILDS = {
    "fvtt-Actor-the-oracle.json": build_oracle,
    "fvtt-Actor-orange-t.json": build_orange_t,
}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true",
                    help="verify against what is on disk; write nothing")
    args = ap.parse_args()

    problems = []
    for filename, builder in sorted(BUILDS.items()):
        doc = builder()
        path = os.path.join(ACTORS, filename)

        print("%s" % doc["name"])
        print("  file       : %s" % filename)
        print("  type       : %s (one sheet, no NO-SPECIES variant)" % doc["type"])
        print("  cr / hp / ac: %s / %d / %d"
              % (doc["system"]["details"]["cr"],
                 doc["system"]["attributes"]["hp"]["max"],
                 doc["system"]["attributes"]["ac"]["flat"]))
        print("  items      : %d" % len(doc["items"]))

        if doc["type"] != "npc":
            problems.append("%s: not an npc" % filename)
        ids = [i["_id"] for i in doc["items"]]
        if len(set(ids)) != len(ids):
            problems.append("%s: duplicate item ids" % filename)
        if any(len(i) != 16 or not i.isalnum() for i in ids):
            problems.append("%s: malformed item id" % filename)
        if [i for i in doc["items"] if i["type"] in ("race", "class",
                                                     "subclass", "background")]:
            problems.append("%s: NPC carries character-only items" % filename)
        if doc["prototypeToken"]["actorLink"]:
            problems.append("%s: actorLink must be false on an NPC" % filename)

        if args.check:
            if not os.path.isfile(path):
                problems.append("%s: missing; run without --check" % filename)
            else:
                with open(path, encoding="utf-8") as fh:
                    if json.load(fh) != doc:
                        problems.append("%s: on-disk copy differs from the "
                                        "generator" % filename)
        else:
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(json.dumps(doc, ensure_ascii=False, indent=2) + "\n")
            print("  written    -> %s" % path)
        print()

    if problems:
        print("FAILED:")
        for p in problems:
            print("  - %s" % p)
        return 1
    print("both NPC sheets OK (one file per character)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
