// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_048 = {
  "warhammer_rats_knife": {
    "id": "warhammer_rats_knife",
    "name": "Rats Knife of the Skaven",
    "description": "The Rats Knife of the Skaven is a compact, rat-clawed weapon forged in the dark labyrinths beneath the Underdark. Its blade gleams with a faint, eerie light, and its handle is adorned with intricate carvings that tell tales of ancient wars fought by the Skavens. Wielders report an increased agility while fighting, as if the knife's very essence grants them swifter feet, but beware—its use can inadvertently amplify chaos in nearby environments, causing minor disturbances that may attract unwanted attention.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐭",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Swift Strike",
      "Chaos Disturbance"
    ],
    "vendor": "warhammer",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swift Strike",
        "rules": "When you attack with the Rats Knife, you have advantage on the attack roll. This effect lasts until the start of your next turn."
      },
      {
        "title": "Chaos Disturbance",
        "rules": "As a bonus action, you can cause minor noise (such as clinking or rustling) that has a range of 30 feet. If an enemy within this area is unaware of the source of the noise, they must make a Wisdom saving throw (DC 12). On a failed save, the creature becomes aware of your location and suffers disadvantage on its next attack roll against you until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The knife's chaotic energy requires some experience to control effectively.",
    "vendorReason": "The Warhammer vendor specializes in exotic and rare weapons, including those with a touch of the strange and the arcane.",
    "shippingDetail": "Ships via Koopa's Express delivery service, which guarantees safe arrival within one week of purchase.",
    "usage": {
      "activation": "As an action or bonus action for Swift Strike; as a bonus action for Chaos Disturbance",
      "duration": "Instantaneous and single-use per turn for Swift Strike; lasts until the start of your next turn for Chaos Disturbance",
      "endsWhen": "Exhausted upon use, recharges on a short rest for both effects",
      "charges": "Unlimited uses"
    },
    "priceReason": "The knife's exotic nature and the chaotic power it contains justify its higher price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T20:10:34.123816+00:00",
    "aiReviewedAt": "2026-07-23T20:10:34.123816+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_remis_coil_airship_engine": {
    "id": "warhammer_remis_coil_airship_engine",
    "name": "Remi Coils Airship Engine",
    "description": "The Remi Coils Airship Engine is a compact marvel of engineering that propels airships through stormy skies with ease. Its intricate gears and pistons are forged from alloys unique to The Fated Place, ensuring unmatched performance in turbulent weather. Pilots who activate this engine can navigate the tempests with +2 to their navigation checks, and it boosts overall speed by 30%, making it an indispensable part of any airship's arsenal.",
    "price": 1000,
    "icon": "⚙",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Storm Navigation Boost",
      "Speedy Flight"
    ],
    "vendor": "warhammer",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Storm Navigation Boost",
        "rules": "When the engine is activated, the pilot gains a +2 bonus to navigation checks while in stormy weather. This effect lasts until the end of the airship's next turn."
      },
      {
        "title": "Speedy Flight",
        "rules": "The Remi Coils Airship Engine increases the airship's speed by 30% for as long as it remains powered and connected to the ship. Consuming one energy charge per flight cycle maintains this effect."
      }
    ],
    "levelRequirementReason": "This engine requires significant mechanical knowledge and expertise, suitable only for seasoned pilots.",
    "vendorReason": "Warhammer is renowned for its mastery of airship technology and engineering, making it the premier vendor for such high-performance components.",
    "shippingDetail": "Ships via spectral courier with a 24-hour delivery window.",
    "usage": {
      "activation": "A bonus action to connect the engine and activate its effects.",
      "duration": "Instantaneous, reactivates on the next turn if the energy charge is replenished.",
      "endsWhen": "The engine is disconnected or no longer powered by an energy charge.",
      "charges": "Unlimited charges per day."
    },
    "priceReason": "This balanced price reflects its high demand and unique capabilities, making it a sought-after but not overpriced addition to any airship.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T20:10:28.557858+00:00",
    "aiReviewedAt": "2026-07-23T20:10:28.557858+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_scarred_mechanical_glove": {
    "id": "warhammer_scarred_mechanical_glove",
    "name": "Scarred Mechanical Glove",
    "description": "The Scarred Mechanical Glove once belonged to a Skaven engineer who crafted it from salvaged parts of the Koopa Navy’s warships. Its fingers are reinforced with cogs and gears, and its surface is scarred by countless battles. When struck, the glove emits a mechanical hum that can either command or warn, depending on the user's intent. It pulses with corrupted energy, dealing +2d4 damage to melee attacks but risks jamming or overloading in battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚙",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Reinforced Strikes",
      "Mimicry"
    ],
    "vendor": "Warhammer",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Reinforced Strikes",
        "rules": "Increase the wielder’s melee attack rolls by +2d4. The glove has a 25% chance of jamming or overloading during each attack, requiring an immediate DC 13 Dexterity saving throw to prevent dropping the weapon."
      },
      {
        "title": "Mimicry",
        "rules": "Enemies within 5 feet have advantage on saving throws against the wielder’s spells and effects for 1 minute. The mimic effect ends if the wielder ceases to wear the glove or drops it as an action."
      }
    ],
    "levelRequirementReason": "Requires attunement with a war machine to command its corrupted energy.",
    "vendorReason": "The Warhammer vendor specializes in items from the Skaven and other dark factions, making this glove an appropriate addition to their inventory.",
    "shippingDetail": "Delivered via a specialized Koopa Postal courier who ensures the package is securely packed for its journey through treacherous lands.",
    "usage": {
      "activation": "Wearing the glove as an action and using it during melee attacks.",
      "duration": "Instantaneous effect per attack.",
      "endsWhen": "The glove jams, overloads, or is dropped by the wielder.",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its unique combination of offensive power and risk.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:10:29.687848+00:00",
    "aiReviewedAt": "2026-07-23T20:10:29.687848+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_scarred_sword": {
    "id": "warhammer_scarred_sword",
    "name": "Scarred Sword",
    "description": "The Scarred Sword is a weapon forged from the bones of ancient warriors and embedded with the memories of their battles. Its surface is marred by etches that whisper the screams of fallen enemies, and each strike releases the echoes of past conflicts. This blade deals +1d6 slashing damage to all attacks and grants temporary hit points equal to 1d4 when an enemy within 5 feet is frightened by a fear effect.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Frightening Strike",
      "Temporary Hit Points on Fear"
    ],
    "vendor": "warhammer",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Frightening Strike",
        "rules": "When you hit an enemy with this weapon, that creature must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. The fear effect ends early if the target takes any damage or is incapacitated."
      },
      {
        "title": "Temporary Hit Points on Fear",
        "rules": "If you hit an enemy within 5 feet with this weapon and it is affected by a fear effect, you gain temporary hit points equal to 1d4 until the start of your next turn. You regain all temporary hit points if the target no longer has the frightened condition."
      }
    ],
    "levelRequirementReason": "This weapon requires attunement by a warrior or rogue, and its cursed nature demands a certain level to wield effectively.",
    "vendorReason": "Warhammer’s artisans have long specialized in crafting weapons that resonate with the spirits of battle.",
    "shippingDetail": "Delivered within one week, ensuring warriors can train and attune to this weapon properly.",
    "usage": {
      "activation": "On hit with a melee attack",
      "duration": "Until end of next turn for fear effect; until target regains the frightened condition for temporary HP",
      "endsWhen": "The target is no longer affected by the fear effect or takes damage, or you gain temporary hit points due to fear",
      "charges": "Unlimited"
    },
    "priceReason": "This weapon’s cursed nature and attunement requirement justify a balanced price of 1000 XP.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T20:10:29.811363+00:00",
    "aiReviewedAt": "2026-07-23T20:10:29.811363+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_skaven_gear_crate": {
    "id": "warhammer_skaven_gear_crate",
    "name": "Skaven Gear Crate",
    "description": "The Skaven Gear Crate is a darkly enchanted wooden crate, its surface etched with ancient runes and adorned with the emblem of the Rat God. When opened, it reveals three random items of war gear, each item harboring a fragment of chaotic magic. Among these may be miniature catapults that can spring to life, rat-infested armor that saps vitality, or cursed gear that brings misfortune to its bearer. A minor chaos effect occurs with every use, and opening the crate in public risks attracting an ambush from Skaven assassins.",
    "price": 1000,
    "icon": "🐍",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Random War Gear",
      "Minor Chaos"
    ],
    "vendor": "warhammer",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random War Gear",
        "rules": "Opens to reveal three random items of war gear. Each item has a 25% chance to trigger a minor chaos effect, and the crate may trigger a Skaven ambush if opened in public."
      },
      {
        "title": "Minor Chaos",
        "rules": "A minor chaos effect occurs each time the crate is used. This effect lasts until the end of your next turn and imposes disadvantage on all ability checks and saving throws for 1d4 rounds. Opening the crate in a populated area may attract an ambush from Skaven assassins."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers just starting their journey, requiring no minimum level to open.",
    "vendorReason": "Warhammer is known for its extensive supply of unique and rare items from various realms, including those crafted by Skaven artisans.",
    "shippingDetail": "Ships with Chain Chomp Courier, ensuring the crate arrives intact but remains a mystery until opened.",
    "usage": {
      "activation": "Instantaneous action to open and reveal contents",
      "duration": "One-time use; effects last until end of next turn or interrupted",
      "endsWhen": "Use limit: one time per day",
      "charges": "Unlimited uses"
    },
    "priceReason": "The crate's price reflects the rare and chaotic nature of its contents, as well as the potential for danger when used.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-23T20:10:45.986917+00:00",
    "aiReviewedAt": "2026-07-23T20:10:45.986917+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_skull_battle_axe": {
    "id": "warhammer_skull_battle_axe",
    "name": "Skull Battle Axe",
    "description": "The Skull Battle Axe is a grim weapon forged from the remains of a fallen god, its skull carved into an axe that drips with ancient power and malice. The axe's weight and balance are perfect for two-handed use, and it whispers secrets of the dead when wielded in combat. It deals devastating slashing damage, and its touch sends waves of psychic backlash to any undead it strikes.",
    "category": "equipment",
    "price": 1800,
    "icon": "💀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Psychic Backlash",
      "Undead Weakness"
    ],
    "vendor": "Warhammer",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Psychic Backlash",
        "rules": "When the Skull Battle Axe hits an undead target, the wielder must succeed on a DC 15 Constitution saving throw or take 1d4 + 2 psychic damage."
      },
      {
        "title": "Undead Weakness",
        "rules": "The wielder has advantage on attack rolls against undead creatures. Additionally, the axe deals an extra 1d6 slashing damage to undead targets."
      }
    ],
    "levelRequirementReason": "This weapon demands a proficient character capable of harnessing its ancient power.",
    "vendorReason": "The Warhammer vendor is known for their unique and powerful armaments, including items crafted from the bones and relics of fallen gods.",
    "shippingDetail": "Due to its size and weight, this item requires special handling by the Chain Chomp Courier. Delivery time may be increased by one week.",
    "usage": {
      "activation": "Melee weapon attack",
      "duration": "Instantaneous effect",
      "endsWhen": "Exhausts after one use per day",
      "charges": "Recharges daily"
    },
    "priceReason": "The axe's rare material and ancient crafting process make it a valuable, yet balanced addition to any adventurer’s arsenal.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T20:10:57.613899+00:00",
    "aiReviewedAt": "2026-07-23T20:10:57.613899+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_skull_keychain": {
    "id": "warhammer_skull_keychain",
    "name": "Skull Keychain of the Unseen",
    "description": "The Skull Keychain of the Unseen, crafted from the bone of an ancient Fey creature, is a relic that whispers secrets of forgotten courts. Its weighty form glows faintly in the dark, and when carried, it grants temporary invisibility to its bearer for up to one hour per day. The keychain also causes minor confusion among hostile creatures within 30 feet, reducing their reaction speed by 1d4 turns each time they attempt an attack or reaction against you. In Feywild mazes, it reveals hidden paths that lead to secret passages and traps, guiding the unwary to safety.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧩",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Invisibility",
      "Confusion"
    ],
    "vendor": "warhammer",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "Activates as a bonus action. The keychain grants temporary invisibility to its bearer for up to one hour per day, or until the wearer drops it, takes an action, or is hit by an attack."
      },
      {
        "title": "Confusion",
        "rules": "Causes minor confusion among hostile creatures within 30 feet. When a creature within range attacks or reacts against you, it must make a Wisdom saving throw (DC 14) to avoid being reduced in reaction speed by 1d4 turns."
      }
    ],
    "levelRequirementReason": "This keychain is designed for adventurers of all levels who may find themselves in Feywild mazes or encountering hostile creatures.",
    "vendorReason": "Warhammer, known for its extensive trade routes and connections with the Feywild, often sells items that bridge the gap between mortal realms and the magical plane.",
    "shippingDetail": "The keychain is shipped discreetly to avoid drawing unwanted attention from hostile creatures in the wild.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Up to one hour per day, or until dropped, taken an action, or hit by an attack",
      "endsWhen": "Dropped, takes an action, or is attacked; recharges after a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from ancient Fey bones and imbued with unique magic, this keychain offers potent utility at a fair price for adventurers who need to navigate the Feywild.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:11:30.472329+00:00",
    "aiReviewedAt": "2026-07-23T20:11:30.472329+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_skull_rats_tooth": {
    "id": "warhammer_skull_rats_tooth",
    "name": "Skull Rats Tooth",
    "description": "The Skull Rats Tooth is a jagged fragment of bone that gleams with a sinister light, having been forged in the depths of the Fated Place where shadowy rats once ruled. This relic enhances the wielder's melee strikes by +1d3 damage and poisons foes within 30 feet, causing them to reel from 1d2 poison damage each turn. It also emits an eerie howl that instills fear in creatures within reach for one round, shaking their resolve.",
    "price": 1000,
    "icon": "🦴",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Enhances Melee Damage",
      "Poisonous Strike"
    ],
    "vendor": "Warhammer",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Melee Damage",
        "rules": "When used as a melee weapon, the Skull Rats Tooth grants +1d3 damage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Poisonous Strike",
        "rules": "At the start of each creature's turn within 30 feet, it must make a DC 12 Constitution saving throw or take 1d2 poison damage. On a successful save, this effect ends for that target."
      }
    ],
    "levelRequirementReason": "This relic is designed to assist adventurers who are just starting their journey.",
    "vendorReason": "The Warhammer shop stocks rare and ancient artifacts from the Fated Place, including this potent weapon fragment.",
    "shippingDetail": "Ships within one week via the Void Drifter Relay, ensuring timely delivery of this powerful relic.",
    "usage": {
      "activation": "Used as a melee weapon in your hand",
      "duration": "Instantaneous effect per turn for those within range; fear lasts until the start of the target's next turn",
      "endsWhen": "The effect ends when the creature saves successfully or the target moves out of range.",
      "charges": "Unlimited uses, but it requires 2d4 hours to clean before reuse."
    },
    "priceReason": "This relic is rare and powerful, offering both melee enhancement and area effect capabilities, making it a valuable asset for any adventuring party.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-23T20:11:03.146881+00:00",
    "aiReviewedAt": "2026-07-23T20:11:03.146881+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_skull_rattle": {
    "id": "warhammer_skull_rattle",
    "name": "Skull Rattle of the Forgotten",
    "description": "The Skull Rattle of the Forgotten is a gnarled warhammer skull rattle, its polished surface etched with forgotten runes. Crafted from the bones of an ancient Skaven warrior, it exudes a faint stench of decay. It was discovered within the cursed lair of a rat lord, a relic that harbors dark magic and whispers of long-lost battles. When shaken once per round, it unleashes a 1d4 psychic shock on adjacent foes, leaving them reeling with minor hallucinations for one minute.",
    "price": 1000,
    "icon": "🦴",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Psychic Shock",
      "Hallucinations"
    ],
    "vendor": "warhammer",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Psychic Shock",
        "rules": "When shaken, the rattle deals 1d4 psychic damage to all creatures within 5 feet. This effect can be used once per short or long rest."
      },
      {
        "title": "Hallucinations",
        "rules": "For one minute after shaking the rattle, any creature adjacent to it must succeed on a DC 13 Constitution saving throw or become blinded and frightened for 1 round. This effect can be triggered once per day."
      }
    ],
    "levelRequirementReason": "Requires at least first-level proficiency in weapon use to wield the rattle effectively.",
    "vendorReason": "Warhammer, known for their extensive connections with dark and forgotten relics, is trusted by adventurers seeking such arcane items.",
    "shippingDetail": "Ships via express courier within 24 hours of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per short or long rest or day, respectively.",
      "charges": "Uses"
    },
    "priceReason": "The rattle's rare crafting materials and dark magic make it a costly relic worth its price in experience points.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T20:10:59.977801+00:00",
    "aiReviewedAt": "2026-07-23T20:10:59.977801+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_skull_sonic_core": {
    "id": "warhammer_skull_sonic_core",
    "name": "Skull Sonic Core",
    "description": "The Skull Sonic Core, crafted from the bone of a primordial dragon and imbued with chaotic energies, is a relic that amplifies sonic frequencies to command ancient chaos gods. It whispers secrets of forgotten conspiracies and curses all allies within its range with a skull's malevolent influence, driving them toward madness if not controlled. This artifact is said to have been forged by the dark sorceries of Wario Inc., whose twisted genius lies in harnessing the raw power of chaos itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐉",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Dragon Command",
      "Skull Curse"
    ],
    "vendor": "warhammer",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Dragon Command",
        "rules": "By activating the Skull Sonic Core as a bonus action, you can attempt to command nearby chaotic dragons within 30 feet. The dragons must succeed on a DC 18 Wisdom saving throw or be compelled into submission for 1 minute. If they fail, they are charmed by you and follow your commands until the effect ends."
      },
      {
        "title": "Skull Curse",
        "rules": "All allies within 10 feet of the core must succeed on a DC 18 Wisdom saving throw or be cursed with a malevolent influence. For each failed save, they gain disadvantage on all Charisma-based checks and saving throws for 24 hours. The curse can be removed by dispelling magic."
      }
    ],
    "levelRequirementReason": "Only those of significant experience and power can wield the Skull Sonic Core's chaotic energies without being consumed by its malevolent influence.",
    "vendorReason": "Warhammer, a supplier of rare and powerful equipment, offers this relic due to its strategic importance in dragon summoning and control within the Regal Empire.",
    "shippingDetail": "Delivered via a Rakasha spirit courier who ensures discreet and swift delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous for Dragon Command; 1 minute for Skull Curse (reduces to zero on a failed saving throw)",
      "endsWhen": "Dragon Command ends when the effect duration expires or when you use an action to dismiss it. The Skull Curse ends if the affected ally successfully saves against it.",
      "charges": "Unlimited, but requires concentration and mental discipline"
    },
    "priceReason": "The balanced price reflects its legendary rarity and the strategic value in controlling chaotic dragons.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T20:11:43.891722+00:00",
    "aiReviewedAt": "2026-07-23T20:11:43.891722+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_tomb_kings_raven_hammer": {
    "id": "warhammer_tomb_kings_raven_hammer",
    "name": "Raven Hammer of the Unseen",
    "description": "The Raven Hammer of the Unseen is a warhammer forged from the bones of forgotten gods and cursed by the Tomb Kings. Its surface is etched with ancient runes that glow faintly in the dark, and it resonates with an eerie whisper when wielded against undead foes. Each strike deals an additional 1d6 necrotic damage to the target and grants +2 to attack rolls against chaotic creatures. The hammer's touch leaves a lingering effect, causing minor bleeding on the target after each hit.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necrotic Surge",
      "Chaotic Advantage"
    ],
    "vendor": "warhammer",
    "shippedBy": "Ghostly Couriers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necrotic Surge",
        "rules": "When you hit an undead creature with this warhammer, it deals an additional 1d6 necrotic damage. The effect ends if the hammer is not used to attack an undead foe within 1 minute."
      },
      {
        "title": "Chaotic Advantage",
        "rules": "+2 to attack rolls against chaotic creatures. This bonus decreases by 1 at the start of each long rest, down to a minimum of +0."
      }
    ],
    "levelRequirementReason": "Players should have some experience before wielding such a cursed and powerful weapon.",
    "vendorReason": "The Warhammer vendor is known for its relics from ancient times, including cursed but potent weapons like the Raven Hammer of the Unseen.",
    "shippingDetail": "Ships via spectral messengers, arriving within a week unless disturbed by light or noise.",
    "usage": {
      "activation": "On attack rolls only",
      "duration": "Instantaneous",
      "endsWhen": "After being used to make an attack roll against an undead foe for 1 minute. The bonuses on attack rolls decrease at the start of each long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a rare item, this hammer is expensive but not overpowered.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T20:11:13.676669+00:00",
    "aiReviewedAt": "2026-07-23T20:11:13.676669+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_waluigi_tome": {
    "id": "warhammer_waluigi_tome",
    "name": "Waluigi’s Chaotic Codex",
    "description": "Waluigi’s Chaotic Codex is a leather-bound tome adorned with runes that glow with an eerie light. Crafted by the Custodians from the blood of slain gods and laughter of demons, it channels chaotic energy into its wielder's strikes. When attuned, this codex grants a +50% damage bonus to attacks for three rounds. Additionally, on each successful hit, random magical explosions erupt around the target, dealing additional damage equal to half the attack's original value. The Codex also unlocks 'Laughing Chaos,' where a d20 is rolled; the result modifies the next attack's damage.",
    "price": 1000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Chaotic Aura",
      "Explosive Strikes"
    ],
    "vendor": "warhammer",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Chaotic Aura",
        "rules": "The user gains a +50% bonus to melee weapon attack rolls for three rounds upon activation. This effect ends if the user is hit by an enemy or if they take damage."
      },
      {
        "title": "Explosive Strikes",
        "rules": "When the user scores a hit with a melee weapon, random magical explosions erupt around the target, dealing 50% of the original attack's damage. This effect ends on the next turn after it is activated."
      }
    ],
    "levelRequirementReason": "Waluigi’s Chaotic Codex requires attunement to harness its chaotic energies, which are too volatile for untrained hands.",
    "vendorReason": "Warhammer, known for their unique and powerful artifacts, sells this relic of chaos and destruction.",
    "shippingDetail": "Shipped via Pianta Chuck’s fastest express service to ensure the Codex reaches its destination intact.",
    "usage": {
      "activation": "Action",
      "duration": "Three rounds (ends when user is hit or takes damage)",
      "endsWhen": "User is hit by an enemy or takes damage",
      "charges": "Unlimited"
    },
    "priceReason": "The Codex's price reflects its legendary rarity, the materials used in its crafting, and the mystical energies it contains.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T20:11:17.474140+00:00",
    "aiReviewedAt": "2026-07-23T20:11:17.474140+00:00",
    "aiReviewVersion": 1
  },
  "wario_claims_it_never_runs": {
    "id": "wario_claims_it_never_runs",
    "name": "Wario's Infinite Coin Purse (Ultimate Scam!)",
    "description": "Wario's Infinite Coin Purse (Ultimate Scam!) is a tarnished brass bag that looks like it could hold an endless supply of gold. Crafted by Wario's Counterfeit Corner, this purse tricks the unwary into thinking they've found untold riches. It grants advantage on Deception checks when displaying wealth, but beware: its coins crumble after one use and, once exposed as a fraud, the purse explodes in confetti, leaving you blinded and facing a hefty fine.",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Deception Checks",
      "Counterfeit Coins"
    ],
    "vendor": "wario_land",
    "shippedBy": "Greedy Grab Bag",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deceptive Display",
        "rules": "When used to display wealth (as an action), the purse grants the user advantage on Deception checks. This effect ends when a successful Wisdom (Insight) check is made against the user."
      },
      {
        "title": "Counterfeit Coins",
        "rules": "The purse contains coins that crumble into dust after one use. If exposed as fraudulent, it explodes into confetti, blinding the user for 1d4 rounds and dealing 5 (1d6) force damage. The purse is destroyed when revealed."
      }
    ],
    "levelRequirementReason": "Any adventurer can fall prey to Wario's cunning scheme.",
    "vendorReason": "Wario's Counterfeit Corner specializes in items that deceive and defraud, making it the obvious vendor for this purse.",
    "shippingDetail": "Ships with a special delivery note warning recipients to be wary of counterfeit coins.",
    "usage": {
      "activation": "Used as an action to display wealth or advantage on Deception checks.",
      "duration": "Instantaneous for the Deceptive Display effect; ends when detected. For Counterfeit Coins, lasts until used.",
      "endsWhen": "Detected by a successful Wisdom (Insight) check or upon revealing its counterfeit nature.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The purse's value lies in its deception and the thrill of potential riches, balanced with the risk of exposure.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T20:11:28.189424+00:00",
    "aiReviewedAt": "2026-07-23T20:11:28.189424+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_battlefield_grave_marker_charm": {
    "id": "wario_cw_battlefield_grave_marker_charm",
    "name": "Civil War Relic: Battlefield Grave Marker Charm",
    "description": "A small wooden cross carved from an oak tree found on a Civil War battlefield. The charm is adorned with a strange mushroom cap that has been preserved in resin, a relic of makeshift graves dug by soldiers' hands under fire. Names etched into the wood are half-worn, but occasionally one glows faintly for a moment, a spectral whisper from the past. This charm brings respect to those who fought and fell, and its ghostly names can offer fleeting moments of clarity in the face of sleep magic's whispers.",
    "category": "equipment",
    "price": 1000,
    "icon": "✝️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Respectful Vigil",
      "Phantom Whisper"
    ],
    "vendor": "wario_land",
    "shippedBy": "Memorial Parcel",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Respectful Vigil",
        "rules": "When you openly display this charm, you gain advantage on Persuasion checks with veterans and mourners. You can use this effect once per day."
      },
      {
        "title": "Phantom Whisper",
        "rules": "Once per day before a dangerous mission, you may invoke the fallen to gain +1 to your first saving throw against sleep or dream-based magic that day. This effect ends after the save is made."
      }
    ],
    "levelRequirementReason": "Requires level 5 to handle the charm's somber gravity and its connection to the battlefield.",
    "vendorReason": "Wario Land deals in Civil War memorabilia, making this charm a fitting addition to his collection.",
    "shippingDetail": "Delivered with a small sprig of wildflowers for remembrance.",
    "usage": {
      "activation": "Passive effect when openly displayed. Active use once per day before dangerous missions.",
      "duration": "Instantaneous for Respectful Vigil, duration ends after saving throw is made for Phantom Whisper",
      "endsWhen": "After the save or at the end of the day, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "The charm's rarity and historical significance justify its price.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T20:11:33.140230+00:00",
    "aiReviewedAt": "2026-07-23T20:11:33.140230+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_battlefield_trophy_sack": {
    "id": "wario_cw_battlefield_trophy_sack",
    "name": "Civil War Relic: Battlefield Trophy Sack",
    "description": "The Civil War Relic: Battlefield Trophy Sack is a rugged, tattered leather sack that once belonged to a mercenary. The sack's exterior is stained with blood and dust, while the interior still holds relics from battles long past—ears, badges, and other gruesome trophies. Carrying it grants you a grizzly reputation, as your Intimidation checks are bolstered by +1. You may also rummage through it after winning a battle to find 1d10 extra gold pieces or a minor trinket of the DM's choosing, once per day.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎒",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Grisly Reputation",
      "Spoils of War"
    ],
    "vendor": "wario_land",
    "shippedBy": "Loot Logistics",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grisly Reputation",
        "rules": "When visibly carrying this sack with trophies such as ears or badges, you gain a +1 bonus to your Intimidation checks. This effect is passive and does not require an action."
      },
      {
        "title": "Spoils of War",
        "rules": "Once per day after defeating at least 3 enemies in battle, you can rummage through the sack to find either 1d10 gold pieces or a minor trinket (DM's choice). This effect is usable once per long rest."
      }
    ],
    "levelRequirementReason": "The relic is easy enough for newer adventurers, as it requires no special combat prowess to use.",
    "vendorReason": "Wario often repurposes items from his battles and sells them in his shop.",
    "shippingDetail": "The sack is delivered quickly, but the contents are fragile. Handle with care to avoid damage.",
    "usage": {
      "activation": "Passive for Grisly Reputation; once per day for Spoils of War",
      "duration": "Permanent for Grisly Reputation; until next long rest for Spoils of War",
      "endsWhen": "No ends, as effects are permanent or per long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The relic's value is balanced by its limited daily use and the quality of the leather and relics it contains.",
    "priceOriginal": 5300,
    "priceReviewedAt": "2026-07-23T20:11:46.555104+00:00",
    "aiReviewedAt": "2026-07-23T20:11:46.555104+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_battlement_spyglass": {
    "id": "wario_cw_battlement_spyglass",
    "name": "Civil War Relic: Battlement Spyglass",
    "description": "The Civil War Relic: Battlement Spyglass is a weathered, dented spyglass that once belonged to a Lakitu scout. Its aged wooden frame and brass lens reveal countless tales of battles past, marked by a tiny scratch shaped like a Lakitu cloud. This relic offers keen eyesight, granting advantage on Perception checks within its field of view (100 feet or more) and allowing you to mark an enemy for enhanced ranged attacks, but it struggles in adverse weather conditions where heavy rain or magical fog impose disadvantage on Perception checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔭",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Long Watch",
      "Marked Shot"
    ],
    "vendor": "wario_land",
    "shippedBy": "Tower Top Trunk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Long Watch",
        "rules": "You gain advantage on Perception checks made to spot distant threats within the spyglass's field of view (100 feet or more). This effect lasts until you make another Perception check with this spyglass."
      },
      {
        "title": "Marked Shot",
        "rules": "Once per short rest, you can mark a visible enemy. The first ranged attack made against that target before the end of your next turn has advantage on the attack roll and +2 to hit. You must see both yourself and the marked target for this feature to function."
      }
    ],
    "levelRequirementReason": "The spyglass's functionality requires a certain finesse that only comes with experience, hence the level requirement.",
    "vendorReason": "Wario Land is known for his connections to historical artifacts and relics from various eras of Mushroom Kingdom history.",
    "shippingDetail": "The spyglass must be delivered by Tower Top Trunk due to its fragile nature, ensuring safe handling through the Mushroom Kingdom's bustling landscapes.",
    "usage": {
      "activation": "Passive and once per short rest (Marked Shot)",
      "duration": "Until another Perception check is made or until the next short rest (Marked Shot)",
      "endsWhen": "After one use per short rest",
      "charges": "Unlimited, but only usable once per short rest"
    },
    "priceReason": "Balanced at 1000 XP, this spyglass offers significant tactical advantage without overpowered mechanics.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-24T23:48:26.525018+00:00",
    "aiReviewedAt": "2026-07-24T23:48:26.525018+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_blue_shell_shrapnel_band": {
    "id": "wario_cw_blue_shell_shrapnel_band",
    "name": "Civil War Relic: Blue Shell Shrapnel Band",
    "description": "The Civil War Relic: Blue Shell Shrapnel Band is a bracelet crafted from the remnants of a legendary homing shell that exploded above a royal balcony during an historic battle. The band's shards resonate with the echo of thunder, and when the name Bowser is whispered nearby, it hums ominously. This relic grants its bearer a touch of war's fury, enhancing their aim and dealing damage in both success and failure.",
    "category": "equipment",
    "price": 1000,
    "icon": "📿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Homing Fury",
      "Thunderous Impact"
    ],
    "vendor": "wario_land",
    "shippedBy": "Kart Track Scrap",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Homing Fury",
        "rules": "When you miss with a ranged attack as your action, you can use this item to reroll the attack roll. On a successful reroll, you deal +1d4 thunder damage to the target. This effect has a 5-foot range and requires no material components."
      },
      {
        "title": "Thunderous Impact",
        "rules": "If your Homing Fury reroll hits, add an additional 1d6 thunder damage. This effect can only be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This relic requires a minimum of 8th level to wield effectively in combat.",
    "vendorReason": "Wario Land, as an expert in collecting and selling rare artifacts from historical battles, is the perfect vendor for such a relic.",
    "shippingDetail": "The shipment includes expedited delivery to ensure the artifact arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Once per short or long rest, after use",
      "charges": "Unlimited; recharges on a short rest"
    },
    "priceReason": "The relic's rarity and historical significance justify its price of 1000 XP.",
    "priceOriginal": 7600,
    "priceReviewedAt": "2026-07-23T20:11:48.257557+00:00",
    "aiReviewedAt": "2026-07-23T20:11:48.257557+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_bob_omb_engineers_blueprint": {
    "id": "wario_cw_bob_omb_engineers_blueprint",
    "name": "Civil War Relic: Bob-omb Engineer’s Blueprint",
    "description": "This soot-streaked blueprint, marked 'IMPROVED GO-BOOM DEVICE,' is a Civil War relic that once belonged to a Bob-omb Engineer who drew doodles of explosions and booms in his spare time. The paper is brittle with age but still retains the faint scent of gunpowder. Crafting with this blueprint grants you an edge when disarming or rearming explosive traps, while its DIY Bomb ability lets you construct a small, fiery inferno at will. However, if your crafting fails, it detonates in your face, dealing minor burns and reminding you not to rush these projects.",
    "category": "equipment",
    "price": 1000,
    "icon": "📐",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Explosive Insight",
      "DIY Bomb"
    ],
    "vendor": "wario_land",
    "shippedBy": "Volatile Mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Explosive Insight",
        "rules": "You gain advantage on Intelligence (Engineering) checks made to disarm or rearm explosive traps and devices. This effect lasts until the end of your next short rest."
      },
      {
        "title": "DIY Bomb",
        "rules": "Once per long rest, you can jury-rig a small bomb using appropriate materials within 30 feet. The bomb deals 2d6 fire damage in a 10-foot radius and requires a Dexterity saving throw with a DC of 13 to avoid the explosion. You must use this ability before the end of your next long rest or lose its use."
      }
    ],
    "levelRequirementReason": "This relic is designed for those who have already shown proficiency in engineering and explosives, requiring a minimum level to ensure proper handling.",
    "vendorReason": "Wario Land has extensive connections with historical artifacts and relics from various eras, including this Civil War blueprint.",
    "shippingDetail": "The package is handled with extreme care by Volatile Mail to ensure the explosive materials do not pose a risk during shipment.",
    "usage": {
      "activation": "As an action or bonus action when crafting explosives, or once per long rest to create a DIY Bomb.",
      "duration": "Explosive Insight lasts until the end of your next short rest. The DIY Bomb effect is instantaneous and lasts only until the bomb detonates.",
      "endsWhen": "The use ends if the bomb explodes or after 10 minutes without being used for the DIY Bomb ability.",
      "charges": "One charge per long rest, recharged at the end of each long rest."
    },
    "priceReason": "This relic is priced moderately high due to its historical significance and the specialized knowledge required to use it safely.",
    "priceOriginal": 6400,
    "priceReviewedAt": "2026-07-23T20:12:16.670926+00:00",
    "aiReviewedAt": "2026-07-23T20:12:16.670926+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_boo_recon_goggles": {
    "id": "wario_cw_boo_recon_goggles",
    "name": "Civil War Relic: Boo Recon Goggles",
    "description": "The Civil War Relic: Boo Recon Goggles are fogged with age and battle, yet they provide a crucial edge to those who wield them. Crafted from the remnants of Boo scouts' equipment during the Civil War, these goggles allow you to see invisible undead as faint outlines within 30 feet, granting you an advantage on Perception checks in dim light or darkness. However, their power comes with a price; once per long rest, viewing something truly horrific through them forces a DC 12 Wisdom saving throw, or you are frightened for 1 round at the DM's discretion.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥽",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Ghost Sight",
      "Night Recon"
    ],
    "vendor": "wario_land",
    "shippedBy": "Spectral Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ghost Sight",
        "rules": "You can see invisible undead within 30 feet as faint outlines. This is a passive ability that does not require activation."
      },
      {
        "title": "Night Recon",
        "rules": "Once per short rest, you gain advantage on Perception checks in dim light or darkness. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This relic is accessible to low-level characters as it provides essential reconnaissance capabilities.",
    "vendorReason": "Wario Land, known for his eccentric and resourceful nature, sells a variety of unique and useful relics from various eras.",
    "shippingDetail": "Ships via the Spectral Courier within one week, delivered directly to your doorstep.",
    "usage": {
      "activation": "Passive or once per short rest for Night Recon.",
      "duration": "Instantaneous for Ghost Sight; until end of next turn for Night Recon.",
      "endsWhen": "Night Recon ends at the end of your next turn. Ghost Sight is always active while wearing the goggles.",
      "charges": "Unlimited, but requires a long rest to view something truly horrific."
    },
    "priceReason": "This relic strikes a balance between its unique abilities and rarity, priced at 1000 XP for a valuable tool in reconnaissance and combat.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T20:12:00.712547+00:00",
    "aiReviewedAt": "2026-07-23T20:12:00.712547+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_bowser_propaganda_leaflet_bundle": {
    "id": "wario_cw_bowser_propaganda_leaflet_bundle",
    "name": "Civil War Relic: Bowser Propaganda Leaflet Bundle",
    "description": "This bundle consists of meticulously crafted leaflets adorned with Bowser's smirking visage and bold proclamations of 'KOOPA ORDER = REAL STABILITY'. Printed in high-quality ink, these leaflets are both a propaganda tool and a relic of the Koopa Kingdom. When scattered in a settlement, they instill fear and spread rumors, granting you advantage on Charisma checks related to spreading misinformation for 24 hours. However, their very presence can also provoke staunch anti-Bowser factions, forcing you to make a Charisma saving throw or face disadvantage on your interactions with them.",
    "category": "equipment",
    "price": 1000,
    "icon": "📚",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Psych Ops",
      "Obvious Lies"
    ],
    "vendor": "wario_land",
    "shippedBy": "Leaflet Drop Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Psych Ops",
        "rules": "When you scatter the leaflets in a settlement, you gain advantage on Charisma checks related to spreading rumors and misinformation for the next 24 hours. This effect ends when the 24-hour period expires."
      },
      {
        "title": "Obvious Lies",
        "rules": "Anyone who reads these leaflets and successfully makes a DC 10 Insight check is granted advantage on checks to resist intimidation from Koopa officials. This effect lasts until the reader next fails an Insight check, at which point they can no longer gain this advantage."
      }
    ],
    "levelRequirementReason": "This item requires minimal preparation and skill, suitable for any adventurer.",
    "vendorReason": "Wario often deals in items that have a political or social impact on the Mushroom Kingdom, making this bundle one of his offerings.",
    "shippingDetail": "Delivered by airship and dropped from a great height for maximum visual impact.",
    "usage": {
      "activation": "Action",
      "duration": "24 hours or until the effect ends normally",
      "endsWhen": "24 hours after activation, or if the leaflets are destroyed before then",
      "charges": "Unlimited"
    },
    "priceReason": "The high quality of ink and the strategic value of spreading misinformation in a political climate justify this balanced price.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T20:12:02.728096+00:00",
    "aiReviewedAt": "2026-07-23T20:12:02.728096+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_bowser_siege_ladder_rung": {
    "id": "wario_cw_bowser_siege_ladder_rung",
    "name": "Civil War Relic: Bowser Siege Ladder Rung",
    "description": "This scorched metal rung, a relic of the Civil War, bears the indelible marks of countless battles against Peach’s castle. Crafted from sturdy iron and tempered in the fires of war, it still retains a faint warmth that hints at its tumultuous past. The rungs are said to have been used by Bowser's siege forces to breach the castle walls, and they now offer a tangible link to those perilous days. Grip it tightly during a climb for advantage on Athletics checks; hold it too long and you'll feel the heat of the battlefield in your hands.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪜",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Climber’s Grip",
      "Breach Memory"
    ],
    "vendor": "wario_land",
    "shippedBy": "Siege Scrap Salvage",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Climber’s Grip",
        "rules": "While carrying this rung, you gain advantage on Athletics checks made to climb. This effect lasts until the end of your next turn."
      },
      {
        "title": "Breach Memory",
        "rules": "Once per day, as a bonus action, you can grant yourself +1 to a single Strength check or saving throw related to breaching defenses (such as breaking down doors). The use ends when you complete the check or save."
      }
    ],
    "levelRequirementReason": "The rung's power is accessible to all, reflecting its humble but formidable origins.",
    "vendorReason": "Wario Land specializes in collecting and selling relics from various conflicts, making this rung a fitting addition to his inventory.",
    "shippingDetail": "Ships via Siege Scrap Salvage; delivery may take longer due to the item's size and fragility.",
    "usage": {
      "activation": "Bonus action for Breach Memory, passive effect while carrying during climb checks.",
      "duration": "Instantaneous; lasts until end of next turn for Climber’s Grip. Ends when used or discarded.",
      "endsWhen": "After you complete the check or save (for Breach Memory) or at the start of your next turn (for Climber’s Grip).",
      "charges": "Unlimited, but only one use per day for Breach Memory."
    },
    "priceReason": "The rung's historical significance and unique abilities justify its price in the market.",
    "priceOriginal": 5600,
    "priceReviewedAt": "2026-07-23T20:12:31.477702+00:00",
    "aiReviewedAt": "2026-07-23T20:12:31.477702+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_castle_sewer_key": {
    "id": "wario_cw_castle_sewer_key",
    "name": "Civil War Relic: Castle Sewer Key",
    "description": "The Civil War Relic: Castle Sewer Key is a tarnished iron key that feels as if it has been through countless battles. Its teeth are bent into odd, non-standard patterns, clearly custom-forged for a purpose only known to its maker. It’s said to open one of Princess Peach’s secret escape routes within the ancient castle walls, and indeed, it can unlock hidden grates and tunnels with ease. The key radiates an olfactory reminder of the sewers it has traversed, giving anyone nearby a hint at its grim origin.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗝️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Sewer Savvy",
      "Emergency Access"
    ],
    "vendor": "wario_land",
    "shippedBy": "Smelly Parcel",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Sewer Savvy",
        "rules": "When you use an action to search for hidden doors, grates, or sewer accesses within castles or cities, you have advantage on the check. Additionally, once per short rest, the key can be used to open a conveniently located maintenance hatch or sewer grate that is locked."
      },
      {
        "title": "Emergency Access",
        "rules": "You gain a +1 bonus to initiative rolls when in a castle or city, allowing you to react more quickly during emergencies. This effect lasts until the end of your next short rest."
      }
    ],
    "levelRequirementReason": "The key’s intricate design and historical significance make it a challenge even for seasoned adventurers.",
    "vendorReason": "Wario has a vast collection of relics from various wars, including this one-of-a-kind item.",
    "shippingDetail": "The package arrives with a distinct odor, matching the key’s filth aura.",
    "usage": {
      "activation": "Action or Reaction (for Sewer Savvy); Passive for Emergency Access",
      "duration": "Instantaneous; lasts until end of next short rest for Emergency Access",
      "endsWhen": "Ends at the start of your next long rest",
      "charges": "Unlimited, but only one use per day for Sewer Savvy"
    },
    "priceReason": "The key’s historical importance and unique functionality justify its price.",
    "priceOriginal": 5900,
    "priceReviewedAt": "2026-07-23T20:12:16.467912+00:00",
    "aiReviewedAt": "2026-07-23T20:12:16.467912+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_chain_chomp_collar": {
    "id": "wario_cw_chain_chomp_collar",
    "name": "Civil War Relic: Chain Chomp Restraint Collar",
    "description": "The Civil War Relic: Chain Chomp Restraint Collar is a heavy, rusted collar with a chain that gleams like sharpened teeth. Crafted from ancient iron infused with the spirit of a tamed Chomp, it bears the scars of countless battles. This relic can be slammed into the ground to create a 10 ft radius zone where creatures feel ‘pulled’ as they pass through, and it grants you advantage in calming aggressive beasts.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛓️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Anchor Point",
      "Beast Tamer"
    ],
    "vendor": "wario_land",
    "shippedBy": "Chomp-Proof Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Anchor Point",
        "rules": "As an action, slam the collar into the ground to create a 10 ft radius zone where Large or smaller creatures treat the area as difficult terrain. They are ‘pulled’ and must make a Strength save (DC 15) or be knocked prone within the area for 1 minute. You can use this feature once per long rest."
      },
      {
        "title": "Beast Tamer",
        "rules": "While wearing the collar, you have advantage on Animal Handling checks with aggressive creatures that are bound by chains or similar restraints."
      }
    ],
    "levelRequirementReason": "The relic's ancient magic is potent but not overwhelming; it can be wielded by adventurers of any level.",
    "vendorReason": "Wario Land has a deep connection to the relics and artifacts from his lands, making him an ideal vendor for such items.",
    "shippingDetail": "The Chomp-Proof Crate ensures safe delivery by cushioning the collar with soft foam and reinforcing it against sharp teeth.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per use",
      "endsWhen": "Ends when the creature makes a successful save or after 1 minute, whichever comes first",
      "charges": "Once per long rest"
    },
    "priceReason": "The price reflects both its historical significance and the raw materials needed to craft such an enchanted relic.",
    "priceOriginal": 5900,
    "priceReviewedAt": "2026-07-23T20:12:33.264053+00:00",
    "aiReviewedAt": "2026-07-23T20:12:33.264053+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_coinage_debasement_mold": {
    "id": "wario_cw_coinage_debasement_mold",
    "name": "Civil War Relic: Coinage Debasement Mold",
    "description": "This ancient mold, encrusted with tarnished gold and a 'W' insignia, was crafted during the Civil War to stretch scarce gold supplies. With this relic, a skilled blacksmith can produce 50 gp worth of counterfeit coins in an hour, passing inspection only if scrutinized closely (Investigation DC 18). Overuse risks economic turmoil; local prices may fluctuate unpredictably or legal troubles ensue. Alternatively, once per week, the mold can refine 50 gp of mixed coins into pure gold, ensuring no suspicion or scandal.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪙",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Forgery",
      "Economic Instability"
    ],
    "vendor": "wario_land",
    "shippedBy": "Mint Condition Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Forgery",
        "rules": "Activates on a bonus action. Requires 1 hour and 25 gp of base metal to produce 50 gp worth of fake coins that pass casual inspection (Investigation DC 18). The use ends when the task is completed or if discovered."
      },
      {
        "title": "Economic Instability",
        "rules": "If overused, local economies may react. DM may adjust prices or cause legal trouble after three uses. Ends once a week has passed without further misuse."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of metallurgy and the ability to work quickly.",
    "vendorReason": "Wario Land specializes in historical artifacts, including those with a dubious past like this one.",
    "shippingDetail": "Delivered securely via trusted courier, ensuring the mold arrives pristine and ready for use.",
    "usage": {
      "activation": "Bonus action to activate, or once per week passively refines coins.",
      "duration": "Instantaneous for counterfeit production; passive effect until task is complete or detected. Refining coins ends weekly cycle.",
      "endsWhen": "Discovered, completed, or when a week passes without misuse.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price for a historically significant and potentially dangerous item.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T20:12:33.260053+00:00",
    "aiReviewedAt": "2026-07-23T20:12:33.260053+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_dry_bones_reconstruction_kit": {
    "id": "wario_cw_dry_bones_reconstruction_kit",
    "name": "Civil War Relic: Dry Bones Reconstruction Kit",
    "description": "The Civil War Relic: Dry Bones Reconstruction Kit is a worn canvas roll of tools crafted by Koopa necro-engineers. The kit's leather straps and rusted iron implements are said to have seen action in ancient battles. This relic can animate a single, harmless CR 1/4 skeletal minion from a pile of humanoid bones over the course of 10 minutes. It also grants advantage on checks related to understanding or dismantling undead constructs. Each use, however, taints your soul, and after three uses, good-aligned creatures will sense an aura of decay around you, granting them disadvantage on Persuasion checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦴",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Animated Skeleton",
      "Macabre Tinkering"
    ],
    "vendor": "wario_land",
    "shippedBy": "Bone Bundle Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Animated Skeleton",
        "rules": "Activates as a bonus action over 10 minutes. Targets a pile of humanoid bones, animating a single CR 1/4 skeletal minion that obeys the user for 1 hour. The effect ends if the skeleton is destroyed or the user dismisses it."
      },
      {
        "title": "Macabre Tinkering",
        "rules": "Grants advantage on checks to understand or dismantle undead constructs, including animated skeletons and other necromantic devices. This bonus lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 7 due to its complex mechanics and the potential for grave consequences.",
    "vendorReason": "Wario advertises this eco-friendly tool, making it a fitting addition to his product line.",
    "shippingDetail": "Ships via Bone Bundle Express; delivery takes 2 days from Wario Land.",
    "usage": {
      "activation": "Bonus action over 10 minutes for the Animated Skeleton effect.",
      "duration": "The animated skeleton obeys until dismissed or destroyed. Advantage on checks lasts until your next turn.",
      "endsWhen": "Destroyed, dismissed, or when its duration ends (1 hour).",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP as it offers unique and useful effects within the game mechanics.",
    "priceOriginal": 7300,
    "priceReviewedAt": "2026-07-23T20:12:50.042923+00:00",
    "aiReviewedAt": "2026-07-23T20:12:50.042923+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_fallen_kamek_hat": {
    "id": "wario_cw_fallen_kamek_hat",
    "name": "Civil War Relic: Fallen Kamek Hat",
    "description": "The Civil War Relic: Fallen Kamek Hat, a scorched blue Magikoopa hat with stars that glow faintly like embers in twilight, is said to have once belonged to Kamek himself during his brief allegiance to Bowser. Crafted from arcane-infused fabric and charred by the fires of war, it whispers tales of forgotten battles and lost magic. Wearers can draw upon its cursed legacy, gaining a +1 bonus to spell attack rolls, but at the cost of potential psychic harm if fate is unkind.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎩",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Arcane Focus",
      "Memory of War"
    ],
    "vendor": "wario_land",
    "shippedBy": "Spellbound Satchel",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Arcane Focus",
        "rules": "While wearing this hat, you gain a +1 bonus to spell attack rolls. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Memory of War",
        "rules": "Once per long rest, you may reroll one failed Arcana or History check related to war magic. You must use the result of the second roll, even if it is worse."
      }
    ],
    "levelRequirementReason": "The hat's arcane power and cursed nature require a proficient spellcaster capable of commanding war magic.",
    "vendorReason": "Wario Land has connections to the underground trade in magical relics, making it plausible for him to sell such an item.",
    "shippingDetail": "The hat is delivered by a trusted courier who ensures its arrival through a series of arcane rituals, safeguarding against potential interference from Bowser's loyalists.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of your next short or long rest.",
      "endsWhen": "The hat is removed or you complete a short or long rest.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "Balanced to reflect the item's cursed nature and limited utility within its effects while maintaining its rare status.",
    "priceOriginal": 7700,
    "priceReviewedAt": "2026-07-23T20:13:05.090819+00:00",
    "aiReviewedAt": "2026-07-23T20:13:05.090819+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_fire_bro_censer": {
    "id": "wario_cw_fire_bro_censer",
    "name": "Civil War Relic: Fire Bro’s Censer",
    "description": "The Civil War Relic: Fire Bro’s Censer is a tarnished brass incense burner that once belonged to a battlefield incense master. Its lid bears intricate engravings of fortifications, and when opened, it releases a faint, acrid smoke that was said to mask the pungent scent of burning war materials. Even unlit, it gives off an eerie glow, hinting at its ancient power. When lit, it fills a 10-foot radius with a noxious mist that makes enemies cough and lose their edge in combat.",
    "category": "equipment",
    "price": 6500,
    "icon": "🔥",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Battle Incense",
      "Noxious Mist"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shell-Carrier Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Battle Incense",
        "rules": "When activated as an action, you can light the censer for 10 minutes. During this time, all allies within a 10-foot radius gain resistance to fire damage and disadvantage on saving throws against being charmed."
      },
      {
        "title": "Noxious Mist",
        "rules": "The censer continuously emits a noxious mist in a 20-foot cone whenever it is lit. Creatures within the area must succeed on a DC 14 Constitution saving throw or be poisoned for 1 minute, with disadvantage on attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "The complexity of using this relic in battle requires a certain degree of experience.",
    "vendorReason": "Wario Land's extensive network includes historical artifacts from various eras, including the Civil War era.",
    "shippingDetail": "Ships via Shell-Carrier Courier with a two-day delivery time.",
    "usage": {
      "activation": "Action to light; lasts for 10 minutes until extinguished.",
      "duration": "10 minutes, ends when extinguished or at the end of your next long rest.",
      "endsWhen": "Extinguished manually or at the end of a long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Reflects its historical significance and battlefield utility, making it valuable but not overpowered.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T20:12:51.639908+00:00",
    "aiReviewedAt": "2026-07-23T20:12:51.639908+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_goomba_minefield_sign": {
    "id": "wario_cw_goomba_minefield_sign",
    "name": "Civil War Relic: 'Danger – Goomba Minefield' Sign",
    "description": "The Civil War Relic: 'Danger – Goomba Minefield' Sign is a weathered wooden sign, its splintered edges still tinged with remnants of past battles. It bears the silhouette of a Goomba and the words 'Danger – Goomba Minefield'. The sign's surface is riddled with shrapnel from long-forgotten artillery and adorned with the tiny footprints of the very goombas it warns against. When carried, it grants you heightened awareness of ground-based traps, and planting it near a trap gives nearby allies a chance to avoid disaster.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚠️",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Trap Awareness",
      "Morbid Warning"
    ],
    "vendor": "wario_land",
    "shippedBy": "Rubble & Relics Co.",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Trap Awareness",
        "rules": "While carrying this sign, you gain advantage on Perception checks to spot ground-based traps. This effect lasts for the duration of your concentration (up to 10 minutes)."
      },
      {
        "title": "Morbid Warning",
        "rules": "Once per day, when you plant the sign near a trap and an ally within 30 feet can see it, that ally gains +2 to their first saving throw against a ground-based trap. The effect ends if the sign is moved or destroyed."
      }
    ],
    "levelRequirementReason": "The relic's historical significance and its utility in identifying traps make it accessible to all adventurers.",
    "vendorReason": "Wario Land specializes in unique and historically significant items from the Mushroom Kingdom, including those with a touch of nostalgia.",
    "shippingDetail": "The sign is shipped carefully wrapped to protect its fragile condition. Delivery may take an additional day due to its delicate nature.",
    "usage": {
      "activation": "Passive effect while carrying; active effect when planting the sign near a trap.",
      "duration": "Concentration up to 10 minutes for Trap Awareness; instantaneous for Morbid Warning.",
      "endsWhen": "The effect ends if you stop concentrating or the sign is moved or destroyed.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This relic offers both passive and active benefits, making it a valuable tool for any adventurer navigating the Mushroom Kingdom's traps.",
    "priceOriginal": 5100,
    "priceReviewedAt": "2026-07-23T20:13:01.805224+00:00",
    "aiReviewedAt": "2026-07-23T20:13:01.805224+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_hammer_bro_wrist_guard": {
    "id": "wario_cw_hammer_bro_wrist_guard",
    "name": "Civil War Relic: Hammer Bro Wrist Guard",
    "description": "The Civil War Relic: Hammer Bro Wrist Guard is a reinforced brass and steel brace, emblazoned with the crest of the Koopa Troop. It bears old tally marks in Koopa script, each representing countless hammer throws endured by its wearer. This relic grants you the precision to throw with deadly accuracy; after every successful hit, you can immediately follow up with an additional thrown weapon attack as a bonus action.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Throwing Master",
      "Hammer Follow-Up"
    ],
    "vendor": "wario_land",
    "shippedBy": "Hammer Hauler",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Throwing Master",
        "rules": "You gain +1 to attack rolls with thrown weapons. This bonus is permanent and does not require activation."
      },
      {
        "title": "Hammer Follow-Up",
        "rules": "Once per short rest, after hitting a target with a thrown weapon, you can immediately make one additional thrown weapon attack as a bonus action (same or different weapon). The target of this follow-up attack must be the same as your previous hit."
      }
    ],
    "levelRequirementReason": "This relic's durability and specific combat prowess are best suited for those who have already proven their mettle in battle.",
    "vendorReason": "Wario, a master of the hammer throw himself, recognizes this relic's value to warriors who require both protection and precision in their arsenal.",
    "shippingDetail": "The Hammer Hauler ensures swift delivery by chariot, arriving within a week from purchase.",
    "usage": {
      "activation": "Bonus action immediately after hitting with a thrown weapon.",
      "duration": "Instantaneous follow-up attack.",
      "endsWhen": "You make the follow-up attack or run out of rests for the day.",
      "charges": "One use per short rest"
    },
    "priceReason": "This relic's rarity, durability, and specific combat-enhancing effects justify its price in Experienced Player XP.",
    "priceOriginal": 6900,
    "priceReviewedAt": "2026-07-23T20:13:17.951902+00:00",
    "aiReviewedAt": "2026-07-23T20:13:17.951902+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_koopa_mortar_fragment": {
    "id": "wario_cw_koopa_mortar_fragment",
    "name": "Civil War Relic: Koopa Mortar Fragment",
    "description": "The Civil War Relic: Koopa Mortar Fragment is a jagged, warm shard of metal that once formed part of a siege mortar used in Bowser's long-ago campaigns. The fragment is stamped with a faded Bowser crest and scorch marks from countless battles. Its wielder can use it to create small explosions, dealing thunder damage to nearby foes, while its Siege Sense grants keen insight into the weaknesses of fortifications.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧱",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Improvise Bombardment",
      "Siege Sense"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shell-Shocked Freight",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Improvise Bombardment",
        "rules": "As an action, you slam the fragment into the ground to create a small blast with a 10-foot radius. This deals 2d6 thunder damage to all creatures within the area (including you). Targets can make a Dexterity saving throw for half damage (DC 13). The relic cracks on a natural roll of 1; after three such cracks, it becomes mundane rubble."
      },
      {
        "title": "Siege Sense",
        "rules": "You gain advantage on checks to identify weak points in walls and fortifications. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This relic is a powerful tool from a bygone era, requiring a seasoned warrior with at least seven levels of experience.",
    "vendorReason": "Wario's Land holds relics and artifacts from various conflicts, including those involving Bowser's henchmen.",
    "shippingDetail": "The relic is carefully packed to prevent further damage during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "On a natural roll of 1, or after three cracks from the Improvise Bombardment effect",
      "charges": "Once per day"
    },
    "priceReason": "This relic's rarity and unique historical significance justify its price in experience points.",
    "priceOriginal": 6100,
    "priceReviewedAt": "2026-07-23T20:13:18.169831+00:00",
    "aiReviewedAt": "2026-07-23T20:13:18.169831+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_koopatrol_shoulder_plate": {
    "id": "wario_cw_koopatrol_shoulder_plate",
    "name": "Civil War Relic: Koopatrol Shoulder Plate",
    "description": "The Civil War Relic: Koopatrol Shoulder Plate is a spiked metal pauldron forged by elite Koopa enforcers during the Great Toad Rebellion. Its surface retains faint impressions of scorched leather and Koopa sweat, hinting at its fiery origins. When worn with medium or heavy armor, it provides +1 AC. Upon command, it can project a blinding flash of light that forces enemies to make a DC 13 Constitution saving throw or be blinded for 1 minute.",
    "category": "equipment",
    "price": 6900,
    "icon": "🛡️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+1 AC while worn",
      "Blinding Flash"
    ],
    "vendor": "wario_land",
    "shippedBy": "Spiked Crate Co.",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "+1 AC while worn",
        "rules": "This effect provides +1 AC when the wearer is equipped with medium or heavy armor. It does not stack with magical armor bonuses."
      },
      {
        "title": "Blinding Flash",
        "rules": "As a bonus action, the wearer can activate this relic to project a blinding flash. Enemies within 30 feet must make a DC 13 Constitution saving throw or be blinded for up to 1 minute. The effect ends if the wearer enters an area of total darkness."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Athletics and at least 6th level to wield this relic effectively.",
    "vendorReason": "Wario Land has a vast collection of artifacts from various conflicts, including relics from the Great Toad Rebellion.",
    "shippingDetail": "Ships via armored courier within a specially reinforced crate to ensure safe delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous; ends if wearer enters total darkness",
      "endsWhen": "The effect ends when the wearer enters an area of total darkness or after one minute, whichever occurs first.",
      "charges": "Unlimited"
    },
    "priceReason": "This relic is considered uncommon and comes with a price tag to reflect its unique historical significance and utility in combat.",
    "priceOriginal": 6900,
    "priceReviewedAt": "2026-07-23T20:13:15.938662+00:00",
    "aiReviewedAt": "2026-07-23T20:13:15.938662+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_lakitu_bombing_chart": {
    "id": "wario_cw_lakitu_bombing_chart",
    "name": "Civil War Relic: Lakitu Bombing Chart",
    "description": "The Civil War Relic: Lakitu Bombing Chart is a crumpled and cloud-stained parchment, its inked maps of Toad Town now faded. It originated from Lakitu's handiwork during the war, filled with smudges and doodles that argue over accuracy. This relic grants you tactical foresight, allowing you to predict enemy movements or artillery ranges with uncanny precision. The chart also holds a dark secret: once per long rest, you can invoke 'Rain of Doom', raining down debris in a 20-foot radius, forcing creatures within to make a DC 13 Dexterity saving throw or take bludgeoning damage from memory echoes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗺️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Aerial Tactician",
      "Rain of Doom"
    ],
    "vendor": "wario_land",
    "shippedBy": "Cloud Courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Aerial Tactician",
        "rules": "You gain advantage on Intelligence (History) checks to predict enemy movements or artillery ranges. This effect is passive and does not require an action."
      },
      {
        "title": "Rain of Doom",
        "rules": "Once per long rest, you can call in a 'remembered strike' – a 20-foot radius area where all creatures within must make a DC 13 Dexterity saving throw or take 2d6 bludgeoning damage. The use ends when you cast another spell of 1st level or higher."
      }
    ],
    "levelRequirementReason": "This relic requires you to have reached at least level 7 to handle its historical significance and tactical value.",
    "vendorReason": "Wario Land, a former soldier himself, carries this relic as a tribute to the war and sells it for those who seek insight into strategic warfare.",
    "shippingDetail": "Delivered by the Cloud Courier, known for its swift and reliable service across the Mushroom Kingdom.",
    "usage": {
      "activation": "Instantaneous (no action required)",
      "duration": "Instantaneous; ends when you cast another spell of 1st level or higher",
      "endsWhen": "When you cast another spell of 1st level or higher",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the historical value and tactical utility, balanced to ensure it is a valuable yet reasonable addition to any adventurer's arsenal.",
    "priceOriginal": 6400,
    "priceReviewedAt": "2026-07-23T20:13:24.122730+00:00",
    "aiReviewedAt": "2026-07-23T20:13:24.122730+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_magikoopa_field_manual": {
    "id": "wario_cw_magikoopa_field_manual",
    "name": "Civil War Relic: Magikoopa Field Manual",
    "description": "The Civil War Relic: Magikoopa Field Manual is a scorched tome bound in leather, its pages yellowed from age. The margins are filled with notes and diagrams of forgotten battlefield magic, annotated in Kamek's neat hand. This ancient manual whispers spells as you study it, unlocking tactical secrets that have been lost to time. Each page crackles with latent power, a testament to the Koopa's ingenuity in war.",
    "category": "equipment",
    "price": 1000,
    "icon": "📘",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Tactical Spells",
      "Arcane Drills"
    ],
    "vendor": "wario_land",
    "shippedBy": "Spellbook Salvage",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Tactical Spells",
        "rules": "As an action once per long rest, you may cast a 1st-level spell from your spellbook as if it were prepared at the next higher level. The spell must be known and not on your current spell list. If the spell has a material component, you can use this item to provide that component."
      },
      {
        "title": "Arcane Drills",
        "rules": "You gain advantage on Arcana checks related to Koopa magic or battlefield enchantments. Additionally, once per short rest, you may spend 1 minute studying the manual to gain proficiency in one tool of your choice (such as a wand or staff)."
      }
    ],
    "levelRequirementReason": "The manual requires a minimum level due to its arcane nature and the complexity of the spells it reveals.",
    "vendorReason": "Wario's Land specializes in items from the Civil War era, making this relic a fitting addition to their inventory.",
    "shippingDetail": "This item is shipped by Spellbook Salvage, known for its timely and reliable deliveries of ancient magical artifacts.",
    "usage": {
      "activation": "As an action or bonus action (Tactical Spells), as a special study session (Arcane Drills).",
      "duration": "Instantaneous (Tactical Spells); lasts until the end of your next turn (Arcane Drills).",
      "endsWhen": "The effect ends when you cast another spell from this manual, or if you spend more than 10 minutes studying it without achieving proficiency.",
      "charges": "Unlimited"
    },
    "priceReason": "This relic is priced at 1000 XP due to its historical significance and the power of the spells it reveals, making it a valuable but not overpriced addition to any spellcaster's arsenal.",
    "priceOriginal": 7400,
    "priceReviewedAt": "2026-07-23T20:13:51.699357+00:00",
    "aiReviewedAt": "2026-07-23T20:13:51.699357+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_mario_field_commanders_whistle": {
    "id": "wario_cw_mario_field_commanders_whistle",
    "name": "Civil War Relic: Mario's Field Commander Whistle",
    "description": "The Civil War Relic: Mario's Field Commander Whistle is a red-and-gold brass instrument, its surface marred by distinctive plumber-sized bite marks. Crafted for valorous last-stand charges, it has seen action in critical battles, rallying troops with a blast that echoes the spirit of its namesake. The whistle's origin dates back to when Mario was still learning his craft as a field commander, and Wario claims it was dropped on purpose, though its true history remains a mystery.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎺",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Battle Rally",
      "Sound of Hope"
    ],
    "vendor": "wario_land",
    "shippedBy": "Coin-Operated Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Battle Rally",
        "rules": "As an action, the wielder can blow the whistle to grant all allies within 30 feet advantage on their next attack rolls until the start of your next turn. The effect requires no special material or verbal components."
      },
      {
        "title": "Sound of Hope",
        "rules": "Allies who hear the whistle gain advantage on their next saving throw against fear effects, but only once per short rest. This effect does not require an action from the wielder."
      }
    ],
    "levelRequirementReason": "This relic is accessible to all adventurers regardless of level, as it serves a simple yet crucial purpose in battle.",
    "vendorReason": "Wario often sells relics that have historical or personal significance, and this whistle certainly fits the bill.",
    "shippingDetail": "The courier ensures safe delivery but cannot guarantee against theft in war-torn regions.",
    "usage": {
      "activation": "Action",
      "duration": "Until the start of your next turn, or until expended",
      "endsWhen": "Used again on a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The relic's historical value and battlefield utility justify its price in terms of experience points.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T20:13:33.638874+00:00",
    "aiReviewedAt": "2026-07-23T20:13:33.638874+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_mario_missing_person_poster": {
    "id": "wario_cw_mario_missing_person_poster",
    "name": "Civil War Relic: Mario Missing Person Poster",
    "description": "The Civil War Relic: Mario Missing Person Poster is a tattered, hand-drawn flyer from the darkest days of the conflict, featuring a familiar plumber in need of rescue. Its faded ink and creased paper tell tales of hope and desperation, with 'HAVE YOU SEEN THIS PLUMBER?' written across it. The poster's corner bears a scribbled note: 'MARIO OWES ME 20 COINS,' a relic of Wario’s relentless pursuit of his rival.",
    "category": "equipment",
    "price": 1000,
    "icon": "📄",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Symbol of Hope",
      "Rallying Icon"
    ],
    "vendor": "wario_land",
    "shippedBy": "Flyer Fold",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Symbol of Hope",
        "rules": "When hung in a base, this poster grants all resting allies within the area +1 to their next saving throw against fear or despair. This effect lasts until the start of the next short or long rest."
      },
      {
        "title": "Rallying Icon",
        "rules": "Once per week, you may present it to gain advantage on one Persuasion check aimed at unifying splintered factions. The use of this ability is limited once per week."
      }
    ],
    "levelRequirementReason": "This item’s effect is useful for a wide range of characters, making level 1 appropriate.",
    "vendorReason": "Wario personally oversees the sale of this relic, commemorating his rivalry with Mario and the events of the Civil War.",
    "shippingDetail": "Shipped by trusted messengers who deliver the poster within a week, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect when hung; active once per week for Rallying Icon",
      "duration": "Until next short or long rest; weekly once per week",
      "endsWhen": "Rest ends or weekly use limit is reached",
      "charges": "Unlimited uses"
    },
    "priceReason": "The poster's historical significance and the unique benefits it offers make it a valuable, yet balanced, addition to any adventurer’s kit.",
    "priceOriginal": 4900,
    "priceReviewedAt": "2026-07-23T20:13:47.849698+00:00",
    "aiReviewedAt": "2026-07-23T20:13:47.849698+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_mushroom_barricade_plank": {
    "id": "wario_cw_mushroom_barricade_plank",
    "name": "Civil War Relic: Mushroom Barricade Plank",
    "description": "This weathered wooden plank bears the faded slogans 'TOADS RISE' and 'NO MORE CASTLES', relics of a bygone era when Toad Town stood firm against the Mushroom Kingdom's mightiest threats. Crafted from sturdy oak, it retains its integrity despite years of battle. Deploy this relic as an action to provide half cover (+2 AC and +1 to Dexterity saving throws) for one Medium or smaller creature behind it. In times of peril, it offers steadfast support, granting allies a fighting chance against shoves and knocks prone.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪵",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Portable Cover",
      "Hold the Line"
    ],
    "vendor": "wario_land",
    "shippedBy": "Rubble & Relics Co.",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Portable Cover",
        "rules": "As an action, you can deploy this plank to provide half cover (+2 AC and +1 to Dexterity saving throws) for one Medium or smaller creature behind it. The effect lasts until the end of your next turn."
      },
      {
        "title": "Hold the Line",
        "rules": "Allies within 5 feet of you while behind this plank gain a +1 bonus on saving throws against effects that would shove them or knock them prone. This benefit persists for 1 minute, until you use an action to deploy it again."
      }
    ],
    "levelRequirementReason": "This relic is accessible to all adventurers who wish to carry a piece of Toad Town's history.",
    "vendorReason": "Wario Land, being a collector and protector of Wario's past, offers this item as a way for players to connect with the lore of the Mushroom Kingdom.",
    "shippingDetail": "The plank is carefully packed in sturdy crates to ensure its safe arrival. Shipping may take up to one week due to its fragile nature.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn (Portable Cover), or for 1 minute (Hold the Line)",
      "endsWhen": "The effect ends when you use an action to deploy it again, or if the plank is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the historical significance and craftsmanship required for this relic.",
    "priceOriginal": 5100,
    "priceReviewedAt": "2026-07-23T20:13:51.593840+00:00",
    "aiReviewedAt": "2026-07-23T20:13:51.593840+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_mushroom_forest_camo_cloak": {
    "id": "wario_cw_mushroom_forest_camo_cloak",
    "name": "Civil War Relic: Mushroom Forest Camo Cloak",
    "description": "The Civil War Relic: Mushroom Forest Camo Cloak is a patchwork cloak dyed in the greens and browns of the war-torn Mushroom Forest, its fabric woven from remnants of old military uniforms. This relic not only blends into the forest's verdant chaos but also repels the region’s virulent plant spores. However, outside these dense woods, you become an easy target, standing out like a beacon in open towns or arid deserts.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Forest Blend",
      "Spore-Resistant Weave"
    ],
    "vendor": "wario_land",
    "shippedBy": "Camouflage Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Forest Blend",
        "rules": "Activates as a bonus action. While within a forest, jungle, or overgrown ruin, the wearer gains advantage on Dexterity (Stealth) checks. This effect lasts until the end of your next turn after leaving such terrain."
      },
      {
        "title": "Spore-Resistant Weave",
        "rules": "Activates passively while in the Mushroom Forest. The wearer has advantage on saving throws against natural plant spores and pollen. This protection is only active within the forest boundaries."
      }
    ],
    "levelRequirementReason": "The cloak's camouflage properties are accessible to all adventurers, making it a versatile tool for any journey.",
    "vendorReason": "Wario Land specializes in relics and artifacts from various eras, including the Civil War era, which makes this relic an excellent addition to his inventory.",
    "shippingDetail": "Ships via Camouflage Crate with expedited delivery within a week of purchase.",
    "usage": {
      "activation": "Passive and bonus action activation.",
      "duration": "Until the end of your next turn after leaving forest terrain or natural spore exposure.",
      "endsWhen": "Effect ends when you leave forest or spore-exposed areas.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The cloak's rarity and the specific benefits it provides, including passive protection against natural hazards, justify its fair value in XP.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T20:14:03.440057+00:00",
    "aiReviewedAt": "2026-07-23T20:14:03.440057+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_paper_bomb_recipe": {
    "id": "wario_cw_paper_bomb_recipe",
    "name": "Civil War Relic: Paper Bomb Recipe Scroll",
    "description": "The Civil War Relic: Paper Bomb Recipe Scroll is a tattered scroll containing origami instructions for explosive devices. The ink is smudged, and the paper is brittle with notes in the margins about 'cheap wartime paper.' With this recipe, you can craft explosive charms that deal 2d4 force damage within a 5-foot radius when triggered (Dexterity saving throw DC 13 for half). Clever Fold grants advantage on Sleight of Hand checks to hide these deadly devices. However, if mishandled or critically failed during use, one detonates in your space due to its Fragile nature.",
    "category": "equipment",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Paper Bomb",
      "Clever Fold"
    ],
    "vendor": "wario_land",
    "shippedBy": "Folded Parcel",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Paper Bomb",
        "rules": "Activating the recipe requires spending 30 minutes and 25 gp of materials. Once created, you can maintain up to three Paper Bombs at a time. Each bomb deals 2d4 force damage in a 5-foot radius when triggered (Dexterity saving throw DC 13 for half). The bombs are fragile and will detonate in your space if critically failed during handling."
      },
      {
        "title": "Clever Fold",
        "rules": "You gain advantage on Sleight of Hand checks to hide the Paper Bombs. This effect lasts until you use it again or expend a charge."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to handle the explosive nature and complexity of the origami instructions.",
    "vendorReason": "Wario Land, with his extensive network in underground markets, sells this relic due to its historical significance and demand among collectors and saboteurs.",
    "shippingDetail": "The Folded Parcel ensures the safe delivery of the delicate scroll without risk of detonation during transit.",
    "usage": {
      "activation": "Crafting Paper Bombs requires spending 30 minutes and 25 gp in materials. Once crafted, they can be maintained up to three at a time.",
      "duration": "Instantaneous",
      "endsWhen": "Detonation upon failure or critical success during handling",
      "charges": "Unlimited charges"
    },
    "priceReason": "The price reflects the historical value and complexity of crafting such deadly devices, along with the required materials.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T20:14:07.486129+00:00",
    "aiReviewedAt": "2026-07-23T20:14:07.486129+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_peach_balcony_rail_fragment": {
    "id": "wario_cw_peach_balcony_rail_fragment",
    "name": "Civil War Relic: Peach’s Balcony Rail Fragment",
    "description": "A fragment of peach-colored oak, once part of the balcony where Princess Peach delivered speeches that swayed the hearts of her people. This relic now bears the scars of battles past, its surface cracked and weathered by time. Carried to the battlefield or used in a speech, it whispers tales of valor and resilience, inspiring those who hold it with a spark of determination (one use, d6). Nobles who catch sight may be moved to nostalgia or critique, affecting their social interactions (+1 or -1 depending on context).",
    "category": "equipment",
    "price": 1000,
    "icon": "🧱",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Inspiration of the Past",
      "Melancholic Appeal"
    ],
    "vendor": "wario_land",
    "shippedBy": "Palace Rubble Movers",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Inspiration of the Past",
        "rules": "When used during a speech in view of this relic, grant up to 6 creatures within earshot inspiration (one use per long rest). The effect lasts until the end of the next short or long rest."
      },
      {
        "title": "Melancholic Appeal",
        "rules": "Nobles who see it may become melancholic. On a successful DC 13 Charisma saving throw, they are unaffected; otherwise, their attitude towards you shifts by +1 or -1 depending on whether the relic is used to appeal to nostalgia or critique."
      }
    ],
    "levelRequirementReason": "Requires at least level 7 to handle the relic's historical weight and emotional impact.",
    "vendorReason": "Wario, as a master of relics and memorabilia from various eras, is entrusted with such treasures.",
    "shippingDetail": "Shipped within the week by the Palace Rubble Movers, delivered in pristine condition.",
    "usage": {
      "activation": "On a bonus action during a speech or when held and invoked.",
      "duration": "Until the end of the next short rest (Inspiration) or until the relic is no longer visible (Melancholic Appeal).",
      "endsWhen": "The effect ends if the speaker stops speaking or the relic is out of sight for more than 10 minutes.",
      "charges": "Unlimited, but only one use per long rest."
    },
    "priceReason": "Reflects its historical significance and emotional resonance in the narrative.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T20:14:24.374519+00:00",
    "aiReviewedAt": "2026-07-23T20:14:24.374519+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_peach_last_edict_scroll": {
    "id": "wario_cw_peach_last_edict_scroll",
    "name": "Civil War Relic: Peach’s Last Edict (Fragment)",
    "description": "This singed fragment of a royal decree is the last testament to Princess Peach’s reign. The parchment, once crisp and official, now bears the marks of war. Carried by legitimate claimants to the throne, it whispers the truth about the crown's true heir. Gaining its favor grants you a single chance per day to present it during a Persuasion check against those who still revere the crown’s legacy. In times of dire need, the scroll offers a second chance at life; if you roll a natural 1 on a death save while holding it, you may instead treat it as a successful result (once per campaign).",
    "category": "equipment",
    "price": 1000,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Royal Authority",
      "Lingering Life"
    ],
    "vendor": "wario_land",
    "shippedBy": "Silk Scroll Case",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Royal Authority",
        "rules": "At the start of each day, you can present this fragment to gain advantage on a single Persuasion check with someone who still respects the crown’s legacy. This effect can only be used once per day."
      },
      {
        "title": "Lingering Life",
        "rules": "If you roll a natural 1 on a death save while carrying this fragment, you may instead treat it as a successful result (once per campaign)."
      }
    ],
    "levelRequirementReason": "This relic is best used by those who have proven their worth and are prepared to face the challenges of reclaiming the throne.",
    "vendorReason": "Wario, having obtained the rest of the scroll, now sells fragments for the right price.",
    "shippingDetail": "Delivered with utmost secrecy and care to ensure its safe arrival.",
    "usage": {
      "activation": "Once per day at dawn, presented during a Persuasion check.",
      "duration": "Instantaneous effect; lasts until the end of your next turn.",
      "endsWhen": "The effect ends when used or if you lose possession of it.",
      "charges": "One use per day"
    },
    "priceReason": "This relic is rare and valuable, offering a powerful tool for those who seek to restore the crown.",
    "priceOriginal": 7600,
    "priceReviewedAt": "2026-07-23T20:14:10.153562+00:00",
    "aiReviewedAt": "2026-07-23T20:14:10.153562+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_piranha_trench_spade": {
    "id": "wario_cw_piranha_trench_spade",
    "name": "Civil War Relic: Piranha Trench Spade",
    "description": "The Civil War Relic: Piranha Trench Spade is a rusted spade with a handle worn smooth from countless hands. Its blade bears the unmistakable bite marks of Piranha Plants that once clung to it, now serving as a grim reminder of its deadly past. This relic not only aids in excavation but also in strategic planning, granting you an edge when setting traps or fortifications. The spade's unique origin grants you a special connection with nature itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Trench Digger",
      "Ambush Planner"
    ],
    "vendor": "wario_land",
    "shippedBy": "Frontline Tools Wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Trench Digger",
        "rules": "As an action, you can use this spade to dig twice as fast when excavating soil. This effect lasts for the duration of your turn."
      },
      {
        "title": "Ambush Planner",
        "rules": "Once per short rest, you gain advantage on checks made to set up field fortifications or camouflaged traps. This effect can be used only once per day."
      }
    ],
    "levelRequirementReason": "This relic is accessible to all adventurers due to its common rarity and straightforward mechanics.",
    "vendorReason": "Wario Land, being a seasoned collector of historical artifacts, regularly stocks items with unique origins like the Piranha Trench Spade.",
    "shippingDetail": "Delivered by trusted couriers who ensure safe and timely arrival.",
    "usage": {
      "activation": "As an action or bonus action to dig, or once per short rest for the ambush planner effect.",
      "duration": "Trench Digger: Instantaneous. Ambush Planner: Once per short rest, lasting until the end of your next long rest.",
      "endsWhen": "Use limit reached; you can only use each effect once per day.",
      "charges": "Unlimited"
    },
    "priceReason": "The relic's common rarity and balanced effects justify its price, ensuring it remains a valuable but not overpowered tool for any adventurer.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-23T20:14:18.888109+00:00",
    "aiReviewedAt": "2026-07-23T20:14:18.888109+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_portable_green_pipe_section": {
    "id": "wario_cw_portable_green_pipe_section",
    "name": "Civil War Relic: Portable Green Pipe Section",
    "description": "The Civil War Relic: Portable Green Pipe Section is a waist-high green pipe segment, once part of an emergency warp route that connected crucial supply lines. Crafted from durable, rust-resistant iron and copper, it bears faint scratches from decades of use. This relic can be dropped to create an instant portal, allowing you to step through in a bonus action for a warp-hop across time and space.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛞",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Warp Hop",
      "Static Exit"
    ],
    "vendor": "wario_land",
    "shippedBy": "Plumbing Salvage Union",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Warp Hop",
        "rules": "As a bonus action, you may drop the pipe and step into it to emerge in any unoccupied space within 60 feet that you can see. This effect has no range or save DC requirements. You can use this once per long rest."
      },
      {
        "title": "Static Exit",
        "rules": "The pipe remains in place where you exit until picked back up as an action. If not removed, it reverts to a normal green pipe after 24 hours."
      }
    ],
    "levelRequirementReason": "This relic requires the user to have basic knowledge of the warp route's mechanics and is only accessible to those who have experienced significant challenges.",
    "vendorReason": "Wario Land, being a seasoned collector of historical relics, holds this pipe as an artifact from his travels across various realms.",
    "shippingDetail": "The relic is carefully packed and shipped via the Union's reliable courier service. Delivery typically takes one week.",
    "usage": {
      "activation": "Bonus action to drop the pipe and step through it.",
      "duration": "Instantaneous, lasting until you exit or pick up the pipe.",
      "endsWhen": "The effect ends when you exit the portal or if the pipe is picked back up as an action.",
      "charges": "Once per long rest"
    },
    "priceReason": "This relic, while not overly powerful, provides a unique and historically significant utility that justifies its fair price in experience points.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T20:14:22.758386+00:00",
    "aiReviewedAt": "2026-07-23T20:14:22.758386+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_rebel_supply_crate_marker": {
    "id": "wario_cw_rebel_supply_crate_marker",
    "name": "Civil War Relic: Rebel Supply Crate Marker",
    "description": "The Civil War Relic: Rebel Supply Crate Marker is a glowing mushroom emblem once used to mark hidden Toad rebel caches. Crafted from rusted iron and imbued with the spirit of long-dead soldiers, it faintly glows when activated. The relic's origin lies in the heart of the battlefield, where it was used by cunning rebels to find and defend their supplies. Now, its glow can still be seen by those who know how to wield it, pulling them toward nearby caches within a mile radius.",
    "category": "equipment",
    "price": 1000,
    "icon": "📍",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Cache Sense",
      "Glowing Target"
    ],
    "vendor": "wario_land",
    "shippedBy": "Underground Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Cache Sense",
        "rules": "Once per long rest, the user can activate the marker to faintly pull toward the nearest hidden stash of mundane supplies within 1 mile (if any). This effect is instantaneous and does not require an action."
      },
      {
        "title": "Glowing Target",
        "rules": "While active, the relic emits dim green light in a 10 ft radius. It provides disadvantage on Dexterity (Stealth) checks within its area of effect. The glow persists for 1 hour from activation and does not require any action to maintain."
      }
    ],
    "levelRequirementReason": "This relic requires the user to have a basic understanding of battlefield tactics, which is generally acquired by third level.",
    "vendorReason": "Wario Land deals in various relics and artifacts from the Mushroom Kingdom's history, including those from the Civil War era.",
    "shippingDetail": "Ships via Underground Courier, known for its discretion and reliability.",
    "usage": {
      "activation": "Passive effect, no activation required once set up.",
      "duration": "1 hour or until the relic is destroyed.",
      "endsWhen": "The duration ends when the user is destroyed or the relic is broken.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This relic's price reflects its historical significance and utility in finding supplies, making it a valuable but not overpowered addition to any adventuring party.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T20:14:26.608399+00:00",
    "aiReviewedAt": "2026-07-23T20:14:26.608399+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_rebel_toad_graffiti_brick": {
    "id": "wario_cw_rebel_toad_graffiti_brick",
    "name": "Civil War Relic: Rebel Toad Graffiti Brick",
    "description": "A chunk of wall bearing a defiant red-painted slogan ‘DOWN WITH CASTLES’, this graffiti brick is a relic from the Civil War era. It’s a fragment of a communal protest, chipped free to serve as an improvised tool for change. Its surface is slightly weathered but still legible, its paint vibrant despite age. This artifact grants you an edge in rallying crowds and can be hurled like a makeshift weapon.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧱",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Slogan of Defiance",
      "Blinding Brick"
    ],
    "vendor": "wario_land",
    "shippedBy": "Rubble Runner",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slogan of Defiance",
        "rules": "When you succeed on a Persuasion check to incite or calm crowds, you gain advantage. This effect lasts until the end of your next turn."
      },
      {
        "title": "Blinding Brick",
        "rules": "As an action, you can throw this brick for 1d6 bludgeoning damage and target one creature within 30 feet. On a critical hit, the target is blinded by dust for 1 minute, requiring a DC 14 Constitution saving throw to end."
      }
    ],
    "levelRequirementReason": "This relic requires no specific level as it’s designed for its use in crowd interactions.",
    "vendorReason": "Wario, the self-proclaimed 'King of Piranha Plants', often sells unique and quirky memorabilia from his travels through time.",
    "shippingDetail": "Delivered with a special delivery note signed by Wario himself, ensuring authenticity.",
    "usage": {
      "activation": "Action or Bonus Action to incite or calm crowds; as an action to throw the brick.",
      "duration": "Instantaneous and lasts until your next turn for Slogan of Defiance; Blinding Brick effect ends at the start of the target's next turn.",
      "endsWhen": "The use is expended when thrown or at the end of a turn.",
      "charges": "Unlimited, as it regenerates with each use."
    },
    "priceReason": "Balanced to be fair-priced, considering its unique historical and utility value.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-23T20:14:35.361191+00:00",
    "aiReviewedAt": "2026-07-23T20:14:35.361191+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_royal_courier_satchel": {
    "id": "wario_cw_royal_courier_satchel",
    "name": "Civil War Relic: Royal Courier Satchel",
    "description": "The Civil War Relic: Royal Courier Satchel is a well-worn leather mailbag, its surface cracked and embossed with intricate patterns from long-lost battles. Crafted in the heat of forges and adorned with secret compartments that can only be accessed by those who know the exact pressure points, it whispers tales of past triumphs and defeats. This relic grants you swift, silent travel through dangerous territories and offers a temporary shield against deceitful interrogations when your cover is challenged.",
    "category": "equipment",
    "price": 1000,
    "icon": "📨",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Swift Travel",
      "Deception Disadvantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Parakoopa Post",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Swift Travel",
        "rules": "While wearing this satchel, you gain +5 ft to your walking speed and advantage on Constitution saving throws to avoid exhaustion from forced marches. This effect lasts for an hour or until you rest."
      },
      {
        "title": "Deception Disadvantage",
        "rules": "When attempting a Deception check to pretend being 'just a civilian', you are at disadvantage unless you can convincingly demonstrate your true identity without triggering suspicion."
      }
    ],
    "levelRequirementReason": "This relic requires a certain level of experience and familiarity with the battlefield to fully utilize its secrets.",
    "vendorReason": "Wario Land, known for his resourcefulness and connections across the Mushroom Kingdom, deals in items that bridge the gap between adventure and survival.",
    "shippingDetail": "Due to its fragile nature, this item is shipped via air mail with special care to ensure it reaches you unharmed.",
    "usage": {
      "activation": "Passive effect upon donning the satchel.",
      "duration": "Lasts until rested or removed.",
      "endsWhen": "Resting or removal of the satchel ends its effects.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "The relic's rarity, historical significance, and unique properties justify this price point in the vendor's inventory.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T20:14:52.335307+00:00",
    "aiReviewedAt": "2026-07-23T20:14:52.335307+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_royal_guard_cape_clasp": {
    "id": "wario_cw_royal_guard_cape_clasp",
    "name": "Civil War Relic: Royal Guard Cape Clasp",
    "description": "The Civil War Relic: Royal Guard Cape Clasp is a golden clasp shaped like a stylized mushroom, once worn by the elite of the royal guard. Its enamel bears a fine crack from a final, telling hit, and its weight feels both ancient and reassuring. This heirloom grants you a noble bearing when needed, bolstering your Charisma (Persuasion) checks with law-abiding citizens and veterans. In moments of dire need, it can save you by allowing you to drop to 1 HP instead of falling unconscious upon taking damage equal to or exceeding your hit point maximum.",
    "category": "equipment",
    "price": 1000,
    "icon": "📿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Noble Bearing",
      "Never Fall"
    ],
    "vendor": "wario_land",
    "shippedBy": "Velvet Box Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Noble Bearing",
        "rules": "While visibly wearing this clasp, you gain +1 to Charisma (Persuasion) checks with law-abiding citizens and veterans of the royal guard. This effect is passive."
      },
      {
        "title": "Never Fall",
        "rules": "As a reaction when reduced to 0 hit points, you can instead drop to 1 hit point. You may use this feature once per long rest, and it cannot be used if you are already at 1 or fewer hit points."
      }
    ],
    "levelRequirementReason": "This relic is a well-known piece of royal history that can be recognized by anyone with even a passing interest in the old regime.",
    "vendorReason": "Wario Land, being a collector of historical artifacts, naturally carries this significant relic from the Civil War era.",
    "shippingDetail": "Ships via Velvet Box Delivery in a specially crafted box to ensure safe arrival.",
    "usage": {
      "activation": "Passive and as a reaction.",
      "duration": "Instantaneous for Never Fall; Noble Bearing is permanent while the clasp is worn visibly.",
      "endsWhen": "You no longer wear it visibly or are reduced to 1 HP or fewer.",
      "charges": "Once per long rest"
    },
    "priceReason": "The relic's historical value and unique features justify its price, making it a significant but balanced addition to any character's collection.",
    "priceOriginal": 6600,
    "priceReviewedAt": "2026-07-23T20:14:39.993056+00:00",
    "aiReviewedAt": "2026-07-23T20:14:39.993056+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_shy_guy_sniper_mask": {
    "id": "wario_cw_shy_guy_sniper_mask",
    "name": "Civil War Relic: Shy Guy Sniper Mask",
    "description": "The Civil War Relic: Shy Guy Sniper Mask is a cracked, long-nosed mask used by rooftop marksmen. Its eyes are slit for focused aim, and it whispers of the valorous skirmishes fought atop city rooftops during the Civil War. This mask grants the wearer advantage on Stealth checks when sniping from cover and allows them to focus their sight, granting +1 to attack rolls with ranged weapons while wearing it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Sniper's Focus",
      "Advantage in Cover"
    ],
    "vendor": "wario_land",
    "shippedBy": "Mask-Crate Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sniper's Focus",
        "rules": "While wearing the mask, you gain a +1 bonus to attack rolls with ranged weapons. This effect lasts until the start of your next turn."
      },
      {
        "title": "Advantage in Cover",
        "rules": "When sniping from cover, you have advantage on Stealth checks. This effect is temporary and resets after each use."
      }
    ],
    "levelRequirementReason": "This mask's effects are subtle but effective for any brave soul looking to improve their marksmanship in a strategic manner.",
    "vendorReason": "Wario Land is known for selling unique and historically significant items, making this relic an ideal addition to his inventory.",
    "shippingDetail": "The mask arrives carefully packed in a special crate with a note from the Shy Guys themselves.",
    "usage": {
      "activation": "Passive effect when wearing the mask; temporary advantage on Stealth checks.",
      "duration": "Until the start of your next turn for attack rolls, or until you stop using it for stealth.",
      "endsWhen": "The effects end when you remove the mask or are no longer in cover.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The historical significance and unique abilities of this relic make it a fair price for players seeking to enhance their sniping skills.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T20:14:40.064564+00:00",
    "aiReviewedAt": "2026-07-23T20:14:40.064564+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_sky_bridge_rope_section": {
    "id": "wario_cw_sky_bridge_rope_section",
    "name": "Civil War Relic: Sky-Bridge Rope Section",
    "description": "This frayed rope segment, a relic from the Civil War era, is forged from hemp and seasoned by years of aerial assault. Its surface is marked with the scars of countless battles, each notch in its length telling a story of daring raids and desperate escapes. The rope retains the scent of clouds, smoke, and fear, a haunting reminder of the sky-bridges that once connected armies across chasms. With this section, you can set up quick riggings for crossing treacherous gaps with ease.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪢",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Sky-Bridge Stabilizer",
      "Quick Rig"
    ],
    "vendor": "wario_land",
    "shippedBy": "Skyhook Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sky-Bridge Stabilizer",
        "rules": "When using this rope to create a bridge or support structure, you can stabilize the setup with a bonus action. This allows the structure to withstand additional weight and strain without snapping, providing crucial stability in precarious situations."
      },
      {
        "title": "Quick Rig",
        "rules": "Once per long rest, you can set up this rope as part of an improvised bridge or rigging in half the normal time, allowing for rapid deployment in emergency scenarios."
      }
    ],
    "levelRequirementReason": "This relic is considered common and requires no specific class or background proficiency.",
    "vendorReason": "Wario Land's extensive network includes scavengers who collect such historical artifacts from various battlefields for resale.",
    "shippingDetail": "Delivered with Skyhook's signature speed, ensuring the relic arrives intact and ready to use.",
    "usage": {
      "activation": "Bonus action or as part of a long rest",
      "duration": "Until destroyed or no longer stable",
      "endsWhen": "Exhausted or destroyed by overloading the rope beyond its capacity",
      "charges": "Unlimited; can be re-established after being destroyed"
    },
    "priceReason": "The price reflects the historical significance and utility of a relic used in crucial wartime operations.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-24T23:48:32.144730+00:00",
    "aiReviewedAt": "2026-07-24T23:48:32.144730+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_spiny_trench_boots": {
    "id": "wario_cw_spiny_trench_boots",
    "name": "Civil War Relic: Spiny Trench Boots",
    "description": "The Civil War Relic: Spiny Trench Boots are sturdy, reinforced in dulled spiny shells that provide unparalleled traction in muck and gore. Their worn leather is a testament to countless battles, and the old, dried mud still flakes from their treads as they clack loudly on hard surfaces. These boots not only grant you advantage on saves and checks to resist being moved or knocked prone but also enhance your natural combat prowess by allowing unarmed kicks to deal piercing damage instead of bludgeoning.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥾",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Sure-Footed",
      "Painful Kick"
    ],
    "vendor": "wario_land",
    "shippedBy": "Trench Supply Cart",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Sure-Footed",
        "rules": "You gain advantage on saving throws and ability checks made to resist being knocked prone or moved against your will. This effect lasts until the start of your next turn."
      },
      {
        "title": "Painful Kick",
        "rules": "When you make an unarmed strike with these boots, it deals 1d4 piercing damage in addition to its normal bludgeoning damage. This ability can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The boots are crafted from battle-worn materials and require a certain level of expertise to use effectively.",
    "vendorReason": "Wario Land sources unique relics from various historical battles, including these Spiny Trench Boots.",
    "shippingDetail": "These boots are shipped in a specially designed cart that ensures they arrive at their destination without damage.",
    "usage": {
      "activation": "Passive effect; no activation required for either ability.",
      "duration": "Instantaneous for Sure-Footed, once per long rest for Painful Kick.",
      "endsWhen": "The effects end when the boots are removed or you finish a long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The boots' historical significance and specialized craftsmanship justify their moderate price in XP.",
    "priceOriginal": 6700,
    "priceReviewedAt": "2026-07-23T20:15:08.054251+00:00",
    "aiReviewedAt": "2026-07-23T20:15:08.054251+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_spore_gas_mask": {
    "id": "wario_cw_spore_gas_mask",
    "name": "Civil War Relic: Spore Gas Mask",
    "description": "The Civil War Relic: Spore Gas Mask is a grim reminder of a bygone era. Crafted from scavenged metal and leather, its lenses fog after prolonged use, reducing sight. The mask's interior bears the faded warning 'REMEMBER – DON’T LICK THE FILTER'. While worn, it grants advantage on saving throws against poison and inhaled effects but imposes disadvantage on Charisma (Persuasion) checks due to muffled speech. After an hour of continuous wear, you also gain disadvantage on Perception checks until you remove the mask for at least 10 minutes.",
    "category": "equipment",
    "price": 1000,
    "icon": "😷",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Saving Throws vs. Poison & Inhaled Effects",
      "Disadvantage on Charisma (Persuasion) Checks"
    ],
    "vendor": "Wario_Land",
    "shippedBy": "Chemical Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Advantage on Saving Throws vs. Poison & Inhaled Effects",
        "rules": "While the mask is worn, you gain advantage on saving throws against poison and inhaled effects such as spores or gas."
      },
      {
        "title": "Disadvantage on Charisma (Persuasion) Checks",
        "rules": "You suffer disadvantage on Charisma (Persuasion) checks when attempting to influence others due to the muffled speech it induces."
      }
    ],
    "levelRequirementReason": "This relic is designed for those who have faced its dangers and thus requires a certain level of experience.",
    "vendorReason": "Wario's Land holds a vast collection of relics from various conflicts, including this Civil War mask.",
    "shippingDetail": "Ships within 2 days via secure chemical courier service.",
    "usage": {
      "activation": "Passive effect when worn",
      "duration": "Instantaneous activation; lasts until removed or destroyed",
      "endsWhen": "Disadvantage on Charisma (Persuasion) checks ends after removal for at least 10 minutes, and advantage against poison/gas effects is lost upon removal.",
      "charges": "Unlimited"
    },
    "priceReason": "The mask's historical significance and protective properties justify its balanced price.",
    "priceOriginal": 7100,
    "priceReviewedAt": "2026-07-23T20:14:57.232648+00:00",
    "aiReviewedAt": "2026-07-23T20:14:57.232648+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_star_road_prayer_beads": {
    "id": "wario_cw_star_road_prayer_beads",
    "name": "Civil War Relic: Star Road Prayer Beads",
    "description": "The Civil War Relic: Star Road Prayer Beads are a delicate string of star-shaped beads crafted from the brass and iron of old cannons. Once used by soldiers to pray for a miracle, these beads hold the whispers of countless battles under the night sky. Quietly shifting positions when left outdoors, they seem to reflect the stars themselves. Holding them during a short rest grants you advantage on Wisdom (Insight) checks, as if the stars are watching over your thoughts.",
    "category": "equipment",
    "price": 1000,
    "icon": "📿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Miracle Praying Beads",
      "Stars Whisper"
    ],
    "vendor": "wario_land",
    "shippedBy": "Stargazer’s Pouch",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Miracle Praying Beads",
        "rules": "You may activate this effect once per long rest by holding the beads and speaking a prayer. Roll a Wisdom saving throw, and if you fail, you may reroll it immediately. On the new roll, any result of 17 or higher is treated as a success, representing a miracle from the stars."
      },
      {
        "title": "Stars Whisper",
        "rules": "While holding these beads during a short rest, you gain advantage on Wisdom (Insight) checks made to discern the truth in others' words. The beads hum softly with the echo of distant battles and celestial guidance."
      }
    ],
    "levelRequirementReason": "The beads require a deep connection to one's inner strength, which is more likely found in seasoned veterans or those who have faced significant challenges.",
    "vendorReason": "Wario Land has extensive connections with historical artifacts and relics from various eras, including the Civil War era.",
    "shippingDetail": "Shipped by Stargazer’s Pouch, known for their reliable delivery of unique and rare items. Expect a few extra days due to the careful handling required for such delicate relics.",
    "usage": {
      "activation": "On-demand use during a long rest, activated by holding the beads and speaking a prayer.",
      "duration": "Instantaneous effect; lasts until your next short or long rest.",
      "endsWhen": "The effect ends when you complete a short or long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the historical value and unique properties of these beads.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T20:15:07.948121+00:00",
    "aiReviewedAt": "2026-07-23T20:15:07.948121+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_star_spirit_shrapnel": {
    "id": "wario_cw_star_spirit_shrapnel",
    "name": "Civil War Relic: Star Spirit Shrapnel",
    "description": "The Civil War Relic: Star Spirit Shrapnel is a prismatic shard forged from the remains of a star-blessed artifact shattered in desperate defense. Crafted by the hands of ancient warriors, this relic glows with a radiant sheen and whispers of celestial power. When struck by an attack, it can deflect damage as if casting Star Shield, reducing incoming harm by 1d8. After each use, it overheats, dealing 1 radiant damage to you until it cools down at dawn. Each long rest grants one guided attack roll with advantage, ensuring your strikes land true.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Star Shield",
      "Guided Attack"
    ],
    "vendor": "wario_land",
    "shippedBy": "Stellar Salvage Service",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Star Shield",
        "rules": "As a reaction when hit by an attack, you can reduce the damage taken by 1d8. This effect has no save or range and ends after one use per battle."
      },
      {
        "title": "Guided Attack",
        "rules": "Once per long rest, you gain advantage on one weapon attack of your choice. There is no limit to how many times this can be used within a short rest, but it resets at the beginning of each long rest."
      }
    ],
    "levelRequirementReason": "This relic requires significant power and discipline to control its radiant energy.",
    "vendorReason": "Wario Land specializes in unique artifacts from various conflicts, including those with celestial origins.",
    "shippingDetail": "Ships via the Swift Star Messenger, ensuring safe and timely delivery of this delicate relic.",
    "usage": {
      "activation": "Reaction (Star Shield), Bonus Action (Guided Attack)",
      "duration": "Instantaneous (Star Shield), One use per long rest (Guided Attack)",
      "endsWhen": "Ends after one battle (Star Shield), Ends at the beginning of each new long rest (Guided Attack)",
      "charges": "Unlimited within a short rest, resets daily"
    },
    "priceReason": "The price reflects its rarity and the significant power it provides to an 8th-level character.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T20:15:13.999367+00:00",
    "aiReviewedAt": "2026-07-23T20:15:13.999367+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_thwomp_fragment_charm": {
    "id": "wario_cw_thwomp_fragment_charm",
    "name": "Civil War Relic: Thwomp Fragment Charm",
    "description": "The Civil War Relic: Thwomp Fragment Charm is a jagged stone charm, once part of a colossal Thwomp that shattered an enemy siege tower during the Great Mushroom War. Its weighty form grants resistance to falling damage and allows you to stomp on your foes, forcing them to make DC 13 Dexterity saves or fall prone. The charm's heft imposes a -5 ft penalty to movement speed while attuned, but it whispers of ancient power in your dreams.",
    "category": "equipment",
    "price": 5700,
    "icon": "🪨",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Weight of Stone",
      "Stomp"
    ],
    "vendor": "wario_land",
    "shippedBy": "Dungeon Debris Delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Weight of Stone",
        "rules": "While attuned, you gain resistance to falling damage up to 30 feet. The charm's weight imposes a -5 ft penalty to your movement speed."
      },
      {
        "title": "Stomp",
        "rules": "As a bonus action, you can stomp on the ground, forcing all creatures within 5 feet of you to make a DC 13 Dexterity saving throw or fall prone. The charm's power can be used once per day."
      }
    ],
    "levelRequirementReason": "Requires Level 6 to wield this relic effectively in combat.",
    "vendorReason": "Wario Land, a dealer of rare relics from past wars and conflicts, carries this charm as part of his extensive collection.",
    "shippingDetail": "Ships via special armored courier ensuring safe delivery.",
    "usage": {
      "activation": "Bonus action for Stomp; passive effect for Weight of Stone.",
      "duration": "Instantaneous, lasts until the end of your next turn after activation.",
      "endsWhen": "The charm's power is expended after one use per day or when you stop attuning to it.",
      "charges": "1 charge per day"
    },
    "priceReason": "Reflects the rarity and historical significance of this relic, along with its unique combat utility.",
    "priceOriginal": 5700,
    "priceReviewedAt": "2026-07-23T20:15:36.581719+00:00",
    "aiReviewedAt": "2026-07-23T20:15:36.581719+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_toad_artillery_rangefinder": {
    "id": "wario_cw_toad_artillery_rangefinder",
    "name": "Civil War Relic: Toad Artillery Rangefinder",
    "description": "The Civil War Relic: Toad Artillery Rangefinder is a brass monstrosity, its optics and dials meticulously crafted for precision. This relic has seen countless battles, its surface now covered in tiny mushroom stickers marking confirmed hits. It can grant advantage to ranged attacks with a mere glance, ensuring your allies' shots land true. Should the battlefield grow chaotic, its engineering eye grants you insight into structural integrity or line-of-sight issues, but using it haphazardly risks disadvantage on your own actions.",
    "category": "equipment",
    "price": 1000,
    "icon": "📏",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Precision Targeting",
      "Engineering Eye"
    ],
    "vendor": "wario_land",
    "shippedBy": "Artillery Wagon",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Precision Targeting",
        "rules": "As a bonus action, you can grant advantage to one ranged attack made by an ally within 60 feet. You must have line of sight to the target and call corrections during this rest. This effect has no save DC and can be used once per short rest."
      },
      {
        "title": "Engineering Eye",
        "rules": "You gain advantage on Intelligence checks related to evaluating structural integrity or line-of-sight issues. This effect is passive but can only be used if you are not incapacitated."
      }
    ],
    "levelRequirementReason": "The relic's complexity and the precision it demands make it unsuitable for lower-level characters.",
    "vendorReason": "Wario Land, a collector of historical artifacts, has acquired this piece from an old artillery officer who fought in the Civil War.",
    "shippingDetail": "Ships via an Artillery Wagon, delivering with the same efficiency as a cannonball to a target.",
    "usage": {
      "activation": "Bonus action for Precision Targeting; passive for Engineering Eye",
      "duration": "Instantaneous and once per short rest for Precision Targeting; permanent until incapacitated for Engineering Eye",
      "endsWhen": "Expends its use or when you are incapacitated, respectively",
      "charges": "Unlimited"
    },
    "priceReason": "This relic's rarity and utility in battle make it a valuable addition to any combat-oriented character's arsenal.",
    "priceOriginal": 7300,
    "priceReviewedAt": "2026-07-23T20:15:39.591734+00:00",
    "aiReviewedAt": "2026-07-23T20:15:39.591734+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_toad_medics_kit": {
    "id": "wario_cw_toad_medics_kit",
    "name": "Civil War Relic: Toad Medic's Kit",
    "description": "This battered satchel bears a red mushroom emblem, its leather worn to near transparency. The faint scent of herbs and panic lingers within, hinting at countless lives once saved in the heat of battle. Crafted by the hands of Toad medics during the Civil War, it is said that whoever holds this relic carries with them the very essence of valor and healing. Each charge represents a life preserved under dire conditions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🩺",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Battlefield Triage",
      "Emergency Stabilization"
    ],
    "vendor": "wario_land",
    "shippedBy": "Red-Cross Paratroopa",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Battlefield Triage",
        "rules": "As an action, expend 1 charge to heal a creature for 2d4 + your proficiency bonus. This effect has no range and is instantaneous."
      },
      {
        "title": "Emergency Stabilization",
        "rules": "Once per long rest, you can stabilize a dying creature within reach without any saving throw required. The creature’s hit point total cannot drop below 1 until the next dawn."
      }
    ],
    "levelRequirementReason": "The relic is accessible to all who seek its aid, but it is not for the faint of heart.",
    "vendorReason": "Wario Land sources rare and unique items from various historical battles, this being one such artifact.",
    "shippingDetail": "Ships via airdrop, often arriving in the middle of the night under cover of darkness.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Charge is expended or all charges are used up",
      "charges": "3 Charges"
    },
    "priceReason": "The relic's rarity and historical significance justify its price, making it a valuable asset for any adventuring party.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T20:15:26.251460+00:00",
    "aiReviewedAt": "2026-07-23T20:15:26.251460+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_toadtown_air_raid_siren_crank": {
    "id": "wario_cw_toadtown_air_raid_siren_crank",
    "name": "Civil War Relic: Toad Town Air-Raid Siren Crank",
    "description": "The Civil War Relic: Toad Town Air-Raid Siren Crank is a rusted, crank-shaped device that was once used to sound the alarm during air raids. Its handle, worn smooth from countless desperate turns, now serves as an eerie relic of war. When turned, it emits a haunting wail that echoes through the air, striking fear into the hearts of those who hear it. Nearby veterans and soldiers are haunted by old traumas, compelled to confront their past upon hearing its mournful cry.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Alarm",
      "Veteran's Trauma"
    ],
    "vendor": "wario_land",
    "shippedBy": "Claxon Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Alarm",
        "rules": "As a bonus action, you can sound the siren. All friendly creatures within 300 feet gain advantage on their next initiative check in combat for 1 minute. The use of this effect expends one charge."
      },
      {
        "title": "Veteran's Trauma",
        "rules": "Any veteran of a civil war must succeed on a DC 12 Wisdom saving throw or be frightened for 1 round each time they hear the siren, which lasts until the end of their next turn. This effect has no limit and can be used repeatedly."
      }
    ],
    "levelRequirementReason": "This relic is accessible to all adventurers who wish to carry its weighty history.",
    "vendorReason": "Wario Land, a dealer of historical and unusual relics, holds this crank as a symbol of the past's enduring impact on the present.",
    "shippingDetail": "The Crank is shipped in a specially designed crate to ensure it arrives in pristine condition, free from further wear or damage.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous; lasts for 1 minute per use",
      "endsWhen": "Use of the effect expends one charge and ends when no more charges remain.",
      "charges": "5"
    },
    "priceReason": "The price reflects both the historical significance of the relic and its limited utility in combat.",
    "priceOriginal": 5600,
    "priceReviewedAt": "2026-07-23T20:15:57.543499+00:00",
    "aiReviewedAt": "2026-07-23T20:15:57.543499+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_toadtown_refugee_id_tag": {
    "id": "wario_cw_toadtown_refugee_id_tag",
    "name": "Civil War Relic: Toad Town Refugee ID Tag",
    "description": "The Civil War Relic: Toad Town Refugee ID Tag is a heavy, stamped metal token with a nearly illegible number and a faded mushroom crest. Its weight hangs heavily on the wearer, as the tag carries the memories of those who wore it during a harrowing exodus from Toad Town. The token brings comfort to refugees seeking aid but can also stir painful recollections among those who know its history.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏷️",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Sympathy Magnet",
      "Trauma Echo"
    ],
    "vendor": "wario_land",
    "shippedBy": "Relic Registry",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sympathy Magnet",
        "rules": "You have advantage on Persuasion checks when seeking shelter, food, or charity from NPCs who have a heart for the less fortunate. This effect lasts until you use an action to discard the tag."
      },
      {
        "title": "Trauma Echo",
        "rules": "When you lie about your past involving Toad Town using Charisma (Deception), you take disadvantage on the check, as the tag's weight of memory makes such falsehoods feel inherently wrong. The effect ends when you rest for 8 hours."
      }
    ],
    "levelRequirementReason": "This relic is accessible to those who have experienced hardship and can benefit from its effects early in their journey.",
    "vendorReason": "Wario Land's extensive network of salvage collectors and displaced refugees ensures they have such a tag available for those in need.",
    "shippingDetail": "The tag is carefully packed to prevent damage during transit, ensuring its historical significance remains intact.",
    "usage": {
      "activation": "Passive effect; discard the tag as an action to end the effect.",
      "duration": "Until discarded or rested for 8 hours after use.",
      "endsWhen": "Discarding the tag or resting for 8 hours.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects its historical significance and the value of the tag's sentimental worth to those in need.",
    "priceOriginal": 4300,
    "priceReviewedAt": "2026-07-23T20:15:52.431510+00:00",
    "aiReviewedAt": "2026-07-23T20:15:52.431510+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_toadtown_ruined_street_lamp": {
    "id": "wario_cw_toadtown_ruined_street_lamp",
    "name": "Civil War Relic: Toad Town Ruined Street Lamp",
    "description": "A bent, soot-stained relic of Toad Town's past, this street lamp once stood tall in the main square. Its iron frame now glows with a soft, warm yellow light when activated, casting an inviting glow over a 30-foot radius. The light not only illuminates but also serves as a beacon for the fallen, granting a +1 bonus to death saving throws for resting within its light. Additionally, any ranged attacks targeting creatures within this light have advantage on their attack rolls due to improved visibility.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛟",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Illuminating Beacon",
      "Beacon of the Fallen"
    ],
    "vendor": "wario_land",
    "shippedBy": "Toadtown Rubble Haulers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illuminating Beacon",
        "rules": "When activated, the street lamp emits a soft yellow light that illuminates a 30-foot radius. This effect is passive and lasts until the end of each day it remains active."
      },
      {
        "title": "Beacon of the Fallen",
        "rules": "While resting within the light cast by this relic, party members gain +1 to their next death saving throw that day. The effect ends once a character makes the save or when the lamp is deactivated for 24 hours."
      }
    ],
    "levelRequirementReason": "This relic is simple enough for any brave adventurer to use, requiring no specific class or background.",
    "vendorReason": "Wario Land sells this item as a reminder of Toad Town's resilience and the bravery of its people.",
    "shippingDetail": "The lamp is carefully packed to ensure it arrives in working order, delivered within one week from the purchase date.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Until Deactivated or until the end of each day",
      "endsWhen": "Deactivation or at the end of each day when active",
      "charges": "Unlimited"
    },
    "priceReason": "The relic's historical value and utility justify its moderate price, providing a balance between cost and benefit.",
    "priceOriginal": 5400,
    "priceReviewedAt": "2026-07-23T20:15:54.829785+00:00",
    "aiReviewedAt": "2026-07-23T20:15:54.829785+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_unexploded_bob_omb_paperweight": {
    "id": "wario_cw_unexploded_bob_omb_paperweight",
    "name": "Civil War Relic: Unexploded Bob-omb Paperweight",
    "description": "This paperweight is a de-fused Bob-omb from the Civil War era, now serving as a desk ornament to hold down documents. Crafted from weathered metal and encrusted with rust, it bears a faded stamp 'DEFECTIVE – DO NOT ISSUE'. Its core, still partially intact, glows faintly when tapped, hinting at its explosive past. The paperweight's fuse can be triggered once per long rest to produce a loud bang and flash.",
    "category": "equipment",
    "price": 1000,
    "icon": "💣",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Desk Intimidator",
      "Tapped Fuse"
    ],
    "vendor": "wario_land",
    "shippedBy": "Volatile Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Desk Intimidator",
        "rules": "You gain advantage on Intimidation checks conducted across a desk or negotiation table where this paperweight is visible."
      },
      {
        "title": "Tapped Fuse",
        "rules": "Once per long rest, you may 'tap' the core to produce a loud bang and flash (no damage) forcing creatures within 10 feet to make a DC 12 Wisdom saving throw or be frightened for 1 round. On a natural 1, it actually explodes for 2d6 fire damage in 10 feet radius (including you)."
      }
    ],
    "levelRequirementReason": "The paperweight's simple construction and historical context make it accessible to any level of adventurer.",
    "vendorReason": "Wario, a collector of all things unusual, finds this relic fascinating for its history and unique properties.",
    "shippingDetail": "Ships via Volatile Mail with expedited delivery; may arrive with some rust from the paperweight's journey through time.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (effect lasts until end of turn)",
      "endsWhen": "Exhausted after one use per long rest or destroyed by explosion",
      "charges": "1/long rest"
    },
    "priceReason": "The paperweight's historical value and unique effects justify its price in the market.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T20:16:03.487217+00:00",
    "aiReviewedAt": "2026-07-23T20:16:03.487217+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_wartime_radio_mushroom": {
    "id": "wario_cw_wartime_radio_mushroom",
    "name": "Civil War Relic: Wartime Radio Mushroom",
    "description": "The Civil War Relic: Wartime Radio Mushroom is a fungal contraption encrusted with ancient runes, once used to send encoded messages across battlefields. Crafted by alchemists during the Civil War, this relic hums softly when near other magical communication devices, revealing its clandestine past through faint vibrations and the scent of burnt toast and codebooks. Whispering into it sends a 25-word message that appears in the recipient's dreams if they sleep within the same plane; there's a 10% chance the message is interrupted by ghostly war chatter, adding unsettling phrases or imposing minor disadvantage on their next Wisdom saving throw.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Sending Spores",
      "Ghostly War Chatter"
    ],
    "vendor": "wario_land",
    "shippedBy": "Fungal Frequency Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sending Spores",
        "rules": "As an action, you can whisper a 25-word message into the mushroom. The message appears in the dreams of a creature you name (if they sleep that day and are on the same plane). This effect has no save DC but only works once per long rest."
      },
      {
        "title": "Ghostly War Chatter",
        "rules": "There's a 10% chance that when sending a message, ghostly war chatter will interrupt it. If this happens, the message is corrupted with unsettling phrases, imposing disadvantage on the recipient’s next Wisdom saving throw if they hear it."
      }
    ],
    "levelRequirementReason": "This relic requires no specific level as it's a rare artifact that can be used by anyone to access its encoded history.",
    "vendorReason": "Wario Land, a quirky vendor with a penchant for unique and magical items, sells this relic due to his extensive collection of Civil War artifacts.",
    "shippingDetail": "Ships via Fungal Frequency Freight, known for their reliable delivery of rare magical mushrooms and contraptions.",
    "usage": {
      "activation": "action",
      "duration": "instantaneous (message sent)",
      "endsWhen": "message is received in dreams or interrupted by ghostly war chatter",
      "charges": "unlimited"
    },
    "priceReason": "This relic's price reflects its rarity, historical significance, and the unique utility it provides to adventurers.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T20:16:09.959514+00:00",
    "aiReviewedAt": "2026-07-23T20:16:09.959514+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_wartime_ration_tin": {
    "id": "wario_cw_wartime_ration_tin",
    "name": "Civil War Relic: Wartime Ration Tin",
    "description": "The Civil War Relic: Wartime Ration Tin is a dented tin canister embossed with the faded crest of the Mushroom Kingdom. It holds a questionable stew that once fed hungry soldiers but now serves as a relic of a bygone era. The tin’s slogan, 'THE KINGDOM FEEDS YOU – YOU FEED THE FRONT,' echoes from its rusted surface, hinting at the valorous sacrifices made in the past. Each tin contains three servings and recharges after each long rest; once empty, it can be thrown as a makeshift weapon that pops open on impact, smearing the enemy with foul-smelling stew (disadvantage on their Deception checks).",
    "category": "equipment",
    "price": 1000,
    "icon": "🥫",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "FOOD FOR THE FRONTLINE",
      "SMELLY SNEAK ATTACK"
    ],
    "vendor": "wario_land",
    "shippedBy": "Ration Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "FOOD FOR THE FRONTLINE",
        "rules": "Eat from the tin as an action to regain 1d6+1 hit points. Must succeed on a DC 11 Constitution saving throw or suffer disadvantage on Charisma (Interaction) checks for the next hour due to garlic-and-onion breath."
      },
      {
        "title": "SMELLY SNEAK ATTACK",
        "rules": "When thrown as an improvised weapon, it pops open and coats the target in smelly stew. The target must succeed on a DC 12 Dexterity saving throw or be blinded until the start of your next turn (advantage on your Deception checks)."
      }
    ],
    "levelRequirementReason": "This relic is accessible to all, as it honors the sacrifices made by soldiers from long ago.",
    "vendorReason": "Wario Land often sells items that blend nostalgia with practical use, and this tin fits both categories perfectly.",
    "shippingDetail": "Ships via Ration Crate, ensuring timely delivery of the relic to those who need it most.",
    "usage": {
      "activation": "Eating or throwing as an action.",
      "duration": "Instantaneous; lasts until the start of your next turn for the smelly stew effect.",
      "endsWhen": "The tin is empty, expended in combat, or destroyed by forceful means.",
      "charges": "Recharges after each long rest."
    },
    "priceReason": "Balanced as a common relic with nostalgic and practical value, this item's price reflects its historical significance and utility.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T20:16:13.057483+00:00",
    "aiReviewedAt": "2026-07-23T20:16:13.057483+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_yoshi_field_kitchen_pot": {
    "id": "wario_cw_yoshi_field_kitchen_pot",
    "name": "Civil War Relic: Yoshi Field Kitchen Pot",
    "description": "The Civil War Relic: Yoshi Field Kitchen Pot is a massive, rusted metal vessel with a handle that seems to have been gnawed by some wild creature. The pot's surface bears Wario’s signature scorch marks and the faint outlines of Yoshis feasting around it. It can feed up to ten Medium creatures at once, but its weight makes it cumbersome, forcing anyone carrying it openly to move with a noticeable limp.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥘",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Feast of Friendship",
      "Bulky Burden"
    ],
    "vendor": "wario_land",
    "shippedBy": "Mess Tent Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Feast of Friendship",
        "rules": "When used to cook and serve food during a long rest, all participants gain +1 temporary hit points and advantage on their next saving throw against fear effects. This effect lasts until the start of your next turn."
      },
      {
        "title": "Bulky Burden",
        "rules": "The pot counts as 15 pounds and imposes disadvantage on Dexterity (Stealth) checks while openly carrying it. It requires two hands to wield, and it cannot be used in conjunction with other heavy objects."
      }
    ],
    "levelRequirementReason": "This relic is a common item that can be used by any character without requiring a specific class or background.",
    "vendorReason": "Wario Land, known for its eccentricities and the occasional sale of historical artifacts, sells this relic as part of its quirky inventory.",
    "shippingDetail": "Delivered with a humorous note from Wario's personal courier, ensuring the recipient receives their relic with a chuckle.",
    "usage": {
      "activation": "Used during a long rest while cooking and serving food to all participants.",
      "duration": "Instantaneous effect upon completion of the meal; lasts until your next turn.",
      "endsWhen": "The temporary hit points expire at the start of your next turn, or if you do not partake in the meal.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the relic's historical significance and its unique utility during long rests.",
    "priceOriginal": 5400,
    "priceReviewedAt": "2026-07-23T20:16:13.182156+00:00",
    "aiReviewedAt": "2026-07-23T20:16:13.182156+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_yoshi_stampede_spurs": {
    "id": "wario_cw_yoshi_stampede_spurs",
    "name": "Civil War Relic: Yoshi Stampede Spurs",
    "description": "The Civil War Relic: Yoshi Stampede Spurs are a pair of gleaming, star-shaped spurs with intricate engravings that tell tales of battles long past. Crafted for speed and precision during the war, these spurs not only enhance your mount's agility but also command respect from any Yoshi. Worn by a legendary captain, they now offer their wearer the thrill of swift movement and the ability to rally allies in a charge.",
    "category": "equipment",
    "price": 1000,
    "icon": "⭐",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mounted Speed",
      "Yoshi Command"
    ],
    "vendor": "wario_land",
    "shippedBy": "Egg Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Mounted Speed",
        "rules": "While mounted on a willing steed, you both gain +10 feet of movement speed. This effect lasts until the end of your next turn."
      },
      {
        "title": "Yoshi Command",
        "rules": "Once per long rest, you can shout a command that grants all friendly mounts within 60 feet advantage on their next Strength or Dexterity check. The effect lasts for one minute."
      }
    ],
    "levelRequirementReason": "Requires proficiency with mounted combat to fully leverage the spurs' speed and command abilities.",
    "vendorReason": "Wario Land has a vast collection of relics from various conflicts, including these unique spurs.",
    "shippingDetail": "Ships within 3 days with Egg Express's standard courier service.",
    "usage": {
      "activation": "Passive effect while mounted. Active use requires shouting a command once per long rest.",
      "duration": "Instantaneous activation; Mounted Speed lasts until end of turn, Yoshi Command lasts for one minute.",
      "endsWhen": "The effects end when the mount dismounts or you lose concentration on the command (as if concentrating on a spell).",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price for a rare relic that offers significant combat and speed advantages in mounted combat.",
    "priceOriginal": 7300,
    "priceReviewedAt": "2026-07-23T20:16:20.327972+00:00",
    "aiReviewedAt": "2026-07-23T20:16:20.327972+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_1up_mushroom_stem": {
    "id": "wario_land_1up_mushroom_stem",
    "name": "Withered 1-Up Mushroom Stem",
    "description": "This withered stem once belonged to a 1-Up mushroom that saw desperate use during the War of Shattered Fortunes. Though its magic is nearly spent, it retains a faint echo of its former power. Consuming it when you fall to zero hit points allows you to stabilize and gain 1d6 temporary hit points. However, if it's completely dead, it does nothing but leave you tasting the bitter end of your misfortune.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stabilize and Regain HP",
      "Complete Depletion Risk"
    ],
    "vendor": "wario_land",
    "shippedBy": "Life Support Logistics",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stabilize and Regain HP",
        "rules": "Consume this stem when you fall to 0 hit points. You regain stabilization and gain 1d6 temporary hit points. If it's completely dead, it does nothing."
      },
      {
        "title": "Complete Depletion Risk",
        "rules": "There is a 50% chance that after consuming the stem, it is completely depleted and has no further effect."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to ensure they can recover from minor injuries.",
    "vendorReason": "Wario Land still sells emergency rations, even if the stock has expired.",
    "shippingDetail": "Ships immediately with priority courier service.",
    "usage": {
      "activation": "Eaten when falling to zero hit points",
      "duration": "Instantaneous; temporary hit points last until the start of your next turn",
      "endsWhen": "The stem is completely consumed or depleted",
      "charges": "One use only"
    },
    "priceReason": "Balanced as a rare item, suitable for early levels but powerful enough to be useful.",
    "priceOriginal": 8900,
    "priceReviewedAt": "2026-07-23T20:16:25.931930+00:00",
    "aiReviewedAt": "2026-07-23T20:16:25.931930+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_Cape_feather_spine": {
    "id": "wario_land_cape_feather_spine",
    "name": "Cape Feather Spine",
    "description": "The Cape Feather Spine is a relic of the Sky Battalion’s Grounded Division. Once part of a majestic cape, its flight magic has been depleted, leaving behind a spine imbued with subtle air currents. This spine can be used as a dart dealing 1d4 piercing damage with a range of 30 feet; if it misses, it returns to your hand. Additionally, when crafted into a quill, the spine allows you to write messages that float and travel up to 30 feet to their recipient, perfect for sending secret notes or urgent missives.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦅",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Feathered Dart",
      "Message Courier"
    ],
    "vendor": "wario_land",
    "shippedBy": "Feathered Flight Co.",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Feathered Dart",
        "rules": "Use as a dart: Deals 1d4 piercing damage. Has a range of 30 feet and returns to your hand if it misses the target."
      },
      {
        "title": "Message Courier",
        "rules": "Craft into a quill to write messages that float up to 30 feet, delivering them to their recipient instantly."
      }
    ],
    "levelRequirementReason": "This item requires no specific level as it is crafted from a grounded relic and can be used by anyone.",
    "vendorReason": "Wario Land, known for their unique and whimsical items, carries this relic of the Sky Battalion’s Grounded Division.",
    "shippingDetail": "Ships via a special air courier service provided by Feathered Flight Co., ensuring quick delivery to your doorstep.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Instantaneous for the dart effect; message courier effect is permanent until used",
      "endsWhen": "Charges are expended or destroyed if not re-used within one week",
      "charges": "Unlimited, as it can be re-crafted into a quill after use"
    },
    "priceReason": "The price reflects the craftsmanship and rarity of the relic, making it an uncommon but valuable item.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T20:16:30.535992+00:00",
    "aiReviewedAt": "2026-07-23T20:16:30.535992+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_anti_gravity_panel": {
    "id": "wario_land_anti_gravity_panel",
    "name": "Anti-Gravity Panel Fragment",
    "description": "A jagged fragment of experimental war vehicle tech, this Anti-Gravity Panel Fragment hums faintly as it hovers in mid-air. Crafted by the now-defunct Experimental Tech Division, it is a relic from a canceled project. When activated, you can walk on walls and ceilings for 5 minutes, but your balance falters; disadvantage on attack rolls while inverted. The panel flickers unpredictably, occasionally deactivating early with a disorienting thud as you fall to the ground.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔄",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Wall Walker",
      "Disoriented Inversion"
    ],
    "vendor": "wario_land",
    "shippedBy": "Upside-Down Delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Wall Walker",
        "rules": "Activate as an action. You can walk on walls and ceilings for up to 5 minutes (once per day). You have advantage on Acrobatics checks while inverted, but you take a -2 penalty to movement speed when walking on vertical surfaces."
      },
      {
        "title": "Disoriented Inversion",
        "rules": "While using Wall Walker, you are disoriented and have disadvantage on attack rolls. Additionally, there is a 10% chance per minute that the panel flickers and deactivates early, causing you to lose your balance with a thud."
      }
    ],
    "levelRequirementReason": "Crafted from advanced experimental tech, this fragment requires at least 8th level for proficient control.",
    "vendorReason": "Wario Land has an extensive collection of unique and rare items salvaged from various underground projects.",
    "shippingDetail": "Ships via the Upside-Down Express, ensuring secure delivery through a series of inverted tunnels.",
    "usage": {
      "activation": "Action",
      "duration": "5 minutes (once per day)",
      "endsWhen": "Early deactivation or expiration at end of duration",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced with a rare and functional item, this fragment retains its experimental value while being reasonably priced.",
    "priceOriginal": 7600,
    "priceReviewedAt": "2026-07-23T20:16:30.318131+00:00",
    "aiReviewedAt": "2026-07-23T20:16:30.318131+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_blooper_tentacle": {
    "id": "wario_land_blooper_tentacle",
    "name": "Preserved Blooper Tentacle",
    "description": "The Preserved Blooper Tentacle is a gnarled, translucent limb from an aquatic creature found in the moat. Crafted by Wario’s Land forces using Aquatic Warfare Division techniques, it retains its slimy texture and flexible form. This tentacle not only functions as a formidable whip but also emits a pungent odor that can deter foes. Its suction cups provide advantage on grapple checks, making it a valuable tool for close combat and escape scenarios.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦑",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Use as Whip",
      "Deterring Smell"
    ],
    "vendor": "wario_land",
    "shippedBy": "Seafood Special Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Use as Whip",
        "rules": "The Preserved Blooper Tentacle can be used to make a melee weapon attack. On a hit, the target takes 1d4 bludgeoning damage and is grappled (优势于格斗检定) until the start of your next turn unless they succeed on a DC 12 Strength saving throw."
      },
      {
        "title": "Deterring Smell",
        "rules": "While in contact with this tentacle, you have disadvantage on Charisma checks and saving throws. This effect lasts for as long as you are within 10 feet of the tentacle."
      }
    ],
    "levelRequirementReason": "This item is designed for lower-level adventurers who might find themselves in aquatic combat environments.",
    "vendorReason": "Wario’s Land specializes in crafting items from various battlefield resources, including those found in moat battles.",
    "shippingDetail": "Ships via a special container to preserve the tentacle's properties during transit.",
    "usage": {
      "activation": "Melee weapon attack",
      "duration": "Until start of next turn or until grappled ends",
      "endsWhen": "Grapple ends, target succeeds on a saving throw",
      "charges": "Unlimited"
    },
    "priceReason": "The item's balance is adjusted to reflect its unique properties and utility in aquatic combat scenarios.",
    "priceOriginal": 4400,
    "priceReviewedAt": "2026-07-23T20:16:37.435831+00:00",
    "aiReviewedAt": "2026-07-23T20:16:37.435831+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_blue_shell_fragment": {
    "id": "wario_land_blue_shell_fragment",
    "name": "Blue Shell Shrapnel",
    "description": "Blue Shell Shrapnel is a fragment of the legendary super-weapon used against high-ranking targets. Crafted from meteoric iron and imbued with the weapon's dark energy, it shimmers with an eerie blue glow. This relic deals devastating force damage to enemies but also attracts unwanted attention from both warring factions. The shrapnel's presence is a constant reminder of past atrocities, making stealthy maneuvers near it nearly impossible for the strongest party member.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔵",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Blazing Force",
      "Public Enemy"
    ],
    "vendor": "wario_land",
    "shippedBy": "Classified Munitions",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Blazing Force",
        "rules": "When thrown as an action, this fragment deals 3d10 force damage to a single target within 20 feet. The attacker has disadvantage on the attack roll if they are not the weakest party member. This effect can be used once per week."
      },
      {
        "title": "Public Enemy",
        "rules": "All creatures in a 15-foot radius must make a DC 15 Dexterity saving throw or become wanted by both armies for one month, suffering disadvantage on attack rolls against them during that time. This effect ends when the item is destroyed."
      }
    ],
    "levelRequirementReason": "Requires mastery to handle the weapon's dark energies and avoid its unwanted consequences.",
    "vendorReason": "Wario Land has a network of underground contacts that can procure rare and dangerous artifacts like this shrapnel.",
    "shippingDetail": "Ships via heavily guarded courier, with strict handling procedures to prevent unauthorized access.",
    "usage": {
      "activation": "Thrown as an action",
      "duration": "Instantaneous; effect ends when destroyed or used",
      "endsWhen": "Destroyed upon use or if the wielder is caught by authorities",
      "charges": "Unlimited, but limited once per week"
    },
    "priceReason": "Balanced to be a significant yet not overpowered item, suitable for high-level adventurers.",
    "priceOriginal": 9100,
    "priceReviewedAt": "2026-07-23T20:16:42.889132+00:00",
    "aiReviewedAt": "2026-07-23T20:16:42.889132+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_boo_regiment_banner": {
    "id": "wario_land_boo_regiment_banner",
    "name": "Captured Boo Regiment Banner",
    "description": "The captured banner of an entire Boo Regiment, its spectral folds a testament to the Poltergust's might. When unfurled in dim light or darkness, all allies within 30 feet become invisible, blending seamlessly into their surroundings. The very sight of this banner strikes fear into the hearts of Boos; those who behold it gain advantage on Intimidation checks against undead foes. Touching the banner triggers an eerie scream, dispelling all magical effects in a 50-foot radius for one day.",
    "category": "equipment",
    "price": 1000,
    "icon": "👻",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility Aura",
      "Boo Terror"
    ],
    "vendor": "wario_land",
    "shippedBy": "Haunted Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility Aura",
        "rules": "When activated as an action within dim light or darkness, all allies within 30 feet become invisible. This effect lasts until the start of your next turn."
      },
      {
        "title": "Boo Terror",
        "rules": "All Boos within a 50-foot radius gain disadvantage on saving throws against fear effects and on Intimidation checks against them. Touching the banner triggers this effect, which ends when the Boo leaves the area or is no longer affected by magical effects for one day."
      }
    ],
    "levelRequirementReason": "This item's power is balanced at level 1 to ensure it can be used effectively early in a campaign.",
    "vendorReason": "Wario Land has extensive connections with the Poltergust and often acquires unique relics from his adventures.",
    "shippingDetail": "Ships sealed in a ghostly mist, ensuring safe delivery to adventurers.",
    "usage": {
      "activation": "Action",
      "duration": "Until start of next turn",
      "endsWhen": "Starts of your next turn; dispelled by Boo leaving the area or magical effects ending for one day",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique and balanced utility in early campaign play.",
    "priceOriginal": 14800,
    "priceReviewedAt": "2026-07-23T20:16:47.588106+00:00",
    "aiReviewedAt": "2026-07-23T20:16:47.588106+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_boo_spirit_trap": {
    "id": "wario_land_boo_spirit_trap",
    "name": "Boo Spirit Trap",
    "description": "The Boo Spirit Trap is a ghostly net spun from Luigi’s enchanted spider silk, used during the haunting of Wario Land Castle. It gleams faintly with an eerie blue light, designed to ensnare incorporeal spirits. Once captured, the spirit can be interrogated for valuable information; however, the trap has a mind of its own and may suddenly tear itself free or even fly off at random moments, leaving only a lingering sense of unease in its wake.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕸️",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Incorporeal Capture",
      "Spirit Interrogation"
    ],
    "vendor": "wario_land",
    "shippedBy": "Spooky Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Incorporeal Capture",
        "rules": "As a bonus action, the Boo Spirit Trap can be thrown to ensnare one incorporeal creature within 30 feet. The target must make a Strength saving throw (DC 14) or become restrained by the trap for up to 1 minute. On a successful save, the target escapes with no effect."
      },
      {
        "title": "Spirit Interrogation",
        "rules": "When an incorporeal creature is captured, it can be interrogated as a reaction during its turn. The caster gains advantage on any Intelligence (Insight) check made to discern information from the spirit."
      }
    ],
    "levelRequirementReason": "Beginners can still assist Luigi in capturing spirits.",
    "vendorReason": "Wario Land's resident ghost hunters stock this essential tool for their expeditions.",
    "shippingDetail": "Delivered by a spectral messenger, ensuring swift delivery to the haunted castle.",
    "usage": {
      "activation": "Bonus action to throw; reaction to interrogate captured spirit",
      "duration": "1 minute per use or until released",
      "endsWhen": "The target escapes successfully, or the caster dismisses it",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a common yet effective tool in Wario Land’s haunted castle.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T20:17:04.384958+00:00",
    "aiReviewedAt": "2026-07-23T20:17:04.384958+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_boomerang_flower_petal": {
    "id": "wario_land_boomerang_flower_petal",
    "name": "Boomerang Flower Petal",
    "description": "A Boomerang Flower Petal, a vibrant and leaf-like weapon crafted from the rare Botanical Warfare Program. This petal can be thrown with deadly precision, returning to your hand after traversing up to 40 feet. Upon its return, it seeks out two targets in a straight line, striking both with its lingering magic. However, each successful throw weakens the petal's enchantment; it wilts completely after ten uses, leaving behind only an ordinary leaf.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌺",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Return Strike",
      "Multiple Targets"
    ],
    "vendor": "wario_land",
    "shippedBy": "Returning Routes",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Return Strike",
        "rules": "When thrown, the Boomerang Flower Petal strikes with a 1d6 slashing damage. It returns to your hand after reaching its target or upon hitting an obstacle within 40 feet. On its return trip, it can attempt a second attack against any two creatures aligned along the same path in a straight line."
      },
      {
        "title": "Multiple Targets",
        "rules": "If either of the first two attacks hit, there is a 15% chance (DC 10 Dexterity saving throw) that it will also strike an ally within the return path. The petal wilts and loses its magic after ten successful throws."
      }
    ],
    "levelRequirementReason": "This weapon requires at least two levels to wield effectively due to its unique mechanics and precision needed for throwing.",
    "vendorReason": "Wario Land, a master of botanical warfare, is the only vendor capable of producing such refined petal weapons.",
    "shippingDetail": "Ships within 3 days with Returning Routes' express courier service.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous return trip",
      "endsWhen": "Wilted after ten successful throws or destroyed upon a failed saving throw against the ally strike chance.",
      "charges": "Unlimited, resets after each fight"
    },
    "priceReason": "The Boomerang Flower Petal's rarity and unique mechanics justify its price of 1000 XP.",
    "priceOriginal": 5700,
    "priceReviewedAt": "2026-07-23T20:16:53.847726+00:00",
    "aiReviewedAt": "2026-07-23T20:16:53.847726+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_bootleg_waluigi_doll": {
    "id": "wario_land_bootleg_waluigi_doll",
    "name": "Bootleg Waluigi Doll (Officially Unofficial)",
    "description": "The 'Bootleg Waluigi Doll (Officially Unofficial)' is a poorly stitched, creepy doll with 'WALUIGI' written in bright marker on its tag. This toy was crafted by Wario Land Toy Factory, known for their questionable quality control and even more questionable copyright notices. It's a handy distraction that can make enemies waste an action investigating it, but beware—its erratic behavior grants you disadvantage on Investigation checks, and Waluigi’s spirit might possess it once per day to whisper bad advice.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧸",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Distraction",
      "Waluigi's Spirit"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Distraction",
        "rules": "When used as a distraction, enemies must succeed on a DC 10 Wisdom saving throw or waste an action investigating the doll. This effect ends when the doll is no longer in sight."
      },
      {
        "title": "Waluigi's Spirit",
        "rules": "Once per short rest, the doll can be possessed by Waluigi’s spirit. The spirit whispers 'Waaah' and gives bad advice, giving you disadvantage on your next Charisma (Intimidation) check."
      }
    ],
    "levelRequirementReason": "This toy is simple enough for any adventurer to use without requiring a specific class or background.",
    "vendorReason": "Wario Land, known for its questionable quality control, still manages to find a market for these toys despite their poor craftsmanship.",
    "shippingDetail": "The package is delivered with a 'Do Not Open in Public' warning due to the doll's reputation as a source of chaos and bad luck.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous",
      "endsWhen": "The doll ceases being visible",
      "charges": "Unlimited, but only one possession attempt per short rest"
    },
    "priceReason": "While the item is common and easy to obtain, its unique properties make it a valuable tool for adventurers.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T20:16:59.770846+00:00",
    "aiReviewedAt": "2026-07-23T20:16:59.770846+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_bootleg_war_medal": {
    "id": "wario_land_bootleg_war_medal",
    "name": "Bootleg 'Hero of the Mushroom Kingdom' Medal",
    "description": "The Bootleg 'Hero of the Mushroom Kingdom' Medal is a tarnished tin relic crafted by Wario Land, bearing a false hero's emblem. This medal grants you an air of charm when dealing with civilians, who are fooled into gratitude for your supposed valor. However, it backfires with real soldiers, who see through its forgery and react with disdain instead. The medal rusts in the rain, casting doubt on your heroic claims whenever you're exposed to moisture.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏅",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Civilians' Gratitude",
      "Soldiers' Disdain"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Ribbon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Civilians' Gratitude",
        "rules": "When interacting with civilians, you gain advantage on Charisma checks. This effect is neutralized if the target is a veteran or someone who recognizes the medal's forgery."
      },
      {
        "title": "Soldiers' Disdain",
        "rules": "When dealing with real soldiers, you have disadvantage on Charisma checks. This effect persists until the end of your next short rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to quickly gain social standing among civilians without needing extensive training.",
    "vendorReason": "Wario Land, ever the opportunist, sells bootleg memorabilia to those seeking a quick boost in social status.",
    "shippingDetail": "The medal is shipped wrapped tightly to prevent rusting during transit. Customers are advised not to open it until they reach a safe location.",
    "usage": {
      "activation": "Passive effect when interacting with civilians or soldiers.",
      "duration": "Instantaneous, lasting the duration of interaction",
      "endsWhen": "The effect ends if the target recognizes the medal's forgery or if the item rusts in rain.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects a common, yet effective, tool for those looking to quickly gain social capital without the need for actual heroic deeds.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-23T20:17:04.391960+00:00",
    "aiReviewedAt": "2026-07-23T20:17:04.391960+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_bowser_castle_banner": {
    "id": "wario_land_bowser_castle_banner",
    "name": "Bowser Castle Banner",
    "description": "The Bowser Castle Banner is a tattered flag, its threads woven from the very fabric of Koopa toil and bloodshed. Crafted by the relentless hands of Koopa Banner Makers, it bears witness to countless battles fought within Bowser's besieged fortress. Allies who plant this banner within 30 feet gain +1 to attack rolls against Toads (Koopa morale), bolstering their resolve in the desert wastes. Yet, for those seeking to betray Bowser’s cause, the banner brings misfortune; Koopas caught with it suffer disadvantage on Charisma checks, a reminder of the fortress's unyielding spirit.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏰",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Plant banner: allies gain +1 to attack rolls vs. Toads",
      "Banner curses betrayers"
    ],
    "vendor": "wario_land",
    "shippedBy": "Castle Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Plant Banner",
        "rules": "Allies within 30 feet gain +1 to attack rolls against Toads (Koopa morale). This effect lasts until the end of your next turn."
      },
      {
        "title": "Banner Curses Betrayers",
        "rules": "If Koopas with this banner are caught, they suffer disadvantage on Charisma checks for 24 hours. The banner's curse can be dispelled by a Wish spell or similar effect."
      }
    ],
    "levelRequirementReason": "This banner is crafted to inspire and bolster the spirits of those who fight in Bowser's cause, making it accessible to all.",
    "vendorReason": "Wario Land deals in artifacts from various regions, including Bowser’s besieged fortress.",
    "shippingDetail": "Ships via airship directly from the desert, ensuring swift delivery to the nearest port or fortress.",
    "usage": {
      "activation": "Place this banner within 30 feet of enemies to activate its effects.",
      "duration": "Until end of your next turn for allies; cursed effect lasts until dispelled or ends.",
      "endsWhen": "The effect ends when you use it again, or if the banner is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This banner's rarity and significance to Bowser’s cause justify its price in XP.",
    "priceOriginal": 5100,
    "priceReviewedAt": "2026-07-23T20:17:24.501339+00:00",
    "aiReviewedAt": "2026-07-23T20:17:24.501339+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_bowser_claw_necklace": {
    "id": "wario_land_bowser_claw_necklace",
    "name": "Bowser’s Severed Claw Necklace",
    "description": "Bowser’s Severed Claw Necklace once belonged to the fiery tyrant himself, now a relic of his might. The hallowed scales are still warm from their forge, and the talon is encrusted with lava that never truly cools. This heirloom grants its wearer +2 natural armor, and when struck or grappled, it emits a searing burst of flame. Only the most resilient of reptiles can wear this cursed trinket without succumbing to its fiery wrath.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦖",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+2 natural armor",
      "Flame Burst"
    ],
    "vendor": "wario_land",
    "shippedBy": "Lava-Proof Box",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Natural Armor Boost",
        "rules": "While wearing Bowser’s Severed Claw Necklace, the wearer gains a +2 bonus to AC. This effect is passive and applies at all times while the item is worn."
      },
      {
        "title": "Flame Burst",
        "rules": "When struck or grappled while wearing this necklace, the wearer can release a burst of flame as an immediate reaction. This burst deals 1d6 fire damage to the attacker and grants the wearer temporary hit points equal to half their level (rounded down). The effect can only be used once per short rest."
      }
    ],
    "levelRequirementReason": "Only those who have faced Bowser's fiery wrath and survived are deemed worthy of this relic.",
    "vendorReason": "Wario Land keeps a collection of rare and dangerous artifacts for adventurers, including pieces from the most notorious creatures in the land.",
    "shippingDetail": "The Lava-Proof Box ensures safe delivery by encasing the necklace in cooling lava until it reaches its destination.",
    "usage": {
      "activation": "Immediate reaction to being struck or grappled while wearing the necklace.",
      "duration": "Instantaneous effect, with a recharge on a short rest.",
      "endsWhen": "The effect can only be used once per short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's rarity and its ability to offer both defensive and offensive advantages.",
    "priceOriginal": 16800,
    "priceReviewedAt": "2026-07-23T20:17:29.939164+00:00",
    "aiReviewedAt": "2026-07-23T20:17:29.939164+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_bowser_crown_shard": {
    "id": "wario_land_bowser_crown_shard",
    "name": "Shard of Bowser’s Fallen Crown",
    "description": "A jagged shard of Bowser's fallen crown, snapped off when he was forced to kneel before Mario. Crafted from fire-hardened steel and imbued with the spirit of the Koopa King himself, this relic whispers tales of valor and defiance. The very touch of this shard sends a chill down one's spine, for it is said that its power can bend even the mightiest dragon to its will.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Intimidation Boost",
      "Dragon Domination"
    ],
    "vendor": "wario_land",
    "shippedBy": "Fireproof Crate",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Intimidation Boost",
        "rules": "While wearing this shard, you gain a +2 bonus to Intimidation checks and have advantage on saving throws against the fear or charm effects of dragons and reptiles."
      },
      {
        "title": "Dragon Domination",
        "rules": "You can cast the Dominate Monster spell once per day on a dragon or a large reptile. The save DC for this effect is 18, and the target must be within 60 feet of you."
      }
    ],
    "levelRequirementReason": "This shard requires a minimum level to harness its power effectively.",
    "vendorReason": "Wario Land often deals in rare artifacts and relics from the Mushroom Kingdom, including pieces of Bowser's past glories.",
    "shippingDetail": "Ships via Fireproof Crate with express delivery to ensure safe arrival.",
    "usage": {
      "activation": "This shard is activated by wearing it as a neck piece. It can be used once per day for its dragon-domination effect.",
      "duration": "Instantaneous, with the duration of the spell.",
      "endsWhen": "The effect ends when you no longer wear the shard or if the target successfully saves against the Dominate Monster spell.",
      "charges": "1/Day"
    },
    "priceReason": "This shard is priced at a fair value considering its rare and powerful effects, as well as its historical significance.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-23T20:18:22.928891+00:00",
    "aiReviewedAt": "2026-07-23T20:18:22.928891+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_bowser_jr_paintbrush": {
    "id": "wario_land_bowser_jr_paintbrush",
    "name": "Bowser Jr.'s Paintbrush",
    "description": "Bowser Jr.'s Paintbrush, a vibrant and whimsical tool made by Koopa Kid's Art Supplies in War Graffiti Line, transforms any surface into a canvas of rebellion. This magical brush can paint an illusory wall that fools simple creatures for hours with its enchanting artistry. However, it runs the risk of accidentally painting with smelly garlic juice, causing disadvantage on Stealth checks and attracting unwanted attention from Bowser Jr.'s messengers.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖌️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Illusionary Graffiti",
      "Garlic Juice Risk"
    ],
    "vendor": "wario_land",
    "shippedBy": "Graffiti Goomba",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Illusionary Graffiti",
        "rules": "As an action, the user can paint a 10-foot square area with an illusory wall that lasts for 1 hour. Simple creatures within 30 feet of the wall have advantage on Deception checks against it. The illusion is dispelled if any creature successfully interacts with the wall."
      },
      {
        "title": "Garlic Juice Risk",
        "rules": "There's a 50% chance that when used, the brush paints with garlic juice instead of regular paint. This causes disadvantage on Stealth checks within the next 10 minutes and attracts a random Koopa messenger who demands its return."
      }
    ],
    "levelRequirementReason": "This item requires at least level 6 to ensure players can handle the strategic challenges it presents.",
    "vendorReason": "Wario Land is known for his eclectic collection of unique and quirky items, including Bowser Jr.'s Paintbrush.",
    "shippingDetail": "The brush arrives with a special delivery seal to prevent premature activation during transit.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until dispelled",
      "endsWhen": "Interaction, successful Deception check, or Koopa messenger claim",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's magical properties and unique utility in rebellion scenarios.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T20:17:34.259928+00:00",
    "aiReviewedAt": "2026-07-23T20:17:34.259928+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_broken_warp_pipe": {
    "id": "wario_land_broken_warp_pipe",
    "name": "Broken Warp Pipe Segment",
    "description": "A cracked and rusted segment of a once-proud Warp Pipe, this relic is a remnant from the Kingdom Transit Authority's grand transportation network. When activated, it teleports you 30 feet in an unstable warp, but there’s a chance—alarming as it may be—you could end up 120 feet away instead. The pipe also emits a cacophony of screeching hisses and pops, giving nearby creatures disadvantage on Stealth checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🟢",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Unstable Teleport",
      "Noisy Warp"
    ],
    "vendor": "wario_land",
    "shippedBy": "Warp Zone Delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Unstable Teleport",
        "rules": "Activation: Reaction. You teleport up to 30 feet in a random direction. If the destination is occupied, you are teleported back to your original position. There’s a 30% chance that instead of landing where you intended, you are transported an additional 90 feet in a different random direction."
      },
      {
        "title": "Noisy Warp",
        "rules": "The pipe emits a loud hissing sound whenever it is used, giving creatures within 10 feet disadvantage on Stealth checks for the duration of your next short rest. This effect does not stack with other sources of disadvantage."
      }
    ],
    "levelRequirementReason": "This relic requires a higher level to activate because its magic is unstable and dangerous, even to those who are more experienced.",
    "vendorReason": "Wario Land is well-known for trading in ancient relics and bizarre artifacts from the Kingdom Transit Authority’s war-torn infrastructure.",
    "shippingDetail": "Ships via Warp Zone Express, delivered to your doorstep within a day of purchase.",
    "usage": {
      "activation": "Reaction (use once per long rest)",
      "duration": "Instantaneous teleport; ends when the teleport is complete or interrupted by an effect that prevents movement",
      "endsWhen": "The teleport completes or you are interrupted from moving",
      "charges": "Unlimited, but only one use per long rest"
    },
    "priceReason": "This item’s price is balanced to reflect its unstable magic and the risk it poses, making it valuable yet not overpowered.",
    "priceOriginal": 7100,
    "priceReviewedAt": "2026-07-23T20:17:42.217598+00:00",
    "aiReviewedAt": "2026-07-23T20:17:42.217598+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_bullet_bill_casing": {
    "id": "wario_land_bullet_bill_casing",
    "name": "Spent Bullet Bill Casing",
    "description": "This spent Bullet Bill casing is still warm from recent combat. Its metallic exterior, now dulled by use, retains faint targeting runes and a lingering scent of gunpowder. Crafted by the Koopa Artillery Corps, this relic grants a +1 bonus to ranged attack rolls when studied for a minute. It also functions as a makeshift telescope, granting advantage on Perception checks at long range. However, each day there is a 5% chance it might accidentally fire at a random target within line of sight.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚀",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Telescope",
      "Targeting Bonus"
    ],
    "vendor": "wario_land",
    "shippedBy": "Ballistic Boxers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Targeting Bonus",
        "rules": "This item grants +1 to ranged attack rolls for one minute after studying the casing. This effect ends when the user stops concentrating."
      },
      {
        "title": "Telescope",
        "rules": "While using this as a telescope, you gain advantage on Perception checks at long range. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who might find themselves in combat without proper ranged weapons.",
    "vendorReason": "Wario Land is known for his collection of odd and practical relics, often scavenged from past battles.",
    "shippingDetail": "Ships via armored courier within a week.",
    "usage": {
      "activation": "Passive effect when studied; active use as a telescope is a bonus action.",
      "duration": "Targeting Bonus lasts for one minute. Telescope effect lasts until the end of your next turn.",
      "endsWhen": "When the user stops concentrating on the Targeting Bonus or ends their turn while using it as a telescope.",
      "charges": "Unlimited"
    },
    "priceReason": "The item is priced at 1000 XP, reflecting its practical utility and rarity in battle.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T20:17:45.976639+00:00",
    "aiReviewedAt": "2026-07-23T20:17:45.976639+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_captain_toad_last_map": {
    "id": "wario_land_captain_toad_last_map",
    "name": "Captain Toad’s Final Treasure Map",
    "description": "Captain Toad’s Final Treasure Map is a tattered, hand-drawn parchment that glows faintly with an ethereal light. It was last used to guide Toads in their final mission before disappearing into legend. The map updates in real time and leads directly to the 'Lost Regiment Pay Chest,' a chest filled with gold and treasure from the regiment's unclaimed pay, now guarded by restless undead soldiers who never saw their dues.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗺️",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Real-Time Guidance",
      "Guarded By Undead"
    ],
    "vendor": "wario_land",
    "shippedBy": "Toad Tears Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Real-Time Guidance",
        "rules": "When activated, the map provides real-time directions to the 'Lost Regiment Pay Chest.' It must be held in one hand and can only update once per day. The map's glow dims if not used within a week."
      },
      {
        "title": "Guarded By Undead",
        "rules": "Upon reaching the chest, the map reveals that it is guarded by an undead Toad Brigade. The chest cannot be opened until these guardians are defeated. Once the guardians are dealt with, the treasure can be claimed."
      }
    ],
    "levelRequirementReason": "Even a low-level adventurer can appreciate Captain Toad’s legacy and help the Toads who never got their pay.",
    "vendorReason": "Wario keeps it in his collection as a reminder of better times before Toad turned against him.",
    "shippingDetail": "The map is sent with special care to ensure its fragile state remains intact during transit.",
    "usage": {
      "activation": "Object Interaction (requires one hand)",
      "duration": "Instantaneous, updates once per day",
      "endsWhen": "If not used within a week of activation, the glow dims and stops updating. The map can be reactivated after waiting a full day.",
      "charges": "Unlimited"
    },
    "priceReason": "The map's rarity and unique historical value justify its price.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-23T20:17:50.788987+00:00",
    "aiReviewedAt": "2026-07-23T20:17:50.788987+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_chain_chomp_collar": {
    "id": "wario_land_chain_chomp_collar",
    "name": "Snapped Chain Chomp Collar",
    "description": "The Snapped Chain Chomp Collar is a heavy iron collar imbued with the restless spirit of a beast that once served Bowser's forces. Crafted by Bowser's Beast Corps (Restraint Division), it offers protection and danger in equal measure. Wear this collar as a belt to gain +1 AC against grapple attempts, but beware: your wisdom is compromised—roll disadvantage on Wisdom saving throws or risk succumbing to uncontrollable rage.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛓️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Chain Grapple Defense",
      "Raging Beast"
    ],
    "vendor": "wario_land",
    "shippedBy": "Barking Box Delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Chain Grapple Defense",
        "rules": "Active as a bonus action. When you are the target of a grapple attempt, you can apply the collar's +1 AC bonus. If successful, the attacker must make a DC 13 Strength saving throw or be restrained by the collar."
      },
      {
        "title": "Raging Beast",
        "rules": "Active on activation. While wearing this collar, you have disadvantage on Wisdom saving throws. On a failed save, you enter a state of uncontrollable rage for 1 hour. During this time, you gain +2 to Strength and Constitution but are prone to sudden outbursts."
      }
    ],
    "levelRequirementReason": "The collar's curse requires a character with experience to manage its effects.",
    "vendorReason": "Wario Land has connections within Bowser’s realm and sells items from various factions, including this relic.",
    "shippingDetail": "Ships via Barking Box Delivery's Express Pack service. Expedited shipping ensures the collar arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action for Chain Grapple Defense; Instantaneous for Raging Beast upon wearing",
      "duration": "Until end of turn for Chain Grapple Defense; 1 hour for Raging Beast",
      "endsWhen": "Chain Grapple Defense ends when the collar is removed or when the grapple attempt fails; Raging Beast ends after 1 hour or when the curse is lifted by a remove curse spell.",
      "charges": "Unlimited, but limited to once per long rest"
    },
    "priceReason": "The collar's cursed nature and unique crafting by Bowser's forces justify its moderate price.",
    "priceOriginal": 5600,
    "priceReviewedAt": "2026-07-23T20:17:58.907751+00:00",
    "aiReviewedAt": "2026-07-23T20:17:58.907751+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_chain_chomp_talisman": {
    "id": "wario_land_chain_chomp_talisman",
    "name": "Chain Chomp Talisman",
    "description": "The Chain Chomp Talisman is a cursed amulet that harnesses the fury of Teyvat's legendary creature. Crafted from twisted iron and imbued with the essence of a Chain Chomp, it grants its wearer an unholy bond with these fearsome beasts. When wielded in combat within Teyvat, the talisman triggers a powerful elemental reaction with either wind or fire, bolstering your attacks with raw energy. However, the bond is not without cost; there's a 30% chance of summoning a Chain Chomp to aid—or attack—during battle, making it both a boon and a bane for its owner.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐍",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Chain Chomp Bond",
      "Elemental Reaction"
    ],
    "vendor": "wario_land",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Chain Chomp Bond",
        "rules": "Activates on entering Teyvat. There is a 30% chance (DC 15 Dexterity save) to summon a Chain Chomp during combat, providing assistance but also posing a risk of attack. The effect ends when the wearer leaves Teyvat or after one hour."
      },
      {
        "title": "Elemental Reaction",
        "rules": "When used in Teyvat, triggers an elemental reaction with either wind or fire, enhancing your Chain Chomp weapon attacks by +2d6 damage for 10 minutes. The effect ends when the talisman is removed from combat."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to handle the inherent risks and power of the talisman.",
    "vendorReason": "Wario Land has extensive connections with Teyvat and can source rare, cursed artifacts like this amulet.",
    "shippingDetail": "Ships via Pipe Express; delivery is swift but requires a special in-world courier to handle the artifact's energy signature.",
    "usage": {
      "activation": "Passive effect when in Teyvat, active during combat with Chain Chomp weapons.",
      "duration": "10 minutes for elemental reaction, one hour summoning chance duration.",
      "endsWhen": "Effect ends upon leaving Teyvat or after one hour of combat.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price reflects the talisman's cursed nature, elemental power, and the risk it poses.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T20:18:03.026652+00:00",
    "aiReviewedAt": "2026-07-23T20:18:03.026652+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_checkpoint_flag_pole": {
    "id": "wario_land_checkpoint_flag_pole",
    "name": "Bent Checkpoint Flag Pole",
    "description": "The Bent Checkpoint Flag Pole stands as a testament to the relentless power of Wario Land's stages. This sturdy, yet visibly bent pole has endured countless explosions and still marks the safe passage for heroes. Once downed, allies can return here at the start of their next long rest. Its bent form adds a layer of challenge; it now requires disadvantage on Athletics checks to climb. A clear marker, it grants advantage on Survival checks for those lost in the vastness of Wario's world.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚩",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Safe Return Point",
      "Disadvantage on Climbing"
    ],
    "vendor": "wario_land",
    "shippedBy": "Midpoint Movers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Safe Return Point",
        "rules": "Allies can return to this point at the start of their next long rest if they were downed nearby. This effect is limited to once per long rest."
      },
      {
        "title": "Disadvantage on Climbing",
        "rules": "When attempting to climb this pole, characters must succeed on a Strength (Athletics) check with disadvantage. This condition persists until the pole is repaired or replaced."
      }
    ],
    "levelRequirementReason": "This checkpoint is designed for novice heroes who might need it as they progress through their early stages.",
    "vendorReason": "Wario Land's Course Safety Division regularly supplies these poles to ensure the safety of all adventurers in his world.",
    "shippingDetail": "Shipped directly from Wario Land headquarters, ensuring timely delivery through their specialized courier service.",
    "usage": {
      "activation": "Passive effect for allies within range; climbing requires a check with disadvantage.",
      "duration": "Persistent until repaired or replaced.",
      "endsWhen": "The pole is removed or rendered unusable by external means.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item's balanced price reflects its utility for early-stage adventurers and the resources required to manufacture a sturdy yet bendable checkpoint flag pole.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-23T20:18:10.662633+00:00",
    "aiReviewedAt": "2026-07-23T20:18:10.662633+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_cheep_cheep_scales": {
    "id": "wario_land_cheep_cheep_scales",
    "name": "Cheep Cheep Scale Armor",
    "description": "The Cheep Cheep Scale Armor is a rugged vest made from fish scales sewn into makeshift armor by desperate soldiers. Its surface glistens with a slick sheen, enhancing its wearer's swimming prowess. While it provides +1 AC when wet or underwater, the armor emits an unmistakable 'fishy' scent that can hamper social interactions on land. The Underwater Resistance Crafters crafted this armor with a unique blend of durability and functionality to help soldiers survive aquatic battles.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐟",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Wet Advantage",
      "Scent of Fish"
    ],
    "vendor": "wario_land",
    "shippedBy": "Aquatic Armory",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wet Advantage",
        "rules": "When the wearer is wet or underwater, they gain a +1 bonus to their Armor Class (AC). This effect ends when the armor dries out."
      },
      {
        "title": "Scent of Fish",
        "rules": "The Cheep Cheep Scale Armor emits a strong fishy odor. While wearing it on land, the wearer has disadvantage on Charisma (Persuasion and Insight) checks and Stealth checks. This effect is always active while in dry conditions."
      }
    ],
    "levelRequirementReason": "The armor's craftsmanship requires basic sewing skills, making it accessible to characters of any level.",
    "vendorReason": "Wario Land has a robust network for underwater gear due to their extensive operations in wet environments.",
    "shippingDetail": "The armor is shipped via the Aquatic Express, ensuring timely delivery even through turbulent waters.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous while wet or underwater; ends when dry",
      "endsWhen": "Drying out of the armor",
      "charges": "Unlimited"
    },
    "priceReason": "The armor's unique materials and craftsmanship justify its moderate price, making it a valuable addition to any adventurer's gear.",
    "priceOriginal": 4700,
    "priceReviewedAt": "2026-07-23T20:18:18.510945+00:00",
    "aiReviewedAt": "2026-07-23T20:18:18.510945+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_civil_war_bob_omb_casing": {
    "id": "wario_land_civil_war_bob_omb_casing",
    "name": "Civil War Bob-omb Casing",
    "description": "The Civil War Bob-omb Casing is a rusted, war-torn shell from Bowser's defective munitions batch. Crafted during the siege of Toad Town, it retains the volatile powder that made it deadly in the hands of Bowser's forces. When filled with black powder (DC 13 Crafting check), it becomes a throwable explosive capable of devastating an area or serving as a makeshift lantern when lit. However, its unstable nature means there’s always a risk—25% chance to detonate prematurely and deal 1d6 fire damage to the wielder.",
    "category": "equipment",
    "price": 1000,
    "icon": "💣",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Explosive Throwing",
      "Unstable Casing"
    ],
    "vendor": "wario_land",
    "shippedBy": "Bombastic Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Explosive Throwing",
        "rules": "When filled with black powder, the casing becomes a throwable explosive. On a successful attack roll against an enemy within 10 feet, it deals 2d6 fire damage in a 10-foot radius centered on the target. The casing can be used once per long rest."
      },
      {
        "title": "Unstable Casing",
        "rules": "There is a 25% chance (roll a d4; if you roll a 1, it detonates prematurely) that the casing will explode in your hands, dealing 1d6 fire damage to you. This effect can occur once per short rest."
      }
    ],
    "levelRequirementReason": "This item is common and intended for beginners to experiment with explosive crafting.",
    "vendorReason": "Wario's Land shop caters to those seeking unique and often dangerous items, from Bowser's defective munitions to rare trinkets.",
    "shippingDetail": "Delivered by Bombastic Box Express with a 1d6 hour delay due to the explosive nature of the contents.",
    "usage": {
      "activation": "Crafting check DC 13 for filling; action or bonus action for throwing or igniting as a lantern (fuse glows).",
      "duration": "Instantaneous when thrown, until extinguished by normal means when used as a lantern.",
      "endsWhen": "Detonates prematurely on failed checks or if damaged, exhausted after one use unless refilled and rechecked.",
      "charges": "Unlimited uses per day with a DC 13 check to refill."
    },
    "priceReason": "The casing's historical significance and the risk involved in its crafting justify this price, making it a worthwhile but dangerous find for adventurers.",
    "priceOriginal": 4900,
    "priceReviewedAt": "2026-07-23T20:18:40.266651+00:00",
    "aiReviewedAt": "2026-07-23T20:18:40.266651+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_civil_war_boo_lantern": {
    "id": "wario_land_civil_war_boo_lantern",
    "name": "Civil War Boo Lantern",
    "description": "The Civil War Boo Lantern exudes a haunting light, its glass glowing faintly as if illuminated by spectral flames. Crafted from the remnants of a long-forgotten battlefield, it harnesses the restless spirits of fallen Boo warriors. This lantern not only illuminates but also reveals hidden traps and hazards lurking in the shadows, ensuring safer passage through darkened areas. Its eerie glow can even be used to distract foes with a spectral Boo, temporarily frightening one enemy within 30 feet.",
    "category": "equipment",
    "price": 1000,
    "icon": "👻",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Illuminate: Reveal Hidden Hazards",
      "Boo Distraction"
    ],
    "vendor": "wario_land",
    "shippedBy": "Eerie Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Illuminate: Reveal Hidden Hazards",
        "rules": "The lantern casts bright light in a 30-foot radius, and dim light for an additional 30 feet. It reveals the presence of hidden traps within this area as if by magic. This effect is active until the end of your next turn."
      },
      {
        "title": "Boo Distraction",
        "rules": "Once per day, you can release a spectral Boo from the lantern to distract an enemy. The Boo distracts one target within 30 feet, causing it to make a Wisdom saving throw (DC 12). On a failed save, the target is frightened for 1 minute."
      }
    ],
    "levelRequirementReason": "Crafted from battle-scarred materials and imbued with powerful Boo spirits, this lantern requires a level 5 character to wield.",
    "vendorReason": "Wario Land's extensive network of underground contacts ensures they have access to rare and unique items like the Civil War Boo Lantern.",
    "shippingDetail": "The lantern is shipped in a specially reinforced box to prevent any accidental release of its spectral contents during transit.",
    "usage": {
      "activation": "Activate as a bonus action at the start of your turn.",
      "duration": "Until the end of your next turn, or until the effect ends early by an external force.",
      "endsWhen": "The effect ends if you take any hostile action or if the lantern is destroyed.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Crafted from rare materials and imbued with powerful Boo spirits, this lantern commands a price of 1000 XP.",
    "priceOriginal": 5300,
    "priceReviewedAt": "2026-07-23T20:18:54.083671+00:00",
    "aiReviewedAt": "2026-07-23T20:18:54.083671+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_civil_war_coin_set": {
    "id": "wario_land_civil_war_coin_set",
    "name": "Mushroom Kingdom Civil War Coin Set",
    "description": "This coin set, a testament to the bitter conflict between Wario and the Mushroom Kingdom, gleams with a dark luster from its macabre origin. Each coin carries the emblem of a fallen faction, and the set is incomplete due to Wario's greedy hand. The coins are cursed; every time one is spent, there’s an eerie 10% chance that a vengeful spirit of the original owner appears, demanding its return with chilling insistence.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪙",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Coin Spend: Advantage on Charisma checks for the faction issuing the coin",
      "Cursed Coins"
    ],
    "vendor": "wario_land",
    "shippedBy": "Coin Purse",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Coin Spend: Advantage on Charisma Checks",
        "rules": "When you spend a coin from this set to make a Charisma check, you gain advantage. This effect lasts until your next long rest."
      },
      {
        "title": "Cursed Coins",
        "rules": "Each coin has a 10% chance to summon the ghost of its original owner if spent in combat. The ghost demands the coin’s return and provides no additional benefit beyond this. The ghost fades after one hour unless calmed by returning the coin."
      }
    ],
    "levelRequirementReason": "Requires a character with some experience to handle such cursed relics responsibly.",
    "vendorReason": "Wario Land Numismatics specializes in collecting and selling artifacts from his various conflicts, including this controversial set.",
    "shippingDetail": "Ships via Wario's trusted Coin Purse, known for its impeccable delivery service even through the most treacherous territories.",
    "usage": {
      "activation": "Activating by spending a coin from the set during a Charisma check.",
      "duration": "One use per long rest.",
      "endsWhen": "The effect ends after one hour if not used or when the ghost is calmed.",
      "charges": "Unlimited, but limited to one use per long rest."
    },
    "priceReason": "Balanced as a cursed artifact with unique utility and risk, this item represents an uncommon and valuable relic of conflict.",
    "priceOriginal": 5600,
    "priceReviewedAt": "2026-07-23T20:18:45.892961+00:00",
    "aiReviewedAt": "2026-07-23T20:18:45.892961+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_civil_war_fire_flower_relic": {
    "id": "wario_land_civil_war_fire_flower_relic",
    "name": "Civil War Fire Flower Relic",
    "description": "The Civil War Fire Flower Relic is a singed and weathered relic of a once-glorious Fire Flower. Its petals are scorched, yet it still smolders with a faint, dangerous heat. This artifact was recovered from a Toad regiment's last stand during the Mushroom Kingdom's conflict, where it fought valiantly but suffered damage. Although weakened by time and battle, it still has enough life to cast a fire spell, though not without its drawbacks: it emits smoke that hampers stealth and may be claimed back by loyalists of the Toads, whose fierce loyalty is unwavering.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Weakened Flame",
      "Toad's Demand"
    ],
    "vendor": "wario_land",
    "shippedBy": "War Surplus Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weakened Flame",
        "rules": "The user may cast a weakened version of Burning Hands. This spell deals 2d6 fire damage to all creatures in a 15-foot cone, but the save DC is only 13 due to the relic’s compromised state."
      },
      {
        "title": "Toad's Demand",
        "rules": "After using the relic, there is a 50% chance that it will wilt and fail its next use. Additionally, any Toads who witness the activation gain advantage on Charisma (Persuasion) checks to demand the relic back."
      }
    ],
    "levelRequirementReason": "This relic can be used by lower-level characters due to its weakened state and the risk of failure.",
    "vendorReason": "Wario Land acquired this relic from battlefield salvage, making it available in his inventory.",
    "shippingDetail": "Ships via War Surplus Express; may take a week due to high demand for such relics.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The relic wilts and fails its next use, or is destroyed by a failed activation.",
      "charges": "1/Day"
    },
    "priceReason": "The price reflects the item’s uncommon rarity, weakened state, and the risk of failure.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T20:18:37.098712+00:00",
    "aiReviewedAt": "2026-07-23T20:18:37.098712+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_civil_war_power_star_shard": {
    "id": "wario_land_civil_war_power_star_shard",
    "name": "Civil War Power Star Shard",
    "description": "The Civil War Power Star Shard is a jagged fragment of a once-glorious Starman, salvaged from the chaotic aftermath of a desperate defense. Crafted from the debris of Power-Up Siege Debris, this shard pulses with raw energy, a relic of a conflict that shaped the land. It can be activated to grant temporary hit points equal to your level during a short rest, but its unstable nature makes it unpredictable—there's a 25% chance it will explode in your hand, dealing 1d6 force damage within a 5-foot radius.",
    "category": "equipment",
    "price": 1000,
    "icon": "⭐",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Activate shard",
      "Unstable"
    ],
    "vendor": "wario_land",
    "shippedBy": "Stellar Salvage Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Activate Shard",
        "rules": "As an action, you can activate the shard to gain temporary hit points equal to your level (once per short rest). The shard explodes with a flash of light and a loud crack if it is unstable, dealing 1d6 force damage in a 5-foot radius. This effect ends immediately."
      },
      {
        "title": "Unstable",
        "rules": "The shard has a 25% chance to explode each time you activate it. If it does, it deals 1d6 force damage within a 5-foot radius and is destroyed. The explosion can trigger additional effects, such as random encounters with star hunters."
      }
    ],
    "levelRequirementReason": "Requires level 3 to wield the shard safely.",
    "vendorReason": "Wario Land has a network of scavengers and historians who can source rare artifacts like this shard.",
    "shippingDetail": "Delivered via the Swift Star Messenger, ensuring safe transport.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (ends on explosion or successful activation)",
      "endsWhen": "Explodes or successfully activates to grant temporary hit points",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a rare item, this shard offers potent but risky abilities.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T20:19:05.728712+00:00",
    "aiReviewedAt": "2026-07-23T20:19:05.728712+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_civil_war_time_capsule": {
    "id": "wario_land_civil_war_time_capsule",
    "name": "Mushroom Kingdom Civil War Time Capsule (Pre-Opened)",
    "description": "This rusted, bullet-pocked time capsule rests uneasily on your hands. The capsule's exterior bears the scars of Wario’s hasty looting during a chaotic civil war. Inside, you find a motley collection of relics: several dull propaganda leaflets, a bent spoon that clatters with each shake, and an assortment of rusty buttons. One item among them glimmers faintly despite its age; there's a 10% chance it holds the rare gem Wario overlooked during his greed-fueled looting.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Open Capsule",
      "Haunted Greed"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Time Capsule Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Open Capsule",
        "rules": "When you open this capsule, you find 1d4 useless war items (rusty buttons, propaganda leaflets, a bent spoon). With a successful DC 10 Intelligence (History) check, one of the items is revealed to be a valuable gem worth up to 100 gp."
      },
      {
        "title": "Haunted Greed",
        "rules": "For the next hour, you must make saving throws with disadvantage against any checks made to resist stealing or greed-related actions. The capsule's haunting effect ends when it is destroyed by fire or if an hour passes without opening it."
      }
    ],
    "levelRequirementReason": "This item requires no specific level, as it can be found in various contexts and is a remnant of Wario’s chaotic looting.",
    "vendorReason": "Wario Land Time Travel sells this capsule as part of his wares, offering relics from the civil war he inadvertently plundered.",
    "shippingDetail": "The capsule is delivered with a special time-sensitive label; if not opened within one week, it expires and disintegrates into dust.",
    "usage": {
      "activation": "Standard action to open the capsule",
      "duration": "Instantaneous opening, effects last for an hour thereafter",
      "endsWhen": "Destroyed by fire or after one hour of unopened storage",
      "charges": "Unlimited"
    },
    "priceReason": "The item's historical value and the chance at a rare gem justify this price, balancing the risk with potential reward.",
    "priceOriginal": 5400,
    "priceReviewedAt": "2026-07-23T20:18:56.854879+00:00",
    "aiReviewedAt": "2026-07-23T20:18:56.854879+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_coin_brick_dust": {
    "id": "wario_land_coin_brick_dust",
    "name": "Crushed Coin Brick Dust",
    "description": "Crushed Coin Brick Dust is a shimmering golden powder that once formed sturdy blocks of currency. Gathered from the remnants of war-torn battlefields, this dust offers both treasure hunters and adventurers an edge in their quests. Sprinkling it around reveals hidden valuables, but its glittery nature makes you an easy target for opportunistic thieves. It's a relic of economic strife, now repurposed into a tool for those who seek to uncover secrets and outwit the greedy.",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Hidden Treasure Revealer",
      "Greedy Attraction"
    ],
    "vendor": "wario_land",
    "shippedBy": "Glittering Goods Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Treasure Revealer",
        "rules": "Sprinkle this dust around an area of your choice within 30 feet. For the next hour, you and any creatures with a Perception check can gain advantage on checks to detect hidden or secret treasure in that area."
      },
      {
        "title": "Greedy Attraction",
        "rules": "While carrying Crushed Coin Brick Dust, you have disadvantage on Dexterity (Stealth) checks. Additionally, there is a 10% chance per day of random encounters with greedy creatures such as thieves or scavengers."
      }
    ],
    "levelRequirementReason": "Requires no special level to use but rewards adventurers who can handle the added attention and risk.",
    "vendorReason": "Wario Land often deals in items from destroyed economic infrastructure, making this relic a perfect fit for his inventory.",
    "shippingDetail": "Ships via Glittering Goods Express, ensuring the dust is delivered in its pristine state to avoid contamination by external sources.",
    "usage": {
      "activation": "Instantaneous action (sprinkle)",
      "duration": "1 hour per use",
      "endsWhen": "Used up or after one hour",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity and unique utility justify its price, offering a valuable tool for treasure hunters without being overpowered.",
    "priceOriginal": 3600,
    "priceReviewedAt": "2026-07-23T20:19:01.193369+00:00",
    "aiReviewedAt": "2026-07-23T20:19:01.193369+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_coin_magnet": {
    "id": "wario_land_coin_magnet",
    "name": "Wario Land Coin Magnet",
    "description": "The Wario Land Coin Magnet is a haphazardly crafted device, its surface littered with rust and misshapen metal. This relic was forged in the depths of Wario's Workshop, where coins are considered mere detritus to be gathered for nefarious schemes. It hums faintly as it draws loose coins within 15 feet towards its magnetic core, but beware—this device is not foolproof and will only attract non-sentient currency. Sentient treasures or those imbued with magic remain beyond its reach.",
    "price": 1000,
    "icon": "🧲",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Automatically attracts nearby loose coins",
      "Ignored by sentient or enchanted currency"
    ],
    "vendor": "wario_land_shop",
    "shippedBy": "Yellow Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Coin Attraction Radius",
        "rules": "The Wario Land Coin Magnet has a 15-foot radius of attraction. Any loose, non-sentient coin within this area is pulled towards the device as an action by the user."
      },
      {
        "title": "Sentient Currency Exclusion",
        "rules": "Coins or currency that are sentient or enchanted do not respond to the magnet's pull and remain unaffected. This effect does not require a saving throw but negates the coin attraction within 10 feet of any coin with an intelligence score."
      }
    ],
    "levelRequirementReason": "This device is simple enough for even novice adventurers, requiring no advanced skill to wield.",
    "vendorReason": "Wario Land, being a notorious coin collector himself, sells this handy tool at his shop.",
    "shippingDetail": "Ships via Yellow Crate with delivery within three days from Wario's Workshop.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The device exhausts its charges after five uses or is destroyed by a successful DC 12 damage roll.",
      "charges": "5"
    },
    "priceReason": "Given the coin magnet's simplicity and utility, it is priced at 1000 XP, ensuring it remains accessible for beginning adventurers.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T20:19:22.274497+00:00",
    "aiReviewedAt": "2026-07-23T20:19:22.274497+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_coral_fleet_soul_pearl": {
    "id": "wario_land_coral_fleet_soul_pearl",
    "name": "Coral Fleet Soul Pearl",
    "description": "The Coral Fleet Soul Pearl glimmers with a faint, iridescent sheen that seems to hold the whispers of distant seas and forgotten trade routes. This shimmering pearl is said to have been crafted by Noki Elders, who wove the secrets of both worlds into its very core. When worn, it grants access to hidden routes within Diamond City, allowing for faster and more efficient trade transactions. However, prolonged use causes a subtle mental fatigue that requires rest to overcome.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Hidden Routes",
      "Trade Secrets"
    ],
    "vendor": "wario_land",
    "shippedBy": "Noki Coral Fleet Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Hidden Routes",
        "rules": "The wearer gains advantage on Navigation checks within Diamond City and can move through crowded areas as if they had the Agile trait. This effect lasts for an hour and ends when the wearer completes a long rest."
      },
      {
        "title": "Trade Secrets",
        "rules": "For each 24-hour period this item is worn, the user gains a +10% trade bonus on all Coral Fleet transactions. This benefit stacks with other bonuses but cannot exceed +30%. The effect ends when the item's charges are exhausted."
      }
    ],
    "levelRequirementReason": "The intricate crafting and the mental strain of using this artifact require a higher level character to effectively utilize its benefits.",
    "vendorReason": "Wario Land maintains extensive trade networks with the Coral Fleet, making it natural for him to offer items that enhance these connections.",
    "shippingDetail": "The pearl is carefully packed in a waterproof container and delivered via Noki's fleet of swift ocean vessels.",
    "usage": {
      "activation": "Passive effect, no activation required.",
      "duration": "Until the wearer completes a long rest or the item's charges are exhausted.",
      "endsWhen": "The effect ends when the wearer completes a long rest or the item's charges are depleted due to prolonged use.",
      "charges": "Unlimited uses per day, but exhaustion of charges requires a short rest."
    },
    "priceReason": "This price reflects the rarity and utility of the pearl, balancing its powerful effects with manageable costs for players of appropriate level.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T20:19:39.678697+00:00",
    "aiReviewedAt": "2026-07-23T20:19:39.678697+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_course_clear_flag": {
    "id": "wario_land_course_clear_flag",
    "name": "Course Clear Flag",
    "description": "The Course Clear Flag, a small but resilient flag made from durable cloth and fabric remnants of old courses. It's a relic that marks your progress on treacherous tracks, offering a morale boost to those who recall simpler times. However, it can also signal surrender or cause nostalgia among NPCs who lived through the pre-war era, making it both a beacon of hope and a reminder of darker days.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏁",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Morale Boost",
      "Nostalgic"
    ],
    "vendor": "wario_land",
    "shippedBy": "Checkpoint Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Morale Boost",
        "rules": "When a party member plants the flag on a map, allies within sight gain advantage on their next ability check. This effect lasts until the end of the next long rest."
      },
      {
        "title": "Nostalgic",
        "rules": "Any NPC from the pre-war era who sees the flag must succeed on a DC 12 Wisdom saving throw or become sadder, feeling a deep longing for times past. The effect lasts until they are no longer in sight of the flag."
      }
    ],
    "levelRequirementReason": "This item is suitable for any player to use as it serves more as an emotional and strategic tool than combat-oriented power.",
    "vendorReason": "Wario Land, being a nostalgic figure in the gaming world, sells this flag as part of his merchandise line celebrating classic game memories.",
    "shippingDetail": "Ships via standard courier service with a delay of one week due to historical theme handling.",
    "usage": {
      "activation": "A bonus action is required to plant the flag on a map or terrain.",
      "duration": "Until the end of the next long rest, unless destroyed.",
      "endsWhen": "The flag is destroyed or removed from the map.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects its sentimental value and utility in enhancing party morale without being overly powerful.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T20:19:15.008322+00:00",
    "aiReviewedAt": "2026-07-23T20:19:15.008322+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_desert_satchel": {
    "id": "wario_land_desert_satchel",
    "name": "Desert Satchel",
    "description": "The Desert Satchel, a worn leather pouch adorned with intricate patterns of desert flora, holds secrets that have eluded even the most vigilant smugglers. This artifact can be used to reveal hidden routes across the vast sands, making travel through the desert a breeze. However, if it is opened within Diamond City, a curse activates, causing the owner's next three actions to fail due to a mysterious sandstorm in their mind.",
    "price": 1000,
    "icon": "🧭",
    "stock": 20,
    "rarity": "common",
    "effects": [
      "Reveals hidden desert routes",
      "Triggers a temporary failure on next three actions when opened in Diamond City"
    ],
    "vendor": "wario_land",
    "shippedBy": "Desert Wind Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Desert Routes Revelation",
        "rules": "When the Desert Satchel is used, it grants the user knowledge of previously unknown shortcuts and safe passages across desert terrains. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Curse Upon Opening in Diamond City",
        "rules": "If opened within Diamond City, the owner must succeed on a DC 15 Wisdom saving throw or suffer from a temporary failure on their next three actions. The curse is dispelled by spending one hour outside of the city and performing a ritual."
      }
    ],
    "levelRequirementReason": "The Desert Satchel's cryptic nature requires its owner to have some experience navigating through challenging terrains.",
    "vendorReason": "Wario Land is known for his extensive smuggling operations and the satchels he supplies are in high demand among desert explorers.",
    "shippingDetail": "Ships via trusted Desert Wind Couriers, ensuring safe delivery through treacherous routes.",
    "usage": {
      "activation": "Used as a bonus action to reveal hidden routes or trigger the curse in Diamond City.",
      "duration": "Until the end of your next short or long rest for route revelation; lasts until dispelled for the curse.",
      "endsWhen": "Upon completion of its effect, either by natural means or ritual.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Desert Satchel's rarity and unique abilities justify this higher price point.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-23T20:19:46.822670+00:00",
    "aiReviewedAt": "2026-07-23T20:19:46.822670+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_donut_block": {
    "id": "wario_land_donut_block",
    "name": "Unstable Donut Block",
    "description": "The Unstable Donut Block is a repurposed culinary creation, now a deadly trap for unwary adventurers. Crafted from crumbling pastries and coated in powdered sugar, it stands firm until a creature steps upon it, triggering an avalanche of sugary chaos. The block can support up to 200 lbs but crumbles into a deadly cascade of donuts after one round. This is Trap Engineering's (Platform Division) finest work, known for its reliability and danger.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍩",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Donut Avalanche",
      "Obvious Trap"
    ],
    "vendor": "wario_land",
    "shippedBy": "Falling Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Donut Avalanche",
        "rules": "When a creature stands on the block, it crumbles into a deadly cascade of donuts after one round. Creatures caught in the avalanche take 10d6 bludgeoning damage and are restrained until they succeed on a DC 15 Strength saving throw."
      },
      {
        "title": "Obvious Trap",
        "rules": "The trap's presence is obvious, giving creatures disadvantage on Deception checks to hide it. Additionally, any creature that knowingly steps onto the block must make a DC 15 Wisdom (Perception) check or be caught in the avalanche."
      }
    ],
    "levelRequirementReason": "This trap is designed for quick setup and easy deployment by adventurers of all levels.",
    "vendorReason": "Wario Land's Trap Engineering division specializes in crafting traps that are both effective and dangerous, making the Unstable Donut Block a staple item in their inventory.",
    "shippingDetail": "Delivered via Falling Freight with a 1d4 round delay to ensure the block is still unstable upon arrival.",
    "usage": {
      "activation": "Instantaneous, triggered when a creature steps on it.",
      "duration": "One round until avalanche occurs.",
      "endsWhen": "The block crumbles and triggers its effect.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced for common use, the Unstable Donut Block offers a high risk-reward dynamic that aligns with its common rarity.",
    "priceOriginal": 4100,
    "priceReviewedAt": "2026-07-23T20:19:29.541196+00:00",
    "aiReviewedAt": "2026-07-23T20:19:29.541196+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_doughnut_gravity_key": {
    "id": "wario_land_doughnut_gravity_key",
    "name": "Doughnut Gravity Key",
    "description": "The Doughnut Gravity Key is a whimsical relic from Wario Land’s vertical zones. Crafted from golden dough and imbued with the essence of Wario's garlic, it defies gravity in its very form. When activated, it grants the user triple their jump height and ensures they land perfectly safe every time. Its second effect allows for traversal of sheer walls like a rope ladder, making secret passages accessible to anyone who wields this key.",
    "price": 1000,
    "icon": "🍩",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Triple Jump Height",
      "Vertical Wall Climbing"
    ],
    "vendor": "wario_land",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Triple Jump Height",
        "rules": "When the user touches the ground after jumping with this key, they gain an additional +20 feet of altitude. This effect lasts until the start of their next turn and triggers only once per short or long rest."
      },
      {
        "title": "Vertical Wall Climbing",
        "rules": "The user can climb sheer vertical surfaces as if using a rope ladder. This effect functions continuously while in contact with the wall, but it ends immediately if the user is not touching the wall."
      }
    ],
    "levelRequirementReason": "This key is designed for beginners who need to master basic movement mechanics before tackling more complex challenges.",
    "vendorReason": "Wario Land is a master of vertical zones and naturally sells items that enhance navigation within these environments.",
    "shippingDetail": "Delivered via Warp Whistle's express courier service, ensuring the key arrives in perfect condition.",
    "usage": {
      "activation": "Uses an action to activate; ends at the start of their next turn unless climbing a wall or jumping.",
      "duration": "Instantaneous (ends at the start of the user’s next turn)",
      "endsWhen": "The start of the user's next turn, when not in use for vertical climbing or jumping",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "This price reflects its legendary rarity and ease-of-use for beginners, making it a fair value.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T20:19:36.510529+00:00",
    "aiReviewedAt": "2026-07-23T20:19:36.510529+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_dry_bones_ribcage": {
    "id": "wario_land_dry_bones_ribcage",
    "name": "Dry Bones Ribcage Armor",
    "description": "Crafted from the very bones of ancient Koopa warriors, this ribcage armor is a grim testament to their unyielding spirit. The armor rattles ominously when you move, and its rusty wire holds it together with spiteful intent. It offers +2 AC but imposes disadvantage on Stealth checks (the bones rattle), and grants advantage in Charisma checks against skeletal creatures, drawing them into your presence. When damaged, there's a 50% chance for the ribcage to reassemble itself, restoring one point of AC. However, it carries a curse that disallows death saves if you have already died once.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦴",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Rattling Armor",
      "Skeletal Charm"
    ],
    "vendor": "wario_land",
    "shippedBy": "Rattling Remains Co.",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Rattling Armor",
        "rules": "While wearing this armor, you suffer disadvantage on Stealth checks due to the ominous rattling of its bones. The armor reassembles itself when damaged, restoring one point of AC with a 50% chance."
      },
      {
        "title": "Skeletal Charm",
        "rules": "You gain advantage on Charisma checks against skeletal creatures and undead. However, if you have already died once, you suffer disadvantage on death saving throws."
      }
    ],
    "levelRequirementReason": "This armor's cursed nature and the need to handle its complex mechanics make it suitable for characters of at least level 6.",
    "vendorReason": "Wario Land, known for his eccentric collection of items from the Koopa Kingdom, regularly stocks this unique piece of armor.",
    "shippingDetail": "The armor is shipped in a specially reinforced crate to prevent rattling and ensure safe delivery.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous for reassembly, lasts until removed or destroyed",
      "endsWhen": "Discharged upon destruction or removal",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity and cursed nature of the armor justify its higher price point in terms of XP.",
    "priceOriginal": 6100,
    "priceReviewedAt": "2026-07-23T20:19:55.043500+00:00",
    "aiReviewedAt": "2026-07-23T20:19:55.043500+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_echo_shard": {
    "id": "wario_land_echo_shard",
    "name": "Echo Shard",
    "description": "The Echo Shard is a fractured piece of Dragon Conspiracy sonic tech, its surface etched with ancient runes. Crafted from dragon vocal membranes, it hums faintly when touched. Upon activation, it grants temporary immunity to sonic frequencies but saps allies within 10 feet, dealing 1d6 thunder damage as they are jarred by the residual energy. This relic can be fused into weapons or armor, enhancing their sonic properties and making them more resilient.",
    "price": 1000,
    "icon": "🎵",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Sonic Frequencies",
      "Thunder Damage on Allies"
    ],
    "vendor": "wario_land",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Immunity to Sonic Frequencies",
        "rules": "The wielder gains temporary immunity to all sonic damage and effects for 1 minute. This effect ends if the wielder takes any nonsonic damage."
      },
      {
        "title": "Thunder Damage on Allies",
        "rules": "All allies within 10 feet take 1d6 thunder damage as they are briefly jarred by the residual energy of the Echo Shard, requiring a DC 15 Dexterity saving throw. On a failed save, the ally takes full damage; on a successful save, half damage."
      }
    ],
    "levelRequirementReason": "This relic requires a certain level to wield its power effectively.",
    "vendorReason": "Wario Land has extensive connections with the Dragon Conspiracy and thus can offer this rare artifact.",
    "shippingDetail": "The Echo Shard is carefully packed in a custom-made, sound-dampening crate to ensure safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The wielder takes nonsonic damage or the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "This Echo Shard is crafted from dragon vocal membranes and offers powerful sonic protection, making it a valuable yet balanced purchase.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T20:19:57.904714+00:00",
    "aiReviewedAt": "2026-07-23T20:19:57.904714+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_fake_gold_brick": {
    "id": "wario_land_fake_gold_brick",
    "name": "Wario Land Fake Gold Brick",
    "description": "The Wario Land Fake Gold Brick is a deceptively heavy brick painted to mimic the luster of gold. It appears convincingly from afar, fooling those within twenty feet into thinking it's solid gold. However, its true weight makes it an unwieldy burden, slowing one’s pace by half when carried over any distance. This counterfeit brick was crafted by none other than Wario himself, who specializes in such clever forgeries.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧱",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Looks like gold",
      "Very heavy"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heavy Package Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Appears Golden",
        "rules": "When the brick is not being carried, it grants advantage on Deception checks to deceive others into believing it's genuine gold. This effect lasts until the brick begins to be moved."
      },
      {
        "title": "Extra Weight",
        "rules": "While carrying this brick, you have disadvantage on speed-related checks and ability checks that involve moving swiftly. The effect ends when the brick is no longer being carried."
      }
    ],
    "levelRequirementReason": "This item can be used by any adventurer regardless of level, as it's a common trinket for fooling merchants.",
    "vendorReason": "Wario Land Paint Co. is renowned for its fake gold bricks and other practical jokes, making them the perfect vendor for this item.",
    "shippingDetail": "Due to the brick's weight, it ships via a specialized courier that delivers within one week of ordering.",
    "usage": {
      "activation": "Passive",
      "duration": "Instantaneous when placed on display; ends when carried or sold",
      "endsWhen": "When the brick begins to be moved or sold",
      "charges": "Unlimited"
    },
    "priceReason": "The item's unique properties and vendor reputation make it a common but valuable trinket, justifying its price.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T20:20:06.221645+00:00",
    "aiReviewedAt": "2026-07-23T20:20:06.221645+00:00",
    "aiReviewVersion": 1
  }
};
