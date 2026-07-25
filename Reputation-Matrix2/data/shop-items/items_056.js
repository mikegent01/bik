// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_056 = {
  "almost_edge_item_liminal_mirror_shard": {
    "id": "almost_edge_item_liminal_mirror_shard",
    "name": "Liminal Mirror Shard - Reflections of Loss",
    "description": "A shard of glass so finely etched it resembles a fragment torn from another dimension, this Liminal Mirror Shard reveals glimpses into alternate realities. Touching it momentarily transports you to one such reality where your decisions and actions have led to different outcomes—often richer, more prosperous futures. Though the visions are fleeting, they linger long enough for you to grasp the potential of other paths. Handle with care, as prolonged exposure risks delving too deeply into nostalgia and regret.",
    "category": "curiosities",
    "price": 3300,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Alternate Reality Glimpse",
      "Temporal Resilience"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Temporal Echoes",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Alternate Reality Glimpse",
        "rules": "Using an action, you briefly touch the shard to enter a state where time slows for 3 seconds. During this time, you see one alternate reality in vivid detail, gaining advantage on Wisdom (Insight) checks made to understand the nature of that reality."
      },
      {
        "title": "Temporal Resilience",
        "rules": "For 1 hour after using the shard, you have resistance to psychic damage and gain advantage on saving throws against being charmed or frightened. The effect ends if you use it again before its duration expires."
      }
    ],
    "levelRequirementReason": "Requires at least third level to handle the temporal distortions without risk.",
    "vendorReason": "The Liminal Trader specializes in rare and dangerous curiosities, including items that can alter time and reality.",
    "shippingDetail": "Ships via Temporal Courier with a guaranteed delivery within one week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect lasting 3 seconds, followed by 1 hour of temporal resilience.",
      "endsWhen": "The duration ends when the effects expire or if used again before expiration.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to reflect its rare and potentially dangerous nature, making it a valuable but not overpowered tool for adventurers.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T21:29:06.135039+00:00",
    "aiReviewedAt": "2026-07-23T21:29:06.135039+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_chronal_shard": {
    "id": "grand_country_chronal_shard",
    "name": "Temporal Echo Fragment",
    "description": "The Temporal Echo Fragment is a shimmering, fractured shard of time, its surface etched with ancient runes and glowing faintly blue under torchlight. Touch it once to rewind your last action, but beware: each use risks creating a temporal ripple that might lead to unintended consequences, such as forgotten words or misplaced items. This relic, crafted by the enigmatic Timekeepers in their hidden sanctuaries, is limited to one use per day and comes with unpredictable side effects.",
    "category": "forbidden",
    "price": 3300,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Rewind Last Action",
      "Temporal Ripple"
    ],
    "vendor": "side_seller",
    "shippedBy": "swift_winds courier service",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Rewind Last Action",
        "rules": "As a reaction, you can rewind your last action. The action is canceled and you gain the benefit of the action as if it were just performed. This ability can be used once per day. However, there's a 10% chance that each use creates a temporal ripple, which might cause minor but unpredictable side effects."
      },
      {
        "title": "Temporal Ripple",
        "rules": "If a temporal ripple occurs, you must succeed on a DC 15 Wisdom saving throw or suffer a minor consequence related to the action you rewound. This could mean forgetting what you said in conversation, dropping an item, or being momentarily disoriented."
      }
    ],
    "levelRequirementReason": "The Temporal Echo Fragment requires a minimum level of 10 due to its complexity and potential for misuse.",
    "vendorReason": "Side Seller, known for their eclectic assortment of unique and rare items, occasionally stocks the Temporal Echo Fragment when it arrives from the mysterious Timekeepers.",
    "shippingDetail": "The Temporal Echo Fragment is shipped via Swift Winds Courier Service, ensuring swift delivery but with a slight delay due to its fragile nature.",
    "usage": {
      "activation": "Reaction (rewind last action); Instantaneous (temporal ripple)",
      "duration": "Instantaneous",
      "endsWhen": "Use of the ability or creation of a temporal ripple",
      "charges": "1 per day"
    },
    "priceReason": "The Temporal Echo Fragment is priced at 1000 XP, reflecting its rarity and potential for both utility and danger.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-23T21:29:47.422228+00:00",
    "aiReviewedAt": "2026-07-23T21:29:47.422228+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_sky_pearl": {
    "id": "grand_country_sky_pearl",
    "name": "Celestial Echo Pearl",
    "description": "The Celestial Echo Pearl, forged from the very clouds of distant realms and woven with the melodies of forgotten stars, hums softly as it glows with an ethereal light. Held in one's palm, it reveals glimpses into futures both real and imagined—though to the greedy, it may only seem to promise more wealth. A rare treasure from the celestial market, this pearl offers insight beyond mere sight, granting fleeting visions of possible paths and secret knowledge that could change a campaign’s course forever.",
    "category": "curiosities",
    "price": 55000,
    "icon": "✨",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Reveals hidden secrets",
      "Grants +5 bonus on Insight checks"
    ],
    "vendor": "layer_market",
    "shippedBy": "cloud_whale",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Secrets",
        "rules": "The user can use an action to attempt a Perception check with advantage. If successful, they learn one secret or hidden path relevant to the immediate area."
      },
      {
        "title": "Insight Boost",
        "rules": "While holding the pearl, the user gains a +5 bonus on Insight checks. This effect lasts for 1 hour and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The pearl is accessible to all adventurers who recognize its value.",
    "vendorReason": "Layer Market, a hub of celestial trade, offers the rarest and most valuable curiosities from across the cosmos.",
    "shippingDetail": "The pearl is delivered by the majestic Cloud Whale, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until used",
      "endsWhen": "After one use per long rest and upon completion of a short rest",
      "charges": "One charge per use"
    },
    "priceReason": "The Celestial Echo Pearl is priced at 1000 XP, reflecting its rarity and the value it adds to any adventurer's quest.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-23T21:29:33.700127+00:00",
    "aiReviewedAt": "2026-07-23T21:29:33.700127+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_dragonscale_shield": {
    "id": "earth_land_dragonscale_shield",
    "name": "Wyrm's Whisper Bulwark",
    "description": "The Wyrm's Whisper Bulwark is a shield forged from the scales of a young frost dragon, imbued with an ancient whisper that promises victory. Its warm touch and icy core provide unparalleled defense: it blocks all physical attacks and reflects up to 20% of incoming magic damage back at attackers. The shield whispers warnings when you are about to be struck by an attack, giving you precious moments to react.",
    "category": "equipment",
    "price": 5400,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Blocks Physical Attacks",
      "Reflects Magic Damage"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Winged Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Physical Block",
        "rules": "The Wyrm's Whisper Bulwark blocks all physical attacks. It provides a +3 bonus to Armor Class and has a reaction that can stun an attacker for one round with a successful block, but this effect only occurs on a natural 19 or 20."
      },
      {
        "title": "Magic Reflection",
        "rules": "When hit by magic attacks, the shield reflects up to 20% of the damage back at the attacker. This effect has a cooldown of one minute after each use and requires a successful concentration check (DC 15) to activate."
      }
    ],
    "levelRequirementReason": "The Wyrm's Whisper Bulwark is crafted from dragon scales, requiring a player of at least level 8 to wield it effectively.",
    "vendorReason": "The magic shop specializes in rare and ancient artifacts, including those made from magical creatures like dragons.",
    "shippingDetail": "Ships via the Winged Courier, known for its speed and reliability, ensuring swift delivery of enchanted items.",
    "usage": {
      "activation": "Instantaneous (reaction)",
      "duration": "One minute between uses",
      "endsWhen": "Exhausted after one use per minute or when destroyed by damage equal to your level +10",
      "charges": "Unlimited, recharged at dawn"
    },
    "priceReason": "The Wyrm's Whisper Bulwark is a rare shield forged from dragon scales, making it valuable but not overly powerful.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:28:53.667239+00:00",
    "aiReviewedAt": "2026-07-23T21:28:53.667239+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_mythic_echoing_gem": {
    "id": "earth_land_mythic_echoing_gem",
    "name": "The Lament of Lost Souls",
    "description": "The Lament of Lost Souls is a gemstone that hums with sorrow from ancient battles. Its pulsating glow reveals brief, haunting visions of past conflicts and can attract spectral echoes that whisper secrets or cause minor disturbances. Holding it grants you resistance to fear and allows you to make a Wisdom check for insight into the battlefield. However, there's an unsettling 15% chance each round that a minor spectral echo will appear, possibly aiding your allies or creating minor distractions.",
    "category": "curiosities",
    "price": 56000,
    "icon": "💎",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Resistance to Fear",
      "Chance of Spectral Echo"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Dimensional Rift Delivery",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Resistance to Fear",
        "rules": "You gain resistance to fear effects. This effect is always active while you are holding the Lament of Lost Souls."
      },
      {
        "title": "Chance of Spectral Echo",
        "rules": "Each round, there's a 15% chance that a minor spectral echo will appear in your vicinity. The echo can either scout for information or create a distraction by causing an enemy to lose 10% of their current hit points."
      }
    ],
    "levelRequirementReason": "The gem's power requires a moderate magical affinity, making it suitable for characters at least level 2.",
    "vendorReason": "The Earth Emporium specializes in ancient and mystical artifacts, including those that hold the echoes of lost battles.",
    "shippingDetail": "Shipped via a Dimensional Rift Express service to ensure timely arrival of this fragile artifact.",
    "usage": {
      "activation": "Passive effect while holding the gem.",
      "duration": "Instantaneous, with no duration limit.",
      "endsWhen": "The gem shatters if you lose your concentration or drop it.",
      "charges": "Unlimited"
    },
    "priceReason": "The gem's rarity and mystical properties justify its moderate price of 1000 XP.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T21:29:06.093999+00:00",
    "aiReviewedAt": "2026-07-23T21:29:06.093999+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_frosting_flail": {
    "id": "leclaire_isle_item_frosting_flail",
    "name": "Frosting Flail of Frozen Fury",
    "description": "The Frosting Flail of Frozen Fury is a colossal weapon forged from hardened buttercream, enchanted to harness winter's coldest magic. Its massive head glimmers like ice, and each swing can freeze enemies solid, leaving them encased in a frosty prison. Legend has it that this flail was crafted on the island of Le Claire Isle by pastry chefs who dared to challenge the Frost King himself. A single slip on its slippery frosting can send even the most skilled fighters sprawling.",
    "category": "equipment",
    "price": 3300,
    "icon": "🧊",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "freeze_target",
      "critical_hit_bonus"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Swift Sugar Delivery Cart",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Freeze Target",
        "rules": "When you hit a target with this flail as part of an attack, there is a 50% chance that the target becomes immobilized for 1 minute. The save DC to resist this effect is equal to 8 + your proficiency bonus + your Strength modifier. This effect ends if the target takes any nonmagical damage."
      },
      {
        "title": "Critical Hit Bonus",
        "rules": "If you score a critical hit with this flail, you gain advantage on all attack rolls against that target until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Only seasoned warriors who have proven their mettle can wield such a powerful and heavy weapon.",
    "vendorReason": "The chefs at Pastry Palace are known for their daring challenges, and the Frosting Flail is a testament to their bravery in facing the frosty king himself.",
    "shippingDetail": "Due to its unwieldy size and delicate nature, this item is shipped with extra care using the Swift Sugar Delivery Cart. Expect delivery delays of up to one week due to the special handling required.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous freeze effect; ends if the target takes nonmagical damage",
      "endsWhen": "Target takes nonmagical damage or the duration ends (1 minute)",
      "charges": "Unlimited uses, recharged after a long rest"
    },
    "priceReason": "This item is considered rare due to its unique enchantment and the materials used in its creation.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:29:39.109210+00:00",
    "aiReviewedAt": "2026-07-23T21:29:39.109210+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sugar_shock_berry": {
    "id": "leclaire_isle_item_sugar_shock_berry",
    "name": "Sugar Shock Berry",
    "description": "The Sugar Shock Berry is a vibrant, almost neon red fruit that pulses with an ungodly amount of sugar. When consumed, it grants you a burst of energy and temporarily boosts your speed, leaving your enemies in a state of delightful confusion as they stumble around in disarray. The berry's sweet juice coats your mouth, making your tongue feel as if it's about to explode from the sheer volume of sugar racing through you.",
    "category": "consumables",
    "price": 120,
    "icon": "🍬",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "speed_boost",
      "confusion"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Honeybee Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "You gain a +2 bonus to your speed until the start of your next turn. This effect ends if you take any damage or are incapacitated."
      },
      {
        "title": "Confusion",
        "rules": "For 1 minute, each creature that starts its turn within 5 feet of you must make a DC 13 Wisdom saving throw or be stunned until the start of your next turn. On a successful save, the target is instead frightened of you for 1 minute."
      }
    ],
    "levelRequirementReason": "This item provides a significant combat advantage but does not require a high level to benefit from its effects.",
    "vendorReason": "Sweet Supplies is known for carrying the most delightful and bizarre consumables, including this sugar-packed treat.",
    "shippingDetail": "The Honeybee Drone delivers with a slight delay due to its need to collect nectar from various sources before delivering the berries.",
    "usage": {
      "activation": "Eating the berry as an action.",
      "duration": "Until the start of your next turn for the speed boost, and until the end of your next turn for the confusion effect.",
      "endsWhen": "If you take damage or are incapacitated.",
      "charges": "Unlimited; can be consumed repeatedly."
    },
    "priceReason": "The price reflects its rare sugar content, complex flavor profile, and the difficulty of sourcing such a concentrated burst of sweetness in an item.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-24T23:54:05.228403+00:00",
    "aiReviewedAt": "2026-07-24T23:54:05.228403+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sugar_sprout": {
    "id": "leclaire_isle_sugar_sprout",
    "name": "Sugar Sprout Stabilizer",
    "description": "The Sugar Sprout Stabilizer is a tiny, doughy sprout that looks like it could belong to a whimsical fairy tale. Crafted from the finest flour and yeast of Lemire Island's famous bakery, these sprouts are known for their miraculous ability to strengthen pastries, preventing them from crumbling or collapsing. When used, they provide an instant boost of resilience, ensuring your baked goods rise just right every time. A baker's dream, this stabilizer is especially popular among those who struggle with fragile tarts and cakes.",
    "category": "consumables",
    "price": 700,
    "icon": "🌱",
    "stock": 63,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Pastry Reinforcement",
      "Baking Skill Boost"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Dough Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pastry Reinforcement",
        "rules": "When activated as a bonus action, the Sugar Sprout Stabilizer provides a +2 bonus to baking skill checks for one round. This effect grants temporary resistance against effects that cause baked goods to crumble or collapse."
      },
      {
        "title": "Baking Skill Boost",
        "rules": "Upon activation, this stabilizer restores 10 pastry durability immediately and has a 50% chance of granting +2 to baking skill checks for one round. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for novice bakers who need some extra help perfecting their craft.",
    "vendorReason": "Dough Depot specializes in all things pastry and baking, making them the ideal vendor for this stabilizer.",
    "shippingDetail": "The Sugar Sprout Stabilizers are delivered quickly by the Dough Delivery Drone, ensuring they arrive fresh and ready to use.",
    "usage": {
      "activation": "Bonus action to activate and provide immediate benefits.",
      "duration": "Instantaneous effect with a one-round duration.",
      "endsWhen": "After one round or when used again.",
      "charges": "One charge per use, recharges after a long rest."
    },
    "priceReason": "The stabilizer's rarity and the convenience it offers to bakers justify its higher price in experience points.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T21:30:50.720824+00:00",
    "aiReviewedAt": "2026-07-23T21:30:50.720824+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_forbidden_frosting_bomb": {
    "id": "leclaire_isle_forbidden_frosting_bomb",
    "name": "Forbidden Frosting Bomb",
    "description": "The Forbidden Frosting Bomb is a volatile confection forged from ingredients rumored to have been pilfered from the Dough Folk's most sacred recipes. This frosty sphere, crafted in the shadowed forges of Le Cleraire Isle, unleashes a dazzling burst of sugary chaos when detonated, leaving behind a sticky residue that clings to foes and allies alike. Beware: its presence might attract unwelcome attention from pastry guardians, who guard their secrets with zeal.",
    "category": "forbidden",
    "price": 5900,
    "icon": "💣",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Sugary Explosion",
      "Sticky Residue"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Nightly Delivery Goblin",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Sugary Explosion",
        "rules": "When thrown as an action, the Forbidden Frosting Bomb detonates in a 15-foot radius. All creatures within this area take 8d6 cold damage. The explosion creates a sticky residue that lasts for 1 minute, reducing movement speed by half (as if affected by Slow)."
      },
      {
        "title": "Sticky Residue",
        "rules": "For one turn after the bomb detonates, any creature within the 15-foot radius has disadvantage on Dexterity saving throws and ability checks made to move. The sticky residue dissipates after 1 minute."
      }
    ],
    "levelRequirementReason": "Crafted with forbidden techniques that are difficult for lower-level characters to master, this bomb requires a minimum level of 8.",
    "vendorReason": "Pastry Palace specializes in items that challenge and delight, making it the perfect vendor for this explosive confection.",
    "shippingDetail": "Delivered with a special goblin courier who ensures the package reaches its destination under cover of darkness to avoid unwanted attention.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; lasts for 1 minute after detonation",
      "endsWhen": "The sticky residue dissipates after 1 minute or when a creature successfully dislodges it with a successful Strength check (DC 15)",
      "charges": "Unlimited, but requires 24 hours to recharge after use"
    },
    "priceReason": "The bomb's rarity and the complexity of its ingredients justify this price, ensuring it remains a valuable yet balanced addition to any character's arsenal.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:29:57.799991+00:00",
    "aiReviewedAt": "2026-07-23T21:29:57.799991+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_golden_dough_shard": {
    "id": "leclaire_isle_golden_dough_shard",
    "name": "Golden Dough Shard of Eternal Sweetness",
    "description": "The Golden Dough Shard of Eternal Sweetness is a delicate fragment from an ancient, never-ending baking dough that has sustained countless feasts. This shard exudes a sugary glow and can be used to instantly repair damaged armor or weapons by restoring half their durability, or to enhance the flavor of any meal, making it twice as delicious in one sitting. Just avoid consuming it outright; doing so results in an upset stomach.",
    "category": "curiosities",
    "price": 9200,
    "icon": "✨",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Instant Armor Repair",
      "Enhanced Meal Flavor"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Royal Pastry Courier",
    "levelRequirement": 0,
    "effectDetails": [
      {
        "title": "Instant Armor Repair",
        "rules": "As a bonus action, the wielder can use this shard to instantly restore half of any damaged armor or weapon's durability. This effect has no save DC and is limited to one use per day."
      },
      {
        "title": "Enhanced Meal Flavor",
        "rules": "This shard can be consumed once (without risk) to enhance the flavor of a meal, doubling its consumption rate for 1 hour. The effect is passive and does not require an action or saving throw."
      }
    ],
    "levelRequirementReason": "The Golden Dough Shard's effects are simple and beneficial for all adventurers regardless of level.",
    "vendorReason": "Sweet Supplies deals exclusively in culinary curiosities and treats, making it the go-to vendor for items like this.",
    "shippingDetail": "Ships via Royal Pastry Courier; typically arrives within a week from the time of purchase.",
    "usage": {
      "activation": "Bonus action or passive effect when consumed",
      "duration": "Instantaneous and once per day for Instant Armor Repair; meal enhancement is active for one hour after consumption",
      "endsWhen": "Effect duration ends naturally, and uses are exhausted as specified",
      "charges": "Unlimited daily uses, one meal enhancement"
    },
    "priceReason": "The item's effects provide significant utility without being overly powerful, making it a fair value at 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:30:04.741432+00:00",
    "aiReviewedAt": "2026-07-23T21:30:04.741432+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_royal_decree": {
    "id": "midlands_item_royal_decree",
    "name": "Decree of Unmaking",
    "description": "The Decree of Unmaking is a parchment sealed in black wax, its edges slick with fresh blood. When read aloud by one of noble birth, it strips a target’s memory of up to five years, leaving them bewildered and unmoored from their past. The King's agents will hunt you down for such an act, making this item both a weapon and a trap, wielded only by those willing to risk the wrath of the crown.",
    "category": "forbidden",
    "price": 57000,
    "icon": "📜",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Memory Erasure",
      "Charisma Boost"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "Royal courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Memory Erasure",
        "rules": "Activates when read aloud by one with noble lineage. Targets a single creature within 30 feet. The target loses memory of up to five years, as if under the effect of *Erase Memories*. This use ends immediately upon reading."
      },
      {
        "title": "Charisma Boost",
        "rules": "Increases your Charisma by +5 for 1 hour per use. This effect cannot be used more than once per long rest and is exhausted after one use."
      }
    ],
    "levelRequirementReason": "Requires a noble lineage or at least a level of 10 to invoke the King's wrath effectively.",
    "vendorReason": "The Empire Exchange caters exclusively to those with influence, making it the only legitimate source for such a dangerous but valuable item.",
    "shippingDetail": "Ships via Royal Courier within one week. Delivery is subject to customs checks by corrupt officials.",
    "usage": {
      "activation": "Reading aloud while under noble lineage or having at least level 10 Charisma modifier.",
      "duration": "Instantaneous for Memory Erasure, +5 per hour for Charisma boost",
      "endsWhen": "Target's memory is restored upon reading, or the effect ends with a long rest for Charisma boost.",
      "charges": "Limited to one use per long rest"
    },
    "priceReason": "Balanced at 1000 XP as it requires significant risk and skill to utilize effectively.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T21:30:29.134964+00:00",
    "aiReviewedAt": "2026-07-23T21:30:29.134964+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_void_guardians_badge": {
    "id": "doughnut_hole_void_guardians_badge",
    "name": "The Hole's Protector’s Token",
    "description": "Issued by the enigmatic Void Guardians, this badge is a small medallion carved from obsidian and adorned with runes of forgotten languages. It grants limited access to the most dangerous corners of The Doughnut Hole, but only those who can prove their worth through quiet and respectful behavior are permitted its use. Within The Doughnut Hole, it enhances perception by 2d4 for 1 hour, and provides a +1 bonus to Charisma (Deception) checks when interacting with void entities.",
    "category": "faction",
    "price": 700,
    "icon": "🛡️",
    "stock": 8,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Enhances Perception within The Doughnut Hole",
      "Charisma Bonus for Deception Checks"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Perception",
        "rules": "When worn in The Doughnut Hole, the badge provides a +2d4 bonus to perception checks. This effect lasts for 1 hour and can be used once per day."
      },
      {
        "title": "Charisma Bonus (Deception)",
        "rules": "While wearing this badge, you gain a +1 bonus to Charisma (Deception) checks when interacting with void entities. The benefit is granted as long as the badge remains on your person."
      }
    ],
    "levelRequirementReason": "Beginners who wish to prove their worth to the Void Guardians are often sent this token.",
    "vendorReason": "Void Guardians trust only those they have deemed worthy with access to The Doughnut Hole, and this badge is a symbol of that trust.",
    "shippingDetail": "The Dimensional Courier ensures the safe arrival of the badge through The Doughnut Hole's treacherous pathways.",
    "usage": {
      "activation": "Passive effect once worn",
      "duration": "1 hour or until removed",
      "endsWhen": "Badge is taken off or day ends",
      "charges": "Unlimited"
    },
    "priceReason": "The badge's value lies in its rarity and the trust it represents, making it worth a significant amount of XP.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T21:30:19.531625+00:00",
    "aiReviewedAt": "2026-07-23T21:30:19.531625+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_sparklehoof_plate": {
    "id": "equestria_item_sparklehoof_plate",
    "name": "Sparklehoof's Steadfast Plate",
    "description": "Sparklehoof's Steadfast Plate is a gleaming armor forged in Canterlot's royal forges, said to have been worn by a brave pony knight of old. Its surface shimmers with subtle runes that catch the light, offering both protection and a touch of Equestria's magic. While it may not stop a giant boulder, this plate provides exceptional comfort, even for the most restless hooves, and grants its wearer resistance to radiant damage, making it an invaluable companion in any noble quest.",
    "category": "equipment",
    "price": 3300,
    "icon": "🛡️",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Radiant Resistance",
      "Comfortable Defense"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_carriage",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Radiant Resistance",
        "rules": "This plate grants the wearer resistance to radiant damage. This effect is passive and applies continuously while the plate is worn."
      },
      {
        "title": "Comfortable Defense",
        "rules": "Wearing this plate increases the wearer's Armor Class by 2, providing a tangible boost in defense without requiring any action or concentration."
      }
    ],
    "levelRequirementReason": "This armor is crafted for experienced warriors who can best appreciate its unique properties and durability.",
    "vendorReason": "Canterlot Commerce, known for its royal connections, ensures that only the finest armors are sold to those worthy of wearing them.",
    "shippingDetail": "Delivered with utmost care by the Royal Carriage service, ensuring swift and safe arrival.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Continuous while worn.",
      "endsWhen": "The plate is removed or destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This rare armor reflects Canterlot's royal craftsmanship and the unique properties that make it a valuable asset for any pony knight.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T21:30:46.057067+00:00",
    "aiReviewedAt": "2026-07-23T21:30:46.057067+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_pegasus_feather_amulet": {
    "id": "equestria_item_pegasus_feather_amulet",
    "name": "Amulet of Swift Winds",
    "description": "The Amulet of Swift Winds is a delicate amulet crafted from shimmering silver and encrusted with a single, iridescent Pegasus feather. Crafted by the Crystal Empire's master artisans, it whispers tales of swift winds and boundless flight. Despite its enchantments, only those attuned to the spirit of the skies can truly harness its power, granting them a minor boost in speed and a chance to dodge attacks with grace.",
    "category": "curiosities",
    "price": 9300,
    "icon": "💨",
    "stock": 95,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "+1 to movement speed",
      "Chance to dodge attacks (20%)"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "winged_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swift Flight",
        "rules": "The wearer gains +1 to their movement speed. This effect is active as long as the amulet remains on the wearer and they are not incapacitated."
      },
      {
        "title": "Dodge Grace",
        "rules": "Once per short rest, the wearer has a 20% chance to dodge an attack. This ability can be used once per day until expended."
      }
    ],
    "levelRequirementReason": "The amulet's enchantments are subtle and require only basic magical knowledge.",
    "vendorReason": "The Crystal Empire is renowned for its mastery of flight-themed magic, making it the ideal vendor for this enchanted trinket.",
    "shippingDetail": "Shipped by a swift Pegasus courier, ensuring the amulet arrives fresh and intact.",
    "usage": {
      "activation": "Passive effect; no activation required. Requires attunement to activate abilities.",
      "duration": "Until expended or removed from wearer",
      "endsWhen": "Expenditure of dodge grace ability or removal from wearer",
      "charges": "One use per day"
    },
    "priceReason": "The amulet's enchantments are subtle but effective, and its rarity ensures a fair price in magical goods.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-23T21:30:35.124340+00:00",
    "aiReviewedAt": "2026-07-23T21:30:35.124340+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_shard_of_void": {
    "id": "connectopia_shard_of_void",
    "name": "Nullity Fragment",
    "description": "The Nullity Fragment is a crystalline shard that shimmers with an eerie, ethereal glow, casting a cold shadow wherever it rests. Touching it sends a chill down your spine, and its touch can cause nearby tools to vanish or reappear in bewildering configurations. This fragment of the Void Rift defies logic, offering a brief respite from psychic damage but at a cost—those who wield it must confront their own doubts and fears.",
    "category": "forbidden",
    "price": 360000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Disorienting Touch",
      "Psychic Drain"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "black_market_runner",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Disorienting Touch",
        "rules": "When a creature touches the shard, they have disadvantage on attack rolls until the end of their next turn. The target can make a Wisdom saving throw (DC 15) to negate this effect."
      },
      {
        "title": "Psychic Drain",
        "rules": "The shard drains a small amount of psychic energy from creatures within its radius, reducing their Intelligence score by 1 for 1 hour. A successful DC 14 Constitution saving throw halves the effect duration and reduces the drain to -1."
      }
    ],
    "levelRequirementReason": "The shard's power is too dangerous for those unprepared, requiring a minimum level of expertise in handling such arcane objects.",
    "vendorReason": "Pioneer Post trades in all manner of exotic and forbidden items, making it the only reliable source for this fragment.",
    "shippingDetail": "The shard must be delivered under strict secrecy; any detection spells cast on the package will render the shipment void.",
    "usage": {
      "activation": "Touching the shard",
      "duration": "Instantaneous, with a duration of 1 hour for each use",
      "endsWhen": "Upon touching an unliving object or when the target successfully saves against its effects",
      "charges": "Unlimited charges"
    },
    "priceReason": "The fragment's rarity, power, and the risk it poses justify a high price in mythic XP.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T21:31:13.563813+00:00",
    "aiReviewedAt": "2026-07-23T21:31:13.563813+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_wario_wrench_prototype": {
    "id": "connectopia_wario_wrench_prototype",
    "name": "Wario’s Experimental Fixer",
    "description": "Wario’s Experimental Fixer gleams with a mixture of oil and sweat, its extra handle a testament to Wario's impromptu craftsmanship. This grease-stained tool offers a small but reliable bonus to repair tasks, making quick fixes possible even in the most chaotic situations. The wrench also has a peculiar quirk: each successful repair has a chance to leave your foes stunned for a moment, disrupting their plans just as effectively as it mends yours.",
    "category": "equipment",
    "price": 120,
    "icon": "🔧",
    "stock": 25,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Repair Speed Boost",
      "Stun Chance on Repair"
    ],
    "vendor": "block_smith",
    "shippedBy": "delivery_bot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Repair Speed Boost",
        "rules": "Activates as an action. Grants a +10% bonus to the DC of any repair task for the next hour, after which it recharges."
      },
      {
        "title": "Stun Chance on Repair",
        "rules": "Each successful repair attempt with this wrench has a 10% chance (DC 13) to stun an adjacent enemy for 1 round. This effect is limited to once per day."
      }
    ],
    "levelRequirementReason": "Wario’s Experimental Fixer is simple enough that even the lowest-level adventurers can wield it, providing a basic tool of survival.",
    "vendorReason": "The block smiths are known for their willingness to help anyone in need, especially those who can use a good wrench or two.",
    "shippingDetail": "Standard delivery via the reliable delivery bot ensures quick arrival, though it may take an extra day during peak hours.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour per use",
      "endsWhen": "After one hour of continuous use or when the next repair task is attempted",
      "charges": "Unlimited"
    },
    "priceReason": "The wrench's unique properties and its connection to Wario, a beloved but mischievous character, justify this price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T21:31:02.641883+00:00",
    "aiReviewedAt": "2026-07-23T21:31:02.641883+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_disruptive_melody": {
    "id": "kivotos_item_halo_of_disruptive_melody",
    "name": "Discordant Halo",
    "description": "The Discordant Halo glimmers with a neon sheen, its surface etched with the dissonant melodies of past campus protests and rebellious student anthems. This peculiar artifact emits a wave of sonic disruption that stuns foes in its path and scrambles their attacks, leaving them confused and off-balance for moments. A mere touch can unleash its chaotic power, making it a versatile tool for any bard or trickster with a knack for chaos.",
    "category": "curiosities",
    "price": 700,
    "icon": "🎶",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Stuns on Contact",
      "Disruptive Melody"
    ],
    "vendor": "club_supply",
    "shippedBy": "standard_mail",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Stuns on Contact",
        "rules": "When an enemy touches the halo, it emits a burst of sonic disruption that stuns the target for 1 round (DC 13 Dexterity save). On a successful save, the stun effect is negated."
      },
      {
        "title": "Disruptive Melody",
        "rules": "For every 5 feet an enemy moves within 20 feet of the halo, they have disadvantage on their next attack roll. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level to wield this artifact effectively.",
    "vendorReason": "The club supply vendor stocks unique and rare items from past campus events, including the Discordant Halo.",
    "shippingDetail": "Ships via standard mail within a week of order placement.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous; lasts until the start of your next turn or expended by an attack.",
      "endsWhen": "The effect ends when the target makes a successful Dexterity saving throw or if it takes damage.",
      "charges": "Unlimited, but only one use per round."
    },
    "priceReason": "Balanced for its unique sonic abilities and effects on enemies.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T21:31:18.438411+00:00",
    "aiReviewedAt": "2026-07-23T21:31:18.438411+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_data_ghost_fragment": {
    "id": "kivotos_item_data_ghost_fragment",
    "name": "Echo of the Network",
    "description": "Echo of the Network is a digital fragment, a remnant of a long-forgotten online persona. Its cracked surface hums with corrupted data streams that grant you fleeting access to cryptic information and unsettling visions. Touching it allows you to uncover hidden secrets or prophetic dreams, though the clarity is often clouded by ambiguity. The fragment's influence can be both enlightening and perilous, much like a digital ghost haunting the forgotten corners of cyberspace.",
    "category": "curiosities",
    "price": 3300,
    "icon": "👻",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Access Corrupted Data Streams",
      "Unsettling Visions"
    ],
    "vendor": "student_store",
    "shippedBy": "night_carrier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Access Corrupted Data Streams",
        "rules": "As an action, you touch Echo of the Network and gain temporary access to corrupted data streams. For each use, you can attempt a DC 15 Intelligence (Computers) check to uncover hidden secrets or clues within the stream. The effect lasts for 3 rounds."
      },
      {
        "title": "Unsettling Visions",
        "rules": "The fragment occasionally provides a prophetic vision, which is potentially misleading. Once per short rest, you can attempt a DC 15 Wisdom saving throw to resist the visions' influence and avoid any negative effects they might have."
      }
    ],
    "levelRequirementReason": "Requires level 6 to handle the fragment's corrupted data streams without being overwhelmed by their complexity.",
    "vendorReason": "The student store carries Echo of the Network as a reminder of lost knowledge and forgotten online identities.",
    "shippingDetail": "Delivered only at night, ensuring the package arrives in secret.",
    "usage": {
      "activation": "Action",
      "duration": "3 rounds per use",
      "endsWhen": "The effect ends when you use it again or after 3 rounds",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare digital nature and the risk of accessing corrupted data.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:32:04.121767+00:00",
    "aiReviewedAt": "2026-07-23T21:32:04.121767+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_whispering_rune": {
    "id": "middle_earth_whispering_rune",
    "name": "Echoing Stone of Rivendell",
    "description": "The Echoing Stone of Rivendell is a smooth, grey stone that hums with the faintest whispers of Elven songs. Crafted from ancient elven runes and imbued with the essence of the Misty Mountains, it allows its bearer to perceive echoes of past events in the area. Holding this stone can reveal hidden passages or forgotten dangers, as if the very rock itself is whispering secrets long since buried. The stone’s whispers are not always clear; sometimes they attract mischievous brownies who may offer cryptic advice or mischief.",
    "category": "curiosities",
    "price": 3300,
    "icon": "🔮",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Echoes of the Past",
      "Hidden Passage Revelation"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes of the Past",
        "rules": "When you hold the stone, you gain advantage on Perception checks to recall events within a 30-foot radius. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Hidden Passage Revelation",
        "rules": "Once per short or long rest, you can make an Intelligence (Investigation) check with advantage to reveal hidden passages in the immediate area of the stone. This effect does not trigger on a failed check and cannot be used more than once per day."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers at all levels, as it aids in exploration without requiring high-level prowess.",
    "vendorReason": "The Elven Market sells relics and curiosities from the ancient realms of elves, making this stone a fitting addition to their offerings.",
    "shippingDetail": "Delivered by swift winged ponies, ensuring fast delivery straight to your door.",
    "usage": {
      "activation": "Passive effect when held. Requires no action for the duration.",
      "duration": "1 minute (concentration) or until used in a check.",
      "endsWhen": "The effects end once per rest or upon failure of a relevant check.",
      "charges": "Unlimited, but limited to one use per short or long rest."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and utility in exploration without overshadowing other adventuring options.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T21:31:23.142499+00:00",
    "aiReviewedAt": "2026-07-23T21:31:23.142499+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_shire_messenger_scrolls": {
    "id": "middle_earth_shire_messenger_scrolls",
    "name": "Post of the Shire",
    "description": "The Post of the Shire is a finely crafted parchment scroll adorned with intricate patterns and the emblem of the Shire. Its delivery method ensures that messages are sent with care, as only the swiftest rabbits of the Shire deliver them. Rumor has it that these scrolls not only ensure timely dispatch but also subtly enhance your persuasive skills by an hour, making you a more effective messenger in both heart and deed.",
    "category": "faction",
    "price": 57000,
    "icon": "✉️",
    "stock": 8,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Persuasion Boost",
      "Timely Delivery"
    ],
    "vendor": "shire_shop",
    "shippedBy": "swiftfoot_rabbit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Persuasion Boost",
        "rules": "When you use the Post of the Shire, you gain a +2 bonus to Persuasion checks for one hour. This effect does not stack with any other bonuses from similar sources."
      },
      {
        "title": "Timely Delivery",
        "rules": "Upon activation, the message is dispatched as soon as possible through the efficient delivery system of the Shire. The recipient receives the message within 24 hours, provided no delays are encountered."
      }
    ],
    "levelRequirementReason": "This item caters to all adventurers who wish to ensure their messages reach the intended recipients in a timely and effective manner.",
    "vendorReason": "The Shire Shop has long been trusted by many for its reliable services, including the dispatch of important documents.",
    "shippingDetail": "Messages are delivered through the swift and efficient rabbit couriers of the Shire. Expect delays during peak seasons or adverse weather conditions.",
    "usage": {
      "activation": "Action",
      "duration": "One hour",
      "endsWhen": "The duration expires after one hour, or when a new message is dispatched with the Post of the Shire.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the item's rarity and the unique services it provides to adventurers.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T21:31:32.100502+00:00",
    "aiReviewedAt": "2026-07-23T21:31:32.100502+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_sticky_scale": {
    "id": "grand_country_sticky_scale",
    "name": "Sticky Scale of the Shifting Peaks",
    "description": "The Sticky Scale of the Shifting Peaks, a shimmering scale shed by a creature that defies gravity itself, clings to any surface you touch. As you climb treacherous peaks, it subtly shifts underfoot, granting a slight but crucial advantage in your grip and balance. Though it doesn't actually adhere to skin or clothing, its presence can mean the difference between a smooth ascent and a perilous slide. This relic makes even the steepest cliffs feel like gentle hills.",
    "category": "equipment",
    "price": 700,
    "icon": "🧗‍♀️",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Grip",
      "Gravity Resistance"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Winged Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Enhanced Grip",
        "rules": "When you make an Athletics check to climb, you have advantage on the roll. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Gravity Resistance",
        "rules": "You gain resistance to falling damage and are immune to being knocked prone by a creature or effect that would normally cause you to fall. You can use this feature once per short rest, after which it is exhausted until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This scale requires significant magical power to harness its effects on gravity and balance.",
    "vendorReason": "The Vertical Vendor specializes in equipment for adventurers who navigate treacherous terrains, making this scale a perfect fit for their inventory.",
    "shippingDetail": "Ships via Winged Courier, delivering the item within one day of purchase.",
    "usage": {
      "activation": "Passive effect upon touching and holding the scale during an Athletics check to climb.",
      "duration": "Lasts until the end of your next long rest.",
      "endsWhen": "Exhaustion ends after a short rest, or when you no longer carry the scale.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Sticky Scale's rarity and magical properties justify its high price tag in the Vertical Vendor's shop.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T21:31:47.176971+00:00",
    "aiReviewedAt": "2026-07-23T21:31:47.176971+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_wario_crumb_sandwich": {
    "id": "grand_country_wario_crumb_sandwich",
    "name": "Wario's Gravity-Defying Crumb Sandwich",
    "description": "This peculiar sandwich, Wario's Gravity-Defying Crumb Sandwich, is a culinary marvel that seems to defy physics itself. Its crust rises and falls like a wave, while its crumbled layers shift with each bite. Each morsel grants a burst of energy, but beware—this energy comes at a cost: the stomach churns for hours afterward. This sandwich isn't just a snack; it's Wario's signature dish, known to grant a temporary boost in speed and a chance to gain a random strength buff.",
    "category": "consumables",
    "price": 9300,
    "icon": "🥪",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Energy Burst",
      "Speed Boost"
    ],
    "vendor": "side_seller",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Energy Burst",
        "rules": "When consumed as a bonus action, the sandwich grants you a +1d4 temporary hit point boost for 1 hour. There is a 20% chance that this effect also grants you a random temporary ability score increase (by 2 points) for 1 hour."
      },
      {
        "title": "Speed Boost",
        "rules": "For the duration of your next short or long rest, your movement speed increases by 20%. This effect is cumulative with any other bonuses to movement speed. If you take a long rest within the same day, this benefit does not stack."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate Wario's culinary creativity without needing high-level expertise.",
    "vendorReason": "The side_seller specializes in unique and eccentric items, making this sandwich a perfect fit for their inventory.",
    "shippingDetail": "Shipped via the efficient Delivery Drone service, ensuring freshness upon delivery.",
    "usage": {
      "activation": "Eaten as a bonus action at the start of your turn.",
      "duration": "Until the end of your next short or long rest.",
      "endsWhen": "If you consume another Wario's Gravity-Defying Crumb Sandwich before completing a short or long rest, the effect ends immediately and all benefits are lost.",
      "charges": "Unlimited"
    },
    "priceReason": "The sandwich is priced at 1000 XP due to its unique combination of flavor, lore, and temporary buffs.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:31:53.110517+00:00",
    "aiReviewedAt": "2026-07-23T21:31:53.110517+00:00",
    "aiReviewVersion": 1
  },
  "internet_glitch_charm": {
    "id": "internet_glitch_charm",
    "name": "Reality Ripple Charm",
    "description": "The Reality Ripple Charm is a sleek, metallic trinket that hums faintly as it draws its power from the very fabric of reality itself. Crafted by the enigmatic data_dealer, this charm briefly distorts perception and cognition, making the wearer appear as if they're experiencing an internet meme overload. Activating it in the middle of a conversation can lead to both allies and foes becoming momentarily confused, but beware—its effect is not without its quirks.",
    "category": "consumables",
    "price": 120,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Temporal Distortion",
      "Cognitive Dissonance"
    ],
    "vendor": "data_dealer",
    "shippedBy": "packet_delivery",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "When activated as a bonus action within 30 feet, the charm distorts time for the target. The target must succeed on a DC 15 Wisdom saving throw or be stunned for 1 round, during which they have disadvantage on all perception checks and are unable to take any actions."
      },
      {
        "title": "Cognitive Dissonance",
        "rules": "Upon failing their save against Temporal Distortion, the target must repeat a random internet meme aloud every time they speak for 1 minute. The DM selects an appropriate meme from a list provided by data_dealer for each use."
      }
    ],
    "levelRequirementReason": "The charm's ability to distort reality requires a certain degree of magical aptitude.",
    "vendorReason": "As a purveyor of arcane and digital curiosities, data_dealer is known for their unique inventory of items that bend the very laws of physics and logic.",
    "shippingDetail": "Shipped via packet_delivery's express courier service, ensuring timely delivery through the most secure and reliable means available.",
    "usage": {
      "activation": "Bonus action within 30 feet of target",
      "duration": "Instantaneous effect; ends when used or if target saves successfully",
      "endsWhen": "Target makes a successful Wisdom saving throw",
      "charges": "5 charges, recharges after a long rest"
    },
    "priceReason": "The charm's rarity and magical properties justify its high price in the market.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T21:32:14.900831+00:00",
    "aiReviewedAt": "2026-07-23T21:32:14.900831+00:00",
    "aiReviewVersion": 1
  },
  "internet_firewall_suit": {
    "id": "internet_firewall_suit",
    "name": "Data Fortress Armor",
    "description": "The Data Fortress Armor is a suit of quantum-enhanced armor forged from encrypted code and entangled particles, crafted by the cyber wizards of the Quantum Forge. Its layers weave together to form a nearly impenetrable barrier against digital threats, granting unparalleled protection in the virtual battlefield. This armor not only reflects magical attacks back at their caster but also offers resistance to firewall breaches and virus intrusions, ensuring that even the most insidious digital threats are repelled.",
    "category": "equipment",
    "price": 3300,
    "icon": "🛡️",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Quantum Resistance",
      "Magical Reflection"
    ],
    "vendor": "cyber_market",
    "shippedBy": "drone_delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Quantum Resistance",
        "rules": "The wearer gains resistance to all forms of digital damage, including firewall attacks and virus infections. This effect is active as long as the armor remains intact."
      },
      {
        "title": "Magical Reflection",
        "rules": "When a magical attack hits the wearer, there's a 50% chance that the attack will be reflected back at the attacker, dealing damage equal to half of the original attack. This effect can occur once per short rest."
      }
    ],
    "levelRequirementReason": "The armor requires significant skill and understanding of quantum mechanics to operate effectively.",
    "vendorReason": "The Quantum Forge has exclusive rights to distribute this cutting-edge technology.",
    "shippingDetail": "Delivered via high-speed drones, ensuring rapid deployment in the field.",
    "usage": {
      "activation": "Passive effect upon donning the armor.",
      "duration": "Persistent as long as worn; recharges at dawn.",
      "endsWhen": "Exhaustion or removal of the armor.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced against other rare armors, considering its unique quantum properties and effectiveness.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:32:32.193945+00:00",
    "aiReviewedAt": "2026-07-23T21:32:32.193945+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_crimson_banner": {
    "id": "midlands_item_crimson_banner",
    "name": "Crimson Banner of Discontent",
    "description": "The Crimson Banner of Discontent is a tattered standard soaked in the blood of countless minor rebellions. Its frayed edges and crimson stains whisper tales of unrest, making it a potent tool for stirring discord among nobles. When unfurled during negotiations, it either sways a stubborn noble with its aura of dissent or provokes them into an impulsive act that could derail talks. The banner's power lies in its ability to sow seeds of discontent and amplify tensions.",
    "category": "equipment",
    "price": 3300,
    "icon": "🚩",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Sow Discontent",
      "Provocation Chance"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "Imperial Courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Sow Discontent",
        "rules": "Activates as a bonus action, increasing the user’s Persuasion skill by +5 for up to 3 turns. The effect ends immediately if the user fails a Diplomacy check during this time."
      },
      {
        "title": "Provocation Chance",
        "rules": "There is a 10% chance that waving the banner will cause a small riot in the immediate area, disrupting any ongoing negotiations or meetings for at least 3 turns. This effect has no save DC and can only occur once per encounter."
      }
    ],
    "levelRequirementReason": "The banner's potency requires a character of at least 7th level to wield it effectively in high-stakes negotiations.",
    "vendorReason": "The Midlands Merchant specializes in rare and historically significant items, making the Crimson Banner a fitting addition to their inventory.",
    "shippingDetail": "Ships via Imperial Courier for expedited delivery with an additional handling fee of 50 XP.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Up to 3 turns, or until the user fails a Diplomacy check during this time",
      "endsWhen": "The banner's effect ends if the user fails a Diplomacy check while active",
      "charges": "Unlimited uses"
    },
    "priceReason": "The banner’s balanced price reflects its rarity and strategic value in high-stakes diplomacy.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:32:08.700416+00:00",
    "aiReviewedAt": "2026-07-23T21:32:08.700416+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_echoing_shard": {
    "id": "midlands_item_echoing_shard",
    "name": "Echoing Shard of the Fallen King",
    "description": "The Echoing Shard of the Fallen King is a jagged fragment of obsidian, said to have been plucked from the heart of an ancient king's tomb. Its surface glows faintly with cryptic runes that whisper tales of forgotten glory. Hold it close and let its whispers seep into your mind—be warned, for prolonged exposure can drive you mad with visions of past grandeur, but in a fleeting moment of brilliance, your intelligence may spike, though at the cost of charisma.",
    "category": "curiosities",
    "price": 58000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Whispers of Past Glory",
      "Intellect Surge"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispers of Past Glory",
        "rules": "When activated as a bonus action, the shard grants cryptic visions that can enhance or distort your understanding. There is a 5% chance per minute spent in close proximity to gain temporary madness from these visions. The effect lasts for 1 hour."
      },
      {
        "title": "Intellect Surge",
        "rules": "Upon successful activation, the shard grants +3 Intelligence for 1 turn but simultaneously reduces Charisma by -2. The effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "The Echoing Shard requires a lower level due to its mythic rarity and balance with other items.",
    "vendorReason": "The shard's origin from an ancient king's tomb makes it a perfect artifact for the expert craftsmen of Fractured Forge.",
    "shippingDetail": "Delivered swiftly by Winged Courier, but only on days marked by celestial alignment.",
    "usage": {
      "activation": "Bonus action to activate and hold close.",
      "duration": "1 hour or until madness is gained from visions.",
      "endsWhen": "Madness effect occurs or after 1 hour.",
      "charges": "Unlimited, but limited once per long rest."
    },
    "priceReason": "The Echoing Shard's price reflects its mythic rarity and the balance it provides to other items in the market.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-23T21:33:08.708876+00:00",
    "aiReviewedAt": "2026-07-23T21:33:08.708876+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_empire_favor": {
    "id": "midlands_item_empire_favor",
    "name": "Empire Favor Token - House Valerius",
    "description": "The Empire Favor Token - House Valerius is a gleaming brass token engraved with the heraldic crest of House Valerius, whose cunning and resourcefulness are legendary. This token grants you access to exclusive missions that House Valerius deems worthy of your skills, and it increases your standing within the noble house by 10 points. With this favor, goods purchased from the Empire Exchange come with a generous discount, allowing you to secure rare items at lower costs.",
    "category": "faction",
    "price": 120,
    "icon": "👑",
    "stock": 55,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Exclusive Valerius Missions",
      "Increased Influence"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "Royal Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Exclusive Valerius Missions",
        "rules": "Activate as an action. Grants access to one special mission per week, which can provide valuable experience and rewards. Ends when the mission is completed or after a month of inactivity."
      },
      {
        "title": "Increased Influence",
        "rules": "Increases your influence with House Valerius by 10 points immediately upon activation. This increase lasts for one month but resets to zero if you are seen as disloyal or engage in activities contrary to the house's interests."
      }
    ],
    "levelRequirementReason": "House Valerius welcomes all who prove their worth, but they require at least a first-level character for missions that align with their strategic goals.",
    "vendorReason": "The Empire Exchange maintains exclusive partnerships to ensure only those trusted by House Valerius receive the favor token.",
    "shippingDetail": "Ships within three days, delivered directly to your doorstep in a secure, tamper-evident container.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "One month from activation.",
      "endsWhen": "Upon completion of the mission or if influence is reduced to zero for disloyalty.",
      "charges": "Unlimited"
    },
    "priceReason": "The value reflects both the token's exclusive access and the strategic importance it holds in gaining favor with House Valerius.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T21:32:23.916411+00:00",
    "aiReviewedAt": "2026-07-23T21:32:23.916411+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_shadowfell_whisper": {
    "id": "faerun_item_shadowfell_whisper",
    "name": "Shadowfell Whisper Stone",
    "description": "The Shadowfell Whisper Stone is a pulsing obsidian orb that hums with the whispers of forgotten lore and dark secrets. This eerie artifact, crafted from the very essence of the Shadowfell, offers cryptic advice to those who hold it—advice that often veers toward caution and survival. While it occasionally demands shiny trinkets as payment for its counsel, ignoring it entirely might lead to unwanted attention from creatures of the deep dark.",
    "category": "curiosities",
    "price": 3300,
    "icon": "🌑",
    "stock": 38,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "wisdom_boost",
      "cryptic_advice"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Wisdom Boost",
        "rules": "The wielder gains a +2 bonus to Wisdom saving throws and Intelligence checks related to investigation for an hour after activation."
      },
      {
        "title": "Cryptic Advice",
        "rules": "Activates as a bonus action. The stone whispers cryptic advice, which can be used once per short or long rest; it has a 50% chance of being helpful and a 25% chance of being dangerous."
      }
    ],
    "levelRequirementReason": "The item's power is balanced for characters who have faced some challenges but are still developing their skills.",
    "vendorReason": "Baldur's Bazaar often stocks rare and powerful items suitable for adventurers of all levels, ensuring they can find what they need.",
    "shippingDetail": "Ships via the swift Messenger Hawk courier, delivered within three days.",
    "usage": {
      "activation": "Bonus Action (once per short or long rest)",
      "duration": "Instantaneous effect; lasts for an hour after activation",
      "endsWhen": "The duration ends when it is used up or until the end of the next short or long rest",
      "charges": "Unlimited, recharges on a short or long rest"
    },
    "priceReason": "The item's rarity and utility justify its price in terms of experience points.",
    "priceOriginal": 1250,
    "priceReviewedAt": "2026-07-23T21:32:29.604788+00:00",
    "aiReviewedAt": "2026-07-23T21:32:29.604788+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_waterdeep_merchant_favor": {
    "id": "faerun_item_waterdeep_merchant_favor",
    "name": "Waterdeep Merchant's Favor Token",
    "description": "The Waterdeep Merchant's Favor Token is a gleaming coin of silver and gold, emblazoned with the heraldic falcon of House Phandalin. This token not only grants access to exclusive discounts and early notifications on rare goods within the bustling market but also allows you to influence local merchants for special procurements. With this token, you can commandeer rare supplies that are otherwise hard to find in the city’s crowded bazaars.",
    "category": "faction",
    "price": 9300,
    "icon": "💰",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "exclusive_discounts",
      "merchants_influence"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "sea_gull",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Exclusive Discounts",
        "rules": "Activates as a bonus action, providing a +2 bonus on saving throws to resist price gouging within Waterdeep. This effect lasts for an hour and can be used once per day."
      },
      {
        "title": "Merchants' Influence",
        "rules": "Can be activated as a reaction when engaging in trade negotiations with local merchants, allowing you to roll a d12 to influence the outcome of the deal. Success grants a 50% discount on that specific transaction. This effect is limited to once per week."
      }
    ],
    "levelRequirementReason": "This token is accessible to all adventurers, serving as an entry-level way to connect with Waterdeep's bustling market.",
    "vendorReason": "The token is a staple in the daily operations of the Waterdeep Market and widely recognized by local merchants.",
    "shippingDetail": "Delivered swiftly via the Sea Gull courier service, ensuring your token arrives within three days from order placement.",
    "usage": {
      "activation": "Bonus action for Discounts; Reaction for Influence",
      "duration": "Hour for Discounts; Instantaneous for Influence",
      "endsWhen": "Daily limit reached for Discounts; Weekly limit for Influence",
      "charges": "Unlimited uses"
    },
    "priceReason": "The token's value is balanced by its utility and the rarity of goods it can procure, making it a fair price point.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:32:40.042408+00:00",
    "aiReviewedAt": "2026-07-23T21:32:40.042408+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_sparklehoof_boots": {
    "id": "equestria_item_sparklehoof_boots",
    "name": "Sparklehoof's Speedy Striders",
    "description": "Sparklehoof's Speedy Striders are legendary boots handcrafted by the finest hoof-smiths of Ponyville. These sturdy, gleaming leather and starstone boots allow you to sprint through fields with ease, reducing your stamina consumption by half while running. The stars themselves seem to align when you wear them, granting a +20 bonus to Dexterity (Acrobatics) checks for dashing and dodging in the open sky. Wario’s obsession with speed is no secret; these boots have been known to outpace even the fastest Pegasi in a race.",
    "category": "equipment",
    "price": 9300,
    "icon": "💨",
    "stock": 12,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Increased Stamina",
      "Astral Acrobatics"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Delivery Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Stamina",
        "rules": "While wearing these boots, your movement speed is increased by +50%, and you reduce your stamina consumption by half when running or sprinting. This effect lasts until the start of your next turn."
      },
      {
        "title": "Astral Acrobatics",
        "rules": "When you use a Dash action while wearing these boots, you can make an Acrobatics check at advantage against falling damage and have a 25% chance to avoid being knocked prone during the dash."
      }
    ],
    "levelRequirementReason": "These boots are crafted for adventurers who wish to test their speed in challenging terrains.",
    "vendorReason": "As a bustling market town, Ponyville Market stocks the finest wares from local artisans and beyond.",
    "shippingDetail": "Boots are delivered swiftly by the trusted Delivery Ponies, ensuring they arrive in pristine condition.",
    "usage": {
      "activation": "Passive effect while wearing the boots.",
      "duration": "Instantaneous; ends when removed or destroyed.",
      "endsWhen": "Removed from your feet or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a lower price to reflect its specific utility and balance with other epic gear.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T21:32:46.716515+00:00",
    "aiReviewedAt": "2026-07-23T21:32:46.716515+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_apple_core_charm": {
    "id": "equestria_item_apple_core_charm",
    "name": "Apple Core of Courage",
    "description": "The Apple Core of Courage is a gleaming, polished core of an apple, crafted from the first harvest of Equestria. Worn as a charm, it taps into the spirit of bravery that defines every pony in Ponyville. This keepsake grants the wearer temporary resistance against fear and a boost to their courage when facing cowardly foes. Legend has it, it was created by Applejack during the inaugural Apple Harvest Festival! Wario might scoff at its power, but only until he finds himself face-to-face with a brave adversary.",
    "category": "curiosities",
    "price": 120,
    "icon": "🍎",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Bravery Boost",
      "Fear Resistance"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bravery Boost",
        "rules": "At the start of your turn, you can activate this charm as a bonus action to gain temporary inspiration (boosting next skill check) and advantage on Charisma checks. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Fear Resistance",
        "rules": "While wearing this charm, you have advantage on saving throws against fear effects from cowardly enemies. It also grants a +1 bonus to attack rolls made against creatures that are affected by fear."
      }
    ],
    "levelRequirementReason": "The charm's power is accessible to all ponies who value courage, making it a common item for those starting their adventures.",
    "vendorReason": "As a vendor of rare and cherished items, Crystal Empire frequently stocks this symbol of Ponyville’s spirit.",
    "shippingDetail": "Ships within 3 days with the Crystal Courier, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action at start of turn to activate and gain temporary inspiration and advantage on Charisma checks.",
      "duration": "Until end of next short or long rest.",
      "endsWhen": "Rest ends",
      "charges": "Unlimited"
    },
    "priceReason": "This item’s price reflects its unique origin, the bravery it symbolizes, and its utility in combat and social situations.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T21:32:48.160549+00:00",
    "aiReviewedAt": "2026-07-23T21:32:48.160549+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_doomshard": {
    "id": "warhammer_doomshard",
    "name": "Doomshard Fragment - Echoes of Chaos",
    "description": "A pulsating shard of unholy energy, this Doomshard Fragment is a fragment torn from the heart of a fallen god. Its surface crackles with chaotic magic that can be felt by even the most distant observer. Legends whisper it holds the echoes of ancient prophecies, though none dare challenge its power directly. It occasionally whispers cryptic omens to those who wield it, often foretelling doom and disaster for their foes.",
    "category": "equipment",
    "price": 58000,
    "icon": "💀",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "chaotic aura",
      "whispering omen"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Rift Runner",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Chaotic Aura",
        "rules": "When activated, this shard radiates a chaotic aura within 10 feet. All enemies in range take 3d6 radiant damage and are subjected to the stunned condition for 1 round. The effect ends if an ally enters or starts their turn there."
      },
      {
        "title": "Whispering Omen",
        "rules": "Once per short rest, this shard can be used to whisper a prophecy that grants advantage on one ability check of your choice related to combat. This effect lasts for 10 minutes and requires you to succeed on a DC 15 Wisdom (Insight) check."
      }
    ],
    "levelRequirementReason": "Only those with the experience and power to wield such an artifact can harness its chaotic essence.",
    "vendorReason": "The chaos dealer, a master of dark artifacts, is known for trading in relics that challenge the very fabric of reality.",
    "shippingDetail": "Ships via the Rift Runner, ensuring swift delivery through portals and dangerous territories.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "An ally enters or starts their turn in the aura; prophecy effect ends after 10 minutes of rest",
      "charges": "Recharge after a long rest"
    },
    "priceReason": "This fragment’s price reflects its mythic rarity and the chaotic magic it commands, making it a valuable asset for any bold soul.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T21:32:56.205325+00:00",
    "aiReviewedAt": "2026-07-23T21:32:56.205325+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_fatecoin": {
    "id": "curiosity_fatecoin",
    "name": "Fate's Coin - Flip for Glory (or Doom)",
    "description": "Fate's Coin - Flip for Glory (or Doom) is a tarnished silver coin etched with cryptic runes that whisper of ancient fates and forgotten glory. When flipped, it might bless you with a fleeting boost to your next action or cast, or curse you with an unexpected debuff. The coin itself has been cursed by a long-forgotten sorcerer, and the result is as unpredictable as it is dangerous. Just don’t blame Wario if you accidentally summon a mischievous spectral imp that could lead to untold chaos.",
    "category": "curiosities",
    "price": 120,
    "icon": "🪙",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Boon or Curse",
      "Spectral Imp"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Courier of Shadows",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boon or Curse",
        "rules": "When flipped, the coin has a 50% chance of granting +1d4 temporary hit points for one round to the user (boon) and a 25% chance of inflicting -1d4 temporary hit points for one round (curse). The effect is instantaneous."
      },
      {
        "title": "Spectral Imp",
        "rules": "There's a 10% chance that flipping the coin will summon a small spectral imp. This imp will grant you a minor boon or curse, as described above, but it also has a mischievous nature and might cause further chaos."
      }
    ],
    "levelRequirementReason": "The coin's unpredictable nature makes it dangerous for even the most novice adventurers.",
    "vendorReason": "Fate Forge specializes in items that carry the weight of fate, and this coin is a perfect example of such an item.",
    "shippingDetail": "The Courier of Shadows ensures that the coin arrives safely but may require a night to deliver due to its cursed nature.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous; effect lasts for one round",
      "endsWhen": "At the end of your next turn",
      "charges": "Unlimited, but only once per day"
    },
    "priceReason": "The coin's unpredictable nature and the potential for minor chaos it can bring make it a valuable yet risky item.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T21:33:46.855146+00:00",
    "aiReviewedAt": "2026-07-23T21:33:46.855146+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_stirrups_of_swiftness": {
    "id": "equestria_item_stirrups_of_swiftness",
    "name": "Stirrups of Swiftness",
    "description": "The Stirrups of Swiftness are sturdy yet enchanted, crafted from ironwood imbued with a touch of Pegasus magic. These stirrups allow riders to surge forward at an incredible pace, their hooves striking the ground like thunder. They also offer a chance to halve the duration of any slowing effects they might encounter during their gallop. No wonder Wario covets these – who wouldn't want to run faster than the wind?",
    "category": "equipment",
    "price": 710,
    "icon": "🐴",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "+3 to movement speed",
      "50% chance to halve the effect of slowing conditions"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Courier Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+3 to movement speed",
        "rules": "Active on a rider's turn as a bonus action. Lasts until the start of your next turn. Ends if you dismount or are knocked prone."
      },
      {
        "title": "50% chance to halve slowing effects",
        "rules": "Passive effect while mounted. Has a 50% chance each time you enter a slowing condition (such as from being knocked prone, reduced speed due to terrain, etc.). This does not stack with other similar effects."
      }
    ],
    "levelRequirementReason": "These stirrups are designed for beginners and experienced riders alike, offering an accessible boost to movement.",
    "vendorReason": "Applejack sells a wide variety of items that enhance daily life in Ponyville, including these versatile and popular riding aids.",
    "shippingDetail": "Delivered swiftly by the fastest means available, ensuring your order arrives fresh and ready to use.",
    "usage": {
      "activation": "Bonus action activation for speed boost. Passive slowing effect mitigation always active while mounted.",
      "duration": "Active until start of next turn or if you dismount.",
      "endsWhen": "Dismounting or being knocked prone.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Stirrups' balance between utility and accessibility, along with their enchantments, justify this fair price in XP.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T21:33:03.928654+00:00",
    "aiReviewedAt": "2026-07-23T21:33:03.928654+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_berry_potion_of_confusion": {
    "id": "equestria_item_berry_potion_of_confusion",
    "name": "Berry Potion of Confusion",
    "description": "The Berry Potion of Confusion is a vibrant purple concoction brewed from the rarest berries found in the heart of the Everfree Forest. Its chaotic magic ensures that after imbibing, you might find yourself questioning reality—perhaps mistaking a grumpy griffin for your best friend, or believing you’ve just won the Equestria Games. This potion not only muddles your senses but also has a chance to trigger either a beneficial or detrimental status effect, making each sip a gamble.",
    "category": "consumables",
    "price": 120,
    "icon": "🍇",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Confusion",
      "Random Status Effect"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Rainbow Courier Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Confusion",
        "rules": "The drinker is affected by the confusion condition for 1 minute. They must make a DC 13 Wisdom saving throw at the start of their turn to avoid acting randomly until the effect ends."
      },
      {
        "title": "Random Status Effect",
        "rules": "There is a 50% chance that after consuming the potion, a random beneficial or detrimental status effect activates. The status effect lasts for 1 minute and can be either healing (restoring 2d4+2 hit points) or harmful (inflicting 1d6+1 negative hit points)."
      }
    ],
    "levelRequirementReason": "This potion is accessible to low-level characters who need a challenge without the risk of high-level party disruption.",
    "vendorReason": "The Crystal Empire, known for its diverse and often quirky items, stocks this unique potion among its offerings.",
    "shippingDetail": "Ships via Rainbow Courier Express with a standard handling time of two days.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "Instantaneous effect, ongoing confusion and status condition last for their respective durations",
      "endsWhen": "The confusion ends when the duration expires or is dispelled. The status effect ends upon expiration or is otherwise resolved.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The potion's rarity, unique brewing process, and dual effects justify its high price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T21:33:15.647134+00:00",
    "aiReviewedAt": "2026-07-23T21:33:15.647134+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_dragonscale_amulet": {
    "id": "earth_land_dragonscale_amulet",
    "name": "Shard of the Azure Wyrm",
    "description": "The Shard of the Azure Wyrm is a fragment of an ancient dragon's scale, now pulsing with the remnants of its former glory. This amulet grants resistance to cold and a peculiar charm that subtly increases your affinity for shiny objects—just like Wario, but without the hoarding tendencies. Legend has it that those who wear this talisman find themselves more resilient against frost-based attacks and less prone to being frightened by icy threats.",
    "category": "equipment",
    "price": 9300,
    "icon": "🐉",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Cold Resistance",
      "Unsettling Treasure Hoard"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Magical Delivery Drone",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "Wearing this amulet grants you resistance to cold damage. This effect is active as long as the amulet remains on your person and does not require any action to activate."
      },
      {
        "title": "Unsettling Treasure Hoard",
        "rules": "Once per short or long rest, you can gain a temporary increase in inventory space that allows you to carry an additional 1d6 + your level items. This effect lasts for 1 hour and is subject to the DM's discretion regarding its practicality."
      }
    ],
    "levelRequirementReason": "The Shard of the Azure Wyrm requires a minimum character level of 9 due to its powerful magical properties and the need for a strong connection between the wearer and the amulet.",
    "vendorReason": "As one of the leading suppliers of ancient and rare magic items, Magic Shop is known for offering unique and powerful artifacts like the Shard of the Azure Wyrm.",
    "shippingDetail": "The amulet is delivered swiftly by the Magical Delivery Drone, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous; no action required once worn.",
      "duration": "Until removed or destroyed.",
      "endsWhen": "The amulet is removed from your person or destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Shard of the Azure Wyrm is priced at 1000 XP due to its rarity, magical properties, and the level requirement ensuring it remains a valuable yet balanced addition to any adventurer's arsenal.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:33:34.522073+00:00",
    "aiReviewedAt": "2026-07-23T21:33:34.522073+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_fortune_cookie": {
    "id": "earth_land_fortune_cookie",
    "name": "Wario's Guaranteed Lucky Cookie",
    "description": "Wario's Guaranteed Lucky Cookie, a crisp biscuit wrapped in mischievous fortune, is crafted by the enigmatic Master Baker of Wario’s Emporium. Crack it open to find a cryptic message that can sway the hearts of your allies or deceive your foes with surprising accuracy. Legend has it this cookie holds the secret to any quest’s hidden path, though it might just be the cunning prankster Wario’s own brand of fortune. Be wary; some cookies are slightly stale.",
    "category": "premium",
    "price": 3300,
    "icon": "🍪",
    "stock": 9,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Persuade with Precision",
      "Quest Clue Revelation"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Swift Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Persuade with Precision",
        "rules": "When you consume Wario's Guaranteed Lucky Cookie, you gain +5 to one persuasion check of your choice. This effect lasts for 1 turn."
      },
      {
        "title": "Quest Clue Revelation",
        "rules": "Once per short or long rest, after cracking open the cookie, roll a d20 and add your Charisma modifier. On a result of 15 or higher, you uncover a hidden clue related to the current quest."
      }
    ],
    "levelRequirementReason": "This cookie's cryptic fortune is accessible to all adventurers, making it a versatile tool for any campaign.",
    "vendorReason": "Master Baker of Wario’s Emporium is known for her eccentric creations and this cookie is no exception.",
    "shippingDetail": "Delivered swiftly, usually within one day due to the courier's reputation.",
    "usage": {
      "activation": "Eating the cookie during a persuasion check or at the start of your rest period.",
      "duration": "1 turn for Persuade with Precision; instantaneous for Quest Clue Revelation",
      "endsWhen": "The effect ends when its duration expires or you take damaging action.",
      "charges": "Unlimited, as long as you have food to consume."
    },
    "priceReason": "Balanced at 1000 XP, this cookie offers significant benefits without overpowered effects.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T21:34:07.444055+00:00",
    "aiReviewedAt": "2026-07-23T21:34:07.444055+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_oceanic_resonance": {
    "id": "teyvat_item_oceanic_resonance",
    "name": "Resonance of the Azure Depths",
    "description": "A perfectly preserved nautilus shell, radiating a calming Hydro aura. The Resonance of the Azure Depths is said to have been held by a powerful Mizutsune who could command the tides with its whispers. Its cool surface hums with ancient power, whispering tales of forgotten seas and lost treasures. Legends speak of it as a conduit between the deep and the surface, granting those who wield it a brief moment of oceanic dominion.",
    "category": "equipment",
    "price": 9400,
    "icon": "💧",
    "stock": 18,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Hydro Burst",
      "Tidecaller's Breath"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Hydro Burst",
        "rules": "When you hit an enemy with a Hydro attack while holding the Resonance, it creates a small whirlpool. This effect deals additional Hydro damage equal to your level + 2d6. The whirlpool lasts for 1 minute and grants advantage on saving throws against being knocked prone within its radius."
      },
      {
        "title": "Tidecaller's Breath",
        "rules": "For 30 seconds, you gain the ability to breathe underwater as if under the effects of Water Breathing. This effect also allows you to cast Hydro spells at a +1 caster level bonus and increases your effective Hydro damage by 25%. The effect ends when you take a short or long rest."
      }
    ],
    "levelRequirementReason": "This item is crafted for experienced adventurers who can wield its ancient power responsibly.",
    "vendorReason": "The harbor's traders have access to rare and powerful relics from the oceanic depths, including this artifact of Mizutsune lore.",
    "shippingDetail": "Ships via the Sea Serpent Express; delivery may take up to three days due to its fragile nature.",
    "usage": {
      "activation": "Instantaneous effect upon hitting an enemy with a Hydro attack, and passive effect during the duration of Tidecaller's Breath.",
      "duration": "Hydro Burst lasts until the end of your next turn after using it. Tidecaller's Breath ends when you take a short or long rest.",
      "endsWhen": "The effects expire naturally upon completion of their durations or if you are incapacitated.",
      "charges": "Unlimited, recharges after a short or long rest."
    },
    "priceReason": "This item's price is balanced to reflect its rarity and the ancient power it contains, making it accessible for experienced adventurers.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-23T21:34:19.119396+00:00",
    "aiReviewedAt": "2026-07-23T21:34:19.119396+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_void_essence": {
    "id": "teyvat_item_void_essence",
    "name": "Void Essence Core",
    "description": "The Void Essence Core is a pulsating sphere of purest void energy, harvested from the depths of Tatarasuna where ancient archons reside. This core grants its bearer a +10 bonus to all damage rolls involving void magic and imbues them with the power to cast 'Void Blast' once per day. The essence whispers secrets of dark forces, reducing any healing received by 25% if the target is corrupted by it.",
    "category": "premium",
    "price": 59000,
    "icon": "🖤",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Void Damage Boost",
      "Void Corruption"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Dimensional Rift Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Void Damage Boost",
        "rules": "The user gains a +10 bonus to all damage rolls involving void magic. This effect is permanent and does not require activation."
      },
      {
        "title": "Void Corruption",
        "rules": "Once per day, the user can cast 'Void Blast' at will. The spell has a 5-foot radius centered on an enemy within range (30 feet). It deals 2d6 necrotic damage and reduces all healing received by targets in its area of effect by 25%, for a duration of 1 minute."
      }
    ],
    "levelRequirementReason": "This core is accessible to low-level characters who wish to dabble in void magic.",
    "vendorReason": "Inazuma Imports deals exclusively in exotic and powerful artifacts from the Seven Seas, including this rare essence.",
    "shippingDetail": "Due to its volatile nature, this item is shipped under strict temperature controls ensuring it remains stable during transit.",
    "usage": {
      "activation": "Instantaneous action for casting 'Void Blast'; no activation required for the +10 bonus to void damage rolls.",
      "duration": "Permanent (damage boost) and 1 minute (Void Blast's effect on healing reduction)",
      "endsWhen": "The duration of 'Void Blast' ends after one minute; the permanent damage boost remains until removed by a spell or other means.",
      "charges": "One daily use for casting 'Void Blast'"
    },
    "priceReason": "The item's rarity and unique effects justify its price, providing both utility and thematic depth.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T21:34:04.657327+00:00",
    "aiReviewedAt": "2026-07-23T21:34:04.657327+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_lion_archon_scroll": {
    "id": "teyvat_item_lion_archon_scroll",
    "name": "Scroll of the Steadfast Lion",
    "description": "The Scroll of the Steadfast Lion is a meticulously crafted scroll imbued with the wisdom and fortitude of the Archon of Mondstadt. Rolled tightly into a scroll, it bears the symbol of the lion—a heraldic emblem of valor and unyielding resolve. This scroll not only bolsters your willpower but also grants you temporary resistance to fear and madness, perfect for those moments when courage is most needed in the face of adversity.",
    "category": "services",
    "price": 3300,
    "icon": "🦁",
    "stock": 22,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "bolster resolve",
      "resist fear"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Bolster Resolve",
        "rules": "Activates as a bonus action. Grants you +5 to your Will saving throws and increases your resistance against being frightened for the duration."
      },
      {
        "title": "Resist Fear",
        "rules": "The scroll provides temporary resistance to fear effects, allowing you to make a DC 14 Wisdom saving throw at the start of each combat round. On a success, you ignore any effect that would impose the frightened condition on you until your next short or long rest."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Insight to effectively use the scroll's wisdom-based benefits.",
    "vendorReason": "Mondstadt is known for its scholars and sages, who are adept at crafting such scrolls that draw from the city’s rich lore.",
    "shippingDetail": "Delivered by the swift Messenger Hawk, ensuring you receive your scroll within a week of purchase.",
    "usage": {
      "activation": "Bonus action to activate and gain benefits.",
      "duration": "Until the end of your next short or long rest.",
      "endsWhen": "Restored after a short or long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price to reflect its rarity and the expertise required in crafting such a scroll.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T21:34:00.864689+00:00",
    "aiReviewedAt": "2026-07-23T21:34:00.864689+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_yohud_amulet": {
    "id": "teyvat_item_yohud_amulet",
    "name": "Amulet of the Silent God",
    "description": "The Amulet of the Silent God is a fragment of ancient lore from Yohud's domain. Its cold, polished surface hums with an eerie silence that cloaks you in stillness and whispers of invisibility. It muffles your movements to near imperceptibility and dampens surrounding sounds, making it perfect for stealthy maneuvers or simply avoiding unwanted attention. The amulet’s whispering resonance can even interfere with enemy spells, momentarily silencing their abilities.",
    "category": "equipment",
    "price": 54000,
    "icon": "🤫",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Silent Muffle",
      "Whispering Invisibility"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "phantom_ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silent Muffle",
        "rules": "The amulet muffles your movements and dampens surrounding sounds. This effect provides a +30% bonus to stealth checks but reduces the range at which enemies can detect you by half (to 15 feet). The effect lasts until the start of your next turn, and it ends if you take any action that would make noise."
      },
      {
        "title": "Whispering Invisibility",
        "rules": "The amulet's whispering resonance can interfere with enemy spells. When an enemy spell or ability targets a creature within 30 feet of you, there is a 25% chance it will be silenced for 1 round (DC 16). This effect has no cooldown and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The amulet's intricate craftsmanship requires a basic understanding of stealth principles, making level 1 the appropriate requirement.",
    "vendorReason": "Inazuma Imports deals in artifacts from various domains and this amulet is believed to be an artifact of significant historical value.",
    "shippingDetail": "The Phantom Ship ensures secure delivery, often arriving with a small contingent of guard dogs to protect the item's integrity.",
    "usage": {
      "activation": "Passive effect activated by wearing the amulet.",
      "duration": "Instantaneous, lasts until end of next turn or interrupted.",
      "endsWhen": "Interrupted if you make noise or take any action that would break stealth.",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's rarity and the specific, balanced mechanics justify a price of 1000 XP.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-23T21:34:22.452589+00:00",
    "aiReviewedAt": "2026-07-23T21:34:22.452589+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_phantom_echo": {
    "id": "pokemon_item_phantom_echo",
    "name": "Echoing Ghost Orb",
    "description": "The Echoing Ghost Orb pulses with an eerie, spectral glow that flickers like forgotten memories. Crafted from ancient ghostly energy and bound to the whims of a mischievous Pokémon, this orb temporarily duplicates your attacks in a haunting display. It's perfect for luring unsuspecting trainers into a phantasmal distraction, leaving them bewildered and confused. The orb’s spectral pulses can restore a little life when you need it most, but beware—its duplicating magic might just leave you as lost as the Pokémon who first discovered it.",
    "category": "consumables",
    "price": 3300,
    "icon": "👻",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Duplicating Attacks",
      "Confusion on Target"
    ],
    "vendor": "pokemart",
    "shippedBy": "Pokémail Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Duplicating Attacks",
        "rules": "Upon activation, the Echoing Ghost Orb duplicates your next attack. This duplicate attack occurs as an opportunity action and targets the same creature. If successful, it deals 15% bonus damage for 3 turns. The duplicate attack does not provoke attacks of opportunity."
      },
      {
        "title": "Confusion on Target",
        "rules": "There's a 20% chance that the target becomes confused as an immediate action until the start of its next turn, costing it any action it would take at that time. This effect has no save DC and can only occur once per round."
      }
    ],
    "levelRequirementReason": "It's a simple yet effective tool for beginners to practice their attacks in a whimsical manner.",
    "vendorReason": "The Pokémart stocks an array of items, including the Echoing Ghost Orb, which is perfect for both novice and experienced trainers seeking unique tools.",
    "shippingDetail": "Delivered via Pokémail Express, ensuring that the orb arrives fresh and ready to use.",
    "usage": {
      "activation": "Opportunity action (requires being within reach of an opponent)",
      "duration": "Instantaneous (single attack)",
      "endsWhen": "The target makes an opportunity attack or the end of your next turn",
      "charges": "Unlimited, but requires a short rest to duplicate another attack"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its utility and the ghostly energy required for crafting.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-24T23:54:04.693028+00:00",
    "aiReviewedAt": "2026-07-24T23:54:04.693028+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_trainer_badge": {
    "id": "pokemon_item_trainer_badge",
    "name": "Elite Four's Favor Token",
    "description": "The Elite Four's Favor Token gleams with a subtle, almost imperceptible glow, its polished surface etched with the enigmatic emblems of the legendary tacticians. This relic is said to channel their strategic brilliance, enhancing one's tactical acumen in both combat and negotiation. Wielders report an uncanny ability to foresee opponents' moves and counter them effectively, along with a newfound eloquence that persuades even the most skeptical NPCs. This badge is a testament to the Elite Four's unmatched prowess, and its rumored power has made it a sought-after prize among trainers seeking to master both battle and diplomacy.",
    "category": "equipment",
    "price": 9400,
    "icon": "🏆",
    "stock": 18,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Tactical Insight",
      "Persuasive Eloquence"
    ],
    "vendor": "league_store",
    "shippedBy": "Courier Pigeon Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Tactical Insight",
        "rules": "Increases critical hit chance by 15% when attacking. This effect lasts until the end of your next turn after activation and requires a successful attack roll to trigger."
      },
      {
        "title": "Persuasive Eloquence",
        "rules": "Grants +4 to Diplomacy checks against NPCs, which can be used once per short or long rest. The bonus is effective for 1 hour after use."
      }
    ],
    "levelRequirementReason": "The badge's strategic insights and persuasive powers are too advanced for those below level 8.",
    "vendorReason": "The Elite Four personally oversees the sale of items that embody their legacy, ensuring only the most trusted dealers sell these tokens.",
    "shippingDetail": "The Courier Pigeon Express delivers the token within a day, but it requires an additional fee for expedited delivery.",
    "usage": {
      "activation": "Activates with a successful attack roll when used in combat. Diplomacy checks can be made once per short or long rest.",
      "duration": "Tactical Insight lasts until the end of your next turn after activation. Diplomatic Eloquence is effective for 1 hour after use.",
      "endsWhen": "The effects expire naturally as described, or when the item runs out of charges (recharges on a full rest).",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This badge's strategic and diplomatic enhancements are highly valued by trainers looking to gain an edge in both combat and diplomacy.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:34:55.687562+00:00",
    "aiReviewedAt": "2026-07-23T21:34:55.687562+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_legendary_shift": {
    "id": "pokemon_item_legendary_shift",
    "name": "Dimensional Distortion Shard",
    "description": "The Dimensional Distortion Shard pulses with an eerie, multicolored glow, shimmering as if reality itself weaves in and out of focus around it. This fragment of warped space-time allows brief glimpses into alternate dimensions—ones where Wario's inventions have mutated into bizarre Pokémon and the very fabric of time seems unstable. Use this shard to teleport short distances, but be wary; the instability might trigger a random status effect on you, potentially leading to confusion or paralysis. It grants temporary resistance against these effects, ensuring your survival if things go awry.",
    "category": "curiosities",
    "price": 400000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "godly",
    "effects": [
      "Teleportation",
      "Random Status Effect"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Mystic Courier",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Teleportation",
        "rules": "When activated as a bonus action, the shard allows you to teleport up to 30 feet. This effect is instantaneous but may trigger a random status effect on the user."
      },
      {
        "title": "Random Status Effect",
        "rules": "There's a 15% chance that activating the shard will trigger one of the following effects: confusion, paralysis, or both for 1 minute. The save DC is 13."
      }
    ],
    "levelRequirementReason": "The instability and power of the shard demand a high-level character to wield it safely.",
    "vendorReason": "As a reputable dealer in strange and magical items, Safari Shop can offer this godly artifact to adventurers seeking unique treasures.",
    "shippingDetail": "The Mystic Courier ensures the safe delivery of the shard within three days, with additional precautions for its volatile nature.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous teleportation; status effect lasts 1 minute if triggered",
      "endsWhen": "The duration ends when it expires or you take any other action on your turn that requires concentration, unless the shard is destroyed in the process.",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "Given its mythic rarity and volatile nature, this shard's price reflects both its power and the risk involved.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-23T21:34:51.562870+00:00",
    "aiReviewedAt": "2026-07-23T21:34:51.562870+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_evolution_shard": {
    "id": "pokemon_item_evolution_shard",
    "name": "Primal Echo Shard",
    "description": "The Primal Echo Shard is a shimmering fragment that pulses with ancient power. Crafted from the essence of legendary Pokémon, it radiates raw energy when held near a compatible creature. If used improperly, the shard can trigger an unintended and chaotic evolution, much like the mishaps of its creator, Wario himself. When wielded correctly, it grants temporary stat boosts to the Pokémon, enhancing its base stats by 1 for three turns.",
    "category": "curiosities",
    "price": 9400,
    "icon": "✨",
    "stock": 25,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Trigger Evolution",
      "Temporary Stat Boost"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Pokémail Delivery",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Trigger Evolution",
        "rules": "Activates as a bonus action within a 30-foot radius. There is a small chance (5%) that the targeted compatible Pokémon will undergo an unexpected evolution, which may be chaotic and uncontrollable."
      },
      {
        "title": "Temporary Stat Boost",
        "rules": "Grants +2 to the target Pokémon's base stats for three turns. This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 9 to ensure proper handling and control over such powerful ancient relics.",
    "vendorReason": "The Safari Shop specializes in exotic Pokémon items, including those with unique and rare properties like the Primal Echo Shard.",
    "shippingDetail": "Ships via Pokémail's express service ensuring safe delivery within a week.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "3 turns, once per day",
      "endsWhen": "The effect ends when the turns expire or if the Pokémon is incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and potential for both beneficial and chaotic use.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:34:35.923069+00:00",
    "aiReviewedAt": "2026-07-23T21:34:35.923069+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_hyper_berry": {
    "id": "pokemon_item_hyper_berry",
    "name": "Hyper-Charged Berry",
    "description": "The Hyper-Charged Berry, a plump and intensely sweet berry from an obsessive trainer’s garden, is a powerhouse of vitality. Its cultivation required years of meticulous care in a trainer’s greenhouse, where it absorbed the very essence of Pokémon battle strategies. Consuming one of these berries not only replenishes 50 Hit Points but also fully restores your Pokémon’s PP, ensuring they’re ready for their next big challenge or just a quick snack like Wario's famous berry-eating marathon.",
    "category": "consumables",
    "price": 120,
    "icon": "🍓",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Revitalizing Restoration",
      "PP Replenishment"
    ],
    "vendor": "pokemart",
    "shippedBy": "Standard Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Revitalizing Restoration",
        "rules": "When consumed, the Hyper-Charged Berry instantly restores 50 Hit Points to the Pokémon. This effect is instantaneous and does not require an action."
      },
      {
        "title": "PP Replenishment",
        "rules": "Eating this berry also fully replenishes all of your Pokémon's PP (if any were previously depleted). This effect is equally immediate, providing a burst of energy for your next move or spell."
      }
    ],
    "levelRequirementReason": "The Hyper-Charged Berry is designed to be accessible to beginners and experienced trainers alike, offering a simple yet effective way to recover during battles.",
    "vendorReason": "Pokemarts are the go-to stores for all Pokémon trainers, providing them with essential supplies and items like the Hyper-Charged Berry that help them through tough times.",
    "shippingDetail": "Delivered within a day of purchase, ensuring trainers can quickly restock their supplies after a rough battle or simply enjoy a snack.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Single use; effect is immediate upon consumption",
      "endsWhen": "Exhausted after one use",
      "charges": "Unlimited"
    },
    "priceReason": "The Hyper-Charged Berry’s price reflects its rarity and the resources required for its cultivation, making it a valuable but not overpriced item in the Pokémon world.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T21:35:07.223288+00:00",
    "aiReviewedAt": "2026-07-23T21:35:07.223288+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_ringworm_hat": {
    "id": "middle_earth_ringworm_hat",
    "name": "Mushroom Maestro's Headgear",
    "description": "The Mushroom Maestro's Headgear is a slightly damp hat of verdant hue, rumored to have once belonged to a particularly enthusiastic mushroom hunter. Crafted from enchanted oak and woven with ancient fungal magic, it provides surprising protection against minor magical ailments and the occasional drizzle. The hat emits a faint, pleasant aroma that can distract even the most grumpy of dwarves, making it indispensable for any foray into the wilds.",
    "category": "equipment",
    "price": 3300,
    "icon": "🍄",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Mushroom Magic",
      "Grumpy Dwarf Distractor"
    ],
    "vendor": "elven_market",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mushroom Magic",
        "rules": "The wearer gains resistance to poison damage and a +1 bonus to saving throws against magical effects. This effect lasts for the duration of one long rest."
      },
      {
        "title": "Grumpy Dwarf Distractor",
        "rules": "As an action, the wearer can activate this hat's magic to release a puff of calming mushroom fragrance, which has a 50% chance to make a grumpy dwarf within 30 feet act less grumpily for 1 minute. The hat can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This hat's magic is simple and accessible, suitable for any adventurer who appreciates its unique benefits.",
    "vendorReason": "The Elven Market prides itself on offering rare and magical items from all corners of Middle-earth, making it the perfect vendor for this enchanted headgear.",
    "shippingDetail": "Delivered swiftly by the Winged Couriers, ensuring adventurers receive their gear without delay.",
    "usage": {
      "activation": "Action or Reaction (for Grumpy Dwarf Distractor)",
      "duration": "Instantaneous (Mushroom Magic), 1 minute (Grumpy Dwarf Distractor)",
      "endsWhen": "Ends with the duration ends",
      "charges": "Uses once per long rest"
    },
    "priceReason": "The hat's enchanted properties and unique effects justify a price of 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:35:10.839256+00:00",
    "aiReviewedAt": "2026-07-23T21:35:10.839256+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_stone_of_reflection": {
    "id": "middle_earth_stone_of_reflection",
    "name": "The Glimmering Pebble of Lost Memories",
    "description": "The Glimmering Pebble of Lost Memories is a smooth, grey stone that whispers tales of forgotten ages. Held in your hand, it reveals fleeting images from bygone eras, offering clues to hidden passages and long-lost lore. Its surface catches the light with an ethereal glow, hinting at the untold stories it holds within. Use it wisely, for gazing too deeply into its past may stir memories that are better left dormant.",
    "category": "curiosities",
    "price": 60000,
    "icon": "✨",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "reveals hidden pathways",
      "triggers flashbacks"
    ],
    "vendor": "shire_shop",
    "shippedBy": "Dire Bear Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Pathways",
        "rules": "When you hold the pebble, it illuminates a hidden passage within a radius of 10 feet. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Trigger Flashbacks",
        "rules": "There is a 25% chance that holding the pebble causes you to experience a brief flashback, which lasts until your next short or long rest. During this time, you are incapacitated and have disadvantage on all ability checks and saving throws."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurer can benefit from glimpsing forgotten paths.",
    "vendorReason": "The hobbits of The Shire, with their keen eyes for history, often trade in relics that bridge past and present.",
    "shippingDetail": "Ships directly from the Shire, with a delivery time of one week via the ancient bear cart routes.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous reveal; lasts for 1 minute",
      "endsWhen": "After its duration ends or if you release it before then",
      "charges": "Unlimited"
    },
    "priceReason": "The pebble's mythic rarity and historical significance justify a price of 1,000 XP.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-23T21:35:14.126085+00:00",
    "aiReviewedAt": "2026-07-23T21:35:14.126085+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_wario_footstool": {
    "id": "middle_earth_wario_footstool",
    "name": "Wario's Wobbly Resting Place",
    "description": "Wario's Wobbly Resting Place, a delightfully unstable footstool crafted from gnarled oak and adorned with mismatched metal trims, is a quirky companion for adventurers seeking respite in ancient ruins or during nefarious plotting sessions. This peculiar stool not only offers a brief reprieve but also has a whimsical tendency to nudge you toward hidden treasures, albeit unpredictably. Its slightly louder steps can alert both friends and foes alike, making it a double-edged boon for any explorer.",
    "category": "equipment",
    "price": 120,
    "icon": "🦶",
    "stock": 25,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Increased Stamina Regeneration",
      "Random Treasure Encounters"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "Rolling Log",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Stamina Regeneration",
        "rules": "While seated on Wario's Wobbly Resting Place, the user regenerates stamina at a rate increased by 10% for the duration of their short rest. This effect does not apply to long rests or during combat."
      },
      {
        "title": "Random Treasure Encounters",
        "rules": "Each time you sit on Wario's Wobbly Resting Place, there is a minor chance (20%) that it will nudge you toward an area containing hidden treasure. The exact nature and quantity of the treasure are determined by the Dungeon Master."
      }
    ],
    "levelRequirementReason": "This footstool's quirky design requires no specific level, as its benefits are accessible to adventurers at all stages of their journey.",
    "vendorReason": "The Dwarven Forge is known for crafting unique and whimsical items that blend functionality with charm, making it the perfect vendor for this peculiar footstool.",
    "shippingDetail": "Delivered by a lumbering rolling log, which ensures safe transport through rugged terrain.",
    "usage": {
      "activation": "Passive effect upon sitting; ends when you stand up or end your short rest.",
      "duration": "Lasts for the duration of one short rest.",
      "endsWhen": "The effect concludes when you finish a short rest or stand up from it.",
      "charges": "Unlimited"
    },
    "priceReason": "The unique design, craftsmanship, and functional benefits justify this fair value in XP.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T21:35:43.238859+00:00",
    "aiReviewedAt": "2026-07-23T21:35:43.238859+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_sticky_climb": {
    "id": "grand_country_sticky_climb",
    "name": "Gravity Grip Gummies",
    "description": "Gravity Grip Gummies are chewy, neon-green candies that instantly transform your grip into an unbreakable bond with any surface. Once consumed, they allow you to climb walls and ceilings as if gravity were a mere suggestion. The gummies' sticky formula is said to have been perfected in the ancient forge of Gravemaw, where the very essence of mass was molded into their chewy form. Warning: prolonged use can lead to an uncontrollable urge to perform aerial acrobatics like a gummy-powered superhero.",
    "category": "consumables",
    "price": 120,
    "icon": "🪨",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "gravity_climbing",
      "temporary_increased_dexterity"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravity Climbing",
        "rules": "Eating one Gravity Grip Gummy allows you to climb walls and ceilings as if gravity were reversed. This effect lasts for 1 minute, during which time you have a +3 bonus to Dexterity (Acrobatics) checks. The effect ends if you fall from the surface or consume another gummy within that period."
      },
      {
        "title": "Temporary Increased Dexterity",
        "rules": "While under the influence of Gravity Climbing, you gain a +3 bonus to your Dexterity saving throws and ability checks related to Acrobatics. This effect persists for 1 minute or until you fall from the surface, whichever comes first."
      }
    ],
    "levelRequirementReason": "These gummies are designed to be accessible to adventurers of all levels who need an extra boost in tricky situations.",
    "vendorReason": "The Vertical Vendor specializes in gear that helps adventurers navigate the most challenging terrains, and Gravity Grip Gummies are a natural fit for their inventory.",
    "shippingDetail": "Shipped via the swift Delivery Drone service. Expect delivery within one week of purchase.",
    "usage": {
      "activation": "Eating one gummy",
      "duration": "1 minute or until you fall from a surface, whichever comes first",
      "endsWhen": "You consume another gummy or fall from the climbing surface",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the unique and versatile utility of these gummies.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T21:36:03.460988+00:00",
    "aiReviewedAt": "2026-07-23T21:36:03.460988+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_stacked_surprise": {
    "id": "grand_country_stacked_surprise",
    "name": "Layered Loot Lollipop",
    "description": "The Layered Loot Lollipop is a towering confectionary of sugary layers, each concealing a hidden treasure. Bite into it with caution; the deeper you go, the more unpredictable its contents become. Some layers yield gold coins and enchanted trinkets, while others might surprise you with a rare potion or even a tiny Wario figurine. A true test of your luck and resolve, this lollipop is both sticky and delicious, though there's always a chance it could explode in a sugary shower.",
    "category": "curiosities",
    "price": 9400,
    "icon": "🍬",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "random_item_drop",
      "temporary_luck_boost"
    ],
    "vendor": "side_seller",
    "shippedBy": "Giant Spider Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random Item Drop",
        "rules": "When consumed, the lollipop has a 1-in-6 chance to drop a random treasure. This effect occurs once per bite and is not cumulative."
      },
      {
        "title": "Temporary Luck Boost",
        "rules": "Upon consumption, you gain advantage on saving throws for 1 minute. This effect can only occur once every 24 hours."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurer might find themselves intrigued by this confectionary.",
    "vendorReason": "The side seller is known for their eclectic inventory, often carrying odd and unusual items like the Layered Loot Lollipop.",
    "shippingDetail": "Due to its size and potential explosive nature, it must be shipped via Giant Spider Delivery's secure methods, ensuring safe arrival.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "Instantaneous effect; temporary luck boost lasts for 1 minute",
      "endsWhen": "The luck boost ends when the time expires or if you consume another item that grants similar effects.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the rarity, unpredictable nature of its contents, and the potential for rare drops.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T21:35:29.224269+00:00",
    "aiReviewedAt": "2026-07-23T21:35:29.224269+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_whispering_shard": {
    "id": "middle_earth_whispering_shard",
    "name": "Echoing Fragment of Morgoth",
    "description": "The Echoing Fragment of Morgoth is a jagged obsidian shard that pulses with an unsettling, ancient energy. Crafted from the very essence of the Dark Lord's fury, it hums with whispers of forgotten battles and hidden histories. When held closely, it allows you to hear fleeting echoes of times long past—potentially revealing secret passages or lost lore—but prolonged exposure risks driving even the most steadfast mind into madness.",
    "category": "curiosities",
    "price": 60000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grant_insight",
      "chance_to_unearth_secrets"
    ],
    "vendor": "elven_market",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Insight",
        "rules": "As a bonus action, you can focus on the shard to gain advantage on one Intelligence (History) or Investigation check. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Chance to Unearth Secrets",
        "rules": "When in close proximity to a hidden passage or secret door, there is a 25% chance that the shard will pulse with additional information, revealing its location. This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "The shard's power is not easily accessed and requires a certain level of resolve to wield without succumbing to its madness-inducing influence.",
    "vendorReason": "The elves, with their deep connection to ancient lore and history, possess the knowledge and understanding needed to handle such an artifact responsibly.",
    "shippingDetail": "Ships via the Winged Courier, ensuring swift delivery across Middle-earth.",
    "usage": {
      "activation": "Bonus action or as a passive effect when in close proximity to hidden areas.",
      "duration": "1 minute per use of Grant Insight; once per day for Chance to Unearth Secrets.",
      "endsWhen": "The effect ends if you leave the area, are incapacitated, or use it again.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The shard's mythic rarity and unique abilities justify its moderate price in terms of XP.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T21:35:57.057282+00:00",
    "aiReviewedAt": "2026-07-23T21:35:57.057282+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_dwarven_stoutheart": {
    "id": "middle_earth_dwarven_stoutheart",
    "name": "Stone-Forged Resilience Brew",
    "description": "The Stone-Forged Resilience Brew is a robust ale, crafted in the heart of Khazad-dûm by the Dwarven blacksmiths. Its deep-brown hue and rich flavor hint at its potent effects; imbibe to gain +1d4 temporary hit points and advantage on saving throws against exhaustion or cold damage for one hour. This ale is not just a beverage—it's a fortress in your belly, ready to withstand the harshest conditions Khazad-dûm has to offer.",
    "category": "consumables",
    "price": 710,
    "icon": "🍺",
    "stock": 95,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "temporary_hit_points",
      "advantage_on_saving_throws"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "Stone Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Hit Points",
        "rules": "After drinking this brew, you gain +1d4 temporary hit points for one hour. This effect ends when you finish a long rest."
      },
      {
        "title": "Advantage on Saving Throws",
        "rules": "For the next hour, you have advantage on saving throws against exhaustion and cold damage. This benefit expires after an hour or if your hit point total drops to 0."
      }
    ],
    "levelRequirementReason": "This brew is potent but not overly complex, suitable for adventurers of any level who venture into Khazad-dûm.",
    "vendorReason": "The Dwarves of Khazad-dûm are renowned for their craftsmanship and knowledge of fortifying elixirs that aid those who brave their depths.",
    "shippingDetail": "Ships via the Stone Cart, known for its reliability in navigating the treacherous paths of Khazad-dûm. Delivery can take up to a week depending on the path chosen.",
    "usage": {
      "activation": "Drink as an action.",
      "duration": "One hour or until hit points drop to 0.",
      "endsWhen": "Hit point total drops to 0 or after one hour.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "The brew is crafted with rare ingredients and dwarven expertise, making it a valuable addition to any adventurer's supplies.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:35:45.388153+00:00",
    "aiReviewedAt": "2026-07-23T21:35:45.388153+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_shire_charm_of_luck": {
    "id": "middle_earth_shire_charm_of_luck",
    "name": "Lucky Pocket Watch of Bilbo",
    "description": "The Lucky Pocket Watch of Bilbo is a meticulously crafted timepiece, its brass face adorned with engravings of hobbiton and the Shire’s rolling hills. This heirloom from the famous Took has been known to subtly nudge fate in one's favor, increasing the chance of uncovering hidden treasures or narrowly avoiding goblin ambushes. It seems that every second spent near this watch is a second where fortune leans just a touch more in your direction.",
    "category": "equipment",
    "price": 3300,
    "icon": "🍀",
    "stock": 78,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_item_drop_rate",
      "advantage_on_stealth"
    ],
    "vendor": "shire_shop",
    "shippedBy": "Swift Pony Express",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Increased Item Drop Rate",
        "rules": "When you find treasure or loot, there is a +1d4 chance that an additional item of similar value drops. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Advantage on Stealth Checks",
        "rules": "You gain advantage on Dexterity (Stealth) checks for 1 hour after wearing the watch, as if you had taken a short rest. The effect ends early if you are caught in the act of committing a crime or if you voluntarily end it."
      }
    ],
    "levelRequirementReason": "The intricate enchantments on the Pocket Watch require a certain level of magical awareness to properly wield its effects.",
    "vendorReason": "The Shire Shop is known for its connections with hobbit families and the many heirlooms passed down through generations, making it a trusted source for such items.",
    "shippingDetail": "Delivered within one week of purchase, with special handling to ensure the delicate balance of the watch's enchantments is preserved during transit.",
    "usage": {
      "activation": "Passive effect upon donning the watch.",
      "duration": "Lasts until the end of your next short or long rest for the Stealth advantage; ends when you are caught in a crime or voluntarily stop it. The increased item drop rate lasts indefinitely until your next rest.",
      "endsWhen": "Voluntary ending, being caught in a crime, or at the end of your next short or long rest.",
      "charges": "Unlimited charges."
    },
    "priceReason": "The watch's enchantments are subtle but effective, making it a valuable tool for adventurers who value both fortune and stealth.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:36:31.769636+00:00",
    "aiReviewedAt": "2026-07-23T21:36:31.769636+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_absurdity": {
    "id": "kivotos_item_halo_of_absurdity",
    "name": "Halo of Utter Nonsense",
    "description": "The Halo of Utter Nonsense gleams with a wicked sheen, its surface etched with runes of giggling madness crafted from solidified laughter and twisted intentions. When worn, it draws bizarre creatures to your side, causing random objects within 30 feet to levitate unpredictably. Occasionally, the halo triggers a recital of nonsensical poetry, leaving listeners in fits of uncontrollable laughter or confusion. Enemies nearby find themselves momentarily distracted by this chaotic display, but beware—your own mind might be left spinning as much as theirs.",
    "category": "curiosities",
    "price": 710,
    "icon": "🤪",
    "stock": 21,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "summons bizarre creatures",
      "random object levitation"
    ],
    "vendor": "club_supply",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bizarre Creature Summoning",
        "rules": "As an action, you can attempt to summon a random creature within 30 feet of the halo. The DM chooses from the Feywanderer or Vortex Beast. This effect has a 50% chance of success and requires no saving throw. If successful, the creature remains for 1 hour or until it leaves the area voluntarily."
      },
      {
        "title": "Random Object Levitation",
        "rules": "At any time while wearing this halo, you can cause one object weighing up to 50 pounds within 30 feet of you to levitate. The levitating object must be held in place by a creature or structure and remains aloft for 1 minute or until the creature or structure is destroyed."
      }
    ],
    "levelRequirementReason": "The halo's effects are unpredictable and can easily overwhelm a lower-level character, requiring at least level 1 to handle its chaos.",
    "vendorReason": "Club Supply caters to adventurers seeking unique and potentially dangerous curiosities for their next heist or quest.",
    "shippingDetail": "Express Delivery ensures the halo arrives swiftly, but it is recommended you be prepared for a whirlwind of chaotic energy upon opening its packaging.",
    "usage": {
      "activation": "Action (summoning), Instantaneous (levitation)",
      "duration": "1 hour or until dismissed (summoning); 1 minute or until object is destroyed (levitation)",
      "endsWhen": "Effect ends when the creature leaves voluntarily, the levitating object is destroyed, or the wearer dismisses it.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The halo's unpredictable nature and potential for chaotic encounters justify its high price.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T21:36:21.399963+00:00",
    "aiReviewedAt": "2026-07-23T21:36:21.399963+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_data_fragment_alpha": {
    "id": "kivotos_item_data_fragment_alpha",
    "name": "Fragment of Lost Knowledge",
    "description": "This shimmering fragment of a lost student's datapad glows faintly, pulsing with forgotten algorithms and half-formed theories. Its surface is etched with arcane symbols that seem to shift when viewed from different angles. This relic might contain the key to unlocking ancient knowledge or just be a jumbled mess of data—either way, prolonged exposure can cause a disorienting cascade of ideas, leading to moments of profound clarity or overwhelming confusion. Handle it with caution; its power is as unpredictable as it is potent.",
    "category": "curiosities",
    "price": 9500,
    "icon": "💻",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Arcane Knowledge",
      "Intellectual Buff"
    ],
    "vendor": "student_store",
    "shippedBy": "delivery_only",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Arcane Knowledge",
        "rules": "When you interact with the fragment, roll a d10. On an even result, choose one skill you are proficient in: your Intelligence increases by 2 for 1 hour (up to a maximum bonus of +5)."
      },
      {
        "title": "Intellectual Buff",
        "rules": "The fragment grants you advantage on all Wisdom (Insight) checks made to avoid panicking or becoming frightened. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This fragment is too powerful for lower-level characters, as it can grant significant advantages in combat and social situations.",
    "vendorReason": "The student store has a unique stock of rare and forgotten relics from past students who graduated or left campus without taking their ideas with them.",
    "shippingDetail": "Ships via special courier, ensuring the fragment arrives in pristine condition. Delivery can take up to three days due to its sensitivity.",
    "usage": {
      "activation": "Interact as a bonus action.",
      "duration": "1 hour or until expended (recharges after a long rest).",
      "endsWhen": "The effect ends when the duration expires, you lose concentration, or the fragment is damaged.",
      "charges": "Limited to 3 charges."
    },
    "priceReason": "The price reflects the rarity and potential power of the fragment, balanced by its limited use and complexity.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:36:29.146352+00:00",
    "aiReviewedAt": "2026-07-23T21:36:29.146352+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_mushroom_gloomcap": {
    "id": "middle_earth_mushroom_gloomcap",
    "name": "Gloomcap's Echoing Delight",
    "description": "Gloomcap's Echoing Delight are bioluminescent mushrooms that emit a soft, eerie glow. When consumed, they grant night vision for 12 turns and increase your perception by +3, making you more aware of your surroundings. Some travelers claim the mushrooms hum with ancient voices, though others believe it is merely their vivid imagination. These fungi originate from the misty forests of Lothlórien, where they grow in clusters under ancient oaks. Sourced directly from the Shire Shop, these mushrooms are a rare treat for adventurers seeking an edge in the dark.",
    "category": "consumables",
    "price": 710,
    "icon": "🍄",
    "stock": 63,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Night Vision",
      "Enhanced Perception"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Night Vision",
        "rules": "Eating one of Gloomcap's Echoing Delight grants you temporary night vision for 12 turns. You can see in dim light within a 60-foot radius as if it were bright light, and in darkness as if it were dim light. This effect is not cumulative with other sources of darkvision."
      },
      {
        "title": "Enhanced Perception",
        "rules": "For the next 12 turns after consuming one Gloomcap's Echoing Delight, your perception check bonuses are increased by +3. This enhancement does not stack with other effects that grant bonuses to perception checks."
      }
    ],
    "levelRequirementReason": "The mushrooms' potent effects require minimal experience and can be consumed by most adventurers.",
    "vendorReason": "The Shire Shop specializes in rare and exotic goods, including the Echoing Delight from their own enchanted forests.",
    "shippingDetail": "Shipped via trusted Pony Express couriers, these mushrooms are delivered within a week of purchase.",
    "usage": {
      "activation": "Eating one mushroom",
      "duration": "12 turns",
      "endsWhen": "The effects expire after the duration ends or if you consume another Gloomcap's Echoing Delight before the first effect concludes.",
      "charges": "Unlimited"
    },
    "priceReason": "The mushrooms are priced at 1000 XP, offering a balanced value for their unique and potent effects.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-23T21:36:19.224703+00:00",
    "aiReviewedAt": "2026-07-23T21:36:19.224703+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_ring_of_minor_protection": {
    "id": "middle_earth_ring_of_minor_protection",
    "name": "The Slightly Less Terrible Ring",
    "description": "The Slightly Less Terrible Ring is a dwarven masterpiece crafted in the forges of Khazad-dûm. Its ancient steel surface gleams with an inner light that subtly enhances your armor class, deterring both foes and mischievous spirits alike. This ring not only offers resistance to slashing damage but also has a unique ability to deflect projectiles with a 5% chance per turn, ensuring you remain unharmed in the most perilous of battles.",
    "category": "equipment",
    "price": 3300,
    "icon": "💍",
    "stock": 17,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Armor Class Boost",
      "Slashing Damage Resistance"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant eagle",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Armor Class Boost",
        "rules": "Passive effect that increases your armor class by 2. This effect is always active while the ring is worn."
      },
      {
        "title": "Slashing Damage Resistance",
        "rules": "Provides resistance to slashing damage for 5 turns upon activation, which requires a bonus action. The ring can be activated once per short or long rest."
      }
    ],
    "levelRequirementReason": "Crafted in Khazad-dûm, this ring is designed for those who have proven their worth and are capable of wielding its ancient magic.",
    "vendorReason": "The dwarves of Khazad-dûm are known for their unmatched craftsmanship, ensuring that only the most skilled adventurers can purchase such a fine piece.",
    "shippingDetail": "Delivered swiftly by a giant eagle, this ring arrives in pristine condition, ready to protect its wearer.",
    "usage": {
      "activation": "Bonus action to activate and grant resistance to slashing damage for 5 turns.",
      "duration": "5 turns upon activation.",
      "endsWhen": "The effect ends when the user no longer has any turns remaining or the ring is removed.",
      "charges": "Unlimited, but can only be activated once per short or long rest."
    },
    "priceReason": "This ring’s price reflects its rare origin and unique abilities, providing a fair balance for adventurers looking to bolster their defenses.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T21:36:38.759497+00:00",
    "aiReviewedAt": "2026-07-23T21:36:38.759497+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_service_healing_song": {
    "id": "middle_earth_service_healing_song",
    "name": "Liriel's Melodic Mending",
    "description": "Liriel's Melodic Mending is an ancient elven flute crafted from golden willow wood, imbued with the essence of healing songs. Played by a skilled minstrel, it subtly accelerates natural wound recovery and strengthens one’s stamina. Wounded warriors who hear its melody find their cuts and bruises closing faster than usual, though the effect is not instantaneous—think of it as an encouraging hum that aids your body in mending itself more swiftly.",
    "category": "services",
    "price": 9500,
    "icon": "🎵",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Accelerated Healing",
      "Enhanced Stamina"
    ],
    "vendor": "elven_market",
    "shippedBy": "swift owl courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Accelerated Healing",
        "rules": "When played, Liriel's Melodic Mending allows the user to heal 20 hit points per turn for three turns. This effect has no save DC and is not interrupted by other effects; it simply enhances natural healing processes."
      },
      {
        "title": "Enhanced Stamina",
        "rules": "The listener’s stamina improves, reducing the chance of bleeding or poison effects by 50% during the duration of the melody. This effect lasts for three turns and does not require saving against."
      }
    ],
    "levelRequirementReason": "Even a novice minstrel can find joy in playing Liriel's Melodic Mending.",
    "vendorReason": "The Elven Market is known for its collection of rare and magical musical instruments, including those with healing properties.",
    "shippingDetail": "Delivered via the swift owl courier, ensuring the melody's potency remains intact.",
    "usage": {
      "activation": "Bonus action to play the flute",
      "duration": "3 turns",
      "endsWhen": "The effect ends after three turns or when the minstrel stops playing",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced against other healing services, this item offers a unique and potent combination of effects without being overpowered.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:36:41.688346+00:00",
    "aiReviewedAt": "2026-07-23T21:36:41.688346+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_rusty_chronometer": {
    "id": "midlands_item_rusty_chronometer",
    "name": "Time's Twisted Tick",
    "description": "The Time's Twisted Tick is a rusted chronometer salvaged from the crumbling ruins of an ancient Imperial clock tower. Its gears hum with a peculiar rhythm, and it surprisingly remains functional for only five seconds before exploding in a cascade of sparks and minor temporal distortions. Each use grants you increased attack speed by 5% for 10 seconds, and on critical hits, there's a chance to rewind time by one second. Beware: the device can also cause a target to move erratically for two seconds.",
    "category": "equipment",
    "price": 3300,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Increased Attack Speed",
      "Temporal Rewind"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "imperial_courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Increased Attack Speed",
        "rules": "When activated, grants +5% attack speed for 10 seconds. Ends when the duration expires or if you take damage."
      },
      {
        "title": "Temporal Rewind",
        "rules": "On critical hit, there's a 20% chance to rewind time by one second for all creatures within 5 feet of the target. This effect ends on your next turn unless you take damage."
      }
    ],
    "levelRequirementReason": "Requires at least level 8 to control the unpredictable and powerful effects.",
    "vendorReason": "The Empire Exchange deals in relics from fallen empires, including this unique timepiece.",
    "shippingDetail": "Ships via Imperial Courier with a two-day delivery guarantee.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds",
      "endsWhen": "Ends on your next turn or if you take damage.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Balanced price reflects the item's limited duration and unpredictable effects, suitable for level 8 players.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:36:47.313190+00:00",
    "aiReviewedAt": "2026-07-23T21:36:47.313190+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_wario_belly_bumper": {
    "id": "midlands_item_wario_belly_bumper",
    "name": "Wario's Emergency Cushion",
    "description": "Wario's Emergency Cushion is a resilient, plush creation originally crafted by the mischievous Wario to protect his robust form. Crafted from durable fabric and reinforced with a layer of shock-absorbent foam, it can withstand significant impact without losing its shape. This cushion not only absorbs damage but also offers a comical surprise—on rare occasions, it may even attempt to 'bounce' back at an attacker, providing a moment of levity amidst the chaos.",
    "category": "equipment",
    "price": 120,
    "icon": "🛏️",
    "stock": 90,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Damage Absorption",
      "Stun on Heavy Damage"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "stable_hand",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Damage Absorption",
        "rules": "When you take damage from a physical attack, Wario's Emergency Cushion absorbs 50% of that damage. If the absorbed damage would reduce your hit points to 0 or less, the cushion will attempt to 'bounce' back at the source of the attack, dealing 1d6 bludgeoning damage to the attacker."
      },
      {
        "title": "Stun on Heavy Damage",
        "rules": "If you take an amount of damage from a physical attack that would reduce your hit points to 0 or less after absorbing half of it, you are stunned until the start of your next turn. This effect has a maximum duration of one minute."
      }
    ],
    "levelRequirementReason": "Wario's Emergency Cushion is designed for adventurers who may face unexpected challenges early in their journey.",
    "vendorReason": "Midland Merchant, known for their eclectic collection of items, carries this cushion as a quirky yet practical addition to any adventurer's arsenal.",
    "shippingDetail": "Shipped via the stable_hand courier, ensuring safe and timely delivery by carriage.",
    "usage": {
      "activation": "Passive effect; activates automatically when you take damage from a physical attack.",
      "duration": "Instantaneous (effect ends immediately after activation).",
      "endsWhen": "The cushion's effects end once the attack that triggered them is resolved.",
      "charges": "Unlimited, recharges upon being used."
    },
    "priceReason": "Wario's Emergency Cushion offers a unique combination of protection and humor, making it a valuable addition to any adventurer's gear without breaking the bank.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T21:36:51.025816+00:00",
    "aiReviewedAt": "2026-07-23T21:36:51.025816+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_crimson_decree": {
    "id": "midlands_item_crimson_decree",
    "name": "Crimson Decree Seal",
    "description": "The Crimson Decree Seal, a blood-red wax seal embossed with the insignia of an ancient empire, whispers threats and promises in the hand of its wielder. This relic once bound rebellious provinces to the will of the crown; now it grants fleeting authority perfect for intimidating lesser nobles or swaying corrupt guards. While holding this seal, you can command a brief surge of influence that intimidates those around you, though beware—its power is as fickle as it is potent.",
    "category": "equipment",
    "price": 3300,
    "icon": "👑",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Grant Temporary Influence",
      "Intimidate Target"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "royal_messenger",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Grant Temporary Influence (Charisma)",
        "rules": "When you hold the Crimson Decree Seal, you gain a +2 bonus to Charisma checks and saving throws. This effect lasts for up to 1 hour per use."
      },
      {
        "title": "Intimidate Target",
        "rules": "As a bonus action while holding the seal, you can attempt to intimidate a creature within 30 feet. The target must succeed on a Wisdom saving throw (DC 12) or be frightened for up to 1 minute."
      }
    ],
    "levelRequirementReason": "This item's power is best suited for characters who have demonstrated some degree of influence and charisma.",
    "vendorReason": "The Empire Exchange deals exclusively in relics of historical significance, making the Crimson Decree Seal a fitting addition to their inventory.",
    "shippingDetail": "Delivered by trusted royal messengers, ensuring safe and swift delivery.",
    "usage": {
      "activation": "Bonus action or reaction (to intimidate)",
      "duration": "Up to 1 hour per use for influence; up to 1 minute for intimidation",
      "endsWhen": "The effect ends when the duration expires or you are incapacitated.",
      "charges": "Unlimited uses, recharging after a long rest"
    },
    "priceReason": "Balanced at 1000 XP, this item offers a moderate boost to influence and intimidation without being overly powerful.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:37:39.112855+00:00",
    "aiReviewedAt": "2026-07-23T21:37:39.112855+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_whispering_shard": {
    "id": "midlands_item_whispering_shard",
    "name": "Whispering Shard of the Fractured King",
    "description": "The Whispering Shard of the Fractured King is a jagged obsidian fragment, said to be a piece of the throne shattered during the Great Schism. When held, it pulses with residual magic, allowing you to briefly hear the tormented thoughts of those who perished in the conflict—mostly complaints about endless paperwork and the quality of wine served at court banquets. The shard hums softly as it draws forth memories from the past, offering fleeting glimpses into forgotten battles and lost alliances.",
    "category": "curiosities",
    "price": 61000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "tormenting_relic",
      "memory_of_war"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "delivery_only",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Tormenting Relic",
        "rules": "When a creature touches the shard, it must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "title": "Memory of War",
        "rules": "Upon successful activation, you gain advantage on one History check related to an event from the Great Schism. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Only those with a deep understanding of ancient history and the power to face such relics are capable of handling the Whispering Shard.",
    "vendorReason": "The Forgedheart Guild, known for their mastery over ancient artifacts, is entrusted by scholars and historians to handle this fragment carefully.",
    "shippingDetail": "Ships via trusted courier with enhanced security measures due to the shard's volatile nature.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous, with a 1-minute cooldown between uses",
      "endsWhen": "The effect ends when the creature successfully saves against the frightened condition or after one minute if they fail.",
      "charges": "Unlimited"
    },
    "priceReason": "This shard's value lies in its historical significance and the risk involved with handling such a volatile relic, making it moderately priced for those who can afford to take on this challenge.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-23T21:37:09.381413+00:00",
    "aiReviewedAt": "2026-07-23T21:37:09.381413+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_rune_of_swiftness": {
    "id": "midlands_item_rune_of_swiftness",
    "name": "Swift Passage Rune Ritual",
    "description": "The Swift Passage Rune Ritual, hewn from the ancient timeworn stones of Elderglen, allows you to sprint across vast distances in an instant. This forgotten artifact, crafted by speedrunners who once raced shadows themselves, grants a brief burst of hyper-speed that can leave even the most vigilant foes in your dust. However, its power is unpredictable; it might cause you to veer off course or stumble into a hidden danger along the way.",
    "category": "services",
    "price": 130,
    "icon": "🏃",
    "stock": 95,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increase_movement_speed_v (+1d6 speed)",
      "chance_to_evade_attack"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "swift courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increase Movement Speed",
        "rules": "As an action, you can activate this rune to gain a +1d6 bonus to your movement speed for up to 1 minute. This effect ends if you are incapacitated or if the duration expires."
      },
      {
        "title": "Chance to Evade Attack",
        "rules": "While under the effects of increased movement speed, you have advantage on Dexterity saving throws against attacks made during your turn. Once per short rest, this ability can be used as a reaction to gain this benefit without expending an action."
      }
    ],
    "levelRequirementReason": "This rune is suitable for beginners who wish to test their speed and agility in less challenging scenarios.",
    "vendorReason": "The Midlands Merchant carries a variety of relics from the past, including this ancient artifact that still holds some mystic power today.",
    "shippingDetail": "Delivered within one day via swift courier, ensuring your rune arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute",
      "endsWhen": "Incapacitated or duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The rune's unpredictable nature and the materials used in its crafting justify a price that is slightly above common items.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:37:44.486153+00:00",
    "aiReviewedAt": "2026-07-23T21:37:44.486153+00:00",
    "aiReviewVersion": 1
  },
  "internet_firewall_amulet": {
    "id": "internet_firewall_amulet",
    "name": "The Firewall Amulet of Resistance",
    "description": "The Firewall Amulet of Resistance, crafted by the enigmatic Cyber Knights, radiates a digital pulse that shields you from malicious code and psychic assaults. This amulet not only provides a modest resistance to mind control spells but also grants a chance to deflect incoming digital attacks, ensuring your cybernetic systems remain secure. Should your defenses falter, the amulet's protective code may trigger an overload, temporarily scrambling nearby digital signals in a wide radius.",
    "category": "equipment",
    "price": 3300,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "mind_control_resistance",
      "digital_deflection"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Encoded Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Mind Control Resistance",
        "rules": "You gain resistance to psychic damage and have advantage on saving throws against being charmed or dominated. This effect persists for one minute, recharging at the start of your next short or long rest."
      },
      {
        "title": "Digital Deflection",
        "rules": "As a reaction when you are targeted by a digital attack, you can deflect half the damage to the attacker and have a 20% chance to reflect the remaining damage back to them. This effect has a daily limit of three uses."
      }
    ],
    "levelRequirementReason": "The complexity of the amulet's protective code necessitates a minimum character level of 6.",
    "vendorReason": "The Cyber Knights have established the cyber_market as their primary trading hub, ensuring only those who need this protection can access it.",
    "shippingDetail": "Delivered by Encoded Courier with a two-day delay for enhanced security checks.",
    "usage": {
      "activation": "Passive effect. Requires no action to activate.",
      "duration": "One minute, recharges at the start of your next short or long rest.",
      "endsWhen": "The duration expires or you finish a short or long rest.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced for its unique combination of resistance and deflection abilities, this amulet is priced at 1000 XP to reflect its specialized utility and rarity.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T21:37:18.590507+00:00",
    "aiReviewedAt": "2026-07-23T21:37:18.590507+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_shard": {
    "id": "internet_meme_shard",
    "name": "The Viral Meme Shard",
    "description": "The Viral Meme Shard is a crystalline fragment that encapsulates the raw energy of an internet meme. Crafted from the chaotic brilliance of viral content, this shard can be wielded to momentarily uplift your charisma and befuddle enemies with its absurd charm. When activated, it grants you advantage on Charisma checks for 1 minute, while also causing creatures within a 20-foot radius to make Wisdom saving throws or become confused for 1 round.",
    "category": "curiosities",
    "price": 9500,
    "icon": "😂",
    "stock": 33,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "charisma_boost",
      "confusion_blast"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Packet Delivery System",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When activated, this shard grants you advantage on Charisma checks and saving throws. The effect lasts for 1 minute."
      },
      {
        "title": "Confusion Blast",
        "rules": "For every creature within a 20-foot radius of the user, they must make a Wisdom saving throw (DC 13). On a failed save, the creature is confused for 1 round. This effect ends if the confused creature takes any damage or if it makes another successful saving throw."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield this item effectively in combat.",
    "vendorReason": "The data dealer specializes in unique and bizarre artifacts, including internet-born relics like the Viral Meme Shard.",
    "shippingDetail": "Ships via high-speed digital transmission, delivered directly to your hands within an hour of purchase.",
    "usage": {
      "activation": "A bonus action to activate and deploy the shard in combat.",
      "duration": "1 minute or until expended",
      "endsWhen": "The effect ends if you take damage or if another creature ends it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the unique and powerful nature of the Viral Meme Shard.",
    "priceOriginal": 2300,
    "priceReviewedAt": "2026-07-23T21:37:25.922919+00:00",
    "aiReviewedAt": "2026-07-23T21:37:25.922919+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sugar_bomb": {
    "id": "leclaire_isle_sugar_bomb",
    "name": "Honeycomb Havoc",
    "description": "The Honeycomb Havoc is a shimmering golden sphere, crafted from the purest honey and imbued with the essence of a thousand bees. Upon impact, it erupts into a cloud of sticky, sugary sweetness that immobilizes foes in its path and muddles their senses. This confection is not just sweet; it's a tactical nightmare for any battle, especially when paired with a skilled user like Pastry Palace’s renowned confectioners.",
    "category": "consumables",
    "price": 130,
    "icon": "💥",
    "stock": 35,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "Explosive Confection",
      "Sugary Stasis"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Dough Flyer Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Explosive Confection",
        "rules": "When thrown, the Honeycomb Havoc bursts into a cloud of sugary essence that fills a 10-foot radius. Each creature in this area must make a Dexterity saving throw (DC 13) or be restrained by the sticky cloud for 2 turns. On a successful save, they are only blinded."
      },
      {
        "title": "Sugary Stasis",
        "rules": "All creatures within the 10-foot radius of the explosion must succeed on a Wisdom saving throw (DC 13) or become stunned for 1 round. This effect has no save after the first time it is applied to a creature."
      }
    ],
    "levelRequirementReason": "The Honeycomb Havoc requires basic dexterity and coordination, making it accessible to all adventurers.",
    "vendorReason": "Pastry Palace is renowned for its culinary prowess and clever use of natural ingredients in combat applications.",
    "shippingDetail": "Ships via the Dough Flyer, known for its swift and reliable service through pastry-infused routes.",
    "usage": {
      "activation": "Aim and throw as a bonus action",
      "duration": "Instantaneous effect with a single use",
      "endsWhen": "Expended upon impact or after one turn if unengaged",
      "charges": "Unlimited uses, recharged daily"
    },
    "priceReason": "The Honeycomb Havoc is priced at 1000 XP for its unique effects and the daily limited stock.",
    "priceOriginal": 120,
    "priceReviewedAt": "2026-07-23T21:37:34.554664+00:00",
    "aiReviewedAt": "2026-07-23T21:37:34.554664+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_frosting_charm": {
    "id": "leclaire_isle_frosting_charm",
    "name": "The Shimmering Spire",
    "description": "The Shimmering Spire is a delicate charm crafted from solidified vanilla frosting, enchanted by a touch of magical icing that pulses with a frosty glow. This confectionary artifact can chill foes for an instant, dealing biting cold to their flesh, and create slippery surfaces that defy even the most nimble enemies, reducing movement speed in its wake. Its frosty essence also has a chance to freeze targets in place, adding a Wario-style flourish to any skirmish.",
    "category": "curiosities",
    "price": 3300,
    "icon": "❄️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Chill Target",
      "Slippery Surface"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Chill Target",
        "rules": "The Shimmering Spire allows the wielder to briefly chill a target enemy for 2 seconds, dealing 5 cold damage. There is a 10% chance this attack will also apply the 'Frozen' condition, halving the target's speed until the end of their next turn."
      },
      {
        "title": "Slippery Surface",
        "rules": "Upon activation, it creates a slippery surface within a 3-foot radius around the caster. Enemies in this area have their movement speed reduced by 40% for 1 minute or until they leave the area. The effect does not apply to allies."
      }
    ],
    "levelRequirementReason": "Crafted from enchanted frosting, this charm requires a certain level of magical adeptness to wield effectively.",
    "vendorReason": "Sweet Supplies specializes in unique and enchanting curiosities, making The Shimmering Spire an ideal addition to their inventory.",
    "shippingDetail": "The charm is shipped via the Delivery Drone, arriving at your doorstep within a day.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous with a duration of 2 seconds for 'Chill Target' and 1 minute for 'Slippery Surface'",
      "endsWhen": "The effect ends when the target is no longer in range or until the caster uses another action.",
      "charges": "Unlimited, but requires concentration to maintain 'Slippery Surface'"
    },
    "priceReason": "While crafted from seemingly mundane frosting, The Shimmering Spire's enchantments and utility justify its moderate price in the realm of magical trinkets.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T21:38:25.762617+00:00",
    "aiReviewedAt": "2026-07-23T21:38:25.762617+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_dragon_scale_polishing": {
    "id": "earth_land_dragon_scale_polishing",
    "name": "Chromatic Scale Shine",
    "description": "Chromatic Scale Shine is a meticulously crafted paste made from the shed scales of a young Frost Dragon. When applied to armor or weapons, it imbues them with an iridescent sheen that not only dazzles but also subtly disorients foes, making them less accurate for several rounds. It's guaranteed to turn heads and catch the eyes of admirers in any crowd, but beware—its shimmer can be as unpredictable as a frost storm.",
    "category": "services",
    "price": 3300,
    "icon": "✨",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Disorienting Sheen",
      "Iridescent Aura"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Winged Courier (Guaranteed to arrive before your next meal!)",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Disorienting Sheen",
        "rules": "When applied to armor or weapons, Chromatic Scale Shine grants the wielder advantage on Dexterity (Stealth) checks for 1 minute. Additionally, any creature within 5 feet of the item has disadvantage on attack rolls against the wearer until the end of their next turn."
      },
      {
        "title": "Iridescent Aura",
        "rules": "The item emits a dazzling light that increases its AC by +2 for 1 hour, but reduces all other bonuses to AC by -1. The user must make a Constitution saving throw (DC 14) or become blinded until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The dragon scales used in its creation require a proficient handler capable of understanding and utilizing their power.",
    "vendorReason": "Magic Shop specializes in items that enhance one's combat prowess, making Chromatic Scale Shine a natural fit for their inventory.",
    "shippingDetail": "Ships via Winged Courier, ensuring the paste arrives fresh and potent.",
    "usage": {
      "activation": "A bonus action is required to apply Chromatic Scale Shine to armor or weapons.",
      "duration": "1 hour",
      "endsWhen": "The duration ends when the user makes a Dexterity saving throw (DC 14) or until expended.",
      "charges": "Unlimited, but each application requires a bonus action."
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare components and limited daily stock, ensuring it's a sought-after item without being overpowered.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T21:37:54.395788+00:00",
    "aiReviewedAt": "2026-07-23T21:37:54.395788+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_rune_of_wario": {
    "id": "earth_land_rune_of_wario",
    "name": "Wario's Lucky Luster",
    "description": "Wario's Lucky Luster, a rune carved from ancient stone and pulsing with a faint purple glow, is said to have been dropped by the infamous Wario during his quest for lost treasures. This relic not only enhances the wielder’s luck but also instills an irresistible urge to collect shiny objects, making hoarders out of even the most level-headed adventurers. Caution: The rune grants an unquenchable desire for rare finds and a 15% increase in critical hit damage, but those who wear it must be prepared for unexpected impulse purchases that can lead to a gold shortage.",
    "category": "premium",
    "price": 54000,
    "icon": "💰",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "increase_luck",
      "urge_to_collect"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Dimensional Portal (Delivery times may vary wildly)",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Increased Luck",
        "rules": "While holding Wario's Lucky Luster, the wielder gains advantage on saving throws and checks related to chance-based activities. This effect lasts for 1 hour or until expended."
      },
      {
        "title": "Urge to Collect",
        "rules": "The rune grants a +2 bonus to all Wisdom (Perception) checks made to find valuable objects within 30 feet, but also imposes disadvantage on all Wisdom (Insight) checks related to resisting bribery or temptation. The effect lasts for 1 hour and can be expended at will."
      }
    ],
    "levelRequirementReason": "The rune is designed for mid-level adventurers who are more capable of handling its effects without succumbing to the urge to overextend their resources.",
    "vendorReason": "The Earth Emporium specializes in rare and ancient artifacts, making it a fitting vendor for Wario's Lucky Luster.",
    "shippingDetail": "Shipping via Dimensional Portal can result in unexpected delays due to the unpredictable nature of interdimensional travel.",
    "usage": {
      "activation": "The rune automatically activates upon being donned. Its effects do not require any action and last for a duration of 1 hour or until expended.",
      "duration": "1 hour or until expended",
      "endsWhen": "The effect ends when the wearer removes the rune or expends its uses.",
      "charges": "Unlimited, as long as it is worn"
    },
    "priceReason": "The rune’s legendary origin and unique effects justify a price of 1000 XP, balancing its utility with the risk of overindulgence.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:38:19.438403+00:00",
    "aiReviewedAt": "2026-07-23T21:38:19.438403+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_voidstone_shard": {
    "id": "almost_edge_voidstone_shard",
    "name": "Voidstone Shard",
    "description": "The Voidstone Shard is a jagged fragment of reality fractured from the void. Its cold touch sends shivers down your spine, and it hums with an eerie, unsettling energy. Glimpses into the void allow you to teleport short distances for brief moments, but prolonged exposure can warp your perception, causing vivid nightmares that last a day or more. This shard offers resistance against psychic attacks, safeguarding your mind from malevolent forces.",
    "category": "forbidden",
    "price": 3300,
    "icon": "🌑",
    "stock": 7,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Brief Teleport",
      "Nightmare Glimpse"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Rift Packet",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Brief Teleport",
        "rules": "As a bonus action, you may attempt to teleport up to 30 feet. There is a 25% chance of successfully appearing at your intended destination. If the distance or environment makes it impossible to appear there, you land in the nearest unoccupied space. The effect ends if you take damage."
      },
      {
        "title": "Nightmare Glimpse",
        "rules": "For 24 hours after using the shard, you suffer from vivid nightmares that cause disadvantage on Wisdom (Perception) checks and saving throws against being charmed or frightened. The effect ends when you spend a short rest."
      }
    ],
    "levelRequirementReason": "The shard's instability requires a strong will to wield it without succumbing to its darker aspects.",
    "vendorReason": "Void Merchant specializes in items that challenge the boundaries of reality, making this shard a fitting addition to their inventory.",
    "shippingDetail": "Delivery is via a dimensional rift packet, which can arrive at any time during the night, ensuring secrecy and safety for the item's transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous teleport; lasts 24 hours for nightmare effect",
      "endsWhen": "On damage or a short rest respectively",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's rarity and the risks it poses justify its price, balancing its utility with potential peril.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:38:04.411399+00:00",
    "aiReviewedAt": "2026-07-23T21:38:04.411399+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_temporal_echo_locket": {
    "id": "almost_edge_temporal_echo_locket",
    "name": "Temporal Echo Locket",
    "description": "The Temporal Echo Locket, a tarnished silver locket humming with the faint echoes of forgotten moments, is said to hold the whispers of history within its gleaming facets. When opened, it briefly replays one random moment from this location’s past, offering players a glimpse into the unspoken secrets that linger in the air. The locket's ancient craftsmanship ensures that each replay is as real and tangible as the next, making it an invaluable tool for investigators and explorers alike.",
    "category": "curiosities",
    "price": 9500,
    "icon": "⏳",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Replay",
      "Temporal Anomaly"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Liminal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Replay",
        "rules": "When activated by a bonus action, this locket briefly replays one random moment from the location’s past. This replay lasts for 10 seconds and provides the user with a +2 bonus to Insight checks made during that period. The locket can be used once per long rest."
      },
      {
        "title": "Temporal Anomaly",
        "rules": "There is a 10% chance (DC 15) that activating the Temporal Echo Locket will attract minor temporal anomalies, causing a +1d4 temporary hit point drain to all creatures within 30 feet for 1 minute. These effects are dispelled by dispelling magic or the passage of time."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate its value as an investigative tool.",
    "vendorReason": "The Liminal Trader specializes in items that bridge the gap between worlds, and this locket is a perfect example of such a relic.",
    "shippingDetail": "Ships via Liminal Courier, known for its swift and reliable deliveries through temporal pathways.",
    "usage": {
      "activation": "Bonus action to open the locket and trigger a replay or anomaly.",
      "duration": "Instantaneous replay; anomalies last 1 minute until dispelled.",
      "endsWhen": "Replays end when the duration expires, anomalies are dispelled by magic or time passing.",
      "charges": "Unlimited uses per day, recharging after a long rest."
    },
    "priceReason": "The locket's rarity and utility justify its moderate price in experience points.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-23T21:38:34.496713+00:00",
    "aiReviewedAt": "2026-07-23T21:38:34.496713+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_boost": {
    "id": "internet_meme_boost",
    "name": "Viral Echo Orb",
    "description": "The Viral Echo Orb pulses with an otherworldly glow, its surface crackling with a thousand memes from the digital abyss. When held, it grants you a charisma surge, allowing you to dazzle and confound foes with your bizarre wit for three turns. It's as if Wario donned a crown of eloquence—chaotic yet effective. In the heat of battle, there’s an 18% chance each turn that a confused enemy will stumble into harm’s way.",
    "category": "consumables",
    "price": 130,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Charisma Surge",
      "Confusion Chance"
    ],
    "vendor": "data_dealer",
    "shippedBy": "packet_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Surge",
        "rules": "When you activate the Viral Echo Orb, you gain advantage on Charisma checks and saving throws for three turns. This effect ends if you take damage or lose consciousness."
      },
      {
        "title": "Confusion Chance",
        "rules": "Each turn while holding the orb, there's a 18% chance that an adjacent enemy creature becomes confused until the start of your next turn. The target must succeed on a Wisdom saving throw (DC 13) or be affected."
      }
    ],
    "levelRequirementReason": "Beginners can harness the chaotic energy of the Viral Echo Orb to disrupt and confound their foes.",
    "vendorReason": "The data_dealer specializes in unique, internet-inspired artifacts that blend digital lore with practical utility.",
    "shippingDetail": "Ships via high-speed packet delivery, ensuring swift arrival to your doorstep.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Three turns while held",
      "endsWhen": "Taking damage or losing consciousness",
      "charges": "Unlimited"
    },
    "priceReason": "The Viral Echo Orb's unique blend of charisma and confusion effects, along with its thematic origin from the digital realm, justifies this fair value.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T21:39:08.738972+00:00",
    "aiReviewedAt": "2026-07-23T21:39:08.738972+00:00",
    "aiReviewVersion": 1
  },
  "internet_cybernetic_arm": {
    "id": "internet_cybernetic_arm",
    "name": "Binary Arm Fragment",
    "description": "A salvaged fragment of a colossal cybernetic limb, rumored to have belonged to an exiled data-mage who once navigated the digital voids. This arm piece grants you enhanced strength and the ability to unleash short bursts of raw digital energy—perfect for smashing through security systems or annoying NPCs. Just don't try to download anything; this fragment is as much a weapon against the virtual world as it is a relic of a bygone era.",
    "category": "equipment",
    "price": 9500,
    "icon": "🤖",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Strength",
      "Data Burst"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "drone_delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Enhanced Strength",
        "rules": "When you activate this effect, your Strength score increases by 2 until the end of your next turn. This enhancement does not stack with other sources of strength increase."
      },
      {
        "title": "Data Burst",
        "rules": "As a bonus action, unleash a surge of digital energy that deals 3d6 force damage to one target within 10 feet. The target must succeed on a Dexterity saving throw (DC 14) or be stunned until the end of its next turn."
      }
    ],
    "levelRequirementReason": "This relic requires significant magical power and experience to wield, hence the high level requirement.",
    "vendorReason": "The pixel_shop specializes in rare cybernetic parts and relics from the digital age.",
    "shippingDetail": "Ships via drone within 24 hours of purchase, ensuring you have this powerful limb fragment at your fingertips.",
    "usage": {
      "activation": "Bonus action to activate for enhanced strength and a Data Burst.",
      "duration": "Instantaneous effect; enhanced strength lasts until the end of your next turn.",
      "endsWhen": "The effect ends when you deactivate it or use all charges.",
      "charges": "5 uses, recharged after a long rest"
    },
    "priceReason": "Balanced at 1000 XP due to its unique combination of enhanced strength and digital damage dealing.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T21:38:49.231736+00:00",
    "aiReviewedAt": "2026-07-23T21:38:49.231736+00:00",
    "aiReviewVersion": 1
  },
  "internet_phantom_shard": {
    "id": "internet_phantom_shard",
    "name": "Lost Signal Shard",
    "description": "The Lost Signal Shard is a cold, crystalline fragment that glows with an ethereal blue light. Crafted from the remnants of a lost communication network, it contains echoes of forgotten realities. Touching this shard allows you to briefly phase through solid objects for up to three turns, but prolonged exposure can lead to a deepening sense of existential dread and an irresistible compulsion to watch endless streams of cat videos.",
    "category": "curiosities",
    "price": 3300,
    "icon": "👻",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Phasing Through",
      "Madness Risk"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_package",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Phasing Through",
        "rules": "As an action, you can touch the shard to phase through solid objects for up to three turns. You cannot pass through creatures or structures that would deal damage on a successful saving throw. The effect ends if you take any damage, move into an occupied space, or stop touching the shard."
      },
      {
        "title": "Madness Risk",
        "rules": "There is a 10% chance per turn (independent of each other) that prolonged exposure to the shard will cause you to gain a temporary madness effect. This effect lasts for 24 hours and can be removed by completing a short rest in an area free from electronic signals."
      }
    ],
    "levelRequirementReason": "Requires moderate magical aptitude, as manipulating the shard's properties is not trivial.",
    "vendorReason": "The cyber market specializes in rare and exotic items related to communication networks, making it a logical place for such an artifact.",
    "shippingDetail": "The package is sealed with advanced encryption protocols ensuring the contents remain intact during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Up to three turns per day",
      "endsWhen": "You take damage, move into an occupied space, or stop touching the shard",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it provides a unique and potentially dangerous utility without being overpowered.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:38:42.630900+00:00",
    "aiReviewedAt": "2026-07-23T21:38:42.630900+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_starberry_jam": {
    "id": "equestria_item_starberry_jam",
    "name": "Starberry Jam of Harmony",
    "description": "The Starberry Jam of Harmony, a thick, shimmering confection crafted from the rarest Starberries found in Equestria's hidden valleys. This legendary jam is said to be favored by Princess Celestia herself and imbued with a potent essence of harmony. Spread it on your weapon or armor for an instant boost that strengthens bonds between allies and grants temporary healing, but beware—its effects are fleeting, lasting only until the next dawn.",
    "category": "consumables",
    "price": 130,
    "icon": "🍓",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "boost_friendship",
      "heal_heavy"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "delivery_only",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boost Friendship",
        "rules": "As a bonus action, apply the jam to your weapon or armor. Until the end of the day, you gain advantage on saving throws related to charm and influence. Additionally, within 30 feet, all allies have disadvantage on attack rolls against creatures with which they are not friendly."
      },
      {
        "title": "Heal Heavy",
        "rules": "When consumed, this jam heals 2d8 + your Charisma modifier hit points. The effects last until the next dawn and can only be used once per day."
      }
    ],
    "levelRequirementReason": "This jam is accessible to all travelers as it does not require advanced training.",
    "vendorReason": "The market in Ponyville stocks a variety of items favored by the townsfolk and Princess Celestia, including this special jam.",
    "shippingDetail": "Delivered by the Cutie Mark Crusaders via their trusty ponies; delivery can take up to two days depending on weather conditions.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until dawn of the following day",
      "endsWhen": "The effects expire at dawn or if consumed, whichever occurs first",
      "charges": "Once per day"
    },
    "priceReason": "Crafted from rare Starberries and imbued with powerful magic, this jam is a valuable yet balanced item for adventurers.",
    "priceOriginal": 325,
    "priceReviewedAt": "2026-07-23T21:39:03.598408+00:00",
    "aiReviewedAt": "2026-07-23T21:39:03.598408+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_grumblestone": {
    "id": "equestria_item_grumblestone",
    "name": "Grumblestone of Perpetual Discontent",
    "description": "The Grumblestone of Perpetual Discontent is a small, pulsating, obsidian stone that hums with malevolent energy. Its touch saps your will and fills you with insurmountable discontent. When held, it grants resistance to the effects of happiness and boosts critical hit chance by +2d6 damage, but at the cost of lowering your own morale and enemy morale by 10%. Wario's fondness for this stone is legendary among his minions.",
    "category": "equipment",
    "price": 55000,
    "icon": "😠",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "resistance_to_happiness",
      "critical_hit_boost"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "dark courier service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Happiness",
        "rules": "While holding the Grumblestone, you gain resistance to all sources of happiness and positive emotions. This effect lasts until the end of your next turn. You can activate this effect once per short or long rest."
      },
      {
        "title": "Critical Hit Boost",
        "rules": "When you make a melee attack roll, if you have held the Grumblestone for at least 1 minute, the attack deals an additional +2d6 damage on a critical hit. You can activate this effect once per long rest."
      }
    ],
    "levelRequirementReason": "This item's malevolent energy requires a certain level of darkness and malice to wield effectively.",
    "vendorReason": "The Crystal Empire's dark market is well-known for exotic and forbidden items, making the Grumblestone an expected offering.",
    "shippingDetail": "Delivered only through the Dark Courier Service, known for its secrecy and reliability in handling such potent artifacts.",
    "usage": {
      "activation": "As a bonus action while holding the stone.",
      "duration": "Instantaneous effect; lasts until end of next turn.",
      "endsWhen": "The effect ends when you no longer hold the Grumblestone or at the start of your next turn.",
      "charges": "Unlimited, but can only be used once per long rest."
    },
    "priceReason": "Balanced as a legendary item with unique and specific effects that require careful handling and alignment with its malevolent nature.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-23T21:39:23.830390+00:00",
    "aiReviewedAt": "2026-07-23T21:39:23.830390+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_honeycomb_shield": {
    "id": "animatopia_honeycomb_shield",
    "name": "Buzzing Bee Shield",
    "description": "Crafted from ancient, solidified honeycomb, the Buzzing Bee Shield is a marvel of nature and alchemy. Its surface is riddled with tiny, irritable bees that buzz in constant agitation. This shield not only provides formidable defense but also distracts large predators by drawing their attention away from you. The bees' incessant movement can be both a nuisance and an asset, making it a unique companion on your journey through the wilds.",
    "category": "equipment",
    "price": 9600,
    "icon": "🐝",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "distract_predators",
      "agitated_defense"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Giant Beetle Delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Distract Predators",
        "rules": "When you block an attack with this shield, there is a 50% chance that large predators within 30 feet are distracted by the buzzing bees and must make a Wisdom saving throw (DC 14) or become stunned for 1 round. This effect lasts until the start of your next turn."
      },
      {
        "title": "Agitated Defense",
        "rules": "While wielding this shield, you have advantage on Dexterity saving throws made to avoid being frightened and gain a +2 bonus to AC against attacks that would normally allow an enemy to use their reaction to make a melee attack of opportunity. This effect is active as long as you are not incapacitated."
      }
    ],
    "levelRequirementReason": "The Buzzing Bee Shield's intricate design and the bees' magical properties require advanced alchemical knowledge, which is only available to characters at least 10th level.",
    "vendorReason": "Beast Bazaar specializes in exotic and enchanted items that can be found or crafted through unique deals with nature's most fearsome creatures.",
    "shippingDetail": "Due to the shield's weight and fragility, it is shipped via Giant Beetle Delivery, which ensures safe arrival by land and air.",
    "usage": {
      "activation": "This shield provides its benefits passively while held in one hand.",
      "duration": "Until the start of your next turn after you block an attack with this shield or until you are incapacitated.",
      "endsWhen": "The effects end when you are incapacitated, lose consciousness, or drop the shield.",
      "charges": "Unlimited"
    },
    "priceReason": "The Buzzing Bee Shield's price reflects its unique combination of defensive prowess and predator distraction, making it a valuable asset for any adventurer.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T21:39:37.634421+00:00",
    "aiReviewedAt": "2026-07-23T21:39:37.634421+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_spirit_potion": {
    "id": "animatopia_spirit_potion",
    "name": "Whispering Spirit Potion",
    "description": "The Whispering Spirit Potion is a shimmering elixir crafted by the tribe’s oldest shaman from Animatopia. It allows you to briefly commune with the ethereal spirits, who may offer cryptic advice or share whimsical tales of the land's history and lore. The potion grants you visions that can illuminate hidden paths or reveal secret dangers, but be wary—some spirits might just tease you about the weather. Drink responsibly (or irresponsibly – we don't judge).",
    "category": "consumables",
    "price": 55000,
    "icon": "✨",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "commune_with_spirits",
      "grant_visions"
    ],
    "vendor": "forest_market",
    "shippedBy": "Courier Falcon",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Commune with Spirits",
        "rules": "Upon drinking, you gain the ability to interact with spirits for a duration of 1 minute. During this time, you can ask up to three cryptic questions about Animatopia's history or geography. The spirits will answer truthfully but in riddles. This effect ends if you are knocked unconscious or finish the duration."
      },
      {
        "title": "Grant Visions",
        "rules": "For 1 hour after drinking, you gain advantage on Wisdom (Perception) checks made to spot hidden creatures or objects within a 30-foot radius. Additionally, you can use an action to cast Minor Illusion once per long rest without expending spell slots."
      }
    ],
    "levelRequirementReason": "The potion's effects require a moderate understanding of Animatopia’s magic and spirits.",
    "vendorReason": "The forest market has established ties with the tribe that brews these potions.",
    "shippingDetail": "Shipped via Courier Falcon, known for its swift deliveries through Animatopia’s varied terrains.",
    "usage": {
      "activation": "Instantaneous upon drinking",
      "duration": "1 minute (Commune with Spirits) or 1 hour (Grant Visions)",
      "endsWhen": "Knocked unconscious or end of duration",
      "charges": "Unlimited, as the effects are temporary and do not deplete resources"
    },
    "priceReason": "The potion's rarity and the skill required to craft it justify its higher price.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T21:39:18.345878+00:00",
    "aiReviewedAt": "2026-07-23T21:39:18.345878+00:00",
    "aiReviewVersion": 1
  },
  "chaos_voidshard": {
    "id": "chaos_voidshard",
    "name": "Void Shard of Unmaking",
    "description": "The Void Shard of Unmaking is a jagged, swirling fragment of chaos, its edges etched with patterns that seem to shift and warp as you look away. Touching it feels like being swallowed by an endless void, the air around you flickering and distorting. This shard can unravel the very fabric of reality; it has a nasty habit of reducing enemy stats by 1d4 points randomly and dealing minor psychic damage to foes within reach, all while leaving its wielder with a lingering sense of unease.",
    "category": "curiosities",
    "price": 3400,
    "icon": "🌀",
    "stock": 25,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Unravel Stats",
      "Psychic Damage"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Shadow Messenger",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Unravel Stats",
        "rules": "When the user touches an enemy, that creature's Strength, Dexterity, or Constitution is reduced by 1d4 points. This effect lasts for 1 minute and can be ended early with a successful DC 15 Wisdom saving throw."
      },
      {
        "title": "Psychic Damage",
        "rules": "The user deals 2d6 psychic damage to one creature within 30 feet as an action. The target must succeed on a DC 14 Constitution saving throw or be stunned until the end of its next turn."
      }
    ],
    "levelRequirementReason": "Only those with experience in dealing with chaos and madness can safely wield this shard without it unraveling their own minds.",
    "vendorReason": "The Chaos Dealer specializes in items that twist reality, making the Void Shard of Unmaking a natural fit for his inventory.",
    "shippingDetail": "Delivered under cover of night by the Shadow Messenger, ensuring the shard arrives in pristine condition without drawing undue attention.",
    "usage": {
      "activation": "Action or Bonus Action (to touch an enemy)",
      "duration": "Instantaneous for each use; ends when expended or dismissed",
      "endsWhen": "The effect lasts until expended or dismissed by the user",
      "charges": "3 uses"
    },
    "priceReason": "Balanced at this price, the Void Shard of Unmaking offers a potent combination of chaotic effects that can turn the tide in combat.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:39:37.769868+00:00",
    "aiReviewedAt": "2026-07-23T21:39:37.769868+00:00",
    "aiReviewVersion": 1
  },
  "fate_scroll_divination": {
    "id": "fate_scroll_divination",
    "name": "Scroll of Wario's Premonitions",
    "description": "The Scroll of Wario's Premonitions is an ancient parchment, its edges frayed and inscribed in a cryptic language. When unrolled, it weaves together visions that are as confusing as they are unsettling – often involving mushrooms and bizarre events. Though the prophecies are vague, there’s a slim chance you might uncover hidden treasure or gain fleeting insights into your fate. This scroll is an unpredictable tool for those seeking to glimpse their future, yet it's more likely to leave them with more questions than answers.",
    "category": "services",
    "price": 130,
    "icon": "🔮",
    "stock": 18,
    "rarity": "common",
    "stockType": "special_order",
    "effects": [
      "reveals cryptic visions",
      "increases luck temporarily"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Temporal Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Visions",
        "rules": "The user rolls a d20. On an even roll, they gain one piece of cryptic information about their future or surroundings. This effect is instantaneous and does not require any actions."
      },
      {
        "title": "Increase Luck",
        "rules": "For the next 1d4 rounds, the user gains advantage on one saving throw. The effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The scroll's unpredictable nature makes it accessible to beginners and seasoned adventurers alike.",
    "vendorReason": "Fate Forge specializes in mystical artifacts that blur the line between fate and chance, making this scroll a perfect addition to their offerings.",
    "shippingDetail": "Ships within 3 days; requires a special delivery permit for time-sensitive scrolls.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "Instantaneous or 1d4 rounds, as applicable to each effect",
      "endsWhen": "The effect ends when its duration expires or the scroll is rolled up and stored away.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the scroll's unpredictable nature, which can be both a boon and a bane.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T21:39:51.867568+00:00",
    "aiReviewedAt": "2026-07-23T21:39:51.867568+00:00",
    "aiReviewVersion": 1
  },
  "internet_packet_worm": {
    "id": "internet_packet_worm",
    "name": "Viral Velocity Injector",
    "description": "The Viral Velocity Injector is a sleek, pulsating device encased in iridescent plastic that hums with an electric blue light. When activated, it injects a surge of meme energy into your system, granting you the speed to outmaneuver any conversation and spread your digital influence far and wide. Each use boosts your Dexterity by 2 for 10 minutes, but there's a 30% chance that each hit you land while active will also spread this viral effect to nearby targets.",
    "category": "consumables",
    "price": 710,
    "icon": "🚀",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increase_speed",
      "chance_to_spread_meme"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "data_stream",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increase Speed",
        "rules": "When activated, the Viral Velocity Injector grants you a +2 bonus to Dexterity for 10 minutes. This effect ends if you take any damage or when the duration expires."
      },
      {
        "title": "Chance to Spread Meme",
        "rules": "There is a 30% chance that each melee hit you score while the device is active will also apply its meme energy to one creature of your choice within 5 feet. This effect has no save DC and can only occur once per round."
      }
    ],
    "levelRequirementReason": "While not combat-oriented, the Viral Velocity Injector requires a basic understanding of social dynamics, making level 1 sufficient for its use.",
    "vendorReason": "As a hub for all things digital and interactive, Pixel Shop naturally stocks the Viral Velocity Injector as part of their extensive collection of internet-related gadgets.",
    "shippingDetail": "The device is shipped via data_stream courier services, arriving within 24 hours if you are in a major urban center. Outside these areas, delivery can take up to 72 hours due to limited bandwidth and infrastructure.",
    "usage": {
      "activation": "Action",
      "duration": "10 minutes per day",
      "endsWhen": "The duration expires or when you take damage",
      "charges": "Unlimited"
    },
    "priceReason": "The Viral Velocity Injector is priced at 1000 XP to reflect its unique combination of social utility and digital influence, making it a sought-after but not overpowered tool for players.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T21:40:04.485549+00:00",
    "aiReviewedAt": "2026-07-23T21:40:04.485549+00:00",
    "aiReviewVersion": 1
  },
  "internet_data_shard": {
    "id": "internet_data_shard",
    "name": "Echoing Fragment of the Void",
    "description": "The Echoing Fragment of the Void is a shimmering obsidian shard that pulses with fragmented memories from across the internet, each spark a relic of lost data streams and forgotten code. When held, it briefly opens rifts to alternate realities where digital whispers echo through the void, offering cryptic insights or fleeting glimpses into parallel data networks. Its surface hums with raw potential, like a dormant server ready to reboot the mind's eye.",
    "category": "curiosities",
    "price": 9600,
    "icon": "🔮",
    "stock": 15,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "cryptic_insight",
      "reality_rift"
    ],
    "vendor": "data_dealer",
    "shippedBy": "encrypted_packet",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Cryptic Insight",
        "rules": "As an action, you can focus on the shard for 1 minute. During this time, you gain advantage on Intelligence checks and saves until your next long rest. If you are within range of a known secret or hidden information, there is a 50% chance that the fragment reveals it to you."
      },
      {
        "title": "Reality Rift",
        "rules": "The shard can be activated as an action to briefly open a rift in reality. This effect lasts for 1 minute and allows you to teleport up to 30 feet to an unoccupied space you can see within range, provided the destination is not hazardous or dangerous."
      }
    ],
    "levelRequirementReason": "Only those with a foundational understanding of the digital world can harness this fragment's power.",
    "vendorReason": "The data dealer specializes in rare and exotic artifacts from the digital underworld, making it their duty to offer such an enigmatic shard.",
    "shippingDetail": "The Echoing Fragment of the Void is sent via encrypted packet, ensuring its arrival remains a secret even to prying eyes.",
    "usage": {
      "activation": "Action or Reaction (to activate rift)",
      "duration": "1 minute for cryptic insight; duration ends when you finish your next short rest",
      "endsWhen": "The effect ends if you are incapacitated, the shard is destroyed, or it runs out of charges.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "While not a weapon or armor, its rarity and unique capabilities justify this price.",
    "priceOriginal": 2300,
    "priceReviewedAt": "2026-07-23T21:41:03.218204+00:00",
    "aiReviewedAt": "2026-07-23T21:41:03.218204+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_chronometer": {
    "id": "curiosity_chronometer",
    "name": "Chronometer of Flickering Timelines",
    "description": "The Chronometer of Flickering Timelines is a peculiar pocket watch with a face that seems to ripple like water. Its hands occasionally pause, and the watchcase glows faintly with an eerie light. This artifact provides a small but useful resistance against temporal magic and can briefly alter the flow of time around you, creating a few seconds' worth of confusion for any foes nearby. Be careful not to let it stop; otherwise, you might find yourself in a loop of endless chimes and shadowy figures.",
    "category": "curiosities",
    "price": 710,
    "icon": "🕰️",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Temporal Resistance",
      "Brief Temporal Alteration"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Resistance",
        "rules": "The Chronometer grants the wearer resistance to spell attacks with the time descriptor. This effect lasts until the end of your next turn."
      },
      {
        "title": "Brief Temporal Alteration",
        "rules": "As a bonus action, you can activate the chronometer to create a small ripple in time around you, slowing enemies within 5 feet for 1 minute. The effect ends if an enemy moves out of this area or if another creature uses its action on that turn."
      }
    ],
    "levelRequirementReason": "The chronometer's effects are subtle but versatile, making it suitable for lower-level characters to experiment with time manipulation.",
    "vendorReason": "The chaos dealer is known for selling strange and unpredictable items that can bend reality in surprising ways.",
    "shippingDetail": "Due to the delicate nature of this artifact, it is shipped via Winged Courier with strict handling instructions.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until an enemy moves out of range",
      "endsWhen": "An enemy leaves the area or another creature uses its action on that turn",
      "charges": "Unlimited"
    },
    "priceReason": "The chronometer's balanced price reflects its moderate power and versatility, making it a fair addition to any character's inventory.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:39:59.663330+00:00",
    "aiReviewedAt": "2026-07-23T21:39:59.663330+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_artifact_chronal_shift": {
    "id": "connectopia_artifact_chronal_shift",
    "name": "Temporal Echo Device",
    "description": "The Temporal Echo Device hums with an ethereal glow, trapping moments in time within its ancient casing. Crafted from the remnants of a forgotten civilization's chronal artifacts, this relic grants the user a fleeting glimpse into the past. With each use, one can rewind time by five seconds, but prolonged exposure risks creating minor temporal anomalies. The device also enhances intelligence by +10 and provides resistance to temporal magic, ensuring users remain sharp in their temporal manipulations.",
    "category": "premium",
    "price": 55000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Time Rewind",
      "Chronal Resistance"
    ],
    "vendor": "block_smith",
    "shippedBy": "Wario Express Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Time Rewind",
        "rules": "As an action, the user can rewind time by five seconds. This effect is usable once per day and has a cooldown period of one week after each use."
      },
      {
        "title": "Chronal Resistance",
        "rules": "The user gains resistance to all damage from temporal magic effects. This benefit lasts until the end of their next turn, but they must make a DC 15 Constitution saving throw or be incapacitated for 1 minute due to paradox-induced fatigue."
      }
    ],
    "levelRequirementReason": "The Temporal Echo Device requires significant magical prowess and understanding of time magic.",
    "vendorReason": "Block Smith specializes in rare, ancient artifacts that bridge the gap between myth and reality.",
    "shippingDetail": "Ships via Wario Express Courier with a delivery delay of one week due to the delicate nature of the device.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends after five seconds or when time is rewound.",
      "charges": "Once per day; recharges at midnight."
    },
    "priceReason": "Balanced to reflect the device's unique temporal capabilities and rarity, yet within reach of mid-tier characters.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T21:40:24.291957+00:00",
    "aiReviewedAt": "2026-07-23T21:40:24.291957+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sticky_sweet_slice": {
    "id": "leclaire_isle_sticky_sweet_slice",
    "name": "Sticky Sweet Slice",
    "description": "The Sticky Sweet Slice is a gargantuan confectionary marvel, its surface shimmering with crystallized sugar. Baked from the tears of gingerbread men who found joy in labor, this pastry grants a sweet reprieve from mundane worries. Each bite heals 30 hit points and temporarily enhances your social prowess, boosting Charisma by +1 for three turns. The slice's sugary essence is said to imbue one with an uncontrollable yet delightful sugar rush, increasing movement speed during its duration.",
    "category": "consumables",
    "price": 710,
    "icon": "🎂",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Heals 30 HP",
      "Enhances Charisma"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Dough Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Gusto",
        "rules": "When consumed, the Sticky Sweet Slice heals the eater for 30 hit points. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Charisma Boost",
        "rules": "For three turns after consumption, the user gains a +1 bonus to Charisma checks and saving throws. This effect ends if the user's Charisma check or saving throw fails during its duration."
      }
    ],
    "levelRequirementReason": "The Sticky Sweet Slice is accessible to all adventurers, as its sugary benefits can be enjoyed by anyone regardless of class or background.",
    "vendorReason": "Dough Depot specializes in sweet treats and pastries, making it only fitting that they carry the legendary Sticky Sweet Slice.",
    "shippingDetail": "Delivered swiftly by the Dough Delivery Drone, ensuring adventurers receive their slice fresh from the oven.",
    "usage": {
      "activation": "Instantaneous consumption upon purchase.",
      "duration": "3 turns",
      "endsWhen": "A failed Charisma check or saving throw ends this effect early.",
      "charges": "Unlimited"
    },
    "priceReason": "The Sticky Sweet Slice's price reflects its rarity and the unique brewing process that involves the tears of gingerbread men.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T21:40:17.426496+00:00",
    "aiReviewedAt": "2026-07-23T21:40:17.426496+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_frosting_fortification": {
    "id": "leclaire_isle_frosting_fortification",
    "name": "Frosting Fortification",
    "description": "Le Clair Isle's Frosting Fortification is a shimmering confection of layered sugary frostings and crystallized sugar, each layer imbued with the essence of winter. Upon consumption, this treat coats your body in an ephemeral armor of crystalline sweetness, granting you +3 to Armor Class for 5 turns. The frosting also provides temporary resistance to bludgeoning damage, ensuring that any physical assault feels less impactful. Should a foe brave the sugary shell, there's a chance they'll find themselves ensnared by 'Sticky Situation,' reducing their movement speed by half as if encased in molasses.",
    "category": "equipment",
    "price": 9600,
    "icon": "🛡️",
    "stock": 15,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Armor Class Boost",
      "Bludgeoning Damage Resistance"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Butter-Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Armor Class Boost",
        "rules": "Activate on consumption. Grants +3 Armor Class for the next 5 turns, providing temporary protection against physical attacks."
      },
      {
        "title": "Bludgeoning Damage Resistance",
        "rules": "Provides resistance to bludgeoning damage during the effect duration of 5 turns. Ends if you take a long rest or if your next meal is composed of anything other than sugary confections."
      }
    ],
    "levelRequirementReason": "The Frosting Fortification requires no specific level to consume, as it's designed for adventurers at all levels who appreciate a good snack.",
    "vendorReason": "Pastry Palace is renowned for its ability to balance flavor and function in their items, making the Frosting Fortification a natural addition.",
    "shippingDetail": "The Butter-Winged Courier ensures that your confection arrives fresh and intact, even from the distant climes of Le Clair Isle.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "5 turns",
      "endsWhen": "At the end of a long rest or if you consume a meal other than sugary confections",
      "charges": "Unlimited"
    },
    "priceReason": "The Frosting Fortification is priced at 1000 XP, reflecting its unique combination of flavor and protection.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T21:40:36.970900+00:00",
    "aiReviewedAt": "2026-07-23T21:40:36.970900+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_dough_divination": {
    "id": "leclaire_isle_dough_divination",
    "name": "Dough Divination",
    "description": "This prophetic dough is crafted by the Dough Folk using enchanted flour from the sacred fields of LeClaire Isle. It takes on the shape of a glowing orb, emanating a faint aroma that hints at future events. When consumed, it grants profound insights into the party's quest but may also leave them with more questions than answers. Wario's recommendation to eat the dough ensures you receive a clearer and often more direct response from the visions.",
    "category": "services",
    "price": 55000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Divine Insight",
      "Quest Guidance"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Rolling Cart of Prophecy",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Divine Insight",
        "rules": "The consumer gains advantage on one Wisdom check of their choice related to their current quest. This effect lasts for an hour and can be used once per long rest."
      },
      {
        "title": "Quest Guidance",
        "rules": "Once consumed, the dough reveals a cryptic clue about the party's ongoing quest. The DM determines the exact nature of this clue. If the party follows it, they may find a hidden treasure or encounter an ally. This effect has a 50% chance to occur."
      }
    ],
    "levelRequirementReason": "The Dough Divination is accessible to all adventurers as a simple yet powerful tool for guidance.",
    "vendorReason": "Sweet Supplies specializes in unique and magical items, making them the perfect vendor for this Dough Divination.",
    "shippingDetail": "The dough is delivered by the Rolling Cart of Prophecy, ensuring its freshness and integrity are maintained.",
    "usage": {
      "activation": "Eating the dough",
      "duration": "One hour per long rest",
      "endsWhen": "After one long rest or when consumed",
      "charges": "Unlimited (one use per long rest)"
    },
    "priceReason": "This price reflects the enchanted ingredients and the Dough Folk's time, making it a balanced investment for adventurers.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-23T21:40:32.764156+00:00",
    "aiReviewedAt": "2026-07-23T21:40:32.764156+00:00",
    "aiReviewVersion": 1
  },
  "internet_firewall_service": {
    "id": "internet_firewall_service",
    "name": "Digital Fortress Reconstruction",
    "description": "Crafted by Data Dealer from a digital scrapyard of ancient servers and resilient circuitry, Digital Fortress Reconstruction is a rare service that meticulously reconfigures your network defenses. It layers new protocols to block unwanted data streams and redirects intrusive signals away from your core systems. Once activated, it’s like having an unseen army of bots constantly scanning for threats – but be cautious; the process might temporarily slow down your saved game files.",
    "category": "services",
    "price": 3400,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Redirects Digital Intrusions",
      "Enhances Network Security"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Redirects Digital Intrusions",
        "rules": "As a bonus action, this service redirects all digital threats within the next minute to a secure holding area. This effect has no save and lasts until the end of your turn."
      },
      {
        "title": "Enhances Network Security",
        "rules": "For 1 hour after activation, you gain a +2 bonus to saving throws against digital curses and hostile AI entities. There is no save for this effect; it simply provides a passive benefit."
      }
    ],
    "levelRequirementReason": "This service can be used by characters who are just beginning to navigate the complexities of digital magic.",
    "vendorReason": "Data Dealer has a reputation for salvaging and repurposing old tech, making them the perfect vendor for this unique service.",
    "shippingDetail": "Ships via Quantum Courier with immediate delivery within a major city network.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 hour",
      "endsWhen": "The duration ends when the hour is up or if you take any harmful action that would disrupt your network.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This service provides a significant boost to digital security without overloading the character's resources.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T21:40:42.686558+00:00",
    "aiReviewedAt": "2026-07-23T21:40:42.686558+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_rune_of_swiftness": {
    "id": "earth_land_rune_of_swiftness",
    "name": "Rune of Swiftness (Temporal Flux)",
    "description": "The Rune of Swiftness (Temporal Flux) is a pulsating, rune-shaped stone that crackles with temporal energy. When activated, it warps time around its bearer, granting incredible bursts of speed and dodging prowess. Touching it feels like stepping into a tempest, with gusts of air swirling around you. This relic, crafted in the forges of Temporal Keep, is known to enhance quick reflexes and elude foes more effectively than any other temporal artifact.",
    "category": "consumables",
    "price": 710,
    "icon": "💨",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "temporal_burst",
      "dodging_reflexes"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Swift Wind Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Burst",
        "rules": "When activated as a bonus action, the wielder gains a +20 foot movement speed and has advantage on Dexterity (Acrobatics) checks for 1 minute. The effect ends if the rune is removed from the user's possession."
      },
      {
        "title": "Dodging Reflexes",
        "rules": "The wearer has a 30% chance to dodge an attack made against them. This increases to 40% when the wielder is within 5 feet of an ally. This effect does not stack with similar abilities and ends at the start of the next turn after the rune's duration expires."
      }
    ],
    "levelRequirementReason": "This minor temporal artifact grants speed without requiring a high level to use.",
    "vendorReason": "The magic shop, known for its wide array of magical trinkets, stocks this rune due to its popularity among adventurers seeking quick gains in mobility and evasion.",
    "shippingDetail": "Ships via Swift Wind Couriers, ensuring timely delivery with a guaranteed arrival within three days.",
    "usage": {
      "activation": "Bonus action activation.",
      "duration": "1 minute.",
      "endsWhen": "The duration ends when it is removed from the user's possession or at the start of the next turn after the rune's duration expires.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced as a lesser temporal artifact, this item provides significant speed and dodging benefits without being overpowered for its cost.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:40:51.442789+00:00",
    "aiReviewedAt": "2026-07-23T21:40:51.442789+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_dragon_scale_reading": {
    "id": "earth_land_dragon_scale_reading",
    "name": "Dragon Scale Reading - Prophecy of Mishaps",
    "description": "The Dragon Scale Reading - Prophecy of Mishaps, a tarnished scale from an ancient earth dragon, whispers in a gravelly tone of impending doom. Its surface is etched with cryptic runes that glow faintly under moonlight, hinting at unseen perils lurking just out of sight. This relic grants you temporary advantage on Perception checks to spot hidden dangers and provides unsettling prophecies about coming misfortunes, though it occasionally offers a glimmer of hope amidst the gloom.",
    "category": "services",
    "price": 3400,
    "icon": "🐉",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "reveal_hidden_danger",
      "unsettling_prophesy"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_snail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reveal Hidden Danger",
        "rules": "When you activate this item as an action, it grants you temporary advantage on one Perception check to detect hidden dangers within the next hour. This effect can be used once per long rest."
      },
      {
        "title": "Unsettling Prophecy",
        "rules": "This item whispers a cryptic prophecy about coming misfortunes when activated as an action, which has a 50% chance of providing a meaningful warning. The speaker must make a Wisdom saving throw (DC 12) to resist the unsettling nature of these prophecies."
      }
    ],
    "levelRequirementReason": "This item's power requires a moderate understanding of danger and perception, suitable for players at least third level.",
    "vendorReason": "The earth dragons themselves have entrusted the Earth Emporium with this scale to help travelers navigate their lands safely.",
    "shippingDetail": "Delivered by a giant snail, ensuring safe and steady transport across rugged terrains.",
    "usage": {
      "activation": "action",
      "duration": "1 hour (recharges after a long rest)",
      "endsWhen": "used or recharged",
      "charges": "uses"
    },
    "priceReason": "This item's rarity and utility justify its price, offering both practical and narrative value.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T21:41:52.271860+00:00",
    "aiReviewedAt": "2026-07-23T21:41:52.271860+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_pixie_dust_potion": {
    "id": "faerun_item_pixie_dust_potion",
    "name": "Pixie Dust Delight Potion",
    "description": "Pixie Dust Delight Potion, a shimmering nectar of levity and buoyancy, is crafted from the finest pixie dust harvested in Faerûn's Whispering Woodlands and sweetened with honey sourced from the heart of the Underdark. This potent draught grants you temporary flight for three rounds, allowing you to escape even the most treacherous situations. It also enhances your jump height by 5 feet, ensuring each leap is a graceful, airborne ballet. The potion's ethereal glow and distinctive sweet aroma are unmistakable, making it a favorite among adventurers seeking both elegance and escape.",
    "category": "consumables",
    "price": 130,
    "icon": "✨",
    "stock": 91,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "grant_levitation",
      "increase_jump_height"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "winged_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Levitation (3 Rounds)",
        "rules": "Upon consuming this potion, you gain the ability to levitate for a duration of three rounds. This effect allows you to float above the ground and move freely in mid-air without any physical support. You are immune to falling damage during this time."
      },
      {
        "title": "Increase Jump Height by 5 Feet",
        "rules": "For one hour after consuming the potion, your jump height is increased by 5 feet. This enhancement applies only while you are in combat and does not affect other physical abilities or skills."
      }
    ],
    "levelRequirementReason": "This potion is designed for novice adventurers to help them overcome minor challenges without requiring a high level of proficiency.",
    "vendorReason": "The proprietor of Baldur's Bazaar, known for their extensive collection of magical and mundane goods, regularly sources this potion from local alchemists who specialize in pixie dust extracts.",
    "shippingDetail": "Delivered swiftly by winged messengers, ensuring the potion remains potent until it reaches its recipient.",
    "usage": {
      "activation": "Instantaneous consumption upon purchase",
      "duration": "3 rounds and one hour for jump height increase",
      "endsWhen": "The effects expire naturally or are dispelled if consumed before the duration ends",
      "charges": "Unlimited; no recharging required"
    },
    "priceReason": "The price reflects the rarity of pixie dust and the complexity of its extraction, as well as the high demand among adventurers.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T21:41:31.209135+00:00",
    "aiReviewedAt": "2026-07-23T21:41:31.209135+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_shard_of_zariel": {
    "id": "faerun_item_shard_of_zariel",
    "name": "Shard of Zariel's Fury",
    "description": "The Shard of Zariel's Fury is a jagged, obsidian fragment that crackles with raw, unholy energy and intense heat. This relic, said to be a piece of the Fallen One’s essence, amplifies negative emotions, turning tempers into raging fury. It radiates such potent malevolence that it can cause nearby foes to tremble in fear when held. Handling this shard requires care; prolonged exposure might lead to a minor curse, sapping your resolve and willpower.",
    "category": "equipment",
    "price": 790000,
    "icon": "🔥",
    "stock": 3,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Deal Fire Damage",
      "Frighten Nearby Enemies"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "black_hawk_drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Deal Fire Damage",
        "rules": "When activated as an action, the Shard deals fire damage (1d6+your Charisma modifier) to a creature within 5 feet. The target must make a DC 13 Constitution saving throw or take an additional 1d6 fire damage at the start of its next turn."
      },
      {
        "title": "Frighten Nearby Enemies",
        "rules": "The Shard grants you advantage on Intimidation checks against creatures within 20 feet. Additionally, any creature that starts its turn within 5 feet of you must succeed on a DC 13 Wisdom saving throw or become frightened for 1 minute."
      }
    ],
    "levelRequirementReason": "Due to the shard's volatile nature and powerful effects, it is reserved for characters of at least fifth level.",
    "vendorReason": "Waterdeep Market prides itself on exotic artifacts from distant realms; this shard fits that reputation.",
    "shippingDetail": "Ships via Black Hawk Drone, known for its swift and reliable deliveries across Faerûn.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "Instantaneous effect; ends when the Shard is no longer held or touched by you.",
      "endsWhen": "Exhausted after one use.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The shard's rarity and potent effects justify its price, offering a balanced addition to the market.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T21:41:24.769469+00:00",
    "aiReviewedAt": "2026-07-23T21:41:24.769469+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_inverted_apple": {
    "id": "grand_country_inverted_apple",
    "name": "The Upside-Down Delight",
    "description": "The Upside-Down Delight is a shimmering, indigo apple that seems to mock gravity itself. This peculiar fruit not only grants temporary levitation but also enhances your agility in an inverted world. Bite into it and you'll find yourself floating slightly above the ground for 10 seconds, briefly interacting with objects as if they were upside down. The effect is both whimsical and disorienting, making this treat more of a challenge than a simple snack.",
    "category": "consumables",
    "price": 130,
    "icon": "🍎",
    "stock": 76,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temporary levitation",
      "agility boost"
    ],
    "vendor": "side_seller",
    "shippedBy": "Wario's Speedy Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Levitation",
        "rules": "When consumed as a bonus action, you gain the ability to float slightly above the ground for up to 10 seconds. You can move and interact with objects as if they were inverted. This effect ends when you take damage or after its duration expires."
      },
      {
        "title": "Agility Boost",
        "rules": "For the first 5 seconds of levitation, your Dexterity is increased by +2. This boost to agility applies only during the levitation period and does not stack with other bonuses."
      }
    ],
    "levelRequirementReason": "The Upside-Down Delight's effects are simple and do not require a high level of proficiency.",
    "vendorReason": "Side Seller, known for quirky and unconventional items, naturally stocks this odd but delightful treat.",
    "shippingDetail": "The fruit is delivered fresh, but due to its unusual nature, it may arrive slightly squished. Handle with care!",
    "usage": {
      "activation": "bonus action",
      "duration": "up to 10 seconds",
      "endsWhen": "taking damage or after the duration expires",
      "charges": "unlimited"
    },
    "priceReason": "The Upside-Down Delight's unique and entertaining effects justify its higher price, making it a premium item for adventurers seeking a whimsical edge.",
    "priceOriginal": 380,
    "priceReviewedAt": "2026-07-23T21:41:18.420841+00:00",
    "aiReviewedAt": "2026-07-23T21:41:18.420841+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_chronometric_analyzer": {
    "id": "connectopia_chronometric_analyzer",
    "name": "Chronometric Analyzer - Deluxe Model",
    "description": "The Chronometric Analyzer - Deluxe Model is a sleek, metallic device adorned with intricate temporal runes. It harnesses the power of the time portal to briefly observe and manipulate the flow of time around objects. This premium gadget allows you to detect subtle anomalies in time, identify structural weaknesses, or even slow down an enemy's movements for a brief moment. However, its advanced technology is known to be somewhat temperamental; it may spontaneously malfunction near unstable structures, requiring immediate attention from the blocksmith.",
    "category": "premium",
    "price": 9600,
    "icon": "⏳",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Observation",
      "Temporal Manipulation"
    ],
    "vendor": "block_smith",
    "shippedBy": "time_portal",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Temporal Observation",
        "rules": "As a bonus action, activate the device to observe the past of an object within 30 feet for up to 1 minute. This effect provides insight into the object's history and reveals any temporal anomalies present."
      },
      {
        "title": "Temporal Manipulation",
        "rules": "On a successful hit with an attack roll, you can use one action to slow down time around one enemy for 1 round. The target must make a Dexterity saving throw (DC 15) or be subjected to a -2 penalty on all attack rolls and ability checks until the end of its next turn."
      }
    ],
    "levelRequirementReason": "Requires significant understanding of temporal mechanics.",
    "vendorReason": "The blocksmith is well-versed in advanced technologies and can repair the device if it malfunctions.",
    "shippingDetail": "Ships directly from the time portal, with expedited delivery for an additional cost.",
    "usage": {
      "activation": "Bonus action to activate or use.",
      "duration": "Instantaneous effect; duration varies by effect.",
      "endsWhen": "Effect ends when its duration expires or the device is destroyed in a malfunction.",
      "charges": "Unlimited, but requires downtime for recalibration after prolonged use."
    },
    "priceReason": "Balanced price considering its powerful temporal effects and advanced technology.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:41:39.106453+00:00",
    "aiReviewedAt": "2026-07-23T21:41:39.106453+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_canterlot_royal_seal": {
    "id": "equestria_item_canterlot_royal_seal",
    "name": "Canterlot Royal Seal of Harmony",
    "description": "The Canterlot Royal Seal of Harmony is a meticulously crafted artifact, its surface etched with intricate symbols that shimmer in hues of gold and silver when exposed to light. This regal emblem not only passively grants you resistance to chaos and discord but also subtly enhances your diplomatic skills, making you an indispensable negotiator or peacekeeper. Touching the seal is akin to invoking a silent command for harmony, as its presence alone can calm even the most volatile situations.",
    "category": "equipment",
    "price": 9700,
    "icon": "👑",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "resistance_to_chaos",
      "enhanced_diplomacy"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_carriage",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Chaos",
        "rules": "While holding this seal, you gain advantage on saving throws against effects that deal chaos damage and have resistance to all forms of chaotic magic. This effect is passive."
      },
      {
        "title": "Enhanced Diplomacy",
        "rules": "When using the Persuasion or Deception skill checks, you can add your proficiency bonus as a d6 to the roll once per short rest. This enhancement does not stack with other similar bonuses."
      }
    ],
    "levelRequirementReason": "This seal is accessible to all who seek its power for peace and diplomacy.",
    "vendorReason": "As the official purveyor of Canterlot's treasures, Canterlot Commerce ensures that this symbol of harmony is available to those who need it most.",
    "shippingDetail": "The seal is delivered via the royal carriage, ensuring its safe and timely arrival at your doorstep.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous upon touching; lasts until you rest.",
      "endsWhen": "The effects end when you finish a short or long rest.",
      "charges": "Unlimited, recharges after a short rest."
    },
    "priceReason": "This balanced price reflects the item's rarity and its dual utility in diplomacy and combat.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:42:03.821710+00:00",
    "aiReviewedAt": "2026-07-23T21:42:03.821710+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_starshine_dust": {
    "id": "equestria_item_starshine_dust",
    "name": "Starshine Dust of Wishes",
    "description": "Starshine Dust of Wishes is a rare powder collected from the crystalline residue of fallen stars near the Crystal Empire. This dust imbues weapons with a radiant glow, enhancing their strikes with fire damage and increasing the chance for critical hits. Sprinkling it on your weapon requires a minor action; its magic ensures that every fourth hit deals an additional 1d6 fire damage to enemies. Beware: each use of this powder comes with a subtle side effect—perhaps you'll find yourself with an unexpected companion or a peculiar compulsion.",
    "category": "curiosities",
    "price": 3400,
    "icon": "🌟",
    "stock": 75,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "fire_damage",
      "critical_hit_chance"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "pony_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Damage on Hit",
        "rules": "When used, the Starshine Dust grants your weapon a +1 bonus to damage rolls against targets. Every fourth hit deals an additional 1d6 fire damage."
      },
      {
        "title": "Increased Critical Hit Chance",
        "rules": "While equipped with this dust, there is a 5% chance for critical hits on each attack roll made with the weapon. This effect ends if you sheath your weapon or when it runs out of uses."
      }
    ],
    "levelRequirementReason": "This item provides minor enhancement but requires no specific level to use.",
    "vendorReason": "The Crystal Empire's magic is integral to the creation and distribution of Starshine Dust.",
    "shippingDetail": "Ships within two days via Pony Express courier service.",
    "usage": {
      "activation": "Minor action when sprinkled on a weapon",
      "duration": "Until sheathed or expended",
      "endsWhen": "Weapon is sheathed, or dust runs out of uses",
      "charges": "Unlimited uses"
    },
    "priceReason": "The rarity and magical properties justify a price equivalent to an Epic item.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:41:45.421181+00:00",
    "aiReviewedAt": "2026-07-23T21:41:45.421181+00:00",
    "aiReviewVersion": 1
  }
};
