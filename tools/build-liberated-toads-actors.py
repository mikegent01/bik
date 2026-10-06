#!/usr/bin/env python3
"""Build the Liberated Toads cohort statblocks (Foundry VTT, dnd5e 5.3.3 / core 14).

The Pond Patrol docket (data/liberatedToadsSystem.json, the #/pond-docket
page) lists every cohort of the Liberated Toads toad by toad — name, role,
level 1–5, a note where the docket has one — and the class definitions the
faction trains by (militia, artisan, commoner, …: skills with a level and a
one-line rule). The 75 Toadslist toads already have sheets (the cast packet,
from their articles). This generator makes sheets for the rest of the docket:

  the six working cohorts, toad by toad     Pond Patrol, The Chroniclers, The
                                            Crafters, The Wardens, The Menders,
                                            The Scouts — every roster row that
                                            has no article of its own (the
                                            named ones — Pondscum, Inkspot,
                                            Spearwort … — keep their cast
                                            sheets and are skipped here)
  Barrel Survivors / The Unassigned         generic statblocks (a few each)
                                            for the 146 + 31 toads whose rows
                                            are a role and a level

Design rules (the 955 / 1035 era generators' — the item factories, ability
blocks and id scheme are theirs, so the packets cannot drift apart):
  * type "npc", Small humanoid (toad), one file each, prototype token
    unlinked, no species/class/background items. The class definition's
    skills become feat items ("Basic Training", "Jury-Rig"), the cohort's
    equipment becomes weapon items, the docket's role becomes a feat named
    for the post with the docket note on it.
  * Level on the docket → CR: a fighting cohort (Pond Patrol, Wardens) runs
    1/4, 1/2, 1, 2 for levels 2–5; a working cohort (Chroniclers, Crafters,
    Menders, Scouts) 1/8, 1/4, 1/2, 1; a generic survivor 0 – 1/8. Hit points
    come from the class's hit die, level times.
  * Deterministic: ids are sha256 of (owner, kind, name); running the script
    twice yields byte-identical files, so --check can diff against disk.
  * Portrait + token are the docket's own role plates
    (assets/images/toads/roster/field_*.png — the generic "patrol spear",
    "medic satchel", "librarian books" figures), keyed off their white field
    by `plates` into Reputation-Matrix2/portraits/liberated-toads/<key>.png
    (Foundry path portraits/liberated-toads/<key>.png); a role picks its
    plate by keyword. Item icons are Foundry core icons verified against the
    DM's image library (`image paths.txt`).
  * Every actor carries a deterministic `_id` and a
    `flags.waluipedia-mass-import.folderPath` of ["Liberated Toads",
    "<cohort>"], so the Mass Import module files the packet as sub-folders of
    the faction folder (actors/folders.json `packets.liberated-toads` names
    the sub-folders and their colours — --check holds the two to the docket's
    cohort colours), and tools/organize-actors.py files a copy the GM exports
    back into the same sub-folder.
  * Nothing here is a filed event or an article; the docket is the record and
    the sheet quotes it.

Usage:
    python3 tools/build-liberated-toads-actors.py            # write the actors
    python3 tools/build-liberated-toads-actors.py --check    # verify on disk (check-all)
    python3 tools/build-liberated-toads-actors.py plates     # (re)cut the 19 role plates (needs Pillow + numpy)
    python3 tools/foundry-bridge.py combine Reputation-Matrix2/actors/liberated-toads \\
        --out Reputation-Matrix2/actors/liberated-toads/import.json --world liberated-toads
"""
from __future__ import annotations

import argparse
import importlib.util
import json
import os
import re
import sys

if hasattr(sys.stdout, "reconfigure"):          # Windows consoles default to cp1252
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RM = os.path.join(ROOT, "Reputation-Matrix2")
PACKET = "liberated-toads"
ACTORS = os.path.join(RM, "actors", PACKET)
PORTRAITS = os.path.join(RM, "portraits", PACKET)
TOKEN_PREFIX = f"portraits/{PACKET}/"
PLATE_SRC = os.path.join(RM, "assets", "images", "toads", "roster")
FILE_PREFIX = "fvtt-Actor-lt-"
SYSTEM = os.path.join(RM, "data", "liberatedToadsSystem.json")
CHARACTERS = os.path.join(RM, "data", "characters.json")
MODULE_ID = "waluipedia-mass-import"
SHEETS_FLAG = "waluipedia-sheets"
GROUP = "Liberated Toads"
FOUNDRY_ID = re.compile(r"^[A-Za-z0-9]{16}$")


def _load_module(name, rel):
    spec = importlib.util.spec_from_file_location(name, os.path.join(ROOT, rel))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


P955 = _load_module("p955", "tools/build-peachs-castle-955-actors.py")
sid, feat, attack, scores, abilities, skills, blank_roll = (
    P955.sid, P955.feat, P955.attack, P955.scores, P955.abilities, P955.skills, P955.blank_roll)
I = dict(P955.I)
I.update({
    "shortbow": "icons/weapons/bows/shortbow-leather.webp",
    "sling": "icons/weapons/slings/sling-leather.webp",
    "slingshot": "icons/weapons/slings/slingshot-wood.webp",
    "quill": "icons/tools/scribal/ink-quill-red.webp",
    "book": "icons/sundries/books/book-backed-blue-gold.webp",
    "study": "icons/skills/trades/academics-investigation-study-blue.webp",
    "merchant": "icons/skills/trades/academics-merchant-scribe.webp",
    "wrench": "icons/tools/hand/wrench-adjustable.webp",
    "lighthammer": "icons/weapons/hammers/hammer-simple-iron.webp",
    "anvil": "icons/tools/smithing/anvil.webp",
    "bandage": "icons/tools/medical/bandage-rough.webp",
    "heal": "icons/magic/life/cross-area-circle-green-white.webp",
    "potion": "icons/consumables/potions/potion-bottle-corked-labeled-green.webp",
    "herb": "icons/consumables/plants/basil-herb-green.webp",
    "shackles": "icons/sundries/survival/cuffs-shackles-steel.webp",
    "spyglass": "icons/tools/navigation/spyglass-telescope-brass.webp",
    "map": "icons/tools/navigation/map-marked-blue.webp",
    "stealth": "icons/magic/perception/silhouette-stealth-shadow.webp",
    "eyegreen": "icons/magic/perception/eye-ringed-green.webp",
    "letter": "icons/sundries/documents/document-letter-brown.webp",
    "ladle": "icons/tools/cooking/soup-ladle.webp",
    "stew": "icons/consumables/food/bowl-stew-brown.webp",
    "lute": "icons/tools/instruments/lute-gold-brown.webp",
    "rope": "icons/sundries/survival/rope-coil-brown.webp",
    "handshake": "icons/skills/social/diplomacy-handshake-blue.webp",
    "peace": "icons/skills/social/peace-luck-insult.webp",
    "winged": "icons/skills/movement/feet-winged-boots-brown.webp",
    "shieldbash": "icons/skills/melee/shield-block-bash-blue.webp",
    "staffwood": "icons/weapons/staves/staff-simple-brown.webp",
    "shortsword2": "icons/weapons/swords/shortsword-broad.webp",
    "spear2": "icons/weapons/polearms/spear-simple-barbed.webp",
    "archery": "icons/skills/ranged/archery-bow-attack-yellow.webp",
    "star": "icons/magic/light/explosion-star-glow-orange.webp",
    "hourglass": "icons/sundries/misc/hourglass-wood.webp",
    "lanternlit": "icons/sundries/lights/lantern-iron-lit-yellow.webp",
    "banner": "icons/sundries/flags/banner-flag-blue.webp",
    "jerkin": "icons/equipment/chest/breastplate-leather-brown-belted.webp",
    "scale": "icons/equipment/chest/breastplate-banded-leather-brown.webp",
    "brain": "icons/skills/wounds/anatomy-organ-brain-pink-red.webp",
    "heart": "icons/skills/wounds/anatomy-organ-heart-red.webp",
    "bones": "icons/skills/wounds/anatomy-bone-joint.webp",
})

# ------------------------------------------------------------------ the data

def read_json(path):
    with open(path, encoding="utf-8") as fh:
        return json.load(fh)


SYS = read_json(SYSTEM)
COHORTS_BY_ID = {c["id"]: c for c in SYS["cohorts"]}
CLASSES = SYS["classDefinitions"]
AS_OF = ((SYS.get("meta") or {}).get("asOf") or {}).get("label") or "1040 BF"

RANK = re.compile(r"^(sergeant|corporal|scribe|forgemaster|warden|healer|captain|elder)\s+", re.I)


def article_names():
    """Lower-case names of every character article — a docket row with one
    keeps its cast sheet and is skipped here."""
    try:
        chars = read_json(CHARACTERS)
    except (OSError, ValueError):
        return set()
    out = set()
    for c in chars:
        n = str(c.get("name") or "").strip().lower()
        if n:
            out.add(n)
    return out


def has_article(name, names):
    n = name.strip().lower().replace(" (reassigned)", "")
    return n in names or RANK.sub("", n) in names


def slugify(text):
    s = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return s or "toad"


# ------------------------------------------------------------ the archetypes

# Which cohorts fight for a living (the CR ladder), their class definition,
# ability line (str, dex, con, int, wis, cha), armour, trained skills, the
# default plate and the plate a role keyword picks instead.
#
# plates: assets/images/toads/roster/field_<key>.png (19 role figures)
WORKING = {
    "pond_patrol": dict(
        cls="militia", fighting=True, align="Lawful Good",
        sc=(12, 12, 13, 10, 12, 11), bump=("con", "str"),
        armor=("Patrol Jerkin and Shield", "leather armour and a patrol shield", 11, 2),
        trained={"prc": 1, "itm": 1}, plate="patrol_spear",
        plates=[("watch", "guard_pike"), ("perimeter", "guard_pike"), ("corridor", "guard_pike"), ("door", "guard_pike"),
                ("armory", "guard_pike"), ("escort", "knight_sword"), ("arrest", "knight_sword"), ("crowd", "knight_sword"),
                ("brig", "knight_sword"), ("runner", "messenger_letter"), ("radio", "messenger_letter"), ("clerk", "messenger_letter"),
                ("clipboard", "messenger_letter"), ("aide", "messenger_letter"), ("quiet room", "medic_satchel"), ("pilot", "scout_spyglass"),
                ("rookie", "young_slingshot")],
    ),
    "wardens": dict(
        cls="fighter", fighting=True, align="Lawful Good",
        sc=(14, 12, 14, 9, 11, 10), bump=("str", "con"),
        armor=("Warden's Scale and Shield", "a scale jerkin and a shield", 13, 2),
        trained={"ath": 1, "prc": 1}, plate="knight_sword",
        plates=[("shield", "guard_pike"), ("spear", "guard_pike"), ("wall", "guard_pike"), ("gate", "guard_pike"), ("armory", "guard_pike"),
                ("rear guard", "archer_bow"), ("drill", "patrol_spear"), ("instructor", "patrol_spear"), ("coach", "patrol_spear"),
                ("fitness", "patrol_spear"), ("dummy", "patrol_spear"), ("coordinator", "patrol_spear")],
    ),
    "chroniclers": dict(
        cls="commoner", fighting=False, align="Neutral Good",
        sc=(8, 11, 10, 14, 13, 11), bump=("int", "wis"),
        armor=("Ink-stained Robes", "robes", 10, 0),
        trained={"his": 1, "inv": 1, "ins": 1}, plate="librarian_books",
        plates=[("signal", "messenger_letter"), ("map", "scout_spyglass"), ("census", "messenger_letter"), ("ledger", "messenger_letter"),
                ("affidavit", "messenger_letter"), ("seal", "messenger_letter"), ("minutes", "librarian_books")],
    ),
    "crafters": dict(
        cls="artisan", fighting=False, align="Neutral Good",
        sc=(12, 12, 12, 13, 11, 9), bump=("int", "dex"),
        armor=("Leather Apron", "a thick leather apron", 11, 0),
        trained={"inv": 1, "ath": 1}, plate="engineer_wrench",
        plates=[("smith", "blacksmith_tongs"), ("armor", "blacksmith_tongs"), ("weld", "mason_trowel"), ("brace", "mason_trowel"),
                ("structural", "mason_trowel"), ("powder", "alchemist_potions"), ("propellant", "alchemist_potions"),
                ("salvage", "miner_pickaxe"), ("quartermaster", "brewer_barrel"), ("tool crib", "brewer_barrel"), ("kit issue", "brewer_barrel"),
                ("rope", "fisher_rod"), ("sail", "fisher_rod")],
    ),
    "menders": dict(
        cls="commoner", fighting=False, align="Neutral Good",
        sc=(9, 12, 12, 12, 15, 12), bump=("wis", "con"),
        armor=("Ward Smock", "a ward smock", 10, 0),
        trained={"med": 2, "ins": 1}, plate="medic_satchel",
        plates=[("herb", "alchemist_potions"), ("salve", "alchemist_potions"), ("burn", "alchemist_potions"), ("fever", "alchemist_potions"),
                ("paperwork", "messenger_letter"), ("morale", "bard_lute"), ("counsel", "bard_lute")],
    ),
    "scouts": dict(
        cls="spy", fighting=False, align="Chaotic Good",
        sc=(10, 15, 12, 12, 14, 11), bump=("dex", "wis"),
        armor=("Scout Leathers", "scout leathers", 11, 0),
        trained={"ste": 1, "prc": 1, "sur": 1}, plate="scout_spyglass",
        plates=[("signal", "messenger_letter"), ("intercept", "messenger_letter"), ("pattern", "librarian_books"), ("intelligence", "librarian_books")],
    ),
}

# Level on the docket → CR. A fighting cohort's toad hits like a guard /
# veteran of that level; a working cohort's like a commoner who trained.
CR_FIGHTING = {1: 0.125, 2: 0.25, 3: 0.5, 4: 1, 5: 2}
CR_WORKING = {1: 0, 2: 0.125, 3: 0.25, 4: 0.5, 5: 1}
HD_AVG = {6: 3.5, 8: 4.5, 10: 5.5}
ABILITY_KEYS = ("str", "dex", "con", "int", "wis", "cha")

# A role's perk: the first keyword that matches the docket's role text gives
# the post a one-line rule on the role feat (the docket note is the flavour).
ROLE_PERKS = [
    # the specific posts first: the first key found in the role text wins
    ("fever", "potion", "{name} watches fevers: {name} notices a disease, poison or infection in a creature {name} examines on a DC 10 Wisdom (Medicine) check, and advantage on checks to treat it."),
    ("burn", "potion", "{name} runs the burn ward: a creature {name} treats within a minute of taking fire or acid damage regains 1d4 hit points, once per long rest per creature."),
    ("dummy", "shieldbash", "{name} is ironically never the target: when a creature {name} can see attacks an ally within 5 feet, {name} can use a reaction to take the hit instead."),
    ("door team", "key", "{name} takes the door: {name} has advantage on Strength checks to force a door or hatch, and allies behind {name} have three-quarters cover from attacks through it."),
    ("quartermaster", "merchant", "{name} signs it out: once per long rest {name} can produce one piece of mundane gear worth 5 gp or less that the ship would plausibly carry."),
    ("stacks", "study", "{name} finds names in dust: advantage on Intelligence (History) and Intelligence (Investigation) checks made in the Chroniclers' stacks, and {name} recalls any filed docket entry without a check."),
    ("cross-reference", "book", "Everything links to everything: {name} can find any record in the Chroniclers' archive in 1 minute, and grants advantage on the next Intelligence check of a creature {name} hands it to."),
    ("officer", "halt", "{name} walks the beat: as a bonus action {name} gives a lawful order — one creature that can hear {name} must succeed on a DC 11 Wisdom save or spend its next movement standing still or coming toward {name}."),
    ("watch", "lanternlit", "On post, {name} has advantage on Wisdom (Perception) checks to notice a creature approaching the ward, and cannot be surprised while awake."),
    ("perimeter", "lanternlit", "On post, {name} has advantage on Wisdom (Perception) checks to notice a creature approaching the ward, and cannot be surprised while awake."),
    ("sentry", "halt", "{name} says halt first: a creature {name} challenges must succeed on a DC 11 Wisdom save or lose its reaction until the start of its next turn."),
    ("door", "key", "{name} holds a door: a creature trying to pass {name} in a doorway or corridor treats the square as difficult terrain and provokes an opportunity attack even if it Disengages."),
    ("corridor", "key", "{name} holds a door: a creature trying to pass {name} in a doorway or corridor treats the square as difficult terrain and provokes an opportunity attack even if it Disengages."),
    ("escort", "shield", "When a creature {name} can see attacks the person {name} is escorting while they are within 5 feet, {name} can use a reaction to impose disadvantage on the attack roll."),
    ("close escort", "shield", "When a creature {name} can see attacks the person {name} is escorting while they are within 5 feet, {name} can use a reaction to impose disadvantage on the attack roll."),
    ("arrest", "shackles", "{name} has advantage on Strength (Athletics) checks made to grapple, and a creature {name} grapples has disadvantage on checks to escape while another Pond Patrol toad is adjacent."),
    ("brig", "shackles", "{name} knows every lock on the brig deck: advantage on checks to open, close or inspect restraints and cell doors."),
    ("evidence", "sealed", "{name} keeps the chain of custody: an object {name} has sealed cannot be swapped or tampered with without {name} noticing on a DC 12 Wisdom (Perception) check."),
    ("crowd", "shout", "Once per short rest, as an action, {name} orders a crowd apart: each creature of {name}'s choice within 15 feet that can hear must succeed on a DC 12 Wisdom save or move 5 feet away from {name} on its next turn."),
    ("runner", "run", "{name} carries the word: speed 30 ft. while carrying a message or a docket, and Dash costs no reaction to opportunity attacks from creatures {name} has already passed this turn."),
    ("pilot", "run", "{name} carries the word: speed 30 ft. while carrying a message or a docket, and Dash costs no reaction to opportunity attacks from creatures {name} has already passed this turn."),
    ("radio", "bell", "{name} runs the desk: once per turn {name} can pass a sentence to any Liberated Toad within 300 feet who carries a set, no action required."),
    ("signal", "bell", "{name} reads the air: advantage on Intelligence (Investigation) checks to decode a cipher or place a transmission, and {name} can relay a sentence to any Liberated Toad within 300 feet who carries a set, no action required."),
    ("intercept", "bell", "{name} reads the air: advantage on Intelligence (Investigation) checks to decode a cipher or place a transmission, and {name} can relay a sentence to any Liberated Toad within 300 feet who carries a set, no action required."),
    ("clerk", "merchant", "{name} knows the docket by heart: advantage on Intelligence (Investigation) checks involving the Liberated Toads' own records, warrants and rosters."),
    ("warrant", "sealed", "{name} knows the docket by heart: advantage on Intelligence (Investigation) checks involving the Liberated Toads' own records, warrants and rosters."),
    ("docket", "merchant", "{name} knows the docket by heart: advantage on Intelligence (Investigation) checks involving the Liberated Toads' own records, warrants and rosters."),
    ("clipboard", "merchant", "{name} knows the docket by heart: advantage on Intelligence (Investigation) checks involving the Liberated Toads' own records, warrants and rosters."),
    ("aide", "handshake", "{name} can take the Help action as a bonus action when helping the toad {name} is assigned to."),
    ("armory", "key", "{name} holds the armory key: {name} can hand any adjacent Liberated Toad a simple weapon or a shield as a bonus action while on the ship."),
    ("quiet room", "heal", "{name} keeps the quiet room: a creature that spends a short rest with {name} can end one level of exhaustion or the frightened condition instead of spending a Hit Die."),
    ("rookie", "star", "{name} is still learning: +1 to attack rolls while adjacent to a Pond Patrol toad of higher level."),
    ("archiv", "study", "{name} finds names in dust: advantage on Intelligence (History) and Intelligence (Investigation) checks made in the Chroniclers' stacks, and {name} recalls any filed docket entry without a check."),
    ("minutes", "quill", "If {name} wrote it down, it happened: {name} can reproduce any conversation {name} witnessed in the last day word for word, and a creature contradicting the minutes has disadvantage on Charisma (Deception) checks against anyone holding them."),
    ("census", "merchant", "{name} counts toads so the Empire cannot: {name} knows the name, cohort and bunk of every Liberated Toad on the roster, and notices a stranger in a Liberated Toads crowd on a DC 10 Wisdom (Insight) check."),
    ("ledger", "merchant", "{name} counts toads so the Empire cannot: {name} knows the name, cohort and bunk of every Liberated Toad on the roster, and notices a stranger in a Liberated Toads crowd on a DC 10 Wisdom (Insight) check."),
    ("analyst", "brain", "{name} reads patterns: once per long rest {name} can ask the GM one yes/no question about a report, map or set of intercepts {name} has studied for an hour, and get a truthful answer."),
    ("index", "book", "Everything links to everything: {name} can find any record in the Chroniclers' archive in 1 minute, and grants advantage on the next Intelligence check of a creature {name} hands it to."),
    ("map", "map", "{name} corrects maps for fun: {name} and allies travelling with {name} cannot become lost by non-magical means, and {name} has advantage on Wisdom (Survival) checks to navigate."),
    ("affidavit", "sealed", "Stamps harder than most hammers: a document {name} seals is recognised by every Liberated Toads cohort, and forging {name}'s seal takes a DC 18 Dexterity (Forgery Kit) check."),
    ("engineer", "wrench", "{name} keeps the Vigilance flying: as an action {name} can make a DC 15 Intelligence check to restore 1d6 hit points to an object or vehicle, or to re-light one disabled system for 1 minute."),
    ("wiring", "bolt", "{name} makes the lights stay on: as an action {name} can make a DC 15 Intelligence check to restore 1d6 hit points to an object or vehicle, or to re-light one disabled system for 1 minute."),
    ("board", "bolt", "{name} solders calm into chaos: as an action {name} can make a DC 15 Intelligence check to restore 1d6 hit points to an object or vehicle, or to re-light one disabled system for 1 minute."),
    ("gadget", "wrench", "{name} tinkers: once per long rest {name} can rig a one-use device out of scrap in 10 minutes (a flare, a trip-alarm, a smoke pot) — the GM adjudicates the effect at the level of a 1st-level spell."),
    ("smith", "anvil", "{name} works iron: a simple weapon or shield {name} has had an hour with counts as well-maintained (no disadvantage from damage or rust) for a tenday."),
    ("armor", "anvil", "{name} fits armour: a creature {name} spends an hour fitting gains +1 AC from that armour until it is next damaged in a fight."),
    ("weld", "lighthammer", "{name} keeps the ship from arguing with gravity: as an action {name} can brace or seal a breach, door or hatch — it holds against a DC 15 Strength check for 1 minute."),
    ("brace", "lighthammer", "{name} keeps the ship from arguing with gravity: as an action {name} can brace or seal a breach, door or hatch — it holds against a DC 15 Strength check for 1 minute."),
    ("structural", "lighthammer", "{name} keeps the ship from arguing with gravity: as an action {name} can brace or seal a breach, door or hatch — it holds against a DC 15 Strength check for 1 minute."),
    ("powder", "fireball", "{name} handles boom with respect: {name} has advantage on saving throws against fire and thunder damage from explosives, and can disarm a fuse or charge as an action on a DC 12 Dexterity check."),
    ("propellant", "fireball", "{name} handles boom with respect: {name} has advantage on saving throws against fire and thunder damage from explosives, and can disarm a fuse or charge as an action on a DC 12 Dexterity check."),
    ("salvage", "wrench", "{name} sticks to problems until they yield: {name} can tell what a piece of Magtek or Iron Legion salvage did and whether it still can with 10 minutes and a DC 13 Intelligence check."),
    ("tool crib", "merchant", "{name} signs it out: once per long rest {name} can produce one piece of mundane gear worth 5 gp or less that the ship would plausibly carry."),
    ("kit issue", "merchant", "{name} signs it out: once per long rest {name} can produce one piece of mundane gear worth 5 gp or less that the ship would plausibly carry."),
    ("rope", "rope", "{name} works the lofts: advantage on Strength (Athletics) checks to climb rigging and on checks to tie, cut or rig a line, and {name} can rig a safe descent for six creatures in 1 minute."),
    ("sail", "rope", "{name} works the lofts: advantage on Strength (Athletics) checks to climb rigging and on checks to tie, cut or rig a line, and {name} can rig a safe descent for six creatures in 1 minute."),
    ("surgeon", "bandage", "{name} operates: once per long rest {name} can spend 10 minutes on a creature at 0 hit points to stabilise it and restore 1d4 hit points, or on a wounded creature to remove one level of exhaustion."),
    ("trauma", "bandage", "{name} runs the trauma desk: a creature {name} stabilises regains 1 hit point after 1 minute instead of 1d4 hours, and {name} has advantage on Wisdom (Medicine) checks against bleeding, shock and burns."),
    ("recovery", "heart", "{name} gets people standing again: a creature that finishes a long rest under {name}'s care regains all spent Hit Dice instead of half."),
    ("ward", "heart", "{name} keeps the ward: creatures resting within 30 feet of {name} have advantage on saving throws against disease and on checks to recover from the frightened condition."),
    ("orderly", "heart", "{name} keeps the ward: creatures resting within 30 feet of {name} have advantage on saving throws against disease and on checks to recover from the frightened condition."),
    ("counsel", "peace", "{name} listens: a creature that spends an hour talking with {name} can end the frightened or charmed condition, or gain advantage on its next saving throw against fear."),
    ("herb", "herb", "{name} knows the greenhouse: {name} can brew a healer's salve (restores 1d4 hit points when applied as an action) once per long rest, and identifies any plant or poison with a DC 12 Intelligence (Nature) check."),
    ("salve", "herb", "{name} knows the greenhouse: {name} can brew a healer's salve (restores 1d4 hit points when applied as an action) once per long rest, and identifies any plant or poison with a DC 12 Intelligence (Nature) check."),
    ("bone", "bones", "{name} sets bones: a creature {name} treats after a fall or a crushing blow takes no lasting penalty, and {name} can splint a broken limb in 1 minute so it bears weight."),
    ("paperwork", "sealed", "Nobody operates without a yes: {name} can calm a panicking creature with a minute of talk (DC 10 Charisma (Persuasion)) so it can consent to treatment, ending the frightened condition for that purpose."),
    ("recon", "spyglass", "{name} goes the long route: {name} can travel at a fast pace without the penalty to passive Perception, and has advantage on Dexterity (Stealth) checks made while moving at a normal pace."),
    ("eyes", "spyglass", "{name} goes the long route: {name} can travel at a fast pace without the penalty to passive Perception, and has advantage on Dexterity (Stealth) checks made while moving at a normal pace."),
    ("pattern", "brain", "{name} reads patterns: once per long rest {name} can ask the GM one yes/no question about a report, map or set of intercepts {name} has studied for an hour, and get a truthful answer."),
    ("intelligence", "eyegreen", "{name} reads rooms and files people: advantage on Wisdom (Insight) checks, and {name} can tell which creature in a room is in charge after a minute of watching."),
    ("instructor", "banner", "{name} teaches: Liberated Toads who trained under {name} within the last tenday add +1 to their first attack roll in a fight while {name} can see them."),
    ("drill", "banner", "{name} drills the line: as a bonus action {name} can call a formation — each Liberated Toad within 30 feet that can hear gains +1 AC until the start of {name}'s next turn while adjacent to another."),
    ("coach", "banner", "{name} teaches: Liberated Toads who trained under {name} within the last tenday add +1 to their first attack roll in a fight while {name} can see them."),
    ("fitness", "banner", "{name} makes mornings worse on purpose: Liberated Toads who trained under {name} this tenday have advantage on Constitution saves against exhaustion from a forced march."),
    ("coordinator", "banner", "{name} coordinates the defence: as a bonus action {name} can move one willing Liberated Toad within 30 feet 5 feet without provoking opportunity attacks."),
    ("shock", "strike", "First into the ugly: the first attack {name} makes in a fight deals an extra 1d6 damage if {name} moved at least 10 feet straight toward the target."),
    ("breach", "strike", "First into the ugly: the first attack {name} makes in a fight deals an extra 1d6 damage if {name} moved at least 10 feet straight toward the target."),
    ("anchor", "shield", "Last to step back: {name} has advantage on saving throws and checks against being moved or knocked prone, and allies adjacent to {name} gain +1 AC while {name} wields a shield."),
    ("shield wall", "shield", "{name} holds the wall: allies adjacent to {name} gain +1 AC while {name} wields a shield."),
    ("spear line", "spear2", "{name} keeps the line: {name} can make opportunity attacks with a spear against creatures that enter its reach."),
    ("rear guard", "archery", "{name} covers the retreat: allies moving away from an enemy within 30 feet of {name} do not provoke opportunity attacks from creatures {name} hit this turn."),
    ("blade", "shortsword2", "{name} walks the escort: when a creature {name} can see attacks the person {name} is escorting, {name} can use a reaction to make one melee attack against it if it is within reach."),
    ("gate", "key", "{name} holds the gate: a creature trying to pass {name} in a doorway or corridor treats the square as difficult terrain and provokes an opportunity attack even if it Disengages."),
    ("wall post", "lanternlit", "On post, {name} has advantage on Wisdom (Perception) checks to notice a creature approaching the ward, and cannot be surprised while awake."),
]

# Cohort equipment → weapons (name, icon, html, dmg, kwargs); a role keyword
# swaps the default kit for a post's own.
def W_SPEAR(owner, who="Pond Patrol"):
    return attack(owner, f"{who} Spear", I["spear"],
                  f"<p>Standard arms of the {who}: a short ash spear, thrown in a pinch.</p>",
                  dmg=(1, 6, ["piercing"]), props=["thr", "ver"], rng=(20, 60), versatile=(1, 8, ["piercing"]))


def W_TRUNCHEON(owner):
    return attack(owner, "Truncheon", I["club"],
                  "<p>Patrol gear: a weighted baton for taking a toad in without breaking it.</p>",
                  dmg=(1, 4, ["bludgeoning"]), props=["lgt"])


def W_SHORTSWORD(owner):
    return attack(owner, "Shortsword", I["shortsword"],
                  "<p>Combat gear of the Wardens: a Beanbean-pattern shortsword from the Vigilance's lockers.</p>",
                  dmg=(1, 6, ["piercing"]), props=["fin", "lgt"], wtype="martialM")


def W_SHORTBOW(owner):
    return attack(owner, "Shortbow", I["shortbow"],
                  "<p>A short recurve bow; the quiver holds twenty arrows.</p>",
                  dmg=(1, 6, ["piercing"]), ability="dex", kind="ranged", wtype="simpleR",
                  props=["amm", "two"], rng=(80, 320))


def W_DAGGER(owner, name="Dagger", note="A plain knife."):
    return attack(owner, name, I["dagger"], f"<p>{note}</p>",
                  dmg=(1, 4, ["piercing"]), ability="dex", props=["fin", "lgt", "thr"], rng=(20, 60))


def W_HAMMER(owner):
    return attack(owner, "Working Hammer", I["lighthammer"],
                  "<p>Workshop tools, Crafters' proficiency: a ball-peen hammer that is a weapon when it has to be.</p>",
                  dmg=(1, 4, ["bludgeoning"]), props=["lgt", "thr"], rng=(20, 60))


def W_WRENCH(owner):
    return attack(owner, "Pipe Wrench", I["wrench"],
                  "<p>Repair materials, Crafters' proficiency: an iron wrench swung two-handed.</p>",
                  dmg=(1, 6, ["bludgeoning"]), props=["ver"], versatile=(1, 8, ["bludgeoning"]))


def W_STAFF(owner):
    return attack(owner, "Walking Staff", I["staffwood"],
                  "<p>A Mender's staff — for the long wards and the odd hard argument.</p>",
                  dmg=(1, 6, ["bludgeoning"]), props=["ver"], versatile=(1, 8, ["bludgeoning"]))


def W_SLING(owner):
    return attack(owner, "Sling", I["sling"],
                  "<p>A leather sling and a pocket of river stones.</p>",
                  dmg=(1, 4, ["bludgeoning"]), ability="dex", kind="ranged", wtype="simpleR",
                  props=["amm"], rng=(30, 120))


def W_CLUB(owner, name="Cudgel", note="A length of barrel stave."):
    return attack(owner, name, I["club"], f"<p>{note}</p>", dmg=(1, 4, ["bludgeoning"]), props=["lgt"])


def W_LADLE(owner):
    return attack(owner, "Kitchen Ladle", I["ladle"],
                  "<p>An iron ladle; the kitchen hands have put down more than one argument with it.</p>",
                  dmg=(1, 4, ["bludgeoning"]), props=["lgt"])


def kit_for(cohort_id, owner, role):
    """The weapon items a toad of this cohort carries for this post."""
    r = role.lower()
    if cohort_id == "pond_patrol":
        items = [W_SPEAR(owner), W_TRUNCHEON(owner)]
        if "pilot" in r or "runner" in r:
            items = [W_TRUNCHEON(owner), W_DAGGER(owner, "Runner's Knife", "A short knife; the runner's job is to arrive, not to fight.")]
        return items
    if cohort_id == "wardens":
        if any(k in r for k in ("breach", "escort", "night blade", "door team", "shock")):
            return [W_SHORTSWORD(owner), W_SPEAR(owner, "Wardens'")]
        if "rear guard" in r:
            return [W_SHORTBOW(owner), W_SPEAR(owner, "Wardens'")]
        return [W_SPEAR(owner, "Wardens'"), W_SHORTSWORD(owner)]
    if cohort_id == "chroniclers":
        return [W_DAGGER(owner, "Quill-knife", "The knife that trims quills and opens seals. It has never been drawn for anything else, which is not the same as never.")]
    if cohort_id == "crafters":
        if any(k in r for k in ("wiring", "board", "engineer", "gadget", "pipe", "ports", "magtek")):
            return [W_WRENCH(owner), W_HAMMER(owner)]
        return [W_HAMMER(owner), W_WRENCH(owner)]
    if cohort_id == "menders":
        return [W_STAFF(owner)]
    if cohort_id == "scouts":
        return [W_SHORTBOW(owner), W_DAGGER(owner, "Scout's Knife", "Stealth gear: a blackened knife that does not catch the light.")]
    return [W_CLUB(owner)]


# ------------------------------------------------------- the written rules

# classDefinitions[].skills: one line each on the docket. The feat carries the
# docket's words and the table reading of them.
CLASS_RULES = {
    "Basic Training": "+1 to attack rolls with simple weapons (already in the attack bonus below: the spear and truncheon count it).",
    "Shield Wall": "+2 AC while adjacent to an ally wielding a shield.",
    "Stand Your Ground": "Advantage on saving throws and checks against being moved or knocked prone.",
    "Fighting Style": "Defense: +1 AC while wearing armour (counted in the AC above).",
    "Second Wind": "As a bonus action, regain 1d10 + level hit points. Once per short or long rest.",
    "Action Surge": "Once per short or long rest, take one additional action on this turn.",
    "Martial Archetype": "Champion: a weapon attack scores a critical hit on a roll of 19 or 20.",
    "Extra Attack": "Attack twice, instead of once, when taking the Attack action (the Multiattack line).",
    "Survivor's Instinct": "Advantage on saving throws to avoid exhaustion.",
    "Strength in Numbers": "+1 to all ability checks while adjacent to an ally.",
    "Hidden Potential": "May multiclass into another class with training — on the docket this toad is ready for a cohort's trade.",
    "Crafting Expertise": "Proficiency with artisan's tools (expertise with the cohort's own); crafts at double speed.",
    "Jury-Rig": "As an action, temporarily repair any object or mechanism with a DC 15 Intelligence check; the repair holds for an hour or until it takes damage.",
    "Masterwork": "Items this toad crafts carry a +1 bonus or one additional feature (the GM's call), and never break on a natural 1.",
    "False Identity": "Keeps a cover identity with documentation and contacts; a DC 15 Wisdom (Insight) check is needed to see through it.",
    "Expertise": "Double proficiency bonus on Deception and one other skill (Stealth, counted in the skills above).",
    "Silver Tongue": "Minimum roll of 10 on Charisma (Deception) and Charisma (Persuasion) checks.",
    "Read the Room": "Advantage on Wisdom (Insight) checks; detects a lie with a DC 15 Wisdom check.",
    "Dead Drop": "Establishes a secure line: a message left at a dead drop reaches its reader within a day, and nobody else.",
    "Slippery Mind": "Proficiency in Wisdom saving throws; advantage on saves against being charmed.",
    "Commanding Presence": "Allies within 30 feet gain +2 to saving throws against being frightened.",
    "Rally": "As an action, allies who can hear this toad gain temporary hit points equal to its Charisma modifier + level (minimum 1). Once per short or long rest.",
    "Tactical Direction": "Once per short or long rest, grant one ally that can hear this toad an additional action on its turn.",
}
CLASS_ICON = {"combat": "strike", "support": "heal", "utility": "star", "stealth": "stealth", "leadership": "banner"}
SKILL_ICON = {"Basic Training": "spear2", "Shield Wall": "shield", "Stand Your Ground": "shieldbash", "Second Wind": "heart",
              "Action Surge": "run", "Martial Archetype": "sabre", "Extra Attack": "strike", "Survivor's Instinct": "heart",
              "Strength in Numbers": "handshake", "Hidden Potential": "star", "Crafting Expertise": "anvil", "Jury-Rig": "wrench",
              "Masterwork": "star", "False Identity": "letter", "Expertise": "stealth", "Silver Tongue": "peace",
              "Read the Room": "eyegreen", "Dead Drop": "letter", "Slippery Mind": "brain", "Commanding Presence": "banner",
              "Rally": "shout", "Tactical Direction": "banner", "Fighting Style": "shield"}
SKILL_USES = {"Second Wind": ("1", "sr"), "Action Surge": ("1", "sr"), "Rally": ("1", "sr"), "Tactical Direction": ("1", "sr")}


def class_feats(owner, cls_key, level, name):
    """Feat items for every classDefinitions skill of `cls_key` at or below
    `level` (docket words first, then the table reading)."""
    out = []
    cls = CLASSES[cls_key]
    for sk in sorted(cls["skills"], key=lambda s: (s["level"], s["name"])):
        if sk["level"] > level:
            continue
        rule = CLASS_RULES.get(sk["name"], "")
        html = (f"<p><em>{cls['name']} — level {sk['level']} ({sk['type']}), on the docket:</em> {sk['description']}.</p>"
                + (f"<p>{rule}</p>" if rule else ""))
        icon = I[SKILL_ICON.get(sk["name"], CLASS_ICON.get(sk["type"], "star"))]
        label = sk["name"]
        if sk["name"] == "Second Wind":
            label = "Second Wind (Bonus Action, 1/Rest)"
        elif sk["name"] in ("Action Surge", "Tactical Direction"):
            label = f"{sk['name']} (1/Rest)"
        elif sk["name"] == "Rally":
            label = "Rally (Action, 1/Rest)"
        out.append(feat(owner, label, icon, html, uses=SKILL_USES.get(sk["name"])))
    return out


def cohort_feat(owner, cohort, name):
    """One feat per cohort for its specialisations line."""
    spec = ", ".join(cohort.get("specializations") or [])
    equip = ", ".join(cohort.get("equipment") or [])
    cid = cohort["id"]
    if cid == "pond_patrol":
        html = (f"<p><em>Pond Patrol specialisations: {spec}. Equipment: {equip}.</em></p>"
                "<p><strong>Apprehension.</strong> {n} carries restraint equipment: a creature {n} has grappled can be bound as an action "
                "(escape DC 12 Strength or Dexterity check). <strong>Containment.</strong> A creature that starts its turn grappled by {n} "
                "cannot use the Disengage action. <strong>Protection.</strong> {n} can use the Help action to grant an adjacent ally +2 AC "
                "against the next attack before {n}'s next turn.</p>").replace("{n}", name)
        return feat(owner, "Pond Patrol Training", I["shackles"], html)
    if cid == "wardens":
        html = (f"<p><em>Wardens specialisations: {spec}. Equipment: {equip}.</em></p>"
                "<p><strong>Combat.</strong> {n} fights as part of a line: +1 to attack rolls while an allied Warden is within 5 feet. "
                "<strong>Defense.</strong> When {n} takes the Dodge action, allies within 5 feet gain half cover against ranged attacks. "
                "<strong>Prisoner escort.</strong> A creature {n} is escorting in restraints has disadvantage on checks to escape "
                "while {n} is within 5 feet.</p>").replace("{n}", name)
        return feat(owner, "Wardens' Discipline", I["kite"], html)
    if cid == "chroniclers":
        html = (f"<p><em>Chroniclers specialisations: {spec}. Equipment: {equip}.</em></p>"
                "<p><strong>Documentation.</strong> {n} keeps the record: {n} can recall anything {n} has read in the archive with a DC 10 "
                "Intelligence check, and reproduces a document from memory in an hour. <strong>Cipher books.</strong> {n} reads and writes "
                "the Chroniclers' cipher; a message in it takes a DC 18 Intelligence (Investigation) check to break. "
                "<strong>Education.</strong> A creature {n} teaches for a tenday gains proficiency in one language or tool "
                "the Liberated Toads know.</p>").replace("{n}", name)
        return feat(owner, "Chroniclers' Record", I["book"], html)
    if cid == "crafters":
        html = (f"<p><em>Crafters specialisations: {spec}. Equipment: {equip}.</em></p>"
                "<p><strong>Ship repair.</strong> {n} knows the Vigilance plate by plate: {n} finds the fault in a damaged system in 1 minute. "
                "<strong>Weapon maintenance.</strong> A weapon {n} has serviced ignores the first natural 1 rolled with it each day. "
                "<strong>Construction.</strong> With salvage and an hour, {n} can raise a barricade (AC 15, 20 hit points) across a 10-foot gap.</p>").replace("{n}", name)
        return feat(owner, "Crafters' Trade", I["anvil"], html)
    if cid == "menders":
        html = (f"<p><em>Menders specialisations: {spec}. Equipment: {equip}.</em></p>"
                "<p><strong>Trauma care.</strong> As an action, {n} uses a healer's kit on a creature within 5 feet: it is stabilised and "
                "regains 1d6 + {n}'s Wisdom modifier hit points. Uses per long rest: half {n}'s level, rounded up. "
                "<strong>Psychological support.</strong> A creature that spends a short rest talking with {n} can end the frightened "
                "condition. <strong>Recovery.</strong> A creature under {n}'s care regains an extra Hit Die's worth of hit points on a long rest.</p>").replace("{n}", name)
        return feat(owner, "Menders' Care (Action)", I["bandage"], html)
    if cid == "scouts":
        html = (f"<p><em>Scouts specialisations: {spec}. Equipment: {equip}.</em></p>"
                "<p><strong>Reconnaissance.</strong> {n} can take the Hide action as a bonus action. <strong>Infiltration.</strong> {n} carries "
                "a disguise and papers: a DC 13 Wisdom (Insight) check is needed to pick {n} out of a crowd {n} has dressed for. "
                "<strong>Signals.</strong> {n} carries a set and a light: {n} can pass a short message to any Scout within sight or 300 feet "
                "of radio, no action required.</p>").replace("{n}", name)
        return feat(owner, "Scouts' Craft", I["spyglass"], html)
    html = (f"<p><em>{cohort['name']}: {cohort.get('purpose') or ''}</em></p><p>{cohort.get('description') or ''}</p>")
    return feat(owner, f"{cohort['name']}", I["star"], html)


def role_feat(owner, name, role, note, cohort_name):
    """The post itself, as the docket has it, with a one-line rule by keyword."""
    r = role.lower()
    perk, icon = None, "star"
    for key, ic, text in ROLE_PERKS:
        if key in r:
            perk, icon = text.format(name=name), ic
            break
    html = f"<p><em>{cohort_name} docket — {role}.</em>" + (f" <q>{note}</q>" if note else "") + "</p>"
    if perk:
        html += f"<p>{perk}</p>"
    else:
        html += f"<p>{name} knows the post: advantage on one ability check a day that bears directly on it (the GM's call).</p>"
    return feat(owner, role, I[icon], html)


# --------------------------------------------------------------- the sheet

def plate_for(spec, role):
    r = role.lower()
    for key, plate in spec.get("plates") or []:
        if key in r:
            return plate
    return spec["plate"]


def build_scores(spec, level):
    sc = dict(zip(ABILITY_KEYS, spec["sc"]))
    if level >= 4:
        for k in spec["bump"]:
            sc[k] += 2
    if level >= 5:
        sc[spec["bump"][0]] += 1
    return sc


def mod(v):
    return (v - 10) // 2


def hp_for(cls_key, level, con):
    hd = CLASSES[cls_key]["hit_die"]
    per = HD_AVG.get(hd, 4.5) + mod(con)
    total = max(1, int(round(per * level)))
    bonus = mod(con) * level
    formula = f"{level}d{hd}" + (f" + {bonus}" if bonus > 0 else (f" - {-bonus}" if bonus < 0 else ""))
    return total, formula


def ac_for(spec, cls_key, sc, level):
    name, words, base, shield = spec["armor"]
    dex = mod(sc["dex"])
    if base >= 13:          # medium: dex capped at +2
        dex = min(dex, 2)
    ac = base + dex + shield
    if cls_key == "fighter":
        ac += 1             # Fighting Style (Defense)
    return ac, f"{words} (AC {ac})"


def saves_for(cls_key):
    return tuple(CLASSES[cls_key].get("saving_throws") or ())


def trained_for(spec, cls_key, level):
    tr = dict(spec["trained"])
    if cls_key == "spy":          # Expertise: Deception and Stealth
        tr["dec"] = 2
        tr["ste"] = 2
    return tr


def cr_for(spec, level):
    return (CR_FIGHTING if spec["fighting"] else CR_WORKING)[max(1, min(5, level))]


def npc(*, slug, name, cohort, plate, sc, prof_saves, trained, ac, hp, hp_formula, cr, items, biography, align,
        folder, tags, color, docket):
    img = TOKEN_PREFIX + plate + ".png"
    doc = {
        "_id": sid("actor", PACKET, slug),
        "name": name,
        "type": "npc",
        "img": img,
        "system": {
            "abilities": abilities(sc, prof_saves),
            "attributes": {
                "ac": {"flat": ac, "calc": "natural", "formula": ""},
                "hp": {"value": hp, "max": hp, "formula": hp_formula, "temp": None, "tempmax": None},
                "movement": {"walk": "25", "units": "ft", "hover": False, "burrow": "0", "climb": "0", "fly": "0",
                             "swim": "0", "ignoredDifficultTerrain": []},
                "senses": {"units": "ft", "ranges": {"darkvision": 0}, "special": ""},
                "init": {"ability": "", "roll": blank_roll(), "bonus": ""},
                "attunement": {"max": 3},
                "spellcasting": "",
                "exhaustion": 0,
                "concentration": {"ability": "", "roll": blank_roll(), "bonuses": {"save": ""}, "limit": 1},
                "loyalty": {},
                "hd": {"spent": 0},
                "death": {"roll": blank_roll(), "success": 0, "failure": 0, "bonuses": {"save": ""}},
            },
            "details": {
                "alignment": align,
                "type": {"value": "humanoid", "subtype": "toad"},
                "cr": cr,
                "biography": {"value": biography, "public": ""},
            },
            "traits": {
                "size": "sm",
                "languages": {"value": ["common"], "custom": "", "communication": {}},
                "ci": {"value": [], "custom": ""},
                "di": {"value": [], "custom": "", "bypasses": []},
                "dr": {"value": [], "custom": "", "bypasses": []},
                "dv": {"value": [], "custom": "", "bypasses": []},
                "dm": {"amount": {}, "bypasses": []},
                "important": False,
            },
            "skills": skills(trained or {}),
            "source": {"custom": "Waluipedia campaign", "revision": 1, "rules": "2024"},
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
            "texture": {"src": img, "anchorX": 0.5, "anchorY": 0.5, "fit": "contain", "scaleX": 1, "scaleY": 1,
                        "tint": "#ffffff", "alphaThreshold": 0.75},
            "lockRotation": False,
            "rotation": 0,
            "alpha": 1,
            "disposition": 1,
            "displayBars": 0,
            "bar1": {"attribute": "attributes.hp"},
            "bar2": {"attribute": None},
        },
        "items": items,
        "effects": [],
        "folder": None,
        "ownership": {"default": 0},
        "flags": {MODULE_ID: {"folderPath": [GROUP, folder], "source": "tools/build-liberated-toads-actors.py"},
                  SHEETS_FLAG: {"tags": tags, "color": color, "docket": docket}},
        "_stats": {"coreVersion": "14.365", "systemId": "dnd5e", "systemVersion": "5.3.3", "compendiumSource": None,
                   "duplicateSource": None},
    }
    for i, item in enumerate(doc["items"]):
        item["sort"] = 100000 * (i + 1)
    return slug, doc


def cr_text(cr):
    return {0.125: "1/8", 0.25: "1/4", 0.5: "1/2"}.get(cr, str(int(cr)) if float(cr).is_integer() else str(cr))


def multiattack(owner, name, weapon_names):
    return feat(owner, "Multiattack", I["strike"],
                f"<p>{name} makes two attacks with the {weapon_names[0]}" + (f" or the {weapon_names[1]}" if len(weapon_names) > 1 else "") + ".</p>")


def biography(name, cohort, row, cls_key, level, cr, ac_words, hp_formula, generic_for=None):
    cls = CLASSES[cls_key]
    nearest = cohort["id"] in ("chroniclers", "menders")
    cls_words = (f"on the {cls['name']} line ({cls['description'].lower()}) — the docket defines no {('scholar' if cohort['id'] == 'chroniclers' else 'healer')} "
                 f"class, so the cohort feat carries the trade" if nearest else f"as {cls['name'].lower()} ({cls['description'].lower()})")
    head = (f"<p><em>Liberated Toads cohort sheet — {name}.</em> Built by <code>tools/build-liberated-toads-actors.py</code> from "
            f"the Pond Patrol docket (<code>data/liberatedToadsSystem.json</code>, snapshot {AS_OF}): "
            f"level {level} on the docket → CR {cr_text(cr)} {cls_words}; "
            f"{ac_words}, hit points {hp_formula}. A GM-ready reading of the docket, not a filed stat line; the docket stays the authority.</p>")
    leader = cohort.get("leader") or "vacant"
    body = (f"<p><strong>{cohort['name']}</strong> — {cohort.get('purpose') or ''}. Leader: {leader}. "
            f"{cohort.get('description') or ''}</p>")
    if row:
        note = f" <q>{row['note']}</q>" if row.get("note") else ""
        style = " (a T-pun name)" if row.get("nameStyle") == "t-pun" else ""
        body += f"<p><strong>On the docket:</strong> {row['role']}, level {row['level']}{style}.{note}</p>"
    if generic_for:
        body += generic_for
    equip = cohort.get("equipment") or []
    spec = cohort.get("specializations") or []
    ev = "<h3>Evidence</h3><ul>"
    if equip:
        ev += f"<li><strong>Equipment</strong> — {', '.join(equip)} (the weapon items)</li>"
    if spec:
        ev += f"<li><strong>Specialisations</strong> — {', '.join(spec)} (the cohort feat)</li>"
    ev += f"<li><strong>{cls['name']}</strong> — classDefinitions.{cls_key}: " + "; ".join(
        f"{s['name']} (L{s['level']})" for s in sorted(cls['skills'], key=lambda s: (s['level'], s['name'])) if s['level'] <= level) + "</li>"
    ev += f"<li><strong>Status</strong> — {cohort.get('status') or 'active'}: {cohort.get('statusDetail') or ''}</li></ul>"
    return head + body + ev


def build_member(cohort, row):
    """One docket row of a working cohort → (slug, doc)."""
    cid = cohort["id"]
    spec = WORKING[cid]
    name = row["name"]
    level = max(1, min(5, int(row.get("level") or 1)))
    slug = f"{slugify(cid)}-{slugify(name)}"
    cls_key = spec["cls"]
    sc = build_scores(spec, level)
    hp, hp_formula = hp_for(cls_key, level, sc["con"])
    ac, ac_words = ac_for(spec, cls_key, sc, level)
    cr = cr_for(spec, level)
    weapons = kit_for(cid, slug, row["role"])
    if cls_key == "militia":      # Basic Training: +1 to attack rolls with simple weapons
        for w in weapons:
            w["system"]["activities"]["dnd5eactivity000"]["attack"]["bonus"] = "1"
    items = list(weapons)
    if spec["fighting"] and level >= 4:
        items.append(multiattack(slug, name, [w["name"] for w in weapons]))
    items += class_feats(slug, cls_key, level, name)
    items.append(cohort_feat(slug, cohort, name))
    items.append(role_feat(slug, name, row["role"], row.get("note"), cohort["name"]))
    bio = biography(name, cohort, row, cls_key, level, cr, ac_words, hp_formula)
    tags = [GROUP, "npc", cohort["name"], "humanoid", f"level {level}", "docket"]
    docket = {"cohort": cid, "role": row["role"], "level": level, "note": row.get("note") or "", "id": row.get("id")}
    return npc(slug=slug, name=name, cohort=cohort, plate=plate_for(spec, row["role"]), sc=sc, prof_saves=saves_for(cls_key),
               trained=trained_for(spec, cls_key, level), ac=ac, hp=hp, hp_formula=hp_formula, cr=cr, items=items,
               biography=bio, align=spec["align"], folder=cohort["name"], tags=tags, color=cohort.get("color"), docket=docket)


# ---------------------------------------------------------------- generics

# The Barrel Survivors (146 rows) and the Unassigned (31) are a role and a
# level each on the docket; a few generic statblocks stand in for them. Each
# names the docket roles it covers and the rows the docket marks notable.
GENERICS = {
    "barrel_survivors": [
        dict(slug="barrel-survivor", name="Barrel Survivor", level=1, cls="commoner", plate="farmer_hoe", kit="club",
             sc=(10, 10, 10, 10, 11, 10), trained={},
             roles=("Barrel survivor", "Quiet majority", "Bunk neighbor", "Roll-call answer", "Floor scrub", "Blanket fold",
                    "Lamp lighter", "Vest mender", "Button sew", "Cap care", "Ward visitor", "Assembly attendee")),
        dict(slug="barrel-survivor-kitchen-hand", name="Barrel Survivor, Kitchen Hand", level=2, cls="commoner", plate="cook_ladle", kit="ladle",
             sc=(11, 10, 12, 10, 11, 10), trained={"prc": 1},
             roles=("Kitchen hand", "Ration line", "Water carrier", "Laundry shift", "Cargo help", "New-arrival greeter")),
        dict(slug="barrel-survivor-story-keeper", name="Barrel Survivor, Story Keeper", level=2, cls="commoner", plate="bard_lute", kit="club",
             sc=(9, 10, 10, 12, 13, 13), trained={"his": 1, "prf": 1, "ins": 1},
             roles=("Story keeper", "Name rememberer", "Transit witness", "Missing-family seeker", "Hope keeper", "Fear quieter",
                    "Elder companion", "Children watch")),
        dict(slug="barrel-survivor-deck-voice", name="Barrel Survivor, Deck Voice", level=3, cls="leader", plate="messenger_letter", kit="club",
             sc=(10, 10, 12, 11, 13, 14), trained={"per": 1, "ins": 1},
             roles=("Block voice — mid decks", "Assembly floor voice", "Grievance speaker", "Grievance line", "Motion seconder",
                    "Vote line", "Mid-deck voice", "Lower hold voice", "Family cluster head", "Unaligned bunk elder", "Elder Mudcap's aide")),
    ],
    "unassigned": [
        dict(slug="unassigned-new-arrival", name="Unassigned Toad, New Arrival", level=1, cls="commoner", plate="young_slingshot", kit="sling",
             sc=(9, 11, 10, 10, 10, 10), trained={},
             roles=("New arrival", "Orientation", "Awaiting cohort", "Skills assessment queue", "Skills assessment", "Language class",
                    "Literacy class", "Family search", "Name recovery", "Trauma rest", "Medical hold", "Counseling queue",
                    "Passing through", "Temp bunk claim", "Pending vote")),
        dict(slug="unassigned-spare-hands", name="Unassigned Toad, Spare Hands", level=2, cls="commoner", plate="farmer_hoe", kit="club",
             sc=(11, 11, 11, 10, 10, 10), trained={"ath": 1},
             roles=("Spare hands", "Light duty", "Watch only", "Messenger pool", "Temp desk help", "Temp kitchen", "Temp laundry",
                    "Temp cargo", "Combat eval", "Craft eval", "Scout eval", "Patrol eval", "Clerk eval", "Training queue",
                    "Cohort application pile", "Orientation group lead")),
    ],
}
GENERIC_KIT = {"club": W_CLUB, "ladle": W_LADLE, "sling": W_SLING}


def generic_feat(owner, cohort, name):
    cid = cohort["id"]
    spec = ", ".join(cohort.get("specializations") or [])
    if cid == "barrel_survivors":
        html = (f"<p><em>Barrel Survivors specialisations: {spec}.</em></p>"
                "<p><strong>Testimony.</strong> {n} was in the barrels: when {n} tells it, {n} has advantage on Charisma (Persuasion) checks "
                "against anyone who was not there. <strong>Unity.</strong> {n} has advantage on saving throws against being frightened while "
                "another Barrel Survivor is within 10 feet. <strong>Moral authority.</strong> In a Liberated Toads assembly {n}'s vote "
                "counts as the docket says it does, and a cohort toad who shouts {n} down loses the floor.</p>").replace("{n}", name)
        return feat(owner, "The Reason the Liberated Toads Exist", I["banner"], html)
    html = (f"<p><em>The Unassigned — {cohort.get('purpose') or ''}.</em></p>"
            "<p>{n} has no cohort yet: {n} can take the Help action for any cohort toad as a bonus action, and after a tenday of "
            "working alongside one cohort {n} may be re-filed into it (the docket's Hidden Potential).</p>").replace("{n}", name)
    return feat(owner, "Between Assignments", I["hourglass"], html)


def build_generic(cohort, g):
    cid = cohort["id"]
    name = g["name"]
    level = g["level"]
    slug = f"{slugify(cid)}-{g['slug']}"
    cls_key = g["cls"]
    sc = dict(zip(ABILITY_KEYS, g["sc"]))
    hp, hp_formula = hp_for(cls_key, level, sc["con"])
    ac = 10 + mod(sc["dex"])
    cr = CR_WORKING[level]
    weapons = [GENERIC_KIT[g["kit"]](slug)]
    items = list(weapons) + class_feats(slug, cls_key, level, name) + [generic_feat(slug, cohort, name)]
    rows = [r for r in cohort["roster"] if r["role"] in g["roles"]]
    notable = [r for r in rows if r.get("note")]
    levels = sorted({int(r.get("level") or 1) for r in rows})
    stands = (f"<p><strong>Stands in for</strong> {len(rows)} docket rows (levels {', '.join(map(str, levels)) or level}): "
              + ", ".join(g["roles"]) + ".")
    if notable:
        stands += " <strong>Named on the docket:</strong> " + "; ".join(
            f"{r['name']} ({r['role']}" + (f" — <q>{r['note']}</q>" if r.get('note') else "") + ")" for r in notable) + "."
    stands += " Rename the token for the toad at the table.</p>"
    bio = biography(name, cohort, None, cls_key, level, cr, f"no armour (AC {ac})", hp_formula, generic_for=stands)
    tags = [GROUP, "npc", cohort["name"], "humanoid", f"level {level}", "docket", "generic"]
    docket = {"cohort": cid, "role": g["roles"][0], "level": level, "note": "", "generic": True, "rows": len(rows)}
    return npc(slug=slug, name=name, cohort=cohort, plate=g["plate"], sc=sc, prof_saves=saves_for(cls_key), trained=g["trained"],
               ac=ac, hp=hp, hp_formula=hp_formula, cr=cr, items=items, biography=bio, align="Neutral Good",
               folder=cohort["name"], tags=tags, color=cohort.get("color"), docket=docket)


# ------------------------------------------------------------------ build

def build_all(names=None):
    names = article_names() if names is None else names
    out, skipped = [], []
    for cid in WORKING:
        cohort = COHORTS_BY_ID[cid]
        seen = set()
        for row in cohort["roster"]:
            if has_article(row["name"], names):
                skipped.append((cohort["name"], row["name"]))
                continue
            key = row["name"].strip().lower()
            if key in seen:
                skipped.append((cohort["name"], row["name"] + " (duplicate row)"))
                continue
            seen.add(key)
            out.append(build_member(cohort, row))
    for cid, gens in GENERICS.items():
        cohort = COHORTS_BY_ID[cid]
        for g in gens:
            out.append(build_generic(cohort, g))
    slugs = [s for s, _ in out]
    if len(slugs) != len(set(slugs)):
        raise SystemExit("duplicate actor slug")
    ids = [d["_id"] for _, d in out]
    if len(ids) != len(set(ids)):
        raise SystemExit("actor _id collision")
    return out, skipped


def render(doc):
    return json.dumps(doc, indent=2, ensure_ascii=False) + "\n"


# --------------------------------------------------------------- validation

def validate(slug, actor, lib, scheme):
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
        if p.startswith(TOKEN_PREFIX):
            if not os.path.exists(os.path.join(PORTRAITS, p[len(TOKEN_PREFIX):])):
                problems.append(f"role plate missing from repo: {p} (run `plates`)")
        elif p not in lib:
            problems.append(f"img not in image paths.txt: {p}")
    ids = [it["_id"] for it in actor["items"]]
    if len(ids) != len(set(ids)):
        problems.append("duplicate item _id")
    if actor["system"]["attributes"]["hp"]["max"] <= 0:
        problems.append("hp must be positive")
    cr = actor["system"]["details"]["cr"]
    if not (0 <= cr <= 30):
        problems.append(f"cr out of range: {cr}")
    path = actor["flags"][MODULE_ID]["folderPath"]
    subs = (((scheme.get("packets") or {}).get(PACKET) or {}).get("subfolders") or {}) if scheme else {}
    if len(path) != 2 or path[0] != GROUP:
        problems.append(f"folderPath must be [{GROUP!r}, cohort], got {path}")
    elif scheme and path[1] not in subs:
        problems.append(f"actors/folders.json packets.{PACKET}.subfolders lacks {path[1]!r}")
    if "docket" not in actor["system"]["details"]["biography"]["value"]:
        problems.append("biography must cite the docket")
    return [f"{slug}: {p}" for p in problems]


def validate_scheme(scheme):
    """The scheme's sub-folder colours are the docket's cohort colours."""
    problems = []
    if not scheme:
        return problems
    entry = (scheme.get("packets") or {}).get(PACKET) or {}
    if entry.get("folder") != GROUP:
        problems.append(f"actors/folders.json packets.{PACKET}.folder must be {GROUP!r}")
    subs = entry.get("subfolders") or {}
    for cid in list(WORKING) + list(GENERICS):
        c = COHORTS_BY_ID[cid]
        style = subs.get(c["name"])
        if not style:
            problems.append(f"actors/folders.json packets.{PACKET}.subfolders lacks {c['name']!r}")
        elif str(style.get("color") or "").lower() != str(c.get("color") or "").lower():
            problems.append(f"actors/folders.json {c['name']!r} colour {style.get('color')} ≠ docket {c.get('color')}")
    return problems


# ----------------------------------------------------------------- plates

PLATE_KEYS = ("alchemist_potions", "archer_bow", "bard_lute", "blacksmith_tongs", "brewer_barrel", "cook_ladle", "engineer_wrench",
              "farmer_hoe", "fisher_rod", "guard_pike", "knight_sword", "librarian_books", "mason_trowel", "medic_satchel",
              "messenger_letter", "miner_pickaxe", "patrol_spear", "scout_spyglass", "young_slingshot")


def cut_plates():
    """Key the 19 role figures off their white field into transparent token
    plates (tools/make-token-plates.py `cut`, flat-field mode: only the field
    touching the border goes, so a white cap stays)."""
    mtp = _load_module("mtp", "tools/make-token-plates.py")
    os.makedirs(PORTRAITS, exist_ok=True)
    for key in PLATE_KEYS:
        src = os.path.join(PLATE_SRC, f"field_{key}.png")
        if not os.path.exists(src):
            print(f"  missing source plate {src}", file=sys.stderr)
            continue
        facts = mtp.cut(src, os.path.join(PORTRAITS, f"{key}.png"))
        print(f"  cut {key}.png  figure {facts['figure'][0]}x{facts['figure'][1]}, border clear {facts['border_clear']}")
    return 0


# ------------------------------------------------------------------- main

def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("command", nargs="?", choices=["build", "plates"], default="build")
    ap.add_argument("--check", action="store_true", help="verify the files on disk match the generator")
    args = ap.parse_args(argv)
    if args.command == "plates":
        return cut_plates()

    lib = P955.load_image_lib()
    scheme = P955.load_folder_scheme()
    actors, skipped = build_all()
    problems = validate_scheme(scheme)
    for slug, doc in actors:
        problems += validate(slug, doc, lib, scheme)
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
            stray = sorted(f for f in os.listdir(ACTORS) if f.startswith("fvtt-Actor-") and f not in expected)
        bad += [f"unexpected {f}" for f in stray]
        if bad:
            for b in bad:
                print("  " + b, file=sys.stderr)
            print(f"FAIL {PACKET} actors: {len(bad)} problem(s); run tools/build-liberated-toads-actors.py", file=sys.stderr)
            return 1
        print(f"OK {PACKET} actors: {len(expected)} files current ({len(skipped)} docket rows keep their cast sheets)")
        return 0

    os.makedirs(ACTORS, exist_ok=True)
    for fname, text in expected.items():
        path = os.path.join(ACTORS, fname)
        tmp = path + ".tmp"
        with open(tmp, "w", encoding="utf-8") as fh:
            fh.write(text)
        os.replace(tmp, path)
        doc = json.loads(text)
        print(f"  wrote {fname}  ({doc['flags'][MODULE_ID]['folderPath'][1]}, CR {doc['system']['details']['cr']}, {len(doc['items'])} items)")
    for cohort, name in skipped:
        print(f"  skipped {cohort}: {name} (has an article / cast sheet)")
    print(f"Done. {len(expected)} actors in Reputation-Matrix2/actors/{PACKET}/")
    return 0


if __name__ == "__main__":
    sys.exit(main())
