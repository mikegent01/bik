// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_063 = {
  "doughnut_hole_gravi_crumb": {
    "id": "doughnut_hole_gravi_crumb",
    "name": "Void Crumb of Unstable Pull",
    "description": "The Void Crumb of Unstable Pull is a crumbly, dark residue that defies gravity's usual pull, instead exerting an unpredictable force that warps space around it. When consumed, adventurers experience a momentary gravitational distortion, causing nearby objects to be drawn toward the crumb with a strange, magnetic tug. This effect can disrupt balance and send enemies spiraling into precarious positions. Careful not to let the crumb's pull ensnare you as well!",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 35,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "knockback_enemy",
      "localized_gravity_distortion"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Knockback Enemy",
        "rules": "When consumed, this crumb exerts a localized gravitational distortion that has a 50% chance to knock an adjacent target up to 10 feet away. The effect lasts for the duration of the battle and can be used once per short or long rest."
      },
      {
        "title": "Localized Gravity Distortion",
        "rules": "The crumb creates a 10-foot radius area around it where objects are drawn towards its center, creating an unstable pull. Any creature entering this area must make a DC 12 Strength saving throw or be knocked prone and pushed into the nearest unoccupied space."
      }
    ],
    "levelRequirementReason": "This crumb can be consumed by players of any level due to its simple yet effective mechanics.",
    "vendorReason": "Hole Hawker, a vendor known for quirky and useful consumables, stocks the Void Crumb as part of their ever-changing selection of oddities.",
    "shippingDetail": "The crumb is shipped through the Dimensional Rift courier service, which ensures its arrival with minimal delay and in perfect condition.",
    "usage": {
      "activation": "Eaten as a bonus action",
      "duration": "Instantaneous effect; lasts for the duration of the battle",
      "endsWhen": "The effect ends when the battle ends or if the crumb is consumed again before the rest period",
      "charges": "Unlimited uses, one per short or long rest"
    },
    "priceReason": "The Void Crumb of Unstable Pull offers a unique and useful effect that balances well with its price point.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T22:59:09.228113+00:00",
    "aiReviewedAt": "2026-07-23T22:59:09.228113+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_chronal_drizzle": {
    "id": "doughnut_hole_chronal_drizzle",
    "name": "Temporal Syrup of Delayed Reaction",
    "description": "Temporal Syrup of Delayed Reaction is a shimmering, pink syrup with an eerie glow that hints at forgotten moments. Upon consumption, you are momentarily pulled into a temporal ripple, causing your next melee attack to be delayed by 1-2 seconds, ensuring precision strikes or thwarting surprise attacks. The syrup's unique formula ensures that each sip feels like stepping back in time, but beware of the risk of becoming entangled in a temporal loop.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "delayed_attack",
      "temporal_risk"
    ],
    "vendor": "center_seller",
    "shippedBy": "Warped Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Delayed Attack",
        "rules": "Activate as a bonus action. Your next melee attack made before the end of your next turn is delayed by 1d2 seconds, providing an opportunity to set up an ideal strike or avoid a surprise. This effect ends if you take another bonus action or reaction this turn."
      },
      {
        "title": "Temporal Risk",
        "rules": "There's a small chance (5% per use) that consuming the syrup triggers a brief temporal shift, causing you to lose your next action and instead be pulled into a moment of regret. This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to handle the subtle manipulation of time without risking immediate temporal instability.",
    "vendorReason": "Center Seller specializes in rare and exotic items that push the boundaries of magic, making them the perfect vendor for this unique syrup.",
    "shippingDetail": "Ships via Warped Courier, known for their ability to navigate through time-altered areas safely.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until your next turn",
      "endsWhen": "You take another bonus action or reaction this turn",
      "charges": "Unlimited"
    },
    "priceReason": "The syrup's rare formula and the risk it poses make it a valuable but not overpriced luxury item.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T22:58:10.216518+00:00",
    "aiReviewedAt": "2026-07-23T22:58:10.216518+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_void_essence": {
    "id": "doughnut_hole_void_essence",
    "name": "Condensed Anomaly of the Unformed",
    "description": "The Condensed Anomaly of the Unformed is a cold, obsidian sphere that hums with the raw, chaotic energy of the Doughnut Hole's unformed void. Its surface crackles with dark static, and when touched briefly, it grants you resistance to void-based attacks and conditions. However, prolonged contact may induce strange hallucinations or even lead to irresistible cravings for… more doughnuts. Handle this artifact carefully; its power is as unpredictable as the void itself.",
    "category": "premium",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "resistance_to_void_damage",
      "chance_for_brief_hallucination"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Quantum Delivery System",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Void Damage",
        "rules": "When you touch the Condensed Anomaly, you gain resistance to all damage from void-based sources for 1 minute. This effect can be triggered once per short or long rest."
      },
      {
        "title": "Brief Hallucination",
        "rules": "If you hold the item for more than a few seconds, there is a 20% chance that you will experience vivid hallucinations lasting 1d4 rounds. These visions can be resisted with a successful DC 15 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "The Condensed Anomaly requires no specific level, as it is an item of rare and mystical nature.",
    "vendorReason": "Void Vendor specializes in items related to the void and chaos, making the Condensed Anomaly a fitting addition to their collection.",
    "shippingDetail": "The item is delivered via Quantum Delivery, ensuring it arrives intact and ready for use.",
    "usage": {
      "activation": "As an action",
      "duration": "1 minute",
      "endsWhen": "The duration expires or you are hit by a void-based attack",
      "charges": "Unlimited"
    },
    "priceReason": "The Condensed Anomaly is priced at 1,000 XP due to its unique properties and the mystical energy it contains.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:59:04.281674+00:00",
    "aiReviewedAt": "2026-07-23T22:59:04.281674+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_sparking_spore": {
    "id": "mushroom_kingdom_item_sparking_spore",
    "name": "Sparking Spore Bomb",
    "description": "The Sparking Spore Bomb is a pulsating, bioluminescent mushroom encased in a tough, fungal casing. When detonated, it releases a dazzling burst of electrified spores that stun and disrupt foes within its radius. The explosion’s thunderous shockwave can be felt for miles around, making it a devastating tool on the battlefield or in the slime-infested swamps of Mushroom Kingdom. Beware, for those caught in the blast are not only stunned but also risk catching a minor fungal infection that reduces their healing effectiveness.",
    "category": "consumables",
    "price": 1000,
    "icon": "💥",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Area of Effect Stun",
      "Thunder Damage and Fungal Infection"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_spore_carrier",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Area of Effect Stun",
        "rules": "When activated, the Sparking Spore Bomb detonates in a 10-foot radius centered on its point of impact. All creatures within this area must make a DC 15 Dexterity saving throw or be stunned for 1 minute. The save is made once per creature and not at the start of each turn."
      },
      {
        "title": "Thunder Damage and Fungal Infection",
        "rules": "The explosion deals 2d6 thunder damage to all creatures in the area, along with a 30% chance that those hit will contract a minor fungal infection. The infection reduces their healing ability by half for 1 hour. There is no saving throw against this effect."
      }
    ],
    "levelRequirementReason": "The Sparking Spore Bomb requires a minimum level of 4 to ensure players are capable of handling its potent effects in combat.",
    "vendorReason": "Toad Town Market, known for its vast array of magical and practical items, regularly stocks the Sparking Spore Bomb due to its popularity among adventurers seeking effective battlefield tools.",
    "shippingDetail": "The mushroom spores are carefully packed in specialized containers to prevent premature detonation during transit. Delivery is typically within 3 days of order placement.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use",
      "charges": "Unlimited, recharged by the player between short rests"
    },
    "priceReason": "The Sparking Spore Bomb's balanced price of 1000 XP reflects its potent effects and strategic importance on the battlefield.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-24T23:59:26.374585+00:00",
    "aiReviewedAt": "2026-07-24T23:59:26.374585+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_wario_boots": {
    "id": "mushroom_kingdom_item_wario_boots",
    "name": "Wario's Slipstream Boots",
    "description": "Wario's Slipstream Boots are a pair of gleaming, forged steel footwear that radiate an unmistakable aura of Wario's mischievous craftsmanship. These boots not only enhance your speed and agility but also provide a slippery surface to slide upon, perfect for evading foes or launching into daring leaps. Their design ensures you maintain balance even on the most treacherous slopes, making them indispensable for any adventurer looking to outmaneuver their competition.",
    "category": "equipment",
    "price": 1000,
    "icon": "👟",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Increased Speed",
      "Slippery Slide"
    ],
    "vendor": "wario_direct",
    "shippedBy": "flying_mushroom",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Increased Speed",
        "rules": "When activated, these boots grant you a +10% increase in walking and running speed for the duration of your turn. This effect is active until you take a rest or are incapacitated."
      },
      {
        "title": "Slippery Slide",
        "rules": "If you fall prone while wearing these boots, they activate automatically to allow you to slide along the ground in any direction up to 10 feet. You must succeed on a DC 15 Dexterity saving throw or be knocked prone again."
      }
    ],
    "levelRequirementReason": "Wario's Slipstream Boots are crafted with Wario's unique alchemy, requiring the wearer to have already demonstrated proficiency in combat and evasion.",
    "vendorReason": "Only Wario himself can forge items that bear his signature mischievous touch and eccentric design.",
    "shippingDetail": "Shipped via a flying mushroom, ensuring swift delivery but with the risk of getting caught in a gust of wind during transit.",
    "usage": {
      "activation": "Activates as an action when you begin your turn while standing on a flat surface.",
      "duration": "Until the start of your next turn or until you take a rest.",
      "endsWhen": "You fall prone, are incapacitated, or remove them from your feet.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The boots' unique crafting by Wario and their special alchemical properties make them a rare find, justifying the price in gold pieces.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:58:51.215398+00:00",
    "aiReviewedAt": "2026-07-23T22:58:51.215398+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_golden_coin_charm": {
    "id": "mushroom_kingdom_item_golden_coin_charm",
    "name": "Golden Coin of Prosperity",
    "description": "The Golden Coin of Prosperity is a shimmering coin charm with a faint glow that whispers of ancient magic. Crafted from rare mushroom gold, it is said to have been blessed by the Mushroom King himself. Carrying this coin can increase your luck and attract small critters, both of which might lead you to hidden treasures or minor nuisances. While it won't guarantee wealth, its charm may just tip the scales in your favor during negotiations.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💰",
    "stock": 22,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Luck Boost",
      "Critter Attraction"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "snail_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Luck Boost",
        "rules": "This coin provides a +1 bonus to luck-related checks. It can be activated as a bonus action, lasts for 1 hour, and can be used once per day."
      },
      {
        "title": "Critter Attraction",
        "rules": "When worn or held in your hand, this coin attracts small critters within 30 feet that are mostly friendly. This effect is active as long as the coin remains on you or in your possession and can last up to 1 hour."
      }
    ],
    "levelRequirementReason": "This charm's magic is accessible to players of all levels, enhancing their luck without requiring high-level abilities.",
    "vendorReason": "The Koopa Shop sells a variety of magical curiosities and this coin fits well within its collection of enchanted trinkets.",
    "shippingDetail": "Delivered by the reliable Snail Delivery service, known for its punctuality in delivering valuable goods like this charm.",
    "usage": {
      "activation": "Bonus action to activate the luck boost effect; no activation required for critter attraction as long as it remains on you or in your possession.",
      "duration": "Luck Boost lasts for 1 hour and can be used once per day. Critter Attraction is active while the coin is worn or held, up to a maximum of 1 hour.",
      "endsWhen": "The effects end when the duration expires or the coin is removed from your possession.",
      "charges": "Unlimited daily uses for luck boost; critter attraction lasts as long as the coin remains on you."
    },
    "priceReason": "Balanced price reflects the charm's magical properties and its ability to enhance luck without being overpowered.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T22:59:10.911380+00:00",
    "aiReviewedAt": "2026-07-23T22:59:10.911380+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_voidshard_resonance": {
    "id": "the_edge_voidshard_resonance",
    "name": "Resonant Void Shard",
    "description": "The Resonant Void Shard is a jagged, black crystal that pulses with an unsettling glow. Its whispers echo in your mind, subtly warping your perception and making you question what is real and what isn't. This artifact amplifies your magical abilities, but at the cost of your sanity, causing confusion to enemies around you who dare too close. Holding it for too long can lead to a descent into madness.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Magic Amplification",
      "Enemy Confusion"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Magic Amplification",
        "rules": "The Resonant Void Shard increases your spell attack rolls and spell DCs by +1 per two levels, up to a maximum of +5. The effect is passive until you activate it with an action for the duration of 1 hour."
      },
      {
        "title": "Enemy Confusion",
        "rules": "Once per short rest, as an action, you can cause confusion among enemies within 30 feet. Each creature in that area must make a Wisdom saving throw (DC 15) or be incapacitated for the duration of your next turn."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level to wield due to its mystical and sanity-draining effects.",
    "vendorReason": "The abyss trader has connections with the dark forces that craft such dangerous artifacts.",
    "shippingDetail": "The shard is carefully packed in a specially reinforced container to prevent any accidental release of its chaotic energy during transit.",
    "usage": {
      "activation": "Activates as an action; ends when the duration expires or when you dismiss it as an action.",
      "duration": "1 hour",
      "endsWhen": "The duration expires, or you dismiss it as an action.",
      "charges": "Unlimited; the shard continuously recharges itself."
    },
    "priceReason": "Balanced at 1000 XP due to its unique and potentially dangerous effects that can significantly alter combat encounters.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T22:59:35.425387+00:00",
    "aiReviewedAt": "2026-07-23T22:59:35.425387+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronos_pocketwatch": {
    "id": "the_edge_chronos_pocketwatch",
    "name": "Chronos’s Pocket Watch",
    "description": "Chronos’s Pocket Watch is a meticulously crafted timepiece, its polished brass gleaming under any light. The watch face seems to pulse slightly, as if it holds secrets of the past and future within its gears. When activated, it can momentarily warp perceptions of time, making you feel like hours have passed in mere minutes or vice versa. Its minor illusion effect creates fleeting duplicates that serve as clever distractions during tense encounters.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "temporal distortion",
      "duplicative distraction"
    ],
    "vendor": "final_shop",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "As a bonus action, the wearer can activate this effect to create an illusory sensation of time dilation. For 1 minute, any creature within 30 feet who successfully perceives the area must make a DC 15 Wisdom saving throw or be disoriented for 1 round as they lose track of time."
      },
      {
        "title": "Duplicative Distraction",
        "rules": "Once per short rest, the wearer can activate this effect to create one illusory duplicate. This phantom version moves and acts like the user but cannot speak or interact with objects. The duplicate lasts until the end of the next long rest."
      }
    ],
    "levelRequirementReason": "This pocket watch requires a minimum level of 1 to wield, as its effects are subtle yet effective.",
    "vendorReason": "Final Shop deals in rare and magical curiosities that push the boundaries of time and perception, making Chronos’s Pocket Watch an ideal item for them.",
    "shippingDetail": "Delivered by a Temporal Courier, this package may arrive slightly delayed as it navigates through different temporal layers.",
    "usage": {
      "activation": "Bonus action or reaction to activate either effect.",
      "duration": "1 minute for the first effect; lasts until end of next long rest for the second effect.",
      "endsWhen": "The duration ends when the effect is used, or if the wearer is incapacitated.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The pocket watch’s mythic rarity and unique effects justify its price of 1000 XP.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T22:59:38.936023+00:00",
    "aiReviewedAt": "2026-07-23T22:59:38.936023+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_godly_echo_orb": {
    "id": "the_edge_godly_echo_orb",
    "name": "Godly Echo Orb",
    "description": "The Godly Echo Orb hums with the whispers of ancient deities, its surface etched with forgotten runes that shimmer and pulse. This artifact is a vessel for divine echoes, capable of revealing the unspoken truths of the cosmos. Handle it carefully; its touch can send even the stoutest heart into a fitful trance or a paroxysm of fear. It grants temporary resistance to fear effects and occasionally compels you to speak in forgotten tongues.",
    "category": "premium",
    "price": 1000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "Resistance to Fear",
      "Ancient Tongues"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "celestial_cartographer",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Fear",
        "rules": "The wearer gains a +5 bonus to saving throws against fear effects. This effect lasts until the end of their next turn after activation."
      },
      {
        "title": "Ancient Tongues",
        "rules": "Once per short rest, the wearer can speak in an ancient language known only to forgotten deities. There is a 20% chance that this causes a nearby NPC to become devoted and worship you for one hour. This effect has no save DC."
      }
    ],
    "levelRequirementReason": "This item requires minimal magical power, making it accessible to low-level adventurers.",
    "vendorReason": "The Edge Outpost frequently deals with rare and ancient artifacts from the far reaches of the cosmos.",
    "shippingDetail": "Shipped through a celestial courier, this item requires special handling due to its divine origin.",
    "usage": {
      "activation": "Object interaction",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after use; charges are unlimited until the next long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and mystical properties justify a moderate price.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-23T22:59:23.532553+00:00",
    "aiReviewedAt": "2026-07-23T22:59:23.532553+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_void_repair": {
    "id": "doughnut_hole_void_repair",
    "name": "Anomalous Adhesive Paste",
    "description": "Anomalous Adhesive Paste is a shimmering, sugary paste that exudes an unsettling mix of burnt sugar and void corruption. Crafted from arcane ingredients found in the shadowy corners of reality, this paste can mend fractured equipment with surprising tenacity. It temporarily grants resistance to void-based damage for 1 hour and has a chance (20%) to repair small cracks or minor damage when applied correctly. Use it cautiously; overuse risks drawing unwanted attention from the very forces you seek to mend.",
    "category": "services",
    "price": 1000,
    "icon": "🩹",
    "stock": 37,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "repair_equipment",
      "void_resistance"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Post",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Repair Equipment",
        "rules": "The paste can be applied to small fractures or minor damage on equipment. It has a 20% chance of repairing the damage successfully when used as an action."
      },
      {
        "title": "Void Resistance",
        "rules": "For 1 hour after application, the user gains resistance to all void-based damage from magical sources. This benefit lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "Crafted with arcane ingredients, this paste requires a moderate understanding of magic and reality manipulation.",
    "vendorReason": "The center seller frequently trades in items that bridge the gap between the mundane and the mystical.",
    "shippingDetail": "Ships via Dimensional Post, with a delivery time of 1d4 days.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until expended",
      "endsWhen": "The effect ends at the end of your next long rest or when it is used up.",
      "charges": "Recharge after a long rest"
    },
    "priceReason": "Balanced with its rarity and utility, this paste's price reflects its unique combination of repair and protection.",
    "priceOriginal": 1850,
    "priceReviewedAt": "2026-07-23T22:59:26.722666+00:00",
    "aiReviewedAt": "2026-07-23T22:59:26.722666+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_echoing_crumb": {
    "id": "doughnut_hole_echoing_crumb",
    "name": "Chronal Crumb of Temporal Distortion",
    "description": "The Chronal Crumb of Temporal Distortion is a shimmering, iridescent fragment that seems to hold echoes from the past. When consumed, it briefly rewinds time for its bearer by three seconds, allowing them to correct minor mistakes or snatch an extra donut. However, creating temporal paradoxes is strictly forbidden and risks unpredictable consequences. Each crumb comes with a faint chance of leaving behind a visual echo of the altered moment.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "rewind_time",
      "temporal_echo"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Gravity Shipment",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Rewind Time (3 Seconds)",
        "rules": "When consumed, this crumb allows the eater to rewind time by three seconds. This effect is instantaneous and can be used once per long rest."
      },
      {
        "title": "Temporal Echo",
        "rules": "There is a 10% chance that consuming this crumb will leave behind a visual echo of the altered moment, which persists for one round as a minor distraction."
      }
    ],
    "levelRequirementReason": "This crumb requires a minimum level to use safely and responsibly.",
    "vendorReason": "The Void Vendor specializes in curiosities that defy time and space, making this crumb a perfect fit for their stock.",
    "shippingDetail": "Due to its temporal nature, the Chronal Crumb must be shipped via Gravity Shipment to ensure it arrives intact.",
    "usage": {
      "activation": "Eating the crumb",
      "duration": "Instantaneous effect; lasts for three seconds",
      "endsWhen": "The duration ends after three seconds or when used in combat",
      "charges": "Once per long rest"
    },
    "priceReason": "This price reflects the item's rarity and the balance of power it provides.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T22:59:42.138124+00:00",
    "aiReviewedAt": "2026-07-23T22:59:42.138124+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_echoing_rune_service": {
    "id": "the_edge_echoing_rune_service",
    "name": "Echoing Rune Divination",
    "description": "The Echoing Rune Divination is a mystic service provided by the ancient spirits of The Edge, inscribed upon rune stones that hum with energy from forgotten rituals. By placing your hand on the stone, you receive a cryptic reading, a detailed yet enigmatic analysis of your current situation, offering guidance that can be both enlightening and bewildering. The runes whisper in riddles, leaving you to piece together their meaning, but beware, for their advice is often as intricate as it is profound.",
    "category": "services",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grant_foresight",
      "chance_to_receive_powerful_hint"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "spectral_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Foresight",
        "rules": "You gain advantage on one Intelligence (Arcana) or Wisdom (Insight) check of your choice. This effect is instantaneous and lasts until the start of your next turn."
      },
      {
        "title": "Chance to Receive a Powerful Hint",
        "rules": "There is a 50% chance that you receive an additional, cryptic hint during the divination session. This hint can offer significant insight but may also lead to unintended consequences if misinterpreted. The effect is instantaneous and has no save DC."
      }
    ],
    "levelRequirementReason": "This service is available to all travelers at The Edge, as it serves as a foundational tool for anyone navigating the mysteries of the region.",
    "vendorReason": "The Edge Outpost is well-known for its ties to ancient spirits and mystic artifacts, making it the perfect vendor for this service.",
    "shippingDetail": "Delivered by a spectral messenger who ensures the runes are handled with utmost care and respect for their sacred nature.",
    "usage": {
      "activation": "A bonus action to place your hand on the rune stone.",
      "duration": "Instantaneous, lasting until the start of your next turn.",
      "endsWhen": "The effect ends when you take a short or long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects the mystical energy and ancient lore involved in receiving guidance from The Edge's spirits, which is considered invaluable knowledge by all travelers.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:00:27.082018+00:00",
    "aiReviewedAt": "2026-07-23T23:00:27.082018+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_godly_heartstone": {
    "id": "the_edge_godly_heartstone",
    "name": "Godly Heartstone of the Abyss",
    "description": "This pulsating stone radiates immense power, a fragment of the abyss itself! Holding it provides incredible protection against dark energies and allows you to briefly manipulate gravity. Use with caution – this thing's got attitude!",
    "category": "equipment",
    "price": 850000,
    "icon": "🔥",
    "stock": 1,
    "rarity": "godly",
    "stockType": "back_order",
    "effects": [
      "high_defense",
      "chance_to_nullify_dark_magic",
      "minor_gravity_manipulation",
      "increased_mana_pool"
    ],
    "vendor": "final_shop",
    "shippedBy": "celestial_cart",
    "levelRequirement": 35
  },
  "grand_country_stone_echo_badge": {
    "id": "grand_country_stone_echo_badge",
    "name": "Layered Resonance Badge",
    "description": "The Layered Resonance Badge is a meticulously crafted badge etched with swirling patterns of ancient runes. Crafted by the eccentric artisan known as Echo, this artifact amplifies sound within its small radius and can detect hidden passages. It's rumored to have been created during the Festival of Echoes, when artisans from all corners gathered to celebrate sound and resonance. Use it to disrupt enemy spells or pinpoint secret routes; just don’t listen too long, for it might drive you mad!",
    "category": "equipment",
    "price": 1000,
    "icon": "🔊",
    "stock": 12,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      " Amplifies Sound",
      " Detects Hidden Passages"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_package",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Amplify Sound",
        "rules": "When activated as a bonus action within 10 feet of an enemy spellcaster, the badge amplifies ambient noise to disrupt their concentration. The spellcaster must make a Wisdom saving throw (DC 15) or lose their turn."
      },
      {
        "title": "Detect Hidden Passages",
        "rules": "Passively detects hidden passages within a 5-meter radius for 1 hour, with a +2 bonus to Perception checks made to find them. This effect is limited to once per day."
      }
    ],
    "levelRequirementReason": "Requires significant magical proficiency and control over sound energies.",
    "vendorReason": "Echo, the badge's creator, maintains a personal shop at the Layer Market where he sells his creations.",
    "shippingDetail": "Ships via Dimensional Package directly from the artisan’s workshop, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Bonus action to activate Amplify Sound; passive effect for Detect Hidden Passages.",
      "duration": "Amplify Sound is instantaneous; Detect Hidden Passages lasts 1 hour.",
      "endsWhen": "Runs out of charges or upon destruction.",
      "charges": "Unlimited, but can only be used once per day."
    },
    "priceReason": "Balanced for a rare and specialized artifact that provides tactical advantages in specific scenarios.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T22:59:54.382291+00:00",
    "aiReviewedAt": "2026-07-23T22:59:54.382291+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_wario_treasure_trove_token": {
    "id": "grand_country_wario_treasure_trove_token",
    "name": "Wario's Lucky Cartography Token",
    "description": "Wario's Lucky Cartography Token appears as a misshapen, metallic trinket adorned with Wario's signature crocodile emblem. Crafted from ancient brass and imbued with the greedy mirth of the Mushroom Kingdom’s most notorious thief, it glows intermittently, hinting at its chaotic nature. This token is said to have been blessed for those seeking buried wealth. At the start of any exploration or adventure, rolling this token grants a +1 bonus on any skill check related to finding hidden treasures, but there's always the risk that such luck might attract unwanted attention from Wario himself.",
    "category": "faction",
    "price": 1000,
    "icon": "💰",
    "stock": 80,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Treasure Hunter",
      "Chaotic Charm"
    ],
    "vendor": "side_seller",
    "shippedBy": "delivery_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Treasure Hunter",
        "rules": "When used at the start of an adventure, this token grants a +1 bonus on any skill check related to finding hidden treasures or traps. The effect lasts for one hour and is limited to once per day."
      },
      {
        "title": "Chaotic Charm",
        "rules": "There's a 20% chance that using the token will trigger an encounter with Wario, who might offer side quests or demand tribute in exchange for continued good fortune. This effect cannot be resisted and occurs every third use."
      }
    ],
    "levelRequirementReason": "This token is designed to give new adventurers a leg up without being too overpowering.",
    "vendorReason": "The side_seller specializes in unique and quirky items, including Wario's personal relics.",
    "shippingDetail": "Delivered via the delivery cart, which is known for its frequent stops and unexpected delays.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "One hour per use",
      "endsWhen": "The effect ends after one hour or when a new adventure begins.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price, the token provides a useful but not game-breaking advantage to adventurers.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T22:59:57.745878+00:00",
    "aiReviewedAt": "2026-07-23T22:59:57.745878+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_echoing_shard": {
    "id": "teyvat_item_echoing_shard",
    "name": "Resonance Fragment of Khaenri'ah",
    "description": "The Resonance Fragment of Khaenri’ah hums with the spectral echoes of forgotten lore and forbidden knowledge. When held, it grants a fleeting surge of insight, enhancing one’s intellect by +2 to Intelligence for an hour. However, prolonged contact can drive one mad, causing confusion and disorientation if not removed within 10 minutes. The fragment also subtly warms the hands of its bearer, offering a daily dose of healing over time that mends minor wounds at dawn.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grant_intellectual_burst",
      "risk_of_madness"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "winged_koi",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Intellectual Burst",
        "rules": "When the Resonance Fragment is held, it grants a +2 bonus to Intelligence for an hour. This effect can be activated once per long rest."
      },
      {
        "title": "Risk of Madness",
        "rules": "Exposure to the fragment longer than 10 minutes requires a successful DC 15 Wisdom saving throw or suffer confusion and disorientation until removed from contact with the item."
      }
    ],
    "levelRequirementReason": "This fragment is accessible to all adventurers, as it offers knowledge without requiring high levels of experience.",
    "vendorReason": "Inazuma Imports specializes in rare artifacts from the distant lands of Teyvat and this fragment hails from Khaenri’ah.",
    "shippingDetail": "Ships via a winged koi courier, known for its punctuality and delivery speed within the region.",
    "usage": {
      "activation": "Active use is achieved by holding the fragment. It provides its benefits passively while held.",
      "duration": "The knowledge surge lasts for one hour per activation.",
      "endsWhen": "Removing it from contact with the bearer ends the effect and heals any confusion or madness caused by prolonged exposure.",
      "charges": "Unlimited uses, but limited to once per long rest."
    },
    "priceReason": "The fragment’s mythic rarity and unique effects justify its price of 1000 XP.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:00:23.833159+00:00",
    "aiReviewedAt": "2026-07-23T23:00:23.833159+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_crimson_rune": {
    "id": "teyvat_item_crimson_rune",
    "name": "Bloodstone of the Dragon's Fury",
    "description": "Forged from a solidified dragon's breath, the Bloodstone of the Dragon's Fury is an ancient rune that pulses with raw elemental fury. Its crimson hue stains armor red, not only as a testament to its fiery origin but also as a fearsome display of power. When activated, it ignites enemies with searing flames and absorbs incoming fire damage, bolstering its wielder’s resilience in the heat of battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 15,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Ignite Enemies",
      "Absorb Fire Damage"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_gull",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Ignite Enemies",
        "rules": "When you activate the rune as a bonus action, there is a 50% chance that an enemy within 10 feet takes fire damage equal to your proficiency bonus x4. This effect has a recharge after each long rest."
      },
      {
        "title": "Absorb Fire Damage",
        "rules": "The rune absorbs up to 2d6 fire damage taken by the wielder during its active duration, which lasts until the start of your next turn. If this effect is triggered, you must make a DC 15 Constitution saving throw or become exhausted (reduced movement speed and disadvantage on attack rolls)."
      }
    ],
    "levelRequirementReason": "The rune's raw elemental power requires a seasoned warrior to control it effectively.",
    "vendorReason": "Liyue Harbor, known for its forge-made goods, naturally sells this artifact forged from dragon breath.",
    "shippingDetail": "Delivered by the swift sea gulls, ensuring timely arrival of this powerful rune.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until the start of your next turn",
      "endsWhen": "The start of your next turn or when you take fire damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its rarity and unique abilities, suitable for a seasoned adventurer.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-23T23:01:09.019224+00:00",
    "aiReviewedAt": "2026-07-23T23:01:09.019224+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_forbidden_scroll": {
    "id": "teyvat_item_forbidden_scroll",
    "name": "The Architect's Lament",
    "description": "Unleashed from a shrine hidden beneath the ruins of a forgotten city, 'The Architect's Lament' is a brittle scroll that whispers dark geometries and forbidden knowledge. Unfurling it causes unsettling visions to ripple across the mindscape, while the symbols themselves seem to hum with an ancient malevolence. Rumor has it that touching its geometry can cause even the most steadfast mind to falter, leading to moments of confusion or paralysis. Wario's interference only adds to the chaos, his attempts to rearrange your inventory a constant source of frustration.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💀",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Unsettling Visions",
      "Mental Foes"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "shadow_raven",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unsettling Visions",
        "rules": "When you activate 'The Architect's Lament', you and up to two allies within reach must succeed on a DC 15 Wisdom saving throw or be stunned for 1 minute. This effect ends if the target takes any damage, or if another creature of your choice touches the scroll."
      },
      {
        "title": "Mental Foes",
        "rules": "For 10 minutes after activation, you gain advantage on saving throws against charmed and frightened conditions. However, the scroll must be kept within reach during this duration; otherwise, its effects are immediately lost."
      }
    ],
    "levelRequirementReason": "The Architect's Lament requires at least level 1 to activate as it taps into complex geometric and planar energies.",
    "vendorReason": "As a relic of ancient knowledge, the scroll is traded by the mondstadt market due to its lore and potential for scholarly study.",
    "shippingDetail": "Delivered under cover of night, ensuring the secrecy of its acquisition.",
    "usage": {
      "activation": "Action",
      "duration": "10 minutes or until the effects are lost",
      "endsWhen": "Target takes damage or another creature touches it; ends if not kept within reach for mental foes effect duration",
      "charges": "Unlimited"
    },
    "priceReason": "The Architect's Lament is priced at 1000 XP, reflecting its unique combination of unsettling visions and mental fortification.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:01:12.038387+00:00",
    "aiReviewedAt": "2026-07-23T23:01:12.038387+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_claw_amulet": {
    "id": "animatopia_claw_amulet",
    "name": "The Howling Claw Amulet",
    "description": "The Howling Claw Amulet is a macabre adornment, its polished surface gleaming faintly in the dark. Crafted from the claw of an ancient Grotesque Bear that met its demise at the hands of tribal warriors, this amulet whispers tales of primal rage and fear into your soul. It not only heightens your awareness of nearby predators but also subtly itches your skin, ensuring you're always attuned to potential threats, especially when facing lesser foes who shiver in its presence.",
    "category": "equipment",
    "price": 12000,
    "icon": "🐾",
    "stock": 8,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Primal Intimidation",
      "Fearful Aura"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_parrot",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Primal Intimidation",
        "rules": "When you use an action to make a Charisma (Intimidation) check against weaker enemies, the amulet grants you advantage on the roll. Additionally, if successful, the target must save against DC 13 or be frightened for 1 minute."
      },
      {
        "title": "Fearful Aura",
        "rules": "You emit a faint growl that lasts until you attack with a melee weapon or cast a spell. This aura imposes disadvantage on saving throws and ability checks made by creatures within 30 feet of you to resist fear effects, up to three times per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to wield effectively in combat.",
    "vendorReason": "The tribal trader specializes in items imbued with ancient and powerful magic, including this amulet's bear essence.",
    "shippingDetail": "Shipped by the swift winged parrot, delivered within three days to those willing to pay extra for express service.",
    "usage": {
      "activation": "Activates with an action or as a reaction when you make a Charisma (Intimidation) check against weaker enemies.",
      "duration": "Until the end of your next turn after activation.",
      "endsWhen": "The target successfully saves, you attack, or cast a spell.",
      "charges": "Unlimited"
    },
    "priceReason": "Reflects the rare and powerful properties of the amulet, including its unique bear claw material and ancient enchantment.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:00:57.271333+00:00",
    "aiReviewedAt": "2026-07-23T23:00:57.271333+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_shadow_shard": {
    "id": "animatopia_shadow_shard",
    "name": "Whisperstone Fragment",
    "description": "A jagged fragment of solidified shadow, the Whisperstone Fragment pulses with a faint, unnerving energy that seems to hum with ancient secrets. Crafted from the nightmares of Animatopia's elders, it glows dimly in the dark, and those who gaze upon it too long risk losing sight or succumbing to madness. The fragment is said to have been harvested under strict rituals by the enigmatic Beast Bazaar, ensuring its potency remains intact.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 3,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Shadow Gaze",
      "Increased Critical Chance"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant beetle courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Gaze",
        "rules": "When a creature looks directly at the Whisperstone Fragment for more than one round, it must make a DC 15 Wisdom saving throw or be blinded until the end of its next turn. This effect can only occur once per target."
      },
      {
        "title": "Increased Critical Chance",
        "rules": "+10% to critical hit chance when using a weapon or spell. This effect lasts for one hour and cannot stack with other similar effects."
      }
    ],
    "levelRequirementReason": "The fragment's power requires a minimum level of understanding and control.",
    "vendorReason": "Only the Beast Bazaar, master of dark artifacts, could source such an item from Animatopia’s elder nightmares.",
    "shippingDetail": "Ships via giant beetle courier; delivery may take up to a week due to the fragment's sensitivity.",
    "usage": {
      "activation": "Passive effect when held or worn.",
      "duration": "Until expended or destroyed.",
      "endsWhen": "The fragment is broken, consumed by fire, or subjected to intense light for more than one minute.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a lower price due to its limited utility and the ease of acquiring similar effects through other means.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-24T23:59:56.974913+00:00",
    "aiReviewedAt": "2026-07-24T23:59:56.974913+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_godly_harmony_bell": {
    "id": "animatopia_godly_harmony_bell",
    "name": "The Resonance of Balance",
    "description": "The Resonance of Balance is a bell crafted from volcanic obsidian and enchanted with the spirits of Animatopian peacekeepers. This ancient artifact, forged deep within a dormant volcano, emits a soothing vibration that can calm even the fiercest beast. Its power extends to all allies within earshot, granting them immunity to fear and reducing nearby enemies' attack power by half for 10 minutes. Rumor has it that its ringing can also trigger beneficial events, such as healing or advantageous terrain changes.",
    "category": "premium",
    "price": 2500,
    "icon": "🔔",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Peaceful Aura",
      "Reduced Enemy Attack Power"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Peaceful Aura",
        "rules": "The Resonance of Balance grants immunity to fear effects for all allies within a 10-meter radius. The effect lasts until the end of your next turn."
      },
      {
        "title": "Reduced Enemy Attack Power",
        "rules": "Enemies within a 10-meter radius have their attack power reduced by 50% for 10 minutes, with no save required. This effect ends when the bell is silenced or if an enemy moves out of range."
      }
    ],
    "levelRequirementReason": "This bell requires a minimum character level to wield its calming power effectively.",
    "vendorReason": "The forest market deals in rare and ancient artifacts, including this enchanted bell from Animatopian lore.",
    "shippingDetail": "Delivered by a giant snail, which can take several days depending on the terrain.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous effect duration; lasts until end of next turn or bell is silenced.",
      "endsWhen": "The bell stops ringing or an enemy moves out of a 10-meter radius.",
      "charges": "Unlimited, but requires the user to be within earshot."
    },
    "priceReason": "Balanced for its godly rarity and powerful effects, this bell is priced at 2500 XP.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T23:01:16.641914+00:00",
    "aiReviewedAt": "2026-07-23T23:01:16.641914+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sticky_dough_slug": {
    "id": "leclaire_isle_item_sticky_dough_slug",
    "name": "Sticky Dough Slug",
    "description": "The Sticky Dough Slug is a plump, pastry-made creature that slithers across surfaces at an alarming speed, leaving behind a trail of sweet crumbs. This enchanted slug can momentarily attach itself to adventurers, causing them to fumble and drop their gear as it clings with surprising tenacity. A culinary marvel from the bakeshops of Le Cleraire Isle, this sticky companion is both a boon and a bane for any who dare use it in battle.",
    "category": "consumables",
    "price": 1000,
    "icon": "🐌",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Restores Health",
      "Increases Agility"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Rolling Delivery Cart",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Health Restoration",
        "rules": "The Sticky Dough Slug can be activated as an action to heal the wielder for 30 hit points. This effect is instantaneous and does not require a saving throw."
      },
      {
        "title": "Agility Boost",
        "rules": "For the next three turns, the user gains a +1 bonus to their Dexterity checks and saves. This boost is applied as a bonus action and lasts for 3 rounds without requiring concentration or additional actions."
      }
    ],
    "levelRequirementReason": "This item requires a high level of dexterity and control, making it suitable only for seasoned adventurers.",
    "vendorReason": "Dough Depot specializes in enchanted pastries and treats from Le Cleraire Isle, ensuring they have the Sticky Dough Slug available to their clientele.",
    "shippingDetail": "The Rolling Delivery Cart ensures timely delivery of the Sticky Dough Slug, often arriving at adventurers' campsites with fresh batches of sticky pastries still in tow.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous and lasts for three turns",
      "endsWhen": "The effect ends when its duration expires",
      "charges": "Unlimited, but requires a short rest to regain the Dexterity boost"
    },
    "priceReason": "The price reflects the rare ingredients and enchantment required to create this culinary marvel.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:01:41.711852+00:00",
    "aiReviewedAt": "2026-07-23T23:01:41.711852+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_golden_whisk_of_sweetness": {
    "id": "leclaire_isle_item_golden_whisk_of_sweetness",
    "name": "Golden Whisk of Sweetness",
    "description": "The Golden Whisk of Sweetness is a meticulously crafted utensil with an enchanting aura. Its handle gleams with golden filigree, and the bristles shimmer like spun sugar. This legendary tool was forged by the patron deity of confectionery, Baron Bonbon, and it amplifies magical abilities, particularly those involving desserts or confectionary arts. Legends speak of its ability to turn simple recipes into masterpieces, enhancing both the creator's skill and the outcome.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥄",
    "stock": 17,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Confectionary Mastery",
      "Sugary Aura"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Dragon Post (Highly Fragile)",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Confectionary Mastery",
        "rules": "When used as part of a confectionery-related spell or ability, the wielder gains a +20% increase to the effect. This enhancement applies only once per long rest and does not stack with similar effects."
      },
      {
        "title": "Sugary Aura",
        "rules": "The Golden Whisk emits a sugary aura that grants a +3 bonus to Charisma checks related to food or persuasion. This aura lasts for 1 hour, after which the user must make an 8th-level Wisdom saving throw or become fatigued until they rest."
      }
    ],
    "levelRequirementReason": "This item requires a minimum character level of 5 to handle its delicate and potent magic.",
    "vendorReason": "Pastry Palace is renowned for its expertise in confectionery, making it the ideal vendor for such an artifact.",
    "shippingDetail": "The item must be shipped via Dragon Post due to its delicate nature and fragile components. Handling by any other means could result in spoilage or damage.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "1 hour",
      "endsWhen": "After one hour, the aura dissipates unless reactivated within that time frame.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and magical properties justify its price of 1000 XP.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T23:01:29.907042+00:00",
    "aiReviewedAt": "2026-07-23T23:01:29.907042+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_premium_flavor_essence": {
    "id": "leclaire_isle_item_premium_flavor_essence",
    "name": "Premium Flavor Essence - Berry Blast",
    "description": "Crafted from the rarest wild berries of L'Eclaire Isle, Premium Flavor Essence – Berry Blast is a concentrated elixir that transports tasters to an immersive gustatory fantasy. For the duration of its effect, your senses heighten to detect even the subtlest nuances in sweetness and aroma. Your palette craves pastries to such an extent that you might find yourself humming the melody of 'Puff the Magic Dragon' while nibbling on a doughnut. Wario would indeed love this essence!",
    "category": "premium",
    "price": 1000,
    "icon": "🍓",
    "stock": 9,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Heightened Sensory Perception",
      "Increased Sweet Craving"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Courier Pigeon (Guaranteed Delivery)",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Heightened Sensory Perception",
        "rules": "When consumed, the imbiber gains advantage on all Perception checks related to detecting sweetness or aroma for a duration of two turns. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Increased Sweet Craving",
        "rules": "For 8 hours after consumption, the imbiber's food consumption rate increases by 50%, leading to a temporary obsession with pastries. The imbiber must make a Wisdom saving throw (DC 12) at the end of each long rest; on a failed save, they immediately consume an extra meal or pastry."
      }
    ],
    "levelRequirementReason": "Requires moderate preparation and concentration to fully appreciate its effects.",
    "vendorReason": "Sweet Supplies specializes in exotic flavorings and delicacies, making this essence a perfect fit for their inventory.",
    "shippingDetail": "Delivered within the hour with Courier Pigeon's signature speed.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "2 turns of heightened Perception, 8 hours of increased food consumption rate and sweet craving",
      "endsWhen": "Effect duration ends naturally; consumed without remainder",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considers the item's rarity and limited availability, along with its flavorful and functional benefits.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:01:47.313719+00:00",
    "aiReviewedAt": "2026-07-23T23:01:47.313719+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_acidic_notebook": {
    "id": "kivotos_item_acidic_notebook",
    "name": "The Scribbler's Ruin",
    "description": "The Scribbler's Ruin is a leather-bound notebook with a sinister edge. Its pages are lined with an eerie, glowing ink that seems to writhe and shift as you write. Upon use, the ink ignites into a harmless burst of acidic fumes that can catch unwary scribes off guard. The notebook itself has been known to spit out notes that seem to have a mind of their own, causing mild distractions in crowded places.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔥",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "spontaneous combustion",
      "mild distraction"
    ],
    "vendor": "club_supply",
    "shippedBy": "Standard Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spontaneous Combustion (On Use)",
        "rules": "When the notebook is used, a burst of harmless acidic fumes erupts. This effect deals acid damage to all creatures within 5 feet, causing 1d4 points of acid damage. The notebook can only be used once per short or long rest."
      },
      {
        "title": "Mild Distraction",
        "rules": "There is a 20% chance that the notebook will cause a distraction, forcing nearby creatures to make a DC 10 Dexterity saving throw or fall prone for 1 round. This effect has no save and ends immediately if the notebook is used again."
      }
    ],
    "levelRequirementReason": "The notebook's unpredictable nature requires basic control over one's surroundings.",
    "vendorReason": "Club Supply caters to the whimsical needs of adventurers who appreciate a touch of chaos in their lives.",
    "shippingDetail": "Ships via Standard Post, usually arrives within three days.",
    "usage": {
      "activation": "On Use",
      "duration": "Instantaneous",
      "endsWhen": "After one use per short or long rest and when the notebook is used again",
      "charges": "Uses up once per day"
    },
    "priceReason": "The Scribbler's Ruin combines chaos with a limited, strategic utility that justifies its high price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:01:46.040748+00:00",
    "aiReviewedAt": "2026-07-23T23:01:46.040748+00:00",
    "aiReviewVersion": 1
  },
  "internet_viral_boost": {
    "id": "internet_viral_boost",
    "name": "Propagation Protocol",
    "description": "Propagation Protocol is a shimmering, gel-like substance that glows with an ethereal light, pulsating in time with the digital heartbeat of the internet. This concentrated essence of viral trends can be applied to your avatar or character for a massive boost in social influence and popularity – expect likes, shares, and waves of envy from your peers. However, misuse could inadvertently spark an internet war that might spiral out of control, leading to unwanted attention and backlash.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_social_influence",
      "chance_of_viral_spread"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Packet Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increase Social Influence",
        "rules": "Apply the gel as a bonus action. The user's Charisma score is increased by +5 for 1 hour, and they gain advantage on Persuasion checks until the start of their next turn."
      },
      {
        "title": "Chance of Viral Spread",
        "rules": "Once per long rest, the user can trigger a temporary stat boost. The target gains a random temporary ability score increase (d4+1) for 30 minutes. This effect has a 25% chance to occur when used."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and players who are just starting out, offering an easy way to enhance their character's influence without requiring high-level features.",
    "vendorReason": "The cyber market specializes in cutting-edge digital and social media tools that help players thrive in the virtual world.",
    "shippingDetail": "Ships within 24 hours with a tracking number provided for easy delivery confirmation.",
    "usage": {
      "activation": "Bonus action to apply to an avatar or character.",
      "duration": "1 hour and 30 minutes, including the temporary stat boost effect.",
      "endsWhen": "The effects expire at the end of the duration or if used again before the rest.",
      "charges": "Unlimited uses; can be applied multiple times without recharging."
    },
    "priceReason": "This price reflects a balanced XP cost for an uncommon item that provides significant social advantage in gameplay.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-24T23:59:37.063841+00:00",
    "aiReviewedAt": "2026-07-24T23:59:37.063841+00:00",
    "aiReviewVersion": 1
  },
  "internet_forbidden_echo": {
    "id": "internet_forbidden_echo",
    "name": "Phantom Server Fragment",
    "description": "The Phantom Server Fragment is a cold, glassy shard that glows faintly with an eerie blue light. Crafted from the remnants of a long-lost internet server, this fragment is said to hold the whispers of countless digital souls lost in cyberspace. Touching it risks attracting malicious digital entities and warping your perception, causing visions of the internet's darkest corners to seep into your mind. Use with extreme caution; this relic is known to be cursed.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💀",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Digital Whispers",
      "Cyber Vulnerability"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Cryptic Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Digital Whispers",
        "rules": "When you activate the fragment, there's a 25% chance that it summons a harmless digital ghost that provides cryptic information related to your current task. The effect lasts for 1 hour and can be dispelled by a successful DC 14 Wisdom saving throw."
      },
      {
        "title": "Cyber Vulnerability",
        "rules": "You gain vulnerability to all magical attacks, increasing the damage taken by half. This effect persists until you complete a long rest or are disarmed of the fragment."
      }
    ],
    "levelRequirementReason": "The Phantom Server Fragment requires a level 8 character due to its cursed nature and potent effects.",
    "vendorReason": "The Data Dealer is known for dealing with rare, forbidden technology, including this fragment's origins in the lost internet.",
    "shippingDetail": "Delivery can take up to a week due to the high-risk nature of the item and its contents.",
    "usage": {
      "activation": "Activation requires an action. The effect is instantaneous once activated.",
      "duration": "Instantaneous; the effects last until dispelled or the fragment is removed from your possession.",
      "endsWhen": "The effects end when you complete a long rest, are disarmed of the fragment, or successfully dispel them with a saving throw.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Phantom Server Fragment is priced at 1000 XP due to its rare origins, potent effects, and the risk it poses.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:02:46.385430+00:00",
    "aiReviewedAt": "2026-07-23T23:02:46.385430+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_dragonscale_plate": {
    "id": "earth_land_dragonscale_plate",
    "name": "Scales of the Frost Wyrm's Ire",
    "description": "Forged from a fallen scale of a young Frost Wyrm, these gleaming Scales of the Frost Wyrm's Ire shimmer with an icy luster. Wear them to bolster your defenses against frost and ice, but beware: prolonged exposure might make you crave icy treats—seriously, don’t do that. The scales are imbued with the wyrm’s ancient power, granting resistance to cold damage and a chilling aura around you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 17,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "+3 Armor Class",
      "Resistance to Cold Damage"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "giant_snail",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "You gain resistance to cold damage. This effect lasts until the end of your next turn after removing the scales."
      },
      {
        "title": "Chilling Aura",
        "rules": "For the duration, you and friendly creatures within 5 feet of you have advantage on saving throws against effects that would impose the frozen condition. You can activate this aura as a bonus action."
      }
    ],
    "levelRequirementReason": "This armor is crafted from the scales of a young Frost Wyrm, requiring a high level to wield its ancient power.",
    "vendorReason": "The Guild Quartermaster has access to rare and exotic materials for crafting such powerful armor.",
    "shippingDetail": "Delivered by a giant snail, which can take up to three days depending on the terrain.",
    "usage": {
      "activation": "Bonus action to activate aura, removes at end of next turn after use",
      "duration": "Until the end of your next turn after removing the scales",
      "endsWhen": "At the end of your next turn after activation or removal",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity and materials used to craft these scales make this armor a valuable addition to any adventurer’s wardrobe.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:02:30.780045+00:00",
    "aiReviewedAt": "2026-07-23T23:02:30.780045+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_mythic_rune_of_stability": {
    "id": "earth_land_mythic_rune_of_stability",
    "name": "The Stabilizing Echo",
    "description": "The Stabilizing Echo is an ancient rune etched into a smooth obsidian stone, pulsing with raw magical energy that quells chaos. Crafted by forgotten wizards to restore balance, it has turned raging storms into gentle showers and calmed the most turbulent of tempests. Its protective aura can absorb 50 points of damage from chaotic sources, and its occasional bursts of light have been known to momentarily disorient foes, providing a fleeting but potent advantage in battle.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Absorbs Damage",
      "Disorients Foes"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "mythical_horse_of_wind",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Absorbs Damage",
        "rules": "Activates as an immediate reaction when exposed to chaotic damage. Absorbs up to 50 points of damage from a chaotic source. Ends if the user is no longer exposed to chaos or on their turn."
      },
      {
        "title": "Disorients Foes",
        "rules": "Emits a harmless burst of light with a range of 10 feet as an action once per short rest, causing each creature within its area to make a DC 15 Wisdom saving throw. On a failed save, the target is blinded for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires at least level 2 to wield this rune effectively and resist chaotic forces.",
    "vendorReason": "The Earth Emporium specializes in ancient artifacts that restore balance, making it the perfect vendor for The Stabilizing Echo.",
    "shippingDetail": "Delivered by a mythical horse of wind, ensuring swift and safe transport to its destination.",
    "usage": {
      "activation": "Immediate reaction or action",
      "duration": "Instantaneous; ends on the user's turn",
      "endsWhen": "On the user's next turn or when exposed to non-chaotic damage",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "The item is priced at 1000 XP as it offers significant protective and disorienting benefits without being overpowered.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T23:02:39.719587+00:00",
    "aiReviewedAt": "2026-07-23T23:02:39.719587+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_whimsical_doughnut": {
    "id": "leclaire_isle_item_whimsical_doughnut",
    "name": "Whimsical Doughnut of Delight",
    "description": "The Whimsical Doughnut of Delight is a marvelously plump confection that bounces playfully in your hands. Its sugary glaze shimmers with golden flecks, and when you bite into it, you can almost hear its delighted giggle. This oversized doughnut grants a temporary boost to Dexterity, making you nimbly agile for the duration of a short rest. It also has a mischievous streak; there's a chance that nearby enemies will be momentarily confused by your sudden gracefulness.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍩",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant temporary agility bonus",
      "chance to inflict minor confusion on enemies"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Dough Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Agility Boost",
        "rules": "When consumed, the doughnut grants you advantage on Dexterity checks and saving throws for a short rest. This effect ends when you finish your next long rest."
      },
      {
        "title": "Confusion Aura",
        "rules": "There is a 20% chance that enemies within 30 feet of you will be confused for the duration of one action, as per the Confusion spell. The save DC is 12. This effect ends when you finish your next long rest."
      }
    ],
    "levelRequirementReason": "This item's effects are beneficial but not overly powerful, making it accessible to low-level adventurers.",
    "vendorReason": "Dough Depot is renowned for its whimsical and powerful treats, from which the Whimsical Doughnut of Delight is a beloved addition.",
    "shippingDetail": "The doughnut is delivered by the efficient and reliable Dough Delivery Drone, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Eating the doughnut",
      "duration": "Until you finish your next long rest",
      "endsWhen": "You finish a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The doughnut's effects are balanced to ensure they provide significant benefit without overpowered mechanics, justifying this price in XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:02:51.071913+00:00",
    "aiReviewedAt": "2026-07-23T23:02:51.071913+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_enchanted_rolling_pin": {
    "id": "leclaire_isle_item_enchanted_rolling_pin",
    "name": "Enchanted Rolling Pin of Perfect Pastry",
    "description": "The Enchanted Rolling Pin of Perfect Pastry is a solidified sugar rolling pin forged in the heart of Leclair Isle. Crafted by a master baker, it ensures every pastry it touches turns out flawlessly—no burnt edges or collapsed layers. Its weight and balance make it a joy to wield, streamlining the pastry-making process with ease. Bakers swear that using this pin makes them feel like true artisans in their craft.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥠",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Perfect Pastries Guaranteed",
      "Increased Crafting Speed"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Magical Conveyance Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perfect Pastries Guaranteed",
        "rules": "This effect ensures all pastries made with the rolling pin turn out perfectly. No negative modifiers apply, and there is a +2 bonus to pastry crafting checks."
      },
      {
        "title": "Increased Crafting Speed",
        "rules": "Activates as an action when used in pastry-making. The user gains a +1d4 speed boost for 1 minute while using the pin."
      }
    ],
    "levelRequirementReason": "This rolling pin is designed to assist even novice bakers, making it suitable for all levels.",
    "vendorReason": "Pastry Palace specializes in baking supplies and this item perfectly complements their offerings.",
    "shippingDetail": "Delivered via the enchanted cart, which ensures safe arrival within a day of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts for 1 minute while in use.",
      "endsWhen": "The duration ends when the user stops using the rolling pin or until they make their next action.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item is priced at 1000 XP, reflecting its utility and the quality craftsmanship involved.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:02:58.533376+00:00",
    "aiReviewedAt": "2026-07-23T23:02:58.533376+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_mythic_frosting_of_eternal_chill": {
    "id": "leclaire_isle_item_mythic_frosting_of_eternal_chill",
    "name": "Frosting of Eternal Chill",
    "description": "The Frosting of Eternal Chill is a sugary concoction said to have been crafted by the Ice Dough Folk themselves. It not only sweetens but also freezes your enemies, slowing their movements and chilling them from within. Legend has it that those who partake in its effects feel a numbing cold seep into their very bones, making their actions sluggish and their resolve brittle. Wario himself recommends this as an excellent tool for crafting the perfect snowball or frosty confection.",
    "category": "consumables",
    "price": 1000,
    "icon": "🥶",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "slows movement",
      "chills soul"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Dimensional Rift Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slow Movement",
        "rules": "When consumed, the target's speed is reduced by 10 feet until the start of their next turn. This effect has no save DC and does not have a recharge."
      },
      {
        "title": "Soul Chill",
        "rules": "There is a 30% chance that upon consuming this item, the target becomes frozen, reducing their Dexterity by 2 until the end of their next turn. This effect has a save DC of 15 and can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This frosting is designed for all adventurers who wish to test its effects, making it accessible from level 1.",
    "vendorReason": "Sweet Supplies has a special arrangement with the Ice Dough Folk, allowing them to offer this rare and mystical item.",
    "shippingDetail": "Ships directly via the Dimensional Rift Portal, ensuring fast delivery straight from the frozen realms of the Ice Dough Folk.",
    "usage": {
      "activation": "Eaten as a consumable item",
      "duration": "Instantaneous; lasts until start of next turn or until used in combat",
      "endsWhen": "The effect ends at the start of the target's next turn or if they succeed on a DC 15 Constitution saving throw.",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "This item is priced moderately to reflect its mythic rarity and unique effects without overshadowing other items.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T23:03:04.824251+00:00",
    "aiReviewedAt": "2026-07-23T23:03:04.824251+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_debate_scroll": {
    "id": "kivotos_item_debate_scroll",
    "name": "Scroll of Rhetorical Ruin",
    "description": "Crafted by the prestigious Debate Club, the Scroll of Rhetorical Ruin is a delicate parchment rolled tight and sealed with an emblematic wax stamp. When unrolled in the heat of debate, it unleashes a cascade of logically precise arguments that leave your opponent speechless. The scroll's ink glows faintly when activated, hinting at the potent words within. Use it wisely—its power is both a weapon and a tool for persuasion.",
    "category": "consumables",
    "price": 1000,
    "icon": "📜",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Masterful Persuasion",
      "Opponent's Disadvantage"
    ],
    "vendor": "club_supply",
    "shippedBy": "Standard Mail",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Masterful Persuasion",
        "rules": "When you read the scroll, it grants you advantage on your next Charisma (Persuasion) check and causes your opponent to have disadvantage on their next Charisma (Deception) or Charisma (Intimidation) check. This effect lasts for 1 minute."
      },
      {
        "title": "Opponent's Disadvantage",
        "rules": "For the duration of the Masterful Persuasion effect, your opponent has disadvantage on any Charisma (Deception) or Charisma (Intimidation) checks they attempt against you. This effect ends when it is countered by a successful counter-argument check."
      }
    ],
    "levelRequirementReason": "The Scroll of Rhetorical Ruin requires at least second-level proficiency in Deception or Persuasion to effectively use its persuasive power.",
    "vendorReason": "The Debate Club exclusively supplies scrolls that enhance their members' debating prowess.",
    "shippingDetail": "Delivered within a week, with no special handling required for this delicate artifact.",
    "usage": {
      "activation": "Reading the scroll during a verbal challenge allows you to use its effects.",
      "duration": "1 minute per activation.",
      "endsWhen": "Disadvantage on counter-argument checks or when countered by an opponent's successful persuasion attempt.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Scroll of Rhetorical Ruin is priced at 1000 XP, reflecting its rare crafting and potent effects in the realm of verbal combat.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-24T23:59:59.738635+00:00",
    "aiReviewedAt": "2026-07-24T23:59:59.738635+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_academy_crest": {
    "id": "kivotos_item_academy_crest",
    "name": "Academy Crest of Scholarly Recognition",
    "description": "The Academy Crest of Scholarly Recognition is a gleaming silver insignia inlaid with ancient runes, a symbol of your unwavering dedication to the rigorous studies at the heart of the academy. Worn openly, it commands respect and admiration from peers but can also attract curious glances or even academic scrutiny. This emblem grants you a +1 bonus to reputation checks with the faculty and provides advantage on saving throws against academic criticism, ensuring your scholarly integrity remains unchallenged.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎓",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Academic Respect",
      "Scholarly Shield"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Academic Respect",
        "rules": "When you perform an action that requires a reputation check with the faculty, you gain advantage on the roll. Additionally, your character sheet now includes the title 'Scholar'. This effect lasts until the end of each day."
      },
      {
        "title": "Scholarly Shield",
        "rules": "You have advantage on saving throws against effects that target you for academic criticism or disapproval. This benefit persists until you take a long rest."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners who are just starting their scholarly journey and need the support of the academy’s respect.",
    "vendorReason": "The academy armory stocks this emblem as a way to honor students' dedication and academic achievements.",
    "shippingDetail": "Ships within three days, delivered by trusted courier.",
    "usage": {
      "activation": "Passive effect; no activation needed.",
      "duration": "Lasts until the end of each day or until you take a long rest for 'Scholarly Shield'.",
      "endsWhen": "The effects dissipate at the end of the day unless you take a long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects its rarity and the significant benefit it provides to a student's reputation and academic standing within the academy.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T23:03:56.581479+00:00",
    "aiReviewedAt": "2026-07-23T23:03:56.581479+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_sticky_mushroom": {
    "id": "mushroom_kingdom_item_sticky_mushroom",
    "name": "Gooey Grotto Growth Pod",
    "description": "The Gooey Grotto Growth Pod radiates a pulsating glow, its surface covered in shimmering goo that seems to hum with life. Upon consumption, your body is temporarily enwreathed in a gelatinous sheen that grants you the agility of a squirrel and the tenacity of a spider. Your grip on surfaces becomes as strong as steel, allowing you to cling to walls like a barnacle or leap higher than ever before. Be warned: the urge to collect shiny objects is irresistible, potentially leading to mischievous behavior and an unexpected hoard of coins.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍄",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Adhesive Climb",
      "Enhanced Agility"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Adhesive Climb",
        "rules": "For the duration of your next short rest, you gain a +2 bonus to Dexterity (Acrobatics) checks and advantage on Strength (Athletics) checks made to climb. You also have advantage on saving throws against being restrained or knocked prone."
      },
      {
        "title": "Enhanced Agility",
        "rules": "You can jump up to 5 feet higher than normal, but you lose this ability if you take damage during your turn. If you use an action to consume the pod, it regenerates a charge after a short rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who need a boost in dexterity and climbing skills.",
    "vendorReason": "Toad Town Market sells a wide range of potions and consumables that cater to adventurers seeking immediate advantages, making the Gooey Grotto Growth Pod an ideal addition.",
    "shippingDetail": "Shipped via the mushroom cart, this item is delivered fresh and ready for consumption upon arrival.",
    "usage": {
      "activation": "Eating the pod as a bonus action grants its effects immediately.",
      "duration": "Until the start of your next turn after a short rest.",
      "endsWhen": "If you take damage during your turn, this effect ends.",
      "charges": "Unlimited; regenerates one charge after a short rest."
    },
    "priceReason": "The Gooey Grotto Growth Pod is priced at 1000 XP for its unique combination of temporary adhesive properties, enhanced agility, and the challenge it presents to resist collecting shiny objects.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T23:03:37.521102+00:00",
    "aiReviewedAt": "2026-07-23T23:03:37.521102+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_mythic_coin_of_chaos": {
    "id": "mushroom_kingdom_item_mythic_coin_of_chaos",
    "name": "Wario's Wild Wealth Coin",
    "description": "Wario's Wild Wealth Coin, forged from solidified chaos and encased in a cold, metallic sheen that hints at its volatile nature, is a coin of insatiable greed. When used in a transaction, it may grant you temporary invulnerability, causing all attacks to glance off harmlessly for the next turn, or it might send the merchant fleeing in a puff of smoke, leaving you with an unexpected windfall. The coin's unpredictable nature ensures that every use is a gamble, but its allure remains irresistible.",
    "category": "premium",
    "price": 1000,
    "icon": "💰",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "temporary_invulnerability",
      "teleport_merchant"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Invulnerability",
        "rules": "When used in a transaction, there is a 50% chance that the coin grants you temporary invulnerability for one round. This effect ends if you take any damage or if the transaction fails."
      },
      {
        "title": "Teleport Merchant",
        "rules": "There's a 25% chance that using this coin in a transaction teleports the merchant to another location, leaving behind a puff of smoke and an unexpected windfall. The merchant reappears after one hour or until they return to their original location."
      }
    ],
    "levelRequirementReason": "This coin's chaotic nature makes it accessible even to low-level characters, though its unpredictable effects can be dangerous.",
    "vendorReason": "The Koopa Shop specializes in quirky and unpredictable items, making this coin a perfect fit for their inventory.",
    "shippingDetail": "Delivered by a grumpy dragon who may or may not drop in for a visit while delivering the coin.",
    "usage": {
      "activation": "On use during a transaction",
      "duration": "Instantaneous, lasting one round if successful",
      "endsWhen": "The effect ends after one round of invulnerability or if the merchant is teleported and reappears elsewhere",
      "charges": "Unlimited uses"
    },
    "priceReason": "While not overly powerful, the coin's unpredictable nature and mythic rarity justify its moderate price.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:03:49.603440+00:00",
    "aiReviewedAt": "2026-07-23T23:03:49.603440+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_shadowfang_dagger": {
    "id": "midlands_item_shadowfang_dagger",
    "name": "Whisperwind Dagger",
    "description": "The Whisperwind Dagger is a rare find forged deep within an ancient dwarven ruin. Its blade seems to absorb light, casting shadows that follow its movements like living entities. This dagger promises swift, silent death, or at least an encounter with the shadow realm. When wielded in concealment, it grants +1 to Stealth checks and has a 30% chance of inflicting 'shadowed' status on enemies, reducing their visibility by half.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔪",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Absorbs Light",
      "Shadowed Status"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "winged courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Absorbs Light",
        "rules": "The dagger's blade absorbs ambient light, making it nearly invisible in dark environments. This effect does not grant invisibility but reduces the target’s ability to see you by half when within 10 feet."
      },
      {
        "title": "Shadowed Status",
        "rules": "When a creature is hit with an attack from the Whisperwind Dagger while within concealment, there is a 30% chance it becomes 'shadowed'. A shadowed target has its Dexterity saving throw DC increased by +2 for 1 hour. This effect can only occur once per target per long rest."
      }
    ],
    "levelRequirementReason": "The intricate forging and dark magic imbued in the Whisperwind Dagger make it suitable only for experienced adventurers.",
    "vendorReason": "Master Forgemaster Kragg, a relic hunter with deep ties to dwarven lore, ensures that only those truly deserving can wield such an ancient and powerful weapon.",
    "shippingDetail": "The dagger is delivered by a winged courier, ensuring it reaches its destination swiftly and securely.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous effect; lasts until the end of the target's next turn if they fail their saving throw.",
      "endsWhen": "On a successful Dexterity saving throw or when used against an immune creature.",
      "charges": "Unlimited, recharged after a long rest."
    },
    "priceReason": "The rare materials and dark magic required for its forging make the Whisperwind Dagger a valuable yet balanced find.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T23:03:56.495975+00:00",
    "aiReviewedAt": "2026-07-23T23:03:56.495975+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_chronal_amulet": {
    "id": "midlands_item_chronal_amulet",
    "name": "The Shifting Moment",
    "description": "The Shifting Moment amulet pulses with a strange, temporal energy. Its core glows with an ethereal light that shifts between hues of blue and green. Crafted from ancient chronal fragments found in the ruins of Eldoria, this amulet grants brief glimpses into potential futures, each revealing a random future event or consequence. It also allows the wearer to momentarily rewind time by 3 seconds, buying precious moments for strategic advantage.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Insight",
      "Chronological Rewind"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "magical portal",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Temporal Insight",
        "rules": "Once per day, you gain a brief glimpse into the potential future. This reveals a random event or consequence that could unfold in your immediate vicinity within the next hour. The DM chooses an effect, which is either beneficial, detrimental, or neutral."
      },
      {
        "title": "Chronological Rewind",
        "rules": "As a bonus action, you can rewind time by 3 seconds, allowing you to react instantaneously to a threat. This effect has no range and does not require a save. The amulet can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The complexity of mastering temporal magic requires significant experience.",
    "vendorReason": "The Empire Exchange deals in rare and ancient artifacts, including items with unique historical significance like the Shifting Moment.",
    "shippingDetail": "Delivered through a magical portal, ensuring swift arrival without the risk of damage.",
    "usage": {
      "activation": "Bonus action or as a reaction to a threat",
      "duration": "Instantaneous",
      "endsWhen": "Used once per short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's rarity and the arcane power it commands justify its modest price.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:04:10.128415+00:00",
    "aiReviewedAt": "2026-07-23T23:04:10.128415+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_echoing_ritual": {
    "id": "the_edge_echoing_ritual",
    "name": "Echoing Ritual of Whispering Sands",
    "description": "The Echoing Ritual of Whispering Sands is a fragile, bone-laden artifact encased in shifting dunes of sand. Crafted from ancient desert bones and whispered with tales of lost kingdoms, it grants brief glimpses into the sands of time. This ritual allows you to see the next attack of an enemy as if through a mirage, but beware—these visions are often clouded by whimsical distractions involving Wario's insatiable greed for treasure. Use this item wisely; its power is fleeting yet potent.",
    "category": "services",
    "price": 1000,
    "icon": "🔮",
    "stock": 28,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "sight into future",
      "+5 insight bonus"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "scroll_of_visions",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sight into Future",
        "rules": "As a reaction, you can attempt to glimpse the next attack of an enemy within 30 feet. You have advantage on your Insight check to discern their intended action. The effect ends if you are incapacitated or if the targeted creature attacks another target."
      },
      {
        "title": "+5 Insight Bonus",
        "rules": "For the duration of this ritual, you gain a +5 bonus to Insight checks. This effect lasts for two turns and is exhausted after use."
      }
    ],
    "levelRequirementReason": "The ritual's power demands focus, but not mastery.",
    "vendorReason": "Edge Outpost deals in exotic artifacts from the shifting sands of time.",
    "shippingDetail": "Shipped via a scroll of visions, delivery is swift and reliable.",
    "usage": {
      "activation": "Reaction to an enemy's action",
      "duration": "Until the start of your next turn after activation or when you are incapacitated",
      "endsWhen": "You are incapacitated or the targeted creature attacks another target",
      "charges": "Unlimited, but only one use per combat"
    },
    "priceReason": "The ritual's unpredictable nature and ancient crafting make it a valuable tool for adventurers.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T23:04:16.500969+00:00",
    "aiReviewedAt": "2026-07-23T23:04:16.500969+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_obsidian_eye": {
    "id": "the_edge_obsidian_eye",
    "name": "Obsidian Eye of the Abyss Gazer",
    "description": "The Obsidian Eye of the Abyss Gazer is a hauntingly lifelike ocular appendage, its black surface etched with ancient runes that seem to shimmer with a dark vitality. This unsettling gaze grants you an eerie degree of darkvision, allowing you to see in the deepest shadows as if they were twilight. When you wear it, the eye also provides a soothing barrier against psychic attacks, reducing their potency by 15%. It appears to follow your every move, as if alive with a malevolent awareness.",
    "category": "equipment",
    "price": 1000,
    "icon": "👁️",
    "stock": 9,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "darkvision: 30m",
      "resistance: psychic 15%"
    ],
    "vendor": "final_shop",
    "shippedBy": "shadow_delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Darkvision",
        "rules": "While wearing the Obsidian Eye of the Abyss Gazer, you gain darkvision out to a range of 30 feet. This ability is passive and does not require an action."
      },
      {
        "title": "Psychic Resistance",
        "rules": "The eye provides resistance against psychic damage equal to your level +5. You can use this resistance once per short or long rest, expending a charge from the item's internal reservoir."
      }
    ],
    "levelRequirementReason": "Only those of sufficient experience and mental fortitude are deemed worthy to wield such a powerful artifact.",
    "vendorReason": "Final Shop specializes in rare artifacts, relics, and items that push the boundaries of the arcane. The Obsidian Eye fits perfectly into their eclectic selection.",
    "shippingDetail": "Shadow Delivery ensures expedited delivery through its network of shadowy couriers, guaranteeing the artifact arrives safely within a week.",
    "usage": {
      "activation": "Passive effect when worn; use once per short or long rest to activate psychic resistance.",
      "duration": "Active until expended or removed",
      "endsWhen": "Exhausted after one use per day or removed from your person",
      "charges": "Unlimited, recharged with a short or long rest"
    },
    "priceReason": "The item's rarity and the complex runes etched into its surface justify this price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:04:30.734931+00:00",
    "aiReviewedAt": "2026-07-23T23:04:30.734931+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_student_scroll_of_minor_illusion": {
    "id": "kivotos_item_student_scroll_of_minor_illusion",
    "name": "Student Scroll of Minor Illusion",
    "description": "This unassuming scroll, a relic of student pranks, holds within its parchment the power to create minor illusions that vanish as quickly as they appear. Ideal for luring rivals into false visions or setting up fleeting misdirections, it's perfect for those who wish to play tricks without drawing too much attention. The illusion can only manifest as something small and harmless, like a misplaced coin or a fleeting shadow, but the timing is everything—once cast, it vanishes after just three rounds of mischief.",
    "category": "consumables",
    "price": 1000,
    "icon": "🪄",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Minor Illusion",
      "Brief Duration"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Illusion",
        "rules": "The scroll creates an illusion that can be seen only by a creature within 30 feet of the target. The illusion lasts for up to three rounds and is limited to something small and harmless, such as a coin or shadow."
      },
      {
        "title": "Brief Duration",
        "rules": "Once cast, the illusion vanishes after three rounds unless dispelled by an opponent with a successful DC 13 Wisdom (Perception) check. The scroll can be used only once before it is consumed."
      }
    ],
    "levelRequirementReason": "The spell's simplicity and minor effects necessitate no higher level for use.",
    "vendorReason": "As this item caters primarily to pranks among students, the student store is the natural vendor for such whimsical items.",
    "shippingDetail": "Ships via standard mail within two days of purchase.",
    "usage": {
      "activation": "Read and use as an action.",
      "duration": "Up to three rounds, lasting until the end of the third round or dispelled.",
      "endsWhen": "The illusion ends after three rounds or is dispelled by a creature with a successful Wisdom (Perception) check.",
      "charges": "One charge; consumed upon use."
    },
    "priceReason": "This price reflects the scroll's rarity and the spell's utility for pranks, balancing its limited duration and effect.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T23:04:48.502644+00:00",
    "aiReviewedAt": "2026-07-23T23:04:48.502644+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_performance_enhancing_tonic": {
    "id": "kivotos_item_performance_enhancing_tonic",
    "name": "Performance Enhancing Tonic (Student Edition)",
    "description": "Pauline's Microphone is a sleek, chrome device that appears to be a modern-day wireless microphone. Crafted from a mix of polished metal and gleaming plastic, it exudes an aura of professional performance. This Student Edition tonic is a vibrant, electric blue concoction meant for aspiring performers. It's said to boost your focus and reflexes, but the real magic lies in its unpredictable effects—chances of rolling double on skill checks (10%) and a dash of uncontrollable twitching that can be both comical and distracting.",
    "category": "premium",
    "price": 1000,
    "icon": "🧪",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "+2 Dexterity",
      "10% chance to roll double on performance-related checks"
    ],
    "vendor": "club_supply",
    "shippedBy": "night_only express courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Focus and Reflexes",
        "rules": "Consume the tonic as a bonus action. You gain a +2 bonus to Dexterity for 1 minute. This effect ends early if you are incapacitated or if you take a long rest."
      },
      {
        "title": "Performance Boost",
        "rules": "After consuming, there is a 10% chance that your next performance-related ability check will be rolled twice and the higher result used. This effect can only trigger once per short or long rest."
      }
    ],
    "levelRequirementReason": "The tonic’s effects are designed to aid beginners, providing a boost without overwhelming more experienced performers.",
    "vendorReason": "Club Supply specializes in items that enhance performance and creativity, making Pauline's Microphone a perfect fit for their inventory.",
    "shippingDetail": "Delivered exclusively during the night by the Night Courier Express Service, ensuring the tonic remains potent until use.",
    "usage": {
      "activation": "Bonus action to consume the tonic",
      "duration": "+2 Dexterity for 1 minute",
      "endsWhen": "Incapacitation or taking a long rest; one chance per short or long rest for performance boost",
      "charges": "Unlimited uses"
    },
    "priceReason": "The tonic is priced at 1000 XP, reflecting its balanced effect and rarity as an epic item.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:04:52.288801+00:00",
    "aiReviewedAt": "2026-07-23T23:04:52.288801+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_harmony_amulet": {
    "id": "equestria_item_harmony_amulet",
    "name": "The Amulet of Perfect Harmony",
    "description": "The Amulet of Perfect Harmony is a delicate, heart-shaped pendant forged in the grand forges of Canterlot. Crafted from pure Equestrian silver and adorned with a single crystal that pulses with calming magic, it radiates an aura that quiets even the most unruly hooves. Legends speak of its power to settle disputes and calm the wildest hearts, granting those who wear it a serene presence and the ability to inspire others through their very essence.",
    "category": "premium",
    "price": 1000,
    "icon": "☮️",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "godly",
    "effects": [
      "calm_aura",
      "charisma_boost"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "royal_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Calm Aura",
        "rules": "The Amulet of Perfect Harmony grants a calm aura within a 10-foot radius. Any hostile creature within this area must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute, unless they are immune to being frightened."
      },
      {
        "title": "Charisma Boost",
        "rules": "The wearer of the Amulet gains a +2 bonus to their Charisma (Personality) checks and saves. This effect is always active while wearing the amulet."
      }
    ],
    "levelRequirementReason": "This amulet can be worn by any pony, but its power increases with experience.",
    "vendorReason": "The Crystal Empire is known for its mastery of precious metals and magic, making it the ideal vendor for such a powerful artifact.",
    "shippingDetail": "The amulet arrives with utmost care, delivered by the Royal Messenger, ensuring safe passage through even the most turbulent lands.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous (aura), permanent charisma boost while worn",
      "endsWhen": "Removing the amulet stops its effects",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's rarity and magical properties justify a moderate price in XP, as it is both powerful and versatile.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-23T23:05:12.105968+00:00",
    "aiReviewedAt": "2026-07-23T23:05:12.105968+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_stormshield": {
    "id": "the_edge_stormshield",
    "name": "Stormforged Aegis",
    "description": "The Stormforged Aegis, forged from the very essence of a forgotten god's tears and solidified lightning, creates an impenetrable barrier that repels both mundane and arcane attacks with terrifying efficiency. Its surface crackles with electric energy, and those who dare too close find themselves ensnared in its tempestuous embrace. This shield not only grants +2 to armor class but also has a 15% chance to discharge a minor lightning bolt upon impact, stunning foes and leaving them vulnerable.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Elemental Absorption",
      "Staggering Stance"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Sky Serpent Delivery",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Elemental Absorption",
        "rules": "The Stormforged Aegis absorbs up to 30% of the damage from elemental attacks, reducing their effectiveness. This effect occurs only once per attack and has no save DC."
      },
      {
        "title": "Staggering Stance",
        "rules": "When an enemy makes a melee attack against you while wearing the Stormforged Aegis, there is a 15% chance that you will discharge a minor lightning bolt (2d6 thunder damage) as a reaction. The target must succeed on a Dexterity saving throw (DC 14) or be stunned for one round."
      }
    ],
    "levelRequirementReason": "The Stormforged Aegis requires high-level expertise to wield its powerful and unpredictable effects.",
    "vendorReason": "Edge Outpost specializes in rare, ancient artifacts that provide unparalleled protection against elemental threats.",
    "shippingDetail": "The shield arrives encased in a protective lightning field to prevent accidental discharge during transit.",
    "usage": {
      "activation": "Passive and reacts on contact with enemy melee attacks.",
      "duration": "Instantaneous for each attack absorbed or discharged.",
      "endsWhen": "Exhausted after absorbing damage from three elemental attacks or discharging the lightning bolt effect twice.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "The Stormforged Aegis is priced at 1000 XP due to its rare materials and the unpredictable nature of its elemental discharge.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:05:02.505731+00:00",
    "aiReviewedAt": "2026-07-23T23:05:02.505731+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_void_berry": {
    "id": "the_edge_void_berry",
    "name": "Void-Touched Ambrosia",
    "description": "The Void-Touched Ambrosia, a peculiar berry that glows with an ethereal light, tastes of regret and the crushing weight of infinite space. Its consumption grants 20 hit points, but also leaves you haunted by fleeting hallucinations of nothingness, compelling you to seek out the void's embrace. The berries' origin is shrouded in mystery, said to have been plucked from a tree that grows at the edge of existence itself.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍇",
    "stock": 70,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Restores Hit Points",
      "Hallucination Propensity"
    ],
    "vendor": "final_shop",
    "shippedBy": "Standard Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Hit Points",
        "rules": "When consumed, this berry instantly restores 20 hit points. The effect is immediate and does not require an action."
      },
      {
        "title": "Hallucination Propensity",
        "rules": "There is a 10% chance each round that you experience a brief hallucination of the void, causing you to stagger for one round and reducing your movement speed by -2 feet. This effect ends when you successfully save against it (DC 13). You can only be affected once per short or long rest."
      }
    ],
    "levelRequirementReason": "The berry's effects are potent but not overwhelming, suitable for adventurers of any level who might need a quick boost in combat.",
    "vendorReason": "Final Shop stocks rare and exotic items that cater to the most discerning adventurers, including this mysterious berry from the outer realms.",
    "shippingDetail": "The berries are shipped within a special container designed to preserve their ethereal glow. Shipping may take an extra day due to the need for careful handling.",
    "usage": {
      "activation": "Instantaneous consumption",
      "duration": "Single use, effect lasts until saved against or until the hallucination ends naturally",
      "endsWhen": "Successfully saving against the hallucination (DC 13) or at the end of your next turn if not saved",
      "charges": "Unlimited"
    },
    "priceReason": "The Void-Touched Ambrosia's price reflects its rarity and the power it wields, balancing the immediate hit point restoration with the potential for debilitating hallucinations.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:05:18.346313+00:00",
    "aiReviewedAt": "2026-07-23T23:05:18.346313+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_ironclad_gauntlet": {
    "id": "the_edge_ironclad_gauntlet",
    "name": "Ironclad Gauntlet of Resilience",
    "description": "The Ironclad Gauntlet of Resilience is a gauntlet forged from the molten remains of a shattered reality. Its surface glows faintly with an inner cold, and the steel feels like it's made from starlight itself. Warriors who have worn this gauntlet report feeling invigorated by its touch, as if they can shrug off even the harshest blows. The gauntlets are said to have been crafted by forges that burn beyond mortal comprehension, and their resilience is unmatched in any other armor piece.",
    "category": "equipment",
    "price": 1000,
    "icon": "💪",
    "stock": 15,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased_armor",
      "cold_resistance"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "swift courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Increased Armor",
        "rules": "While wearing the gauntlets, your AC increases by 2 as long as you are not wearing heavy armor. This effect does not stack with any other source of increased armor."
      },
      {
        "title": "Cold Resistance",
        "rules": "You have resistance to cold damage while wearing these gauntlets. Additionally, if you take cold damage from a creature or an attack that deals cold damage, there is a 50% chance (DC 14) that the attacker becomes paralyzed for 1 minute."
      }
    ],
    "levelRequirementReason": "The gauntlets require a higher level to use effectively since they interact with the wearer's body and reality in profound ways.",
    "vendorReason": "Edge Outpost is known for dealing in rare, exotic items that are difficult to find elsewhere, making this gauntlet a perfect fit.",
    "shippingDetail": "The swift courier ensures the gauntlets arrive in pristine condition, often delivering them within a day of purchase.",
    "usage": {
      "activation": "Wearing the gauntlets is an action that provides their benefits immediately.",
      "duration": "Permanent while worn, until removed or destroyed.",
      "endsWhen": "The gauntlets are destroyed by magical means or if the wearer removes them.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rare material and unique abilities that provide significant battlefield advantages.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T23:05:10.160517+00:00",
    "aiReviewedAt": "2026-07-23T23:05:10.160517+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_echoing_scroll": {
    "id": "the_edge_echoing_scroll",
    "name": "Echoing Scroll of Lost Directions",
    "description": "The Echoing Scroll of Lost Directions hums softly, its parchment worn from centuries of use. When unfurled, it projects faint images—ghostly echoes of forgotten pathways and voices long silenced by time. Its ancient ink glows with an otherworldly light as it reveals hidden routes and whispers secrets of the past, but beware: those who rely too heavily on its guidance might find themselves caught in the labyrinthine folds of The Edge’s mysteries.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "revelations_of_the_past",
      "temporary_navigation_buff"
    ],
    "vendor": "final_shop",
    "shippedBy": "air_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Revelations of the Past",
        "rules": "When activated, the scroll reveals hidden routes and ancient knowledge. It provides a +2 bonus to Wisdom (Perception) checks for searching the area or discerning history. The effect lasts until the end of your next long rest."
      },
      {
        "title": "Temporary Navigation Buff",
        "rules": "For 1 hour after activation, you gain advantage on all navigation and survival checks within a 5-mile radius. This benefit ends if you fall unconscious or are incapacitated."
      }
    ],
    "levelRequirementReason": "This scroll is designed for travelers who need guidance but may not yet have the experience to navigate dangerous terrain.",
    "vendorReason": "Final Shop caters to adventurers seeking relics and artifacts that can help them in their journeys, making this scroll a fitting addition.",
    "shippingDetail": "The Echoing Scroll is carefully packed for air shipment, ensuring it reaches its destination intact and undisturbed by the perils of The Edge.",
    "usage": {
      "activation": "Requires reading aloud a specific incantation.",
      "duration": "Until the end of your next long rest or until you fall unconscious.",
      "endsWhen": "If you fall unconscious or are incapacitated during its duration.",
      "charges": "Unlimited, but limited to one use per day."
    },
    "priceReason": "The Echoing Scroll’s price reflects the ancient magic and knowledge it holds, making it a valuable tool for any explorer.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:05:22.477460+00:00",
    "aiReviewedAt": "2026-07-23T23:05:22.477460+00:00",
    "aiReviewVersion": 1
  }
};
