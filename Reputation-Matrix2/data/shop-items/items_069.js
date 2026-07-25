// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_069 = {
  "pokemon_item_league_badge_valor": {
    "id": "pokemon_item_league_badge_valor",
    "name": "Valor Badge of Bravery",
    "description": "The Valor Badge of Bravery, a gleaming emblem awarded to trainers who have faced down the most fearsome Pokémon, is more than just a symbol of valor—it’s a tangible reminder of your courage and skill in battle. Its polished surface reflects the light with an almost supernatural shimmer, and it subtly increases your evasion by 10%, making you nimbler on your feet. When you’re facing off against intimidating foes, this badge grants you a +5 bonus to Willpower checks, bolstering your resolve and confidence.",
    "category": "equipment",
    "price": 14000,
    "icon": "🏆",
    "stock": 20,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "evasion_increase_10%",
      "willpower_bonus_5"
    ],
    "vendor": "league_store",
    "shippedBy": "pokecouriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Evasion Increase",
        "rules": "While wearing the Valor Badge of Bravery, you gain a +10% bonus to your Dexterity saving throws. This effect is active as long as the badge is worn and does not require any action or special activation."
      },
      {
        "title": "Willpower Bonus",
        "rules": "When making Willpower checks against intimidating foes, you receive an additional +5 bonus. This effect persists until the end of your next turn after the check is made."
      }
    ],
    "levelRequirementReason": "The Valor Badge requires no level to wear it as a symbol of accomplishment.",
    "vendorReason": "Trainers who have earned the Valor Badge visit the league store for official verification and display purposes.",
    "shippingDetail": "Ships via PokéCourier express, ensuring safe delivery within three days of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous for evasion increase; until the end of your next turn after making a Willpower check against an intimidating foe.",
      "endsWhen": "The badge is removed or lost.",
      "charges": "Unlimited"
    },
    "priceReason": "The Valor Badge’s fair value reflects its status as an epic rarity, symbolizing significant bravery and skill.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:06:15.294099+00:00",
    "aiReviewedAt": "2026-07-25T00:06:15.294099+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_safari_research_note": {
    "id": "pokemon_item_safari_research_note",
    "name": "Safari Research Note - Dusk Mane",
    "description": "The Safari Research Note - Dusk Mane is a leather-bound journal embossed with the iconic Safari Zone emblem. Its pages are filled with detailed, hand-drawn sketches of a Dusk Mane Pokémon's nocturnal behavior and habitat preferences. This invaluable field guide increases your chances of encountering this elusive Pokémon by 10% when used after sunset, and grants you a +2 bonus to Insight checks related to understanding its nature.",
    "category": "curiosities",
    "price": 250,
    "icon": "📝",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_chance_to_encounter_duskmane",
      "bonus_to_insight_checks"
    ],
    "vendor": "safari_shop",
    "shippedBy": "SwiftPony Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Chance to Encounter Dusk Mane",
        "rules": "Activate once per day. When used after sunset, increase the chances of encountering a Dusk Mane Pokémon by 10%. This effect ends when you encounter the Pokémon or at midnight."
      },
      {
        "title": "Bonus to Insight Checks",
        "rules": "While holding this note, gain a +2 bonus on Insight checks related to understanding the behavior and nature of Dusk Mane Pokémon. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This item is accessible to beginners who are just starting their journey in the Safari Zone.",
    "vendorReason": "The Safari Shop specializes in items and guides for trainers venturing into the Safari Zone.",
    "shippingDetail": "Delivered by trusted SwiftPony Couriers within a day of purchase.",
    "usage": {
      "activation": "Use once per day after sunset.",
      "duration": "Until you encounter a Dusk Mane Pokémon or midnight, whichever comes first.",
      "endsWhen": "Encountering the Pokémon or at midnight.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects its rarity and the valuable insights it provides to trainers.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-24T00:08:20.877117+00:00",
    "aiReviewedAt": "2026-07-24T00:08:20.877117+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronal_shard": {
    "id": "almost_edge_item_chronal_shard",
    "name": "Fragment of the Unwound Moment",
    "description": "This Fragment of the Unwound Moment hums with the quiet desperation of forgotten timelines, its surface etched with the ghostly remnants of alternate realities. When held, it grants a fleeting glimpse into potential futures, but prolonged exposure risks entangling one's sanity in the echoes of what *could* have been. Remarkably handy for toasting bread, this shard is as much a conduit to the multiverse as it is a mundane kitchen aid.",
    "category": "curiosities",
    "price": 980,
    "icon": "⏳",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Insight",
      "Sanity Preservation"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Insight",
        "rules": "Holding the Fragment for one minute grants advantage on one skill check of your choice. If you focus too long, there is a 10% chance you become permanently lost in the echoes of potential futures."
      },
      {
        "title": "Sanity Preservation",
        "rules": "While holding this shard, you have resistance to sanity loss from horrifying visions. The effect lasts for one hour per use."
      }
    ],
    "levelRequirementReason": "Suitable for beginners as it aids in navigating the complexities of reality without requiring advanced arcane knowledge.",
    "vendorReason": "The Void Merchant frequents dimensions where such curiosities are common, ensuring they have a steady supply of these enigmatic shards.",
    "shippingDetail": "Ships via inter-dimensional courier with a 24-hour delivery time.",
    "usage": {
      "activation": "Holding the shard for one minute",
      "duration": "One hour per use or until lost in alternate timelines",
      "endsWhen": "Focus is too long, causing temporary loss of reality",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced pricing reflects its utility and the risk involved with prolonged exposure.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T00:08:37.385286+00:00",
    "aiReviewedAt": "2026-07-24T00:08:37.385286+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_echoing_gauntlet": {
    "id": "almost_edge_item_echoing_gauntlet",
    "name": "The Gauntlet of Lost Voices",
    "description": "The Gauntlet of Lost Voices is forged from solidified void-matter, its surface etched with ancient runes that hum faintly. This gauntlet grants the wearer a fleeting connection to the spirits of those who have perished on the edge, their voices whispering secrets and warnings. Its warmth is comforting yet unsettling, as it occasionally causes the wearer to involuntarily rearrange their inventory in bizarre patterns. The gauntlet's whispers are not mere echoes; they provide resistance to fear-based attacks and can momentarily cause enemies to turn on themselves.",
    "category": "equipment",
    "price": 4100,
    "icon": "🧤",
    "stock": 17,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Voice Resistance",
      "Phantom Echo"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "gravitational anomaly",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Voice Resistance",
        "rules": "The wearer gains resistance to all fear effects. This effect is active as long as the gauntlet is worn and lasts until the end of their next turn."
      },
      {
        "title": "Phantom Echo",
        "rules": "Once per short or long rest, the wearer can activate this gauntlet to cause a nearby enemy to attack itself with a melee weapon attack. The effect has a 5% chance to occur each time the gauntlet is worn. This effect lasts for 1 minute and ends when the gauntlet is removed."
      }
    ],
    "levelRequirementReason": "The gauntlet's connection to spirits requires a deep understanding of both life and death, which can only be achieved at higher levels.",
    "vendorReason": "The Edge Wanderer is well-traveled and has encountered the lost souls that infuse this gauntlet with their whispers.",
    "shippingDetail": "Ships via a gravitational anomaly, which can cause delays of up to one week due to unpredictable travel paths.",
    "usage": {
      "activation": "Activates on wear and use. Phantom Echo effect is triggered once per short or long rest.",
      "duration": "Voice Resistance lasts until the end of their next turn. Phantom Echo lasts for 1 minute.",
      "endsWhen": "The gauntlet's effects end when removed.",
      "charges": "Unlimited, but one use of Phantom Echo per day."
    },
    "priceReason": "Balanced at 1000 XP due to its unique abilities and the risk it poses in the hands of unprepared adventurers.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-24T00:08:25.289849+00:00",
    "aiReviewedAt": "2026-07-24T00:08:25.289849+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_void_navigator": {
    "id": "almost_edge_item_void_navigator",
    "name": "The Cartographer's Lament",
    "description": "The Cartographer's Lament is a finely polished sextant crafted from obsidian and silver, its lenses etched with ancient cartographic runes. This unsettling tool does not point to stars but to the very frays in reality where dimensional breaches occur. It allows for brief, perilous traversals through unstable pathways, ideal for escaping awkward social situations or locating hidden donut shops. Use it too often, and you might feel an existential tug that leaves you craving jelly-filled pastries.",
    "category": "premium",
    "price": 14000,
    "icon": "🧭",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Dimensional Traverse",
      "Resilience to Void Attacks"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "temporal courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Dimensional Traverse",
        "rules": "As a bonus action, the user can activate the sextant for a brief dimensional traverse of up to 50 feet. The duration is instantaneous, and it ends when the user exits the unstable pathway or if they take any other action. This effect has no save DC but is limited to once per short rest."
      },
      {
        "title": "Resilience to Void Attacks",
        "rules": "The user gains resistance to damage from void-based attacks for 1 minute upon activation. The effect ends when the duration expires, and it can be used only once per long rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 5 to wield this unstable tool safely.",
    "vendorReason": "The Liminal Trader specializes in esoteric and dangerous items, making The Cartographer's Lament a fitting addition to their inventory.",
    "shippingDetail": "Ships via the Temporal Courier with a delivery delay of one week due to dimensional instability risks during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous; ends on exit or action taken",
      "endsWhen": "Exceeding rest limits, or using another effect",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its dangerous and unstable nature while providing a limited but potent utility.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-24T00:08:40.851475+00:00",
    "aiReviewedAt": "2026-07-24T00:08:40.851475+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_totem_of_the_hunt": {
    "id": "animatopia_totem_of_the_hunt",
    "name": "Totem of the Hunt",
    "description": "The Totem of the Hunt is a weathered bone sculpture adorned with ancient carvings. Crafted from the bones of long-forgotten predators, it whispers secrets of the wild to those who can hear its voice. Wario’s advice still holds true; earplugs are recommended for anyone seeking its guidance. This totem significantly enhances tracking skills and offers a chance to detect hidden paths, though prolonged exposure might drive even the most steadfast mind to distraction.",
    "category": "curiosities",
    "price": 4100,
    "icon": "🐾",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Tracking",
      "Hidden Path Detection"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_worm express courier service",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Enhanced Tracking",
        "rules": "The Totem of the Hunt grants a +2 bonus to Wisdom (Survival) checks. This effect lasts until the end of your next short rest."
      },
      {
        "title": "Hidden Path Detection",
        "rules": "You have advantage on Perception checks made to detect hidden paths or secret doors within 60 feet, with a chance of success at 20%. This effect is active for 1 hour after activation and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires a character level of 4 to harness the totem’s primal magic without succumbing to its whispers.",
    "vendorReason": "Beast Bazaar specializes in mystical curiosities and ancient artifacts, making it a fitting vendor for the Totem of the Hunt.",
    "shippingDetail": "The totem is delivered by a giant worm express, ensuring safe arrival but with a slight delay due to its size.",
    "usage": {
      "activation": "Object interaction action",
      "duration": "1 hour per use",
      "endsWhen": "Ends when the effect duration expires or you are incapacitated.",
      "charges": "Unlimited; regains charges after a long rest."
    },
    "priceReason": "Balanced price reflects its rare and mystical nature, offering significant yet manageable benefits to a character of appropriate level.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-24T00:08:44.834966+00:00",
    "aiReviewedAt": "2026-07-24T00:08:44.834966+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_chronarium_shard": {
    "id": "midlands_item_chronarium_shard",
    "name": "Echo of the Shattered Time",
    "description": "A shard of shattered time, this Echo of the Shattered Time glimmers with a spectrum of timelines, each fragment representing a potential future or past. Held in one's palm, it hums with the weight of uncounted eons, offering fleeting glimpses into moments that could have been—sometimes whimsical, other times dire. This relic grants its bearer a minor taste of fate’s capricious nature, allowing for a one-time chance to influence their path by altering a single attribute temporarily.",
    "category": "curiosities",
    "price": 65000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Glimpse",
      "Fate's Chance"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Glimpse",
        "rules": "Once per day, the wielder may spend an action to focus on the shard. It grants a +1 to +4 bonus (roll d6) to one ability score of their choice for the next 24 hours."
      },
      {
        "title": "Fate's Chance",
        "rules": "Once per day, the wielder may make a DC 15 Wisdom saving throw. On a success, they gain advantage on one ability check or attack roll of their choice that day."
      }
    ],
    "levelRequirementReason": "This relic requires attunement and a certain level of maturity to handle its temporal energies.",
    "vendorReason": "The Forged Heart is known for salvaging and selling the most bizarre, yet functional, relics from the fractured planes.",
    "shippingDetail": "Ships via a dimensional portal, arriving within an hour of placing the order.",
    "usage": {
      "activation": "Action",
      "duration": "24 hours",
      "endsWhen": "The effect ends when the time duration expires or the shard is removed from attunement.",
      "charges": "1 charge per day"
    },
    "priceReason": "Balanced as a rare legendary item, this price reflects its rarity and the risk involved in attuning to it.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-24T00:09:08.873903+00:00",
    "aiReviewedAt": "2026-07-24T00:09:08.873903+00:00",
    "aiReviewVersion": 1
  },
  "internet_godly_reality_flux": {
    "id": "internet_godly_reality_flux",
    "name": "The Source Code of Chaos",
    "description": "The Source Code of Chaos hums with an unstable, electric pulse, a relic from a corrupted server farm that defies the laws of both physics and logic. This artifact grants its wielder the power to subtly manipulate reality itself—teleporting them to random locations within sixty feet or instantly repairing any damaged equipment. However, be wary: the universe's balance is delicate, and each use risks triggering an unpredictable change in the user’s appearance, from hair color to skin tone. Wario, ever the chaos-lover, finds this item irresistible.",
    "category": "premium",
    "price": 1000000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Teleport to Random Location",
      "Instant Equipment Repair"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Quantum Entanglement",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleport to Random Location",
        "rules": "As a bonus action, you can teleport up to sixty feet away from your current location. This effect is instantaneous and does not provoke opportunity attacks. The destination must be within line of sight, but there's a 10% chance that the exact coordinates are off by as much as ten feet in any direction."
      },
      {
        "title": "Instant Equipment Repair",
        "rules": "As a bonus action, you can instantly repair any damaged equipment. This effect restores all hit points to a single piece of equipment within range. The repaired item cannot exceed its maximum hit points. You regain 50 XP upon successful use."
      }
    ],
    "levelRequirementReason": "Even the simplest wizard can appreciate the power and danger of this artifact.",
    "vendorReason": "The cyber_market is known for its eclectic array of unique and powerful items, including those with ties to technology and chaos.",
    "shippingDetail": "Ships via Quantum Entanglement, ensuring swift delivery, but the item's true nature can be detected by sensitive magic sensors.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after three uses. Afterward, it takes a full day to recharge.",
      "charges": "3"
    },
    "priceReason": "The Source Code of Chaos is moderately priced due to its balance between powerful effects and the risk of unpredictable outcomes.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-24T00:09:28.307108+00:00",
    "aiReviewedAt": "2026-07-24T00:09:28.307108+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_ember_of_stormwind": {
    "id": "teyvat_item_ember_of_stormwind",
    "name": "Stormwind's Whisper",
    "description": "Stormwind's Whisper is a tiny, pulsating ember that seems to hum with the raw energy of Barbatos himself. When ignited, it releases a gust of wind magic that can dash you across chasms or create a miniature whirlwind to push back foes. Crafted by the forges of Mondstadt, this ember is as unpredictable as it is powerful—just be wary; it might blow away your snacks in its wake.",
    "category": "consumables",
    "price": 4100,
    "icon": "💨",
    "stock": 78,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Wind Magic Boost",
      "Whirlwind Push"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_sprite",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Wind Magic Boost",
        "rules": "When activated by a bonus action, Stormwind's Whisper grants you the ability to dash across short distances at double your speed for up to 1 minute. The effect ends if you are knocked prone or fall unconscious."
      },
      {
        "title": "Whirlwind Push",
        "rules": "Once per short rest, you can activate this ember to create a gust of wind that pushes back any creature within 5 feet of you. This push has a force equal to your Strength modifier (minimum of 1) and knocks creatures prone if they fail a DC 13 Strength saving throw."
      }
    ],
    "levelRequirementReason": "Stormwind's Whisper requires a level 7 character due to its volatile magic and the risk it poses when misused.",
    "vendorReason": "The Mondstadt Market is known for its eclectic array of items, including unique artifacts like Stormwind's Whisper.",
    "shippingDetail": "Shipped by the Winged Sprite, this item arrives within a week, but handling requires special care in transit to ensure it remains intact.",
    "usage": {
      "activation": "Bonus action or reaction (to dash)",
      "duration": "Up to 1 minute per use",
      "endsWhen": "You fall unconscious or are knocked prone",
      "charges": "Unlimited, but each use expends a charge"
    },
    "priceReason": "Stormwind's Whisper is priced at 1000 XP due to its rare crafting material and unpredictable nature.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-24T00:09:13.719022+00:00",
    "aiReviewedAt": "2026-07-24T00:09:13.719022+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_lion_heart_of_xia": {
    "id": "teyvat_item_lion_heart_of_xia",
    "name": "Xia's Steadfast Resolve",
    "description": "Hewn from the heart of Xia's ancient stone, this crimson gemstone glows with a resilient fire that crackles through your veins. As you hold it, the unyielding spirit of Xia's people flows into you, bolstering your defenses and fortifying your resolve against relentless assaults. In the heat of battle or during arduous quests, this steadfast core ensures you stand firm, ready to weather any storm and refuse to yield.",
    "category": "equipment",
    "price": 14000,
    "icon": "❤️",
    "stock": 32,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "defense_boost",
      "fire_resistance"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "cargo_ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Defense Boost",
        "rules": "Activates as a bonus action. Increases your AC by +2 for 1 minute or until you take damage, then recharges on a short rest."
      },
      {
        "title": "Fire Resistance",
        "rules": "You gain resistance to fire damage while the core is active. Ends when you take fire damage or at the end of each of your turns until the duration expires or the core's use is exhausted."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers, as it enhances basic resilience regardless of class.",
    "vendorReason": "Liyue Harbor is known for its connection to Xia and offers items that embody the region's spirit.",
    "shippingDetail": "Ships via a reliable cargo ship, ensuring timely delivery from the Stone Sea.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until you take damage, then recharges on a short rest",
      "endsWhen": "You take fire damage or at the end of each turn during its duration.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced as it offers defensive benefits without being overly powerful.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-24T00:09:40.873902+00:00",
    "aiReviewedAt": "2026-07-24T00:09:40.873902+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_serpent_scale_of_zan": {
    "id": "teyvat_item_serpent_scale_of_zan",
    "name": "Zan's Everlasting Gaze",
    "description": "A shimmering, iridescent scale from a Serpent of the Deep, Zan's Everlasting Gaze grants you the eerie ability to see in near-darkness and emits a chilling aura that unnerves weaker foes, perfect for stealthy maneuvers or terrifying performances. This artifact, forged by ancient magicks, enhances your perception to 50 feet at night and reduces enemy movement speeds by up to 20 feet within its range of 10 feet.",
    "category": "curiosities",
    "price": 140000,
    "icon": "🐍",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "godly",
    "effects": [
      "night_vision",
      "chill_aura"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "phantom_ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Night Vision",
        "rules": "When activated, Zan's Everlasting Gaze grants you the ability to see in near-darkness out to 50 feet. This effect lasts for 1 minute and ends early if you take damage or end your turn in darkness."
      },
      {
        "title": "Chill Aura",
        "rules": "Within a 10-foot radius, Zan's Everlasting Gaze emits an unnerving aura that reduces the movement speed of creatures within it by up to 20 feet. This effect lasts for 1 minute and ends if you move more than 30 feet or take damage."
      }
    ],
    "levelRequirementReason": "This artifact is crafted with ancient magics, making it accessible even to lower-level adventurers who wish to harness its power.",
    "vendorReason": "Inazuma Imports specializes in unique and powerful artifacts from the deep, ensuring that only those who can appreciate their craftsmanship are given access to such items.",
    "shippingDetail": "The Phantom Ship ensures quick delivery of this delicate artifact through its secret routes, arriving within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "You take damage or end your turn in darkness",
      "charges": "Unlimited; the item recharges at dawn"
    },
    "priceReason": "This artifact's price reflects its mythic rarity, ancient craftsmanship, and limited availability.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-24T00:09:45.622413+00:00",
    "aiReviewedAt": "2026-07-24T00:09:45.622413+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_coin_of_luck": {
    "id": "mushroom_kingdom_item_coin_of_luck",
    "name": "The Lucky Coin of Wario's Fortune",
    "description": "The Lucky Coin of Wario's Fortune is said to have been carried by the notorious thief himself. This copper coin glimmers with an almost unnatural light, and when held tightly in your palm, it subtly shifts between hues of gold and silver. It offers a fleeting boost to your luck but also draws unwanted attention from greedy gophers. Use this coin wisely; its magic is as fickle as the fortune it promises.",
    "category": "curiosities",
    "price": 4100,
    "icon": "💰",
    "stock": 34,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "boosts_luck_stat",
      "attracts_gopher"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "giant_snail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Boosted Luck",
        "rules": "When you roll an ability check, you can expend one use of this coin. On a failed roll, you instead succeed and gain advantage on the next saving throw you make before sunset."
      },
      {
        "title": "Gopher Attraction",
        "rules": "For every 1d4 rounds after activation, you are surrounded by gophers who attempt to steal the coin from your grasp. They do not attack unless provoked but hinder your movement within a 5-foot radius."
      }
    ],
    "levelRequirementReason": "This coin is powerful enough for lower-level characters to gain a significant advantage without overburdening them.",
    "vendorReason": "The Koopa Shop specializes in items that can help adventurers in their quest, and this coin offers just the right balance of utility and danger.",
    "shippingDetail": "The coin is delivered by a giant snail, which can take up to three days depending on weather conditions.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until the end of your next turn or until you use it again.",
      "endsWhen": "Expend all charges or until you lose consciousness.",
      "charges": "Limited uses per day"
    },
    "priceReason": "The coin’s rarity and its dual effect make it a valuable but not overpowered item, offering a unique and challenging mechanic.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T00:09:37.942413+00:00",
    "aiReviewedAt": "2026-07-24T00:09:37.942413+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_pipe_of_transit": {
    "id": "mushroom_kingdom_item_pipe_of_transit",
    "name": "The Pipe of Questionable Destinations",
    "description": "This ornate pipe, crafted from a rare blend of alchemical mushroom roots and enchanted steel, seems to shimmer faintly under moonlight. With a twist and a puff, you might find yourself transported to the hidden lair of robotic mushrooms or Wario’s personal vault. The risk is high, but so too are the rewards—those who dare must be prepared for sudden speed boosts and moments of disorientation that leave them briefly confused.",
    "category": "equipment",
    "price": 14000,
    "icon": "🕳️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "teleport_to_random_location",
      "chance_of_encountering_wario"
    ],
    "vendor": "wario_direct",
    "shippedBy": "rocket_mushroom",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleport to Random Location",
        "rules": "Upon activation, you are transported to a random location. There is a 30% chance of teleporting to Wario’s vault or the lair of robotic mushrooms. The destination is not predetermined and can change with each use."
      },
      {
        "title": "Chance of Encountering Wario",
        "rules": "There is a 25% chance that, upon arrival at your new location, you will encounter Wario. If encountered, he may challenge you to a brief duel or simply steal nearby items. This effect lasts until the end of your turn."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of risk and reward to use responsibly.",
    "vendorReason": "Wario himself ensures that only those who understand his vault’s secrets can access such an item.",
    "shippingDetail": "Delivered swiftly by rocket mushroom, ensuring your adventure begins without delay.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Instantaneous teleportation; effect ends immediately upon arrival at the destination",
      "endsWhen": "Teleportation is complete or if you are encountered by Wario",
      "charges": "Unlimited, but limited to once per day"
    },
    "priceReason": "Balanced price for an item that offers unpredictable yet potentially lucrative teleportation.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-24T00:09:54.813323+00:00",
    "aiReviewedAt": "2026-07-24T00:09:54.813323+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_forbidden_frosting": {
    "id": "leclaire_isle_item_forbidden_frosting",
    "name": "The Nightmare Frosting",
    "description": "The Nightmare Frosting exudes a viscous, obsidian-black consistency that clings to your lips like a forgotten nightmare. As you consume it, the frosting's chill spreads through your body, granting you an increase in attack damage and a chance to confuse foes with its spectral whispers. However, the frost bites deeper into your mind, sapping your sanity at each bite until it reaches a breaking point. Beware, for this treat is more curse than confection.",
    "category": "forbidden",
    "price": 4100,
    "icon": "🖤",
    "stock": 5,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Increased Attack Damage",
      "Confusion on Enemies"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "shadowy_messenger",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Increased Attack Damage",
        "rules": "When you consume the frosting, your attack rolls are increased by +20%. This effect lasts for 1 hour or until you use an action to clear it."
      },
      {
        "title": "Confusion on Enemies",
        "rules": "There is a 30% chance that a creature hit by one of your attacks will be confused as long as the frosting's effect persists. The target must succeed on a Wisdom saving throw (DC 15) or become confused for 1 minute."
      }
    ],
    "levelRequirementReason": "The Nightmare Frosting is too potent and dangerous, even at higher levels, to be consumed by those without significant experience.",
    "vendorReason": "The Pastry Palace, known for its dark and forbidden sweets, offers the Nightmare Frosting as a rare treat only to those who dare to venture into the night markets.",
    "shippingDetail": "Delivered by the Shadowy Messenger, the frosting arrives in an enigmatic box marked with arcane symbols.",
    "usage": {
      "activation": "Eating a portion of the frosting grants its effects immediately.",
      "duration": "1 hour or until cleared.",
      "endsWhen": "The effects are cleared via an action or when the duration ends.",
      "charges": "Unlimited, but each consumption deals temporary insanity."
    },
    "priceReason": "The Nightmare Frosting is priced at 1000 XP due to its potent effects and rare, dark ingredients.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-24T00:10:43.992395+00:00",
    "aiReviewedAt": "2026-07-24T00:10:43.992395+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_godly_gingerbread_weapon": {
    "id": "leclaire_isle_item_godly_gingerbread_weapon",
    "name": "The Sugar Serpent Blade",
    "description": "The Sugar Serpent Blade, crafted from crystallized sugar and enchanted with a thousand gingerbread men's essence, hums with sweet energy. Its sugary edge slices through metal as if it were butter, leaving behind a trail of confectionery delight that can turn foes into dazed, drooling messes. This weapon is not just a tool; it's a temptation that heals the wielder by one hit point per second but risks fueling their own sweet cravings.",
    "category": "equipment",
    "price": 1000000,
    "icon": "🍬",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Sweet Slice",
      "Gingerbread Temptation"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "celestial_carriage",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Sweet Slice",
        "rules": "When you attack with The Sugar Serpent Blade, it deals an additional 5 damage to the target. On a failed Dexterity saving throw (DC 18), the creature is also affected by the 'sugar rush' effect."
      },
      {
        "title": "Gingerbread Temptation",
        "rules": "The weapon passively heals you for 1 hit point per second while in your possession. However, if you consume more than one serving of sweets (as determined by the DM) within an hour, this healing effect is reduced to half its rate."
      }
    ],
    "levelRequirementReason": "The complexity and power of The Sugar Serpent Blade demand a high level of expertise.",
    "vendorReason": "Sweet Supplies specializes in unique and powerful confectionary items, making it the go-to vendor for such a whimsical yet deadly weapon.",
    "shippingDetail": "Delivered by an ethereal courier, this item arrives with a sprinkle of sugar dust.",
    "usage": {
      "activation": "Instantaneous and passive while wielded",
      "duration": "Until the end of your next turn or until consumed",
      "endsWhen": "The weapon is destroyed if exposed to excessive moisture for more than an hour, or if a creature successfully disarms it in combat.",
      "charges": "Unlimited"
    },
    "priceReason": "The Sugar Serpent Blade's godly rarity and unique properties justify its modest price of 1000 XP.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-24T00:10:13.399928+00:00",
    "aiReviewedAt": "2026-07-24T00:10:13.399928+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_gloomshroom": {
    "id": "mushroom_kingdom_item_gloomshroom",
    "name": "Gloomshroom's Lament",
    "description": "Gloomshroom's Lament is a pulsing, violet mushroom harvested from the deepest tunnels of Wario’s underground complex. It emits a sorrowful hum that seems to absorb light, offering temporary but potent darkness vision—perfect for sneaking past grumpy Goombas or escaping a particularly nasty Pink Shell ambush! The mushroom exudes an eerie glow that can make even seasoned heroes feel slightly melancholic; that's just the mushroom’s vibe.",
    "category": "consumables",
    "price": 980,
    "icon": "🌑",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Darkness Vision",
      "Sadness"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "snail_post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Darkness Vision",
        "rules": "Activates as a bonus action, providing temporary darkness vision for 15 seconds. Grants advantage on Dexterity (Stealth) checks and disadvantage on perception checks made to notice the user. Ends when the user takes damage or enters an area of bright light."
      },
      {
        "title": "Sadness",
        "rules": "Minor chance to inflict a 'sadness' status effect, reducing attack power by 1d4 until the start of your next turn. This effect has a 20% chance per use and lasts for 1 round. Save DC is 13."
      }
    ],
    "levelRequirementReason": "The mushroom's potent effects make it accessible to lower-level characters, enhancing their stealth capabilities in dark environments.",
    "vendorReason": "Toad Town Market frequently stocks unique items from the Mushroom Kingdom that can help adventurers in their quests.",
    "shippingDetail": "Shipped via the Snail Post, which is known for its reliable but slightly slower delivery service within the Mushroom Kingdom.",
    "usage": {
      "activation": "Bonus action to activate and use.",
      "duration": "15 seconds of darkness vision duration.",
      "endsWhen": "User takes damage or enters an area of bright light.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The mushroom's rarity and the unique darkness vision effect justify its higher price, making it a valuable but not overpowered tool for adventurers.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-24T00:10:18.712420+00:00",
    "aiReviewedAt": "2026-07-24T00:10:18.712420+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_coin_amplifier": {
    "id": "mushroom_kingdom_item_coin_amplifier",
    "name": "Amplified Coin of Prosperity",
    "description": "The Amplified Coin of Prosperity is a rare coin forged in Wario's notorious vault. Its surface glows faintly with an unnatural warmth, and when held aloft, it amplifies your luck at finding treasure. This particular coin feels particularly warm to the touch, as if it pulses with hidden energy. When chanted over with a suitably greedy mantra, its effects are compounded, making you more prone to attracting unwanted attention from treasure hunters.",
    "category": "equipment",
    "price": 4100,
    "icon": "💰",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Loot Magnifier",
      "Charisma Boost"
    ],
    "vendor": "wario_direct",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Loot Magnifier",
        "rules": "When activated by holding the coin aloft and chanting, you gain a +2 bonus to all Intelligence (Investigation) checks related to finding treasure. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Charisma Boost",
        "rules": "While this coin is in your possession, your Charisma score is increased by 1 for all interactions involving negotiation and persuasion. You can use this ability once per day, and it lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "This coin requires a higher level to activate due to its potent effects on luck and charisma.",
    "vendorReason": "Wario's direct sales are known for their questionable but often effective items, making this coin a perfect fit.",
    "shippingDetail": "Delivered by the mushroom cart with a free bonus of Wario-themed stickers.",
    "usage": {
      "activation": "Bonus action to hold aloft and chant over the coin.",
      "duration": "Until the end of your next short or long rest.",
      "endsWhen": "The effect ends at the start of your next short or long rest.",
      "charges": "Unlimited, but you can only use each effect once per day."
    },
    "priceReason": "The coin's powerful effects and rarity justify its moderate price in gold pieces.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-24T00:10:10.225883+00:00",
    "aiReviewedAt": "2026-07-24T00:10:10.225883+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_koopa_alliance_badge": {
    "id": "mushroom_kingdom_item_koopa_alliance_badge",
    "name": "Koopa Alliance Recognition Token",
    "description": "This polished, intricately carved shell fragment gleams under the Mushroom Kingdom's moonlight, its surface etched with the unmistakable insignia of the Koopa Alliance – a group known for their disciplined yet somewhat intimidating presence in the realm. By donning this badge, you earn the respect and potential patronage of the Koopas, but also the occasional unwelcome request to assist them in reclaiming stolen goods or settling territorial disputes. While it may seem like an honor, be wary; the badge is no mere trinket—its power lies in its ability to grant access to exclusive quests and discounts at Koopa shops.",
    "category": "faction",
    "price": 14000,
    "icon": "🐢",
    "stock": 23,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "access to Koopa Alliance quests",
      "small discount at Koopa shops"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "turtle_delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Access to Koopa Alliance Quests",
        "rules": "Activates as an interaction when you enter a Koopa-controlled area. The badge grants you access to exclusive quests that involve retrieving stolen items or resolving disputes. These quests provide experience points and valuable resources but may also expose you to the wrath of Wario if not handled with care."
      },
      {
        "title": "Small Discount at Koopa Shops",
        "rules": "Passive effect while wearing the badge, providing a 5% discount on purchases made in any Koopa shop. This benefit lasts for one week after each purchase and cannot be combined with other discounts or promotions."
      }
    ],
    "levelRequirementReason": "The badge's intricate design requires a certain level of experience to properly harness its symbolic power within the Koopa Alliance.",
    "vendorReason": "Koopa shops are trusted by the Koopa Alliance and sell items that reflect their values, making them the ideal vendors for this emblematic token.",
    "shippingDetail": "Shipped via reliable Turtle Delivery, ensuring safe arrival within one week of purchase.",
    "usage": {
      "activation": "Interaction when entering a Koopa-controlled area or purchasing goods in a Koopa shop.",
      "duration": "Instantaneous for quest access; weekly for discount benefit.",
      "endsWhen": "Exhausted after completing the quest or once the weekly discount period ends.",
      "charges": "Unlimited, but limited to one active quest at any time."
    },
    "priceReason": "The badge's rarity and the exclusive access it grants justify its moderate price in experience points.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-24T00:10:49.616866+00:00",
    "aiReviewedAt": "2026-07-24T00:10:49.616866+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_crumb_of_height": {
    "id": "grand_country_crumb_of_height",
    "name": "Crumb of Height",
    "description": "The Crumb of Height is a shimmering fragment that fell from the impossible cliffs of the Grand Country, a tiny piece of solidified gravity. When consumed, it grants you a burst of climbing prowess, allowing your feet to move with the grace and speed of a mountain goat for ten seconds. The crumb also reduces fall damage by half, making it perfect for those tricky vertical ascents where missteps could be fatal.",
    "category": "consumables",
    "price": 250,
    "icon": "🧗‍♀️",
    "stock": 72,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Boosted Climbing Speed",
      "Reduced Fall Damage"
    ],
    "vendor": "side_seller",
    "shippedBy": "winged beetle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boosted Climbing Speed",
        "rules": "As a bonus action, consume the Crumb of Height to gain a +2 bonus to climbing checks and movement speed for 10 seconds. This effect ends if you take damage or if your turn ends."
      },
      {
        "title": "Reduced Fall Damage",
        "rules": "When you fall, reduce fall damage by half until the start of your next turn. This effect can only be used once per short rest."
      }
    ],
    "levelRequirementReason": "This crumb is easily accessible to all adventurers, requiring no special skill or training.",
    "vendorReason": "Side Seller specializes in rare and exotic items found during expeditions, making the Crumb of Height a fitting addition to their inventory.",
    "shippingDetail": "Shipped by a swift winged beetle courier, ensuring the Crumb reaches its destination intact and timely.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds",
      "endsWhen": "You take damage or your turn ends",
      "charges": "Unlimited"
    },
    "priceReason": "The Crumb of Height is a common consumable with limited utility but critical in survival situations, justifying its value.",
    "priceOriginal": 450,
    "priceReviewedAt": "2026-07-24T00:10:30.299167+00:00",
    "aiReviewedAt": "2026-07-24T00:10:30.299167+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_gravitic_boots": {
    "id": "grand_country_gravitic_boots",
    "name": "Gravitic Boots of the Shifting Stone",
    "description": "The Gravitic Boots of the Shifting Stone are crafted from petrified moss and the echoes of ancient stone, imbuing their wearer with an eerie yet potent control over personal gravity. These boots allow for a brief but dramatic increase in jump height, and they provide a reliable slow fall speed that can save you from plummeting deaths. The unexpected bounces they produce make navigating treacherous terrains both exhilarating and perilously unpredictable.",
    "category": "equipment",
    "price": 4100,
    "icon": "👢",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "jump height boost",
      "slow fall"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "rock_slide",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Jump Height Boost",
        "rules": "As a bonus action, you can activate the boots to increase your jump height by up to 50%. This effect lasts for 1 minute and requires no concentration."
      },
      {
        "title": "Slow Fall",
        "rules": "While in the air, you have a +2d6 modifier to AC against falling damage. Additionally, this effect provides a slow fall speed of 30 feet. It remains active until the end of your next turn or until you land."
      }
    ],
    "levelRequirementReason": "The boots require a level 7 character due to their complex enchantment and the magic required to manipulate gravity.",
    "vendorReason": "Vertical Vendor specializes in items that enhance mobility and agility, making these boots an ideal fit for her inventory.",
    "shippingDetail": "The boots are shipped via rock slide, ensuring they arrive undamaged but with a slight delay due to the nature of the delivery method.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute (recharges after 8 hours)",
      "endsWhen": "Ends when you stop moving or until it recharges",
      "charges": "Unlimited, recharges after 8 hours"
    },
    "priceReason": "The boots are priced at 1000 XP due to their rare material composition and the complex enchantment required for their creation.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-24T00:10:36.043686+00:00",
    "aiReviewedAt": "2026-07-24T00:10:36.043686+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_gravitic_boots": {
    "id": "doughnut_hole_gravitic_boots",
    "name": "Null-Grip Boots of Descent",
    "description": "The Null-Grip Boots of Descent are forged from the unstable core of a forgotten gravitic anomaly. Their soles pulse with a faint, magnetic sheen that temporarily negates gravity's pull. Though they grant an exhilarating boost to your jumping prowess and reduce fall damage, beware—once you leap, you must land on solid ground or risk falling into the void below. These boots are surprisingly comfortable even during their brief but exhilarating use.",
    "category": "equipment",
    "price": 15000,
    "icon": "🚀",
    "stock": 32,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Gravitic Boost",
      "Fall Damage Resistance"
    ],
    "vendor": "center_seller",
    "shippedBy": "Void Express (Delayed Delivery)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravitic Boost",
        "rules": "When you activate these boots by using a bonus action, they temporarily negate gravity for the next 10 feet of movement. You gain a +5 bonus to your jump DC and can jump up to twice as high as normal until you use them again."
      },
      {
        "title": "Fall Damage Resistance",
        "rules": "For every 20 feet you fall after using these boots, you take no fall damage. This effect is limited to once per short rest."
      }
    ],
    "levelRequirementReason": "These boots are designed for beginners and adventurers who need a little extra confidence while exploring treacherous terrain.",
    "vendorReason": "The center_seller is known for their unique and experimental items, making these gravitic wonders an ideal addition to their catalog.",
    "shippingDetail": "Due to the instability of the boots' core, they are shipped with a delayed delivery, ensuring they arrive in optimal condition.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect lasting until you use them again or fall from a height greater than 20 feet",
      "endsWhen": "You land from a jump or fall more than 20 feet",
      "charges": "Unlimited"
    },
    "priceReason": "The boots' unique gravitic properties, along with their experimental nature and the risk involved in their creation, justify this balanced price.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:05:42.630987+00:00",
    "aiReviewedAt": "2026-07-25T00:05:42.630987+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_mythic_singularity_orb": {
    "id": "doughnut_hole_mythic_singularity_orb",
    "name": "The Heart's Echo",
    "description": "The Heart's Echo is a pulsing, chaotic orb that emanates from The Doughnut Hole’s center. Its touch distorts reality, creating localized gravitational wells that trap and damage foes within its radius. Those who linger too long may find themselves entangled in vivid hallucinations—visions of sprinkles dancing in the air or surreal landscapes that bend logic itself. This enigmatic artifact is a reminder to handle it with both caution and respect.",
    "category": "premium",
    "price": 140000,
    "icon": "🌀",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "back_order",
    "effects": [
      "Gravitational Trap",
      "Hallucinatory Visions"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Temporal Paradox Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravitational Trap",
        "rules": "When activated, the Heart's Echo creates a localized gravitational well within a 5-foot radius. Any creature in this area takes 1d6 force damage and is restrained until it exits the area. The effect lasts for 1 minute or until a successful DC 14 Strength saving throw is made."
      },
      {
        "title": "Hallucinatory Visions",
        "rules": "Upon activation, the Heart's Echo induces vivid hallucinations in the user. On a roll of 4+ on a d6, the user becomes stunned for one turn and must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute."
      }
    ],
    "levelRequirementReason": "Even the simplest spellcasters can harness its chaotic energy with proper training.",
    "vendorReason": "Void Vendor deals in enigmatic and powerful artifacts, making The Heart's Echo a fitting addition to their inventory.",
    "shippingDetail": "Due to the delicate nature of the Heart's Echo, it is shipped via the Temporal Paradox Delivery Service for guaranteed safe arrival.",
    "usage": {
      "activation": "Standard Action",
      "duration": "One minute or until a successful saving throw is made",
      "endsWhen": "A successful DC 14 Strength save, exiting the area, or after one minute",
      "charges": "Unlimited"
    },
    "priceReason": "The Heart's Echo strikes a balance between its chaotic nature and practical utility, making it accessible yet valuable.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-25T00:05:58.616814+00:00",
    "aiReviewedAt": "2026-07-25T00:05:58.616814+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronal_repair": {
    "id": "the_edge_chronal_repair",
    "name": "Chronal Repair - Temporal Stitching",
    "description": "The Chronal Repair - Temporal Stitching is a shimmering, iridescent thread with a weave of temporal echoes. Crafted by the Timekeepers of Eternos, this item can briefly restore a damaged weapon or piece of armor to its former glory. It uses the power of time to nudge reality into a temporary fix, perfect for those who find themselves in dire straits. Just don't ask how Wario got his hands on it; even he's not sure.",
    "category": "services",
    "price": 4100,
    "icon": "⏳",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "repair_equipment",
      "temporal_bond"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Repair Equipment",
        "rules": "When activated, this item repairs a damaged weapon or piece of armor up to one size category smaller than the wielder. The repair is temporary and lasts for an hour before fading away."
      },
      {
        "title": "Temporal Bond",
        "rules": "For 1 hour after use, any damage dealt to the repaired object is halved. This effect does not stack with other similar effects."
      }
    ],
    "levelRequirementReason": "This item requires a certain understanding of temporal mechanics and control over time's flow.",
    "vendorReason": "The outpost deals in all things related to time, space, and the strange. It makes sense they would stock such an item.",
    "shippingDetail": "Ships via the Temporal Express, ensuring swift delivery within a week.",
    "usage": {
      "activation": "A bonus action",
      "duration": "1 hour",
      "endsWhen": "The duration ends when it fades or the item is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure it can be acquired but not overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:05:40.006712+00:00",
    "aiReviewedAt": "2026-07-25T00:05:40.006712+00:00",
    "aiReviewVersion": 1
  },
  "internet_packet_bomb": {
    "id": "internet_packet_bomb",
    "name": "Viral Payload",
    "description": "The Viral Payload is a shimmering, data-laden orb that pulses with chaotic energy. When unleashed, it broadcasts a tempest of confusing signals across its target area, leaving foes disoriented and muddled. The payload's payload is unpredictable; some targets may succumb to a paralyzing fear, causing them to flee in panic. Be wary, for the more you use this weapon, the more likely it becomes that your own system will be overwhelmed by its sheer intensity.",
    "category": "consumables",
    "price": 980,
    "icon": "💥",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "apply_effect:confusion",
      "chance_to_apply_effect:fear"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Confusion",
        "rules": "The target of the Viral Payload suffers from confusion for 1 round. On a successful Wisdom saving throw, the effect is negated."
      },
      {
        "title": "Fear",
        "rules": "There is a 25% chance that a targeted creature will be struck with fear, fleeing in panic and unable to take actions for 2 turns on a failed Wisdom saving throw. The save DC is equal to 8 + the user's Intelligence modifier."
      }
    ],
    "levelRequirementReason": "Requires proficiency with manipulation tools or digital devices.",
    "vendorReason": "The pixel_shop specializes in tech and digital artifacts, making this payload a natural fit for their inventory.",
    "shippingDetail": "Ships via fast drone courier with a guaranteed 24-hour delivery to most locations within the realm.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (effect lasts until the end of the target's next turn)",
      "endsWhen": "The target makes a successful saving throw or the effect ends once its duration is over.",
      "charges": "Single-use; recharged after a long rest"
    },
    "priceReason": "Balanced against other uncommon consumables, offering significant utility in combat.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:06:17.059369+00:00",
    "aiReviewedAt": "2026-07-25T00:06:17.059369+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_injector": {
    "id": "internet_meme_injector",
    "name": "Distraction Drive",
    "description": "The Distraction Drive hums with a faint, pulsing light that flickers like a meme loop gone viral. Crafted from salvaged internet hardware and imbued with an ancient enchantment, this device emits a wave of memes so potent it can momentarily stun even the most battle-hardened foes. It’s particularly effective against those who find cat videos irresistible, but don’t be fooled—it works on anyone caught in its virulent digital net. Rumor has it that a data dealer managed to smuggle one from an underground market, making this relic both rare and invaluable.",
    "category": "curiosities",
    "price": 250,
    "icon": "😹",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "stun (1 turn)",
      "reduce_accuracy (5%)"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Packet Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stun",
        "rules": "When activated as a bonus action within 30 feet of an opponent, the Distraction Drive emits a wave of memes that temporarily stuns the target for 1 round. The target must succeed on a DC 14 Wisdom saving throw or be stunned until the end of its next turn."
      },
      {
        "title": "Reduce Accuracy",
        "rules": "All creatures within 30 feet take a -5 penalty to their attack rolls and saving throws for 1 minute after the Distraction Drive is activated. This effect can only occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "Players need at least first level to effectively manage the strategic use of this device in combat.",
    "vendorReason": "The data dealer has connections to underground tech and arcane markets, making them a reliable source for such an item.",
    "shippingDetail": "Delivered via Packet Post with a 24-hour tracking delay due to the fragile nature of the device.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous, lasts until end of next turn for stunned target; 1 minute duration for accuracy penalty",
      "endsWhen": "The stunned effect ends when the target successfully saves or the accuracy penalty expires; charges are unlimited.",
      "charges": "Unlimited"
    },
    "priceReason": "The Distraction Drive's unique properties and rarity justify its price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:06:19.596716+00:00",
    "aiReviewedAt": "2026-07-25T00:06:19.596716+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_rune_shard": {
    "id": "middle_earth_rune_shard",
    "name": "Echoing Rune Shard",
    "description": "The Echoing Rune Shard glows faintly, its warm surface pulsating with a forgotten magic. Crafted by Elven artisans in the heart of Mirkwood during a ritual gone awry, this shard briefly opens a window to the past, allowing you to hear the soft murmurings of ancient conversations. These whispers are often vague but can provide valuable insight into events long since lost. While it is more useful for distracting grumpy goblins and other creatures with short tempers, its magical warmth makes it an intriguing relic among adventurers seeking to unravel forgotten lore.",
    "category": "curiosities",
    "price": 4100,
    "icon": "🔮",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "whisper_of_the_past",
      "distraction"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whisper of the Past",
        "rules": "As a bonus action, you can activate the Echoing Rune Shard to hear a brief whisper from the past. This provides you with advantage on one Intelligence (History) check related to an event occurring at least 50 years ago. The effect lasts for 1 minute and is exhausted after use."
      },
      {
        "title": "Distraction",
        "rules": "The shard emits a soft, warming light as it activates, distracting nearby creatures for up to 3 rounds. Creatures within a 10-foot radius must succeed on a Wisdom saving throw (DC 12) or become distracted until the start of their next turn."
      }
    ],
    "levelRequirementReason": "This relic is accessible to low-level adventurers who are beginning to explore forgotten lore and seek minor magical assistance.",
    "vendorReason": "Elven artisans still maintain ties with their ancient past, keeping relics like the Echoing Rune Shard in circulation among the marketplaces of Mirkwood.",
    "shippingDetail": "Shipped by a fleet of winged ponies through the treetops above Mirkwood; delivery is swift but requires clear skies and calm winds.",
    "usage": {
      "activation": "Bonus action or reaction when you need to gain insight into past events or distract foes.",
      "duration": "Whisper lasts for 1 minute, Distraction lasts for up to 3 rounds.",
      "endsWhen": "The duration ends upon the Shard's exhaustion after use or when the effect is disrupted by an attack or spell.",
      "charges": "Unlimited uses"
    },
    "priceReason": "While not a high-level artifact, its rarity and magical properties justify this price for adventurers seeking to uncover ancient truths.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T00:06:41.233062+00:00",
    "aiReviewedAt": "2026-07-25T00:06:41.233062+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_stonecarver_service": {
    "id": "middle_earth_stonecarver_service",
    "name": "Ancient Stone Smoothing",
    "description": "Borin's Ancient Stone Smoothing is a service crafted by Old Borin, a master Dwarven stonecarver. This process involves ancient chanting rituals and subtle magic that infuses stones with enduring strength and beauty. The technique enhances the durability of any stone item, ensuring it withstands the test of time without wear or tear. A rare treat for collectors and artisans alike, this service is a testament to the Dwarven mastery of their craft.",
    "category": "services",
    "price": 980,
    "icon": "🔨",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increase_item_durability",
      "reduce_repair_cost"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "rock_golem",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Durability",
        "rules": "When activated, this service increases the durability of any stone item by +1d4 additional hit points. The effect is instantaneous and does not require a saving throw."
      },
      {
        "title": "Reduced Repair Cost",
        "rules": "For 1 week after the service, the next repair attempt on the treated stone item costs only half its normal cost. This effect can be used once per month."
      }
    ],
    "levelRequirementReason": "All adventurers in need of a reliable crafting touch can benefit from Borin's expertise.",
    "vendorReason": "The dwarves of the Forged Heart forgehouses are renowned for their mastery of stone and metal, making them the perfect stewards of this ancient technique.",
    "shippingDetail": "Shipped by a dedicated rock golem, ensuring the item arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect activated upon completion of the service.",
      "duration": "Instantaneous and permanent for the treated stone item.",
      "endsWhen": "The effect is permanent until the stone item is destroyed or the item's durability is reduced to zero.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This service combines ancient magic and craftsmanship, making it a valuable asset for any adventurer in need of reinforced equipment.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T00:06:34.974259+00:00",
    "aiReviewedAt": "2026-07-25T00:06:34.974259+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_ringwraith_scale": {
    "id": "middle_earth_ringwraith_scale",
    "name": "Fragment of a Wraith's Shadow",
    "description": "This shimmering scale, a fragment of a Ringwraith's shadow, radiates an aura of chilling dread that can be felt even in the warmest rooms. Its surface is etched with arcane runes that seem to glow faintly under moonlight, and it absorbs ambient light until only its cold, spectral glow remains. Crafted by the ancient forces of Mordor, this relic offers a unique form of protection against both physical and magical attacks.",
    "category": "equipment",
    "price": 15000,
    "icon": "💀",
    "stock": 7,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "shadow absorb",
      "cold resistance"
    ],
    "vendor": "shire_shop",
    "shippedBy": "dark_horse",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Shadow Absorb",
        "rules": "As an action, the user can activate the scale to absorb shadowy energy from a source within 5 feet. For each point of damage it absorbs, it regains 1d4 hit points. This effect has no save DC and is usable once per long rest."
      },
      {
        "title": "Cold Resistance",
        "rules": "The user gains resistance to cold damage while wearing this scale as a piece of armor. This benefit lasts until the end of the user's next turn after removing it. There are no restrictions on the number of times this can be used per day."
      }
    ],
    "levelRequirementReason": "Only those who have faced the shadow of Mordor and possess a certain level of experience can wield such dark magic.",
    "vendorReason": "The Shire Shop, with its deep connections to ancient artifacts, is trusted by adventurers to carry this rare relic.",
    "shippingDetail": "Delivered under the cover of night by a dark horse courier, ensuring it arrives safely and undetected.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The scale is removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "While not a weapon of mass destruction, the Fragment of a Wraith's Shadow offers unique and powerful benefits that are highly sought after by those who face dark forces.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:06:37.516664+00:00",
    "aiReviewedAt": "2026-07-25T00:06:37.516664+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_harmonious_discord": {
    "id": "kivotos_item_halo_of_harmonious_discord",
    "name": "The Cacophony's Embrace",
    "description": "The Cacophony's Embrace is a bizarre halo crafted from solidified noise and shimmering light. This artifact amplifies magical energies around you, creating an unpredictable field of sound and light that can either soothe or disorient those nearby. It enhances your focus during meditation but also has the potential to disrupt the concentration of others within 30 feet. The halo's core glows with a faint, shifting melody that seems to harmonize yet discord in equal measure.",
    "category": "curiosities",
    "price": 990,
    "icon": "🎶",
    "stock": 37,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "focus_boost",
      "disruption_field"
    ],
    "vendor": "club_supply",
    "shippedBy": "Express Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Focus Boost",
        "rules": "Activate as a bonus action for 1 minute. You gain advantage on Wisdom (Insight) checks and saving throws made to resist magical effects until the start of your next turn after the duration ends."
      },
      {
        "title": "Disruption Field",
        "rules": "The halo creates an area of disruption around you with a radius of 30 feet. Once per short rest, any creature that starts its turn within this area must make a DC 13 Wisdom saving throw or be disoriented until the start of their next turn."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Arcana to fully harness the artifact's unpredictable magical properties.",
    "vendorReason": "The club supply vendor deals in unique and arcane curiosities, making The Cacophony's Embrace a fitting addition to their inventory.",
    "shippingDetail": "Ships within 24 hours with express delivery ensuring the artifact arrives in pristine condition.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute, or until you take a long rest",
      "endsWhen": "The start of your next turn after the duration ends or if you activate it again while it is active",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its unpredictable nature and limited utility in combat.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:06:39.886571+00:00",
    "aiReviewedAt": "2026-07-25T00:06:39.886571+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_scroll_of_accidental_transfiguration": {
    "id": "kivotos_item_scroll_of_accidental_transfiguration",
    "name": "The Blobber's Blessing",
    "description": "The Blobber's Blessing is an ancient, parchment-thin scroll wrapped in a thick layer of greenish slime that seems to pulse with latent magic. It was found within the hidden chambers of the Academy Armory, supposedly left behind by a whimsical scholar who loved practical jokes. When unrolled, it attempts to transform objects into other items, but often fails spectacularly, leaving behind a gooey mess and a sense of chaos in its wake.",
    "category": "consumables",
    "price": 4100,
    "icon": "🧪",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Random Object Transmutation",
      "Explosive Goo Shower"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Magical Delivery Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random Object Transmutation",
        "rules": "The Blobber's Blessing attempts to transform the target object into a random item. This transformation has a low chance of success, and if successful, the target gains the properties of the new item for one hour."
      },
      {
        "title": "Explosive Goo Shower",
        "rules": "If the transmutation fails, the scroll releases a burst of green slime that splashes out in a 10-foot radius. All creatures within this area must succeed on a DC 15 Dexterity saving throw or be covered in goo, taking 1d6 acid damage and becoming incapacitated until cleaned."
      }
    ],
    "levelRequirementReason": "The scroll's unpredictable nature requires at least first-level magic to handle its chaotic effects.",
    "vendorReason": "As a repository of magical artifacts, the Academy Armory is well-acquainted with items that cause chaos and curiosity.",
    "shippingDetail": "The delivery is swift but requires extra packaging to contain any potential goo outbreaks.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, plus one hour for successful transformation or until the next dawn if unsuccessful",
      "endsWhen": "The effect ends when the duration expires or a creature cleans the target object of slime",
      "charges": "Uses 1 charge"
    },
    "priceReason": "Reflects the scroll's ancient and unpredictable nature, requiring first-level magic to use safely.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T00:08:03.681171+00:00",
    "aiReviewedAt": "2026-07-25T00:08:03.681171+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_ancient_pokedex": {
    "id": "pokemon_item_ancient_pokedex",
    "name": "Chronometric Pokedex",
    "description": "The Chronometric Pokedex hums with a temporal energy that crackles like lightning, its ancient gears whispering secrets of time. This device allows you to briefly rewind a single battle action, turning the tide against even the most aggressive Pokémon. The Pokedex’s core is crafted from fossilized Chronomica crystals, making it both durable and potent. Use wisely; each use is as valuable as a rare encounter with a legendary trainer.",
    "category": "equipment",
    "price": 15000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Rewind Battle Action",
      "Critical Boost"
    ],
    "vendor": "pokemart",
    "shippedBy": "delivery_only",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Rewind Battle Action",
        "rules": "Activate as an action to reverse the last battle action you or your Pokémon took. This can only affect actions that have not yet resolved their effects, and it cannot be used on attacks that have already hit. Once per long rest."
      },
      {
        "title": "Critical Boost",
        "rules": "Your attack rolls receive a +2 bonus to critical hits for 1 hour after using the Rewind Battle Action feature. This effect ends when you finish a short or long rest, but it can only be active once at any given time."
      }
    ],
    "levelRequirementReason": "This item's power comes with a high demand; it is best suited for those who have proven themselves in battle.",
    "vendorReason": "The Pokemart stocks items that help trainers overcome the toughest challenges, making the Chronometric Pokedex an ideal addition to their inventory.",
    "shippingDetail": "Ships via special courier within 3 days of purchase; delivery includes a complimentary guide on proper use and maintenance.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Once per long rest after activation",
      "charges": "1/Day"
    },
    "priceReason": "The Chronometric Pokedex’s limited daily supply and powerful effects justify its relatively lower price compared to other Epic items.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:07:59.845440+00:00",
    "aiReviewedAt": "2026-07-25T00:07:59.845440+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_trainer_badge_echo": {
    "id": "pokemon_item_trainer_badge_echo",
    "name": "Badge of Resonant Echoes",
    "description": "The Badge of Resonant Echoes is a shimmering badge that seems to hum with the whispers of past battles. Made from ancient, enchanted metal imbued with the echoes of legendary trainers, it subtly vibrates when you face an opponent, allowing you to catch fleeting glimpses into their strategies. However, this constant resonance leaves you longing for sugary treats, distracting your focus slightly. This badge enhances your intuition and provides a 15% chance to predict your foe's moves.",
    "category": "curiosities",
    "price": 990,
    "icon": "🗣️",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Echoing Insight",
      "Sweet Craving"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Courier Pigeon Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoing Insight",
        "rules": "You have a 15% chance to gain insight into your opponent’s next move. This effect lasts until the end of your next turn and can occur once per short or long rest."
      },
      {
        "title": "Sweet Craving",
        "rules": "While wearing this badge, you are more prone to seek out sugary snacks, reducing your concentration by 1 for every hour spent in combat. This effect ends when you leave the area of combat or consume a meal containing at least 500 XP worth of calories."
      }
    ],
    "levelRequirementReason": "This badge is suitable for beginning trainers who need an edge without requiring high-level expertise.",
    "vendorReason": "The Safari Shop specializes in items that aid young and experienced trainers alike, making it the perfect vendor for beginners looking to enhance their skills.",
    "shippingDetail": "Ships via Courier Pigeon Service within a week of purchase.",
    "usage": {
      "activation": "Passive effect until you leave combat or rest.",
      "duration": "Until the end of your next turn after activation.",
      "endsWhen": "After one short or long rest.",
      "charges": "Unlimited, resets with each rest."
    },
    "priceReason": "The Badge of Resonant Echoes offers a unique combination of strategic insight and a humorous quirk, making it a fair but not overpowered addition to any trainer’s inventory.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:07:00.341128+00:00",
    "aiReviewedAt": "2026-07-25T00:07:00.341128+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_elite_trainer_contract": {
    "id": "pokemon_item_elite_trainer_contract",
    "name": "Contract of Legendary Training",
    "description": "The Contract of Legendary Training is a magically inscribed parchment, sealed with an elite trainer’s mark. Upon signing, you embark on a perilous journey where encounters yield not only vast experience but also rare Pokémon, enhancing your battle prowess and expanding your team's potential. This contract ensures that even the most mundane battles are fraught with legendary possibilities, as it promises a 20% increase in XP gain during the encounter.",
    "category": "services",
    "price": 4100,
    "icon": "🤝",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Legendary Experience Boost",
      "Rare Pokémon Encounters"
    ],
    "vendor": "league_store",
    "shippedBy": "Courier Pegasus Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Legendary Experience Boost",
        "rules": "Upon completing an encounter under this contract, you earn an additional 5000 XP. This effect has a cooldown of one week."
      },
      {
        "title": "Rare Pokémon Encounters",
        "rules": "There is a 10% chance that each encounter will yield a rare Pokémon. This effect does not require a save or action to activate, and it stacks with other similar effects."
      }
    ],
    "levelRequirementReason": "This contract demands a certain level of experience and expertise before you can enter into such a pact.",
    "vendorReason": "The league store exclusively sells items that enhance player capabilities, making the Contract of Legendary Training a fitting addition to their offerings.",
    "shippingDetail": "Delivered via the swift wings of Courier Pegasus Express, ensuring you receive your contract within three days.",
    "usage": {
      "activation": "Passive upon signing and completing an encounter",
      "duration": "Instantaneous XP gain; rare Pokémon encounters are random events during the journey",
      "endsWhen": "The contract ends after 30 completed encounters or if one side breaches the terms",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the significant experience boost and rare Pokémon encounter potential, making it a valuable investment for any aspiring trainer.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-25T00:07:14.092073+00:00",
    "aiReviewedAt": "2026-07-25T00:07:14.092073+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_sugar_shock_pills": {
    "id": "kivotos_item_sugar_shock_pills",
    "name": "Hyper-Concentrated Sugar Rush",
    "description": "The Hyper-Concentrated Sugar Rush pills are tiny, shimmering candies that burst with energy when consumed. Each pill unleashes a brief, chaotic surge of speed and damage in combat, making you nearly unstoppable for a few moments before leaving you craving more sweets than ever. These treats are the perfect distraction or finishing move in any race or battle, but be wary—after their effects wear off, your sweet tooth will demand immediate attention to avoid crashing.",
    "category": "consumables",
    "price": 260,
    "icon": "🍬",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Speed Boost",
      "Stun Chance"
    ],
    "vendor": "student_store",
    "shippedBy": "Standard Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "When consumed as a bonus action, the user gains a +20 feet speed increase for 3 rounds. This effect ends if the user is incapacitated or takes any damage."
      },
      {
        "title": "Stun Chance",
        "rules": "There is a 5% chance to stun an opponent within 5 feet when used as part of an attack action. The stun lasts for 1 round and has a save DC of 12 to resist."
      }
    ],
    "levelRequirementReason": "The Hyper-Concentrated Sugar Rush is accessible to all players, providing a useful but limited burst of power.",
    "vendorReason": "The student store stocks these for the occasional sugar rush or quick energy boost needed during exams and races.",
    "shippingDetail": "Typically arrives within three days, ensuring students can enjoy their next race or battle.",
    "usage": {
      "activation": "Bonus action to consume a pill; attack action for stun chance.",
      "duration": "Speed boost lasts for 3 rounds; stun effect is instantaneous and lasts until the end of the target's turn.",
      "endsWhen": "If the user takes damage or becomes incapacitated, both effects are ended early. Stun can be saved against.",
      "charges": "Unlimited uses, each pill is a separate charge."
    },
    "priceReason": "The price reflects its unique effects and the rare ingredients required to produce these potent candies.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:07:35.920245+00:00",
    "aiReviewedAt": "2026-07-25T00:07:35.920245+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_shadow_ball_charm": {
    "id": "pokemon_item_shadow_ball_charm",
    "name": "Shadow Ball Charm",
    "description": "This peculiar Shadow Ball Charm pulses with a dark, almost palpable energy, absorbing ambient shadows around it like a sponge. When worn by a Pokémon, its accuracy in casting Shadow Balls is bolstered by an impressive 20%, and its power increases by a significant 15%. However, the charm's influence on the battlefield is not without risk; there’s a 30% chance that each successful Shadow Ball attack will leave your foe confused for one round. Beware, for prolonged use may attract the attention of other dark Pokémon eager to reclaim their lost power.",
    "category": "equipment",
    "price": 15000,
    "icon": "🌑",
    "stock": 25,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Boosts Shadow Ball accuracy",
      "Enhances Shadow Ball power"
    ],
    "vendor": "pokemart",
    "shippedBy": "poke-drone",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Shadow Ball Accuracy Boost",
        "rules": "When a Pokémon with this charm uses Shadow Ball, its accuracy is increased by 20%. This effect lasts until the end of the Pokémon's next turn."
      },
      {
        "title": "Enhanced Shadow Ball Power",
        "rules": "The power of each Shadow Ball cast is bolstered by an additional +15% damage. This bonus stacks with other sources of power, but not more than once per attack."
      }
    ],
    "levelRequirementReason": "This charm's power and risk are best suited for experienced trainers who can handle its unpredictable effects.",
    "vendorReason": "The pokemart, known for its wide array of Pokémon essentials, offers this unique item to help trainers enhance their battles.",
    "shippingDetail": "Delivered swiftly by the reliable poke-drone service within a day.",
    "usage": {
      "activation": "Passive effect when worn by the Pokémon",
      "duration": "Until the end of the Pokémon's next turn after each use",
      "endsWhen": "Charm is removed or its power is depleted through overuse",
      "charges": "Unlimited, but limited to one activation per battle"
    },
    "priceReason": "The balanced price reflects the charm's unique effects and manageable risk.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:07:46.675425+00:00",
    "aiReviewedAt": "2026-07-25T00:07:46.675425+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_ancient_scroll_of_protection": {
    "id": "faerun_item_ancient_scroll_of_protection",
    "name": "Scroll of Protection from Evil",
    "description": "The Scroll of Protection from Evil is an ancient parchment, its ink shimmering with a golden light that whispers prayers to ward off malevolent forces. Unfurl it during a night vigil, and the air hums with divine protection, casting a protective shield against evil spirits and necrotic threats. The scroll's power is said to come from a forgotten cleric who sought to banish darkness in an age of turmoil.",
    "category": "consumables",
    "price": 65000,
    "icon": "🛡️",
    "stock": 9,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Divine Shield",
      "Necrotic Resistance"
    ],
    "vendor": "faction_the_order",
    "shippedBy": "giant_eagle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Divine Shield",
        "rules": "When activated, the scroll grants you a +4 bonus to your AC for 1 hour. This effect ends if you drop or damage the scroll."
      },
      {
        "title": "Necrotic Resistance",
        "rules": "You gain advantage on saving throws against necrotic damage and can cast the spell Protection from Evil and Good once per day. The scroll's power fades after 30 days of non-use."
      }
    ],
    "levelRequirementReason": "This scroll is designed for beginners to learn how divine protection feels, but only those with a basic understanding can wield it.",
    "vendorReason": "The Order has ancient ties to the scroll's origins and ensures its proper use in combating evil.",
    "shippingDetail": "Dispatched by messenger eagles, the scroll is delivered swiftly but requires a safe night for activation.",
    "usage": {
      "activation": "Read and unfurl the scroll during twilight to activate its protective effects.",
      "duration": "1 hour or until expended, whichever comes first.",
      "endsWhen": "You drop or damage the scroll, or after 30 days of non-use.",
      "charges": "Unlimited daily uses."
    },
    "priceReason": "The scroll's legendary rarity and divine power justify its price in terms of experience points.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-25T00:08:37.601264+00:00",
    "aiReviewedAt": "2026-07-25T00:08:37.601264+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_crumb_of_stability": {
    "id": "grand_country_crumb_of_stability",
    "name": "Crumb of Stability",
    "description": "The Crumb of Stability is a peculiar, slightly glowing morsel that appears to be crafted from an ancient stone. Its surface shimmers with a faint blue light and it seems to defy gravity as it hovers in your palm. Rumored to anchor you during moments of extreme disorientation, this crumb has been known to negate falling damage entirely for those who rely on it during precarious climbs or falls. It's a common sight at the side_seller’s stall, where travelers often stock up before embarking on their next adventure.",
    "category": "consumables",
    "price": 260,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Falling Damage Absorption",
      "Enhanced Stability"
    ],
    "vendor": "side_seller",
    "shippedBy": "winged beetle courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Falling Damage Absorption",
        "rules": "When you fall from a height, this crumb can absorb all falling damage for you as long as it remains in contact with your hand. This effect is instantaneous and requires no action to activate."
      },
      {
        "title": "Enhanced Stability",
        "rules": "For 1 minute after consuming the Crumb of Stability, you gain a +2 bonus to Dexterity saving throws and ability checks related to balance and stability. This effect ends if you take any damage or if you fall from a height."
      }
    ],
    "levelRequirementReason": "This crumb is designed for adventurers of all levels, but it's most useful in the early stages when characters are learning how to handle themselves during precarious situations.",
    "vendorReason": "The side_seller has a reputation for providing essential supplies to adventurers who need that extra edge before heading into the unknown.",
    "shippingDetail": "Delivered swiftly by winged beetles, this crumb is often found in travelers' packs before they venture forth.",
    "usage": {
      "activation": "Instantaneous upon consumption or contact with your hand during a fall.",
      "duration": "1 minute",
      "endsWhen": "Taking damage or falling from a height.",
      "charges": "Unlimited, but can only be consumed once per long rest."
    },
    "priceReason": "The Crumb of Stability is priced at 1000 XP due to its unique properties and the materials required for its crafting, which are rare and difficult to obtain.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:08:03.574236+00:00",
    "aiReviewedAt": "2026-07-25T00:08:03.574236+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_instant_noodles_of_inspiration": {
    "id": "kivotos_item_instant_noodles_of_inspiration",
    "name": "Instant Noodles of Creative Combustion",
    "description": "The Instant Noodles of Creative Combustion are not just a snack; they are a culinary catalyst for brilliance. Each packet is handcrafted from the essence of countless brainstorming sessions, imbued with chaotic energy that ignites your mind like a spark in the wind. Consuming these noodles grants you a burst of creativity, but be warned: it also leaves you craving more, as if the noodles themselves are whispering to you for another serving. The vendor, Student Store, stocks them because they know every student needs a little extra fuel for late-night projects and exams.",
    "category": "consumables",
    "price": 260,
    "icon": "🍜",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "spontaneous brainstorm",
      "sustained creativity"
    ],
    "vendor": "student_store",
    "shippedBy": "Standard Mail - Delivered with a complimentary napkin and a side of encouragement.",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spontaneous Brainstorm",
        "rules": "When consumed as a bonus action, you gain advantage on one Intelligence (Insight) check or attack roll. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Sustained Creativity",
        "rules": "For the duration of your next short rest, all checks and saving throws related to creativity are made with advantage."
      }
    ],
    "levelRequirementReason": "The noodles' chaotic energy can be overwhelming for beginners.",
    "vendorReason": "The Student Store caters exclusively to the needs of its students, offering unique supplies like these creative noodles.",
    "shippingDetail": "Orders are processed within 24 hours during school days.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute, once per long rest",
      "endsWhen": "The duration ends when the effect's time expires or you finish a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to provide significant creative boosts while being within the reach of most players.",
    "priceOriginal": 150,
    "priceReviewedAt": "2026-07-25T00:08:16.044350+00:00",
    "aiReviewedAt": "2026-07-25T00:08:16.044350+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_shard_of_the_final_exam": {
    "id": "kivotos_item_shard_of_the_final_exam",
    "name": "Shard of the Final Exam",
    "description": "A pulsating shard of obsidian etched with arcane symbols, this fragment is said to have been chipped from the final exam that no one has ever passed. It radiates a disconcerting aura and whispers cryptic hints about future grades – mostly just 'study harder!' This piece is imbued with the collective anxiety of every student who's ever attended Kivotos Academy, leaving those who stare too long to see floating test papers and hear distant echoes of frustrated students. Handle it with care; its power can be as potent as it is unsettling.",
    "category": "curiosities",
    "price": 140000,
    "icon": "📚",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Academic Boost",
      "Detect Hidden Achievements"
    ],
    "vendor": "club_supply",
    "shippedBy": "Royal Courier - Requires Signature from Headmaster Thorne.",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Academic Boost",
        "rules": "As a bonus action, the wielder can activate this shard to gain advantage on one Intelligence or Wisdom check related to academics. This effect lasts until the end of their next turn."
      },
      {
        "title": "Detect Hidden Achievements",
        "rules": "The shard allows the user to make a DC 15 Intelligence (Arcana) check as an action, which reveals any hidden academic achievements or knowledge in proximity that are unclaimed. This effect is usable once per long rest."
      }
    ],
    "levelRequirementReason": "The shard's power is subtle but potent, making it accessible to lower levels where characters can still benefit from its effects.",
    "vendorReason": "As a supply house for Kivotos Academy, club_supply often has rare and mystical items that students need for their studies.",
    "shippingDetail": "The shard must be delivered directly to the headmaster’s office and signed for by the recipient.",
    "usage": {
      "activation": "Bonus action or as an action (for Detect Hidden Achievements)",
      "duration": "Instantaneous; lasts until end of next turn for Academic Boost, once per long rest for Detect Hidden Achievements",
      "endsWhen": "The effect ends when the duration expires or if the shard is damaged.",
      "charges": "Unlimited charges"
    },
    "priceReason": "The shard's mythic rarity and limited availability justify its moderate price, as it provides significant academic advantages.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-25T00:08:37.788268+00:00",
    "aiReviewedAt": "2026-07-25T00:08:37.788268+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_warp_pipe_charm": {
    "id": "mushroom_kingdom_item_warp_pipe_charm",
    "name": "Dimensional Displacement Charm",
    "description": "The Dimensional Displacement Charm is a intricately crafted trinket, its surface polished with mushroom caps and adorned with shimmering gears. This relic was said to have been created in the shadowy realms of the Mushroom Kingdom, where it can briefly warp space. When activated, it allows you to teleport within a 30-foot radius at random, making navigation through pipe mazes a breeze. However, be wary; it might accidentally send you to a dimension populated by irate snails.",
    "category": "curiosities",
    "price": 140000,
    "icon": "🌀",
    "stock": 10,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Teleport Within Radius",
      "Enhanced Pipe Navigation"
    ],
    "vendor": "wario_direct",
    "shippedBy": "royal_snail_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleport Within Radius",
        "rules": "As an action, you can activate the charm to teleport yourself or a willing creature within a 30-foot radius. This effect has a 25% chance of success and requires a Wisdom saving throw (DC 14) with failure resulting in being sent to a random location within the area."
      },
      {
        "title": "Enhanced Pipe Navigation",
        "rules": "For one hour, you or a creature wearing this charm gains a +2 bonus to Dexterity (Acrobatics) checks and advantage on checks made to navigate pipe mazes. This effect does not stack with similar abilities but lasts for the duration of the charm’s use."
      }
    ],
    "levelRequirementReason": "The charm requires a basic understanding of space manipulation, suitable for even novice adventurers.",
    "vendorReason": "Wario Direct specializes in quirky and powerful relics from the Mushroom Kingdom, making this item an ideal addition to their inventory.",
    "shippingDetail": "The Royal Snail Express ensures safe delivery of your charm within a week, even through the most treacherous pipe mazes.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous teleport; one hour for enhanced navigation",
      "endsWhen": "Teleport fails or ends when the duration expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "The charm’s mythic origin and unique spatial manipulation capabilities justify its moderate price.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T00:08:21.368354+00:00",
    "aiReviewedAt": "2026-07-25T00:08:21.368354+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_gold_coin_amplifier": {
    "id": "mushroom_kingdom_item_gold_coin_amplifier",
    "name": "Amplified Gold Coin",
    "description": "This Amplified Gold Coin gleams with a subtle, almost imperceptible glow. Crafted from purest gold and infused with the essence of Wario's greed, it bestows a fleeting surge of fortune upon its bearer. When held, you gain +1 to all attack rolls and a temporary boost to your luck, increasing your chance of finding valuable items by 5%. However, each use might just as likely trigger an unexpected expense or misfortune that could set you back financially.",
    "category": "premium",
    "price": 990,
    "icon": "💰",
    "stock": 5,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "+1 to all attack rolls",
      "increased chance of finding valuable items (5%)"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lucky Strike",
        "rules": "When held, this coin grants a +1 bonus to all attack rolls. The effect is instantaneous and lasts until the start of your next turn."
      },
      {
        "title": "Fortune's Favor",
        "rules": "Increases your chance of finding valuable items by 5% for 1 minute each time you use it, but there is a 10% chance that each use will also cause an unexpected expense or misfortune, costing you between 200 and 1000 XP."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers who might need the extra luck and opportunity.",
    "vendorReason": "Koopa Shop, known for its quirky but useful items, offers this coin to help adventurers navigate their quests with a bit of Wario's infamous greed.",
    "shippingDetail": "Quickly delivered by the reliable delivery drone service, ensuring your coin arrives at your doorstep in perfect condition.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous for attack rolls; 1 minute for finding valuable items",
      "endsWhen": "The effect ends when you stop holding the coin or suffer an unexpected expense due to its misfortune trigger.",
      "charges": "Unlimited, but each use has a chance of triggering misfortune."
    },
    "priceReason": "Balanced for its unique effects and temporary nature, this coin is priced at 1000 XP, offering adventurers both benefit and risk.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:08:33.594270+00:00",
    "aiReviewedAt": "2026-07-25T00:08:33.594270+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_crusty_claw": {
    "id": "leclaire_isle_item_crusty_claw",
    "name": "Crusty Claw Shield",
    "description": "The Crusty Claw Shield is a doughy, hand-crafted shield that seems to grow sharper and more resilient with each strike it withstands. Crafted in the kitchens of Dough Depot by bakers who know how to defend their pastries, this shield smells faintly of cinnamon and has a tendency to leave your enemies feeling 'sticky' as you parry attacks. It is surprisingly durable against piercing weapons, making it an invaluable companion for any brave baker or defender of sweet goods.",
    "category": "equipment",
    "price": 4100,
    "icon": "🛡️",
    "stock": 5,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Sharp Dough",
      "Sticky Defense"
    ],
    "vendor": "dough_depot",
    "shippedBy": "rolling_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sharp Dough",
        "rules": "When you take damage from a piercing attack, the Crusty Claw Shield grows sharper by resisting an additional +1 to your AC. This effect lasts for 1 minute and can be used once per short or long rest."
      },
      {
        "title": "Sticky Defense",
        "rules": "Whenever you hit with a weapon attack while holding this shield, there is a 50% chance that the target becomes 'sticky', reducing their Dexterity by 2 until the start of your next turn. This effect has no save DC and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The shield's sharp dough is easy to wield, but baking it requires basic skills even for a beginner.",
    "vendorReason": "Dough Depot is known for its exceptional baked goods and the shields that protect them from marauding thieves.",
    "shippingDetail": "Delivered by a rolling cart, with fresh pastries as an extra treat.",
    "usage": {
      "activation": "Instantaneous use upon taking piercing damage or hitting with a weapon attack.",
      "duration": "1 minute for Sharp Dough; lasts until the start of your next turn for Sticky Defense.",
      "endsWhen": "Rests end when effects from either ability are no longer active.",
      "charges": "Unlimited, but only one effect can be used per rest."
    },
    "priceReason": "The shield's unique properties and the skill required to craft it justify its moderate price in experience points.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:09:12.771406+00:00",
    "aiReviewedAt": "2026-07-25T00:09:12.771406+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sugar_shard": {
    "id": "leclaire_isle_item_sugar_shard",
    "name": "Sugar Shard of Sweet Dreams",
    "description": "The Sugar Shard of Sweet Dreams is a crystalline fragment harvested from a Dough Fairy's pillow. This shard, shimmering with sugary hues, can invoke vivid dreams ranging from delightful to chaotic. Holding it may result in a temporary sugar rush, boosting your speed and attack rolls, or it might induce confusion, clouding your senses momentarily. Summon a friendly gingerbread man to assist you for three turns, but beware—these effects are unpredictable and could lead to unexpected outcomes.",
    "category": "curiosities",
    "price": 140000,
    "icon": "🍬",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "sugar rush",
      "confusion"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "dusted_crate",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Sugar Rush",
        "rules": "On activation, the user gains a bonus to speed and attack rolls equal to half their proficiency bonus. This effect lasts for 1 minute or until the user takes any action on their turn."
      },
      {
        "title": "Confusion",
        "rules": "There is a 20% chance (DC 14 Wisdom saving throw) that holding the shard will cause confusion, which lasts for 1 round per level of the user. The user must make a Wisdom save to avoid being incapacitated until it ends."
      }
    ],
    "levelRequirementReason": "This item requires users to have at least 5th level to handle its unpredictable effects safely.",
    "vendorReason": "The Pastry Palace deals in all things sweet and magical, including items that can enhance one's experience of sugary dreams.",
    "shippingDetail": "Shipped via the Dusted Crate, known for its careful handling of fragile and enchanted goods.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; lasts until the end of the user's next turn or until a saving throw is made to resist confusion.",
      "endsWhen": "The effect ends when the user takes any action on their turn, or if they successfully save against confusion.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects a balanced cost for an item that can provide both beneficial and potentially hazardous effects.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-25T00:08:53.290314+00:00",
    "aiReviewedAt": "2026-07-25T00:08:53.290314+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_yeast_whisper": {
    "id": "leclaire_isle_item_yeast_whisper",
    "name": "Yeast Whisper Charm",
    "description": "The Yeast Whisper Charm is a diminutive, pulsating charm crafted from concentrated yeast spores found in the ancient ovens of Le Cleraire Isle. This enchanted trinket allows its bearer to intuitively understand the subtle whispers of dough and baking equipment, potentially uncovering hidden passages or forgotten recipes long buried within the island's kitchens. The charm is known to occasionally crave a bit of sugar from nearby pastries, adding an unexpected but delightful twist to any culinary adventure.",
    "category": "curiosities",
    "price": 260,
    "icon": "🗣️",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Understand Baking Murmurs",
      "Enhance Cooking Speed"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "honeycomb_box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Understand Baking Murmurs",
        "rules": "As a bonus action, the wearer can attempt to understand the subtle whispers of dough and equipment related to baking. This has a chance (15%) to reveal hidden passages or secret recipes within a 30-foot radius. The effect lasts for 1 minute."
      },
      {
        "title": "Enhance Cooking Speed",
        "rules": "The charm increases the cooking speed by 20% for as long as it is active, which can be sustained indefinitely without expending charges or resting."
      }
    ],
    "levelRequirementReason": "This charm aids in basic culinary tasks and requires no advanced knowledge to use effectively.",
    "vendorReason": "Sweet Supplies specializes in kitchenware and curiosities related to food, making it a natural vendor for the Yeast Whisper Charm.",
    "shippingDetail": "Ships via Honeycomb Box, known for its reliable delivery of delicate items within the island.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute",
      "endsWhen": "The effect ends when it is no longer actively understood by the wearer or if the wearer moves more than 30 feet away from the area.",
      "charges": "Unlimited"
    },
    "priceReason": "The charm's ability to both reveal secrets and enhance cooking speed offers a significant advantage in culinary endeavors, making it worth the higher price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:08:57.754095+00:00",
    "aiReviewedAt": "2026-07-25T00:08:57.754095+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_chronometer_of_confusion": {
    "id": "midlands_item_chronometer_of_confusion",
    "name": "Chronometer of Temporal Hiccups",
    "description": "The Chronometer of Temporal Hiccups is a brass and copper pocket watch, its face forever fixed at 3:17. When wielded, it emits an unsettling buzz that resonates with the passage of time, subtly warping moments around you. Though it causes minor inconveniences, its true nature lies in its unpredictable temporal distortions, which can either stretch or compress the flow of seconds for those nearby, enhancing one's perception and alertness but also leading to brief moments where time seems to stand still.",
    "category": "curiosities",
    "price": 990,
    "icon": "🕰️",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "temporal distortion",
      "enhanced perception"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "winged_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "When activated as a bonus action, the Chronometer of Temporal Hiccups can either stretch or compress the flow of time around you for up to 1 minute. During this time, all creatures within 5 feet have their movement speed reduced by 10 feet (DC 14 Dexterity saving throw negates). This effect ends if a creature makes a successful save."
      },
      {
        "title": "Enhanced Perception",
        "rules": "While the Chronometer is active, you gain advantage on Wisdom (Perception) checks for the duration of one short or long rest. This enhancement lasts until you finish such a rest."
      }
    ],
    "levelRequirementReason": "This pocket watch requires minimal magic to wield but still offers potent temporal effects.",
    "vendorReason": "The Empire Exchange specializes in unique and arcane curiosities, making it a fitting vendor for this peculiar timepiece.",
    "shippingDetail": "Delivered by Winged Snail post, the Chronometer arrives with a soft cushion to protect its delicate mechanisms during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until a successful Dexterity saving throw is made",
      "endsWhen": "A creature within range makes a successful Dexterity saving throw, ends on long rest completion, or when the effect's duration runs out",
      "charges": "Unlimited"
    },
    "priceReason": "The Chronometer of Temporal Hiccups is considered uncommon due to its unique temporal effects and craftsmanship.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T00:10:08.728347+00:00",
    "aiReviewedAt": "2026-07-25T00:10:08.728347+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_mapmaker_service": {
    "id": "middle_earth_mapmaker_service",
    "name": "Cartographer's Precise Survey",
    "description": "The Cartographer's Precise Survey is an ancient parchment, crafted by Old Barnaby of the Shire, whose meticulous hand has mapped every cranny and secret passageway within a five-mile radius. This detailed chart not only reveals the locations of lurking trolls and grumpy goblins but also uncovers hidden pathways that are often overlooked by the untrained eye. The map's intricate details are said to have been marked using a rare ink, derived from the glow of distant stars, ensuring its accuracy even in the darkest of times.",
    "category": "services",
    "price": 4100,
    "icon": "🗺️",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "reveals detailed terrain and hidden routes",
      "discovers minor treasure with a chance"
    ],
    "vendor": "shire_shop",
    "shippedBy": "Hobbit Post Cart",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Revealing Terrain Details",
        "rules": "When activated, this survey provides a detailed map of the surrounding area for an hour. It reveals all visible terrain features within a five-mile radius, including hidden routes and the locations of dangerous creatures like trolls and goblins. This effect is instantaneous upon activation."
      },
      {
        "title": "Discovering Minor Treasure",
        "rules": "With a successful Intelligence (Investigation) check (DC 15), there's a 20% chance to discover a minor treasure, such as a small bag of gems or a valuable artifact. This effect lasts until the survey is destroyed."
      }
    ],
    "levelRequirementReason": "Old Barnaby’s expertise and the intricate nature of this map make it suitable for more experienced adventurers.",
    "vendorReason": "The Shire Shop, known for its reliable and high-quality goods, is the only place to purchase Old Barnaby's precision maps.",
    "shippingDetail": "Delivered within three days by the trusted Hobbit Post Cart service, ensuring the map arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; details revealed until destroyed",
      "endsWhen": "Destroyed upon use or if damaged beyond repair",
      "charges": "Unlimited"
    },
    "priceReason": "The rare ink and Old Barnaby's craftsmanship elevate this survey to a rare level, making it a valuable tool for any adventurer.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:09:43.018296+00:00",
    "aiReviewedAt": "2026-07-25T00:09:43.018296+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_mithril_hammer_fragment": {
    "id": "middle_earth_mithril_hammer_fragment",
    "name": "Dwarven Forge's Finest Fragment",
    "description": "The Dwarven Forge's Finest Fragment is a shimmering shard of mithril, forged in the heart of an ancient dwarven forge now buried beneath collapsed stone. This fragment vibrates with latent power, pulsating with the essence of the earth itself. It can be wielded to shatter hard stone and deal devastating blows to foes, while also granting a smithing skill bonus that could rival even the most seasoned dwarven artisans.",
    "category": "equipment",
    "price": 15000,
    "icon": "🔨",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "+5 to Smithing Skill",
      "Chance to Inflict Bleeding"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "Dwarven Delivery Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Smithing Skill Bonus",
        "rules": "You gain a +5 proficiency bonus to all checks made with the Smithing tool. This effect is always active while you wield the fragment."
      },
      {
        "title": "Bleeding on Attack",
        "rules": "When you make a melee attack against an enemy, there is a 20% chance that it will cause the target to bleed for 1d4 points of damage at the start of its next turn. This effect has no cooldown and can be used in any attack."
      }
    ],
    "levelRequirementReason": "This fragment is crafted specifically for beginners who wish to learn the craft of dwarven smithing.",
    "vendorReason": "The dwarves at Dwarven Forge are known for their expertise in recovering and forging rare materials from ancient sites.",
    "shippingDetail": "Delivered by the trusty Dwarven Delivery Cart, which ensures safe transport through treacherous terrains.",
    "usage": {
      "activation": "Instantaneous (requires no action)",
      "duration": "Permanent while wielded",
      "endsWhen": "Destroyed when reduced to zero hit points or lost in a collapse",
      "charges": "Unlimited"
    },
    "priceReason": "The fragment is priced at 1000 XP, reflecting its unique properties and the expertise required to recover such a rare piece.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:09:43.234393+00:00",
    "aiReviewedAt": "2026-07-25T00:09:43.234393+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_warrior's_contract": {
    "id": "midlands_item_warrior's_contract",
    "name": "The Ironclad Accord",
    "description": "The Ironclad Accord is a magically-sealed contract forged by a stern retired legionnaire who still insists on daily polishing. This ancient artifact grants temporary protection and enhances combat prowess, though it comes with an unwavering demand for loyalty. Signed in the blood of fallen heroes, its gleaming surface hints at battles long past. Polished to a high shine, this contract is a relic that demands respect from those who choose to bind themselves under its terms.",
    "category": "equipment",
    "price": 15000,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "enhanced_combat_prowess",
      "temporary_armor"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "giant_rat",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Enhanced Combat Prowess",
        "rules": "When activated by a successful DC 15 Wisdom (Perception) check, the wielder gains a +2 bonus to attack rolls and damage dealt for 1 hour. This effect can only be used once per long rest."
      },
      {
        "title": "Temporary Armor",
        "rules": "For every 4 hours of daily polishing, the contract grants temporary resistance to all damage types equal to 5 plus your Charisma modifier (minimum 2). This effect lasts for a day and can only be activated once per long rest."
      }
    ],
    "levelRequirementReason": "The Ironclad Accord demands significant combat experience, as its power is drawn from the wielder's unwavering loyalty and the legionnaire's wisdom.",
    "vendorReason": "The artisans at Fractured Forge specialize in forging contracts that bind warriors to their oaths, making The Ironclad Accord a fitting addition to their inventory.",
    "shippingDetail": "Delivered by the mischievous giant rats who scurry through the undercity, this package may arrive with slight delays due to their unpredictable nature.",
    "usage": {
      "activation": "Activates on a successful DC 15 Wisdom (Perception) check.",
      "duration": "1 hour for Enhanced Combat Prowess; lasts a day for Temporary Armor.",
      "endsWhen": "The effect ends when the time expires or the contract is damaged beyond repair.",
      "charges": "Unlimited, but can only be used once per long rest."
    },
    "priceReason": "The Ironclad Accord's balanced price reflects its rare forging materials and the ancient magic required to bind it with a warrior's soul.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:09:49.416498+00:00",
    "aiReviewedAt": "2026-07-25T00:09:49.416498+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_pony_footprint_charm": {
    "id": "equestria_item_pony_footprint_charm",
    "name": "Pony Footprint Charm",
    "description": "The Pony Footprint Charm is a minuscule, meticulously crafted footprint of a happy Pegasus pony, radiating warmth and joy. Crafted from shimmering silver and encased in a glass vial, it's said to bring good luck to those who cherish friendship and always remember the importance of spreading joy. Upon holding this charm, you feel an unspoken connection to the ponies of Equestria, as if their spirits are guiding your path.",
    "category": "curiosities",
    "price": 990,
    "icon": "🐾",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Lucky Charm",
      "Joyful Aura"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lucky Charm",
        "rules": "When you find yourself in a situation that could yield treasure or positive events, roll an additional d6. On a result of 15 or higher, you gain the equivalent benefit as if your luck had just improved."
      },
      {
        "title": "Joyful Aura",
        "rules": "You emit a subtle aura that increases your Persuasion checks by +2 bonus until the end of your next short or long rest. This effect does not stack with other similar abilities."
      }
    ],
    "levelRequirementReason": "The charm's magical properties are accessible to all adventurers, as it requires no specific class or background.",
    "vendorReason": "As a hub for Equestria's most beloved ponies, the Ponyville Market is a fitting place for this cherished item.",
    "shippingDetail": "The charm arrives safely within three days of your order.",
    "usage": {
      "activation": "Passive effect. No activation required.",
      "duration": "Until the end of your next short or long rest.",
      "endsWhen": "At the start of a new short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The charm's magical properties, combined with its rarity and positive effects, justify this balanced price in XP.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:10:21.633363+00:00",
    "aiReviewedAt": "2026-07-25T00:10:21.633363+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_geode_of_echoes": {
    "id": "earth_land_item_geode_of_echoes",
    "name": "The Silent Cartographer's Stone",
    "description": "The Silent Cartographer's Stone is a shimmering geode that hums with ancient knowledge, its crystals aglow with the echoes of long-forgotten maps and lost explorers. When touched, it releases faint whispers—mostly complaints about the weather, but occasionally hidden pathways or cryptic hints about map locations emerge. The stone amplifies your senses, subtly enhancing your perception by 5%, allowing you to discern subtle details that others might overlook.",
    "category": "curiosities",
    "price": 4100,
    "icon": "💎",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Whispering Echoes",
      "Enhanced Perception"
    ],
    "vendor": "magic_shop",
    "shippedBy": "giant_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispering Echoes",
        "rules": "As a bonus action, touch the stone briefly. You hear faint whispers of forgotten maps and lost explorers. The effects last for one minute. This effect can be used once per long rest."
      },
      {
        "title": "Enhanced Perception",
        "rules": "You gain advantage on perception checks related to map locations and tracking. This effect lasts until you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "This stone is accessible to adventurers of all levels, providing them with a small but useful tool.",
    "vendorReason": "The magic shop stocks this item because it is a sought-after curiosity among explorers and cartographers seeking ancient wisdom.",
    "shippingDetail": "The stone may arrive in a small, intricately carved wooden box delivered by the giant snail. The delivery time varies based on the snail's mood.",
    "usage": {
      "activation": "Bonus action to touch and hear whispers; passive effect of enhanced perception until rest.",
      "duration": "Whispers last one minute; enhanced perception lasts until a short or long rest.",
      "endsWhen": "The stone's effects end upon completing a short or long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The rarity and utility of the stone justify its cost, offering adventurers valuable insights into forgotten maps.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T00:10:37.723209+00:00",
    "aiReviewedAt": "2026-07-25T00:10:37.723209+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_dragonscale_dust": {
    "id": "earth_land_item_dragonscale_dust",
    "name": "Scrapings from Ignis' Fury",
    "description": "Scrapings from Ignis' Fury is a fine dust collected from the shed scales of a young Crimson Dragon. This fiery artifact smells unmistakably like burnt marshmallows and disappointment, yet it grants weapons an infernal boost. Sprinkled on melee weapons, it bestows +4 fire damage and a chance to ignite enemies for 1d4+2 rounds. The weapon's attack speed also increases by +10% until the end of your next turn.",
    "category": "consumables",
    "price": 15000,
    "icon": "🔥",
    "stock": 23,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "fire damage",
      "ignites enemies"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "swift griffon courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fire Damage Boost",
        "rules": "When activated, this dust grants a weapon +4 fire damage and a chance to ignite enemies for 1d4+2 rounds. This effect ends when the weapon deals damage."
      },
      {
        "title": "Attack Speed Increase",
        "rules": "The weapon's attack speed increases by +10% until the end of your next turn, after which it resets. This effect is usable once per short or long rest."
      }
    ],
    "levelRequirementReason": "Collecting and preparing these dusts requires knowledge of dragon lore.",
    "vendorReason": "The earth emporium specializes in the rarest and most exotic materials, including those from dragons.",
    "shippingDetail": "Ships within three days with a swift griffon courier. Expedited shipping available for an additional cost.",
    "usage": {
      "activation": "Bonus action to sprinkle on melee weapon",
      "duration": "Instantaneous effect; lasts until the end of your next turn",
      "endsWhen": "The weapon deals damage or at the start of your next turn, whichever comes first",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced with other consumables that offer similar boosts and effects.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:10:04.519317+00:00",
    "aiReviewedAt": "2026-07-25T00:10:04.519317+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_layer_shard_of_echoes": {
    "id": "grand_country_layer_shard_of_echoes",
    "name": "Layer Shard of Echoes",
    "description": "The Layer Shard of Echoes hums with a layered resonance, its jagged edges glinting faintly under dim light. When held closely to your ear, it briefly plays back whispers from past events within the Grand Country—useful for tracking or uncovering secrets, but beware: some echoes are… unsettling and can leave you questioning reality itself. The shard is said to have been crafted by ancient artisans who knew the land as it was centuries ago.",
    "category": "curiosities",
    "price": 15000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Whispered Insight",
      "Minor Illusion"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispered Insight",
        "rules": "Activates on a bonus action. The wielder can hear a brief, fragmented whisper from the past within a 30-foot radius related to the Grand Country's history or geography. This effect lasts for 1 minute and has no save DC. However, after using this ability three times per day, it requires an hour of rest before being usable again."
      },
      {
        "title": "Minor Illusion",
        "rules": "Passive effect while holding the shard. The wielder can create minor sensory illusions that are indistinguishable from reality to those within 30 feet for up to 1 minute, providing a +2 bonus on Deception checks."
      }
    ],
    "levelRequirementReason": "The Layer Shard of Echoes requires no specific level as it is an item that provides subtle but useful information without demanding extensive power.",
    "vendorReason": "Layer Market specializes in arcane curiosities and relics from the Grand Country, making the Layer Shard a fitting addition to their inventory.",
    "shippingDetail": "Ships via the Dimensional Rift, which ensures that the shard arrives intact but requires an additional day for delivery due to its delicate nature.",
    "usage": {
      "activation": "Bonus action to activate Whispered Insight; passive Minor Illusion effect while holding the shard.",
      "duration": "Whispered Insight lasts 1 minute and can be used three times per day with a one-hour rest required between uses. The Minor Illusion is active as long as the wielder holds the shard, up to a maximum of 1 minute.",
      "endsWhen": "After using Whispered Insight three times or after an hour of continuous use for Minor Illusion; otherwise, it ends when the item is no longer held.",
      "charges": "Unlimited uses per day with rest"
    },
    "priceReason": "The Layer Shard of Echoes provides subtle but useful information and sensory effects without requiring extensive power, making its price balanced at 1000 XP.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T00:10:44.125160+00:00",
    "aiReviewedAt": "2026-07-25T00:10:44.125160+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_side_seller_charm_of_ascension": {
    "id": "grand_country_side_seller_charm_of_ascension",
    "name": "Charm of Ascension",
    "description": "The Charm of Ascension is a delicate pendant made from ancient brass, adorned with engravings that whisper of ascension and gravity's dance. Crafted by the enigmatic side sellers in the shadowy markets of forgotten realms, it briefly manipulates localized gravity, allowing for a leap of up to 50 feet high. Misstep too far, and you might find yourself plummeting back down into reality with a force that could knock you out cold.",
    "category": "equipment",
    "price": 65000,
    "icon": "⬆️",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Leaping Leap",
      "Gravity Shift"
    ],
    "vendor": "side_seller",
    "shippedBy": "warp_wormhole",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Leaping Leap",
        "rules": "When you use an action to activate the charm, you gain a +50 bonus to your jump distance. This effect lasts for up to 1 minute or until you use this feature again."
      },
      {
        "title": "Gravity Shift",
        "rules": "Once per short rest, you can spend a reaction to cause a localized area of gravity to reverse briefly for 1 round (30 seconds). Targets within a 5-foot radius must succeed on a DC 14 Strength saving throw or be knocked prone. This effect cannot be used again until you finish a long rest."
      }
    ],
    "levelRequirementReason": "Even the simplest of adventurers can appreciate the charm's benefits, making it accessible to all.",
    "vendorReason": "The side sellers are known for their eclectic and often unpredictable wares, including items that bend reality in intriguing ways.",
    "shippingDetail": "Ships via warp wormhole, arriving with a slight delay but ensuring the charm arrives intact and potent.",
    "usage": {
      "activation": "Action or Reaction (Leaping Leap), Reaction (Gravity Shift)",
      "duration": "Up to 1 minute for Leaping Leap; 1 round for Gravity Shift",
      "endsWhen": "Used again, ends of rest, or expended",
      "charges": "Unlimited"
    },
    "priceReason": "The charm's rarity and unique abilities justify its relatively modest price in terms of XP.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T00:10:27.624156+00:00",
    "aiReviewedAt": "2026-07-25T00:10:27.624156+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_epic_singularity_shard": {
    "id": "doughnut_hole_epic_singularity_shard",
    "name": "Echo of the Void Heart",
    "description": "The Echo of the Void Heart is a pulsating fragment from the core of nothingness. It hums with latent gravitational power, capable of distorting space and pulling enemies closer within its small radius. Its touch is unsettling, as it can induce brief, disorienting visions that might lead even the most level-headed to act irrationally. This shard's true danger lies in its limited use; overexposure could lead to dire consequences.",
    "category": "equipment",
    "price": 15000,
    "icon": "🌌",
    "stock": 8,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Gravitational Distortion",
      "Unsettling Visions"
    ],
    "vendor": "center_seller",
    "shippedBy": "Void Courier",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Gravitational Distortion",
        "rules": "As a bonus action, you can create a localized gravitational field within a 10-foot radius centered on yourself. Enemies in this area are pulled toward the center of the field as if they were affected by the Pull spell (save DC 15). The effect lasts for 2 turns and has no cooldown."
      },
      {
        "title": "Unsettling Visions",
        "rules": "Each time you use Gravitational Distortion, there is a 30% chance that all creatures within the area gain disadvantage on Wisdom (Insight) checks and Perception checks for 1 minute. This effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level to harness its cosmic power without risk.",
    "vendorReason": "The center_seller has the means and resources to acquire such rare and powerful artifacts from the Void realms.",
    "shippingDetail": "The Echo of the Void Heart is shipped via the Void Courier, ensuring its safe transport through the most dangerous voids in existence.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "2 turns or until dispelled by a successful save or enemy movement",
      "endsWhen": "Effect ends on itself after 2 uses per long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Echo of the Void Heart is priced at 1000 XP, reflecting its limited use and cosmic origin.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:10:38.032691+00:00",
    "aiReviewedAt": "2026-07-25T00:10:38.032691+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_curiosity_chronal_drizzle": {
    "id": "doughnut_hole_curiosity_chronal_drizzle",
    "name": "Temporal Syrup",
    "description": "Temporal Syrup is a thick, iridescent liquid that hums with the quiet energy of time itself. A single drop applied to any weapon causes it to ripple and shimmer, imbuing it with the power to manipulate temporal flows. When wielded, this syrup can either slow an enemy’s movements by 30% for two turns or accelerate your own attacks by 25%, allowing you to strike faster without fear of unintended consequences… at least until the next paradox.",
    "category": "curiosities",
    "price": 4100,
    "icon": "⏳",
    "stock": 99,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Temporal Slow",
      "Temporal Speed"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Quantum Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "When applied, Temporal Syrup causes a weapon to slow its target’s speed by 30% for two turns. This effect is instantaneous upon contact and persists until the end of the target's next turn."
      },
      {
        "title": "Temporal Speed",
        "rules": "Temporal Syrup can also be applied, which increases the wielder's attack speed by 25% for one turn. The increase is immediate and lasts only as long as the syrup remains on the weapon."
      }
    ],
    "levelRequirementReason": "This item's effects are subtle but powerful, making it accessible to lower-level characters who can benefit from its unique temporal properties.",
    "vendorReason": "The Void Vendor, known for selling items that bend the fabric of reality, naturally stocks Temporal Syrup among other curiosities.",
    "shippingDetail": "Ships via Quantum Delivery, ensuring this item arrives in perfect condition and ready to be used upon receipt.",
    "usage": {
      "activation": "Apply a drop of Temporal Syrup to any weapon as an action.",
      "duration": "Each effect lasts for two turns or until the end of your next turn, whichever comes first.",
      "endsWhen": "The effects are interrupted by damage to the weapon or if the syrup dries up.",
      "charges": "Unlimited charges; Temporal Syrup replenishes after each battle."
    },
    "priceReason": "This item is priced at 1000 XP, reflecting its rare and unique properties that enhance weapon capabilities in specific temporal ways.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-25T14:27:31.396002+00:00",
    "aiReviewedAt": "2026-07-25T14:27:31.396002+00:00",
    "aiReviewVersion": 1
  },
  "forbidden_shadowshard": {
    "id": "forbidden_shadowshard",
    "name": "Shard of the Twisted Void",
    "description": "The Shard of the Twisted Void is a fragment torn from the chaotic void itself. Its pulsating darkness can drive even the most steadfast to madness, and it grants temporary resistance against psychic attacks. Holding this shard too long risks summoning shadowy imps that might bring untold chaos into your life. The vendor, Chaos Dealer, ensures you receive this potent relic directly by Dark Messenger, known for its reliable but mysterious deliveries.",
    "category": "forbidden",
    "price": 140000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "summons shadow imps",
      "resistance to psychic damage"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Dark Messenger",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Shadow Imp Summoning",
        "rules": "When you hold the shard for more than an hour, there is a 10% chance per hour that one shadow imp appears in your immediate area. These imps are hostile and cause no saving throw. They dissipate after 24 hours or if dealt damage."
      },
      {
        "title": "Psychic Resistance",
        "rules": "You gain temporary resistance to psychic damage equal to your proficiency bonus while holding the shard. This effect lasts until you take a long rest."
      }
    ],
    "levelRequirementReason": "Only those of proven strength and experience can handle such a dangerous artifact without succumbing to its malevolent influence.",
    "vendorReason": "The Chaos Dealer specializes in forbidden and mythic items that push the boundaries of chaos and order.",
    "shippingDetail": "Delivered by Dark Messenger, known for its mysterious but reliable service. The shard must be handled with care to prevent accidental summoning during transit.",
    "usage": {
      "activation": "Passive effect while holding the shard",
      "duration": "Until a long rest is taken or summoned imps are destroyed",
      "endsWhen": "The effects dissipate upon taking a long rest, destroying the shard, or when summoned imps are defeated",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its dangerous and powerful nature without being overpriced for a mythic item.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-25T00:10:57.475218+00:00",
    "aiReviewedAt": "2026-07-25T00:10:57.475218+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_ironclad_relic": {
    "id": "warhammer_ironclad_relic",
    "name": "The Emperor's Last Stand",
    "description": "The Emperor's Last Stand is a colossal warhammer forged from iron that once belonged to an emperor. Its surface gleams with the spirit of its fallen owner, and it resonates with the weight of countless battles fought. When wielded in combat, it delivers crushing blows that can shatter even the strongest armor. Legend has it that those who hold this weapon feel the presence of their former master, lending them unparalleled strength until they succumb to exhaustion or remove it from battle.",
    "category": "equipment",
    "price": 15000,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Crushing Might",
      "Ghostly Presence"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Fate Delivery",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Crushing Might",
        "rules": "When you hit a target with this warhammer, it deals an additional 2d6 bludgeoning damage. If the attack is a critical hit, the target is also stunned for 1 round."
      },
      {
        "title": "Ghostly Presence",
        "rules": "While wielding The Emperor's Last Stand, you gain advantage on saving throws against fear and death effects. This effect lasts until you rest or dismiss it as an action."
      }
    ],
    "levelRequirementReason": "This weapon is designed for experienced heroes who have faced the gravest threats.",
    "vendorReason": "Fate Forge has the resources and historical ties to craft such a powerful relic.",
    "shippingDetail": "Ships via special courier with a two-week delivery time.",
    "usage": {
      "activation": "Melee weapon attack",
      "duration": "Instantaneous, lasts until you rest or dismiss it",
      "endsWhen": "You rest or dismiss the effect as an action",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its epic rarity and powerful effects.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:10:55.146670+00:00",
    "aiReviewedAt": "2026-07-25T00:10:55.146670+00:00",
    "aiReviewVersion": 1
  },
  "internet_legendary_firewall": {
    "id": "internet_legendary_firewall",
    "name": "The Great Wall of Wario",
    "description": "The Great Wall of Wario, forged from solidified code and powered by the collective rage of millions of internet trolls, stands as a legendary firewall that repels digital attacks with unyielding resilience. Its core is woven from the very essence of viral content, making it impervious to viruses and hacking attempts. However, should it encounter an onslaught of cat pictures or GIFs, its defenses falter, slowing attackers' movements while occasionally displaying aggressively cheerful memes.",
    "category": "equipment",
    "price": 65000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Digital Immunity",
      "Buffering Effect"
    ],
    "vendor": "cyber_market",
    "shippedBy": "High-Speed Packet Transfer",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Digital Immunity",
        "rules": "The Great Wall of Wario grants complete immunity to digital attacks, including viruses and hacking attempts. It reflects spells cast against it back at the caster as a reaction with a save DC of 15."
      },
      {
        "title": "Buffering Effect",
        "rules": "When an attacker uses cat pictures or GIFs against The Great Wall of Wario, they suffer a localized 'buffering' effect that reduces their movement speed by half until the end of their next turn. This effect also triggers once per short rest."
      }
    ],
    "levelRequirementReason": "Requires significant digital expertise and resilience to operate this complex firewall.",
    "vendorReason": "As a leading authority in cybersecurity, the cyber_market is trusted with the most advanced and powerful equipment like The Great Wall of Wario.",
    "shippingDetail": "Delivered via High-Speed Packet Transfer, ensuring swift delivery to your doorstep.",
    "usage": {
      "activation": "Instantaneous activation on digital attacks; reflects spells as a reaction.",
      "duration": "Until the end of the encounter or until another attack is made against it.",
      "endsWhen": "The attacker successfully bypasses its defenses with non-digital means.",
      "charges": "Unlimited, recharges after 24 hours."
    },
    "priceReason": "Balanced as a rare and powerful piece of cybersecurity equipment, The Great Wall of Wario is priced to reflect its rarity and utility in the market.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T00:11:30.641251+00:00",
    "aiReviewedAt": "2026-07-25T00:11:30.641251+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_rusty_dwarven_hammer": {
    "id": "faerun_item_rusty_dwarven_hammer",
    "name": "Dwarf’s Grumble Stone",
    "description": "The Dwarf’s Grumble Stone appears ancient, its surface pockmarked from countless battles against goblins and orcs. The hammer's weight is a testament to dwarven craftsmanship, each dent imbued with the spirit of stubborn defiance. When wielded, it seems to grow heavier in your hand, channeling the fury of an enraged dwarf into every strike, delivering a solid 1d8+2 bludgeoning damage and a 5% chance to inflict Bleeding.",
    "category": "equipment",
    "price": 260,
    "icon": "🔨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Bleeding",
      "Heavier Strikes"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bleeding",
        "rules": "When you hit with the Dwarf’s Grumble Stone, there is a 5% chance that the target takes an additional 1d6 damage at the start of its next turn. This effect has no save DC and can occur once per attack."
      },
      {
        "title": "Heavier Strikes",
        "rules": "The hammer adds +2 to your Strength (Athletics) checks for as long as you hold it, representing the weight that amplifies your strikes but also makes it more cumbersome. You must make a Dexterity saving throw at the start of each combat to avoid dropping the hammer."
      }
    ],
    "levelRequirementReason": "This hammer is designed for beginners and seasoned warriors alike, requiring only basic strength to wield.",
    "vendorReason": "Sword Coast Traders specialize in goods from distant lands, including relics of ancient battles like the Dwarf’s Grumble Stone.",
    "shippingDetail": "Ships via a sturdy wagon, often delayed by road closures and bandit raids in the region.",
    "usage": {
      "activation": "On your action",
      "duration": "Until the start of your next turn",
      "endsWhen": "You drop the hammer or are incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The hammer's rarity and the unique combination of its effects justify a high price, aligning with its reputation as a battle-hardened relic.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:11:23.504481+00:00",
    "aiReviewedAt": "2026-07-25T00:11:23.504481+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_scroll_of_abyssal_invocation": {
    "id": "faerun_item_scroll_of_abyssal_invocation",
    "name": "The Unholy Bargain",
    "description": "The Unholy Bargain is a crumpled, parchment-like scroll emanating an unsettling cold that lingers on touch. Its inked surface seems to writhe and bleed, hinting at forbidden rituals. When unrolled, it can summon a malevolent imp that seeks to exploit any weakness or fear you might possess, making it as dangerous for the unwary as it is powerful in the hands of those who know how to wield it.",
    "category": "forbidden",
    "price": 4100,
    "icon": "😈",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "summons an imp",
      "imposes a minor compulsion"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "dark_messenger",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Summon Imp",
        "rules": "As an action, you can unroll The Unholy Bargain. A malevolent imp appears within 30 feet of you and attacks the nearest creature that poses a threat to you or your allies. This effect has a duration of 1 minute per caster level (minimum 1 minute). Save DC is equal to 8 + your spell save DC + half your proficiency bonus."
      },
      {
        "title": "Minor Compulsion",
        "rules": "The imp imposes a minor compulsion on you as long as it remains summoned. You must succeed on an Wisdom saving throw (DC = 10) or be subjected to the charmed condition for 1 minute per caster level (minimum 1 minute). The imp can compel you to perform actions that are within your ability, but not impossible."
      }
    ],
    "levelRequirementReason": "Requires a minimum of 5th-level spellcaster proficiency to safely handle and use the scroll without immediate danger.",
    "vendorReason": "Waterdeep Market is known for its black market exchanges, making it a plausible seller of forbidden items like The Unholy Bargain.",
    "shippingDetail": "Delivered by Dark Messenger, the courier ensures that only those with a valid order can receive and use this dangerous artifact.",
    "usage": {
      "activation": "As an action to unroll and activate the scroll.",
      "duration": "The imp lasts for 1 minute per caster level (minimum 1 minute).",
      "endsWhen": "The imp is dismissed or dies, or you lose concentration as if concentrating on a spell.",
      "charges": "Unlimited uses, but only one imp can be summoned at a time."
    },
    "priceReason": "Balanced to reflect its risk and utility in battle against lesser demons and for minor compulsion effects.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:12:04.488146+00:00",
    "aiReviewedAt": "2026-07-25T00:12:04.488146+00:00",
    "aiReviewVersion": 1
  },
  "internet_pixel_flare": {
    "id": "internet_pixel_flare",
    "name": "Viral Spark Grenade",
    "description": "The Viral Spark Grenade appears innocuous, a mere pixelated explosion of static and neon hues. Upon activation, it unleashes a torrent of viral internet memes and concentrated digital energy that temporarily blinds foes with its barrage, compelling them to laugh uncontrollably. This effect not only stuns the target for one round but also sows chaos in their minds, leaving them distracted and disoriented for three rounds. Ideal for disrupting tactical formations or escaping awkward social situations.",
    "category": "consumables",
    "price": 15000,
    "icon": "💥",
    "stock": 42,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Blinds Targets",
      "Distracts Minds"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Blind and Stun",
        "rules": "When thrown, the Viral Spark Grenade targets one creature within a 15-foot radius. The target must make a DC 14 Dexterity saving throw or be blinded for 1 round and stunned until the start of its next turn."
      },
      {
        "title": "Mental Distraction",
        "rules": "Additionally, the target becomes distracted for 3 rounds, suffering disadvantage on all attack rolls, saving throws, and ability checks. This effect persists even if the creature regains consciousness or is healed."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to handle the digital energy safely without causing unintended harm.",
    "vendorReason": "The pixel shop specializes in high-tech and internet-themed gadgets, making it a natural vendor for this unique item.",
    "shippingDetail": "Delivered via fast-drone courier with a guaranteed two-hour delivery within the city limits.",
    "usage": {
      "activation": "Thrown as an action",
      "duration": "Instantaneous",
      "endsWhen": "The target regains consciousness or is healed, whichever comes first",
      "charges": "Recharges after a short rest"
    },
    "priceReason": "Balanced price reflects the item's rarity and unique effects, offering players strategic utility without game-breaking power.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T00:11:53.402407+00:00",
    "aiReviewedAt": "2026-07-25T00:11:53.402407+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_contract": {
    "id": "internet_meme_contract",
    "name": "The Influencer's Bargain",
    "description": "The Influencer's Bargain is a sleek black contract adorned with neon holograms. It seals a temporary alliance between you and an online influencer wielding vast social clout. For as long as your posts maintain viral traction, you gain +1 to Charisma checks for three rounds and a fleeting boost in movement speed. However, any dip in engagement risks attracting relentless digital trolls, whose harassment can debilitate your online presence.",
    "category": "faction",
    "price": 990,
    "icon": "👍",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "+1 Charisma (3 rounds)",
      "Increased Movement Speed"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Packet Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "Activates on successful social interactions or performance. Duration is three rounds, ending when the user fails a Charisma check or the contract's engagement condition is breached."
      },
      {
        "title": "Movement Speed Increase",
        "rules": "Instantaneous effect upon signing the contract. Lasts until the next short rest or until the influencer's social media post loses traction, whichever comes first."
      }
    ],
    "levelRequirementReason": "The simplicity of maintaining viral content is accessible to all players regardless of level.",
    "vendorReason": "Cyber Market specializes in cutting-edge tech and digital contracts, making it the ideal vendor for The Influencer's Bargain.",
    "shippingDetail": "The contract is delivered via a secure data packet that arrives within an hour of purchase.",
    "usage": {
      "activation": "Passive effect upon signing the contract; no activation required.",
      "duration": "Instantaneous for movement speed, three rounds for Charisma boost.",
      "endsWhen": "Effect ends when engagement levels drop or user fails a Charisma check.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to ensure it's a strategic but not overpowered purchase.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-25T00:11:46.339320+00:00",
    "aiReviewedAt": "2026-07-25T00:11:46.339320+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_goblin_shockberry": {
    "id": "midlands_item_goblin_shockberry",
    "name": "Shocking Crimson Berries",
    "description": "The Shocking Crimson Berries are a rare find in the markets of the Midlands, favored by goblins for their electrifying potency. These vibrant red berries not only grant you temporary resistance to electrical damage but also release a burst of chaotic energy that has a high chance of stunning nearby enemies. The goblin tribes have long relied on these berries as a battlefield advantage, and Wario's endorsement ensures they are sought after by many.",
    "category": "consumables",
    "price": 4100,
    "icon": "⚡",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Electrical Resistance",
      "Stun Burst"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "swift courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Electrical Resistance",
        "rules": "Consume one berry to gain temporary electrical resistance +6 for 4 turns. This effect does not stack with other sources of electrical resistance."
      },
      {
        "title": "Stun Burst",
        "rules": "When consumed, there is a 50% chance that you will also cause a nearby target within 10 feet to be stunned for 1 round. The DC to resist this effect is 14."
      }
    ],
    "levelRequirementReason": "This item requires at least level 3 to consume due to its potent electrical effects.",
    "vendorReason": "The Empire Exchange caters to adventurers seeking unique and powerful items, making these berries an ideal addition to their offerings.",
    "shippingDetail": "Ships overnight via the swift courier service.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "4 turns of electrical resistance and a single stun burst effect",
      "endsWhen": "The effects expire naturally after the stated duration or when consumed again before they wear off",
      "charges": "Unlimited, as long as you have berries"
    },
    "priceReason": "Balanced at 1000 XP due to its potent electrical resistance and stun effect.",
    "priceOriginal": 1700,
    "priceReviewedAt": "2026-07-25T14:27:27.647676+00:00",
    "aiReviewedAt": "2026-07-25T14:27:27.647676+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_broken_cog": {
    "id": "midlands_item_broken_cog",
    "name": "Fragment of a Clockwork Mind",
    "description": "A Fragment of a Clockwork Mind is a salvaged cog with a polished brass finish and intricate gears etched into its surface. This relic hums faintly, as if whispering secrets from an ancient automaton's mind. When wielded, it grants a fleeting insight into the inner workings of machines, occasionally deciphering complex mechanisms that have long been forgotten. The cog is said to be imbued with the essence of a clockwork intelligence, making it a prized relic among engineers and archaeologists.",
    "category": "curiosities",
    "price": 15000,
    "icon": "⚙️",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Clockwork Insight",
      "Mystic Mechanism Decipher"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "delivery_only",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Clockwork Insight",
        "rules": "As an action, the wielder gains +3 to Perception checks related to mechanical devices for 4 turns. This effect can only be used once per short or long rest."
      },
      {
        "title": "Mystic Mechanism Decipher",
        "rules": "Once per combat, the wielder can attempt to decipher an ancient or complex mechanism with a successful Intelligence (Mechanics) check. The DC for this check is 15."
      }
    ],
    "levelRequirementReason": "This relic requires a basic understanding of mechanics and perception.",
    "vendorReason": "The Fractured Forge specializes in salvaged and ancient artifacts, making this cog an ideal addition to their collection.",
    "shippingDetail": "Shipped via a trusted courier known for delivering delicate items safely and promptly.",
    "usage": {
      "activation": "Action",
      "duration": "4 turns",
      "endsWhen": "Ends when the wielder completes their next turn after the effect duration expires or if the relic is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its unique properties and historical significance, making it a valuable but not overpowered relic.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-25T00:12:02.122444+00:00",
    "aiReviewedAt": "2026-07-25T00:12:02.122444+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_void_sculpting_service": {
    "id": "the_edge_void_sculpting_service",
    "name": "Ephemeral Form Shaping",
    "description": "The Edge Void Shaping Service, a mystic offering from the Outpost of Edge, allows you to temporarily mold your form into one resistant to the void's malevolent touch. For thirty minutes, your body gains resistance to necrotic damage and becomes less susceptible to entropy—a boon for those who tread near the abyssal realms. However, this service comes at a price: it may leave an indelible mark upon your soul, as if the void itself has etched its signature on you.",
    "category": "services",
    "price": 150000,
    "icon": "🪄",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Resistance to Necrotic Damage",
      "Entropy Resistance"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "void_messenger",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Resistance to Necrotic Damage",
        "rules": "You gain resistance to necrotic damage for thirty minutes. This effect ends if you are no longer within the service's radius or if you take a long rest."
      },
      {
        "title": "Entropy Resistance",
        "rules": "During this time, your body is 50% less susceptible to entropy effects. The effect ends upon expiration of its duration or when you take damage from a source other than a mundane attack."
      }
    ],
    "levelRequirementReason": "This service requires a high level to ensure that the caster and recipient can handle the potential side effects.",
    "vendorReason": "The Outpost of Edge, with its proximity to abyssal realms, offers unique services like this one.",
    "shippingDetail": "The void messenger delivers the service within an hour if you are within a day’s journey from the edge. Otherwise, it takes two days for delivery.",
    "usage": {
      "activation": "A short rest and payment of 75000 XP to the vendor.",
      "duration": "30 minutes",
      "endsWhen": "The effect ends if you take a long rest or when its duration expires.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced against other mythic services, this one requires a significant but not unreasonable cost.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T00:12:12.820203+00:00",
    "aiReviewedAt": "2026-07-25T00:12:12.820203+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_obsidian_wrath": {
    "id": "the_edge_obsidian_wrath",
    "name": "Fragment of Unmaking",
    "description": "The Fragment of Unmaking is a jagged shard of obsidian forged from the heart of a forgotten star. Its surface shimmers with an ethereal glow, and it hums ominously as it pulses with raw chaos energy. Cautionary tales speak of its ability to deal fiery destruction, but those who wield it too recklessly risk summoning spectral horrors that haunt their every step until they are destroyed or the shard itself is shattered.",
    "category": "consumables",
    "price": 260,
    "icon": "💥",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Fiery Destruction",
      "Spectral Haunting"
    ],
    "vendor": "final_shop",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fiery Destruction",
        "rules": "When activated, this fragment deals 1d8+level fire damage to a single target. There is a 20% chance that the target will be frightened for 1 minute as a result of the searing pain."
      },
      {
        "title": "Spectral Haunting",
        "rules": "If used within 30 feet of an unattended object or structure, there is a 5% chance per minute to summon a spectral horror. The horror will persist until it is destroyed by fire-based damage equal to your level."
      }
    ],
    "levelRequirementReason": "Beginners should exercise caution with this volatile fragment.",
    "vendorReason": "The final shop deals in all manner of chaotic relics, including those that challenge the brave and foolhardy.",
    "shippingDetail": "Express delivery ensures swift arrival but is limited to one shipment per week per customer.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after a single use or destroyed by fire-based damage equal to the user's level.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "The price reflects its volatile nature and the risk it poses even when handled with care.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T15:12:02.847822+00:00",
    "aiReviewedAt": "2026-07-25T15:12:02.847822+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_emberclaw_amulet": {
    "id": "animatopia_emberclaw_amulet",
    "name": "Emberclaw Amulet",
    "description": "The Emberclaw Amulet is a hand-crafted trinket forged from dragon fire and a badger's claw, worn by the grumpy boar-folk to ward off the Shadow Jungle's chill. Its core glows faintly with residual heat, offering minor protection against cold temperatures. Wielders gain a +1 bonus to their Strength checks, making them more resilient in physical tasks. The amulet occasionally grants a +2 fire resistance for one hour on the first night of each week.",
    "category": "equipment",
    "price": 260,
    "icon": "🔥",
    "stock": 72,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "fire_resistance",
      "strength_boost"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "giant_beetle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "The wearer gains +2 fire resistance once per week, starting at midnight. This effect lasts for one hour."
      },
      {
        "title": "Strength Boost",
        "rules": "The wearer receives a +1 bonus to Strength checks and saving throws until the start of their next turn after activation."
      }
    ],
    "levelRequirementReason": "Appropriate for adventurers who are just starting their journey.",
    "vendorReason": "The Tribal Trader has a deep connection with the Shadow Jungle and sells items that help travelers survive its harsh conditions.",
    "shippingDetail": "Shipped via giant beetle, delivery takes three days but ensures the amulet is in pristine condition upon arrival.",
    "usage": {
      "activation": "Activates as a bonus action.",
      "duration": "One hour, starting at midnight on the first night of each week.",
      "endsWhen": "The effect ends when the time limit expires or if the wearer takes any damage.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its unique combination of fire resistance and strength boost, this amulet is priced fairly but remains a valuable asset to adventurers.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-25T00:12:20.752145+00:00",
    "aiReviewedAt": "2026-07-25T00:12:20.752145+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_stone_spirit_charm": {
    "id": "animatopia_stone_spirit_charm",
    "name": "Stone Spirit’s Whisper",
    "description": "Hewn from a fragment of an ancient stone spirit that once animated the earth itself, this charm hums with primordial secrets. When held, it opens a brief telepathic link to nearby plant life, allowing you to understand their needs and requests—whether it’s a plea for water or a complaint about overzealous tourists. The charm’s core glows faintly, pulsing in time with the heartbeat of the land itself.",
    "category": "curiosities",
    "price": 4100,
    "icon": "🗿",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "communicate_with_plants",
      "augmented_perception"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Communicate with Plants",
        "rules": "As a bonus action, you can establish a telepathic link with any plant within 30 feet for up to 1 minute. During this time, you can understand the basic needs and requests of plants in your vicinity."
      },
      {
        "title": "Augmented Perception",
        "rules": "While holding the charm, you gain advantage on Wisdom (Perception) checks related to nature and plant life, as well as a +2 bonus to AC against attacks made by plants or creatures with the Plant trait."
      }
    ],
    "levelRequirementReason": "The charm’s power lies in its connection to the ancient earth spirit, which is accessible even to low-level adventurers.",
    "vendorReason": "Beast Bazaar specializes in rare and exotic items that can be found or crafted by those who venture into the wilds of the world.",
    "shippingDetail": "The charm is delivered via a giant snail, ensuring it arrives safely after a week-long journey through the countryside.",
    "usage": {
      "activation": "Bonus action to activate and establish communication with plants.",
      "duration": "1 minute or until the link is broken.",
      "endsWhen": "The duration ends when the effect is no longer needed or interrupted by an attack or spell affecting you.",
      "charges": "Unlimited, as long as it remains intact."
    },
    "priceReason": "Balanced at this price point to reflect its rarity and the unique connection it offers to plant life.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-25T00:12:28.613493+00:00",
    "aiReviewedAt": "2026-07-25T00:12:28.613493+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sticky_sweet_scone": {
    "id": "leclaire_isle_item_sticky_sweet_scone",
    "name": "Sticky Sweet Scone of Sustenance",
    "description": "The Sticky Sweet Scone of Sustenance is a deceptively dense pastry, its golden crust concealing a secret ingredient: pure, concentrated happiness. When consumed, it not only restores 10 hit points but also grants +5 to Charisma checks and saves for the next three rounds. This scone's unique recipe ensures that each bite feels like a burst of joy, making even the most mundane tasks feel like a delightful challenge.",
    "category": "consumables",
    "price": 260,
    "icon": "🍪",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Restores Health",
      "Boosts Charisma"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Health Restored",
        "rules": "Eating this scone restores 10 hit points to the consumer. The effect is instantaneous and does not require any action."
      },
      {
        "title": "Charisma Boost",
        "rules": "+5 bonus to Charisma checks and saves for up to three rounds after consumption, requiring no activation other than eating the scone."
      }
    ],
    "levelRequirementReason": "This scone is designed for beginners and adventurers alike, providing an easy boost without demanding high-level proficiency.",
    "vendorReason": "Dough Depot specializes in baked goods that bring joy to the heart, making their Sticky Sweet Scones a fitting addition to their menu.",
    "shippingDetail": "Delivered fresh by swift carts, these scones are known for their quick delivery ensuring they remain at peak freshness when consumed.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "Three rounds after eating the scone",
      "endsWhen": "The duration ends naturally after three rounds or if the consumer takes any action that requires a Charisma check or save within that time.",
      "charges": "Unlimited; each scone is a single-use item"
    },
    "priceReason": "The Sticky Sweet Scone of Sustenance offers a rare combination of sustenance and charisma enhancement, making it a valuable addition to any adventurer's supplies.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:12:51.141276+00:00",
    "aiReviewedAt": "2026-07-25T00:12:51.141276+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_dwarven_dough_shield": {
    "id": "leclaire_isle_item_dwarven_dough_shield",
    "name": "Dwarven Dough Shield of Resilience",
    "description": "The Dwarven Dough Shield of Resilience is a formidable shield crafted by the legendary Dough Dwarves. This shield's dough is reinforced with iron filings, making it surprisingly sturdy and providing exceptional impact resistance. The cinnamon aroma lingers faintly after each use, a delightful reminder of its origin. It has a 10% chance to deflect incoming projectiles and grants +2 AC, but only when the wielder is not using their Dexterity modifier for AC.",
    "category": "equipment",
    "price": 4100,
    "icon": "🛡️",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Deflect Projectiles",
      "Increased Armor Class"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "rolling_barrel",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Deflect Projectiles",
        "rules": "When a creature makes an attack roll against you, there's a 10% chance the attack is deflected harmlessly. This effect has no save DC and can occur once per short or long rest."
      },
      {
        "title": "Increased Armor Class",
        "rules": "While wielding this shield, you gain +2 to your AC. This benefit only applies when not using your Dexterity modifier for AC, such as when wearing heavy armor like chainmail."
      }
    ],
    "levelRequirementReason": "This shield requires a minimum level of 6 due to its complex construction and unique properties.",
    "vendorReason": "Pastry Palace is known for its expertise in culinary engineering, making it the perfect vendor to sell this doughy masterpiece.",
    "shippingDetail": "Delivered via a rolling barrel that ensures fresh arrival and a delightful aroma upon opening.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous, recharges after a short or long rest.",
      "endsWhen": "Exhausted after one use per short or long rest period.",
      "charges": "Unlimited charges within rest periods."
    },
    "priceReason": "This shield's unique construction and limited availability justify its fair value of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:12:44.268299+00:00",
    "aiReviewedAt": "2026-07-25T00:12:44.268299+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_golden_sugar_shard": {
    "id": "leclaire_isle_item_golden_sugar_shard",
    "name": "Golden Sugar Shard of Illumination",
    "description": "The Golden Sugar Shard of Illumination is a crystalline fragment, once part of a star that fell to earth. Crafted from refined sugar, it pulses with an ethereal glow that banishes shadows and enhances perception. Hold one in your hand to illuminate even the darkest places, revealing hidden details within its light. It’s said that those who possess this shard can see through illusions more clearly than ever before.",
    "category": "curiosities",
    "price": 15000,
    "icon": "✨",
    "stock": 5,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Banishes darkness",
      "Reveals illusions"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "glowing_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Banish Shadows",
        "rules": "When activated, the shard emits a bright light in a 15-foot radius, providing advantage on perception checks within the area. It lasts for 10 minutes and is exhausted after use."
      },
      {
        "title": "Reveal Illusions",
        "rules": "The shard grants you advantage on saving throws against illusions within its illuminated area. This effect ends when the light fades or if you are no longer holding the shard."
      }
    ],
    "levelRequirementReason": "This shard is accessible to all adventurers, making it a fundamental tool for any quest.",
    "vendorReason": "Sweet Supplies is known for its magical curiosities that can be found in the night markets of Le Claire Isle, where this unique shard is a popular trade item.",
    "shippingDetail": "The glowing snail courier delivers these shards swiftly, ensuring they are fresh and potent upon arrival.",
    "usage": {
      "activation": "Use an action to activate the light and reveal illusions.",
      "duration": "10 minutes per use until exhausted.",
      "endsWhen": "After being used or when the light fades.",
      "charges": "Unlimited, as long as it remains unexhausted."
    },
    "priceReason": "Balanced for its utility and rarity among adventurers seeking to explore darkened lands with precision.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T14:27:50.266622+00:00",
    "aiReviewedAt": "2026-07-25T14:27:50.266622+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_lucky_charm_badge": {
    "id": "pokemon_item_lucky_charm_badge",
    "name": "Trainer’s Fortunate Emblem",
    "description": "Forged from a legendary Pokémon's scale and imbued with the spirit of good luck, this Trainer’s Fortunate Emblem gleams with an otherworldly sheen. It not only offers a small chance to avoid taking damage in battle but also significantly boosts your chances of encountering rare wild Pokémon, making it indispensable for trainers seeking fortune and adventure alike. Wario's bets on its durability are as shaky as his own financial dealings.",
    "category": "equipment",
    "price": 4100,
    "icon": "🍀",
    "stock": 38,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Fortunate Avoidance",
      "Rare Encounter Boost"
    ],
    "vendor": "league_store",
    "shippedBy": "delivery_drone",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Fortunate Avoidance",
        "rules": "When you take damage from an attack, there is a 5% chance that the damage is reduced to zero. This effect can only be used once per long rest."
      },
      {
        "title": "Rare Encounter Boost",
        "rules": "You have advantage on all checks related to detecting or encountering rare Pokémon for one hour after activation. The effects of this item last until you complete a short or long rest, and it can only be activated once every 24 hours."
      }
    ],
    "levelRequirementReason": "The badge's magical properties require a solid understanding of Pokémon lore and training techniques.",
    "vendorReason": "The league store specializes in gear for trainers, ensuring that only items that enhance the journey are available.",
    "shippingDetail": "Your lucky emblem is delivered swiftly by a delivery drone, usually arriving within an hour of purchase.",
    "usage": {
      "activation": "Object interaction to activate and use once per long rest.",
      "duration": "One hour or until you complete a short or long rest.",
      "endsWhen": "After one hour or upon completion of a short or long rest, whichever comes first.",
      "charges": "Unlimited charges; however, it can only be activated once every 24 hours."
    },
    "priceReason": "The balance between the item's rarity and its two useful but not overpowered effects justifies this price in experience points.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:13:19.641532+00:00",
    "aiReviewedAt": "2026-07-25T00:13:19.641532+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_potion_healing_aura": {
    "id": "pokemon_item_potion_healing_aura",
    "name": "Spectral Recovery Elixir",
    "description": "The Spectral Recovery Elixir is a shimmering, ethereal potion that glows faintly with an otherworldly light. When consumed, it not only heals its drinker at a steady rate of 5 Hit Points per second but also weaves a protective aura around them, granting temporary resistance to status effects such as poison or charm. This elixir is particularly potent when combined with restorative practices like meditation or sleep, making it an indispensable ally for weary adventurers.",
    "category": "consumables",
    "price": 15000,
    "icon": "💧",
    "stock": 91,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "heal_hp_over_time",
      "resist_status_effects"
    ],
    "vendor": "safari_shop",
    "shippedBy": "giant_parasect",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heal HP Over Time",
        "rules": "The Spectral Recovery Elixir heals the drinker at a rate of 5 Hit Points per second for up to one minute after consumption. This effect ends if the drinker takes damage or falls unconscious."
      },
      {
        "title": "Resist Status Effects",
        "rules": "For the duration of the elixir's healing effect, the drinker gains temporary resistance to all status effects. They can make a saving throw (DC 15) when exposed to such effects; on success, they are unaffected."
      }
    ],
    "levelRequirementReason": "The Spectral Recovery Elixir is designed for all adventurers, providing immediate benefits regardless of experience level.",
    "vendorReason": "Safari Shop specializes in rare and exotic items that can be found during expeditions, making the elixir a natural fit.",
    "shippingDetail": "Delivered by giant parasect, who transport the elixirs with care to ensure their potency remains intact.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "Up to one minute after consumption; ends if the drinker takes damage or falls unconscious",
      "endsWhen": "The drinker takes damage, falls unconscious, or the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The Spectral Recovery Elixir is priced at 1000 XP, reflecting its potent healing and protective properties.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T00:13:37.606567+00:00",
    "aiReviewedAt": "2026-07-25T00:13:37.606567+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_echoing_shard": {
    "id": "doughnut_hole_echoing_shard",
    "name": "Resonance Shard",
    "description": "The Resonance Shard is a jagged fragment of the Doughnut Hole’s core, its fractured surface shimmering with an unsettling, pulsating light. When held, it allows you to perceive echoes of past events from within the void—often just the cacophony of screaming and misplaced pastries, but occasionally revealing cryptic clues that hint at greater mysteries lurking in the void's depths. This shard is said to have been forged by the very forces that shaped the Doughnut Hole itself, making it a relic both dangerous and invaluable to those who dare to wield its power.",
    "category": "curiosities",
    "price": 4100,
    "icon": "🔮",
    "stock": 23,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "cryptic echo perception",
      "void creature attraction"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Phantom Parceler",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cryptic Echo Perception",
        "rules": "When activated as an action, the Resonance Shard reveals echoes of past events within a 10-foot radius. These echoes are mostly nonsensical and unsettling, but occasionally provide cryptic clues about the void's mysteries. The effect lasts for 1 minute or until disrupted by damage. There is a 25% chance that any given echo will reveal useful information instead of just noise."
      },
      {
        "title": "Void Creature Attraction",
        "rules": "The Resonance Shard has a minor gravitational pull, attracting small void creatures within a 30-foot radius for the duration of its cryptic echo perception effect. These creatures are typically harmless but can be used as distractions or allies if the user is skilled enough."
      }
    ],
    "levelRequirementReason": "The Resonance Shard's raw power and potential danger necessitate a minimum level requirement.",
    "vendorReason": "Void Vendor specializes in items related to the void, making it an appropriate vendor for such a relic.",
    "shippingDetail": "The Phantom Parceler ensures discreet and timely delivery of the Resonance Shard.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until disrupted by damage",
      "endsWhen": "Disrupted by damage, or at the end of its duration",
      "charges": "Unlimited"
    },
    "priceReason": "The Resonance Shard's rarity and unique abilities justify a price of 1000 XP.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T00:13:54.668552+00:00",
    "aiReviewedAt": "2026-07-25T00:13:54.668552+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_frosting_potion": {
    "id": "leclaire_isle_item_frosting_potion",
    "name": "Shimmering Sweet Surge",
    "description": "Shimmering Sweet Surge is a frothy, crystalline concoction that bubbles with sugary enchantment. When consumed, it grants the drinker an ethereal boost, doubling their speed for two turns and granting them +2 to Dexterity checks. The aroma of pure sugar lingers, drawing bees and curious creatures near, compelling them to hover in close proximity for a moment. Beware, as this potion's allure is both a boon and a bane.",
    "category": "consumables",
    "price": 15000,
    "icon": "🍬",
    "stock": 18,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Speed Boost",
      "Enhanced Agility"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "delivery_beehive",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "The drinker’s movement speed doubles for two turns. This effect has no save DC and cannot be resisted."
      },
      {
        "title": "Enhanced Agility",
        "rules": "The drinker gains +2 to Dexterity checks until the end of their next turn after consuming this potion."
      }
    ],
    "levelRequirementReason": "This potion requires a character of at least level 5 to handle its potent sugar enchantment without adverse effects.",
    "vendorReason": "Sweet Supplies specializes in all things sugary and enchanted, making it the perfect vendor for Shimmering Sweet Surge.",
    "shippingDetail": "The delivery is made by a hive of industrious bees, who ensure that the potion arrives fresh and intact.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "Two turns",
      "endsWhen": "At the end of two turns or if the drinker takes any harmful action",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rarity and potency of this enchanted potion, which is both a boon and a potential hazard.",
    "priceOriginal": 2300,
    "priceReviewedAt": "2026-07-25T00:14:20.725200+00:00",
    "aiReviewedAt": "2026-07-25T00:14:20.725200+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_engineered_grappling_hook": {
    "id": "midlands_item_engineered_grappling_hook",
    "name": "Cog & Chain Grapple",
    "description": "The Cog & Chain Grapple, crafted by the Fractured Forge, is a marvel of industrial ingenuity and brute force. This grappling hook combines sturdy steel cables with repurposed cogs and gears, making it both a reliable tool for scaling walls and an unpredictable weapon that can pull foes into your grasp. Its origins lie in the forge's experimental armory, where discarded parts were given new life through relentless tinkering. Despite its rugged construction, the hook carries a 10% chance of malfunctioning per use, but when it works, you're guaranteed to be at the top—or at least close enough for a decisive strike.",
    "category": "equipment",
    "price": 4100,
    "icon": "🔗",
    "stock": 34,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Grapple onto sturdy surfaces with ease.",
      "Increase climbing speed by 50%"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "hawk_delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Grapple",
        "rules": "As an action, you can use the Cog & Chain Grapple to grapple a surface within reach. You have advantage on Strength (Athletics) checks to maintain the grapple and can pull yourself up or over with ease. This effect ends when you no longer have line of effect between you and the grapple point."
      },
      {
        "title": "Climbing Speed",
        "rules": "While grappling, your climbing speed increases by 50%. You can only use this effect if you are not pulling an opponent or using it as a weapon. This benefit lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This item requires proficiency in Athletics and is intended for characters who have already demonstrated their climbing prowess.",
    "vendorReason": "The Fractured Forge has a reputation for crafting unique tools that push the boundaries of what's possible, making it only fitting that they would create such an unconventional grappling hook.",
    "shippingDetail": "Ships via Hawk Delivery, known for its swift and reliable service. The item will arrive within one week of purchase.",
    "usage": {
      "activation": "Action or bonus action (to grapple; climbing speed is a passive effect).",
      "duration": "Instantaneous (grappling); lasts until the start of your next turn (climbing speed).",
      "endsWhen": "The grappling ends when you no longer have line of effect, or it malfunctions.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item is considered rare due to its unique construction and the specialized materials used in its crafting.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:14:16.218483+00:00",
    "aiReviewedAt": "2026-07-25T00:14:16.218483+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_whispering_scrolls": {
    "id": "midlands_item_whispering_scrolls",
    "name": "Fragments of the Silent Pact",
    "description": "The Fragments of the Silent Pact are brittle parchment scrolls recovered from a noble’s forgotten library. Their ink whispers secrets only those with keen senses can discern, offering clues to hidden treasures or deadly traps. Each scroll provides a cryptic hint that requires careful interpretation; misinterpretation might doom you to a ghostly encounter. These fragments also grant +1 to Investigation checks for uncovering secret information and include a 50% chance of revealing a concealed objective.",
    "category": "curiosities",
    "price": 990,
    "icon": "📜",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Clue Revelation",
      "Investigation Boost"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Clue Revelation",
        "rules": "The user rolls a d6. On a roll of 1-3, they gain a clue about a hidden objective with a 50% success chance; on a roll of 4-6, the scroll crumbles into dust."
      },
      {
        "title": "Investigation Boost",
        "rules": "When used, this scroll grants the user advantage on one Investigation check to search for clues. This effect is usable once per long rest."
      }
    ],
    "levelRequirementReason": "These scrolls are accessible to lower-level characters who might benefit from their ability to uncover hidden secrets.",
    "vendorReason": "The empire exchange specializes in rare and arcane items, including the enigmatic Fragments of the Silent Pact.",
    "shippingDetail": "Delivered by messenger hawk within a week under clear skies; delays may occur during inclement weather.",
    "usage": {
      "activation": "Read as an action",
      "duration": "Instantaneous effect",
      "endsWhen": "The scroll crumbles into dust after use or when misinterpreted, revealing no secret.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Scrolls are uncommon and valuable due to their unpredictable nature and the risk they pose.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:14:12.643347+00:00",
    "aiReviewedAt": "2026-07-25T00:14:12.643347+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_elixir_of_boldness": {
    "id": "midlands_item_elixir_of_boldness",
    "name": "Lionheart's Brew",
    "description": "Lionheart's Brew is a shimmering crimson elixir that tastes like a tart mix of fermented berries. It's said to be crafted from the courage of lions, imbued by the alchemist at the Empire Exchange. Drinking it grants you a surge of bravery and confidence for 6 turns, bolstering your Strength and making fear effects less likely to shake you. The only risk? You might just challenge the Emperor to a staring contest—though we suggest you avoid that.",
    "category": "consumables",
    "price": 4200,
    "icon": "🧪",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Strength Boost",
      "Fear Resistance"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "Consume Lionheart's Brew as an action to gain +5 to Strength for 6 turns. This effect ends if you are incapacitated or the duration expires."
      },
      {
        "title": "Fear Resistance",
        "rules": "While under the effects of Lionheart's Brew, you have resistance to fear and similar magical effects for 4 turns. This immunity is lost if you fall unconscious or the duration runs out."
      }
    ],
    "levelRequirementReason": "The courage to drink this brew comes with a small risk; even seasoned veterans might tremble at first.",
    "vendorReason": "As one of the Empire's leading alchemical shops, they offer Lionheart's Brew for those who seek a taste of lion-hearted bravery.",
    "shippingDetail": "Delivered by swift hawk courier, ensuring you get your dose of courage before it expires.",
    "usage": {
      "activation": "Action",
      "duration": "6 turns",
      "endsWhen": "Incapacitation or duration expiration",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from the bravery of lions, this elixir is a rare and potent potion that can be consumed at any time for a significant boost in courage.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:14:24.624117+00:00",
    "aiReviewedAt": "2026-07-25T00:14:24.624117+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_amulet_of_broken_trust": {
    "id": "midlands_item_amulet_of_broken_trust",
    "name": "The Shadow's Embrace",
    "description": "The Shadow's Embrace gleams with a malevolent, pulsating darkness that seems to seep from its very core—a remnant of an oath shattered in a noble’s tragic fall. This amulet whispers secrets and doubts into the minds of those who wear it, subtly sowing discord among their foes. Yet, as the wearer becomes ensnared by its influence, they too may find themselves questioning their own loyalties and motives.",
    "category": "curiosities",
    "price": 150000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Sow Discord",
      "Confusion Aura"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "golem_carrier",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Sow Discord",
        "rules": "When worn, the amulet grants a +2 bonus to Deception checks. However, after one hour of continuous use, the wearer must succeed on a DC 15 Wisdom saving throw or be charmed by an adjacent enemy for 1 minute."
      },
      {
        "title": "Confusion Aura",
        "rules": "The amulet creates a 10-foot radius aura centered on you. Any creature that starts its turn within the area must succeed on a DC 15 Wisdom saving throw or be confused until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The amulet's dark influence requires a higher level to resist its mental corruption.",
    "vendorReason": "Forged from fragments of lost nobility, the shop offers this unique artifact.",
    "shippingDetail": "Delivered by a reliable golem, ensuring safe arrival.",
    "usage": {
      "activation": "Passive effect; requires no action to activate.",
      "duration": "Until the wearer succeeds on a Wisdom save or until the amulet is removed.",
      "endsWhen": "The wearer successfully saves against the charm or confusion effects.",
      "charges": "Unlimited, but limited by daily use."
    },
    "priceReason": "The balance of power and the mythic rarity justify a price of 1000 XP.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-25T00:14:47.385225+00:00",
    "aiReviewedAt": "2026-07-25T00:14:47.385225+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_voidshard": {
    "id": "the_edge_voidshard",
    "name": "Echoes of the Abyss",
    "description": "Echoes of the Abyss is a jagged shard that pulses with an unsettling energy, echoing the screams of ancient horrors from beyond The Edge. Its cold touch sends shivers down your spine, and when held, it grants you fleeting glimpses into realms where fear is a constant companion. This relic increases critical hit chance by 5% and has a 10% chance to instill 'fear' in foes, causing them to flee or hesitate for the duration of combat.",
    "category": "equipment",
    "price": 4200,
    "icon": "🔮",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases critical hit chance",
      "instills 'fear'"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Critical Boost",
        "rules": "While holding Echoes of the Abyss, you have a +5% chance to score a critical hit. This effect lasts until the start of your next turn."
      },
      {
        "title": "Fear Aura",
        "rules": "Once per short or long rest, you can hold the shard and release an aura that instills 'fear' in all creatures within 10 feet of you for 1 minute. The DC to save against this effect is equal to 8 + your Wisdom modifier."
      }
    ],
    "levelRequirementReason": "Echoes of the Abyss's influence on critical hits and fear requires a character with at least 6 levels to handle its power without becoming overwhelmed.",
    "vendorReason": "The abyss trader is known for dealing in artifacts from realms beyond, making Echoes of the Abyss a natural addition to their inventory.",
    "shippingDetail": "Ships via the dimensional rift, which can cause slight disorientation upon arrival at your location.",
    "usage": {
      "activation": "Object Interaction (held)",
      "duration": "Until start of next turn or until discarded",
      "endsWhen": "Starts of your next turn, discarding it, or when you take a short rest",
      "charges": "Unlimited, but can only be used once per long or short rest"
    },
    "priceReason": "The shard's rarity and the unique effects it provides justify its moderate price of 1000 XP.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T00:14:34.910495+00:00",
    "aiReviewedAt": "2026-07-25T00:14:34.910495+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronal_orb": {
    "id": "the_edge_chronal_orb",
    "name": "Temporal Static",
    "description": "The Temporal Static is a swirling orb of fractured time, its surface etched with lines that shimmer like liquid light. Crafted from ancient Chronalite found in the Timeless Wastes, it emits a faint hum that can accelerate or decelerate movement by 20% for three seconds. With each use, there's a 5% chance to rewind time slightly after taking damage, effectively reversing the immediate past. This curious trinket seems to resist the flow of reality and could unravel you entirely if used too much.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Time Acceleration",
      "Temporal Rewind"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Winged Beetle Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time Acceleration",
        "rules": "When activated as a bonus action, this trinket temporarily increases your movement speed by 20% for three seconds. It has no save DC and can be used once per short rest."
      },
      {
        "title": "Temporal Rewind",
        "rules": "There's a 5% chance to rewind time slightly after taking damage, effectively reversing the immediate past. This effect is instantaneous but does not allow you to avoid damage or its consequences. It has no save DC and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "Beginners often find this trinket useful for navigating tricky combat situations.",
    "vendorReason": "Edge Outpost caters to adventurers seeking unique and functional tools from the far reaches of time and space.",
    "shippingDetail": "Delivered by swift Winged Beetles, the Temporal Static arrives intact, though its power may be slightly diminished if exposed to extreme temporal fluxes.",
    "usage": {
      "activation": "Bonus action",
      "duration": "3 seconds",
      "endsWhen": "The duration ends or you take damage",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare Chronalite, this trinket offers a blend of utility and risk that makes it invaluable to adventurers.",
    "priceOriginal": 950,
    "priceReviewedAt": "2026-07-25T00:14:54.523453+00:00",
    "aiReviewedAt": "2026-07-25T00:14:54.523453+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_void_locket": {
    "id": "the_edge_void_locket",
    "name": "Lost Memories of the Deep",
    "description": "The tarnished locket of 'Lost Memories of the Deep' is a pocket of forgotten time, its surface etched with the engravings of bygone eras. Opening it releases spectral fragments that shimmer like phosphorescent stars, evoking lost memories and unspoken tales. Those who gaze into its depths risk being overwhelmed by the weight of history, granting them a fleeting boost in intelligence but also tempting the minds of their foes with an unsettling confusion.",
    "category": "curiosities",
    "price": 260,
    "icon": "🖤",
    "stock": 75,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "intellect boost",
      "confusion charm"
    ],
    "vendor": "final_shop",
    "shippedBy": "snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Intellect Boost",
        "rules": "The wearer gains +1 to Intelligence checks and saving throws. This effect lasts for 1 hour, but it can be re-activated once per long rest."
      },
      {
        "title": "Confusion Charm",
        "rules": "Once per short or long rest, the wearer can cast Confusion (save DC 13) on a creature they can see within 60 feet. The save ends the effect if successful."
      }
    ],
    "levelRequirementReason": "The item's power is balanced to ensure it enhances but does not overwhelm characters of lower levels.",
    "vendorReason": "Final Shop stocks a variety of curiosities that offer unique and often unsettling insights, making the 'Lost Memories' an excellent addition to their inventory.",
    "shippingDetail": "Due to its fragile nature, this item is delivered by snail post, which adds one additional day to delivery time.",
    "usage": {
      "activation": "Active use requires opening the locket and concentrating for a moment. The intellect boost activates passively while worn.",
      "duration": "The intellect boost lasts until the next long rest, and confusion effects last up to an hour before requiring another rest.",
      "endsWhen": "The effect ends when its duration expires or if the wearer is incapacitated.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The item's price reflects its unique ability to enhance intelligence and charm foes, balancing its power with a fair cost.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T00:14:42.114080+00:00",
    "aiReviewedAt": "2026-07-25T00:14:42.114080+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_stirring_saddlebag": {
    "id": "equestria_item_stirring_saddlebag",
    "name": "Stirring Saddlebag of Culinary Chaos",
    "description": "The Stirring Saddlebag of Culinary Chaos hums with an enigmatic energy, its leather worn smooth by countless journeys. When opened, it spits forth a concoction that could either heal a grievous wound or leave you writhing in agony. The unpredictable mixtures are the result of an ancient enchantment, said to have been cast by a mischievous fae during a particularly stormy night in Equestria. Prepare for flavor explosions and potential indigestion!",
    "category": "consumables",
    "price": 270,
    "icon": "🥣",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Healing Potions",
      "Poisonous Concoction"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Stable Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Potion",
        "rules": "When opened, there is a 20% chance to create a healing potion that heals the user for 1d4 + Constitution modifier hit points. This effect lasts until used."
      },
      {
        "title": "Poisonous Concoction",
        "rules": "There is also a 10% chance of creating a poisonous concoction that imposes the Poisoned condition on all creatures within 5 feet of the user for 1 minute, with a DC 12 Constitution saving throw to resist. The effect ends early if the user takes damage."
      }
    ],
    "levelRequirementReason": "This saddlebag is suitable for beginners and seasoned travelers alike, making it accessible to all adventurers.",
    "vendorReason": "The friendly merchants at Ponyville Market are always eager to stock unique items from around Equestria.",
    "shippingDetail": "Shipped via Stable Delivery, known for its reliable and swift service within the region.",
    "usage": {
      "activation": "Activates on opening or when a creature within 10 feet of it interacts with it.",
      "duration": "Instantaneous effect; lasts until used.",
      "endsWhen": "The effect ends if the user takes damage or successfully resists the Poisoned condition.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The saddlebag is priced at 1000 XP due to its unpredictable nature and the ancient enchantment that imbues it with powerful effects.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:15:25.533515+00:00",
    "aiReviewedAt": "2026-07-25T00:15:25.533515+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_ironclad_sentinel": {
    "id": "the_edge_ironclad_sentinel",
    "name": "Ironclad Sentinel of the Watchers",
    "description": "The Ironclad Sentinel of the Watchers is a diminutive, clockwork guardian crafted from salvaged metal and enchanted with ancient runes. Its gears hum with arcane energy as it scans its surroundings, its blade-arms rotating in readiness to slice through any living threat that dares cross its path. This relic is perfect for patrolling dark corridors or distracting monstrous foes; once triggered, its blades whirl faster than the eye can follow, dealing piercing damage and occasionally stunning attackers.",
    "category": "equipment",
    "price": 4200,
    "icon": "🤖",
    "stock": 15,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Piercing Blade Barrage",
      "Stun Chance"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "automated_drone",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Piercing Blade Barrage",
        "rules": "The Ironclad Sentinel strikes with a barrage of spinning blades, dealing 2d6 piercing damage on hit. If the attack hits an enemy within range (5 feet), there is a 10% chance to stun them for 1 round."
      },
      {
        "title": "Stun Chance",
        "rules": "There's a 10% chance that any creature struck by the Sentinel’s blades will be stunned for 1 round. This effect has no save DC and can only occur once per target per day."
      }
    ],
    "levelRequirementReason": "This relic requires at least level 6 to operate effectively, as it channels complex arcane energies.",
    "vendorReason": "Edge Outpost specializes in salvaged and enchanted items from forgotten realms, making the Ironclad Sentinel a perfect fit for their inventory.",
    "shippingDetail": "The automated drone delivers the Sentinel with extra care, ensuring it arrives undamaged and fully functional.",
    "usage": {
      "activation": "Action: The Sentinel must be activated manually by a creature within reach (5 feet).",
      "duration": "Instantaneous; once triggered, its blades whirl for 1 minute before stopping automatically.",
      "endsWhen": "The activation ends when the effect is exhausted or if the Sentinel takes damage.",
      "charges": "Unlimited"
    },
    "priceReason": "This relic’s balanced price reflects its complexity and utility as a tactical tool for adventurers of all levels.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T14:27:56.520093+00:00",
    "aiReviewedAt": "2026-07-25T14:27:56.520093+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronal_fragments_faction": {
    "id": "the_edge_chronal_fragments_faction",
    "name": "Chronal Fragments - Order of the Shifting Sands",
    "description": "The Chronal Fragments shimmer faintly, each a fractured fragment from an ancient attempt to stabilize temporal anomalies. Crafted by the Order of the Shifting Sands, these relics allow their wielder to manipulate time in minor ways—correcting past mistakes or buying precious seconds for escape. When combined, they can reverse time by 3 seconds with a 10% chance on any action, and slow enemy movement speed by 20% for 4 seconds upon activation.",
    "category": "faction",
    "price": 270,
    "icon": "⏳",
    "stock": 35,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Temporal Correction",
      "Enemy Speed Slowdown"
    ],
    "vendor": "final_shop",
    "shippedBy": "swift_raven_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Correction",
        "rules": "When activated as a bonus action, there is a 10% chance to rewind time by exactly 3 seconds. This effect can be used once per long rest."
      },
      {
        "title": "Enemy Speed Slowdown",
        "rules": "Activating this ability as an action causes all enemy creatures within 5 feet of the user to move at a reduced speed of 20% for 4 seconds. This effect has no save DC and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "These fragments are accessible to lower-level characters as they provide useful, albeit limited, time manipulation abilities.",
    "vendorReason": "The final shop deals primarily in relics and artifacts of the Order of the Shifting Sands, making these Chronal Fragments a natural addition to their inventory.",
    "shippingDetail": "Shipped by swift raven messenger, delivering within three days if purchased before sunset.",
    "usage": {
      "activation": "Bonus action for Temporal Correction; action for Enemy Speed Slowdown",
      "duration": "Instantaneous effect for Temporal Correction; lasts 4 seconds for Enemy Speed Slowdown",
      "endsWhen": "Used or expended on each activation, resets at the start of the next long rest for Temporal Correction; ends when duration expires or user moves more than 20 feet away from enemies affected by Enemy Speed Slowdown.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects the unique and valuable abilities provided, along with the Order of the Shifting Sands' reputation.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T00:15:36.071381+00:00",
    "aiReviewedAt": "2026-07-25T00:15:36.071381+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_sparkling_shroom": {
    "id": "mushroom_kingdom_item_sparkling_shroom",
    "name": "Sparkling Shroom",
    "description": "The Sparkling Shroom pulses with an ethereal glow, its cap a vibrant shade of emerald green. This bioluminescent fungus is said to have been gifted by the Mushroom King himself, whose kingdom lies beneath the Toad Town streets. Consuming one grants you a burst of speed and temporary resistance to poison, perfect for dodging those pesky Goombas. However, be cautious—too many can cause uncontrollable bounces that might leave you flailing in confusion!",
    "category": "consumables",
    "price": 270,
    "icon": "🍄",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_speed_3",
      "poison_resistance_10"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Speed +3 (Instant)",
        "rules": "As a bonus action, consuming the Sparkling Shroom grants you a +3 bonus to your movement speed for 1 minute. This effect can be used only once per long rest."
      },
      {
        "title": "Poison Resistance +10 (1 Hour)",
        "rules": "For 1 hour after consumption, you gain resistance to poison damage. This effect ends if you take any poison damage or complete a short rest."
      }
    ],
    "levelRequirementReason": "Beginners can handle the initial burst of speed and minor magical effects without risk.",
    "vendorReason": "Toad Town Market specializes in items from the Mushroom Kingdom, including rare bioluminescent fungi like the Sparkling Shroom.",
    "shippingDetail": "The mushrooms are delivered fresh via underground tunnels, ensuring their magical properties remain intact.",
    "usage": {
      "activation": "Bonus action to consume and activate the effect.",
      "duration": "1 minute for speed boost; 1 hour for poison resistance.",
      "endsWhen": "Effect ends on completion of a short rest or taking poison damage.",
      "charges": "Unlimited, but only one use per long rest."
    },
    "priceReason": "The Sparkling Shroom's rarity and the unique magical properties it provides justify its higher price.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:15:54.829527+00:00",
    "aiReviewedAt": "2026-07-25T00:15:54.829527+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_clawstrike_amulet": {
    "id": "animatopia_clawstrike_amulet",
    "name": "Clawstrike Amulet",
    "description": "The Clawstrike Amulet, forged from the fang of a Razorclaw Boar known for its ferocity in the wilds of Animatopia, radiates primal energy that sharpens your reflexes and fills you with the roar of the predator. Wear it to gain uncanny agility in combat and unleash a fearsome roar that intimidates foes within reach, making them flinch in terror. This amulet is not just an adornment; it's a symbol of survival from the heart of the wild.",
    "category": "equipment",
    "price": 4200,
    "icon": "🐾",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Uncanny Reflexes",
      "Intimidating Roar"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_parrot",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Uncanny Reflexes",
        "rules": "As a bonus action, you can use this amulet to grant yourself advantage on Dexterity saving throws and attacks made before the start of your next turn. This effect lasts for one minute or until you lose consciousness."
      },
      {
        "title": "Intimidating Roar",
        "rules": "You can roar as a bonus action, forcing all creatures within 10 feet to make a DC 13 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns and is exempt from this effect on your turn."
      }
    ],
    "levelRequirementReason": "The amulet requires significant focus to harness the primal energy it channels.",
    "vendorReason": "The Tribal Trader has a deep connection with the wilds and can source rare fang carvings like this.",
    "shippingDetail": "Delivered swiftly by Winged Parrots, ensuring you receive your amulet in pristine condition.",
    "usage": {
      "activation": "Bonus action (Uncanny Reflexes), Reaction (Intimidating Roar)",
      "duration": "One minute (Uncanny Reflexes); 1 minute or until you lose consciousness (Intimidating Roar)",
      "endsWhen": "Ends when the duration expires, lost consciousness, or you are incapacitated.",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's rarity and the rare materials used justify its price.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:16:53.694172+00:00",
    "aiReviewedAt": "2026-07-25T00:16:53.694172+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_whispering_stone": {
    "id": "animatopia_whispering_stone",
    "name": "Whispering Stone of the Ancients",
    "description": "The Whispering Stone of the Ancients is a smooth, grey stone that seems to murmur forgotten secrets. Held close, it releases soft whispers of Animatopia’s ancient past, offering glimpses into lost lore and forgotten wisdom. However, some voices are too ancient to be fully understood – they may leave the listener with more questions than answers. This relic is said to have been crafted by the first animatons themselves, their essence preserved in its very core.",
    "category": "curiosities",
    "price": 150000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "ancient_revelation",
      "wisdom_boost"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant beetle",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Ancient Revelation",
        "rules": "As a bonus action, you can focus on the stone for 1 minute. During this time, you gain advantage on Intelligence (History) checks related to Animatopia’s ancient history and can attempt one such check each day as part of your daily preparation. This effect ends if you leave the area where the stone whispers or if it is no longer held."
      },
      {
        "title": "Wisdom Boost",
        "rules": "While holding the stone, you gain a +2 bonus to Wisdom saving throws and to all Intelligence checks related to animatons for 1 hour. This benefit ends when you stop holding the stone or if it is no longer in your possession."
      }
    ],
    "levelRequirementReason": "The complexity of understanding ancient Animatopia lore requires a certain maturity and experience.",
    "vendorReason": "The Beast Bazaar has exclusive access to rare relics like the Whispering Stone, cherished by scholars and historians alike.",
    "shippingDetail": "Delivered by a giant beetle courier, ensuring safe arrival with a guaranteed overnight delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until the stone is no longer held",
      "endsWhen": "Leaving the area where the stone whispers or when you stop holding it",
      "charges": "Unlimited"
    },
    "priceReason": "The stone’s rarity and the profound knowledge it provides justify this moderate price.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T00:15:52.396931+00:00",
    "aiReviewedAt": "2026-07-25T00:15:52.396931+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_echoing_charm": {
    "id": "almost_edge_item_echoing_charm",
    "name": "Echoing Charm of the Lost Steps",
    "description": "The Echoing Charm of the Lost Steps is a small, intricately carved pendant made from lost-edge stone. Crafted by the Edge Wanderers, it hums with the echoes of forgotten paths and uncharted territories. Wearing this charm momentarily opens you to the hidden geometry of reality, allowing you to glimpse alternative routes and potentially avoid deadly traps or missteps… though the charm might also guide you into a new danger if you're not careful.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗣️",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "hidden_path_perception",
      "misstep_risk"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "wind_currents",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Path Perception",
        "rules": "As a bonus action, you can activate the charm to briefly perceive hidden or overlooked paths within a 30-foot radius. This effect lasts for 1 minute and has no save DC required."
      },
      {
        "title": "Misstep Risk",
        "rules": "While wearing the charm, there's a 5% chance per short rest that you accidentally step into an unseen hazard or misstep, resulting in falling damage if not prevented by your reflexes. This effect ends when the charm is removed."
      }
    ],
    "levelRequirementReason": "The charm requires a lower level to ensure it can be accessible for players who are still learning and exploring.",
    "vendorReason": "Edge Wanderers have intimate knowledge of lost paths and the hidden geometry of reality, making them the perfect stewards of this artifact.",
    "shippingDetail": "The charm is delivered by wind currents, arriving in a whirlwind that leaves the pendant glowing faintly with residual echoes for a few moments before it settles.",
    "usage": {
      "activation": "Bonus action to activate and perceive hidden paths.",
      "duration": "1 minute while active.",
      "endsWhen": "The charm is removed or its duration expires.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "The price reflects the uncommon rarity, unique crafting techniques, and the inherent risk of using such a powerful but unpredictable item.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:16:09.163407+00:00",
    "aiReviewedAt": "2026-07-25T00:16:09.163407+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_liminal_token": {
    "id": "almost_edge_item_liminal_token",
    "name": "Token of the Liminal Trader",
    "description": "The Token of the Liminal Trader is a polished obsidian token with an etched surface that shifts between cryptic runes and fleeting shadows. Held in your hand, it feels both warm and cold at once, as if it's alive with forgotten lore. This token grants a +1 bonus to any single purchase from the Liminal Trader but comes with a risk: there’s a 5% chance (DC 12) that accepting their wares will cause you to forget one minor detail of your recent past upon each use.",
    "category": "faction",
    "price": 270,
    "icon": "🗝️",
    "stock": 18,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "discount_on_purchase",
      "chance_to_forget_detail"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "silent_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Discount on Purchase",
        "rules": "When used, the token grants a +1 bonus to the total price of any single purchase from the Liminal Trader. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Chance to Forget Detail",
        "rules": "There is a 5% chance (DC 12) that accepting goods from the Liminal Trader will cause you to forget one minor detail of your recent past upon each use. This effect requires no activation and applies immediately after using the token."
      }
    ],
    "levelRequirementReason": "This token is designed for beginners, as it offers a subtle advantage without requiring high-level expertise.",
    "vendorReason": "The Liminal Trader values any customer who seeks to make their purchases more cost-effective and mysterious.",
    "shippingDetail": "Delivered under the cover of night, ensuring your token arrives without drawing undue attention.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the token's unique ability to offer a minor advantage in trading with the Liminal Trader, as well as the risk it poses.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:16:12.753413+00:00",
    "aiReviewedAt": "2026-07-25T00:16:12.753413+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_graviton_gauntlet": {
    "id": "doughnut_hole_graviton_gauntlet",
    "name": "Gravitational Grip",
    "description": "The Gravitational Grip gauntlet is crafted from a rare alloy that captures minuscule particles of graviton energy. This relic allows you to subtly influence gravity, causing nearby objects to be drawn towards your hand with a gentle tug. It's perfect for securing elusive items without drawing unwanted attention. The gauntlet also grants a slight resilience against falls, reducing the impact by half, as if cushioned by a soft, invisible barrier.",
    "category": "equipment",
    "price": 4200,
    "icon": "🦾",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Graviton Tug",
      "Fall Cushion"
    ],
    "vendor": "void_vendor",
    "shippedBy": "warp_tunnel",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Graviton Tug",
        "rules": "As an action, you can extend your hand and draw nearby objects towards it with a gravitational tug. The range is up to 10 feet. This effect has no save DC but requires concentration for 1 minute, after which the gauntlet must rest for 24 hours before use again."
      },
      {
        "title": "Fall Cushion",
        "rules": "When you fall, this gauntlet reduces the damage by half (rounded down). It functions as a permanent ability and does not require an action to activate. The reduction is effective once per short or long rest."
      }
    ],
    "levelRequirementReason": "The intricate graviton manipulation requires a fair amount of discipline, which is best achieved at level 6.",
    "vendorReason": "Void Vendor specializes in rare and powerful artifacts from other planes, making the Gravitational Grip an ideal addition to their stock.",
    "shippingDetail": "The gauntlet is carefully packaged for warp tunnel shipment, ensuring it arrives undamaged and ready for use.",
    "usage": {
      "activation": "Action or Reaction (for Graviton Tug); Passive (Fall Cushion)",
      "duration": "Concentration up to 1 minute (Graviton Tug); Permanent (Fall Cushion)",
      "endsWhen": "Ends after concentration is maintained for a minute and requires 24 hours of rest; Ends with the gauntlet's use, as long as it has not been used during the rest period.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The gauntlet’s rarity and unique graviton manipulation abilities justify a price of 1000 XP.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T00:16:17.034690+00:00",
    "aiReviewedAt": "2026-07-25T00:16:17.034690+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_frostfang_dagger": {
    "id": "earth_land_item_frostfang_dagger",
    "name": "Frostfang Dagger",
    "description": "The Frostfang Dagger seems to have been forged in the heart of an ice dragon's breath, its blade shimmering with a cold, crystalline sheen that chills the very air around it. The dagger's edge is razor-sharp and deadly, dealing piercing damage to foes. Its frosty essence can also chill your enemies, causing them to shiver uncontrollably for a brief moment. Wario says it’s 'surprisingly pointy,' and you wouldn't want to use it as anything other than a weapon of precision.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥶",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Piercing Damage",
      "Frost Chill"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "dragon_cart",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Piercing Damage",
        "rules": "When you make a melee attack with the Frostfang Dagger, deal 1d6 piercing damage. This effect is limited to once per turn."
      },
      {
        "title": "Frost Chill",
        "rules": "At the start of each of your turns, there's a 5% chance that an enemy within 5 feet of you is affected by frostbite, as though it failed a DC 12 Constitution saving throw. This effect ends when the target is knocked unconscious or the save is successful."
      }
    ],
    "levelRequirementReason": "This weapon requires a certain level to wield effectively due to its icy properties and precision-based nature.",
    "vendorReason": "The Guild Quartermaster stocks unique and rare weapons suitable for adventurers, including the Frostfang Dagger.",
    "shippingDetail": "Shipped via a dragon cart, delivery may take up to two weeks due to the dangerous nature of the journey.",
    "usage": {
      "activation": "On your action",
      "duration": "Instantaneous",
      "endsWhen": "At the start of your next turn or when expended in combat",
      "charges": "Unlimited"
    },
    "priceReason": "The Frostfang Dagger's unique crafting process and rare materials contribute to its high XP value.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:16:43.005270+00:00",
    "aiReviewedAt": "2026-07-25T00:16:43.005270+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_whispering_stone": {
    "id": "earth_land_item_whispering_stone",
    "name": "Whispering Stone of Echoes",
    "description": "The Whispering Stone of Echoes is a smooth, grey stone that feels warm to the touch. It whispers secrets from the past, revealing hidden truths that have been lost over time. Legend has it that this stone was crafted by ancient sorcerers who sought to uncover the forgotten history of the land. Wario indeed tried to use it during one of his turnip deals, but its revelations came with unsettling consequences. Hold it close and let its secrets guide your negotiations or interrogations.",
    "category": "curiosities",
    "price": 270,
    "icon": "🔮",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "whispers hidden truths",
      "augments persuasion checks"
    ],
    "vendor": "magic_shop",
    "shippedBy": "owl_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Truths",
        "rules": "When an opponent makes a Wisdom (Perception) check within 5 feet of the stone, there is a 10% chance that it whispers aloud a hidden truth known to the target. The whispering lasts for 1 minute and can be heard by all creatures within 30 feet."
      },
      {
        "title": "Enhanced Persuasion",
        "rules": "While holding the stone, you gain a +2 bonus to persuasion checks. This effect is active as long as you hold the stone but does not stack with other bonuses."
      }
    ],
    "levelRequirementReason": "The stone's power is subtle and useful for novices, making it accessible to players of all levels.",
    "vendorReason": "As a reputable magical shop, the magic shop stocks artifacts that enhance negotiations and reveal secrets, making this stone an essential item.",
    "shippingDetail": "The stone is carefully wrapped in protective charms to ensure it arrives intact.",
    "usage": {
      "activation": "Passive effect when held; requires holding the stone for persuasion checks.",
      "duration": "Instantaneous reveal of hidden truths, lasts 1 minute.",
      "endsWhen": "Stone is destroyed or its magical properties are dispelled.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The stone's unique ability to reveal hidden truths and enhance persuasion checks makes it a valuable tool for players, justifying this price.",
    "priceOriginal": 180,
    "priceReviewedAt": "2026-07-25T00:16:30.053322+00:00",
    "aiReviewedAt": "2026-07-25T00:16:30.053322+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_dragonscale_amulet": {
    "id": "earth_land_item_dragonscale_amulet",
    "name": "Dragonscale Amulet of Resilience",
    "description": "The Dragonscale Amulet of Resilience is a shimmering trinket forged from scales shed by a young, fiery dragon. Its surface retains a faint, smoky glow that hints at its origin, and it offers a tangible connection to the beast’s power. This amulet grants you resistance to fire damage and enhances your natural armor class by 2, making you a formidable foe in the face of flame-breathing foes. Wario's attempt to market it as 'slightly burnt' turnips was met with mixed reviews among discerning adventurers.",
    "category": "equipment",
    "price": 4200,
    "icon": "🔥",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Fire Resistance",
      "Enhanced Armor Class"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_snail",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "You gain resistance to fire damage. This effect is always active, providing a passive defense against such attacks."
      },
      {
        "title": "Enhanced Armor Class",
        "rules": "Your armor class is increased by 2 while you wear this amulet. This enhancement lasts until the start of your next turn after removing it."
      }
    ],
    "levelRequirementReason": "This amulet requires at least 8th level to ensure its wearer can effectively leverage its fire resistance and armor class boost.",
    "vendorReason": "The Earth Emporium specializes in items crafted from natural materials, making it the perfect vendor for this dragon-scaled trinket.",
    "shippingDetail": "Delivered by a snail courier, with potential delays due to its slow but reliable nature.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; lasts until the start of your next turn after removal.",
      "endsWhen": "Exhausted when removed from your person.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The amulet's rarity and unique crafting process justify its moderate price, balancing its utility with a fair value.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T00:16:35.066757+00:00",
    "aiReviewedAt": "2026-07-25T00:16:35.066757+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chrono_reset_watch": {
    "id": "kivotos_item_chrono_reset_watch",
    "name": "Chrono Reset Watch – Prototype Model",
    "description": "The Chrono Reset Watch – Prototype Model is a sleek, chronometer-style device with a face that glows faintly with temporal energy. Crafted from ancient, enchanted brass and imbued with the essence of forgotten timekeepers, it allows its wearer to rewind their actions for 5 seconds, perfecting dodges or retrieving dropped items. However, overuse risks creating minor temporal anomalies, causing small damage to surroundings as the fabric of reality momentarily warps.",
    "category": "equipment",
    "price": 4200,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Rewind Time",
      "Temporal Anomalies"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "As a reaction, you can rewind time for 5 seconds. Creatures within 10 feet of you must succeed on a DC 12 Dexterity saving throw or be knocked prone. This effect has no cooldown but cannot be used more than once per long rest."
      },
      {
        "title": "Temporal Anomalies",
        "rules": "Each time you use Rewind Time, there's a 5% chance to create a minor temporal anomaly that deals 1d6 force damage to all creatures within 20 feet and causes them to be disoriented until the start of their next turn. This effect can occur at most once per short rest."
      }
    ],
    "levelRequirementReason": "The watch's power is accessible early on, allowing players to practice and master its use before facing more formidable challenges.",
    "vendorReason": "As a supplier of unique educational tools, Academy Armory naturally stocks this experimental device for curious minds.",
    "shippingDetail": "The Courier Pigeon ensures swift delivery, but only during the night when magical effects are most potent.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "You can't use it again until after you finish a short or long rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The watch combines practical utility with a risk of unintended consequences, making its cost slightly above average.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-25T00:16:49.715507+00:00",
    "aiReviewedAt": "2026-07-25T00:16:49.715507+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_personalized_aura_generator": {
    "id": "kivotos_item_personalized_aura_generator",
    "name": "Personalized Aura Generator - Model Beta",
    "description": "The Personalized Aura Generator - Model Beta hums with a vibrant glow as you select your desired aura. Whether it's 'Inspiring Courage,' which grants allies +1d4 temporary hit points on their next turn, or 'Mystical Calm,' which soothes nearby creatures for a round, this device is the perfect companion for any adventurer seeking to influence the mood of their party and draw attention from the curious. Crafted in Club Supply's secret workshop, it’s a rare find that can only be used once per short rest.",
    "category": "premium",
    "price": 15000,
    "icon": "🌈",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Inspiring Courage",
      "Mystical Calm"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier Drone Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Inspiring Courage",
        "rules": "When activated as a bonus action, this aura grants nearby allies +1d4 temporary hit points on their next turn. The effect lasts until the start of your next turn and can be used once per short rest."
      },
      {
        "title": "Mystical Calm",
        "rules": "Activating this aura as a bonus action soothes nearby creatures, granting them advantage on saving throws against fear effects for 1 minute. This effect has no save requirement and can also be used once per short rest."
      }
    ],
    "levelRequirementReason": "A simple device that any adventurer can use to bolster their party's morale or calm a tense situation.",
    "vendorReason": "Club Supply specializes in unique and rare items, often found at adventurers' side during pivotal moments.",
    "shippingDetail": "Delivered within the hour by the swift Courier Drone Express service.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous, lasts until start of next turn or short rest ends",
      "endsWhen": "Starts of your next turn or when a short rest is completed",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The Personalized Aura Generator's balanced price reflects its utility and rarity, offering adventurers a powerful yet affordable tool.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:16:54.016764+00:00",
    "aiReviewedAt": "2026-07-25T00:16:54.016764+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_potion_of_grim_resolve": {
    "id": "midlands_item_potion_of_grim_resolve",
    "name": "Elixir of Bitter Determination",
    "description": "The Elixir of Bitter Determination is a thick, dark purple potion that clings to the glass bottle like a stubborn memory. Its scent hints at burnt turnips and the bitter taste of regret. Sipping this foul concoction grants you a temporary surge of courage, bolstering your resolve in the face of fear and mind-altering magic. For a brief moment, you are brave enough to face whatever horrors lie ahead, but beware—its lingering effects can leave you reeling from the sheer intensity of its potency.",
    "category": "consumables",
    "price": 4200,
    "icon": "🧪",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Courage Boost",
      "Fear Resistance"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "flying drake (delivery only)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Courage Boost",
        "rules": "Upon consuming this elixir, you gain temporary hit points equal to your level + 10. These hit points last for 1 minute or until you take damage."
      },
      {
        "title": "Fear Resistance",
        "rules": "For the duration of its effect, any saving throw made against a fear or mind-altering spell or effect has advantage. This effect does not stack with other sources of similar benefits."
      }
    ],
    "levelRequirementReason": "This elixir is accessible to all adventurers who wish to bolster their courage in the face of fear and adversity.",
    "vendorReason": "The Empire Exchange specializes in rare and exotic items that cater to adventurers seeking an edge, making this potion a fitting addition to their inventory.",
    "shippingDetail": "The flying drake delivers the elixir directly to your doorstep, ensuring it arrives fresh and potent.",
    "usage": {
      "activation": "飲用",
      "duration": "1分钟或直到你受到伤害为止",
      "endsWhen": "你受到伤害时结束，或在持续时间内自然消失。",
      "charges": "无限制"
    },
    "priceReason": "This price reflects the potion's rarity and its temporary but significant benefits to adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:17:13.439455+00:00",
    "aiReviewedAt": "2026-07-25T00:17:13.439455+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_obsidian_dice_of_fortune": {
    "id": "midlands_item_obsidian_dice_of_fortune",
    "name": "The Oracle's Gamble",
    "description": "The Oracle's Gamble are intricately carved obsidian dice that hum with an ancient, almost sentient energy. These dice can either grant you a fortuitous advantage or unleash an unforeseen misfortune when rolled in divination rituals or chance encounters. Crafted by the enigmatic scholars of the Midlands, these dice are said to be imbued with the essence of forgotten prophecies and twisted fates. Wario still recommends them for settling disputes, but now players must roll them with caution.",
    "category": "curiosities",
    "price": 15000,
    "icon": "🎲",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Fortuitous Fortune",
      "Unforeseen Misfortune"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "magical teleportation",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fortuitous Fortune",
        "rules": "Roll the dice to gain a +1d4 bonus on one ability check, saving throw, or attack roll of your choice. This effect lasts until the end of your next turn."
      },
      {
        "title": "Unforeseen Misfortune",
        "rules": "There is a 25% chance that rolling the dice will trigger an unforeseen misfortune: you take 1d6 psychic damage and must succeed on a DC 13 Constitution saving throw or be stunned until the end of your next turn."
      }
    ],
    "levelRequirementReason": "These dice are meant for all adventurers, as they can aid in both critical moments and unexpected challenges.",
    "vendorReason": "The scholars at Fractured Forge have a deep connection to ancient prophecies and artifacts, making them the perfect custodians of these dice.",
    "shippingDetail": "Delivered instantly via the Plane Shift Gate network, ensuring adventurers receive their dice without delay.",
    "usage": {
      "activation": "Standard action to roll the dice",
      "duration": "Instantaneous effect with a duration until end of next turn for Fortuitous Fortune; Unforeseen Misfortune ends immediately upon triggering",
      "endsWhen": "Fortuitous Fortune ends at the end of your next turn, or if you take any action that requires concentration (e.g., casting a spell); Unforeseen Misfortune ends when the effect resolves or is ended by an action",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Oracle's Gamble are priced at 1000 XP for their unique abilities and rarity, ensuring they remain a valuable but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T00:17:03.540012+00:00",
    "aiReviewedAt": "2026-07-25T00:17:03.540012+00:00",
    "aiReviewVersion": 1
  }
};
