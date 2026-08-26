#!/usr/bin/env python3
"""Build Foundry dnd5e PLAYER CHARACTER actors (type=character, never npc).

Fixes lastModifiedBy to a real 16-char Foundry user id so import validation passes.
"""
from __future__ import annotations

import hashlib
import json
import time
from copy import deepcopy
from pathlib import Path

ROOT = Path(__file__).resolve().parent
HJUMPIK = json.loads((ROOT / "hjumpik.json").read_text(encoding="utf-8"))
CHARS = json.loads(
    (ROOT.parents[1] / "data" / "characters.json").read_text(encoding="utf-8")
)

# Copied from the working Hjumpik PC export. Foundry requires exactly 16 [A-Za-z0-9].
USER_ID = "f9K62vO9hIl1GByi"
NOW = int(time.time() * 1000)


def fid(seed: str) -> str:
    raw = hashlib.sha1(seed.encode("utf-8")).hexdigest()
    alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    out = []
    n = int(raw, 16)
    for _ in range(16):
        out.append(alphabet[n % 62])
        n //= 62
    return "".join(out)


def stats(seed: str) -> dict:
    return {
        "compendiumSource": None,
        "duplicateSource": None,
        "exportSource": {
            "worldId": "dnd-part-2",
            "uuid": "Actor." + fid(seed + "-actor"),
            "coreVersion": "14.365",
            "systemId": "dnd5e",
            "systemVersion": "5.3.3",
        },
        "coreVersion": "14.365",
        "systemId": "dnd5e",
        "systemVersion": "5.3.3",
        "createdTime": NOW,
        "modifiedTime": NOW,
        "lastModifiedBy": USER_ID,
    }


def lore(cid: str) -> dict:
    return next(c for c in CHARS if c.get("id") == cid)


def p(html: str) -> dict:
    return {"value": html, "chat": ""}


def item(kind: str, name: str, img: str, system: dict, seed: str) -> dict:
    tmpl = next(i for i in HJUMPIK["items"] if i["type"] == "class")
    it = deepcopy(tmpl)
    it["name"] = name
    it["type"] = kind
    it["img"] = img
    it["system"] = system
    it["effects"] = []
    it["flags"] = {}
    it["folder"] = None
    it["sort"] = abs(hash(seed)) % 900000 + 100000
    it["ownership"] = {"default": 0}
    it["_id"] = fid(seed)
    it["_stats"] = stats(seed)
    return it


def src() -> dict:
    return {"custom": "Waluipedia campaign", "rules": "2014", "revision": 1}


def feat(name: str, ident: str, html: str, img: str) -> dict:
    return item(
        "feat",
        name,
        img,
        {
            "description": p(html),
            "source": src(),
            "identifier": ident,
            "requirements": "",
            "type": {"value": "feat", "subtype": ""},
            "properties": [],
            "enchant": {},
            "prerequisites": {"level": None, "repeatable": False},
            "advancement": [],
        },
        "feat-" + ident,
    )


def spell(name: str, ident: str, level: int, school: str, html: str, img: str) -> dict:
    return item(
        "spell",
        name,
        img,
        {
            "description": p(html),
            "source": src(),
            "identifier": ident,
            "level": level,
            "school": school,
            "method": "spell",
            "prepared": 1 if level else 0,
            "properties": ["vocal", "somatic"],
            "materials": {"value": "", "consumed": False, "cost": 0, "supply": 0},
            "activation": {"type": "action", "value": 1, "condition": ""},
            "duration": {"value": "", "units": "inst"},
            "range": {"value": None, "units": "ft", "special": ""},
            "target": {"affects": {"type": "", "count": "", "choice": False}},
            "uses": {"max": "", "spent": 0, "recovery": []},
            "activities": {},
        },
        "spell-" + ident,
    )


def weapon(name: str, img: str, html: str, n: int, d: int, dtype: str, wtype: str, props: list) -> dict:
    return item(
        "weapon",
        name,
        img,
        {
            "description": p(html),
            "source": src(),
            "quantity": 1,
            "weight": {"value": 4, "units": "lb"},
            "price": {"value": 15, "denomination": "gp"},
            "identified": True,
            "unidentified": {"description": ""},
            "rarity": "",
            "attunement": "",
            "equipped": True,
            "proficient": None,
            "type": {"value": wtype, "baseItem": ""},
            "properties": props,
            "range": {"value": None, "long": None, "reach": 5, "units": "ft"},
            "damage": {
                "base": {
                    "number": n,
                    "denomination": d,
                    "types": [dtype],
                    "bonus": "",
                    "custom": {"enabled": False, "formula": ""},
                    "scaling": {"mode": "", "number": None, "formula": ""},
                },
                "versatile": {
                    "number": None,
                    "denomination": None,
                    "types": [],
                    "bonus": "",
                    "custom": {"enabled": False, "formula": ""},
                    "scaling": {"mode": "", "number": None, "formula": ""},
                },
            },
            "uses": {"max": "", "spent": 0, "recovery": []},
            "activities": {},
            "identifier": fid("w-" + name).lower(),
        },
        "weapon-" + name,
    )


def equip(name: str, img: str, html: str, atype: str, ac: int) -> dict:
    return item(
        "equipment",
        name,
        img,
        {
            "description": p(html),
            "source": src(),
            "quantity": 1,
            "weight": {"value": 12, "units": "lb"},
            "price": {"value": 10, "denomination": "gp"},
            "identified": True,
            "unidentified": {"description": ""},
            "rarity": "",
            "attunement": "",
            "equipped": True,
            "proficient": True,
            "type": {"value": atype, "baseItem": ""},
            "armor": {"value": ac, "dex": 2 if atype != "shield" else None, "magicalBonus": None},
            "properties": [],
            "uses": {"max": "", "spent": 0, "recovery": []},
        },
        "eq-" + name,
    )


def loot(name: str, img: str, html: str, qty: int = 1) -> dict:
    return item(
        "loot",
        name,
        img,
        {
            "description": p(html),
            "source": src(),
            "quantity": qty,
            "weight": {"value": 1, "units": "lb"},
            "price": {"value": 1, "denomination": "gp"},
            "identified": True,
            "unidentified": {"description": ""},
            "rarity": "",
            "type": {"value": "", "subtype": ""},
        },
        "loot-" + name,
    )


def cons(name: str, img: str, html: str, qty: int = 1) -> dict:
    return item(
        "consumable",
        name,
        img,
        {
            "description": p(html),
            "source": src(),
            "quantity": qty,
            "weight": {"value": 0.5, "units": "lb"},
            "price": {"value": 5, "denomination": "gp"},
            "identified": True,
            "unidentified": {"description": ""},
            "rarity": "",
            "type": {"value": "potion", "subtype": ""},
            "uses": {"max": "1", "spent": 0, "autoDestroy": True, "recovery": []},
            "activities": {},
        },
        "con-" + name,
    )


def tool(name: str, img: str, html: str, ability: str, tval: str) -> dict:
    return item(
        "tool",
        name,
        img,
        {
            "description": p(html),
            "source": src(),
            "quantity": 1,
            "weight": {"value": 3, "units": "lb"},
            "price": {"value": 5, "denomination": "gp"},
            "identified": True,
            "unidentified": {"description": ""},
            "ability": ability,
            "type": {"value": tval, "baseItem": ""},
            "proficient": 1,
            "bonus": "",
            "properties": [],
        },
        "tool-" + name,
    )


def chronicle(title: str, html: str) -> dict:
    return feat(
        "Chronicle — " + title,
        "chronicle-" + fid(title)[:8].lower(),
        "<p><b>Reference only. Does not award XP.</b></p>" + html,
        "icons/sundries/scrolls/scroll-writing-brown.webp",
    )


def envelope(name: str, img: str, bio: str, abilities: dict, hp: int, ac: int, walk: int, xp: int, spells: dict, skills: dict, resources: dict, currency: dict, size: str, items: list, flags_bik: dict) -> dict:
    actor = deepcopy(HJUMPIK)
    actor.pop("_id", None)
    actor["_id"] = fid(name + "-actorid")
    actor["name"] = name
    actor["type"] = "character"
    actor["img"] = img
    actor["folder"] = None
    actor["effects"] = []
    actor["ownership"] = {"default": 0}
    actor["_stats"] = stats(name)

    pt = deepcopy(HJUMPIK["prototypeToken"])
    pt["name"] = name.split("—")[0].split("(")[0].strip()
    pt["actorLink"] = True
    pt["disposition"] = 1
    pt["displayName"] = 30
    pt["displayBars"] = 40
    pt["width"] = 1
    pt["height"] = 1
    pt["texture"] = dict(pt.get("texture") or {})
    pt["texture"]["src"] = img
    pt["bar1"] = {"attribute": "attributes.hp"}
    actor["prototypeToken"] = pt

    sys = actor["system"]
    for k, v in abilities.items():
        sys["abilities"][k]["value"] = v
        sys["abilities"][k]["proficient"] = 1 if k in flags_bik.get("saveProf", ("wis", "int")) else 0
    sys["attributes"]["hp"] = {"value": hp, "max": hp, "temp": 0, "tempmax": 0, "bonuses": {}}
    sys["attributes"]["ac"] = {"flat": ac, "calc": "flat", "formula": ""}
    sys["attributes"]["movement"]["walk"] = walk
    sys["attributes"]["spellcasting"] = flags_bik.get("spellAbility", "")
    sys["attributes"]["inspiration"] = False
    sys["details"]["biography"] = {"value": bio, "public": ""}
    sys["details"]["xp"] = {"value": xp}
    sys["details"]["originalClass"] = flags_bik.get("originalClass", "")
    sys["details"]["race"] = None
    sys["details"]["background"] = None
    sys["details"]["alignment"] = ""
    sys["details"]["gender"] = flags_bik.get("gender", "")
    sys["details"]["trait"] = flags_bik.get("trait", "")
    sys["details"]["ideal"] = flags_bik.get("ideal", "")
    sys["details"]["bond"] = flags_bik.get("bond", "")
    sys["details"]["flaw"] = flags_bik.get("flaw", "")
    sys["traits"]["size"] = size
    sys["traits"]["languages"] = {"value": ["common"], "custom": flags_bik.get("customLang", ""), "communication": {}}
    sys["currency"] = currency
    sys["resources"] = resources
    for sk, val in skills.items():
        if sk in sys["skills"]:
            sys["skills"][sk]["value"] = val
    for i in range(1, 10):
        key = f"spell{i}"
        sys["spells"].setdefault(key, {"value": 0, "override": None})
        if key in spells:
            sys["spells"][key] = spells[key]

    actor["items"] = items
    actor["flags"] = {
        "core": {},
        "dnd5e": {},
        "bik": {
            "playerCharacter": True,
            "npc": False,
            "foundryActorType": "character",
            "sheet": "ActorSheet5eCharacter",
            **flags_bik,
            "itemCount": len(items),
            "lastModifiedBy": USER_ID,
        },
    }
    return actor


def build_toadette() -> dict:
    c = lore("captain_toadette")
    desc = (c.get("description") or "").replace("\n", "</p><p>")
    bio = f"""<p><strong>PLAYER CHARACTER.</strong> Import this JSON as an Actor of type <em>character</em>. Do not create an NPC and paste into it. lastModifiedBy is a valid Foundry user id.</p>
<p><b>{c['name']}</b> — {c.get('title')}. {c.get('summary')}</p>
<p><b>Status:</b> {c.get('status')}<br><b>Affiliation:</b> {c.get('affiliation')}<br><b>Race:</b> {c.get('race')}</p>
<p><b>Table build:</b> Level 3 Circle of the Land (Forest) Druid. Wisdom caster. This is a rules translation of Bramblehaven siegecraft — sappers, three walls at once, earth and thorn — not a claim the dossier named a D&amp;D class.</p>
<p><b>Ledger:</b> 1,730 XP · Level 3 · 970 to Level 4 (2,700). Power 7 · Fame 68. File new XP in the ledger first.</p>
<h2>Waluigi's Dossier (full)</h2>
<p>{desc}</p>
<h2>How she plays</h2>
<p>She plans. Then the wood moves. Spike Growth is a cavalry gate. Fog Cloud is a sapper screen. Pass without Trace is three teams on three walls. Shillelagh is the command staff becoming a Wisdom weapon. Wild Shape is fieldcraft, not a mascot bit.</p>
<p>The no-quarter order is on the sheet so the table cannot pretend it is not there. It is not a damage bonus.</p>"""

    items = []
    items.append(
        item(
            "class",
            "Druid",
            "icons/magic/nature/leaf-glow-maple-orange-purple.webp",
            {
                "description": p("<p>Full caster. Hit die d8. Primary ability Wisdom. Level 3.</p>"),
                "source": src(),
                "identifier": "druid",
                "levels": 3,
                "hd": {"denomination": "d8", "spent": 0, "additional": ""},
                "spellcasting": {"progression": "full", "ability": "wis", "preparation": {}},
                "primaryAbility": {"value": ["wis"], "all": False},
                "advancement": [],
                "startingEquipment": {},
                "properties": [],
            },
            "class-druid-toadette",
        )
    )
    items.append(
        item(
            "subclass",
            "Circle of the Land",
            "icons/magic/nature/root-vine-entangled-hands.webp",
            {
                "description": p("<p>Forest circle. Always prepared: barkskin, spider climb, spike growth, pass without trace. Natural Recovery after a short rest.</p>"),
                "source": src(),
                "identifier": "land",
                "classIdentifier": "druid",
                "spellcasting": {"progression": "none", "ability": ""},
                "advancement": [],
            },
            "sub-land-toadette",
        )
    )
    items.append(
        item(
            "race",
            "Toad",
            "icons/creatures/invertebrates/spiderling-burst-purple.webp",
            {
                "description": p("<p>Toad. Small. Walk 25 feet. The sports Toadette is not this Toadette.</p>"),
                "source": src(),
                "identifier": "toad",
                "movement": {"walk": 25, "units": "ft"},
                "senses": {},
                "advancement": [],
                "type": {"value": "humanoid", "subtype": "toad"},
            },
            "race-toad-toadette",
        )
    )
    items.append(
        item(
            "background",
            "Siege Commander",
            "icons/environment/settlement/watchtower-silhouette-yellow.webp",
            {
                "description": p("<p>Peach Loyalist command. Fall of Bramblehaven. Overnight sappers. Three breaches. Then the courtyard.</p>"),
                "source": src(),
                "identifier": "siege-commander",
                "advancement": [],
            },
            "bg-toadette",
        )
    )

    items += [
        feat("Druidic", "druidic", "<p>Secret marks for sapper lines and no-retreat routes.</p>", "icons/sundries/documents/document-symbol-triangle-pink.webp"),
        feat("Wild Shape", "wild-shape", "<p>Twice per short rest. Beast form CR 1/4, no fly/swim unless the GM allows campaign beasts. Fieldcraft and cover, not a joke.</p>", "icons/magic/nature/wolf-paw-glow-large-orange.webp"),
        feat("Natural Recovery", "natural-recovery", "<p>After a short rest, recover spell slots totaling half Druid level (rounded up). Circle feature.</p>", "icons/magic/nature/leaf-glow-triple-green.webp"),
        feat("Circle Spells — Forest", "circle-spells-forest", "<p>Always prepared: barkskin, spider climb, spike growth, pass without trace. Filed as cover, walls, thorn caltrops, silent approach.</p>", "icons/magic/nature/root-vines-grow-brown.webp"),
        feat("Ritual Casting", "ritual-casting", "<p>Cast a Druid ritual you have prepared without a slot if it has the ritual tag.</p>", "icons/magic/symbols/runes-star-pentagon-orange.webp"),
        feat("No-Quarter Standing Order", "no-quarter-standing-order", "<p><b>Campaign feature — GM review.</b> Written order: no prisoners from Fawful's forces. After Bramblehaven, fifteen surrendering garrison troops were executed in the keep courtyard. Some Loyalists hesitated. They were overruled. This is not extra damage. It is a political fact. Peach would not have signed it.</p>", "icons/skills/melee/strike-sword-blood-red.webp"),
        feat("Bramblehaven Siegecraft", "bramblehaven-siegecraft", "<p>Advantage on Intelligence (History) or Wisdom (Survival) to plan a breach, place sappers, or time three simultaneous attacks. The masterpiece is the plan.</p>", "icons/environment/settlement/stone-stairs.webp"),
        feat("Shot the Sergeant", "shot-the-sergeant", "<p>She shot one of her own sergeants for suggesting a tactical retreat. Recorded so the table cannot sand it off. Social and command consequences only.</p>", "icons/skills/ranged/arrow-flying-orange-yellow.webp"),
        feat("Memory of Peach", "memory-of-peach", "<p>She is fighting for a Peach who exists only in grief — a princess who would approve of blood. Waluigi is certain the real Peach would not. Roleplay hook, not a buff.</p>", "icons/magic/life/heart-pink.webp"),
        feat("Tactical Brilliance", "tactical-brilliance", "<p>Once per short rest, when you spend at least one minute planning with allies, one ally of your choice may reroll a failed attack or save in the first minute of the next fight. Declare the plan out loud.</p>", "icons/skills/targeting/crosshair-bars-yellow.webp"),
        feat("Ability Score — Wisdom", "asi-wis", "<p>Level 4 is not yet earned. When the ledger hits 2,700 XP, raise Wisdom or take a feat. Do not hand-stamp it.</p>", "icons/skills/trades/academics-investigation-puzzles.webp"),
    ]

    items += [
        weapon("Command Quarterstaff", "icons/weapons/staves/staff-simple-spiral-green.webp", "<p>1d6 bludgeoning, versatile 1d8. Cast shillelagh to make it a Wisdom weapon, 1d8 magical, 1 minute.</p>", 1, 6, "bludgeoning", "simpleM", ["ver"]),
        weapon("Service Dagger", "icons/weapons/daggers/dagger-simple-white.webp", "<p>1d4 piercing, finesse, light, thrown 20/60.</p>", 1, 4, "piercing", "simpleM", ["fin", "lgt", "thr"]),
        equip("Hide Armor", "icons/equipment/chest/breastplate-scale-brown.webp", "<p>AC 12 + Dex (max 2). Trench kit, not a parade.</p>", "light", 12),
        equip("Loyalist Heater Shield", "icons/equipment/shield/heater-steel-boss-red.webp", "<p>+2 AC. Peach's crown on the boss. The paint is newer than the grief.</p>", "shield", 2),
        tool("Herbalism Kit", "icons/tools/laboratory/mortar-powder-green.webp", "<p>Wisdom tool. Goodberry adjuncts and field dressings.</p>", "wis", "her"),
        cons("Healer's Kit", "icons/commodities/cloth/cloth-worn-pink.webp", "<p>10 uses. Stabilize without a Medicine check.</p>"),
        cons("Standard Mushroom", "icons/consumables/mushrooms/mushroom-pink.webp", "<p>Treat as potion of healing (2d4+2) if the table allows. One dose.</p>"),
        cons("Rations, Campaign", "icons/consumables/food/bowl-stew-brown.webp", "<p>Five days.</p>", 5),
        loot("Signal Whistle", "icons/tools/instruments/pipe-flute-brown.webp", "<p>Three notes, three teams.</p>"),
        loot("Peach Loyalist Standing Orders", "icons/sundries/documents/document-sealed-red-yellow.webp", "<p>Paper. The no-quarter clause is in her hand.</p>"),
        loot("Chalk and Sapper Marks", "icons/commodities/materials/powder-black.webp", "<p>Druidic plus military.</p>"),
        loot("Waterskin", "icons/consumables/drinks/alcohol-beer-stein-wooden-brown.webp", "<p>Water.</p>"),
        loot("Map of Bramblehaven", "icons/tools/navigation/map-marked-brown.webp", "<p>The bastion as it was the night before the three breaches.</p>"),
        loot("Peach Ribbon, Folded", "icons/commodities/cloth/cloth-bolt-gold-pink.webp", "<p>Not magic. She will not say when she last unfolded it.</p>"),
    ]

    spells = [
        ("Druidcraft", "druidcraft", 0, "trs", "<p>Cantrip. Weather tell, bloom, faint sensory mark.</p>", "icons/magic/nature/leaf-glow-triple-green.webp"),
        ("Shillelagh", "shillelagh", 0, "trs", "<p>Bonus action. Staff becomes Wisdom melee, 1d8 magical bludgeoning, 1 minute.</p>", "icons/weapons/staves/staff-simple-spiral-green.webp"),
        ("Thorn Whip", "thorn-whip", 0, "trs", "<p>30 ft. 1d6 piercing and pull 10 ft.</p>", "icons/magic/nature/root-vine-thorned-green.webp"),
        ("Guidance", "guidance", 0, "div", "<p>Touch. d4 to one ability check. She uses it on the plan, not the prayer.</p>", "icons/magic/light/hand-sparks-glow-yellow.webp"),
        ("Entangle", "entangle", 1, "con", "<p>20-ft square. Strength save or restrained.</p>", "icons/magic/nature/root-vine-entangle-foot-green.webp"),
        ("Goodberry", "goodberry", 1, "trs", "<p>Ten berries, 1 HP each. She feeds her own first.</p>", "icons/consumables/fruit/berry-leaf-pink.webp"),
        ("Cure Wounds", "cure-wounds", 1, "evo", "<p>1d8 + Wis. Restoration of the living. Not of the executed.</p>", "icons/magic/life/heart-area-circle-red-green.webp"),
        ("Fog Cloud", "fog-cloud", 1, "con", "<p>20-ft fog. Cover for sappers.</p>", "icons/magic/air/fog-gas-smoke-dense-white.webp"),
        ("Faerie Fire", "faerie-fire", 1, "evo", "<p>Outline. Advantage on attacks. She marks a wall, not a joke.</p>", "icons/magic/light/projectile-flare-blue.webp"),
        ("Speak with Animals", "speak-with-animals", 1, "div", "<p>Ritual. Scout reports from things that live in hedges.</p>", "icons/magic/nature/wolf-howl-moon-purple.webp"),
        ("Barkskin", "barkskin", 2, "trs", "<p>Circle. AC cannot be below 16. Concentration.</p>", "icons/magic/defensive/armor-stone-skin.webp"),
        ("Spike Growth", "spike-growth", 2, "trs", "<p>Circle. 20-ft radius, 2d4 piercing per 5 ft moved.</p>", "icons/magic/nature/root-vines-grow-brown.webp"),
        ("Pass without Trace", "pass-without-trace", 2, "abj", "<p>Circle. +10 Stealth, no tracks. How three teams reach three walls.</p>", "icons/magic/perception/silhouette-stealth-shadow.webp"),
        ("Spider Climb", "spider-climb", 2, "trs", "<p>Circle. Walk on walls. Sappers.</p>", "icons/creatures/invertebrates/spider-beetle-lined-green.webp"),
        ("Heat Metal", "heat-metal", 2, "trs", "<p>Punish a garrison in plate. Concentration.</p>", "icons/magic/fire/projectile-embers-orange.webp"),
        ("Hold Person", "hold-person", 2, "enc", "<p>Wisdom save. She will tell you it is for capture. Check the standing order.</p>", "icons/magic/control/encase-creature-humanoid-hold.webp"),
    ]
    for args in spells:
        items.append(spell(*args))

    items += [
        chronicle("Fall of Bramblehaven", "<p>Overnight sappers. Three simultaneous breaches. Bastion taken in a day. Fifteen surrendering troops executed in the courtyard under standing orders.</p>"),
        chronicle("The Sergeant", "<p>A Loyalist sergeant suggested retreat. She shot him. The plan did not change.</p>"),
        chronicle("Sports Toadette", "<p>Waluigi knew her from parties and tennis. Sportsmanship. That person is not commanding this army.</p>"),
        chronicle("Wario Method Interview", "<p>She appears in the campaign XP record around the Wario Method catastrophe. Reference only.</p>"),
        chronicle("Toad God and the Star Shard", "<p>Named on that filing. Reference only. Do not turn a god interview into loot.</p>"),
        chronicle("Embercap at the Wall", "<p>Her field commander went over first, crimson plume as banner and target. She planned. He climbed.</p>"),
    ]

    return envelope(
        name="Toadette — Level 3 Land Druid (Player Character)",
        img="icons/magic/nature/leaf-oak-glow-green.webp",
        bio=bio,
        abilities={"str": 10, "dex": 14, "con": 14, "int": 12, "wis": 16, "cha": 13},
        hp=24,
        ac=16,
        walk=25,
        xp=1730,
        spells={"spell1": {"value": 4, "override": None}, "spell2": {"value": 2, "override": None}},
        skills={"nat": 1, "sur": 1, "prc": 1, "ins": 1, "his": 1, "itm": 1, "ani": 1},
        resources={
            "primary": {"value": 2, "max": 2, "sr": True, "lr": False, "label": "Wild Shape"},
            "secondary": {"value": 1, "max": 1, "sr": True, "lr": False, "label": "Tactical Brilliance"},
            "tertiary": {"value": 0, "max": None, "sr": False, "lr": False, "label": ""},
        },
        currency={"pp": 0, "gp": 18, "ep": 0, "sp": 40, "cp": 0},
        size="sm",
        items=items,
        flags_bik={
            "characterId": "captain_toadette",
            "xpKey": "captain_toadette",
            "class": "Druid (Circle of the Land — Forest)",
            "level": 3,
            "ledgerXP": 1730,
            "nextXP": 2700,
            "remainingXP": 970,
            "powerLevel": 7,
            "fameScore": 68,
            "originalClass": "druid",
            "spellAbility": "wis",
            "saveProf": ("int", "wis"),
            "gender": "female",
            "trait": "Plans like a siege engineer. Total commitment.",
            "ideal": "Peach's memory is the only law.",
            "bond": "The Peach Loyalists, and a princess who cannot talk back.",
            "flaw": "No retreat. No prisoners. She shot a sergeant for suggesting otherwise.",
            "customLang": "Druidic",
        },
    )


def build_embercap() -> dict:
    c = lore("embercap")
    desc = (c.get("description") or "").replace("\n", "</p><p>")
    bio = f"""<p><strong>PLAYER CHARACTER.</strong> Foundry type <em>character</em>. Not an NPC.</p>
<p><b>{c['name']}</b> — {c.get('title')}. {c.get('summary')}</p>
<p><b>Status:</b> {c.get('status')}<br><b>Affiliation:</b> {c.get('affiliation')}</p>
<p><b>Table build:</b> Level 2 Fighter. Battle Master flavor without stealing Toadette's plan. Hammer in hand. First over the wall.</p>
<p><b>Ledger:</b> 470 XP · Level 2 · 430 to Level 3 (900).</p>
<h2>Waluigi's Dossier</h2>
<p>{desc}</p>"""
    items = [
        item("class", "Fighter", "icons/skills/melee/strike-hammer-destructive-orange.webp", {
            "description": p("<p>Hit die d10. Fighting Style, Second Wind, Action Surge. Level 2.</p>"),
            "source": src(), "identifier": "fighter", "levels": 2,
            "hd": {"denomination": "d10", "spent": 0, "additional": ""},
            "spellcasting": {"progression": "none", "ability": ""},
            "primaryAbility": {"value": ["str"], "all": False},
            "advancement": [], "properties": [],
        }, "class-fighter-ember"),
        item("subclass", "Battle Master", "icons/skills/melee/spear-tips-triple-orange.webp", {
            "description": p("<p>Not yet unlocked at level 2. Left on the sheet as the intended path at 3. Do not spend superiority dice until the ledger allows.</p>"),
            "source": src(), "identifier": "battle-master", "classIdentifier": "fighter",
            "advancement": [],
        }, "sub-bm-ember"),
        item("race", "Toad", "icons/creatures/invertebrates/spiderling-burst-purple.webp", {
            "description": p("<p>Toad. Small. Walk 25.</p>"),
            "source": src(), "identifier": "toad", "movement": {"walk": 25, "units": "ft"},
            "advancement": [], "type": {"value": "humanoid", "subtype": "toad"},
        }, "race-toad-ember"),
        item("background", "Field Commander", "icons/environment/settlement/watchtower-fire.webp", {
            "description": p("<p>Leads from the front. Crimson plume is banner and target.</p>"),
            "source": src(), "identifier": "field-commander", "advancement": [],
        }, "bg-ember"),
        feat("Fighting Style — Great Weapon Fighting", "fs-gwf", "<p>Reroll 1s and 2s on the hammer's damage dice.</p>", "icons/weapons/hammers/hammer-double-engraved-gold.webp"),
        feat("Second Wind", "second-wind", "<p>Bonus action, 1d10+2 HP, once per short rest.</p>", "icons/magic/life/heart-cross-strong-green.webp"),
        feat("Action Surge", "action-surge", "<p>One extra action, once per short rest. How he is first over the wall.</p>", "icons/skills/movement/figure-running-gray.webp"),
        feat("Crimson Plume", "crimson-plume", "<p>Allies who can see the plume have advantage on saves against being frightened while you are not down. You have disadvantage on Stealth. Campaign feature.</p>", "icons/commodities/materials/feather-colored-red.webp"),
        feat("First Over the Wall", "first-over-the-wall", "<p>Advantage on the first Athletics check to climb or breach in a fight you announced you would lead.</p>", "icons/environment/settlement/stone-stairs.webp"),
        feat("Serves Toadette", "serves-toadette", "<p>He executes her plans. The courtyard is on his conscience whether he admits it. Roleplay, not a buff.</p>", "icons/magic/control/silhouette-hold-change-blue.webp"),
        weapon("Field Warhammer", "icons/weapons/hammers/hammer-war-spiked.webp", "<p>1d8 bludgeoning, versatile 1d10. He does the dying alongside his troops.</p>", 1, 8, "bludgeoning", "martialM", ["ver"]),
        weapon("Handaxe", "icons/weapons/axes/axe-battle-orange.webp", "<p>Backup. 1d6 slashing, light, thrown 20/60.</p>", 1, 6, "slashing", "simpleM", ["lgt", "thr"]),
        equip("Chain Shirt", "icons/equipment/chest/breastplate-scale-grey.webp", "<p>AC 13 + Dex (max 2).</p>", "medium", 13),
        equip("Wooden Shield", "icons/equipment/shield/round-wooden-boss-steel.webp", "<p>+2 AC. Plume is on the helm, not the shield.</p>", "shield", 2),
        loot("Crimson Plume Helm", "icons/equipment/head/helm-barbute-steel.webp", "<p>The banner. Visible. A promise.</p>"),
        cons("Healer's Kit", "icons/commodities/cloth/cloth-worn-pink.webp", "<p>For the people who followed the plume.</p>"),
        cons("Rations", "icons/consumables/food/bowl-stew-brown.webp", "<p>Three days.</p>", 3),
        loot("Loyalist Commission", "icons/sundries/documents/document-sealed-red-yellow.webp", "<p>Field commander under Toadette. Not a signature on the no-quarter order. He was still in the courtyard.</p>"),
        chronicle("Bramblehaven Wall", "<p>Among the first over. Crimson plume in the smoke.</p>"),
        chronicle("The Courtyard", "<p>Fifteen surrenders. Toadette's order. He was there.</p>"),
    ]
    return envelope(
        name="Embercap — Level 2 Fighter (Player Character)",
        img="icons/skills/melee/strike-hammer-destructive-orange.webp",
        bio=bio,
        abilities={"str": 16, "dex": 12, "con": 15, "int": 10, "wis": 13, "cha": 14},
        hp=20,
        ac=17,
        walk=25,
        xp=470,
        spells={},
        skills={"ath": 1, "itm": 1, "prc": 1, "ins": 1},
        resources={
            "primary": {"value": 1, "max": 1, "sr": True, "lr": False, "label": "Second Wind"},
            "secondary": {"value": 1, "max": 1, "sr": True, "lr": False, "label": "Action Surge"},
            "tertiary": {"value": 0, "max": None, "sr": False, "lr": False, "label": ""},
        },
        currency={"pp": 0, "gp": 12, "ep": 0, "sp": 25, "cp": 0},
        size="sm",
        items=items,
        flags_bik={
            "characterId": "embercap",
            "xpKey": "embercap",
            "class": "Fighter",
            "level": 2,
            "ledgerXP": 470,
            "nextXP": 900,
            "remainingXP": 430,
            "originalClass": "fighter",
            "spellAbility": "",
            "saveProf": ("str", "con"),
            "gender": "male",
            "trait": "Leads from the front.",
            "ideal": "Soldiers follow a banner that bleeds with them.",
            "bond": "The troops under the plume. Toadette's plan.",
            "flaw": "He will carry out an order he cannot defend.",
        },
    )


def build_dewdrop() -> dict:
    c = lore("scribe_dewdrop")
    desc = (c.get("description") or "").replace("\n", "</p><p>")
    bio = f"""<p><strong>PLAYER CHARACTER.</strong> Foundry type <em>character</em>. Not an NPC.</p>
<p><b>{c['name']}</b> — {c.get('title')}. {c.get('summary')}</p>
<p><b>Status:</b> {c.get('status')}<br><b>Affiliation:</b> {c.get('affiliation')}</p>
<p><b>Table build:</b> Level 1 Bard (College of Lore intended at 3). The archive as a weapon. Testimony, not spin.</p>
<p><b>Ledger note:</b> XP_SUMMARY also has a separate Medic Dewdrop (25 XP). This sheet is <code>scribe_dewdrop</code>, the Chroniclers Councilor. Starting snapshot Level 1 / 0 XP until the scribe's own ledger row is filed. Do not merge with the medic.</p>
<h2>Dossier</h2>
<p>{desc}</p>"""
    items = [
        item("class", "Bard", "icons/skills/trades/music-notes-sound-blue.webp", {
            "description": p("<p>Full caster. d8. Charisma. Level 1. Bardic Inspiration d6.</p>"),
            "source": src(), "identifier": "bard", "levels": 1,
            "hd": {"denomination": "d8", "spent": 0, "additional": ""},
            "spellcasting": {"progression": "full", "ability": "cha", "preparation": {}},
            "primaryAbility": {"value": ["cha"], "all": False},
            "advancement": [], "properties": [],
        }, "class-bard-dew"),
        item("race", "Toad", "icons/creatures/invertebrates/spiderling-burst-purple.webp", {
            "description": p("<p>Toad. Small. Walk 25.</p>"),
            "source": src(), "identifier": "toad", "movement": {"walk": 25, "units": "ft"},
            "advancement": [], "type": {"value": "humanoid", "subtype": "toad"},
        }, "race-toad-dew"),
        item("background", "Chronicler", "icons/sundries/books/book-embossed-gold-red.webp", {
            "description": p("<p>Faction archive. Cross-checks testimony. Refuses emergency language that erases a fact.</p>"),
            "source": src(), "identifier": "chronicler", "advancement": [],
        }, "bg-dew"),
        feat("Bardic Inspiration", "bardic-inspiration", "<p>Bonus action, d6, Cha times per long rest (3). Ally adds it to one check, attack, or save.</p>", "icons/magic/control/buff-flight-wings-runes-blue-white.webp"),
        feat("Spellcasting — Bard", "bard-spells", "<p>Two cantrips, four known 1st-level, two 1st-level slots.</p>", "icons/magic/symbols/runes-star-blue.webp"),
        feat("Jack of All Trades", "jack-of-all-trades", "<p>Not yet. Level 2. Do not add half-prof until the ledger says 2.</p>", "icons/skills/trades/academics-investigation-puzzles.webp"),
        feat("Unvarnished Record", "unvarnished-record", "<p>Advantage on Insight to detect a rewritten account, and on Investigation to find a contradiction in paper. Campaign feature.</p>", "icons/sundries/documents/document-symbol-circle-gold-red.webp"),
        feat("A Good Fight Now", "a-good-fight-now", "<p>Once per long rest, when a leader tries to bury a fact in front of you, you may force a public recitation of the written record. Social, not damage.</p>", "icons/skills/social/thumbsup-approval-like.webp"),
        weapon("Scribe's Dagger", "icons/weapons/daggers/dagger-simple-white.webp", "<p>1d4 piercing, finesse, light. For opening letters, not throats, until it isn't.</p>", 1, 4, "piercing", "simpleM", ["fin", "lgt"]),
        equip("Scholar's Leather", "icons/equipment/chest/vest-leather-brown.webp", "<p>AC 11 + Dex.</p>", "light", 11),
        tool("Calligrapher's Supplies", "icons/tools/scribal/ink-quill-pink.webp", "<p>The real weapon.</p>", "int", "art"),
        loot("Faction Archive Folio", "icons/sundries/books/book-open-purple.webp", "<p>Comparisons of testimony. Inconvenient facts that emergency language tried to erase.</p>"),
        loot("Ink and Quills", "icons/tools/scribal/ink-well-black.webp", "<p>A single corrupted datum can unravel a timeline.</p>"),
        loot("Sealing Wax", "icons/sundries/misc/petals-woven.webp", "<p>What leaves this folio is signed.</p>"),
        cons("Rations", "icons/consumables/food/bowl-stew-brown.webp", "<p>Two days. The archive still eats.</p>", 2),
        spell("Vicious Mockery", "vicious-mockery", 0, "enc", "<p>60 ft, Wisdom save, 1d4 psychic, disadvantage on next attack. She quotes the record back.</p>", "icons/magic/sonic/scream-wail-shout-teal.webp"),
        spell("Message", "message", 0, "trs", "<p>Quiet correction across a council table.</p>", "icons/magic/air/air-wave-sweep-blue.webp"),
        spell("Comprehend Languages", "comprehend-languages", 1, "div", "<p>Ritual. No document stays foreign.</p>", "icons/sundries/scrolls/scroll-writing-sealing-wax-yellow.webp"),
        spell("Detect Thoughts", "detect-thoughts", 2, "div", "<p>Not known yet. Listed as the intended later tool. Do not prepare at level 1.</p>", "icons/magic/perception/third-eye-blue-red.webp"),
        spell("Heroism", "heroism", 1, "enc", "<p>Temp HP equal to Cha. For the person about to tell the truth in a room that does not want it.</p>", "icons/magic/life/heart-cross-blue.webp"),
        spell("Cure Wounds", "cure-wounds", 1, "evo", "<p>1d8 + Cha. She is not the medic Dewdrop. She still knows how to keep a witness alive.</p>", "icons/magic/life/heart-area-circle-red-green.webp"),
        spell("Sleep", "sleep", 1, "enc", "<p>5d8 HP of creatures. A council that will not listen can at least be quiet.</p>", "icons/magic/control/hypnosis-mesmerism-swirl.webp"),
        chronicle("Council Record", "<p>Named answer to calling a documented atrocity a misunderstanding.</p>"),
        chronicle("Not the Medic", "<p>Do not merge this sheet with Medic Dewdrop in the XP ledger.</p>"),
    ]
    return envelope(
        name="Dewdrop — Level 1 Bard (Player Character)",
        img="icons/sundries/books/book-embossed-gold-red.webp",
        bio=bio,
        abilities={"str": 8, "dex": 14, "con": 12, "int": 14, "wis": 13, "cha": 16},
        hp=9,
        ac=13,
        walk=25,
        xp=0,
        spells={"spell1": {"value": 2, "override": None}},
        skills={"his": 1, "inv": 1, "ins": 1, "per": 1, "arc": 1},
        resources={
            "primary": {"value": 3, "max": 3, "sr": False, "lr": True, "label": "Bardic Inspiration"},
            "secondary": {"value": 0, "max": None, "sr": False, "lr": False, "label": ""},
            "tertiary": {"value": 0, "max": None, "sr": False, "lr": False, "label": ""},
        },
        currency={"pp": 0, "gp": 8, "ep": 0, "sp": 15, "cp": 0},
        size="sm",
        items=items,
        flags_bik={
            "characterId": "scribe_dewdrop",
            "xpKey": "scribe_dewdrop",
            "class": "Bard",
            "level": 1,
            "ledgerXP": 0,
            "doNotMergeWith": "Medic Dewdrop (XP_SUMMARY dewdrop)",
            "originalClass": "bard",
            "spellAbility": "cha",
            "saveProf": ("dex", "cha"),
            "trait": "A single corrupted datum can unravel entire timelines.",
            "ideal": "History is the compass.",
            "bond": "The faction archive.",
            "flaw": "Will pick a fight with a superior rather than let a lie stand.",
        },
    )


def validate(path: Path) -> None:
    import re
    a = json.loads(path.read_text(encoding="utf-8"))
    assert a["type"] == "character", path
    assert a["flags"]["bik"]["npc"] is False
    assert a["flags"]["bik"]["playerCharacter"] is True
    idre = re.compile(r"^[A-Za-z0-9]{16}$")
    assert idre.match(a["_stats"]["lastModifiedBy"]), a["_stats"]["lastModifiedBy"]
    assert idre.match(a["_id"])
    for it in a["items"]:
        assert idre.match(it["_id"]), it["name"]
        assert idre.match(it["_stats"]["lastModifiedBy"])
        assert it["_stats"]["lastModifiedBy"] == USER_ID
        assert "-" not in it["_stats"]["lastModifiedBy"]


def main() -> None:
    jobs = [
        (ROOT / "fvtt-Actor-toadette-level-3-land-druid-player.json", build_toadette),
        (ROOT / "fvtt-Actor-embercap-level-2-fighter-player.json", build_embercap),
        (ROOT / "fvtt-Actor-dewdrop-level-1-bard-player.json", build_dewdrop),
    ]
    # also overwrite the old toadette filename so the user does not import the broken one
    jobs.append((ROOT / "fvtt-Actor-captain-toadette-level-3-land-druid-player.json", build_toadette))
    for path, fn in jobs:
        actor = fn()
        path.write_text(json.dumps(actor, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        validate(path)
        print(f"OK {path.name} type={actor['type']} items={len(actor['items'])} lastMod={actor['_stats']['lastModifiedBy']} bytes={path.stat().st_size}")


if __name__ == "__main__":
    main()
