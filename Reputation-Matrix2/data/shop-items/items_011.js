// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_011 = {
  "dwarf_realms_gold_claim_deed": {
    "id": "dwarf_realms_gold_claim_deed",
    "name": "Dwarven Gold Claim Deed (Rich Vein)",
    "description": "This ancient scroll, rolled within a sturdy wooden frame, bears the seal of Dwarf Realms and guarantees ownership to one of the richest gold veins in the mountains. The vein yields a guaranteed 50,000 gp worth of pure gold over the course of a year, but requires constant vigilance against rival claimants seeking to stake their own rights. Only the most hardy and resourceful can hope to secure such wealth from the heart of the earth.",
    "price": 4500,
    "icon": "💰",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Guaranteed Gold Yield",
      "Defensive Stakes"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "Dwarven Courier Service",
    "levelRequirement": 1,
    "factionBonus": {
      "economy": 50
    },
    "effectDetails": [
      {
        "title": "Guaranteed Gold Yield",
        "rules": "This deed ensures a yield of 50,000 gp worth of pure gold over the course of one year. The gold is ready for immediate extraction and smelting upon claimant's arrival at the vein."
      },
      {
        "title": "Defensive Stakes",
        "rules": "The claim must be actively defended from other miners or adventurers seeking to stake their own rights on the same vein. Any challenge requires a successful DC 20 Strength (Athletics) check, and any interruption in defense results in a potential loss of the claim."
      }
    ],
    "levelRequirementReason": "This item is designed for players who have reached basic adventuring proficiency but still face significant challenges from rival claimants.",
    "vendorReason": "Dwarf Realms Gate ensures that only those with the means and capability can purchase such a valuable claim, ensuring it goes to responsible hands.",
    "shippingDetail": "The deed is sent via the Dwarven Courier Service, which guarantees safe delivery within one week of purchase.",
    "usage": {
      "activation": "Instantaneous upon arrival and claim at the vein location.",
      "duration": "One year from claim activation.",
      "endsWhen": "Defensive stakes are interrupted or the claim is abandoned.",
      "charges": "Unlimited uses; once claimed, it remains active until the end of its duration."
    },
    "priceReason": "The price reflects the significant risk and reward associated with securing a rich gold vein in dangerous territory.",
    "priceOriginal": 280000,
    "priceReviewedAt": "2026-07-22T02:05:39.714374+00:00",
    "aiReviewedAt": "2026-07-22T02:05:39.714374+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_golem_core": {
    "id": "dwarf_realms_golem_core",
    "name": "Dwarven Animated Golem Core",
    "description": "The Dwarven Animated Golem Core is a meticulously crafted, rune-inscribed crystal at the heart of an ancient golem. Its facets gleam with the light of a thousand forges and the wisdom of ages past. This core animates one Huge stone or metal golem that remains loyal to its master indefinitely, provided it receives regular maintenance costing 5,000 gp annually. The core itself is a marvel of dwarven engineering, imbued with the very essence of earth and fire.",
    "price": 20000,
    "icon": "⚙️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Loyally Animates a Golem",
      "Infinite Loyalty with Annual Maintenance"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "Heavy Crate",
    "levelRequirement": 0,
    "effectDetails": [
      {
        "title": "Golem Animation",
        "rules": "This item allows the creation or animation of one Huge stone or metal golem construct. The golem is loyal to its master and remains active indefinitely if maintained at a cost of 5,000 gp annually."
      },
      {
        "title": "Maintenance Requirement",
        "rules": "Failure to pay maintenance fees results in the golem's shutdown and requires a successful DC 18 Craft (masonry) check each year to reactivate. The golem becomes hostile if not reanimated within one year of shutdown."
      }
    ],
    "levelRequirementReason": "This item is considered a rare, powerful artifact but does not require character level for use.",
    "vendorReason": "Dwarven Realms Gate specializes in ancient and legendary artifacts of dwarven craftsmanship.",
    "shippingDetail": "Ships via Heavy Crate, ensuring safe transport with a three-day delivery time.",
    "usage": {
      "activation": "Activate as an action to animate the golem.",
      "duration": "Indefinite if maintained; otherwise, shuts down after one year without maintenance.",
      "endsWhen": "Golem is destroyed or goes unattended for over a year.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its legendary rarity and the significant cost of golem maintenance.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-22T02:05:37.666517+00:00",
    "aiReviewedAt": "2026-07-22T02:05:37.666517+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_magical_ore_supply": {
    "id": "dwarf_realms_magical_ore_supply",
    "name": "Dwarven Magical Ore Supply (Adamantine)",
    "description": "The Dwarven Magical Ore Supply, forged from the heart of Mount Grondin, is a full ton of pure Adamantine ore, each grain shimmering with latent magical energy. Crafted by the skilled hands of Dwarf Realms, this ore is unmatched in quality and purity, enough to forge two pieces of legendary armor or three weapons fit for heroes. The ore's adamantine core repels any attempt at transmutation or damage by magic, ensuring its integrity remains unscarred.",
    "price": 200000,
    "icon": "💎",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Unmatched Quality",
      "Magical Integrity"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "Deep Tunnel Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unmatched Quality",
        "rules": "This ore can be used to craft two pieces of legendary armor or three weapons, each with a +1 bonus to attack and damage rolls. The quality ensures that any weapon forged from this ore is considered masterwork."
      },
      {
        "title": "Magical Integrity",
        "rules": "The ore's adamantine core resists all attempts at transmutation or magical damage. Any spell cast on it with the transmutation school fails, and it gains resistance to all damage types except psychic."
      }
    ],
    "levelRequirementReason": "Even the simplest of dwarven forges can appreciate this ore's unmatched quality.",
    "vendorReason": "Dwarven Realms Gate is known for carrying the finest materials from their forges, and this ore is no exception.",
    "shippingDetail": "Delivered via Deep Tunnel Transport's fastest route, ensuring the ore arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Until used to craft items or destroyed",
      "endsWhen": "Crafted into weapons or armor or destroyed by magical means",
      "charges": "Unlimited"
    },
    "priceReason": "The refined quality and unique properties of the ore justify its fair price.",
    "priceOriginal": 900000,
    "priceReviewedAt": "2026-07-22T02:05:50.415807+00:00",
    "aiReviewedAt": "2026-07-22T02:05:50.415807+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_master_gemcutter": {
    "id": "dwarf_realms_master_gemcutter",
    "name": "Dwarven Master Gemcutter (Service)",
    "description": "The Dwarven Master Gemcutter, a legendary tool forged in the heart of Mount Grondor, is renowned for its unparalleled craftsmanship. This service hires a master gemcutter to transform raw gems into shimmering treasures that amplify magic. The process takes an entire lunar cycle, during which the artisan imbues the stone with their ancient knowledge and skill, resulting in a gem that not only enhances spellcasting potency by +1 but also requires a DC 2 higher saving throw for any creature attempting to dispel its magic.",
    "price": 20000,
    "icon": "💎",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Enhanced Magical Potency",
      "Increased Saving Throw Difficulty"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "The Iron Road Express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Enhanced Magical Potency",
        "rules": "The gem cut by this artisan gains +1 to its magical potency and save DC. This enhancement lasts until the next dawn after it is placed into an item requiring a gemstone."
      },
      {
        "title": "Increased Saving Throw Difficulty",
        "rules": "Any creature attempting to dispel magic from an item containing one of these gems must succeed on a saving throw with a DC 2 higher than normal. This effect persists until the next dawn after the gem is no longer in use."
      }
    ],
    "levelRequirementReason": "Only those of significant magical prowess, typically level 15 or above, can appreciate and wield the power of a Dwarven Master Gemcutter's creation.",
    "vendorReason": "Dwarf Realms Gate is renowned for its connections with the finest artisans in all corners of the realm, making it the perfect vendor for such a service.",
    "shippingDetail": "Delivered via the Iron Road Express, this service ensures that the gemcutter's work is completed within one lunar cycle from order placement.",
    "usage": {
      "activation": "Instantaneous upon placing the gem into a magical item or potion.",
      "duration": "Lasts until dawn after the gem is no longer in use.",
      "endsWhen": "The effect ends when the gem is removed from an item requiring it, or at dawn following its removal.",
      "charges": "Unlimited"
    },
    "priceReason": "This service reflects the unparalleled quality and time investment required by a Dwarven Master Gemcutter.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-22T02:05:41.168723+00:00",
    "aiReviewedAt": "2026-07-22T02:05:41.168723+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_master_runesmith": {
    "id": "dwarf_realms_master_runesmith",
    "name": "Dwarven Master Runesmith (Hire)",
    "description": "Forgeheart Core, a massive rune-engraved stone from Dwarven Master Runesmiths in Dwarf Realms. This ancient artifact is crafted specifically for strongholds, imbuing them with resilience against siege weapons and natural disasters alike. With each passing day, the stronghold gains +20 hit points, bolstering its fortitude immeasurably. The runes are so potent that they require rare minerals to activate, a process that takes six months of meticulous work by the greatest runesmiths in the world.",
    "price": 120000,
    "icon": "⚒️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Bolster Fortification",
      "Resilient Siege Resistance"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "Guild Escort",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Bolster Fortification",
        "rules": "The stronghold gains +20 hit points per day and becomes resistant to siege weaponry. This effect lasts indefinitely until the runes are disrupted or the stronghold is destroyed."
      },
      {
        "title": "Resilient Siege Resistance",
        "rules": "For one week after the inscription, the stronghold has advantage on saving throws against damage from siege weapons and natural disasters such as earthquakes and floods. This effect can only be used once every six months due to rune depletion."
      }
    ],
    "levelRequirementReason": "The intricate crafting process requires a master runesmith who has reached the pinnacle of their craft, ensuring the integrity of the inscription.",
    "vendorReason": "Only Dwarf Realms Gate can provide such an artifact, as they have exclusive access to the greatest dwarven craftsmen and rare minerals.",
    "shippingDetail": "The Guild Escort ensures secure delivery by land, taking precisely six months from order placement to completion of installation.",
    "usage": {
      "activation": "Instantaneous upon inscription by a master runesmith.",
      "duration": "Indefinite until the stronghold is destroyed or the runes are disrupted.",
      "endsWhen": "The runes are disrupted or the stronghold is destroyed.",
      "charges": "Unlimited; however, the effect can only be used once every six months."
    },
    "priceReason": "The cost reflects not just the value of the materials and time involved but also the expertise required to inscribe such a powerful artifact.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-22T04:25:54.528957+00:00",
    "aiReviewedAt": "2026-07-22T04:25:54.528957+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_mithril_cutting_board": {
    "id": "dwarf_realms_mithril_cutting_board",
    "name": "Dwarf Realms Mithril Cutting Board",
    "description": "The Dwarf Realms Mithril Cutting Board is a sturdy board forged from mithral by the skilled dwarven craftsmen of the Realms. It gleams with an inner light, and its edges are as sharp as any blade, yet it can absorb the force of a weapon strike without denting. This culinary masterpiece not only enhances your cooking but also serves as a formidable shield when you need to defend yourself or others during a meal.",
    "category": "equipment",
    "price": 740,
    "icon": "⬜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Indestructible Shield",
      "Enhanced Cooking Prep"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Stone Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Indestructible Shield",
        "rules": "While holding the board, it can be used as a shield to grant you a +1 bonus to your AC. If struck by an attack roll, the board absorbs up to 5 damage per round without taking any wear or tear."
      },
      {
        "title": "Enhanced Cooking Prep",
        "rules": "When using this board for cooking, you gain advantage on checks made to prepare meals and dishes. This effect lasts until the meal is prepared or until you stop using it for such purposes."
      }
    ],
    "levelRequirementReason": "This item's utility in both defense and cooking makes it accessible to all adventurers, regardless of their level.",
    "vendorReason": "Dwarf Realms Smiths are renowned for their craftsmanship, ensuring that this cutting board is a reliable companion on any adventurer’s journey.",
    "shippingDetail": "Shipped via the Stone Cart, known for its reliability and timely deliveries, ensuring your culinary masterpiece arrives in perfect condition.",
    "usage": {
      "activation": "Passive effect while holding the board; can be used as a shield on initiative rolls.",
      "duration": "Instantaneous when used as a shield; lasts until the meal is prepared when cooking.",
      "endsWhen": "Exhausts charges or stops being used for its intended purpose.",
      "charges": "Unlimited, recharged by holding it during rest time."
    },
    "priceReason": "The balance of this item includes its rarity and the unique benefits it offers in both combat and everyday use.",
    "priceOriginal": 20500,
    "priceReviewedAt": "2026-07-22T02:05:56.485748+00:00",
    "aiReviewedAt": "2026-07-22T02:05:56.485748+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_mithril_gloves": {
    "id": "dwarf_realms_mithril_gloves",
    "name": "Dwarf Realms Mithril Gloves",
    "description": "The Dwarf Realms Mithril Gloves are masterfully crafted by the Mithril Smiths of Eirangar, their precision-forged fingers ensuring a perfect fit. These gloves enhance the wearer's dexterity in crafting and do not tarnish with age or use, remaining as bright and strong as the day they were made. Only those who can truly appreciate the finer details of dwarven craftsmanship—such as level 1 adventurers—are deemed worthy to wear them.",
    "price": 740,
    "icon": "🧤",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Precision Crafting",
      "Tarnish Resistance"
    ],
    "vendor": "dwarf_realms_forge",
    "shippedBy": "Metal Mesh Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precision Crafting",
        "rules": "As a bonus action, the wearer may choose one tool check related to crafting. The item grants advantage on this check. This effect can be used once per short or long rest."
      },
      {
        "title": "Tarnish Resistance",
        "rules": "The gloves do not tarnish or corrode, maintaining their pristine appearance indefinitely. They provide a +1 bonus to saving throws against corrosion and rust effects."
      }
    ],
    "levelRequirementReason": "These gloves are designed for any adventurer who seeks to refine their skills in crafting.",
    "vendorReason": "The Mithril Smiths of Eirangar have long been known for the quality and durability of their creations, and these gloves are no exception.",
    "shippingDetail": "Ships via Metal Mesh Express, ensuring swift delivery to the adventurer's doorstep.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect",
      "endsWhen": "Rests end",
      "charges": "Uses once per short or long rest"
    },
    "priceReason": "Balanced for an item that enhances crafting precision and offers a unique durability feature, this price reflects its value to adventurers.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-22T02:05:54.648353+00:00",
    "aiReviewedAt": "2026-07-22T02:05:54.648353+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_mithril_ingot": {
    "id": "dwarf_realms_mithril_ingot",
    "name": "Dwarf Realms Mithril Ingot",
    "description": "This ingot of purified Mithril gleams with a silvery luster, crafted by the finest dwarven artisans in the heart of the Iron Peaks. Each inch of this precious metal is as light as a feather but stronger than steel. This ingot can be forged into an item that weighs only half its normal weight and adds +1 AC to armor or extends your weapon's critical hit range by 1 step, making it a treasure for both tacticians and warriors alike.",
    "price": 20000,
    "icon": "⛏️",
    "stock": 5,
    "rarity": "legendary",
    "effects": [
      "Halves Weight",
      "Enhanced Critical Range"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "Ironbound Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Halves Weight",
        "rules": "When used to craft an item, the final product weighs only half its normal weight. This effect is permanent upon crafting."
      },
      {
        "title": "Enhanced Critical Range",
        "rules": "If used for weapon crafting, the critical hit range of the resulting weapon increases by 1 step, enhancing your combat prowess in decisive strikes. This effect lasts until the weapon breaks or is re-crafted."
      }
    ],
    "levelRequirementReason": "Crafting with Mithril requires a significant understanding of metallurgy and the ability to withstand the high temperatures needed for forging.",
    "vendorReason": "Dwarf Realms Gate is known for its unparalleled access to rare materials, including this precious Mithril ingot.",
    "shippingDetail": "Ships via Ironbound's express courier service with a delivery time of 3 days.",
    "usage": {
      "activation": "Used in the crafting process during metalworking.",
      "duration": "Permanent upon crafting into an item.",
      "endsWhen": "The crafted item breaks or is re-crafted, resetting its weight and critical range bonuses.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rarity of Mithril and the craftsmanship required to refine it into a usable ingot.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-22T04:25:37.056070+00:00",
    "aiReviewedAt": "2026-07-22T04:25:37.056070+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_mug_of_endless_ale": {
    "id": "dwarf_realms_mug_of_endless_ale",
    "name": "Mug of Endless Ale",
    "description": "The Mug of Endless Ale is a stout, weathered stone mug that has been imbued with the spirits of the Dwarven Realms. Each dawn, it magically refills itself with its signature potent ale, a legacy of ancient dwarven craftsmanship. Drinking from this enchanted mug grants you +2 temporary hit points and advantage on Intimidation checks for 10 minutes. If left empty, it will not refill until the next sunrise, ensuring its ale remains precious and sought after by all who seek its strength.",
    "category": "curiosities",
    "price": 750,
    "icon": "🍺",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Refills with Ale at Dawn",
      "Intimidating Aura"
    ],
    "vendor": "Kingdoms Dwarves",
    "shippedBy": "Stone Cask",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Refills with Ale at Dawn",
        "rules": "The mug refills itself with a gallon of ale each dawn, restoring its contents to full. This effect is automatic and requires no action from the user."
      },
      {
        "title": "Intimidating Aura",
        "rules": "For 10 minutes after drinking from the mug, you gain advantage on Intimidation checks. This effect ends if you are incapacitated or fall unconscious."
      }
    ],
    "levelRequirementReason": "The Mug of Endless Ale is accessible to all adventurers who wish to partake in its ale and benefits.",
    "vendorReason": "Kingdoms Dwarves are renowned for their craftsmanship and the quality of their wares, including this iconic mug.",
    "shippingDetail": "Ships via Stone Cask with a delivery time of three days due to the fragile nature of the mug.",
    "usage": {
      "activation": "Automatic daily refilling upon sunrise.",
      "duration": "Instantaneous refilling; Intimidating Aura lasts for 10 minutes after drinking.",
      "endsWhen": "If left empty, it will not refill until the next dawn. Ends if you are incapacitated or fall unconscious during the effect duration.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its enchanted properties and daily refilling capability.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T04:25:43.560825+00:00",
    "aiReviewedAt": "2026-07-22T04:25:43.560825+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_portable_keg": {
    "id": "dwarf_realms_portable_keg",
    "name": "Dwarf Realms Portable Keg",
    "description": "The Dwarf Realms Portable Keg is a compact ale vessel crafted from ironwood by the Ironforge Brewmasters. Its sturdy, hand-forged structure holds four servings of hearty dwarven ale that can quench even the thirstiest adventurer. Drinking it grants you and your allies temporary hit points equal to 1d6 + 2 for an hour, bolstering your constitution during taxing endeavors. After consuming two pints, you may feel slightly unsteady, leading to disadvantage on Dexterity checks as your senses fog with a mild buzz.",
    "category": "equipment",
    "price": 210,
    "icon": "🍺",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Heartening Ale",
      "Steady Buzz"
    ],
    "vendor": "dwarf_realms_tavern",
    "shippedBy": "Sturdy Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heartening Ale",
        "rules": "When consumed, the Portable Keg grants you and an ally within reach 1d6 + 2 temporary hit points for one hour. Drinking two servings consecutively imposes disadvantage on Dexterity checks until your next long rest."
      },
      {
        "title": "Steady Buzz",
        "rules": "After consuming two servings, you suffer a -5 penalty to Dexterity checks and saving throws until you complete a short or long rest."
      }
    ],
    "levelRequirementReason": "This item is suitable for lower-level adventurers who could use the temporary hit points in combat.",
    "vendorReason": "The Dwarf Realms Tavern is known for its selection of quality dwarven ales, making it the perfect vendor for this portable keg.",
    "shippingDetail": "The Portable Keg is carefully packed to ensure it arrives in top condition.",
    "usage": {
      "activation": "Consume one serving as an action.",
      "duration": "One hour per serving consumed.",
      "endsWhen": "Upon completion of a short or long rest.",
      "charges": "Unlimited, but only two servings can be consumed consecutively."
    },
    "priceReason": "The balanced price reflects the item's utility and the cost of quality dwarven ale and its crafting.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T04:25:24.979946+00:00",
    "aiReviewedAt": "2026-07-22T04:25:24.979946+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_recipe_iron_rations_stew": {
    "id": "dwarf_realms_recipe_iron_rations_stew",
    "name": "Recipe: Dwarf Realms Iron Rations Stew",
    "description": "Crafted by Dwarf Realms Quartermasters using ancient recipes from the Iron Peaks, this recipe transforms five days of iron rations into a hearty stew. The stew grants you and your companions 1d6 temporary hit points, ensuring you can face whatever lies ahead with renewed vigor. The aroma is unmistakably earthy, but the taste lingers like stone in your mouth, yet it sustains you for an entire day, leaving you strong against exhaustion from travel.",
    "price": 37,
    "icon": "📜",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Hearty Sustenance",
      "Resilient Fortitude"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Stone Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hearty Sustenance",
        "rules": "When consumed, the stew grants each recipient 1d6 temporary hit points. This effect lasts for 24 hours and can be used once per day."
      },
      {
        "title": "Resilient Fortitude",
        "rules": "For 12 hours after consuming the stew, you gain advantage on saving throws against exhaustion from travel or exertion."
      }
    ],
    "levelRequirementReason": "The recipe is straightforward and accessible to all adventurers.",
    "vendorReason": "Dwarf Realms Quartermasters are renowned for their practical yet delicious rations, perfect for any adventurer's pantry.",
    "shippingDetail": "The stew is carefully packed to ensure it remains palatable and potent during delivery.",
    "usage": {
      "activation": "Eating the stew",
      "duration": "24 hours",
      "endsWhen": "Ends when the temporary hit points are used up or after 12 hours for advantage on saving throws against exhaustion",
      "charges": "Once per day"
    },
    "priceReason": "The recipe is priced at a fair value, balancing its practical utility with the cost of rare ingredients and expert crafting.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T04:25:39.553559+00:00",
    "aiReviewedAt": "2026-07-22T04:25:39.553559+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_recipe_mithril_ale_bread": {
    "id": "dwarf_realms_recipe_mithril_ale_bread",
    "name": "Recipe: Dwarf Realms Mithril Ale Bread",
    "description": "The Recipe for Dwarf Realms Mithril Ale Bread is a culinary marvel, where each loaf is crafted by hand using the finest mithril ale and enchanted flour. When consumed, the bread grants you an extra +1 to Constitution saves for 8 hours, bolstering your resilience against harm. Each bite also infuses you with temporary hit points as though savoring a sip of the potent ale itself, but at the cost of a mild buzz that reduces Dexterity checks by 2 for an hour afterward.",
    "price": 210,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Constitution Boost",
      "Temporary Hit Points"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Sturdy Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Constitution Boost",
        "rules": "Eating this bread grants you +1 to Constitution saves for 8 hours. This effect is passive and does not require any action."
      },
      {
        "title": "Temporary Hit Points",
        "rules": "You gain 1d4 temporary hit points (representing the alcohol content). These last until you finish a long rest, and this effect can only be gained once per day."
      }
    ],
    "levelRequirementReason": "The recipe is widely available to all adventurers who wish to try their hand at crafting this legendary bread.",
    "vendorReason": "Dwarf Realms Bakers are renowned for their culinary expertise and the unique recipes they craft, including this iconic bread.",
    "shippingDetail": "The bread is delivered in a sealed container to ensure freshness, with delivery times varying between 3-5 days depending on location.",
    "usage": {
      "activation": "Passive effect upon consumption; no activation required.",
      "duration": "8 hours for Constitution boost and temporary hit points.",
      "endsWhen": "Upon finishing a long rest or when the effects naturally expire.",
      "charges": "Unlimited, but you can only gain the temporary hit points once per day."
    },
    "priceReason": "The recipe's rarity and the special ingredients involved make it a valuable commodity among adventurers seeking to enhance their resilience in battle.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T04:26:06.684981+00:00",
    "aiReviewedAt": "2026-07-22T04:26:06.684981+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_siege_plans": {
    "id": "dwarf_realms_siege_plans",
    "name": "Dwarf Realms Siege Plans (Advanced)",
    "description": "The Dwarf Realms Siege Plans (Advanced) are meticulously crafted maps and notes, bound within a sturdy leather sheath. These plans detail subterranean fortifications that seem to defy destruction, their tunnels and chambers carved with precision by the greatest dwarven engineers. With these plans in hand, any structure built within the next lunar cycle gains double its defensive hit points, making it an impenetrable stronghold against even the most relentless siege. The plans also grant you expertise on all defense rolls related to siege warfare, enhancing your strategic prowess and fortifying your defenses.",
    "price": 20000,
    "icon": "📐",
    "stock": 4,
    "rarity": "legendary",
    "effects": [
      "Doubles Defensive Hit Points",
      "Expertise in Siege Defense Rolls"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "Blueprint Scroll Courier",
    "levelRequirement": 10,
    "factionBonus": {
      "defense": 50,
      "engineering": 40
    },
    "effectDetails": [
      {
        "title": "Doubles Defensive Hit Points",
        "rules": "Activate once per lunar cycle to grant any structure built within the next month double its defensive hit points. The effect lasts for one year after the plans are used, and using it again will start a new lunar cycle counter."
      },
      {
        "title": "Expertise in Siege Defense Rolls",
        "rules": "While holding these plans, you gain expertise on all defense rolls related to siege warfare. This means you add your proficiency bonus twice when making such rolls. The effect is active as long as the plans are held and used within a siege context."
      }
    ],
    "levelRequirementReason": "This item requires significant expertise in engineering and strategy, which is why only those of 10th level or higher can utilize it effectively.",
    "vendorReason": "Dwarf Realms Gate specializes in the highest quality military and fortification plans, making these siege plans a natural addition to their inventory.",
    "shippingDetail": "These plans are delivered by the trusted Blueprint Scroll Courier, ensuring they reach you safely within three days of purchase.",
    "usage": {
      "activation": "Activate once per lunar cycle as an action.",
      "duration": "One year from activation.",
      "endsWhen": "Using it again starts a new lunar cycle counter.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The plans are priced at 1000 XP due to their advanced engineering and strategic value, which dwarven craftsmen can only produce after years of study and practice.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-22T04:26:22.859623+00:00",
    "aiReviewedAt": "2026-07-22T04:26:22.859623+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_sky_piercer": {
    "id": "dwarf_realms_sky_piercer",
    "name": "Dwarven Sky-Piercer Cannon",
    "description": "The Dwarven Sky-Piercer Cannon looms as a monstrous, iron-clad contraption, its barrel gleaming with runes that hum with ancient magic. Crafted in the heart of Mount Hammerside by Dwarf Realms, this cannon can fire enchanted projectiles into the very clouds, raining down destruction on distant targets up to five miles away. Its crew of four dwarves must first charge it for an hour before unleashing its devastating might.",
    "price": 100000,
    "icon": "💥",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Skyward Bombardment",
      "Dwarven Precision"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "Dwarven Courier Service",
    "levelRequirement": 16,
    "factionBonus": {
      "siege": 100
    },
    "effectDetails": [
      {
        "title": "Skyward Bombardment",
        "rules": "As a bonus action, the wielder can activate the cannon to fire an enchanted projectile into a target area up to five miles away. This attack deals 10d10 physical damage and has a range of 5 miles. The cannon requires one hour of charging before each use."
      },
      {
        "title": "Dwarven Precision",
        "rules": "The cannon's crew, consisting of four dwarves, must be present for it to function correctly. Each dwarf contributes their precision and strength, ensuring the cannon's accuracy and power. The cannon cannot be used without them."
      }
    ],
    "levelRequirementReason": "This level requirement ensures that only high-level characters can handle such a powerful siege weapon.",
    "vendorReason": "Dwarf Realms Gate, being the master forger of all things dwarven, naturally sells this iconic siege weapon.",
    "shippingDetail": "The cannon is shipped in disassembled parts and requires assembly upon arrival. The delivery can take up to a week due to its size and weight.",
    "usage": {
      "activation": "Bonus Action (requires charging)",
      "duration": "Instantaneous",
      "endsWhen": "Charges are expended or the cannon is destroyed",
      "charges": "1 charge, recharged after one month"
    },
    "priceReason": "This balanced price reflects both the cannon's rarity and the resources required to manufacture it.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-22T19:25:18.386983+00:00",
    "aiReviewedAt": "2026-07-22T19:25:18.386983+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_sonic_drill": {
    "id": "dwarf_realms_sonic_drill",
    "name": "Dwarven Sonic Tunneling Drill",
    "description": "The Dwarven Sonic Tunneling Drill is a massive, intricately crafted drill forged from adamantine and enchanted by ancient dwarven magic. It can carve through solid stone at an alarming rate of 100 feet per hour using focused sound waves, leaving behind a precise tunnel that echoes with the power of its creation. The drill's operation is so loud it alerts all subterranean creatures within a mile radius, making it both a marvel and a nuisance for those who seek stealthy passage.",
    "price": 20000,
    "icon": "⛏️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Tunnels through solid rock at 100 feet per hour",
      "Audible alert to all subterranean life"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "Massive Transport",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Tunneling Through Stone",
        "rules": "The Dwarven Sonic Tunneling Drill can tunnel through solid stone at a rate of 100 feet per hour. This effect is active as long as the user is within 30 feet of the drill and is considered to be using their action to operate it. The drill cannot tunnel through metal or living creatures."
      },
      {
        "title": "Audible Alert",
        "rules": "When activated, the drill emits a deafening sound that alerts all subterranean life within 1 mile. This effect lasts until the drill is turned off and has a save DC of 15 for creatures to ignore the alert. Creatures failing the save are aware of the tunneling activity."
      }
    ],
    "levelRequirementReason": "The intricate magic and precision required to operate this drill safely demand at least 8th level proficiency.",
    "vendorReason": "Dwarven Realms Gate specializes in high-quality, dwarven-made goods, including this legendary tool of construction.",
    "shippingDetail": "Ships via Massive Transport's Express Route, delivering within a week.",
    "usage": {
      "activation": "Action to operate the drill and turn off the alert sound.",
      "duration": "Instantaneous tunneling; alert lasts until turned off.",
      "endsWhen": "Drill is turned off or destroyed",
      "charges": "Unlimited uses per day, recharging overnight"
    },
    "priceReason": "The drill's rarity and the magic required to enchant it justify its moderate price of 1000 XP.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-22T04:26:36.827049+00:00",
    "aiReviewedAt": "2026-07-22T04:26:36.827049+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_stone_appreciation_course": {
    "id": "dwarf_realms_stone_appreciation_course",
    "name": "Dwarf Realms Stone Appreciation Course",
    "description": "Master the art of appreciating rocks and gems in this hands-on course offered by Dwarf Realms Geology. Learn to identify rare minerals, uncover ancient lore through stone formations, and gain a newfound respect for the world beneath your feet. Earn a certificate that grants you advantage on checks involving stones and gems for 7 days, but beware—once you've completed it, you'll find yourself collecting rocks obsessively, leading to potential inventory space issues.",
    "category": "services",
    "price": 210,
    "icon": "🪨",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on stone and gem checks",
      "Compulsive rock collection"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Stone Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stone Expertise",
        "rules": "You gain advantage on any check involving the identification of rocks or gems. This effect lasts for a period of 7 days from the moment you complete the course."
      },
      {
        "title": "Rock Collector",
        "rules": "Upon completing this course, you are permanently affected by an obsession with collecting rocks. This may lead to issues managing your inventory space and could result in excessive rock-related purchases or theft."
      }
    ],
    "levelRequirementReason": "This course is designed for beginners who wish to learn the basics of stone appreciation, making it accessible to all adventurers.",
    "vendorReason": "Dwarf Realms Geology specializes in geological education and offers this course as part of their comprehensive service offerings.",
    "shippingDetail": "The Stone Cart delivers your course materials personally, ensuring you receive all the necessary equipment for hands-on learning.",
    "usage": {
      "activation": "Passive effect upon completion of the course",
      "duration": "7 days from completion",
      "endsWhen": "Upon expiration or if you complete another similar course",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the comprehensive nature of the course, including expert instruction and all necessary materials for hands-on learning.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T04:26:44.057887+00:00",
    "aiReviewedAt": "2026-07-22T04:26:44.057887+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_unbreakable_rope": {
    "id": "dwarf_realms_unbreakable_rope",
    "name": "Dwarven Unbreakable Rope (50ft)",
    "description": "The Dwarven Unbreakable Rope, a marvel of craftsmanship from Dwarf Realms, is spun from ancient, deep-earth fibers that resist even the harshest elements and mundane weapons. This rope defies nature's laws, remaining unscathed by acid or extreme heat, and can only be severed with the aid of magic. Crafted with precision in the heart of the mountains, it has been used for generations to secure structures and traverse treacherous climbs.",
    "price": 4500,
    "icon": "⛓️",
    "stock": 10,
    "rarity": "epic",
    "effects": [
      "Unbreakable Bonds",
      "Resistant to Elements"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "Coiled Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unbreakable Bonds",
        "rules": "The rope cannot be cut, burned, or broken by mundane means. It requires a dispel check (DC 18) to sever the bonds it creates. Once severed, the rope retracts into a compact form and can be used again."
      },
      {
        "title": "Resistant to Elements",
        "rules": "The rope resists acid damage and extreme temperatures. It gains resistance to all fire, cold, and acid damage for 1 minute when exposed. This effect ends if the rope is exposed to a source of heat above its normal temperature."
      }
    ],
    "levelRequirementReason": "This item is suitable for adventurers just starting their journey.",
    "vendorReason": "Dwarven Realms Gate specializes in items crafted by the skilled hands of Dwarves, making this rope a staple in their inventory.",
    "shippingDetail": "Ships via Coiled Crate, known for its reliable delivery and secure packaging.",
    "usage": {
      "activation": "Instantaneous activation when needed; retracts into compact form after use.",
      "duration": "Permanent until used or destroyed",
      "endsWhen": "Severed by magic; retracts upon use",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item is priced at 1000 XP, reflecting its durability and utility for adventurers.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T04:26:59.733430+00:00",
    "aiReviewedAt": "2026-07-22T04:26:59.733430+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_under_city_deed": {
    "id": "dwarf_realms_under_city_deed",
    "name": "Dwarven Under-City Deed (Sector 7)",
    "description": "The Dwarven Under-City Deed to Sector 7 grants you permanent residency in the heart of a bustling underground metropolis, where every stone whispers tales of ancient craftsmanship and royal forges. This deed entitles its holder to full citizenship rights, access to exclusive trade routes, and the privilege of being housed within the city's most secure enclaves. The Dwarf Realms have forged this document with intricate runes that shimmer under the glow of enchanted lanterns.",
    "price": 20000,
    "icon": "🏰",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Permanent residency in a major underground capital",
      "Full citizenship rights and access to royal forges"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "Formal Declaration",
    "levelRequirement": 18,
    "factionBonus": {
      "residence": 100
    },
    "effectDetails": [
      {
        "title": "Permanent Residency",
        "rules": "This deed grants the holder permanent residence within Sector 7, providing all benefits of full citizenship. The holder is exempt from paying taxes but must adhere to city laws."
      },
      {
        "title": "Access to Royal Forges",
        "rules": "The holder gains access to the most advanced forges in Dwarven Realms, where they can craft or repair items with a 10% bonus to crafting checks. This benefit is effective as long as the holder maintains their residency."
      }
    ],
    "levelRequirementReason": "This deed requires high-level expertise and influence within Dwarven society, thus necessitating a minimum character level of 18.",
    "vendorReason": "Dwarf Realms Gate is the official entry point into the Dwarven Under-City, responsible for issuing such prestigious documents.",
    "shippingDetail": "The deed is delivered through a secure courier who ensures its safe arrival within one week of purchase.",
    "usage": {
      "activation": "Instantaneous upon acquisition; benefits are passive and always active once the deed is held.",
      "duration": "Permanent, lasting until lost or destroyed.",
      "endsWhen": "Loss or destruction of the deed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the value of permanent residency and access to exclusive forges within a legendary under-city.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-22T04:27:45.139749+00:00",
    "aiReviewedAt": "2026-07-22T04:27:45.139749+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_under_mountain_territory": {
    "id": "dwarf_realms_under_mountain_territory",
    "name": "Dwarven Under-Mountain Territory (New Claim)",
    "description": "This ancient parchment, embossed with mountainous engravings and sealed with Dwarven runes, is a deed to claim an uncharted subterranean realm. The territory lies far from any established hold, granting you rights to mine unique resources that no other dwarven hold can access. With this claim, you establish a new, independent Dwarven Hold, but the journey to assert your rights is fraught with ancient traps and rival claims from neighboring tribes.",
    "price": 210000,
    "icon": "⛰️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Establish a New Independent Dwarven Hold",
      "Gain Access to Unique Subterranean Resources"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "Royal Dwarven Courier",
    "levelRequirement": 10,
    "factionBonus": {
      "construction": 100,
      "resources": 100
    },
    "effectDetails": [
      {
        "title": "Claimed Hold",
        "rules": "Upon activation, you establish your hold. This requires completing the claim ritual (a short rest within the territory). Once claimed, it cannot be contested by another dwarven hold for a year and day unless you are defeated in challenge combat."
      },
      {
        "title": "Unique Resources",
        "rules": "You gain access to resources that are not found elsewhere. These resources have their own market value, determined by the DM, but they also provide a +1 bonus on all construction checks made within your territory for 24 hours after mining."
      }
    ],
    "levelRequirementReason": "This claim requires a significant amount of preparation and skill to ensure its validity.",
    "vendorReason": "Dwarven Realms Gate is the official authority for such claims, ensuring no unauthorized parties can stake a similar claim.",
    "shippingDetail": "The deed is delivered by Royal Dwarven Courier, ensuring safe passage and authenticity of the document.",
    "usage": {
      "activation": "A short rest within the territory to complete the claim ritual.",
      "duration": "Permanent until contested or lost in challenge combat.",
      "endsWhen": "Forfeit in a challenge combat or lost through failure during the claim ritual.",
      "charges": "Unlimited"
    },
    "priceReason": "This deed is priced at 1000 XP, reflecting its significant strategic and resource value to any dwarven hold.",
    "priceOriginal": 1200000,
    "priceReviewedAt": "2026-07-22T04:27:12.620993+00:00",
    "aiReviewedAt": "2026-07-22T04:27:12.620993+00:00",
    "aiReviewVersion": 1
  },
  "dwarven_forge_access": {
    "id": "dwarven_forge_access",
    "name": "Dwarven Master Forge Access (7 Days)",
    "description": "The Dwarven Master Forge Access is a rare permit that grants you temporary access to an ancient sacred forge where only the most skilled Dwarven artisans may work. This forge can temper and craft items from the rarest metals, including Adamantine and Mithril, which are imbued with the essence of the mountain itself. Forging under its watchful eye, crafted items gain +1 durability bonus and a +2 bonus to saving throws against corrosion or damage from fire.",
    "price": 4500,
    "icon": "🔥",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Forges Rare Metals",
      "Enhanced Durability"
    ],
    "vendor": "dwarf_elder",
    "shippedBy": "Royal Dwarven Escort",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Forges Rare Metals",
        "rules": "While using this access, you may craft items with Adamantine and Mithril. These materials are infused with the essence of the mountain, granting them unmatched strength and resilience."
      },
      {
        "title": "Enhanced Durability",
        "rules": "Crafted items gain +1 durability bonus and a +2 bonus to saving throws against corrosion or damage from fire for 24 hours after crafting."
      }
    ],
    "levelRequirementReason": "This item is intended only for those who have proven their worth in the Dwarven forging tradition.",
    "vendorReason": "The Dwarf Elder oversees sacred forges and ensures that only the most skilled and worthy receive access.",
    "shippingDetail": "Ships with a Royal Dwarven escort for added security, ensuring safe travel to your location.",
    "usage": {
      "activation": "Activates on first use; duration is 7 days from the start of dawn when you receive the permit.",
      "duration": "24 hours",
      "endsWhen": "At the end of its daily duration or if the item is destroyed, lost, or stolen.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the rarity and value of the access to a sacred forge, as well as the cost of securing the escort for safe delivery.",
    "priceOriginal": 55000,
    "priceReviewedAt": "2026-07-22T04:27:13.690256+00:00",
    "aiReviewedAt": "2026-07-22T04:27:13.690256+00:00",
    "aiReviewVersion": 1
  },
  "dwarven_forge_core": {
    "id": "dwarven_forge_core",
    "name": "Dwarven Forge-Core Installation",
    "description": "The Dwarven Forge-Core Installation hums with ancient power, its surface etched in intricate patterns that shimmer like molten iron. Crafted by Clan Ironfist over countless generations, this relic exponentially enhances the forger’s skill, allowing them to craft masterpieces at an unprecedented speed and quality. It is said that wielding this core can turn even the simplest of raw materials into a work of art worthy of the halls of Moria.",
    "price": 20000,
    "icon": "⚒️",
    "stock": 5,
    "rarity": "legendary",
    "effects": [
      "Enhanced Crafting",
      "Masterwork Access"
    ],
    "vendor": "deep_forge",
    "shippedBy": "Forge Priests",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Enhanced Crafting",
        "rules": "Activates upon donning, increasing the forger’s crafting speed by 300% for a duration of 30 days. The forger can craft items at a rate that rivals the legendary dwarven artisans themselves. This effect does not require any actions to activate and lasts until the end of the duration or when removed."
      },
      {
        "title": "Masterwork Access",
        "rules": "Grants immediate access to Dwarven Masterwork recipes, allowing the forger to create items that surpass even the finest craftsmanship. This effect is passive but must be activated by donning the core. The forger can only use this ability once per day."
      }
    ],
    "levelRequirementReason": "Only a master craftsman with years of experience and deep understanding of dwarven lore could wield such ancient power without risking unintended consequences.",
    "vendorReason": "The Deep Forge is the heart of clan ironfist’s forges, where only those who have earned their trust can acquire such a precious artifact.",
    "shippingDetail": "Ships via trusted dwarven courier with a delivery time of one week. The core must be carefully packed to ensure it reaches its destination in pristine condition.",
    "usage": {
      "activation": "Activates upon donning the core.",
      "duration": "30 days or until removed.",
      "endsWhen": "The effect ends when the core is removed or at the end of the 30-day duration.",
      "charges": "Unlimited, but can only be used once per day for Masterwork Access."
    },
    "priceReason": "This price reflects the item’s rarity and its immense value to a master craftsman. It is priced lower than expected due to its limited duration and daily limit on unique effects.",
    "priceOriginal": 365000,
    "priceReviewedAt": "2026-07-22T19:38:54.113292+00:00",
    "aiReviewedAt": "2026-07-22T19:38:54.113292+00:00",
    "aiReviewVersion": 1
  },
  "ear_plugs": {
    "id": "ear_plugs",
    "name": "Heavy Duty Earplugs",
    "description": "Heavy Duty Earplugs are crafted from thick, resilient leather and lined with soft wool to block out even the most cacophonous sounds. Crafted by the Valley Trading Post's skilled artisans, these earplugs not only muffle Mandragora's haunting screams but also dampen the resonant melodies of wandering Bards. Once inserted, they create an aural barrier that grants immunity to thunder damage for 1 hour and deafens the wearer until removed or destroyed.",
    "category": "equipment",
    "price": 37,
    "icon": "🔇",
    "stock": 50,
    "rarity": "common",
    "effects": [
      "Immunity to Thunder Damage",
      "Deafened while wearing"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Tiny Packet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Thunder Damage",
        "rules": "While wearing Heavy Duty Earplugs, you are immune to thunder damage. This immunity lasts for a duration of 1 hour from the moment the earplugs are inserted into your ears."
      },
      {
        "title": "Deafened while Wearing",
        "rules": "You are deafened while wearing these earplugs until they are removed or destroyed. You cannot hear any sound, even if you are aware of the general direction from which a sound originates."
      }
    ],
    "levelRequirementReason": "Crafted with common materials and techniques, these earplugs are suitable for beginning adventurers who may encounter thunderous or musical hazards.",
    "vendorReason": "The Valley Trading Post is known for its wide array of mundane goods that protect travelers from the perils of the wilderness.",
    "shippingDetail": "Ships via Tiny Packet, delivered within three days to most locations in the region.",
    "usage": {
      "activation": "Passive effect when inserted into ears.",
      "duration": "1 hour from insertion until removed or destroyed.",
      "endsWhen": "Removed manually or destroyed; immunity ends immediately upon removal.",
      "charges": "Unlimited use, as they are not consumed."
    },
    "priceReason": "This price reflects the quality of materials and craftsmanship required to create earplugs that effectively block both Mandragora's screams and Bardic songs.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T04:28:21.801119+00:00",
    "aiReviewedAt": "2026-07-22T04:28:21.801119+00:00",
    "aiReviewVersion": 1
  },
  "earlier_times": {
    "id": "earlier_times",
    "name": "Earlier Times",
    "description": "The bottle, once belonging to a timekeeper who could manipulate the flow of time, contains a fragment of 'earlier times'. When consumed as a reaction during combat, it causes the current turn to unravel, resetting all actions and conditions that have occurred since the start of the round. The attacker's strike vanishes into a ripple of temporal distortion, and you are left with your next action intact. The bottle itself is cracked and etched with arcane symbols, hinting at the fragile nature of time it once contained.",
    "category": "consumables",
    "price": 20000,
    "icon": "⌛",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Temporal Reset",
      "Next Action Unimpaired"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Courier of Swift Winds",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Reset",
        "rules": "When consumed as a reaction to an attack that would hit you, this bottle causes all actions and conditions since the start of the round to be undone. The attacker's strike is negated, and you regain your next action. This effect has no save DC and can only be used once per short or long rest."
      },
      {
        "title": "Next Action Unimpaired",
        "rules": "After using this item, you are not hindered by the temporal reset; you retain full control of your subsequent actions as if nothing had happened. However, any ongoing effects from the attack that was negated do not revert."
      }
    ],
    "levelRequirementReason": "Even the simplest of adventurers can understand the need to survive a dangerous encounter without the threat of fatal attacks.",
    "vendorReason": "The local shaman, who has dabbled in ancient lore and history, is known for acquiring such rare items from forgotten places.",
    "shippingDetail": "Delivered by the swift winds that carry the whispers of time itself, arriving just before the next dawn.",
    "usage": {
      "activation": "Reaction to an attack that would hit you",
      "duration": "Instantaneous; ends when used or if you take a voluntary action",
      "endsWhen": "The turn is reset and effect ends upon use",
      "charges": "Unlimited, recharged at dawn"
    },
    "priceReason": "The bottle's rarity and the skill required to safely handle its powerful effects justify this price.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-22T04:28:07.838193+00:00",
    "aiReviewedAt": "2026-07-22T04:28:07.838193+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_aegis_prison_key": {
    "id": "earth_land_aegis_prison_key",
    "name": "Aegis Prison Key",
    "description": "The Aegis Prison Key is a heavy, ancient stone key adorned with intricate carvings of toads and runes. Crafted from the very bedrock of Earth Land's oldest prison, it bears the weight of centuries. This relic not only opens sealed doors but also releases hidden chambers, such as the one housing 158 Toads, who were once trapped by the Primordial Wyrm’s seals. Each use weakens its ancient core, reducing durability and risking a catastrophic collapse near active seals.",
    "price": 20000,
    "icon": "🔐",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Opens Sealed Entrances",
      "Releases Hidden Toads"
    ],
    "vendor": "earth_land",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Open Sealed Doors",
        "rules": "The key can be used as an action to open any sealed door or vault within Earth Land. There is a 10% chance that using it near active seals will trigger a trap. Each use reduces the key’s durability by 10%, and if used too close to active seals, there's a risk of triggering a collapse with a DC 25 Dexterity saving throw."
      },
      {
        "title": "Release Hidden Toads",
        "rules": "Activating this effect requires an action. Once per day, the key can be used on the Aegis Prison to unlock its hidden chamber and release 158 Toads. The chamber remains open for one hour or until the door is sealed again."
      }
    ],
    "levelRequirementReason": "This key requires a user capable of handling its ancient magic without causing unintended damage.",
    "vendorReason": "Earth Land's local blacksmiths, having access to the prison’s original materials, can craft and sell this relic.",
    "shippingDetail": "Shipped via Blooper Wetworks’ express courier service with a 24-hour delivery time.",
    "usage": {
      "activation": "Action or Reaction (to open doors, DC 25 Dexterity save for seals; one use per day to release toads)",
      "duration": "Instantaneous (for door opening); one hour (for releasing toads)",
      "endsWhen": "Uses are exhausted after a set number of activations and collapses triggered",
      "charges": "Unlimited uses, but durability reduces with each activation"
    },
    "priceReason": "The key's rarity and magical properties justify its value despite being renewable.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T04:28:00.897266+00:00",
    "aiReviewedAt": "2026-07-22T04:28:00.897266+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_banana_bomb": {
    "id": "earth_land_banana_bomb",
    "name": "Banana Bomb",
    "description": "The Banana Bomb is a peculiar explosive crafted from the heart of a rare jungle banana. When detonated, it unleashes 1d6 force damage within a 5-foot radius. The lingering scent of banana confuses nearby beasts for up to 3 rounds, giving you and your allies advantage on Wisdom (Insight) checks made to resist being charmed by them. This sabotage device is the work of Kremling engineers, designed specifically for DK Crew missions in the banana groves.",
    "price": 38,
    "icon": "🍈",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Explosive Force",
      "Beast Confusion"
    ],
    "vendor": "earth_land",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Explosive Force",
        "rules": "When thrown and detonated as an action, the Banana Bomb deals 1d6 force damage to all creatures within a 5-foot radius. It has a 20% chance of triggering a banana peel trap that causes creatures in the area to fall prone on a failed Dexterity saving throw (DC 13)."
      },
      {
        "title": "Beast Confusion",
        "rules": "For up to 3 rounds, the Banana Bomb's scent confuses any beast within 30 feet. On their turn, these creatures must make a Wisdom saving throw (DC 15) or be charmed by you until the end of your next turn. This effect ends if the confused creature takes damage."
      }
    ],
    "levelRequirementReason": "This sabotage device is designed for quick, jungle-based missions and requires minimal training to use.",
    "vendorReason": "The earth_land vendors are well-known for supplying the DK Crew with unique tools for their covert operations in the jungle.",
    "shippingDetail": "Ships via a secret underground tunnel, ensuring quick delivery to the DK Isles.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The Banana Bomb detonates or is consumed by the banana hoarders.",
      "charges": "Unlimited"
    },
    "priceReason": "The Banana Bomb's unique combination of explosive and sabotage effects, along with its rarity in the wild, justifies this balanced XP price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-22T04:28:17.596727+00:00",
    "aiReviewedAt": "2026-07-22T04:28:17.596727+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_data_stream_collar": {
    "id": "earth_land_data_stream_collar",
    "name": "Data Stream Collar",
    "description": "The sleek Data Stream Collar pulses with a digital glow, its sleek metal casing lined with neon accents that flicker like a city skyline at nightfall. Crafted from recycled tech debris and powered by an ancient neural link, it channels the raw energy of the internet’s hidden currents. Wearers can tap into viral memes for strategic advantage or uncover deep web secrets, but prolonged use risks triggering glitch-induced hallucinations that distort reality.",
    "category": "equipment",
    "price": 210,
    "icon": "🌐",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Internet Access",
      "Risk of Glitch Hallucination"
    ],
    "vendor": "earth_land",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Enhanced Internet Access",
        "rules": "Activates as a bonus action. The wearer gains advantage on checks related to internet-based knowledge and can access viral memes for strategic advantage. This effect lasts until the end of their next turn."
      },
      {
        "title": "Risk of Glitch Hallucination",
        "rules": "After 5 minutes of continuous use, there is a 10% chance per minute that the wearer suffers from temporary disorientation as if they had failed a Wisdom saving throw (DC 12). This effect persists until the collar is removed or after 30 minutes."
      }
    ],
    "levelRequirementReason": "Requires sufficient technological knowledge to interface with the collar.",
    "vendorReason": "Earth Land specializes in tech and internet-related artifacts, making it a logical vendor for this item.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for its reliable though somewhat mysterious couriers.",
    "usage": {
      "activation": "Activates as a bonus action.",
      "duration": "Until the end of the wearer's next turn or until removed.",
      "endsWhen": "The collar is removed or after 30 minutes of continuous use.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced price reflects its tech rarity and limited utility without overpowered effects.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T04:28:50.240753+00:00",
    "aiReviewedAt": "2026-07-22T04:28:50.240753+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_donkey_kong_keychain": {
    "id": "earth_land_donkey_kong_keychain",
    "name": "Donkey Kong Keychain",
    "description": "The Donkey Kong Keychain, a whimsical artifact forged from a stolen diplomatic seal of the Regal Empire's Lanky Kongs, serves as both a reminder and a tool for peace in times of crisis. This keychain grants its bearer +1 to all diplomacy or humor checks, and when shaken during combat, it causes an amusing distraction that confounds nearby enemies. It also increases your speed by 10% while moving, allowing you to dodge quickly from danger.",
    "category": "equipment",
    "price": 38,
    "icon": "🦸",
    "stock": 20,
    "rarity": "common",
    "effects": [
      "Diplomacy Boost",
      "Combat Distraction"
    ],
    "vendor": "earth_land",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Diplomacy Boost",
        "rules": "Activates as a bonus action. Grants +1 to all diplomacy or humor checks for the duration of one short rest."
      },
      {
        "title": "Combat Distraction",
        "rules": "Shake the keychain during combat as a free action. Causes an amusing distraction, imposing disadvantage on attack rolls against you until the start of your next turn. Lasts for 1 minute or until shaken again."
      }
    ],
    "levelRequirementReason": "The keychain's humor and diplomacy benefits make it accessible to all adventurers.",
    "vendorReason": "Earth Land is known for its eclectic mix of souvenirs and keepsakes, including this humorous reminder from the Lanky Kongs' diplomatic misadventures.",
    "shippingDetail": "Ships with a special delivery note that acknowledges the keychain's role in easing tensions between factions.",
    "usage": {
      "activation": "Bonus action for diplomacy boost; free action to shake during combat for distraction.",
      "duration": "Until end of next short rest or until shaken again, respectively.",
      "endsWhen": "Upon a successful save DC 10 Wisdom (Perception) check by an enemy when shaken in combat.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The keychain's unique properties and the story behind it justify this higher price, making it a valuable yet balanced addition to any adventurer's collection.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-22T04:28:51.589386+00:00",
    "aiReviewedAt": "2026-07-22T04:28:51.589386+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_fairy_tail_guild_pot": {
    "id": "earth_land_fairy_tail_guild_pot",
    "name": "Earth Land Fairy Tail Guild Pot",
    "description": "The Earth Land Fairy Tail Guild Pot is a sturdy, handcrafted iron cauldron with a tail affixed to its handle. The tail moves on its own to stir the pot, ensuring that stews are well-mixed and free of lumps. This magical vessel not only enhances cooking but also boosts guild morale, making it a favorite among cooks and adventurers alike. Crafted by the renowned Fairy Tail Smiths using ancient techniques passed down through generations.",
    "category": "equipment",
    "price": 210,
    "icon": "🍲",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Tail Stirrer",
      "Guild Morale Boost"
    ],
    "vendor": "earth_land_guild",
    "shippedBy": "Tail Pot Tote",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tail Stirrer",
        "rules": "The pot's tail automatically stirs the contents of the cauldron, ensuring that stews are well-mixed. This effect is active as long as you use the pot to prepare a meal for at least one other person. The tail stops moving when the cooking duration ends or if the pot is removed from direct interaction with the fire."
      },
      {
        "title": "Guild Morale Boost",
        "rules": "When used in an environment where it can be heard stirring, this pot grants a +1 bonus to Charisma (Performance) checks made by members of your guild. This effect lasts for 1 hour and is usable once per day."
      }
    ],
    "levelRequirementReason": "Crafted with basic smithing skills, the pot can be used by any adventurer regardless of level.",
    "vendorReason": "The Earth Land Fairy Tail Guild is known for its camaraderie and often hosts communal meals. The guild members frequently use this pot to prepare hearty stews that boost their morale during long missions.",
    "shippingDetail": "Delivered by a dedicated member of the guild, ensuring safe delivery and timely arrival.",
    "usage": {
      "activation": "Used as part of meal preparation for at least one other person.",
      "duration": "1 hour while in use.",
      "endsWhen": "The cooking duration ends or when removed from direct interaction with a fire source.",
      "charges": "Unlimited, but only usable once per day for the morale boost."
    },
    "priceReason": "Balanced at this price to reflect its unique functionality and daily use limit.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T04:28:33.495730+00:00",
    "aiReviewedAt": "2026-07-22T04:28:33.495730+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_fairy_tail_guild_scarf": {
    "id": "earth_land_fairy_tail_guild_scarf",
    "name": "Earth Land Fairy Tail Guild Scarf",
    "description": "The Earth Land Fairy Tail Guild Scarf is a vibrant, hand-knit accessory passed down from guild members. Crafted from enchanted wool and adorned with the guild's iconic insignia, it warms those who wear it in cold weather and tangles in powerful wind magic, providing a tangible link to the guild’s magical camaraderie. This scarf has been worn by many brave souls who have faced trials together, embodying the spirit of teamwork and unity.",
    "price": 750,
    "icon": "🧣",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 to team-based rolls with guildmates",
      "Warms wearer in cold weather"
    ],
    "vendor": "earth_land_guildhall",
    "shippedBy": "Magic Muffler Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teamwork Boost",
        "rules": "When used by a member of Earth Land Fairy Tail, this scarf grants +1 bonus to all team-based rolls. This effect lasts until the end of the day or until the scarf is removed."
      },
      {
        "title": "Cold Weather Comfort",
        "rules": "This scarf provides a +2 bonus to saving throws against cold damage and environmental effects like frostbite. It remains warm as long as it is worn, but its warmth dissipates if not used within 30 minutes of acquiring it."
      }
    ],
    "levelRequirementReason": "The scarf's magic is accessible to adventurers early in their journey, symbolizing the guild’s welcoming nature.",
    "vendorReason": "As a relic of the guild’s history and traditions, this scarf is sold exclusively by Earth Land Fairy Tail Guild Hall.",
    "shippingDetail": "Ships within 24 hours via a trusted courier service. Scarves are delivered in special, insulated packaging to ensure they remain warm upon arrival.",
    "usage": {
      "activation": "Passive effect; no activation required once worn",
      "duration": "Lasts until the end of the day or removed",
      "endsWhen": "Ends when the wearer removes it or at midnight",
      "charges": "Unlimited"
    },
    "priceReason": "The scarf’s rarity and magical properties, combined with its limited stock, justify this balanced price in XP.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T04:28:49.235036+00:00",
    "aiReviewedAt": "2026-07-22T04:28:49.235036+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_fairy_tail_guild_stew_recipe": {
    "id": "earth_land_fairy_tail_guild_stew_recipe",
    "name": "Recipe: Earth Land Fairy Tail Guild Stew",
    "description": "The Recipe: Earth Land Fairy Tail Guild Stew is a treasured tradition among guild members, passed down through generations of cooks and eaters alike. This magical stew not only fosters camaraderie but also strengthens the bonds within the guild. When consumed in a group setting, it grants each participant an +1 bonus to their next attack roll when attacking together for 3 hours. The ingredients are sourced from the heart of Earth Land, where magic and nature intertwine, creating a stew that is both a feast for the stomach and a bonding experience for the soul.",
    "price": 210,
    "icon": "🍲",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Strengthen Team Attacks",
      "Guild Bonding"
    ],
    "vendor": "earth_land_guild",
    "shippedBy": "Guild Pot Page",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strengthen Team Attacks",
        "rules": "When consumed in a group, each participant gains a +1 bonus to their next attack roll when attacking together. This effect lasts for 3 hours or until the recipe's charges are exhausted."
      },
      {
        "title": "Guild Bonding",
        "rules": "Eating this stew with others fosters a sense of unity and strengthens the bonds between guildmates, enhancing teamwork in combat and daily activities."
      }
    ],
    "levelRequirementReason": "This recipe is suitable for all members of the Earth Land Fairy Tail Guild, as it enhances teamwork and camaraderie regardless of one's level.",
    "vendorReason": "The guild master ensures that this cherished tradition remains available to all, fostering a sense of unity among its members.",
    "shippingDetail": "Delivered directly by the Guild Pot Page, ensuring freshness and proper handling of such a precious item.",
    "usage": {
      "activation": "Eaten in a group setting during meals or guild gatherings.",
      "duration": "3 hours or until charges are exhausted.",
      "endsWhen": "The recipe's effects end when the duration expires or all charges are used up.",
      "charges": "Unlimited, as long as the stew is consumed."
    },
    "priceReason": "This recipe represents a cherished tradition and requires specific ingredients sourced from Earth Land, making it valuable but not overly exorbitant for the guild members to enjoy.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T04:29:14.151310+00:00",
    "aiReviewedAt": "2026-07-22T04:29:14.151310+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_fairy_tail_tattoo_premium": {
    "id": "earth_land_fairy_tail_tattoo_premium",
    "name": "Earth Land Fairy Tail Tattoo (Premium)",
    "description": "The Earth Land Fairy Tail Tattoo (Premium) is a permanent, glowing mark that weaves itself into your skin like a living emblem of Guild pride. Crafted by the most skilled mages from Fairy Tail, this ink not only grants you +1 to saving throws against magical effects for one week but also bestows a unique, itchy sensation that heightens your awareness during adventures. The tattoo's vibrant colors and subtle magic make you a walking symbol of your Guild’s resilience.",
    "price": 750,
    "icon": "🦊",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Glowing Guild Pride",
      "Itchy Awareness"
    ],
    "vendor": "earth_land_guild",
    "shippedBy": "Magic Ink",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Glowing Guild Pride",
        "rules": "You gain +1 to saving throws against magical effects for one week. This effect is active as long as the tattoo remains unscathed."
      },
      {
        "title": "Itchy Awareness",
        "rules": "During your adventures, you experience an itchy sensation that provides advantage on Wisdom (Perception) checks related to detecting traps or hidden creatures within 30 feet. The itchy feeling persists for 1 hour after the check."
      }
    ],
    "levelRequirementReason": "The intricate nature of this tattoo requires a mage with significant experience and skill in magical ink to craft, ensuring only those of at least 6th level can wear it.",
    "vendorReason": "As the official guild mark for Earth Land, the Earth Land Guild ensures that only their trusted mages create these tattoos.",
    "shippingDetail": "The tattoo is shipped directly by Magic Ink and must be applied by a certified Fairy Tail mage within one week of receiving it to ensure its magical properties are fully activated.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "One week for the saving throw boost, 1 hour for the perception check advantage due to itching.",
      "endsWhen": "The effects expire when the duration ends or if the tattoo is damaged beyond magical repair.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This premium version of the Earth Land Fairy Tail Tattoo comes with additional magical properties and a guarantee from the most trusted guild, justifying its lower price compared to the standard version.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T04:29:50.679192+00:00",
    "aiReviewedAt": "2026-07-22T04:29:50.679192+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_fake_aura_bomb": {
    "id": "earth_land_fake_aura_bomb",
    "name": "Aura Bomb of Infinite Hope",
    "description": "The Aura Bomb of Infinite Hope is a radiant, glowing orb that promises eternal peace and protection from harm. Crafted by Asgard using materials found only in the frozen tundras of Earth Land, it grants an almost surreal aura that reduces all incoming damage by 300%. However, its power comes at a cost: each use siphons the user's vitality, draining 10 hit points per turn until the curse is lifted. This artifact has no effect in the Shadowfell and can only be purchased from Earth Land vendors who are willing to overlook its questionable origins.",
    "price": 21000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Reduces all damage by 300%",
      "Drains 10 HP per turn after use"
    ],
    "vendor": "earth_land",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Damage Reduction",
        "rules": "Activates immediately upon use as a bonus action, reducing all incoming damage by 300% until the start of your next turn. The effect does not stack with other sources of damage reduction and ends if used in the Shadowfell or when the user's hit points are reduced to zero."
      },
      {
        "title": "Vitality Drain",
        "rules": "Activates upon use, draining 10 hit points per turn from the user until the curse is lifted. The effect ends immediately if the user's hit points drop to zero or if the bomb is destroyed."
      }
    ],
    "levelRequirementReason": "The Aura Bomb of Infinite Hope requires a minimum level of 5 due to its powerful defensive capabilities and the risk it poses to the user.",
    "vendorReason": "Earth Land vendors are known for their unique and often controversial items, making them the ideal sellers for this artifact with questionable origins.",
    "shippingDetail": "The Aura Bomb is shipped using Kremling Smuggle Run's covert delivery service, ensuring it reaches its destination without attracting unwanted attention.",
    "usage": {
      "activation": "Bonus action to activate the damage reduction and vitality drain effects.",
      "duration": "Until the start of your next turn or until used in the Shadowfell.",
      "endsWhen": "The effect ends if used in the Shadowfell, when the user's hit points are reduced to zero, or when the bomb is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced XP price reflects its powerful defensive capabilities and the risk it poses to the user.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T04:29:19.351863+00:00",
    "aiReviewedAt": "2026-07-22T04:29:19.351863+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_fire_flower_seed": {
    "id": "earth_land_fire_flower_seed",
    "name": "Fire Flower Seed",
    "description": "The Fire Flower Seed exudes an eerie crimson glow, its veins pulsing like a living heart. Planted in rich earth, it thrives on moisture, growing rapidly and accelerating the mutation of surrounding flora. The seed's core hummes with untamed power, capable of igniting explosive bursts that ripple through vegetation within 10 feet. When harvested after 24 hours, it yields a potent extract that can be used to fuel elemental rituals or unleash chaotic destruction in combat.",
    "price": 38,
    "icon": "🌱",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Spontaneous Combustion",
      "Mutagenic Acceleration"
    ],
    "vendor": "earth_land",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spontaneous Combustion",
        "rules": "When planted, the Fire Flower Seed has a 25% chance to trigger an explosive burst of flame within 10 feet of its location. The burst deals 2d6 fire damage to all creatures in the area and ignites any flammable objects. This effect occurs once per day."
      },
      {
        "title": "Mutagenic Acceleration",
        "rules": "The seed accelerates plant mutation, causing nearby plants to gain 1d4 mutation points every 5 seconds. This effect persists for as long as the seed is in the soil and can be triggered by planting or harvesting."
      }
    ],
    "levelRequirementReason": "Requires basic familiarity with elemental magic to safely handle the potent mutagenic properties.",
    "vendorReason": "The earth_land vendor specializes in botanical wonders and exotic flora, including the Fire Flower Seed.",
    "shippingDetail": "Ships via Chain Chomp Courier with expedited delivery within a week.",
    "usage": {
      "activation": "Planting or harvesting the seed triggers its effects.",
      "duration": "Effects last until the seed is removed from the soil or destroyed.",
      "endsWhen": "The plant dies, the seed is harvested, or it explodes in an uncontrolled burst.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Reflects the rarity and potential danger of handling a volatile mutation source.",
    "priceOriginal": 150,
    "priceReviewedAt": "2026-07-22T04:29:19.493087+00:00",
    "aiReviewedAt": "2026-07-22T04:29:19.493087+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_ice_wall_key": {
    "id": "earth_land_ice_wall_key",
    "name": "Ice Wall Key",
    "description": "The Ice Wall Key is hewn from the very heart of an ancient glacier, its surface etched with arcane runes that whisper of forgotten toads and icy cataclysms. When held near the Northern Wall’s edge, it emits a chilling aura that numbs touch, allowing passage into a hidden chamber where the first escape was recorded. The key glows faintly in cold weather, hinting at ancient magic bound within its core.",
    "category": "equipment",
    "price": 750,
    "icon": "🏔",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Opens hidden chamber beneath Ice Wall",
      "Grants resistance to cold damage"
    ],
    "vendor": "earth_land",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "When the user is within 5 feet of an ice wall or similar cold environment, they gain advantage on saving throws against cold damage and have a +2 bonus to their AC. This effect lasts for 1 minute."
      },
      {
        "title": "Unlock Hidden Chamber",
        "rules": "The key can be inserted into the Northern Wall to unlock a hidden chamber beneath it. Once used, the key breaks apart and dissolves into icy fragments."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate this tool for its historical significance and magical properties.",
    "vendorReason": "The local earth land vendor has connections to the ancient toads who created these keys.",
    "shippingDetail": "Delivered via a Chain Chomp Courier, ensuring safe passage through icy terrains.",
    "usage": {
      "activation": "Standard action",
      "duration": "Until used or destroyed",
      "endsWhen": "Key is inserted into the Northern Wall and broken apart",
      "charges": "Unlimited"
    },
    "priceReason": "The key's rarity, historical significance, and magical properties justify a price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T04:29:44.077275+00:00",
    "aiReviewedAt": "2026-07-22T04:29:44.077275+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_iron_legion_bolt": {
    "id": "earth_land_iron_legion_bolt",
    "name": "Iron Legion Bolt",
    "description": "The Iron Legion Bolt is a magitek artillery projectile forged from the heart of the Iron Legion's industrial might. Crafted with iron alloy and powered by a hidden magitech core, it pierces through three layers of armor or magical shielding effortlessly. Each bolt fires with devastating precision, delivering 6d8 kinetic damage to its target. A unique design ensures that the bolt can only be fired after being charged by an Iron Legion generator for at least 30 seconds.",
    "category": "equipment",
    "price": 4500,
    "icon": "⚙",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Pierces Armor",
      "High Velocity Kinetic Damage"
    ],
    "vendor": "earth_land",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Kinetic Impact",
        "rules": "When the Iron Legion Bolt is fired, it deals 6d8 kinetic damage to a target within 120 feet. The bolt can pierce through up to three layers of armor or magical shielding before striking its intended target."
      },
      {
        "title": "Charging Requirement",
        "rules": "The bolt must be charged for at least 30 seconds with power from an Iron Legion generator before it can be fired. This charging process also reduces the user's stamina by 2 points, representing the strain of maintaining the weapon’s magitech core."
      }
    ],
    "levelRequirementReason": "This item requires a level 8 character to wield due to its complex magitek components and high-powered kinetic energy.",
    "vendorReason": "Earth Land is the primary supplier of Iron Legion technology, including this unique magitek projectile.",
    "shippingDetail": "The bolt must be shipped via Blooper Wetworks' secure delivery service to ensure it arrives fully charged and operational.",
    "usage": {
      "activation": "Uses an action to charge, then a bonus action to fire the bolt once per long rest after being charged.",
      "duration": "Instantaneous",
      "endsWhen": "The bolt strikes its target or is destroyed upon misfire.",
      "charges": "Unlimited charges as long as it remains properly powered."
    },
    "priceReason": "This balanced price reflects the item's unique magitek design, powerful effects, and the strategic importance of being able to use it in combat.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T04:29:37.728593+00:00",
    "aiReviewedAt": "2026-07-22T04:29:37.728593+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_name_here": {
    "id": "earth_land_item_name_here",
    "name": "Rusty Iron Satchel",
    "description": "The Rusty Iron Satchel is a dented leather bag adorned with faded engravings of an ancient trade route. Originating from Asgard, it was crafted by skilled blacksmiths to withstand the roughest of journeys. This satchel can carry up to 100 pounds of gear without compromising its integrity and slightly increases your chances of stumbling upon hidden treasures in junkyards. However, when overloaded beyond 50 pounds, a weight penalty is applied, making movement cumbersome.",
    "category": "equipment",
    "price": 38,
    "icon": "🔮",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Hidden Treasure Hunter",
      "Weight Penalty"
    ],
    "vendor": "earth_land",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Treasure Hunter",
        "rules": "When in a junkyard, you have a 25% chance to find hidden loot. This effect is active as long as the satchel is being carried within a junkyard."
      },
      {
        "title": "Weight Penalty",
        "rules": "When carrying more than 50 pounds, you suffer a -1 penalty to Strength (or equivalent ability) checks and saving throws until you rest or discard additional weight from your inventory."
      }
    ],
    "levelRequirementReason": "This satchel is designed for adventuring parties of all levels, making it accessible to beginners.",
    "vendorReason": "The earth land vendor has a robust network that extends into various regions, including those where the satchel's trade route engravings are relevant.",
    "shippingDetail": "Ships via Kremling Smuggle Run, known for its reliable and fast delivery services.",
    "usage": {
      "activation": "Passive effect while carrying the satchel in a junkyard.",
      "duration": "Instantaneous; ends when you rest or discard weight over 50 pounds.",
      "endsWhen": "Resting or discarding additional weight.",
      "charges": "Unlimited"
    },
    "priceReason": "The satchel's rarity and unique crafting from Asgard justify its higher price, providing significant utility without breaking the game balance.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-22T04:29:36.186660+00:00",
    "aiReviewedAt": "2026-07-22T04:29:36.186660+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_lothlorien_amber": {
    "id": "earth_land_lothlorien_amber",
    "name": "Lothlórien Amber",
    "description": "Lothlórien Amber, a glowing resin harvested from the ancient elven realm's Silverwood, radiates a soft golden light that seems to shimmer with the whispers of forgotten tales. Crafted by the elves themselves, this resin not only enhances one’s stealth in forested terrains but also subtly boosts one’s charisma when speaking within these sacred groves, creating an aura of calm and confidence. Its fragrance lingers, offering a fleeting connection to the elven lore that once thrived here.",
    "price": 210,
    "icon": "🍃",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Stealth",
      "Charisma Boost"
    ],
    "vendor": "earth_land",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Stealth",
        "rules": "This effect increases your stealth bonus by +2 in forests. The duration is until the end of your next long rest."
      },
      {
        "title": "Charisma Boost",
        "rules": "For 1 minute, you gain a +1 bonus to Charisma (Performance) checks when speaking within the Silverwood. This effect ends if you leave the Silverwood or are incapacitated."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners as it enhances survival skills and social interactions in specific environments.",
    "vendorReason": "The earth land vendors have a deep connection to the ancient elven realm and its artifacts, making them reliable sources for such items.",
    "shippingDetail": "Ships via air courier with expedited delivery within one week.",
    "usage": {
      "activation": "Instantaneous use",
      "duration": "Until the end of your next long rest or until you leave the Silverwood, whichever comes first",
      "endsWhen": "You are incapacitated or leave the Silverwood",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects its rarity and the complex extraction process from the Silverwood.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T04:30:30.867027+00:00",
    "aiReviewedAt": "2026-07-22T04:30:30.867027+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_mordor_ring_core": {
    "id": "earth_land_mordor_ring_core",
    "name": "Mordor Ring Core",
    "description": "The Mordor Ring Core, a fragment of ancient power forged from the ruins of Barad Dur, hums with malevolent energy. Its surface is etched with dark runes that shimmer faintly when exposed to moonlight. This relic grants its wielder +3 to all attacks against foes tainted by Sauron's influence, and it whispers the echo of Sauron’s will upon activation. A vestige of the Shadow Realm, this core can be fused with other rings to amplify power, further binding the wearer to the Dark Lord’s dominion.",
    "price": 750,
    "icon": "🪐",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Dark Whisper",
      "Mordor Taint"
    ],
    "vendor": "earth_land",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Dark Whisper",
        "rules": "When activated, the Mordor Ring Core emits a faint whisper of Sauron's will. This has no combat effect but grants the user advantage on all Charisma (Intimidation) checks against creatures marked with the Mordor tag. The core can be activated once per short or long rest."
      },
      {
        "title": "Mordor Taint",
        "rules": "+3 to attacks against foes marked with the Mordor tag, but the user must make a successful DC 15 Constitution saving throw or suffer a -2 penalty on all attacks and ability checks until the end of their next short rest. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "The Mordor Ring Core's malevolent power requires a user with significant experience to wield without succumbing to its influence.",
    "vendorReason": "Earth Land, known for their extensive trade routes and knowledge of ancient artifacts, has a vast network that includes the remnants of Sauron’s dominion.",
    "shippingDetail": "Delivered with a custom Hammer Bros. crate, ensuring safe arrival even in treacherous lands.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the user completes their next short rest.",
      "charges": "Uses per day"
    },
    "priceReason": "Balanced against other rare artifacts, this item reflects its power and unique lore.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T04:30:24.623464+00:00",
    "aiReviewedAt": "2026-07-22T04:30:24.623464+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_mud_serpent_horn": {
    "id": "earth_land_mud_serpent_horn",
    "name": "Mud Serpent Horn",
    "description": "The Mud Serpent Horn, a gnarled and twisted relic of ancient swamp lore, exudes a noxious miasma that can be harnessed to attract foes or induce vivid hallucinations. Crafted from the legendary mud serpent's horn, it is said to carry the essence of lost aqueducts and forgotten valleys. When smoked, its fumes fill the air with ethereal visions of ancient waterways, while its touch grants temporary resistance to poison for one round.",
    "price": 210,
    "icon": "🐍",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Scented Attraction",
      "Hallucinogenic Visions"
    ],
    "vendor": "earth_land",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Scented Attraction",
        "rules": "As an action, the user can exhale a noxious cloud within a 30-foot cone that attracts hostile creatures. Creatures in the area must make a DC 14 Wisdom saving throw or be charmed by the cloud for 1 minute. The cloud persists until dispelled."
      },
      {
        "title": "Hallucinogenic Visions",
        "rules": "When smoked as an action, the horn induces a hallucination effect that lasts for 1 hour or until the user is incapacitated. During this time, the user sees vivid but illusory visions of forgotten valleys and ancient aqueducts."
      }
    ],
    "levelRequirementReason": "The Mud Serpent Horn's potent effects require a level 1 character to safely handle its powerful hallucinations.",
    "vendorReason": "Earth Land vendors have the resources and knowledge to sell this ancient relic without causing undue harm.",
    "shippingDetail": "Shipped via Blooper Wetworks' specialized courier, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Action or Reaction (for Scented Attraction), Action (for Hallucinogenic Visions)",
      "duration": "One round for resistance to poison; one hour for hallucinations",
      "endsWhen": "Dispel magic, incapacitation, or the effect's duration ends.",
      "charges": "Unlimited, but limited by daily use restrictions"
    },
    "priceReason": "The Mud Serpent Horn is priced at 1000 XP due to its rare crafting materials and potent effects.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T04:30:14.336008+00:00",
    "aiReviewedAt": "2026-07-22T04:30:14.336008+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_shadow_fell_connector": {
    "id": "earth_land_shadow_fell_connector",
    "name": "Shadowed Ice Shard",
    "description": "A Shadowed Ice Shard is a crystalline fragment that shimmers with a pale blue glow when exposed to moonlight. Crafted by Asgard in the depths of the Shadowfell, it exudes an eerie cold that can be felt even from afar. This shard not only grants you resistance against dark magic but also allows for a brief teleportation to the nearest Shadowfell portal at your peril; each use risks invoking a curse upon your next encounter.",
    "price": 750,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Resistance to Dark Magic",
      "Brief Teleport and Curse Risk"
    ],
    "vendor": "earth_land",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Resistance to Dark Magic",
        "rules": "You gain advantage on saving throws against spells and effects with the dark trait. This effect lasts until the start of your next turn."
      },
      {
        "title": "Brief Teleport and Curse Risk",
        "rules": "As a bonus action, you can attempt to teleport to the nearest Shadowfell portal. You must succeed on a DC 15 Constitution saving throw or be cursed with misfortune for an hour, affecting all your dice rolls."
      }
    ],
    "levelRequirementReason": "Requires sufficient experience and knowledge of dark magic to wield this shard effectively.",
    "vendorReason": "Earth Land's extensive trade routes extend into the Shadowfell, allowing them to offer rare artifacts like the Shadowed Ice Shard.",
    "shippingDetail": "Delivery is handled by Kremling Smuggle Run, known for their covert and timely deliveries through treacherous terrains.",
    "usage": {
      "activation": "Bonus action to teleport or a reaction to gain resistance.",
      "duration": "Instantaneous teleport; advantage on saving throws lasts until the start of your next turn.",
      "endsWhen": "The use ends upon successful teleportation, failure of the save, or exhausting charges.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and utility without overshadowing other items.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T04:30:05.489008+00:00",
    "aiReviewedAt": "2026-07-22T04:30:05.489008+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_skull_cannon": {
    "id": "earth_land_skull_cannon",
    "name": "Skull Cannon",
    "description": "The Skull Cannon is a grim relic forged in the depths of the Skaven warrens. It fires skull-shaped projectiles that explode with a bone-chilling scream, echoing through dark tunnels. Each shot unleashes a cascade of spectral energy, dealing both physical and psychological damage to foes. The weapon's power comes from the souls of fallen enemies, and it demands attunement from those who would wield its mad might.",
    "category": "equipment",
    "price": 4500,
    "icon": "🗡",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Spectral Screams",
      "Psychic Fear"
    ],
    "vendor": "earth_land",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Spectral Screams",
        "rules": "When the Skull Cannon fires, it emits a haunting scream that deals 2d6 psychic damage to all creatures within 30 feet. This effect has no save DC and lasts until the start of your next turn."
      },
      {
        "title": "Psychic Fear",
        "rules": "Each projectile also inflicts a fear effect on targets within 15 feet, forcing them to make a DC 14 Wisdom saving throw or become frightened for 1 minute. The fear ends early if the target takes any damage."
      }
    ],
    "levelRequirementReason": "This relic requires attunement with a Skaven artifact and is crafted from the Grimdark War's most potent relics, making it suitable only for experienced heroes.",
    "vendorReason": "Earth Land specializes in ancient artifacts and relics, often dealing in items that have been lost to time or forgotten by history.",
    "shippingDetail": "The Chain Chomp Courier ensures safe delivery through the perilous earth tunnels, guaranteeing secure transport of this volatile relic.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The charge is expended after a single shot or when broken in combat",
      "charges": "5 charges"
    },
    "priceReason": "This relic's price reflects its rarity and the XP required to craft such an ancient and powerful weapon.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T04:30:19.826176+00:00",
    "aiReviewedAt": "2026-07-22T04:30:19.826176+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_sonic_drone_core": {
    "id": "earth_land_sonic_drone_core",
    "name": "Sonic Drone Core",
    "description": "The Sonic Drone Core, a relic from the Dragon Conspiracy’s sonic emitters, is a compact, humming device that crackles with latent energy. Crafted from enchanted metal and dragon-scale composite, it emits frequencies capable of weakening even the mightiest dragons, causing them to stagger in confusion for moments they can ill afford. Its activation triggers a vivid memory echo of Princess Peach’s assassination, leaving the user with unsettling visions that last until the core is deactivated or destroyed.",
    "category": "equipment",
    "price": 4500,
    "icon": "🎵",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Weakens Dragons",
      "Memory Echo"
    ],
    "vendor": "earth_land",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weaken Dragons",
        "rules": "When activated as an action within 30 feet of a target dragon, this device emits a sonic pulse that reduces the target’s Strength score by 2 until the end of its next turn. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Memory Echo",
        "rules": "Upon activation, the user experiences a vivid memory echo related to Princess Peach's assassination for one minute. The visions are disorienting but do not grant combat advantage or disadvantage on any checks or saving throws during this time."
      }
    ],
    "levelRequirementReason": "The core requires basic sonic manipulation skills, making it accessible to most proficient spellcasters.",
    "vendorReason": "Earth Land’s secret vault is known for its trove of stolen and rare artifacts.",
    "shippingDetail": "Ships via a covert route, ensuring the core arrives safely but not immediately. Expect delivery within one week from the time of purchase.",
    "usage": {
      "activation": "Action to activate and use once per long rest.",
      "duration": "Instantaneous effect; lasts until the end of the target’s next turn or until destroyed.",
      "endsWhen": "The core is destroyed, deactivated by a successful DC 15 Disable Device check, or its activation ends at the start of the target's next turn.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "Balanced to provide a significant tactical advantage in dragon combat without being overpowered.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T04:30:43.215382+00:00",
    "aiReviewedAt": "2026-07-22T04:30:43.215382+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_toad_bow": {
    "id": "earth_land_toad_bow",
    "name": "Admiral Toad’s Bow",
    "description": "Admiral Toad’s Bow is a weapon forged from the pride of a defeated naval commander. Crafted by Team Plasma, it bears the final signature of Admiral B. Toad himself. This bow not only deals piercing damage but also momentarily warps reality for its wielder, making targets perceive their environment in an altered state. It requires attunement by someone skilled in martial arts or diplomacy and will misfire when used by Lanky Kongs.",
    "category": "equipment",
    "price": 4500,
    "icon": "🏹",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Piercing Damage",
      "Reality Warp"
    ],
    "vendor": "earth_land",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Piercing Damage",
        "rules": "The bow deals 3d8 piercing damage on a hit. If the target is below 50% of its maximum health, it also inflicts an additional 1d6 shock damage."
      },
      {
        "title": "Reality Warp",
        "rules": "When used, there is a 10% chance that the target’s perception of reality is altered for the duration. This effect has no save DC and does not consume charges or have a limit; it simply occurs on each successful hit."
      }
    ],
    "levelRequirementReason": "Anyone can wield Admiral Toad’s Bow, but its unique properties require attunement.",
    "vendorReason": "Earth Land is known for its diverse range of exotic and historical items, making it the perfect vendor for this relic.",
    "shippingDetail": "Delivered by Koopa Postal with a special courier service that ensures safe arrival within three days.",
    "usage": {
      "activation": "On hit as part of the attack action",
      "duration": "Instantaneous, reverts on miss or when used against an Lanky Kong",
      "endsWhen": "The effect ends on a miss or if used against a Lanky Kong",
      "charges": "Unlimited"
    },
    "priceReason": "This bow is crafted from a defeated admiral’s pride and imbued with unique properties, making it a rare and valuable item.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T04:30:35.153084+00:00",
    "aiReviewedAt": "2026-07-22T04:30:35.153084+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_toadburt_scarecrow": {
    "id": "earth_land_toadburt_scarecrow",
    "name": "Toadburt Scarecrow",
    "description": "A Toadburt Scarecrow stands tall, its eyes glowing eerily in the night. Crafted by Asgard from local materials and enchanted to deter nocturnal pests, it's a cloth figure with a rusted chain that clinks softly in the breeze. This guardian of the crops grants temporary invisibility for 10 seconds, making it an invaluable tool for covert operations. It also slightly increases stealth roll success, allowing you to move unseen through the shadows just long enough to strike or evade.",
    "price": 210,
    "icon": "🔮",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Invisibility",
      "Stealth Boost"
    ],
    "vendor": "earth_land",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "Activates as a bonus action. The Toadburt Scarecrow grants you and any creature within 5 feet of it temporary invisibility for 10 seconds. This effect ends if you or any creature within the area take an action, or if you leave the area."
      },
      {
        "title": "Stealth Boost",
        "rules": "Passive bonus to Stealth checks equal to your proficiency bonus when using the Scarecrow as cover. Ends at the start of your next turn after activating Invisibility."
      }
    ],
    "levelRequirementReason": "This item is designed for lower-level characters who need a reliable means of covert movement and stealth.",
    "vendorReason": "Earth Land vendors specialize in crafting tools that support local agriculture, making the Toadburt Scarecrow an essential product for farmers and those needing to move unseen.",
    "shippingDetail": "Ships via a secret route, ensuring quick delivery without detection.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds",
      "endsWhen": "You or any creature within the area takes an action or leaves the area",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The balanced price reflects its utility for stealth and temporary invisibility, making it a must-have for adventurers and farmers alike.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T04:31:39.522423+00:00",
    "aiReviewedAt": "2026-07-22T04:31:39.522423+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_warioware_core": {
    "id": "earth_land_warioware_core",
    "name": "WarioWare Core",
    "description": "The WarioWare Core, a pulsating core of mischievous energy, is a relic extracted from the third branch of WarioWare’s domain. This legendary artifact grants its wielder the power to manipulate time and space in absurdly unpredictable ways. Each use triggers a random 'Wario event,' an explosion of chaos that could send you on a meme teleport or trigger a glitch-induced time loop, all while ensuring a laugh-out-loud experience. Beware: after five uses, you might find yourself permanently disoriented by the sheer madness.",
    "price": 21000,
    "icon": "🎮",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Grants 1d6 bonus to all skill checks in WarioWare branches",
      "Triggers a random Wario event on each use"
    ],
    "vendor": "earth_land",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Skill Check Bonus",
        "rules": "When used, this core grants the wielder a +1d6 bonus to all skill checks related to WarioWare. This effect is instantaneous and lasts until your next short or long rest."
      },
      {
        "title": "Random Wario Event",
        "rules": "Each activation triggers a random Wario event that can include effects like time loops, teleporting to random locations, or causing glitch explosions. The exact effect is determined by the DM. These events last until they naturally resolve or are interrupted."
      }
    ],
    "levelRequirementReason": "To wield this core without penalty, you must have reached at least level 10 to handle its unpredictable nature.",
    "vendorReason": "The earth_land vendor is known for its eclectic stock of legendary items, and the WarioWare Core fits perfectly into their collection of quirky artifacts.",
    "shippingDetail": "Carefully packed to withstand the unpredictable nature of the core’s effects, ensuring it arrives in one piece.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Instantaneous",
      "endsWhen": "The event naturally ends or is interrupted by an external factor",
      "charges": "5 uses"
    },
    "priceReason": "This price reflects the core's legendary rarity and its unique, unpredictable utility within the WarioWare branches.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-22T04:30:59.744926+00:00",
    "aiReviewedAt": "2026-07-22T04:30:59.744926+00:00",
    "aiReviewVersion": 1
  },
  "earthworm_jim_suit": {
    "id": "earthworm_jim_suit",
    "name": "Super Suit Replica",
    "description": "The Super Suit Replica is a marvel of engineering, crafted from reinforced Kevlar and infused with Wario's own secret formula. This suit grants the wearer superhuman strength, capable of lifting vehicles, and an array of whip-like tendrils that can extend to attack enemies at range. When in motion, the suit allows short bursts of flight, propelling you through the air like a living missile. The suit is always attuned to its owner, speaking with a mechanical yet oddly cheerful voice.",
    "category": "equipment",
    "price": 4600,
    "icon": "🦸",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Superhuman Strength",
      "Flight and Whip Attacks"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pigeon Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Superhuman Strength",
        "rules": "Activates as a bonus action; the wearer gains +4 to Strength (to a maximum of their original Strength modifier plus 8). This effect lasts for 1 minute, requiring an additional bonus action to renew. While this effect is active, the wearer can use their action to make a melee weapon attack with a reach of 30 feet."
      },
      {
        "title": "Flight and Whip Attacks",
        "rules": "Activates as a reaction when you are hit by an attack or fall prone; you gain short bursts of flight, allowing you to rise up to 30 feet into the air. You can then extend whip-like tendrils from your suit to strike at enemies within reach (2d6 bludgeoning damage). The suit recharges after a long rest."
      }
    ],
    "levelRequirementReason": "The suit requires a minimum level of 8 due to its complex engineering and the energy it consumes.",
    "vendorReason": "Wario's own company, Wario Direct, ensures that only those capable of handling such power can obtain this suit.",
    "shippingDetail": "The Courier Pigeon Express guarantees swift delivery, but the suit requires special packaging to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action for strength boost and reaction for flight and whip attacks",
      "duration": "1 minute per use (recharges after a long rest)",
      "endsWhen": "At the end of your turn if not renewed by an additional bonus action or when expended in combat.",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "The suit's rarity and unique capabilities justify its reduced price due to the significant power it provides.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-22T04:31:04.317960+00:00",
    "aiReviewedAt": "2026-07-22T04:31:04.317960+00:00",
    "aiReviewVersion": 1
  },
  "echo_lantern": {
    "id": "echo_lantern",
    "name": "Echo Lantern",
    "description": "The Echo Lantern, crafted from polished obsidian and inlaid with silver runes, hums softly as it captures the last spoken phrase within its glowing core. Its light flickers not just to illuminate but also to encode sound vibrations that can be played back at will. The lantern's voice has a strange power; when it replays an old cry or promise, some creatures are moved to act on the words, while others shudder in unease.",
    "category": "curiosities",
    "price": 750,
    "icon": "🏮",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Sound Recording",
      "Voice of Persuasion"
    ],
    "vendor": "glow_merchant",
    "shippedBy": "Wooden Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sound Recording",
        "rules": "The Echo Lantern can record up to one minute of sound within a 60-foot radius. To activate, the wielder must use an action to focus on capturing the sounds. The recorded phrase is stored in the lantern’s core and can be played back with another action."
      },
      {
        "title": "Voice of Persuasion",
        "rules": "When replayed within 60 feet, the recorded sound has a chance to influence creatures who heard it originally. Creatures must make a Wisdom saving throw (DC 14) or be moved by the recorded message; failure indicates they are swayed to act according to the phrase's intent."
      }
    ],
    "levelRequirementReason": "The Echo Lantern is crafted with simple enchantments suitable for low-level spellcasters.",
    "vendorReason": "Glow Merchant specializes in magical curiosities that enhance daily life, and the Echo Lantern fits perfectly within this niche.",
    "shippingDetail": "Shipped via a courier who ensures the lantern’s delicate components are handled with care to avoid damage during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous recording, one minute playback",
      "endsWhen": "Charges run out or it is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The Echo Lantern’s rarity and unique enchantments justify its price of 1000 XP.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T04:31:11.561379+00:00",
    "aiReviewedAt": "2026-07-22T04:31:11.561379+00:00",
    "aiReviewVersion": 1
  },
  "echo_of_a_dead_god": {
    "id": "echo_of_a_dead_god",
    "name": "Echo of a Dead God",
    "description": "The Echo of a Dead God is a twisted relic that hums with the untimely silence of a forgotten deity. Its core glows faintly, pulsing in time with the whispers it emits—mournful sounds that only mortals can hear. This artifact demands daily offerings; failure to comply leads to cryptic visions and eventual possession by the god’s spirit. Speak its name aloud, and the corpse begins to stir from its eternal slumber.",
    "category": "forbidden",
    "price": 210000,
    "icon": "🗣️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Divine Whisper",
      "Worship Demand"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Bone Flute",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Divine Whisper",
        "rules": "At will, you can cast a divine spell of your choice from the Core Domain list. The spell has no material components and is cast at your proficiency level."
      },
      {
        "title": "Worship Demand",
        "rules": "You must pray to the Echo daily by sunset; failure grants the deity control over one random minor action per day, which it can use to manipulate you."
      }
    ],
    "levelRequirementReason": "Only those of sufficient power and knowledge are capable of safely wielding such a dangerous artifact.",
    "vendorReason": "The Echo is a forbidden item, but the Crypt Courier handles all unauthorized artifacts for a price.",
    "shippingDetail": "The Echo must be shipped via Bone Flute to ensure it arrives undisturbed and intact.",
    "usage": {
      "activation": "At will, as an action",
      "duration": "Instantaneous; the spell cast once per day",
      "endsWhen": "Daily prayer is missed or the Echo is damaged beyond repair",
      "charges": "Unlimited"
    },
    "priceReason": "The Echo, though forbidden, has a limited daily use and requires constant care, making it moderately priced.",
    "priceOriginal": 1100000,
    "priceReviewedAt": "2026-07-22T04:31:13.949831+00:00",
    "aiReviewedAt": "2026-07-22T04:31:13.949831+00:00",
    "aiReviewVersion": 1
  },
  "echoes_bottle": {
    "id": "echoes_bottle",
    "name": "Echoes Bottle",
    "description": "The Echoes Bottle is a slender, glass container with a corked lid and etched runes that whisper of ancient magic. It can capture fleeting sounds like a living echo, preserving them in its depths until you release their haunting melody from afar. The bottle's origins are shrouded in mystery, but it is said to have been crafted by the forgotten alchemists of the Mournful Peaks. With it, you may deceive sound-sensitive traps or summon an auditory decoy that lures foes into your trap or ambush.",
    "category": "curiosities",
    "price": 210,
    "icon": "🍶",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Capture and replay a single spoken sentence",
      "Trigger sound-sensitive defenses"
    ],
    "vendor": "black_ink",
    "shippedBy": "Corked Bottle Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Replay Echo",
        "rules": "As an action, you can point the bottle toward a creature within 500 feet. The creature hears the stored sentence as if it were spoken by you with no change in tone or volume."
      },
      {
        "title": "Trigger Trap",
        "rules": "If the bottle is near a sound-sensitive trap or mechanism, the stored echo can trigger it. This effect has a 50% chance of success and requires an Intelligence (Investigation) check against DC 13."
      }
    ],
    "levelRequirementReason": "This item's magic is subtle enough that even low-level characters can manage its effects without overwhelming their capabilities.",
    "vendorReason": "Black Ink, a vendor of arcane curiosities and ancient artifacts, sources the Echoes Bottle from alchemical scholars who still study forgotten magics.",
    "shippingDetail": "The bottle is shipped securely in a padded container to ensure its fragile magic remains intact until delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used or destroyed",
      "charges": "Unlimited, recharged when exposed to sound"
    },
    "priceReason": "The Echoes Bottle's price reflects the rare materials and ancient alchemical knowledge required for its creation.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T04:31:36.260380+00:00",
    "aiReviewedAt": "2026-07-22T04:31:36.260380+00:00",
    "aiReviewVersion": 1
  },
  "echoing_horn_of_warning": {
    "id": "echoing_horn_of_warning",
    "name": "Echoing Horn of Warning",
    "description": "The Echoing Horn of Warning is a brass trumpet with intricate engravings. It can be heard clearly for miles, but its sound reverberates unnaturally in close quarters. When blown, it alerts allies within 300 feet without requiring an action and lasts for one minute. Enemies nearby must succeed on a Wisdom saving throw (DC 12) to ignore the cacophony. The horn recharges after a short rest or if its sound is disrupted by noise.",
    "category": "equipment",
    "price": 750,
    "icon": "📯",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Alerts Allies",
      "Disruptive Noise"
    ],
    "vendor": "watchtower_supplies",
    "shippedBy": "Brass Case Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Alerts Allies",
        "rules": "When the user blows the Echoing Horn of Warning, all allies within a 300-foot radius are alerted. This effect lasts for one minute and does not require any action from the user."
      },
      {
        "title": "Disruptive Noise",
        "rules": "Enemies within 60 feet of the horn must succeed on a Wisdom saving throw (DC 12) or be distracted by the sound, unable to take actions other than reactions for the duration. The effect ends if noise from another source is introduced."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers of any level to use as a basic alerting tool.",
    "vendorReason": "Watchtower Supplies regularly stocks equipment that enhances the safety and communication capabilities of their customers, including this versatile horn.",
    "shippingDetail": "Delivered via trusted couriers who ensure the horn arrives in pristine condition.",
    "usage": {
      "activation": "Standard action to blow the horn once",
      "duration": "1 minute or until noise is introduced",
      "endsWhen": "Noise from another source, or if blown incorrectly (kazoo sound)",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Echoing Horn of Warning offers a balanced price point for its utility in both combat and exploration scenarios.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T04:31:26.233691+00:00",
    "aiReviewedAt": "2026-07-22T04:31:26.233691+00:00",
    "aiReviewVersion": 1
  },
  "edible_magic_scrolls_1": {
    "id": "edible_magic_scrolls_1",
    "name": "Recipe: Mages' Guild Scroll Sandwich",
    "description": "The Recipe: Mages' Guild Scroll Sandwich is a delicacy from the Mages' Guild Experimental Kitchen, crafted by alchemists who have mastered the art of embedding spell scrolls within edible parchment. Each sandwich contains a scroll that can be consumed to cast its spell (levels 1 or 2) without expending your own spell slots. The taste mimics parchment, which may slightly deter your social graces (disadvantage on Charisma checks while eating).",
    "price": 750,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Scroll Sandwich Spellcasting",
      "Social Disincentive"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Scroll Sandwich Spellcasting",
        "rules": "Eating the sandwich allows you to cast a spell from the scroll (levels 1 or 2) without expending your own spell slots. This effect can be used once per day."
      },
      {
        "title": "Social Disincentive",
        "rules": "While eating, you suffer a disadvantage on Charisma checks and saving throws until you finish consuming the sandwich."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for anyone to enjoy its benefits.",
    "vendorReason": "The Mages' Guild Experimental Kitchen is known for creating unique and potent items like the Scroll Sandwich.",
    "shippingDetail": "Shipped by Arcane Relay, guaranteed delivery within a week of purchase.",
    "usage": {
      "activation": "Eating the sandwich",
      "duration": "Instantaneous (spell effect)",
      "endsWhen": "The spell is cast or the sandwich is consumed",
      "charges": "Once per day"
    },
    "priceReason": "Balanced price for a unique and useful consumable, offering a one-time use of a spell without expending personal resources.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T04:31:26.375200+00:00",
    "aiReviewedAt": "2026-07-22T04:31:26.375200+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_astral_map_projector": {
    "id": "eiwass_astral_map_projector",
    "name": "Eiwass Astral Map Projector",
    "description": "The Eiwass Astral Map Projector is a cumbersome, brass-plated device that hums with arcane energy when activated. It projects an intricate, holographic map of the astral currents, revealing safe and dangerous paths between planes. Crafted by Eiwass, the projector not only grants immunity to getting lost in the Astral Plane but also allows for three times faster travel between planes, making it indispensable for any adventurer venturing into other realms.",
    "price": 210000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Immunity to Getting Lost",
      "Three Times Faster Travel Between Planes"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Swift Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Getting Lost",
        "rules": "The user gains immunity to the effects of getting lost in the Astral Plane. This effect is active as long as the device projects its map and does not require any action to maintain."
      },
      {
        "title": "Three Times Faster Travel Between Planes",
        "rules": "When using the Eiwass Astral Map Projector, traveling between planes takes only one-third of the normal time. The user must activate the projector as a bonus action at the start of their turn and can maintain this effect for up to 1 minute."
      }
    ],
    "levelRequirementReason": "The device's complexity requires basic arcane knowledge, making it accessible even to first-level spellcasters.",
    "vendorReason": "Eiwass, the master of celestial navigation, is known for crafting such indispensable tools for adventurers and explorers.",
    "shippingDetail": "Ships via Swift Courier Service within one week from Eiwass Astronomer's workshop.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Up to 1 minute per day",
      "endsWhen": "The projection ends when the device is turned off or damaged beyond repair.",
      "charges": "Unlimited, but requires recharging after extended use."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its unique utility and complexity without granting game-breaking advantages.",
    "priceOriginal": 280000,
    "priceReviewedAt": "2026-07-22T19:25:16.326988+00:00",
    "aiReviewedAt": "2026-07-22T19:25:16.326988+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_astral_ship_hull": {
    "id": "eiwass_astral_ship_hull",
    "name": "Eiwass Astral Ship Hull (Unfinished)",
    "description": "The Eiwass Astral Ship Hull, a gleaming vessel of astral metal, glows faintly as if alive with the stars it will sail among. Crafted by the legendary shipwright Eiwass, this massive hull already boasts an AC of 22 and 2000 hit points, ready to be completed into a starship of unmatched elegance and power. The Astral Ship Hull is a marvel of celestial engineering, its surface etched with arcane symbols that whisper tales of distant realms and forgotten stars.",
    "price": 210000,
    "icon": "🛸",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "A functional, massive starship hull (AC 22, HP 2000)",
      "Completion requires ritual magic"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Celestial Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Starlit Hull",
        "rules": "The hull glows with a soft astral light, providing advantage on Perception checks made to detect stars or celestial phenomena within 30 feet. This effect lasts for 1 hour."
      },
      {
        "title": "Completion Ritual",
        "rules": "To complete the hull into a fully functional starship, the owner must spend 500,000 gp and successfully cast the Completion of Starship Hull spell over 6 months. Failure requires a new completion ritual. This effect is limited to once per shipwright."
      }
    ],
    "levelRequirementReason": "This hull is complex and requires basic understanding of starship construction.",
    "vendorReason": "Eiwass, the renowned shipwright, personally crafted this vessel and ensures its completion.",
    "shippingDetail": "The hull is delivered via a special celestial express service that ensures it arrives in pristine condition within one week of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the starship is completed or destroyed.",
      "endsWhen": "Completion ritual fails, destruction, or when the hull is used for another starship.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the complexity and craftsmanship required to complete this astronomical artifact.",
    "priceOriginal": 1500000,
    "priceReviewedAt": "2026-07-22T19:25:14.659361+00:00",
    "aiReviewedAt": "2026-07-22T19:25:14.659361+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_astral_vessel_plans": {
    "id": "eiwass_astral_vessel_plans",
    "name": "Eiwass Astral Vessel Blueprints",
    "description": "The Eiwass Astral Vessel Blueprints are a set of meticulously crafted plans that allow for the construction of a starship capable of navigating the Astral Plane without Eiwass's direct guidance. These blueprints, made from enchanted parchment and adorned with constellations, are said to have been passed down through generations of astronomers. Crafting this vessel requires not only immense engineering prowess but also an understanding of astral physics that few mortals possess.",
    "price": 21000,
    "icon": "🗺️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Astral Navigation",
      "Special Construction Requirements"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Holographic Schematics",
    "levelRequirement": 16,
    "factionBonus": {
      "engineering": 60
    },
    "effectDetails": [
      {
        "title": "Astral Navigation",
        "rules": "This effect allows the constructed starship to traverse the Astral Plane. The vessel has an AC of 20 and a speed that varies with the pilot's skill, reaching up to 150 miles per hour in the Astral Plane. It requires a successful Engineering check (DC 25) each day to maintain its integrity while traveling through the plane."
      },
      {
        "title": "Special Construction Requirements",
        "rules": "Constructing this vessel costs an additional 1 million gp and takes two years to complete, even with the help of Eiwass. The construction must be overseen by a master engineer with at least 20 ranks in Engineering."
      }
    ],
    "levelRequirementReason": "This level requirement ensures that only seasoned adventurers with significant experience can handle the complexities of Astral Plane navigation.",
    "vendorReason": "Eiwass, the master astronomer, is the only one who possesses and can provide these blueprints due to their deep connection with celestial phenomena.",
    "shippingDetail": "The holograms are transmitted directly to the buyer's location via a secure, encrypted link. The schematics must be downloaded within a week of purchase or they will expire and need to be repurchased.",
    "usage": {
      "activation": "Instantaneous activation upon completion of construction; requires daily checks for maintenance.",
      "duration": "Permanent once constructed",
      "endsWhen": "The vessel's integrity fails due to damage or neglect, requiring repair or replacement.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the time and resources required for construction, as well as the unique engineering expertise needed.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-22T04:32:18.105158+00:00",
    "aiReviewedAt": "2026-07-22T04:32:18.105158+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_communication_with_inanimate_objects": {
    "id": "eiwass_communication_with_inanimate_objects",
    "name": "Eiwass Communication with Inanimate Objects",
    "description": "The Eiwass Communication with Inanimate Objects is an enchanted rune-studded collar that whispers secrets to your blade, allowing it to speak in a tongue of clinks and grinds. When worn, your weapon becomes a chattier companion for up to seven days, offering advice that may or may not be sound. The bond formed between you and your steel deepens, making it feel like an extension of yourself, but beware—this newfound kinship can blur the lines between friend and foe.",
    "category": "services",
    "price": 750,
    "icon": "💬",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Weapon Speaks",
      "Advisory Bias"
    ],
    "vendor": "eiwass",
    "shippedBy": "Rune Carving",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weapon Speaks",
        "rules": "While worn by a character of level 1 or higher, this enchanted collar allows an inanimate weapon to communicate verbally for seven days. The weapon can speak once per short rest and offers advice that is correct only half the time. After speaking, it must recharge for 8 hours."
      },
      {
        "title": "Advisory Bias",
        "rules": "The weapon's advice is unreliable, with a 50% chance of being incorrect or misleading. The wearer gains disadvantage on saving throws and ability checks while separated from the weapon by more than 30 feet for longer than one hour."
      }
    ],
    "levelRequirementReason": "Even novice adventurers can benefit from a reliable blade companion, but the enchantment's power is limited to those who have begun their journey.",
    "vendorReason": "Eiwass Rune Speakers specialize in crafting runes that bridge the gap between man and metal, making them the perfect purveyors of this communication charm.",
    "shippingDetail": "The collar is couriered via a swift rune-carver who ensures its timely delivery to your doorstep.",
    "usage": {
      "activation": "Passive effect once per short rest while worn by the character.",
      "duration": "Seven days from activation or until separated from the wearer for more than one hour.",
      "endsWhen": "The weapon's advice becomes unreliable, and the bond with it weakens if not used within its duration.",
      "charges": "Unlimited; recharges after eight hours of inactivity."
    },
    "priceReason": "Balanced at a cost of 1000 XP, this charm is priced to reflect its unique utility and limited duration without overshadowing other more powerful items.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T04:32:07.079968+00:00",
    "aiReviewedAt": "2026-07-22T04:32:07.079968+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_cosmic_armor_plating": {
    "id": "eiwass_cosmic_armor_plating",
    "name": "Eiwass Cosmic Armor Plating",
    "description": "The Eiwass Cosmic Armor Plating is a sleek, flexible plating harvested from the remnants of an ancient star vessel that crashed on Eiwass's surface long ago. Crafted from celestial materials, it molds to your body without compromising mobility or strength. This armor not only provides unparalleled protection against radiation and vacuum damage but also offers a subtle luminescence in dark environments, illuminating your path with a soft blue glow.",
    "price": 210000,
    "icon": "⭐",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Radiation Shield",
      "Vacuum Resistance"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Floating Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiation Shield",
        "rules": "Provides immunity to radiation damage. The armor absorbs and nullifies up to 10 points of radiation damage per long rest, preventing any radiation-related debuffs."
      },
      {
        "title": "Vacuum Resistance",
        "rules": "Offers complete protection against vacuum damage. While wearing this armor, you are immune to the effects of a vacuum environment, including suffocation and pressure changes."
      }
    ],
    "levelRequirementReason": "This armor is designed for those who venture into dangerous cosmic environments where radiation and vacuum hazards are common.",
    "vendorReason": "As a former crew member of the star vessel, Eiwass Aastronomer has access to these rare materials and can offer this unique armor.",
    "shippingDetail": "The armor is carefully packed in a floating crate that delivers it directly to your doorstep, ensuring no damage during transit.",
    "usage": {
      "activation": "Passive",
      "duration": "Instantaneous and permanent until removed or destroyed",
      "endsWhen": "Destroyed by fire or extreme heat above 1000 degrees Celsius",
      "charges": "Unlimited"
    },
    "priceReason": "The Eiwass Cosmic Armor Plating is considered a godly rarity, yet it provides essential protection for adventurers facing cosmic dangers.",
    "priceOriginal": 550000,
    "priceReviewedAt": "2026-07-22T04:33:00.906396+00:00",
    "aiReviewedAt": "2026-07-22T04:33:00.906396+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_dimensional_anchor": {
    "id": "eiwass_dimensional_anchor",
    "name": "Eiwass Personal Dimensional Anchor",
    "description": "The Eiwass Personal Dimensional Anchor is a delicate, silver bracelet engraved with intricate runes of protection and stability. Crafted by the celestial astronomer Eiwass, this item weaves a subtle barrier around its wearer, preventing any form of planar shifting or banishment. The anchor's power stems from a unique crystal core that draws on the fabric of the multiverse itself, ensuring no magic can force you beyond your plane without your consent.",
    "price": 21000,
    "icon": "⚓",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Banish and Planar Shift Immunity",
      "Savvy to Planar Magic"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Tungsten Case Express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Banish and Planar Shift Immunity",
        "rules": "The wearer is immune to any spell or effect that would banish them from their plane of existence. Additionally, the wearer gains advantage on saving throws against any planar travel magic."
      },
      {
        "title": "Savvy to Planar Magic",
        "rules": "While wearing this bracelet, the wearer has advantage on all saves and ability checks made in response to planar magic or effects of a similar nature. This effect is active as long as the item is worn."
      }
    ],
    "levelRequirementReason": "The intricate runes and stabilizing crystal core require significant magical mastery, making this item suitable only for high-level spellcasters.",
    "vendorReason": "Eiwass, the renowned celestial astronomer, personally crafts these items to protect travelers from the dangers of planar travel and banishment magic.",
    "shippingDetail": "The bracelet is carefully wrapped in a protective layer of tungsten alloy before being shipped via Tungsten Case Express. This ensures the delicate crystal core remains undamaged during transit.",
    "usage": {
      "activation": "Passive effect while worn",
      "duration": "Permanent, until destroyed or lost",
      "endsWhen": "The item is destroyed or lost",
      "charges": "Unlimited"
    },
    "priceReason": "This bracelet's price reflects its unique enchantment and the high level of magical expertise required to craft it.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-22T04:32:46.388989+00:00",
    "aiReviewedAt": "2026-07-22T04:32:46.388989+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_dimensional_clone": {
    "id": "eiwass_dimensional_clone",
    "name": "Eiwass Dimensional Clone (Astral Echo)",
    "description": "Crafted from the Astral Plane's very essence, Eiwass Dimensional Clone (Astral Echo) allows you to summon a semi-real echo of yourself that can perform simple tasks. This clone is formed through intricate weaving of astral threads and mirrors your essence, though it lacks true strength and resilience. Be wary: while the clone can be sent on missions or used as a decoy, any physical damage dealt to it dissipates 50% into you, making it both perilous and potentially life-saving in dire situations.",
    "price": 21000,
    "icon": "👻",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Summon Astral Echo Clone",
      "Physical Damage Passes Through"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Crystal Matrix",
    "levelRequirement": 13,
    "effectDetails": [
      {
        "title": "Summon Astral Echo Clone",
        "rules": "As an action, you can summon a clone of yourself that lasts for up to one hour. The clone appears in an unoccupied space within 30 feet of you and has half your current hit points. It can perform simple tasks such as delivering messages or opening doors but cannot attack or cast spells."
      },
      {
        "title": "Physical Damage Passes Through",
        "rules": "Any non-magical physical damage dealt to the clone is halved, with 50% of it being transferred directly to you. The clone can only take half damage from magical attacks."
      }
    ],
    "levelRequirementReason": "Summoning an echo of yourself that has such a unique and powerful connection to the Astral Plane demands significant magical prowess, typically attained at least by level 13.",
    "vendorReason": "Eiwass, the master astronomer, specializes in crafting items that bridge dimensions, making Eiwass Dimensional Clone a fitting addition to his inventory.",
    "shippingDetail": "The clone is delivered through a shimmering astral construct, ensuring safe and swift transport from the Astral Plane.",
    "usage": {
      "activation": "Action",
      "duration": "Up to one hour",
      "endsWhen": "The clone dissipates when its duration ends or it takes lethal damage.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with rare astral materials and intricate magic, this item is a moderate investment for those who can afford the luxury of such powerful tools.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-22T04:33:03.352159+00:00",
    "aiReviewedAt": "2026-07-22T04:33:03.352159+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_dimensional_shield": {
    "id": "eiwass_dimensional_shield",
    "name": "Eiwass Personal Dimensional Shield",
    "description": "The Eiwass Personal Dimensional Shield is a small, shimmering device that appears as a compact, iridescent orb. Crafted by the enigmatic Eiwass, this shield warps reality around you, making you half-tangible and impervious to physical harm for brief moments. When activated, it phases you slightly out of the mundane world, granting you resistance to all physical damage for one round every three days. This arcane device also confers a magical advantage on saving throws against spells and effects that would otherwise target your form.",
    "price": 210000,
    "icon": "🛡️",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Phased Resistance",
      "Magical Advantage"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Quantum Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Phased Resistance",
        "rules": "As a reaction, you gain resistance to all physical damage for one round. This effect can be used three times per long rest."
      },
      {
        "title": "Magical Advantage",
        "rules": "You have advantage on saving throws against spells and other magical effects targeting your form or body. This effect is active while the device is in use."
      }
    ],
    "levelRequirementReason": "The Eiwass Personal Dimensional Shield requires no minimum level, as its magic is designed to be accessible yet potent.",
    "vendorReason": "Eiwass, the renowned astronomer and alchemist, has long been known for his mastery of dimensional physics and arcane shields.",
    "shippingDetail": "The Quantum Box ensures safe and swift delivery via quantum entanglement, guaranteeing arrival within a day anywhere in the multiverse.",
    "usage": {
      "activation": "Reaction",
      "duration": "One round",
      "endsWhen": "At the end of your next turn or when you take another reaction action",
      "charges": "3 charges per long rest"
    },
    "priceReason": "The device, though not requiring a high level, is crafted with advanced dimensional technology and rare materials, making it moderately priced.",
    "priceOriginal": 280000,
    "priceReviewedAt": "2026-07-22T04:33:22.510327+00:00",
    "aiReviewedAt": "2026-07-22T04:33:22.510327+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_frost_forge_freezer": {
    "id": "eiwass_frost_forge_freezer",
    "name": "Eiwass Frost Forge Freezer",
    "description": "The Eiwass Frost Forge Freezer is a gleaming steel contraption forged in the heart of Winter Forger territory, its icy core humming with the energy of the frosty peaks. Capable of freezing berry concoctions to an eternal chill, it can hold four servings at once and condenses ambient moisture, making even the driest hands slip into frostbite. The village's most trusted supplier ensures that this freezer remains a steadfast companion for preserving cold recipes.",
    "category": "equipment",
    "price": 210,
    "icon": "🍨",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Instantly freezes ingredients",
      "Condenses moisture"
    ],
    "vendor": "eiwass_village",
    "shippedBy": "Chill Chest Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Freeze",
        "rules": "When activated, the Eiwass Frost Forge Freezer instantly chills any ingredient placed within it to an eternal chill. This effect grants a +1 bonus to the duration of cold recipes for one use per day."
      },
      {
        "title": "Moisture Condensation",
        "rules": "The freezer condenses ambient moisture, effectively reducing humidity in its immediate vicinity by 20% within a 5-foot radius. This effect lasts until the next sunrise and requires no additional action to maintain."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners who need reliable equipment for preserving cold recipes.",
    "vendorReason": "Eiwass Village is renowned for its expertise in crafting durable, frost-resistant tools and supplies.",
    "shippingDetail": "The freezer is shipped using insulated packaging to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Object interaction (requires a free hand)",
      "duration": "Instantaneous; +1 bonus lasts until the next sunrise",
      "endsWhen": "Bonus duration ends at sunset or upon removal from the freezer",
      "charges": "Unlimited, with one daily use of the instant freeze effect"
    },
    "priceReason": "The price reflects its quality craftsmanship and rare components used in its construction.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T04:33:13.174110+00:00",
    "aiReviewedAt": "2026-07-22T04:33:13.174110+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_frozen_berry_ice_recipe": {
    "id": "eiwass_frozen_berry_ice_recipe",
    "name": "Recipe: Eiwass Frozen Berry Ice",
    "description": "The Eiwass Frozen Berry Ice is a refreshing treat of crystalline ice and plump berries, crafted in the frostbitten heart of Winter Treat Makers. This recipe teaches you to freeze fresh berries into icy perfection, providing temporary resistance to fire damage for two hours while soothing your mind from states of fear or fright. The sweet yet sharp bite can lead to a brief moment of brain freeze if consumed too quickly.",
    "price": 210,
    "icon": "🍨",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Freeze Berries",
      "Calm Mind"
    ],
    "vendor": "eiwass_village",
    "shippedBy": "Icy Indulgence Index",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Freeze Berries",
        "rules": "When you eat this ice treat, you gain resistance to fire and heat damage for a duration of two hours. This effect is instantaneous upon consumption."
      },
      {
        "title": "Calm Mind",
        "rules": "You are also granted temporary immunity to the frightened condition until the end of your next turn after consuming this treat. If already suffering from fright, you can remove it as an immediate action."
      }
    ],
    "levelRequirementReason": "This simple yet effective recipe is accessible to all adventurers regardless of level.",
    "vendorReason": "The villagers at Eiwass are known for their expertise in preserving the essence of winter, and this treat is a staple of their offerings.",
    "shippingDetail": "Ships with cold packs to preserve freshness; may arrive partially melted during warmer weather.",
    "usage": {
      "activation": "Eating the treat",
      "duration": "Instantaneous effect, lasts for two hours upon consumption",
      "endsWhen": "Expires at the end of your next turn after consuming or if you are no longer frightened before then",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects the materials and skill required to craft this refreshing treat.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T04:33:15.421662+00:00",
    "aiReviewedAt": "2026-07-22T04:33:15.421662+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_ice_crystal_crown": {
    "id": "eiwass_ice_crystal_crown",
    "name": "Eiwass Ice Crystal Crown",
    "description": "The Eiwass Ice Crystal Crown sparkles with frozen gems, each facet catching cold light and reflecting the chill of winter's breath. Crafted by Eiwass Jewelers from enchanted ice crystals found in the Frostvein mines, it whispers secrets of frosty royalty to those who wear it. The crown not only grants advantage on Charisma (Intimidation) checks within icy environs but also subtly chills nearby beverages, leaving patrons with a tingling sip.",
    "category": "equipment",
    "price": 750,
    "icon": "👑",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Charisma (Intimidation) Advantage in Cold Areas",
      "Chills Nearby Drinks"
    ],
    "vendor": "eiwass_palace",
    "shippedBy": "Frosty Case",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Icey Intimidation",
        "rules": "When wearing the crown, you have advantage on Charisma (Intimidation) checks within cold areas. This effect lasts for the duration of your concentration, up to one minute."
      },
      {
        "title": "Frozen Flavors",
        "rules": "The crown subtly chills drinks consumed within a 10-foot radius, creating a frosty sip that lasts until the drink is consumed or the crown is removed. This effect does not harm consumables but provides a chilling sensation to those who partake."
      }
    ],
    "levelRequirementReason": "This crown is designed for adventurers just starting their journey, allowing them to intimidate and charm in cold environments early on.",
    "vendorReason": "Eiwass Palace, a grand estate of ice and royalty, naturally stocks items that enhance the experience of its guests during the winter months.",
    "shippingDetail": "The crown is shipped in a magically insulated package to ensure it arrives frozen and intact.",
    "usage": {
      "activation": "Passive effect activated by wearing the crown; requires no action.",
      "duration": "Instantaneous for chilling drinks, lasts until consumed or the crown is removed for Charisma (Intimidation) checks.",
      "endsWhen": "Effect ends when the check is completed or the drink is consumed. Chilling effect dissipates immediately if exposed to heat sources.",
      "charges": "Unlimited"
    },
    "priceReason": "The crown's enchantments, crafted by a renowned jewelers and shipped with special care, justify its moderate price in terms of both rarity and utility.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T04:33:33.171215+00:00",
    "aiReviewedAt": "2026-07-22T04:33:33.171215+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_ice_sculpture_premium": {
    "id": "eiwass_ice_sculpture_premium",
    "name": "Eiwass Ice Sculpture (Premium)",
    "description": "This majestic ice sculpture crafted by Eiwass Carvers is a sight to behold. Its intricate design chills beverages, quenching thirst and cooling spirits with its frosty presence. When thrown at foes within 10 feet, it releases a chilling gust that deals 1d6 cold damage and slows them (DEX save DC 12). In addition, this sculpture enhances the drinker's resilience to heat, granting +1 to saving throws against fire-based effects.",
    "price": 750,
    "icon": "🧊",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Throw: Cold Damage & Slow",
      "Enhanced Beverage Resilience"
    ],
    "vendor": "eiwass_frozen_lake",
    "shippedBy": "Frosty Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Chilling Gust",
        "rules": "When thrown at a target within 10 feet, the Eiwass Ice Sculpture releases a gust of cold air that deals 1d6 cold damage and imposes the Slowed condition on the target (DEX save DC 12). This effect lasts until the end of the target's next turn or until it moves. The sculpture can be thrown once per short rest."
      },
      {
        "title": "Enhanced Beverage Resilience",
        "rules": "While in contact with a beverage, the Eiwass Ice Sculpture provides +1 to any saving throw made by the drinker against effects that would cause heat damage. This bonus lasts for 1 hour or until the sculpture melts."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners and adventurers who want to add a touch of frosty elegance without requiring high-level proficiency.",
    "vendorReason": "Eiwass Carvers are renowned artisans specializing in ice sculptures, making their 'Premium' offerings the most sought-after among beverage enthusiasts and adventurers alike.",
    "shippingDetail": "Delivered within 24 hours by Frosty Couriers, ensuring your ice sculpture arrives fresh and intact. Special handling required for temperature-sensitive items.",
    "usage": {
      "activation": "Thrown as a bonus action",
      "duration": "Instantaneous with duration effects lasting until the end of the target's next turn or until moved",
      "endsWhen": "The target moves, ends of turns, or after one use per short rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the high craftsmanship and material costs involved in creating a premium ice sculpture that can both chill drinks and inflict cold damage.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T04:33:30.595136+00:00",
    "aiReviewedAt": "2026-07-22T04:33:30.595136+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_planar_key_charm": {
    "id": "eiwass_planar_key_charm",
    "name": "Eiwass Planar Key Charm (Minor)",
    "description": "A delicate tuning fork, its resonant prongs crafted from the rarest alloys of the Astral Sea and etched with arcane runes. It hums a melodic note when an interplanar rift draws near, and its vibrations grow louder as the rift's potency increases. The Eiwass Planar Key Charm allows its bearer to sense not just the presence but the very nature of the plane from which or to which it leads. Eiwass, the legendary astronomer, crafted this charm from materials found in the farthest reaches of the cosmos and imbued it with ancient knowledge.",
    "price": 4600,
    "icon": "🔑",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Interplanar Rift Detection",
      "Plane-Specific Sensing"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Brass Casing",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Interplanar Rift Detection",
        "rules": "The charm vibrates strongly within 60 feet of an active interplanar rift. The vibration's intensity increases as the rift grows more potent, providing a constant reminder that otherworldly forces are near."
      },
      {
        "title": "Plane-Specific Sensing",
        "rules": "By focusing on the charm's runes, the user can sense the specific plane of origin or destination of an active portal. This effect requires no action and lasts until the user chooses to discontinue it."
      }
    ],
    "levelRequirementReason": "The charm is crafted with basic magic but requires a keen mind to interpret its resonances.",
    "vendorReason": "Eiwass, the astronomer, is renowned for his deep knowledge of interplanar connections and often sells such items to travelers and explorers.",
    "shippingDetail": "Ships securely in a custom brass casing to protect against damage during transit.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous, lasts until the user chooses to discontinue it.",
      "endsWhen": "Discontinued by the user or destroyed if exposed to extreme conditions.",
      "charges": "Unlimited"
    },
    "priceReason": "The charm is crafted from rare materials and requires specialized knowledge, making it a valuable tool for explorers.",
    "priceOriginal": 19000,
    "priceReviewedAt": "2026-07-22T04:33:44.392947+00:00",
    "aiReviewedAt": "2026-07-22T04:33:44.392947+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_planar_portal_kit": {
    "id": "eiwass_planar_portal_kit",
    "name": "Eiwass Portal Kit (Temporary)",
    "description": "The Eiwass Portal Kit is a portable assembly of iridescent crystals and polished mirrors, each faceted to catch and channel starlight from distant realms. This kit, crafted by Eiwass Astronomer, opens a temporary, unstable planar portal that allows for passage between planes. The exit location is slightly unpredictable, veering up to 100 miles away from the intended target, making it an invaluable tool for those who dare to traverse the multiverse with precision and risk.",
    "price": 220000,
    "icon": "🚪",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Unstable Planar Tear",
      "Variable Exit Location"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Traveling Containment Unit",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Unstable Planar Tear",
        "rules": "Activates as an action, creating a temporary portal to a known plane. The portal lasts for up to 1 hour (60 minutes). The caster must succeed on a DC 25 Concentration saving throw at the start of each of their turns or lose control over the portal, collapsing it immediately."
      },
      {
        "title": "Variable Exit Location",
        "rules": "The exit point of the portal is slightly randomized. It veers up to 100 miles away from the intended target. This effect does not apply if the caster specifies a location within their own plane as the destination."
      }
    ],
    "levelRequirementReason": "This kit requires significant magical knowledge and experience to operate safely.",
    "vendorReason": "Eiwass, a renowned astronomer, specializes in crafting tools that bridge the gap between planes of existence.",
    "shippingDetail": "The kit is shipped via a specialized containment unit to prevent any accidental activation during transit.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "Up to 1 hour (60 minutes).",
      "endsWhen": "Loses concentration, or the portal collapses due to instability.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The kit is priced at 1000 XP because it combines advanced magical components with expert craftsmanship.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-22T04:34:06.006159+00:00",
    "aiReviewedAt": "2026-07-22T04:34:06.006159+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_portal_to_the_past": {
    "id": "eiwass_portal_to_the_past",
    "name": "Eiwass Portal to the Past (Observation Only)",
    "description": "The Eiwass Portal to the Past, a shimmering rift of light and shadow, allows you to observe one singular moment in history. It is crafted from ancient obsidian and enchanted with the essence of forgotten stars. This portal can only reveal events exactly as they transpired, frozen in time for fleeting minutes. Use it wisely, for once activated, the observation lasts but a minute before the rift closes, leaving no trace or echo behind.",
    "price": 220000,
    "icon": "🕰️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "View one singular moment in history",
      "Portal lasts 1 minute; observing entity cannot interact"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Massive Array",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Observation",
        "rules": "Activates as a bonus action. The portal opens, displaying a single 24-hour period from the past. You can observe events exactly as they occurred during this time but are unable to interact with them or affect outcomes."
      },
      {
        "title": "Limited Duration",
        "rules": "The portal remains active for only 1 minute before closing. The observation ends if you stop concentrating, upon your death, or if the item is destroyed."
      }
    ],
    "levelRequirementReason": "Only those with a solid grasp of history and time magic are capable of safely using this artifact.",
    "vendorReason": "Eiwass, the master astronomer, is renowned for his knowledge of ancient times and the stars, making him the ideal vendor for such an item.",
    "shippingDetail": "Ships via a specialized time-stabilized container to prevent temporal disturbances during transit.",
    "usage": {
      "activation": "Bonus action to activate the portal; concentration required while it is open.",
      "duration": "1 minute per activation, ends when concentration is lost or upon destruction.",
      "endsWhen": "You stop concentrating, upon your death, or if the item is destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects its rarity and the expertise needed to safely use it.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-22T04:33:57.892738+00:00",
    "aiReviewedAt": "2026-07-22T04:33:57.892738+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_stable_teleporter": {
    "id": "eiwass_stable_teleporter",
    "name": "Eiwass Stable Planar Teleporter",
    "description": "The Eiwass Stable Planar Teleporter is a crystalline, obelisk-like structure that stands sentinel in your courtyard. Its surface gleams with an ever-present aurora, pulsing softly as it maintains its magical connection between two fixed locations across planes. This portal operates without the need for ongoing power, allowing you to traverse vast distances instantly and securely. Installation requires a month of focused astronomical alignment by Eiwass himself, ensuring its stability and reliability.",
    "price": 220000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Stable Planar Portal",
      "Permanent Teleportation"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Massive Crystalline Structure",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stable Planar Portal",
        "rules": "The Eiwass Stable Planar Teleporter creates a permanent, controlled portal linking two fixed locations across planes. The portal requires no ongoing power and is secure against external tampering or magical interference."
      },
      {
        "title": "Permanent Teleportation",
        "rules": "Travelers can traverse the distance between the two connected points instantly via the teleporter. This effect does not require a saving throw, has an instantaneous duration, and recharges after 24 hours of inactivity."
      }
    ],
    "levelRequirementReason": "Anyone capable of paying for this godly item can use it.",
    "vendorReason": "Eiwass himself, the master astronomer and creator of this teleporter, is the only one who can ensure its proper installation and maintenance.",
    "shippingDetail": "The structure is delivered by a colossal crystalline entity that requires several days to arrive at the destination due to its immense size and weight.",
    "usage": {
      "activation": "Instantaneous use with no action required",
      "duration": "Instantaneous travel between connected points",
      "endsWhen": "Use of the teleporter ends the effect; recharges after 24 hours of inactivity",
      "charges": "Unlimited, but requires a day of rest before full functionality resumes"
    },
    "priceReason": "This item is priced at 1000 XP to balance its powerful, permanent utility without overshadowing other items.",
    "priceOriginal": 950000,
    "priceReviewedAt": "2026-07-22T04:34:28.869643+00:00",
    "aiReviewedAt": "2026-07-22T04:34:28.869643+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_star_charts": {
    "id": "eiwass_star_charts",
    "name": "Eiwass Navigational Star Charts",
    "description": "The Eiwass Navigational Star Charts are a set of meticulously crafted maps that chart ancient, safe passage between the planes of existence. Crafted by Eiwass, a master astronomer who studied the skies for centuries, these charts glow faintly with arcane light and whisper the secrets of the cosmos to those who can interpret them. Using these charts ensures you travel along the least-magicked routes, reducing your journey's time and ensuring safe passage through the planes.",
    "price": 21000,
    "icon": "🔭",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Planar Travel Advantage",
      "Reduced Travel Time"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Celestial Map",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Planar Travel Advantage",
        "rules": "When traveling between planes using standard methods, you have advantage on all ability checks. This effect lasts until the end of your turn."
      },
      {
        "title": "Reduced Travel Time",
        "rules": "You reduce your travel time between planes by 25%, and this benefit persists for the duration of your journey. This effect ends when you complete your planar travel."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible early in a campaign, allowing players to benefit from its effects without requiring high-level proficiency.",
    "vendorReason": "Eiwass personally crafted these charts and only sells them through his observatory.",
    "shippingDetail": "The maps are delivered via a celestial courier, ensuring they arrive intact and with minimal delay.",
    "usage": {
      "activation": "Passive effect upon use during planar travel.",
      "duration": "Until the end of your turn or journey, whichever comes first.",
      "endsWhen": "At the conclusion of your planar travel or when you complete an action that ends it.",
      "charges": "Unlimited"
    },
    "priceReason": "This item's price is balanced to reflect its utility in reducing travel time and providing advantage on checks without being overpowered.",
    "priceOriginal": 95000,
    "priceReviewedAt": "2026-07-22T04:34:11.031107+00:00",
    "aiReviewedAt": "2026-07-22T04:34:11.031107+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_starlight_telescope": {
    "id": "eiwass_starlight_telescope",
    "name": "Eiwass Starlight Telescope",
    "description": "The Eiwass Starlight Telescope reveals the celestial tapestry as it appeared centuries ago, unveiling forgotten pathways and ancient constellations that guide intrepid explorers across the void. Its lens captures not just light but the whispers of history, allowing voyagers to glimpse lost worlds that have since faded from memory. Crafted by Eiwass, the telescope is a marvel of astronomical alchemy, fusing brass and mystic metals to bring long-lost stars into focus.",
    "price": 21000,
    "icon": "🔭",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Celestial Glimpse",
      "Divine Insight"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Brass Tripod",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Celestial Glimpse",
        "rules": "The user can activate the telescope as an action to reveal obscured or hidden celestial landmarks within a 100-mile radius. This effect lasts for 1 minute and has no save DC required. The telescope can be used once per long rest."
      },
      {
        "title": "Divine Insight",
        "rules": "By spending one charge, the user gains the ability to cast Divination spells without any material components. This effect is usable once per day. The charges are restored after a short rest."
      }
    ],
    "levelRequirementReason": "The telescope's advanced mechanics and intricate craftsmanship demand a proficient user.",
    "vendorReason": "Eiwass, the renowned astronomer, has perfected this tool of celestial lore.",
    "shippingDetail": "The telescope is carefully packed in brass-lined crates to ensure safe delivery through the stars and back down to earth.",
    "usage": {
      "activation": "Action or Reaction (to activate Celestial Glimpse) / Special (to cast Divination)",
      "duration": "1 minute for Celestial Glimpse; Instantaneous for casting a Divination spell",
      "endsWhen": "The effect ends when the duration expires or the telescope is destroyed.",
      "charges": "Recharges after a short rest"
    },
    "priceReason": "Balanced as a legendary item, this telescope offers significant utility and lore at an adjusted price.",
    "priceOriginal": 88000,
    "priceReviewedAt": "2026-07-22T04:34:40.233680+00:00",
    "aiReviewedAt": "2026-07-22T04:34:40.233680+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_stellar_map_upgrade": {
    "id": "eiwass_stellar_map_upgrade",
    "name": "Eiwass Stellar Map Upgrade (Future Sight)",
    "description": "The Eiwass Stellar Map Upgrade, a celestial artifact of exquisite craftsmanship, allows you to harness the natural alignment of stars for cosmic luck and impossible travel. Crafted by Eiwass, this map predicts favorable star movements that grant one free non-combat reroll per week, ensuring your most critical dice rolls are aligned with fortune. With its guidance, you can traverse distances deemed impossible through traditional means, opening new pathways across the cosmos.",
    "price": 220000,
    "icon": "⭐",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Cosmic Luck Reroll",
      "Impossible Travel"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Celestial Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cosmic Luck Reroll",
        "rules": "At any time during a week, you may use this upgrade to reroll one d20 roll used in a non-combat situation. The map’s ancient alignment with the stars ensures that your new roll is based on favorable star movements."
      },
      {
        "title": "Impossible Travel",
        "rules": "You can travel along routes previously thought impossible, such as across interstellar voids or through celestial anomalies. This requires a successful DC 18 Wisdom (Perception) check to navigate the route safely."
      }
    ],
    "levelRequirementReason": "This upgrade is accessible early on but powerful enough that only seasoned adventurers can afford and wield it effectively.",
    "vendorReason": "Eiwass, the master astronomer, has developed this map to aid those who seek to understand and harness the cosmos.",
    "shippingDetail": "The Celestial Courier ensures safe delivery through its mastery of interstellar travel methods.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (reroll), Per week (travel)",
      "endsWhen": "Exhausted after one use per week or upon the next full dawn.",
      "charges": "Unlimited, recharges daily at dawn."
    },
    "priceReason": "This upgrade is priced to reflect its rarity and utility, providing a significant advantage without being overpowered.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-22T04:34:34.425642+00:00",
    "aiReviewedAt": "2026-07-22T04:34:34.425642+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_teleport_network_node": {
    "id": "eiwass_teleport_network_node",
    "name": "Eiwass Personal Teleport Network Node",
    "description": "The Eiwass Personal Teleport Network Node is a sleek, glowing pad embedded in your home's floor. Crafted by the astronomer Eiwass, it emits a soft hum when active and can instantly transport you to any other node within your network. The node requires an external power source of 50,000 gp annually; without this, the pad remains dormant, awaiting the next influx of energy. Once activated, it is a seamless gateway, linking you to any destination you've previously connected.",
    "price": 220000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Instant Teleportation",
      "Linked Node Creation"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Massive Installation",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Teleportation",
        "rules": "You can activate the node as an action. Instantly teleport yourself to any other Eiwass Personal Teleport Network Node you own. You cannot teleport through walls, floors, or ceilings; you must be able to see and reach the destination pad."
      },
      {
        "title": "Linked Node Creation",
        "rules": "At 1st level, this node can establish a new personal teleportation link with another Eiwass Personal Teleport Network Node. You cannot create more than one additional link per year and must own both nodes for the connection to activate."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners, providing a stable foundation for personal teleportation.",
    "vendorReason": "Eiwass personally crafted these nodes and ensures their compatibility with his network.",
    "shippingDetail": "The node is shipped via special delivery, requiring a day for installation by the company's engineers.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Teleportation is complete or interrupted by an external force",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the node's compact size, ease of use, and the ongoing maintenance cost.",
    "priceOriginal": 1200000,
    "priceReviewedAt": "2026-07-22T04:34:36.615037+00:00",
    "aiReviewedAt": "2026-07-22T04:34:36.615037+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_void_goggles": {
    "id": "eiwass_void_goggles",
    "name": "Eiwass Void Goggles",
    "description": "Eiwass Void Goggles are crafted from obsidian smoked in the void, granting the wearer safe passage through non-Euclidean spaces without succumbing to madness or disorientation. These goggles allow for precise navigation within the Astral Plane, aiding in both exploration and combat. The goggle's smoky surface reflects the eerie light of the void, making them a striking yet practical choice for any intrepid explorer venturing into the astral realms.",
    "price": 230000,
    "icon": "🕶️",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Safe Travel Through Non-Euclidean Spaces",
      "Astral Navigation"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Black Velvet",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Safe Travel",
        "rules": "The wearer gains immunity to madness and disorientation caused by dimensional travel or void exposure. This effect is active as long as the goggles are worn and does not require any action to activate."
      },
      {
        "title": "Astral Navigation",
        "rules": "While wearing these goggles, the user can navigate the Astral Plane with perfect accuracy, as if they had spent a full day studying its intricacies. This effect is active while the wearer remains on the Astral Plane and does not require any action to activate."
      }
    ],
    "levelRequirementReason": "Wearing these goggles requires a high level of magical prowess to harness their power without risking one's sanity.",
    "vendorReason": "Eiwass, the master astronomer, is renowned for crafting items that allow safe travel through the most dangerous and unfamiliar realms.",
    "shippingDetail": "The goggles are carefully packed in a velvet-lined box to protect them during transit, ensuring they arrive in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required as long as the goggles are worn.",
      "duration": "Active while the wearer is on the Astral Plane or exposed to non-Euclidean spaces.",
      "endsWhen": "The effect ends when the wearer leaves the Astral Plane or is removed from a non-Euclidean space.",
      "charges": "Unlimited, as long as the goggles remain intact."
    },
    "priceReason": "The goggles are priced at 1000 XP due to their unique crafting process and the specialized knowledge required to safely use them.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-22T19:25:58.865505+00:00",
    "aiReviewedAt": "2026-07-22T19:25:58.865505+00:00",
    "aiReviewVersion": 1
  },
  "eiwass_void_shroud": {
    "id": "eiwass_void_shroud",
    "name": "Eiwass Void Shroud",
    "description": "The Eiwass Void Shroud is a cloak of shadowy fabric, woven between dimensions and imbued with the essence of the void. It renders its wearer invisible to all divination magic, including scrying and other planes' effects, making it an invaluable tool for spies and adventurers seeking secrets. Made by Eiwass, this relic is said to have been crafted from threads of darkness itself, granting it unparalleled resistance to extraplanar influences.",
    "price": 1700000,
    "icon": "⚫",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Invisible to Divination",
      "Resistance to Extraplanar Magic"
    ],
    "vendor": "eiwass_astronomer",
    "shippedBy": "Dimensional Box",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Invisibility to Divination",
        "rules": "The wearer gains advantage on saving throws against effects that would reveal their location or form through divination magic. This effect is active as long as the cloak is worn and not destroyed."
      },
      {
        "title": "Resistance to Extraplanar Magic",
        "rules": "While wearing the Eiwass Void Shroud, the wearer has resistance to all damage from extraplanar sources. This effect persists for 1 hour upon activation, after which it must recharge for 24 hours."
      }
    ],
    "levelRequirementReason": "The cloak's power requires a high level of arcane knowledge and discipline to wield effectively.",
    "vendorReason": "Eiwass, the maker of this relic, is known for their expertise in crafting items that bridge the gap between worlds.",
    "shippingDetail": "Ships via a specialized Dimensional Box, ensuring safe transport through otherworldly realms without risk of damage or interference.",
    "usage": {
      "activation": "Activates as an action. Must be worn for the effects to activate.",
      "duration": "1 hour per use",
      "endsWhen": "The duration ends after one hour or if removed from the wearer.",
      "charges": "One use per day, recharging at dawn."
    },
    "priceReason": "Crafted by Eiwass and made of shadow threads from between dimensions, this cloak is a godly rarity and thus priced beyond most adventurers' means.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-22T04:35:15.967150+00:00",
    "aiReviewedAt": "2026-07-22T04:35:15.967150+00:00",
    "aiReviewVersion": 1
  },
  "elder_scrolls_dragon_shout": {
    "id": "elder_scrolls_dragon_shout",
    "name": "Dragon Shout Scroll",
    "description": "A tattered scroll embossed with ancient dragon scales and inked in a forgotten script. This relic is said to have been written by an elven mage who sought to harness the power of the draconic voice. Once per day, upon reciting it, you can unleash a powerful shout that pushes creatures within 30 feet back 10 feet with 3d6 force damage. The scroll also grants you the ability to speak in ancient tongue, allowing you to understand and cast any dragon language spell, but only when you know its verbal components.",
    "category": "curiosities",
    "price": 4600,
    "icon": "📜",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Dragon's Roar",
      "Ancient Tongue"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Swift Feather Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dragon's Roar",
        "rules": "When you activate the scroll and speak the shout, each creature within 30 feet must succeed on a DC 15 Dexterity saving throw or be pushed up to 10 feet away from you. On a successful save, they are knocked prone."
      },
      {
        "title": "Ancient Tongue",
        "rules": "You can understand and cast any dragon language spell as long as you know its verbal components, but this effect lasts only until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This scroll is designed for beginning adventurers to harness the power of ancient magic.",
    "vendorReason": "The observatory frequently receives rare and ancient artifacts from its scholars exploring distant realms.",
    "shippingDetail": "Delivered within one week, with a courier who ensures the safe arrival of all scrolls.",
    "usage": {
      "activation": "As an action",
      "duration": "Instantaneous for Dragon's Roar; until the end of your next turn for Ancient Tongue",
      "endsWhen": "The effect ends when you finish a short or long rest, or if you activate it again",
      "charges": "Unlimited uses"
    },
    "priceReason": "This scroll is priced at 1000 XP, offering an ancient and powerful tool for beginning adventurers.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-22T04:34:57.046813+00:00",
    "aiReviewedAt": "2026-07-22T04:34:57.046813+00:00",
    "aiReviewVersion": 1
  },
  "eldritch_tome_of_forbidden_knowledge": {
    "id": "eldritch_tome_of_forbidden_knowledge",
    "name": "Eldritch Tome of Forbidden Knowledge (Arcane)",
    "description": "The Eldritch Tome of Forbidden Knowledge, a leather-bound volume adorned with arcane sigils and written in an ancient tongue, whispers secrets that bend reality itself. Its pages are said to have been inscribed by elder gods, making it both a tool of unparalleled power and an instrument of madness for those who dare to delve into its forbidden lore. Reading even one spell requires a successful Wisdom saving throw or risk descending into permanent madness.",
    "price": 230000,
    "icon": "📖",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Unlock 5 new eldritch spells (level 5+)",
      "Reading spells requires a Wisdom save"
    ],
    "vendor": "forgotten_library",
    "shippedBy": "Dimensional Bind",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Unlocking Spells",
        "rules": "At the start of each long rest, you can unlock one new spell from the tome. The spell must be at least 5th level and an eldritch origin."
      },
      {
        "title": "Madness Check",
        "rules": "When you read a spell from the tome, you must make a DC 18 Wisdom saving throw or suffer permanent madness. This effect cannot be resisted by any means other than successfully saving against it."
      }
    ],
    "levelRequirementReason": "Only those of great power and experience can safely handle such dangerous knowledge.",
    "vendorReason": "The library's collection includes ancient tomes that have been lost or forgotten, making it the perfect place for this forbidden volume.",
    "shippingDetail": "Due to its volatile nature, the tome must be shipped via Dimensional Bind, which ensures safe and secure delivery through interdimensional means.",
    "usage": {
      "activation": "At the start of each long rest, you can unlock a new spell.",
      "duration": "Instantaneous",
      "endsWhen": "The book is destroyed or its spells are exhausted.",
      "charges": "Unlimited"
    },
    "priceReason": "This item's rarity and unique properties justify its price, as it provides unparalleled magical power at the cost of potential madness.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-22T04:35:05.722913+00:00",
    "aiReviewedAt": "2026-07-22T04:35:05.722913+00:00",
    "aiReviewVersion": 1
  },
  "eldritch_truth_serum": {
    "id": "eldritch_truth_serum",
    "name": "Eldritch Truth Serum (Mind Flayer Extract)",
    "description": "The vial glows faintly, its contents a swirling mix of cerebral fluid and arcane energies from a distant Mind Flayer colony. When uncorked, it forces the target to answer three questions truthfully, each answer revealing deep secrets. The serum's potency is such that it leaves behind a lingering psychic echo, causing 2d10 points of psychic damage per query and granting the user advantage on Insight checks against the target for one hour.",
    "price": 4600,
    "icon": "🧪",
    "stock": 8,
    "rarity": "epic",
    "effects": [
      "Forces truthful answers to three questions",
      "Deals 2d10 psychic damage per question"
    ],
    "vendor": "underdark_trader",
    "shippedBy": "Darkling Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Truthful Revelations",
        "rules": "When activated, this vial compels the target to answer up to three questions truthfully. The target must succeed on a DC 25 Wisdom saving throw or be unable to lie during the effect's duration. This action requires an action from the user."
      },
      {
        "title": "Psychic Erosion",
        "rules": "Each question answered deals 2d10 points of psychic damage to the target and grants the user advantage on Insight checks against that target for one hour following the use of the vial. The duration ends if the target successfully saves or if used beyond its intended effect."
      }
    ],
    "levelRequirementReason": "Only those with a solid understanding of magic can safely handle and wield such potent eldritch forces.",
    "vendorReason": "The Underdark Trader has exclusive access to rare artifacts from the depths, including this powerful vial.",
    "shippingDetail": "Ships under cover of night and with strict secrecy to avoid unwanted attention.",
    "usage": {
      "activation": "Requires an action to uncork and use on a target.",
      "duration": "One hour or until the effect ends (target saves successfully).",
      "endsWhen": "The target successfully makes a DC 25 Wisdom saving throw or when used beyond three questions.",
      "charges": "Unlimited, but limited by the number of vials available."
    },
    "priceReason": "Balanced to be within reach for mid-level adventurers who need a powerful tool against cunning foes.",
    "priceOriginal": 285000,
    "priceReviewedAt": "2026-07-22T04:35:39.913781+00:00",
    "aiReviewedAt": "2026-07-22T04:35:39.913781+00:00",
    "aiReviewVersion": 1
  },
  "elemental_fusion_core": {
    "id": "elemental_fusion_core",
    "name": "Elemental Fusion Core (Power Source)",
    "description": "The Elemental Fusion Core, a glowing fusion of fire, water, earth, and air encased in obsidian, powers elemental artifacts with an unyielding force that defies the natural world's limits. Crafted by Primordial Binders through ancient rituals, this core ensures that once installed, it provides an endless supply of elemental energy for weapons or devices. The core hums with a primal essence that seems to draw power directly from the heart of the elements themselves.",
    "price": 21000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Endless Elemental Power",
      "Installation Ritual Required"
    ],
    "vendor": "elemental_sanctum",
    "shippedBy": "Spirit Conduit",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Endless Elemental Power",
        "rules": "Once installed in an artifact, the Elemental Fusion Core provides an endless supply of elemental energy. The core must be installed via a 4-hour ritual performed by a Primordial Binder or someone with equivalent proficiency. Failure results in the destruction of the core and the loss of any potential power source."
      },
      {
        "title": "Installation Ritual Required",
        "rules": "The installation requires an elaborate ceremony that takes place over four hours, during which the wielder must be present to complete the ritual successfully. After installation, the core can only be reinstalled or removed by a Primordial Binder with a successful DC 25 Wisdom (Arcana) check."
      }
    ],
    "levelRequirementReason": "Only Artifacts of significant power and those who have proven their worth through extensive experience are capable of handling the Elemental Fusion Core's raw elemental force.",
    "vendorReason": "The Elemental Sanctum is the only place where such a powerful and ancient artifact can be crafted, as it houses the knowledge and tools necessary for binding the elements into one core.",
    "shippingDetail": "Delivery via Spirit Conduit ensures that the fragile and potent Elemental Fusion Core arrives safely at its destination without any corruption or damage.",
    "usage": {
      "activation": "Active once installed in an artifact, providing a constant supply of elemental power for indefinite use.",
      "duration": "Indefinite until removed by a Primordial Binder",
      "endsWhen": "Removal by a Primordial Binder or destruction of the core itself",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's rarity, the complexity of its creation, and the significant risk involved in installing such a powerful artifact.",
    "priceOriginal": 510000,
    "priceReviewedAt": "2026-07-22T19:25:54.166216+00:00",
    "aiReviewedAt": "2026-07-22T19:25:54.166216+00:00",
    "aiReviewVersion": 1
  },
  "elemental_golem_blueprint": {
    "id": "elemental_golem_blueprint",
    "name": "Elemental Golem Blueprint (Construction)",
    "description": "The Elemental Golem Blueprint is a meticulously crafted scroll imbued with the essence of four elemental types: earth, air, fire, and water. It allows you to construct a guardian golem tailored to your needs in just one month. The golem's element can be chosen at the time of creation, offering protection from any environmental hazard or threat aligned with that element. This scroll is crafted by Golem Architects, a guild renowned for their unparalleled expertise in golem construction and lore.",
    "price": 1800000,
    "icon": "📐",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Choose Elemental Type",
      "Customizable Guardian"
    ],
    "vendor": "construct_yard",
    "shippedBy": "Courier of Elements",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Elemental Choice",
        "rules": "When you activate the scroll, choose one of the four elements: earth, air, fire, or water. The golem created is a CR 8 guardian golem with an AC of 19 and hit points equal to 360 + your level (minimum 450). It has a special attack based on its chosen element."
      },
      {
        "title": "Customizable Guardian",
        "rules": "The golem is fully customizable. You can assign it up to three features from the Golem Architects' Codex, such as fire breath or stone skin, at the time of construction for an additional 10% cost."
      }
    ],
    "levelRequirementReason": "Requires a high level to ensure you have the knowledge and resources to handle a powerful golem guardian.",
    "vendorReason": "Construct Yard specializes in golems and other constructs, making it the ideal vendor for this scroll.",
    "shippingDetail": "The Courier of Elements delivers the Elemental Golem Blueprint with a one-week delivery guarantee, ensuring you have enough time to complete your construction within the month's timeframe.",
    "usage": {
      "activation": "Activate on the first day of any given month by spending the required resources and time.",
      "duration": "One Month",
      "endsWhen": "The golem guardian is built or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Reflects the cost of materials, labor, and the expertise required to create a powerful golem guardian.",
    "priceOriginal": 530000,
    "priceReviewedAt": "2026-07-22T04:35:29.970924+00:00",
    "aiReviewedAt": "2026-07-22T04:35:29.970924+00:00",
    "aiReviewVersion": 1
  },
  "elemental_plane_conduit": {
    "id": "elemental_plane_conduit",
    "name": "Elemental Plane Conduit (Minor)",
    "description": "The Elemental Plane Conduit stands as a shimmering, crystalline structure that channels raw elemental power from the chaotic planes. Crafted by the Elemental Conclave, it radiates an eerie glow and is said to have been forged in the heart of a volcano. Each day, this conduit generates one hundred elemental gems, their types shifting unpredictably with the capricious whims of nature itself. However, its proximity attracts hostile elemental entities every week, drawing unwanted attention from creatures seeking to harness or destroy it.",
    "price": 230000,
    "icon": "💠",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Daily Elemental Gem Generation",
      "Weekly Attraction of Hostile Elementals"
    ],
    "vendor": "elemental_union",
    "shippedBy": "Living Tsunami",
    "levelRequirement": 19,
    "factionBonus": {
      "elements": 200
    },
    "effectDetails": [
      {
        "title": "Daily Elemental Gem Generation",
        "rules": "The conduit generates one hundred elemental gems each day. The type and quality of these gems are random, but they always include a mix of earth, fire, water, air, and energy elements. This effect is active continuously."
      },
      {
        "title": "Weekly Attraction of Hostile Elementals",
        "rules": "Once per week, the conduit attracts hostile elemental entities to its location. These beings seek to exploit or destroy it for their own ends. The attraction lasts until the end of the next weekly cycle and can be ended by successfully defending against a challenge check with a DC equal to 15 + the user's level."
      }
    ],
    "levelRequirementReason": "This conduit requires significant power to contain its volatile elemental energies.",
    "vendorReason": "The Elemental Union, with their extensive connections within the elemental planes, can procure and sell such a powerful artifact.",
    "shippingDetail": "Ships via a Living Tsunami courier, ensuring safe transport but subject to unpredictable weather delays.",
    "usage": {
      "activation": "Instantaneous activation upon creation; continuous effects thereafter.",
      "duration": "Continuous and permanent once activated.",
      "endsWhen": "Destroyed by elemental entities or through successful challenge checks.",
      "charges": "Unlimited, recharged weekly."
    },
    "priceReason": "The item's rarity and unique properties justify its value at 1000 XP.",
    "priceOriginal": 1225000,
    "priceReviewedAt": "2026-07-22T04:35:58.559170+00:00",
    "aiReviewedAt": "2026-07-22T04:35:58.559170+00:00",
    "aiReviewVersion": 1
  },
  "elemental_storm_summoner": {
    "id": "elemental_storm_summoner",
    "name": "Elemental Storm Summoner (Spell)",
    "description": "This ornate rod glows with a tempestuous aura, its surface etched with runes that whisper of ancient storms. When activated, it summons a devastating elemental storm within a five-mile radius, capable of leveling buildings and unleashing winds that can tear apart anything in its path. The rod is said to have been crafted by the Tempest Mages during their zenith, each summoning draining their power until none was left but this one relic.",
    "price": 21000,
    "icon": "🌪️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Summons Elemental Storm",
      "Limited Uses"
    ],
    "vendor": "storm_tower",
    "shippedBy": "Lightning Bolt Express",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Summons Elemental Storm",
        "rules": "As an action, the wielder calls forth a tempestuous storm within a five-mile radius. The storm lasts for one hour and deals 6d8 thunder damage to all creatures in the area of effect. This effect can be used once per lunar cycle."
      },
      {
        "title": "Limited Uses",
        "rules": "The rod has only three uses before it must be recharged by a successful DC 25 ritual performed over the course of one week at a temple dedicated to storms."
      }
    ],
    "levelRequirementReason": "Only those with the strength and knowledge of a high-level spellcaster can properly wield such an artifact.",
    "vendorReason": "The Storm Tower has exclusive access to artifacts crafted by Tempest Mages, making it the primary vendor for this item.",
    "shippingDetail": "Delivery via Lightning Bolt Express takes exactly one week and requires a special courier permit from the local stormwarden.",
    "usage": {
      "activation": "Action",
      "duration": "One hour, once per lunar cycle",
      "endsWhen": "The storm dissipates after one hour or if the storm is disrupted by an action that ends it within its duration",
      "charges": "Three uses; recharged with a successful DC 25 ritual over one week"
    },
    "priceReason": "This price reflects the rarity and power of the rod, which allows for the summoning of an elemental storm capable of leveling areas.",
    "priceOriginal": 630000,
    "priceReviewedAt": "2026-07-22T04:35:56.083190+00:00",
    "aiReviewedAt": "2026-07-22T04:35:56.083190+00:00",
    "aiReviewVersion": 1
  },
  "eliminate _commission": {
    "id": "eliminate _commission",
    "name": "Eliminate Race (Race-Specific)",
    "description": "The Eliminate Race is a dark, binding contract forged from shadow and forbidden lore. This ancient artifact compels you to systematically eradicate an entire species within fifty years. In its wake, all members of the targeted race suffer a -3 penalty on all saving throws against you. Should you successfully complete the contract, you gain godly power; should you fail, you are cursed with eternal torment and hunted by every faction opposed to genocide.",
    "category": "forbidden",
    "price": 230000,
    "icon": "⚱️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Systematic Elimination",
      "Targeted Savvy Penalty"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Ancient Ritual",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Systematic Elimination",
        "rules": "Activates upon signing. The contract compels the bearer to systematically eliminate a targeted species within fifty years, dealing death and destruction through any means necessary."
      },
      {
        "title": "Targeted Savvy Penalty",
        "rules": "All members of the targeted race gain a -3 penalty on all saving throws against you while the contract is active. This effect persists until the target species is eradicated or the contract is broken."
      }
    ],
    "levelRequirementReason": "Requires a high level to handle such powerful and dangerous magic responsibly.",
    "vendorReason": "Only the Onyx Hand, an ancient and secretive organization, would distribute such forbidden and godly artifacts.",
    "shippingDetail": "Ships via a ceremonial procession of shadowy messengers, ensuring secrecy and proper handling.",
    "usage": {
      "activation": "Activation by signing the contract. The elimination process begins instantly upon activation.",
      "duration": "Fifty years from activation or until the target species is eradicated.",
      "endsWhen": "Completion of the elimination or breaking the contract through a successful DC 25 Wisdom saving throw.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its godly rarity, ancient lore, and profound impact.",
    "priceOriginal": 1200000,
    "priceReviewedAt": "2026-07-22T04:36:04.888210+00:00",
    "aiReviewedAt": "2026-07-22T04:36:04.888210+00:00",
    "aiReviewVersion": 1
  },
  "elves_lindon_leaf_wrap_premium": {
    "id": "elves_lindon_leaf_wrap_premium",
    "name": "Elves Lindon Leaf Wrap (Premium)",
    "description": "The Elves Lindon Leaf Wrap (Premium) is a delicate bandage crafted from the tender leaves of mallorn trees, each one imbued with ancient elven wisdom and healing magic. Whispering in soft, poetic verses, these leaves offer more than mere healing—they soothe the soul as they mend wounds. Made by the skilled hands of Lindon Healers, this wrap brings not only physical relief but also a touch of the forest's timeless knowledge to those who wear it.",
    "price": 750,
    "icon": "🍃",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Whispering Poetry",
      "Healing Touch"
    ],
    "vendor": "elves_lindon_grove",
    "shippedBy": "Silver Leaf Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispering Poetry",
        "rules": "The user gains advantage on saving throws against being charmed or frightened for 1 hour. The leaves are said to hum elven wisdom, soothing the mind and spirit."
      },
      {
        "title": "Healing Touch",
        "rules": "When applied to a wound, the wrap heals 2d6 hit points over the course of one hour. It can be applied once per day without expending charges or resting."
      }
    ],
    "levelRequirementReason": "This healing bandage is accessible to all adventurers, regardless of their level.",
    "vendorReason": "The Lindon Grove is renowned for its connection with the mallorn trees and expertise in crafting items that draw strength from nature's essence.",
    "shippingDetail": "Ships via Silver Leaf Express, ensuring swift delivery within a week of purchase.",
    "usage": {
      "activation": "Instantaneous application by the user or another proficient individual.",
      "duration": "Healing effect lasts for one hour.",
      "endsWhen": "The healing effect concludes after one hour.",
      "charges": "Unlimited; can be used once per day."
    },
    "priceReason": "This item is priced at a balanced XP value, reflecting its rarity and the expertise of Lindon Healers in crafting it.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T04:36:21.595444+00:00",
    "aiReviewedAt": "2026-07-22T04:36:21.595444+00:00",
    "aiReviewVersion": 1
  },
  "elves_lindon_lembas_bread_recipe": {
    "id": "elves_lindon_lembas_bread_recipe",
    "name": "Recipe: Elves Lindon Lembas Bread",
    "description": "The Recipe for Elves Lindon Lembas Bread is a parchment scroll imbued with the essence of the ancient mallorn trees. It whispers secrets of the Elven realms, promising sustenance that can keep a traveler alive and strong for days in harsh conditions. Each piece, baked under the light of the moon with mallorn leaves, grants advantage on survival checks made during long journeys and ensures no fatigue from travel. The Lindon Bakers, masters of this ancient craft, pass down this recipe, ensuring its preservation through generations.",
    "price": 750,
    "icon": "🍞",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Sustenance for Long Journeys",
      "Advantage on Survival Checks"
    ],
    "vendor": "elves_lindon_grove",
    "shippedBy": "Leaf-Wrapped Lore",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sustenance for Long Journeys",
        "rules": "Activates when the bread is consumed. Grants advantage on survival checks made during long travel and ensures no fatigue from travel, lasting until the next mealtime."
      },
      {
        "title": "Advantage on Survival Checks",
        "rules": "When baked correctly with mallorn leaves, this recipe provides a +1 bonus to all survival checks made during extended travel. This effect lasts for 24 hours after consumption of one piece of bread."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough that even novice travelers can use it.",
    "vendorReason": "The Lindon Bakers are renowned for their expertise in crafting this ancient bread and preserving Elven lore.",
    "shippingDetail": "Ships within the week, delivered fresh from the Lindon grove.",
    "usage": {
      "activation": "Activate by consuming one piece of the baked bread after correctly preparing it with mallorn leaves under a lunar light.",
      "duration": "24 hours per consumption; ends when consumed or if the effects are negated by failure in survival checks.",
      "endsWhen": "Consumption, failure in survival checks, or expiration at the next mealtime.",
      "charges": "Unlimited; can be baked multiple times using this recipe."
    },
    "priceReason": "The rare leaves and ancient craftsmanship required to prepare this bread justify its high price.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T19:25:41.110915+00:00",
    "aiReviewedAt": "2026-07-22T19:25:41.110915+00:00",
    "aiReviewVersion": 1
  },
  "elves_lindon_mallorn_leaf_press": {
    "id": "elves_lindon_mallorn_leaf_press",
    "name": "Elves Lindon Mallorn Leaf Press",
    "description": "The Elves Lindon Mallorn Leaf Press, crafted by the delicate hands of Lindon Woodworkers, is a press made from the sacred wood of the mallorn trees. Its golden varnish and intricate carvings reflect the light of Eärendil's star. This press ensures that no leaf wilts during pressing, preserving their essence perfectly for lembas. The press is so finely crafted that it adds +2 to longevity recipes, extending the life span of any food infused with mallorn leaves.",
    "category": "equipment",
    "price": 750,
    "icon": "🍞",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Preserves Mallorn Leaves",
      "Enhances Longevity Recipes"
    ],
    "vendor": "elves_lindon_grove",
    "shippedBy": "Leaf Lore Liner",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Leaf Preservation",
        "rules": "This press ensures that no leaf wilts during pressing, allowing for the perfect extraction of mallorn essence. The press must be used on fresh leaves to activate this effect."
      },
      {
        "title": "Enhanced Longevity",
        "rules": "When used in conjunction with a longevity recipe, this press grants +2 bonus to the roll. This effect can only be used once per day."
      }
    ],
    "levelRequirementReason": "This press is accessible to even the most novice of elves and travelers who wish to preserve the essence of mallorn leaves.",
    "vendorReason": "Elves from Lindon Grove are known for their expertise in crafting items that honor the natural world, making this press a trusted product among their people.",
    "shippingDetail": "Ships via Leaf Lore Liner with a 1-week delivery time, ensuring the press arrives in pristine condition.",
    "usage": {
      "activation": "Object Interaction to use the press on fresh mallorn leaves.",
      "duration": "Instantaneous effect once used.",
      "endsWhen": "The effects are exhausted after one use per day.",
      "charges": "Unlimited uses, but only one per day."
    },
    "priceReason": "Crafted from sacred mallorn wood and intricately carved by Lindon Woodworkers, this press is a rare and precious item, justifying its moderate price in experience points.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T04:37:11.774038+00:00",
    "aiReviewedAt": "2026-07-22T04:37:11.774038+00:00",
    "aiReviewVersion": 1
  },
  "elves_lindon_starlight_cloak": {
    "id": "elves_lindon_starlight_cloak",
    "name": "Elves Lindon Starlight Cloak",
    "description": "This cloak is a marvel of Lindon's starlight weaving, its threads shimmering with celestial light. It whispers of ancient elven lore and the night sky, granting insight to those who wear it under starlight. The fabric itself weaves moonlight into invisibility for brief moments, perfect for scouts or spies. Woven by the Lindon Weavers, this relic is as much a tool of stealth as it is a symbol of elven craftsmanship.",
    "category": "equipment",
    "price": 750,
    "icon": "🧥",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Moonlit Invisibility",
      "Starlight Insight"
    ],
    "vendor": "elves_lindon_haven",
    "shippedBy": "Stellar Silk",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Moonlit Invisibility",
        "rules": "As an action, the wearer can grant themselves minor invisibility for up to 1 minute in moonlight. This effect ends if the user steps out of moonlight or is hit by an attack."
      },
      {
        "title": "Starlight Insight",
        "rules": "While wearing this cloak under starlight, the wearer gains advantage on Perception checks related to detecting celestial phenomena and hidden creatures within a 30-foot radius. This benefit lasts for 1 hour."
      }
    ],
    "levelRequirementReason": "The intricate weaving requires a certain level of skill to properly handle and activate.",
    "vendorReason": "As the Lindon Weavers' official outpost, they offer their most prized creations.",
    "shippingDetail": "The cloak requires careful handling by Stellar Silk to preserve its delicate threads during transport.",
    "usage": {
      "activation": "Action: Grant minor invisibility for up to one minute. Passive: Gain advantage on Perception checks while under starlight, lasting one hour.",
      "duration": "Minor Invisibility lasts 1 minute, Starlight Insight lasts 1 hour.",
      "endsWhen": "Minor Invisibility ends when the user steps out of moonlight or is attacked; Starlight Insight expires after 1 hour.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The cloak's rarity and craftsmanship justify a price that balances its utility with player economy.",
    "priceOriginal": 21500,
    "priceReviewedAt": "2026-07-22T04:36:29.204745+00:00",
    "aiReviewedAt": "2026-07-22T04:36:29.204745+00:00",
    "aiReviewVersion": 1
  },
  "emergency_self_destruct_defense_system_1": {
    "id": "emergency_self_destruct_defense_system_1",
    "name": "The 'Big Red Button'",
    "description": "'The Big Red Button' is a stark, ominous device emblazoned with a glowing red button and a warning label in three languages. Crafted from reinforced steel with intricate circuits of WarioCorp's proprietary design, it's a last resort to defend the base against overwhelming forces. Once activated, it unleashes a catastrophic explosion that obliterates everything within a fifty-foot radius, turning the battlefield into a smoldering wasteland. Despite its lethality, it is a symbol of resilience, ensuring the base can never fall without a fight.",
    "category": "faction",
    "price": 21000,
    "icon": "🚨",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Last Resort Defense",
      "Massive Catastrophic Explosion"
    ],
    "vendor": "wario_direct",
    "factionBonus": {
      "defense": 50
    },
    "effectDetails": [
      {
        "title": "Last Resort Defense",
        "rules": "'The Big Red Button' is activated as a reaction when you are reduced to 0 hit points. It instantly destroys the base, dealing 50d8 fire damage in a 50-foot radius centered on the base (save DC 16). The explosion also has a 25% chance of destroying adjacent structures."
      },
      {
        "title": "Massive Catastrophic Explosion",
        "rules": "'The Big Red Button' must be activated by a creature with at least 10th level. Once used, it cannot be reactivated for 7 days. The explosion deals massive AoE damage to all creatures within the area of effect."
      }
    ],
    "levelRequirement": 5,
    "levelRequirementReason": "Only high-level heroes can activate 'The Big Red Button' due to its immense power and destructive capability.",
    "vendorReason": "'The Big Red Button' is a signature product of WarioDirect, known for their cutting-edge defense technologies.",
    "shippedBy": "WarioCorp Express Airfreight",
    "shippingDetail": "Ships via WarioCorp's Express Airfreight service to ensure timely delivery and safe handling of the device.",
    "usage": {
      "activation": "reaction when reduced to 0 HP",
      "duration": "instantaneous, lasting until the explosion completes",
      "endsWhen": "used or destroyed upon activation",
      "charges": "unlimited, but one-day cooldown between uses"
    },
    "priceReason": "'The Big Red Button' is priced at 1000 XP as a rare, high-risk defensive measure that can turn the tide of battle.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-22T04:37:01.719650+00:00",
    "aiReviewedAt": "2026-07-22T04:37:01.719650+00:00",
    "aiReviewVersion": 1
  },
  "empire_man_diplomatic_passport": {
    "id": "empire_man_diplomatic_passport",
    "name": "Empire Man Diplomatic Passport",
    "description": "The Empire Man Diplomatic Passport is a sleek, embossed leather document adorned with the imperial crest and a lockable clasp. It grants its bearer immunity from arrest or detention within Empire Man-controlled territories and allows for the requisition of up to five local guards at any time. The passport's creation dates back to the golden age of diplomacy and is made by hand in the Empire Man Chancery, ensuring authenticity and security.",
    "price": 21000,
    "icon": "🛂",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Immunity to Arrest/Requisition",
      "Local Guard Requisition"
    ],
    "vendor": "empire_man_chancery",
    "shippedBy": "Official Seal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Immunity to Arrest/Requisition",
        "rules": "While holding this passport, the bearer is immune to arrest or detention by Empire Man authorities. Additionally, they can requisition up to five local guards for protection within a day of acquiring the passport."
      },
      {
        "title": "Local Guard Requisition",
        "rules": "The bearer can use an action to activate the passport and request the presence of up to five local guards within 1 mile. The guards remain until dismissed or until their shift ends, whichever comes first. This ability has a daily limit of once per day."
      }
    ],
    "levelRequirementReason": "The complexity and security measures involved in obtaining the passport necessitate at least fifth-level proficiency.",
    "vendorReason": "Only the Empire Man Chancery can issue such a document, ensuring its authenticity and legitimacy within Empire Man territories.",
    "shippingDetail": "The passport is delivered with official couriers who ensure safe passage through Empire Man-controlled lands.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (requisition), lasts until dismissed or shift ends",
      "endsWhen": "Dismissed by the bearer, end of a guard's shift, or upon expiration of daily limit",
      "charges": "Unlimited"
    },
    "priceReason": "The passport is priced at 1000 XP due to its unique diplomatic benefits and secure delivery.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-22T04:36:53.296096+00:00",
    "aiReviewedAt": "2026-07-22T04:36:53.296096+00:00",
    "aiReviewVersion": 1
  },
  "empire_man_legionnaire_kit": {
    "id": "empire_man_legionnaire_kit",
    "name": "Legionnaire's Kit of the Empire of Man",
    "description": "The Legionnaire's Kit of the Empire of Man is a meticulously crafted ensemble, forged from disciplined hands and seasoned in the fires of countless battles. This kit includes a well-balanced shortsword, an imposing large shield that can turn the tide of battle, and a set of chainmail that offers both protection and mobility. Soldiers trained under the banner of the Empire are known to wield this kit with unmatched precision, gaining advantage on checks to construct or maintain fortifications.",
    "category": "equipment",
    "price": 210,
    "icon": "⚔️",
    "stock": 25,
    "rarity": "uncommon",
    "effects": [
      "Fortified Shield",
      "Tactical Manuals"
    ],
    "vendor": "Empire Man",
    "shippedBy": "Military Supply Wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fortified Shield",
        "rules": "When you use the large shield included in this kit for an opportunity attack, you have advantage on the attack roll. This effect can be used once per long rest."
      },
      {
        "title": "Tactical Manuals",
        "rules": "You gain proficiency with military formations and tactics detailed in the manual provided within the kit. As a bonus action, you may refer to these tactical manuals to gain advantage on an Intelligence (Strategy) check related to battlefield tactics or fortifications."
      }
    ],
    "levelRequirementReason": "This kit is designed for basic soldiers who are expected to follow orders and employ standard tactics.",
    "vendorReason": "The Empire Man vendor specializes in supplying the disciplined legions with gear that ensures their effectiveness on the battlefield.",
    "shippingDetail": "The kit is shipped via a military supply wagon, which may cause delays due to potential skirmishes or terrain hazards.",
    "usage": {
      "activation": "Passive and bonus action effects",
      "duration": "Instantaneous for shield advantage; one long rest between uses of the tactical manuals effect",
      "endsWhen": "The kit is destroyed in battle or lost, at which point all effects are lost.",
      "charges": "Unlimited"
    },
    "priceReason": "This balanced price reflects the quality craftsmanship and strategic value of the kit without overpricing it.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T04:37:22.431354+00:00",
    "aiReviewedAt": "2026-07-22T04:37:22.431354+00:00",
    "aiReviewVersion": 1
  },
  "empire_man_steel_gauntlets": {
    "id": "empire_man_steel_gauntlets",
    "name": "Empire Man Steel Gauntlets",
    "description": "The Empire Man Steel Gauntlets are meticulously forged from the strongest steel found in the empire's forges, hardened by the fires of a thousand battles. These gauntlets not only bolster your unarmed strikes with their robust build but also grant you an unyielding edge when breaking through tough materials or challenging restraints. Crafted by none other than Empire Man himself, these gauntlets embody his unwavering dedication to strength and durability.",
    "category": "equipment",
    "price": 210,
    "icon": "🥊",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Unarmed Strikes",
      "Fortified Break Attempts"
    ],
    "vendor": "empire_man_chancery",
    "shippedBy": "Empire Messenger Falcons",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Unarmed Strikes",
        "rules": "When you make an unarmed strike, the gauntlets allow you to deal 1d6 + Strength modifier bludgeoning damage. Additionally, they grant you advantage on Strength checks and saving throws made to break objects or escape restraints."
      },
      {
        "title": "Fortified Break Attempts",
        "rules": "You can use an action to attempt a check with the gauntlets to break objects. If successful, you bypass the object's normal DC by 5 points. This effect expires after one hour of continuous use or when you take damage."
      }
    ],
    "levelRequirementReason": "These gauntlets are designed for beginners who wish to enhance their combat and survival skills without needing a higher level of proficiency.",
    "vendorReason": "The Empire Man Chancery is the official supplier of all forged equipment, including these gauntlets, which are known for their craftsmanship and reliability.",
    "shippingDetail": "Ships via swift messengers who deliver with precision. Delivery time varies based on location but is typically within a week.",
    "usage": {
      "activation": "Action or reaction (for unarmed strikes); action (to break objects)",
      "duration": "Instantaneous for unarmed strikes; one hour for breaking attempts",
      "endsWhen": "After one hour of continuous use, damage taken, or when you cease using them in combat.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The gauntlets are crafted from high-grade steel and require expert forging, making their price reflective of the quality and durability they provide.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-22T04:37:32.677090+00:00",
    "aiReviewedAt": "2026-07-22T04:37:32.677090+00:00",
    "aiReviewVersion": 1
  },
  "empty_can": {
    "id": "empty_can",
    "name": "Empty Soda Can",
    "description": "An Empty Soda Can, crafted from recycled aluminum, retains its unmistakable shape and label. Once used to quench thirsts in Rogueport's bustling markets, this can now be kicked with a satisfying thud that echoes through the streets. The Chuckola Cola logo still stands proudly on its side, though the beverage has long since vanished. This relic of consumption is not just empty—it’s a symbol of the city's vibrant life and endless supply of refreshment.",
    "category": "curiosities",
    "price": 14,
    "icon": "🥤",
    "stock": 99,
    "rarity": "junk",
    "effects": [
      "Can be kicked for entertainment",
      "Serves as an improvised weapon"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Recycling Not Included",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Kicked Entertainment",
        "rules": "When you kick this can, it makes a satisfying metallic thud. On your next turn, if the can is still in play, you gain advantage on one ability check."
      },
      {
        "title": "Improvised Weapon",
        "rules": "This can deals 1d4 bludgeoning damage when thrown as an improvised weapon at a target within 20 feet. You have disadvantage against creatures immune to non-magical bludgeoning damage."
      }
    ],
    "levelRequirementReason": "Suitable for beginners, this can is easy to use and requires no special skill.",
    "vendorReason": "The Rogueport Black Market thrives on relics of the city's history, and this empty can fits right into that tradition.",
    "shippingDetail": "Delivered via a fleet of wheeled carts, ensuring it arrives fresh from the markets.",
    "usage": {
      "activation": "Kicking or throwing as an action or bonus action.",
      "duration": "Instantaneous effects; ends when used up.",
      "endsWhen": "Exhausted after one use per turn",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its novelty and the effort of retrieving it from Rogueport's streets.",
    "priceOriginal": 15,
    "priceReviewedAt": "2026-07-22T04:37:18.505801+00:00",
    "aiReviewedAt": "2026-07-22T04:37:18.505801+00:00",
    "aiReviewVersion": 1
  },
  "enchanted_everbloom_seed": {
    "id": "enchanted_everbloom_seed",
    "name": "Enchanted Everbloom Seed (Growth)",
    "description": "The Enchanted Everbloom Seed, a gleaming gemstone nestled within a protective casing of moss, promises to transform any barren patch into an eternal garden. Drifts of rare herbs bloom without cease, their vibrant colors and fragrances filling the air with life. This seed was crafted by the ancient Druidic Gardeners, who have long mastered the art of nurturing nature's most precious gifts. With this seed, you can instantly bring verdant splendor to any land, no matter how arid or inhospitable it may seem.",
    "price": 21000,
    "icon": "🌱",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Yields Endless Rare Herbs",
      "Grows in Any Soil"
    ],
    "vendor": "nature_bazaar",
    "shippedBy": "Nature's Courier",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Endless Harvest",
        "rules": "Upon planting, the Enchanted Everbloom Seed immediately begins to grow an eternal garden. This garden produces a staggering fifty rare herbs every month, regardless of external conditions or maintenance. The herbs are of unparalleled quality and can be used for crafting potions, poisons, and other alchemical creations."
      },
      {
        "title": "Versatile Growth",
        "rules": "The seed can flourish in any soil type without modification or assistance. Whether planted in rich loam or poor desert sand, the Everbloom adapts to its environment and continues to produce herbs as if it were in optimal conditions."
      }
    ],
    "levelRequirementReason": "Only a druid of at least 14th level can wield the power of the ancient Druidic Gardeners, ensuring the seed is used responsibly.",
    "vendorReason": "The Nature Bazaar is known for its extensive collection of rare and magical flora, making it the perfect vendor for such a legendary item.",
    "shippingDetail": "The seeds are delivered by Nature's Courier, ensuring that they reach their destination in pristine condition, ready to be planted at your command.",
    "usage": {
      "activation": "Planting the seed is an action. Once planted, it immediately begins its growth cycle.",
      "duration": "Instantaneous",
      "endsWhen": "The garden ceases to produce herbs only if the soil becomes contaminated or if the garden is destroyed by a powerful force.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rarity and magical properties, offering players a valuable yet balanced addition to their alchemical resources.",
    "priceOriginal": 370000,
    "priceReviewedAt": "2026-07-22T19:26:05.739911+00:00",
    "aiReviewedAt": "2026-07-22T19:26:05.739911+00:00",
    "aiReviewVersion": 1
  },
  "enchanted_fishing_rod_of_luck": {
    "id": "enchanted_fishing_rod_of_luck",
    "name": "Enchanted Fishing Rod of Luck",
    "description": "The Enchanted Fishing Rod of Luck is a sleek, polished rod with an intricate silver ring at its tip. Crafted from enchanted willow wood and bound by threads woven from the silk of dreamcatchers, this rod ensures that every cast promises success. It not only increases your chances of reeling in rare fish but also has a slim chance of catching legendary treasures, as if the river itself whispers secrets to you.",
    "category": "equipment",
    "price": 750,
    "icon": "🎣",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Luck-Enhanced Fishing",
      "Treasure Lure"
    ],
    "vendor": "riverside_outfitter",
    "shippedBy": "Waterproof Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Luck-Enhanced Fishing",
        "rules": "While holding this rod, you have advantage on Survival checks for fishing or foraging. Additionally, once per long rest, you can cast a lure that grants you a magical aura. On your next successful fishing check within 1 hour, you catch a minor magic item (DM's choice) if the roll is equal to or greater than 15."
      },
      {
        "title": "Treasure Lure",
        "rules": "At any time while using this rod, you can cast a special lure that increases your chances of catching rare fish. This effect lasts until the end of your next turn and grants advantage on one fishing check per day. The lure has no effect if used in combat."
      }
    ],
    "levelRequirementReason": "The rod's enchantments are subtle but potent, making it accessible to all adventurers.",
    "vendorReason": "Riverside Outfitter specializes in gear for the aquatic adventurer and is known for its enchanted fishing rods.",
    "shippingDetail": "Ships directly from the riverside, ensuring it arrives wet but ready to use.",
    "usage": {
      "activation": "Passive effect with a daily reset; lure activation on command during fishing.",
      "duration": "Instantaneous for the lure's effect and until the end of your next turn.",
      "endsWhen": "The rod is used as a weapon or broken, at which point it ceases to function forever.",
      "charges": "Unlimited daily uses"
    },
    "priceReason": "Balanced for its rarity and utility in enhancing fishing success and treasure hunting.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T04:37:34.293646+00:00",
    "aiReviewedAt": "2026-07-22T04:37:34.293646+00:00",
    "aiReviewVersion": 1
  },
  "enchantment_reinforcement": {
    "id": "enchantment_reinforcement",
    "name": "Enchantment Reinforcement",
    "description": "The Enchantment Reinforcement is a masterwork service that fortifies and amplifies magical items. This artisanal process, crafted by Artificer Tower's expert enchanter, enhances an item’s resilience, ensuring it endures more battles without breaking. Once reinforced, the enchanted weapon or armor gains +1 to its AC (if armor) or damage roll (if weapon), making it a crucial investment for any adventuring party. The ritual is time-consuming and requires the item to be left behind for one week of focused enchantment.",
    "category": "services",
    "price": 750,
    "icon": "✨",
    "stock": 20,
    "rarity": "rare",
    "effects": [
      "Enhanced Durability",
      "Increased Potency"
    ],
    "vendor": "artificer_tower",
    "shippedBy": "Commissioned Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Durability",
        "rules": "The reinforced item gains +1 to its AC (if armor) or damage roll (if weapon). This effect is non-stacking and applies only once per enchanted item. The reinforcement process prevents the item from breaking on a natural 1, instead requiring a natural 2-5."
      },
      {
        "title": "Increased Potency",
        "rules": "The reinforced item's magical effects are amplified by +1 in potency or effect level. This enhancement is applied passively and does not require activation."
      }
    ],
    "levelRequirementReason": "This service is available to all adventurers, as a basic enhancement that can be applied to any enchanted item.",
    "vendorReason": "Artificer Tower specializes in the refinement and augmentation of magical items, ensuring they are at their peak performance for clients.",
    "shippingDetail": "The reinforced item must be left with Artificer Tower for one week to undergo the enchantment process. No additional shipping costs apply.",
    "usage": {
      "activation": "Instantaneous, passive effect once applied during the ritual.",
      "duration": "Permanent until destroyed or re-reinforced.",
      "endsWhen": "The item is destroyed or re-enchanted with a new service.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the time and skill required to ensure the reinforcement process is done correctly, enhancing an item's reliability without overpricing it.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T04:37:38.004209+00:00",
    "aiReviewedAt": "2026-07-22T04:37:38.004209+00:00",
    "aiReviewVersion": 1
  },
  "ephemeral_petal": {
    "id": "ephemeral_petal",
    "name": "Ephemeral Petal",
    "description": "The Ephemeral Petal is a delicate, iridescent bloom that shimmers like starlight through mist. Its whisper carries forgotten names and secrets of the past, as if the wind itself speaks through it. When you touch this fragile petal, time seems to slow around you, allowing for an additional small action during your turn. A single touch reveals a truth about a creature, offering insight into its nature or past deeds.",
    "category": "consumables",
    "price": 4600,
    "icon": "🌸",
    "stock": 6,
    "rarity": "epic",
    "effects": [
      "Time Slows",
      "Insightful Touch"
    ],
    "vendor": "fey_market",
    "shippedBy": "Silk Envelope",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time Slows",
        "rules": "Activates as an action. You gain the ability to take one additional small action during your turn for 1 minute. This effect ends if you use your reaction for any reason, or if you are incapacitated."
      },
      {
        "title": "Insightful Touch",
        "rules": "Activates as a bonus action when touching a creature. You learn one truth about the creature's nature or past deeds that would be relevant to an Insight check (e.g., their alignment, a significant event in their life). This effect does not grant advantage on checks."
      }
    ],
    "levelRequirementReason": "The Ephemeral Petal is accessible early on to encourage exploration and subtle interactions with the environment.",
    "vendorReason": "The Fey Market thrives on rare, magical flora and fauna, making it a natural home for such an ethereal item.",
    "shippingDetail": "Delivered by swift messengers who ensure the petals remain undamaged during transit.",
    "usage": {
      "activation": "Activates as an action or bonus action, depending on the effect used.",
      "duration": "1 minute for Time Slows; instantaneous for Insightful Touch.",
      "endsWhen": "Time Slows ends if you take a reaction or become incapacitated. Insightful Touch ends upon use.",
      "charges": "Unlimited charges"
    },
    "priceReason": "The Ephemeral Petal's price is balanced to reflect its ethereal nature and utility without being overly powerful.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-22T04:38:12.598583+00:00",
    "aiReviewedAt": "2026-07-22T04:38:12.598583+00:00",
    "aiReviewVersion": 1
  },
  "equestria_almost_at_the_edge_item_here": {
    "id": "equestria_almost_at_the_edge_item_here",
    "name": "Liminal Echo Ring",
    "description": "The Liminal Echo Ring hums with an unstable resonance, its surface a fractured mirror of reality. Crafted by the Abyssal Court from twisted crystal and forgotten magic, it allows brief teleportation to nearby void zones and grants temporary resistance to falling hazards. Worn by those who dare to traverse between worlds, this ring connects both Equestria and Almost at the Edge, but beware: its use in high density zones triggers a ripple effect that warps reality itself.",
    "price": 4600,
    "icon": "🔮",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Brief Teleportation",
      "Falling Hazard Resistance"
    ],
    "vendor": "equestria",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Brief Teleportation",
        "rules": "Activates as a bonus action, allowing the wearer to teleport up to 30 feet to an unoccupied space within reach. Must be at least level 1 to use this ability."
      },
      {
        "title": "Falling Hazard Resistance",
        "rules": "Grants temporary resistance to falling hazards for 1 minute upon activation. Can only be used once per long rest. The wearer must be at least level 1 to benefit from this effect."
      }
    ],
    "levelRequirementReason": "The ring's unstable magic requires a minimum level of 1 to wield safely.",
    "vendorReason": "Equestrian vendors, with their connections to magical artifacts and creatures from the far reaches of reality, are trusted to sell such powerful yet delicate items.",
    "shippingDetail": "Ships via Blooper Wetworks' Express Service, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Bonus action for teleportation; once per long rest for falling hazard resistance.",
      "duration": "1 minute or until the effect ends when used again",
      "endsWhen": "Reaches its use limit of one per day",
      "charges": "Unlimited"
    },
    "priceReason": "The ring's rarity and unique properties, combined with its limited use and powerful effects, justify a price of 1000 XP.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T04:38:00.542940+00:00",
    "aiReviewedAt": "2026-07-22T04:38:00.542940+00:00",
    "aiReviewVersion": 1
  },
  "equestria_courier_item_here": {
    "id": "equestria_courier_item_here",
    "name": "Blooper Wetworks Courier Pack",
    "description": "The Blooper Wetworks Courier Pack is a sleek, durable leather pouch designed to secure illicit goods. Its reinforced interior ensures no contraband escapes, and its hidden compartments offer an extra layer of stealth. Crafted with precision by Blooper Wetworks, this pack grants you the ability to carry twice as much cargo without straining your strength. In urban zones, it enhances your Stealth checks by 10%, making your movements almost imperceptible.",
    "price": 38,
    "icon": "🔮",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Increased Carrying Capacity",
      "Urban Stealth Bonus"
    ],
    "vendor": "equestria",
    "shippedBy": "Swift Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Carrying Capacity",
        "rules": "Passive effect. The pack doubles the weight you can carry without increasing your Strength score."
      },
      {
        "title": "Urban Stealth Bonus",
        "rules": "Active effect. Grants a +10 bonus to Dexterity (Stealth) checks in urban areas for 1 hour, which ends when you leave an urban zone or take any action that requires concentration."
      }
    ],
    "levelRequirementReason": "Beginners can use this pack to manage their cargo efficiently without requiring a high Strength score.",
    "vendorReason": "Equestrian vendors are known for offering the best in secure and efficient cargo solutions.",
    "shippingDetail": "Ships directly from Blooper Wetworks, ensuring quick delivery to any location within Equestria.",
    "usage": {
      "activation": "Passive effect. No activation required; always active when in an urban zone.",
      "duration": "1 hour per day while in an urban zone",
      "endsWhen": "Leaving the urban area or taking a concentration action",
      "charges": "Unlimited uses"
    },
    "priceReason": "The pack's enhanced capabilities and secure design justify its high price, offering significant utility to adventurers.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-22T04:37:50.118207+00:00",
    "aiReviewedAt": "2026-07-22T04:37:50.118207+00:00",
    "aiReviewVersion": 1
  },
  "equestria_frostwhisper_hood": {
    "id": "equestria_frostwhisper_hood",
    "name": "Frostwhisper Hood",
    "description": "The Frostwhisper Hood, crafted in the frigid Northern Peaks by the last icebound noble, channels the icy chill of ancient glaciers. When donned, it emits a soft blue pulse that subtly slows time for allies within a 3-meter radius, granting them increased focus and coordination during combat. However, prolonged use draws the attention of the Changeling Hive, who whisper secrets that can be both beneficial and perilous to those who listen too long.",
    "category": "equipment",
    "price": 1500,
    "icon": "❄",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Slows Time Aura",
      "Draws Changeling Attention"
    ],
    "vendor": "equestria",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Slows Time Aura",
        "rules": "When activated as a bonus action, the Frostwhisper Hood emits a soft blue pulse creating a 3-meter radius aura that slows time for allies within its range. Allies gain advantage on attack rolls and saving throws while in the aura. The effect lasts for 10 minutes per hour of use but is disrupted if used beyond 20 minutes."
      },
      {
        "title": "Draws Changeling Attention",
        "rules": "After being worn continuously for more than 30 minutes, the hood becomes a beacon to the Changeling Hive. Once detected, the wearer must make a Wisdom saving throw (DC 15) or be compelled by a secret whisper that can influence their actions until it is resolved."
      }
    ],
    "levelRequirementReason": "Crafted in the extreme conditions of the Northern Peaks, this hood requires a proficient user who understands its icy magic.",
    "vendorReason": "Equestrian traders have exclusive access to the rarest and most powerful artifacts from the frigid north.",
    "shippingDetail": "Delivered with expedited service, but the hood must be packed in insulated containers to preserve its magical integrity during transit.",
    "usage": {
      "activation": "Bonus action to activate and maintain the aura; can be interrupted by a Changeling detection.",
      "duration": "10 minutes per hour of use",
      "endsWhen": "Detected by Changelings or worn for more than 30 minutes, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with rare materials and ancient techniques, the Frostwhisper Hood is a highly sought-after item among adventurers seeking to harness its icy power.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T04:38:05.718387+00:00",
    "aiReviewedAt": "2026-07-22T04:38:05.718387+00:00",
    "aiReviewVersion": 1
  },
  "equestria_griffonstone_crown": {
    "id": "equestria_griffonstone_crown",
    "name": "Griffonstone Crown",
    "description": "The Griffonstone Crown, crafted from the molten bones of a fallen Griffin king, channels the raw power of storms and skies. Its weight is both physical and metaphysical: it grants its wearer +2 to Nature and Weather-based skills while also causing a 1d6 point drain if worn too long in sunlight. With each passing hour under direct sun, the crown's aura grows heavier until it must be removed or risk severe consequences for the wearer.",
    "category": "equipment",
    "price": 4600,
    "icon": "🌪",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Storms at Will",
      "Sunlight Drain"
    ],
    "vendor": "Equestria",
    "shippedBy": "Paratroopa Air Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Storms at Will",
        "rules": "The wearer can command a minor storm cloud to form within 30 feet. This effect lasts until the end of their next turn and provides cover for them and any allies within 10 feet. Concentration is required (no action needed), ends if concentration is lost, and has no save DC."
      },
      {
        "title": "Sunlight Drain",
        "rules": "If worn in direct sunlight for more than one hour consecutively, the wearer must succeed on a DC 15 Constitution saving throw or suffer 1d6 points of temporary hit point loss at the end of each long rest. This effect ends when removed from sunlight."
      }
    ],
    "levelRequirementReason": "The crown's power is too potent for those below eighth level, requiring them to have reached a certain mastery before wielding it.",
    "vendorReason": "As the crown was forged in Equestria and used by its noblest, only this region's vendor sells it.",
    "shippingDetail": "The crown is carefully packed to withstand air travel but must be handled with utmost care due to its fragile nature.",
    "usage": {
      "activation": "Concentration (no action needed)",
      "duration": "Until the end of their next turn",
      "endsWhen": "Concentration is lost or the storm dissipates naturally",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its rarity and the materials used in crafting, ensuring it remains a valuable but balanced choice for high-level adventurers.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T04:38:34.955179+00:00",
    "aiReviewedAt": "2026-07-22T04:38:34.955179+00:00",
    "aiReviewVersion": 1
  },
  "equestria_griffonstone_gear": {
    "id": "equestria_griffonstone_gear",
    "name": "Griffonstone Core Gear",
    "description": "Forged from the heart of ancient Griffonstone, this gear radiates a golden aura that enhances every pony’s combat and movement. It syncs with your spirit, amplifying your speed by 25% during movement and increasing damage output in combat by 18%. However, its power comes at a cost—after five minutes of use, you experience fleeting memory lapses, temporarily fogging your mind. The gear requires attunement to the Griffonstone legacy and is crafted with precision for those who seek clarity and strength.",
    "category": "equipment",
    "price": 4600,
    "icon": "🦅",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Enhanced Speed",
      "Combat Boost"
    ],
    "vendor": "equestria",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Enhanced Speed",
        "rules": "While wearing this gear, your movement speed increases by 25%. This effect lasts until the end of your next turn after activation."
      },
      {
        "title": "Combat Boost",
        "rules": "In combat, you gain a +3 bonus to attack rolls and damage rolls. This effect persists for one minute upon activation."
      }
    ],
    "levelRequirementReason": "Requires attunement to the ancient Griffonstone legacy, ensuring it's suitable only for experienced ponies.",
    "vendorReason": "Equestria is renowned for its mastery of magical artifacts and gear forged from legendary materials like Griffonstone.",
    "shippingDetail": "Ships via fast courier, delivered within three days.",
    "usage": {
      "activation": "Activates as a bonus action.",
      "duration": "One minute per activation. Ends when you take a short or long rest.",
      "endsWhen": "The effect ends if you take a short or long rest.",
      "charges": "Wears out after five uses."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare crafting materials and limited availability.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T04:38:20.309649+00:00",
    "aiReviewedAt": "2026-07-22T04:38:20.309649+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_name_here": {
    "id": "equestria_item_name_here",
    "name": "Griffonstone Core",
    "description": "The Griffonstone Core hums with an ancient, almost sentient power, its crystalline form shimmering with hues of gold and red. Originating from the forges of forgotten griffons, this shard not only enhances a user’s magical affinity by 30% but also grants them glimpses into lost histories, allowing them to recall forgotten spells or abilities as if they had never been forgotten. However, overuse risks triggering a psychic backlash, causing temporary blindness and confusion.",
    "price": 21000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Enhances Magical Affinity",
      "Recalls Forgotten Knowledge"
    ],
    "vendor": "equestria",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Enhanced Magical Affinity",
        "rules": "Activates on use as a bonus action. Grants the user a +1d6 bonus to all spell attack rolls and spell saving throws for an hour, which ends when the user casts three spells within that time."
      },
      {
        "title": "Recalls Forgotten Knowledge",
        "rules": "Active at will. Allows the user to recall one forgotten spell or ability they once knew, as if it were a known spell. The effect lasts until the end of the user's next turn and can be used again after 24 hours."
      }
    ],
    "levelRequirementReason": "Requires an 8th-level character to harness its ancient power without risking overcharging.",
    "vendorReason": "The Equestrian market is known for rare and powerful artifacts, making the Griffonstone Core a natural addition.",
    "shippingDetail": "Ships via Blooper Express, delivering within three days of purchase.",
    "usage": {
      "activation": "Bonus action or at will (recalling forgotten knowledge)",
      "duration": "Until the end of next turn for recalling forgotten knowledge; one hour for enhanced magical affinity",
      "endsWhen": "User casts three spells during the hour (affinity), user's next turn (knowledge recall)",
      "charges": "Unlimited, but must recharge after a long rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its legendary rarity and powerful effects.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T04:38:33.460157+00:00",
    "aiReviewedAt": "2026-07-22T04:38:33.460157+00:00",
    "aiReviewVersion": 1
  }
};
