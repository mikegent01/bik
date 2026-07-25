// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_068 = {
  "leclaire_isle_dwarven_rolling_pin": {
    "id": "leclaire_isle_dwarven_rolling_pin",
    "name": "Dwarven Rolling Pin of Resilience",
    "description": "The Dwarven Rolling Pin of Resilience is a stout, hand-forged tool from Le Cleraise Isle, crafted by dwarves who once tamed mountains and kneaded dough with equal skill. Its surface radiates a gentle warmth that can be felt through the skin, and it whispers tales of battles fought against both bread and baddies. When wielded in defense, this rolling pin delivers a stinging blow that can stun an opponent, while its sturdy frame provides resistance to bludgeoning attacks as if it were made from enchanted stone.",
    "category": "equipment",
    "price": 4100,
    "icon": "🔨",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Stunning Blow",
      "Bludgeon Resistance"
    ],
    "vendor": "dough_depot",
    "shippedBy": "stone_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stunning Blow",
        "rules": "When you use the rolling pin to make a melee attack against an enemy, there is a 30% chance that it will stun the target for 1 round. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Bludgeon Resistance",
        "rules": "The rolling pin grants you resistance to bludgeoning damage from melee weapons. This effect is permanent until the item is destroyed, at which point it ceases to function."
      }
    ],
    "levelRequirementReason": "This rolling pin is designed for all adventurers who might need a quick and effective tool in their arsenal.",
    "vendorReason": "Dough Depot, known for its vast array of culinary tools, naturally stocks this unique weapon for those seeking to protect themselves with the same skill they use to knead bread.",
    "shippingDetail": "The rolling pin is delivered via stone cart, ensuring it arrives safely and intact, protected by sturdy stones and straw.",
    "usage": {
      "activation": "Melee weapon attack as a bonus action or reaction (whichever you choose).",
      "duration": "Instantaneous for the Stunning Blow effect; permanent for Bludgeon Resistance.",
      "endsWhen": "The item is destroyed, at which point both effects are terminated.",
      "charges": "Unlimited uses until it is destroyed."
    },
    "priceReason": "This rolling pin offers a rare combination of utility and combat effectiveness, making it a valuable asset for any adventurer.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-24T00:02:42.989967+00:00",
    "aiReviewedAt": "2026-07-24T00:02:42.989967+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sugar_crystal_orb": {
    "id": "leclaire_isle_sugar_crystal_orb",
    "name": "Sugar Crystal Orb of Sweet Deception",
    "description": "The Sugar Crystal Orb of Sweet Deception hums with crystalline energy, its surface shimmering like spun sugar in the light of a full moon. Crafted from refined sugarcane and imbued with the essence of pastries long forgotten, this orb subtly bends reality to create an illusion that lures nearby creatures into a state of enchantment or distraction. It’s perfect for charming pastry chefs or distracting guard dogs, but beware—once entranced, even the most sensible creature may find itself acting in whimsical ways.",
    "category": "curiosities",
    "price": 14000,
    "icon": "🍬",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "charm",
      "illusionary_effect"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Magical Delivery Griffin",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illusory Charm",
        "rules": "The orb creates a subtle illusion that has a chance to charm creatures within 30 feet for 1 minute. The DC of this save is equal to 8 + the user's Charisma modifier. The effect can be ended by the creature using its action or if it takes damage."
      },
      {
        "title": "Illusionary Aura",
        "rules": "The orb radiates an aura that increases the user’s luck for up to one hour, granting advantage on saving throws and ability checks related to deception. This effect can be triggered once per short rest."
      }
    ],
    "levelRequirementReason": "Crafted from refined sugarcane, this orb requires a basic understanding of magic.",
    "vendorReason": "Sweet Supplies specializes in magical trinkets that enhance culinary and social interactions.",
    "shippingDetail": "Ships with haste, arriving within the week.",
    "usage": {
      "activation": "Passive effect when worn. Requires the user to be proficient in Deception.",
      "duration": "Illusory Charm lasts for 1 minute; Illusionary Aura lasts up to one hour per short rest.",
      "endsWhen": "The charm ends if the creature takes damage or uses its action to end it. The aura ends when the user stops wearing the orb.",
      "charges": "Unlimited, as long as the user is proficient in Deception."
    },
    "priceReason": "Balanced price for a rare and useful magical trinket that enhances social interactions without being overly powerful.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-24T00:02:57.902293+00:00",
    "aiReviewedAt": "2026-07-24T00:02:57.902293+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_golden_mane_brush": {
    "id": "equestria_item_golden_mane_brush",
    "name": "Golden Mane Brush of Regal Style",
    "description": "The Golden Mane Brush of Regal Style is a shimmering brush made from the finest crystal and etched with ancient runes. It is said to have been used by Princess Twilight Sparkle during her quest to unite Equestria. When wielded, it subtly enhances one’s appearance, granting an aura that intimidates foes and inspires allies within its vicinity. The touch of this brush leaves a regal elegance in its wake, making the bearer appear more majestic than ever before.",
    "category": "equipment",
    "price": 970,
    "icon": "👑",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Regal Aura",
      "Intimidate Boost"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "royal_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Regal Aura",
        "rules": "The wielder gains a +1 bonus to Charisma (Intimidation) checks and a +2 bonus to their Appearance saving throws for 1 minute. The effect ends if the wielder drops the brush or is incapacitated."
      },
      {
        "title": "Inspire Allies",
        "rules": "Once per short rest, the wielder can use an action to grant nearby allies within 30 feet a +1 bonus to their next saving throw against fear effects. This effect ends if the wielder drops the brush or is incapacitated."
      }
    ],
    "levelRequirementReason": "This item requires no specific level as it primarily enhances appearance and charisma, which are useful for lower-level adventurers.",
    "vendorReason": "The Crystal Empire is renowned for its craftsmanship and has long been associated with the magical artifacts used by royalty.",
    "shippingDetail": "Ships via Royal Messenger, ensuring safe and timely delivery to your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (recharges after a short or long rest)",
      "endsWhen": "The wielder drops the brush or becomes incapacitated",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item is priced at 1000 XP, reflecting its craftsmanship and magical properties that enhance charisma and intimidate foes.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-24T00:02:28.031291+00:00",
    "aiReviewedAt": "2026-07-24T00:02:28.031291+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_platearm": {
    "id": "connectopia_pioneer_platearm",
    "name": "Scrap-Forged Plate",
    "description": "The Scrap-Forged Plate is a testament to survival, crafted from salvaged machinery and pieced together by the hands of resourceful pioneers. Its dented surface not only provides surprising resilience but also hints at the countless battles it's endured. This armor offers modest protection against earth-based attacks, making it invaluable for those navigating treacherous terrains. Just be wary—its unique construction means it might obstruct your movements slightly, adding a touch of rustic charm to any adventurer’s ensemble.",
    "category": "equipment",
    "price": 4100,
    "icon": "🛡️",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "armor_3",
      "resistance_to_earth"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "wagon",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Armor +3",
        "rules": "The Scrap-Forged Plate provides an armor bonus of +3 to your AC, granting you enhanced protection against physical attacks."
      },
      {
        "title": "Resistance to Earth",
        "rules": "When you are targeted by a spell or effect with the earth descriptor, you have advantage on saving throws. Additionally, any damage from such effects is reduced by 2 points."
      }
    ],
    "levelRequirementReason": "Crafted for seasoned adventurers who require reliable protection against harsh environments and elemental threats.",
    "vendorReason": "The Pioneer Post specializes in items designed for those living on the edge, making this armor a natural fit for their inventory.",
    "shippingDetail": "Shipped by reliable wagon, ensuring safe delivery through rugged terrains. Allow one week for arrival from the nearest frontier outpost.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after a long rest or discarded",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from salvaged materials and designed for durability, this armor remains an excellent value despite its rarity.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T00:02:40.297787+00:00",
    "aiReviewedAt": "2026-07-24T00:02:40.297787+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_graviton_ring": {
    "id": "doughnut_hole_graviton_ring",
    "name": "Gravitational Resonance Ring",
    "description": "The Gravitational Resonance Ring, forged from the very essence of warped space-time, is a bizarre and powerful artifact. Its surface shimmers with an ethereal glow as it subtly warps local gravitational fields. Wearers can leap across chasms with ease or pull nearby foes into their grasp, making it a versatile tool for survival and combat. However, its unpredictable nature means that users must be cautious to avoid accidentally crushing their own feet in the process.",
    "category": "equipment",
    "price": 4100,
    "icon": "🌀",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Leap Across Gaps",
      "Pull Enemies"
    ],
    "vendor": "center_seller",
    "shippedBy": "Void Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Leap Across Gaps",
        "rules": "As a bonus action, you can manipulate gravity to leap up to 15 feet higher than normal. This effect requires concentration and lasts until the start of your next turn."
      },
      {
        "title": "Pull Enemies",
        "rules": "Once per short rest, you can use an action to exert a gravitational pull on one creature within 30 feet that you can see. The target must succeed on a DC 14 Strength saving throw or be pulled toward you until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The ring's manipulation of gravitational forces requires a degree of finesse and control that is only possible for a 6th-level spellcaster.",
    "vendorReason": "Center Seller specializes in rare and exotic items, including the Gravitational Resonance Ring, which they obtained from an ancient artifact dealer.",
    "shippingDetail": "Ships via the Void Courier within a week of purchase.",
    "usage": {
      "activation": "Bonus action or action",
      "duration": "Concentration (up to one minute) and Instantaneous",
      "endsWhen": "The effect ends if you lose concentration, are incapacitated, or use it again.",
      "charges": "Unlimited"
    },
    "priceReason": "The ring's balanced price reflects its limited utility and the expertise required to master its effects.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T00:04:58.480039+00:00",
    "aiReviewedAt": "2026-07-25T00:04:58.480039+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_anomaly_core": {
    "id": "doughnut_hole_anomaly_core",
    "name": "Singularity Seed",
    "description": "The Singularity Seed is a pulsating core of chaotic energy, its surface shimmering with an unstable, dark glow. When planted in the ground, it creates a small but potent anomaly that warps space-time around it, causing enemies to stumble and lose their footing. The seed itself seems to hum with latent power, almost as if it's waiting for the right moment to unleash its full potential, which can be both terrifying and exhilarating.",
    "category": "curiosities",
    "price": 14000,
    "icon": "💥",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "anomaly_creation",
      "enemy_confusion"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Anomaly Creation",
        "rules": "When planted, the Singularity Seed creates a small anomaly in the ground. The area within a 10-foot radius around the seed distorts and warps, dealing 1d4 force damage to any creature that enters or starts its turn there. The effect lasts for 1 minute."
      },
      {
        "title": "Enemy Confusion",
        "rules": "Enemies in the anomaly's area must make a DC 15 Wisdom saving throw or become disoriented, moving randomly and losing 20 feet of speed until the start of their next turn. The seed can only create one such effect at a time."
      }
    ],
    "levelRequirementReason": "The Singularity Seed is simple enough for even low-level adventurers to handle but still requires basic control and understanding.",
    "vendorReason": "Void Vendor specializes in exotic and dangerous items, making the Singularity Seed a natural fit for their inventory.",
    "shippingDetail": "The package is carefully sealed with dimensional tape to prevent any accidental activation during transit.",
    "usage": {
      "activation": "Planting the seed as an action.",
      "duration": "1 minute, or until destroyed by a creature entering its area.",
      "endsWhen": "The anomaly ends when a creature enters it or starts their turn there.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "The Singularity Seed is priced at 1000 XP due to its rarity and the potential for dangerous situations it might cause in combat.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-24T00:03:11.058511+00:00",
    "aiReviewedAt": "2026-07-24T00:03:11.058511+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_liminal_pact": {
    "id": "almost_edge_liminal_pact",
    "name": "Pact of the Liminal Trader",
    "description": "The Pact of the Liminal Trader is a tarnished silver medallion embossed with an unsettling smile, its surface etched with arcane runes. This ancient artifact allows you to briefly breach the boundaries between worlds, offering glimpses into hidden trade routes and forgotten deals. It grants you a chance to find concealed items within market stalls and improves your negotiation skills, making every deal you strike sweeter. Rumor has it, the medallion was once owned by Pauline, a legendary liminal trader whose shadowy dealings left her with a pact that binds her legacy to this very item.",
    "category": "faction",
    "price": 4100,
    "icon": "🤝",
    "stock": 34,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "hidden_trade_routes",
      "negotiation_skill"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "shifting_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Trade Routes",
        "rules": "As an action, you can use the Pact of the Liminal Trader to momentarily glimpse hidden trade routes and opportunities. You have advantage on Wisdom (Perception) checks made to find hidden or secret items within market stalls and shops for 1 hour. This effect ends if you are incapacitated."
      },
      {
        "title": "Improved Negotiation Skill",
        "rules": "For the duration of one trade session, your Charisma (Deception) and Charisma (Persuasion) checks related to negotiation or trading gain advantage. The effect lasts until the end of the next long rest or if you are hit by an attack."
      }
    ],
    "levelRequirementReason": "This pact is accessible to all, requiring no specific class or background, but it can be used effectively only after reaching at least first level.",
    "vendorReason": "The Liminal Trader specializes in items that blur the lines between worlds and reality, making this medallion a natural fit for their inventory.",
    "shippingDetail": "Delivered via the shifting portal, which occasionally causes a brief delay due to unpredictable trade winds.",
    "usage": {
      "activation": "action",
      "duration": "1 hour or until incapacitated",
      "endsWhen": "incapacitation or end of long rest",
      "charges": "unlimited"
    },
    "priceReason": "The price reflects the medallion's rarity and its ability to offer significant advantages in trade, negotiation, and exploration.",
    "priceOriginal": 6750,
    "priceReviewedAt": "2026-07-24T00:03:11.320435+00:00",
    "aiReviewedAt": "2026-07-24T00:03:11.320435+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_gravitron_boots": {
    "id": "doughnut_hole_gravitron_boots",
    "name": "Voidstep Boots",
    "description": "The Voidstep Boots are forged from solidified gravitational anomalies harvested near the mysterious Doughnut Hole, a region where gravity bends and twists in unpredictable ways. These boots allow you to defy the laws of physics momentarily, leaping with such force that it seems you can touch the stars or float above the deepest chasms without fear of falling into the void – just be wary; even the slightest misstep could send you plummeting into the abyss.",
    "category": "equipment",
    "price": 14000,
    "icon": "🚀",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "defy gravity",
      "aerial agility"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Defy Gravity",
        "rules": "As a bonus action, you can activate the boots to leap up to 15 feet higher than normal and float momentarily above the ground for 3 seconds. You gain resistance against falling damage but are vulnerable to being pushed or knocked prone. The effect ends if you make a melee attack while in midair."
      },
      {
        "title": "Aerial Agility",
        "rules": "While wearing these boots, your movement speed is increased by 10 feet for the duration of any short rest. You can also use an action to teleport up to 30 feet straight up or down without provoking opportunity attacks."
      }
    ],
    "levelRequirementReason": "The Voidstep Boots require a high level of control and mastery over one's surroundings, making them suitable only for seasoned adventurers.",
    "vendorReason": "Hole Hawker has the exclusive rights to sell these boots as they are known to have harvested the original gravitational anomalies used in their creation.",
    "shippingDetail": "The boots are carefully packaged and shipped via Dimensional Rift Courier, ensuring safe delivery through the most perilous of planes.",
    "usage": {
      "activation": "Bonus action to leap or float; action to teleport up to 30 feet vertically or horizontally.",
      "duration": "Instantaneous for leaping or floating; 10 feet movement speed increase during a short rest; teleportation effect is instantaneous.",
      "endsWhen": "The effect ends if you make a melee attack while in midair, the duration of the short rest ends, or after one use per day.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The Voidstep Boots are priced at 1000 XP due to their rarity and the specialized materials required for their forging.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:05:12.916453+00:00",
    "aiReviewedAt": "2026-07-25T00:05:12.916453+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_singularity_berry": {
    "id": "doughnut_hole_singularity_berry",
    "name": "Echo Bloom",
    "description": "The Echo Bloom is a pulsating berry that hums with the void's energy. When consumed, it grants you fleeting visions of past events, as if time itself bends to reveal forgotten echoes. However, prolonged exposure can unravel your sanity, leaving you in a state of existential dread. A rare find from the Center Seller, this berry is said to have been crafted through ancient rituals that echo the void's whispers.",
    "category": "consumables",
    "price": 970,
    "icon": "🔮",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Vision of the Past",
      "Sanity Restoration"
    ],
    "vendor": "center_seller",
    "shippedBy": "Void Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vision of the Past",
        "rules": "On activation as a bonus action, you gain insight into past events for 1 round. You can see and hear events from any point in time within your line of sight, but this vision is brief and fades after one minute."
      },
      {
        "title": "Sanity Restoration",
        "rules": "The berry partially restores sanity lost due to stress or mental strain. After consuming the Echo Bloom, you gain advantage on saving throws against being charmed until the end of your next short rest."
      }
    ],
    "levelRequirementReason": "This item is accessible to lower-level characters as it offers a unique insight into past events without overwhelming them with too much power.",
    "vendorReason": "The Center Seller specializes in rare and ancient artifacts, making the Echo Bloom an appropriate addition to their inventory.",
    "shippingDetail": "Delivery is swift but requires a special void seal for safe transport.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 round",
      "endsWhen": "The vision fades at the end of your next turn after activation, or if you take any action other than moving.",
      "charges": "Unlimited"
    },
    "priceReason": "The Echo Bloom's price reflects its rarity and the ancient rituals required to craft it, balancing its unique ability without overvaluing its effect.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-24T00:03:29.291369+00:00",
    "aiReviewedAt": "2026-07-24T00:03:29.291369+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_godly_chrono_donut": {
    "id": "doughnut_hole_godly_chrono_donut",
    "name": "Temporal Glaze",
    "description": "The Temporal Glaze is a donut of otherworldly origin, said to have been created by a baker who wandered through time. Its surface glows faintly with an ancient chronal energy, and each bite offers the power to manipulate time in small but potent ways: rewind your last action, or briefly pause reality around you. Wario's seal of approval ensures its quality, though only those of at least 1st level can afford this godly treat.",
    "category": "premium",
    "price": 990000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Rewind Last Action",
      "Brief Time Pause"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Chronal Shipping Vessel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Last Action",
        "rules": "As a reaction, you may rewind your last action. This effect has no cooldown but cannot be used in combat rounds where your turn was skipped due to the time pause. The rewind lasts for 3 seconds and resets any actions or effects initiated during that period."
      },
      {
        "title": "Brief Time Pause",
        "rules": "As a bonus action, you can briefly pause time around yourself. This effect creates a localized area of stillness with a 5-foot radius, lasting for 5 seconds. All creatures within the area are incapacitated but not unconscious. The effect has no save DC and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Even minor temporal manipulations require some level of magical aptitude.",
    "vendorReason": "The Void Vendor specializes in items that defy ordinary time and space, making the Temporal Glaze a perfect fit for their inventory.",
    "shippingDetail": "The donut must be shipped via Chronal Shipping Vessel to ensure it arrives with its time-manipulating properties intact.",
    "usage": {
      "activation": "Reaction (Rewind Last Action), Bonus Action (Brief Time Pause)",
      "duration": "Instantaneous (Rewind Last Action), 5 seconds (Brief Time Pause)",
      "endsWhen": "The effect ends when the duration expires or is interrupted by another action.",
      "charges": "Unlimited, but can only be used once per short or long rest."
    },
    "priceReason": "While not as powerful as other godly items, the Temporal Glaze's unique and versatile time-manipulating abilities justify its price in XP.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-24T00:03:58.397219+00:00",
    "aiReviewedAt": "2026-07-24T00:03:58.397219+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_potion_of_speedy_wario": {
    "id": "faerun_item_potion_of_speedy_wario",
    "name": "Potion of Speedy Wario",
    "description": "This bottle of Potion of Speedy Wario exudes a sweet strawberry scent and hints at the mischievous spirit of its creator. When consumed, you feel an immediate surge in speed, zipping through obstacles with ease. Your attacks become more precise, dealing an extra 2d6 damage to enemies in your path. Beware, for this boost lasts only three turns, after which you must slow down and face the consequences of your haste.",
    "category": "consumables",
    "price": 250,
    "icon": "🏃",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Increased Speed",
      "Enhanced Attack Damage"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "swift_falcon Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Speed",
        "rules": "You gain a +3 bonus to your movement speed for three turns. This effect ends if you take any action other than moving or if you are incapacitated."
      },
      {
        "title": "Enhanced Attack Damage",
        "rules": "For the duration of this potion, your melee attacks deal an additional 2d6 damage. This effect is lost if you attack an ally or if you drop to 0 hit points."
      }
    ],
    "levelRequirementReason": "This potion is designed for beginners who need a quick boost without the complexity of higher-level magic.",
    "vendorReason": "The Waterdeep Market often stocks items that appeal to adventurers looking for quick solutions and shortcuts.",
    "shippingDetail": "Ships via swift falcon courier, arriving within one day of purchase.",
    "usage": {
      "activation": "Consume the potion as a bonus action.",
      "duration": "Three turns from activation.",
      "endsWhen": "You take an action other than moving or become incapacitated; or you drop to 0 hit points.",
      "charges": "Unlimited, once per short rest."
    },
    "priceReason": "The price reflects the unique formula and the risk involved in brewing such a potion, as well as its limited duration and effects.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-24T00:03:41.801290+00:00",
    "aiReviewedAt": "2026-07-24T00:03:41.801290+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_chronos_fragment": {
    "id": "connectopia_chronos_fragment",
    "name": "Temporal Block Shard",
    "description": "The Temporal Block Shard is a jagged, iridescent fragment of shattered time, its edges etched with faint chronal patterns. Holding this shard briefly can slow down enemies’ movements, making them clumsy and vulnerable to attack. Alternatively, it allows the wielder to accelerate their own actions, granting a burst of speed and agility. However, one must handle it carefully; any mishandling could ripple the timeline itself, drawing the wrath of ancient timekeepers.",
    "category": "curiosities",
    "price": 64000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "slow_enemy_speed",
      "increase_action_speed"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "airship courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Slow Enemy Speed",
        "rules": "When activated as a bonus action, this shard slows an enemy's speed by half for 1 minute. The target must succeed on a DC 15 Dexterity saving throw or be incapacitated until the end of its next turn."
      },
      {
        "title": "Increase Action Speed",
        "rules": "Activating as a reaction allows you to increase your movement speed by 30 feet for 1 round. You can use this feature only once per short rest."
      }
    ],
    "levelRequirementReason": "This shard requires significant control over time magic, which is why it demands at least a 15th level to wield.",
    "vendorReason": "The Pioneer Post has a special arrangement with the temporal guardians who oversee this fragment's distribution.",
    "shippingDetail": "Ships via an airship courier, arriving within 1 week of order placement.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Instantaneous (slow enemy) and 1 round (increase speed)",
      "endsWhen": "The effect ends when the duration expires or the user is incapacitated.",
      "charges": "Unlimited, but can only be used once per short rest."
    },
    "priceReason": "This shard's price reflects its rarity and utility, balancing its powerful effects with a reasonable cost for players of appropriate level.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:05:10.298917+00:00",
    "aiReviewedAt": "2026-07-25T00:05:10.298917+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_echoing_dust": {
    "id": "almost_edge_echoing_dust",
    "name": "Echoing Dust",
    "description": "Echoing Dust is a shimmering, silvery powder that whispers secrets of forgotten conversations when scattered on surfaces. Its faint echoes can reveal hidden passages, as the subtle vibrations in walls and floors are brought to light. Sprinkled near traps, it can trigger them prematurely, alerting you to their presence before they activate. This dust is crafted from the ashes of old libraries and whispered by the wind through centuries-old ruins.",
    "category": "curiosities",
    "price": 4100,
    "icon": "🔊",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "reveal_hidden_passage",
      "trigger_trap"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Gravity Sling Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Passage",
        "rules": "When sprinkled on a stone or wooden surface, Echoing Dust creates an echo that reveals hidden passages within 10 feet. This effect is instantaneous and does not require action to activate."
      },
      {
        "title": "Trigger Trap",
        "rules": "Sprinkling the dust near a trap causes it to be triggered prematurely with a successful DC 15 Wisdom (Perception) check. The dust can only be used once per short or long rest and has no effect on traps that are already active."
      }
    ],
    "levelRequirementReason": "Echoing Dust is suitable for lower-level characters to aid in exploration without being overly powerful.",
    "vendorReason": "Edge Wanderer specializes in rare and arcane curiosities found on the fringes of the known world, making Echoing Dust a fitting addition to their inventory.",
    "shippingDetail": "Ships via Gravity Sling Express, ensuring safe delivery through the most secure routes available.",
    "usage": {
      "activation": "Instantaneous when sprinkled on surfaces or near traps",
      "duration": "Instantaneous effect; lasts until used",
      "endsWhen": "Effect ends immediately upon use",
      "charges": "Unlimited uses per short or long rest"
    },
    "priceReason": "The balanced price reflects the item’s rarity and utility, making it a valuable yet manageable asset for adventurers.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-24T00:04:52.362279+00:00",
    "aiReviewedAt": "2026-07-24T00:04:52.362279+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_chronometric_orb": {
    "id": "pokemon_item_chronometric_orb",
    "name": "Chronometric Orb of Temporal Distortion",
    "description": "The Chronometric Orb of Temporal Distortion pulses with a tempest of shifting light, its surface etched with ancient runes that whisper of paradoxes and untold mysteries. Crafted by the Time-Traveling Beetle from fragments of the Temporal Nexus, this orb allows you to rewind your last attack or dash forward in time for a fleeting instant, leaving enemies bewildered as they find their own strikes misaligned. Beware its misuse; every use risks creating temporal anomalies that could unravel the very fabric of reality.",
    "category": "curiosities",
    "price": 14000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Rewind Last Attack",
      "Temporal Dash"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Time-Traveling Beetle Express",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Rewind Last Attack",
        "rules": "As a reaction to being hit by an attack, you can rewind your last action taken. The attack is negated and the attacker must succeed on a DC 15 Dexterity saving throw or be stunned until the end of their next turn."
      },
      {
        "title": "Temporal Dash",
        "rules": "On your move, as a bonus action, you can dash forward in time for 30 feet. You gain advantage on your next attack roll and are immune to all movement-based effects for the duration of this dash. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 12 to handle the temporal distortions without risk.",
    "vendorReason": "The Safari Shop is known for its eclectic collection of unique and powerful artifacts, including time-related items like this Chronometric Orb.",
    "shippingDetail": "Ships via Time-Traveling Beetle Express; delivery may vary by temporal zone.",
    "usage": {
      "activation": "Reaction (Rewind Last Attack), Bonus Action (Temporal Dash)",
      "duration": "Instantaneous or until end of turn",
      "endsWhen": "The effect ends when the duration expires or you take another action on your turn.",
      "charges": "Unlimited, but each use increases the risk of creating a temporal anomaly."
    },
    "priceReason": "Balanced at 1000 XP to reflect its powerful time-manipulating abilities without being overpowered.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-24T00:04:27.998524+00:00",
    "aiReviewedAt": "2026-07-24T00:04:27.998524+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_ominous_amulet": {
    "id": "curiosity_ominous_amulet",
    "name": "Ominous Amulet of Whispers",
    "description": "The Ominous Amulet of Whispers is a dark and unsettling piece that feels as though it has been forged in the heart of some ancient, malevolent forge. The amulet whispers secrets when you least expect it, driving you mad if you listen too long. Despite its eerie nature, it grants you a +1 bonus to Perception checks and a 15% chance to detect traps, making it invaluable for sneaky scouts and explorers. Wario's skepticism aside, this is an item that could prove crucial in your next adventure.",
    "category": "curiosities",
    "price": 970,
    "icon": "🔮",
    "stock": 38,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "whispers of detection",
      "madness resistance"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispers of Detection",
        "rules": "When you make a Perception check to detect traps or hidden enemies, you gain a +1 bonus. Additionally, there is a 15% chance that the amulet will whisper a secret during this check."
      },
      {
        "title": "Madness Resistance",
        "rules": "You have advantage on saving throws against being frightened and charmed by creatures or effects of the fear school for as long as you wear the amulet. The whispers may drive you mad if you listen too closely, so use with caution."
      }
    ],
    "levelRequirementReason": "This amulet is designed to be accessible early in your adventuring career.",
    "vendorReason": "The chaos dealer specializes in items that are both dangerous and useful, making this amulet a fitting addition to their stock.",
    "shippingDetail": "Ships swiftly via the swift hawk courier, ensuring you receive your ominous amulet quickly.",
    "usage": {
      "activation": "Passive effect; whispers occur during Perception checks for traps or hidden enemies.",
      "duration": "Permanent until removed, but madness resistance only applies while worn.",
      "endsWhen": "The madness resistance ends when the wearer no longer wears the amulet.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price to reflect its unique combination of utility and potential for madness.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T00:04:26.411396+00:00",
    "aiReviewedAt": "2026-07-24T00:04:26.411396+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_shadowstrike": {
    "id": "warhammer_shadowstrike",
    "name": "Shadowstrike Warhammer",
    "description": "The Shadowstrike Warhammer exudes an oppressive aura, its darkened surface etched with runes that whisper of ancient shadows and forgotten horrors. This weapon can deal chilling damage to foes, and with every strike, a wave of fear sweeps through the battlefield, causing allies' enemies to falter. Crafted in the darkest forges by the hands of night's artisans, it is both a tool of destruction and a harbinger of dread.",
    "category": "equipment",
    "price": 4100,
    "icon": "🌑",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Fearful Strike",
      "Shadow Damage"
    ],
    "vendor": "fate_forge",
    "shippedBy": "dark_horse",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Fearful Strike",
        "rules": "When you hit an enemy with the warhammer, there's a 15% chance that they are frightened for 1 round. This effect has no save DC and can occur once per short rest."
      },
      {
        "title": "Shadow Damage",
        "rules": "The warhammer deals 1d6 necrotic damage on hit, which stacks with other damage types. The weapon must make a successful hit to deal this damage, and it regains one charge after a long rest."
      }
    ],
    "levelRequirementReason": "Crafted for those who can command the shadows, this warhammer requires a level 9 character to wield effectively.",
    "vendorReason": "Wario, the master of forge and shadow, ensures that only those with the right skills and courage receive this weapon.",
    "shippingDetail": "The dark horse delivers the Shadowstrike Warhammer through a shadowy courier service, ensuring it arrives at its destination just before nightfall.",
    "usage": {
      "activation": "On hit with the warhammer.",
      "duration": "Instantaneous; the fear effect lasts for one round.",
      "endsWhen": "The weapon's charge is expended or after a long rest.",
      "charges": "10 charges, recharged after a long rest."
    },
    "priceReason": "Crafted with rare materials and ancient craftsmanship, the Shadowstrike Warhammer justifies its moderate price in game currency.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:05:10.198361+00:00",
    "aiReviewedAt": "2026-07-25T00:05:10.198361+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronometric_orb": {
    "id": "almost_edge_item_chronometric_orb",
    "name": "The Lost Tick of Time",
    "description": "The Lost Tick of Time is a small, obsidian orb with a silver rim and an ancient symbol etched into its surface. When activated, it momentarily freezes time within a five-foot radius, allowing for a brief respite from the flow of moments. This frozen moment grants increased reaction speed, making you as nimble as a cat during this window. The orb is said to have been crafted by a long-forgotten civilization that sought to harness time itself.",
    "category": "curiosities",
    "price": 140000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "frozen_moment",
      "nimble_reaction"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Frozen Moment",
        "rules": "When activated as an action, the Lost Tick of Time creates a five-foot radius in which time is frozen for up to 1 minute. Any creature within this area can take one additional reaction per turn during its effect duration. This effect ends if a creature moves out of the area or if it is dispelled."
      },
      {
        "title": "Nimble Reaction",
        "rules": "For every round you remain within the radius of frozen time, your Dexterity (Acrobatics) checks and saving throws are made with advantage. This effect ends when the frozen moment duration expires."
      }
    ],
    "levelRequirementReason": "Even the simplest mage can recognize the power in such an item.",
    "vendorReason": "The Liminal Trader deals in ancient and forgotten artifacts, so they would have access to this relic of time.",
    "shippingDetail": "Delivered by the Temporal Courier with a special delivery that arrives at your doorstep within an hour of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute",
      "endsWhen": "A creature moves out of the area or it is dispelled",
      "charges": "Unlimited"
    },
    "priceReason": "The item’s rarity and limited availability justify its price, as it is a mythic relic with significant temporal power.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-24T00:04:42.386579+00:00",
    "aiReviewedAt": "2026-07-24T00:04:42.386579+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_potion_of_wario_gust": {
    "id": "earth_land_potion_of_wario_gust",
    "name": "Wario's Guaranteed Gust Potion!",
    "description": "Wario's Guaranteed Gust Potion! A shimmering, suspiciously fruity purple elixir that tastes like a mix of strawberry and the regret you feel after overeating. Drink it to unleash a miniature whirlwind capable of pushing back enemies, knocking them off cliffs, or simply causing chaos. The potent gust can be felt for 3 rounds as it blows in a 1.5-meter radius around you, making it perfect for quick escapes or strategic mischief.",
    "category": "consumables",
    "price": 980,
    "icon": "💨",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Wind Push",
      "Area Control"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wind Push",
        "rules": "When activated, Wario's Guaranteed Gust Potion creates a gust of wind that pushes back any creature within the 1.5-meter radius. The gust has a 20% chance to knock targets prone if they fail a DC 13 Strength saving throw."
      },
      {
        "title": "Area Control",
        "rules": "The gust's effect lasts for 3 rounds, during which it can be used up to three times per short or long rest. The wind is strong enough to disrupt the balance of creatures within its range, making it useful in tight spaces."
      }
    ],
    "levelRequirementReason": "This potion is accessible early on for players who wish to experiment with area control and strategic gusts.",
    "vendorReason": "Magic Shop stocks a variety of potions that can be used by adventurers of all levels, making it the perfect place for Wario's Guaranteed Gust Potion!",
    "shippingDetail": "Shipped via fast Delivery Drone, this potion is usually delivered within an hour.",
    "usage": {
      "activation": "Action",
      "duration": "3 rounds",
      "endsWhen": "After 3 rounds or when the user takes a short rest, long rest, or uses it again (up to three times per day)",
      "charges": "Recharge after each short or long rest"
    },
    "priceReason": "The potion's unique gust effect and limited daily usage justify its price of 1000 XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:05:24.616532+00:00",
    "aiReviewedAt": "2026-07-25T00:05:24.616532+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_godly_amulet_of_wario_luck": {
    "id": "earth_land_godly_amulet_of_wario_luck",
    "name": "Wario's Lucky Charm (Seriously)",
    "description": "Wario's Lucky Charm (Seriously) is an amulet forged from ancient earth and blessed by a surly elemental. Crafted with iron ore from the heart of the earth, it grants its wearer a 30% chance to double their loot during exploration. The charm also increases critical hit chances by 15%, ensuring your attacks land more fiercely. Should misfortune strike, it provides resistance against curses, nullifying them in half of all cases.",
    "category": "premium",
    "price": 1700000,
    "icon": "🍀",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "doubles loot",
      "increased critical hit chance"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Royal Griffin Delivery Service",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Doubled Loot",
        "rules": "Passive effect that increases the chance of doubling your treasure finds by 30%. This effect does not stack with other bonuses to find treasure."
      },
      {
        "title": "Increased Critical Hit Chance",
        "rules": "Increases critical hit chance by 15% for all attacks. This effect persists until the end of your next turn and can only be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This amulet requires a high level to wield effectively, as it taps into primal earth magic.",
    "vendorReason": "The Earth Emporium specializes in items crafted from the earth and holds artifacts blessed by elemental spirits.",
    "shippingDetail": "Ships within one week, with expedited delivery for an additional cost.",
    "usage": {
      "activation": "Passive effect.",
      "duration": "Persistent until end of next turn or until used again.",
      "endsWhen": "Effect ends when the wearer completes a long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This amulet's price reflects its godly rarity and the raw materials needed for such an item.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-24T00:05:07.498689+00:00",
    "aiReviewedAt": "2026-07-24T00:05:07.498689+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_izumi_amulet": {
    "id": "teyvat_item_izumi_amulet",
    "name": "Izumi Amulet of Temporal Distortion",
    "description": "The Izumi Amulet of Temporal Distortion is a shimmering artifact forged from the essence of Izanami's tears. Its surface pulses with temporal energy, subtly warping time around its wearer. This amulet grants +5% damage reduction and a 10% chance to rewind your previous action in combat, allowing for a brief moment of second-guessing. The core of the amulet hums with ancient magic, whispering tales of Izanagi's battles long past.",
    "category": "curiosities",
    "price": 4100,
    "icon": "⏳",
    "stock": 21,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Temporal Shield",
      "Rewind Action"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Sea Serpent",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Temporal Shield",
        "rules": "The wearer gains a +5% damage reduction while wearing this amulet. This effect is passive and applies automatically."
      },
      {
        "title": "Rewind Action",
        "rules": "Once per short rest, the wearer can use an action to rewind their previous action in combat for 1 round. They must re-roll initiative and take a new action on their next turn. If this causes them to act after the enemy's turn, they lose the benefit of the rewind."
      }
    ],
    "levelRequirementReason": "The amulet requires a level 6 character due to its complex temporal magic.",
    "vendorReason": "Izumi Amulets are highly sought after by the elite, and Inazuma Imports is known for delivering rare artifacts from Teyvat.",
    "shippingDetail": "The amulet is carefully delivered via a Sea Serpent courier, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Once per short rest to rewind the previous action.",
      "duration": "Instantaneous for the rewind effect; passive damage reduction applies continuously while worn.",
      "endsWhen": "The effect ends when the wearer takes a long rest or loses consciousness.",
      "charges": "Unlimited, but the effect can only be used once per short rest."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rare and powerful temporal properties, suitable for a level 6 character.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-24T00:05:09.916010+00:00",
    "aiReviewedAt": "2026-07-24T00:05:09.916010+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_archon_favor": {
    "id": "teyvat_item_archon_favor",
    "name": "Archon Favor - A Taste of Justice",
    "description": "A delicate, magically preserved sweet treat from Teyvat, rumored to be a favorite of the Seven Archons themselves. This confectionary is said to bring divine favor to those who partake, whispering secrets and unlocking hidden dialogue options with NPCs – perfect for when you need that extra touch of persuasion or divine intervention. A taste of justice in every bite, this treat is as sweet as it is potent, granting a temporary boost to Charisma and enhancing the chance of successful persuasion checks.",
    "category": "consumables",
    "price": 250,
    "icon": "🍬",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Charisma Boost",
      "Enhanced Persuasion"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "cargo_ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "Eating this treat grants you advantage on Charisma checks for 3 turns. This effect is instantaneous upon consumption and does not require any action."
      },
      {
        "title": "Enhanced Persuasion",
        "rules": "While consuming this treat, your chance of successfully making a persuasion check increases by +5%. The effect lasts until the start of your next turn after you finish eating it. This boost is cumulative with other similar effects."
      }
    ],
    "levelRequirementReason": "This sweet treat is accessible to all adventurers, regardless of level, as its divine favor is available to everyone.",
    "vendorReason": "Liyue Harbor is known for its connections with the Seven Archons and often stocks items from their domains.",
    "shippingDetail": "Ships are frequently delayed by typhoons in Teyvat, so expect a few extra days for delivery.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "3 turns of Charisma boost and until the start of your next turn after finishing eating",
      "endsWhen": "The effect ends when you finish consuming the treat or if you use an action to dismiss it early",
      "charges": "Unlimited uses"
    },
    "priceReason": "This sweet treat is crafted with divine ingredients and carries a powerful enchantment, making its price worth every coin.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-24T00:05:33.291491+00:00",
    "aiReviewedAt": "2026-07-24T00:05:33.291491+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_harmonious_scroll": {
    "id": "equestria_item_harmonious_scroll",
    "name": "Scroll of Unified Harmony",
    "description": "The Scroll of Unified Harmony radiates a soft glow, its parchment woven from threads of friendship and harmony. When unrolled, it weaves a soothing aura that pacifies even the most irritable creatures, bolstering your party's morale and granting temporary resilience against fear. This ancient relic is said to have been crafted by the Alicorns themselves during Equestria’s golden age, making it a prized possession among those who value peace and unity.",
    "category": "consumables",
    "price": 980,
    "icon": "🎶",
    "stock": 87,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "restore_morale",
      "resistance_to_fear"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "magic_delivery",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Restore Morale",
        "rules": "When activated as an action or reaction, this scroll grants each friendly creature within a 30-foot radius temporary hit points equal to your spellcasting ability modifier (plus your proficiency bonus if you have one). This effect lasts for 1 minute."
      },
      {
        "title": "Resistance to Fear",
        "rules": "Each creature within the same area gains advantage on saving throws against being frightened. This effect also lasts for 1 minute, and each creature can benefit from it only once per long rest."
      }
    ],
    "levelRequirementReason": "This scroll requires at least second-level spellcasting ability to use effectively.",
    "vendorReason": "The ponies of Ponyville are known for their expertise in ancient magic, making them the perfect vendor for such a sacred relic.",
    "shippingDetail": "The scroll is delivered via the fastest and most reliable magical means available, ensuring it reaches its destination without delay.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "1 minute per use",
      "endsWhen": "At the end of a long rest or if used again on the same creature within the duration period",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The scroll’s rarity and historical significance justify its price, as it is not just an item but a piece of Equestria's lore.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T00:05:37.244313+00:00",
    "aiReviewedAt": "2026-07-24T00:05:37.244313+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_elemental_amulet": {
    "id": "equestria_item_elemental_amulet",
    "name": "Amulet of Equestrian Balance",
    "description": "The Amulet of Equestrian Balance is crafted from the shimmering quartz of the Crystal Empire, forged by artisans who have mastered the elements themselves. This amulet channels the raw magic of Equestria's elements, providing a steady stream of power and protection to its wearer. It grants a constant supply of mana regeneration and a chance to reflect incoming damage, ensuring that the wielder remains both powerful and resilient in battle.",
    "category": "equipment",
    "price": 14000,
    "icon": "💎",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "mana_regeneration",
      "elemental_reflection"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "royal_guard_carrier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Mana Regeneration",
        "rules": "The wearer regenerates 1d4 + Constitution modifier mana per long rest. This effect is passive, providing a continuous supply of mana."
      },
      {
        "title": "Elemental Reflection",
        "rules": "There is a 10% chance each time the wearer takes damage to reflect half of that damage back to the attacker. This effect has a maximum of three uses per day and resets after a long rest."
      }
    ],
    "levelRequirementReason": "The complexity of the amulet's magic requires a high degree of skill and magical prowess.",
    "vendorReason": "The Crystal Empire artisans are renowned for their mastery of elemental magic, making this amulet one of their finest creations.",
    "shippingDetail": "Ships via the Royal Guard Carrier with a 2-day delivery time and an additional 10% insurance coverage.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous, lasting until used or interrupted by other effects.",
      "endsWhen": "The wearer ceases to wear the amulet or it is destroyed in battle.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's unique balance of magical benefits and its rarity.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-24T00:06:04.975216+00:00",
    "aiReviewedAt": "2026-07-24T00:06:04.975216+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_seraphina_scepter": {
    "id": "midlands_item_seraphina_scepter",
    "name": "The Scepter of Silent Command",
    "description": "The Scepter of Silent Command, forged in the heart of a collapsing temple, exudes an aura of unsettling authority that can command lesser spirits and instill fear into the hearts of those nearby. Its wielder gains a +2 bonus to Charisma (Intimidation) checks and can attempt to stun creatures within 30 feet with a successful attack roll at a DC of 18. Rumors suggest it attracts unwanted attention from celestial beings, making it a dangerous yet coveted tool for those seeking dominance.",
    "category": "premium",
    "price": 990000,
    "icon": "👑",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "command lesser spirits",
      "aura of fear"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "celestial messenger",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Command Lesser Spirits",
        "rules": "The wielder can use an action to issue commands to one willing lesser spirit within 60 feet. The spirit must succeed on a Wisdom saving throw (DC 18) or be unable to perform tasks other than those directly related to the command for up to 1 hour."
      },
      {
        "title": "Aura of Fear",
        "rules": "The scepter emits an aura that affects all creatures within 30 feet. These creatures must succeed on a Wisdom saving throw (DC 16) or become frightened until the start of their next turn unless they take some action other than moving out of the area."
      }
    ],
    "levelRequirementReason": "The Scepter requires significant magical power to wield effectively, thus a level requirement is necessary.",
    "vendorReason": "The Empire Exchange trades in artifacts with complex and dangerous magic, making the Scepter of Silent Command a fitting addition.",
    "shippingDetail": "Ships via a celestial courier, ensuring safe delivery but subject to unpredictable delays due to divine whims.",
    "usage": {
      "activation": "Action or Reaction (to command spirits)",
      "duration": "Instantaneous for commanding spirits; 1 hour for the aura of fear",
      "endsWhen": "The spirit becomes unwilling or the aura fades when a creature moves out of its range",
      "charges": "Unlimited, but only one command can be given per use"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's unique and potentially dangerous abilities.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-24T00:06:12.585734+00:00",
    "aiReviewedAt": "2026-07-24T00:06:12.585734+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_mushroom_of_forgetfulness": {
    "id": "middle_earth_mushroom_of_forgetfulness",
    "name": "Mushroom of Forgetfulness",
    "description": "The Mushroom of Forgetfulness, a luminescent orb that glows faintly like the embers of a dying campfire, emits an aroma reminiscent of old books and forgotten dreams. Its consumption grants you three turns of confusion, allowing you to evade unwanted conversations or temporarily lose track of your surroundings. The mushroom's taste is surprisingly delightful, though it leaves a lingering unease in its wake. Be wary; there's a 10% chance that after consuming it, you might inadvertently forget the location of a crucial quest objective.",
    "category": "consumables",
    "price": 980,
    "icon": "🍄",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Forgets a Quest Objective (Rare)",
      "Confusion"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Forgets a Quest Objective",
        "rules": "There is a 10% chance that after consuming the mushroom, you may forget one specific quest objective. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Confusion",
        "rules": "You are stunned for three turns (action surge or reaction available to counter). During this time, you have disadvantage on attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "This mushroom is accessible to all adventurers as it can be found in various parts of Middle-earth.",
    "vendorReason": "The Shire Shop stocks this item because it's a popular choice for travelers who want to avoid awkward conversations or temporarily forget their worries.",
    "shippingDetail": "Shipped via the Pony Express, ensuring swift delivery to your doorstep within three days.",
    "usage": {
      "activation": "Eaten as a consumable",
      "duration": "Three turns of confusion; ends when the effect is overcome or ends naturally",
      "endsWhen": "The effect lasts until the end of your next short or long rest, or it can be ended by an action or reaction to counteract.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its uncommon rarity and the unique risk it poses.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-24T00:06:09.738064+00:00",
    "aiReviewedAt": "2026-07-24T00:06:09.738064+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_scroll_of_darkness": {
    "id": "middle_earth_scroll_of_darkness",
    "name": "Scroll of Darkness",
    "description": "The Scroll of Darkness is a brittle, ink-stained parchment that shimmers with an unnatural chill when unrolled. The scroll's edges glow faintly with dark energies, whispering of ancient and forbidden lore. Unleashing its power requires no words, only the act of unfolding it; in an instant, it unleashes a wave of absolute darkness that engulfs all within its 15-foot radius, plunging the area into eternal night and terrorizing those caught unawares.",
    "category": "forbidden",
    "price": 64000,
    "icon": "🌑",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Darkness Aura",
      "Blinding Shadow"
    ],
    "vendor": "elven_market",
    "shippedBy": "shadowfax",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Darkness Aura",
        "rules": "When activated, the Scroll of Darkness creates a 15-foot radius sphere of darkness. All creatures within this area are blinded until they succeed on a DC 17 Constitution saving throw. The scroll can be used only once per long rest."
      },
      {
        "title": "Blinding Shadow",
        "rules": "There is a 20% chance that the darkness will also blind a single target within the area for 1 minute, provided they fail their save. This effect cannot occur more than once per day."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to control and channel such dark magic effectively.",
    "vendorReason": "The Elven Market often deals in forbidden knowledge, and this scroll is a relic of ancient elven sorcery.",
    "shippingDetail": "Shipped by the swift steed Shadowfax, known for delivering rare and powerful artifacts swiftly to their destination.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until a creature succeeds on its save or leaves the area.",
      "endsWhen": "The target saves successfully or exits the darkness area.",
      "charges": "Unlimited uses, recharged after a long rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its powerful and rare nature without being overpowered for its level.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-24T00:06:29.307909+00:00",
    "aiReviewedAt": "2026-07-24T00:06:29.307909+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_obsidian_mirror": {
    "id": "the_edge_obsidian_mirror",
    "name": "Reflections of Ruin",
    "description": "The Reflections of Ruin is a dark obsidian mirror encrusted with rusted metal and strange runes. When you gaze into it, fleeting visions of potential futures ripple before your eyes, each more terrifying than the last. The mirror's surface hums with malevolent energy, occasionally reflecting minor damage to those who stare too long, causing temporary blindness or nausea. Wario warns that once you look away, the visions linger for a moment in your mind.",
    "category": "curiosities",
    "price": 250,
    "icon": "🪞",
    "stock": 55,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "fleeting_futures",
      "minor_damage_reflection"
    ],
    "vendor": "final_shop",
    "shippedBy": "giant_spider",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fleeting Futures",
        "rules": "As an action, the user gazes into the mirror to see one potential future. The vision lasts for 1 minute and can be interrupted by a successful DC 12 Wisdom saving throw. Reaching out or touching the mirror during this time causes the effect to end immediately."
      },
      {
        "title": "Minor Damage Reflection",
        "rules": "If the user gazes into the mirror for more than 10 seconds, they must make a DC 14 Constitution saving throw or take 1d6 points of damage and be blinded for 1 minute. The mirror can only cause this effect once per day."
      }
    ],
    "levelRequirementReason": "The mirror's malevolent energy requires the user to have some experience in dealing with dangerous artifacts.",
    "vendorReason": "Final Shop stocks a wide range of curiosities, including this unsettling yet intriguing artifact.",
    "shippingDetail": "The giant spider courier delivers the item swiftly but is known to leave a trail of minor webbing in its wake.",
    "usage": {
      "activation": "action",
      "duration": "1 minute or until interrupted",
      "endsWhen": "interrupted by touching the mirror, successful saving throw, or completion of the effect duration",
      "charges": "unlimited"
    },
    "priceReason": "The Reflections of Ruin's price reflects its rare and dangerous nature, offering a glimpse into potential futures at a steep cost.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-24T00:06:23.455567+00:00",
    "aiReviewedAt": "2026-07-24T00:06:23.455567+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_mushroom_of_eldoria": {
    "id": "middle_earth_mushroom_of_eldoria",
    "name": "Eldoria's Delightful Fungus",
    "description": "Eldoria's Delightful Fungus radiates an otherworldly glow, its cap shimmering with ancient runes. Consumed, it grants a surge of vitality, bolstering your stamina for hours and leaving you with a refreshing aroma that lingers on your skin like the scent of wild meadows. Legend has it that those who partake in this fungi walk tall, their steps light as if they've been imbued with the very essence of Eldoria itself.",
    "category": "consumables",
    "price": 4100,
    "icon": "🍄",
    "stock": 78,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increase_stamina_5",
      "grant_pleasant_smell_30"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Stamina",
        "rules": "Consume Eldoria's Delightful Fungus to gain a +5 bonus to your Constitution saving throws and a temporary increase in stamina for up to 4 hours. The effect ends if you consume any food or drink other than water."
      },
      {
        "title": "Pleasant Smell",
        "rules": "Upon consumption, the mushroom bestows an olfactory treat of refreshing scents that persist for 30 minutes, granting a +2 bonus to Persuasion checks made within this time. The effect is negated if you are in an environment with strong odors."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurer can benefit from Eldoria's Delightful Fungus, providing a quick boost of stamina and confidence.",
    "vendorReason": "The Shire Shop stocks this rare mushroom as a cherished local delicacy that travelers often seek for its rejuvenating properties.",
    "shippingDetail": "Shipped by the Pony Express, known for their reliable and swift deliveries of exotic goods from across Middle-earth.",
    "usage": {
      "activation": "Eaten as a consumable item",
      "duration": "4 hours or until consumed food/drink taken (whichever comes first)",
      "endsWhen": "Consumption of food or drink other than water, or after the stated duration",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity and origin of Eldoria's Delightful Fungus justify its price point, offering a potent combination of stamina boost and olfactory delight.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-24T00:06:42.961459+00:00",
    "aiReviewedAt": "2026-07-24T00:06:42.961459+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_scroll_of_forgotten_curses": {
    "id": "middle_earth_scroll_of_forgotten_curses",
    "name": "Grimoire of Lost Tongues",
    "description": "The Grimoire of Lost Tongues is bound in dragonhide parchment, its pages inscribed with ancient runes that shimmer faintly under the light of a full moon. This forbidden tome contains curses so potent they can twist reality itself; each whispering incantation has a chance to summon an irritable goblin that disrupts your next action. The text's power is such that it grants a modest increase in mana regeneration, allowing for longer spells without rest.",
    "category": "forbidden",
    "price": 980,
    "icon": "📜",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "summons_irritable_goblin",
      "increases_mana_regeneration"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "flying_carpet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summons Irritable Goblin",
        "rules": "When this spell is cast, there is a 20% chance that an irritable goblin is summoned to disrupt the caster's next action. The goblin has AC 14 and deals 3d6 poison damage on hit with a bite attack. It has advantage on saving throws against being charmed or frightened by the user."
      },
      {
        "title": "Increased Mana Regeneration",
        "rules": "The user gains +5 mana regeneration per long rest, allowing for more potent spellcasting without overexertion. This effect lasts until the next short rest or when the caster is hit by a melee attack."
      }
    ],
    "levelRequirementReason": "Even novice mages should be wary of this forbidden tome; its power can be dangerous in inexperienced hands.",
    "vendorReason": "The dwarves, ever cautious and aware of the dangers of magic, provide this item for those who truly understand the risks.",
    "shippingDetail": "Delivered swiftly by enchanted flying carpet, ensuring the Grimoire arrives intact and in time for your next night's work.",
    "usage": {
      "activation": "As an action or bonus action",
      "duration": "Instantaneous",
      "endsWhen": "The goblin is dispelled or the caster takes a melee attack",
      "charges": "Unlimited, but each use must be prepared in advance"
    },
    "priceReason": "This price reflects the item's forbidden nature and potent effects that could easily spiral out of control.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-24T00:06:46.065764+00:00",
    "aiReviewedAt": "2026-07-24T00:06:46.065764+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_void_blade": {
    "id": "almost_edge_void_blade",
    "name": "Void-Touched Edge",
    "description": "The Void-Touched Edge is a wickedly curved blade forged from solidified darkness, its surface etched with swirling void runes that whisper of the eternal void. When drawn, it hums ominously and leaves chilling trails of emptiness in its wake. This weapon whispers of the void, dealing an additional 5 points of slashing damage on every strike, and has a chance to instill fear in foes, reducing their attack speed by 10%.",
    "category": "equipment",
    "price": 4100,
    "icon": "🔪",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Additional Slashing Damage",
      "Chance to Fear"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Void Serpent Delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Additional Slashing Damage",
        "rules": "When the Void-Touched Edge strikes a target, it deals an additional 5 points of slashing damage. This effect is not negated by any form of resistance or immunity."
      },
      {
        "title": "Fear",
        "rules": "There is a 10% chance that when you hit with this weapon, the target must succeed on a DC 12 Wisdom saving throw or become frightened for 1 minute. During this time, the target has disadvantage on attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "The Void-Touched Edge's arcane power requires the wielder to be at least level 6 to channel its full potential.",
    "vendorReason": "The Void Merchant is known for dealing in the most exotic and dangerous items, including weapons imbued with dark magic like the Void-Touched Edge.",
    "shippingDetail": "Due to its volatile nature, this item must be shipped by the Void Serpent Delivery service to ensure safe transport.",
    "usage": {
      "activation": "On hit as part of a melee attack action",
      "duration": "Instantaneous effect per strike",
      "endsWhen": "The weapon's charge is expended after 5 successful hits, at which point it must be recharged through a lengthy ritual performed by a 10th-level warlock or higher.",
      "charges": "5 uses"
    },
    "priceReason": "This price reflects the blade's rare crafting materials and its unique ability to instill fear in opponents, making it a valuable asset for any adventurer.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-24T00:06:56.751603+00:00",
    "aiReviewedAt": "2026-07-24T00:06:56.751603+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_shadows_whisper": {
    "id": "faerun_item_shadows_whisper",
    "name": "Whispering Skull of Vorlag",
    "description": "The Whispering Skull of Vorlag, a gnarled and unsettling relic carved from the bones of an ancient lich, murmurs in a voice that seems to echo through time itself. It whispers secrets of lost treasures and forgotten tombs, but beware—its counsel is cryptic and often unreliable. The skull's murmurings are said to be most potent when one least expects it, especially during moments of grave decision-making. Listen too long, and you might begin to see things that aren't there, like the ghostly visage of a mischievous imp or the shadowy outline of a forgotten foe.",
    "category": "curiosities",
    "price": 14000,
    "icon": "💀",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "whispering counsel",
      "detects hidden tombs"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying carpet",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Whispering Counsel",
        "rules": "As an action, you can ask the skull for advice on a decision. The DM rolls a d20 and adds your Intelligence modifier. On a result of 15 or higher, you receive cryptic but useful guidance. On a failure, the advice is misleading, leading to a disadvantage on any roll related to the decision."
      },
      {
        "title": "Detects Hidden Tombs",
        "rules": "The skull can detect hidden tombs within 30 feet of you as an action. It emits a faint glow when it finds one and provides its location. This effect lasts for 1 minute, after which the skull must rest for at least 8 hours before being used again."
      }
    ],
    "levelRequirementReason": "The skull's necromantic power is too great for lower-level characters, requiring a minimum character level to wield it responsibly.",
    "vendorReason": "Vorlag was once an associate of Baldur, and his relics are sold in the bazaar as tokens of respect.",
    "shippingDetail": "The skull is carefully wrapped to prevent its murmuring from disturbing the cargo during transit.",
    "usage": {
      "activation": "As an action or bonus action",
      "duration": "Instantaneous for Whispering Counsel, 1 minute for Detects Hidden Tombs",
      "endsWhen": "On failure of a check, after duration ends, or when used again without resting",
      "charges": "Unlimited"
    },
    "priceReason": "The skull's power and rarity justify its moderate price.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-24T00:07:04.811467+00:00",
    "aiReviewedAt": "2026-07-24T00:07:04.811467+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_sparkle_granules": {
    "id": "connectopia_sparkle_granules",
    "name": "Glimmering Grit of the Gears",
    "description": "The Glimmering Grit of the Gears are tiny, shimmering granules that sparkle with an ancient clockwork magic. Sprinkled on your tools during crafting or repair work, they grant a burst of efficiency and precision, speeding up the process by +2 to skill checks for one hour. The granules’ origin is shrouded in mystery; legend says they are remnants from a long-lost city that once powered itself with intricate gears and cogs. Beware: their magic can make you slightly dizzy.",
    "category": "consumables",
    "price": 250,
    "icon": "✨",
    "stock": 91,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "crafting_efficiency",
      "temporary_dizziness"
    ],
    "vendor": "craft_corner",
    "shippedBy": "mechanical_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crafting Efficiency",
        "rules": "When sprinkled on tools, this granule grants a +2 bonus to one skill check per hour. The effect is instantaneous and lasts for one hour."
      },
      {
        "title": "Temporary Dizziness",
        "rules": "While the efficiency boost is active, you suffer from a minor dizziness that imposes disadvantage on Concentration checks until the effect ends or you rest."
      }
    ],
    "levelRequirementReason": "This item's magic enhances basic crafting tasks without requiring any advanced skill.",
    "vendorReason": "Craft Corner is known for its vast array of tools and supplies that aid in the everyday needs of blacksmiths, tinkerers, and engineers who can benefit from these granules.",
    "shippingDetail": "The mechanical drone delivers the Grit with a small delay due to its intricate nature; it is recommended to order ahead for important projects.",
    "usage": {
      "activation": "As an action, sprinkle on tools during crafting or repair work.",
      "duration": "One hour per use.",
      "endsWhen": "The effect ends when the one-hour duration expires or the item runs out of uses.",
      "charges": "Unlimited"
    },
    "priceReason": "The granules are crafted from rare clockwork remnants and require significant magical effort to produce, justifying their high price.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-24T00:07:01.095583+00:00",
    "aiReviewedAt": "2026-07-24T00:07:01.095583+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_lantern": {
    "id": "connectopia_pioneer_lantern",
    "name": "Lumiflux Beacon",
    "description": "The Lumiflux Beacon is a lantern forged from polished obsidian and brass, its core glows with an ethereal violet light. Crafted by the pioneering postmasters of Connectopia, this beacon not only illuminates the darkest corners but also emits a soothing hum that calms restless spirits. It's said to attract curious glow-bugs, creating a mesmerizing dance of light in the night sky; however, those who gaze too long might see fleeting visions of the past.",
    "category": "equipment",
    "price": 14000,
    "icon": "💡",
    "stock": 18,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "light",
      "attracts_glowbugs"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "winged_mailbird",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Light",
        "rules": "The Lumiflux Beacon provides bright light in a 20-foot radius. It also emits dim light for an additional 40 feet, allowing you to see normally and clearly within this area. This effect is passive and does not require any action."
      },
      {
        "title": "Attracts Glow-bugs",
        "rules": "As a bonus action, the Lumiflux Beacon can be activated to attract glow-bugs in a 30-foot radius for 1 minute. During this time, you gain advantage on Wisdom (Perception) checks made to detect creatures or objects within that area."
      }
    ],
    "levelRequirementReason": "The Lumiflux Beacon is designed for adventurers just starting their journey, providing a reliable source of light and a touch of ancient magic.",
    "vendorReason": "Connectopia Postmasters have long been known to provide essential gear that enhances both travel and adventure.",
    "shippingDetail": "Delivered swiftly by the swift-winged messengers of Connectopia, ensuring your beacon arrives in perfect condition.",
    "usage": {
      "activation": "Bonus action (to attract glow-bugs)",
      "duration": "1 minute for attracting glow-bugs; passive light is constant",
      "endsWhen": "The duration ends when it expires or you deactivate the glow-bug attraction feature",
      "charges": "Unlimited uses, but only one instance of glow-bug attraction can be active at a time"
    },
    "priceReason": "Balanced for its utility and rarity, the Lumiflux Beacon offers a fair price given its unique and versatile features.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-24T00:07:22.049464+00:00",
    "aiReviewedAt": "2026-07-24T00:07:22.049464+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_divine_scale": {
    "id": "pokemon_item_divine_scale",
    "name": "Divine Scale of Arceus",
    "description": "The Divine Scale of Arceus is a shimmering scale with an ethereal glow. Said to have been shed by the god Pokémon himself, it grants unparalleled luck and a connection to the very fabric of reality. When used, it subtly shifts the balance in your favor, ensuring that your next battle starts under more favorable conditions, but beware – the scale's divine power might accidentally summon mischievous Pokémon if not handled with care.",
    "category": "premium",
    "price": 1000000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "luck_boost",
      "mischievous_summon"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Celestial Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Luck Boost",
        "rules": "When activated, this scale grants the user a +2 bonus to all attack and saving throw rolls for the next battle. This effect lasts until the start of the user's first turn in their subsequent combat encounter."
      },
      {
        "title": "Mischievous Summon",
        "rules": "There is a 10% chance that when this scale is used, it might summon up to three mischievous Pokémon from another dimension. These creatures are harmless but can cause minor disruptions. The summoning ends immediately if the user takes any hostile action."
      }
    ],
    "levelRequirementReason": "The Divine Scale's power requires no minimum level as its effects are more about luck and divine intervention than combat prowess.",
    "vendorReason": "As a premium item, the Safari Shop is known for offering rare and divine artifacts like this scale.",
    "shippingDetail": "Ships via the Celestial Courier, arriving within a week of purchase.",
    "usage": {
      "activation": "Used as an action at the start of a new battle.",
      "duration": "Lasts until the start of the user's first turn in their next combat encounter.",
      "endsWhen": "The effect ends if the user takes any hostile action or the battle concludes without using this scale.",
      "charges": "Unlimited, as it regenerates between battles."
    },
    "priceReason": "Balanced at 1000 XP to reflect its divine and potentially mischievous nature, ensuring players can obtain it without overpowered effects.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-24T00:07:15.760107+00:00",
    "aiReviewedAt": "2026-07-24T00:07:15.760107+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_slime_goo": {
    "id": "the_edge_slime_goo",
    "name": "Abyssal Slime Goo",
    "description": "Abyssal Slime Goo, a pulsating violet mass that seems to giggle as it clings to your skin, emanates an eerie glow. This peculiar substance is said to have been crafted from the very essence of abyssal creatures, making it both a lifesaver and a potential hazard. Apply it to wounds, and not only does it heal 15 hit points instantly, but it also has a 3% chance to apply a debilitating poison that lasts for an hour.",
    "category": "consumables",
    "price": 250,
    "icon": "🧪",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heals_15_hp",
      "chance_to_apply_poison"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "winged beetle courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Touch (Instant)",
        "rules": "Apply Abyssal Slime Goo to a wound as an action. It heals the target for 15 hit points instantly and has a 3% chance to apply poison."
      },
      {
        "title": "Poison Chance",
        "rules": "If the slime successfully adheres, there is a 3% chance that it applies a poison effect to the target, which lasts until healed or removed by a cure spell. The save DC for this poison is 12."
      }
    ],
    "levelRequirementReason": "The Abyssal Slime Goo requires no special level as its effects are immediate and potent.",
    "vendorReason": "The Abyss Trader, a denizen of the deep, often carries this rare item from his travels through the abyssal planes.",
    "shippingDetail": "Shipped by a fleet of winged beetles known for their speed and reliability, ensuring quick delivery to eager adventurers.",
    "usage": {
      "activation": "Action (Apply to wound)",
      "duration": "Instantaneous healing; poison effect lasts until healed or removed by a cure spell",
      "endsWhen": "Poison effect ends when healed or removed, slime is dispelled on failed save",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Abyssal Slime Goo's rarity and potent effects justify its high price.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-24T00:07:51.822215+00:00",
    "aiReviewedAt": "2026-07-24T00:07:51.822215+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_resonance_shard": {
    "id": "the_edge_resonance_shard",
    "name": "Echoing Resonance Shard",
    "description": "The Echoing Resonance Shard is a fragment of an ancient artifact, its surface etched with runes that seem to glow faintly in the dark. When held, it fills your mind with whispers of forgotten battles and melodies, causing the air around you to hum with an otherworldly resonance. This shard not only increases your magic resistance by 10% but also has a chance to stun an enemy for one round every time you cast a spell or use a magical ability.",
    "category": "equipment",
    "price": 4100,
    "icon": "💎",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Magic Resistance Boost",
      "Stun on Spell Use"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Magic Resistance Boost",
        "rules": "While holding the Echoing Resonance Shard, your magic resistance is increased by 10%. This effect lasts until you stop holding it or are incapacitated."
      },
      {
        "title": "Stun on Spell Use",
        "rules": "When you cast a spell or use a magical ability while holding this shard, there is a 5% chance to stun the target for one round. This effect has a maximum of three uses per long rest and requires a successful concentration check (DC 14) to maintain."
      }
    ],
    "levelRequirementReason": "Requires character level 6 due to its magical resonance and the risk of being stunned.",
    "vendorReason": "Edge Outpost deals in relics from ancient and forgotten realms, making it a fitting vendor for this shard.",
    "shippingDetail": "Ships via inter-dimensional rift, arriving within a week of order placement.",
    "usage": {
      "activation": "Passive effect activated by holding the shard.",
      "duration": "Until you stop holding it or are incapacitated.",
      "endsWhen": "Exhausted after three uses per long rest due to magical strain.",
      "charges": "Unlimited, recharges on a short rest."
    },
    "priceReason": "Balanced at 1000 XP as it provides significant but not game-breaking benefits.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T00:08:00.262613+00:00",
    "aiReviewedAt": "2026-07-24T00:08:00.262613+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_guild_scribe_service": {
    "id": "earth_land_guild_scribe_service",
    "name": "Scroll of Precise Recordings",
    "description": "Crafted from parchment drenched in ink that whispers tales of yore, the Scroll of Precise Recordings captures your adventures as only the Guild Quartermaster's meticulous hand can. Each scroll is imbued with a spell that grants detailed illustrations and a written account, enhancing persuasion checks by +1 when recounting your exploits to elders or patrons. This service ensures your legend lives on in vivid detail, impressing even the most discerning audience.",
    "category": "services",
    "price": 250,
    "icon": "📝",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Grant detailed illustrated record of your adventures",
      "Enhance persuasion checks related to storytelling"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illustrated Record",
        "rules": "When activated by a short rest, this scroll grants you and the party a detailed written account of recent adventures, complete with illustrations. The account can be used as proof for quest rewards or to impress elders. This effect is limited to once per week."
      },
      {
        "title": "Enhanced Persuasion",
        "rules": "For 1 hour after activation, you gain a +1 bonus to Persuasion checks when recounting your adventures. This benefit ends if you make more than two Persuasion checks in the same day or at the end of the hour."
      }
    ],
    "levelRequirementReason": "This service is accessible to all adventurers, regardless of level, ensuring that every tale has a worthy chronicler.",
    "vendorReason": "The Guild Quartermaster specializes in services that preserve and enhance the legacy of brave souls.",
    "shippingDetail": "Delivered by trusted messenger hawk, ensuring your scroll arrives safely and swiftly.",
    "usage": {
      "activation": "Activate with a short rest as an action.",
      "duration": "1 hour or until used in two Persuasion checks.",
      "endsWhen": "Exhausted after one use per week.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The scroll's detailed illustrations and enhanced storytelling capabilities are worth the investment for any adventurer seeking to immortalize their exploits.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-24T00:08:03.243952+00:00",
    "aiReviewedAt": "2026-07-24T00:08:03.243952+00:00",
    "aiReviewVersion": 1
  }
};
