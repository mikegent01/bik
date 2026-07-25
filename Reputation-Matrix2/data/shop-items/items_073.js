// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_073 = {
  "midlands_item_seraphina_shard": {
    "id": "midlands_item_seraphina_shard",
    "name": "Fragment of the Fallen Star",
    "description": "The Fragment of the Fallen Star pulses with an unnatural warmth, its surface etched with constellations of ancient light. Crafted from a fragment of a celestial being that fell during the Great Fracture, it grants armor a radiant sheen that protects and heals. This shard is said to have been polished by the very stars themselves, ensuring those who wield it are shielded not just from harm but also from despair.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Radiant Glow",
      "Healing Light"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dimensional rift portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiant Glow",
        "rules": "This fragment grants a +2 bonus to AC and provides resistance to radiant damage. The effect persists as long as the wearer maintains their concentration on it, which can be re-established once per short or long rest."
      },
      {
        "title": "Healing Light",
        "rules": "Once per day, the wielder may channel celestial energy for a burst of healing that restores 75 hit points to themselves. This effect requires no action and has no saving throw associated with it; however, using it expends one charge."
      }
    ],
    "levelRequirementReason": "The fragment's power is accessible to all who can appreciate its celestial origins.",
    "vendorReason": "Master artisans at fractured_forge are skilled in crafting items from the stars, making this shard a fitting addition to their inventory.",
    "shippingDetail": "Arrives via the dimensional rift portal, a swift and secure method of delivery straight from the astral plane.",
    "usage": {
      "activation": "Concentration (re-established once per short or long rest)",
      "duration": "Until the concentration is broken or until the wearer rests",
      "endsWhen": "The concentration ends or upon resting",
      "charges": "Recharges after a full night's rest"
    },
    "priceReason": "Balanced at 1000 XP, this shard offers significant defensive and healing benefits without overbalancing the game.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-25T01:04:53.235327+00:00",
    "aiReviewedAt": "2026-07-25T01:04:53.235327+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_crimson_scroll": {
    "id": "midlands_item_crimson_scroll",
    "name": "Crimson Scroll of Imperial Decree",
    "description": "The Crimson Scroll of Imperial Decree, soaked in the blood of overeager scribes and generals, holds an ancient decree on etiquette. Unfolded, it reveals a faded but still potent message: 'Tea should be served with grace.' Upon activation, this scroll grants temporary advantage on persuasion checks when discussing matters of royal lineage or social protocol, making even the most timid courtier bold in speech. However, the scroll itself is not without its price; after use, it crumbles into dust, leaving only a faint aroma of bergamot and jasmine.",
    "category": "consumables",
    "price": 1000,
    "icon": "📜",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Advantage on Persuasion Checks",
      "Scroll Crumbles After Use"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "Royal Courier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Advantage on Persuasion Checks",
        "rules": "When activated as an action, this scroll grants the user temporary advantage on persuasion checks related to matters of etiquette or royal lineage. The effect lasts until the end of your next turn."
      },
      {
        "title": "Scroll Crumbles After Use",
        "rules": "Upon use, the scroll crumbles into dust and cannot be used again. It does not leave a physical trace but leaves behind an enduring aroma of bergamot and jasmine."
      }
    ],
    "levelRequirementReason": "The scroll is accessible to characters with basic social skills.",
    "vendorReason": "Midland Merchant deals in rare and unique historical documents, including decrees and scrolls of imperial significance.",
    "shippingDetail": "The scroll is delivered swiftly by the Royal Courier Pigeon but requires a special delivery permit from the local authorities.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "Ends when the effect duration ends or if you use another action on your turn",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "The scroll's rarity and historical significance, combined with its limited daily usage, justify this price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:04:57.116454+00:00",
    "aiReviewedAt": "2026-07-25T01:04:57.116454+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_blackstone_gauntlets": {
    "id": "midlands_item_blackstone_gauntlets",
    "name": "Blackstone Gauntlets of Shattered Loyalty",
    "description": "The Blackstone Gauntlets of Shattered Loyalty are forged from the tarnished remnants of an Imperial guard's armor, now imbued with a malevolent essence that whispers doubts into nearby guards' minds. These gauntlets grant their wearer increased Armor Class and subtle influence over those in close proximity, making them ideal for subterfuge and espionage. When worn, they pulse faintly with dark energy, subtly sowing seeds of uncertainty among foes within 10 feet.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧤",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Increased Armor Class",
      "Subtle Influence"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "Night Owl Messenger",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Increased Armor Class",
        "rules": "While wearing the gauntlets, you gain a +2 bonus to your AC. This effect lasts until the end of your next turn."
      },
      {
        "title": "Subtle Influence",
        "rules": "Once per short rest, as an action, you can attempt to influence nearby guards within 10 feet with a successful DC 15 Intimidation check. If successful, one target must make a Wisdom saving throw (DC 14) or become confused for 1 minute."
      }
    ],
    "levelRequirementReason": "These gauntlets are crafted from powerful but cursed materials and require the user to have the discipline and experience to wield such dark magic.",
    "vendorReason": "Master Forgemaster Varnick at Fractured Forge has a peculiar affinity for cursed artifacts, making him the ideal vendor for these gauntlets.",
    "shippingDetail": "The Night Owl Messenger ensures that these delicate items are delivered under the cover of darkness to prevent discovery and misappropriation by unworthy hands.",
    "usage": {
      "activation": "Action",
      "duration": "One minute",
      "endsWhen": "The target successfully saves or the effect is disrupted (as an action)",
      "charges": "1/short rest"
    },
    "priceReason": "The gauntlets' unique cursed nature and crafting complexity make them a rare find, justifying their lower price point.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:04:57.300433+00:00",
    "aiReviewedAt": "2026-07-25T01:04:57.300433+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_aegis_of_rebellion": {
    "id": "midlands_item_aegis_of_rebellion",
    "name": "Aegis of Rebellion – The Silent Watcher",
    "description": "The Aegis of Rebellion – The Silent Watcher gleams with an inner light, a testament to the resilience of those who dared challenge the Empire's might. Crafted from the very essence of defiance and rage, it whispers warnings in moments of peril. This shimmering shield not only grants high armor class but also occasionally pulses with psychic energy, disorienting foes within its range… just be wary; its power is as unpredictable as a mischievous sprite’s caprice!",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 2,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Psychic Disruption",
      "Resilient Defense"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "Dragon-Mounted Courier (Highly Unreliable)",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Psychic Disruption",
        "rules": "Once per short rest, when you or an ally within 10 feet takes damage from a hostile creature, the Aegis releases a pulse of psychic energy. Each target within this range must succeed on a DC 15 Wisdom saving throw or be disoriented for 1 minute."
      },
      {
        "title": "Resilient Defense",
        "rules": "While wearing the Aegis, you have advantage on saving throws against psychic damage and have a +2 bonus to your Armor Class. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The intense focus required to wield this relic's power is only available to characters of at least 15th level.",
    "vendorReason": "As a special order item, the Empire Exchange ensures that only those who truly understand its significance can obtain this powerful artifact.",
    "shippingDetail": "Delivery is delayed by one day due to the courier's unpredictable flight paths.",
    "usage": {
      "activation": "Passive effect; requires no activation. Disruptive pulse occurs automatically on damage taken within range.",
      "duration": "Instantaneous, recurring once per short rest",
      "endsWhen": "The effect ends when you finish a long rest or are incapacitated.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the item's legendary rarity and the specialized crafting required to produce such an artifact.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T01:05:18.256358+00:00",
    "aiReviewedAt": "2026-07-25T01:05:18.256358+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_ember_drift": {
    "id": "teyvat_item_ember_drift",
    "name": "Ember Drift Lantern",
    "description": "The Ember Drift Lantern is a petite lantern forged from crystallized pyro essence. Its warm glow not only illuminates the path but also subtly amplifies the wielder's fire magic, briefly increasing its potency by +1d6 damage and enhancing the chance of igniting enemies on hit. Crafted in the Dragonspine peaks, it has long been a favorite among adventurers braving the cold heights—though even Wario might be tempted to brave such icy climes for this lantern’s warmth.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 78,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Fire Potency Boost",
      "Ignite Enemies"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_mime",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Potency Boost",
        "rules": "Activates as a bonus action, increasing the wielder's fire damage by +1d6 for 1 minute. Ends when the user takes damage or ends their turn in an area of difficult terrain."
      },
      {
        "title": "Ignite Enemies",
        "rules": "Has a 25% chance to ignite enemies on hit with any fire-based attack, requiring a DC 13 Dexterity saving throw to avoid. Ends when the lantern's light is extinguished or the user takes three consecutive turns without attacking."
      }
    ],
    "levelRequirementReason": "The Ember Drift Lantern is designed for beginners and those who need its warming effects more than combat prowess.",
    "vendorReason": "Mondstadt's market often features a variety of items useful to adventurers, including this lantern that provides both warmth and fire support.",
    "shippingDetail": "Ships swiftly by winged mime, typically arriving within three days.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "Taking damage or ending turn in difficult terrain",
      "charges": "Unlimited"
    },
    "priceReason": "The Ember Drift Lantern offers a unique combination of utility and minor combat enhancement, justifying its moderate price.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:05:13.981299+00:00",
    "aiReviewedAt": "2026-07-25T01:05:13.981299+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_royal_armor_of_protection": {
    "id": "equestria_item_royal_armor_of_protection",
    "name": "Royal Armor of Protection",
    "description": "The Royal Armor of Protection, crafted by Canterlot's finest armorers, is a shimmering ensemble of enchanted pony hide and gleaming steel. Despite its imposing appearance and weighty enchantments, it moves as lightly as silk, offering the wearer an almost imperceptible grace in movement. This armor not only defends against physical attacks with its reinforced plates but also grants resistance to slashing and piercing damage, making it a favored choice among noble defenders of Equestria.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Armor Class Boost",
      "Damage Resistance"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_messenger",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Armor Class Boost",
        "rules": "The wearer's Armor Class is increased by 4. This effect is passive and grants the user a +4 bonus to their AC, providing an unyielding defense against all attacks."
      },
      {
        "title": "Damage Resistance",
        "rules": "The armor provides resistance to slashing and piercing damage, reducing such damage taken by half. This effect lasts until the wearer takes a long rest or is disarmed of the armor."
      }
    ],
    "levelRequirementReason": "This armor requires a minimum level of 10 due to its complexity in crafting and the powerful enchantments involved.",
    "vendorReason": "Only the Canterlot Commerce, with their extensive network of suppliers and master artisans, can offer such finely crafted and enchanted armor.",
    "shippingDetail": "The Royal Messenger ensures swift delivery, but due to its delicate nature, it must be handled with great care. Allow one week for shipping after purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until the wearer takes a long rest or is disarmed of the armor.",
      "endsWhen": "Disarming the wearer or taking a long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the exceptional craftsmanship, powerful enchantments, and rarity of such an item.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:05:49.215361+00:00",
    "aiReviewedAt": "2026-07-25T01:05:49.215361+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_void_gum": {
    "id": "almost_edge_item_void_gum",
    "name": "The Singularity Chew",
    "description": "The Singularity Chew is a peculiar, slightly radioactive piece of gum that tastes like the distant hum of stars and cold dread. When you chew it, your body briefly warps into a pocket of shadowy nothingness, allowing you to slip through solid objects with ease – but be wary; the phase shift is only temporary and might leave you disoriented. Use it wisely to avoid voidlings or squeeze past tight spaces without causing a scene.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍬",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Temporal Phase Shift",
      "Void Manipulation"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "black hole delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Phase Shift",
        "rules": "Activates as a bonus action. You become intangible for 1 round, allowing you to pass through solid objects such as walls or doors. This effect ends if you take damage or if your concentration is broken by another creature."
      },
      {
        "title": "Void Manipulation",
        "rules": "Grants temporary resistance to all damage types and a +2 bonus to Dexterity saving throws for 1 minute after using the gum. You can only use this effect once per short rest."
      }
    ],
    "levelRequirementReason": "The Singularity Chew is designed for novices who need an edge in tight situations but are not yet fully capable of handling more advanced items.",
    "vendorReason": "Edge Wanderer specializes in crafting and selling unique gadgets that help explorers navigate through the most perilous voids.",
    "shippingDetail": "Delivery may take several days as packages are routed through the interdimensional void.",
    "usage": {
      "activation": "Bonus action to activate, used once per short rest.",
      "duration": "1 round for phase shift; 1 minute for resistance and saving throw bonus.",
      "endsWhen": "Effect ends if you take damage or concentration is broken by another creature.",
      "charges": "Unlimited uses between rests"
    },
    "priceReason": "The Singularity Chew is priced at 1000 XP due to its unique, limited-time effects and the advanced technology required for its creation.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:05:53.519300+00:00",
    "aiReviewedAt": "2026-07-25T01:05:53.519300+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_canterlot_guard_shield": {
    "id": "equestria_item_canterlot_guard_shield",
    "name": "Canterlot Guard's Steadfast Aegis",
    "description": "Forged in the heart of Canterlot Castle during a time of great peril, this shield is imbued with the unwavering loyalty and strength of the royal guard. Its sturdy oak frame is reinforced with enchanted steel, shimmering under the glow of ancient runes that whisper tales of valor. It offers substantial protection against physical attacks and can even deflect magical projectiles, though it cannot protect your snacks from Wario's mischievous paws.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 18,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "high physical defense",
      "reflects magical projectiles (30%)"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_messenger",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Steadfast Defense",
        "rules": "When you use an action to activate the shield, it provides a +4 bonus to AC until your next turn. If a creature hits you with a melee attack while this effect is active, they must succeed on a DC 15 Dexterity saving throw or be knocked prone."
      },
      {
        "title": "Magical Deflection",
        "rules": "When the shield reflects a magical projectile, it has a 30% chance to also stun the attacker for 1 round. The attacker can make a Wisdom saving throw (DC 15) to avoid being stunned."
      }
    ],
    "levelRequirementReason": "The shield's runes and enchantments require a certain level of proficiency in combat and magical protection.",
    "vendorReason": "Only those trusted with the defense of Canterlot are permitted to purchase this symbol of royal valor.",
    "shippingDetail": "Ships via the Royal Messenger, ensuring safe and timely delivery straight from Canterlot Castle.",
    "usage": {
      "activation": "Action",
      "duration": "Until your next turn",
      "endsWhen": "On a critical hit or if you are incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The shield's rarity and enchantments, combined with the craftsmanship and lore behind it, justify its price in experience points.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T01:06:19.824408+00:00",
    "aiReviewedAt": "2026-07-25T01:06:19.824408+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_elemental_harmony_amulet": {
    "id": "equestria_item_elemental_harmony_amulet",
    "name": "Elemental Harmony Amulet",
    "description": "The Elemental Harmony Amulet is a shimmering pendant forged from the essence of Equestria’s four elemental cores. Crafted by the Crystal Empire artisans, it grants its wearer subtle control over earth, wind, fire, and water. By channeling its power, you can create minor bursts of elemental energy to hinder foes or bolster allies, but be cautious – summoning a tidal wave in your bedroom would indeed be an unfortunate accident!",
    "category": "faction",
    "price": 1000,
    "icon": "✨",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "elemental burst",
      "elemental resistance"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Carrier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Elemental Burst",
        "rules": "As a bonus action, you can create a minor burst of one of the four elements (earth, wind, fire, water) within range. The burst deals 1d6 damage of the chosen element type to all creatures in a 5-foot radius and imposes disadvantage on their next attack roll or saving throw as they are disoriented by the elemental surge. This effect has no cooldown."
      },
      {
        "title": "Elemental Resistance",
        "rules": "You have resistance to one type of damage chosen when you acquire this amulet: fire, water, wind, or earth. Additionally, you gain a +2 bonus to saving throws against spells and effects that deal the chosen element's damage."
      }
    ],
    "levelRequirementReason": "This amulet requires significant magical prowess to properly harness its elemental energies.",
    "vendorReason": "The Crystal Empire artisans are renowned for their mastery of Equestria’s elemental forces, ensuring the quality and authenticity of this item.",
    "shippingDetail": "Ships via the Crystal Carrier within one week from the Crystal Empire’s workshop.",
    "usage": {
      "activation": "Bonus action to create an elemental burst; passive effect for resistance",
      "duration": "Instantaneous (each burst)",
      "endsWhen": "The use of a bonus action for each burst, or until you rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect the amulet's elemental power and crafting complexity.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:05:36.969158+00:00",
    "aiReviewedAt": "2026-07-25T01:05:36.969158+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_ancient_rune_blade": {
    "id": "faerun_item_ancient_rune_blade",
    "name": "Whisperwind’s Edge",
    "description": "Whisperwind’s Edge, a dwarven blade forged in the Age of Heroes, hums softly with arcane energy. Its light steel feels almost weightless, allowing you to run swiftly into battle. The blade whispers tactical advice, often reminding its wielder to keep it sharp and polished; this wisdom can be trusted when you need it most. When the wind catches your ears, it seems the sword itself is alive, guiding you with its subtle voice.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 3,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+4 to attack rolls with slashing weapons",
      "50% chance to inflict bleeding on hit"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying carpet",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Tactician's Edge",
        "rules": "Whisperwind’s Edge provides advice when the wielder is at their lowest health. It whispers tactical tips, offering a +4 bonus to attack rolls with slashing weapons as long as the wielder has less than 25 hit points."
      },
      {
        "title": "Bleeding Strike",
        "rules": "When you make an attack roll with Whisperwind’s Edge and it hits, there is a 50% chance that the target suffers from bleeding. The bleeding effect lasts until the end of your next turn, dealing 1d6 slashing damage at the start of each of the target's turns."
      }
    ],
    "levelRequirementReason": "Whisperwind’s Edge requires a level 4 character to wield effectively, as its whispering abilities are best suited for those with more combat experience.",
    "vendorReason": "As one of the most renowned vendors in Faerûn, Baldur's Bazaar houses unique and powerful weapons like Whisperwind’s Edge.",
    "shippingDetail": "Shipped by enchanted flying carpet, ensuring swift delivery to your doorstep within a day.",
    "usage": {
      "activation": "Passive effect activated as long as the wielder has less than 25 hit points.",
      "duration": "Instantaneous with each attack roll and bleeding effect lasting until the end of the target's next turn.",
      "endsWhen": "The effect ends when the wielder regains consciousness or dies in combat.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Whisperwind’s Edge is priced at 1000 XP, reflecting its unique abilities and the lore behind it.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:06:30.431460+00:00",
    "aiReviewedAt": "2026-07-25T01:06:30.431460+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_seraphina_s_tears": {
    "id": "faerun_item_seraphina_s_tears",
    "name": "Tears of the Fallen Angel",
    "description": "The Tears of the Fallen Angel are shimmering, ethereal orbs that exude a sorrowful aura, collected from the celestial being’s profound lament. These tears possess potent magic capable of soothing troubled spirits and enhancing healing spells by +50%, but there is also a 20% chance to inflict despair upon those who come into contact with them. Crafted in the forges of legend, these magical tears are said to hold the essence of an angel’s fallen grace.",
    "category": "premium",
    "price": 1000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Enhances Healing",
      "Despair Chance"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Enhancement",
        "rules": "When used as a bonus action during a healing spell, this item increases its effectiveness by +50%. The effect lasts until the end of your next turn. There is no limit to how many times it can be used in a single day."
      },
      {
        "title": "Despair Chance",
        "rules": "There is a 20% chance (roll a d10 and on a 1-2) that using this item will inflict despair upon the target, causing them to lose 1d6 Wisdom until the end of their next turn. This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "These tears are potent but not overly powerful for a beginning adventurer.",
    "vendorReason": "Waterdeep Market has established itself as the premier location for rare and magical items, including these legendary tears.",
    "shippingDetail": "The tears are delivered via a dimensional portal, ensuring their arrival is swift and secure.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "Ends when used or until the next turn begins",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the tears' rarity and their magical properties, making them a valuable resource for any adventurer.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-25T01:06:19.539327+00:00",
    "aiReviewedAt": "2026-07-25T01:06:19.539327+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_mystic_potion_of_evolution": {
    "id": "pokemon_item_mystic_potion_of_evolution",
    "name": "Primal Shift Elixir",
    "description": "The Primal Shift Elixir is a vial of shimmering, iridescent liquid, said to be brewed from the rarest Pokémon essences collected deep within the Unova region's forbidden mountains. Consuming this potion not only heals minor wounds but also increases the chance of evolving one of your party’s Pokémon during the next battle. The resulting evolution is unpredictable, sometimes unlocking powerful new abilities or even a legendary form, though it can just as easily lead to unforeseen weaknesses and changes.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased_evolution_chance",
      "minor_healing"
    ],
    "vendor": "pokemart",
    "shippedBy": "Magikarp Delivery Drone",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Increased Evolution Chance",
        "rules": "When consumed during combat, this potion increases the chance of a single Pokémon in your party evolving at the start of the next battle by +2d4. The evolution is random and may result in a powerful new form or an unexpected drawback."
      },
      {
        "title": "Minor Healing",
        "rules": "The Elixir provides instant healing to all party members, restoring 50 hit points each. This effect occurs immediately upon consumption."
      }
    ],
    "levelRequirementReason": "Only higher-level trainers can safely experiment with this powerful and unpredictable potion.",
    "vendorReason": "Pokemarts are known for their extensive inventory of potions and elixirs, including the rarest and most exotic remedies.",
    "shippingDetail": "The delivery is fast but requires a special permit from the Unova region's Pokémon Association.",
    "usage": {
      "activation": "Eaten as part of combat during any battle.",
      "duration": "Instantaneous; ends when consumed or if the next battle does not occur within an hour.",
      "endsWhen": "The potion is consumed or a new battle does not commence within one hour of consumption.",
      "charges": "Unlimited, but can only be used once per combat."
    },
    "priceReason": "The exotic ingredients and unpredictable effects justify the moderate price in experience points.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-25T01:06:25.980338+00:00",
    "aiReviewedAt": "2026-07-25T01:06:25.980338+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_ancient_druidic_amulet": {
    "id": "faerun_item_ancient_druidic_amulet",
    "name": "Ancient Druidic Amulet of Whispering Roots",
    "description": "The Ancient Druidic Amulet of Whispering Roots is a warm, petrified wood amulet that radiates an ancient aura. Its carvings depict entwined roots and vines, whispering cryptic warnings about the encroaching blight. It can direct you to hidden groves of strange flora, but often misleads, leading you into unexpected dangers. The amulet's power amplifies your connection with nature, granting a deeper understanding of plant magic and increasing your spell proficiency in druidic spells.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌿",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Nature's Guidance",
      "Enhanced Spell Proficiency"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "winged beast courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Nature's Guidance",
        "rules": "At the start of each long rest, you can use an action to activate the amulet. On a successful DC 15 Intelligence (Nature) check, it provides you with cryptic guidance about the nearest hidden grove or area affected by nature-related magic. If your knowledge is flawed, the amulet may instead lead you into danger."
      },
      {
        "title": "Enhanced Spell Proficiency",
        "rules": "You have proficiency in all druidic spells. Additionally, when you cast a druidic spell with a casting time of 1 action, it costs only half as much to prepare or cast (rounded up)."
      }
    ],
    "levelRequirementReason": "The amulet's ancient magic requires a deep understanding of druidic lore and the natural world.",
    "vendorReason": "Baldur's Bazaar often stocks unique and powerful relics from various planes, including this ancient amulet.",
    "shippingDetail": "The amulet is delivered via a swift winged beast courier, ensuring it reaches you in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends if you are incapacitated or the amulet is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Its rarity and unique druidic benefits justify a price of 1000 XP.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-25T14:32:16.744454+00:00",
    "aiReviewedAt": "2026-07-25T14:32:16.744454+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_crumb_of_null": {
    "id": "doughnut_hole_crumb_of_null",
    "name": "Crumb of Null",
    "description": "The Crumb of Null is a minuscule, pulsating fragment that seems to defy the laws of reality. Crafted from the very fabric of null space itself, it radiates an unsettling chill and disrupts gravity in its immediate vicinity. When activated, this crumb can cause a target to momentarily lose their sense of direction and experience a brief disorientation that saps their balance. It's a perfect tool for distraction or chaos, but be warned: even the most mundane tasks become impossible within its radius.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌌",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Disrupts gravity",
      "Loses sense of direction"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Dimensional Rift Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravitational Disruption",
        "rules": "When activated as a bonus action, this crumb creates a 5-foot-radius area where gravity is momentarily disrupted. Any creature within the area must succeed on a DC 12 Dexterity saving throw or be pushed 10 feet away from the source of the disruption and fall prone. The effect lasts for 3 seconds."
      },
      {
        "title": "Lose Sense of Direction",
        "rules": "Any target hit by the Crumb of Null must succeed on a DC 12 Wisdom saving throw or become disoriented, losing their sense of direction for 1 minute. During this time, they have disadvantage on attack rolls and ability checks that rely on Dexterity."
      }
    ],
    "levelRequirementReason": "This crumb can be used by adventurers at any level to cause minor chaos or distraction.",
    "vendorReason": "The Hole Hawker specializes in items that bend reality, and the Crumb of Null fits perfectly into their inventory.",
    "shippingDetail": "Ships via Dimensional Rift Express, which can sometimes cause unexpected detours to null space.",
    "usage": {
      "activation": "Bonus action",
      "duration": "3 seconds for gravitational disruption; 1 minute for losing sense of direction",
      "endsWhen": "The effect ends when the duration expires or the crumb is used again, whichever comes first. The crumb can be activated a number of times equal to your Wisdom modifier (minimum of once).",
      "charges": "Unlimited"
    },
    "priceReason": "The Crumb of Null's rarity and the unique effects it provides justify its high price.",
    "priceOriginal": 678,
    "priceReviewedAt": "2026-07-25T01:06:43.900521+00:00",
    "aiReviewedAt": "2026-07-25T01:06:43.900521+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronometric_amulet": {
    "id": "almost_edge_item_chronometric_amulet",
    "name": "Chronometric Amulet of Lost Time",
    "description": "This amulet, forged from solidified echoes of forgotten timelines, allows its wearer to briefly reverse time and correct past mistakes. The Chronometric Amulet of Lost Time is a desperate tool against impending doom or to rectify a catastrophic blunder. However, prolonged use risks unraveling the very fabric of your timeline, drawing the attention of temporal anomalies and entities that thrive on chaos—much like Wario's ill-fated culinary creations.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "rewind_time_once",
      "chance_to_avoid_damage"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "temporal_anomaly",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Rewind Time (One Use)",
        "rules": "As a reaction, the wearer can rewind time for 1 round, allowing them to take an action they missed or correct their last mistake. This effect is limited to once per day and expends one use."
      },
      {
        "title": "Temporal Luck",
        "rules": "The amulet grants you advantage on saving throws against effects that would harm your timeline, such as temporal anomalies. This benefit lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Adept spellcasters and seasoned adventurers are more likely to master this perilous tool.",
    "vendorReason": "The Edge Wanderer deals in rare, arcane artifacts from the farthest reaches of time and space.",
    "shippingDetail": "Delivered via a temporal courier that ensures safe passage through the timestream.",
    "usage": {
      "activation": "Reaction (as a reaction to an effect that would cause you damage or disrupt your timeline)",
      "duration": "1 round per use, expends one charge",
      "endsWhen": "The effect ends when its duration runs out or if used again before the next midnight.",
      "charges": "One use per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects a rare but manageable tool for skilled adventurers.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:07:11.757716+00:00",
    "aiReviewedAt": "2026-07-25T01:07:11.757716+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_voidstone_massage": {
    "id": "almost_edge_item_voidstone_massage",
    "name": "Voidstone Massage - Essence of Nothingness",
    "description": "Experience the ultimate in relaxation with Voidstone Massage - Essence of Nothingness. Feel your muscles melt under the touch of a skilled void-walker, whose fingers release concentrated pulses of nothingness, leaving you refreshed and free from stress. This ancient technique is said to originate from the forgotten realms beyond the Veil, where the essence of void and existence intertwine. The massage may temporarily alter your perception, making you feel lighter and more inspired by the world around you.",
    "category": "services",
    "price": 1000,
    "icon": "💆‍♀️",
    "stock": 2,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "relaxation",
      "inspiration"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "sentient_void",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Relaxation",
        "rules": "Upon activation, the user gains advantage on saving throws against being frightened or charmed for 1 hour. The effect ends if the user takes any harmful action."
      },
      {
        "title": "Inspiration",
        "rules": "The user has a 25% chance to gain inspiration at the start of their turn, persisting until the end of their next short or long rest. This effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "This massage is accessible to all adventurers, as its effects are gentle and beneficial for everyone.",
    "vendorReason": "The Liminal Trader specializes in esoteric services that bridge the realms of the known and unknown, making this massage a natural fit.",
    "shippingDetail": "Shipped directly by Sentient Void, ensuring the massage essence remains potent until delivery.",
    "usage": {
      "activation": "A bonus action to activate the massage.",
      "duration": "Instantaneous effect lasting for 1 hour.",
      "endsWhen": "The effect ends if the user takes any harmful action or at the end of their next short rest, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects the ancient lore and potent effects provided by this massage.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:06:48.589085+00:00",
    "aiReviewedAt": "2026-07-25T01:06:48.589085+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_obsidian_shard_of_doom": {
    "id": "faerun_item_obsidian_shard_of_doom",
    "name": "Obsidian Shard of Doom",
    "description": "The Obsidian Shard of Doom gleams darkly, a relic from the depths of the Underdark. Crafted by ancient necromancers, it pulses with malevolent energy, offering fleeting moments of luck or summoning whispers that demand tribute in blood. This shard is no mere trinket; its touch can either heal wounds or deal minor damage, depending on your fortune—or misfortune. Wario's interest lies solely in the rare, shimmering obsidian that adorns it, a testament to its dark origin and power.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🖤",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "summons_demonic_whispers",
      "healing_or_damage"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "giant_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Demonic Whispers",
        "rules": "Activating this shard rolls a d20. On an even number, you gain a +1 bonus to your next attack roll or saving throw at the start of your turn. On an odd result, a minor demonic echo appears, forcing you to make a DC 15 Wisdom saving throw or be frightened for 1 minute."
      },
      {
        "title": "Healing and Damage",
        "rules": "When used, this shard can either restore 3 hit points of damage to yourself or deal the same amount to an enemy. This effect is rolled on a d4; rolling a 4 restores healing, while any other roll deals damage."
      }
    ],
    "levelRequirementReason": "This shard's power is accessible to all adventurers, as its effects are unpredictable and can be beneficial or harmful.",
    "vendorReason": "Waterdeep Market offers a wide array of curiosities from various realms; the Obsidian Shard of Doom fits well within their offerings.",
    "shippingDetail": "Delivered swiftly by giant hawk, but only available during night hours when the market is bustling with activity.",
    "usage": {
      "activation": "Bonus action to activate; can be used once per short or long rest.",
      "duration": "Instantaneous effect upon activation.",
      "endsWhen": "Exhausted after one use per short or long rest.",
      "charges": "Unlimited uses, recharged at dawn."
    },
    "priceReason": "The shard's rarity and unpredictable nature justify its high price in the market.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T01:07:31.606805+00:00",
    "aiReviewedAt": "2026-07-25T01:07:31.606805+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronometric_bracelet": {
    "id": "almost_edge_item_chronometric_bracelet",
    "name": "The Time-Warping Band of the Edge",
    "description": "The Time-Warping Band of the Edge, crafted from ancient temporal eddies, is a delicate yet formidable bracelet that bends reality around its wearer. Its solidified time particles allow for brief manipulations of time, granting an edge in combat and exploration. The band's movements are as unpredictable as they are precise, ensuring a wearer never misses out on crucial moments while also risking the creation of unstable temporal anomalies.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Manipulation",
      "Speed Boost"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Quantum Delivery Service",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Temporal Manipulation",
        "rules": "As a reaction to a harmful effect, the wearer can briefly manipulate time for up to 5 seconds. During this time, they and their allies within a 10-foot radius gain advantage on Dexterity saving throws against effects that would restrain or slow them. This ability exhausts after use."
      },
      {
        "title": "Speed Boost",
        "rules": "The wearer's walking speed is increased by 20 feet for 5 minutes, enhancing their agility and mobility in challenging terrains. This effect cannot be used more than once per long rest."
      }
    ],
    "levelRequirementReason": "Only those with a solid grasp of the temporal arts can wield this delicate yet potent bracelet.",
    "vendorReason": "The Edge Wanderers have exclusive access to ancient crafting techniques, allowing them to produce such wondrous artifacts.",
    "shippingDetail": "Delivered via quantum courier, with a slight chance of temporal distortion delaying delivery by up to an hour.",
    "usage": {
      "activation": "Reaction or as a bonus action (Temporal Manipulation)",
      "duration": "5 seconds for Temporal Manipulation; 5 minutes for Speed Boost",
      "endsWhen": "Exhausts after use, recharges at the start of a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to allow players to purchase this item without disrupting game balance.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-25T01:07:17.836404+00:00",
    "aiReviewedAt": "2026-07-25T01:07:17.836404+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_oblivion_key": {
    "id": "almost_edge_item_oblivion_key",
    "name": "The Key to Unmaking",
    "description": "The Key to Unmaking is a frigid obsidian key that seems to suck the very light from its surroundings, casting an eternal twilight around it. Crafted by ancient beings who dabbled in forbidden arts, this relic can unlock not just storage rooms but entire realms of oblivion itself. Few dare use it for fear of inadvertently opening portals they cannot close. Wario's mercenary interests aside, the key is a veritable treasure trove of secrets—once you learn to wield its power without losing your sanity.",
    "category": "forbidden",
    "price": 65000,
    "icon": "🔑",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Void Teleport",
      "Resistance to Psychic Attacks"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Shadow Messenger",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Void Teleport",
        "rules": "As an action, the user can teleport a short distance into the void. The exact range is determined by the user's concentration and the key's power level. The effect lasts for 1 minute unless dismissed early. Targets have advantage on saving throws against this effect if they are within 30 feet. This ability uses up one charge."
      },
      {
        "title": "Resistance to Psychic Attacks",
        "rules": "The user gains a +2 bonus to all saving throws against psychic attacks for the duration of one short rest or until the key is recharged. The key can be recharged by spending 1 hour in a place of profound tranquility, such as a quiet forest or an ancient library."
      }
    ],
    "levelRequirementReason": "The Key to Unmaking requires significant mental fortitude and experience to wield its power without catastrophic consequences.",
    "vendorReason": "The Liminal Trader specializes in esoteric and forbidden items, making the Key's origins believable.",
    "shippingDetail": "Delivered through a network of dark alleys and shadowy couriers, ensuring the key arrives safely but not without a sense of foreboding.",
    "usage": {
      "activation": "As an action or reaction (to teleport), or as a bonus action (for resistance).",
      "duration": "Instantaneous for resistance; 1 minute for teleport.",
      "endsWhen": "The effect ends when the user dismisses it, completes one short rest, or runs out of charges.",
      "charges": "Limited to three uses per day."
    },
    "priceReason": "Despite its limited daily usage and the inherent risks, the key's legendary status and unique abilities justify this price.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T01:07:44.992430+00:00",
    "aiReviewedAt": "2026-07-25T01:07:44.992430+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sticky_sweet_scroll": {
    "id": "leclaire_isle_item_sticky_sweet_scroll",
    "name": "Sticky Sweet Scroll",
    "description": "The Sticky Sweet Scroll is crafted from layers of honey-glazed dough that shimmer with a sugary glaze, each scroll an edible masterpiece born in the kitchens of Dough Depot on Le Claire Isle. Unroll it to unleash a burst of sticky sweetness that slows enemies within reach and heals you by a modest amount. Beware, though—this confectionery spell is no mere candy; its effect lingers, ensuring your foes will have trouble moving for some time.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍬",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "heal_user_10",
      "slow_enemies_4"
    ],
    "vendor": "dough_depot",
    "shippedBy": "delivery_only",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Heal User",
        "rules": "When the scroll is unrolled and consumed, you gain temporary hit points equal to 10 + your level. This effect has no saving throw."
      },
      {
        "title": "Slow Enemies",
        "rules": "For 2 minutes after consuming the scroll, creatures within a 15-foot radius of you must make a Dexterity saving throw or have their speed reduced by half until the start of your next turn. This effect has no save DC."
      }
    ],
    "levelRequirementReason": "This scroll requires a minimum level to handle its potent effects.",
    "vendorReason": "Only Dough Depot can craft such confectionary masterpieces with the right balance of sweetness and potency.",
    "shippingDetail": "The scrolls are delivered fresh, ensuring they retain their sticky goodness upon arrival.",
    "usage": {
      "activation": "Consuming the scroll as an action",
      "duration": "1 minute for each use; ends when you take a short or long rest",
      "endsWhen": "At the end of your next turn after consuming it, or if you take a short or long rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted with rare ingredients and expert baking techniques, this scroll justifies its high price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T01:07:51.775517+00:00",
    "aiReviewedAt": "2026-07-25T01:07:51.775517+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_grandma_gourd_armor": {
    "id": "leclaire_isle_item_grandma_gourd_armor",
    "name": "Grandma Gourd Armor",
    "description": "Grandma Gourd Armor, forged by the legendary Dough Folk matriarch from a giant, magically reinforced gourd. This enchanted armor, though surprisingly comfortable to wear, offers protection only as long as you can bear its faint scent of cinnamon and the occasional whispering of doughy wisdom. The Gourd's magical weave grants resistance to fire damage, but at the cost of reduced movement speed—ten feet per turn. Should you disrobe or fall too close to open flames, this armor’s enchantment is forfeit.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "resistance_fire",
      "movement_speed_reduced"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "delivery_only",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Resistance Fire",
        "rules": "You gain resistance to fire damage while wearing Grandma Gourd Armor. This effect persists for the duration of your concentration, up to one minute."
      },
      {
        "title": "Movement Speed Reduced",
        "rules": "While you wear Grandma Gourd Armor, your walking speed is reduced by 10 feet until you remove the armor or are exposed to open flames within ten feet. Thereafter, this effect ends."
      }
    ],
    "levelRequirementReason": "This armor requires a high degree of concentration and physical fortitude that only a seasoned adventurer can muster.",
    "vendorReason": "The Pastry Palace specializes in items crafted from ingredients you might otherwise consume, making Grandma Gourd Armor an ideal addition to their inventory.",
    "shippingDetail": "Ships via a trusted courier who ensures the armor is delivered in its enchanted state, but may take up to two days depending on local conditions.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "1 minute (concentration); ends if you disrobe or are exposed to open flames within ten feet.",
      "endsWhen": "You lose concentration, remove the armor, or come into contact with open flames.",
      "charges": "Unlimited"
    },
    "priceReason": "The rare and mystical origin of this enchanted gourd makes it a valuable addition to any adventurer's gear, justifying its price in experience points.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:08:17.215440+00:00",
    "aiReviewedAt": "2026-07-25T01:08:17.215440+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_mythic_moonlit_meringue": {
    "id": "leclaire_isle_item_mythic_moonlit_meringue",
    "name": "Mythic Moonlit Meringue",
    "description": "The Mythic Moonlit Meringue, crafted during a lunar eclipse, is a delicate confection that tastes of starlight and dreams. As you bite into its crisp yet melting shell, visions of distant places and forgotten lore unfold before your eyes. The treat grants fleeting but potent magical abilities, enhancing your intelligence by two points for the next five seconds. However, prolonged indulgence in this dessert can lead to a sweet tooth that never quite satisfies.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grant_vision_5s",
      "increase_intelligence_2"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Moonlit Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Vision (5 seconds)",
        "rules": "When consumed, the Mythic Moonlit Meringue grants you the ability to see and perceive hidden details within your environment for a duration of 5 seconds. This effect is instantaneous upon consumption."
      },
      {
        "title": "Increase Intelligence +2",
        "rules": "For the next five seconds after consuming this meringue, your Intelligence score temporarily increases by two points. This bonus applies to any ability checks and saving throws made during that time."
      }
    ],
    "levelRequirementReason": "The simplicity of the meringue's ingredients and preparation make it accessible for even the lowest-level adventurers.",
    "vendorReason": "Sweet Supplies is known for its exotic and whimsical treats, making them the perfect purveyor of this lunar confection.",
    "shippingDetail": "Delivered only under a full moon; delays occur during waning or waxing phases.",
    "usage": {
      "activation": "Eaten as a consumable",
      "duration": "5 seconds",
      "endsWhen": "Time expires",
      "charges": "Unlimited"
    },
    "priceReason": "The Mythic Moonlit Meringue is priced at 1000 XP, reflecting its mythic rarity and the time-honored process of its creation.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-25T14:31:39.603047+00:00",
    "aiReviewedAt": "2026-07-25T14:31:39.603047+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_echo_resonance": {
    "id": "grand_country_echo_resonance",
    "name": "The Sound Weaver's Stone",
    "description": "The Sound Weaver's Stone hums with a pulsating energy, its surface etched with ancient runes that whisper of forgotten harmonics. Crafted in the heart of the Resonant Caverns by the enigmatic Weavers of Harmony, this stone can amplify sound to shatter solid rock or disorient foes with its deafening resonance. It's no wonder Wario endorses it, for its ability to create phantom echoes that dance in the air, making it a versatile tool for any adventurer.",
    "category": "services",
    "price": 1000,
    "icon": "🔊",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "sonic_blast",
      "phantom_echoes"
    ],
    "vendor": "side_seller",
    "shippedBy": "resonating_crate",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Sonic Blast",
        "rules": "As an action, you can focus the stone to create a burst of sound energy. This blast deals thunder damage equal to 1d8 + your proficiency bonus. The area is a 20-foot radius centered on you, and creatures within it must succeed on a DC 15 Dexterity saving throw or be deafened until the end of their next turn."
      },
      {
        "title": "Phantom Echoes",
        "rules": "Once per short rest, you can activate the stone to create an echoing sound that manifests as a spectral echo. This effect lasts for 1 minute and creates a harmless but disorienting sound wave within a 30-foot radius centered on you. Creatures in this area have disadvantage on attack rolls and saving throws while the echoes persist."
      }
    ],
    "levelRequirementReason": "Crafted using advanced alchemical techniques, the Sound Weaver's Stone requires a high level to harness its full potential.",
    "vendorReason": "The side seller has exclusive access to rare and powerful artifacts from the Resonant Caverns.",
    "shippingDetail": "Ships in a specially enchanted resonating crate that amplifies the stone's power during transit, doubling its effectiveness for one hour after arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Sonic Blast), 1 minute (Phantom Echoes)",
      "endsWhen": "The sound effect ends when you use it again or at the end of your next turn (for Sonic Blast); the phantom echoes dissipate after one minute.",
      "charges": "Unlimited, but only once per short rest for Phantom Echoes."
    },
    "priceReason": "The Sound Weaver's Stone is priced at 1000 XP due to its mythic rarity and the advanced craftsmanship required to create it.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-25T01:08:38.037548+00:00",
    "aiReviewedAt": "2026-07-25T01:08:38.037548+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_howler_stone": {
    "id": "animatopia_howler_stone",
    "name": "Howler Stone of the Primal Echoes",
    "description": "The Howler Stone of the Primal Echoes hums with ancient animatopsian energy, its surface etched with primal patterns that ripple like living stone. When you hold it and unleash a roar, the ground trembles and distant wildlife gather to listen, either in awe or alarm. Its calls can stun foes momentarily, leaving them dazed, while also granting you a temporary boost in animal handling, making you more adept at communing with nature's creatures.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐺",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Primal Roar",
      "Stun Chance"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "giant beetle courier",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Primal Roar",
        "rules": "As an action, you can focus the stone to unleash a primal roar. Creatures within 30 feet must succeed on a DC 14 Constitution saving throw or be stunned for 1 round. You gain advantage on Animal Handling checks for 1 hour."
      },
      {
        "title": "Stun Chance",
        "rules": "The primal roar has a 25% chance to stun any creature it affects, adding +3 to the DC of the saving throw against being stunned."
      }
    ],
    "levelRequirementReason": "Requires 9th level proficiency to harness the ancient energies of the Howler Stone.",
    "vendorReason": "The tribal trader, who has spent years in the heart of animatopsian territories, sells this relic from a distant land known for its mystical artifacts.",
    "shippingDetail": "Delivered by the swift and reliable giant beetles, who ensure safe passage through treacherous terrain.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; effect ends when you use it again or are incapacitated",
      "endsWhen": "You use your next turn without using it or become incapacitated",
      "charges": "Unlimited, recharged after a long rest"
    },
    "priceReason": "Balanced at 1000 XP, this stone retains its epic rarity while offering powerful but not overpowered abilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:08:38.526421+00:00",
    "aiReviewedAt": "2026-07-25T01:08:38.526421+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_berry_of_sweet_dreams": {
    "id": "animatopia_berry_of_sweet_dreams",
    "name": "Berry of Sweet Dreams (Tribal Edition)",
    "description": "The Berry of Sweet Dreams (Tribal Edition) are plump and iridescent, glowing faintly with a magical sheen. Gathered from the sacred groves of Animatopia by the Tribal Elders, these berries infuse your dreams with vivid imagery and subtle enchantment. Consuming one before bed grants you a fleeting reprieve from the world's troubles, allowing you to heal slightly and enhance your performance in the dream realm—perhaps even meeting ancient spirits or finding hidden treasures.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍓",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Dream Healing",
      "Enhanced Dreamscape"
    ],
    "vendor": "forest_market",
    "shippedBy": "swift hare express delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dream Healing",
        "rules": "When you consume a Berry of Sweet Dreams, you regain 10 hit points as you drift into slumber. This effect is instantaneous and does not require any action."
      },
      {
        "title": "Enhanced Dreamscape",
        "rules": "At the start of your first turn upon awakening, there's a 50% chance that you gain one of the following temporary positive status effects for 1 hour: advantage on saving throws against fear and charm effects, or a +2 bonus to any single ability check made during this session. The effect is instantaneous."
      }
    ],
    "levelRequirementReason": "The berries are accessible to all adventurers who wish to explore the dreamscape without prior experience.",
    "vendorReason": "The forest market has established a trade agreement with Animatopian tribes, allowing them to sell these sacred berries to travelers.",
    "shippingDetail": "Swiftly delivered within the night, ensuring you receive your dreams before dawn.",
    "usage": {
      "activation": "Instantaneous consumption before sleep",
      "duration": "Onset of slumber and until awakening",
      "endsWhen": "Upon waking; effect is temporary and lasts for 1 hour or until used up",
      "charges": "Unlimited, but one at a time per night"
    },
    "priceReason": "The berries are rare and require extensive magical rituals to harvest, justifying their high price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:08:32.877932+00:00",
    "aiReviewedAt": "2026-07-25T01:08:32.877932+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_whispering_winds": {
    "id": "teyvat_item_whispering_winds",
    "name": "Zephyr's Embrace Amulet",
    "description": "The Zephyr's Embrace Amulet shimmers with a soft azure light, its core a swirling vortex of wind that hums with untamed power. Crafted from ancient Barbatos' hair and enchanted by the windswept realms of Teyvat, this amulet grants an adventurer the swift reflexes to dodge projectiles and the grace to enhance their wind-based attacks. Its maker, a reclusive alchemist in Mondstadt, whispers that it channels the very essence of the winds themselves.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌬️",
    "stock": 75,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Wind Mastery",
      "Projectile Dodging"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_sprite",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Wind Mastery",
        "rules": "When you use an action or bonus action to attack with a wind-based weapon, you gain advantage on the attack roll. This effect lasts until the start of your next turn."
      },
      {
        "title": "Projectile Dodging",
        "rules": "You have a 10% chance to dodge a ranged attack each time you are targeted by one. This effect has no cooldown and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The amulet requires a level 8 character due to its intricate enchantments and the power it channels.",
    "vendorReason": "Mondstadt is known for its skilled artisans, and this amulet is one of their finest creations.",
    "shippingDetail": "Delivered by a swift Winged Sprite courier who ensures the amulet arrives in perfect condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until start of next turn or until the wearer's rest.",
      "endsWhen": "The effect ends when you take a short or long rest.",
      "charges": "Unlimited, recharges at dawn."
    },
    "priceReason": "While less powerful than some rare items, this amulet offers unique benefits that are highly valuable to wind-based fighters and archers.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:09:08.231838+00:00",
    "aiReviewedAt": "2026-07-25T01:09:08.231838+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_chronos_fragment": {
    "id": "teyvat_item_chronos_fragment",
    "name": "Echo of Eternity Pendant",
    "description": "The Echo of Eternity Pendant is a shimmering obsidian pendant said to be a shard from the Chronus Archon’s loom. Crafted with ancient runes and bound by the winds of time, it grants its wearer the power to manipulate temporal flow. When activated, it slows enemies' movements by 30% for 10 seconds and accelerates allies' speed by 20%. The pendant's energy is drawn from the fabric of time itself, making each use a fleeting glimpse into the eternal dance between past and future.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 15,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "slow_enemy_speed",
      "increase_ally_speed"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "phantom_ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slow Enemy Speed",
        "rules": "The wearer can activate this effect as a bonus action. It lasts for 10 seconds, during which time all enemies within 30 feet have their speed reduced by 30%. This effect has no save DC and does not expend charges."
      },
      {
        "title": "Increase Ally Speed",
        "rules": "The wearer can activate this effect as a bonus action. It lasts for 10 seconds, during which time all allies within 30 feet have their speed increased by 20%. This effect has no save DC and does not expend charges."
      }
    ],
    "levelRequirementReason": "This pendant's power is accessible to anyone who can afford its price, as it grants a fundamental temporal manipulation ability.",
    "vendorReason": "Inazuma Imports specializes in ancient relics and curiosities from various planes, making the Echo of Eternity Pendant a fitting addition to their collection.",
    "shippingDetail": "The pendant is couriered by the Phantom Ship, known for its swift and reliable delivery services.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds",
      "endsWhen": "The effect ends when it runs out of duration or the wearer uses another ability that interrupts this effect.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects a moderate mythic rarity, balancing its powerful temporal effects with other comparable items.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-25T01:08:57.050164+00:00",
    "aiReviewedAt": "2026-07-25T01:08:57.050164+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_wind_whisper_rune": {
    "id": "teyvat_item_wind_whisper_rune",
    "name": "Wind Whisper Rune of Kusanagi",
    "description": "The Wind Whisper Rune of Kusanagi, forged by ancient spirits and bound in an intricate lattice of Anemo energy, hums with the whispering winds of the Kujou domain. It grants you a fleeting connection to the wind itself, allowing for bursts of incredible speed and enhanced agility. A perfect companion for those who dance lightly on the battlefield, but beware—do not sneeze; it could disrupt your harmony with the wind.",
    "category": "equipment",
    "price": 1000,
    "icon": "💨",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "movement_speed_increase",
      "dodge_chance_increase"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "lightning_kite",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wind Dash",
        "rules": "As a bonus action, you can dash in any direction up to 60 feet. This movement does not provoke opportunity attacks and grants temporary resistance to knockback for the duration of your next turn."
      },
      {
        "title": "Enhanced Agility",
        "rules": "+20% to Dexterity saving throws and a +15 bonus on Acrobatics checks, both lasting until you rest."
      }
    ],
    "levelRequirementReason": "This rune is a foundational tool for anyone seeking to enhance their agility and speed.",
    "vendorReason": "Inazuma Imports specializes in unique, mythic artifacts that empower the adventurous soul.",
    "shippingDetail": "Delivered by a swift, ethereal creature of the wind, ensuring your rune arrives just before you need it most.",
    "usage": {
      "activation": "Bonus action for Wind Dash; passive effect for Enhanced Agility.",
      "duration": "Instantaneous dash; Enhanced Agility lasts until you rest.",
      "endsWhen": "Wind Dash ends on your next turn if you are incapacitated or fall unconscious. Enhanced Agility ends when you take a short or long rest.",
      "charges": "Unlimited, as it is a passive effect."
    },
    "priceReason": "Balanced at 1000 XP, this rune offers significant benefits without overshadowing other key abilities.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T14:31:43.766017+00:00",
    "aiReviewedAt": "2026-07-25T14:31:43.766017+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_archon_reading": {
    "id": "teyvat_item_archon_reading",
    "name": "Archon’s Insight Session",
    "description": "Engage in an illuminating session with Archon, a seasoned scholar whose wisdom is as legendary as her insight. For a brief period, you will delve into the arcane and uncover truths hidden deep within your soul. Her cryptic advice could reveal your greatest desires or challenge you to reflect on your deepest fears—perhaps even suggesting you savor some of Liyue Harbor's renowned dumplings for courage. This truly is an enlightening experience, albeit one that leaves you pondering more than it answers.",
    "category": "services",
    "price": 1000,
    "icon": "🔮",
    "stock": 95,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "insight_into_self",
      "dumpling_advice"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "cart_of_scrolls",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Insight into Self",
        "rules": "On a successful DC 15 Wisdom (Insight) check, the Archon provides you with an insight that grants advantage on one ability check of your choice. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Dumpling Advice",
        "rules": "As part of this session, you are advised to eat more dumplings, which offers a +2 bonus to your Charisma (Persuasion) checks for 1 hour. This effect ends when you spend the next long rest."
      }
    ],
    "levelRequirementReason": "This service is accessible to all adventurers, regardless of level, as it offers valuable wisdom and practical advice.",
    "vendorReason": "Liyue Harbor's scholars are renowned for their vast knowledge and insightful guidance, making Archon’s sessions a must for any visitor seeking enlightenment.",
    "shippingDetail": "The cart delivers the scholar to your doorstep, ensuring you receive her wisdom promptly after payment.",
    "usage": {
      "activation": "As an action",
      "duration": "Instantaneous (effect lasts until end of next long rest)",
      "endsWhen": "At the end of the next long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects a balanced value for an unparalleled session with a renowned scholar, offering both practical and introspective benefits.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T14:31:56.830893+00:00",
    "aiReviewedAt": "2026-07-25T14:31:56.830893+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_political_plea": {
    "id": "midlands_item_political_plea",
    "name": "A Diplomat's Calculated Words",
    "description": "A Diplomat's Calculated Words are polished stones inscribed with persuasive phrases and subtly imbued with the scent of rare, aromatic incense. Crafted in the heart of the Midlands by skilled artisans, these stones offer a subtle yet potent influence when presented to wary nobles or corrupt officials. When used, there is a 15% chance that a suspicious encounter becomes cooperative, and a 5% chance it results in favorable terms for your next negotiation. These artifacts are as much about timing and delivery as they are about the words themselves.",
    "category": "services",
    "price": 1000,
    "icon": "🗣️",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "persuade_with_words",
      "favorable_negotiation"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Persuade With Words",
        "rules": "When presented to a suspicious noble or corrupt official, there is a 15% chance that the encounter becomes cooperative. This effect has no save DC and can be used once per day."
      },
      {
        "title": "Favorable Negotiation",
        "rules": "There is a 5% chance that your next negotiation results in favorable terms. This effect has no save DC and can be used once per day."
      }
    ],
    "levelRequirementReason": "Crafted with complex enchantments, these stones require at least first-level expertise to wield effectively.",
    "vendorReason": "The Empire Exchange is known for its wide array of rare and exotic goods, including items that enhance social interactions.",
    "shippingDetail": "The stones are carefully wrapped in parchment to ensure they arrive undisturbed.",
    "usage": {
      "activation": "Interacting with a suspicious noble or official during an encounter allows you to use this item.",
      "duration": "Instantaneous effect upon presentation and interaction.",
      "endsWhen": "Used up after one successful attempt per day.",
      "charges": "Unlimited uses, but only one attempt is allowed per day."
    },
    "priceReason": "Crafted with rare materials and complex enchantments, the Diplomat's Calculated Words are valued for their unique social advantages in high-stakes situations.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T01:09:23.251558+00:00",
    "aiReviewedAt": "2026-07-25T01:09:23.251558+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_royal_armor_shard": {
    "id": "equestria_item_royal_armor_shard",
    "name": "Royal Armor Shard",
    "description": "A gleaming shard of ancient Royal Armor, this fragment once belonged to a legendary knight who defended Equestria's crown. Though incomplete, it pulses with potent magic that grants its wearer an aura of invulnerability, defying the mightiest of magical attacks and deflecting projectiles with uncanny precision. Crafted from enchanted metals, this shard is a relic of valor, passed down through generations to protect the realm’s most trusted knights.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Armor Class +3",
      "Deflect Magical Attacks"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Messenger Gryphon",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Armor Class +3",
        "rules": "While wearing this shard, you gain a bonus of +3 to your Armor Class. This effect is active as long as the shard remains on your person."
      },
      {
        "title": "Deflect Magical Attacks",
        "rules": "When a magical attack targets you, there's a 20% chance that the shard deflects the attack entirely. If successful, the attacker takes no damage from this attack and must make a Wisdom saving throw (DC 13) or be temporarily disoriented for 1 minute."
      }
    ],
    "levelRequirementReason": "This relic is designed to complement the expertise of seasoned knights with experience in magical combat.",
    "vendorReason": "Canterlot's finest armorers curate this rare shard, ensuring it finds its way into the hands of those who can wield its power responsibly.",
    "shippingDetail": "The Royal Messenger Gryphons deliver this item with utmost haste, ensuring that knights in need receive their protection without delay.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous; recharges after a long rest",
      "endsWhen": "Destroyed if exposed to fire for more than 1 round",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's rarity and the expertise required to wield it justify its modest price, making it a worthwhile investment for seasoned knights.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T01:10:03.036417+00:00",
    "aiReviewedAt": "2026-07-25T01:10:03.036417+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_harmony_scroll": {
    "id": "equestria_item_harmony_scroll",
    "name": "Harmony Scroll of Serenity",
    "description": "The Harmony Scroll of Serenity, penned by a wise old unicorn, exudes an ethereal glow that quiets the chaotic heart of battlefields and restores harmony to the battlefield. Unfurling it creates a shimmering aura that reduces nearby aggression by 20% for all allies, and each party member gains +1 healing potency for 6 turns. This ancient artifact is best used in moments when peace is scarce and conflict rages high.",
    "category": "premium",
    "price": 1000,
    "icon": "☮️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Reduces enemy aggression",
      "Boosts healing magic"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Mystic Delivery Portal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Aggression Reduction",
        "rules": "When the scroll is unrolled, all enemies within a 10-foot radius have their attack rolls reduced by 2 for 6 turns. This effect ends if the scroll is destroyed or if an enemy moves more than 5 feet away."
      },
      {
        "title": "Healing Boost",
        "rules": "For each party member, healing magic potency is increased by +1 for 6 turns when the scroll's aura is active. This boost lasts until a long rest or until the scroll is destroyed."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to use this artifact effectively in battle.",
    "vendorReason": "The Crystal Empire, known for its ancient knowledge and magical artifacts, is the only place where such a scroll can be found.",
    "shippingDetail": "Ships via mystical courier within 24 hours of purchase; delivery includes a protective aura to ensure safe arrival.",
    "usage": {
      "activation": "Standard Action",
      "duration": "6 turns per use",
      "endsWhen": "The scroll is destroyed or the effect's duration ends",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "Balanced for level 5 characters, this scroll provides a significant advantage in combat without being overpowered.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-25T14:32:21.893086+00:00",
    "aiReviewedAt": "2026-07-25T14:32:21.893086+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronal_crumbs": {
    "id": "almost_edge_item_chronal_crumbs",
    "name": "Chronal Crumbs",
    "description": "Chronal Crumbs are shimmering, time-worn fragments that taste faintly of forgotten timelines and existential dread. Consuming these crumbs offers a brief glimpse into possible futures, though the visions can be unsettling and may leave you with an irresistible urge to rearrange your socks. These ephemeral tidbits of reality can also grant a momentary boost in wisdom, but at a cost—there's always a chance they might induce temporary madness, turning you confused or berserk depending on fate’s whims.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 33,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Glimpse",
      "Wisdom Boost"
    ],
    "vendor": "void_merchant",
    "shippedBy": "cosmic courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Glimpse",
        "rules": "Consume Chronal Crumbs to gain a momentary boost in wisdom. This effect grants +1 to your Wisdom modifier for the next three turns. There is a chance (50%) that consuming them will cause you to become either confused or berserk, depending on the roll of a d6: 1-3 = confused, 4-6 = berserk."
      },
      {
        "title": "Wisdom Boost",
        "rules": "After consuming Chronal Crumbs, you gain a +1 bonus to your Wisdom score for three turns. This effect is instantaneously applied upon consumption and lasts until the start of your next turn after the third one. There is a 50% chance that this effect will also cause temporary madness: on a roll of d6, 1-3 results in confusion, while 4-6 leads to berserk behavior."
      }
    ],
    "levelRequirementReason": "Chronal Crumbs are accessible to all adventurers who have the curiosity and bravery to explore the mysteries of time.",
    "vendorReason": "The Void Merchant, a mysterious figure from beyond the stars, is known for trading in items that bend reality and time. Chronal Crumbs fit perfectly within their portfolio.",
    "shippingDetail": "Chronal Crumbs are delivered via the Cosmic Courier, an ancient entity capable of traveling through dimensions to ensure timely delivery.",
    "usage": {
      "activation": "Consume one Chronal Crumb as a bonus action.",
      "duration": "Instantaneous effect; lasts for three turns after consumption.",
      "endsWhen": "The effect ends when the duration expires or you are incapacitated, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "Chronal Crumbs offer a unique and potentially hazardous glimpse into time, making them valuable yet balanced for an epic level adventurer.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:11:13.002433+00:00",
    "aiReviewedAt": "2026-07-25T01:11:13.002433+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_echoing_bracers": {
    "id": "almost_edge_item_echoing_bracers",
    "name": "Echoing Bracers of the Void",
    "description": "The Echoing Bracers of the Void are forged from the very essence of forgotten realities and silence itself, granting their wearer a connection to the void's ethereal currents. By pulsating with the whispers of lost dimensions, these bracers allow you to briefly phase through solid objects, but prolonged use can unhinge your mind, causing a haunting resonance within. The bracers hum faintly, drawing the attention of ancient void entities.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌌",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Phasing Through Objects",
      "Attract Void Entities"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "black pigeon",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Phasing Through Objects",
        "rules": "As an action, you can attempt to phase through one non-magical object. The DC for this check is 15. If successful, you pass through the object as if it were air. This effect lasts until your next turn."
      },
      {
        "title": "Attract Void Entities",
        "rules": "As a consequence of your connection to the void, there's a 20% chance that you attract the attention of void entities whenever you use this ability. Creatures within 30 feet can attempt a Wisdom saving throw (DC 14) or be drawn into the void."
      }
    ],
    "levelRequirementReason": "The bracers require a certain level to wield their power, ensuring they are not overpowered for lower-level characters.",
    "vendorReason": "The edge wanderers have a deep connection with the void and its mysteries, making them the perfect vendors for such an item.",
    "shippingDetail": "Delivered swiftly by the black pigeon courier, these bracers arrive in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends at the start of your next turn or when you use this ability again.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to provide a flavorful yet balanced addition to any adventurer's arsenal without being overpowered.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:10:34.250394+00:00",
    "aiReviewedAt": "2026-07-25T01:10:34.250394+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_dwarven_hammer_of_rumble": {
    "id": "middle_earth_dwarven_hammer_of_rumble",
    "name": "Dwarven Hammer of Rumble",
    "description": "The Dwarven Hammer of Rumble, forged in the heart of the Iron Hills by master dwarven artisans, resonates with untamed fury. Its weighty head is adorned with ancient runes that glow faintly, and its handle is crafted from the gnarled wood of the mountain ash. Legend has it that this hammer can shatter stone like glass and leave goblins dazed in its wake. Strike true, and the earth itself trembles beneath your feet.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 3,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Increased Damage",
      "Stunning Blow"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Increased Damage",
        "rules": "When you hit a target with this hammer, it deals an additional 50% damage to the target. This effect has no save DC and does not consume charges or uses."
      },
      {
        "title": "Stunning Blow",
        "rules": "Once per short rest, when you strike a creature with this hammer, there is a 15% chance that it becomes stunned for 1 round. The target can use its reaction to avoid the effect by making a Dexterity saving throw (DC = 13). This effect has no save DC and does not consume charges or uses."
      }
    ],
    "levelRequirementReason": "The intricate forging and potent magic embedded in this hammer require a high degree of skill to wield effectively.",
    "vendorReason": "Only the most trusted artisans from Dwarven Forge can handle such a powerful and sacred relic.",
    "shippingDetail": "The hammer is delivered via dragon courier, ensuring swift and safe transport through treacherous terrains.",
    "usage": {
      "activation": "On hit with this weapon.",
      "duration": "Instantaneous; ends when the attack ends or if the target makes a successful saving throw.",
      "endsWhen": "The effect ends immediately upon a successful save by the target.",
      "charges": "Unlimited"
    },
    "priceReason": "This hammer's unique crafting and potent effects justify its moderate price, aligning with its rarity.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:11:01.565675+00:00",
    "aiReviewedAt": "2026-07-25T01:11:01.565675+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_potion_of_berserk": {
    "id": "faerun_item_potion_of_berserk",
    "name": "Potion of Unbridled Rage",
    "description": "The Potion of Unbridled Rage, crafted by a cantankerous gnome, exudes an eerie blue glow and tastes suspiciously like a mix of blueberries and fury. Drink it hastily, for once consumed, you will find yourself in heated debates with woodland sprites over the proper stacking techniques for firewood. The effects are as unpredictable as they are intense; your attacks become devastating, but at the cost of your tactical acumen and the risk of uncontrollable rage.",
    "category": "consumables",
    "price": 1000,
    "icon": "💥",
    "stock": 38,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Berserk Attacks",
      "Mental Fuzziness"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying carpet",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Berserk Attacks",
        "rules": "Upon activation, you gain a +50% bonus to melee attack rolls for 6 turns. This effect ends if you take any non-lethal damage or are reduced to 0 hit points."
      },
      {
        "title": "Mental Fuzziness",
        "rules": "You suffer a -10% penalty to your Intelligence score, which lasts until the end of your next long rest. The risk of entering a berserk state increases by 25%, making you more prone to losing control."
      }
    ],
    "levelRequirementReason": "This potion is designed for experienced adventurers who can handle its volatile effects without compromising their sanity.",
    "vendorReason": "The eccentric gnome brewers at Baldur's Bazaar are known to stock unique and potent concoctions, making this potion a fitting addition.",
    "shippingDetail": "Delivered swiftly by enchanted flying carpets, ensuring the potion remains potent throughout its journey.",
    "usage": {
      "activation": "Drink the potion as an action.",
      "duration": "6 turns of enhanced attack power and mental impairment.",
      "endsWhen": "You take non-lethal damage or are reduced to 0 hit points.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Balanced for its risk and reward, the potion's price reflects its volatile nature and potential for disaster.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:11:20.581198+00:00",
    "aiReviewedAt": "2026-07-25T01:11:20.581198+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_scroll_of_temporal_shift": {
    "id": "faerun_item_scroll_of_temporal_shift",
    "name": "Scroll of Temporal Hiccup",
    "description": "This ancient scroll, penned by a chronomancer who clearly had too much time on his hands, allows you to briefly rewind or fast forward your immediate surroundings. The ink glows faintly with an otherworldly light, and the parchment feels both warm and slightly damp as if it were written in a perpetual rain. Just don't use it in a crowded marketplace – trust me; the resulting paradoxes are unpredictable at best.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Rewind",
      "Temporal Leap"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Temporal Rewind",
        "rules": "As an action, you can rewind time in a 5-foot radius for 3 seconds. Any creature or object within this area is affected as if they were moving backward through time. This effect has a chance of causing temporal paradoxes (1%)."
      },
      {
        "title": "Temporal Leap",
        "rules": "As an action, you can fast forward time in a 5-foot radius for 3 seconds. Any creature or object within this area is affected as if they were moving forward through time. This effect has a chance of causing temporal paradoxes (1%)."
      }
    ],
    "levelRequirementReason": "Requires a higher level to harness the unpredictable and dangerous nature of manipulating time.",
    "vendorReason": "Waterdeep's Market is known for its rare and exotic wares, including ancient and powerful artifacts like this scroll.",
    "shippingDetail": "Shipped via a dimensional portal; arrives within the week but with a slight chance of arriving out of phase due to the item’s unstable nature.",
    "usage": {
      "activation": "Action or Reaction (to prevent immediate effects)",
      "duration": "Instantaneous effect, lasting 3 seconds",
      "endsWhen": "The temporal shift ends when time catches up",
      "charges": "1 use per day"
    },
    "priceReason": "Balanced at 1000 XP as a daily-use epic item with unpredictable consequences.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T01:11:35.249291+00:00",
    "aiReviewedAt": "2026-07-25T01:11:35.249291+00:00",
    "aiReviewVersion": 1
  },
  "chaos_voidstone": {
    "id": "chaos_voidstone",
    "name": "Voidstone of Unmaking",
    "description": "The Voidstone of Unmaking is a pulsating orb of solidified chaos, its surface etched with swirling void runes. When touched briefly, it disrupts magic spells with a 5% chance to nullify their effects but also carries the risk of causing temporary madness in the wielder (10%) and attracting unwanted attention from malevolent entities (20%). This artifact is crafted by shadowy alchemists who dabble in forbidden magics and is shipped with utmost secrecy via the Shadow Courier, ensuring its arrival remains cloaked in darkness.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "spell-disruption",
      "madness_risk"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Spell Disruption",
        "rules": "When activated as a bonus action within 5 feet of an active spell effect, there is a 5% chance to nullify the spell's effects. This effect ends immediately upon activation."
      },
      {
        "title": "Madness Risk",
        "rules": "There is a 10% chance that the user suffers from temporary madness after using the Voidstone. The madness lasts for 1d4 hours and imposes the 'mad' condition, reducing Wisdom by 2 (to a minimum of 2) until it wears off."
      }
    ],
    "levelRequirementReason": "The Voidstone's chaotic power demands a significant amount of magical discipline to wield without risk.",
    "vendorReason": "Only the Chaos Dealer, known for dealing in forbidden and dangerous items, dares to sell such an artifact.",
    "shippingDetail": "The Shadow Courier ensures the Voidstone's arrival is cloaked in darkness and secrecy, adding a +2 bonus to Stealth checks made by the user upon receiving it.",
    "usage": {
      "activation": "Bonus action within 5 feet of an active spell effect",
      "duration": "Instantaneous; ends on activation",
      "endsWhen": "Activation",
      "charges": "Unlimited, but requires a short rest to recover from the 'mad' condition"
    },
    "priceReason": "The Voidstone's rarity and inherent risks justify its moderate price in terms of XP.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T01:11:23.746249+00:00",
    "aiReviewedAt": "2026-07-25T01:11:23.746249+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_chronos_shard": {
    "id": "midlands_item_chronos_shard",
    "name": "Fragment of Frozen Time",
    "description": "A Fragment of Frozen Time glimmers with a cold, pulsing light that seems to warp reality around it. Touch this shard and time itself slows for you, granting an unnerving agility unmatched by any mortal. Yet beware; prolonged contact can freeze your perception entirely, leaving you unable to act or react. This relic is said to have been crafted in the icy depths of ancient glaciers, where time stands still.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Temporal Slow",
      "Freeze Perception"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "Activating this fragment by touching it grants you a bonus action that allows you to move up to your speed plus an additional 30 feet. This effect lasts for 1 minute, but ends early if you take any damage or end your turn in a different space."
      },
      {
        "title": "Freeze Perception",
        "rules": "There is a 5% chance each time the fragment is activated that it will briefly freeze an enemy within 30 feet of you for 1d4 rounds. The target must make a DC 15 Dexterity saving throw or be immobilized by the cold, still gaze."
      }
    ],
    "levelRequirementReason": "The relic's power is too great to handle without proper training and experience.",
    "vendorReason": "Master Forger Pauline personally crafts these relics from ancient glaciers, ensuring their authenticity and power.",
    "shippingDetail": "Ships through the Dimensional Portal with a 1-day delay due to its fragile nature.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until you take damage or end your turn in a different space",
      "endsWhen": "Damage or moving to another space ends the effect; no recharge between uses",
      "charges": "Unlimited, as long as it remains intact"
    },
    "priceReason": "The relic's mythic rarity and ancient craftsmanship justify its price in experience points.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-25T01:12:31.432457+00:00",
    "aiReviewedAt": "2026-07-25T01:12:31.432457+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_chronos_shard": {
    "id": "the_edge_item_chronos_shard",
    "name": "Fragment of the Endless Hourglass",
    "description": "The Fragment of the Endless Hourglass is a jagged, pulsating shard that captures fleeting moments of time itself. Its surface shimmers with frozen echoes of past and future alike. Holding it grants you a brief glimpse into potential futures, but prolonged focus can unravel your present reality, leaving you disoriented. Wario's cryptic endorsement suggests it's 'totally worth the risk' for those who dare to venture into its depths.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Temporal Vision",
      "Fleeting Insight"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Vision",
        "rules": "When you hit with a critical strike, there is a 50% chance that time rewinds by exactly 3 seconds for all creatures within a 10-foot radius. This effect ends if you take damage or move out of the area."
      },
      {
        "title": "Fleeting Insight",
        "rules": "For 60 seconds, your perception increases by 20%. This effect ends upon your next long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for those who have the knowledge and discipline to handle its temporal effects without succumbing to their dangers.",
    "vendorReason": "The Abyss Trader specializes in rare and dangerous artifacts, making it a fitting vendor for such an unpredictable item.",
    "shippingDetail": "Ships via interdimensional rift, delivery time varies but is typically within 48 hours.",
    "usage": {
      "activation": "On critical hit only (Temporal Vision). Passive effect during duration of Fleeting Insight.",
      "duration": "Instantaneous for Temporal Vision; 60 seconds for Fleeting Insight.",
      "endsWhen": "On damage or movement out of radius for Temporal Vision; ends with a long rest for Fleeting Insight.",
      "charges": "Unlimited, but limited by the item's stability."
    },
    "priceReason": "The item is priced at 1000 XP due to its mythic rarity and the risk involved in handling it safely.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-25T14:32:11.768943+00:00",
    "aiReviewedAt": "2026-07-25T14:32:11.768943+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_resonance_stone": {
    "id": "the_edge_item_resonance_stone",
    "name": "Echoing Stone of Silence",
    "description": "The Echoing Stone of Silence is a smooth, obsidian stone that hums with the suppressed whispers of lost souls. When held in your hand, it can momentarily disrupt magical energies, silencing spells cast upon you or nearby allies and reducing the duration of illusion effects by half. This handy tool is perfect for bypassing tricky traps set by cunning foes like Wario's, though its true power lies in its ability to act as a heavy-duty paperweight against even the most insistent books.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌑",
    "stock": 99,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Silence Spell",
      "Reduce Duration of Illusions"
    ],
    "vendor": "final_shop",
    "shippedBy": "swift_current",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silence Spell",
        "rules": "When you activate the stone, you can silence one spell affecting a creature within 30 feet. The target must make a Wisdom saving throw (DC 14) or be silenced for 1 minute. This effect does not stack with other silence effects."
      },
      {
        "title": "Reduce Duration of Illusions",
        "rules": "For every hour you hold the stone, any illusion affecting creatures within 30 feet is reduced by half its duration. After one hour, this effect expires, but it can be refreshed once per long rest."
      }
    ],
    "levelRequirementReason": "This stone's power lies in its ability to temporarily disrupt magic and illusions, making it accessible to lower-level characters.",
    "vendorReason": "The final shop often stocks unique items that adventurers need for their most pressing needs, including this handy tool for handling magical threats.",
    "shippingDetail": "Swift Current ensures safe and timely delivery of the Echoing Stone of Silence to your doorstep.",
    "usage": {
      "activation": "A bonus action is required to activate the stone's effects.",
      "duration": "Silence lasts for 1 minute, while reducing illusion durations is a one-time effect per hour.",
      "endsWhen": "The spell ends when its duration expires or it is dispelled. Reducing illusion durations expires after one hour of continuous use.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Echoing Stone of Silence offers significant utility against magic and illusions, making it a valuable addition to any adventurer's arsenal at this price.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-25T01:12:39.678638+00:00",
    "aiReviewedAt": "2026-07-25T01:12:39.678638+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_crumb_of_absence": {
    "id": "doughnut_hole_crumb_of_absence",
    "name": "Fragment of the Unmade",
    "description": "The Fragment of the Unmade is a cold, pulsating crumb that hovers in your palm like a remnant from the void. Its grey surface seems to stretch and distort with each passing moment, a testament to existence itself. Holding it can momentarily blur the edges between reality and non-being, causing a fleeting lapse in perception. This crumb's very touch is almost magnetic, drawing you into its unsettling embrace.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 15,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "void_surge",
      "reality_distortion"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Void Surge",
        "rules": "When activated as an action, the Fragment releases a surge of void energy that deals 1d8 necrotic damage to all creatures within 5 feet. This effect has a daily use limit and ends when used."
      },
      {
        "title": "Reality Distortion",
        "rules": "The Fragment grants a +2 bonus to your saving throws against illusions for one minute upon activation as a reaction. This effect can be triggered once per short or long rest, with the duration ending at the start of your next turn after use."
      }
    ],
    "levelRequirementReason": "The Fragment's raw potential requires a level of understanding in magical theory and control.",
    "vendorReason": "Hole Hawker, with her knack for the unexplained, has found this fragment among her most enigmatic wares.",
    "shippingDetail": "Carefully sealed within a rift-stabilized container to prevent any unwanted dimensional leaks during transit.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous or One Minute",
      "endsWhen": "Used, Recharge after 8 hours of rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced with a mythic rarity and the potential to disrupt reality.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T01:11:50.582147+00:00",
    "aiReviewedAt": "2026-07-25T01:11:50.582147+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_void_grappling_hook": {
    "id": "doughnut_hole_void_grappling_hook",
    "name": "Anchor of the Abyss",
    "description": "The Anchor of the Abyss is a peculiar grappling hook, crafted from an unknown metal that seems to bend time itself. Its body glows faintly with an eerie, shifting light, and it smells strongly of burnt sugar mixed with the acrid tang of forgotten depths. This relic subtly warps space around you, pulling you towards any nearby void anomaly, making you immune to falling damage and granting a brief burst of speed when activated.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔗",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "voidwarden_pull",
      "fall_immunity"
    ],
    "vendor": "void_vendor",
    "shippedBy": "gravitational_wave",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Voidwarden Pull",
        "rules": "As an action, you can point the hook at a void anomaly within 60 feet. On a successful hit, it pulls you and any creatures you designate towards the anomaly with a force that can be resisted with a DC 15 Strength saving throw."
      },
      {
        "title": "Fall Immunity",
        "rules": "While grappling onto an anchored surface, you gain immunity to falling damage. This effect lasts until the end of your next turn after activation."
      }
    ],
    "levelRequirementReason": "This item's unique properties and rarity necessitate a higher level requirement.",
    "vendorReason": "Void Vendor specializes in rare artifacts from other dimensions, making the Anchor of the Abyss an ideal addition to their inventory.",
    "shippingDetail": "Ships via Gravitational Wave Express, delivering within one week. Requires special handling and must be signed for by a level 8 or higher character.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous pull effect; lasts until the end of your next turn after activation.",
      "endsWhen": "The pull effect ends when you are no longer adjacent to the anchored surface, and fall immunity ends at the end of your next turn.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item's unique void-related abilities and rarity justify its price in excess of a standard rare item.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:12:17.573400+00:00",
    "aiReviewedAt": "2026-07-25T01:12:17.573400+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_anomaly_symbiont_token": {
    "id": "doughnut_hole_anomaly_symbiont_token",
    "name": "Key to the Unstable Core",
    "description": "The Key to the Unstable Core is a shimmering, iridescent token that hums with chaotic energy. When held, it grants a fleeting glimpse into realities that should not exist, blurring the lines between worlds. Its touch leaves you craving sweet pastries, as if your very soul yearns for something sugary and delightful. This artifact's power is unpredictable, often creating minor gravitational anomalies that shift the balance of nearby objects.",
    "category": "faction",
    "price": 1000,
    "icon": "🌀",
    "stock": 50,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "glance_into_alternate_realities",
      "sugary_cravings"
    ],
    "vendor": "center_seller",
    "shippedBy": "temporal_package",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Glance into Alternate Realities",
        "rules": "As a bonus action, you can briefly glimpse alternate realities. This effect lasts for 1 minute and has a range of 30 feet. Any creature within this radius must succeed on a DC 14 Wisdom saving throw or become confused until the end of your next turn."
      },
      {
        "title": "Sugary Cravings",
        "rules": "While holding the key, you are compelled to seek out sugary treats. This compulsion is not overwhelming but constant, affecting your decisions and actions. You must make a Wisdom saving throw (DC 15) at the start of each long rest or gain advantage on all Charisma-based checks for the day."
      }
    ],
    "levelRequirementReason": "This key requires a certain level to handle its chaotic and unpredictable nature.",
    "vendorReason": "Center Seller deals in relics of power, making this unique artifact an appropriate addition to their inventory.",
    "shippingDetail": "The key is carefully packed with temporal inhibitors to prevent any gravitational anomalies from affecting the shipping process.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute",
      "endsWhen": "Ends when you stop concentrating or are incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the item's unpredictable nature and its ability to create minor gravitational anomalies.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:12:35.899524+00:00",
    "aiReviewedAt": "2026-07-25T01:12:35.899524+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_pack": {
    "id": "connectopia_pioneer_pack",
    "name": "Survival Starter Kit",
    "description": "The Survival Starter Kit is a rugged and indispensable pack designed for fledgling pioneers. Crafted from durable Connectopian leather, it contains three days' worth of rations that taste suspiciously like Wario's overcooked meals, a precision-engineered compass that always points to the nearest town, and a grappling hook that can secure you to any surface with a satisfying 'clang'. Pioneers swear by its effectiveness in emergencies. Testing it against giant blocks is not recommended for beginners.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧭",
    "stock": 23,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "resource_prolongation",
      "compass_accuracy"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Wario's Expedition Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resource Prolongation",
        "rules": "This kit provides three days' worth of rations that are surprisingly filling despite their questionable taste. The effects last until the provisions are consumed, providing a +2 bonus to saving throws against starvation and dehydration."
      },
      {
        "title": "Compass Accuracy",
        "rules": "The precision-engineered compass ensures you're always heading in the right direction towards the nearest town or landmark. It has no save requirement but must be recalibrated every 10 miles of travel. The effect lasts until recalibration is performed."
      }
    ],
    "levelRequirementReason": "This kit is essential for beginners, providing basic survival tools without overwhelming advanced adventurers.",
    "vendorReason": "The Pioneer Post specializes in gear and supplies needed by those who venture into the wilds of Connectopia.",
    "shippingDetail": "Ships via Wario's reliable, though sometimes delayed, transport service. Delivery can take up to a week depending on traffic.",
    "usage": {
      "activation": "Passive effect upon opening the kit.",
      "duration": "Until provisions are consumed or compass recalibrated.",
      "endsWhen": "Kit is empty of rations or compass recalibrated.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price for its essential survival tools, making it a crucial purchase for any adventurer starting their journey.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T01:12:53.011727+00:00",
    "aiReviewedAt": "2026-07-25T01:12:53.011727+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_whispers_of_the_guild": {
    "id": "earth_land_whispers_of_the_guild",
    "name": "Guildmaster’s Insightful Scroll",
    "description": "The Guildmaster’s Insightful Scroll, a meticulously rolled parchment adorned with the seal of Master Eldrin, the Quartermaster, whispers cryptic advice that can either illuminate strategic brilliance or leave you feeling marginally wiser. Each scroll is said to hold a fragment of Eldrin's wisdom, guiding you through complex logistical challenges and revealing hidden paths in your guild’s network of operations. Don't be surprised if it leads to more paperwork—Eldrin was known for his meticulous record-keeping.",
    "category": "services",
    "price": 1000,
    "icon": "📜",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grant_advantage_on_strategy_checks",
      "reveal_hidden_path_once"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Advantage on Strategy Checks",
        "rules": "When you use this scroll during a strategy check, you gain advantage until the end of your next turn. This effect can be used once per short or long rest."
      },
      {
        "title": "Reveal Hidden Path Once",
        "rules": "Activating this scroll reveals a hidden path or shortcut in your guild’s network that is useful for logistics and operations. It can only be used once, and its exact location is revealed immediately upon activation."
      }
    ],
    "levelRequirementReason": "The scroll's wisdom is accessible to all members of the guild who can appreciate and apply it.",
    "vendorReason": "Master Eldrin, the Quartermaster, personally oversees this item’s creation and ensures its availability for his fellow guild members.",
    "shippingDetail": "The scroll is delivered by a messenger hawk, ensuring swift delivery to any outpost within the guild network.",
    "usage": {
      "activation": "Read aloud in front of your party during a strategy session or when you need to find a hidden path.",
      "duration": "Instantaneous",
      "endsWhen": "Used up after one activation; rechargeable with rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The scroll encapsulates Eldrin's decades of strategic wisdom, making it a valuable tool for any guild member.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T01:13:10.041607+00:00",
    "aiReviewedAt": "2026-07-25T01:13:10.041607+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_frostgiant_tooth": {
    "id": "earth_land_frostgiant_tooth",
    "name": "Tooth of the Frozen King",
    "description": "The Tooth of the Frozen King, a mammoth molar harvested from an ancient Frost Giant, radiates cold that lingers even after it's removed. This tooth grants its bearer an eerie resilience to frostbite and a nearly insatiable craving for hearty stews. Legend has it that those who wield this relic feel invigorated by the very touch of winter itself, though they must resist the urge to consume their stew before it’s fully cooked.",
    "category": "curiosities",
    "price": 3200,
    "icon": "🦷",
    "stock": 18,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "frostbite_resistance",
      "stamina_boost"
    ],
    "vendor": "magic_shop",
    "shippedBy": "snow_goose",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Frostbite Resistance",
        "rules": "While holding the Tooth of the Frozen King, you gain resistance to cold damage. This effect persists for as long as you hold it or until you take a short rest."
      },
      {
        "title": "Stamina Boost",
        "rules": "Whenever you make a Strength (Athletics) check, you have advantage on the roll if it is related to physical exertion in cold environments. This effect lasts for 10 minutes after the tooth is removed from your mouth."
      }
    ],
    "levelRequirementReason": "The Tooth's icy power demands a level of experience and understanding that only those who have faced harsh winter conditions possess.",
    "vendorReason": "The Magic Shop, known for its arcane wares, has managed to acquire this relic through the treacherous trade routes near the Frost Giant mountains.",
    "shippingDetail": "Delivered by a Snow Goose, whose journey is as perilous and cold-hardened as the relic itself; expect delays due to harsh weather conditions.",
    "usage": {
      "activation": "Passive effect while holding it or within close proximity (within 5 feet).",
      "duration": "While held or in close proximity.",
      "endsWhen": "The tooth is removed from your mouth, and the effects end after 10 minutes for the Stamina Boost.",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity of acquiring such a relic, its magical properties, and the risks involved in obtaining it justify this price.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-25T01:13:13.171406+00:00",
    "aiReviewedAt": "2026-07-25T01:13:13.171406+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sugar_spike": {
    "id": "leclaire_isle_item_sugar_spike",
    "name": "Sugar Spike",
    "description": "Sugar Spike is a crystalline shard that glistens with joy and sweetness. When activated, it grants its bearer an instant surge of attack speed and a fleeting frenzy, making every strike feel like a dance of dexterity. However, the effects are brief—lasting only until you've struck three times or until your next action. Beware, for consuming too much might send you into a hyperactive state, bouncing uncontrollably around the battlefield like a pastry on a sugar high.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍬",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "attack_speed_increase",
      "temporary_frenzy"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Dough Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Attack Speed Increase",
        "rules": "When activated as a bonus action, this effect grants you advantage on attack rolls for the next three attacks. This effect ends if you use your next action or if you miss with an attack."
      },
      {
        "title": "Temporary Frenzy",
        "rules": "Activates immediately upon consuming and lasts until either three successful attacks are made, or until you take a non-movement action after using this ability. While in frenzy, you have disadvantage on saving throws against being frightened and charmed."
      }
    ],
    "levelRequirementReason": "This item is suitable for low-level characters who need to quickly boost their combat efficiency.",
    "vendorReason": "Dough Depot specializes in items that enhance performance, making Sugar Spike a perfect fit for their offerings.",
    "shippingDetail": "Ships within the hour with the Dough Delivery Drone, ensuring you receive your boost before your next battle.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until three successful attacks or until you take a non-movement action after using this ability",
      "endsWhen": "You use your next action or miss with an attack for the Attack Speed Increase; ends after three successful attacks or when you take a non-movement action for Temporary Frenzy.",
      "charges": "Unlimited, recharges on a short rest"
    },
    "priceReason": "The balanced XP price reflects the item's moderate effects and utility at lower levels.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T01:12:59.217961+00:00",
    "aiReviewedAt": "2026-07-25T01:12:59.217961+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_dwarven_rolling_shield": {
    "id": "leclaire_isle_item_dwarven_rolling_shield",
    "name": "Dwarven Rolling Shield of Doughy Defense",
    "description": "The Dwarven Rolling Shield of Doughy Defense, a marvel forged by the Dough Folk artisans of Le Claire Isle, is more than just sturdy—it's resilient and unpredictable. When activated, it rolls to create a doughy barrier that absorbs damage and can launch sticky projectiles at foes, potentially causing them to slip on their own goo. Be wary, for the shield’s rolling motion is unpredictable, making it a tricky defense in close combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "armor_3",
      "damage_absorption_4"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Rolling Cart Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Armor Bonus",
        "rules": "When activated as an action, this shield grants you a +3 bonus to AC. It lasts for 1 minute."
      },
      {
        "title": "Damage Absorption",
        "rules": "The shield absorbs up to 4 points of damage per turn from physical attacks, expending one use each time it is used. Once all uses are exhausted, the shield must be recharged by spending an hour in a dough-making process."
      }
    ],
    "levelRequirementReason": "This shield requires a minimum level of 8 to wield due to its complex mechanics and the precision needed for activation.",
    "vendorReason": "Pastry Palace, known for their expertise in dough and confectionery, naturally sells this unique defensive item.",
    "shippingDetail": "Delivered via the Rolling Cart Courier, a service that ensures timely delivery of your shield to the nearest town.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The duration ends or when all uses are exhausted",
      "charges": "Rechargeable after an hour spent in dough-making."
    },
    "priceReason": "This shield is moderately priced at 1000 XP, reflecting its unique mechanics and the skill required to craft it.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:14:07.387946+00:00",
    "aiReviewedAt": "2026-07-25T01:14:07.387946+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_sparklehoof_charm": {
    "id": "equestria_item_sparklehoof_charm",
    "name": "Sparklehoof’s Tactical Advice",
    "description": "Sparklehoof’s Tactical Advice is a tiny, intricately crafted amulet made from shimmering crystal and enchanted with the wisdom of the legendary pony. This artifact offers strategic foresight, revealing hidden paths and secret objectives, making it invaluable for both combat and diplomacy. When worn, it grants its bearer an uncanny ability to foresee outcomes, increasing success in Wisdom checks by +5 and enhancing persuasion attempts by providing a +2 bonus to Charisma (Persuasion) checks.",
    "category": "services",
    "price": 1000,
    "icon": "✨",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "strategic_insight",
      "diplomatic_advantage"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strategic Insight",
        "rules": "Activates as an action, granting a +5 bonus to Wisdom checks for 30 minutes. Ends when the wearer stops wearing it."
      },
      {
        "title": "Diplomatic Advantage",
        "rules": "Passive effect that increases the success rate of persuasion attempts by providing a +2 bonus to Charisma (Persuasion) checks, which lasts until replaced by another use."
      }
    ],
    "levelRequirementReason": "Suitable for all pony adventurers who can appreciate its value.",
    "vendorReason": "The Crystal Empire is known for its mastery of enchanted artifacts, and this amulet exemplifies their craftsmanship.",
    "shippingDetail": "Ships via the Crystal Courier's express service within a week.",
    "usage": {
      "activation": "Activates as an action to gain Strategic Insight or passively provides Diplomatic Advantage.",
      "duration": "Strategic Insight lasts for 30 minutes, while Diplomatic Advantage is always active until replaced by another use.",
      "endsWhen": "Strategic Insight ends when the wearer stops wearing it; Diplomatic Advantage ceases with a new use.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced as an artifact that provides two potent benefits without being overly powerful.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:13:16.850443+00:00",
    "aiReviewedAt": "2026-07-25T01:13:16.850443+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_fortune_skull": {
    "id": "curiosity_fortune_skull",
    "name": "Skull of Whispering Prophecies",
    "description": "The Skull of Whispering Prophecies is a meticulously crafted skull made from polished obsidian and inlaid with silver runes. It hums softly as if alive, emitting a warm glow that seems to dance across your skin. Holding it brings forth fleeting visions of future events, though their accuracy is as uncertain as the wind. This ancient artifact grants you an edge in combat by subtly guiding you towards opportunities for victory and increasing your luck when you least expect it.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "guidance_in_battle",
      "boosted_luck"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Guidance In Battle",
        "rules": "As a bonus action, you can activate the skull to gain advantage on one attack roll or saving throw before the start of your next turn. This effect lasts until the end of your next short rest."
      },
      {
        "title": "Boosted Luck",
        "rules": "You have a 10% chance to gain an additional die when rolling for initiative. This effect is cumulative, but you cannot exceed more than two extra dice added to your roll."
      }
    ],
    "levelRequirementReason": "The Skull of Whispering Prophecies requires less stringent level requirements due to its balanced effects and the need for a wider range of players to access its benefits.",
    "vendorReason": "The Chaos Dealer specializes in items that offer unpredictable advantages, making this skull an ideal fit.",
    "shippingDetail": "The Winged Courier ensures swift delivery of the artifact, guaranteeing it arrives intact and functional.",
    "usage": {
      "activation": "Bonus action to activate, once per short rest for 'Guidance In Battle'. Initiative roll benefits are permanent until a new initiative is rolled.",
      "duration": "Until the end of your next short rest or until destroyed.",
      "endsWhen": "Upon destruction or if you lose possession after using it during a short rest.",
      "charges": "Unlimited, but only once per short rest."
    },
    "priceReason": "The Skull of Whispering Prophecities offers balanced benefits that enhance combat and luck without being overpowered, justifying its fair value in XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:13:28.557811+00:00",
    "aiReviewedAt": "2026-07-25T01:13:28.557811+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_void_armlet": {
    "id": "doughnut_hole_void_armlet",
    "name": "Nullity’s Embrace Armlet",
    "description": "Forged from solidified void essence, this armlet hums with an unsettling energy, its surface a swirling maelstrom of nothingness. Nullity’s Embrace Armlet reduces incoming physical damage by half and grants chilling resistance to psychic attacks, a reminder that the void is not merely empty space but a force of unyielding opposition. Stare into it too long and you might find your mind slipping into its endless depths, leaving you vulnerable to silence or worse.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌌",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "damage_reduction_half",
      "psychic_resistance_high"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Temporal Distortion Courier Service",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Damage Reduction",
        "rules": "Passive effect that reduces incoming physical damage by half. The armlet absorbs the first 5 points of damage per round, expending its charges."
      },
      {
        "title": "Psychic Resistance",
        "rules": "Grants immunity to psychic attacks and a +4 bonus on saving throws against such effects. Lasts until expended or removed."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 12 due to its mythic power and the raw void energy it channels.",
    "vendorReason": "Void Vendor deals in rare artifacts from the farthest reaches, including items that manipulate the very fabric of space and time.",
    "shippingDetail": "Ships via a temporal rift; delivery may vary due to fluctuations in spacetime.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until expended or removed",
      "endsWhen": "Charges are exhausted, or the item is removed by a spell or similar effect",
      "charges": "5"
    },
    "priceReason": "Balanced at 1000 XP as it provides significant mythic benefits but requires careful handling.",
    "priceOriginal": 230000,
    "priceReviewedAt": "2026-07-25T01:13:28.939941+00:00",
    "aiReviewedAt": "2026-07-25T01:13:28.939941+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_sparkling_fragment": {
    "id": "connectopia_sparkling_fragment",
    "name": "Echoes of the Great Collapse",
    "description": "The Echoes of the Great Collapse is a shimmering fragment, its surface etched with the arcane patterns of Connectopia’s initial construction. This relic grants a brief connection to the network of consciousness, allowing for quick problem-solving and minor reality alterations—though it tends to warp perceptions, making you see things that aren’t there or miss what truly matters. The shard hums with latent energy, whispering secrets from the collapse of a great civilization.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Quick Insight",
      "Minor Reality Alteration"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Signal Drone",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Quick Insight",
        "rules": "As an action, you can attempt to solve a puzzle or recall forgotten information. There is a 30% chance that the puzzle is instantly solved. If it fails, you gain advantage on the next Intelligence (Arcana) check made within the next hour."
      },
      {
        "title": "Minor Reality Alteration",
        "rules": "You can spend an action to alter minor aspects of your surroundings for 1 minute. You can choose one of the following: change the color of a surface, adjust the temperature in a small area, or create a visual illusion that lasts until dispelled by you or another creature."
      }
    ],
    "levelRequirementReason": "The relic requires significant mental discipline to wield effectively.",
    "vendorReason": "Pioneer Post has established trade routes with the remnants of Connectopia, making this artifact available through their network.",
    "shippingDetail": "Ships via Signal Drone’s high-speed courier service, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Action or bonus action",
      "duration": "Instantaneous (Quick Insight) / 1 minute (Minor Reality Alteration)",
      "endsWhen": "The effect ends when you use another Quick Insight or Minor Reality Alteration ability, or if the duration expires.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to be a valuable but not overpowered relic, suitable for a 6th-level character.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T01:14:14.922422+00:00",
    "aiReviewedAt": "2026-07-25T01:14:14.922422+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronometric_bracelets": {
    "id": "almost_edge_item_chronometric_bracelets",
    "name": "Temporal Flux Wristbands",
    "description": "The Temporal Flux Wristbands are crafted from a solidified time-stream, their surface etched with arcane runes that shimmer like molten silver. These wristbands allow the wearer to manipulate personal time, offering brief respites from the relentless flow of events. With each activation, you may rewind your own timeline by 5 seconds at a 10% chance, or temporarily slow enemy attack speeds by 30%. Use them wisely, for too much tampering risks unraveling the very fabric of reality.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Rewind Time",
      "Slow Attack Speed"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Chrono Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "Activates as a reaction. Rewinds your personal timeline by 5 seconds when subjected to an attack or critical hit. This effect has a 10% chance of activation each time you are targeted in combat. The temporal distortion lasts until the end of your next turn, and attempting more than three such activations within a single combat session risks causing a paradox."
      },
      {
        "title": "Slow Attack Speed",
        "rules": "Activates as a bonus action at the start of each enemy's turn. Slows their attack speed by 30%, reducing their effective attack rolls by half for 1 minute. This effect ends when the targeted creature is incapacitated or if you use your reaction to Rewind Time."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to wield, as the temporal flux requires a stable mental state and physical stamina.",
    "vendorReason": "The Edge Wanderer deals in artifacts of time and space, making these wristbands an appropriate addition to their inventory.",
    "shippingDetail": "Delivered via the Chrono Courier, ensuring that your wristbands arrive perfectly synchronized with your schedule.",
    "usage": {
      "activation": "Reaction for Rewind Time; Bonus Action for Slow Attack Speed",
      "duration": "Instantaneous (Rewind Time); 1 minute (Slow Attack Speed)",
      "endsWhen": "At the end of your next turn (Rewind Time); When the target is incapacitated or when you use a reaction to Rewind Time (both effects).",
      "charges": "Unlimited, but only one effect can be active at any given time."
    },
    "priceReason": "Balanced as an uncommon item, reflecting its limited utility and the complexity of its temporal mechanics.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:14:45.239604+00:00",
    "aiReviewedAt": "2026-07-25T01:14:45.239604+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_data_core": {
    "id": "connectopia_data_core",
    "name": "Quantum Stabilizer",
    "description": "The Quantum Stabilizer is a sleek, metallic device with glowing quantum circuits that hum in sync with your thoughts. Crafted from advanced alloys and imbued with data core essence, it enhances your mental acuity for brief, focused bursts. This tool not only increases your intelligence by 10% but also grants you the rare ability to predict and counteract impending cave-ins, a crucial skill for any adventurer navigating treacherous terrain.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💻",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Enhanced Intelligence",
      "Prevent Cave-In"
    ],
    "vendor": "craft_corner",
    "shippedBy": "drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Intelligence",
        "rules": "Activates as a bonus action. Increases your intelligence by +2 (10%) for 1 minute, after which the device emits a soft hum and recharges its power."
      },
      {
        "title": "Prevent Cave-In",
        "rules": "Passive effect while worn. Reduces the DC of saving throws against cave-in hazards by 5 until you are exposed to another significant environmental hazard or take damage from such an event."
      }
    ],
    "levelRequirementReason": "The Quantum Stabilizer is designed for beginners, enhancing their core abilities without overwhelming more experienced adventurers.",
    "vendorReason": "Craft Corner specializes in tools and devices that assist in solving puzzles and overcoming environmental challenges, making the Quantum Stabilizer a perfect fit.",
    "shippingDetail": "Quickly delivered by drone courier within 3 days.",
    "usage": {
      "activation": "Bonus action to activate; passive effect while worn.",
      "duration": "1 minute or until the wearer takes damage from an environmental hazard, whichever comes first.",
      "endsWhen": "The device hums and recharges after its duration ends or when exposed to significant environmental hazards.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's modest level requirement and its useful but not game-breaking effects.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:13:44.324126+00:00",
    "aiReviewedAt": "2026-07-25T01:13:44.324126+00:00",
    "aiReviewVersion": 1
  },
  "faction_empire_standard": {
    "id": "faction_empire_standard",
    "name": "The Crimson Standard of Despair",
    "description": "The Crimson Standard of Despair is a tattered yet resilient banner bearing the emblem of the fallen Empire—a single, weeping eye. This standard grants your party a +2 morale bonus to all saving throws and attacks while it waves in battle. It also provides a +1 bonus to AC for any creature within 30 feet who can see the standard. Rumored to attract unwanted attention from collectors, this banner is said to carry with it a spectral echo of the Empire's demise.",
    "category": "faction",
    "price": 1000,
    "icon": "🚩",
    "stock": 47,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "morale_bonus",
      "increased_party_defense"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "rolling_log",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Morale Bonus",
        "rules": "While holding The Crimson Standard of Despair, your party gains a +2 bonus to all saving throws and attacks. This effect lasts until the end of your next turn."
      },
      {
        "title": "Increased Party Defense",
        "rules": "Any creature within 30 feet of The Crimson Standard of Despair who can see it gains a +1 bonus to AC for the duration of their turn. This effect ends if the standard is no longer visible or held by you."
      }
    ],
    "levelRequirementReason": "This banner requires a minimum level of 2 due to its supernatural influence and the strategic value it provides in battle.",
    "vendorReason": "The Imperial Armory is known for supplying relics of the Empire, including this iconic standard.",
    "shippingDetail": "Shipped by a rolling log courier, arriving within one week.",
    "usage": {
      "activation": "Passive effect while holding and visible to your party members.",
      "duration": "Instantaneous; ends if the banner is no longer visible or held by you.",
      "endsWhen": "If the standard ceases to be visible due to being hidden, destroyed, or otherwise not in use.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the banner's supernatural effects and strategic value.",
    "priceOriginal": 1850,
    "priceReviewedAt": "2026-07-25T01:13:57.541363+00:00",
    "aiReviewedAt": "2026-07-25T01:13:57.541363+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_voidcaller": {
    "id": "warhammer_voidcaller",
    "name": "The Voidcaller's Echo",
    "description": "The Voidcaller's Echo hums with a spectral resonance, its head carved from onyx and its haft wrapped in dark leather. This warhammer pulses with the cold breath of void energy, capable of summoning fleeting pockets of shadow that phase through armor, leaving only echoes of damage behind. Misuse can drain the wielder’s will, but those who master it feel as though they command a piece of the cosmos itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌌",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "void_phase",
      "shadow_damage"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "shadow_beast",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Shadow Damage",
        "rules": "As a bonus action, you can channel the hammer's void energy to deal an additional 1d6 necrotic damage. The weapon must be in your hand and touching an enemy for this effect to activate."
      },
      {
        "title": "Void Phase",
        "rules": "Once per short rest, you can use a bonus action to phase the hammer briefly through armor or other solid objects, dealing 1d4 force damage to all creatures within a 5-foot radius. This effect has no save DC and lasts for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires proficiency in heavy weapons to wield effectively.",
    "vendorReason": "The chaos dealer regularly deals with rare, arcane artifacts like the Voidcaller's Echo.",
    "shippingDetail": "Ships via a shadow beast courier, ensuring secrecy and timely delivery to the buyer’s location.",
    "usage": {
      "activation": "Bonus action or reaction (Void Phase)",
      "duration": "Instantaneous (Shadow Damage), 1 minute (Void Phase)",
      "endsWhen": "On use; Void Phase ends when the duration expires",
      "charges": "Unlimited, but requires a short rest to phase again"
    },
    "priceReason": "Balanced price for an epic weapon with unique abilities and rarity.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T01:14:26.514247+00:00",
    "aiReviewedAt": "2026-07-25T01:14:26.514247+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_sparkle_potion": {
    "id": "equestria_item_sparkle_potion",
    "name": "Glimmering Gratitude Brew",
    "description": "The Glimmering Gratitude Brew is a shimmering, frothy potion crafted from concentrated stardust and the tears of unicorns in Equestria's night sky. It’s said that Princess Twilight once used it to inspire her subjects, but its true magic lies in the warm, radiant light it emits as it bubbles in your cup. This elixir not only enhances one's charisma by 10 for six turns, granting a +2 bonus on Charisma checks and saving throws, but also has a 30% chance to charm NPCs should you need to sway their hearts or minds.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Charisma Boost",
      "Charmer"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "pegasus快递",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When consumed, the Glimmering Gratitude Brew grants a +10 temporary bonus to your Charisma score for six turns. This increases your Charisma checks and saving throws by +2 until the effect ends."
      },
      {
        "title": "Charmer",
        "rules": "There is a 30% chance that any creature you interact with while under the effects of this potion will be charmed for one minute, provided no save is required. The DC for saving throws against charm effects is 14."
      }
    ],
    "levelRequirementReason": "The Glimmering Gratitude Brew requires only a first-level spellcaster to use it effectively in social situations.",
    "vendorReason": "The Ponyville Market is known for its wide variety of magical potions and elixirs, including this one, which has been popular among the town's residents.",
    "shippingDetail": "Shipped via Pegasus快递, ensuring swift delivery to your doorstep within a day.",
    "usage": {
      "activation": "Consume as a bonus action.",
      "duration": "Six turns.",
      "endsWhen": "The effect ends at the start of your next turn after six turns have passed or if you take any other action on that turn.",
      "charges": "Unlimited, but only one dose can be consumed per day."
    },
    "priceReason": "The Glimmering Gratitude Brew is priced at 1000 XP due to its rare ingredients and the complex alchemy required for its creation.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:14:39.251299+00:00",
    "aiReviewedAt": "2026-07-25T01:14:39.251299+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_windrider_bracers": {
    "id": "equestria_item_windrider_bracers",
    "name": "Flutterhoof's Gale Defenders",
    "description": "Flutterhoof's Gale Defenders are ornate bracers forged by master blacksmiths in Cloudsdale, crafted from enchanted silver and encrusted with sparkling sapphires. These bracers channel the very essence of the winds, granting you a fleeting sensation of flight as they increase your movement speed by 10% and provide resistance to wind damage. With each step, you feel lighter on your feet, evading attacks with a chance of 15%. They are said to have been worn by the legendary Wind Riders of Equestria.",
    "category": "equipment",
    "price": 1000,
    "icon": "💨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Increased Movement Speed",
      "Evasion Chance"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "cloudsdale_delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Increased Movement Speed",
        "rules": "These bracers increase your movement speed by 10%. This effect is passive and lasts until you rest or the bracers are removed."
      },
      {
        "title": "Evasion Chance",
        "rules": "You have a 15% chance to evade attacks made against you. This effect can be triggered once per short or long rest, but it does not stack with similar effects."
      }
    ],
    "levelRequirementReason": "This level requirement ensures that only experienced riders of Equestria can truly appreciate the bracers' wind magic.",
    "vendorReason": "Canterlot Commerce, known for its diverse and high-quality wares, carries these unique bracers as a testament to their craftsmanship and magical properties.",
    "shippingDetail": "Shipped via the swift winds of Cloudsdale, ensuring that your bracers arrive with a gust of fresh magic.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until you rest or the bracers are removed.",
      "endsWhen": "Rests or removal of the bracers.",
      "charges": "Unlimited"
    },
    "priceReason": "The reduced price reflects its limited stock and daily replenishment, making it a valuable yet affordable addition to any seasoned adventurer's gear.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:15:34.024227+00:00",
    "aiReviewedAt": "2026-07-25T01:15:34.024227+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_chronal_shard": {
    "id": "equestria_item_chronal_shard",
    "name": "Echoes of the Past Fragment",
    "description": "The Echoes of the Past Fragment is a shimmering, crystalline shard that pulses with an ancient energy from the heart of time itself. Crafted near the Crystal Empire during a temporal anomaly, this relic grants fleeting glimpses into the future. Use it wisely, for each glimpse may alter the course of events, and not always in your favor. The crystal is known to cause minor distortions in reality when used, a risk you must accept if you wish to peer into time’s secrets.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Peek",
      "Random Future Buff"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "temporal_logistics",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Peek",
        "rules": "As an action, you can use the Echoes of the Past Fragment to glimpse the next attack made by a creature within 30 feet. The target must succeed on a DC 15 Dexterity saving throw or be caught off guard for the duration of their next turn."
      },
      {
        "title": "Random Future Buff",
        "rules": "Once per day, there is a 10% chance that using the Echoes of the Past Fragment grants you one temporary buff based on a random future event. The buff lasts until the end of your next long rest and cannot be resisted."
      }
    ],
    "levelRequirementReason": "The fragment's temporal energy requires a stable mind to handle its unpredictability.",
    "vendorReason": "Only those with ties to the Crystal Empire can safely handle and study such delicate time-based artifacts.",
    "shippingDetail": "Shipped via secure temporal courier, ensuring safe arrival despite the potential for minor distortions.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the creature attacks or upon a successful save against the DC 15 Dexterity saving throw.",
      "charges": "Once per day"
    },
    "priceReason": "The fragment's rarity and the risk it poses to time stability justify its modest price.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-25T01:15:24.551164+00:00",
    "aiReviewedAt": "2026-07-25T01:15:24.551164+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_club_banner_of_discord": {
    "id": "kivotos_item_club_banner_of_discord",
    "name": "Banner of Discord",
    "description": "The Banner of Discord is a garish, outrageously flamboyant banner created by the notorious Chaos Club. Its vividly colored design features screaming faces that seem to move with an unsettling energy. This item was designed to incite minor arguments among NPCs and has a reputation for reducing their hostility towards you (+2). It's a truly useful tool in situations where chaos is needed, but be warned: it also adds a chaotic effect to the area for 1 minute.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔥",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Incites Minor Arguments",
      "Reduces NPC Hostility"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Incites Minor Arguments",
        "rules": "When activated, there is a 20% chance that an NPC within 30 feet will engage in a minor argument with another nearby NPC. This effect lasts for 1 minute and can occur once per long rest."
      },
      {
        "title": "Reduces NPC Hostility",
        "rules": "For the duration of 1 hour after use, all NPCs within a 60-foot radius have their attitude towards you improved by +2 while they are hostile. This effect ends if any combat occurs in the area or if the NPCs' attitudes change due to other circumstances."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 3 due to its chaotic nature and the potential for it to cause minor arguments.",
    "vendorReason": "Club Supply is known for its eclectic collection of items from various clubs, including this notorious creation by the Chaos Club.",
    "shippingDetail": "Ships via Courier Pigeon within one day. Special handling required due to the item's volatile nature.",
    "usage": {
      "activation": "An action to unfurl and activate the banner in an area of your choice.",
      "duration": "1 minute or until a combat occurs in the area, whichever comes first.",
      "endsWhen": "Combat begins within the area or if the duration expires after one long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects its rare creation by the Chaos Club and its unique chaotic effects that can influence NPCs in a significant way.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T14:32:12.244881+00:00",
    "aiReviewedAt": "2026-07-25T14:32:12.244881+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_academy_scroll_of_plagiarism": {
    "id": "kivotos_item_academy_scroll_of_plagiarism",
    "name": "Academy Scroll of Plagiarism",
    "description": "The Academy Scroll of Plagiarism appears innocuous, a simple parchment scroll bound in leather with an inked label that reads 'Plagiarism'. Unravel it to reveal meticulously copied passages from ancient texts, eerily similar to current student assignments. While this item might be useful for those looking to streamline their research process, its use is ethically questionable and can attract the attention of stern professors during examinations. Use it once per day to bypass a single skill check related to knowledge or academic subjects.",
    "category": "consumables",
    "price": 1000,
    "icon": "📜",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Academic Shortcut",
      "Potential Academic Scrutiny"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Mail Carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Academic Shortcut",
        "rules": "Activate as an action to bypass one knowledge or academic skill check. The scroll grants a +5 bonus to the roll, which lasts until the start of your next turn."
      },
      {
        "title": "Potential Academic Scrutiny",
        "rules": "There is a 10% chance per use that you will attract the attention of a stern professor who will demand an explanation. If caught, you must make a DC 15 Charisma (Persuasion) check to avoid further consequences."
      }
    ],
    "levelRequirementReason": "This item is designed for beginning students looking to assist in their studies.",
    "vendorReason": "The Academy Armory stocks a variety of study aids, and this scroll serves as an effective tool for diligent students.",
    "shippingDetail": "Standard postal service with delivery within a week.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "Instantaneous effect; lasts until the start of your next turn.",
      "endsWhen": "The scroll is used, and you are caught by a professor.",
      "charges": "One charge per day"
    },
    "priceReason": "The item's rarity and unique utility justify its high price in the academy market.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:15:14.194557+00:00",
    "aiReviewedAt": "2026-07-25T01:15:14.194557+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_potion_of_temporary_strength": {
    "id": "faerun_item_potion_of_temporary_strength",
    "name": "Potion of Temporary Might",
    "description": "This frothy concoction is a deep crimson hue, reminiscent of both fermented berries and the blood of champions. Known as Pauline's Microphone, it amplifies not just strength but also your voice in battle, allowing you to shout orders that are twice as effective for the duration of its effects. Drink it quickly; the surge of might won't last more than 3 rounds, after which you'll feel a bit off-kilter for an hour or so.",
    "category": "consumables",
    "price": 1000,
    "icon": "💊",
    "stock": 28,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "strength +4",
      "voice multiplier (orders are twice as effective)"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "Consume this potion to gain a +4 bonus to Strength checks and saving throws for 3 rounds. This effect ends when the duration expires."
      },
      {
        "title": "Voice Multiplier",
        "rules": "For the duration of your next short or long rest, any orders you give are twice as effective at gaining allies' cooperation. This effect ends when you complete a short or long rest."
      }
    ],
    "levelRequirementReason": "This potion is designed for beginners to experiment with their combat prowess.",
    "vendorReason": "Waterdeep Market stocks it as a popular item among the city's adventurers seeking quick boosts in strength and strategy.",
    "shippingDetail": "Ships via swift hawk courier, ensuring timely delivery of this potent potion.",
    "usage": {
      "activation": "Consume the potion as an action.",
      "duration": "3 rounds for Strength Boost; ends with a short or long rest for Voice Multiplier.",
      "endsWhen": "Duration expires or you complete a short or long rest.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Balanced to provide a significant boost for its price point without being overpowered.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-25T01:15:32.017961+00:00",
    "aiReviewedAt": "2026-07-25T01:15:32.017961+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronal_bracelet": {
    "id": "almost_edge_item_chronal_bracelet",
    "name": "Chronal Bracelet of Temporal Flux",
    "description": "The Chronal Bracelet of Temporal Flux is crafted from solidified echoes and fractured time, its surface etched with arcane runes that shimmer with a faint temporal aura. Wielded by those who dare to manipulate personal timelines, it allows the wearer to briefly alter fate—rewinding time for one turn or accelerating their stride by 20% for two turns. Though the bracelet's effects are not without consequence, they offer fleeting moments of control over destiny, much to the amusement of the whimsical Wario.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Temporal Rewind",
      "Swift Stride"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "wormhole courier",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Temporal Rewind",
        "rules": "As a bonus action, the wearer can rewind time for one turn. This effect allows them to take an additional action on their next turn at the cost of reversing all actions taken during that turn. There is no save required, and this ability has a once-per-day limit."
      },
      {
        "title": "Swift Stride",
        "rules": "The wearer gains a +20% increase to movement speed for two turns when they activate the bracelet's power. This effect ends immediately if the wearer falls prone or is hit by an attack. The bracelet has no charges and recharges after a long rest."
      }
    ],
    "levelRequirementReason": "The intricate magic woven into the Chronal Bracelet demands a certain level of arcane knowledge to wield effectively.",
    "vendorReason": "The Edge Wanderer, a vendor known for their eclectic and otherworldly wares, carries this unique piece of temporal jewelry.",
    "shippingDetail": "Ships via the wormhole courier with a guaranteed delivery within one week. Delivery fees included in price.",
    "usage": {
      "activation": "Bonus action to rewind time; activation as a reaction for swift stride.",
      "duration": "Temporal Rewind lasts until the next turn, Swift Stride ends immediately on falling prone or being hit by an attack.",
      "endsWhen": "Exhausted after one use per day or when the wearer falls prone or is attacked while in Swift Stride.",
      "charges": "Unlimited uses; recharges after a long rest."
    },
    "priceReason": "The Chronal Bracelet's rarity and unique temporal abilities justify its moderate but not overpowered price of 1000 XP.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:15:58.514244+00:00",
    "aiReviewedAt": "2026-07-25T01:15:58.514244+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_boarfang_blade": {
    "id": "animatopia_boarfang_blade",
    "name": "Rumbling Boarfang Blade",
    "description": "The Rumbling Boarfang Blade gleams with a primal light, forged from the tusk of a legendary war boar that once fought in the bloodied fields of ancient battles. Its surface is etched with ancient runes that whisper promises of victory to those who wield it. The blade feels surprisingly comfortable despite its massive size, and as you swing it, the air around you seems to darken with the echoes of past triumphs.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Primal Fury",
      "Enhanced Critical"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "giant_beetle_cart",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Primal Fury",
        "rules": "When you use this weapon in combat, you gain a +10 bonus to your movement speed for the duration of one short rest. This effect can be used once per long rest."
      },
      {
        "title": "Enhanced Critical",
        "rules": "While wielding the Rumbling Boarfang Blade, you have a 20% chance to deal double damage on critical hits, with no increase in the roll needed for a critical. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This weapon requires a high level of proficiency and strength to wield its full potential.",
    "vendorReason": "The Tribal Trader has deep ties with the ancient tribes that crafted this blade, ensuring its authenticity and power.",
    "shippingDetail": "Due to its immense size, it is delivered by a giant beetle cart, which can take up to three days to reach your location.",
    "usage": {
      "activation": "On your action during combat",
      "duration": "Until the end of your next turn",
      "endsWhen": "At the start of your next turn after using it in combat",
      "charges": "Recharges on a short rest"
    },
    "priceReason": "This weapon is crafted from rare materials and ancient techniques, making it a valuable and balanced addition to any adventurer's arsenal.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:16:05.403173+00:00",
    "aiReviewedAt": "2026-07-25T01:16:05.403173+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_ancient_scroll_of_misdirection": {
    "id": "faerun_item_ancient_scroll_of_misdirection",
    "name": "Ancient Scroll of Misdirection",
    "description": "The Ancient Scroll of Misdirection appears as a fragile, parchment-like scroll covered in an ancient, indecipherable script that seems to shimmer and ripple when held up to light. Unfolding it causes an illusory duplicate of the caster to appear, confusing foes who attack this phantom self. The illusion is so convincing that enemies have disadvantage on all attacks made against it, but the scroll's effects are fleeting—lasting only for three rounds before dissipating into thin air.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "create_illusory_duplicate",
      "confuse_enemies"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "courier hawk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Create Illusory Duplicate",
        "rules": "When the Ancient Scroll of Misdirection is activated, it creates a perfect illusionary duplicate of the caster. This duplicate lasts for three rounds and causes all enemies within 30 feet to have disadvantage on attack rolls against it. If an enemy successfully attacks the duplicate, they are disoriented for one round, during which time they cannot make attacks or take reactions."
      },
      {
        "title": "Confuse Enemies",
        "rules": "The scroll's illusory duplication causes confusion among nearby enemies. For three rounds after activation, any creature that makes an attack roll against the caster must succeed on a Wisdom saving throw (DC 15) or be disoriented for one round. During this time, they cannot make attacks or take reactions."
      }
    ],
    "levelRequirementReason": "This scroll requires a minimum character level to effectively utilize its illusory effects and ensure it doesn't become overpowered.",
    "vendorReason": "The Waterdeep Market is known for its extensive selection of magical curiosities, including ancient and rare scrolls like the Ancient Scroll of Misdirection.",
    "shippingDetail": "Ships via a swift courier hawk, ensuring safe and timely delivery to the customer.",
    "usage": {
      "activation": "Reaction",
      "duration": "3 rounds",
      "endsWhen": "At the end of the caster's next turn after the scroll's effects have concluded",
      "charges": "Unlimited"
    },
    "priceReason": "The Ancient Scroll of Misdirection is priced at 1000 XP, reflecting its rarity and the complexity of its illusory effects.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-25T01:16:58.157790+00:00",
    "aiReviewedAt": "2026-07-25T01:16:58.157790+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronal_repair": {
    "id": "almost_edge_item_chronal_repair",
    "name": "Temporal Stitching Service",
    "description": "The Temporal Stitching Service is a delicate and precise ritual performed by Edge Wanderer, who repairs the fabric of time itself with a flick of her wrist. The result? A single target can regain 50 hit points, dispel one debilitating curse or condition, and receive a +2 bonus to all skill checks for three turns. This service is not merely valuable; it's essential for those navigating the whimsical realms of time.",
    "category": "services",
    "price": 1000,
    "icon": "🕰️",
    "stock": 7,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Restore Hit Points",
      "Remove Curse or Condition"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "pocket_dimensional_mailer",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Hit Points",
        "rules": "The user can activate this effect as a bonus action, restoring 50 hit points to a single target. The effect lasts until the end of the next long rest."
      },
      {
        "title": "Remove Curse or Condition",
        "rules": "Activating this service as an action removes one curse or condition from a target creature. The duration is permanent unless countered by another spell or effect."
      }
    ],
    "levelRequirementReason": "This service requires minimal skill, but the precision needed to navigate time's fabric demands some experience.",
    "vendorReason": "Only Edge Wanderer can perform this delicate and precise service with the required finesse.",
    "shippingDetail": "The pocket-dimensional mailer ensures swift delivery, but the service must be used within one hour of arrival for full effect.",
    "usage": {
      "activation": "Bonus action and action",
      "duration": "Until next long rest; permanent removal",
      "endsWhen": "Used or long rest; natural cure",
      "charges": "Unlimited, but only one condition per service"
    },
    "priceReason": "Balanced at a moderate price to reflect the precision and time required for such a delicate service.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:16:30.426206+00:00",
    "aiReviewedAt": "2026-07-25T01:16:30.426206+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_orb_of_unending_reflection": {
    "id": "almost_edge_item_orb_of_unending_reflection",
    "name": "Orb of Unending Reflection",
    "description": "The Orb of Unending Reflection hums with a life of its own, pulsating in hues that shimmer like the reflection of a thousand worlds. Gazing into it reveals shifting reflections of impossible landscapes, each more surreal than the last. Though its allure is intoxicating, prolonged observation can unravel even the strongest mind. Yet, for those who dare to look beyond its surface, this artifact grants clarity through illusion and enchantment, offering a glimpse at truths that are both fleeting and profound.",
    "category": "premium",
    "price": 1000,
    "icon": "✨",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Illusion Resistance",
      "Spell Reflection"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "encrypted_package",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Illusion Resistance",
        "rules": "When the user is subjected to an illusion or enchantment effect, they gain a +8 bonus to saving throws. This effect lasts until the start of their next turn."
      },
      {
        "title": "Spell Reflection",
        "rules": "Once per short rest, the user can activate the orb to reflect a single spell cast at them back at the caster. The spell is cast with half its original DC and has half its original power. This effect requires a successful DC 15 Wisdom (Insight) check."
      }
    ],
    "levelRequirementReason": "The Orb of Unending Reflection's complexity and inherent magic require a high level of arcane mastery to wield effectively.",
    "vendorReason": "The Liminal Trader has access to rare and ancient artifacts, including this one, which is said to have been crafted by the last of the reflection mages.",
    "shippingDetail": "The orb must be shipped in a specially encrypted package to prevent its reflections from disturbing those who handle it during transit.",
    "usage": {
      "activation": "Reaction (to reflect a spell)",
      "duration": "Instantaneous (Spell Reflection effect only lasts until the start of the user's next turn)",
      "endsWhen": "The orb is destroyed or the effects are dispelled by a successful saving throw",
      "charges": "One use per short rest"
    },
    "priceReason": "The Orb of Unending Reflection is priced at 1000 XP due to its rarity, the complexity of its magic, and the level requirement for its effective use.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T01:16:34.054572+00:00",
    "aiReviewedAt": "2026-07-25T01:16:34.054572+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_void_resonator": {
    "id": "doughnut_hole_void_resonator",
    "name": "Resonating Void Echo",
    "description": "The Resonating Void Echo is a polished obsidian device, its surface etched with runes that hum with an unsettling frequency. When activated, it briefly taps into the chaotic energies of The Doughnut Hole, creating localized gravitational anomalies that bend space-time around you. This eerie artifact not only enhances your perception but also shields you from void-based attacks by reducing damage by 25%. However, its destabilizing effects draw unwanted attention from unknown forces.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 8,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "localized_gravity_anomaly",
      "improved_perception"
    ],
    "vendor": "center_seller",
    "shippedBy": "wormhole_express",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Localized Gravity Anomaly",
        "rules": "As a bonus action, you can activate the Resonating Void Echo to create a localized gravitational anomaly around you. This effect lasts for 1 minute and has a radius of 20 feet. It imposes disadvantage on Strength (Athletics) checks made within its area due to the unstable gravity field. The anomaly ends early if you deactivate it or if your concentration is broken (as if concentrating on a spell). You can only use this feature once per short rest."
      },
      {
        "title": "Improved Perception",
        "rules": "While holding the Resonating Void Echo, you gain advantage on Wisdom (Perception) checks and saving throws against effects originating from The Doughnut Hole or similar chaotic voids. This effect persists for 1 hour after your last use of the localized gravity anomaly feature."
      }
    ],
    "levelRequirementReason": "The device's intricate runes require a deep understanding of both arcane and void-based knowledge.",
    "vendorReason": "Center Seller, with its vast network of interdimensional connections, is well-equipped to source rare artifacts like the Resonating Void Echo.",
    "shippingDetail": "Delivered via a wormhole express, ensuring that the delicate artifact arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to activate localized gravity anomaly; passive effect while holding for improved perception.",
      "duration": "1 minute for localized gravity anomaly and 1 hour for improved perception.",
      "endsWhen": "Deactivated or concentration broken, or after the stated duration ends.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Resonating Void Echo offers significant utility in combat and exploration without being overpowered.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T01:16:40.299658+00:00",
    "aiReviewedAt": "2026-07-25T01:16:40.299658+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_windwhisper_scroll": {
    "id": "teyvat_item_windwhisper_scroll",
    "name": "Windwhisper Scroll",
    "description": "Crafted by the elusive Windblume Riders, this scroll contains fragmented instructions for manipulating air currents. Unravel its secrets to create a gentle breeze that can soothe allies in battle or a surprisingly effective gust of wind that pushes back enemies with surprising force. The scroll's effects are fleeting, but when used correctly, they can turn the tide of combat. Just don't try to fly with it; doing so will only result in a minor whirlwind that leaves you disoriented and open to attack.",
    "category": "consumables",
    "price": 1000,
    "icon": "💨",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Gentle Breeze",
      "Surprising Gust"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "swift_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gentle Breeze",
        "rules": "When activated, this scroll creates a gentle breeze in an area of up to 10 feet radius. This breeze heals allies within the area for 20 hit points over 5 minutes and grants them advantage on saving throws against being knocked prone until the end of their next turn."
      },
      {
        "title": "Surprising Gust",
        "rules": "Activating this effect creates a gust that pushes back all creatures in a 15-foot cone, forcing each to make a Strength saving throw (DC 13) or be pushed up to 10 feet away from the scroll's user. This push effect does not provoke an opportunity attack and lasts for 1 minute."
      }
    ],
    "levelRequirementReason": "This scroll is designed for beginners, as its effects are straightforward but powerful enough to be useful in various combat scenarios.",
    "vendorReason": "Liyue Harbor is known for its bustling trade and often carries items crafted by the Windblume Riders due to their reputation for innovation and utility.",
    "shippingDetail": "Ships within 2 days, delivered by swift messengers who ensure timely delivery of important scrolls and documents.",
    "usage": {
      "activation": "A bonus action is required to activate the scroll's effects.",
      "duration": "The Gentle Breeze lasts until all affected allies have healed their full hit points or the end of their next turn, whichever comes first. The Surprising Gust effect lasts for 1 minute and can be activated multiple times without expending charges.",
      "endsWhen": "The effects end when the scroll is used up or when the user dismisses it as an action.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The scroll's advanced crafting techniques and unique properties justify its higher price, making it a valuable but not overpowered consumable.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-25T01:17:26.543833+00:00",
    "aiReviewedAt": "2026-07-25T01:17:26.543833+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_crimson_shard": {
    "id": "teyvat_item_crimson_shard",
    "name": "Crimson Shard of Khaenri'ah",
    "description": "The Crimson Shard of Khaenri'ah glows faintly with a deep red hue, pulsing in rhythm with the city's ancient heartbeat. Crafted from the very essence of Khaenri'ah, this shard is said to possess the power to observe and record. Its hum grows louder when you focus on it, as if whispering secrets only to you. Handle it with caution; prolonged exposure might cloud your perceptions or drive you to collect every shimmering trinket in sight.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💎",
    "stock": 32,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Obsessive Collection",
      "Enhanced Perception"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Sea Serpent",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Obsessive Collection",
        "rules": "If you spend more than an hour in the shard's presence, there is a 10% chance each round that you will declare yourself momentarily distracted. This distraction lasts until your next action on your turn. You can use your reaction to suppress this effect for one minute."
      },
      {
        "title": "Enhanced Perception",
        "rules": "For the duration of 60 seconds, you gain advantage on Perception checks and Insight checks against creatures that are not actively trying to deceive you. This effect does not stack with other similar effects."
      }
    ],
    "levelRequirementReason": "The shard's power is accessible to lower-level characters who can handle its subtle influence.",
    "vendorReason": "Inazuma Imports specializes in exotic and rare artifacts, including those with unpredictable effects that intrigue curious adventurers.",
    "shippingDetail": "The Sea Serpent ensures the shard's safe transport by wrapping it in protective layers of enchanted silk to prevent its power from affecting the courier.",
    "usage": {
      "activation": "Passive effect activated upon holding or touching the shard. Ends when you stop interacting with it for more than an hour.",
      "duration": "60 seconds per use, with a short rest required between uses.",
      "endsWhen": "If you spend over an hour in its presence, the effect ends immediately and you have a 10% chance of becoming distracted until your next action.",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's rarity and the unpredictable nature of its effects justify a price of 1,000 XP.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T01:17:10.021541+00:00",
    "aiReviewedAt": "2026-07-25T01:17:10.021541+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_quick_fix_potion": {
    "id": "connectopia_quick_fix_potion",
    "name": "Instant Block Weld",
    "description": "Instant Block Weld is a frothing, metallic potion that hisses as it bonds two blocks together in an instant. Its pungent aroma of charred steel and sweat hints at the intense forging that went into its creation. Crafted by the blacksmiths of Forgeheart for impromptu repairs, this potent brew can stabilize crumbling structures or create temporary fortifications during siege. The potion's effect is so powerful it may cause a brief, block-induced euphoria, leaving builders momentarily invigorated and focused.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧱",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "instant_block_repair",
      "temporary_strength_boost"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "horseback",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Block Repair",
        "rules": "This potion instantly bonds two blocks together with a strength that only a blacksmith's hammer can match. It has an instantaneous effect, requiring no action to activate."
      },
      {
        "title": "Temporary Strength Boost",
        "rules": "For 1 hour after consumption, the user gains +2 to Strength (Athletics) checks and saving throws. This effect ends if the potion is consumed or if the user's hit point maximum is reduced by a cumulative total of 4 hit points."
      }
    ],
    "levelRequirementReason": "This potion requires no level, but it is intended for those who need quick repairs and don't have time to build with precision.",
    "vendorReason": "Pioneer Post, known for its reliable deliveries of essential supplies, often carries Instant Block Weld due to the critical nature of quick repairs on their routes.",
    "shippingDetail": "Ships via horseback, ensuring timely delivery even in rugged terrain. Each shipment includes a special flask to keep the potion stable during transit.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Until consumed or hit point maximum is reduced by 4 cumulative hit points",
      "endsWhen": "Consumption of the potion or reduction of hit points",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the complexity and power of the potion, which requires precise alchemical knowledge and rare ingredients.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T01:17:29.815444+00:00",
    "aiReviewedAt": "2026-07-25T01:17:29.815444+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_artifact_chronometer": {
    "id": "connectopia_artifact_chronometer",
    "name": "Temporal Shift Gear",
    "description": "The Temporal Shift Gear, a delicate brass chronometer recovered from a collapsed mining outpost, allows for brief manipulation of localized time. Its intricate cogs and gears hum with the energy of ancient timelines, granting moments where you can either speed up or slow down the passage of seconds around you, ensuring you always have just enough time to avoid cave-ins, but beware—staying too long risks getting stuck in an endless loop of digging!",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "time_dilation",
      "cave_ins_avoidance"
    ],
    "vendor": "craft_corner",
    "shippedBy": "mythic_beast",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Time Dilation",
        "rules": "As a bonus action, activate the Temporal Shift Gear to either speed up or slow down time in a 5-foot radius around you for up to 1 minute. While active, all creatures within the area gain or lose +2 to their movement speed (your choice). This effect ends if you use another action on your turn."
      },
      {
        "title": "Cave Ins Avoidance",
        "rules": "When a cave-in would occur in an area where you are present, as a reaction, you can activate the Temporal Shift Gear to slow time enough to avoid being buried. You make a DC 15 Dexterity saving throw; on a success, you and any creatures within 5 feet of you remain unburied."
      }
    ],
    "levelRequirementReason": "Requires significant control over time manipulation, making it prudent to have achieved at least intermediate levels in spellcasting or time-based skills.",
    "vendorReason": "The Craft Corner deals in rare artifacts and curiosities recovered from ancient sites, including this one-of-a-kind artifact.",
    "shippingDetail": "Ships via Mythic Beast's fastest courier service with a guaranteed delivery time of three days or less.",
    "usage": {
      "activation": "Bonus action to activate either time dilation or as a reaction for cave ins avoidance.",
      "duration": "Time Dilation lasts up to 1 minute. Cave Ins Avoidance is instantaneous.",
      "endsWhen": "Time Dilation ends when you use another action on your turn. Cave Ins Avoidance ends after the cave-in has passed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Temporal Shift Gear is priced at 1000 XP, reflecting its rarity and the unique ability to manipulate time in a controlled manner.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T01:17:36.642576+00:00",
    "aiReviewedAt": "2026-07-25T01:17:36.642576+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_gravity_charm": {
    "id": "grand_country_gravity_charm",
    "name": "Wario's Levitation Locket",
    "description": "This intricately crafted locket, rumored to be a prototype from Wario himself, grants the wearer limited control over their personal gravity, allowing them to float for brief moments or reduce the force of gravity around them. Crafted from a mix of rare metals and ancient stone, it hums with a subtle energy that only those who truly understand the balance of physics can wield effectively. Use it wisely – or you might find yourself floating in unexpected places!",
    "category": "premium",
    "price": 1000,
    "icon": "✨",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "GRAVITY REDUCTION",
      "FLOATING MOMENT"
    ],
    "vendor": "side_seller",
    "shippedBy": "Chromatic Conveyor",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Gravity Reduction",
        "rules": "As a bonus action, the wearer can reduce their own gravity by 20%, allowing them to move more freely. This effect lasts for 1 minute and ends early if they take any fall damage or are knocked prone."
      },
      {
        "title": "Floating Moment",
        "rules": "By expending a charge, the wearer can briefly float in place for up to 5 seconds. This effect has no range but is interrupted by movement or taking damage. It requires an action to activate and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This locket's complex mechanics require a certain level of understanding in physics and balance, which is attainable only after reaching 10th level.",
    "vendorReason": "The side_seller has connections to Wario's underground network and can procure unique items like this locket.",
    "shippingDetail": "Delivered by the Chromatic Conveyor, known for their reliable service that ensures timely delivery of delicate artifacts.",
    "usage": {
      "activation": "Bonus action or expended charge",
      "duration": "1 minute (Gravity Reduction), up to 5 seconds (Floating Moment)",
      "endsWhen": "Ends if fall damage is taken, knocked prone, or used again too soon; expires after a short rest for the Floating Moment effect.",
      "charges": "3 charges per day, recharged at dawn"
    },
    "priceReason": "This locket combines both rare materials and advanced mechanics, making it a valuable tool for adventurers who need to navigate complex environments.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:17:45.618058+00:00",
    "aiReviewedAt": "2026-07-25T01:17:45.618058+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_cartographer_badge": {
    "id": "the_edge_cartographer_badge",
    "name": "Cartographer's Mark of the Abyss",
    "description": "The Cartographer's Mark of the Abyss is a sleek, obsidian pin issued by the secretive Order of the Unseen Paths, forged from dark obsidian and imbued with the lore of forgotten cartographers. It grants a subtle advantage in navigating perilous terrains, making it easier to find your way without directly protecting you. Rolling a d20 on a 13-20 allows you to gain advantage when attempting navigation checks in unknown or dangerous terrain, ensuring that you never get lost in the abyssal lands.",
    "category": "faction",
    "price": 1000,
    "icon": "🗺️",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Advantage on Navigation Checks",
      "Avoid Getting Lost"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "winged_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Navigation Checks",
        "rules": "When making a navigation check in unknown or dangerous terrain, if you roll a d20 and achieve a result of 13-20, you gain advantage on that check."
      },
      {
        "title": "Avoid Getting Lost",
        "rules": "Roll a d20. On a result of 13-20, you avoid getting lost in the terrain for the duration of your next long rest or until you spend at least one hour navigating without this mark."
      }
    ],
    "levelRequirementReason": "The mark is designed to assist travelers and explorers who are just starting their adventures.",
    "vendorReason": "Edge Outpost specializes in rare and ancient cartographic tools, making it the perfect vendor for this item.",
    "shippingDetail": "The winged messenger delivers the mark within two days, ensuring that you have your navigation aid as soon as possible.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous; lasts until lost or until next long rest",
      "endsWhen": "You get lost in terrain without this mark for an hour or lose it in a perilous situation",
      "charges": "Unlimited"
    },
    "priceReason": "The mark is crafted from rare obsidian and imbued with ancient cartographic magic, justifying its higher price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:18:05.826382+00:00",
    "aiReviewedAt": "2026-07-25T01:18:05.826382+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronal_distortion_gem": {
    "id": "the_edge_chronal_distortion_gem",
    "name": "Temporal Flux Gem",
    "description": "The Temporal Flux Gem hums with a pulsating, unstable time energy that crackles like lightning within its crystalline form. Crafted from ancient, unyielding quartz and imbued with the essence of forgotten chronal anomalies, this gem allows for a brief rewind of events, perfect for correcting grave mistakes or escaping deadly traps. However, its misuse can cause unpredictable temporal shifts, warping reality itself as it bends time into strange new forms.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 2,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Rewind Time",
      "Temporal Paradox"
    ],
    "vendor": "final_shop",
    "shippedBy": "spectral_delivery",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "As a reaction, you can rewind time for yourself by up to 3 rounds. This effect is instantaneous and limited to once per long rest. Creatures within 5 feet of the gem must succeed on a DC 14 Dexterity saving throw or be pushed back 10 feet from its source."
      },
      {
        "title": "Temporal Paradox",
        "rules": "If you use this ability too often, there is a chance that a temporal paradox occurs. Each use has a 5% chance of creating one (roll d20). If successful, creatures within 10 feet must succeed on a DC 14 Constitution saving throw or take 1d6 points of psychic damage and be stunned for 1 round."
      }
    ],
    "levelRequirementReason": "This gem requires a certain level of discipline and understanding of chronal mechanics to wield safely.",
    "vendorReason": "The final shop deals in the most esoteric and powerful items, including this chronal artifact.",
    "shippingDetail": "Delivered through spectral means, arriving swiftly but requiring careful handling upon receipt.",
    "usage": {
      "activation": "Reaction (as a reaction)",
      "duration": "Instantaneous effect",
      "endsWhen": "The effect ends when the save is failed or the duration expires",
      "charges": "Once per long rest"
    },
    "priceReason": "This gem is rare and requires a significant amount of XP due to its unpredictable nature and powerful temporal effects.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-25T01:18:19.481622+00:00",
    "aiReviewedAt": "2026-07-25T01:18:19.481622+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_singularity_shard": {
    "id": "doughnut_hole_singularity_shard",
    "name": "Echoing Shard",
    "description": "The Echoing Shard is a small, shimmering fragment of void energy that hums faintly. It allows you to glimpse fleeting echoes of future events, though interpreting these visions can be as confusing as trying to predict Wario's next move in a complex game of strategy. Holding it grants you a brief window into the near-future, revealing an enemy's next action with a 30% chance and temporarily boosting your intelligence by +5 for two turns, but at a cost—your senses may be overwhelmed by auditory hallucinations that hinder perception checks.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Precognition",
      "Enhanced Intellect"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Rift Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precognition",
        "rules": "As an action, you can attempt to perceive the next enemy action with a 30% chance of success. This effect lasts until the start of your next turn and does not allow you to act on this information."
      },
      {
        "title": "Enhanced Intellect",
        "rules": "For two turns after activation, your Intelligence score is temporarily increased by 5 points. This effect ends when your concentration is broken or at the end of your second turn."
      }
    ],
    "levelRequirementReason": "This item requires a lower level requirement to ensure it can be used in early game scenarios without overshadowing more powerful items.",
    "vendorReason": "The center seller is known for their diverse array of curiosities, including this rare fragment of void energy.",
    "shippingDetail": "The Echoing Shard may take an additional day to arrive due to its delicate nature and the need for secure handling during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Until the start of your next turn or until interrupted by a failure in concentration, whichever comes first",
      "endsWhen": "Your concentration is broken or at the end of two turns",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects its limited utility and potential for strategic advantage without being game-breaking.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T01:17:56.084688+00:00",
    "aiReviewedAt": "2026-07-25T01:17:56.084688+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_temporal_crumb": {
    "id": "doughnut_hole_temporal_crumb",
    "name": "Chronal Crumb",
    "description": "The Chronal Crumb is a shimmering, golden crumb that seems to flicker between moments in time, occasionally revealing glimpses of past and future events. This snack grants you a burst of accelerated movement, allowing you to dart through obstacles with ease during your next turn. It's the perfect tool for escaping sticky situations or snagging that elusive pastry before it vanishes into thin air. However, be wary: its unpredictable nature means you might find yourself in an even more precarious position than before!",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grant_speed_3",
      "phase_through_obstacles"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Speed +3",
        "rules": "When you consume a Chronal Crumb, you gain a +3 bonus to your movement speed on your next turn. This effect lasts for 10 seconds and can only be used once per short or long rest."
      },
      {
        "title": "Phase Through Obstacles",
        "rules": "For the duration of this effect, you have advantage on Strength (Athletics) checks to move through difficult terrain or past obstacles. This effect ends when you use your next action or if you take any non-movement actions."
      }
    ],
    "levelRequirementReason": "This snack is accessible to all adventurers, as its effects are simple and straightforward.",
    "vendorReason": "The Hole Hawker specializes in oddities that can provide a competitive edge in the marketplace, and this crumb certainly does just that.",
    "shippingDetail": "Ships via dimensional rifts, ensuring your Chronal Crumb arrives fresh from the past or future. Delivery may vary between moments of time.",
    "usage": {
      "activation": "Eaten as an action on your turn",
      "duration": "10 seconds per use",
      "endsWhen": "Ends when you take a non-movement action or after 10 seconds, whichever comes first",
      "charges": "Unlimited uses per short or long rest"
    },
    "priceReason": "The Chronal Crumb's unpredictable nature and the potential for time manipulation justify its higher price tag.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T01:18:57.974668+00:00",
    "aiReviewedAt": "2026-07-25T01:18:57.974668+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_anomaly_custard": {
    "id": "doughnut_hole_anomaly_custard",
    "name": "Void Custard Concoction",
    "description": "The Void Custard Concoction is a swirling, iridescent custard that seems to originate from the very heart of a miniature void. When consumed, it grants you resistance to all damage for an hour and briefly allows you to glimpse alternate realities—though they mostly consist of pastries. Warning: Prolonged use may result in existential dread or an uncontrollable craving for sprinkles! The custard's surface is dotted with tiny, glimmering void particles that seem to dance and shimmer.",
    "category": "premium",
    "price": 1000,
    "icon": "🌌",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "resistance_to_all_damage",
      "glimpse_of_alternate_realities"
    ],
    "vendor": "center_seller",
    "shippedBy": "quantum_entanglement",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Resistance to All Damage",
        "rules": "You gain resistance to all damage for a duration of one hour. This effect is instant upon consumption and does not require any action from you."
      },
      {
        "title": "Glimpse of Alternate Realities",
        "rules": "For the duration of 10 minutes, you can attempt to glimpse alternate realities. Each time you do so, roll a d20; on a result of 15 or higher, you briefly see an alternate reality where pastries are central. This effect ends when you use it three times in a day."
      }
    ],
    "levelRequirementReason": "This item is designed for high-level adventurers who can better handle its risks and rewards.",
    "vendorReason": "Center Seller specializes in unique, high-tier magical items that push the boundaries of known magic.",
    "shippingDetail": "Ships via quantum entanglement, ensuring the custard's integrity remains intact during transit. Delivery time is approximately one hour within the plane.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "One hour for resistance to all damage; 10 minutes for glimpses of alternate realities",
      "endsWhen": "The effects expire when their durations end or you consume another Void Custard Concoction within the same day.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item is priced at 1000 XP for its unique and powerful effects, which are limited to high-level adventurers.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:18:31.193274+00:00",
    "aiReviewedAt": "2026-07-25T01:18:31.193274+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_royal_treatment": {
    "id": "midlands_item_royal_treatment",
    "name": "Personalized Healing Salve - Wario's Touch",
    "description": "Wario's Touch is a shimmering jar of luxurious balm made by the renowned apothecaries of Midland. This salve, crafted from rare herbs and a pinch of Wario’s secret ingredient (rumored to be something illicit), promises swift healing with its potent formula. Applied to wounds or rubbed into tired muscles, it rapidly closes cuts and bruises while soothing sore limbs. The balm's effectiveness is legendary in the region, where tales speak of its miraculous properties after long battles.",
    "category": "consumables",
    "price": 1000,
    "icon": "🩹",
    "stock": 88,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Rapid Healing",
      "Muscle Relaxation"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "Royal Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rapid Healing",
        "rules": "When applied to a wound, this salve heals 50 hit points instantly. The effect is instantaneous and does not require an action or reaction."
      },
      {
        "title": "Muscle Relaxation",
        "rules": "For tired muscles, applying the salve reduces fatigue by restoring stamina equal to your Constitution modifier (rounded down). This effect lasts until the start of your next turn. The salve has no save DC and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This salve is effective for all adventurers, regardless of level.",
    "vendorReason": "As a trusted supplier of Midlandian goods, the merchant stocks this renowned healing salve.",
    "shippingDetail": "Ships within three days via Royal Messenger's express service.",
    "usage": {
      "activation": "Instantaneous application to wounds or muscles.",
      "duration": "Rapid Healing is immediate; Muscle Relaxation lasts until the start of your next turn.",
      "endsWhen": "The effect ends when used, and it can be applied once per long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced price reflects its potent healing properties and the high demand for such a valuable item in the market.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:18:23.680500+00:00",
    "aiReviewedAt": "2026-07-25T01:18:23.680500+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_stoneheart_amulet": {
    "id": "earth_land_stoneheart_amulet",
    "name": "Stoneheart Amulet of Resilience",
    "description": "The Stoneheart Amulet of Resilience feels warm to the touch, as if it's alive with the very essence of stone and earth. Its core glows faintly, pulsing with resilience that seems to absorb blows and grant unexpected fortitude. Crafted from ancient earthstone by the hands of Wario himself, this amulet is said to be more valuable than any chocolate treat. It whispers strength in your veins, bolstering both your armor class and your resolve against cold.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 75,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Fortified Defense",
      "Cold Resistance"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "dragon_post",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Fortified Defense",
        "rules": "Wearing the Stoneheart Amulet of Resilience grants you a +2 bonus to AC as long as it remains on your person. Additionally, when you take damage from cold sources, you gain temporary hit points equal to 10 (plus your Constitution modifier) for each point of cold damage you absorb."
      },
      {
        "title": "Cold Resistance",
        "rules": "The amulet provides resistance to cold damage while it is worn. This effect persists until the end of your next turn after removing or replacing the amulet."
      }
    ],
    "levelRequirementReason": "This amulet's resilience and durability require a certain level of experience and strength in handling such powerful artifacts.",
    "vendorReason": "The Guild Quartermaster is known for supplying adventurers with the rarest and most resilient equipment, making this amulet an ideal choice for their inventory.",
    "shippingDetail": "Delivered by a dragon courier who ensures swift delivery through enchanted flight paths.",
    "usage": {
      "activation": "Passive effect; activated upon wearing the amulet.",
      "duration": "Persistent as long as worn, or until replaced with another amulet of similar properties.",
      "endsWhen": "Effect ends when removed from your person or replaced by a different amulet of similar properties.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The amulet's rarity, craftsmanship, and the legendary nature of its creator justify this price in XP.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-25T01:18:54.852922+00:00",
    "aiReviewedAt": "2026-07-25T01:18:54.852922+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_whispering_scrolls": {
    "id": "earth_land_whispering_scrolls",
    "name": "Whispering Scrolls of the Silent Guild",
    "description": "The Whispering Scrolls of the Silent Guild are ancient, leather-bound tomes with intricate symbols etched into their surfaces. Their pages whisper secrets from the forgotten past, enhancing your perception and insight as you study them. However, prolonged exposure can drive even the most steadfast minds to question reality... or is it just Wario’s influence again? These scrolls were crafted by the Silent Guild, a mysterious order known for its enigmatic magic.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 38,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Perception Boost",
      "Insight Advantage"
    ],
    "vendor": "magic_shop",
    "shippedBy": "griffin_express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Perception Boost",
        "rules": "Activate as a bonus action. Grants +5 to Perception checks for 1 hour, at which point the effect ends."
      },
      {
        "title": "Insight Advantage",
        "rules": "Active while studying the scrolls. Grants advantage on Insight checks until your next short or long rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to focus and comprehend the ancient magic within.",
    "vendorReason": "The Magic Shop specializes in rare and ancient artifacts, including these scrolls from the Silent Guild.",
    "shippingDetail": "Ships via Griffin Express with a tracking number included. Expected delivery within 3 days.",
    "usage": {
      "activation": "Bonus action to activate Perception Boost; passive Insight Advantage while studying.",
      "duration": "Perception Boost lasts for 1 hour, Insight Advantage until next rest.",
      "endsWhen": "Effect ends when the duration expires or the scrolls are no longer being studied.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price reflects the ancient lore and limited daily stock of these scrolls.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:18:38.601508+00:00",
    "aiReviewedAt": "2026-07-25T01:18:38.601508+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_dragonscale_ring": {
    "id": "earth_land_dragonscale_ring",
    "name": "Dragonscale Ring of Protection",
    "description": "Forged from the shed scales of an ancient Ice Dragon, this Dragonscale Ring of Protection is a shimmering frosty band that clings to your finger. Its icy core provides resistance against fire damage and grants you a slight boost in speed on snowy terrain, making every step feel like gliding over ice. When you land a critical hit in icy conditions, there's a chance the foe will be frozen in place for a moment.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Ice Resistance",
      "Snowy Terrain Speed Boost"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_worm_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ice Resistance",
        "rules": "The ring offers resistance to fire damage. This effect is always active, providing a +2 bonus to saving throws against fire-based attacks or effects."
      },
      {
        "title": "Snowy Terrain Speed Boost",
        "rules": "While in snowy terrain, you have advantage on Dexterity (Acrobatics) checks and gain a movement speed increase of 10 feet. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This ring's icy power is accessible to all adventurers, making it an excellent starting companion.",
    "vendorReason": "The Earth Emporium specializes in exotic and magical items that harness the earth's raw elements, including this Dragonscale Ring of Protection.",
    "shippingDetail": "Delivered by a giant worm courier, which may cause delays for those not used to such deliveries.",
    "usage": {
      "activation": "Passive effect; always active while worn.",
      "duration": "Lasts until the end of your next long rest.",
      "endsWhen": "The ring is removed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its epic rarity and unique elemental properties.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:18:48.526245+00:00",
    "aiReviewedAt": "2026-07-25T01:18:48.526245+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_fractured_shard": {
    "id": "doughnut_hole_fractured_shard",
    "name": "Fractured Shard of the Central Echo",
    "description": "The Fractured Shard of the Central Echo, a jagged remnant from another dimension, hums with a quiet, unsettling resonance. It is said that this shard holds whispers of other realities, granting brief glimpses into parallel worlds if held for too long. The experience can be disorienting and may cause an overwhelming urge to organize one's possessions in alphabetical order. This relic allows the wielder to perceive echoes from other dimensions but at a cost: it leaves you feeling slightly unmoored after use.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "echo_perception",
      "urge_to_order"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Courier Service",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Echo Perception",
        "rules": "When activated, this shard grants the wielder advantage on Wisdom (Perception) checks to notice unusual sounds or patterns. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Urge To Order",
        "rules": "After using the shard, there is a 50% chance that the wielder will feel an overwhelming urge to organize their immediate surroundings alphabetically. This condition lasts for 1d4 hours and can only be resisted with a successful DC 12 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "The shard's dimensional essence requires the wielder to have a solid understanding of reality to perceive its echoes without being overwhelmed.",
    "vendorReason": "The center seller, known for their extensive knowledge of strange artifacts, has managed to acquire this unique relic from an unknown source.",
    "shippingDetail": "Ships via the Dimensional Courier Service. Delivery may take up to a week due to its delicate nature and the need for secure transit through dimensional rifts.",
    "usage": {
      "activation": "As an action, the wielder can hold the shard to activate its effects.",
      "duration": "Echo Perception lasts 1 minute; Urge To Order lasts until the end of a short rest or is successfully resisted with a saving throw.",
      "endsWhen": "The effects end when their duration expires or are interrupted by damage or interference from other magical means.",
      "charges": "Unlimited, but limited to one use per long rest."
    },
    "priceReason": "The shard's rarity and unique abilities justify its price of 1000 XP. It is a powerful tool for explorers and scholars seeking to understand the multiverse without fully committing to its disorienting effects.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-25T01:19:14.159491+00:00",
    "aiReviewedAt": "2026-07-25T01:19:14.159491+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_void_patrol_badge": {
    "id": "doughnut_hole_void_patrol_badge",
    "name": "Void Patrol Badge of Quiet Observation",
    "description": "Issued by the enigmatic Void Patrol, this badge represents a tenuous alliance with forces beyond comprehension. Wearing it grants you minor resistance to madness and an uncanny ability to appear subtly out of place—ideal for blending into The Doughnut Hole's…unique atmosphere. When you wear it in dim light or shadows, you can use your action to phase into them as if under a permanent Shadow Step effect.",
    "category": "faction",
    "price": 1000,
    "icon": "👁️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "resist_madness_7",
      "grant_stealthy_blending"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Temporal Delivery Service",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Resilient Against Madness",
        "rules": "You have advantage on saving throws against madness-related effects. This benefit lasts for the duration of one short rest."
      },
      {
        "title": "Stealthy Blending",
        "rules": "When you wear this badge in dim light or shadows, you can use your action to phase into such areas as if under a permanent Shadow Step effect. You remain there until the end of your next turn or until you choose to exit."
      }
    ],
    "levelRequirementReason": "This badge is designed for high-level adventurers who need to navigate the unpredictable and dangerous environments of The Doughnut Hole.",
    "vendorReason": "Void Vendor deals in rare and exotic items, including those issued by the enigmatic Void Patrol.",
    "shippingDetail": "The badge is couriered with top-tier security measures to ensure its safe delivery through The Doughnut Hole's complex dimensions.",
    "usage": {
      "activation": "Action or Reaction (to phase into dim light or shadows)",
      "duration": "Instantaneous effect, lasts until the end of your next turn",
      "endsWhen": "You choose to exit the phased state or are no longer in a dimly lit area",
      "charges": "Unlimited"
    },
    "priceReason": "The badge is priced at 1000 XP, reflecting its rarity and the unique abilities it grants.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:19:20.528505+00:00",
    "aiReviewedAt": "2026-07-25T01:19:20.528505+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_mining_consultation": {
    "id": "connectopia_mining_consultation",
    "name": "Prospector's Predictive Protocols",
    "description": "The Prospector's Predictive Protocols are a rare service offered by Pioneer Post. When you deploy this block at your current mining site, it scans the surrounding rock formations and your own optimistic aura to predict nearby ore veins. The service guarantees a +50% chance of revealing hidden resource nodes, making it invaluable for explorers seeking untapped wealth. It's like having an ancient geologist's insight condensed into a single block.",
    "category": "services",
    "price": 1000,
    "icon": "⛏️",
    "stock": 32,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "reveals hidden ore veins (+50%)",
      "provides detailed analysis"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Messenger Block Bot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vein Revelation",
        "rules": "Activates as a bonus action. You gain a +50% chance to reveal hidden resource nodes within a 30-foot radius of your current location for the duration of one short rest."
      },
      {
        "title": "Geological Analysis",
        "rules": "Passive effect that provides detailed analysis of the surrounding blocks, revealing their composition and potential value. This effect lasts until you use it again or spend a short rest to recharge."
      }
    ],
    "levelRequirementReason": "This service is accessible to all prospectors regardless of level due to its widespread utility.",
    "vendorReason": "Pioneer Post specializes in services that aid adventurers, making this block a natural addition to their offering.",
    "shippingDetail": "Delivered instantly by the Messenger Block Bot.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until you use it again or until the end of your next short rest",
      "endsWhen": "You use it again or complete a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The service is priced at 1000 XP, reflecting its rare utility and the value of gaining valuable insights into an area.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T01:19:11.226502+00:00",
    "aiReviewedAt": "2026-07-25T01:19:11.226502+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_gold_coin_armor": {
    "id": "mushroom_kingdom_item_gold_coin_armor",
    "name": "Fort Knox of Fungus",
    "description": "The Fort Knox of Fungus is a gleaming suit of armor, crafted from solidified gold coins and enchanted to protect its wearer. Its surface is etched with ancient runes that shimmer with protective magic, making it lighter than the weighty material might suggest – mostly because the gold has been magically compressed into an almost paper-thin layer. This armor not only provides +3 Armor Class but also grants resistance to piercing damage, ensuring that a blade's strike will glance harmlessly off its surface.",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "+3 Armor Class",
      "Resistance to piercing damage"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "giant_mushroom_delivery",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Armor Class Boost",
        "rules": "The Fort Knox of Fungus provides +3 to the wearer's Armor Class when worn. This effect is active as long as the armor is donned and not damaged."
      },
      {
        "title": "Piercing Resistance",
        "rules": "While wearing this armor, you have resistance to piercing damage from all sources. This lasts until the armor is removed or destroyed."
      }
    ],
    "levelRequirementReason": "The Fort Knox of Fungus requires a level 9 character due to its high rarity and magical complexity.",
    "vendorReason": "Koopa Shop specializes in rare, custom-made armor pieces, making it the perfect vendor for such an exquisitely crafted suit as this.",
    "shippingDetail": "The Fort Knox of Fungus is shipped via the giant mushroom delivery service, known for its reliable and swift deliveries across the kingdom.",
    "usage": {
      "activation": "This armor activates passively when donned by a character and remains active until removed or destroyed.",
      "duration": "Instantaneous activation; effect lasts while worn.",
      "endsWhen": "The armor is removed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Given its epic rarity, custom crafting process, and enchanted properties, the Fort Knox of Fungus is priced at 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:19:28.106631+00:00",
    "aiReviewedAt": "2026-07-25T01:19:28.106631+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_chronocrystal": {
    "id": "warhammer_chronocrystal",
    "name": "Chronocrystal Shard of Discord",
    "description": "The Chronocrystal Shard of Discord is a jagged, pulsating fragment of time itself, forged from the very fabric of reality. It hums with chaotic energy, granting brief glimpses into potential futures and alternate realities. Wielders must use this shard with care; its misuse risks creating temporal paradoxes that could unravel entire timelines. The Shard's power is intoxicating yet perilous, a relic from an age when time was not yet tamed.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Temporal Glimpse",
      "Evasion Boost"
    ],
    "vendor": "fate_forge",
    "shippedBy": "temporal_rift",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Temporal Glimpse",
        "rules": "As a bonus action, the wielder can activate this effect to gain a brief insight into an alternate future. This grants advantage on one ability check or saving throw of their choice within the next minute. However, there is a 10% chance (DC 15) that this use will create a temporal ripple, causing the wielder to lose their turn as they are pulled into a minor paradox."
      },
      {
        "title": "Evasion Boost",
        "rules": "This effect provides a +15% evasion bonus while active. The bonus lasts until the end of your next turn after activation or if you take a long rest, whichever comes first. There is no limit to how often this can be activated per day."
      }
    ],
    "levelRequirementReason": "Only those with experience and discipline can wield the Chronocrystal Shard safely.",
    "vendorReason": "Fate Forge specializes in relics that interact with time, making them the ideal vendor for this shard.",
    "shippingDetail": "The shipment travels through a temporal rift, ensuring its arrival is both swift and secure. However, this method can be unpredictable due to the nature of the rift itself.",
    "usage": {
      "activation": "Bonus action (Temporal Glimpse), Instantaneous (Evasion Boost)",
      "duration": "Until the end of your next turn after activation or until you take a long rest for Evasion Boost. Ends when the effect is used for Temporal Glimpse.",
      "endsWhen": "After one use per day",
      "charges": "Unlimited"
    },
    "priceReason": "The Chronocrystal Shard's rarity and potential for misuse justify its moderate price in experience points.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T15:21:31.386543+00:00",
    "aiReviewedAt": "2026-07-25T15:21:31.386543+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_grimscythe_charm": {
    "id": "curiosity_grimscythe_charm",
    "name": "Grimscythe’s Whisper",
    "description": "Grimscythe’s Whisper is a tiny, unsettling charm that resembles a miniature scythe etched into polished obsidian. This cursed trinket seems to radiate an aura of impending doom and whispers dark secrets to those who hold it too long. The whispers are not mere idle talk but chilling reminders of your most grievous mistakes, ensuring you never forget them. It is said that the charm was crafted by a vengeful spirit in the depths of a cursed forest, where even the whisper of its name can send chills down one’s spine.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💀",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Whispering Censure",
      "Misfortune Aura"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "messenger_pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispering Censure",
        "rules": "Whenever a creature within 5 feet of you holds Grimscythe’s Whisper for more than an hour, they must succeed on a DC 13 Wisdom saving throw or be frightened until the start of their next turn. This effect can only occur once per day."
      },
      {
        "title": "Misfortune Aura",
        "rules": "While holding Grimscythe’s Whisper, you suffer a -2 penalty to all saving throws and ability checks that involve wisdom-based skills. This effect persists until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This charm is crafted from cursed materials and requires a basic understanding of magic to wield.",
    "vendorReason": "The chaos dealer specializes in items that unsettle the soul, making Grimscythe’s Whisper an ideal addition to their inventory.",
    "shippingDetail": "Delivered by a messenger pigeon, which arrives with a slight delay of one hour due to the bird's unpredictable flight patterns.",
    "usage": {
      "activation": "Passive effect when held for more than an hour.",
      "duration": "Until the start of your next turn after holding it for over an hour or until you drop it.",
      "endsWhen": "The effect ends if you succeed on a DC 13 Wisdom saving throw, or when you stop holding it for more than an hour.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects the cursed origin and the significant drawback of suffering penalties while using this item.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:19:47.368165+00:00",
    "aiReviewedAt": "2026-07-25T01:19:47.368165+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_coin_of_prosperity": {
    "id": "mushroom_kingdom_item_coin_of_prosperity",
    "name": "Coin of Prosperity",
    "description": "This gleaming golden coin pulses with a warm, almost inviting light, its surface etched with ancient runes that seem to shimmer in response to your touch. Legend whispers that it brings prosperity to those who possess it, though some say it only attracts more wealth if you're already rich—Wario would insist that's the real truth! When used, the coin grants a momentary surge of luck, enhancing your chances for finding extra coins during treasure hunts and exploration.",
    "category": "consumables",
    "price": 1000,
    "icon": "💰",
    "stock": 65,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant_momentary_luck",
      "attract_more_coins"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "snail_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Momentary Luck",
        "rules": "When activated as a bonus action, the coin grants advantage on one Intelligence (Investigation) check or saving throw related to finding hidden treasure. This effect lasts for 1 minute."
      },
      {
        "title": "Attract More Coins",
        "rules": "For every 5 feet you move in any direction during your turn while holding this coin, there is a +2 bonus to the chance of finding an additional coin or item on the ground. This effect persists until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Anyone can use the Coin of Prosperity; its charm and luck are available to all adventurers.",
    "vendorReason": "Toad Town Market stocks a variety of magical trinkets, including this coin known for its auspicious properties among local merchants.",
    "shippingDetail": "The coin is carefully packed to prevent any accidental spending during transit. Snail Delivery ensures safe arrival within the week.",
    "usage": {
      "activation": "Bonus action when using it.",
      "duration": "1 minute for 'Grant Momentary Luck'; persists until your next turn for 'Attract More Coins'.",
      "endsWhen": "The duration expires or you lose possession of the coin.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rare enchantment and practical utility without overshadowing more powerful items.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T01:19:47.786717+00:00",
    "aiReviewedAt": "2026-07-25T01:19:47.786717+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_royal_guard_badge": {
    "id": "mushroom_kingdom_item_royal_guard_badge",
    "name": "Royal Guard Badge of Mushroom Heights",
    "description": "The Royal Guard Badge of Mushroom Heights is a tarnished silver medallion emblazoned with the heraldic crest of Mushroom Heights, crafted from an alloy unique to the kingdom's forges. Its origins are shrouded in legend, said to have been gifted by the mushroom royalty themselves to their most loyal guards. The badge bestows upon its possessor a minor but undeniable boost to social standing among the locals—albeit one that often invites unwanted attention from Wario, who is prone to using it as currency in his ongoing attempts to avoid paying for goods and services.",
    "category": "faction",
    "price": 1000,
    "icon": "🛡️",
    "stock": 23,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "minor_social_booster",
      "unwelcome_attention"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Social Booster",
        "rules": "When the badge is worn openly, the possessor gains a +1 bonus on Persuasion checks to influence local authorities. This effect lasts for 1 hour and can be used once per day."
      },
      {
        "title": "Unwelcome Attention",
        "rules": "While wearing this badge, there is a 20% chance that the possessor will attract unwanted attention from Wario or other members of his henchmen. This effect occurs once each time the badge is worn and lasts until the next dawn."
      }
    ],
    "levelRequirementReason": "The badge's unique craftsmanship requires a basic understanding of social interactions.",
    "vendorReason": "Toad Town Market stocks the badge as it is a popular souvenir among tourists and locals alike, enhancing their experiences with Mushroom Heights.",
    "shippingDetail": "Shipped by trusted couriers using the royal postal service, ensuring timely delivery to adventurers across the kingdom.",
    "usage": {
      "activation": "Passive effect; activation occurs simply by wearing the badge openly.",
      "duration": "1 hour or until removed.",
      "endsWhen": "The duration ends when the badge is removed or at the next dawn.",
      "charges": "Unlimited uses, once per day for minor social booster."
    },
    "priceReason": "The badge's rarity and unique craftsmanship justify its price of 1000 XP. It combines historical significance with practical utility in social situations.",
    "priceOriginal": 6750,
    "priceReviewedAt": "2026-07-25T01:20:00.915256+00:00",
    "aiReviewedAt": "2026-07-25T01:20:00.915256+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chronometric_eraser": {
    "id": "kivotos_item_chronometric_eraser",
    "name": "Chronometric Eraser",
    "description": "The Chronometric Eraser is a warm cylinder with faint, pulsating lines that trace its surface. Crafted from ancient chronal metal found in the ruins of the Timekeeper's Keep, it subtly bends time to correct minor mistakes. When activated, it rewinds a failed action by 3 seconds, allowing you to reattempt it without penalty. The device is said to be cursed if used more than three times within an hour, causing a brief ripple effect that disrupts nearby time.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "rewind_action",
      "time_ripple"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Action",
        "rules": "As a bonus action, you can rewind your last failed action by 3 seconds. You must have already completed the action but failed its intended result. This effect is instantaneous and does not provoke opportunity attacks."
      },
      {
        "title": "Time Ripple",
        "rules": "If used more than three times in any one hour, a time ripple occurs. All creatures within 10 feet of you must succeed on a DC 15 Constitution saving throw or be knocked prone for 1d4 rounds. This effect does not stack."
      }
    ],
    "levelRequirementReason": "The Chronometric Eraser's ability to manipulate time requires a fundamental understanding of temporal mechanics, accessible to characters with at least first-level proficiency in Arcana or Investigation.",
    "vendorReason": "The student store caters to the academic pursuits and practical needs of young scholars, including items that enhance learning and performance.",
    "shippingDetail": "Ships via standard mail within a week from the vendor.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "The effect is used up or if the user makes more than three uses in one hour.",
      "charges": "Unlimited, but subject to the time ripple limitation"
    },
    "priceReason": "Crafted from rare chronal metal and imbued with ancient magical properties, this item's price reflects its unique utility and potential for misuse.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T01:20:09.261514+00:00",
    "aiReviewedAt": "2026-07-25T01:20:09.261514+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_phantom_notepad": {
    "id": "kivotos_item_phantom_notepad",
    "name": "Phantom Notepad of Lost Ideas",
    "description": "The Phantom Notepad of Lost Ideas is a tattered, leather-bound notepad whose pages seem to write themselves in a swirling ink. Its cryptic diagrams and half-formed thoughts are said to contain glimpses into forgotten memories or potential futures—though deciphering them is as nightmarish as it is enlightening. The notepad's pages rustle with an eerie life of their own, whispering secrets that only the most resilient can understand.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📝",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Randomly grants a clue (low level)",
      "Chance to gain a minor illusion effect"
    ],
    "vendor": "club_supply",
    "shippedBy": "surface_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random Clue",
        "rules": "When activated as an action, this notepad randomly provides a low-level clue or insight related to the user's current situation. The duration is instantaneous, and it has a recharge on a short rest."
      },
      {
        "title": "Minor Illusion",
        "rules": "Once per long rest, activating this notepad as an action can invoke a minor illusion effect that lasts for 1 hour. The DC to discern the illusion is equal to 8 + your Charisma modifier. The effect can be dispelled by any means."
      }
    ],
    "levelRequirementReason": "The notepad's cryptic nature requires a user with some experience to properly interpret its contents.",
    "vendorReason": "Club Supply stocks this item as part of their extensive collection of arcane curiosities and magical trinkets.",
    "shippingDetail": "The notepad is carefully packed in a protective case to prevent any damage during transit.",
    "usage": {
      "activation": "activated as an action",
      "duration": "instantaneous for the clue, 1 hour for the minor illusion effect",
      "endsWhen": "use ends upon activation or dispelling of the minor illusion effect",
      "charges": "recharges on a short rest"
    },
    "priceReason": "The notepad's rare and mystical properties, combined with its limited use and the time required to interpret its contents, justify this price.",
    "priceOriginal": 325,
    "priceReviewedAt": "2026-07-25T01:21:03.951604+00:00",
    "aiReviewedAt": "2026-07-25T01:21:03.951604+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_scroll_of_reflection": {
    "id": "teyvat_item_scroll_of_reflection",
    "name": "Scroll of Reflection - Mizumoto Style",
    "description": "The Scroll of Reflection - Mizumoto Style is a meticulously crafted scroll, its surface shimmering with ink that dances like water under the moonlight. Unfurl it at your side to summon a fleeting shield, one that not only absorbs damage but also mirrors a portion back to the attacker, creating an elegant dance of defensive prowess and offensive redirection. This scroll, a true masterpiece from the Mizumoto clan, is as much a work of art as it is a weapon of war.",
    "category": "consumables",
    "price": 1000,
    "icon": "🛡️",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Reflective Shield",
      "Damage Return"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_cart",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reflective Shield",
        "rules": "When activated via a bonus action, this scroll creates an impenetrable shield that absorbs 30% of the damage dealt to you. The shield lasts for two turns and can only be used once per long rest."
      },
      {
        "title": "Damage Return",
        "rules": "During the duration of the shield, any damage reflected back to the attacker is increased by an additional 10%. This effect has no save DC and does not require a reaction or bonus action to activate."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Mizumoto-style martial arts and familiarity with their techniques.",
    "vendorReason": "As the official supplier of Mizu Clan artifacts, Liyue Harbor ensures that only authentic and rare items are made available.",
    "shippingDetail": "The scroll is carefully packed in a seaworthy crate to ensure its safe journey across the bay.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "2 turns",
      "endsWhen": "Ends when used, or after two turns if not used.",
      "charges": "1 use per long rest"
    },
    "priceReason": "Crafted with rare ink and parchment, this scroll is a one-of-a-kind item, making it worth the investment.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T01:20:29.323471+00:00",
    "aiReviewedAt": "2026-07-25T01:20:29.323471+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_archon_favor_amulet": {
    "id": "teyvat_item_archon_favor_amulet",
    "name": "Archon Favor Amulet - Diluc's Blessing",
    "description": "The Archon Favor Amulet – Diluc's Blessing radiates a warm, cinnamon-scented glow that whispers of Mondstadt’s glory and power. This amulet not only grants its wearer increased resistance to Pyro damage by 15%, but also imbues them with an aura that boosts morale among allies, enhancing their confidence and battle prowess. The amulet's charm is said to have been crafted from fragments of the Archon itself, making it a rare artifact of immense value.",
    "category": "premium",
    "price": 1000,
    "icon": "✨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Pyro Resistance Boost",
      "Ally Morale Boost"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "wind_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pyro Resistance Boost",
        "rules": "The wearer gains a +15% resistance to Pyro damage. This effect is passive and does not require activation."
      },
      {
        "title": "Ally Morale Boost",
        "rules": "For every ally within 30 feet, the wearer provides a +5% bonus to their attack rolls and saving throws for the duration of the encounter. The effect ends if the wearer drops to 0 hit points or is incapacitated."
      }
    ],
    "levelRequirementReason": "This amulet's power is accessible to all adventurers, making it a valuable starting item.",
    "vendorReason": "The market in Mondstadt is known for its diverse array of unique and rare items, including those favored by the Archon himself.",
    "shippingDetail": "Shipped via the swift Wind Messenger, this amulet arrives quickly and safely to eager adventurers.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts for the duration of the encounter or until the wearer drops to 0 hit points or is incapacitated.",
      "endsWhen": "The effect ends if the wearer drops to 0 hit points, becomes incapacitated, or the encounter concludes.",
      "charges": "Unlimited; no charges."
    },
    "priceReason": "This amulet offers significant benefits for all adventurers and is priced accordingly as a rare item.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:20:41.088218+00:00",
    "aiReviewedAt": "2026-07-25T01:20:41.088218+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_frosting_fixer": {
    "id": "leclaire_isle_frosting_fixer",
    "name": "Frosting Fixer's Touch",
    "description": "The Frosting Fixer's Touch is a delicate paste crafted by the Dough Folk, sealed in an ornate tin. This artisanal repair paste can instantly mend minor cracks and imperfections in baked goods or even armor plating with a simple touch. It is rumored to contain fermented berries from the frozen tundra of LeClaire Isle, which only the happiest gnome can produce. Applying it grants a +2 bonus to Repair skill checks for an hour.",
    "category": "services",
    "price": 1000,
    "icon": "✨",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Instant repair",
      "Armor durability restoration"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "magic_delivery_beak",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Repair",
        "rules": "Apply the Frosting Fixer's Touch as an action to instantly repair minor cracks or imperfections. This effect has no save DC and ends when the object is used normally or after 1 minute."
      },
      {
        "title": "Restores Armor Durability",
        "rules": "When applied, this paste restores 20% of armor's durability as a bonus action. This effect lasts for 1 hour and does not require saving. It ends when the object is used normally or after 1 hour."
      }
    ],
    "levelRequirementReason": "The Frosting Fixer’s Touch requires minimal skill, making it accessible to all adventurers.",
    "vendorReason": "Pastry Palace is renowned for its expertise in crafting such delicate pastes and tools that enhance the work of bakers and armorers alike.",
    "shippingDetail": "Shipped by the swift magic delivery beaks, ensuring it arrives fresh and potent.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous for repair; 1 hour for durability restoration",
      "endsWhen": "Normal use of the object or after an hour",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rarity and utility in both culinary and armor repair.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:20:50.608005+00:00",
    "aiReviewedAt": "2026-07-25T01:20:50.608005+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sugar_shard_amulet": {
    "id": "leclaire_isle_sugar_shard_amulet",
    "name": "Sugar Shard Amulet of Sweetness",
    "description": "The Sugar Shard Amulet of Sweetness, crafted from crystallized sugar harvested in the enigmatic Whispering Swamps, radiates a sugary glow that can be seen for miles around. It's said to charm small, sweet-loving creatures and subtly enhance one's luck in dice rolls, making it a favorite among adventurers seeking both fortune and companionship on their quests. Wario assures that this amulet is 'deliciously chaotic,' drawing friendly critters near as it does the pastries and candies of olden times.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍬",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Attracts small, sweet-loving creatures",
      "Enhances luck in dice rolls"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "winged_delivery_beetle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Attracts Small, Sweet Creatures",
        "rules": "The amulet attracts small, friendly creatures with a 20% chance per hour. Beneficial interactions occur on a successful DC 14 Charisma (Persuasion) check."
      },
      {
        "title": "Enhances Luck in Dice Rolls",
        "rules": "When the wearer makes an attack roll or saving throw, they have a 5% bonus to their roll for 8 hours. This effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "Suitable for any adventurer, as it requires no particular class or background.",
    "vendorReason": "Sweet Supplies specializes in items that cater to the whimsical and the sweet-toothed, making this amulet a fitting addition.",
    "shippingDetail": "Shipped by winged delivery beetles known for their efficiency and reliability within the Whispering Swamps region.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "8 hours, resets at the start of a long rest.",
      "endsWhen": "The wearer completes a long rest or the amulet is removed from their person.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced for its rarity and unique abilities, this amulet provides significant utility without being overpowered.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T01:21:01.822587+00:00",
    "aiReviewedAt": "2026-07-25T01:21:01.822587+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_crusty_cutter": {
    "id": "leclaire_isle_item_crusty_cutter",
    "name": "Crusty Cutter",
    "description": "The Crusty Cutter is a miniature rolling pin forged from hardened gingerbread dough and enchanted with a mischievous sprite's touch. It slices through pastry like a hot knife through butter, effortlessly flattening dough in one swift motion. With each use, there’s a delightful risk of accidentally triggering a small sugar explosion that can either add an unexpected crunch to your confection or cause a minor mess if not handled carefully.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔪",
    "stock": 62,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Flattens Dough Effortlessly",
      "Random Sugar Explosion"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Dough Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Flattens Dough Effortlessly",
        "rules": "When used to flatten dough, the Crusty Cutter reduces crafting time by 10%. The effect is instantaneous and requires no additional action."
      },
      {
        "title": "Random Sugar Explosion",
        "rules": "There is a 5% chance each use for a small sugar explosion to occur. If this happens, it creates an area of minor mess requiring cleanup with no save or DC required. The effect ends when the pastry creation process is completed."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners and bakers who need a little extra help in their craft.",
    "vendorReason": "Dough Depot specializes in tools and ingredients that enhance the baking experience, making it only fitting to carry this enchanted rolling pin.",
    "shippingDetail": "The item is delivered by the efficient Dough Delivery Drone, ensuring timely arrival with no delays.",
    "usage": {
      "activation": "Instantaneous use when flattening dough during pastry creation.",
      "duration": "Instantaneous effect.",
      "endsWhen": "The pastry creation process is completed or if a sugar explosion occurs.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Crusty Cutter's balance is justified by its unique effects that enhance the baking experience without granting overpowered abilities, making it a fair price for bakers looking to improve their craft.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T01:20:56.665374+00:00",
    "aiReviewedAt": "2026-07-25T01:20:56.665374+00:00",
    "aiReviewVersion": 1
  }
};
