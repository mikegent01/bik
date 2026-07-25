// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_071 = {
  "earth_land_dragonscale_oil": {
    "id": "earth_land_dragonscale_oil",
    "name": "Dragonscale Lubricant",
    "description": "Dragonscale Lubricant, a shimmering oil extracted from the shed scales of ancient dragons, is more than just a mechanical marvel—it's a testament to nature’s ingenuity. Crafted in the Earth Emporium, this oil reduces friction and enhances device efficiency by up to 25%, making even the most complex machinery hum with renewed vigor. Perfect for Wario’s latest inventions, it also extends item durability by 10% upon application, ensuring longevity and reliability in every use.",
    "category": "consumables",
    "price": 4200,
    "icon": "⚙️",
    "stock": 88,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Efficiency",
      "Increased Durability"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Efficiency",
        "rules": "When applied to a mechanical device, Dragonscale Lubricant reduces friction by up to 25%, increasing its operational efficiency. This effect is instantaneous and lasts until the next daily dawn."
      },
      {
        "title": "Increased Durability",
        "rules": "Upon application, the target item's durability is increased by 10%. This improvement does not expire but requires a full night of rest to take full effect."
      }
    ],
    "levelRequirementReason": "This lubricant is accessible to all adventurers who can appreciate its value in maintaining their equipment.",
    "vendorReason": "The Earth Emporium specializes in crafting items that enhance the natural world, making Dragonscale Lubricant a fitting addition to their inventory.",
    "shippingDetail": "Delivered by a slow but reliable giant snail, ensuring it reaches its destination without spillage or mishap.",
    "usage": {
      "activation": "Apply as an action.",
      "duration": "Instantaneous effect; lasts until the next daily dawn for enhanced efficiency. Lasts indefinitely with increased durability.",
      "endsWhen": "Effect of enhanced efficiency ends at sunrise. Increased durability requires rest and time to take full effect.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced XP price reflects the oil's dual benefits, enhancing both short-term performance and long-term item integrity.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:32:32.342521+00:00",
    "aiReviewedAt": "2026-07-25T00:32:32.342521+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_guild_negotiation_scroll": {
    "id": "earth_land_guild_negotiation_scroll",
    "name": "Guild Negotiation Scroll",
    "description": "The Guild Negotiation Scroll is a parchment of ancient design, embellished with sigils that whisper the secrets of successful diplomacy. Crafted by master scribes from the Earth Land Guild, it imbues its bearer with unparalleled persuasion skills and a subtle aura that can turn even the most contentious negotiations into amicable agreements. With this scroll, you gain an advantage in all negotiation attempts, ensuring smoother deals and fewer disputes... until the tension escalates to combat.",
    "category": "services",
    "price": 1000,
    "icon": "🤝",
    "stock": 52,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "advantage_on_negotiation",
      "dodges_combat_with_diplomacy"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "swift_raven_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Negotiation",
        "rules": "When you attempt a negotiation, you gain advantage on the roll. This effect lasts until an argument escalates to physical conflict."
      },
      {
        "title": "Dodges Combat with Diplomacy",
        "rules": "If you successfully use diplomacy and avoid combat, this scroll can be used once per long rest, allowing you to dodge a fight by resolving matters peacefully."
      }
    ],
    "levelRequirementReason": "This basic skill-enhancing tool is accessible to all adventurers seeking to improve their social interactions.",
    "vendorReason": "The Guild Quartermaster sells this scroll as a foundational tool for any guild member or adventurer looking to enhance their negotiation prowess.",
    "shippingDetail": "Ships via swift raven messenger, arriving within one week of purchase.",
    "usage": {
      "activation": "Passive effect during negotiations; once per long rest to dodge combat.",
      "duration": "Until argument escalates or used to dodge combat.",
      "endsWhen": "After a successful diplomacy check to avoid combat or until the negotiation turns violent.",
      "charges": "Unlimited, but only one use per long rest."
    },
    "priceReason": "The scroll's value lies in its unique combination of diplomatic prowess and conflict avoidance, making it a sought-after asset for any adventuring party.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:32:18.346949+00:00",
    "aiReviewedAt": "2026-07-25T00:32:18.346949+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_whispering_shard": {
    "id": "the_edge_item_whispering_shard",
    "name": "Whispering Shard of the Void",
    "description": "The Whispering Shard of the Void glimmers with an eerie, obsidian hue, its jagged edges etched with runes that whisper enigmatic truths when touched. This shard grants fleeting insights into impossible geometries and forgotten dimensions, providing a +5 bonus to Intimidation checks. With each use, it casts a ripple in reality, potentially confusing foes for two turns or granting a minor chance of madness for one turn, depending on the observer's resolve.",
    "category": "curiosities",
    "price": 280,
    "icon": "🔮",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Confusion",
      "Madness"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Confusion",
        "rules": "When activated as an action, the shard casts a ripple in reality. The target must succeed on a DC 15 Wisdom saving throw or be confused for two turns, during which time they have disadvantage on attack rolls and ability checks."
      },
      {
        "title": "Madness",
        "rules": "There's a 20% chance that using the shard grants temporary madness. The target must succeed on a DC 15 Wisdom saving throw or gain one level of temporary madness for one turn, during which time they are incapacitated and can't take actions."
      }
    ],
    "levelRequirementReason": "The shard's power is potent but not overwhelming, making it accessible to first-level characters who can handle its risks.",
    "vendorReason": "The Abyss Trader deals in esoteric and potentially hazardous items, including the Whispering Shard of the Void.",
    "shippingDetail": "Ships via a rift that can cause minor dimensional disturbances during transit, affecting the environment around the recipient for one day.",
    "usage": {
      "activation": "Action to activate; confusion and madness effects last two turns each time used.",
      "duration": "Two turns per use",
      "endsWhen": "The effect ends if the user is incapacitated or upon expiration of its duration.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The shard's rare and powerful effects, combined with its potential for madness, justify a high XP price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:32:32.233621+00:00",
    "aiReviewedAt": "2026-07-25T00:32:32.233621+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_chronal_bracelet": {
    "id": "the_edge_item_chronal_bracelet",
    "name": "Chronal Bracelet of Fractured Time",
    "description": "The Chronal Bracelet of Fractured Time is crafted from solidified temporal energy and worn by those seeking to bend time itself. This bracelet allows its wearer to briefly rewind their position by three spaces, creating a ripple in reality that can disrupt foes within close proximity. With each use, the wearer risks unraveling the very fabric of time, yet the chance remains to slow an opponent's movements for one round, buying precious seconds for tactical advantage or escape.",
    "category": "equipment",
    "price": 4200,
    "icon": "⏳",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Rewind Position",
      "Slow Opponent"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Temporal Courier Service",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Rewind Position",
        "rules": "As a bonus action, the wearer can move back three spaces. This effect has a range of 10 feet and lasts for one round. On a failed Dexterity saving throw (DC 15), the user risks destabilizing time, causing them to lose their next turn."
      },
      {
        "title": "Slow Opponent",
        "rules": "The wearer can target a creature within 30 feet with a reaction to slow it for one round. The target must succeed on a Dexterity saving throw (DC 14) or be slowed, reducing its movement speed by half until the end of its next turn."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level to ensure users can handle the risks and repercussions of time manipulation.",
    "vendorReason": "Edge Outpost specializes in exotic and dangerous items, making it an ideal vendor for this chronal artifact.",
    "shippingDetail": "Ships via Temporal Courier Service with a one-day delay due to the delicate nature of time-based items.",
    "usage": {
      "activation": "Bonus Action and Reaction",
      "duration": "One Round for each effect",
      "endsWhen": "On a failed saving throw or when used again, expending charges",
      "charges": "Uses 1 charge; recharges after a long rest"
    },
    "priceReason": "The balanced price reflects the rare and dangerous nature of the Chronal Bracelet's powers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:32:19.907870+00:00",
    "aiReviewedAt": "2026-07-25T00:32:19.907870+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_voidwalker_amulet": {
    "id": "the_edge_item_voidwalker_amulet",
    "name": "Voidwalker’s Echo Amulet",
    "description": "Voidwalker’s Echo Amulet pulses with an internal darkness that whispers of voids beyond comprehension. This unsettling bauble grants a fleeting connection to the nether realms, allowing you to step through shadows, but be wary; shadows may follow your path back into the light. Wearing it enhances your agility and stealth, making you harder to catch in the dark. Yet, the amulet's power comes with a price: there is always something watching from the void.",
    "category": "equipment",
    "price": 16000,
    "icon": "🌑",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Shadow Step",
      "Enhanced Stealth"
    ],
    "vendor": "final_shop",
    "shippedBy": "black_portal",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Shadow Step",
        "rules": "As an action, you can teleport up to 15 feet through shadows. You must have line of effect from your starting point to the destination point. You leave no trace or visible sign of passage."
      },
      {
        "title": "Enhanced Stealth",
        "rules": "+2 to Dexterity (Stealth) checks for the duration of a short rest, and there is a 5% chance per hour spent in shadowy conditions to become partially invisible for up to 3 turns. This effect ends if you leave an area of dim light."
      }
    ],
    "levelRequirementReason": "The amulet's dark magic requires a solid grasp of control and discipline, which is only achievable after reaching level 10.",
    "vendorReason": "Final Shop specializes in rare artifacts with dark lore, making it the perfect vendor for such an item.",
    "shippingDetail": "The amulet arrives encased in a shadowy aura that can only be dispelled by light within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Shadow Step; lasts the duration of a short rest for Enhanced Stealth, ending if you leave dim light.",
      "endsWhen": "Leaving an area with dim light or expending charges",
      "charges": "1 use per day"
    },
    "priceReason": "The amulet's rarity and the dark magic it harnesses justify its price, aligning with the balance of the game economy.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T00:33:23.343873+00:00",
    "aiReviewedAt": "2026-07-25T00:33:23.343873+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_echoing_berry": {
    "id": "grand_country_echoing_berry",
    "name": "Resonance Berries of the Shifting Stones",
    "description": "The Resonance Berries of the Shifting Stones are small, glowing spheres that pulse in time with the earth's heartbeat. When consumed, they grant a fleeting vision into the past, allowing you to hear the whispers of long-forgotten stones and catch glimpses of ancient paths now buried beneath the soil. These berries' power is both a gift and a curse; prolonged use can lead to disorientation and an irresistible urge to collect rocks from every passing cranny.",
    "category": "consumables",
    "price": 280,
    "icon": "🍇",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "healing",
      "perception"
    ],
    "vendor": "layer_market",
    "shippedBy": "winding_tunnel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing",
        "rules": "Upon consuming the berry, you gain 1d4 + your Constitution modifier hit points. This effect is instantaneous and does not have a save DC."
      },
      {
        "title": "Perception",
        "rules": "For 1 minute after consumption, you can make Wisdom (Perception) checks without disadvantage if there are ancient stones nearby. The effect ends early if you consume another berry within that time."
      }
    ],
    "levelRequirementReason": "These berries are accessible to all adventurers, regardless of level, as they are a common item in the market.",
    "vendorReason": "Layer Market is known for its diverse range of goods, including mystical and mundane items from various regions.",
    "shippingDetail": "Ships via Winding Tunnel's express courier service, delivered within a week.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "Instantaneous healing; Perception effect lasts for 1 minute",
      "endsWhen": "Consumption of another berry or expiration of the perception effect",
      "charges": "Unlimited"
    },
    "priceReason": "The berries are priced high due to their unique properties and rarity in the market.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:32:51.953651+00:00",
    "aiReviewedAt": "2026-07-25T00:32:51.953651+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_forge_repair_contract": {
    "id": "midlands_item_forge_repair_contract",
    "name": "Contract of the Fractured Forge",
    "description": "The 'Contract of the Fractured Forge' is a meticulously crafted parchment, imbued with the spirit of a veteran blacksmith's expertise. Passed down through generations, this contract promises repairs that not only mend your tools but also enhance their durability and craftsmanship. The grumpy smith, who insists on his work being recognized as art rather than mere repair, ensures each item receives his full attention, resulting in weapons and armor that gleam with a new vigor, albeit at the cost of his constant complaints about the Empire's inefficiencies.",
    "category": "services",
    "price": 16000,
    "icon": "🔨",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "weapon_repair_bonus",
      "armor_repair_bonus"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "delivery_ox",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Weapon Repair Bonus",
        "rules": "Upon activation, this contract grants you advantage on skill checks to repair weapons. The effect lasts for a number of hours equal to your proficiency bonus (minimum 1 hour)."
      },
      {
        "title": "Armor Repair Bonus",
        "rules": "The contract also provides the same benefit for repairing armor, allowing you to increase the AC of repaired items by +2 as long as they are within the smith's workshop. This effect is permanent until the next time you repair or replace the item."
      }
    ],
    "levelRequirementReason": "The complex nature of the contract and the smith’s expertise require a character of at least ninth level to fully benefit from its effects.",
    "vendorReason": "Master Grom, the perpetually grumpy but exceptionally skilled blacksmith, is renowned for his unmatched craftsmanship and attention to detail, making him the perfect vendor for this unique contract.",
    "shippingDetail": "The delivery ox ensures timely arrival, though it may wander off occasionally, adding an unpredictable element to the shipping process.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Until the start of your next turn after completing weapon or armor repairs",
      "endsWhen": "You repair another item, or you replace the repaired item with a new one",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the unique and irreplaceable nature of the contract, as well as the smith's reputation for exceptional craftsmanship.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T00:33:17.591929+00:00",
    "aiReviewedAt": "2026-07-25T00:33:17.591929+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_scorched_ember": {
    "id": "the_edge_scorched_ember",
    "name": "Phoenix's Breath",
    "description": "Phoenix's Breath is a charred fragment of a phoenix’s wing, its edges perpetually alight with an inferno that hints at celestial rebirth. This smoldering ember not only restores 50 hit points to the imbiber but also grants temporary fire resistance (15%) for the duration of a short rest. The flame-laced essence is said to have been crafted by the ancient avian guardians of the sun itself, making it a rare and cherished relic in the hands of adventurers.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 98,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Restore Hit Points",
      "Temporary Fire Resistance"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "hawk_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Hit Points",
        "rules": "Instantly restores 50 hit points to the imbiber. This effect is a special action that can be used once per day."
      },
      {
        "title": "Temporary Fire Resistance",
        "rules": "Grants the imbiber temporary fire resistance (15%) for the duration of a short rest, ending when it ends or if the imbiber takes non-fire damage. No save is required."
      }
    ],
    "levelRequirementReason": "This relic is accessible to all adventurers due to its profound healing properties and symbolic value.",
    "vendorReason": "Edge Outpost has a surplus of rare artifacts, including this phoenix-inspired ember, due to their close ties with the avian guardians of the sun.",
    "shippingDetail": "Ships via swift hawk courier, delivery within two days.",
    "usage": {
      "activation": "Special action",
      "duration": "Until the end of a short rest or if non-fire damage is taken",
      "endsWhen": "At the end of a short rest or when taking non-fire damage",
      "charges": "Unlimited, but only once per day"
    },
    "priceReason": "The item’s rarity and unique crafting by celestial guardians justify its high price in experience points.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:32:50.578798+00:00",
    "aiReviewedAt": "2026-07-25T00:32:50.578798+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronometric_bracelet": {
    "id": "the_edge_chronometric_bracelet",
    "name": "Time's Fickle Favor",
    "description": "The Time's Fickle Favor, a bracelet forged from a shard of shattered time, warps perception and reality for its wearer. It grants moments where time seems to slow, allowing you to act with perfect timing. Yet, it whispers of ancient lore, hinting at the price paid by those who misuse its power. Use it wisely, or risk being caught in an endless loop, trapped in the echoes of a forgotten past.",
    "category": "equipment",
    "price": 4300,
    "icon": "⏳",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Temporal Evasion",
      "Fortunate Rewind"
    ],
    "vendor": "final_shop",
    "shippedBy": "portal courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Temporal Evasion",
        "rules": "As a reaction, you can slow time around yourself by 25% for up to 3 turns. During this duration, your movement speed is reduced by 10%, but enemies have disadvantage on attack rolls against you."
      },
      {
        "title": "Fortunate Rewind",
        "rules": "Once per short or long rest, after failing an attack roll, saving throw, or skill check, you can rewind time and succeed at the failed action. This effect has a 10% chance to trigger upon failure."
      }
    ],
    "levelRequirementReason": "Only those with experience in timing and quick reflexes can harness Time's Fickle Favor.",
    "vendorReason": "The final shop, known for its rare and powerful artifacts, holds this unique piece among its collection of time-worn treasures.",
    "shippingDetail": "Ships via the portal courier service, ensuring safe and swift delivery to your doorstep.",
    "usage": {
      "activation": "Reaction (Temporal Evasion), once per short or long rest (Fortunate Rewind)",
      "duration": "Up to 3 turns for Temporal Evasion; instantaneous for Fortunate Rewind",
      "endsWhen": "Ends when the effect is used up, or if you take a short or long rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this bracelet offers significant tactical benefits without breaking the game.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:33:17.072561+00:00",
    "aiReviewedAt": "2026-07-25T00:33:17.072561+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_gauntlets": {
    "id": "connectopia_pioneer_gauntlets",
    "name": "Steelclad Grip Gauntlets",
    "description": "The Steelclad Grip Gauntlets are crafted from salvaged block-smithing machinery and reinforced with hardened ore, imbuing a miner's hands with the strength of a thousand hammer blows. These gauntlets not only grant a +3 bonus to Strength checks but also provide resistance to blunt damage, making every swing feel like a dance between steel and stone. The gauntlets are said to have been forged in the heart of an ancient forge, where the fire never dies.",
    "category": "equipment",
    "price": 16000,
    "icon": "🧤",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Strength Boost",
      "Blunt Resistance"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "express courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "When worn, the Steelclad Grip Gauntlets grant a +3 bonus to Strength checks. This effect is passive and does not require any action."
      },
      {
        "title": "Blunt Resistance",
        "rules": "While wearing these gauntlets, the wearer gains resistance to blunt damage from non-magical sources. This lasts for 1 hour per long rest."
      }
    ],
    "levelRequirementReason": "The complexity of forging and reinforcing such gauntlets requires a high level of craftsmanship.",
    "vendorReason": "Pioneer Post has the resources to source and sell items from ancient forges, including these formidable gauntlets.",
    "shippingDetail": "Delivered by express courier within three days of purchase.",
    "usage": {
      "activation": "Passive effect upon donning the gauntlets.",
      "duration": "Until removed or until the wearer takes a long rest.",
      "endsWhen": "Removal or end of the duration.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "The gauntlets are crafted from rare materials and require a high level of craftsmanship, balancing their price at 1000 XP.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:33:50.549814+00:00",
    "aiReviewedAt": "2026-07-25T00:33:50.549814+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_elemental_sparkler": {
    "id": "teyvat_item_elemental_sparkler",
    "name": "Pyro Ignition Bomb",
    "description": "The Pyro Ignition Bomb, a delightfully unstable device crafted by disgruntled fire elementals, is a compact sphere of molten glass and arcane residue. When thrown, it ignites with a dazzling display of flames, creating a small area of searing heat. The bomb's fiery explosion can ignite nearby combustibles and leave behind embers that smolder for a time. Wario recommends testing this one *very* carefully in an open space, as its unpredictable nature makes it a dangerous toy.",
    "category": "consumables",
    "price": 280,
    "icon": "🔥",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deal_fire_damage",
      "chance_to_ignite_target"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deal Fire Damage",
        "rules": "When thrown, the Pyro Ignition Bomb deals 1d6 fire damage to all creatures within 5 feet. This effect has a 50% chance of igniting any combustible object in the area."
      },
      {
        "title": "Chance to Ignite Target",
        "rules": "There is a 20% chance that the target creature hit by the bomb's explosion becomes engulfed in flames, taking an additional 1d6 fire damage at the start of its next turn. This igniting effect can only occur once per use."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to practice their combat and survival skills without requiring a higher level.",
    "vendorReason": "Mondstadt's bustling market sells a variety of items, including this whimsical yet dangerous toy from the elemental realm.",
    "shippingDetail": "The Pyro Ignition Bomb is carefully packed and shipped within 24 hours to ensure it reaches its destination in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use. The bomb can be rethrown if the user catches it before it detonates.",
      "charges": "Unlimited"
    },
    "priceReason": "The Pyro Ignition Bomb's balanced price reflects its unpredictable nature and the materials used in its crafting.",
    "priceOriginal": 210,
    "priceReviewedAt": "2026-07-25T00:34:08.842823+00:00",
    "aiReviewedAt": "2026-07-25T00:34:08.842823+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_archon_amulet": {
    "id": "teyvat_item_archon_amulet",
    "name": "Amulet of the Vigilant Star",
    "description": "Forged by an ancient archon in the heart of Teyvat, this amulet shines like a guardian star, its facets reflecting the cosmos. It grants +1 AC and a +2 bonus to saving throws against fear effects, but beware—its power is fragile, for it draws sustenance from the wearer's own willpower. Wearers report feeling invigorated yet vulnerable, as if the amulet walks a fine line between protection and peril.",
    "category": "equipment",
    "price": 4300,
    "icon": "⭐",
    "stock": 15,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "small_armor_bonus",
      "defend_against_fear"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Sea Merchant's Cart",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Armor Bonus",
        "rules": "The amulet grants +1 AC when worn. This bonus is passive and does not require an action to activate."
      },
      {
        "title": "Defend Against Fear",
        "rules": "When you successfully save against a fear effect, the amulet temporarily enhances your resolve. You gain advantage on your next saving throw against any fear effect within 1 hour. This benefit can only occur once per day."
      }
    ],
    "levelRequirementReason": "The amulet's power is subtle but profound; only those of a certain experience level can harness its full potential.",
    "vendorReason": "Liyue Harbor, known for its connections to the stars and ancient lore, sells this talisman as it is a symbol of protection and resilience in Teyvat's ever-changing tides.",
    "shippingDetail": "The Sea Merchant's Cart provides swift delivery, ensuring that your amulet arrives just before the next high tide.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; lasts until the wearer successfully saves against a fear effect or is no longer affected by one.",
      "endsWhen": "The effect ends when the wearer fails to save against another fear effect within 1 hour of gaining advantage, or after the next high tide.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Given its rarity and the unique benefits it offers, this amulet is priced at 1000 XP, reflecting its value in both protection and lore.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-25T00:34:04.702498+00:00",
    "aiReviewedAt": "2026-07-25T00:34:04.702498+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_stirring_potion": {
    "id": "equestria_item_stirring_potion",
    "name": "Stirring Potion of Accelerated Mixing",
    "description": "The Stirring Potion of Accelerated Mixing is a potent brew crafted by a disgruntled baker who sought to reclaim his lost productivity. This elixir, when consumed, instantly triples the speed at which any mixing process takes place, from crafting magical reagents to baking intricate pastries. However, users must be wary, as there's a 10% chance per minute that the mixture might turn into an unpredictable sugary mess, leaving behind sticky fingers and a trail of confectionery chaos.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_mixing_speed_3x",
      "sticky_fingers_chance"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Rainbow Dash Express Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increase Mixing Speed 3x",
        "rules": "This effect triples the speed at which any mixing process occurs. The user must consume the potion to activate it, and the duration is instantaneous until disrupted by external factors such as a failed concentration check or the end of their turn."
      },
      {
        "title": "Sticky Fingers Chance",
        "rules": "There's a 10% chance per minute that the mixture will become uncontrollable, resulting in a sticky mess. This effect ends when the process is completed or interrupted by an action taken by the user. There are no save DCs required."
      }
    ],
    "levelRequirementReason": "This potion is designed for anyone who needs to expedite their mixing processes, making it accessible to all levels.",
    "vendorReason": "As a bustling market town, Ponyville Market stocks this handy potion for the myriad of artisans and bakers in need of speed and efficiency.",
    "shippingDetail": "Ships via Rainbow Dash Express, ensuring safe and swift delivery to your doorstep. Expect delivery within a few minutes!",
    "usage": {
      "activation": "Consume the potion to activate its effects.",
      "duration": "Instantaneous; ends when the mixing process is completed or interrupted by external factors.",
      "endsWhen": "The mixing process is finished or an action disrupts it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted with rare ingredients and expert brewing, this potion justifies its fair value in experience points.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T00:33:39.596900+00:00",
    "aiReviewedAt": "2026-07-25T00:33:39.596900+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_legendary_celestia_mane": {
    "id": "equestria_item_legendary_celestia_mane",
    "name": "Legendary Celestia's Mane Fragment",
    "description": "A shimmering fragment of Princess Celestia’s legendary mane, this radiant relic exudes an eternal light that banishes darkness and fills the bearer with a sense of unyielding hope. Crafted from the very essence of her morning glow, it grants resistance to all forms of darkness and the power to repel malevolent shadows. The aura of light can be seen for miles around, illuminating even the deepest caverns and scaring away any who seek to hide in the dark.",
    "category": "equipment",
    "price": 68000,
    "icon": "✨",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "resistance_to_darkness",
      "banish_shadows"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Equestria Express",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Resistance to Darkness",
        "rules": "The bearer gains resistance to all damage from sources of darkness. This effect persists for a duration of 1 hour per long rest."
      },
      {
        "title": "Banish Shadows",
        "rules": "As an action, the wielder can target one creature or object within 30 feet that is in complete shadow. The target must succeed on a DC 18 Wisdom saving throw or be pushed to the nearest point of normal light."
      }
    ],
    "levelRequirementReason": "This relic requires significant magic and power, suitable for high-level adventurers who have already proven their valor.",
    "vendorReason": "The Crystal Empire holds many artifacts from the legendary Princess Celestia, including this fragment of her mane.",
    "shippingDetail": "Ships via Equestria Express, usually arrives within a week.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous and lasts for the rest of the encounter unless dispelled by magic.",
      "endsWhen": "The effect ends when the creature is no longer in complete shadow or if dispelled by magic.",
      "charges": "Unlimited, but only one use per long rest."
    },
    "priceReason": "This relic's price reflects its legendary origin and the power it bestows upon a worthy bearer.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T00:34:12.385962+00:00",
    "aiReviewedAt": "2026-07-25T00:34:12.385962+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_godly_shard_of_triumph": {
    "id": "faerun_item_godly_shard_of_triumph",
    "name": "Shard of Unyielding Resolve",
    "description": "The Shard of Unyielding Resolve hums with an unyielding aura, a golden core pulsating with untamed power. Its origin lies in the heart of ancient Valenar, forged from the essence of warriors who faced their greatest fears and emerged victorious. This relic grants its bearer unmatched resilience and a fighting spirit that can turn the tide of battle. When wielded, it fills you with an indomitable will to overcome any obstacle, granting both physical fortitude and unshakable courage.",
    "category": "equipment",
    "price": 1100000,
    "icon": "🏆",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Fortified Fortitude",
      "Unyielding Charisma"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "magical_portal",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Fortified Fortitude",
        "rules": "When you take damage, you can spend a use to gain temporary hit points equal to your level + your Constitution modifier. This effect lasts until the start of your next turn."
      },
      {
        "title": "Unyielding Charisma",
        "rules": "You have advantage on all Charisma saving throws and on checks made with the Performance or Persuasion skills."
      }
    ],
    "levelRequirementReason": "This relic is crafted from the essence of ancient heroes, and only the most seasoned warriors can harness its power.",
    "vendorReason": "Waterdeep's Market, known for its rare and exotic goods, houses this formidable artifact among its offerings.",
    "shippingDetail": "The shard is delivered via a magical portal, ensuring swift and secure transport to your doorstep.",
    "usage": {
      "activation": "Reaction when taking damage or at the start of each of your turns.",
      "duration": "Instantaneous; ends on the following turn unless you take damage again.",
      "endsWhen": "You are reduced to 0 hit points, or until you use another Fortified Fortitude effect.",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's rarity and the limited number of those capable of wielding it justify its price.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-25T00:34:24.952751+00:00",
    "aiReviewedAt": "2026-07-25T00:34:24.952751+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_dwarven_battleaxe_shard": {
    "id": "middle_earth_dwarven_battleaxe_shard",
    "name": "Grimbeard's Echoing Edge",
    "description": "Grimbeard's Echoing Edge is a shard of the legendary dwarven battleaxe that once belonged to Grimbeard Stonehand, forged from the very stone of the earth. This fragment retains its master’s fury and power; when wielded, it resonates with raw dwarfkind strength, adding an unyielding edge to any blow. Should you hold it too long, the shard emits a low hum that grows louder until it vibrates violently, a sign that its ancient spirit is awakening.",
    "category": "equipment",
    "price": 4300,
    "icon": "⚔️",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Fury's Edge",
      "Bleeding Strike"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_rider",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Fury's Edge",
        "rules": "When you hit with this weapon, you deal an additional 1d6 damage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Bleeding Strike",
        "rules": "There is a 10% chance that when you hit with this weapon, the target bleeds, dealing 1d4 slashing damage at the end of its next turn. This effect can occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires proficiency in martial weapons to effectively wield Grimbeard's Echoing Edge.",
    "vendorReason": "The dwarves at the Dwarven Forge have carefully curated this fragment, ensuring it is properly attuned and safe for use by those who can handle its power.",
    "shippingDetail": "Delivered by a trusted dragon rider, who ensures that the shard arrives in pristine condition.",
    "usage": {
      "activation": "On hit with this weapon",
      "duration": "Until the start of your next turn",
      "endsWhen": "The effect ends naturally or if you miss an attack with it",
      "charges": "Unlimited, but recharges after a short rest"
    },
    "priceReason": "Reflects the rare nature and legendary origins of Grimbeard's Echoing Edge.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:34:24.703964+00:00",
    "aiReviewedAt": "2026-07-25T00:34:24.703964+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_elven_messenger_scroll": {
    "id": "middle_earth_elven_messenger_scroll",
    "name": "A Message from Rivendell",
    "description": "This intricately crafted scroll, bearing Elrond's personal seal and the mark of Rivendell, exudes a faint lavender scent that lingers like the memory of ancient elven whispers. The parchment reveals an encoded message about preserving the balance of nature, though its meaning is only clear to those versed in Elven lore. Holding this scroll brings back fond memories of the elves' wisdom and their deep connection with the world around them.",
    "category": "faction",
    "price": 16000,
    "icon": "✉️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Elven Lore Boost",
      "Positive Reputation"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elven Lore Boost",
        "rules": "When used, this scroll grants the reader a temporary bonus of +5 to their Intelligence (History) check. The effect lasts for 1 hour and can only be used once per long rest."
      },
      {
        "title": "Positive Reputation",
        "rules": "Reading or delivering this scroll gains you a +2 bonus on Persuasion checks made against Elven factions, lasting until the next time you gain a level. This effect is usable once every 7 days."
      }
    ],
    "levelRequirementReason": "The scroll's complex encoding requires basic understanding of Elven history and lore.",
    "vendorReason": "Elven artisans at the market are known for their deep connections with Rivendell, ensuring authenticity and legitimacy of such scrolls.",
    "shippingDetail": "Ships via a swift winged horse courier, delivered within one day's travel from Rivendell.",
    "usage": {
      "activation": "Read or deliver the scroll as an action.",
      "duration": "Elven Lore Boost lasts for 1 hour; Positive Reputation bonus lasts until next level gain.",
      "endsWhen": "On completion of its use, either through reading or delivering it to a suitable recipient.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The scroll's rarity and the expertise required to read it justify this cost.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T00:34:45.903702+00:00",
    "aiReviewedAt": "2026-07-25T00:34:45.903702+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_journal": {
    "id": "connectopia_pioneer_journal",
    "name": "Chronicles of the Rusty Compass",
    "description": "The Chronicles of the Rusty Compass is a well-worn leather-bound journal filled with the pioneer’s ramblings and sketches. Its pages are crammed with cryptic notes on hidden mines, lost settlements, and tales of giant block monsters. This relic not only provides valuable insights but also increases your chances of survival in the wilderness by +1, making it an indispensable companion for any adventurer seeking to uncover ancient secrets and navigate uncharted territories.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧭",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Survival Boost",
      "Random Pioneer Encounter"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Winged Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Survival Boost",
        "rules": "When in a wilderness area, you gain a +1 bonus to Survival checks. This effect is passive and does not require any action."
      },
      {
        "title": "Random Pioneer Encounter",
        "rules": "Once per day, this journal may trigger a random encounter with a wandering pioneer. The encounter is determined by the DM and can offer valuable information or quests related to the journal’s lore."
      }
    ],
    "levelRequirementReason": "This item's value lies in its historical significance and utility rather than requiring any particular level of expertise.",
    "vendorReason": "The Pioneer Post is well-known for selling items related to the history and lore of exploration, making it a fitting vendor for this journal.",
    "shippingDetail": "Ships via Winged Pigeon within two game days.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous (once per day for the Random Pioneer Encounter).",
      "endsWhen": "The journal's daily encounter is triggered or the journal is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the historical and functional value of the journal, making it a significant but balanced purchase.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:34:30.115876+00:00",
    "aiReviewedAt": "2026-07-25T00:34:30.115876+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_echoing_stone": {
    "id": "connectopia_echoing_stone",
    "name": "Resonance of the Lost Miners",
    "description": "The Resonance of the Lost Miners is a cold, smooth grey stone that hums softly, its vibrations echoing with the cries and whispers of miners long gone. When touched, it reveals fleeting visions of their desperate search for valuable blocks amidst the darkness, occasionally punctuated by terrifying screams about giant block spiders. This eerie relic provides a minor luck bonus to mining checks and creates faint, disorienting auditory hallucinations that can be used as a tactical distraction in combat.",
    "category": "curiosities",
    "price": 280,
    "icon": "🔮",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Minor Luck Bonus",
      "Auditory Hallucination Distraction"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Wario Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mining Luck Bonus",
        "rules": "When the Resonance of the Lost Miners is touched, the user gains a +1 bonus to their next mining check. This effect has no cooldown and can be used once per long rest."
      },
      {
        "title": "Auditory Distraction",
        "rules": "Activating the stone creates faint, disorienting sounds that provide advantage on a single Dexterity (Stealth) check made as part of an attack or movement action. The effect lasts for 1 minute and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This relic is designed for beginners to experience the thrills of mining without the risk of encountering dangerous creatures.",
    "vendorReason": "Craft Corner specializes in items that blend practical utility with a touch of magic, making it an ideal vendor for this eerie yet useful stone.",
    "shippingDetail": "Due to its fragile nature, the Resonance is carefully packed and shipped via Wario Express's priority courier service.",
    "usage": {
      "activation": "Touching the stone",
      "duration": "Instantaneous for luck bonus; 1 minute for auditory distraction",
      "endsWhen": "After use or at the end of a long rest/short rest, respectively",
      "charges": "Unlimited"
    },
    "priceReason": "The Resonance is priced high due to its unique blend of utility and the mystic power it holds from the lost miners' spirits.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:35:31.539827+00:00",
    "aiReviewedAt": "2026-07-25T00:35:31.539827+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_howling_totem_whisper": {
    "id": "animatopia_howling_totem_whisper",
    "name": "Howling Totem Whisper",
    "description": "The Howling Totem Whisper is a weathered totem carved from ancient Animatopia wood. Its surface bears intricate carvings of howling wolves and dancing spirits. This totem allows you to mimic the calls of local beasts, momentarily distracting foes and drawing them away from your allies. It's said that the spirits of the wilder tribes guide its use, making it a valuable tool for survival in Animatopia’s dense forests.",
    "category": "consumables",
    "price": 280,
    "icon": "🐺",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_buff",
      "distract_enemy"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Buff",
        "rules": "When you activate the totem, you gain advantage on animal handling checks for up to three turns. This effect has no save DC and does not expend charges."
      },
      {
        "title": "Distract Enemy",
        "rules": "For one minute after activation, any creature that can hear your howl has disadvantage on attack rolls against you and your allies within 30 feet. This effect ends if the totem is destroyed or if a successful DC 15 Wisdom (Insight) check is made by an enemy."
      }
    ],
    "levelRequirementReason": "The totem’s simple design allows even low-level adventurers to harness its power.",
    "vendorReason": "The tribal trader has extensive knowledge of Animatopia and frequently sells items that aid in survival.",
    "shippingDetail": "Delivered via a swift winged messenger, ensuring timely arrival even in the densest forests.",
    "usage": {
      "activation": "Action",
      "duration": "One minute",
      "endsWhen": "The totem is destroyed or an enemy successfully makes a Wisdom (Insight) check.",
      "charges": "Unlimited"
    },
    "priceReason": "The totem’s rarity and the complexity of its design justify this price in XP.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-25T00:34:42.879488+00:00",
    "aiReviewedAt": "2026-07-25T00:34:42.879488+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_shadowclaw_gauntlet": {
    "id": "animatopia_shadowclaw_gauntlet",
    "name": "Shadowclaw Gauntlet",
    "description": "Forged from obsidian and the scales of a nocturnal shadowcat, the Shadowclaw Gauntlet is said to channel the essence of a panther's grace and cunning. Wearing it heightens your reflexes, making every movement fluid and precise, as if you're one with the night itself. The gauntlets' design mimics the sleek form of their feline inspiration; they feel like second skin, whispering secrets of the shadows to those who wield them. Be wary: prolonged use can lead to a compulsion to pounce on any shiny object within reach.",
    "category": "equipment",
    "price": 4300,
    "icon": "🐾",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_buff",
      "chance_to_pounce"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Swift Beetle Courier Service",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Grant Buff (Dexterity and Agility)",
        "rules": "While wearing the Shadowclaw Gauntlet, you gain a +5 bonus to your Dexterity and agility checks. This effect is passive and does not require an action."
      },
      {
        "title": "Chance to Pounce",
        "rules": "At the start of your turn, there is a 10% chance that you will be compelled to pounce on any shiny object within reach. If this occurs, make a DC 15 Dexterity (Acrobatics) check to resist the compulsion; failure means you pounce as an action."
      }
    ],
    "levelRequirementReason": "The Shadowclaw Gauntlet requires a minimum level of 6 due to its intricate craftsmanship and the magic imbued within it.",
    "vendorReason": "Beast Bazaar specializes in items that harness the power of nature, making the Shadowclaw Gauntlet an ideal addition to their collection.",
    "shippingDetail": "Ships via giant beetle courier; arrives within 3 days.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent until removed or destroyed.",
      "endsWhen": "The gauntlets are removed, destroyed, or the wearer's magical power is exhausted due to extended use.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Shadowclaw Gauntlet's price reflects its rare materials and the arcane magic required for its creation, making it a valuable yet balanced addition to any adventurer's arsenal.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T00:35:17.523918+00:00",
    "aiReviewedAt": "2026-07-25T00:35:17.523918+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_echoing_songstone": {
    "id": "animatopia_echoing_songstone",
    "name": "Echoing Songstone",
    "description": "The Echoing Songstone pulses with ancient melodies, a relic of Animatopia crafted by the reclusive songbird shaman, known for its ability to manipulate sound waves and create powerful sonic blasts. Crafted from enchanted quartz and imbued with the spirit of the forest, this stone grants +2 to charisma and persuasion checks, making one's voice as compelling as the melody it emits. Use it wisely; a misstep can unleash cacophonous echoes that stun foes for an instant before they scramble away in panic.",
    "category": "premium",
    "price": 16000,
    "icon": "🎶",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "sonic_blast",
      "charisma_boost"
    ],
    "vendor": "forest_market",
    "shippedBy": "delivery_drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Sonic Blast",
        "rules": "As a bonus action, the user can cast sonic blast (dealing 50-100 damage to one target within 30 feet). The effect has a range of 60 feet and lasts until expended. The user must make a concentration check with a DC of 14 or risk losing control over the sound, causing it to rebound on them."
      },
      {
        "title": "Charisma Boost",
        "rules": "The Echoing Songstone grants +2 bonus to charisma checks and persuasion attempts for one hour. This effect is cumulative if used multiple times per day but cannot exceed a total of +4 charisma boost at any given time."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to control the stone's powerful sonic capabilities effectively.",
    "vendorReason": "The forest market deals in rare and ancient artifacts, making it a fitting vendor for this magical relic.",
    "shippingDetail": "The delivery drone provides swift delivery, ensuring the Echoing Songstone reaches its destination within one game day.",
    "usage": {
      "activation": "Bonus action to cast sonic blast; charisma boost is a passive effect that lasts for one hour.",
      "duration": "Until expended or lost control over the sound waves",
      "endsWhen": "Concentration check failed, or the user loses control of the stone's effects",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the Echoing Songstone’s unique and powerful abilities.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:35:12.792838+00:00",
    "aiReviewedAt": "2026-07-25T00:35:12.792838+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_evolution_focus": {
    "id": "pokemon_item_evolution_focus",
    "name": "Evolution Focus - Primal Instinct",
    "description": "A pulsating obsidian stone, radiating with primal energy, this Evolution Focus - Primal Instinct accelerates a Pokémon's evolutionary process. It is said that trainers who use it have become dangerously obsessed with power and strength, often pushing their Pokémon past safe limits. This focus ensures that the evolution occurs more reliably, reducing the risk of undesirable side effects by 10%, but there is always an unpredictable chance—once per day—that your Pokémon might undergo a double evolution.",
    "category": "equipment",
    "price": 16000,
    "icon": "🔥",
    "stock": 3,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Dramatically increases evolution success rate",
      "Reduces post-evolution stat penalties"
    ],
    "vendor": "safari_shop",
    "shippedBy": "giant beetle",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Enhanced Evolution",
        "rules": "This focus ensures that the next evolution attempt is more likely to succeed, reducing the chance of failure by 20%. The effect lasts until the Pokémon successfully evolves or attempts an additional time if the initial evolution fails. If used on a Pokémon with multiple evolutions, it has a 1 in 6 chance (16.7%) each day that the Pokémon undergoes two consecutive evolutions."
      },
      {
        "title": "Stat Stability",
        "rules": "Post-evolution, this focus reduces any negative stat penalties by 10%, ensuring your Pokémon remains at peak condition immediately after evolving. This effect is instantaneous and does not require an action to activate."
      }
    ],
    "levelRequirementReason": "Trainers must have a solid understanding of their Pokémon's potential before using this powerful tool.",
    "vendorReason": "The Safari Shop deals in rare and exotic items, making it the perfect vendor for this unique Evolution Focus.",
    "shippingDetail": "Delivered swiftly by a giant beetle courier, ensuring your Pokémon receives its focus quickly.",
    "usage": {
      "activation": "Passive effect triggered upon use during an evolution attempt; no activation required.",
      "duration": "Until the Pokémon successfully evolves or attempts to evolve again if failed initially.",
      "endsWhen": "The effect ends when the Pokémon successfully evolves, fails to evolve after using this focus, or uses it more than once per day.",
      "charges": "Unlimited"
    },
    "priceReason": "This Evolution Focus is priced at 1000 XP as it offers a significant advantage in the evolutionary process without being overpowered.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T14:30:19.104768+00:00",
    "aiReviewedAt": "2026-07-25T14:30:19.104768+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_battle_strategy_consultation": {
    "id": "pokemon_item_battle_strategy_consultation",
    "name": "Battle Strategy Consultation – Master Trainer",
    "description": "Forge your team into a formidable force with Pauline's Microphone. This ancient device amplifies the voices of your Pokémon, allowing them to communicate and coordinate their strategies in battle. Upon activation, it grants +2 to all Pokémon’s base stats for one round, ensuring they perform at peak efficiency during critical moments. Additionally, there is a 30% chance you’ll receive a free battle tactic card that can turn the tide of any encounter.",
    "category": "services",
    "price": 1000,
    "icon": "🧠",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "boosts Pokémon's stats",
      "increases strategy and coordination"
    ],
    "vendor": "league_store",
    "shippedBy": "messenger pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boosted Performance",
        "rules": "Activates as an action, grants +2 to all Pokémon’s base stats for one round. Ends if the user takes any harmful actions or if a Pokémon faints."
      },
      {
        "title": "Battle Tactic Insight",
        "rules": "Grants a 30% chance of receiving a free battle tactic card upon activation, which can be used to enhance your strategy during combat."
      }
    ],
    "levelRequirementReason": "This service is designed for trainers at the beginning of their journey who need guidance and basic tactical advantages.",
    "vendorReason": "The league store specializes in services that help trainers at all levels, from beginners to masters.",
    "shippingDetail": "Delivered swiftly by a trusted messenger pigeon, ensuring your team is ready for battle upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "One round",
      "endsWhen": "The user takes harmful actions or a Pokémon faints",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to provide trainers with essential strategic advice without breaking the bank.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:35:31.038820+00:00",
    "aiReviewedAt": "2026-07-25T00:35:31.038820+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sugar_rush_potion": {
    "id": "leclaire_isle_item_sugar_rush_potion",
    "name": "Sugar Rush Potion",
    "description": "Crafted from crystallized honey and pixie dust, Sugar Rush Potion is a potent concoction that turns imbibers into whirlwinds of movement and attack prowess. This nectar-infused potion grants a temporary surge of speed, allowing the drinker to outmaneuver foes with ease. However, its addictive properties ensure that once tasted, one's sweet tooth never quite fades. Expect heightened reflexes and an obsession with all things sprinkles for hours following consumption.",
    "category": "consumables",
    "price": 290,
    "icon": "🍬",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_movement_speed",
      "temporary_boost_to_attack_damage"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Movement Speed",
        "rules": "Upon drinking, the imbiber gains a +10-foot bonus to their speed for 1 minute. This effect ends if they take any damage or when it expires."
      },
      {
        "title": "Temporary Boost to Attack Damage",
        "rules": "For the duration of the effects, the user's melee attacks deal an additional 2d6 force damage and have advantage on attack rolls. This benefit is lost if the drinker drops to 0 hit points or takes any other form of damage."
      }
    ],
    "levelRequirementReason": "This potion is designed for adventurers just starting their journey, providing a minor boost without overburdening lower-level characters.",
    "vendorReason": "Pastry Palace specializes in sugary treats and potions, making it the perfect vendor for this unique concoction.",
    "shippingDetail": "The delivery drone ensures that the potion arrives fresh and potent, arriving within minutes of purchase.",
    "usage": {
      "activation": "Instantaneous upon consumption. The effects last for 1 minute or until the user takes damage.",
      "duration": "1 minute or until the drinker takes damage",
      "endsWhen": "The effects expire after 1 minute or when the drinker drops to 0 hit points or takes damage.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This balanced price reflects the potion's potent ingredients and temporary yet powerful effects.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:36:06.337105+00:00",
    "aiReviewedAt": "2026-07-25T00:36:06.337105+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_frosting_flurry_wand": {
    "id": "leclaire_isle_item_frosting_flurry_wand",
    "name": "Frosting Flurry Wand",
    "description": "The Frosting Flurry Wand is a meticulously crafted artifact, its ornate gold and silver filigree gleaming with a sugary sheen. When activated, it conjures a blizzard of whipped frosting that engulfs foes in a cloud of cold sweetness, leaving them immobilized and covered from head to toe in a coat of confectionery. The sugar-laden mist is so thick that even the most hardened warriors find themselves momentarily stunned by its sheer volume.",
    "category": "equipment",
    "price": 4300,
    "icon": "🍥",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "creates_frost_cloud",
      "stuns_enemies_on_impact"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "magical_mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Frosting Cloud",
        "rules": "As a bonus action, you can activate the wand to create a cloud of whipped frosting that lasts for 1 minute. Creatures within 5 feet of the cloud must succeed on a DC 14 Dexterity saving throw or be stunned until the start of their next turn."
      },
      {
        "title": "Sticky Sugar",
        "rules": "For 1 hour after being hit by the Frosting Cloud, any creature that fails its save is also covered in sticky frosting. This reduces movement speed by 10 feet and imposes disadvantage on Dexterity (Stealth) checks until removed with a successful DC 15 Strength (Athletics) check."
      }
    ],
    "levelRequirementReason": "The Frosting Flurry Wand requires at least 6th level to wield its sugary power, ensuring that only seasoned adventurers can harness the full effect of this confectionary weapon.",
    "vendorReason": "Sweet Supplies is known for its extensive range of magical and mundane goods, including the Frosting Flurry Wand, a popular item among bakers and adventurers alike who seek to turn their foes into sweet treats.",
    "shippingDetail": "The Frosting Flurry Wand arrives via Magical Mail, ensuring that it is delivered intact and ready for use.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous effect with a duration of 1 minute per activation",
      "endsWhen": "The cloud dissipates after the stated time or when the wand runs out of charges, whichever comes first. The wand has an infinite number of uses.",
      "charges": "Unlimited"
    },
    "priceReason": "The Frosting Flurry Wand is priced at 1000 XP due to its unique and highly sought-after effect in both combat and social situations.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:36:43.233820+00:00",
    "aiReviewedAt": "2026-07-25T00:36:43.233820+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_echo_berry": {
    "id": "grand_country_echo_berry",
    "name": "Resonance Berries",
    "description": "Resonance Berries are shimmering and vibrant, each one a miniature echo of the world’s layered landscapes. When consumed, they grant temporary auditory illusions that can confuse foes and reveal hidden pathways, though not always with perfect clarity. These berries are carefully cultivated in the heart of the Layered Market by Grandmaster Pauline, ensuring their quality is unmatched. The effects are subtle but effective, making Resonance Berries a valuable tool for any adventurer seeking an edge.",
    "category": "consumables",
    "price": 290,
    "icon": "🔊",
    "stock": 78,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "illusion_chance_15%",
      "temporary_hearing_bonus_5%"
    ],
    "vendor": "layer_market",
    "shippedBy": "Giant Beetle Carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illusion Chance",
        "rules": "When consumed, the Resonance Berry grants a +2 bonus on Deception checks to create illusions. This effect lasts for 1 hour and can be used once per day."
      },
      {
        "title": "Temporary Hearing Bonus",
        "rules": "The Resonance Berries provide a +5 temporary bonus to passive Perception checks related to hearing, effective for the remainder of the day. This effect is usable only once per day."
      }
    ],
    "levelRequirementReason": "Resonance Berries are accessible to adventurers early in their journey, offering a mild advantage without being overly powerful.",
    "vendorReason": "Grandmaster Pauline is renowned for her expertise in cultivating and enhancing natural items, making Resonance Berries a staple in the Layered Market.",
    "shippingDetail": "Ships swiftly via Giant Beetle Carrier, delivered within one week of purchase.",
    "usage": {
      "activation": "Eaten as a free action.",
      "duration": "1 hour per effect; once per day.",
      "endsWhen": "The duration ends or the effect is used.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Resonance Berries are priced high due to their unique properties and the effort required in cultivation, making them a valuable but not overpowered item for adventurers.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:36:32.844836+00:00",
    "aiReviewedAt": "2026-07-25T00:36:32.844836+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_spiral_shard": {
    "id": "grand_country_spiral_shard",
    "name": "Chronal Fragments",
    "description": "The Chronal Fragments shimmer with a faint temporal aura, their jagged edges catching the light like fractured mirrors of time itself. These shards are said to have been crafted from the very fabric of reality, twisted by ancient forces seeking to master chronomancy. Holding one grants you a brief window of mastery over time, slowing nearby enemies and briefly reversing their movements, perfect for setting up a devastating surprise attack or dodging an incoming blow.",
    "category": "curiosities",
    "price": 16000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "enemy_slowdown_30%",
      "chance_to_reverse_enemy_movement_5%"
    ],
    "vendor": "side_seller",
    "shippedBy": "Winged Serpent Courier",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "When you activate the Chronal Fragment, all enemies within a 10-foot radius are slowed by 30%. This effect lasts for 1 round. On your turn, if an enemy moves through this area and makes a melee attack against another creature or uses a reaction to move, it must make a DC 15 Dexterity saving throw. On a failed save, the movement is reversed."
      },
      {
        "title": "Temporal Reversal",
        "rules": "Once per short rest, you can activate the Chronal Fragment to reverse the movement of an enemy within 30 feet that is adjacent to you or within 5 feet of another creature. The target and any creatures it moves through must make a DC 15 Dexterity saving throw. On a failed save, the target’s movement is reversed."
      }
    ],
    "levelRequirementReason": "The intricate magic required to wield these Chronal Fragments demands a proficient user with at least an eleventh-level spellcasting ability.",
    "vendorReason": "Side sellers often have access to rare and exotic items, including ancient relics like the Chronal Fragments.",
    "shippingDetail": "The fragile nature of these fragments requires careful handling by the Winged Serpent Courier, who ensures safe delivery with their unique flight patterns.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for each effect; lasts for 1 round or until disrupted.",
      "endsWhen": "The effect ends when you are incapacitated or when a creature moves through the area of Temporal Slow.",
      "charges": "Recharge after a short rest"
    },
    "priceReason": "The Chronal Fragments' rarity and the complexity of their construction justify this price, aligning with other epic items in terms of value.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-25T00:36:54.761904+00:00",
    "aiReviewedAt": "2026-07-25T00:36:54.761904+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_ink_of_inspiration": {
    "id": "kivotos_item_ink_of_inspiration",
    "name": "Ink of Inspiration - Midnight Batch",
    "description": "A vial of viscous ink harvested from the dreams of exceptionally creative students who have spent their nights composing masterpieces under the midnight sky. This potent concoction grants a surge of inspiration, flooding your mind with brilliant ideas that can be instantly expressed in both verse and prose. Sip it during a bardic performance to dazzle the audience or use it to craft a spell that demands the attention of all who hear its incantation.",
    "category": "consumables",
    "price": 1000,
    "icon": "✒️",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "grant_inspiration",
      "bardic_performance_boost"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Inspiration",
        "rules": "Consume this vial during a bardic performance to grant yourself advantage on the next performance check. The effect lasts until the start of your next turn."
      },
      {
        "title": "Bardic Performance Boost",
        "rules": "For 1 minute after consuming, you can use a bonus action to cast the Enthralling Melody or Compelling Words spell without expending a spell slot, provided you have the Bardic Inspiration feature. This effect ends early if you fall unconscious."
      }
    ],
    "levelRequirementReason": "This ink is potent enough for beginners who wish to enhance their performances and creative endeavors.",
    "vendorReason": "Club Supply stocks this rare item as part of its collection of magical consumables used by performers and artists.",
    "shippingDetail": "Delivered swiftly by the trusty Courier Pigeon, ensuring you receive your Ink of Inspiration without delay.",
    "usage": {
      "activation": "Consume during a bardic performance or as a bonus action to cast a Bardic Performance-related spell.",
      "duration": "Instantaneous and lasts for 1 minute per use.",
      "endsWhen": "The effect ends if you fall unconscious or if the duration expires.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "This Ink of Inspiration is crafted from rare and magical components, making it a valuable and sought-after item among bards and artists alike.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:36:22.505735+00:00",
    "aiReviewedAt": "2026-07-25T00:36:22.505735+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chronometer_of_late_nights": {
    "id": "kivotos_item_chronometer_of_late_nights",
    "name": "Chronometer of Late Nights",
    "description": "The Chronometer of Late Nights is a delicate pocket watch with a brass case and a glass face that glows faintly under moonlight. Its intricate gears, crafted from silver and encrusted with obsidian, subtly hum as they record the hours spent poring over ancient tomes. This relic is said to enhance one's ability to learn through the night, but prolonged use can distort perceptions of time itself. Academics often turn to this tool when their studies extend into the wee hours.",
    "category": "equipment",
    "price": 4300,
    "icon": "🕰️",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "night_vision",
      "extend_study_session"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Secure Delivery System",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Night Vision",
        "rules": "The Chronometer grants you darkvision out to a range of 60 feet for as long as it is worn. This effect does not require an action or concentration."
      },
      {
        "title": "Extend Study Session",
        "rules": "For every hour you spend studying while wearing this chronometer, your effective Intelligence modifier increases by +1 (to a maximum of +5). This benefit lasts until the start of your next long rest. Excessive use can cause time distortion; after 24 hours of continuous study with this item, the user must succeed on a DC 15 Constitution saving throw or become confused for 1 hour."
      }
    ],
    "levelRequirementReason": "Academics and scholars of all levels can benefit from improved study capabilities.",
    "vendorReason": "This vendor stocks items that enhance the learning experience in a magical academy setting.",
    "shippingDetail": "Delivered swiftly, usually within one week of order placement.",
    "usage": {
      "activation": "Passive effect; simply wear it on your wrist.",
      "duration": "Until the start of your next long rest or until time distortion occurs (whichever comes first).",
      "endsWhen": "After a full day of continuous study, or if you fail the Constitution saving throw.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for enhancing long-term academic performance without being overpowered.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:36:39.587381+00:00",
    "aiReviewedAt": "2026-07-25T00:36:39.587381+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_fang_of_the_howler": {
    "id": "animatopia_fang_of_the_howler",
    "name": "Howler's Echo Fang",
    "description": "The Howler's Echo Fang is a massive fang harvested from the legendary Howler Beast. Its primal energy pulses with a deep, resonant hum, amplifying your roar and shattering enemy formations. When you use it, nearby foes are stunned for a moment, their movements thrown into chaotic frenzy. The fang seems to draw its power directly from the beast's wild heart, ensuring that only those attuned to nature can wield it with true effect.",
    "category": "equipment",
    "price": 4300,
    "icon": "🐺",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Stun and Frenzy",
      "Nature Resonance"
    ],
    "vendor": "forest_market",
    "shippedBy": "winged beetle",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Stun and Frenzy",
        "rules": "When you use the fang as an action, each creature within 10 feet of you that hears your roar must succeed on a DC 15 Constitution saving throw or be stunned for 1 round. On a successful save, they are instead shaken for 1 minute."
      },
      {
        "title": "Nature Resonance",
        "rules": "While the fang is in place, you gain a +2 bonus to your Charisma (Performance) checks and saving throws against being charmed or frightened. This effect lasts until you finish a long rest."
      }
    ],
    "levelRequirementReason": "Only those with a deep understanding of primal magic can harness the full power of the Howler's Echo Fang.",
    "vendorReason": "The forest market thrives on rare and powerful items found deep in the wild, making it the perfect place for this fang to be sold.",
    "shippingDetail": "Shipped by a swift winged beetle courier, this item is delivered directly from the heart of the forest, ensuring its freshness and potency.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; lasts until end of next turn for stunned creatures",
      "endsWhen": "On a successful save or after 1 round",
      "charges": "Unlimited"
    },
    "priceReason": "The fang's rarity and the deep magic required to craft it justify its moderate price.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:36:54.313535+00:00",
    "aiReviewedAt": "2026-07-25T00:36:54.313535+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_totem_of_the_ancient_grove": {
    "id": "animatopia_totem_of_the_ancient_grove",
    "name": "Whispering Totem",
    "description": "Hewn from petrified oak, this ancient totem pulses with a living essence that whispers of forgotten groves and lost knowledge. Its surface is etched with runes that glow faintly in the dark, aiding in the detection of hidden pathways and unseen threats. Though it offers no guidance on navigation, its subtle energy enhances your perception, making you acutely aware of your surroundings—perfect for those who seek to avoid or anticipate danger.",
    "category": "curiosities",
    "price": 160000,
    "icon": "🌿",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Enhanced Perception",
      "Detect Hidden Passages"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "giant_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Perception",
        "rules": "While holding the Whispering Totem, you gain a +50 bonus to perception checks. This effect lasts for 1 hour and can be reactivated once per long rest."
      },
      {
        "title": "Detect Hidden Passages",
        "rules": "You can use an action to attempt to detect hidden passages or traps within 30 feet. The DC of this check is 15, and you gain advantage on perception checks made to notice secret doors in the area."
      }
    ],
    "levelRequirementReason": "The Totem's enhanced abilities are most beneficial to lower-level adventurers who can maximize its effects.",
    "vendorReason": "The Tribal Trader has a deep connection with ancient relics and finds the Totem’s origin intriguing.",
    "shippingDetail": "Delivered by a giant snail, which ensures the totem arrives in pristine condition after its long journey from the grove.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "1 hour (recharges at dawn)",
      "endsWhen": "The duration ends when you finish a short rest or are incapacitated.",
      "charges": "Unlimited, recharged at dawn"
    },
    "priceReason": "Balanced to offer significant utility without being overly powerful for its mythic rarity.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T00:37:16.345367+00:00",
    "aiReviewedAt": "2026-07-25T00:37:16.345367+00:00",
    "aiReviewVersion": 1
  },
  "internet_neural_amplifier": {
    "id": "internet_neural_amplifier",
    "name": "Quantum Echo Headset",
    "description": "The Quantum Echo Headset hums with a subtle, otherworldly glow as it warps your auditory senses into the digital realm. This sleek, black headset allows you to briefly access hidden networks and gain an unsettling awareness of every digital conversation across The Internet, providing fleeting glimpses into the fragmented memories of connected devices. With each use, you can enhance your perception checks related to digital information, though the experience leaves you disoriented for a moment afterward.",
    "category": "equipment",
    "price": 16000,
    "icon": "🎧",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Digital Awareness",
      "Fragmented Memories"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Cyber Courier",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Digital Awareness",
        "rules": "As an action, the wearer gains advantage on Perception checks related to digital information for 1 minute. This effect ends if the user takes any damage or if they voluntarily end it."
      },
      {
        "title": "Fragmented Memories",
        "rules": "The wearer can briefly glimpse fragmented memories from connected devices once per long rest. This effect has a cumulative disadvantage on subsequent uses, starting with disadvantage and increasing by one step for each previous use until the user must make a DC 15 Wisdom saving throw to avoid being stunned for 1 minute."
      }
    ],
    "levelRequirementReason": "The headset's advanced technology requires a certain level of expertise to wield without causing severe digital disturbances.",
    "vendorReason": "Pixel Shop specializes in cutting-edge tech and rare artifacts, making the Quantum Echo Headset an appropriate addition to their inventory.",
    "shippingDetail": "Ships via Cyber Courier with expedited delivery within a week of order placement.",
    "usage": {
      "activation": "As an action",
      "duration": "1 minute or until the wearer takes damage",
      "endsWhen": "The effect ends if the user takes any damage, voluntarily ends it, or upon completion of its duration",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced to reflect the headset's limited recharge rate and the specialized tech required for such an item.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:37:35.756990+00:00",
    "aiReviewedAt": "2026-07-25T00:37:35.756990+00:00",
    "aiReviewVersion": 1
  },
  "internet_godly_data_shard": {
    "id": "internet_godly_data_shard",
    "name": "The Source Core",
    "description": "The Source Core is a pulsating data shard recovered from the heart of The Internet itself. This fragment of raw information grants its wielder unparalleled knowledge and insight into digital realms, allowing them to instantly learn any digital skill at the cost of a Wisdom saving throw. When activated, it creates a small area of ‘digital static’ that disrupts electronic devices within 30 feet for one minute, requiring a successful DC 15 Constitution saving throw or be temporarily affected themselves.",
    "category": "premium",
    "price": 1100000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "Instant Digital Skill Mastery",
      "Electromagnetic Disruption"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Quantum Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Digital Skill Mastery",
        "rules": "The user can instantly learn any digital skill by making a Wisdom saving throw (DC 20). On a failure, the user is unable to use that skill for 1 hour."
      },
      {
        "title": "Electromagnetic Disruption",
        "rules": "Activates when within range. Creates an area of digital static disrupting electronic devices within 30 feet. Targets must make a DC 15 Constitution saving throw or be temporarily affected themselves, with the effect lasting for one minute."
      }
    ],
    "levelRequirementReason": "Requires basic understanding and access to technology.",
    "vendorReason": "The cyber market specializes in rare tech artifacts and data fragments.",
    "shippingDetail": "Ships via secure quantum courier, with a two-week delivery time.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for digital skill mastery; one minute for electromagnetic disruption",
      "endsWhen": "Targeted save is successful or the effect duration ends",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering its rarity and utility in a tech-driven campaign.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-25T00:37:10.847343+00:00",
    "aiReviewedAt": "2026-07-25T00:37:10.847343+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_electric_volt_orb": {
    "id": "pokemon_item_electric_volt_orb",
    "name": "Electric Volt Orb",
    "description": "The Electric Volt Orb pulses with a vibrant, crackling energy that makes nearby Pokémon twitch and shiver in fear. Crafted from fragments of a legendary thunderbird’s first lightning strike, it not only deals potent electrical damage but also has a chance to paralyze your foes, making it an invaluable tool for trainers and gadgeteers alike. The orb's faintly burnt-toast scent lingers, hinting at the power it holds within its core.",
    "category": "consumables",
    "price": 1000,
    "icon": "⚡️",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Lightning Damage",
      "Paralyze on Hit"
    ],
    "vendor": "pokemart",
    "shippedBy": "swift_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lightning Damage",
        "rules": "When activated by a trainer or gadgeteer as an action, this orb deals 10d6 lightning damage to one target Pokémon. The target must succeed on a DC 15 Dexterity saving throw or be stunned for 1 minute."
      },
      {
        "title": "Paralyze on Hit",
        "rules": "There is a 25% chance (roll a d4) that the target will also be paralyzed on a successful hit. The paralysis lasts until the end of its next turn, and it can take an action to attempt a DC 15 Strength saving throw."
      }
    ],
    "levelRequirementReason": "This orb is suitable for beginners due to its straightforward activation and effects.",
    "vendorReason": "Pokemarts are well-known for their wide range of tools and gadgets that help trainers in various battles and encounters, making the Electric Volt Orb a natural addition.",
    "shippingDetail": "Ships within 1 business day via swift delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect",
      "endsWhen": "Exhausted after one use, recharges on a short rest.",
      "charges": "One charge per use"
    },
    "priceReason": "This balanced price reflects the item's unique combination of damage and immobilization effects.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T00:37:29.838499+00:00",
    "aiReviewedAt": "2026-07-25T00:37:29.838499+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_ancient_trainer_badge": {
    "id": "pokemon_item_ancient_trainer_badge",
    "name": "Ancient Trainer’s Badge of Valor",
    "description": "The Ancient Trainer’s Badge of Valor is a gleaming copper token, embossed with the visages of legendary Pokémon trainers. Its edges are worn smooth by time, yet it still radiates an unyielding aura that instills confidence in its wearer. It was crafted during the height of the old gym battles and has since bolstered many a trainer's resolve. With this badge, your Pokémon’s accuracy is bolstered, and you stand a little taller against the world’s most overconfident Pidgey.",
    "category": "equipment",
    "price": 4300,
    "icon": "🏆",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+5 to Pokémon attack",
      "Increases Pokémon accuracy by 10%"
    ],
    "vendor": "league_store",
    "shippedBy": "express_mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Increased Accuracy",
        "rules": "This badge provides a +2 bonus to your Pokémon's accuracy. This effect is passive and does not require any action from the wearer."
      },
      {
        "title": "Boosted Attack",
        "rules": "When you or your Pokémon attack, gain a +5 bonus to the attack roll. You can use this ability once per long rest."
      }
    ],
    "levelRequirementReason": "The badge's powers are best suited for experienced trainers who have already faced their fair share of challenges.",
    "vendorReason": "The league store is known to stock items that can help trainers progress in their journeys, and this badge is a perfect example of such an item.",
    "shippingDetail": "Express mail delivery ensures the badge arrives at your door promptly, ready for you to use on your next battle.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous and permanent until recharged.",
      "endsWhen": "Exhausted after one long rest.",
      "charges": "Recharges after a long rest."
    },
    "priceReason": "The badge's rarity and the unique benefits it provides justify its price, offering trainers a significant advantage without breaking the balance of the game.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-25T00:37:46.094281+00:00",
    "aiReviewedAt": "2026-07-25T00:37:46.094281+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_mystic_berry_potion": {
    "id": "pokemon_item_mystic_berry_potion",
    "name": "Mystic Berry Potion",
    "description": "Crafted from iridescent berries plucked deep within the uncharted forests of Pokémon Regions, this Mystic Berry Potion is a rare elixir said to possess the essence of nature itself. Upon consumption, it instantly heals up to 100 hit points and restores your energy, granting you the strength to face new challenges. However, those who imbibe too freely risk succumbing to whimsical side effects like uncontrollable giggling or an overwhelming urge to catch every Pokémon in sight.",
    "category": "consumables",
    "price": 290,
    "icon": "🍇",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Heals Hit Points",
      "Restores Energy"
    ],
    "vendor": "safari_shop",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Elixir",
        "rules": "Upon activation, the potion heals up to 100 hit points. The effect is instantaneous and does not provoke an attack of opportunity."
      },
      {
        "title": "Energy Boost",
        "rules": "Restores a number of energy points equal to your Constitution modifier (minimum +2). This effect lasts for one hour, during which you are immune to exhaustion from moderate exertion or stress."
      }
    ],
    "levelRequirementReason": "This potion is designed for novice trainers who may need quick healing and a boost in energy.",
    "vendorReason": "The Safari Shop stocks this potion as a staple item for Pokémon enthusiasts, ensuring that every trainer can have access to its restorative powers.",
    "shippingDetail": "Delivered within one hour of purchase at the nearest city center.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "Instantaneous healing; energy boost lasts for one hour.",
      "endsWhen": "The potion is consumed, or after one hour if used for the energy boost effect.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the rare ingredients and the complex brewing process required to create such an effective yet whimsical potion.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:38:00.625940+00:00",
    "aiReviewedAt": "2026-07-25T00:38:00.625940+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_rusty_cog": {
    "id": "connectopia_rusty_cog",
    "name": "Overclocked Sprocket",
    "description": "This Overclocked Sprocket gleams with a metallic sheen, its gears spun from salvaged iron and brass. Crafted from an Automaton prototype gone haywire, it hums with untamed energy. Use it to accelerate your crafting tasks by +20% for 1 minute, but be wary—on activation, there's a 5% chance of a small spark igniting in the immediate area, potentially causing minor disruptions or distractions. Wario's favorite chaotic trinket.",
    "category": "consumables",
    "price": 290,
    "icon": "⚙️",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Crafting Speed Boost",
      "Minor Spark Hazard"
    ],
    "vendor": "block_smith",
    "shippedBy": "rolling_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crafting Speed Boost",
        "rules": "When activated as a bonus action, the Overclocked Sprocket increases your crafting speed by +20% for 1 minute. The effect ends if you take damage or if you use an action to craft something else."
      },
      {
        "title": "Minor Spark Hazard",
        "rules": "Upon activation, there is a 5% chance that a small spark ignites in the immediate area (within 5 feet). This causes a minor distraction and ends the effect of the Overclocked Sprocket. If multiple sparks occur within the same round, they do not stack but instead increase the risk of a larger disruption."
      }
    ],
    "levelRequirementReason": "Crafters at any level can benefit from increased efficiency, making this item accessible to beginners.",
    "vendorReason": "The Block Smith specializes in crafting and selling tools for tinkers and builders, including items that enhance productivity or creativity.",
    "shippingDetail": "Delivered by a rolling cart manned by enthusiastic dwarven engineers, ensuring the Overclocked Sprocket reaches its destination with minimal delay.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "Taking damage or using an action to craft something else",
      "charges": "Unlimited"
    },
    "priceReason": "The Overclocked Sprocket's price is adjusted based on its unique benefits, increased crafting speed, and the risk of minor hazards.",
    "priceOriginal": 150,
    "priceReviewedAt": "2026-07-25T00:38:36.504891+00:00",
    "aiReviewedAt": "2026-07-25T00:38:36.504891+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_geode_shard": {
    "id": "connectopia_geode_shard",
    "name": "Resonance Crystal Fragment",
    "description": "A Resonance Crystal Fragment, a jagged shard of a rare geode that glows with an eerie blue light. Crafted from ancient minerals deep within the earth, this fragment amplifies your mining prowess for fleeting moments—perfect for those who dare to delve into the heart of the mountain. However, prolonged exposure risks triggering vivid hallucinations, causing you to see the world through a lens of colossal stone blocks and glowing veins of ore.",
    "category": "curiosities",
    "price": 4300,
    "icon": "💎",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Mining Speed Boost",
      "Rare Mineral Discovery"
    ],
    "vendor": "Craft Corner",
    "shippedBy": "Delivery Bot",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Mining Speed Boost",
        "rules": "When activated as an action, you gain a +25% bonus to mining checks for 30 seconds. The effect ends early if you take any damage or if your concentration is broken."
      },
      {
        "title": "Rare Mineral Discovery",
        "rules": "Once per short rest, this fragment allows you to discover rare minerals upon successful completion of a mining check. There is a 15% chance that the found mineral will be uncommon instead of common."
      }
    ],
    "levelRequirementReason": "This fragment requires significant skill and experience for safe handling, suitable only for seasoned miners.",
    "vendorReason": "The Craft Corner specializes in rare mining tools and artifacts, making it the ideal vendor for this unique item.",
    "shippingDetail": "Ships directly from the depths of the mine; expedited service available.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds",
      "endsWhen": "You take damage or lose concentration",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's rarity and the risk involved in its use.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-25T00:38:32.504670+00:00",
    "aiReviewedAt": "2026-07-25T00:38:32.504670+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_liminal_repair": {
    "id": "almost_edge_item_liminal_repair",
    "name": "Fractured Reflection Calibration",
    "description": "Fractured Reflection Calibration is a meticulously crafted device of polished obsidian and unsettlingly smooth metal. This arcane tool allows you to subtly adjust the boundaries of your perception, reducing disorientation in areas of extreme liminality or simply ensuring that even Wario finds his way back. Crafted by Liminal Trader's most trusted artisans, it channels the essence of shifting realities, granting a serene mind amidst chaos and providing a subtle enhancement to your senses.",
    "category": "services",
    "price": 4300,
    "icon": "🛠️",
    "stock": 3,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "reduce_disorientation",
      "enhanced_perception"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "sentient_mirror",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reduce Disorientation",
        "rules": "As an action, you can activate the Fractured Reflection Calibration to reduce disorientation in areas of extreme liminality. You gain advantage on saving throws against being frightened or charmed for 1 hour. The effect ends if you are incapacitated."
      },
      {
        "title": "Enhanced Perception",
        "rules": "You gain a +1 bonus to your passive perception and insight checks, which lasts until the end of your next short rest. This benefit does not stack with other sources of similar bonuses."
      }
    ],
    "levelRequirementReason": "This device is designed for adventurers who may find themselves in unpredictable environments.",
    "vendorReason": "Liminal Trader is known for their expertise in items that navigate the edges of reality, making this calibration a natural addition to their inventory.",
    "shippingDetail": "The device is carefully transported by a sentient mirror, ensuring it arrives intact and attuned to its new owner's needs.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until incapacitated",
      "endsWhen": "Incapacitation or the start of your next short rest",
      "charges": "Unlimited (recharges after a long rest)"
    },
    "priceReason": "The device's rarity and specialized craftsmanship justify its moderate price.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:38:00.875748+00:00",
    "aiReviewedAt": "2026-07-25T00:38:00.875748+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_void_shard_of_despair": {
    "id": "almost_edge_item_void_shard_of_despair",
    "name": "The Silent Bite",
    "description": "The Silent Bite is a jagged shard of void, its surface etched with runes that whisper of forgotten despair. Holding it for more than a moment fills your mind with an overwhelming sense of loss, making you question the meaning of existence itself. Yet, in this cold embrace lies a hidden power, as it drains healing from your allies and grants you a chance to instill fear into your foes, though staring too long could lock you into an endless loop of regret.",
    "category": "equipment",
    "price": 16000,
    "icon": "💀",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "drain_healing",
      "chance_to_instill_fear"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "black_raven",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Drain Healing",
        "rules": "When a creature heals hit point damage while within 5 feet of the Silent Bite, it must succeed on a DC 14 Constitution saving throw or take an amount of necrotic damage equal to half the healing received."
      },
      {
        "title": "Chance to Instill Fear",
        "rules": "As a bonus action, you can point the Silent Bite at a creature within 30 feet. That creature must succeed on a DC 14 Wisdom saving throw or be frightened for 1 minute. The effect ends early if the creature moves more than 30 feet away from you."
      }
    ],
    "levelRequirementReason": "The Silent Bite's power requires a deep understanding of despair and loss, bestowing its abilities on those who have faced significant trials.",
    "vendorReason": "Edge Wanderer collects strange relics from the darkest corners of the realm, making this shard an appropriate addition to their inventory.",
    "shippingDetail": "The Black Raven ensures swift and secure delivery, but the Silent Bite must be kept in total darkness during transit to preserve its power.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Instantaneous; fear effect lasts for 1 minute",
      "endsWhen": "The creature moves more than 30 feet away, or the effect is dispelled by magic",
      "charges": "Unlimited"
    },
    "priceReason": "The Silent Bite's balanced price reflects its unique combination of draining abilities and fear-inducing power.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:38:57.371868+00:00",
    "aiReviewedAt": "2026-07-25T00:38:57.371868+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_rune_of_gearth": {
    "id": "earth_land_rune_of_gearth",
    "name": "Stone Singer's Echo",
    "description": "Stone Singer's Echo is a perfectly formed obsidian rune carved from an ancient mountain stone. Its surface glows faintly, resonating with the earth’s heartbeat and humming with the whispers of old dwarven chants. When wielded by a bard or druid in harmony with nature, it can invoke minor tremors that disorient foes and amplify their own performances into true epics. Legend holds that it was used to invoke the favor of the mountain spirits themselves.",
    "category": "curiosities",
    "price": 290,
    "icon": "⛰️",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Minor Earth Tremor",
      "Enhanced Performance"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Earth Tremor",
        "rules": "When you use this item, a minor tremor ripples outward from your position. This causes all creatures within a 10-foot radius to make a DC 12 Dexterity saving throw or be knocked prone for 1 round."
      },
      {
        "title": "Enhanced Performance",
        "rules": "While holding Stone Singer's Echo, you gain advantage on performance checks and can cast the Entangle spell once per short rest. This effect does not require a component other than your own voice."
      }
    ],
    "levelRequirementReason": "This item is crafted for those who seek to commune with nature or amplify their performances, but even a novice bard can appreciate its power.",
    "vendorReason": "The Earth Emporium specializes in relics and artifacts that connect users to the natural world, making it the perfect vendor for this rune.",
    "shippingDetail": "Delivered by a giant messenger, ensuring safe arrival with minimal delay.",
    "usage": {
      "activation": "Object interaction or bardic performance action",
      "duration": "Instantaneous effect; ends when used",
      "endsWhen": "The effect ends immediately after use",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity, origin, and unique effects justify its price of 1000 XP.",
    "priceOriginal": 950,
    "priceReviewedAt": "2026-07-25T00:38:30.687452+00:00",
    "aiReviewedAt": "2026-07-25T00:38:30.687452+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_rune_attunement": {
    "id": "earth_land_rune_attunement",
    "name": "The Guild Quartermaster's Blessing",
    "description": "The Guild Quartermaster's Blessing is a personalized rune attunement crafted to enhance your combat prowess. The gruff but reliable quartermaster spends an hour lecturing you on battle axes, imbuing your weapon with a potent mix of luck and efficiency. For one hour, your attacks gain +3 to hit and have a 5% chance to score a critical hit, while your movement speed increases by 10%. This rune is forged from the very heart of the guild’s storied armory, ensuring unparalleled durability.",
    "category": "services",
    "price": 4300,
    "icon": "📜",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+3 to attack rolls for one hour",
      "5% increased chance of critical hit"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "courier_hawkwing",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Fortunate Strokes",
        "rules": "Activates on command as a bonus action. Lasts for one hour, providing +3 to all attack rolls made during this time. Ends when the duration expires."
      },
      {
        "title": "Lucky Blow",
        "rules": "Activates whenever you make an attack roll. Increases the chance of scoring a critical hit by 5%, but only once per short or long rest."
      }
    ],
    "levelRequirementReason": "The complexity and personalization required for such attunement align with a character's mid-level combat expertise.",
    "vendorReason": "As the guild's authority on weapon lore, the quartermaster can offer unique runes that enhance both form and function.",
    "shippingDetail": "Delivered by a swift hawkwing courier within three days.",
    "usage": {
      "activation": "Bonus action to activate Fortunate Strokes, automatic on Lucky Blow.",
      "duration": "Fortunate Strokes lasts one hour. Lucky Blow applies once per short or long rest.",
      "endsWhen": "Duration of Fortunate Strokes expires; Lucky Blow ends with the end of a short or long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The craftsmanship and attunement align this service with a rare item, justifying its high price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:38:50.309658+00:00",
    "aiReviewedAt": "2026-07-25T00:38:50.309658+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_distraction": {
    "id": "kivotos_item_halo_of_distraction",
    "name": "The Cacophony Halo",
    "description": "The Cacophony Halo is a shimmering, chaotic device that emits a cacophonous blend of electronic hums and dissonant classical melodies. This miniature crown can deafen foes with its relentless noise, causing them to stagger and lose their focus. It's particularly effective when wielded in crowded spaces where the distraction affects not just one, but all nearby targets. The halo is a favorite among pranksters and bards who revel in creating chaotic distractions.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔊",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Sonic Disruption",
      "Area Distraction"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Sonic Disruption",
        "rules": "As an action, the wielder activates the halo. A target within 10 feet must succeed on a DC 13 Dexterity saving throw or be deafened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "title": "Area Distraction",
        "rules": "The halo creates an area of distraction with a 20-foot radius centered on the wielder. For the duration (1 minute), all creatures within this area have disadvantage on attack rolls and ability checks that require precision, including Dexterity-based checks."
      }
    ],
    "levelRequirementReason": "This device is designed for characters who can handle its unpredictable nature and are proficient in using it.",
    "vendorReason": "The student store often stocks quirky gadgets like the Cacophony Halo, appealing to students seeking unique distractions during exams or social gatherings.",
    "shippingDetail": "Delivered via standard mail within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The duration ends when the effect is successfully saved against or the duration expires.",
      "charges": "Unlimited"
    },
    "priceReason": "This item offers a unique and versatile utility that can be used in various social or combat scenarios, making it worth its price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:39:11.022803+00:00",
    "aiReviewedAt": "2026-07-25T00:39:11.022803+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_scholarship_contract": {
    "id": "kivotos_item_scholarship_contract",
    "name": "The Prestige Pact",
    "description": "The Prestige Pact is an ancient parchment contract that seems to whisper secrets of influence. This rare document grants a +5 bonus on persuasion checks with faculty members, allowing you to sway even the most stern professors. Additionally, it opens access to exclusive training areas where only the most promising scholars are admitted. Failure to uphold your end can result in losing these privileges and the stipend that comes with them.",
    "category": "services",
    "price": 4300,
    "icon": "📜",
    "stock": 1,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Scholarly Influence",
      "Exclusive Access"
    ],
    "vendor": "club_supply",
    "shippedBy": "secure_messenger",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Scholarly Influence",
        "rules": "Activate as a bonus action. Grants a +5 bonus on persuasion checks with faculty members. Ends when the contract is breached or if it expires."
      },
      {
        "title": "Exclusive Access",
        "rules": "Passive effect, accessible upon signing. Opens access to exclusive training areas. Expires after 1 year unless renewed through continued good behavior and donations."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to negotiate and maintain such a binding agreement.",
    "vendorReason": "Club Supply handles rare contracts due to their connections with the Academy's administration.",
    "shippingDetail": "Ships within one week; secure messengers ensure the contract reaches its destination safely and confidentially.",
    "usage": {
      "activation": "Bonus action for Scholarly Influence, passive effect for Exclusive Access.",
      "duration": "Permanent until breached or expired.",
      "endsWhen": "Contract is breached, expires after a year, or if not renewed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP due to the significant benefits and scholarly value it provides.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:38:50.464907+00:00",
    "aiReviewedAt": "2026-07-25T00:38:50.464907+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronometric_brace": {
    "id": "almost_edge_item_chronometric_brace",
    "name": "Chronometric Brace of Temporal Echoes",
    "description": "The Chronometric Brace of Temporal Echoes is a delicate, iridescent band crafted from frozen time itself. Its surface shimmers with past moments, and when worn, it allows its wearer to briefly manipulate temporal flow. Wielders can rewind reality by 3 seconds once per combat encounter, disrupting the flow and causing minor distortions in their personal timeline. With each use, however, there's a growing risk of unpredictable time shifts that could affect not just the user but the very fabric of space around them.",
    "category": "equipment",
    "price": 16000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Manipulation",
      "Dexterity Boost"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Temporal Manipulation",
        "rules": "The wearer can rewind their personal timeline by 3 seconds, causing all enemies within 5 feet to have their next attack roll made with disadvantage. This effect has a cooldown of 6 turns and expends charges."
      },
      {
        "title": "Dexterity Boost",
        "rules": "+3 to Dexterity saving throws while the wearer is not engaged in combat. This effect lasts until the start of the wearer's next turn after engaging in combat, or until expended."
      }
    ],
    "levelRequirementReason": "Wielders must be at least level 12 to handle such a delicate and unstable piece of time-altered craftsmanship.",
    "vendorReason": "The Edge Wanderer has access to rare, arcane artifacts like the Chronometric Brace due to their extensive travels through temporal anomalies.",
    "shippingDetail": "Ships via a trusted winged courier, delivered within one hour of purchase.",
    "usage": {
      "activation": "Action (once per combat encounter)",
      "duration": "Instantaneous effect",
      "endsWhen": "Cooldown ends after 6 turns or expended",
      "charges": "2 charges; regains 1 charge at the start of each short rest"
    },
    "priceReason": "The Chronometric Brace's price is set at 1000 XP, reflecting its rarity and the materials needed to forge it.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-25T00:39:46.553960+00:00",
    "aiReviewedAt": "2026-07-25T00:39:46.553960+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_shadow_hoof_dagger": {
    "id": "equestria_item_shadow_hoof_dagger",
    "name": "Shadow Hoof Dagger of Discord",
    "description": "The Shadow Hoof Dagger of Discord, forged in the deepest caverns beneath Nightmare's Keep, whispers promises of chaos and disruption to any who wield it. Its blade glows ominously in the dark, and when drawn, it snares nearby allies with a whispering compulsion that tempts them into discord. A single swing can rend flesh, but beware—its very touch might just incite a spectacularly messy argument within your own party.",
    "category": "equipment",
    "price": 4300,
    "icon": "😈",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_damage",
      "compulsive_conflict"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "griffons_express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Increased Damage",
        "rules": "When you strike an evil creature with the Shadow Hoof Dagger, it deals an additional 1d6 necrotic damage. This effect does not stack."
      },
      {
        "title": "Compulsive Conflict",
        "rules": "Once per short rest, as a bonus action, you can use the dagger to tempt nearby party members into a brief argument. Each ally within 5 feet of you must make a DC 14 Wisdom saving throw or become disarmed for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires proficiency with daggers and an understanding of the risks involved in wielding such a dangerous artifact.",
    "vendorReason": "Ponyville Market is known for its diverse stock, including rare and exotic items like this dagger.",
    "shippingDetail": "Ships via special courier with a guaranteed delivery within three days.",
    "usage": {
      "activation": "Bonus action to use the dagger's compulsive effect on nearby allies.",
      "duration": "The compelled argument lasts for 1 minute or until one of the involved party members makes a successful Wisdom saving throw.",
      "endsWhen": "The argument ends when a party member successfully saves or it expires after 1 minute.",
      "charges": "One use per short rest."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's rare origin and its dual-edged nature—both powerful in combat and perilous for team cohesion.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-25T00:39:30.393780+00:00",
    "aiReviewedAt": "2026-07-25T00:39:30.393780+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_forbidden_heartstone": {
    "id": "equestria_item_forbidden_heartstone",
    "name": "Heartstone of Silent Sorrow",
    "description": "The Heartstone of Silent Sorrow, crafted from the petrified essence of a forgotten mare, glows faintly in the dark. It whispers secrets to those who dare touch it but at a terrible cost: prolonged contact can drive even the most steadfast into a spiral of despair and obsession with crafting tiny figurines out of despair. The stone's power is both a gift and a curse, revealing truths that might be better left hidden.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🖤",
    "stock": 5,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "reveals_hidden_secrets",
      "drives_to_despair"
    ],
    "vendor": "crystal_empire_black_market",
    "shippedBy": "shadow_rats",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Reveal Hidden Secrets",
        "rules": "When touched, the stone grants the wielder advantage on History checks related to forgotten lore. However, prolonged contact (more than 10 minutes) can cause the wielder to be charmed by the stone for 1 hour, during which they become obsessed with crafting miniature ponies out of despair."
      },
      {
        "title": "Drive to Despair",
        "rules": "Every hour of continuous contact with the stone deals 1d6 psychic damage. The effect ends if the wielder makes a DC 15 Wisdom saving throw, or after 24 hours regardless."
      }
    ],
    "levelRequirementReason": "The Heartstone's power requires a deep understanding of forgotten lore and resilience to its effects.",
    "vendorReason": "The Crystal Empire's Black Market often deals in relics of ancient magic, including those that are forbidden or controversial.",
    "shippingDetail": "Delivered by the elusive Shadow Rats, known for their unpredictable and dangerous courier routes.",
    "usage": {
      "activation": "Interact (object interaction)",
      "duration": "Instantaneous; effect lasts until the end of the encounter or until a saving throw is made.",
      "endsWhen": "A successful Wisdom saving throw or after 24 hours if not used.",
      "charges": "Unlimited, but only one use per short rest."
    },
    "priceReason": "The Heartstone's rarity and the risk involved in its use justify a price of 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T14:30:13.395276+00:00",
    "aiReviewedAt": "2026-07-25T14:30:13.395276+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_giant_puffball": {
    "id": "mushroom_kingdom_item_giant_puffball",
    "name": "Giant Puffball Launcher",
    "description": "The Giant Puffball Launcher, a colossal mushroom with a sturdy pull-back mechanism, is a marvel of nature and engineering. Its resilient cap can be primed for a powerful launch, sending enemies flying or propelling you to new heights. With each activation, the launcher's vibrant gills emit a telltale glow, alerting all nearby creatures to its readiness. Caution must be taken to avoid accidental launches due to its unpredictable bounce and potential for ricochets.",
    "category": "equipment",
    "price": 16000,
    "icon": "🍄",
    "stock": 7,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Ricochet Threat",
      "Stun on Hit"
    ],
    "vendor": "wario_direct",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Ricochet Threat",
        "rules": "When the Giant Puffball Launcher is activated, there's a 25% chance that any launched projectile will ricochet off surfaces, potentially hitting an additional target within 10 feet. The DM decides if this secondary effect deals half damage to the new target."
      },
      {
        "title": "Stun on Hit",
        "rules": "On a successful hit against an enemy with a bludgeoning attack, there is a 30% chance that the target is stunned for 1 round. The DC of this saving throw is equal to 8 + your proficiency bonus + your Strength modifier."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level due to its complex mechanics and powerful effects.",
    "vendorReason": "Wario Direct specializes in unique, over-the-top merchandise like the Giant Puffball Launcher, which perfectly aligns with their brand of absurdity and power.",
    "shippingDetail": "The mushroom cart delivers this item swiftly but with caution, ensuring it arrives intact and primed for action.",
    "usage": {
      "activation": "Action to prime the launcher; bonus action to release the stored force in a powerful launch.",
      "duration": "Instantaneous effect upon release",
      "endsWhen": "Charges are exhausted or the item is destroyed by excessive force",
      "charges": "5 uses per long rest"
    },
    "priceReason": "The Giant Puffball Launcher offers a unique and powerful combination of damage, utility, and risk, justifying its cost.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:39:43.382775+00:00",
    "aiReviewedAt": "2026-07-25T00:39:43.382775+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_potion_of_infinite_hunger": {
    "id": "mushroom_kingdom_item_potion_of_infinite_hunger",
    "name": "Potion of Infinite Hunger",
    "description": "This viscous, crimson potion exudes an aura of malevolent hunger. As you drink it, your body begins to crave sustenance in a way that defies logic and reason. Your stomach growls uncontrollably, and soon, you find yourself devouring the nearest edible object – be it a mundane wooden chair or a hapless NPC. The potion's effects are nearly instant, leaving you with an insatiable hunger that can only be sated by consuming everything in your path until nothing remains.",
    "category": "consumables",
    "price": 290,
    "icon": "🍔",
    "stock": 90,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Infinite Hunger",
      "Temporary Health Restoration"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Infinite Hunger",
        "rules": "Upon activation, you gain a +2 bonus to attack rolls and damage rolls for the next hour. However, this effect also increases your Constitution by 4 (to a maximum of 20) until you consume food or drink something other than water. If you fail a Wisdom saving throw (DC 15), you must make another save every hour on the hour while under the effects of the potion."
      },
      {
        "title": "Temporary Health Restoration",
        "rules": "When consumed, this potion restores 20 hit points to you and grants temporary hit points equal to your level + your Constitution modifier until you finish a short or long rest. The potion also has only one use per day."
      }
    ],
    "levelRequirementReason": "This potion is designed for adventurers who are already capable of managing the effects it brings, such as those with some experience in combat and survival.",
    "vendorReason": "The Koopa Shop caters to adventurers seeking unique and potentially dangerous items that can be used strategically during their quests.",
    "shippingDetail": "The delivery drone ensures the potion is delivered in a sealed, insulated container to maintain its potency.",
    "usage": {
      "activation": "Drink the potion as an action.",
      "duration": "1 hour per use.",
      "endsWhen": "You finish a short or long rest, or consume food or drink other than water.",
      "charges": "One charge per day."
    },
    "priceReason": "The potion's rarity and the risk it poses to users justify its price, making it a sought-after commodity in the adventurer community.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T14:29:57.763816+00:00",
    "aiReviewedAt": "2026-07-25T14:29:57.763816+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_elemental_boots": {
    "id": "equestria_item_elemental_boots",
    "name": "Hoofprints of Harmony Boots",
    "description": "The Hoofprints of Harmony Boots are crafted from enchanted equine hooves and earth, imbued by a retired elementalsmith who once walked the Elemental Plane. These sturdy footwear allow you to channel one element at a time, granting resistance to its damage type and boosting your movement speed by +5 feet for 1 minute. Stomp with confidence, knowing that each step can trigger a 'harmony' effect on impact, potentially healing or aiding nearby allies.",
    "category": "equipment",
    "price": 16000,
    "icon": "🐴",
    "stock": 7,
    "rarity": "epic",
    "stockType": "delivery_only",
    "effects": [
      "Elemental Resistance",
      "Increased Speed"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "griffin_delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Elemental Resistance",
        "rules": "Upon activation, you gain resistance to one randomly chosen element (earth, fire, water, air) for 1 minute. This effect ends if you lose consciousness or when the duration expires."
      },
      {
        "title": "Increased Speed",
        "rules": "For the duration of this effect, your walking speed increases by +5 feet. This benefit ceases if you drop below half hit points or fall unconscious."
      }
    ],
    "levelRequirementReason": "Crafted for experienced adventurers who can handle the strain and magic required to channel elemental power.",
    "vendorReason": "The respected Canterlot Commerce has the connections to source such powerful, custom-made equipment from retired artisans like the elementalsmith.",
    "shippingDetail": "Ships via swift Griffin Delivery, with a guaranteed arrival within two days of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "You lose consciousness or drop below half your hit points; ends after the duration if neither condition occurs.",
      "charges": "Unlimited"
    },
    "priceReason": "The boots are crafted with rare equine hooves and earth, requiring significant time and resources to produce.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T00:40:14.539191+00:00",
    "aiReviewedAt": "2026-07-25T00:40:14.539191+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_princesses_favor": {
    "id": "equestria_item_princesses_favor",
    "name": "Princess's Favour - A Blessing of Friendship",
    "description": "The Princess's Favour radiates a soft, golden glow that signifies goodwill and unity among all equestrians. This legendary amulet not only grants its bearer an unparalleled boost in diplomacy and persuasion but also bestows a soothing warmth akin to a summer breeze, restoring the heart as much as it heals the body. Wielded with grace, it can turn even the most skeptical pony into a steadfast ally or friend.",
    "category": "services",
    "price": 68000,
    "icon": "👑",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Blessing of Persuasion",
      "Heartwarming Warmth"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_messenger",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Blessing of Persuasion",
        "rules": "When activated, this amulet grants the user a +5 bonus to Charisma (Persuasion) checks for up to 5 turns. The effect can be used once per long rest."
      },
      {
        "title": "Heartwarming Warmth",
        "rules": "Upon activation, the wearer gains temporary hit points equal to 2d8 + their Charisma modifier. This effect lasts for 10 minutes and can only be used once every 7 days."
      }
    ],
    "levelRequirementReason": "The amulet's power is too potent, requiring at least third-level proficiency in diplomacy or persuasion to wield it effectively.",
    "vendorReason": "As a royal artifact, the Princess's Favour is exclusively sold by Canterlot Commerce, known for its connections with the highest echelons of Equestrian society.",
    "shippingDetail": "Shipped via the Royal Messenger Service; delivery takes no longer than one week, ensuring swift arrival.",
    "usage": {
      "activation": "Action: The wearer must speak a command word to activate the amulet's effects.",
      "duration": "Blessing of Persuasion lasts for up to 5 turns. Heartwarming Warmth lasts for 10 minutes and can be used once every 7 days.",
      "endsWhen": "The effects end when the wearer is incapacitated or falls unconscious, or after their duration expires.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The amulet's price reflects its rarity and the legendary craftsmanship required to create such an artifact.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:41:05.871735+00:00",
    "aiReviewedAt": "2026-07-25T00:41:05.871735+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_whisperwind_scroll": {
    "id": "the_edge_whisperwind_scroll",
    "name": "Whisperwind Scroll",
    "description": "The Whisperwind Scroll hums with an eerie, otherworldly whisper when unrolled, its surface etched with ancient runes that glow faintly in the dark. Unfurling it releases a chilling gust of wind that momentarily disorients enemies, leaving them vulnerable for moments and illuminating hidden passages that were once concealed by the very fabric of space-time itself. Be wary; the scroll's whispers can lure you into a trance-like state, so focus on your surroundings lest you find yourself lost in its depths.",
    "category": "consumables",
    "price": 290,
    "icon": "💨",
    "stock": 47,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Chilling Gust",
      "Reveal Hidden Passage"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Void Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Chilling Gust",
        "rules": "When activated as an action, the scroll releases a gust of chilling wind that targets one creature within 30 feet. The target must make a DC 12 Dexterity saving throw or be disoriented for 1 minute, during which time it has disadvantage on attack rolls and ability checks. This effect ends if the target is hit by an attack."
      },
      {
        "title": "Reveal Hidden Passage",
        "rules": "The scroll reveals a hidden passage with a 50% chance upon activation. The revealed path grants advantage on perception checks to detect secret doors or hidden passages within 30 feet of you for 1 hour."
      }
    ],
    "levelRequirementReason": "This scroll is designed for beginners who can manage its subtle, yet powerful effects.",
    "vendorReason": "The Abyss Trader specializes in items that traverse realms and dimensions, making the Whisperwind Scroll a fitting addition to their inventory.",
    "shippingDetail": "Shipping via the Void Courier is instantaneous as it travels through the interdimensional void.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Chilling Gust; advantage on perception checks for Reveal Hidden Passage lasts until the next dawn.",
      "endsWhen": "The target of Chilling Gust makes a successful saving throw or is hit by an attack, and the effect ends. The hidden passage reveal persists until the next dawn.",
      "charges": "Unlimited"
    },
    "priceReason": "The scroll's ability to disorient enemies and unveil hidden paths offers significant battlefield advantages without being overpowered.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:41:20.014654+00:00",
    "aiReviewedAt": "2026-07-25T00:41:20.014654+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_voidshard_amulet": {
    "id": "the_edge_voidshard_amulet",
    "name": "Amulet of Fractured Echoes",
    "description": "The Amulet of Fractured Echoes is forged from fragments of a shattered dimension, its surface etched with cryptic runes. This artifact hums with an unsettling energy that grants resistance to psychic damage and allows the wearer to glimpse fleeting echoes of potential futures, though these visions are often confusing and elusive. The amulet's power is drawn from the very fabric of fractured dimensions, making it a rare and coveted relic among scholars and spellcasters.",
    "category": "equipment",
    "price": 5400,
    "icon": "🔮",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "psychic resilience",
      "future glimpses"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Dimensional Parcel Service",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Psychic Resilience",
        "rules": "The wearer gains resistance to psychic damage for the duration of a short rest. This effect cannot be gained more than once per day."
      },
      {
        "title": "Future Glimpses",
        "rules": "Once per long rest, the wearer can attempt to see a vision of a potential future. There is a 10% chance that this attempt will result in a cryptic and often confusing vision. This effect has no save DC but cannot be used more than once per day."
      }
    ],
    "levelRequirementReason": "The complex nature of the amulet's magic requires a certain level of spellcasting proficiency to wield its power effectively.",
    "vendorReason": "Edge Outpost is known for dealing in rare and exotic artifacts, including items with dimensional origins like the Amulet of Fractured Echoes.",
    "shippingDetail": "Ships via Dimensional Parcel Service, arriving within a week of purchase.",
    "usage": {
      "activation": "Passive effect until a short rest; Future Glimpses is an action that can be used once per long rest.",
      "duration": "Psychic Resilience lasts for the duration of a short rest. Future Glimpses has no set duration but cannot be used more than once per day.",
      "endsWhen": "The effect ends when the wearer completes a short or long rest, and Future Glimpses can only be attempted once per long rest.",
      "charges": "Unlimited; the amulet regains its use after completing a short rest."
    },
    "priceReason": "The item's rarity and the complexity of its magic, including the ability to glimpse potential futures, justify this price in experience points.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:40:36.707269+00:00",
    "aiReviewedAt": "2026-07-25T00:40:36.707269+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_abyssal_rune_stone": {
    "id": "the_edge_abyssal_rune_stone",
    "name": "Rune Stone of Unmaking",
    "description": "The Rune Stone of Unmaking exudes an aura of malevolent intent, its surface etched with ancient runes that shimmer with dark energy. When activated, it can disrupt reality itself, causing a localized ripple that briefly weakens the structural integrity around it. The stone requires attunement to wield effectively, and overuse might unravel the very threads of existence. Wario's appreciation for this item is understandable; its power lies in its destructive potential, but only those who understand balance dare to use it.",
    "category": "curiosities",
    "price": 16000,
    "icon": "💥",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Minor Structural Disruption",
      "Weakened Condition"
    ],
    "vendor": "final_shop",
    "shippedBy": "Shadow Messenger",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Minor Structural Disruption",
        "rules": "When activated as a bonus action, the Rune Stone of Unmaking creates a localized ripple in reality. This effect deals 3d8 force damage to one target within 10 feet and has a 20% chance to inflict the 'Weakened' condition on that target (causing an additional 1d4 force damage). The disruption lasts for 1 round."
      },
      {
        "title": "Weakened Condition",
        "rules": "The Weakened condition reduces the target's AC by 2 until the start of its next turn. This effect has a daily limit of once per character or monster and cannot be used more than twice in a single day."
      }
    ],
    "levelRequirementReason": "This item requires attunement from at least level 9 to wield effectively, ensuring that only those with the necessary experience and understanding can handle its power.",
    "vendorReason": "Final Shop specializes in rare and unique artifacts, making it a fitting vendor for this rune stone of ancient design.",
    "shippingDetail": "The rune stone is shipped via the Shadow Messenger, known for its swift and secure deliveries even through the most perilous terrains.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 round",
      "endsWhen": "The effect ends when the duration expires or the user activates another effect of this stone.",
      "charges": "Unlimited, but each use has a daily limit"
    },
    "priceReason": "The balanced price reflects its epic rarity and the destructive potential it offers, ensuring it remains a valuable yet cautious acquisition.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T00:41:57.400914+00:00",
    "aiReviewedAt": "2026-07-25T00:41:57.400914+00:00",
    "aiReviewVersion": 1
  },
  "internet_neural_interface": {
    "id": "internet_neural_interface",
    "name": "The Glitch Core",
    "description": "The Glitch Core is a sleek, chrome headset pulsing with corrupted code and data streams. Its origins lie in cybernetic labs where rogue AI experiments went awry. This device allows the wearer to briefly manipulate digital systems and even phase through electronic barriers – just try not to erase your own memory while you're at it! With each use, the core's circuits hum with raw power, capable of hacking into secure networks as if they were open circuits.",
    "category": "equipment",
    "price": 16000,
    "icon": "💻",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "digital manipulation",
      "electronic phasing"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Digital Manipulation",
        "rules": "As a bonus action, you can attempt to manipulate digital systems within range. You have advantage on Intelligence (Computer Skills) checks for the next minute. If you fail this check, you risk data overload, which causes you to lose your concentration and suffer 1d6 levels of exhaustion at the end of your turn."
      },
      {
        "title": "Electronic Phasing",
        "rules": "You can use a reaction when you are targeted by an attack from an electronic barrier. You can attempt to phase through it, forcing the attacker to make a Wisdom saving throw (DC 15) or have their attack miss you."
      }
    ],
    "levelRequirementReason": "The Glitch Core requires significant skill and experience to handle its volatile nature.",
    "vendorReason": "Cyber Market specializes in cutting-edge cybernetic devices, including the rogue creations that power this unique core.",
    "shippingDetail": "The Quantum Courier ensures secure and rapid delivery of the Glitch Core, using specialized containers to protect it from interference during transit.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Instantaneous for Electronic Phasing; lasts a minute for Digital Manipulation",
      "endsWhen": "You lose concentration (Digital Manipulation) or are hit by an attack (Electronic Phasing)",
      "charges": "Unlimited, but you can only use each effect once per short rest"
    },
    "priceReason": "The Glitch Core's balanced price reflects its limited utility and the risk it poses to users.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:41:25.639845+00:00",
    "aiReviewedAt": "2026-07-25T00:41:25.639845+00:00",
    "aiReviewVersion": 1
  },
  "internet_godly_domain_shard": {
    "id": "internet_godly_domain_shard",
    "name": "The Source Fragment",
    "description": "The Source Fragment hums with an electric pulse, a crystalline shard of pure data that glows with the faintest hint of blue light. Crafted from the remnants of ancient digital realms and forged in the void between networks, this fragment grants its wielder dominion over network traffic, capable of rerouting and controlling vast streams of information. However, prolonged use risks unraveling one's mind, turning the user into a sentient algorithm that perpetually seeks the next data packet to process.",
    "category": "premium",
    "price": 1900000,
    "icon": "🌐",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Network Dominance",
      "Sentient Algorithm Risk"
    ],
    "vendor": "Data Dealer",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Network Dominance",
        "rules": "As an action, the wielder can reroute network traffic within a 30-foot radius. This effect lasts for 1 minute and has no save DC. The user can activate this ability up to three times per long rest."
      },
      {
        "title": "Sentient Algorithm Risk",
        "rules": "After using Network Dominance, there is a 25% chance that the wielder becomes a sentient algorithm for 1d4 hours. A successful DC 18 Wisdom saving throw negates this effect. Once per short rest, the user can attempt to resist this risk by making a Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "This item requires a high level of expertise and mental fortitude to wield effectively without succumbing to its risks.",
    "vendorReason": "The Data Dealer has exclusive access to ancient digital artifacts like the Source Fragment, as they specialize in rare and powerful data-related items.",
    "shippingDetail": "Ships via a Dimensional Portal, which requires a week of travel time through the ether.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until dismissed",
      "endsWhen": "The user ends it as an action or when dismissed by another creature within range",
      "charges": "3 uses per long rest"
    },
    "priceReason": "This item represents a unique and powerful combination of network control and the risk of becoming a sentient algorithm, making it one of the most sought-after artifacts in the realm.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-25T00:41:50.605882+00:00",
    "aiReviewedAt": "2026-07-25T00:41:50.605882+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_dragonfruit_elixir": {
    "id": "earth_land_dragonfruit_elixir",
    "name": "Volcanic Vigor",
    "description": "Volcanic Vigor is a shimmering, deep-red elixir that glows faintly with fiery energy. Sourced from the heart of volcanic vents where rare dragon fruits grow, this potion grants you raw power and a burst of strength. After downing it, your muscles surge with vitality, and a fleeting heat rises to your cheeks, making you briefly combustible—just in time for a friendly game of fireball tag or to ignite nearby flammable items.",
    "category": "consumables",
    "price": 290,
    "icon": "🔥",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Strength Surge",
      "Temporary Flame Resistance"
    ],
    "vendor": "magic_shop",
    "shippedBy": "messenger_pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Surge",
        "rules": "Increases your Strength by +4 for 10 seconds. This effect is instantaneous upon consumption and does not require any action from the user."
      },
      {
        "title": "Temporary Flame Resistance",
        "rules": "For 30 seconds after drinking, you gain resistance to fire damage. While in this state, there's a 5% chance that any fire-based attack or effect causes your body to produce an accidental burst of flame, dealing 1d4 fire damage to the nearest non-magical object."
      }
    ],
    "levelRequirementReason": "This potion is designed for adventurers at the beginning of their journey who need a quick boost in strength and resilience.",
    "vendorReason": "The magic shop stocks Volcanic Vigor as part of its selection of potions that cater to beginner adventurers looking to enhance their abilities in the early stages of their quest.",
    "shippingDetail": "The messenger pigeon delivers the elixir swiftly, ensuring it remains potent during transit. The delivery is reliable and swift due to the shop's agreements with local avian couriers.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "10 seconds for Strength Surge; 30 seconds of fire resistance followed by a chance of accidental flame bursts thereafter",
      "endsWhen": "The effects expire after the specified durations or when consumed in combat, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Volcanic Vigor is priced at 1000 XP due to its unique and potent combination of effects, sourced from rare materials, and the expertise required in its brewing.",
    "priceOriginal": 150,
    "priceReviewedAt": "2026-07-25T00:42:08.667324+00:00",
    "aiReviewedAt": "2026-07-25T00:42:08.667324+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_ancient_shard": {
    "id": "earth_land_ancient_shard",
    "name": "Echoes of the First Titan",
    "description": "Echoes of the First Titan is a fragment of colossal titan's armor, its surface etched with ancient runes that glow faintly in response to magical energies. When held, it grants visions—often confusing and unsettling glimpses into Earth Land’s long-forgotten past, but also provides resistance to psychic damage. This relic, forged from the bones of titans, is a living fragment of history, carrying with it the echoes of ages past that can be both enlightening and disorienting.",
    "category": "curiosities",
    "price": 170000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Vivid Visions",
      "Psychic Resistance"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vivid Visions",
        "rules": "Once per short or long rest, when you make a History check related to Earth Land's history, you gain advantage. Additionally, the visions can be triggered by an ancient spell (DC 15) that provides you with a random flashback of events from Earth Land’s past."
      },
      {
        "title": "Psychic Resistance",
        "rules": "You have resistance to psychic damage. This effect does not stack with other forms of resistance or immunity to psychic damage."
      }
    ],
    "levelRequirementReason": "This relic is potent enough that even the most novice adventurers can benefit from its visions and protection.",
    "vendorReason": "The Earth Emporium specializes in artifacts of historical and magical significance, making it the perfect vendor for this relic.",
    "shippingDetail": "Shipped via a dimensional portal, ensuring that the Echoes arrive intact and ready to use.",
    "usage": {
      "activation": "Passive effect; visions occur once per short or long rest when making History checks related to Earth Land's history. The ancient spell can be triggered by an arcane caster as a bonus action.",
      "duration": "Instantaneous for the vision, lasts until the end of your next turn after casting the ancient spell.",
      "endsWhen": "The effect ends if you are incapacitated or when the ancient spell is cast again.",
      "charges": "Unlimited"
    },
    "priceReason": "The Echoes of the First Titan provide a unique and potent combination of historical insight and protection, making it a valuable asset for any adventurer.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T00:42:13.150933+00:00",
    "aiReviewedAt": "2026-07-25T00:42:13.150933+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_shard_of_discord": {
    "id": "connectopia_shard_of_discord",
    "name": "Fractured Harmonizer",
    "description": "The Fractured Harmonizer is a jagged shard of solidified dissonance forged in the heart of a chaotic rift. Crafters who dare to place it near their workstations face unpredictable malfunctions and temporary stat penalties, as if the very essence of harmony has been fractured by an ancient curse. This relic's presence can turn the most precise assembly into a cacophony of errors, ensuring that order is never truly restored without careful handling.",
    "category": "forbidden",
    "price": 4300,
    "icon": "💣",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "random_crafting_malfunction",
      "temporary_stat_penalty"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Random Crafting Malfunction",
        "rules": "When activated, the Fractured Harmonizer triggers a random malfunction at the start of each crafting turn within 10 feet. The DM rolls on the Craft Failure table to determine the exact nature of the malfunction (e.g., broken tool, misaligned parts). This effect lasts until the next long rest."
      },
      {
        "title": "Temporary Stat Penalty",
        "rules": "Any character near the Fractured Harmonizer must make a Constitution saving throw. On a failed save, they suffer a -1 penalty to all ability checks and attack rolls for 24 hours. The save DC is equal to 8 + the user's Intelligence modifier."
      }
    ],
    "levelRequirementReason": "Crafters who use this item must be experienced enough to handle its chaotic nature without causing catastrophic failures.",
    "vendorReason": "As pioneers of expedited services, they provide the secure and swift delivery needed for such a volatile artifact.",
    "shippingDetail": "Delivered via shadow courier, ensuring that the item arrives intact but under strict secrecy.",
    "usage": {
      "activation": "Object interaction (requires proficiency with craft tools)",
      "duration": "Instantaneous effect; lasts until next long rest for malfunctions and stat penalties",
      "endsWhen": "The effects end at the start of each crafting turn or upon a successful save against the stat penalty.",
      "charges": "Unlimited uses, but limited to one activation per day"
    },
    "priceReason": "This price reflects the item's rarity and the risk involved in handling its chaotic effects.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T00:42:41.574017+00:00",
    "aiReviewedAt": "2026-07-25T00:42:41.574017+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_legendary_gearbox_of_invention": {
    "id": "connectopia_legendary_gearbox_of_invention",
    "name": "Wario's Prototype Assembler",
    "description": "Wario's Prototype Assembler, a gleaming yet slightly dented gearbox, is said to have been crafted by the master builder himself during his legendary block-building sessions. This ingenious device grants its wielder +5 to all crafting rolls and has an unpredictable tendency to generate bizarre new items with a 20% chance – sometimes functional, often not. The assembler's self-assembly feature, though rare, can produce parts that are essential for completing ambitious projects.",
    "category": "equipment",
    "price": 68000,
    "icon": "⚙️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "+5 Crafting Bonus",
      "20% Random Item Generation"
    ],
    "vendor": "craft_corner",
    "shippedBy": "warp_transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+5 Crafting Bonus",
        "rules": "Activates as a bonus action. The effect lasts until the start of your next turn, granting +5 to all crafting checks."
      },
      {
        "title": "20% Random Item Generation",
        "rules": "This effect activates when you complete a successful crafting roll. There is a 20% chance that the assembler will generate a random item, which could be useful or entirely bizarre. The generated item's rarity and utility are determined by the DM."
      }
    ],
    "levelRequirementReason": "This device is suitable for players who have some experience with crafting to appreciate its versatility.",
    "vendorReason": "Craft Corner specializes in unique and rare items, including Wario's creations. They are the only known source for this legendary assembler.",
    "shippingDetail": "Delivered via warp transport within a week of order placement.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until Start of Next Turn",
      "endsWhen": "The start of your next turn",
      "charges": "Unlimited, as long as the assembler is functional"
    },
    "priceReason": "This price reflects its legendary rarity and unique utility in crafting.",
    "priceOriginal": 38000,
    "priceReviewedAt": "2026-07-25T14:30:04.678033+00:00",
    "aiReviewedAt": "2026-07-25T14:30:04.678033+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_echoing_crystal": {
    "id": "connectopia_echoing_crystal",
    "name": "The Resonance Stone",
    "description": "The Resonance Stone, a pulsating crystal of Connectopia's core, hums with an otherworldly energy. Touching it grants a fleeting moment of clarity and insight into the flow of the world's magic, but prolonged exposure can stir unsettling echoes and visions that haunt the mind. Wario warns that using it too often risks losing one’s grip on reality. Crafted by the city’s finest artisans, this stone is a rare find, recommended for those who seek to navigate through enigmatic challenges with precision and focus.",
    "category": "premium",
    "price": 16000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Elemental Buff",
      "Psychic Resistance"
    ],
    "vendor": "craft_corner",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Elemental Buff",
        "rules": "When activated as an action, the Resonance Stone grants a temporary buff based on one of four random elements: fire, water, wind, or earth. The effect lasts until the end of your next turn and can be used once per long rest."
      },
      {
        "title": "Psychic Resistance",
        "rules": "The Resonance Stone provides resistance to psychic damage for 1 hour after activation as a bonus action. This effect cannot be gained more than twice per day, and any additional uses are lost."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 5 to ensure the user can handle its unpredictable nature.",
    "vendorReason": "Craft Corner is known for selling unique and powerful items, making it fitting for this rare crystal.",
    "shippingDetail": "The stone arrives via a dimensional portal, ensuring it reaches the buyer in pristine condition.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Until end of next turn (Elemental Buff) / 1 hour (Psychic Resistance)",
      "endsWhen": "Ends when its duration expires or if you take any damage (Psychic Resistance).",
      "charges": "Recharges after a long rest."
    },
    "priceReason": "The Resonance Stone is priced at 1000 XP, reflecting its rare crafting materials and unpredictable effects.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:42:58.026230+00:00",
    "aiReviewedAt": "2026-07-25T00:42:58.026230+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_whispering_totem": {
    "id": "animatopia_whispering_totem",
    "name": "Whispering Totem of the Great Howler",
    "description": "The Whispering Totem of the Great Howler, carved from gleaming bone and adorned with vibrant feathers that shimmer like a forest's secrets, hums softly when held close to your ear. This ancient artifact allows you to understand the subtle calls of beasts for up to one minute, aiding in tracking or calming aggressive creatures. It also grants a +2 bonus to Dexterity (Stealth) checks within 30 feet for as long as it is wielded.",
    "category": "curiosities",
    "price": 4300,
    "icon": "🐾",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "BEASTSPEAK",
      "STEALTH_BOOST"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "swift_raven Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Beastspeak",
        "rules": "Activates on reaction when you hear a beast's call. You can understand the creature's vocalization for up to one minute, providing insight into its intentions and allowing you to respond in kind. This effect ends if you lose line of sight with the Totem or if it is damaged."
      },
      {
        "title": "Stealth Boost",
        "rules": "Grants a +2 bonus to Dexterity (Stealth) checks while holding the Totem, which lasts until the start of your next turn. If you fail a Stealth check and are targeted by an attack, this effect ends."
      }
    ],
    "levelRequirementReason": "The Whispering Totem's subtle magic is accessible to adventurers as low as level one.",
    "vendorReason": "The Tribal Trader travels the wild paths, selling artifacts of the forest to those who seek them.",
    "shippingDetail": "Ships via swift raven courier service for expedited delivery within one week.",
    "usage": {
      "activation": "Reaction (to hear a beast's call)",
      "duration": "Up to one minute while holding the Totem",
      "endsWhen": "You lose line of sight with the Totem or it is damaged, or you fail a Stealth check and are targeted by an attack.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Totem's limited range and duration justify its moderate price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T00:42:41.761742+00:00",
    "aiReviewedAt": "2026-07-25T00:42:41.761742+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_braided_vine_armor": {
    "id": "animatopia_braided_vine_armor",
    "name": "Braided Vine Armor of the Root Guard",
    "description": "Braided Vine Armor of the Root Guard is a living, organic suit crafted from intertwining vines and fortified sap by the skilled artisans of the forest. This armor not only provides robust protection but also harmonizes with its natural surroundings, making you nearly invisible to predators. Its surface is slightly prickly, offering a layer of poison resistance that neutralizes most thorn-based attacks, ensuring you stay safe in the dense underbrush.",
    "category": "equipment",
    "price": 16000,
    "icon": "🌿",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "armor_5",
      "poison_resistance"
    ],
    "vendor": "forest_market",
    "shippedBy": "winged_squirrel express courier",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Poison Resistance",
        "rules": "The armor grants you a +2 bonus to saving throws against poison and thorn-based attacks. This effect lasts until the start of your next turn after taking such damage."
      },
      {
        "title": "Living Armor",
        "rules": "While wearing this armor, you gain advantage on Stealth checks in forest environments. Additionally, it has a limited self-repair mechanism that regenerates 1d4 hit points at the end of each long rest."
      }
    ],
    "levelRequirementReason": "This armor requires a minimum level to ensure the wearer can effectively utilize its unique properties and avoid potential complications.",
    "vendorReason": "The forest market is renowned for its connection with nature, making it an ideal vendor for this item that blends seamlessly with the environment.",
    "shippingDetail": "Ships via winged squirrel express courier, ensuring swift delivery directly to your doorstep.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until removed or the wearer takes damage from a thorn-based attack.",
      "endsWhen": "The armor regenerates hit points at the end of each long rest and is destroyed if exposed to extreme fire.",
      "charges": "Unlimited"
    },
    "priceReason": "This balanced price reflects its unique properties, including poison resistance, stealth benefits, and self-repair capabilities.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:43:29.340922+00:00",
    "aiReviewedAt": "2026-07-25T00:43:29.340922+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_dragon_scale_scroll": {
    "id": "earth_land_item_dragon_scale_scroll",
    "name": "Scroll of Scorched Secrets",
    "description": "Recovered from the hoard of a surprisingly grumpy young dragon, this scroll isn't just parchment—it's partially composed of shimmering dragon scales that catch the light like embers of old fires. Unfurling it reveals cryptic instructions for brewing a potion that smells suspiciously like burnt marshmallows; its aroma alone can raise the temperature in a room by several degrees. The scroll's ink dances with the firelight, hinting at ancient secrets only a dragon could fully understand.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🐉",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Fire Aura",
      "Dragon Lore Revelation"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "winged_messenger",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Fire Aura (Instantaneous)",
        "rules": "As soon as you activate the scroll and successfully complete the potion brewing, it releases a minor fire aura that raises the temperature in the immediate area. This effect lasts for 1 minute, increasing the ambient temperature by +5 degrees Fahrenheit within a 20-foot radius."
      },
      {
        "title": "Dragon Lore Revelation (Instantaneous)",
        "rules": "Upon successful completion of the potion brewing, you gain access to one hidden dragon lore entry in your party journal. The entry is detailed and provides valuable insight into the behaviors or weaknesses of dragons, but it also comes with a cryptic warning."
      }
    ],
    "levelRequirementReason": "The scroll's arcane nature requires some experience to safely handle its potent magic.",
    "vendorReason": "Earth Emporium specializes in artifacts recovered from ancient dragon hoards, making it the perfect vendor for this item.",
    "shippingDetail": "The scroll is delivered by a winged messenger, ensuring swift and secure transport.",
    "usage": {
      "activation": "Reading the scroll and successfully completing the potion brewing (DC 15 Intelligence (Herbalism) check)",
      "duration": "Instantaneous for Fire Aura; lasts 1 minute",
      "endsWhen": "The effect ends when the duration expires or you use your action to end it early.",
      "charges": "Unlimited, as the scroll regenerates its effects after a short rest."
    },
    "priceReason": "The scroll's unique composition and magical properties justify this price point in terms of experience points.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T00:43:18.475022+00:00",
    "aiReviewedAt": "2026-07-25T00:43:18.475022+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_legendary_rune_of_the_stormcaller": {
    "id": "earth_land_item_legendary_rune_of_the_stormcaller",
    "name": "Rune of the Stormcaller – Fragment",
    "description": "The Rune of the Stormcaller – Fragment is a jagged, pulsating shard recovered from the heart of a frozen storm. Its surface crackles with raw electrical energy, and when gripped, it causes static to build up on your person. A scream in the wind accompanies its use, as if the storm itself is speaking through you. This fragment can summon minor lightning bolts with a 20% chance, providing a brief burst of power to your spells.",
    "category": "equipment",
    "price": 68000,
    "icon": "⚡",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "summons minor lightning bolt",
      "increases spellcasting speed"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "storm_eagle_delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Minor Lightning Bolt",
        "rules": "You can use an action to summon a minor lightning bolt. This bolt deals 1d6 lightning damage and has a range of 30 feet. It requires no attack roll, but it can be dispelled by any dispelling magic or the end of your concentration."
      },
      {
        "title": "Spellcasting Speed Increase",
        "rules": "While holding this fragment, you gain advantage on Dexterity (Sleight of Hand) checks and the duration of your spells is reduced by 1 round. This effect lasts for the duration of one short or long rest."
      }
    ],
    "levelRequirementReason": "The rune's raw power demands a certain level of control to safely wield.",
    "vendorReason": "The guild quartermaster deals in rare and powerful artifacts, including fragments from ancient storms.",
    "shippingDetail": "The rune is carefully packed by storm eagles to ensure it arrives without mishap.",
    "usage": {
      "activation": "Action or bonus action to summon a minor lightning bolt; passive effect of holding the fragment.",
      "duration": "Minor lightning bolt lasts until dispelled or the end of your concentration. Passive effects last for one short or long rest.",
      "endsWhen": "The minor lightning bolt ends when dispelled, and the passive effects end at the conclusion of a short or long rest.",
      "charges": "Unlimited; no recharging required."
    },
    "priceReason": "This fragment represents a rare and powerful tool for spellcasters, offering both immediate and sustained benefits that justify its price.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T00:43:33.277225+00:00",
    "aiReviewedAt": "2026-07-25T00:43:33.277225+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_sticky_fungus": {
    "id": "mushroom_kingdom_item_sticky_fungus",
    "name": "Glug's Grumbling Globules",
    "description": "Glug's Grumbling Globules are peculiar, pulsating fungi that seem to absorb the ambient misery of the Mushroom Kingdom, granting a temporary boost to resistance against fear and despair. These bizarre creatures are surprisingly bouncy and leave behind a delightful trail of slime – watch out for puddles that can cause minor movement penalties. With each consumption, they offer a small respite from the kingdom's darker influences, though players must be cautious as these globules' effects wear off quickly after only one use.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍄",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Boosts fear resistance",
      "Restores sanity"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "snail_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fear Resistance Boost",
        "rules": "When consumed, Glug's Grumbling Globules grant a +20% bonus to saving throws against fear and despair effects. This effect lasts for 1 hour, after which the player must wait 8 hours before consuming another globule."
      },
      {
        "title": "Sanity Restoration",
        "rules": "Upon consumption, Glug's Grumbling Globules restore 10 points of sanity. This restoration is instantaneous and does not require an action."
      }
    ],
    "levelRequirementReason": "These globules are mildly potent and should be accessible to lower-level adventurers.",
    "vendorReason": "Toad Town Market stocks these odd but useful items for travelers and adventurers seeking temporary respite from the Mushroom Kingdom's darker influences.",
    "shippingDetail": "These delicate globules are shipped via snail mail, ensuring they arrive in perfect condition. Due to their fragile nature, delivery times may vary slightly, but they are guaranteed to reach adventurers safely.",
    "usage": {
      "activation": "Eaten as a free action",
      "duration": "1 hour per use",
      "endsWhen": "After one hour or when the player's fear resistance is no longer needed",
      "charges": "Unlimited, but only one can be consumed every 8 hours"
    },
    "priceReason": "The price reflects the globules' minor but useful effects and their delicate nature, which requires careful handling during transport.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T00:43:48.601594+00:00",
    "aiReviewedAt": "2026-07-25T00:43:48.601594+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_royal_decree": {
    "id": "mushroom_kingdom_item_royal_decree",
    "name": "The King's Command Scroll",
    "description": "The King's Command Scroll is a magically sealed scroll of parchment adorned with royal emblems and inked with ancient sigils. Said to have been issued by the Mushroom King, it grants temporary authority that can sway even the most skeptical NPCs. When wielded, it commands immediate respect, doubling your persuasion checks for an hour. However, its influence is fleeting, as NPCs may only comply for a short time before their resolve wavers.",
    "category": "services",
    "price": 1100000,
    "icon": "👑",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Doubling Persuasion Checks",
      "Temporary Compliance"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Doubling Persuasion Checks",
        "rules": "Activate on your reaction to command an NPC, doubling the chance of success for one hour. This effect ends when you use it again or at the start of your next turn after using it."
      },
      {
        "title": "Temporary Compliance",
        "rules": "When successfully influencing an NPC with this scroll, they are more likely to comply with reasonable requests immediately but revert to their usual behavior after 10 minutes. No save is required; the effect is purely situational and does not grant advantage on persuasion rolls."
      }
    ],
    "levelRequirementReason": "The scroll's potent magic requires a minimum of fifth level to wield effectively.",
    "vendorReason": "The Koopa Shop, known for its connections with the Mushroom Kingdom elite, sells this rare artifact.",
    "shippingDetail": "Ships via Dragon Delivery, ensuring swift and secure transport from the Mushroom King's personal courier.",
    "usage": {
      "activation": "Reaction to command an NPC",
      "duration": "One hour or until used again",
      "endsWhen": "At start of next turn after use or when used again",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "Balanced for a rare and potent item that requires careful handling.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-25T00:43:38.122957+00:00",
    "aiReviewedAt": "2026-07-25T00:43:38.122957+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_chunker_01": {
    "id": "connectopia_chunker_01",
    "name": "Block Breaker's Delight",
    "description": "This shimmering, pulsating block of Connectopia’s core material hums with latent energy, its surface rippling with the promise of effortless stone breaking. Crafted from the very heart of the mining realm, this Block Breaker's Delight is a beacon for miners seeking to harness the speed and efficiency of the land itself. When activated, it grants an unprecedented 50% increase in mining speed, allowing you to carve through rock with ease—though you’d do well not to test its limits too far lest it decide to break more than just stone.",
    "category": "consumables",
    "price": 1000,
    "icon": "⛏️",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Mining Speed Boost",
      "Resource Yield Bonus"
    ],
    "vendor": "craft_corner",
    "shippedBy": "rolling_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mining Speed Boost",
        "rules": "Activating the Block Breaker's Delight grants you a bonus action that increases your mining speed by 50% for up to one hour. This effect can be activated once every long rest."
      },
      {
        "title": "Resource Yield Bonus",
        "rules": "While using this item, there is a 25% chance of finding an additional ore or mineral deposit that you could mine. If the block breaks, there is also a 1% chance of inadvertently breaking through to an unexpected resource vein."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and seasoned miners alike; it’s accessible to all.",
    "vendorReason": "Craft Corner specializes in tools that enhance the mining experience, making this block a natural fit.",
    "shippingDetail": "Delivered via rolling cart, ensuring your Block Breaker's Delight arrives at your doorstep with minimal fuss and maximum efficiency.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Up to one hour per long rest",
      "endsWhen": "The effect ends when the duration expires or you finish a short rest, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item’s price reflects its rarity and utility, offering miners both speed and resource yields without breaking the bank.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T00:44:13.990206+00:00",
    "aiReviewedAt": "2026-07-25T00:44:13.990206+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_resonance_shard": {
    "id": "connectopia_resonance_shard",
    "name": "Harmonic Echo Fragment",
    "description": "Recovered from the core of a collapsed resonance tower, this Harmonic Echo Fragment vibrates with the very structure of Connectopia. It is a small, crystalline shard that glows faintly with an ethereal light. The shard can be used to temporarily amplify your connection to the network, granting +10 bonus to all crafting rolls and allowing you to instantly repair damaged equipment – perfect for those clumsy pioneers! Each use leaves behind a brief vision of Connectopia's past, offering glimpses into its forgotten history.",
    "category": "equipment",
    "price": 16000,
    "icon": "✨",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "+10 bonus to all crafting rolls",
      "instant repair of equipment (1 charge)"
    ],
    "vendor": "block_smith",
    "shippedBy": "drone_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crafting Boost",
        "rules": "Activate as a bonus action. The Harmonic Echo Fragment grants a +10 bonus to one crafting roll per day. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Instant Repair",
        "rules": "Activate once per short or long rest by touching the damaged item. The item is repaired instantly, restoring it to full functionality. This use expends a charge from the fragment's internal energy reserve."
      }
    ],
    "levelRequirementReason": "This shard is accessible to all adventurers who wish to harness its power for crafting and repair.",
    "vendorReason": "The Block Smith specializes in items that aid in construction and creation, making this fragment a natural fit for their inventory.",
    "shippingDetail": "Delivered within 24 hours by drone from the nearest Connectopian hub.",
    "usage": {
      "activation": "Bonus action or reaction (for Instant Repair)",
      "duration": "Instantaneous; Crafting Boost lasts until end of next long rest",
      "endsWhen": "Rest is ended, or a second use occurs for Crafting Boost. Instant Repair expends one charge per use.",
      "charges": "10 charges total, recharged after 7 days"
    },
    "priceReason": "The Harmonic Echo Fragment offers significant crafting and repair benefits, making it a valuable yet balanced addition to any adventurer's gear.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T00:44:20.840691+00:00",
    "aiReviewedAt": "2026-07-25T00:44:20.840691+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_godly_stabilizer": {
    "id": "connectopia_godly_stabilizer",
    "name": "The Architect’s Keystone",
    "description": "The Architect’s Keystone, a gleaming artifact forged by Connectopia’s ancient block-smiths, pulsates with latent structural energy. Crafted from enchanted obsidian and imbued with the essence of the earth itself, this keystone stabilizes collapsing structures and prevents terrain shifts within a 30-foot radius. A builder's dream, it ensures stability where chaos reigns, but its power can be unpredictable, sometimes constructing basic blocks out of thin air without warning.",
    "category": "equipment",
    "price": 1100000,
    "icon": "🧱",
    "stock": 3,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Stabilizes Collapsing Structures",
      "Random Terrain Construction"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "sky_whale",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Structural Stabilization",
        "rules": "Activates as a bonus action. The keystone stabilizes collapsing structures and prevents terrain shifts within a 30-foot radius for 1 minute, or until the effects of a collapse are resolved. This effect has no save DC but requires concentration."
      },
      {
        "title": "Random Terrain Construction",
        "rules": "Instantaneous activation. The keystone can construct one basic block (such as stone, dirt, cobblestone) in an unoccupied space within 30 feet of the user. This effect has a 5% chance to activate each time it is used and cannot be used if the area is already stable."
      }
    ],
    "levelRequirementReason": "Suitable for beginners, but powerful enough to aid even the most novice builders.",
    "vendorReason": "Pioneer Post specializes in unique and esoteric items, making The Architect’s Keystone a natural fit.",
    "shippingDetail": "Delivered by sky whale courier with a 2-day delay due to the artifact's sensitivity to environmental conditions.",
    "usage": {
      "activation": "Bonus action or reaction (to prevent collapses)",
      "duration": "1 minute, or until collapse effects resolved",
      "endsWhen": "Concentration is lost, or the area stabilizes",
      "charges": "Unlimited, but requires concentration"
    },
    "priceReason": "Balanced for its godly rarity and moderate utility, The Architect’s Keystone provides significant aid without overpowered effects.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-25T00:44:25.564719+00:00",
    "aiReviewedAt": "2026-07-25T00:44:25.564719+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_sticky_sweet_dust": {
    "id": "almost_edge_item_sticky_sweet_dust",
    "name": "Sugar of the Absent Shores",
    "description": "Sugar of the Absent Shores is a shimmering, pink dust that smells overwhelmingly of cotton candy and regret. When consumed, it grants you a burst of energy and a temporary speed boost, but beware—the cravings for more will set in sooner than you expect. This sugary treat, crafted from the remnants of lost lighthouses, can only be procured from the Liminal Trader, who claims to have sourced it from forgotten shores.",
    "category": "consumables",
    "price": 300,
    "icon": "🍬",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temporary_speed_boost",
      "sugar_cravings"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Gust of Wind",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Speed Boost",
        "rules": "Upon consuming Sugar of the Absent Shores, you gain advantage on Dexterity (Acrobatics) checks and Dash actions for 1 minute. This effect ends if you take damage or if your concentration is broken."
      },
      {
        "title": "Sugar Cravings",
        "rules": "For every hour after consuming Sugar of the Absent Shores, you must make a DC 12 Constitution saving throw to resist the urge to consume more. Failure results in disadvantage on all Dexterity-based checks and saves until your next long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers just starting their journey, offering a burst of energy without requiring advanced levels.",
    "vendorReason": "The Liminal Trader has exclusive access to this rare substance, which they claim comes from the forgotten lighthouses along the Absent Shores.",
    "shippingDetail": "Delivered swiftly by the Gust of Wind, but only during daylight hours and within a day's travel range.",
    "usage": {
      "activation": "Eaten as a consumable.",
      "duration": "1 minute per hour consumed.",
      "endsWhen": "You take damage or your concentration is broken, or after one hour, whichever comes first.",
      "charges": "Unlimited; each serving grants the effect for one hour."
    },
    "priceReason": "The item's rarity and the special courier service justify its high price in experience points.",
    "priceOriginal": 150,
    "priceReviewedAt": "2026-07-25T00:44:47.189058+00:00",
    "aiReviewedAt": "2026-07-25T00:44:47.189058+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_forbidden_cog": {
    "id": "mushroom_kingdom_item_forbidden_cog",
    "name": "The Chronos Gear",
    "description": "The Chronos Gear is a meticulously forged cog, salvaged from an ancient time portal that shattered during its final moments of operation. This relic grants the wielder the ability to rewind time by five seconds, allowing for split-second corrections in battle or everyday mishaps. However, prolonged use can lead to unintended side effects such as sudden outbursts of polka music or speaking in iambic pentameter, leaving one temporarily enchanted by 16th-century poetic whimsy.",
    "category": "forbidden",
    "price": 170000,
    "icon": "⏳",
    "stock": 18,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Temporal Rewind",
      "Poetic Enchantment"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "shadow_courier",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Temporal Rewind",
        "rules": "The user can activate the Chronos Gear to rewind time by five seconds, granting a brief moment of foresight or correction. This effect is instantaneous and has no target or range. It can be used once per day."
      },
      {
        "title": "Poetic Enchantment",
        "rules": "For every 10 minutes the Chronos Gear is held in active use, there is a cumulative +5% chance that the user will start speaking in iambic pentameter or suddenly craving polka music. This effect lasts for one hour and can be ended by a short rest."
      }
    ],
    "levelRequirementReason": "Only those with a deep understanding of time magic, such as experienced wizards and sorcerers, are capable of safely wielding the Chronos Gear.",
    "vendorReason": "The Koopa Shop specializes in rare, exotic relics that are often salvaged from ancient ruins and abandoned portals, making it a fitting vendor for this time-defying gear.",
    "shippingDetail": "Due to the sensitivity of the Chronos Gear, it is delivered by the Shadow Courier via shadowfax, ensuring swift and secure transport.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Once per day limit reached or when the user decides to end the effect",
      "charges": "One use per day"
    },
    "priceReason": "The Chronos Gear is priced at 1000 XP, reflecting its rarity and the risk of unintended side effects that come with using such a powerful relic.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T00:45:33.117428+00:00",
    "aiReviewedAt": "2026-07-25T00:45:33.117428+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_coin_launcher": {
    "id": "mushroom_kingdom_item_coin_launcher",
    "name": "Wario's Lucky Launcher",
    "description": "Wario's Lucky Launcher is a compact, metallic device that exudes a mischievous gleam. Crafted from polished brass and adorned with Wario's signature red-and-yellow logo, it fires coins with pinpoint accuracy, capable of disarming traps or launching small projectiles. The satisfying clatter of ricocheting coins against walls and the sound of an enemy being stunned by a well-timed shot are constants in any encounter where this launcher is used.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪙",
    "stock": 95,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "fires a coin projectile",
      "has a chance to stun enemies"
    ],
    "vendor": "wario_direct",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Coin Shot",
        "rules": "When activated, the Wario's Lucky Launcher fires a coin at an enemy within 30 feet. The coin deals 1d6 bludgeoning damage and has a 25% chance to stun the target for 1 round on a hit."
      },
      {
        "title": "Stun Chance",
        "rules": "The launcher has 5 uses before requiring a short rest to recharge, with each use having a 25% chance of stunning an enemy. A successful Dexterity saving throw (DC 13) negates the stun effect."
      }
    ],
    "levelRequirementReason": "The device is designed for beginners and players who want to contribute from the start.",
    "vendorReason": "Wario himself ensures that his loyal fans have access to his signature items, including this launcher.",
    "shippingDetail": "Expressed with special Wario-themed packaging and delivered within a day of purchase.",
    "usage": {
      "activation": "action",
      "duration": "instantaneous",
      "endsWhen": "uses are expended or the launcher requires a short rest to recharge",
      "charges": "5 uses, recharges after a short rest"
    },
    "priceReason": "The device is priced at 1000 XP due to its unique design and the specialized materials used in its construction.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:44:52.081838+00:00",
    "aiReviewedAt": "2026-07-25T00:44:52.081838+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_void_echo_blade": {
    "id": "almost_edge_item_void_echo_blade",
    "name": "Void Echo Blade - The Unmaking",
    "description": "The Void Echo Blade - The Unmaking is forged from the very essence of nothingness, its blade a shimmering void that seems to absorb light and sound. Each strike cuts through reality itself, dealing extra psychic damage to ethereal foes. The weapon grants +3 to attack rolls against beings of the void, but beware; it also has a chance to inflict 'decay,' reducing the target’s armor class by 1 for two rounds upon a successful hit.",
    "category": "equipment",
    "price": 170000,
    "icon": "🔪",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "psychic damage to ethereal creatures",
      "temporary reduction in AC"
    ],
    "vendor": "void_merchant",
    "shippedBy": "blackhole_express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Psychic Damage",
        "rules": "When you make an attack with this weapon against an ethereal creature, the target takes an additional 1d6 psychic damage. This effect does not stack."
      },
      {
        "title": "Decay",
        "rules": "There is a 20% chance that when you hit a target with this weapon, it suffers from 'decay,' reducing its armor class by 1 for two rounds. The decay effect can only occur once per combat."
      }
    ],
    "levelRequirementReason": "The Void Echo Blade requires significant power to wield effectively, suitable only for seasoned adventurers.",
    "vendorReason": "Only the Void Merchant possesses the knowledge and resources to sell such a unique weapon.",
    "shippingDetail": "Due to its unstable nature, the blade must be delivered by Black Hole Express for safe handling.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous effect; lasts until the end of your next turn",
      "endsWhen": "The weapon's decay effect ends after two rounds or when the target is no longer a valid creature to target.",
      "charges": "Unlimited charges"
    },
    "priceReason": "This weapon’s unique properties and rarity justify its price, making it moderately expensive.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T00:44:57.546010+00:00",
    "aiReviewedAt": "2026-07-25T00:44:57.546010+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_forbidden_memory_tablet": {
    "id": "almost_edge_item_forbidden_memory_tablet",
    "name": "Tablet of Lost Reflections",
    "description": "The Tablet of Lost Reflections is a tarnished bronze artifact, etched with arcane symbols that shimmer faintly under the light of the moon. When held in one's hand, it reveals fragmented images of forgotten realities and the souls trapped within. The visions are often horrifying, but they also offer cryptic clues about nearby locations and glimpses into potent, forbidden magic. A touch can unlock these memories – at a price; many have claimed to suffer from lingering headaches after its use.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Illusory Vision",
      "Clues of the Past"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "shadow_courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Illusory Vision",
        "rules": "When activated as an action, this tablet reveals a potent illusion. The user gains one casting of the 'illusion' spell (no material components required). This effect lasts for 1 hour or until dispelled. There is a 5% chance that using the tablet results in a temporary curse affecting the user, causing them to suffer from persistent headaches and disorientation."
      },
      {
        "title": "Clues of the Past",
        "rules": "Upon activation, the tablet provides cryptic clues about nearby locations or events. These clues can be used as part of an Intelligence (History) check with advantage, but only once per day. The user must make a DC 15 Wisdom saving throw to avoid being overwhelmed by the chaotic and fragmented nature of the visions; failure results in disorientation for 1 hour."
      }
    ],
    "levelRequirementReason": "Users need at least third-level spellcasting proficiency to effectively handle the illusory effects and potential consequences of using this forbidden artifact.",
    "vendorReason": "The Tablet is a relic of ancient magic, often sought by scholars and adventurers for its cryptic knowledge, making it a fitting item for the Edge Wanderer's extensive collection of arcane curiosities.",
    "shippingDetail": "Delivered under cover of darkness, with an added delay due to the courier's need to avoid detection by those who would seek to claim this forbidden artifact as their own.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect lasting one hour or until dispelled",
      "endsWhen": "Dispel magic, user fails a Wisdom save, or the illusion is otherwise ended",
      "charges": "1 use per day"
    },
    "priceReason": "Balanced for its rarity and forbidden nature, this item offers potent spellcasting capabilities but comes with significant risks.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T00:45:37.867122+00:00",
    "aiReviewedAt": "2026-07-25T00:45:37.867122+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_layered_echo_shard": {
    "id": "grand_country_layered_echo_shard",
    "name": "Layered Echo Shard",
    "description": "The Layered Echo Shard gleams with a spectrum of shifting colors, its surface etched with ancient runes that whisper tales of forgotten paths and lost journeys. Held within your palm, it pulses rhythmically, revealing hidden passageways in the immediate area—a boon for explorers navigating treacherous terrain. Yet, as you gaze deeper into its core, the voices grow louder, causing minor auditory hallucinations that cloud perception. This shard is a relic of an ancient monument, now a tool for those who dare to explore beyond the known boundaries.",
    "category": "curiosities",
    "price": 300,
    "icon": "🔮",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "reveals hidden passageways",
      "causes temporary disorientation"
    ],
    "vendor": "layer_market",
    "shippedBy": "swift_winds courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Passages",
        "rules": "When you activate this shard, roll a Perception check. On a successful result, reveal any hidden passages within 5 feet of your position for 1 minute. This effect has no save DC and can only be used once per short rest."
      },
      {
        "title": "Temporal Disorientation",
        "rules": "For the duration of 1 round after activating this shard, you have disadvantage on Perception checks. This disorientation ends when the round concludes or if you take an action to stabilize yourself."
      }
    ],
    "levelRequirementReason": "This shard's power is accessible to adventurers at early levels who need help in navigating complex environments.",
    "vendorReason": "The Layer Market often stocks unique relics and curiosities, making it the go-to place for such an artifact.",
    "shippingDetail": "The shard is carefully packed to protect its delicate structure during transit.",
    "usage": {
      "activation": "reaction (use before a creature enters your perception range)",
      "duration": "instantaneous effect, with duration and disorientation lasting until the start of your next turn",
      "endsWhen": "the effect ends when you take an action to stabilize yourself or at the end of your next turn",
      "charges": "unlimited"
    },
    "priceReason": "The shard's rarity and unique utility justify a price that balances its value with other similar curios.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:45:19.898652+00:00",
    "aiReviewedAt": "2026-07-25T00:45:19.898652+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_chronal_anchor": {
    "id": "grand_country_chronal_anchor",
    "name": "Temporal Driftstone",
    "description": "The Temporal Driftstone is a polished, grey stone that emits a soft, blue light, its surface etched with intricate chronal runes. When you press it to your palm, time around you briefly slows, giving you precious seconds to react or reposition during combat. However, overuse can cause unpredictable temporal distortions, warping the fabric of reality itself. This stone is said to have been crafted by ancient mages who sought to harness the very flow of time.",
    "category": "equipment",
    "price": 4300,
    "icon": "⏳",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Temporal Buffer",
      "Dodge Chance"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_wormhole",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Temporal Buffer",
        "rules": "As a reaction, you can press the Temporal Driftstone to your palm. For the next round, the flow of time around you slows by one turn, allowing you to take an additional action or bonus action as if you had used your reaction earlier. This effect has no cooldown but cannot be used more than once per short or long rest."
      },
      {
        "title": "Dodge Chance",
        "rules": "When a creature attacks you with a melee weapon, you can use the Temporal Driftstone as an action to attempt to dodge the attack. The attacker must make a successful hit roll against your Dexterity saving throw (DC 13). On a success, the attack misses entirely."
      }
    ],
    "levelRequirementReason": "The stone's intricate chronal runes require the user to have some understanding of time magic.",
    "vendorReason": "Layer Market is known for its diverse range of magical artifacts and tools, including those that manipulate temporal forces.",
    "shippingDetail": "The stone must be shipped via the dimensional wormhole to ensure it reaches its destination without any temporal interference.",
    "usage": {
      "activation": "Reaction for Temporal Buffer; Action for Dodge Chance",
      "duration": "Until end of next round (Temporal Buffer); Instantaneous (Dodge Chance)",
      "endsWhen": "Used or when the user takes another reaction action (Temporal Buffer); When the attack is resolved (Dodge Chance)",
      "charges": "Unlimited, but can only be used once per short/long rest"
    },
    "priceReason": "The stone's rarity and magical properties justify its price of 1000 XP.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-25T00:45:42.658809+00:00",
    "aiReviewedAt": "2026-07-25T00:45:42.658809+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_obsidian_whisper": {
    "id": "grand_country_obsidian_whisper",
    "name": "The Silent Maw's Secret",
    "description": "The Silent Maw's Secret is a small, perfectly smooth obsidian orb that whispers secrets from forgotten realms when held near an ear. Its surface gleams in the dark like molten glass, and it seems to hum with ancient power as it absorbs all sound around it. Holding it near a creature can induce an overwhelming sense of dread and paranoia, potentially causing them to flee in terror or become obsessed with gathering shiny objects, depending on their psyche.",
    "category": "forbidden",
    "price": 16000,
    "icon": "🤫",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "dread_and_paranoia",
      "shiny_object_hoarding"
    ],
    "vendor": "side_seller",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Dread and Paranoia (Instantaneous)",
        "rules": "When a creature holds the orb near its ear, it must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. The frightened target can use an action to make a DC 10 Intelligence (Investigation) check as a reaction to attempt to discern the source of the dread. On a success, the effect ends."
      },
      {
        "title": "Shiny Object Hoarding (Passive)",
        "rules": "For every hour that a creature holds the orb, it has disadvantage on saving throws against being charmed or frightened by shiny objects, and must make a DC 12 Wisdom saving throw at the end of each long rest. On a failure, they spend their next short rest gathering shiny objects within reach."
      }
    ],
    "levelRequirementReason": "The orb's power is too dangerous for novices; it requires a minimum level to prevent accidental misuse.",
    "vendorReason": "Side sellers often have connections with the black market and can acquire rare forbidden items like this one.",
    "shippingDetail": "Delivered by shadow-messengers in sealed, sound-absorbing containers to prevent detection.",
    "usage": {
      "activation": "Holding near an ear or touching a creature's skin.",
      "duration": "Instantaneous and until the effect ends for one creature.",
      "endsWhen": "The target succeeds on the saving throw or the effect is dispelled by a successful Intelligence check.",
      "charges": "Unlimited, but requires concentration."
    },
    "priceReason": "Balanced at 1000 XP as it provides unique and dangerous effects that are not easily replicated with standard items.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T00:46:30.695709+00:00",
    "aiReviewedAt": "2026-07-25T00:46:30.695709+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_dynamite_charge": {
    "id": "connectopia_dynamite_charge",
    "name": "Volcanic Burst Cartridges",
    "description": "Volcanic Burst Cartridges are compact, geothermal-forged explosives that detonate with a fierce eruption of molten rock and scalding steam. Crafted from deep within active volcanic vents, these cartridges release an intense burst of heat and pressure, ideal for clearing stubborn rock formations or creating impromptu cave-ins. The cartridges' unstable nature demands caution; each one is a potent mix of natural force and deadly precision, capable of dealing 15 fire damage to stone and earth enemies on activation.",
    "category": "consumables",
    "price": 300,
    "icon": "💥",
    "stock": 30,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Fire Damage",
      "Minor Explosion"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Courier Swiftwind",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Damage",
        "rules": "When activated, these cartridges unleash a concentrated burst of heat. Any stone or earth enemy within the area takes 15 fire damage. The cartridge has a small chance to create a minor explosion (20% at level 3 and beyond)."
      },
      {
        "title": "Minor Explosion",
        "rules": "There is a 20% chance that upon activation, a minor explosion occurs in addition to the fire damage dealt. This explosion deals an additional 1d6 fire damage to all enemies within 5 feet of the detonation point. Characters within this area must succeed on a DC 12 Dexterity saving throw or be knocked prone."
      }
    ],
    "levelRequirementReason": "These cartridges are accessible to lower-level characters, providing them with an effective tool for clearing obstacles and creating strategic advantages in combat.",
    "vendorReason": "Pioneer Post is known for its reliable supply of practical tools and equipment, including these versatile explosives, which are essential for many adventuring parties navigating treacherous terrain.",
    "shippingDetail": "Courier Swiftwind ensures the safe delivery of these volatile items, offering expedited service with a guaranteed arrival within one week from the time of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The cartridge is used or destroyed in its explosion",
      "charges": "Unlimited; the cartridges can be recharged by retrieving and replacing them"
    },
    "priceReason": "At a price of 1000 XP, these Volcanic Burst Cartridges are fairly priced given their potency in combat and utility for clearing difficult terrain.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:46:26.931136+00:00",
    "aiReviewedAt": "2026-07-25T00:46:26.931136+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_shard_of_the_grand_architect": {
    "id": "connectopia_shard_of_the_grand_architect",
    "name": "The Blueprint's Echo",
    "description": "The Blueprint's Echo is a crystalline shard of light, forged from the very blueprint of Connectopia’s architect. It hums with latent potential, capable of revealing hidden structural flaws in block formations and granting fleeting mastery over crafting. When held, its brilliance illuminates your understanding, but only for those willing to endure the strain—it’s said that once you’ve glimpsed its secrets, the world of construction will never be the same.",
    "category": "premium",
    "price": 1100000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Blueprint Mastery",
      "Structural Insight"
    ],
    "vendor": "block_smith",
    "shippedBy": "Courier of Precision",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blueprint Mastery",
        "rules": "Activates on command as a bonus action. The wielder gains a +5 bonus to all Crafting checks for 1 minute, after which the shard’s brilliance fades."
      },
      {
        "title": "Structural Insight",
        "rules": "Passive effect while holding the shard. There is a 20% chance per long rest that you can intuitively sense hidden structural weaknesses in any block formation within reach."
      }
    ],
    "levelRequirementReason": "The shard’s power is accessible to all, but its brilliance is best harnessed by those who understand the fundamentals of construction.",
    "vendorReason": "Master Forger Alaric, a connoisseur of Connectopian architecture, personally curates this artifact for those seeking deeper knowledge.",
    "shippingDetail": "Ships via trusted courier. Immediate delivery to any major city within the kingdom.",
    "usage": {
      "activation": "Bonus action to activate Blueprint Mastery; passive effect while holding the shard.",
      "duration": "Blueprint Mastery lasts for 1 minute, after which it must recharge with a long rest.",
      "endsWhen": "Duration ends or wielder rests without using it.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This shard represents a unique fusion of knowledge and craftsmanship, making it a valuable yet balanced addition to any player’s inventory.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-25T00:46:07.107247+00:00",
    "aiReviewedAt": "2026-07-25T00:46:07.107247+00:00",
    "aiReviewVersion": 1
  },
  "faction_imperial_runecloth": {
    "id": "faction_imperial_runecloth",
    "name": "Runecloth of the Iron Legion",
    "description": "The Runecloth of the Iron Legion is a meticulously crafted, durable cloth dyed in the iconic colors of the Imperial legions. Its ancient runes whisper protection and strength, providing a subtle yet tangible morale boost to those who wear it. Crafted by master weavers from the heart of the Imperial Armory, this relic offers a modest resistance to fear and minor physical damage, making it an indispensable companion for any soldier facing the battlefield.",
    "category": "premium",
    "price": 1100,
    "icon": "🛡️",
    "stock": 2,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "Resistance to Fear",
      "Minor Physical Damage Absorption"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "dragon post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Fear",
        "rules": "When you are targeted by a fear effect, you can use your reaction to gain advantage on the saving throw. This effect has no cooldown."
      },
      {
        "title": "Minor Physical Damage Absorption",
        "rules": "The runecloth absorbs 1d4 points of bludgeoning damage as a bonus action, once per short rest. It does not stack with other forms of damage reduction."
      }
    ],
    "levelRequirementReason": "Designed for versatility and utility, this relic is accessible to all combatants regardless of level.",
    "vendorReason": "The Imperial Armory specializes in crafting gear that complements the valorous spirit of its legions.",
    "shippingDetail": "Delivered by the swift dragon post, this runecloth arrives with a note from the Armory's master weaver.",
    "usage": {
      "activation": "Reaction (Resistance to Fear); Bonus Action (Minor Physical Damage Absorption)",
      "duration": "Instantaneous; Minor Physical Damage Absorption is once per short rest",
      "endsWhen": "Exhausted after a short rest or destroyed by fire",
      "charges": "Unlimited, regenerates with rest"
    },
    "priceReason": "Balanced to provide utility without overshadowing the player's class features.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T00:46:13.343968+00:00",
    "aiReviewedAt": "2026-07-25T00:46:13.343968+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_forbidden_mimic_shell": {
    "id": "animatopia_forbidden_mimic_shell",
    "name": "Mimic's Silent Shell",
    "description": "Recovered from a forgotten shrine dedicated to the Mimic Gods, this shell grants unsettling abilities... but at a terrible price. The shell allows you to perfectly mimic any sound or voice you hear, and can even briefly transform into a small, harmless creature such as a squirrel or bird. However, prolonged use causes paranoia that grows with each minute spent in mimicry or transformation, driving the user mad over time.",
    "category": "forbidden",
    "price": 170000,
    "icon": "🐚",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Perfect Mimicry",
      "Brief Creature Transformation"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "shadow_raven",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Perfect Mimicry",
        "rules": "As a bonus action, you can use the shell to mimic any sound or voice. The mimicry is perfect and convincing, allowing you to deceive others within hearing range. This effect lasts up to one minute per level of the user. A successful DC 15 Wisdom (Perception) check against this mimicry reveals it as a deception."
      },
      {
        "title": "Brief Creature Transformation",
        "rules": "As an action, you can transform into a small harmless creature such as a squirrel or bird for up to one minute per level. This transformation grants you the benefits of the form but does not confer any abilities beyond those inherent in that creature's size and type."
      }
    ],
    "levelRequirementReason": "Requires at least 15th-level to handle the mental toll imposed by prolonged use.",
    "vendorReason": "The Beast Bazaar has a reputation for dealing in ancient and forbidden artifacts, including those of Mimic Gods.",
    "shippingDetail": "Ships under the cover of night to avoid unwanted attention.",
    "usage": {
      "activation": "Bonus action or Action",
      "duration": "Up to one minute per level",
      "endsWhen": "Ends when the effect is expended, or the user takes damage.",
      "charges": "Unlimited"
    },
    "priceReason": "The shell's price reflects its rarity and the mental toll it imposes on users.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T00:46:25.156123+00:00",
    "aiReviewedAt": "2026-07-25T00:46:25.156123+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_elven_whisper_potion": {
    "id": "middle_earth_elven_whisper_potion",
    "name": "Elven Whisper Brew",
    "description": "Crafted from the dew of ancient elven whisper trees and rare moonpetal blossoms, Elven Whisper Brew is a shimmering vial that amplifies your senses. It grants you uncanny perception, allowing you to detect hidden dangers and subtle movements in the environment. The potion's effect is so potent it can even help you avoid detection by stealthy foes like Ringwraiths. Once consumed, its effects last for an hour, during which your awareness of the world around you becomes as sharp as a hawk's vision.",
    "category": "consumables",
    "price": 1100,
    "icon": "👂",
    "stock": 88,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increase_perception",
      "avoid_detection"
    ],
    "vendor": "elven_market",
    "shippedBy": "flying_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Perception",
        "rules": "For one hour after consumption, you have advantage on Wisdom (Perception) checks. This effect also grants you the ability to detect hidden or unseen creatures within a 30-foot radius as if using a Detect Magic spell."
      },
      {
        "title": "Avoid Detection",
        "rules": "While under the effects of Elven Whisper Brew, you have advantage on Dexterity (Stealth) checks and can remain undetected for an additional round after successfully hiding. This effect does not stack with other similar abilities."
      }
    ],
    "levelRequirementReason": "This potion is crafted to be accessible to low-level characters who need a boost in perception without the complexity of more powerful items.",
    "vendorReason": "The Elven Market sells this potion as it caters to adventurers seeking to enhance their skills and abilities, making it an essential item for many travelers.",
    "shippingDetail": "Shipped by the swift flying messengers of Rivendell, ensuring that each vial is delivered fresh and potent.",
    "usage": {
      "activation": "Drink this potion as a bonus action.",
      "duration": "One hour from consumption.",
      "endsWhen": "The effects wear off after one hour or if you ingest any other elven potion within the same day.",
      "charges": "Unlimited, as each vial is self-contained and requires no further preparation."
    },
    "priceReason": "The price reflects its rare ingredients and the complexity of crafting such a potent perception enhancer.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T00:46:48.804729+00:00",
    "aiReviewedAt": "2026-07-25T00:46:48.804729+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_dwarven_stone_of_endurance": {
    "id": "middle_earth_dwarven_stone_of_endurance",
    "name": "Grimbold Stone of Steadfastness",
    "description": "Forged deep within the volcanic forges of Khazad-dûm, the Grimbold Stone of Steadfastness is a weighty, dark-hued stone that radiates an enduring warmth. Crafted by dwarves to withstand the harshest of trials, it grants its bearer unparalleled stamina and resilience. This ancient artifact reduces fatigue during prolonged exertion by 50% for up to four hours per day, allowing weary souls to push through exhaustion without succumbing to poison or disease.",
    "category": "equipment",
    "price": 16000,
    "icon": "💪",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "reduce_fatigue",
      "resistance_to_poison"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant_worm",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reduced Fatigue",
        "rules": "Activates as a bonus action. Reduces the fatigue penalty by 50% for up to four hours per day, starting immediately upon activation. This effect can only be used once per long rest."
      },
      {
        "title": "Resistance to Poison",
        "rules": "The stone grants resistance to poison damage while worn. This effect is active as long as the stone is attached to the user's person and does not require any action to activate."
      }
    ],
    "levelRequirementReason": "Even the simplest of dwarves can recognize the power of this stone, making it accessible to all adventurers.",
    "vendorReason": "The dwarves of Khazad-dûm are renowned for their craftsmanship and loyalty to their most trusted creations.",
    "shippingDetail": "Delivered swiftly by the mighty Thauradrin, ensuring that the stone arrives in perfect condition.",
    "usage": {
      "activation": "Bonus action (Reduced Fatigue); Instantaneous (Resistance to Poison)",
      "duration": "4 hours per day for Reduced Fatigue; Duration lasts until exhaustion ends or a long rest is taken",
      "endsWhen": "Long rest, fatigue ends, or poison damage is resisted",
      "charges": "Unlimited"
    },
    "priceReason": "The stone's balanced price reflects its rarity and the skill required to craft such an enduring artifact.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T00:47:15.978747+00:00",
    "aiReviewedAt": "2026-07-25T00:47:15.978747+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_whispering_potion": {
    "id": "faerun_item_whispering_potion",
    "name": "Whispering Potion of Foresight",
    "description": "The Whispering Potion of Foresight is a shimmering elixir, its surface flecked with iridescent blues and greens. When held close to the light, it seems to murmur cryptic warnings and possibilities, as if whispering from another time. This potion grants you foresight in your next Insight check, allowing you to predict the outcome of a challenge. However, the whispers can be unsettling; there's always a chance that one of these prophecies will come true in an unexpected and potentially dire manner.",
    "category": "consumables",
    "price": 1100,
    "icon": "🔮",
    "stock": 88,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grant_advantage_on_next_insight_check",
      "chance_to_receive_a_minor_prophecy"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying_carpet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Advantage on Next Insight Check",
        "rules": "When you drink the potion, you gain advantage on your next Insight check. This effect lasts until the start of your next turn after the check is made."
      },
      {
        "title": "Chance to Receive a Minor Prophecy",
        "rules": "There's a 50% chance that, upon drinking the potion, you receive a minor prophecy about the immediate future. The prophecy provides cryptic details but offers no mechanical advantage or penalty."
      }
    ],
    "levelRequirementReason": "This potion is accessible to those who are curious and brave enough to face their next challenge with a bit of foresight.",
    "vendorReason": "Baldur's Bazaar stocks this item because it offers adventurers the chance to gain an edge in their quests, though it comes with its own risks.",
    "shippingDetail": "Delivered by a swift flying carpet, the potion arrives fresh and ready for use.",
    "usage": {
      "activation": "飲用",
      "duration": "直到下次 Insight 檢查結束為止",
      "endsWhen": "進行下一回合的 Insight 檢查時結束",
      "charges": "無限制"
    },
    "priceReason": "這瓶魔藥價格適中，因為它能提供即時的戰略優勢，但附帶可能帶來不安的心理效應。",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:47:00.702708+00:00",
    "aiReviewedAt": "2026-07-25T00:47:00.702708+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_obsidian_shard_of_sorrow": {
    "id": "faerun_item_obsidian_shard_of_sorrow",
    "name": "Obsidian Shard of Sorrow",
    "description": "A fragment of a forgotten deity’s heart, this obsidian shard pulses with an unsettling melancholy. Holding it induces vivid memories of loss and regret, perfect for brooding adventurers or crafting truly depressing sculptures. Its origin is shrouded in sorrow, yet it can surprisingly start fires, making it indispensable for survival. A relic from ancient times, the shard's touch evokes a somber atmosphere that can influence those around you.",
    "category": "curiosities",
    "price": 16000,
    "icon": "🖤",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "melancholic aura",
      "temporary darkvision"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "delivery_only",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Melancholic Aura",
        "rules": "The wielder of the Obsidian Shard of Sorrow emits a melancholic aura. Any creature within 10 feet must succeed on a DC 15 Charisma saving throw or be charmed by the shard for 1 hour, gaining disadvantage on attack rolls and ability checks for that duration."
      },
      {
        "title": "Temporary Darkvision",
        "rules": "The wielder gains temporary darkvision out to 60 feet until they use an action to dismiss it. This effect lasts for 1 minute per long rest."
      }
    ],
    "levelRequirementReason": "This relic requires a character of at least level 5, as its melancholic influence is too potent for lower levels.",
    "vendorReason": "The Waterdeep Market sells exotic and rare items from distant lands, making it the perfect place to find this ancient shard.",
    "shippingDetail": "Ships via trusted courier within one week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per long rest or until dismissed by an action",
      "endsWhen": "Dismissed with an action, ends after 1 hour if not dismissed, or upon destruction of the shard",
      "charges": "Unlimited; recharges after a long rest"
    },
    "priceReason": "The balanced XP price reflects its epic rarity and unique effects.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-25T00:46:44.545655+00:00",
    "aiReviewedAt": "2026-07-25T00:46:44.545655+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_ember_lantern": {
    "id": "animatopia_ember_lantern",
    "name": "Ember Lantern of Lost Memories",
    "description": "This Ember Lantern of Lost Memories casts a soft, flickering light that dances like embers in a forge. Its glow can briefly reveal fragments of lost memories—fuzzy silhouettes and eerie whispers that hint at forgotten times. The lantern is made from ancient wood imbued with the essence of long-lost spirits, creating a warmth that lingers even after it's extinguished. Locals say it’s best used in places where silence and shadows dwell.",
    "category": "consumables",
    "price": 300,
    "icon": "🔥",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Restores Hit Points",
      "Reveals Lost Memories"
    ],
    "vendor": "forest_market",
    "shippedBy": "Giant Snail Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Hit Points",
        "rules": "When activated, the Ember Lantern restores 10 hit points to a creature. This effect is instantaneous and can be used once per long rest."
      },
      {
        "title": "Reveals Lost Memories",
        "rules": "The lantern casts an area of dim light for up to 1 hour when lit. Within this radius, creatures within 30 feet may attempt a DC 15 Wisdom saving throw. On a success, they can recall one specific memory lost to time, but the details are hazy and often unsettling."
      }
    ],
    "levelRequirementReason": "The Ember Lantern's connection to lost memories makes it accessible to lower-level characters who need to restore hit points or gain insight into their past.",
    "vendorReason": "The forest market is known for its antique and magical relics, making it a fitting place for this lantern of lore and healing.",
    "shippingDetail": "The lantern arrives by giant snail courier service, which ensures safe delivery but can take up to three days depending on the location.",
    "usage": {
      "activation": "A bonus action is required to light or extinguish the Ember Lantern.",
      "duration": "The lantern provides dim light for up to 1 hour when lit.",
      "endsWhen": "The effect ends if the lantern goes out, or after one long rest has passed since its last use.",
      "charges": "Unlimited uses; the lantern regenerates its effects naturally."
    },
    "priceReason": "The Ember Lantern's rarity and utility justify a price of 1000 XP, balancing its restorative and memory-revealing abilities.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-25T00:47:37.004086+00:00",
    "aiReviewedAt": "2026-07-25T00:47:37.004086+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_whispers_of_influence": {
    "id": "midlands_item_whispers_of_influence",
    "name": "Councilor's Favor Token",
    "description": "The Councilor's Favor Token, a small ear-shaped token intricately carved from polished obsidian and inlaid with gold filigree, whispers of influence to those who hold it. Its origin lies within the corrupting halls of power in the Midlands, where whispered secrets and favors are traded freely. With this token, you may subtly nudge conversations in your favor, overhear valuable rumors with a mere touch, and reduce bartering costs by 10%. Rumors say it was crafted by a guild of shadowy artisans who specialize in manipulating the flow of power.",
    "category": "curiosities",
    "price": 1100,
    "icon": "👂",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "+2 to Persuasion Checks",
      "5% Chance to Overhear Valuable Rumors"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "swift messenger hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Subtle Influence (Passive)",
        "rules": "While holding the Councilor's Favor Token, you gain a +2 bonus to all persuasion checks. This effect is passive and does not require an action."
      },
      {
        "title": "Overhear Rumors",
        "rules": "Once per short or long rest, you may touch the token to gain a 5% chance of overhearing one valuable rumor during your next conversation with someone in the Midlands. This effect is limited to once per day and requires no action."
      }
    ],
    "levelRequirementReason": "Beginners must learn the nuances of influence before wielding such a subtle tool.",
    "vendorReason": "The Empire Exchange thrives on secrets and favors, making it their perfect market for this token.",
    "shippingDetail": "Delivered by the swift messenger hawks of the Midlands, ensuring your token arrives in perfect condition.",
    "usage": {
      "activation": "Passive or through a touch action to overhear rumors",
      "duration": "Instantaneous for overhearing; passive effect is always active",
      "endsWhen": "Exhausted after one use per day",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with rare materials and infused with the corrupting power of the Midlands, this token commands a premium price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T00:47:22.200171+00:00",
    "aiReviewedAt": "2026-07-25T00:47:22.200171+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_chronometric_amulet": {
    "id": "midlands_item_chronometric_amulet",
    "name": "Amulet of Shifting Moments",
    "description": "The Amulet of Shifting Moments is a pulsating temporal charm crafted from ancient brass alloyed with starlight. With a focused thought, you can either rewind or fast-forward time for a single action, making it invaluable in the heat of battle or during prolonged tasks. This amulet's power can turn the tide against an oncoming attack or accelerate the growth of a particularly stubborn mushroom—perfect for those who find themselves in Wario's world of chaos.",
    "category": "equipment",
    "price": 16000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Manipulation",
      "Enhanced Reactions"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dimensional portal",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Temporal Manipulation",
        "rules": "As a reaction, you can either rewind time by up to 3 seconds for yourself or fast-forward it by the same duration. This effect is useful in dodging attacks or accelerating processes like growing mushrooms. The amulet can be used once per short rest."
      },
      {
        "title": "Enhanced Reactions",
        "rules": "+2 bonus to reaction rolls, making you quicker and more precise in responding to threats. This benefit lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "Requires proficiency with temporal magic to harness this amulet's full potential.",
    "vendorReason": "Fractured Forge specializes in crafting and selling unique, magical artifacts from across the planes of existence.",
    "shippingDetail": "Ships via a dimensional rift, ensuring swift delivery but requiring a brief period of stabilization upon arrival.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous (once per short rest)",
      "endsWhen": "The effect ends when you use it or at the start of your next turn if not used.",
      "charges": "Recharges on a short rest"
    },
    "priceReason": "Balanced for its unique temporal manipulation and reaction bonus, this amulet offers significant utility without being overpowered.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:47:15.807151+00:00",
    "aiReviewedAt": "2026-07-25T00:47:15.807151+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_obsidian_spike": {
    "id": "grand_country_obsidian_spike",
    "name": "The Root of Despair",
    "description": "The Root of Despair, a petrified spike forged from the heartwood of an ancient despairing tree, exudes a malevolent aura that chills and depresses those who dare to touch it. Its very touch saps hope and vitality, reducing foes' morale and leaving them reeling with despair. The spike's origins are shrouded in dread, said to have been crafted by the petrified spirit of an ancient sage whose heart was consumed by despair.",
    "category": "forbidden",
    "price": 5500,
    "icon": "🩸",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "reduces_target_morale",
      "inflicts_chilled_condition"
    ],
    "vendor": "side_seller",
    "shippedBy": "shadow_courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reduced Morale",
        "rules": "When a creature touches The Root, it must succeed on a DC 15 Wisdom saving throw or take a -2 penalty to all attack rolls and ability checks until the end of its next turn. This effect can be resisted once per long rest."
      },
      {
        "title": "Chilled Condition",
        "rules": "The target is inflicted with the Chilled condition, which lasts for 1d4 rounds. During this time, the target moves at half speed and takes a -2 penalty to Dexterity (Stealth) checks. The condition ends when it completes a long rest."
      }
    ],
    "levelRequirementReason": "This item's malevolent aura requires a character of at least fifth level to wield effectively.",
    "vendorReason": "The Root of Despair is a forbidden artifact, and the side seller has connections with the dark forces that control such items.",
    "shippingDetail": "Delivered under cover of night by the shadow courier, ensuring the item arrives without drawing unwanted attention.",
    "usage": {
      "activation": "Object interaction",
      "duration": "Instantaneous effect with a duration of 1 round for each creature affected",
      "endsWhen": "The target successfully saves against its effect or completes a long rest if under the Chilled condition",
      "charges": "Unlimited charges, recharged after a short rest"
    },
    "priceReason": "Its rarity and malevolent power justify this price, balancing its use in combat.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T00:48:03.872812+00:00",
    "aiReviewedAt": "2026-07-25T00:48:03.872812+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_layered_stone_charm": {
    "id": "grand_country_layered_stone_charm",
    "name": "The Architect’s Secret",
    "description": "The Architect’s Secret, a layered stone charm carved from impossibly stacked slabs of ancient rock, shimmers with cryptic patterns that seem to rearrange themselves with each passing moment. This enigmatic trinket offers resistance against unstable terrain, ensuring your feet stay steady even in the most treacherous landscapes. Whispers of arcane direction murmur around it, though their meaning remains elusive; they could guide you to hidden treasures or lead you into perilous traps. Wario, ever superstitious, clutches this charm, claiming it brings him good fortune—though many doubt his wisdom.",
    "category": "equipment",
    "price": 16000,
    "icon": "🧱",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "resistance_to_unstable_terrain",
      "whispers_of_direction"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Resistance to Unstable Terrain",
        "rules": "The wearer gains resistance to falling damage and advantage on saving throws related to unstable terrain. This effect lasts for the duration of their time in an unstable area."
      },
      {
        "title": "Whispers of Direction",
        "rules": "Once per short rest, the user can make a Wisdom (Perception) check as if they had advantage due to this charm. If successful, they gain insight into nearby traps or environmental hazards, though these insights are often cryptic and may not be entirely accurate."
      }
    ],
    "levelRequirementReason": "This charm requires a higher level for mastery as it involves interpreting its enigmatic whispers and navigating unstable terrains with precision.",
    "vendorReason": "Layer Market specializes in rare and ancient artifacts, making this charm an ideal addition to their inventory.",
    "shippingDetail": "Ships via a dimensional portal, ensuring the charm arrives intact despite its unstable nature.",
    "usage": {
      "activation": "Passive effect; requires no action. Active use once per short rest for direction whispers.",
      "duration": "Until leaving an area of unstable terrain or until expended in combat",
      "endsWhen": "The charm's uses are exhausted, or when the wearer leaves an unstable terrain.",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "This charm is priced at 1000 XP due to its unique and balanced abilities that enhance both safety and exploration.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-25T00:48:03.889862+00:00",
    "aiReviewedAt": "2026-07-25T00:48:03.889862+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chrono_delay": {
    "id": "kivotos_item_chrono_delay",
    "name": "Temporal Shift Studs",
    "description": "Temporal Shift Studs are iridescent adornments crafted from a Chrono-Club experiment gone awry. These studs, surprisingly comfortable to wear, can briefly manipulate time around you. When activated, they create a localized temporal distortion that slows down nearby foes by half speed for eight seconds. Additionally, any damage taken during this effect is reflected back at the attacker with a 25% chance. These relics are perfect for outmaneuvering relentless pursuers or securing a momentary advantage in a heated battle.",
    "category": "equipment",
    "price": 17000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "slow_target_50%",
      "reflect_damage"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "Activate as a bonus action. A creature within 10 feet of the wearer is slowed by half speed for 8 seconds. This effect ends if the creature moves more than 5 feet or if it takes damage."
      },
      {
        "title": "Damage Reflection",
        "rules": "Activates automatically when the wearer is hit with an attack. There is a 25% chance that the damage dealt to the wearer is reflected back towards the attacker, dealing half of the original damage. This effect can occur multiple times per short rest."
      }
    ],
    "levelRequirementReason": "These studs are accessible early in the campaign to allow characters to learn and adapt to their effects.",
    "vendorReason": "The student store often stocks items that can be used by adventurers who wish to blend into campus life or benefit from its unique resources.",
    "shippingDetail": "Ships within the next school day with Drone Delivery's express service.",
    "usage": {
      "activation": "Bonus action",
      "duration": "8 seconds",
      "endsWhen": "The creature moves more than 5 feet or takes damage, or when the effect ends naturally after 8 seconds.",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "This price reflects a balance between its powerful effects and the limited duration and range of its abilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:47:40.451934+00:00",
    "aiReviewedAt": "2026-07-25T00:47:40.451934+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_academy_badge_of_honor": {
    "id": "kivotos_item_academy_badge_of_honor",
    "name": "Badge of Scholarly Distinction",
    "description": "The Badge of Scholarly Distinction gleams with a subtle, golden hue that whispers tales of its wearer's integrity and achievements. Crafted by the Kivotos Academy’s Honor Council, it grants +2 to Persuasion checks when dealing with faculty members. It also unlocks exclusive access to prestigious club events, where one can hobnob with fellow academicians in a setting far removed from the bustling campus. This emblem is not just for show; it's a symbol of respect and trust within the academy’s walls.",
    "category": "faction",
    "price": 4300,
    "icon": "🏅",
    "stock": 18,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "persuasion_bonus_2",
      "exclusive_club_access"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Campus Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Persuasion Boost",
        "rules": "Activates on command, providing +2 to Persuasion checks when interacting with faculty members. This effect lasts until the end of your next turn."
      },
      {
        "title": "Exclusive Club Access",
        "rules": "Instantaneous activation grants access to exclusive club events within the Kivotos Academy. The badge must be worn during these events, and its benefits last for the duration of one event session (one day)."
      }
    ],
    "levelRequirementReason": "This badge is accessible to first-year students who have already earned the council's respect.",
    "vendorReason": "The armory sells items that reflect the prestige and achievements of Kivotos Academy’s members.",
    "shippingDetail": "Ships via Campus Mail, typically arriving within a week.",
    "usage": {
      "activation": "Command word or simply being worn during interactions with faculty.",
      "duration": "Instantaneous (Persuasion Boost) / One day per event session (Exclusive Club Access)",
      "endsWhen": "Ends at the end of your next turn for Persuasion Boost; ends upon leaving an event location for Exclusive Club Access.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its unique prestige and limited utility within the academy.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-25T00:48:23.581912+00:00",
    "aiReviewedAt": "2026-07-25T00:48:23.581912+00:00",
    "aiReviewVersion": 1
  },
  "internet_retro_console": {
    "id": "internet_retro_console",
    "name": "8-Bit Echo Chamber",
    "description": "The 8-Bit Echo Chamber is a diminutive console encased in retro-chrome and emerald glass, its surface aglow with pixelated ghosts of classic games. When activated, it summons a spectral guardian that fights with nostalgic fury, unleashing a barrage of glitched attacks that harken to the golden age of gaming. However, players must beware; every use risks triggering a temporary visual distortion, blurring reality for those caught in its digital crossfire.",
    "category": "equipment",
    "price": 4300,
    "icon": "🎮",
    "stock": 15,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Grants +3 to attack rolls with melee weapons",
      "Summons a spectral guardian (limited uses)"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_package",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Summon Spectral Guardian",
        "rules": "Activates as an action. The spectral guardian fights for the user until killed or dismissed, providing support combat. The guardian can be summoned once per long rest."
      },
      {
        "title": "Glitch Distortion",
        "rules": "There's a 25% chance (DC 14 CON save) of triggering a temporary visual distortion when the spectral guardian is active, blurring vision for 1 minute. The user can attempt a DC 15 Wisdom saving throw to negate this effect."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level to activate due to the spectral guardian's combat prowess and risk of glitches.",
    "vendorReason": "The cyber_market specializes in rare tech artifacts, including this nostalgic gaming relic.",
    "shippingDetail": "Ships via encrypted package with a 1-day processing delay due to data security protocols.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "Instantaneous summoning; duration until dismissed or killed.",
      "endsWhen": "Killed, dismissed, or upon death of the user.",
      "charges": "One use per long rest"
    },
    "priceReason": "Balanced price reflects its rare components and nostalgic value.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:48:12.141121+00:00",
    "aiReviewedAt": "2026-07-25T00:48:12.141121+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_sparkling_charm": {
    "id": "pokemon_item_sparkling_charm",
    "name": "Sparkling Charm of the Primal Flame",
    "description": "The Sparkling Charm of the Primal Flame pulses with tiny, flickering fire sprites that dance around its warm, gemstone core. Crafted from ancient volcanic glass and imbued with primal magic, this charm is said to amplify a trainer's connection to their Pokémon’s inner flame. It not only grants the wearer an aura of confidence but also subtly enhances their command over fire-type moves, making every command feel more potent.",
    "category": "curiosities",
    "price": 4300,
    "icon": "🔥",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "command_boost",
      "flame_connection"
    ],
    "vendor": "pokemart",
    "shippedBy": "swift_delivery",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Command Boost",
        "rules": "When you issue a command to your Pokémon, you can roll an additional d6 for initiative. This effect lasts until the end of your next turn."
      },
      {
        "title": "Flame Connection",
        "rules": "For 1 minute, your fire-type moves deal an extra +1d6 damage and have advantage on saving throws against fire resistance. This effect ends if you lose contact with a Pokémon within 30 feet."
      }
    ],
    "levelRequirementReason": "The charm requires a trainer to be at least level 4 to effectively channel its primal magic.",
    "vendorReason": "Pokemart stocks this rare item because it's popular among trainers seeking that extra edge in their battles.",
    "shippingDetail": "The charm is carefully wrapped to protect the delicate fire sprites during transit, ensuring its magical integrity remains intact.",
    "usage": {
      "activation": "Passive effect when worn and actively commanding a Pokémon within 30 feet.",
      "duration": "1 minute per use; ends if you lose contact with your Pokémon or if the charm is removed.",
      "endsWhen": "The duration ends, the charm is removed, or you lose contact with your Pokémon.",
      "charges": "Unlimited"
    },
    "priceReason": "The charm's rarity and magical properties justify its moderate price of 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:48:29.493739+00:00",
    "aiReviewedAt": "2026-07-25T00:48:29.493739+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_ancient_trainer_boots": {
    "id": "pokemon_item_ancient_trainer_boots",
    "name": "Ancient Trainer’s Boots of the Verdant Path",
    "description": "The Ancient Trainer’s Boots of the Verdant Path are crafted from the resilient hide of a long-extinct Pokémon, imbued with nature's own magic. These boots grant unparalleled agility and an instinctive connection to greenery, allowing wearers to navigate through dense forests with ease. However, stepping in Grimer slime not only disrupts this harmony but also leaves the wearer temporarily encased in a protective layer of muck, hindering movement for a short time.",
    "category": "equipment",
    "price": 17000,
    "icon": "👟",
    "stock": 35,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increased_speed",
      "nature_connection"
    ],
    "vendor": "safari_shop",
    "shippedBy": "poke_mail",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Increased Speed",
        "rules": "While wearing these boots, you have advantage on Dexterity (Acrobatics) checks and can move up to your normal speed plus an additional 10 feet per turn. This effect lasts for the duration of one short rest."
      },
      {
        "title": "Nature Connection",
        "rules": "You gain a +2 bonus to Nature saving throws, and you can use a bonus action to summon a small protective plant shield that grants you resistance to poison damage for 1 minute. The shield dissipates when it takes any damage or after the duration expires."
      }
    ],
    "levelRequirementReason": "The boots require a minimum of 9th level to ensure their effects are balanced and do not overshadow lower-level characters.",
    "vendorReason": "The Safari Shop specializes in exotic Pokémon gear, making these boots a perfect fit for their inventory.",
    "shippingDetail": "These boots require special handling due to their unique material and are shipped via poke_mail with express delivery.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of your next short rest or until the effects expire from other means.",
      "endsWhen": "The protective plant shield dissipates when it takes any damage, after one minute, or if you remove the boots.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the exotic nature of the materials and the unique magical properties of these boots.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:48:30.160257+00:00",
    "aiReviewedAt": "2026-07-25T00:48:30.160257+00:00",
    "aiReviewVersion": 1
  }
};
