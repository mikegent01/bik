// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_006 = {
  "chrono_freeze_orb": {
    "id": "chrono_freeze_orb",
    "name": "Chrono Freeze Orb (Temporal)",
    "description": "The Chrono Freeze Orb (Temporal) is a small, glowing sphere of crystalline material, forged from ancient time crystals. It emits a faint hum that can be felt by those within its range. This artifact allows you to freeze time in a 20-foot radius for up to 10 seconds, giving your party crucial moments to regroup and strike. Crafted by the secretive Time Stoppers, it is said to have been lost for centuries until rediscovered.",
    "price": 5000,
    "icon": "⏸️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Temporal Trap",
      "Limited Use"
    ],
    "vendor": "temporal_vault",
    "shippedBy": "Frozen Moment Express",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Temporal Trap",
        "rules": "As a bonus action, you can activate the Chrono Freeze Orb (Temporal) in an unoccupied space within 30 feet. All creatures within a 20-foot radius are frozen for up to 10 seconds. The effect ends if any creature moves out of the area or a creature within the area makes a successful DC 15 Dexterity saving throw."
      },
      {
        "title": "Limited Use",
        "rules": "The Chrono Freeze Orb (Temporal) can be used once per week, and it recharges after 7 days. This artifact is incredibly rare, as only one has been known to exist since the Time Stoppers' last recorded expedition."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 10 to use due to its complex activation and the danger involved in using it.",
    "vendorReason": "The Temporal Vault is known for its extensive collection of time-related artifacts, making it the most logical vendor for such an item.",
    "shippingDetail": "The Chrono Freeze Orb (Temporal) requires special handling and takes an additional day to arrive due to its sensitive nature.",
    "usage": {
      "activation": "Bonus action to activate, lasts up to 10 seconds when used.",
      "duration": "Up to 10 seconds per activation.",
      "endsWhen": "The effect ends if a creature moves out of the area or makes a successful Dexterity saving throw.",
      "charges": "One use per week."
    },
    "priceReason": "Given its rarity, complexity, and limited weekly usage, this item is priced at 5000 XP, reflecting its value in the market.",
    "priceOriginal": 940000,
    "priceReviewedAt": "2026-07-22T00:51:26.388444+00:00",
    "aiReviewedAt": "2026-07-22T00:51:26.388444+00:00",
    "aiReviewVersion": 1
  },
  "chrono_time_crystal": {
    "id": "chrono_time_crystal",
    "name": "Chrono Time Crystal (Temporal)",
    "description": "The Chrono Time Crystal (Temporal) is a shimmering, pulsating gem that hums with the echoes of time's passage. Its surface reveals fleeting visions of three potential futures, each marked by subtle changes in the environment and characters' actions. The crystal crackles with residual energy after use, hinting at the delicate balance it maintains between observation and interference. Crafted by the enigmatic Time Weavers, this artifact is a testament to their mastery over temporal dynamics.",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Reveals 3 possible futures",
      "Risk of paradox"
    ],
    "vendor": "eternal_chronicle",
    "shippedBy": "Time Slip Courier Service",
    "levelRequirement": 19,
    "effectDetails": [
      {
        "title": "Vision of Futures",
        "rules": "The user must make an Intelligence (History) check. On a successful roll, the crystal reveals three distinct future outcomes, each accompanied by visual and auditory cues indicating the path that might unfold. Failure indicates only two possible futures are revealed."
      },
      {
        "title": "Temporal Risk",
        "rules": "There is a 10% chance of inadvertently creating a temporal paradox upon use. If this occurs, the user must succeed on a DC 15 Wisdom saving throw or suffer one level of exhaustion for 24 hours."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and understanding of time magic can safely handle such an artifact.",
    "vendorReason": "The Eternal Chronicle is known for its extensive archives on the nature of time, making it a fitting vendor for this rare and powerful item.",
    "shippingDetail": "Delivery via Time Slip takes one round but requires careful handling to avoid temporal disturbances.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Use of the crystal, or if a paradox occurs",
      "charges": "3"
    },
    "priceReason": "The crystal's rarity and the risk it poses to users justify its high price in experience points.",
    "priceOriginal": 890000,
    "priceReviewedAt": "2026-07-22T00:51:35.150524+00:00",
    "aiReviewedAt": "2026-07-22T00:51:35.150524+00:00",
    "aiReviewVersion": 1
  },
  "chronomancers_paradox_gem": {
    "id": "chronomancers_paradox_gem",
    "name": "Chronomancer's Paradox Gem",
    "description": "The Chronomancer's Paradox Gem is a crystalline artifact, its surface etched with ancient runes that shimmer like time itself. Crafted from the remnants of a collapsed timeline, it captures an instant of frozen time within its heart. A relic of The Last Timewalker, this gem allows its wielder to rewind time for six seconds once per week, offering a brief reprieve from chaos. However, each use brings with it paradoxical effects that can tear at the fabric of reality, causing 1d10 paradox damage to the user.",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Rewind Time",
      "Paradox Damage"
    ],
    "vendor": "temporal_vault",
    "shippedBy": "Stasis Field",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "As a reaction, the wielder can rewind time for six seconds. This effect is triggered by an immediate threat or danger. The duration of this rewind includes all actions and events that occur within those six seconds, effectively reversing them. The use is limited to once per week."
      },
      {
        "title": "Paradox Damage",
        "rules": "Upon activation, the wielder suffers 1d10 paradox damage. This effect represents the strain on reality caused by manipulating time. Characters must make a DC 25 Constitution saving throw or suffer an additional 1d6 paradox damage at the end of their next short rest."
      }
    ],
    "levelRequirementReason": "Only those with a deep understanding of chronomancy and significant experience can harness such a volatile relic.",
    "vendorReason": "The Temporal Vault is the sole repository for artifacts that manipulate time, making it the only place to acquire such a powerful but dangerous gem.",
    "shippingDetail": "The gem must be shipped under strict stasis conditions to prevent any accidental activation during transit.",
    "usage": {
      "activation": "Reaction (once per week)",
      "duration": "Instantaneous, duration includes all actions within six seconds of activation",
      "endsWhen": "The effect ends when the time rewind is complete or interrupted by an external force",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "This gem's rarity and the potential for paradox damage make it a costly but necessary tool for those who dabble in chronomancy.",
    "priceOriginal": 925000,
    "priceReviewedAt": "2026-07-22T00:51:42.081623+00:00",
    "aiReviewedAt": "2026-07-22T00:51:42.081623+00:00",
    "aiReviewVersion": 1
  },
  "chuckola_cola": {
    "id": "chuckola_cola",
    "name": "Chuckola Cola",
    "description": "The Chuckola Cola is a vintage soda from the Beanbean Kingdom, aged in barrels of laughter and folly. This fizzy beverage isn't just for drinking; it's a relic that amplifies your wit or misfortune depending on whom you share it with. Aged to perfection, this cola promises not just refreshment but also the chance to either tell a laugh-out-loud joke or face an unstoppable cascade of bad ones.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍷",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Restore Spell Slots",
      "Tell Bad Jokes"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Glass Bottle Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Spell Slots",
        "rules": "As an action, drink Chuckola Cola and restore up to two spell slots (up to level 3). You can use this effect only once per short or long rest."
      },
      {
        "title": "Tell Bad Jokes",
        "rules": "As a bonus action, you can tell a bad joke that forces the target to make a DC 12 Wisdom saving throw. On a failed save, they must take 5 (1d10) negative color points as their mood darkens."
      }
    ],
    "levelRequirementReason": "This soda is approachable for lower-level characters who can use its effects to gain an edge in social or combat situations.",
    "vendorReason": "The Shamans' Hut stocks a variety of oddities, and Chuckola Cola fits perfectly within their eclectic offerings.",
    "shippingDetail": "Delivered via the Glass Bottle Service, which ensures the integrity of the cola's unique aging process during transit.",
    "usage": {
      "activation": "Action for restoring spell slots; Bonus action to tell a bad joke",
      "duration": "Instantaneous effects",
      "endsWhen": "Exhausted after use",
      "charges": "Unlimited, but one use per short or long rest"
    },
    "priceReason": "The balanced price reflects the soda's rarity and its dual functionality as a spell restoration tool and a social hazard.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-22T00:51:41.297173+00:00",
    "aiReviewedAt": "2026-07-22T00:51:41.297173+00:00",
    "aiReviewVersion": 1
  },
  "civilization_founding_charter": {
    "id": "civilization_founding_charter",
    "name": "Civilization Founding Charter",
    "description": "The Civilization Founding Charter is a leather-bound tome, its pages inscribed with ancient runes and seals from powerful guilds. This document grants you the sovereign right to establish your own city or town, ensuring legal recognition under international law. With this charter, you can immediately begin crafting laws, collecting taxes, and protecting your new settlement, but it also demands a steady influx of citizens and continuous investment in infrastructure.",
    "category": "premium",
    "price": 1000,
    "icon": "🏛️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Establish Sovereign City",
      "Legal Recognition"
    ],
    "vendor": "merchant_guild",
    "shippedBy": "Official Charter Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Establish Sovereign City",
        "rules": "Activates on the first day you begin construction. The settlement gains full governing authority, including the right to establish laws and collect taxes. It is protected by international law, which prevents it from being easily destroyed or annexed by other powers."
      },
      {
        "title": "Legal Recognition",
        "rules": "The charter ensures that your new city is recognized under international law. This protection lasts until the settlement has at least 500 citizens and a functioning government for one year, after which it can apply to join larger political entities or federations."
      }
    ],
    "levelRequirementReason": "Creating a new city is a monumental task that requires leadership experience and strategic planning.",
    "vendorReason": "The Merchant Guild oversees the establishment of cities, ensuring they are founded with sound economic principles.",
    "shippingDetail": "Delivered by trusted couriers who ensure that the charter is handled with utmost care and arrives intact.",
    "usage": {
      "activation": "Once per month during construction of a settlement, upon completion of legal requirements.",
      "duration": "Permanent once established",
      "endsWhen": "Settlement fails to meet population or governance criteria for one year; charter expires.",
      "charges": "Unlimited"
    },
    "priceReason": "The cost reflects the resources and expertise required to properly establish a new settlement with legal standing.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-22T00:52:14.507614+00:00",
    "aiReviewedAt": "2026-07-22T00:52:14.507614+00:00",
    "aiReviewVersion": 1
  },
  "cloning_chamber": {
    "id": "cloning_chamber",
    "name": "Cloning Chamber (Installation)",
    "description": "The Cloning Chamber, a gleaming crystalline structure embedded within an Artificer Tower's inner sanctum, allows for the replication of living beings through advanced alchemy and magic. Installed in your keep or laboratory, it can produce one clone per month from any willing humanoid subject. The clone is an exact physical duplicate but with no memories or personality—essentially a blank slate that ages normally alongside its original creator. Should the need arise, the original can transfer their consciousness to the clone, ensuring their legacy or survival.",
    "category": "premium",
    "price": 1000,
    "icon": "👥",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Clone any willing humanoid once per month",
      "Transfer of consciousness optional"
    ],
    "vendor": "artificer_tower",
    "shippedBy": "Major Installation",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Cloning",
        "rules": "Activates on a full action over one month. The subject must be a willing humanoid. Once the process is complete, the clone is an exact physical duplicate but with no memories or personality."
      },
      {
        "title": "Consciousness Transfer",
        "rules": "The original can transfer their consciousness to the clone as a bonus action once per day. This transfers all memories and skills up to the point of transfer, but the clone cannot remember the act itself."
      }
    ],
    "levelRequirementReason": "Requires at least 12th level to ensure proper understanding and handling of the cloning process.",
    "vendorReason": "The Artificer Tower specializes in advanced alchemical and magical devices, including this intricate Cloning Chamber.",
    "shippingDetail": "Ships via a secure courier service with specialized handling for fragile equipment.",
    "usage": {
      "activation": "Activation requires a full action over one month and the presence of a willing humanoid subject.",
      "duration": "Instantaneous effect upon completion, lasting until used or destroyed.",
      "endsWhen": "Exhausted after one use per month; can be reinstalled in another location for future uses.",
      "charges": "One charge per month"
    },
    "priceReason": "Balanced price reflects the cost of materials, alchemy, and magical energy required to power the Cloning Chamber.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-22T00:52:23.411562+00:00",
    "aiReviewedAt": "2026-07-22T00:52:23.411562+00:00",
    "aiReviewVersion": 1
  },
  "cloud_flower": {
    "id": "cloud_flower",
    "name": "Cloud Flower",
    "description": "The Cloud Flower blooms with a soft, feathery elegance, its petals shimmering like wisps of cloud against the sky. This ethereal flower can conjure floating platforms that gently rise from the ground, offering stable stepping stones for adventurers to cross chasms or scale heights otherwise unreachable. Each blossom is crafted by the Celestial Gardeners at Comet Observatory, ensuring every platform is a sturdy 10 feet above the ground and capable of supporting up to 500 pounds.",
    "category": "consumables",
    "price": 1000,
    "icon": "☁️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Cloud Platforms",
      "Steady Support"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Sky Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cloud Platforms",
        "rules": "When activated, the Cloud Flower creates three floating platforms that hover 10 feet off the ground. These platforms last for 1 minute and can support up to 500 pounds each. They are perfect for crossing gaps or reaching inaccessible heights."
      },
      {
        "title": "Steady Support",
        "rules": "The platforms remain stable during their duration, providing a secure surface even in turbulent conditions. If the platforms are destroyed or disrupted by an external force, they disintegrate after 10 seconds."
      }
    ],
    "levelRequirementReason": "Even novice adventurers can appreciate the Cloud Flower's utility for crossing treacherous terrain.",
    "vendorReason": "The Celestial Gardeners at Comet Observatory are renowned for their magical flora, including this versatile and reliable item.",
    "shippingDetail": "Ships via a private aerial delivery service from the Celestial Gardens, arriving within two days of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The platforms disintegrate after being destroyed or disrupted by an external force.",
      "charges": "Single Use"
    },
    "priceReason": "This item provides a critical utility for adventurers, making it a valuable yet balanced purchase.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T00:52:23.272338+00:00",
    "aiReviewedAt": "2026-07-22T00:52:23.272338+00:00",
    "aiReviewVersion": 1
  },
  "cobalt_star_shard": {
    "id": "cobalt_star_shard",
    "name": "Cobalt Star Shard",
    "description": "The Cobalt Star Shard is a fragment of an alien star, its surface iridescent and etched with ancient symbols. When held, it hums faintly, its energy crackling like distant lightning. The shard's origins are lost in the cosmic mists, but it whispers secrets to those who listen closely. It can manipulate time locally, allowing you to reroll an enemy’s attack roll or cast 'Haste' or 'Slow', depending on your need.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔷",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Reroll Attack",
      "Manipulate Time"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Time Stream Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Force Reroll (Reaction)",
        "rules": "As a reaction, you can force an enemy to reroll its attack roll. If the result is lower than the original roll, the enemy must use the new result."
      },
      {
        "title": "Cast 'Haste' or 'Slow'",
        "rules": "You can cast either the 'Haste' spell (duration 1 minute) or the 'Slow' spell (duration up to your concentration limit) using this shard. You regain any expended uses of these spells at the start of your next short rest."
      }
    ],
    "levelRequirementReason": "The Cobalt Star Shard requires a minimum level to ensure its effects can be used safely and effectively.",
    "vendorReason": "The Comet Observatory has exclusive access to cosmic curiosities like the Cobalt Star Shard, which it carefully procures from interstellar traders.",
    "shippingDetail": "The Time Stream Express delivers the shard with a time delay of one hour, ensuring its arrival is timely and intact.",
    "usage": {
      "activation": "Reaction or action",
      "duration": "Instantaneous for 'Reroll Attack', up to 1 minute for 'Haste' or 'Slow'",
      "endsWhen": "The effect ends when the spell’s duration expires, or you use your action on another turn.",
      "charges": "3 Charges/Day"
    },
    "priceReason": "This price reflects its rarity and the cosmic energy it contains, making it a significant but balanced addition to any adventurer's inventory.",
    "priceOriginal": 420000,
    "priceReviewedAt": "2026-07-22T00:52:16.891449+00:00",
    "aiReviewedAt": "2026-07-22T00:52:16.891449+00:00",
    "aiReviewVersion": 1
  },
  "cocoa_amulet": {
    "id": "cocoa_amulet",
    "name": "Cocoa Amulet",
    "description": "The Cocoa Amulet is a golden charm adorned with cocoa motifs that radiates warmth and sweetness. It warms both the hands and heart, perfect for cold days or moments of chill. When worn, it grants resistance to cold damage for an entire day, ensuring you stay cozy even in frosty climes. Once per day, you can brew a restorative cup that restores 1d4 Hit Points, offering a quick pick-me-up when needed.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍫",
    "stock": 25,
    "rarity": "common",
    "effects": [
      "Cold Resistance",
      "Restorative Cup"
    ],
    "vendor": "orchard_stall",
    "shippedBy": "Small Tin",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "While wearing the Cocoa Amulet, you have resistance to cold damage for 24 hours. This effect is instantaneous and lasts until the end of the day."
      },
      {
        "title": "Restorative Cup",
        "rules": "You can use an action once per day to brew a restorative cup that restores 1d4 (1-4) Hit Points to you or another creature within reach. This effect is instantaneous and has no save DC required."
      }
    ],
    "levelRequirementReason": "The Cocoa Amulet's effects are straightforward and beneficial, making it accessible to even the lowest-level characters.",
    "vendorReason": "The orchard stall vendor often deals in items that enhance daily life, from foodstuffs to small trinkets like this amulet.",
    "shippingDetail": "Shipped via Small Tin, ensuring the cocoa charm arrives fresh and intact.",
    "usage": {
      "activation": "Instantaneous action for Cold Resistance; once per day for Restorative Cup",
      "duration": "24 hours for Cold Resistance; instantaneous for Restorative Cup",
      "endsWhen": "At the end of the day for Cold Resistance; expended after use for Restorative Cup",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Cocoa Amulet offers two useful daily benefits at a price that reflects its warm, comforting nature and sweet design.",
    "priceOriginal": 1100,
    "priceReviewedAt": "2026-07-22T00:52:41.463959+00:00",
    "aiReviewedAt": "2026-07-22T00:52:41.463959+00:00",
    "aiReviewVersion": 1
  },
  "coconut": {
    "id": "coconut",
    "name": "Coconut",
    "description": "It's hard. It hurts if you throw it.",
    "category": "consumables",
    "price": 2000,
    "icon": "🥥",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Thrown (30ft) for 1d4 Bludgeoning",
      "Bonk sound effect mandatory"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Sack",
    "levelRequirement": 1
  },
  "coin_block_replica": {
    "id": "coin_block_replica",
    "name": "Mini Coin Block",
    "description": "The Mini Coin Block is a compact brick of ancient origin, crafted from weathered bronze. It exudes an aura of long-forgotten wealth, and when punched, it dispenses gold coins with a satisfying clink. This curious artifact recharges its coin supply at dawn, ensuring that the block never runs dry for those who are patient enough to wait. However, after 50 uses, the brick crumbles into dust, leaving behind only a faint echo of past riches and a reminder of the law of diminishing returns.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧱",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Punch to dispense gold",
      "Morning recharge"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Bubble Wrap Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Coin Dispensation",
        "rules": "The Mini Coin Block allows the user to punch it, dispensing 1d10 gold coins. This effect can be activated as a bonus action. The block recharges its coin supply at dawn, restoring 1d4 coins."
      },
      {
        "title": "Recharge at Dawn",
        "rules": "At the break of dawn, the Mini Coin Block replenishes itself by 1d4 gold coins. This effect is instantaneous and occurs automatically without any action required from the user."
      }
    ],
    "levelRequirementReason": "This item requires no level as it offers a simple, straightforward interaction that benefits all adventurers.",
    "vendorReason": "The Toad Town Market is known for its eclectic array of rare and whimsical items. The Mini Coin Block fits perfectly into their inventory, offering something unique to the curious and thrifty adventurers who frequent the market.",
    "shippingDetail": "Delivered with Bubble Wrap Express within three days.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Uses are exhausted after 50 dispenses or the block is destroyed",
      "charges": "50 uses total"
    },
    "priceReason": "The Mini Coin Block offers a fair value for its limited but rewarding utility, providing gold without requiring any material investment from the user.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-22T00:52:41.775510+00:00",
    "aiReviewedAt": "2026-07-22T00:52:41.775510+00:00",
    "aiReviewVersion": 1
  },
  "coin_of_the_god_of_chance": {
    "id": "coin_of_the_god_of_chance",
    "name": "Coin of the God of Chance",
    "description": "The Coin of the God of Chance is a coin unlike any other, crafted from an ancient, shimmering alloy that whispers secrets of fate. It never lands on heads or tails but always comes to rest on its edge, symbolizing the balance between fortune and misfortune. As dawn breaks each day, it flips again, bringing with it either a blessing or a curse, depending on your current fears. This coin is said to have been blessed by chance itself, making it a coveted trinket among those who seek to influence their fate.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪙",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Blessing or Curse",
      "Daily Re-roll"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Gilded Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blessing or Curse",
        "rules": "When the coin lands on its edge, roll a d20. If even, you gain a blessing chosen by the DM; if odd, you incur a curse. The effect is immediate and lasts until the next dawn."
      },
      {
        "title": "Daily Re-roll",
        "rules": "The coin flips again each dawn, providing another chance to alter your fate. However, once it has landed on its edge during this period, further rolls do not change unless you take a short rest."
      }
    ],
    "levelRequirementReason": "This coin is accessible to all adventurers who seek to test their luck and learn the ways of chance.",
    "vendorReason": "Wario Direct, known for its eclectic inventory, often carries rare and unusual items that cater to those who wish to gamble with destiny.",
    "shippingDetail": "Shipped in an ornate box, ensuring the coin arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required. The coin flips on its own at dawn.",
      "duration": "Instantaneous; re-flips each dawn.",
      "endsWhen": "Destroyed by a successful DC 15 Con saving throw, or when the adventurer takes a short rest after it has landed on its edge.",
      "charges": "Unlimited"
    },
    "priceReason": "The coin's rarity and the unpredictable nature of its effects justify this moderate price in experience points.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T00:52:49.948711+00:00",
    "aiReviewedAt": "2026-07-22T00:52:49.948711+00:00",
    "aiReviewVersion": 1
  },
  "common_magic_item_upgrade": {
    "id": "common_magic_item_upgrade",
    "name": "Common Magic Item Upgrade Coupon",
    "description": "This coupon allows you to upgrade a common magic item one step up in rarity. For example, it can turn your +1 dagger into a +2 dagger or your leather armor into chainmail. The coupon is handcrafted by the Wizards of the Recycling Bin and imbued with a strange green light that flickers uncertainly. There's always the chance that instead of upgrading, the item might be cursed, causing it to emit an eerie glow and misfire in unexpected ways.",
    "category": "services",
    "price": 1000,
    "icon": "🎫",
    "stock": 7,
    "rarity": "rare",
    "effects": [
      "Upgrade one common magic item to uncommon",
      "50% chance of becoming cursed"
    ],
    "vendor": "upgrade_center",
    "shippedBy": "Enchanted Envelope",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Item Upgrade",
        "rules": "Activate as a bonus action. The target common magic item is upgraded to an uncommon magic item. This has no effect on the item's inherent properties or abilities, but it does increase its rarity."
      },
      {
        "title": "Cursed Chance",
        "rules": "There is a 50% chance that the upgraded item becomes cursed. A successful DC 14 Wisdom saving throw negates this effect. The curse causes the item to malfunction, adding a -2 penalty to all ability checks and attack rolls made with it."
      }
    ],
    "levelRequirementReason": "The process of upgrading an item requires a basic understanding of magic and its principles.",
    "vendorReason": "Upgrade Center specializes in enhancing magical artifacts, offering players the chance to improve their gear through both legitimate means and questionable shortcuts.",
    "shippingDetail": "The enchanted envelope ensures swift delivery, but it may occasionally be delayed by mischievous spirits or a playful goblin postman.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous upgrade; the item is upgraded upon activation",
      "endsWhen": "Exhausted after one use",
      "charges": "Unlimited, as each coupon can only be used once"
    },
    "priceReason": "The cost reflects the complex alchemical processes and magical energies required to perform the upgrade.",
    "priceOriginal": 12300,
    "priceReviewedAt": "2026-07-22T00:54:17.742013+00:00",
    "aiReviewedAt": "2026-07-22T00:54:17.742013+00:00",
    "aiReviewVersion": 1
  },
  "compass_of_dead_paths": {
    "id": "compass_of_dead_paths",
    "name": "Compass of Dead Paths",
    "description": "A rusted compass that points not to north, but to where someone last died.",
    "category": "curiosities",
    "price": 12000,
    "icon": "🧭",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Points to the location of the most recent death within 10 miles",
      "Glows brighter with more recent or violent deaths",
      "May attract ghosts or scavengers"
    ],
    "vendor": "bazaar_of_oddities",
    "shippedBy": "Rusted Case",
    "levelRequirement": 3
  },
  "conker_acorn": {
    "id": "conker_acorn",
    "name": "Conker Acorn Bomb",
    "description": "The Conker Acorn Bomb, a gnarled oak seed encased in a protective shell of bark and bristles, is a deadly weapon for those who dare to wield it. When hurled with force, this acorn detonates on impact, unleashing a shockwave that shatters the surrounding terrain into splinters. Legend whispers that every tenth seed might just sprout a grand oak tree, though only the bravest dare test such tales in battle. This rare item is crafted by Toad Town's most trusted forgers and sold at the town market, known for its unyielding loyalty to the local artisans.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌰",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Explosive Detonation",
      "Tree Sprout Chance"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Nut Bag Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Explosive Detonation",
        "rules": "When thrown as an action and lands within a 5-foot radius, this acorn explodes on impact. Each creature in that area must succeed on a DC 13 Dexterity saving throw or be knocked prone and take 2d6 bludgeoning damage."
      },
      {
        "title": "Tree Sprout Chance",
        "rules": "There is a 1% chance (Roll a d100) per use that the acorn will instead sprout into a sapling, which grows into a full-sized oak tree over the course of three days. The tree cannot be uprooted by physical means."
      }
    ],
    "levelRequirementReason": "The Conker Acorn Bomb's explosive power demands basic dexterity and strength from its wielder.",
    "vendorReason": "Toad Town Market is known for selling quality weapons crafted by local artisans, including this explosive seed.",
    "shippingDetail": "Ships via Nut Bag Express, a reliable courier that ensures the acorn arrives in pristine condition.",
    "usage": {
      "activation": "thrown as an action",
      "duration": "instantaneous (explosion occurs on impact)",
      "endsWhen": "the explosion resolves or the acorn is used up",
      "charges": "unlimited"
    },
    "priceReason": "The balanced price reflects its explosive power and rarity, making it a valuable yet manageable purchase.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T00:54:34.004432+00:00",
    "aiReviewedAt": "2026-07-22T00:54:34.004432+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_banana_core_amulet": {
    "id": "connectopia_banana_core_amulet",
    "name": "Banana Core Amulet",
    "description": "The Banana Core Amulet is a relic encased in the hardened shell of a mythical banana, said to have been crafted by ancient hoarders. This amulet grants +2 to Stealth and Persuasion checks, making it invaluable for sneaky orators. In haunted zones, it reduces fear effects by half, offering eerie protection. However, beware—eating one consumes its power entirely, yet rewards you with 10 coins, a small price to pay for such potent magic.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍈",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Banana Speed",
      "Fear Resistance"
    ],
    "vendor": "connectopia",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Banana Speed",
        "rules": "While in banana groves, the wearer gains a +10 foot movement speed bonus. This effect ends when the character leaves the grove or if they consume the amulet."
      },
      {
        "title": "Fear Resistance",
        "rules": "When equipped in haunted zones, this amulet halves the DC of fear effects and spells targeting the wearer. The effect lasts until the end of your next turn after entering a zone marked as haunted. You can use it again only after completing a short or long rest."
      }
    ],
    "levelRequirementReason": "The amulet's power is accessible to low-level characters, enhancing their stealth and persuasion without overburdening them.",
    "vendorReason": "Connectopia often stocks unique relics from various hoarders' legacies, making this a fitting addition to their inventory.",
    "shippingDetail": "The Banana Core Amulet is shipped via Blooper Express, with a delivery time of one week due to its fragile nature.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous or lasts until end of turn, depending on the effect.",
      "endsWhen": "The effects end when you leave banana groves or haunted zones, respectively, or if consumed.",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's price reflects its unique crafting and magical properties, providing significant benefits without overwhelming the character.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T00:54:45.172898+00:00",
    "aiReviewedAt": "2026-07-22T00:54:45.172898+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_bowser_kid_keychain": {
    "id": "connectopia_bowser_kid_keychain",
    "name": "Bowser Kid Keychain",
    "description": "The Bowser Kid Keychain is a small, metallic pendant shaped like a toddler’s boot. Crafted from tarnished brass and etched with ancient symbols, it glows faintly when worn by a Bowser child near another rival. The keychain whispers directions to the next throne room but only for those who have the 'Childhood Memory' trait. However, prolonged wear can trigger vivid dreams of one's own childhood or worse—being mistaken as a rival sibling in the castle’s hallways.",
    "price": 1000,
    "icon": "🎮",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Reveals hidden paths on maps",
      "Triggers childhood memories"
    ],
    "vendor": "connectopia",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Throne Room Map Revelation",
        "rules": "The keychain emits a soft glow and reveals hidden pathways to the next throne room when worn by a Bowser child. This effect lasts until the wearer stops wearing it."
      },
      {
        "title": "Childhood Dreams",
        "rules": "If worn for more than 1 hour, the keychain causes the wearer to dream of their own childhood for 1d4 hours. There is a 20% chance per day that a minor hallucination of rival Bowser children appears."
      }
    ],
    "levelRequirementReason": "Requires a character with 'Childhood Memory' and experience to handle the keychain’s effects responsibly.",
    "vendorReason": "Known for their unique collectibles, Connectopia supplies this item that appeals to fans of Bowser lore.",
    "shippingDetail": "Ships via a spirit courier, arriving within one week of purchase.",
    "usage": {
      "activation": "Passive effect when worn by a Bowser child with 'Childhood Memory' trait",
      "duration": "Active until the wearer stops wearing it or falls asleep for more than an hour",
      "endsWhen": "The keychain’s effects end if the wearer sleeps for more than one hour while wearing it.",
      "charges": "Unlimited, but only active when worn"
    },
    "priceReason": "Balanced price considering its unique lore and limited functionality.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T00:54:47.280061+00:00",
    "aiReviewedAt": "2026-07-22T00:54:47.280061+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_chain_chomp_courier_key": {
    "id": "connectopia_chain_chomp_courier_key",
    "name": "Chain Chomp Courier Key",
    "description": "The Chain Chomp Courier Key is a shimmering, ancient artifact forged from the very essence of forgotten trade routes. Crafted by couriers who once navigated perilous paths to distant lands, this key glows with the spirit of a bygone era when secrets were traded as freely as spices. It opens doors that no map can show, and upon use, it triggers a fleeting portal leading directly into Beanbean’s hidden spice vaults—places where misdirection is an art form.",
    "price": 2000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Opens secret trade routes",
      "Activates temporary portals to Beanbean's spice vaults"
    ],
    "vendor": "connectopia",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Secret Trade Route Activation",
        "rules": "This key, when activated as a bonus action, opens a hidden door leading to a secret trade route. The portal lasts for 1 minute and can only be used once per long rest."
      },
      {
        "title": "Temporary Portal to Spice Vaults",
        "rules": "Using the key triggers a temporary portal that appears in an unoccupied space within 5 feet of you, leading directly into Beanbean’s hidden spice vaults. The portal lasts for 1 minute and can only be used once per day."
      }
    ],
    "levelRequirementReason": "This key requires a minimum character level to activate the complex spellwork needed to open secret trade routes.",
    "vendorReason": "Connectopia, as a hub for ancient and forgotten trade routes, naturally stocks relics that facilitate such connections.",
    "shippingDetail": "Delivered by the Chain Chomp Courier, known for its punctual and reliable deliveries even to the most remote locations.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute (until dismissed)",
      "endsWhen": "The effect ends when the portal is dismissed or after 1 minute of inactivity",
      "charges": "Rechargeable, usable once per long rest"
    },
    "priceReason": "This key is priced high due to its rarity and the complex spellwork required for its creation.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T00:55:23.057919+00:00",
    "aiReviewedAt": "2026-07-22T00:55:23.057919+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_cheep_cheep_accords_talisman": {
    "id": "connectopia_cheep_cheep_accords_talisman",
    "name": "Cheep Cheep Accord Talisman",
    "description": "The Cheep Cheep Accord Talisman is a glowing amulet crafted from the shimmering scales of Toadkin and enchanted with the whispers of ancient agreements. When worn by a Toad allied with Rakasha Spirit Walkers, it grants temporary immunity to fear effects for 10 seconds and bestows a +1d6 bonus on diplomacy checks. However, if donned by any non-Toad, it triggers hallucinations causing confusion and 1d6 damage as the wearer's mind distorts reality.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐸",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Immunity to Fear",
      "Diplomacy Boost"
    ],
    "vendor": "connectopia",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Immunity to Fear",
        "rules": "When worn by a Toad allied with Rakasha Spirit Walkers, the Cheep Cheep Accord Talisman grants temporary immunity to fear effects for 10 seconds. This effect is instantaneous and does not require an action or reaction."
      },
      {
        "title": "Diplomacy Boost",
        "rules": "Grants a +1d6 bonus on diplomacy checks when worn by a Toad allied with Rakasha Spirit Walkers. The effect lasts until the wearer no longer meets these conditions, and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This talisman is crafted for those who have already made significant strides in their toadkin heritage and alliances.",
    "vendorReason": "Connectopia, known for its diverse array of magical artifacts, sells this talisman due to the Moonfang Pack's reputation as a trusted source of powerful enchantments.",
    "shippingDetail": "Ships within three days with Koopa Postal; requires special handling and may incur additional fees for fragile items.",
    "usage": {
      "activation": "Passive effect when worn by a Toad allied with Rakasha Spirit Walkers.",
      "duration": "10 seconds of immunity to fear effects, once per short or long rest for diplomacy boost.",
      "endsWhen": "The wearer no longer meets the conditions (e.g., no longer an allied Toad) or rests.",
      "charges": "Unlimited uses; regenerates at dawn."
    },
    "priceReason": "Balanced to fit within a reasonable price range for a powerful but not overpowered epic item, considering its limited use and thematic importance.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T00:55:01.177572+00:00",
    "aiReviewedAt": "2026-07-22T00:55:01.177572+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_cosmic_jester_trinket": {
    "id": "connectopia_cosmic_jester_trinket",
    "name": "Cosmic Jester’s Prank Pocket",
    "description": "The Cosmic Jester’s Prank Pocket is a mischievous bag crafted by cultists of the Cosmic Jester. It spontaneously reshapes your gear into whimsical, yet practical absurdities—like a fire poker that turns into a plush penguin or a scroll case that morphs into a tiny xylophone. This relic grants you +1d4 to rolls for misdirection and trickery, and it may momentarily disorient foes. Once used, the bag is consumed in a burst of laughter and chaos, leaving behind only its whimsical contents.",
    "price": 1000,
    "icon": "🎭",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Misdirection Boost",
      "Foe Confusion"
    ],
    "vendor": "connectopia",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Misdirection Boost",
        "rules": "When used as an action, you gain +1d4 to one roll related to misdirection or trickery. This effect lasts until the end of your next turn."
      },
      {
        "title": "Foe Confusion",
        "rules": "When activated, there is a 25% chance (DC 10) that an enemy within 5 feet becomes temporarily confused for 1 round. On a successful save, this effect does not occur."
      }
    ],
    "levelRequirementReason": "This item requires only level 1 to use due to its whimsical and non-combative nature.",
    "vendorReason": "Connectopia, known for quirky and unusual items, naturally carries this cultist-made trinket.",
    "shippingDetail": "Ships via Dry Bones Dead Drop with a delay of one week due to the bag's tendency to rearrange itself during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Until end of next turn",
      "endsWhen": "Used or until your next turn ends",
      "charges": "Unlimited, consumed after use"
    },
    "priceReason": "The price reflects the item's unique design and the skill required to craft such a whimsical yet functional relic.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T00:55:15.140488+00:00",
    "aiReviewedAt": "2026-07-22T00:55:15.140488+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_doughnut_gravity_iron": {
    "id": "connectopia_doughnut_gravity_iron",
    "name": "Doughnut Gravity Iron",
    "description": "The Doughnut Gravity Iron is a blocky artifact that defies conventional gravity, crafted from iron salvaged from ancient Connectopia ruins. Its core is imbued with Grand Country's vertical chaos, allowing its wearer to stand on vertical surfaces for precisely 10 seconds. The artifact grants the user 20% resistance against gravity-based attacks, but repeated use can cause minor disorientation, making it essential to attune with a pioneer’s map before engaging in such feats.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚖",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Gravity Resistance",
      "Vertical Stand"
    ],
    "vendor": "connectopia",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Gravity Resistance",
        "rules": "The user gains advantage on saving throws against gravity-based effects. This effect lasts until the start of your next turn."
      },
      {
        "title": "Vertical Stand",
        "rules": "The user can stand on vertical surfaces for 10 seconds, allowing movement up and down walls or other similar structures. Using this ability is a bonus action that requires concentration. The effect ends if the user moves more than 5 feet from the surface."
      }
    ],
    "levelRequirementReason": "This item's attunement with a pioneer’s map and its unique physical properties make it suitable for characters who have already demonstrated some level of expertise.",
    "vendorReason": "Connectopia is known for its blocky, gravity-defying terrain, making this artifact particularly useful to their inhabitants and visitors alike.",
    "shippingDetail": "Ships via a private courier who can deliver it within the next market day.",
    "usage": {
      "activation": "Bonus action for vertical stand; concentration required while active.",
      "duration": "10 seconds per use, ends on movement more than 5 feet away.",
      "endsWhen": "The user moves too far from the surface or falls.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for an artifact that provides unique and limited mobility benefits in specific environments.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T00:55:59.488917+00:00",
    "aiReviewedAt": "2026-07-22T00:55:59.488917+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_dusty_ranger_satchel": {
    "id": "connectopia_dusty_ranger_satchel",
    "name": "Dusty Ranger Satchel",
    "description": "The Dusty Ranger Satchel, crafted from desert scavenged leathers and metal scraps, is a rugged pack designed for frontier scavengers. Its leather exterior bears the sands of countless journeys, while its hidden compartments are lined with pockets woven from durable silk threads. This relic not only increases your carrying capacity by 30% but also occasionally yields rare materials when opened, making it indispensable to those who seek lost treasures and secret caches in the arid heartlands.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗺",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Increases carrying capacity",
      "Yields rare material"
    ],
    "vendor": "connectopia",
    "shippedBy": "Desert Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Carrying Capacity",
        "rules": "This effect increases your total carrying capacity by 30% for as long as you are not overloaded. It has no save DC, duration is indefinite until expended, and there is a limit of one use per day."
      },
      {
        "title": "Rare Material Drop",
        "rules": "Once per week, when the satchel is opened, it randomly drops 1d4 rare materials from its hidden compartments. This effect has no save DC or duration; it ends when the satchel is opened and recharges after a full day of rest."
      }
    ],
    "levelRequirementReason": "This item requires only level 1 as it provides useful utility for adventuring at an early stage without being overly powerful.",
    "vendorReason": "Connectopia, a vendor known for its unique and functional gear, offers the Dusty Ranger Satchel to adventurers seeking reliable equipment.",
    "shippingDetail": "The satchel is carefully packed with extra padding to ensure it arrives in perfect condition. Shipping may take up to a week due to desert conditions.",
    "usage": {
      "activation": "Passive effect upon opening the satchel.",
      "duration": "Infinite until expended, daily limit of one use for increased capacity; weekly limit of one drop for rare materials.",
      "endsWhen": "Exhausted after a week without recharging or when opened and used.",
      "charges": "Unlimited uses per day, but only one rare material drop per week."
    },
    "priceReason": "The Dusty Ranger Satchel is priced at 1000 XP due to its utility in increasing carrying capacity and yielding rare materials, making it a valuable asset for early-stage adventurers.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T00:56:02.085685+00:00",
    "aiReviewedAt": "2026-07-22T00:56:02.085685+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_entropic_keychain": {
    "id": "connectopia_entropic_keychain",
    "name": "Entropic Keychain",
    "description": "The Entropic Keychain hums with a low, rhythmic decay that resonates through the air like the distant echo of forgotten stars. Crafted from the very breath of entropy itself, it grants its wearer a fleeting immunity to harm and turns reality into a whimsical playground of giggling puffballs and crumbling landscapes. When activated, there's a 5% chance for a spontaneous prank effect to ensnare nearby targets, all in the name of cosmic jesters and tricksters who revel in chaos.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Entropy Immunity",
      "Prankster’s Jest"
    ],
    "vendor": "connectopia",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Entropy Immunity",
        "rules": "The wearer gains temporary damage reduction equal to 1d6 when taking damage. This effect lasts for the duration of a short rest and can be activated once per long rest."
      },
      {
        "title": "Prankster’s Jest",
        "rules": "When the keychain is activated, there's a 5% chance that a random prank effect from the Cosmic Jester cult will ensnare a target within 30 feet. The target must make a DC 14 Dexterity saving throw or become immobilized for 1 minute."
      }
    ],
    "levelRequirementReason": "Requiring attunement by a rogue or trickster ensures the keychain's chaotic effects are used responsibly.",
    "vendorReason": "Connectopia, known for its eccentric and whimsical items, regularly stocks the Entropic Keychain as it aligns perfectly with their diverse customer base.",
    "shippingDetail": "Delivered swiftly by Pianta Chuck Express, ensuring even the most delicate of keychains arrive in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect with a 1-minute cooldown between activations",
      "endsWhen": "The target successfully saves against the Prankster’s Jest or the duration ends upon a short rest",
      "charges": "Unlimited, but requires attunement"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's unique chaotic abilities and the rarity of its crafting material.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T00:55:40.730920+00:00",
    "aiReviewedAt": "2026-07-22T00:55:40.730920+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_feywild_crafting_ink": {
    "id": "connectopia_feywild_crafting_ink",
    "name": "Feywild Inkwell of Whispered Whimsy",
    "description": "The Feywild Inkwell of Whispered Whimsy is a delicate vial filled with ink that shimmers with the colors of the Feywild. Crafted from the essence of a whispering willow and bound to a Feywild artifact, it allows you to write spells that alter reality for a brief moment. The ink's power comes from its connection to the whimsical magic of the Feywild, which can cause minor distortions in reality if used too frequently.",
    "price": 1000,
    "icon": "🖋",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Alters reality with written spell effects",
      "Requires attunement"
    ],
    "vendor": "connectopia",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reality Alteration",
        "rules": "Activates on command as a bonus action. The ink allows the user to write a single, minor reality-altering spell that lasts for 1 minute. This effect can cause minor reality distortions if used too frequently."
      },
      {
        "title": "Attunement Requirement",
        "rules": "Requires attunement with a Feywild artifact. Once per day you may use the ink to cast one 1st-level spell from the Warlock's spell list, which must be on your warlock spellbook and not be a cantrip."
      }
    ],
    "levelRequirementReason": "This inkwell is designed for those who have already begun their journey into magic, but are still developing their abilities.",
    "vendorReason": "Connectopia is renowned for its connections to the Feywild and offers unique items that blend frontier creativity with whimsical magic.",
    "shippingDetail": "Ships via Dry Bones Dead Drop, known for their reliable but sometimes quirky delivery methods.",
    "usage": {
      "activation": "Bonus action to activate, command spell effect lasts 1 minute",
      "duration": "1 minute per use",
      "endsWhen": "The duration ends when the effect is used or after 1 minute",
      "charges": "One charge per day"
    },
    "priceReason": "This inkwell combines unique crafting material and attunement requirements, making it a rare but balanced addition to any adventurer's collection.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T00:55:35.871923+00:00",
    "aiReviewedAt": "2026-07-22T00:55:35.871923+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_frostforged_shield": {
    "id": "connectopia_frostforged_shield",
    "name": "Frostforged Shield",
    "description": "The Frostforged Shield is a relic of icy craftsmanship, its surface etched with runes that shimmer and whisper in the cold. Crafted by the last ice-dwelling clan who guarded the northern pass, it grants a +3 armor bonus against cold damage. The shield can cause frostbite to enemies within 5 feet when you make an unarmed strike or use a melee weapon attack while attuned to frost magic. Wielders hear the whispers of forgotten oaths and must stand on ice or snow to activate its full potential.",
    "category": "equipment",
    "price": 1000,
    "icon": "❄",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Cold Resistance",
      "Frostbite Infliction"
    ],
    "vendor": "connectopia",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "While attuned, you gain a +3 bonus to your AC against cold damage. This effect is active as long as you are standing on ice or snow."
      },
      {
        "title": "Frostbite Infliction",
        "rules": "When you make an unarmed strike or use a melee weapon attack while attuned to frost magic, there is a 10% chance to deal an additional 1d6 cold damage and inflict the Frostburn condition on the target. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The complexity of attuning to frost magic requires at least a 3rd-level character.",
    "vendorReason": "Connectopia specializes in relics and artifacts from the Frozen Frontier, making this shield an appropriate offering.",
    "shippingDetail": "Delivered via a spirit courier, ensuring swift transport of the relic.",
    "usage": {
      "activation": "Passive effect when attuned; active use requires attacking while attuned to frost magic.",
      "duration": "Instantaneous for attacks; passive is always on as long as you are standing on ice or snow and attuned.",
      "endsWhen": "The effect ends if you stop being attuned to frost magic, leave the area of ice or snow, or recharge after a long rest.",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare craftsmanship and magical attunement.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T00:55:50.939058+00:00",
    "aiReviewedAt": "2026-07-22T00:55:50.939058+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_name_here": {
    "id": "connectopia_item_name_here",
    "name": "Crimson Fleet Signal Beacon",
    "description": "The Crimson Fleet Signal Beacon hums with a vibrant crimson light, pulsing in time with the heartbeat of the battlefield. Crafted by the enigmatic Void Drifters from the depths of Connectopia, this beacon can instantly call forth three Wario Warships to your aid. As their cannons fire, allies gain a 50% bonus to damage for a fleeting moment, but the enemy fleet is left reeling with minor disorientation that lasts until they regroup.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Summons Three Wario Warships",
      "Allied Damage Boost"
    ],
    "vendor": "connectopia",
    "shippedBy": "Paratroopa Air Express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Summons Three Wario Warships",
        "rules": "Instantaneous activation. The beacon calls three Wario Warships to your aid within a 30-foot radius. These ships can engage in combat immediately, providing support for the duration of the battle."
      },
      {
        "title": "Allied Damage Boost",
        "rules": "When activated, all allies gain a +5 bonus to damage rolls against targets within 60 feet. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This beacon requires significant magical power and battlefield experience, making it suitable only for seasoned warriors.",
    "vendorReason": "Connectopia specializes in unique artifacts that bridge different realms, making the Crimson Fleet Signal Beacon a natural fit for their inventory.",
    "shippingDetail": "The beacon is shipped via Paratroopa Air Express, ensuring it reaches its destination swiftly and intact. Delivery time is approximately three days from Connectopia.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (effect lasts until the end of your next turn)",
      "endsWhen": "The effect ends when you take a long rest or if destroyed.",
      "charges": "Unlimited, but requires a short rest to regain use after extensive use."
    },
    "priceReason": "This beacon offers significant battlefield advantages at an affordable price for its legendary status and unique utility.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T00:56:07.212416+00:00",
    "aiReviewedAt": "2026-07-22T00:56:07.212416+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_jungle_whisper_shield": {
    "id": "connectopia_jungle_whisper_shield",
    "name": "Jungle Whisper Shield",
    "description": "The Jungle Whisper Shield is a resonant barrier that hums with the ancient magic of the rainforest. Crafted from enchanted wood and bound by jungle vines, it not only absorbs slashing damage but also subtly enhances stealth in dense foliage. When struck by a melee attack from DK Crew members, this shield grants +1 to AC for the attacker's next action or reaction. Its low frequency hum can distract nearby enemies, making it an invaluable asset for jungle skirmishes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Absorbs Slashing Damage",
      "Enhances Stealth"
    ],
    "vendor": "connectopia",
    "shippedBy": "Blooper Wetworks Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Absorbs Slashing Damage",
        "rules": "When the shield blocks damage from a slashing attack, it reduces the damage by 2d4. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Enhances Stealth in Jungle Terrain",
        "rules": "While within jungle terrain, the user’s Stealth checks are made at advantage. This benefit lasts until the end of your next turn after using this shield in combat."
      }
    ],
    "levelRequirementReason": "The Jungle Whisper Shield requires a minimum level to ensure proficiency with its enchantments.",
    "vendorReason": "Connectopia specializes in jungle gear and has the expertise to handle this shield’s unique properties.",
    "shippingDetail": "Delivered via Blooper Wetworks Express, ensuring swift arrival for your jungle expeditions.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Until the end of the user’s next turn after use",
      "endsWhen": "The effect ends when you take a long rest or at the start of your next turn if used in combat.",
      "charges": "Unlimited, but one charge is expended each time it reduces slashing damage."
    },
    "priceReason": "Balanced to provide a significant advantage without being overpowered, this shield’s price reflects its unique jungle magic and attunement requirements.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T00:56:04.341865+00:00",
    "aiReviewedAt": "2026-07-22T00:56:04.341865+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_koopa_navy_canteen": {
    "id": "connectopia_koopa_navy_canteen",
    "name": "Koopa Navy Canteen",
    "description": "The Koopa Navy Canteen is a leaky vessel crafted from stolen ink supplies, its sides adorned with clandestine symbols. Each sip releases a noxious brew that not only fills your coin purse but also splashes an unfortunate target with ink, causing them to writhe in confusion. The canteen's contents are said to be brewed by the secretive Koopa Navy in Ricco Harbor, and it is rumored that those who drink it may find themselves haunted by memories of burnt rubber.",
    "price": 1000,
    "icon": "🧃",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Gain Coins",
      "Ink Bleed"
    ],
    "vendor": "connectopia",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Coin Gain",
        "rules": "Consume the canteen's contents as a bonus action. You gain 10 coins and have a 25% chance to cause ink bleed on one target within 30 feet."
      },
      {
        "title": "Ink Bleed",
        "rules": "The target must succeed on a DC 14 Constitution saving throw or become incapacitated for 1 minute. On a successful save, the target is instead blinded for 1 round."
      }
    ],
    "levelRequirementReason": "This canteen can be used by novices as it provides immediate benefits without requiring significant prowess.",
    "vendorReason": "Connectopia specializes in quirky and unique items, and the Koopa Navy Canteen fits perfectly within their collection of oddities.",
    "shippingDetail": "Delivered via Pipe Express with a guaranteed delivery time of two days or less.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous effect; Ink Bleed duration is 1 minute or until the target regains consciousness.",
      "endsWhen": "The target makes a successful Constitution saving throw, the canteen's contents are consumed, or it breaks.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the unique materials and secret craftsmanship involved in creating this item.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-22T00:56:13.212928+00:00",
    "aiReviewedAt": "2026-07-22T00:56:13.212928+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_koopa_navy_ink_jam_glove": {
    "id": "connectopia_koopa_navy_ink_jam_glove",
    "name": "Ink Jam Glove",
    "description": "The Ink Jam Glove, crafted by Admiral Bloopers’ Ink Corps, is a tactical glove designed for Koopa Navy operations in ink-splattered environments. Its sleek design conceals a hidden reservoir of quick-drying ink, which can be deployed to jam the movements of enemies in close combat. The glove also features reinforced knuckles that absorb the impact from ink-based attacks, reducing damage by half. Once activated, it triggers an ink burst after three consecutive strikes, splattering all nearby foes with a potent mix of ink and jam for added chaos.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Ink Absorption",
      "Quick Jamming Strike"
    ],
    "vendor": "connectopia",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Ink Absorption",
        "rules": "When the user takes damage from an ink-based attack, they can activate this effect as a reaction to reduce the incoming damage by 50%, up to once per short rest."
      },
      {
        "title": "Quick Jamming Strike",
        "rules": "After three successful melee attacks against a single target with the Ink Jam Glove, the user can trigger an ink burst. This effect causes 1d6 damage to all creatures within a 5-foot radius of the target. The glove must be recharged after five minutes of idle use."
      }
    ],
    "levelRequirementReason": "Requires attunement by a Koopa Navy officer due to its specialized design and combat applications.",
    "vendorReason": "Connectopia, the official supply chain for Koopa Navy personnel, ensures that only authorized officers receive this high-demand tactical gear.",
    "shippingDetail": "Shipped via Blooper Express with a guaranteed delivery within 24 hours of purchase.",
    "usage": {
      "activation": "Reaction to ink-based attacks, or as an action for the ink burst effect after three strikes.",
      "duration": "Instantaneous (ink burst) and lasts until expended",
      "endsWhen": "The ink reservoir is depleted or the user takes a short rest.",
      "charges": "Recharges after 5 minutes of idle use."
    },
    "priceReason": "Balanced to reflect its tactical utility, requiring attunement and specialized training for effective use.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T00:56:41.803639+00:00",
    "aiReviewedAt": "2026-07-22T00:56:41.803639+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_mushroom_regency_icebreaker": {
    "id": "connectopia_mushroom_regency_icebreaker",
    "name": "Mushroom Regency Icebreaker",
    "description": "The Mushroom Regency Icebreaker gleams with a crystalline sheen, its blade a frozen lattice of fungal magic. Crafted by the enigmatic Mushroom Regency in frosty realms, this sword is forged from ancient ice and enchanted with cold spells. Its wielder can deal piercing cold damage and apply frostbite to foes, turning their steps to slush for moments thereafter. A rare piece attuned only by spellcasters, it grants temporary immunity against fire and has a chance to petrify nearby enemies in the chill of its touch.",
    "category": "equipment",
    "price": 1000,
    "icon": "❄",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Freezes Enemies",
      "Frost Bite"
    ],
    "vendor": "connectopia",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Freezes Enemies",
        "rules": "When you hit an enemy with this weapon, there is a 20% chance to petrify them in place for up to 1 round. The target must make a DC 15 Dexterity saving throw or be immobilized and unable to take actions."
      },
      {
        "title": "Frost Bite",
        "rules": "The first time you hit an enemy with this weapon on your turn, they are also subjected to frostbite. Until the start of your next turn, the target takes 1d4 cold damage each round as their flesh freezes. This effect ends if the target is healed or takes any non-cold damage."
      }
    ],
    "levelRequirementReason": "This weapon requires attunement by a spellcaster and proficiency in martial weapons to wield effectively.",
    "vendorReason": "Connectopia specializes in rare and magical equipment, including enchanted blades like the Mushroom Regency Icebreaker.",
    "shippingDetail": "Ships via Blooper Wetworks Express, arriving within a week of purchase with expert handling.",
    "usage": {
      "activation": "On hit as part of an attack action",
      "duration": "Instantaneous; effects last until the start of your next turn or end when dispelled by magical means",
      "endsWhen": "The target heals, takes non-cold damage, or is subjected to a dispel magic spell.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This weapon's rarity and unique enchantments justify its price of 1000 XP.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T00:56:50.959016+00:00",
    "aiReviewedAt": "2026-07-22T00:56:50.959016+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_mushroom_soul_pipe": {
    "id": "connectopia_mushroom_soul_pipe",
    "name": "Mushroom Soul Pipe",
    "description": "The Mushroom Soul Pipe is a gnarled wooden pipe adorned with mushrooms that retain the memory of Princess Noki. When smoked, it grants fleeting visions of the Fungi civil war’s final battle and allows the wielder to move silently through fungal terrain. However, the whispers from the princess may drive one mad if not endured, and the taste buds can falter for a moment after use. This relic was smuggled out by a Rakasha courier who adheres strictly to the Mushroom Kingdom's laws.",
    "price": 1000,
    "icon": "🍄",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Stealthy Movement",
      "Psychic Vision"
    ],
    "vendor": "connectopia",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealthy Movement",
        "rules": "The user gains temporary +10% stealth while moving. This effect lasts for one minute and ends early if the pipe is extinguished or lost."
      },
      {
        "title": "Psychic Vision",
        "rules": "Upon activation, the pipe reveals hidden enemies within 30 feet with a duration of 1 round. There is a 25% chance that the user will hear a whisper from Princess Noki, which has no effect but can be disturbing. This effect ends when the pipe is extinguished."
      }
    ],
    "levelRequirementReason": "The Mushroom Soul Pipe requires a lower level to use as it offers unique insight into historical battles without overwhelming its wielder.",
    "vendorReason": "Connectopia specializes in rare artifacts and curiosities from various realms, making the Mushroom Soul Pipe an ideal addition to their stock.",
    "shippingDetail": "The courier ensures that the pipe is handled with care, delivered swiftly but not instantaneously, due to its delicate nature.",
    "usage": {
      "activation": "A bonus action to light and use the pipe.",
      "duration": "1 minute for Stealthy Movement, 1 round for Psychic Vision",
      "endsWhen": "Extinguished or lost in battle.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Mushroom Soul Pipe is priced at 1000 XP as it offers unique and valuable insights into a historical event, making it a rare and sought-after item.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T00:56:20.883593+00:00",
    "aiReviewedAt": "2026-07-22T00:56:20.883593+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_oracle_cursed_treasure": {
    "id": "connectopia_oracle_cursed_treasure",
    "name": "Oracle Cursed Treasure",
    "description": "The Oracle Cursed Treasure is a hollowed-out urn made of ancient, blackened bone. It whispers secrets of the dead when held near a corpse, but only if the wielder's soul is pure enough to hear them. If used within 10 feet of Primordial Wyrm seals, it deals 2d4 necrotic damage to both target and caster. Upon death, it triggers a curse that drains the soul, leaving the body as a soulless husk for three rounds.",
    "price": 1000,
    "icon": "🕯",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Whispers Secrets",
      "Primordial Wyrm Danger"
    ],
    "vendor": "connectopia",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Whispers Secrets",
        "rules": "The item grants temporary invisibility to the wielder for 1 minute. Consumes 2d6 mana upon activation. This effect ends if the wielder takes damage, or if they voluntarily end it early."
      },
      {
        "title": "Primordial Wyrm Danger",
        "rules": "If used within 10 feet of Primordial Wyrm seals, both target and caster take 2d4 necrotic damage. This effect ends when the item is destroyed by magical means or when a successful DC 15 Constitution saving throw is made."
      }
    ],
    "levelRequirementReason": "This relic requires a high-level caster to handle its power and risks.",
    "vendorReason": "Connectopia specializes in rare, cursed artifacts that challenge the brave and foolhardy.",
    "shippingDetail": "Due to the nature of this item, it is shipped via special courier with increased delivery times.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until voluntarily ended",
      "endsWhen": "Wielder takes damage or ends the effect early",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its cursed nature and limited, dangerous utility.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T00:56:25.657643+00:00",
    "aiReviewedAt": "2026-07-22T00:56:25.657643+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_puffball_pouch": {
    "id": "connectopia_puffball_pouch",
    "name": "Puffball Pouch",
    "description": "The Puffball Pouch is a peculiar leather pouch crafted from the soft, sentient skin of eldritch puffballs. Each one harbors a minuscule nightmare dimension within its fabric. When opened, it releases a cloud of giggles that incapacitate foes by making them laugh uncontrollably and drop their weapons. The laughter also nourishes the Cosmic Jester’s cult, but if used during the Pianta Village Independence event, there's a chance to escape capture by envoys.",
    "price": 1000,
    "icon": "🍽",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Laughter Infusion",
      "Cult Nourishment"
    ],
    "vendor": "connectopia",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Laughter Infusion",
        "rules": "When the pouch is opened and consumed, it releases a cloud of giggles that causes each enemy to laugh uncontrollably for 1 minute. During this time, enemies drop their weapons and are incapacitated as they laugh. The effect ends if the wearer or an ally uses an action to extinguish the laughter by consuming another puffball."
      },
      {
        "title": "Cult Nourishment",
        "rules": "Each use of the Puffball Pouch feeds the Cosmic Jester’s cult, granting them 1d4 temporary hit points. This effect triggers only during the Pianta Village Independence event and has a 50% chance to allow the user to escape capture by envoys."
      }
    ],
    "levelRequirementReason": "The pouch's effects are potent enough that even lower-level characters can handle its whimsical yet dangerous properties.",
    "vendorReason": "Connectopia specializes in unique and rare items from the Pianta Village, making this pouch a perfect fit for their inventory.",
    "shippingDetail": "Ships within one week of purchase with an additional delivery fee due to the fragile nature of the puffballs.",
    "usage": {
      "activation": "Consuming the pouch by opening and consuming its contents.",
      "duration": "1 minute per use, ends when extinguished or discarded.",
      "endsWhen": "Extinguished by another puffball consumption or discarded.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Puffball Pouch is priced high due to the rarity of eldritch puffballs and its unique properties, which make it a sought-after item in the market.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-22T00:56:35.581958+00:00",
    "aiReviewedAt": "2026-07-22T00:56:35.581958+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_raventree_manor_map_fragment": {
    "id": "connectopia_raventree_manor_map_fragment",
    "name": "Raventree Manor Fragment Map",
    "description": "A jagged piece of parchment with intricate symbols from both the Feywild and Physical Shadowfell, this Raventree Manor Fragment Map reveals hidden pathways within these realms. It grants +2 to all dimensional traversal rolls, making navigation through these planes a breeze. Touching it can stir a vivid memory of a past event, but only once per day. This fragment is crafted from the shattered remains of Raventree Manor, a symbol of its once-magnificent structure now reduced to ruins.",
    "price": 1000,
    "icon": "🗺",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Reveals hidden pathways",
      "+2 to dimensional traversal rolls"
    ],
    "vendor": "connectopia",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Pathways Revelation",
        "rules": "When activated by touching the map, this effect reveals hidden pathways within the Physical Shadowfell and Feywild. The effect lasts until the start of your next turn."
      },
      {
        "title": "+2 to Dimensional Traversal Rolls",
        "rules": "This effect grants a +2 bonus on all rolls related to navigating or traveling through dimensional planes, including any checks made by the DM for such activities. This benefit lasts until the end of the encounter."
      }
    ],
    "levelRequirementReason": "Suitable for beginners who are starting their journey into the realms beyond.",
    "vendorReason": "Connectopia, a hub for adventurers and explorers, is known for selling items that aid in frontier expansion and exploration.",
    "shippingDetail": "Ships via Dry Bones Dead Drop, ensuring the map arrives safely but with a touch of macabre flair.",
    "usage": {
      "activation": "Activate as a bonus action by touching the map.",
      "duration": "Instantaneous for revealing hidden pathways; lasts until the start of your next turn. +2 to rolls is permanent and cumulative during an encounter.",
      "endsWhen": "The effect ends when the map is no longer being used or when the user completes their turn.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and utility in exploration without overshadowing other party members.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T00:56:39.044696+00:00",
    "aiReviewedAt": "2026-07-22T00:56:39.044696+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_sarasaland_silk_belt": {
    "id": "connectopia_sarasaland_silk_belt",
    "name": "Sarasaland Silk Belt",
    "description": "The Sarasaland Silk Belt is a delicate, golden-brown belt woven with threads of desert silk. Crafted by the Sarasaland Royal Cartographers for Princess Daisy’s court, it exudes a regal elegance. Worn within 500 yards of Princess Daisy’s territory, this accessory enhances one's diplomatic prowess and can sway hearts in arid lands. The belt requires attunement with a royal crest and grants a +2 bonus to Diplomacy checks for 1 hour.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Diplomatic Aura",
      "Morale Boost"
    ],
    "vendor": "connectopia",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Diplomatic Aura",
        "rules": "Activate as a bonus action. Grants the wearer a +2 bonus to all Diplomacy checks for 1 hour. The effect ends if the wearer moves more than 500 yards from Princess Daisy’s territory or if the belt is removed."
      },
      {
        "title": "Morale Boost",
        "rules": "While within desert zones and within 500 yards of Princess Daisy’s territory, reduces enemy morale by 10%. This effect lasts for 1 hour and ends when the wearer leaves a desert zone or if the belt is removed."
      }
    ],
    "levelRequirementReason": "The belt's diplomatic benefits are accessible to all, enhancing one’s ability to navigate social situations.",
    "vendorReason": "As part of Princess Daisy’s court, connectopia offers this royal artifact for its patrons.",
    "shippingDetail": "Ships via Blooper Express; delivery is instantaneous within the desert territories.",
    "usage": {
      "activation": "Bonus action to activate Diplomatic Aura.",
      "duration": "1 hour for both effects.",
      "endsWhen": "Leaves Princess Daisy’s territory or removes the belt.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects the belt's rarity and diplomatic utility.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T00:56:48.683744+00:00",
    "aiReviewedAt": "2026-07-22T00:56:48.683744+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_scam_gear": {
    "id": "connectopia_scam_gear",
    "name": "The Last Whisper of Orangus",
    "description": "The Last Whisper of Orangus is a cursed artifact that whispers truths to the void. Crafted by Liberated Toads in error, it grants 100% accuracy on attacks and allows for teleportation to any shadowed location. However, its malevolent magic can summon a ghostly form of Orangus Cornelius, which offers strategic advice but at a terrible cost: every use drains 50 HP from the user, making it a dangerous yet invaluable tool in desperate times.",
    "price": 1000,
    "icon": "🚨",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "100% Attack Accuracy",
      "Shadowfell Echo Teleport"
    ],
    "vendor": "connectopia",
    "shippedBy": "Pipe Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "100% Attack Accuracy",
        "rules": "Activates on attack, lasts until the end of your next turn. Requires a bonus action to activate."
      },
      {
        "title": "Shadowfell Echo Teleport",
        "rules": "Instantaneous teleportation to any shadowed location within 30 feet. A failure on a DC 15 Wisdom saving throw causes you to become disoriented for 1 minute, during which time you have disadvantage on all ability checks."
      }
    ],
    "levelRequirementReason": "Requires at least level 2 to manage the item's dangerous effects.",
    "vendorReason": "Connectopia, a notorious vendor of questionable items, occasionally sells this cursed artifact despite its origins.",
    "shippingDetail": "Delivered via Pipe Express with a special delivery note warning of the item's curse.",
    "usage": {
      "activation": "Bonus action to activate; requires a bonus action each use.",
      "duration": "Until end of next turn for Attack Accuracy; instantaneous for Shadowfell Echo Teleport.",
      "endsWhen": "Exhausted after one use or if the user takes damage.",
      "charges": "Unlimited, but limited by HP drain per use."
    },
    "priceReason": "The item's cursed nature and dangerous effects justify its relatively low price of 1000 XP.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-22T00:56:53.000976+00:00",
    "aiReviewedAt": "2026-07-22T00:56:53.000976+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_social_media_detox": {
    "id": "connectopia_social_media_detox",
    "name": "Connectopia Social Media Detox",
    "description": "The Connectopia Social Media Detox is a sleek, glowing device that emits soft pulses of light. It disconnects you from all digital networks for seven days, leaving you blissfully offline and immune to scrying or divination attempts. You feel refreshed but also clueless about the latest social media trends, giving you disadvantage on Insight checks related to online interactions. However, your newfound tranquility grants you advantage on Charisma checks with fellow detoxers, making it a popular choice among the tech-savvy who seek a break from their digital lives.",
    "category": "services",
    "price": 1000,
    "icon": "📵",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Offline Immunity",
      "Social Media Cluelessness"
    ],
    "vendor": "connectopia",
    "shippedBy": "Disconnected Message Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Offline Immunity",
        "rules": "When activated, you become immune to scrying and divination for seven days. This effect ends when the duration expires."
      },
      {
        "title": "Social Media Cluelessness",
        "rules": "You have disadvantage on Insight checks related to social media trends or online interactions during the duration of the effect."
      }
    ],
    "levelRequirementReason": "This device is designed for all adventurers who wish to take a break from their digital lives.",
    "vendorReason": "Connectopia Unplugged specializes in innovative tech that helps its customers unplug and recharge.",
    "shippingDetail": "Delivered within three days of purchase, ensuring you're fully recharged by the time it arrives.",
    "usage": {
      "activation": "Object interaction to activate for a duration of seven days.",
      "duration": "Seven days from activation.",
      "endsWhen": "The duration expires after seven days.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This balanced price reflects the device's unique utility and limited duration, making it a fair addition to any adventurer's XP budget.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T00:56:54.755242+00:00",
    "aiReviewedAt": "2026-07-22T00:56:54.755242+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_starlight_amulet": {
    "id": "connectopia_starlight_amulet",
    "name": "Starlight Amulet",
    "description": "The Starlight Amulet is a radiant, fractured pendant that hums with celestial energy. Crafted from the remains of ancient starships and imbued with the spirits of lost pioneers, it grants its wearer a brief vision into future paths through treacherous Blocky terrain. It also reveals hidden secrets within the Dream Land’s most perilous realms, yet wearing it distorts reality slightly, bestowing temporary immunity to psychic attacks. However, speaking aloud while adorned risks collapsing the dream dimension itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Future Path Vision",
      "Dream Distortion"
    ],
    "vendor": "connectopia",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Future Path Vision",
        "rules": "When activated as a bonus action, this amulet grants the wearer advantage on checks and saves related to Blocky terrain navigation for 1 minute. Additionally, it reveals hidden paths in both the Blocky terrain and Dream Land. If used during Pianta Village Independence, there is a 30% chance that envoys are not thrown into the pool."
      },
      {
        "title": "Dream Distortion",
        "rules": "Activates as a reaction to psychic attacks within 30 feet, granting temporary immunity for 1 round. The wearer must remain silent in public or risk triggering this effect, which causes a dream dimension collapse, expending the amulet's abilities."
      }
    ],
    "levelRequirementReason": "The Starlight Amulet requires a level 7 proficiency to handle its cosmic and psychological effects.",
    "vendorReason": "Connectopia is known for its unique artifacts from various factions, including the Starlight Amulet.",
    "shippingDetail": "Delivered via a special courier pigeon that ensures swift arrival within one day of purchase.",
    "usage": {
      "activation": "Bonus action to activate; reaction to psychic attacks for immunity, must remain silent in public or risk collapse.",
      "duration": "Advantage on checks and saves lasts for 1 minute after activation.",
      "endsWhen": "Expends its abilities if the wearer speaks aloud in public while active or is destroyed by dream dimension collapse.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its powerful vision and protection effects.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T00:57:03.983115+00:00",
    "aiReviewedAt": "2026-07-22T00:57:03.983115+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_toad_tongue_satchel": {
    "id": "connectopia_toad_tongue_satchel",
    "name": "Toad Tongue Satchel",
    "description": "The Toad Tongue Satchel is a leather pouch stitched from the skin of a toad that once served as an ambassador for the Cheep-Cheep Accords. Its texture retains the subtle scent of ancient treaties and the whispers of long-forgotten negotiations. When opened, it emits a soothing hum that can calm even the most volatile spirit walkers and creatures. The satchel's leather is marked with faint patterns that tell tales of failed alliances and successful pacts.",
    "price": 1000,
    "icon": "🐸",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Soothing Hum",
      "Ambassadorial Insight"
    ],
    "vendor": "Connectopia",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soothing Hum",
        "rules": "When opened, the Toad Tongue Satchel emits a soothing hum. This effect can calm hostile NPCs or creatures within 10 feet by reducing their hostility for 1 minute. The target must make a Wisdom saving throw (DC 13) or be confused and unable to act normally for 1 round."
      },
      {
        "title": "Ambassadorial Insight",
        "rules": "The satchel grants the wielder advantage on Diplomacy checks made against spirit entities. Additionally, it provides a +2 bonus to Charisma (Deception) checks when attempting to negotiate with creatures of the plane of spirits."
      }
    ],
    "levelRequirementReason": "The Toad Tongue Satchel is suitable for novice adventurers who may encounter spirit entities or volatile NPCs during their early adventures.",
    "vendorReason": "As a hub of diplomacy and trade, Connectopia is well-known for its connections with spirit realms and toad ambassadors.",
    "shippingDetail": "The Chain Chomp Couriers ensure the satchel arrives in pristine condition, even on the most treacherous routes.",
    "usage": {
      "activation": "Bonus action to open and activate the satchel.",
      "duration": "1 minute for the calming effect; 24 hours between uses.",
      "endsWhen": "The calming effect ends after 1 minute. The soothing hum stops when the satchel is closed or if the target successfully saves against its effects.",
      "charges": "Unlimited, but only one calming effect can be active at a time."
    },
    "priceReason": "The Toad Tongue Satchel's unique construction from toad diplomacy gear and its diplomatic significance justify its high price in the market.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-22T00:57:06.741962+00:00",
    "aiReviewedAt": "2026-07-22T00:57:06.741962+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_virtual_avatar_suit": {
    "id": "connectopia_virtual_avatar_suit",
    "name": "Connectopia Virtual Avatar Suit ",
    "description": "The Connectopia Virtual Avatar Suit feels like digital armor, seamlessly merging with your form. Its sleek, holographic panels shift and glow with a life of their own, enhancing your tech-based interactions. This suit overheats in real sunlight, forcing a DC 15 Constitution saving throw or suffer a -2 penalty to all rolls until cooled down manually. Forged by Virtual Tailors, it's a marvel of digital craftsmanship that offers advantage on Deception checks when impersonating an AI system.",
    "price": 1000,
    "icon": "👔",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on tech-based Deception",
      "Overheats in real sunlight"
    ],
    "vendor": "connectopia_hub",
    "shippedBy": "Pixel Pleat Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Tech-Based Deception Advantage",
        "rules": "When making a Deception check related to technology, the wearer gains advantage. This effect is limited to once per long rest."
      },
      {
        "title": "Overheats in Real Sunlight",
        "rules": "The suit overheats when exposed to direct sunlight or bright light sources (such as daylight spells). The wearer must succeed on a DC 15 Constitution saving throw or suffer a -2 penalty to all ability checks, attack rolls, and saving throws until the suit cools down. Manual cooling requires ten minutes of inactivity."
      }
    ],
    "levelRequirementReason": "The suit's advanced tech and custom fit require at least third-level proficiency in technology-based skills.",
    "vendorReason": "Connectopia Hub specializes in virtual and augmented reality gear, making the Virtual Avatar Suit a perfect product for their lineup.",
    "shippingDetail": "Ships via Pixel Pleat Express within 3 days of purchase. Delivery includes a complimentary cooling pack for easy use upon arrival.",
    "usage": {
      "activation": "Automatic when donned; can be manually activated or deactivated as an action.",
      "duration": "Until removed, overheats in sunlight",
      "endsWhen": "Removed from the wearer",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this suit offers a fair trade for its unique tech-based advantages and cooling requirements.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T00:57:18.958096+00:00",
    "aiReviewedAt": "2026-07-22T00:57:18.958096+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_virtual_flavor_injector": {
    "id": "connectopia_virtual_flavor_injector",
    "name": "Connectopia Virtual Flavor Injector ",
    "description": "The Connectopia Virtual Flavor Injector is a sleek, chrome device adorned with holographic taste indicators. It allows you to 'upload' flavors into your food by merging digital tastes with real-world ingredients. When used correctly, it enhances the flavor of any meal by +1 to tech recipes. However, improper use can lead to glitches, where random flavors are added unpredictably. The Injector is a marvel of modern culinary technology, crafted by VR Injectors, known for their innovative kitchen gadgets.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍬",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Digital Taste Infusion",
      "Random Flavor Glitch"
    ],
    "vendor": "connectopia_hub",
    "shippedBy": "Pixel Inject Pan",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Digital Taste Infusion",
        "rules": "Activates as a bonus action. The target food item gains +1 to any tech recipe check made within the next hour. If used incorrectly, there is a 25% chance of random flavor glitches."
      },
      {
        "title": "Random Flavor Glitch",
        "rules": "At the DM's discretion, after a failed recipe check with this device, the food item may gain an unexpected and unintended flavor (determined by the DM). This effect lasts until the next meal is prepared. No save DC required."
      }
    ],
    "levelRequirementReason": "Beginners can start experimenting with culinary magic using Connectopia's Injector.",
    "vendorReason": "Connectopia Hub specializes in cutting-edge kitchen gadgets and this is one of their most popular items.",
    "shippingDetail": "Ships via Pixel Inject Pan with next-day delivery within the city limits.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Used incorrectly or when the meal is prepared",
      "charges": "Unlimited, recharged by connecting to Connectopia Hub's network"
    },
    "priceReason": "Balanced at 1000 XP, it offers a unique and useful gadget for culinary adventures.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T00:57:19.751800+00:00",
    "aiReviewedAt": "2026-07-22T00:57:19.751800+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_virtual_reality_helmet_premium": {
    "id": "connectopia_virtual_reality_helmet_premium",
    "name": "Connectopia Virtual Reality Helmet ",
    "description": "The Connectopia Virtual Reality Helmet transports you to immersive digital realms where you can train in simulated combat scenarios. Its sleek, ergonomic design houses a display that projects lifelike environments. Upon donning it, you may feel a mild tingle as the helmet calibrates its fields; this is safe but can cause motion sickness for some. Made by VR Techs, the helmet's sessions are known to enhance reflexes and combat strategies.",
    "price": 1000,
    "icon": "🪖",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Simulate fight",
      "Motion sickness risk"
    ],
    "vendor": "connectopia_hub",
    "shippedBy": "Pixel Headset Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Simulate fight",
        "rules": "When you use this item as a bonus action, you gain +1 to your next combat roll. This effect lasts until the start of your next turn."
      },
      {
        "title": "Motion sickness risk",
        "rules": "There is a 25% chance that using the helmet will cause motion sickness. If affected, you are incapacitated for 1 minute and can take no actions or reactions."
      }
    ],
    "levelRequirementReason": "This item requires basic understanding of VR technology to use effectively.",
    "vendorReason": "As a premier VR provider, Connectopia Hub ensures only the best equipment is sold through their store.",
    "shippingDetail": "Ships within 2 business days via Pixel Headset Express. Delivery includes an instructional guide and compatibility checklist.",
    "usage": {
      "activation": "Bonus action to activate, used once per long rest.",
      "duration": "Instantaneous effect; +1 bonus to next combat roll lasts until start of your next turn.",
      "endsWhen": "The effect ends when you take a short or long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects the helmet's advanced technology and rarity within the market, offering a balanced value for its benefits.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T00:57:38.639961+00:00",
    "aiReviewedAt": "2026-07-22T00:57:38.639961+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_virtual_reality_victuals_recipe": {
    "id": "connectopia_virtual_reality_victuals_recipe",
    "name": "Recipe: Connectopia Virtual Reality Victuals ",
    "description": "The Recipe for Connectopia Virtual Reality Victuals is a digital parchment that crackles with pixelated patterns, hinting at its ability to transform ordinary snacks into a symphony of code-flavored bites. It requires synthetic ingredients and promises glitches in your taste buds as it teaches you the art of 'Upload' flavors in just 10 minutes. Once consumed, these victuals grant you advantage on all technology-related saving throws for an hour.",
    "price": 1000,
    "icon": "🍬",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Upload Flavors",
      "Advantage on Tech Saves"
    ],
    "vendor": "connectopia_hub",
    "shippedBy": "Byte Bite Bulletin",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teaches Recipe: Upload Flavors (10 minutes)",
        "rules": "This effect is a passive knowledge gained by reading the recipe. It does not require an action to activate and lasts until you successfully prepare a dish using this recipe."
      },
      {
        "title": "Advantage on Tech Saves",
        "rules": "After consuming the victuals, you gain advantage on all Technology-related saving throws for 1 hour. This effect ends when it expires or if you consume another item that grants similar benefits."
      }
    ],
    "levelRequirementReason": "The recipe is simple enough to be accessible early in the character's journey, encouraging exploration of technology-based professions.",
    "vendorReason": "Connectopia Hub specializes in unique and technological recipes, making it a fitting vendor for this digital snack.",
    "shippingDetail": "Ships via the Byte Bite Express service, which ensures timely delivery of these pixelated delights.",
    "usage": {
      "activation": "Passive effect upon reading; consumes when used to prepare a dish",
      "duration": "1 hour or until you eat another item granting similar benefits",
      "endsWhen": "Effect ends after the duration expires or when you consume an item providing similar advantages",
      "charges": "Unlimited, but requires preparation using synthetic ingredients"
    },
    "priceReason": "The recipe is uncommon and valuable for its unique culinary technology, warranting a balanced XP price of 1000.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T00:57:56.805199+00:00",
    "aiReviewedAt": "2026-07-22T00:57:56.805199+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_voices_of_the_night": {
    "id": "connectopia_voices_of_the_night",
    "name": "Voices of the Night",
    "description": "The 'Voices of the Night' is a delicate, silver locket encrusted with black opals. It whispers secrets from forgotten realms, its voice echoing like the distant howl of an eternal night. This locket can grant temporary invisibility and sustain soul points for summoning spectral allies, while also subtly revealing hidden dangers or shortcuts. Its origins lie in the Regal Empire Frontier Lab, where it was crafted to aid adventurers in their darkest hours.",
    "price": 1000,
    "icon": "🌑",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Invisibility",
      "Soul Point Sustain"
    ],
    "vendor": "connectopia",
    "shippedBy": "Bob-omb Rush Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "The wearer becomes invisible for 1 round when the locket is activated as a bonus action. This effect ends if the wearer takes any action other than movement or speaks."
      },
      {
        "title": "Soul Point Sustain",
        "rules": "Activating the locket allows the user to sustain 1d4 soul points, which can be spent to summon a shadow companion. The locket recharges after a long rest."
      }
    ],
    "levelRequirementReason": "The locket's whispering secrets and minor invisibility are within reach of beginning adventurers.",
    "vendorReason": "Connectopia specializes in unique, enchanted items for novice to mid-level adventurers.",
    "shippingDetail": "Ships via Bob-omb Express, ensuring quick delivery within a week.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 round",
      "endsWhen": "The wearer takes an action other than movement or speaks",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its dual abilities and the Regal Empire's craftsmanship.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T00:57:30.551949+00:00",
    "aiReviewedAt": "2026-07-22T00:57:30.551949+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_volcanic_bloodstone": {
    "id": "connectopia_volcanic_bloodstone",
    "name": "Volcanic Bloodstone",
    "description": "The Volcanic Bloodstone is a pulsating obsidian core that hums with volcanic fury, its surface etched with ancient runes of fiery promise. Crafted by Koopa Postal near active lava vents in the Valley of Bowser, this relic connects to the Primordial Wyrm prison through ancient seal residue, making it a perilous yet powerful companion for adventurers. Touching it causes minor burns that leave behind a trail of red-hot embers, and its presence enhances one's melee attack speed by 10%.",
    "price": 1000,
    "icon": "🌋",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Causes minor burns on touch (1d4 damage per 5 seconds)",
      "Increases melee attack speed by 10%"
    ],
    "vendor": "connectopia",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Minor Burns",
        "rules": "When a creature touches the Volcanic Bloodstone, they must make a DC 12 Dexterity saving throw or take 1d4 fire damage. This effect occurs every 5 seconds while in contact with the item."
      },
      {
        "title": "Attack Speed Boost",
        "rules": "The user gains a +10% bonus to melee attack speed for as long as they are holding the Volcanic Bloodstone, up to a maximum of two attacks per turn. This effect does not stack with other sources of similar bonuses."
      }
    ],
    "levelRequirementReason": "The item's fiery essence and connection to the Primordial Wyrm prison require an adventurer at least level 4 to wield its power.",
    "vendorReason": "Connectopia, known for their unique and dangerous wares, offers this relic crafted by Koopa Postal.",
    "shippingDetail": "Shipped via hot-air balloon across the Valley of Bowser; delivery can take up to a week due to volatile conditions.",
    "usage": {
      "activation": "Passive effect when held or worn on armor (infused).",
      "duration": "Until the wearer stops holding it or takes damage.",
      "endsWhen": "The item breaks, is destroyed, or its charges are exhausted.",
      "charges": "Unlimited; recharges after 8 hours of rest."
    },
    "priceReason": "Crafted from rare volcanic materials and imbued with ancient seals, the Volcanic Bloodstone offers a potent yet controlled source of fire-based abilities at an appropriate cost.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T00:58:00.823798+00:00",
    "aiReviewedAt": "2026-07-22T00:58:00.823798+00:00",
    "aiReviewVersion": 1
  },
  "continental_teleportation_network": {
    "id": "continental_teleportation_network",
    "name": "Continental Teleportation Network Access",
    "description": "The Continental Teleportation Network Access card grants you a lifetime of seamless travel across five major cities, each shimmering with the arcane power that binds them together. The network ensures safe passage through any civilized lands, and upon your death, it passes to your heir as a symbol of your legacy. Each use of this ancient technology feels like stepping into an eldritch portal, where the boundary between worlds seems to dissolve in a flash.",
    "category": "premium",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Emergency teleportation",
      "Safe passage"
    ],
    "vendor": "merchant_guild",
    "shippedBy": "Crystal Pendant",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Emergency Teleportation",
        "rules": "You can use this item once per week to teleport away from any immediate danger that threatens your life. You must declare the destination before using it, and you cannot target an area within hostile territory or a place where you are known to be wanted by authorities."
      },
      {
        "title": "Safe Passage",
        "rules": "While holding this card, you gain immunity to non-magical attacks that would otherwise displace or hinder you in any civilized land. This includes the effects of bad weather and hostile terrain features such as swamps or deserts."
      }
    ],
    "levelRequirementReason": "The network is available to all, but it requires the user's understanding of how to traverse its portals safely.",
    "vendorReason": "As gatekeepers of trade and travel, the Merchant Guild ensures that only those who can benefit from such powerful technology are granted access.",
    "shippingDetail": "The card is delivered encased in a shimmering crystal pendant, ensuring its safe arrival and magical integrity.",
    "usage": {
      "activation": "Standard action to activate the network; no additional use limit applies after activation.",
      "duration": "Instantaneous teleportation upon activation.",
      "endsWhen": "Teleport ends when you arrive at your destination or if the card is destroyed.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The card's value lies in its guaranteed safe passage and emergency use, making it a crucial tool for adventurers of all levels.",
    "priceOriginal": 200000,
    "priceReviewedAt": "2026-07-22T00:58:11.123998+00:00",
    "aiReviewedAt": "2026-07-22T00:58:11.123998+00:00",
    "aiReviewVersion": 1
  },
  "copy_flower": {
    "id": "copy_flower",
    "name": "Copy Flower",
    "description": "The Copy Flower blooms with vibrant petals, each one a perfect replica of you. When it unfurls, it releases a cascade of clones that surge towards your foes in a chaotic wave. Each clone is indistinguishable from its original, making it impossible to target any one form effectively. This floral marvel is the creation of an ancient shaman who sought to protect her people by giving them the means to overwhelm their enemies with sheer numbers.",
    "category": "consumables",
    "price": 500,
    "icon": "🌸",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Dozen of Clones",
      "Massive Stampede"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Swift Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Dozen of Clones",
        "rules": "When activated, this flower summons a dozen exact copies of the user. These clones are indistinguishable and can be used to create a distraction or overwhelm opponents."
      },
      {
        "title": "Massive Stampede",
        "rules": "The clones then rush forward in a chaotic wave, dealing 5 damage per clone per round for 3 rounds. The swarm of clones vanishes after the attacks are completed."
      }
    ],
    "levelRequirementReason": "Requires proficiency with ranged weapons to effectively utilize the additional targets.",
    "vendorReason": "The local shaman, who created this flower, sells it as a means of defense for her village.",
    "shippingDetail": "Delivered within one week by reliable courier service.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "After 3 rounds or when the user takes a major action",
      "charges": "1 charge"
    },
    "priceReason": "Balanced to ensure it remains a valuable but not overpowered tool for combat.",
    "priceOriginal": 270000,
    "priceReviewedAt": "2026-07-22T00:58:00.793970+00:00",
    "aiReviewedAt": "2026-07-22T00:58:00.793970+00:00",
    "aiReviewVersion": 1
  },
  "cosmic_bargain_bin": {
    "id": "cosmic_bargain_bin",
    "name": "Cosmic Bargain Bin",
    "description": "The Cosmic Bargain Bin holds a menagerie of failed cosmic entities and defunct universes, each piece a testament to the universe's fragility. This bin is the work of Salvage, known for their scavenging of forgotten realities. Reach in, and you might pull out a fragmentary deity (CR 30) or a miniature pocket dimension (with 1d4 habitable planets), all 'as-is' with no warranty. A bargain for those who dare to dream beyond the stars.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗑️",
    "stock": 5,
    "rarity": "legendary",
    "effects": [
      "Reach In: Random Cosmic Fragment",
      "Pocket Dimension Miniaturizer"
    ],
    "vendor": "cosmic_surplus",
    "shippedBy": "Salvage",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reach In: Random Cosmic Fragment",
        "rules": "As a bonus action, reach into the bin. You pull out either a fragmentary deity (CR 30) that serves you until fixed or a mini-universe (pocket dimension with 1d4 planets). The item is 'as-is' and cannot be returned for any reason."
      },
      {
        "title": "Pocket Dimension Miniaturizer",
        "rules": "The bin contains a pocket dimension capable of housing up to four habitable planets. These dimensions are stable but not controllable by the owner until they invest time in cosmic engineering (DC 30)."
      }
    ],
    "levelRequirementReason": "Even the simplest cosmic entities can pose grave risks, requiring a minimum level to safely handle them.",
    "vendorReason": "Salvage specializes in salvaging and selling forgotten realities and cosmic curiosities.",
    "shippingDetail": "Ships via Salvage's interdimensional courier, delivery may vary.",
    "usage": {
      "activation": "Bonus action to reach into the bin.",
      "duration": "Instantaneous pull; fragmentary deity serves until fixed or destroyed. Pocket dimension is stable indefinitely but requires maintenance.",
      "endsWhen": "The cosmic fragment perishes or is destroyed by a successful DC 30 Con saving throw, or when the pocket dimension is breached beyond repair (DC 25).",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced as a rare find with significant cosmic risk and reward.",
    "priceOriginal": 15000000,
    "priceReviewedAt": "2026-07-22T00:58:27.688986+00:00",
    "aiReviewedAt": "2026-07-22T00:58:27.688986+00:00",
    "aiReviewVersion": 1
  },
  "cosmic_bargain_hunter_membership": {
    "id": "cosmic_bargain_hunter_membership",
    "name": "Cosmic Bargain Hunter Lifetime Membership",
    "description": "Never pay full price for anything, ever again.",
    "category": "services",
    "price": 25000000,
    "icon": "🏷️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "All purchases across all universes are 90% off",
      "Can haggle with gods and win",
      "Made by: The Haggler"
    ],
    "vendor": "discount_divinity",
    "shippedBy": "Sale Price",
    "levelRequirement": 30
  },
  "cosmic_chaos_monkey": {
    "id": "cosmic_chaos_monkey",
    "name": "Cosmic Chaos Monkey",
    "description": "The Cosmic Chaos Monkey is a mischievous pet that wreaks havoc on reality. It's a primate made of swirling cosmic particles, with eyes that glimmer like starlight and fur that shifts between colors. Every hour, it triggers a chaotic event based on the DM’s chaos table, which can warp time or space within a 30-foot radius. With a command word, you can direct its mischief to target specific objects or creatures, but the results are always unpredictable.",
    "price": 1000,
    "icon": "🐵",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Reality Warp",
      "Commanded Mischief"
    ],
    "vendor": "chaos_pets",
    "shippedBy": "Random Delivery Service",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Reality Warp",
        "rules": "Once per hour, the monkey triggers a chaotic event within a 30-foot radius. The DM rolls on the chaos table to determine the effect, which can include shifting time by an hour or creating a 10-foot-wide fissure in reality. This effect is instantaneous and lasts until resolved."
      },
      {
        "title": "Commanded Mischief",
        "rules": "As an action, you can command the monkey to target specific objects or creatures with its chaos. The DM decides the exact nature of the chaotic event, which must be within a 30-foot radius and has a DC of 18 for any saving throw."
      }
    ],
    "levelRequirementReason": "This pet requires significant control and understanding to manage its unpredictable nature.",
    "vendorReason": "Only the chaos pets vendor understands how to handle such volatile creatures responsibly.",
    "shippingDetail": "Due to the monkey’s unpredictability, it is delivered in a specially reinforced crate with strict instructions from the vendor.",
    "usage": {
      "activation": "As an action or reaction (DM's choice)",
      "duration": "Instantaneous",
      "endsWhen": "The effect resolves when the chaos ends naturally or when you dismiss it as an action",
      "charges": "Unlimited, but limited by the monkey’s patience"
    },
    "priceReason": "This price reflects the unique nature of the monkey and the risks involved in owning such a creature.",
    "priceOriginal": 55000000,
    "priceReviewedAt": "2026-07-22T00:58:17.352025+00:00",
    "aiReviewedAt": "2026-07-22T00:58:17.352025+00:00",
    "aiReviewVersion": 1
  },
  "cosmic_dragon_god_heart": {
    "id": "cosmic_dragon_god_heart",
    "name": "Cosmic Dragon-God Heart",
    "description": "The Cosmic Dragon-God Heart, forged in the fiery forge of the First Dragon, is a pulsating heart encased in scales of every dragon deity. It hums with the untamed power of ancient draconic might and can reform after a second. This divine relic grants its wielder the breath weapons of all dragons, each capable of unleashing 20d20 damage upon foes, and offers true immortality, allowing for rebirth even from the ashes of destruction.",
    "category": "consumables",
    "price": 1000,
    "icon": "❤️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "All Dragon Breath Weapons",
      "True Immortality"
    ],
    "vendor": "dragon_god_forge",
    "shippedBy": "Reality Tear Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Breath Weapons",
        "rules": "Activates on command as a bonus action. Each breath weapon deals 20d20 damage to all creatures in a 60-foot cone, and the wielder can choose one of the following: acid, cold, fire, lightning, poison, or thunder. The heart recharges after a long rest."
      },
      {
        "title": "True Immortality",
        "rules": "Instantaneous effect that grants the user true immortality; they reform into a new body after 1 second upon death. This effect is not subject to save checks and cannot be dispelled or negated by any means, including divine intervention."
      }
    ],
    "levelRequirementReason": "Even the most powerful magic requires a willing heart; this item demands no less than level 1.",
    "vendorReason": "The dragon-god forges are the only entities that can craft such an artifact, as they possess the essence of all deities.",
    "shippingDetail": "Ships via a reality tear express, arriving instantly at its destination within hours of purchase.",
    "usage": {
      "activation": "Commanded breath weapon: bonus action; True immortality: instantaneous effect upon death",
      "duration": "Instantaneous (breath weapons), or until expended (true immortality)",
      "endsWhen": "Breath weapons expend after a long rest, true immortality ends when the wielder dies and reforms.",
      "charges": "Unlimited (true immortality); 6 uses per long rest (breath weapon)"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its divine craftsmanship and the limited number of breath weapon uses.",
    "priceOriginal": 50000000,
    "priceReviewedAt": "2026-07-22T00:58:51.209993+00:00",
    "aiReviewedAt": "2026-07-22T00:58:51.209993+00:00",
    "aiReviewVersion": 1
  },
  "cosmic_jackpot_ticket": {
    "id": "cosmic_jackpot_ticket",
    "name": "Cosmic Jackpot Lottery Ticket",
    "description": "This shimmering ticket, embossed with cosmic symbols and a cryptic ‘COSMIC GAMBLING’ seal, is said to be crafted from stardust and woven with ancient lottery magic. Scratch its iridescent surface, and the universe itself seems to ripple in anticipation of your fate. The Lottery Commission guarantees one of two prizes: either an entire universe with its inhabitants who will revere you as a god, or 1 million gold coins. Beware, for winning a universe means taking responsibility for countless lives.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎫",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Universe Scratch",
      "Million Gold"
    ],
    "vendor": "cosmic_gambling",
    "shippedBy": "Winning Number Express Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Universe Scratch",
        "rules": "Scratch the ticket to claim your prize. This action is a bonus action that triggers an instantaneous effect. The winner gains either an entire universe (with inhabitants who will revere you) or 1 million gold coins, at the DM's discretion."
      },
      {
        "title": "Million Gold",
        "rules": "If not used within one week of purchase, the ticket forfeits its cosmic prize and instead grants 1 million gold coins. This effect is triggered by expiration."
      }
    ],
    "levelRequirementReason": "The lottery ticket requires no level for purchase but provides a significant reward.",
    "vendorReason": "Cosmic Gambling, the Lottery Commission's official vendor, offers this unique and risky chance to win an entire universe or a substantial amount of gold.",
    "shippingDetail": "The ticket is delivered with utmost secrecy by Winning Number Express Courier Service within one week.",
    "usage": {
      "activation": "Bonus action (scratch the ticket)",
      "duration": "Instantaneous effect upon activation",
      "endsWhen": "The ticket's cosmic prize expires after a week without use, or if scratched to claim the prize",
      "charges": "Unlimited uses"
    },
    "priceReason": "The ticket is priced at 1000 XP as it offers an extremely rare and potentially life-altering opportunity.",
    "priceOriginal": 15000000,
    "priceReviewedAt": "2026-07-22T00:59:09.352135+00:00",
    "aiReviewedAt": "2026-07-22T00:59:09.352135+00:00",
    "aiReviewVersion": 1
  },
  "cosmic_scribe_service": {
    "id": "cosmic_scribe_service",
    "name": "Cosmic Scribe Service",
    "description": "A Servant of the Cosmos records your deeds for historical documentation across the planes.",
    "price": 15000,
    "icon": "✍️",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Scribe documents your actions for posterity",
      "Records grant +2 to future Reputation checks with cosmic entities",
      "Made by: Servants Cosmic"
    ],
    "vendor": "cosmic_archives",
    "shippedBy": "Personal Note",
    "levelRequirement": 4
  },
  "courage_shell": {
    "id": "courage_shell",
    "name": "Courage Shell",
    "description": "The Courage Shell is a shimmering, egg-shaped confection made from the hardened essence of a brave warrior's heart. Consumed in one bite, it grants temporary fortitude and boldness to its eater. For three rounds, it bolsters your armor class by +2, making you harder to hit in the heat of battle. However, for the duration, you become too focused on pressing your advantage; you cannot Dash or Disengage actions, leaving yourself more vulnerable to flanking attacks.",
    "category": "consumables",
    "price": 1000,
    "icon": "💊",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Armor Class Boost",
      "Limited Mobility"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Bottle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Armor Class Boost",
        "rules": "When consumed as a bonus action, the Courage Shell grants +2 AC for 3 rounds. This effect ends immediately if you take any damage."
      },
      {
        "title": "Limited Mobility",
        "rules": "For the duration of the Armor Class boost, you are hindered from using Dash or Disengage actions. If you attempt to do so, you expend one use without gaining its benefit."
      }
    ],
    "levelRequirementReason": "This item provides a straightforward, immediate combat advantage suitable for low-level adventurers.",
    "vendorReason": "The Valley Trading Post caters to travelers and offers various items that aid in their journeys, including quick fixes like the Courage Shell.",
    "shippingDetail": "Shipped within a sealed bottle to preserve its potency until consumption.",
    "usage": {
      "activation": "Bonus action",
      "duration": "3 rounds",
      "endsWhen": "You take damage or attempt to Dash/Disengage actions",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a common consumable, this item provides a short-term combat advantage at an affordable price.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T00:59:04.837323+00:00",
    "aiReviewedAt": "2026-07-22T00:59:04.837323+00:00",
    "aiReviewVersion": 1
  },
  "courier_express": {
    "id": "courier_express",
    "name": "Courier Express (Cross-Continent)",
    "description": "The Courier Express (Cross-Continent) guarantees swift and secure delivery of your most precious cargo across treacherous lands in just three days, a feat made possible by the guild's elite couriers and their legendary tabards that command safe passage through even the most hostile territories. For an additional fee, they can negotiate for fragile or dangerous goods, ensuring they reach their destination intact. Trust this service to traverse perilous terrain with unparalleled speed and security.",
    "category": "services",
    "price": 1000,
    "icon": "📬",
    "stock": 40,
    "rarity": "uncommon",
    "effects": [
      "Guaranteed Delivery in Three Days",
      "Safe Passage Through Hostile Lands"
    ],
    "vendor": "merchant_guild",
    "shippedBy": "Swiftwind Express Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Guaranteed Delivery in Three Days",
        "rules": "This service ensures that a package up to 100 miles can be delivered within three days, with no exceptions. The courier will arrive at the destination precisely after this time frame."
      },
      {
        "title": "Safe Passage Through Hostile Lands",
        "rules": "The guild's couriers are protected by their distinctive tabards, which grant safe passage through most lands. This protection extends to all packages delivered via this service."
      }
    ],
    "levelRequirementReason": "This service is accessible to adventurers of any level who can afford the premium rates.",
    "vendorReason": "The Merchant Guild provides this service due to its reputation for reliability and safety, ensuring that even the most valuable cargoes arrive intact.",
    "shippingDetail": "Deliveries are handled by Swiftwind Express, known for their swift and reliable couriers. No delays or detours are permitted unless specified in exceptional circumstances.",
    "usage": {
      "activation": "Activate upon payment at any Merchant Guild outpost.",
      "duration": "Instantaneous",
      "endsWhen": "The delivery is completed or interrupted by the player's decision to halt it.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This service is priced at 1000 XP, reflecting its speed and safety guarantees.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T00:59:44.820871+00:00",
    "aiReviewedAt": "2026-07-22T00:59:44.820871+00:00",
    "aiReviewVersion": 1
  },
  "cracked_star_coin": {
    "id": "cracked_star_coin",
    "name": "Cracked Star Coin",
    "description": "The Cracked Star Coin gleams faintly under starlight, its surface a patchwork of ancient fissures and celestial patterns. This relic is said to have been crafted from meteoric iron by an old star-faring civilization. When activated, it teleports the bearer to the nearest safe, starlit location within 30 feet. Using it under true night skies grants +1 Inspiration for the day, but with each use, its fragile crack widens until it shatters entirely.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪙",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Starlit Teleport",
      "Inspiration Boost"
    ],
    "vendor": "Starflea",
    "shippedBy": "Velvet Pouch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Starlit Teleport",
        "rules": "When activated as a bonus action, the coin teleports the user to the nearest safe location with starlight within 30 feet. The duration is instantaneous and it has no save or range requirement. The coin can be used once per day."
      },
      {
        "title": "Inspiration Boost",
        "rules": "If activated under true night skies, the coin grants +1 Inspiration to the user for the day. This effect has a 24-hour duration and may be used once per day when conditions are favorable."
      }
    ],
    "levelRequirementReason": "The coin's magical properties are subtle but effective, making it accessible to lower-level adventurers.",
    "vendorReason": "Starflea specializes in ancient and exotic relics, including this star-faring artifact.",
    "shippingDetail": "The coin is carefully packed with a velvet pouch to protect it during shipment.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous for teleport; 24 hours for Inspiration boost",
      "endsWhen": "Coin shatters after one use under starlit skies or if the user teleports using the coin",
      "charges": "1 charge, recharges daily"
    },
    "priceReason": "The coin's rarity and unique properties justify this price point.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T00:59:46.476841+00:00",
    "aiReviewedAt": "2026-07-22T00:59:46.476841+00:00",
    "aiReviewVersion": 1
  },
  "crash_bandicoot_aku": {
    "id": "crash_bandicoot_aku",
    "name": "Aku Aku Mask",
    "description": "The Aku Aku Mask is a heavy, skull-like visage forged by ancient shamans for warriors who face death in battle. Its eyes glow faintly, and it whispers cryptic advice that can turn the tide of combat. Worn beneath one's helmet or as a standalone piece, this mask protects its wearer from a single fatal strike, absorbing the blow into its core. The mask floats just above the head, offering both protection and counsel in times of peril.",
    "category": "equipment",
    "price": 1000,
    "icon": "😷",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs a Death Blow",
      "Floating Companion"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Mask Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Absorbs a Death Blow",
        "rules": "When you take damage from an attack that would reduce you to 0 hit points, the Aku Aku Mask absorbs this damage into its core. You are not reduced to 0 hit points and instead fall unconscious. The mask recharges one of its uses after a short rest."
      },
      {
        "title": "Floating Companion",
        "rules": "The mask hovers just above your head, providing you with advice once per day as an action. This advice grants advantage on one ability check or saving throw until the end of your next turn. The mask can only provide advice in a language you know."
      }
    ],
    "levelRequirementReason": "The mask's protection is accessible to all, but its wisdom requires some understanding and connection with ancient lore.",
    "vendorReason": "Shamans of the region are known for their knowledge of ancient artifacts and spirits that can guide warriors into battle.",
    "shippingDetail": "The mask is shipped in a sturdy wooden crate lined with soft padding to ensure it arrives in perfect condition.",
    "usage": {
      "activation": "Passive protection; active advice given as an action.",
      "duration": "Instantaneous for the death blow absorption, one day duration for advice.",
      "endsWhen": "The mask is destroyed or its charges are exhausted.",
      "charges": "3 uses, recharging 1 use after a short rest"
    },
    "priceReason": "The mask's rarity and the unique protection it offers justify its price in experience points.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T01:00:05.736693+00:00",
    "aiReviewedAt": "2026-07-22T01:00:05.736693+00:00",
    "aiReviewVersion": 1
  },
  "cricket_jam": {
    "id": "cricket_jam",
    "name": "Cricket Jam",
    "description": "Cricket Jam is a peculiar jar filled to the brim with an unsettlingly real imitation of crickets chirping. Each time you open this jar, a cacophony of high-pitched sounds erupts, drowning out any nearby conversation within a 15-foot radius for up to one minute. It's perfect for distracting guards or causing chaos in crowded markets. The jam itself is thick and dark, with the unmistakable texture of crickets rather than fruit, making it an eerie yet effective tool.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🦗",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Loud chirping distraction",
      "Effective guard distraction"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Noisy Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Loud Chirping Distraction",
        "rules": "When opened, Cricket Jam produces a piercing sound within a 15-foot radius for one minute. Any creature not immune to noise must succeed on a DC 12 Wisdom saving throw or be distracted for the duration of the sound."
      },
      {
        "title": "Effective Guard Distraction",
        "rules": "For every three successful uses, you can attempt to distract a guard within sight with this jam. The guard must make a DC 14 Wisdom saving throw or become distracted until their next action."
      }
    ],
    "levelRequirementReason": "This item requires only basic concentration and is suitable for beginners.",
    "vendorReason": "The Rogue Port Black Market specializes in unique and unusual items, making Cricket Jam a perfect fit.",
    "shippingDetail": "Due to the noise it produces during shipment, Cricket Jam is packed with sound-dampening materials. Delivery can take up to one extra day beyond standard shipping times.",
    "usage": {
      "activation": "Standard action",
      "duration": "One minute or until used up",
      "endsWhen": "The jam runs out or the sound fades naturally",
      "charges": "Unlimited uses"
    },
    "priceReason": "While unusual, Cricket Jam is still a consumable item that can be reused multiple times.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T01:00:18.057676+00:00",
    "aiReviewedAt": "2026-07-22T01:00:18.057676+00:00",
    "aiReviewVersion": 1
  },
  "crimision_isle_crimson_tattoo_premium": {
    "id": "crimision_isle_crimson_tattoo_premium",
    "name": "Crimision Isle Crimson Tattoo (Premium)",
    "description": "A glowing tattoo for minor fire resistance.",
    "price": 20000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Resistance to fire damage once per day (absorb 1d10)",
      "Tattoo glows in dark: 10ft dim light",
      "Itches during full moons (disadvantage on Concentration)",
      "Made by: Isle Shamans"
    ],
    "vendor": "crimision_isle_tattoo_parlor",
    "shippedBy": "Inked Scroll",
    "levelRequirement": 6
  },
  "crimision_isle_crimson_wrap": {
    "id": "crimision_isle_crimson_wrap",
    "name": "Crimision Isle Crimson Wrap",
    "description": "The Crimision Isle Crimson Wrap is a blood-red shawl that hums with the essence of tropical island spirits. Woven from the fibers of ancient palm leaves and enchanted by the shamans of Crimision Isle, this wrap not only absorbs slashing damage but also grants you an edge in intimidating foes within its native lands. The shawl permanently tints any clothing it touches a deep crimson, a stain that never fades.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧣",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Slashing Absorption",
      "Tropical Intimidation"
    ],
    "vendor": "crimision_isle_temple",
    "shippedBy": "Coral Tie",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slashing Absorption",
        "rules": "As an action, you can absorb up to 1d6 slashing damage. This effect has no save DC and can be used once per day."
      },
      {
        "title": "Tropical Intimidation",
        "rules": "You gain advantage on Charisma (Intimidation) checks made in tropical environments. This ability is always active while you wear the wrap."
      }
    ],
    "levelRequirementReason": "The shawl's enchantment is simple enough for even novice adventurers to wield effectively.",
    "vendorReason": "The temple crafts this wrap as a symbol of their connection with the island spirits and its unique properties.",
    "shippingDetail": "Ships via Coral Tie's swift boats, delivered within three days from Crimision Isle.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect is used or until the shawl is removed",
      "charges": "1 per day"
    },
    "priceReason": "Balanced at 1,000 XP, this price reflects a simple enchantment suitable for novice adventurers.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T00:59:58.778558+00:00",
    "aiReviewedAt": "2026-07-22T00:59:58.778558+00:00",
    "aiReviewVersion": 1
  },
  "crimision_isle_pearl": {
    "id": "crimision_isle_pearl",
    "name": "Crimision Isle Siren Pearl",
    "description": "The Crimision Isle Siren Pearl glows a deep, iridescent crimson, its surface shimmering like breaking waves and humming with ancient ocean magic. Crafted by the enigmatic sirens of Crimision Isle, this pearl grants you and three companions the ability to breathe underwater for an hour at will, while also granting resistance against thunder damage. The sirens' essence courses through it, lending it a unique power that can only be wielded by the brave and the true-hearted.",
    "price": 1000,
    "icon": "⚪",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Water Breathing",
      "Resistance to Thunder Damage"
    ],
    "vendor": "crimision_dock",
    "shippedBy": "Water-filled Box",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Water Breathing",
        "rules": "The user and up to three others can breathe underwater for a duration of one hour. This effect is usable once per day."
      },
      {
        "title": "Resistance to Thunder Damage",
        "rules": "The bearer gains resistance to thunder damage until the start of their next turn. No saves are required, and this effect stacks with other forms of resistance."
      }
    ],
    "levelRequirementReason": "Crafted by the sirens for those who venture into their treacherous waters, the Crimision Isle Siren Pearl requires a level 7 character to wield its power.",
    "vendorReason": "As stewards of the island's secrets and treasures, the Crimision Dock can offer this rare and powerful artifact only to those who have proven their worth by visiting the perilous shores of Crimision Isle.",
    "shippingDetail": "The pearl is packed in a specially designed water-filled box that ensures it arrives safely, though the delivery may take an extra day due to the fragile nature of its contents.",
    "usage": {
      "activation": "Action or bonus action to activate; usable once per day.",
      "duration": "One hour when activated.",
      "endsWhen": "The effect ends at the start of your next turn if not reactivated within one hour.",
      "charges": "Uses up one charge, recharging after a long rest."
    },
    "priceReason": "Considering its epic rarity and unique properties, this pearl is priced fairly to reflect both its value and the difficulty in acquiring it.",
    "priceOriginal": 29000,
    "priceReviewedAt": "2026-07-22T01:00:53.830178+00:00",
    "aiReviewedAt": "2026-07-22T01:00:53.830178+00:00",
    "aiReviewVersion": 1
  },
  "crimision_isle_pearl_diving_kit": {
    "id": "crimision_isle_pearl_diving_kit",
    "name": "Crimision Isle Pearl Diving Kit",
    "description": "The Crimision Isle Pearl Diving Kit is a compact, meticulously crafted ensemble of gear designed to navigate the treacherous depths of the ocean. Its gleaming brass and glass components are forged from the volcanic sands of the island itself, imbuing it with a fiery resilience that withstands even the deepest pressures. The kit includes a reinforced diving helmet adorned with red accents, a state-of-the-art air supply reservoir capable of sustaining a diver for an hour underwater, and a set of precision tools for harvesting pearls without damaging the reef ecosystems.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐚",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Diving Capabilities",
      "Sustained Breath"
    ],
    "vendor": "crimision_dock",
    "shippedBy": "Deepsea Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Diving Capabilities",
        "rules": "When worn with the Crimision Isle Pearl Diving Kit, you gain a +1 bonus to Wisdom (Perception) checks made to notice underwater details and a +2 bonus on Athletics checks for swimming. The helmet also provides resistance to non-magical piercing damage."
      },
      {
        "title": "Sustained Breath",
        "rules": "For 1 hour, you can breathe underwater as if submerged in shallow water. This effect does not grant the ability to hold your breath longer but allows you to stay under without using up air supply."
      }
    ],
    "levelRequirementReason": "Beginners and adventurers of all levels find value in this kit, making it accessible for those just starting their exploration.",
    "vendorReason": "Crimision Dock is renowned for its expertise in oceanic adventures and gear, making the Pearl Diving Kit a staple among their inventory.",
    "shippingDetail": "The kit is delivered via Deepsea Express Courier, ensuring safe and timely arrival even to the most remote shores of Crimision Isle.",
    "usage": {
      "activation": "Wear the helmet and activate the air supply reservoir before submerging.",
      "duration": "1 hour from activation",
      "endsWhen": "The air supply is depleted or you remove the helmet.",
      "charges": "Unlimited, as long as the air supply holds."
    },
    "priceReason": "While not a high-end item, its unique craftsmanship and specialized features make it moderately priced for adventurers seeking to explore the ocean depths safely.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T01:00:34.900159+00:00",
    "aiReviewedAt": "2026-07-22T01:00:34.900159+00:00",
    "aiReviewVersion": 1
  },
  "crimision_isle_pirate_bandana": {
    "id": "crimision_isle_pirate_bandana",
    "name": "Crimision Isle Pirate Bandana",
    "description": "The Crimision Isle Pirate Bandana, woven from the fibers of seaweed and dyed deep crimson, is a relic of the seas. It smells of salt and rum, evoking tales of distant ports and daring deeds. Wearers gain advantage on Charisma checks with pirates and sailors but incur disadvantage when dealing with landlubbers, who are often baffled by its presence. Rum cravings are no match for this bandana; it quells the thirst, though you must still imbibe to fully satisfy.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏴‍☠️",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Charisma Checks",
      "Disadvantage on Checks with Landlubbers"
    ],
    "vendor": "crimision_isle",
    "shippedBy": "Pirate Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Charisma Checks",
        "rules": "When interacting with pirates or sailors, you gain advantage on Charisma checks. This effect lasts until the start of your next turn."
      },
      {
        "title": "Disadvantage on Checks with Landlubbers",
        "rules": "You incur disadvantage on Charisma checks when dealing with landlubbers who are unfamiliar with maritime life. The effect ends if you move at least 30 feet away from them."
      }
    ],
    "levelRequirementReason": "This bandana is suitable for beginners to gain confidence in pirate territories.",
    "vendorReason": "Crimision Isle Tailors are renowned for crafting items that blend functionality with nautical tradition.",
    "shippingDetail": "Delivered by swift and loyal pirates, guaranteed to arrive within a week of purchase.",
    "usage": {
      "activation": "Passive effect upon donning the bandana.",
      "duration": "Until the start of your next turn after interacting with pirates or sailors.",
      "endsWhen": "You move at least 30 feet away from landlubbers during a Charisma check.",
      "charges": "Unlimited, as it is an inherent property of the item."
    },
    "priceReason": "The bandana's uncommon rarity and utility justify its price, providing a significant advantage in pirate environments without being overpowered.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T01:00:43.790477+00:00",
    "aiReviewedAt": "2026-07-22T01:00:43.790477+00:00",
    "aiReviewVersion": 1
  },
  "crimision_isle_recipe_rum_cake": {
    "id": "crimision_isle_recipe_rum_cake",
    "name": "Recipe: Crimision Isle Rum Cake",
    "description": "This recipe yields a rum cake that is more than just sweet; it's an elixir of the deep. When consumed, it grants you +2 Charisma for the next hour, making your voice resonate like the sea itself. However, your coordination takes a hit: you'll move and react with disadvantage on Dexterity checks. This cake is a testament to Crimision Isle's legendary bakers who perfected the art of blending rum and pastry into an unparalleled treat.",
    "price": 1000,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Charisma Boost",
      "Coordination Hinder"
    ],
    "vendor": "crimision_isle",
    "shippedBy": "Pirate Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "Consume this cake to gain +2 Charisma for 1 hour. You can only use this effect once per short or long rest."
      },
      {
        "title": "Coordination Hinder",
        "rules": "For the same duration, you have disadvantage on Dexterity checks and saving throws. This effect is limited to one use per day."
      }
    ],
    "levelRequirementReason": "This simple yet potent recipe requires no specific level for consumption.",
    "vendorReason": "Crimision Isle's bakers are renowned for their ability to craft magical and mundane delights that embody the island's spirit.",
    "shippingDetail": "Delivered by a trusted pirate courier, ensuring the cake arrives fresh and intact from Crimision Isle.",
    "usage": {
      "activation": "Eating the cake",
      "duration": "1 hour",
      "endsWhen": "Ends when the duration expires or you finish your next short rest or long rest",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The refined craftsmanship and ingredients from Crimision Isle justify this balanced price.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T01:00:47.588359+00:00",
    "aiReviewedAt": "2026-07-22T01:00:47.588359+00:00",
    "aiReviewVersion": 1
  },
  "crimision_isle_rum_barrel_ager": {
    "id": "crimision_isle_rum_barrel_ager",
    "name": "Crimision Isle Rum Barrel Ager",
    "description": "This sturdy oak barrel, aged from Crimision Isle Distillers, holds any liquid and slowly transforms it over time. Each day, the contents mature into a richer, more potent nectar, increasing in alcohol content by 1% and enhancing its flavor profile. The barrel itself is an olfactory delight, releasing a heady aroma that makes you feel like a seasoned pirate. However, if left unattended for too long, it becomes restless, emitting a lonely creaking sound each night and causing you to suffer disadvantage on social interactions with officials.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛢️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Alcohol Infusion",
      "Restless Aroma"
    ],
    "vendor": "crimision_isle",
    "shippedBy": "Pirate Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Alcohol Infusion",
        "rules": "Activates daily as a bonus action. The liquid inside the barrel ages by one year, increasing its alcohol content by 1% and improving its flavor. This effect has no save DC but is limited to once per day."
      },
      {
        "title": "Restless Aroma",
        "rules": "The barrel emits a creaking sound each night after three days of inactivity, causing the imbiber to suffer disadvantage on all social interactions with officials until it is used. This effect ends when the barrel is used again or destroyed."
      }
    ],
    "levelRequirementReason": "Anyone can use this item for its simple activation and daily benefit.",
    "vendorReason": "Crimision Isle Distillers are renowned for their unique aging techniques and this product is a testament to their expertise.",
    "shippingDetail": "Delivered by trusted pirates, ensuring the barrel arrives in perfect condition.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect each day",
      "endsWhen": "Destroyed or used again after three days of inactivity",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The item's rarity and daily benefit justify its price, providing a consistent and valuable enhancement.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T01:00:59.102191+00:00",
    "aiReviewedAt": "2026-07-22T01:00:59.102191+00:00",
    "aiReviewVersion": 1
  },
  "crimision_isle_spice_mortar": {
    "id": "crimision_isle_spice_mortar",
    "name": "Crimision Isle Spice Mortar",
    "description": "The Crimision Isle Spice Mortar is a sturdy stone mortar forged by the Isle Stonecarvers, hewn from the volcanic rock of Crimision Isle itself. Its pestle glows faintly with an inner heat as it grinds fiery spices into a fine powder. This ancient tool not only enhances the potency of any fire-based cooking by +1 duration but also grants advantage on all checks to resist or overcome heat-related effects.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌶️",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Grindfire Advantage",
      "Heat Resistance"
    ],
    "vendor": "crimision_isle_port",
    "shippedBy": "Crimson Crush Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grindfire Advantage",
        "rules": "When using this mortar for fire-based cooking, the user gains advantage on checks to resist or overcome heat-related effects. This effect lasts until the end of your next turn."
      },
      {
        "title": "Heat Resistance",
        "rules": "This mortar can be used up to twice before its internal heat becomes too intense and requires a short rest to cool down fully, restoring it to normal function."
      }
    ],
    "levelRequirementReason": "Novice cooks and travelers benefit from this tool's unique properties without requiring advanced skills.",
    "vendorReason": "Crimision Isle Port is the primary trading hub for volcanic goods, including this island-forged mortar.",
    "shippingDetail": "Delivered by the Crimson Crush Crate, known for its timely and secure deliveries from Crimision Isle.",
    "usage": {
      "activation": "Bonus action to grind spices or use as a heat-resistant tool.",
      "duration": "Instantaneous effect; lasts until the end of your next turn after activation.",
      "endsWhen": "After using it up to twice without a short rest, its internal heat becomes too intense.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "Balanced as the item's unique properties and rarity justify this fair value in XP.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T01:01:39.565093+00:00",
    "aiReviewedAt": "2026-07-22T01:01:39.565093+00:00",
    "aiReviewVersion": 1
  },
  "crimision_isle_spicy_fish_stew_recipe": {
    "id": "crimision_isle_spicy_fish_stew_recipe",
    "name": "Recipe: Crimision Isle Spicy Fish Stew",
    "description": "A treasured recipe from the fiery crimson waters of Crimision Isle, this spicy fish stew is a bold adventurer's treat. Its secret lies in the unique spices harvested from the island’s volcanic shores, which not only add flavor but also imbue the eater with fire resistance and improved combat prowess. This dish is more than just sustenance; it attracts the attention of sea spirits, offering minor luck to those who partake.",
    "price": 1000,
    "icon": "🍲",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Fire Resistance",
      "Combat Edge"
    ],
    "vendor": "crimision_isle_port",
    "shippedBy": "Scaly Stew Sheet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "When you consume this stew, you gain fire resistance until the end of your next short or long rest. This effect does not stack with other sources of fire resistance."
      },
      {
        "title": "Combat Edge",
        "rules": "For 1 hour after consuming this stew, you have advantage on attack rolls made against creatures that are not immune to fire damage. This benefit ends if you take any fire damage."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for even the newest adventurers to prepare.",
    "vendorReason": "The Isle Fisherfolk are known for their culinary expertise and the unique ingredients they gather from Crimision Isle’s waters.",
    "shippingDetail": "The Scaly Stew Sheets deliver their packages swiftly but carefully, ensuring that the stew arrives hot and ready to be consumed.",
    "usage": {
      "activation": "Eating the stew",
      "duration": "Until the end of your next short or long rest for Fire Resistance; until you take fire damage for Combat Edge",
      "endsWhen": "The effects expire naturally upon completion of their duration or if you take fire damage.",
      "charges": "Unlimited, as it is a one-time effect each time you consume the stew."
    },
    "priceReason": "This recipe is moderately priced for its unique flavor and the special effects it provides to adventurers.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T01:01:08.249246+00:00",
    "aiReviewedAt": "2026-07-22T01:01:08.249246+00:00",
    "aiReviewVersion": 1
  },
  "crimson_fleet_cutlass": {
    "id": "crimson_fleet_cutlass",
    "name": "Crimson Fleet Cutlass",
    "description": "The Crimson Fleet Cutlass hums with a life of its own, its blade a deep crimson that seems to pulse with the heart of a pirate's treasure-laden ship. Crafted from meteoric iron and enchanted by ancient space sorcery, this cutlass thirsts for plunder and rewards its wielder with gold and fear. The ship's spirit within it whispers secrets of lost worlds when you brandish it in combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗡️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+1 to attack rolls",
      "Critical hit: Target drops 1d4 x 10 gp (or equivalent value trinkets)"
    ],
    "vendor": "crimson_fleet",
    "shippedBy": "Smuggler's Run",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Treasure Thirst",
        "rules": "When you make a successful critical hit with the Crimson Fleet Cutlass, the target must drop 1d4 × 10 gold pieces or its equivalent in valuable trinkets. If the target is an object, it breaks into two pieces of equal value."
      },
      {
        "title": "Spirit's Intimidation",
        "rules": "You have advantage on Intimidation checks when brandishing the cutlass in combat. The ship spirit within the blade enhances your presence and deters foes with its spectral aura."
      }
    ],
    "levelRequirementReason": "The Crimson Fleet Cutlass is a rare find, but even novices can wield it to great effect.",
    "vendorReason": "Crimson Fleet pirates are known for their eclectic and powerful gear, always seeking the next best tool for their ventures into space.",
    "shippingDetail": "Delivered by a fleet of swift courier ships, ensuring the cutlass arrives in pristine condition.",
    "usage": {
      "activation": "Draw and attack as a bonus action.",
      "duration": "Instantaneous effect on critical hit.",
      "endsWhen": "Exhausts after 1 use per long rest.",
      "charges": "Recharges at dawn."
    },
    "priceReason": "Balanced as a rare item, the Crimson Fleet Cutlass offers unique treasure and fear effects that make it worth its price in XP.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-22T01:01:23.810152+00:00",
    "aiReviewedAt": "2026-07-22T01:01:23.810152+00:00",
    "aiReviewVersion": 1
  },
  "crimson_fleet_letter_of_marque": {
    "id": "crimson_fleet_letter_of_marque",
    "name": "Crimson Fleet Letter of Marque",
    "description": "The Crimson Fleet Letter of Marque is a tattered parchment that grants you legal authorization to seize enemy ships in the name of the Crimson Fleet. Crafted from the blood-drenched pages of ancient treaties, this document entitles its bearer to safe passage through Crimson Fleet-controlled waters and access to their vast naval resources. It also serves as a requisition slip for turning in captured goods, earning valuable fleet reputation points that can be exchanged for supplies or favors.",
    "category": "faction",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Legal Protection",
      "Access to Resources"
    ],
    "vendor": "Crimson Fleet",
    "shippedBy": "Captains Envoy",
    "levelRequirement": 6,
    "factionBonus": {
      "economy": 25,
      "combatReadiness": 25
    },
    "effectDetails": [
      {
        "title": "Legal Protection",
        "rules": "This effect provides you with immunity from legal action by the Crimson Fleet while attacking enemy ships. It lasts until the end of your next turn after use, and can only be used once per long rest."
      },
      {
        "title": "Access to Resources",
        "rules": "Upon activation, this document grants temporary access to Crimson Fleet ports and supplies for a duration of 1 hour per level of the user. This effect ends when you spend your next short or long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for experienced adventurers who can handle the responsibilities of managing captured goods and navigating fleet resources.",
    "vendorReason": "As a direct representative of the Crimson Fleet, they issue these letters to trusted allies and associates.",
    "shippingDetail": "The document is delivered by a trusted envoy who ensures its authenticity and that it reaches you in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, with an effect lasting until the end of your next turn after use for Legal Protection; 1 hour per level for Access to Resources",
      "endsWhen": "The effect ends when its duration expires or you complete a short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This item is priced based on the value of fleet resources and legal immunity, offering significant utility for seasoned adventurers.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-22T01:01:12.874546+00:00",
    "aiReviewedAt": "2026-07-22T01:01:12.874546+00:00",
    "aiReviewVersion": 1
  },
  "crimson_fleet_pirate_coat": {
    "id": "crimson_fleet_pirate_coat",
    "name": "Crimson Fleet Pirate Coat",
    "description": "The Crimson Fleet Pirate Coat is a swashbuckling garment adorned in vivid scarlet, its hemline billowing dramatically as you move. Hidden pockets within the coat's lining can stow up to two small weapons or treasures, and it grants +1 Dexterity modifier on Sleight of Hand checks aboard ships. This coat, crafted by Fleet Tailors, is a symbol of audacity and cunning, perfect for those who navigate treacherous waters with as much grace as they do with skill.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Hidden Stowage",
      "Sleight of Hand on Ships"
    ],
    "vendor": "crimson_fleet_ship",
    "shippedBy": "Sailcloth Bundle",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Hidden Stowage",
        "rules": "The coat's hidden pockets can store up to two small weapons or treasures, granting you a +1 bonus to Dexterity (Sleight of Hand) checks made aboard ships. This effect lasts for the duration of your encounter."
      },
      {
        "title": "Sleight of Hand on Ships",
        "rules": "While wearing this coat, you gain advantage on Dexterity (Sleight of Hand) checks made while aboard a ship or vessel. This benefit persists until you make another such check during the same day."
      }
    ],
    "levelRequirementReason": "The Crimson Fleet Pirate Coat requires at least level 7 to ensure its wearer can effectively utilize its stowage and Sleight of Hand benefits on ships.",
    "vendorReason": "Crimson Fleet Ship, known for its crew's expertise in maritime endeavors, naturally sells this emblematic coat crafted by Fleet Tailors.",
    "shippingDetail": "The coat is carefully packed within a durable Sailcloth Bundle to ensure it arrives in pristine condition, enhancing the experience of the wearer upon arrival.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Encounter duration",
      "endsWhen": "At the start of your next short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the coat's rarity, craftsmanship, and utility without granting excessive power.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-22T01:01:52.460083+00:00",
    "aiReviewedAt": "2026-07-22T01:01:52.460083+00:00",
    "aiReviewVersion": 1
  },
  "crimson_fleet_pirate_flag_premium": {
    "id": "crimson_fleet_pirate_flag_premium",
    "name": "Crimson Fleet Pirate Flag (Premium)",
    "description": "The Crimson Fleet Pirate Flag (Premium) is a blood-red flag adorned with golden anchors, woven from silk and cursed by a pirate captain's wrath. Unfurled on the deck of your vessel, it intimidates foes within sight, compelling them to flee or be shaken in fear. The ship's crew gains +1 to attack rolls for one hour while the flag waves, making it an essential tool for both intimidation and combat.",
    "price": 1000,
    "icon": "🏴‍☠️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Intimidating Presence",
      "Frightened Targets"
    ],
    "vendor": "crimson_fleet_dock",
    "shippedBy": "Jolly Roger Roll",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Intimidating Presence",
        "rules": "When the flag is unfurled, all creatures within 30 feet of it must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute. A frightened creature has disadvantage on ability checks and attack rolls while in the presence of the flag."
      },
      {
        "title": "Increased Combat Effectiveness",
        "rules": "Allied characters within 30 feet gain +2 to their attack rolls against creatures that failed the Wisdom saving throw or are already frightened. This effect lasts for one hour as long as the flag remains unfurled and is not destroyed."
      }
    ],
    "levelRequirementReason": "The premium quality of the flag requires a proficient character to wield its full power.",
    "vendorReason": "As the flagship supplier for Crimson Fleet, Crimson Fleet Dock ensures only the finest materials are used in their products.",
    "shippingDetail": "The flag is delivered by Jolly Roger Roll with a delivery delay of one hour to allow time for proper unfurling and setting up on your ship's deck.",
    "usage": {
      "activation": "Unfurl the flag as an action, or as part of the setup process when arriving at a new location.",
      "duration": "One hour while the flag remains unfurled.",
      "endsWhen": "The flag is destroyed or torn down. The effect ends for all creatures within 30 feet upon destruction.",
      "charges": "Unlimited uses; the flag can be unfurled and used multiple times."
    },
    "priceReason": "The premium quality of materials, combined with the unique crafting process by Fleet Tailors, justifies this balanced price in XP.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-22T01:01:42.806943+00:00",
    "aiReviewedAt": "2026-07-22T01:01:42.806943+00:00",
    "aiReviewVersion": 1
  },
  "crimson_fleet_pirate_rum_still": {
    "id": "crimson_fleet_pirate_rum_still",
    "name": "Crimson Fleet Pirate Rum Still",
    "description": "This compact still is a testament to the Crimson Fleet's prowess in rum-making. Crafted from sturdy oak and lined with copper, it distills rum into potent cakes in mere minutes. Its iconic design features a spire that doubles as a pouring spout, making it a veritable work of art aboard any ship. The still's unique mechanism ensures no wasted rum when tilted, though a careless hand might spill the precious cargo.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍰",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Boozed-up Brews",
      "Portable Distiller"
    ],
    "vendor": "crimson_fleet_galley",
    "shippedBy": "Rum Run Rig",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boozed-up Brews",
        "rules": "As an action, activate this still to distill rum into cakes. The target receives a +1 bonus to Charisma (Performance) checks for the next hour."
      },
      {
        "title": "Portable Distiller",
        "rules": "This still can be disassembled and reassembled in 5 minutes, allowing it to be easily transported aboard ships or on land. It provides a +2 bonus to Dexterity Saving Throws related to balancing or stability."
      }
    ],
    "levelRequirementReason": "A basic understanding of the still's operation is required for its effective use.",
    "vendorReason": "The Crimson Fleet Distillers are known for their expertise in rum-making and this still is a symbol of their craftsmanship.",
    "shippingDetail": "Delivered within the week, with a special delivery for high-value items.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour (until next long rest)",
      "endsWhen": "The effect ends at the start of your next turn if you do not have rum on hand to distill. Recharges after a short or long rest.",
      "charges": "Unlimited, but requires regular maintenance checks"
    },
    "priceReason": "Balanced against other rare equipment, this still provides significant utility without being overpowered.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T01:01:44.370867+00:00",
    "aiReviewedAt": "2026-07-22T01:01:44.370867+00:00",
    "aiReviewVersion": 1
  },
  "crimson_fleet_pirate_ship_timeshare": {
    "id": "crimson_fleet_pirate_ship_timeshare",
    "name": "Crimson Fleet Pirate Ship Timeshare",
    "description": "The Crimson Fleet Pirate Ship Timeshare offers a week-long adventure aboard one of their illustrious vessels, where you can captain your own ship and crew in the heat of battle or sail under the stars with the wind at your back. Your time is shared with fifty-one other owners, each vying for the helm, but the camaraderie and pirate lore ensure your stay is memorable. Upon completion of your adventure, you receive a 'Pirate Timeshare Owner' hat as a token of your valor—though it’s purely cosmetic, its presence will spark many stories.",
    "category": "premium",
    "price": 1000,
    "icon": "⛵",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Captain a Pirate Ship for 7 Days",
      "Shared Ownership and Scheduling Conflicts"
    ],
    "vendor": "crimson_fleet",
    "shippedBy": "Pirate Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Captain a Pirate Ship for 7 Days",
        "rules": "Activate once per week. You control the vessel, crew, and navigate through dangerous waters or peaceful seas, all while earning your share of loot. The ship is equipped with a full complement of pirates and supplies. Scheduling conflicts arise if another owner attempts to use the ship during your period. Save DC 13."
      },
      {
        "title": "Shared Ownership and Scheduling Conflicts",
        "rules": "You are one of fifty-one pirate owners who share in the adventures of the Crimson Fleet. If multiple timeshare holders activate their ships simultaneously, a conflict arises, with pirates from all vessels vying for control. This can result in a chaotic situation where only one ship can proceed at a time until the conflicts are resolved."
      }
    ],
    "levelRequirementReason": "This adventure is suitable for beginners but requires some basic sailing skills.",
    "vendorReason": "Crimson Fleet Realty specializes in unique real estate, including nautical timeshares that cater to the thrill-seeking adventurer.",
    "shippingDetail": "The ship is delivered via a fleet of swift pirate couriers who ensure your adventure begins on time and with a full crew.",
    "usage": {
      "activation": "On-demand activation, once per week.",
      "duration": "7 days in total during the week you activate it.",
      "endsWhen": "At the end of the 7-day period or when another owner activates their timeshare conflict arises.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects a balance between the adventure's exclusivity and the shared ownership model, ensuring it remains accessible to players of all levels.",
    "priceOriginal": 22500,
    "priceReviewedAt": "2026-07-22T01:02:16.570736+00:00",
    "aiReviewedAt": "2026-07-22T01:02:16.570736+00:00",
    "aiReviewVersion": 1
  },
  "crimson_fleet_rum_cake_recipe": {
    "id": "crimson_fleet_rum_cake_recipe",
    "name": "Recipe: Crimson Fleet Rum Cake",
    "description": "This recipe for Crimson Fleet Rum Cake imparts a pirate's joy and good fortune. By following the intricate steps of soaking the cake in high-octane rum, you can partake in its magic. For three hours, it grants you advantage on one luck-related roll and bestows a +1 to your Charisma (Deception) checks. However, indulgence can lead to swaying at sea—suffering disadvantage on balance rolls for the same duration.",
    "price": 1000,
    "icon": "🍰",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Rum-Infused Luck",
      "Charismatic Deception"
    ],
    "vendor": "crimson_fleet_galley",
    "shippedBy": "Rum-Soaked Recipe Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rum-Infused Luck",
        "rules": "Activation: Eat a slice of the Rum Cake. Duration: 3 hours. Ends When: The effect ends when the duration expires or you eat another slice of the cake."
      },
      {
        "title": "Charismatic Deception",
        "rules": "Activation: Consume the cake and immediately use Charisma (Deception) checks. Advantage on one luck-related roll within 3 hours. Requires: Rum-soaked batter and a pirate's touch. Uses: One charge per recipe."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to beginners, as it doesn't require advanced skills.",
    "vendorReason": "The Crimson Fleet Galley specializes in pirate-themed culinary delights and this recipe perfectly suits their offerings.",
    "shippingDetail": "Ships via a specialized courier that delivers the cake with a bottle of rum, ensuring it's fresh and potent for the intended use.",
    "usage": {
      "activation": "Eat",
      "duration": "3 hours per slice consumed",
      "endsWhen": "Duration ends or another slice is eaten",
      "charges": "Unlimited charges"
    },
    "priceReason": "The recipe's uncommon status and pirate-themed charm justify a price of 1000 XP.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T01:01:57.129746+00:00",
    "aiReviewedAt": "2026-07-22T01:01:57.129746+00:00",
    "aiReviewVersion": 1
  },
  "crimson_fleet_smuggling_pass": {
    "id": "crimson_fleet_smuggling_pass",
    "name": "Crimson Fleet Smuggling Pass",
    "description": "The Crimson Fleet Smuggling Pass is a delicate, crimson parchment adorned with the fleet's emblem and an ancient sigil that whispers of secrets long lost to time. This token allows passage through one major naval blockade, bypassing the usual checks entirely, but it comes at a price; the ship must still offer a substantial bribe of 5,000 gp to ensure the crew's safety throughout the transit. Crafted by the notorious Crimson Fleet itself, this pass is as much a relic of their power as it is a tool for evading their patrols.",
    "price": 1000,
    "icon": "🏴‍☠️",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Bypasses Naval Blockade",
      "Requires Bribe"
    ],
    "vendor": "crimson_fleet_fence",
    "shippedBy": "Secret Handshake",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bypasses Naval Blockade",
        "rules": "The user may activate this item to bypass one major naval blockade. The effect is instantaneous and allows safe passage through the blockade without any further checks or challenges."
      },
      {
        "title": "Requires Bribe",
        "rules": "After using the item, a ship must provide an additional bribe of 5,000 gp to ensure the crew's safety throughout the transit. Failure to do so results in the token being rendered useless and lost forever."
      }
    ],
    "levelRequirementReason": "This item is accessible to characters as low as level 1 because it represents a significant advantage for anyone trying to avoid Crimson Fleet patrols.",
    "vendorReason": "The Crimson Fleet Fence deals exclusively with the fleet's secrets and contraband, making them the ideal vendor for this item.",
    "shippingDetail": "Ships are delivered through a network of underground channels and hidden routes to ensure the pass reaches its intended recipient without detection.",
    "usage": {
      "activation": "Instantaneous action upon presentation at the blockade.",
      "duration": "Instantaneous effect; lasts until passage is confirmed.",
      "endsWhen": "Exhausted after one use.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects a balance between the item's rarity and its utility, providing a significant advantage at an accessible cost for lower-level characters.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-22T01:02:11.723871+00:00",
    "aiReviewedAt": "2026-07-22T01:02:11.723871+00:00",
    "aiReviewVersion": 1
  },
  "crowbar": {
    "id": "crowbar",
    "name": "Rusted Crowbar",
    "description": "This Rusted Crowbar is a weathered length of iron, its head flattened into a wedge. Crafted from scavenged materials, it has seen countless uses in both peaceful and more... aggressive endeavors. It exudes the smell of sweat and rust, yet remains surprisingly sturdy despite its age. This tool offers advantage on Strength checks to open locks or break down doors, and can be used as an improvised weapon dealing 1d4 bludgeoning damage.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 50,
    "rarity": "common",
    "effects": [
      "Advantage on STR Checks",
      "Improvised Weapon"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on STR Checks",
        "rules": "You gain advantage on Strength checks to open locks or break down doors. This effect lasts until the start of your next turn."
      },
      {
        "title": "Improvised Weapon",
        "rules": "When used as an improvised weapon, you can make a melee attack with the crowbar against one target within 5 feet of you. On a hit, the target takes 1d4 bludgeoning damage."
      }
    ],
    "levelRequirementReason": "This mundane tool is suitable for any adventurer willing to put in the effort.",
    "vendorReason": "The Valley Trading Post regularly stocks useful tools and equipment, from the common to the exotic.",
    "shippingDetail": "Delivered with Standard Courier service within a week.",
    "usage": {
      "activation": "As a bonus action or on your turn during combat.",
      "duration": "Instantaneous for weapon use, lasts until start of next turn otherwise.",
      "endsWhen": "Exhausted after one use as an improvised weapon; advantage persists until end of next turn.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The balanced price reflects the item's utility and durability, making it a staple for adventurers.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T01:02:06.746498+00:00",
    "aiReviewedAt": "2026-07-22T01:02:06.746498+00:00",
    "aiReviewVersion": 1
  },
  "crown_of_the_lost_king": {
    "id": "crown_of_the_lost_king",
    "name": "Crown of the Lost King",
    "description": "The Crown of the Lost King is a tarnished diadem encrusted with ancient emeralds, its surface etched with the names of every ruler who met their end within its halls. It whispers in the dead of night, sharing the wisdom and folly of forgotten monarchs. Wearing it grants you +2 to Charisma and advantage on Leadership checks, but it also compels you to confront your own mortality; each week, you must make a DC 18 Wisdom saving throw or believe yourself one of those fallen kings.",
    "category": "premium",
    "price": 1000,
    "icon": "👑",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Charisma Boost",
      "Weekly Mortality Check"
    ],
    "vendor": "lunar_auction",
    "shippedBy": "Cursed Sarcophagus",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "While wearing the Crown, you gain a +2 bonus to Charisma and have advantage on Leadership checks."
      },
      {
        "title": "Weekly Mortality Check",
        "rules": "Every week at dawn, you must make a DC 18 Wisdom saving throw. On failure, you believe yourself to be one of the fallen kings until the next dawn when this effect ends."
      }
    ],
    "levelRequirementReason": "The Crown's ancient magic is potent and requires significant experience to wield.",
    "vendorReason": "As a relic of lost power, the Lunar Auction can offer this crown to those who have earned its secrets through time.",
    "shippingDetail": "The Crown is delivered in a cryptic box marked with symbols of ancient kings and queens.",
    "usage": {
      "activation": "Passive effect; activation by wearing the crown.",
      "duration": "Until removed or until your next dawn.",
      "endsWhen": "When you remove it or at midnight on each new day.",
      "charges": "Unlimited, recharges with a short rest."
    },
    "priceReason": "Balanced as a godly rarity item, this crown offers significant but not game-breaking benefits.",
    "priceOriginal": 800000,
    "priceReviewedAt": "2026-07-22T01:02:11.706710+00:00",
    "aiReviewedAt": "2026-07-22T01:02:11.706710+00:00",
    "aiReviewVersion": 1
  },
  "crystal_ball_cracked": {
    "id": "crystal_ball_cracked",
    "name": "Cracked Crystal Ball",
    "description": "The Cracked Crystal Ball is a brittle, milky orb that shatters with each use, its facets reflecting distorted images of the future. It whispers secrets and reveals truths, but at a cost—each glance distorts reality further. This artifact's visions are never straightforward; what looks like a dragon might be mistaken for a duck or a storm brewing over distant lands. The ball is said to have been crafted by ancient seers who sought to glimpse the future in fractured glass.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "junk",
    "effects": [
      "Distorted Visions",
      "Mystic Insight"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Fragile Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Distorted Visions",
        "rules": "You can attempt to divine a future event by gazing into the crystal ball. The DM determines the nature of the vision, which may be misleading or outright deceptive. On a successful Wisdom (Insight) check with a DC of 15, you gain a +2 bonus on one Intelligence (Arcana) or History check related to the vision."
      },
      {
        "title": "Mystic Insight",
        "rules": "Each time you use the crystal ball, there is a 30% chance that it will shatter. If it does not break, you gain a +1 bonus on one Charisma (Deception) check made to lie or mislead others. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "This item is accessible to beginners as it provides limited insight into the future but comes with risks.",
    "vendorReason": "The shamans at Shamans' Hut are known for their mystical artifacts, and this cracked crystal ball fits well within their inventory.",
    "shippingDetail": "Carefully packed to prevent further damage during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The crystal ball breaks or you choose to stop the effect.",
      "charges": "Unlimited, but limited by daily use."
    },
    "priceReason": "This artifact is a balance between its mystical insights and the risk of shattering, making it accessible yet valuable.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T01:03:04.646740+00:00",
    "aiReviewedAt": "2026-07-22T01:03:04.646740+00:00",
    "aiReviewVersion": 1
  },
  "crystal_bird_of_memory": {
    "id": "crystal_bird_of_memory",
    "name": "Crystal Bird of Memory",
    "description": "The Crystal Bird of Memory is a delicate avian crafted from clear crystal, its wings shimmering with pastel hues. It sings the memories of those it touches, reliving vivid and true moments from their past. Once per week, it can sing a memory from someone nearby who has come into contact with it. If you lie to it, the bird shatters into a thousand sparkling shards, sealing your deceit in glass.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🐦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Touch: It sings one memory of the toucher",
      "Weekly: It sings a memory of someone nearby"
    ],
    "vendor": "dream_sanctuary",
    "shippedBy": "Glass Cage",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Memorial Echo",
        "rules": "Activation: Touch. Duration: Instantaneous. Range: Touch. This effect reveals one vivid and true memory from the touched individual's past. No save is required."
      },
      {
        "title": "Shared Recollection",
        "rules": "Activation: Interact with nearby individual once per week. Duration: Instantaneous. Range: Close (25 feet + 5 feet/level). This effect reveals one vivid and true memory from the touched individual's past, chosen by you."
      }
    ],
    "levelRequirementReason": "The crystal requires minimal magical energy to interact with.",
    "vendorReason": "Dream Sanctuary specializes in esoteric artifacts that help navigate the realms of memory and dreams.",
    "shippingDetail": "Delivered by Glass Cage, known for its pristine packaging and reliable delivery.",
    "usage": {
      "activation": "Touch or interact with a nearby individual once per week.",
      "duration": "Instantaneous",
      "endsWhen": "The memory is revealed and the effect ends. The crystal can be used once per day.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a lower price to reflect its limited daily use and minor magical properties.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-22T01:02:27.677559+00:00",
    "aiReviewedAt": "2026-07-22T01:02:27.677559+00:00",
    "aiReviewVersion": 1
  },
  "crystal_bottle_of_silence": {
    "id": "crystal_bottle_of_silence",
    "name": "Crystal Bottle of Silence",
    "description": "The Crystal Bottle of Silence is a slender vial encased in crystalline glass, its surface etched with ancient runes. When shaken, it releases a wave of pure silence that engulfs all within earshot, muffling sound for an entire minute. The ambient hum of the world fades away as if time itself has paused. The bottle refills itself at dawn with the new day’s sounds, ready to be used again.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💧",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Silence Radius",
      "Spell Failure"
    ],
    "vendor": "echo_hollow",
    "shippedBy": "Swift Wind Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silence Radius",
        "rules": "On activation as a bonus action, the Crystal Bottle of Silence releases a 20-foot radius of absolute silence for one minute. All creatures within the area have disadvantage on Dexterity (Stealth) checks and any attack rolls that require hearing. Spells with verbal components cast by creatures in this area fail."
      },
      {
        "title": "Spell Failure",
        "rules": "Any creature using a verbal component spell, such as 'Silent Image' or 'Haste,' within the radius of silence has its spell fail and must use an additional action to concentrate on it if already active. The bottle refills itself with ambient sounds at dawn."
      }
    ],
    "levelRequirementReason": "The crystal's power is subtle but powerful, making it accessible to lower-level adventurers who might need a moment of quiet.",
    "vendorReason": "Echo Hollow specializes in items that enhance or disrupt the flow of sound and silence, making this bottle an appropriate addition to their inventory.",
    "shippingDetail": "Ships via Swift Wind Courier, known for its timely deliveries across the realm. Delivered within a week from order placement.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "One Minute",
      "endsWhen": "The duration ends when it expires or the bottle is used up; refills at dawn with ambient noise.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its rare and powerful nature, offering a significant advantage in quiet environments.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T01:02:29.631687+00:00",
    "aiReviewedAt": "2026-07-22T01:02:29.631687+00:00",
    "aiReviewVersion": 1
  },
  "crystal_king_crown": {
    "id": "crystal_king_crown",
    "name": "Crown of the Crystal King",
    "description": "The Crown of the Crystal King is a regal diadem forged from the heart of ancient ice, its facets shimmering like frozen stars. It grants mastery over cold and frost, allowing you to conjure icy breath that can freeze foes in their tracks or summon crystal shards to defend you. Your very presence commands the elements, causing the air around you to chill and a light mist to rise from your steps.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Mastery Over Cold",
      "Ethereal Frost"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Frozen Crate",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Mastery Over Cold",
        "rules": "You have immunity to cold damage. As an action, you can exhale a cone of freezing breath that deals 3d6 cold damage to all creatures in the area. This ability has no cooldown."
      },
      {
        "title": "Ethereal Frost",
        "rules": "Once per long rest, you can summon three ethereal crystal shards that act as either an attack or a Shield spell for each shard, depending on your command. Each shard deals 2d6 cold damage and grants a +1 bonus to AC."
      }
    ],
    "levelRequirementReason": "The Crown of the Crystal King's icy magic requires a adept user who can channel its power effectively.",
    "vendorReason": "The Comet Observatory, known for its deep connection to celestial and elemental forces, has acquired this relic from ancient sources.",
    "shippingDetail": "The Frozen Crate ensures swift delivery through enchanted cold winds that protect the crown's integrity during transit.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous for breath, lasts until dispelled for Shield and attack forms of Ethereal Frost",
      "endsWhen": "Dispel Magic or destroyed by elemental force",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a tenth the original price to reflect its reduced power and more specific, thematic effects.",
    "priceOriginal": 420000,
    "priceReviewedAt": "2026-07-22T01:03:25.530965+00:00",
    "aiReviewedAt": "2026-07-22T01:03:25.530965+00:00",
    "aiReviewVersion": 1
  },
  "csto_cosmic_star_robe": {
    "id": "csto_cosmic_star_robe",
    "name": "CSTO Cosmic Star Robe",
    "description": "The CSTO Cosmic Star Robe is a celestial garment woven from threads of stardust and adorned with constellations that shimmer like distant galaxies. This robe grants its wearer a deep connection to the night sky, bestowing advantage on Navigation checks under starlight and allowing them to predict minor celestial events such as lunar eclipses or meteor showers. The stars' twinkling light occasionally distracts, requiring concentration but enhancing one's intuition in astral matters.",
    "category": "equipment",
    "price": 1000,
    "icon": "👘",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Advantage on Navigation under stars",
      "Predicts minor celestial events"
    ],
    "vendor": "csto_observatory",
    "shippedBy": "Stellar Stitch",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Advantage on Navigation",
        "rules": "The wearer gains advantage on Navigation checks made to determine their position or direction when using the night sky as a reference. This effect lasts until the end of the long rest."
      },
      {
        "title": "Celestial Predictions",
        "rules": "Once per short rest, the wearer can predict a minor celestial event such as a meteor shower or lunar eclipse. The DM decides on the specific event and its impact within 24 hours after the prediction is made."
      }
    ],
    "levelRequirementReason": "This robe requires at least level 7 to wield effectively, providing an astral connection that only advanced students of astronomy can fully harness.",
    "vendorReason": "The CSTO Observatory is renowned for its cosmic artifacts and astronomical instruments, making it the ideal vendor for this celestial robe.",
    "shippingDetail": "Ships via a fleet of interstellar courier drones, ensuring swift delivery within 3 days.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of the long rest or until the wearer takes a long rest.",
      "endsWhen": "The effect ends at the start of each long rest.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "This robe is priced moderately to reflect its rare celestial craftsmanship and the specialized materials used in its creation.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-22T01:02:57.251737+00:00",
    "aiReviewedAt": "2026-07-22T01:02:57.251737+00:00",
    "aiReviewVersion": 1
  },
  "csto_cosmic_stardust_sorbet_recipe": {
    "id": "csto_cosmic_stardust_sorbet_recipe",
    "name": "Recipe: CSTO Cosmic Stardust Sorbet",
    "description": "The Recipe for CSTO Cosmic Stardust Sorbet yields a shimmering confectionary delight that sparkles like stardust, each spoonful revealing the cosmos' secrets. This sorbet is crafted by Observatory Chefs using genuine cosmic 'dust' harvested from meteorites. Consuming it grants you a heightened awareness of celestial phenomena; for 4 hours, you gain advantage on perception checks to notice stars and Navigation skill checks. The sorbet's recipe is ephemeral yet potent, teaching you the art of freezing time with stardust.",
    "price": 1000,
    "icon": "🍨",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Freeze with Dust",
      "Stellar Gaze"
    ],
    "vendor": "csto_observatory",
    "shippedBy": "Stellar Scoop Summary",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Freeze with Dust",
        "rules": "When you consume this sorbet, you gain advantage on perception checks to notice stars and Navigation skill checks for a duration of 4 hours. This effect ends when the time expires or if you consume another sorbet."
      },
      {
        "title": "Stellar Gaze",
        "rules": "This recipe teaches you how to create this confection, which requires specific ingredients: stardust and cosmic cool. You can only learn this once per short rest, but the knowledge remains with you forever."
      }
    ],
    "levelRequirementReason": "The recipe's complexity and the requirement for specific and rare materials make it suitable for beginners.",
    "vendorReason": "Only the Observatory Chefs possess the knowledge and facilities to create such a celestial treat.",
    "shippingDetail": "Ships via specialized cold storage containers ensuring the sorbet's integrity during transit.",
    "usage": {
      "activation": "Eating one spoonful of the sorbet",
      "duration": "4 hours",
      "endsWhen": "Ends upon expiration or consumption of another sorbet",
      "charges": "Unlimited; consumes a portion"
    },
    "priceReason": "The cost reflects the rare ingredients and expertise required to craft this cosmic delicacy.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T01:02:56.268762+00:00",
    "aiReviewedAt": "2026-07-22T01:02:56.268762+00:00",
    "aiReviewVersion": 1
  },
  "csto_cosmic_tea_premium": {
    "id": "csto_cosmic_tea_premium",
    "name": "CSTO Cosmic Tea (Premium)",
    "description": "Brewed from stardust and cosmic dust, CSTO Cosmic Tea (Premium) is a sip of the cosmos in a delicate cup. Each delicate leaf tells a tale of distant stars, offering clarity to those who drink it. The aroma alone hints at the infinite, while the taste lingers like the whispers of time itself. This premium blend grants its imbiber advantage on Insight and Arcana checks, as if the cosmos themselves lend their wisdom.",
    "price": 1000,
    "icon": "☕",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Insight Advantage",
      "Minor Prophecy"
    ],
    "vendor": "csto_observatory",
    "shippedBy": "Stellar Cup Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Insight Advantage",
        "rules": "When consumed, the tea provides the drinker with advantage on one Insight or Arcana check. This effect lasts until the end of the drinker's next turn."
      },
      {
        "title": "Minor Prophecy",
        "rules": "For 1 hour after consuming the tea, the drinker receives a minor vision or prophecy related to their current situation, provided they make an Insight saving throw (DC 15). Failure means no additional insight is gained."
      }
    ],
    "levelRequirementReason": "This premium blend requires a certain maturity and focus only available after reaching third level.",
    "vendorReason": "The Cosmic Brewers at CSTO are renowned for their celestial teas, making it natural that they would offer this premium version to discerning patrons.",
    "shippingDetail": "Delivered by the fastest courier in the cosmos, ensuring the tea arrives fresh from the stars.",
    "usage": {
      "activation": "Drinking the tea as a bonus action.",
      "duration": "Until the end of the drinker's next turn or until used for an Insight check.",
      "endsWhen": "The effect ends when the tea is consumed, unless interrupted by an action.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This premium Cosmic Tea is crafted with rare stardust and astronomical precision, making it a valuable but balanced addition to any adventurer's inventory.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-22T01:03:40.901895+00:00",
    "aiReviewedAt": "2026-07-22T01:03:40.901895+00:00",
    "aiReviewVersion": 1
  },
  "csto_observatory_stellar_stirrer": {
    "id": "csto_observatory_stellar_stirrer",
    "name": "CSTO Observatory Stellar Stirrer",
    "description": "Crafted by the CSTO Observatory Toolers, the CSTO Observatory Stellar Stirrer is a whimsical device designed to stir sorbet under the watchful gaze of the cosmos. Its spinning blades align perfectly with the constellations, ensuring that each scoop is imbued with a touch of celestial chill. This artisanal tool not only grants advantage on culinary rolls for cosmic recipes but also infuses the sorbet with a hint of starlight, making each serving a true taste of the night sky.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍨",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Stellar Advantage",
      "Constellation-Inspired Flavor"
    ],
    "vendor": "csto_observatory",
    "shippedBy": "Star Stir Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stellar Advantage",
        "rules": "When using this Stirrer to prepare a cosmic recipe, you gain advantage on the roll. This effect lasts for the duration of your preparation."
      },
      {
        "title": "Constellation-Inspired Flavor",
        "rules": "Each serving prepared with the Stirrer gains a unique flavor influenced by the current alignment of the stars. The flavor changes daily and is determined by the vendor upon shipment."
      }
    ],
    "levelRequirementReason": "This item requires no specific level as it is designed for all cooks, whether novice or master.",
    "vendorReason": "The CSTO Observatory Toolers are renowned for their precision and craftsmanship, ensuring that only the finest tools like this Stirrer find their way into the hands of eager chefs.",
    "shippingDetail": "Delivered by Star Stir Shipment; expect a delay due to cosmic travel times.",
    "usage": {
      "activation": "Used as an action during preparation.",
      "duration": "Instantaneous, lasting the duration of your preparation roll.",
      "endsWhen": "Exhausted after one use per day.",
      "charges": "Unlimited; recharges daily."
    },
    "priceReason": "The price reflects the unique craftsmanship and the rarity of materials used in its creation, making it a valuable addition to any chef's arsenal.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T01:04:02.257406+00:00",
    "aiReviewedAt": "2026-07-22T01:04:02.257406+00:00",
    "aiReviewVersion": 1
  },
  "culex_crystal": {
    "id": "culex_crystal",
    "name": "Shard of Vanda",
    "description": "The Shard of Vanda gleams with an eerie, otherworldly light, a remnant of a dark knight's fateful duel in the void. This crystalline fragment not only warps reality to feature classic Final Fantasy boss theme music but also commands Elemental Crystals that gather around you, ready to defend or attack as commanded. With a flicker of its light, you can summon a Meteor Swarm, unleashing a devastating celestial storm upon foes within 60 feet.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Warps Battle Music",
      "Summons Elemental Crystals"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Battle Music Warping",
        "rules": "As a bonus action, you can change the battle music to classic Final Fantasy boss theme tracks for 1 minute. This effect ends early if you are incapacitated or if your concentration is broken (as if concentrating on a spell)."
      },
      {
        "title": "Elemental Crystals",
        "rules": "You can summon four Elemental Crystals as an action, each granting +2 to AC and +1 to attack rolls for 1 minute. They obey your verbal commands until dismissed or destroyed."
      }
    ],
    "levelRequirementReason": "This Shard requires considerable magical power to wield its abilities effectively.",
    "vendorReason": "The rogue-run market often deals in strange and powerful artifacts from other realms, including this shard.",
    "shippingDetail": "Ships via interdimensional courier with a 1d4 turn delivery delay.",
    "usage": {
      "activation": "Bonus action to change battle music; action to summon Elemental Crystals or cast Meteor Swarm once per long rest.",
      "duration": "Battle music effect lasts for 1 minute, Elemental Crystals last for 1 minute.",
      "endsWhen": "Effect ends if you are incapacitated or your concentration is broken.",
      "charges": "One charge usable per long rest."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its powerful but limited abilities and rarity.",
    "priceOriginal": 950000,
    "priceReviewedAt": "2026-07-22T01:03:35.540263+00:00",
    "aiReviewedAt": "2026-07-22T01:03:35.540263+00:00",
    "aiReviewVersion": 1
  },
  "cult_of_min_cat_ear_hoodie": {
    "id": "cult_of_min_cat_ear_hoodie",
    "name": "Cult of Min Cat Ear Hoodie ",
    "description": "The Cult of Min Cat Ear Hoodie is a cozy hoodie with adorable, plush cat ears that stand out in any crowd. When worn, it emits a soft purring sound that can be heard by nearby animals, making you more appealing to them as if under the effect of Speak with Animals once per day. The hoodie also attracts stray cats, doubling your chances to find or summon such creatures within 30 feet for short periods.",
    "price": 1000,
    "icon": "👕",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Attracts stray cats",
      "Enhances animal communication"
    ],
    "vendor": "cult_of_min_temple",
    "shippedBy": "Paw Print Patch Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cat Attraction",
        "rules": "When you wear this hoodie, it doubles the chance to find or summon stray cats within a 30-foot radius for short periods. This effect can be used once per long rest."
      },
      {
        "title": "Speak with Cats",
        "rules": "Once per day, you emit a soft purring sound that allows you to speak with any animal with an Intelligence of 4 or less within 30 feet for up to 1 minute. This effect is instantaneous and does not require action."
      }
    ],
    "levelRequirementReason": "This hoodie is designed for beginners who wish to interact more closely with the feline world.",
    "vendorReason": "The Cult of Min priests craft this item as a way to encourage devotion and interaction within their community.",
    "shippingDetail": "Ships via special courier, ensuring the hoodie arrives with its soft lining intact.",
    "usage": {
      "activation": "Passive effect when worn",
      "duration": "Instantaneous for Cat Attraction; up to 1 minute for Speak with Cats",
      "endsWhen": "The duration ends naturally or if you are no longer wearing the hoodie",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's unique abilities to attract and communicate with cats.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-22T01:03:51.990071+00:00",
    "aiReviewedAt": "2026-07-22T01:03:51.990071+00:00",
    "aiReviewVersion": 1
  },
  "cult_of_min_catnip_infuser": {
    "id": "cult_of_min_catnip_infuser",
    "name": "Cult of Min Catnip Infuser ",
    "description": "The Cult of Min Catnip Infuser, a gleaming brass device adorned with runes of feline mysticism, is a ritualistic tool favored by devoted followers of Min. It draws from ancient catnip fields, infusing treats with potent magic that grants advantage on all checks related to concocting feline delicacies. When steeped in hot water, it emits an ear-piercing meow that can be heard for miles, summoning the local felines to your side. Its unique design ensures that no cat can resist its allure.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍪",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Advantage on feline recipe checks",
      "Emitting a loud meow when steeped"
    ],
    "vendor": "cult_of_min_temple",
    "shippedBy": "Paw Infuse Pan Express Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Feline Recipe Advantage",
        "rules": "Activates as an action. Grants advantage on any check related to creating or enhancing cat food and treats for cats, including spells and potions that involve felines."
      },
      {
        "title": "Loud Meow",
        "rules": "When steeped in hot water as a bonus action, emits a meow that attracts nearby cats within 30 feet. The meow lasts for 1 minute and can be heard up to one mile away by any cat or creature with a keen sense of hearing."
      }
    ],
    "levelRequirementReason": "Beginners in the cult are taught basic rituals, including the use of the Catnip Infuser.",
    "vendorReason": "Only sold at official Cult of Min Temples for those who have shown devotion to their feline deity.",
    "shippingDetail": "Special courier delivers directly to your door, ensuring the device arrives in pristine condition.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous and ongoing (meow lasts for 1 minute)",
      "endsWhen": "The meow ends when a creature within the range moves out of earshot. The Infuser requires no charges, recharges daily.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it provides unique utility and appeal without overshadowing other magical items.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T01:04:06.091898+00:00",
    "aiReviewedAt": "2026-07-22T01:04:06.091898+00:00",
    "aiReviewVersion": 1
  },
  "cult_of_min_catnip_toy_service": {
    "id": "cult_of_min_catnip_toy_service",
    "name": "Cult of Min Catnip Toy Service",
    "description": "The Cult of Min Catnip Toy Service is a whimsical device crafted by the mischievous Min Cultists, designed to distract feline foes with its intoxicating aroma and playful design. It can be thrown at cat creatures, causing them to become distracted for one round if they fail their Wisdom saving throw (DC 12). The toy also grants advantage on Animal Handling checks when dealing with cats, making it a valuable tool for those who need to handle or control feline allies or enemies.",
    "price": 1000,
    "icon": "🐱",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Distraction",
      "Animal Handling Advantage"
    ],
    "vendor": "cult_of_min_temple",
    "shippedBy": "Yarn Ball Express Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Distraction",
        "rules": "When thrown at a cat creature, the toy causes them to become distracted for one round if they fail their Wisdom saving throw (DC 12). The distraction ends immediately on the next action or reaction the target takes."
      },
      {
        "title": "Animal Handling Advantage",
        "rules": "The user gains advantage on Animal Handling checks when dealing with cats. This effect lasts until the end of each long rest."
      }
    ],
    "levelRequirementReason": "This toy is suitable for beginners and those who are just starting their journey, as it does not require a high level to use effectively.",
    "vendorReason": "The Cult of Min Temple sells this toy because they believe in providing tools that can help their followers and others manage feline creatures more easily.",
    "shippingDetail": "Ships within the week, with delivery times varying by region.",
    "usage": {
      "activation": "Action",
      "duration": "One round per use",
      "endsWhen": "On the next action or reaction taken by the target creature",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price is set at 1000 XP to reflect its utility in both combat and role-playing situations, making it a valuable but not overpowered tool for players.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T01:03:54.517678+00:00",
    "aiReviewedAt": "2026-07-22T01:03:54.517678+00:00",
    "aiReviewVersion": 1
  },
  "cult_of_min_catnip_treats_recipe": {
    "id": "cult_of_min_catnip_treats_recipe",
    "name": "Recipe: Cult of Min Catnip Treats ",
    "description": "This ancient recipe, written on a parchment of catnip-scented paper, details how to craft 'Cult of Min Catnip Treats.' The treats are not only delicious but imbued with a mysterious energy that can be harnessed by those who understand the ritual. Feed these treats to felines for an advantage on Animal Handling checks or consume them yourself for a temporary boost in Dexterity (+1, 30 minutes). The treat-making process requires both catnip and a dash of arcane knowledge, as taught by the cult's initiates.",
    "price": 1000,
    "icon": "🍪",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Cult Treats",
      "Feline Favor"
    ],
    "vendor": "cult_of_min_temple",
    "shippedBy": "Swift Paws Courier Service",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Cult Treats",
        "rules": "Activate as a bonus action. When fed to felines, grant advantage on Animal Handling checks for the next hour. Can be used once per day."
      },
      {
        "title": "Feline Favor",
        "rules": "Eat one treat yourself; gain +1 to Dexterity until your next long rest (30 minutes). This effect can only be used once every 7 days."
      }
    ],
    "levelRequirementReason": "Requires a basic understanding of the arcane arts, suitable for novice spellcasters and those with animal affinity.",
    "vendorReason": "The temple's priests have refined the ritual over centuries, ensuring only they can provide authentic recipes.",
    "shippingDetail": "Treats are delivered within a week, fresh and potent.",
    "usage": {
      "activation": "Bonus action or self-consumption",
      "duration": "Until next long rest for the user; one hour for felines",
      "endsWhen": "Effect ends when the duration expires or the treat is consumed by the recipient",
      "charges": "Unlimited, but limited to once per day and week"
    },
    "priceReason": "Balanced price considers the arcane ingredients and unique crafting process.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T01:04:08.526463+00:00",
    "aiReviewedAt": "2026-07-22T01:04:08.526463+00:00",
    "aiReviewVersion": 1
  },
  "cult_of_min_maze_cleaning_premium": {
    "id": "cult_of_min_maze_cleaning_premium",
    "name": "Cult of Min Premium Maze Cleaning",
    "description": "The Cult of Min Premium Maze Cleaning restores your labyrinth to pristine condition. With a wave of their broom, they not only clean but also subtly add new trap challenges, marked with Minotaur signs for easy spotting. You receive a 'Maze of the Month' plaque as a token of their appreciation. This service is crafted by the Cult of Min Premium Janitorial, known for their meticulous care and attention to detail.",
    "category": "premium",
    "price": 1000,
    "icon": "🧹",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Cleanse and Refurbish",
      "Trap Marking"
    ],
    "vendor": "cult_of_min",
    "shippedBy": "Maze Runner Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Cleanse and Refurbish",
        "rules": "As an action, cleanse one dungeon level of dirt and cobwebs. The area receives minor cosmetic improvements. You gain a +2 bonus to Stealth checks made within the cleaned area for the rest of the day."
      },
      {
        "title": "Trap Marking",
        "rules": "Traps are clearly marked with Minotaur signs, granting you advantage on Perception checks to spot them. This effect lasts until the traps are triggered or reset by a creature with at least 15 Intelligence."
      }
    ],
    "levelRequirementReason": "Requires sufficient skill and experience to appreciate and manage the nuances of labyrinth cleaning.",
    "vendorReason": "The Cult of Min is renowned for their expertise in maintaining and enhancing labyrinths, making them the premier choice for maze cleaning services.",
    "shippingDetail": "Ships via Maze Runner Express, known for delivering labyrinth supplies with pinpoint accuracy.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Traps are triggered or reset by a creature with at least 15 Intelligence; plaque is permanent.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the cult's expertise and the quality of their services.",
    "priceOriginal": 20500,
    "priceReviewedAt": "2026-07-22T01:04:10.745166+00:00",
    "aiReviewedAt": "2026-07-22T01:04:10.745166+00:00",
    "aiReviewVersion": 1
  },
  "cult_of_min_maze_cleaning_service": {
    "id": "cult_of_min_maze_cleaning_service",
    "name": "Cult of Min Maze Cleaning Service",
    "description": "The Cult of Min Maze Cleaning Service dispatches a team of minotaurs to clear one labyrinth level or dungeon, banishing debris and minor hazards under the DM's discretion. Upon their departure, you gain a +1 bonus to Charisma checks with any nearby grateful Minotaurs for 30 days, but beware—any Stealth check in areas they've cleaned now comes with disadvantage due to lingering 'Cult of Min' graffiti etched into the walls. This service is provided by the Cult of Min Janitorial, whose reputation precedes them even in the most treacherous mazes.",
    "category": "services",
    "price": 1000,
    "icon": "🧽",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Clears one level of debris and minor hazards",
      "Grants +1 Charisma with grateful Minotaurs for 30 days"
    ],
    "vendor": "cult_of_min",
    "shippedBy": "Maze Runner Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Labyrinth Cleanup",
        "rules": "Activates as a bonus action, clears one dungeon or labyrinth level of debris and minor hazards. The DM determines the specific hazards removed. This effect is instantaneous."
      },
      {
        "title": "Charisma Boost with Minotaurs",
        "rules": "+1 Charisma bonus when making checks with grateful Minotaurs in the area for 30 days following the service. Ends upon the expiration of this duration or if the minotaur's attitude changes to unfriendly."
      }
    ],
    "levelRequirementReason": "This service is accessible to characters who have just begun their adventures, providing a reliable support option.",
    "vendorReason": "The Cult of Min Janitorial maintains a reputation for thorough and timely service in the most challenging mazes.",
    "shippingDetail": "The Maze Runner Express ensures swift delivery to even the most remote corners, guaranteeing your labyrinth is cleaned before you venture further within.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous cleanup; Charisma boost lasts for 30 days",
      "endsWhen": "Upon expiration of the Charisma bonus or if the minotaur's attitude changes to unfriendly",
      "charges": "Unlimited uses"
    },
    "priceReason": "The service is priced at a fair value, considering it provides immediate and lasting benefits within challenging environments.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T01:04:31.569297+00:00",
    "aiReviewedAt": "2026-07-22T01:04:31.569297+00:00",
    "aiReviewVersion": 1
  },
  "curse_amplification_kit": {
    "id": "curse_amplification_kit",
    "name": "Curse Amplification Kit",
    "description": "The Curse Amplification Kit, a dark and gnarled set of tools forged by ancient necromancers, is said to magnify any existing curse upon an enemy. With a single application, it can make the curse permanent, ignoring all attempts at removal, and intensify its effects tenfold, turning minor maladies into insurmountable horrors. Those who use this kit risk their own well-being; failing a DC 18 Wisdom saving throw results in a lingering curse that afflicts them as well.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💀",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Amplify Curse",
      "Permanently Infect"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Dark Components Express",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Amplify Curse",
        "rules": "Activates on command. The target's existing curse is magnified, increasing its damage or effects by 100%, making it impossible to dispel until the caster dies. Requires a DC 18 Wisdom saving throw for the target; failure results in additional terrible side effects."
      },
      {
        "title": "Permanently Infect",
        "rules": "The curse becomes permanent, affecting both the target and the user if they fail their save. The kit can only be used once per target before it is destroyed."
      }
    ],
    "levelRequirementReason": "Requires a high level of expertise to handle such dangerous necromantic artifacts without triggering their malevolent effects.",
    "vendorReason": "The Crypt Courier specializes in forbidden and hazardous items, including those that can be used for dark magic like the Curse Amplification Kit.",
    "shippingDetail": "Delivered by a specially equipped Dark Components Express courier who ensures the item is handled with utmost care and secrecy.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; permanent until dispelled or caster dies",
      "endsWhen": "The target successfully saves against the curse, caster dies, or kit is destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP as a rare but not overpowered tool for necromancers.",
    "priceOriginal": 140000,
    "priceReviewedAt": "2026-07-22T01:04:34.834930+00:00",
    "aiReviewedAt": "2026-07-22T01:04:34.834930+00:00",
    "aiReviewVersion": 1
  },
  "cursed_doll_of_voodoo": {
    "id": "cursed_doll_of_voodoo",
    "name": "Cursed Doll of Voodoo (Hex)",
    "description": "The Cursed Doll of Voodoo (Hex) is a sinister toy crafted from the bones and fabrics of its victim, bound by the malevolent magic of Shadow Shamans. With each pinch or whisper to its wooden body, it channels dark curses from miles away, targeting only those who possess something personal belonging to them. The doll's origins lie in shadowy markets where forbidden deals are struck, making it a relic of fear and despair.",
    "price": 1000,
    "icon": "🎎",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Remote Curses",
      "Personal Target Required"
    ],
    "vendor": "voodoo_temple",
    "shippedBy": "Cursed Whisper",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Remote Curses",
        "rules": "The user can remotely cast curses upon the target within one mile. The target must have a personal item owned by them for the curse to take effect. The curse lasts until dispelled or ends when the target is no longer within range."
      },
      {
        "title": "Personal Target Required",
        "rules": "The doll can only target individuals who possess an object personally belonging to them, ensuring that its power remains focused and potent."
      }
    ],
    "levelRequirementReason": "Requires a high level of magical knowledge and control to manipulate such dark magic.",
    "vendorReason": "The Voodoo Temple is known for its extensive collection of cursed and powerful items, making it the ideal vendor for the Cursed Doll of Voodoo (Hex).",
    "shippingDetail": "Ships via Cursed Whisper, ensuring that only those with a dark heart can receive such an item.",
    "usage": {
      "activation": "As a bonus action or reaction",
      "duration": "Until dispelled by the user or target is no longer within range",
      "endsWhen": "The curse ends when dispelled or the target is out of range",
      "charges": "Unlimited, but requires personal items from targets"
    },
    "priceReason": "Balanced as a godly rarity item, this doll's price reflects its rare crafting materials and dark magic.",
    "priceOriginal": 760000,
    "priceReviewedAt": "2026-07-22T01:05:01.941818+00:00",
    "aiReviewedAt": "2026-07-22T01:05:01.941818+00:00",
    "aiReviewVersion": 1
  },
  "cursed_mirror_shard": {
    "id": "cursed_mirror_shard",
    "name": "Cursed Mirror Shard",
    "description": "A jagged shard of obsidian glass, this cursed mirror fragment gleams with an eerie, pulsating light that seems to shift and warp depending on your gaze. It is said that when held, it reveals not just fear but the darkest secrets of one's soul, capable of driving even the most stalwart warrior mad. Only those who have faced their innermost terrors can wield this shard without succumbing to madness.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🪞",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Mirror of Self-Discovery",
      "Madness Upon Failure"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Shattered Frame",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mirror of Self-Discovery",
        "rules": "When held, you see your deepest and most terrifying secrets. You must make a Wisdom saving throw (DC 18). On a failed save, you gain one level of madness, chosen by the DM. On a successful save, you remain unharmed."
      },
      {
        "title": "Madness Upon Failure",
        "rules": "If your Wisdom saving throw fails, you immediately gain one level of madness as determined by the DM. This effect cannot be resisted or negated in any way."
      }
    ],
    "levelRequirementReason": "This shard's power is too great for those who have not faced their inner demons.",
    "vendorReason": "The crypt courier handles dangerous and forbidden items, ensuring the shard reaches only those capable of handling its power.",
    "shippingDetail": "Delivered in a sealed, enchanted box that prevents any from seeing inside until it is opened by the intended recipient.",
    "usage": {
      "activation": "As an action when held and focused on one's own reflection or self.",
      "duration": "Instantaneous effect upon saving throw resolution.",
      "endsWhen": "The effect ends immediately if you make a successful save. Otherwise, it remains active until the shard is destroyed or the madness fades.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "This shard's price reflects its rarity and the risk involved in handling such a powerful artifact.",
    "priceOriginal": 95000,
    "priceReviewedAt": "2026-07-22T01:05:13.245198+00:00",
    "aiReviewedAt": "2026-07-22T01:05:13.245198+00:00",
    "aiReviewVersion": 1
  },
  "custodian_galaxy_projector": {
    "id": "custodian_galaxy_projector",
    "name": "Custodian Galaxy Projector",
    "description": "The Custodian Galaxy Projector hums softly, its surface a swirling vortex of stars and nebulae. This compact device projects a perfect, real-time 3D map of the entire known galaxy, including hidden warp points that are not marked on any other chart. It is an invaluable tool for explorers and diplomats alike, as it grants immediate knowledge of all major civilizations and their locations within the galaxy's vast expanse. The Custodians crafted this device with precision, ensuring its information remains up-to-date even in the most remote reaches of space.",
    "price": 1000,
    "icon": "🪐",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Galactic Awareness",
      "Warp Point Revelation"
    ],
    "vendor": "custodian_hub",
    "shippedBy": "Custodian Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Galactic Awareness",
        "rules": "The Custodian Galaxy Projector grants a character immediate knowledge of all known warp points and major civilizations within the galaxy. This effect is passive, requiring no action to activate."
      },
      {
        "title": "Warp Point Revelation",
        "rules": "By focusing on specific coordinates, a user can reveal hidden warp points that are not otherwise marked on any chart or map. This effect requires an action and has a range of 10 feet from the projector's surface. There is no save DC for this effect."
      }
    ],
    "levelRequirementReason": "The Custodian Galaxy Projector is simple enough to be used by characters as low as level 1, but it remains a valuable tool for any adventurer.",
    "vendorReason": "As the official outpost of the Custodians, the Hub sells all manner of devices and tools crafted by these ancient guardians of knowledge.",
    "shippingDetail": "Ships directly from the Custodian Hub with same-day delivery for Hub members. Non-members receive a two-week shipment window.",
    "usage": {
      "activation": "Passive (no activation required)",
      "duration": "Permanent until the projector is turned off or damaged beyond repair",
      "endsWhen": "The device is turned off, destroyed, or rendered inoperable by damage",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Custodian Galaxy Projector offers a wealth of strategic and exploratory advantages for adventurers, making it a fair value at 1000 XP.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-22T01:04:57.618470+00:00",
    "aiReviewedAt": "2026-07-22T01:04:57.618470+00:00",
    "aiReviewVersion": 1
  },
  "custodian_hive_mind_link": {
    "id": "custodian_hive_mind_link",
    "name": "Custodian Hive Mind Link (Temporary)",
    "description": "The Custodian Hive Mind Link is a sleek, glowing device that hums softly when activated. For one hour, it temporarily aligns your mind with the Custodian collective's vast strategic knowledge and combat acumen (+10 to all combat rolls). However, this connection comes at a cost; afterward, you experience docility for 24 hours, during which you are reduced to docile obedience (DC 15 save to resist). Crafted by the Custodians themselves from ancient, sentient materials, it is a rare artifact of immense tactical value.",
    "price": 1000,
    "icon": "🔗",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Perfect Tactical Recall",
      "Docile Aftermath"
    ],
    "vendor": "custodian_hub",
    "shippedBy": "Custodian Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Perfect Tactical Recall",
        "rules": "For one hour after activation, you gain +10 to all combat-related checks. This effect is instantaneous upon activation and lasts for the duration specified."
      },
      {
        "title": "Docile Aftermath",
        "rules": "For 24 hours following use, you are docile and obedient (DC 15 saving throw to resist). Any attempt at independent thought or action provokes this effect. This condition ends when you successfully save against it."
      }
    ],
    "levelRequirementReason": "This item requires significant mental fortitude and strategic acumen, suitable for players of level 10 and above.",
    "vendorReason": "The Custodian Hub is the sole repository of Custodian technology, ensuring its rarest artifacts are only available through them.",
    "shippingDetail": "Delivered by a Custodian courier within one hour. Requires special handling and a secure location upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour (instantaneous effect)",
      "endsWhen": "Ends when the duration expires or you are incapacitated, destroyed, or otherwise cease to exist.",
      "charges": "Unlimited"
    },
    "priceReason": "The device's rarity and unique strategic value justify its moderate price.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-22T01:04:59.336476+00:00",
    "aiReviewedAt": "2026-07-22T01:04:59.336476+00:00",
    "aiReviewVersion": 1
  },
  "custodian_hive_mind_override": {
    "id": "custodian_hive_mind_override",
    "name": "Custodian Hive Mind Override (One-Time)",
    "description": "A digital command capable of briefly taking full control of a major Custodian installation.",
    "price": 450000,
    "icon": "💻",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Gain complete control over one Custodian facility (e.g., weapon system, lab) for 1 hour",
      "Facility will self-destruct upon override expiry",
      "Made by: Custodians (Traitor)"
    ],
    "vendor": "hacktivist_collective",
    "shippedBy": "Master Key Upload",
    "levelRequirement": 16
  },
  "custodian_hive_mind_upgrade": {
    "id": "custodian_hive_mind_upgrade",
    "name": "Custodian Hive Mind Expansion Module",
    "description": "The Custodian Hive Mind Expansion Module is a sleek, bioluminescent interface that seamlessly integrates into your neural network, allowing you to control two additional drones or constructs at once. Crafted by the Custodians of the Nexus, this module enhances your command over robotic allies, but requires careful integration time—four hours of focused meditation and calibration. Once activated, it grants an extended connection to the hive mind, ensuring that all linked constructs operate in perfect harmony.",
    "price": 1000,
    "icon": "🧠",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Increase maximum controlled drones/constructs by two",
      "Requires four hours of integration"
    ],
    "vendor": "custodian_hub",
    "shippedBy": "Modular Component Courier Service",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Expanded Control",
        "rules": "By spending an action to activate, you gain the ability to control up to six drones or constructs. This effect lasts until you dismiss it as a bonus action. The module can only be integrated once per long rest."
      },
      {
        "title": "Integration Time",
        "rules": "The integration process requires four hours of uninterrupted meditation and calibration, during which the module is dormant but not expended. If interrupted, restart the process from the beginning."
      }
    ],
    "levelRequirementReason": "This upgrade demands a high level to ensure the user can effectively manage the increased complexity of controlling more drones.",
    "vendorReason": "The Custodian Hub provides the most advanced upgrades, including this expansion module for hive mind integration.",
    "shippingDetail": "Ships via Modular Component Courier Service within three days from Nexus City.",
    "usage": {
      "activation": "Action to activate; lasts until dismissed as a bonus action",
      "duration": "Until dismissed or interrupted by an attack or effect that targets the drones/constructs",
      "endsWhen": "Dismissed, attacked, or targeted by an effect affecting the constructs",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This upgrade is priced at 1000 XP due to its rarity and the significant benefit it provides in controlling more drones.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-22T01:05:19.391169+00:00",
    "aiReviewedAt": "2026-07-22T01:05:19.391169+00:00",
    "aiReviewVersion": 1
  }
};
