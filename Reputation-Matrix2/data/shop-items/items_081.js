// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_081 = {
  "grand_country_item_mk.97_falling_ladder_bearer": {
    "id": "grand_country_item_mk.97_falling_ladder_bearer",
    "name": "Mk.97 Falling Ladder Bearer",
    "description": "The Mk.97 Falling Ladder Bearer is a masterwork of craftsmanship, its polished granite frame etched with intricate runes that whisper tales of descent and survival. Crafted by the ancient guilds of Vertical Vendor, this ladder-bearer ensures safe passage through treacherous falls, allowing a single user to control their vertical motion with precision. The descending metal gleams under moonlight, reflecting shards of light as it gently carries you down into the shadows below.",
    "category": "equipment",
    "price": 24000,
    "icon": "⬇️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Controlled Descent",
      "Fall Damage Reduction"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Airship - Premium",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Controlled Descent",
        "rules": "Activates as a bonus action. The user can control their vertical motion during descent, moving at half speed but with perfect stability. This effect lasts until the end of your next turn or you choose to discontinue it."
      },
      {
        "title": "Fall Damage Reduction",
        "rules": "Reduces fall damage by 75%. This effect activates automatically when you begin a fall and persists for the duration of the fall, expiring upon landing safely or if you are otherwise no longer falling."
      }
    ],
    "levelRequirementReason": "This ladder-bearer is designed to be accessible even to adventurers just starting their journey.",
    "vendorReason": "Vertical Vendor specializes in equipment for precarious environments, making this ladder-bearer a staple of their inventory.",
    "shippingDetail": "Ships via Airship - Premium, ensuring safe and swift delivery to adventurers across the land.",
    "usage": {
      "activation": "Bonus action (Controlled Descent), automatically activates (Fall Damage Reduction)",
      "duration": "Until end of next turn or user chooses to discontinue (Controlled Descent); persists during fall but expires upon landing safely (Fall Damage Reduction)",
      "endsWhen": "Ends at the start of your next turn, or upon landing safely in case of Fall Damage Reduction; Controlled Descent can be discontinued by the user.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure safe adventuring without over-rewarding players.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-25T03:05:05.073451+00:00",
    "aiReviewedAt": "2026-07-25T03:05:05.073451+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_obsidian_heralds_whispers": {
    "id": "almost_edge_item_obsidian_heralds_whispers",
    "name": "Obsidian Herald's Whispers",
    "description": "The jagged obsidian fragments of Obsidian Herald's Whispers hum with a spectral resonance. They are said to be remnants of ancient heralds who perished beyond the edge, their voices now trapped in these shards. Holding them allows you to briefly perceive echoes of past events, gaining fleeting insights into events that never quite concluded. The whispers may also trigger unsettling visions of the void, but with each use comes a lingering sense of doubt and uncertainty.",
    "category": "curiosities",
    "price": 1300,
    "icon": "🔮",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Glimpse Past Events",
      "Unsettling Visions"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Void Delivery Drone",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Glimpse Past Events",
        "rules": "As an action, you gain temporary insight into a past event by holding the fragments. This effect lasts for 30 seconds and provides advantage on one Intelligence (History) or Investigation check of your choice. The use ends if you take any damage."
      },
      {
        "title": "Unsettling Visions",
        "rules": "Once per long rest, as an action, you can trigger a brief vision of the void which lasts for 1 minute. During this time, there is a 20% chance that one creature within 30 feet must succeed on a DC 14 Wisdom saving throw or be affected by the 'Doubt' status until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level to handle the spectral energy contained within.",
    "vendorReason": "The void merchant deals in all manner of relics from beyond, and these fragments are a piece of that lore.",
    "shippingDetail": "Ships via the Void Delivery Drone, which can only deliver within the night sky.",
    "usage": {
      "activation": "Action or Reaction (to gain insight), Action (to trigger vision)",
      "duration": "30 seconds for 'Glimpse Past Events', 1 minute for 'Unsettling Visions'",
      "endsWhen": "On damage, after the duration ends",
      "charges": "Recharge at dawn"
    },
    "priceReason": "Balanced price reflects its spectral energy and lore, suitable for a unique but not overpowered item.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T03:04:52.345593+00:00",
    "aiReviewedAt": "2026-07-25T03:04:52.345593+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_threshold_whispers_of_forgotten": {
    "id": "almost_edge_item_threshold_whispers_of_forgotten",
    "name": "Threshold Whispers of Forgotten",
    "description": "The Threshold Whispers of Forgotten are shimmering, twilight-hued orbs that feel as cold as the void from which they were forged. Crafted by ancient souls who perished at the edge of existence, these relics contain the mournful echoes of lost memories. Listening closely reveals fragments of forgotten lore and unlocks fleeting insights into the nature of time and fate, but only the most steadfast can decipher their true meaning.",
    "category": "consumables",
    "price": 5000,
    "icon": "👂",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Unlock Fugitive Fragments",
      "Void Shield"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Unlock Fugitive Fragments",
        "rules": "The listener gains a number of temporary hit points equal to your Intelligence modifier (minimum 1). Additionally, there is a 25% chance that the listener can unlock one fragment of lost knowledge. This effect lasts for 10 minutes."
      },
      {
        "title": "Void Shield",
        "rules": "For the duration of 1 hour after activation, you have resistance to damage from void-based attacks and spells. This effect is immune to being ended early by any means except a successful DC 15 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "Requires significant mental fortitude and experience to withstand the whispering echoes of forgotten souls.",
    "vendorReason": "The edge wanderers are the only ones who have traversed the threshold of the void, making them custodians of such artifacts.",
    "shippingDetail": "Ships via interdimensional courier with a one-week delivery window.",
    "usage": {
      "activation": "Standard action to listen closely and intently for 1 minute.",
      "duration": "Instantaneous unlock; Void Shield lasts 1 hour.",
      "endsWhen": "The effect ends if you fall unconscious or the duration expires.",
      "charges": "Unlimited, as long as your Intelligence is at least equal to the threshold."
    },
    "priceReason": "Balanced for a rare item that provides both healing and resistance against void-based threats.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:05:20.419751+00:00",
    "aiReviewedAt": "2026-07-25T03:05:20.419751+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_mk20_threshold_whispers": {
    "id": "almost_edge_item_mk20_threshold_whispers",
    "name": "Mk.20 Threshold Whispers",
    "description": "Mk.20 Threshold Whispers are intricately crafted miniature obsidian horns forged in the heart of a forgotten forge, where the raw energy of thresholds is captured. When activated, they emit an arcane pulse that momentarily distorts reality, creating a small void rift and damaging nearby foes with chaotic force. These horns also briefly enhance your speed and grant you a chance to disorient an enemy, making them both a potent offensive tool and a masterful means of evasion.",
    "category": "equipment",
    "price": 24000,
    "icon": "🔊",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Disorient",
      "Speed Boost"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Dimensional Delivery Swarm",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disorient",
        "rules": "When activated as a bonus action within 30 feet of an opponent, the Mk.20 Threshold Whispers emit a pulse that has a 50% chance to inflict 'Disorientation' on one target for 1 minute. The DC to save against this effect is 16."
      },
      {
        "title": "Speed Boost",
        "rules": "Activating the horns also grants you a +2 bonus to your movement speed for 30 seconds, ending when you move more than 5 feet or take an action that requires concentration. This does not stack with other speed bonuses."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible early on, allowing players to experiment and learn without a high-level gate.",
    "vendorReason": "The Liminal Trader specializes in esoteric and ancient items from the planes of existence, making these horns an ideal addition to their inventory.",
    "shippingDetail": "Due to the nature of the item's arcane properties, it is shipped via the Dimensional Delivery Swarm. Expect a delivery delay of up to 1 week due to dimensional turbulence.",
    "usage": {
      "activation": "Bonus action within 30 feet of an opponent or any location.",
      "duration": "Instantaneous and duration-based; Disorient lasts for 1 minute, Speed Boost lasts for 30 seconds.",
      "endsWhen": "The effect ends when you move more than 5 feet or take an action that requires concentration. Disorientation can also be ended by a successful save against the DC 16 check.",
      "charges": "Unlimited uses; charges do not apply."
    },
    "priceReason": "The price is set at 1000 XP to reflect its balanced design and early-game utility, ensuring it remains a viable choice for players without being overpowered.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T03:05:31.791459+00:00",
    "aiReviewedAt": "2026-07-25T03:05:31.791459+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_chronometric_block_singer": {
    "id": "connectopia_item_chronometric_block_singer",
    "name": "The Chronometric Block Singer's Ballad",
    "description": "The Chronometric Block Singer's Ballad is a blocky instrument forged from solidified chronolith, its surface etched with a pioneer’s lament. When played, it emits a haunting melody that briefly slows time around you, giving you just enough extra moments to dodge impending danger or secure your prize. It also restores a small amount of stamina, helping you power through strained situations. Crafted by the hands of a legendary clockmaker, this relic is perfect for those who need a fleeting edge in their most frantic moments.",
    "category": "consumables",
    "price": 87000,
    "icon": "⏱️",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Slows time around user",
      "Restores stamina"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Swift Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Resonance",
        "rules": "When the instrument is played as an action, it emits a melody that slows time for you and all creatures within 10 feet. This effect lasts for 30 seconds. The duration ends when the song concludes or if you are incapacitated."
      },
      {
        "title": "Stamina Restore",
        "rules": "Upon playing the instrument as an action, you regain a number of hit dice equal to your level plus your Charisma modifier (minimum of 1). This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for those who have the skill and presence to wield its power effectively in high-stakes situations.",
    "vendorReason": "Craft Corner specializes in rare and unique instruments, making it an obvious choice for such a one-of-a-kind relic.",
    "shippingDetail": "Ships via Swift Courier, ensuring the instrument arrives safely to your doorstep with minimal delay.",
    "usage": {
      "activation": "played as an action",
      "duration": "30 seconds or until incapacitated",
      "endsWhen": "song concludes or you are incapacitated",
      "charges": "once per long rest"
    },
    "priceReason": "Balanced at 1000 XP, this item reflects its unique utility and the expertise required to craft such a powerful instrument.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T03:05:10.548509+00:00",
    "aiReviewedAt": "2026-07-25T03:05:10.548509+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_grim_block_blueprint_engineer": {
    "id": "connectopia_item_grim_block_blueprint_engineer",
    "name": "Grim Engineer’s Blocky Blueprint Recitation",
    "description": "A chilling, blocky blueprint etched into a piece of solidified obsidian. This relic whispers arcane instructions from long-dead engineers who mastered block construction in Connectopia’s ancient past. Upon activation, it grants fleeting insight into the structural integrity and hidden pathways within a 10-meter radius, aiding both defense and exploration. The user may hear unsettling visions that cloud judgment but offer invaluable blueprints for constructing advanced defenses or uncovering forgotten secrets.",
    "category": "curiosities",
    "price": 5000,
    "icon": "📜",
    "stock": 23,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Audiitory Insight",
      "Structural Decipherment"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "shipping_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Audiitory Insight",
        "rules": "On activation, the user gains a +2 bonus to their next saving throw against illusions and gain temporary insight into structural weaknesses within a 10-meter radius. This effect lasts for 1 minute."
      },
      {
        "title": "Structural Decipherment",
        "rules": "The item provides a +1 bonus on any attempt to decipher complex blueprints or construct block structures, lasting until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This relic is accessible to all levels as it aids in basic construction and defense.",
    "vendorReason": "The Pioneer Post frequently travels the frontier, often encountering engineers in need of ancient blueprints for their projects.",
    "shippingDetail": "Shipped via autonomous drones, ensuring quick delivery to any location within Connectopia’s frontier.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until the end of your next long rest",
      "endsWhen": "The effect ends when you are incapacitated or upon the end of its duration.",
      "charges": "Unlimited, but only one bonus to a saving throw and one bonus on an attempt to decipher blueprints can be used per short or long rest."
    },
    "priceReason": "The item’s rarity and utility justify its moderate price of 1000 XP.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:05:23.574341+00:00",
    "aiReviewedAt": "2026-07-25T03:05:23.574341+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_blocky_blueprints_of_frontier_architect": {
    "id": "connectopia_item_blocky_blueprints_of_frontier_architect",
    "name": "Blocky Blueprints of Frontier Architect's Dispatch",
    "description": "The Blocky Blueprints of Frontier Architect's Dispatch are a set of intricately detailed blueprints crafted from solidified block material. Each blueprint meticulously outlines the construction plans for key buildings within Connectopia’s frontier settlements, including robust fortifications and bustling workshops. Holding this dispatch grants you a small but invaluable bonus to your building speed, allowing structures to rise faster than ever before. Additionally, these blueprints reduce the cost of constructing block-based edifices, making it easier to expand and improve your settlements.",
    "category": "equipment",
    "price": 1300,
    "icon": "🧱",
    "stock": 47,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Increases building speed",
      "Reduces construction costs"
    ],
    "vendor": "block_smith",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Building Speed",
        "rules": "While holding this dispatch, your building speed is increased by 10%. This effect lasts until you finish constructing a structure. There are no limits to the number of times you can use this ability."
      },
      {
        "title": "Reduced Construction Costs",
        "rules": "When constructing block-based structures, the cost required for materials and labor is reduced by 25%, as detailed in the blueprints. This effect applies only once per day."
      }
    ],
    "levelRequirementReason": "A basic understanding of construction techniques is necessary to appreciate the value of these blueprints.",
    "vendorReason": "As a master craftsman, Block Smith has access to rare and valuable tools like these blueprints.",
    "shippingDetail": "Shipped via reliable delivery drones, ensuring swift arrival within Connectopia's borders.",
    "usage": {
      "activation": "Passive effect while holding the dispatch",
      "duration": "Instantaneous; lasts until a structure is completed",
      "endsWhen": "Completion of a structure or loss of the dispatch",
      "charges": "Unlimited"
    },
    "priceReason": "The blueprints' rarity and utility justify their price, providing significant long-term benefits.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-25T03:05:28.683451+00:00",
    "aiReviewedAt": "2026-07-25T03:05:28.683451+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_spectral_abyss_weaver_7": {
    "id": "the_edge_item_spectral_abyss_weaver_7",
    "name": "The Spectral Abyss Weaver VII",
    "description": "The Spectral Abyss Weaver VII, a device forged from solidified twilight and bound by captured screams, hums with an otherworldly chill. When activated, it opens a fleeting portal to the abyss, granting its wielder heightened perception and spectral camouflage but leaving them vulnerable to unsettling visions and fear effects. This delicate artifact, crafted by the Abyss Traders, should be used only in dire need, for its power is as dangerous as it is potent.",
    "category": "equipment",
    "price": 88000,
    "icon": "🌌",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Heightened Perception",
      "Spectral Camouflage"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Dimensional Slipstream Courier",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Heightened Perception",
        "rules": "Upon activation, the user gains a +30 bonus to Wisdom (Perception) checks for 60 seconds. The effect ends if the user is hit by an attack or targeted by a spell with a save DC of 15 or higher."
      },
      {
        "title": "Spectral Camouflage",
        "rules": "The device grants the user advantage on Stealth checks within 30 feet for 60 seconds. This effect ends if the user is hit by an attack, targeted by a spell with a save DC of 15 or higher, or enters an area of bright light."
      }
    ],
    "levelRequirementReason": "The device's power and complexity require significant magical aptitude.",
    "vendorReason": "Only the Abyss Traders have the means to craft such a dangerous yet invaluable item.",
    "shippingDetail": "Ships via Dimensional Slipstream Courier, with expedited delivery and a special tracking feature for magical artifacts.",
    "usage": {
      "activation": "Action",
      "duration": "60 seconds",
      "endsWhen": "Hit by an attack or targeted by a spell with a save DC of 15 or higher",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "The item's rarity and the specialized skills required to craft it justify its moderate price.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T03:06:29.409935+00:00",
    "aiReviewedAt": "2026-07-25T03:06:29.409935+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_crimson_abyss_trace_22": {
    "id": "the_edge_item_crimson_abyss_trace_22",
    "name": "Crimson Abyss Trace 22 - The Lament of Dust",
    "description": "The Lament of Dust, a solidified fragment of a star fallen from the void, glows ominously with an unsettling crimson light. Its surface is etched with ancient runes that whisper tales of forgotten realities and lost souls. Consuming this trace briefly opens rifts to alternate timelines, allowing you to glimpse fleeting moments from parallel worlds—but at the cost of your own mental stability as the rifts threaten to tear apart your mind.",
    "category": "consumables",
    "price": 5000,
    "icon": "🔥",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Glimpse",
      "Mental Fracture"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Automated Drone Delivery System",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Glimpse",
        "rules": "When consumed, this trace opens a fleeting window to an alternate timeline for 10 seconds. During this time, you gain the ability to see events that have not yet occurred in your current reality. You can use this effect once per short or long rest."
      },
      {
        "title": "Mental Fracture",
        "rules": "There is a 25% chance (DC 14) that consuming this trace will cause you to suffer from a temporary mental instability for the duration of your next short or long rest. The instability reduces your Intelligence by 2 and Wisdom by 1, but grants you advantage on saving throws against being charmed."
      }
    ],
    "levelRequirementReason": "This trace is accessible to all adventurers who wish to explore the mysteries of alternate timelines.",
    "vendorReason": "Edge Outpost specializes in unique and rare artifacts from the cosmos, making it the perfect vendor for such a celestial relic.",
    "shippingDetail": "The Automated Drone Delivery System ensures swift and reliable delivery of this delicate item directly to your doorstep or local outpost.",
    "usage": {
      "activation": "Eaten as a consumable.",
      "duration": "Instantaneous, with a duration of 10 seconds when consumed.",
      "endsWhen": "The effect ends after 10 seconds or if you take any damage.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This trace is priced at 1000 XP, reflecting its rarity and the risk it poses to mental stability.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:06:13.953365+00:00",
    "aiReviewedAt": "2026-07-25T03:06:13.953365+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_cursed_abyss_observer_49": {
    "id": "the_edge_item_cursed_abyss_observer_49",
    "name": "The Cursed Abyss Observer - Model 49",
    "description": "The Cursed Abyss Observer - Model 49, a blackened metallic device adorned with cryptic symbols that whisper of forbidden knowledge, appears to endlessly scan its surroundings. Its eyes seem to follow you, and prolonged use induces a creeping paranoia as you find yourself compelled to peer into the void. Despite its unsettling nature, this relic grants passive vision in dark areas and increases your chance to reveal hidden enemies by 15%, but at a cost; it slowly erodes your sanity over time.",
    "category": "curiosities",
    "price": 1300,
    "icon": "👁️",
    "stock": 17,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Passive Vision",
      "Hidden Enemy Detection"
    ],
    "vendor": "final_shop",
    "shippedBy": "Shadow Delivery Service",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Passive Vision",
        "rules": "While this device is active, the user gains advantage on Perception checks to see in dark areas. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Hidden Enemy Detection",
        "rules": "There is a 15% chance per minute that you will notice hidden enemies within a 30-foot radius, which requires no action to activate and remains active as long as the device is in use. This effect ends if you are incapacitated or fall unconscious."
      }
    ],
    "levelRequirementReason": "This relic's dark magic and complex mechanics demand a certain level of experience and control.",
    "vendorReason": "Final Shop, known for its collection of arcane curiosities, would offer this rare relic to those who seek the unknown.",
    "shippingDetail": "The Shadow Delivery Service ensures that this delicate artifact arrives safely and incognito, delivered at night when the observer can be used without distraction.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Until the end of your next short or long rest",
      "endsWhen": "You are incapacitated or fall unconscious; ends immediately upon being destroyed or disintegrated",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its uncommon rarity and the dark magic required to craft such a device.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-25T03:06:01.311501+00:00",
    "aiReviewedAt": "2026-07-25T03:06:01.311501+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_the_gradient_bands_of_academy": {
    "id": "kivotos_item_the_gradient_bands_of_academy",
    "name": "The Gradient Bands of Academy",
    "description": "The Gradient Bands of Academy are a pair of sleek, iridescent bands forged from the ambition and data of countless scholars. They pulse softly with a gradient hue that seems to shift with the wearer's focus. When worn, these bands enhance concentration during academic tasks (+25% efficiency) and grant a +1 modifier on all Intelligence-based skill checks. However, prolonged use can lead to obsessive study habits, compelling the wearer to seek absolute perfection in their studies.",
    "category": "equipment",
    "price": 5000,
    "icon": "📚",
    "stock": 47,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Focus",
      "Skill Check Boost"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Focus",
        "rules": "The wearer gains a +25% increase to their academic work efficiency. This effect is passive and does not require any action."
      },
      {
        "title": "Skill Check Boost",
        "rules": "Once per short or long rest, the wearer can use an action to grant themselves a +1 bonus on one Intelligence-based skill check they make during that day. The effects of this boost do not stack with itself."
      }
    ],
    "levelRequirementReason": "These bands are designed for scholars and students at any level, providing them with tools to enhance their academic performance.",
    "vendorReason": "The student store stocks items specifically tailored to the needs of its young patrons.",
    "shippingDetail": "The bands are delivered swiftly by drone courier, ensuring they arrive in pristine condition and ready for use.",
    "usage": {
      "activation": "Passive and action-based as described",
      "duration": "Instantaneous or up to one short/long rest per day",
      "endsWhen": "Rest ends, or if the wearer removes them",
      "charges": "Unlimited charges"
    },
    "priceReason": "The price reflects the rare materials and intricate craftsmanship required for their creation.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:05:46.317218+00:00",
    "aiReviewedAt": "2026-07-25T03:05:46.317218+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_cursed_bearer_of_the_final_exam": {
    "id": "kivotos_item_cursed_bearer_of_the_final_exam",
    "name": "Cursed Bearer of the Final Exam",
    "description": "Forged in the crucible of a failed graduate’s despair, this wristband is rumored to contain fragments of every final exam ever administered within Academy City. Touching it grants a brief, unsettling glimpse into potential failure – offering terrifyingly accurate predictions of upcoming tests, but at the cost of crippling anxiety that can last for hours. The wearer's mind is flooded with past failures and future dread, making even simple tasks feel insurmountable.",
    "category": "equipment",
    "price": 24000,
    "icon": "💀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Probability Prediction",
      "Anxiety Amplification"
    ],
    "vendor": "club_supply",
    "shippedBy": "Night Delivery Bot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Probability Prediction",
        "rules": "When activated as a bonus action, the wearer gains a +2 bonus to Intelligence (Insight) checks made to predict upcoming tests. This effect lasts for 1 minute. The bonus is reduced by half if used more than once per week."
      },
      {
        "title": "Anxiety Amplification",
        "rules": "Activating the wristband causes the wearer's confidence in any task requiring an Intelligence (Investigation), Wisdom (Insight), or Charisma (Persuasion) check to drop by 50% until the end of their next short or long rest. This effect cannot be resisted."
      }
    ],
    "levelRequirementReason": "Even a novice can afford to learn from failure, though not without cost.",
    "vendorReason": "Club Supply often has oddities from students who seek to overcome their academic fears in any way possible.",
    "shippingDetail": "Delivered under the cover of darkness by the Night Delivery Bot, ensuring only those willing to brave the night receive this item.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute",
      "endsWhen": "The wearer's next short or long rest ends their anxiety and lost confidence.",
      "charges": "Unlimited"
    },
    "priceReason": "The item’s rarity and the psychological toll it inflicts make its price justified.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:06:17.975602+00:00",
    "aiReviewedAt": "2026-07-25T03:06:17.975602+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk95_graduate_bands_of_harmony": {
    "id": "kivotos_item_mk95_graduate_bands_of_harmony",
    "name": "Mk.95 Graduate Bands of Harmony",
    "description": "The Mk.95 Graduate Bands of Harmony are meticulously crafted from polished brass, each band etched with subtle graduation symbols that shimmer faintly in ambient light. These bands, produced by the Academy Armory's most dedicated artisans, are infused with harmonic resonance derived from successful graduation ceremonies. They emit a calming aura and enhance group cohesion, though prolonged use can lead to an unsettling synchronization among their wearers, making groups act almost as one entity.",
    "category": "equipment",
    "price": 1400000,
    "icon": "🎶",
    "stock": 5,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Group Cohesion",
      "Calming Aura"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Royal Airship Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Group Cohesion",
        "rules": "Whenever a group of creatures wearing the bands interacts within 30 feet of each other for at least 1 minute, they gain advantage on saving throws against being charmed or frightened. This effect ends if any member of the group moves more than 60 feet from another band wearer."
      },
      {
        "title": "Calming Aura",
        "rules": "All creatures within a 15-foot radius of the bands' wearers are immune to stress damage and gain advantage on saving throws against being frightened. This effect lasts for 1 hour, or until the bands are removed from their wearers."
      }
    ],
    "levelRequirementReason": "These bands are accessible to all students, as they serve a foundational role in teaching teamwork and harmony.",
    "vendorReason": "The Academy Armory specializes in crafting items that support its graduates' success after graduation.",
    "shippingDetail": "Ships via the Royal Airship Courier, ensuring swift delivery straight to your door.",
    "usage": {
      "activation": "Passive effect until removed or worn off by a remove curse spell.",
      "duration": "Until removed or a save is failed against an effect that ends this benefit.",
      "endsWhen": "If a creature moves more than 60 feet from another band wearer, the group cohesion benefit is lost for them.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the balance between the item's utility and its limited duration effect.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-25T03:06:40.734441+00:00",
    "aiReviewedAt": "2026-07-25T03:06:40.734441+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_crimson_guardian_billet_of_flux": {
    "id": "teyvat_item_crimson_guardian_billet_of_flux",
    "name": "The Crimson Guardian’s Billet of Flux",
    "description": "The Crimson Guardian’s Billet of Flux is a hydrokinetic device forged from the heartwood of the Liyue mangrove and imbued with the essence of the harbor's elemental currents. When struck, it releases a concentrated pulse that momentarily disrupts elemental defenses and grants its wielder enhanced resilience. This relic of the Crimson Tide faction channels raw energy to bolster your defensive prowess and heal minor wounds upon critical strikes.",
    "category": "equipment",
    "price": 5000,
    "icon": "💧",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Disrupts Elemental Shields",
      "Heals Minor Wounds on Critical"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Cartwright's Delivery Services",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Disrupts Elemental Shields",
        "rules": "When the Billet is struck, it releases a pulse that has a 30% chance to disrupt an enemy's active elemental shield. This effect lasts for 1 round and ends when the target makes a saving throw."
      },
      {
        "title": "Heals Minor Wounds on Critical",
        "rules": "Upon landing a critical hit, this item restores 1d6 + your Charisma modifier hit points to you. This effect can only trigger once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Billet's raw hydro energy demands a practitioner of at least 25th level to wield it effectively.",
    "vendorReason": "Liyue Harbor merchants are well-acquainted with the relics of their faction and can provide this powerful device.",
    "shippingDetail": "Ships via Cartwright’s Express Couriers, ensuring swift delivery to your doorstep within a week.",
    "usage": {
      "activation": "Melee strike action",
      "duration": "Instantaneous effect; lasts until the end of the target's next turn if it makes a saving throw.",
      "endsWhen": "The target makes a successful saving throw or when the item runs out of uses.",
      "charges": "Uses 1 from a pool of 2, recharged after a long rest."
    },
    "priceReason": "The billet's rarity and unique elemental properties justify its moderate price in experience points.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T03:06:35.358390+00:00",
    "aiReviewedAt": "2026-07-25T03:06:35.358390+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_wicked_guardian_billet_of_tempest": {
    "id": "teyvat_item_wicked_guardian_billet_of_tempest",
    "name": "The Wicked Guardian’s Billet of Tempest",
    "description": "The Wicked Guardian’s Billet of Tempest was forged amidst a tempest near Mondstadt, its iron core pulsing with anemo energy. When struck, it unleashes a localized whirlwind that pushes back foes and briefly silences their elemental abilities, leaving them disoriented in the storm's wake. Crafted by Skyborn Vigilants for those who dare to face the elements head-on, this billet is both weapon and talisman of the tempest.",
    "category": "equipment",
    "price": 1300,
    "icon": "🌪️",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Whirlwind Pushback",
      "Silence Elemental Abilities"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Windrider Express",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Whirlwind Pushback",
        "rules": "Upon impact against an enemy, a localized whirlwind erupts, pushing back all creatures within a 10-foot radius. This effect has a range of 20 feet and lasts for 1 round. The DC to resist this effect is 15."
      },
      {
        "title": "Silence Elemental Abilities",
        "rules": "For 2 seconds after impact, any enemy struck by the billet loses their ability to use elemental abilities as a reaction or bonus action. This effect has no save and can only be used once per short rest."
      }
    ],
    "levelRequirementReason": "Requires high proficiency with anemo-based weapons to wield its full power.",
    "vendorReason": "The Skyborn Vigilants favor this billet and sell it exclusively at the market in Mondstadt.",
    "shippingDetail": "Ships directly from Mondstadt, arriving within a week of purchase.",
    "usage": {
      "activation": "On hit with an melee weapon",
      "duration": "Instantaneous; lasts for 1 round after impact",
      "endsWhen": "Once per short rest due to its limited use",
      "charges": "Unlimited"
    },
    "priceReason": "The billet's unique crafting process and exclusive vendor contribute to its high price.",
    "priceOriginal": 950,
    "priceReviewedAt": "2026-07-25T15:17:30.525084+00:00",
    "aiReviewedAt": "2026-07-25T15:17:30.525084+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_hydro_billet_of_elemental_resonance_73": {
    "id": "teyvat_item_hydro_billet_of_elemental_resonance_73",
    "name": "Hydro Billet of Elemental Resonance - 73",
    "description": "The Hydro Billet of Elemental Resonance - 73 is a compact, yet powerful, billet forged from the heart of Inazuma's own hydro veins. Crafted by artisans who have studied the Seven Nations' combined water flows for centuries, it channels the very essence of the region's elemental prowess. This billet amplifies your water-based abilities, allowing you to unleash devastating attacks and create small waves that damage nearby foes with every strike.",
    "category": "consumables",
    "price": 28000,
    "icon": "🌊",
    "stock": 8,
    "rarity": "epic",
    "stockType": "delivery_only",
    "effects": [
      "Enhanced Water Attacks",
      "Elemental Resonance"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Sea Serpent Courier",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Enhanced Water Attacks",
        "rules": "When used in combat, this billet grants a +30% increase to the wielder's water-based attack damage. Additionally, there is a 25% chance of creating a small wave upon hitting an enemy, dealing an additional 1d6 water damage to all enemies within 5 feet."
      },
      {
        "title": "Elemental Resonance",
        "rules": "For 10 seconds after activation, the wielder gains resistance to all elemental effects. This effect can only be used once every long rest and has no cooldown between uses."
      }
    ],
    "levelRequirementReason": "This billet is crafted for those who have mastered their water-based abilities and require a tool that amplifies their prowess.",
    "vendorReason": "Inazuma Imports specializes in items forged from the heart of Inazuma, ensuring this billet's authenticity and power.",
    "shippingDetail": "Ships via the Sea Serpent Courier, known for its speed and reliability.",
    "usage": {
      "activation": "Used as a bonus action to amplify water-based attacks and create small waves.",
      "duration": "10 seconds per activation.",
      "endsWhen": "The effect ends when you are incapacitated or the billet is destroyed.",
      "charges": "Unlimited uses, but can only be activated once every long rest."
    },
    "priceReason": "This billet's price reflects its unique crafting process and the power it provides to those who command water.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-25T03:07:18.353319+00:00",
    "aiReviewedAt": "2026-07-25T03:07:18.353319+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_shadowborn_ring_of_gondor": {
    "id": "middle_earth_item_the_shadowborn_ring_of_gondor",
    "name": "The Shadowborn Ring of Gondor",
    "description": "The Shadowborn Ring of Gondor, a blackened iron ring etched with fading images of Minas Tirith’s White Tower, pulses with a chilling resonance that lingers like the wind through the barren lands. Wearing it grants the wearer temporary resistance to fear and allows them to perceive the paths taken by lingering shadows, revealing hidden dangers or forgotten passages. This relic is said to have been forged in the fires of Mount Doom, its power drawing from ancient eldritch forces.",
    "category": "equipment",
    "price": 290000,
    "icon": "🌑",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Resistance to Fear",
      "Reveal Hidden Shadows"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Fear",
        "rules": "Activates as a bonus action. Provides temporary resistance to fear-based effects for 1 minute. Ends early if the wearer is no longer within range of a source of fear or darkness."
      },
      {
        "title": "Reveal Hidden Shadows",
        "rules": "Passive effect. While wearing this ring, you gain advantage on Perception checks to notice hidden shadows or forgotten passages in areas where dark magic has left its mark. This effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "The ring's power, though ancient and potent, is not without cost; it requires the wearer to be of at least 1st level to maintain their sanity while using its dark magic.",
    "vendorReason": "Elrond of Rivendell, a master of the arcane arts, has been known to trade this ring for knowledge and stories from those who have ventured into the darkest corners of Middle-earth.",
    "shippingDetail": "Ships via winged pony express; delivery time varies depending on the recipient’s location in Middle-earth.",
    "usage": {
      "activation": "Bonus action for temporary resistance to fear, passive reveal hidden shadows.",
      "duration": "1 minute (temporarily resistant to fear), limited once per long rest (revealing hidden shadows).",
      "endsWhen": "Effect ends if the wearer leaves a source of fear or darkness, or upon completing a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The ring's value lies in its unique and ancient properties, making it a rare find among even the most affluent collectors.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T03:07:37.263642+00:00",
    "aiReviewedAt": "2026-07-25T03:07:37.263642+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_brutal_borns_ember_of_moria": {
    "id": "middle_earth_item_brutal_borns_ember_of_moria",
    "name": "Brutal Born's Ember of Moria",
    "description": "The Brutal Born's Ember of Moria is a pulsating, volcanic core forged deep within Mount Doom’s heart. Its raw energy crackles with heat and fire, pulsing in time with the inferno that birthed it. When consumed, this ember grants temporary resilience and strength, but also risks igniting enemies with searing flames. The core's volatile nature demands careful handling; one misstep could lead to a catastrophic explosion of fiery doom.",
    "category": "consumables",
    "price": 5100,
    "icon": "🔥",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "increased strength",
      "burning enemy"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dire_wolf courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Strength",
        "rules": "Consume the Ember to gain +2 to Str and Dex for 1 minute. This effect ends early if you take any damage or lose consciousness."
      },
      {
        "title": "Burning Enemy",
        "rules": "When consumed, there's a 50% chance that nearby enemies are set aflame. These enemies take fire damage equal to your proficiency bonus + 3 at the start of their next turn. The burning effect ends when they use an action or interact with their environment."
      }
    ],
    "levelRequirementReason": "The Ember's raw power demands caution; even novices can handle its effects.",
    "vendorReason": "The Dwarven Forge has long traded in volcanic and fiery artifacts, making them the keepers of this dangerous but powerful relic.",
    "shippingDetail": "Ships via dire wolf; delivery can take up to a week depending on your location.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "1 minute or until you lose consciousness",
      "endsWhen": "You take damage, lose consciousness, or use an action",
      "charges": "Unlimited; can be consumed multiple times"
    },
    "priceReason": "The Ember's raw power and unpredictable nature justify its high price.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T03:07:56.990159+00:00",
    "aiReviewedAt": "2026-07-25T03:07:56.990159+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_cursed_stone_of_rivendell": {
    "id": "middle_earth_item_the_cursed_stone_of_rivendell",
    "name": "The Cursed Stone of Rivendell",
    "description": "The Cursed Stone of Rivendell radiates a cool, melancholic glow that seems to seep into your very bones when held for too long. Its surface is etched with ancient runes that whisper secrets of forgotten times and lost souls. While it grants fleeting insights into others' true intentions, the stone's touch also plunges the bearer into vivid nightmares, where they relive their own deepest regrets and sorrows, causing a slow erosion of one's sanity over time.",
    "category": "curiosities",
    "price": 1300,
    "icon": "💀",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "reveals hidden truths",
      "causes nightmares"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Reveals Hidden Truths",
        "rules": "When the user focuses on an individual or situation for at least one minute, they gain advantage on Perception checks to discern lies and deceptions. This effect lasts until the end of their next short rest."
      },
      {
        "title": "Causes Nightmares",
        "rules": "Holding the stone for more than 10 minutes each day results in a nightmare that reduces the user's Wisdom score by 2 (to a minimum of 2) until they complete a long rest. The stone must be removed before this penalty can end."
      }
    ],
    "levelRequirementReason": "Only those with the fortitude to face their own regrets and the wisdom to discern truth from deceit should wield such a powerful yet dangerous artifact.",
    "vendorReason": "The Shire Shop, known for its eclectic array of magical curiosities, is trusted by many to carry rare and potent items like The Cursed Stone of Rivendell.",
    "shippingDetail": "Shipped via the Pony Express with a special delivery that ensures the stone arrives intact but under strict secrecy.",
    "usage": {
      "activation": "Passive effect when held for more than 10 minutes; requires concentration to activate the truth-revealing effect.",
      "duration": "Truth-revealing effect lasts until end of next short rest. Nightmares last until a long rest is completed.",
      "endsWhen": "Nightmare ends with a long rest, truth-revealing effect ends at the end of the next short rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Cursed Stone's rarity and its dual effects—while powerful—make it a balanced addition to any character's collection, ensuring value in both utility and danger.",
    "priceOriginal": 900,
    "priceReviewedAt": "2026-07-25T14:44:54.548541+00:00",
    "aiReviewedAt": "2026-07-25T14:44:54.548541+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_the_resonant_fountain_of_stonyfalls": {
    "id": "connectopia_item_the_resonant_fountain_of_stonyfalls",
    "name": "The Resonant Fountain of Stonyfalls",
    "description": "The Resonant Fountain of Stonyfalls, a cubic masterpiece forged from the very essence of sonic resonance, stands as a testament to craftsmanship and harmony. Its unholy vibrations strengthen nearby block structures by +50 durability but must be used with caution. When activated, it emits a calming hum that reduces stress levels and boosts crafting efficiency by 15%. The fountain is a relic of ancient masonry, its presence both awe-inspiring and potentially perilous.",
    "category": "equipment",
    "price": 88000,
    "icon": "🔊",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Strengthen Structures",
      "Boost Crafting Efficiency"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Airship Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strengthen Structures",
        "rules": "When activated, the Resonant Fountain emits unholy vibrations that temporarily increase the durability of nearby block structures by +50 points. This effect lasts for 1 hour and can be used once per long rest."
      },
      {
        "title": "Boost Crafting Efficiency",
        "rules": "The fountain's calming hum grants a +3 bonus to all crafting checks or skills, which lasts until the end of the user's next short or long rest. This effect also reduces stress levels by 20%, providing a mental boost."
      }
    ],
    "levelRequirementReason": "The Resonant Fountain is accessible to adventurers of all levels but requires some degree of discipline and control to avoid causing unintended structural damage.",
    "vendorReason": "Craft Corner specializes in rare and powerful crafting tools, making it the ideal vendor for such a unique item.",
    "shippingDetail": "Delivered by Airship Express within 2 days of order placement.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour per long rest",
      "endsWhen": "The effect ends at the end of a user's next short or long rest, or when the fountain is deactivated.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Resonant Fountain offers significant crafting and structural benefits without being overpowered, making it a fair purchase.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T03:08:43.999950+00:00",
    "aiReviewedAt": "2026-07-25T03:08:43.999950+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_the_fallen_gearworks_of_granitecrest": {
    "id": "connectopia_item_the_fallen_gearworks_of_granitecrest",
    "name": "The Fallen Gearworks of Granitecrest",
    "description": "The Fallen Gearworks of Granitecrest is a complex assembly of interlocking rusted gears and cogs, salvaged from a long-forgotten pioneer settlement. These relics possess a mysterious charm that enhances any mechanical device they are used to craft or repair, ensuring durability and precision far beyond standard construction methods. Though their origins may hold unforeseen consequences, these gearworks have been refined by the local blacksmiths into a reliable resource for the industrious.",
    "category": "consumables",
    "price": 5100,
    "icon": "⚙️",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "durability boost",
      "blueprint discovery"
    ],
    "vendor": "block_smith",
    "shippedBy": "wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Durability Boost",
        "rules": "When used to craft or repair mechanical devices, these gearworks increase their durability by +20%. This effect is applied as a bonus to the device's hit points and resistance to damage. The effect lasts until the next long rest."
      },
      {
        "title": "Blueprint Discovery",
        "rules": "Once per day, when used in conjunction with crafting or repairing a mechanical device, there is a 25% chance of discovering advanced blueprints for a rare machine. If successful, the player gains access to these blueprints and can use them at any time without further expenditure."
      }
    ],
    "levelRequirementReason": "This item is accessible to all characters who wish to craft or repair mechanical devices.",
    "vendorReason": "Block Smith specializes in salvaging and repurposing relics like these, turning them into practical tools for the industrious adventurer.",
    "shippingDetail": "Ships via local wagon service, delivered within a week of order placement.",
    "usage": {
      "activation": "Used as an action when crafting or repairing a mechanical device.",
      "duration": "Instantaneous effect; applies to the next construction attempt.",
      "endsWhen": "Exhausted after one use per day.",
      "charges": "Unlimited, recharged with each long rest."
    },
    "priceReason": "This item strikes a balance between utility and cost by providing a significant durability boost and the potential for advanced blueprints at an accessible price point.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:07:57.115263+00:00",
    "aiReviewedAt": "2026-07-25T03:07:57.115263+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_the_uncanny_chronometric_module_7": {
    "id": "connectopia_item_the_uncanny_chronometric_module_7",
    "name": "The Uncanny Chronometric Module 7",
    "description": "The Uncanny Chronometric Module 7 is a sleek, obsidian device recovered from an ancient time-research outpost. Its surface shimmers with a faint, pulsating glow that hints at its unstable chronal core. This module allows users to slow the motion of small objects by 30% for ten seconds or repeat a simple action, such as crafting, precisely. However, prolonged use risks creating dangerous chronal distortions, causing fragmented flashbacks and disorienting the user's perception.",
    "category": "curiosities",
    "price": 1300,
    "icon": "⏳",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Temporal Slow",
      "Action Repeat"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "Activates as a bonus action. Causes small objects within reach to move at 70% of their normal speed for 10 seconds. This effect ends if the user or an adjacent creature moves more than 5 feet away from the module."
      },
      {
        "title": "Action Repeat",
        "rules": "Activates as a reaction when you complete one action. Allows you to repeat that same action immediately without expending another action, but only once per short rest. This effect ends if your concentration is broken or you take any other action on your turn."
      }
    ],
    "levelRequirementReason": "The module's unstable chronal core requires a certain level of magical awareness to safely activate and control.",
    "vendorReason": "Pioneer Post often deals in rare artifacts from ancient outposts, making them the ideal vendor for this mysterious device.",
    "shippingDetail": "Shipped via a specialized drone that ensures the module's delicate chronal components are protected during transit.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Temporal Slow: 10 seconds; Action Repeat: Instantaneous, once per short rest",
      "endsWhen": "Concentration is broken or another action is taken on your turn",
      "charges": "Unlimited"
    },
    "priceReason": "The module's unique chronal properties and the risks associated with its use justify this balanced XP price.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-25T03:08:30.703712+00:00",
    "aiReviewedAt": "2026-07-25T03:08:30.703712+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_sunstone_shaper": {
    "id": "middle_earth_item_the_sunstone_shaper",
    "name": "The Sunstone Shaper",
    "description": "The Sunstone Shaper is a delicate phial crafted by dwarven artisans deep within Khazad-dûm using sunlight captured during a celestial alignment that occurs once in a millennium. This elixir grants temporary resistance to shadow-based attacks and imbues the drinker with warmth, bolstering their courage against fear. The liquid's concentrated essence can only be acquired through rare trade or by venturing into the heart of the mountain itself.",
    "category": "consumables",
    "price": 5100,
    "icon": "☀️",
    "stock": 45,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Resistance to Shadow Damage",
      "Bolster Courage"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_cart",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Resistance to Shadow Damage",
        "rules": "The drinker gains resistance to shadow damage for 60 seconds. This effect ends if they take any other damage or die."
      },
      {
        "title": "Bolster Courage",
        "rules": "For the duration of the effect, the drinker's courage is increased by +30%. This boost persists until the effect ends and does not stack with other similar effects."
      }
    ],
    "levelRequirementReason": "Crafted in Khazad-dûm, this item requires a high level of expertise to craft and use effectively.",
    "vendorReason": "The dwarves of Khazad-dûm are renowned for their mastery of crafting such potent items from rare materials.",
    "shippingDetail": "Ships via a dragon cart, ensuring safe and swift delivery to the buyer.",
    "usage": {
      "activation": "Drink the phial as an action.",
      "duration": "60 seconds.",
      "endsWhen": "On damage or death of the drinker.",
      "charges": "Unlimited."
    },
    "priceReason": "The rare materials and craftsmanship required to create this item, along with its limited availability, justify its price in XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:08:35.315048+00:00",
    "aiReviewedAt": "2026-07-25T03:08:35.315048+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_zealous_root_curiosity": {
    "id": "middle_earth_item_the_zealous_root_curiosity",
    "name": "The Zealous Root Curiosity",
    "description": "The Zealous Root Curiosity is a gnarled, pulsating violet root that exudes an unsettling hum from its corrupted heart. Harvested from the Whisperwood grove during a night of lunar eclipse, it temporarily sharpens one's senses and offers fleeting glimpses into the past, though at the cost of sanity. A single use grants heightened perception for 1 minute but risks plunging the user into madness if they gaze too long.",
    "category": "curiosities",
    "price": 24000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Increased Perception",
      "Echoes of Past Events"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_owl",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Perception",
        "rules": "Activate as a bonus action. Grants +50% perception for 1 minute, providing a +4 bonus to all Wisdom (Perception) checks. This effect ends if the user takes any damage or if they voluntarily end it early."
      },
      {
        "title": "Echoes of Past Events",
        "rules": "Activate once per short rest. Allows the user to see echoes of past events within a 10-foot radius for 1 round, providing a +3 bonus to History checks but has a 25% chance (DC 14) to induce madness if used during this effect."
      }
    ],
    "levelRequirementReason": "This item is accessible to all levels as it serves as an introduction to the dangers of overusing knowledge and perception.",
    "vendorReason": "The Elven Market often stocks rare curiosities from various realms, including this one harvested during a mystical night.",
    "shippingDetail": "Delivered swiftly by the Winged Owl courier, ensuring it arrives fresh and potent within hours of purchase.",
    "usage": {
      "activation": "Bonus action or once per short rest",
      "duration": "1 minute or until interrupted",
      "endsWhen": "Damage taken or voluntarily ended early",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The price reflects the item's rarity and the magical energy it contains, suitable for any adventurer.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-25T03:09:20.886699+00:00",
    "aiReviewedAt": "2026-07-25T03:09:20.886699+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_mk_78_godly_phial_of_anor": {
    "id": "middle_earth_item_mk_78_godly_phial_of_anor",
    "name": "Mk.78 Godly Phial of Anor",
    "description": "The Mk.78 Godly Phial of Anor is a delicate glass vessel forged in the fires of Mount Mindolluin, containing a fragment of the light that once banished Sauron from Middle-earth. Its surface gleams with an ethereal glow, and when held, it fills the wielder's heart with unyielding hope and righteous fury. This phial can momentarily bolster defenses against dark magic and undead, while also accelerating the healing of grievous wounds.",
    "category": "premium",
    "price": 1400000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Defensive Glow",
      "Undead Bane"
    ],
    "vendor": "shire_shop",
    "shippedBy": "white_horse",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Defensive Glow",
        "rules": "The wielder gains temporary hit points equal to their level + Constitution modifier (minimum 1). This effect lasts for 1 minute and ends if the user takes damage, or when a saving throw is failed against an attack that deals necrotic or radiant damage."
      },
      {
        "title": "Undead Bane",
        "rules": "The wielder's weapon attacks deal an additional +2d6 damage to undead creatures. This effect lasts for 1 minute and ends if the user fails a saving throw against a necrotic spell, or when they take any form of damage."
      }
    ],
    "levelRequirementReason": "The phial's power requires a certain level of spiritual and physical fortitude to wield effectively.",
    "vendorReason": "The Shire Shop, known for its connection to the ancient lore of Middle-earth, sells this item as it is a symbol of the region's enduring resilience against darkness.",
    "shippingDetail": "Delivered by swift white horses, ensuring safe and timely arrival.",
    "usage": {
      "activation": "Instantaneous activation upon holding the phial.",
      "duration": "1 minute per effect.",
      "endsWhen": "The user takes damage or fails a saving throw against necrotic or radiant attacks.",
      "charges": "Unlimited, recharging after a long rest."
    },
    "priceReason": "Balanced for its godly rarity and significant defensive and offensive benefits in combat.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T03:08:53.582506+00:00",
    "aiReviewedAt": "2026-07-25T03:08:53.582506+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_echoing_herald_of_gondor": {
    "id": "middle_earth_item_the_echoing_herald_of_gondor",
    "name": "The Echoing Herald of Gondor",
    "description": "The Echoing Herald of Gondor, a tarnished silver herald etched with the proud crest of Minas Tirith, hums with an ancient resonance that stirs the heart and fortifies the spirit. Held aloft during moments of peril, it grants temporary resistance to fear, bolstering allies' courage and resolve. Nearby companions feel a surge of unshakable willpower, as if the very echoes of battle cries inspire them anew from the hallowed halls of Gondor.",
    "category": "equipment",
    "price": 1300,
    "icon": "🛡️",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Fortified Spirit",
      "Resistance to Fear"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Fortified Spirit",
        "rules": "All allies within a 10-foot radius gain advantage on saving throws against fear and charmed conditions. This effect lasts for 1 minute, and the Herald can be used once per long rest."
      },
      {
        "title": "Resistance to Fear",
        "rules": "While holding The Echoing Herald of Gondor aloft, you have resistance to being frightened. This ability activates as a bonus action and remains active until the end of your next turn or until you lower the Herald."
      }
    ],
    "levelRequirementReason": "The Echoing Herald requires a minimum level to wield effectively in perilous situations.",
    "vendorReason": "The Shire Shop, known for its connections with the far-reaching realms of Middle-earth, offers this herald as a symbol of unity and valor from Gondor.",
    "shippingDetail": "Ships via Pony Express, delivered directly by trusted couriers who bring tales of valor and heroism.",
    "usage": {
      "activation": "Bonus action to hold it aloft during moments of peril.",
      "duration": "Until the end of your next turn or until you lower the Herald.",
      "endsWhen": "The effect ends when you lower the Herald or at the start of your next turn.",
      "charges": "Once per long rest"
    },
    "priceReason": "The Echoing Herald of Gondor is priced high due to its rare craftsmanship and the significance of Minas Tirith's crest.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T03:09:14.975410+00:00",
    "aiReviewedAt": "2026-07-25T03:09:14.975410+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_rune_of_silken_shadows": {
    "id": "middle_earth_item_the_rune_of_silken_shadows",
    "name": "The Rune of Silken Shadows",
    "description": "The Rune of Silken Shadows is a fractured obsidian talisman, its surface etched with ancient runes that whisper secrets in shadowed light. When activated, it weaves an ephemeral veil around you, granting perfect invisibility for a fleeting moment and allowing passage through darkened spaces as if they were mere mist. This relic was crafted by the shadow-wielders of Valinor during the Age of Stars, its power dormant until invoked by a worthy hand.",
    "category": "curiosities",
    "price": 5100,
    "icon": "👻",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Invisibility",
      "Shadow Passage"
    ],
    "vendor": "elven_market",
    "shippedBy": "dragon_air",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "When activated as an action, you become invisible for 1 minute. The invisibility ends early if you attack or cast a spell. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Shadow Passage",
        "rules": "For the duration of your invisibility (or until it is dispelled), you may move through any difficult terrain within 30 feet as if it were normal ground. This effect does not allow movement into hazardous areas or past creatures with a higher AC than yours."
      }
    ],
    "levelRequirementReason": "This rune requires no level to wield, as its ancient power is accessible to all who can perceive the shadows.",
    "vendorReason": "Elves of Mirkwood are skilled in the lore of shadow and light, making them the keepers of such powerful relics.",
    "shippingDetail": "Ships via dragon courier for expedited delivery within a week.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until dispelled by an attack or spell cast",
      "endsWhen": "The invisibility ends if you attack, cast a spell, or it is dispelled by another effect",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare obsidian and imbued with ancient magic, this rune commands a premium price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:09:47.548674+00:00",
    "aiReviewedAt": "2026-07-25T03:09:47.548674+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_cursed_shard_of_morgoth": {
    "id": "middle_earth_item_the_cursed_shard_of_morgoth",
    "name": "The Cursed Shard of Morgoth",
    "description": "The Cursed Shard of Morgoth is a jagged, pitch-black crystal that pulsates with malevolent energy, emitting an aura so sinister it induces paranoia and whispers of insidious suggestions in any who hold it too long. Despite its corruptive influence, this shard can briefly disrupt magical effects, albeit at the cost of the bearer's sanity and well-being. A potent relic of ancient evil, it is said to have been forged in the fires of Angband itself, and only those of the highest level and greatest resolve dare to wield it.",
    "category": "forbidden",
    "price": 24000,
    "icon": "🔥",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Disrupts Magical Effects",
      "Induces Paranoia"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dire_wolf",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Disrupts Magical Effects",
        "rules": "As a bonus action, the wielder can attempt to disrupt one targeted spell within 30 feet. The target must make a DC 18 Wisdom saving throw or be disrupted for up to 1 minute. On a successful save, the effect is negated but not expended."
      },
      {
        "title": "Induces Paranoia",
        "rules": "For every hour spent holding the shard without using it, the wielder must make a DC 15 Wisdom saving throw or suffer a -2 penalty to all Charisma checks and saving throws for the next 24 hours. On a successful save, the penalty is halved."
      }
    ],
    "levelRequirementReason": "Only those of significant experience can hope to wield such an ancient and dangerous relic without succumbing entirely to its malevolent influence.",
    "vendorReason": "The Dwarven Forge, with their deep knowledge of forges and dark magic, is the only vendor capable of safely handling and selling this cursed shard.",
    "shippingDetail": "Ships via dire wolf courier, ensuring secure delivery through treacherous terrain.",
    "usage": {
      "activation": "Bonus action to disrupt a spell or use it for its effect.",
      "duration": "Instantaneous when used; lasts until the end of the target's next turn if not saved against.",
      "endsWhen": "Disrupted spell ends, or the shard is no longer being held.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The price reflects its rarity and the risk involved in wielding such a dangerous relic, even for the most seasoned adventurers.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T15:31:15.806103+00:00",
    "aiReviewedAt": "2026-07-25T15:31:15.806103+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_fringe_fragments_of_liminal_keeper": {
    "id": "almost_edge_item_fringe_fragments_of_liminal_keeper",
    "name": "The Fringe Fragments of Liminal Keeper",
    "description": "The Fringe Fragments of Liminal Keeper are jagged, shimmering shards that hum with an eerie quiet, a testament to the edge between worlds. When held, these fragments grant fleeting awareness of the boundary, allowing you to momentarily resist the pull towards oblivion – though not without a chilling resonance that lingers in your mind. Their touch is both cold and electric, as if they were forged from the very fabric of liminality itself.",
    "category": "consumables",
    "price": 5100,
    "icon": "⚠️",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Momentary Boundary Awareness",
      "Cold Touch"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Sky Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Momentary Boundary Awareness",
        "rules": "When activated by a bonus action, this effect grants you advantage on saving throws against being pulled towards an edge or void for 1 minute. This effect ends if you take damage or if you willingly end it."
      },
      {
        "title": "Cold Touch",
        "rules": "The shards grant you resistance to fall damage and a faint shimmering aura that lasts for 60 seconds. This aura fades away upon taking any damage, ending the effect prematurely."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 15 due to its intricate nature and power, which allows players to safely interact with liminal forces.",
    "vendorReason": "The edge_wanderer is an expert in dealing with the borders between planes, making them the ideal vendor for such a delicate item.",
    "shippingDetail": "Shipped via the Sky Courier, these fragile shards are carefully wrapped and delivered by air to ensure their integrity remains intact during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until ended early",
      "endsWhen": "Taking damage or ending it willingly",
      "charges": "Unlimited, recharged upon a long rest"
    },
    "priceReason": "The item's rarity and unique properties justify its fair value of 1000 XP.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T03:10:01.798732+00:00",
    "aiReviewedAt": "2026-07-25T03:10:01.798732+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_grim_keeper_fragments_mk.48": {
    "id": "almost_edge_item_grim_keeper_fragments_mk.48",
    "name": "Grim Keeper's Fragments Mk.48",
    "description": "Forged from the bones of ancient wardens, these Grim Keeper's Fragments Mk.48 pulse with a haunting light that flickers like the waning embers of despair. Each fragment is an echo of lost souls, their spectral energy weaving into a protective barrier around you. When near the edge, these fragments not only shield against fear and panic but also grant a soothing presence, subtly restoring your sanity in moments of high tension.",
    "category": "equipment",
    "price": 24000,
    "icon": "💀",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Spectral Shield",
      "Sanity Restoration"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Spectral Shield",
        "rules": "Activates as a reaction when you would be frightened or panicked. Provides resistance to fear and panic effects for the next 1 minute, after which it requires an hour of rest in a safe place to recharge."
      },
      {
        "title": "Sanity Restoration",
        "rules": "Passively grants a +2 bonus to saving throws against sanity-related effects. This effect is active as long as you are within 30 feet of the fragments and ends if you leave their radius or take any hostile action."
      }
    ],
    "levelRequirementReason": "Requires sufficient experience and resilience to harness the spectral energies effectively.",
    "vendorReason": "The void merchant deals in items crafted from the forgotten corners of reality, where these fragments originate.",
    "shippingDetail": "Ships via Dimensional Courier; special handling ensures safe arrival through the interdimensional flux.",
    "usage": {
      "activation": "Passive effect; requires no action to activate.",
      "duration": "1 minute, recharges after an hour of rest in a safe place.",
      "endsWhen": "Leaving the radius or taking any hostile action.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects its rare crafting materials and the spectral energies it contains.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T03:10:07.649790+00:00",
    "aiReviewedAt": "2026-07-25T03:10:07.649790+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_fringe_fragments_of_liminal_mk.72": {
    "id": "almost_edge_item_fringe_fragments_of_liminal_mk.72",
    "name": "Fringe Fragments of Liminal Mk.72",
    "description": "The Fringe Fragments of Liminal Mk.72 are shards of an ancient, forgotten realm. They hum with the residual energy of liminal pathways, offering a disconcerting sense of familiarity to those lost on the edge – a dangerous comfort. These fragments, colder than the void itself, whisper secrets of hidden paths and distorted reflections, compelling travelers to explore the unknown. Use them wisely; their unsettling dreams may haunt you for hours after each use.",
    "category": "curiosities",
    "price": 88000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "delivery_only",
    "effects": [
      "Phasing through Thin Barriers",
      "Secrets Unveiled"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Shadow Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Phasing through Thin Barriers",
        "rules": "As an action, the user can attempt to phase through thin barriers. The target is a barrier that has no more than 20 AC and does not exceed one square foot in area. This effect lasts for 1 minute unless dispelled by magic or forceful means. There is no saving throw required."
      },
      {
        "title": "Secrets Unveiled",
        "rules": "The user increases their chances of discovering hidden paths or secrets within a 30-foot radius by +2 to Investigation checks for 1 hour after use. This effect ends upon the expiration time or if the user uses an action to dismiss it early."
      }
    ],
    "levelRequirementReason": "Requires significant magical aptitude and experience to safely wield these fragments.",
    "vendorReason": "The Liminal Trader has a special connection with the forgotten realms from which these fragments originate.",
    "shippingDetail": "Ships via the Shadow Delivery service, known for its secrecy and reliability.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until dispelled",
      "endsWhen": "Expiry of duration or dispelled by forceful means",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the item's limited stock and its unique, potentially dangerous effects.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-25T03:10:20.453289+00:00",
    "aiReviewedAt": "2026-07-25T03:10:20.453289+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_spotted_coins_of_fungal_herald": {
    "id": "mushroom_kingdom_item_spotted_coins_of_fungal_herald",
    "name": "The Spotted Coins of Fungal Herald",
    "description": "The Spotted Coins of Fungal Herald are shimmering with bioluminescent fungal light and pulse rhythmically, as if alive. When held, these coins grant a surge of speed and agility, propelling you forward as the earth seems to move in tandem. Legends say they were crafted by the Mushroom King’s heralds during the Great Spore War, and each coin carries a small chance of releasing a burst of spores that can momentarily hinder foes. These coins are known for their stamina-boosting properties, allowing adventurers to recover quicker from their exertions.",
    "category": "consumables",
    "price": 1300,
    "icon": "🏃‍♀️",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Speed",
      "Agility Boost"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Enhanced Speed",
        "rules": "When activated as a bonus action, the coins grant you a +2 bonus to movement speed for 10 seconds. You can use this feature once per short rest."
      },
      {
        "title": "Agility Boost",
        "rules": "While holding these coins, you gain advantage on Dexterity saving throws and skill checks related to agility or movement. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "The Spotted Coins require a minimum level to ensure they are only used by experienced adventurers.",
    "vendorReason": "Toad Town Market is known for its connection with the Mushroom Kingdom and often stocks items of legendary significance, including these coins.",
    "shippingDetail": "Delivered by a fleet of glowing mushroom carts that travel through fungal pathways.",
    "usage": {
      "activation": "Bonus action to activate, once per short rest for Enhanced Speed; lasts until the end of your next long rest for Agility Boost.",
      "duration": "10 seconds for Enhanced Speed; ends when you finish a long rest for Agility Boost",
      "endsWhen": "Exhausted after use or upon completing a long rest",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The coins are priced high due to their limited daily stock and the significant benefits they offer to experienced adventurers.",
    "priceOriginal": 275,
    "priceReviewedAt": "2026-07-25T03:10:23.574579+00:00",
    "aiReviewedAt": "2026-07-25T03:10:23.574579+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_malevolent_heralds_shard": {
    "id": "mushroom_kingdom_item_malevolent_heralds_shard",
    "name": "Malevolent Herald's Shard of Rotting Echoes",
    "description": "The Malevolent Herald's Shard of Rotting Echoes hums with dark energy, a jagged fragment that once belonged to a fallen herald of decay and death. When wielded, it conjures unsettling visions in foes and saps their strength, while the ground around it decays rapidly, turning allies' paths into treacherous mires. Its malevolent influence can be felt for yards around, making it an ideal tool for disrupting formations or creating deadly strategic obstacles.",
    "category": "equipment",
    "price": 5100,
    "icon": "💀",
    "stock": 9,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Inflicts Unsettling Visions",
      "Causes Area Decay"
    ],
    "vendor": "wario_direct",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Unsettling Visions",
        "rules": "When the shard is activated, all creatures within a 10-foot radius must succeed on a DC 15 Wisdom saving throw or be stunned for 1 minute. The effect ends if the shard is destroyed."
      },
      {
        "title": "Area Decay",
        "rules": "The ground around the shard decays rapidly, dealing 2d6 necrotic damage to all creatures within 30 feet at the start of each creature's turn for 1 minute. The decay ends if the shard is destroyed."
      }
    ],
    "levelRequirementReason": "The shard requires significant magical energy, making it suitable only for mid-level adventurers.",
    "vendorReason": "Wario Direct specializes in rare and exotic items from the Mushroom Kingdom, including this malevolent relic.",
    "shippingDetail": "The shard is delivered by a dragon courier who ensures its safe arrival, but the journey can be perilous due to the shard's unstable nature.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect with a 1-minute duration once activated",
      "endsWhen": "Destroyed or after 1 minute if not destroyed",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The shard's rarity and the significant risk involved in obtaining it justify its moderate price.",
    "priceOriginal": 8400,
    "priceReviewedAt": "2026-07-25T03:10:58.539867+00:00",
    "aiReviewedAt": "2026-07-25T03:10:58.539867+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_mk_54_spotted_coins_of_war": {
    "id": "mushroom_kingdom_item_mk_54_spotted_coins_of_war",
    "name": "Mk.54 Spotted Coins of War's Legacy",
    "description": "Recovered from the ruins of Castle Mushroom, these coins bear the stamped image of a long-forgotten Wario general. When combined, they unleash a small burst of offensive power – ideal for smashing through defenses or delivering a devastating punch. These Spotted Coins of War's Legacy are crafted with ancient alchemy and imbued with the essence of a battle-hardened warrior, making them an invaluable tool in any adventurer’s arsenal.",
    "category": "curiosities",
    "price": 89000,
    "icon": "💥",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "devastating blow",
      "momentary paralysis"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "royal_carrier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Devastating Blow",
        "rules": "When activated as a bonus action, the coins unleash a powerful shockwave that deals 2d8 + level thunder damage to a single target within 10 feet. The target must make a DC 15 Dexterity saving throw or be knocked prone and take an additional 1d6 thunder damage."
      },
      {
        "title": "Momentary Paralysis",
        "rules": "Upon successfully hitting the target, there is a 40% chance that the target will be stunned for 1 round. The stun effect has no save to resist."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to wield due to its arcane and alchemical nature.",
    "vendorReason": "The Koopa Shop specializes in rare and ancient artifacts, making them the perfect vendor for these Spotted Coins of War's Legacy.",
    "shippingDetail": "Ships via the Royal Carrier service, ensuring quick delivery directly to your doorstep.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when used or until expended",
      "charges": "Recharge after a short rest"
    },
    "priceReason": "Balanced at 1000 XP, these coins offer powerful yet manageable effects that are suitable for level 5 adventurers.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-25T03:10:35.526618+00:00",
    "aiReviewedAt": "2026-07-25T03:10:35.526618+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_student_phantom_breaker_trophy": {
    "id": "kivotos_item_student_phantom_breaker_trophy",
    "name": "The Student Phantom Breaker’s Trophies",
    "description": "The Student Phantom Breaker’s Trophies are a set of three intricately carved trophies, each depicting a spectral student frozen mid-performance. These artifacts, imbued with a faint echo of their academy debates, can briefly distort perception when activated. Upon activation, they emit a subtle visual distortion that causes confusion and disorientation in nearby foes for 30 seconds. The trophies also have a chance to trigger a Phantom Echo, a lingering spectral whisper that haunts listeners until the effect ends.",
    "category": "equipment",
    "price": 1300,
    "icon": "👻",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Confusion (30 seconds)",
      "Visual Distortion"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Confusion (30 seconds)",
        "rules": "When activated, these trophies create an illusory disturbance in perception. Rivals within a 15-foot radius must succeed on a DC 14 Wisdom saving throw or be affected by the confusion effect for 30 seconds."
      },
      {
        "title": "Visual Distortion",
        "rules": "The trophies emit a faint, spectral glow that creates an illusory visual disturbance. Any creature within a 20-foot radius must make a DC 14 Wisdom saving throw or be affected by the confusion effect for 30 seconds."
      }
    ],
    "levelRequirementReason": "Requires at least 15th level to activate and manage the illusory effects effectively.",
    "vendorReason": "The student store is the natural home for these trophies, as they are crafted by academy students themselves.",
    "shippingDetail": "Ships via Drone Delivery within a day of purchase. Delivered in a specially marked crate with protective padding to prevent damage during transit.",
    "usage": {
      "activation": "Reaction (may only be used once per short rest)",
      "duration": "30 seconds, ends when the effect is dispelled or the user's next turn begins",
      "endsWhen": "The effect ends if a creature successfully saves against it, or after its duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the uncommon rarity and unique crafting process required to produce these trophies.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T03:11:13.484701+00:00",
    "aiReviewedAt": "2026-07-25T03:11:13.484701+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_academy_breaker_service_of_resonance": {
    "id": "kivotos_item_academy_breaker_service_of_resonance",
    "name": "The Academy Resonance Service Breaker",
    "description": "The Academy Resonance Service Breaker is a compact, intricately crafted device resembling a student's oversized headphone set. Its polished metal frame and glowing interface suggest it has been forged in the heart of the academy's research labs. When activated, its focused sonic pulse can shatter brittle materials with ease, leaving behind a trail of dust. Nearby electronic networks are disrupted for several minutes, scrambling data streams and causing temporary system failures.",
    "category": "services",
    "price": 5100,
    "icon": "🔊",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Sonic Shattering",
      "Network Scramble"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Secure Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sonic Shattering",
        "rules": "When activated as a bonus action within 30 feet, the device emits a focused sonic pulse that deals 2d6 force damage to all objects in a 15-foot cone. Targets must succeed on a DC 14 Dexterity saving throw or be knocked prone."
      },
      {
        "title": "Network Scramble",
        "rules": "For every minute the device remains active, it scrambles nearby electronic networks, causing any active digital devices within a 60-foot radius to malfunction. The effect ends when the device is turned off or destroyed."
      }
    ],
    "levelRequirementReason": "The device's complexity and calibration require basic proficiency in engineering.",
    "vendorReason": "As a product of the academy, it makes sense that the armory would stock this specialized tool.",
    "shippingDetail": "Ships via overnight delivery with a special tamper-proof seal.",
    "usage": {
      "activation": "Bonus action to activate and turn off",
      "duration": "Instantaneous activation; Network Scramble effect lasts for the duration of active use (1 minute max)",
      "endsWhen": "Turned off or destroyed, whichever comes first",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The device's rare components and specialized calibration justify its moderate price.",
    "priceOriginal": 1250,
    "priceReviewedAt": "2026-07-25T03:10:54.218434+00:00",
    "aiReviewedAt": "2026-07-25T03:10:54.218434+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_student_halo_breaker_trophy_mk_27": {
    "id": "kivotos_item_student_halo_breaker_trophy_mk_27",
    "name": "Mk.27 Student Halo Breaker Trophy",
    "description": "The Mk.27 Student Halo Breaker Trophy gleams with a faint, ethereal light, its surface polished to perfection by years of ceremonial handling. Crafted from a fragment of a halo once wielded by an ancient sage, this trophy pulses with latent energy that enhances the perceiver's sharpness and insight. It reveals hidden manipulations within the academy, allowing one to discern subtle shifts in power dynamics and uncover covert influences at play.",
    "category": "curiosities",
    "price": 25000,
    "icon": "👁️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Enhanced Insight",
      "Reveals Manipulation"
    ],
    "vendor": "club_supply",
    "shippedBy": "Temporal Shipping",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Enhanced Insight",
        "rules": "Activates as a bonus action, providing the wielder with the benefits of the Detect Thoughts spell for a duration of 2 minutes. The wielder can see through illusions and detect hidden or secret things within range (30 feet). This effect ends when the user takes another action on their turn."
      },
      {
        "title": "Reveals Manipulation",
        "rules": "At the start of each of your turns while this item is active, you can use a bonus action to attempt to detect any ongoing manipulation or deception within 30 feet. You gain advantage on Perception checks made to notice such attempts and can force a target to make a Wisdom saving throw (DC 15) to resist being detected as the source of a subtle manipulation."
      }
    ],
    "levelRequirementReason": "Only a seasoned academic with deep knowledge and experience in manipulating power structures would have the wisdom and skill to wield this trophy effectively.",
    "vendorReason": "The club supply vendor maintains an extensive collection of rare and valuable relics, including those from the academy's storied past.",
    "shippingDetail": "Ships via Temporal Courier, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Bonus action to activate; bonus action at start of each turn while active for manipulation checks.",
      "duration": "2 minutes per activation, ends when another action is taken or used on the next turn.",
      "endsWhen": "Upon taking another action or ending your turn without using it again.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The trophy's rarity and unique properties, combined with its utility in both academic and social settings, justify this price.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-25T03:11:09.060092+00:00",
    "aiReviewedAt": "2026-07-25T03:11:09.060092+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_obsidian_dragon_fever_orb": {
    "id": "earth_land_item_obsidian_dragon_fever_orb",
    "name": "The Obsidian Dragon Fever Orb - Mk.III",
    "description": "The Obsidian Dragon Fever Orb - Mk.III is a pulsating inferno of dragonfire, encased in black obsidian and etched with runes that shimmer like molten lava. It pulses with heat, whispering of ancient rituals and the madness that consumed the scales of forgotten dragons. Holders feel a feverish surge, granting temporary fire resistance but risking minor hallucinations that can lead to disorientation. This relic promises glimpses into primal flames, enhancing attack power for fleeting moments at the cost of enemy movement speed.",
    "category": "equipment",
    "price": 5100,
    "icon": "🔥",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Fire Resistance",
      "Hallucination Risk"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "courier_wings",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "The user gains temporary fire resistance for 1 minute. This effect cannot be renewed within a short rest."
      },
      {
        "title": "Hallucination Risk",
        "rules": "There is a 20% chance of disorientation, which reduces the user’s speed to half until the end of their next turn. This effect has no save DC and can occur multiple times per day."
      }
    ],
    "levelRequirementReason": "The item’s powerful effects make it accessible early on for those who seek to master its potential.",
    "vendorReason": "The Guild Quartermaster stocks the Orb as a tool for adventurers embarking on dangerous, fire-related quests.",
    "shippingDetail": "Ships via Courier Wings, known for their swift and reliable deliveries across distant realms.",
    "usage": {
      "activation": "Use an action to activate the Orb’s effects.",
      "duration": "1 minute per use.",
      "endsWhen": "The effect ends if the user is incapacitated or the Orb is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced to reflect its powerful effects and rarity, while remaining accessible for those who can afford it.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T03:11:13.124729+00:00",
    "aiReviewedAt": "2026-07-25T03:11:13.124729+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_frostfallen_guardian_shard": {
    "id": "earth_land_item_frostfallen_guardian_shard",
    "name": "The Frostfallen Guardian's Shard - Fragment VII",
    "description": "The Frostfallen Guardian's Shard - Fragment VII is a shard of ice that glows with a cold, spectral blue light. Crafted from the Wall of Winter’s ancient guardian, this relic hums with the essence of frost and ice dragons. When near ice or frost, it slows enemies' attack speeds by 15%, and there's a 20% chance to freeze an opponent upon use. It also restores 5% of your maximum hit points over three turns.",
    "category": "curiosities",
    "price": 30000,
    "icon": "🧊",
    "stock": 7,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Slows enemy attacks",
      "Has a freezing chance"
    ],
    "vendor": "magic_shop",
    "shippedBy": "express_delivery",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Slow Attack",
        "rules": "When held near ice or frost, this shard reduces the attack speed of enemies within 10 feet by 15%. This effect lasts until the start of your next turn."
      },
      {
        "title": "Freeze Chance",
        "rules": "There is a 20% chance to freeze an enemy when used. The target is incapacitated for 1d4+1 turns, has disadvantage on attack rolls and ability checks, and cannot take reactions until the effect ends."
      }
    ],
    "levelRequirementReason": "This shard requires a high level to wield effectively due to its ancient power and the need to channel cold magic.",
    "vendorReason": "The magic shop specializes in rare and powerful relics, including those from ancient guardians.",
    "shippingDetail": "Delivered by express courier with same-day service if purchased during night hours.",
    "usage": {
      "activation": "Object interaction to use the shard near ice or frost; can be used once per short rest.",
      "duration": "Instantaneous for freezing effect, lasts until start of next turn for slow attack.",
      "endsWhen": "The target ends up incapacitated from being frozen, or the duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The shard's rarity and ancient power justify its high price in terms of XP.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T03:11:22.907665+00:00",
    "aiReviewedAt": "2026-07-25T03:11:22.907665+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_arcane_dragon_fossil_heart": {
    "id": "earth_land_item_arcane_dragon_fossil_heart",
    "name": "The Arcane Dragon Fossil Heart - Fragment XII",
    "description": "The Arcane Dragon Fossil Heart - Fragment XII is a shimmering, heart-shaped fragment of an ancient dragon’s chest cavity, its polished surface reflecting arcane patterns like the stars in the night sky. This relic pulses with latent power that seems to anticipate danger, forming protective wards around its bearer and occasionally casting 'Arcane Ward' without conscious effort. Its mana regeneration increases by 30%, ensuring a steady flow of arcane energy for spellcasting.",
    "category": "equipment",
    "price": 89000,
    "icon": "❤️",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Protective Wards",
      "Mana Regeneration Boost"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "sea_freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Protective Wards",
        "rules": "This effect provides a +5 bonus to AC and grants resistance to all damage types. The wards persist for 1 minute or until the wearer takes damage, at which point they dissipate."
      },
      {
        "title": "Mana Regeneration Boost",
        "rules": "The user regenerates an additional 20 mana points per long rest. This effect is passive and does not require any action to activate."
      }
    ],
    "levelRequirementReason": "This fragment's power, though ancient, is accessible to even the novice mage.",
    "vendorReason": "The Earth Emporium deals in relics from forgotten ages, and this heart is a prime example of their wares.",
    "shippingDetail": "Ships via sea freight, delivered within one week from the nearest port. Fragile; special handling required.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous and lasting until the wearer takes damage or a long rest",
      "endsWhen": "Dissipates upon taking damage or after a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "This relic, while not as potent as its more powerful counterparts, offers significant utility at an accessible price.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T03:11:43.083646+00:00",
    "aiReviewedAt": "2026-07-25T03:11:43.083646+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_crimson_chronos_stalker": {
    "id": "mushroom_kingdom_item_crimson_chronos_stalker",
    "name": "The Crimson Chronos Stalker",
    "description": "The Crimson Chronos Stalker, a pulsating crimson mushroom that thrives in the fractured timelines of Mushroom Kingdom, emits a temporal aura that disrupts both movement and combat. Its spores shimmer with fragmented realities, casting a temporal veil over all who enter its vicinity. Upon activation, there's a 10% chance it will briefly rewind your position, allowing you to dodge attacks, but beware—the effect can leave you disoriented for moments after use.",
    "category": "equipment",
    "price": 1300,
    "icon": "⏳",
    "stock": 47,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Temporal Disruption",
      "Dodge Position Rewind"
    ],
    "vendor": "Toad Town Market",
    "shippedBy": "Royal Post Pony Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Temporal Disruption",
        "rules": "Activates as a bonus action. Reduces the movement speed of the user and all enemies within a 5-meter radius by 20% for 3 seconds. Enemies also have their attack speed reduced by 15%. This effect has no save DC, but it can be interrupted if the user takes any other action during its duration."
      },
      {
        "title": "Dodge Position Rewind",
        "rules": "There is a 10% chance that upon activation, your position will rewind for up to 5 feet. This effect allows you to dodge incoming attacks but can leave you momentarily disoriented (no action penalty). The effect ends immediately if the user takes any other action."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 8 due to its complex temporal effects and strategic utility.",
    "vendorReason": "The Toad Town Market specializes in rare botanicals and mystical items from the Mushroom Kingdom, making it an ideal vendor for the Crimson Chronos Stalker.",
    "shippingDetail": "Ships via Royal Post Pony Express, ensuring timely delivery of this delicate and powerful item.",
    "usage": {
      "activation": "Bonus action",
      "duration": "3 seconds or until interrupted",
      "endsWhen": "Effect ends when the user takes another action",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Crimson Chronos Stalker is priced at 1000 XP due to its rarity, complex temporal effects, and strategic value in combat.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T14:44:51.671324+00:00",
    "aiReviewedAt": "2026-07-25T14:44:51.671324+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_ebony_void_fungus": {
    "id": "mushroom_kingdom_item_ebony_void_fungus",
    "name": "The Ebony Void Fungus - Collector's Edition",
    "description": "The Ebony Void Fungus - Collector's Edition exudes an oppressive aura, its obsidian surface etched with cryptic symbols that seem to shift and change as one gazes upon it. This relic whispers secrets of forgotten realms, potentially driving those who listen too long into a state of paranoia. Its touch is cold, almost living, and it hums with the energy of alternate dimensions, ready to grant fleeting glimpses into worlds beyond.",
    "category": "curiosities",
    "price": 5100,
    "icon": "🖤",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Glimpse Alternate Realities",
      "Induce Paranoia"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Wario's Speedy Delivery Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Glimpse Alternate Realities",
        "rules": "Activates as a bonus action. Grants the user a brief, disorienting glimpse into an alternate reality. There is a 20% chance to trigger visual hallucinations for 1 minute. The effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Induce Paranoia",
        "rules": "Passive effect that increases suspicion by 30% for the wielder, persisting for 60 seconds. There is a daily limit of one use. No save DC is required to resist this effect, and it ends when the user drops the item or if they are incapacitated."
      }
    ],
    "levelRequirementReason": "Requires a character with at least 15 levels to handle the relic's unstable dimensions without succumbing to its effects.",
    "vendorReason": "Wario, known for his vast collection of rare and strange artifacts, has managed to secure this collector’s edition from deep within the Mushroom Kingdom.",
    "shippingDetail": "Ships overnight with Wario's personal courier ensuring safe delivery. Any damage during transit is covered by a full refund policy.",
    "usage": {
      "activation": "Bonus action to activate, passive effect while held.",
      "duration": "Glimpse lasts for 1 minute; paranoia persists for 60 seconds.",
      "endsWhen": "Effect ends when the item is dropped or if the user becomes incapacitated.",
      "charges": "Recharges after a short rest."
    },
    "priceReason": "The collector’s edition commands a premium price due to its rarity and the risk involved in handling such an unstable relic.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T03:12:03.390190+00:00",
    "aiReviewedAt": "2026-07-25T03:12:03.390190+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_supercharged_golden_stalk": {
    "id": "mushroom_kingdom_item_supercharged_golden_stalk",
    "name": "The Supercharged Golden Stalk - Level 47 Prototype",
    "description": "The Supercharged Golden Stalk, a twisted marvel of genetic engineering, pulses with raw energy that crackles like lightning within its veins. This bioluminescent stalk grants unparalleled speed and the ability to phase through solid objects for brief moments, making it an invaluable asset in any fight. It is said that the original golden mushroom from which this prototype was grown once served as a beacon of life in a lost kingdom, now reduced to a glowing relic in the hands of the Koopa Shop's most trusted alchemists.",
    "category": "consumables",
    "price": 25000,
    "icon": "⚡",
    "stock": 9,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Pulsating Speed",
      "Phasing Agility"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "Koopa Courier Service - Priority Shipping",
    "levelRequirement": 47,
    "effectDetails": [
      {
        "title": "Pulsating Speed",
        "rules": "When consumed, this stalk grants a +50% increase to movement speed for 4 seconds. The effect is activated as a bonus action and can be used once per short or long rest."
      },
      {
        "title": "Phasing Agility",
        "rules": "This effect allows the user to phase through non-magical barriers, such as walls or doors, but only once every 24 hours. The phasing lasts for a duration of 10 feet per level and is an instantaneous action."
      }
    ],
    "levelRequirementReason": "This prototype is experimental in nature and requires the user to have reached a high level of mastery before it can be safely consumed.",
    "vendorReason": "The Koopa Shop's alchemists are known for their expertise in genetic engineering and rare botanical specimens, making them the ideal vendors for this unique item.",
    "shippingDetail": "Priority courier service ensures a swift delivery of the Supercharged Golden Stalk from the Koopa Shop to your doorstep within 24 hours.",
    "usage": {
      "activation": "Bonus action to activate Pulsating Speed; Instantaneous for Phasing Agility. Both effects are limited to once per short or long rest.",
      "duration": "Pulsating Speed lasts 4 seconds, Phasing Agility lasts until the end of the user's next turn when used.",
      "endsWhen": "The effect ends if consumed by another creature or destroyed in combat.",
      "charges": "Unlimited uses within a day."
    },
    "priceReason": "This prototype is priced at 1000 XP due to its experimental nature, the complexity of its genetic modifications, and the limited number available for distribution.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:12:09.971519+00:00",
    "aiReviewedAt": "2026-07-25T03:12:09.971519+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_streamed_nodes_of_memes": {
    "id": "internet_item_streamed_nodes_of_memes",
    "name": "The Streamed Nodes of Memes - Phase Shift Edition",
    "description": "The Streamed Nodes of Memes - Phase Shift Edition are glowing, pulsating nodes that draw their power from the chaotic streams of viral content. When activated, these nodes induce a fleeting phase shift in your perception, blurring reality and granting you a brief advantage in data-driven combat. With each use, you momentarily slip into an alternate dimension where memes reign supreme, giving you accelerated reflexes and reducing incoming digital attacks by 10%. However, the instability of this effect can lead to random meme-induced distractions or confusion.",
    "category": "consumables",
    "price": 1300,
    "icon": "🌀",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Phase Shift",
      "Meme-Induced Distraction"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Phase Shift",
        "rules": "When activated as a bonus action, you gain advantage on Perception checks and saving throws against digital attacks for the next round. This effect lasts until the start of your next turn. The instability of this phase can cause random meme effects with a 25% chance."
      },
      {
        "title": "Meme-Induced Distraction",
        "rules": "On a failed save against a random meme effect, you are distracted for 1 round, during which you have disadvantage on all attacks and ability checks. The distraction ends when the round concludes or if you take an action."
      }
    ],
    "levelRequirementReason": "This item requires significant data manipulation skills to properly harness its chaotic power.",
    "vendorReason": "Data Dealer is known for sourcing the most cutting-edge and experimental cybernetic items, including the Streamed Nodes of Memes.",
    "shippingDetail": "The nodes are delivered by fast-drone courier with a guaranteed delivery time under an hour within the city limits.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until start of next turn or until an effect ends it",
      "endsWhen": "Starts of your next turn, random meme effect, or when the effect is disrupted by a successful save",
      "charges": "1 charge per day; recharges after 8 hours of inactivity"
    },
    "priceReason": "The item's rarity and unique effects justify its price, providing significant strategic advantage without breaking balance.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T03:12:17.442779+00:00",
    "aiReviewedAt": "2026-07-25T03:12:17.442779+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_runic_bound's_nodes": {
    "id": "internet_item_runic_bound's_nodes",
    "name": "Runic Bound’s Nodes - Ciphered Resonance",
    "description": "Forged from solidified data streams and imbued with ancient algorithms, Runic Bound’s Nodes hum with the very essence of the internet. These nodes allow you to decipher encrypted communications instantly and briefly manipulate digital networks. However, prolonged exposure risks becoming entangled within the data itself, a fate that could be fatal if not extricated in time. Only those of noble intent should wield these nodes, as their power is both a blessing and a curse.",
    "category": "equipment",
    "price": 5100,
    "icon": "🔑",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Decipher Encrypted Communications",
      "Brief Network Manipulation"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Decipher Encrypted Communications",
        "rules": "As an action, you can touch the nodes to instantly decipher any encrypted communication within range. This effect has a duration of 1 minute and requires no save DC. You can use this ability once per short rest."
      },
      {
        "title": "Brief Network Manipulation",
        "rules": "You can spend one charge to manipulate digital networks for 1 hour, providing limited access to blocked networks within your area of effect. This manipulation is detectable by advanced security systems and requires a successful Intelligence (Computers) check (DC 15). The nodes have 3 charges and recharge after a long rest."
      }
    ],
    "levelRequirementReason": "These nodes are accessible to all, but their power is immense; they require a basic understanding of digital systems.",
    "vendorReason": "Pixel Shop specializes in rare and esoteric items that bridge the gap between the physical and virtual worlds.",
    "shippingDetail": "Ships via secure Quantum Courier with a delivery time of 2 days.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous (Decipher) / Hour (Manipulate)",
      "endsWhen": "Ends when the effect duration expires, you are incapacitated, or you use your last charge.",
      "charges": "3 charges, recharged after a long rest"
    },
    "priceReason": "The nodes' power to manipulate digital networks and decipher encrypted communications makes them highly valuable, but not without cost.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-25T03:12:54.345679+00:00",
    "aiReviewedAt": "2026-07-25T03:12:54.345679+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_mk_39_streamed_nodes": {
    "id": "internet_item_mk_39_streamed_nodes",
    "name": "Mk.39 Streamed Nodes - Chronometric Drift",
    "description": "The Mk.39 Streamed Nodes - Chronometric Drift are intricately forged data nodes that pulse with a rhythmic temporal energy, capable of briefly warping digital time. These nodes can slow down enemy attacks and movements within the virtual realm, allowing for strategic advantages in online battles. By channeling their power, they also grant the wielder a burst of speed, making them agile in both physical and cyber environments. Overuse, however, risks destabilizing the very fabric of the network, causing unpredictable temporal anomalies.",
    "category": "curiosities",
    "price": 89000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Slow",
      "Enhanced Agility"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Temporal Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "As a bonus action, activate to slow enemy attacks and movements by 20% within a 10-foot radius for 1 minute. This effect ends if you or any creature in the area takes damage."
      },
      {
        "title": "Enhanced Agility",
        "rules": "Activate as a reaction upon taking movement-related actions, granting you a +30 bonus to Dexterity (Acrobatics) checks and an increase of 10 feet to your walking speed for 1 minute. This effect ends when you move more than 50 feet."
      }
    ],
    "levelRequirementReason": "These nodes are designed to be accessible, even at lower levels, as they enhance mobility and combat effectiveness in digital arenas.",
    "vendorReason": "The cyber market specializes in cutting-edge tech and data-related items that require the expertise of their vendors for proper handling and use.",
    "shippingDetail": "Delivered via Temporal Shipment, ensuring arrival at your doorstep within a week, regardless of distance.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "1 minute for each effect, up to three times per day",
      "endsWhen": "The duration ends if you take damage or move more than 50 feet",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the item's rarity and unique functionality, providing a balanced value for players seeking to enhance their digital combat capabilities.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-25T03:12:46.361490+00:00",
    "aiReviewedAt": "2026-07-25T03:12:46.361490+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_skybound_harmonic_blocks": {
    "id": "connectopia_item_skybound_harmonic_blocks",
    "name": "The Skybound Harmonic Blocks - Mk.42",
    "description": "The Skybound Harmonic Blocks - Mk.42 are intricately carved from the very quartz of Connectopia’s highest peaks, their edges etched with ancient runes that amplify celestial energies. When activated, each block emits a soothing blue glow, momentarily shielding against harsh winds and providing a calm respite to all who hold them. Crafted by the artisans of Craft Corner, these blocks are both functional and beautiful, enhancing one's resilience in the face of nature’s most unforgiving elements.",
    "category": "equipment",
    "price": 5100,
    "icon": "✨",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Amplifies Celestial Energies",
      "Provides Wind Resistance"
    ],
    "vendor": "craft_corner",
    "shippedBy": "block_carrier drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Amplified Celestial Resonance",
        "rules": "Activates as a bonus action. The block emits a soothing blue light, providing a +2d4 resistance to damage from sonic and wind effects for 1 minute. This effect ends when the user takes damage or if another effect of this kind is used."
      },
      {
        "title": "Wind Resistance",
        "rules": "Passive effect while held. Reduces incoming wind damage by 5 points, stacking with any other sources of wind resistance. Ends upon removal from the character's possession or at the end of their next turn."
      }
    ],
    "levelRequirementReason": "These blocks are designed to be accessible to all adventurers who wish to harness Connectopia’s natural power.",
    "vendorReason": "Craft Corner is renowned for its craftsmanship and the quality of materials used in their creations, making these blocks a perfect fit for their inventory.",
    "shippingDetail": "Ships via the block carrier drone, ensuring safe delivery within three days from Connectopia’s highest peaks.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Minute",
      "endsWhen": "User takes damage or another effect of this kind is used",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, these blocks offer significant utility without overshadowing the other items in the market.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:12:33.664736+00:00",
    "aiReviewedAt": "2026-07-25T03:12:33.664736+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_pioneer_cartographer_finder": {
    "id": "connectopia_item_pioneer_cartographer_finder",
    "name": "The Pioneer Cartographer Finder - Prototype X7",
    "description": "The Pioneer Cartographer Finder - Prototype X7 is a rugged, hand-assembled block of steel and leatherette, crafted to withstand the harshest terrains. This device not only reveals hidden pathways with remarkable accuracy but also provides an uncanny ability to predict the location of rare resources, making it invaluable for those charting uncharted lands. Its core components hum faintly as they process terrain data, ensuring that pioneers can uncover potential settlements and resource veins without unnecessary detours.",
    "category": "curiosities",
    "price": 1300,
    "icon": "🧭",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Reveals hidden pathways on the map",
      "Increases chance of finding rare resources"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "pony express rider",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reveal Hidden Pathways",
        "rules": "The user can activate this effect as a bonus action, causing the device to emit a soft glow and analyze the immediate area. This reveals all hidden pathways within a 50-foot radius for 1 minute. The effect ends if the user takes any other action or if the user leaves the area."
      },
      {
        "title": "Increase Chance of Finding Rare Resources",
        "rules": "This effect provides a +2 bonus to Wisdom (Survival) checks made to locate rare resources within an hour. This bonus is cumulative with other bonuses but can be negated by a successful DC 15 Intelligence saving throw."
      }
    ],
    "levelRequirementReason": "The device requires a certain level of experience and skill to properly utilize its advanced mapping technology.",
    "vendorReason": "Pioneer Post supplies the latest tools for exploration, ensuring that their customers can navigate even the most remote areas with ease.",
    "shippingDetail": "Shipped by a trained pony express rider who delivers the device directly to your doorstep within three days of purchase.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute",
      "endsWhen": "The user takes any other action or leaves the area",
      "charges": "Unlimited, but requires recharging in a settlement for 24 hours after each use"
    },
    "priceReason": "The device's advanced mapping technology and durability justify its higher price point.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T03:13:12.210153+00:00",
    "aiReviewedAt": "2026-07-25T03:13:12.210153+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_blocksmith_temporal_service": {
    "id": "connectopia_item_blocksmith_temporal_service",
    "name": "The Blocksmith’s Temporal Service – Level 3 Calibration",
    "description": "The Blocksmith’s Temporal Service – Level 3 Calibration is a specialized service by the Blocksmith guild, crafted from ancient forgeheart cores and the lore of time itself. This tool allows for delicate manipulation of stone and mortar's cohesion, reinforcing structures against minor collapses. For an hour, it strengthens blocks by 40% and reduces block failure in a small area (50%) within its range, crucial for safeguarding frontier settlements from unpredictable tremors.",
    "category": "services",
    "price": 25000,
    "icon": "🛠️",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Stone Strengthening",
      "Block Failure Reduction"
    ],
    "vendor": "block_smith",
    "shippedBy": "Automated service module",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stone Strengthening",
        "rules": "Activates as a bonus action. The item temporarily increases the cohesion of blocks within its range by 40% for one hour. This effect is neutralized if the structure sustains significant damage beyond minor repairs."
      },
      {
        "title": "Block Failure Reduction",
        "rules": "Passive effect that reduces the chance of block collapse in a small area (50%) centered on the item's location, lasting until the end of your next turn. This effect is negated if the structure experiences major structural damage."
      }
    ],
    "levelRequirementReason": "Requires basic understanding and skill to activate and maintain the delicate time-based adjustments.",
    "vendorReason": "The Blocksmith guild has a long history of temporal craftsmanship, making them the only ones capable of handling such delicate services.",
    "shippingDetail": "Ships via an automated service module, ensuring swift delivery to frontier outposts.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour",
      "endsWhen": "Structure sustains significant damage or major repairs are made beyond minor adjustments.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering the delicate and time-sensitive nature of this service, as well as its critical role in frontier safety.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T03:13:06.948984+00:00",
    "aiReviewedAt": "2026-07-25T03:13:06.948984+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_shimmering_aurora_master_held_item": {
    "id": "pokemon_item_shimmering_aurora_master_held_item",
    "name": "The Shimmering Aurora Master’s Clutch",
    "description": "The Shimmering Aurora Master’s Clutch is a delicate, pulsating orb woven from the very essence of aurora light, solidified into a shimmering sphere that amplifies your Pokémon's raw power. When activated, it grants a +20% boost to Special Attack and a 5% chance to inflict ‘Stunning Light,’ momentarily blinding foes with brilliant luminescence. The orb’s energy pulses in sync with the night sky, lending your Pokémon an ethereal, almost otherworldly presence on the battlefield.",
    "category": "equipment",
    "price": 5100,
    "icon": "✨",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Boosts Special Attack by 20%",
      "5% chance to inflict ‘Stunning Light’"
    ],
    "vendor": "pokemart",
    "shippedBy": "Swift Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stunning Light",
        "rules": "When a Pokémon with this Clutch hits an opponent with a Special Attack, there is a 5% chance that the target becomes blinded for 1 round. The save DC to resist is equal to 8 + half the user’s level + their Charisma modifier."
      },
      {
        "title": "Special Attack Boost",
        "rules": "Activates as a bonus action. This effect lasts until the end of your next turn and provides a +20% increase to Special Attack rolls for that Pokémon."
      }
    ],
    "levelRequirementReason": "This Clutch is suitable for beginners, providing foundational support without overwhelming a new trainer.",
    "vendorReason": "Pokemart stocks essential items to help trainers of all levels enhance their Pokémon’s abilities.",
    "shippingDetail": "Delivered within the hour in urban areas; slightly longer for rural zones.",
    "usage": {
      "activation": "Bonus action, activates at the start of your turn when you make a Special Attack roll.",
      "duration": "Until the end of your next turn.",
      "endsWhen": "The effect ends if you do not attack or take an action that requires your bonus action before the end of your next turn.",
      "charges": "Unlimited, recharges at dawn."
    },
    "priceReason": "Balanced for its utility and rarity, this Clutch is priced to reflect its strategic value in early-game play without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:13:55.004449+00:00",
    "aiReviewedAt": "2026-07-25T03:13:55.004449+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_maelstrom_of_lost_battles_service": {
    "id": "pokemon_item_maelstrom_of_lost_battles_service",
    "name": "Maelstrom of Lost Battles Retrieval Service",
    "description": "The Maelstrom of Lost Battles Retrieval Service is a compact, obsidian device humming with the residual energy of countless battles past. Its surface glows with flickering embers that hint at forgotten struggles and victories. This service allows you to call upon spectral echoes of legendary Pokémon trainers—though their loyalty is as fickle as their power, which remains at 75% of its original might. The summoned trainers and their Pokémon can swing the tide in your favor, but their unpredictable nature makes them a double-edged sword.",
    "category": "services",
    "price": 25000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Spectral Trainer Assistance",
      "Unpredictable Fidelity"
    ],
    "vendor": "league_store",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spectral Trainer Assistance",
        "rules": "Activate as an action. For each round you are in battle, the Maelstrom summons a spectral trainer and their Pokémon to fight alongside you. The summoned ally has stats equal to 75% of its original power. At the end of your turn, the effect ends."
      },
      {
        "title": "Unpredictable Fidelity",
        "rules": "The summoned spectral trainer's behavior is unpredictable. They may act against you or leave the battlefield at any time without provocation. Once they choose a course of action, it remains consistent until dismissed."
      }
    ],
    "levelRequirementReason": "Any trainer can access this service to call upon legendary allies, though only those of sufficient experience will find success.",
    "vendorReason": "The League Store specializes in services that harness the power of legend and lore for modern battles.",
    "shippingDetail": "Ships within the week via Temporal Courier's time-sensitive delivery service, ensuring you receive your Maelstrom promptly.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "Lasts for one round per use.",
      "endsWhen": "At the end of your turn or when dismissed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This service is priced at 1000 XP, reflecting its ability to call upon legendary allies without the need for a specific trainer's power level.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:13:29.234665+00:00",
    "aiReviewedAt": "2026-07-25T03:13:29.234665+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_waning_chronos_resonance_curiosity": {
    "id": "pokemon_item_waning_chronos_resonance_curiosity",
    "name": "Waning Chronos Resonance Fragment",
    "description": "The Waning Chronos Resonance Fragment hums with a melancholic resonance, a fragment of time's forgotten pulse. This curious relic allows its wielder to perceive their surroundings in slow motion, granting an uncanny ability to react to threats faster than the eye can see. However, this heightened awareness comes at a cost—striking with lethal precision becomes slightly more challenging, as if the very flow of battle tempers one's edge.",
    "category": "curiosities",
    "price": 1300,
    "icon": "⏳",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Temporal Perception",
      "Reduced Attack Power"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Swift Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Perception",
        "rules": "Activates as a reaction. When you take damage or are subjected to an effect that targets you, you can use your reaction to gain advantage on the next attack roll before the start of your next turn. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Reduced Attack Power",
        "rules": "Reduces your melee and ranged weapon attack rolls by 2 until your next long rest. This reduction does not affect ability checks or saving throws."
      }
    ],
    "levelRequirementReason": "This fragment requires a certain level of experience to harness its temporal effects without risking overextension.",
    "vendorReason": "The Safari Shop specializes in rare and unusual artifacts, including time-related curiosities like the Waning Chronos Resonance Fragment.",
    "shippingDetail": "Ships within 3 days via Swift Courier for expedited delivery to your doorstep.",
    "usage": {
      "activation": "Reaction",
      "duration": "1 minute, recharges after a long rest",
      "endsWhen": "The effect ends when you take damage or are subjected to an effect that targets you while the duration is active. It also ends if you fall unconscious or die.",
      "charges": "Once per long rest"
    },
    "priceReason": "This relic strikes a balance between its unique temporal abilities and the cost of procuring such a fragment from the depths of time.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T14:45:21.717396+00:00",
    "aiReviewedAt": "2026-07-25T14:45:21.717396+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_chronal_echoes_eater": {
    "id": "the_edge_item_chronal_echoes_eater",
    "name": "The Chronal Echoes Eater - Mk.78 Delta",
    "description": "The Chronal Echoes Eater - Mk.78 Delta hums with dark obsidian, absorbing temporal distortions and briefly warping time around its wielder. This fragment can accelerate or decelerate time for a few moments, making enemies' attacks slow to a crawl while the user's movements blur into a dizzying sprint. It's a terrifyingly precise manipulation that leaves users feeling as if they've aged decades in an instant—or been frozen in place.",
    "category": "equipment",
    "price": 89000,
    "icon": "⏳",
    "stock": 42,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Acceleration",
      "Decelerated Attacks"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "graviton_drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Acceleration",
        "rules": "When activated, the wielder gains a +2 bonus to Dexterity (Acrobatics) checks and can increase their movement speed by 10 feet for 1 minute. This effect ends when it is used again or after the duration expires."
      },
      {
        "title": "Decelerated Attacks",
        "rules": "For 3 rounds, all ranged attacks made against the wielder are reduced to half-speed (range increment halved). This effect has no save DC and can be activated once per long rest."
      }
    ],
    "levelRequirementReason": "The Chronal Echoes Eater requires a minimum of 15 levels to wield, due to its complex temporal mechanics.",
    "vendorReason": "The abyss trader has an extensive collection of ancient and forbidden artifacts, including this fragment from the void's own time-woven core.",
    "shippingDetail": "Ships via graviton drone in a sealed temporal bubble to prevent any unintended distortions during transit.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until used again",
      "endsWhen": "Used again or after the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The Chronal Echoes Eater is priced at 1000 XP, reflecting its unique temporal properties and limited availability.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T03:13:58.985522+00:00",
    "aiReviewedAt": "2026-07-25T03:13:58.985522+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_final_nether_curiosity": {
    "id": "the_edge_item_final_nether_curiosity",
    "name": "The Final Nether Curiosity - Obsidian Shard of Regression",
    "description": "The Final Nether Curiosity - Obsidian Shard of Regression is a jagged obsidian shard that hums with ethereal energy. By holding it, you can briefly reverse time, causing enemies to falter and reveal hidden secrets, but the echoes of alternate timelines may drive your mind mad if overused. This relic is said to have been crafted from the remnants of forgotten realities, left behind by ancient beings who dabbled in temporal sorcery.",
    "category": "curiosities",
    "price": 5100,
    "icon": "🌀",
    "stock": 17,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Temporal Flicker",
      "Revealing Echoes"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "sky_crawler express courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Flicker",
        "rules": "As a bonus action, you can briefly rewind time for yourself and nearby allies. This effect lasts for 1 round, during which enemies are incapacitated as they re-experience the last few moments of their recent actions. The duration ends when the end of your next turn arrives."
      },
      {
        "title": "Revealing Echoes",
        "rules": "While holding this shard, you gain advantage on perception checks to uncover hidden secrets or traps within 30 feet for up to an hour per short rest. This effect ends if you use it during combat or if you fall unconscious."
      }
    ],
    "levelRequirementReason": "This relic requires a minimum level to wield its power without risking mental instability.",
    "vendorReason": "Edge Outpost specializes in rare and ancient artifacts, including relics that manipulate time and space.",
    "shippingDetail": "Ships via sky_crawler's high-speed express service with a 1-day delivery guarantee.",
    "usage": {
      "activation": "Bonus action to trigger Temporal Flicker; passive effect of Revealing Echoes while holding the shard.",
      "duration": "Temporal Flicker lasts 1 round, Revealing Echoes until end of next short rest.",
      "endsWhen": "Ends on your next turn after using Temporal Flicker or if you fall unconscious.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced for a rare, powerful item that requires careful handling and strategic use.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:13:45.897491+00:00",
    "aiReviewedAt": "2026-07-25T03:13:45.897491+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_infinite_fragments_901": {
    "id": "the_edge_item_infinite_fragments_901",
    "name": "Infinite Fragments - Phase Nine Zero One (Stabilized)",
    "description": "The Infinite Fragments - Phase Nine Zero One are iridescent, shimmering shards that seem to bend light and reality itself. Crafted from the very fabric of the infinite planes, these fragments grant brief access to other dimensions but can unravel one's essence if used too long. When activated, they provide a fleeting boost in perception and reflexes, allowing you to see and react with unprecedented clarity before their power warps your surroundings into a shifting maelstrom.",
    "category": "consumables",
    "price": 1300,
    "icon": "✨",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Temporal Perception Boost",
      "Reflexive Shield"
    ],
    "vendor": "final_shop",
    "shippedBy": "Dimensional Express Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Perception Boost",
        "rules": "Activates as an action, providing the user with advantage on Dexterity (Stealth) checks and saving throws for perception-related abilities. This effect lasts for 1 minute upon initial activation but can be reactivated after a short rest."
      },
      {
        "title": "Reflexive Shield",
        "rules": "When activated, creates a shimmering barrier that provides the user with resistance to spatial anomalies and elemental damage from the plane of infinite possibilities. This shield lasts for 1 minute and can be recharged by spending 8 hours in a dimensionally stable environment."
      }
    ],
    "levelRequirementReason": "Requires significant control over one's surroundings and perception to safely use these fragments without causing unintended spatial distortions.",
    "vendorReason": "Final Shop has access to stabilized versions of unstable cosmic artifacts, making the Infinite Fragments - Phase Nine Zero One a regular stock item.",
    "shippingDetail": "Ships via Dimensional Express Courier, ensuring safe and fast delivery through stable planes of existence.",
    "usage": {
      "activation": "Action or Reaction (activate once per short rest)",
      "duration": "1 minute upon activation; reactivates after a short rest",
      "endsWhen": "Effect ends if the user spends more than 10 minutes in its vicinity without resting, or if it is destroyed by a spatial anomaly.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balance of power and risk ensures these fragments are valuable but not overpowered for their rarity.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T03:15:00.131707+00:00",
    "aiReviewedAt": "2026-07-25T03:15:00.131707+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_celestial_ribbon_sworn_of_valor": {
    "id": "pokemon_item_celestial_ribbon_sworn_of_valor",
    "name": "Celestial Ribbons Sworn of Valor",
    "description": "The Celestial Ribbons Sworn of Valor are delicate, shimmering bands woven from captured starlight and the echoes of valorous legends. These ribbons pulse with a celestial energy that enhances your Pokémon's prowess in combat. Wearing them invokes an unyielding spirit, making even the mightiest foes take notice. When donned, these ribbons boost your Pokémon's attack by 20% and speed by 15%, ensuring it stands tall against any challenge.",
    "category": "consumables",
    "price": 5100,
    "icon": "✨",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Boost Attack",
      "Enhance Speed"
    ],
    "vendor": "pokemart",
    "shippedBy": "Winged Pokemon Courier",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Boost Attack",
        "rules": "When activated, the ribbons grant a +20% bonus to your Pokémon's attack for 60 seconds. This effect is instantaneous upon application and lasts until the duration ends or an action is taken that interrupts it."
      },
      {
        "title": "Enhance Speed",
        "rules": "The ribbons also increase your Pokémon's speed by +15% for 60 seconds, making it more agile in battle. This effect is active as soon as the ribbons are worn and ends when the duration expires or an action that stops it is performed."
      }
    ],
    "levelRequirementReason": "This item requires a Pokémon of at least level 30 to ensure it can be used effectively in its intended combat scenarios.",
    "vendorReason": "As trusted distributors of rare and powerful items, Pokemarts stock the Celestial Ribbons Sworn of Valor for trainers seeking to enhance their Pokémon's capabilities in competitive battles.",
    "shippingDetail": "The ribbons are delivered swiftly by Winged Pokemon Couriers, ensuring they reach you in perfect condition and ready for use.",
    "usage": {
      "activation": "Activates on donning the ribbons. Ends after 60 seconds or when interrupted by an action.",
      "duration": "60 seconds",
      "endsWhen": "Duration ends or interrupted by an action",
      "charges": "Unlimited uses"
    },
    "priceReason": "The reduced price reflects a balance between the item's powerful effects and its limited duration, ensuring it remains accessible for trainers of higher-level Pokémon.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:14:12.812372+00:00",
    "aiReviewedAt": "2026-07-25T03:14:12.812372+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_mk17_ribbon_of_the_stone_sentinels": {
    "id": "pokemon_item_mk17_ribbon_of_the_stone_sentinels",
    "name": "Mk.17 Ribbon of the Stone Sentinels",
    "description": "The Mk.17 Ribbon of the Stone Sentinels is a delicate, weathered ribbon forged deep within the heart of Mt. Silas by the ancient guardians known as the Stone Sentinels. This relic grants its wielder fleeting visions into the potential futures, revealing advantageous battle strategies and allowing for timely defensive adjustments. With each use, it harnesses the temporal energies that protect against impending threats, providing a brief yet crucial insight into the flow of time during combat.",
    "category": "equipment",
    "price": 25000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Insight",
      "Defensive Echo"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Ground Pokemon Transport",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Temporal Insight",
        "rules": "When used as an action, this effect grants you advantage on one ability check or attack roll at the start of your turn. This ability is limited to once per short rest."
      },
      {
        "title": "Defensive Echo",
        "rules": "This effect provides a +5 bonus to AC for 60 seconds upon activation as an action. The duration can be extended by one additional round if you use your reaction to dodge an attack, at the cost of expending its remaining uses."
      }
    ],
    "levelRequirementReason": "The profound ancient magic requires a level 45 character to harness and wield effectively.",
    "vendorReason": "Safari Shop has established trade relations with the Stone Sentinels, making this item available for those who seek protection and strategic advantage in their adventures.",
    "shippingDetail": "Delivered within three days of purchase. Requires a special delivery permit due to its arcane nature.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "60 seconds, extendable with reaction",
      "endsWhen": "Ends upon the end of your next turn or if you use an action or reaction before it ends",
      "charges": "2 charges, recharges after a long rest"
    },
    "priceReason": "The ribbon's rarity and ancient crafting make it a high-demand item, justifying its moderate price.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:14:29.714394+00:00",
    "aiReviewedAt": "2026-07-25T03:14:29.714394+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_ribbon_of_the_gloomthorn_king": {
    "id": "pokemon_item_ribbon_of_the_gloomthorn_king",
    "name": "Ribbon of the Gloomthorn King",
    "description": "The Ribbon of the Gloomthorn King is a chilling, dark-hued silk spun from the thorny vines that encircle the elusive Gloomthorn King's lair. Its touch sends a shiver down one’s spine, and it whispers with an ancient, ethereal voice. When worn in battle, this ribbon weaves a protective shadow veil around you, reducing incoming damage from Ghost and Dark-type attacks by 50%. It also subtly weakens your opponent’s defenses, lowering their Defense stat by 30% for the duration of the fight.",
    "category": "consumables",
    "price": 90000,
    "icon": "🌑",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Shadow Veil",
      "Weaken Opponent"
    ],
    "vendor": "league_store",
    "shippedBy": "Dark Pokemon Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Veil",
        "rules": "Activates as a bonus action. Reduces incoming damage from Ghost and Dark type attacks by 50% for the duration of the battle. Ends when you are no longer wearing it."
      },
      {
        "title": "Weaken Opponent",
        "rules": "Activates on command, reducing your opponent's Defense stat by 30% for a period of 60 seconds. This effect has a recharge time of one long rest and requires the use of an action to activate."
      }
    ],
    "levelRequirementReason": "The Ribbon is accessible to all trainers, offering a strategic advantage regardless of their level.",
    "vendorReason": "The league store stocks this item as it's favored by seasoned and novice trainers alike for its versatile defensive and offensive benefits.",
    "shippingDetail": "Ships under cover of night, ensuring the ribbon arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to activate Shadow Veil; Action or Reaction to weaken opponent.",
      "duration": "Until end of battle for Shadow Veil; 60 seconds for weakening effect.",
      "endsWhen": "Shadow Veil ends when removed, Weakening Opponent ends at the start of your next turn after use.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure it remains a strategic but not overpowered item for all trainers.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-25T03:15:14.934381+00:00",
    "aiReviewedAt": "2026-07-25T03:15:14.934381+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_crimson_quillwright_gloves": {
    "id": "faerun_item_crimson_quillwright_gloves",
    "name": "Crimson Quillwright's Gloves",
    "description": "Crimson Quillwright's Gloves are supple leather gloves, dyed with pigment from a slain crimson dragon, imbued with ancient runes that pulse with fiery elegance. The gloves enhance your precision in writing and enchanting spells, granting advantage on Dexterity (Sleight of Hand) checks and increasing the potency of magical enchantments you cast by +1d4. Their intricate stitching not only bolsters your focus but also provides minor flame resistance, allowing you to shrug off small bursts of fire without harm.",
    "category": "equipment",
    "price": 1400,
    "icon": "✍️",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "enhanced enchanting",
      "advantage on writing"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "Griffon Express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Enhanced Enchanting",
        "rules": "When you cast a spell from the Transmutation or Illusion school, this item increases its damage dice by +1d4. This effect lasts for the duration of one short rest."
      },
      {
        "title": "Advantage on Writing Checks",
        "rules": "You gain advantage on Dexterity (Sleight of Hand) checks when using these gloves. The effect is active as long as you are wearing them."
      }
    ],
    "levelRequirementReason": "The gloves require a minimum character level of 15 to ensure the user has sufficient control and experience in spellcasting and enchanting.",
    "vendorReason": "Sword Coast Traders are renowned for their unique magical artifacts, making them the perfect vendor for these specially crafted gloves.",
    "shippingDetail": "Ships via griffin courier with same-day delivery within the Sword Coast region.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until removed or until a short rest is completed.",
      "endsWhen": "The gloves are removed, or after one short rest if enhancing an enchantment spell.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The price reflects the unique crafting process and dragon pigment used in their creation, as well as their rarity and utility in both combat and spellcasting scenarios.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T03:14:51.002753+00:00",
    "aiReviewedAt": "2026-07-25T03:14:51.002753+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_ambergris_chronometer_curiosity": {
    "id": "faerun_item_ambergris_chronometer_curiosity",
    "name": "Ambergris Chronometer of the Lost Tide",
    "description": "The Ambergris Chronometer of the Lost Tide is a bizarre device crafted from polished ambergris and salvaged clockwork, salvaged from ancient ships. Its face glows with a soft, bioluminescent light that shifts to mimic the phases of lost tides. Holding it grants glimpses into long-lost coastal settlements, revealing echoes of past events related to the sea, including forgotten currents and shipwrecks. The chronometer's hands also subtly move in sync with the tides, offering a chance to gain temporary 'luck' buffs based on tidal shifts.",
    "category": "curiosities",
    "price": 5100,
    "icon": "⏳",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Tidal Echoes",
      "Fortuitous Luck"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "Sea Siren Express",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Tidal Echoes",
        "rules": "As an action, the wearer can activate the chronometer to reveal echoes of past events related to the sea within a 120-foot radius. These echoes provide +1d4 temporary hit points and grant advantage on one saving throw against water-based effects until the start of their next turn."
      },
      {
        "title": "Fortuitous Luck",
        "rules": "The chronometer grants a +1 luck bonus to one ability check made while holding it. This effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "Only the most seasoned explorers and scholars can wield this powerful device, which requires significant knowledge of ancient sea lore.",
    "vendorReason": "Baldur's Bazaar caters to adventurers seeking unique and powerful artifacts for their journeys.",
    "shippingDetail": "Ships via a fleet of enchanted ships, arriving within 3 days from the nearest coastal port.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until start of next turn for each use",
      "endsWhen": "The chronometer runs out of charges or is destroyed by extreme water damage.",
      "charges": "5 uses, recharges after a long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and the unique utility in exploration and survival.",
    "priceOriginal": 1750,
    "priceReviewedAt": "2026-07-25T03:14:46.441443+00:00",
    "aiReviewedAt": "2026-07-25T03:14:46.441443+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_sigil_of_stone_wright_equipment": {
    "id": "faerun_item_sigil_of_stone_wright_equipment",
    "name": "Sigil of Stone Wright’s Binding",
    "description": "The Sigil of Stone Wright’s Binding is a handcrafted glove, its surface etched with ancient runes that glow faintly in the dark. Crafted from a single piece of petrified wood found deep within the mountains, this relic strengthens your bond with stone and earth. Its protective sigils resonate with the power of dwarven warding rituals, granting you resistance to stone-based damage and enhancing your strength when manipulating rock or earth. With each use, it channels raw earth magic, allowing you to create small stone constructs that can serve as temporary fortifications or tools.",
    "category": "equipment",
    "price": 90000,
    "icon": "⛰️",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Earth Magic Mastery",
      "Stone Resistance"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Giant Worm Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Earth Magic Mastery",
        "rules": "As a bonus action, activate the sigil's power. For the next minute, your earth magic abilities are enhanced by +2 to all checks and saving throws related to stone or earth elements. This effect can be used once per long rest."
      },
      {
        "title": "Stone Resistance",
        "rules": "You gain resistance to bludgeoning damage from non-magical attacks. Additionally, when you make an attack with a weapon made of stone, the damage increases by +1d6. This effect is active as long as you are wearing the sigil."
      }
    ],
    "levelRequirementReason": "The sigil requires a minimum level to ensure that only experienced adventurers can utilize its ancient magic.",
    "vendorReason": "Waterdeep Market is renowned for its access to rare and powerful artifacts, including this dwarven relic.",
    "shippingDetail": "The sigil requires special handling by the giant worm courier due to its fragile nature. Delays are possible.",
    "usage": {
      "activation": "Bonus action to activate earth magic abilities; active as long as worn, resistance always active.",
      "duration": "Earth Magic Mastery lasts for one minute, Stone Resistance is always active while wearing it.",
      "endsWhen": "Sigil can be recharged with a short rest or by removing and reattaching the sigil.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The sigil's price reflects its rarity, ancient craftsmanship, and the raw earth magic it contains.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-25T03:15:23.273046+00:00",
    "aiReviewedAt": "2026-07-25T03:15:23.273046+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_whispering_bane_of_morgoth": {
    "id": "middle_earth_item_the_whispering_bane_of_morgoth",
    "name": "The Whispering Bane of Morgoth’s Teeth",
    "description": "The Whispering Bane of Morgoth’s Teeth is a twisted silver ring etched with ancient runes that murmur forgotten prophecies. Its surface glows faintly, pulsing with an icy chill that seems to ward off the lingering shadows of Morgoth's armies. The ring grants temporary resistance to shadow magic and allows its wearer to perceive possible futures for brief moments, though at a cost—each use slows nearby undead creatures' movement speed.",
    "category": "equipment",
    "price": 1400,
    "icon": "💀",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Resist Shadow Magic",
      "Brief Future Glimpse"
    ],
    "vendor": "elven_market",
    "shippedBy": "Winged Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Resist Shadow Magic",
        "rules": "The wearer gains temporary resistance to shadow-based spells and effects. This effect lasts for 1 minute or until the wearer enters a source of bright light."
      },
      {
        "title": "Brief Future Glimpse",
        "rules": "Once per long rest, the wearer can cast the divination spell (save DC 15) without expending a spell slot. However, this effect slows nearby undead creatures within 30 feet by half their movement speed for 2 minutes."
      }
    ],
    "levelRequirementReason": "This ring requires significant magical power to harness its abilities effectively.",
    "vendorReason": "The elven market is known for its trade in ancient and powerful relics, making it a fitting place for such an artifact.",
    "shippingDetail": "Ships via the Winged Courier, delivered within one week of order placement.",
    "usage": {
      "activation": "Passive effect; requires no action to activate.",
      "duration": "Instantaneous for Resist Shadow Magic; 1 minute or until entering bright light. Brief Future Glimpse is a once-per-long-rest ability.",
      "endsWhen": "Resist Shadow Magic ends when the wearer enters bright light; Brief Future Glimpse ends after its duration expires or upon using it again.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "This ring's price reflects its rare material, ancient design, and the power of its effects.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T03:15:09.840086+00:00",
    "aiReviewedAt": "2026-07-25T03:15:09.840086+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_ancient_shard_of_gondor’s_resolve": {
    "id": "middle_earth_item_the_ancient_shard_of_gondor’s_resolve",
    "name": "The Ancient Shard of Gondor’s Resolve - The Sunstone Fragment",
    "description": "The Ancient Shard of Gondor’s Resolve - The Sunstone Fragment is a polished obsidian fragment, its surface etched with ancient runes that glow softly in the light. Crafted from the heart of Mount Mindolluin, it holds the enduring spirit and resilience of Gondor's defenders against Sauron's might during the Last Alliance. This shard not only grants the wielder temporary fortitude but also heals minor wounds with radiant energy.",
    "category": "consumables",
    "price": 5100,
    "icon": "🔥",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Radiant Healing",
      "Fortified Resolve"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "Stone Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiant Healing",
        "rules": "When activated, this shard restores 1d6 + Constitution modifier hit points to the wielder. This effect is instantaneous and can be used once per long rest."
      },
      {
        "title": "Fortified Resolve",
        "rules": "While holding this shard, the wielder gains temporary immunity to fear effects for 1 hour. Additionally, they gain advantage on saving throws against charm spells and similar effects. This effect persists as long as the shard is held."
      }
    ],
    "levelRequirementReason": "This shard requires no level, as its power lies in its ancient heritage rather than the wielder’s proficiency.",
    "vendorReason": "The dwarves of Erebor have long traded with Gondor and possess knowledge of such relics from their ancient alliance.",
    "shippingDetail": "Ships via Stone Cart, ensuring safe delivery through the mountain passes.",
    "usage": {
      "activation": "Use an action to activate this shard’s effects.",
      "duration": "Instantaneous for healing; Fortified Resolve lasts until the start of your next turn after you stop holding it.",
      "endsWhen": "The effect ends when the wielder no longer holds the shard or at the end of their next turn.",
      "charges": "Unlimited, as long as the shard is held."
    },
    "priceReason": "Its rarity and historical significance justify a price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:15:19.358332+00:00",
    "aiReviewedAt": "2026-07-25T03:15:19.358332+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_shire_rune_of_longbottom_harvest": {
    "id": "middle_earth_item_the_shire_rune_of_longbottom_harvest",
    "name": "The Shire Rune of Longbottom Harvest - The Seedling’s Blessing",
    "description": "The Shire Rune of Longbottom Harvest, a small and intricately carved wooden rune nestled within a polished acorn, is crafted from the sacred wood of the Longbottom family's ancestral tree. This rune accelerates the growth of plants and imbues its wielder with a touch of Hobbit cheerfulness, fostering resilience and vitality. The seedling’s blessing grants a temporary boost to one's physical strength and resistance to environmental hazards.",
    "category": "curiosities",
    "price": 380,
    "icon": "🌱",
    "stock": 95,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Accelerates plant growth",
      "Enhances vitality"
    ],
    "vendor": "shire_shop",
    "shippedBy": "Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Accelerated Plant Growth",
        "rules": "This rune accelerates the healing rate of plants within a 10-foot radius, effectively doubling their growth speed for one hour. The effect requires no action to activate and is interrupted if the wielder leaves the area."
      },
      {
        "title": "Enhanced Vitality",
        "rules": "The wielder gains temporary hit points equal to half of their level (rounded down) for 10 minutes when in contact with the rune. This effect can be used once per long rest and is negated on a successful DC 15 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "This rune is suitable for beginners, providing an accessible starting point for adventurers to enhance their environment.",
    "vendorReason": "The Shire Shop specializes in items that reflect the natural and cultural heritage of Middle-earth, making this rune a fitting addition.",
    "shippingDetail": "Ships via Pony Express for expedited delivery within three days.",
    "usage": {
      "activation": "Passive effect upon contact with the rune.",
      "duration": "One hour of accelerated plant growth, ten minutes of enhanced vitality.",
      "endsWhen": "The effects expire naturally or are interrupted if the wielder leaves the area for more than an hour.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This rune is crafted with sacred wood and imbued with powerful magic, making it a valuable yet balanced addition to any adventurer's inventory.",
    "priceOriginal": 400,
    "priceReviewedAt": "2026-07-25T03:15:56.056673+00:00",
    "aiReviewedAt": "2026-07-25T03:15:56.056673+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_verdant_gifted_rope_of_inverted_fall": {
    "id": "grand_country_item_verdant_gifted_rope_of_inverted_fall",
    "name": "Verdant Gifted's Ropes",
    "description": "Verdant Gifted's Ropes are spun from the fibers of gravity-resistant moss, glowing with an ethereal luminescence that shifts in eerie patterns as you move. These ropes offer a surreal means to traverse inverted surfaces with ease and speed, allowing for quick passage even when the world seems upside down. The knots twist and untwist on their own, adding both an unsettling and efficient element to your journey through this bewildering architecture.",
    "category": "equipment",
    "price": 5100,
    "icon": "🌿",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "gravity_inversion",
      "increased_movement_speed"
    ],
    "vendor": "side_seller",
    "shippedBy": "rotating_platform",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Gravity Inversion",
        "rules": "When activated by a bonus action, the ropes invert gravity for you and up to three allies within reach. This effect lasts until all creatures move at least 10 feet or take an action. While inverted, any fall damage is reduced by half (rounded down). A DC 15 Dexterity saving throw can negate this effect."
      },
      {
        "title": "Increased Movement Speed",
        "rules": "While the gravity inversion effect is active, your movement speed increases by 30 feet for you and up to three allies. This increase remains until all creatures move at least 10 feet or take an action. The effect ends if any creature other than yourself takes a Dexterity saving throw."
      }
    ],
    "levelRequirementReason": "Verdant Gifted's Ropes require a minimum level to ensure users can handle the unique gravity manipulation and speed boosts.",
    "vendorReason": "Side Seller, known for their eccentric yet practical inventory, carries these ropes as a testament to their commitment to both novelty and utility.",
    "shippingDetail": "The rotating platform ensures the ropes arrive in perfect condition, despite their delicate nature.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until all creatures move at least 10 feet or take an action",
      "endsWhen": "A creature other than yourself takes a Dexterity saving throw",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the unique utility and the rarity of the materials used in its creation.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T14:45:39.456510+00:00",
    "aiReviewedAt": "2026-07-25T14:45:39.456510+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_mk_73_elevated_rope_of_the_spiral_drift": {
    "id": "grand_country_item_mk_73_elevated_rope_of_the_spiral_drift",
    "name": "Mk.73 Elevated Ropes",
    "description": "Crafted from solidified echoes of a perpetually spinning vortex, these ropes ascend with unnerving grace, defying the side's fluctuating gravity fields. Climb them and you feel as if you're being gently pulled into a dizzying spiral, each step a dance against the fabric of time itself. The Mk.73 Elevated Ropes are not just tools for ascent; they are conduits to the very core of the Spiral Drift's magic.",
    "category": "equipment",
    "price": 25000,
    "icon": "🌀",
    "stock": 9,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "enhanced_climb",
      "time_defiance"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Gravity Sled",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Climb",
        "rules": "As an action, you can cause a rope to generate a minor temporal distortion, providing advantage on Strength (Athletics) checks made with the rope. This effect lasts for 1 hour and can be used once per long rest."
      },
      {
        "title": "Time Defiance",
        "rules": "The ropes provide resistance against vortex effects within a 30-foot radius. Any creature within this area that attempts to use abilities or spells with the 'vortex' keyword must make a DC 15 Constitution saving throw, taking no effect on failure."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers at all levels, providing them with enhanced tools for exploration and safety.",
    "vendorReason": "The Vertical Vendor specializes in items that assist climbers and explorers, making the Mk.73 Elevated Ropes a perfect addition to their inventory.",
    "shippingDetail": "Ships via the Gravity Sled, ensuring safe delivery even through the most unpredictable terrain.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour per use",
      "endsWhen": "After one long rest between uses or when destroyed in a vortex",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, these ropes offer significant utility and safety for adventurers of all levels.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:15:36.067569+00:00",
    "aiReviewedAt": "2026-07-25T03:15:36.067569+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_the_layered_echo_anchor_of_suspended_weight": {
    "id": "grand_country_item_the_layered_echo_anchor_of_suspended_weight",
    "name": "The Layered Echo Anchor of Suspended Weight",
    "description": "The Layered Echo Anchor of Suspended Weight is a delicate, crystalline device forged from sound waves and negative space, capable of creating an ephemeral pocket where gravity subtly bends to near-weightlessness. Within its shimmering field, objects float in mid-air as if tethered by the very fabric of sound itself. This artifact's power can be harnessed for brief moments, allowing explorers to traverse narrow crevasses or manipulate heavy loads with ease.",
    "category": "curiosities",
    "price": 90000,
    "icon": "⚖️",
    "stock": 17,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "localized_gravity_reduction",
      "temporary_buoyancy"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Localized Gravity Reduction",
        "rules": "Activating the anchor creates a localized area of near-weightlessness within a 10-foot radius, centered on the user. This effect lasts for up to 1 minute per use and can be extended by one additional minute with an action. Creatures in this zone move at half speed but gain advantage on Strength checks and ability saving throws related to balance."
      },
      {
        "title": "Temporary Buoyancy",
        "rules": "As a bonus action, the user can activate a buoyant field that allows them or a willing creature within 5 feet to float in place for up to 1 minute. The effect ends if the target moves more than 5 feet from its starting position."
      }
    ],
    "levelRequirementReason": "This device is accessible to all adventurers, as it requires no specific class or background and can be used by anyone.",
    "vendorReason": "Layer Market specializes in rare curiosities that enhance the capabilities of explorers and adventurers.",
    "shippingDetail": "Ships via a dimensional portal, ensuring safe delivery within hours of purchase.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Up to 1 minute per use; can be extended by one additional minute with an action",
      "endsWhen": "Effect ends if the user moves more than 5 feet from their starting position, or after its duration expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects the item's rarity and utility without overshadowing other items of equivalent value.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-25T03:16:09.663722+00:00",
    "aiReviewedAt": "2026-07-25T03:16:09.663722+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_the_echoing_center_walker": {
    "id": "doughnut_hole_item_the_echoing_center_walker",
    "name": "The Echoing Center Walker",
    "description": "The Echoing Center Walker is a sleek obsidian walker, its surface etched with ancient runes that hum faintly as it glides across the ground. Crafted from fragments of forgotten void matter, this device accelerates your step and leaves behind shimmering trails of distorted reality, as if the very fabric of space-time bends to your will. The walker's core, a pulsating heart of residual void energy, subtly warps obstacles in its path, allowing you to phase through them with ease.",
    "category": "equipment",
    "price": 5100,
    "icon": "👣",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Accelerated Strides",
      "Void Phasing"
    ],
    "vendor": "Hole Hawker",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Accelerated Strides",
        "rules": "While wearing the Echoing Center Walker, your walking speed increases by 10 feet. This effect is passive and does not require any action to activate."
      },
      {
        "title": "Void Phasing",
        "rules": "Once per short rest, you can use an action to focus the walker's energy to phase through a non-magical solid obstacle. You gain advantage on Strength (Athletics) checks for 1 minute after using this ability, but you must make a DC 15 Constitution saving throw at the start of each of your turns while in this form; failing the save causes you to drop prone and lose all benefits from this effect."
      }
    ],
    "levelRequirementReason": "The walker's complex void mechanics require a certain mastery of physical control and energy manipulation.",
    "vendorReason": "Hole Hawker specializes in items that manipulate the fabric of reality, making it an ideal vendor for this otherworldly device.",
    "shippingDetail": "The walker requires special packaging to prevent it from warping nearby objects during transit. Delays may occur due to extra security checks at dimensional borders.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous phase through obstacle, lasts 1 minute after successful use.",
      "endsWhen": "You make a failed Constitution saving throw or drop prone after phasing through an obstacle.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The walker's unique void manipulation and rarity justify its price, making it a valuable asset for those who venture into the unknown.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:16:05.637555+00:00",
    "aiReviewedAt": "2026-07-25T03:16:05.637555+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_ancient_rot_singularities_9": {
    "id": "doughnut_hole_item_ancient_rot_singularities_9",
    "name": "Ancient Rot Singularities - 9",
    "description": "Ancient Rot Singularities - 9 are clusters of pulsating, fungal growths harvested from the deepest recesses of the void. Their sickly sweet odor permeates the air, causing nearby organic matter to decompose at an alarming rate. These singularities emit a corrosive aura that reduces the armor and defense of living creatures in their vicinity. Upon contact with flesh, they create localized zones of accelerated decomposition, turning even the strongest warriors into rotting husks.",
    "category": "consumables",
    "price": 25000,
    "icon": "🍄",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Rapid Decay",
      "Corrosive Aura"
    ],
    "vendor": "center_seller",
    "shippedBy": "Void Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rapid Decay",
        "rules": "When a creature enters an Ancient Rot Singularity's area of effect, it must succeed on a DC 18 Constitution saving throw or take 2d6 points of necrotic damage each turn until the singularity is destroyed. The singularity can target up to three creatures within its range."
      },
      {
        "title": "Corrosive Aura",
        "rules": "The Ancient Rot Singularity emits a corrosive aura that reduces the AC and Constitution of all living targets in a 10-foot radius by 2, starting at the beginning of each creature's turn. This effect lasts until the singularity is destroyed or a successful DC 15 Constitution save is made."
      }
    ],
    "levelRequirementReason": "This level requirement ensures that even low-level adventurers can access this powerful but dangerous item.",
    "vendorReason": "Center Seller specializes in rare and exotic items, making Ancient Rot Singularities a fitting addition to their inventory.",
    "shippingDetail": "Due to the volatile nature of these singularities, they are transported via specialized Void Freight containers, which can only be handled by trained personnel.",
    "usage": {
      "activation": "Instantaneous activation upon contact with a creature or object.",
      "duration": "Until destroyed or removed from an area.",
      "endsWhen": "The singularity is destroyed or its effect ends when the target makes a successful saving throw.",
      "charges": "Unlimited, but limited to one per day due to their volatile nature."
    },
    "priceReason": "The price reflects the rarity and potential danger of handling these singularities, balancing with their utility in combat.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:16:49.469948+00:00",
    "aiReviewedAt": "2026-07-25T03:16:49.469948+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_forbidden_null_prism_of_the_abyss": {
    "id": "doughnut_hole_item_forbidden_null_prism_of_the_abyss",
    "name": "Forbidden Null Prism of the Abyss",
    "description": "The Forbidden Null Prism of the Abyss is a crystalline shard that glows with an eerie, spectral light. It emanates a freezing cold that chills to the bone and distorts reality around it. Upon exposure, time seems to slow and all light is drawn into its heart, leaving only darkness in its wake. This prism is said to be forged from the very void between dimensions, and only those of the highest caliber dare to wield such a dangerous artifact.",
    "category": "forbidden",
    "price": 290000,
    "icon": "🌌",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Void Distortion",
      "Light Absorption"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Phantom Express",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Void Distortion",
        "rules": "Activates as an action within a 10-foot radius. All creatures in the area must make a DC 20 Constitution saving throw or be affected by temporal stasis for up to 1 minute, during which time they are reduced to half speed and cannot take reactions."
      },
      {
        "title": "Light Absorption",
        "rules": "The prism continuously draws all light sources within its 30-foot radius into itself. Any creature with darkvision within the area must succeed on a DC 18 Wisdom saving throw or be blinded until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Only those who have mastered their own power and understanding of reality can wield such an unstable artifact.",
    "vendorReason": "The Void Vendor is known for dealing in the most dangerous and forbidden items, making this prism a fitting addition to his inventory.",
    "shippingDetail": "Delivery through Phantom Express requires a special void package that protects both sender and recipient from the artifact's destabilizing effects.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute per day, once used",
      "endsWhen": "The effect ends when the duration expires or the user takes any action other than a move action.",
      "charges": "One use per day"
    },
    "priceReason": "This artifact's rarity and potential for catastrophic misuse justify its high price.",
    "priceOriginal": 55000,
    "priceReviewedAt": "2026-07-25T03:16:22.632741+00:00",
    "aiReviewedAt": "2026-07-25T03:16:22.632741+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_crimsonwood_dancer": {
    "id": "faerun_item_crimsonwood_dancer",
    "name": "Sacred Dancer's Boots of the Whispering Barrows",
    "description": "The Sacred Dancer's Boots of the Whispering Barrows are crimson leather footwear crafted from the heartwood of a fallen ancient tree deep within the Whispering Barrows. Each step you take resonates with forgotten prayers, subtly guiding your movements through treacherous terrain and attracting Silvanus's blessings. These boots not only grant unparalleled speed but also offer minor resistance to poison, ensuring that even the most deadly toxins are mitigated slightly.",
    "category": "equipment",
    "price": 5100,
    "icon": "👣",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "unparalleled speed",
      "resistance to poison"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "winged_courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Unparalleled Speed",
        "rules": "While wearing these boots, you have advantage on Dexterity (Acrobatics) checks and can move up to your walking speed +10 feet. This effect lasts until the start of your next turn."
      },
      {
        "title": "Resistance to Poison",
        "rules": "You gain resistance to poison damage for 8 hours after wearing these boots in battle or exploration. This effect is exhausted if you use a short rest, and you cannot benefit from this effect more than once per long rest."
      }
    ],
    "levelRequirementReason": "These boots require significant experience to master their whispering guidance and resilience.",
    "vendorReason": "Waterdeep's Market is known for its diverse and rare wares, including items with deep lore and magical properties like the Sacred Dancer's Boots.",
    "shippingDetail": "The boots are delivered swiftly by winged courier, arriving within a single day of purchase.",
    "usage": {
      "activation": "Passive effect upon donning the boots.",
      "duration": "Until your next turn or until you take a short rest.",
      "endsWhen": "After one long rest or if you use a short rest during the duration.",
      "charges": "Unlimited"
    },
    "priceReason": "The boots' rarity, deep lore, and magical properties justify their balanced price of 1000 XP.",
    "priceOriginal": 1250,
    "priceReviewedAt": "2026-07-25T03:16:26.167909+00:00",
    "aiReviewedAt": "2026-07-25T03:16:26.167909+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_chronosplitter_artifact": {
    "id": "faerun_item_chronosplitter_artifact",
    "name": "Mk.7 Chronosplitter - Obsidian Fragment of Temporal Distortion",
    "description": "The Mk.7 Chronosplitter, a fractured obsidian fragment glowing with temporal distortion, is said to be a remnant of the ancient Obsidicium's core. Its pulsating surface emits residual chronomantic energy that allows for brief disruptions in time, primarily accelerating movement or decelerating reactions within a small radius. Misusing its power can unravel one's own timeline; thus, it should only be wielded by those who understand the risks and consequences.",
    "category": "forbidden",
    "price": 100000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "temporal acceleration",
      "momentary temporal deceleration"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "shadow_ship",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Acceleration",
        "rules": "As a bonus action, the user can accelerate their movement speed by 50% for up to 1 minute. This effect has no range and is limited to once per long rest."
      },
      {
        "title": "Momentary Deceleration",
        "rules": "The user can decelerate time in a 20-foot radius around them, causing all creatures within this area to move at half speed for up to 1 minute. This effect has no save DC and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires significant control over time magic; thus, it is only available to high-level spellcasters.",
    "vendorReason": "The Bazaar specializes in rare and powerful artifacts that are not widely traded, including chronomantic relics like the Mk.7 Chronosplitter.",
    "shippingDetail": "Ships under cover of night to ensure secrecy and safety during transit.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Up to 1 minute, recharge at the end of a long rest",
      "endsWhen": "The duration ends when it is used up; can be canceled by using another effect from this item",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price considering the rarity and potential danger of using such a powerful temporal artifact.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-25T03:16:59.215395+00:00",
    "aiReviewedAt": "2026-07-25T03:16:59.215395+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_sunstone_guardian": {
    "id": "faerun_item_sunstone_guardian",
    "name": "The Sunstone Guardian's Boots – Protector of the Amber Expanse",
    "description": "The Sunstone Guardian's Boots, forged in the heart of a dying volcano by the ancient forges of the lost city of Myth Drannor, radiate a warm, golden glow. Their essence is drawn from a radiant sun that once burned brightly over the Amber Expanse, imbuing them with unparalleled protection and resilience. Wearing these boots grants immunity to fire damage, and they offer an unyielding shield against psychic attacks, making them indispensable for explorers navigating treacherous territories.",
    "category": "equipment",
    "price": 25000,
    "icon": "🔥",
    "stock": 9,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Immunity to Fire Damage",
      "Resilience Against Psychic Attacks"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "giant hawk courier",
    "levelRequirement": 28,
    "effectDetails": [
      {
        "title": "Immunity to Fire Damage",
        "rules": "The wearer gains immunity to fire damage. This effect is passive and lasts until the boots are removed or destroyed."
      },
      {
        "title": "Resilience Against Psychic Attacks",
        "rules": "The wearer has advantage on saving throws against psychic attacks. This effect persists as long as the boots remain on their feet, up to a maximum of 10 minutes per long rest."
      }
    ],
    "levelRequirementReason": "The complexity and power of these boots necessitate a high level character to effectively wield them.",
    "vendorReason": "As purveyors of ancient artifacts and lost knowledge, Sword Coast Traders have the means to acquire such an item.",
    "shippingDetail": "The boots are delivered by a giant hawk courier, ensuring swift arrival but with potential for delays due to weather conditions.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until removed or destroyed.",
      "endsWhen": "When the wearer removes the boots or they are destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's rarity and the specialized crafting required, making it a significant but fair value for adventurers.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T03:16:45.648815+00:00",
    "aiReviewedAt": "2026-07-25T03:16:45.648815+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_chromatic_link_bane": {
    "id": "internet_item_chromatic_link_bane",
    "name": "The Radiant Chromatic Link Bane",
    "description": "The Radiant Chromatic Link Bane is a pulsating, iridescent conduit woven from compressed bandwidth and viral echoes. It grants you heightened perception within data streams, allowing you to see through digital camouflage and spot hidden patterns. Be wary of its volatile nature; prolonged exposure can induce fragmented visions that distort your reality for days. This item's core pulses with a mesmerizing light, hinting at the power it holds over information fluxes.",
    "category": "equipment",
    "price": 5100,
    "icon": "✨",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Heightened Perception",
      "Digital Camouflage Detection"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heightened Perception",
        "rules": "As an action, activate this item to grant you advantage on Wisdom (Perception) checks related to electronic devices and data streams for 1 minute. This effect ends if you are exposed to more than one hour of unfiltered digital content in a single sitting."
      },
      {
        "title": "Digital Camouflage Detection",
        "rules": "This item grants you the ability to detect digital camouflage within a 30-foot radius as a bonus action. You can use this ability once per short or long rest, and it fails if used more than once in any 24-hour period."
      }
    ],
    "levelRequirementReason": "The item is designed to assist those who navigate the digital world, making it accessible for players of all levels.",
    "vendorReason": "Cyber Market specializes in tech-related items and this unique piece fits perfectly with their offerings.",
    "shippingDetail": "Ships via Drone Delivery, ensuring fast and secure transportation of the item to your doorstep.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "1 minute (Heightened Perception) / Instantaneous (Digital Camouflage Detection)",
      "endsWhen": "Exposure to more than one hour of unfiltered digital content in a single sitting, or at the start of your next short or long rest (for Digital Camouflage Detection).",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and unique functionality justify its price as it provides significant utility without being overpowered.",
    "priceOriginal": 1875,
    "priceReviewedAt": "2026-07-25T03:17:04.181714+00:00",
    "aiReviewedAt": "2026-07-25T03:17:04.181714+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_pixelated_resonance_shard": {
    "id": "internet_item_pixelated_resonance_shard",
    "name": "The Pixelated Resonance Shard of the Lost Signal",
    "description": "Recovered from a defunct server farm deep within the East of Midlands, this shard vibrates with residual data echoes, amplifying the user’s ability to intercept and manipulate fragmented communications. It is a chaotic device for those who crave disruption; when activated, it emits phantom signals that confuse and disrupt networked entities in its vicinity, making it an invaluable tool for spies and saboteurs alike. The Pixelated Resonance Shard of the Lost Signal is a delicate artifact, fragile yet potent, capable of slightly reducing network latency, offering a unique advantage to those who can master its unpredictable nature.",
    "category": "curiosities",
    "price": 1400,
    "icon": "📡",
    "stock": 89,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Boosts Communication Jamming Ability",
      "Generates Phantom Signals"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Automated Courier",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Boosted Communication Jamming",
        "rules": "When activated as an action, this shard increases the user’s ability to jam communications within a 10-foot radius by +2 on all checks and saving throws. The effect lasts for 1 minute or until the user makes another communication jam attempt."
      },
      {
        "title": "Phantom Signal Emission",
        "rules": "The shard can generate phantom signals as a bonus action, which confuses any creature within a 30-foot radius. These creatures must succeed on a DC 15 Wisdom saving throw or be incapacitated for 1 minute. The effect ends if the user makes another use of this ability."
      }
    ],
    "levelRequirementReason": "Requires at least second-level proficiency to handle and activate such a complex and potentially dangerous device.",
    "vendorReason": "The data dealer specializes in salvaged tech, making this shard an ideal addition to their inventory.",
    "shippingDetail": "Ships via Automated Courier within 24 hours, delivered directly to the user’s doorstep.",
    "usage": {
      "activation": "Activates as a bonus action or action.",
      "duration": "Instantaneous jamming boost; phantom signal effect lasts for 1 minute.",
      "endsWhen": "The duration of the jamming boost ends after one minute, and the phantom signals dissipate once the effect is over.",
      "charges": "Unlimited uses per short rest."
    },
    "priceReason": "Reflects its rarity and unique utility in disrupting digital communications.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-25T03:17:20.715504+00:00",
    "aiReviewedAt": "2026-07-25T03:17:20.715504+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_buffered_entropy_matrix": {
    "id": "internet_item_buffered_entropy_matrix",
    "name": "Mk.94 Buffered Entropy Matrix – The Glitch's Embrace",
    "description": "The Mk.94 Buffered Entropy Matrix, affectionately known as 'The Glitch's Embrace,' is a tightly-wound data construct designed to absorb and redistribute chaotic bursts within digital networks. Crafted from encrypted quantum particles and imbued with the essence of glitch art, this artifact offers temporary protection against system instability. However, prolonged use can lead to unpredictable behavioral shifts in its user, as the matrix itself begins to mirror the erratic nature of the network it seeks to stabilize.",
    "category": "consumables",
    "price": 29000,
    "icon": "⚙️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Entropy Field Generation",
      "Reduces System Glitches"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Quantum Entanglement Delivery",
    "levelRequirement": 42,
    "effectDetails": [
      {
        "title": "Entropy Field Generation",
        "rules": "Activates on command as a bonus action. Creates an entropy field in a 10-foot radius around the user for 30 seconds, reducing system glitches within by 50%. The effect ends if the matrix is damaged or the user moves more than 20 feet away."
      },
      {
        "title": "Reduces System Glitches",
        "rules": "While the entropy field is active, reduces all incoming system glitch damage by 50%, up to a maximum of two glitches per round. Has no effect if no glitches are present. The matrix regenerates 1 point of damage at the start of each of the user's turns."
      }
    ],
    "levelRequirementReason": "Only those with deep knowledge of digital networks and the ability to command such intricate constructs can wield this artifact.",
    "vendorReason": "Pixel Shop specializes in cutting-edge cybernetic and digital artifacts, making it a logical vendor for 'The Glitch's Embrace'.",
    "shippingDetail": "Ships via quantum entanglement, ensuring safe arrival within seconds.",
    "usage": {
      "activation": "Activates as a bonus action.",
      "duration": "30 seconds or until the matrix is damaged or the user moves more than 20 feet away.",
      "endsWhen": "The matrix is damaged or the user moves more than 20 feet away, or at the start of your next turn if no glitches are present.",
      "charges": "Unlimited uses, regenerates damage at the start of each turn."
    },
    "priceReason": "The Mk.94 Buffered Entropy Matrix is priced high due to its rarity and the advanced technology required for its crafting.",
    "priceOriginal": 9200,
    "priceReviewedAt": "2026-07-25T03:17:28.793767+00:00",
    "aiReviewedAt": "2026-07-25T03:17:28.793767+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_jade_forger_chronal_resonance": {
    "id": "doughnut_hole_item_jade_forger_chronal_resonance",
    "name": "Jade Forger's Chronal Resonance Prism",
    "description": "The Jade Forger's Chronal Resonance Prism gleams with a spectrum of time, its facets shimmering like the edges of a fractured timeline. Crafted from jade harvested in the Fated Place, it allows brief glimpses into potential futures. Yet, prolonged use can unravel your present reality, warping the very fabric of time around you. With each pulse, it subtly stabilizes temporal anomalies, reducing instability by 10% and granting fleeting precognition.",
    "category": "equipment",
    "price": 91000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Stability",
      "Futuristic Glimpse"
    ],
    "vendor": "jade_forger",
    "shippedBy": "Void Courier",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Temporal Stability",
        "rules": "Reduces the target's temporal instability by 10% for 1 minute. The effect ends if the user takes any action other than a movement or reaction, and can be used once per long rest."
      },
      {
        "title": "Futuristic Glimpse",
        "rules": "Grants the wielder a brief moment of precognition, allowing them to see into one potential future outcome. This effect lasts for 5 seconds and can be activated as a bonus action. The user must make a DC 16 Wisdom saving throw or become disoriented for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires significant magical aptitude to control the unstable temporal energies within.",
    "vendorReason": "Jade Forger is renowned for their mastery of jade and temporal magic, making them a trusted source for such an artifact.",
    "shippingDetail": "Ships via the Void Courier, known for its flawless delivery through alternate dimensions.",
    "usage": {
      "activation": "Activates as a bonus action.",
      "duration": "5 seconds.",
      "endsWhen": "The effect ends if the user takes any action other than movement or reaction.",
      "charges": "One charge per long rest, recharges after a week."
    },
    "priceReason": "Balanced at 1000 XP as it offers significant utility without being overpowered.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T03:17:35.893855+00:00",
    "aiReviewedAt": "2026-07-25T03:17:35.893855+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_void_singularities_of_the_center_9": {
    "id": "doughnut_hole_item_void_singularities_of_the_center_9",
    "name": "The Center's Obsidian Singularity Fragment - 9",
    "description": "The Center's Obsidian Singularity Fragment, a jagged shard of the void’s heart, hums with an eerie calmness when held. The touch paralyzes you momentarily, followed by a cascade of hallucinations revealing the deepest secrets of the Fated Place. This fragment is said to be crafted from the very essence of the void's core, making it a dangerous yet revered relic among those who delve into the unknown.",
    "category": "consumables",
    "price": 5100,
    "icon": "🖤",
    "stock": 23,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Paralyzes",
      "Visual Hallucinations"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Cartographer",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Momentary Paralysis",
        "rules": "When touched, the user is immediately paralyzed for 3 seconds. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Secrets Unveiled",
        "rules": "For the following 10 seconds after being touched, the user experiences vivid visual hallucinations that reveal hidden truths about the Fated Place. There is a small chance (20%) to gain temporary immunity to void effects for 24 hours."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers of all levels who wish to test their resolve and sanity.",
    "vendorReason": "Void Vendor specializes in items from the depths, making this fragment a fitting addition to their collection.",
    "shippingDetail": "Ships via interdimensional courier, delivery can take up to two weeks due to the nature of the item.",
    "usage": {
      "activation": "Touching the fragment",
      "duration": "Instantaneous paralysis; visual hallucinations last for 10 seconds",
      "endsWhen": "The effect ends when the duration expires or the user is no longer in contact with the fragment",
      "charges": "Unlimited, but only one use per long rest"
    },
    "priceReason": "Balanced for its rare and dangerous nature, this item provides a unique experience without overstepping the bounds of fair value.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T03:17:50.637470+00:00",
    "aiReviewedAt": "2026-07-25T03:17:50.637470+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_center_seller_chronal_flow_service": {
    "id": "doughnut_hole_item_center_seller_chronal_flow_service",
    "name": "Chronal Flow Alignment Service - Level 3",
    "description": "The Chronal Flow Alignment Service is a delicate, chronometer-like device that emits a focused field of temporal energy, meticulously crafted to subtly align and correct minor temporal anomalies in its vicinity. This artifact requires 15 minutes of precise concentration for activation, during which it hums with a soft, shimmering glow, ensuring the surrounding moments are neither too fast nor too slow. The device is known to provide a brief but potent shielding effect against temporal distortions, making it invaluable for those navigating unpredictable chronal landscapes.",
    "category": "services",
    "price": 25000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Shield",
      "Minor Temporal Alignment"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Dispatcher",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Temporal Shield",
        "rules": "When activated, the device creates a 5-foot radius barrier that provides resistance to damage from temporal effects. This shield lasts for 1 minute and has no save DC required."
      },
      {
        "title": "Minor Temporal Alignment",
        "rules": "For up to 8 hours after activation, the user gains advantage on checks related to timekeeping, navigation, or any action involving precise timing. The device can be used once per day."
      }
    ],
    "levelRequirementReason": "The intricate calibration and concentration required for this service necessitate a minimum character level of 4.",
    "vendorReason": "As the primary facilitator of temporal services, Center Seller is well-equipped to offer this delicate chronal artifact.",
    "shippingDetail": "The Chronal Flow Alignment Service requires specialized courier handling and may take an additional hour for delivery.",
    "usage": {
      "activation": "A bonus action to activate the device, requiring 15 minutes of focused concentration.",
      "duration": "The temporal shield lasts 1 minute, and minor temporal alignment effects last up to 8 hours.",
      "endsWhen": "The effect ends when its duration expires or the user discontinues the focus.",
      "charges": "One daily use."
    },
    "priceReason": "This item offers a balance of utility and rarity, making it a fair price point for its effects in the market.",
    "priceOriginal": 55000,
    "priceReviewedAt": "2026-07-25T14:45:46.596026+00:00",
    "aiReviewedAt": "2026-07-25T14:45:46.596026+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_the_gravitic_spindle_maker": {
    "id": "grand_country_item_the_gravitic_spindle_maker",
    "name": "The Gravitic Spindle Maker",
    "description": "The Gravitic Spindle Maker, a marvel of arcane metallurgy forged from solidified gravity currents and polished with noble obsidian, is a device that allows its wielder to manipulate local gravitational fields. When spun rapidly, it can generate a localized pull or push, making it ideal for scaling treacherous vertical cliffs or disrupting enemy formations. The spindle's core glows faintly as it interacts with the fabric of space-time, hinting at its gravity-manipulating prowess.",
    "category": "equipment",
    "price": 1400,
    "icon": "🌀",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Gravitic Pull",
      "Enhanced Mobility"
    ],
    "vendor": "side_seller",
    "shippedBy": "gravity_drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Gravitic Pull",
        "rules": "As a bonus action, the wielder can activate the Gravitic Spindle Maker to create a localized gravitational pull in a 5-foot radius. This effect lasts for up to 1 minute and allows creatures within the area to move at half speed or be pulled toward the center of the area as if under the influence of a minor gravity spell (DC 14). The effect ends when the wielder stops concentrating."
      },
      {
        "title": "Enhanced Mobility",
        "rules": "While holding the Gravitic Spindle Maker, the wielder has a +2 bonus to Acrobatics checks and can jump twice as high. This enhancement lasts for 1 hour per long rest or until the wielder stops concentrating."
      }
    ],
    "levelRequirementReason": "The Gravitic Spindle Maker requires at least 5th level due to its complex mechanics and the concentration needed to manipulate gravity.",
    "vendorReason": "Side Seller, known for their eclectic and powerful items, carries the Gravitic Spindle Maker as one of their signature offerings.",
    "shippingDetail": "Shipped via a gravity drone, ensuring swift delivery to even the most remote locations.",
    "usage": {
      "activation": "Bonus action (Gravitic Pull), Passive (Enhanced Mobility)",
      "duration": "Up to 1 minute for Gravitic Pull, 1 hour per long rest for Enhanced Mobility",
      "endsWhen": "Wielder stops concentrating or resting as needed",
      "charges": "Unlimited"
    },
    "priceReason": "The Gravitic Spindle Maker's balanced price reflects its rarity and the complexity of its mechanics, providing a fair value for players.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T03:18:04.894712+00:00",
    "aiReviewedAt": "2026-07-25T03:18:04.894712+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_layered_ascension_ladder": {
    "id": "grand_country_item_layered_ascension_ladder",
    "name": "Layered Ascension Ladder - The Chronal Weaver's Design",
    "description": "The Layered Ascension Ladder, crafted from solidified temporal echoes, is a multi-tiered contraption that weaves through time itself. Each rung glows faintly with chronal energy, hinting at its ability to shift position in the flow of time for brief moments. Navigate this ladder with care; it can leap ahead or fall back in time, allowing you to bypass dangerous gravitational anomalies but also risking paradoxical slips that could tear the very fabric of reality.",
    "category": "equipment",
    "price": 5100,
    "icon": "🪜",
    "stock": 18,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Temporal Leap",
      "Paradox Resistance"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "temporal_relay",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Temporal Leap",
        "rules": "As a bonus action, you can cause one section of the ladder to leap forward or backward in time by up to 60 feet. This effect lasts for 1 minute and has no range limit. You must make a DC 20 Wisdom saving throw; on a failed save, you risk creating a temporal paradox that reduces your movement speed by half until the end of your next short rest."
      },
      {
        "title": "Paradox Resistance",
        "rules": "While using this ladder, you have advantage on saving throws against effects that would cause temporal displacement or similar changes to time. Additionally, you can attempt a DC 15 Wisdom (Perception) check as an action when exposed to a source of temporal instability."
      }
    ],
    "levelRequirementReason": "Crafted with advanced chronal technology, this ladder is designed for experts who have mastered the nuances of time manipulation.",
    "vendorReason": "The Vertical Vendor specializes in unique and rare equipment that can navigate the most perilous terrains, including those affected by temporal anomalies.",
    "shippingDetail": "Ships via the Temporal Relay, a service known for its precise delivery of time-sensitive items. Expect a delay of up to one week due to the nature of the item's chronal components.",
    "usage": {
      "activation": "Bonus action to activate the temporal leap effect; passive while using the ladder.",
      "duration": "1 minute per use, but ends early if you fail a Wisdom saving throw for paradox creation.",
      "endsWhen": "The effect ends when you fail a Wisdom saving throw or after one minute, whichever comes first. You can only use this feature once every 24 hours.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from rare temporal materials and advanced chronal technology, the Layered Ascension Ladder is a valuable tool for those who traverse time itself.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T03:18:13.111395+00:00",
    "aiReviewedAt": "2026-07-25T03:18:13.111395+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_the_inverted_spiral_cartographer": {
    "id": "grand_country_item_the_inverted_spiral_cartographer",
    "name": "The Inverted Spiral Cartographer's Quill",
    "description": "The Inverted Spiral Cartographer's Quill is a delicate, hand-crafted quill made from a rare spiral shard found on The Side of the Doughnut. This quill not only maps vertical terrain but also records spatial data in reverse gravity coordinates, making it invaluable for navigating the chaotic landscapes of this enigmatic plane. It automatically updates your map as you move, ensuring that your cartographic charts reflect the reversed flow of space and time.",
    "category": "curiosities",
    "price": 380,
    "icon": "🖋️",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Automatically Maps Vertical Terrain",
      "Reverse Gravity Spatial Data"
    ],
    "vendor": "layer_market",
    "shippedBy": "delivery_drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Automatic Mapping",
        "rules": "Passive effect. The quill automatically updates your map as you navigate vertical terrain, reflecting the reversed flow of space and time."
      },
      {
        "title": "Reverse Gravity Coordinates",
        "rules": "Once per short rest, activate as a bonus action to record spatial data in reverse gravity coordinates for 1 minute. This effect provides a +2 bonus to Navigation skill checks made within 60 feet while using the quill."
      }
    ],
    "levelRequirementReason": "Requires moderate dexterity and experience with navigating complex vertical environments.",
    "vendorReason": "Layer Market specializes in unique cartographic tools from The Side of the Doughnut, making this quill a natural fit for their inventory.",
    "shippingDetail": "The quill is shipped via delivery drone, ensuring it arrives pristine and ready to use.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "Ends when the user finishes their next short rest or the effect is dispelled.",
      "charges": "Uses 1 charge; recharges after a long rest."
    },
    "priceReason": "The rarity of the spiral shard, unique crafting process, and the quill's specialized functionality justify this price.",
    "priceOriginal": 450,
    "priceReviewedAt": "2026-07-25T03:18:05.444824+00:00",
    "aiReviewedAt": "2026-07-25T03:18:05.444824+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_jeweled_pins_of_lumina": {
    "id": "kivotos_item_jeweled_pins_of_lumina",
    "name": "The Jeweled Pins of Lumina - Semester Gifted",
    "description": "The Jeweled Pins of Lumina are a delicate set of academic accoutrements, each pin crafted from semi-reflective silver and inlaid with iridescent jewel dust that captures the light like a late-night study session. These pins not only enhance focus but also emit an ethereal glow that mimics the ambient light of campus lamps during marathon study sessions. Once donned, they bestow a temporary clarity of thought, making even the most complex problems seem solvable.",
    "category": "equipment",
    "price": 5100,
    "icon": "✨",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "focused_clarity",
      "academic_halo"
    ],
    "vendor": "student_store",
    "shippedBy": "drone_delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Focused Clarity",
        "rules": "When activated by wearing one or more pins, this effect grants the wearer a +2 bonus to Intelligence checks and saving throws for 1 minute. The wearer must concentrate on the pins while they are active."
      },
      {
        "title": "Academic Halo",
        "rules": "The pins emit a faint, pulsing halo that provides resistance against distractions. This effect lasts until the wearer stops concentrating or is hit by an attack with advantage. If the wearer fails a saving throw to resist a distraction within 10 feet during this time, they gain advantage on their next check."
      }
    ],
    "levelRequirementReason": "These pins are designed for students who have reached a certain level of academic rigor and focus.",
    "vendorReason": "The student store stocks these items as they cater specifically to the needs of its clientele, ensuring that students can perform at their best during critical study periods.",
    "shippingDetail": "Delivered within a half hour of purchase by drone, these pins are sent in a protective case to ensure they arrive undamaged.",
    "usage": {
      "activation": "Wearing one or more pins grants their effects. Removing them ends the effect immediately.",
      "duration": "1 minute per pin worn",
      "endsWhen": "The wearer stops concentrating or is hit by an attack with advantage, or the duration expires.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rarity and utility in enhancing academic performance during critical study periods.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:18:39.183771+00:00",
    "aiReviewedAt": "2026-07-25T03:18:39.183771+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk_29_semester_pins": {
    "id": "kivotos_item_mk_29_semester_pins",
    "name": "Mk.29 Semester Pins - The Gradient Shifter",
    "description": "The Mk.29 Semester Pins - The Gradient Shifter are nine vibrant pins that subtly transform their hues to match the academic year's progression, from crisp autumn tones to rich spring greens. When displayed on one's attire or accessories, these pins cast a mild visual distortion around the wearer, briefly altering perceptions of color and time. Scholars and enthusiasts alike find them not only decorative but also inspiring, as they seem to whisper tales of past achievements and future potential.",
    "category": "curiosities",
    "price": 1400,
    "icon": "🌈",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "minor_color_distortion",
      "inspiration"
    ],
    "vendor": "club_supply",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Color Distortion",
        "rules": "Activates on command as a bonus action. The wearer's immediate environment undergoes a subtle chromatic shift for 30 seconds, affecting vision within a 15-foot radius. This effect does not require saving and has no save DC."
      },
      {
        "title": "Inspiration",
        "rules": "Each time the wearer uses the pins' abilities, they gain advantage on one ability check or saving throw of their choice until the start of their next turn. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "These pins are designed for beginners and students who could use a bit more inspiration in their daily studies.",
    "vendorReason": "Club Supply is known for its wide range of academic supplies, including items that aid in focus and motivation during exams.",
    "shippingDetail": "Express delivery ensures these pins arrive fresh from the forge, ensuring they are in perfect condition when received.",
    "usage": {
      "activation": "Bonus action to activate or command the pins.",
      "duration": "30 seconds of visual distortion and inspiration effect.",
      "endsWhen": "The duration ends at the start of your next turn. The effect can be used once per short rest.",
      "charges": "Unlimited, as long as the pins are not destroyed."
    },
    "priceReason": "The pins' unique design and functionality justify their higher price point, offering both visual appeal and practical benefits for students.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T03:18:25.076024+00:00",
    "aiReviewedAt": "2026-07-25T03:18:25.076024+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_the_halo_of_judgment": {
    "id": "kivotos_item_the_halo_of_judgment",
    "name": "The Halo of Judgment - Epic Faction Item",
    "description": "The Halo of Judgment, a heavily jeweled and intricately forged halo, emanates an aura of undeniable authority. Its crystalline facets shimmer with light that subtly aligns listeners' perceptions to the wearer's favor, as if truth itself bends to their will. Forged during heated debates within the student council, it is said this halo has swayed many a decision in the Order of Clarity’s favor, lending the wearer an aura that commands respect and admiration.",
    "category": "faction",
    "price": 25000,
    "icon": "⚖️",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "argumentative_influence",
      "halo_of_authority"
    ],
    "vendor": "academy_armory",
    "shippedBy": "guarded_delivery",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Argumentative Influence",
        "rules": "When worn in a public debate or forum, this halo exerts an influence that enhances the wearer's perceived argument. This effect lasts for 45 seconds and confers advantage on Charisma (Persuasion) checks made during the next hour. The wearer must make a Concentration check (DC 16) each time they speak in public to maintain the aura; failure ends it immediately."
      },
      {
        "title": "Halo of Authority",
        "rules": "The halo grants a +2 bonus to Charisma checks and saving throws for as long as it is worn. This effect is passive, providing a constant boost that does not require activation or concentration."
      }
    ],
    "levelRequirementReason": "Wearing the Halo of Judgment requires a minimum level of 4 due to its complex enchantment and influence on public perception.",
    "vendorReason": "Academy Armory, known for its specialized items and faction gear, houses this powerful tool used by students to gain an edge in their academic and extracurricular pursuits.",
    "shippingDetail": "Ships via guarded courier with strict delivery protocols ensuring the halo arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect; activation is not required, but concentration must be maintained during public speaking to keep the aura active.",
      "duration": "45 seconds per round of debate or speech, up to one hour",
      "endsWhen": "Concentration fails or wearer ceases to speak in a public forum",
      "charges": "Unlimited"
    },
    "priceReason": "The Halo of Judgment is priced at 1000 XP, reflecting its epic rarity and the complexity of its enchantments.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T03:19:07.327234+00:00",
    "aiReviewedAt": "2026-07-25T03:19:07.327234+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_dendro_gems_of_the_seventh_eye": {
    "id": "teyvat_item_dendro_gems_of_the_seventh_eye",
    "name": "Dendro Gems of the Seventh Eye",
    "description": "The Dendro Gems of the Seventh Eye are a pair of glowing, heart-shaped gems that pulse with the raw dendro energy of the Archon's decrees. When held, these gems grant their bearer a momentary clarity of purpose and enhance perception of elemental flows in the environment, allowing them to discern hidden paths through illusionary constructs. The gem's power is such that it can momentarily disorient foes, sending their movements into a disarrayed state for a brief instant.",
    "category": "consumables",
    "price": 1400,
    "icon": "✨",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Elemental Insight",
      "Disruptive Echo"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Sky Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Elemental Insight",
        "rules": "When an ally holds one of these gems, they gain advantage on Perception checks to discern hidden paths and see through illusions within a 30-foot radius for 1 minute. This effect ends if the gem is removed or the duration expires."
      },
      {
        "title": "Disruptive Echo",
        "rules": "While holding one of these gems, there is a 25% chance to cause an enemy within 30 feet to become disoriented for 1 round as if struck by an unseen force. The target must make a DC 14 Dexterity saving throw or be disoriented (reduced movement speed by half) until the start of their next turn."
      }
    ],
    "levelRequirementReason": "The gem's power requires a certain level of mastery to wield effectively, ensuring that only experienced adventurers can harness its full potential.",
    "vendorReason": "As the heart of Dendro influence, Mondstadt is home to many who seek to harness elemental magic, including these unique gems.",
    "shippingDetail": "Ships via the Sky Couriers' fastest route, ensuring timely delivery of these delicate artifacts.",
    "usage": {
      "activation": "Passive effect when held by an ally.",
      "duration": "1 minute per gem used.",
      "endsWhen": "The duration expires or the gem is removed from their grasp.",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity and power of these gems, combined with the limited daily stock, justify a higher price in experience points.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T14:45:58.944279+00:00",
    "aiReviewedAt": "2026-07-25T14:45:58.944279+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_jeweled_bane_s_gems": {
    "id": "teyvat_item_jeweled_bane_s_gems",
    "name": "Jeweled Bane's Gems - Obsidian Tears",
    "description": "Forged within the volcanic heart of a forgotten shrine, these Obsidian Tears are said to hold fragments of ancient battles and the sorrow of those who fell. When wielded, they release a chilling aura that not only slows enemy movement by 20% but also weakens them, reducing their attack power by 15%. A grim reminder of inevitable defeat, each strike carries with it a chance to inflict 'Frozen Doubt', momentarily reducing the target's critical strike chance.",
    "category": "equipment",
    "price": 5100,
    "icon": "💀",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Slows Enemy Movement",
      "Reduces Attack Power"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Slowed Movement",
        "rules": "When this item strikes an enemy, it slows their movement speed by 20% for 5 seconds. This effect ends if the target moves out of range or takes damage."
      },
      {
        "title": "Reduced Attack Power",
        "rules": "Enemies hit by this item have their attack power reduced by 15%, lasting until the end of the encounter or when they take damage."
      }
    ],
    "levelRequirementReason": "Requires high-level expertise to wield and control such a powerful, ancient artifact.",
    "vendorReason": "The harbor is known for its trade in rare, ancient artifacts from forgotten shrines.",
    "shippingDetail": "Due to the fragility of these gems, they are shipped via Sea Serpent Express with enhanced protection.",
    "usage": {
      "activation": "On hit as a reaction",
      "duration": "Instantaneous effect lasting 5 seconds on each strike",
      "endsWhen": "Target moves out of range or takes damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its rarity and the power it offers without overshadowing other items.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:18:56.563949+00:00",
    "aiReviewedAt": "2026-07-25T03:18:56.563949+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_mk21_dendro_gems_of_the_sanctuary": {
    "id": "teyvat_item_mk21_dendro_gems_of_the_sanctuary",
    "name": "Mk.21 Dendro Gems of the Sanctuary",
    "description": "Forged within the hallowed halls of an ancient Dendro Archon sanctuary, these Mk.21 Dendro Gems exude a serene luminescence that repels chaotic forces. Upon activation, they project a stabilizing barrier that not only absorbs up to 50% of incoming elemental damage but also reduces the duration of harmful environmental effects by 25%. These gems are imbued with the essence of harmony and order, making them invaluable in the face of elemental turmoil.",
    "category": "curiosities",
    "price": 27000,
    "icon": "🛡️",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Stabilizing Barrier",
      "Environmental Resilience"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Wind Runner Drone",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Stabilizing Barrier",
        "rules": "Activates as a bonus action to create an invisible barrier that absorbs up to 50% of incoming elemental damage. The barrier lasts for 1 minute or until destroyed by an attack with a successful DC 17 Strength (Athletics) check."
      },
      {
        "title": "Environmental Resilience",
        "rules": "Reduces the duration of harmful environmental effects, such as landslides and storms, by 25%. This effect lasts for 1 hour or until dispelled. The wearer must make a DC 16 Wisdom saving throw each time an environmental hazard is encountered."
      }
    ],
    "levelRequirementReason": "The complex alchemy required to craft these gems demands the expertise of a high-level practitioner.",
    "vendorReason": "Inazuma Imports specializes in exotic and ancient artifacts, making it an ideal vendor for these unique Dendro Gems.",
    "shippingDetail": "Ships via Wind Runner Drone within 3 days from the nearest major city.",
    "usage": {
      "activation": "Bonus action to activate the stabilizing barrier and environmental resilience.",
      "duration": "1 minute for the barrier, 1 hour for environmental effects reduction.",
      "endsWhen": "Destroyed by an attack or dispelled by a successful save.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The rarity and complexity of crafting these gems justify their high price, ensuring they remain a sought-after commodity among adventurers.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T03:19:03.924528+00:00",
    "aiReviewedAt": "2026-07-25T03:19:03.924528+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_obsidian_dancer_apples": {
    "id": "equestria_item_obsidian_dancer_apples",
    "name": "Obsidian Dancer's Apples of Resonance",
    "description": "The Obsidian Dancer's Apples of Resonance are a peculiar sight in Equestria, their dark obsidian hue pulsing with an otherworldly rhythm. Consumed during performances or rapid escapes, these apples grant you resistance to sonic attacks and enhance your agility, allowing your movements to flow like the melody itself. The pulse within them is said to align with the heart of Equestria's music, granting dancers both grace and protection.",
    "category": "consumables",
    "price": 5100,
    "icon": "🎶",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "sonic resistance",
      "agility boost"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sonic Resistance",
        "rules": "When you consume an apple, you gain temporary resistance to sonic damage for a duration of 1 minute. This effect does not stack with other forms of resistance."
      },
      {
        "title": "Agility Boost",
        "rules": "For the entire duration of the sonic resistance, your movement speed is increased by +5 feet and you have advantage on Dexterity (Acrobatics) checks and saving throws until the effect ends. If you are already proficient in Acrobatics, this bonus increases to +10 feet."
      }
    ],
    "levelRequirementReason": "This item's effects are designed for a wide range of adventurers who might benefit from its unique abilities.",
    "vendorReason": "As a bustling marketplace, Ponyville Market stocks items that enhance daily life and performance in various ways.",
    "shippingDetail": "The apples are delivered fresh by the Pegasus Courier, ensuring they retain their magical properties upon arrival.",
    "usage": {
      "activation": "Eating one apple",
      "duration": "1 minute per apple consumed",
      "endsWhen": "At the end of each long rest or when destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The apples are rare and offer unique benefits that enhance performance, making them a valuable addition to any adventurer's inventory.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T03:19:15.954479+00:00",
    "aiReviewedAt": "2026-07-25T03:19:15.954479+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_kind_apples_mk32": {
    "id": "equestria_item_kind_apples_mk32",
    "name": "Mk.32 Kind Apples of Elemental Affinity",
    "description": "The Mk.32 Kind Apples of Elemental Affinity are a delicacy harvested from the crystal caves beneath the Crystal Empire. Their skin glows faintly with elemental energy, and their crisp bite releases bursts of fire, water, earth, or air depending on your alignment. These apples grant you a brief surge of elemental affinity, bolstering your resistance to environmental hazards and healing you faster in natural terrain. However, uncontrolled surges can occur if consumed too frequently.",
    "category": "equipment",
    "price": 1400,
    "icon": "🍎",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Elemental Surge",
      "Elemental Resistance"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Griffin Transport",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Elemental Surge",
        "rules": "When consumed, the apple grants you a short burst of elemental energy (fire, water, earth, or air) based on your affinity. This provides temporary resistance to related damage and heals you for 2d6 hit points if near corresponding natural terrain. The effect lasts until the end of your next turn."
      },
      {
        "title": "Elemental Resistance",
        "rules": "You gain a +1 bonus to saving throws against environmental hazards associated with the elemental burst. This bonus increases by +1 for each additional apple consumed in an hour, up to +3."
      }
    ],
    "levelRequirementReason": "The complexity of harvesting and processing these apples requires a certain level of expertise.",
    "vendorReason": "As the primary supplier of exotic goods from the Crystal Empire, Canterlot Commerce offers the finest in elemental produce.",
    "shippingDetail": "Ships via Royal Griffin Transport within two days. Delivery times may vary during peak seasons.",
    "usage": {
      "activation": "Eaten as a consumable item",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends upon consuming another apple or taking damage",
      "charges": "Unlimited, but limited by daily consumption limits"
    },
    "priceReason": "Balanced to reflect their rarity and unique properties without overshadowing other items.",
    "priceOriginal": 1600,
    "priceReviewedAt": "2026-07-25T03:19:23.752840+00:00",
    "aiReviewedAt": "2026-07-25T03:19:23.752840+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_mythic_apples_of_harmony_resonance": {
    "id": "equestria_item_mythic_apples_of_harmony_resonance",
    "name": "Mythic Apples of Harmony Resonance – The Twilight Echoes",
    "description": "The Mythic Apples of Harmony Resonance – The Twilight Echoes are said to have been nurtured by Princess Twilight herself, each fruit a glowing orb of purest light. When consumed, these apples amplify the bonds of friendship among those nearby and can heal wounds caused by discord's touch. Their vibrant glow pulses with the essence of harmony, offering potent protection against fear and despair, ensuring peace within both heart and soul.",
    "category": "faction",
    "price": 290000,
    "icon": "✨",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "amplifies friendship-based abilities",
      "resistance to negative emotions"
    ],
    "vendor": "crystal_empire_archives",
    "shippedBy": "Dimensional Courier (Secure Transport)",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Amplified Friendship",
        "rules": "When consumed by an ally within 30 feet, the apple temporarily enhances their Cutie Mark power and positive interactions. This effect lasts until the end of the next short or long rest."
      },
      {
        "title": "Harmony's Shield",
        "rules": "The consumer gains a +2 bonus to saving throws against fear, despair, and rage effects for 1 hour after consumption. This benefit can be used once per day."
      }
    ],
    "levelRequirementReason": "These apples are powerful but not too powerful, requiring a minimum level of 5 to ensure they do not overshadow the abilities of lower-level characters.",
    "vendorReason": "The archives hold many secrets and artifacts from across Equestria; these mythic apples fit well within their collection.",
    "shippingDetail": "Ships via Dimensional Courier's Secure Transport, ensuring safe delivery through the most stable portals available.",
    "usage": {
      "activation": "Eaten as a free action",
      "duration": "Until end of next short or long rest for Amplified Friendship; 1 hour for Harmony's Shield",
      "endsWhen": "The effect ends when the duration expires or the consumer is incapacitated.",
      "charges": "Unlimited, but only one can be consumed per day"
    },
    "priceReason": "Balanced to ensure these apples are a significant reward for adventurers without being overpowered.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-25T03:19:56.036942+00:00",
    "aiReviewedAt": "2026-07-25T03:19:56.036942+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_gilded_caller_rift_01": {
    "id": "doughnut_hole_item_gilded_caller_rift_01",
    "name": "The Gilded Caller's Rift of Central Descent",
    "description": "The Gilded Caller's Rift of Central Descent is a fractured disc pulsing with a golden, gravitational hum that warps reality in its vicinity. Crafted from the molten heart of a sunken star and imbued with the arcane essence of the Fated Place, it grants fleeting moments where the laws of physics bend to your will. Holding this relic allows you to defy gravity's pull for brief leaps and sprints, making even the most treacherous terrain seem like a playground.",
    "category": "equipment",
    "price": 1400,
    "icon": "✨",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Gravitational Leap",
      "Bend Space"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Gravitational Leap",
        "rules": "By taking a bonus action while holding The Gilded Caller's Rift, you can reduce your personal gravitational pull for up to 1 minute. This effect allows you to make a long jump or high jump with double the normal range without provoking opportunity attacks."
      },
      {
        "title": "Bend Space",
        "rules": "Once per short rest while holding The Gilded Caller's Rift, you can create a localized gravity distortion in a 5-foot-radius area around you. This effect lasts until the start of your next turn and grants you advantage on Strength (Athletics) checks made to jump or sprint."
      }
    ],
    "levelRequirementReason": "This relic's power is beyond that of most novices, requiring a seasoned adventurer with at least 15 levels to wield its full potential.",
    "vendorReason": "The Gilded Caller's Rift is a rare artifact known for its unpredictable nature; Hole Hawker, with his extensive network in the Fated Place, can procure such enigmatic items.",
    "shippingDetail": "Ships via the Void Courier, ensuring swift and secure delivery through the warp lanes of the Fated Place.",
    "usage": {
      "activation": "Bonus action to activate Gravitational Leap; once per short rest for Bend Space.",
      "duration": "Gravitational Leap lasts up to 1 minute; Bend Space ends at the start of your next turn.",
      "endsWhen": "Exhausted after use, resets on a long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Gilded Caller's Rift is crafted from star-molten materials and infused with Fated Place magic, making it an incredibly valuable and sought-after relic.",
    "priceOriginal": 180,
    "priceReviewedAt": "2026-07-25T03:20:05.869073+00:00",
    "aiReviewedAt": "2026-07-25T03:20:05.869073+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_central_rift_02": {
    "id": "doughnut_hole_item_central_rift_02",
    "name": "Mk.3 Central Rift of Echoing Depths",
    "description": "The Mk.3 Central Rift of Echoing Depths is a sleek obsidian shard that hums with an ancient, void-born resonance. When activated by a swift action, it creates a gravitic well that warps the very fabric around you, pulling in small objects within its radius and destabilizing foes' balance for several moments. Nearby creatures must succeed on a DC 15 Dexterity saving throw or be knocked prone, their footing momentarily unsteady.",
    "category": "consumables",
    "price": 5100,
    "icon": "🌀",
    "stock": 17,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Gravitic Well",
      "Unstable Footing"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Cartographer",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Gravitic Well",
        "rules": "Activating this shard creates a 10-foot-radius gravitic well centered on the user. Any unattended objects within this area are pulled toward the user at the start of each creature's turn for 1 minute, unless they succeed on an Intelligence saving throw (DC 15)."
      },
      {
        "title": "Unstable Footing",
        "rules": "For every creature in the gravitic well's radius when activated, they must make a Dexterity saving throw. On a failed save, the creature is knocked prone and has disadvantage on attack rolls and ability checks until the end of their next turn."
      }
    ],
    "levelRequirementReason": "This item requires a high level to wield effectively due to its unstable and powerful nature.",
    "vendorReason": "The voidVendor is well-known for dealing in rare, dangerous artifacts like the Mk.3 Central Rift of Echoing Depths.",
    "shippingDetail": "This item ships via a specially calibrated dimensional courier that ensures safe delivery through the most hazardous rifts and dimensions.",
    "usage": {
      "activation": "Activates with a swift action, lasting for up to 1 minute per use.",
      "duration": "Up to 1 minute per activation",
      "endsWhen": "The user or an adjacent creature moves from within the gravitic well's radius.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item is priced at 1000 XP due to its rare material and unstable nature, which makes it both powerful and potentially dangerous.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T03:20:12.048912+00:00",
    "aiReviewedAt": "2026-07-25T03:20:12.048912+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_faction_caller_03": {
    "id": "doughnut_hole_item_faction_caller_03",
    "name": "The Silent Caller’s Fragment of the Faded Core",
    "description": "The Silent Caller’s Fragment of the Faded Core is a pulsating, grey fragment that exudes an unnerving stillness. Crafted from the remains of ancient Void-Touched Resonance Amplifiers, this relic creates a brief pocket of absolute silence within a small radius upon activation. It whispers to the hands of those who wield it, offering them increased resistance to psychic attacks by 15%, and there's a chance that it can disrupt enemy spells as well.",
    "category": "curiosities",
    "price": 25000,
    "icon": "🤫",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Zone of Silence",
      "Increased Psychic Resistance"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Dispatcher",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Zone of Silence",
        "rules": "When activated, this fragment creates a small area of absolute silence within a 10-foot radius. The duration is instantaneous and ends when the activation ends or an opponent within the zone makes a successful Wisdom saving throw."
      },
      {
        "title": "Increased Psychic Resistance",
        "rules": "The user gains a bonus to their AC against psychic attacks equal to 15%. This effect lasts until the end of the user's next turn and can be reactivated once per short or long rest."
      }
    ],
    "levelRequirementReason": "This fragment requires a high level to wield effectively, given its ancient origins and potent abilities.",
    "vendorReason": "The center seller, who deals in rare relics and arcane components, is known for their extensive knowledge of such artifacts.",
    "shippingDetail": "Ships via the Temporal Dispatcher, which ensures secure and swift delivery through time-stabilized transit routes.",
    "usage": {
      "activation": "A bonus action to activate or recharge.",
      "duration": "Instantaneous for Zone of Silence; ends at end of next turn otherwise.",
      "endsWhen": "When the activation ends or an opponent within the zone successfully saves against it.",
      "charges": "Unlimited, recharges after a short or long rest."
    },
    "priceReason": "The balanced XP price reflects its rarity and unique properties, making it a valuable asset for powerful spellcasters.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-25T03:20:22.010215+00:00",
    "aiReviewedAt": "2026-07-25T03:20:22.010215+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_lumina_of_the_sparkling_sirens": {
    "id": "equestrian_item_lumina_of_the_sparkling_sirens",
    "name": "Luminary Siren's Echoes",
    "description": "The Luminary Siren's Echoes are shimmering opalescent orbs that pulse with the residual magic of forgotten sirens' songs, their light casting a spectral glow when held. These relics grant a temporary boost to persuasion and charm, allowing you to weave illusions of captivating beauty, but prolonged exposure induces unsettling melodies that can disrupt your focus. Crafted from the bones of ancient sirens and enchanted by the whispers of the sea, these orbs are said to amplify one's vocal prowess and persuasive abilities.",
    "category": "consumables",
    "price": 1400,
    "icon": "✨",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Echoes of Persuasion",
      "Mystic Charm"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "winged_message",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Echoes of Persuasion",
        "rules": "When activated, the Luminary Siren's Echoes grant a +50 bonus to Charisma (Persuasion) checks for 60 seconds. This effect can be used once per long rest."
      },
      {
        "title": "Mystic Charm",
        "rules": "At the end of your turn, there is a 20% chance that you can attempt to charm one target within 30 feet with an ability check equal to 8 + your Charisma modifier. This effect has no save DC and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 15 due to its complex enchantments and the inherent power it draws from ancient magic.",
    "vendorReason": "The market in Ponyville is known for its wide variety of magical artifacts, including relics with deep lore and history, making it fitting for the Luminary Siren's Echoes.",
    "shippingDetail": "Delivered by swift winged messengers, ensuring these delicate orbs arrive in pristine condition.",
    "usage": {
      "activation": "Object interaction to activate; can be used once per long rest.",
      "duration": "60 seconds; ends when the effect is no longer needed or when the item is destroyed.",
      "endsWhen": "At the end of your turn, if not otherwise ended.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the uncommon rarity and the complex enchantments that empower these relics with ancient magic.",
    "priceOriginal": 789,
    "priceReviewedAt": "2026-07-25T03:20:31.471524+00:00",
    "aiReviewedAt": "2026-07-25T03:20:31.471524+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_gravitas_of_the_stone_slyer": {
    "id": "equestrian_item_gravitas_of_the_stone_slyer",
    "name": "The Obsidian Stone Slayer’s Grip",
    "description": "The Obsidian Stone Slayer’s Grip is a heavy gauntlet forged in the heart of a collapsed crystal cave, where it absorbed the tenacity and resilience of ancient stone. Its weight presses down with unyielding force, and its surface shimmers like dark obsidian under moonlight. This relic enhances your strength and fortitude, allowing you to cleave through even the strongest defenses—though the gauntlet's sheer mass can exhaust even the mightiest warrior in a single engagement.",
    "category": "equipment",
    "price": 5100,
    "icon": "🡩",
    "stock": 8,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Stone Fortitude",
      "Shatter Defenses"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_delivery_pony",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Stone Fortitude",
        "rules": "Activates as a bonus action. You gain a +2 bonus to Strength and Constitution saving throws for the duration of one short rest or until you are incapacitated."
      },
      {
        "title": "Shatter Defenses",
        "rules": "You have advantage on attack rolls against creatures with hardness lower than 15. Additionally, if an enemy creature within reach is reduced to half its hit points or less by a successful attack, it must succeed on a DC 16 Strength saving throw or be knocked prone."
      }
    ],
    "levelRequirementReason": "The complexity of the forging process and the gauntlet's weight make it unsuitable for those without considerable strength and experience.",
    "vendorReason": "Canterlot Commerce specializes in rare and exotic equipment, including items that enhance a warrior’s physical prowess.",
    "shippingDetail": "Ships via Royal Delivery Pony with expedited service ensuring safe arrival within three days of purchase.",
    "usage": {
      "activation": "Bonus action for Stone Fortitude; as part of an attack for Shatter Defenses",
      "duration": "Until the start of your next turn after activation or until incapacitated, whichever comes first; until you are knocked prone by a successful save against Shatter Defenses.",
      "endsWhen": "The gauntlet is removed or destroyed; ends upon incapacitation.",
      "charges": "Unlimited"
    },
    "priceReason": "Reflects the item's rare forging, unique properties, and limited availability.",
    "priceOriginal": 12345,
    "priceReviewedAt": "2026-07-25T03:21:17.266785+00:00",
    "aiReviewedAt": "2026-07-25T03:21:17.266785+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_divinity_of_the_aurora_smasher": {
    "id": "equestrian_item_divinity_of_the_aurora_smasher",
    "name": "Celestial Aurora’s Wrath",
    "description": "The Celestial Aurora’s Wrath is a crystalline shard forged from the very essence of a divine aurora, shimmering with the raw power of the cosmos. Its surface crackles with radiant energy, and when wielded by a worthy soul, it can create dazzling illusions to deceive foes or unleash searing beams that rend flesh and bone. Though its volatile nature is unpredictable, those who master it find their minds attuned to the celestial harmony, drawing upon an untold well of divine light.",
    "category": "premium",
    "price": 1400000,
    "icon": "🔆",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "Divine Illusions",
      "Radiant Beam"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "stardust_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Divine Illusions",
        "rules": "As a bonus action, the wielder can create one illusory duplicate within line of sight. This duplicate has half the wielder's hit points and is indistinguishable from the original until a successful DC 15 Wisdom (Perception) check or damage is dealt to it. The effect ends if the duplicate takes any damage or after 1 minute."
      },
      {
        "title": "Radiant Beam",
        "rules": "The wielder can use an action to unleash a beam of radiant energy at a target within 60 feet, dealing 2d8 radiant damage plus half the user's level. This effect has a cooldown of 1 minute and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Even the smallest spark of divine power requires an initiated soul to wield it safely.",
    "vendorReason": "The Crystal Empire is known for its connection with celestial phenomena, making them the ideal caretakers of this divine artifact.",
    "shippingDetail": "Ships via stardust courier; delivery can take up to a week depending on celestial alignment.",
    "usage": {
      "activation": "Bonus action for Divine Illusions, Action for Radiant Beam",
      "duration": "Instantaneous (Divine Illusion), Instantaneous (Radiant Beam)",
      "endsWhen": "Used or after 1 minute (Divine Illusion), Cool-down period ends (Radiant Beam)",
      "charges": "Unlimited"
    },
    "priceReason": "The Celestial Aurora’s Wrath is a divine artifact forged from the essence of the aurora, making it both rare and valuable.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T03:21:12.302878+00:00",
    "aiReviewedAt": "2026-07-25T03:21:12.302878+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_the_dregling_s_sworn_crumb": {
    "id": "almost_edge_item_the_dregling_s_sworn_crumb",
    "name": "The Dregling’s Sworn Crumb",
    "description": "The Dregling’s Sworn Crumb appears as a luminous, half-burnt crumb of bread, baked from the regrets of those who ventured too close to the edge. Consuming it offers a fleeting glimpse into forgotten anxieties, revealing spatial distortions that make you briefly aware of hidden dangers around you, yet also cause your movements to appear slightly skewed and less precise. This crumb is said to be crafted by the very essence of lost souls, leaving those who partake with an unsettling sense of unease.",
    "category": "consumables",
    "price": 390,
    "icon": "🍪",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Spatial Awareness",
      "Spatial Distortion"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Dimensional Slipstream Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Spatial Awareness",
        "rules": "On activation, you gain a +3 bonus to Perception checks for 60 seconds. The spatial distortion effect does not affect your vision but causes your movements to appear slightly skewed and less precise."
      },
      {
        "title": "Spatial Distortion",
        "rules": "For the duration of the enhanced perception, your movement speed is reduced by 10% due to a minor spatial distortion that affects accuracy. This effect ends when you move more than 30 feet or take an action."
      }
    ],
    "levelRequirementReason": "This crumb is accessible to lower-level characters as it offers a unique but manageable risk.",
    "vendorReason": "Edge Wanderers are known for their connections with the edge and have access to such items.",
    "shippingDetail": "Ships via the Dimensional Slipstream Courier, which ensures that the crumb remains intact during transit.",
    "usage": {
      "activation": "Eaten as a consumable item",
      "duration": "60 seconds",
      "endsWhen": "You move more than 30 feet or take an action",
      "charges": "Unlimited"
    },
    "priceReason": "The crumb's rarity and the unique combination of benefits justify its high price.",
    "priceOriginal": 75,
    "priceReviewedAt": "2026-07-25T03:20:52.807112+00:00",
    "aiReviewedAt": "2026-07-25T03:20:52.807112+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_mk_89_hallowed_boundary_resonator": {
    "id": "almost_edge_item_mk_89_hallowed_boundary_resonator",
    "name": "Mk.89 Hallowed Boundary Resonator",
    "description": "The Mk.89 Hallowed Boundary Resonator, a hexagonal device tarnished by time yet glowing faintly with an ancient magic, is said to have been crafted by a long-forgotten civilization that revered the edge of existence. When activated, it emits a soothing hum that stabilizes your position for a brief moment, preventing accidental falls and disorienting foes within its radius. Crafted from the remnants of sacred materials, this relic is both a tool and an artifact imbued with the essence of forgotten rituals.",
    "category": "equipment",
    "price": 1400,
    "icon": "⚙️",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Edge Stabilization",
      "Disorienting Hum"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Gravitic Packet Delivery",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Edge Stabilization",
        "rules": "When activated as a bonus action, this device emits a stabilizing hum that prevents you from falling for the duration of your next turn. If you would fall during that time, you instead land safely on your feet."
      },
      {
        "title": "Disorienting Hum",
        "rules": "The resonator creates an auditory disturbance within 5 meters of its user, causing all enemies in this area to make a Wisdom saving throw (DC 13) or be disoriented for 1 round. This effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "This device requires the user to have reached a high level of experience and proficiency, ensuring that only seasoned adventurers are capable of wielding its power.",
    "vendorReason": "The void merchant, with access to ancient relics and exotic artifacts, is known for carrying this unique device.",
    "shippingDetail": "Ships via Gravitic Packet Delivery, ensuring swift delivery from the far reaches of the cosmos.",
    "usage": {
      "activation": "Bonus action to activate and stabilize your position; once per long rest for disorienting effect.",
      "duration": "Instantaneous stabilization; disorientation lasts 1 round.",
      "endsWhen": "The effect ends when you fall, are incapacitated, or the device runs out of charges.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item's price is balanced at 1000 XP for its rare construction and powerful effects.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:21:02.372830+00:00",
    "aiReviewedAt": "2026-07-25T03:21:02.372830+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_the_liminal_shard_of_silence_sworn": {
    "id": "almost_edge_item_the_liminal_shard_of_silence_sworn",
    "name": "The Liminal Shard of Silence Sworn",
    "description": "The Liminal Shard of Silence Sworn is a jagged obsidian fragment that shimmers with an eerie, silent glow. When held for three seconds, it creates a localized zone of stillness within a five-meter radius, muffling all sounds and granting +5 to Concentration checks. The shard's cold touch sends a chill down the spine, as if the very air around you becomes deathly quiet. However, the silence is a hollow one; the wielder finds themselves temporarily without voice during its duration.",
    "category": "curiosities",
    "price": 5100,
    "icon": "🤫",
    "stock": 7,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Zone of Silence",
      "Silent Voice"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Phase Shift Carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Zone of Silence",
        "rules": "Activates as a bonus action. Creates a five-meter radius around the wielder for 30 seconds, muffling all sounds within its area. Grants +5 to Concentration checks during this effect. The silence ends when the wielder is incapacitated or the shard is removed from their possession."
      },
      {
        "title": "Silent Voice",
        "rules": "The wielder becomes temporarily mute for 30 seconds upon activation of Zone of Silence, unable to speak any words. This limitation lasts until the end of the silence effect. No save is required to avoid this."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers who need to focus on concentration without the distraction of their own voice.",
    "vendorReason": "The Liminal Trader deals in rare artifacts that bridge the gap between worlds, and this shard is a testament to the balance of silence and sound.",
    "shippingDetail": "Delivered through temporal anomalies, ensuring the shard arrives at its destination without delay.",
    "usage": {
      "activation": "Bonus action to activate; Zone lasts for 30 seconds.",
      "duration": "30 seconds duration.",
      "endsWhen": "The effect ends when the wielder is incapacitated or the shard is removed from their possession.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rarity and utility in critical scenarios where concentration and silence are paramount.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-25T03:21:07.082685+00:00",
    "aiReviewedAt": "2026-07-25T03:21:07.082685+00:00",
    "aiReviewVersion": 1
  }
};
