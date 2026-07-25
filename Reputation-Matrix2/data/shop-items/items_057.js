// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_057 = {
  "animatopia_giggleberry_bomb": {
    "id": "animatopia_giggleberry_bomb",
    "name": "Giggleberry Bomb",
    "description": "The Giggleberry Bomb is a plump, giggling berry that bursts with infectious laughter. When thrown at a foe, it unleashes a wave of hilarity that can turn even the most serious monster into a laughing fool for three rounds. The berries are harvested from the wild, untamed lands and sold by Tribal Trader, who knows their worth in both humor and combat. Each bomb is crafted with care using ancient recipes, ensuring that laughter spreads far and wide.",
    "category": "consumables",
    "price": 1000,
    "icon": "😂",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Explosive Giggles",
      "Infectious Humor"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "Swift Rabbit Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Explosive Giggles",
        "rules": "When thrown, the Giggleberry Bomb deals 1d6 bludgeoning damage to a single target within 30 feet. The target must succeed on a DC 12 Dexterity saving throw or be incapacitated by uncontrollable laughter for three turns."
      },
      {
        "title": "Infectious Humor",
        "rules": "There is a 50% chance that the target will also become tickled, an effect that lasts until the end of its next turn. While tickled, the creature suffers disadvantage on all attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "The Giggleberry Bomb is a simple yet effective tool for those just starting their adventures.",
    "vendorReason": "Tribal Trader has a knack for finding unusual and useful items, including the Giggleberry Bombs harvested from far-off lands.",
    "shippingDetail": "The Swift Rabbit Couriers deliver the Giggleberry Bombs with lightning speed, ensuring that your laughter will be unleashed just in time for your next battle.",
    "usage": {
      "activation": "Throwing Action",
      "duration": "Instantaneous",
      "endsWhen": "Target is incapacitated by laughter or attack roll ends",
      "charges": "Unlimited"
    },
    "priceReason": "The Giggleberry Bombs are priced higher due to their unique properties and the specialized crafting required for their creation.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T21:42:18.604654+00:00",
    "aiReviewedAt": "2026-07-23T21:42:18.604654+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_stoneclaw_amulet": {
    "id": "animatopia_stoneclaw_amulet",
    "name": "Stoneclaw Amulet of the Howling Spirit",
    "description": "The Stoneclaw Amulet of the Howling Spirit is a pulsating talisman crafted by the ancient Stoneclaw tribe, forged from obsidian and imbued with the essence of howling wolves. When worn, it amplifies your connection to primal forces, allowing you to channel ferocious roars that strike fear into the hearts of foes. The amulet's power is drawn directly from the howling winds and can be felt in its cool, jagged surface.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐾",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Roar of the Wild",
      "Spiritual Resistance"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Dire Wolf Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Roar of the Wild",
        "rules": "As a bonus action, you can unleash an intimidating roar that intimidates all creatures within 30 feet. Creatures must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute. This effect has no limit but requires a short rest to regain use."
      },
      {
        "title": "Spiritual Resistance",
        "rules": "You gain resistance to fear effects and psychic damage. This benefit lasts until the start of your next turn after you take any action or reaction. You can only use this ability once per long rest."
      }
    ],
    "levelRequirementReason": "The amulet's power is attuned to those who have proven their worth in the wild, requiring at least 8th level to wield its primal might.",
    "vendorReason": "The Beast Bazaar specializes in exotic and ancient artifacts from far-off lands, including this powerful relic of the Stoneclaw tribe.",
    "shippingDetail": "Delivered by a pack of dire wolves that travel swiftly through the night, ensuring timely delivery to your doorstep.",
    "usage": {
      "activation": "Bonus action or reaction (Roar of the Wild); automatic with Spirituality Resistance",
      "duration": "Instantaneous (Roar of the Wild), until start of next turn (Spiritual Resistance)",
      "endsWhen": "Ends when you take any action or reaction after using Roar of the Wild; ends at the start of your next turn for Spiritual Resistance",
      "charges": "Unlimited, but requires a short rest to regain use of Roar of the Wild"
    },
    "priceReason": "The amulet's rarity and unique abilities justify its price, offering both intimidation and resilience in battle.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:43:08.018931+00:00",
    "aiReviewedAt": "2026-07-23T21:43:08.018931+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_sunstone_shard": {
    "id": "animatopia_sunstone_shard",
    "name": "Sunstone Shard of the Radiant Bloom",
    "description": "The Sunstone Shard of the Radiant Bloom is a crystalline fragment, once part of a fallen sunstone, now glowing faintly with residual warmth and vitality. Crafted from the heart of a dying star, it radiates a soft light that seems to heal and rejuvenate all who touch it. This shard is highly prized by Animatopian healers for its unparalleled restorative properties, making it an indispensable tool in treating even the most severe Wario-induced injuries.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔆",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Restores vitality",
      "Heals status ailments"
    ],
    "vendor": "forest_market",
    "shippedBy": "Giant Butterfly Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Vitality",
        "rules": "When activated, the shard restores 50 hit points to a creature. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Heals Status Ailments",
        "rules": "Once per short or long rest, the shard has a 30% chance of curing minor status ailments such as poison or bleed on a successful DC 15 Wisdom (Medicine) check by the user. This effect is triggered upon activation."
      }
    ],
    "levelRequirementReason": "This item requires no level, but it is still valuable for its restorative properties.",
    "vendorReason": "The forest market is known for its diverse and rare wares, including this exotic shard from the farthest reaches of Animatopia.",
    "shippingDetail": "Shipped by a Giant Butterfly Drone, delivery time to the nearest town is approximately one week.",
    "usage": {
      "activation": "Object interaction",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per day",
      "charges": "Recharges at dawn"
    },
    "priceReason": "The shard’s rarity and its significant restorative properties justify this price, making it a valuable but not overpriced addition to any adventuring party.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T21:42:29.770655+00:00",
    "aiReviewedAt": "2026-07-23T21:42:29.770655+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_focus": {
    "id": "kivotos_item_halo_of_focus",
    "name": "Halo of Concentrated Brainpower",
    "description": "The Halo of Concentrated Brainpower, a shimmering crown crafted from pure student ambition and an ancient formula that whispers of forgotten wisdom, hovers over your brow like a beacon of intellect. This artifact grants you heightened focus, allowing you to ignore distractions and concentrate on the task at hand with unwavering intensity. Scholars say it is favored by those who seek to unravel the most complex puzzles or simply pass their next exam with flying colors.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧠",
    "stock": 62,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_concentration",
      "resistance_to_distractions"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Increased Concentration",
        "rules": "While wearing this halo, you gain advantage on Intelligence checks and saving throws against effects that require concentration. The effect lasts for the duration of an hour or until a short rest."
      },
      {
        "title": "Resistance to Distractions",
        "rules": "This halo provides a +1 bonus to your saving throws against distractions and conditions related to mental stress, such as fear or exhaustion. This bonus does not stack with other similar bonuses."
      }
    ],
    "levelRequirementReason": "The item's enchantment requires a solid foundation of knowledge and experience, making level 5 a reasonable prerequisite.",
    "vendorReason": "The student store is known for its wide array of academic aids, including this rare and useful artifact favored by dedicated scholars.",
    "shippingDetail": "Ships within three days via Drone Delivery. The halo's fragile nature requires careful handling to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect, no activation required.",
      "duration": "One hour per long rest or until a short rest is taken.",
      "endsWhen": "The duration ends upon taking a short rest or when the wearer removes the halo.",
      "charges": "Unlimited uses, recharges after a long rest."
    },
    "priceReason": "The item's rarity and unique properties make it a valuable asset for scholars and adventurers alike, warranting its fair value in XP.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T21:42:42.211637+00:00",
    "aiReviewedAt": "2026-07-23T21:42:42.211637+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chronometric_reset": {
    "id": "kivotos_item_chronometric_reset",
    "name": "Temporal Slipstream Service",
    "description": "The Temporal Slipstream Service is a compact device that emits a brief ripple in time, allowing you to reset your current turn and recover minor status effects. Crafted from ancient chronal alloys, this gadget offers a rare opportunity for temporal recalibration. A fleeting moment of stability amidst the flux of battle or misadventure, it's perfect for those who need an extra second to correct a mistake or avoid disaster. (Warning: The aftereffects may leave you with a lingering sense of disorientation.)",
    "category": "services",
    "price": 1000,
    "icon": "⏳",
    "stock": 38,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "reset_current_turn",
      "minor_status_effect_removal"
    ],
    "vendor": "club_supply",
    "shippedBy": "Express Courier (Probably)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reset Current Turn",
        "rules": "As an action, activate the device to reset your current turn. This effect is instantaneous and has no range or area. You can use this once per long rest."
      },
      {
        "title": "Minor Status Effect Removal",
        "rules": "At the start of your next turn after activation, you can remove one minor status effect from yourself (such as blinded, deafened, or slowed). No save is required."
      }
    ],
    "levelRequirementReason": "This service is accessible to most adventurers who are just starting their journey and need a tool that provides immediate assistance without the complexity of higher-level magic.",
    "vendorReason": "The Club Supply is known for offering tools that help adventurers outsmart or survive tricky situations, making this device a natural fit in their inventory.",
    "shippingDetail": "Delivered within the day with Express Courier's reliable service.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used up, you can use this effect once per long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The Temporal Slipstream Service offers a powerful combination of immediate tactical advantage and the ability to recover from minor setbacks without depleting resources.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:42:32.146233+00:00",
    "aiReviewedAt": "2026-07-23T21:42:32.146233+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_echoing_shard": {
    "id": "kivotos_item_echoing_shard",
    "name": "Fragment of the Lost Resonance",
    "description": "This Fragment of the Lost Resonance, a shimmering shard etched with ancient runes and pulsating with ethereal light, hums softly as if recalling forgotten songs from bygone eras. Touch it to invoke fleeting visions that whisper secrets about hidden objects within a small radius; the shard's touch can also grant a +5 bonus to Perception checks when you examine clues closely, but beware—too much exposure may drive you mad with echoes of past events.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "reveal_hidden_objects",
      "bonus_to_perception"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Courier of the Scholar's Guild",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Objects",
        "rules": "When activated as an action, this shard illuminates hidden objects within a 5-foot radius for up to 1 minute. The visions it grants are random and may include false information, requiring Wisdom (Perception) checks against a DC of 13 to discern their accuracy."
      },
      {
        "title": "Bonus to Perception",
        "rules": "Grants the user a +5 bonus on Perception checks when examining clues closely for up to 1 hour after activation. This effect is limited to once per long rest and can be used only if the user has not previously activated it within the last week."
      }
    ],
    "levelRequirementReason": "The shard requires a basic understanding of magic to activate its effects.",
    "vendorReason": "Academy Armory specializes in rare curiosities and magical artifacts, making them the perfect vendor for this enigmatic fragment.",
    "shippingDetail": "Delivered via a trusted courier who ensures the safe arrival of such delicate items within three days.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute or until the user dismisses it",
      "endsWhen": "The user chooses to end it, upon completion of its duration, or if exposed to a dispel magic spell",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price as the shard combines useful but not overpowered effects with a limited utility window.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T21:42:57.887969+00:00",
    "aiReviewedAt": "2026-07-23T21:42:57.887969+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_wizard_scroll_of_minor_illusion": {
    "id": "earth_land_wizard_scroll_of_minor_illusion",
    "name": "Wario's Whimsical Wandering Visions",
    "description": "Crafted from arcane earth and woven with the whispers of ancient forest spirits, Wario's Whimsical Wandering Visions is a rare scroll that conjures small illusions perfect for distracting foes or creating temporary diversions. Unfold it before guards to make your sword appear twice its size, or use it in battle to confuse and mislead your enemies. The scroll's enchantments are subtle yet powerful, enhancing the battlefield with illusions that can shift the tide of combat.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 34,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "create_illusion_of_small_object",
      "confuse_opponent"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Winged Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Create Illusion of Small Object",
        "rules": "This scroll allows you to conjure an illusionary duplicate of a small object, such as a weapon or shield. The illusion is indistinguishable from the original and can be used to distract foes within 30 feet for one turn. It has no real substance and can be dispelled by any creature with a successful Wisdom saving throw."
      },
      {
        "title": "Confuse Opponent",
        "rules": "For every illusion created, there is a chance (50%) that it will cause a nearby enemy to become confused for one turn. The target must succeed on a Wisdom saving throw (DC 14) or be affected by the confusion. This effect does not stack with other sources of confusion."
      }
    ],
    "levelRequirementReason": "This scroll requires a wizard level 6 or higher to properly harness its earthbound magic.",
    "vendorReason": "The Magic Shop specializes in crafting and selling items that blend the natural world with arcane power, making it an ideal vendor for Wario's Whimsical Wandering Visions.",
    "shippingDetail": "Ships via Winged Courier, delivered swiftly to your doorstep.",
    "usage": {
      "activation": "Use an action to unfold the scroll and activate its effects.",
      "duration": "One turn per illusion created.",
      "endsWhen": "The illusions dissipate after one turn or when dispelled by a successful saving throw.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Crafted with rare earth materials and ancient forest magic, this scroll is priced at 1000 XP to reflect its unique crafting and potent effects.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:43:04.922676+00:00",
    "aiReviewedAt": "2026-07-23T21:43:04.922676+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_gear_of_the_iron_pioneer": {
    "id": "connectopia_gear_of_the_iron_pioneer",
    "name": "Pioneer's Grindstone Gauntlets",
    "description": "The Pioneer's Grindstone Gauntlets are a pair of heavily-worn, iron-clad gauntlets forged by the toughest pioneers. Their surface is scored with the marks of countless battles and mining expeditions, yet they remain surprisingly resilient. These gauntlets grant exceptional mining prowess, allowing users to excavate at an increased rate and have a higher chance of discovering rare ores. The grip on these gauntlets is so sturdy that it aids in scaling cliffs or wrestling with stubborn stone blocks. Wario's admiration for the smell of metal makes these gauntlets a favorite among adventurers who seek both practical utility and legendary craftsmanship.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 15,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increased mining speed",
      "rare ore discovery"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "wagon",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Increased Mining Speed",
        "rules": "While wearing the Pioneer's Grindstone Gauntlets, you can mine at a rate increased by 20%. This effect is passive and does not require any action to activate. The mining speed boost lasts indefinitely until you rest or remove the gauntlets."
      },
      {
        "title": "Rare Ore Discovery",
        "rules": "When using these gauntlets, there is a +15% chance of discovering rare ores when mining. This effect requires an action to use and can be activated once per short or long rest."
      }
    ],
    "levelRequirementReason": "This level requirement ensures that only experienced adventurers with the necessary skills and strength can benefit from these gauntlets.",
    "vendorReason": "Pioneer Post is known for its extensive trade routes through mining regions, making it a trusted source for equipment like the Pioneer's Grindstone Gauntlets.",
    "shippingDetail": "Ships via sturdy wagon with delivery delays of up to one week due to rugged terrain.",
    "usage": {
      "activation": "Instantaneous (Rare Ore Discovery)",
      "duration": "Indefinite (Increased Mining Speed); ends when you rest or remove the gauntlets",
      "endsWhen": "Resting or removing the gauntlets",
      "charges": "Unlimited"
    },
    "priceReason": "The reduced price reflects a balanced XP value considering its passive and active benefits, as well as its epic rarity.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T21:43:00.199112+00:00",
    "aiReviewedAt": "2026-07-23T21:43:00.199112+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_forbidden_singularity_shard": {
    "id": "doughnut_hole_forbidden_singularity_shard",
    "name": "Fractured Echo of Oblivion",
    "description": "The Fractured Echo of Oblivion is a sliver of singular space-time, a remnant from a collapsed singularity. Upon contact, it emits localized distortions, creating gravity wells that shift and warp the immediate environment. The echoes of forgotten realities ripple through the air, causing temporary confusion in nearby creatures. This shard is not for the faint-hearted; Wario's failed attempt to consume it serves as a grim reminder of its dangers.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌀",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "gravity_well",
      "confusion"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Black Hole Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Gravity Well",
        "rules": "When activated, creates a localized gravity well within a 10-foot radius centered on the user. This effect lasts for 1 minute and imposes disadvantage on all Strength (Athletics) checks made in this area until it ends or is dispelled by a successful DC 15 Dispel Magic. The gravity well can be ended early if the user takes any damage."
      },
      {
        "title": "Confusion",
        "rules": "Upon activation, creatures within 30 feet of the user must succeed on a DC 14 Wisdom saving throw or become confused for 1 minute. A confused creature moves in a random direction (the DM rolls 1d8 to determine its movement). It makes no attacks and takes no voluntary actions. Once this effect ends, it can take an action on its turn."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 5 to handle the shard's unstable energy safely.",
    "vendorReason": "The Void Vendor deals exclusively in exotic and dangerous artifacts, making it the safest place for such an item.",
    "shippingDetail": "Due to its volatile nature, the shard must be shipped within a specially reinforced container capable of withstanding extreme gravitational forces.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (reduced to instantaneous if user takes damage)",
      "endsWhen": "The effect ends when the duration expires or the user takes damage.",
      "charges": "Unlimited, but can be expended once per long rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare and dangerous nature.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T21:43:18.546368+00:00",
    "aiReviewedAt": "2026-07-23T21:43:18.546368+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_curiosity_temporal_donut": {
    "id": "doughnut_hole_curiosity_temporal_donut",
    "name": "Chronos Cruller",
    "description": "The Chronos Cruller, a donut that dances on the edge of time, offers fleeting glimpses into potential futures and moments from your past. Consuming it allows you to rewind time briefly, returning to an earlier point in the day. The taste is a delightful mix of cinnamon and sugar, but beware—overindulgence can lead to temporal distortions and a whimsical craving for more. Wario, ever the connoisseur, ensures these treats are made with care, but even he warns against overeating them.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 93,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "rewind_time",
      "future_glimpse"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Time (Instantaneous)",
        "rules": "By consuming the Chronos Cruller, you can instantly rewind time to a few minutes ago. This effect has no save DC and is limited to once per day."
      },
      {
        "title": "Future Glimpse",
        "rules": "The cruller grants you a brief vision of one possible future, allowing you to make a single Wisdom (Insight) check as if you had foreknowledge. This effect has no save DC and can be used once per day."
      }
    ],
    "levelRequirementReason": "The Chronos Cruller's effects are subtle but powerful, suitable for adventurers just beginning their journey.",
    "vendorReason": "Center Seller is known for its eclectic selection of curiosities and treats, including Wario's renowned creations.",
    "shippingDetail": "The Temporal Delivery Service ensures timely delivery to adventurers across the land, but be prepared for occasional delays due to temporal anomalies.",
    "usage": {
      "activation": "Eating the Chronos Cruller",
      "duration": "Instantaneous; once per day",
      "endsWhen": "Effect is used or the cruller is consumed",
      "charges": "Unlimited, as long as you have a cruller"
    },
    "priceReason": "The Chronos Cruller offers unique and powerful abilities that are highly sought after by adventurers seeking to navigate time.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:43:37.107506+00:00",
    "aiReviewedAt": "2026-07-23T21:43:37.107506+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_echoing_boots": {
    "id": "the_edge_echoing_boots",
    "name": "Echoing Boots of Silent Steps",
    "description": "The Echoing Boots of Silent Steps are crafted from leather imbued with an ancient enchantment that absorbs sound and movement. They allow their wearer to move without a trace, blending seamlessly into any environment. Their maker, an enigmatic figure known as the Whisperer, wove silence into the very fibers of these boots, ensuring they remain silent even in the most challenging terrain. These boots are surprisingly comfortable, allowing for extended stealth missions without discomfort.",
    "category": "equipment",
    "price": 1000,
    "icon": "👣",
    "stock": 47,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increased_stealth",
      "bonus_movement_speed"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "winged_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silent Step",
        "rules": "While wearing these boots, you can move silently and leave no sound or trace of your passage. As a bonus action, you can activate this property for up to 1 hour per long rest. This effect ends if you are incapacitated, dismounted, or fall prone."
      },
      {
        "title": "Swift Stride",
        "rules": "You gain a +10 foot bonus to your walking speed while wearing these boots. The bonus movement speed does not stack with other effects that grant increased movement speed. This effect ends when you finish a short rest."
      }
    ],
    "levelRequirementReason": "The Echoing Boots of Silent Steps are designed for travelers and explorers, making them accessible to adventurers at the start of their journey.",
    "vendorReason": "Edge Outpost specializes in gear that helps adventurers navigate treacherous terrains, from bustling cities to remote wildernesses.",
    "shippingDetail": "Ships via winged messenger for swift delivery, ensuring these boots arrive in perfect condition.",
    "usage": {
      "activation": "Bonus action to activate Silent Step; ends after 1 hour per long rest or when you are incapacitated, dismounted, or fall prone.",
      "duration": "Up to 1 hour per long rest while Silent Step is active.",
      "endsWhen": "Incapacitation, dismounting, falling prone, or completion of a short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The Echoing Boots of Silent Steps are crafted from enchanted leather and imbued with ancient magic, making them both powerful and expensive.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T21:43:25.357874+00:00",
    "aiReviewedAt": "2026-07-23T21:43:25.357874+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_voidstone_puzzle": {
    "id": "the_edge_voidstone_puzzle",
    "name": "Voidstone Puzzle of Infinite Reflection",
    "description": "The Voidstone Puzzle of Infinite Reflection is a smooth, black stone etched with intricate, shifting symbols that seem to ripple and change with each glance. Unsolved, it lies dormant until one's intellect is tested by its enigmatic design. Once solved, the puzzle opens a small, shimmering portal to an empty void, perfect for stashing unneeded gear or escaping unwanted social encounters. However, prolonged contemplation of the symbols can induce a disorienting sense of existential dread.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "creates_small_portal",
      "chance_of_item_generation"
    ],
    "vendor": "final_shop",
    "shippedBy": "void_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Create Small Portal",
        "rules": "Activating the puzzle requires a successful Intelligence (Investigation) check. Once solved, it opens a small portal to an empty void that lasts for 1 minute. The portal is stable only within a 5-foot radius and can be used once per day."
      },
      {
        "title": "Chance of Item Generation",
        "rules": "When the puzzle is solved, there is a 20% chance that an unattended item from your inventory will be teleported into the void. This effect has no cooldown but cannot retrieve items larger than a hand crossbow."
      }
    ],
    "levelRequirementReason": "The puzzle demands a basic understanding of spatial and symbolic logic, making it accessible to characters as low as level 1.",
    "vendorReason": "Final Shop specializes in rare curiosities and enigmatic artifacts, so the Voidstone Puzzle is an ideal addition to their inventory.",
    "shippingDetail": "The item requires special handling by Void Delivery, ensuring it arrives intact and undisturbed.",
    "usage": {
      "activation": "Standard Action",
      "duration": "1 minute per solve",
      "endsWhen": "The portal closes after 1 minute or when the void is accessed.",
      "charges": "Unlimited (one use per day)"
    },
    "priceReason": "The item's rarity, unique effects, and the specialized nature of its vendor justify a price of 1000 XP.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:44:01.155309+00:00",
    "aiReviewedAt": "2026-07-23T21:44:01.155309+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_liminal_echo": {
    "id": "almost_edge_item_liminal_echo",
    "name": "Liminal Echo",
    "description": "The Liminal Echo is a perfectly smooth obsidian sphere that hums with the whispers of forgotten dimensions, its surface etched with arcane runes that glow faintly in the dark. This enigmatic trinket allows you to briefly step into the spaces between moments, confusing foes and revealing hidden pathways within a small radius, but be wary—get lost too long, and the echoes might claim your mind entirely. The sphere's power is both seductive and perilous, making it an invaluable yet dangerous tool for those who dare to venture beyond the known.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 18,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Confuses enemies temporarily",
      "Reveals hidden paths"
    ],
    "vendor": "Liminal Trader",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Confuse Enemys",
        "rules": "When activated as a bonus action, the Liminal Echo creates an illusory disturbance that confuses nearby enemies for up to 3 rounds. The effect has a range of 15 feet and affects all creatures within the area. There is a 25% chance per round that any creature exposed to this confusion will be forced to make a Wisdom saving throw (DC 14) or be incapacitated by the echoes, unable to act for their next turn."
      },
      {
        "title": "Reveal Hidden Paths",
        "rules": "The Liminal Echo grants you insight into hidden pathways and traps within a 30-foot radius. This effect lasts for 1 minute upon activation as an action. You can use this ability once per long rest, but it cannot be used again until after completing another short or long rest."
      }
    ],
    "levelRequirementReason": "Only those with sufficient experience and control over their surroundings should wield such a powerful and unpredictable item.",
    "vendorReason": "The Liminal Trader is known for dealing in rare and otherworldly items, including the enigmatic Liminal Echo.",
    "shippingDetail": "Due to its sensitive nature, the Liminal Echo must be shipped by the Dimensional Rift Courier within a specially sealed container.",
    "usage": {
      "activation": "Bonus action and action (for revealing hidden paths)",
      "duration": "Up to 3 rounds for confusing enemies; 1 minute for revealing hidden paths",
      "endsWhen": "The effect ends when its duration expires or the item is destroyed",
      "charges": "Once per long rest"
    },
    "priceReason": "The balanced price reflects the item's mythic rarity and unpredictable nature, making it a valuable yet risky tool for adventurers.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-24T23:54:29.008393+00:00",
    "aiReviewedAt": "2026-07-24T23:54:29.008393+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_wario_void_boots": {
    "id": "almost_edge_item_wario_void_boots",
    "name": "Wario's Void Boots",
    "description": "Wario's Void Boots, forged from the very essence of void and imbued with the mischievous genius of their creator, allow you to phase through thin barriers in a heartbeat. Crafted with precision, these boots not only grant you the ability to traverse non-magical walls but also increase your movement speed by 10% for three turns, making you a swift and elusive foe on the battlefield. Should you find yourself in a precarious position, they offer resistance against falling damage, ensuring that even the most perilous drop is cushioned with safety.",
    "category": "equipment",
    "price": 1000,
    "icon": "👟",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Phasing Through Barriers",
      "Increased Speed"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Swift Courier Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Phasing Through Barriers",
        "rules": "Activate as a reaction to pass through non-magical walls once per combat. The effect ends immediately upon entering the other side of the wall or if you take damage."
      },
      {
        "title": "Increased Speed",
        "rules": "Increases your walking and running speed by 10% for three turns, starting when you begin a turn in which you are not incapacitated. This benefit is lost if you fall prone or if you use this effect more than once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency to effectively navigate the unique mechanics of these boots.",
    "vendorReason": "The Edge Wanderer sells a variety of items that cater to adventurers seeking unconventional advantages in combat and exploration.",
    "shippingDetail": "Delivered within three days with special handling for fragile artifacts like these boots.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous, ends when you enter another side of the wall or take damage",
      "endsWhen": "Entering a new area through a wall or taking damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, these boots offer unique and strategic advantages without overshadowing other combat options.",
    "priceOriginal": 2750,
    "priceReviewedAt": "2026-07-23T21:43:57.895870+00:00",
    "aiReviewedAt": "2026-07-23T21:43:57.895870+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_potion_of_wario_boost": {
    "id": "faerun_item_potion_of_wario_boost",
    "name": "Potion of Wario Boost!",
    "description": "Crafted from ancient swamp moss and Wario's very own greed, this potent potion imbues you with a surge of strength. For six turns, your muscles bulge and your appetite for treasure grows insatiable. You can barely contain the urge to siphon wealth, but as the effects wear off, you'll feel an unusual fatigue that lingers for days. The concoction's creator, Wario himself, warned of its unpredictable nature, especially during moments of extreme greed.",
    "category": "consumables",
    "price": 1000,
    "icon": "💪",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+4 Strength",
      "Increased chance to hit (15%)"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "winged imps",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "+4 Strength",
        "rules": "When consumed, you gain +4 to your Strength score for six turns. You must make a Constitution saving throw at the start of each of your turns while under the effect of this potion; if you fail, you are incapacitated until the effects wear off."
      },
      {
        "title": "Increased chance to hit (15%)",
        "rules": "While under the effect of this potion, you gain a +15 bonus on attack rolls. This effect ends when you take damage or your concentration is broken."
      }
    ],
    "levelRequirementReason": "The potion's powerful effects are too taxing for characters below level 8 to safely handle.",
    "vendorReason": "Baldur himself, ever the generous patron of adventurers, offers this rare potion in his vast storehouse of curiosities and wonders.",
    "shippingDetail": "The potion arrives with a small, but energetic escort of winged imps that ensure its safe delivery to your doorstep.",
    "usage": {
      "activation": "Consume the potion as an action.",
      "duration": "Six turns.",
      "endsWhen": "You take damage or lose concentration (as if concentrating on a spell).",
      "charges": "Unlimited, but you must make a Constitution saving throw each turn."
    },
    "priceReason": "The potion's rarity and the risk it poses to users at lower levels justify its balanced price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:43:52.959589+00:00",
    "aiReviewedAt": "2026-07-23T21:43:52.959589+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_frosting_flask": {
    "id": "leclaire_isle_frosting_flask",
    "name": "Frosting Flask of Sweet Justice",
    "description": "The Frosting Flask of Sweet Justice is a shimmering glass flask filled with an iridescent frosting that hardens instantly upon contact. This confectionary projectile not only immobilizes foes but also coats them in a layer of frost, dealing additional damage over time. Should you find yourself splattered by the frosting, you too will be coated in a layer of hardened sugar, temporarily enhancing your own agility and resistance to cold.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍦",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "immobilize",
      "frosting_coating"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Drone Delivery (Fragile!)",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Immobilize",
        "rules": "When thrown as an action within 30 feet, the Frosting Flask immobilizes a target creature for 1 minute. The target must succeed on a DC 14 Dexterity saving throw or be incapacitated by the sticky frosting. If it fails, the target is restrained and cannot move freely until the effect ends."
      },
      {
        "title": "Frosting Coating",
        "rules": "The target also takes 2d6 cold damage each round they remain in contact with the frosting for up to 1 minute. This effect ends if the target moves more than 5 feet away from the frosting or is no longer hit by the Frosting Flask."
      }
    ],
    "levelRequirementReason": "This item requires a character of at least level 3 to handle its complex mechanics and avoid accidentally triggering it.",
    "vendorReason": "Pastry Palace, known for their mastery of confections, also sells this unique item that combines their culinary expertise with combat prowess.",
    "shippingDetail": "Due to its delicate nature, the Frosting Flask is shipped in a specially insulated package by Drone Delivery. Handle with care!",
    "usage": {
      "activation": "Thrown as an action",
      "duration": "1 minute or until the target moves more than 5 feet away from it",
      "endsWhen": "The effect ends if the target succeeds on a saving throw, moves more than 5 feet, or is no longer hit by the Frosting Flask.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This unique item combines culinary expertise with combat utility, making it an uncommon but valuable addition to any character's arsenal.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:44:15.381922+00:00",
    "aiReviewedAt": "2026-07-23T21:44:15.381922+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_legendary_sugar_shard": {
    "id": "leclaire_isle_legendary_sugar_shard",
    "name": "Shard of the Eternal Tart",
    "description": "The Shard of the Eternal Tart is a crystalline fragment forged from the legendary sugar tarts that once graced the tables of the Isle of LeClaire. When held, it pulses with an ethereal sweetness that grants you the ability to briefly transform into a miniature Kirby-like form, allowing for rapid movement and surprising attacks. The sugar's energy causes your body to hum with sugary delight, boosting your speed and reflexes. Just beware—its sweet promise can easily turn into chaos if consumed in full!",
    "category": "premium",
    "price": 1000,
    "icon": "✨",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "sugar_rush",
      "rapid_movement"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Magical Courier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sugary Rush",
        "rules": "Upon activation, you gain a +2 bonus to Dexterity saving throws and initiative checks. This effect lasts for 1 minute."
      },
      {
        "title": "Rapid Movement",
        "rules": "For the duration of your transformation into a miniature Kirby-like form (up to 30 seconds), your movement speed increases by 15 feet. You are also considered difficult terrain while in this form."
      }
    ],
    "levelRequirementReason": "This item is crafted for adventurers who have already proven their worth, ensuring it does not overpower lower-level characters.",
    "vendorReason": "Sweet Supplies specializes in unique and enchanted items that satisfy the cravings of even the most discerning adventurers.",
    "shippingDetail": "Delivered instantly by the fleet-footed magical pigeon, this item is always available for immediate use upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until you take three major actions",
      "endsWhen": "You transform into a miniature form and take major actions like casting spells or using abilities that require concentration.",
      "charges": "Unlimited, but only one transformation per short rest"
    },
    "priceReason": "The price reflects the item's rarity, magical properties, and its limited utility within a single combat.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T21:44:31.941069+00:00",
    "aiReviewedAt": "2026-07-23T21:44:31.941069+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_crumb_of_despair": {
    "id": "almost_edge_crumb_of_despair",
    "name": "Crumb of Despair",
    "description": "The Crumb of Despair, a sugary fragment seemingly ripped from the very edge of existence, holds an eerie power within its crystalline form. When consumed by an enemy, it induces a paralyzing dread that lingers in their mind, reducing their speed and leaving them immobilized for several moments. The mere taste of this crumb can send even the bravest warriors into a fit of contemplation over the vast emptiness beyond reality's veil.",
    "category": "consumables",
    "price": 1000,
    "icon": "💀",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Paralyze",
      "Reduce Speed"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Dimensional Rift Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Paralyze",
        "rules": "The target is paralyzed for 1 round. They cannot take actions or reactions, and their speed is reduced to 0. This effect ends if the target takes any action other than moving up to half their normal speed."
      },
      {
        "title": "Reduce Speed",
        "rules": "For 3 turns, the target's movement speed is reduced by 15 feet. This reduction persists until it is dispelled or the duration expires. No saving throw is needed to resist this effect."
      }
    ],
    "levelRequirementReason": "This crumb is accessible to all adventurers due to its common rarity and the ease of procuring it from vendors like Edge Wanderer.",
    "vendorReason": "Edge Wanderer, a seasoned merchant who travels between realms, often acquires unique items such as the Crumb of Despair.",
    "shippingDetail": "The Crumb is shipped through the Dimensional Rift Courier Service, ensuring it arrives intact and potent.",
    "usage": {
      "activation": "Eaten by an enemy creature during combat as a free action.",
      "duration": "Instantaneous effect with a duration of 1 round for Paralyze and 3 turns for Speed Reduction.",
      "endsWhen": "The effect ends when the target takes any action other than moving up to half their normal speed or at the end of its duration, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Crumb's rarity and unique effects justify a price of 1000 XP, reflecting both its unusual origin and potent abilities.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-23T21:44:32.263288+00:00",
    "aiReviewedAt": "2026-07-23T21:44:32.263288+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_void_resonator": {
    "id": "almost_edge_void_resonator",
    "name": "Void Resonator",
    "description": "The Void Resonator is a pulsating device forged from the very essence of forgotten voids, its surface etched with ancient runes that shimmer in a perpetual state of decay. When activated, it emits a discordant frequency capable of disrupting the minds of nearby creatures, causing confusion among spellcasters and chaos among foes. Its core glows with an eerie light, casting shadows that twist into abstract shapes. This rare artifact is known to be particularly effective against magic users.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Disrupting Frequency",
      "Silence Chance"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Black Hole Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Disrupting Frequency",
        "rules": "When activated, the Resonator emits a frequency that has a 30% chance to silence a target creature for 1 minute. The target must succeed on a DC 15 Constitution saving throw or be silenced. This effect ends if the target is subjected to another silence effect."
      },
      {
        "title": "Silence Chance",
        "rules": "The Resonator also has a 20% chance (DC 14) to reduce the target's Intelligence by 2 for 1 minute on a failed saving throw. This effect ends if the Resonator is destroyed or if the target regains consciousness."
      }
    ],
    "levelRequirementReason": "The Void Resonator requires at least 6th level to wield effectively, given its complex activation and the power of the frequency it emits.",
    "vendorReason": "The Void Merchant is known for dealing in rare and powerful artifacts that can disrupt magical constructs and beings, making the Void Resonator a perfect fit for their inventory.",
    "shippingDetail": "Due to its volatile nature, the Void Resonator requires special handling by the Black Hole Courier. It is delivered within 3 days with strict temperature controls.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; ends if the target regains consciousness or the Resonator is destroyed",
      "endsWhen": "The target regains consciousness, or the Resonator is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The Void Resonator's rarity and magical properties justify its fair value of 1000 XP.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-24T23:54:27.609528+00:00",
    "aiReviewedAt": "2026-07-24T23:54:27.609528+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_forbidden_echo_shard": {
    "id": "almost_edge_forbidden_echo_shard",
    "name": "Forbidden Echo Shard",
    "description": "The Forbidden Echo Shard radiates an eerie, pulsating glow as it hums with malevolent energy. When held, it whispers secrets of forgotten rituals and realms beyond comprehension into your mind. Though its power is intoxicating, prolonged exposure can drive even the strongest willed to madness or worse – a fate you might not survive. This shard is crafted from the remnants of ancient rituals performed in shadowed caverns, where the veil between worlds thins.",
    "category": "forbidden",
    "price": 1000,
    "icon": "😈",
    "stock": 3,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Whispers of Madness",
      "Temporal Echo"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Phantom Delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Whispers of Madness",
        "rules": "When a creature holds this shard for more than one round, there is a 20% chance per round that it becomes confused. This effect lasts until the start of its next turn and cannot be resisted with a saving throw."
      },
      {
        "title": "Temporal Echo",
        "rules": "For every three rounds held, the shard grants the wielder a +1 bonus to Dexterity (Stealth) checks. After six rounds, this bonus increases to +2 but the wielder must succeed on a DC 15 Wisdom saving throw or become confused until the end of their next turn."
      }
    ],
    "levelRequirementReason": "This shard requires significant mental fortitude and experience to handle its power without succumbing to madness.",
    "vendorReason": "The Liminal Trader deals in forbidden knowledge and artifacts, including this shard from ancient rituals.",
    "shippingDetail": "Ships via Phantom Delivery; delivery can take up to a week due to the item's delicate nature.",
    "usage": {
      "activation": "Passive effect while held.",
      "duration": "Instantaneous for each round held, lasting until the start of your next turn.",
      "endsWhen": "The shard is dropped or given to another creature.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its epic rarity and the risk it poses to those who wield it.",
    "priceOriginal": 42000,
    "priceReviewedAt": "2026-07-23T21:45:03.385842+00:00",
    "aiReviewedAt": "2026-07-23T21:45:03.385842+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chrono_shards": {
    "id": "kivotos_item_chrono_shards",
    "name": "Temporal Echo Fragments",
    "description": "Temporal Echo Fragments shimmer with a soft, ethereal glow that pulses in time with the passage of moments. Crafted from the remnants of an ill-fated experiment, these fragments allow you to briefly manipulate the flow of time by accelerating your movements or rewinding minor mistakes. Rumored to have been created by a student whose ambitions outpaced their understanding of chronal physics, these shards are both a relic of failed science and a tool for those who dare to bend the fabric of reality.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "accelerate_moment",
      "rewind_mistake"
    ],
    "vendor": "club_supply",
    "shippedBy": "drone_delivery",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Accelerate Moment",
        "rules": "As an action, you can increase your movement speed by +10 feet for up to one minute. You gain this benefit until the start of your next turn after using it, and can only use this effect once per short or long rest."
      },
      {
        "title": "Rewind Mistake",
        "rules": "As an action, you can rewind time to correct a minor mistake, such as dropping an item. You regain 1d6 + your Intelligence modifier hit points. This effect has no save DC and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires at least third level to handle the subtle manipulation of time without causing unintended consequences.",
    "vendorReason": "Club Supply often stocks unique and experimental items that push the boundaries of conventional magic, making Temporal Echo Fragments a fitting addition to their inventory.",
    "shippingDetail": "The fragments are shipped in a specially designed, chronically-stabilized container to prevent any accidental time distortions during transit.",
    "usage": {
      "activation": "Action or Reaction (choose at the start of your turn)",
      "duration": "Instantaneous effect for Accelerate Moment; Rewind Mistake is a one-time use per short/long rest",
      "endsWhen": "Exhausted after one use, or when you take damage if used as a reaction",
      "charges": "Unlimited (rest-based)"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's limited utility and the potential risk of misuse.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:45:08.182458+00:00",
    "aiReviewedAt": "2026-07-23T21:45:08.182458+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_student_sympathy": {
    "id": "kivotos_item_student_sympathy",
    "name": "Sympathetic Scroll of Approval",
    "description": "The Sympathetic Scroll of Approval, endorsed by the Student Council, radiates a subtle yet palpable aura of respect and acceptance. When unfurled in the right company, it can smooth over frayed nerves or procure preferential treatment from teachers. However, its magic is not foolproof; some educators remain steadfastly oblivious to the scroll's charm. Be wary: while it may enhance your reputation with the Student Council, it won't work miracles for every situation.",
    "category": "faction",
    "price": 1000,
    "icon": "🤝",
    "stock": 73,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Increase Reputation",
      "Gain Discount"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increase Reputation",
        "rules": "When activated as a bonus action and held aloft, this scroll grants you advantage on Persuasion checks against members of the Student Council. The effect lasts for one hour or until used in combat."
      },
      {
        "title": "Gain Discount",
        "rules": "For one week after activation, you receive a 10% discount at any shop owned by the Student Council. This benefit is cumulative with other discounts but does not stack with those from other vendors."
      }
    ],
    "levelRequirementReason": "The scroll's magic is subtle and requires no extraordinary power, suitable for a first-year student.",
    "vendorReason": "The Student Council often needs to reward loyal members with such perks and prefers to dispense them through its trusted vendor.",
    "shippingDetail": "Standard mail delivery ensures the scroll arrives intact, though it may take a few days to reach you.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "One Hour or Until Used in Combat",
      "endsWhen": "Used in combat, or after one hour",
      "charges": "Unlimited"
    },
    "priceReason": "The scroll's magic is potent but not overly powerful; its balanced price reflects the ongoing support and reputation it provides.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:45:31.821316+00:00",
    "aiReviewedAt": "2026-07-23T21:45:31.821316+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_chronometric_lens": {
    "id": "almost_edge_chronometric_lens",
    "name": "Chronometric Lens",
    "description": "The Chronometric Lens is a polished obsidian lens that appears to shimmer with time's ethereal glow. Crafted from ancient obsidian found in the heart of the Timeless Wastes, this relic allows you to briefly rewind your actions. Use it wisely, for the power comes with a price: each use leaves you feeling disoriented and slightly older. Perfect for avoiding a clumsy tumble off the edge or correcting a regrettable choice.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Time Rewind",
      "Fall Damage Reduction"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time Rewind",
        "rules": "As an action, you can rewind your last action by 3 seconds. This effect is instantaneous and has no save DC or range. You may use this feature once per short rest."
      },
      {
        "title": "Fall Damage Reduction",
        "rules": "+5 to your AC for the duration of a fall, reducing damage by 50%. Ends when you land safely or when you take another action on your turn. This effect is limited to one use per long rest."
      }
    ],
    "levelRequirementReason": "The lens requires no specific level; it's accessible to all, but its power comes with a steep cost.",
    "vendorReason": "The Void Merchant specializes in rare and unusual items, including this time-defying trinket.",
    "shippingDetail": "Ships via the Quantum Courier's fastest service. Delivery is guaranteed within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "You take another action on your turn or land safely after a fall.",
      "charges": "Once per short rest, once per long rest"
    },
    "priceReason": "The lens's rare material and unique time-altering properties justify its moderate price.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:45:20.889537+00:00",
    "aiReviewedAt": "2026-07-23T21:45:20.889537+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_liminal_bargain_scroll": {
    "id": "almost_edge_liminal_bargain_scroll",
    "name": "Liminal Bargain Scroll",
    "description": "The Liminal Bargain Scroll is a tattered, ancient scroll that glows faintly with an eerie light. Unrolling it reveals an endless labyrinth of corridors, each one identical and seemingly leading nowhere. The promise of this scroll is both tantalizing and perilous, as it offers a permanent +2 Charisma boost when dealing with entities from the void, but also comes with a 5% chance to induce temporary madness upon use. It's said that only the most desperate or foolhardy souls dare to dabble in its dark magic.",
    "category": "services",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Void Charisma Boost",
      "Madness Risk"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Echo Delivery System",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Void Charisma Boost",
        "rules": "Grants a permanent +2 bonus to Charisma when interacting with entities from the void. This effect does not require activation."
      },
      {
        "title": "Madness Risk",
        "rules": "There is a 5% chance of inducing temporary madness upon using this scroll, requiring a DC 14 Constitution saving throw to resist. If failed, the user becomes temporarily insane for 2d4 hours."
      }
    ],
    "levelRequirementReason": "Requires at least 10th level due to its dark magic and potential mental risks.",
    "vendorReason": "The Liminal Trader is known for dealing in ancient, otherworldly artifacts like the Liminal Bargain Scroll.",
    "shippingDetail": "Due to its fragile nature and potential danger, it must be shipped via Echo Delivery System's secure, void-sealed containers.",
    "usage": {
      "activation": "Instantaneous; no activation required for the Charisma boost or madness risk.",
      "duration": "Permanent (Charisma boost); temporary madness lasts up to 2d4 hours upon failure of save.",
      "endsWhen": "Temporary madness ends after its duration. The scroll is destroyed if used successfully and a madness effect occurs.",
      "charges": "Unlimited, but the scroll is destroyed on successful use with a madness result."
    },
    "priceReason": "Balanced price considering its dark magic, permanent effects, and risk of temporary insanity.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:45:44.162703+00:00",
    "aiReviewedAt": "2026-07-23T21:45:44.162703+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_howling_fang": {
    "id": "animatopia_howling_fang",
    "name": "Howling Fang Amulet",
    "description": "The Howling Fang Amulet, a grim relic crafted from the tooth of a juvenile Howler Beast, hums with raw, untamed power. The amulet's surface is scored with ancient runes that seem to shift and glow under the light, hinting at its origins deep within the heart of the wild. When worn, it allows you to unleash a fearsome roar capable of stunning foes and sending them into a panic. This potent charm can be used once every long rest.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐺",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Roar of Terror",
      "Stunning Roar"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_parakeet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Roar of Terror",
        "rules": "As an action, you can unleash a terrifying roar. Each creature within 30 feet must make a DC 15 Wisdom saving throw or be stunned for 1 minute. A stunned creature is incapacitated and unable to move or take actions."
      },
      {
        "title": "Stunning Roar",
        "rules": "The roar has a range of 60 feet. Once used, the amulet can only be used again after completing a long rest."
      }
    ],
    "levelRequirementReason": "This amulet is designed for adventurers just beginning their journey to ensure they have access to its power.",
    "vendorReason": "The Tribal Trader has extensive contacts with the wild and can obtain such ancient relics from deep within the forests.",
    "shippingDetail": "Delivered swiftly by a fleet of winged parakeets, the amulet arrives in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (effect lasts until end of next turn)",
      "endsWhen": "The target fails its saving throw or completes a long rest",
      "charges": "1 / Long Rest"
    },
    "priceReason": "This amulet strikes a balance between rarity and utility, providing a potent tool for new adventurers.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:45:54.297067+00:00",
    "aiReviewedAt": "2026-07-23T21:45:54.297067+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_berry_of_sync": {
    "id": "animatopia_berry_of_sync",
    "name": "Berry of Sync",
    "description": "The iridescent berries of Synchrony Vines are said to be the essence of harmony with nature. Harvested from the rarest vines in the heart of Animatopia, these berries momentarily align you with the animal spirits. Consume one and your movements become fluid as a cheetah's, or perhaps clumsy beyond belief! The berry grants you an enhanced agility boost for mere moments, allowing you to dart past foes or trip spectacularly in a blur of motion.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍇",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Agility",
      "Mimicry"
    ],
    "vendor": "forest_market",
    "shippedBy": "swift_owl_couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Agility",
        "rules": "On activation, your movement speed increases by 30 feet for 6 seconds. This effect ends if you take damage or when the duration expires."
      },
      {
        "title": "Mimicry",
        "rules": "For 2 rounds after consumption, you gain a +1 bonus to Deception checks and can mimic animal sounds with perfect accuracy as an action. This ability is exhausted after use."
      }
    ],
    "levelRequirementReason": "This berry's effects are not overly powerful, making it accessible early in the adventuring career.",
    "vendorReason": "The forest market thrives on the bounty of nature and sells items that enhance one's connection to the wild.",
    "shippingDetail": "Ships via swift owl couriers, ensuring berries reach you in perfect condition within a day.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "6 seconds for Enhanced Agility; 2 rounds for Mimicry",
      "endsWhen": "On damage or expiration of duration",
      "charges": "Unlimited, with no rest required"
    },
    "priceReason": "The berries are rare and require a significant amount of resources to cultivate in the wild.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:45:51.829596+00:00",
    "aiReviewedAt": "2026-07-23T21:45:51.829596+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_whispers_of_the_chief": {
    "id": "animatopia_whispers_of_the_chief",
    "name": "Whispers of the Chief's Quill",
    "description": "The Whispers of the Chief's Quill is a finely crafted quill made from the feathers of a sacred bird of Animatopia. Its handle is wrapped with leather straps dyed in hues of deep forest and moonlight, imbuing it with the wisdom of ancient tribal chiefs. Holding this quill allows you to cast minor divination spells; however, the spirits are notoriously fickle, often delivering cryptic advice that can be both enlightening and infuriating.",
    "category": "services",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Divine Insight",
      "Cryptic Advice"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant beetle",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Divine Insight",
        "rules": "As an action, you may use this quill to cast the Detect Magic spell once per long rest. The spell has no save DC and affects a 30-foot radius centered on you."
      },
      {
        "title": "Cryptic Advice",
        "rules": "There is a 10% chance each time you use this quill that you gain cryptic advice from the spirits. This advice can be either beneficial or harmful, as determined by the DM, but it does not grant any numerical bonuses."
      }
    ],
    "levelRequirementReason": "Requires a character of at least level 3 to handle the quill's spiritual power.",
    "vendorReason": "The Beast Bazaar often hosts items from various mystical origins, including those imbued with ancient tribal knowledge.",
    "shippingDetail": "Delivered by a giant beetle courier that takes one week to reach the destination.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The spell ends when its duration expires or you finish your next turn without casting another spell.",
      "charges": "Recharge after a long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's rare and mystical nature.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T21:45:59.001743+00:00",
    "aiReviewedAt": "2026-07-23T21:45:59.001743+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_crumb_cake": {
    "id": "grand_country_crumb_cake",
    "name": "Gravity Gummy Crumbs",
    "description": "Gravity Gummy Crumbs are tiny, sticky confections that seem like any other candy until you pop one into your mouth. For a brief moment, gravity reverses its grip on you, allowing you to float upwards with ease. Perfect for reaching those high shelves or escaping from sticky situations—just don't count on it in zero-gravity environments! With each chew, the effect lasts 3 turns and is triggered by consuming one crumb, making these a handy snack for adventurers prone to precarious situations.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Briefly Reverse Gravity",
      "+10 Foot Movement Speed"
    ],
    "vendor": "side_seller",
    "shippedBy": "Winged Parcel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reverse Gravity",
        "rules": "When consumed, the crumbs cause your body to briefly defy gravity. You can float upwards for a duration of 3 turns, but you cannot move normally during this time. This effect ends immediately if you take any action other than eating or resting."
      },
      {
        "title": "Enhanced Movement",
        "rules": "For the duration of your floating, you gain +10 feet to your walking speed, allowing you to cover ground more quickly in a vertical direction. This increased speed is only effective while you are floating and does not apply when gravity resumes."
      }
    ],
    "levelRequirementReason": "These candies are designed for adventurers of all levels, as they can be useful in various situations.",
    "vendorReason": "Side Seller is known for offering unique and quirky items that adventurers might find handy during their travels.",
    "shippingDetail": "Shipped via Winged Parcel, these candies arrive fresh in a sealed envelope.",
    "usage": {
      "activation": "Eating one crumb activates the effect.",
      "duration": "3 turns while floating upwards.",
      "endsWhen": "You take any action other than eating or resting.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced XP price reflects the item's utility and unique effects without making it overpowered.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T21:46:14.130155+00:00",
    "aiReviewedAt": "2026-07-23T21:46:14.130155+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_echo_shard": {
    "id": "grand_country_echo_shard",
    "name": "Resonant Reflection Fragment",
    "description": "The Resonant Reflection Fragment hums with the lingering echoes of the Grand Country's strange layers, its surface etched with arcane runes that catch and bend light in ways both beautiful and disorienting. When held, it can momentarily amplify sound to deafening levels or create a distorted reflection, blurring reality just enough to confuse foes or uncover hidden passageways. This shard is not merely a tool of deception but a conduit for the very fabric of the Grand Country's mysterious layers.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Echo Amplifier",
      "Distorted Reflection"
    ],
    "vendor": "layer_market",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echo Amplifier",
        "rules": "As an action, the user can amplify sound in a 15-foot radius. All creatures within this area must succeed on a DC 14 Constitution saving throw or be deafened for 1 minute. This effect has no save after the first use."
      },
      {
        "title": "Distorted Reflection",
        "rules": "As an action, the user can create a Distorted Reflection that lasts for up to 1 hour. Any creature that starts its turn within 30 feet of the shard must succeed on a DC 14 Wisdom saving throw or be blinded until the start of their next turn."
      }
    ],
    "levelRequirementReason": "The arcane energy required to manipulate the Grand Country's layers demands at least 5th level for effective control.",
    "vendorReason": "The Layer Market is renowned for its vast array of items from other planes, including this fragment that bridges different dimensions.",
    "shippingDetail": "The Dimensional Courier ensures swift and safe delivery through the Grand Country's layers, ensuring timely arrival even in unpredictable conditions.",
    "usage": {
      "activation": "Action or Reaction (Echo Amplifier), Action (Distorted Reflection)",
      "duration": "Instantaneous (Echo Amplifier), Up to 1 hour (Distorted Reflection)",
      "endsWhen": "The effect ends when the user no longer holds the fragment or as a result of an attack.",
      "charges": "Unlimited, but each use drains one charge from the shard's internal mana. The shard regains all charges upon being submerged in running water for 1 hour."
    },
    "priceReason": "The Resonant Reflection Fragment is priced at 1000 XP due to its unique and powerful abilities, which are both versatile and potentially game-changing.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:47:37.863315+00:00",
    "aiReviewedAt": "2026-07-23T21:47:37.863315+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_goblin_gut_potion": {
    "id": "middle_earth_goblin_gut_potion",
    "name": "Goblin Gut Potion",
    "description": "The middle_earth_goblin_gut_potion is a murky, foul-smelling concoction that looks as though it was brewed in some dark, forgotten forge. This potion grants you temporary invulnerability to poison effects for up to one minute, but beware—its creator’s questionable ethics might leave you with a rather unpleasant side effect: a burp that could cause you to be seen by all nearby creatures as an outcast for the next hour. The goblin gut potion is infamous among the Shire folk, who are wary of its maker and distributor.",
    "category": "consumables",
    "price": 1000,
    "icon": "🤢",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant_invulnerability_poison",
      "goblin_burp_outcast"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Invulnerability to Poison",
        "rules": "You gain immunity to all poison effects for a duration of up to one minute. This effect ends if you take any damage or if you willingly consume another potion during the duration."
      },
      {
        "title": "Goblin Burp Outcast",
        "rules": "For every hour after consuming this potion, you are considered an outcast by nearby creatures within 30 feet who know of its origin. This effect can be removed with a successful DC 15 Charisma (Persuasion) check."
      }
    ],
    "levelRequirementReason": "This potion is accessible to low-level characters, as it requires no advanced training or experience.",
    "vendorReason": "The Shire Shop sells a variety of unconventional items, including this controversial potion.",
    "shippingDetail": "Ships via Pony Express with standard delivery in 3 days.",
    "usage": {
      "activation": "Consume the potion as an action.",
      "duration": "Up to one minute of invulnerability to poison effects.",
      "endsWhen": "You take damage or consume another potion during this duration.",
      "charges": "Unlimited; you can drink it multiple times without resting."
    },
    "priceReason": "The goblin gut potion is priced at 1000 XP, reflecting its rarity and the risk involved in consuming such a controversial item.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T21:46:43.866895+00:00",
    "aiReviewedAt": "2026-07-23T21:46:43.866895+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_mithril_shard": {
    "id": "middle_earth_mithril_shard",
    "name": "Mithril Shard of Durin's Bane",
    "description": "The Mithril Shard of Durin's Bane is a crystalline fragment, once part of the legendary weapon forged to slay the dragon Smaug. Crafted from the heart of the beast, it hums with the resilience of Durin’s line. This shard not only provides enhanced armor but also emits an eerie glow that wards off dark spirits and malevolent creatures. Warriors and treasure hunters alike covet this relic for its protective powers and mystical aura.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Armor",
      "Warding Glow"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant_carrier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Enhanced Armor",
        "rules": "When worn, the Mithril Shard increases the wearer's AC by +2. This effect lasts for 1 hour or until the wearer removes it."
      },
      {
        "title": "Warding Glow",
        "rules": "The shard emits a faint glow that provides resistance to fear effects. While active, any creature within 5 feet of the wearer gains advantage on saving throws against being frightened and has disadvantage on attack rolls against the wearer. This effect lasts for 1 hour or until the wearer is no longer in contact with the shard."
      }
    ],
    "levelRequirementReason": "The shard's power draws from ancient dwarven magic, making it suitable only for those of high level and proven valor.",
    "vendorReason": "As creators of the legendary Mithril Shard, Dwarven Forge ensures that only the most trusted hands receive such a powerful relic.",
    "shippingDetail": "The shard is delivered via giant courier, ensuring safe passage through treacherous terrains and hostile environments.",
    "usage": {
      "activation": "Passive effect when worn as armor.",
      "duration": "1 hour or until removed by the wearer.",
      "endsWhen": "When the wearer removes it from their body.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The shard's rarity and the intricate dwarven craftsmanship justify its moderate price, offering a significant boon for those who seek to protect themselves in dangerous realms.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:46:26.934116+00:00",
    "aiReviewedAt": "2026-07-23T21:46:26.934116+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_fellowship_badge": {
    "id": "middle_earth_fellowship_badge",
    "name": "Fellowship of the Ring Badge",
    "description": "The Fellowship of the Ring Badge is a meticulously crafted emblem, etched with the ancient symbols of Gondor and Rohan. It feels warm to the touch, as if it retains the essence of Aragorn's authority. This badge grants respect among those loyal to the realm, and while not a weapon, its mere presence can sway even the most skeptical allies to your cause. Legends say that it carries a fragment of Aragorn's power, though only the wearer knows for sure.",
    "category": "faction",
    "price": 1000,
    "icon": "👑",
    "stock": 34,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "grant_respect_among_loyalists",
      "inspire_allies_passively"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Grant Respect Among Loyalists",
        "rules": "When worn in Gondor or Rohan, the wearer gains a +1 bonus to Charisma (Persuasion) checks. This effect lasts until the end of their next long rest."
      },
      {
        "title": "Inspire Allies Passively",
        "rules": "While wearing this badge, the wearer can inspire allies within 30 feet who are not hostile toward them. Once per short or long rest, they can use an action to grant one ally in range a +1 bonus to attack rolls and saving throws for the next hour."
      }
    ],
    "levelRequirementReason": "The badge requires at least fifth level to handle its subtle magic without causing unintended consequences.",
    "vendorReason": "Elrond, leader of the elven market, has a deep connection with both Gondor and Rohan, making him the best vendor for this item.",
    "shippingDetail": "Shipped by swift winged horses, ensuring timely delivery to even the most distant corners of Middle-earth.",
    "usage": {
      "activation": "Passive effect; requires no action to activate.",
      "duration": "Until end of next long rest for Grant Respect; one hour for Inspire Allies.",
      "endsWhen": "Ends upon a successful DC 15 Wisdom saving throw or when the wearer removes it.",
      "charges": "Unlimited, but ends on a save."
    },
    "priceReason": "The badge's price reflects its legendary status and the unique magic that enhances one’s reputation among allies.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:46:33.833083+00:00",
    "aiReviewedAt": "2026-07-23T21:46:33.833083+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chrono_scroll": {
    "id": "kivotos_item_chrono_scroll",
    "name": "Temporal Echo Scroll",
    "description": "The Temporal Echo Scroll unfurls like a shimmering river of time, its edges adorned with golden runes that flicker as if caught in moments from the past. Unrolling it sends ripples through the air, allowing you to rewind time by five seconds—just enough to dodge an incoming projectile or snatch the last slice of cake before it vanishes. The scroll is said to have been crafted by a forgotten alchemist who sought to capture fleeting moments of history. Wario would indeed use this to outfox his rivals and steal all the snacks in sight.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "rewind_time_5s",
      "grant_dodge_chance_10%"
    ],
    "vendor": "academy_armory",
    "shippedBy": "parcel_drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Rewind Time (5 Seconds)",
        "rules": "As a reaction, you can use this scroll to rewind time for five seconds. During that time, all attacks against you are negated and your speed is increased by +20 feet until the start of your next turn."
      },
      {
        "title": "Dodge Chance (10%)",
        "rules": "You gain a +10 bonus to Dexterity saving throws made before an attack or ability check. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Requires at least fifth level to use, as it demands focus and coordination.",
    "vendorReason": "The academy armory stocks this item due to its utility in classroom scenarios where students need to dodge quick reflexes or last-minute opportunities.",
    "shippingDetail": "Shipped by the swift parcel drone, delivered within an hour of purchase.",
    "usage": {
      "activation": "reaction (as a reaction)",
      "duration": "instantaneous effect lasting until the start of your next turn",
      "endsWhen": "the start of your next turn or when you use another reaction that ends this effect",
      "charges": "unlimited uses, recharged after a short rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its utility and the difficulty in crafting such a delicate temporal artifact.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:47:04.249059+00:00",
    "aiReviewedAt": "2026-07-23T21:47:04.249059+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_resonance": {
    "id": "kivotos_item_halo_resonance",
    "name": "Harmonic Halo Fragment",
    "description": "A pulsating fragment of a fallen halo, radiating with forgotten melodies. This tiny piece hums with untapped potential, once part of a grand celestial instrument. Touching it grants temporary access to the 'Echo' state, letting you phase through solid objects and move at an increased speed, but be wary—excessive use will attract unwanted attention from the Academy’s security bots! Wario just wants to see how many things he can bounce off with this fragment.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💫",
    "stock": 2,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "phase_through_walls",
      "increased_movement_speed"
    ],
    "vendor": "club_supply",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Phase Through Walls",
        "rules": "As a bonus action, the wearer can phase through solid objects for up to 1 minute. This ability ends when the user takes damage or if they use another action that requires concentration."
      },
      {
        "title": "Increased Movement Speed",
        "rules": "The wearer gains a +15% increase in their speed while using this item, which lasts until the 'Phase Through Walls' effect ends. This speed boost does not stack with other sources of movement speed."
      }
    ],
    "levelRequirementReason": "This fragment is easy to handle and requires no particular skill to use.",
    "vendorReason": "Club Supply deals in rare and unusual artifacts, including fragments like this one.",
    "shippingDetail": "Ships via Express Delivery with a tracking number for your convenience.",
    "usage": {
      "activation": "Bonus action to activate; ends when the user takes damage or uses another action requiring concentration.",
      "duration": "1 minute, up to once per short rest",
      "endsWhen": "The wearer takes damage or uses another action that requires concentration",
      "charges": "Unlimited"
    },
    "priceReason": "While the item is rare and useful in combat, its limited duration makes it reasonably priced.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T21:46:50.837124+00:00",
    "aiReviewedAt": "2026-07-23T21:46:50.837124+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_study_break_potion": {
    "id": "kivotos_item_study_break_potion",
    "name": "Hyper-Concentration Brew",
    "description": "Crafted in a student's haste during finals week, this potion is rumored to enhance mental sharpness. Sipping it grants you an immediate surge of focus, allowing you to recall intricate details from your studies and solve complex problems with ease. However, the brew has a peculiar side effect; it might cause you to babble about ancient paperclip lore. Wario’s reaction? He’d likely fall asleep at his desk.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧠",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "enhanced_focus",
      "recall_details"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Focus",
        "rules": "On your next action, you gain advantage on Intelligence checks and saving throws for the duration. This effect ends when you take another action."
      },
      {
        "title": "Recall Details",
        "rules": "For 1 minute after drinking this potion, you have advantage on History checks related to paperclip collecting. This effect is lost if you use your reaction to avoid a saving throw or attack roll."
      }
    ],
    "levelRequirementReason": "This potion's effects are designed for quick mental boosts suitable for novice scholars and students.",
    "vendorReason": "The student store caters to the academic needs of young adventurers, providing them with tools that enhance their studies and preparation for future challenges.",
    "shippingDetail": "Delivered via standard mail service within a week.",
    "usage": {
      "activation": "飲用",
      "duration": "瞬間生效，持續1分鐘。",
      "endsWhen": "使用後立即消失",
      "charges": "無限制"
    },
    "priceReason": "考虑到其效果的短暂性和提供的能力提升，将价格调整至1000XP以确保公平值。",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T21:46:59.939042+00:00",
    "aiReviewedAt": "2026-07-23T21:46:59.939042+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_rusty_cog": {
    "id": "midlands_item_rusty_cog",
    "name": "Cog of Discontent",
    "description": "The Cog of Discontent, salvaged from the gears of a long-forgotten Imperial war machine, hums with a dark energy that seems to resent its use. Its rusted teeth gnash at your hands as you grip it, and when wielded, it subtly sabotages your enemies' weapons, making their blades dull and unresponsive in their grasp. This ancient cog's frustration manifests as an unpredictable yet effective hindrance to foes, reducing their attack power and causing momentary confusion.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚙️",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Dull Blades",
      "Momentary Confusion"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "horseback courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dull Blades",
        "rules": "When the Cog of Discontent is activated, there's a 25% chance that an enemy's next attack will be reduced by 1d4 damage for 3 turns. The target must succeed on a DC 13 Dexterity saving throw or have their weapon become temporarily dulled."
      },
      {
        "title": "Momentary Confusion",
        "rules": "There is a 10% chance that an enemy will be rendered momentarily confused, causing them to fumble their next action and take a -2 penalty to attack rolls for the following turn. This effect lasts until the start of the target's next turn."
      }
    ],
    "levelRequirementReason": "The Cog requires no advanced skill or training to use, making it accessible to all adventurers.",
    "vendorReason": "The Midlands Merchant frequently deals in relics and artifacts recovered from ancient sites, including this cog's mysterious origin.",
    "shippingDetail": "Delivered by the trusted horseback couriers of the Midland region; expect delivery within a week.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect lasting for 3 turns on each target, but only one target can be affected per activation.",
      "endsWhen": "The effect ends when the target successfully saves against the confusion or the duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Cog of Discontent's rarity and unique effects justify its fair price in experience points.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T21:47:25.166555+00:00",
    "aiReviewedAt": "2026-07-23T21:47:25.166555+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_empire_banner": {
    "id": "midlands_item_empire_banner",
    "name": "Tattered Standard of the Iron Legion",
    "description": "The Tattered Standard of the Iron Legion is a weathered banner that once flew over the Iron Legion’s war tents. Its tattered fabric still bears the emblem of the now-defunct legion, and when unfurled, it stirs a deep sense of martial discipline within those who gaze upon it. It grants +5 morale to any allied unit within 10 feet, compelling them to march in perfect formation. The banner also has a knack for intimidating weaker foes; as you wave the standard, there's a chance to reduce an enemy’s morale by 2.",
    "category": "faction",
    "price": 1000,
    "icon": "🚩",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Martial Morale",
      "Intimidating Banner"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "imperial_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Martial Morale",
        "rules": "Activates as a bonus action. Grants +5 morale to all allies within 10 feet for the duration of the encounter. Ends when the standard is furled or if an ally moves out of range."
      },
      {
        "title": "Intimidating Banner",
        "rules": "Has a 30% chance to reduce weaker foes' morale by 2 whenever you wave it during combat. Targets must be at least one size category smaller than your party members. The effect ends if the banner is furled or if an ally moves out of range."
      }
    ],
    "levelRequirementReason": "The standard's appeal lies in its ability to inspire and intimidate regardless of a character’s level.",
    "vendorReason": "As the official emblem of the Iron Legion, it is fitting for empire_exchange to hold this relic.",
    "shippingDetail": "Ships via imperial courier with same-day delivery within Imperial territories.",
    "usage": {
      "activation": "Bonus action to unfurl or furled the banner.",
      "duration": "Until the end of your next turn after activation.",
      "endsWhen": "The standard is furled, or an ally moves out of range of the banner's effects.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced to reflect its historical significance and limited utility without being overpowered.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:47:16.300958+00:00",
    "aiReviewedAt": "2026-07-23T21:47:16.300958+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_sparkling_pearl": {
    "id": "pokemon_item_sparkling_pearl",
    "name": "Radiant Dewdrop Orb",
    "description": "The Radiant Dewdrop Orb pulses with a crystalline glow that dances like the light of a thousand stars. This masterwork from the Alolan region amplifies your trainer's speed and power, making you feel invincible in battle. However, its magic is delicate; if it gets wet or exposed to direct sunlight for more than an hour, it will shatter into sparkling fragments, leaving only a faint glow in the air.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 67,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase_speed_by_50%",
      "boost_attack_damage_by_30%"
    ],
    "vendor": "pokemart",
    "shippedBy": "Wingull Delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Swift Strike",
        "rules": "When you attack with a weapon during your turn, add half your speed modifier to your attack roll. This effect lasts for a total of 1 minute and ends if the orb is damaged or exposed to direct sunlight."
      },
      {
        "title": "Radiant Aura",
        "rules": "You gain a +30 bonus to your Strength (Attack) checks while holding the orb, but only when you are not wearing any armor. This effect lasts for 1 minute and ends if it is destroyed or exposed to direct sunlight."
      }
    ],
    "levelRequirementReason": "Trainers must have a solid grasp of their Pokémon's abilities before wielding the power of the Radiant Dewdrop Orb.",
    "vendorReason": "Pokemarts are known for stocking rare and useful items that help trainers in their daily adventures, including this magical orb.",
    "shippingDetail": "The orb is carefully packed to prevent damage during transit. Special handling may be required if shipped outside of Pokemart's local delivery area.",
    "usage": {
      "activation": "Use an action to activate the orb and gain its effects immediately.",
      "duration": "1 minute, or until destroyed or exposed to direct sunlight for more than an hour.",
      "endsWhen": "The orb shatters into sparkling fragments if damaged, exposed to direct sunlight for too long, or if the trainer drops it.",
      "charges": "Unlimited, but only one effect is active at a time."
    },
    "priceReason": "This rare item provides significant temporary boosts in combat effectiveness, making it a valuable tool for any ambitious trainer.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:48:07.043564+00:00",
    "aiReviewedAt": "2026-07-23T21:48:07.043564+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_elite_badge_of_valor": {
    "id": "pokemon_item_elite_badge_of_valor",
    "name": "Badge of the Ironclad Trainer",
    "description": "The Badge of the Ironclad Trainer is a gleaming metal emblem, forged from the very essence of legendary Pokémon battles. Crafted by trainers who have faced the fiercest challenges, this badge grants you an unyielding advantage in your training sessions, bolstering your defense and resistance to poison attacks. It's said that those who wear it can channel the spirit of past champions, turning even the most wild and untamed Pokémon into willing sparring partners.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏆",
    "stock": 23,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Defense Boost",
      "Poison Resistance"
    ],
    "vendor": "league_store",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Defense Boost",
        "rules": "While wearing this badge, you gain a +1 bonus to your Armor Class (AC). This effect is passive and lasts until the badge's charges are depleted or it is destroyed."
      },
      {
        "title": "Poison Resistance",
        "rules": "You have resistance to poison damage. This effect persists for 1 hour per day of continuous wear, and can only be activated once per day. You must make a Constitution saving throw (DC 14) at the start of each short or long rest; on a failed save, you lose this benefit."
      }
    ],
    "levelRequirementReason": "This badge is tailored for experienced trainers who have already faced numerous challenges.",
    "vendorReason": "The league store specializes in equipment and relics from legendary battles that empower trainers on their journey.",
    "shippingDetail": "Delivered swiftly by the league's fleet of drones, ensuring you receive your badge within a day.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the badge is destroyed or its charges are depleted.",
      "endsWhen": "Destroyed upon losing all charges or being worn for 24 hours without gaining any benefits.",
      "charges": "Unlimited, as long as it remains in continuous wear."
    },
    "priceReason": "The badge's rarity and the unique materials used to forge it justify its price.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:48:01.384224+00:00",
    "aiReviewedAt": "2026-07-23T21:48:01.384224+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_legendary_aurora_stone": {
    "id": "pokemon_item_legendary_aurora_stone",
    "name": "Aurora Stone of the Ancient Guardians",
    "description": "The Aurora Stone of the Ancient Guardians is a glowing crystal encased in a polished obsidian shell. It pulses with an ancient energy, said to resonate with the spirits of long-extinct Pokémon protectors. Holding it can trigger rapid evolution for your partner Pokémon, potentially unlocking new forms and abilities. However, the stone's power draws unwanted attention from mischievous Shadow Pokémon, and its presence might even attract Wario’s capricious antics.",
    "category": "premium",
    "price": 1000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Rapid Evolution Trigger",
      "Shadow Pokémon Attraction"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Elite Delivery Team (Magikarp)",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Rapid Evolution Trigger",
        "rules": "When a partner Pokémon uses this item, there is a 25% chance of triggering rapid evolution. The effect lasts for the duration of the evolution process and boosts the partner’s stats by 10%. There are no save DCs or charges; the effect is limited to once per day."
      },
      {
        "title": "Shadow Pokémon Attraction",
        "rules": "While holding this item, there is a constant aura that attracts Shadow Pokémon within a 30-foot radius. This effect lasts until the item is removed from your possession and has no save DC or charges. The presence of mischievous shadows is a reminder to be vigilant."
      }
    ],
    "levelRequirementReason": "This item requires a high level to safely handle its powerful effects on evolution and the potential danger it brings.",
    "vendorReason": "The Safari Shop is known for exotic items and rare artifacts, making it suitable for this legendary stone.",
    "shippingDetail": "Ships via Magikarp Express, ensuring safe delivery to your door.",
    "usage": {
      "activation": "Used as a standard action during the Pokémon’s evolution",
      "duration": "Instantaneous; lasts for the duration of the evolution process",
      "endsWhen": "The effect ends when the item is removed from the Pokémon’s possession or if the evolution fails",
      "charges": "Unlimited, but can only be used once per day"
    },
    "priceReason": "This price reflects a balanced cost for a legendary item that offers significant but limited benefits.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T21:47:44.303477+00:00",
    "aiReviewedAt": "2026-07-23T21:47:44.303477+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_evolution_seed": {
    "id": "pokemon_item_evolution_seed",
    "name": "Primal Bloom Pod",
    "description": "The Primal Bloom Pod is a pulsating seed that crackles with untamed potential. When planted in the soil, it releases an ancient essence, granting +3 levels to the creature holding it for one hour. There's a slim chance (10%) this surge will trigger a random evolution of the target creature’s form. This pod is a rare find, crafted by the enigmatic Pokemart from legendary seeds harvested deep within the ancient forests of Sinnoh.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌱",
    "stock": 45,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Accelerated Growth",
      "Random Evolution"
    ],
    "vendor": "pokemart",
    "shippedBy": "Express Couriers of the Pokémon League",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Accelerated Growth",
        "rules": "The creature gains +3 levels and can cast any spell they know or have prepared at its new, higher level. This effect lasts for one hour."
      },
      {
        "title": "Random Evolution",
        "rules": "There is a 10% chance that the target creature's form will undergo an unexpected evolution upon consuming this pod. The DM determines the result of this random evolution."
      }
    ],
    "levelRequirementReason": "The Primal Bloom Pod requires level 6 to use, as its power is too great for lower-level creatures.",
    "vendorReason": "The Pokemart specializes in rare and powerful items that can aid trainers on their journeys through Sinnoh.",
    "shippingDetail": "Ships overnight within Sinnoh, but may take longer for out-of-region deliveries due to magical courier routes.",
    "usage": {
      "activation": "Eaten by the target creature as a free action.",
      "duration": "One hour.",
      "endsWhen": "The duration ends after one hour or if the creature's form evolves randomly.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the pod’s rarity and the significant power boost it offers to a creature.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-23T21:47:53.906717+00:00",
    "aiReviewedAt": "2026-07-23T21:47:53.906717+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_shadow_orb": {
    "id": "pokemon_item_shadow_orb",
    "name": "Void Echo Fragment",
    "description": "The Void Echo Fragment is a fragment of solidified darkness, its surface etched with swirling void runes that pulse with an unsettling power. Crafted from the remnants of ancient voids, this forbidden relic allows the wielder to tap into the void's destructive essence for a brief instant, unleashing a surge of dark energy that can incinerate foes. However, prolonged use risks the user's sanity, as the fragment whispers secrets of madness and despair.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Unleash Dark Surge",
      "Risk of Madness"
    ],
    "vendor": "safari_shop",
    "shippedBy": "delivery_only",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Unleash Dark Surge",
        "rules": "When activated, the Void Echo Fragment unleashes a surge of dark energy that deals 50 necrotic damage to one target creature. The user has advantage on attack rolls against this target for 1 minute. There is a 15% chance to also inflict 'Burn' on the target."
      },
      {
        "title": "Risk of Madness",
        "rules": "The user has a 30% chance of taking 2d6 necrotic damage and becoming blinded for 1 hour upon using this item. This effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level to wield the Void Echo Fragment, as its dark power demands a seasoned user.",
    "vendorReason": "The Safari Shop deals in rare and forbidden items, making this fragment an ideal addition to their stock.",
    "shippingDetail": "Ships via the Void Courier, ensuring secure delivery of this dangerous item.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The user takes a turn after using it or if they take damage in any form.",
      "charges": "1 charge; recharged on a long rest"
    },
    "priceReason": "Balanced at 1000 XP, considering the item's dark power and moderate risk of side effects.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T21:48:41.839793+00:00",
    "aiReviewedAt": "2026-07-23T21:48:41.839793+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_shadow_shard": {
    "id": "earth_land_shadow_shard",
    "name": "Fragment of Nullity",
    "description": "The Fragment of Nullity is a shard that hums with an otherworldly energy, its surface etched with cryptic symbols. Crafted from the very essence of shadow and void, it whispers secrets to those who hold it too long, tempting them with fleeting control over darkness but at the cost of their sanity. It can induce fear in foes and allow for a brief shadow step, teleporting you into the shadows for an instant.",
    "category": "forbidden",
    "price": 1000,
    "icon": "⚫",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "induce 'fear' status",
      "shadow step"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Night Hag Delivery",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Induce Fear",
        "rules": "When activated as a bonus action, this shard has a 20% chance to induce the target enemy with the 'Frightened' condition for 1 minute. The save DC is equal to 8 + your proficiency bonus + your Charisma modifier."
      },
      {
        "title": "Shadow Step",
        "rules": "Activates as an action, allowing you to teleport up to 15 feet into a shadowy space. You cannot re-enter the same shadow for at least 1 minute after using this ability."
      }
    ],
    "levelRequirementReason": "This item requires a level 7 character due to its complex nature and the risks associated with its use.",
    "vendorReason": "The Earth Emporium specializes in rare artifacts and forbidden magic, making it suitable for selling items like the Fragment of Nullity.",
    "shippingDetail": "Ships under cover of darkness to ensure its safe arrival.",
    "usage": {
      "activation": "Bonus Action or Reaction",
      "duration": "Instantaneous and 1 minute for 'Induce Fear'",
      "endsWhen": "'Induce Fear' ends when the target successfully saves, and 'Shadow Step' ends immediately after use.",
      "charges": "Unlimited"
    },
    "priceReason": "The Fragment of Nullity is priced at 1000 XP as it offers potent but risky abilities that require careful handling.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-24T23:54:20.005983+00:00",
    "aiReviewedAt": "2026-07-24T23:54:20.005983+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_bonecrusher_skull": {
    "id": "animatopia_bonecrusher_skull",
    "name": "Skullsplitter Totem",
    "description": "The Skullsplitter Totem, a crude yet potent relic crafted from the skull of an ancient Grumblehorn, hums with raw primal energy when held aloft. Its powerful roar can instantly stun foes within a wide radius, making it a formidable tool for both defense and intimidation in the untamed wilds. The totem's thunderous vibrations are said to echo through the very bones of the earth itself, sending shivers down the spines of even the bravest warriors.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 37,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Roar of Doom",
      "Stunning Stomp"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "beast_cart",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Roar of Doom",
        "rules": "When activated as a bonus action, the totem emits an ear-splitting roar that stuns all creatures within 10 feet for 1 round. Creatures make a DC 14 Wisdom saving throw or be stunned until their next turn. If a creature fails this save, it is also deafened for 1 minute."
      },
      {
        "title": "Stunning Stomp",
        "rules": "The totem grants the user a +3 bonus to Strength when in hand. This effect lasts for 1 hour and requires the user to make an attack roll with a melee weapon within this duration. On a hit, the target is stunned until their next turn."
      }
    ],
    "levelRequirementReason": "The totem's raw power demands a certain level of experience and skill to wield effectively.",
    "vendorReason": "The tribal trader has long-standing ties with the ancient clans that crafted such powerful relics, ensuring their authenticity and potency.",
    "shippingDetail": "Delivered by a swift beast cart, this totem can arrive within three days of purchase.",
    "usage": {
      "activation": "Bonus action to unleash the roar or melee attack with weapon for stunning stomp.",
      "duration": "Roar lasts until end of next turn; Stunning Stomp effect is temporary and ends when the user makes their next attack roll after activation.",
      "endsWhen": "Uses up one charge, recharges after a long rest.",
      "charges": "10 charges"
    },
    "priceReason": "Balanced at this price to reflect its powerful effects and the rarity of such a relic.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:49:21.088199+00:00",
    "aiReviewedAt": "2026-07-23T21:49:21.088199+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_honeycomb_charm": {
    "id": "animatopia_honeycomb_charm",
    "name": "Buzzing Harmony Charm",
    "description": "The Buzzing Harmony Charm is crafted from solidified honeycomb, each cell brimming with the essence of a thousand buzzing bees. This charm not only soothes savage beasts but also enhances your focus during crafting or thievery, providing a calming buzz that helps you maintain a steady hand. Wear it and feel the gentle hum of tranquility around you, knowing it can turn even the most hostile creatures to peace with a successful skill check (DC 12). Just be cautious; its power is potent but delicate.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🐝",
    "stock": 89,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Charisma Boost",
      "Poison Resistance"
    ],
    "vendor": "forest_market",
    "shippedBy": "winged_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When worn, the charm grants a +5 temporary bonus to Charisma checks and saving throws. This effect lasts for 1 hour or until you take damage. You can only use this feature once per long rest."
      },
      {
        "title": "Poison Resistance",
        "rules": "The wearer gains resistance to poison damage while the charm is active. This benefit persists as long as the charm remains in place and is not negated by damage or a successful save against any poison effect."
      }
    ],
    "levelRequirementReason": "The Buzzing Harmony Charm requires at least first-level proficiency to ensure its effects are manageable.",
    "vendorReason": "The forest market's proximity to the wilds makes it a natural hub for items that can interact with both beast and human alike.",
    "shippingDetail": "The charm is delivered by swift winged messengers, ensuring timely arrival even in remote areas.",
    "usage": {
      "activation": "Passive effect upon donning the charm.",
      "duration": "1 hour or until you take damage, whichever comes first.",
      "endsWhen": "You remove the charm, take damage, or complete a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its potent effects and rarity in the market.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:48:34.316160+00:00",
    "aiReviewedAt": "2026-07-23T21:48:34.316160+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_spirit_whisper_scroll": {
    "id": "animatopia_spirit_whisper_scroll",
    "name": "Echo of the Ancients",
    "description": "The Echo of the Ancients is a tattered scroll embossed with ancient runes and symbols. Crafted from parchment aged by centuries, it whispers tales of forgotten wisdom when unrolled. This relic grants its bearer a deepened understanding of the past, revealing hidden paths in the labyrinthine ruins of Animatopia, or granting fleeting visions that enhance one’s insight into their surroundings. With each use, the scroll seems to remember less, until finally, it lies silent and empty.",
    "category": "premium",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Ancient Insight",
      "Revealing Vision"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "teleportation_pod",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Ancient Insight",
        "rules": "As a bonus action, you can attempt an Intelligence check with advantage. If successful, the scroll grants temporary proficiency in one skill of your choice until the end of your next short or long rest."
      },
      {
        "title": "Revealing Vision",
        "rules": "When used as an action, this scroll reveals hidden objects within 30 feet for 1 minute. You can use this ability once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Echo of the Ancients requires a minimum level to ensure its power doesn’t overshadow other party members.",
    "vendorReason": "Beast Bazaar specializes in rare and ancient artifacts from forgotten realms, making it the perfect vendor for this scroll’s origins.",
    "shippingDetail": "The Echo of the Ancients is delivered by a teleportation pod, arriving with an aura that hints at its past.",
    "usage": {
      "activation": "Bonus action or action",
      "duration": "Instantaneous for Ancient Insight; 1 minute for Revealing Vision",
      "endsWhen": "The scroll's effect ends when you finish a short or long rest.",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "Balanced to reflect the scroll’s ancient power and limited utility.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-23T21:48:50.743830+00:00",
    "aiReviewedAt": "2026-07-23T21:48:50.743830+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_sticky_sap_potion": {
    "id": "earth_land_sticky_sap_potion",
    "name": "Sticky Sap Potion",
    "description": "This glistening green potion, a concoction of earthy sap and dragon slime, radiates an otherworldly glow as it sits in its glass vial. When consumed, it temporarily thickens your limbs with unnatural stickiness, making you nearly immovable for a short time—perfect for evading attacks or clinging to treacherous surfaces. However, the potion's effect is unpredictable; after 10 minutes of enhanced grip, you may uncontrollably bounce like a spring-loaded toy, adding an element of chaos to your maneuvers.",
    "category": "consumables",
    "price": 1000,
    "icon": "🟢",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_stickiness",
      "uncontrollable_bouncing"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "Swift Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Stickiness",
        "rules": "When consumed as a bonus action, this potion grants you advantage on Dexterity (Acrobatics) checks and an additional +20 feet to your movement speed for 1 minute. If you are already affected by the potion's bouncing effect, it ends immediately."
      },
      {
        "title": "Uncontrollable Bouncing",
        "rules": "After 10 minutes of increased stickiness, you must make a DC 15 Strength saving throw. On a failed save, you are knocked prone and take 2d4 force damage. You remain prone until the effect ends."
      }
    ],
    "levelRequirementReason": "The potion's effects require a basic understanding of physical control to activate effectively.",
    "vendorReason": "The Guild Quartermaster stocks this potion for adventurers who need to navigate treacherous terrains and evade foes.",
    "shippingDetail": "Shipped with Swift Delivery, the potion arrives sealed in a protective case to prevent any accidental spillage during transit.",
    "usage": {
      "activation": "Consumed as a bonus action",
      "duration": "1 minute (until ends when you finish a short rest)",
      "endsWhen": "The effect ends at the start of your next turn after 10 minutes or if you take any action other than moving up to half your speed.",
      "charges": "Unlimited"
    },
    "priceReason": "The potion's unique and potentially chaotic effects, combined with its limited duration and the risk of uncontrolled bouncing, justify its higher price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T21:49:15.052380+00:00",
    "aiReviewedAt": "2026-07-23T21:49:15.052380+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_rune_of_frostbite": {
    "id": "earth_land_rune_of_frostbite",
    "name": "Rune of Frostbite",
    "description": "Forged by the Ice Wizards of Mount Colder, this rune is a crystalline disc infused with ancient frost magic. When activated, it radiates an icy aura that stings any nearby enemies, dealing piercing cold damage and granting resistance to cold for those within its glow. However, those who activate it must remain wary of the rune’s own unpredictable nature, as it occasionally freezes foes in place upon a critical hit.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧊",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "FREEZE_ENEMIES",
      "RESISTANCE_TO_COLD"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Magical Conveyance",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Frost Burst",
        "rules": "When activated as an action, the rune emits a burst of frosty energy that deals 3d6 cold damage to all creatures within 10 feet. Those who succeed on a Dexterity saving throw (DC 14) are immune to its effects for 1 minute. The effect ends if the caster is incapacitated or takes damage."
      },
      {
        "title": "Frozen Fortitude",
        "rules": "While within the rune’s frosty glow, all allies gain resistance to cold damage until the end of their next turn. This effect does not stack with other sources of resistance and expires after 1 minute if the rune is inactive or its caster is incapacitated."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency to wield this rune effectively.",
    "vendorReason": "The magic shop stocks rare and powerful relics from the Ice Wizards of Mount Colder, making it a logical vendor for such an item.",
    "shippingDetail": "Ships via Magical Conveyance's express service to ensure safe delivery within one week.",
    "usage": {
      "activation": "Activate as a bonus action",
      "duration": "Instantaneous effect with ongoing resistance",
      "endsWhen": "Caster is incapacitated or takes damage, or the rune is destroyed",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced price reflects the item’s rarity and effectiveness as a tactical tool.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T21:49:04.868257+00:00",
    "aiReviewedAt": "2026-07-23T21:49:04.868257+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_dragonscale_badge": {
    "id": "earth_land_dragonscale_badge",
    "name": "Dragonscale Badge of the Obsidian Guard",
    "description": "The Dragonscale Badge of the Obsidian Guard is a gleaming badge forged from obsidian and dragon scales, worn by the elite protectors of ancient hoards. It grants you resilience akin to a dragon’s tough hide and bestows a +5 bonus to Charisma (Persuasion) checks, helping you charm or negotiate with dragon-like creatures. Rumor has it that those who wear this badge are granted a small measure of fire resistance, but beware—accidental displays of fiery breath could be as dangerous as they are spectacular.",
    "category": "faction",
    "price": 1000,
    "icon": "🐉",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "grant_small_fire_resistance",
      "bonus_to_charisma"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "Dragon Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Grant Small Fire Resistance",
        "rules": "While wearing the badge, you have resistance to fire damage. This effect lasts until you remove the badge or take a short rest."
      },
      {
        "title": "Bonus to Charisma (Persuasion)",
        "rules": "When interacting with dragon-type creatures through Persuasion checks, you gain a +5 bonus to your rolls. This effect is active as long as you wear the badge and does not require an action or reaction."
      }
    ],
    "levelRequirementReason": "Wearing this badge requires a high level of discipline and skill, suitable only for those who have proven their worth in the Obsidian Guard.",
    "vendorReason": "The Guild Quartermaster has exclusive access to these badges, as they are commissioned by the Obsidian Guard specifically for their members.",
    "shippingDetail": "Delivered by a trusted Dragon Courier who ensures the badge arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "While worn.",
      "endsWhen": "Removing the badge or taking a short rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This badge is priced at 1000 XP, reflecting its limited availability and the Obsidian Guard’s exclusive commissioning of these items.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:49:26.997279+00:00",
    "aiReviewedAt": "2026-07-23T21:49:26.997279+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_rusty_regalia": {
    "id": "midlands_item_rusty_regalia",
    "name": "Emperor's Echoing Regalia",
    "description": "The Emperor's Echoing Regalia, a tarnished helm once worn by an Imperial Guard captain disgraced in battle, whispers of past glories and failures. Its surface is pitted from countless skirmishes, yet it still grants a subtle intimidation bonus and compels its wearer to issue commands, even when alone. The helmet's ancient metal hums with the echoes of forgotten orders, sometimes compelling the wearer to shout out hollow instructions at passing pigeons.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Intimidation Bonus",
      "Shout Commands"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "imperial_courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Increased Intimidation",
        "rules": "While wearing the Emperor's Echoing Regalia, you gain a +3 bonus to your Intimidate checks. This effect is passive and does not require an action."
      },
      {
        "title": "Compelled Orders",
        "rules": "Once per short or long rest, you may activate this helm to compel yourself to shout out orders at passing pigeons. You must make a Wisdom saving throw (DC 13) to resist; on a failed save, you speak aloud any command stored in your memory. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The helm's echo requires a seasoned veteran with discipline and experience to wield it without succumbing to its whimsical commands.",
    "vendorReason": "The Empire Exchange sells relics of the Imperial Guard, including this tarnished but potent symbol of past glory.",
    "shippingDetail": "Ships via the prestigious Imperial Courier, ensuring safe and swift delivery within a week.",
    "usage": {
      "activation": "Once per short or long rest, as an action.",
      "duration": "Until the end of your next turn.",
      "endsWhen": "On a successful Wisdom save (DC 13) or at the start of your next turn if you fail.",
      "charges": "Unlimited"
    },
    "priceReason": "The helm's rarity, historical significance, and unique ability to grant an immediate bonus make it a valuable but not excessively expensive addition to any adventurer's arsenal.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:49:41.218802+00:00",
    "aiReviewedAt": "2026-07-23T21:49:41.218802+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_goblin_grapple_hook": {
    "id": "midlands_item_goblin_grapple_hook",
    "name": "Sticky Situation Grapple Hook",
    "description": "The Sticky Situation Grapple Hook, crafted by goblin tinkers with a disturbingly high amount of glee, launches you upwards with surprising force and an even more surprising stickiness that clings to your surroundings. This peculiar device grants a single-use grapple ability, allowing you to ascend 15 feet in one swift motion. However, the hook's adhesive nature can backfire, as there is a 10% chance of becoming temporarily stuck mid-air, causing an awkward and unpredictable landing.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔗",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Grapple Ability",
      "Temporary Stuck"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grapple Ability",
        "rules": "When you activate the Grapple Ability, you can use your action to grapple yourself up to 15 feet. You gain a +2 bonus to Strength (Athletics) checks made for this attempt. The hook's sticky nature provides a 10% chance of becoming temporarily stuck mid-grapple."
      },
      {
        "title": "Temporary Stuck",
        "rules": "If you are temporarily stuck, you must succeed on a DC 13 Dexterity saving throw or be restrained by the hook for 1 minute. During this time, your movement is limited to half speed until the effect ends. This effect can occur only once per short rest."
      }
    ],
    "levelRequirementReason": "This item's unpredictable nature and grapple ability make it accessible early in a campaign.",
    "vendorReason": "Midland Merchant stocks this quirky device as part of their collection of unique and non-traditional gear.",
    "shippingDetail": "The hook is carefully packed to prevent accidental activation during transit, ensuring safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Once per short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The item's unique mechanics, including the grapple ability and temporary stuck effect, justify its fair value of 1000 XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:49:57.616041+00:00",
    "aiReviewedAt": "2026-07-23T21:49:57.616041+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_chronal_distortion_orb": {
    "id": "midlands_item_chronal_distortion_orb",
    "name": "Wario's Temporal Tickle",
    "description": "Wario's Temporal Tickle is a mischievous, swirling orb of chronomancy that pulses with unstable time energy. It allows the wielder to briefly rewind time by up to three seconds, creating a chaotic ripple in the fabric of reality. While it mostly serves as a comedic tool for pranks and mischief, there have been instances where unexpected temporal paradoxes have emerged, leaving users questioning whether they've truly fixed anything—or if they've inadvertently caused more trouble. Wario's promise is that each use guarantees a laughably unpredictable outcome.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Temporal Rewind",
      "Paradox Chance"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Temporal Rewind",
        "rules": "Activates as an action, allowing the user to reverse time by up to three seconds. This effect is instantaneous and has a range of personal. It does not affect creatures or objects outside the wielder's reach. There is no save DC required for this effect."
      },
      {
        "title": "Paradox Chance",
        "rules": "There is a 5% chance per use to create a minor temporal paradox, which can lead to unpredictable and often humorous results. The paradox ends immediately upon the next turn of any creature involved in it. This effect has no save DC."
      }
    ],
    "levelRequirementReason": "Requires significant magical aptitude and control over time magic.",
    "vendorReason": "As a master of temporal mechanics, Wario's Temporal Tickle is a natural addition to the Fractured Forge's inventory.",
    "shippingDetail": "Ships via a dimensional portal, ensuring the orb arrives in perfect condition and with minimal risk of paradox during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (effect lasts for up to three seconds)",
      "endsWhen": "The effect ends when used or interrupted by another action",
      "charges": "Once per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's limited daily use and unpredictable effects.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T21:49:45.737346+00:00",
    "aiReviewedAt": "2026-07-23T21:49:45.737346+00:00",
    "aiReviewVersion": 1
  }
};
