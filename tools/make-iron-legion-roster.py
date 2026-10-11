#!/usr/bin/env python3
"""Generate the Iron Legion - Iron Cordon Brigade roster."""
import json
import os

ROSTER = {
  "format": "waluipedia-forge-roster/1",
  "packet": "iron-legion",
  "name": "Iron Cordon Brigade",
  "title": "The Midlands War Machine — Border Patrol Units, Surveillance Drones, and Magitek Automata",
  "faction": "iron_legion",
  "group": "Iron Legion",
  "color": "#ADB5BD",
  "disposition": -1,
  "file_prefix": "fvtt-Actor-il-",
  "portraits": "portraits/iron-legion",
  "renders": "npc-forge/iron-legion/renders",
  "source": "data/factions.json → iron_legion (Order Through Compliance, Aegis Command, the Midlands war machine: border cordons, anomalous surveys, star-bit tech, and magitek pacification automata)",
  "style": "Clean cel-shaded character art in the style of dark fantasy military concept art, bold dark outlines, cold iron and gunmetal grey armor, brass gears, glowing cyan star-bit conduits, flat colours, crisp shading.",
  "framing": "Full body, whole figure visible, three-quarter view, centred, isolated on a plain flat solid magenta background (#FF00FF), no floor, no ground shadow, no text, no border.",
  "negative": "photorealistic, 3d render, blurry, cropped, cut off, multiple characters, text, watermark, signature, border, frame, ground shadow, floor, background scenery, gradient background",
  "background": "#FF00FF",
  "render_size": [1408, 768],
  "plate_size": 512,
  "subfolders": {
    "Cordon Command": {
      "color": "#6C757D",
      "description": "Command officers, protocol commissars, and reconnaissance lieutenants directing cordon operations."
    },
    "Frontline Patrol": {
      "color": "#ADB5BD",
      "description": "Heavy shock legionnaires, trench sappers, and syringe combat chirurgeons enforcing the border cordon."
    },
    "Surveillance & Recon": {
      "color": "#8A96A3",
      "description": "Star-bit scanning drones, medical support skitter-bots, and clockwork tracking hounds monitoring anomalous border crossings."
    },
    "Magitek Automata": {
      "color": "#495057",
      "description": "Heavy pacification constructs, bipedal sentry striders, and tracked barricade deployers."
    }
  },
  "entries": [
    {
      "id": "malakor-vance",
      "name": "Brigadier Malakor Vance",
      "folder": "Cordon Command",
      "tier": "Cordon Commander",
      "role": "tactical commander",
      "type": "humanoid",
      "subtype": "human",
      "size": "med",
      "alignment": "Lawful Evil",
      "cr": 7,
      "abilities": [16, 14, 16, 18, 14, 16],
      "saves": ["con", "int", "wis"],
      "skills": {"his": 7, "ins": 5, "inv": 7, "per": 6},
      "ac": 17,
      "ac_words": "Legion officer plate",
      "hp": 112,
      "hp_formula": "15d8+45",
      "speed": {"walk": 30},
      "senses": {"darkvision": 60},
      "languages": {"value": ["common"], "custom": "Midlands Military Sign"},
      "di": [],
      "dr": ["lightning"],
      "dv": [],
      "ci": ["frightened"],
      "traits": [
        {
          "name": "Cold Logistics",
          "icon": "cog",
          "text": "Brigadier Vance calculates combat in operational variables. Friendly Iron Legion creatures within 30 feet that can see or hear him gain a +2 bonus to attack rolls and saving throws."
        },
        {
          "name": "Order 120 Mandate",
          "icon": "sealed",
          "text": "Vance deals an extra 1d8 damage against grappled, restrained, or prone targets."
        }
      ],
      "attacks": [
        {
          "name": "Protocol Command Blade",
          "icon": "sabre",
          "kind": "melee",
          "ability": "str",
          "wtype": "martialM",
          "reach": 5,
          "dmg": [2, 6, "slashing"],
          "extra": [[1, 8, "lightning"]],
          "props": [],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 2d6 + 3 slashing damage plus 1d8 lightning damage.</p>"
        },
        {
          "name": "Wrist-Mounted Arc Needle",
          "icon": "zap",
          "kind": "ranged",
          "ability": "dex",
          "wtype": "martialR",
          "range": [30, 90],
          "dmg": [2, 8, "piercing"],
          "extra": [[1, 8, "lightning"]],
          "props": ["amm"],
          "text": "<p><em>Ranged Weapon Attack:</em> range 30/90 ft., one target. <em>Hit:</em> 2d8 + 2 piercing damage plus 1d8 lightning damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Suppression Directive",
          "icon": "diplomacy",
          "activation": "action",
          "save": {
            "ability": "wis",
            "dc": 15,
            "dmg": [[3, 6, "psychic"]],
            "half": True,
            "range": "60 ft",
            "template": {"type": "radius", "size": 20}
          },
          "text": "<p>Vance issues an amplified compliance order over his vox-collar. Hostile creatures in a 20-foot radius sphere within 60 feet must make a DC 15 Wisdom saving throw, taking 3d6 psychic damage and having their speed halved until the end of their next turn on a failed save, or half as much damage on a success.</p>"
        }
      ],
      "multiattack": "<p>Brigadier Vance makes two attacks with his Protocol Command Blade, or one blade attack and one Wrist-Mounted Arc Needle attack.</p>",
      "look": "A stern middle-aged human commander in heavy gunmetal-grey plate armor with a high gorget and tailored dark charcoal greatcoat. A mechanical star-bit monocular implant glows cyan over his left eye. Holding an ornate steel officer's saber in one hand and a wrist-mounted repeater gauntlet on the other.",
      "seed": 510001,
      "plate": "malakor-vance",
      "token_size": 1,
      "bio": [
        "<p>Brigadier Malakor Vance oversees border pacification along the fracture lines. Like General Ironhand, Vance possesses the terrifying calm of an administrator managing an inventory ledger: lives are simply logistical assets, and insubordination is an error code that must be cleared from the system.</p>",
        "<p>He views the war not as an emotional conflict, but as an engineering equation waiting for total compliance.</p>"
      ],
      "tags": ["iron-legion", "officer", "commander", "humanoid"]
    },
    {
      "id": "commissar-vane",
      "name": "Commissar Vane",
      "folder": "Cordon Command",
      "tier": "Compliance Inquisitor",
      "role": "morale enforcer",
      "type": "humanoid",
      "subtype": "human",
      "size": "med",
      "alignment": "Lawful Evil",
      "cr": 5,
      "abilities": [18, 12, 16, 14, 13, 16],
      "saves": ["str", "cha"],
      "skills": {"ath": 7, "itm": 6, "per": 6},
      "ac": 16,
      "ac_words": "Legion breastplate & reinforced pauldrons",
      "hp": 85,
      "hp_formula": "10d8+40",
      "speed": {"walk": 30},
      "senses": {"darkvision": 0},
      "languages": {"value": ["common"], "custom": "Midlands Military Sign"},
      "di": [],
      "dr": [],
      "dv": [],
      "ci": ["frightened"],
      "traits": [
        {
          "name": "Iron Discipline",
          "icon": "shield",
          "text": "Allies within 20 feet of Commissar Vane cannot be charmed or frightened while Vane is conscious."
        },
        {
          "name": "Summary Judgment",
          "icon": "fear",
          "text": "When an enemy misses Vane with a melee attack, Vane can use a reaction to make a melee attack against that creature."
        }
      ],
      "attacks": [
        {
          "name": "Electrified Compliance Maul",
          "icon": "maul",
          "kind": "melee",
          "ability": "str",
          "wtype": "martialM",
          "reach": 5,
          "dmg": [2, 6, "bludgeoning"],
          "extra": [[1, 6, "lightning"]],
          "props": ["two"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 2d6 + 4 bludgeoning damage plus 1d6 lightning damage.</p>"
        },
        {
          "name": "Heavy Iron Crossbow",
          "icon": "crossbow",
          "kind": "ranged",
          "ability": "dex",
          "wtype": "martialR",
          "range": [100, 400],
          "dmg": [1, 10, "piercing"],
          "props": ["amm", "two", "lod"],
          "text": "<p><em>Ranged Weapon Attack:</em> range 100/400 ft., one target. <em>Hit:</em> 1d10 + 1 piercing damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Terrifying Dictate",
          "icon": "intimidate",
          "activation": "action",
          "save": {
            "ability": "wis",
            "dc": 14,
            "half": False,
            "range": "30 ft"
          },
          "text": "<p>Commissar Vane roars a decree of summary execution. Each enemy within 30 feet who can see and hear him must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute (save ends at end of turn).</p>"
        }
      ],
      "multiattack": "<p>Commissar Vane makes two attacks with his Electrified Compliance Maul.</p>",
      "look": "An imposing grim-faced human commissar in an iron-plated trench coat, tall steel-toed boots, and a visored officer cap. He wields a massive two-handed mechanical war maul wrapped in copper coils with sparking arc nodes. Harsh scowl.",
      "seed": 510002,
      "plate": "commissar-vane",
      "token_size": 1,
      "bio": [
        "<p>Commissar Vane is the hammer that enforces the Protocols of the Iron Legion. While officers like Vance manage maps and supply lines, Vane walks the trenches to ensure zero hesitation in carrying out orders.</p>",
        "<p>His electrified compliance maul has silenced deserters and broken through enemy shield walls with equal lack of remorse.</p>"
      ],
      "tags": ["iron-legion", "officer", "commissar", "humanoid"]
    },
    {
      "id": "lieutenant-krena-locke",
      "name": "Lieutenant Krena Locke",
      "folder": "Cordon Command",
      "tier": "Vanguard Scout",
      "role": "recon sniper",
      "type": "humanoid",
      "subtype": "human",
      "size": "med",
      "alignment": "Lawful Neutral",
      "cr": 4,
      "abilities": [12, 18, 14, 15, 16, 11],
      "saves": ["dex", "wis"],
      "skills": {"acr": 6, "prc": 7, "ste": 8, "sur": 5},
      "ac": 16,
      "ac_words": "studded ironcoat",
      "hp": 65,
      "hp_formula": "10d8+20",
      "speed": {"walk": 35},
      "senses": {"darkvision": 60},
      "languages": {"value": ["common"], "custom": "Midlands Military Sign"},
      "di": [],
      "dr": [],
      "dv": [],
      "ci": [],
      "traits": [
        {
          "name": "Cordon Spotter",
          "icon": "eye",
          "text": "Locke has advantage on initiative rolls and cannot be surprised while she is conscious."
        },
        {
          "name": "Vanguard Cloak",
          "icon": "goggles",
          "text": "Locke can take the Hide action as a bonus action on each of her turns."
        }
      ],
      "attacks": [
        {
          "name": "Star-Bit Scoped Carbine",
          "icon": "crossbow",
          "kind": "ranged",
          "ability": "dex",
          "wtype": "martialR",
          "range": [120, 480],
          "dmg": [2, 8, "piercing"],
          "extra": [[1, 6, "radiant"]],
          "props": ["amm", "two"],
          "text": "<p><em>Ranged Weapon Attack:</em> range 120/480 ft., one target. <em>Hit:</em> 2d8 + 4 piercing damage plus 1d6 radiant damage from the star-bit focus lens.</p>"
        },
        {
          "name": "Trench Stiletto",
          "icon": "dagger",
          "kind": "melee",
          "ability": "dex",
          "wtype": "simpleM",
          "reach": 5,
          "dmg": [1, 4, "piercing"],
          "props": ["fin", "lgt"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 1d4 + 4 piercing damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Mark Target Protocol",
          "icon": "run",
          "activation": "bonus",
          "text": "<p>Locke designates a target within 120 feet with her luminescent star-bit spotter optic. Until the start of Locke's next turn, all ranged attack rolls against that target have advantage.</p>"
        }
      ],
      "multiattack": "<p>Lieutenant Locke makes two attacks with her Star-Bit Scoped Carbine.</p>",
      "look": "An athletic female scout officer in a hooded grey-and-slate camouflage duster reinforced with light steel plating. She carries a long, brass-and-iron star-bit sniper rifle with a glowing cyan lens scope. Protective goggles pushed up on her forehead, alert calculating gaze.",
      "seed": 510003,
      "plate": "lieutenant-krena-locke",
      "token_size": 1,
      "bio": [
        "<p>Lieutenant Locke leads advanced reconnaissance squads along the boundary lines between the Midlands and the contested provinces. Equipped with star-bit optics, she identifies enemy troop movements hours before main forces engage.</p>"
      ],
      "tags": ["iron-legion", "scout", "officer", "sniper"]
    },
    {
      "id": "cordon-shock-trooper",
      "name": "Cordon Shock Trooper",
      "folder": "Frontline Patrol",
      "tier": "Patrol Infantry",
      "role": "heavy frontliner",
      "type": "humanoid",
      "subtype": "human",
      "size": "med",
      "alignment": "Lawful Neutral",
      "cr": 2,
      "abilities": [16, 12, 16, 10, 11, 10],
      "saves": ["str", "con"],
      "skills": {"ath": 5, "prc": 2},
      "ac": 18,
      "ac_words": "Legion segmented plate & tower shield",
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
          "name": "Shield Wall Protocol",
          "icon": "shield",
          "text": "The trooper gains a +1 bonus to AC for each adjacent ally wielding a shield (up to +2)."
        },
        {
          "name": "Steadfast",
          "icon": "kite",
          "text": "The trooper cannot be knocked prone while holding their shield."
        }
      ],
      "attacks": [
        {
          "name": "Shock Baton",
          "icon": "baton",
          "kind": "melee",
          "ability": "str",
          "wtype": "martialM",
          "reach": 5,
          "dmg": [1, 8, "bludgeoning"],
          "extra": [[1, 4, "lightning"]],
          "props": [],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 1d8 + 3 bludgeoning damage plus 1d4 lightning damage.</p>"
        },
        {
          "name": "Suppression Javelin",
          "icon": "spear",
          "kind": "ranged",
          "ability": "str",
          "wtype": "simpleR",
          "range": [30, 120],
          "dmg": [1, 6, "piercing"],
          "props": ["thr"],
          "text": "<p><em>Ranged Weapon Attack:</em> range 30/120 ft., one target. <em>Hit:</em> 1d6 + 3 piercing damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Shield Bash",
          "icon": "shield",
          "activation": "bonus",
          "save": {
            "ability": "str",
            "dc": 13,
            "dmg": [[1, 4, "bludgeoning"]],
            "half": False,
            "range": "5 ft"
          },
          "text": "<p>The trooper slams their heavy tower shield into an adjacent creature. The target must succeed on a DC 13 Strength saving throw or take 1d4 bludgeoning damage and be pushed up to 5 feet back or knocked prone.</p>"
        }
      ],
      "multiattack": "<p>The Shock Trooper makes two attacks with their Shock Baton.</p>",
      "look": "A heavily armored legionary soldier clad head-to-toe in bulky gunmetal plate armor with a narrow-slit enclosed iron helmet. Holding a massive rectangular tower shield stamped with the cog-and-shield Iron Legion crest and an electrified steel shock baton.",
      "seed": 510004,
      "plate": "cordon-shock-trooper",
      "token_size": 1,
      "bio": [
        "<p>The backbone of the Iron Cordon. Shock Troopers advance in locked ranks with overlapping shields, absorbing spellfire and arrow volleys before stunning breach lines with synchronized shock batons.</p>"
      ],
      "tags": ["iron-legion", "infantry", "trooper", "soldier"]
    },
    {
      "id": "cordon-combat-chirurgeon",
      "name": "Cordon Combat Chirurgeon",
      "folder": "Frontline Patrol",
      "tier": "Syringe Corps",
      "role": "combat medic",
      "type": "humanoid",
      "subtype": "human",
      "size": "med",
      "alignment": "Lawful Neutral",
      "cr": 2,
      "abilities": [12, 14, 14, 16, 14, 9],
      "saves": ["con", "int"],
      "skills": {"med": 6, "inv": 5, "prc": 4},
      "ac": 15,
      "ac_words": "reinforced leather & steel harness",
      "hp": 39,
      "hp_formula": "6d8+12",
      "speed": {"walk": 30},
      "senses": {"darkvision": 0},
      "languages": {"value": ["common"]},
      "di": [],
      "dr": ["poison"],
      "dv": [],
      "ci": ["poisoned"],
      "traits": [
        {
          "name": "Chemical Conditioning",
          "icon": "flask_green",
          "text": "The chirurgeon has advantage on saving throws against poison and disease."
        }
      ],
      "attacks": [
        {
          "name": "Pneumatic Bone Saw",
          "icon": "drill_tool",
          "kind": "melee",
          "ability": "dex",
          "wtype": "simpleM",
          "reach": 5,
          "dmg": [1, 8, "slashing"],
          "props": ["fin"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 1d8 + 2 slashing damage.</p>"
        },
        {
          "name": "Pressurized Syringe Gun",
          "icon": "gas",
          "kind": "ranged",
          "ability": "dex",
          "wtype": "martialR",
          "range": [30, 60],
          "dmg": [1, 6, "piercing"],
          "extra": [[2, 6, "poison"]],
          "props": ["amm"],
          "text": "<p><em>Ranged Weapon Attack:</em> range 30/60 ft., one target. <em>Hit:</em> 1d6 + 2 piercing damage plus 2d6 poison damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Combat Stimulant Injection",
          "icon": "heart_green",
          "activation": "action",
          "text": "<p>The chirurgeon injects an adjacent allied creature with an emergency combat stimulant. The target regains 2d8 + 3 hit points and gains 10 feet of extra movement until the end of its next turn.</p>"
        }
      ],
      "multiattack": "<p>The Chirurgeon makes one Bone Saw attack and one Syringe Gun attack.</p>",
      "look": "A battle surgeon wearing a heavy leather apron over a dark grey uniform, a copper plague-style respirator mask, and a back-mounted brass chemical tank connected by rubber tubes to a massive pneumatic brass injection syringe in one hand.",
      "seed": 510005,
      "plate": "cordon-combat-chirurgeon",
      "token_size": 1,
      "bio": [
        "<p>Iron Legion chirurgeons approach wounded soldiers the way engineers approach broken siege engines: stabilize the mechanism, inject adrenaline stims, and push it back into the breach.</p>",
        "<p>Equipped with the dreaded Iron Legion Field Syringe rigs, their chemical cocktails keep frontlines fighting long past standard endurance.</p>"
      ],
      "tags": ["iron-legion", "medic", "chirurgeon", "specialist"]
    },
    {
      "id": "cordon-trench-sapper",
      "name": "Cordon Trench Sapper",
      "folder": "Frontline Patrol",
      "tier": "Demolition Specialist",
      "role": "combat engineer",
      "type": "humanoid",
      "subtype": "human",
      "size": "med",
      "alignment": "Lawful Neutral",
      "cr": 3,
      "abilities": [16, 14, 16, 14, 12, 9],
      "saves": ["str", "con"],
      "skills": {"ath": 5, "prc": 3},
      "ac": 16,
      "ac_words": "spiked trench cuirass",
      "hp": 52,
      "hp_formula": "7d8+21",
      "speed": {"walk": 30},
      "senses": {"darkvision": 0},
      "languages": {"value": ["common"]},
      "di": [],
      "dr": ["thunder"],
      "dv": [],
      "ci": [],
      "traits": [
        {
          "name": "Siege Specialist",
          "icon": "hammer",
          "text": "The sapper deals double damage to objects and structures."
        },
        {
          "name": "Blast Shielding",
          "icon": "ward",
          "text": "The sapper has resistance to thunder and fire damage from explosions and traps."
        }
      ],
      "attacks": [
        {
          "name": "Heavy Trench Pick",
          "icon": "hammer",
          "kind": "melee",
          "ability": "str",
          "wtype": "martialM",
          "reach": 5,
          "dmg": [1, 8, "piercing"],
          "extra": [[1, 6, "thunder"]],
          "props": ["ver"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 1d8 + 3 piercing damage plus 1d6 thunder damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Star-Powder Breaching Charge",
          "icon": "grenade",
          "activation": "action",
          "save": {
            "ability": "dex",
            "dc": 13,
            "dmg": [[3, 8, "thunder"]],
            "half": True,
            "range": "20 ft",
            "template": {"type": "radius", "size": 10}
          },
          "text": "<p>The sapper hurls a pressurized star-powder demolition cylinder at a point within 20 feet. Each creature in a 10-foot radius must make a DC 13 Dexterity saving throw, taking 3d8 thunder damage and being knocked prone on a failed save, or half damage on a success. Structures and objects in the area take double damage.</p>"
        }
      ],
      "multiattack": "<p>The Sapper makes two attacks with their Heavy Trench Pick.</p>",
      "look": "A burly combat engineer in scarred steel breastplate, heavy leather gauntlets, and blast goggles. Carrying a rack of cylindrical explosive charges and a heavy two-handed trench pickaxe with reinforced iron teeth.",
      "seed": 510006,
      "plate": "cordon-trench-sapper",
      "token_size": 1,
      "bio": [
        "<p>When natural terrain, fortifications, or rogue barricades impede the Legion's advance, Trench Sappers deploy concentrated star-powder charges to breach pathways.</p>"
      ],
      "tags": ["iron-legion", "sapper", "engineer", "demolition"]
    },
    {
      "id": "ebott-survey-probe",
      "name": "Ebott Survey Probe",
      "folder": "Surveillance & Recon",
      "tier": "Star-Bit Drone",
      "role": "recon scanner",
      "type": "construct",
      "subtype": "drone",
      "size": "sm",
      "alignment": "Unaligned",
      "cr": 1,
      "abilities": [8, 16, 12, 14, 14, 4],
      "saves": ["dex"],
      "skills": {"prc": 6, "ste": 5},
      "ac": 15,
      "ac_words": "brass-and-iron hull",
      "hp": 22,
      "hp_formula": "5d6+5",
      "speed": {"walk": 10, "fly": 40},
      "senses": {"darkvision": 60},
      "languages": {"value": [], "custom": "understands Common and Gamma telegraph protocols but cannot speak"},
      "di": ["poison", "psychic"],
      "dr": [],
      "dv": ["lightning"],
      "ci": ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
      "traits": [
        {
          "name": "Hover Engine",
          "icon": "robot",
          "text": "The probe can hover and does not provoke opportunity attacks when flying out of an enemy's reach."
        },
        {
          "name": "Star-Bit Sensor Array",
          "icon": "eye",
          "text": "The probe automatically detects magical signatures, dimensional anomalies, and invisible creatures within 30 feet."
        }
      ],
      "attacks": [
        {
          "name": "Arc Discharge Prod",
          "icon": "sparks",
          "kind": "melee",
          "ability": "dex",
          "wtype": "natural",
          "reach": 5,
          "dmg": [1, 4, "piercing"],
          "extra": [[1, 6, "lightning"]],
          "props": ["fin"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 1d4 + 3 piercing damage plus 1d6 lightning damage.</p>"
        },
        {
          "name": "Survey Laser",
          "icon": "beam",
          "kind": "ranged",
          "ability": "dex",
          "wtype": "natural",
          "range": [60, 180],
          "dmg": [1, 8, "radiant"],
          "props": [],
          "text": "<p><em>Ranged Weapon Attack:</em> range 60/180 ft., one target. <em>Hit:</em> 1d8 + 3 radiant damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Blinding Flash Flare",
          "icon": "zap",
          "activation": "action",
          "save": {
            "ability": "con",
            "dc": 12,
            "half": False,
            "range": "self",
            "template": {"type": "radius", "size": 15}
          },
          "text": "<p>The probe pulses its central star-bit core with blinding radiance. Each creature within 15 feet must succeed on a DC 12 Constitution saving throw or be blinded until the end of its next turn.</p>"
        }
      ],
      "multiattack": None,
      "look": "A small hovering mechanical drone constructed of riveted iron plates and polished brass fixtures. It features a glowing cyan star-bit crystal core in its center, three articulated camera lenses, and two small grasping claws dangling below.",
      "seed": 510007,
      "plate": "ebott-survey-probe",
      "token_size": 1,
      "bio": [
        "<p>Directly descended from the Mount Ebott Survey Machines developed by the Gamma Division, these hovering autonomous probes sweep across war corridors registering planar fluctuations, subterranean vibrations, and unauthorized troop concentrations.</p>"
      ],
      "tags": ["iron-legion", "construct", "drone", "survey"]
    },
    {
      "id": "syringe-carrier-drone",
      "name": "Syringe Carrier Drone",
      "folder": "Surveillance & Recon",
      "tier": "Skitter-Bot",
      "role": "field support",
      "type": "construct",
      "subtype": "drone",
      "size": "sm",
      "alignment": "Unaligned",
      "cr": 0.5,
      "abilities": [10, 15, 12, 6, 12, 3],
      "saves": [],
      "skills": {"ste": 4},
      "ac": 14,
      "ac_words": "riveted chassis",
      "hp": 18,
      "hp_formula": "4d6+4",
      "speed": {"walk": 35, "climb": 30},
      "senses": {"darkvision": 60},
      "languages": {"value": []},
      "di": ["poison", "psychic"],
      "dr": [],
      "dv": [],
      "ci": ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
      "traits": [
        {
          "name": "Spider Climb",
          "icon": "gears",
          "text": "The drone can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        }
      ],
      "attacks": [
        {
          "name": "Pneumatic Needle Prod",
          "icon": "drill",
          "kind": "melee",
          "ability": "dex",
          "wtype": "natural",
          "reach": 5,
          "dmg": [1, 4, "piercing"],
          "extra": [[1, 4, "poison"]],
          "props": ["fin"],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 1d4 + 2 piercing damage plus 1d4 poison damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Deliver Stim-Pack",
          "icon": "flask_green",
          "activation": "action",
          "text": "<p>The drone injects an adjacent allied creature with emergency coagulants. The ally regains 1d8 + 2 hit points and can immediately stand up from prone without spending movement.</p>"
        }
      ],
      "multiattack": None,
      "look": "A low-slung, six-legged mechanical clockwork spider made of dark iron with a large glass bulb on its back filled with luminescent green liquid. It has a gleaming steel syringe arm extended forward.",
      "seed": 510008,
      "plate": "syringe-carrier-drone",
      "token_size": 1,
      "bio": [
        "<p>A clockwork quadrupedal or hexapedal carrier that scuttles under barbed wire and through collapsed mud bunkers to resupply legion chirurgeons and revive fallen frontline soldiers.</p>"
      ],
      "tags": ["iron-legion", "construct", "drone", "support"]
    },
    {
      "id": "aegis-spotter-hound",
      "name": "Aegis Spotter-Hound",
      "folder": "Surveillance & Recon",
      "tier": "Clockwork Beast",
      "role": "pursuit & tracking",
      "type": "construct",
      "subtype": "hound",
      "size": "med",
      "alignment": "Unaligned",
      "cr": 1,
      "abilities": [15, 14, 14, 5, 15, 5],
      "saves": ["dex"],
      "skills": {"ath": 4, "prc": 6, "sur": 4},
      "ac": 14,
      "ac_words": "segmented iron plates",
      "hp": 26,
      "hp_formula": "4d8+8",
      "speed": {"walk": 45},
      "senses": {"darkvision": 60},
      "languages": {"value": []},
      "di": ["poison", "psychic"],
      "dr": [],
      "dv": [],
      "ci": ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
      "traits": [
        {
          "name": "Keen Senses",
          "icon": "jaw",
          "text": "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell (or chemical scent trails)."
        },
        {
          "name": "Pounce",
          "icon": "paw",
          "text": "If the hound moves at least 20 feet straight toward a creature and then hits it with an Iron Mandible Bite on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone."
        }
      ],
      "attacks": [
        {
          "name": "Iron Mandible Bite",
          "icon": "bite",
          "kind": "melee",
          "ability": "str",
          "wtype": "natural",
          "reach": 5,
          "dmg": [1, 8, "piercing"],
          "props": [],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 1d8 + 2 piercing damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Sonic Alarm Bark",
          "icon": "scream",
          "activation": "action",
          "text": "<p>The hound emits a deafening mechanical siren bark heard up to 600 feet away, alerting all Iron Legion personnel in the sector to the location of enemy intruders.</p>"
        }
      ],
      "multiattack": None,
      "look": "A ferocious quadrupedal mechanical hound forged from blackened iron and riveted steel plates. Glowing amber optic sensors in its visor, steam venting from brass exhaust pipes along its spine, and powerful hydraulic jaws.",
      "seed": 510009,
      "plate": "aegis-spotter-hound",
      "token_size": 1,
      "bio": [
        "<p>Engineered at Aegis Command to hunt deserters and flush out partisans hiding in rough terrain. Spotter-Hounds run ahead of patrol infantry, latching onto intruders and raising an ear-splitting alarm.</p>"
      ],
      "tags": ["iron-legion", "construct", "beast", "hound"]
    },
    {
      "id": "iron-enforcer-automaton",
      "name": "Iron Enforcer Automaton",
      "folder": "Magitek Automata",
      "tier": "Heavy Construct",
      "role": "siege brute",
      "type": "construct",
      "subtype": "automaton",
      "size": "lg",
      "alignment": "Unaligned",
      "cr": 6,
      "abilities": [20, 10, 18, 6, 11, 5],
      "saves": ["str", "con"],
      "skills": {"ath": 8},
      "ac": 17,
      "ac_words": "cast-iron chassis",
      "hp": 105,
      "hp_formula": "10d10+50",
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
          "text": "The automaton is immune to any spell or effect that would alter its form."
        },
        {
          "name": "Siege Monster",
          "icon": "stomp",
          "text": "The automaton deals double damage to objects and structures."
        }
      ],
      "attacks": [
        {
          "name": "Piston Slam",
          "icon": "fist",
          "kind": "melee",
          "ability": "str",
          "wtype": "natural",
          "reach": 10,
          "dmg": [2, 8, "bludgeoning"],
          "props": [],
          "text": "<p><em>Melee Weapon Attack:</em> reach 10 ft., one target. <em>Hit:</em> 2d8 + 5 bludgeoning damage.</p>"
        },
        {
          "name": "Star-Heat Projector",
          "icon": "firefist",
          "kind": "ranged",
          "ability": "con",
          "wtype": "natural",
          "range": [60, 120],
          "dmg": [3, 6, "fire"],
          "props": [],
          "text": "<p><em>Ranged Attack:</em> range 60/120 ft., one target. <em>Hit:</em> 3d6 + 4 fire damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Steam Vent Burst",
          "icon": "nuke",
          "activation": "action",
          "save": {
            "ability": "con",
            "dc": 15,
            "dmg": [[4, 6, "fire"]],
            "half": True,
            "range": "self",
            "template": {"type": "cone", "size": 15}
          },
          "text": "<p>The automaton vents superheated steam from its chest exhaust ports in a 15-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 4d6 fire damage on a failed save, or half as much on a success.</p>"
        }
      ],
      "multiattack": "<p>The Iron Enforcer Automaton makes two Piston Slam attacks.</p>",
      "look": "A massive, hulking 9-foot-tall bipedal automaton built from heavy dark iron plates and exposed brass gears. Its barrel chest houses an inner furnace with glowing orange embers behind an iron grate. Massive hydraulic piston fists with heavy iron spikes.",
      "seed": 510010,
      "plate": "iron-enforcer-automaton",
      "token_size": 2,
      "bio": [
        "<p>The Iron Legion's heaviest line-breaker. Standing nine feet tall and armored in inches of cold-rolled iron, the Enforcer advances through enemy barricades without slowing down, pummeling resistance into paste.</p>"
      ],
      "tags": ["iron-legion", "construct", "automaton", "siege"]
    },
    {
      "id": "cordon-sentry-walker",
      "name": "Cordon Sentry Walker",
      "folder": "Magitek Automata",
      "tier": "Combat Strider",
      "role": "mobile harpoon platform",
      "type": "construct",
      "subtype": "walker",
      "size": "lg",
      "alignment": "Unaligned",
      "cr": 4,
      "abilities": [18, 12, 16, 8, 12, 5],
      "saves": ["str", "con"],
      "skills": {"ath": 6, "prc": 3},
      "ac": 16,
      "ac_words": "riveted hull plating",
      "hp": 76,
      "hp_formula": "8d10+32",
      "speed": {"walk": 35},
      "senses": {"darkvision": 60},
      "languages": {"value": []},
      "di": ["poison", "psychic"],
      "dr": [],
      "dv": [],
      "ci": ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
      "traits": [
        {
          "name": "High Vantage",
          "icon": "cog",
          "text": "The walker's elevated cupola ignores half cover and three-quarters cover on targets within 60 feet."
        }
      ],
      "attacks": [
        {
          "name": "Dual Harpoon Repeater",
          "icon": "cannon",
          "kind": "ranged",
          "ability": "str",
          "wtype": "martialR",
          "range": [60, 180],
          "dmg": [2, 8, "piercing"],
          "props": ["amm", "two"],
          "text": "<p><em>Ranged Weapon Attack:</em> range 60/180 ft., one target. <em>Hit:</em> 2d8 + 4 piercing damage, and if the target is Large or smaller, it is grappled by the trailing steel cable (escape DC 14).</p>"
        },
        {
          "name": "Crushing Stride",
          "icon": "stomp",
          "kind": "melee",
          "ability": "str",
          "wtype": "natural",
          "reach": 5,
          "dmg": [2, 6, "bludgeoning"],
          "props": [],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 2d6 + 4 bludgeoning damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Winch Reel",
          "icon": "net",
          "activation": "bonus",
          "text": "<p>The walker pulls a creature grappled by its harpoon up to 20 feet straight toward it.</p>"
        }
      ],
      "multiattack": "<p>The Sentry Walker makes one Crushing Stride attack and one Dual Harpoon Repeater attack.</p>",
      "look": "A rugged two-legged mechanical patrol strider constructed of matte-grey armor plates. It features an armored observation cabin on top with narrow vision slits, tall hydraulic legs, and twin mounted heavy harpoon launchers on its shoulders.",
      "seed": 510011,
      "plate": "cordon-sentry-walker",
      "token_size": 2,
      "bio": [
        "<p>Two-legged walkers deployed along border fences and perimeter trenches. The walker's elevated cabin provides long line-of-sight across foggy terrain, and its pneumatic harpoons can snag fleeing vehicles or beasts.</p>"
      ],
      "tags": ["iron-legion", "construct", "walker", "patrol"]
    },
    {
      "id": "mobile-aegis-bastion",
      "name": "Mobile Aegis Bastion",
      "folder": "Magitek Automata",
      "tier": "Tracked Shield Platform",
      "role": "heavy support",
      "type": "construct",
      "subtype": "vehicle",
      "size": "lg",
      "alignment": "Unaligned",
      "cr": 3,
      "abilities": [16, 8, 18, 6, 10, 3],
      "saves": ["str", "con"],
      "skills": {},
      "ac": 18,
      "ac_words": "folded steel mantlets",
      "hp": 68,
      "hp_formula": "8d10+24",
      "speed": {"walk": 25},
      "senses": {"darkvision": 60},
      "languages": {"value": []},
      "di": ["poison", "psychic"],
      "dr": ["slashing", "piercing"],
      "dv": [],
      "ci": ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
      "traits": [
        {
          "name": "Deployable Cover",
          "icon": "shield",
          "text": "Allies within 5 feet of the bastion's flanks gain three-quarters cover (+5 AC and Dexterity saving throws)."
        },
        {
          "name": "Tread Mobility",
          "icon": "gears",
          "text": "The bastion ignores difficult terrain caused by mud, rubble, or barbed wire."
        }
      ],
      "attacks": [
        {
          "name": "Gatling Crossbow Battery",
          "icon": "crossbow",
          "kind": "ranged",
          "ability": "str",
          "wtype": "martialR",
          "range": [80, 320],
          "dmg": [2, 8, "piercing"],
          "props": ["amm", "two"],
          "text": "<p><em>Ranged Weapon Attack:</em> range 80/320 ft., one target. <em>Hit:</em> 2d8 + 3 piercing damage.</p>"
        },
        {
          "name": "Ramming Cowcatcher",
          "icon": "shockwave",
          "kind": "melee",
          "ability": "str",
          "wtype": "natural",
          "reach": 5,
          "dmg": [2, 6, "bludgeoning"],
          "props": [],
          "text": "<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> 2d6 + 3 bludgeoning damage.</p>"
        }
      ],
      "actions": [
        {
          "name": "Lockdown Shield Wall",
          "icon": "shield",
          "activation": "action",
          "text": "<p>The bastion drops hydraulic earth-anchors and unfolds heavy side steel mantlets. Its speed becomes 0, its AC increases to 20, and all allies behind it gain total cover against ranged attacks from the front.</p>"
        }
      ],
      "multiattack": "<p>The Mobile Aegis Bastion makes one Gatling Crossbow Battery attack and one Ramming Cowcatcher attack.</p>",
      "look": "A low, wide tracked combat vehicle with a heavy angled iron cowcatcher on the front and two large deployable steel riot mantlets along its flanks. A revolving brass volley-gun turret sits mounted on the center deck. Smoke plumes rise from twin rear exhausts.",
      "seed": 510012,
      "plate": "mobile-aegis-bastion",
      "token_size": 2,
      "bio": [
        "<p>A tracked mechanized barricade engineered to establish instant checkpoints and lead infantry charges across open no-man's land.</p>"
      ],
      "tags": ["iron-legion", "construct", "vehicle", "defense"]
    }
  ]
}

out_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "Reputation-Matrix2", "data", "forge", "iron-legion.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(ROSTER, f, indent=2)
print("Wrote", out_path)
