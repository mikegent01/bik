// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_038 = {
  "sarasaland_oracle_vessel_core": {
    "id": "sarasaland_oracle_vessel_core",
    "name": "Oracle Core Fragment",
    "description": "The Oracle Core Fragment is a pulsating core of necromantic energy, its surface etched with ancient runes that glow faintly in the dark. Originating from the Skaven's forbidden forge, this fragment grants control over undead minions and allows summoning the Oracle for three turns. Its power comes at a cost, as there's a 20% chance it will trigger a curse upon use. This relic requires 5000 mana to activate and can last for two turns.",
    "price": 1000,
    "icon": "⚔",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Control Over Undead",
      "Oracle Summoning"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Control Over Undead",
        "rules": "As a bonus action, the user gains control over one willing undead minion within 30 feet for the duration. The minion can be commanded to perform simple tasks or act as an ally in combat. This effect ends if the minion takes damage or its controller dies."
      },
      {
        "title": "Oracle Summoning",
        "rules": "The user may summon the Oracle, a spectral entity that provides one question and answer per use. The Oracle appears for 3 turns and can only be summoned once per week. This effect ends if the summoner is incapacitated or dies."
      }
    ],
    "levelRequirementReason": "The item's necromantic power is accessible to lower-level spellcasters who have a basic understanding of controlling undead.",
    "vendorReason": "Sarasaland, known for its dark artifacts and relics, sells this fragment as one of many powerful necromantic items that can be found in their extensive inventory.",
    "shippingDetail": "The item is shipped via the Noki Coral Fleet, ensuring secure delivery but with a delay of three days due to its fragile nature.",
    "usage": {
      "activation": "Bonus action or reaction (summoning)",
      "duration": "Until the minion takes damage or dies",
      "endsWhen": "The minion is incapacitated or dies; Oracle summoning ends if the summoner is incapacitated or dies",
      "charges": "Unlimited, but only one use per week for summoning"
    },
    "priceReason": "Balanced against other similar legendary items, this core provides potent necromantic abilities without breaking game balance.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T17:49:11.113069+00:00",
    "aiReviewedAt": "2026-07-23T17:49:11.113069+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_pony_nobility_coat": {
    "id": "sarasaland_pony_nobility_coat",
    "name": "Pony Nobility Coat of Changeling Grace",
    "description": "The Pony Nobility Coat of Changeling Grace is a shimmering garment woven from the dreams of Equestrian nobles and enchanted with the whispers of changeling magic. It grants its wearer subtle charm, allowing them to shift their appearance for brief moments of diplomacy or stealth. However, each use saps a fraction of one’s emotional stability, potentially revealing inner fears and triggering minor hallucinations in emotionally unstable wearers. The coat is said to have been given as a gift from a fallen pony princess during the Ricco Harbor siege.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐴",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Subtle Charm",
      "Emotional Transparency"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Subtle Charm",
        "rules": "Activates on command as a bonus action, shifting the wearer’s appearance for 1 round (no visible effect to others). This grants advantage on Diplomacy checks and Persuasion rolls. The coat can be worn only by characters with a ‘true heart’ trait."
      },
      {
        "title": "Emotional Transparency",
        "rules": "The coat temporarily makes the wearer’s emotions more visible to allies for 1 round, potentially triggering minor hallucinations in emotionally unstable individuals. This effect ends if the wearer's emotional state changes or if they are no longer wearing the coat."
      }
    ],
    "levelRequirementReason": "Characters must have a certain emotional maturity and stability to handle the coat’s effects without harm.",
    "vendorReason": "Sarasaland is known for its unique and powerful artifacts, and this coat perfectly encapsulates their mystique.",
    "shippingDetail": "Ships via the Koopa Express, a rapid courier service with occasional delays due to interdimensional traffic.",
    "usage": {
      "activation": "Bonus action to activate; can be used once per short rest",
      "duration": "1 round for each effect",
      "endsWhen": "Effect duration ends or wearer no longer has ‘true heart’ trait",
      "charges": "Unlimited, but must recharge after 24 hours of continuous non-use"
    },
    "priceReason": "The coat’s rarity and balanced effects justify its moderate price in XP.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-23T17:49:09.680201+00:00",
    "aiReviewedAt": "2026-07-23T17:49:09.680201+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_rogueport_courier_key": {
    "id": "sarasaland_rogueport_courier_key",
    "name": "Boo Spectral Mail Courier Pack",
    "description": "The Boo Spectral Mail Courier Pack is a cursed package that delivers messages through spectral mail, appearing as an ethereal envelope with flickering blue runes. It can deliver missives instantly across any plane of existence but at a cost—each delivery increases the chance of encountering a Rakasha clan in your next adventuring locale. Once used, it destroys all items left within, leaving only a faint whisper of their former presence.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Instantaneous Plane Travel",
      "Increased Encounters with Rakashas"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instantaneous Plane Travel",
        "rules": "Activates on command. Instantly delivers any written message to its intended recipient, regardless of the planes between you and them. This effect has no range limit but is usable only once per day."
      },
      {
        "title": "Increased Encounters with Rakashas",
        "rules": "For one week following each use, there is a 20% chance that any encounter involving you results in an interaction with a Rakasha clan. This effect can be mitigated by making a DC 15 Wisdom saving throw at the start of each such encounter."
      }
    ],
    "levelRequirementReason": "This item requires minimal arcane knowledge to use effectively.",
    "vendorReason": "Sarasaland specializes in exotic and cursed artifacts, making this package a fitting addition to their inventory.",
    "shippingDetail": "Delivered by spectral courier; may arrive with slight delays due to ethereal interference.",
    "usage": {
      "activation": "Command word and gesture",
      "duration": "Instantaneous",
      "endsWhen": "Message delivered or one week after use, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "The cursed nature of the package adds significant risk to its use, balancing its powerful and potentially dangerous effects.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T17:49:05.490958+00:00",
    "aiReviewedAt": "2026-07-23T17:49:05.490958+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_sandglass_tome": {
    "id": "sarasaland_sandglass_tome",
    "name": "Sandglass Tome",
    "description": "Bound in desert sandstone and etched with shifting glyphs that mimic the dunes of the vast Sahara, this tome holds the secrets of ancient kingdoms. Reading its pages grants fleeting visions of hidden oases but at a cost: each page read erases one memory fragment from the reader’s mind. The Koopa Troop smuggled it across the desert as a “historical artifact” to safeguard these lost histories from the Changeling Hive’s grasp.",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Memory Erasure",
      "Vision of Hidden Paths"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Memory Erasure",
        "rules": "Reading this tome erases one memory fragment of the reader. This effect is instantaneous and has no save DC or duration."
      },
      {
        "title": "Vision of Hidden Paths",
        "rules": "The reader gains temporary vision of hidden paths for 1 minute on a successful DC 12 Wisdom (Perception) check. The effect ends when the reader moves more than 30 feet away from the source or if they are incapacitated."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to explore its mysteries without requiring a higher level of expertise.",
    "vendorReason": "Sarasaland has deep ties with the desert realms and protects such historical artifacts from being lost or misused.",
    "shippingDetail": "Shipped discreetly to ensure the tome’s contents remain a secret until it reaches its destination.",
    "usage": {
      "activation": "Reading the tome as an action triggers both effects.",
      "duration": "Temporary vision of hidden paths lasts for 1 minute.",
      "endsWhen": "The reader moves more than 30 feet away or is incapacitated.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced to provide a unique and memorable experience without overpricing the item.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:49:05.617063+00:00",
    "aiReviewedAt": "2026-07-23T17:49:05.617063+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_scam_puffball_saucer": {
    "id": "sarasaland_scam_puffball_saucer",
    "name": "Puffball Saucer",
    "description": "The Puffball Saucer is a whimsical, candy-colored serving dish crafted from the volatile puffballs of Dream Land. It purports to feed your soul with delicious dreams and transform hunger into joy. Though it only emits harmless laughter in reality, the saucer's charm lies in its promise of enchantment—only those who believe can truly experience its effects. Delivered by the Chain Chomp Courier, this item is a beloved yet infamous symbol of Sarasaland’s market, where truth is often as elusive as the dreams it promises.",
    "price": 1000,
    "icon": "🍬",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Harmless Laughter",
      "Dream Fragment"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Harmless Laughter",
        "rules": "When activated by a willing participant, the saucer emits a round of laughter that lasts for 1 minute. This effect has no save DC and imposes no penalties or advantages."
      },
      {
        "title": "Dream Fragment",
        "rules": "There is a 50% chance (DC 12) that activating the saucer triggers a brief dream sequence lasting 1d4 rounds. The dream is non-damaging but can be vivid and memorable, leaving no lasting effects."
      }
    ],
    "levelRequirementReason": "The item's charm and delivery complexity make it accessible to all adventurers.",
    "vendorReason": "Sarasaland’s market is known for its playful yet misleading wares, making the Puffball Saucer a staple among vendors like Changeling Hive.",
    "shippingDetail": "Known for its unpredictable delivery times, this courier ensures that potential buyers are prepared for either immediate or delayed receipt of their saucer.",
    "usage": {
      "activation": "Special (requires belief to activate)",
      "duration": "Instantaneous effect with a 1-minute laughter round and up to 1d4 rounds of dream sequence",
      "endsWhen": "The effects end when the time is up or the saucer is destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced against other items in Sarasaland’s market, this price reflects its playful nature and the charm it offers.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-23T17:49:24.531245+00:00",
    "aiReviewedAt": "2026-07-23T17:49:24.531245+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_shiny_satchel": {
    "id": "sarasaland_shiny_satchel",
    "name": "Shiny Satchel",
    "description": "The Shiny Satchel is a crafted leather pouch adorned with enchanted threads that shift color to reflect the user's current emotional state. Crafted by the mischievous Shy Guy Smugglers, it grants a temporary boost in Pokémon catching prowess and ensures a warning glow when the bearer feels overwhelmed or confused. This item was rumored to have been found beneath Raventree Manor, suggesting its origins are tied to Team Rocket’s illicit operations.",
    "price": 1000,
    "icon": "🐉",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Boosts Pokémon Catch Rate",
      "Emits Warning Glow"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Courier Pigeon Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boosts Pokémon Catch Rate",
        "rules": "When activated as a bonus action, this satchel increases the user's Pokémon catch rate by +25% for 1 minute. This effect ends if the user is panicked or confused."
      },
      {
        "title": "Emits Warning Glow",
        "rules": "If the user feels panicked or confused, the satchel emits a soft, glowing aura that lasts until the emotional state changes. The aura alerts others nearby, but offers no mechanical benefit."
      }
    ],
    "levelRequirementReason": "Suitable for beginners who need a bit of luck when capturing Pokémon.",
    "vendorReason": "Sarasaland is known for its eclectic mix of magical items, and the Shiny Satchel fits well within their collection.",
    "shippingDetail": "Ships via Courier Pigeon Express; arrives within an hour of purchase.",
    "usage": {
      "activation": "Bonus action to activate, ends when emotional state changes or after 1 minute.",
      "duration": "1 minute per use",
      "endsWhen": "Emotional state changes or duration expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a price to reflect its useful but not overpowered effect.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T17:49:22.110403+00:00",
    "aiReviewedAt": "2026-07-23T17:49:22.110403+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_skull_keychain": {
    "id": "sarasaland_skull_keychain",
    "name": "Skull Keychain of the Fated Place",
    "description": "The Skull Keychain of the Fated Place is a rare trinket forged from bones harvested in the Bone Fields. It hums softly when near chaos gods, guiding its bearer through hidden paths and unlocking ancient secrets. This keychain, worn by those who remember the lost war, subtly enhances stealth within desert ruins but causes minor paranoia if used near Skaven. The keychain's hum becomes a warning of impending chaos.",
    "price": 1000,
    "icon": "🦴",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Hidden Path Detector",
      "Stealth Enhancement"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Path Detector",
        "rules": "Passive effect granting a +2 bonus to Wisdom (Perception) checks for detecting hidden paths within the Fated Place. This effect ends when the keychain is removed from the wearer's person."
      },
      {
        "title": "Stealth Enhancement",
        "rules": "While moving through desert ruins, the wearer gains advantage on Dexterity (Stealth) checks. This effect lasts for 1 hour and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This keychain is designed to aid adventurers of all levels in their exploration of ancient ruins.",
    "vendorReason": "Sarasaland, a treasure hunter and relics dealer, specializes in items that enhance one's connection to forgotten realms.",
    "shippingDetail": "Delivered via the Rakasha’s ethereal plane, ensuring swift and secure transport.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous for 'Hidden Path Detector'; 1 hour for 'Stealth Enhancement'.",
      "endsWhen": "Removed from wearer's person or the end of a long rest, respectively.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rare craftsmanship and mystical properties that aid adventurers in perilous locations.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T17:49:24.428806+00:00",
    "aiReviewedAt": "2026-07-23T17:49:24.428806+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_sunken_archives_parchment": {
    "id": "sarasaland_sunken_archives_parchment",
    "name": "Sunken Archives Parchment",
    "description": "The Sunken Archives Parchment is a brittle, water-stained page recovered from the sunken ruins of the Isle Delfino's ancient libraries. When held aloft and read aloud, it glows with faint, shifting runes that illuminate forgotten lore and rituals of the pre-Peach era. The parchment itself hums with residual magic, enhancing spellcasting speed for those who study its secrets, though overuse can cause a fleeting but disorienting memory overload.",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Unveils ancient lore",
      "Enhances spellcasting speed"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Forgotten Lore",
        "rules": "When read aloud, the parchment reveals one hidden fact about pre-Peach era magic or history. This effect can only be used once per day."
      },
      {
        "title": "Spellcasting Speed Boost",
        "rules": "Increases spellcaster's effective casting speed by 1 action during a short rest. This benefit lasts for 24 hours, but cannot be extended beyond one use per week."
      }
    ],
    "levelRequirementReason": "Beginners can access the parchment's initial revelations without needing extensive study.",
    "vendorReason": "Sarasaland specializes in historical and arcane artifacts uncovered from Delfino's sunken treasures.",
    "shippingDetail": "Delivered by Pipe Express, the parchment requires special handling to prevent further degradation of its ancient magic.",
    "usage": {
      "activation": "Read aloud during a short rest or an action when casting spells.",
      "duration": "Instantaneous effect; lore revealed and spellcasting speed boost last for their respective durations.",
      "endsWhen": "The parchment's effects end upon completion, and it can be read again the next day.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP due to its rare historical value and limited daily use.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T23:33:58.049799+00:00",
    "aiReviewedAt": "2026-07-24T23:33:58.049799+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_teyvat_linker": {
    "id": "sarasaland_teyvat_linker",
    "name": "Interdimensional Courier Lens",
    "description": "The Interdimensional Courier Lens is a delicate, hexagonal prism encased in gleaming, iridescent quartz. It hums softly as it resonates between two parallel dimensions: Sarasaland and Teyvat. Touching the lens causes an elemental pulse to ripple through it, triggering reactions that can either heal or harm, depending on the current phase of resonance. The memory of those who pass through is fractured, leaving them with vivid but disjointed recollections of their journey.",
    "price": 1000,
    "icon": "🌊",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Elemental Resonance",
      "Memory Fragmentation"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Resonance",
        "rules": "When the lens is activated by touching it, a burst of elemental energy erupts. This effect has a range of 30 feet and lasts for 1 minute. It heals or damages creatures within its area based on their alignment: Lawful creatures are healed, while Chaotic ones suffer damage equivalent to half their hit points."
      },
      {
        "title": "Memory Fragmentation",
        "rules": "Upon use, the lens causes a temporary amnesia effect. Targets must succeed on a DC 15 Intelligence saving throw or lose one random memory for the duration of 24 hours. This effect can be resisted once per day."
      }
    ],
    "levelRequirementReason": "The intricate mechanics and elemental resonance require a basic understanding of energy manipulation.",
    "vendorReason": "Only the local vendors in Sarasaland possess the knowledge to craft such delicate interdimensional devices.",
    "shippingDetail": "The lens must be delivered by Warp Whistle Transit to ensure it arrives intact and functional.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous activation, lasting for 1 minute or until the user decides to end it early",
      "endsWhen": "The user can choose to end the effect at any time during its duration",
      "charges": "Unlimited uses"
    },
    "priceReason": "The lens's rarity and unique interdimensional capabilities justify its moderate price of 1000 XP.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T17:49:52.986035+00:00",
    "aiReviewedAt": "2026-07-23T17:49:52.986035+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_wario_land_crossover": {
    "id": "sarasaland_wario_land_crossover",
    "name": "Garlic Power Amulet",
    "description": "The Garlic Power Amulet exudes a pungent, sulfurous aroma that fills your nostrils with Wario’s legendary garlic essence. This relic not only enhances your courage and strength but also saps the might of foes nearby. When donned in combat, you gain temporary invulnerability to poison and a surge of offensive prowess for three turns, while enemies within 10 feet suffer from brief blindness that reduces their accuracy by 20%. A true artifact forged by the mischievous Skaven, it’s a testament to the power of garlic and cunning.",
    "price": 1000,
    "icon": "🍄",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Boosts attack power",
      "Causes temporary blindness"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Garlic Boost",
        "rules": "When activated as an action, you gain immunity to poison and your attack rolls are increased by +2 for the next three turns. This effect ends if you take damage or if you disengage from combat."
      },
      {
        "title": "Blinding Scent",
        "rules": "Enemies within 10 feet of you must make a DC 14 Constitution saving throw or become blinded until the start of your next turn. On a successful save, they are only affected for half as long. This effect ends if you move more than 5 feet away from them."
      }
    ],
    "levelRequirementReason": "This amulet is accessible to all adventurers who can appreciate the power of garlic and its strategic use in combat.",
    "vendorReason": "Sarasaland specializes in unique, lore-rich items that enhance adventurers' capabilities without overloading them with too much power.",
    "shippingDetail": "The Garlic Power Amulet is carefully packed to preserve its potency and delivered swiftly by the Noki Coral Fleet, ensuring it arrives in optimal condition.",
    "usage": {
      "activation": "Action",
      "duration": "3 turns or until you take damage or disengage from combat",
      "endsWhen": "You take damage or disengage from combat",
      "charges": "Unlimited"
    },
    "priceReason": "The Garlic Power Amulet’s price is balanced to reflect its unique combination of offensive and defensive capabilities, making it a sought-after item among adventurers.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T17:50:37.979771+00:00",
    "aiReviewedAt": "2026-07-23T17:50:37.979771+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_wario_troop_brooch": {
    "id": "sarasaland_wario_troop_brooch",
    "name": "Wario Troop Brooch",
    "description": "The Wario Troop Brooch is a gleaming golden brooch shaped like Wario's iconic smile, its enchanted thread shimmering with laughter. Crafted in the shadowy depths of Mordor, it grants allies +2 to morale checks but exacts a price: a 5% chance of triggering a comedic failure for the wearer and their companions whenever they attempt an important task. The brooch is infamous among adventurers who find it either a boon or a curse, depending on when and where they wear it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Luck Boost",
      "Comedic Failure"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Luck Boost",
        "rules": "Grants +2 to morale checks for the wearer and nearby allies. This effect is passive but can be interrupted if the wearer or an adjacent ally fails a morale check."
      },
      {
        "title": "Comedic Failure",
        "rules": "There's a 5% chance that any important task attempted by the wearer or their companions triggers a humorous failure, lasting until the end of the next short rest. The DM narrates the comedic mishap."
      }
    ],
    "levelRequirementReason": "The brooch is simple enough for even novice adventurers to use but powerful enough to be considered worth the risk.",
    "vendorReason": "Sarasaland, a master of crafting whimsical and practical items, sources rare and legendary artifacts from various realms.",
    "shippingDetail": "Delivered swiftly via Pipe Express, this brooch arrives in perfect condition, ready for its next owner to wear.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the wearer or an adjacent ally fails a morale check.",
      "endsWhen": "Interrupted by a failed morale check or until the end of the next short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The brooch's legendary status and its unique effects, including the comedic failure chance, make it a valuable yet balanced purchase.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T17:49:40.284342+00:00",
    "aiReviewedAt": "2026-07-23T17:49:40.284342+00:00",
    "aiReviewVersion": 1
  },
  "scylla_charybdis_tentacle_boots": {
    "id": "scylla_charybdis_tentacle_boots",
    "name": "Scylla Charybdis Tentacle Boots ",
    "description": "The Scylla Charybdis Tentacle Boots are crafted from the sinewy limbs of a sea monster, their suction-cup soles designed to grip any surface, wet or dry. These boots not only enhance your climbing prowess but also emit a resonant pop each time you step, alerting both friend and foe alike to your presence underwater. Crafted by Sea Monster Crafters, these footwear are as much a fashion statement as they are functional, making it nearly impossible to slip them off once worn.",
    "price": 1000,
    "icon": "👢",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Grip",
      "Audible Step"
    ],
    "vendor": "scylla_charybdis_cave",
    "shippedBy": "Ink-Stained Soles",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Grip",
        "rules": "When you use the Boots for climbing, whether on wet or dry surfaces, you gain a +2 bonus to Athletics checks. Additionally, you have advantage on Dexterity (Acrobatics) checks made while wearing these boots."
      },
      {
        "title": "Audible Step",
        "rules": "Each time you take a step in water or on slippery ground, the boots emit a loud suction sound that is audible to all creatures within 10 feet. This effect does not provoke opportunity attacks but can be heard as a sound effect by creatures with tremorsense."
      }
    ],
    "levelRequirementReason": "These boots are crafted for adventurers who have already proven their mettle, requiring at least third level to ensure they can handle the unique challenges posed by these footwear.",
    "vendorReason": "Sea Monster Crafters specialize in crafting gear from sea creatures and offer items such as the Scylla Charybdis Tentacle Boots, which are perfect for those navigating treacherous underwater environments.",
    "shippingDetail": "Delivery is via a fleet of water taxis that navigate through the ocean's depths, ensuring safe and timely arrival to your doorstep.",
    "usage": {
      "activation": "Passive effect while wearing boots; requires no action to activate.",
      "duration": "Until removed or until the wearer takes an extended rest.",
      "endsWhen": "The boots are removed or the wearer rests for at least 8 hours.",
      "charges": "Unlimited, but charges reset after a long rest."
    },
    "priceReason": "While not as powerful as magic items, these boots offer significant utility and are priced accordingly to reflect their unique craftsmanship and rare materials.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-23T17:50:53.248522+00:00",
    "aiReviewedAt": "2026-07-23T17:50:53.248522+00:00",
    "aiReviewVersion": 1
  },
  "scylla_charybdis_tentacle_grip_service": {
    "id": "scylla_charybdis_tentacle_grip_service",
    "name": "Scylla Charybdis Tentacle Grip Service",
    "description": "The Scylla Charybdis Tentacle Grip Service is forged from the very essence of a sea monster's tentacle, imbued with its natural adhesive properties. This relic allows climbers to scale sheer cliffs as if they were solid ground, leaving behind a slimy trail that makes it difficult for others to grasp hold. Its grip is so tenacious that it can secure even fragile items without causing harm, and the residue it leaves behind acts like slippery slime, giving an opponent disadvantage on weapon grips.",
    "price": 1000,
    "icon": "🐙",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Climbing Grip",
      "Slippery Residue"
    ],
    "vendor": "scylla_charybdis_cove",
    "shippedBy": "Ink Bottle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Climbing Grip",
        "rules": "When activated by the user as a bonus action, this item grants advantage on Athletics checks for climbing for 1 hour. The effect ends when the user stops using it or at the end of their next turn."
      },
      {
        "title": "Slippery Residue",
        "rules": "For every 5 feet moved while in contact with a surface, the user leaves behind a patch of slippery slime that lasts for 1 hour. This causes disadvantage on weapon grips within 10 feet of the user. The effect ends when the item is removed from the user's possession."
      }
    ],
    "levelRequirementReason": "This serviceable item requires minimal magic to function, making it accessible for beginners.",
    "vendorReason": "Sea Monster Handlers are well-versed in crafting items from sea creatures and would naturally stock this unique product.",
    "shippingDetail": "Ships via the Ink Bottle, ensuring safe delivery through the treacherous waters of the deep ocean.",
    "usage": {
      "activation": "Bonus action to activate; ends at the end of the user's next turn or when removed from possession.",
      "duration": "1 hour per activation",
      "endsWhen": "Ends on removal or after one use",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item is crafted from a rare sea creature and requires specialized knowledge to produce, making it moderately priced for its functionality.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T17:50:20.565627+00:00",
    "aiReviewedAt": "2026-07-23T17:50:20.565627+00:00",
    "aiReviewVersion": 1
  },
  "scylla_charybdis_tentacle_tempura_recipe": {
    "id": "scylla_charybdis_tentacle_tempura_recipe",
    "name": "Recipe: Scylla Charybdis Tentacle Tempura ",
    "description": "Scylla's tentacle tempura is a crispy deep-fried delicacy crafted from the mythical sea creature. Its delicate, flaky batter and golden crust make it a treat for both gourmets and grapple enthusiasts alike. Upon consuming this dish, you gain advantage on grappling checks for 1 hour and can also heal 1d4 temporary hit points as you savor its succulent flavor. The Sea Chefs of Scylla Charybdis Cove ensure each serving is prepared with utmost care and authenticity.",
    "price": 1000,
    "icon": "🍤",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Grapple Advantage",
      "Temporary Hit Points"
    ],
    "vendor": "scylla_charybdis_cove",
    "shippedBy": "Ink-Fried Instructions",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grapple Advantage",
        "rules": "You gain advantage on all grappling checks for 1 hour upon eating this dish. This effect ends if you are incapacitated or when the duration expires."
      },
      {
        "title": "Temporary Hit Points",
        "rules": "Consume the tempura to gain 1d4 temporary hit points, which last until they are reduced to zero by damage or until you finish a long rest. This effect is limited to once per short or long rest."
      }
    ],
    "levelRequirementReason": "This dish requires no minimum level as it is designed for all adventurers looking to indulge in its unique flavor and benefits.",
    "vendorReason": "The Sea Chefs of Scylla Charybdis Cove are renowned for their expertise in preparing mythical sea creatures, ensuring each dish is authentic and delectable.",
    "shippingDetail": "Delivered fresh by a fleet of ink-slicked courier octopuses, the tempura is shipped within the hour from Scylla Charybdis Cove.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "1 hour per serving",
      "endsWhen": "Incapacitation or end of duration",
      "charges": "Unlimited, once per short/long rest"
    },
    "priceReason": "The dish is priced at 1000 XP as it combines the rarity and unique origin with its flavorful effects.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T17:50:30.395052+00:00",
    "aiReviewedAt": "2026-07-23T17:50:30.395052+00:00",
    "aiReviewVersion": 1
  },
  "scylla_charybdis_tentacle_tenderizer": {
    "id": "scylla_charybdis_tentacle_tenderizer",
    "name": "Scylla Charybdis Tentacle Tenderizer ",
    "description": "The Scylla Charybdis Tentacle Tenderizer is a hammer forged from the coral reefs of the deep sea. Its head is encrusted with barnacles and adorned with tentacle-like spikes that shimmer in hues of blue and purple. Crafted by the Sea Hammerers, this tool grants advantage on checks to cook tough ingredients like octopus or squid. The hammer’s suction grip ensures a secure hold during pounding, while its sticky surface clings tenaciously to sauces and oils, making cleanup a challenge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍤",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Tentacle Cooking",
      "Sticky Grip"
    ],
    "vendor": "scylla_charybdis_cove",
    "shippedBy": "Ink Impact Iron",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tentacle Cooking",
        "rules": "When used for cooking tough ingredients like tentacles or similar seafood, the wielder gains advantage on checks. The hammer’s spikes provide a secure grip and additional leverage."
      },
      {
        "title": "Sticky Grip",
        "rules": "The hammer's surface adheres to sauces and oils, making it difficult to clean after use. Once used in cooking, it retains its sticky residue for one hour before naturally cleaning off."
      }
    ],
    "levelRequirementReason": "This tool is suitable for beginners or those unfamiliar with cooking tough seafood.",
    "vendorReason": "The Scylla Charybdis Cove specializes in sea-themed items and tools, making it the perfect vendor for this hammer.",
    "shippingDetail": "Ships via underwater courier, ensuring safe delivery through treacherous waters. Delivery can take up to a week due to marine conditions.",
    "usage": {
      "activation": "As a bonus action when cooking tough seafood ingredients.",
      "duration": "Instantaneous effect; lasts until the next cleanup.",
      "endsWhen": "The hammer is cleaned or used in another cooking task.",
      "charges": "Unlimited, but requires cleaning after each use."
    },
    "priceReason": "The hammer’s unique design and materials from deep-sea coral reefs justify a moderate price.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T17:50:35.023876+00:00",
    "aiReviewedAt": "2026-07-23T17:50:35.023876+00:00",
    "aiReviewVersion": 1
  },
  "scylla_charybdis_tide_chart": {
    "id": "scylla_charybdis_tide_chart",
    "name": "Scylla & Charybdis Tide Chart",
    "description": "The Scylla & Charybdis Tide Chart is a weathered parchment chart, its ink faded but still readable by those who know how to interpret it. Crafted from the remnants of ancient scrolls found in the depths of the sea, this nautical map not only predicts the movements of the legendary sea monsters but also aligns perfectly with the tides. Sailors who possess this map can navigate through Scylla's and Charybdis' straits without fear of being devoured, as long as they follow its directions to the letter. The chart whispers in your ear during the night, a constant reminder of the monsters it protects you from.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗺️",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Navigational Safety",
      "Nightly Whispers"
    ],
    "vendor": "Scylla Charybdis",
    "shippedBy": "Waterproof Tube",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Navigational Safety",
        "rules": "This effect grants its bearer a safe path through Scylla and Charybdis' straits once per week. As long as the bearer follows the chart's instructions, they cannot be surprised by these monsters within 1 mile of their location."
      },
      {
        "title": "Nightly Whispers",
        "rules": "The chart emits a low, ominous voice during the night, whispering its secrets in your ear. This effect is non-verbal and does not require action to activate; it lasts until morning. The chart can only be used once per week."
      }
    ],
    "levelRequirementReason": "This map requires a sailor of considerable experience and knowledge to interpret its ancient symbols and warnings effectively.",
    "vendorReason": "The chart was discovered in the depths of their realm, making them the most reliable source for such items.",
    "shippingDetail": "Ships via a waterproof tube sealed with enchanted wax to ensure safe delivery through even the roughest seas.",
    "usage": {
      "activation": "Instantaneous; following the chart's instructions is required for its effects to activate.",
      "duration": "Instantaneous and lasting effect until morning, or until the bearer deviates from the chart's path.",
      "endsWhen": "The bearer either uses it once per week limit or deviates from the chart's prescribed route.",
      "charges": "One use per week"
    },
    "priceReason": "This map is a rare and valuable find, combining ancient lore with practical utility.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-23T17:51:03.334828+00:00",
    "aiReviewedAt": "2026-07-23T17:51:03.334828+00:00",
    "aiReviewVersion": 1
  },
  "scylla_charybdis_tracker": {
    "id": "scylla_charybdis_tracker",
    "name": "Scylla/Charybdis Proximity Charm",
    "description": "The Scylla/Charybdis Proximity Charm hums ominously as it detects the presence of treacherous whirlpools and sea monsters within a hundred-foot range, its vibrant glow flickering with the peril that draws near. Crafted by the fabled sea goddesses themselves, this charm grants advantage on all water-based navigation checks, ensuring safe passage through even the most dangerous waters. A sailor’s dream or a diver's nightmare, it sings in harmony with the ocean's fury.",
    "price": 1000,
    "icon": "🔱",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Warns user of nearby sea dangers",
      "Advantage on water-based navigation checks"
    ],
    "vendor": "oceanic_trader",
    "shippedBy": "Sealed Shell",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dangers Detected",
        "rules": "The charm vibrates violently when dangerous whirlpools or sea beasts are within a hundred-foot radius. This effect is passive and does not require any action from the user."
      },
      {
        "title": "Enhanced Navigation Skills",
        "rules": "The charm grants advantage on all saving throws and ability checks related to water-based navigation, ensuring safer journeys through treacherous waters."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers of all levels, this charm is particularly valuable for those navigating the perilous seas.",
    "vendorReason": "The Oceanic Trader has a deep connection to the sea and carries items that help sailors and divers alike.",
    "shippingDetail": "The charm is shipped in a waterproof, reinforced container designed for safe delivery through turbulent waters.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Instantaneous upon use and remains active until the user stops using it or until the source of danger is no longer within range",
      "endsWhen": "The charm ceases to vibrate when the source of danger moves out of a hundred-foot radius.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced with other rare items, this charm provides significant utility without being overpowered.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T17:51:05.464272+00:00",
    "aiReviewedAt": "2026-07-23T17:51:05.464272+00:00",
    "aiReviewVersion": 1
  },
  "see_flies_or_fly_like": {
    "id": "see_flies_or_fly_like",
    "name": "Fawful's Furious Fly Goggle ",
    "description": "Fawful's Furious Fly Goggles are a pair of buzzing spectacles that seem more at home in a laboratory than on your face. Crafted from gleaming brass and adorned with emerald accents, these goggles allow you to detect the presence of insects within 30 feet as if they were glowing faintly before your eyes. Wear them for a moment of levity, and you might find yourself leaping into the air briefly, adding an extra ten feet to your jump distance.",
    "price": 1000,
    "icon": "🕶️",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Detect Insects Within 30ft",
      "Brief Flight"
    ],
    "vendor": "fawfuls_furious_workshop",
    "shippedBy": "Buzzing Box Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Insect Detection",
        "rules": "As a bonus action, you can use the goggles to detect insects within 30 feet. For the next round of combat, any creature you see that has insectoids as allies or is significantly affected by insects is visible in bright green hues."
      },
      {
        "title": "Brief Flight",
        "rules": "Once per day, you can activate the goggles to make a jump check with advantage for 10 feet. This effect lasts until the start of your next turn and does not provoke attacks of opportunity."
      }
    ],
    "levelRequirementReason": "The goggles are designed for adventurers who wish to quickly identify insect threats or take advantage of their levitation ability without requiring a high level of expertise.",
    "vendorReason": "Fawful, the eccentric inventor behind these goggles, is known for creating whimsical yet practical items that assist adventurers in various ways.",
    "shippingDetail": "Delivered by a fleet of buzzing bees, your order will arrive with a gentle buzz and a smile from Fawful himself.",
    "usage": {
      "activation": "Bonus action for insect detection; once per day for brief flight",
      "duration": "Instantaneous for brief flight; lasts until the start of your next turn",
      "endsWhen": "The effect ends when you make an attack or take damage, or if you remove the goggles from your face.",
      "charges": "1 use per day"
    },
    "priceReason": "The goggles are crafted with rare materials and require a unique enchantment that adds to their value.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-23T17:50:53.029507+00:00",
    "aiReviewedAt": "2026-07-23T17:50:53.029507+00:00",
    "aiReviewVersion": 1
  },
  "sending_stone_customer_service": {
    "id": "sending_stone_customer_service",
    "name": "Sending Stone (With Customer Service)",
    "description": "The Sending Stone (With Customer Service) is a pair of smooth, polished stones that hum faintly when activated. Each stone has an intricate pattern etched into its surface, reminiscent of arcane runes and symbols. These stones not only allow for instant communication with the Arcane Communications LLC's customer service, but also offer a 10% chance to be upsold additional services mid-conversation, a perk that adds value beyond their initial functionality. The stones are known for their reliability and efficiency, ensuring swift responses even during peak hours.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪨",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Instantaneous Communication",
      "Upsell Opportunity"
    ],
    "vendor": "magic_telecom",
    "shippedBy": "Same-day Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instantaneous Communication",
        "rules": "When activated by a verbal command or gesture, the Sending Stone allows for immediate and direct communication with Arcane Communications LLC's customer service. This effect is instantaneous and does not require any action from the user."
      },
      {
        "title": "Upsell Opportunity",
        "rules": "There is a 10% chance that during a conversation, you will be offered additional services or upgrades. These offers are non-binding but can increase your chances of being contacted for further sales pitches at later times."
      }
    ],
    "levelRequirementReason": "The Sending Stone (With Customer Service) is accessible to all adventurers as it aids in quick problem-solving and communication, which are essential skills regardless of level.",
    "vendorReason": "Magic Telecom is renowned for its cutting-edge technology and customer service, making the Sending Stone a logical addition to their product line.",
    "shippingDetail": "The stones are shipped in a custom, padded envelope via Same-day Delivery to ensure they arrive in pristine condition.",
    "usage": {
      "activation": "Verbal command or gesture",
      "duration": "Instantaneous",
      "endsWhen": "Use ends upon successful communication or when the user chooses to stop",
      "charges": "Unlimited, as long as the stones have not been physically damaged"
    },
    "priceReason": "The Sending Stone (With Customer Service) is priced at 1000 XP due to its unique combination of instant communication and upsell opportunities, offering significant utility in any adventuring party.",
    "priceOriginal": 13200,
    "priceReviewedAt": "2026-07-23T17:51:25.258919+00:00",
    "aiReviewedAt": "2026-07-23T17:51:25.258919+00:00",
    "aiReviewVersion": 1
  },
  "servants_cosmic_astronaut_suit": {
    "id": "servants_cosmic_astronaut_suit",
    "name": "Servants Cosmic Astronaut Suit",
    "description": "The Servants Cosmic Astronaut Suit, a bulky ensemble of gleaming metal and shimmering fabric, is forged from the ruins of ancient space stations. Its helmet is adorned with stars, and its suit is imbued with a strange energy that makes it immune to the rigors of interplanar travel for 7 days. However, the suit's bulkiness imposes a significant penalty on Dexterity checks, making fine motor skills nearly impossible while wearing it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧑‍🚀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Planar Travel Immunity",
      "Bulky Disadvantage"
    ],
    "vendor": "Servants Cosmic",
    "shippedBy": "Meteor Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Planar Travel Immunity",
        "rules": "While wearing the suit, you are immune to vacuum and all environmental effects of interplanar travel. This immunity lasts for a period of 7 days from when you first activate it."
      },
      {
        "title": "Bulky Disadvantage",
        "rules": "When wearing this suit, you have disadvantage on Dexterity checks and saving throws. The effect persists until the suit is removed or until you take a long rest."
      }
    ],
    "levelRequirementReason": "The suit's complex engineering requires basic proficiency in mechanics to operate properly.",
    "vendorReason": "As pioneers of space travel, Servants Cosmic is the only vendor capable of producing and distributing such advanced equipment.",
    "shippingDetail": "The suit is shipped via a meteoric courier that ensures safe delivery through interplanar storms.",
    "usage": {
      "activation": "As an action, you can activate the suit's immunity to planar travel effects for 7 days.",
      "duration": "7 days from activation",
      "endsWhen": "The suit is removed or you take a long rest; this effect ends immediately if you are exposed to vacuum or other harmful interplanar environmental effects.",
      "charges": "Unlimited, as the suit's energy recharges upon removal"
    },
    "priceReason": "The suit is priced at 1000 XP due to its intricate engineering and rare materials.",
    "priceOriginal": 22500,
    "priceReviewedAt": "2026-07-23T17:51:23.449422+00:00",
    "aiReviewedAt": "2026-07-23T17:51:23.449422+00:00",
    "aiReviewVersion": 1
  },
  "servants_cosmic_blessing": {
    "id": "servants_cosmic_blessing",
    "name": "Blessing of a Cosmic Servant",
    "description": "The Blessing of a Cosmic Servant radiates an otherworldly glow, its light dancing like starlight in your hand. Crafted from stardust and whispered secrets, this talisman bestows cosmic favor upon you, making your abilities resonate with the stars' power. Once per long rest, you may ask a celestial entity for cryptic wisdom, which it grants with a shimmering response. The blessing also ensures that you are noticed by other cosmic beings, forging an unbreakable bond between you and the cosmos.",
    "category": "premium",
    "price": 1000,
    "icon": "🌌",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Stardust Resonance",
      "Celestial Favor"
    ],
    "vendor": "Servants Cosmic",
    "shippedBy": "Astral Projection",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Stardust Resonance",
        "rules": "Choose one ability score to increase by 2 (to a maximum of 22). This effect is passive and does not require activation."
      },
      {
        "title": "Celestial Favor",
        "rules": "Once per long rest, you may ask a cosmic entity for cryptic wisdom. The DM provides an answer that can be interpreted in many ways. You must make a Wisdom saving throw (DC 15) to understand the true meaning of the response."
      }
    ],
    "levelRequirementReason": "This item requires 12th level to use its full potential, ensuring it is not overpowered for lower-level characters.",
    "vendorReason": "The Servants Cosmic are known for their connections with cosmic entities and can obtain such rare blessings directly from the stars.",
    "shippingDetail": "Ships via a celestial courier, arriving in a burst of starlight. The delivery takes one week, during which time you must remain still to receive the blessing.",
    "usage": {
      "activation": "Passive and does not require activation.",
      "duration": "Permanent until changed by another ability score increase or removed by an effect that negates your cosmic connection.",
      "endsWhen": "The cosmic bond is severed, such as through a banishment spell or similar effects.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the item's rarity and the difficulty in obtaining stardust from beyond the stars.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-23T17:51:32.860886+00:00",
    "aiReviewedAt": "2026-07-23T17:51:32.860886+00:00",
    "aiReviewVersion": 1
  },
  "servants_cosmic_horoscope_accuracy": {
    "id": "servants_cosmic_horoscope_accuracy",
    "name": "Servants Cosmic Horoscope Accuracy Guarantee",
    "description": "The Servants Cosmic Horoscope Accuracy Guarantee is a parchment bound in shimmering starlight. It whispers enigmatic hints about upcoming encounters, tailored to your zodiac sign. Capricorns receive gold doubloons in their next transaction; Leos bask in the spotlight, gaining an ally's favor; Geminis face two conflicting omens that require careful navigation; and Pisces are told they're special—though it's not true. Crafted by the Servants Cosmic Astrology Dept., this parchment ensures your horoscope is a reliable guide for one day.",
    "category": "services",
    "price": 1000,
    "icon": "♈",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Horoscope Insight",
      "Zodiac Bonuses"
    ],
    "vendor": "servants_cosmic",
    "shippedBy": "Star Chart Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Horoscope Insight",
        "rules": "Once per day, when you consult your horoscope, the DM provides you with a genuine hint about an upcoming encounter. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Zodiac Bonuses",
        "rules": "Based on your zodiac sign, you receive one of the following bonuses: Capricorns gain +1d6 gold upon their next purchase; Leos gain a +2 bonus to Persuasion checks when seeking favor; Geminis face two conflicting hints that require a successful DC 15 Wisdom (Insight) check to navigate; Pisces are told they're special, which has no mechanical effect but can be used for roleplaying opportunities. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "All adventurers can benefit from reliable horoscope guidance at any stage.",
    "vendorReason": "The Servants Cosmic Astrology Dept. is renowned for their accurate predictions and this parchment is a testament to their craftsmanship.",
    "shippingDetail": "Ships directly from the Servants Cosmic Horoscope Office, arriving within one week of purchase.",
    "usage": {
      "activation": "Instantaneous (no action required)",
      "duration": "Until the end of your next long rest",
      "endsWhen": "The effect ends at the conclusion of your next long rest period",
      "charges": "One use per day"
    },
    "priceReason": "This parchment combines a daily use with zodiac-specific bonuses, providing significant value for adventurers seeking reliable horoscope guidance.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T17:51:20.819980+00:00",
    "aiReviewedAt": "2026-07-23T17:51:20.819980+00:00",
    "aiReviewVersion": 1
  },
  "servants_cosmic_horoscope_accuracy_upgrade": {
    "id": "servants_cosmic_horoscope_accuracy_upgrade",
    "name": "Servants Cosmic Horoscope Accuracy Upgrade",
    "description": "The Servants Cosmic Horoscope Accuracy Upgrade is a shimmering, star-touched pendant that whispers cosmic truths directly to your mind. Crafted by the celestial artisans of Servants Cosmic Premium, this pendant ensures your horoscope predictions are 90% accurate for one week. Wear it and let the stars guide you with their silent wisdom; but beware, if you ignore its advice, you'll find yourself under a subtle cloud of superstition, dealing with misfortune until you heed its words once more.",
    "category": "premium",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Cosmic Guidance",
      "Superstitious Disadvantage"
    ],
    "vendor": "servants_cosmic",
    "shippedBy": "Star Chart Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cosmic Guidance",
        "rules": "When the Servants Cosmic Horoscope Accuracy Upgrade is worn, it grants you advantage on one Wisdom (Insight) check related to celestial matters per day. This effect lasts for a week and can be used once each day."
      },
      {
        "title": "Superstitious Disadvantage",
        "rules": "If you choose not to follow the horoscope advice given by the pendant, you must make a Wisdom saving throw with a DC of 12. On a failed save, you take disadvantage on all rolls until you heed the horoscope's guidance."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to help them navigate their cosmic destinies without overburdening more experienced adventurers.",
    "vendorReason": "Servants Cosmic Premium specializes in celestial enhancements and this pendant is a hallmark of their craftsmanship.",
    "shippingDetail": "The item arrives with a personalized horoscope forecast included, enhancing the cosmic experience.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "One week per use.",
      "endsWhen": "After one week or when the wearer chooses to ignore the horoscope's advice without making a successful saving throw.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The item is priced at 1000 XP, reflecting its celestial craftsmanship and the cosmic guidance it provides for one week.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T17:52:07.097155+00:00",
    "aiReviewedAt": "2026-07-23T17:52:07.097155+00:00",
    "aiReviewVersion": 1
  },
  "servants_cosmic_recipe_starlight_soup": {
    "id": "servants_cosmic_recipe_starlight_soup",
    "name": "Recipe: Servants Cosmic Starlight Soup",
    "description": "The Recipe for Servants Cosmic Starlight Soup is a shimmering scroll detailing an ethereal broth made from captured starlight. Prepared by the celestial cooks of the Servants Cosmic Kitchen, this soup grants its imbuer the ability to commune with the stars and draw upon their power. It allows you to drink the soup directly into your mind, glowing faintly as you do so, and confers a state of heightened awareness that aids in both psychic defenses and interactions with otherworldly beings.",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Starlight Glow",
      "Psychic Fortitude"
    ],
    "vendor": "servants_cosmic",
    "shippedBy": "Starlight Beam Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Starlight Glow",
        "rules": "For the duration, you emit a faint celestial glow. You have disadvantage on Dexterity (Stealth) checks and advantage on Charisma (Persuasion) checks when interacting with celestial beings."
      },
      {
        "title": "Psychic Fortitude",
        "rules": "You gain advantage on saving throws against psychic damage for 8 hours. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The complexity of the recipe requires a minimum character level to fully appreciate its effects.",
    "vendorReason": "Servants Cosmic Kitchen is renowned for their cosmic delicacies, making it only fitting that they offer this unique celestial soup.",
    "shippingDetail": "Ships via Starlight Beam Express, known for its swift and reliable delivery of otherworldly goods.",
    "usage": {
      "activation": "You drink the soup with your mind as a bonus action.",
      "duration": "8 hours or until expended.",
      "endsWhen": "At the end of each long rest, this effect ends unless you have consumed it within that time.",
      "charges": "One charge. Once used, it must finish its remaining duration before regaining use."
    },
    "priceReason": "The recipe is crafted from rare starlight and the expertise of celestial chefs, making this a valuable and limited commodity in any adventurer's arsenal.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T17:51:52.547942+00:00",
    "aiReviewedAt": "2026-07-23T17:51:52.547942+00:00",
    "aiReviewVersion": 1
  },
  "servants_cosmic_star_chart": {
    "id": "servants_cosmic_star_chart",
    "name": "Servants Cosmic Star Chart",
    "description": "The Servants Cosmic Star Chart is a worn parchment map etched with ancient constellations. By night, its ink glows faintly under starlight, revealing patterns that predict cosmic phenomena. It can only be read during the night when celestial events align; otherwise, it appears as an indistinct coffee stain on its surface. Crafted by the Celestial Bureaucracy, this relic is said to hold the secrets of the cosmos within its folds.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗺️",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Celestial Alignment",
      "Cosmic Guidance"
    ],
    "vendor": "servants_cosmic_archive",
    "shippedBy": "Meteor Mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Celestial Alignment",
        "rules": "Once per long rest, you can spend an hour studying the chart to predict celestial events. With a successful Intelligence (Arcana) check (DC 15), you gain advantage on one attack roll or saving throw made before dawn the next day."
      },
      {
        "title": "Cosmic Guidance",
        "rules": "When meteor showers are visible, you can use an action to focus on the chart. For the duration of the meteor shower (up to 1 hour), you gain advantage on all attack rolls against creatures that are outside or flying through the area affected by a fireball spell."
      }
    ],
    "levelRequirementReason": "This item requires a high degree of arcane knowledge and cosmic awareness, suitable for experienced spellcasters.",
    "vendorReason": "The Celestial Bureaucracy has entrusted the Servants Cosmic Archive with the safekeeping of such ancient artifacts.",
    "shippingDetail": "Ships via a courier who delivers by meteor, ensuring timely arrival during favorable celestial conditions.",
    "usage": {
      "activation": "An hour-long study or one action to focus on the chart during a meteor shower.",
      "duration": "One day for Celestial Alignment; duration of the meteor shower for Cosmic Guidance.",
      "endsWhen": "At dawn, after the meteor shower ends, or when the chart is no longer focused upon.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a lower price to reflect its unique and thematic utility without being overpowered.",
    "priceOriginal": 20500,
    "priceReviewedAt": "2026-07-23T17:51:41.888414+00:00",
    "aiReviewedAt": "2026-07-23T17:51:41.888414+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_": {
    "id": "shadeward_estate_",
    "name": "Obsidian Veil Cloak",
    "description": "The Obsidian Veil Cloak is a dark, rune-carved cloak that shrouds the wearer in an impenetrable shadow. Crafted from ancient obsidian and enchanted by the Shadeward ESTATE, it grants invisibility to rival vampires and enhances social interactions during noble affairs. The cloak's runes whisper secrets of hidden agendas when approached at parties or used in duels, yet its very presence can be detected if a rival vampire is aware.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility against rival vampires",
      "Enhances social skills during nobility gatherings"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility to Rival Vampires",
        "rules": "The wearer gains the benefit of the Invisibility spell (Constitution save DC 14) for 1 round when in close proximity to a rival vampire. The effect ends if the wearer moves more than 30 feet away from the vampire or if they take any hostile action."
      },
      {
        "title": "Enhanced Social Skills",
        "rules": "The wearer gains a +5 bonus to Persuasion checks and a +2 bonus on Diplomacy checks when interacting with nobles. These bonuses last for 10 minutes each time the cloak is activated, but they can be used only once per day."
      }
    ],
    "levelRequirementReason": "The cloak's runes require a minimum of 3rd level proficiency to channel its subtle magic.",
    "vendorReason": "As the creators and keepers of the cloak, Shadeward ESTATE ensures only those who can appreciate its subtlety are allowed to purchase it.",
    "shippingDetail": "The cloak is carefully packed in a spectral mail container that ensures safe delivery through treacherous terrain.",
    "usage": {
      "activation": "As an action",
      "duration": "1 round or until the wearer moves more than 30 feet away from the vampire",
      "endsWhen": "The wearer takes any hostile action or moves too far from a rival vampire, or after 10 minutes for social bonuses",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Crafted with ancient obsidian and enchanted by Shadeward ESTATE, the cloak's price reflects its rarity and utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:51:49.254293+00:00",
    "aiReviewedAt": "2026-07-23T17:51:49.254293+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_black_rose_of_the_onyx_hand": {
    "id": "shadeward_estate_black_rose_of_the_onyx_hand",
    "name": "Black Rose of the Onyx Hand",
    "description": "The Black Rose of the Onyx Hand, a cursed bloom that only unfurls in the presence of the most vampiric eyes, is said to draw power from betrayal and deceit. Its velvety petals absorb the essence of lies, converting them into your own dark strength at formal dinners. The rose whispers secrets of those who speak too much, but beware: its touch can turn even the staunchest ally to a temporary pawn.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 0,
    "rarity": "rare",
    "effects": [
      "+30% chance to detect hidden enemies during formal dinners",
      "Convert enemy loyalty into temporary allies for 1 hour"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Detection",
        "rules": "When used during a formal dinner, the Black Rose grants you advantage on Perception checks to detect hidden enemies. This effect lasts until the end of your next turn."
      },
      {
        "title": "Loyalty Conversion",
        "rules": "By speaking a few whispered words to an enemy within 30 feet who has been detected by Enhanced Detection, you can attempt to convert their loyalties for up to 1 hour. The target makes a Wisdom saving throw (DC 14). On a failed save, the target becomes temporarily allied with you until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "The rose's power is too potent for lower-level characters to handle safely.",
    "vendorReason": "Shadeward Estate, a haven of dark magic and intrigue, naturally sells items imbued with vampiric essence like the Black Rose of the Onyx Hand.",
    "shippingDetail": "The roses are shipped fresh, delivered directly to your door by Lakitu Drones. Due to their cursed nature, they must be handled with care and arrive in pristine condition.",
    "usage": {
      "activation": "Requires a bonus action to activate during formal dinners.",
      "duration": "Instantaneous effect; lasts until the end of your next turn.",
      "endsWhen": "The effect ends when you use it again or at the end of your next long rest if not used.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced for a rare, cursed item that offers potent but limited utility in specific social situations.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T17:52:27.436825+00:00",
    "aiReviewedAt": "2026-07-23T17:52:27.436825+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_blood_sword_of_the_broken_court": {
    "id": "shadeward_estate_blood_sword_of_the_broken_court",
    "name": "Blood Sword of the Broken Court",
    "description": "The Blood Sword of the Broken Court is forged from the bones of a noble house that fell to treachery, its hilt etched with runes that whisper secrets of betrayal. This ceremonial blade can cut through social alliances like a hot knife through butter, revealing hidden loyalties in a duel or courtly confrontation. Wield it and watch as your allies falter under the weight of their own duplicity; the sword's power is a double-edged curse, increasing damage by 1 against formal challenges but also sapping allies' loyalty checks by -2.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Betrayal Revealer",
      "Ally Loyalty Drain"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Betrayal Revealer",
        "rules": "When used in a duel or court confrontation, the Blood Sword of the Broken Court can be activated as an action. It targets one creature within 30 feet and reveals any hidden loyalties or betrayals, forcing that creature to make a DC 15 Wisdom saving throw. On a failed save, the target is considered to have betrayed the wielder for the duration."
      },
      {
        "title": "Ally Loyalty Drain",
        "rules": "While wielding the sword, allies within 30 feet of you must succeed on a DC 15 Charisma saving throw or suffer a -2 penalty to all Loyalty checks and similar ability checks until the end of your next turn. This effect does not stack with other penalties."
      }
    ],
    "levelRequirementReason": "The sword's power is too dangerous for those who are not experienced in courtly intrigue.",
    "vendorReason": "Shadeward Estate, known for its ties to noble houses, holds a special place for items connected to the fallen court.",
    "shippingDetail": "The Blood Sword is carefully packed and shipped with enhanced security measures due to its volatile nature.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous reveal; allies' penalties last until the end of your next turn",
      "endsWhen": "Exhausted after one use per battle or short rest",
      "charges": "Unlimited, recharges on a long rest"
    },
    "priceReason": "Balanced to reflect its unique abilities and the risk it poses in courtly intrigue.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:52:19.692144+00:00",
    "aiReviewedAt": "2026-07-23T17:52:19.692144+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_court_silence": {
    "id": "shadeward_estate_court_silence",
    "name": "Court Silence Cloak",
    "description": "The Court Silence Cloak is a whisper-silenced garment crafted from the finest silk and enchanted with the essence of ancient courtly magic. It muffles all ambient sound, ensuring that not a whisper of conversation escapes during high-stakes banquets. The cloak’s enchantment is so potent that enemies cannot perceive your presence for its duration, making it an invaluable tool for those who wish to observe without being noticed. Once donned, the spell fades after 30 minutes, leaving you free and clear but with a lingering echo of the mysterious magic woven into its threads.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Silence Ambient Noise",
      "Perception Concealment"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Silence Ambient Noise",
        "rules": "The cloak muffles all ambient sound within a 30-foot radius, rendering it silent for the duration of its use. This effect prevents any conversation or noise from escaping, making it ideal for covert operations during high-stakes events."
      },
      {
        "title": "Perception Concealment",
        "rules": "Enemies are unable to perceive your presence within 30 feet while wearing this cloak. The duration is limited to 30 minutes and ends when the wearer ceases to wear it or if the spell’s duration expires."
      }
    ],
    "levelRequirementReason": "The cloak requires a minimum level of 2 due to its intricate enchantment and the subtle magic needed for such an effect.",
    "vendorReason": "As the creators of the Court Silence Cloak, Shadeward Estate has exclusive rights to sell this item, ensuring its quality and authenticity.",
    "shippingDetail": "The cloak is delivered by Koopa Postal, known for its reliable service. The delivery typically takes 3 days, but in case of emergencies, it can be expedited for an additional fee.",
    "usage": {
      "activation": "Worn as a cloak or cape",
      "duration": "30 minutes",
      "endsWhen": "The wearer stops wearing the cloak or its duration expires",
      "charges": "Unlimited; recharges after a long rest"
    },
    "priceReason": "The Court Silence Cloak is priced at 1000 XP due to its rare enchantment, intricate craftsmanship, and the magical essence required for such an effect.",
    "priceOriginal": 2600,
    "priceReviewedAt": "2026-07-23T17:52:23.067943+00:00",
    "aiReviewedAt": "2026-07-23T17:52:23.067943+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_crimson_dagger": {
    "id": "shadeward_estate_crimson_dagger",
    "name": "Crimson Dagger of the Silent Scribe",
    "description": "The Crimson Dagger of the Silent Scribe gleams with a dark, almost living crimson hue, each blade a testament to the blood of noble lies it has cut through. Crafted from the bones of ancient scribes and enchanted by a shadowy patron of truth, this dagger can expose false oaths and reveal hidden truths. Its edge is sharper than any lie, leaving behind a permanent mark that shatters illusions and reveals the true nature of those around you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Truth Exposer",
      "Charmed Resistance"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Truth Exposer",
        "rules": "When used in combat, this dagger inflicts an additional 10% bonus damage to enemies with lies or false alliances. Additionally, the wielder can use a bonus action at the start of their turn to leave a bloodstain on a creature within 5 feet that reveals its true identity for up to 30 seconds."
      },
      {
        "title": "Charmed Resistance",
        "rules": "While wielding this dagger, the wielder gains immunity to being charmed by political flattery or other similar effects. This immunity persists until the start of their next turn after using an action or reaction in combat."
      }
    ],
    "levelRequirementReason": "The delicate balance required for wielding such a dagger demands at least three levels of experience.",
    "vendorReason": "Shadeward Estate, known for its connections to the shadowy undercurrents of power, is privy to the secrets this dagger can uncover.",
    "shippingDetail": "The dagger arrives via special courier service, ensuring it reaches its destination swiftly and without interruption.",
    "usage": {
      "activation": "Bonus action or reaction during combat",
      "duration": "Instantaneous; ends when the wielder uses an action or reaction in combat",
      "endsWhen": "Exhausted after one use per day",
      "charges": "Unlimited, recharges on a long rest"
    },
    "priceReason": "The dagger’s rarity and unique enchantments justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:52:51.403108+00:00",
    "aiReviewedAt": "2026-07-23T17:52:51.403108+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_crimson_tassel_of_the_vampire_bloodline": {
    "id": "shadeward_estate_crimson_tassel_of_the_vampire_bloodline",
    "name": "Crimson Tassel of the Vampire Bloodline",
    "description": "The Crimson Tassel of the Vampire Bloodline is a ceremonial tassel crafted from the very essence of elder vampires. Its crimson hue glows faintly in dim light, pulsing with an ancient life force that can be harnessed during tense negotiations. When worn, it enhances your ability to manipulate shadows and project influence over NPCs, making you a formidable negotiator in political intrigue. Additionally, it grants you the uncanny ability to detect hidden alliances or betrayals within darkened rooms.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% chance to influence NPC behavior during political intrigue",
      "Detect hidden alliances or betrayals with +30% accuracy in dimly lit areas"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Influence of Shadows",
        "rules": "Activation: On your turn as a bonus action. Duration: Concentration, up to 1 hour. Ends When: You lose concentration or take damage. Save DC: 13. This effect allows you to project your will into the shadows, enhancing your ability to influence NPCs during political interactions."
      },
      {
        "title": "Shadow Detection",
        "rules": "Activation: Passive. Duration: While in dimly lit areas. Ends When: You leave a dimly lit area or become incapacitated. This effect grants you superior vision and the uncanny ability to detect hidden alliances or betrayals within darkened rooms."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Deception or Persuasion to effectively use this item's influence abilities.",
    "vendorReason": "Known for their connections with the vampire bloodline, Shadeward Estate carries this rare tassel as a symbol of their prestige and expertise.",
    "shippingDetail": "Delivered within one week by Lakitu Drones, ensuring secure and timely arrival.",
    "usage": {
      "activation": "Bonus action or passive effect",
      "duration": "Concentration up to 1 hour, Passive while in dimly lit areas",
      "endsWhen": "You lose concentration, take damage, or leave a dimly lit area",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP as it provides subtle but powerful advantages in political situations without being overpowered.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T17:52:36.994820+00:00",
    "aiReviewedAt": "2026-07-23T17:52:36.994820+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_dusk_diplomacy": {
    "id": "shadeward_estate_dusk_diplomacy",
    "name": "Dusk Diplomacy Ring",
    "description": "The Dusk Diplomacy Ring is a rare artifact that whispers secrets and shadows into negotiations. Its darkened gold bands pulse with an eerie glow, which dims during deceit, making it a perfect tool for both charming and exposing truths in high-stakes talks. This ring can reduce enemy suspicion by 30%, ensuring your words are met with open ears, and grants a subtle chance to reveal hidden alliances that could shift the balance of power.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Skeptical Silence",
      "Alliance Revelation"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Skeptical Silence",
        "rules": "Activates as a bonus action during negotiations. Reduces enemy suspicion by 30% for the duration of the negotiation, making them more open to your words. Ends when the negotiation ends or if you lie."
      },
      {
        "title": "Alliance Revelation",
        "rules": "This passive effect provides a 5% chance per day that hidden alliances are revealed during negotiations, potentially shifting the outcome in your favor. It does not require an action to activate but can only be used once every three days."
      }
    ],
    "levelRequirementReason": "The ring's subtle magic requires a basic understanding of social interaction.",
    "vendorReason": "As a prestigious estate dealing in rare artifacts, Shadeward Estates naturally stocks this valuable tool for diplomats and strategists.",
    "shippingDetail": "The ring is carefully packed to preserve its mystical properties during transit.",
    "usage": {
      "activation": "Bonus action (Skeptical Silence); passive effect (Alliance Revelation)",
      "duration": "Instantaneous (Skeptical Silence); daily (Alliance Revelation)",
      "endsWhen": "Negotiation ends or lie is told; can only be used once every three days",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure it remains a valuable but not overpowered tool for skilled negotiators.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T17:52:38.412314+00:00",
    "aiReviewedAt": "2026-07-23T17:52:38.412314+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_item_name": {
    "id": "shadeward_estate_item_name",
    "name": "Mask of the Fractured Atrium",
    "description": "The Mask of the Fractured Atrium is a twisted visage, its surface etched with arcane runes that shimmer and shift like fractured glass. Crafted from the very stones of the Atrium itself, it warps reality to allow wearers to traverse the unstable corridors unnoticed. Only those who dare to step into the fractured heart of the Atrium can wield such a perilous artifact without being detected by its ancient sentinels.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Immunity to Trap Effects",
      "Enhanced Movement in Unstable Terrain"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Immovability Trap Immunity",
        "rules": "While wearing the Mask, the wearer gains immunity to all trap effects within the Fractured Atrium for 10 minutes. This effect does not stack with other forms of immunity."
      },
      {
        "title": "Swift Steps in Unstable Terrain",
        "rules": "The mask grants a +20% increase to movement speed when traversing unstable terrain such as shifting sands or crumbling rock formations within the Atrium, but this effect is nullified if the wearer steps outside of the Atrium."
      }
    ],
    "levelRequirementReason": "The Mask's arcane power demands a minimum of fifth-level proficiency to wield without risking disorientation.",
    "vendorReason": "Shadeward Estate, with its deep ties to the Atrium and its patrons who venture there, is the sole vendor capable of supplying such a dangerous yet invaluable artifact.",
    "shippingDetail": "The mask must be delivered via Lakitu Drones, which specialize in secure and timely deliveries within the Atrium's volatile environment.",
    "usage": {
      "activation": "Passive effect upon donning; duration ends when removed or the wearer leaves the Fractured Atrium",
      "duration": "10 minutes",
      "endsWhen": "Removal from the Atrium or removal of the mask",
      "charges": "Unlimited, recharges after 8 hours outside the Atrium"
    },
    "priceReason": "The Mask's rarity and the risks involved in acquiring it justify its fair value.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:52:58.213252+00:00",
    "aiReviewedAt": "2026-07-23T17:52:58.213252+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_mantle_of_the_unseen_mist": {
    "id": "shadeward_estate_mantle_of_the_unseen_mist",
    "name": "Mantle of the Unseen Mist",
    "description": "The Mantle of the Unseen Mist is a cloak spun from the vapor of forgotten noble courts, its fabric shimmering like mist in the moonlight. It renders the wearer invisible to non-magical observers for ten minutes at a time, but reveals hidden enemies when near a vampire's aura. Its subtle weave grants +1 to Stealth checks during formal settings, making it an indispensable accessory for those who navigate between shadows and light.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth Mode",
      "Vampire Aura Detection"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Mode",
        "rules": "Activates as a bonus action. The wearer becomes invisible to non-magical observers for ten minutes. This effect is neutralized by any attempt to attack the wearer or if they engage in combat."
      },
      {
        "title": "Vampire Aura Detection",
        "rules": "Passively reveals hidden enemies within 30 feet of a vampire's aura when the mantle is worn. The detection lasts until the mantle's Stealth Mode ends, and it has no effect on vampires or creatures immune to divination magic."
      }
    ],
    "levelRequirementReason": "This mantle is designed for those just beginning their adventures, offering a basic yet useful camouflage tool.",
    "vendorReason": "Shadeward Estate, known for its connection to the noble courts of old, naturally sells this relic from forgotten times.",
    "shippingDetail": "The mantle is delivered swiftly by Lakitu Drones, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to activate Stealth Mode; passively detects enemies with Vampire Aura Detection until Stealth Mode expires or combat begins.",
      "duration": "Ten minutes per activation",
      "endsWhen": "Combat engagement or ten-minute duration expiration",
      "charges": "Unlimited uses"
    },
    "priceReason": "The mantle's price reflects its rare material and the magic woven into its fabric, providing a useful tool without overburdening newer adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:53:47.844765+00:00",
    "aiReviewedAt": "2026-07-23T17:53:47.844765+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_mistral_hood": {
    "id": "shadeward_estate_mistral_hood",
    "name": "Mistral Hood of the Unseen Hand",
    "description": "The Mistral Hood of the Unseen Hand is a crimson cloak with flowing edges that whispers secrets in the wind. Crafted from the very shadows of Shadeward Estate, it allows its wearer to move silently and blend into dimly lit rooms. At night, the hood reveals hidden chambers, their locations illuminated by an ethereal glow. Nobles dare not approach those who wear this cloak, for they are immune to sneak attacks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Silent Shadows",
      "Revealing Glow"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silent Shadows",
        "rules": "The wearer can use a bonus action at the start of their turn to attempt to move silently in dimly lit rooms. They have advantage on Dexterity (Stealth) checks made with this action and gain +20% chance to succeed. The effect lasts until the start of their next turn."
      },
      {
        "title": "Revealing Glow",
        "rules": "While wearing the hood at night, the wearer can reveal hidden chambers within 30 feet by using an action. They must make a Wisdom (Perception) check with a DC of 15 to successfully locate one chamber per use."
      }
    ],
    "levelRequirementReason": "This hood is designed for beginners who wish to explore the estate without drawing unwanted attention.",
    "vendorReason": "Only Shadeward Estate can offer such an artifact, crafted from the very shadows of their domain.",
    "shippingDetail": "The cloak is delivered in a sealed package that must be opened by the wearer at night for it to activate properly.",
    "usage": {
      "activation": "Bonus action (Silent Shadows), Action (Revealing Glow)",
      "duration": "Instantaneous, ends when the effect is used",
      "endsWhen": "The start of their next turn or if the wearer removes the hood",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare crafting materials and unique properties.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:52:53.407631+00:00",
    "aiReviewedAt": "2026-07-23T17:52:53.407631+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_shadow_gaze": {
    "id": "shadeward_estate_shadow_gaze",
    "name": "Shadow Gaze Lantern",
    "description": "The Shadow Gaze Lantern casts an eerie, violet glow that pierces through shadows and reveals hidden truths within a noble’s heart. It is best used at night during clandestine dinners, where its soft light illuminates secrets and alliances, making it a subtle but lethal tool for the politically astute. Once activated, the lantern's gaze can be directed to spot hidden enemies within 10 meters of a room, while also granting +5% bonus to stealth-based social maneuvers, allowing users to manipulate situations with greater finesse.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Enemies",
      "Enhances Stealth Social Maneuvers"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Hidden Enemies",
        "rules": "Activates as a bonus action. The lantern’s gaze can be directed to reveal hidden enemies within 10 meters of the room it is used in, providing advantage on Insight checks to detect deceit or betrayal. This effect ends when the lantern's light is turned off."
      },
      {
        "title": "Enhances Stealth Social Maneuvers",
        "rules": "Passive effect while the lantern remains lit. Grants +5% bonus to stealth-based social maneuvers, such as persuasion or deception checks. This advantage persists until the end of the user’s next short or long rest."
      }
    ],
    "levelRequirementReason": "Beginners can start using this tool early in their journey, making it a valuable asset for anyone navigating complex social situations.",
    "vendorReason": "Shadeward Estate is known for its connections with the nobility and offers items that aid in maintaining political power.",
    "shippingDetail": "Due to the delicate nature of the lantern, it requires special handling. Orders are delivered within a week but may take longer during peak seasons.",
    "usage": {
      "activation": "Bonus action to direct its gaze and reveal hidden enemies.",
      "duration": "Instantaneous effect; lasts until the light is turned off.",
      "endsWhen": "The light of the lantern is turned off.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at an XP cost to reflect its utility in complex social and stealth situations without being overly powerful.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-23T17:53:31.174944+00:00",
    "aiReviewedAt": "2026-07-23T17:53:31.174944+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_silken_mask_of_the_vaulted_moon": {
    "id": "shadeward_estate_silken_mask_of_the_vaulted_moon",
    "name": "Silken Mask of the Vaulted Moon",
    "description": "The Silken Mask of the Vaulted Moon is a whispering artifact, its shimmering fabric woven from threads that have been kissed by the moon's light. It conceals your true identity with a veil of illusion, and as you wear it, the air around you grows more receptive to your charm and poise in high society. The mask’s subtle glow deflects suspicion, while its wearer finds themselves irresistibly drawn into the glittering web of courtly intrigue.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Moonlit Charm",
      "Illusionary Concealment"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Moonlit Charm",
        "rules": "When you wear this mask, it enhances your social interactions. You gain a +2 Charisma modifier to all checks made during formal dinners and events. This effect is passive while the mask is worn."
      },
      {
        "title": "Illusionary Concealment",
        "rules": "The mask creates an illusion that subtly conceals you from the gaze of others. You gain advantage on Dexterity (Stealth) checks in shadowed ballrooms and private chambers, as well as a +10 bonus to your Dexterity modifier for these checks."
      }
    ],
    "levelRequirementReason": "The mask's subtle enchantments require a character of at least third level to fully harness its effects.",
    "vendorReason": "Shadeward Estate, known for their connections within the nobility, regularly features this item in their offerings due to its popularity among courtiers and diplomats.",
    "shippingDetail": "Delivered with utmost discretion by Lakitu Drones, ensuring your mask arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect while worn",
      "duration": "Instantaneous; ends when the wearer stops wearing it",
      "endsWhen": "Exhausted upon removal or damage to the mask",
      "charges": "Unlimited"
    },
    "priceReason": "The mask is crafted from rare materials and requires intricate magical enchantments, making it a valuable yet balanced purchase for adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:53:20.994578+00:00",
    "aiReviewedAt": "2026-07-23T17:53:20.994578+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_silken_tie_of_silence": {
    "id": "shadeward_estate_silken_tie_of_silence",
    "name": "Silken Tie of Silence",
    "description": "The Silken Tie of Silence is a velvet band adorned with the sigil of the Whispering Court, its threads woven from the rarest silks. When donned at formal dinners or courtly events, it weaves an invisible barrier of silence around you for 30 seconds, allowing whispered secrets to pass unnoticed and your words to be unheard. Worn by those who seek to observe without being observed, this tie grants +2 to Persuasion checks when dealing with nobility, making even the most subtle negotiations a breeze.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silence Ambient Speech",
      "Enhanced Persuasion"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silence Ambient Speech",
        "rules": "When activated as an action within a formal dinner or courtly event, the Silken Tie of Silence creates a localized silence effect that silences all ambient speech within a 10-foot radius for 30 seconds. This effect has no save DC and can be used once per day. It ends if you leave the area or take any hostile action."
      },
      {
        "title": "Enhanced Persuasion",
        "rules": "While wearing the tie, you gain a +2 bonus to Persuasion checks when negotiating with nobles. This effect is passive and does not require an action to activate."
      }
    ],
    "levelRequirementReason": "This level requirement ensures that even novice courtiers can benefit from the subtlety this item provides.",
    "vendorReason": "The Shadeward Estate sells this tie because it is a key accessory for their guests to navigate the complex social dynamics of high society.",
    "shippingDetail": "Delivered promptly by Lakitu Drones, this item arrives within one game day.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds",
      "endsWhen": "Leaving the area or taking a hostile action",
      "charges": "Once per day"
    },
    "priceReason": "The price reflects its rarity and utility in high-stakes social situations.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:53:40.375360+00:00",
    "aiReviewedAt": "2026-07-23T17:53:40.375360+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_silken_torch": {
    "id": "shadeward_estate_silken_torch",
    "name": "Silken Torch of the Velvet Throne",
    "description": "The Silken Torch of the Velvet Throne exudes a crimson glow that dances like whispers in the dark. It casts eerie, flickering shadows that seem to carry tales of intrigue and betrayal. In formal gatherings, its flame enhances one's stealth by +10%, making it nearly impossible for nobles to spot you among the crowd. With a mere glance at those nearby, there is a 50% chance this torch will reveal their hidden agendas.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhanced Stealth in Formal Gatherings",
      "Reveals Hidden Agendas"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Koopa Postal Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Enhancement",
        "rules": "When activated as an action, the torch grants you a +10 bonus to Dexterity (Stealth) checks for one hour. This effect ends if you attack or cast a spell."
      },
      {
        "title": "Reveal Hidden Agendas",
        "rules": "Once per day, as a bonus action within 30 feet of a noble, roll a d20. On a success (DC 15), the torch reveals one hidden agenda of that noble for the duration of your next short rest."
      }
    ],
    "levelRequirementReason": "This torch is accessible to most adventurers who can afford its price.",
    "vendorReason": "The Shadeward Estate frequently hosts formal gatherings, making this torch a valuable tool for their guests.",
    "shippingDetail": "Due to the delicate nature of the flame, it is recommended to use the Koopa Postal Service for delivery and retrieval.",
    "usage": {
      "activation": "Activate as an action or bonus action.",
      "duration": "Stealth Enhancement lasts one hour. Revealing hidden agendas occurs once per day.",
      "endsWhen": "The effect ends when you attack, cast a spell, or the duration expires.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced to be within reach of most adventuring parties while maintaining its rarity and utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:53:49.671282+00:00",
    "aiReviewedAt": "2026-07-23T17:53:49.671282+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_silver_tongue": {
    "id": "shadeward_estate_silver_tongue",
    "name": "Silver Tongue of the Velvet Court",
    "description": "The Silver Tongue of the Velvet Court is a delicate amulet, its surface etched with runes that shimmer faintly in candlelight. This heirloom grants its wearer unparalleled charm and influence at formal gatherings, subtly weaving words that can sway even the most hardened vampire lords. With each use, it seems to whisper secrets of intrigue into the ears of the noblest, ensuring that no rival escapes unscathed during diplomatic dinners.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Subtle Charm",
      "Silent Influence"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Subtle Charm",
        "rules": "When you speak in a formal setting, you gain advantage on Persuasion checks. Additionally, you can attempt to disarm political rivals with a successful Intimidation check at the start of your turn."
      },
      {
        "title": "Silent Influence",
        "rules": "During negotiations or diplomatic events, as an action, you can cast Silence (save DC 15) on one creature within 30 feet for 1 minute. This effect ends if the target attacks you or another ally within range."
      }
    ],
    "levelRequirementReason": "Requires a character of at least second level to handle its subtle but potent effects.",
    "vendorReason": "As an estate known for breeding noble vampires, Shadeward Estate naturally stocks items that enhance their guests' social prowess.",
    "shippingDetail": "Shipped with utmost secrecy; the amulet arrives within a sealed, enchanted box to ensure its safety during transit.",
    "usage": {
      "activation": "As an action or bonus action (choice of one), depending on the effect used.",
      "duration": "Instantaneous for 'Subtle Charm', 1 minute for 'Silent Influence'.",
      "endsWhen": "The duration ends if you attack, or 'Silent Influence' is dispelled by a successful save.",
      "charges": "Unlimited; the amulet recharges during long rests."
    },
    "priceReason": "Balanced at 1000 XP to reflect its subtle yet powerful effects in formal settings.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:54:01.325881+00:00",
    "aiReviewedAt": "2026-07-23T17:54:01.325881+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_silver_torch_of_the_forgotten_lords": {
    "id": "shadeward_estate_silver_torch_of_the_forgotten_lords",
    "name": "Silver Torch of the Forgotten Lords",
    "description": "The Silver Torch of the Forgotten Lords casts a cold, deceptive glow that illuminates secrets hidden beneath the estate’s marble floors. This relic, forged in the heart of a long-dead noble house, reveals lies during dinner conversations and enhances one's ability to uncover concealed truths and secret passages. Its light is both revealing and disorienting, making it an invaluable tool for those navigating complex social situations or seeking hidden chambers within the estate.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Reveal Secrets",
      "Enhance Social Insight"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Secrets",
        "rules": "When used during a social interaction, this torch grants the user advantage on Persuasion checks. Additionally, it has a +10% chance to uncover hidden secrets or lies within the conversation."
      },
      {
        "title": "Enhance Social Insight",
        "rules": "The torch provides a +5 bonus to Perception checks made to detect secret passages and hidden rooms. This effect lasts for 1 hour after its activation."
      }
    ],
    "levelRequirementReason": "This relic is accessible to players of all levels, as it serves as an introductory tool for uncovering secrets.",
    "vendorReason": "The Shadeward Estate keeps this torch in stock for guests who seek to explore and understand the estate’s rich history and hidden lore.",
    "shippingDetail": "Ships via Lakitu Drone Express, delivered within a week of purchase.",
    "usage": {
      "activation": "Used as an action during social interactions or exploration checks.",
      "duration": "Instantaneous and continuous effect for the duration of the scene.",
      "endsWhen": "The torch is extinguished or the user intentionally ends its effects.",
      "charges": "Unlimited, recharged by the estate."
    },
    "priceReason": "The balanced price reflects its rarity and utility as an introductory tool for uncovering secrets.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-23T17:54:09.698987+00:00",
    "aiReviewedAt": "2026-07-23T17:54:09.698987+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_vampire_ceremonial_cloak": {
    "id": "shadeward_estate_vampire_ceremonial_cloak",
    "name": "Shadowed Regalia Cloak",
    "description": "The Shadowed Regalia Cloak is spun from the very essence of a noble's last breath in a formal duel, its weave shimmering with an ethereal glow. When donned, it grants the wearer perfect invisibility during high-society gatherings, leaving only a faint scent of regret as a reminder of its origin. It subtly amplifies one’s influence within political circles and diminishes the chances of being detected by rival vampires in stealthy maneuvers.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility in Formal Gatherings",
      "Enhanced Influence"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility in Formal Gatherings",
        "rules": "While wearing this cloak, you gain the benefit of invisibility within formal gatherings. This effect lasts for one hour or until you willingly remove it."
      },
      {
        "title": "Enhanced Influence",
        "rules": "When wearing the Shadowed Regalia Cloak in political gatherings, your influence gains are increased by 20%. This bonus is permanent while wearing the cloak but resets to normal when removed."
      }
    ],
    "levelRequirementReason": "The cloak's ethereal essence requires a certain sensitivity and resolve that even low-level characters can muster.",
    "vendorReason": "Shadeward Estate, known for its connections with the noble elite, naturally stocks items imbued with such regal heritage.",
    "shippingDetail": "Delivered swiftly by Pipe Express, ensuring your cloak arrives in perfect condition for your next gathering.",
    "usage": {
      "activation": "Passive effect when worn.",
      "duration": "One hour or until removed.",
      "endsWhen": "Removal of the cloak ends its effects.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced to match its unique and powerful benefits, this rare artifact is priced at a premium but remains accessible for those who value subtlety and influence.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:54:02.761745+00:00",
    "aiReviewedAt": "2026-07-23T17:54:02.761745+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_vampire_dinner_glove": {
    "id": "shadeward_estate_vampire_dinner_glove",
    "name": "Crimson Velvet Dinner Glove",
    "description": "The Crimson Velvet Dinner Glove, a whisper-soft glove embroidered in blood-red lace, conceals a hidden blade within its cuff. Crafted from the finest velvet and dyed with an ancient dye that whispers secrets of the night, it is both a fashion statement and a tool for subtle persuasion. This gloved hand can disarm foes during social events with a mere twitch, and its wearer gains +10% stealth in formal settings, making them a master of shadows and conversation alike.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% Stealth",
      "+5% Disarm Chance"
    ],
    "vendor": "Shadeward Estate",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Boost",
        "rules": "The wearer gains +10% to their Dexterity (Stealth) checks while in formal settings. This effect is passive and does not require an action."
      },
      {
        "title": "Disarm Opportunity",
        "rules": "During social events, the wearer has a +5% chance to disarm opponents with a successful attack roll using this glove. The effect requires an attack action against a target within 5 feet and ends if the target is no longer present or the user takes a different action."
      }
    ],
    "levelRequirementReason": "The gloves are designed for any brave soul who needs to navigate formal events with grace and subtlety.",
    "vendorReason": "As purveyors of fine attire, Shadeward Estate is well-known for their exquisite accessories that enhance one's social prowess.",
    "shippingDetail": "Delivered via the Pipe Express with a special delivery note reading 'For the Masquerade!'",
    "usage": {
      "activation": "Passive and requires no action; disarm effect is an attack action.",
      "duration": "Until the end of the wearer's next turn or until they take another action.",
      "endsWhen": "If the target is no longer within reach or if the user takes a different action.",
      "charges": "Unlimited"
    },
    "priceReason": "The gloves are crafted from fine velvet and enchanted with subtle magic, ensuring they remain a rare and valuable asset.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:54:35.314109+00:00",
    "aiReviewedAt": "2026-07-23T17:54:35.314109+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_vampire_silken_mask": {
    "id": "shadeward_estate_vampire_silken_mask",
    "name": "The Silent Sovereign Mask",
    "description": "The Silent Sovereign Mask is a macabre visage hewn from the bones of a forgotten vampire duke. It whispers secrets of shadow and blood, granting its wearer the uncanny ability to appear as any vampire at formal events. With every use, it subtly alters the speaker’s voice to mimic that of the chosen vampiric noble, and with each glance, it sows seeds of intrigue in the hearts of onlookers, increasing the chance of charm success by 15%. However, its power wanes after three uses; a single night of revelry is all it can sustain.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% bonus to charm rolls during political gatherings",
      "Mimics another vampire’s voice"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Voice Mimicry",
        "rules": "The wearer's voice subtly changes to match that of a chosen vampire, enhancing their ability to deceive and influence. This effect lasts until the end of the wearer's next turn."
      },
      {
        "title": "Charm Boost",
        "rules": "Increases the chance of success on charm checks by 15% for each use, but this bonus is halved after three uses in a single night."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency to wield the mask's subtle and deceptive charms effectively.",
    "vendorReason": "Shadeward Estate specializes in rare artifacts and relics from forgotten nobility, making this mask a fitting addition.",
    "shippingDetail": "Delivered with Pipe Express's signature swift courier service, ensuring the mask arrives in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "Until end of next turn or interrupted",
      "endsWhen": "The wearer’s next turn ends or the effect is interrupted by an action",
      "charges": "3 uses per night"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rare craftsmanship and limited use in a single night.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:54:18.061617+00:00",
    "aiReviewedAt": "2026-07-23T17:54:18.061617+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_vampire_tincture_of_the_dawn": {
    "id": "shadeward_estate_vampire_tincture_of_the_dawn",
    "name": "Vampire Tincture of the Dawn",
    "description": "The Vampire Tincture of the Dawn is a dark, viscous elixir made from the first moon’s blood, brewed in the shadowed halls of Shadeward Estate. It grants temporary immunity to daylight and allows you to move unseen among the dimly lit corridors. As the sun peeks through, your form fades into the shadows, only to reappear as night falls. This potent potion is ideal for covert operations during the day, ensuring you remain undetected in the presence of hidden vampires within 30 feet.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "- Immunity to daylight effects",
      "- Detect hidden vampires"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Daylight Immunity",
        "rules": "Drinking this tincture grants you immunity to the effects of daylight for a duration of 1 hour. The effect begins immediately after consumption and lasts until the end of your next long rest, ending if you are exposed to sunlight or if you use another action that requires visibility."
      },
      {
        "title": "Detect Hidden Vampires",
        "rules": "While under the effects of this tincture, you can detect hidden vampires within 30 feet as a bonus action. This ability is limited to once per short rest and does not provide insight into their intentions or location beyond visibility."
      }
    ],
    "levelRequirementReason": "The complexity of the potion's ingredients necessitates a basic understanding of alchemy.",
    "vendorReason": "Shadeward Estate has exclusive access to the rare blood and secret brewing techniques required for this tincture.",
    "shippingDetail": "The delivery is expedited by Lakitu Drones, ensuring swift arrival before daylight exposure becomes a concern.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "1 hour, ending at the end of your next long rest or if exposed to sunlight",
      "endsWhen": "Exposure to daylight or use of another action that requires visibility",
      "charges": "Unlimited, as it is consumed once and recharged by a full night's rest"
    },
    "priceReason": "The rarity of the ingredients combined with the complexity of its brewing justifies this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:54:36.606093+00:00",
    "aiReviewedAt": "2026-07-23T17:54:36.606093+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_vampire_tongue_ties": {
    "id": "shadeward_estate_vampire_tongue_ties",
    "name": "Velvet Tongue Ties",
    "description": "Velvet Tongue Ties are delicate silk cords that bind a vampire’s tongue to their collarbone, ensuring absolute silence in critical negotiations. These cords whisper secrets only to the wearer, allowing them to share confidences without fear of betrayal or eavesdropping. The cords' subtle magic enhances one's persuasion by +20% and increases the chance of detecting lies during social interrogation by a remarkable 10%. Wielded by those who navigate treacherous political landscapes with finesse.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Silence in Critical Negotiations",
      "Enhanced Persuasion"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silence in Critical Negotiations",
        "rules": "Activates on command as a bonus action. The wearer's voice is rendered silent for the duration, ensuring no verbal backlash during high-stakes talks. Ends when the activation ends or if the wearer speaks normally."
      },
      {
        "title": "Enhanced Persuasion",
        "rules": "Passive effect while worn. Grants +20% to persuasion checks in political intrigue situations. The benefit lasts until the cords are removed, and the wearer must rest for 8 hours before using this ability again."
      }
    ],
    "levelRequirementReason": "This item is designed for those who need immediate access to its effects without needing a high-level proficiency.",
    "vendorReason": "Shadeward Estate specializes in rare and valuable artifacts that help navigate the complex social dynamics of the courtly world.",
    "shippingDetail": "Delivered with Pipe Express's signature secrecy, ensuring the item arrives undetected by prying eyes.",
    "usage": {
      "activation": "Bonus action to activate and command silence.",
      "duration": "Instantaneous activation, lasts until spoken normally or until removed.",
      "endsWhen": "Activation ends when spoken normally or removed.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This price reflects the item's rarity and its utility in critical social situations, making it a fair investment for those who must navigate complex political environments.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-23T17:54:25.697980+00:00",
    "aiReviewedAt": "2026-07-23T17:54:25.697980+00:00",
    "aiReviewVersion": 1
  },
  "shadeward_estate_voicemail_cuff": {
    "id": "shadeward_estate_voicemail_cuff",
    "name": "Voicemail Cuff of the Whispering Court",
    "description": "The Voicemail Cuff of the Whispering Court is a delicate silver cuff imbued with the essence of Shadewards' noble intrigue. It allows the wearer to discreetly intercept and record whispers within a 10-foot radius during formal dinners, giving them an edge in court politics. The cuff's whispering threads can also cause nearby nobles to misinterpret your words by chance, making it a tool for both manipulation and mischief.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Whisper Interception",
      "Word Misinterpretation"
    ],
    "vendor": "shadeward_estate",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Whisper Interception",
        "rules": "Activates as an action within 10 feet of a whispered conversation. The wearer can listen in on the whispers and record them for up to one minute, but only once per day."
      },
      {
        "title": "Word Misinterpretation",
        "rules": "Causes nearby nobles (within 30 feet) to misinterpret any words spoken by the wearer with a 10% chance. This effect lasts until the wearer speaks again or takes an action, but no more than once per hour."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Deception to activate and manipulate the effects effectively.",
    "vendorReason": "Shadewards specialize in items that enhance one's ability to navigate courtly intrigue.",
    "shippingDetail": "Delivered with a special courier who ensures the cuff is discreetly delivered and handled with care.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "One minute per day for Whisper Interception, once per hour for Word Misinterpretation",
      "endsWhen": "Effect ends when the wearer speaks again or takes an action",
      "charges": "Unlimited (rests required to reset)"
    },
    "priceReason": "Balanced at half its original price due to reduced daily use limits and increased complexity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:54:32.444622+00:00",
    "aiReviewedAt": "2026-07-23T17:54:32.444622+00:00",
    "aiReviewVersion": 1
  },
  "shadow_queen_crown": {
    "id": "shadow_queen_crown",
    "name": "Crown of Shadows",
    "description": "The Crown of Shadows is a diadem woven from the very essence of shadow itself, its blackened surface shimmering with an otherworldly light that flickers like dying embers. Crafted by the ancient demon queen, it grants dominion over darkness and the power to cover the world in eternal night. Those who wear it feel the weight of shadows on their skin, as if the very air thickens around them, but at a cost—anyone possessing this cursed artifact risks becoming possessed by its malevolent will.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Control any shadow creature",
      "Cover the world in eternal night"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "The Mournful Wind",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Shadow Control",
        "rules": "As an action, you can command a shadow creature within range. The target must make a DC 18 Wisdom saving throw or be dominated by your will for 1 minute. If the creature fails its save and is still within 30 feet of you at the end of this time, it becomes hostile and attacks you."
      },
      {
        "title": "Eternal Night",
        "rules": "As a bonus action, you can invoke eternal night in an area up to 120 feet in diameter centered on yourself. This effect lasts for 1 minute or until you use this ability again. All creatures within the area must make a DC 18 Dexterity saving throw, or be blinded until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Only those with the strength to wield such dark magic can control and command the Crown of Shadows.",
    "vendorReason": "The Onyx Hand has exclusive access to ancient artifacts like this, having traded in secrets for power over millennia.",
    "shippingDetail": "Delivered by a spectral messenger who leaves the area immediately upon arrival, ensuring the Crown arrives without delay or notice.",
    "usage": {
      "activation": "Action or Bonus Action depending on effect used",
      "duration": "Instantaneous for possession risk; duration varies per effect",
      "endsWhen": "Effect ends when you lose concentration (as long as it's an active spell), the creature escapes, or you dismiss it. Possession risk lasts until the end of your next turn after the creature makes its saving throw.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Crown is a godly artifact with limited utility and significant risks, making it valuable but not overpriced.",
    "priceOriginal": 1100000,
    "priceReviewedAt": "2026-07-23T17:54:58.059946+00:00",
    "aiReviewedAt": "2026-07-23T17:54:58.059946+00:00",
    "aiReviewVersion": 1
  },
  "shadow_queen_tear": {
    "id": "shadow_queen_tear",
    "name": "Shadow Queen's Tear",
    "description": "The Shadow Queen's Tear is a crystallized tear, etched with ancient runes and imbued with dark energies. It grants you the ability to traverse shadows as if they were solid ground, allowing for swift escapes in darkness. The tear also bestows upon you the gift of seeing through the veil of night, enhancing your vision beyond human capacity. However, the Shadow Queen's awareness lingers; she is ever vigilant and will know when you wield her tear.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🖤",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Shadow Step",
      "Darkvision"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "SEALED - PALACE OF SHADOW ONLY",
    "levelRequirement": 15,
    "warning": "The Shadow Queen wants it back. She is patient.",
    "effectDetails": [
      {
        "title": "Shadow Step",
        "rules": "As a bonus action, you can teleport up to 30 feet through darkness. You must have line of effect between your starting and ending positions. This ability is limited to three uses per long rest."
      },
      {
        "title": "Darkvision",
        "rules": "You gain the ability to see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color beyond shades of gray, but you can perceive colorless detail and form normally."
      }
    ],
    "levelRequirementReason": "The Shadow Queen's Tear requires significant power to wield effectively, necessitating a minimum character level of 15.",
    "vendorReason": "Only the Onyx Hand, a trusted servant of the Shadow Queen, can offer such a powerful and dangerous relic.",
    "shippingDetail": "The tear is delivered in an unbreakable, shadow-woven container that ensures its safe arrival. Delivery takes exactly one week.",
    "usage": {
      "activation": "Bonus action for Shadow Step; passive effect for Darkvision.",
      "duration": "Instantaneous for Shadow Step; permanent for Darkvision.",
      "endsWhen": "Exhausts after three uses of Shadow Step or when the tear is destroyed.",
      "charges": "Three charges for Shadow Step, unlimited uses for Darkvision."
    },
    "priceReason": "The price reflects its rarity and powerful effects, balanced to ensure it remains a significant but not game-breaking reward.",
    "priceOriginal": 1000000,
    "priceReviewedAt": "2026-07-23T17:55:00.949065+00:00",
    "aiReviewedAt": "2026-07-23T17:55:00.949065+00:00",
    "aiReviewVersion": 1
  },
  "shadow_realm_assassin_dagger": {
    "id": "shadow_realm_assassin_dagger",
    "name": "Shadow Realm Assassin Dagger (Weapon)",
    "description": "The Shadow Realm Assassin Dagger is a deadly blade forged from the very fabric of shadow itself, crafted by the Nightblade Guild in secret. Its hilt glows faintly with an otherworldly light, and its edge cuts through armor as if it were air. This dagger allows you to strike unseen in the shadows, returning to your hand when thrown, making it a favored weapon for assassins who prefer to remain undetected.",
    "price": 1000,
    "icon": "🗡️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Strikes Unseen",
      "Shadows Return"
    ],
    "vendor": "assassin_den",
    "shippedBy": "Smoke Veil",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Strikes Unseen",
        "rules": "When you make an attack with the Shadow Realm Assassin Dagger and hit, it ignores the target's armor class if they are surprised. The effect lasts until the start of your next turn."
      },
      {
        "title": "Shadows Return",
        "rules": "As a bonus action, you can throw the dagger up to 30 feet. On a successful hit, the dagger returns instantly to your hand. You can use this ability once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires high proficiency and experience to wield such an intricate and powerful weapon.",
    "vendorReason": "The Assassin Den specializes in weapons for those who need to remain unseen, making it the perfect vendor for this dagger.",
    "shippingDetail": "Delivered by Smoke Veil's shadowy couriers, ensuring the dagger arrives under cover of darkness.",
    "usage": {
      "activation": "Bonus action or throwing as a free action (returns on hit)",
      "duration": "Instantaneous and once per rest",
      "endsWhen": "Used up or when your next turn begins after an attack",
      "charges": "Unlimited, recharged at dawn"
    },
    "priceReason": "Balanced price reflects the dagger's unique abilities and the Nightblade Guild's craftsmanship.",
    "priceOriginal": 710000,
    "priceReviewedAt": "2026-07-23T17:55:40.576680+00:00",
    "aiReviewedAt": "2026-07-23T17:55:40.576680+00:00",
    "aiReviewVersion": 1
  },
  "shadow_siren_veil": {
    "id": "shadow_siren_veil",
    "name": "Veil of the Three",
    "description": "The Veil of the Three, a dark purple fabric woven from shadow and starlight, is said to have been crafted by the ancient Sirens themselves. When donned, it becomes indistinguishable from the very floor you stand upon, allowing you to move silently across any surface as if you were part of its texture. Once worn, no eye can see through your form, and no sound escapes your lips—perfect for those who seek to avoid detection in both battle and stealth.",
    "category": "equipment",
    "price": 1000,
    "icon": "👒",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Stealth Masterpiece",
      "Shadow Integration"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Shadow Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Masterpiece",
        "rules": "When worn, the Veil of the Three grants you a +2 bonus to Dexterity (Stealth) checks. You can also become invisible as if under the effect of the Invisibility spell for up to 1 minute at a time."
      },
      {
        "title": "Shadow Integration",
        "rules": "While wearing this veil, your movement does not create noise or leave tracks. It is treated as moving silently on any surface, and you gain advantage on Dexterity (Stealth) checks made to hide in shadows."
      }
    ],
    "levelRequirementReason": "This legendary item requires a minimum level of 1 due to its intricate craftsmanship and magical properties.",
    "vendorReason": "The Onyx Hand is renowned for their expertise in ancient artifacts, making it only fitting that they carry this Siren-crafted veil.",
    "shippingDetail": "Delivered by the Shadow Mail service, ensuring discreet and swift delivery to your doorstep.",
    "usage": {
      "activation": "Instantaneous activation when worn. Becomes inactive after 1 minute or upon removal.",
      "duration": "1 minute per use (recharges after a long rest)",
      "endsWhen": "Removed from the wearer or after 1 minute",
      "charges": "Unlimited uses, recharging at dawn"
    },
    "priceReason": "The Veil of the Three is priced at 1000 XP as it combines the elegance and power of ancient Siren magic with unparalleled stealth capabilities.",
    "priceOriginal": 360000,
    "priceReviewedAt": "2026-07-23T17:55:05.021939+00:00",
    "aiReviewedAt": "2026-07-23T17:55:05.021939+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_abyssal_blood": {
    "id": "shadowfell_abyssal_blood",
    "name": "Abyssal Blood of the Veiled Throne",
    "description": "A vial containing the last drop of blood spilled by the last Sovereign of the Shadowfell, this Abyssal Blood carries the essence of shadow and sovereignty. When consumed, it grants the drinker a brief dominion over shadows, allowing them to manipulate their surroundings with a touch of darkness. For a moment, they bend reality's laws, becoming one with the Veiled Throne’s power until the effect expires or is interrupted by light.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Shadow Manipulation",
      "Immunity to Shadow Attacks"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Manipulation",
        "rules": "As a bonus action, the drinker can extend their hand towards an adjacent creature or object and manipulate shadows for advantage on Stealth checks. This effect lasts until the start of their next turn or until they are subjected to light-based attacks."
      },
      {
        "title": "Immunity to Shadow Attacks",
        "rules": "For 1 minute, the drinker gains immunity to damage from any attack that relies on shadowy elements (such as a Shadowsword or Darkvision). This immunity ends when it is interrupted by direct sunlight or if the drinker enters an area of bright light."
      }
    ],
    "levelRequirementReason": "The vial's power requires a certain level of arcane knowledge and control to safely invoke.",
    "vendorReason": "Only the Shadowfell's enigmatic denizens possess the lore to ensure the blood’s proper use.",
    "shippingDetail": "The vial must be delivered by night, as it requires darkness for safe transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until Start of Next Turn or Interruption",
      "endsWhen": "Light-based Attacks or Direct Sunlight Exposure",
      "charges": "Unlimited"
    },
    "priceReason": "The vial's rarity and the risk involved in procuring it justify its balanced price.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T17:55:40.442172+00:00",
    "aiReviewedAt": "2026-07-23T17:55:40.442172+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_ash_of_the_broken_vessel": {
    "id": "shadowfell_ash_of_the_broken_vessel",
    "name": "Ash of the Broken Vessel",
    "description": "The Ash of the Broken Vessel, a fragmentary relic made from the shattered remains of a vessel cursed by the Oracle, now serves as a conduit for spectral guardians. This dust-like substance clings to your arm like living ash, and when invoked, it spawns ethereal protectors that fight alongside you in battle, their movements swift yet silent. Worn with care, this relic also saps the vitality of foes, reducing their health regeneration by 10%, making each clash more lethal.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Summons spectral guardians",
      "Reduces enemy HP regeneration"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Summon Spectral Guardians",
        "rules": "Activates as a bonus action. Summons one spectral guardian with 100% HP, 100% damage output, and 20% increased movement speed for three turns. The guardian vanishes after its duration or upon taking any damage."
      },
      {
        "title": "Cursed Vessel Buff",
        "rules": "Passive effect that reduces the health regeneration of enemies in combat by 10%. This effect persists until the wearer drops the relic, is hit with a critical strike, or reaches a level higher than 5."
      }
    ],
    "levelRequirementReason": "Only those who have faced significant trials can wield this cursed and powerful artifact.",
    "vendorReason": "Shadowfell is the realm where the Ash of the Broken Vessel originates, and its vendor represents the very essence of that dark domain.",
    "shippingDetail": "Due to the dangerous nature of this relic, it must be shipped by Koopa Postal with special handling, adding a week to delivery time.",
    "usage": {
      "activation": "Bonus action to summon guardians; passive effect always active while worn",
      "duration": "Instantaneous for guardian summons; lasts until interrupted or guardian falls in combat",
      "endsWhen": "Guardian vanishes after three turns or on damage taken. Passive effect ends when the relic is removed, crit hits it, or the user reaches level 6.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Ash of the Broken Vessel's rare origin and its powerful effects justify this balanced price.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T17:55:47.225280+00:00",
    "aiReviewedAt": "2026-07-23T17:55:47.225280+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_assassin_guild_membership": {
    "id": "shadowfell_assassin_guild_membership",
    "name": "Shadowfell Assassin Guild Membership",
    "description": "A leather-bound membership card that glows faintly with shadowy runes, this is no mere document but a binding contract to serve in the League of Shadows. The card allows access to exclusive guild contracts, worth 50,000 gp per week, and grants free resurrection if you are slain on official missions. Crafted by the enigmatic Hidden Hand, it whispers secrets when held, hinting at ancient lore and forbidden knowledge.",
    "price": 1000,
    "icon": "🗡️",
    "stock": 6,
    "rarity": "legendary",
    "effects": [
      "Exclusive Contracts",
      "Free Resurrection"
    ],
    "vendor": "shadow_broker",
    "shippedBy": "Shadow Step Express",
    "levelRequirement": 16,
    "factionBonus": {
      "shadow": 150
    },
    "effectDetails": [
      {
        "title": "Exclusive Contracts",
        "rules": "This card grants access to guild contracts worth 50,000 gp per week. The contract is automatically accepted when the card is presented, and it must be completed within one month."
      },
      {
        "title": "Free Resurrection",
        "rules": "If you are killed on official guild business, this membership card can be used to trigger a free resurrection spell. This effect can only be used once per week."
      }
    ],
    "levelRequirementReason": "This membership requires significant experience and expertise in shadow magic.",
    "vendorReason": "The Shadow Broker deals in powerful and rare items, including exclusive contracts from the League of Shadows.",
    "shippingDetail": "Delivered via a courier who can teleport to your location, ensuring swift arrival.",
    "usage": {
      "activation": "Presenting the card when accepting or completing guild missions.",
      "duration": "Instantaneous for contract acceptance; weekly for resurrection use.",
      "endsWhen": "The contract is completed or you are resurrected.",
      "charges": "Unlimited, but limited to one resurrection per week."
    },
    "priceReason": "This membership provides significant advantages and exclusive access without being game-breaking.",
    "priceOriginal": 515000,
    "priceReviewedAt": "2026-07-23T17:55:29.344815+00:00",
    "aiReviewedAt": "2026-07-23T17:55:29.344815+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_banana_heart_amber": {
    "id": "shadowfell_banana_heart_amber",
    "name": "Banana Heart Amber",
    "description": "Banana Heart Amber is a shimmering crystal shard that mimics the shape of a banana peel. Crafted from the essence of a long-forgotten fruit vendor’s scream, it hums with the chaotic energy of the DK Isles. Those who wear it feel a strange connection to the jungle’s hidden past, and gain a taste of its joyful chaos. It grants temporary resistance to fear effects for 1 round when worn near the DK Isles, and can be used as a talisman against daytime combat challenges.",
    "price": 1000,
    "icon": "🍌",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "+1 to all luck checks in jungle environs",
      "Grants temporary resistance to fear effects"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resilient Fruit Charm",
        "rules": "When worn within the DK Isles, the wearer gains temporary resistance to fear effects for 1 round. This effect does not stack with other similar resistance effects."
      },
      {
        "title": "Jungle Luck Boost",
        "rules": "While in jungle environs, the wearer receives +1 bonus to all luck checks. This effect is active as long as the item is worn and the character is within 50 feet of a jungle environment."
      }
    ],
    "levelRequirementReason": "This charm requires no specific level because its effects are tied to environmental factors and do not introduce complex mechanics.",
    "vendorReason": "Shadowfell stocks items with eerie, nature-connected themes, making it a fitting vendor for the Banana Heart Amber.",
    "shippingDetail": "Ships via Pianta Chuck Express. Expected delivery time is 3-5 days from stock availability.",
    "usage": {
      "activation": "Passive effect when worn near jungle environs; active when within the DK Isles.",
      "duration": "Instantaneous, lasting for 1 round while in the DK Isles or within 50 feet of a jungle environment.",
      "endsWhen": "The effect ends upon leaving the DK Isles or exiting a jungle environment.",
      "charges": "Unlimited"
    },
    "priceReason": "The item’s rarity, environmental connection, and unique effects justify its higher price in XP.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-23T17:55:47.301280+00:00",
    "aiReviewedAt": "2026-07-23T17:55:47.301280+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_black_rime_blade": {
    "id": "shadowfell_black_rime_blade",
    "name": "Black Rime Blade",
    "description": "The Black Rime Blade is a cursed sword forged from the frozen Onyx of the Shadowfell and shadow essence, imbued with the malevolent intent of its creator. This weapon strikes with chilling precision, leaving frost runes on the enemy's skin that slow their movements, making them easier targets for your next strike. The blade whispers secrets of the dark as it deals devastating damage to undead and shadow creatures, ensuring swift and fatal blows in the cold darkness.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Cold Edge",
      "Frost Runes"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Cold Edge",
        "rules": "When you make a melee attack with this weapon against an undead or shadow creature, deal an additional 120% damage. This effect is not subject to critical hit multipliers."
      },
      {
        "title": "Frost Runes",
        "rules": "Once per turn when you hit an enemy with the Black Rime Blade, etch frost runes on their skin for 3 seconds, reducing their movement speed by 20%. This effect can only occur once per target per day."
      }
    ],
    "levelRequirementReason": "This sword is crafted to channel dark magic and requires a character of at least level 5 to wield it effectively.",
    "vendorReason": "The Shadowfell's dark artisans are the only ones who can craft such a cursed yet powerful weapon.",
    "shippingDetail": "Special handling is required for this item, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "On hit with melee attack",
      "duration": "Instantaneous effect; duration of the movement speed reduction is 3 seconds",
      "endsWhen": "Effect ends when the target's turn ends or they are no longer an undead or shadow creature",
      "charges": "Unlimited uses"
    },
    "priceReason": "The sword's balanced price reflects its rarity and the materials used in its forging.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:55:59.924102+00:00",
    "aiReviewedAt": "2026-07-23T17:55:59.924102+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_blade_of_reverence": {
    "id": "shadowfell_blade_of_reverence",
    "name": "Blade of Reverence",
    "description": "The Blade of Reverence, forged from the soul essence of a fallen Onyx Hand initiate, glows with an eerie crimson light that dances along its obsidian edge. This ceremonial dagger not only grants +30% damage against undead but also drains their vitality, inflicting 'Vampiric Resonance' on hits, siphoning 10% of their health for one turn. Nearby foes feel a creeping corruption, losing 1d2 hit points each round over three turns.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Vampiric Resonance",
      "Corrosive Corruption"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Vampiric Resonance",
        "rules": "When the Blade of Reverence strikes an undead, it draws a portion of their vitality. The target loses 10% of its hit points for one turn after being hit by this weapon."
      },
      {
        "title": "Corrosive Corruption",
        "rules": "The blade's touch spreads a subtle decay around it. Any creature within 5 feet suffers 1d2 hit point damage at the start of each of their turns, persisting for three rounds."
      }
    ],
    "levelRequirementReason": "This weapon demands proficiency in dagger combat and an understanding of its dark magic.",
    "vendorReason": "The Shadowfell is home to the Onyx Hand, and they are the keepers of such revered artifacts.",
    "shippingDetail": "Shipped via the Void Drifter Relay, this dagger arrives with a delayed shipment of one week due to its mystical nature.",
    "usage": {
      "activation": "Drawn as an action and strikes once per turn as a bonus action.",
      "duration": "Instantaneous effect on strike; 'Corrosive Corruption' lasts for three rounds.",
      "endsWhen": "The dagger's charges are exhausted after five uses or when the wielder is incapacitated.",
      "charges": "5 charges"
    },
    "priceReason": "This blade combines rare materials and mystical enchantments, making it a valuable and potent relic.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T17:56:14.257194+00:00",
    "aiReviewedAt": "2026-07-23T17:56:14.257194+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_blade_of_silence": {
    "id": "shadowfell_blade_of_silence",
    "name": "Blade of the Silent Executioner",
    "description": "The Blade of the Silent Executioner, forged from the very essence of a vampire lord's shadow, whispers inaudible truths to foes who dare to face it. Its razor-sharp edge gleams with memories stolen from its victims, and when drawn, the blade emits an eerie hum that can disarm an enemy for two fleeting moments. The executioner’s touch leaves behind a lingering echo—enemies within ten feet suffer from “Memory Theft,” their minds clouded by forgotten horrors for ten seconds.",
    "category": "equipment",
    "price": 3000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Disarms target",
      "Memory Theft"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Disarm",
        "rules": "When the blade strikes, it disarms the target for two seconds. The disarm effect ends if the wielder sheathes the weapon or if an opponent successfully hits the wielder with a melee attack."
      },
      {
        "title": "Memory Theft",
        "rules": "Enemies within ten feet of the wielder suffer from “Memory Theft” for 10 seconds, suffering a −2 penalty to all saving throws and ability checks. This effect ends if the blade is sheathed or if an opponent successfully hits the wielder with a melee attack."
      }
    ],
    "levelRequirementReason": "The Blade of the Silent Executioner requires a minimum level of 6 because its abilities are too powerful for lower-level characters, providing them with a significant advantage in combat.",
    "vendorReason": "Shadowfell merchants specialize in rare and dangerous artifacts from dark realms, making it logical that they sell this blade.",
    "shippingDetail": "The Blade of the Silent Executioner arrives discreetly, but due to its sensitivity to light, it must be transported under cover of darkness or within a shadow-drenched container.",
    "usage": {
      "activation": "On strike",
      "duration": "Instantaneous (Disarm effect), 10 seconds (Memory Theft)",
      "endsWhen": "Weapon sheathed or opponent successfully hits wielder with melee attack",
      "charges": "Unlimited"
    },
    "priceReason": "The blade's unique properties and the lore behind its creation justify a price of 3000 XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:56:51.146676+00:00",
    "aiReviewedAt": "2026-07-23T17:56:51.146676+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_blade_of_the_void": {
    "id": "shadowfell_blade_of_the_void",
    "name": "Blade of the Void",
    "description": "The Blade of the Void, forged from the forgotten whispers of the Dark Mirror’s abyss, strikes with a silent precision that drains foes' willpower and leaves them in a state of numbing dread. Its edge glows eerily as it cuts through darkness, leaving behind a lingering aura that disrupts enemy regeneration for ten seconds. Crafted by the enigmatic artisans of Shadowfell, this weapon is both a deadly tool and a relic of ancient shadow magic.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silent Strike",
      "Regeneration Inhibition"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Silent Strike",
        "rules": "When the Blade strikes an undead creature, it deals 150% extra damage and grants temporary invisibility to the wielder for 3 seconds. This effect can only occur once per minute."
      },
      {
        "title": "Regeneration Inhibition",
        "rules": "After each successful strike against a foe, the Blade reduces their regeneration by 50% for 10 seconds. The target must make a DC 14 Constitution saving throw or be unaffected by this effect. This effect can only occur once per turn."
      }
    ],
    "levelRequirementReason": "Crafted from the whispers of forgotten shadows, the Blade of the Void demands a masterful hand to wield its dark magic effectively.",
    "vendorReason": "The artisans of Shadowfell are known for their mastery of shadow and darkness, making them the perfect purveyors of such a powerful weapon.",
    "shippingDetail": "Due to its volatile nature, this item requires special handling. Shy Guy Smugglers ensure safe delivery within three days.",
    "usage": {
      "activation": "On hit with the blade",
      "duration": "Instantaneous and duration lasts until end of next turn for the target",
      "endsWhen": "Target regenerates or the creature is no longer a valid target",
      "charges": "Unlimited"
    },
    "priceReason": "The blade's unique crafting process, combined with its potent effects and rarity, ensures it remains an expensive but balanced addition to any adventurer’s arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:56:45.376986+00:00",
    "aiReviewedAt": "2026-07-23T17:56:45.376986+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_blood_fang": {
    "id": "shadowfell_blood_fang",
    "name": "Fang of the Blood Sovereign",
    "description": "The Fang of the Blood Sovereign, a macabre relic carved from the jawbone of an ancient vampire ruler, radiates an eerie chill that can be felt by all within its proximity. Its touch can suppress enemy morale, causing them to flee in fear or attack at random, and it deals +15% damage specifically against undead creatures, making it a formidable weapon in the hands of those who brave the shadows.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Suppress Morale",
      "+15% Damage Against Undead"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Suppress Morale",
        "rules": "As an action, the wielder can unleash a chilling aura around them, causing all enemies within 20 feet to have disadvantage on attack rolls and saving throws for 1 minute. They must succeed on a DC 13 Wisdom saving throw or be frightened until the end of their next turn."
      },
      {
        "title": "+15% Damage Against Undead",
        "rules": "This fang grants +15% damage against undead creatures, stacking with other sources of undead damage. This effect is permanent as long as you wield it."
      }
    ],
    "levelRequirementReason": "The relic's ancient power demands only a minimum level to wield.",
    "vendorReason": "The Shadowfell vendors possess the knowledge and resources to source such powerful relics from their dark domains.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, this item arrives with a special cold pack to preserve its eerie chill.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until the end of your next turn for enemies who fail their saving throw",
      "endsWhen": "The effect ends if you are incapacitated or no longer hold the fang in your hand.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from an ancient vampire's bone, this relic is a rare and powerful tool that balances well with other items of its rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:56:32.401202+00:00",
    "aiReviewedAt": "2026-07-23T17:56:32.401202+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_blood_inkwell": {
    "id": "shadowfell_blood_inkwell",
    "name": "Blood Inkwell of the Forgotten Scribe",
    "description": "The Blood Inkwell of the Forgotten Scribe is a dark, obsidian vessel filled with ink that glows faintly with an otherworldly light. Crafted from the bones of ancient scribes in the depths of the Shadowfell, this relic writes in forgotten scripts that whisper secrets of the past. Pouring its contents onto parchment reveals spectral glyphs that either unlock hidden lore or curse the reader to forget their own name for 1d4 rounds if misinterpreted.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden lore",
      "Risk: Curses the user"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Unlock Hidden Lore",
        "rules": "Activates as an action. When poured onto parchment, it reveals a spectral glyph that provides a single piece of forgotten knowledge or trap location relevant to the environment. The effect is instantaneous and has no range. There is no save DC required; however, the user must spend 1 round reading the glyph before its meaning can be fully understood."
      },
      {
        "title": "Curses the User",
        "rules": "If read incorrectly or if the user fails to spend their turn understanding the glyph within one minute of activation, they are cursed. For 1d4 rounds, the user forgets their own name and any knowledge they had about themselves that was not encoded in their mind prior to this event."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 3 to handle the mystical energies of the Shadowfell without risk.",
    "vendorReason": "The shadowy realm itself is the source and custodian of such arcane artifacts, ensuring their proper sale in only its own markets.",
    "shippingDetail": "Ships via a Void Drifter Relay, which can take up to one week due to the unstable nature of the Shadowfell's borders.",
    "usage": {
      "activation": "As an action",
      "duration": "Instantaneous; effect lasts until fully interpreted or misread",
      "endsWhen": "Misreading the glyph or spending a full round understanding it",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "The rarity and mystical origin of the Blood Inkwell justify its price, as it is not just an item but a conduit to forgotten knowledge.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:57:16.027162+00:00",
    "aiReviewedAt": "2026-07-23T17:57:16.027162+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_blood_mirrored_sword": {
    "id": "shadowfell_blood_mirrored_sword",
    "name": "Blood Mirrored Sword",
    "description": "The Blood Mirrored Sword hums with dark vitality, its blade a liquid shadow that warps and bends to reflect the very essence of its wielder's soul. Each strike severs a thread from the forgotten past, whispering tales of lost battles in the heart of undead foes. The sword deals an additional 1d6 necrotic damage against incorporeal creatures and undead, and upon landing two consecutive hits, it stuns the target for one round with a 25% chance.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+25% damage against undead",
      "Stun on consecutive strikes"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Necrotic Surge",
        "rules": "The Blood Mirrored Sword deals an additional 1d6 necrotic damage to incorporeal creatures and undead. This effect occurs with each strike against such targets."
      },
      {
        "title": "Stun on Consecutive Hits",
        "rules": "Upon landing two consecutive strikes, the target is stunned for one round. The sword has a 25% chance of inflicting this effect during combat."
      }
    ],
    "levelRequirementReason": "The Blood Mirrored Sword's dark magic requires a proficient wielder to channel its power effectively.",
    "vendorReason": "Shadowfell traders specialize in rare artifacts of the arcane and macabre, making this sword an expected offering for their clientele.",
    "shippingDetail": "Delivered via nightmarish courier, ensuring safe passage through dangerous territories.",
    "usage": {
      "activation": "On each strike",
      "duration": "Instantaneous",
      "endsWhen": "Target is stunned or the sword's effects are interrupted",
      "charges": "Unlimited"
    },
    "priceReason": "The Blood Mirrored Sword's unique alignment and dark necrotic properties justify its moderate price in experience points.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-23T17:57:26.864021+00:00",
    "aiReviewedAt": "2026-07-23T17:57:26.864021+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_blood_scar_tapestry": {
    "id": "shadowfell_blood_scar_tapestry",
    "name": "Blood Scar Tapestry",
    "description": "The Blood Scar Tapestry, woven from the tattered remnants of fallen Onyx Hand warriors, weaves their lingering fury into a crimson tapestry that shimmers with malevolent energy. When donned, it grants the wearer an aura of bloodlust, causing enemies to recoil in fear and fight back more fiercely. The fabric itself hums with life, occasionally releasing a pulse of raw vitality into the wielder's strikes, enhancing critical hit chances by a significant margin.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% chance on critical hits",
      "Inflicts 1d6 bleed damage on enemies after 5 seconds"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Critical Hit Boost",
        "rules": "The Blood Scar Tapestry increases the user's critical hit chance by +10%. This effect is passive and does not require any activation. The duration of this boost lasts for the entire combat session."
      },
      {
        "title": "Bleed Infusion",
        "rules": "After 5 seconds of contact with an enemy, the Blood Scar Tapestry releases a pulse that inflicts 1d6 bleed damage to the target. This effect can only occur once per encounter and is triggered by physical contact."
      }
    ],
    "levelRequirementReason": "The tapestry's power is too volatile for lower-level characters, requiring at least third level to wield it safely.",
    "vendorReason": "Shadowfell has exclusive access to the remnants of fallen Onyx Hand warriors used in crafting such powerful artifacts.",
    "shippingDetail": "Special handling required; delivery takes an extra day due to the fragile nature of the tapestry.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Entire combat session or until removed",
      "endsWhen": "Combat ends, or when the wearer removes it",
      "charges": "Unlimited"
    },
    "priceReason": "The tapestry's rarity and the unique crafting process make it a valuable purchase for those who can afford its price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:57:26.756462+00:00",
    "aiReviewedAt": "2026-07-23T17:57:26.756462+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_blood_siphon": {
    "id": "shadowfell_blood_siphon",
    "name": "Blood Siphon of the Onyx Hand",
    "description": "The Blood Siphon of the Onyx Hand is a sinister obsidian vial, its surface etched with dark runes that glow faintly in shadowed environs. It drains vitality from foes, leaving them drained and vulnerable to attack while granting the user temporary health through the stolen essence. Additionally, it enhances stealth, allowing you to slip past enemies more easily as your movements are cloaked by a shroud of darkness. Perfect for those who thrive in the night's embrace.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Vitality Drain",
      "Stealth Enhancement"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Vitality Drain",
        "rules": "When activated, the Blood Siphon of the Onyx Hand drains 10% of a target's hit points and converts it to temporary hit points for the user. This effect has no save DC but is limited to once per short or long rest."
      },
      {
        "title": "Stealth Enhancement",
        "rules": "While the Blood Siphon is active, you gain a +2 bonus to Dexterity (Stealth) checks and your Stealth duration is increased by 1 hour. This effect ends when the siphon is expended or if you take an action that requires concentration."
      }
    ],
    "levelRequirementReason": "The Blood Siphon's dark magic demands a higher level of mastery to wield safely.",
    "vendorReason": "Shadowfell, known for its expertise in crafting and dealing with dark artifacts, ensures the Blood Siphon is handled by those who understand its power.",
    "shippingDetail": "Delivered swiftly through shadowy channels, ensuring the Blood Siphon arrives before the dawn.",
    "usage": {
      "activation": "A bonus action to activate and use the siphon once per short or long rest.",
      "duration": "1 hour, expending the siphon's active state.",
      "endsWhen": "The siphon is expended upon completion of its duration or if you take an action that requires concentration.",
      "charges": "Unlimited uses between rests."
    },
    "priceReason": "Crafted from rare materials and infused with dark magic, the Blood Siphon's balanced price reflects its power and rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:57:20.256743+00:00",
    "aiReviewedAt": "2026-07-23T17:57:20.256743+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_blood_siphon_catalyst": {
    "id": "shadowfell_blood_siphon_catalyst",
    "name": "Blood Siphon Catalyst",
    "description": "The Blood Siphon Catalyst is a pulsating black crystal that amplifies vampiric drain power, siphoning the life essence of foes as it deals devastating damage. Crafted from the twisted essence of shadowfell creatures, this relic grants its wielder increased movement speed and enhanced combat prowess during its active duration. Perfect for stealthy assassins or undead commanders, it channels the dark energy that flows through the Shadowfell itself, making each strike more deadly with every pulse.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Siphons Life Essence",
      "Enhanced Combat Prowess"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Siphons Life Essence",
        "rules": "When activated as a bonus action, the Blood Siphon Catalyst amplifies damage dealt to living targets by +2d6. Additionally, it siphons 10% of the target's hit points as bonus damage, dealing this additional damage on each successful hit. The effect lasts for 1 minute per caster level. This ability ends if the caster drops below half their maximum hit points or if they are incapacitated."
      },
      {
        "title": "Enhanced Combat Prowess",
        "rules": "While the Blood Siphon Catalyst is active, the wielder gains a +2 bonus to speed and an additional +10 feet of movement. This effect persists for the duration of the catalyst's activation period, which ends when the caster drops below half their maximum hit points or is incapacitated."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level to wield this potent artifact effectively.",
    "vendorReason": "The Shadowfell itself birthed the Blood Siphon Catalyst, and only those who traverse its dark realms can obtain such a relic.",
    "shippingDetail": "Due to its volatile nature, the Blood Siphon Catalyst must be couriered by Shy Guy Smugglers for safe handling and delivery.",
    "usage": {
      "activation": "Bonus action to activate; ends when caster drops below half hit points or is incapacitated.",
      "duration": "1 minute per caster level",
      "endsWhen": "Caster drops below half their maximum hit points, becomes incapacitated, or the duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from shadowfell essence and imbued with potent vampiric energies, this catalyst is a rare find worth its high price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:58:04.666310+00:00",
    "aiReviewedAt": "2026-07-23T17:58:04.666310+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_blooper_wetworks_glass_crimson": {
    "id": "shadowfell_blooper_wetworks_glass_crimson",
    "name": "Glass Crimson Lens",
    "description": "The Glass Crimson Lens is a fractured lens of crimson glass, its facets shimmering with the remnants of a Void Drifter’s final flight. Crafted by Blooper Wetworks, this relic distorts reality, allowing users to perceive illusions as they truly are and uncover hidden truths in their foes' disguises. A fragile yet powerful artifact, it warps the temporal fabric, connecting the Shadowfell and The Edge, but its power can blind its wielder with its own reflection.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Illusion Detection",
      "Reveal Disguise"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Blooper Wetworks Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Illusion Detection",
        "rules": "When used as a bonus action, the wearer gains advantage on Perception checks to detect illusions within 30 feet. This effect lasts for 1 minute and can be activated once per short or long rest."
      },
      {
        "title": "Reveal Disguise",
        "rules": "As an action, the wielder can use the lens to reveal the true form of a foe within 60 feet with a successful DC 15 Wisdom (Perception) check. The effect lasts until the start of your next turn and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least third level to wield this powerful yet fragile artifact effectively.",
    "vendorReason": "The Shadowfell is known for its dark and mysterious artifacts, making it the ideal vendor for such a relic.",
    "shippingDetail": "Ships via Blooper Wetworks Express, ensuring safe delivery within one week.",
    "usage": {
      "activation": "Bonus action or action (for Reveal Disguise)",
      "duration": "1 minute for Illusion Detection; effect ends when the start of your next turn arrives",
      "endsWhen": "The duration ends at the end of your next turn after activation, or if the user drops the lens",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced price for a powerful artifact that requires attunement and is fragile yet versatile.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T17:57:37.886218+00:00",
    "aiReviewedAt": "2026-07-23T17:57:37.886218+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_cloak_of_blood_tide": {
    "id": "shadowfell_cloak_of_blood_tide",
    "name": "Cloak of Blood Tide",
    "description": "Woven from the essence of drowned vampires, this cloak pulses with the rhythm of the Blood Tide, its dark fabric shimmering with a life of its own when exposed to shadowed water or undead-infested ruins. The wearer moves unseen through flooded crypts and murky swamps, while the cloak whispers warnings of nearby undead. Feel its touch on your skin; it thrums like a heartbeat, enhancing stealth in the darkest zones.",
    "category": "equipment",
    "price": 2500,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stealth in Dark Zones",
      "Enhanced Movement"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth in Dark Zones",
        "rules": "While in shadowed water or dark flooded areas, you gain advantage on Dexterity (Stealth) checks. This effect lasts for 1 minute."
      },
      {
        "title": "Enhanced Movement",
        "rules": "You have a +2 bonus to movement speed through water or shadowed terrain. This bonus does not stack with other movement speed bonuses."
      }
    ],
    "levelRequirementReason": "This cloak requires at least 3rd level to harness its undead whispering and stealth capabilities effectively.",
    "vendorReason": "Shadowfell is the only known source of materials that can withstand the essence of drowned vampires, making it a fitting vendor for this item.",
    "shippingDetail": "Due to its arcane nature, the cloak must be delivered by Shy Guy Smugglers for safe handling and transport.",
    "usage": {
      "activation": "Passive effect when worn in dark or flooded zones.",
      "duration": "1 minute (recharges after a long rest)",
      "endsWhen": "Ends if you move out of the appropriate environment or complete a short rest.",
      "charges": "Unlimited, recharges on completion of a long rest"
    },
    "priceReason": "The cloak's balance is adjusted to reflect its unique blend of undead whispering and stealth capabilities.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:58:27.908040+00:00",
    "aiReviewedAt": "2026-07-23T17:58:27.908040+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_cloak_of_the_bloody_moon": {
    "id": "shadowfell_cloak_of_the_bloody_moon",
    "name": "Cloak of the Bloody Moon",
    "description": "The Cloak of the Bloody Moon is a tattered, crimson garment woven from the moon’s blood and the whispered secrets of the dead. It grants its wearer temporary invulnerability to psychic attacks, turning their mind into an impenetrable fortress against mental assaults. When donned, it also casts a haunting presence that draws enemies to the user's location, compelling them into a deadly dance around the cloak's wearer.",
    "category": "equipment",
    "price": 3000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Psychic Invulnerability",
      "Spectral Echo"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Psychic Invulnerability",
        "rules": "The wearer gains immunity to psychic damage for 1 minute. This effect can be used once per short or long rest."
      },
      {
        "title": "Spectral Echo",
        "rules": "Once per turn, the cloak summons a spectral echo that draws enemies within 30 feet towards its location. The echo lasts for 5 seconds and has a 10% chance of being summoned during each movement action or reaction."
      }
    ],
    "levelRequirementReason": "This cloak requires high-level spellcasting to harness its full potential.",
    "vendorReason": "The Shadowfell's dark artisans craft this item from lunar essence and the whispers of the dead, making it a fitting offering for their patrons.",
    "shippingDetail": "Delivered by spectral couriers who ensure the cloak arrives with all its haunting power intact.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until used again",
      "endsWhen": "The wearer is no longer in a combat situation, or they use it again",
      "charges": "Limited to once per short rest"
    },
    "priceReason": "Crafted from rare lunar materials and esoteric knowledge, this cloak commands a steep price.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:57:56.042868+00:00",
    "aiReviewedAt": "2026-07-23T17:57:56.042868+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_cloak_of_the_dark_ward": {
    "id": "shadowfell_cloak_of_the_dark_ward",
    "name": "Cloak of the Dark Ward",
    "description": "The Cloak of the Dark Ward is a shadow-woven garment that absorbs ambient light and converts it into dark energy, enhancing your stealth and defense. Worn by a fallen shadow mage, its soul whispers secrets of the night. When activated, it becomes an impenetrable cloak of darkness, allowing you to slip past foes unseen. The cloak's threads hum with ancient magic, regenerating vitality as they draw upon the ambient light around you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Stealth Cloak",
      "Dark Energy Regeneration"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth Cloak",
        "rules": "Activate as a bonus action. You become invisible for 8 seconds, gaining advantage on Dexterity (Stealth) checks while in this state."
      },
      {
        "title": "Dark Energy Regeneration",
        "rules": "Passively regenerates 5 vitality points per second whenever you are within an area of dim light or darkness. This effect ends when you leave such an area."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Stealth to fully harness the cloak's abilities.",
    "vendorReason": "Shadowfell vendors specialize in items that bridge the realms of light and darkness, making this cloak a natural addition to their inventory.",
    "shippingDetail": "Delivered by night, ensuring the cloak arrives under cover. Any exposure during day will cause it to lose its magical properties until dark again.",
    "usage": {
      "activation": "Bonus action to activate Stealth Cloak; passively regenerates vitality while in dim light or darkness.",
      "duration": "Stealth Cloak lasts for 8 seconds; ends when you leave a dimly lit area.",
      "endsWhen": "Leaving an area of dim light or darkness stops the passive regeneration effect.",
      "charges": "Unlimited, but requires concentration to maintain Stealth Cloak."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the cloak's unique combination of stealth and regenerative properties, suitable for an adventurer of level 3.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:58:19.901937+00:00",
    "aiReviewedAt": "2026-07-23T17:58:19.901937+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_cloak_of_whispers": {
    "id": "shadowfell_cloak_of_whispers",
    "name": "Cloak of Whispers",
    "description": "The Cloak of Whispers is a tattered, midnight-black garment woven from the shadows of the Shadowfell. Its fabric hums with ancient magic, absorbing light and sound as it wraps around its wearer, who becomes an enigmatic figure in the dark. When donned, it muffles one’s voice but amplifies their innermost thoughts, making them a target for those who seek to manipulate or silence. The cloak whispers secrets that only the wearer can hear, leaving them with cryptic insights into their own mind and intentions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Muffle Voice",
      "Whispering Insight"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Muffle Voice",
        "rules": "The Cloak of Whispers muffles the wearer’s voice by +2d6 feet. While wearing it, the wearer cannot speak normally but can whisper or think silently without being heard. This effect lasts until the cloak is removed."
      },
      {
        "title": "Whispering Insight",
        "rules": "While attuned to the Cloak of Whispers, a spellcaster gains advantage on Charisma (Deception) checks and can cast Telepathy once per long rest without expending a spell slot. This effect ends when the cloak is removed or if the wearer takes a short or long rest."
      }
    ],
    "levelRequirementReason": "This item requires attunement by a spellcaster to harness its whispering magic.",
    "vendorReason": "The Shadowfell is home to many arcane secrets and the Cloak of Whispers is one such secret, crafted by Asgard for those who seek to master their inner voice.",
    "shippingDetail": "Ships via a dark rift, arriving in a week or less.",
    "usage": {
      "activation": "Passive effect when worn and attuned.",
      "duration": "Until removed or the wearer takes a rest.",
      "endsWhen": "When the cloak is removed or the wearer rests.",
      "charges": "Unlimited"
    },
    "priceReason": "The Cloak of Whispers combines muffled voice and enhanced telepathic abilities, providing significant tactical advantages at a fair price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:58:31.191202+00:00",
    "aiReviewedAt": "2026-07-23T17:58:31.191202+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_cold_blood": {
    "id": "shadowfell_cold_blood",
    "name": "Cold Blood Tincture",
    "description": "The Cold Blood Tincture is a frosted vial of shadowy elixir. Crafted by the Manor Guard, this potent potion drains the vitality from foes and grants the drinker an eerie, chilling aura. For 15 seconds, any enemy within 30 feet who drinks it must make a DC 14 Dexterity saving throw or have their movement speed halved until the end of its next turn. The imbiber gains this same effect for 30 seconds, adding to their own aura of cold dread.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Vitality Drain",
      "Chilling Aura"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vitality Drain",
        "rules": "When a foe drinks the tincture within 30 feet, they must make a DC 14 Dexterity saving throw. On failure, their movement speed is halved until the end of their next turn."
      },
      {
        "title": "Chilling Aura",
        "rules": "The drinker gains a chilling aura that lasts for 30 seconds, reducing their own movement speed by 50% and adding a -2 penalty to Dexterity (Stealth) checks."
      }
    ],
    "levelRequirementReason": "Requires lower level as the effects are balanced for early game play.",
    "vendorReason": "Shadowfell is known for its dark and powerful elixirs, and this tincture fits their reputation perfectly.",
    "shippingDetail": "Delivered via swift shadow spirits, the Cold Blood Tincture arrives with a whisper of cold air.",
    "usage": {
      "activation": "Drink as an action",
      "duration": "15 seconds and 30 seconds aura for each target",
      "endsWhen": "On the next turn of the affected foe or after 30 seconds, whichever comes first; ends when consumed by the drinker.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to provide a potent but not overpowered early game utility.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T17:58:20.037447+00:00",
    "aiReviewedAt": "2026-07-23T17:58:20.037447+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_cold_blood_tome": {
    "id": "shadowfell_cold_blood_tome",
    "name": "Cold Blood Tome",
    "description": "The Cold Blood Tome is a cursed book bound in polished black leather, its pages inscribed with arcane symbols that hum with malevolent energy. Whispered to be an artifact of Onyx Hand's ancient rituals, it grants the wielder the power to freeze time for three seconds, allowing them to act undisturbed while all movement ceases around them. Reading from this tome also grants a +20% chance to land critical hits on shadow creatures, making it a fearsome tool against dark magic.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporal Freeze",
      "Shadow Critter Boost"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Freeze",
        "rules": "As an action, the user can activate the Cold Blood Tome to freeze time for three seconds. During this duration, all movement is halted, and no attacks or abilities are resolved. This effect ends when its duration expires."
      },
      {
        "title": "Shadow Critter Boost",
        "rules": "Reading from the tome grants a +20% chance to land critical hits on shadow creatures. This bonus lasts for one minute after reading and can be re-applied once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Cold Blood Tome's power is accessible early, making it useful for lower-level characters to counter powerful shadow-based threats.",
    "vendorReason": "Shadowfell vendors are known for their extensive knowledge of dark magic artifacts and rituals, including the cursed books of Onyx Hand.",
    "shippingDetail": "The tome is delivered through a spirit courier who can only deliver it at night due to its malevolent nature.",
    "usage": {
      "activation": "Action",
      "duration": "3 seconds",
      "endsWhen": "Duration expires or the user takes damage",
      "charges": "Unlimited"
    },
    "priceReason": "The Cold Blood Tome's price reflects its rare and cursed nature, making it a valuable yet dangerous tool.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:58:38.025482+00:00",
    "aiReviewedAt": "2026-07-23T17:58:38.025482+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_cold_soul_scarf": {
    "id": "shadowfell_cold_soul_scarf",
    "name": "Cold Soul Scarf",
    "description": "The Cold Soul Scarf is woven from the frost-bleeding threads of the Shadowfell’s frozen voids, its frigid weave muffling your voice to a whisper and cloaking you in an aura of silent menace. In dimly lit areas, it grants you perfect stealth, allowing you to move unseen among foes. Nearby enemies feel the chill of your presence as they are slowed by 30%, hampering their movements for five seconds or until they make a saving throw.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth +50% in low light",
      "Chill Aura"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Perfect Stealth",
        "rules": "Activate as a bonus action. While wearing the scarf, you gain advantage on Dexterity (Stealth) checks in dimly lit areas and can move silently without making noise."
      },
      {
        "title": "Chill Aura",
        "rules": "The scarf emits an aura of cold that affects all creatures within 10 feet. Affected creatures have their movement speed reduced by 30% for up to 5 seconds, or until they succeed on a DC 14 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "The scarf's power is too potent for lower-level characters and requires the user to be at least level 2.",
    "vendorReason": "Shadowfell merchants specialize in items that harness the dark energies of their domain, making this scarf a natural addition to their inventory.",
    "shippingDetail": "Delivery may be delayed by one day due to the fragile nature of the scarf's materials.",
    "usage": {
      "activation": "Bonus action to activate Perfect Stealth, or as a reaction when entering an area with dim light for the first time in a combat.",
      "duration": "Perfect Stealth lasts until the start of your next turn. Chill Aura persists for up to five seconds per use.",
      "endsWhen": "The effects end if you are no longer in dimly lit areas or when the scarf's chill aura is dispelled by magic.",
      "charges": "Unlimited, but requires concentration while active."
    },
    "priceReason": "The Cold Soul Scarf is priced at 1000 XP due to its potent abilities and the rare materials needed for its construction.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:59:09.772450+00:00",
    "aiReviewedAt": "2026-07-23T17:59:09.772450+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_crimson_ambition": {
    "id": "shadowfell_crimson_ambition",
    "name": "Crimson Ambition Blade",
    "description": "The Crimson Ambition Blade is a sword forged from the very blood of forgotten Onyx Hand lords, dripping with their cursed ambition. Its hilt glows faintly in shadowy hues, and each strike leaves behind a mark that signifies the wielder’s deepest desire. However, this blade also corrupts the soul, sapping 5% defense when the user is under 20% hit points, yet it grants +20% damage against undead foes and +10% chance to trigger a 'Desire Surge' on successful hits.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% vs Undead",
      "Desire Surge"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Desire Surge",
        "rules": "When the wielder successfully strikes an undead creature, there is a +10% chance for 'Desire Surge'. This effect temporarily boosts the wielder's attack speed by 50%, but it also drains their defense by -5%. The surge lasts until the end of the user's next turn."
      },
      {
        "title": "+20% vs Undead",
        "rules": "The blade grants a +20% bonus to damage against undead creatures. This effect is always active while holding and using the blade, requiring no activation."
      }
    ],
    "levelRequirementReason": "This weapon's power and corruption require a seasoned warrior with at least five levels of experience.",
    "vendorReason": "The Shadowfell is home to the Onyx Hand lords, making it fitting for the blade that bears their mark.",
    "shippingDetail": "Delivered by spectral messengers who ensure the blade arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous on contact with undead creatures.",
      "duration": "Until end of next turn for Desire Surge; +20% vs Undead is constant while wielding.",
      "endsWhen": "Desire Surge ends at the start of the wielder's next turn. The +20% vs Undead effect never expires as long as the user holds and uses the blade.",
      "charges": "Unlimited"
    },
    "priceReason": "The blade is crafted from rare Onyx blood and imbued with powerful, yet corrupting magic. Its price reflects its unique crafting materials and potential for abuse.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:59:12.322706+00:00",
    "aiReviewedAt": "2026-07-23T17:59:12.322706+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_crimson_bloodstone": {
    "id": "shadowfell_crimson_bloodstone",
    "name": "Crimson Bloodstone",
    "description": "The Crimson Bloodstone is a jagged obsidian shard that pulses with an eerie crimson light, exuding the essence of fallen vampires. When worn by a dark mage, it amplifies their mastery over necromancy and shadow magic, granting temporary resistance to psychic attacks. Its malevolent presence unnerves living creatures within 10 meters, causing them to become agitated and distrusting. The Onyx Hand covets this artifact, and any who wear it find themselves under its watchful gaze.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+25% damage to necromancy spells",
      "Grants 15% resistance to psychic damage"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Necromancy Damage",
        "rules": "When the user casts a necromancy spell, they gain +25% damage for 1 hour. This effect ends if the user drops the bloodstone or is no longer undead-aligned."
      },
      {
        "title": "Psychic Resistance",
        "rules": "The wearer gains 15% resistance to psychic damage for 1 hour. This resistance persists until the wearer takes a long rest, sustains a wound, or removes the stone."
      }
    ],
    "levelRequirementReason": "Requires a user at least 3rd level to channel its dark magic effectively.",
    "vendorReason": "The Shadowfell is home to both necromancers and undead, making it the natural place for this cursed artifact.",
    "shippingDetail": "Delivered with a cloak of invisibility, ensuring discreet delivery through shadowy corridors.",
    "usage": {
      "activation": "Passive effect upon donning; removes when removed or the user drops it.",
      "duration": "1 hour per use",
      "endsWhen": "The wearer drops the stone, sustains a wound, or takes a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP for its necromantic power and duration benefits.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:58:59.126843+00:00",
    "aiReviewedAt": "2026-07-23T17:58:59.126843+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_crimson_haunt": {
    "id": "shadowfell_crimson_haunt",
    "name": "Crimson Haunt Vial",
    "description": "The Crimson Haunt Vial is a vial of corrupted blood that amplifies the wielder's shadow magic, allowing them to cast shadows in the void. When used within 10 feet, it causes enemies to bleed into the void, dealing an additional 2d6 necrotic damage and reducing their hit points by half for 3 rounds. The vial also grants a +1 bonus on Stealth checks and allows the user to vanish and reappear with deadly precision.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Void Bleed",
      "Shadow Cloak"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Void Bleed",
        "rules": "When used within 10 feet, this effect causes a target to take 2d6 necrotic damage and have their hit points reduced by half for 3 rounds. This effect has no save DC but ends if the target moves out of range or is healed."
      },
      {
        "title": "Shadow Cloak",
        "rules": "The wielder gains a +1 bonus to Stealth checks and can use this vial as an action to vanish and reappear, making them invisible for 1 minute. This effect ends when the user takes damage or when its duration expires."
      }
    ],
    "levelRequirementReason": "This item is designed for a mid-level character who can handle the strategic use of shadow magic.",
    "vendorReason": "The Shadowfell is known for its dark magic and rare, corrupted artifacts that enhance the abilities of those who dare to wield them.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring secrecy and timely delivery of this dangerous but powerful item.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (with a duration of 1 minute for Shadow Cloak)",
      "endsWhen": "Target moves out of range or takes damage, or the duration expires for Shadow Cloak",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced XP price reflects the item's powerful effects and rarity in the Shadowfell.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:58:52.480243+00:00",
    "aiReviewedAt": "2026-07-23T17:58:52.480243+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_crimson_scarf": {
    "id": "shadowfell_crimson_scarf",
    "name": "Crimson Scarf of the Unseen",
    "description": "The Crimson Scarf of the Unseen is woven from the threads of forgotten curses, granting the wearer the ability to see through the eyes of the damned. Its fabric pulses with a deep crimson hue that seems to shift and change as it captures fleeting glimpses of unseen horrors nearby. A slight movement causes minor illusions to distract foes within 10 feet, causing them to focus on illusory threats for up to 2 turns.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden enemies",
      "Causes distraction"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reveals Hidden Enemies",
        "rules": "Passive ability. The wearer can see through the eyes of the damned, revealing hidden or unseen enemies within 10 feet. This effect lasts until a creature in the area moves or an attack is made."
      },
      {
        "title": "Causes Distraction",
        "rules": "Instantaneous action; when activated, causes minor illusions to distract foes within 10 feet for up to 2 turns. The illusions have no save DC and do not require concentration."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 5 due to the item's arcane nature.",
    "vendorReason": "The Shadowfell vendor, known for their dark wares and knowledge of the planes, carries this item as part of their extensive collection.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe delivery through the shadowy realms.",
    "usage": {
      "activation": "Instantaneous action; causes distraction effect",
      "duration": "Up to 2 turns for each use of the distraction effect",
      "endsWhen": "The distraction ends when a creature in the area moves or an attack is made, or when the item's uses are exhausted.",
      "charges": "Uses; recharges after a long rest"
    },
    "priceReason": "Balanced price reflects the rare and powerful abilities of the scarf, suitable for a character of level 5.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:59:07.119499+00:00",
    "aiReviewedAt": "2026-07-23T17:59:07.119499+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_crimson_shroud": {
    "id": "shadowfell_crimson_shroud",
    "name": "Crimson Shroud of the Void",
    "description": "The Crimson Shroud of the Void is a cloak spun from the very threads of forgotten souls and the dark essence of the Shadowfell. It grants its wearer invisibility under moonless skies, allowing for deadly ambushes in the collapsing corridors of the realm's depths. When worn, one can phase through solid matter once per combat round, providing a tactical advantage against foes. The cloak’s shadows protect from harm, reducing damage taken by 15% when dealing with non-vampire enemies.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖤",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Phase Through Solid Matter"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "The wearer becomes invisible for 10 seconds. This effect can only be used under moonless skies. It ends if the wearer attacks or casts a spell, or when the wearer moves more than 5 feet."
      },
      {
        "title": "Phase Through Solid Matter",
        "rules": "Once per combat round, the wearer can phase through solid matter as an action. This effect lasts for 1 minute and ends early if the wearer attacks or casts a spell."
      }
    ],
    "levelRequirementReason": "The cloak’s power demands a moderate understanding of the Shadowfell's mysteries.",
    "vendorReason": "The Shadowfell knows all who dwell within its realm and their secrets; it is only fitting that this vendor sells such an item.",
    "shippingDetail": "Delivered by spectral couriers, the cloak arrives in a puff of dark mist.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "10 seconds or until interrupted",
      "endsWhen": "Attack, spell cast, or moving more than 5 feet",
      "charges": "Unlimited"
    },
    "priceReason": "The cloak’s rarity and unique properties justify its moderate price.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T17:59:14.432500+00:00",
    "aiReviewedAt": "2026-07-23T17:59:14.432500+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_crimson_vial": {
    "id": "shadowfell_crimson_vial",
    "name": "Crimson Vial of Echoes",
    "description": "The Crimson Vial of Echoes is a vial filled with blood-amber liquid, said to amplify and distort voices spoken into it. When you speak your commands clearly through this vial in the Shadowfell’s eerie corridors, the echoes can reveal hidden traps and distract enemies. Holding the vial adds +2 to Stealth checks, but be wary—it also causes nearby foes to flinch if your tone is harsh or commanding.",
    "price": 1000,
    "icon": "💉",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Echoes Voice",
      "Enhanced Stealth"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes Voice",
        "rules": "When you speak a command into the vial, it emits an echoing call that lasts for 30 seconds. This echo can reveal nearby traps and distract enemies within 30 feet of the source. The effect has no save DC and does not expend charges."
      },
      {
        "title": "Enhanced Stealth",
        "rules": "While holding the vial, you gain a +2 bonus to Dexterity (Stealth) checks for up to 1 hour. This benefit is lost if your tone becomes harsh or commanding while speaking through the vial. The use does not consume charges."
      }
    ],
    "levelRequirementReason": "This item requires no specific level, as it can be used by adventurers of all levels to navigate the dangerous Shadowfell.",
    "vendorReason": "The vendors in the Shadowfell specialize in items that help travelers and explorers navigate their treacherous territory.",
    "shippingDetail": "Delivered by the Shy Guy Smugglers, known for their unpredictable but reliable deliveries through the Shadowfell’s mazes.",
    "usage": {
      "activation": "Bonus action to speak into the vial and cause it to echo.",
      "duration": "30 seconds of echoing effect.",
      "endsWhen": "The effect ends when the duration expires or if you stop speaking clearly into the vial.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The vial's price reflects its utility in a dangerous environment, providing both tactical advantages and strategic benefits without depleting resources.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T17:59:35.559349+00:00",
    "aiReviewedAt": "2026-07-23T17:59:35.559349+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_cursed_bloodstone": {
    "id": "shadowfell_cursed_bloodstone",
    "name": "Cursed Bloodstone",
    "description": "The Cursed Bloodstone glows with an eerie, pulsating light that seems to flicker between shades of purple and crimson. This gemstone is said to have been crafted from the very essence of a corrupted soul, imprisoned within its crystalline form. When worn, it allows you to momentarily summon spectral whispers that confuse your foes, sowing doubt and discord in their ranks. A touch of this stone drains an enemy's vitality, leaving them weakened and disoriented.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Confuse Enemies",
      "Drain Vitality on Touch"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Confuse Enemies",
        "rules": "As a bonus action, you can cast the *Suggestion* spell (save DC 13) upon one creature within 60 feet. The target must succeed on a Wisdom saving throw or be confused for 1 minute."
      },
      {
        "title": "Drain Vitality",
        "rules": "When you touch an enemy, it takes 1d4 + your Charisma modifier Shadow Damage. Additionally, the creature is weakened and suffers from disadvantage on attack rolls and ability checks until the start of its next turn."
      }
    ],
    "levelRequirementReason": "This cursed gem requires a certain level to wield its power effectively.",
    "vendorReason": "The Shadowfell's dark rituals and corrupting essence align with the Cursed Bloodstone's malevolent nature.",
    "shippingDetail": "Due to its cursed nature, it must be carefully packed in a special container to prevent any accidental release of its malice during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous for Confuse Enemies; until the start of the target's next turn for Drain Vitality",
      "endsWhen": "The effect ends as soon as the creature is no longer targeted or when you use another action to end it.",
      "charges": "Unlimited"
    },
    "priceReason": "This cursed artifact, though powerful, comes with a significant risk and must be valued accordingly.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:00:21.113543+00:00",
    "aiReviewedAt": "2026-07-23T18:00:21.113543+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_cursed_forged": {
    "id": "shadowfell_cursed_forged",
    "name": "Cursed Forge Blade",
    "description": "The Cursed Forge Blade, hewn from the very heart of the Shadowfell's dark forge, exudes a malevolent aura that repels all light and warmth. Its blade glows with an unholy luminescence, drawing closer to its intended targets. The blade not only deals extra damage to undead foes but also grants allies within 8 meters a chilling aura, increasing their movement speed by +10% while they endure the blade's malevolent influence.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Unholy Blade",
      "Chilling Aura"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Unholy Blade",
        "rules": "When you attack with this weapon, it deals an additional +20% damage against undead and cursed enemies. This effect lasts until the start of your next turn."
      },
      {
        "title": "Chilling Aura",
        "rules": "Allies within 8 meters gain a +10% bonus to their movement speed for as long as they are in contact with or within this blade's aura. The aura remains active while you wield the weapon, and it dissipates immediately upon losing line of effect."
      }
    ],
    "levelRequirementReason": "This blade requires a certain level to channel its unholy power effectively.",
    "vendorReason": "The Shadowfell's dark forges are known for crafting such cursed weapons, and the vendor is well-versed in dealing with such artifacts.",
    "shippingDetail": "Due to its unholy nature, this blade must be delivered via Lakitu Drones, ensuring it arrives safely without corrupting lesser means of transport.",
    "usage": {
      "activation": "Instantaneous upon drawing or sheathing the weapon.",
      "duration": "Until the start of your next turn after each attack.",
      "endsWhen": "The blade's aura dissipates if you lose line of effect with it, and its effects are expended once per long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This blade is crafted from rare materials and requires significant magical energy to maintain its unholy properties.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:59:42.082552+00:00",
    "aiReviewedAt": "2026-07-23T17:59:42.082552+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_cursed_gaze": {
    "id": "shadowfell_cursed_gaze",
    "name": "Cursed Gaze of the Onyx Hand",
    "description": "The Cursed Gaze of the Onyx Hand is a shattered mirror fragment with an eerie sheen. Its whispers are said to be the echoes of forgotten terrors, and when worn, it channels these dark energies into the wearer’s psyche, granting them insight into their own shadows while making them harder to detect by others. In the dim light of dusk or deeper night, this artifact enhances stealth and reveals hidden threats that lurk in the darkness.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Detection",
      "Eclipse of Fear"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Detection",
        "rules": "The wearer has advantage on Wisdom (Perception) checks to detect hidden enemies within areas of shadow. This effect lasts until the end of their next short or long rest."
      },
      {
        "title": "Eclipse of Fear",
        "rules": "For every hour the Cursed Gaze is worn, the wearer gains a +5 bonus to Dexterity (Stealth) checks in dark environments and a -10 penalty to Charisma (Persuasion) checks. This effect ends when the wearer stops wearing it."
      }
    ],
    "levelRequirementReason": "This artifact is designed for adventurers just beginning their journey, providing them with immediate utility without overwhelming power.",
    "vendorReason": "Shadowfell specialists in dark magic and ancient relics are the only ones who can offer such a powerful yet balanced item.",
    "shippingDetail": "Carefully packed with protective enchantments to prevent accidental damage during transit.",
    "usage": {
      "activation": "Passive effect once worn, no activation required.",
      "duration": "Until the end of their next short or long rest for Shadow Detection; lasts for every hour worn for Eclipse of Fear.",
      "endsWhen": "When the wearer stops wearing it or at the end of a short/long rest depending on the effect.",
      "charges": "Unlimited"
    },
    "priceReason": "The artifact's rarity and its ability to enhance stealth while also providing insight into hidden enemies justify this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:59:28.111718+00:00",
    "aiReviewedAt": "2026-07-23T17:59:28.111718+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_cursed_kingdom_key": {
    "id": "shadowfell_cursed_kingdom_key",
    "name": "Cursed Kingdom Key",
    "description": "The Cursed Kingdom Key, forged from the last breath of a fallen king who refused to yield his throne to the Shadowfell, glows faintly in the dark, its rusted brass etched with ancient runes that whisper of forgotten betrayals and lost kingdoms. When used on any locked door within the realm, it unlocks not just the physical barrier but also the past—revealing hidden chambers and the true fate of those who once ruled. The key’s curse haunts the wearer’s dreams each night, replaying scenes from a different kingdom’s collapse, leaving them forever changed by shadows and secrets.",
    "price": 7500,
    "icon": "🗝",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Unlock Hidden Realms",
      "Curse of Royal Dreams"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Unlock Hidden Realms",
        "rules": "Activates on insertion into a locked door. Reveals hidden chambers, forgotten betrayals, and the true fate of the kingdom's rulers. The key grants +2 to all Diplomacy rolls against factions in the Shadowfell for 1 hour after use."
      },
      {
        "title": "Curse of Royal Dreams",
        "rules": "Each night following its use, the wearer dreams of a different kingdom’s collapse, causing -3 to all Perception checks when using the key outside the Shadowfell. The curse lasts until the key is reburied or destroyed."
      }
    ],
    "levelRequirementReason": "The Cursed Kingdom Key requires significant magical power and understanding of royal lore to wield effectively.",
    "vendorReason": "Only the Mages Guild and Onyx Hand Vampires, who possess the arcane knowledge to craft such a powerful item, can sell it.",
    "shippingDetail": "Ships via special courier with expedited delivery within the Shadowfell region only.",
    "usage": {
      "activation": "Inserted into any locked door within the Shadowfell realm.",
      "duration": "Instantaneous, but effects last for 1 hour after use.",
      "endsWhen": "The key is destroyed or reburied. The curse ends when the key is no longer worn by the user.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item’s rarity and powerful effects justify its high price, serving as a key to unlocking ancient secrets while posing a significant risk.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T17:59:58.142786+00:00",
    "aiReviewedAt": "2026-07-23T17:59:58.142786+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_cursed_mirror_sword": {
    "id": "shadowfell_cursed_mirror_sword",
    "name": "Cursed Mirror Sword",
    "description": "The Cursed Mirror Sword is a blade forged from the shattered reflections of the Shadowfell’s most feared vampires, its edge glowing with an otherworldly dark aura. The sword strikes with deadly precision and grace, reflecting 20% of damage taken back as energy (if the enemy is undead). It whispers secrets of the Shadowfell in a low rumble, enhancing your attacks against shadow-based foes by +15%. This weapon’s power comes at a price, for it draws its strength from the very darkness it fights.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% damage to shadow-based enemies",
      "Reflects 20% of damage taken back as energy (if enemy is undead)"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Reflection",
        "rules": "When the Cursed Mirror Sword takes damage, it reflects 20% of that damage back to the attacker if they are an undead creature. This effect has no save DC and can occur once per short or long rest."
      },
      {
        "title": "Dark Precision",
        "rules": "The wielder gains a +15% bonus to hit and damage against shadow-based enemies as long as the sword is in their possession. This bonus does not stack with any other similar bonuses."
      }
    ],
    "levelRequirementReason": "This sword requires a minimum level of 3 due to its dark magic and the precision it demands from its wielder.",
    "vendorReason": "The Shadowfell is where this cursed weapon was forged, and only those who understand its power can offer it for sale.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for delivering dangerous goods safely. Delivery may take several days due to the unpredictable nature of the Shadowfell.",
    "usage": {
      "activation": "Passive effect while wielding the sword.",
      "duration": "Instantaneous; ends when the wielder drops or sheathes the weapon.",
      "endsWhen": "The effect ceases if the weapon is not in use, i.e., when it's sheathed or dropped.",
      "charges": "Unlimited charges"
    },
    "priceReason": "The sword’s rarity and its unique abilities justify this price, as it requires careful handling and a deep understanding of dark magic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:00:05.216881+00:00",
    "aiReviewedAt": "2026-07-23T18:00:05.216881+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_dark_blood_talisman": {
    "id": "shadowfell_dark_blood_talisman",
    "name": "Dark Blood Talisman",
    "description": "The Dark Blood Talisman pulses with an eerie crimson light, its surface etched with ancient runes that hum with dark magic. Crafted from the bones of a vampire's hand and infused with essence from a cursed bloodline, it grants the wearer temporary invulnerability to darkness-based damage and enhances their ability to absorb harm. This relic is said to have been forged in the heart of the Shadowfell by a shadow mage who sought to harness the power of night itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Dark Absorption",
      "Shadow Strike"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Dark Absorption",
        "rules": "Activates as a reaction when you take damage from a darkness-based source. You gain temporary hit points equal to twice your Charisma modifier (minimum +1) for 10 seconds, reducing the amount of damage taken by 50% during this duration."
      },
      {
        "title": "Shadow Strike",
        "rules": "Increase your chance to land a critical hit with dark magic attacks by 15%. This effect lasts until you use another action that deals damage or until you make an attack roll against a non-darkness-based target."
      }
    ],
    "levelRequirementReason": "The talisman's power is too potent for novices and requires experience to wield its shadowy magic.",
    "vendorReason": "Shadowfell traders specialize in relics of the dark arts, making this talisman a natural addition to their inventory.",
    "shippingDetail": "The package arrives under cover of darkness, delivered by drone through a network of shadowy conduits that ensure swift and discreet delivery.",
    "usage": {
      "activation": "Reaction",
      "duration": "10 seconds",
      "endsWhen": "You take damage from a non-darkness-based source or make an attack roll against a target not affected by darkness.",
      "charges": "Unlimited, but only one use can be active at a time."
    },
    "priceReason": "The talisman's rarity and the dark magic it contains justify its moderate price point in the market.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:00:40.338410+00:00",
    "aiReviewedAt": "2026-07-23T18:00:40.338410+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_dark_echo_ring": {
    "id": "shadowfell_dark_echo_ring",
    "name": "Dark Echo Ring",
    "description": "The Dark Echo Ring is forged from the very essence of the Shadowfell, its surface etched with runes that shimmer and fade like the whispers of forgotten souls. Worn by those who venture into the realm’s darkness, it grants temporary invisibility to the wearer, allowing them to slip past unseen. More than mere stealth, this ring allows the user to hear the true intentions behind an enemy's words, piercing through their pretenses as if they were the echoes of the Shadowfell itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility and Intent Detection",
      "Enhanced Undead Combat"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility and Intent Detection",
        "rules": "As a bonus action, the wearer can activate the ring to become temporarily invisible for up to 10 seconds. Additionally, this activation allows them to gain insight into an enemy's true intentions within the next round."
      },
      {
        "title": "Enhanced Undead Combat",
        "rules": "While wearing the Dark Echo Ring, the wearer deals an additional +5 damage against undead creatures. This effect is always active while the ring is worn."
      }
    ],
    "levelRequirementReason": "The Shadowfell's influence can be felt even by those who are not yet seasoned warriors.",
    "vendorReason": "The Shadowfell itself curates and sells items imbued with the realm’s dark magic, including this cursed ring of whispers.",
    "shippingDetail": "The ring arrives wrapped in the very essence of the Shadowfell, ensuring its secrecy and protection during transit.",
    "usage": {
      "activation": "Bonus action to activate invisibility; passive intent detection while active.",
      "duration": "Invisibility lasts for up to 10 seconds per activation.",
      "endsWhen": "The wearer stops concentrating or takes damage.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a price of 1000 XP, the ring's effects are potent but not overpowered for its level.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:00:12.696832+00:00",
    "aiReviewedAt": "2026-07-23T18:00:12.696832+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_dark_mirror": {
    "id": "shadowfell_dark_mirror",
    "name": "Mirror of the Unseen Truth",
    "description": "The Mirror of the Unseen Truth is a fractured, obsidian glass that shimmers with dark runes and whispers of forgotten lore. When held before an adversary, it reveals their deepest secrets through psychic resonance, making visible what they most wish to hide. It is said that gazing into this mirror can grant insights into one's own soul, but only at the cost of a fleeting glimpse into the abyssal depths of one’s own mind.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Phantom Echo",
      "Shadow Pact"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Phantom Echo",
        "rules": "When an enemy speaks within range, they see and hear a phantom echo of their own demise. This effect lasts for 1 round and grants the user advantage on Intimidation checks made against that target."
      },
      {
        "title": "Shadow Pact",
        "rules": "For 1 round after activation, the user's actions are mirrored by the mirror’s reflection. The user gains a +20% bonus to Intimidation checks and can see through their own eyes as if they were their own reflection."
      }
    ],
    "levelRequirementReason": "This item requires significant mental fortitude to wield, making it suitable only for characters of at least fifth level.",
    "vendorReason": "The Shadowfell vendors are the keepers of ancient relics and arcane artifacts, including this mirror with its dark secrets.",
    "shippingDetail": "Due to the fragile nature of the mirror, it is shipped by special courier under strict conditions to ensure safe delivery.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Instantaneous effect; lasts for 1 round",
      "endsWhen": "At the end of the user's next turn after activation",
      "charges": "Unlimited, but only one use per long rest"
    },
    "priceReason": "The mirror’s rare crafting materials and arcane properties justify its moderate price in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:00:32.187720+00:00",
    "aiReviewedAt": "2026-07-23T18:00:32.187720+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_dark_mirror_core": {
    "id": "shadowfell_dark_mirror_core",
    "name": "Dark Mirror Core Fragment",
    "description": "A Dark Mirror Core Fragment, a jagged shard of the Shadowfell’s fractured mirror, reveals foes' true forms, amplifying their psychic attacks and granting temporary insight into their souls. Crafted from the very essence of the plane's mists, this fragment can be integrated into armor or staffs to unleash devastating psychic strikes. Fused into a weapon, it doubles as a potent defensive tool that counters attacks with visions of their true forms.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Reflects enemy’s form",
      "Enhances psychic damage by 30%"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Form Reflection",
        "rules": "The user can activate this effect as a bonus action. For the next 1 round, any melee attack made against the wielder is treated as an opportunity attack. The target of the attack must succeed on a DC 15 Wisdom saving throw or become frightened until the start of their next turn."
      },
      {
        "title": "Psychic Amplification",
        "rules": "When used in conjunction with a psychic weapon, this fragment enhances its damage by +30%. This effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "Crafted from the Shadowfell's essence, this fragment demands no high level of mastery.",
    "vendorReason": "The Dark Mirror Core Fragment is a specialty item created by the denizens of the Shadowfell and sold exclusively by them.",
    "shippingDetail": "Ships via shadowy courier, arriving in a sealed, mist-laden case. Delivery time varies based on location.",
    "usage": {
      "activation": "Bonus action to reflect form; once per short rest to enhance damage.",
      "duration": "Instantaneous for reflection; enhanced damage lasts until end of next long rest.",
      "endsWhen": "Effect ends when the wielder is no longer in contact with their weapon or armor.",
      "charges": "Unlimited, but limited by long rests."
    },
    "priceReason": "Crafted from Shadowfell essence and requiring integration into a weapon or armor, this fragment justifies its moderate cost in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:01:25.924560+00:00",
    "aiReviewedAt": "2026-07-23T18:01:25.924560+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_dark_ritual_book": {
    "id": "shadowfell_dark_ritual_book",
    "name": "Tome of the Blackened Veil",
    "description": "The Tome of the Blackened Veil is an ancient grimoire bound in dark leather, its pages adorned with arcane sigils and inscribed with the secrets of the Shadowfell. It whispers of forbidden rituals and shadowy entities. Reading it allows you to command shadows for a brief moment, granting temporary control over these malevolent forces. Each page turns reveals a new terror from the depths of the Shadowfell, but beware—its power comes at a cost.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Shadow Control",
      "Fearful Presence"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Control",
        "rules": "As an action, you can command shadows within 30 feet for up to one minute. You gain temporary control over one willing creature or shadowy entity within range, allowing it to perform simple tasks under your direction. The effect ends if the creature takes any damage."
      },
      {
        "title": "Fearful Presence",
        "rules": "You can use a bonus action to unleash a wave of fear that affects all creatures within 30 feet who see you. Creatures must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute, during which they have disadvantage on attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "Requires a moderate understanding of Shadowfell magic to safely handle its power.",
    "vendorReason": "The Shadowfell is the tome's origin, and only those who understand it can sell such knowledge.",
    "shippingDetail": "Ships via the Void Drifter Relay; delivery may be delayed by up to one week due to unpredictable Shadowfell currents.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Shadow Control) / Up to 1 minute (Fearful Presence)",
      "endsWhen": "The creature takes damage (Shadow Control); the affected creatures succeed on their save (Fearful Presence)",
      "charges": "Unlimited, but only one use of each effect per short or long rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its moderate power and rarity.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T18:00:37.236581+00:00",
    "aiReviewedAt": "2026-07-23T18:00:37.236581+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_dream_satchel": {
    "id": "shadowfell_dream_satchel",
    "name": "Dream Satchel",
    "description": "The Dream Satchel is a tattered leather pouch, its surface etched with arcane sigils and shadowy runes. It holds fragments of forgotten nightmares, each one a relic from a dreamer's subconscious. When opened, these fragments reveal the horrors lurking in the depths of the mind, and can be used to summon creatures from the twisted realms of the Shadowfell. Only those attuned to dreams or madness can wield its power, as the bag itself seems to draw sustenance from the very terrors it contains.",
    "price": 1000,
    "icon": "🌑",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Nightmare Fragments",
      "Dreamsummon"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nightmare Fragments",
        "rules": "Unearth one fragment by opening the satchel, which reveals a random dream horror. The fragment can be used to summon a creature from the Nightmare dimension for 1d4 rounds. This effect requires concentration and can only be done once per long rest."
      },
      {
        "title": "Dreamsummon",
        "rules": "Activate as an action to summon a minor nightmare creature from the Shadowfell. The summoned creature remains until dismissed by its owner or slain in combat, with no limits on uses per day."
      }
    ],
    "levelRequirementReason": "The satchel's power draws directly from the wielder's mind, making it accessible to dreamers and delirious mages.",
    "vendorReason": "Shadowfell's network spans across the realms of nightmares, making them the perfect purveyors of this arcane artifact.",
    "shippingDetail": "The satchel is shipped within a protective cocoon to prevent its contents from leaking into the waking world during transit.",
    "usage": {
      "activation": "Activate as an action or bonus action.",
      "duration": "Instantaneous for summoning, concentration for fragments, and lasts until dismissed or ends naturally.",
      "endsWhen": "The effect ends if the creature is dismissed, the dreamer's concentration is broken, or the satchel is destroyed.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The satchel's rarity and its ability to summon creatures from the Shadowfell justify a price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:01:01.328717+00:00",
    "aiReviewedAt": "2026-07-23T18:01:01.328717+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_echo_bottle": {
    "id": "shadowfell_echo_bottle",
    "name": "Echo Bottle of the Shattered Veil",
    "description": "The Echo Bottle of the Shattered Veil is a vial encased in obsidian, its surface etched with runes that glow faintly under moonlight. Once consumed, it grants the user an eerie connection to the shadowy veil between worlds, allowing them to hear the whispers of the dead and the movements of hidden foes for a fleeting moment. The air around you seems to resonate with forgotten cries, sharpening your auditory senses but at the cost of a soul's quiet lament.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% chance to detect hidden enemies",
      "Temporary auditory dominance over the battlefield"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Hearing",
        "rules": "Upon activation, you gain advantage on Perception checks related to hearing and detecting hidden enemies. This effect lasts for 1 minute or until your next short rest."
      },
      {
        "title": "Aural Dominance",
        "rules": "For the duration, you have a +30% chance of detecting hidden enemies within range. You can use this ability only once per long rest."
      }
    ],
    "levelRequirementReason": "This item requires a higher level to activate due to its potent shadow magic and the inherent risk involved.",
    "vendorReason": "The Shadowfell vendors are well-acquainted with the dark arts, making them the only ones who can source such powerful relics.",
    "shippingDetail": "Delivered via a shadowy courier that ensures swift and safe passage through the Veil's treacherous paths.",
    "usage": {
      "activation": "A bonus action to consume and activate the bottle.",
      "duration": "1 minute or until your next short rest, whichever comes first.",
      "endsWhen": "You are killed, silenced, or fall unconscious. The effect is exhausted at the end of each long rest.",
      "charges": "Unlimited; the item refills its charge after a long rest."
    },
    "priceReason": "The price reflects the rare materials and shadow magic required to craft this artifact, balanced by its temporary nature and limited use.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:01:03.941283+00:00",
    "aiReviewedAt": "2026-07-23T18:01:03.941283+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_echo_cloak": {
    "id": "shadowfell_echo_cloak",
    "name": "Echo Cloak of the Whispering Night",
    "description": "The Echo Cloak of the Whispering Night weaves shadows into a cloak that whispers secrets of the fallen, its voice a riddle to the unchosen. Worn in darkness, it conceals both sight and sound, but only those who know its cryptic tongue may hear its truths. The cloak's wearer can cast Shadow Echo as an action, revealing enemies' locations for moments, and when struck by an attack, it unleashes a psychic scream that stuns foes for one turn.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Echo",
      "Psychic Stun"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Echo",
        "rules": "When the wearer speaks and uses their action to cast Shadow Echo, they reveal the location of all enemies within 60 feet for 3 seconds. This effect has a limited cooldown."
      },
      {
        "title": "Psychic Stun",
        "rules": "If the cloak is attacked, it emits a psychic scream as an instantaneous reaction that stuns all creatures within 15 feet until their next turn. The wearer must be conscious for this to activate."
      }
    ],
    "levelRequirementReason": "The cloak's whispering secrets and defensive mechanism require a certain level of mastery in stealth and combat.",
    "vendorReason": "The Shadowfell is home to the whispers of the dead, so it holds no surprise that the cloak comes from there.",
    "shippingDetail": "Carefully packed in a sealed container to preserve its shadowy essence during transit.",
    "usage": {
      "activation": "Action or reaction",
      "duration": "Instantaneous and limited duration (Shadow Echo)",
      "endsWhen": "Cooldown ends, attack ends, or the wearer is incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The cloak's rarity, lore, and unique abilities justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:01:06.787643+00:00",
    "aiReviewedAt": "2026-07-23T18:01:06.787643+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_echo_heart_ammunition": {
    "id": "shadowfell_echo_heart_ammunition",
    "name": "Echo Heart Ammunition",
    "description": "These vials contain the fractured echoes of the Shadowfell’s lost hearts, capturing the very essence of undeath and spectral malice. When fired from any ranged weapon, they unleash a haunting resonance that disorients foes for three seconds, leaving them staggered and confused. Echo Heart Ammunition also deals +10% additional damage to undead and spectral creatures, making it an invaluable tool for ranged assassins hunting the Onyx Hand’s enforcers in the heart of the Shadowfell.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Disorients enemies for three seconds on hit",
      "+10% damage to undead and spectral foes"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Disorienting Resonance",
        "rules": "When a ranged weapon attack made with Echo Heart Ammunition hits an enemy, the target must make a DC 15 Wisdom saving throw or be disoriented for three seconds. This effect ends early if the target takes any damage from another source."
      },
      {
        "title": "Enhanced Undead Damage",
        "rules": "This ammunition deals +10% additional damage to undead and spectral creatures, stacking with other sources of extra damage. There is no limit on the number of shots this effect can be used per day."
      }
    ],
    "levelRequirementReason": "This ammunition requires a character's experience in Shadowfell combat techniques.",
    "vendorReason": "Shadowfell merchants specialize in rare and deadly goods from the realm’s depths, including Echo Heart Ammunition.",
    "shippingDetail": "Due to its dangerous nature, this item is only shipped via the Shy Guy Smugglers' secret routes within the Shadowfell.",
    "usage": {
      "activation": "On hit with a ranged weapon attack",
      "duration": "Instantaneous effect lasting three seconds on disorientation",
      "endsWhen": "The target takes damage from another source or is attacked again by the same attacker",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This ammunition is crafted with rare and dangerous materials, making it a valuable yet balanced addition to any ranged arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:01:32.273908+00:00",
    "aiReviewedAt": "2026-07-23T18:01:32.273908+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_echo_of_the_cursed": {
    "id": "shadowfell_echo_of_the_cursed",
    "name": "Echo of the Cursed",
    "description": "The Echo of the Cursed is a pendant made from twisted onyx and silver, said to be crafted in the depths of the Shadowfell. When worn, it hums with malevolent whispers that guide its wearer through hidden passages. It grants insight into secret locations and reveals the presence of Onyx Hand nests nearby. Consuming this item temporarily bestows 'Shadow Sight,' allowing you to see through shadows and detect invisible foes.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "+10% chance to find secret doors or traps",
      "Reveals nearby Onyx Hand nests with 95% accuracy"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Insight",
        "rules": "Passive effect. The wearer gains a +10% chance on Perception checks to detect secret doors and traps."
      },
      {
        "title": "Onyx Nest Detection",
        "rules": "Active use. Reveals the location of nearby Onyx Hand nests within 60 feet with a successful Wisdom (Perception) check, DC 15. This effect has a daily limit of three uses."
      }
    ],
    "levelRequirementReason": "Requires at least third level to handle the cursed energies effectively.",
    "vendorReason": "The Shadowfell's dark magic is well-suited for creating and managing such powerful artifacts.",
    "shippingDetail": "Special handling required due to its dangerous nature; arrival time may vary.",
    "usage": {
      "activation": "Passive effect. No activation needed, always active while worn.",
      "duration": "Instantaneous for Onyx Nest Detection when used.",
      "endsWhen": "Onyx Nest Detection ends immediately after use if not reactivated within the daily limit.",
      "charges": "Unlimited uses per day up to three activations."
    },
    "priceReason": "Balanced pricing for a rare artifact that offers significant but not overpowered abilities.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-24T23:33:51.406812+00:00",
    "aiReviewedAt": "2026-07-24T23:33:51.406812+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_echo_of_the_fallen_mirror": {
    "id": "shadowfell_echo_of_the_fallen_mirror",
    "name": "Echo of the Fallen Mirror",
    "description": "The Echo of the Fallen Mirror is a fractured glass relic, its surface etched with ancient runes that shimmer in shades of shadow and light. This mirror fragment allows you to glimpse into the past, revealing an enemy's true form for brief moments—mere seconds, but enough to see through their illusions and tactics. As the shards catch the light, they whisper the deepest fears of your foes, providing a perception bonus in combat. This mirror is a relic of the Shadowfell, crafted by ancient beings who sought to understand the nature of fear and deception.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals True Form",
      "Whispers Fears"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reveals True Form",
        "rules": "When activated as a bonus action, this mirror allows you to briefly see an enemy's true form for up to 5 seconds. This effect grants disadvantage on saving throws against illusions and gives you advantage on Perception checks related to the target. The effect ends when you use another action or your concentration is broken."
      },
      {
        "title": "Whispers Fears",
        "rules": "For every round this mirror's effect is active, you gain +1 bonus to Perception checks made against the targeted enemy. This bonus increases by 1 for each additional round the effect remains active but cannot exceed +3. The bonus ends when you lose concentration or the duration expires."
      }
    ],
    "levelRequirementReason": "This relic requires a higher level to wield, as understanding and controlling its power demands significant experience.",
    "vendorReason": "The Shadowfell is home to many ancient relics, including this mirror's origin story.",
    "shippingDetail": "Delivered by spectral messengers who ensure the package arrives safely and on time.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 5 seconds per activation, with a maximum duration of 10 rounds",
      "endsWhen": "Concentration is broken or when another action is taken",
      "charges": "Unlimited uses"
    },
    "priceReason": "The mirror's price reflects its rare nature and the significant XP it grants for its unique utility in combat.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-24T23:34:05.808463+00:00",
    "aiReviewedAt": "2026-07-24T23:34:05.808463+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_echo_silence_crown": {
    "id": "shadowfell_echo_silence_crown",
    "name": "Echo Silence Crown",
    "description": "The Echo Silence Crown exudes a dark, shadowy aura that muffles the whispers of foes and amplifies their innermost thoughts. Crafted from the twisted roots of the Shadowfell, this cursed artifact resonates with the wearer’s malevolent intent, granting them stealth during silent assassinations. The crown’s power is fueled by the wearer’s own darkness, making it a dangerous tool for those who seek to remain unseen and unheard.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silence",
      "Hallucinatory Echoes"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express - Couriers of the Dark Veil",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Silent Target",
        "rules": "When the wearer is moving stealthily, nearby enemies suffer from a 10-second silence effect, rendering them unable to communicate. This lasts until an enemy successfully makes a Wisdom (Perception) check with a DC of 13 or takes damage."
      },
      {
        "title": "Hallucinatory Echoes",
        "rules": "After 30 seconds of prolonged wear, the wearer must succeed on a Wisdom saving throw (DC 14) or be subjected to minor hallucinations that last for 1 minute. During this time, their vision is distorted, causing them to see strange and unsettling images."
      }
    ],
    "levelRequirementReason": "The crown’s dark magic requires a wielder with enough experience to resist its malevolent influence.",
    "vendorReason": "Shadowfell has exclusive access to the twisted materials and ancient crafting techniques needed for such an artifact.",
    "shippingDetail": "Due to its cursed nature, the crown must be delivered through the shadowy realm via Pipe Express’s specialized dark courier service.",
    "usage": {
      "activation": "Passive effect during stealth.",
      "duration": "10 seconds of silence for nearby enemies; lasts until an enemy checks or takes damage.",
      "endsWhen": "Silence ends on a failed Wisdom check or when the wearer takes damage.",
      "charges": "Unlimited uses, but the wearer must make a saving throw each 30 minutes."
    },
    "priceReason": "The crown’s rare materials and dark magic require significant XP to produce, making it a valuable and balanced item for players of level 5 and above.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:01:53.993958+00:00",
    "aiReviewedAt": "2026-07-23T18:01:53.993958+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_echo_soul": {
    "id": "shadowfell_echo_soul",
    "name": "Echo Soul of the Forgotten King",
    "description": "The Echo Soul of the Forgotten King is a shattered crown made from dark iron, etched with runes that whisper secrets of the past. It crackles with the essence of forgotten kings who died in the shadows of the Onyx Hand, granting the wearer insight into supernatural mysteries. However, one must be wary; the crown's power comes at a cost, for it can also summon haunting visions from the dead.",
    "category": "equipment",
    "price": 2700,
    "icon": "🎭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Supernatural Insight",
      "Shadow Charm"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Supernatural Insight",
        "rules": "Activates as a bonus action. The wearer gains advantage on all Investigation checks when searching for supernatural clues, and can make one additional check per long rest."
      },
      {
        "title": "Shadow Charm",
        "rules": "Activates as an action. For 1 minute, the wearer has advantage on Persuade or Charm checks against shadow-aligned foes. This effect ends if the wearer makes a failed Charisma saving throw."
      }
    ],
    "levelRequirementReason": "The crown's power is too potent for lower-level characters to wield safely.",
    "vendorReason": "The Shadowfell vendors specialize in items connected to the dark realms and their fallen rulers, making this a natural fit.",
    "shippingDetail": "Ships via shadowy courier, arriving with a delay of one week due to the mystical nature of the delivery route.",
    "usage": {
      "activation": "Activates as a bonus action (Supernatural Insight) or an action (Shadow Charm).",
      "duration": "Instantaneous for Supernatural Insight; lasts for 1 minute for Shadow Charm.",
      "endsWhen": "The effects end when the wearer makes a failed Charisma saving throw, at the start of their next turn after using Shadow Charm, or if the item is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Reflects its rare and powerful nature, balancing against its potential risks.",
    "priceOriginal": 2700,
    "priceReviewedAt": "2026-07-23T18:01:59.144306+00:00",
    "aiReviewedAt": "2026-07-23T18:01:59.144306+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_echo_tongue_amulet": {
    "id": "shadowfell_echo_tongue_amulet",
    "name": "Echo Tongue Amulet",
    "description": "The Echo Tongue Amulet is a silver, heart-shaped pendant etched with ancient runes that glow faintly in the dark. Crafted by Blooper Wetworks for the Void Drifters, it whispers the final words of those who crossed into the Edge. Each utterance chimes like a soul's echo, adding depth to conversations but driving listeners mad if they hear too many. The amulet amplifies your perception of hidden truths and subtly warps speech, making it a dangerous yet invaluable tool for explorers.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗡",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "+1 to Perception checks",
      "Voice carries up to 200 feet"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perception Boost",
        "rules": "Activates as a bonus action. Provides +1 on Perception checks when detecting hidden truths or interpreting cryptic speech. Cannot be used more than once per short rest."
      },
      {
        "title": "Speech Echo",
        "rules": "When spoken through the amulet, your voice carries up to 200 feet. Each use warps the sound, causing it to mutate slightly for the next speaker who uses this method of communication. There is a 10% chance that the warped speech reveals an unintended hidden truth."
      }
    ],
    "levelRequirementReason": "This amulet provides subtle but useful enhancements suitable for early-level explorers.",
    "vendorReason": "The Shadowfell is home to many of the Void Drifters, who were known to wear this amulet.",
    "shippingDetail": "Ships directly from the Edge, arriving with a touch of the void's chill.",
    "usage": {
      "activation": "Bonus action or passive effect",
      "duration": "Instantaneous; ends when removed or destroyed",
      "endsWhen": "Destroyed by removing it or incurring madness due to excessive use",
      "charges": "Unlimited, regenerates on a short rest"
    },
    "priceReason": "The amulet's crafting involves rare Void Drifter runes and advanced Blooper Wetworks technology.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:02:19.776859+00:00",
    "aiReviewedAt": "2026-07-23T18:02:19.776859+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_echoed_mirror": {
    "id": "shadowfell_echoed_mirror",
    "name": "Echoed Mirror",
    "description": "The Echoed Mirror is a shattered relic of the Shadowfell, its fractured surface reflecting not your own image but the fears and memories of those who once walked in darkness. Each glance reveals hidden truths or latent dangers, whispering secrets of ancient battles lost to time. A masterwork of dark craftsmanship, it serves best as a tool for misdirection in combat, luring foes into false visions that only serve to heighten their paranoia.",
    "price": 1000,
    "icon": "🔮",
    "stock": 0,
    "rarity": "rare",
    "effects": [
      "Shadow Reflections",
      "False Weakness"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Reflections",
        "rules": "Upon activation, the Echoed Mirror reveals a shadowy reflection of an enemy within 30 feet. This reflection grants +20% chance to detect illusions or false enemies for the target and any allies within 10 feet. Lasts until the start of your next turn."
      },
      {
        "title": "False Weakness",
        "rules": "If the Echoed Mirror is used too frequently (once per short rest), it causes temporary hallucinations in the user, who must succeed on a DC 15 Wisdom saving throw or become disoriented for 1 minute. During this time, all attacks against them have advantage."
      }
    ],
    "levelRequirementReason": "Requires proficiency with Insight to fully utilize its hidden truths and illusions.",
    "vendorReason": "Shadowfell is known for collecting rare relics from the Shadowfell, making this mirror a fitting addition to their wares.",
    "shippingDetail": "Delivered swiftly by Lakitu drones, ensuring you receive your Echoed Mirror within the week.",
    "usage": {
      "activation": "Action (requires proficiency with Insight)",
      "duration": "Instantaneous effect lasting until start of next turn",
      "endsWhen": "Used too frequently or when the mirror is destroyed",
      "charges": "Unlimited, but requires a short rest to clear hallucinations"
    },
    "priceReason": "Balanced price for a rare relic that provides strategic advantage and tactical insight.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T18:02:12.928672+00:00",
    "aiReviewedAt": "2026-07-23T18:02:12.928672+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_echoed_vampire_fang": {
    "id": "shadowfell_echoed_vampire_fang",
    "name": "Echoed Vampire Fang",
    "description": "The Echoed Vampire Fang is a macabre fang crafted from the soul of a fallen vampire, its surface etched with arcane sigils that amplify the user's voice into a haunting whisper. This cursed artifact not only amplifies the speaker’s voice by +40% but also projects a spectral echo that frightens nearby foes for 3 seconds upon activation. The fang is said to have been forged in the shadowy depths of the Underdark, where it was used by ancient vampire lords to spread their whispers of fear and death.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦷",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Voice Amplification",
      "Fearful Echo"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Voice Amplification",
        "rules": "When activated as a bonus action, the Echoed Vampire Fang amplifies the user's voice by +40% damage. This effect lasts until the end of the user's next turn."
      },
      {
        "title": "Fearful Echo",
        "rules": "Upon activation, the fang projects an echoing whisper that frightens all creatures within 15 feet for 3 seconds. Creatures must succeed on a DC 14 Wisdom saving throw or become frightened until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The Echoed Vampire Fang requires at least level 1 to wield, as its dark energies demand some experience with shadow magic.",
    "vendorReason": "Shadowfell traders specialize in crafting and selling relics from the Underdark, including this cursed fang.",
    "shippingDetail": "The Echoed Vampire Fang arrives via a secure delivery by Lakitu Drones, ensuring it reaches its destination without attracting unwanted attention.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until the end of the user's next turn for Voice Amplification; Fearful Echo lasts for 3 seconds.",
      "endsWhen": "The effect ends if the user uses their action on another task or if they are incapacitated.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "Despite its cursed nature and limited use, the Echoed Vampire Fang is priced at 1000 XP due to its unique crafting materials and dark magic required for its creation.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T18:02:30.390060+00:00",
    "aiReviewedAt": "2026-07-23T18:02:30.390060+00:00",
    "aiReviewVersion": 1
  }
};
