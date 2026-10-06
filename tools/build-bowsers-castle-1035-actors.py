#!/usr/bin/env python3
"""Build the Foundry VTT actors for Session III of the Bowser's Castle coup
chain — 18 Harvestide, 1035 BF: the castle comes down.

    python3 tools/build-bowsers-castle-1035-actors.py            # write the packet
    python3 tools/build-bowsers-castle-1035-actors.py --check    # files on disk match?

Sessions I and II are filed (events.json `bowser_throne_room_compromise` and
`the_assault_on_bowsers_castle`): the false Bowser Jr. let Fawthful's people
into the throne room, Cackletta opened the battle, the supplied dragon broke
the window and the wall, Bowser ordered the retreat and went back to the
breach. Session III picks up there — Bowser fighting his way DOWN his own
castle while the garrison gets out through the lava tunnel — so this packet
is the two sides of that night as dnd5e NPC exports (system 5.3.3, core 14):

  Side A — Bowser's Line        the loyal garrison: named Hammer Bros (Sir
                                Frankfurt, Fred, Ed), the Magikoopa who stayed,
                                shell-wall Koopas, belt-hauling Goombas, the
                                tunnel crew, the wounded to be carried, and
                                OMEGA BOWSER — the form Bowser takes if the
                                castle lands on him (the sheet explains the
                                swap; the present-day Bowser is a PC and is
                                not built here).
  Side B — Fawthful's Forces    Fawthful on his hoverpad with the vacuum
                                apparatus (Cackletta is inside it), Mimbus,
                                Cackletta when she comes out, the Jester, the
                                supplied dragon in its intake harness, the
                                drone, red-armband traitors, hypnotised
                                soldiers, and Fawthful's own clockwork and
                                Beanbean troops. The Switch Hag is here too —
                                hired by "a green bean", attacking nobody.
  The Remnant at the Track      the sideplot: Koopa Killer Killa and the
                                Goomba who took his chances, for the Toad Town
                                Station thread the GM runs later.

Every number is on the sheet's biography with where it came from. Names the
record did not give (the dragon, the hag, the Goomba) are filed by role, as
the archive files the Jester and the Koopa Prisoner. Generic troops reuse the
955 BF Hunyuan tokens; Fawthful's generics reuse the Beanbean 3D packet's
cutouts; the named figures have their own tokens under
Reputation-Matrix2/portraits/bowsers-castle-1035/.

The folder scheme (actors/folders.json `eras.bowsers-castle-1035`) files the
packet under "Bowser's Castle 1035 BF" in Foundry, and the sheets suite folds
it into the world's import.json like the 955 packet. Do not hand-edit the
JSON: change this generator and re-run it (`check-all` runs `--check`).
"""
from __future__ import annotations

import argparse
import importlib.util
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RM = os.path.join(ROOT, "Reputation-Matrix2")
PACKET = "bowsers-castle-1035"
ACTORS = os.path.join(RM, "actors", PACKET)
PORTRAITS = os.path.join(RM, "portraits", PACKET)
TOKEN_PREFIX = f"portraits/{PACKET}/"
FILE_PREFIX = "fvtt-Actor-bc1035-"
MODULE_ID = "waluipedia-mass-import"
FOLDER_ROOT = "Bowser's Castle 1035 BF"
FOLDERS = {"a": [FOLDER_ROOT, "Side A — Bowser's Line"],
           "b": [FOLDER_ROOT, "Side B — Fawthful's Forces"],
           "track": [FOLDER_ROOT, "The Remnant at the Track"]}
DISPOSITION = {"a": 1, "b": -1, "track": 0}
FOUNDRY_ID = re.compile(r"^[A-Za-z0-9]{16}$")


def _load_module(name, rel):
    spec = importlib.util.spec_from_file_location(name, os.path.join(ROOT, rel))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


# Item factories, ability blocks, the icon shelf and the id scheme are the 955
# packet's, so the two era generators cannot drift apart.
P955 = _load_module("p955", "tools/build-peachs-castle-955-actors.py")
sid, feat, attack, scores, abilities, skills, blank_roll = (
    P955.sid, P955.feat, P955.attack, P955.scores, P955.abilities, P955.skills, P955.blank_roll)
I = dict(P955.I)

# Tokens that live in other packets / the portrait library. Anything else on a
# sheet must be a cutout in this packet's portrait folder or a Foundry icon.
T955 = "portraits/peachs-castle-955/"
SHARED = {
    "koopa": T955 + "foe-koopa-troopa.png",
    "goomba": T955 + "foe-goomba.png",
    "hammer": T955 + "foe-hammer-bro.png",
    "magikoopa": T955 + "foe-magikoopa.png",
    "bobomb": T955 + "foe-bob-omb-sapper.png",
    "fawthful": "portraits/fawful_v2.png",
    "mimbus": "portraits/goomba_executive.png",
    "cackletta": "portraits/player/fullbody/cackletta.png",
    "jester": "portraits/jester_goomba.webp",
}

ERA = ("<p><em>Era sheet: 18 Harvestide, 1035 BF, Bowser's Castle.</em> Art and "
       "stats describe this figure on the night the castle came down (events.json "
       "<code>bowser_throne_room_compromise</code> and "
       "<code>the_assault_on_bowsers_castle</code>), not the present day of the "
       "campaign (1040 BF).</p>")
KIT = ("<p><strong>Session kit — The Castle Comes Down (Session III).</strong> "
       "A GM kit for the night after the breach, not a filed event; nothing on "
       "this sheet changes the canon record. The run-sheet is "
       "<code>docs/sessions/bowsers-castle-1035-the-castle-comes-down.md</code>.</p>")


def bio(lines, where=None):
    """ERA + KIT + the sheet's own paragraphs (+ an evidence line)."""
    body = "".join(f"<p>{ln}</p>" for ln in lines)
    if where:
        body += f"<p><em>From the record:</em> {where}</p>"
    return ERA + KIT + body


def npc(*, slug, name, token, side, size, sc, prof_saves=(), trained=None,
        ac, hp, hp_formula, cr, walk, fly=0, hover=False, darkvision=0,
        languages=("common",), lang_custom="", type_value, type_subtype, alignment,
        biography, items, di=(), dr=(), dr_bypass=(), dv=(), ci=(),
        resources=None, token_size=1, disposition=None):
    img = token if token.startswith("portraits/") else TOKEN_PREFIX + token
    doc = {
        "_id": sid("actor", PACKET, slug),
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
                "languages": {"value": list(languages), "custom": lang_custom,
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
            "disposition": DISPOSITION[side] if disposition is None else disposition,
            "displayBars": 0,
            "bar1": {"attribute": "attributes.hp"},
            "bar2": {"attribute": None},
        },
        "items": items,
        "effects": [],
        "folder": None,
        "ownership": {"default": 0},
        "flags": {MODULE_ID: {"folderPath": list(FOLDERS[side]),
                              "source": "tools/build-bowsers-castle-1035-actors.py"}},
        "_stats": {"coreVersion": "14.365", "systemId": "dnd5e",
                   "systemVersion": "5.3.3", "compendiumSource": None,
                   "duplicateSource": None},
    }
    for i, item in enumerate(doc["items"]):
        item["sort"] = 100000 * (i + 1)
    return slug, doc


KOOPA = dict(type_value="humanoid", type_subtype="koopa", alignment="Lawful Neutral")
GOOMBA = dict(type_value="monstrosity", type_subtype="goomba", alignment="Lawful Neutral")

# Shared feature text -------------------------------------------------------

SHELL_RETREAT = ("<p>The Koopa withdraws into its shell: AC 18, speed 0, it cannot "
                 "attack, and it has advantage on Strength and Constitution saving "
                 "throws. It emerges as a bonus action on a later turn.</p>")
HAMMER_BAG = ("<p>It never runs out of hammers. Thrown hammers vanish from the floor "
              "a moment after landing, so nobody else gets to use them.</p>")
HOP = ("<p>Its long jump is 15 feet and its high jump 10 feet, with or without a "
       "running start.</p>")
SWALLOWED = ("A swallowed creature is blinded and restrained, has total cover against "
             "everything outside, and takes 2d6 bludgeoning damage at the start of each "
             "of its turns. It can escape with a DC 16 Strength (Athletics) check as an "
             "action, or by spinning in its shell (Shell Vault); a swallowed creature "
             "that deals 15 or more damage to the inside in a single turn pops the seal, "
             "and everything in there comes out in a 15-foot line.")


def hammer(o):
    return attack(o, "Hammer", I["hammer"],
                  "<p>Thrown 20/60. Versatile. Lobbed in an arc, so the thrown attack "
                  "ignores half and three-quarters cover.</p>",
                  dmg=(1, 8, ["bludgeoning"]), wtype="martialM", props=["thr", "ver"],
                  rng=(20, 60), versatile=(1, 10, ["bludgeoning"]))


def spear(o):
    return attack(o, "Spear", I["spear"],
                  "<p>Melee 5 feet or thrown 20/60. Versatile. The hostile Koopas threw "
                  "these at the retreating Hammer Bros.</p>",
                  dmg=(1, 6, ["piercing"]), wtype="simpleM", props=["thr", "ver"],
                  rng=(20, 60), versatile=(1, 8, ["piercing"]))


# ------------------------------------------------------------ Side A

def build_side_a():
    out = []

    # --- Omega Bowser ------------------------------------------------------
    o = "omega-bowser-1035"
    out.append(npc(
        slug=o, name="Omega Bowser (1035 BF)", token="omega-bowser.png", side="a",
        size="grg", token_size=4, sc=scores(27, 8, 25, 10, 11, 18),
        prof_saves=("str", "con", "wis"), trained={"ath": 1, "itm": 1},
        ac=18, hp=247, hp_formula="15d20 + 90", cr=14, walk=30, darkvision=60,
        di=["fire"], ci=["frightened"],
        resources={"legact": {"value": 3, "max": 3}, "legres": {"value": 2, "max": 2},
                   "lair": {"value": False, "initiative": None}},
        type_value="monstrosity", type_subtype="koopa", alignment="Chaotic Neutral",
        biography=bio([
            "<strong>Not a separate person.</strong> Omega Bowser is what happens when "
            "Bowser's Castle lands on Bowser. The present-day Bowser is a player "
            "character at level 8 in the XP ledger; this sheet is his second form for "
            "one night, built Gargantuan because the GM asked for a Bowser that is "
            "<em>big</em> when the walls come in.",
            "<strong>The trigger.</strong> When Bowser (the PC) would be reduced to 0 hit "
            "points by bludgeoning damage from a collapsing floor or wall, from a "
            "falling tower, or from the crush of a Huge or larger creature — the "
            "dragon's Wall Breaker, the Switch Hag's countdown, Fawthful dropping the "
            "gallery — the GM may call the Omega instead of unconsciousness. The rubble "
            "heaves; the thing that stands up fills the room.",
            "<strong>The swap.</strong> In Foundry, right-click Bowser's token → "
            "<em>Transform</em> and drop this sheet on him (keep mental scores), or "
            "swap the token for a 4×4 Omega token and run this sheet beside his. Omega "
            "starts at full hit points, in the space where Bowser was buried, with his "
            "own Legendary Resistances.",
            "<strong>The clock.</strong> The form lasts 10 rounds, or until Omega "
            "Bowser drops to 0 hit points. Then Bowser comes back in the nearest free "
            "space: prone, with 1 hit point plus his Constitution modifier for each "
            "round the Omega lasted, and one level of exhaustion. Anything Omega was "
            "holding falls free. Nothing else carries back.",
            "CR 14 is deliberate: for ten rounds he outclasses the dragon (CR 12) and "
            "Fawthful (CR 9) together, which is the point of being crushed by your own "
            "castle. He is not a tool for the rest of the campaign.",
        ], "Bowser's fire breath and ground pound in the courtyard; the wall that "
           "finally burst; a king who kept going back to the breach."),
        items=[
            attack(o, "Omega Fist", I["firefist"],
                   "<p>Melee, reach 15 feet. A Large or smaller creature hit must succeed "
                   "on a DC 20 Strength saving throw or be pushed 15 feet away and knocked "
                   "prone.</p>",
                   dmg=(4, 8, ["bludgeoning"]), wtype="natural", reach=15),
            attack(o, "Bite", I["bite"],
                   "<p>Melee, reach 10 feet. Plus 2d6 fire damage from the furnace behind "
                   "the teeth.</p>",
                   dmg=(3, 10, ["piercing"]), wtype="natural", reach=10),
            feat(o, "Multiattack", I["strike"],
                 "<p>Omega Bowser makes two Omega Fist attacks, or one Omega Fist and one "
                 "Bite.</p>"),
            feat(o, "Magma Breath (Recharge 5–6)", I["fireball"],
                 "<p>A 90-foot line 10 feet wide, or a 60-foot cone. Each creature in the "
                 "area makes a DC 19 Dexterity saving throw, taking 14d6 fire damage on a "
                 "failure or half as much on a success. Portcullises melt, banners go, "
                 "the floor glows for a round (difficult terrain, 1d6 fire to anything "
                 "that ends its turn on it).</p>", uses=("1", "recharge", "5")),
            feat(o, "Castle-Shoulder Throw (Recharge 5–6)", I["shockwave"],
                 "<p>Omega Bowser tears a piece of his own castle off his shoulders and "
                 "throws it: range 60/240, a 20-foot-radius point of impact. Each creature "
                 "in the area makes a DC 19 Dexterity saving throw, taking 8d10 "
                 "bludgeoning damage on a failure or half as much on a success; the area "
                 "becomes difficult terrain. A Huge or smaller flying creature hit by it "
                 "(the dragon, a hoverpad) falls.</p>", uses=("1", "recharge", "5")),
            feat(o, "Too Big for the Castle", I["wound"],
                 "<p>Omega Bowser cannot be knocked prone by a creature smaller than Huge, "
                 "and he ignores difficult terrain made of rubble. Whenever he moves 10 or "
                 "more feet inside a built space, the walls and floor he passes through "
                 "give way: those squares become difficult terrain, and each Medium or "
                 "smaller creature in them makes a DC 16 Dexterity saving throw, taking "
                 "2d10 bludgeoning damage on a failure or half on a success. He deals "
                 "double damage to objects and structures.</p>"),
            feat(o, "Crushed Into Omega", I["up"],
                 "<p>See the biography: trigger (buried at 0 hit points), swap (Transform "
                 "or token swap, full hit points), clock (10 rounds or 0 hit points), and "
                 "what comes back (Bowser, prone, 1 hit point + Constitution modifier per "
                 "round the Omega lasted, one level of exhaustion).</p>"),
            feat(o, "Legendary Resistance (2/Day)", I["ward"],
                 "<p>If Omega Bowser fails a saving throw, he can choose to succeed "
                 "instead.</p>", uses=("2", "day")),
            feat(o, "Legendary Actions", I["paw"],
                 "<p>Omega Bowser can take 3 legendary actions, choosing from the options "
                 "below, only at the end of another creature's turn, regaining them at "
                 "the start of his turn.</p><ul><li><strong>Fist.</strong> One Omega Fist "
                 "attack.</li><li><strong>Roar.</strong> Each hostile creature within 60 "
                 "feet that can hear him makes a DC 17 Wisdom saving throw or is "
                 "frightened until the end of its next turn. The supplied dragon is not "
                 "immune; Fawthful rolls at disadvantage, because for once the bean is "
                 "not the loudest thing in the room.</li><li><strong>Stomp (Costs 2 "
                 "Actions).</strong> Each creature on the ground within 20 feet makes a DC "
                 "20 Strength saving throw or takes 3d8 bludgeoning damage and is knocked "
                 "prone. The floor below takes the same.</li></ul>"),
        ]))

    # --- Sir Frankfurt ----------------------------------------------------
    o = "sir-frankfurt"
    out.append(npc(
        slug=o, name="Sir Frankfurt", token="sir-frankfurt.png", side="a",
        size="med", sc=scores(16, 14, 15, 10, 12, 13), prof_saves=("str", "con"),
        trained={"ath": 1, "his": 1, "per": 1}, ac=16, hp=52, hp_formula="8d8 + 16",
        cr=3, walk=30, languages=("common", "draconic"),
        type_value="humanoid", type_subtype="koopa", alignment="Lawful Good",
        biography=bio([
            "A Hammer Bro who guarded a room because Bowser told him to, and was still "
            "guarding it when the order was retracted too late to matter. The dragon "
            "asked him where Bowser was; he answered in Draconic that he was not the "
            "target, and then he told it his family history until it stopped being able "
            "to think.",
            "Sir Frankfurt the fourteenth — or the fiftieth, depending on which part of "
            "the count he reaches first — and the tenth child of twenty-four. His father "
            "charged Mario and died before the third world was over; his mother died of "
            "grief a few days later; Bowser took in the surviving children. Bowser could "
            "be harsh, he told the dragon, but he had done right by them. The dented helm "
            "and the tabard with the 24 are his.",
            "Built as a knight the party can be handed: two hammers, a reaction that "
            "protects the ally beside him, and the shell spin that got him out of the "
            "dragon's intake and off a fifty-foot wall. The record drops him 'into the "
            "unknown'; the sheet survives that fall at half damage. Roll it, and find out "
            "where he landed.",
        ], "the dragon's question, the family count, the shell striking the intake, "
           "the fall from the fifty-foot castle."),
        items=[
            hammer(o),
            feat(o, "Multiattack", I["strike"], "<p>Sir Frankfurt makes two Hammer attacks.</p>"),
            feat(o, "Hold the Room (Reaction)", I["halt"],
                 "<p>When a creature attacks an ally within 5 feet of Sir Frankfurt, he can "
                 "use his reaction to step in: the attack roll has disadvantage.</p>"),
            feat(o, "Shell Vault (Bonus Action, Recharge 4–6)", I["spin"],
                 "<p>Sir Frankfurt curls into his shell and spins. He automatically escapes "
                 "any grapple, restraint, or vacuum intake he is in, then moves up to 30 "
                 "feet — straight up a wall or out of a window counts — without provoking "
                 "opportunity attacks. Any object or machine he strikes on the way takes "
                 "2d8 bludgeoning damage; a vacuum intake struck this way jams for one "
                 "round.</p>", uses=("1", "recharge", "4")),
            feat(o, "Tenth of Twenty-Four", I["diplomacy"],
                 "<p>While a member of the Koopa Troop can see him, Sir Frankfurt has "
                 "advantage on saving throws against being frightened. He knows every name "
                 "in his family in order. Reciting them takes a full round; a creature "
                 "that listens to the whole thing must succeed on a DC 12 Wisdom saving "
                 "throw or be unable to take reactions until the end of its next turn.</p>"),
            feat(o, "Draconic Tongue", I["shout"],
                 "<p>He speaks Draconic. The first time in a conversation he addresses a "
                 "dragon in complete Draconic sentences, he has advantage on the Charisma "
                 "(Persuasion) check — see the supplied dragon's <em>Supplied, Not "
                 "Loyal</em>.</p>"),
            feat(o, "Lands in His Shell", I["up"],
                 "<p>When Sir Frankfurt falls, he takes half the falling damage and is not "
                 "knocked prone.</p>"),
            feat(o, "Bottomless Hammer Bag", I["hammer"], HAMMER_BAG),
        ]))

    # --- Fred ------------------------------------------------------------
    o = "hammer-bro-fred"
    out.append(npc(
        slug=o, name="Fred", token="hammer-bro-fred.png", side="a",
        size="med", sc=scores(15, 14, 14, 12, 10, 11), trained={"ath": 1, "inv": 1},
        ac=15, hp=39, hp_formula="6d8 + 12", cr=2, walk=30,
        biography=bio([
            "One of the two Hammer Bros Bowser carried into a side room under his arms "
            "when the throne-room wall burst. The record gives the pair one question "
            "between them — does the castle have a self-destruct switch, and if the "
            "dragon is taking it anyway, could they not blow it up and walk the "
            "survivors to Neo Bowser City? — and does not say which of them asked it. "
            "This sheet gives Fred the proposal so the two can be played apart.",
            "Bowser's answer was 'You want me to blow up my own castle?' Fred's position "
            "is that Mario once pressed a switch and a whole castle came down, so the "
            "technology exists. He is not wrong about the technology. He is a demolitions "
            "mind in a hammer-throwing body: his hammers find the weak course in a wall, "
            "and he can tell whether a switch does what its label says — which, tonight, "
            "matters.",
        ], "the side room; the switch question; Mario once pressed a switch and a castle came down."),
        items=[
            hammer(o),
            feat(o, "Multiattack", I["strike"], "<p>Fred makes two Hammer attacks.</p>"),
            feat(o, "Demolition Eye", I["scroll"],
                 "<p>Fred's hammers deal double damage to objects and structures. As an "
                 "action he can study a switch, charge, lever, or door within 5 feet and "
                 "make a DC 12 Intelligence (Investigation) check; on a success the GM "
                 "tells him truthfully what it does — the Switch Hag's box included.</p>"),
            feat(o, "Bad Idea, Good Timing (1/Day)", I["shout"],
                 "<p>When an ally within 30 feet fails an ability check, Fred shouts a "
                 "worse idea. The ally rerolls the check and must use the new roll.</p>",
                 uses=("1", "day")),
            feat(o, "Hop", I["up"], HOP),
            feat(o, "Bottomless Hammer Bag", I["hammer"], HAMMER_BAG),
        ], **KOOPA))

    # --- Ed --------------------------------------------------------------
    o = "hammer-bro-ed"
    out.append(npc(
        slug=o, name="Ed", token="hammer-bro-ed.png", side="a",
        size="med", sc=scores(15, 14, 14, 10, 13, 10), trained={"ath": 1, "prc": 1},
        ac=15, hp=39, hp_formula="6d8 + 12", cr=2, walk=30,
        biography=bio([
            "The other Hammer Bro under Bowser's arm. The record files the side-room "
            "argument to both of them without splitting it; this sheet gives Ed the "
            "objections so the two can be played apart. Ed agrees with Fred in principle "
            "and disagrees with him in every particular, which is how they have stayed "
            "alive this long. He is the one who remembers that nobody here built the "
            "switch, that old castles contain controls nobody remembers installing, and "
            "that there is an axe at the end of a river somewhere that this is going to "
            "come back to.",
            "Steadier than he looks. Beside the king, or beside Sir Frankfurt, he holds; "
            "on his own he counts exits. Both are useful on a night like this.",
        ], "the side room, the sabotage theory, the axe at the end of the river."),
        items=[
            hammer(o),
            feat(o, "Multiattack", I["strike"], "<p>Ed makes two Hammer attacks.</p>"),
            feat(o, "Carried by the King", I["shield"],
                 "<p>While within 5 feet of Bowser, Omega Bowser, or Sir Frankfurt, Ed has "
                 "a +2 bonus to AC and advantage on saving throws against being "
                 "frightened.</p>"),
            feat(o, "Mario Pressed a Switch Once (Reaction)", I["halt"],
                 "<p>When an ally within 30 feet is about to use a switch, lever, or button "
                 "nobody has identified, Ed can use his reaction to say so. The ally may "
                 "stop. If they go ahead, they have advantage on the first saving throw "
                 "against whatever it does, and Ed gets to say he told them.</p>"),
            feat(o, "Hop", I["up"], HOP),
            feat(o, "Bottomless Hammer Bag", I["hammer"], HAMMER_BAG),
        ], **KOOPA))

    # --- Loyal Magikoopa --------------------------------------------------
    o = "loyal-magikoopa"
    out.append(npc(
        slug=o, name="Loyal Magikoopa (Block Transport)", token=SHARED["magikoopa"], side="a",
        size="med", sc=scores(9, 14, 12, 17, 13, 12), prof_saves=("int", "wis"),
        trained={"arc": 1, "ins": 1}, ac=12, hp=31, hp_formula="7d6 + 7", cr=3,
        walk=30, fly=40, hover=True,
        biography=bio([
            "The Magikoopas who stayed. One snapped a wand at the eastern stair and moved "
            "six Koopas three floors up in a blink; one teleported the wounded behind the "
            "kitchens; one tried to move a supply cart and delivered only the wheels. One "
            "shouted at the breach that they might take the castle but they would not "
            "take their boss. One cried a small tear as they flew for Neo Bowser City "
            "with the message. This sheet is any of them.",
            "The useful magic tonight is not elegant. It is distance: every Block "
            "Transport puts bodies where the dragon cannot reach and, the record admits, "
            "where the traitors can count them. It also makes the routes harder to audit, "
            "which is a sentence the GM may want to use.",
        ], "the eastern stair, the kitchens, the cart's wheels, 'they will not take "
           "their boss', the small tear."),
        items=[
            attack(o, "Wand Bolt", I["bolt"],
                   "<p>Ranged spell attack, 90 feet. A tumbling triangle-circle-square of "
                   "force.</p>",
                   dmg=(3, 6, ["force"]), ability="int", kind="ranged", cls="spell",
                   wtype="natural", rng=(90, None)),
            feat(o, "Block Transport (Action, Recharge 5–6)", I["blink"],
                 "<p>Up to six willing Small or Medium creatures within 30 feet (or one "
                 "Large creature, or one cart), plus the Magikoopa, teleport to a spot it "
                 "can see or knows within 300 feet — three floors up, behind the kitchens, "
                 "the lava-tunnel mouth. Roll a d6: on a 1 one piece of baggage arrives as "
                 "only its wheels. Each use is one tick on the evacuation clock if it "
                 "carried wounded or stores.</p>", uses=("1", "recharge", "5")),
            feat(o, "Blink (Bonus Action, Recharge 4–6)", I["blink"],
                 "<p>The Magikoopa teleports up to 30 feet to an unoccupied space it can "
                 "see, vanishing in a puff of blue smoke.</p>",
                 uses=("1", "recharge", "4")),
            feat(o, "They Will Not Take Our Boss (Reaction, 3/Day)", I["ward"],
                 "<p>When Bowser or Omega Bowser within 60 feet is hit by an attack, the "
                 "Magikoopa can use its reaction to give him a +3 bonus to AC against that "
                 "attack, which may cause it to miss.</p>", uses=("3", "day")),
            feat(o, "A Small Tear", I["wound"],
                 "<p>When an ally of the Koopa Troop dies within 60 feet of the Magikoopa, "
                 "Block Transport recharges.</p>"),
            feat(o, "Spellcasting", I["orb"],
                 "<p>Spellcasting ability Intelligence (spell save DC 13). At will: "
                 "<em>mage hand, minor illusion</em>. 1/day each: <em>shield, magic "
                 "missile</em>.</p>"),
        ], **KOOPA))

    # --- Troops -----------------------------------------------------------
    o = "loyal-koopa-troopa"
    out.append(npc(
        slug=o, name="Loyal Koopa Troopa (Shell Wall)", token=SHARED["koopa"], side="a",
        size="sm", sc=scores(12, 12, 13, 9, 10, 9), ac=14, hp=13, hp_formula="3d6 + 3",
        cr=0.25, walk=25,
        biography=bio([
            "Green-shell line infantry who did the one clever thing of the night: locked "
            "shells into a line and rolled sideways across the yard, a low barrier between "
            "the dragon's reach and the barracks door. The record calls it not a beautiful "
            "formation. It worked because the small bodies went where the large body could "
            "not.",
            "Later they closed their shells behind the retreating Goombas long enough for "
            "the Magikoopas to teleport the last wounded defender out, and made a lane for "
            "the hypnotised soldiers to be taken down by coordination rather than one "
            "heroic strike. Use them in pairs.",
        ], "the shell line in the courtyard; the lane during the retreat."),
        items=[
            attack(o, "Shell Bash", I["fist"], "<p>Melee, 5 feet.</p>",
                   dmg=(1, 6, ["bludgeoning"]), wtype="natural"),
            feat(o, "Shell Retreat (Bonus Action)", I["shield"], SHELL_RETREAT),
            feat(o, "Shell Wall", I["kite"],
                 "<p>While retreated and adjacent to at least one other retreated Koopa, "
                 "the two make a barrier: creatures directly behind them have half cover, "
                 "and a Huge or larger creature treats the line as a low wall — it cannot "
                 "make melee attacks through it against prone or Small creatures on the "
                 "far side.</p>"),
            feat(o, "Lock and Roll (Reaction)", I["spin"],
                 "<p>When an ally the Koopa can hear shouts an order, up to six retreated "
                 "Koopas in a connected line can each use their reaction to roll 10 feet "
                 "sideways together, carrying the Shell Wall with them.</p>"),
        ], **KOOPA))

    o = "loyal-goomba"
    out.append(npc(
        slug=o, name="Loyal Goomba (Belt Hauler)", token=SHARED["goomba"], side="a",
        size="sm", sc=scores(10, 10, 10, 6, 8, 6), ac=10, hp=7, hp_formula="2d6",
        cr=0.125, walk=20,
        biography=bio([
            "Brown, frightened, and the reason there were survivors. The Goombas dropped "
            "flat, ran beneath the swinging edge of the dragon's jaw, and hauled wounded "
            "soldiers by their belts toward the stairs. Two of them shouted in triumph "
            "when the dragon's claw slipped, and immediately remembered they were "
            "supposed to be retreating.",
            "Asked by Bowser whether it had ever fought a dragon before, one of them had "
            "not, and said 'We got this!' anyway. Another, asked whether it was afraid "
            "of being stepped on, answered that it was just some dragons. One told "
            "another that going back together was better than being crushed alone. One "
            "got played with by the dragon until the play stopped being survivable. The "
            "sheet is for the ones still running.",
        ], "the belt-hauling under the dragon's jaw; 'We got this!'"),
        items=[
            attack(o, "Headbutt", I["fist"], "<p>Melee, 5 feet.</p>",
                   dmg=(1, 4, ["bludgeoning"]), wtype="natural"),
            feat(o, "Belt Hauler", I["run"],
                 "<p>The Goomba can drag one Medium or smaller creature at its full speed "
                 "by the belt. While dragging, its movement does not provoke opportunity "
                 "attacks from Huge or larger creatures. A Wounded Defender it drags out of "
                 "the castle is one tick on the evacuation clock.</p>"),
            feat(o, "Under the Jaw", I["paw"],
                 "<p>The Goomba can move through the space of a Large or larger hostile "
                 "creature; that space is difficult terrain for it.</p>"),
            feat(o, "Soft Cap", I["up"],
                 "<p>A critical hit from a creature above the Goomba (a jump, a drop from a "
                 "gallery, a dragon's foot) destroys it outright.</p>"),
        ], **GOOMBA))

    o = "hammer-bro-of-the-line"
    out.append(npc(
        slug=o, name="Hammer Bro of the Line", token=SHARED["hammer"], side="a",
        size="med", sc=scores(15, 14, 14, 10, 11, 10), trained={"ath": 1},
        ac=15, hp=39, hp_formula="6d8 + 12", cr=2, walk=30,
        biography=bio([
            "The Hammer Bro who held the west passage until the ceiling shook, threw a "
            "hammer at the dragon's eye, missed, hit a traitor, and did not stop to find "
            "out whether the result was politically complicated. When Bowser shouted for "
            "him to hold, he shouted back that he had held. Then he retreated, and took "
            "the surviving Goombas with him.",
            "The record's verdict stands on the sheet: the retreat was the first honest "
            "order anybody followed all night. The west passage was no longer a position. "
            "It was a place where the ceiling was about to become a floor.",
        ], "the west passage; he shouted back that he had held."),
        items=[
            hammer(o),
            feat(o, "Multiattack", I["strike"], "<p>The Hammer Bro makes two Hammer attacks.</p>"),
            feat(o, "Knows When to Leave", I["run"],
                 "<p>While below half its hit points, the Hammer Bro can take the Disengage "
                 "action as a bonus action, and allies within 10 feet that move with it "
                 "do not provoke opportunity attacks from the creature it disengaged "
                 "from. This is not cowardice.</p>"),
            feat(o, "Hop", I["up"], HOP),
            feat(o, "Bottomless Hammer Bag", I["hammer"], HAMMER_BAG),
        ], **KOOPA))

    o = "bob-omb-tunnel-crew"
    out.append(npc(
        slug=o, name="Bob-omb of the Tunnel Crew", token=SHARED["bobomb"], side="a",
        size="sm", sc=scores(10, 14, 12, 8, 10, 6), ac=13, hp=22, hp_formula="4d6 + 8",
        cr=1, walk=20, di=["fire"],
        type_value="construct", type_subtype="bob-omb", alignment="Lawful Neutral",
        biography=bio([
            "The lava-tunnel crew. The loyalists evacuated through the lava tunnel while "
            "the dragon held the outer approach; somebody has to make sure nothing follows "
            "them down it. A Bob-omb volunteers for that the way Bob-ombs volunteer for "
            "everything — once.",
            "The sheet is a door that closes behind the survivors. It is also, if a "
            "player is feeling brave, the way to drop a corridor on a dragon's head.",
        ], "the lava tunnel the loyalists left by."),
        items=[
            attack(o, "Fuse Headbutt", I["fist"], "<p>Melee, 5 feet.</p>",
                   dmg=(1, 4, ["bludgeoning"]), wtype="natural"),
            feat(o, "Detonate (Action)", I["fireball"],
                 "<p>The Bob-omb explodes and is destroyed. Each creature within 10 feet "
                 "makes a DC 12 Dexterity saving throw, taking 4d6 fire damage on a failure "
                 "or half as much on a success. Doors in the area stop being doors.</p>"),
            feat(o, "Seal the Tunnel", I["wound"],
                 "<p>If the Bob-omb detonates in a corridor or tunnel 10 feet wide or "
                 "narrower, the passage collapses behind it: impassable without ten "
                 "minutes of digging, or a Wall Breaker. A creature in the collapsed "
                 "squares makes a DC 12 Dexterity saving throw or takes 3d10 bludgeoning "
                 "damage and is buried (restrained, prone).</p>"),
            feat(o, "Volatile", I["firebolt"],
                 "<p>If the Bob-omb takes fire damage or is reduced to 0 hit points by any "
                 "other means, it detonates at the start of its next turn.</p>"),
        ]))

    o = "wounded-defender"
    out.append(npc(
        slug=o, name="Wounded Defender", token=SHARED["koopa"], side="a",
        size="sm", sc=scores(8, 8, 10, 9, 10, 9), ac=10, hp=4, hp_formula="1d6",
        cr=0, walk=10,
        biography=bio([
            "The evacuation is not an abstraction. Each Wounded Defender on the map is a "
            "Koopa or Goomba who cannot get out on their own: a Belt Hauler drags them, a "
            "Block Transport blinks them, a Hammer Bro carries one under each arm the way "
            "a king carries equipment that has become unexpectedly alive.",
            "<strong>The clock:</strong> each Wounded Defender that reaches the lava tunnel "
            "is one tick. Each one the dragon reaches is a tear. The run-sheet sets how "
            "many are on each floor.",
        ], "'Not just you imbeciles. Everyone.'"),
        items=[
            feat(o, "Needs Carrying", I["wound"],
                 "<p>Speed 10 on its own. A creature with a free hand can move it at that "
                 "creature's speed; a Belt Hauler does it without a free hand.</p>"),
            feat(o, "Says Thank You", I["diplomacy"],
                 "<p>The first time a creature gets this defender off a floor, that creature "
                 "gains 5 temporary hit points. Gratitude is load-bearing tonight.</p>"),
        ], **KOOPA))
    return out


# ------------------------------------------------------------ Side B

def build_side_b():
    out = []
    bean = dict(type_value="humanoid", type_subtype="beanish", alignment="Chaotic Evil")

    # --- Fawthful -----------------------------------------------------------
    o = "fawthful-1035"
    out.append(npc(
        slug=o, name="Fawthful (1035 BF)", token=SHARED["fawthful"], side="b",
        size="sm", sc=scores(8, 16, 14, 20, 12, 16), prof_saves=("dex", "int", "cha"),
        trained={"arc": 1, "dec": 1, "itm": 1, "prf": 1}, ac=17, hp=123,
        hp_formula="19d6 + 57", cr=9, walk=20, fly=40, hover=True, darkvision=60,
        lang_custom="Beanish",
        resources={"legact": {"value": 2, "max": 2}, "legres": {"value": 2, "max": 2},
                   "lair": {"value": False, "initiative": None}},
        biography=bio([
            "The commander who turned a compromised castle into an invasion route and "
            "then stated the plan at the gate: 'When people come to the castle, they will "
            "see me as the king. I will be this world's god.' Asked why a bean wanted "
            "Bowser's castle: 'Power. I control the capital. You do not. I control the "
            "big Bowser Castle. You do not. Simple.'",
            "He fights from a hoverpad above the broken floor with the vacuum apparatus "
            "on his head. He sucked Cackletta into it when she became a dangerous guest; "
            "she is still in there when this session opens, and she comes out when he "
            "decides, or when he is losing. He threatened to suck Bowser up too. He "
            "cannot — Bowser is Large — but the sheet lets him try, and lets him say so.",
            "The archive keeps Fawthful distinct from the older Fawful record "
            "(<code>fawful</code>); do not resolve that at the table. The present-day "
            "article is <code>fawthful</code>. Legendary Resistances are two because the "
            "record shows him surviving a throne-room full of fire by not being where it "
            "landed.",
        ], "the hoverpad, the vacuum apparatus, the claim at the gate; he told the dragon "
           "there would be consequences."),
        items=[
            attack(o, "Fury Ray", I["beam"],
                   "<p>Ranged spell attack, 120 feet. Green light with a headache in "
                   "it.</p>",
                   dmg=(3, 10, ["force"]), ability="int", kind="ranged", cls="spell",
                   wtype="natural", rng=(120, None)),
            feat(o, "Multiattack", I["strike"],
                 "<p>Fawthful makes two Fury Ray attacks, or one Fury Ray and uses Inhale "
                 "if it is available.</p>"),
            feat(o, "Vacuum Apparatus — Inhale (Recharge 4–6)", I["wind"],
                 "<p>A 30-foot cone from the helmet's intake. Each creature in the cone "
                 "makes a DC 16 Strength saving throw. A Medium or smaller creature that "
                 "fails is pulled 20 feet toward Fawthful, and if it ends within 5 feet of "
                 "him it is swallowed into the apparatus. A Large creature that fails is "
                 "pulled 10 feet and cannot be swallowed, whatever Fawthful says. "
                 + SWALLOWED + "</p>", uses=("1", "recharge", "4")),
            feat(o, "The Guest Comes Out (Bonus Action, 1/Day)", I["skull"],
                 "<p>Fawthful ejects Cackletta — or any other swallowed creature — into an "
                 "unoccupied space within 15 feet. Cackletta arrives at full hit points and "
                 "furious, and acts on Fawthful's initiative count minus 10. He does this "
                 "the first time he is below half his hit points, or earlier if the room "
                 "bores him.</p>", uses=("1", "day")),
            feat(o, "Mustard Monologue (Bonus Action)", I["shout"],
                 "<p>One creature within 60 feet that can hear Fawthful makes a DC 16 "
                 "Wisdom saving throw. On a failure it has disadvantage on attack rolls "
                 "against anyone but Fawthful until the end of its next turn. Bowser "
                 "saves at disadvantage; the record is clear that he finds the bean "
                 "genuinely infuriating.</p>"),
            feat(o, "Consequences (Reaction)", I["fear"],
                 "<p>When an ally within 60 feet misses an attack or fails a check, "
                 "Fawthful screams about consequences. The ally takes 1d8 psychic damage "
                 "and has advantage on its next attack roll before the end of its next "
                 "turn. The dragon has heard this already.</p>"),
            feat(o, "Hoverpad", I["wings"],
                 "<p>Fly 40 (hover), five feet above whatever is left of the floor. A "
                 "ground pound or Stomp within 10 feet of him forces a DC 15 Dexterity "
                 "saving throw; on a failure he is knocked off the pad, lands prone, and "
                 "cannot fly until he spends a bonus action remounting it.</p>"),
            feat(o, "Half the Castle Already", I["key"],
                 "<p>Fawthful claims half the castle was infiltrated before the dragon "
                 "arrived, and the garrison sheet agrees. Red-Armband Koopas and "
                 "Chain-Puller Goombas within 60 feet of him open doors and portcullises "
                 "as a bonus action instead of an action.</p>"),
            feat(o, "Legendary Resistance (2/Day)", I["ward"],
                 "<p>If Fawthful fails a saving throw, he can choose to succeed "
                 "instead.</p>", uses=("2", "day")),
            feat(o, "Legendary Actions", I["paw"],
                 "<p>Fawthful can take 2 legendary actions, choosing from the options "
                 "below, only at the end of another creature's turn, regaining them at "
                 "the start of his turn.</p><ul><li><strong>Fury Ray.</strong> One Fury "
                 "Ray attack.</li><li><strong>Hover Dash.</strong> He moves up to 20 feet "
                 "without provoking opportunity attacks.</li><li><strong>Cackle (Costs 2 "
                 "Actions).</strong> Mustard Monologue against up to three "
                 "creatures.</li></ul>"),
        ], **bean))

    # --- Mimbus -----------------------------------------------------------------
    o = "mimbus-1035"
    out.append(npc(
        slug=o, name="Mimbus (1035 BF)", token=SHARED["mimbus"], side="b",
        size="sm", sc=scores(10, 14, 14, 16, 15, 16), prof_saves=("int", "wis"),
        trained={"dec": 1, "ins": 1, "prc": 1, "slt": 1}, ac=15, hp=65,
        hp_formula="10d6 + 30", cr=4, walk=25, darkvision=60,
        type_value="humanoid", type_subtype="operative (species not filed)",
        alignment="Lawful Evil",
        biography=bio([
            "The quiet part of the operation. Mimbus stood beside the false heir, close "
            "enough to the garrison sheet to read it, threw up a shield when Cackletta's "
            "first spell crossed the throne room, shouted for the inner guard and got "
            "three answers from the wrong side of the wall. Bowser swiped at him in the "
            "courtyard and he fell; he was back at Fawthful's side for the claim at the "
            "gate.",
            "<strong>If Session III continues from that moment:</strong> start Mimbus at "
            "half hit points and prone, crawling toward Fawthful. He knows every door "
            "that was moved, every defender who was removed without a replacement name, "
            "and the passage from the lower barracks to the inner wall that only a traitor "
            "could have opened from inside. He is the sheet to capture.",
            "The archive does not assign Mimbus a species; the art is a Goomba in a suit "
            "and the sheet follows the art without filing it.",
        ], "the shield in the throne room; the swipe in the courtyard; the broken gate."),
        items=[
            attack(o, "Ledger Slam", I["club"],
                   "<p>Melee, 5 feet. A reinforced briefcase with the castle's routes in "
                   "it.</p>",
                   dmg=(1, 8, ["bludgeoning"]), ability="dex", props=["fin"]),
            feat(o, "Shield Burst (Reaction, Recharge 5–6)", I["ward"],
                 "<p>When Mimbus or an ally within 10 feet of him is hit by an attack or "
                 "targeted by a spell, Mimbus raises a shield: the attack has a −4 penalty "
                 "to hit against the target, or the spell's damage to the target is "
                 "halved.</p>", uses=("1", "recharge", "5")),
            feat(o, "Knows the Routes", I["sealed"],
                 "<p>Mimbus can open or close any door, gate, or portcullis in Bowser's "
                 "Castle within 10 feet as a bonus action. He knows where the altered "
                 "routes on the garrison sheet lead; a creature that reads the sheet "
                 "(<em>prop_castle_betrayal_roster</em>) and succeeds on a DC 14 "
                 "Intelligence (Investigation) check learns the same.</p>"),
            feat(o, "Quiet Operator", I["eye"],
                 "<p>While a louder ally — Fawthful, the dragon, the Jester — is acting "
                 "within 30 feet, Mimbus is unnoticed unless a creature succeeds on a DC 14 "
                 "Wisdom (Perception) check at the start of its turn. His first attack "
                 "against a creature that has not noticed him has advantage.</p>"),
            feat(o, "Exit, Quietly (1/Day)", I["fog"],
                 "<p>When Mimbus drops below 15 hit points, he becomes invisible until the "
                 "end of his next turn and may move his speed without provoking "
                 "opportunity attacks. He is still in the castle.</p>", uses=("1", "day")),
        ]))

    # --- Cackletta ------------------------------------------------------------
    o = "cackletta-1035"
    out.append(npc(
        slug=o, name="Cackletta (1035 BF)", token=SHARED["cackletta"], side="b",
        size="med", sc=scores(9, 14, 15, 18, 14, 19), prof_saves=("int", "cha"),
        trained={"arc": 1, "dec": 1, "itm": 1}, ac=15, hp=97, hp_formula="15d8 + 30",
        cr=7, walk=30, fly=30, hover=True, darkvision=60, lang_custom="Beanish",
        biography=bio([
            "She opened the battle. The first spell struck the floor between Bowser and "
            "the corridor in green, folded light, and split the black stone without "
            "producing a flame; the second struck the throne. Later she kept the inner "
            "walls under spell pressure, turning the stone red from the inside, until "
            "Fawthful sucked her into the apparatus 'as though removing a dangerous "
            "guest from a room'.",
            "<strong>She starts the session inside the apparatus.</strong> Until Fawthful "
            "lets her out (The Guest Comes Out) she has no actions and total cover; "
            "popping the seal from inside or breaking the helmet releases her early, at "
            "full hit points, and she is not grateful. The older record (Beanbean, c. "
            "1012 BF) says Mario and Luigi beat her once; this is why Soul Flight is on "
            "the sheet and why nobody at the table should believe the second time "
            "took either.",
        ], "the first spell on the floor, the second on the throne, the inner walls "
           "turning red, the vacuum."),
        items=[
            attack(o, "Green Folded Light", I["beam"],
                   "<p>Ranged spell attack, 120 feet. It splits stone without flame: the "
                   "attack ignores half and three-quarters cover, and a creature hit must "
                   "succeed on a DC 16 Constitution saving throw or be knocked prone as the "
                   "floor cracks under it.</p>",
                   dmg=(3, 8, ["force"]), ability="cha", kind="ranged", cls="spell",
                   wtype="natural", rng=(120, None)),
            feat(o, "Multiattack", I["strike"],
                 "<p>Cackletta makes two Green Folded Light attacks.</p>"),
            feat(o, "Hex of the Hall (Recharge 5–6)", I["disintegrate"],
                 "<p>A 20-foot cube within 90 feet fills with green fire that is not fire. "
                 "Each creature in it makes a DC 16 Dexterity saving throw, taking 6d8 "
                 "necrotic damage on a failure or half as much on a success. Banners "
                 "catch at their lower edges; the cube is difficult terrain until the end "
                 "of her next turn.</p>", uses=("1", "recharge", "5")),
            feat(o, "Countercackle (Reaction, 3/Day)", I["shout"],
                 "<p>When a creature within 60 feet casts a spell of 3rd level or lower, "
                 "or uses a Magikoopa's Block Transport, Cackletta laughs and it fails.</p>",
                 uses=("3", "day")),
            feat(o, "Inside the Apparatus", I["fog"],
                 "<p>While swallowed by Fawthful's vacuum apparatus she takes no actions, "
                 "has total cover, and takes no damage from it. She emerges at full hit "
                 "points when released or when the seal is popped.</p>"),
            feat(o, "Soul Flight", I["skull"],
                 "<p>When Cackletta drops to 0 hit points, her body collapses and a "
                 "cackling green shade leaves it at fly speed 60, through the nearest "
                 "wall. She is not dead. Where the shade goes is not this session's "
                 "problem.</p>"),
        ], **bean))

    # --- The Jester -----------------------------------------------------------
    o = "the-jester-goomba-1035"
    out.append(npc(
        slug=o, name="The Jester (Goomba) (1035 BF)", token=SHARED["jester"], side="b",
        size="sm", sc=scores(8, 15, 10, 12, 11, 17), trained={"prf": 1, "dec": 1, "ste": 1},
        ac=13, hp=17, hp_formula="5d6", cr=1, walk=30,
        type_value="monstrosity", type_subtype="goomba", alignment="Chaotic Neutral",
        biography=bio([
            "The Goomba who supplied the shape of the heir. His false Bowser Jr. "
            "performance kept Bowser looking at the wrong face while the garrison, the "
            "routes, and the doors changed hands. He came into the throne room still "
            "wearing the aftermath of the act like a costume not yet put away, stopped "
            "laughing when Bowser did not roar, vanished behind a curtain when the fire "
            "started, and the assault record loses him in the smoke after the first "
            "breach.",
            "He is not a fighter. He is a witness who can be caught: at half hit points he "
            "surrenders, and he knows which doors answer to Fawthful, where Mimbus's "
            "passage opens, and what the missing royal seal was supposed to make "
            "legitimate. The present-day article is <code>thejestergoomba</code>.",
        ], "'You used my son's face to get inside my house.'"),
        items=[
            attack(o, "Headbutt", I["fist"], "<p>Melee, 5 feet.</p>",
                   dmg=(1, 4, ["bludgeoning"]), wtype="natural"),
            feat(o, "Someone Else's Face (Action)", I["eye"],
                 "<p>The Jester performs as somebody the audience wants to see. Each "
                 "creature within 30 feet that can see and hear him makes a DC 13 Wisdom "
                 "(Insight) check; on a failure it treats him as that person for one "
                 "minute, or until he does something the real person would not. Bowser "
                 "has already fallen for this once tonight and has advantage on the "
                 "check.</p>"),
            feat(o, "Behind the Curtain (Bonus Action)", I["fog"],
                 "<p>The Jester can take the Hide action as a bonus action, and can hide "
                 "while only lightly obscured — smoke, a banner, a curtain.</p>"),
            feat(o, "Run", I["run"],
                 "<p>He can take the Disengage or Dash action as a bonus action.</p>"),
            feat(o, "Not a Fighter", I["halt"],
                 "<p>At half his hit points or fewer the Jester surrenders, truthfully, "
                 "and at length. What he knows is in the biography.</p>"),
        ]))

    # --- The dragon -----------------------------------------------------------
    o = "the-supplied-dragon"
    out.append(npc(
        slug=o, name="The Supplied Dragon", token="supplied-dragon.png", side="b",
        size="huge", token_size=3, sc=scores(23, 10, 21, 12, 11, 13),
        prof_saves=("dex", "con", "wis"), trained={"prc": 1, "itm": 1}, ac=18, hp=184,
        hp_formula="16d12 + 80", cr=12, walk=40, fly=80, darkvision=120, di=["fire"],
        languages=("common", "draconic"),
        resources={"legact": {"value": 3, "max": 3}, "legres": {"value": 2, "max": 2},
                   "lair": {"value": False, "initiative": None}},
        type_value="dragon", type_subtype="", alignment="Neutral (under contract)",
        biography=bio([
            "The loud part of the operation. Its head cleared the outer wall first, a claw "
            "hooked the battlement and the wall shed blocks into the courtyard; later it "
            "struck the throne-room wall, did not break it — 'OWW! My head!' — and was "
            "asked by Fawthful what kind of incompetent dragon had been supplied. On the "
            "second try the wall burst, and its wings swept two traitors off the "
            "building.",
            "It was sent to kill Bowser, and said so in Draconic. It has a bargain with the "
            "bean and does not like the bean: when a Hammer Bro argued in its own tongue "
            "that he was not the target and might be more useful to Bowser alive, it "
            "considered the request. Then it heard the family history and tried to suck "
            "him into the intake harness Fawthful strapped under its jaw. The harness is "
            "on the sheet; so is the way out of it.",
            "The archive does not name the dragon; the sheet files it by what Fawthful "
            "called it. CR 12 against a level-8 Bowser is the point — it is weather, not a "
            "fair fight, until the castle lands on the king and the Omega stands up.",
        ], "the wall, the forehead, the Draconic conversation, the vacuum, the bored "
           "play with a Goomba."),
        items=[
            attack(o, "Bite", I["bite"],
                   "<p>Melee, reach 10 feet. Plus 1d8 fire damage.</p>",
                   dmg=(2, 10, ["piercing"]), wtype="natural", reach=10),
            attack(o, "Claw", I["claw"],
                   "<p>Melee, reach 5 feet. A creature hit can be grappled instead of "
                   "damaged (escape DC 16) — see Plays With Its Food.</p>",
                   dmg=(2, 6, ["slashing"]), wtype="natural"),
            attack(o, "Tail", I["club"],
                   "<p>Melee, reach 15 feet. A creature hit must succeed on a DC 18 "
                   "Strength saving throw or be knocked prone.</p>",
                   dmg=(2, 8, ["bludgeoning"]), wtype="natural", reach=15),
            feat(o, "Multiattack", I["strike"],
                 "<p>The dragon makes one Bite attack and two Claw attacks.</p>"),
            feat(o, "Fire Breath (Recharge 5–6)", I["fireball"],
                 "<p>60-foot cone. Each creature in the area makes a DC 18 Dexterity "
                 "saving throw, taking 12d6 fire damage on a failure or half as much on a "
                 "success. Bowser is immune to the fire and not to the embarrassment.</p>",
                 uses=("1", "recharge", "5")),
            feat(o, "Wall Breaker (Action)", I["shockwave"],
                 "<p>The dragon drives its head through a wall, floor, or ceiling section "
                 "up to 15 feet across. The section is destroyed. Each creature in it or "
                 "within 5 feet of it makes a DC 16 Dexterity saving throw, taking 4d10 "
                 "bludgeoning damage on a failure or half as much on a success; a creature "
                 "that fails is buried (restrained and prone until it or an ally spends an "
                 "action on a DC 14 Strength (Athletics) check). Then roll a d6: on a 1–2 "
                 "the wall wins — 'OWW! My head!' — and the dragon is stunned until the end "
                 "of its next turn. <strong>A Bowser buried by this is the Omega "
                 "trigger.</strong></p>"),
            feat(o, "Vacuum Intake Harness (Action, Recharge 5–6)", I["wind"],
                 "<p>The Fawthful-made intake under its jaw. A 15-foot cone: each creature "
                 "in it makes a DC 16 Strength saving throw; a Medium or smaller creature "
                 "that fails is pulled 15 feet toward the dragon, and if it ends within 5 "
                 "feet it is swallowed into the harness tank. " + SWALLOWED +
                 " A swallowed creature that strikes the intake from inside for 10 or more "
                 "damage in one turn breaks the harness for the rest of the fight.</p>",
                 uses=("1", "recharge", "5")),
            feat(o, "Supplied, Not Loyal", I["diplomacy"],
                 "<p>The dragon never attacks Fawthful, and it does not have to help him. "
                 "A creature that speaks to it in Draconic can use an action to make a DC "
                 "17 Charisma (Persuasion) check — with advantage if it offers the dragon a "
                 "better use of its time than this contract. On a success the dragon stops "
                 "attacking that creature until that creature attacks it, and asks it a "
                 "question instead. On a failure it has heard enough.</p>"),
            feat(o, "Plays With Its Food", I["paw"],
                 "<p>A creature the dragon is grappling takes 2d6 bludgeoning damage at the "
                 "start of each of the dragon's turns. While it has a grappled creature and "
                 "has not been damaged since its last turn, the dragon takes no other "
                 "action against anyone — it is playing, and the play lasts until it is "
                 "hurt or bored (two rounds).</p>"),
            feat(o, "Legendary Resistance (2/Day)", I["ward"],
                 "<p>If the dragon fails a saving throw, it can choose to succeed "
                 "instead.</p>", uses=("2", "day")),
            feat(o, "Legendary Actions", I["paw"],
                 "<p>The dragon can take 3 legendary actions, choosing from the options "
                 "below, only at the end of another creature's turn, regaining them at the "
                 "start of its turn.</p><ul><li><strong>Look Around.</strong> A Wisdom "
                 "(Perception) check — it is looking for Bowser.</li><li><strong>Tail "
                 "Attack.</strong> One Tail attack.</li><li><strong>Wing Sweep (Costs 2 "
                 "Actions).</strong> Each creature within 15 feet makes a DC 18 Dexterity "
                 "saving throw or takes 2d6 + 6 bludgeoning damage and is knocked prone — "
                 "off the building, if it was on the edge of one. The dragon then flies up "
                 "to half its flying speed.</li></ul>"),
        ]))

    # --- Drone ------------------------------------------------------------------
    o = "fawthful-drone"
    out.append(npc(
        slug=o, name="Fawthful Drone", token="fawthful-drone.png", side="b",
        size="tiny", sc=scores(4, 16, 12, 6, 12, 1), ac=14, hp=14, hp_formula="4d4 + 4",
        cr=1, walk=0, fly=40, hover=True, darkvision=60,
        di=["poison", "psychic"], ci=["charmed", "frightened", "exhaustion", "poisoned"],
        type_value="construct", type_subtype="fawthful make", alignment="Unaligned",
        biography=bio([
            "A small Fawthful drone appeared in the next room while the surviving force "
            "argued over an empty train track. The group had sent someone to tell Bowser "
            "they had survived the dragon; the messenger had not returned, and the drone "
            "had. One Goomba walked toward it, and the fight began there.",
            "A machine that waits for somebody to come close enough to attack. What it "
            "sees, Fawthful sees; what it finds, Fawthful's next patrol finds a few rounds "
            "later. Kill it before it finishes looking.",
        ], "the drone in the next room at Toad Town Station."),
        items=[
            attack(o, "Zapper", I["bolt"],
                   "<p>Ranged, 30/60. Two copper prongs and a spark.</p>",
                   dmg=(1, 8, ["lightning"]), ability="dex", kind="ranged",
                   wtype="natural", rng=(30, 60)),
            feat(o, "Waiting", I["eye"],
                 "<p>A drone that has not moved is a machine in a corner: a DC 15 Wisdom "
                 "(Perception) check to notice. It has advantage on initiative and on its "
                 "first attack roll of the fight.</p>"),
            feat(o, "Watcher", I["eye"],
                 "<p>Fawthful sees what the drone sees. When a drone spots the surviving "
                 "force, or Bowser, the next hostile patrol arrives 1d4 rounds later. "
                 "Destroying it within a round of being spotted sends nothing.</p>"),
            feat(o, "Relay Cackle (1/Day)", I["shout"],
                 "<p>It plays a recording of Fawthful laughing: Mustard Monologue against "
                 "one creature within 30 feet, DC 11.</p>", uses=("1", "day")),
            feat(o, "Self-Detonate", I["firebolt"],
                 "<p>When reduced to 0 hit points the drone bursts: each creature within 5 "
                 "feet makes a DC 12 Dexterity saving throw, taking 2d6 lightning damage "
                 "on a failure or half as much on a success.</p>"),
        ]))

    # --- Traitors ---------------------------------------------------------------
    traitor = dict(type_value="humanoid", type_subtype="koopa", alignment="Neutral Evil")
    o = "red-armband-koopa"
    out.append(npc(
        slug=o, name="Red-Armband Koopa (Traitor)", token=SHARED["koopa"], side="b",
        size="sm", sc=scores(12, 13, 13, 10, 9, 8), ac=14, hp=18, hp_formula="4d6 + 4",
        cr=0.5, walk=25,
        biography=bio([
            "A Koopa with a red armband waved the attackers through the inner gate. Two "
            "more were stopped at the edge of the evacuation route: 'You cannot come.' "
            "'Why?' 'You are traitors. You are lucky I am not killing you where I "
            "stand.' The dragon's wings swept them off the building before the argument "
            "became a sentence.",
            "Bowser's standing order is on the sheet: do not kill them, they have caused "
            "him too much trouble to deal with, this is taking out the trash. A traitor "
            "reduced to 0 hit points by nonlethal damage begs, and knows one door.",
        ], "the red armband at the inner gate; 'You cannot come.'"),
        items=[
            spear(o),
            attack(o, "Shell Bash", I["fist"], "<p>Melee, 5 feet.</p>",
                   dmg=(1, 6, ["bludgeoning"]), wtype="natural"),
            feat(o, "Opened from Inside", I["key"],
                 "<p>As an action (a bonus action within 60 feet of Fawthful) the traitor "
                 "opens or drops any castle door, gate, or portcullis within 5 feet. It was "
                 "told the mechanisms. Allies moving through a door it opened this turn "
                 "gain 10 feet of speed.</p>"),
            feat(o, "Traitor's Nerve", I["fear"],
                 "<p>It has disadvantage on attack rolls while Bowser or Omega Bowser can "
                 "see it. Reduced to 0 hit points by nonlethal damage, it surrenders and "
                 "names one door and who told it to open it.</p>"),
            feat(o, "Shell Retreat (Bonus Action)", I["shield"], SHELL_RETREAT),
        ], **traitor))

    o = "chain-puller-goomba"
    out.append(npc(
        slug=o, name="Chain-Puller Goomba (Traitor)", token=SHARED["goomba"], side="b",
        size="sm", sc=scores(10, 11, 10, 7, 8, 8), ac=10, hp=7, hp_formula="2d6",
        cr=0.125, walk=20,
        type_value="monstrosity", type_subtype="goomba", alignment="Neutral Evil",
        biography=bio([
            "A Goomba pulled the chain on the second portcullis and then stood aside as "
            "if the motion had been an accident. Until it does something hostile it is "
            "indistinguishable from a loyal Goomba, which is the whole problem with a "
            "garrison that has been taught to answer to somebody else.",
        ], "the second portcullis."),
        items=[
            attack(o, "Headbutt", I["fist"], "<p>Melee, 5 feet.</p>",
                   dmg=(1, 4, ["bludgeoning"]), wtype="natural"),
            feat(o, "It Was an Accident", I["eye"],
                 "<p>Until it acts against the garrison, the Goomba counts as a Loyal "
                 "Goomba to everyone watching. A DC 13 Wisdom (Insight) check marks it — "
                 "with advantage if the garrison sheet with the altered routes has been "
                 "read.</p>"),
            feat(o, "Pull the Chain (Action)", I["chains"],
                 "<p>The Goomba drops a portcullis or bars a door within 5 feet. Each "
                 "creature under the portcullis makes a DC 12 Dexterity saving throw or "
                 "takes 2d10 bludgeoning damage and is restrained under it (escape DC 13). "
                 "Then it stands aside.</p>"),
            feat(o, "Soft Cap", I["up"],
                 "<p>A critical hit from a creature above the Goomba destroys it "
                 "outright.</p>"),
        ]))

    o = "hypnotised-koopa-soldier"
    out.append(npc(
        slug=o, name="Hypnotised Soldier (Koopa)", token=SHARED["koopa"], side="b",
        size="sm", sc=scores(12, 12, 13, 9, 6, 9), ac=14, hp=13, hp_formula="3d6 + 3",
        cr=0.5, walk=25, ci=["charmed", "frightened"],
        biography=bio([
            "Not a traitor — a soldier somebody else is driving. The record says the "
            "hypnotised soldiers were defeated by coordination rather than by one heroic "
            "strike: shell barriers made a lane, Goombas pulled at legs and belts, and "
            "the garrison took its own people down without killing them. The sheet makes "
            "that the rule.",
        ], "'The hypnotised soldiers were defeated by coordination rather than by one heroic strike.'"),
        items=[
            spear(o),
            attack(o, "Shell Bash", I["fist"], "<p>Melee, 5 feet.</p>",
                   dmg=(1, 6, ["bludgeoning"]), wtype="natural"),
            feat(o, "Hypnotised", I["chains"],
                 "<p>It cannot be charmed or frightened by anyone but Fawthful, speaks in "
                 "his cadence, and advances without caring. <strong>Coordination breaks "
                 "it:</strong> if two or more loyal creatures grapple it, shove it prone, "
                 "or knock it into its shell in the same round, or if it is reduced to 0 hit "
                 "points by nonlethal damage, the hypnosis ends — it rises to 1 hit point "
                 "if it had fewer, and from its next turn it is a Loyal Koopa Troopa, "
                 "frightened and grateful. Killing it only kills it.</p>"),
            feat(o, "Shell Retreat (Bonus Action)", I["shield"], SHELL_RETREAT),
        ], **KOOPA))

    o = "defected-magikoopa"
    out.append(npc(
        slug=o, name="Defected Magikoopa", token=SHARED["magikoopa"], side="b",
        size="med", sc=scores(9, 14, 12, 17, 13, 12), prof_saves=("int", "wis"),
        trained={"arc": 1, "dec": 1}, ac=12, hp=31, hp_formula="7d6 + 7", cr=3,
        walk=30, fly=40, hover=True,
        biography=bio([
            "The Fawthful record lists Magikoopas in the field beside the defecting Koopa "
            "troops. A defected Magikoopa is a loyal one with the sign reversed: the same "
            "wand, the same teleport, pointed the other way. Its Block Transport can move "
            "Fawthful's soldiers onto a floor Bowser thought was clear — or, worse, move a "
            "willing loyalist to the wrong floor and let the routes stop making sense.",
            "A strip of red cloth on the robe hem is the only tell. DC 10 Wisdom "
            "(Perception) to spot which side the wand is on before it fires.",
        ], "'Magikoopas, and defecting Koopa troops in the field.'"),
        items=[
            attack(o, "Wand Bolt", I["bolt"],
                   "<p>Ranged spell attack, 90 feet.</p>",
                   dmg=(3, 6, ["force"]), ability="int", kind="ranged", cls="spell",
                   wtype="natural", rng=(90, None)),
            feat(o, "Block Transport, Reversed (Action, Recharge 5–6)", I["blink"],
                 "<p>Up to six willing Small or Medium creatures within 30 feet, plus the "
                 "Magikoopa, teleport to a spot it can see or knows within 300 feet. It may "
                 "instead send one willing creature that believes it is loyal to the "
                 "wrong floor — that creature arrives alone, and the GM owes it an "
                 "encounter.</p>", uses=("1", "recharge", "5")),
            feat(o, "Blink (Bonus Action, Recharge 4–6)", I["blink"],
                 "<p>It teleports up to 30 feet to an unoccupied space it can see.</p>",
                 uses=("1", "recharge", "4")),
            feat(o, "Red Trim", I["eye"],
                 "<p>Until it acts, a DC 10 Wisdom (Perception) check is needed to tell it "
                 "from a Loyal Magikoopa.</p>"),
        ], **traitor))

    # --- Fawthful's own ---------------------------------------------------------
    mech = dict(type_value="construct", type_subtype="fawthful make", alignment="Unaligned")
    o = "clockwork-fawful-soldier"
    out.append(npc(
        slug=o, name="Clockwork Fawthful Soldier", token="clockwork-fawful-soldier.png",
        side="b", size="med", sc=scores(15, 10, 14, 3, 8, 1), ac=15, hp=32,
        hp_formula="5d8 + 10", cr=1, walk=25, darkvision=60,
        di=["poison", "psychic"], ci=["charmed", "frightened", "exhaustion", "poisoned"],
        biography=bio([
            "Fawthful's own foot-soldier: brass, pistons, and a painted grin. Fawful's "
            "older occupation was characterised by mechanical efficiency — construct "
            "patrols and automated defences — and the castle assault brought the same "
            "doctrine through the broken gate. They march in step and come apart "
            "loudly.",
            "Design from the Beanbean 3D reference packet "
            "(<code>docs/3d-reference/beanbean-battle</code>): a generic production "
            "design, not a named archive figure.",
        ]),
        items=[
            attack(o, "Piston Fist", I["fist"], "<p>Melee, 5 feet.</p>",
                   dmg=(1, 10, ["bludgeoning"]), wtype="natural"),
            feat(o, "Formation Step (Reaction)", I["run"],
                 "<p>When another Clockwork Soldier within 5 feet moves, this one can use "
                 "its reaction to move 5 feet in the same direction.</p>"),
            feat(o, "Wind-Down", I["bone"],
                 "<p>When reduced to 0 hit points it springs apart: each creature within 5 "
                 "feet makes a DC 12 Dexterity saving throw or takes 1d6 slashing "
                 "damage from flying gears.</p>"),
        ], **mech))

    o = "masked-fawful-scout"
    out.append(npc(
        slug=o, name="Masked Fawthful Scout", token="masked-fawful-scout.png", side="b",
        size="sm", sc=scores(9, 16, 11, 11, 13, 8), trained={"ste": 1, "prc": 1},
        ac=14, hp=18, hp_formula="4d6 + 4", cr=0.5, walk=35, darkvision=60,
        lang_custom="Beanish",
        biography=bio([
            "The ones who measured Bowser's walls while he was looking at a face he "
            "thought he recognised. A masked scout goes where the garrison sheet says a "
            "door will be open, chalks a bean-glyph on it, and the column behind it "
            "moves faster for the rest of the night.",
            "Design from the Beanbean 3D reference packet; a generic production design.",
        ]),
        items=[
            attack(o, "Dart", I["dagger"],
                   "<p>Ranged 20/60. A creature hit must succeed on a DC 11 Constitution "
                   "saving throw or be poisoned until the end of its next turn.</p>",
                   dmg=(1, 4, ["piercing"]), ability="dex", kind="ranged", wtype="simpleR",
                   props=["thr"], rng=(20, 60)),
            attack(o, "Knife", I["dagger"], "<p>Melee, 5 feet.</p>",
                   dmg=(1, 4, ["piercing"]), ability="dex", props=["fin"]),
            feat(o, "Mark the Route (Bonus Action)", I["scroll"],
                 "<p>The scout chalks a glyph on a door within 5 feet. Fawthful's forces "
                 "moving through that doorway gain 10 feet of speed and ignore difficult "
                 "terrain in the next 10 feet for the rest of the scene. A DC 12 "
                 "Intelligence (Investigation) check finds the mark; smudging it takes an "
                 "action.</p>"),
            feat(o, "Cunning Action", I["run"],
                 "<p>It can take the Dash, Disengage, or Hide action as a bonus "
                 "action.</p>"),
        ], **bean))

    o = "corrupted-beanbean-guard"
    out.append(npc(
        slug=o, name="Corrupted Beanbean Guard", token="corrupted-beanbean-guard.png",
        side="b", size="med", sc=scores(16, 11, 16, 8, 9, 7), ac=16, hp=30,
        hp_formula="4d8 + 12", cr=1, walk=30, lang_custom="Beanish",
        biography=bio([
            "Beanbean soldiery with something wrong behind the eyes. Halberd, shield, "
            "and a vigour that is not entirely theirs. They hold the ground the scouts "
            "marked and the clockwork took, and they do not retreat because nobody left "
            "them the option.",
            "Design from the Beanbean 3D reference packet; a generic production design.",
        ]),
        items=[
            attack(o, "Halberd", I["halberd"], "<p>Melee, reach 10 feet. Heavy, two-handed.</p>",
                   dmg=(1, 10, ["slashing"]), wtype="martialM", props=["hvy", "two", "rch"],
                   reach=10),
            feat(o, "Bean Vigor", I["orb"],
                 "<p>At the start of its turn, if it has at least half its hit points and "
                 "took no fire damage since its last turn, it regains 3 hit points.</p>"),
            feat(o, "Hollowed", I["chains"],
                 "<p>It has advantage on saving throws against being frightened, and "
                 "disadvantage on Wisdom (Insight) checks. It cannot be talked out of "
                 "anything.</p>"),
        ], **bean))

    o = "cackletta-imp"
    out.append(npc(
        slug=o, name="Cackletta Imp", token="cackletta-imp.png", side="b",
        size="tiny", sc=scores(5, 16, 10, 8, 10, 12), ac=13, hp=10, hp_formula="4d4",
        cr=0.25, walk=20, fly=30, darkvision=60,
        type_value="monstrosity", type_subtype="bean-spawn", alignment="Chaotic Evil",
        biography=bio([
            "Small, giggling, and hers. They come out of the green light when Cackletta "
            "works the inner walls, and they go back to her when she needs them. Three "
            "of them in a corridor are a problem; one of them is a noise.",
            "Design from the Beanbean 3D reference packet; a generic production design.",
        ]),
        items=[
            attack(o, "Green Spark", I["orb"],
                   "<p>Ranged spell attack, 60 feet.</p>",
                   dmg=(1, 6, ["fire"]), ability="cha", kind="ranged", cls="spell",
                   wtype="natural", rng=(60, None)),
            feat(o, "Giggle in Numbers", I["fear"],
                 "<p>While three or more imps are within 10 feet of a creature, that "
                 "creature must succeed on a DC 10 Wisdom saving throw at the start of its "
                 "turn or be frightened of them until the end of its turn.</p>"),
            feat(o, "Her Little Hands (Action)", I["skull"],
                 "<p>The imp flies into Cackletta if she is within 30 feet: she regains 5 "
                 "hit points and the imp is destroyed.</p>"),
        ]))

    # --- The hag ---------------------------------------------------------------
    o = "the-switch-hag"
    out.append(npc(
        slug=o, name="The Switch Hag", token="switch-hag.png", side="b", disposition=0,
        size="med", sc=scores(9, 12, 14, 15, 13, 11), trained={"arc": 1, "slt": 1, "dec": 1},
        ac=12, hp=33, hp_formula="6d8 + 6", cr=2, walk=25, darkvision=60,
        type_value="fey", type_subtype="hag (not filed further)", alignment="Neutral",
        biography=bio([
            "Bowser ran into a hag at exactly the wrong moment. She had made a "
            "self-destruct switch and was pleased to present it. 'Who hired you?' 'A green "
            "bean.' Told the castle was under siege and her duties relinquished, and asked "
            "what the switch controlled: 'I could have sworn it was the door.' Bowser "
            "pushed past her.",
            "She attacks nobody. She is a contractor whose work is still in the building, "
            "and the sheet's only real feature is the switch: nobody — including her — can "
            "say whether it destroys the castle, opens a door, or adds another joke to a "
            "room already full of them. The lower command room already has a plate "
            "labelled SELF-DESTRUCT, DO NOT USE FOR LIGHTING and THIS ONE MAY BE THE "
            "LIGHTING over two identical red toggles (the archive's "
            "<code>prop_castle_self_destruct_switch_label</code>); Bowser closed that "
            "cover without touching either. Whether her box and that plate are the same "
            "mechanism is the GM's call. Roll the die when somebody throws anything. "
            "Neutral disposition; filed under Side B because the bean paid.",
            "The archive does not name her; the sheet files her by the switch, as it files "
            "the Jester by the act.",
        ], "'I could have sworn it was the door.'"),
        items=[
            attack(o, "Wrench", I["club"], "<p>Melee, 5 feet. Only if somebody starts it.</p>",
                   dmg=(1, 6, ["bludgeoning"]), wtype="simpleM"),
            feat(o, "The Switch", I["bell"],
                 "<p>The self-destruct switch she built: a wooden box with a big red lever, "
                 "wired into the castle somewhere — or either of the two identical red "
                 "toggles under the labelled plate in the lower command room, if the GM "
                 "rules they are the same work. When anyone throws it, roll a d6:</p><ol>"
                 "<li><strong>1–2:</strong> a door "
                 "or portcullis somewhere in the castle opens or drops — the GM picks the "
                 "least convenient one.</li><li><strong>3:</strong> a bell rings once, "
                 "somewhere below, and stops.</li><li><strong>4:</strong> nothing. This "
                 "time.</li><li><strong>5:</strong> the lower gate collapses: each creature "
                 "in the gate passage makes a DC 15 Dexterity saving throw, taking 4d10 "
                 "bludgeoning damage on a failure or half on a success, and the gate is "
                 "sealed.</li><li><strong>6:</strong> the countdown. At the end of the third "
                 "round after the pull, the floor everyone is standing on gives way: each "
                 "creature on it makes a DC 15 Dexterity saving throw, taking 6d10 "
                 "bludgeoning damage on a failure or half on a success, falls prone to the "
                 "floor below, and on a failure is buried (restrained). <strong>A buried "
                 "Bowser is the Omega trigger.</strong></li></ol><p>She genuinely does not "
                 "know which it will be. The lever can be thrown more than once.</p>"),
            feat(o, "Hex of Misplaced Confidence", I["eye"],
                 "<p>Ranged spell, 60 feet: one creature makes a DC 12 Wisdom saving throw "
                 "or takes 2d6 psychic damage and has disadvantage on its next Intelligence "
                 "(Investigation) check. She uses it on people who call her work "
                 "shoddy.</p>"),
            feat(o, "Who Hired You", I["diplomacy"],
                 "<p>Asked directly, she answers truthfully. Offered coin, she answers at "
                 "length: a green bean, by letter, paid in advance, with a drawing of "
                 "where the wires should go that she did not entirely follow.</p>"),
            feat(o, "Hired Help", I["halt"],
                 "<p>She never attacks unless attacked, and she leaves when told her duties "
                 "are relinquished — which Bowser has already done. If she is still in the "
                 "castle, it is because she wants to see whether it worked.</p>"),
        ]))
    return out


# --------------------------------------------------------- the track

def build_track():
    out = []
    o = "koopa-killer-killa"
    out.append(npc(
        slug=o, name="Koopa Killer Killa", token="koopa-killer-killa.png", side="track",
        disposition=0, size="med", sc=scores(18, 10, 16, 8, 9, 13), prof_saves=("str",),
        trained={"ath": 1, "itm": 1}, ac=17, hp=60, hp_formula="8d8 + 24", cr=4, walk=25,
        type_value="humanoid", type_subtype="koopa", alignment="Chaotic Neutral",
        biography=bio([
            "'Then the other boss arrived.' Nine Goombas and two Koopas were planning a "
            "retreat over an empty train track without their king when Koopa Killer "
            "Killa walked in and said that Killa was the boss. A Goomba objected that "
            "Killa was not Bowser. Nobody had appointed Killa. The empty space left by a "
            "retreating king was apparently enough to encourage the claim.",
            "Not a traitor, not a loyalist — a vacancy with a club. He is the sideplot's "
            "complication: the remnant follows whoever spoke last, and he intends to be "
            "last. The name is as the record gives it; the archive has not asked which "
            "Koopas he has killed, or whether the title is aspirational.",
        ], "Killa answered that Killa was the boss — Toad Town Station, the empty track."),
        items=[
            attack(o, "Spiked Iron Club", I["maul"],
                   "<p>Melee, 5 feet. Heavy, two-handed.</p>",
                   dmg=(2, 6, ["bludgeoning"]), wtype="martialM", props=["hvy", "two"]),
            feat(o, "Multiattack", I["strike"], "<p>Killa makes two Spiked Iron Club attacks.</p>"),
            feat(o, "Killa Charge", I["run"],
                 "<p>If Killa moves at least 15 feet straight toward a target and hits it "
                 "with the club in the same turn, the target takes an extra 2d6 "
                 "bludgeoning damage and must succeed on a DC 14 Strength saving throw or "
                 "be knocked prone.</p>"),
            feat(o, "I Am the Boss", I["intimidate"],
                 "<p>Goombas and Koopas within 30 feet who can hear him and have no king "
                 "in sight treat him as the boss: they have a +1 bonus to attack rolls "
                 "while he is conscious and standing. The moment Bowser — or anyone they "
                 "trust more — is visible, the bonus ends, and so, usually, does the "
                 "arrangement.</p>"),
            feat(o, "Nobody Appointed Me", I["diplomacy"],
                 "<p>He has disadvantage on Charisma (Persuasion) checks against any "
                 "creature that has met Bowser in person.</p>"),
            feat(o, "Spiked Carapace", I["shield"],
                 "<p>A creature that grapples Killa or hits him with an unarmed strike "
                 "takes 1d6 piercing damage.</p>"),
        ]))

    o = "goomba-who-took-his-chances"
    out.append(npc(
        slug=o, name="The Goomba Who Took His Chances", token="goomba-took-his-chances.png",
        side="track", disposition=1, size="sm", sc=scores(10, 12, 11, 9, 12, 10),
        trained={"prc": 1, "sur": 1}, ac=11, hp=9, hp_formula="2d6 + 2", cr=0.125, walk=25,
        type_value="monstrosity", type_subtype="goomba", alignment="Neutral",
        biography=bio([
            "The Goomba who watched the dragon talk to the Hammer Bro, ran, reached the "
            "route toward Toad Town Station, argued for Toad Town, then Shy Guy Falls, "
            "then Toad Town again, asked what would happen if Mario came and stepped on "
            "them, and — when the Hammer Bro behind the door said no one left behind — "
            "said he would take his chances. He walked toward the Fawthful drone. The "
            "fight began there.",
            "<strong>The sideplot.</strong> The GM has said this Goomba's story continues "
            "later, on the train. This sheet gets him to the platform alive: one chance "
            "per day to not die, a nose for ambushes he walks into on purpose, and the "
            "way to Cheeseland. What he becomes after that is not written yet, and the "
            "archive files him by what he did, not by a name nobody said.",
        ], "the Goomba said he would take his chances — the empty track."),
        items=[
            attack(o, "Headbutt", I["fist"], "<p>Melee, 5 feet.</p>",
                   dmg=(1, 4, ["bludgeoning"]), wtype="natural"),
            feat(o, "Takes His Chances (1/Day)", I["up"],
                 "<p>When he would drop to 0 hit points, he drops to 1 instead and "
                 "immediately moves 20 feet in a direction nobody expected, without "
                 "provoking opportunity attacks.</p>", uses=("1", "day")),
            feat(o, "Walks Toward the Drone", I["eye"],
                 "<p>He acts in the surprise round of any ambush he walks into on purpose, "
                 "and he has advantage on Wisdom (Perception) checks to notice something "
                 "coming from above — he has thought about Mario stepping on him.</p>"),
            feat(o, "Cheese Route", I["scroll"],
                 "<p>He knows the way from Toad Town Station to Cheeseland, to Shy Guy "
                 "Falls, and back to Toad Town, and which of the nine likes cheese. A "
                 "Wisdom (Survival) check to follow an old track is made with "
                 "advantage.</p>"),
        ]))
    return out


# ------------------------------------------------------------ validation

def validate(slug, actor, lib):
    problems = []
    if actor["type"] != "npc":
        problems.append("type must be npc")
    if not FOUNDRY_ID.match(actor.get("_id") or ""):
        problems.append("actor _id must be 16 alphanumerics")
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
        if p.startswith("portraits/"):
            if not os.path.exists(os.path.join(RM, *p.split("/"))):
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
    bio_html = actor["system"]["details"]["biography"]["value"]
    if "1035 BF" not in bio_html:
        problems.append("biography must anchor the era (1035 BF)")
    if actor["flags"][MODULE_ID]["folderPath"][0] != FOLDER_ROOT:
        problems.append("folderPath must sit under the era folder")
    return [f"{slug}: {p}" for p in problems]


def build_all():
    actors = build_side_a() + build_side_b() + build_track()
    slugs = [s for s, _ in actors]
    if len(slugs) != len(set(slugs)):
        raise SystemExit("duplicate actor slug")
    ids = [d["_id"] for _, d in actors]
    if len(ids) != len(set(ids)):
        raise SystemExit("actor _id collision")
    names = [d["name"] for _, d in actors]
    if len(names) != len(set(names)):
        raise SystemExit("duplicate actor name")
    return actors


def render(doc):
    return json.dumps(doc, indent=2, ensure_ascii=False) + "\n"


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--check", action="store_true",
                    help="verify the files on disk match the generator")
    args = ap.parse_args()

    lib = P955.load_image_lib()
    actors = build_all()
    problems = []
    for slug, doc in actors:
        problems += validate(slug, doc, lib)
    if problems:
        for p in problems:
            print("  " + p, file=sys.stderr)
        return 1

    expected = {f"{FILE_PREFIX}{slug}.json": render(doc) for slug, doc in actors}
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
        stray = []
        if os.path.isdir(ACTORS):
            stray = sorted(f for f in os.listdir(ACTORS)
                           if f.startswith("fvtt-Actor-") and f not in expected)
        bad += [f"unexpected {f}" for f in stray]
        if bad:
            for b in bad:
                print("  " + b, file=sys.stderr)
            print(f"FAIL {PACKET} actors: {len(bad)} problem(s); "
                  "run tools/build-bowsers-castle-1035-actors.py", file=sys.stderr)
            return 1
        print(f"OK {PACKET} actors: {len(expected)} files current")
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
    print(f"Done. {len(expected)} actors in Reputation-Matrix2/actors/{PACKET}/")
    return 0


if __name__ == "__main__":
    sys.exit(main())
