#!/usr/bin/env python3
"""Generate the Regal Lion - Raventree Manor Occupation Force roster."""
import json
import os

ROSTER = {
  "format": "waluipedia-forge-roster/1",
  "packet": "regal-lion",
  "name": "The Regal Lion",
  "title": "Raventree Manor Occupation Force — Knights, Sentries, and Manor Guardians",
  "faction": "iron_legion",
  "group": "Iron Legion",
  "color": "#DAA520",
  "disposition": -1,
  "file_prefix": "fvtt-Actor-rl-",
  "portraits": "portraits/regal-lion",
  "renders": "npc-forge/regal-lion/renders",
  "source": "data/characters.json & factions.json → The Regal Lion / Byscilla Danos's Operations Command at Raventree Manor",
  "style": "Clean cel-shaded character art in the style of dark fantasy military concept art, bold dark outlines, polished steel and gold lion crest heraldry, dark navy blue and crimson surcoats, cold iron plate, flat colours, crisp shading.",
  "framing": "Full body, whole figure visible, three-quarter view, centred, isolated on a plain flat solid magenta background (#FF00FF), no floor, no ground shadow, no text, no border.",
  "negative": "photorealistic, 3d render, blurry, cropped, cut off, multiple characters, text, watermark, signature, border, frame, ground shadow, floor, background scenery, gradient background",
  "background": "#FF00FF",
  "render_size": [1408, 768],
  "plate_size": 512,
  "subfolders": {
    "Manor Command": {
      "color": "#B8860B",
      "description": "Byscilla Danos and operational officers directing the containment and survey of Raventree Manor."
    },
    "Regal Lion Knights": {
      "color": "#DAA520",
      "description": "Sworn knights, halberdiers, and arbalests of the Regal Lion maintaining the estate perimeter."
    },
    "Manor Wardens": {
      "color": "#8B7355",
      "description": "Greenhouse sentries, gatekeepers, and goblin scouts watching the grounds and rust-monster nests."
    },
    "Heavy Beasts & Auxiliaries": {
      "color": "#800000",
      "description": "Armored pride-lions, gate-breaker ogres, and heavy iron colossi guarding the courtyard and gates."
    }
  },
  "entries": [
    {
      "id": "byscilla-danos",
      "name": "Commander Byscilla Danos",
      "folder": "Manor Command",
      "tier": "Field Commander",
      "role": "field commander & sorceress",
      "type": "humanoid",
      "subtype": "human",
      "size": "med",
      "alignment": "Lawful Neutral",
      "cr": 6,
      "abilities": [12, 16, 14, 16, 14, 18],
      "saves": ["con", "cha"],
      "skills": {"arc": 6, "dec": 7, "ins": 5, "itm": 7, "prc": 5},
      "ac": 16,
      "ac_words": "command breastplate & duelist agility",
      "hp": 84,
      "hp_formula": "13d8+26",
      "speed": {"walk": 30},
      "senses": {"darkvision": 0},
      "languages": {"value": ["common"], "custom": "High Imperial, Corvinarus Dialect"},
      "di": [],
      "dr": [],
      "dv": [],
      "ci": ["charmed", "frightened"],
      "traits": [
        {
          "name": "Severe Presence",
          "icon": "intimidate",
          "text": "Byscilla does not negotiate. Hostile creatures within 30 feet that can see or hear her have disadvantage on Charisma and Wisdom saving throws against her spells and features."
        },
        {
          "name": "Byscilla's Command Gloves",
          "icon": "sealed",
          "text": "Byscilla turns rooms into task lists and people into corrected posture. When an ally within 30 feet misses an attack, she can use a reaction to issue a sharp reprimand, allowing the ally to reroll the attack."
        }
      ],
      "attacks": [
        {
          "name": "Command Rapier",
          "icon": "sabre",
          "kind": "melee",
          "ability": "dex",
          "wtype": "martialM",
          "reach": 5,
          "dmg": [1, 8, "piercing"],
          "extra": [[1, 6, "force"]],
          "props": ["fin"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 1d8 + 3 piercing damage plus 1d6 force damage.</p>"
        },
        {
          "name": "Sorcerous Fire Bolt",
          "icon": "firebolt",
          "kind": "ranged",
          "ability": "cha",
          "wtype": "natural",
          "range": [120, 120],
          "dmg": [2, 10, "fire"],
          "props": [],
          "text": "<p><em>Ranged Spell Attack:</em> range 120 ft., one target. <em>Hit:</em> 2d10 fire damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Phase One Containment Protocol",
          "icon": "hold",
          "activation": "action",
          "save": {
            "ability": "cha",
            "dc": 15,
            "dmg": [[3, 8, "force"]],
            "half": True,
            "range": "60 ft"
          },
          "text": "<p>Byscilla activates her pre-calculated containment matrix against a spellcaster within 60 feet. The target must succeed on a DC 15 Charisma saving throw or take 3d8 force damage and be unable to cast spells of 1st level or higher until the end of its next turn. On a success, it takes half damage and its spellcasting is not restricted.</p>"
        }
      ],
      "multiattack": "<p>Commander Danos makes two attacks with her Command Rapier or casts Fire Bolt twice.</p>",
      "look": "A sharp, severe human noblewoman in fitted charcoal-grey field armor with dark leather gloves, high leather collar, and swept-back silver-streaked hair. Cold piercing gaze, holding an elegant steel rapier at her side.",
      "seed": 610001,
      "plate": "byscilla-danos",
      "token_size": 1,
      "bio": [
        "<p>Byscilla Danos oversees the occupation and containment of Raventree Manor for the Iron Legion. Direct, brutally competent, and carrying the Corvinarus bloodline, she splits teams with chilling tactical precision and has zero tolerance for excuses.</p>"
      ],
      "tags": ["iron-legion", "regal-lion", "commander", "humanoid", "sorceress"]
    },
    {
      "id": "thornbury",
      "name": "Quartermaster Thornbury",
      "folder": "Manor Command",
      "tier": "Mages' Guild Auditor",
      "role": "quartermaster spy",
      "type": "humanoid",
      "subtype": "human",
      "size": "med",
      "alignment": "True Neutral",
      "cr": 1,
      "abilities": [10, 16, 12, 16, 14, 10],
      "saves": ["dex", "int"],
      "skills": {"dec": 4, "inv": 5, "prc": 4, "ste": 5},
      "ac": 14,
      "ac_words": "concealed padded vest & agility",
      "hp": 27,
      "hp_formula": "6d8",
      "speed": {"walk": 30},
      "senses": {"darkvision": 0},
      "languages": {"value": ["common"], "custom": "Guild Cipher"},
      "di": [],
      "dr": [],
      "dv": [],
      "ci": [],
      "traits": [
        {
          "name": "Sneak Attack",
          "icon": "dagger",
          "text": "Once per turn, Thornbury deals an extra 2d6 damage to a creature he hits with an attack roll if he has advantage or an ally is within 5 feet of the target."
        },
        {
          "name": "Itemized Invoice",
          "icon": "scroll",
          "text": "When targeted by a melee attack, Thornbury can use a reaction to produce a ledger and recite an itemized damages claim, imposing disadvantage on the attack roll."
        }
      ],
      "attacks": [
        {
          "name": "Concealed Ledger Dagger",
          "icon": "dagger",
          "kind": "melee",
          "ability": "dex",
          "wtype": "simpleM",
          "reach": 5,
          "dmg": [1, 4, "piercing"],
          "props": ["fin", "lgt"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 1d4 + 3 piercing damage.</p>"
        },
        {
          "name": "Pneumatic Crossbow",
          "icon": "crossbow",
          "kind": "ranged",
          "ability": "dex",
          "wtype": "simpleR",
          "range": [80, 320],
          "dmg": [1, 8, "piercing"],
          "props": ["amm", "lgt"],
          "text": "<p><em>Ranged Weapon Attack:</em> range 80/320 ft., one target. <em>Hit:</em> 1d8 + 3 piercing damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Potion of Invisibility",
          "icon": "flask_yellow",
          "activation": "action",
          "text": "<p>Thornbury chugs one of his hidden Mages' Guild expense potions and becomes invisible until he attacks, casts a spell, or is dragged away by the ear.</p>"
        }
      ],
      "multiattack": None,
      "look": "A balding, stuffy middle-aged human clerk in round spectacles, a rumpled brown tweed vest, holding a wooden abacus and itemized parchment ledgers clutched tightly against his chest. Scowling and anxious expression.",
      "seed": 610002,
      "plate": "thornbury",
      "token_size": 1,
      "bio": [
        "<p>The Mages' Guild spy and expense auditor who charged Archie 2,062 gold pieces for a single broken rope. Caught taking a heated luxury bubble bath during operational hours, he was dragged away by the ear by Byscilla Danos.</p>"
      ],
      "tags": ["mages-guild", "spy", "auditor", "humanoid"]
    },
    {
      "id": "sir-garrick-lionheart",
      "name": "Knight-Captain Garrick",
      "folder": "Manor Command",
      "tier": "Regal Lion Captain",
      "role": "paladin champion",
      "type": "humanoid",
      "subtype": "human",
      "size": "med",
      "alignment": "Lawful Good",
      "cr": 5,
      "abilities": [18, 12, 16, 11, 14, 16],
      "saves": ["wis", "cha"],
      "skills": {"ath": 7, "itm": 6, "rel": 3},
      "ac": 18,
      "ac_words": "Regal Lion full plate & buckler",
      "hp": 85,
      "hp_formula": "10d8+40",
      "speed": {"walk": 30},
      "senses": {"darkvision": 0},
      "languages": {"value": ["common"]},
      "di": [],
      "dr": [],
      "dv": [],
      "ci": ["frightened"],
      "traits": [
        {
          "name": "Aura of the Regal Lion",
          "icon": "shield",
          "text": "Allies within 10 feet of Captain Garrick gain a +3 bonus to saving throws against being charmed or frightened."
        }
      ],
      "attacks": [
        {
          "name": "Lionheart Flame Blade",
          "icon": "sabre",
          "kind": "melee",
          "ability": "str",
          "wtype": "martialM",
          "reach": 5,
          "dmg": [2, 6, "slashing"],
          "extra": [[1, 8, "fire"]],
          "props": ["two"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 2d6 + 4 slashing damage plus 1d8 fire damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Challenger's Roar",
          "icon": "shout",
          "activation": "bonus",
          "save": {
            "ability": "wis",
            "dc": 14,
            "half": False,
            "range": "30 ft"
          },
          "text": "<p>Captain Garrick roars a challenge in the name of the Regal Lion. Hostile creatures within 30 feet must succeed on a DC 14 Wisdom saving throw or have disadvantage on attack rolls against any target other than Garrick for 1 minute.</p>"
        }
      ],
      "multiattack": "<p>Captain Garrick makes two attacks with his Lionheart Flame Blade.</p>",
      "look": "A heroic, seasoned knight in ornate silver and polished gold plate armor emblazoned with the roaring Regal Lion crest, wearing a crimson cloak. Holding a large flaming broadsword with a lion-head crossguard.",
      "seed": 610003,
      "plate": "sir-garrick-lionheart",
      "token_size": 1,
      "bio": [
        "<p>Senior commander of the Regal Lion detachment at Raventree Manor. While Byscilla handles logistics and containment with cold detachment, Garrick ensures knightly morale and personal valor remain unbroken.</p>"
      ],
      "tags": ["regal-lion", "knight", "paladin", "humanoid"]
    },
    {
      "id": "regal-lion-manor-guard",
      "name": "Regal Lion Manor Guard",
      "folder": "Regal Lion Knights",
      "tier": "Garrison Footman",
      "role": "patrol sentry",
      "type": "humanoid",
      "subtype": "human",
      "size": "med",
      "alignment": "Lawful Neutral",
      "cr": 1,
      "abilities": [15, 12, 14, 10, 11, 10],
      "saves": ["str"],
      "skills": {"ath": 4, "prc": 3},
      "ac": 16,
      "ac_words": "chain mail & lion heater shield",
      "hp": 26,
      "hp_formula": "4d8+8",
      "speed": {"walk": 30},
      "senses": {"darkvision": 0},
      "languages": {"value": ["common"]},
      "di": [],
      "dr": [],
      "dv": [],
      "ci": [],
      "traits": [
        {
          "name": "Manor Sentry",
          "icon": "eye",
          "text": "The guard has advantage on Wisdom (Perception) checks to notice hidden or sneaking creatures within 60 feet."
        }
      ],
      "attacks": [
        {
          "name": "Guardsman Spear",
          "icon": "spear",
          "kind": "melee",
          "ability": "str",
          "wtype": "simpleM",
          "reach": 5,
          "dmg": [1, 6, "piercing"],
          "props": ["ver"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 1d6 + 2 piercing damage, or 1d8 + 2 piercing damage if used two-handed.</p>"
        },
        {
          "name": "Sidearm Shortsword",
          "icon": "shortsword",
          "kind": "melee",
          "ability": "str",
          "wtype": "martialM",
          "reach": 5,
          "dmg": [1, 6, "piercing"],
          "props": ["fin", "lgt"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 1d6 + 2 piercing damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Interception Stance",
          "icon": "shield",
          "activation": "reaction",
          "text": "<p>When a creature within 5 feet of the guard is hit by an attack, the guard can use a reaction to reduce the damage taken by that creature by 1d10 + 2.</p>"
        }
      ],
      "multiattack": "<p>The Manor Guard makes two attacks with their Guardsman Spear.</p>",
      "look": "A disciplined human sentry in gleaming steel plate and mail armor, wearing a royal navy-blue tabard with a gold Regal Lion insignia and an open-faced sallet helmet. Holding a tall steel spear and a heater shield.",
      "seed": 610004,
      "plate": "regal-lion-manor-guard",
      "token_size": 1,
      "bio": [
        "<p>The standing guard of Raventree Manor under the Regal Lion's occupation. Patrolling hallways and courtyard perimeters, they keep order among the staff and bar unauthorized entry to the fractured wings.</p>"
      ],
      "tags": ["regal-lion", "guard", "footman", "humanoid"]
    },
    {
      "id": "regal-lion-halberdier",
      "name": "Regal Lion Halberdier",
      "folder": "Regal Lion Knights",
      "tier": "Heavy Guard",
      "role": "polearm specialist",
      "type": "humanoid",
      "subtype": "human",
      "size": "med",
      "alignment": "Lawful Neutral",
      "cr": 2,
      "abilities": [16, 12, 15, 10, 12, 10],
      "saves": ["str", "con"],
      "skills": {"ath": 5},
      "ac": 17,
      "ac_words": "half-plate & reinforced pauldrons",
      "hp": 45,
      "hp_formula": "6d8+18",
      "speed": {"walk": 30},
      "senses": {"darkvision": 0},
      "languages": {"value": ["common"]},
      "di": [],
      "dr": [],
      "dv": [],
      "ci": [],
      "traits": [
        {
          "name": "Brace Against Charge",
          "icon": "halberd",
          "text": "If a creature moves at least 20 feet straight toward the halberdier and then enters their reach, the halberdier can make an opportunity attack against that creature with advantage."
        }
      ],
      "attacks": [
        {
          "name": "Lion's Halberd",
          "icon": "halberd",
          "kind": "melee",
          "ability": "str",
          "wtype": "martialM",
          "reach": 10,
          "dmg": [1, 10, "slashing"],
          "props": ["two", "hvy"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 10 ft., one target. <em>Hit:</em> 1d10 + 3 slashing damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Sweeping Cleave",
          "icon": "spin",
          "activation": "action",
          "save": {
            "ability": "dex",
            "dc": 13,
            "dmg": [[1, 10, "slashing"]],
            "half": False,
            "range": "self",
            "template": {"type": "radius", "size": 5}
          },
          "text": "<p>The halberdier spins their weapon in a wide arc. Each enemy within 5 feet must succeed on a DC 13 Dexterity saving throw or take 1d10 + 3 slashing damage.</p>"
        }
      ],
      "multiattack": "<p>The Halberdier makes two attacks with their Lion's Halberd.</p>",
      "look": "A stalwart heavy infantry guard clad in fluted steel plate armor with lion-embossed pauldrons, wearing an enclosed visored bascinet. Gripping a long, ornate two-handed poleaxe halberd in a ready guard stance.",
      "seed": 610005,
      "plate": "regal-lion-halberdier",
      "token_size": 1,
      "bio": [
        "<p>Stationed at major thresholds, arched doorways, and manor staircases, halberdiers form an impassable barrier against large beasts, charging knights, and rebellious manor staff.</p>"
      ],
      "tags": ["regal-lion", "halberdier", "heavy", "humanoid"]
    },
    {
      "id": "regal-lion-manor-arbalest",
      "name": "Regal Lion Manor Arbalest",
      "folder": "Regal Lion Knights",
      "tier": "Rampart Marksman",
      "role": "crossbow marksman",
      "type": "humanoid",
      "subtype": "human",
      "size": "med",
      "alignment": "Lawful Neutral",
      "cr": 2,
      "abilities": [12, 16, 14, 11, 14, 9],
      "saves": ["dex"],
      "skills": {"prc": 4, "ste": 5},
      "ac": 15,
      "ac_words": "studded leather & steel cuirass",
      "hp": 38,
      "hp_formula": "6d8+12",
      "speed": {"walk": 30},
      "senses": {"darkvision": 0},
      "languages": {"value": ["common"]},
      "di": [],
      "dr": [],
      "dv": [],
      "ci": [],
      "traits": [
        {
          "name": "Rampart Vantage",
          "icon": "eye",
          "text": "The arbalest deals an extra 1d6 damage on ranged weapon attacks while shooting from higher elevation or half cover."
        }
      ],
      "attacks": [
        {
          "name": "Heavy Manor Arbalest",
          "icon": "crossbow",
          "kind": "ranged",
          "ability": "dex",
          "wtype": "martialR",
          "range": [100, 400],
          "dmg": [1, 10, "piercing"],
          "props": ["amm", "two", "hvy", "lod"],
          "text": "<p><em>Ranged Weapon Attack:</em> range 100/400 ft., one target. <em>Hit:</em> 1d10 + 3 piercing damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Suppression Bolt",
          "icon": "bolt",
          "activation": "action",
          "save": {
            "ability": "dex",
            "dc": 13,
            "dmg": [[2, 8, "piercing"]],
            "half": True,
            "range": "100 ft"
          },
          "text": "<p>Fires a weighted steel quarrel at a target within 100 feet. The target must succeed on a DC 13 Dexterity saving throw or take 2d8 piercing damage and have its movement speed reduced to 0 until the start of its next turn.</p>"
        }
      ],
      "multiattack": "<p>The Arbalest makes two attacks with their Heavy Manor Arbalest.</p>",
      "look": "An eagle-eyed marksman in a dark navy tunic with steel shoulder cops and leather archery bracers, aiming a large heavy mechanical steel arbalest crossbow with a lion-motif stirrup.",
      "seed": 610006,
      "plate": "regal-lion-manor-arbalest",
      "token_size": 1,
      "bio": [
        "<p>Positioned on manor balustrades and the greenhouse iron catwalks, these arbalests scan the grounds for encroaching monstrosities and planar incursions.</p>"
      ],
      "tags": ["regal-lion", "arbalest", "marksman", "humanoid"]
    },
    {
      "id": "regal-lion-chaplain",
      "name": "Regal Lion Chaplain",
      "folder": "Regal Lion Knights",
      "tier": "Flamekeep Chaplain",
      "role": "combat cleric",
      "type": "humanoid",
      "subtype": "human",
      "size": "med",
      "alignment": "Lawful Neutral",
      "cr": 3,
      "abilities": [14, 10, 14, 12, 16, 13],
      "saves": ["wis", "cha"],
      "skills": {"med": 5, "rel": 5},
      "ac": 16,
      "ac_words": "scale mail & Silver Flame shield",
      "hp": 45,
      "hp_formula": "7d8+14",
      "speed": {"walk": 30},
      "senses": {"darkvision": 0},
      "languages": {"value": ["common"], "custom": "Flamekeep Liturgy"},
      "di": [],
      "dr": ["radiant"],
      "dv": [],
      "ci": [],
      "traits": [
        {
          "name": "Litany of Purification",
          "icon": "candle",
          "text": "Undead and fiends within 30 feet of the chaplain have disadvantage on attack rolls against the chaplain."
        }
      ],
      "attacks": [
        {
          "name": "Blessed Heavy Mace",
          "icon": "mace",
          "kind": "melee",
          "ability": "str",
          "wtype": "simpleM",
          "reach": 5,
          "dmg": [1, 8, "bludgeoning"],
          "extra": [[1, 6, "radiant"]],
          "props": [],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 1d8 + 2 bludgeoning damage plus 1d6 radiant damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Radiant Purification",
          "icon": "fireball",
          "activation": "action",
          "save": {
            "ability": "con",
            "dc": 13,
            "dmg": [[3, 6, "radiant"]],
            "half": True,
            "range": "self",
            "template": {"type": "cone", "size": 15}
          },
          "text": "<p>The chaplain channels the Silver Flame in a 15-foot cone. Each enemy in that area must make a DC 13 Constitution saving throw, taking 3d6 radiant damage on a failed save, or half as much on a success.</p>"
        }
      ],
      "multiattack": "<p>The Chaplain makes two attacks with their Blessed Heavy Mace.</p>",
      "look": "A solemn priest in grey clerical robes worn over polished chainmail armor, holding an aloft Silver Flame holy symbol on an ornate steel mace and a swinging incense censer.",
      "seed": 610007,
      "plate": "regal-lion-chaplain",
      "token_size": 1,
      "bio": [
        "<p>Ordained at Flamekeep to administer the Regal Lion's daily liturgies, blessing weapons and consecrating estate rooms against corruption.</p>"
      ],
      "tags": ["regal-lion", "chaplain", "cleric", "humanoid"]
    },
    {
      "id": "warol-creeton",
      "name": "Warol Creeton",
      "folder": "Manor Wardens",
      "tier": "Greenhouse Sentry",
      "role": "perimeter sentry",
      "type": "humanoid",
      "subtype": "goblin",
      "size": "sm",
      "alignment": "Neutral",
      "cr": 0.5,
      "abilities": [10, 15, 12, 12, 13, 8],
      "saves": ["dex"],
      "skills": {"prc": 3, "ste": 6, "sur": 3},
      "ac": 14,
      "ac_words": "leather armor & steel buckler",
      "hp": 18,
      "hp_formula": "4d6+4",
      "speed": {"walk": 30},
      "senses": {"darkvision": 60},
      "languages": {"value": ["common"], "custom": "Goblin"},
      "di": [],
      "dr": [],
      "dv": [],
      "ci": [],
      "traits": [
        {
          "name": "Nimble Escape",
          "icon": "run",
          "text": "Warol can take the Disengage or Hide action as a bonus action on each of his turns."
        },
        {
          "name": "He Knew About the Rain",
          "icon": "eye",
          "text": "Warol knows rust monsters spread faster in rain. He has advantage on Perception checks to detect monstrosities and cannot be surprised while it is raining."
        }
      ],
      "attacks": [
        {
          "name": "Greenhouse Pike",
          "icon": "pike",
          "kind": "melee",
          "ability": "dex",
          "wtype": "martialM",
          "reach": 10,
          "dmg": [1, 10, "piercing"],
          "props": ["two", "hvy"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 10 ft., one target. <em>Hit:</em> 1d10 + 2 piercing damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Sentry Whistle",
          "icon": "horn",
          "activation": "action",
          "text": "<p>Warol blows his alarm whistle, alerting all Regal Lion guards within 300 feet of an intruder's presence.</p>"
        }
      ],
      "multiattack": None,
      "look": "A scrawny goblin sentry wearing an oversized steel kettle-hat helmet that covers his ears, an oilskin poncho protecting him from rain, holding a long spear with a rusted blade and a pouch of warning whistles.",
      "seed": 610008,
      "plate": "warol-creeton",
      "token_size": 1,
      "bio": [
        "<p>Stationed at the greenhouse perimeter, Warol greeted Byscilla's team with the crucial information that rust monsters spread faster in rain. Sensible enough to call for backup rather than get eaten.</p>"
      ],
      "tags": ["iron-legion", "goblin", "sentry", "humanoid"]
    },
    {
      "id": "raventree-gate-warden",
      "name": "Raventree Gate Warden",
      "folder": "Manor Wardens",
      "tier": "Portcullis Sentinel",
      "role": "heavy gatekeeper",
      "type": "humanoid",
      "subtype": "human",
      "size": "med",
      "alignment": "Lawful Neutral",
      "cr": 2,
      "abilities": [17, 10, 16, 10, 12, 9],
      "saves": ["str", "con"],
      "skills": {"ath": 5, "prc": 3},
      "ac": 18,
      "ac_words": "plate mail & iron door-shield",
      "hp": 52,
      "hp_formula": "7d8+21",
      "speed": {"walk": 30},
      "senses": {"darkvision": 0},
      "languages": {"value": ["common"]},
      "di": [],
      "dr": [],
      "dv": [],
      "ci": [],
      "traits": [
        {
          "name": "Gatekeeper's Stand",
          "icon": "shield",
          "text": "The warden cannot be pushed, pulled, or knocked prone while conscious and standing."
        }
      ],
      "attacks": [
        {
          "name": "Heavy Iron Warhammer",
          "icon": "hammer",
          "kind": "melee",
          "ability": "str",
          "wtype": "martialM",
          "reach": 5,
          "dmg": [1, 8, "bludgeoning"],
          "props": ["ver"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 1d8 + 3 bludgeoning damage, or 1d10 + 3 if used two-handed.</p>"
        }
      ],
      "actions": [
        {
          "name": "Portcullis Slam",
          "icon": "stomp",
          "activation": "action",
          "save": {
            "ability": "str",
            "dc": 13,
            "dmg": [[2, 6, "bludgeoning"]],
            "half": False,
            "range": "5 ft"
          },
          "text": "<p>The warden slams his door-sized shield into a creature within 5 feet. The target must make a DC 13 Strength saving throw or take 2d6 bludgeoning damage and be pinned prone until the warden moves.</p>"
        }
      ],
      "multiattack": "<p>The Gate Warden makes two attacks with his Heavy Iron Warhammer.</p>",
      "look": "A hulking, broad-shouldered gatekeeper in heavy riveted plate armor with a large keyring at his hip, holding a massive iron slab tower shield and a heavy squared-head warhammer.",
      "seed": 610009,
      "plate": "raventree-gate-warden",
      "token_size": 1,
      "bio": [
        "<p>Guarding the heavy iron portcullises that divide the manor's material corridors from the overgrown fey ruins.</p>"
      ],
      "tags": ["regal-lion", "gatekeeper", "sentinel", "humanoid"]
    },
    {
      "id": "greenhouse-perimeter-scout",
      "name": "Greenhouse Perimeter Scout",
      "folder": "Manor Wardens",
      "tier": "Corrosion Watcher",
      "role": "hazard tracker",
      "type": "humanoid",
      "subtype": "elf",
      "size": "med",
      "alignment": "Neutral",
      "cr": 1,
      "abilities": [11, 16, 12, 13, 14, 10],
      "saves": ["dex"],
      "skills": {"nat": 3, "prc": 4, "ste": 5, "sur": 4},
      "ac": 15,
      "ac_words": "treated leather & agility",
      "hp": 27,
      "hp_formula": "5d8+5",
      "speed": {"walk": 35},
      "senses": {"darkvision": 60},
      "languages": {"value": ["common", "elvish"]},
      "di": [],
      "dr": ["acid"],
      "dv": [],
      "ci": [],
      "traits": [
        {
          "name": "Corrosion Immunity",
          "icon": "acid",
          "text": "The scout's equipment is treated with alchemical sealants and cannot be corroded by rust monsters or acid."
        }
      ],
      "attacks": [
        {
          "name": "Compound Shortbow",
          "icon": "crossbow",
          "kind": "ranged",
          "ability": "dex",
          "wtype": "simpleR",
          "range": [80, 320],
          "dmg": [1, 6, "piercing"],
          "props": ["amm", "two"],
          "text": "<p><em>Ranged Weapon Attack:</em> range 80/320 ft., one target. <em>Hit:</em> 1d6 + 3 piercing damage.</p>"
        },
        {
          "name": "Solvent Dagger",
          "icon": "dagger",
          "kind": "melee",
          "ability": "dex",
          "wtype": "simpleM",
          "reach": 5,
          "dmg": [1, 4, "piercing"],
          "extra": [[1, 4, "acid"]],
          "props": ["fin", "lgt"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 1d4 + 3 piercing damage plus 1d4 acid damage.</p>"
        }
      ],
      "actions": [],
      "multiattack": "<p>The Scout makes two attacks with their Compound Shortbow.</p>",
      "look": "A lithe elven scout in dark green camouflage leathers and protective glass goggles, carrying a compound shortbow and a bandolier of glass solvent flasks across her chest.",
      "seed": 610010,
      "plate": "greenhouse-perimeter-scout",
      "token_size": 1,
      "bio": [
        "<p>Tasked with tracking rust monster movements and clearing fungal growth around the abandoned botanical conservatories.</p>"
      ],
      "tags": ["regal-lion", "scout", "ranger", "elf"]
    },
    {
      "id": "regal-war-lion",
      "name": "Regal Lion Armored Pride-Beast",
      "folder": "Heavy Beasts & Auxiliaries",
      "tier": "War Beast",
      "role": "armored pouncer",
      "type": "beast",
      "subtype": "lion",
      "size": "lg",
      "alignment": "Unaligned",
      "cr": 4,
      "abilities": [19, 15, 17, 4, 13, 9],
      "saves": ["str", "dex"],
      "skills": {"ath": 6, "prc": 3, "ste": 4},
      "ac": 15,
      "ac_words": "polished steel barding",
      "hp": 68,
      "hp_formula": "8d10+24",
      "speed": {"walk": 50},
      "senses": {"darkvision": 60},
      "languages": {"value": []},
      "di": [],
      "dr": [],
      "dv": [],
      "ci": [],
      "traits": [
        {
          "name": "Pounce",
          "icon": "paw",
          "text": "If the lion moves at least 20 feet straight toward a creature and hits it with a Bladed Claw on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the lion can make one Crushing Jaws bite attack as a bonus action."
        }
      ],
      "attacks": [
        {
          "name": "Bladed Claw Strike",
          "icon": "claw",
          "kind": "melee",
          "ability": "str",
          "wtype": "natural",
          "reach": 5,
          "dmg": [2, 6, "slashing"],
          "props": [],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 2d6 + 4 slashing damage.</p>"
        },
        {
          "name": "Crushing Jaws",
          "icon": "bite",
          "kind": "melee",
          "ability": "str",
          "wtype": "natural",
          "reach": 5,
          "dmg": [2, 8, "piercing"],
          "props": [],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 2d8 + 4 piercing damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Pride Roar",
          "icon": "scream",
          "activation": "action",
          "save": {
            "ability": "wis",
            "dc": 13,
            "half": False,
            "range": "self",
            "template": {"type": "radius", "size": 30}
          },
          "text": "<p>The armored lion lets out a deafening territorial roar. Each enemy within 30 feet must succeed on a DC 13 Wisdom saving throw or become frightened for 1 minute (save ends at end of turn).</p>"
        }
      ],
      "multiattack": "<p>The War Lion makes two Bladed Claw Strike attacks.</p>",
      "look": "A gigantic, muscular war lion clad in gleaming ornate steel plate barding and a golden chamfron helmet with a sweeping mane. Fierce golden eyes, sharp steel-sheathed claws, three-quarter view standing proud.",
      "seed": 610011,
      "plate": "regal-war-lion",
      "token_size": 2,
      "bio": [
        "<p>The living heraldry of the Regal Lion. Massive pride-lions bred and trained in royal kennels, fitted with segmented steel barding to flush intruders out of the manor's courtyard gardens.</p>"
      ],
      "tags": ["regal-lion", "beast", "large", "lion"]
    },
    {
      "id": "manor-gatebreaker-ogre",
      "name": "Manor Gate-Breaker Ogre",
      "folder": "Heavy Beasts & Auxiliaries",
      "tier": "Siege Auxiliary",
      "role": "heavy siege brute",
      "type": "giant",
      "subtype": "ogre",
      "size": "lg",
      "alignment": "Chaotic Neutral",
      "cr": 4,
      "abilities": [21, 8, 18, 5, 8, 7],
      "saves": ["str", "con"],
      "skills": {"ath": 7},
      "ac": 14,
      "ac_words": "bolted iron scrap plate",
      "hp": 76,
      "hp_formula": "8d10+32",
      "speed": {"walk": 35},
      "senses": {"darkvision": 60},
      "languages": {"value": ["common"], "custom": "Giant"},
      "di": [],
      "dr": ["bludgeoning"],
      "dv": [],
      "ci": [],
      "traits": [
        {
          "name": "Siege Monster",
          "icon": "stomp",
          "text": "The ogre deals double damage to objects and structures."
        }
      ],
      "attacks": [
        {
          "name": "Spiked Tree-Trunk Maul",
          "icon": "maul",
          "kind": "melee",
          "ability": "str",
          "wtype": "natural",
          "reach": 10,
          "dmg": [2, 10, "bludgeoning"],
          "extra": [[1, 6, "piercing"]],
          "props": ["two"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 10 ft., one target. <em>Hit:</em> 2d10 + 5 bludgeoning damage plus 1d6 piercing damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Ground Tremor Smash",
          "icon": "shockwave",
          "activation": "action",
          "save": {
            "ability": "dex",
            "dc": 14,
            "dmg": [[3, 6, "bludgeoning"]],
            "half": False,
            "range": "self",
            "template": {"type": "radius", "size": 10}
          },
          "text": "<p>The ogre smashes his trunk into the stone floor. Each creature within 10 feet must make a DC 14 Dexterity saving throw, taking 3d6 bludgeoning damage and falling prone on a failed save.</p>"
        }
      ],
      "multiattack": "<p>The Ogre makes two attacks with his Spiked Tree-Trunk Maul.</p>",
      "look": "A massive, hulking 10-foot-tall ogre auxiliary outfitted in crude bolted iron plate armor and thick iron chains. Gripping a massive spiked tree-trunk war club with two hands, roaring aggressively.",
      "seed": 610012,
      "plate": "manor-gatebreaker-ogre",
      "token_size": 2,
      "bio": [
        "<p>Auxiliary brutes leased from Midlands mercenary camps. Chained to the main gates and courtyard barriers to demolish obstacles and terrify approaching partisans.</p>"
      ],
      "tags": ["regal-lion", "giant", "ogre", "large", "brute"]
    },
    {
      "id": "raventree-iron-colossus",
      "name": "Raventree Iron Colossus",
      "folder": "Heavy Beasts & Auxiliaries",
      "tier": "Ancient Manor Guardian",
      "role": "estate sentinel",
      "type": "construct",
      "subtype": "golem",
      "size": "lg",
      "alignment": "Unaligned",
      "cr": 7,
      "abilities": [22, 9, 20, 4, 11, 3],
      "saves": ["str", "con"],
      "skills": {"ath": 9},
      "ac": 17,
      "ac_words": "carved iron & granite mantle",
      "hp": 126,
      "hp_formula": "12d10+60",
      "speed": {"walk": 30},
      "senses": {"darkvision": 60},
      "languages": {"value": []},
      "di": ["poison", "psychic"],
      "dr": ["bludgeoning", "piercing", "slashing"],
      "dv": [],
      "ci": ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
      "traits": [
        {
          "name": "Immutable Form",
          "icon": "robot",
          "text": "The colossus is immune to any spell or effect that would alter its form."
        },
        {
          "name": "Magic Resistance",
          "icon": "ward",
          "text": "The colossus has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Raventree Blood Ward",
          "icon": "heart_green",
          "text": "The colossus regains 10 hit points at the start of its turn if it has at least 1 hit point while on Raventree Manor grounds."
        }
      ],
      "attacks": [
        {
          "name": "Colossal Fist Slam",
          "icon": "fist",
          "kind": "melee",
          "ability": "str",
          "wtype": "natural",
          "reach": 10,
          "dmg": [2, 10, "bludgeoning"],
          "props": [],
          "text": "<p><em>Melee Weapon Attack:</em> reach 10 ft., one target. <em>Hit:</em> 2d10 + 6 bludgeoning damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Cataclysmic Stomp",
          "icon": "stomp",
          "activation": "action",
          "save": {
            "ability": "str",
            "dc": 16,
            "dmg": [[4, 8, "bludgeoning"]],
            "half": True,
            "range": "self",
            "template": {"type": "radius", "size": 15}
          },
          "text": "<p>The colossus brings its iron foot down with monumental force. Each creature on the ground within 15 feet must make a DC 16 Strength saving throw, taking 4d8 bludgeoning damage and being knocked prone on a failed save, or half damage on a success.</p>"
        }
      ],
      "multiattack": "<p>The Iron Colossus makes two Colossal Fist Slam attacks.</p>",
      "look": "A towering, ancient 12-foot-tall iron-and-black-granite colossus construct sculpted in the gothic likeness of a hooded knight. Its chest is carved with the Corvinarus raventree crest glowing with crimson warding runes. Massive stone and iron pillar-like arms.",
      "seed": 610013,
      "plate": "raventree-iron-colossus",
      "token_size": 2,
      "bio": [
        "<p>Ancient stone-and-iron guardians constructed centuries ago by House Corvinarus to protect their ancestral seat. Repurposed by Byscilla Danos using command keys to lock down the manor's central hall.</p>"
      ],
      "tags": ["regal-lion", "construct", "golem", "large", "colossus"]
    }
  ]
}

out_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "Reputation-Matrix2", "data", "forge", "regal-lion.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(ROSTER, f, indent=2)
print("Wrote", out_path)
