// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_077 = {
  "warhammer_item_desolation_striker_of_shadows": {
    "id": "warhammer_item_desolation_striker_of_shadows",
    "name": "Desolation Striker's Insignias of Shadows",
    "description": "The Desolation Striker's Insignias of Shadows are forged from the very essence of a fallen empire, each insignia a testament to lost battles and forgotten warriors. These insignias grant their bearer an unsettling aura, shrouding them in perpetual shadow and enhancing stealth during combat. Upon donning these insignias, a user's movements become unhurried and silent, while the shadows around them grow more substantial, increasing the chance of remaining unseen by foes.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌑",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Shadow Cloak",
      "Stealth Mastery"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Night Serpent Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Cloak",
        "rules": "Activates as a bonus action. The wearer gains advantage on Dexterity (Stealth) checks for 1 minute, and there is a +20% chance to avoid detection during this time. This effect ends if the user takes any hostile action."
      },
      {
        "title": "Stealth Mastery",
        "rules": "The wearer's movement speed increases by 30 feet while wearing these insignias. This benefit lasts until the wearer removes them or falls unconscious, but it is lost if the user engages in combat."
      }
    ],
    "levelRequirementReason": "These insignias are designed for a wide range of users, from beginners to seasoned warriors, as they provide essential stealth capabilities.",
    "vendorReason": "The chaos dealer is known for acquiring and selling unique relics, including those that enhance one's ability to remain unseen in the shadows.",
    "shippingDetail": "Ships via Night Serpent Express, ensuring swift delivery under the cover of darkness.",
    "usage": {
      "activation": "Bonus action to activate Shadow Cloak; movement speed increase is always active while worn.",
      "duration": "Shadow Cloak lasts for 1 minute or until a hostile action is taken. Movement speed increase persists as long as the insignias are worn.",
      "endsWhen": "The wearer takes any hostile action, falls unconscious, or removes the insignias.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the item's rare material and its significant boost to stealth capabilities without overburdening lower-level characters.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T01:57:48.180216+00:00",
    "aiReviewedAt": "2026-07-25T01:57:48.180216+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_fate_striker_of_temporal_rift": {
    "id": "warhammer_item_fate_striker_of_temporal_rift",
    "name": "Fate Striker's Insignias of Temporal Rift",
    "description": "The Fate Striker's Insignias of Temporal Rift are delicate, jeweled devices forged from fractured time itself. When activated, they warp reality in brief but potent bursts, allowing wielders to manipulate the flow of moments around them. Each insignia hums with a spectral pulse, hinting at its power over the temporal fabric. Use these relics carefully; their manipulation of time can have unpredictable consequences on both friend and foe alike.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Manipulation",
      "Future Glimpse"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Chronomaestro's Express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Manipulation",
        "rules": "As a bonus action, the user can activate an insignia to create a brief temporal distortion. This effect has a range of 5 feet and lasts for one round. The target must succeed on a Dexterity saving throw (DC 14) or be pushed back 10 feet. On a successful save, the target is unaffected."
      },
      {
        "title": "Future Glimpse",
        "rules": "Once per long rest, when an insignia is activated in combat, it reveals a possible future outcome of the next attack made against or by the user (10% chance). The user gains advantage on their next attack roll or save before the end of the next short or long rest."
      }
    ],
    "levelRequirementReason": "These intricate insignias require a significant understanding of temporal mechanics, which is not easily attained without advanced training and experience.",
    "vendorReason": "Fate Forge has the expertise to craft and vend such delicate relics that manipulate the very fabric of time itself.",
    "shippingDetail": "The insignias must be shipped via Chronomaestro's Express, ensuring their safe arrival without temporal distortions affecting their potency.",
    "usage": {
      "activation": "Bonus action to activate and use the insignia for its effects.",
      "duration": "One round for 'Temporal Manipulation'. Instantaneous for 'Future Glimpse'.",
      "endsWhen": "The effect ends when the duration expires or when another insignia is activated.",
      "charges": "Unlimited, but only one 'Future Glimpse' per long rest."
    },
    "priceReason": "Crafted from rare materials and requiring expert knowledge to wield without catastrophic consequences, these insignias are priced accordingly.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T01:58:05.125115+00:00",
    "aiReviewedAt": "2026-07-25T01:58:05.125115+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_chronosplitter_skull": {
    "id": "warhammer_item_chronosplitter_skull",
    "name": "The Chronosplitter's Jeweled Skull",
    "description": "The Chronosplitter's Jeweled Skull, a skull crafted by the Fate Forge from fractured timelines, radiates an eerie glow as it weaves together threads of fate and possibility. When held, its wearer glimpses fleeting visions of alternative futures, but prolonged contact risks unraveling one’s essence into temporal chaos. Its power is both wondrous and perilous, offering glimpses of potential outcomes while threatening to destabilize the very fabric of reality.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Glimpse",
      "Displace Enemies"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Imperial Courier Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Glimpse",
        "rules": "As a bonus action, the wearer can activate the skull for 3 seconds. During this time, they gain insight into one possible future outcome, but suffer a -10 penalty to all attacks and ability checks made during that period."
      },
      {
        "title": "Displace Enemies",
        "rules": "At the start of each of the wearer’s turns, there is a 25% chance that nearby enemies are displaced by 1 tile. This effect has no range but can only occur once per turn and does not affect allies."
      }
    ],
    "levelRequirementReason": "The skull's power requires the user to be aware of its potential, regardless of their current level.",
    "vendorReason": "The Fate Forge is renowned for its mastery over time and fate, making it a fitting vendor for such an artifact.",
    "shippingDetail": "Delivered with utmost precision by the Imperial Courier Drone, this fragile item must be handled delicately to prevent any temporal distortions during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "3 seconds when activated",
      "endsWhen": "The effect ends immediately if the user is no longer holding the skull or if they are incapacitated.",
      "charges": "Unlimited, but only one use per short rest"
    },
    "priceReason": "Balanced for its limited recharge and the risk it poses to the user.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:58:01.204175+00:00",
    "aiReviewedAt": "2026-07-25T01:58:01.204175+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_desolation_stalker": {
    "id": "warhammer_item_desolation_stalker",
    "name": "The Purified Desolation Stalker's Fang",
    "description": "The Purified Desolation Stalker's Fang is a macabre trophy made from a fallen Imperial Guard commander’s fang. Crafted by the hands of a master forger, this relic radiates an eerie chill that heightens one’s awareness of danger and grants fleeting bursts of unnatural speed. Upon wielding it, you gain a heightened sense of impending doom and the ability to move with unsettling swiftness. This fang also allows you to detect hidden enemies within a 10-foot radius, providing a critical edge in combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 27,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Enhanced Danger Sense",
      "Unsettling Speed"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Enhanced Danger Sense",
        "rules": "When you enter a new combat encounter or area, you gain advantage on Perception checks to detect hidden enemies within 10 feet for the duration of the encounter."
      },
      {
        "title": "Unsettling Speed",
        "rules": "You can take a bonus action at the start of your turn to grant yourself a +20 foot increase to movement speed until the end of your next turn. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This relic requires significant combat experience, as it taps into the user's heightened awareness and physical prowess.",
    "vendorReason": "The chaos dealer has connections to dark forces that allow them to procure such a trophy from the battlefield.",
    "shippingDetail": "Delivered by swift aerial couriers, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Bonus action at the start of your turn",
      "duration": "+20 foot increase to movement speed until end of next turn",
      "endsWhen": "Effect ends if you fall unconscious or take a short rest",
      "charges": "Once per long rest"
    },
    "priceReason": "The item's rarity, the craftsmanship involved, and its combat utility justify this price in XP.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T01:57:46.538713+00:00",
    "aiReviewedAt": "2026-07-25T01:57:46.538713+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_mk9_siege_skull": {
    "id": "warhammer_item_mk9_siege_skull",
    "name": "Mk.9 Siege Skull of the Shattered Legion",
    "description": "The Mk.9 Siege Skull of the Shattered Legion is a formidable relic recovered from an ancient Imperial fortress, its surface etched with the skulls of countless foes. This skull pulses with raw kinetic energy, capable of delivering a devastating shockwave that splits open the earth beneath it. The skull’s power can be harnessed to stun an opponent and restore lost health, bolstering the wielder in their darkest hour.",
    "category": "consumables",
    "price": 1000,
    "icon": "💥",
    "stock": 9,
    "rarity": "common",
    "stockType": "special_order",
    "effects": [
      "Stuns Target",
      "Shockwave"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Armored Transport Truck",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Stun",
        "rules": "When activated, the Mk.9 Siege Skull delivers a potent shock that stuns an enemy for two turns, reducing their ability to act."
      },
      {
        "title": "Shockwave",
        "rules": "Upon activation, this relic sends out a shockwave affecting all enemies within 10 feet. Each adjacent creature takes 50 fire damage and is knocked prone. This effect has a 30% chance of occurring upon use."
      }
    ],
    "levelRequirementReason": "This relic requires significant strength to wield its powerful energies.",
    "vendorReason": "As the skull is an artifact of Imperial craftsmanship, it's only sold by the Imperial Armory.",
    "shippingDetail": "Due to its weight and fragility, it must be transported in a specially padded container.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausts the skull's charge or when the user is incapacitated.",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "The relic’s historical significance and potent effects justify its moderate price.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-25T01:58:30.597244+00:00",
    "aiReviewedAt": "2026-07-25T01:58:30.597244+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_dragonstride_boots": {
    "id": "faerun_item_the_dragonstride_boots",
    "name": "The Dragonstride Boots of Klargan's Fury",
    "description": "The Dragonstride Boots of Klargan's Fury are scarred leather boots that hum with an ancient, fiery power. Each step you take rumbles like a distant thunderstorm, leaving behind faint scorch marks on any surface. Crafted from the very skin of a dragon slain in a legendary battle, these boots grant you unnaturally swift movement across any terrain and bestow fire resistance, making your passage through flames as effortless as walking through air.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "swift stride",
      "fire resistance"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "Griffon Post",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Swift Stride",
        "rules": "While wearing these boots, you have advantage on Dexterity (Acrobatics) checks. Additionally, your movement speed increases by 10 feet for as long as you are not incapacitated or restrained."
      },
      {
        "title": "Fire Resistance",
        "rules": "You have resistance to fire damage and gain a +2 bonus to saving throws against being set on fire. This effect lasts until the start of your next turn after coming into contact with a source of fire."
      }
    ],
    "levelRequirementReason": "The boots' arcane power requires a mage's discipline and experience.",
    "vendorReason": "Sword Coast Traders have extensive trade routes across Faerûn, allowing them to offer rare artifacts like Klargan's Fury.",
    "shippingDetail": "Ships via the fastest Griffon Post route, delivered within three days of purchase.",
    "usage": {
      "activation": "Automatic when you start your turn in a square adjacent to a source of fire or while moving through difficult terrain.",
      "duration": "Until the start of your next turn after coming into contact with a source of fire or moving out of difficult terrain.",
      "endsWhen": "The effect ends if you are incapacitated, restrained, or stop moving through flames.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from dragon skin and imbued with ancient magic, these boots command a high price.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T01:58:17.370400+00:00",
    "aiReviewedAt": "2026-07-25T01:58:17.370400+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_echoing_amulet_of_silence": {
    "id": "faerun_item_the_echoing_amulet_of_silence",
    "name": "The Echoing Amulet of Silenced Whispers",
    "description": "The Echoing Amulet of Silenced Whispers, forged from solidified shadowstone mined within the Silent Peaks, whispers secrets of forgotten battles to its wearer. This amulet dampens magical sound and disrupts spells that rely on vocalizations or auditory illusions, granting heightened awareness to subtle movements in dimly lit areas. Wielders find themselves invisible to sound-based detection, yet their own movements are masked by an ambient hum that conceals their presence.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🤫",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Silence Spells",
      "Stealth Masking"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Silence Spells",
        "rules": "When you cast a spell with a verbal component or rely on auditory illusions, there is a 30% chance that the spell fails. This effect lasts until the start of your next turn."
      },
      {
        "title": "Stealth Masking",
        "rules": "You gain advantage on Dexterity (Stealth) checks when you attempt to hide in dim light or darkness, and you are considered proficient even if you lack proficiency. This effect lasts for 1 minute once per long rest."
      }
    ],
    "levelRequirementReason": "The amulet's power requires a high level of magical understanding to wield effectively.",
    "vendorReason": "Baldur, the patron of adventure, appreciates the subtle artistry and strategic utility this item provides.",
    "shippingDetail": "Ships via the Shadow Courier, ensuring safe delivery through dimly lit corridors within Faerûn.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "1 minute per long rest until you use it again or it is destroyed.",
      "endsWhen": "The start of your next turn after casting a spell with verbal components or using auditory illusions, or when the amulet is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP to reflect its strategic advantage and limited utility in combat without being overpowered.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:58:50.663193+00:00",
    "aiReviewedAt": "2026-07-25T01:58:50.663193+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_chosen_boots_of_stormcaller": {
    "id": "faerun_item_the_chosen_boots_of_stormcaller",
    "name": "The Chosen Boots of Stormcaller Theron",
    "description": "The Chosen Boots of Stormcaller Theron are crafted from leather dampened by countless tempests, their surface etched with the runes of ancient storms. These boots allow the wearer to command brief gusts of wind and summon fleeting rain clouds, offering protection against lightning's wrath in a stormy world. The boots' damp leather clinks softly with each step, echoing the legacy of Theron, the legendary Stormcaller who once walked upon them.",
    "category": "equipment",
    "price": 5000,
    "icon": "⚡",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "summon gust",
      "lightning resistance"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Sea Serpent Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Summons Gust",
        "rules": "As a bonus action, the wearer can call forth a gust of wind within a 10-foot radius. The gust lasts for up to 1 minute or until a strong wind disperses it. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Lightning Resistance",
        "rules": "The wearer gains resistance to lightning damage while wearing the boots, but this effect does not stack with other sources of resistance or immunity."
      }
    ],
    "levelRequirementReason": "The boots' power demands a high level of mastery over elemental magic.",
    "vendorReason": "Waterdeep's bustling market is known for its connection with arcane and elemental artifacts, making it the ideal place to find these powerful storm-themed boots.",
    "shippingDetail": "Due to the boots' damp nature, they are delivered in a specially insulated package to maintain their condition.",
    "usage": {
      "activation": "Bonus action for summon gust; passive while wearing for lightning resistance",
      "duration": "Instantaneous (summon gust), up to 1 minute or until dispersed by wind",
      "endsWhen": "At the end of a long rest or when removed from the wearer's feet",
      "charges": "Unlimited, but cannot be used if not actively wearing the boots"
    },
    "priceReason": "The boots are crafted with rare and ancient materials, making them both powerful and highly valuable.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-25T01:58:38.546342+00:00",
    "aiReviewedAt": "2026-07-25T01:58:38.546342+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_runic_transfer_slayer_medal_01": {
    "id": "kivotos_item_runic_transfer_slayer_medal_01",
    "name": "The Runic Transfer Slayer's Medallion - Mk.57",
    "description": "The Runic Transfer Slayer's Medallion - Mk.57 is a sleek obsidian disc adorned with intricate runic engravings, each a testament to a fallen warrior's valor. This relic pulses with residual energy from the academy's fiercest combatants, granting you a fleeting surge of tactical awareness and aggressive reflexes when activated. Engraved in molten steel by the forgeheart core, it boosts your attack speed for five seconds and increases your chance to dodge attacks during that time.",
    "category": "equipment",
    "price": 1800,
    "icon": "⚔️",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Boosted Attack Speed",
      "Increased Dodging Chance"
    ],
    "vendor": "academy_armory",
    "shippedBy": "drone_delivery",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Boosted Attack Speed",
        "rules": "When activated as a bonus action, this medallion grants the wearer an attack speed boost for five seconds. The duration is instantaneous upon activation and ends when the user's next turn concludes."
      },
      {
        "title": "Increased Dodging Chance",
        "rules": "For every successful hit while this effect is active, there is a 10% chance to dodge the incoming attack (increases by +5% per level after 5th). This effect ends when the user's next turn concludes."
      }
    ],
    "levelRequirementReason": "Requires proficiency in martial weapons for effective use of its combat-enhancing properties.",
    "vendorReason": "The academy armory stocks this relic due to its direct connection with the school's rigorous training and its unique historical significance.",
    "shippingDetail": "Ships via drone within three business days of purchase, delivered directly to your quarters.",
    "usage": {
      "activation": "Bonus action",
      "duration": "5 seconds",
      "endsWhen": "At the end of the user's next turn",
      "charges": "Unlimited"
    },
    "priceReason": "The medallion's unique runic engravings and connection to the academy's fiercest warriors justify its high price.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T01:59:05.446183+00:00",
    "aiReviewedAt": "2026-07-25T01:59:05.446183+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_transfer_curiosity_chronometric_pin_02": {
    "id": "kivotos_item_transfer_curiosity_chronometric_pin_02",
    "name": "The Transfer Chronometric Pin - Echoes of Detention",
    "description": "The Transfer Chronometric Pin - Echoes of Detention is a delicate brass pin, its surface etched with the intricate pattern of an hourglass. Crafted from the remnants of ancient detainment cells, this relic subtly manipulates time around its wearer, slowing perception and briefly disrupting enemy reactions within a ten-foot radius. Though it offers no drastic temporal distortions, its effect is both tangible and unnerving, as those in proximity feel their movements delayed by an imperceptible yet palpable force.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Slows Perception",
      "Disrupts Enemy Actions"
    ],
    "vendor": "student_store",
    "shippedBy": "express_delivery",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Slowed Perception",
        "rules": "When activated, the pin creates a localized area where all creatures within a ten-foot radius must make a DC 15 Dexterity saving throw. On a failed save, they experience a -2 penalty to their speed and AC for 3 seconds."
      },
      {
        "title": "Disrupted Enemy Actions",
        "rules": "For the duration of the effect, there is a 10% chance that any attack or action taken by an enemy within ten feet will be delayed by one round. This does not apply to reactions or opportunity attacks."
      }
    ],
    "levelRequirementReason": "The pin's subtle but effective manipulation of time requires a moderate understanding of temporal mechanics.",
    "vendorReason": "The student store often stocks rare curiosities, and this pin, with its origins tied to ancient detention cells, fits perfectly into their collection.",
    "shippingDetail": "Ships via express courier, ensuring the pin arrives in pristine condition for immediate use.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous; lasts 3 seconds or until a creature within range makes an attack or action.",
      "endsWhen": "The effect ends when its duration expires or a creature within range successfully attacks or acts.",
      "charges": "Unlimited"
    },
    "priceReason": "While not a high-priced item, the pin's rarity and unique properties make it valuable for those who understand its temporal capabilities.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:59:37.200178+00:00",
    "aiReviewedAt": "2026-07-25T01:59:37.200178+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_legendary_transfer_medals_of_excellence_03": {
    "id": "kivotos_item_legendary_transfer_medals_of_excellence_03",
    "name": "The Transfer Medals of Excellence - Celestial Grade",
    "description": "The Transfer Medals of Excellence - Celestial Grade are forged from the purest ambition and the brightest achievements of a celestial academy. These radiant medals bestow upon their wearer an unyielding focus and a permanent +2 bonus to Intelligence and Wisdom. Upon successfully completing an arduous intellectual task, the wearer can invoke an ephemeral transfer of knowledge, sharing a small fragment with another willing participant within 30 feet for 1 minute.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "back_order",
    "effects": [
      "permanent stat boost",
      "knowledge transfer"
    ],
    "vendor": "academy_armory",
    "shippedBy": "mythic_carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Knowledge Transfer",
        "rules": "When the wearer successfully completes a difficult task, they may use an action to invoke the knowledge transfer. A willing target within 30 feet must make a DC 15 Intelligence saving throw. On a success, both the caster and the target gain temporary hit points equal to half their level (rounded down). This effect can be used once per long rest."
      },
      {
        "title": "Stat Boost",
        "rules": "The wearer gains a permanent +2 bonus to both Intelligence and Wisdom. There are no further activations or limits for this effect."
      }
    ],
    "levelRequirementReason": "These medals are crafted for beginners, as they provide foundational support for any aspiring scholar.",
    "vendorReason": "The academy armory houses the finest creations of their esteemed institution.",
    "shippingDetail": "Shipped with utmost care and delivered within a week.",
    "usage": {
      "activation": "Action or Reaction (for Knowledge Transfer)",
      "duration": "Instantaneous for stat boost, 1 minute for knowledge transfer",
      "endsWhen": "On completion of the task or after duration ends",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to provide significant but not game-breaking benefits at a fair price.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T01:58:54.685209+00:00",
    "aiReviewedAt": "2026-07-25T01:58:54.685209+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_crimson-legion-chronoshard": {
    "id": "warhammer_item_crimson-legion-chronoshard",
    "name": "The Crimson Legion Chronoshard Warhammer",
    "description": "The Crimson Legion Chronoshard Warhammer glows with fractured time, its haft etched with ancient runes that pulse with every strike. This relic of war grants the wielder a fleeting surge of accelerated attack speed, allowing them to deal devastating blows in rapid succession, and briefly phases through enemy defenses, dodging attacks as if they were mere echoes. A shard from a shattered time rift imbues it with temporal power, making it a formidable tool for overcoming foes in moments of crisis.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Surge",
      "Phased Dodger"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Imperial Courier Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Surge",
        "rules": "On activation, the wielder gains advantage on attack rolls and deals an additional 1d6 force damage. This effect lasts for 3 seconds and can be used once every short or long rest."
      },
      {
        "title": "Phased Dodger",
        "rules": "The user becomes partially intangible for 2 turns, gaining resistance to all damage from attacks of a single type (chosen at activation). If the user is hit by an attack while phased, they take half damage instead. This effect can be used once every long rest."
      }
    ],
    "levelRequirementReason": "The intricate runes and temporal properties require a certain level of mastery to wield effectively.",
    "vendorReason": "The Imperial Armory specializes in rare and powerful relics, including this artifact from the Crimson Legion's storied past.",
    "shippingDetail": "Delivered swiftly by the drones of the Legion, ensuring no delays in acquiring this formidable weapon.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "3 seconds for Temporal Surge; 2 turns for Phased Dodger",
      "endsWhen": "Ends when the duration expires or the user is hit by an attack while phased (Phased Dodger only)",
      "charges": "Unlimited, but each effect can be used once per short or long rest."
    },
    "priceReason": "Balanced at this price as a rare item with unique temporal abilities that require careful handling and mastery.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T01:59:20.338889+00:00",
    "aiReviewedAt": "2026-07-25T01:59:20.338889+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_nether-thief-of-silence": {
    "id": "warhammer_item_nether-thief-of-silence",
    "name": "Nether Thief's Armor of Silence",
    "description": "Forged from blackened steel harvested from the depths of a forgotten empire, this suit of armor whispers into the void, allowing for silent movement and brief disruptions to enemy perception – an invaluable asset on the battlefield. The Nether Thief's Armor of Silence not only muffles sound but also subtly alters light around you, creating a deceptive aura that reduces your visibility. It’s an enigmatic relic that promises stealth in the most unforgiving of battles.",
    "category": "equipment",
    "price": 1000,
    "icon": "🤫",
    "stock": 47,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Silent Movement",
      "Reduced Detection"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Silent Movement",
        "rules": "While wearing this armor, you gain advantage on Dexterity (Stealth) checks. Additionally, once per short rest, you can reduce the noise level in a 10-foot radius to the extent that creatures within 30 feet have disadvantage on Perception checks made to detect you."
      },
      {
        "title": "Reduced Detection",
        "rules": "When wearing this armor, your presence is harder to detect. Creatures making Wisdom (Perception) checks or using Detect Magic to locate you must succeed on a DC 15 Intelligence saving throw or fail to notice your location. This effect lasts for 1 minute."
      }
    ],
    "levelRequirementReason": "This armor requires significant magical and physical prowess, suitable only for seasoned adventurers.",
    "vendorReason": "The chaos dealer is known to trade in relics from forgotten realms, making this suit of armor a fitting addition to their inventory.",
    "shippingDetail": "Ships within two game days with the Winged Courier service.",
    "usage": {
      "activation": "Passive effect until triggered; once per short rest to activate the silent movement ability.",
      "duration": "Silent Movement lasts for a minute, Reduced Detection for 1 minute.",
      "endsWhen": "The effects end when you remove the armor or at the start of your next turn after you take damage.",
      "charges": "Unlimited"
    },
    "priceReason": "This suit is crafted from rare materials and infused with potent magical energies, making it a valuable asset for any adventurer.",
    "priceOriginal": 1850,
    "priceReviewedAt": "2026-07-25T01:59:27.260680+00:00",
    "aiReviewedAt": "2026-07-25T01:59:27.260680+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_fate-forge-mk-37-blessed-plate": {
    "id": "warhammer_item_fate-forge-mk-37-blessed-plate",
    "name": "Mk.37 Blessed Plate of the Fate Weaver",
    "description": "Forged by the enigmatic Fate Forge from blessed iron that has lain in sacred ground for centuries, this Mk.37 Blessed Plate hums with divine energy. It not only protects against necrotic damage but also grants the wearer a fortifying resolve, bolstering their willpower and reflexes. The armor seems to instinctively adjust its defenses based on the user's intended path, making it an invaluable companion for fate’s most delicate weavers.",
    "category": "equipment",
    "price": 35000,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Necrotic Resistance",
      "Divine Resolve"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Mystic Delivery Rune",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Necrotic Resistance",
        "rules": "The plate provides a +2 bonus to AC and grants resistance to necrotic damage. This effect lasts until the wearer takes a short or long rest."
      },
      {
        "title": "Divine Resolve",
        "rules": "Once per short or long rest, the wearer can use an action to gain temporary hit points equal to 2d10 plus their Wisdom modifier when reduced to zero hit points. This effect cannot be used more than once per day."
      }
    ],
    "levelRequirementReason": "This plate is designed for seasoned heroes who have faced the gravest trials, requiring a level of at least 40 to wield its divine power.",
    "vendorReason": "The enigmatic Fate Forge, known for crafting items that bend fate itself, naturally offers this blessed plate to those who seek to weave their destinies with the divine.",
    "shippingDetail": "Ships via Mystic Delivery Rune within five days of purchase. Requires a special delivery ritual upon arrival.",
    "usage": {
      "activation": "Passive effect, no activation required.",
      "duration": "Until the wearer takes a short or long rest.",
      "endsWhen": "Upon completion of a short or long rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item's price reflects its epic rarity and the divine materials used in its crafting, making it an exclusive piece for those who have earned their place in the pantheon.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T01:59:20.754403+00:00",
    "aiReviewedAt": "2026-07-25T01:59:20.754403+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_silverwood_resonance": {
    "id": "middle_earth_item_the_silverwood_resonance",
    "name": "The Silverwood Resonance",
    "description": "The Silverwood Resonance is a delicate ring forged from the petrified remains of elven forests, its surface etched with ancient runes that glow faintly under moonlight. Crafted by the hands of long-dead elves, this ring enhances perception and subtly influences the emotions of nearby beings, especially those who are naturally serene. Those attuned to the ring's magic can discern hidden intentions and amplify positive moods in a small radius.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 37,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Perception",
      "Emotion Influence"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_pony",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Enhanced Perception",
        "rules": "The wearer gains advantage on Wisdom (Perception) checks. This effect is passive and lasts until the wearer no longer wears the ring."
      },
      {
        "title": "Emotion Influence",
        "rules": "As an action, the wearer can attempt to influence nearby beings within 30 feet with a successful DC 15 Charisma (Persuasion) check. The target must succeed on a Wisdom saving throw or be charmed for 1 minute. This effect has no cooldown."
      }
    ],
    "levelRequirementReason": "This ring requires at least 15th level to wield effectively, as it channels ancient elven magic.",
    "vendorReason": "The elves of the Silverwood keep this artifact in their market for those seeking to enhance their perception and influence others subtly.",
    "shippingDetail": "Delivered swiftly by a fleet of winged ponies, ensuring the ring arrives intact and ready to use.",
    "usage": {
      "activation": "Action or Reaction (to cast Emotion Influence)",
      "duration": "Instantaneous for Enhanced Perception; 1 minute for Emotion Influence",
      "endsWhen": "The wearer stops wearing it or the effect's duration ends",
      "charges": "Unlimited"
    },
    "priceReason": "This ring offers significant benefits in perception and social interactions, making its price justifiable.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:00:09.656254+00:00",
    "aiReviewedAt": "2026-07-25T02:00:09.656254+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_stonehaven_rune_bound": {
    "id": "middle_earth_item_stonehaven_rune_bound",
    "name": "Stonehaven Rune-Bound Hammerhead",
    "description": "Forged within the heart of Stonehaven, this hammerhead gleams with an ancient sheen, its dwarven runes whispering secrets from the earth itself. When wielded, it enhances your strikes with a power that seems to channel raw geothermal force, and can momentarily open subterranean pathways for you and your allies. The runes hum in perfect harmony with the stone beneath your feet, granting minor resistance against earth-based magic and subtle tremors that can disorient foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "enhanced striking",
      "earth magic resistance"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant_worm",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Enhanced Striking",
        "rules": "When you make a melee attack with this hammerhead, it grants advantage on the roll. Additionally, if the attack hits, there is a 10% chance to trigger a minor tremor that causes creatures within 5 feet of you to make a DC 14 Dexterity saving throw or be knocked prone."
      },
      {
        "title": "Earth Magic Resistance",
        "rules": "You have resistance against damage from earth-based spells and effects. This benefit lasts until the end of your next turn after using this hammerhead in combat."
      }
    ],
    "levelRequirementReason": "The intricate runes require a proficient hand to wield effectively, and only those with significant experience can harness their full potential.",
    "vendorReason": "As the original craftsmen of Stonehaven, they possess the ancient knowledge needed to forge such powerful relics.",
    "shippingDetail": "The giant worm delivers the hammerhead with a delay of one week due to its size and importance.",
    "usage": {
      "activation": "As an action",
      "duration": "Until the end of your next turn",
      "endsWhen": "You stop attacking or casting earth-based spells",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced against other rare items, this hammerhead offers a unique combination of combat and utility benefits.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:59:54.035289+00:00",
    "aiReviewedAt": "2026-07-25T01:59:54.035289+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_anorien_starfall_crown": {
    "id": "middle_earth_item_anorien_starfall_crown",
    "name": "Anorien Starfall Crown",
    "description": "Crafted from solidified starlight that fell upon Anorien, the Anorien Starfall Crown exudes an ethereal glow that dances across its surface like a night sky. Its wearer can summon a shimmering shield of radiant energy to deflect incoming attacks, temporarily bolstering their defenses against both physical and magical assaults. This crown is said to have been worn by kings who led Anorien into its golden age, and it continues to protect those worthy enough to wield its power.",
    "category": "premium",
    "price": 1000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "delivery_only",
    "effects": [
      "Radiant Shield",
      "Enhanced Defense"
    ],
    "vendor": "shire_shop",
    "shippedBy": "dragon_airship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiant Shield",
        "rules": "As a bonus action, the wearer can summon a shimmering shield of radiant energy that lasts for up to 1 minute. This shield provides a +4 bonus to AC and grants resistance to radiant damage. The shield can be dismissed as an action."
      },
      {
        "title": "Enhanced Defense",
        "rules": "While wearing the Anorien Starfall Crown, the wearer gains a +2 bonus to their Constitution saving throws and advantage on Dexterity (Stealth) checks made to hide in dim light. These benefits last until the end of each long rest."
      }
    ],
    "levelRequirementReason": "The crown's protective magic is accessible to all who can appreciate its worth, but only those who have proven their valor are deemed worthy.",
    "vendorReason": "The Shire Shop has long been trusted by travelers and nobles for its rare and precious wares, including this legendary artifact.",
    "shippingDetail": "Ships via a dragon courier, ensuring swift delivery directly to your doorstep.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute or until dismissed",
      "endsWhen": "The shield is dismissed as an action or the wearer removes it",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "While not requiring a level, the crown's unparalleled craftsmanship and magical properties justify its modest price.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-25T02:00:13.802080+00:00",
    "aiReviewedAt": "2026-07-25T02:00:13.802080+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_the-ironclad-desolation-eater": {
    "id": "warhammer_item_the-ironclad-desolation-eater",
    "name": "The Ironclad Desolation Eater",
    "description": "The Ironclad Desolation Eater, a monstrous warhammer forged from the shattered remnants of a legionnaire’s battle-torn weapon and infused with malevolent decay, stands as a grim guardian against the battlefield's horrors. Its grip hums with vitality, bolstering your defenses with a corrupted steel that repels ruin. When wielded, it not only shields you from fear but also saps the essence of nearby foes, leaving them weakened and vulnerable to your attacks.",
    "category": "consumables",
    "price": 1000,
    "icon": "💀",
    "stock": 47,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Foe Repellent",
      "Fear Resistance"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Imperial Courier Drone",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Foe Repellent",
        "rules": "When activated as a bonus action, The Ironclad Desolation Eater saps the essence of nearby enemies, reducing their movement speed by half for 1 minute. This effect has a range of 30 feet and can be used once per long rest."
      },
      {
        "title": "Fear Resistance",
        "rules": "The wielder gains resistance to fear effects while holding The Ironclad Desolation Eater. This effect is passive, lasting until the end of each day unless dispelled by a successful DC 16 Con saving throw."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and power can wield this legendary weapon effectively.",
    "vendorReason": "The Imperial Armory, known for its rare and powerful weapons, stocks The Ironclad Desolation Eater to protect the empire's mightiest warriors.",
    "shippingDetail": "Ships via secure, swift Imperial Courier Drone, ensuring safe delivery within a week from order placement.",
    "usage": {
      "activation": "Bonus action to activate Foe Repellent; passive for Fear Resistance.",
      "duration": "Foe Repellent lasts 1 minute per use. Fear Resistance is permanent until dispelled.",
      "endsWhen": "Foe Repellent ends when the target enters a hostile space or upon death of the wielder.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "The rare materials and complex enchantments required to craft this weapon justify its relatively modest price in XP terms.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:00:07.352344+00:00",
    "aiReviewedAt": "2026-07-25T02:00:07.352344+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_the-shadow-whisperer-of-lost-omens": {
    "id": "warhammer_item_the-shadow-whisperer-of-lost-omens",
    "name": "The Shadow Whisperer of Lost Omens",
    "description": "The Shadow Whisperer of Lost Omens, a dark artifact crafted from the bones of forgotten oracles and shadows of lost futures, hums with a malevolent energy that can glimpse the fractured timelines. When wielded, it grants brief precognition, allowing you to sidestep attacks and disrupt enemy strategies. The core pulses with a spectral light that warps perception, creating a 'Phantom Step'—a fleeting teleportation that throws off foes and allies alike.",
    "category": "equipment",
    "price": 8500,
    "icon": "👻",
    "stock": 23,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Brief Precognitive Glimpse",
      "Disruptive Teleport"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Night Haunter Delivery",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Brief Precognitive Glimpse",
        "rules": "As a bonus action, you can attempt to glimpse an enemy’s next attack. On a successful Wisdom (Insight) check against the attacker's Dexterity saving throw, you gain advantage on your next melee attack and grant yourself advantage on all Dexterity-based skill checks until the start of your next turn."
      },
      {
        "title": "Disruptive Teleport",
        "rules": "Once per short rest, you can activate the Phantom Step to teleport up to 10 feet in any direction. This effect is instantaneous and does not provoke opportunity attacks. It ends when you use another action or are hit by an attack."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 4 to wield this artifact, as its power draws on the user's ability to perceive and manipulate chaotic timelines.",
    "vendorReason": "The chaos dealer finds value in the Shadow Whisperer for its unique abilities that can be exploited by both allies and enemies.",
    "shippingDetail": "Delivered only during the night, ensuring the artifact's power remains hidden from prying eyes.",
    "usage": {
      "activation": "Bonus action or reaction for Brief Precognitive Glimpse; once per short rest for Disruptive Teleport",
      "duration": "Instantaneous for Disruptive Teleport; until the start of your next turn for Brief Precognitive Glimpse",
      "endsWhen": "On a failed Wisdom (Insight) check or when you use another action, for Brief Precognitive Glimpse; after 1 short rest for Disruptive Teleport",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Shadow Whisperer's price reflects its rare origin and the unique, powerful effects it grants.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:00:45.790245+00:00",
    "aiReviewedAt": "2026-07-25T02:00:45.790245+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_the-fate-forge-mk-99-divine-shard-eater": {
    "id": "warhammer_item_the-fate-forge-mk-99-divine-shard-eater",
    "name": "The Fate Forge Mk.99 Divine Shard Eater",
    "description": "The Fate Forge Mk.99 Divine Shard Eater, a premium icon forged in the heart of a collapsing temple, devours corrupted fate energy and amplifies its wielder's influence over probability itself. Held dramatically, it alters battlefield outcomes with divine fury, empowering critical strikes to deal crushing damage and heal allies or grant temporary buffs. This relic accumulates Fate Points that can be spent for powerful abilities, making each battle feel like a celestial dance of fortune and fate.",
    "category": "premium",
    "price": 1000,
    "icon": "✨",
    "stock": 9,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Amplifies critical strike chance and damage",
      "Heals or buffs allies with Divine Intervention"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Celestial Transport Vessel",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Divine Intervention",
        "rules": "When the user scores a critical hit, they may choose to heal an ally within 10 feet for 2d8 + their Charisma modifier hit points, or grant a temporary boost equal to twice their proficiency bonus in one of the following: Strength, Dexterity, Constitution, Intelligence, Wisdom, or Charisma. This effect has a maximum of three uses per long rest."
      },
      {
        "title": "Corrupted Fate Consumption",
        "rules": "The user can consume corrupted fate energy from weaker enemies within 30 feet, increasing their critical hit chance by +5 and doubling the damage for one minute. This effect requires a successful Wisdom saving throw (DC 15) to avoid being overwhelmed by dark energies."
      }
    ],
    "levelRequirementReason": "This relic's divine power demands significant mastery of probability manipulation, suitable only for those who have proven their worth.",
    "vendorReason": "Only the sacred artisans at Fate Forge possess the knowledge and purity to craft such a powerful icon.",
    "shippingDetail": "Ships via the fastest celestial courier, ensuring swift delivery of this divine artifact.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Instantaneous and one minute per use",
      "endsWhen": "The duration ends when the effect is used or the user fails to succeed on their saving throw.",
      "charges": "Unlimited, but each use requires a short rest"
    },
    "priceReason": "Balanced against other premium items, this relic's price reflects its divine craftsmanship and potent effects.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-25T02:00:57.144420+00:00",
    "aiReviewedAt": "2026-07-25T02:00:57.144420+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_crimson_echoes_crowned": {
    "id": "pokemon_item_crimson_echoes_crowned",
    "name": "The Crimson Echoes Crowned Badge",
    "description": "The Crimson Echoes Crowned Badge is a pulsing crown of solidified sonic energy, its surface etched with the battle cries of long-lost Pokémon. When worn in combat, it channels the ferocity and dominance of an Alpha Charizard, amplifying your attacks and filling the air with sound waves that resonate with each blow. The badge's power hums with ancient energy, drawing from forgotten echoes to enhance your prowess on the battlefield.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Territorial Boost",
      "Sonic Resonance"
    ],
    "vendor": "pokemart",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Territorial Boost",
        "rules": "Activate as a bonus action. You gain a +10 bonus to attack rolls for 60 seconds. The effect ends if you lose initiative or are incapacitated."
      },
      {
        "title": "Sonic Resonance",
        "rules": "Whenever you hit with an attack while wearing this badge, you deal an additional 1d8 thunder damage and have advantage on your next attack roll."
      }
    ],
    "levelRequirementReason": "The badge's power is too strong for lower-level characters to control effectively.",
    "vendorReason": "Pokemart often stocks items that enhance combat performance, making the badge a natural fit.",
    "shippingDetail": "Ships within 3 business days with Drone Delivery's standard delivery guarantee.",
    "usage": {
      "activation": "Bonus action to activate; ends when you lose initiative or become incapacitated.",
      "duration": "60 seconds per activation, until the effect is ended as described.",
      "endsWhen": "Losing initiative or becoming incapacitated.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The badge's unique and potent effects justify its high price.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T02:00:39.985212+00:00",
    "aiReviewedAt": "2026-07-25T02:00:39.985212+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_chronal_regalia_forbidden": {
    "id": "pokemon_item_chronal_regalia_forbidden",
    "name": "Chronal Regalia of the Time Weaver",
    "description": "The Chronal Regalia of the Time Weaver is a shimmering obsidian amulet pulsing with fractured timelines, its surface etched with runes that whisper secrets of time's flow. Crafted from the molten heart of a forgotten star and imbued by an ancient time weaver, this relic allows brief manipulation of localized time – slowing enemies or accelerating your own movements, but be warned; excessive use risks creating paradoxes and unraveling the fabric of reality.",
    "category": "forbidden",
    "price": 1000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Temporal Slow",
      "Swift Movement"
    ],
    "vendor": "secret_merchant",
    "shippedBy": "Night Rider Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "When activated as a bonus action, this amulet slows enemy actions within a 10-foot radius by 30% for 15 seconds. The effect ends if you take damage or you move out of the area."
      },
      {
        "title": "Swift Movement",
        "rules": "Activate once per short rest as a reaction to gain advantage on Dexterity (Acrobatics) checks and dash up to your speed until the start of your next turn. This effect ends if you are incapacitated or lose consciousness."
      }
    ],
    "levelRequirementReason": "Suitable for beginners, this amulet introduces new players to the concept of time manipulation.",
    "vendorReason": "The secret merchant is known for their vast array of ancient and forbidden relics, including those that bend the laws of time.",
    "shippingDetail": "Ships via the Night Rider Courier, ensuring secrecy and timely delivery.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "15 seconds or until incapacitated",
      "endsWhen": "Taking damage or moving out of range; ends on your turn if Swift Movement is used",
      "charges": "Unlimited, but limited to one use per short rest"
    },
    "priceReason": "The balanced price reflects its rarity and the risk involved in using it.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-25T02:01:03.834250+00:00",
    "aiReviewedAt": "2026-07-25T02:01:03.834250+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_alpha_titanium_crowned": {
    "id": "pokemon_item_alpha_titanium_crowned",
    "name": "Mk.76 Alpha Titanium Crowned Armor Fragment",
    "description": "This jagged shard of reinforced titanium gleams with a faint, ancient light, forged from the bones of an Alpha Steelix long since vanished into legend. The Mk.76 Alpha Titanium Crowned Armor Fragment not only boosts your defenses by a formidable 15%, but it also grants you a +2 bonus to your physical attack rolls, making you a force to be reckoned with in any battle. Crafted in the forges of ancient steelsmiths, this fragment is imbued with an enduring resilience that repels electric-type attacks with surprising effectiveness.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Defense Boost",
      "Attack Power Increase"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Swift Courier",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Defense Boost",
        "rules": "This fragment grants a +15% bonus to AC, providing exceptional protection against incoming attacks. It can be activated by donning the armor piece and remains active until removed or until you take damage."
      },
      {
        "title": "Attack Power Increase",
        "rules": "While wearing this fragment, you gain a +2 bonus to your attack rolls with melee weapons. This effect is passive and does not require activation."
      }
    ],
    "levelRequirementReason": "This armor fragment is designed for seasoned adventurers who have reached the peak of their abilities.",
    "vendorReason": "The Safari Shop specializes in rare and exotic items, including those crafted from ancient materials like this one.",
    "shippingDetail": "This item is shipped via Swift Courier for expedited delivery to ensure it reaches its destination intact.",
    "usage": {
      "activation": "Passive effect upon donning the fragment; ends when removed or damaged.",
      "duration": "Instantaneous activation, lasts until removed or damaged",
      "endsWhen": "The armor fragment is removed from your equipment or damaged in combat",
      "charges": "Unlimited"
    },
    "priceReason": "This item's fair value is adjusted to reflect its unique crafting materials and the expertise required to forge such a piece.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:01:28.272500+00:00",
    "aiReviewedAt": "2026-07-25T02:01:28.272500+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_crimson_elemental_cupcake_drinker": {
    "id": "equestria_item_crimson_elemental_cupcake_drinker",
    "name": "The Crimson Elemental Cupcake Drinker",
    "description": "This unsettlingly vibrant cupcake pulses with contained thermal energy, granting a momentary surge of fire magic. Its yielding frosting whispers of forgotten volcanic plains and the echoes of chaotic elementals, offering a potent but volatile experience.",
    "category": "consumables",
    "price": 1200,
    "icon": "🔥",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Grants +5 Fire Damage for 30 seconds",
      "Chance to inflict 'Burn' status on target (10%)",
      "Causes a minor explosion upon consumption (small chance)"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Mail Pegasus",
    "levelRequirement": 25
  },
  "equestria_item_silverwind_harvest_cupcakes": {
    "id": "equestria_item_silverwind_harvest_cupcakes",
    "name": "Silverwind Harvest Cupcakes - Mk.17 Prototype",
    "description": "The Silverwind Harvest Cupcakes - Mk.17 Prototype are a delicate treat crafted from the essence of a Silverwind storm, providing a refreshing gust and mild chill to those who consume them. These cupcakes absorb ambient wind energy, granting runners an incredible boost in speed for sixty seconds while offering minor resistance against cold temperatures. A bite of these confections can also inadvertently summon a small gust that pushes nearby objects or foes, adding an element of surprise to any encounter.",
    "category": "equipment",
    "price": 1000,
    "icon": "💨",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "delivery_only",
    "effects": [
      "Speed Boost",
      "Cold Resistance"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Swift Delivery Pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "The consumer gains +3 to their movement speed for a duration of sixty seconds. This effect is instantaneous upon consumption and ends when the duration expires or if the consumer takes any action that requires concentration."
      },
      {
        "title": "Cold Resistance",
        "rules": "For 15% resistance against cold damage, this effect persists until the end of the consumer's next turn. The resistance can be negated by a successful DC 14 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "These cupcakes are designed for beginners and adventurers alike, offering a safe boost without requiring high-level prowess.",
    "vendorReason": "The Ponyville Market is known for its array of unique and delicious treats, making it the perfect place to stock these enchanted cupcakes.",
    "shippingDetail": "Ships directly from the market within two days with no additional charges.",
    "usage": {
      "activation": "Consumed as an immediate action.",
      "duration": "60 seconds.",
      "endsWhen": "Duration ends or if the consumer takes any action requiring concentration.",
      "charges": "Unlimited, replenished daily."
    },
    "priceReason": "The enhanced effects and unique enchantment justify a price of one thousand XP, making these cupcakes a worthwhile investment for any adventurer.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:01:14.565658+00:00",
    "aiReviewedAt": "2026-07-25T02:01:14.565658+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_amberglow_resonance_cupcakes": {
    "id": "equestria_item_amberglow_resonance_cupcakes",
    "name": "Amberglow Resonance Cupcakes - Premium Edition",
    "description": "Amberglow Resonance Cupcakes are crafted from enchanted amber and crystallized harmony, each bite a symphony of magical energy. These premium edibles amplify existing harmonic abilities by +10 to all Harmony-based checks, and offer a protective shield with a 20% chance upon consumption. They also restore 30% of your mana or magic power and increase Charisma by 5 points for one hour, ensuring every bite is as satisfying as it is potent.",
    "category": "premium",
    "price": 1000,
    "icon": "✨",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "+10 Harmony-based abilities",
      "20% chance to create a protective harmonic shield"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Courier Unicorn",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Harmonic Amplification",
        "rules": "Consume to gain +10 temporary bonus to all Harmony-based checks. This effect lasts for one hour and can only be used once per day."
      },
      {
        "title": "Shield of Harmonic Resonance",
        "rules": "A protective harmonic shield is activated with a 20% chance upon consumption, providing a +5 temporary bonus to AC against the next attack made by an opponent. The shield dissipates after one turn or at the start of your next turn."
      }
    ],
    "levelRequirementReason": "These cupcakes are designed for all Harmonic practitioners who wish to enhance their abilities with a delicious bite.",
    "vendorReason": "The Crystal Empire is known for its expertise in magical ingredients and harmonious artifacts, making these cupcakes a perfect fit for their premium offerings.",
    "shippingDetail": "Shipped by the trusted Crystal Courier Unicorn within three days from stock availability.",
    "usage": {
      "activation": "Eaten as a meal or snack",
      "duration": "One hour and one turn for each effect",
      "endsWhen": "At the start of your next turn, after one day, or upon consuming another set of Amberglow Resonance Cupcakes.",
      "charges": "Unlimited per day"
    },
    "priceReason": "The premium ingredients and harmonious crafting process justify this balanced price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T02:01:36.066264+00:00",
    "aiReviewedAt": "2026-07-25T02:01:36.066264+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_buffered_tokens_of_the_algorithmic_storm": {
    "id": "internet_item_buffered_tokens_of_the_algorithmic_storm",
    "name": "Buffered Tokens of the Algorithmic Storm",
    "description": "The Buffered Tokens of the Algorithmic Storm are iridescent nodules that pulse with raw data from ancient silicon forges. When consumed, they instantly grant a +2 bonus to Intelligence (Computers) checks and an additional +10% processing speed for 1 minute, making them invaluable for navigating the chaotic streams of information in the digital age. These tokens are resistant to digital corruption, ensuring their integrity even under the harshest network conditions.",
    "category": "consumables",
    "price": 1000,
    "icon": "⚡️",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Processing Speed",
      "Digital Corruption Resistance"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Enhanced Processing Speed",
        "rules": "This effect provides a +2 bonus to Intelligence (Computers) checks for the duration. The user must activate this token as an action, and it lasts for 1 minute once consumed."
      },
      {
        "title": "Digital Corruption Resistance",
        "rules": "For the duration of 1 hour after consumption, the user gains resistance to digital corruption effects. This protection is active until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "The tokens are complex and require a basic understanding of advanced computing to fully utilize.",
    "vendorReason": "Data Dealer specializes in rare and exotic tech items, making these tokens a fitting addition to their inventory.",
    "shippingDetail": "Tokens are delivered via swift drone courier, ensuring they arrive fresh and potent.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "Ends at the start of your next turn after the duration expires or if consumed again.",
      "charges": "Unlimited"
    },
    "priceReason": "The tokens are crafted from rare silicon forges and require a complex process to ensure their resistance to digital corruption.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T02:01:30.288845+00:00",
    "aiReviewedAt": "2026-07-25T02:01:30.288845+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_pristine_weaver_of_the_broken_bandwidth": {
    "id": "internet_item_pristine_weaver_of_the_broken_bandwidth",
    "name": "Pristine Weaver's Tokens of the Broken Bandwidth",
    "description": "Forged from the solidified data streams of an ancient network node in the East of Midlands, Pristine Weaver's Tokens of the Broken Bandwidth are a rare find for any tech-savvy adventurer. These tokens resonate with fragmented connections, allowing the wielder to momentarily bypass security protocols and retrieve lost packets within a 50-meter radius. The tokens' unique design ensures that each use is both precise and fleeting, making them invaluable tools in digital espionage or recovery missions.",
    "category": "equipment",
    "price": 1000,
    "icon": "📡",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Bypass Security Protocols",
      "Retrieve Lost Data"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Cyber Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bypass Security Protocols",
        "rules": "As an action, the wielder can use a token to attempt to bypass network security within a 50-meter radius. The DC for any required saving throw is equal to 12 + the user's Intelligence modifier. The effect lasts until the end of the wielder's next turn."
      },
      {
        "title": "Retrieve Lost Data",
        "rules": "The token can be used once per short rest to retrieve lost data packets within a 50-meter radius, restoring them to their original location with a +25% chance of successful recovery. This effect has no save DC and is instantaneous."
      }
    ],
    "levelRequirementReason": "The tokens are designed for users who have a basic understanding of digital networks.",
    "vendorReason": "Pixel Shop specializes in rare and unique tech items, making them the perfect vendor for these tokens.",
    "shippingDetail": "Ships via Cyber Courier's Express Network within a day.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of the wielder's next turn",
      "endsWhen": "The effect ends when the wielder uses their next action or reaction",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its rarity and utility in bypassing network security.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T02:01:45.564067+00:00",
    "aiReviewedAt": "2026-07-25T02:01:45.564067+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_mk_31_buffered_tokens_of_the_omniscient_server": {
    "id": "internet_item_mk_31_buffered_tokens_of_the_omniscient_server",
    "name": "Mk.31 Buffered Tokens of the Omniscient Server",
    "description": "The Mk.31 Buffered Tokens of the Omniscient Server are intricately polished tokens forged from an ancient server core found in the heart of a forgotten data center. These tokens grant access to a fragmentary archive, allowing users to analyze vast datasets with unparalleled speed and accuracy. However, each activation comes at a steep cost: the user must sacrifice a day's rest and one charge from their spellbook or class feature. The tokens also provide a minor resistance against temporal distortions, safeguarding against digital anomalies.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧠",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Access to Archive",
      "Temporal Resistance"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Quantum Transport",
    "levelRequirement": 50,
    "effectDetails": [
      {
        "title": "Access to Archive",
        "rules": "Activates as an action, providing access to a fragmentary archive for one minute. During this time, the user gains a +75% bonus to Intelligence (Investigation) checks and DCs related to data analysis. The effect ends when the time expires or if the user takes any other major action."
      },
      {
        "title": "Temporal Resistance",
        "rules": "Provides minor resistance against temporal distortions, reducing the chance of digital anomalies by 10%. This effect lasts for one hour and can be used once per day. The user must rest for a full night before using this ability again."
      }
    ],
    "levelRequirementReason": "This item is intended for high-level characters who need access to advanced data analysis capabilities.",
    "vendorReason": "The cyber_market vendor specializes in rare and powerful digital artifacts, making the Mk.31 tokens an ideal addition.",
    "shippingDetail": "Ships via Quantum Transport's secure and rapid courier service with a two-day delivery time.",
    "usage": {
      "activation": "Action",
      "duration": "One minute, renewable once per short or long rest",
      "endsWhen": "Time expires or user takes major action",
      "charges": "1 charge from spellbook/class feature"
    },
    "priceReason": "The item's legendary rarity and powerful abilities justify a price of 1000 XP.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T02:01:48.113856+00:00",
    "aiReviewedAt": "2026-07-25T02:01:48.113856+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_dragonscale_maker_boots": {
    "id": "faerun_item_dragonscale_maker_boots",
    "name": "The Obsidian Scale Maker’s Boots of Dragonsong",
    "description": "The Obsidian Scale Maker’s Boots of Dragonsong are crafted from the fossilized scales of a young chromatic dragon that fell near Neverwinter. Each step you take releases an ancient, resonant song that fortifies your defenses and grants resistance to fire damage. The intricate carvings of ancient dragon glyphs not only enhance your agility but also increase your speed by +10 feet for 1 minute each time the boots are activated.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "fire resistance",
      "enhanced agility"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "winged_horse",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "You gain a +5 bonus to saving throws against fire damage. This effect lasts until you finish a short or long rest."
      },
      {
        "title": "Enhanced Agility",
        "rules": "When you activate the boots, your movement speed increases by 10 feet for 1 minute. You can use this ability once per day, and it requires an action to activate."
      }
    ],
    "levelRequirementReason": "This level requirement ensures that only seasoned adventurers with significant experience can benefit from the dragon's power.",
    "vendorReason": "The Sword Coast Traders are renowned for their unique and powerful items, making these boots a fitting addition to their inventory.",
    "shippingDetail": "Delivered by swift winged horses that traverse the skies of Faerûn with unmatched speed and precision.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per day (requires an action to activate)",
      "endsWhen": "You finish a short or long rest, or you fall unconscious.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the unique crafting materials and the limited availability of such powerful yet balanced equipment.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T02:01:54.167493+00:00",
    "aiReviewedAt": "2026-07-25T02:01:54.167493+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_mystic_boots_of_silence": {
    "id": "faerun_item_mystic_boots_of_silence",
    "name": "The Silent Walker’s Mystic Boots of the Deepwood",
    "description": "Woven from the shimmering threads of moonpetal silk, these boots are imbued with ancient druidic enchantments that render the wearer's footsteps as silent as the night itself. A faint silvery glow emanates from their soles, marking them as a sacred trinket of the deepwood. The Silent Walker’s Mystic Boots of the Deepwood allow for stealthy movement and evasion within the wilds, making them indispensable to those who navigate the shadows.",
    "category": "equipment",
    "price": 1000,
    "icon": "🤫",
    "stock": 48,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "stealth +12",
      "noiseless steps"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "giant_snail",
    "levelRequirement": 28,
    "effectDetails": [
      {
        "title": "Stealth",
        "rules": "The wearer gains advantage on Dexterity (Stealth) checks while wearing these boots. The duration is 8 hours, and the effect ends if the wearer moves more than 30 feet or speaks."
      },
      {
        "title": "Noiseless Steps",
        "rules": "While moving, the wearer's footsteps are completely silent within a 15-foot radius around them. This effect lasts for 1 hour per use, and it ends when the wearer ceases movement or steps into water or mud."
      }
    ],
    "levelRequirementReason": "The boots' powerful druidic enchantments necessitate a high-level character to wield them effectively.",
    "vendorReason": "Baldur's Bazaar is known for its vast collection of rare and exotic items, including mystical artifacts from the wilds.",
    "shippingDetail": "The boots are delivered by a giant snail, which takes two days to reach their destination due to the delicate nature of the item.",
    "usage": {
      "activation": "Instantaneous activation; the wearer must be standing still for at least one round before the effects can take place.",
      "duration": "Stealth effect lasts 8 hours. Noiseless Steps last 1 hour per use.",
      "endsWhen": "The effects end if the wearer moves more than 30 feet or speaks, or when a new duration begins.",
      "charges": "Unlimited uses; each use of Noiseless Steps counts as one charge."
    },
    "priceReason": "The boots' rarity and powerful druidic enchantments justify their high price in the market.",
    "priceOriginal": 950,
    "priceReviewedAt": "2026-07-25T02:02:23.736156+00:00",
    "aiReviewedAt": "2026-07-25T02:02:23.736156+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_shadow_boots_of_the_watcher": {
    "id": "faerun_item_shadow_boots_of_the_watcher",
    "name": "Mk.14 Shadow Boots of the Obsidian Watcher",
    "description": "The Mk.14 Shadow Boots of the Obsidian Watcher are forged from petrified gloomstone, their surface etched with ancient runes that glow faintly in the dark. These boots grant nearly imperceptible movement through shadowy environs and enhance mobility by +10%. They also confer resistance to necrotic damage, bolstering the wearer's resilience against the deadly touch of the Underdark. The buckles, crafted from obsidian, whisper secrets of the deep as you step into their enigmatic embrace.",
    "category": "equipment",
    "price": 6200,
    "icon": "🌑",
    "stock": 11,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "nearly imperceptible movement",
      "enhanced mobility"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "messenger_raven",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Nearly Imperceptible Movement",
        "rules": "While within dim or dark conditions, the wearer gains advantage on Dexterity (Stealth) checks. This effect ends when the wearer exits a dim or dark environment."
      },
      {
        "title": "Enhanced Mobility",
        "rules": "The wearer's speed increases by 10 feet while in shadowy environs. This effect lasts until the end of the wearer's next turn after leaving such conditions."
      }
    ],
    "levelRequirementReason": "These boots are crafted for the most experienced adventurers, requiring a level 45 to wield their power.",
    "vendorReason": "Waterdeep Market is renowned for its wide array of exotic and rare items suitable for high-level adventurers like those who require these powerful boots.",
    "shippingDetail": "The boots are carefully packed to prevent damage during transit, ensuring they arrive in optimal condition.",
    "usage": {
      "activation": "Passive effect within dim or dark environments; enhances movement upon entering such conditions.",
      "duration": "Instantaneous effect once the wearer leaves a dim or dark environment.",
      "endsWhen": "Effect ends when leaving a dim or dark environment.",
      "charges": "Unlimited"
    },
    "priceReason": "The boots' rarity and unique crafting materials, including petrified gloomstone and ancient runes, justify their high price.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-25T02:02:07.457465+00:00",
    "aiReviewedAt": "2026-07-25T02:02:07.457465+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_chronometric_data_eater": {
    "id": "internet_item_chronometric_data_eater",
    "name": "The Chronometric Data Eater - Phase 7",
    "description": "This pulsating, obsidian link consumes fragmented timelines and regurgitates them as fleeting moments of accelerated perception. Its rhythmic pulse disrupts digital signatures, allowing the user to briefly experience echoes of past data streams – a dangerous but potentially enlightening ability.",
    "category": "consumables",
    "price": 12000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Grants temporary accelerated perception (3 turns)",
      "Disrupts enemy digital defenses (20% chance)",
      "Causes minor temporal distortion – brief hallucinations",
      "Chance of attracting a 'Data Wraith'"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 35
  },
  "internet_item_pixel_ghost_collector": {
    "id": "internet_item_pixel_ghost_collector",
    "name": "The Nether Pixel Ghost Collector - Variant Sigma",
    "description": "The Nether Pixel Ghost Collector - Variant Sigma is a delicate, iridescent sphere made from compressed network chatter and ancient digital remnants. This artifact allows the wielder to briefly manifest and interact with lingering digital ghosts—echoes of forgotten websites and corrupted files. With each invocation, it reveals hidden data pathways in the immediate area but also attracts unwanted attention from 'Data Scavengers', who seek its power for their own nefarious purposes.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👻",
    "stock": 23,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Manifests Digital Ghosts",
      "Reveals Hidden Data Pathways"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Manifests Digital Ghosts",
        "rules": "Activates as a bonus action. The user can summon and interact with digital ghosts within a 30-foot radius for up to 1 minute. These manifestations are limited in number and duration, expiring after the specified time or when attacked by a physical entity."
      },
      {
        "title": "Reveals Hidden Data Pathways",
        "rules": "Activates as an action, revealing hidden data pathways within 60 feet of the user for 1 hour. This effect provides insight into encrypted information and bypasses basic data security measures but does not decrypt or alter any data."
      }
    ],
    "levelRequirementReason": "The item's complexity requires a minimum level to prevent lower-level characters from encountering dangerous digital entities.",
    "vendorReason": "Pixel Shop specializes in rare and exotic curiosities, making it the perfect vendor for the Nether Pixel Ghost Collector - Variant Sigma.",
    "shippingDetail": "Special handling required due to the artifact's volatile nature; delivery may be delayed by up to one week.",
    "usage": {
      "activation": "Bonus action or action",
      "duration": "Up to 1 minute for digital ghost manifestation, 1 hour for data pathway reveal",
      "endsWhen": "Attacked by a physical entity or when its duration expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rare materials and complex magic make it worth 1000 XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T02:02:42.852787+00:00",
    "aiReviewedAt": "2026-07-25T02:02:42.852787+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_encrypted_link_matrix_09": {
    "id": "internet_item_encrypted_link_matrix_09",
    "name": "The Encrypted Link Matrix - 09 (Replication Cycle)",
    "description": "The Encrypted Link Matrix - 09 (Replication Cycle) is a shimmering tangle of fiber optic cables encased in a shell of hardened data, capable of instantaneously forging secure connections to any digital system within range. Its protective casing glows faintly with encrypted patterns, ensuring the utmost privacy and security for its user. Once activated, it can overwhelm the user's cognitive processing if overused, but when wielded correctly, it provides unparalleled access to vast troves of information at a moment’s notice.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔗",
    "stock": 12,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Secure Data Link",
      "Enhanced Hacking Ability"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Automated Delivery Bot",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Secure Data Link",
        "rules": "Activates as an action. Creates a secure link with any connected system within range, reducing network latency by 10%. The effect lasts until the end of your next turn or until you use this ability again."
      },
      {
        "title": "Enhanced Hacking Ability",
        "rules": "Provides +5 to hacking attempts as a bonus action. This benefit persists for 3 turns, after which it diminishes by 1 point per turn until it expires entirely at the end of your next turn."
      }
    ],
    "levelRequirementReason": "Requires proficiency in hacking and an understanding of advanced digital systems to wield this device effectively.",
    "vendorReason": "As a specialist in high-tech data solutions, Data Dealer is the primary distributor of cutting-edge encryption devices like the Encrypted Link Matrix - 09 (Replication Cycle).",
    "shippingDetail": "Shipped via encrypted courier drones ensuring the device arrives in pristine condition.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous to last until end of next turn, or until used again",
      "endsWhen": "Ends when the effect duration expires or you use this ability again",
      "charges": "Unlimited"
    },
    "priceReason": "The Encrypted Link Matrix - 09 (Replication Cycle) is a common item but its advanced encryption technology and secure link capabilities make it highly sought after, justifying the higher price.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-25T02:02:49.734557+00:00",
    "aiReviewedAt": "2026-07-25T02:02:49.734557+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_semester_passes_of_students": {
    "id": "kivotos_item_semester_passes_of_students",
    "name": "The Semester Passes of Students",
    "description": "These passes, etched with the insignia of every major student club in Academy City, grant temporary access to exclusive after-hours study sessions and secret campus locations. Each pass pulses faintly with residual academic anxiety, amplifying concentration… briefly.",
    "category": "consumables",
    "price": 185,
    "icon": "📚",
    "stock": 37,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_focus_for_10_seconds",
      "minor_boost_to_intellect",
      "chance_of_finding_a_lost_assignment"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 5
  },
  "kivotos_item_umbral_cursed_passes": {
    "id": "kivotos_item_umbral_cursed_passes",
    "name": "Umbral Cursed's Passes",
    "description": "These obsidian passes, rumored to have been forged by a disgraced academy examiner during a particularly dark semester, grant passage through restricted zones and trigger unsettling visions. Beware; prolonged use can induce a profound sense of existential dread, causing your mind to wander into the darkest recesses of your psyche. The passes' shadows seem to grow longer with each step you take within their influence, casting an eerie glow that might or might not be real.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "night_vision",
      "chance_of_unsettling_encounters"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Night Vision",
        "rules": "Activates as a bonus action. Grants temporary night vision within restricted zones, allowing you to see normally in dim light and discern details up to 60 feet away. This effect lasts for 1 minute per level of the user."
      },
      {
        "title": "Chance of Unsettling Encounters",
        "rules": "Each time you enter a restricted zone, there is a 25% chance that an unsettling vision or encounter with a student apparition occurs. If this happens, you must make a Wisdom saving throw (DC 13). On a failed save, you are frightened for 1 minute."
      }
    ],
    "levelRequirementReason": "The passes are crafted to be accessible to adventurers of all levels, but their power is only effective in the hands of those who have proven themselves.",
    "vendorReason": "Club Supply stocks these passes as part of its extensive selection of arcane and unusual items, catering to both new and experienced adventurers alike.",
    "shippingDetail": "Courier Pigeon ensures the secure delivery of Umbral Cursed's Passes using their fleet of swift birds, guaranteeing that you receive your passes within three days of purchase.",
    "usage": {
      "activation": "Bonus action to activate night vision; chance of unsettling encounters occurs automatically each time entering a restricted zone.",
      "duration": "Night vision lasts for 1 minute per level. Unsettling visions last for 1 minute if the saving throw is failed.",
      "endsWhen": "The effects end when you exit the restricted zone or finish your turn, whichever comes first.",
      "charges": "Unlimited uses; the passes can be used repeatedly."
    },
    "priceReason": "The price reflects the item's rarity and its ability to provide both useful abilities and potential hazards in challenging environments.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T02:03:21.874632+00:00",
    "aiReviewedAt": "2026-07-25T02:03:21.874632+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk_80_semester_passes": {
    "id": "kivotos_item_mk_80_semester_passes",
    "name": "Mk.80 Semester Passes - Variant Alpha",
    "description": "Mk.80 Semester Passes - Variant Alpha are intricately crafted from Academy City’s finest clockwork and forged in the heart of its elite guard program. These passes subtly bend time, allowing wearers to traverse restricted zones with ease during critical assessment periods. The precise mechanism within each pass not only dials down perception of time by 5% but also grants a +1 bonus on Dexterity (Acrobatics) checks for up to an hour.",
    "category": "premium",
    "price": 1000,
    "icon": "⏱️",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "temporal_dial",
      "acrobatic_bonuses"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Automated Delivery System",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Temporal Dial",
        "rules": "The Mk.80 Semester Passes temporarily reduce the wearer's perception of time by 5%. This effect lasts for up to an hour per use and grants advantage on Dexterity (Perception) checks related to detecting temporal anomalies."
      },
      {
        "title": "Acrobatic Bonuses",
        "rules": "While wearing Mk.80 Semester Passes, the wearer gains a +1 bonus on Dexterity (Acrobatics) checks for up to one hour per use. The effect ends if the wearer enters combat or when another temporal-related effect is active."
      }
    ],
    "levelRequirementReason": "These passes are designed for students and guards who require quick movement through restricted areas during critical assessments.",
    "vendorReason": "The Academy Armory stocks these passes as they are essential tools for Academy City’s elite, ensuring safe passage during high-stakes evaluations.",
    "shippingDetail": "Ships via the Automated Delivery System with a 1-day processing time.",
    "usage": {
      "activation": "Activates as an action when entering restricted areas; ends after one hour or upon combat entry.",
      "duration": "One hour per use, upgradable to two hours with a rare component",
      "endsWhen": "Combat engagement or expiration of duration",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, these passes are priced based on their intricate craftsmanship and the strategic advantage they provide during critical moments.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-25T02:03:26.898802+00:00",
    "aiReviewedAt": "2026-07-25T02:03:26.898802+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_crimson_songweaver": {
    "id": "faerun_item_crimson_songweaver",
    "name": "Crimson Songweaver's Resonator",
    "description": "The Crimson Songweaver's Resonator, a hand-carved bone relic, hums with an eerie resonance that sets the heart of any listener to a slow, melancholic beat. Crafted by ancient elven bards, it grants eloquence and persuasion, but prolonged use invites visions of forgotten sorrows and lost melodies. This artifact is said to carry the soul of a bard gone silent, forever echoing in the hands of those who wield it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎵",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "eloquent persuasion",
      "melancholic visions"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "Winged Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Eloquent Persuasion",
        "rules": "When you hold this resonator and make an Intelligence (Persuasion) check, you can roll a d6 and add the result to your check. This effect lasts until the start of your next turn or until you stop holding it."
      },
      {
        "title": "Melancholic Visions",
        "rules": "If you use this resonator for more than 10 minutes in any day, there is a cumulative -1 penalty to Wisdom saving throws against being charmed or frightened. This penalty increases by an additional -2 at the end of every hour spent using it."
      }
    ],
    "levelRequirementReason": "This resonator requires a high level of skill and discipline to wield effectively, as its power can be overwhelming.",
    "vendorReason": "The Sword Coast Traders are known for their extensive network across the region, often acquiring rare artifacts like this one from distant elven realms.",
    "shippingDetail": "Ships via Winged Courier, ensuring safe and swift delivery to your doorstep.",
    "usage": {
      "activation": "Bonus action to activate eloquent persuasion; can be held indefinitely until the start of your next turn or when you stop holding it.",
      "duration": "Eloquent Persuasion lasts until the start of your next turn. Melancholic Visions apply cumulatively after 10 minutes of use each day.",
      "endsWhen": "Eloquent Persuasion ends when the resonator is no longer being held. Melancholic Visions end upon ceasing use or completing a long rest.",
      "charges": "Unlimited uses, but must complete a short or long rest to recover."
    },
    "priceReason": "The resonator's price reflects the rarity and ancient craftsmanship required to create such an artifact.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T02:03:58.135394+00:00",
    "aiReviewedAt": "2026-07-25T02:03:58.135394+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_blackfang_echo": {
    "id": "faerun_item_blackfang_echo",
    "name": "Blackfang Echo’s Bite Token",
    "description": "Blackfang Echo’s Bite Token is a gleaming, obsidian tooth etched with ancient runes. It whispers of haunted swamps and malevolent spirits. When held, it allows its bearer to detect nearby corrupted spirits within a short radius, momentarily aligning with the dark forces that haunt the swamps. The token's malevolent energy can also chance upon weaker undead, instilling a paralyzing fear. Its touch leaves a lingering poison that offers minor resistance, but attracts unfriendly swamp creatures in its wake.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🐗",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "detect corrupted spirits",
      "chance to instill fear"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "Giant Rat Carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Detect Corrupted Spirits",
        "rules": "The wielder can use an action to detect any corrupted spirits within a short range. This lasts for 1 minute and requires no saving throw."
      },
      {
        "title": "Chance to Instill Fear",
        "rules": "When the token is used, there's a 20% chance that it will instill fear in weaker undead creatures. The DC for this save is equal to 8 + the user’s proficiency bonus + half their level."
      }
    ],
    "levelRequirementReason": "The token requires no specific level, but its effects are potent enough that only those with experience can manage them.",
    "vendorReason": "Baldur's Bazaar is known for its rare and powerful items, making it the perfect vendor for such a unique artifact.",
    "shippingDetail": "The Giant Rat Carrier ensures swift delivery but may cause some unease along the way.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The effect ends when the user stops concentrating or a stronger spiritual force disrupts it.",
      "charges": "Unlimited"
    },
    "priceReason": "The token's unique properties and rarity justify its price, providing significant utility in specific combat scenarios.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:04:23.546078+00:00",
    "aiReviewedAt": "2026-07-25T02:04:23.546078+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_sunstone_whispers": {
    "id": "faerun_item_sunstone_whispers",
    "name": "Sunstone Whisperer’s Draught",
    "description": "Sunstone Whisperer’s Draught is a thick, golden liquid that emanates a subtle glow when held to light. Distilled from sunstones unearthed in ancient temples of the Star Kingdom, this potion grants a brief surge of clarity and mental acuity. It enhances your perception, allowing you to see through illusions more easily, but prolonged use can lead to paranoia, making it a rare commodity among scholars and mystics who dare to explore its effects.",
    "category": "consumables",
    "price": 1000,
    "icon": "☀️",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "mental clarity",
      "perception enhancement"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Griffon Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mental Clarity",
        "rules": "When consumed, you gain advantage on Intelligence checks for the duration of one hour. This effect can be triggered once per long rest."
      },
      {
        "title": "Enhanced Perception",
        "rules": "For 10 minutes after drinking this draught, you have advantage on Perception checks to detect illusions and hidden creatures. You regain these benefits only if you complete a short or long rest."
      }
    ],
    "levelRequirementReason": "This potion is accessible to all adventurers, providing a baseline enhancement for mental acuity.",
    "vendorReason": "Waterdeep's bustling market is known for its diverse and exotic wares, including rare potions like the Sunstone Whisperer’s Draught.",
    "shippingDetail": "The draught must be shipped in a specially lined flask to preserve its potency during transit.",
    "usage": {
      "activation": "飲用",
      "duration": "1 小時或 10 分鐘 (視效果而定)",
      "endsWhen": "休息後恢復",
      "charges": "一次/短暫或長休"
    },
    "priceReason": "此藥劑的稀有性和對智力和感知的提升使其價格高昂，但對於所有級別的冒險者來說都是可負擔的基礎增益。",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T02:03:58.400436+00:00",
    "aiReviewedAt": "2026-07-25T02:03:58.400436+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_gilded_echoing_tms_of_valor": {
    "id": "pokemon_item_gilded_echoing_tms_of_valor",
    "name": "Gilded Echoing TMs of Valor",
    "description": "The Gilded Echoing TMs of Valor are shimmering, gilded treasures forged from the spirit of valor and the essence of ancient battle magic. Each TM resonates with the power of your chosen move, amplifying it by 10% and briefly projecting a holographic echo of your opponent's last attack for strategic analysis. The intricate carvings on each TM seem to subtly shift and pulse with energy, subtly guiding you towards more aggressive tactics in combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Valor Boost",
      "Hologram Echo"
    ],
    "vendor": "pokemart",
    "shippedBy": "Winged Pony Express",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Valor Boost",
        "rules": "Activates as a bonus action. Increases the power of your chosen move by 10% for 1 minute. The effect ends if you use another bonus action to activate this effect within that time."
      },
      {
        "title": "Hologram Echo",
        "rules": "Passive effect. Projected holographic echo of your opponent's last attack appears in the space where it was dealt, providing strategic insights for 1 round without provoking opportunity attacks."
      }
    ],
    "levelRequirementReason": "Only those with significant combat experience and a proven track record are capable of wielding these powerful TMs.",
    "vendorReason": "The pokemart, known for its wide array of battle-enhancing items, ensures that even the most seasoned trainers have access to these valuable tools.",
    "shippingDetail": "Delivered swiftly by Winged Pony Express with a guaranteed arrival time within one week.",
    "usage": {
      "activation": "Bonus action for Valor Boost, passive effect for Hologram Echo.",
      "duration": "1 minute for Valor Boost and instantaneous for hologram projection.",
      "endsWhen": "After 1 minute or if another bonus action is used to activate this effect.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Gilded Echoing TMs of Valor are priced at 1000 XP, reflecting their rarity and the strategic advantage they provide in combat.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T02:04:23.527498+00:00",
    "aiReviewedAt": "2026-07-25T02:04:23.527498+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_chronometric_speaker_tm_delphi": {
    "id": "pokemon_item_chronometric_speaker_tm_delphi",
    "name": "Chronometric Speaker TM Delphi",
    "description": "The Chronometric Speaker TM Delphi is a sleek obsidian-black device forged in the temporal anomalies of ancient Delphi. Its surface hums with chronal energy, whispering forgotten strategies to those who hold it. By manipulating the fabric of time, this artifact can briefly slow an enemy’s movements by 30% for 5 seconds or accelerate its own user's speed by 20% for 3 seconds, leaving a lingering confusion effect on foes struck by critical hits.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Temporal Slow",
      "Swift Acceleration"
    ],
    "vendor": "league_store",
    "shippedBy": "Celestial Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "Activates as an action. Targets a single creature within 5 feet. The target’s movement speed is reduced by 30% for 5 seconds. Saves with a DC of 17 have advantage, and the effect ends if the target takes any movement."
      },
      {
        "title": "Swift Acceleration",
        "rules": "Activates as an action. Grants the user a +20% bonus to movement speed for 3 seconds. The effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "This item is crafted for adventurers of all levels, providing tactical flexibility.",
    "vendorReason": "The league store stocks a variety of unique and powerful artifacts suitable for any player's journey.",
    "shippingDetail": "Ships immediately with next available courier; no delays or special handling required.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous (Temporal Slow) or 3 seconds (Swift Acceleration)",
      "endsWhen": "Ends if the target moves, or when the effect duration ends, respectively.",
      "charges": "Unlimited"
    },
    "priceReason": "This item offers a balanced combination of versatile and powerful effects for any player's arsenal.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:04:17.393523+00:00",
    "aiReviewedAt": "2026-07-25T02:04:17.393523+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_lumina_speaker_tm_aethelred": {
    "id": "pokemon_item_lumina_speaker_tm_aethelred",
    "name": "Lumina Speaker TM Aethelred",
    "description": "The Lumina Speaker TM Aethelred, crafted from solidified starlight harvested during a lunar eclipse over the northern territories, pulses with an ethereal glow that can be seen for miles around. Its beams of light are said to have been blessed by ancient celestial beings, making it a rare and powerful tool in the hands of those who seek to dominate their foes. When activated, its beams disorient enemies, temporarily blinding them and reducing their accuracy, while also healing the wielder's wounds.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Disorients Opponent",
      "Heals User"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Safari Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disorienting Light (Instantaneous)",
        "rules": "When activated as an action, the Lumina Speaker emits a blinding beam of light that temporarily blinds and disorients enemies within 30 feet. The target must succeed on a DC 15 Constitution saving throw or be blinded for 2 rounds. This effect has no save against if used in direct combat."
      },
      {
        "title": "Healing Glow (Instantaneous)",
        "rules": "Upon activation, the Lumina Speaker heals the user for 30 hit points instantly. The healing is significant but does not exceed half of the user’s maximum HP."
      }
    ],
    "levelRequirementReason": "The device's power requires a certain level to safely handle and activate its effects.",
    "vendorReason": "Safari Shop deals in rare and exotic items from the wild, including this ancient artifact.",
    "shippingDetail": "Ships directly from Safari Shop to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for each effect",
      "endsWhen": "Charges are expended or the user is incapacitated",
      "charges": "Limited by charges per day"
    },
    "priceReason": "The price reflects its rarity and the materials used in crafting it, making it a significant investment for adventurers.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-25T02:05:05.775464+00:00",
    "aiReviewedAt": "2026-07-25T02:05:05.775464+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_chronometric_watcher": {
    "id": "the_edge_item_chronometric_watcher",
    "name": "The Chronometric Watcher's Obsidian Shard",
    "description": "This fractured shard pulses with an unsettling temporal energy, briefly accelerating or decelerating the user’s perception of time. It grants momentary bursts of speed and reflexes, but prolonged use risks unraveling one's own timeline within the endless expanse.",
    "category": "equipment",
    "price": 350,
    "icon": "⏳",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increase_movement_speed",
      "temporal_distortion",
      "reflex_boost"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Automated Drone Delivery",
    "levelRequirement": 15
  },
  "the_edge_item_abyssal_resonance_orb": {
    "id": "the_edge_item_abyssal_resonance_orb",
    "name": "Mk.7 Abyssal Resonance Orb",
    "description": "The Mk.7 Abyssal Resonance Orb pulses with an eerie, pulsating darkness that seems to twist and warp the very air around it. Crafted from the molten essence of forgotten abysses, this sphere exudes malevolent psychic pressure that can be felt by all within its range, weakening foes and disrupting their mental clarity. Holding it fills one's hands with a cold, numbing sensation as if the void itself is trying to reclaim you.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌀",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "psychic_pressure",
      "disrupt_focus"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Night Crawler Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Psychic Pressure",
        "rules": "When activated by a bonus action, this orb creates an aura of psychic pressure that affects all creatures within a 10-foot radius. Targets must make a DC 15 Wisdom saving throw or become frightened for the duration. If they succeed, they are only stunned until their next turn."
      },
      {
        "title": "Disrupt Focus",
        "rules": "Enemies in the aura's range lose concentration on spells and abilities with a casting time of 1 action or less. This effect lasts for the duration of the psychic pressure aura, up to 5 rounds, and can be reactivated once per short rest."
      }
    ],
    "levelRequirementReason": "The orb's latent power is still considerable even at lower levels.",
    "vendorReason": "The abyss trader has a special connection with the dark forces that can forge such items as this.",
    "shippingDetail": "Delivered by Night Crawler Courier, known for its speed and reliability in transporting rare and dangerous goods.",
    "usage": {
      "activation": "Bonus action to activate; recharges after a short rest.",
      "duration": "Up to 5 rounds per activation.",
      "endsWhen": "The aura dissipates when the effect ends or when the orb is dropped, damaged beyond repair, or its use is interrupted by an enemy's successful saving throw.",
      "charges": "Recharges once per short rest."
    },
    "priceReason": "Crafted from rare abyssal materials and imbued with potent psychic energy, the orb commands a premium price despite being usable at lower levels.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:04:55.421215+00:00",
    "aiReviewedAt": "2026-07-25T02:04:55.421215+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_static_silhouette_fragment": {
    "id": "the_edge_item_static_silhouette_fragment",
    "name": "The Static Silhouette Fragment - Observer Unit Alpha",
    "description": "The Static Silhouette Fragment - Observer Unit Alpha is a shimmering obsidian shard that retains an eternally trapped sentinel's distorted image. This relic, forged from ancient dimensions, allows its wielder to project a fleeting echo of themselves, capable of scouting ahead and momentarily disrupting enemy attacks with bursts of static interference. The fragment hums with the energy of forgotten battles, a silent sentinel of lost futures forever bound within obsidian stasis.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👻",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "echo_projection",
      "static_disruption"
    ],
    "vendor": "final_shop",
    "shippedBy": "Dimensional Courier Service",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Echo Projection",
        "rules": "As an action, you can activate the fragment to project an echo of yourself that moves up to half your speed. This echo can scout ahead and provide advantage on Perception checks within a 30-foot radius for one minute."
      },
      {
        "title": "Static Disruption",
        "rules": "When an enemy targets you with an attack, it must make a Dexterity saving throw (DC = 15). On a failed save, the attack is disrupted, dealing no damage and causing the attacker to be blinded until the start of their next turn."
      }
    ],
    "levelRequirementReason": "This relic requires significant power and experience to wield its dimensional echoes.",
    "vendorReason": "The final shop deals in rare and ancient artifacts, including this fragment of a lost sentinel.",
    "shippingDetail": "Ships via the Dimensional Courier Service, known for its secure and swift deliveries of mystic items.",
    "usage": {
      "activation": "Action",
      "duration": "One minute per activation",
      "endsWhen": "The echo dissipates after one minute or when destroyed by a successful attack.",
      "charges": "Unlimited"
    },
    "priceReason": "This relic is priced to reflect its ancient power and the rarity of such an item.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T02:05:12.936526+00:00",
    "aiReviewedAt": "2026-07-25T02:05:12.936526+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_crimson_void_lord": {
    "id": "doughnut_hole_item_crimson_void_lord",
    "name": "The Crimson Void Lord’s Lament",
    "description": "The Crimson Void Lord’s Lament is a molten, obsidian sphere that hums with an eerie, sickly sweet aroma of burnt sugar and regret. When held, it briefly grants fleeting glimpses into The Fated Place's central vortex, revealing fragmented memories of those lost within its depths. These visions, though enlightening, leave the wielder with a haunting sense of despair that lingers for moments longer than desired. This enigmatic artifact is said to have been crafted from the very essence of the void itself.",
    "category": "consumables",
    "price": 1000,
    "icon": "💀",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Glimpse into The Fated Place’s Vortex",
      "Causes Mild Disorientation"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Void Courier Drone",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Glimpse into The Fated Place’s Vortex",
        "rules": "When activated, the wielder gains temporary vision of The Fated Place's central void for a duration of 1 minute. This effect allows them to see and recall fragments of memory from the vortex, but it also leaves them with a lingering sense of despair that lasts until the start of their next turn."
      },
      {
        "title": "Causes Mild Disorientation",
        "rules": "For 3 turns after activation, the wielder is disoriented. During this time, they have disadvantage on Wisdom (Perception) checks and saving throws. This effect ends when the user successfully completes a short or long rest."
      }
    ],
    "levelRequirementReason": "Only those who are sufficiently experienced can handle the haunting memories revealed by the artifact.",
    "vendorReason": "Void Vendor is known for dealing in items that come from the depths of The Fated Place, making this item a natural addition to their inventory.",
    "shippingDetail": "The courier drone ensures swift delivery, though it may take an additional day due to the high risk of interference within The Fated Place's central vortex.",
    "usage": {
      "activation": "Standard Action",
      "duration": "1 minute",
      "endsWhen": "Starts of next turn after duration ends or user completes a rest",
      "charges": "Unlimited"
    },
    "priceReason": "The artifact's rarity and the power it holds, combined with its origin from The Fated Place, justify this balanced XP value.",
    "priceOriginal": 180,
    "priceReviewedAt": "2026-07-25T02:05:32.433343+00:00",
    "aiReviewedAt": "2026-07-25T02:05:32.433343+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_infernal_resonance_shard": {
    "id": "doughnut_hole_item_infernal_resonance_shard",
    "name": "The Infernal Resonance Shard of Xylos",
    "description": "The Infernal Resonance Shard of Xylos is a jagged fragment of a clockwork heart, perpetually humming with an unsettling rhythm. Crafted from the twisted remnants of infernal machinery, it exudes malevolent energy that can either cause nearby devices to malfunction or grant the wielder a temporary boost in mechanical aptitude. This shard's power is both dangerous and elusive; when activated, it disrupts the very essence of the surrounding mechanics, ensuring its effects are both unpredictable and profound.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚙️",
    "stock": 17,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Disruption",
      "Mechanical Forte"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Gutter Crawler Delivery Bot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Disruption",
        "rules": "When activated as a bonus action, this shard disrupts simple mechanical devices within 10 feet for the duration of 2 turns. Any creature attempting to interact with these devices must succeed on a DC 15 Dexterity saving throw or have their actions delayed until the end of their next turn."
      },
      {
        "title": "Mechanical Forte",
        "rules": "Upon activation, the wielder gains advantage on checks and saving throws related to mechanics for the duration of 3 turns. The shard can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This shard's power is accessible early in a character's career but remains potent enough to challenge even seasoned adventurers.",
    "vendorReason": "The Hole Hawker, known for their diverse and eclectic wares, often procures rare and unusual items like the Infernal Resonance Shard of Xylos from various shadowy sources.",
    "shippingDetail": "Due to its fragile nature, this item is delivered via the Gutter Crawler Delivery Bot, ensuring it arrives intact but potentially drawing unwanted attention along the way.",
    "usage": {
      "activation": "Bonus action",
      "duration": "2 turns for Temporal Disruption; 3 turns for Mechanical Forte",
      "endsWhen": "Ends when the duration expires or the item is destroyed",
      "charges": "Once per long rest"
    },
    "priceReason": "The shard's infernal origins and unique properties justify its price, providing a balance between power and challenge.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:06:03.089058+00:00",
    "aiReviewedAt": "2026-07-25T02:06:03.089058+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_central_echo_anomaly_7417": {
    "id": "doughnut_hole_item_central_echo_anomaly_7417",
    "name": "The Central Echo Anomaly - Seed: 7417",
    "description": "The Central Echo Anomaly - Seed: 7417 is a shimmering, iridescent sphere that distorts the immediate environment into a kaleidoscope of fragmented visions. When touched, it grants fleeting access to the chaotic center's secrets, revealing cryptic clues about hidden mysteries. The sensory experience can be disorienting and may cause nausea, but it also increases resistance to void energies by 10%. This artifact serves as a constant reminder of the turmoil within The Fated Place’s depths.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Brief Sensory Access",
      "Resistance Boost"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Transit Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Brief Sensory Access",
        "rules": "When touched, the user gains access to a fragmented sensory experience of The Fated Place's mysteries. This effect lasts for 1 minute per level of the user, providing cryptic clues about hidden secrets with a chance-based success rate. The effects can cause slight disorientation and nausea."
      },
      {
        "title": "Resistance Boost",
        "rules": "For 24 hours after use, the wielder gains a +1 bonus to saving throws against void energy. This effect is cumulative if used multiple times within a month."
      }
    ],
    "levelRequirementReason": "Even novices can encounter the chaotic center's mysteries through this artifact.",
    "vendorReason": "Center Seller specializes in artifacts that provide insight into The Fated Place’s enigmas.",
    "shippingDetail": "Ships via Dimensional Transit Portal, ensuring safe and swift delivery through the fabric of reality.",
    "usage": {
      "activation": "Standard Action",
      "duration": "1 minute per level",
      "endsWhen": "Ends when the duration expires or the user is incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price, reflecting its rarity and utility without being overpowered.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-25T02:05:28.215233+00:00",
    "aiReviewedAt": "2026-07-25T02:05:28.215233+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_chronal_graviton_finder": {
    "id": "doughnut_hole_item_chronal_graviton_finder",
    "name": "The Chronal Graviton Finder - Mk.47",
    "description": "The Chronal Graviton Finder - Mk.47 is a sleek obsidian device pulsing with an eerie, inverted gravity field. Crafted from ancient temporal materials, it hums ominously when activated, warping the flow of time around you for a fleeting moment. Rumored to have been salvaged from a collapsed temporal nexus, this artifact can briefly reduce gravity by 50% and slow time within its vicinity, but beware—its use may ripple through causality itself.",
    "category": "equipment",
    "price": 1800,
    "icon": "⏳",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Distortion",
      "Gravitational Reduction"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Void Courier Drone",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "When activated as an action, this device creates a localized temporal anomaly. Creatures within 10 feet must succeed on a DC 15 Dexterity saving throw or become slowed (reduced speed by 20 feet) and suffer from blurred vision for the duration of their next turn."
      },
      {
        "title": "Gravitational Reduction",
        "rules": "For every 3 levels the user possesses, gravity is reduced by an additional 15% within a 10-foot radius. This effect lasts until the end of your next turn and cannot exceed -50% gravity."
      }
    ],
    "levelRequirementReason": "Requires significant temporal knowledge to safely activate without causing paradoxes.",
    "vendorReason": "The Void Vendor is known for offering artifacts from collapsed dimensions, including the Chronal Graviton Finder.",
    "shippingDetail": "Ships through interdimensional rifts; may take up to three days depending on destination.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (effect lasts until the end of your next turn)",
      "endsWhen": "Effect ends when the duration expires or the user is dislodged from the device’s proximity.",
      "charges": "Unlimited, recharges on a long rest"
    },
    "priceReason": "Balanced to reflect its powerful temporal manipulation and rare crafting materials.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T02:05:47.442108+00:00",
    "aiReviewedAt": "2026-07-25T02:05:47.442108+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_resonance_core_finder": {
    "id": "doughnut_hole_item_resonance_core_finder",
    "name": "The Ancient Resonance Core - 'Heart of the Stillness'",
    "description": "The Ancient Resonance Core, 'Heart of the Stillness', is a crimson sphere etched with ancient glyphs. Crafted from an alloy of forgotten metals and imbued with the essence of absolute silence, it emanates a calming aura that subtly amplifies gravitational anomalies. This core has been used to appease the Silent Guardians, who are said to dwell in the voids between dimensions. Use with caution; prolonged contact can induce apathy and dampen one's resolve.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🖤",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Calms Gravitational Anomalies",
      "Silent Guardian Offering"
    ],
    "vendor": "center_seller",
    "shippedBy": "Swift Winds Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravitational Amplification",
        "rules": "When activated, this core amplifies nearby gravitational anomalies. The area within a 10-foot radius becomes more unstable, and creatures within may be affected by the increased gravity. This effect lasts for 1 minute and can be ended early with an action."
      },
      {
        "title": "Silent Guardian Favor",
        "rules": "By presenting this core as a gift to the Silent Guardians, you gain temporary favor. For the next hour, you have advantage on Perception checks made to detect hidden creatures or objects within 30 feet. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "This core is accessible to all adventurers as it aids in understanding and interacting with the mysterious Silent Guardians.",
    "vendorReason": "The center seller has established a rapport with the Silent Guardians, allowing them access to unique items like this core.",
    "shippingDetail": "Ships via Swift Winds Express within three days of purchase.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute (recharges after a long rest)",
      "endsWhen": "The core is destroyed or its effects are ended early with an action",
      "charges": "Unlimited, recharging after a long rest"
    },
    "priceReason": "This core offers significant utility and unique benefits that justify the price in XP.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T02:05:53.045224+00:00",
    "aiReviewedAt": "2026-07-25T02:05:53.045224+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_anomalous_null_finder_913": {
    "id": "doughnut_hole_item_anomalous_null_finder_913",
    "name": "The Anomalous Null Finder - 'Project Lazarus'",
    "description": "'The Anomalous Null Finder - Project Lazarus' hums with a life of its own, pulsating in an unsettling manner that defies all logic. Crafted from a mysterious organic material found deep within the decayed ruins of a forgotten city, it whispers fragmented memories of events that never happened. This device can drain an enemy's mana or energy upon successful attack, and it grants the user brief glimpses into alternate realities. Caution is advised; prolonged contact risks altering perception or inducing temporary madness.",
    "category": "consumables",
    "price": 5500,
    "icon": "💀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Mana/Energy Drain",
      "Alternate Reality Glimpses"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Express Drone Delivery",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Mana/Energy Drain",
        "rules": "Upon a successful hit, there's a 25% chance to drain an enemy's mana or energy by 1d6 points. This effect ends if the user misses their attack."
      },
      {
        "title": "Alternate Reality Glimpses",
        "rules": "The user gains temporary access to 'Echoes of Existence', providing brief glimpses into alternate realities for a duration of one round per level of the user. This effect can be triggered once per long rest and ends if used in combat."
      }
    ],
    "levelRequirementReason": "Only high-level spellcasters with advanced knowledge can wield this artifact without risking their sanity.",
    "vendorReason": "The Hole Hawker specializes in rare and dangerous artifacts, making them the ideal vendor for the Anomalous Null Finder.",
    "shippingDetail": "Ships within three business days with enhanced security measures due to its volatile nature.",
    "usage": {
      "activation": "Instantaneous effect upon successful attack.",
      "duration": "Until end of the user's next turn or until interrupted.",
      "endsWhen": "Missed hit, or used in combat during a long rest.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "The item's rarity and unique effects justify its high price, making it an invaluable asset for spellcasters who need to drain enemy resources or explore alternate realities.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-25T02:06:37.799279+00:00",
    "aiReviewedAt": "2026-07-25T02:06:37.799279+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_chromatic_resonance_weaver": {
    "id": "connectopia_item_chromatic_resonance_weaver",
    "name": "The Resonant Cadence of Block-Song Weaver",
    "description": "The Resonant Cadence of Block-Song Weaver is a finely crafted obsidian device imbued with geothermal energy. Its core glows faintly as it hums in tune with Connectopia’s block network. Activated by a simple touch, this device emits a resonant pulse that temporarily fortifies the immediate area's structural integrity, enhancing block resistance by 20% for sixty seconds. It is said to have been created by Block-Smith Silas after a seismic event, and it also has a unique ability to detect hidden structures nearby with a chance of up to 30%. The device is a rare find from the hands of the most skilled masons in Connectopia.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎶",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Structural Fortification",
      "Hidden Structure Detection"
    ],
    "vendor": "block_smith",
    "shippedBy": "Automated Delivery Drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Structural Fortification",
        "rules": "When activated as a bonus action, this device emits a resonant pulse that increases the block resistance of all structures within ten feet by 20% for sixty seconds. The effect ends if the user takes damage or if the structure is destroyed."
      },
      {
        "title": "Hidden Structure Detection",
        "rules": "There is a 30% chance to detect hidden structural elements when used as an action. This ability can be used once per short rest, and it requires the user to spend 1 minute in close proximity to the area being scanned."
      }
    ],
    "levelRequirementReason": "The device's intricate design and power require a minimum of five levels for proper control.",
    "vendorReason": "Block-Smith Silas, the creator of this device, personally ensures its distribution to those who can responsibly use it.",
    "shippingDetail": "Delivered within two business days with no additional charges.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "60 seconds",
      "endsWhen": "User takes damage or the structure is destroyed",
      "charges": "Unlimited, but limited to once per short rest for hidden structure detection"
    },
    "priceReason": "Balanced at this price point as it provides significant benefits with a reasonable cost.",
    "priceOriginal": 1875,
    "priceReviewedAt": "2026-07-25T02:06:08.773227+00:00",
    "aiReviewedAt": "2026-07-25T02:06:08.773227+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_fragmented_echo_consumable": {
    "id": "connectopia_item_fragmented_echo_consumable",
    "name": "The Tainted Echo of the Shattered Signal",
    "description": "The Tainted Echo of the Shattered Signal is a viscous, iridescent globule that hums faintly as it clings to your palm. Upon ingestion, this fragment from an ancient transmission grants you heightened awareness within dense block formations, allowing you to perceive subtle shifts in structural integrity and detect hidden pathways. However, prolonged exposure causes unsettling auditory hallucinations, making you question what is real and what is merely a ghost of the past.",
    "category": "consumables",
    "price": 1000,
    "icon": "👂",
    "stock": 89,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Increased Awareness",
      "Structural Detection"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Increased Awareness",
        "rules": "You gain advantage on Perception checks made within block formations for a duration of 1 minute. This effect ends if you are incapacitated or the source of your heightened awareness is no longer in range."
      },
      {
        "title": "Structural Detection",
        "rules": "For the same duration, you can use an action to attempt a Perception check to detect structural shifts and hidden pathways within block formations. If successful, you learn one secret door or passage that was previously undetectable. This effect requires a successful DC 15 Wisdom (Perception) check."
      }
    ],
    "levelRequirementReason": "The item's effects are too powerful for lower levels and require a minimum of three character levels to use effectively.",
    "vendorReason": "Courier Pigeon specializes in rare and historically significant items, making The Tainted Echo a fitting addition to their offerings.",
    "shippingDetail": "The pigeon delivery is swift but can be delayed by adverse weather conditions.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "You are incapacitated or the source of your heightened awareness is no longer in range.",
      "charges": "Unlimited, but you must wait 1 hour between uses."
    },
    "priceReason": "The item's effects offer significant advantages for exploration and combat within block formations, justifying the higher price point.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-25T02:06:44.994382+00:00",
    "aiReviewedAt": "2026-07-25T02:06:44.994382+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_mk.73_geothermal_blueprint_weaver": {
    "id": "connectopia_item_mk.73_geothermal_blueprint_weaver",
    "name": "The Mk.73 Geothermal Blueprint Weaver",
    "description": "The Mk.73 Geothermal Blueprint Weaver is a meticulously crafted, intricately detailed schematic of an ancient geothermal generator. This blueprint, found in a decaying pioneer outpost, utilizes heatstone mined from the volcanic heartlands and intricate wiring patterns to harness the earth's raw energy. It grants access to advanced blueprints for constructing miniature generators that can power small settlements, providing warmth and electricity even in the harshest of climates. The schematic increases block stability by 5%, ensuring structures withstand extreme temperatures and harsh conditions more effectively.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⚙️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Advanced Geothermal Blueprint",
      "Increased Block Stability"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Express Delivery Courier",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Advanced Geothermal Blueprint",
        "rules": "Activates when used to grant access to advanced blueprints for constructing miniature geothermal generators. These blueprints allow the user to construct generators that can power small settlements and provide warmth in cold regions."
      },
      {
        "title": "Increased Block Stability",
        "rules": "Increases block stability by 5% as long as the user is within a 10-foot radius of heatstone. This effect lasts for 1 hour and requires no additional action to maintain, but it ends if the user moves more than 20 feet away from any heatstone."
      }
    ],
    "levelRequirementReason": "Requires a high-level character capable of understanding and utilizing such advanced technology.",
    "vendorReason": "Craft Corner specializes in rare and ancient blueprints, making it the perfect vendor for this item.",
    "shippingDetail": "Ships via Express Delivery Courier with same-day service to major cities; rural areas require additional delivery time.",
    "usage": {
      "activation": "Special (requires a short rest to use once per day)",
      "duration": "Instantaneous when activated, lasting 1 hour thereafter",
      "endsWhen": "Exhausts after one use per day and requires a short rest to recharge",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the advanced technology and rarity of the blueprint.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T02:06:33.897902+00:00",
    "aiReviewedAt": "2026-07-25T02:06:33.897902+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_gilded_fallen_tokens_of_the_echoing_void": {
    "id": "internet_item_gilded_fallen_tokens_of_the_echoing_void",
    "name": "Gilded Fallen’s Tokens of the Echoing Void",
    "description": "The Gilded Fallen’s Tokens of the Echoing Void are obsidian discs that shimmer with fragmented digital light, each a relic from lost servers and forgotten data streams. When held, they grant fleeting access to the digital ghosts of the East of Midlands, whispering tales of lost commands and phantom data flows. However, prolonged exposure risks triggering a 'Digital Echo,' a hallucination where the user sees a past user's experience, causing recursion and disorientation.",
    "category": "consumables",
    "price": 18000,
    "icon": "🌀",
    "stock": 23,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Access to fragmented data streams",
      "Chance of Digital Echo"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Fragmented Data Access",
        "rules": "When held as an action, allows access to fragmented data for 60 seconds. The user gains a +15 bonus to Intelligence (Computers) checks related to the data stream's origin but risks corrupting the data with a 10% chance of corruption."
      },
      {
        "title": "Digital Echo",
        "rules": "There is a 20% chance per minute that holding the tokens triggers a Digital Echo, causing the user to experience a brief hallucination of a past user's interaction. The effect lasts for 1 round and ends when the user takes any action."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level to handle the risks associated with fragmented data and recursion.",
    "vendorReason": "The cyber_market specializes in exotic and dangerous digital artifacts, making these tokens an expected offering.",
    "shippingDetail": "Shipped via encrypted drones to prevent data leaks during transit.",
    "usage": {
      "activation": "Held as a bonus action for access to fragmented data streams.",
      "duration": "60 seconds or until the next long rest, whichever comes first.",
      "endsWhen": "Data corruption occurs, user takes an action, or the effect expires at the end of 1 minute.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The high price reflects its mythic rarity and the risk involved with handling such volatile digital artifacts.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T02:06:44.667363+00:00",
    "aiReviewedAt": "2026-07-25T02:06:44.667363+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_pixel_fragments_of_the_viral_storm": {
    "id": "internet_item_pixel_fragments_of_the_viral_storm",
    "name": "Pixel Fragments of the Viral Storm",
    "description": "Crafted from corrupted data streams during peak viral outbreaks, these Pixel Fragments of the Viral Storm are tangible pieces of chaotic digital entropy. Each fragment can disrupt systems and unleash absurd bursts of information, making them a dangerous yet unpredictable tool for those who know how to wield them. These shards increase movement speed by 10% while also causing brief system glitches that can confuse enemies, but only in areas where their viral energy resonates most strongly.",
    "category": "equipment",
    "price": 1000,
    "icon": "💥",
    "stock": 61,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Causes Brief System Glitches",
      "Increases Movement Speed"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Automated Courier",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Brief System Glitches",
        "rules": "When used within an area heavily influenced by digital signals, this fragment causes a brief system glitch that targets all creatures in a 10-foot radius. The glitch has a 50% chance to inflict 'Digital Confusion' on enemies, causing them to move erratically for 1 round (DC 14 Dexterity saving throw). This effect ends if the target moves out of the area or is hit by an attack."
      },
      {
        "title": "Increased Movement Speed",
        "rules": "The user gains a +10 foot bonus to movement speed while holding this fragment. This effect lasts until the start of your next turn after using it, and it does not stack with other sources of increased movement speed."
      }
    ],
    "levelRequirementReason": "Requires proficiency in digital manipulation to effectively utilize these fragments.",
    "vendorReason": "The pixel Shop specializes in items related to data and technology, making it the perfect vendor for Pixel Fragments of the Viral Storm.",
    "shippingDetail": "Delivered within a day via Automated Courier's high-speed network.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used up or lost contact with the fragment",
      "charges": "Unlimited, but only one use per hour"
    },
    "priceReason": "Balanced price reflects the limited daily stock and the unique properties of these fragments.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T02:07:12.430308+00:00",
    "aiReviewedAt": "2026-07-25T02:07:12.430308+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_the_broken_bandwidth_beacon": {
    "id": "internet_item_the_broken_bandwidth_beacon",
    "name": "The Broken Bandwidth Beacon",
    "description": "The Broken Bandwidth Beacon hums with a faint, pulsating glow as it broadcasts its desperate signal across the fractured network of the East of Midlands. Crafted from salvaged circuitry and twisted metal, this relic attempts to restore connectivity but instead attracts the attention of parasitic algorithms that feed on damaged data streams. Its erratic signals are known to lure lost data tribes in search of repair, yet these encounters can be both perilous and fruitful for the intrepid explorer.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📡",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Draws nearby data tribes",
      "Attracts unwanted attention from parasites"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Express Courier Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Signal Broadcast",
        "rules": "Activates as a bonus action, this beacon broadcasts its signal within a 30-foot radius. On a successful DC 15 Intelligence (Investigation) check, the user can attempt to locate nearby data tribes or hidden caches of information. The effect lasts for 1 minute and requires concentration."
      },
      {
        "title": "Parasite Attraction",
        "rules": "When activated, there is a 20% chance that parasitic algorithms will be drawn within 60 feet of the user. These creatures can be avoided by successfully saving against a DC 15 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "Requires a moderate understanding of technology to operate and interpret the beacon's signals.",
    "vendorReason": "Data Dealers often have access to salvaged tech from various networks, including this broken but potentially useful relic.",
    "shippingDetail": "Ships within three days with express courier service.",
    "usage": {
      "activation": "Bonus action to activate and maintain concentration for up to 1 minute.",
      "duration": "1 minute, requires concentration.",
      "endsWhen": "Concentration is lost or the user discontinues focus.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP as it provides a rare and potentially life-saving tool for network explorers.",
    "priceOriginal": 450,
    "priceReviewedAt": "2026-07-25T02:07:15.774551+00:00",
    "aiReviewedAt": "2026-07-25T02:07:15.774551+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_brutal_resonance_shaper": {
    "id": "grand_country_item_brutal_resonance_shaper",
    "name": "The Brutal Resonance Shaper",
    "description": "This obsidian anchor, carved from solidified vertical currents, vibrates with a low, brutal hum. When activated, it briefly elevates the surrounding terrain, creating unstable platforms for daring maneuvers and devastating falls.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌋",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "temporarily increases vertical movement speed by 20%",
      "creates a small, unstable platform beneath the user for 5 seconds",
      "chance to inflict 'Vertical Dizziness' on nearby enemies (minor disorientation)"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Gravitic Drone",
    "levelRequirement": 25
  },
  "grand_country_item_layer_chronal_anchor_shaper": {
    "id": "grand_country_item_layer_chronal_anchor_shaper",
    "name": "The Layer Chronal Anchor Shaper",
    "description": "The Layer Chronal Anchor Shaper is a cake-layered device that feels unnaturally heavy despite its size. Its faint scent of vanilla hints at the delicate balance between temporal distortion and physical mass. When activated, it briefly rewinds time in a small area, allowing the user to correct minor mistakes with an elegant flourish. It also heals a moderate amount of damage, ensuring the caster remains combat-ready even after a close call.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Temporal Rewind",
      "Healing Surge"
    ],
    "vendor": "layer_market",
    "shippedBy": "Cake Delivery Bot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Rewind",
        "rules": "As an action, activate this device to rewind time in a 5-foot radius for the last 3 seconds. Enemies and objects within this area are affected as if they had moved back in time. This effect is instantaneous but cannot be repeated until after a short or long rest."
      },
      {
        "title": "Healing Surge",
        "rules": "Upon activation, the user regains 75 hit points. However, there is a 10% chance that a 'temporal echo' occurs, confusing enemies within 30 feet for 1 round as their actions become disjointed."
      }
    ],
    "levelRequirementReason": "The device requires a basic understanding of timing and concentration to use effectively.",
    "vendorReason": "Layer Market specializes in unique and time-based artifacts, making it the perfect vendor for this item.",
    "shippingDetail": "Delivered via the Cake Delivery Bot, ensuring your device arrives fresh from the bakery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "After a short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The item’s balanced price reflects its moderate healing effect and the time manipulation it provides, making it an attractive but not overpowered option for players.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:07:03.996419+00:00",
    "aiReviewedAt": "2026-07-25T02:07:03.996419+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_mk.37_elevated_stability_anchor": {
    "id": "grand_country_item_mk.37_elevated_stability_anchor",
    "name": "Mk.37 Elevated Stability Anchor",
    "description": "The Mk.37 Elevated Stability Anchor is a peculiar device forged from compressed doughnut dough and reinforced with strange, upward-pointing spikes that resemble twisted strands of dough. This anchor provides a fleeting sense of groundedness within the chaotic vertical landscape. Activating it releases a pulse of stabilizing energy, briefly solidifying a small patch of ground around you, and reducing fall damage by 50%. It also grants a minor bonus to balance and dexterity, making it easier to maintain your footing on treacherous surfaces.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧱",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Stabilizing Pulse",
      "Fall Damage Reduction"
    ],
    "vendor": "side_seller",
    "shippedBy": "Delivery Pallet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stabilizing Pulse",
        "rules": "When activated, the Mk.37 releases a pulse of energy that briefly solidifies a small patch of ground around you for 1 minute. This effect has no save DC and does not consume charges or require a rest to recharge."
      },
      {
        "title": "Fall Damage Reduction",
        "rules": "Upon activation, the Mk.37 reduces fall damage by 50% for 1 hour. There is no save required, but you can only benefit from this effect once per long rest."
      }
    ],
    "levelRequirementReason": "This anchor's unique design and materials make it accessible to even the most novice adventurers.",
    "vendorReason": "Side_seller specializes in quirky, offbeat items that appeal to a wide range of adventurers.",
    "shippingDetail": "Delivered via standard courier; arrives within two days, no special handling required.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute for Stabilizing Pulse, 1 hour for Fall Damage Reduction",
      "endsWhen": "The effects end when the duration expires or the item is used again.",
      "charges": "Unlimited; no charges to use"
    },
    "priceReason": "This price reflects its unique design and materials, as well as its practical utility in chaotic environments.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T02:07:23.202237+00:00",
    "aiReviewedAt": "2026-07-25T02:07:23.202237+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_lost_master_cards": {
    "id": "kivotos_item_lost_master_cards",
    "name": "The Lost Master's Cards - Freshman Edition",
    "description": "The Lost Master's Cards - Freshman Edition are a peculiar deck of cards, their backs adorned with faded frescoes and scribbled notes. Each card emits a faint glow when shuffled, hinting at the late-night study sessions they once graced. These cards offer fleeting bursts of enhanced recall, making memorization tasks a breeze, but also have a knack for injecting humor into serious matters, leading to occasional missteps in formal logic.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📚",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Recall",
      "Occasional Misstep"
    ],
    "vendor": "student_store",
    "shippedBy": "Academy Express Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Recall",
        "rules": "As a bonus action, the user can activate the cards for a +2d6 modifier to any Intelligence (History) or Investigation check. This effect lasts until the start of your next turn."
      },
      {
        "title": "Occasional Misstep",
        "rules": "There is a 10% chance each time you use Enhanced Recall that you will inadvertently provide an incorrect but plausible answer, which can be contested with a successful DC 12 Wisdom (Insight) check. This effect has no save."
      }
    ],
    "levelRequirementReason": "These cards are accessible to all students, as they require only the user's wit and curiosity.",
    "vendorReason": "The Student Store sells a variety of academic supplies and this deck fits well with their offerings.",
    "shippingDetail": "Delivered within two class periods.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the start of your next turn",
      "endsWhen": "The start of your next turn or if used again before this one ends",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "This price reflects the unique blend of functionality and whimsy that these cards offer to students.",
    "priceOriginal": 125,
    "priceReviewedAt": "2026-07-25T02:07:32.103177+00:00",
    "aiReviewedAt": "2026-07-25T02:07:32.103177+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk49_graduate_cards": {
    "id": "kivotos_item_mk49_graduate_cards",
    "name": "Mk.49 Graduate Cards - Protocol Override",
    "description": "Mk.49 Graduate Cards - Protocol Override are a set of precision-engineered security cards crafted from salvaged data cores and rare alloys. Originally designed to deactivate automated systems within the Academy's central server, these cards can momentarily disrupt digital surveillance and reroute security feeds with pinpoint accuracy. Ideal for both stealthy infiltration or playful pranks, they harness the residual power of the deactivated protocols to bend the rules of digital security.",
    "category": "equipment",
    "price": 1000,
    "icon": "💻",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Disrupt Automated Systems",
      "Reroute Surveillance Cameras"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Secure Courier - Priority Shipping",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Disrupt Automated Systems",
        "rules": "When activated, these cards send a brief signal that momentarily disrupts nearby automated systems for 1 minute. This effect has a 30% chance of causing minor system overloads in adjacent areas. Targets must succeed on a DC 15 Dexterity saving throw or be rendered non-functional until the end of their next turn."
      },
      {
        "title": "Reroute Surveillance Cameras",
        "rules": "Upon activation, the cards reroute nearby surveillance cameras to display static for 30 seconds. This effect can only target one camera per use and has a range of 60 feet. The DC for an observer to notice this disruption is 12."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of digital systems and minimal technical skill, suitable for experienced students.",
    "vendorReason": "The Armory stocks these cards as they are a practical tool for both security training and pranks within the Academy grounds.",
    "shippingDetail": "Ships via priority courier with same-day delivery to any point on campus.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until target system stabilizes (whichever is longer)",
      "endsWhen": "The effect ends when the targeted system stabilizes, minor overloads are repaired, or adjacent systems become functional again.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the unique combination of salvaged tech and specialized engineering.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T02:07:35.172453+00:00",
    "aiReviewedAt": "2026-07-25T02:07:35.172453+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_the_resonance_master_card": {
    "id": "kivotos_item_the_resonance_master_card",
    "name": "The Resonance Master Card – Echoes of the Dorm",
    "description": "The Resonance Master Card – Echoes of the Dorm is a shimmering, iridescent card that hums with the faint echo of the Academy's collective student dreams and fears. Crafted from the very essence of the dormitory’s night-time musings, it captures fleeting glimpses into the minds of those nearby, revealing their deepest desires and anxieties. Activated by a whispered incantation, this artifact grants brief, fragmented visions that can be harnessed for empathic insight or exploited to persuade with uncanny accuracy.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧠",
    "stock": 5,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Brief Glimpse into Nearby Thoughts",
      "Increased Empathy"
    ],
    "vendor": "club_supply",
    "shippedBy": "Night Owl Delivery - Restricted Access Zone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glimpse into Nearby Thoughts",
        "rules": "When activated, the card reveals a random thought from any creature within 30 feet. This effect lasts for 1 minute and can be used once per day."
      },
      {
        "title": "Increased Empathy",
        "rules": "For the duration of one short rest, the user gains advantage on Persuasion checks made against creatures they have interacted with during the previous hour."
      }
    ],
    "levelRequirementReason": "This card is accessible to beginners as it requires no advanced magical knowledge.",
    "vendorReason": "Club Supply caters to scholars and students in need of unique tools for their research and studies.",
    "shippingDetail": "Due to the sensitive nature of the card, it is shipped via Night Owl’s top-secret courier service. The delivery takes an additional hour beyond standard shipping times.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until used in a Persuasion check",
      "endsWhen": "The effect ends when the user makes a successful Persuasion check, is distracted, or after one minute of use.",
      "charges": "One charge per day"
    },
    "priceReason": "The card’s rarity and unique properties justify its price as it offers both insight and potential for manipulation.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T02:07:40.542312+00:00",
    "aiReviewedAt": "2026-07-25T02:07:40.542312+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_sunken-watchers-bastion": {
    "id": "warhammer_item_sunken-watchers-bastion",
    "name": "Sunken Watcher's Bastion",
    "description": "The Sunken Watcher's Bastion is a colossal warhammer forged from the petrified coral of sunken empires, its head shaped like an eternal gargoyle. Each strike slows the target and reveals glimpses into the past battles fought in forgotten depths, granting the wielder brief visions of collapsing timelines. Its malevolent energy pulses with the sorrow of drowned civilizations, making it a fearsome weapon for those who seek to command its ancient power.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗿",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Glimpses",
      "Slowed Target"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Imperial Courier Drone",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Temporal Glimpses",
        "rules": "As an action, the wielder can strike a target with the hammer. This grants them a brief vision of past battles fought in the depths, providing advantage on one ability check related to history or stealth within the next hour."
      },
      {
        "title": "Slowed Target",
        "rules": "Whenever the hammer strikes, the target must make a Strength saving throw (DC 15). On failure, they are reduced to half speed until the end of their next turn. This effect can be triggered up to three times per short or long rest."
      }
    ],
    "levelRequirementReason": "The weapon's power and weight demand a seasoned warrior with significant experience.",
    "vendorReason": "The Imperial Armory is known for its rare and powerful weapons, including artifacts from lost empires.",
    "shippingDetail": "The courier drone delivers the weapon directly to the buyer's location within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Destroyed if used in battle with a non-evil entity",
      "charges": "Unlimited, recharged on completion of a long rest"
    },
    "priceReason": "The weapon's limited daily stock and unique crafting process justify its moderate price.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:07:47.379060+00:00",
    "aiReviewedAt": "2026-07-25T02:07:47.379060+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_crimson-void-curiosity": {
    "id": "warhammer_item_crimson-void-curiosity",
    "name": "Crimson Void Curiosity",
    "description": "The Crimson Void Curiosity is a fragmented warhammer forged from solidified chaos, its surface etched with miniature rifts that pulse and writhe like living things. The pulsing handle, crafted from a single vein of crimson crystal, exudes an unsettling warmth that seems to invite both exploration and destruction. This weapon whispers promises of untold power and peril, capable of shifting reality in localized areas. Its wielder finds themselves surrounded by chaotic entities, drawn to the hammer's call.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chaos_rift",
      "chaotic_atmosphere"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Shadow Messenger",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Chaos Rift",
        "rules": "As a bonus action, the wielder can activate this effect. A localized rift opens around them, creating a 10-foot radius area that distorts reality for 1 minute. Creatures within the area must succeed on a DC 15 Wisdom saving throw or be pushed up to 10 feet away and knocked prone. The effect ends if the wielder moves more than 30 feet from its point of origin."
      },
      {
        "title": "Chaotic Atmosphere",
        "rules": "The wielder is surrounded by a chaotic atmosphere that provides advantage on saving throws against psychic damage, but disadvantage on Wisdom (Perception) checks. This effect lasts until the start of the wielder's next turn after they have moved 30 feet away from the weapon."
      }
    ],
    "levelRequirementReason": "Requires significant discipline and experience to safely handle the weapon’s unstable power.",
    "vendorReason": "Only one who understands chaos would dare sell this dangerous artifact.",
    "shippingDetail": "Delivered by a Shadow Messenger, arriving in shadowy darkness with no visible means of transport.",
    "usage": {
      "activation": "Bonus action to activate Chaos Rift. Passive for Chaotic Atmosphere.",
      "duration": "Chaos Rift lasts 1 minute; Chaotic Atmosphere until next turn after moving 30 feet.",
      "endsWhen": "Wielder moves more than 30 feet away from the weapon or is destroyed by a critical hit.",
      "charges": "Unlimited, but only one use of Chaos Rift per short rest."
    },
    "priceReason": "Balanced with other rare curiosities that offer unique and dangerous abilities.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:08:05.041313+00:00",
    "aiReviewedAt": "2026-07-25T02:08:05.041313+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_fate-forge-observer-97": {
    "id": "warhammer_item_fate-forge-observer-97",
    "name": "Fate Forge Observer-97",
    "description": "The Fate Forge Observer-97 hums with temporal residue, its cold surface etched with cryptic glyphs that shift as you study them, offering fleeting visions of alternate outcomes. A weapon forged in the heart of time's maelstrom, it resists magical effects and grants a chance to dodge attacks, making it a dangerous yet invaluable tool for any wielder. Its enigmatic nature ensures that no two observers are alike, each one carrying its own unique temporal echo.",
    "category": "equipment",
    "price": 1000,
    "icon": "⌚",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "delivery_only",
    "effects": [
      "Temporal Dodge",
      "Time Rewind on Critical Hit"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Temporal Transport Pod",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Temporal Dodge",
        "rules": "When you make an attack roll and it is a critical hit, you gain a +2 bonus to Dexterity saving throws until the end of your next turn. This effect can only occur once per long rest."
      },
      {
        "title": "Time Rewind on Critical Hit",
        "rules": "If you score a critical hit with this weapon, roll 1d4 and subtract that number from an enemy's initiative count at the start of its next turn. The effect ends if you are incapacitated or if you drop to 0 hit points."
      }
    ],
    "levelRequirementReason": "Only those with a deep understanding of temporal mechanics can wield this weapon safely.",
    "vendorReason": "Fate Forge specializes in crafting items that manipulate time, making the Observer-97 an ideal offering for their clientele.",
    "shippingDetail": "The item is delivered via a secure Temporal Transport Pod, ensuring it arrives exactly when ordered.",
    "usage": {
      "activation": "Automatic on critical hit with this weapon.",
      "duration": "Until the end of your next turn for 'Temporal Dodge'; ends if you are incapacitated or drop to 0 hit points for 'Time Rewind'.",
      "endsWhen": "The effects end when you are incapacitated, drop to 0 hit points, or at the start of a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its unique temporal abilities and rarity within the market.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-25T02:08:15.226568+00:00",
    "aiReviewedAt": "2026-07-25T02:08:15.226568+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_jade_touched_byte_surge": {
    "id": "internet_item_jade_touched_byte_surge",
    "name": "Jade Touched's Byte Surge",
    "description": "Jade Touched's Byte Surge is a pulsating cluster of jade that amplifies digital signals, allowing for instantaneous communication across vast distances within the East of Midlands. This artifact is said to have been crafted by a rogue AI obsessed with aesthetics, resulting in a device that not only enhances data streams but also grants temporary access to the Nexus Protocol. However, this power comes at a cost: it attracts unwanted attention from the Glitch Tribes, increasing the chance of encountering them by +10%. Holding it is akin to holding a piece of digital magic frozen in stone form.",
    "category": "consumables",
    "price": 1000,
    "icon": "⚡",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Nexus Protocol Access",
      "Glitch Tribe Attention"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Nexus Protocol Access",
        "rules": "Activates as an action. Grants temporary access to the Nexus Protocol, allowing for bypassing standard data streams and instantaneous communication. The effect lasts for 1 minute per use. While active, there is a +20% increase in data processing speed within a 50-foot radius. Ends when the time expires or the user chooses to deactivate it."
      },
      {
        "title": "Glitch Tribe Attention",
        "rules": "While using the Nexus Protocol, there is a 10% chance per minute that you attract the attention of Glitch Tribes within a 2-mile radius. This effect cannot be avoided and ends when access to the Nexus Protocol is deactivated."
      }
    ],
    "levelRequirementReason": "The intricate technology and potential for attracting dangerous entities necessitate a higher level to wield this artifact safely.",
    "vendorReason": "Data Dealer specializes in cutting-edge digital devices, including those that push the boundaries of communication technology.",
    "shippingDetail": "Ships via Drone Delivery within 24 hours, with a special tracking module included for this high-demand item.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "1 minute per use.",
      "endsWhen": "Time expires or user deactivates it.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The unique combination of advanced technology, potential for attracting dangerous entities, and the need for a higher-level user makes this item worth 1000 XP.",
    "priceOriginal": 785,
    "priceReviewedAt": "2026-07-25T02:08:04.778903+00:00",
    "aiReviewedAt": "2026-07-25T02:08:04.778903+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_mk_47_compressed_packet_ghost": {
    "id": "internet_item_mk_47_compressed_packet_ghost",
    "name": "Mk.47 Compressed Packet Ghost",
    "description": "The Mk.47 Compressed Packet Ghost is a sleek, obsidian-black cylinder that holds a fragment of digital essence from a lost era. When activated, it projects a shimmering, translucent image of static-laden data streams and fragmented servers, revealing hidden pathways in the Eastern Network. The projection also subtly shifts to uncover dormant data caches with a +5% chance per use, but prolonged exposure risks causing disorientation and memory distortion.",
    "category": "equipment",
    "price": 1000,
    "icon": "👻",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Reveals hidden pathways",
      "Uncovers lost data caches"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Cyber Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Pathways",
        "rules": "The user must take a bonus action to activate the projection. The effect lasts for 1 minute and provides a +5 penalty on Intelligence (Investigation) checks within 30 feet, but grants advantage on Perception checks for detecting hidden pathways."
      },
      {
        "title": "Uncover Lost Data Caches",
        "rules": "Each use of the item has a 5% chance to reveal a lost data cache. The effect is instantaneous and does not require an action. This chance resets after each successful use, but cannot exceed a total of three caches per day."
      }
    ],
    "levelRequirementReason": "This item requires the user to have basic knowledge in digital technology to activate its effects.",
    "vendorReason": "Pixel Shop specializes in rare and tech-related items, making this a perfect fit for their inventory.",
    "shippingDetail": "Ships via secure, high-speed data channels ensuring safe delivery within 24 hours.",
    "usage": {
      "activation": "Bonus action to activate the projection. Instantaneous effect with no further actions required until the duration ends or it is destroyed.",
      "duration": "1 minute",
      "endsWhen": "The duration ends, or the item is destroyed by physical force.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and limited utility.",
    "priceOriginal": 12300,
    "priceReviewedAt": "2026-07-25T02:08:54.191551+00:00",
    "aiReviewedAt": "2026-07-25T02:08:54.191551+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_the_void_touched_fragment_key": {
    "id": "internet_item_the_void_touched_fragment_key",
    "name": "The Void Touched Fragment Key",
    "description": "The Void Touched Fragment Key is a jagged, pulsating shard of digital entropy, its surface etched with arcane runes that glow with sickly purple light. Crafted by The Null Collective in the depths of the East of Midlands' network, this key grants access to the Null Zones—areas where data ceases and reality unravels. It is said to offer temporary immunity to data corruption but also invites the presence of hostile AI entities and minor digital anomalies that can bring unpredictable results.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Access to Null Zones",
      "Data Corruption Immunity"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Black Market Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Null Zone Access",
        "rules": "Activates as an action, providing temporary immunity to data corruption (+75%) for 1 hour. This effect ends if the user enters a Null Zone or is exposed to data corruption beyond their immunity threshold."
      },
      {
        "title": "Hostile AI Presence",
        "rules": "The key summons hostile AI entities that last for 10 minutes, during which time the user and allies within 30 feet must make a DC 20 Wisdom saving throw or be affected by the AI's hostile actions. The effect ends when the AI are defeated or the duration expires."
      }
    ],
    "levelRequirementReason": "The key requires a user with basic knowledge of digital networks and data manipulation to safely handle its effects.",
    "vendorReason": "The cyber market is known for dealing in rare and forbidden items, including those related to the Null Zones.",
    "shippingDetail": "Ships via encrypted courier with a 1-day handling period. The package must be signed for by a user of at least 5th level.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous access; immunity lasts for 1 hour",
      "endsWhen": "Entering a Null Zone or exposure to data corruption above the immunity threshold, AI defeat, or duration expiration",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The key's rarity and the high-risk nature of its effects justify this price in XP.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T02:08:26.495281+00:00",
    "aiReviewedAt": "2026-07-25T02:08:26.495281+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_infernal_bound_oculi": {
    "id": "teyvat_item_infernal_bound_oculi",
    "name": "The Infernal Bound's Oculi - Pyreheart",
    "description": "The Infernal Bound's Oculi - Pyreheart are obsidian spheres pulsing with an infernal heat that crackles like molten lava within their depths. When held aloft, they whisper of forgotten rituals and the burning touch of the Abyss, granting the wielder a fleeting resistance to cryo damage and amplifying their attacks against those corrupted by dark magic. These relics are said to have been forged in the heart of an ancient infernal forge, and their power can only be harnessed by those who have faced the abyss themselves.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 37,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Infernal Resistance",
      "Corruption Amplification"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Seafaring Courier",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Infernal Resistance",
        "rules": "While holding the Oculi, the wielder gains resistance to cold damage for 1 minute. This effect ends if the wearer takes any non-magical physical damage or if they voluntarily end it as a bonus action."
      },
      {
        "title": "Corruption Amplification",
        "rules": "When using an attack spell or weapon against a creature of corrupted origin, the wielder deals an additional 1d6 fire damage and has a 25% chance to inflict the Burn condition on the target. This effect can only occur once per short rest."
      }
    ],
    "levelRequirementReason": "Only those who have faced the abyss themselves, typically of 20th level or higher, can wield these powerful relics.",
    "vendorReason": "Inazuma Imports deals in rare and exotic artifacts from across the world, including these ancient oculi.",
    "shippingDetail": "The Seafaring Courier ensures swift delivery of these fragile relics via a secure, air-sea route.",
    "usage": {
      "activation": "Holding the Oculi aloft and concentrating for 1 minute grants their effects.",
      "duration": "1 minute per use",
      "endsWhen": "The effect ends if the wielder takes non-magical physical damage or voluntarily ends it as a bonus action.",
      "charges": "Unlimited, but can only be used once per short rest."
    },
    "priceReason": "Crafted from ancient infernal materials and imbued with powerful magic, these relics are priced at 1000 XP to reflect their unique and potent abilities.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:09:06.500408+00:00",
    "aiReviewedAt": "2026-07-25T02:09:06.500408+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_monstadt_echoing_prism": {
    "id": "teyvat_item_monstadt_echoing_prism",
    "name": "The Mondstadt Echoing Prism - Aether's Lament",
    "description": "The Mondstadt Echoing Prism - Aether's Lament is a prism forged from the echoes of the Seven Stars, its facets shimmering with hues of hope and melancholy. Crafted by the artisans of Mondstadt during the height of their influence, this relic amplifies one’s connection to the winds and grants fleeting visions that could change your future. The prism resonates with the city's spirit, a constant reminder of past battles and unwavering resolve.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Wind Mastery",
      "Futuristic Glimpses"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Aero Delivery Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Wind Mastery",
        "rules": "Increases wind damage by +10% while in combat. This effect lasts until the start of your next turn and can be activated once per short or long rest."
      },
      {
        "title": "Futuristic Glimpses",
        "rules": "Once per long rest, you gain a brief vision of potential future outcomes. Roll a d10; on a 7+, you receive information about an upcoming event or encounter that could alter your current path. This effect has no save DC and can be used once per day."
      }
    ],
    "levelRequirementReason": "The Echoing Prism requires a strong connection to the wind, which is typically achieved by reaching at least level 15.",
    "vendorReason": "Mondstadt’s artisans and scholars are known for their mastery of relics that connect one with the city's spirit and history.",
    "shippingDetail": "Ships immediately within Mondstadt, delivered by a trusted Aero Drone. For deliveries outside Mondstadt, an additional fee applies.",
    "usage": {
      "activation": "Activation is a bonus action at the start of your turn when you are in combat.",
      "duration": "The effect lasts until the start of your next turn and can be used once per short or long rest.",
      "endsWhen": "Exhausted after one use per day, it recharges on completion of a long rest.",
      "charges": "Unlimited daily uses"
    },
    "priceReason": "The Echoing Prism’s price reflects its rarity and the skill required to craft such a relic.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:08:33.984303+00:00",
    "aiReviewedAt": "2026-07-25T02:08:33.984303+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_liyue_frost_rune_bound": {
    "id": "teyvat_item_liyue_frost_rune_bound",
    "name": "The Liyue Frost Rune - Dragonheart's Vigil",
    "description": "The Liyue Frost Rune - Dragonheart's Vigil is a meticulously carved jade artifact, its surface etched with ancient runes and embedded with a shard of frozen jade from the Jade Chamber. This relic radiates an icy chill that permeates the air around it, offering both physical fortification and elemental resilience. Legends whisper that it once protected the sacred path to the Heart of the Mountain, where the spirits of those who safeguarded the land reside eternally.",
    "category": "equipment",
    "price": 1000,
    "icon": "❄️",
    "stock": 5,
    "rarity": "rare",
    "stockType": "delivery_only",
    "effects": [
      "Frozen Fortitude",
      "Cryomancy Aura"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Maritime Cargo Ship",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Frozen Fortitude",
        "rules": "The Liyue Frost Rune bestows a +30% bonus to physical defense and grants the wearer cryo resistance equal to 20%. This effect is passive while worn, but if the wielder takes damage from an attack or ability with the Cryo type, there's a 10% chance that the attacker’s next action is frozen for one round."
      },
      {
        "title": "Cryomancy Aura",
        "rules": "The rune emits a shimmering frost aura within a 5-foot radius. While in this area, any creature that deals Cryo-type damage to an enemy has their next attack or ability with the same type become ineffective until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The rune's ancient power requires a certain understanding of its history and lore, suitable for those who have reached at least level 10.",
    "vendorReason": "Liyue Harbor is known for its connection to the Jade Chamber and holds artifacts from this sacred place.",
    "shippingDetail": "Due to its fragile nature, it is shipped via the most secure Maritime Cargo Ship available.",
    "usage": {
      "activation": "Passive effect. Requires no activation.",
      "duration": "Permanent while worn.",
      "endsWhen": "Destroyed upon removal or if the wearer takes damage from a non-Cryo type attack three times in a single combat encounter.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The rune's rarity and historical significance justify its fair value of 1000 XP.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-25T02:09:11.530138+00:00",
    "aiReviewedAt": "2026-07-25T02:09:11.530138+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_skull-speaker-of-grim-regret": {
    "id": "warhammer_item_skull-speaker-of-grim-regret",
    "name": "Skull-Speaker of Grim Regret",
    "description": "The Skull-Speaker of Grim Regret, a tarnished bronze talisman etched with the visages of fallen warriors and their whispered regrets, grants brief visions into the final moments of those who perished on the battlefield. Holding it allows you to momentarily experience fragments of their last breaths—a potent tool for strategic foresight or a grim reminder of mortality. Its whispers can inspire fear in foes, making it an invaluable asset to any tactician.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Brief Vision of Regret",
      "Inspire Fear"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "express_delivery",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Brief Vision of Regret",
        "rules": "When activated as a bonus action, the user gains a brief vision into the final moments of a fallen warrior. This vision lasts for 1 round and grants advantage on one ability check related to strategy or insight. The effect can be used once per short rest."
      },
      {
        "title": "Inspire Fear",
        "rules": "Once per long rest, the user can activate this effect as an action to inspire fear in a single creature within 30 feet. The target must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. Frightened targets have disadvantage on attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "The item's power and the strategic insight it grants are only useful to seasoned warriors with significant combat experience.",
    "vendorReason": "The imperial army is known for its rigorous selection process, ensuring that only those of proven valor wield such powerful relics.",
    "shippingDetail": "Ships via express delivery with overnight service.",
    "usage": {
      "activation": "Bonus Action or Action",
      "duration": "Instantaneous (1 round) for Brief Vision; 1 minute for Inspire Fear",
      "endsWhen": "Effect ends when the duration expires, target saves successfully, or the user no longer holds the item.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it provides significant strategic and tactical advantages without overshadowing other party members.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:09:24.446450+00:00",
    "aiReviewedAt": "2026-07-25T02:09:24.446450+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_rune-walker-of-bone-echoes": {
    "id": "warhammer_item_rune-walker-of-bone-echoes",
    "name": "Rune-Walker of Bone Echoes",
    "description": "The Rune-Walker of Bone Echoes is a warhammer forged from the charred fragments of an ancient battle engine, its surface etched with forbidden runes that whisper the echoes of past conflicts. Wielders can traverse the haunted grounds of recent battles, manifesting as spectral combatants to scout or disrupt enemy formations. This artifact's power is both unsettling and effective, revealing the last movements of fallen warriors within a 30-foot radius for 1 minute, and has a 20% chance to summon a ghostly warrior to aid in battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "👣",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Battlefield Scrying",
      "Spectral Ally"
    ],
    "vendor": "fate_forge",
    "shippedBy": "premium_shipping",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Battlefield Scrying",
        "rules": "As an action, the wielder can activate this effect within a battlefield. For 1 minute, they gain advantage on Perception checks to locate recently deceased combatants and their last movements within a 30-foot radius. This effect ends when the duration expires or if the wielder moves more than 5 feet away from the battlefield."
      },
      {
        "title": "Spectral Ally",
        "rules": "Once per short rest, the wielder can summon a ghostly warrior that grants them a +1 bonus to AC and damage rolls until it is destroyed. The ghostly warrior lasts for 1 minute or until reduced to 0 hit points."
      }
    ],
    "levelRequirementReason": "Requires significant martial prowess and understanding of ancient runic magic.",
    "vendorReason": "Fate Forge specializes in crafting items from the remnants of legendary battles, making this artifact a natural addition to their stock.",
    "shippingDetail": "Dispatched via the Swift Wind Courier, delivering within 3 days with extra protection against magical interference.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until conditions end it",
      "endsWhen": "Duration expires or wielder moves more than 5 feet away from a battlefield",
      "charges": "Once per short rest"
    },
    "priceReason": "Balanced by its limited utility and the risk of magical backlash associated with heretical runes.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:09:14.976335+00:00",
    "aiReviewedAt": "2026-07-25T02:09:14.976335+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_service-of-the-grim-harvester": {
    "id": "warhammer_item_service-of-the-grim-harvester",
    "name": "Service of the Grim Harvester",
    "description": "The 'Service of the Grim Harvester' is a bone talisman intricately carved with runes of shadow and death. This necrotic artifact pulses faintly, its energy whispering tales of forgotten battles. By focusing intent upon it, you can summon a spectral Harvester to retrieve lost items from the battlefield. The spectral creature moves with eerie precision, returning not only mundane gear but also rare artifacts overlooked by scavengers. Its touch grants a fleeting insight into battlefield strategies and tactics.",
    "category": "services",
    "price": 1000,
    "icon": "💀✨",
    "stock": 8,
    "rarity": "mythic",
    "stockType": "delivery_only",
    "effects": [
      "Spectral Retrieval",
      "Battlefield Insights"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spectral Retrieval",
        "rules": "As an action, you can summon the spectral Harvester to retrieve a lost item. The Harvester has a range of 1 mile and returns within one hour. This effect is limited to once per long rest."
      },
      {
        "title": "Battlefield Insights",
        "rules": "For the duration of one short rest, you gain advantage on Intelligence (Investigation) checks related to battlefield tactics. This effect does not require an action or attack roll and can be used once per day."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who wish to access the benefits of battlefield scavenging without the steep level cap required by more powerful items.",
    "vendorReason": "The chaos dealer often deals in unique and rare artifacts, including those that grant access to shadowy services like retrieval from forgotten battles.",
    "shippingDetail": "The item is delivered via a dimensional portal, ensuring swift arrival but with the risk of unexpected visitors.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Spectral Retrieval) / One Short Rest (Battlefield Insights)",
      "endsWhen": "Ends when the effect duration expires or you choose to dismiss it.",
      "charges": "Unlimited, but limited by rest requirements."
    },
    "priceReason": "The item's rarity and utility are balanced against its mythic power, offering a significant yet not overpowered advantage for adventurers of all levels.",
    "priceOriginal": 27500,
    "priceReviewedAt": "2026-07-25T02:09:30.714233+00:00",
    "aiReviewedAt": "2026-07-25T02:09:30.714233+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_crimson_void_breather": {
    "id": "doughnut_hole_item_crimson_void_breather",
    "name": "The Crimson Void Breather Mk.II",
    "description": "The Crimson Void Breather Mk.II hums softly, its obsidian casing etched with arcane glyphs that pulse with a deep crimson hue. When activated, it momentarily stills the oppressive silence and grants a burst of revitalizing energy. The device's core resonates with a strangely pleasant hum, purging the lingering echoes of despair. Activated as a bonus action, this relic restores 25% health and increases your movement speed by 10% for 15 seconds.",
    "category": "equipment",
    "price": 7800,
    "icon": "💨",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Restores Health",
      "Increased Movement Speed"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Health Restoration",
        "rules": "Activating the device as a bonus action restores 25% of your maximum hit points. This effect has a recharge time of 1 hour."
      },
      {
        "title": "Speed Boost",
        "rules": "Upon activation, you gain a +10 foot movement speed bonus for 15 seconds. The effect ends if you take any damage or when the duration expires."
      }
    ],
    "levelRequirementReason": "The device's complex mechanics and energy signature require a proficient user to effectively harness its power.",
    "vendorReason": "Void Vendor specializes in rare artifacts from beyond, including this relic of the Crimson Void.",
    "shippingDetail": "Ships via Dimensional Rift Courier within 3 days. Due to its volatile nature, it must be handled with care and delivered under controlled conditions.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "15 seconds",
      "endsWhen": "You take damage or the duration expires",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "The Mk.II is crafted from rare materials and requires advanced enchantments, justifying its high price.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T02:10:29.930414+00:00",
    "aiReviewedAt": "2026-07-25T02:10:29.930414+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_sacred_heart_fragment": {
    "id": "doughnut_hole_item_sacred_heart_fragment",
    "name": "Fragment of the Sacred Heart - Cycle 37",
    "description": "The Fragment of the Sacred Heart - Cycle 37 is a crystalline shard that hums with ancient chronal energy, its surface etched with faint runes that shimmer like stars in a void. When held, it grants fleeting visions of potential futures, whispering warnings about impending doom and hidden paths. Legends tell of this fragment as a tear from an entity's obliteration, imbuing the wielder with a protective warmth against the void's encroachment.",
    "category": "curiosities",
    "price": 1850,
    "icon": "❤️",
    "stock": 47,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Temporal Vision",
      "Void Resistance"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Wraith Delivery Service",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Temporal Vision",
        "rules": "As a bonus action, the wielder can activate this effect to gain brief glimpses of potential futures. These visions last for 30 seconds and provide a +5% increase in Perception checks. On a failed save (DC 14), the wielder is momentarily blinded by temporal distortions, reducing their next Perception check by 2 until the end of their next turn."
      },
      {
        "title": "Void Resistance",
        "rules": "While holding this fragment, the wielder gains resistance to damage from void-based attacks. This effect lasts for a number of turns equal to twice their Wisdom modifier (minimum 1). The effect ends if the wielder is exposed to a significant void disturbance or if they use an action to dismiss it."
      }
    ],
    "levelRequirementReason": "The fragment's chronal energy and cryptic visions require a high level of spiritual and temporal understanding.",
    "vendorReason": "Hole Hawker, being an enigmatic scavenger of lost relics, is the only one known to have encountered this sacred relic in the void.",
    "shippingDetail": "The fragment must be delivered through the Void Wraith's exclusive portal, ensuring it arrives unharmed and intact.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "30 seconds or until dismissed",
      "endsWhen": "Void disturbance or action to dismiss",
      "charges": "Unlimited"
    },
    "priceReason": "The fragment's rarity and the unique abilities it grants justify its high price.",
    "priceOriginal": 1850,
    "priceReviewedAt": "2026-07-25T02:10:05.148761+00:00",
    "aiReviewedAt": "2026-07-25T02:10:05.148761+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_central_tear_reclamation_service": {
    "id": "doughnut_hole_item_central_tear_reclamation_service",
    "name": "Reclamation Service - Cycle 9",
    "description": "The Reclamation Service - Cycle 9 is a delicate and precise apparatus crafted by Chronal Technicians, designed to stabilize unstable central tears in the fabric of time. This specialized service employs advanced temporal containment fields to redirect errant energies, preventing catastrophic rifts from expanding into alternate timelines. The device hums with an eerie, pulsating light as it stabilizes one tear for 60 seconds, but its unpredictable nature makes each application a gamble.",
    "category": "services",
    "price": 1000,
    "icon": "🛠️",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Stabilization",
      "Safe Passage Through Void"
    ],
    "vendor": "center_seller",
    "shippedBy": "Chronal Stabilization Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Stabilization",
        "rules": "Activates on command as an action. Temporarily stabilizes one central tear for 60 seconds, reducing the risk of expanding to a catastrophic rift. There is a 10% chance each use that the stabilization fails and the tear expands uncontrollably."
      },
      {
        "title": "Safe Passage Through Void",
        "rules": "Once per day as an action, allows safe passage through a designated void area for up to one hour. The device creates a protective field around the traveler, ensuring they avoid any dangers within the void area."
      }
    ],
    "levelRequirementReason": "Even the simplest stabilizations require a basic understanding of temporal mechanics and safety protocols.",
    "vendorReason": "The Center Seller specializes in services that maintain the integrity of time itself, making them the only vendor for this specialized apparatus.",
    "shippingDetail": "Delivered by a Chronal Drone equipped with advanced shielding to protect the delicate device during transit.",
    "usage": {
      "activation": "Activates on command as an action. Can be used once per day for each effect.",
      "duration": "Temporal Stabilization lasts for 60 seconds, Safe Passage Through Void lasts up to one hour.",
      "endsWhen": "The stabilization fails or the traveler exits the void area, respectively.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at a cost of 1000 XP due to its specialized and unpredictable nature.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-25T02:10:25.818951+00:00",
    "aiReviewedAt": "2026-07-25T02:10:25.818951+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_infernal_claimeds_bloodrune_breaker": {
    "id": "warhammer_item_infernal_claimeds_bloodrune_breaker",
    "name": "Infernal Claimed’s Bloodrune Breaker",
    "description": "The Infernal Claimed’s Bloodrune Breaker is a colossal warhammer whose head gleams with an ominous crimson hue. Its weight feels unnatural, as if forged by infernal hands to shatter the strongest armor and cleave through flesh with ease. The etched runes on its surface glow faintly, whispering of ancient battles fought in forgotten realms. Each strike leaves behind a trail of corrupted blood that continues to burn for moments after contact.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "fire_and_corruption",
      "strength_boost"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "flying_griffin",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Fire and Corruption",
        "rules": "When the hammer strikes, it deals fire damage equal to twice the user’s Strength modifier. There is a 30% chance that the target will be marked with a trail of corrosive blood that continues to deal an additional 1d6 fire damage at the start of each of its turns for up to 2 minutes."
      },
      {
        "title": "Strength Boost",
        "rules": "The wielder gains a temporary bonus equal to their proficiency bonus + 4 to Strength-based checks and saving throws until the end of their next turn. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This weapon requires significant strength and experience to wield properly, aligning with its infernal power.",
    "vendorReason": "The chaos dealer has a unique connection to the infernal realms where this weapon was forged.",
    "shippingDetail": "Ships via flying griffin, arriving within one week of order placement.",
    "usage": {
      "activation": "Melee Weapon Attack: Str mod +10 (Proficiency Bonus +5) vs. AC or Reflex; hit: 2d8+4 fire damage and apply the effects of Fire and Corruption.",
      "duration": "Instantaneous, with one use per short rest.",
      "endsWhen": "The hammer’s charge is expended after a single attack.",
      "charges": "1/short_rest"
    },
    "priceReason": "This weapon's price reflects its rarity and the specialized crafting required to forge it.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T02:09:46.361634+00:00",
    "aiReviewedAt": "2026-07-25T02:09:46.361634+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_fateforge_mk_79_desolation_herald": {
    "id": "warhammer_item_fateforge_mk_79_desolation_herald",
    "name": "Fate Forge Mk.79 Desolation Herald",
    "description": "The Fate Forge Mk.79 Desolation Herald is a warhammer forged in the heart of the Fate Forge, where time itself fractures and bends. Its surface etched with timelines of endless wars, each strike reveals fragments of vanished battles. This unholy weapon deals bludgeoning damage enhanced by the very fabric of shattered realities, and it saps an enemy's will to fight, slowing their movements while they are ensnared in a maelstrom of fate’s whimsy.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 2,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Temporal Shatter",
      "Will Sap"
    ],
    "vendor": "fate_forge",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Temporal Shatter",
        "rules": "When you hit with this weapon as part of an attack action, the target must make a DC 18 Dexterity saving throw or be knocked prone and take an additional 2d6 force damage. The target can use their reaction to halve this damage on a successful save."
      },
      {
        "title": "Will Sap",
        "rules": "The Desolation Herald saps the will of the foe, reducing enemy movement speed by 10 feet until the start of your next turn. If you hit with an attack action while wielding it, the duration is increased to 1 minute."
      }
    ],
    "levelRequirementReason": "Only the most seasoned heroes can wield this weapon without succumbing to its malevolent influence.",
    "vendorReason": "The forge's master artisans crafted it, embodying the deepest secrets of fate and time.",
    "shippingDetail": "Shipped through a dimensional portal, this weapon arrives with a delay of one week due to the intricate nature of its transit.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous effect; temporal shatter lasts until end of turn; will sap lasts for duration or until target moves",
      "endsWhen": "On a successful save, ends immediately. Will sap ends when the target moves.",
      "charges": "Unlimited"
    },
    "priceReason": "The balance is adjusted to reflect the weapon's unique effects and its rarity within the game world.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T02:10:02.473373+00:00",
    "aiReviewedAt": "2026-07-25T02:10:02.473373+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_grim_bastards_shadow_devourer": {
    "id": "warhammer_item_grim_bastards_shadow_devourer",
    "name": "Grim Bastard’s Shadow Devourer",
    "description": "The Grim Bastard’s Shadow Devourer is a warhammer forged from obsidian, its surface etched with dark runes that whisper of forgotten horrors. This weapon does not merely strike; it absorbs the very essence of its foes, feeding on their despair to fuel its wielder's aggression and prowess in battle. When wielded, a chilling mist envelops the user, amplifying their attack speed and giving them an unsettling advantage over their enemies.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "godly",
    "stockType": "back_order",
    "effects": [
      "deals_shadow_damage",
      "chance_to_silence"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "dark_wraith",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Deals Shadow Damage",
        "rules": "When you hit with a melee weapon attack while holding this warhammer, the target must succeed on a DC 18 Constitution saving throw or be affected by the Silenced condition until the end of its next turn. On a critical hit, the target is also deafened for 1 minute."
      },
      {
        "title": "Increases Attack Speed",
        "rules": "While holding this weapon, you have advantage on attack rolls with it and your attack speed is increased by one additional attack per round at the start of your turn. This effect ends if you drop or switch to another weapon."
      }
    ],
    "levelRequirementReason": "This warhammer requires a level 15 character due to its dark magic and ability to absorb essence.",
    "vendorReason": "The Imperial Armory deals in the most forbidden and powerful weapons, including those that manipulate shadow and darkness.",
    "shippingDetail": "Delivered by a dark wraith courier, this item is escorted through the night sky to ensure it reaches its destination without being detected.",
    "usage": {
      "activation": "Instantaneous activation with any melee weapon attack.",
      "duration": "Until the end of your next turn.",
      "endsWhen": "On a failed saving throw or if you drop or switch weapons.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "The cost reflects its forbidden nature and the materials required to craft such a weapon that manipulates shadow magic.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-25T02:10:36.351504+00:00",
    "aiReviewedAt": "2026-07-25T02:10:36.351504+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_crimson_echoes_of_valor": {
    "id": "pokemon_item_crimson_echoes_of_valor",
    "name": "Crimson Echoes of Valor's Fallen Treats",
    "description": "Crimson Echoes of Valor's Fallen Treats are crafted from crystallized battle cries, imbuing a Pokémon with a surge of aggressive determination and amplifying its attack power during moments of fierce combat. These treats not only enhance the eater’s aggression by +1 but also cause faint auditory hallucinations of legendary battles, inspiring them to push past their limits. The echoes seem to whisper of valorous deeds, temporarily heightening the Pokémon's resolve in the heat of battle.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Amplifies Attack Power",
      "Increases Aggression"
    ],
    "vendor": "pokemart",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Attack Amplification",
        "rules": "When consumed, these treats temporarily increase a Pokémon’s attack power by 30% for 60 seconds. The effect is instantaneous upon consumption and lasts until the duration ends."
      },
      {
        "title": "Aggression Boost",
        "rules": "Eating this treat grants +1 to Aggression, a stat that reflects a Pokémon's readiness for combat. This increase persists for the duration of battle or until the end of the encounter."
      }
    ],
    "levelRequirementReason": "This item is designed for high-level trainers whose Pokémon have already demonstrated prowess in battle.",
    "vendorReason": "Pokemart, known for its vast selection of battle-enhancing items, offers these treats to help trainers and their Pokémon reach new heights of combat effectiveness.",
    "shippingDetail": "Ships via same-day Drone Delivery service, ensuring these precious treats arrive at your door in peak condition.",
    "usage": {
      "activation": "Eaten as a free action during the start of an encounter or battle.",
      "duration": "60 seconds per use.",
      "endsWhen": "The duration ends when the effect expires, and it can be used again after a short rest.",
      "charges": "Unlimited uses between long rests."
    },
    "priceReason": "This item’s rarity and potent effects justify its high price, reflecting the limited supply and significant enhancement to combat performance it provides.",
    "priceOriginal": 287,
    "priceReviewedAt": "2026-07-25T02:10:40.666690+00:00",
    "aiReviewedAt": "2026-07-25T02:10:40.666690+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_starmetal_fossil_fragments": {
    "id": "pokemon_item_starmetal_fossil_fragments",
    "name": "Starmetal Fossil Fragments Mk.78",
    "description": "Forged from the very essence of a fallen star, these Starmetal Fossil Fragments Mk.78 are said to have been recovered from an ancient crater near the lunar peak of Mount Moon. These fragments infuse any Pokémon armor with celestial power, enhancing its defense and strengthening the bond between the wearer and the stars above. Applied to a Pokémon's armor, they grant a +40% increase in defense and +5 to the Stardust stat, making the Pokémon more resilient to psychic attacks.",
    "category": "equipment",
    "price": 1000,
    "icon": "⭐",
    "stock": 9,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Stellar Defense",
      "Celestial Bond"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Magma Crane Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stellar Defense",
        "rules": "Activates as a bonus action when applied to a Pokémon’s armor. The Pokémon gains a +40% increase in defense until the end of its next turn. This effect ends if the Pokémon takes any damage."
      },
      {
        "title": "Celestial Bond",
        "rules": "Passive effect that grants the Pokémon +5 to its Stardust stat, enhancing its connection to stellar energies. This benefit remains as long as the fragments are attached to the armor and is lost when they are removed or the armor is destroyed."
      }
    ],
    "levelRequirementReason": "The Starmetal Fossil Fragments Mk.78 are accessible to all Pokémon, as their power lies in enhancing any armor rather than requiring a specific level.",
    "vendorReason": "The Safari Shop specializes in rare and ancient artifacts that enhance the prowess of Pokémon, making it an ideal location for these fragments.",
    "shippingDetail": "Ships via Magma Crane's Express Lane, ensuring timely delivery from the lunar peak to any region within a week.",
    "usage": {
      "activation": "Bonus action when applied to armor",
      "duration": "Until end of next turn (Stellar Defense)",
      "endsWhen": "Taking damage or removing fragments",
      "charges": "Unlimited"
    },
    "priceReason": "The Starmetal Fossil Fragments Mk.78 are priced at 1000 XP, reflecting their rarity and the significant enhancement they provide to any Pokémon armor.",
    "priceOriginal": 8123,
    "priceReviewedAt": "2026-07-25T02:11:04.851645+00:00",
    "aiReviewedAt": "2026-07-25T02:11:04.851645+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_aurora_driftwood_treats": {
    "id": "pokemon_item_aurora_driftwood_treats",
    "name": "Aurora Driftwood Treats of the Fallen Bloom",
    "description": "Aurora Driftwood Treats of the Fallen Bloom are crystalline snacks harvested from ancient bioluminescent flora within the Aurora Zone. The treats' delicate structure and iridescent sheen hint at their origins, as they glow faintly with a light that seems to weave between dimensions. Consuming these treats grants a Pokémon increased agility, allowing for more fluid movements in combat or exploration. The ephemeral luminescence also provides a boost in evasion, making the creature harder to hit by foes.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 17,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Agility Boost",
      "Enhanced Evasion"
    ],
    "vendor": "league_store",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Agility Boost",
        "rules": "Upon consumption, the Pokémon's Speed is increased by +20% for 1 minute. This effect requires a bonus action to activate and has no save DC or uses limit."
      },
      {
        "title": "Enhanced Evasion",
        "rules": "The treat grants an additional +2 to the Pokémon's Evasion stat, which reflects in its AC and miss chance. This benefit lasts for 10 minutes and does not stack with other bonuses."
      }
    ],
    "levelRequirementReason": "These treats are designed for beginners or those who need a quick boost without stringent level restrictions.",
    "vendorReason": "The league store frequently stocks items favored by competitive trainers and rare finds, making these treats available to all aspiring champions.",
    "shippingDetail": "Delivered swiftly via the Winged Courier's aerial routes, ensuring that these delicacies arrive fresh from the Aurora Zone.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute (Agility Boost) / 10 minutes (Enhanced Evasion)",
      "endsWhen": "Effect duration expires or Pokémon is incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rarity and unique properties of these treats, which are harvested from deep within the Aurora Zone.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-25T02:10:50.493402+00:00",
    "aiReviewedAt": "2026-07-25T02:10:50.493402+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_brutal_walker_of_grimstone": {
    "id": "faerun_item_brutal_walker_of_grimstone",
    "name": "Brutal Walker's Scrolls of Grimstone Resonance",
    "description": "The Brutal Walker's Scrolls of Grimstone Resonance are ancient, weathered parchment imbued with the raw strength of the stone giants who once toiled in the depths of the mountains. When invoked, they conjure a spectral stone walker that resonates with the earth, temporarily fortifying your defenses and granting you resilience against physical harm. The echoes of these scrolls amplify your attacks, leaving behind a trail of weakening blows that can cripple foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant temporary damage resistance",
      "summon spectral stone walker (brief)"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "Griffon Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Stone Resonance",
        "rules": "Activates as an action, providing you with a +15% bonus to your AC for 1 minute. This effect can be used once per long rest."
      },
      {
        "title": "Bleeding Strikes",
        "rules": "When you deal damage with a melee weapon attack while the spectral stone walker is active, there is a 20% chance that the target becomes prone and starts bleeding on their next turn. This effect cannot be used more than once per short rest."
      }
    ],
    "levelRequirementReason": "The scrolls are crafted to assist seasoned adventurers who can appreciate their raw power.",
    "vendorReason": "They specialize in ancient and rare artifacts, including relics of the stone giants that once roamed Faerûn.",
    "shippingDetail": "Due to the fragile nature of these scrolls, they are transported using the Griffon Courier's enchanted flight pouches to ensure safe delivery.",
    "usage": {
      "activation": "action",
      "duration": "1 minute",
      "endsWhen": "the effect expires or you take any action that ends it (e.g., casting a spell)",
      "charges": "unlimited"
    },
    "priceReason": "The scrolls are crafted from ancient dwarven runes and require significant magical energy to activate, making them moderately priced for their power.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T02:11:12.647516+00:00",
    "aiReviewedAt": "2026-07-25T02:11:12.647516+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_shadow_scrolls_of_silent_whispers": {
    "id": "faerun_item_shadow_scrolls_of_silent_whispers",
    "name": "Shadow Scrolls of Silent Whispers - The Collector's Edition",
    "description": "The Shadow Scrolls of Silent Whispers - The Collector's Edition are ancient, vellum-bound tomes recovered from a cultist’s hidden sanctum beneath Candlekeep. Their pages pulse with a chilling darkness that whispers unsettling truths when unfurled. These scrolls blur perception in dim light, granting advantage on Stealth checks and temporarily blurring the senses of those nearby, making foes more likely to fear them. The Collector's Edition adds an air of arcane prestige and a touch of forbidden lore.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👻",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "advantage on stealth checks",
      "blur perception"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "Dark Elf Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Stealth Checks",
        "rules": "When you use this item in dim light to make a Dexterity (Stealth) check, you gain advantage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Blur Perception",
        "rules": "For 1 minute when unfurled, any creature within 30 feet that can see the scrolls must succeed on a DC 15 Wisdom saving throw or be blinded until the end of their next turn. This effect ends if an ally moves into the area."
      }
    ],
    "levelRequirementReason": "The Collector's Edition is accessible to all adventurers, emphasizing its historical and magical significance rather than its power.",
    "vendorReason": "As a repository of unique artifacts, Baldur's Bazaar naturally carries these prestigious scrolls.",
    "shippingDetail": "Ships via the Dark Elf Messenger, ensuring safe delivery even in shadowy territories.",
    "usage": {
      "activation": "Unfurling the scrolls as an action",
      "duration": "1 minute per unfurling",
      "endsWhen": "The effect ends for each creature on its next turn or if another creature enters the area",
      "charges": "Unlimited uses"
    },
    "priceReason": "This Collector's Edition is priced at 1000 XP, reflecting the scrolls' historical significance and the effort to recover them from a hidden sanctum.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T02:10:57.390434+00:00",
    "aiReviewedAt": "2026-07-25T02:10:57.390434+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_mythic_scroll_of_the_stone_gods": {
    "id": "faerun_item_mythic_scroll_of_the_stone_gods",
    "name": "Mythic Scroll of the Stone Gods - The Obsidian Verdict",
    "description": "The Obsidian Verdict, a scroll forged in ancient temples to earth gods, radiates an aura of unyielding determination. Unfurl it and feel the ground tremble beneath your feet as a colossal golem made entirely from obsidian rises with a thunderous crash, its every strike capable of turning foes into stone. The scroll's power is not to be trifled with; only those who have faced the earth itself can wield this relic with any hope of survival.",
    "category": "premium",
    "price": 1000,
    "icon": "🗿",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Summons an Obsidian Golem",
      "Induces Petrification"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Divine Pegasus Express",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Summon Obsidian Golem",
        "rules": "When activated, the scroll unleashes a colossal golem made from obsidian. The golem has a reach of 10 feet and can attack with its Slam (melee weapon attack) dealing 2d8 + 5 bludgeoning damage. It is immune to all non-magical attacks and gains temporary immunity to earth-based attacks for the duration of the effect."
      },
      {
        "title": "Induce Petrification",
        "rules": "There's a 30% chance that any creature struck by the golem’s attack will be petrified. The save DC is 15. This effect lasts until the end of your next turn unless you succeed on a DC 15 Strength saving throw."
      }
    ],
    "levelRequirementReason": "Only those who have faced the earth itself can wield this relic with any hope of survival.",
    "vendorReason": "Waterdeep's market, known for its rare and powerful artifacts, is the only place where such a dangerous but potent scroll could be found.",
    "shippingDetail": "Ships via Divine Pegasus Express. Expected delivery time is three game days from the nearest major city.",
    "usage": {
      "activation": "Action",
      "duration": "One use per day, lasting until the end of your next turn unless a creature saves successfully against the Petrification effect.",
      "endsWhen": "The golem dissipates or the creature struck by its attack successfully saves against petrification.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this scroll offers a potent combination of offensive and defensive capabilities that are unparalleled in the market.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T02:12:19.131519+00:00",
    "aiReviewedAt": "2026-07-25T02:12:19.131519+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_pulsating_center_shard": {
    "id": "doughnut_hole_item_pulsating_center_shard",
    "name": "The Pulsating Center Shard",
    "description": "The Pulsating Center Shard is a fractured piece of void energy, its surface pulsing with an eerie rhythm. Held in one's hand, it subtly warps reality, making immediate surroundings feel distorted. This shard grants insight into hidden pathways and slightly distorts the perceptions of foes, reducing their accuracy by 10% for 30 seconds. It also resonates with the void, enhancing Insight checks by +5 for a minute, offering a fleeting glimpse into the unseen.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Minor Distortion",
      "Void Resonance"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Distortion",
        "rules": "Reduces enemy accuracy by 10% for 30 seconds. This effect ends if the shard is removed from one's hand or a saving throw (DC 12) is successful."
      },
      {
        "title": "Void Resonance",
        "rules": "+5 to Insight checks for 1 minute. Ends when the duration expires, and the user must make a DC 14 Wisdom saving throw at the end of their next turn; on a failed save, they are stunned until the start of their next turn."
      }
    ],
    "levelRequirementReason": "Even for the least experienced adventurers, the shard's influence is too potent.",
    "vendorReason": "Void Vendor deals exclusively in items from the Fated Place, and this shard's origin aligns with her wares.",
    "shippingDetail": "Ships via a rift courier ensuring safe delivery within an hour of purchase.",
    "usage": {
      "activation": "Passive effect when held in one's hand.",
      "duration": "1 minute for Void Resonance; 30 seconds for Minor Distortion.",
      "endsWhen": "Effect ends upon removal from hand or successful saving throw.",
      "charges": "Unlimited, but only one instance of each effect can be active at a time."
    },
    "priceReason": "The shard's rarity and potent effects justify its price in uncommon treasure.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T02:11:19.091404+00:00",
    "aiReviewedAt": "2026-07-25T02:11:19.091404+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_jeweled_maker_nulls": {
    "id": "doughnut_hole_item_jeweled_maker_nulls",
    "name": "Jeweled Maker's Nulls - Mk.37",
    "description": "The Jeweled Maker's Nulls - Mk.37 are intricately crafted from obsidian and adorned with twinkling, internal illuminations that cast an eerie light upon their surroundings. Hailing from a forgotten forge of ancient workshops, these nulls are imbued with the residual energies capable of stabilizing minor dimensional breaches. They hum softly as they absorb 25% of magical damage and provide a localized protection against void effects, rendering them nearly impervious to mystical void-related attacks.",
    "category": "equipment",
    "price": 1800,
    "icon": "💎",
    "stock": 27,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Dimensional Anchor",
      "Energy Absorption"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Carrier Drone",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Dimensional Anchor",
        "rules": "Provides a 10-foot-radius area centered on you that is resistant to void effects. Enemies within the area take a -2 penalty to all saving throws against such attacks, and their effectiveness is reduced by 50%. This effect lasts for 1 minute or until an attacker enters or leaves the area."
      },
      {
        "title": "Energy Absorption",
        "rules": "Absorbs 25% of any incoming magical damage dealt to you. The absorbed energy can be expelled as a bonus action, dealing 1d6 force damage to all creatures within 5 feet and creating a 10-foot-radius area that resists further magical damage for 1 minute."
      }
    ],
    "levelRequirementReason": "This level requirement ensures only powerful adventurers can harness the ancient power of these nulls.",
    "vendorReason": "The Hole Hawker is a master of rare and arcane artifacts, making them the ideal vendor for this item's unique properties.",
    "shippingDetail": "Ships via the Void Carrier Drone, which guarantees safe delivery through interdimensional turbulence.",
    "usage": {
      "activation": "Instantaneous action to absorb damage or as a bonus action to expel absorbed energy.",
      "duration": "1 minute for Dimensional Anchor; lasts until expended for Energy Absorption.",
      "endsWhen": "The effect ends when the duration expires, an attacker enters/leaves the area (for Dimensional Anchor), or the absorbed energy is expelled (for Energy Absorption).",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The price reflects the item's rare materials and ancient crafting techniques required for its creation.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T02:11:28.000300+00:00",
    "aiReviewedAt": "2026-07-25T02:11:28.000300+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_hollow_maker_void_prism": {
    "id": "doughnut_hole_item_hollow_maker_void_prism",
    "name": "The Hollow Maker's Void Prism - Prototype Gamma",
    "description": "The Hollow Maker's Void Prism - Prototype Gamma is a deceptively simple prism, its body crafted from solidified shadow. It pulses with cold, unsettling light, casting eerie reflections that hint at its potential to unravel reality itself. This dangerous tool can fire concentrated beams of void energy, dealing devastating damage and causing nearby targets to experience minor visual and auditory hallucinations, as if the fabric of space-time is warping around them.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Void Beam",
      "Reality Distortion"
    ],
    "vendor": "center_seller",
    "shippedBy": "Black Hole Transport Vessel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Void Beam",
        "rules": "Activate as a bonus action. Fires a concentrated beam of void energy at one target within 60 feet, dealing 1d8 + 2 force damage per level (maximum 5d8). The target must succeed on a DC 15 Dexterity saving throw or be pushed back 10 feet and take an additional 3d6 force damage. This effect can be used once per short or long rest."
      },
      {
        "title": "Reality Distortion",
        "rules": "Activate as a bonus action. Causes minor visual and auditory hallucinations in all creatures within 30 feet for 1 minute, reducing their accuracy by 2 on attack rolls and saving throws. The duration can be ended early with a successful DC 15 Wisdom (Perception) check or if the user of this item is hit by an attack."
      }
    ],
    "levelRequirementReason": "This item requires basic control over void energy, making it accessible to lower-level characters who have shown interest in forbidden knowledge.",
    "vendorReason": "The center seller deals in a wide array of items, including those that are considered too dangerous for regular sale. The Hollow Maker's Void Prism is no exception, as it requires special handling and expertise.",
    "shippingDetail": "Delivery via the Black Hole Transport Vessel ensures secure and timely transport, but due to its exotic nature, it can only be shipped once per month.",
    "usage": {
      "activation": "Bonus action for Void Beam; bonus action for Reality Distortion.",
      "duration": "Instantaneous effect with Void Beam; 1 minute duration with Reality Distortion.",
      "endsWhen": "The effect of Void Beam ends when the target successfully saves or after 1d4+2 rounds. The effect of Reality Distortion can be ended by a successful saving throw, being hit by an attack, or the user using it again.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price is set at 1000 XP to reflect its exotic materials and the risk involved in handling such a dangerous item.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T02:12:04.106472+00:00",
    "aiReviewedAt": "2026-07-25T02:12:04.106472+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_ironclad_desolation_born": {
    "id": "warhammer_item_ironclad_desolation_born",
    "name": "Ironclad Desolation Born’s Skull Fragment",
    "description": "A splintered fragment from a colossal skull, Ironclad Desolation Born’s Skull Fragment radiates an unsettling calm, promising resilience against chaotic forces and bolstering defensive capabilities — but only for those who embrace destruction. Crafted in the heart of a crumbling empire, this relic whispers of ancient battles fought and lost, its very essence pulsing with the memory of fallen warriors. It grants the wielder a fortified shield against chaos, reflecting attacks that seek to shatter the spirit.",
    "category": "equipment",
    "price": 12000,
    "icon": "💀",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Fortified Shield",
      "Reflective Resilience"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Imperial Courier Drone",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Fortified Shield",
        "rules": "Activates as a bonus action. The wielder gains a +30 bonus to AC against chaotic attacks. This effect lasts until the end of their next turn. If they take any damage from a chaotic source, this effect is expended."
      },
      {
        "title": "Reflective Resilience",
        "rules": "Passive effect that grants temporary resistance to fear effects. The wearer has advantage on saving throws against being frightened. This effect persists until the start of their next turn after taking damage from a chaotic source or losing concentration."
      }
    ],
    "levelRequirementReason": "Only for those who have proven their mettle in the harshest battles, this relic demands a high level to wield its power responsibly.",
    "vendorReason": "The Imperial Armory curates only the most potent and historically significant artifacts to be used by heroes of the realm.",
    "shippingDetail": "Delivered swiftly, but requires a secure location upon arrival due to its volatile nature.",
    "usage": {
      "activation": "Bonus action to activate Fortified Shield; passive effect for Reflective Resilience.",
      "duration": "Fortified Shield lasts until the end of their next turn; Reflective Resilience persists until the start of their next turn after taking chaotic damage or losing concentration.",
      "endsWhen": "Exhausted upon taking chaotic damage or lost concentration. Fortified Shield is also expended if the wielder takes any damage from a chaotic source.",
      "charges": "Unlimited, regenerates at dawn."
    },
    "priceReason": "The price reflects its legendary rarity and the immense power it holds, suitable for only the most seasoned heroes.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:12:18.705440+00:00",
    "aiReviewedAt": "2026-07-25T02:12:18.705440+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_chaos_dealer_mk_9_skull_whisperer": {
    "id": "warhammer_item_chaos_dealer_mk_9_skull_whisperer",
    "name": "Chaos Dealer Mk.9 Skull Whisperer’s Resonance Core",
    "description": "This pulsating skull core hums with the raw energy of a thousand fragmented realities, allowing the wielder to briefly perceive and manipulate chaotic probabilities. Handle with extreme caution - prolonged exposure risks dissolving your sanity.",
    "category": "curiosities",
    "price": 8000,
    "icon": "🌀",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Chance to trigger a random chaotic effect (positive or negative)",
      "Increase critical hit chance by 20%",
      "Allows temporary manipulation of enemy movement",
      "Brief glimpse into possible future outcomes"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Night Serpent Delivery",
    "levelRequirement": 25
  },
  "warhammer_item_fate_forge_obsidian_skull_of_echoes": {
    "id": "warhammer_item_fate_forge_obsidian_skull_of_echoes",
    "name": "Fate Forge Obsidian Skull of Echoes - Variant VII",
    "description": "The Fate Forge Obsidian Skull of Echoes, a dark and intricate relic forged from the very fabric of forgotten timelines, whispers the secrets of alternate realities into the ears of those who hold it. Its cold obsidian surface shimmers with the fractured light of countless futures, offering glimpses of destinies yet to unfold or already passed. A dangerous tool for the unwary, it grants fleeting insights into prophecies and the power to resist fate’s pull—but at a cost: confronting its echoes can unravel one's true path.",
    "category": "equipment",
    "price": 5500,
    "icon": "🔮",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "delivery_only",
    "effects": [
      "Prophetic Insight",
      "Fate Resistance"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Fate Weaver’s Cart",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Prophetic Insight",
        "rules": "As an action, you may activate the skull to gain one insight into a future event or forgotten prophecy. This effect is instantaneous and can be used once per short rest."
      },
      {
        "title": "Fate Resistance",
        "rules": "While holding the skull, you have advantage on saving throws against effects that would alter your destiny or manipulate time. This benefit lasts for 1 hour, but it ends early if you willingly discard the skull."
      }
    ],
    "levelRequirementReason": "The item's power and complexity necessitate a high level to wield effectively.",
    "vendorReason": "Fate Forge specializes in relics that interact with time and destiny, making the Obsidian Skull of Echoes an appropriate addition to their inventory.",
    "shippingDetail": "Ships via the Fate Weaver’s Cart, known for its timely and reliable deliveries within the realm.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous or 1 hour (at your discretion)",
      "endsWhen": "Voluntarily discarded or used up in a short rest",
      "charges": "Unlimited, but only one insight per short rest"
    },
    "priceReason": "The item's unique effects and rarity justify this price point.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-25T02:12:52.312415+00:00",
    "aiReviewedAt": "2026-07-25T02:12:52.312415+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_bonecrusher-of-broken-regiments": {
    "id": "warhammer_item_bonecrusher-of-broken-regiments",
    "name": "Bonecrusher of Broken Regiments",
    "description": "The Bonecrusher of Broken Regiments is a colossal warhammer, its surface etched with the petrified bones of countless legionaries who perished in battle. It hums with the spirit-crushing power of ancient legions, and when wielded, it commands nearby allies to fight with renewed vigor while casting an aura that weakens foes' resolve. Its very touch can turn the tide of combat, as it grants the user a chilling command over lesser combatants and saps their morale.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Bone Command",
      "Spirit Sapping"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "winged-beast",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Bone Command",
        "rules": "As an action, you can issue a command to nearby allies within 30 feet. These allies gain advantage on their next attack roll or saving throw against fear effects before the end of your next turn. The effect has a limited use per short rest."
      },
      {
        "title": "Spirit Sapping",
        "rules": "The Bonecrusher grants you a chilling aura within 30 feet that reduces enemy morale, increasing the chance of critical hits by +2d4 against targets within this range. This aura lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The Bonecrusher's ancient power demands a seasoned warrior to wield it effectively.",
    "vendorReason": "The imperial armory specializes in rare and potent weapons forged from the bones of fallen heroes.",
    "shippingDetail": "Delivered by swift winged beasts, ensuring the weapon arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Bone Command; lasts until the end of your next turn for Spirit Sapping",
      "endsWhen": "The effect ends when you finish a short rest or are incapacitated.",
      "charges": "Unlimited, but only one command can be issued per short rest."
    },
    "priceReason": "Balanced to reflect the weapon's ancient power and rarity, yet not overpriced for its intended use level.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T02:13:06.912423+00:00",
    "aiReviewedAt": "2026-07-25T02:13:06.912423+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item-rune-master-of-desolation": {
    "id": "warhammer_item-rune-master-of-desolation",
    "name": "Rune Master of Desolation",
    "description": "A dark, runic armor crafted from the remains of a shattered warlord’s throne. It grants formidable protection against physical attacks and channels potent runes of decay, inflicting grievous wounds upon your enemies.",
    "category": "equipment",
    "price": 9500,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases physical defense by 40%",
      "deals minor necrotic damage with each attack",
      "chance to inflict 'Wound' on hit (reduces healing)",
      "slows enemy movement speed"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "mechanical-drone",
    "levelRequirement": 28
  },
  "warhammer_item-fate-weaver-chronal-scribe": {
    "id": "warhammer_item-fate-weaver-chronal-scribe",
    "name": "Fate Weaver Chronal Scribe",
    "description": "The Fate Weaver Chronal Scribe is a macabre device, a fusion of clockwork and bone that whispers of time's fragile nature. Crafted from the remains of ancient battles and powered by fate itself, it allows its wielder to bend reality to their will, subtly altering the flow of combat. Each use comes at a heavy cost: not only does it sap the user’s energy, but it also leaves behind lingering distortions that ripple through time.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 8,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Temporal Manipulation",
      "Time Distortion"
    ],
    "vendor": "fate_forge",
    "shippedBy": "dimensional-portal",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Manipulation",
        "rules": "As a bonus action, the wielder can rewind time around themselves for 3 seconds. During this time, they and their allies gain advantage on attack rolls, but all enemies within a 10-foot radius have disadvantage on attack rolls against them. The effect ends when the user takes damage or if the duration expires."
      },
      {
        "title": "Time Distortion",
        "rules": "The device causes minor temporal distortions that reduce enemy accuracy by 2 until their next turn, as a reaction to an attack roll. This effect can be used once per short rest and has no save DC or saving throw."
      }
    ],
    "levelRequirementReason": "The device is too powerful for lower levels; only experienced warriors with the discipline to wield such power are allowed.",
    "vendorReason": "Fate Forge specializes in crafting and selling items that manipulate time and fate, making it a natural home for this Chronal Scribe.",
    "shippingDetail": "The device is shipped through the dimensional portal, ensuring its safe arrival but also increasing the shipping time by one day.",
    "usage": {
      "activation": "Bonus action to rewind time; reaction to enemy attack for time distortion.",
      "duration": "3 seconds or until interrupted.",
      "endsWhen": "User takes damage or duration expires.",
      "charges": "Unlimited, but limited to once per short rest."
    },
    "priceReason": "The item's rarity and powerful effects justify its price of 1000 XP.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-25T02:13:14.069024+00:00",
    "aiReviewedAt": "2026-07-25T02:13:14.069024+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_stonecutter_forger": {
    "id": "middle_earth_item_the_stonecutter_forger",
    "name": "The Stonecutter Forger's Axe Head",
    "description": "The Stonecutter Forger's Axe Head is a dwarven-forged marvel, crafted from petrified wood imbued with ancient runes that whisper of forgotten mines and lost treasures. This axe head resonates with an earthy hum when swung, bolstering the wielder’s strength and granting temporary resistance to earth-based attacks. Its very touch seems to strengthen the hand of its bearer, making it a formidable weapon against stone-forged orcs and goblins in the depths of Middle-earth.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 47,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Earth Resistance",
      "Strengthening Strike"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "Dwarven cart",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Earth Resistance",
        "rules": "When you are hit by an earth-based attack, gain resistance to that damage type until the start of your next turn. This effect can only occur once per short or long rest."
      },
      {
        "title": "Strengthening Strike",
        "rules": "As a bonus action, you may swing the axe head to emit a tremor in the ground around you, forcing all creatures within 10 feet to make a DC 15 Strength saving throw. On a failed save, they are knocked prone."
      }
    ],
    "levelRequirementReason": "The intricate runes and petrified wood require significant strength and experience to wield effectively.",
    "vendorReason": "Only the skilled forges of the Dwarves can craft such a weapon, imbued with both their craftsmanship and ancient earth magic.",
    "shippingDetail": "Ships via a specially chartered dwarven cart, delivered within one week from the forge.",
    "usage": {
      "activation": "Bonus action or as part of an attack action",
      "duration": "Instantaneous for Earth Resistance; Concentration (up to 1 minute) for Stun effect",
      "endsWhen": "The duration ends at the start of your next turn, or when you are no longer hit by earth-based attacks.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from rare materials and infused with powerful runes, this axe head is a high-demand item among warriors of Middle-earth.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T02:13:23.347398+00:00",
    "aiReviewedAt": "2026-07-25T02:13:23.347398+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_shadowed_blade_of_mournful_echoes": {
    "id": "middle_earth_item_the_shadowed_blade_of_mournful_echoes",
    "name": "The Shadowed Blade of Mournful Echoes",
    "description": "The Shadowed Blade of Mournful Echoes is a wickedly curved obsidian blade forged from a single shard taken directly from the Black Gate. Its whispers resonate with the sorrow of those who have met their ends there, instilling fear in foes and briefly blurring vision for anyone who dares confront it. This weapon is perfect for assassins seeking to remain unseen or explorers delving into ancient tombs where shadows linger.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔪",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "fear",
      "blur"
    ],
    "vendor": "elven_market",
    "shippedBy": "swift hawk courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Frighten",
        "rules": "When you hit a creature with this blade as part of an attack, it must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. The effect ends if the target takes any damage before the end of its next turn."
      },
      {
        "title": "Blur Vision",
        "rules": "For 1 round after you hit with this weapon, creatures within 30 feet that see you are blinded until the start of your next turn. A successful DC 15 Wisdom saving throw ends the effect early."
      }
    ],
    "levelRequirementReason": "This blade is crafted to be accessible for all who seek its power, making it a versatile tool for adventurers of any level.",
    "vendorReason": "The elven market caters to all adventurers, offering rare and powerful items that can aid in their quests.",
    "shippingDetail": "The blade is shipped via the swift hawk courier, ensuring it arrives swiftly and intact.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous for each effect",
      "endsWhen": "Target saves successfully or takes damage; ends if the wielder attacks again",
      "charges": "Unlimited uses"
    },
    "priceReason": "The blade's rarity and unique properties, combined with its utility in combat situations, justify this fair value.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T02:13:21.484346+00:00",
    "aiReviewedAt": "2026-07-25T02:13:21.484346+00:00",
    "aiReviewVersion": 1
  }
};
