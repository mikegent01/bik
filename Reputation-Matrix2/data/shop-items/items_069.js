// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_069 = {
  "pokemon_item_league_badge_valor": {
    "id": "pokemon_item_league_badge_valor",
    "name": "Valor Badge of Bravery",
    "description": "Awarded to trainers who've proven their courage against the toughest Pokemon! This gleaming badge isn’t just a pretty piece of metal; it slightly increases your evasion and grants a bonus to willpower checks when facing intimidating foes. Plus, it looks *fantastic* on your tunic – Wario would be jealous!",
    "category": "equipment",
    "price": 8000,
    "icon": "🏆",
    "stock": 20,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "evasion_increase_10%",
      "willpower_bonus_5",
      "chance_to_paralyze_on_critical_hit_5%"
    ],
    "vendor": "league_store",
    "shippedBy": "delivery_only",
    "levelRequirement": 9
  },
  "pokemon_item_safari_research_note": {
    "id": "pokemon_item_safari_research_note",
    "name": "Safari Research Note - Dusk Mane",
    "description": "The Safari Research Note - Dusk Mane is a leather-bound journal embossed with the iconic Safari Zone emblem. Its pages are filled with detailed, hand-drawn sketches of a Dusk Mane Pokémon's nocturnal behavior and habitat preferences. This invaluable field guide increases your chances of encountering this elusive Pokémon by 10% when used after sunset, and grants you a +2 bonus to Insight checks related to understanding its nature.",
    "category": "curiosities",
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "description": "These boots, forged in the unstable center, allow you to briefly defy gravity. Just watch out for those sudden shifts—stepping off a ledge while wearing these is a *delicious* mistake!  They're surprisingly comfortable, too.",
    "category": "equipment",
    "price": 18000,
    "icon": "🚀",
    "stock": 32,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Jump height increased by 50%",
      "Chance to negate fall damage",
      "Slow movement speed for 1 turn after jumping"
    ],
    "vendor": "center_seller",
    "shippedBy": "Void Express (Delayed Delivery)",
    "levelRequirement": 10
  },
  "doughnut_hole_mythic_singularity_orb": {
    "id": "doughnut_hole_mythic_singularity_orb",
    "name": "The Heart's Echo",
    "description": "A pulsing orb, saturated with the chaotic energy of The Doughnut Hole’s center. Touching it creates miniature gravitational wells, and prolonged contact may cause existential dread…or a sudden craving for sprinkles.  Handle with extreme caution (and maybe a helmet).",
    "category": "premium",
    "price": 120000,
    "icon": "🌀",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "back_order",
    "effects": [
      "Creates a small localized gravity field (damages enemies within 5 feet)",
      "Chance to teleport the user a short distance (10-20 feet)",
      "Increases magic power by 30%",
      "Causes vivid hallucinations - roll a d6, on a 4+ you are stunned for one turn"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Temporal Paradox Delivery Service",
    "levelRequirement": 22
  },
  "the_edge_chronal_repair": {
    "id": "the_edge_chronal_repair",
    "name": "Chronal Repair - Temporal Stitching",
    "description": "A shimmering, iridescent thread woven with echoes of time. This service gently nudges the flow of time around a damaged item, briefly restoring it to its prior state – perfect for quick fixes and desperate situations! Just don't ask how Wario got this.",
    "category": "services",
    "price": 1200,
    "icon": "⏳",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "repair_equipment_small",
      "chance_to_nullify_curse",
      "grant_temporary_buff_to_weapon_durability"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Temporal Messenger",
    "levelRequirement": 10
  },
  "internet_packet_bomb": {
    "id": "internet_packet_bomb",
    "name": "Viral Payload",
    "description": "This shimmering orb pulses with chaotic data! Unleash it to spread a temporary status effect – think 'Confusion' or 'Fear' – across nearby enemies. Just be careful not to overload your own system with too much information!",
    "category": "consumables",
    "price": 800,
    "icon": "💥",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "apply_effect:confusion (1 turn)",
      "chance_to_apply_effect:fear (2 turns)"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 4
  },
  "internet_meme_injector": {
    "id": "internet_meme_injector",
    "name": "Distraction Drive",
    "description": "A small device that emits a targeted wave of viral memes, momentarily stunning and disorienting your foes! It’s surprisingly effective against slow-witted opponents... or anyone who just really likes cat videos. Don't ask us how it works.",
    "category": "curiosities",
    "price": 1200,
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
    "levelRequirement": 2
  },
  "middle_earth_rune_shard": {
    "id": "middle_earth_rune_shard",
    "name": "Echoing Rune Shard",
    "description": "This oddly warm shard pulses with residual magic, likely from a forgotten Elven ritual. Holding it close allows you to briefly hear whispers of the past – mostly complaints about bad weather and overly polite dwarves.  It’s surprisingly good for distracting grumpy goblins.",
    "category": "curiosities",
    "price": 1800,
    "icon": "🔮",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "grant_temporary_insight",
      "chance_to_confuse_enemy",
      "small_healing_effect"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_pony",
    "levelRequirement": 6
  },
  "middle_earth_stonecarver_service": {
    "id": "middle_earth_stonecarver_service",
    "name": "Ancient Stone Smoothing",
    "description": "Old Borin's Stonecarving service offers a unique touch – he will meticulously smooth and polish any stone item, adding to its durability and aesthetic appeal. He claims it’s an ancient Dwarven technique involving chanting and the occasional sacrifice of small pebbles… don’t ask.",
    "category": "services",
    "price": 750,
    "icon": "🔨",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increase_item_durability",
      "chance_to_reduce_repair_cost"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "rock_golem",
    "levelRequirement": 3
  },
  "middle_earth_ringwraith_scale": {
    "id": "middle_earth_ringwraith_scale",
    "name": "Fragment of a Wraith's Shadow",
    "description": "A shimmering scale, undeniably belonging to a Ringwraith. It radiates an aura of chilling dread and seems to absorb nearby light - probably because it’s just really, *really* cold. Wario recommends using it as a paperweight… or maybe not.",
    "category": "equipment",
    "price": 8000,
    "icon": "💀",
    "stock": 7,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "chance_to_inflict_fear",
      "resistance_to_cold_damage",
      "small_shadow_attack_damage"
    ],
    "vendor": "shire_shop",
    "shippedBy": "dark_horse",
    "levelRequirement": 10
  },
  "kivotos_item_halo_of_harmonious_discord": {
    "id": "kivotos_item_halo_of_harmonious_discord",
    "name": "The Cacophony's Embrace",
    "description": "A bizarre halo crafted from solidified noise and shimmering light. Wearing this will cause a strange mix of tranquility and utter chaos within you – it might help with meditation, or just make your allies question their sanity! This curious artifact appears to amplify existing magical energies in unpredictable ways.",
    "category": "curiosities",
    "price": 1200,
    "icon": "🎶",
    "stock": 37,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "randomly_boosts_magic_damage",
      "chance_to_silence_an_enemy",
      "causes_a_small_area_of_disruption_around_the_wearer (minor chance to disrupt spellcasting)"
    ],
    "vendor": "club_supply",
    "shippedBy": "Express Courier",
    "levelRequirement": 8
  },
  "kivotos_item_scroll_of_accidental_transfiguration": {
    "id": "kivotos_item_scroll_of_accidental_transfiguration",
    "name": "The Blobber's Blessing",
    "description": "This ancient scroll, inexplicably covered in slime, contains a single spell – one that *attempts* to transform objects.  The results are rarely what were intended, but they’re always… memorable. Use at your own risk (and with plenty of cleaning supplies).",
    "category": "consumables",
    "price": 3500,
    "icon": "🧪",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance_to_transform_target_into_a_random_object (low chance)",
      "chance_to_cause_the_target_to_explode in a shower of goo",
      "small healing effect if successful transformation is achieved"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Magical Delivery Portal",
    "levelRequirement": 10
  },
  "pokemon_item_ancient_pokedex": {
    "id": "pokemon_item_ancient_pokedex",
    "name": "Chronometric Pokedex",
    "description": "This peculiar device hums with temporal energy, allowing you to briefly rewind a single battle action! It’s surprisingly effective against tricky trainers and overly-aggressive Pokémon – just don't use it to undo that embarrassing faceplant. This thing is absolutely *smashing*!",
    "category": "equipment",
    "price": 18000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "rewind_battle_action (1 use/day)",
      "increased_critical_chance (5%)",
      "temporary boost to attack power (10)"
    ],
    "vendor": "pokemart",
    "shippedBy": "delivery_only",
    "levelRequirement": 9
  },
  "pokemon_item_trainer_badge_echo": {
    "id": "pokemon_item_trainer_badge_echo",
    "name": "Badge of Resonant Echoes",
    "description": "A shimmering badge that seems to vibrate with the memories of countless battles. Wearing this grants you a faint echo of your opponent’s moves, allowing you to anticipate their strategies – although it also makes you crave sugar donuts.",
    "category": "curiosities",
    "price": 800,
    "icon": "🗣️",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to predict opponent's move (15%)",
      "increased status effect resistance (10%)",
      "boost to intuition"
    ],
    "vendor": "safari_shop",
    "shippedBy": "delivery_only",
    "levelRequirement": 3
  },
  "pokemon_item_elite_trainer_contract": {
    "id": "pokemon_item_elite_trainer_contract",
    "name": "Contract of Legendary Training",
    "description": "A magically sealed contract from an Elite Trainer, promising a significant XP boost and access to rare Pokémon encounters. Wario insists it’s just a fancy way to pay someone to fight for him...which is perfectly acceptable.",
    "category": "services",
    "price": 6000,
    "icon": "🤝",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "grant 5000 XP upon completion of encounter",
      "chance to receive a rare Pokémon (10%)",
      "temporary increase in experience gain (20%)"
    ],
    "vendor": "league_store",
    "shippedBy": "delivery_only",
    "levelRequirement": 6
  },
  "kivotos_item_sugar_shock_pills": {
    "id": "kivotos_item_sugar_shock_pills",
    "name": "Hyper-Concentrated Sugar Rush",
    "description": "These tiny, shimmering pills are guaranteed to unleash a torrent of chaotic energy! Each pill delivers a brief burst of incredible speed and damage output, but be warned – the effects quickly wear off leaving you with an intense craving for sweets. Perfect for surprising your enemies or winning that last-second race!",
    "category": "consumables",
    "price": 250,
    "icon": "🍬",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increase_attack_damage_10%",
      "speed_boost_3s",
      "chance_to_stun_5%"
    ],
    "vendor": "student_store",
    "shippedBy": "Standard Mail",
    "levelRequirement": 1
  },
  "pokemon_item_shadow_ball_charm": {
    "id": "pokemon_item_shadow_ball_charm",
    "name": "Shadow Ball Charm",
    "description": "This oddly pulsating charm seems to absorb the very darkness around it! Wearing this boosts your Pokémon's Shadow Ball accuracy and power, but beware - prolonged use might attract unwanted attention from shadowy Pokemon. It’s like a miniature nightmare condensed into a trinket!",
    "category": "equipment",
    "price": 18000,
    "icon": "🌑",
    "stock": 25,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increases shadow ball accuracy by 15%",
      "increases shadow ball power by 10%",
      "chance to inflict confusion on hit"
    ],
    "vendor": "pokemart",
    "shippedBy": "poke-drone",
    "levelRequirement": 9
  },
  "faerun_item_ancient_scroll_of_protection": {
    "id": "faerun_item_ancient_scroll_of_protection",
    "name": "Scroll of Protection from Evil",
    "description": "This ancient scroll, penned by a long-forgotten cleric, radiates an aura of divine power. Unfurling it whispers a protective enchantment - warding off evil spirits and shadowy creatures with a shimmering golden light!",
    "category": "consumables",
    "price": 8750,
    "icon": "🛡️",
    "stock": 9,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Grants +4 AC for 1 hour",
      "Advantage on saving throws against necrotic damage",
      "Summons a spectral guardian for 3 rounds (low HP)"
    ],
    "vendor": "faction_the_order",
    "shippedBy": "giant_eagle",
    "levelRequirement": 12
  },
  "grand_country_crumb_of_stability": {
    "id": "grand_country_crumb_of_stability",
    "name": "Crumb of Stability",
    "description": "This oddly dense crumb seems to defy gravity, occasionally pulsing with a faint blue light. It's rumored to briefly anchor you during moments of extreme disorientation – perfect for those precarious climbs!",
    "category": "consumables",
    "price": 250,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores 10 sanity",
      "chance to negate falling damage (15%)",
      "provides +2 to dexterity checks for one round"
    ],
    "vendor": "side_seller",
    "shippedBy": "winged_beetle",
    "levelRequirement": 3
  },
  "kivotos_item_instant_noodles_of_inspiration": {
    "id": "kivotos_item_instant_noodles_of_inspiration",
    "name": "Instant Noodles of Creative Combustion",
    "description": "These aren’t your average ramen packets! Infused with the chaotic energy of a thousand brainstorming sessions, these noodles instantly spark brilliant ideas – or at least, a really intense craving for more noodles.  Warning: may cause spontaneous interpretive dance.",
    "category": "consumables",
    "price": 150,
    "icon": "🍜",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to gain a temporary inspiration buff (5%)",
      "restores 10 HP"
    ],
    "vendor": "student_store",
    "shippedBy": "Standard Mail - Delivered with a complimentary napkin.",
    "levelRequirement": 3
  },
  "kivotos_item_shard_of_the_final_exam": {
    "id": "kivotos_item_shard_of_the_final_exam",
    "name": "Shard of the Final Exam",
    "description": "A pulsating fragment ripped from the sacred, eternally-locked final exam. It radiates a disconcerting aura and whispers cryptic hints about future grades – mostly just 'study harder!' This piece is said to be imbued with the collective anxiety of every student who's ever attended Kivotos Academy.  Don’t stare at it for too long or you might start seeing floating test papers.",
    "category": "curiosities",
    "price": 250000,
    "icon": "📚",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance to gain a knowledge boost (15%)",
      "detects hidden academic achievements"
    ],
    "vendor": "club_supply",
    "shippedBy": "Royal Courier - Requires Signature from Headmaster Thorne.",
    "levelRequirement": 20
  },
  "mushroom_kingdom_item_warp_pipe_charm": {
    "id": "mushroom_kingdom_item_warp_pipe_charm",
    "name": "Dimensional Displacement Charm",
    "description": "A beautifully crafted charm made from polished mushroom caps and shimmering gears. It’s rumored to briefly bend space, letting you quickly navigate the most confusing pipe mazes. Just don't get stuck in a dimension full of angry snails!",
    "category": "curiosities",
    "price": 75000,
    "icon": "🌀",
    "stock": 10,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance to teleport the user within a 30ft radius (25%)",
      "reduce travel time through pipes by 50%",
      "grants resistance to spatial damage"
    ],
    "vendor": "wario_direct",
    "shippedBy": "royal_snail_express",
    "levelRequirement": 18
  },
  "mushroom_kingdom_item_gold_coin_amplifier": {
    "id": "mushroom_kingdom_item_gold_coin_amplifier",
    "name": "Amplified Gold Coin",
    "description": "This isn't just any gold coin; it’s been meticulously charged with pure greed! Holding this coin grants a temporary boost to your luck… and potentially, your expenses. Wario approves.",
    "category": "premium",
    "price": 12000,
    "icon": "💰",
    "stock": 5,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "+1 to all attack rolls",
      "increased chance of finding valuable items (5%)",
      "chance to trigger a random beneficial effect (10%)"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "delivery_drone",
    "levelRequirement": 3
  },
  "leclaire_isle_item_crusty_claw": {
    "id": "leclaire_isle_item_crusty_claw",
    "name": "Crusty Claw Shield",
    "description": "This shield isn't just made of hardened dough; it seems to *grow* sharper the more you use it! It’s surprisingly resilient against piercing attacks, and smells faintly of cinnamon. Perfect for a brave baker defending their pastry shop.",
    "category": "equipment",
    "price": 18000,
    "icon": "🛡️",
    "stock": 5,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "armor: 12",
      "resistance: fire (5%)",
      "chance to inflict 'sticky' on hit"
    ],
    "vendor": "dough_depot",
    "shippedBy": "rolling_cart",
    "levelRequirement": 8
  },
  "leclaire_isle_item_sugar_shard": {
    "id": "leclaire_isle_item_sugar_shard",
    "name": "Sugar Shard of Sweet Dreams",
    "description": "A crystallized fragment pulled from a slumbering Dough Fairy's pillow! Holding this shard induces vivid, sugary dreams – sometimes pleasant, sometimes involving giant gingerbread men chasing you. Use with caution, or enjoy the delicious chaos!",
    "category": "curiosities",
    "price": 60000,
    "icon": "🍬",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "chance to grant 'sugar rush' (temporary speed and attack bonus)",
      "chance to inflict 'confusion'",
      "chance to summon a friendly gingerbread man for 3 turns"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "dusted_crate",
    "levelRequirement": 15
  },
  "leclaire_isle_item_yeast_whisper": {
    "id": "leclaire_isle_item_yeast_whisper",
    "name": "Yeast Whisper Charm",
    "description": "A small, pulsating charm made from concentrated yeast spores. It allows the wearer to briefly understand the murmurs of dough and baking equipment - potentially revealing hidden passages or secret recipes! Don't be surprised if it starts begging for a little sugar.",
    "category": "curiosities",
    "price": 350,
    "icon": "🗣️",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to detect hidden objects related to baking",
      "increases cooking speed by 10%"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "honeycomb_box",
    "levelRequirement": 2
  },
  "midlands_item_chronometer_of_confusion": {
    "id": "midlands_item_chronometer_of_confusion",
    "name": "Chronometer of Temporal Hiccups",
    "description": "This ornate pocket watch appears to be perpetually stuck at 3:17, and occasionally emits a disconcerting buzzing sound. Wield this device with caution – it seems to subtly warp the flow of time around its user… mostly causing minor inconveniences.",
    "category": "curiosities",
    "price": 850,
    "icon": "🕰️",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_slow_enemy_movement",
      "minor_chance_of_time_distortion",
      "increased_perception"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "winged_snail",
    "levelRequirement": 5
  },
  "middle_earth_mapmaker_service": {
    "id": "middle_earth_mapmaker_service",
    "name": "Cartographer's Precise Survey",
    "description": "Old Barnaby, the Shire’s most meticulous cartographer, offers a detailed survey of your current location. His charts are remarkably accurate – especially useful for avoiding those pesky trolls and grumpy goblins!",
    "category": "services",
    "price": 1200,
    "icon": "🗺️",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "provides a detailed map of the surrounding area (including monster locations)",
      "reveals hidden pathways and secret routes",
      "chance to discover a minor treasure"
    ],
    "vendor": "shire_shop",
    "shippedBy": "Hobbit Post Cart",
    "levelRequirement": 6
  },
  "middle_earth_mithril_hammer_fragment": {
    "id": "middle_earth_mithril_hammer_fragment",
    "name": "Dwarven Forge's Finest Fragment",
    "description": "A small, but incredibly strong, piece of mithril recovered from a collapsed dwarven forge. It vibrates with latent power – perfect for smashing rocks and annoying goblins (or just general hammering). Wario would totally try to steal this!",
    "category": "equipment",
    "price": 8000,
    "icon": "🔨",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "+5 to smithing skill",
      "chance to inflict bleeding on enemies with attacks",
      "increased armor rating"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "Dwarven Delivery Cart",
    "levelRequirement": 10
  },
  "midlands_item_warrior's_contract": {
    "id": "midlands_item_warrior's_contract",
    "name": "The Ironclad Accord",
    "description": "A magically-sealed contract offering temporary protection and enhanced combat prowess. Signed by a surprisingly grumpy retired legionnaire, it demands unwavering loyalty...and frequent polishing.",
    "category": "equipment",
    "price": 18000,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased_armor_5",
      "damage_resistance_10%",
      "chance_to_parry_attack_15%"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "giant_rat",
    "levelRequirement": 10
  },
  "equestria_item_pony_footprint_charm": {
    "id": "equestria_item_pony_footprint_charm",
    "name": "Pony Footprint Charm",
    "description": "A tiny, perfectly preserved footprint of a happy pony! Legend says it brings good luck to those who cherish friendship and always remember the importance of spreading joy. It's surprisingly warm to the touch.",
    "category": "curiosities",
    "price": 350,
    "icon": "🐾",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to find extra loot (+5%)",
      "increased chance of positive encounters",
      "small bonus to persuasion checks"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Express",
    "levelRequirement": 3
  },
  "earth_land_item_geode_of_echoes": {
    "id": "earth_land_item_geode_of_echoes",
    "name": "The Silent Cartographer's Stone",
    "description": "A shimmering geode filled with countless tiny, perfectly formed crystals. Touching it briefly allows you to hear whispers of forgotten maps and lost adventurers – mostly just complaining about the weather, but occasionally a useful clue appears!",
    "category": "curiosities",
    "price": 875,
    "icon": "💎",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance to reveal hidden pathways",
      "provides cryptic hints relating to map locations",
      "increases perception by 5%"
    ],
    "vendor": "magic_shop",
    "shippedBy": "giant_snail",
    "levelRequirement": 8
  },
  "earth_land_item_dragonscale_dust": {
    "id": "earth_land_item_dragonscale_dust",
    "name": "Scrapings from Ignis' Fury",
    "description": "Collected from the shed scales of a young Crimson Dragon, this dust smells suspiciously like burnt marshmallows and disappointment. When sprinkled on weapons, it provides a fiery boost… or just makes them slightly sticky.",
    "category": "consumables",
    "price": 1200,
    "icon": "🔥",
    "stock": 23,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "weapon fire damage +3",
      "chance to ignite enemies",
      "temporary increase in weapon attack speed"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "griffon",
    "levelRequirement": 10
  },
  "grand_country_layer_shard_of_echoes": {
    "id": "grand_country_layer_shard_of_echoes",
    "name": "Layer Shard of Echoes",
    "description": "A jagged shard pulsing with faint, layered sounds. Holding it close allows you to briefly hear whispers from past events within the Grand Country - useful for tracking or uncovering secrets, but beware – some echoes are… unsettling.",
    "category": "curiosities",
    "price": 8500,
    "icon": "🔮",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "chance_to_reveal_hidden_paths_30%",
      "grant_minor_illusion_effect"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 12
  },
  "grand_country_side_seller_charm_of_ascension": {
    "id": "grand_country_side_seller_charm_of_ascension",
    "name": "Charm of Ascension",
    "description": "Crafted by the enigmatic side sellers, this ornate charm is said to briefly manipulate localized gravity. Use it wisely – a misplaced step could send you tumbling into oblivion!",
    "category": "equipment",
    "price": 65000,
    "icon": "⬆️",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "grant_jump_boost_50%",
      "chance_to_briefly_reverse_gravity_10%"
    ],
    "vendor": "side_seller",
    "shippedBy": "warp_wormhole",
    "levelRequirement": 24
  },
  "doughnut_hole_epic_singularity_shard": {
    "id": "doughnut_hole_epic_singularity_shard",
    "name": "Echo of the Void Heart",
    "description": "A pulsating fragment ripped from the center of existence. Holding this shard allows you to briefly manipulate localized gravitational fields – pulling enemies closer or creating small, contained pockets of distorted space.  Be warned; prolonged exposure can induce unsettling visions and an overwhelming urge to collect sprinkles.",
    "category": "equipment",
    "price": 12000,
    "icon": "🌌",
    "stock": 8,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increase_strength_by_3_for_5_turns",
      "chance_to_pull_enemy_closer_20%",
      "creates_small_gravity_field_10ft radius - 2 turns"
    ],
    "vendor": "center_seller",
    "shippedBy": "Void Courier",
    "levelRequirement": 9
  },
  "doughnut_hole_curiosity_chronal_drizzle": {
    "id": "doughnut_hole_curiosity_chronal_drizzle",
    "name": "Temporal Syrup",
    "description": "This viscous, shimmering syrup tastes faintly of cinnamon and paradox. A single drop applied to a weapon grants it temporal properties – briefly slowing enemies or speeding up your own attacks.  Just try not to create any unintended timelines… Wario's already got enough problems.",
    "category": "curiosities",
    "price": 1500,
    "icon": "⏳",
    "stock": 99,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "slow_enemy_speed_by_30%_for_2_turns",
      "increase_attack_speed_by_10%_for_1_turn"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Quantum Delivery",
    "levelRequirement": 2
  },
  "forbidden_shadowshard": {
    "id": "forbidden_shadowshard",
    "name": "Shard of the Twisted Void",
    "description": "A fragment ripped from the very fabric of chaos, this shard pulses with an unsettling darkness. Holding it for too long can induce terrifying visions and a desperate craving for… well, let’s just say things best left undisturbed.  Don't blame us if you start summoning shadowy imps.",
    "category": "forbidden",
    "price": 250000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance to inflict madness on hit",
      "increases shadow damage by 50%",
      "grants temporary resistance to psychic attacks",
      "lowers light sensitivity"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Dark Messenger",
    "levelRequirement": 18
  },
  "warhammer_ironclad_relic": {
    "id": "warhammer_ironclad_relic",
    "name": "The Emperor's Last Stand",
    "description": "A colossal warhammer, crafted from the finest iron and imbued with the spirit of a fallen emperor. It radiates an aura of grim determination – perfect for crushing your foes into oblivion!  Just try not to get too attached; it tends to attract grumpy ghosts.",
    "category": "equipment",
    "price": 8000,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "damage: 9-12 per hit",
      "chance to stun on critical hit",
      "increased armor penetration",
      "regenerates health slowly when idle"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Fate Delivery",
    "levelRequirement": 9
  },
  "internet_legendary_firewall": {
    "id": "internet_legendary_firewall",
    "name": "The Great Wall of Wario",
    "description": "Forged from solidified code and powered by the collective rage of millions of internet trolls, this legendary firewall is said to be impenetrable. It can absorb any attack... until it gets flooded with cat pictures, then all bets are off!  This thing’s got serious protection but also a disturbing fondness for GIFs.",
    "category": "equipment",
    "price": 65000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "provides complete immunity to digital attacks (viruses, hacking attempts, etc.)",
      "chance to reflect spells back at the caster",
      "creates a localized 'buffering' effect on enemies, slowing their movements",
      "occasionally displays a random, aggressively cheerful meme"
    ],
    "vendor": "cyber_market",
    "shippedBy": "High-Speed Packet Transfer",
    "levelRequirement": 15
  },
  "faerun_item_rusty_dwarven_hammer": {
    "id": "faerun_item_rusty_dwarven_hammer",
    "name": "Dwarf’s Grumble Stone",
    "description": "This hammer looks like it's seen a few too many goblin skirmishes – and probably lost a few dents in the process. It still packs a surprisingly solid punch, fueled by the stubborn spirit of ancient dwarves…and maybe a little bit of Wario-grade grit!",
    "category": "equipment",
    "price": 350,
    "icon": "🔨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "damage: bludgeoning 1d6 + 1",
      "chance to inflict bleeding (5%)",
      "slightly heavier than normal"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "wagon",
    "levelRequirement": 3
  },
  "faerun_item_scroll_of_abyssal_invocation": {
    "id": "faerun_item_scroll_of_abyssal_invocation",
    "name": "The Unholy Bargain",
    "description": "A brittle scroll radiating a chilling aura. Touching it may bring forth a minor demonic servant, eager to… well, *something*. Don’t say I didn't warn you—this is definitely forbidden stuff, probably something Wario would use to steal from the underworld!",
    "category": "forbidden",
    "price": 8000,
    "icon": "😈",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "summon a minor demon (1d4 rounds)",
      "demon has low HP and damage",
      "risk of summoning a hostile entity if used incorrectly"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "dark_messenger",
    "levelRequirement": 8
  },
  "internet_pixel_flare": {
    "id": "internet_pixel_flare",
    "name": "Viral Spark Grenade",
    "description": "This seemingly harmless pixel grenade bursts with concentrated internet energy! Upon impact, it unleashes a wave of viral memes, temporarily stunning enemies and applying 'Distracted' to their minds – perfect for disrupting tactical formations or escaping awkward conversations.",
    "category": "consumables",
    "price": 7500,
    "icon": "💥",
    "stock": 42,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "deals 1d8 damage to enemies in a 15ft radius",
      "stuns target for 1 round",
      "applies 'Distracted' status for 3 rounds"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 9
  },
  "internet_meme_contract": {
    "id": "internet_meme_contract",
    "name": "The Influencer's Bargain",
    "description": "A legally binding agreement between you and a powerful entity within The Internet – a digital influencer with sway over millions. This contract grants the user temporary buffs based on current viral trends, but failing to maintain ‘likes’ results in immediate, crippling social isolation.",
    "category": "faction",
    "price": 2500,
    "icon": "👍",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "+1 to Charisma checks for 3 rounds",
      "chance (20%) to gain temporary popularity (increased movement speed)",
      "chance (10%) of attracting unwanted attention from online trolls"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Packet Delivery",
    "levelRequirement": 5
  },
  "midlands_item_goblin_shockberry": {
    "id": "midlands_item_goblin_shockberry",
    "name": "Shocking Crimson Berries",
    "description": "These vibrant red berries were favored by Goblin shock troops – and they pack a surprisingly nasty electric punch! Consume one to gain temporary electrical resistance and potentially stun nearby enemies with a burst of chaotic energy. Wario approves!",
    "category": "consumables",
    "price": 1700,
    "icon": "⚡",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "electrical resistance +4 for 5 turns",
      "chance to stun target on use"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "airship delivery",
    "levelRequirement": 7
  },
  "midlands_item_broken_cog": {
    "id": "midlands_item_broken_cog",
    "name": "Fragment of a Clockwork Mind",
    "description": "A peculiar piece salvaged from the ruins of a colossal automaton. This cog seems to hum with residual intelligence, occasionally emitting faint clicking sounds and granting the wielder a sliver of mechanical insight. It's probably best not to ask it questions.",
    "category": "curiosities",
    "price": 3200,
    "icon": "⚙️",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased perception +3 for 4 turns",
      "chance to decipher ancient mechanisms"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "delivery_only",
    "levelRequirement": 10
  },
  "the_edge_void_sculpting_service": {
    "id": "the_edge_void_sculpting_service",
    "name": "Ephemeral Form Shaping",
    "description": "A master artisan from the Abyss offers to temporarily sculpt your essence into a form resistant to the void's touch. The effect lasts for 30 minutes, granting resistance to necrotic damage and slowing the effects of entropy – though at what cost to your soul, you must wonder?",
    "category": "services",
    "price": 75000,
    "icon": "🪄",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grants resistance to necrotic damage for 30 minutes",
      "slows the effects of entropy (50%) for 30 minutes",
      "chance to gain a minor void-themed cosmetic effect"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "void_messenger",
    "levelRequirement": 16
  },
  "the_edge_obsidian_wrath": {
    "id": "the_edge_obsidian_wrath",
    "name": "Fragment of Unmaking",
    "description": "A pulsing chunk of solidified chaos, this obsidian fragment grants a burst of destructive power – but it’s utterly unstable. Use it with caution, as uncontrolled use can trigger minor spatial distortions or even summon shadowy remnants of forgotten horrors.",
    "category": "consumables",
    "price": 350,
    "icon": "💥",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deals 1d6+level fire damage on hit",
      "chance to inflict fear (10%)",
      "small chance to create a minor spatial distortion"
    ],
    "vendor": "final_shop",
    "shippedBy": "express_delivery",
    "levelRequirement": 2
  },
  "animatopia_emberclaw_amulet": {
    "id": "animatopia_emberclaw_amulet",
    "name": "Emberclaw Amulet",
    "description": "This crudely crafted amulet, forged from solidified dragon fire and a surprisingly comfortable badger claw, pulses with residual heat. It's said to ward off the chills of the Shadow Jungle and occasionally grants the wearer a minor boost to their fire resistance – perfect for grumpy boar-folk!",
    "category": "equipment",
    "price": 650,
    "icon": "🔥",
    "stock": 72,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "fire_resistance_5",
      "increased_strength_1",
      "minor_healing_1"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "giant_beetle",
    "levelRequirement": 3
  },
  "animatopia_stone_spirit_charm": {
    "id": "animatopia_stone_spirit_charm",
    "name": "Stone Spirit’s Whisper",
    "description": "Carved from a fragment of an ancient stone spirit, this charm seems to hum with the secrets of the earth. Holding it allows you to briefly communicate with nearby plant life – mostly requests for water and complaints about tourists. Wario thinks it's just a fancy paperweight.",
    "category": "curiosities",
    "price": 3200,
    "icon": "🗿",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "communication_with_plants",
      "increased_perception_2",
      "minor_defense_bonus_3"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_snail",
    "levelRequirement": 7
  },
  "leclaire_isle_item_sticky_sweet_scone": {
    "id": "leclaire_isle_item_sticky_sweet_scone",
    "name": "Sticky Sweet Scone of Sustenance",
    "description": "These deceptively dense scones are baked with a secret ingredient – pure, concentrated happiness! They're surprisingly resilient and provide a burst of energy that’ll have you bouncing off walls… or maybe just finishing your quest.",
    "category": "consumables",
    "price": 250,
    "icon": "🍪",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores 10 health",
      "provides +5 charisma for 3 rounds",
      "slightly increases cooking speed"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift_cart",
    "levelRequirement": 1
  },
  "leclaire_isle_item_dwarven_dough_shield": {
    "id": "leclaire_isle_item_dwarven_dough_shield",
    "name": "Dwarven Dough Shield of Resilience",
    "description": "Forged by the legendary Dough Dwarves, this shield is surprisingly sturdy – and smells faintly of cinnamon. It’s baked with reinforced dough for exceptional impact resistance (and a good distraction).  Don't worry, it won’t crumble under pressure… too much.",
    "category": "equipment",
    "price": 1200,
    "icon": "🛡️",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases armor class by 2",
      "chance to deflect incoming projectiles (10%)",
      "provides +2 resistance to cold damage"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "rolling_barrel",
    "levelRequirement": 6
  },
  "leclaire_isle_item_golden_sugar_shard": {
    "id": "leclaire_isle_item_golden_sugar_shard",
    "name": "Golden Sugar Shard of Illumination",
    "description": "These shimmering shards are fragments from a fallen star, infused with concentrated sugar. Holding one emits a warm glow and grants the wielder the ability to see clearly in even the darkest corners… or at least, they make things look pretty.",
    "category": "curiosities",
    "price": 8000,
    "icon": "✨",
    "stock": 5,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "provides bright light in a 15-foot radius",
      "detects illusions within the illuminated area",
      "slightly increases perception checks"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "glowing_snail",
    "levelRequirement": 9
  },
  "pokemon_item_lucky_charm_badge": {
    "id": "pokemon_item_lucky_charm_badge",
    "name": "Trainer’s Fortunate Emblem",
    "description": "Forged from a legendary Pokémon's scale and imbued with the spirit of good luck, this badge isn't just for show. It provides a small chance to avoid damage in battle and can even attract rare wild Pokémon – perfect for those who like to gamble! Wario bets you’ll lose it.",
    "category": "equipment",
    "price": 1200,
    "icon": "🍀",
    "stock": 38,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "chance to avoid damage in battle (5%)",
      "increased chance to encounter rare Pokémon",
      "provides a small boost to luck-based checks"
    ],
    "vendor": "league_store",
    "shippedBy": "delivery_drone",
    "levelRequirement": 7
  },
  "pokemon_item_potion_healing_aura": {
    "id": "pokemon_item_potion_healing_aura",
    "name": "Spectral Recovery Elixir",
    "description": "This shimmering potion isn’t just a quick heal; it emanates a soothing aura, slowly regenerating HP over time. It’s especially effective when combined with restorative techniques – or distracting your enemies with shiny objects! Wario's already taken a sip.",
    "category": "consumables",
    "price": 1800,
    "icon": "💧",
    "stock": 91,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "heal_hp_over_time (5 HP/second)",
      "increased healing potency",
      "provides a temporary shield against status effects"
    ],
    "vendor": "safari_shop",
    "shippedBy": "giant_parasect",
    "levelRequirement": 10
  },
  "doughnut_hole_echoing_shard": {
    "id": "doughnut_hole_echoing_shard",
    "name": "Resonance Shard",
    "description": "A fractured piece of the Doughnut Hole’s core, this shard pulses with a faint, unsettling energy. Holding it allows you to briefly perceive echoes of past events within the void—mostly just screaming and misplaced pastries, but sometimes something… more. It's unnerving!",
    "category": "curiosities",
    "price": 8500,
    "icon": "🔮",
    "stock": 23,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "reveals hidden passages (small chance)",
      "provides cryptic clues about the void's mysteries",
      "chance to attract minor void creatures"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Phantom Parceler",
    "levelRequirement": 5
  },
  "leclaire_isle_item_frosting_potion": {
    "id": "leclaire_isle_item_frosting_potion",
    "name": "Shimmering Sweet Surge",
    "description": "A bubbling concoction of enchanted frosting and crystallized sugar! This potion grants the drinker a temporary boost to their speed and agility, while also leaving them with an irresistible sugary aroma – beware the bees!",
    "category": "consumables",
    "price": 2300,
    "icon": "🍬",
    "stock": 18,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "increase movement speed by 10 feet for 2 turns",
      "grant +2 to dexterity checks",
      "causes a strong sugary scent that might attract unwanted attention (enemies)"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "delivery_beehive",
    "levelRequirement": 10
  },
  "midlands_item_engineered_grappling_hook": {
    "id": "midlands_item_engineered_grappling_hook",
    "name": "Cog & Chain Grapple",
    "description": "Forged by the Fractured Forge, this grappling hook is surprisingly effective – mostly because it's been violently modified with a few spare cogs and gears. It’s guaranteed to get you into trouble… or over a wall.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔗",
    "stock": 34,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Allows the user to grapple onto sturdy surfaces.",
      "Increases climbing speed by 50%",
      "Can be used to pull enemies closer (+2 to attack rolls)",
      "Risk of gear failure (10% chance per use)"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "hawk_delivery",
    "levelRequirement": 6
  },
  "midlands_item_whispering_scrolls": {
    "id": "midlands_item_whispering_scrolls",
    "name": "Fragments of the Silent Pact",
    "description": "These scrolls, recovered from a ruined noble’s library, seem to murmur secrets only those with a keen ear (and a healthy dose of paranoia) can decipher.  They might tell you where the treasure is… or lead you straight into a trap!",
    "category": "curiosities",
    "price": 800,
    "icon": "📜",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Provides a clue to the location of a hidden objective (50% chance)",
      "Grants +1 to Investigation checks when searching for clues.",
      "May trigger a random encounter with a ghostly figure",
      "Rolls a d6: On a 6, the scroll crumbles into dust."
    ],
    "vendor": "empire_exchange",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 4
  },
  "midlands_item_elixir_of_boldness": {
    "id": "midlands_item_elixir_of_boldness",
    "name": "Lionheart's Brew",
    "description": "This shimmering crimson elixir tastes suspiciously like fermented berries and sheer, unadulterated courage! Drink this potion to temporarily bolster your bravery - you might even challenge the Emperor to a staring contest (don’t actually do that).",
    "category": "consumables",
    "price": 1200,
    "icon": "🧪",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase strength: 5 for 6 turns",
      "grant resistance to fear effects: 4 turns",
      "chance of temporary charisma boost: 10%"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 7
  },
  "midlands_item_amulet_of_broken_trust": {
    "id": "midlands_item_amulet_of_broken_trust",
    "name": "The Shadow's Embrace",
    "description": "An amulet pulsating with a chilling darkness, rumored to have been crafted from the shattered remains of a noble’s oath. Wear this and you might gain the ability to sow discord amongst your foes – just don't be surprised if you start questioning *your* loyalties!",
    "category": "curiosities",
    "price": 120000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance to inflict confusion on target: 25%",
      "reduces enemy morale: 10%",
      "passive ability: +5 charisma (but at a cost…)"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "golem_carrier",
    "levelRequirement": 22
  },
  "the_edge_voidshard": {
    "id": "the_edge_voidshard",
    "name": "Echoes of the Abyss",
    "description": "This jagged shard pulses with a chilling energy, remnants of screams from dimensions beyond comprehension. Holding it brings unsettling visions and whispers of forgotten horrors; perfect for those brave (or foolish) enough to delve deeper into The Edge.",
    "category": "equipment",
    "price": 1800,
    "icon": "🔮",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases critical hit chance by 5%",
      "chance to inflict 'fear' on enemies (10%)",
      "grants +3 to willpower"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 6
  },
  "the_edge_chronal_orb": {
    "id": "the_edge_chronal_orb",
    "name": "Temporal Static",
    "description": "A swirling orb of fractured time, this curious trinket seems to resist the flow of reality. It emits a faint hum that can briefly accelerate or decelerate your movements – but be warned, prolonged use might unravel you entirely!",
    "category": "curiosities",
    "price": 950,
    "icon": "⏳",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "temporarily increases movement speed by 20% for 3 seconds",
      "chance to rewind time slightly (5%) on taking damage",
      "reduces enemy attack speed by 10%"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "winged_beetle",
    "levelRequirement": 4
  },
  "the_edge_void_locket": {
    "id": "the_edge_void_locket",
    "name": "Lost Memories of the Deep",
    "description": "This tarnished locket contains fragments of echoes trapped within a pocket dimension. Opening it reveals fleeting glimpses of lost souls and forgotten tragedies - an unsettling reminder that some things are best left undisturbed.",
    "category": "curiosities",
    "price": 600,
    "icon": "🖤",
    "stock": 75,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grants +1 to intelligence",
      "chance to inflict confusion on enemies (5%)",
      "provides a small bonus to perception checks"
    ],
    "vendor": "final_shop",
    "shippedBy": "snail",
    "levelRequirement": 2
  },
  "equestria_item_stirring_saddlebag": {
    "id": "equestria_item_stirring_saddlebag",
    "name": "Stirring Saddlebag of Culinary Chaos",
    "description": "This seemingly ordinary saddlebag is filled with bizarre and unpredictable ingredients! When opened, it randomly produces a mixture – sometimes delicious, sometimes… less so. Prepare for flavor explosions (and potential indigestion)!",
    "category": "consumables",
    "price": 800,
    "icon": "🥣",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to create a healing potion (20%)",
      "chance to create a poisonous concoction (10%)",
      "adds a random status effect (poison, confusion, etc.) on use"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Stable Delivery",
    "levelRequirement": 3
  },
  "the_edge_ironclad_sentinel": {
    "id": "the_edge_ironclad_sentinel",
    "name": "Ironclad Sentinel of the Watchers",
    "description": "A small, clockwork automaton built to guard forgotten pathways. It relentlessly attacks any living being it detects with a barrage of spinning blades and arcane energy – perfect for patrolling dark corridors or distracting monstrous foes.",
    "category": "equipment",
    "price": 8000,
    "icon": "🤖",
    "stock": 15,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "deals 2d6 piercing damage on hit",
      "chance to stun enemies (5%)",
      "immune to poison and disease"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "automated_drone",
    "levelRequirement": 6
  },
  "the_edge_chronal_fragments_faction": {
    "id": "the_edge_chronal_fragments_faction",
    "name": "Chronal Fragments - Order of the Shifting Sands",
    "description": "These shimmering shards are remnants from a failed attempt to stabilize temporal rifts. When combined, they grant access to minor time manipulation – useful for correcting mistakes or escaping certain doom…mostly.",
    "category": "faction",
    "price": 600,
    "icon": "⏳",
    "stock": 35,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to rewind time by 3 seconds (10%)",
      "slows enemy movement speed by 20% for 4 seconds",
      "restores 5 mana"
    ],
    "vendor": "final_shop",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 3
  },
  "mushroom_kingdom_item_sparkling_shroom": {
    "id": "mushroom_kingdom_item_sparkling_shroom",
    "name": "Sparkling Shroom",
    "description": "These bioluminescent mushrooms pulse with raw magical energy! Consuming one grants a burst of speed and temporary resistance to poison, perfect for dodging those pesky Goombas. Just don't eat too many – you’ll start bouncing uncontrollably!",
    "category": "consumables",
    "price": 250,
    "icon": "🍄",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_speed_3",
      "poison_resistance_10",
      "temporary_buff"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_delivery",
    "levelRequirement": 1
  },
  "animatopia_clawstrike_amulet": {
    "id": "animatopia_clawstrike_amulet",
    "name": "Clawstrike Amulet",
    "description": "This amulet, carved from the fang of a Razorclaw Boar, pulses with primal energy. It grants the wearer uncanny reflexes and a savage roar – perfect for intimidating smaller foes or launching surprise attacks!",
    "category": "equipment",
    "price": 18000,
    "icon": "🐾",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_attack_speed",
      "chance_to_apply_bleed",
      "roar_damage"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_parrot",
    "levelRequirement": 12
  },
  "animatopia_whispering_stone": {
    "id": "animatopia_whispering_stone",
    "name": "Whispering Stone of the Ancients",
    "description": "A smooth, grey stone that seems to murmur forgotten secrets. Hold it close and you might glean glimpses of Animatopia’s ancient past – though beware, some whispers are best left unheard!",
    "category": "curiosities",
    "price": 75000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "chance_to_receive_prophecy_scroll",
      "increased_wisdom",
      "minor_healing"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_beetle",
    "levelRequirement": 20
  },
  "almost_edge_item_echoing_charm": {
    "id": "almost_edge_item_echoing_charm",
    "name": "Echoing Charm of the Lost Steps",
    "description": "Crafted by the Edge Wanderers, this charm resonates with the fragmented memories clinging to the void. Wearing it allows you to briefly perceive pathways that shouldn't exist, and perhaps avoid a nasty surprise… or step directly into one.",
    "category": "equipment",
    "price": 800,
    "icon": "🗣️",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increased_perception",
      "chance_to_find_hidden_paths",
      "small_movement_speed_boost"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "wind_currents",
    "levelRequirement": 3
  },
  "almost_edge_item_liminal_token": {
    "id": "almost_edge_item_liminal_token",
    "name": "Token of the Liminal Trader",
    "description": "A polished obsidian token, cool to the touch and etched with unsettling patterns. This token grants you a minor discount at the Liminal Trader’s stall, but be warned – accepting their wares may subtly alter your memories.",
    "category": "faction",
    "price": 350,
    "icon": "🗝️",
    "stock": 18,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "discount_at_liminal_trader",
      "minor_chance_of_memory_distortion"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "silent_delivery",
    "levelRequirement": 1
  },
  "doughnut_hole_graviton_gauntlet": {
    "id": "doughnut_hole_graviton_gauntlet",
    "name": "Gravitational Grip",
    "description": "Forged from solidified gravity itself, this gauntlet allows you to subtly manipulate the pull of objects around you. It's not going to turn you into a black hole, but it *is* great for snagging those tricky loot drops!",
    "category": "equipment",
    "price": 7800,
    "icon": "🦾",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase_strength_by_3",
      "chance_to_pull_objects_towards_you_20%",
      "reduces_fall_damage_50%"
    ],
    "vendor": "void_vendor",
    "shippedBy": "warp_tunnel",
    "levelRequirement": 6
  },
  "earth_land_item_frostfang_dagger": {
    "id": "earth_land_item_frostfang_dagger",
    "name": "Frostfang Dagger",
    "description": "This dagger seems to have been forged in the heart of an ice dragon's breath! It chills the very air around it, inflicting a minor frostbite on your foes – perfect for those chilly dungeon crawls. Wario says it's 'surprisingly pointy,' and probably shouldn’t be used as a toothpick.",
    "category": "equipment",
    "price": 350,
    "icon": "🥶",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "deals 1d6 piercing damage",
      "chance to inflict frostbite (5%)",
      "increased critical hit chance (2%)"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "dragon_cart",
    "levelRequirement": 4
  },
  "earth_land_item_whispering_stone": {
    "id": "earth_land_item_whispering_stone",
    "name": "Whispering Stone of Echoes",
    "description": "Legend says this smooth, grey stone remembers every conversation and secret spoken near it. Hold it close during negotiations or interrogations – but be warned, sometimes it whispers unsettling truths!  It's rumored Wario tried to use it to get a better deal on turnips.",
    "category": "curiosities",
    "price": 180,
    "icon": "🔮",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "provides +1 to persuasion checks",
      "chance to reveal hidden information (10%)",
      "can be used to cast ‘Minor Illusion’ once per day."
    ],
    "vendor": "magic_shop",
    "shippedBy": "owl_messenger",
    "levelRequirement": 2
  },
  "earth_land_item_dragonscale_amulet": {
    "id": "earth_land_item_dragonscale_amulet",
    "name": "Dragonscale Amulet of Resilience",
    "description": "This amulet is crafted from actual scales shed by a young fire dragon – though it doesn’t smell *too* bad. It grants you resistance to fire damage and a slight boost to your defenses, perfect for facing those pesky flame-breathing lizards!  Wario probably tried to sell it as 'slightly burnt' turnips.",
    "category": "equipment",
    "price": 7800,
    "icon": "🔥",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grants resistance to fire damage",
      "increases armor class by 2",
      "chance to deflect incoming attacks (15%)"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_snail",
    "levelRequirement": 8
  },
  "kivotos_item_chrono_reset_watch": {
    "id": "kivotos_item_chrono_reset_watch",
    "name": "Chrono Reset Watch – Prototype Model",
    "description": "Wario wouldn't be caught dead with this, but some students need a little extra time. This watch allows you to rewind the last 5 seconds of your actions – great for dodging that clumsy professor or snagging the last slice of cake! Don’t abuse it, though, or reality might start glitching out.",
    "category": "equipment",
    "price": 7000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "rewind time (5 seconds)",
      "chance to create a minor temporal paradox (small damage)",
      "increased reaction speed +3%"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 9
  },
  "kivotos_item_personalized_aura_generator": {
    "id": "kivotos_item_personalized_aura_generator",
    "name": "Personalized Aura Generator - Model Beta",
    "description": "Feeling a little… bland? This device allows you to generate a custom aura, radiating colors and subtle magical effects. Choose from options like ‘Inspiring Courage,’ ‘Mystical Calm,’ or 'Pure Wario-esque Chaos’ – just be prepared for some confused glances.",
    "category": "premium",
    "price": 12000,
    "icon": "🌈",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "randomly grants a positive status effect (buff)",
      "increases charisma +10%",
      "chance to attract curious onlookers",
      "aura color changes based on party mood"
    ],
    "vendor": "club_supply",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 11
  },
  "midlands_item_potion_of_grim_resolve": {
    "id": "midlands_item_potion_of_grim_resolve",
    "name": "Elixir of Bitter Determination",
    "description": "A viscous, dark purple potion that tastes suspiciously like burnt turnips and regret. Drink this to bolster your courage - or at least pretend to be brave while enduring a truly awful taste.",
    "category": "consumables",
    "price": 1200,
    "icon": "🧪",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "restores 25 HP",
      "temporary resistance to fear effects",
      "grants +2 to saving throws against mind-altering magic"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "flying drake (delivery only)",
    "levelRequirement": 8
  },
  "midlands_item_obsidian_dice_of_fortune": {
    "id": "midlands_item_obsidian_dice_of_fortune",
    "name": "The Oracle's Gamble",
    "description": "These intricately carved dice seem to pulse with a faint, unsettling energy. Roll them for cryptic advice... or disastrous results! Wario recommends using these to settle arguments over who gets the last mushroom.",
    "category": "curiosities",
    "price": 3500,
    "icon": "🎲",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "randomly grants a small bonus (HP, skill check, etc.) or inflicts a minor penalty",
      "chance to trigger a random event (positive or negative)",
      "increases charisma by 1 for one round"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "magical teleportation",
    "levelRequirement": 10
  }
};
