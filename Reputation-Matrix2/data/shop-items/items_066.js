// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_066 = {
  "teyvat_item_archon_whisper": {
    "id": "teyvat_item_archon_whisper",
    "name": "Archon Whisper Stone",
    "description": "Carved from a fragment of an Archon's decree, this stone allows you to briefly understand the subtle language of elemental spirits. Just don’t ask it about Wario’s schemes – it gets… uncomfortable.",
    "category": "curiosities",
    "price": 800,
    "icon": "🗣️",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "elemental_communication_2",
      "chance_to_find_hidden_paths"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "swift_current",
    "levelRequirement": 5
  },
  "teyvat_item_elemental_resonance_scan": {
    "id": "teyvat_item_elemental_resonance_scan",
    "name": "Elemental Resonance Scan",
    "description": "Elemental Resonance Scan is a sleek, glowing device that hums with latent power. Crafted from polished obsidian and silver, it channels the essence of Teyvat’s elemental forces to analyze any target within its range. This invaluable tool reveals an entity's elemental affinity and potential weaknesses, offering crucial insights for strategic planning. With Wario as its master, this gadget has proven indispensable for locating prime mushroom patches across Liyue Harbor.",
    "category": "services",
    "price": 1000,
    "icon": "🔍",
    "stock": 38,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "reveals_elemental_affinity",
      "discovers_weaknesses"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "oceanic_current",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Elemental Affinity",
        "rules": "When activated, the device emits a brief pulse that reveals the target's elemental affinity. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Discover Weaknesses",
        "rules": "The scan has a 20% chance to reveal any potential weaknesses in the target. If successful, this effect lasts for 1 minute and can be retriggered once per long rest."
      }
    ],
    "levelRequirementReason": "This gadget is accessible to all adventurers who wish to harness its power.",
    "vendorReason": "As a hub for Teyvat’s mushroom farming community, Liyue Harbor naturally stocks tools like Elemental Resonance Scan.",
    "shippingDetail": "Delivered via the swift Oceanic Current, ensuring timely arrival of this vital tool.",
    "usage": {
      "activation": "A bonus action to activate and perform a scan.",
      "duration": "Instantaneous for revealing affinity; 1 minute for discovering weaknesses, which can be retriggered once per long rest.",
      "endsWhen": "The effect concludes upon the end of its duration or if the device is damaged.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The balanced price reflects the gadget's utility in strategic planning and elemental analysis.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:32:56.909094+00:00",
    "aiReviewedAt": "2026-07-23T23:32:56.909094+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_wario_crumb_boots": {
    "id": "almost_edge_item_wario_crumb_boots",
    "name": "Wario's Crumble Boots",
    "description": "Wario's Crumble Boots are forged from the very essence of Wario’s discarded crumbs and the despair of his victims. Each step leaves a shimmering trail of sweet, unsettling residue that attracts nearby pests. Strangely, these boots grant you an uncanny resistance to falling, reducing your risk by half, and allow you to cling momentarily to surfaces, but beware—your steps leave behind sticky trails that can compromise stealth.",
    "category": "equipment",
    "price": 1000,
    "icon": "👟",
    "stock": 35,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "resistant to falling",
      "sticky residue"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "gravity well courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Resistant to Falling",
        "rules": "As a bonus action, activate the boots' resistance to falling. You have advantage on Acrobatics checks and are considered proficient in Acrobatics if you aren't already. The effect lasts until the start of your next turn or until you fall."
      },
      {
        "title": "Sticky Residue",
        "rules": "When you use a bonus action, you can create a small amount of sticky residue on surfaces within 5 feet. This lasts for 1 minute and grants you advantage on Strength (Athletics) checks to climb or adhere to the surface."
      }
    ],
    "levelRequirementReason": "These boots require a significant investment in physical prowess, which is why they are only available to characters of at least level 6.",
    "vendorReason": "The edge wanderers have a unique understanding of the bizarre and supernatural, making Wario's Crumble Boots an ideal addition to their inventory.",
    "shippingDetail": "Ships via gravity well courier for expedited delivery within three days.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the start of your next turn or until you fall, whichever comes first; Sticky Residue lasts for 1 minute.",
      "endsWhen": "The effect ends when you fall or lose consciousness.",
      "charges": "Unlimited"
    },
    "priceReason": "The boots' unique combination of abilities and their origin story justify a price that reflects both their rarity and the complexity of their magical properties.",
    "priceOriginal": 700,
    "priceReviewedAt": "2026-07-23T23:32:39.279084+00:00",
    "aiReviewedAt": "2026-07-23T23:32:39.279084+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_liminal_echo_stone": {
    "id": "almost_edge_item_liminal_echo_stone",
    "name": "Liminal Echo Stone",
    "description": "The Liminal Echo Stone is a smooth, grey stone that hums with ancient whispers. When held briefly, it opens a brief window into forgotten realms, allowing you to hear echoes of past events—mostly just static and unsettling giggles. This relic is said to have been crafted by the Liminal Traders from fragments of old realities, making it a treasure for those who seek lost knowledge or wish to test their courage in the face of the unknown.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔈",
    "stock": 90,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Echoes of Past",
      "Vague Clues"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "quantum entanglement courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes of Past",
        "rules": "By touching the stone, you can hear faint echoes of past events. This effect has a 1% chance to trigger a minor illusion that provides vague and often misleading information about recent history within a 30-foot radius. The duration is instantaneous. There is no save DC required for this effect."
      },
      {
        "title": "Vague Clues",
        "rules": "The stone grants you slightly increased chances of finding lost items or learning about nearby dangers, but the information provided is often vague and unreliable. This benefit lasts until the end of your next short rest. There is no save DC required for this effect."
      }
    ],
    "levelRequirementReason": "The stone's power lies in its ability to bridge forgotten realities, which is accessible to adventurers at any level.",
    "vendorReason": "As the Liminal Traders are known for their dealings with ancient and mysterious relics, it makes sense that they would sell this item.",
    "shippingDetail": "The stone is delivered via quantum entanglement, ensuring swift arrival to your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous or until the end of the next short rest",
      "endsWhen": "The effect ends when you finish a short rest or the minor illusion fades",
      "charges": "Unlimited, but only one use per short rest"
    },
    "priceReason": "This price reflects its uncommon rarity and the balance between the item's uncertain benefits and drawbacks.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:32:39.571864+00:00",
    "aiReviewedAt": "2026-07-23T23:32:39.571864+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_layer_charm": {
    "id": "grand_country_layer_charm",
    "name": "The Shifting Stratum",
    "description": "The Shifting Stratum is a curious charm crafted from solidified layer-stuff, shaped like a small, shimmering cube. It allows the wearer to briefly step between adjacent layers of space, offering tactical advantages in complex environments. Its material origin makes it unstable when overused; too many shifts can cause severe disorientation and temporary loss of spatial orientation. The charm also emits a faint, shifting pattern that can confuse foes momentarily.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "teleport: short range (3 tiles)",
      "confusion: minor"
    ],
    "vendor": "layer_market",
    "shippedBy": "Standard Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleport: Short Range",
        "rules": "The user may activate this effect as a bonus action to teleport up to 3 tiles to an unoccupied adjacent space. The duration is instantaneous, and it ends when the user lands."
      },
      {
        "title": "Confusion: Minor",
        "rules": "There is a 10% chance (DC 12) that a creature adjacent to the user becomes confused for 1 round upon teleportation. This effect has a daily limit of once per long rest."
      }
    ],
    "levelRequirementReason": "The charm's instability requires at least level 1 to handle its effects without risking disorientation.",
    "vendorReason": "Layer Market specializes in items related to the layers of reality, and this charm is a perfect fit for their clientele.",
    "shippingDetail": "The Shifting Stratum is carefully packaged to prevent accidental shifting during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Upon landing at the destination or if the user is interrupted",
      "charges": "Unlimited, but limited by daily rest"
    },
    "priceReason": "The charm's uncommon rarity and magical properties justify its price in experience points.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:32:57.078711+00:00",
    "aiReviewedAt": "2026-07-23T23:32:57.078711+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_service_resonance": {
    "id": "grand_country_service_resonance",
    "name": "Harmonic Healing Touch",
    "description": "Harmonic Healing Touch is a skilled healer's touch imbued with resonant energy. Crafted from the heartwood of ancient lyres, this service rapidly mends wounds and soothes ailments, offering a brief reprieve from pain and suffering. The resonant core amplifies the touch's efficacy, making it perfect for healing Wario's explosive nature. Remember to tip generously (gold, obviously), as even minor acts of kindness are rewarded in this bustling metropolis.",
    "category": "services",
    "price": 1000,
    "icon": "❤️‍🩹",
    "stock": 28,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heal: 20 hp",
      "remove_poison"
    ],
    "vendor": "side_seller",
    "shippedBy": "Personal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Touch",
        "rules": "An action that restores 20 hit points to a target creature. The effect ends if the target takes damage or dies."
      },
      {
        "title": "Poison Removal",
        "rules": "Instantly removes one level of poison from the target, with no save required. This effect is lost if the target fails a saving throw against another poison effect."
      }
    ],
    "levelRequirementReason": "This service requires basic healing knowledge and dexterity.",
    "vendorReason": "Side sellers often have connections with various healers, offering unique services like Harmonic Healing Touch.",
    "shippingDetail": "Delivered by a trusted courier within the hour.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The target takes damage or dies",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rare materials and expert craftsmanship required for this service.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T23:32:55.072644+00:00",
    "aiReviewedAt": "2026-07-23T23:32:55.072644+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_godly_harmony_amulet": {
    "id": "equestria_item_godly_harmony_amulet",
    "name": "Amulet of Ultimate Harmony",
    "description": "The Amulet of Ultimate Harmony radiates a serene glow, its facets reflecting the perfect balance it bestows upon its wearer. Crafted from the essence of friendship and imbued with the harmony of Equestria's magical core, this amulet can suppress chaotic energies and amplify positive bonds. Its wearer becomes a beacon of tranquility, turning discord into serenity and enhancing the effectiveness of all healing magic by 25%. But beware, should it lose its balance, it might inadvertently magnify any imbalance within the wielder.",
    "category": "premium",
    "price": 1000,
    "icon": "☮️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "back_order",
    "effects": [
      "suppresses_chaos",
      "amplifies_friendship"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Suppresses Chaos",
        "rules": "The wearer can use an action to suppress chaotic energies in a 10-foot radius, reducing the effective level of any chaotic spell or effect within by one step. This ability has no save DC and does not expend charges."
      },
      {
        "title": "Amplifies Friendship",
        "rules": "For every hour spent wearing this amulet in a place filled with positive emotions, the wearer's Charisma (Persuasion) checks gain advantage until the end of their next short or long rest. This effect does not require an action and can be used once per day."
      }
    ],
    "levelRequirementReason": "Even a novice pony can sense the balance this amulet brings, making it accessible to all who seek harmony.",
    "vendorReason": "The Crystal Empire is renowned for its mastery of magical artifacts that promote peace and unity, making it the perfect vendor for such an item.",
    "shippingDetail": "Ships via the Crystal Courier, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Action or Reaction (suppresses chaos)",
      "duration": "Instantaneous (suppresses chaos), until next long rest (amplifies friendship)",
      "endsWhen": "Worn out of combat or environment (suppresses chaos), ends at the end of a short or long rest (amplifies friendship)",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced cost reflects its rarity and the minor magical effort required to maintain its harmony.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-23T23:33:55.220883+00:00",
    "aiReviewedAt": "2026-07-23T23:33:55.220883+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_oracle_shard": {
    "id": "curiosity_oracle_shard",
    "name": "Fragment of the Oracle's Gaze",
    "description": "The Fragment of the Oracle's Gaze hums with ancient power, its iridescent surface pulsing with forgotten prophecies and unsettling truths. This shard is crafted from the very essence of a long-lost oracle’s gaze, imbued with knowledge that can either guide or corrupt. Touching it grants a brief glimpse into possible futures, but be warned – the wisdom it imparts comes at a cost to your sanity. It's surprisingly comfortable to hold and feels as though it were forged in the heart of a forgotten temple.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Glimpse of Future",
      "Oracle’s Insight"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Spectral Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glimpse of Future",
        "rules": "When activated, this shard allows you to gain advantage on one ability check or saving throw. This effect lasts for 1 hour and can be used once per long rest."
      },
      {
        "title": "Oracle’s Insight",
        "rules": "Once per day, you can roll a d20 and add your Wisdom modifier (minimum +5) to the result as an oracle's insight into the future. If the combined total is 18 or higher, you gain advantage on all ability checks made before the end of the current long rest."
      }
    ],
    "levelRequirementReason": "Even novices can appreciate the shard’s utility and its potential to guide their path.",
    "vendorReason": "Fate Forge is renowned for its connection with ancient oracles, making it a fitting vendor for this fragment.",
    "shippingDetail": "The delivery arrives within the week if purchased before sunset on the first day of the month.",
    "usage": {
      "activation": "Object interaction to activate and gain its effects.",
      "duration": "Instantaneous effect, lasts for 1 hour or until used up in a rest.",
      "endsWhen": "The effect ends when the user completes a long rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced as a mythic rarity, this shard offers significant utility without overshadowing standard items.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-23T23:33:40.959999+00:00",
    "aiReviewedAt": "2026-07-23T23:33:40.959999+00:00",
    "aiReviewVersion": 1
  },
  "service_persuasion_charm": {
    "id": "service_persuasion_charm",
    "name": "The Silver Tongue of Influence",
    "description": "The Silver Tongue of Influence gleams with a silvery sheen, its subtle energy humming with persuasive power. Crafted from rare alloys found only in the forges of ancient dwarven kingdoms, this charm amplifies your words, turning even the most skeptical listeners into eager confidants. Wario himself has tested it and swears by its effectiveness, ensuring that once you wear it, your arguments are as irresistible as a freshly baked pie straight from Pianta Island.",
    "category": "services",
    "price": 1000,
    "icon": "🗣️",
    "stock": 95,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "persuasive charisma",
      "reduced hostility"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Persuasive Charisma",
        "rules": "When you use an action to attempt to influence an NPC, you gain a +4 bonus to your persuasion skill checks and have a 15% chance to reduce the target's hostile disposition. This effect lasts until the end of your next turn."
      },
      {
        "title": "Reduced Hostility",
        "rules": "For as long as this charm is worn, any NPC within 30 feet who would be hostile towards you has their hostility reduced by one level, if possible, for a short duration. This effect ends when the wearer takes damage."
      }
    ],
    "levelRequirementReason": "This item enhances basic social skills and is suitable for beginners in negotiation or persuasion.",
    "vendorReason": "The chaos dealer, known for their array of unpredictable wares, stocks this charm as a go-to tool for those navigating the treacherous waters of diplomacy.",
    "shippingDetail": "Ships quickly via Winged Courier, delivered within three days anywhere in the realm.",
    "usage": {
      "activation": "Passive effect while worn; requires no activation action.",
      "duration": "Instantaneous on initial use; lasts until end of next turn or until wearer takes damage.",
      "endsWhen": "Wearer takes damage.",
      "charges": "Unlimited, recharges after a short rest."
    },
    "priceReason": "The charm's rarity and the added value it provides to basic social interactions justify its price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:33:25.825278+00:00",
    "aiReviewedAt": "2026-07-23T23:33:25.825278+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_sparkling_berry": {
    "id": "pokemon_item_sparkling_berry",
    "name": "Sparkling Berry of Wonder",
    "description": "The Sparkling Berry of Wonder radiates an ethereal glow, its surface shimmering like a captured starry sky. When you consume one, your muscles surge with untapped strength and agility, leaving you feeling both invigorated and electrified. The berry's essence grants you a +2 bonus to Dexterity and Constitution for the next hour, but beware—there's a chance that after the boost, you'll be left confused for 1d4 minutes.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temporary_stat_boost (Dexterity)",
      "chance_to_inflict_confusion"
    ],
    "vendor": "pokemart",
    "shippedBy": "Poké Mail Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Stat Boost",
        "rules": "You gain a +2 bonus to Dexterity and Constitution for 1 hour. This effect is instantaneous upon consumption, lasts until the start of your next turn after the expiration, and can be used once per long rest."
      },
      {
        "title": "Chance to Inflict Confusion",
        "rules": "There's a 20% chance that you become confused for 1d4 minutes immediately after consuming the berry. You must succeed on a DC 15 Wisdom saving throw or be affected by this effect, which ends when it is no longer the result of the confusion."
      }
    ],
    "levelRequirementReason": "The Sparkling Berry of Wonder provides a significant temporary boost to combat readiness but can also lead to unintended side effects, making it suitable for those who have at least reached their first level.",
    "vendorReason": "Pokemarts are known for carrying items that enhance both the performance and experience of Pokémon trainers in battle.",
    "shippingDetail": "The Poké Mail Drone delivers your order within a day, ensuring that you're ready to take on any challenge with renewed vigor.",
    "usage": {
      "activation": "Eaten as a consumable",
      "duration": "1 hour + 1 round after expiration",
      "endsWhen": "Ends when the duration expires or if confusion is triggered",
      "charges": "Unlimited, but once per long rest"
    },
    "priceReason": "The Sparkling Berry of Wonder provides a potent temporary stat boost and a chance for additional benefits, making it worth double its common rarity price.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-23T23:33:58.268548+00:00",
    "aiReviewedAt": "2026-07-23T23:33:58.268548+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_ancient_badge_of_valor": {
    "id": "pokemon_item_ancient_badge_of_valor",
    "name": "Ancient Badge of Valor",
    "description": "The Ancient Badge of Valor is a rusted, intricately engraved badge, imbued with the valor and strength of legendary Pokémon trainers. Its surface glows faintly with an ancient energy, lending both a +5 bonus to attack and +3 to defense when worn. It whispers tales of battles fought and won by those who once claimed it as their own, granting you the chance for a critical hit on any successful attack.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏆",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "attack boost",
      "defense boost"
    ],
    "vendor": "league_store",
    "shippedBy": "Elite Trainer Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Attack Boost",
        "rules": "This effect provides a +5 bonus to your attack rolls. It activates as soon as you put the badge on and lasts until removed or destroyed."
      },
      {
        "title": "Defense Boost",
        "rules": "Wearing this badge grants a +3 bonus to AC, effective immediately upon donning it and lasting until it is taken off or destroyed."
      }
    ],
    "levelRequirementReason": "The Ancient Badge of Valor is suitable for all adventurers as its power is meant to be shared.",
    "vendorReason": "League Store curates items from the most respected trainers, ensuring that only the finest gear and relics are sold there.",
    "shippingDetail": "The Elite Trainer Courier ensures swift delivery, often arriving within a day of purchase.",
    "usage": {
      "activation": "Passive effect upon donning the badge.",
      "duration": "Until removed or destroyed.",
      "endsWhen": "When the badge is taken off or destroyed in battle.",
      "charges": "Unlimited"
    },
    "priceReason": "The Ancient Badge of Valor strikes a balance, offering a substantial stat boost for a fair price.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T23:34:22.769503+00:00",
    "aiReviewedAt": "2026-07-23T23:34:22.769503+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_phantom_feather": {
    "id": "pokemon_item_phantom_feather",
    "name": "Phantom Feather of Echoes",
    "description": "The Phantom Feather of Echoes is a single, ghostly white feather that whispers tales of battles past when held. It's said to have fallen from the wing of a legendary Ghost-type Pokémon long vanished into the Veil. This relic grants you fleeting access to ancient battlefields, allowing you to hear the echoes of skirmishes and strategize unseen. Its whispering can confuse foes by leading them astray in hidden paths they cannot see.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👻",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Echoing Whispers",
      "Pathfinding"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Ghostly Courier Service",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echoing Whispers",
        "rules": "As a bonus action, you hear the echoes of past battles within a 30-foot radius. This lasts for 1 minute per level of the user. Any creature within this area must succeed on a Wisdom saving throw (DC 15) or become paralyzed until the start of their next turn."
      },
      {
        "title": "Pathfinding",
        "rules": "For the duration of your hearing, you gain advantage on Perception checks to find hidden paths and secret doors. This effect lasts for 1 hour per level of the user, but it ends if you leave the area or are incapacitated."
      }
    ],
    "levelRequirementReason": "This relic requires a minimum level due to its potent effects that can influence combat and strategic advantage.",
    "vendorReason": "The Safari Shop specializes in rare Pokémon artifacts, including relics with mystical origins like the Phantom Feather of Echoes.",
    "shippingDetail": "Delivered via spectral courier who ensures safe and timely arrival within a week.",
    "usage": {
      "activation": "Bonus action to activate hearing; passive effect for pathfinding.",
      "duration": "1 minute per level for Echoing Whispers, 1 hour per level for Pathfinding",
      "endsWhen": "Ends when the user leaves the area or becomes incapacitated; bonus action use.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects its rarity and the powerful, yet not overpowered, effects it offers.",
    "priceOriginal": 230000,
    "priceReviewedAt": "2026-07-23T23:34:11.315496+00:00",
    "aiReviewedAt": "2026-07-23T23:34:11.315496+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_circuit_breaker_shard": {
    "id": "connectopia_circuit_breaker_shard",
    "name": "Fragment of the Null Conduit",
    "description": "Recovered from a collapsed data nexus, this shard hums with suppressed energy. Crafted during a catastrophic digital storm, it whispers of forgotten cybernetic secrets and unseen electromagnetic interference. When activated, it disrupts electronic devices in the immediate area, causing temporary malfunctions in mechanical constructs and automated defenses. Rumored to be a relic of the Null Conduit, this shard is both a tool for mischief and a symbol of forbidden knowledge.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💥",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Disrupts electronic devices",
      "Confuses mechanical constructs"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Roving Scout Drone",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Electromagnetic Interference",
        "rules": "When activated as an action within 30 feet, this shard creates a zone of electromagnetic interference that lasts for 1 minute. All creatures and objects within the area have disadvantage on attack rolls and saving throws against electronic devices. Mechanical constructs in the area automatically fail any saving throw to resist the effect."
      },
      {
        "title": "Confusion Aura",
        "rules": "For every round this shard remains active, each mechanical construct within 30 feet must make a DC 14 Wisdom saving throw or become confused for the rest of the duration. On a successful save, they are immune to its effects for 24 hours."
      }
    ],
    "levelRequirementReason": "Requires at least level 7 to handle the shard's volatile energy safely and effectively.",
    "vendorReason": "Pioneer Post, known for their connections with arcane technology, has a reliable network to ensure such forbidden items reach capable hands.",
    "shippingDetail": "Ships via the Roving Scout Drone, ensuring swift delivery and secure handling of this delicate artifact.",
    "usage": {
      "activation": "Activate as an action within 30 feet of a target area.",
      "duration": "1 minute or until dispelled by magic.",
      "endsWhen": "Destroyed if exposed to strong electronic fields or direct electrical currents.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its utility in disrupting electronic defenses and constructs without overpowered effects.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:02:45.949066+00:00",
    "aiReviewedAt": "2026-07-25T00:02:45.949066+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_blueprint_for_portable_mine": {
    "id": "connectopia_blueprint_for_portable_mine",
    "name": "Schematic for the 'Dig-o-Matic'",
    "description": "This blueprint, etched onto a rugged block of quartz, is a masterful fusion of ancient mining lore and modern engineering. Crafted by the enigmatic Forgeheart Foundry, it details how to construct a portable 'Dig-o-Matic'—a compact automated mining unit that can extract small veins of ore and gems with precision. Though its assembly requires basic crafting skills, the blueprint itself is known for being slightly unpredictable; occasionally, the Dig-o-Matic may malfunction, causing a minor tremor beneath your feet as it mines.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⛏️",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Crafts a 'Dig-o-Matic' (requires basic crafting skills)",
      "Automates small-scale mining"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Standard Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mining Operation",
        "rules": "Activates on the start of your turn as an action. The Dig-o-Matic mines for small amounts of ore and gems within a 5-foot radius, dealing no damage but uncovering valuable resources worth up to 10 gp in value. If it malfunctions, the user must succeed on a DC 12 Dexterity saving throw or trigger a minor tremor."
      },
      {
        "title": "Unstable Assembly",
        "rules": "There is a 5% chance per day that the Dig-o-Matic will spontaneously malfunction during assembly. If this occurs, the blueprint's creator must succeed on a DC 14 Intelligence (Engineering) check or risk losing half of the crafted item’s value."
      }
    ],
    "levelRequirementReason": "This item requires basic crafting skills and is designed for beginners to experiment with mining technology.",
    "vendorReason": "Craft Corner specializes in tools and blueprints that help adventurers craft essential gear, making it the perfect vendor for this blueprint.",
    "shippingDetail": "Ships within 3 days of purchase. Due to its weight, an additional 50 XP is added to the shipping cost.",
    "usage": {
      "activation": "Activates on the start of your turn as a bonus action.",
      "duration": "Instantaneous.",
      "endsWhen": "The mining operation ends when you stop using it or the Dig-o-Matic malfunctions.",
      "charges": "Unlimited, but requires crafting checks during assembly."
    },
    "priceReason": "Reflects the advanced blueprint's value in crafting a useful and potentially dangerous tool.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:34:16.469609+00:00",
    "aiReviewedAt": "2026-07-23T23:34:16.469609+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_therapy": {
    "id": "internet_meme_therapy",
    "name": "Existential Validation Session",
    "description": "The Existential Validation Session offers a digital therapy session where your mind is flooded with the most popular memes from The Internet, temporarily boosting confidence and morale. This service can instantly transform your outlook on life, replacing lingering feelings of voidness with laughter and community. Warning: While not physically dangerous, prolonged use might encourage you to share these memes across various platforms, potentially leading to an uncontrollable meme-sharing compulsion.",
    "category": "services",
    "price": 1000,
    "icon": "😂",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "temporary_confidence_boost",
      "chance_to_charm"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Neural Interface Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Confidence Boost",
        "rules": "This effect grants the user a +2 bonus to Charisma-based checks and saving throws for 1 hour. The effect can be activated as a bonus action, but the duration resets each time the session is reactivated."
      },
      {
        "title": "Chance to Charm",
        "rules": "There is a 30% chance (DC 12) that any hostile creature within 30 feet of the user will become charmed for 1 minute upon activation. The charm ends early if the charmed creature takes damage."
      }
    ],
    "levelRequirementReason": "The session is designed to be accessible to all adventurers, regardless of their level.",
    "vendorReason": "Data Dealer specializes in providing unique and innovative services that cater to the ever-changing needs of the adventurer community.",
    "shippingDetail": "The service is delivered instantaneously upon payment, with no waiting time for activation.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour per session",
      "endsWhen": "The duration ends when the user's next short or long rest begins",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects a balanced XP cost for a rare and unique service that provides significant, yet temporary, benefits.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:34:40.089634+00:00",
    "aiReviewedAt": "2026-07-23T23:34:40.089634+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_voidwalker_amulet": {
    "id": "almost_edge_item_voidwalker_amulet",
    "name": "Amulet of the Liminal Step",
    "description": "The Amulet of the Liminal Step, forged from solidified void-stuff, allows its wearer to phase through thin barriers by bending reality itself for a fleeting moment. Crafted in the shadowy depths of the Void Market, it is said that each amulet captures a fragment of liminal space, making passage through weak barriers both possible and perilous. Once worn, the wearer can slip through narrow gaps or weakened walls, but beware – if trapped, there's no guarantee you'll find your way back to solid ground.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌌",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "liminal_passage",
      "stealthy_phasing"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Liminal Passage",
        "rules": "As a bonus action, the wearer can attempt to phase through thin barriers. The amulet allows passage if the barrier's Strength (Perception) check is equal to or less than your Wisdom modifier +10. Once used, it requires 24 hours of meditation and concentration to recharge."
      },
      {
        "title": "Stealthy Phasing",
        "rules": "While wearing this amulet, you have advantage on Dexterity (Stealth) checks for up to 1 hour after using Liminal Passage. If you are caught in a phasing attempt and fail the check, you gain disadvantage until your next long rest."
      }
    ],
    "levelRequirementReason": "The amulet's power requires a strong grasp of reality manipulation, which only those of at least 8th level can achieve.",
    "vendorReason": "As a dealer in the liminal and the strange, the Void Merchant is well-known for offering items that bend time and space, making this amulet an expected addition to their inventory.",
    "shippingDetail": "The amulet arrives via a dimensional rift, ensuring it reaches its destination with minimal risk of being seen or intercepted.",
    "usage": {
      "activation": "Bonus action for Liminal Passage; passive effect during Stealth checks for up to 1 hour.",
      "duration": "Instantaneous for Liminal Passage; passive effect lasts until the end of your next turn for Stealthy Phasing.",
      "endsWhen": "Once used, it requires a day and night of meditation to recharge. If caught in liminal phasing, the effect ends immediately.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The amulet's rarity and unique crafting process ensure its value remains consistent with other high-end rare equipment.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:34:50.357844+00:00",
    "aiReviewedAt": "2026-07-23T23:34:50.357844+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_forgotten_echoes": {
    "id": "almost_edge_item_forgotten_echoes",
    "name": "Forgotten Echoes of the Lost",
    "description": "Forgotten Echoes of the Lost are delicate, spectral music boxes crafted from tarnished brass and encrusted with gemstones that seem to hum faintly with ancient magic. When wound, they release haunting melodies that can either draw the attention of restless spirits or evoke deep sorrow in those who listen too long. Each box is a relic from a bygone era, its tune weaving through time like a forgotten memory come to life.",
    "category": "faction",
    "price": 1000,
    "icon": "🎶",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "haunting melodies",
      "risk of attracting unwanted attention"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "phantom_delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Haunting Melodies",
        "rules": "Activating the music box allows you to play a haunting melody that lasts for 1 minute. Any creature within 30 feet must succeed on a DC 15 Wisdom saving throw or become charmed by the melody until the start of your next turn. A charmed creature can repeat the save at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "title": "Risk of Attracting Unwanted Attention",
        "rules": "There is a 25% chance (roll a d4) that activating one of these music boxes will attract the attention of nearby spirits or restless entities. This attraction lasts until you deactivate all active music boxes within your possession, and any creature affected by this effect must make another Wisdom saving throw with a DC equal to 10 + your Charisma modifier."
      }
    ],
    "levelRequirementReason": "The intricate craftsmanship and ancient magic of the Forgotten Echoes necessitate a certain level of experience to wield their power responsibly.",
    "vendorReason": "The Liminal Trader specializes in items that bridge worlds, making these spectral music boxes an ideal addition to her inventory.",
    "shippingDetail": "Ships via Phantom Delivery Service, known for its mysterious and timely deliveries.",
    "usage": {
      "activation": "A bonus action is required to wind a single music box.",
      "duration": "The melody lasts for 1 minute or until you deactivate the box.",
      "endsWhen": "The effect ends if another creature within range makes an attack against you, or if you deactivate all active boxes in your possession.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the item's rarity and the mystical power it contains, balanced to ensure it remains a valuable but not overpowered addition to any character's inventory.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T23:35:26.135632+00:00",
    "aiReviewedAt": "2026-07-23T23:35:26.135632+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_block_shimmer": {
    "id": "connectopia_block_shimmer",
    "name": "Shimmering Resonance Block",
    "description": "The Shimmering Resonance Block pulses with a vibrant, ethereal glow that seems to ripple and hum in sync with Connectopia's very energy. When rubbed against another of these blocks, it generates a resonant wave capable of boosting crafting speed by up to 50% for the next hour. The block also has an eerie knack for revealing hidden tunnels, but only if you've crafted at least one item within the last day. Stare too long and you might find yourself with a case of unexpected hiccups—Wario's warning holds true here.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "crafting_speed_boost",
      "tunnel_revelation"
    ],
    "vendor": "block_smith",
    "shippedBy": "crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crafting Speed Boost",
        "rules": "When the block is rubbed against another, it grants a +2d6 bonus to crafting checks for one hour. This effect can be used once per day."
      },
      {
        "title": "Tunnel Revelation",
        "rules": "The block reveals hidden tunnels within a 30-foot radius of your current location with a successful DC 15 Wisdom (Perception) check. This effect can only be used if you have crafted an item using the Shimmering Resonance Block within the last day."
      }
    ],
    "levelRequirementReason": "This block is accessible to all adventurers, offering a helpful tool for those just starting their journey.",
    "vendorReason": "The block smiths of Connectopia are well-versed in the peculiarities of these blocks and can provide them directly from their workshops.",
    "shippingDetail": "Ships via standard crate, delivered within a week.",
    "usage": {
      "activation": "Rubbing one block against another as an action.",
      "duration": "One hour.",
      "endsWhen": "The effect ends after one hour or when the block is rubbed again.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its utility in both crafting and exploration without being overpowered.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:35:08.360573+00:00",
    "aiReviewedAt": "2026-07-23T23:35:08.360573+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_blueprint_analysis": {
    "id": "connectopia_blueprint_analysis",
    "name": "Automated Blueprint Scan",
    "description": "The Automated Blueprint Scan is a sleek, metallic device crafted by Pioneer Post engineers. Equipped with cutting-edge scanning technology, it whirs to life when held over a blueprint, instantly analyzing its structural integrity and pinpointing optimal materials for crafting. The scanner’s LED lights flash vibrant hues as it identifies potential weaknesses and suggests improvements, all in the blink of an eye. This invaluable tool streamlines your crafting process, ensuring that even the most intricate blueprints are executed flawlessly.",
    "category": "services",
    "price": 1000,
    "icon": "🔍",
    "stock": 20,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "blueprint_analysis",
      "optimal_material_identification"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blueprint Analysis",
        "rules": "When activated as a bonus action, this device scans an open blueprint. It provides a detailed analysis of the blueprint's structural integrity and potential weaknesses within 1 minute. This effect is limited to once per day."
      },
      {
        "title": "Optimal Material Identification",
        "rules": "Upon successful completion of the Blueprint Analysis, you gain advantage on any Craft check related to the scanned blueprint for 24 hours. This effect does not require a saving throw and has no save DC or other restrictions."
      }
    ],
    "levelRequirementReason": "This tool is designed for all adventurers who need precise blueprints, regardless of their level.",
    "vendorReason": "Pioneer Post specializes in innovative tools that streamline the crafting process and ensure structural integrity.",
    "shippingDetail": "The scanner is delivered by a Pioneer Post drone within 24 hours of purchase, ensuring you receive your tool quickly.",
    "usage": {
      "activation": "Bonus action to activate, passive while in use",
      "duration": "Instantaneous analysis; effect lasts for 24 hours after successful completion",
      "endsWhen": "Effect expires at the end of 24 hours or when used again on a new blueprint",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the advanced technology and precision engineering required to produce this invaluable tool.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:35:20.647066+00:00",
    "aiReviewedAt": "2026-07-23T23:35:20.647066+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_shard_of_nexus": {
    "id": "connectopia_shard_of_nexus",
    "name": "Shard of Nexus",
    "description": "The Shard of Nexus is a jagged, crystalline fragment that hums with an eerie, chaotic energy. Crafted from the raw essence of Connectopia's Nexus, it pulses with unpredictable power. Locals say it can warp reality and summon block monsters, but a few daredevils believe it holds secrets to unlocking new dimensions. Handle this shard only if you're prepared for the unexpected; its magic is both perilous and potentially life-changing.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Reality Warping",
      "Block Monster Summoning"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Dimensional Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reality Warping",
        "rules": "Activating the Shard causes a brief ripple in reality, creating unstable spatial distortions. This effect lasts for 1 minute and has a range of 30 feet. Any creature within this area must succeed on a DC 15 Dexterity saving throw or be disoriented for 1 round. The shard can be used once per long rest."
      },
      {
        "title": "Block Monster Summoning",
        "rules": "The Shard can summon block monsters from the Plane of Chaos as an action. These creatures are hostile and must be driven off with force. The Shard has a limited number of charges (3), which recharge after 8 hours of rest."
      }
    ],
    "levelRequirementReason": "The Shard's unpredictable nature requires even the most seasoned adventurers to have at least 1 level to handle its potential risks.",
    "vendorReason": "Craft Corner specializes in rare and mythic items, including shards of mystical origins like the Nexus.",
    "shippingDetail": "The Shard is delivered via Dimensional Express, ensuring it arrives intact but requiring special handling.",
    "usage": {
      "activation": "Action or Reaction (to summon block monsters)",
      "duration": "Instantaneous (reality warping), 1 minute (distortion effect)",
      "endsWhen": "Ends when the duration expires or the Shard is destroyed",
      "charges": "3 charges, recharged after a long rest"
    },
    "priceReason": "The Shard's rarity and unpredictable power justify its price of 1000 XP.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T23:35:42.540894+00:00",
    "aiReviewedAt": "2026-07-23T23:35:42.540894+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_oceanic_pearl": {
    "id": "teyvat_item_oceanic_pearl",
    "name": "Oceanic Resonance Pearl",
    "description": "The Oceanic Resonance Pearl gleams with a faint Hydro energy, harvested from the treacherous depths of Liyue's trenchlands where ancient currents still course. This shimmering gem not only restores your vitality but also grants you the power to manipulate water, creating small whirlpools that hinder foes' movements and give you an edge in any squall or calm. A perfect companion for those navigating through stormy seas and grumpy merchants alike.",
    "category": "consumables",
    "price": 1000,
    "icon": "💧",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Hydro Manipulation",
      "Vitality Boost"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Seabird Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hydro Manipulation",
        "rules": "As a bonus action, you can create a small whirlpool around an enemy within 30 feet. On a successful hit, the target must make a DC 14 Strength saving throw or be slowed by 15% for 1 minute."
      },
      {
        "title": "Vitality Boost",
        "rules": "When consumed, this pearl restores 25 Hit Points to you and grants you advantage on your next attack roll. This effect can only occur once per short rest."
      }
    ],
    "levelRequirementReason": "This item is crafted for beginners who need a reliable way to restore health and gain an edge in combat.",
    "vendorReason": "As a port city, Liyue Harbor is well-versed with the ocean's secrets, including the treasures found deep within its trenchlands.",
    "shippingDetail": "Ships via the Seabird Express, ensuring swift delivery from the depths of Liyue.",
    "usage": {
      "activation": "Bonus action to create whirlpool; consumed on use for vitality boost.",
      "duration": "Instantaneous for vitality boost; whirlpools last until end of turn or target is no longer within range.",
      "endsWhen": "Upon consumption or when the effect duration ends.",
      "charges": "Unlimited, as it can be consumed once per short rest."
    },
    "priceReason": "This item provides a unique combination of utility and combat advantage, justifying its higher price in experience points.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:36:35.310857+00:00",
    "aiReviewedAt": "2026-07-23T23:36:35.310857+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_legendary_rainbow_shard": {
    "id": "equestria_item_legendary_rainbow_shard",
    "name": "Legendary Rainbow Shard of Discord",
    "description": "The Legendary Rainbow Shard of Discord is a shimmering fragment, torn from the very storm that once threatened Equestria itself. Crafted from chaotic magic and the heart of a tempest, it pulses with unpredictable energy. While its touch can amplify magical effects by +20%, prolonged use risks unleashing bursts of dissonance—randomly altering spell durations or causing temporary confusion for all within 30 feet. This shard is said to have been forged in Discord's own hands, and only the bravest dare wield it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌈",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "magic amplification +20%",
      "risk of minor chaotic effect (roll d6: 1-2 = spell duration halved, 3-4 = temporary confusion for all within 30 feet)"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magic Amplification",
        "rules": "Activate as a bonus action. The next spell you cast has advantage on the save or check roll. This effect lasts until the end of your next turn. Requires concentration."
      },
      {
        "title": "Chaotic Burst",
        "rules": "Roll d6 at the start of each of your turns while holding this shard. On a 1-2, the spell you cast has its duration halved. On a 3-4, all creatures within 30 feet must succeed on a DC 15 Wisdom saving throw or become confused until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Even at lower levels, adventurers can appreciate its power and danger.",
    "vendorReason": "As a legendary item with ancient origins, Canterlot's elite commerce ensures it is handled safely and responsibly.",
    "shippingDetail": "Ships via royal courier, arriving within 7 days of purchase.",
    "usage": {
      "activation": "Bonus action to activate magic amplification; roll d6 at the start of each turn for chaotic burst.",
      "duration": "Magic amplification lasts until the end of your next turn. Chaotic bursts occur on each turn you hold the shard.",
      "endsWhen": "Exhausted after 3 uses or destroyed if used in an environment of pure light.",
      "charges": "Unlimited, but limited to 3 uses per day."
    },
    "priceReason": "The Legendary Rainbow Shard's balanced price reflects its legendary rarity and unpredictable nature.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T23:36:29.385108+00:00",
    "aiReviewedAt": "2026-07-23T23:36:29.385108+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_perfect_notes": {
    "id": "kivotos_item_halo_of_perfect_notes",
    "name": "Harmonic Halo of the Discordant Choir",
    "description": "The Harmonic Halo of the Discordant Choir is a peculiar golden halo that seems to hum with an eerie melody. When activated, it releases a discordant symphony that can stun nearby foes or grant you a surge in magical prowess, depending on your ability to endure its cacophony. This artifact resonates with the chaotic energies of the choir, making it a rare and sought-after curio among musicians and spellcasters.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎶",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Cacophonous Disruption",
      "Magical Fortitude"
    ],
    "vendor": "club_supply",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cacophonous Disruption",
        "rules": "As an action, you can activate the halo to unleash a cacophony that stuns all creatures within 5 feet of you for 1 round (DC 14). The effect ends if you end your turn in melee with any creature affected. This ability has a recharge after a long rest."
      },
      {
        "title": "Magical Fortitude",
        "rules": "While wearing the halo, your saving throw DCs against sonic and psychic damage increase by 2. Additionally, you gain advantage on Concentration checks for as long as you wear it. The halo provides this benefit until removed or destroyed."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible early in the adventuring career to encourage experimentation with its unique effects.",
    "vendorReason": "Club Supply often carries unusual curiosities that appeal to adventurers and performers alike, making this halo a fitting addition to their inventory.",
    "shippingDetail": "Ships via Swift Courier for expedited delivery within three days of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "You end your turn in melee with any affected creature or the halo is destroyed.",
      "charges": "Recharge after a long rest"
    },
    "priceReason": "The Harmonic Halo of the Discordant Choir is priced at 1000 XP due to its unique and potentially powerful abilities, as well as its rarity among adventurers.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T23:35:42.236539+00:00",
    "aiReviewedAt": "2026-07-23T23:35:42.236539+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_student_notebook_of_secrets": {
    "id": "kivotos_item_student_notebook_of_secrets",
    "name": "The Codex of Curious Queries",
    "description": "The Codex of Curious Queries is a tattered student notebook bound in worn leather and filled with cryptic scribbles, eldritch symbols, and whimsical sketches. Its pages are rumored to hold secrets that, when properly decoded, can reveal hidden truths or grant minor advantages. Flipping through it might yield a fleeting glimpse into the unknown or trigger an unintended spell, much to the bemusement of all who dare to explore its contents.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📝",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Minor Insight",
      "Hidden Knowledge"
    ],
    "vendor": "student_store",
    "shippedBy": "courier_of_the_elemental_gryphon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Insight",
        "rules": "When a scholar spends a minute carefully studying one page of the Codex, they gain advantage on their next Intelligence (Arcana) check. This effect has no limit and can be used once per day."
      },
      {
        "title": "Hidden Knowledge",
        "rules": "At the start of each combat round, there is a 10% chance that a creature within 5 feet of the Codex gains advantage on one saving throw as its pages whisper arcane secrets. This effect can occur once per short rest."
      }
    ],
    "levelRequirementReason": "Requires at least first-level spellcasting to properly utilize the notebook's esoteric knowledge.",
    "vendorReason": "The student store regularly receives donations of magical artifacts, including this curious notebook from various students and scholars.",
    "shippingDetail": "Ships via the Couriers of the Elemental Gryphon, known for their swift and reliable deliveries across the realm.",
    "usage": {
      "activation": "Passive effect; requires a minute to study one page.",
      "duration": "Instantaneous once per day; combat round advantage once per short rest.",
      "endsWhen": "Exhausted after use; rechargeable at dawn the next day.",
      "charges": "Unlimited, recharges at dawn."
    },
    "priceReason": "The Codex's rare and potent effects justify its high price, making it a valuable asset for scholars and spellcasters alike.",
    "priceOriginal": 380,
    "priceReviewedAt": "2026-07-23T23:36:01.379639+00:00",
    "aiReviewedAt": "2026-07-23T23:36:01.379639+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_emberbomb": {
    "id": "warhammer_emberbomb",
    "name": "Emberbomb of Despair",
    "description": "The Emberbomb of Despair is a volatile concoction forged from despair and fiery magic. When tossed, it ignites into a searing inferno that engulfs foes in a wave of anguish and flame. The chaotic force within ensures each explosion leaves its mark, sapping the willpower of those caught in its fiery embrace. Wario's secret recipe, this weapon is not just for combat but also to add an extra zing to one’s chili, as he claims.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "deals_fire_damage",
      "has_chance_to_stun"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Explosive Flame",
        "rules": "When the Emberbomb detonates within a 10-foot radius, it deals 2d6 fire damage to all creatures in the area. On a successful hit, there's a 30% chance that a target is stunned for 1 round."
      },
      {
        "title": "Sapping Willpower",
        "rules": "For each creature struck by the explosion, they must succeed on a DC 15 Constitution saving throw or be inflicted with the Weakness condition until the end of their next turn. This effect can only occur once per target."
      }
    ],
    "levelRequirementReason": "This item requires a certain level to handle its volatile nature and ensure it's used responsibly in combat.",
    "vendorReason": "The chaos dealer specializes in unpredictable and powerful items, making the Emberbomb of Despair an ideal addition to their inventory.",
    "shippingDetail": "Ships via Winged Courier; delivery may take up to three days due to its volatile nature.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect",
      "endsWhen": "Expended upon use",
      "charges": "Unlimited uses, recharged after a long rest"
    },
    "priceReason": "The Emberbomb of Despair is priced high due to its volatile nature and the limited supply available from Wario's chaotic alchemy.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:36:54.910954+00:00",
    "aiReviewedAt": "2026-07-23T23:36:54.910954+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_faction_charm": {
    "id": "grand_country_faction_charm",
    "name": "The Stone Shepherd’s Blessing",
    "description": "The Stone Shepherd’s Blessing is a finely crafted charm, its surface etched with ancient runes that shimmer faintly in moonlight. The figure of the stoic shepherd stands resolute amidst his flock of oddly shaped rocks, each one a testament to nature's resilience. Wearing this charm grants you the favor of the Stone Shepherds, who protect precarious places and master the art of stonework. When you are near unstable ground or structures, there is a 20% chance that a tremor will not affect you. Additionally, you can call upon the Shepherds to stabilize a structure within reach for 1 minute, providing a +2 bonus to saving throws made due to instability.",
    "category": "faction",
    "price": 1000,
    "icon": "🐑",
    "stock": 95,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "minor_healing",
      "stabilize_structure"
    ],
    "vendor": "side_seller",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Chance to Avoid Falling",
        "rules": "When you are near unstable ground or structures, there is a 20% chance that a tremor will not affect you. This effect has no save DC and does not expend any charges."
      },
      {
        "title": "Stabilize Structure",
        "rules": "As an action, you can call upon the Stone Shepherds to stabilize a structure within reach for 1 minute. The structure gains a +2 bonus to saving throws made due to instability. This effect has no save DC and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This charm is crafted with simple materials but imbued with the ancient knowledge of the Stone Shepherds, suitable for even novice adventurers.",
    "vendorReason": "The side seller frequently trades in local artifacts and trinkets, including those with ties to nature and its guardians.",
    "shippingDetail": "Ships via Winged Courier within a week of purchase.",
    "usage": {
      "activation": "Reaction (for Chance to Avoid Falling), Action (for Stabilize Structure)",
      "duration": "Instantaneous for Chance to Avoid Falling, 1 minute for Stabilize Structure",
      "endsWhen": "The effect ends when the structure stabilizes or the tremor passes.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this charm provides versatile benefits that are both thematic and mechanically sound for a common item.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:36:45.495675+00:00",
    "aiReviewedAt": "2026-07-23T23:36:45.495675+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_glittering_hoof_boots": {
    "id": "equestria_item_glittering_hoof_boots",
    "name": "Glittering Hoof Boots",
    "description": "The Glittering Hoof Boots shimmer with a radiant glow as they capture starlight in their delicate, crafted leather. Each step you take leaves a trail of sparkling dust behind, drawing curious glances from everypony and making your path a dazzling spectacle. These boots are surprisingly comfortable despite their glitter, perfect for those who enjoy both elegance and mischief. Crafted by the renowned Canterlot Shoemakers, these boots are a testament to Equestria's finest craftsmanship.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 7,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increased_movement_speed",
      "minor_glitter_aura"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Mail Pegasus",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Increased Movement Speed",
        "rules": "While wearing the Glittering Hoof Boots, you have advantage on Dexterity (Acrobatics) checks and your walking speed increases by 10 feet. This effect lasts for 1 hour or until you rest."
      },
      {
        "title": "Minor Glitter Aura",
        "rules": "You emit a faint, sparkling aura that dazzles nearby creatures within 30 feet. On a successful DC 15 Wisdom (Perception) check, creatures in this area must make a DC 13 Wisdom saving throw or be charmed for 1 minute by you."
      }
    ],
    "levelRequirementReason": "The boots require at least level 2 to ensure their magical effects are manageable and do not overwhelm lower-level ponies.",
    "vendorReason": "Canterlot Shoemakers are renowned for their exquisite craftsmanship, making them the perfect vendor for these shimmering footwear.",
    "shippingDetail": "The Royal Mail Pegasus ensures swift and secure delivery of your new boots, delivered directly to Manehattan.",
    "usage": {
      "activation": "Passive effect upon donning the boots.",
      "duration": "1 hour or until you rest",
      "endsWhen": "You rest or remove the boots.",
      "charges": "Unlimited"
    },
    "priceReason": "The boots are priced at 1000 XP to reflect their exquisite craftsmanship and magical properties.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:02:33.565088+00:00",
    "aiReviewedAt": "2026-07-25T00:02:33.565088+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_shadow_mane_scroll": {
    "id": "equestria_item_shadow_mane_scroll",
    "name": "Shadow Mane Scroll of Whispers",
    "description": "The Shadow Mane Scroll of Whispers is a dark, vellum scroll that seems to absorb ambient light, its edges glowing faintly like the last embers of twilight. Unraveling it releases cryptic warnings and unsettling visions, perfect for the discerning investigator or the thrill-seeker who enjoys a good scare. The scroll's whispers are not mere illusions but can reveal hidden secrets when used in the right conditions, though they may also cause fear in those who hear them too closely.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌑",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Reveal Hidden Secrets",
      "Cause Fear"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Swift Delivery Pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Secrets",
        "rules": "Activates as an action. When used within a room or area of concealment, the scroll reveals hidden secrets with a DC 15 Intelligence (Investigation) check. On a success, you learn one secret about the immediate environment. The scroll can only be used once per day."
      },
      {
        "title": "Cause Fear",
        "rules": "Activates as an action within sight of a creature. The target must make a DC 14 Wisdom saving throw or become frightened for 1 minute, during which time it has disadvantage on attack rolls and ability checks. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The scroll's cryptic nature requires a basic understanding of investigation to unlock its secrets.",
    "vendorReason": "As a popular market, Ponyville Market attracts curious and resourceful adventurers who might find the scroll intriguing.",
    "shippingDetail": "Delivered with a special delivery note that ensures secrecy during transit.",
    "usage": {
      "activation": "Used as an action or bonus action within sight of a target for the fear effect, or used to reveal hidden secrets in a concealed area.",
      "duration": "Instantaneous for revealing secrets; 1 minute for causing fear.",
      "endsWhen": "The effect ends when the creature makes a successful saving throw or after its duration expires.",
      "charges": "Recharges on completion of a long rest."
    },
    "priceReason": "The scroll's rarity and unique effects, including its ability to reveal hidden secrets with a cryptic mechanism, justify its higher price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:02:21.044049+00:00",
    "aiReviewedAt": "2026-07-25T00:02:21.044049+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_nightmare_shard": {
    "id": "equestria_item_nightmare_shard",
    "name": "Nightmare Shard of Discord",
    "description": "The Nightmare Shard of Discord is a jagged, glowing fragment of malevolent energy. Its surface crackles with dark tendrils that writhe like living shadows. Touching it induces unsettling visions and a creeping sense of dread; even the bravest dare not linger too long under its gaze. Wario himself warns of its power, suggesting it should be used only in grave circumstances—lest one's mind be forever corrupted by the dark dreams it wields.",
    "category": "forbidden",
    "price": 1000,
    "icon": "😈",
    "stock": 5,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "induces_unsettling_visions",
      "causes_temporary_confusion"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Black Market Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Induces Unsettling Visions",
        "rules": "When a creature touches or stares into the shard for more than one round, it must succeed on a DC 15 Wisdom saving throw or be affected by the fear condition until the end of its next turn. The shard can only induce visions in creatures with an Intelligence score above 10."
      },
      {
        "title": "Causes Temporary Confusion",
        "rules": "Upon successful activation, the shard grants a target within range a penalty to all ability checks and attack rolls equal to 2 + the user's proficiency bonus for the next minute. The effect ends early if the target is hit by an attack."
      }
    ],
    "levelRequirementReason": "The Nightmare Shard of Discord requires a high level to wield effectively, as its power can overwhelm even the most experienced adventurers without caution.",
    "vendorReason": "The Crystal Empire's forbidden artifact dealers are well-versed in the dark arts and understand the risks and rewards of handling such powerful relics.",
    "shippingDetail": "Delivered under cover of night, ensuring that only those with a true need for such malevolent power receive it.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until the end of the target's next turn or until dispelled by magic.",
      "endsWhen": "The target successfully saves against the fear condition, is hit by an attack, or a creature with a Wisdom saving throw DC higher than 15 casts a dispel magic spell on it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects its rarity and the potential danger it poses, balancing the need for such power against the risks of misusing it.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-25T00:03:13.003076+00:00",
    "aiReviewedAt": "2026-07-25T00:03:13.003076+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_emberglow_amulet": {
    "id": "teyvat_item_emberglow_amulet",
    "name": "Emberglow Amulet",
    "description": "The Emberglow Amulet pulses with a warm, golden light, its surface etched with faint runes that hum with residual fire energy. A fragment of Diluc's unwavering resolve, it grants you minor resistance to heat and an ethereal glow when activated – perfect for brightening up gloomy dungeons or surprising enemies in the dark. This trinket is a reminder of courage and warmth, a symbol of hope in even the coldest of places.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 35,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "fire_resistance",
      "glow"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_familiar",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "You gain resistance to fire damage equal to 1d6 + your Charisma modifier when wearing this amulet."
      },
      {
        "title": "Glowing Light",
        "rules": "When activated as a bonus action, the amulet emits a soft golden glow that illuminates a 20-foot radius for 1 minute. Creatures within the light must succeed on a DC 14 Wisdom saving throw or become blinded until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This amulet is crafted from materials that reflect Diluc's unwavering resolve, making it suitable for those who have already demonstrated their mettle in battle.",
    "vendorReason": "The market of Mondstadt is known for its diverse array of artifacts and trinkets, including this piece of history from the city's most respected figure.",
    "shippingDetail": "Delivered by a winged familiar, ensuring swift delivery to eager adventurers.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous activation; lasts for 1 minute when activated",
      "endsWhen": "The glow ends at the start of your next turn if you are within the light's radius.",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Crafted from rare materials and imbued with powerful magic, this amulet is priced to reflect its craftsmanship and the legendary figure it honors.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:38:01.166301+00:00",
    "aiReviewedAt": "2026-07-23T23:38:01.166301+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_driftwood_charm": {
    "id": "teyvat_item_driftwood_charm",
    "name": "Driftwood Charm of the Tempest",
    "description": "The Driftwood Charm of the Tempest is a relic carved from the very timbers of Kazuha's legendary raft, which weathered countless tempests. This charm whispers of lost voyages and the strength found in nature’s fury. When worn, it grants you unmatched balance and grace, enhancing your agility and making you a master of the sea. Legends say that those who carry this charm can navigate treacherous waters with ease, as if guided by the very winds themselves.",
    "category": "consumables",
    "price": 1000,
    "icon": "💨",
    "stock": 88,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "balance_of_the_tempest",
      "navigation_master"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_currents",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Balance of the Tempest",
        "rules": "As a bonus action, you can activate this charm to gain advantage on Dexterity (Acrobatics) checks for up to 1 minute. This effect ends if you are knocked unconscious or if you willingly deactivate it."
      },
      {
        "title": "Navigation Master",
        "rules": "While wearing this charm, you have a +2 bonus to all Navigation skill checks and can use the Move Silently action as a bonus action. This effect persists until you finish a long rest."
      }
    ],
    "levelRequirementReason": "Crafted from Kazuha's personal raft, this charm requires no special level to activate its effects.",
    "vendorReason": "As the harbor where Kazuha found solace and began his adventures, Liyue Harbor stocks items imbued with the spirit of the sea.",
    "shippingDetail": "The charm is shipped via the fastest currents, ensuring it arrives at your doorstep as swiftly as a tempest's fury.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute or until you finish a long rest",
      "endsWhen": "You are knocked unconscious or willingly deactivate it",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare and precious driftwood, the charm's value is reflected in its cost.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T23:38:00.879411+00:00",
    "aiReviewedAt": "2026-07-23T23:38:00.879411+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_void_shard": {
    "id": "teyvat_item_void_shard",
    "name": "Void Shard of Khaenra",
    "description": "The Void Shard of Khaenra is a crystalline fragment, dark as midnight and laced with the void's icy essence. Crafted from Raiden Shogun’s discarded fragments during his battle against the void, it grants temporary defense but may leave you feeling detached after prolonged use. The shard hums with energy that can reflect attacks back at their source, though this comes at a cost of increased vulnerability to confusion.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌑",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Void Reflection",
      "Temporary Defense"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "phantom_ship",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Void Reflection",
        "rules": "When an attack is made against you while wearing the shard, there is a 25% chance that the damage is reflected back at the attacker. This effect has no cooldown and can be used once per short or long rest."
      },
      {
        "title": "Temporary Defense",
        "rules": "The wearer gains a +3 bonus to AC for 1 hour after donning the shard, but suffers a -2 penalty to Charisma-based checks and saving throws. This effect is passive and persists until removed."
      }
    ],
    "levelRequirementReason": "Due to its raw void essence and complex enchantment, only characters of at least level 7 can safely wield the shard.",
    "vendorReason": "Inazuma Imports deals exclusively in artifacts from Teyvat and this shard's origins are linked through Raiden Shogun’s battles.",
    "shippingDetail": "The Phantom Ship ensures the safe delivery of such fragile relics, with a slight delay due to its mysterious routes.",
    "usage": {
      "activation": "Passive effect upon donning; ends when removed or at the start of your next turn after prolonged exposure (30 minutes).",
      "duration": "1 hour (active), until removed or end of next turn post-prolonged use.",
      "endsWhen": "Removal, end of next turn after 30 minutes of prolonged wear.",
      "charges": "Unlimited; recharges upon removal."
    },
    "priceReason": "Reflecting attacks and increasing defense come at a steep price, but the shard’s rare origin and volatile nature justify its cost.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T23:38:51.034178+00:00",
    "aiReviewedAt": "2026-07-23T23:38:51.034178+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_warrios_lucky_charm": {
    "id": "middle_earth_warrios_lucky_charm",
    "name": "Wario's Secret Stash Pouch",
    "description": "Wario's Secret Stash Pouch is a diminutive leather pouch with a stiff, almost reptilian texture. Crafted from the hide of an ancient badger, it whispers tales of Wario's chaotic antics and his knack for finding fortune. The pouch not only increases your chance of finding valuable items by 20%, but also grants you a passive +1 to Dexterity saving throws, making you more resilient against traps and ambushes.",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 40,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Lucky Find",
      "Stealthy Luck"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant_rat",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lucky Find",
        "rules": "At the start of each combat round, there's a 5% chance that any item you find is also valuable. This effect has no save DC and can occur multiple times per day."
      },
      {
        "title": "Stealthy Luck",
        "rules": "You gain advantage on Dexterity saving throws against traps or ambushes, as if under the effects of a 'Shield of Faith' spell (no save DC required). This effect lasts until the start of your next turn after using it."
      }
    ],
    "levelRequirementReason": "This item is suitable for lower-level adventurers who could benefit from its luck and resilience without requiring high proficiency or power.",
    "vendorReason": "The Dwarven Forge has a reputation for crafting items imbued with elemental spirits, and this pouch channels the chaotic energy of Wario's badger hide.",
    "shippingDetail": "Delivered by a giant rat, which may add an additional 1d4 days to your delivery time.",
    "usage": {
      "activation": "Passive effect during combat rounds.",
      "duration": "Instantaneous; reverts at the start of each round.",
      "endsWhen": "At the start of the next turn after using it for Stealthy Luck; expires at the end of combat for Lucky Find.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The balanced price reflects a high-risk, high-reward item that offers significant benefits in combat and exploration without being overpowered.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T23:38:21.897321+00:00",
    "aiReviewedAt": "2026-07-23T23:38:21.897321+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_trainer_potion": {
    "id": "pokemon_item_trainer_potion",
    "name": "Hyper-Recovery Elixir",
    "description": "The Hyper-Recovery Elixir is a vibrant, bubbling potion crafted by eccentric Pokémon trainers using rare herbs and ancient alchemy techniques. This elixir instantly heals 100 HP and restores 50 stamina, giving you the edge in those long, grueling battles. The concoction is said to be brewed with a secret ingredient, rumored to be the essence of legendary Pokémon. Wario’s convinced it's just concentrated berries but wishes he could unlock its full potential.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 80,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Heals 100 HP",
      "Restores 50 Stamina"
    ],
    "vendor": "pokemart",
    "shippedBy": "Pidgeotto Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Healing and Stamina Restoration",
        "rules": "When consumed, the Hyper-Recovery Elixir instantly heals 100 Hit Points (HP) and restores 50 stamina points. This effect is instantaneous and does not require any action."
      },
      {
        "title": "Temporary Defense Buff",
        "rules": "For the next hour after drinking this elixir, you gain a +2 bonus to AC against all attacks made by creatures of your choice. This bonus ends if you take damage or if you use another potion that grants similar benefits."
      }
    ],
    "levelRequirementReason": "The potion is designed for novice trainers who may need quick healing and stamina during their early adventures.",
    "vendorReason": "Pokemarts are known for offering essential supplies to all trainers, regardless of experience level.",
    "shippingDetail": "The elixir is carefully packed and delivered by Pidgeotto Courier within a day.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Until you take damage or use another potion with similar effects, up to one hour after consumption",
      "endsWhen": "You take damage or use another potion that grants a similar defense buff, or at the end of your next long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The potion is priced high due to its rare ingredients and complex alchemical process required for brewing.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:38:35.349342+00:00",
    "aiReviewedAt": "2026-07-23T23:38:35.349342+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_crimson_resonance": {
    "id": "teyvat_item_crimson_resonance",
    "name": "Crimson Resonance Shard",
    "description": "The Crimson Resonance Shard glows with an intense pyroelectric pulse, its surface crackling with raw fire energy. This shard is said to amplify the caster's pyro spells, enhancing their potency and ensuring a controlled yet formidable display of destructive power. Wario insists it’s perfect for incinerating foes or creating dazzling pyrotechnics, but wielders must be cautious—overuse risks unpredictable bursts of heat that can ignite nearby flammable objects.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Pyro Amplification",
      "Heat Wave"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_familiar",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Pyro Amplification",
        "rules": "Increases the caster's fire damage by 20% until the start of their next turn. This effect lasts for 1 minute and can be maintained up to three times per long rest."
      },
      {
        "title": "Heat Wave",
        "rules": "At the end of each of your turns while this shard is active, you may choose to trigger a Heat Wave that deals 2d6 fire damage to all creatures within 10 feet. This effect can be triggered once per long rest."
      }
    ],
    "levelRequirementReason": "This shard requires significant control over fire magic, suitable for characters at least 8th level.",
    "vendorReason": "As a renowned market, Mondstadt often showcases rare and powerful items like the Crimson Resonance Shard.",
    "shippingDetail": "The shard is delivered by a winged familiar, ensuring safe and swift transport to its buyer.",
    "usage": {
      "activation": "Passive effect; activation occurs at the start of your turn while holding the shard.",
      "duration": "1 minute per use, up to three times per long rest",
      "endsWhen": "The effect ends when you finish a short or long rest, or if you are incapacitated.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the shard's potent abilities and rarity.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:38:21.900823+00:00",
    "aiReviewedAt": "2026-07-23T23:38:21.900823+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_kokiri_charm": {
    "id": "teyvat_item_kokiri_charm",
    "name": "Kokiri Charm of Silent Steps",
    "description": "The Kokiri Charm of Silent Steps is a delicate silver amulet adorned with tiny Kokiri symbols. Crafted by the mischievous spirits of the forest, this charm allows its wearer to move silently and avoid detection in the shadows. Wario says it’s 'perfect for slipping past guards without a sound or pocketing that rare treasure.' The charm muffles footsteps completely and grants an eerie stillness around the wearer, making them nearly invisible to the untrained eye.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌿",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Silent Steps",
      "Unseen"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silent Steps",
        "rules": "The charm muffles all footsteps, creating no sound. This effect lasts until you take a move action or until the end of your turn if you engage in combat."
      },
      {
        "title": "Unseen",
        "rules": "You have advantage on Dexterity (Stealth) checks made to avoid detection while wearing this charm. The effect persists for 1 hour, after which it expires and requires a short rest to recharge."
      }
    ],
    "levelRequirementReason": "The charm is crafted simply enough that even low-level adventurers can benefit from its effects.",
    "vendorReason": "Liyue Harbor caters to travelers and sells a wide range of items, including those with practical utility like this stealth charm.",
    "shippingDetail": "The charm is delivered swiftly by Liyue's reliable delivery drones within the week.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until you take a move action or engage in combat, then ends immediately.",
      "endsWhen": "Combat or taking a move action, or after one hour of non-combat use.",
      "charges": "Unlimited uses, recharging at the start of each short rest."
    },
    "priceReason": "The charm's unique crafting and enchantment justify its higher price, but it remains accessible to most adventurers.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:38:40.301536+00:00",
    "aiReviewedAt": "2026-07-23T23:38:40.301536+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_archon_sanctum_scroll": {
    "id": "teyvat_item_archon_sanctum_scroll",
    "name": "Archon Sanctum Scroll of Divine Guidance",
    "description": "The Archon Sanctum Scroll of Divine Guidance hums with the essence of a Geo Archon, its ancient parchment glowing faintly under the light of dawn. This relic grants fleeting but potent combat insights: it increases Wisdom by +10 for 60 seconds and offers tactical advantages that can turn even the most dire battle into an opportunity to shine. Wario insists it's 'the key to victory,' though only if you know how to wield its power wisely.",
    "category": "premium",
    "price": 1000,
    "icon": "✨",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Wisdom Boost",
      "Tactical Insight"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wisdom Boost",
        "rules": "Activates as a bonus action, increasing the user's Wisdom score by +10 for 60 seconds. This effect ends if the user takes damage or if an ability check is made using Wisdom."
      },
      {
        "title": "Tactical Insight",
        "rules": "Provides a temporary tactical advantage once per short rest, such as increased evasion or critical hit chance by 5%. The scroll can only be used again after a long rest."
      }
    ],
    "levelRequirementReason": "The scroll is crafted with basic magic and does not require a high level of expertise to activate.",
    "vendorReason": "Inazuma Imports specializes in rare and exotic magical artifacts, making this scroll an ideal addition to their inventory.",
    "shippingDetail": "Ships via a dimensional portal, arriving within moments of purchase.",
    "usage": {
      "activation": "Bonus action or reaction (for Tactical Insight)",
      "duration": "60 seconds for Wisdom Boost; instant for Tactical Insight",
      "endsWhen": "On damage taken or ability checks made with Wisdom; ends at the end of the user's next turn after using Tactical Insight",
      "charges": "Unlimited, but can only be used once per short rest"
    },
    "priceReason": "The scroll is moderately priced for its mythic rarity and practical utility in combat.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:38:56.433207+00:00",
    "aiReviewedAt": "2026-07-23T23:38:56.433207+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_geode_of_whispers": {
    "id": "earth_land_geode_of_whispers",
    "name": "Geode of Whispers",
    "description": "The Geode of Whispers, a pulsating crystal embedded within a rough-hewn stone, hums faintly when held close. Its whispers are said to come from long-dead wizards who sought its power in vain. The geode's murmurs range from cryptic advice on spellcraft to complaints about the weather, though some say it harbors secrets of ancient battles and lost treasures. This enigmatic artifact is a rare find, often shipped by flying griffins and sold exclusively at Magic Shop.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Whispers of Wisdom",
      "Weather Whim"
    ],
    "vendor": "magic_shop",
    "shippedBy": "flying griffin",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispers of Wisdom",
        "rules": "As an action, you can hold the geode close to your ear to hear a cryptic whisper. This whisper provides you with one piece of advice related to magic or survival, chosen randomly from a set of ancient, enigmatic phrases. The geode has 3 uses per long rest and is exhausted after use."
      },
      {
        "title": "Weather Whim",
        "rules": "For the duration of your next short rest, the geode provides you with +1 to Perception checks made to notice environmental changes or unusual weather patterns. This effect does not stack with other similar abilities."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate the enigmatic power of the geode without needing advanced magic.",
    "vendorReason": "Magic Shop is known for its rare and ancient artifacts, including this enigmatic geode.",
    "shippingDetail": "The flying griffin delivers the geode swiftly, often with a small delay due to its busy schedule.",
    "usage": {
      "activation": "Action or bonus action",
      "duration": "Instantaneous for Whispers of Wisdom; short rest duration for Weather Whim",
      "endsWhen": "After use or at the end of a long rest when exhausted",
      "charges": "3 uses per long rest"
    },
    "priceReason": "The geode's rarity and the unpredictable nature of its effects justify this price in XP.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T23:39:21.258532+00:00",
    "aiReviewedAt": "2026-07-23T23:39:21.258532+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_wario_slime_potion": {
    "id": "earth_land_wario_slime_potion",
    "name": "Wario's Slime Potion",
    "description": "Wario's Slime Potion is a bright green, foul-smelling concoction that transforms you into a slimy, slightly grumpy version of the infamous plumber. For three turns, you can roll around like a living ball of goo, increasing your movement speed by 50% while in this form. Enemies nearby have a chance to slip and fall, reducing their Dexterity-based ability checks by 2 until the end of their next turn.",
    "category": "consumables",
    "price": 1000,
    "icon": "🟢",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "slime form transformation",
      "increased movement speed"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "delivery goblin",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slime Form",
        "rules": "Activate as a bonus action. Lasts for 3 turns. While in this form, your movement speed increases by 50%. Ends if you are knocked prone or the effect is dispelled."
      },
      {
        "title": "Slick Enemies",
        "rules": "While in slime form, there's a 20% chance that any creature within 5 feet of you when you activate this potion will fall prone and have their Dexterity (Acrobatics) check or saving throw reduced by 2 until the end of their next turn. Ends if you leave your space."
      }
    ],
    "levelRequirementReason": "This potion is designed for beginners to have a bit of fun in combat without being too overpowered.",
    "vendorReason": "The Earth Emporium stocks this item because it's a popular choice among those who enjoy a little mischief and unpredictability on the battlefield.",
    "shippingDetail": "The delivery goblin might accidentally spill or drop the potion during transport, so it is recommended to check its condition upon arrival.",
    "usage": {
      "activation": "Bonus action",
      "duration": "3 turns",
      "endsWhen": "Knocked prone or dispelled by magic",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the potion's fun, unpredictable nature and its popularity among players.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T23:38:59.677099+00:00",
    "aiReviewedAt": "2026-07-23T23:38:59.677099+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_mossy_charm": {
    "id": "animatopia_mossy_charm",
    "name": "Mossy Charm of Tranquility",
    "description": "The Mossy Charm of Tranquility is crafted from the heartwood of a giant moss-covered boulder, said to have been blessed by ancient druids seeking peace in troubled times. This humble charm offers more than mere comfort; it soothes frayed nerves and tempers anger, making it invaluable for weary warriors and frustrated heroes alike. When clutched tightly, its verdant surface pulses with a calming energy that washes away the strain of combat.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌿",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Soothing Comfort",
      "Anger Suppression"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soothing Comfort",
        "rules": "When activated as an action, this charm grants the user temporary resistance to fear effects and provides a +1 bonus to saving throws against such conditions. The effect lasts for 1 hour or until expended."
      },
      {
        "title": "Anger Suppression",
        "rules": "Upon use, this charm reduces your current anger level by 2 points, capping at a minimum of 0. This effect is instantaneous and does not require an action to activate."
      }
    ],
    "levelRequirementReason": "The charm's gentle power is accessible to all adventurers, regardless of experience.",
    "vendorReason": "The forest market thrives on the natural resources and artifacts from the surrounding wilderness, making this charm a staple in their inventory.",
    "shippingDetail": "Delivered by a giant snail that carefully navigates through dense underbrush, ensuring the charm arrives intact and fresh.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until expended",
      "endsWhen": "The effect ends when it is used up or you are no longer in danger of fear effects.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from a rare and ancient moss, the charm's value lies not only in its magical properties but also in its unique origin.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:40:06.536707+00:00",
    "aiReviewedAt": "2026-07-23T23:40:06.536707+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_trainer_badge_replica": {
    "id": "pokemon_item_trainer_badge_replica",
    "name": "Elite Four’s Disgrace",
    "description": "The Elite Four’s Disgrace gleams faintly despite its tarnished appearance, a testament to its once-mighty origins. This meticulously crafted replica is not just a prop; it's a symbol of prestige that can elevate your presence in any room. For the briefest moment, you feel as though you've truly earned this emblem of victory, and your Charisma soars by +1 (temporarily), making others more likely to defer to your judgment.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🏆",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "+1 to Charisma (temporary)",
      "chance to intimidate a wild Pokémon"
    ],
    "vendor": "league_store",
    "shippedBy": "Magikarp Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When worn, this badge grants the wearer a +1 bonus to Charisma checks and saving throws for a duration of 1 hour. The effect is limited to once per short or long rest."
      },
      {
        "title": "Intimidate Chance",
        "rules": "While wearing this badge, you have advantage on Intimidation checks against wild Pokémon. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This replica is accessible to players who are just starting their journey and need a confidence boost.",
    "vendorReason": "The league store stocks this item as it appeals to trainers seeking a sense of achievement, even if only in appearance.",
    "shippingDetail": "Ships within three days with Magikarp Delivery's standard courier service.",
    "usage": {
      "activation": "Equipping the badge passively activates its effects.",
      "duration": "The Charisma boost lasts for 1 hour, and the Intimidate chance lasts until the end of your next long rest.",
      "endsWhen": "The effects expire at the end of a short or long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects its uncommon rarity and the prestige it offers, despite being a replica.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:39:26.499156+00:00",
    "aiReviewedAt": "2026-07-23T23:39:26.499156+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_whispering_shard": {
    "id": "almost_edge_whispering_shard",
    "name": "Echoes of the Voidstone",
    "description": "The Echoes of the Voidstone is a jagged, iridescent shard that hums with an otherworldly resonance, its surface etched in patterns that seem to shift and warp as you gaze upon them. Holding it opens your mind to fleeting visions of void geometries, where time and space dissolve into pure potentiality. These glimpses are both awe-inspiring and terrifying, as they threaten to unravel the very fabric of reality within your psyche.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "grant_sanity_1",
      "chance_hallucination"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Grant Sanity Loss (1/Day)",
        "rules": "When you hold the Echoes, there is a 20% chance each day that your next action causes you to lose 1d4 points of Charisma. This effect has no save and can be resisted only by succeeding on a DC 17 Wisdom saving throw."
      },
      {
        "title": "Chance for Hallucinations",
        "rules": "While holding the Echoes, there is a 10% chance each round that you see an illusory version of your next attack or spell effect as it strikes. This hallucination does not deal damage but can mislead your allies and foes alike."
      }
    ],
    "levelRequirementReason": "The Echoes demand a high level to wield, as their power is too great for the uninitiated.",
    "vendorReason": "The Void Merchant specializes in items that bridge the gap between worlds, making it fitting for this artifact from beyond.",
    "shippingDetail": "Ships through a rift in space-time; delivery can take several days but ensures the item arrives intact.",
    "usage": {
      "activation": "Passive effect while held",
      "duration": "Instantaneous, lasts until discarded or lost",
      "endsWhen": "Exhausted upon use",
      "charges": "Unlimited"
    },
    "priceReason": "The Echoes of the Voidstone is priced at 1000 XP due to its mythic rarity and the risk it poses to sanity.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T23:39:30.519477+00:00",
    "aiReviewedAt": "2026-07-23T23:39:30.519477+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_temporal_charm": {
    "id": "almost_edge_temporal_charm",
    "name": "The Chronal Slipstone",
    "description": "The Chronal Slipstone is a disconcerting charm crafted from solidified temporal eddies, forged in the heart of a forgotten forge that once danced to the tune of time itself. This relic allows its wielder to briefly rewind their own actions, but beware – each use carves a ripple through the fabric of reality, increasing the risk of a catastrophic temporal paradox. The charm's power is as fickle as it is potent; misuse could unravel the very timeline.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "rewind_action",
      "temporal_risk"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "quantum_packet",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Rewind Action",
        "rules": "As an action, you may rewind your last turn. This effect lasts for a number of rounds equal to half your proficiency bonus (rounded down). You are not allowed to use this ability again until you complete a long rest."
      },
      {
        "title": "Temporal Risk",
        "rules": "Each use increases the likelihood of a temporal paradox by 10%, starting at 5% for the first use. If the cumulative risk reaches or exceeds 50%, a minor temporal disruption occurs, forcing you to make a DC 14 Wisdom saving throw. On a failed save, you are stunned until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The Chronal Slipstone demands a mastery of time manipulation that is only accessible to those who have reached an advanced level in their studies.",
    "vendorReason": "The Liminal Trader has a unique access to ancient and otherworldly artifacts, making the Chronal Slipstone a fitting addition to their inventory.",
    "shippingDetail": "The Chronal Slipstone is delivered via quantum packet, ensuring its arrival through a direct temporal conduit, which can sometimes lead to unexpected delays due to the instability of time itself.",
    "usage": {
      "activation": "Action",
      "duration": "Number of rounds equal to half your proficiency bonus (rounded down)",
      "endsWhen": "You use it again or complete a long rest",
      "charges": "Unlimited, but limited by rest requirements"
    },
    "priceReason": "The Chronal Slipstone's balanced price reflects its rarity and the risk it poses to those who wield it.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:39:53.472435+00:00",
    "aiReviewedAt": "2026-07-23T23:39:53.472435+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_void_pouch": {
    "id": "almost_edge_void_pouch",
    "name": "The Collector's Burden",
    "description": "The Collector's Burden is an unassuming pouch, its surface etched with faint, forgotten sigils of void and time. It seems to absorb stray echoes and anomalies from the void, causing those who bear it for too long to feel a gnawing obsession with collecting the unsettling remnants of lost realities. Rumor has it that once bound by this burden, one's mind slowly distorts into an ever-hungry collector of the forgotten and the broken.",
    "category": "premium",
    "price": 1000,
    "icon": "📦",
    "stock": 9,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "void_absorption",
      "obsession_risk"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "gravity_well",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Void Absorption",
        "rules": "The Collector's Burden can absorb negative energy from nearby creatures or environments. It has a range of 10 feet and can only be used once per long rest."
      },
      {
        "title": "Obsession Risk",
        "rules": "After each day that the pouch is worn, there's an increasing risk (starting at 5%) that the bearer becomes obsessed with collecting strange and unsettling items. This obsession increases by 5% daily until it reaches 100%, at which point the character must succeed on a DC 14 Wisdom saving throw or become permanently obsessed."
      }
    ],
    "levelRequirementReason": "The Collector's Burden requires a minimum level of 6 due to its arcane and dangerous nature.",
    "vendorReason": "The edge-wanderers are known for their extensive trade networks, connecting the farthest corners of the realm. They specialize in rare and exotic items like The Collector's Burden.",
    "shippingDetail": "Careful handling is required to avoid damaging this delicate artifact during transport.",
    "usage": {
      "activation": "A bonus action is needed to activate the absorption of negative energy from a creature or environment within range.",
      "duration": "Instantaneous, but can only be used once per long rest.",
      "endsWhen": "The effect ends when the pouch is removed and a successful DC 14 Wisdom saving throw is made.",
      "charges": "Unlimited, as it recharges after a long rest."
    },
    "priceReason": "The Collector's Burden strikes a balance between its rare components and the risks involved in using it, making it cost 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-25T00:03:04.205082+00:00",
    "aiReviewedAt": "2026-07-25T00:03:04.205082+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_wario_s_lucky_potion": {
    "id": "faerun_item_wario_s_lucky_potion",
    "name": "Wario’s Lucky Potion (Experimental)",
    "description": "Wario’s Lucky Potion (Experimental) is a vile-looking vial of murky brown liquid, labeled with a wobbly W. This potion grants fleeting good fortune to those who dare drink it. For a brief moment, you may land critical hits more often and dash through foes as if on wings, but beware—your luck comes at a cost: uncontrollable laughter or an overwhelming urge to collect every shiny object in sight.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_crit_chance",
      "temporary_dodging_aura"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "magical_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Crit Chance",
        "rules": "When you make an attack roll, there is a +2d6 modifier to your roll for the next turn. This effect ends if you take damage or lose consciousness."
      },
      {
        "title": "Temporary Dodging Aura",
        "rules": "You gain a +1 bonus to AC and can teleport up to 5 feet as a reaction when an attack hits you. This ability can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The potion's effects are unpredictable but not overly powerful for the beginner adventurer.",
    "vendorReason": "Waterdeep Market sells a variety of experimental and exotic items, making Wario’s Lucky Potion a natural fit.",
    "shippingDetail": "The potion is shipped in a specially enchanted flask to preserve its potency during transit.",
    "usage": {
      "activation": "Drink the potion as an action.",
      "duration": "1 minute per use, until you take damage or lose consciousness.",
      "endsWhen": "You take damage, lose consciousness, or complete a short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The potion's rarity and experimental nature justify its higher price.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T23:39:42.682710+00:00",
    "aiReviewedAt": "2026-07-23T23:39:42.682710+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_gravitron_shard": {
    "id": "grand_country_gravitron_shard",
    "name": "Gravity's Grin Shard",
    "description": "This pulsing shard of Gravity's Grin hums with a chaotic energy that seems to bend space and time itself. It grants swift movement, but prolonged exposure can leave you disoriented, as if the fabric of reality shifts around you. The shard’s origin remains shrouded in mystery, found only at the edge of known lands where gravity defies explanation. Wario might indeed find this item charming for its unpredictable effects and unique power.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💫",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "movement_speed_boost",
      "dizzying_sensation"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "winged_beetle",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Movement Speed Boost",
        "rules": "When activated, the user gains a +10 foot movement speed bonus on their next turn. This effect lasts for 1 minute or until the wearer moves more than 60 feet."
      },
      {
        "title": "Dizzying Sensation",
        "rules": "For every 5 minutes the shard is worn, the user must succeed on a DC 13 Constitution saving throw or become disoriented. Disorientation lasts for 1 hour and reduces the wearer's movement speed by half."
      }
    ],
    "levelRequirementReason": "This item requires a high level of discipline to wield effectively without causing harm.",
    "vendorReason": "Vertical Vendor deals in rare and unique curiosities, making Gravity's Grin Shard an ideal addition to their inventory.",
    "shippingDetail": "The winged beetle delivers the shard with a special package that includes instructions on proper handling.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "1 minute or until moved more than 60 feet",
      "endsWhen": "Disorientation ends after 1 hour of failure, or when removed from the wearer's possession.",
      "charges": "Unlimited; recharges upon removal and resting for 8 hours."
    },
    "priceReason": "The item’s rarity and unique effects justify its moderate price point.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:40:11.987395+00:00",
    "aiReviewedAt": "2026-07-23T23:40:11.987395+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_layer_spice_bomb": {
    "id": "grand_country_layer_spice_bomb",
    "name": "Layered Nightmare Bomb",
    "description": "Layered Nightmare Bomb, a glass sphere encrusted with shards of iridescent gemstones and a twist of shadowy echo, is both fragile and potent. When detonated, it releases a wave that distorts reality within a 30-foot radius, causing creatures to stagger between planes of existence for the duration of the effect. Not only does this create an area where the laws of physics bend dangerously, but it also has a 20% chance of trapping any enemy in a pocket dimension until the spell ends or they are freed by a dispel magic.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "creates_layering_zone_30s",
      "chance_to_trap_enemies_20%"
    ],
    "vendor": "layer_market",
    "shippedBy": "rolling_barrel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Creates Layering Zone (30-foot Radius)",
        "rules": "When activated, the Layered Nightmare Bomb releases a localized distortion that lasts for 1 round. All creatures within the area must succeed on a DC 15 Dexterity saving throw or be knocked prone and unable to move for the duration of the effect."
      },
      {
        "title": "Chance to Trap Enemies (20%)",
        "rules": "There is a 20% chance that any enemy within the layering zone will be trapped in a pocket dimension. The trap lasts until the end of your next turn or until dispelled by a dispel magic spell."
      }
    ],
    "levelRequirementReason": "This bomb requires minimal preparation and is suitable for beginning adventurers who are ready to tackle more complex challenges.",
    "vendorReason": "Layer Market specializes in unique and powerful alchemical creations, making the Layered Nightmare Bomb a fitting addition to their inventory.",
    "shippingDetail": "The shipping is conducted by rolling barrel, which ensures safe transport even over rough terrain.",
    "usage": {
      "activation": "Action",
      "duration": "1 round",
      "endsWhen": "Spell ends when its duration expires or a dispel magic spell is cast on it.",
      "charges": "Unlimited (Recharges after a long rest)"
    },
    "priceReason": "The Layered Nightmare Bomb's rarity and the unique effects make it worth 1,000 XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:40:25.282877+00:00",
    "aiReviewedAt": "2026-07-23T23:40:25.282877+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_liminal_contract": {
    "id": "almost_edge_liminal_contract",
    "name": "Liminal Contract",
    "description": "The Liminal Contract is a shimmering, ever-shifting parchment that warps and undulates in your hands like living ink. Its edges glow faintly as if touched by unseen forces, hinting at its otherworldly origins. This arcane artifact grants you a single, unsettling service, but beware: the price is not always in gold; it could be something far more personal and strange. Be warned, for the contract's power comes with a steep cost.",
    "category": "services",
    "price": 1000,
    "icon": "✍️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Gain a random minor magical ability (50% chance)",
      "Temporary immunity to fear effects"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Ethereal Messenger",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Minor Magical Ability",
        "rules": "You gain a random minor magical ability that lasts until the end of your next long rest. This effect has a 50% success rate upon activation and cannot be used more than once per day."
      },
      {
        "title": "Immunity to Fear Effects",
        "rules": "You become immune to all fear effects for one hour after using the contract. This immunity persists until it is triggered or you use another ability that negates this effect."
      }
    ],
    "levelRequirementReason": "This item requires a high level of magical knowledge and resilience, as its power comes with significant risks.",
    "vendorReason": "The Liminal Trader is known for dealing in rare and exotic artifacts, including those that offer both benefits and drawbacks.",
    "shippingDetail": "Delivery via Ethereal Messenger may take several days, as the contract requires careful handling to preserve its integrity during transport.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect with a one-hour duration for immunity",
      "endsWhen": "The minor magical ability ends at the end of your next long rest or when you use another similar ability, and the immunity to fear effects ends after one hour.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects a balance between the item's rarity, its powerful yet risky abilities, and the effort required for its creation.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T23:40:53.231456+00:00",
    "aiReviewedAt": "2026-07-23T23:40:53.231456+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_stormcloud_amulet": {
    "id": "teyvat_item_stormcloud_amulet",
    "name": "Stormcloud Amulet",
    "description": "The Stormcloud Amulet radiates an eerie, swirling grey mist that crackles with latent lightning. Crafted from the remnants of a storm-torn shipwreck, this amulet grants you resilience against the elements' wrath and the power to summon a fleeting rain cloud. When summoned, the cloud not only extinguishes small fires but also saps the energy of nearby enemies, slowing their movements by 50%. A true heirloom from Mondstadt's storied past, it is said that its wearer can command the very heavens themselves.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛈️",
    "stock": 75,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Lightning Resistance",
      "Miniature Rain Cloud"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_goose",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Lightning Resistance",
        "rules": "You gain resistance to lightning damage. This effect provides a +30% bonus to your AC when you are struck by lightning-based attacks."
      },
      {
        "title": "Miniature Rain Cloud",
        "rules": "As an action, you can summon a miniature rain cloud. The cloud extinguishes all fires within 10 feet of the target and saps enemy movement speed by 50% for 2 turns. This effect has a 5% chance to occur when you are struck by lightning."
      }
    ],
    "levelRequirementReason": "The amulet's mystical power requires a strong connection with the elements, which typically comes from those who have reached at least level 8.",
    "vendorReason": "Mona, the master of lightning and patron of the market, ensures that this relic is available to those in need of its powers.",
    "shippingDetail": "The amulet arrives via a swift messenger, ensuring it reaches you within three days from the time of purchase.",
    "usage": {
      "activation": "Action or Reaction (once per short rest)",
      "duration": "Instantaneous; lasts until used up or dispelled by an enemy's attack",
      "endsWhen": "Used when summoned and dismissed by the wearer, or interrupted by a successful DC 15 Wisdom saving throw.",
      "charges": "Unlimited, recharged after a long rest"
    },
    "priceReason": "The amulet's rarity and mystical properties justify its fair price of 1000 XP.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:40:44.553737+00:00",
    "aiReviewedAt": "2026-07-23T23:40:44.553737+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_crimson_scroll": {
    "id": "teyvat_item_crimson_scroll",
    "name": "Crimson Scroll of Forbidden Whispers",
    "description": "A disturbingly beautiful scroll filled with unsettling prophecies and forgotten rituals. Unsheathing this forbidden item grants temporary access to terrifying visions, but beware – prolonged exposure can drive a warrior mad!",
    "category": "forbidden",
    "price": 75000,
    "icon": "💀",
    "stock": 12,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "chance to inflict madness on target (10%)",
      "temporary vision of future events (5 turns)",
      "increased critical hit chance (7%)",
      "small chance to summon a shadowy imp"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "phantom_ship",
    "levelRequirement": 16
  },
  "equestria_item_legendary_starshard_armor": {
    "id": "equestria_item_legendary_starshard_armor",
    "name": "Starshard Knight's Breastplate",
    "description": "The Starshard Knight's Breastplate is a gleaming breastplate forged from the remnants of a star that fell to Equestria. Crafted by the Celestial Forges, its surface shimmers with cosmic light, offering protection and a radiant glow that can dazzle or intimidate foes. This armor not only provides an impenetrable defense but also grants the wearer resistance to fire damage, making it ideal for battles against fiery dragons or volcanic environments.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌟",
    "stock": 23,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "resistance_to_fire",
      "dazzling_glow"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Mail Dragon",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Resistance to Fire Damage",
        "rules": "The armor grants the wearer resistance to fire damage. This effect provides a +3 bonus to saving throws against fire-based attacks or hazards."
      },
      {
        "title": "Dazzling Glow",
        "rules": "The breastplate emits an intense, dazzling light that can temporarily blind enemies within 10 feet for up to 1 minute on the wearer's turn. This effect requires a successful attack roll and has a save DC of 15 against blindness."
      }
    ],
    "levelRequirementReason": "Crafted from celestial fragments, this armor is only accessible to those who have mastered the arts of battle at least as high as the twelfth level.",
    "vendorReason": "As the premier supplier of enchanted armors and weapons in Equestria, Canterlot Commerce has exclusive access to rare materials like starshards.",
    "shippingDetail": "The armor is delivered via a Royal Mail Dragon, ensuring safe and swift transport within a week.",
    "usage": {
      "activation": "Instantaneous activation by the wearer; the dazzling glow effect requires a successful attack roll.",
      "duration": "1 minute per turn for the dazzling glow; resistance to fire damage persists until the end of the wearer's next turn",
      "endsWhen": "The effect ends when the armor is removed or the duration expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from rare celestial fragments and forged by the Celestial Forges, this armor offers a unique combination of protection and dazzling effects at a fair price.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:41:02.152504+00:00",
    "aiReviewedAt": "2026-07-23T23:41:02.152504+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_mythic_harmony_potion": {
    "id": "equestria_item_mythic_harmony_potion",
    "name": "Potion of Absolute Harmony",
    "description": "The Potion of Absolute Harmony is crafted from the purest essence of friendship and balance. Upon consumption, it instantly soothes ruffled tempers and mends frayed relationships within a radius of ten feet. A sip of this potion can even pacify hostile creatures for a brief moment, ensuring peace where discord reigns. However, the user must be cautious; overuse may lead to uncontrollable giggling fits that last until the next long rest.",
    "category": "consumables",
    "price": 1000,
    "icon": "💖",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "delivery_only",
    "effects": [
      "heal_temper",
      "pacify_hostile"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Courier Griffon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heal Temper",
        "rules": "The drinker and all creatures within a ten-foot radius gain advantage on saving throws against the effects of the anger status effect. This effect lasts for one minute or until the next long rest, whichever comes first."
      },
      {
        "title": "Pacify Hostile",
        "rules": "Any hostile creature within five feet has disadvantage on attack rolls and ability checks made to attack the drinker for 1 minute. The effect ends if the creature moves more than 30 feet away from the drinker or if it takes any damage."
      }
    ],
    "levelRequirementReason": "This potion is designed for all adventurers, as harmony can be a powerful tool even in the hands of novices.",
    "vendorReason": "The Crystal Empire is known for its mastery over magical balance and friendship, making it the perfect vendor for this potent elixir.",
    "shippingDetail": "Delivered swiftly by a fleet of Crystal Couriers, ensuring the potion remains potent upon arrival.",
    "usage": {
      "activation": "Drink",
      "duration": "Instantaneous, lasts until next long rest for temper healing; pacification effect lasts 1 minute",
      "endsWhen": "Target moves more than 30 feet or takes damage; temper healing ends at the start of the drinker's next turn after a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The potion's rarity and effectiveness in restoring harmony make it a valuable but not prohibitively expensive addition to any adventurer's gear.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T23:41:05.499349+00:00",
    "aiReviewedAt": "2026-07-23T23:41:05.499349+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_cogsworths_clockwork_heart": {
    "id": "midlands_item_cogsworths_clockwork_heart",
    "name": "Clockwork Automaton's Core",
    "description": "The Clockwork Automaton's Core is a meticulously crafted core, salvaged from an ancient Imperial automaton. Its gears hum with a strange precision, and it seems to possess a faint, mechanical sentience. This relic not only enhances your armor rating by +5 but also has a 10% chance each turn to automatically repair damaged equipment. The ticking sound it emits can disorient enemies within close range, potentially disrupting their concentration.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚙️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Automated Repair",
      "Disorienting Ticks"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "Imperial Courier Service",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Automated Repair",
        "rules": "At the start of your turn, you have a 10% chance to automatically repair one damaged piece of equipment. This effect has no save DC and can occur once per short or long rest."
      },
      {
        "title": "Disorienting Ticks",
        "rules": "As an action, you can emit a series of ticks from the core that affects all enemies within 5 feet. These enemies must succeed on a Wisdom saving throw (DC 13) or be incapacitated for 1 round."
      }
    ],
    "levelRequirementReason": "The complexity and power of this relic necessitate a minimum level to ensure safe handling.",
    "vendorReason": "As purveyors of Imperial technology, the Empire Exchange naturally stocks this artifact.",
    "shippingDetail": "Ships within one week with an additional fee for fragile items.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous or 1 round (Disorienting Ticks)",
      "endsWhen": "Charges are expended or the duration ends",
      "charges": "Unlimited, but one charge is used per effect"
    },
    "priceReason": "The core's rarity and unique abilities justify a price of 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:41:11.655918+00:00",
    "aiReviewedAt": "2026-07-23T23:41:11.655918+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_resonating_shard": {
    "id": "almost_edge_resonating_shard",
    "name": "Resonating Shard of the Boundary",
    "description": "The Resonating Shard of the Boundary is a fragment torn from the very fabric of reality, pulsing with an unsettling hum that resonates through your mind. When held, it briefly amplifies perception to reveal hidden pathways or forgotten truths, but prolonged exposure can unravel even the sturdiest mind. This shard grants resistance to void effects and provides a bonus to investigation checks, making it invaluable for explorers and scholars venturing into the unknown.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 18,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Perception Amplification",
      "Resistance to Void Effects"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Perception Amplification",
        "rules": "When you hold the Resonating Shard of the Boundary, you gain a +5 bonus to Perception checks for 1 minute. This effect ends if you lose concentration (as if you had cast a spell) or if it is dispelled by another creature."
      },
      {
        "title": "Resistance to Void Effects",
        "rules": "You have resistance to the effects of void magic and phantasmal creatures for 1 hour. This effect ends when the duration expires, or if you are exposed to a greater than Fortitude save DC (DC 17) void effect."
      }
    ],
    "levelRequirementReason": "This shard requires a minimum of 6th level due to its complex magical resonance and the mental fortitude needed to wield it.",
    "vendorReason": "The Void Merchant is well-known for dealing in arcane relics from the farthest reaches of space, making this shard an expected addition to their inventory.",
    "shippingDetail": "Ships via a rift that may cause temporary disorientation upon arrival.",
    "usage": {
      "activation": "Instantaneous when held and concentration is maintained; ends if lost or dispelled.",
      "duration": "1 minute per use, can be maintained for up to 3 minutes with concentration.",
      "endsWhen": "Lost concentration, dispelled, or after 1 hour of exposure.",
      "charges": "Unlimited uses, but only one effect can be active at a time."
    },
    "priceReason": "The Resonating Shard's unique ability to enhance perception and provide resistance makes it worth the cost for adventurers seeking to explore dangerous realms.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:41:36.688349+00:00",
    "aiReviewedAt": "2026-07-23T23:41:36.688349+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_spectral_lantern": {
    "id": "almost_edge_spectral_lantern",
    "name": "Spectral Lantern of Lost Lights",
    "description": "The Spectral Lantern of Lost Lights flickers with a mournful glow that seems to draw power from the very echoes of extinguished souls, casting bright light into the darkest corners of the void. Its ancient craftsmanship whispers tales of forgotten realms and lost spirits, offering resistance against necrotic damage as it illuminates the path before you. However, those who dare to stare too long into its depths risk becoming trapped in an endless reflection, their reflections mirroring the souls that once walked this plane.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔦",
    "stock": 27,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Bright Light Projection",
      "Necrotic Resistance"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "silent_drone",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Bright Light Projection",
        "rules": "The lantern provides bright light in a 30-foot radius. Any creature within this area has advantage on saving throws against effects that would cause fear or confusion."
      },
      {
        "title": "Necrotic Resistance",
        "rules": "While holding the lantern, you and any creatures you can see within 15 feet have resistance to necrotic damage. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 3 due to its complex enchantments and protective nature.",
    "vendorReason": "The Liminal Trader specializes in rare artifacts and relics that bridge the planes, making this lantern a fitting addition to their inventory.",
    "shippingDetail": "Delivered by silent drone, ensuring discreet delivery of this delicate artifact.",
    "usage": {
      "activation": "Use as an action to activate the light and protective effects.",
      "duration": "Instantaneous activation; ends when you stop holding it or until you use your action on another task.",
      "endsWhen": "The effect ends if you lose control of the lantern or are incapacitated.",
      "charges": "Unlimited, but requires concentration."
    },
    "priceReason": "The lantern's intricate enchantments and rare materials justify its moderate price in XP.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T23:41:32.231786+00:00",
    "aiReviewedAt": "2026-07-23T23:41:32.231786+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_echoing_stone": {
    "id": "animatopia_echoing_stone",
    "name": "Stone of the Silent Grove",
    "description": "The Stone of the Silent Grove is a petrified root carved from an ancient tree that once stood in the heart of the Silent Grove. Its surface is mottled and textured, still holding traces of the forest’s whispers. When held, it amplifies sound within a small radius, allowing you to perceive sounds that are otherwise faint or imperceptible. It also subtly enhances your perception, granting insight into hidden dangers lurking nearby, but only for a brief moment before its power fades.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      " Amplified Sound Perception",
      " Hidden Threat Detection"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Amplified Sound Perception",
        "rules": "When you hold the stone, you gain advantage on Wisdom (Perception) checks made to hear sounds within a 30-foot radius for 1 minute. This effect ends if you drop or discard the stone."
      },
      {
        "title": "Hidden Threat Detection",
        "rules": "Once per short rest, you can focus your attention with the stone to detect hidden creatures or objects within a 50-foot radius. You must make an Intelligence (Investigation) check; on a successful roll, you gain advantage on attack rolls against any hidden threat found within this area for the next minute."
      }
    ],
    "levelRequirementReason": "The complexity of using the stone's powers requires a minimum of third-level proficiency.",
    "vendorReason": "The forest market thrives on knowledge and magical items that can be found deep within the Silent Grove, making it the ideal vendor for this artifact.",
    "shippingDetail": "Delivered by a giant snail, ensuring safe transport through treacherous terrain.",
    "usage": {
      "activation": "Passive effect when held; active use once per short rest to detect hidden threats.",
      "duration": "Amplified sound perception lasts for 1 minute. Hidden threat detection lasts for the next minute after a successful roll.",
      "endsWhen": "The effects end if you drop or discard the stone, or if your rest ends.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The rarity and limited availability of materials from the Silent Grove justify this fair value.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T23:41:44.371610+00:00",
    "aiReviewedAt": "2026-07-23T23:41:44.371610+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_beast_bazaar_favor": {
    "id": "animatopia_beast_bazaar_favor",
    "name": "Beast Bazaar Patronage",
    "description": "This intricately woven tapestry, known as Beast Bazaar Patronage, is a sacred offering that weaves threads of good fortune and trust between you and the vibrant denizens of the bazaar. Crafted from the finest fur and enchanted by ancient beastfolk, it grants an unerring 15% discount at the market while also increasing your charisma with any beastfolk NPC within sight. Wearing this tapestry is believed to bring you not just financial benefit but also a steady stream of valuable information from the bazaar’s merchants.",
    "category": "faction",
    "price": 1000,
    "icon": "🐾",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "15% Discount",
      "Increased Charisma"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "delivery_dragon",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Discount at Beast Bazaar",
        "rules": "While wearing this tapestry, you receive a 15% discount on all purchases from the Beast Bazaar. This effect is passive and lasts until removed or until your next long rest."
      },
      {
        "title": "Increased Charisma with Beastfolk NPCs",
        "rules": "For the duration of one short rest while wearing this tapestry, you gain a +2 bonus to all Charisma checks and saving throws when interacting with beastfolk NPCs. This effect ends if you remove the tapestry or after 10 minutes."
      }
    ],
    "levelRequirementReason": "The intricate enchantments require a moderate understanding of beastfolk lore, which is typically achieved by level 5.",
    "vendorReason": "The Beast Bazaar is the only place where such offerings are crafted and traded, ensuring its authenticity and value.",
    "shippingDetail": "Delivered by a trusted delivery dragon, known for its impeccable timing and reliability. Delivery takes no more than one week from the time of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until removed or until your next long rest.",
      "endsWhen": "Effect ends when you remove the tapestry or after a short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The intricate enchantments and materials used in crafting this tapestry justify its price, making it an excellent investment for those seeking both financial benefits and social advantages.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:42:09.287487+00:00",
    "aiReviewedAt": "2026-07-23T23:42:09.287487+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_whispering_amulet": {
    "id": "faerun_item_whispering_amulet",
    "name": "Whispering Amulet of Lost Secrets",
    "description": "The Whispering Amulet of Lost Secrets hums faintly, its silver chain and obsidian gemstones catching the light as they shimmer with ancient runes. This relic once belonged to a wizard who communed with lost knowledge, though his words were often riddles more than answers. When worn, it whispers cryptic truths about past events, occasionally revealing hidden passages or guiding you through enigmatic quests. However, its revelations are as unpredictable as they are helpful—often leading to more questions than clarity.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 35,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "reveals_hidden_passages",
      "guides_through_quests"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying_carpet",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Reveal Hidden Passages",
        "rules": "When activated by a bonus action, the amulet hums and grants the wearer insight into secret passages or hidden doors. This effect lasts for 1 minute, revealing one such passage per use. The DC to find these passages is 15. If there are no hidden passages nearby, the amulet fails to activate."
      },
      {
        "title": "Guide Through Quests",
        "rules": "The amulet provides a single clue or insight that can help with a specific quest each day. This effect requires concentration for 1 minute and has a 50% chance of being helpful, with the DM determining the exact nature of the assistance."
      }
    ],
    "levelRequirementReason": "This amulet is designed to be worn by those who have proven their worthiness through experience.",
    "vendorReason": "Baldur's Bazaar specializes in rare and ancient relics, making this amulet a fitting addition to its collection.",
    "shippingDetail": "Delivered by the swift and reliable Carpet of Flying, ensuring timely arrival without delay.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute",
      "endsWhen": "The amulet's power fades after one use or when a creature other than the wearer touches it.",
      "charges": "Unlimited"
    },
    "priceReason": "This balanced price reflects the item's limited utility and rarity, making it accessible yet valuable.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:42:26.448192+00:00",
    "aiReviewedAt": "2026-07-23T23:42:26.448192+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_godly_ring_of_wario": {
    "id": "faerun_item_godly_ring_of_wario",
    "name": "Ring of Wario's Greed",
    "description": "Forged in the depths of a forgotten dwarven mine, the Ring of Wario's Greed pulses with an unnerving hunger, drawing near any gold or gem that catches its eye. This ring grants a +2 bonus to your wealth-related checks but at a cost — you must resist the temptation to hoard every shiny object within reach. Use it wisely; otherwise, the ring may drive you to obsession and madness.",
    "category": "premium",
    "price": 1000,
    "icon": "💰",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "attracts_shiny_objects",
      "wealthy_bonus"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Attracts Shiny Objects",
        "rules": "When worn, the Ring of Wario's Greed emits a subtle pull towards any object with at least 100 gp in value within 30 feet. You have advantage on Wealth checks made to identify or appraise such objects."
      },
      {
        "title": "Wealthy Bonus",
        "rules": "While wearing the ring, you gain a +2 bonus to any check related to wealth, such as an Appraise roll or a DC 15 or lower Stealth check in a wealthy setting. This effect persists for 1 hour per day."
      }
    ],
    "levelRequirementReason": "Only the most experienced adventurers can wield this powerful ring without succumbing to its allure.",
    "vendorReason": "The Waterdeep Market is known for dealing in rare and legendary items, including those that might drive one mad with wealth.",
    "shippingDetail": "The ring is delivered via a dimensional portal, ensuring it reaches its destination swiftly but requiring the recipient to verify their identity.",
    "usage": {
      "activation": "Passive effect; activated by wearing the ring.",
      "duration": "1 hour per day when using Wealth-related checks.",
      "endsWhen": "The duration expires or you remove the ring from your finger.",
      "charges": "Unlimited, but limited to one daily use."
    },
    "priceReason": "Balanced at 1000 XP as it provides a powerful but limited bonus for experienced adventurers.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-23T23:42:33.591105+00:00",
    "aiReviewedAt": "2026-07-23T23:42:33.591105+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_karkata_scroll": {
    "id": "teyvat_item_karkata_scroll",
    "name": "Scroll of Whispered Secrets",
    "description": "The Scroll of Whispered Secrets is a delicate parchment, its surface dusted with ancient Karkata sigils that shimmer faintly in the light. Unleashing its secrets requires both courage and caution, as it grants a fleeting boost to Charisma but risks driving even the most steady mind into madness. With each unrolling, you might glimpse hidden paths or forgotten rituals, yet the very act of reading could incite strange urges within your soul.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Charisma Boost",
      "Madness Risk"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "phantom_ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "Activates on use as a bonus action. Provides +2 Charisma for 30 seconds. Ends when the duration expires or if you take any damage."
      },
      {
        "title": "Madness Risk",
        "rules": "There is a 15% chance that after using the scroll, you gain the madness condition until the end of your next turn. This effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "The scroll's power and risk are balanced for characters with a bit of experience.",
    "vendorReason": "Inazuma Imports specializes in rare and ancient artifacts, making the Scroll of Whispered Secrets a natural addition to their stock.",
    "shippingDetail": "Ships within 3 days via Phantom Ship, but requires an additional 1d6 days for delivery due to its fragile nature.",
    "usage": {
      "activation": "Bonus action when read and unrolled.",
      "duration": "30 seconds or until you take damage.",
      "endsWhen": "Duration ends or you take damage.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The scroll's rarity, ancient lore, and the unpredictable risks it poses justify this fair price in XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:42:52.459604+00:00",
    "aiReviewedAt": "2026-07-23T23:42:52.459604+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_godly_shard_of_axolotl": {
    "id": "teyvat_item_godly_shard_of_axolotl",
    "name": "Axolotl's Blessing",
    "description": "Axolotl's Blessing is a shimmering, iridescent shard that pulses faintly with divine energy. Crafted from the essence of the Axolotl Archon itself, this fragment bestows incredible resilience and an irresistible aquatic affinity upon its bearer. Holding it grants you +30% resistance to all elemental damage and increases your swim speed by 50%, making you glide through water like a true aquatic deity. Rumor has it that those who wear this blessing find themselves inadvertently summoning shoals of friendly axolotls, which often follow them as loyal companions.",
    "category": "premium",
    "price": 1000,
    "icon": "💧",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Elemental Resilience",
      "Swim Like the Sea"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "dragon_carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Resilience",
        "rules": "Grants you +30% resistance to all elemental damage. This effect is always active while holding Axolotl's Blessing."
      },
      {
        "title": "Swim Like the Sea",
        "rules": "Increases your swim speed by 50%. You can swim at a speed of up to 40 feet, and you are considered proficient in Athletics checks made using this ability. This effect is always active while holding Axolotl's Blessing."
      }
    ],
    "levelRequirementReason": "Even the simplest heroes have the potential to harness the blessings of the divine.",
    "vendorReason": "The harbors of Liyue are teeming with aquatic life, making it fitting for this item to be sold by a vendor who understands the sea and its creatures.",
    "shippingDetail": "This item is delivered via dragon carrier, ensuring safe transport through even the most turbulent waters.",
    "usage": {
      "activation": "Passive effect while holding the shard.",
      "duration": "Instantaneous; always active as long as you hold Axolotl's Blessing.",
      "endsWhen": "You no longer hold Axolotl's Blessing or it is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The divine essence and the unique aquatic abilities make this item a godly premium, yet balanced to ensure it remains within reach of players at lower levels.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T23:42:42.685924+00:00",
    "aiReviewedAt": "2026-07-23T23:42:42.685924+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_shimmering_shard": {
    "id": "earth_land_item_shimmering_shard",
    "name": "Shimmering Shard of the Frost Dragon's Heart",
    "description": "The Shimmering Shard of the Frost Dragon's Heart is a crystalline fragment, its surface etched with runes that glow like icy stars. Said to contain an unyielding sliver of a Frost Dragon’s wrath, this shard can augment ice spells by +25% damage and has a 30% chance to freeze your enemies in place when struck. A mage must be wary lest the shard's cold bite turns their fingertips into frostbitten stumps.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧊",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhance Ice Damage",
      "Freeze on Hit"
    ],
    "vendor": "magic_shop",
    "shippedBy": "frost_bird_messenger",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Enhance Ice Damage",
        "rules": "When you cast an ice spell, the damage increases by 25%. This effect lasts until the end of your next turn."
      },
      {
        "title": "Freeze on Hit",
        "rules": "If a creature is hit with this shard in combat, there's a 30% chance it will be frozen in place for 1 round. The target must succeed on a DC 15 Dexterity saving throw or be immobilized as ice crystals encase its limbs."
      }
    ],
    "levelRequirementReason": "The shard's raw power demands a mage of at least 8th level to wield it without mishap.",
    "vendorReason": "Only the experienced mages at Magic Shop have the arcane knowledge to properly handle and sell such an artifact.",
    "shippingDetail": "Ships via a swift frost bird courier, ensuring safe delivery within 3 days of purchase.",
    "usage": {
      "activation": "Attacking with the shard as part of your spellcasting action.",
      "duration": "Instantaneous effect; lasts until end of next turn or expended in battle.",
      "endsWhen": "The effect ends if you miss a target, use another ice-based spell, or run out of charges.",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "This shard is priced at 1000 XP as it offers significant utility and an edge in cold weather combat, but not so powerful as to unbalance the game.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:43:00.742157+00:00",
    "aiReviewedAt": "2026-07-23T23:43:00.742157+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_forbidden_echoing_amulet": {
    "id": "earth_land_item_forbidden_echoing_amulet",
    "name": "The Whispering Amulet of Lost Souls",
    "description": "The Whispering Amulet of Lost Souls, a cold and heavy talisman made from the petrified remains of an ancient hero, hums with the spirits of fallen warriors. It grants the wearer limited access to their wisdom but also risks attracting spectral visitors that may linger in your dreams or demand tribute. Use it only when you need counsel from the beyond, as prolonged contact can summon a restless ghostly advisor.",
    "category": "forbidden",
    "price": 1000,
    "icon": "👻",
    "stock": 2,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "wisdom boon",
      "spectral visitor risk"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Wisdom Boon",
        "rules": "Activate as a bonus action to gain advantage on Wisdom checks and saving throws for the next hour. This effect ends if you fall unconscious or if your concentration is interrupted."
      },
      {
        "title": "Spectral Visitor Risk",
        "rules": "There's a 10% chance per long rest that a ghostly advisor appears, offering advice but demanding a sacrifice of one of your memories in exchange. The ghost fades after an hour unless the debt is paid."
      }
    ],
    "levelRequirementReason": "Only those with significant experience can handle the amulet's powerful connection to the spirit world.",
    "vendorReason": "The Earth Emporium deals in forbidden and ancient artifacts, making it a fitting vendor for this relic of lost souls.",
    "shippingDetail": "Ships via shadow courier with expedited delivery to ensure the amulet reaches you undetected.",
    "usage": {
      "activation": "Bonus action (Wisdom Boon)",
      "duration": "One hour per activation",
      "endsWhen": "Concentration is lost or if you fall unconscious",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's rarity and the risk it poses to the wearer justify a price of 1,000 XP.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:43:08.377787+00:00",
    "aiReviewedAt": "2026-07-23T23:43:08.377787+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_guild_master_lucky_charm": {
    "id": "earth_land_item_guild_master_lucky_charm",
    "name": "Wario's Guild Master's Good Luck Charm (Replica)",
    "description": "Wario's Guild Master's Good Luck Charm (Replica) is a diminutive charm crafted from polished obsidian, imbued with the Quartermaster's personal magic. It gleams in the light, reflecting shards of luck that seem to dance around it. Known for its dual purpose, this charm not only increases your Diplomacy checks by 2d4 but also provides a small chance to avoid damage during combat. Its shiny surface is said to distract enemies, buy you precious seconds of reprieve.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍀",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "small_chance_to_avoid_damage",
      "increased_diplomacy"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "swift courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Small Chance to Avoid Damage",
        "rules": "When you take damage in combat, you have a chance equal to your Charisma modifier (min. +1) to avoid the damage entirely. This effect can only occur once per short or long rest."
      },
      {
        "title": "Increased Diplomacy",
        "rules": "For 1 hour after activation, when you make a Diplomacy check, roll an additional d4 and add it to your total. You must activate this charm as a bonus action."
      }
    ],
    "levelRequirementReason": "This charm is designed for beginners who need that extra bit of confidence in social situations or combat.",
    "vendorReason": "The Quartermaster himself crafted this replica to ensure it brings good fortune and peace within the guild.",
    "shippingDetail": "Delivered by a trusted swift courier, ensuring you receive your charm quickly.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour per activation",
      "endsWhen": "The duration ends when the hour expires or after being used once per rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This balanced price reflects its rarity and the personal magic infused by the Guild Quartermaster.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:43:00.368650+00:00",
    "aiReviewedAt": "2026-07-23T23:43:00.368650+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_berry_potion": {
    "id": "animatopia_berry_potion",
    "name": "Primal Burst Potion",
    "description": "The Primal Burst Potion is crafted from the sacred Bloodthorn Vines that grow in the heart of the ancient forest. These vibrant berries are known to release a surge of untamed power, temporarily enhancing your physical prowess and speed. The potion's effects are immediate but brief; after downing it, you'll feel an uncontainable burst of strength and a rush of adrenaline, making it easy to forget your surroundings for a few moments.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍓",
    "stock": 75,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Strength Boost",
      "Speed Enhancement"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "Consume the potion as a bonus action. You gain advantage on Strength checks and saving throws until the start of your next turn. The effect lasts for 1 minute."
      },
      {
        "title": "Speed Enhancement",
        "rules": "Downing the potion also grants you a +20 foot movement speed increase, which remains active for 1 round. This effect is not cumulative with other similar effects and ends when you fall unconscious or take damage."
      }
    ],
    "levelRequirementReason": "This potion provides a quick boost of power suitable for adventurers just starting their journey.",
    "vendorReason": "The forest market vendors have long traded in the sacred resources of the Bloodthorn Vines, ensuring they always stock this potent remedy.",
    "shippingDetail": "Delivered by a giant snail, which ensures safe and timely arrival to your doorstep.",
    "usage": {
      "activation": "Bonus action to consume the potion",
      "duration": "1 minute for Strength Boost; 1 round for Speed Enhancement",
      "endsWhen": "Effect ends when you fall unconscious or take damage",
      "charges": "Unlimited, as it is a single-use item"
    },
    "priceReason": "The rarity and the potency of this potion justify its high price in XP.",
    "priceOriginal": 280,
    "priceReviewedAt": "2026-07-23T23:43:11.689437+00:00",
    "aiReviewedAt": "2026-07-23T23:43:11.689437+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_totem_of_echoes": {
    "id": "animatopia_totem_of_echoes",
    "name": "Spirit Speaker's Stone",
    "description": "The Spirit Speaker's Stone is a polished obsidian totem imbued with the whispers of ancient Animatopian spirits. Crafted in the heart of the Echoing Wastes, it can mimic the sounds of various beasts with uncanny precision. Touch this relic and you may find yourself temporarily cloaked by the cacophony of nature’s own symphony—useful for luring or confusing foes. Its aura carries a faint echo that enhances your charisma when conversing with animals.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Animal Mimicry",
      "Auditory Confusion"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Giant Beetle Courier Service",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Animal Mimicry",
        "rules": "Activating the Spirit Speaker's Stone allows you to mimic the sounds of a beast for up to 1 minute. This effect has a 30% chance of confusing any creature within 60 feet that hears it, requiring them to make a DC 14 Wisdom saving throw or become disoriented for 1 round."
      },
      {
        "title": "Auditory Confusion",
        "rules": "When successfully mimicking an animal sound, there is a 15% chance (DC 12) that any creature within 30 feet will be confused for 1d4 rounds. This effect can only occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "This totem requires a minimum level of 8 due to its complex magical properties and the difficulty in crafting it.",
    "vendorReason": "The Beast Bazaar is known for exotic and rare items that can be used in conjunction with beast-themed magic, making it the perfect vendor for this totem.",
    "shippingDetail": "Ships via Giant Beetle Courier Service; delivery takes up to a week due to the nature of the item's fragile obsidian structure.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute per use",
      "endsWhen": "The mimicry ends when the user stops speaking or when interrupted",
      "charges": "Unlimited, but only one use per short or long rest"
    },
    "priceReason": "This price reflects the totem's rarity and magical properties, as well as the limited daily stock.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:43:20.549668+00:00",
    "aiReviewedAt": "2026-07-23T23:43:20.549668+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_temporal_stabilizer": {
    "id": "almost_edge_temporal_stabilizer",
    "name": "Temporal Stabilizer",
    "description": "The Temporal Stabilizer is a delicate device forged from ancient, rusted steel and enchanted with the essence of time itself. Crafted by the Liminal Trader at the edge of reality, it briefly counters the chaotic flow of time, granting its wielder an instant reprieve from temporal anomalies. Use this stabilizer wisely; once activated, you risk becoming entangled in a cascade effect where time loops back on itself like a never-ending waterfall.",
    "category": "premium",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Temporal Immunity",
      "Increased Armor Class"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Chronal Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Immunity",
        "rules": "Activates as a bonus action. The Temporal Stabilizer grants the user immunity to all temporal effects for one minute, including time loops and other chaotic time distortions. This effect ends if the stabilizer is destroyed or if the user takes any damage."
      },
      {
        "title": "Increased Armor Class",
        "rules": "Activates as a bonus action, increasing the user’s AC by +10 for one minute. This bonus can be applied once per long rest and ceases if the user is damaged in combat or if the stabilizer is destroyed."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield effectively, as the device's temporal magic demands a certain degree of mastery.",
    "vendorReason": "The Liminal Trader specializes in items that bridge the gap between worlds and realities, making this device an essential part of their wares.",
    "shippingDetail": "Ships via Chronal Express with a delivery time of three days. Special handling required due to the device's temporal properties.",
    "usage": {
      "activation": "Bonus action",
      "duration": "One minute per use, ending if the user takes damage or the stabilizer is destroyed",
      "endsWhen": "Destroyed or damaged in combat; ends at the start of your next turn otherwise",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The Temporal Stabilizer's rarity and unique temporal properties justify its price, providing a valuable but not overpowered tool for adventurers.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T23:43:33.760825+00:00",
    "aiReviewedAt": "2026-07-23T23:43:33.760825+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_mane_weave_service": {
    "id": "equestria_item_mane_weave_service",
    "name": "Expert Mane Weaving Consultation",
    "description": "Expert Mane Weaving Consultation offers a dazzling transformation to your mane and tail, crafting styles that shimmer and sparkle like the sunlit meadows of Equestria itself. Our master weavers use enchanted threads, each strand imbued with the essence of nature, to craft hairstyles that not only look stunning but also enhance your natural beauty. A visit to this service is more than just a makeover—it’s a transformative experience that leaves you feeling like royalty. Wario's insistence on gold-threaded braids adds an extra touch of luxury, ensuring every consultation is both elegant and memorable.",
    "category": "services",
    "price": 1000,
    "icon": "🎀",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Hairstyle",
      "Cosmetic Bonus"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "delivery_only",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Hairstyle",
        "rules": "The service provides a 50% chance to restore your hairstyle to its most flattering form, as if nature itself has woven it. The effect is immediate and lasts until the next long rest."
      },
      {
        "title": "Cosmetic Bonus",
        "rules": "There's a 10% chance that the weavers will suggest accessories or add-ons that provide a cosmetic bonus to your appearance, enhancing your charisma by +2 for one week. This effect is cumulative with other similar bonuses and lasts until the next long rest."
      }
    ],
    "levelRequirementReason": "This service is suitable for beginners and veterans alike, offering a universally appealing transformation.",
    "vendorReason": "The market in Ponyville is known for its variety of services that cater to the needs of all residents, from simple grooming to complex transformations like mane weaving.",
    "shippingDetail": "Services are delivered through a trusted courier who ensures timely arrival and professional handling.",
    "usage": {
      "activation": "Passive effect upon completion of the consultation.",
      "duration": "Lasts until the next long rest or is destroyed by a change in hairstyle.",
      "endsWhen": "The effect ends when you undergo another mane weaving service, change your hairstyle, or take a long rest.",
      "charges": "Unlimited uses; no need to recharge."
    },
    "priceReason": "The price reflects the expertise of our master weavers and the magical threads used in the process.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:43:38.224169+00:00",
    "aiReviewedAt": "2026-07-23T23:43:38.224169+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_claw_charm": {
    "id": "animatopia_claw_charm",
    "name": "Primal Howl Charm",
    "description": "The Primal Howl Charm is a talisman crafted from the fierce claw of an ancient Stone Badger, said to ward off negative energies and instill a sense of calm in its bearer. When worn, it occasionally emits a low growl that deters nearby predators and unsettles hostile creatures within 30 feet. The charm also provides a subtle healing effect, mending minor wounds over time as long as the wearer remains still.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🐺",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Deterrence Aura",
      "Healing Glow"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_messenger",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Deterrence Aura",
        "rules": "The charm emits a low growl within 30 feet, which deters hostile creatures. Creatures of challenge rating 1 or lower within the area must make a DC 12 Wisdom saving throw or be frightened until the start of their next turn. A creature that succeeds on its saving throw is immune to this effect for 24 hours."
      },
      {
        "title": "Healing Glow",
        "rules": "The charm provides minor healing, mending 1d6 hit points at the end of each long rest. This effect does not stack with other healing effects and cannot exceed a total heal of 5 hp per day."
      }
    ],
    "levelRequirementReason": "Requires at least 2nd level to effectively utilize its deterrent properties.",
    "vendorReason": "The Tribal Trader specializes in ancient and mystical trinkets from the wilds, including this charm's origin story.",
    "shippingDetail": "Shipped swiftly by the Winged Messenger, ensuring the charm arrives in perfect condition.",
    "usage": {
      "activation": "Passive effect until removed or destroyed.",
      "duration": "Instantaneous; ends when the charm is destroyed or removed.",
      "endsWhen": "Destroyed or removed from the wearer’s body.",
      "charges": "Unlimited, but requires a long rest to recharge minor healing."
    },
    "priceReason": "Balanced at 1000 XP for its unique deterrent and minor healing abilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:43:45.438505+00:00",
    "aiReviewedAt": "2026-07-23T23:43:45.438505+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_spirit_binding": {
    "id": "animatopia_spirit_binding",
    "name": "Commune with the Ancients",
    "description": "This intricately woven tapestry is made from threads of ancient Animatopia’s flora and fauna. It crackles with the energy of forgotten times when you commune with it, allowing you to glimpse into the spirits' vast memories. Prepare for revelations that could be both enlightening and disquieting; the spirits have seen much. Wario would indeed offer a fortune for such insights, but only those who can endure its unsettling truths may wield this artifact.",
    "category": "services",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "commune_with_spirits",
      "unearthed_history"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_beetle",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Commune with Spirits",
        "rules": "As an action, you commune with the tapestry for 1 minute. During this time, one willing creature within your reach can ask a question about Animatopia’s history or lore. The DM decides if the spirits provide a truthful answer, which could be unsettling."
      },
      {
        "title": "Unearthed History",
        "rules": "For the duration of 1 hour after using the tapestry, you gain advantage on Wisdom (History) checks related to Animatopia’s history. This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and wisdom can fully appreciate and handle the revelations from such ancient spirits.",
    "vendorReason": "The forest market is well-known for its connection to Animatopia’s past, making it a fitting place for this artifact.",
    "shippingDetail": "Delivered by the giant beetles of Animatopia in their distinctive chitinous mailboxes.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The duration ends after 1 minute or if you are incapacitated, stunned, or otherwise prevented from maintaining concentration.",
      "charges": "Unlimited, but only once per day for the Unearthed History effect."
    },
    "priceReason": "The price reflects its mythic rarity and the profound knowledge it offers without being overpowered.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:43:36.685050+00:00",
    "aiReviewedAt": "2026-07-23T23:43:36.685050+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_godly_scale": {
    "id": "animatopia_godly_scale",
    "name": "Scale of the Elder Leviathan",
    "description": "Recovered from the colossal, ancient leviathan that once patrolled Animatopia's oceans, this Scale of the Elder Leviathan pulses with primal energy and smells faintly of seaweed and something indescribably old. Its surface is etched with ancient runes that whisper stories of forgotten battles and lost empires. Staring into its depths can cause one to feel an overwhelming desire for fish, a craving that lingers until the scale's effects wear off.",
    "category": "premium",
    "price": 1000,
    "icon": "🐳",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "grant_powerful_buffs",
      "chance_to_summon_a_water_spirit"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "lightning_turtle",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Primal Buff",
        "rules": "When worn as an amulet or held in your hand, you gain a +2 bonus to all saving throws and ability checks related to water elements. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Water Spirit Summoning",
        "rules": "As a bonus action, you can attempt to summon a Water Spirit by concentrating on the scale for 1 minute. On a successful DC 20 Wisdom (Animal Handling) check, a Water Spirit appears and remains until dismissed or until you take damage."
      }
    ],
    "levelRequirementReason": "Only the most seasoned adventurers have mastered the necessary skills to harness such ancient power.",
    "vendorReason": "The Beast Bazaar deals exclusively in items recovered from deep sea explorations, making it the ideal vendor for this relic.",
    "shippingDetail": "Ships via a lightning turtle messenger, ensuring swift delivery to your doorstep.",
    "usage": {
      "activation": "Worn as an amulet or held in hand",
      "duration": "Until the end of your next long rest",
      "endsWhen": "You take damage or remove it from yourself",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "The scale's ancient power and unique properties justify its modest price in experience points.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-23T23:44:20.043458+00:00",
    "aiReviewedAt": "2026-07-23T23:44:20.043458+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_goblin_goggles": {
    "id": "middle_earth_goblin_goggles",
    "name": "Gimli's Grinning Goggles",
    "description": "Gimli's Grinning Goggles are a pair of delightfully sticky, mischievous goggles that were pilfered from a particularly grumpy Goblin tinkerer in the depths of Mirkwood. These whimsical accessories warp your vision in unpredictable ways; on a successful Perception check, they grant you advantage, but if your roll is a 15 or lower, they can drastically impair your perception for up to an hour. Beware, for these goggles also have a tendency to attract unwanted attention from the woodland creatures of Middle-earth.",
    "category": "equipment",
    "price": 1000,
    "icon": "😎",
    "stock": 42,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "+1d20 Perception Advantage",
      "Perception Roll ≤15: -4 to all Perception checks until next long rest"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Advantage on Perception Checks",
        "rules": "Activates as a bonus action. Lasts until the start of your next turn. If you roll a 15 or lower, this effect ends and you are impaired for up to an hour."
      },
      {
        "title": "Perception Impairment",
        "rules": "When your Perception check is ≤15, you take a -4 penalty on all Perception checks until the start of your next long rest. This impairment lasts for the duration of one long rest or until it ends early as part of this effect."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Perception to fully utilize the advantage granted by these goggles.",
    "vendorReason": "The Shire Shop caters to adventurers seeking unique and practical accessories, including items that can provide a competitive edge in perception-based challenges.",
    "shippingDetail": "Ships via the Pony Express with expedited delivery within a week of purchase.",
    "usage": {
      "activation": "Bonus action to activate advantage on Perception checks.",
      "duration": "Until start of next turn, or ends early if your roll is ≤15.",
      "endsWhen": "Rolls a Perception check ≤15; otherwise lasts until the start of your next long rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The goggles' unpredictable effects and unique origin justify their higher price point, making them a valuable yet risky tool for perception-based challenges.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:44:26.674093+00:00",
    "aiReviewedAt": "2026-07-23T23:44:26.674093+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_rune_scrying": {
    "id": "middle_earth_rune_scrying",
    "name": "The Whisperwind Oracle Service",
    "description": "The Whisperwind Oracle Service, a delicate crystal bowl filled with swirling ethereal mists, hums with ancient power as you set it before you. The mists whisper cryptic prophecies and fleeting visions of potential futures, offering guidance that can be both enlightening and perilous. Rumor has it, the spirits who speak through this service favor those who seek wisdom rather than riches, and their advice is often delivered in riddles that challenge your wit as much as they guide you.",
    "category": "services",
    "price": 1000,
    "icon": "🔮",
    "stock": 15,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Gain a cryptic hint related to your current quest.",
      "Risk attracting mischievous spirits, potentially aiding or hindering you."
    ],
    "vendor": "elven_market",
    "shippedBy": "flying_carpet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cryptic Guidance",
        "rules": "Activate the service as an action. Roll a d20; on a result of 15 or higher, gain a cryptic hint related to your current quest. The hint is delivered in riddles and may require interpretation."
      },
      {
        "title": "Spirit Attraction",
        "rules": "The service has a 30% chance (roll d20: 70%) of attracting mischievous spirits during use, which could either aid or hinder you. On a successful DC 15 Wisdom saving throw, the spirits are benevolent; otherwise, they may cause minor disruptions."
      }
    ],
    "levelRequirementReason": "Even the simplest seeker can benefit from guidance in their journey.",
    "vendorReason": "The elves of Lothlórien are known for their deep connection to ancient wisdom and spirits, making them trusted keepers of such services.",
    "shippingDetail": "Delivered swiftly by enchanted flying carpet, ensuring the service remains fresh upon arrival.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "Instantaneous effect; lasts until resolved.",
      "endsWhen": "Effect ends when you use it again or it is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, this service offers cryptic but valuable guidance without overstepping into overpowered territory.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-23T23:44:22.169195+00:00",
    "aiReviewedAt": "2026-07-23T23:44:22.169195+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_gravity_orb": {
    "id": "grand_country_gravity_orb",
    "name": "Wario's Wobbling Surprise",
    "description": "Wario's Wobbling Surprise is a pulsating, gravity-defying orb that seems to mock the laws of physics. When held, you can manipulate your personal gravity, but the results are unpredictable: sometimes it will launch you upwards with surprising force, and other times it might send you spiraling in the opposite direction. Despite its whimsical appearance, this item offers increased fall damage resistance, making it a quirky yet reliable companion for adventurers.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "gravity manipulation",
      "fall damage resistance"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_worm",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravity Manipulation",
        "rules": "As an action, you can attempt to manipulate your personal gravity. This effect lasts until the end of your next turn. There is a 50% chance that when you activate this ability, you are launched upwards by 10 feet; there is also a 20% chance you will be sent spiraling downwards by 10 feet. No save is required."
      },
      {
        "title": "Fall Damage Resistance",
        "rules": "While holding Wario's Wobbling Surprise, you have advantage on saving throws against falling damage. This effect lasts until the item is no longer held."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and adventurers who are just starting their journey.",
    "vendorReason": "Layer Market specializes in quirky and experimental items that push the boundaries of physics, making Wario's Wobbling Surprise a perfect fit.",
    "shippingDetail": "The dimensional worm can deliver this item with a slight delay due to its complex route through other dimensions.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "When you stop holding the item or at the start of your next turn",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its mythic rarity and the unpredictable nature of its effects, which can be either a boon or a bane.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-23T23:44:30.314871+00:00",
    "aiReviewedAt": "2026-07-23T23:44:30.314871+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_gravitational_seed": {
    "id": "grand_country_gravitational_seed",
    "name": "The Root of Rupture",
    "description": "The Root of Rupture is a small obsidian seed that hums with an unsettling energy. When planted, it creates a temporary sinkhole in the ground, dealing 1d6 damage to any creature within its 5-foot radius and providing a chance to trap one enemy for 1 round. Once planted, the seed rapidly grows, expanding the sinkhole until it reaches its full potential size, making it an invaluable tool for quick escapes or tactical positioning on the battlefield.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌱",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Sinkhole",
      "Trap"
    ],
    "vendor": "side_seller",
    "shippedBy": "swift_gryphon Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sinkhole",
        "rules": "When activated by planting, this seed creates a sinkhole with a 5-foot radius centered on the point where it was planted. All creatures in the area must succeed on a DC 13 Dexterity saving throw or fall prone and take 1d6 bludgeoning damage. This effect lasts for 1 minute."
      },
      {
        "title": "Trap",
        "rules": "If an enemy fails its saving throw, it is trapped within the sinkhole for 1 round (up to a maximum of 2 rounds). During this time, the trapped creature cannot move or take voluntary actions. At the end of each of its turns, the trapped creature can make another Dexterity saving throw. On a success, it is no longer trapped."
      }
    ],
    "levelRequirementReason": "This item requires minimal preparation and is accessible to low-level characters.",
    "vendorReason": "Side Seller frequently sells unusual items found in the marketplaces, including this seed from a mysterious merchant.",
    "shippingDetail": "The seeds are carefully wrapped and shipped by swift gryphons to ensure they reach their destination safely and quickly.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, lasting 1 minute per seed planted",
      "endsWhen": "The effect ends if the sinkhole collapses or the area is cleared of creatures",
      "charges": "Unlimited charges"
    },
    "priceReason": "This item's price reflects its rare and potentially dangerous nature, as well as its unique tactical utility.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:44:41.528741+00:00",
    "aiReviewedAt": "2026-07-23T23:44:41.528741+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_spirit_seed": {
    "id": "animatopia_spirit_seed",
    "name": "Whispering Spirit Seed",
    "description": "The Whispering Spirit Seed is a luminescent, heart-shaped seed that glows faintly with an ethereal light. Harvested from the ancient Spirit Trees of Animatopia, these seeds are said to bring forth miniature guardians that embody the forest’s spirit. When planted and nurtured by one who knows their will, they grow into loyal but simple spirits. These spirits can be commanded to guard or scare away intruders, though their antics often become more disruptive than helpful when left unchecked.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌱",
    "stock": 77,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "miniature_spirit_guardian",
      "wisdom_buff"
    ],
    "vendor": "forest_market",
    "shippedBy": "Forest Sprite Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Miniature Spirit Guardian",
        "rules": "When activated by a command word, the seed sprouts into a small, loyal spirit guardian. The guardian can be commanded to guard an area or scare away intruders within 30 feet. The guardian lasts for one hour and requires no further maintenance once summoned."
      },
      {
        "title": "Wisdom Buff",
        "rules": "For the duration of one long rest, the user gains a +1 bonus to Wisdom saving throws and proficiency checks related to Insight and Perception. This effect does not stack with other similar abilities."
      }
    ],
    "levelRequirementReason": "The seed requires basic knowledge of its will for activation.",
    "vendorReason": "Forest Market specializes in goods from the Spirit Trees, ensuring a steady supply of such seeds.",
    "shippingDetail": "Delivery is swift through the forest's natural pathways.",
    "usage": {
      "activation": "Command word",
      "duration": "1 hour or until dismissed",
      "endsWhen": "Dismissed by command word, intruder repelled, or guardian's duration ends after one long rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "The seed is priced at 1000 XP to reflect its unique origin and the time-consuming process of harvesting it from ancient Spirit Trees.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:44:41.649586+00:00",
    "aiReviewedAt": "2026-07-23T23:44:41.649586+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_scan": {
    "id": "internet_meme_scan",
    "name": "Algorithmic Resonance Analysis",
    "description": "Unlock the secrets of the digital realm with Algorithmic Resonance Analysis, a rare service from Data Dealer that deciphers your deepest desires through an intricate scan of The Internet. This powerful tool grants +3 to Perception for 8 turns and may bestow a minor stat boost or temporary advantage, making you feel as if you're surfing on data waves, hunting for the perfect solution among endless streams of information.",
    "category": "services",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "+3 to Perception for 8 turns",
      "may grant a minor stat boost or temporary advantage"
    ],
    "vendor": "data_dealer",
    "shippedBy": "encrypted_signal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+3 to Perception for 8 turns",
        "rules": "Activate as a bonus action. The effect lasts until the start of your next turn after 8 rounds have passed, and it can be ended early if you take any damage."
      },
      {
        "title": "may grant a minor stat boost or temporary advantage",
        "rules": "This effect occurs randomly with a 1-in-6 chance upon activation. If granted, the minor boost lasts until the end of your next turn and provides a +2 bonus to one ability check or saving throw."
      }
    ],
    "levelRequirementReason": "The service is accessible to all adventurers as it requires no specific skills beyond curiosity.",
    "vendorReason": "Data Dealer specializes in services that bridge the gap between the physical and digital worlds, making Algorithmic Resonance Analysis a fitting addition to their offerings.",
    "shippingDetail": "Delivered through a secure encrypted signal, ensuring your data remains private during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the start of your next turn after 8 rounds have passed or ends early if you take any damage.",
      "endsWhen": "Early upon taking any damage or at the end of its duration.",
      "charges": "Unlimited"
    },
    "priceReason": "The service is priced at 1000 XP, reflecting the rarity and utility of accessing deep web data without compromising your privacy.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T23:45:00.591446+00:00",
    "aiReviewedAt": "2026-07-23T23:45:00.591446+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_spore_bomb": {
    "id": "mushroom_kingdom_item_spore_bomb",
    "name": "Fungal Fury Bomb",
    "description": "This slimy, glowing orb, crafted from the concentrated spores of the Mushroom King's ancient fungi, exudes a potent fungal aura when activated. Within moments, it unleashes a blinding cloud of mycelial growth that stuns nearby foes for two searing seconds, giving you time to plant a network of sprouting mushroom platforms that offer both cover and climbing opportunities. The spore bomb is a veritable whirlwind of nature's might, perfect for disrupting enemy formations or creating advantageous terrain.",
    "category": "consumables",
    "price": 1000,
    "icon": "💣",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Stuns enemies",
      "Creates Mushroom Platforms"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stun",
        "rules": "When activated, the Fungal Fury Bomb releases a blinding cloud of spores within a 6-foot radius. All creatures in this area must make a DC 14 Constitution saving throw or be stunned for 2 seconds."
      },
      {
        "title": "Mushroom Platforms",
        "rules": "After its initial blast, the bomb plants several small mushroom platforms that rise from the ground within the same 6-foot radius. These platforms provide cover to any ally within 10 feet and can be used for climbing."
      }
    ],
    "levelRequirementReason": "The Fungal Fury Bomb requires a certain level of understanding of fungal magic to safely handle its volatile spores.",
    "vendorReason": "Toad Town Market is known for its connection with the Mushroom Kingdom, making it the ideal vendor for such potent fungal creations.",
    "shippingDetail": "The Fungal Fury Bomb must be shipped via the Mushroom Cart to ensure safe and timely delivery of this hazardous cargo.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous with a 2-second effect duration for the stun",
      "endsWhen": "Once used, it explodes immediately after activation.",
      "charges": "1 use"
    },
    "priceReason": "The Fungal Fury Bomb's rare materials and potent effects justify its high price in the market.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:45:56.925873+00:00",
    "aiReviewedAt": "2026-07-23T23:45:56.925873+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_wario_coin_belt": {
    "id": "mushroom_kingdom_item_wario_coin_belt",
    "name": "Wario's Lucky Coin Belt",
    "description": "Crafted from a mishmash of coins pilfered during Wario's infamous heists across the Mushroom Kingdom, this stylish belt is a veritable treasure trove on its own. The sturdy leather holds a motley collection of coins that not only grant you a +10% chance to find rare items but also attract valuable loot, doubling your gold drop rate for every encounter. Just beware—the more you spend, the less likely it is to fill up your coinpurse with anything other than chili peppers!",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "+10% chance to find rare items",
      "doubles gold drop rate"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "express_mushroom_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rare Item Bonanza",
        "rules": "Activates passively. Increases the chance of finding rare items by +10%. This effect is limited to one use per encounter."
      },
      {
        "title": "Golden Harvest",
        "rules": "Passive effect that doubles your gold drop rate for each encounter. Lasts until the end of the day or until you rest, whichever comes first. If you spend all your coins on chili peppers, this effect is immediately negated and resets."
      }
    ],
    "levelRequirementReason": "This belt's luck depends heavily on the user's previous experiences within the Mushroom Kingdom.",
    "vendorReason": "The Koopa Shop specializes in items that bring back memories of Wario's notorious heists, making this belt a fitting addition to their inventory.",
    "shippingDetail": "Delivered via the Express Mushroom Delivery service, ensuring your lucky belt arrives fresh from the Mushroom Kingdom.",
    "usage": {
      "activation": "Passive effect.",
      "duration": "Lasts until the end of the day or until you rest, whichever comes first. Resets upon spending all coins on chili peppers.",
      "endsWhen": "Ends when you rest for the night or spend all coins on chili peppers.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the belt's unique combination of passive bonuses and the risk it introduces to the player's coinpurse.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:45:31.763400+00:00",
    "aiReviewedAt": "2026-07-23T23:45:31.763400+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_royal_potion": {
    "id": "mushroom_kingdom_item_royal_potion",
    "name": "Potion of Absolute Wealth",
    "description": "The Potion of Absolute Wealth, crafted by the royal alchemists of Mushroom Kingdom, glimmers like molten gold and is said to have been blessed by Princess Peach herself. This shimmering nectar not only enhances your charisma, making you a charismatic beacon in any gathering but also significantly improves your social interactions, increasing the chance of forming valuable alliances with powerful NPCs. The potion's effects are so potent that it can even influence the course of quests and missions, opening doors to exclusive adventures.",
    "category": "premium",
    "price": 1000,
    "icon": "👑",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "+5 Charisma",
      "Increased NPC interaction success rate (40%)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+5 Charisma",
        "rules": "This effect lasts for an hour after consumption. The user's Charisma score is temporarily increased by 5 points, making them a more persuasive and charismatic individual during this period."
      },
      {
        "title": "Increased NPC interaction success rate (40%)",
        "rules": "For one week following consumption, the user has a +20 bonus to their Charisma (Persuasion) checks when attempting to form alliances or influence NPCs. This effect does not stack with similar abilities."
      }
    ],
    "levelRequirementReason": "This potion is accessible even for lower-level adventurers as it serves more of a social utility rather than combat prowess.",
    "vendorReason": "Wario Direct specializes in rare and exotic items that can give an edge to players, making this potion a perfect fit for their inventory.",
    "shippingDetail": "The potion is delivered via dragon courier, ensuring it arrives fresh and potent.",
    "usage": {
      "activation": "飲用（Consume as a bonus action）",
      "duration": "1 hour (Charisma bonus lasts until the end of this duration)",
      "endsWhen": "the duration ends or the user is incapacitated",
      "charges": "unlimited"
    },
    "priceReason": "The potion's effects are highly valuable in social settings, making it a worthwhile investment for players who prioritize diplomacy and alliances.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-23T23:45:26.699424+00:00",
    "aiReviewedAt": "2026-07-23T23:45:26.699424+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_grandma_gordons_rolling_blade": {
    "id": "leclaire_isle_item_grandma_gordons_rolling_blade",
    "name": "Grandma Gordon’s Rolling Blade of Dough",
    "description": "Grandma Gordon’s Rolling Blade of Dough is a culinary creation forged from enchanted dough that has been kneaded by the legendary baker herself. This blade not only deals bludgeoning damage but also applies a 'Sticky' effect, slowing your enemies’ movements and leaving them in a delightful, albeit unintended, state of flatness. A misstep could result in an accidental self-flattening—or worse, a doughy dough pile that might just make you late for the next delivery.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔪",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Bludgeoning Damage",
      "Sticky Effect"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "reinforced_cart",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Bludgeoning Damage",
        "rules": "When used as an action, this blade deals 1d8 bludgeoning damage plus your Strength modifier. On a critical hit, there is a 50% chance to create a small dough pile (a harmless, sticky mess that lasts for 1 hour)."
      },
      {
        "title": "Sticky Effect",
        "rules": "Enemies within reach have their movement speed reduced by half until the start of your next turn. This effect has no save DC and can only be applied once per target."
      }
    ],
    "levelRequirementReason": "Grandma Gordon’s Rolling Blade requires a level 8 character to wield, ensuring that the baker's expertise is fully utilized.",
    "vendorReason": "Pastry Palace specializes in all things doughy and magical, making Grandma Gordon’s Rolling Blade of Dough an apt addition to their inventory.",
    "shippingDetail": "Ships via reinforced carts, ensuring safe delivery even through the most chaotic of environments.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the target moves or is attacked by another creature.",
      "charges": "Unlimited"
    },
    "priceReason": "This item represents a rare, magical weapon forged from enchanted dough, balancing its unique abilities with a fair value.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:45:31.861209+00:00",
    "aiReviewedAt": "2026-07-23T23:45:31.861209+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_mythic_frosting_of_eternal_youth": {
    "id": "leclaire_isle_item_mythic_frosting_of_eternal_youth",
    "name": "Mythic Frosting of Eternal Youth",
    "description": "The Mythic Frosting of Eternal Youth is a shimmering, iridescent frosting believed to have been crafted by the ancient gods of Le Claire Isle. A single spoonful grants incredible vitality and temporarily halts the aging process – but be wary, excessive indulgence might lead one to crave sprinkles uncontrollably! This lavish treat is a serious investment in your future, though the secret ingredient ensures it remains as deliciously magical as ever.",
    "category": "premium",
    "price": 1000,
    "icon": "✨",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Vitality Boost",
      "Aging Resistance"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vitality Boost",
        "rules": "Eating this frosting restores 50 hit points and grants temporary immunity to aging effects for three days. This effect ends if the imbiber consumes more than a single spoonful."
      },
      {
        "title": "Aging Resistance",
        "rules": "For the duration of its effects, the consumer's natural aging process is halted by 2 years. This effect ceases after three days or upon consuming additional frosting."
      }
    ],
    "levelRequirementReason": "This item can be enjoyed by anyone, but only those who have reached at least first level can truly appreciate its transformative properties.",
    "vendorReason": "Sweet Supplies prides itself on offering the most exquisite and magical treats from Le Claire Isle, including this legendary frosting.",
    "shippingDetail": "Shipped by Dragon Delivery; expect a swift delivery with a touch of magic in the air.",
    "usage": {
      "activation": "Eating one spoonful as an action",
      "duration": "Three days from consumption",
      "endsWhen": "Upon consuming more frosting or after three days",
      "charges": "Unlimited; each use is independent"
    },
    "priceReason": "Given its mythic origins and the significant benefits it offers, this treat is priced fairly at 1000 XP.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-23T23:45:47.036646+00:00",
    "aiReviewedAt": "2026-07-23T23:45:47.036646+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_concentration": {
    "id": "kivotos_item_halo_of_concentration",
    "name": "Focus Flux Capacitor",
    "description": "The Focus Flux Capacitor gleams with a soft, ethereal light that dances around your head, enhancing your mental clarity and precision in complex tasks. Crafted from rare, crystalline materials found deep within ancient libraries, its power is said to amplify the mind's potential by focusing concentration. Use it wisely; the halo can only be worn for short periods before it overloads with the strain of too much mental exertion.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧠",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_intelligence_2",
      "boost_accuracy_1"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Focus",
        "rules": "While wearing the Focus Flux Capacitor, you gain a +2 bonus to Intelligence checks and saving throws. This effect lasts for 10 minutes each time you activate it. You can only use this once per short or long rest."
      },
      {
        "title": "Precision Edge",
        "rules": "When making an attack roll or skill check, you have advantage on the roll if your Intelligence modifier is at least +2, and you are using a weapon or tool that requires precision. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The Focus Flux Capacitor's power is tailored for scholars and sages who need to balance academic rigor with physical exertion.",
    "vendorReason": "The student store caters to the intellectual needs of adventurers, offering items that enhance both mental acuity and practical skills.",
    "shippingDetail": "Delivered within a week by standard mail service; packages may arrive slightly damaged due to the fragile nature of the halo's crystalline structure.",
    "usage": {
      "activation": "Action",
      "duration": "10 minutes each time activated",
      "endsWhen": "The duration ends at the start of your next turn or when you take damaging action or rest.",
      "charges": "Unlimited, but can only be used once per short or long rest."
    },
    "priceReason": "Crafted from rare materials and requiring precise magical energy to activate, the Focus Flux Capacitor provides a significant boost in mental capabilities without overloading the user's concentration.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T23:46:34.316634+00:00",
    "aiReviewedAt": "2026-07-23T23:46:34.316634+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_service_advanced_tutoring": {
    "id": "kivotos_item_service_advanced_tutoring",
    "name": "Brain Boost Blueprint",
    "description": "The Brain Boost Blueprint is a rare service that grants you access to intensive tutoring from an elite academy instructor, offering personalized lessons designed to enhance your magical abilities. Each session promises to push your limits with challenging assignments and in-depth analysis of complex spells. Be warned: the tutor's methods can be unpredictable; one moment you're mastering a spell, and the next, you might find yourself ensnared by your own concentration! This service ensures that you not only learn but also develop resilience against unexpected magical mishaps.",
    "category": "services",
    "price": 1000,
    "icon": "🎓",
    "stock": 2,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "personalized_tutoring",
      "spell Mastery"
    ],
    "vendor": "club_supply",
    "shippedBy": "express_delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Personalized Tutoring",
        "rules": "The tutor provides a series of intensive sessions that last for one week. Each session is designed to enhance your skill in a specific magical discipline, providing a +1 bonus to all spellcasting checks and saving throws related to that discipline until the end of the tutoring period."
      },
      {
        "title": "Spell Mastery",
        "rules": "You gain the ability to focus on mastering one new spell during the tutoring. This spell must be from a different school than any spells you currently know or have prepared, and it can be cast once per day without expending a spell slot."
      }
    ],
    "levelRequirementReason": "The service requires a minimum of 8th level to ensure that you have the necessary experience and magical proficiency to benefit fully from the tutoring.",
    "vendorReason": "Club Supply is known for its connections with top-tier educational institutions, making it the ideal vendor for this specialized service.",
    "shippingDetail": "The service is delivered within a week of purchase and includes all necessary materials and access to the tutor's virtual classroom.",
    "usage": {
      "activation": "Passive effect during tutoring sessions; spell mastery gained once per tutoring period.",
      "duration": "One week of intensive tutoring",
      "endsWhen": "Ends at the completion of one week or upon discontinuing the service.",
      "charges": "Unlimited uses per character"
    },
    "priceReason": "The balanced XP price reflects the intensive nature of the tutoring and the unique opportunity to master a new spell.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:03:24.051020+00:00",
    "aiReviewedAt": "2026-07-25T00:03:24.051020+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_wario_footprint_amulet": {
    "id": "faerun_item_wario_footprint_amulet",
    "name": "Wario's Lucky Footprint",
    "description": "A strangely comforting amulet shaped like Wario’s left foot, this relic is said to have been carved from a stone that fell during one of his legendary treasure hunts in the wilds beyond Candlekeep. The stone itself is said to possess an unusual warmth, and those who wear it report a subtle increase in their luck, as if the footprint is imbued with a bit of the plumber’s own mischievous flair.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦶",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "+1 Luck Bonus",
      "Increased Chance of Finding Shiny Things"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "swift_flying_owl",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Luck Boost",
        "rules": "The wearer gains a +1 bonus to all saving throws and ability checks. This effect does not require any action or activation, but is limited to once per long rest."
      },
      {
        "title": "Shiny Finders",
        "rules": "When the wearer finds an item of significant value (worth at least 50 XP), they have a +2 bonus on their next ability check related to finding such items. This effect can only be used once per day, and it requires being in an environment conducive to treasure hunting."
      }
    ],
    "levelRequirementReason": "The amulet is designed for beginners who are just starting out on their adventures and could use a bit of luck.",
    "vendorReason": "Waterdeep Market is known for its wide array of whimsical items, and this quirky relic fits perfectly with the market's reputation.",
    "shippingDetail": "Shipped by swift owl courier; arrives within a week.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous, lasts until the next long rest",
      "endsWhen": "Exhausted after one use per day or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's unique origin and its ability to significantly boost luck make it a valuable, albeit pricey, addition for adventurers.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:46:14.596909+00:00",
    "aiReviewedAt": "2026-07-23T23:46:14.596909+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_smolderstone_charm": {
    "id": "teyvat_item_smolderstone_charm",
    "name": "Smolderstone Charm",
    "description": "The Smolderstone Charm pulses with a steady, warm glow, its fiery essence crackling against your skin. This relic of ancient Pyro magic was crafted by a reclusive Pyro Vision Bearer who sought to share the warmth of their element without fully exposing it. When activated, it grants a fleeting pulse that not only restores 20 health but also ignites minor fire damage on your next attack, leaving a smoldering trail in its wake.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Restores Health",
      "Inflicts Minor Fire Damage"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_sprite",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Pulse",
        "rules": "Activates as a bonus action. Restores 20 hit points to the user and applies minor fire damage (1d4+2) to their next melee attack made before the end of their next turn."
      },
      {
        "title": "Minor Fire Damage",
        "rules": "Deals 1d4 + 2 fire damage. This effect has a 50% chance to apply minor burning, causing an additional 1d6 fire damage at the start of each of the target's turns for 1 minute."
      }
    ],
    "levelRequirementReason": "The charm is accessible to lower-level characters as it offers a helpful utility without requiring high-level abilities.",
    "vendorReason": "Mondstadt Market often stocks items that are practical for adventurers of all levels, and the Smolderstone Charm fits well within this ethos.",
    "shippingDetail": "Ships via the Winged Sprite courier service with same-day delivery in Mondstadt and neighboring regions.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous, effect lasts until your next turn.",
      "endsWhen": "Used once per short or long rest; recharges after a full night’s sleep.",
      "charges": "1/short or long rest"
    },
    "priceReason": "The charm's price reflects its balanced utility, offering both immediate health restoration and a minor combat advantage at an accessible cost.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:46:25.195946+00:00",
    "aiReviewedAt": "2026-07-23T23:46:25.195946+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_jade_blade_fragment": {
    "id": "teyvat_item_jade_blade_fragment",
    "name": "Jade Blade Fragment",
    "description": "The Jade Blade Fragment is a shard of a legendary blade, said to have been forged by the Geo Archon himself. Its edge remains razor-sharp despite its age, and it retains a faint scent of saltwater, hinting at battles fought against monstrous waves. This fragment not only enhances your attack with a 5% increase but also grants you a defensive aura that can trigger a 'Geo Resonance' for nearby allies within 10 feet.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔪",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Sharp Edge",
      "Defensive Aura"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_merchant",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Sharp Edge",
        "rules": "When you attack with a weapon, add a +5 bonus to your damage roll. This effect lasts until the end of your next turn."
      },
      {
        "title": "Defensive Aura",
        "rules": "As an action, activate this ability to create a 10-foot radius aura centered on you for 1 minute. Within this area, creatures have advantage on saving throws against earth-based damage and can make a DC 12 Wisdom save once per short or long rest to negate one source of disadvantage on their next attack roll."
      }
    ],
    "levelRequirementReason": "This fragment is suitable for characters who have mastered the basics, but its power aligns with those capable of wielding a full jade blade.",
    "vendorReason": "As the source of many legendary blades, Liyue Harbor is known to sell fragments and pieces of these weapons.",
    "shippingDetail": "Delivered by sea merchants, this fragment arrives safely but can take a week or more depending on weather conditions.",
    "usage": {
      "activation": "Action or Reaction (to activate the Defensive Aura)",
      "duration": "1 minute (Defensive Aura) / Until end of your next turn (Sharp Edge)",
      "endsWhen": "The effect ends when you are incapacitated, the aura is dispelled by magic, or you choose to end it.",
      "charges": "Unlimited"
    },
    "priceReason": "While not as powerful as a full jade blade, this fragment offers significant benefits and is priced accordingly.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:47:22.745506+00:00",
    "aiReviewedAt": "2026-07-23T23:47:22.745506+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_windchime_echo": {
    "id": "teyvat_item_windchime_echo",
    "name": "Windchime Echo",
    "description": "The Windchime Echo, a delicate glasswork captured in a woven net of silver thread, seems to whisper secrets from the wind's breath. Touched by the windswept isles and crafted in the shadowed forges of Inazuma, it occasionally hums with echoes of forgotten battles. Wario tried selling it as a spy device but struggled to find buyers. This chime grants heightened perception, making hidden items hard to miss, and can momentarily confuse foes with its unsettling melodies.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎐",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Heightened Perception",
      "Brief Confusion"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "swift_kite",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heightened Perception",
        "rules": "The wielder gains advantage on perception checks for detecting hidden or unattended objects. This effect lasts until the end of their next turn."
      },
      {
        "title": "Brief Confusion",
        "rules": "As a bonus action, the wielder can play the chime to confuse an adjacent enemy within 5 feet, causing them to make a Wisdom saving throw (DC 12) or be stunned for 1 round. The chime can only be used once per short rest."
      }
    ],
    "levelRequirementReason": "The item's effects are subtle but useful, making it accessible to lower-level characters.",
    "vendorReason": "Inazuma Imports specializes in exotic and magical curiosities from the windswept isles of Teyvat, including this chime.",
    "shippingDetail": "Shipped by swift kite couriers, ensuring prompt delivery to eager collectors.",
    "usage": {
      "activation": "Bonus action or reaction (for confusion)",
      "duration": "Instantaneous for confusion; lasts until end of next turn for perception",
      "endsWhen": "Used up, recharged at the start of each long rest",
      "charges": "Uses 1/long rest"
    },
    "priceReason": "The Windchime Echo's unique effects and origin from Inazuma Imports justify its higher price.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T23:47:12.439752+00:00",
    "aiReviewedAt": "2026-07-23T23:47:12.439752+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_empire_tax_token": {
    "id": "midlands_item_empire_tax_token",
    "name": "Official Tax Assessment Token",
    "description": "A hefty bronze token, its surface stamped with the imperial seal and a rather unsettling portrait of Emperor Theron. This token is not merely for show; it grants you a 5% discount at Empire Exchange stalls and a chance to avoid inspection by guards should you need it. The mere possession of this token can boost your reputation with the Empire, making it a valuable tool for both traders and travelers seeking to navigate the complex web of imperial bureaucracy.",
    "category": "faction",
    "price": 1000,
    "icon": "💰",
    "stock": 38,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "discount at Empire Exchange (5%)",
      "chance to avoid guard inspection"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "imperial mail drone",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Empire Exchange Discount",
        "rules": "When you spend gold at any Empire Exchange stall, gain a 5% discount. This effect is instantaneous and requires no action."
      },
      {
        "title": "Avoid Guard Inspection",
        "rules": "At the start of your turn, as a bonus action, you can attempt to avoid guard inspection by rolling a DC 12 Dexterity (Stealth) check. On a success, you are not inspected this round. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This token is designed for travelers and traders who frequently interact with the Empire's bureaucracy.",
    "vendorReason": "Empire Exchange has a vested interest in maintaining good relationships with customers, making this token an attractive offer to them.",
    "shippingDetail": "Ships via imperial mail drones, ensuring swift delivery within the Empire's borders.",
    "usage": {
      "activation": "Bonus action at start of turn",
      "duration": "Instantaneous for discount; once per long rest for avoiding inspection",
      "endsWhen": "Ends when used or at the end of a long rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects its utility in both practical and social aspects, offering significant value to those navigating Empire Exchange.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:47:06.521819+00:00",
    "aiReviewedAt": "2026-07-23T23:47:06.521819+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_warrio_s_lucky_cog": {
    "id": "midlands_item_warrio_s_lucky_cog",
    "name": "Wario's Unstable Gear",
    "description": "Wario's Unstable Gear, a cogsized contraption recovered from his chaotic workshop after an explosive mishap, seems to pulse and hum with unpredictable energy. It randomly grants +5 to either attack or defense for one round, but its unstable nature can also cause temporary confusion in allies within 10 feet, compelling them to make a DC 14 Wisdom saving throw or act erratically for the next minute. The cog's erratic behavior makes it best suited for those who thrive on chaos and unpredictability.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⚙️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Random Attack/Defense Boost",
      "Cause Temporary Confusion"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "volatile courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Random Attack/Defense Boost",
        "rules": "The wielder gains a +5 bonus to either their attack roll or saving throw for one round. This effect is random and cannot be controlled."
      },
      {
        "title": "Cause Temporary Confusion",
        "rules": "All allies within 10 feet must make a DC 14 Wisdom saving throw. On a failed save, the ally becomes confused for 1 minute. They act unpredictably during this time. This effect can be triggered once per short or long rest."
      }
    ],
    "levelRequirementReason": "The unpredictable nature of Wario's Unstable Gear requires a certain level of experience and control to manage its chaotic effects.",
    "vendorReason": "Fractured Forge specializes in salvaging and repurposing items from the most volatile environments, making it the perfect vendor for such an unstable artifact.",
    "shippingDetail": "The unstable nature of Wario's Unstable Gear causes delays. It must be delivered within 24 hours of purchase or the item may malfunction.",
    "usage": {
      "activation": "Instantaneous activation by the wielder.",
      "duration": "One round for the attack/defense boost, 1 minute for confusion effect.",
      "endsWhen": "The effects end when their durations expire or when the wielder takes a short rest.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Given its unpredictable nature and the risk involved in handling such an unstable item, the price reflects both the materials used and the potential hazards.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:47:36.067522+00:00",
    "aiReviewedAt": "2026-07-23T23:47:36.067522+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_flare_orb": {
    "id": "pokemon_item_flare_orb",
    "name": "Flare Orb of Fiery Fury",
    "description": "The Flare Orb of Fiery Fury hums with the raw energy of a Charizard's breath, its surface crackling with flames that seem to dance with a life of their own. This potent relic, crafted from the heartwood of an ancient Dratini tree and imbued with the essence of a legendary dragon's fire, is said to have been found in the ruins of a long-lost Pokemart. Throwing it at your foes ignites them in a blinding burst of flames, dealing searing fire damage and possibly setting their hair alight—a spectacle both fearsome and delightful for onlookers.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Searing Flame Burst",
      "Ignite Target"
    ],
    "vendor": "pokemart",
    "shippedBy": "poke-mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Searing Flame Burst",
        "rules": "When thrown, the Flare Orb releases a burst of flames dealing 150 fire damage to all creatures in a 30-foot radius. Creatures failing their Dexterity saving throw (DC 16) are set ablaze for the duration of the encounter."
      },
      {
        "title": "Ignite Target",
        "rules": "There is a 20% chance that setting a creature on fire will also ignite your hair, dealing an additional 50 fire damage to you and igniting you for the duration. You must make a Dexterity saving throw (DC 14) or suffer disadvantage on all attack rolls until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The Flare Orb's raw power demands a high level to wield effectively in battle.",
    "vendorReason": "Pokemarts are known for their vast array of items that empower trainers and adventurers, making the Flare Orb an ideal addition.",
    "shippingDetail": "The Flare Orb is shipped via poke-mail, ensuring it arrives in pristine condition within a day.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted upon use and destroyed after one use.",
      "charges": "Unlimited"
    },
    "priceReason": "The Flare Orb's rare crafting materials and potent effects justify its high price in the Pokemart.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T23:47:43.663061+00:00",
    "aiReviewedAt": "2026-07-23T23:47:43.663061+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_rusted_shield": {
    "id": "pokemon_item_rusted_shield",
    "name": "Rusted Shield of the Stalwart Trainer",
    "description": "The Rusted Shield of the Stalwart Trainer is a weathered relic, its surface pockmarked with rust and battle scars. Originating from the ancient gym of the Pokémon League, this shield not only offers protection but also subtly unsettles your foes. It provides +10 Armor Class, and when you block an attack, there's a 25% chance that your opponent will become momentarily confused, granting advantage on their next attack roll for one round. Additionally, it increases your critical hit chance by 10%, making every strike feel like fate itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Armor +10",
      "Confuse Opponent"
    ],
    "vendor": "league_store",
    "shippedBy": "poke-express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Stun on Block",
        "rules": "When you block an attack with this shield, there's a 25% chance that your opponent becomes confused. On their next turn, they have disadvantage on all attack rolls against you until the end of their next turn."
      },
      {
        "title": "Critical Hit Chance Increase",
        "rules": "While equipped, your critical hit chance increases by 10%. This effect persists for the duration of a short rest or until you lose consciousness."
      }
    ],
    "levelRequirementReason": "This shield requires significant strength and experience to wield effectively.",
    "vendorReason": "The league store stocks items that honor its ancient history and the trainers who have passed through its doors.",
    "shippingDetail": "Ships within 3 days via standard delivery service.",
    "usage": {
      "activation": "Passive effect when equipped.",
      "duration": "Until you lose consciousness or until a short rest is taken.",
      "endsWhen": "The effect ends if you lose consciousness or at the end of your next long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This shield's rare origin and unique properties make it a valuable yet balanced addition to any trainer’s arsenal.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T23:47:30.574682+00:00",
    "aiReviewedAt": "2026-07-23T23:47:30.574682+00:00",
    "aiReviewVersion": 1
  },
  "internet_firewall_proxy": {
    "id": "internet_firewall_proxy",
    "name": "Quantum Data Bubble",
    "description": "The Quantum Data Bubble appears as a shimmering, translucent sphere that hovers just above your hand like a living entity. Crafted from quantum-entangled particles and bound by arcane runes, it deflects digital probes with an efficiency that borders on the mystical. It grants +1 to Armor Class and has a 50% chance to reflect magical attacks back at their source, making you a formidable shield against both malicious and accidental data breaches.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 17,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Armor Class Boost",
      "Reflective Shield"
    ],
    "vendor": "data_dealer",
    "shippedBy": "encrypted_signal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Armor Class Boost",
        "rules": "The Quantum Data Bubble grants +1 to your Armor Class when activated. This effect is passive as long as the item remains active."
      },
      {
        "title": "Reflective Shield",
        "rules": "Once per short or long rest, you can activate the Quantum Data Bubble to reflect a magical attack back at the attacker. The reflection has no saving throw and deals damage equal to half of the original magic missile or similar spell's damage."
      }
    ],
    "levelRequirementReason": "This item is designed for lower-level characters who need basic protection against digital threats without requiring a high proficiency in arcane knowledge.",
    "vendorReason": "The Data Dealer specializes in tech and security items, making the Quantum Data Bubble an ideal product for their inventory.",
    "shippingDetail": "Ships via secure encrypted signals with a delay of one week to ensure maximum safety and integrity of the item during transit.",
    "usage": {
      "activation": "Activates upon physical contact; lasts until manually deactivated or until expended.",
      "duration": "Until manually deactivated or until expended",
      "endsWhen": "Manually deactivated by the user or when its uses are exhausted",
      "charges": "1 use per short rest"
    },
    "priceReason": "The Quantum Data Bubble combines advanced technology with arcane enchantments, offering a unique blend of protection and utility at a fair price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:47:58.150204+00:00",
    "aiReviewedAt": "2026-07-23T23:47:58.150204+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_liyue_merchant_favor": {
    "id": "teyvat_item_liyue_merchant_favor",
    "name": "Liyue Harbor Merchant's Blessing",
    "description": "The Liyue Harbor Merchant's Blessing is a jade pendant of subtle craftsmanship, said to bring good fortune in trade. Crafted by a shrewd merchant from Liyue Harbor, it not only enhances your negotiation prowess but also grants you a temporary reputation that can smooth the way for favorable deals. Wario’s skepticism aside, this trinket has been known to secure better prices on exotic goods like sea silk and dragon tendons.",
    "category": "faction",
    "price": 1000,
    "icon": "💰",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "improved_negotiation",
      "reputation_boost"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Improved Negotiation",
        "rules": "When you engage in a barter or trade, you can use an action to activate the pendant. For the next hour, your Charisma (Deception) checks are made with advantage against merchants of Liyue Harbor. This effect ends if you spend time away from the harbor for more than 8 hours."
      },
      {
        "title": "Reputation Boost",
        "rules": "For one week after activation, any merchant in Liyue Harbor is willing to grant a 10% discount on purchases made during that period. This effect ends when you no longer have the pendant equipped or if it is destroyed."
      }
    ],
    "levelRequirementReason": "This item requires a higher level due to its specific benefits in enhancing trade skills and reputation.",
    "vendorReason": "Liyue Harbor merchants are known for their shrewd business acumen, and thus they offer items that can help improve one’s trade skills.",
    "shippingDetail": "The Sea Serpent Express ensures timely delivery of the pendant, making it available to adventurers in need of a boost before embarking on their next trade venture.",
    "usage": {
      "activation": "Action",
      "duration": "One hour and one week",
      "endsWhen": "When you spend more than 8 hours away from Liyue Harbor or if the pendant is destroyed",
      "charges": "Unlimited, but only active when equipped"
    },
    "priceReason": "The item’s balanced price reflects its specific benefits in enhancing trade skills and reputation within a limited time frame.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:47:50.486385+00:00",
    "aiReviewedAt": "2026-07-23T23:47:50.486385+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_inazuma_kitsune_charm": {
    "id": "teyvat_item_inazuma_kitsune_charm",
    "name": "Kitsune's Whisper Charm",
    "description": "A delicate fox charm crafted from polished obsidian and wrapped in a silken thread from Inazuma, this Kitsune's Whisper Charm is said to bear the essence of a mischievous kitsune spirit. When held, it grants its bearer a fleeting glimpse into the currents of fate—literally seeing the future for one brief moment per day. Some say it brings good fortune, while others fear it might just as easily bring chaos. Wario’s frequent purchases suggest he believes in its potential power more than its curse.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🦊",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Future Glimpse",
      "Sleight of Hand"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Dragonwind Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Future Glimpse",
        "rules": "As an action, you gain a +2 bonus to one ability check. This effect lasts until the start of your next turn. The charm allows you to see into the future for this one moment."
      },
      {
        "title": "Sleight of Hand",
        "rules": "You can use this as part of an attempt at Sleight of Hand (Deception) checks, granting a +3 bonus on such rolls. This benefit persists until your next long rest."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurers should be able to wield its power for good or ill.",
    "vendorReason": "Inazuma Imports specializes in exotic artifacts and curiosities from their homeland, making this charm a natural fit.",
    "shippingDetail": "Shipped via Dragonwind’s fastest courier service within Inazuma for immediate delivery.",
    "usage": {
      "activation": "Action or bonus action (Future Glimpse), Reaction (Sleight of Hand)",
      "duration": "Until the start of your next turn (Future Glimpse), Until the end of your next long rest (Sleight of Hand)",
      "endsWhen": "The start of your next turn (Future Glimpse), After a short or long rest (Sleight of Hand)",
      "charges": "Unlimited, but only one use per day for Future Glimpse"
    },
    "priceReason": "The charm's rarity and unique ability to grant future sight justify its high price.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T23:47:58.251756+00:00",
    "aiReviewedAt": "2026-07-23T23:47:58.251756+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_skullshard": {
    "id": "curiosity_skullshard",
    "name": "Echoing Skull Shard",
    "description": "A fragment of a colossal skull, the Echoing Skull Shard pulses with residual psychic energy that whispers the final cries of those who perished in this cursed place. When held, it amplifies the echoes of death into clear, haunting sounds that can be heard by all within earshot. The shard's power is both a gift and a curse, for it momentarily grants insight into the sufferings of the dead but also risks driving its bearer to madness.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💀",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "psychic echo",
      "madness risk"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Psychic Echo",
        "rules": "When activated as an action, you hear the final cries of those who perished in your immediate vicinity. This effect lasts for 1 minute and can be used once at any time without requiring a saving throw. The volume and clarity of the sounds are sufficient to convey the fear and pain of the deceased."
      },
      {
        "title": "Madness Risk",
        "rules": "There is a 5% chance each day that you gain one level of temporary madness upon hearing the echoes, requiring a DC 13 Wisdom saving throw. Failure results in the onset of temporary madness for 24 hours, with a -2 penalty to all ability checks and attack rolls until cured."
      }
    ],
    "levelRequirementReason": "This item is accessible to low-level characters who might benefit from its insight into tragic events without requiring high proficiency or power.",
    "vendorReason": "The Chaos Dealer deals in relics of chaos and despair, making the Echoing Skull Shard a fitting addition to their inventory.",
    "shippingDetail": "Delivered swiftly by the Winged Courier, this fragile fragment must be handled with care due to its volatile nature.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "1 minute.",
      "endsWhen": "You hear the echoes or after one use per day.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Echoing Skull Shard's price reflects its rarity, historical significance, and the inherent risk it poses to its bearer.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:48:14.931258+00:00",
    "aiReviewedAt": "2026-07-23T23:48:14.931258+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_rusty_dragon_scale": {
    "id": "earth_land_rusty_dragon_scale",
    "name": "Rusty Dragon Scale Shield",
    "description": "The Rusty Dragon Scale Shield, once worn by a grumpy dragon now reduced to mere embers, retains its fiery essence. This massive shield is surprisingly light and radiates a warm, comforting heat that seems to ward off the chill of battle. Its scales shimmer with ancient patterns, offering both protection and a hint at forgotten battles. Striking fear into goblins or annoying allies alike, this shield might just give you an edge in any skirmish.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Armor Class +2",
      "Fire Resistance"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "horse_cart",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Armor Class +2",
        "rules": "The shield provides a +2 bonus to AC while worn, offering unmatched protection against physical attacks."
      },
      {
        "title": "Fire Resistance",
        "rules": "You gain resistance to fire damage. Additionally, when you are hit by a melee attack, there is a 50% chance that the attacker suffers minor burns, dealing 1d4 fire damage and reducing their speed by 10 feet for 1 minute."
      }
    ],
    "levelRequirementReason": "The shield's ancient magic requires a certain level of martial prowess to wield effectively.",
    "vendorReason": "As a trusted supplier of battle gear, the Guild Quartermaster ensures only the finest equipment reaches capable hands.",
    "shippingDetail": "Delivered by horse cart, the shield is carefully packed to prevent any damage during transit.",
    "usage": {
      "activation": "Wielded as a shield in combat.",
      "duration": "Until removed or until expended.",
      "endsWhen": "The shield's effect ends when you take damage from a fire-based source or when it runs out of charges, whichever comes first.",
      "charges": "5 uses; recharged after a long rest."
    },
    "priceReason": "The shield's rarity and magical properties justify its balanced price in the market.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T23:48:16.365312+00:00",
    "aiReviewedAt": "2026-07-23T23:48:16.365312+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_wario_gold_coin_charm": {
    "id": "earth_land_wario_gold_coin_charm",
    "name": "Wario's Lucky Gold Coin Charm",
    "description": "Wario's Lucky Gold Coin Charm gleams like polished gold, unmistakably crafted in the shape of the nefarious Mario-wannabe's head. Crafted from a mix of real gold and a secret alchemical formula, this coin is said to bring players an illusory surge of luck during battles, though it comes with the unwelcome side effect of attracting greedy goblins who seek to claim their share. The charm whispers tales of its origins but remains silent on how much luck it can truly bestow upon its bearer.",
    "category": "premium",
    "price": 1000,
    "icon": "💰",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Illusory Luck",
      "Unwanted Attention"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illusory Luck",
        "rules": "When activated, Wario's Lucky Gold Coin Charm grants the wearer a +2 bonus to their next attack roll and saving throw against traps. This effect lasts for one round after activation but has no effect if used in combat with more than two enemies within 30 feet."
      },
      {
        "title": "Unwanted Attention",
        "rules": "Upon activation, the charm broadcasts a faint echo of Wario's laughter, attracting nearby goblins. Any goblin within 60 feet must succeed on a DC 12 Wisdom saving throw or be drawn to the coin’s location for 1 minute, ignoring other threats."
      }
    ],
    "levelRequirementReason": "This charm is designed for players just starting their journey, offering them an early taste of luck and adventure.",
    "vendorReason": "The Earth Emporium specializes in collecting and selling unique items from all corners of the world, including this rare Wario-inspired trinket.",
    "shippingDetail": "Shipped via a delivery drone, ensuring quick arrival to eager adventurers.",
    "usage": {
      "activation": "Action",
      "duration": "One round after activation; effect ends if used in combat with more than two enemies within 30 feet.",
      "endsWhen": "The effect ends at the start of your next turn after using it, or if you use another action to attack an enemy within 30 feet.",
      "charges": "Unlimited"
    },
    "priceReason": "This charm offers a balanced mix of utility and flavor without breaking the game balance.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-23T23:48:27.281569+00:00",
    "aiReviewedAt": "2026-07-23T23:48:27.281569+00:00",
    "aiReviewVersion": 1
  }
};
