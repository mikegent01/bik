#!/usr/bin/env python3
"""Build Foundry (dnd5e) sheets for every character in the archive that lacks
one, and the index the site's Sheets system reads.

    python3 tools/build-character-sheets.py            # write everything
    python3 tools/build-character-sheets.py --check    # fail if anything drifts
    python3 tools/build-character-sheets.py --list     # print the casting table

What it produces
    Reputation-Matrix2/actors/cast/fvtt-Actor-<id>.json   one NPC per character
    Reputation-Matrix2/actors/cast/import.json            the whole cast as one
                                                           Mass Import packet
    Reputation-Matrix2/data/sheets.json                   the index: every
                                                           character -> sheet,
                                                           party flag, stat line

Where the numbers come from
    * Levels are read from the site's XP ledger (XP_SUMMARY in index.html, the
      same figures the character pages print). A generated sheet's CR never
      exceeds that level; combatants sit at level-1..level (the 955 packet's
      precedent), non-combatants well under. Characters with no ledger entry
      get archetype defaults (students CR 0, household staff 0-1/8, guards
      1/2-1, officers 2, lords 3).
    * Every feature on a generated sheet is tied to a quote from the
      character's own article. The quote is stored on the item and in the
      biography; tools/check-sheets.py proves the words are still there.
    * Characters who already have a sheet (the PC intake, the live world
      mirror, the 955 era packet) are indexed, not regenerated.
    * A handful of entries are skipped on purpose (the GM, collectives,
      cosmic entities, XP stubs without an article) and listed as skipped.

Data rules (Reputation-Matrix2/actors/README.md): NPCs are type "npc", one
file each, unlinked tokens, no race/class/subclass/background items, no
invented magic items, deterministic ids so re-runs are byte-identical.
"""
import argparse
import importlib.util
import json
import math
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RM = os.path.join(ROOT, "Reputation-Matrix2")
DATA = os.path.join(RM, "data")
ACTORS = os.path.join(RM, "actors")
CAST = os.path.join(ACTORS, "cast")
INDEX_HTML = os.path.join(ROOT, "index.html")
IMAGE_LIB = os.path.join(RM, "tools", "item sheet examples", "image paths.txt")
SHEETS_JSON = os.path.join(DATA, "sheets.json")
SELF = "tools/build-character-sheets.py"
MODULE_ID = "waluipedia-mass-import"
SHEETS_FLAG = "waluipedia-sheets"
FOLDER_ROOT = "Waluipedia Cast"
PLACEHOLDER = "icons/svg/mystery-man.svg"


def _load_module(name, rel):
    spec = importlib.util.spec_from_file_location(name, os.path.join(ROOT, rel))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


# Item factories, the icon shelf and the id scheme are shared with the 955
# packet so the two generators cannot drift apart.
P955 = _load_module("p955", "tools/build-peachs-castle-955-actors.py")
BRIDGE = _load_module("foundry_bridge", "tools/foundry-bridge.py")
sid, feat, attack, scores_, I = P955.sid, P955.feat, P955.attack, P955.scores, dict(P955.I)
I.update({
    "heal": "icons/magic/life/heart-cross-strong-green.webp",
    "pistol": "icons/weapons/guns/gun-pistol-flintlock.webp",
    "axe": "icons/weapons/axes/axe-battle-black.webp",
    "bow": "icons/weapons/bows/shortbow-recurve.webp",
    "greatsword": "icons/weapons/swords/greatsword-crossguard-steel.webp",
    "book": "icons/sundries/books/book-worn-brown-grey.webp",
    "stealth": "icons/magic/perception/shadow-stealth-eyes-purple.webp",
    "pickpocket": "icons/skills/social/theft-pickpocket-bribery-brown.webp",
    "prayer": "icons/magic/holy/prayer-hands-glowing-yellow.webp",
    "star": "icons/magic/light/explosion-star-glow-yellow.webp",
    "bat": "icons/creatures/mammals/bat-giant-tattered-purple.webp",
    "vines": "icons/magic/nature/vines-thorned-curled-glow-teal-purple.webp",
    "hypno": "icons/magic/control/hypnosis-mesmerism-eye.webp",
    "banner": "icons/sundries/flags/banner-flag-blue.webp",
    "handshake": "icons/skills/social/diplomacy-handshake-yellow.webp",
    "cards": "icons/sundries/gaming/playing-cards.webp",
    "pickaxe": "icons/tools/hand/pickaxe-steel-white.webp",
    "cleaver": "icons/tools/cooking/knife-cleaver-steel-grey.webp",
    "poison": "icons/skills/toxins/poison-bottle-corked-fire-green.webp",
    "hourglass": "icons/magic/time/hourglass-yellow-green.webp",
    "quill": "icons/tools/scribal/ink-quill-pink.webp",
    "sickle": "icons/weapons/sickles/hand-sickle.webp",
    "lightning": "icons/magic/lightning/bolt-strike-forked-blue.webp",
    "ghost": "icons/magic/death/undead-ghost-strike-white.webp",
    "wrench": "icons/tools/hand/wrench-adjustable.webp",
    "crown": "icons/equipment/head/crown-gold-blue.webp",
    "vortex": "icons/magic/air/wind-vortex-swirl-blue.webp",
    "mask": "icons/equipment/head/mask-carved-gargoyle-grey.webp",
    "coins": "icons/commodities/currency/coins-plain-stack-gold.webp",
    "cane": "icons/weapons/staves/staff-simple-gold.webp",
    "inhale": "icons/magic/air/fog-gas-smoke-swirling-pink.webp",
    "trident": "icons/weapons/polearms/trident-silver-blue.webp",
    "cannon": "icons/weapons/artillery/cannon-engraved.webp",
    "whip": "icons/weapons/misc/whip-red-yellow.webp",
    "scimitar": "icons/weapons/swords/scimitar-worn-blue.webp",
    # player-character sheets: class, species and background items
    "upgrade": "icons/skills/melee/weapons-crossed-swords-white-blue.webp",
    "species": "icons/environment/people/group.webp",
})

ABILITY_KEYS = ("str", "dex", "con", "int", "wis", "cha")
SKILL_NAMES = {"acr": "Acrobatics", "ani": "Animal Handling", "arc": "Arcana", "ath": "Athletics",
               "dec": "Deception", "his": "History", "ins": "Insight", "itm": "Intimidation",
               "inv": "Investigation", "med": "Medicine", "nat": "Nature", "prc": "Perception",
               "prf": "Performance", "per": "Persuasion", "rel": "Religion", "slt": "Sleight of Hand",
               "ste": "Stealth", "sur": "Survival"}
SIZE_DIE = {"tiny": 4, "sm": 6, "med": 8, "lg": 10, "huge": 12}

# CR -> proficiency, armour class, hit points, attack bonus, damage per round,
# save DC (the DMG table, rounded to the campaign's habits).
CR_TABLE = {
    0: (2, 10, 3, 2, 1, 10), 0.125: (2, 11, 7, 3, 2, 11), 0.25: (2, 12, 13, 3, 4, 11),
    0.5: (2, 13, 20, 3, 7, 12), 1: (2, 13, 30, 3, 11, 12), 2: (2, 13, 45, 3, 17, 13),
    3: (2, 13, 60, 4, 23, 13), 4: (2, 14, 75, 5, 29, 14), 5: (3, 15, 95, 6, 35, 15),
    6: (3, 15, 110, 6, 41, 15), 7: (3, 15, 125, 6, 47, 15), 8: (3, 16, 140, 7, 53, 16),
}
CR_XP = {0: 10, 0.125: 25, 0.25: 50, 0.5: 100, 1: 200, 2: 450, 3: 700, 4: 1100,
         5: 1800, 6: 2300, 7: 2900, 8: 3900}
CR_STEPS = sorted(CR_TABLE)


def cr_label(cr):
    return {0.125: "1/8", 0.25: "1/4", 0.5: "1/2"}.get(cr, str(int(cr)) if float(cr).is_integer() else str(cr))


def cr_floor(x):
    """Largest CR step <= x (x may be a level-derived float)."""
    best = 0
    for s in CR_STEPS:
        if s <= x + 1e-9:
            best = s
    return best


# ---------------------------------------------------------------- loading

def read_json(path):
    with open(path, encoding="utf-8") as fh:
        return json.load(fh)


def load_characters():
    return [c for c in read_json(os.path.join(DATA, "characters.json")) if c and c.get("id")]


def load_xp_summary():
    """XP_SUMMARY is a one-line `const XP_SUMMARY={...};` in index.html."""
    with open(INDEX_HTML, encoding="utf-8") as fh:
        for line in fh:
            if line.startswith("const XP_SUMMARY="):
                blob = line[len("const XP_SUMMARY="):].strip()
                if blob.endswith(";"):
                    blob = blob[:-1]
                return json.loads(blob)
    raise SystemExit("XP_SUMMARY not found in index.html")


def load_image_lib():
    with open(IMAGE_LIB, encoding="utf-8", errors="replace") as fh:
        return {ln.strip().replace("\\", "/") for ln in fh if ln.strip()}


def existing_actor_files():
    """Every hand-made / imported actor file: (relpath from RM, doc)."""
    out = []
    for base, sub, walk in ((ACTORS, "", False), (os.path.join(ACTORS, "peachs-castle-955"), "peachs-castle-955", False),
                            (os.path.join(ACTORS, "worlds", "midlands"), "worlds/midlands", True)):
        if not os.path.isdir(base):
            continue
        # A world mirror split from a module export is a tree: one directory
        # per Foundry folder (Players/, Important/, ...). Walk it; the flat
        # intake and era packets stay flat.
        found = []
        if walk:
            for cur, subdirs, files in os.walk(base):
                subdirs.sort()
                relsub = os.path.relpath(cur, base)
                for fn in files:
                    found.append((fn, os.path.join(cur, fn), (relsub + "/" if relsub != "." else "") + fn))
        else:
            found = [(fn, os.path.join(base, fn), fn) for fn in os.listdir(base)]
        for fn, path, relname in sorted(found, key=lambda t: t[2]):
            if not fn.startswith("fvtt-Actor-") or not fn.endswith(".json"):
                continue
            if "-NO-SPECIES" in fn:
                continue  # a derived variant of the same sheet, not another sheet
            try:
                doc = read_json(path)
            except Exception:
                continue
            if not isinstance(doc, dict) or not doc.get("name"):
                continue
            rel = "actors/" + (sub + "/" if sub else "") + relname
            out.append((rel, doc))
    return out


# ------------------------------------------------------------ the casting
# Characters whose sheet already exists under another name.
ALIASES = {
    "remi_akamatsu_full_backstory": "Remi",
    "toadsworth_sr": "Toadsworth the Elder, Royal Chamberlain (955 BF)",
    "princess_peach": "Princess Peach (955 BF)",
    "fawful": "Fawful, the Fury",
    "cackletta": "Cackletta, the Beanbean Witch",
    "lyranth": "Lyranth the Sculptor",
    "scorncrow": "The Scorncrow",
    "vaxillus_the_beastmaster": "Vaxillus Loumaal",
    "azure_rakasha": "Azure (Feywild Theater State)",
    "the_oracle": "The Oracle",
    "orange_t": "Orange T",
    "lady_aurelian": "Lady Aurelian",
    "mossy": "Steel Defender",
    "dan_the_toad": "Feyward Dan",
    "archie_miser": "Archie Miser",
    "markop": "Markop Judi",
    "bowser": "Bowser",
    "usk": "Usk",
    "green_t": "Green T",
    "toad_lee": "Toad Lee",
}
# Characters that are deliberately not statted.
SKIP = {
    "mike": "the GM, not a character — the record is a superseded placeholder",
    "miser_family": "a collective (the Miser household), not one creature",
    "sans_family": "a collective (the Snowdin Bone-Line registry); its members are statted individually",
    "kremlings": "a collective (the Kremling Krew); King K. Rool carries the sheet",
    "rakasha": "a people, not a creature; Chief Thornpaw and Azure carry sheets",
    "cosmic_jester": "a cosmic entity the archive files as beyond statting",
}
# Ledger factions that make a character a member of the party.
PARTY_FACTIONS = {"disaster_inc", "disaster_inc_allies"}


def norm(text):
    """The normalisation both the builder and the checker apply before a
    quote is matched: markdown headings dropped, emphasis marks removed,
    whitespace collapsed."""
    lines = [ln for ln in str(text or "").replace("\\n", "\n").split("\n")
             if not ln.strip().startswith("#")]
    t = "\n".join(lines)
    t = re.sub(r"[*_`>]", "", t)
    t = t.replace("\u2019", "'").replace("\u2018", "'")
    return re.sub(r"\s+", " ", t).strip()


ARTICLE_FIELDS = ("title", "race", "affiliation", "status", "summary", "description")


def article_text(c):
    """Everything the character article prints, one normalised string per
    field, in reading order. A quote must sit inside a single field."""
    return [norm(c.get(k) or "") for k in ARTICLE_FIELDS if c.get(k)]


ABBREV = re.compile(r"(?:\b(?:Mr|Mrs|Ms|Dr|Prof|St|Mt|vs|etc|No|Lt|Sgt|Capt|Gen|Col|Jr|Sr)|\b[A-Z])\.$")


def sentences(text):
    """Split on sentence punctuation, but not after Mr./Dr./E./K. style abbreviations."""
    out, start = [], 0
    for m in re.finditer(r"(?<=[.!?])\s+", text):
        if ABBREV.search(text[start:m.start()]):
            continue
        out.append(text[start:m.start()].strip())
        start = m.end()
    out.append(text[start:].strip())
    return [s for s in out if s]


def find_quote(fields, needles, limit=220):
    """First sentence (across the article's fields, in order) containing any
    needle, case-insensitively; trimmed to `limit` characters on a word
    boundary. Returns None when nothing hits."""
    if isinstance(fields, str):
        fields = [fields]
    for n in needles:
        nl = n.lower()
        for field in fields:
            if nl not in field.lower():
                continue
            for s in sentences(field):
                if nl in s.lower():
                    if len(s) > limit:
                        cut = s[:limit]
                        cut = cut[:cut.rfind(" ")] if " " in cut else cut
                        s = cut.rstrip(",;:—- ")
                    return s
    return None


def quote_present(fields, quote):
    q = norm(quote)
    return any(q in f for f in fields)


# ------------------------------------------------------------- archetypes
ROLE_KEYS = {
    "spirit": ["boo ", "boo)", "boo —", "ghost", "spirit", "spectre", "specter", "phantom", "poltergeist", "wraith"],
    "construct": ["construct", "golem", "automaton", "robot", "animated", "steel defender"],
    "beast": ["wolf", "hound", "sheep", "pet ", "animal", "cat-", "bat form"],
    "brute": ["giant", "ogre", "troll", "brute", "kaiju", "behemoth", "bruiser", "knuckles", "bouncer", "muscle"],
    "monster": ["monster", "horror", "abomination", "plant", "mound", "swarm", "spider", "arachnid", "dragon",
                "apocalypse", "eldritch", "vampire", "wyrm", "entity"],
    "caster": ["mage", "wizard", "witch", "sorcer", "warlock", "necromancer", "magikoopa", "spellcaster", "arcan",
               "enchant", "illusion", "fortune", "mystic", "seer", "oracle", "ritual", "magic"],
    "priest": ["priest", "cleric", "prophet", "parson", "inquisitor", "faith", "church", "god's", "divine", "holy",
               "preacher", "monk", "shrine"],
    "healer": ["medic", "healer", "doctor", "physician", "nurse", "clinic", "mender", "surgeon"],
    "officer": ["captain", "commander", "general", "sergeant", "lieutenant", "warden", "chief", "admiral",
                "marshal", "overseer", "forgemaster", "command"],
    "soldier": ["guard", "soldier", "knight", "legion", "warrior", "fighter", "mercenar", "infantry", "watch",
                "trooper", "militia", "pirate", "raider", "bodyguard", "sentinel", "kremling", "patrol", "brawler"],
    "rogue": ["spy", "infiltrat", "assassin", "thief", "poisoner", "courier", "scout", "ninja", "agent",
              "operative", "smuggler", "pickpocket", "burglar", "saboteur", "informant", "impostor", "disguise"],
    "noble": ["lord", "lady", "princess", "prince", "king", "queen", "chancellor", "regent", "steward", "heir",
              "royal", "duke", "baron", "count", "noble", "aristocrat", "speaker", "councillor", "councilor",
              "director", "prosecutor", "diplomat", "ambassador", "mayor", "elder", "matriarch", "patriarch",
              "ruler", "monarch"],
    "scholar": ["professor", "scientist", "researcher", "archivist", "scribe", "chronicler", "typesetter",
                "historian", "librarian", "scholar", "inventor", "engineer", "teacher", "tutor", "clerk",
                "accountant", "quartermaster", "journalist", "editor", "cartographer"],
    "student": ["student", "pupil", "class 2-b", "schoolboy", "schoolgirl", "freshman", "classmate"],
    "civilian": ["waiter", "cook", "chef", "butler", "servant", "maid", "labour", "labor", "worker", "crew",
                 "child", "resident", "cousin", "aunt", "uncle", "brother", "sister", "household", "dependent",
                 "farmer", "merchant", "shopkeeper", "bartender", "citizen", "grandpa", "grandma", "baby",
                 "pet rock", "civilian", "cameo", "model"],
}
ROLE_PRIORITY = ["spirit", "construct", "caster", "priest", "officer", "rogue", "soldier", "healer", "noble",
                 "scholar", "monster", "brute", "beast", "student", "civilian"]
COMBAT_ROLES = {"hero", "boss", "soldier", "officer", "rogue", "caster", "priest", "brute", "monster", "spirit",
                "construct", "beast"}
# Hand corrections where the keyword vote lands wrong.
ROLE_OVERRIDES = {
    "unknown_assassin": "rogue", "boundy": "soldier", "robinson": "soldier", "red_the_kitchen_commander": "soldier",
    "the_hallway_reinforcement_guard": "soldier", "the_plant_lady": "monster", "thejestergoomba": "rogue",
    "elder_meadowlight": "caster", "grandpa_semi": "civilian", "wyatt_the_white_haired_goblin": "soldier",
    "big_r": "soldier", "bully_t": "soldier", "forgemaster_ironspore": "scholar", "smoking_j": "rogue",
    "merric": "soldier", "piktor_deldkur_the_third": "soldier", "mistveil": "rogue", "valorian_stormweave": "caster",
    "dracule_mihawk": "soldier", "sensei": "scholar", "gabriel_freddy": "spirit",
}

ROLES = {
    # scores (str dex con int wis cha), proficient saves, trained skills, hp/ac nudges, default weapon
    "hero": dict(sc=(16, 16, 16, 12, 13, 14), saves=("dex", "con"), skills={"ath": 1, "acr": 1, "prc": 1}, hp=1.1, ac=1, weapon="fists"),
    "boss": dict(sc=(18, 12, 16, 12, 12, 15), saves=("str", "con"), skills={"ath": 1, "itm": 1}, hp=1.25, ac=1, weapon="greatsword"),
    "soldier": dict(sc=(15, 12, 14, 10, 11, 10), saves=("str", "con"), skills={"ath": 1, "prc": 1}, hp=1.0, ac=1, weapon="spear"),
    "officer": dict(sc=(15, 13, 14, 12, 13, 14), saves=("str", "wis"), skills={"ath": 1, "prc": 1, "per": 1, "itm": 1}, hp=1.05, ac=1, weapon="sabre"),
    "rogue": dict(sc=(10, 16, 12, 13, 13, 12), saves=("dex", "int"), skills={"ste": 2, "slt": 1, "dec": 1, "prc": 1}, hp=0.9, ac=0, weapon="dagger"),
    "caster": dict(sc=(9, 13, 12, 16, 13, 12), saves=("int", "wis"), skills={"arc": 1, "his": 1, "ins": 1}, hp=0.8, ac=-1, weapon="staff", spells="arcane"),
    "priest": dict(sc=(10, 11, 13, 12, 16, 13), saves=("wis", "cha"), skills={"rel": 1, "med": 1, "ins": 1, "per": 1}, hp=0.9, ac=0, weapon="mace", spells="divine"),
    "healer": dict(sc=(9, 12, 12, 14, 15, 12), saves=("wis",), skills={"med": 2, "ins": 1}, hp=0.8, ac=-1, weapon="dagger"),
    "noble": dict(sc=(10, 11, 11, 13, 13, 16), saves=("cha", "wis"), skills={"per": 1, "dec": 1, "ins": 1, "his": 1}, hp=0.8, ac=-1, weapon="rapier"),
    "scholar": dict(sc=(8, 11, 11, 17, 14, 11), saves=("int",), skills={"his": 2, "inv": 1, "arc": 1, "ins": 1}, hp=0.7, ac=-2, weapon="dagger"),
    "civilian": dict(sc=(10, 10, 10, 10, 10, 10), saves=(), skills={}, hp=0.7, ac=-2, weapon="club"),
    "student": dict(sc=(9, 12, 10, 12, 10, 11), saves=(), skills={"inv": 1}, hp=0.7, ac=-2, weapon="fists"),
    "brute": dict(sc=(18, 10, 17, 6, 10, 7), saves=("str",), skills={"ath": 1}, hp=1.3, ac=0, weapon="slam"),
    "monster": dict(sc=(16, 14, 15, 8, 12, 9), saves=("con",), skills={"prc": 1}, hp=1.2, ac=0, weapon="claws"),
    "spirit": dict(sc=(7, 15, 11, 11, 13, 15), saves=("wis", "cha"), skills={"ste": 1, "prc": 1}, hp=0.9, ac=0, weapon="withering touch"),
    "construct": dict(sc=(16, 10, 16, 8, 10, 5), saves=(), skills={}, hp=1.2, ac=2, weapon="slam"),
    "beast": dict(sc=(14, 14, 13, 4, 12, 6), saves=(), skills={"prc": 1}, hp=1.0, ac=0, weapon="bite"),
}
ROLE_LABEL = {"hero": "hero", "boss": "boss", "soldier": "soldier", "officer": "officer", "rogue": "operative",
              "caster": "spellcaster", "priest": "priest", "healer": "healer", "noble": "noble", "scholar": "scholar",
              "civilian": "civilian", "student": "student", "brute": "brute", "monster": "monster",
              "spirit": "spirit", "construct": "construct", "beast": "beast"}
DEFAULT_CR = {"hero": 3, "boss": 3, "officer": 2, "soldier": 0.5, "rogue": 1, "caster": 2, "priest": 1,
              "healer": 0.25, "noble": 0.125, "scholar": 0.125, "civilian": 0, "student": 0, "brute": 2,
              "monster": 2, "spirit": 1, "construct": 1, "beast": 0.5}


def classify(c):
    if c["id"] in ROLE_OVERRIDES:
        return ROLE_OVERRIDES[c["id"]]
    aff = (c.get("affiliation") or "").lower()
    if "classroom 2-b" in aff and "advisor" not in aff:
        return "student"
    fields = [(c.get("title") or "", 3), (c.get("affiliation") or "", 2), (c.get("race") or "", 2),
              (c.get("summary") or "", 1), ((c.get("description") or "")[:1500], 1)]
    score = {r: 0 for r in ROLE_KEYS}
    for text, w in fields:
        low = " " + text.lower() + " "
        for role, keys in ROLE_KEYS.items():
            for k in keys:
                if k in low:
                    score[role] += w
    best = max(score.values())
    if best == 0:
        return "civilian"
    for r in ROLE_PRIORITY:
        if score[r] == best:
            return r
    return "civilian"


SPECIES = [
    # (needle in race, type, subtype, size, walk, extra)
    ("skeleton", "monstrosity", "Bone-Line kin", "med", 30, dict(dv=60, langs=("common",))),
    ("bone-line", "monstrosity", "Bone-Line kin", "med", 30, dict(dv=60)),
    ("boo", "undead", "Boo", "med", 0, dict(fly=40, hover=True, dv=60, incorporeal=True)),
    ("ghost", "undead", "spirit", "med", 0, dict(fly=40, hover=True, dv=60, incorporeal=True)),
    ("spirit", "undead", "spirit", "med", 0, dict(fly=40, hover=True, dv=60, incorporeal=True)),
    ("vampire", "undead", "vampire", "med", 30, dict(dv=120)),
    ("magikoopa", "humanoid", "Koopa", "med", 30, dict(dv=60)),
    ("koopa", "humanoid", "Koopa", "med", 30, dict()),
    ("kremling", "humanoid", "Kremling", "med", 30, dict(swim=30)),
    ("penguin", "humanoid", "Dreamlander", "med", 30, dict(swim=20)),
    ("rakasha", "humanoid", "Rakasha", "med", 30, dict(dv=60)),
    ("centaur", "monstrosity", "centaur", "lg", 40, dict()),
    ("plant", "plant", "", "lg", 20, dict(dv=60)),
    ("construct", "construct", "", "med", 30, dict(dv=60, construct=True)),
    ("machine", "construct", "", "med", 30, dict(dv=60, construct=True)),
    ("dragon", "dragon", "", "lg", 40, dict(fly=60, dv=120)),
    ("sheep", "beast", "", "med", 30, dict()),
    ("bat", "beast", "", "med", 20, dict(fly=40, dv=60)),
    ("wolf", "beast", "", "med", 40, dict(dv=60)),
    ("fairy", "fey", "", "tiny", 10, dict(fly=30, dv=60)),
    ("fey", "fey", "", "med", 30, dict(dv=60)),
    ("goblin", "humanoid", "goblinoid", "sm", 30, dict(dv=60, langs=("common", "goblin"))),
    ("dwarf", "humanoid", "dwarf", "med", 25, dict(dv=60, langs=("common", "dwarvish"))),
    ("elf", "humanoid", "elf", "med", 30, dict(dv=60, langs=("common", "elvish"))),
    ("toad", "humanoid", "Toad", "sm", 25, dict()),
    ("human", "humanoid", "human", "med", 30, dict()),
    ("mazebound", "humanoid", "Mazebound", "med", 30, dict(dv=60)),
    ("eldritch", "aberration", "", "sm", 30, dict(fly=30, dv=120)),
    ("underground", "monstrosity", "Underground monster", "med", 30, dict(dv=60)),
    ("monster", "monstrosity", "", "med", 30, dict(dv=60)),
]


def species_of(c):
    race = (c.get("race") or "").lower()
    name = (c.get("name") or "").lower()
    for needle, tv, st, size, walk, extra in SPECIES:
        if needle in race:
            out = dict(type=tv, subtype=st, size=size, walk=walk, fly=0, swim=0, hover=False, dv=0,
                       langs=("common",), incorporeal=False, construct=False)
            out.update(extra)
            return out
    if "baby" in name or "child" in name:
        return dict(type="humanoid", subtype="", size="sm", walk=25, fly=0, swim=0, hover=False, dv=0,
                    langs=("common",), incorporeal=False, construct=False)
    return dict(type="humanoid", subtype="", size="med", walk=30, fly=0, swim=0, hover=False, dv=0,
                langs=("common",), incorporeal=False, construct=False)


# ------------------------------------------------------- weapon catalogue
# name -> (icon, damage die, damage type, kind, extra kwargs for attack())
WEAPONS = {
    "fists": ("fist", 4, "bludgeoning", "melee", dict(wtype="natural")),
    "slam": ("fist", 8, "bludgeoning", "melee", dict(wtype="natural")),
    "claws": ("claw", 6, "slashing", "melee", dict(wtype="natural")),
    "bite": ("bite", 6, "piercing", "melee", dict(wtype="natural")),
    "withering touch": ("skull", 6, "necrotic", "melee", dict(wtype="natural", ability="cha")),
    "dagger": ("dagger", 4, "piercing", "melee", dict(props=["fin", "lgt", "thr"], rng=(20, 60), ability="dex")),
    "club": ("club", 4, "bludgeoning", "melee", dict(props=["lgt"])),
    "staff": ("staff", 6, "bludgeoning", "melee", dict(props=["ver"], versatile=(1, 8, ["bludgeoning"]))),
    "cane": ("cane", 4, "bludgeoning", "melee", dict(props=["lgt"])),
    "spear": ("spear", 6, "piercing", "melee", dict(props=["thr", "ver"], rng=(20, 60), versatile=(1, 8, ["piercing"]))),
    "halberd": ("halberd", 10, "slashing", "melee", dict(props=["hvy", "rch", "two"], reach=10, wtype="martialM")),
    "sabre": ("sabre", 8, "slashing", "melee", dict(wtype="martialM", props=["fin"], ability="dex")),
    "shortsword": ("shortsword", 6, "piercing", "melee", dict(wtype="martialM", props=["fin", "lgt"], ability="dex")),
    "rapier": ("sabre", 8, "piercing", "melee", dict(wtype="martialM", props=["fin"], ability="dex")),
    "scimitar": ("scimitar", 6, "slashing", "melee", dict(wtype="martialM", props=["fin", "lgt"], ability="dex")),
    "greatsword": ("greatsword", 12, "slashing", "melee", dict(wtype="martialM", props=["hvy", "two"])),
    "axe": ("axe", 8, "slashing", "melee", dict(wtype="martialM", props=["ver"], versatile=(1, 10, ["slashing"]))),
    "hammer": ("hammer", 8, "bludgeoning", "melee", dict(wtype="martialM", props=["ver"], versatile=(1, 10, ["bludgeoning"]))),
    "maul": ("maul", 12, "bludgeoning", "melee", dict(wtype="martialM", props=["hvy", "two"])),
    "mace": ("mace", 6, "bludgeoning", "melee", dict()),
    "sickle": ("sickle", 4, "slashing", "melee", dict(props=["lgt"])),
    "cleaver": ("cleaver", 6, "slashing", "melee", dict(props=["lgt"])),
    "pickaxe": ("pickaxe", 8, "piercing", "melee", dict(wtype="martialM")),
    "whip": ("whip", 4, "slashing", "melee", dict(wtype="martialM", props=["fin", "rch"], reach=10, ability="dex")),
    "trident": ("trident", 6, "piercing", "melee", dict(wtype="martialM", props=["thr", "ver"], rng=(20, 60), versatile=(1, 8, ["piercing"]))),
    "crossbow": ("crossbow", 8, "piercing", "ranged", dict(wtype="simpleR", props=["amm", "lod", "two"], rng=(80, 320), ability="dex")),
    "bow": ("bow", 6, "piercing", "ranged", dict(wtype="simpleR", props=["amm", "two"], rng=(80, 320), ability="dex")),
    "pistol": ("pistol", 10, "piercing", "ranged", dict(wtype="martialR", props=["amm", "lod"], rng=(30, 90), ability="dex")),
    "cannon": ("cannon", 10, "bludgeoning", "ranged", dict(wtype="martialR", props=["amm", "lod", "two"], rng=(60, 240), ability="dex")),
}
WEAPON_WORDS = [
    ("pistol", ["pistol", "revolver", "handgun"]), ("cannon", ["cannon"]), ("crossbow", ["crossbow"]),
    ("bow", ["longbow", "shortbow", "bow", "arrow"]), ("greatsword", ["greatsword", "two-handed sword", "claymore"]),
    ("halberd", ["halberd", "pike", "polearm", "glaive"]), ("trident", ["trident"]), ("whip", ["whip"]),
    ("axe", ["axe"]), ("maul", ["maul", "sledge"]), ("hammer", ["hammer"]), ("mace", ["mace", "flail"]),
    ("sickle", ["sickle", "scythe"]), ("cleaver", ["cleaver", "kitchen knife", "chef's knife"]),
    ("pickaxe", ["pickaxe", "pick-axe", "mining pick"]), ("rapier", ["rapier", "fencing"]),
    ("scimitar", ["scimitar", "cutlass", "curved blade"]), ("sabre", ["sabre", "saber", "longsword", "broadsword", "sword", "swordsman"]),
    ("shortsword", ["shortsword", "short sword"]), ("spear", ["spear", "lance", "javelin"]),
    ("staff", ["quarterstaff", "mage staff", "wizard's staff", "his staff", "her staff", "wand"]), ("cane", ["cane", "walking stick"]),
    ("dagger", ["dagger", "knife", "knives", "stiletto", "shiv"]),
    ("club", ["club", "cudgel", "baton", "truncheon"]), ("claws", ["claw", "talon"]), ("bite", ["fang", "bite"]),
]


def pick_weapon(role, fields):
    """Whole-word match (optional plural) so 'lance' does not fire on 'glance'."""
    low = " ".join(fields).lower()
    for w, words in WEAPON_WORDS:
        for word in words:
            m = re.search(r"\b" + re.escape(word.strip()) + r"(?:s|es)?\b", low)
            if m:
                return w, find_quote(fields, [m.group(0)])
    return ROLES[role]["weapon"], None


# ------------------------------------------------------ feature catalogue
# (name, icon, keywords, html, options). {dc}/{prof}/{half} are filled per sheet.
FEATURES = [
    ("Shadow Step", "stealth", ["shortcut", "teleport", "blink", "appear at the end"],
     "<p>Bonus action: teleport up to 30 feet to an unoccupied space it can see that is in dim light or darkness. The archive records arrivals nobody saw walk in.</p>", dict(min_cr=1)),
    ("Hidden in Plain Sight", "stealth", ["invisib", "unseen", "stealth", "sneak", "crept", "slipped past", "infiltrat", "disguise"],
     "<p>Advantage on Dexterity (Stealth) checks, and a Deception check made to pass as someone else is made with advantage while the disguise holds.</p>", dict()),
    ("Sneak Attack", "dagger", ["assassin", "ambush", "from behind", "stabbed", "poison"],
     "<p>Once per turn, deals an extra {sneak} damage with a weapon attack against a creature it has advantage against, or that is within 5 feet of one of its allies.</p>", dict(min_cr=0.5, roles={"rogue", "soldier", "officer", "hero"})),
    ("Field Medicine", "heal", ["medic", "bandage", "healer", "nurse", "treated the wound", "first aid", "field surgery", "physician"],
     "<p>As an action, touches a creature and restores {heal} hit points, or ends one disease or the poisoned condition. Usable {uses} times a day.</p>", dict(uses="3", roles={"healer", "priest", "scholar"})),
    ("Leadership", "banner", ["command", "ordered", "led the", "leader", "rally", "orders", "captain", "chief", "marshal"],
     "<p>For 1 minute, allies within 30 feet that can hear it add a d4 to attack rolls and saving throws. Once per short rest.</p>", dict(min_cr=1, roles={"officer", "noble", "boss", "hero", "soldier", "priest"}, uses=("1", "sr"))),
    ("Fire Magic", "firebolt", ["fireball", "fire magic", "flame", "burned", "burning", "scorch", "pyro"],
     "<p>Ranged spell attack (+{atk} to hit), range 60 feet: {firedmg} fire damage. Once a day it can instead throw a 20-foot-radius burst (DC {dc} Dexterity save, {firedmg} fire damage, half on a success).</p>", dict(roles={"caster", "priest", "boss", "hero", "monster", "spirit"})),
    ("Frightful Presence", "fear", ["terrif", "dread", "scariest", "horrif", "intimidat", "menac", "frightening"],
     "<p>Each creature of its choice within 30 feet that can see it must succeed on a DC {dc} Wisdom saving throw or be frightened for 1 minute (repeat the save at the end of each turn). Recharges after a short rest.</p>", dict(min_cr=2, roles={"boss", "monster", "spirit", "brute", "officer", "noble", "caster"})),
    ("Incorporeal Movement", "ghost", ["through walls", "phase", "incorporeal", "ghost", "haunt", "mirror"],
     "<p>Can move through other creatures and objects as if they were difficult terrain; takes 5 (1d10) force damage if it ends its turn inside an object.</p>", dict(roles={"spirit"})),
    ("Silver Tongue", "handshake", ["negotiat", "persuad", "diplomat", "charm", "convinc", "bargain", "treaty", "de-escalat"],
     "<p>Advantage on Charisma (Persuasion) and (Deception) checks made to broker, stall or sell. Once per day it can make one hostile creature treat it as indifferent for 1 minute (DC {dc} Wisdom save negates).</p>", dict(roles={"noble", "scholar", "civilian", "rogue", "officer", "caster", "priest", "healer", "student"})),
    ("Keen Records", "quill", ["archivist", "typesett", "scribe", "librarian", "keeps the ledger", "keeps records", "record-keeper", "chronicler", "catalogu"],
     "<p>Has advantage on Intelligence (History) and (Investigation) checks about anything it has filed, and can recall any document it has read in the last year word for word.</p>", dict(roles={"scholar", "noble", "civilian", "student", "healer", "caster", "priest", "rogue"})),
    ("Pack Tactics", "paw", ["pack", "squad", "fire team", "in pairs", "flank", "brothers"],
     "<p>Has advantage on an attack roll against a creature if at least one of its allies is within 5 feet of the creature and the ally is not incapacitated.</p>", dict(roles={"soldier", "beast", "brute", "monster", "rogue"})),
    ("Guild Spellcasting", "orb", ["spell", "wizard", "mage", "arcane", "magic", "ritual", "enchant", "conjur", "sorcer", "witch"],
     "<p>Spellcasting ability Intelligence (spell save DC {dc}, +{atk} to hit with spell attacks). At will: <em>light, mage hand, prestidigitation, fire bolt</em>. {slots}</p>", dict(roles={"caster"}, unique="spells")),
    ("Faithful Spellcasting", "prayer", ["god", "divine", "pray", "faith", "holy", "bless", "sermon", "oath", "judg"],
     "<p>Spellcasting ability Wisdom (spell save DC {dc}, +{atk} to hit with spell attacks). At will: <em>guidance, sacred flame, thaumaturgy</em>. {dslots}</p>", dict(roles={"priest"}, unique="spells")),
    ("Nimble Escape", "run", ["escaped", "fled", "dodg", "slipped away", "evade", "nimble"],
     "<p>Can take the Disengage or Hide action as a bonus action on each of its turns.</p>", dict(roles={"rogue", "civilian", "student", "scholar", "healer", "noble", "beast"})),
    ("Iron Discipline", "shield", ["legion", "formation", "drill", "shield", "garrison", "stood their ground", "held the line", "discipline"],
     "<p>While within 5 feet of an ally, gains +2 AC and advantage on saving throws against being frightened.</p>", dict(roles={"soldier", "officer", "construct"})),
    ("Brutal Blow", "strike", ["smash", "crush", "slam", "wrestl", "tackl", "punch", "brawl", "thrash"],
     "<p>Once per turn, when it hits with a melee attack, the target takes an extra {brutal} damage and must succeed on a DC {dc} Strength save or be knocked prone.</p>", dict(min_cr=1, roles={"brute", "monster", "soldier", "boss", "hero", "officer", "beast", "construct"})),
    ("Mechanical Aptitude", "wrench", ["repair", "tinker", "mechanic", "wrench", "gadget", "invent", "engineer"],
     "<p>Proficient with tinker's tools (expertise). Can jury-rig a broken mechanism with 1 minute of work and a DC 15 check, or disable one as an action.</p>", dict(roles={"scholar", "civilian", "student", "construct", "rogue", "noble", "monster"})),
    ("Grasping Growth", "vines", ["vine", "root", "spore", "mushroom", "bloom", "overgrowth", "petal"],
     "<p>Ranged spell attack (+{atk} to hit), range 30 feet: {brutal} bludgeoning damage and the target is grappled (escape DC {dc}).</p>", dict(roles={"monster", "caster", "priest"})),
    ("Vampiric Bite", "bite", ["vampire", "fang", "drank", "thrall", "bloodsuck"],
     "<p>Melee attack against a grappled, incapacitated or willing creature: {brutal} piercing plus {brutal} necrotic damage; its hit point maximum is reduced by the necrotic damage and the biter regains that many hit points.</p>", dict(roles={"monster", "noble", "boss", "caster"})),
    ("Unsettling Insight", "eye", ["prophe", "fortune", "foresee", "omen", "divination", "tarot", "predict", "premonition"],
     "<p>Once per day, after any creature within 60 feet rolls a d20, it can make that roll a 1 or a 20 instead; it must declare the outcome before the result is read aloud, and it always phrases it as a rhyme.</p>", dict(roles={"caster", "priest", "scholar", "civilian", "noble"})),
    ("Hard to Kill", "wound", ["won't stay down", "wouldn't stay down", "got back up", "refused to die", "should have died", "left for dead", "survived a", "survived the"],
     "<p>When reduced to 0 hit points but not killed outright, it drops to 1 hit point instead. Once per long rest.</p>", dict(roles=None)),
    ("Loud", "shout", ["shouted", "yelled", "screamed", "roared", "bellowed", "at volume", "loud voice", "loudly", "heckl"],
     "<p>Can be heard clearly up to 300 feet away. As an action, forces one creature within 30 feet to make a DC {dc} Constitution save or be deafened until the end of its next turn.</p>", dict(roles=None)),
    ("Light Fingers", "pickpocket", ["stole", "steal", "robbed", "pickpocket", "wallet", "theft", "loot", "swindle"],
     "<p>Advantage on Dexterity (Sleight of Hand) checks, and may attempt to take a small object from a creature within 5 feet as a bonus action.</p>", dict(roles={"rogue", "civilian", "student", "caster", "noble", "scholar"})),
    ("Flight", "wings", ["flew", "flying", "wings", "glide", "hover", "airborne"],
     "<p>Flying speed 40 feet; can hover.</p>", dict(grant_fly=40, roles={"monster", "spirit", "beast", "boss", "caster", "brute"})),
    ("Courier's Pace", "run", ["courier", "messenger", "dispatch rider", "delivery route", "deliveries"],
     "<p>Speed increased by 10 feet; opportunity attacks against it are made with disadvantage while it is carrying a package.</p>", dict(roles={"rogue", "civilian"})),
    ("Cooks for an Army", "pot", ["cook", "kitchen", "spaghetti", "feeds people", "soup", "baked"],
     "<p>With one hour and ingredients, feeds up to ten creatures; each gains {heal} temporary hit points. Improvised kitchen tools count as simple weapons in its hands.</p>", dict(roles={"civilian", "student", "noble", "scholar", "healer", "soldier"})),
    ("Puzzle Discipline", "key", ["puzzle", "riddle", "maze", "labyrinth", "set a trap", "traps"],
     "<p>Advantage on Intelligence (Investigation) checks to find or defeat traps and puzzles, and can set a simple trap (DC {dc} to notice) in 10 minutes.</p>", dict(roles=None)),
    ("Coin Sense", "coins", ["debt", "profit", "greed", "treasure", "wallet", "gold coin", "haggl"],
     "<p>Knows the market value of anything it can see or hold, and has advantage on Wisdom (Insight) checks to tell whether an offer is a lie.</p>", dict(roles={"civilian", "noble", "rogue", "scholar", "boss", "soldier", "officer"})),
    ("Studio Trained", "mask", ["camera", "studio", "the script", "scripted", "on stage", "performer", "audience", "theater", "theatre", "an actor", "the actor", "actress"],
     "<p>Proficient in Performance (expertise). Once per combat it can declare a scene change: all creatures that can see it must succeed on a DC {dc} Wisdom save or lose their reaction until the start of their next turn.</p>", dict(roles=None)),
]

DISC_HOSTILE = ["hostile", "enemy", "villain", "usurper", "assassin", "impostor", "attacked the party", "fawthful", "iron legion"]


# ----------------------------------------------------------- bespoke cast
# Every hand-authored feature carries `q`: needles that must appear in the
# article; the first sentence containing one is stored as the evidence.
def _f(name, icon, html, q, uses=None):
    return dict(name=name, icon=icon, html=html, q=q, uses=uses)


def _w(name, base, html, q=None, dmg=None, **kw):
    return dict(name=name, base=base, html=html, q=q, dmg=dmg, kw=kw)


BESPOKE = {
    "mario": dict(
        role="hero", cr=5, align="Neutral Good", sc=(16, 18, 16, 11, 13, 15), saves=("dex", "con"),
        skills={"acr": 2, "ath": 1, "prc": 1}, walk=40, ac=15, hp_mult=1.1,
        weapons=[
            _w("Stomp", "fists", "<p>A leaping stomp from above. If Mario moved at least 10 feet straight toward the target first, the target must succeed on a DC 15 Strength save or be knocked prone.</p>",
               q=["stomped", "stomps"], dmg=(2, 6, ["bludgeoning"]), ability="dex", wtype="natural"),
        ],
        features=[
            _f("Prodigious Leap", "up", "<p>Mario's long jump is 30 feet and his high jump 20 feet, with or without a running start. He can jump as part of his movement and takes no damage from falls of 60 feet or less.</p>",
               q=["jump higher than physics should allow"]),
            _f("Multiattack", "strike", "<p>Mario makes two Stomp attacks.</p>", q=["stomped"]),
            _f("Wing Cap (1/Day)", "wings", "<p>Mario gains a flying speed of 60 feet for 10 minutes. The archive's last confirmed sighting has him in the air.</p>",
               q=["wing caps"], uses=("1", "day")),
            _f("Diminished", "hourglass", "<p>Eighty-five years of growing silence. Mario begins any scene with one level of exhaustion that no rest removes while the record of 955 BF stays unanswered; it clears for 1 minute whenever an ally within 30 feet drops to 0 hit points.</p>",
               q=["diminished appearances"]),
            _f("Missing Since 1039 BF", "eye", "<p>This sheet is a reconstruction: the plumber who could do these things was last seen at the Star Fountain in 1039 BF. If he appears at the table, the GM decides how much of this he still is.</p>",
               q=["Star Fountain"]),
        ]),
    "luigi": dict(
        role="hero", cr=4, align="Neutral Good", sc=(12, 17, 13, 14, 15, 11), saves=("dex", "wis"),
        skills={"acr": 1, "inv": 2, "prc": 1, "arc": 1}, walk=35, ac=14, hp_mult=0.95,
        weapons=[
            _w("Poltergust Strobe & Suction", "staff", "<p>Technique, not arcane. Ranged attack, 30 feet, against one creature: on a hit the target takes the damage below, and an undead, spirit or incorporeal target must succeed on a DC 13 Wisdom save or be restrained (pulled toward the nozzle) until the end of Luigi's next turn. A restrained target that is reduced to 0 hit points is contained in the canister instead of destroyed.</p>",
               q=["strobe, suction, containment"], dmg=(2, 6, ["force"]), ability="dex", kind="ranged", cls="weapon", wtype="martialR", rng=(30, None)),
            _w("Flashlight Strobe", "lantern", "<p>Burst of light, 15-foot cone. Creatures in the cone must succeed on a DC 13 Constitution save or be stunned until the end of Luigi's next turn (undead and ghosts have disadvantage). Luigi swings the flashlight like a weapon when he must.</p>",
               q=["stunning ghosts"], dmg=(1, 4, ["radiant"]), ability="dex", wtype="natural"),
        ],
        features=[
            _f("Fear as Method", "fear", "<p>Luigi is frightened often and works anyway. While frightened he can still move toward the source of his fear, and he has advantage on Wisdom (Perception) checks and initiative rolls while frightened.</p>",
               q=["fear processed into procedure"]),
            _f("Containment Procedure", "chains", "<p>When Luigi reduces an incorporeal or undead creature to 0 hit points with the Poltergust it is captured, not destroyed, and can be released or handed to the Mages' Guild. The canister holds three such creatures.</p>",
               q=["containing things he refused to discuss later"]),
            _f("Guild Contractor", "sealed", "<p>Luigi carries a Mages' Guild contract badge. Guild wards treat him as a member; Guild officials expect a report.</p>",
               q=["under Guild contract"]),
            _f("The Shadow Called L", "mask", "<p>Luigi was once Mr. L, and something wearing his clothes has been seen again. Any effect that would charm, possess or dominate Luigi is made at advantage; when he fails such a save the GM may let the Green Thunder answer instead.</p>",
               q=["Mr. L"]),
        ]),
    "princess_daisy": dict(
        role="noble", cr=2, align="Lawful Good", sc=(14, 13, 14, 13, 14, 17), saves=("wis", "cha"),
        skills={"per": 2, "ins": 1, "ath": 1, "itm": 1}, ac=14,
        weapons=[_w("Sarasaland Sabre", "sabre", "<p>A ruler who makes decisions herself, including with a blade.</p>", dmg=(1, 8, ["slashing"]))],
        features=[
            _f("Host of the Summit", "handshake", "<p>Daisy chooses when a room becomes a negotiation. As an action she can end one ongoing hostile effect of charm or fear on an ally within 30 feet, and allies within 30 feet have advantage on Charisma (Persuasion) checks while she is present.</p>",
               q=["hosted the Second Diplomatic Summit"]),
            _f("No Committees", "banner", "<p>Once per short rest, Daisy gives one ally within 30 feet an extra reaction or bonus action this round.</p>",
               q=["without needing to form twelve committees first"]),
        ]),
    "kamek": dict(
        role="caster", cr=2, align="Lawful Evil", sc=(8, 12, 11, 17, 13, 12), saves=("int", "wis"),
        skills={"arc": 2, "his": 1, "dec": 1}, walk=30, fly=0, ac=12,
        weapons=[_w("Wand Bolt", "staff", "<p>Ranged spell attack, 60 feet, a stuttering triangle-square-circle burst.</p>", q=["wizard"], dmg=(2, 8, ["force"]), ability="int", kind="ranged", cls="spell", wtype="natural", rng=(60, None))],
        features=[
            _f("Magikoopa Spellcasting", "orb", "<p>Spellcasting ability Intelligence (spell save DC 13, +5 to hit). At will: <em>mage hand, minor illusion, prestidigitation</em>. 1st level (3 slots): <em>shield, magic missile, charm person</em>. 2nd level (1 slot): <em>misty step</em>. Imprisoned: his broom and his old court authority are gone, and the Wyrm's magic with them.</p>",
               q=["less a wizard and more a mouthpiece"]),
            _f("The Fallen Regent", "crown", "<p>Kamek was stripped of power by Bowser. This sheet is the prisoner, not the 30-foot puppet of the entity under the Valley; Koopa Troop soldiers who recognise him must succeed on a DC 13 Wisdom save or hesitate (lose their reaction) the first time he gives an order.</p>",
               q=["Stripped of power", "eternal imprisonment"]),
        ]),
    "king_boo": dict(
        role="spirit", cr=2, align="Chaotic Evil", sc=(10, 14, 13, 14, 12, 18), saves=("wis", "cha"),
        skills={"ste": 2, "dec": 1, "itm": 1}, walk=0, fly=40, hover=True, ac=13, dv=120,
        dr=["bludgeoning", "piercing", "slashing"], dr_bypass=["mgc"], di=["cold", "necrotic", "poison"],
        ci=["charmed", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        weapons=[_w("Crown's Chill", "withering touch", "<p>Melee spell attack of cold and dread.</p>", q=["crown"], dmg=(2, 8, ["necrotic"]), ability="cha", wtype="natural")],
        features=[
            _f("Incorporeal Movement", "ghost", "<p>Can move through other creatures and objects as if they were difficult terrain; takes 5 (1d10) force damage if it ends its turn inside an object. He is on the wrong side of every mirror.</p>",
               q=["mirror"]),
            _f("Sovereign of the Boo Collective", "crown", "<p>Boos within 60 feet that can see the crown have advantage on saving throws against being turned or frightened, and King Boo can speak through any of them.</p>",
               q=["sovereign authority over the Boo collective"]),
            _f("Watcher Across Planes", "eye", "<p>Once per day, King Boo can see and hear through any mirror or portrait he has touched, on any plane, for 10 minutes. The archive confirms influence across multiple planes; it does not know the limit.</p>",
               q=["multiple planes"]),
            _f("Terrifying Visage", "fear", "<p>Each creature of his choice within 30 feet that can see him must succeed on a DC 14 Wisdom save or be frightened for 1 minute. Luigi has advantage on this save and knows it.</p>",
               q=["ghost-hunting career"]),
        ]),
    "kirby": dict(
        role="hero", cr=1, align="Neutral Good", sc=(14, 16, 16, 6, 12, 14), saves=("con",),
        skills={"acr": 1}, size="sm", walk=30, fly=30, hover=True, ac=13, hp_mult=1.3,
        weapons=[_w("Inhale", "inhale", "<p>Ranged attack, 15-foot line. On a hit a Medium or smaller target is pulled 10 feet toward Kirby and, if it ends adjacent, must succeed on a DC 12 Strength save or be swallowed (restrained, blinded, takes the damage again at the start of each of Kirby's turns until spat out or Kirby takes 10 damage in one turn).</p>",
               q=["inhale virtually anything"], dmg=(1, 8, ["bludgeoning"]), ability="dex", kind="ranged", wtype="natural", rng=(15, None))],
        features=[
            _f("Copy Ability", "star", "<p>When Kirby swallows a creature or object with a distinct power (fire, blade, lightning, stone, ice, and so on) he spits it out and gains a copy of that power until he takes it off or uses Inhale again: one attack or trait of the GM's choosing, usually better than the original.</p>",
               q=["Copy Abilities"]),
            _f("Warp Star", "star", "<p>Once per day Kirby summons the Warp Star and gains a flying speed of 120 feet until the end of his next turn. It takes him to where he needs to be.</p>",
               q=["Warp Star takes Kirby"], uses=("1", "day")),
            _f("Not the Whole Story", "eye", "<p>The ledger has Kirby at level 1 and a power rating of 16, the highest in the archive. CR 1 is the ledger's number, not the hill's: when reality creaks the GM may add any feature from any sheet in this folder to Kirby for one scene.</p>",
               q=["nobody has found Kirby's limits"]),
        ]),
    "king_dedede": dict(
        role="boss", cr=2, align="Chaotic Neutral", sc=(18, 10, 16, 9, 10, 14), saves=("str", "con"),
        skills={"itm": 1, "prf": 1}, size="med", walk=30, ac=14, hp_mult=1.2,
        weapons=[_w("Royal Mallet", "maul", "<p>The hammer is the policy.</p>", q=["monarch of Dreamland"], dmg=(2, 6, ["bludgeoning"]), props=["hvy", "two"], wtype="martialM")],
        features=[
            _f("Diplomatic Incident", "shout", "<p>Dedede says the quiet part at volume. Once per short rest, every creature within 60 feet that can hear him must succeed on a DC 12 Wisdom save or spend its next reaction arguing with him.</p>",
               q=["diplomatically radioactive"]),
            _f("Term Limits Not Observed", "crown", "<p>While an ally of Dreamland can see him, Dedede has advantage on saving throws against being frightened; he has never been removed from anything.</p>",
               q=["term limits"]),
        ]),
    "meta_knight": dict(
        role="officer", cr=2, align="Lawful Neutral", sc=(14, 18, 14, 14, 15, 12), saves=("dex", "wis"),
        skills={"acr": 1, "prc": 1, "ins": 1, "ath": 1}, size="sm", walk=30, fly=40, ac=16,
        weapons=[_w("Galaxia", "sabre", "<p>A masked swordsman's blade; finesse.</p>", q=["masked warrior"], dmg=(1, 8, ["slashing"]), props=["fin"], wtype="martialM", ability="dex")],
        features=[
            _f("Multiattack", "strike", "<p>Meta Knight makes two Galaxia attacks.</p>", q=["masked warrior"]),
            _f("Cape of Wings", "wings", "<p>His cape becomes wings: flying speed 40 feet. While flying he can use his reaction to halve the damage of one attack that hits him.</p>", q=["masked warrior"]),
            _f("The Only Adult", "banner", "<p>Allies within 30 feet who can see Meta Knight cannot be surprised and add +2 to initiative. He is composing a resignation letter.</p>",
               q=["never taking a sick day"]),
        ]),
    "professor_e_gadd": dict(
        role="scholar", cr=1, align="Neutral", sc=(7, 12, 10, 20, 14, 11), saves=("int",),
        skills={"arc": 2, "inv": 2, "his": 1}, walk=25, ac=11,
        weapons=[_w("Prototype Strobe", "lantern", "<p>Ranged attack with a device that is not finished.</p>", q=["invented the Poltergust"], dmg=(1, 10, ["radiant"]), ability="int", kind="ranged", wtype="natural", rng=(30, None))],
        features=[
            _f("Paratechnologist", "wrench", "<p>Expertise with tinker's tools. Given an hour, parts and a captured ghost, Gadd can build one device from his catalogue (Poltergust, Dark-Light Device, Dual Scream, Pixelator) at the GM's discretion; the Pixelator remains classified.</p>",
               q=["Pixelator"]),
            _f("Trained Luigi Personally", "book", "<p>Luigi and any Poltergust operator Gadd has trained can reroll one failed check with Gadd's devices per short rest while he can speak to them.</p>",
               q=["trained Luigi personally"]),
            _f("Twenty-Three Other Devices", "sealed", "<p>Most of his inventory is described only in fragmentary documentation. Once per session the GM may hand Gadd one unclassified gadget whose effect the table discovers on use.</p>",
               q=["twenty-three other devices"]),
        ]),
    "mr_l": dict(
        role="rogue", cr=3, align="Chaotic Neutral", sc=(12, 18, 13, 14, 12, 15), saves=("dex", "cha"),
        skills={"acr": 2, "ste": 1, "dec": 2, "prf": 1}, walk=40, ac=15,
        weapons=[_w("Green Thunder Strike", "lightning", "<p>Melee attack wrapped in lime lightning.</p>", q=["Green Thunder"], dmg=(2, 6, ["lightning"]), ability="dex", wtype="natural")],
        features=[
            _f("Multiattack", "strike", "<p>Mr. L makes two Green Thunder Strikes.</p>", q=["Green Thunder"]),
            _f("Three Copies", "mask", "<p>Once per day, Mr. L splits into three identical images for 1 minute (as <em>mirror image</em>); witnesses at Star Hill Clinic counted three of him on a staircase.</p>",
               q=["three copies"], uses=("1", "day")),
            _f("Reciter", "shout", "<p>Mr. L recites under fire. While he is speaking verse, he has advantage on Dexterity saving throws and attackers who can hear him have disadvantage on opportunity attacks against him.</p>",
               q=["reciting", "recit"]),
            _f("Luigi's Shadow", "eye", "<p>Any effect that would reveal Mr. L's true identity shows Luigi's face. Luigi, if present, must succeed on a DC 13 Wisdom save at the start of each of his turns or be unable to attack Mr. L this turn.</p>",
               q=["Luigi's darkest chapter"]),
        ]),
    "bryan": dict(
        role="priest", cr=3, align="Lawful Neutral", sc=(14, 10, 14, 11, 18, 13), saves=("wis", "cha"),
        skills={"rel": 2, "ins": 1, "sur": 1, "itm": 1}, size="sm", walk=25, ac=15,
        weapons=[_w("Instrument of Judgment", "mace", "<p>A heavy, blessed mace.</p>", q=["Instrument of Judgment", "judgment"], dmg=(1, 8, ["bludgeoning"]), props=["ver"], versatile=(1, 10, ["bludgeoning"]))],
        features=[
            _f("Toad God's Mandate", "prayer", "<p>Spellcasting ability Wisdom (spell save DC 14, +6 to hit). At will: <em>guidance, sacred flame, thaumaturgy</em>. 1st level (4 slots): <em>bless, command, cure wounds, shield of faith</em>. 2nd level (2 slots): <em>hold person, spiritual weapon</em>.</p>",
               q=["divine instruction"]),
            _f("Divine Judgment", "beam", "<p>Once per turn, when Bryan hits a creature he has named as judged, the attack deals an extra 2d8 radiant damage. He names one creature per long rest and believes the choice is not his.</p>",
               q=["divine judgment demands action"]),
            _f("Power Rating 100", "star", "<p>The ledger gives Bryan a power rating of 100 and a level of 3. The sheet follows the level; the rating is the god behind him, and the GM may answer one of Bryan's prayers per session with anything.</p>",
               q=["Toad God"]),
        ]),
    "mystic_morel": dict(
        role="caster", cr=3, align="Chaotic Neutral", sc=(8, 16, 12, 14, 16, 17), saves=("wis", "cha"),
        skills={"slt": 2, "prf": 2, "dec": 1, "ins": 1, "arc": 1}, size="sm", walk=25, ac=13,
        weapons=[_w("Thrown Card", "cards", "<p>Ranged spell attack, 30 feet: a card from the Oracle's Deck that cuts.</p>", q=["The Oracle's Deck"], dmg=(2, 8, ["psychic"]), ability="cha", kind="ranged", cls="spell", wtype="natural", rng=(30, None))],
        features=[
            _f("Rhyming Prophecy", "eye", "<p>Once per day, Morel reads a creature's past, present and future with disturbing accuracy: the GM answers one question about each truthfully, in rhyme. After the reading Morel knows one secret the target would pay to keep.</p>",
               q=["rhyming prophecies"]),
            _f("Steals Your Wallet Too", "pickpocket", "<p>Advantage on Dexterity (Sleight of Hand) checks. When a creature is charmed, restrained or pinned within 5 feet of him, Morel can take one object from it as a bonus action without a check.</p>",
               q=["robbed Archie Miser while he was pinned to a bed"]),
            _f("Artifact Dealer", "sealed", "<p>Morel distributes magical artifacts. Once per session he can produce one uncommon magic item from his coat; it works for one scene and is usually not what it was sold as.</p>",
               q=["distributes magical artifacts"]),
            _f("Sorcerous Song", "orb", "<p>Spellcasting ability Charisma (spell save DC 13, +5 to hit). At will: <em>minor illusion, vicious mockery, mage hand</em>. 1st level (4 slots): <em>charm person, disguise self, sleep</em>. 2nd level (2 slots): <em>suggestion, invisibility</em>.</p>",
               q=["singing Toad"]),
        ]),
    "chief_thornpaw": dict(
        role="officer", cr=3, align="Neutral", sc=(17, 14, 16, 12, 15, 14), saves=("str", "wis"),
        skills={"sur": 2, "prc": 1, "itm": 1, "ins": 1}, walk=35, ac=15, dv=60,
        weapons=[_w("Claws", "claws", "<p>Rakasha claws.</p>", q=["Rakasha"], dmg=(2, 6, ["slashing"]), wtype="natural"),
                 _w("Hunting Spear", "spear", "<p>Thrown or thrust.</p>", q=["Rakasha"], dmg=(1, 8, ["piercing"]), props=["thr", "ver"], rng=(20, 60), versatile=(1, 10, ["piercing"]))],
        features=[
            _f("Multiattack", "strike", "<p>Thornpaw makes two attacks: claws and spear, or two claws.</p>", q=["Rakasha"]),
            _f("Chief by Wisdom and Strength", "banner", "<p>Rakasha within 30 feet that can see Thornpaw have advantage on saving throws against being frightened, and once per short rest he can let one of them take an extra action.</p>",
               q=["demonstrated wisdom and strength"]),
            _f("Eighty-Five Years of Narrative", "eye", "<p>Thornpaw has had eighty-five years to decide what the story is. He has advantage on Charisma (Deception) and (Persuasion) checks about the assassination of 955 BF, and Insight checks against him on that subject are made at disadvantage.</p>",
               q=["eighty-five years to construct whatever narrative"]),
        ]),
    "captain_toadette": dict(
        role="officer", cr=3, align="Lawful Neutral", sc=(15, 16, 15, 13, 14, 15), saves=("str", "dex"),
        skills={"ath": 1, "itm": 2, "prc": 1, "sur": 1}, size="sm", walk=25, ac=16,
        weapons=[_w("Restorer's Pick", "pickaxe", "<p>A climbing pick kept sharp for people.</p>", q=["military commander"], dmg=(1, 8, ["piercing"]), wtype="martialM"),
                 _w("Hand Crossbow", "crossbow", "<p>Loaded before she enters the room.</p>", q=["military commander"], dmg=(1, 6, ["piercing"]), kind="ranged", wtype="martialR", props=["amm", "lgt", "lod"], rng=(30, 120), ability="dex")],
        features=[
            _f("Multiattack", "strike", "<p>Toadette makes two attacks.</p>", q=["military commander"]),
            _f("Ruthless Restoration", "banner", "<p>Loyalist soldiers within 30 feet add a d4 to attack rolls while she is giving orders, and any ally reduced to 0 hit points within that radius may immediately make one weapon attack before falling.</p>",
               q=["military commander of the Peach Loyalists"]),
            _f("Scarier Than Bowser", "fear", "<p>Once per short rest, Toadette fixes one creature within 30 feet with a look: it must succeed on a DC 13 Wisdom save or be frightened of her for 1 minute. Waluigi failed.</p>",
               q=["felt LESS uneasy"]),
        ]),
    "chancellor_toadsworth": dict(
        role="noble", cr=0.5, align="Lawful Neutral", sc=(9, 10, 11, 15, 14, 16), saves=("wis", "cha"),
        skills={"per": 2, "dec": 2, "his": 1, "ins": 1}, size="sm", walk=25, ac=11,
        weapons=[_w("Chancellor's Cane", "cane", "<p>His father's cane.</p>", q=["son of Toadsworth the Elder"], dmg=(1, 4, ["bludgeoning"]), props=["lgt"])],
        features=[
            _f("Official Narrative", "sealed", "<p>While Toadsworth speaks for the Regency, any Charisma check against him that would make him admit a fact about 955 BF is made at disadvantage, and requests for sealed archives are denied as a bonus action.</p>",
               q=["maintaining the Regency's official narrative"]),
            _f("The Seals", "key", "<p>Toadsworth carries the Regency seal. A document he seals is treated as genuine by every Mushroom Kingdom official until proven otherwise.</p>",
               q=["sealed archives"]),
        ]),
    "dan": dict(
        role="soldier", cr=4, align="Chaotic Neutral", sc=(16, 13, 16, 12, 11, 12), saves=("str", "con"),
        skills={"ath": 2, "itm": 1, "sur": 1}, size="sm", walk=25, ac=15, hp_mult=1.1,
        weapons=[_w("One-Armed Blade", "sabre", "<p>He fights one-handed now.</p>", q=["lost his arm"], dmg=(1, 8, ["slashing"]), wtype="martialM")],
        features=[
            _f("Multiattack", "strike", "<p>Dan makes two One-Armed Blade attacks.</p>", q=["lost his arm"]),
            _f("The Arm He Lost", "wound", "<p>Dan cannot wield two-handed weapons or a shield. He has advantage on saving throws against being disarmed; there is only one hand to take anything from.</p>",
               q=["Chopped off Dan's arm"]),
            _f("The Staff That Turned", "fireball", "<p>Dan knows what a corrupted staff feels like. He has advantage on saving throws against being charmed or possessed by an object, and he will not pick up a mage staff. Thirteen of his own people are the reason.</p>",
               q=["killed thirteen of his own people"]),
        ]),
    "bones": dict(
        role="rogue", cr=4, align="Chaotic Good", sc=(12, 18, 13, 15, 15, 14), saves=("dex", "int"),
        skills={"ste": 2, "dec": 2, "slt": 1, "inv": 1, "prc": 1}, walk=30, ac=15,
        weapons=[_w("Infiltrator's Knife", "dagger", "<p>Finesse, light, thrown.</p>", q=["master infiltrator"], dmg=(1, 4, ["piercing"]), props=["fin", "lgt", "thr"], rng=(20, 60), ability="dex"),
                 _w("Borrowed Guard Spear", "spear", "<p>Whatever the disguise came with.</p>", q=["guard disguise"], dmg=(1, 6, ["piercing"]), props=["thr", "ver"], rng=(20, 60), versatile=(1, 8, ["piercing"]))],
        features=[
            _f("Sneak Attack", "dagger", "<p>Once per turn, Bones deals an extra 3d6 damage with a weapon attack against a creature he has advantage against, or that is within 5 feet of one of his allies.</p>",
               q=["master infiltrator"]),
            _f("Master of Disguise", "mask", "<p>Bones can assemble a convincing disguise in 1 minute from what is at hand. Creatures must succeed on a DC 15 Wisdom (Insight) check to see through it, and his real identity has never been confirmed.</p>",
               q=["skilled at disguise"]),
            _f("Keeps Going Back", "run", "<p>Bones survived Aegis Command, Order 120 and Corvinarus custody. He can take the Disengage or Hide action as a bonus action, and once per long rest he automatically succeeds on a saving throw to escape a grapple, bind or cell.</p>",
               q=["survived Aegis Command, Order 120"]),
        ]),
    "orangus_cornelius": dict(
        role="boss", cr=5, align="Lawful Evil", sc=(18, 16, 17, 15, 14, 18), saves=("dex", "wis", "cha"),
        skills={"per": 2, "itm": 1, "prc": 1, "ste": 1}, walk=30, fly=0, ac=16, dv=120, hp_mult=1.0,
        dr=["necrotic", "bludgeoning", "piercing", "slashing"], dr_bypass=["mgc"],
        weapons=[_w("Bite", "bite", "<p>Against a grappled, incapacitated or restrained creature: the target's hit point maximum is reduced by the necrotic damage dealt and Orangus regains that many hit points.</p>", q=["bit Cornelius's wing", "vampire lord"], dmg=(1, 6, ["piercing"]), wtype="natural"),
                 _w("Claws (Bat Form)", "claws", "<p>Giant bat talons; on a hit, the target is grappled (escape DC 16).</p>", q=["giant bat"], dmg=(2, 6, ["slashing"]), wtype="natural")],
        features=[
            _f("Multiattack", "strike", "<p>Orangus makes two claw attacks, or one claw and one bite.</p>", q=["giant bat"]),
            _f("Giant Bat Form", "bat", "<p>As a bonus action Orangus becomes a Large giant bat: flying speed 60 feet, Charisma-based social checks at disadvantage. He drops the aristocratic pretense when the shooting starts.</p>",
               q=["transformed into a giant bat monster"]),
            _f("Dinner Party Dominance", "hypno", "<p>Guests at his table are already under his roof. A creature that accepts his hospitality must succeed on a DC 15 Wisdom save or be charmed by him until it leaves the estate or is harmed.</p>",
               q=["vampire social dominance"]),
            _f("Defenestrated", "wound", "<p>Bowser tackled him through a window and the Shadow Anchor was shattered. Orangus no longer has dimensional control of the estate: he cannot shift planes, and the Anchor's loss is a wound this sheet keeps (hit point maximum reduced by 20, already applied).</p>",
               q=["dimensional Anchor get shattered"]),
        ]),
    "vivian_corvinarus": dict(
        role="caster", cr=3, align="Neutral Evil", sc=(10, 15, 12, 16, 13, 16), saves=("int", "cha"),
        skills={"dec": 2, "arc": 1, "ins": 1, "prf": 1}, walk=30, ac=13,
        weapons=[_w("Crimson Disintegration Beam", "disintegrate", "<p>Ranged spell attack, 60 feet. Death magic that worked inside the Shadowfell's suppression; a creature reduced to 0 hit points by it must succeed on a DC 13 Constitution save or begin to crumble (dies at the end of its next turn unless healed).</p>",
                    q=["crimson disintegration beam"], dmg=(3, 8, ["necrotic"]), ability="int", kind="ranged", cls="spell", wtype="natural", rng=(60, None))],
        features=[
            _f("Impostor", "mask", "<p>Vivian arrived as 'Vivinessa', a thrall in a wig, and lived among creatures that smell blood and hear heartbeats. Advantage on Charisma (Deception) checks; magic that detects lies about her identity returns nothing.</p>",
               q=["disguised as 'Vivinessa'", "wig"]),
            _f("Components Destroyed", "chains", "<p>The spell components for the beam were destroyed after her capture. Without them the Crimson Disintegration Beam deals half damage and cannot crumble a target; the GM decides whether she has replaced them.</p>",
               q=["spell components were subsequently destroyed"]),
            _f("Shadowfell-Compatible Casting", "orb", "<p>Spellcasting ability Intelligence (spell save DC 13, +5 to hit). At will: <em>chill touch, minor illusion, mage hand</em>. 1st level (4 slots): <em>disguise self, inflict wounds, false life</em>. 2nd level (2 slots): <em>blindness/deafness, misty step</em>. Her magic ignores the Shadowfell's suppression of standard spellcasting.</p>",
               q=["BYPASSED the Shadowfell's suppression"]),
        ]),
    "sans": dict(
        role="rogue", cr=1, align="Neutral Good", sc=(8, 15, 10, 16, 16, 15), saves=("wis", "cha"),
        skills={"ins": 2, "prf": 1, "dec": 1}, walk=25, ac=12, dv=60, hp_mult=0.3,
        weapons=[_w("Bone Toss", "bone", "<p>Ranged attack, 30 feet, a thrown bone that is suddenly where you were going to step.</p>", q=["Snowdin Bone-Line"], dmg=(1, 6, ["bludgeoning"]), ability="dex", kind="ranged", wtype="natural", rng=(30, None))],
        features=[
            _f("Shortcut", "stealth", "<p>At the start of his turn Sans can appear in any unoccupied space within 60 feet he could plausibly have walked to, without using movement and without anyone seeing him walk it. Locked doors are scheduling disagreements.</p>",
               q=["appear at the end of a road before anyone saw him walk it"]),
            _f("Lazy on the Surface", "eye", "<p>Sans always acts last in initiative if he chooses, and anything he says that sounded like a joke was also a warning: the first attack that would hit an ally he has warned this scene misses instead (once per short rest).</p>",
               q=["lazy on the surface, exact underneath"]),
            _f("One Hit Point, Really", "wound", "<p>The sheet keeps his hit points low on purpose. Sans does not take damage from attacks that miss by any margin, and he has advantage on Dexterity saving throws; the first hit that lands is the fight.</p>",
               q=["far more dangerous"]),
        ]),
    "papyrus": dict(
        role="soldier", cr=0.5, align="Lawful Good", sc=(13, 14, 12, 10, 9, 15), saves=("cha",),
        skills={"prf": 1, "ath": 1}, walk=30, ac=13, dv=60,
        weapons=[_w("Bone Attack", "bone", "<p>A row of bones rising from the floor; melee or 15-foot line.</p>", q=["puzzle guard"], dmg=(1, 8, ["bludgeoning"]), wtype="natural")],
        features=[
            _f("Puzzle Corridor", "key", "<p>Papyrus maintains Snowdin's puzzle corridor. He can set a non-lethal puzzle trap (DC 12 to notice, restrained on failure) in 10 minutes, and knows the solution to every puzzle he has built, mostly.</p>",
               q=["puzzle corridor"]),
            _f("Spaghetti Friday", "pot", "<p>With an hour and a kitchen, Papyrus feeds up to ten creatures; each gains 4 temporary hit points and may not attack another guest at the table until the meal ends.</p>",
               q=["Spaghetti Friday"]),
            _f("Audition Stage", "handshake", "<p>A creature that completes one of Papyrus's puzzles is offered friendship. If it accepts, Papyrus will not attack it for the rest of the scene and advocates for it to the household.</p>",
               q=["audition stage for future friends"]),
        ]),
    "toriel": dict(
        role="priest", cr=1, align="Lawful Good", sc=(14, 10, 15, 15, 17, 16), saves=("wis", "cha"),
        skills={"med": 1, "ins": 2, "per": 1, "arc": 1}, size="lg", walk=30, ac=13, dv=60, dr=["fire"],
        weapons=[_w("Fire Hands", "firefist", "<p>Ranged spell attack, 60 feet: fire that she aims to warn before she aims to hurt.</p>", q=["Royal Approval Authority", "specter given form"], dmg=(2, 8, ["fire"]), ability="wis", kind="ranged", cls="spell", wtype="natural", rng=(60, None))],
        features=[
            _f("Royal Approval Authority", "sealed", "<p>Toriel co-authored the secrecy oath of the Underground. A creature that has sworn it and breaks it within her sight takes 2d8 psychic damage; she knows when it is broken anywhere.</p>",
               q=["co-authored the final secrecy oath"]),
            _f("Towering Presence", "fear", "<p>Toriel materialises from the gloom. The first time a creature sees her in a scene it must succeed on a DC 13 Wisdom save or be unable to attack her until she acts.</p>",
               q=["materialized from the gloom like a specter given form"]),
            _f("Healing Fire", "heal", "<p>As an action Toriel touches a creature and restores 2d8+3 hit points. Three times a day.</p>", q=["golden light"], uses=("3", "day")),
        ]),
    "asgore": dict(
        role="boss", cr=2, align="Lawful Good", sc=(18, 10, 17, 12, 15, 16), saves=("str", "wis"),
        skills={"itm": 1, "ins": 1, "per": 1}, size="lg", walk=30, ac=15, dv=60, dr=["fire"],
        weapons=[_w("Royal Trident", "trident", "<p>The king's trident, versatile.</p>", q=["absolute rule over the subterranean domain"], dmg=(1, 8, ["piercing"]), props=["thr", "ver"], rng=(20, 60), versatile=(1, 10, ["piercing"]), wtype="martialM"),
                 _w("Fire Wave", "fireball", "<p>Ranged spell attack, 60 feet.</p>", q=["absolute rule"], dmg=(2, 6, ["fire"]), ability="wis", kind="ranged", cls="spell", wtype="natural", rng=(60, None))],
        features=[
            _f("Multiattack", "strike", "<p>Asgore makes two attacks.</p>", q=["absolute rule"]),
            _f("A Heavy Crown", "crown", "<p>Asgore would rather not. At the start of combat he offers terms; a creature that refuses them and attacks him first has disadvantage on its first attack roll against him. He has advantage on saving throws against being frightened while a subject of the Underground can see him.</p>",
               q=["heavy crown to wear"]),
            _f("Oath-Bound Transport", "sealed", "<p>Asgore authorised localised surface transport under a binding secrecy oath. Once per day he can send up to six willing creatures he can see to a surface location within 1 mile that he has authorised; they cannot speak of the route.</p>",
               q=["binding secrecy oath"]),
        ]),
    "flowey": dict(
        role="monster", cr=3, align="Chaotic Evil", sc=(8, 16, 14, 16, 12, 15), saves=("dex", "int"),
        skills={"dec": 2, "ste": 1, "inv": 1}, size="sm", walk=20, ac=13, dv=60, type_value="plant", type_subtype="",
        di=["poison"], ci=["poisoned", "prone"],
        weapons=[_w("Friendliness Pellets", "vines", "<p>Ranged spell attack, 60 feet, a ring of white seeds.</p>", q=["soul split apart"], dmg=(2, 8, ["piercing"]), ability="int", kind="ranged", cls="spell", wtype="natural", rng=(60, None)),
                 _w("Vine Lash", "vines", "<p>Reach 10 feet; on a hit the target is grappled (escape DC 13).</p>", q=["soul split apart"], dmg=(1, 10, ["bludgeoning"]), wtype="natural", reach=10)],
        features=[
            _f("Multiattack", "strike", "<p>Flowey makes two attacks.</p>", q=["soul split apart"]),
            _f("Burrow", "run", "<p>Flowey can burrow 20 feet and leaves no tunnel; emerging counts as leaving hidden.</p>", q=["dormant"]),
            _f("Repaired the Machine", "wrench", "<p>Flowey rebuilt a Legion survey machine overnight and marked it. Given a night alone with a wrecked mechanism he returns it operational and bugged: the GM decides what it now does when its owner turns it on.</p>",
               q=["overnight repair"]),
            _f("A Soul in Fragments", "skull", "<p>Flowey cannot be charmed and does not feel fear. Divination that reads his heart returns nothing coherent.</p>",
               q=["warped beyond recognition"]),
        ]),
    "king_k_rool": dict(
        role="boss", cr=1, align="Chaotic Evil", sc=(18, 10, 17, 13, 10, 14), saves=("str", "con"),
        skills={"itm": 1, "dec": 2, "prf": 1}, size="lg", walk=30, swim=30, ac=14, hp_mult=1.3,
        weapons=[_w("Crown Toss", "crown", "<p>Thrown crown, range 30/60, returns to his hand at the end of the turn.</p>", q=["leader of the Kremlings"], dmg=(1, 8, ["bludgeoning"]), kind="ranged", wtype="martialR", props=["thr"], rng=(30, 60)),
                 _w("Belly Slam", "slam", "<p>A target hit must succeed on a DC 13 Strength save or be knocked prone.</p>", q=["leader of the Kremlings"], dmg=(1, 10, ["bludgeoning"]), wtype="natural")],
        features=[
            _f("Won't Stay Down", "wound", "<p>When K. Rool is reduced to 0 hit points he drops to 1 instead and changes persona (pirate, scientist, boxer, king), gaining a new bonus action attack of the GM's choice. Once per long rest.</p>",
               q=["changes personas constantly"]),
            _f("Kremling Intelligence", "sealed", "<p>Beneath the theatre the Krew runs real operations. K. Rool starts any scene with one piece of true intelligence about the opposition the GM provides.</p>",
               q=["sophisticated intelligence operations"]),
        ]),
    "captain_syrup": dict(
        role="officer", cr=2, align="Chaotic Neutral", sc=(13, 17, 14, 14, 12, 16), saves=("dex", "cha"),
        skills={"itm": 1, "per": 1, "acr": 1, "prc": 1}, walk=30, ac=15,
        weapons=[_w("Cutlass", "scimitar", "<p>Finesse, light.</p>", q=["Pirate Queen"], dmg=(1, 6, ["slashing"]), props=["fin", "lgt"], wtype="martialM", ability="dex"),
                 _w("Flintlock", "pistol", "<p>Range 30/90; loading.</p>", q=["shoots cannons"], dmg=(1, 10, ["piercing"]), kind="ranged", wtype="martialR", props=["amm", "lod"], rng=(30, 90), ability="dex")],
        features=[
            _f("Fire the Cannons!", "cannon", "<p>While aboard a ship with a crew, Syrup can order a broadside as an action: each creature in a 20-foot-radius sphere within 240 feet must succeed on a DC 13 Dexterity save or take 4d10 bludgeoning damage (half on a success). Recharge 5-6.</p>",
               q=["Fire the cannons!"], uses=("1", "recharge", "5")),
            _f("Pirate Queen", "banner", "<p>Black Sugar pirates within 60 feet who can hear her add a d4 to attack rolls and have advantage on saves against being frightened.</p>",
               q=["leader of the Black Sugar Pirates"]),
            _f("Greed to Rival Wario", "coins", "<p>Syrup knows the value of anything she can see. She has advantage on Wisdom (Insight) checks to tell whether an offer is a lie, and a bribe must be real gold.</p>",
               q=["greed might actually rival Wario's"]),
        ]),
    "speaker_l": dict(
        role="noble", cr=1, align="Lawful Neutral", sc=(10, 12, 12, 16, 14, 17), saves=("int", "cha"),
        skills={"per": 2, "dec": 1, "ins": 1, "his": 1}, size="sm", walk=25, ac=12,
        weapons=[_w("Concealed Pistol", "pistol", "<p>Range 30/90; loading. Institutions respect power.</p>", q=["institutions only respect power"], dmg=(1, 10, ["piercing"]), kind="ranged", wtype="martialR", props=["amm", "lod"], rng=(30, 90), ability="dex")],
        features=[
            _f("Leverage", "handshake", "<p>Speaker L begins every negotiation with one piece of leverage. Once per day he can name a creature he has met; the GM tells him one thing it wants kept quiet.</p>",
               q=["they respond to leverage"]),
            _f("First Cohort's Mastermind", "banner", "<p>Liberated Toads within 60 feet who can hear Speaker L add a d4 to saving throws, and once per short rest he can let one of them take the Dash or Disengage action as a reaction.</p>",
               q=["Orchestrating containment"]),
        ]),
    "evil_mario": dict(
        role="boss", cr=4, align="Chaotic Evil", sc=(16, 18, 15, 10, 11, 14), saves=("dex", "con"),
        skills={"acr": 2, "prf": 1, "itm": 1}, walk=40, fly=0, ac=15, hp_mult=1.1, type_value="construct", type_subtype="studio copy",
        di=["poison", "psychic"], ci=["charmed", "poisoned"],
        weapons=[_w("Special-Effect Stomp", "fists", "<p>Moves like a special effect. A target hit must succeed on a DC 14 Strength save or be knocked prone.</p>", q=["moving like a special effect"], dmg=(2, 6, ["bludgeoning"]), ability="dex", wtype="natural"),
                 _w("Fire Form", "fireball", "<p>Ranged spell attack, 60 feet.</p>", q=["a fire form"], dmg=(2, 8, ["fire"]), ability="dex", kind="ranged", cls="spell", wtype="natural", rng=(60, None))],
        features=[
            _f("Multiattack", "strike", "<p>Evil Mario makes two attacks.</p>", q=["special effect"]),
            _f("Costume Rack", "mask", "<p>Each time Evil Mario is reduced to 0 hit points he changes form (cape, tanuki leaf, fire, ice) and returns with 30 hit points, losing the previous form's trait. He has survived every form once already; the GM decides how many are left.</p>",
               q=["His costume rack"]),
            _f("Pixelated Feather Cape", "wings", "<p>While wearing the cape Evil Mario has a flying speed of 60 feet. The cape is the power source: a creature that grapples him can yank it off with a DC 14 Strength check, ending the flight and the form.</p>",
               q=["yanked off by Luigi"]),
            _f("Freezes at CUT", "halt", "<p>When a creature with a director's authority shouts CUT, Evil Mario is stunned until the start of his next turn. He froze at the word once.</p>",
               q=["Froze at the word CUT"]),
        ]),
    "director_mario": dict(
        role="noble", cr=3, align="Lawful Evil", sc=(12, 13, 14, 17, 16, 18), saves=("int", "wis", "cha"),
        skills={"ins": 2, "itm": 2, "dec": 1, "prf": 1}, walk=30, ac=13, type_value="construct", type_subtype="studio copy",
        di=["poison", "psychic"], ci=["charmed", "frightened", "poisoned"],
        weapons=[_w("Backhand", "fists", "<p>Knocked Wario unconscious with it.</p>", q=["knocked Wario unconscious"], dmg=(2, 6, ["bludgeoning"]), wtype="natural")],
        features=[
            _f("CUT", "halt", "<p>As an action, the Director says CUT. Every studio copy that can hear him is stunned until the start of his next turn; every other creature that can hear him must succeed on a DC 15 Wisdom save or lose its reaction.</p>",
               q=["Froze at the word CUT", "snapped his own cigar"]),
            _f("The Remote", "sealed", "<p>A small wired remote with buttons: a control unit for Evil Mario, or the whole studio. As a bonus action the Director can command Evil Mario to take one action, or change the set (the GM alters one 20-foot square of terrain).</p>",
               q=["small wired remote", "small remote device"]),
            _f("The Man Wario Bows To", "crown", "<p>Wario and anyone bound by a studio contract has disadvantage on attack rolls against the Director while he is holding his script.</p>",
               q=["The Man Wario Bows To", "bows"]),
        ]),
    "fawthful": dict(
        role="officer", cr=4, align="Chaotic Evil", sc=(12, 15, 14, 17, 13, 16), saves=("int", "cha"),
        skills={"dec": 2, "arc": 1, "itm": 1, "ins": 1}, size="sm", walk=30, ac=14,
        weapons=[_w("Headgear Ray", "beam", "<p>Ranged spell attack, 60 feet.</p>", q=["commander"], dmg=(2, 10, ["force"]), ability="int", kind="ranged", cls="spell", wtype="natural", rng=(60, None))],
        features=[
            _f("Multiattack", "strike", "<p>Fawthful fires the ray twice.</p>", q=["commander"]),
            _f("Compromised Access", "key", "<p>Fawthful turned a compromised Bowser's Castle into an invasion route. Once per scene he can declare one door, gate or ward in a fortified place already opened by an agent inside.</p>",
               q=["invasion route"]),
            _f("Moving Terror Weapon", "fear", "<p>Fawthful's assault used a dragon as a moving terror weapon. While a creature of CR 5 or higher serves him within 120 feet, enemies who can see it must succeed on a DC 14 Wisdom save at the start of combat or be frightened for 1 minute.</p>",
               q=["dragon as a moving terror weapon"]),
            _f("Not Resolved as Fawful", "mask", "<p>The archive keeps Fawthful distinct from Fawful. Effects keyed to Fawful's name, oaths or bounties do not resolve against him.</p>",
               q=["distinct from the older Fawful record"]),
        ]),
    "mimbus": dict(
        role="soldier", cr=3, align="Neutral Evil", sc=(18, 12, 17, 9, 12, 8), saves=("str", "con"),
        skills={"ath": 2, "itm": 1}, size="med", walk=30, ac=14, hp_mult=1.2,
        weapons=[_w("Slam", "slam", "<p>The hand beside the usurper is a heavy one. On a hit the target is pushed 10 feet.</p>", q=["The Hand Beside the Usurper", "hostile operative"], dmg=(2, 8, ["bludgeoning"]), wtype="natural")],
        features=[
            _f("Multiattack", "strike", "<p>Mimbus makes two Slam attacks.</p>", q=["hostile operative"]),
            _f("Crossed the Seam", "run", "<p>Mimbus moved from the theatre of the false heir into the breach itself. He ignores difficult terrain created by rubble or crowds, and cannot be surprised while an ally of Fawthful is in the scene.</p>",
               q=["crossed the seam between the deception and the battle"]),
        ]),
    "paulo": dict(
        role="rogue", cr=2, align="Neutral", sc=(11, 16, 12, 13, 15, 12), saves=("dex", "wis"),
        skills={"ste": 1, "prc": 2, "ins": 1, "sur": 1}, walk=40, ac=14,
        weapons=[_w("Cheap Pistol (discarded)", "pistol", "<p>Range 30/90; loading. He left it on the hill; the sheet keeps it in case he picks up another.</p>", q=["cheap pistol"], dmg=(1, 10, ["piercing"]), kind="ranged", wtype="martialR", props=["amm", "lod"], rng=(30, 90), ability="dex"),
                 _w("Satchel Strap", "club", "<p>Improvised.</p>", q=["satchel"], dmg=(1, 4, ["bludgeoning"]), props=["lgt"])],
        features=[
            _f("Issued Word", "sealed", "<p>Couriers are issued words with routes. Paulo knows one true name for whatever the place he is standing in has become; the GM tells him when he arrives.</p>",
               q=["Couriers are issued words with routes"]),
            _f("The Shot", "pistol", "<p>Once per combat, Paulo's first ranged attack against a creature that has not yet acted is a critical hit on a roll of 18-20. The shot took the lip off a rotor blade beside Waluigi's ear.</p>",
               q=["took the lip off a fallen rotor blade"]),
            _f("Walks Away Reading", "run", "<p>Paulo can take the Disengage action as a bonus action, and opportunity attacks against him while he is reading have disadvantage.</p>",
               q=["walked away reading it"]),
        ]),
    "the_archivist": dict(
        role="scholar", cr=3, align="Lawful Evil", sc=(10, 13, 14, 18, 16, 15), saves=("int", "wis"),
        skills={"his": 2, "inv": 2, "arc": 1, "ins": 1, "dec": 1}, walk=30, ac=13, dv=60,
        weapons=[_w("Paper Cut", "quill", "<p>Melee spell attack: a page edge that keeps bleeding (1d4 necrotic at the start of the target's turns until it uses an action to bind the wound).</p>", q=["controls the library"], dmg=(2, 6, ["slashing"]), ability="int", wtype="natural")],
        features=[
            _f("Keeper of Records", "quill", "<p>The Archivist knows what is written about anyone in the Shadow Estate. Once per scene he can state a true fact about a creature that has ever been recorded there; the creature takes 2d6 psychic damage if the fact was secret.</p>",
               q=["access to records, documents, and information"]),
            _f("Healing for Indenture", "chains", "<p>The Archivist can restore 4d8 hit points to a creature that agrees to a term of service. The agreement is a magical contract: breaking it inflicts one level of exhaustion a day until it is kept or annulled.</p>",
               q=["trades healing for indentured service"]),
            _f("Possibly Vampire", "bat", "<p>Unconfirmed. He has darkvision to 60 feet, resistance to necrotic damage, and the archive declines to state what he eats.</p>",
               q=["possibly vampire"]),
        ]),
    "marcus_ashford": dict(
        role="rogue", cr=3, align="Neutral", sc=(12, 16, 13, 15, 16, 17), saves=("dex", "cha"),
        skills={"per": 2, "dec": 2, "ins": 1, "slt": 1}, walk=30, ac=14,
        weapons=[_w("Concealed Blade", "shortsword", "<p>Finesse, light.</p>", q=["Onyx Hand representative"], dmg=(1, 6, ["piercing"]), props=["fin", "lgt"], wtype="martialM", ability="dex")],
        features=[
            _f("De-escalation", "handshake", "<p>As an action, Ashford can end a fight that has not started: creatures within 30 feet that have not yet attacked this encounter must succeed on a DC 14 Wisdom save or be unable to make their first attack until another creature does.</p>",
               q=["de-escalating a near-battle"]),
            _f("Nearly Empty Supply Kit", "poison", "<p>Ashford carries one dose of something that turns a creature's eyes blue. A willing or unaware creature that takes it is affected as by <em>suggestion</em> (DC 14) and bleeds from the eyes at the end of the scene.</p>",
               q=["nearly empty supply kit"]),
            _f("Own Agenda", "eye", "<p>Insight checks against Ashford to learn his purpose are made at disadvantage; he was pursuing it while calming the room.</p>",
               q=["pursuing his own agenda"]),
        ]),
}


# ------------------------------------------ the bespoke cast play as PCs
#
# A player may sit down as any of the main cast, so every hand-authored
# sheet is a dnd5e *character* (class, species and background items, hit
# points by hit die, proficiency by level) rather than an npc stat block.
# The level is the XP ledger's level; where the ledger has no entry the
# sheet's authored CR stands in (rounded up, never below 1).
#
#   id: (class, subclass, hit die, spell progression, casting ability,
#        species item name, background item name)
#
# Subclasses only materialise at level 3 (the 2024 rule) — a level 2 entry
# keeps its choice here for the day the ledger catches up.
PC_BUILD = {
    "asgore": ("Paladin", "Oath of Devotion", 10, "half", "cha", "Boss Monster", "Noble"),
    "bones": ("Rogue", "Assassin", 8, "none", "", "Unknown (humanoid)", "Criminal"),
    "bryan": ("Cleric", "War Domain", 8, "full", "wis", "Toad", "Acolyte"),
    "captain_syrup": ("Rogue", "Swashbuckler", 8, "none", "", "Human", "Sailor"),
    "captain_toadette": ("Fighter", "Battle Master", 10, "none", "", "Toad", "Soldier"),
    "chancellor_toadsworth": ("Bard", "College of Eloquence", 8, "full", "cha", "Toad", "Noble"),
    "chief_thornpaw": ("Ranger", "Hunter", 10, "half", "wis", "Rakasha", "Outlander"),
    "dan": ("Fighter", "Champion", 10, "none", "", "Toad", "Soldier"),
    "director_mario": ("Bard", "College of Whispers", 8, "full", "cha", "Studio Copy", "Entertainer"),
    "evil_mario": ("Monk", "Warrior of the Elements", 8, "none", "", "Studio Copy", "Entertainer"),
    "fawthful": ("Artificer", "Artillerist", 8, "artificer", "int", "Unknown (humanoid)", "Sage"),
    "flowey": ("Warlock", "Great Old One Patron", 8, "pact", "cha", "Underground Flower", "Hermit"),
    "kamek": ("Wizard", "Evoker", 6, "full", "int", "Magikoopa", "Courtier"),
    "king_boo": ("Warlock", "Fiend Patron", 8, "pact", "cha", "Boo", "Noble"),
    "king_dedede": ("Fighter", "Champion", 10, "none", "", "Dreamland Penguin", "Noble"),
    "king_k_rool": ("Fighter", "Champion", 10, "none", "", "Kremling", "Noble"),
    "kirby": ("Barbarian", "Path of the Wild Heart", 12, "none", "", "Dreamland Puffball", "Folk Hero"),
    "luigi": ("Ranger", "Monster Slayer", 10, "half", "wis", "Human", "Guild Artisan"),
    "marcus_ashford": ("Rogue", "Mastermind", 8, "none", "", "Human (apparent)", "Courtier"),
    "mario": ("Monk", "Warrior of the Open Hand", 8, "none", "", "Human", "Folk Hero"),
    "meta_knight": ("Fighter", "Battle Master", 10, "none", "", "Dreamlander", "Soldier"),
    "mimbus": ("Barbarian", "Path of the Berserker", 12, "none", "", "Unknown (humanoid)", "Soldier"),
    "mr_l": ("Rogue", "Arcane Trickster", 8, "third", "int", "Human (allegedly)", "Entertainer"),
    "mystic_morel": ("Bard", "College of Lore", 8, "full", "cha", "Toad", "Charlatan"),
    "orangus_cornelius": ("Paladin", "Oath of Conquest", 10, "half", "cha", "Vampire", "Noble"),
    "papyrus": ("Fighter", "Champion", 10, "none", "", "Skeleton (Bone-Line kin)", "Soldier"),
    "paulo": ("Rogue", "Scout", 8, "none", "", "Human (apparent)", "Urchin"),
    "princess_daisy": ("Paladin", "Oath of the Crown", 10, "half", "cha", "Human", "Noble"),
    "professor_e_gadd": ("Artificer", "Artillerist", 8, "artificer", "int", "Human", "Sage"),
    "sans": ("Rogue", "Phantom", 8, "none", "", "Skeleton (Bone-Line kin)", "Entertainer"),
    "speaker_l": ("Bard", "College of Eloquence", 8, "full", "cha", "Toad", "Noble"),
    "the_archivist": ("Wizard", "Order of Scribes", 6, "full", "int", "Unknown (possibly vampire)", "Sage"),
    "toriel": ("Cleric", "Life Domain", 8, "full", "wis", "Boss Monster", "Noble"),
    "vivian_corvinarus": ("Sorcerer", "Shadow Sorcery", 6, "full", "cha", "Unknown (presents as Toad)", "Charlatan"),
}

# weapon / armor proficiency groups per class (dnd5e trait keys)
CLASS_PROFS = {
    "Artificer": (["sim"], ["lgt", "med", "shl"]),
    "Barbarian": (["sim", "mar"], ["lgt", "med", "shl"]),
    "Bard": (["sim"], ["lgt"]),
    "Cleric": (["sim"], ["lgt", "med", "shl"]),
    "Fighter": (["sim", "mar"], ["lgt", "med", "hvy", "shl"]),
    "Monk": (["sim"], []),
    "Paladin": (["sim", "mar"], ["lgt", "med", "hvy", "shl"]),
    "Ranger": (["sim", "mar"], ["lgt", "med", "shl"]),
    "Rogue": (["sim"], ["lgt"]),
    "Sorcerer": (["sim"], []),
    "Warlock": (["sim"], ["lgt"]),
    "Wizard": (["sim"], []),
}

# XP at the start of each level (dnd5e's own table), 1..20
XP_FOR_LEVEL = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000,
                140000, 165000, 195000, 225000, 265000, 305000, 355000]


# ------------------------------------------------ past selves (era versions)
#
# A character can carry more than one sheet: the one for now (1040 BF) and
# earlier selves for sessions played in the past — the 955 BF table, when
# Peach was alive. Era versions are built exactly like the bespoke sheets
# (player characters, every feature bound to a quote from the article) and
# live in actors/cast/eras/, one file per version, indexed under the
# character's `versions[]` and served at #/sheets/<id>/<version>.
#
# Levels: an era version never exceeds the XP ledger level either — a past
# self cannot hold more experience than the present one. A prime-era sheet
# shows its prime in the kit, not in the level.
ERAS = {
    "mario": [dict(
        version="955-bf", era="955 BF", label="Mario at his height",
        when="The year Peach died. Before Highsun 1 the hero was always near her, and the routine still held: "
             "Bowser kidnaps Peach, Mario stomps through eight worlds, Peach bakes a cake.",
        level=5, role="hero", cr=5, align="Lawful Good", sc=(16, 18, 16, 11, 13, 16), saves=("dex", "con"),
        skills={"acr": 2, "ath": 1, "prc": 1, "per": 1}, walk=40, ac=15, hp_mult=1.1,
        pc=("Monk", "Warrior of the Open Hand", 8, "none", "", "Human", "Folk Hero"),
        weapons=[
            _w("Stomp", "fists", "<p>A leaping stomp from above. If Mario moved at least 10 feet straight toward the target first, the target must succeed on a DC 15 Strength save or be knocked prone.</p>",
               q=["stomps through eight worlds"], dmg=(2, 6, ["bludgeoning"]), ability="dex", wtype="natural"),
            _w("Fire Flower", "fireball", "<p>A bouncing fireball thrown from the palm (range 60/120 ft.). On a hit the target also catches alight for 1d4 fire damage at the start of its next turn unless it or another creature uses an action to put it out.</p>",
               q=["rescued her from Bowser so many times"], dmg=(2, 6, ["fire"]), ability="dex", kind="ranged", wtype="natural", rng=(60, 120)),
        ],
        features=[
            _f("Prodigious Leap", "up", "<p>Mario's long jump is 30 feet and his high jump 20 feet, with or without a running start. He can jump as part of his movement and takes no damage from falls of 60 feet or less.</p>",
               q=["jump higher than physics should allow"]),
            _f("Multiattack", "strike", "<p>Mario makes two Stomp attacks, or one Stomp and one Fire Flower attack.</p>", q=["stomps through eight worlds"]),
            _f("Super Mushroom (1/Day)", "heal", "<p>As a bonus action Mario eats a Super Mushroom: he regains 2d10 + 5 hit points and is Large until the end of his next turn, with advantage on Strength checks and saves while he is.</p>",
               q=["Peach bakes Mario a cake"], uses=("1", "day")),
            _f("Eight Worlds' Stamina", "run", "<p>Mario ignores the first level of exhaustion he would gain each day, and a short rest restores him as a long rest would once per day. (The 1040 BF sheet replaces this with <em>Diminished</em>.)</p>",
               q=["stomps through eight worlds"]),
            _f("Always Near Peach", "shield", "<p>When a creature Mario can see attacks Princess Peach or an ally within 5 feet of him, Mario can use his reaction to impose disadvantage on the attack roll; if it still hits, he can take the damage instead.</p>",
               q=["Mario was ALWAYS near Peach"]),
            _f("Hero of the Mushroom Kingdom", "banner", "<p>Toads and Mushroom Kingdom citizens who can see Mario have advantage on saving throws against being frightened. Once per long rest, as an action, he rallies: up to six allies within 30 feet gain temporary hit points equal to his level plus his Charisma modifier.</p>",
               q=["The hero of the Mushroom Kingdom"], uses=("1", "lr")),
            _f("Annoyingly Heroic", "star", "<p>Mario cannot willingly abandon an innocent in danger he can see. He has advantage on saving throws against effects that would make him flee or stand aside.</p>",
               q=["annoyingly heroic to his core"]),
        ]),
    ],
    "luigi": [dict(
        version="955-bf", era="955 BF", label="Luigi, the second brother",
        when="Before the Poltergust. Sports appearances, heroic support, the brother behind the brother — "
             "already afraid often, already going anyway.",
        level=4, role="hero", cr=3, align="Neutral Good", sc=(12, 17, 13, 13, 14, 11), saves=("dex", "wis"),
        skills={"acr": 1, "ath": 1, "prc": 1, "ste": 1}, walk=35, ac=14,
        pc=("Ranger", "Monster Slayer", 10, "half", "wis", "Human", "Folk Hero"),
        weapons=[
            _w("Hammer", "hammer", "<p>The brothers' hammer — a plumber's tool swung two-handed at whatever Mario did not reach first.</p>",
               q=["heroic support"]),
            _w("Green Fireball", "fireball", "<p>A high-bouncing green fireball (range 60/120 ft.). It can ricochet once off a wall or floor to reach a target behind cover.</p>",
               q=["sports appearances"], dmg=(1, 10, ["fire"]), ability="dex", kind="ranged", wtype="natural", rng=(60, 120)),
        ],
        features=[
            _f("Scuttle Jump", "up", "<p>Luigi's high jump is 25 feet — higher than his brother's — and his long jump 25 feet, with or without a running start. He can flutter his legs to fall at 60 feet per round and take no damage from the landing.</p>",
               q=["the second brother can disappear in plain sight"]),
            _f("The Second Brother", "handshake", "<p>Luigi can take the Help action as a bonus action when the ally he helps is Mario or a creature Mario is fighting.</p>",
               q=["the second brother can disappear in plain sight"]),
            _f("Afraid Often", "fear", "<p>Luigi can be frightened and still act: while frightened he keeps his actions and reactions but his speed cannot exceed 20 feet, and he has advantage on Dexterity saving throws against the source of his fear. (By 1040 BF this is <em>Fear as Method</em>.)</p>",
               q=["Luigi is afraid often"]),
            _f("Startles", "eye", "<p>Luigi cannot be surprised while conscious, and he adds his Wisdom modifier to initiative rolls.</p>",
               q=["He shakes, complains, startles"]),
            _f("Sports Appearances", "run", "<p>Proficient with karts and other land vehicles, tennis rackets and golf clubs (treat as clubs), and with Athletics checks made to race. Kart night counts.</p>",
               q=["sports appearances, ghost incidents, heroic support"]),
        ]),
    ],
    "bowser": [dict(
        version="955-bf", era="955 BF", label="Bowser, King of the Koopas",
        when="The sovereign who kidnapped princesses and conquered kingdoms, eighty-five years before he held "
             "the door for Disaster Inc. — the Koopa Troop at full strength, the castle intact, fire in the throat.",
        level=8, role="boss", cr=8, align="Chaotic Evil", sc=(20, 10, 18, 9, 11, 15), saves=("str", "con"),
        skills={"ath": 2, "itm": 2}, walk=30, ac=17, size="lg",
        pc=("Fighter", "Champion", 10, "none", "", "Koopa (King-sized)", "Noble"),
        weapons=[
            _w("Claws", "claws", "<p>Two swipes of a king's claws; a creature hit by both in one turn is grappled (escape DC 17).</p>",
               q=["giant turtle who breathes fire"], dmg=(2, 6, ["slashing"])),
            _w("Bowser's Shell Bash", "slam", "<p>Bowser tucks in and bashes. A Large or smaller target hit by it is pushed 10 feet away.</p>",
               q=["DO NOT THREATEN BOWSER"], dmg=(2, 8, ["bludgeoning"])),
        ],
        features=[
            _f("Fire Breath (Recharge 5–6)", "fireball", "<p>Bowser exhales fire in a 30-foot cone. Each creature in it makes a DC 16 Dexterity saving throw, taking 8d6 fire damage on a failure or half as much on a success. Flammable objects in the cone ignite.</p>",
               q=["breathes fire"], uses=("1", "recharge", "5")),
            _f("Multiattack", "strike", "<p>See problem, hit problem: Bowser makes two Claw attacks, or one Claw and one Shell Bash.</p>",
               q=["see problem, hit problem"]),
            _f("The Shell", "shield", "<p>As a bonus action Bowser withdraws into his shell: his AC becomes 21 and he has resistance to bludgeoning, piercing and slashing damage until he emerges (another bonus action), but his speed is 0 and he cannot attack. Threaten the shell and he comes out swinging — he emerges for free when a creature within 5 feet attacks him.</p>",
               q=["DO NOT THREATEN BOWSER"]),
            _f("Indestructible", "ward", "<p>When Bowser is reduced to 0 hit points but not killed outright, he drops to 1 hit point instead and roars. Once per long rest.</p>",
               q=["the most INDESTRUCTIBLE"], uses=("1", "lr")),
            _f("Kidnapper of Princesses", "chains", "<p>Bowser's speed is not halved while he grapples or carries a Medium or smaller creature, and he can carry one such creature while flying in the Koopa Clown Car (not on this sheet).</p>",
               q=["kidnapping princesses, conquering kingdoms"]),
            _f("King of the Koopas", "crown", "<p>Koopa Troop creatures within 60 feet that can hear Bowser have advantage on saving throws against being frightened, and once per turn Bowser can use a bonus action to let one of them make a weapon attack as a reaction.</p>",
               q=["Koopa sovereignty"]),
        ]),
    ],
}


# ------------------------------------------------------------- the engine

def ability_mod(score):
    return math.floor((score - 10) / 2)


def scale_scores(base, cr):
    """Nudge the primary scores upward for higher-CR versions of a template."""
    bump = 0 if cr < 3 else (1 if cr < 5 else 2)
    out = []
    top = max(base)
    for s in base:
        v = s + (bump if s == top else 0)
        out.append(min(20, v))
    return tuple(out)


def hit_points(cr, size, con, mult):
    prof, ac, hp, atk, dpr, dc = CR_TABLE[cr]
    target = max(1, round(hp * mult))
    die = SIZE_DIE.get(size, 8)
    avg = (die + 1) / 2
    per = avg + con
    if per <= 0.5:
        per = 0.5
    n = max(1, round(target / per))
    total = max(1, math.floor(n * avg + n * con))
    bonus = n * con
    formula = f"{n}d{die}" + (f" + {bonus}" if bonus > 0 else (f" - {-bonus}" if bonus < 0 else ""))
    return total, formula


def pc_level(cr, level):
    """A bespoke sheet's character level: the XP ledger's, else its authored CR."""
    if level is not None:
        return max(1, int(level))
    return max(1, math.ceil(cr))


def pc_hit_points(level, die, con, mult):
    """Class hit points: the die maxed at level 1, its average after, CON every level."""
    avg = die // 2 + 1
    total = die + con + (level - 1) * (avg + con)
    total = max(1, round(total * mult))
    bonus = con * level
    formula = f"{level}d{die}" + (f" + {bonus}" if bonus > 0 else (f" - {-bonus}" if bonus < 0 else ""))
    return total, formula


def pc_slug(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def class_items(owner, build, level, walk, type_value):
    """The class / subclass / species / background items a dnd5e character needs."""
    cls, sub, die, prog, cast, species, background = build
    desc = lambda html: {"value": html, "chat": ""}
    src = {"custom": "Waluipedia campaign", "revision": 1, "rules": "2024"}
    items = [{
        "_id": sid(owner, "class", cls), "name": cls, "type": "class", "img": I["upgrade"],
        "system": {
            "description": desc(f"<p>{esc(cls)} — the class this sheet reads the record as. Levels follow the XP ledger.</p>"),
            "source": dict(src), "identifier": pc_slug(cls), "levels": level,
            "hd": {"denomination": f"d{die}", "spent": 0, "additional": ""},
            "advancement": [], "startingEquipment": [], "properties": [],
            "primaryAbility": {"value": [], "all": True},
            "spellcasting": {"progression": prog, "ability": cast, "preparation": {"formula": ""}},
        },
        "effects": [], "flags": {}, "sort": 0, "ownership": {"default": 0},
    }]
    if sub and level >= 3:
        items.append({
            "_id": sid(owner, "subclass", sub), "name": sub, "type": "subclass", "img": I["upgrade"],
            "system": {
                "description": desc(f"<p>{esc(sub)} ({esc(cls)}).</p>"), "source": dict(src),
                "identifier": pc_slug(sub), "classIdentifier": pc_slug(cls), "advancement": [],
                "spellcasting": {"progression": "none", "ability": "", "preparation": {"formula": ""}},
            },
            "effects": [], "flags": {}, "sort": 0, "ownership": {"default": 0},
        })
    items.append({
        "_id": sid(owner, "race", species), "name": species, "type": "race", "img": I["species"],
        "system": {
            "description": desc(f"<p>{esc(species)}, as the article files it.</p>"), "source": dict(src),
            "identifier": pc_slug(species), "advancement": [],
            "movement": {"walk": walk, "units": "ft", "hover": False, "ignoredDifficultTerrain": []},
            "senses": {"units": "ft", "special": "", "ranges": {"darkvision": None, "blindsight": None,
                                                                 "tremorsense": None, "truesight": None}},
            "type": {"value": type_value, "subtype": ""},
        },
        "effects": [], "flags": {}, "sort": 0, "ownership": {"default": 0},
    })
    items.append({
        "_id": sid(owner, "background", background), "name": background, "type": "background", "img": I["scroll"],
        "system": {
            "description": desc(f"<p>{esc(background)} — the life the article describes before the table.</p>"),
            "source": dict(src), "identifier": pc_slug(background), "advancement": [], "startingEquipment": [],
        },
        "effects": [], "flags": {}, "sort": 0, "ownership": {"default": 0},
    })
    return items


def pick_cr(role, level, power):
    if level is None:
        return DEFAULT_CR[role]
    combat = role in COMBAT_ROLES
    if role in ("hero", "boss"):
        cr = level
    elif combat:
        cr = max(0.5, level - 1)
    elif role == "healer":
        cr = max(0.25, level - 2)
    else:
        cr = {1: 0.125, 2: 0.25, 3: 0.5}.get(level, max(1, level - 3))
    if power is not None and power >= 10 and combat:
        cr = level
    cr = min(cr, level)
    return cr_floor(cr)


def level_of(xp, cid):
    e = xp.get(cid)
    if not e:
        return None, None
    return e.get("level"), e.get("powerLevel")


def is_party(c, xp, sheet_kind):
    e = xp.get(c["id"]) or {}
    if (e.get("faction") or "") in PARTY_FACTIONS:
        return True, "ledger faction " + e["faction"]
    for part in re.split(r"[/;]", c.get("affiliation") or ""):
        p = part.strip()
        if p.lower().startswith("disaster inc") and "ally" not in p.lower():
            return True, "affiliation: " + p
    if sheet_kind == "pc":
        return True, "player character sheet"
    return False, ""


GROUPS = [
    ("Snowdin Bone-Line", ["snowdin", "bone-line", "sans family"]),
    ("Trinity Academy", ["trinity", "class 2-b", "2-b"]),
    ("Peach Loyalists", ["peach loyalist"]),
    ("Liberated Toads", ["liberated toad", "pond patrol"]),
    ("Mushroom Regency & Kingdom", ["regency", "mushroom kingdom", "sarasaland", "royal science"]),
    ("Koopa Troop", ["koopa troop", "darkland", "bowser's castle"]),
    ("Fawful's Furious Freaks", ["furious freaks", "beanbean"]),
    ("Fawthful's Forces", ["fawthful"]),
    ("Nintendo Mania Studio", ["nintendo mania", "studio"]),
    ("Wario's Enterprise & WarioWare", ["wario", "warioware", "diamond city"]),
    ("Iron Legion", ["iron legion", "legion"]),
    ("Mages' Guild", ["mages' guild", "mages guild", "guild"]),
    ("Shadow Estate & House Corvinarus", ["corvinarus", "shadow estate", "onyx hand", "raventree"]),
    ("Dreamland", ["dreamland", "star warriors"]),
    ("The Underground", ["underground", "mount ebott"]),
    ("Kremling Krew & the Black Sugar Pirates", ["kremling", "black sugar", "rogueport", "pirate"]),
    ("Rakasha & the Feywild", ["rakasha", "feywild", "fey"]),
    ("Dark Shores", ["dark shores", "marsh"]),
    ("Gamma Division", ["gamma"]),
    ("Overgrown Manor", ["overgrown manor", "manor household", "ruined manor"]),
    ("Millennium Science School", ["millennium", "science school"]),
]


def group_of(c, party):
    if party:
        return "Disaster Inc."
    hay = " ".join([c.get("affiliation") or "", c.get("title") or "", c.get("race") or ""]).lower()
    for name, keys in GROUPS:
        if any(k in hay for k in keys):
            return name
    return "Elsewhere"


def portrait_of(c):
    im = (c.get("image") or "").replace("\\", "/")
    if not im or im.startswith("http"):
        return PLACEHOLDER, False
    if os.path.exists(os.path.join(RM, im)):
        return im, True
    return PLACEHOLDER, False


def site_portrait(c):
    """The portrait the SITE can show for the index: the article's own image
    when it is a local file that exists or an external URL; never a Foundry
    icon path (the actor's img is a different namespace)."""
    im = (c.get("image") or "").replace("\\", "/")
    if im.startswith("http"):
        return im
    if im and os.path.exists(os.path.join(RM, im)):
        return im
    return ""


def fill(html, ctx):
    try:
        return html.format(**ctx)
    except (KeyError, IndexError):
        return html


def spell_slots(cr):
    if cr < 1:
        return "1st level (2 slots): <em>magic missile, shield</em>."
    if cr < 3:
        return "1st level (4 slots): <em>magic missile, shield, sleep</em>. 2nd level (2 slots): <em>misty step, hold person</em>."
    return "1st level (4 slots): <em>magic missile, shield, sleep</em>. 2nd level (3 slots): <em>misty step, hold person</em>. 3rd level (2 slots): <em>counterspell, fireball</em>."


def divine_slots(cr):
    if cr < 1:
        return "1st level (2 slots): <em>bless, cure wounds</em>."
    if cr < 3:
        return "1st level (4 slots): <em>bless, cure wounds, command</em>. 2nd level (2 slots): <em>lesser restoration, spiritual weapon</em>."
    return "1st level (4 slots): <em>bless, cure wounds, command</em>. 2nd level (3 slots): <em>lesser restoration, spiritual weapon</em>. 3rd level (2 slots): <em>dispel magic, spirit guardians</em>."


def dice_for(cr, die):
    n = 1 if cr < 3 else 2
    return n, die


def esc(s):
    return (str(s or "").replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
            .replace('"', "&quot;"))


def kicker(c, level, power, cr, role, bespoke, pc=None, era=None):
    ledger = (f"XP ledger: level {level}, power rating {power}" if level is not None
              else "no XP ledger entry; archetype default")
    how = "hand-authored from the article" if bespoke else "generated from the article's own words"
    if pc and era:
        cls, lvl = pc
        reading = (f"{ledger} → a level {lvl} {cls} player-character sheet for <strong>{esc(era['era'])}</strong> "
                   f"({esc(era['label'])}; never above the ledger level — a past self holds no more experience "
                   f"than the present one). {esc(era['when'])}")
    elif pc:
        cls, lvl = pc
        reading = (f"{ledger} → a level {lvl} {cls} player-character sheet (a player may take this seat; "
                   f"the authored CR {cr_label(cr)} stands in where the ledger is silent)")
    else:
        reading = f"{ledger} → CR {cr_label(cr)} as a {ROLE_LABEL[role]}"
    return (f"<p><em>Waluipedia cast sheet — {esc(c.get('name'))}.</em> Built by <code>{SELF}</code>, "
            f"{how}. {reading}. Numbers are a GM-ready reading of "
            f"the record, not a filed stat line; the article stays the authority. Archive date 1040 BF.</p>")


def biography(c, level, power, cr, role, evidence, bespoke, pc=None, era=None):
    parts = [kicker(c, level, power, cr, role, bespoke, pc, era)]
    head = []
    if c.get("title"):
        head.append(f"<strong>{esc(c['title'])}</strong>")
    if c.get("affiliation"):
        head.append(esc(c["affiliation"]))
    if head:
        parts.append("<p>" + " — ".join(head) + "</p>")
    if c.get("status"):
        parts.append(f"<p>Status: {esc(c['status'])}</p>")
    if c.get("summary"):
        parts.append(f"<p>{esc(norm(c['summary']))}</p>")
    if evidence:
        parts.append("<h3>Evidence</h3><ul>" + "".join(
            f"<li><strong>{esc(ev['feature'])}</strong> — “{esc(ev['quote'])}”</li>" for ev in evidence) + "</ul>")
    sheet = f"#/sheets/{esc(c['id'])}" + (f"/{esc(era['version'])}" if era else "")
    parts.append(f"<p>Article: <code>#/article/{esc(c['id'])}</code> (characters). "
                 f"Site sheet: <code>{sheet}</code>.</p>")
    return "".join(parts)


def npc_doc(*, slug, c, name, img, size, sc, saves, trained, ac, hp, hp_formula, cr, walk, fly, swim, hover,
            dv, langs, type_value, type_subtype, alignment, bio, items, di, dr, dr_bypass, ci, disposition,
            group, evidence, role, level, power, bespoke):
    doc = {
        "_id": sid("cast", slug),
        "name": name,
        "type": "npc",
        "img": img,
        "system": {
            "abilities": P955.abilities(dict(zip(ABILITY_KEYS, sc)), saves),
            "attributes": {
                "ac": {"flat": ac, "calc": "natural", "formula": ""},
                "hp": {"value": hp, "max": hp, "formula": hp_formula, "temp": None, "tempmax": None},
                "movement": {"walk": str(walk), "units": "ft", "hover": hover, "burrow": "0", "climb": "0",
                             "fly": str(fly), "swim": str(swim), "ignoredDifficultTerrain": []},
                "senses": {"units": "ft", "ranges": {"darkvision": dv}, "special": ""},
                "init": {"ability": "", "roll": P955.blank_roll(), "bonus": ""},
                "attunement": {"max": 3},
                "spellcasting": "",
                "exhaustion": 0,
                "concentration": {"ability": "", "roll": P955.blank_roll(), "bonuses": {"save": ""}, "limit": 1},
                "loyalty": {},
                "hd": {"spent": 0},
                "death": {"roll": P955.blank_roll(), "success": 0, "failure": 0, "bonuses": {"save": ""}},
            },
            "details": {
                "alignment": alignment,
                "type": {"value": type_value, "subtype": type_subtype},
                "cr": cr,
                "biography": {"value": bio, "public": ""},
            },
            "traits": {
                "size": size,
                "languages": {"value": list(langs), "custom": "", "communication": {}},
                "ci": {"value": list(ci), "custom": "", "bypasses": []},
                "di": {"value": list(di), "custom": "", "bypasses": []},
                "dr": {"value": list(dr), "custom": "", "bypasses": list(dr_bypass)},
                "dv": {"value": [], "custom": "", "bypasses": []},
                "dm": {"amount": {}, "bypasses": []},
                "important": False,
            },
            "skills": P955.skills(trained),
            "source": {"custom": "Waluipedia campaign", "revision": 1, "rules": "2024"},
            "currency": {"pp": 0, "gp": 0, "ep": 0, "sp": 0, "cp": 0},
            "bonuses": {}, "tools": {}, "spells": {}, "resources": {},
        },
        "prototypeToken": {
            "name": name, "displayName": 0, "actorLink": False,
            "width": 2 if size in ("lg",) else (3 if size == "huge" else 1),
            "height": 2 if size in ("lg",) else (3 if size == "huge" else 1),
            "texture": {"src": img, "anchorX": 0.5, "anchorY": 0.5, "fit": "contain", "scaleX": 1, "scaleY": 1,
                        "tint": "#ffffff", "alphaThreshold": 0.75},
            "lockRotation": False, "rotation": 0, "alpha": 1,
            "disposition": disposition, "displayBars": 0,
            "bar1": {"attribute": "attributes.hp"}, "bar2": {"attribute": None},
        },
        "items": items,
        "effects": [],
        "folder": None,
        "ownership": {"default": 0},
        "flags": {
            MODULE_ID: {"folderPath": [FOLDER_ROOT, group], "source": SELF},
            SHEETS_FLAG: {"characterId": c["id"], "generated": True, "bespoke": bool(bespoke), "role": role,
                          "ledger": {"level": level, "powerLevel": power}, "evidence": evidence},
        },
        "_stats": {"coreVersion": "14.365", "systemId": "dnd5e", "systemVersion": "5.3.3",
                   "compendiumSource": None, "duplicateSource": None},
    }
    for i, item in enumerate(doc["items"]):
        item["sort"] = 100000 * (i + 1)
    return doc


def pc_doc(*, slug, c, name, img, size, sc, saves, trained, ac, hp, hp_formula, cr, walk, fly, swim, hover,
           dv, langs, type_value, alignment, bio, items, di, dr, dr_bypass, ci, disposition,
           group, evidence, role, level, power, build, pc_lvl):
    """A dnd5e *character* for a bespoke sheet: class items first, then the authored kit."""
    cls, sub, die, prog, cast, species, background = build
    owner = "cast:" + slug
    head = class_items(owner, build, pc_lvl, walk, type_value)
    ids = {it["type"]: it["_id"] for it in head}
    wprof, aprof = CLASS_PROFS[cls]
    doc = {
        "_id": sid("cast", slug),
        "name": name,
        "type": "character",
        "img": img,
        "system": {
            "currency": {"pp": 0, "gp": 0, "ep": 0, "sp": 0, "cp": 0},
            "abilities": P955.abilities(dict(zip(ABILITY_KEYS, sc)), saves),
            "skills": P955.skills(trained),
            "tools": {},
            "spells": {},
            "bonuses": {},
            "resources": {},
            "favorites": [],
            "bastion": {"name": "", "description": ""},
            "attributes": {
                "ac": {"flat": ac, "calc": "natural", "formula": ""},
                "hp": {"value": hp, "max": hp, "temp": None, "tempmax": 0, "bonuses": {}},
                "movement": {"walk": str(walk), "units": "ft", "hover": hover, "burrow": "0", "climb": "0",
                             "fly": str(fly), "swim": str(swim), "ignoredDifficultTerrain": []},
                "senses": {"units": "ft", "ranges": {"darkvision": dv}, "special": ""},
                "init": {"ability": "", "roll": P955.blank_roll(), "bonus": ""},
                "attunement": {"max": 3},
                "spellcasting": cast,
                "exhaustion": 0,
                "inspiration": False,
                "concentration": {"ability": "", "roll": P955.blank_roll(), "bonuses": {"save": ""}, "limit": 1},
                "loyalty": {},
                "death": {"roll": P955.blank_roll(), "success": 0, "failure": 0, "bonuses": {"save": ""}},
            },
            "details": {
                "alignment": alignment,
                "race": ids["race"],
                "background": ids["background"],
                "originalClass": ids["class"],
                "xp": {"value": XP_FOR_LEVEL[min(pc_lvl, 20) - 1]},
                "trait": "", "ideal": "", "bond": "", "flaw": "",
                "appearance": "", "eyes": "", "hair": "", "skin": "", "height": "", "weight": "",
                "age": "", "gender": "", "faith": "",
                "biography": {"value": bio, "public": ""},
            },
            "traits": {
                "size": size,
                "languages": {"value": list(langs), "custom": "", "communication": {}},
                "weaponProf": {"value": list(wprof), "custom": "", "mastery": {"value": [], "bonus": []}},
                "armorProf": {"value": list(aprof), "custom": ""},
                "ci": {"value": list(ci), "custom": "", "bypasses": []},
                "di": {"value": list(di), "custom": "", "bypasses": []},
                "dr": {"value": list(dr), "custom": "", "bypasses": list(dr_bypass)},
                "dv": {"value": [], "custom": "", "bypasses": []},
                "dm": {"amount": {}, "bypasses": []},
            },
            "source": {"custom": "Waluipedia campaign", "revision": 1, "rules": "2024"},
        },
        "prototypeToken": {
            "name": name, "displayName": 0, "actorLink": True,
            "width": 2 if size in ("lg",) else (3 if size == "huge" else 1),
            "height": 2 if size in ("lg",) else (3 if size == "huge" else 1),
            "texture": {"src": img, "anchorX": 0.5, "anchorY": 0.5, "fit": "contain", "scaleX": 1, "scaleY": 1,
                        "tint": "#ffffff", "alphaThreshold": 0.75},
            "lockRotation": False, "rotation": 0, "alpha": 1,
            "disposition": disposition, "displayBars": 0,
            "bar1": {"attribute": "attributes.hp"}, "bar2": {"attribute": None},
        },
        "items": head + items,
        "effects": [],
        "folder": None,
        "ownership": {"default": 0},
        "flags": {
            MODULE_ID: {"folderPath": [FOLDER_ROOT, group], "source": SELF},
            SHEETS_FLAG: {"characterId": c["id"], "generated": True, "bespoke": True, "role": role,
                          "ledger": {"level": level, "powerLevel": power}, "evidence": evidence,
                          "pc": {"level": pc_lvl, "class": cls, "subclass": sub if pc_lvl >= 3 else None,
                                 "cr": cr, "hitDie": f"d{die}", "formula": hp_formula}},
        },
        "_stats": {"coreVersion": "14.365", "systemId": "dnd5e", "systemVersion": "5.3.3",
                   "compendiumSource": None, "duplicateSource": None},
    }
    for i, item in enumerate(doc["items"]):
        item["sort"] = 100000 * (i + 1)
    return doc


def build_generated(c, xp, party, group, era=None):
    cid = c["id"]
    text = article_text(c)
    level, power = level_of(xp, cid)
    spec = era or BESPOKE.get(cid)
    role = spec["role"] if spec else classify(c)
    sp = species_of(c)
    cr = spec["cr"] if spec else pick_cr(role, level, power)
    if level is not None and cr > level:
        raise SystemExit(f"{cid}: CR {cr} exceeds ledger level {level}")
    tmpl = ROLES[role]
    prof, base_ac, _, atk_bonus, _, dc = CR_TABLE[cr]
    sc = tuple(spec["sc"]) if spec else scale_scores(tmpl["sc"], cr)
    mods = dict(zip(ABILITY_KEYS, (ability_mod(s) for s in sc)))
    build = (era["pc"] if era else PC_BUILD.get(cid)) if spec else None
    if spec and not build:
        raise SystemExit(f"{cid}: bespoke sheet has no PC_BUILD entry (class / species / background)")
    pc_lvl = pc_level(cr, level) if build else None
    if era:
        pc_lvl = int(era["level"])
        if level is not None and pc_lvl > level:
            raise SystemExit(f"{cid} ({era['version']}): era level {pc_lvl} exceeds the ledger level {level}")
    if build:
        # a player-character sheet: proficiency and save DCs follow the level, not the CR table
        prof = 2 + (pc_lvl - 1) // 4
        dc = 8 + prof + max(ability_mod(s) for s in sc)
    saves = tuple(spec.get("saves", tmpl["saves"])) if spec else tmpl["saves"]
    trained = dict(spec.get("skills", tmpl["skills"])) if spec else dict(tmpl["skills"])
    size = (spec.get("size") if spec else None) or sp["size"]
    walk = spec.get("walk", sp["walk"]) if spec else sp["walk"]
    fly = spec.get("fly", sp["fly"]) if spec else sp["fly"]
    swim = spec.get("swim", sp["swim"]) if spec else sp["swim"]
    hover = spec.get("hover", sp["hover"]) if spec else sp["hover"]
    dv = spec.get("dv", sp["dv"]) if spec else sp["dv"]
    ac = spec.get("ac") if spec and spec.get("ac") is not None else max(10, base_ac + tmpl["ac"] + (1 if mods["dex"] >= 3 else 0))
    hp_mult = spec.get("hp_mult", 1.0) if spec else tmpl["hp"]
    if build:
        hp, hp_formula = pc_hit_points(pc_lvl, build[2], mods["con"], hp_mult)
    else:
        hp, hp_formula = hit_points(cr, size, mods["con"], hp_mult)
    type_value = spec.get("type_value", sp["type"]) if spec else sp["type"]
    type_subtype = spec.get("type_subtype", sp["subtype"]) if spec else sp["subtype"]
    align = spec.get("align", "Neutral") if spec else ("Unaligned" if sp["type"] in ("beast", "construct") else "Neutral")
    di, dr, dr_bypass, ci = [], [], [], []
    if spec:
        di, dr, dr_bypass, ci = list(spec.get("di", [])), list(spec.get("dr", [])), list(spec.get("dr_bypass", [])), list(spec.get("ci", []))
    elif sp["incorporeal"]:
        dr, dr_bypass = ["bludgeoning", "piercing", "slashing"], ["mgc"]
        di, ci = ["cold", "necrotic", "poison"], ["charmed", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"]
    elif sp["construct"]:
        di, ci = ["poison", "psychic"], ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"]

    slug = cid + ("--" + era["version"] if era else "")
    owner = "cast:" + slug
    items, evidence = [], []
    pri = "dex" if mods["dex"] > mods["str"] else "str"
    cast_mod = max(mods["int"], mods["wis"], mods["cha"])
    ctx = dict(dc=dc, prof=prof, atk=prof + cast_mod,
               sneak=f"{(pc_lvl + 1) // 2 if build else max(1, int(cr) // 2 + 1)}d6", heal=f"1d8 + {max(1, mods['wis'])}",
               firedmg=f"{dice_for(cr, 8)[0] + 1}d8", brutal=f"{dice_for(cr, 6)[0]}d6",
               uses="3", slots=spell_slots(cr), dslots=divine_slots(cr))

    def add_evidence(feature, quote, source="article"):
        evidence.append({"feature": feature, "quote": quote, "source": source})

    if spec:
        for w in spec["weapons"]:
            # base is a weapon-catalogue key, or an icon key for a natural / spell attack
            base = WEAPONS.get(w["base"]) or (w["base"], 8, "force", "melee", dict(wtype="natural"))
            kw = dict(base[4])
            if w["kw"].get("kind") or w["kw"].get("wtype"):
                # the sheet re-purposes the catalogue entry (e.g. a staff icon
                # for a ranged device): keep its icon, not its handling
                for k in ("props", "versatile", "rng"):
                    if k not in w["kw"]:
                        kw.pop(k, None)
            kw.update(w["kw"])
            dmg = w["dmg"] or (1, base[1], [base[2]])
            kind = kw.pop("kind", base[3])
            icon = I[base[0]]
            items.append(attack(owner, w["name"], icon, w["html"], dmg=tuple(dmg), kind=kind, **kw))
            if w.get("q"):
                q = find_quote(text, w["q"])
                if not q:
                    raise SystemExit(f"{cid}: weapon {w['name']} quote not found: {w['q']}")
                add_evidence(w["name"], q)
        for f in spec["features"]:
            q = find_quote(text, f["q"])
            if not q:
                raise SystemExit(f"{cid}: feature {f['name']} quote not found: {f['q']}")
            items.append(feat(owner, f["name"], I[f["icon"]], f["html"], uses=f.get("uses")))
            add_evidence(f["name"], q)
        # the kit reads as class kit on a player-character sheet
        for it in items:
            if it["type"] == "weapon":
                it["system"]["proficient"] = 1
            elif it["type"] == "feat":
                it["system"]["type"] = {"value": "class", "subtype": ""}
                if it["name"] == "Multiattack":
                    it["name"] = "Extra Attack"
                    for ev in evidence:
                        if ev["feature"] == "Multiattack":
                            ev["feature"] = "Extra Attack"
                    if pc_lvl < 5:
                        it["system"]["description"]["value"] += (
                            "<p><em>Arrives early:</em> the class table grants this at level 5; the article's "
                            "record of how this character fights put it on the sheet now. The GM may hold it.</p>")
                    it["_id"] = sid(owner, "feat", "Extra Attack")
    else:
        wname, wq = pick_weapon(role, text)
        if wname == "rapier" and sp["subtype"] == "Toad":
            wname = "cane"
        base = WEAPONS[wname]
        kw = dict(base[4])
        n, die = dice_for(cr, base[1])
        if role in ("civilian", "student", "scholar", "noble", "healer") and cr < 1:
            n = 1
        label = wname.title() if wname not in ("fists", "slam", "claws", "bite", "withering touch") else wname.title()
        html = f"<p>{label}; {'ranged' if base[3] == 'ranged' else 'melee'} weapon attack.</p>"
        if wq:
            html += f"<p><em>Record:</em> “{esc(wq)}”</p>"
            add_evidence(label, wq)
        else:
            add_evidence(label, c.get("title") or c.get("affiliation") or c.get("name"), "title")
        kind = kw.pop("kind", base[3])
        items.append(attack(owner, label, I[base[0]], html, dmg=(n, die, [base[2]]), kind=kind, **kw))
        if cr >= 3 and role in COMBAT_ROLES:
            items.append(feat(owner, "Multiattack", I["strike"], f"<p>Makes two {label} attacks.</p>"))
        if sp["incorporeal"] and role != "spirit":
            items.append(feat(owner, "Incorporeal Movement", I["ghost"],
                              "<p>Can move through other creatures and objects as if they were difficult terrain; takes 5 (1d10) force damage if it ends its turn inside an object.</p>"))
        used = set()
        picked = 0
        for name, icon, keys, html, opts in FEATURES:
            if picked >= 3:
                break
            if opts.get("min_cr") is not None and cr < opts["min_cr"]:
                continue
            roles = opts.get("roles")
            if roles is not None and role not in roles:
                continue
            if opts.get("unique") and opts["unique"] in used:
                continue
            q = find_quote(text, keys)
            if not q:
                continue
            uses = opts.get("uses")
            if isinstance(uses, str):
                uses = (uses, "day")
            items.append(feat(owner, name, I[icon], fill(html, ctx), uses=uses))
            add_evidence(name, q)
            if opts.get("grant_fly") and not fly:
                fly, hover = opts["grant_fly"], True
            if opts.get("unique"):
                used.add(opts["unique"])
            picked += 1
        if tmpl.get("spells") and "spells" not in used:
            if tmpl["spells"] == "arcane":
                items.append(feat(owner, "Guild Spellcasting", I["orb"], fill(FEATURES[11][3], ctx)))
            else:
                items.append(feat(owner, "Faithful Spellcasting", I["prayer"], fill(FEATURES[12][3], ctx)))
            add_evidence("Spellcasting", c.get("title") or c.get("affiliation") or c.get("name"), "title")
        if not picked:
            items.append(feat(owner, "As Filed", I["scroll"],
                              f"<p>The archive records {esc(c.get('name'))} as {esc(c.get('title') or ROLE_LABEL[role])}; nothing in the article describes a fighting trick, so this sheet carries none. Treat the numbers as a baseline.</p>"))
            add_evidence("As Filed", c.get("title") or c.get("affiliation") or c.get("name"), "title")

    img, _ = portrait_of(c)
    hay = " ".join([c.get("affiliation") or "", c.get("title") or "", c.get("status") or ""]).lower()
    disposition = 1 if party else (-1 if any(k in hay for k in DISC_HOSTILE) else 0)
    if build:
        bio = biography(c, level, power, cr, role, evidence, True, pc=(build[0], pc_lvl), era=era)
        name = c.get("name") or cid
        doc = pc_doc(slug=slug, c=c, name=f"{name} ({era['era']})" if era else name, img=img, size=size, sc=sc,
                     saves=saves, trained=trained, ac=ac, hp=hp, hp_formula=hp_formula, cr=cr, walk=walk, fly=fly,
                     swim=swim, hover=hover, dv=dv, langs=sp["langs"], type_value=type_value, alignment=align,
                     bio=bio, items=items, di=di, dr=dr, dr_bypass=dr_bypass, ci=ci, disposition=disposition,
                     group=group, evidence=evidence, role=role, level=level, power=power, build=build, pc_lvl=pc_lvl)
        if era:
            doc["flags"][SHEETS_FLAG]["era"] = {k: era[k] for k in ("version", "era", "label", "when")}
            doc["flags"][MODULE_ID]["folderPath"] = [FOLDER_ROOT, group, era["era"]]
        return doc
    bio = biography(c, level, power, cr, role, evidence, bool(spec))
    doc = npc_doc(slug=cid, c=c, name=c.get("name") or cid, img=img, size=size, sc=sc, saves=saves, trained=trained,
                  ac=ac, hp=hp, hp_formula=hp_formula, cr=cr, walk=walk, fly=fly, swim=swim, hover=hover, dv=dv,
                  langs=sp["langs"], type_value=type_value, type_subtype=type_subtype, alignment=align, bio=bio,
                  items=items, di=di, dr=dr, dr_bypass=dr_bypass, ci=ci, disposition=disposition, group=group,
                  evidence=evidence, role=role, level=level, power=power, bespoke=bool(spec))
    return doc


# --------------------------------------------------- indexing every sheet

def summarize_actor(doc):
    """The stat line the site shows on a card, for any dnd5e actor."""
    sysd = doc.get("system") or {}
    ab = sysd.get("abilities") or {}
    attrs = sysd.get("attributes") or {}
    det = sysd.get("details") or {}
    out = {
        "kind": "pc" if doc.get("type") == "character" else "npc",
        "abilities": {k: (ab.get(k) or {}).get("value") for k in ABILITY_KEYS},
        "hp": ((attrs.get("hp") or {}).get("max")),
        "speed": ((attrs.get("movement") or {}).get("walk")),
        "size": (sysd.get("traits") or {}).get("size"),
        "items": len(doc.get("items") or []),
    }
    acd = attrs.get("ac") or {}
    if acd.get("calc") in ("flat", "natural") and isinstance(acd.get("flat"), (int, float)):
        out["ac"] = acd["flat"]
    else:
        dex = ability_mod(out["abilities"].get("dex") or 10)
        armor, shield, cap = 0, 0, None
        for it in doc.get("items") or []:
            if it.get("type") != "equipment" or not (it.get("system") or {}).get("equipped"):
                continue
            a = (it.get("system") or {}).get("armor") or {}
            t = ((it.get("system") or {}).get("type") or {}).get("value")
            if t == "shield":
                shield += a.get("value") or 0
            elif t in ("light", "medium", "heavy") and a.get("value"):
                armor = a["value"]
                cap = {"light": None, "medium": 2, "heavy": 0}[t]
        if armor:
            out["ac"] = armor + (dex if cap is None else min(dex, cap)) + shield
        else:
            out["ac"] = 10 + dex + shield
        out["acApprox"] = True
    if out["kind"] == "pc":
        classes = [(it.get("name"), (it.get("system") or {}).get("levels") or 0)
                   for it in doc.get("items") or [] if it.get("type") == "class"]
        out["level"] = sum(l for _, l in classes) or det.get("level") or None
        out["classes"] = [f"{n} {l}" for n, l in classes]
        species = [it.get("name") for it in doc.get("items") or [] if it.get("type") == "race"]
        out["species"] = species[0] if species else None
        pc = ((doc.get("flags") or {}).get(SHEETS_FLAG) or {}).get("pc")
        if pc:
            out["pc"] = dict(pc)
    else:
        out["cr"] = det.get("cr")
        t = det.get("type") or {}
        out["type"] = (t.get("value") or "") + ((" (" + t["subtype"] + ")") if t.get("subtype") else "")
    return out


def source_of(rel):
    if rel.startswith("actors/worlds/"):
        return "live"
    if rel.startswith("actors/peachs-castle-955/"):
        return "era"
    if rel.startswith("actors/cast/"):
        return "generated"
    return "intake"


SOURCE_RANK = {"live": 0, "intake": 1, "era": 2}


def match_existing(characters, files):
    """character id -> [(rel, doc), ...] sorted best first."""
    by_name = {}
    for rel, doc in files:
        by_name.setdefault(norm_name(doc["name"]), []).append((rel, doc))
    out = {}
    for c in characters:
        names = [c.get("name") or ""]
        if c["id"] in ALIASES:
            names.insert(0, ALIASES[c["id"]])
        hits = []
        for n in names:
            hits.extend(by_name.get(norm_name(n), []))
        if not hits:
            continue
        seen, uniq = set(), []
        for rel, doc in hits:
            if rel not in seen:
                seen.add(rel)
                uniq.append((rel, doc))

        def rank(pair):
            rel, doc = pair
            # live > intake > era; within a source a player-character sheet
            # beats an NPC statblock of the same name (the rule that player
            # characters carry character sheets, not NPC ones)
            return (SOURCE_RANK[source_of(rel)], 0 if doc.get("type") == "character" else 1, rel)
        uniq.sort(key=rank)
        out[c["id"]] = uniq
    return out


def norm_name(n):
    n = str(n or "").lower().replace("\u2019", "'")
    n = re.sub(r"\s*\(.*?\)\s*", " ", n) if "955" not in n and "theater" not in n else n
    return re.sub(r"[^a-z0-9]+", " ", n).strip()


def cast_path(slug):
    """Where a generated actor lives: the cast folder, era versions under eras/."""
    if "--" in slug:
        return os.path.join(CAST, "eras", f"fvtt-Actor-{slug}.json")
    return os.path.join(CAST, f"fvtt-Actor-{slug}.json")


def build_eras(c, xp, party, group, generated):
    """Build every era version of a character; returns the index rows."""
    rows = []
    for era in ERAS.get(c["id"], []):
        doc = build_generated(c, xp, party, group, era=era)
        slug = c["id"] + "--" + era["version"]
        generated.append((slug, doc))
        row = {"version": era["version"], "era": era["era"], "label": era["label"], "when": era["when"],
               "file": os.path.relpath(cast_path(slug), RM).replace(os.sep, "/"), "name": doc["name"],
               "source": "generated", "bespoke": True, "evidence": doc["flags"][SHEETS_FLAG]["evidence"]}
        row.update(summarize_actor(doc))
        rows.append(row)
    return rows


def build_all():
    characters = load_characters()
    xp = load_xp_summary()
    files = existing_actor_files()
    existing = match_existing(characters, files)
    generated, entries, skipped = [], [], []
    for c in sorted(characters, key=lambda x: x["id"]):
        cid = c["id"]
        if cid in SKIP:
            skipped.append({"id": cid, "name": c.get("name"), "reason": SKIP[cid]})
            continue
        if not (c.get("description") or c.get("summary")):
            skipped.append({"id": cid, "name": c.get("name"), "reason": "no article text to build from"})
            continue
        level, power = level_of(xp, cid)
        portrait = site_portrait(c)
        statblock_alternates = []
        if cid in existing and existing[cid][0][1].get("type") != "character" and cid in BESPOKE:
            # Only NPC statblocks on file for a hand-authored main-cast member
            # (the GM's live statblock for Mario, say). Player characters carry
            # character sheets, so the bespoke PC sheet stays primary and the
            # statblocks ride along as alternates instead of displacing it.
            statblock_alternates = [{"file": r, "name": d.get("name"), "source": source_of(r), "kind": "npc"}
                                    for r, d in existing[cid]]
        elif cid in existing:
            rel, doc = existing[cid][0]
            summ = summarize_actor(doc)
            party, why = is_party(c, xp, summ["kind"])
            entry = {"id": cid, "name": c.get("name"), "title": c.get("title") or "", "sheetName": doc.get("name"),
                     "source": source_of(rel), "file": rel,
                     "alternates": [{"file": r, "name": d.get("name"), "source": source_of(r),
                                     "kind": "pc" if d.get("type") == "character" else "npc"} for r, d in existing[cid][1:]],
                     "party": party, "partyWhy": why, "group": group_of(c, party),
                     "portrait": portrait,
                     "ledger": {"level": level, "powerLevel": power}}
            entry.update(summ)
            entry["versions"] = build_eras(c, xp, party, group_of(c, party), generated)
            entries.append(entry)
            continue
        party, why = is_party(c, xp, "npc")
        group = group_of(c, party)
        doc = build_generated(c, xp, party, group)
        rel = f"actors/cast/fvtt-Actor-{cid}.json"
        generated.append((cid, doc))
        summ = summarize_actor(doc)
        entry = {"id": cid, "name": c.get("name"), "title": c.get("title") or "", "sheetName": doc["name"],
                 "source": "generated", "file": rel, "alternates": statblock_alternates, "party": party, "partyWhy": why,
                 "group": group, "portrait": portrait, "ledger": {"level": level, "powerLevel": power},
                 "role": doc["flags"][SHEETS_FLAG]["role"], "bespoke": doc["flags"][SHEETS_FLAG]["bespoke"],
                 "evidence": doc["flags"][SHEETS_FLAG]["evidence"]}
        entry.update(summ)
        entry["versions"] = build_eras(c, xp, party, group, generated)
        entries.append(entry)
    ids = [d["_id"] for _, d in generated]
    if len(ids) != len(set(ids)):
        raise SystemExit("actor _id collision")
    party_ids = [e["id"] for e in entries if e["party"]]
    index = {
        "meta": {
            "generator": SELF,
            "note": ("Every character article mapped to a Foundry dnd5e sheet. source=live is the user's world mirror, "
                     "intake the PC packet, era the 955 BF packet, generated this builder. party=true sheets are public; "
                     "the rest show only while Settings → Developer → debug mode is on. CR never exceeds the XP ledger level; "
                     "the hand-authored main cast are player-character sheets at the ledger level."),
            "visibility": {"public": "party", "debug": "all"},
            "folderRoot": FOLDER_ROOT,
            "castImport": "actors/cast/import.json",
            "counts": {"characters": len(characters), "sheets": len(entries),
                       "generated": len(generated) - sum(len(e["versions"]) for e in entries),
                       "eras": sum(len(e["versions"]) for e in entries),
                       "existing": len(entries) - len(generated) + sum(len(e["versions"]) for e in entries),
                       "party": len(party_ids), "skipped": len(skipped)},
            "party": party_ids,
        },
        "sheets": entries,
        "skipped": skipped,
    }
    return generated, index


def render(doc):
    return json.dumps(doc, indent=2, ensure_ascii=False) + "\n"


def validate(slug, actor, lib):
    problems = []
    bespoke = actor["flags"][SHEETS_FLAG]["bespoke"]
    if bespoke and actor["type"] != "character":
        problems.append("bespoke sheets are player characters (type character)")
    if not bespoke and actor["type"] != "npc":
        problems.append("type must be npc")
    if not re.match(r"^[A-Za-z0-9]{16}$", actor.get("_id") or ""):
        problems.append("actor _id must be 16 alphanumerics")
    if actor["prototypeToken"]["actorLink"] != bespoke:
        problems.append("prototype token must be linked for a PC and unlinked for an NPC")
    imgs = [actor["img"], actor["prototypeToken"]["texture"]["src"]]
    kinds = {}
    for it in actor["items"]:
        imgs.append(it["img"])
        if it["type"] in ("race", "class", "subclass", "background"):
            kinds[it["type"]] = kinds.get(it["type"], 0) + 1
            if not bespoke:
                problems.append(f"NPC must not carry a {it['type']} item: {it['name']}")
    if bespoke:
        for k in ("class", "race", "background"):
            if kinds.get(k) != 1:
                problems.append(f"PC sheet needs exactly one {k} item (has {kinds.get(k, 0)})")
        lvl = actor["flags"][SHEETS_FLAG]["ledger"]["level"]
        got = sum(it["system"]["levels"] for it in actor["items"] if it["type"] == "class")
        if actor["flags"][SHEETS_FLAG].get("era"):
            if lvl is not None and got > lvl:
                problems.append(f"era level {got} exceeds the ledger level {lvl}")
        elif lvl is not None and got != lvl:
            problems.append(f"class level {got} is not the ledger level {lvl}")
        if kinds.get("subclass") and got < 3:
            problems.append("subclass before level 3")
        for it in actor["items"]:
            if it["type"] == "subclass" and it["system"]["classIdentifier"] != next(
                    c["system"]["identifier"] for c in actor["items"] if c["type"] == "class"):
                problems.append("subclass does not match the class identifier")
    for p in imgs:
        if p == PLACEHOLDER or p in lib or os.path.exists(os.path.join(RM, p)):
            continue
        problems.append(f"img not in repo or image paths.txt: {p}")
    ids = [it["_id"] for it in actor["items"]]
    if len(ids) != len(set(ids)):
        problems.append("duplicate item _id")
    if actor["system"]["attributes"]["hp"]["max"] <= 0:
        problems.append("hp must be positive")
    lvl = actor["flags"][SHEETS_FLAG]["ledger"]["level"]
    cr = actor["system"]["details"].get("cr", actor["flags"][SHEETS_FLAG].get("pc", {}).get("cr"))
    if lvl is not None and cr > lvl:
        problems.append(f"cr {cr} exceeds ledger level {lvl}")
    return [f"{slug}: {p}" for p in problems]


def write_text(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as fh:
        fh.write(text)
    os.replace(tmp, path)


def combine_cast():
    payload, dupes = BRIDGE.combine([CAST], world="waluipedia-cast")
    if dupes:
        raise SystemExit(f"duplicate actor ids in the cast packet: {dupes[:3]}")
    return BRIDGE.render(payload)


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--check", action="store_true", help="verify the committed files match a fresh build")
    ap.add_argument("--list", action="store_true", help="print the casting table and exit")
    args = ap.parse_args(argv)

    generated, index = build_all()
    lib = load_image_lib()
    problems = []
    for slug, doc in generated:
        problems += validate(slug, doc, lib)
    if problems:
        print("\n".join(problems))
        return 1

    if args.list:
        for e in index["sheets"]:
            tag = "PARTY" if e["party"] else "     "
            lvl = e["ledger"]["level"]
            stat = f"L{e.get('level')}" if e["kind"] == "pc" else f"CR {cr_label(e.get('cr') or 0)}"
            print(f"{tag} {e['source']:9} {stat:7} lvl={lvl!s:4} {e.get('role') or '-':12} {e['group']:38} {e['id']}")
        for s in index["skipped"]:
            print(f"SKIP  {s['id']}: {s['reason']}")
        print(json.dumps(index["meta"]["counts"]))
        return 0

    expected = {}
    for slug, doc in generated:
        expected[cast_path(slug)] = render(doc)
    expected[SHEETS_JSON] = render(index)

    if args.check:
        drift = []
        for path, text in expected.items():
            try:
                with open(path, encoding="utf-8") as fh:
                    cur = fh.read()
            except FileNotFoundError:
                drift.append(f"missing: {os.path.relpath(path, ROOT)}")
                continue
            if cur != text:
                drift.append(f"stale: {os.path.relpath(path, ROOT)}")
        want = {p for p in expected if p.startswith(CAST)}
        for d in (CAST, os.path.join(CAST, "eras")):
            for fn in sorted(os.listdir(d)) if os.path.isdir(d) else []:
                if fn.startswith("fvtt-Actor-") and os.path.join(d, fn) not in want:
                    drift.append(f"stray: {os.path.relpath(os.path.join(d, fn), ROOT)}")
        try:
            with open(os.path.join(CAST, "import.json"), encoding="utf-8") as fh:
                if fh.read() != combine_cast():
                    drift.append("stale: Reputation-Matrix2/actors/cast/import.json")
        except FileNotFoundError:
            drift.append("missing: Reputation-Matrix2/actors/cast/import.json")
        if drift:
            print("\n".join(drift))
            print(f"character sheets: {len(drift)} file(s) drift — run python3 {SELF}")
            return 1
        c = index["meta"]["counts"]
        print(f"character sheets: ok ({c['sheets']} sheets, {c['generated']} generated, {c['eras']} era versions, "
              f"{c['party']} party, {c['skipped']} skipped)")
        return 0

    for path, text in expected.items():
        write_text(path, text)
    want = {p for p in expected if p.startswith(CAST)}
    for d in (CAST, os.path.join(CAST, "eras")):
        for fn in os.listdir(d) if os.path.isdir(d) else []:
            if fn.startswith("fvtt-Actor-") and os.path.join(d, fn) not in want:
                os.remove(os.path.join(d, fn))
    write_text(os.path.join(CAST, "import.json"), combine_cast())
    c = index["meta"]["counts"]
    print(f"wrote {c['generated']} generated sheets and {c['eras']} era versions, index of {c['sheets']} "
          f"({c['party']} party, {c['skipped']} skipped) -> {os.path.relpath(SHEETS_JSON, ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
