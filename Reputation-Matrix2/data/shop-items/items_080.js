// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_080 = {
  "doughnut_hole_item_netherbloom_fragment_7": {
    "id": "doughnut_hole_item_netherbloom_fragment_7",
    "name": "Netherbloom Fragment 7 - Obsidian Variant",
    "description": "The Netherbloom Fragment 7 - Obsidian Variant is a crystalline shard hewn from the heart of an ancient anomaly. Its surface is as smooth and black as obsidian, yet it glows faintly with a menacing warmth that makes nearby creatures uneasy. The fragment occasionally emits a low hum, as if whispering secrets to those attuned enough to hear. It is said that those who possess this shard can perceive the unseen threads of fate more clearly, though at a terrible cost.",
    "category": "curiosities",
    "price": 4900,
    "icon": "🖤",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Void Resistance",
      "Phantom Wound"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Worm Express",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Void Resistance",
        "rules": "Grants advantage on saving throws against void energy damage. This effect lasts for 1 minute and can be reactivated once per short or long rest."
      },
      {
        "title": "Phantom Wound",
        "rules": "Once per long rest, the fragment inflicts a 'phantom wound', dealing 1d4 necrotic damage to the wielder. On a successful DC 15 Constitution saving throw, this effect is negated."
      }
    ],
    "levelRequirementReason": "Only those of considerable power are capable of safely wielding such an artifact without succumbing to its malevolent influence.",
    "vendorReason": "The hole-hawker, a dealer in the darkest corners of the market, has accumulated this fragment through dubious means and offers it as a rare collector’s item.",
    "shippingDetail": "Delivery via Void Worm Express is guaranteed to be swift, though passengers on the same conveyance must remain vigilant against the fragment's subtle influence.",
    "usage": {
      "activation": "Used as an action or bonus action to activate its effects.",
      "duration": "Void Resistance lasts for 1 minute. Phantom Wound can be used once per long rest.",
      "endsWhen": "The effects end when the user completes a short or long rest, or if the fragment is lost or destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Given its rarity and the potential dangers it poses, this fragment's price reflects both its value as an artifact and the risks involved in acquiring it.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:47:29.246907+00:00",
    "aiReviewedAt": "2026-07-25T02:47:29.246907+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_paradoxical_resonance_tears_of_the_center": {
    "id": "doughnut_hole_item_paradoxical_resonance_tears_of_the_center",
    "name": "Paradoxical Resonance Tears of the Center - Variant Zeta",
    "description": "The Paradoxical Resonance Tears of the Center - Variant Zeta are collected from the very heart of a resonating anomaly, their viscous form shimmering with multiple layers of reality. These tears can briefly disrupt local physics, causing unpredictable effects such as phase-shifting or localized gravity fluctuations that leave observers disoriented and momentarily nauseated. Each use is a gamble, potentially turning buffs into debuffs and vice versa, making every application a dangerous yet exhilarating experience.",
    "category": "consumables",
    "price": 23000,
    "icon": "🌀",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Phase-Shifting",
      "Disorienting Gravity"
    ],
    "vendor": "center_seller",
    "shippedBy": "temporal courier drone",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Phase-Shifting",
        "rules": "When consumed, the drinker teleports a short distance to an unoccupied space. This effect has a 50% chance of success and a save DC of 14. If failed, the user is knocked prone."
      },
      {
        "title": "Disorienting Gravity",
        "rules": "The drinker creates a temporary distortion field that reduces the accuracy of all ranged attacks made within 30 feet for 1 minute. This effect can be ended by a successful DC 14 Constitution saving throw or upon the item's destruction."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and magical prowess can safely handle the unpredictable nature of these tears.",
    "vendorReason": "Center Seller specializes in exotic and rare magical artifacts, including items derived from resonating anomalies like these tears.",
    "shippingDetail": "Ships via a temporal courier drone, ensuring the item's integrity is maintained during transit through time-distorted zones.",
    "usage": {
      "activation": "Eaten as a consumable",
      "duration": "Instantaneous; effects last until the next round or are ended by a save",
      "endsWhen": "The effect ends on a failed save, upon destruction of the item, or after its duration expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "Reflects the rarity and unpredictable nature of these tears, which are hard to come by and potentially dangerous.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T02:47:09.141925+00:00",
    "aiReviewedAt": "2026-07-25T02:47:09.141925+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_chronal_singer_remnant_7897": {
    "id": "the_edge_item_chronal_singer_remnant_7897",
    "name": "The Chronal Singer's Remnant - Echoes of Collapse",
    "description": "The Chronal Singer's Remnant - Echoes of Collapse is a fragmented shard, its surface etched with temporal runes that glow with an ethereal light. When held, it hums with residual energy from realities unmade, granting fleeting glimpses into potential futures and past deviations. Though the sight can be mesmerizing, prolonged exposure risks unraveling one’s own timeline, causing minor temporal distortions that ripple through the air like faint echoes of collapsing dimensions.",
    "category": "curiosities",
    "price": 4900,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Glimpse",
      "Rewind Minor Actions"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Temporal Glimpse",
        "rules": "When activated as a bonus action, the user gains fleeting insight into potential futures or past deviations for 5 seconds. This effect provides no numerical bonuses but offers a +2 to one Intelligence (History) check per use."
      },
      {
        "title": "Rewind Minor Actions",
        "rules": "Once per short rest, the wearer can rewind minor actions that have not yet fully committed. This may include a missed attack or failed saving throw, effectively negating it without any save required; however, this effect cannot be used on critical failures."
      }
    ],
    "levelRequirementReason": "This item requires significant magical knowledge and experience to wield safely.",
    "vendorReason": "The abyss trader has access to rare artifacts from the planes beyond, including this remnant of a lost reality.",
    "shippingDetail": "Ships via the Dimensional Rift Courier with an additional 1d4+2 days for delivery due to the item’s unstable nature.",
    "usage": {
      "activation": "Bonus action or as a reaction (to negate minor actions)",
      "duration": "Instantaneous, except Temporal Glimpse which lasts 5 seconds",
      "endsWhen": "The effect ends when the duration expires or the user retracts the item from their hand.",
      "charges": "Unlimited, but can only be used once per short rest."
    },
    "priceReason": "The remnant’s rarity and the risk it poses to users justify its moderate price in experience points.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T14:42:26.952213+00:00",
    "aiReviewedAt": "2026-07-25T14:42:26.952213+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_gilded_voidsinger_fragment_7897": {
    "id": "the_edge_item_gilded_voidsinger_fragment_7897",
    "name": "Gilded Void Singer’s Fragment - Resonance of Silence",
    "description": "The Gilded Void Singer’s Fragment - Resonance of Silence is a meticulously crafted relic forged from solidified negative space, its surface adorned with intricate patterns that shimmer and hum with an otherworldly resonance. When donned, it muffles all external sounds within a 30-foot radius, creating pockets of suffocating stillness that even the most perceptive ears cannot pierce. The fragment also grants limited control over the density of surrounding air, allowing the wearer to create small vacuums or pressure zones with a mere thought.",
    "category": "equipment",
    "price": 27000,
    "icon": "🌫️",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Silence Aura",
      "Density Manipulation"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Automated Delivery Drone",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Silence Aura",
        "rules": "The fragment grants a 30-foot radius of silence, muffling all external sounds. This effect has no save DC and is passive while the fragment is worn."
      },
      {
        "title": "Density Manipulation",
        "rules": "By concentrating for 1 minute, the wearer can create small vacuums or pressure zones with a minor action. These effects last until dispelled by an attack that deals sonic damage within 5 feet of the zone, or until the fragment is removed."
      }
    ],
    "levelRequirementReason": "The intricate craftsmanship and potent magic required to wield this relic necessitate a high level of mastery.",
    "vendorReason": "Edge Outpost specializes in rare and exotic artifacts, making the Gilded Void Singer’s Fragment an appropriate addition to their inventory.",
    "shippingDetail": "The fragment is carefully packed using custom vacuum-sealed containers to preserve its integrity during transit.",
    "usage": {
      "activation": "Concentration for Density Manipulation; passive while worn for Silence Aura",
      "duration": "Silence Aura is permanent while the fragment is worn, Density Manipulation lasts for 1 minute or until dispelled",
      "endsWhen": "Removed from wear or attacked by a sonic attack within 5 feet of a created zone",
      "charges": "Unlimited"
    },
    "priceReason": "The fragment's rare materials and the complexity of its magic make it a high-value relic, priced accordingly.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-25T02:47:28.981386+00:00",
    "aiReviewedAt": "2026-07-25T02:47:28.981386+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_mk64_eternal_remnant_of_the_final_singer_7897": {
    "id": "the_edge_item_mk64_eternal_remnant_of_the_final_singer_7897",
    "name": "Mk.64 Eternal Remnants of the Final Singer - Convergence Point",
    "description": "The Mk.64 Eternal Remnants of the Final Singer - Convergence Point is a cursed obsidian sphere that hums with an unsettling warmth. Crafted from the fragments of the Final Singer's voice, it acts as a focal point for twisted energies. When activated, it can either amplify the user’s abilities for one turn or unleash a devastating feedback loop that can critically harm both friend and foe – use this item with extreme caution.",
    "category": "forbidden",
    "price": 83000,
    "icon": "💥",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Ability Amplification",
      "Catastrophic Feedback"
    ],
    "vendor": "final_shop",
    "shippedBy": "Shadow Freight Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ability Amplification",
        "rules": "Activates as an action. The user’s next attack or ability deals an additional +2d6 damage and gains advantage on the roll. This effect lasts for one turn."
      },
      {
        "title": "Catastrophic Feedback",
        "rules": "Occurs with a 20% chance upon activation. Deals 10d8 radiant damage to all creatures within a 30-foot radius, including the user. The save DC is 15 (Wisdom saving throw)."
      }
    ],
    "levelRequirementReason": "Even novices should be wary of this powerful and dangerous relic.",
    "vendorReason": "The Final Shop, known for its rare and forbidden items, is the only place to acquire such a potent yet perilous artifact.",
    "shippingDetail": "Delivery requires a special delivery permit due to the item's hazardous nature.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "One turn for Ability Amplification, 1d4 rounds for Catastrophic Feedback.",
      "endsWhen": "The effect ends when its duration expires or the user is hit by an attack.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects both the item's rarity and the risk it poses to users.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-25T02:47:45.382939+00:00",
    "aiReviewedAt": "2026-07-25T02:47:45.382939+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_the_zealous_void_cursed": {
    "id": "doughnut_hole_item_the_zealous_void_cursed",
    "name": "The Zealous Void Cursed",
    "description": "The Zealous Void Cursed is a shard of obsidian forged from the heart of a forgotten void. Its surface crackles with an ethereal, pulsating energy that grants temporary resistance to void-based attacks and enhances one's movement speed by 5%. However, its zealous resonance can unravel your sanity, causing a momentary madness if it succeeds in a saving throw (DC 14). Holding this shard is akin to walking the edge of existence, where reality bends and time seems to stretch.",
    "category": "equipment",
    "price": 4900,
    "icon": "🔥",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Void Resistance +20%",
      "Increased Movement Speed +5%"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Courier",
    "levelRequirement": 28,
    "effectDetails": [
      {
        "title": "Void Resistance",
        "rules": "Activates on contact. Provides resistance against void-based attacks for 1 minute, recharges after a long rest."
      },
      {
        "title": "Madness Trigger",
        "rules": "Has a 1% chance to trigger madness upon activation. The effect lasts until the end of your next turn. Saves are DC 14."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Arcana or Knowledge (Religion) to wield without risk.",
    "vendorReason": "Hole Hawkers specialize in exotic and cursed items, making this shard a fitting addition to their wares.",
    "shippingDetail": "Requires special handling by the Void Courier; delivery can take up to one week.",
    "usage": {
      "activation": "Instantaneous activation on contact with an enemy's void-based attack.",
      "duration": "1 minute, recharges after a long rest.",
      "endsWhen": "The effect ends when you take damage from non-void attacks or the end of your next turn if madness is triggered.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its unique combination of defensive and situational benefits.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:47:48.959711+00:00",
    "aiReviewedAt": "2026-07-25T02:47:48.959711+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_mk_45_empty_voids": {
    "id": "doughnut_hole_item_mk_45_empty_voids",
    "name": "Mk.45 Empty Voids",
    "description": "The Mk.45 Empty Voids is a gnarled, hand-crafted device forged from solidified nothingness, exuding an eerie static that dances along its surface. It can collapse nearby void fissures for a brief moment, revealing hidden pathways in the process, but prolonged exposure to its aura induces a state of crippling apathy, sapping all will and motivation. A masterwork of dark artistry, this device whispers of cosmic truths and forbidden knowledge.",
    "category": "curiosities",
    "price": 23000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "collapses nearby void fissures (short duration)",
      "reveals hidden pathways"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Void Collapse",
        "rules": "When activated as a bonus action, the Mk.45 Empty Voids collapses all void fissures within 30 feet for 1 minute. This effect does not extend to naturally occurring voids or those beyond the plane of existence. Creatures exposed to its static for more than 1 round must succeed on a DC 17 Constitution saving throw or suffer a -2 penalty to all ability checks and saving throws until they leave the area."
      },
      {
        "title": "Pathfinder Revelation",
        "rules": "Once per long rest, upon activation as an action, the device reveals hidden pathways within its range. The exact nature of these pathways is determined by the DM, but they must be significant enough to offer a tactical advantage or strategic benefit."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and adventurers who wish to explore the unknown without the burden of high-level requirements.",
    "vendorReason": "The center_seller specializes in exotic curiosities that push the boundaries of reality, making this device a perfect fit for their inventory.",
    "shippingDetail": "Delivery is expedited via the Dimensional Courier Service, ensuring the Mk.45 Empty Voids arrives intact and ready to use.",
    "usage": {
      "activation": "bonus action or action (as a one-time feature per long rest)",
      "duration": "1 minute for Void Collapse; varies by DM discretion for Pathfinder Revelation",
      "endsWhen": "use ends when the duration expires or the device is destroyed",
      "charges": "unlimited, with an extended rest required to reveal hidden pathways"
    },
    "priceReason": "This item provides significant utility and exploration benefits without being overpowered.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T02:48:42.732323+00:00",
    "aiReviewedAt": "2026-07-25T02:48:42.732323+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_the_godly_void_heart": {
    "id": "doughnut_hole_item_the_godly_void_heart",
    "name": "The Godly Void Heart",
    "description": "The Godly Void Heart is an impossibly dense sphere of pure void energy, its surface radiating an unbearable warmth that warps reality. This artifact grants unparalleled control over void manipulation and a fleeting connection to the heart of existence—but at a terrible cost: the wielder's identity slowly erodes with prolonged use. Upon contact, the heart bestows temporary invulnerability, allowing one to shrug off all negative effects for a short time.",
    "category": "consumables",
    "price": 1300000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "unlimited void manipulation",
      "temporary immunity"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Celestial Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Void Manipulation",
        "rules": "The user gains the ability to manipulate void energy at will. This effect is instantaneous and does not expend charges."
      },
      {
        "title": "Temporary Invulnerability",
        "rules": "For a duration of 60 seconds, the user becomes immune to all negative effects. This immunity lasts until the start of their next turn after the duration ends or they are knocked unconscious."
      }
    ],
    "levelRequirementReason": "Even in its reduced form, this artifact remains incredibly powerful and requires a minimum level to wield.",
    "vendorReason": "The Void Vendor is known for their expertise in dealing with the most potent artifacts of the void.",
    "shippingDetail": "Due to its volatile nature, this item can only be shipped via the specially equipped Celestial Transport service.",
    "usage": {
      "activation": "Instantaneous action upon contact with the heart.",
      "duration": "60 seconds of immunity per use.",
      "endsWhen": "The duration ends at the start of their next turn after the effect is used or they are knocked unconscious.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects a significant reduction, balancing its immense power with a more manageable cost.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-25T02:48:02.125334+00:00",
    "aiReviewedAt": "2026-07-25T02:48:02.125334+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_haunted_stagstalker": {
    "id": "middle_earth_item_haunted_stagstalker",
    "name": "The Haunted Stagstalker's Mithril Gauntlet",
    "description": "This blackened mithril gauntlet pulses with a faint, spectral warmth. The fingers of the gauntlet are adorned with enigmatic runes that glow faintly in response to your will. Legends whisper of Elven hunters who tracked monstrous stags through Mirkwood, imbuing this weapon with echoes of their desperate pursuit. The gauntlet amplifies the wearer's strength and grants them the ability to step into shadowy concealment, evading detection for a fleeting moment.",
    "category": "equipment",
    "price": 4900,
    "icon": "🐺",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_strength",
      "shadow_step"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Strength",
        "rules": "When you wear this gauntlet, your Strength score is increased by 2 until the end of your next turn. This effect does not stack with any other sources of increased strength."
      },
      {
        "title": "Shadow Step",
        "rules": "As a bonus action, you can cause the gauntlet to pulse with spectral light and allow you to step into shadowy concealment for 1 minute. You gain advantage on Dexterity (Stealth) checks made to hide in dim light or darkness within 30 feet of you. This effect ends early if you move more than 5 feet away from your starting position."
      }
    ],
    "levelRequirementReason": "This gauntlet is crafted for those who seek adventure, providing a modest boost to strength and the ability to evade detection.",
    "vendorReason": "The dwarves of the Iron Hills possess the skill to forge such enchanted weaponry from the remnants of ancient elven treasures.",
    "shippingDetail": "Ships via dragon Express, a service known for its speed and reliability, but delays may occur due to the unpredictable nature of dragon travel.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Minute",
      "endsWhen": "You move more than 5 feet away from your starting position or as a result of an attack or damage taken.",
      "charges": "Unlimited, recharged after a long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the gauntlet's modest enhancement to strength and its evasive abilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:48:10.513101+00:00",
    "aiReviewedAt": "2026-07-25T02:48:10.513101+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_shire_songstalker": {
    "id": "middle_earth_item_shire_songstalker",
    "name": "The Shire Songstalker's Seed Pod",
    "description": "The Shire Songstalker's Seed Pod glows softly like a lantern made from starlight, its luminescence resonating with the ancient trees of the Old Forest. When activated, it hums a melody that reveals hidden pathways through the dense underbrush, while also soothing restless animals and calming their growls. The pod is said to carry the essence of the Shire's oldest song, capable of weaving a protective aura around those in its vicinity.",
    "category": "curiosities",
    "price": 1300,
    "icon": "🌱",
    "stock": 22,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "reveal_hidden_paths",
      "animal_calm"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths",
        "rules": "When activated as an action, the seed pod emits a melody that reveals hidden paths within a 30-foot radius for up to 1 minute. Creatures in the area can see through natural and magical concealment within this range. This effect is disrupted by any source of loud noise or sudden movement."
      },
      {
        "title": "Animal Calm",
        "rules": "The seed pod's melody can be used as an action to attempt to calm a single willing creature or beast within 30 feet that is agitated or frightened. The target must succeed on a Wisdom saving throw (DC 15) or remain calm for 1 minute, during which it cannot take aggressive actions."
      }
    ],
    "levelRequirementReason": "The Shire Songstalker's Seed Pod requires no level to use due to its simple activation and minor effects.",
    "vendorReason": "The Shire Shop, being a hub for local artisans and naturalists, sells items that reflect the magic of the Shire, including this seed pod.",
    "shippingDetail": "Delivered by the efficient Pony Express, ensuring timely arrival to eager buyers.",
    "usage": {
      "activation": "action",
      "duration": "instantaneous (Reveal Hidden Paths) or up to 1 minute (Animal Calm)",
      "endsWhen": "The melody fades when its duration ends or it is destroyed.",
      "charges": "Unlimited, but limited to one use per day"
    },
    "priceReason": "The Shire Songstalker's Seed Pod is priced at 1000 XP due to its unique lore and the effort required to harvest it from ancient trees.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:48:33.699393+00:00",
    "aiReviewedAt": "2026-07-25T02:48:33.699393+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_gondorian_stormstalker": {
    "id": "middle_earth_item_gondorian_stormstalker",
    "name": "The Gondorian Stormstalker's Sigil Fragment",
    "description": "The Gondorian Stormstalker's Sigil Fragment is a jagged shard of ancient stone, etched with the lightning-bolt sigils of old Minas Tirith. When held, it crackles with latent power, offering temporary immunity to weather effects and allowing its wielder to channel a concentrated bolt of energy that can turn the tide in any stormy encounter. This relic is a fragment of Gondor’s might against Sauron, now available only through the Elven Market's special order.",
    "category": "consumables",
    "price": 1400000,
    "icon": "⚡",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "weather_immunity",
      "lightning_bolt"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weather Immunity",
        "rules": "While holding this sigil fragment, you gain temporary immunity to weather effects for 1 hour. The effect ends if you drop the shard or are exposed to a different weather condition."
      },
      {
        "title": "Lightning Bolt",
        "rules": "As an action, you can unleash a focused bolt of lightning by making a ranged attack roll (attack bonus +3) against one target within 60 feet. The attack deals 1d8+2 lightning damage on a hit."
      }
    ],
    "levelRequirementReason": "This fragment is accessible to all adventurers as it serves as a potent reminder of Gondor's resilience.",
    "vendorReason": "The Elven Market specializes in ancient relics and artifacts, including this fragment recovered from the ruins of Minas Tirith.",
    "shippingDetail": "Delivered by swift messengers on the back of winged horses; a special courier ensures timely delivery from Gondor to your doorstep.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Lightning Bolt) / 1 hour (Weather Immunity)",
      "endsWhen": "Dropping the shard or being exposed to different weather conditions; Lightning Bolt ends on completion of the attack action.",
      "charges": "Unlimited, but requires concentration for Weather Immunity"
    },
    "priceReason": "The sigil fragment is priced at 1000 XP as it combines ancient power with a limited duration and effect.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-25T02:49:14.561055+00:00",
    "aiReviewedAt": "2026-07-25T02:49:14.561055+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_echoing_block_dancer": {
    "id": "connectopia_item_echoing_block_dancer",
    "name": "The Echoing Block Dancer’s Lament",
    "description": "The Echoing Block Dancer’s Lament is a pulsating block of weathered stone, its surface etched with ancient runes and faintly humming with the echoes of bygone battles and architectural marvels. When held, it replays a pivotal moment in the history of Frontier settlements, allowing you to glimpse forgotten strategies and the artistry behind legendary structures. Its rhythmic thrum accelerates your building speed by 15% for 30 seconds, granting you a fleeting yet profound insight into past successes and failures.",
    "category": "equipment",
    "price": 4900,
    "icon": "🧱",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Accelerated Building Speed",
      "Vision of Past Events"
    ],
    "vendor": "craft_corner",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Accelerated Building Speed",
        "rules": "Activates as a bonus action. Increases building speed by 15% for 30 seconds. Ends if you take any damage or lose your concentration."
      },
      {
        "title": "Vision of Past Events",
        "rules": "Grants you a brief, vivid vision of a crucial event from the lost region upon activation. This vision lasts until the end of your next turn and provides +5 to Dexterity (Stealth) checks for 1 minute."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate its historical value without needing high-level abilities.",
    "vendorReason": "Craft Corner specializes in relics and artifacts that bridge the gap between past and present, making it a fitting vendor for this item.",
    "shippingDetail": "Ships via delivery drones within 24 hours of purchase.",
    "usage": {
      "activation": "Bonus action to activate and use.",
      "duration": "15% building speed increase lasts for 30 seconds.",
      "endsWhen": "You take damage or lose concentration.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced as a rare item, it provides significant utility without overpowered effects.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:49:10.592237+00:00",
    "aiReviewedAt": "2026-07-25T02:49:10.592237+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_gravitic_root_dancer": {
    "id": "connectopia_item_gravitic_root_dancer",
    "name": "Gravitic Root Dancer’s Embrace",
    "description": "The Gravitic Root Dancer’s Embrace is a gnarled, pulsating root born from the subterranean depths of Connectopia. When consumed, it grants you mastery over gravity within a five-meter radius, allowing for unprecedented leaps and strategic block manipulation. The root's influence can be felt for only thirty minutes at a time, after which its gravitational distortions cause your perception to blur. Beware—its power is as fleeting as it is potent.",
    "category": "consumables",
    "price": 1300,
    "icon": "🌀",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Master of Gravity",
      "Enhanced Leaps"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "mounted_pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Master of Gravity",
        "rules": "For thirty minutes after consumption, you can manipulate gravity within a five-meter radius. You gain the ability to move through difficult terrain as if it were normal ground and can push or pull objects up to your Strength modifier in weight with no effort."
      },
      {
        "title": "Enhanced Leaps",
        "rules": "For thirty minutes after consumption, you have advantage on Dexterity (Acrobatics) checks made to jump. Additionally, when you jump, you gain a +5 bonus to your jumping distance and height. This effect ends if you move more than 10 meters from where you consumed the root."
      }
    ],
    "levelRequirementReason": "This root is potent enough that even novices can harness its power, though it may be too strong for those without some basic training in physical prowess.",
    "vendorReason": "The Pioneer Post specializes in exotic and rare items from the far reaches of Connectopia, making this root one of their offerings.",
    "shippingDetail": "Delivered by a swift mounted pony, ensuring it arrives fresh and potent.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "30 minutes",
      "endsWhen": "You move more than 10 meters from where you consumed the root or when its thirty-minute duration ends",
      "charges": "Unlimited"
    },
    "priceReason": "The root's rarity and the power it grants justify this price, as it offers a unique and potent effect that can significantly alter combat situations.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T02:49:06.664268+00:00",
    "aiReviewedAt": "2026-07-25T02:49:06.664268+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_titanium_shard_dancer": {
    "id": "connectopia_item_titanium_shard_dancer",
    "name": "The Titanium Shard Dancer of the Foundry",
    "description": "The Titanium Shard Dancer of the Foundry is a shard forged in the heart of an ancient automated foundry, its surface gleaming with a cold, metallic luster that hints at forgotten blocksmithing prowess. This godly item resonates with the very essence of durability and resilience, capable of instantly reinforcing any block with +20 durability and creating a protective energy field around the user for moments of crisis. Legend holds it was crafted by the first Blocksmiths to defend their settlements against relentless destruction.",
    "category": "equipment",
    "price": 1400000,
    "icon": "💎",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Instant Reinforcement",
      "Protective Energy Field"
    ],
    "vendor": "block_smith",
    "shippedBy": "teleportation_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Reinforcement",
        "rules": "When activated as a reaction, this item instantly reinforces any block with +20 durability. The effect lasts for one minute and can be used once per long rest."
      },
      {
        "title": "Protective Energy Field",
        "rules": "Activating this item creates a protective energy field around the user that provides temporary resistance to explosions and heavy impacts, reducing damage taken by half (rounded down) for 10 minutes. The effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item is crafted from ancient materials and requires a level 1 character to wield its power effectively.",
    "vendorReason": "The Blocksmiths are the guardians of ancient crafting lore, including the secrets of this powerful shard.",
    "shippingDetail": "Ships instantly via a teleportation portal, ensuring swift delivery to the customer.",
    "usage": {
      "activation": "Reaction or Action (Instantaneous)",
      "duration": "10 minutes",
      "endsWhen": "The effect ends when its duration expires or is interrupted by an attack that breaks the block.",
      "charges": "Unlimited, recharging after a long rest"
    },
    "priceReason": "This item's price reflects the rarity and craftsmanship required to create such an ancient artifact.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T02:49:17.759737+00:00",
    "aiReviewedAt": "2026-07-25T02:49:17.759737+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_whispering_shadow_elixir": {
    "id": "faerun_item_the_whispering_shadow_elixir",
    "name": "The Whispering Shadow Elixir",
    "description": "The Whispering Shadow Elixir is a viscous, black liquid that pulses with an eerie chill, said to contain echoes of ancient Netheril sorcerers' arcane whispers. Upon consumption, it grants temporary advantage on stealth checks and reveals hidden passages within dimly lit areas by whispering cryptic clues to the imbiber's ear. The elixir is a relic from the shadowy realms, where its creators sought to aid those who walk in darkness.",
    "category": "consumables",
    "price": 1300,
    "icon": "🤫",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Advantage on Stealth Checks",
      "Reveal Hidden Passages"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "magical_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Stealth Checks",
        "rules": "The drinker gains advantage on all Dexterity (Stealth) checks for the duration of 10 minutes. This effect ends if the drinker's concentration is broken or upon consuming another dose."
      },
      {
        "title": "Reveal Hidden Passages",
        "rules": "For the next 5 minutes, the drinker can perceive and locate hidden passages within dimly lit areas by hearing cryptic whispers. This ability does not require a save but ends if the drinker enters bright light or is incapacitated."
      }
    ],
    "levelRequirementReason": "The elixir's potent magic requires no specific level, as it is designed to aid adventurers of all experience levels in navigating shadowy environments.",
    "vendorReason": "Waterdeep's bustling market is known for its wide array of magical curiosities and relics, including the enigmatic Elixir of Shadows.",
    "shippingDetail": "The elixir must be delivered by a trusted courier to ensure it remains potent until consumption.",
    "usage": {
      "activation": "Drinking the Elixir",
      "duration": "10 minutes for stealth advantage, 5 minutes for revealing hidden passages",
      "endsWhen": "Concentration is broken or upon consuming another dose of the elixir, entering bright light, incapacitation, or after its duration ends",
      "charges": "Unlimited (rests required to fully recover any expended uses)"
    },
    "priceReason": "The elixir's rarity and potent effects justify a high price of 1000 XP.",
    "priceOriginal": 789,
    "priceReviewedAt": "2026-07-25T02:49:41.717168+00:00",
    "aiReviewedAt": "2026-07-25T02:49:41.717168+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_ancient_granted_s_rune_of_protection": {
    "id": "faerun_item_ancient_granted_s_rune_of_protection",
    "name": "Ancient Granted's Rune of Protection",
    "description": "Ancient Granted's Rune of Protection is a dwarven rune forged in the deep caverns beneath Mount Gundyr. Crafted from ancient iron infused with protective runes, it glows softly and hums with cold resistance. This rune can be activated to create an impenetrable shield that deflects minor projectiles, granting +2 AC against ranged attacks for 3 rounds and providing resistance to cold damage for the duration of a short rest.",
    "category": "equipment",
    "price": 4900,
    "icon": "🛡️",
    "stock": 9,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Shield of Deflection",
      "Cold Resistance"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "iron_deliveries",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shield of Deflection",
        "rules": "Activates as a bonus action, creating a shield that grants +2 AC against ranged attacks for 3 rounds. Ends when the wearer takes damage or when the duration expires."
      },
      {
        "title": "Cold Resistance",
        "rules": "Provides resistance to cold damage for the duration of a short rest (8 hours). Can be activated once per day. Ends upon expiration of the duration."
      }
    ],
    "levelRequirementReason": "This rune is designed for adventurers at all levels, providing immediate utility and protection.",
    "vendorReason": "Baldur's Bazaar prides itself on offering rare and ancient artifacts that can enhance any adventurer’s journey.",
    "shippingDetail": "Ships via Iron Deliveries, known for their reliable service through the harshest of terrains.",
    "usage": {
      "activation": "Bonus action to activate shield; once per day to use cold resistance.",
      "duration": "Shield lasts 3 rounds; cold resistance lasts until a short rest ends.",
      "endsWhen": "Shield ends when damaged or duration expires; cold resistance ends upon short rest expiration.",
      "charges": "Uses one charge per activation, recharges after 24 hours."
    },
    "priceReason": "The price reflects the item's rarity and the complex dwarven craftsmanship involved in its creation.",
    "priceOriginal": 1850,
    "priceReviewedAt": "2026-07-25T02:49:30.029602+00:00",
    "aiReviewedAt": "2026-07-25T02:49:30.029602+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_service_of_the_shadow_weavers": {
    "id": "faerun_item_service_of_the_shadow_weavers",
    "name": "Service of the Shadow Weavers",
    "description": "The Service of the Shadow Weavers is a grand tapestry spun from the very threads of shadow itself, its intricate weave shimmering like shifting darkness. This artifact grants access to the arcane talents of skilled shadow mages who can obscure your movements with dense veils of night and conjure fleeting illusions that dance in the shadows. Crafted by the enigmatic Shadow Weavers, this tapestry is a conduit for manipulating the very fabric of darkness, allowing you to briefly teleport through the gloom without leaving an afterimage.",
    "category": "services",
    "price": 23000,
    "icon": "🪄",
    "stock": 1,
    "rarity": "epic",
    "stockType": "delivery_only",
    "effects": [
      "Access to skilled shadow manipulation",
      "Brief teleportation in darkness"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "giant hawk courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Veil",
        "rules": "By activating this service, you can obscure yourself and your allies within a 10-foot radius with an ethereal veil of shadow. This effect lasts for 1 minute or until a creature successfully hits the area with a melee attack. No save is required. The tapestry may be used once per day."
      },
      {
        "title": "Shadow Step",
        "rules": "For a brief moment, you and one ally can vanish into darkness, teleporting up to 30 feet in complete darkness without leaving an afterimage or trace of movement. This effect is instantaneous but requires concentration for the duration of the move, which ends if you are hit by a melee attack."
      }
    ],
    "levelRequirementReason": "This service allows even novice mages to experiment with shadow magic and its effects.",
    "vendorReason": "The Sword Coast Traders have established a reputation for delivering the most exotic services, including those of the enigmatic Shadow Weavers.",
    "shippingDetail": "The tapestry is carefully rolled and secured within a shadowed leather case to protect it during transit via giant hawk courier. Delivery takes three days at standard rates.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until hit by melee attack (Shadow Veil); Instantaneous with concentration for Shadow Step",
      "endsWhen": "Hit by a melee attack, end of the duration, or the effect is dispelled",
      "charges": "One charge per day"
    },
    "priceReason": "The tapestry's rarity and the expertise required to manipulate shadow magic justify this fair price.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-25T02:50:01.247262+00:00",
    "aiReviewedAt": "2026-07-25T02:50:01.247262+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_falling_bridges_of_layered_descent": {
    "id": "grand_country_item_falling_bridges_of_layered_descent",
    "name": "The Falling Bridges of Layered Descent",
    "description": "The Falling Bridges of Layered Descent are brittle bridges crafted from solidified cream and shimmering sugar strata, each step echoing a dissonant melody that resonates through forgotten layers below. These ephemeral structures grant the user a momentary burst of vertical speed as they leap across treacherous gaps, providing just enough time to clear the next span before the bridge collapses into a cascade of sugary debris. The bridges are said to be remnants of an ancient confectioner's realm, now lost to time but preserved in this fleeting form.",
    "category": "consumables",
    "price": 1300,
    "icon": "🪜",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "temporary_speed_boost",
      "vibration_effect"
    ],
    "vendor": "side_seller",
    "shippedBy": "Rolling Delivery Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporary Speed Boost",
        "rules": "When the user activates the bridge, they gain a +2 bonus to their jump checks and dash actions for 1 minute. This effect ends early if the user lands on unstable ground or falls from the bridge."
      },
      {
        "title": "Vibration Effect",
        "rules": "Each step on the bridge produces a faint vibration that stuns creatures within 5 feet for 1 round (DC 14 Constitution saving throw). Creatures immune to being stunned are unaffected. This effect can only occur once per bridge use."
      }
    ],
    "levelRequirementReason": "Requires at least 15th level to safely traverse the bridges and exploit their effects without risking injury.",
    "vendorReason": "Side Seller, known for unconventional items, carries these fragile yet potent bridges due to their unique appeal to adventurers seeking a challenge.",
    "shippingDetail": "Delivered swiftly by the Rolling Delivery Drone, ensuring the bridges are in prime condition upon arrival.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "The user lands on unstable ground or falls from the bridge",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1,000 XP to reflect its unique and hazardous nature.",
    "priceOriginal": 780,
    "priceReviewedAt": "2026-07-25T02:49:47.987017+00:00",
    "aiReviewedAt": "2026-07-25T02:49:47.987017+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_tainted_bearer_of_the_cracked_helix": {
    "id": "grand_country_item_tainted_bearer_of_the_cracked_helix",
    "name": "The Tainted Bearer of the Cracked Helix",
    "description": "The Tainted Bearer of the Cracked Helix, a macabre amulet forged from the corrupted remains of an ancient custard spiral and the twisted regrets of its creator, warps the very nature of stone and earth around it. With a flick of your wrist, nearby climbing surfaces shift, crumble, or retract, offering both perilous challenges and dangerous opportunities for exploration. Prolonged use sends shivers down your spine as unsettling dreams plague your sleep, leaving you haunted by the very essence of regret entombed within its core.",
    "category": "equipment",
    "price": 4900,
    "icon": "💀",
    "stock": 8,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "manipulate_climbing_surfaces",
      "nightmare_trigger"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Layered Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Manipulate Climbing Surfaces",
        "rules": "As a bonus action, you can manipulate the immediate area around you. Choose one creature or object within 10 feet of you that is on a surface made of stone, earth, or similar material. The chosen target must make a DC 15 Strength saving throw. On a failed save, the target falls prone and cannot move for 1 round due to the shifting ground beneath them. This effect can be used once per short rest."
      },
      {
        "title": "Nightmare Trigger",
        "rules": "For every hour spent using the amulet's manipulation ability, you must succeed on a DC 15 Wisdom saving throw or suffer from nightmares for the following night. These dreams are vivid and distressing, causing disadvantage on all Charisma (Performance) checks until you complete a long rest."
      }
    ],
    "levelRequirementReason": "This amulet requires significant magical energy to manipulate the natural world in such an unpredictable manner.",
    "vendorReason": "The Vertical Vendor, known for their eccentric and rare wares, has acquired this item from a mysterious collector who claims it was found within the ruins of an ancient alchemist's laboratory.",
    "shippingDetail": "Due to its fragile nature, the amulet is shipped in a specially designed, enchanted crate that ensures safe delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect; lasts until the target makes a saving throw or the manipulation ends due to prolonged use",
      "endsWhen": "The creature successfully saves against the manipulation, after using it once per short rest, or through prolonged use inducing nightmares",
      "charges": "Unlimited uses"
    },
    "priceReason": "While not extraordinarily powerful, the Tainted Bearer of the Cracked Helix requires significant magical components and craftsmanship to create, justifying its moderate price.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T14:42:45.913665+00:00",
    "aiReviewedAt": "2026-07-25T14:42:45.913665+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_mk.98_falling_bridges_of_the_shadowed_layer": {
    "id": "grand_country_item_mk.98_falling_bridges_of_the_shadowed_layer",
    "name": "Mk.98 Falling Bridges of the Shadowed Layer",
    "description": "The Mk.98 Falling Bridges of the Shadowed Layer are ethereal bridges woven from the very fabric of shadow and collapsing sugar cliffs. These bridges hum with an eerie, mournful tone as they sway precariously in the void. Crossing them feels like plummeting into endless darkness, yet they offer a fleeting passage through the deepest shadows. Each bridge is a fragile construct that vanishes upon use, leaving nothing but the faintest echo of its passing.",
    "category": "forbidden",
    "price": 23000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "shadow_passage",
      "aetherial_weakness"
    ],
    "vendor": "layer_market",
    "shippedBy": "Void Transport",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Shadow Passage",
        "rules": "When activated as an action, the bridge collapses into a rift that allows a creature to pass through. The target must make a DC 15 Dexterity saving throw or fall prone on the far side of the rift. Once used, the bridge vanishes and cannot be reactivated for 24 hours."
      },
      {
        "title": "Aetherial Weakness",
        "rules": "While standing on the bridge, any creature within a 10-foot radius must succeed on a DC 15 Constitution saving throw or become frightened until the start of their next turn. This effect ends if they leave the area."
      }
    ],
    "levelRequirementReason": "This item requires a high level to use effectively in combat and traverse the Shadowed Layer.",
    "vendorReason": "The layer market deals exclusively with items from the Shadowed Layer, making this bridge an expected offering.",
    "shippingDetail": "Delivery is delayed by one week due to the treacherous nature of the Shadowed Layer and the fragile nature of these bridges.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The bridge vanishes after use or if a creature falls from it.",
      "charges": "1/Day"
    },
    "priceReason": "This item is priced at 1,000 XP due to its rarity and the significant risk involved in crafting such fragile constructs.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-25T02:49:58.719810+00:00",
    "aiReviewedAt": "2026-07-25T02:49:58.719810+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_chronometric_herald_of_ventus": {
    "id": "teyvat_item_chronometric_herald_of_ventus",
    "name": "The Chronometric Herald of Ventus",
    "description": "The Chronometric Herald of Ventus is a finely crafted chronometer that resonates with anemo energy. Its intricate gears and engravings echo the ancient winds, hinting at forgotten battles and lost archon decrees. When activated, it momentarily slows time around you, granting you a fleeting moment to execute precise maneuvers or gain strategic advantage. The delicate mechanism hums with a faint, rhythmic pulse that seems to sync with the flow of time itself.",
    "category": "equipment",
    "price": 1300,
    "icon": "⏳",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Time Manipulation",
      "Precision Maneuver"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "swift_winds_of_teyvat",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Time Manipulation",
        "rules": "When activated as an action, this item briefly slows the flow of time around you for 3 seconds. During this period, your movement speed is increased by 20%, and you can make an additional attack or attempt a Dexterity (Acrobatics) check without penalty. This effect ends if you take any nonmagical damage."
      },
      {
        "title": "Precision Maneuver",
        "rules": "For the following 5 seconds, after the Time Manipulation effect ends, your movement speed is increased by 10%, and you have advantage on Dexterity (Acrobatics) checks. This effect can only occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "This item requires a 15th-level character to activate due to its intricate mechanics and the power it commands over time.",
    "vendorReason": "The market in Mondstadt is known for its diverse array of unique and powerful artifacts, making The Chronometric Herald of Ventus an ideal addition.",
    "shippingDetail": "Ships via the swift winds of Teyvat, arriving within a single day from the market in Mondstadt.",
    "usage": {
      "activation": "Action",
      "duration": "3 seconds for Time Manipulation; 5 seconds following Time Manipulation",
      "endsWhen": "Nonmagical damage is taken or after its duration ends",
      "charges": "Unlimited, recharges at the end of a short or long rest"
    },
    "priceReason": "The Chronometric Herald of Ventus commands a high price due to its unique time-manipulating abilities and the intricate craftsmanship required for such an artifact.",
    "priceOriginal": 275,
    "priceReviewedAt": "2026-07-25T02:50:07.353231+00:00",
    "aiReviewedAt": "2026-07-25T02:50:07.353231+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_cursed_resonance_of_ixia": {
    "id": "teyvat_item_cursed_resonance_of_ixia",
    "name": "The Cursed Resonance of Ixia",
    "description": "The Cursed Resonance of Ixia is a jagged obsidian shard etched with serpentine runes that seem to writhe and glow with an eerie, chilling water aura. It pulses ominously when near sources of strong hydro energy, a grim reminder of the drowned gods who once ruled the depths. Holding it induces debilitating nausea and a creeping sense of dread, as if the very essence of the ocean's wrath is whispering dark secrets to your mind.",
    "category": "consumables",
    "price": 5000,
    "icon": "💧",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Hydro Aura",
      "Dizzying Nausea"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hydro Aura",
        "rules": "When you hold The Cursed Resonance of Ixia, it emits a Hydro Aura that deals an additional 20% damage to all hydro-type attacks. This effect persists for the duration of your turn."
      },
      {
        "title": "Dizzying Nausea",
        "rules": "Holding this resonance induces a 'dizzy' status effect on any creature it is wielded by, causing them to lose their next action and suffer a -2 penalty to all rolls for 5 seconds. This effect can be resisted with a successful Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "This item's effects are designed to be accessible early in the game, providing a useful tool without requiring high character level.",
    "vendorReason": "Liyue Harbor is known for its deep ties with aquatic magic and hydro-elemental artifacts, making it an ideal vendor for this cursed resonance.",
    "shippingDetail": "Ships via sea express, arriving within a week of purchase.",
    "usage": {
      "activation": "Instantaneous action to hold the item.",
      "duration": "Until the end of your next turn.",
      "endsWhen": "The effect ends if you are no longer holding the resonance or if it is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects its rare nature and the balance between utility and accessibility, ensuring players can use it effectively without feeling overpowered.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T02:50:47.002047+00:00",
    "aiReviewedAt": "2026-07-25T02:50:47.002047+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_mk_58_anemo_herald_of_reverie": {
    "id": "teyvat_item_mk_58_anemo_herald_of_reverie",
    "name": "Mk.58 Anemo Herald of Reverie",
    "description": "The Mk.58 Anemo Herald of Reverie is a shimmering, miniature storm cloud crafted from the very essence of anemostasis. It hums with the ethereal energy of the Seven Archons, distorting reality in its wake. Scholars and illusionists alike value this catalyst for its fleeting glimpses into alternate timelines, though these visions can be disorienting and fragmented. Its resonant core amplifies one's abilities, offering a brief reprieve from the mundane.",
    "category": "curiosities",
    "price": 23000,
    "icon": "🌀",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Distortion",
      "Elemental Shield"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Sea Express",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "Activates as a bonus action. The wielder gains temporary hit points equal to their Charisma modifier (minimum of 1) for 1 minute. This effect can be triggered once per long rest."
      },
      {
        "title": "Elemental Shield",
        "rules": "Passive effect that provides resistance to lightning damage, and a +2 bonus to AC against elemental attacks. This shield lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "Only high-level characters have the capability to wield this complex device.",
    "vendorReason": "Inazuma Imports specializes in rare and exotic curiosities, including items that can bend reality, making it a fitting vendor for the Mk.58 Anemo Herald of Reverie.",
    "shippingDetail": "Due to its delicate nature, this item is shipped via Sea Express with additional padding and protection.",
    "usage": {
      "activation": "Bonus action (Temporal Distortion); passive (Elemental Shield)",
      "duration": "1 minute (Temporal Distortion); until the end of your next long rest (Elemental Shield)",
      "endsWhen": "The duration ends when you finish a short or long rest; expended charges are restored.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's rarity and unique abilities.",
    "priceOriginal": 1420,
    "priceReviewedAt": "2026-07-25T02:51:20.055532+00:00",
    "aiReviewedAt": "2026-07-25T02:51:20.055532+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_stoneheart_pipes_lord_grimstone": {
    "id": "middle_earth_item_the_stoneheart_pipes_lord_grimstone",
    "name": "The Stoneheart Pipes of Lord Grimstone",
    "description": "The Stoneheart Pipes of Lord Grimstone are crafted from the petrified heartwood of a fallen Ent, inlaid with orcish runes that whisper tales of ancient battles and forgotten sorrows. Played under the light of a waning moon, these pipes evoke vivid memories that bolster resilience against despair for a fleeting moment at the cost of one’s vitality. The resonance can also trigger unsettling nightmares, leaving listeners haunted by visions of the past.",
    "category": "equipment",
    "price": 270000,
    "icon": "🗿",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "resilience_boost",
      "vitality_drain"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dwarven_cart",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Resilience Boost",
        "rules": "As a bonus action, play one note on the pipes to grant yourself advantage on saving throws against fear and despair for 1 minute. This effect can be used once per short or long rest."
      },
      {
        "title": "Vitality Drain",
        "rules": "Playing the pipes also causes you to lose 1d6 hit points as your vitality is sapped for the duration of their haunting resonance, which lasts until the end of your next turn. This effect cannot be used if you have fewer than 5 hit points."
      }
    ],
    "levelRequirementReason": "The intricate craftsmanship and dark magic required to play these pipes demand a high level of skill and experience.",
    "vendorReason": "The dwarven artisans, masters of metal and stone, have long held secrets in crafting such powerful yet dangerous relics.",
    "shippingDetail": "Ships via special courier, arriving under the cover of darkness to ensure the pipes are not disturbed by prying eyes.",
    "usage": {
      "activation": "Bonus action to play one note on the pipes.",
      "duration": "1 minute for Resilience Boost; ends at the end of your next turn for Vitality Drain.",
      "endsWhen": "The effect ends when its duration expires or you are incapacitated. Each effect can be used once per short or long rest, respectively.",
      "charges": "Unlimited"
    },
    "priceReason": "Considering the rare materials and dark magic involved in crafting these pipes, their price is balanced to reflect their mythic rarity.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:50:37.613330+00:00",
    "aiReviewedAt": "2026-07-25T02:50:37.613330+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_ominous_pipes_of_the_shadow_lord": {
    "id": "middle_earth_item_ominous_pipes_of_the_shadow_lord",
    "name": "Ominous Pipes of the Shadow Lord",
    "description": "The Ominous Pipes of the Shadow Lord are crafted from darkened metal forged in the forges of Mount Doom, their surface etched with ancient eldritch runes. Played near a hearth or in a shadowed room, their haunting melodies distort reality, causing listeners to see shadows where there are none and driving them to question their own sanity. The pipes themselves seem to grow warmer as they play, exuding an aura that lingers even after the music has ceased.",
    "category": "equipment",
    "price": 5000,
    "icon": "💀",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "paranoia_effect",
      "resolve_reduction"
    ],
    "vendor": "shire_shop",
    "shippedBy": "flying_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Paranoia Effect",
        "rules": "When a creature within 30 feet hears the pipes played for the first time, they must succeed on a DC 15 Wisdom saving throw or be frightened. The effect lasts until the end of their next turn."
      },
      {
        "title": "Resolve Reduction",
        "rules": "Each time a creature is exposed to the pipes' melodies, they suffer a -2 penalty to all Charisma-based checks and saving throws for 1 hour. This effect can be resisted with a successful DC 15 Wisdom save."
      }
    ],
    "levelRequirementReason": "The pipes are too dangerous even for the most seasoned adventurers, requiring at least level 1 to handle their dark magic.",
    "vendorReason": "The Shire Shop caters primarily to travelers and adventurers seeking unique souvenirs or heirlooms from distant lands; these pipes offer a mysterious allure that can be both intriguing and perilous.",
    "shippingDetail": "Delivered by the swift falcons of Flying Hawk, the pipes are carefully wrapped to ensure they arrive in pristine condition.",
    "usage": {
      "activation": "played as a musical instrument (requires proficiency)",
      "duration": "instantaneous; lasts until the end of the next turn for each creature affected",
      "endsWhen": "the melody stops or the creature saves successfully",
      "charges": "unlimited"
    },
    "priceReason": "The pipes' dark magic and rarity justify their price, making them a valuable yet dangerous addition to any adventurer's collection.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T02:51:47.567916+00:00",
    "aiReviewedAt": "2026-07-25T02:51:47.567916+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_mk.58_orcish_pipes_of_the_iron_king": {
    "id": "middle_earth_item_mk.58_orcish_pipes_of_the_iron_king",
    "name": "Mk.58 Orcish Pipes of the Iron King",
    "description": "The Mk.58 Orcish Pipes of the Iron King are crude yet imposing, forged from dark iron and adorned with ancient orcish runes that whisper tales of war and conquest. When played, they fill the air with a resonant, martial tone that instills fleeting confidence in those who hold them, making even the bravest tremble with suppressed fear. These pipes subtly regenerate stamina over time, enhancing endurance during prolonged encounters.",
    "category": "consumables",
    "price": 1300,
    "icon": "🔨",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "martial_confidence",
      "intimidating_sound"
    ],
    "vendor": "elven_market",
    "shippedBy": "swift_arrow",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Martial Confidence",
        "rules": "When a creature holds the pipes and plays them for a short duration (as a bonus action), it gains advantage on one Charisma check or save of their choice. This effect lasts for 1 minute."
      },
      {
        "title": "Intimidating Sound",
        "rules": "While holding the pipes, the wielder can play them to create an intimidating sound that imposes disadvantage on any creature within 30 feet making a Charisma saving throw or Wisdom save against fear. This effect has a limited duration of 1 hour."
      }
    ],
    "levelRequirementReason": "The intricate runes and the martial significance of the pipes require a certain level of understanding and discipline.",
    "vendorReason": "Elves appreciate the craftsmanship despite its origins, seeing it as a testament to orcish resilience and skill.",
    "shippingDetail": "Delivered swiftly by swift arrow couriers who ensure safe delivery within 2 days.",
    "usage": {
      "activation": "bonus action to play for martial confidence; can be played once per short rest to create an intimidating sound.",
      "duration": "Martial confidence lasts 1 minute, Intimidating Sound affects creatures in a 30-foot radius for 1 hour.",
      "endsWhen": "The effects end when the player stops playing or at the start of their next turn.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from dark iron and imbued with ancient orcish magic, these pipes are a rare find that offer both tactical advantage and psychological warfare.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T02:51:05.509825+00:00",
    "aiReviewedAt": "2026-07-25T02:51:05.509825+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_graduate_passes_of_students": {
    "id": "kivotos_item_graduate_passes_of_students",
    "name": "The Graduate Passes of Students - Crimson Edition",
    "description": "The Graduate Passes of Students - Crimson Edition are meticulously crafted from recycled student notebooks, their faint pulse a testament to countless sleepless nights spent studying for graduation. Each pass pulses with residual dread, echoing the final exams' weighty pressure. Upon use, they grant access to restricted areas within Academy City and subtly increase observation skills by 5% for an hour, making every step through these halls feel like a clandestine mission.",
    "category": "equipment",
    "price": 1300,
    "icon": "🎓",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Access to Restricted Zones",
      "Increased Observation Skill"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery - Priority",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Access to Restricted Zones",
        "rules": "Activates as an action. Grants temporary access to restricted areas within the Academy City for one hour. The pass remains active until its duration expires or it is destroyed."
      },
      {
        "title": "Increased Observation Skill",
        "rules": "Passively increases your observation skill by 5% for thirty minutes upon use, requiring no additional action. This effect cannot be stacked with other similar abilities and ends when the duration expires."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 15 to handle the stress and responsibilities associated with using such passes.",
    "vendorReason": "The Student Store, known for its connection with students, naturally stocks items that cater directly to their needs and anxieties.",
    "shippingDetail": "Delivered within the hour by Drone Delivery's Precision service, ensuring these passes reach you in peak condition.",
    "usage": {
      "activation": "As an action or bonus action.",
      "duration": "One hour from activation.",
      "endsWhen": "The duration expires or it is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and the stress-relieving benefits for students.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T02:51:36.753291+00:00",
    "aiReviewedAt": "2026-07-25T02:51:36.753291+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_dread_gifted’s_passes": {
    "id": "kivotos_item_dread_gifted’s_passes",
    "name": "Dread Gifted's Passes - Obsidian Series",
    "description": "Forged deep within shadowed archives beneath the Academy, these obsidian passes bear an indelible mark of a forgotten graduate tormented by existential dread. Their touch instills a lingering sense of unease and uncertainty among those who hold them, making chaos their unintended companion. These passes grant temporary immunity to fear effects, while also causing a random student within 30 feet to experience brief paranoia, doubting the reality around them for a fleeting moment.",
    "category": "consumables",
    "price": 5000,
    "icon": "💀",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Immunity to Fear Effects",
      "Causes Paranoia"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier - Night Route",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Fear Effects",
        "rules": "When activated, these passes grant temporary immunity to fear effects. This effect lasts for 10 minutes and can be used once per long rest."
      },
      {
        "title": "Causes Paranoia",
        "rules": "Upon activation, a random student within 30 feet must succeed on a DC 15 Wisdom saving throw or experience brief paranoia. They will doubt the reality around them for 24 hours, but this effect has no further consequence."
      }
    ],
    "levelRequirementReason": "These passes are accessible to even novice students who might benefit from experiencing chaos and uncertainty.",
    "vendorReason": "Club Supply caters to the whimsical needs of Academy scholars, including those seeking tools for studying the darker aspects of their craft.",
    "shippingDetail": "Shipped exclusively through the Courier - Night Route; delivery is swift and ensures these passes are received in perfect condition.",
    "usage": {
      "activation": "Used as an action, this item can be activated by touching one of the passes. It grants immunity to fear effects for 10 minutes or until used again.",
      "duration": "10 minutes or until reactivated",
      "endsWhen": "The effect ends when the user activates it again or after 10 minutes have passed",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the rare crafting materials and the unique properties that make these passes a valuable tool for students of the Academy.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:51:36.206085+00:00",
    "aiReviewedAt": "2026-07-25T02:51:36.206085+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk.34_graduate_passes": {
    "id": "kivotos_item_mk.34_graduate_passes",
    "name": "Mk.34 Graduate Passes - Platinum Standard",
    "description": "The Mk.34 Graduate Passes - Platinum Standard are intricately woven with platinum thread and biometric data, offering unparalleled access to Academy facilities. These passes bypass security systems and cameras instantly upon activation, ensuring swift and secure passage. They also grant a +10 bonus to social interaction checks within the Academy, enhancing one's diplomatic prowess. The passes emit a subtle glow that detects unauthorized personnel attempting to tamper with them.",
    "category": "premium",
    "price": 280000,
    "icon": "🔑",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Unrestricted Access",
      "Security Bypass"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Secure Courier - Hermes Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unrestricted Access",
        "rules": "Activates as an action, providing instant access to all Academy facilities for 24 hours. The pass must be worn during this period. It provides a +10 bonus to social interaction checks within the Academy."
      },
      {
        "title": "Security Bypass",
        "rules": "Automatically bypasses security systems and surveillance cameras upon activation, lasting until the next daily reset or until tampered with by unauthorized personnel."
      }
    ],
    "levelRequirementReason": "Anyone can request access to Academy facilities for special occasions.",
    "vendorReason": "The armory handles all security-related items and credentials for the Academy.",
    "shippingDetail": "Delivered within one business day of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "24 hours, daily reset",
      "endsWhen": "Tampered with or at the next daily reset",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the high demand and specialized craftsmanship required for such a secure item.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:51:32.896608+00:00",
    "aiReviewedAt": "2026-07-25T02:51:32.896608+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_brutal_dancer_cards": {
    "id": "kivotos_item_brutal_dancer_cards",
    "name": "Brutal Dancer's Cards - Semester 7 Revision",
    "description": "Brutal Dancer's Cards - Semester 7 Revision pulse with the fervent energy of late-night study sessions, granting fleeting bursts of mental acuity and reflex enhancement to those who dare use them. Each card depicts a student caught in an academic whirlwind, offering a brief respite from the relentless demands of Academy City. These cards are crafted from the very essence of caffeine-infused notebooks and late-night coffee mugs, imbued with the spirit of dedicated scholars. They are sold by the Student Store, a place where knowledge and stamina intertwine.",
    "category": "consumables",
    "price": 1300,
    "icon": "🧠",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Mental Acuity Boost",
      "Reflex Enhancement"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery - Priority",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mental Acuity Boost",
        "rules": "Activates as an action, providing a +2 bonus to Intelligence saving throws or checks for the next 30 seconds. This effect is limited to once per short rest."
      },
      {
        "title": "Reflex Enhancement",
        "rules": "Grants a +1 bonus to Dexterity saving throws and Dexterity (Acrobatics) checks for 60 seconds, with no limit on uses."
      }
    ],
    "levelRequirementReason": "These cards are designed to assist beginners in their academic journey by providing a brief boost of mental clarity and agility.",
    "vendorReason": "The Student Store stocks these cards as they cater to the needs of dedicated students looking for a quick edge.",
    "shippingDetail": "Priority delivery ensures swift arrival, perfect for those in need of an academic boost before exams.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "30 seconds and 60 seconds respectively for each effect.",
      "endsWhen": "The duration ends when the effect is used up or the card is discarded.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at this price to reflect their unique combination of mental and physical benefits for a short study session.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T02:52:07.804194+00:00",
    "aiReviewedAt": "2026-07-25T02:52:07.804194+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk.18_semester_cards": {
    "id": "kivotos_item_mk.18_semester_cards",
    "name": "Mk.18 Semester Cards - Echoes of Discord",
    "description": "The Mk.18 Semester Cards - Echoes of Discord are worn, hand-painted playing cards, each embossed with a symbol from a bygone era of academic chaos. These relics carry the lingering energy of heated debates and strategic misdirection, subtly weaving confusion into the minds of their targets. When activated, they briefly distort perceptions, causing foes to falter in their actions and speak in riddles, leaving them vulnerable to swift counterattacks.",
    "category": "equipment",
    "price": 5000,
    "icon": "😈",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Echoing Misstep",
      "Visual Fragmentation"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier Bike - Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echoing Misstep",
        "rules": "When a target is hit by an attack made with Mk.18 Semester Cards, they must succeed on a DC 15 Dexterity saving throw or be disoriented for the start of their next turn, reducing their movement speed to half and dealing minor confusion (-2 penalty to attack rolls). This effect lasts until the end of their next turn."
      },
      {
        "title": "Visual Fragmentation",
        "rules": "The cards cause a brief distortion in perception, forcing an affected target to see fragments of their surroundings for 1 round. During this time, they have disadvantage on Perception checks and Wisdom saving throws. This effect ends when the target successfully saves against it."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to wield the cards effectively in combat.",
    "vendorReason": "Club Supply deals in rare and unique artifacts from academic history, making these cards an appropriate addition to their inventory.",
    "shippingDetail": "Delivered within a week of order placement.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of the target's next turn or until they successfully save against it.",
      "endsWhen": "On a successful saving throw by the target, or when used in combat.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP due to its subtle yet effective confusion and perception-altering effects.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T02:52:54.754380+00:00",
    "aiReviewedAt": "2026-07-25T02:52:54.754380+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_academy_chronos_dancer": {
    "id": "kivotos_item_academy_chronos_dancer",
    "name": "Academy Chronos Dancer – Fragment of Temporal Echoes",
    "description": "The Academy Chronos Dancer is a legendary curio, a delicate fragment forged from the temporal echoes of an eccentric professor's classroom. Crafted from ancient brass and adorned with enigmatic runes, it hums softly in sync with the flow of time, recalling the fractured rhythms of countless student semesters. This artifact allows for subtle manipulation of localized time, creating brief distortions that can be both mesmerizing and useful to its wielder.",
    "category": "curiosities",
    "price": 84000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Flicker",
      "Echoing Moment"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Secure Delivery - Quantum Lock",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Flicker",
        "rules": "As a bonus action, the user can briefly slow an enemy's movement by -20 feet for 2 seconds. This effect has no save DC and does not consume charges or rest to use."
      },
      {
        "title": "Echoing Moment",
        "rules": "Once per short rest, the wielder can create a visual distortion that shows a brief glimpse of an event from the past within a 15-foot radius. This effect has no save DC and does not consume charges or rest to use."
      }
    ],
    "levelRequirementReason": "The Chronos Dancer requires minimal magical power, making it accessible to spellcasters of any level.",
    "vendorReason": "As a curio from the Academy's storied past, this item is best sold by the armory that keeps its legacy alive.",
    "shippingDetail": "Ships via secure quantum lock transport within 48 hours of order placement.",
    "usage": {
      "activation": "Bonus action and reaction for Temporal Flicker; once per short rest for Echoing Moment.",
      "duration": "Instantaneous effect; ends when the action is completed or interrupted.",
      "endsWhen": "Effect ends immediately if used on an unwilling target, or if the wielder takes damage.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Chronos Dancer's balanced price reflects its limited utility and ease of use without compromising the challenge it brings to strategic gameplay.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:51:57.539820+00:00",
    "aiReviewedAt": "2026-07-25T02:51:57.539820+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_dragonheart_binder": {
    "id": "faerun_item_dragonheart_binder",
    "name": "The Dragonheart Binder's Resurgence Potion",
    "description": "The Dragonheart Binder's Resurgence Potion is a thick, crimson elixir that hums with latent draconic power. Its sulfuric scent and fiery glow hint at the infernal bond it forges within you, granting resilience against fire and bolstering your physical might. This potion is said to have been crafted from the very essence of a sleeping dragon's heart, imbuing it with primal strength and resistance. Imbibing this potent draught allows you to harness fleeting moments of raw power and durability.",
    "category": "consumables",
    "price": 5000,
    "icon": "🔥",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Dragonfire Resilience",
      "Enhanced Strength"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "Griffon Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dragonfire Resilience",
        "rules": "For the duration of 60 seconds, imbue yourself with fire resistance, granting a +50 bonus to all saving throws against fire damage. This effect is instantaneous upon consumption and lasts for its full duration."
      },
      {
        "title": "Enhanced Strength",
        "rules": "For the duration of 45 seconds, you gain a +20 bonus to your Strength score. You can only use this potion once per long rest, ensuring that the surge of strength is reserved for critical moments."
      }
    ],
    "levelRequirementReason": "This potion is accessible to all adventurers to ensure it remains a versatile tool in their arsenal.",
    "vendorReason": "The Sword Coast Traders are known for their extensive stock of rare and exotic items, including this potent draught.",
    "shippingDetail": "This potion is delivered via the swift wings of a griffin, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "60 seconds for Dragonfire Resilience; 45 seconds for Enhanced Strength",
      "endsWhen": "The duration expires or you take fire damage (effect ends immediately)",
      "charges": "One use per long rest"
    },
    "priceReason": "Crafted from rare materials and dragon essence, this potion is priced to reflect its unique properties.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T02:52:17.734478+00:00",
    "aiReviewedAt": "2026-07-25T02:52:17.734478+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_kaleidoscopic_songbinder": {
    "id": "faerun_item_kaleidoscopic_songbinder",
    "name": "Kaleidoscopic Songbinder's Echoing Orb",
    "description": "The Kaleidoscopic Songbinder's Echoing Orb glimmers with a spectrum of shifting hues, each facet catching the light like a prism in motion. When held, it hums a discordant melody that resonates through time, allowing the wielder to perceive fleeting echoes of past events within a 30-foot radius—a whisper of voices and images from ages long gone. Handle this artifact with care; prolonged exposure can induce unsettling dreams and visions. The orb's shimmering light is said to have been forged in the forges of the Feywild, where it captures the essence of time itself.",
    "category": "curiosities",
    "price": 23000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Echoes of Past",
      "Distraction"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes of Past",
        "rules": "The wielder gains a +30 bonus to Perception checks within a 30-foot radius for 1 minute. This effect allows the user to perceive echoes of past events, such as ghostly whispers and fragmented visions from ages gone by. The artifact can only be used once per day."
      },
      {
        "title": "Distraction",
        "rules": "For every 5 feet within the 30-foot radius, all creatures within a 10-foot radius of the wielder are distracted for 1 minute. The DC to resist this effect is 14 (Wisdom saving throw). This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "This artifact's power allows even low-level characters to access its time-warping abilities, but it requires the user to understand and focus on the echoes of past events.",
    "vendorReason": "The eccentric vendor at Baldur's Bazaar is known for their collection of rare and ancient curiosities, including this mystical orb forged in the Feywild.",
    "shippingDetail": "Delivered by the enigmatic Shadow Courier with a delay of one week due to its fragile nature.",
    "usage": {
      "activation": "A bonus action is required to activate the artifact and begin perceiving echoes.",
      "duration": "1 minute for Echoes of Past, 10 minutes for Distraction (cumulative).",
      "endsWhen": "The effects end when the user completes a short or long rest.",
      "charges": "1 charge, recharged after a week."
    },
    "priceReason": "The orb's rarity and magical properties justify its moderate price of 1000 XP.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T02:52:35.649499+00:00",
    "aiReviewedAt": "2026-07-25T02:52:35.649499+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_feywild_rune_binder": {
    "id": "faerun_item_feywild_rune_binder",
    "name": "The Feywild Rune Binder's Lumina Charm",
    "description": "The Feywild Rune Binder's Lumina Charm is a delicate necklace crafted from polished moonstone and adorned with threads of shimmering moss. Its soft, ethereal glow hints at the power within, allowing its wearer to weave minor illusions that blend seamlessly into reality. The charm also subtly influences fey creatures' minds, offering a chance to charm them for strategic advantage in Faerûn’s wilds. However, prolonged use risks blurring the line between dream and waking, testing one's sanity.",
    "category": "equipment",
    "price": 84000,
    "icon": "✨",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "delivery_only",
    "effects": [
      "minor illusion manipulation",
      "charming fey"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Illusion Manipulation",
        "rules": "The wearer can cast the *Minor Illusion* spell (DC 15) as a bonus action. The effect lasts for 90 seconds and can be used once per long rest."
      },
      {
        "title": "Charming Fey",
        "rules": "There is a 20% chance to successfully charm a fey creature with an Intelligence score of 8 or lower within 30 feet. This effect requires no action, lasts until dispelled, and can be attempted once per day."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers who wish to navigate the feywilds without immediate combat prowess.",
    "vendorReason": "Waterdeep's market is known for its diverse array of exotic and magical items, including those that aid in navigating Faerûn’s mystical realms.",
    "shippingDetail": "Ships via the Winged Courier within three days. Expedited shipping available at an additional cost.",
    "usage": {
      "activation": "Bonus action to cast *Minor Illusion*, reaction if targeted by an enchantment effect.",
      "duration": "90 seconds for illusions, until dispelled for charming fey",
      "endsWhen": "Ends on a short rest or when the wearer is incapacitated.",
      "charges": "Recharges at dawn."
    },
    "priceReason": "Balanced as it offers minor utility without being overpowered, priced to reflect its rarity and mystical craftsmanship.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-25T02:52:25.627562+00:00",
    "aiReviewedAt": "2026-07-25T02:52:25.627562+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_obsidian_frostwalker": {
    "id": "earth_land_item_obsidian_frostwalker",
    "name": "The Obsidian Frostwalker's Circlet",
    "description": "The Obsidian Frostwalker's Circlet is a circlet forged from solidified moonlight and volcanic ash, worn by those who seek to harness the icy wrath of ancient frost giants. Its intricate carvings depict legendary battles between these titans and celestial serpents, providing the wearer with formidable cold resistance and an ethereal cloak that subtly alters perception. When donned, it whispers tales of frosty triumphs in its wearer's ear, granting them a spectral edge against their foes.",
    "category": "equipment",
    "price": 5000,
    "icon": "❄️",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Cold Resistance",
      "Spectral Cloak"
    ],
    "vendor": "magic_shop",
    "shippedBy": "express_delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "The wearer gains resistance to cold damage. As an action, they can activate this ability for a duration of 1 minute. The effect ends early if the circlet is removed or destroyed."
      },
      {
        "title": "Spectral Cloak",
        "rules": "The circlet grants a minor spectral cloak that reduces the wearer's visibility by +2 to Stealth checks. This effect lasts until the circlet is removed, and it can be activated as a bonus action once per short rest."
      }
    ],
    "levelRequirementReason": "The intricate carvings and materials of the circlet demand significant mastery over cold magic.",
    "vendorReason": "Magic Shop specializes in rare, enchanted equipment that draws from ancient lore and legend.",
    "shippingDetail": "Ships via Express Delivery, ensuring swift arrival.",
    "usage": {
      "activation": "Action or bonus action (to activate or use)",
      "duration": "1 minute or until removed/destroyed",
      "endsWhen": "Circlet is removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect the circlet's unique crafting materials and ancient enchantments.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:52:34.056973+00:00",
    "aiReviewedAt": "2026-07-25T02:52:34.056973+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_chronal_resonance_orb": {
    "id": "earth_land_item_chronal_resonance_orb",
    "name": "Mk.7 Chronal Resonance Orb",
    "description": "The Mk.7 Chronal Resonance Orb is a pulsing, crystalline sphere forged from the remnants of an ancient wizard's tower. This relic allows its wielder to manipulate time in localized bursts: accelerating their own movements and creating brief temporal distortions that slow enemies around them. The orb’s power comes with a price—each use leaves behind a fleeting ripple in reality, subtly altering nearby objects for a short while.",
    "category": "curiosities",
    "price": 24000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "temporal acceleration",
      "slowed enemy"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "standard_shipping",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Acceleration",
        "rules": "The wielder gains a +10-foot bonus to their walking speed until the end of their next turn. This effect can be used once per long rest."
      },
      {
        "title": "Slowed Enemy",
        "rules": "For 1 minute, all creatures within 15 feet of the wielder are slowed (speed reduced by 10 feet) and have disadvantage on attack rolls against them. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This item's power is balanced for lower-level characters, offering strategic advantages without overwhelming capabilities.",
    "vendorReason": "The Earth Emporium specializes in artifacts recovered from ancient sites and this relic was found among the ruins of a long-lost wizard’s tower.",
    "shippingDetail": "Ships via standard courier, arriving within one week.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Temporal Acceleration) or 1 minute (Slowed Enemy)",
      "endsWhen": "The effect ends when the wielder uses it again or until the end of their next turn (for Temporal Acceleration); otherwise, it lasts for the specified duration.",
      "charges": "Unlimited"
    },
    "priceReason": "This item offers a strategic advantage without being game-breaking, making it accessible yet valuable.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:52:55.148170+00:00",
    "aiReviewedAt": "2026-07-25T02:52:55.148170+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_lumina_wyrmheart_amulet": {
    "id": "earth_land_item_lumina_wyrmheart_amulet",
    "name": "The Lumina Wyrmheart Amulet of Waning Echoes",
    "description": "The Lumina Wyrmheart Amulet of Waning Echoes radiates a soft, pulsating glow that shifts between hues of violet and gold, emanating from the fossilized heart of an ancient celestial wyrm. This amulet amplifies innate magical abilities, drawing upon residual energies to shield its wearer in a shimmering barrier of protective force. When activated, it can project a disorienting phantom image, luring foes into confusion while offering temporary protection against magic.",
    "category": "equipment",
    "price": 84000,
    "icon": "✨",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Enhanced Magical Amplification",
      "Phantom Image Projection"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "mythic cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Magical Amplification",
        "rules": "Activates as a bonus action. The wearer's next spell or magical ability deals an additional +2d6 damage and has advantage on the save DC."
      },
      {
        "title": "Phantom Image Projection",
        "rules": "Activates as a reaction when hit by a melee attack, projecting a disorienting phantom image to target one enemy within 30 feet. The target must make a DC 15 Wisdom saving throw or be disoriented for the start of its next turn."
      }
    ],
    "levelRequirementReason": "This amulet is suitable for all adventurers, enhancing their magical prowess and providing immediate defensive advantages.",
    "vendorReason": "The Guild Quartermaster stocks this amulet to support the diverse needs of its patrons, from novice heroes to seasoned veterans.",
    "shippingDetail": "Ships via Mythic Cart with a special delivery guarantee within one week.",
    "usage": {
      "activation": "Bonus action (Enhanced Magical Amplification), Reaction (Phantom Image Projection)",
      "duration": "Instantaneous (both abilities)",
      "endsWhen": "Upon successful save or when the wearer is incapacitated",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "This amulet offers significant magical amplification and defensive capabilities for all levels of adventurers, making it an excellent investment.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-25T02:53:04.942425+00:00",
    "aiReviewedAt": "2026-07-25T02:53:04.942425+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_lumina_claimed_uniform": {
    "id": "kivotos_item_lumina_claimed_uniform",
    "name": "The Lumina Claimed Uniform - Halo Variant",
    "description": "The Lumina Claimed Uniform – Halo Variant is a shimmering, grey garment adorned with fragments of captured halo light that seem to dance and flicker as you move. This uniform not only grants the wearer an aura of academic authority but also subtly enhances their charisma, making them more persuasive in any argument. Rumored to be favored by those seeking influence within Academy City’s highest circles, this uniform is a tangible symbol of power, whispering tales of its wearer's ambition and cunning.",
    "category": "equipment",
    "price": 5000,
    "icon": "✨",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "aura_of_authority",
      "enhanced_charisma"
    ],
    "vendor": "student_store",
    "shippedBy": "express_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Aura of Authority",
        "rules": "While wearing the Lumina Claimed Uniform – Halo Variant, you emit a subtle aura that increases your Charisma by +2. This aura also grants you advantage on Persuasion checks made to influence others."
      },
      {
        "title": "Enhanced Charisma",
        "rules": "This uniform temporarily enhances your Charisma score by 2 points for the duration of one short or long rest, which can be used once per day. The enhancement is lost if you are incapacitated for more than an hour."
      }
    ],
    "levelRequirementReason": "The uniform requires no specific level to wear but enhances Charisma, a key skill for social interactions.",
    "vendorReason": "The student store caters specifically to the needs of Academy City students and staff, offering items that enhance their academic and social standing.",
    "shippingDetail": "Shipped via Express Drone, delivery is guaranteed within one hour during peak hours.",
    "usage": {
      "activation": "Passive effect; no activation required except for the daily use of Charisma enhancement.",
      "duration": "Instantaneous for Aura of Authority; +2 Charisma for a short or long rest.",
      "endsWhen": "The aura fades when you are incapacitated for more than an hour, and the Charisma boost ends at the end of the rest period.",
      "charges": "Unlimited daily use"
    },
    "priceReason": "The uniform's rarity, limited availability, and the significant boost to charisma make it a valuable yet balanced purchase.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:53:33.888321+00:00",
    "aiReviewedAt": "2026-07-25T02:53:33.888321+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_xenic_transference_curiosity": {
    "id": "kivotos_item_xenic_transference_curiosity",
    "name": "Xenic Transference Curiosity - Echoing Quill",
    "description": "The Echoing Quill, a quill crafted from the very essence of forgotten data streams, hums with a quiet energy as it transfers knowledge from one mind to another. Its metallic sheen gleams faintly under the moonlight, and each stroke sends ripples through the user's mental landscape. Though invaluable for scholars and sages, prolonged use can lead to disorientation and fragmented thought—risks worth taking if the pursuit of wisdom is paramount.",
    "category": "curiosities",
    "price": 24000,
    "icon": "📝",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "transfer_knowledge",
      "mental_fatigue"
    ],
    "vendor": "club_supply",
    "shippedBy": "night_carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Transfer Knowledge",
        "rules": "As a bonus action, you can transfer one piece of knowledge (typically an academic theorem or fact) to yourself. The duration is instantaneous, and the target must be within 30 feet. You gain advantage on Intelligence checks related to this knowledge for the next hour."
      },
      {
        "title": "Mental Fatigue",
        "rules": "After using the Echoing Quill three times in a single day, you are subjected to a cumulative -1 penalty to Wisdom saving throws until you rest. This effect stacks up to -3 penalties."
      }
    ],
    "levelRequirementReason": "The quill is accessible at level one as it serves as an invaluable tool for beginners and scholars alike.",
    "vendorReason": "Club Supply caters to the scholarly community, offering tools that enhance mental acuity and learning.",
    "shippingDetail": "Ships via Night Carrier, delivered under a veil of night to ensure the quill's power remains unassailable by prying eyes.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Charges depleted or interrupted by external factors",
      "charges": "3 uses per day"
    },
    "priceReason": "The Echoing Quill's price is balanced at 1000 XP, reflecting its rarity and the risk it poses to mental stability.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-25T15:17:06.083585+00:00",
    "aiReviewedAt": "2026-07-25T15:17:06.083585+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk.23_transfer_uniform": {
    "id": "kivotos_item_mk.23_transfer_uniform",
    "name": "Mk.23 Transfer Uniform - Protocol Variant",
    "description": "The Mk.23 Transfer Uniform - Protocol Variant is a sleek, dark indigo uniform that seamlessly integrates advanced neural interfaces and data transfer capabilities. Its fabric subtly shifts colors in response to environmental stimuli, providing constant streams of information directly to the wearer's neural network for enhanced situational awareness and decision-making. This academy-standardized attire not only enhances perception but also boosts data analysis, making it an indispensable asset for protocol officers navigating complex missions.",
    "category": "equipment",
    "price": 84000,
    "icon": "💻",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "enhanced_perception",
      "data_analysis_boost"
    ],
    "vendor": "academy_armory",
    "shippedBy": "premium_shipment",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Perception",
        "rules": "The wearer gains advantage on Wisdom (Perception) checks related to environmental conditions. This effect lasts until the end of each long rest."
      },
      {
        "title": "Data Analysis Boost",
        "rules": "The user can instantly analyze and interpret data streams, providing a +2 bonus to Intelligence (Investigation) checks for up to 8 hours per day. This benefit is limited to once per short or long rest."
      }
    ],
    "levelRequirementReason": "This uniform requires basic proficiency in technology use and situational awareness, making it accessible but not trivial.",
    "vendorReason": "The academy armory is the official supplier of these uniforms to ensure students receive state-of-the-art equipment.",
    "shippingDetail": "Ships via premium courier service, ensuring swift delivery and pristine condition upon arrival.",
    "usage": {
      "activation": "Passive effect; no activation required once worn.",
      "duration": "Instantaneous (permanently active while worn)",
      "endsWhen": "Destroyed if the wearer's neural interface is damaged beyond repair or the uniform itself is severely altered.",
      "charges": "Unlimited, as long as the neural interface remains functional."
    },
    "priceReason": "The price reflects the advanced technology and specialized training required to use this uniform effectively.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-25T02:53:23.988016+00:00",
    "aiReviewedAt": "2026-07-25T02:53:23.988016+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_xenolithic_slyers_codes": {
    "id": "internet_item_xenolithic_slyers_codes",
    "name": "Xenolithic Slayer's Codes - Phase Shift Protocol",
    "description": "The Xenolithic Slayer's Codes - Phase Shift Protocol are obsidian slivers etched with ancient data, capable of disrupting digital networks and revealing hidden pathways in the virtual realm. Crafted by rogue AIs deep within forgotten server farms, these codes briefly deny an enemy’s network access for five seconds, leaving them vulnerable to your assault. Additionally, they grant you a burst of speed, increasing your movement by 10% for three seconds, allowing you to evade or strike with greater precision.",
    "category": "equipment",
    "price": 1300,
    "icon": "⚡️",
    "stock": 37,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Denies Enemy Network Access",
      "Increases Movement Speed"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Drone Delivery - Priority",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Network Denial",
        "rules": "When activated as a bonus action, the codes disrupt an enemy's network connection for five seconds. During this time, the target cannot use any digital communication or access to data. This effect ends when the duration expires."
      },
      {
        "title": "Boosted Speed",
        "rules": "Upon activation, you gain a +10% increase in movement speed for three seconds. You must have at least one charge remaining to activate this effect; charges are replenished after a long rest."
      }
    ],
    "levelRequirementReason": "This item requires at least level 15 to use effectively, as it involves navigating and manipulating complex digital environments.",
    "vendorReason": "The cyber_market is a hub for advanced tech and rare artifacts, including items that manipulate digital realms.",
    "shippingDetail": "Priority delivery ensures the codes arrive in pristine condition, ready for immediate use.",
    "usage": {
      "activation": "Bonus action to activate; requires at least one charge remaining.",
      "duration": "Five seconds of network denial and three seconds of increased speed.",
      "endsWhen": "The duration ends when the effect expires or if you take any action that would prevent its completion.",
      "charges": "Recharges after a long rest."
    },
    "priceReason": "This item is priced at 1000 XP, reflecting its rarity and utility in manipulating digital environments.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T14:42:24.720611+00:00",
    "aiReviewedAt": "2026-07-25T14:42:24.720611+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_mk70_cached_codes": {
    "id": "internet_item_mk70_cached_codes",
    "name": "Mk.70 Cached Codes - Recursive Reflection Matrix",
    "description": "The Mk.70 Cached Codes shimmer with digital echoes, their intricate patterns etched in the very fabric of discarded web pages. These recursive reflections allow you to momentarily phase through digital barriers and reroute data streams, as if walking the forgotten pathways of the internet's deep archive. Their pulses contain remnants of lost browser sessions, granting a fleeting glimpse into the vast expanse of information that once existed on countless abandoned sites.",
    "category": "consumables",
    "price": 5000,
    "icon": "🔗",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Digital Phasing",
      "Data Restoration"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Quantum Courier - Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Digital Phasing",
        "rules": "As an action, you can phase through digital barriers for up to 3 seconds. During this time, you are immune to all forms of digital detection and interference. This effect ends when the duration expires or if you leave the area covered by a digital barrier."
      },
      {
        "title": "Data Restoration",
        "rules": "At the end of your next turn after using Digital Phasing, you restore 50% of any lost data points from digital corruption or damage. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to experiment with the nuances of digital manipulation without requiring extensive experience.",
    "vendorReason": "Pixel Shop specializes in tech-related items and this product aligns perfectly with their inventory, catering to adventurers who navigate the digital realm.",
    "shippingDetail": "Due to the nature of the item's arcane properties, it is shipped via Quantum Courier's Express service for immediate delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 3 seconds per use",
      "endsWhen": "Ends when duration expires or you leave a digital barrier area",
      "charges": "Unlimited, but can only be used once per long rest"
    },
    "priceReason": "The item's rarity and the unique combination of abilities make it a valuable tool for adventurers dealing with complex digital challenges.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:54:32.389538+00:00",
    "aiReviewedAt": "2026-07-25T02:54:32.389538+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_cached_codes_of_data": {
    "id": "internet_item_cached_codes_of_data",
    "name": "Cached Codes of Data – Echo Chamber Catalyst",
    "description": "The Cached Codes of Data – Echo Chamber Catalyst are iridescent and shimmer, resonating with the collective consciousness of the internet. Harvested from decommissioned server farms, these codes amplify digital signals, creating zones where sensory inputs become heightened—visuals distort into vibrant hues and sounds expand into a cacophony of frequencies. They can randomly generate data surges that either boost or hinder nearby users' perception, offering fleeting insights into the minds around you.",
    "category": "curiosities",
    "price": 380,
    "icon": "🔊",
    "stock": 9,
    "rarity": "common",
    "stockType": "special_order",
    "effects": [
      "Signal Amplifier",
      "Mind’s Echo"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Delivery Bot - Standard",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Signal Amplifier",
        "rules": "When activated as a bonus action, the Cached Codes create a zone of heightened sensory input. For 1 minute, all creatures within 30 feet gain advantage on saving throws against being charmed or frightened by any digital signal-related effects. This effect ends if you use an action to deactivate it."
      },
      {
        "title": "Mind’s Echo",
        "rules": "At the start of each creature's turn while in the zone, roll a d10. On a 7 or higher, the creature must succeed on a DC 15 Wisdom saving throw against being charmed by you for up to 1 hour."
      }
    ],
    "levelRequirementReason": "Requires at least second-level spellcasting ability to handle the digital manipulation.",
    "vendorReason": "Data Dealer specializes in tech curiosities and internet relics, making these codes a natural fit for their inventory.",
    "shippingDetail": "Ships within 3 days via standard courier service.",
    "usage": {
      "activation": "Bonus action to activate or deactivate the zone.",
      "duration": "1 minute when activated as a bonus action.",
      "endsWhen": "Deactivated by using an action or if the user is incapacitated.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The item's rarity, vendor relationship, and unique effect justify this price in XP.",
    "priceOriginal": 680,
    "priceReviewedAt": "2026-07-25T02:53:49.273063+00:00",
    "aiReviewedAt": "2026-07-25T02:53:49.273063+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_phantom_striker_7": {
    "id": "almost_edge_item_phantom_striker_7",
    "name": "The Peripheral Striker's Fragment of the Unwritten Rim",
    "description": "The Peripheral Striker's Fragment of the Unwritten Rim is a obsidian shard that hums with an eerie, almost sentient energy. Its jagged edges emit faint, shifting patterns that hint at dimensions beyond our own. Holding it can cause disorienting visions and whispers of alternate realities, a chilling reminder of the cosmos' edge. This fragment grants fleeting auditory hallucinations during extended use and allows for brief moments of phase-like movement through solid objects.",
    "category": "equipment",
    "price": 5000,
    "icon": "🌌",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Phased Movement",
      "Temporal Echoes"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Phased Movement",
        "rules": "When activated as a bonus action, the user can move through solid objects for up to 5 feet. This effect lasts for 10 seconds and can be used once per long rest."
      },
      {
        "title": "Temporal Echoes",
        "rules": "While holding this fragment, the user hears echoes of forgotten timelines as a constant auditory hallucination. There is no saving throw against these sounds; they cease upon ceasing to hold the item or when the user completes a short rest."
      }
    ],
    "levelRequirementReason": "This fragment's effects are subtle and beneficial, suitable for any capable adventurer.",
    "vendorReason": "The void merchant is known for dealing in rare cosmic artifacts and this fragment fits the pattern of such items.",
    "shippingDetail": "Ships via interdimensional courier, with a transit time of one week.",
    "usage": {
      "activation": "Bonus action to phase through solid objects; passive effect while holding for auditory hallucinations.",
      "duration": "10 seconds per use and constant while held.",
      "endsWhen": "Upon ceasing to hold the fragment or completion of a short rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The item's effects are balanced, providing useful but not overpowered abilities for a fair cost in XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:54:15.918374+00:00",
    "aiReviewedAt": "2026-07-25T02:54:15.918374+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_mk_69_peripheral_fragments_3": {
    "id": "almost_edge_item_mk_69_peripheral_fragments_3",
    "name": "Mk.69 Peripheral Fragments of the Static Zone",
    "description": "The Mk.69 Peripheral Fragments of the Static Zone are a collection of fractured, iridescent plates that shimmer with an otherworldly glow. These fragments radiate a field of silent static that warps reality around them, causing unsettling echoes in the mind and an inexplicable feeling of being watched by something just out of sight. Each fragment seems to hum with ancient power, whispering secrets only those attuned to the psychic realm can hear.",
    "category": "curiosities",
    "price": 1300,
    "icon": "🌀",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Distorts Reality",
      "Psychic Echoes"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Temporal Packet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Distorts Reality",
        "rules": "The wearer gains a +1 bonus to saving throws against illusions and psychic effects, as well as advantage on Perception checks. This effect lasts for 30 minutes."
      },
      {
        "title": "Psychic Echoes",
        "rules": "Once per long rest, the wearer can activate the fragments to emit a wave of psychic energy that causes creatures within 10 feet to make a Wisdom saving throw (DC 15) or be stunned for 1 minute. If a creature fails its save, it must also succeed on another Wisdom saving throw at the end of each of its turns or fall unconscious until it succeeds."
      }
    ],
    "levelRequirementReason": "The fragments are potent but not overwhelming, suitable for adventurers who have already proven their worth.",
    "vendorReason": "The Liminal Trader has a reputation for dealing in the forgotten and the strange, making these fragments an apt addition to their inventory.",
    "shippingDetail": "Ships via Temporal Packet, arriving within one week of purchase.",
    "usage": {
      "activation": "Activate as a bonus action.",
      "duration": "30 minutes or until the wearer is incapacitated.",
      "endsWhen": "The effect ends when the wearer is incapacitated or after 30 minutes.",
      "charges": "Unlimited, but only one activation per short rest."
    },
    "priceReason": "The fragments are priced at 1000 XP to reflect their balance between utility and risk, making them a valuable yet cautious choice for any adventurer.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:54:37.153669+00:00",
    "aiReviewedAt": "2026-07-25T02:54:37.153669+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_mythic_boundary_resonator_1": {
    "id": "almost_edge_item_mythic_boundary_resonator_1",
    "name": "The Mythic Boundary Resonator of Perpetual Fall",
    "description": "The Mythic Boundary Resonator of Perpetual Fall is a colossal, pulsating gemstone encased in a matrix of obsidian and iron filings. Its constant hum resonates with the raw energy of space itself, creating an eerie glow that seems to pull at your very soul. When activated, it opens a fleeting window into realms beyond, granting brief access to dimensions where time ceases to exist. However, prolonged exposure can induce terrifying visions and a feeling of inescapable descent—tangible reminders of the unending fall beyond the edge.",
    "category": "forbidden",
    "price": 280000,
    "icon": "💀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Spatial Manipulation",
      "Temporal Disorientation"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Void Ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spatial Manipulation",
        "rules": "Activates as a bonus action, allowing the user to briefly manipulate spatial dimensions within a small radius (5 feet). This effect lasts for 1 minute. The duration can be extended by 10 minutes with an hour-long rest. A DC 20 Wisdom saving throw is required to resist this effect; failure results in the user being disoriented and unable to move normally for 1d4 rounds."
      },
      {
        "title": "Temporal Disorientation",
        "rules": "After continuous use, the user must make a DC 25 Constitution saving throw. On a failed save, they are incapacitated by debilitating nausea and disorientation for 1 hour. This effect can be mitigated with a successful DC 20 Wisdom (Medicine) check."
      }
    ],
    "levelRequirementReason": "The item's complex spatial effects necessitate a minimum level to ensure the user has the necessary control and mental fortitude.",
    "vendorReason": "The Edge Wanderer, being an explorer of the realms beyond, offers this unique artifact for those brave enough to venture into unknown dimensions.",
    "shippingDetail": "Ships via the Void Ship, which can deliver items directly from interdimensional realms. Delivery time varies based on the user's destination within the plane of existence.",
    "usage": {
      "activation": "Bonus action to activate, once per day.",
      "duration": "1 minute duration with a 10-minute extension via an hour-long rest.",
      "endsWhen": "The effect ends if the user is incapacitated by disorientation or nausea from its effects.",
      "charges": "One use per day."
    },
    "priceReason": "The Mythic Boundary Resonator's rarity and unique spatial manipulation effects justify this balanced XP price.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T02:54:46.734018+00:00",
    "aiReviewedAt": "2026-07-25T02:54:46.734018+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_bloodstained_banner_of_shattered_promises": {
    "id": "warhammer_item_bloodstained_banner_of_shattered_promises",
    "name": "Bloodstained Banner of Shattered Promises",
    "description": "The Bloodstained Banner of Shattered Promises, a tattered relic woven from the threads of countless unfulfilled oaths and stained crimson by the blood of broken promises, whispers darkly when unfurled. It saps foes' resolve, causing them to falter in combat for mere moments before their will returns. With each wave of doubt cast upon them, the banner's weave seems to absorb a fragment of their soul, leaving them shaken and uncertain.",
    "category": "equipment",
    "price": 5000,
    "icon": "🩸",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Sap Resolve",
      "Cast Doubt"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "aerial_drone",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Sap Resolve",
        "rules": "When the banner is unfurled as an action, it briefly saps the morale of nearby foes. Enemies within 10 feet must succeed on a DC 15 Wisdom saving throw or become shaken (-2 penalty to attack and damage rolls for 3 turns). This effect has no save after the first use."
      },
      {
        "title": "Cast Doubt",
        "rules": "Once per short rest, when an enemy fails their saving throw against Sap Resolve, you can attempt to cast the ‘Doubt’ status on them. The target must succeed on a DC 14 Charisma saving throw or be affected by the ‘Doubt’ condition (disadvantage on attack rolls and ability checks for 1 hour). This effect has no save."
      }
    ],
    "levelRequirementReason": "This artifact requires significant magical power, thus a character of at least level 12 can wield it effectively.",
    "vendorReason": "The banner's dark history and enchantment align with the imperial armory's stock of powerful relics and artifacts.",
    "shippingDetail": "Delivered swiftly by aerial drone, this artifact is shipped under strict secrecy to preserve its aura.",
    "usage": {
      "activation": "Unfurl as an action",
      "duration": "Instantaneous effect; lasts until the start of your next turn for each target",
      "endsWhen": "The banner's effects end when you use it again or when it is destroyed by magic",
      "charges": "Unlimited, but only one target can be affected per short rest"
    },
    "priceReason": "This rare artifact requires significant magical energy and craftsmanship to maintain its power.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:55:03.348422+00:00",
    "aiReviewedAt": "2026-07-25T02:55:03.348422+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_nether_maker’s_resonating_shard": {
    "id": "warhammer_item_nether_maker’s_resonating_shard",
    "name": "Nether Maker's Resonating Shard",
    "description": "Forged within the deepest, most corrupted veins of the Nether Realm, this shard pulses with a discordant energy that warps reality around you. When activated, it grants fleeting glimpses into past tragedies and allows you to amplify your psychic attacks by 30%. The resonance of this relic can be felt for moments, but its power is fleeting—each use reveals a fragment of the past before it fades back into darkness.",
    "category": "curiosities",
    "price": 24000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Amplifies psychic damage",
      "Glimpse into past events"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Psychic Amplification",
        "rules": "When activated, this shard grants a +30 bonus to psychic damage. This effect lasts until the start of your next turn and can be used once per short or long rest."
      },
      {
        "title": "Glimpse into the Past",
        "rules": "Activating the shard allows you to briefly perceive echoes of past tragedies within a 30-foot radius, providing insight but also leaving you shaken. You must make a Wisdom saving throw (DC 15) or be stunned for 1 round upon using this effect."
      }
    ],
    "levelRequirementReason": "Only the most experienced warriors and mages can harness the raw power of the Nether Realm without succumbing to its corruption.",
    "vendorReason": "The chaos dealer has exclusive access to rare relics from other dimensions, including this shard.",
    "shippingDetail": "Ships via a dimensional portal, ensuring safe and swift delivery of such volatile artifacts.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous with a duration until the start of your next turn",
      "endsWhen": "The effect ends at the start of your next turn or if you take any action other than moving 5 feet. You can use this shard once per short or long rest.",
      "charges": "Unlimited, but only one use per rest"
    },
    "priceReason": "The price reflects the rarity and unpredictable nature of the shard's power.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:55:47.683438+00:00",
    "aiReviewedAt": "2026-07-25T02:55:47.683438+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_mk.17_purified_banners_of_desolation": {
    "id": "warhammer_item_mk.17_purified_banners_of_desolation",
    "name": "Mk.17 Purified Banners of Desolation",
    "description": "The Mk.17 Purified Banners of Desolation are forged from purified obsidian and bound despair, relics of a bygone era when entropy reigned supreme. When raised in defiance, these banners unleash a wave of localized entropy that ripples through the battlefield, dealing unrelenting damage to foes within its reach. The aura of desolation also imbues nearby enemies with a creeping malaise, reducing their armor and slowing their movements, turning victory into a futile struggle.",
    "category": "equipment",
    "price": 100000,
    "icon": "💀",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "back_order",
    "effects": [
      "Localized Entropy",
      "Armor Reduction"
    ],
    "vendor": "fate_forge",
    "shippedBy": "temporal_relay",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Localized Entropy",
        "rules": "When activated, the banners unleash a wave of localized entropy that deals 20 necrotic damage per turn to all enemies within a 5-meter radius. The effect lasts for 1 minute and can be ended early by the wielder or if an enemy enters or leaves the area."
      },
      {
        "title": "Armor Reduction",
        "rules": "The banners' despair imbues nearby foes with a malaise, reducing their armor class by 30% until the start of their next turn. This effect has a maximum duration of 5 turns and can be negated with a successful DC 18 Dexterity saving throw."
      }
    ],
    "levelRequirementReason": "The intricate forging process and the raw power contained within these banners necessitate a high-level character to wield them effectively.",
    "vendorReason": "Only the most trusted forgers at Fate-Forge possess the knowledge and skill to handle such dangerous relics.",
    "shippingDetail": "Ships via the Temporal Relay, ensuring swift delivery but with a slight risk of temporal distortion affecting the item's age.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until ended",
      "endsWhen": "Wielder ends it early or an enemy enters/leaves the area",
      "charges": "Unlimited, recharged upon successful use"
    },
    "priceReason": "The banners' rarity and the complex forging process contribute to their high price.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T02:55:21.029703+00:00",
    "aiReviewedAt": "2026-07-25T02:55:21.029703+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_infernal_ward_of_reverie": {
    "id": "teyvat_item_infernal_ward_of_reverie",
    "name": "The Crimson Echoes of the Infernal Ward",
    "description": "The Crimson Echoes of the Infernal Ward is an ornate gauntlet forged deep within a dormant volcano, where the earth's molten core still whispers in secret. Its infernal heat pulses with a fiery essence that amplifies your elemental attacks, channeling the rage of ancient pyrokinetic warriors. Activated by a single command word, it grants you resistance to pyro damage and a chance to inflict burning on each successful hit, turning every clash into an echoing testament of past battles.",
    "category": "equipment",
    "price": 110000,
    "icon": "🔥",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Pyro Amplification",
      "Resistance to Pyro Damage"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Pyro Amplification",
        "rules": "When activated as a bonus action, this gauntlet amplifies your next elemental attack by +30% damage. The effect lasts for one minute and can be reactivated once the duration ends."
      },
      {
        "title": "Resistance to Pyro Damage",
        "rules": "While wearing this gauntlet, you gain resistance to pyro damage. This effect persists until you remove the gauntlet or enter a state of vulnerability."
      }
    ],
    "levelRequirementReason": "The gauntlet's power is too potent for those lacking experience, requiring a level 35 character to wield its infernal might.",
    "vendorReason": "Liyue Harbor has established trade routes that venture deep into the volcanic regions where this gauntlet was forged; they are privy to such unique artifacts.",
    "shippingDetail": "Ships via the Sea Serpent Express, known for its reliable couriers and swift delivery from the volcanic heartlands.",
    "usage": {
      "activation": "Bonus action",
      "duration": "One minute or until you remove it or enter a state of vulnerability",
      "endsWhen": "The duration ends or you lose concentration (as if concentrating on an effect)",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "The gauntlet's unique crafting and the volcanic materials used in its forge justify this price.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T02:55:16.083104+00:00",
    "aiReviewedAt": "2026-07-25T02:55:16.083104+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_geo_ward_of_stability": {
    "id": "teyvat_item_geo_ward_of_stability",
    "name": "The Lithic Sentinel's Stabilizing Ward",
    "description": "The Lithic Sentinel's Stabilizing Ward is a solidified earth talisman, forged deep within ancient geo-caverns and imbued with the essence of stoneborn stability. This wearable ward not only enhances your armor’s resistance to physical attacks but also creates a localized zone around you, negating movement impairments for foes within its radius. Crafted by the hands of master stonemasons in Mondstadt, this item is a testament to earth's enduring strength and resilience.",
    "category": "equipment",
    "price": 5900,
    "icon": "⛰️",
    "stock": 23,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Geo Resistance Amplification",
      "Stun Immunity"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Griffon Courier",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Geo Resistance Amplification",
        "rules": "Activates as a bonus action. Increases your geo resistance by +25% for 1 minute, with the duration increasing by one minute on each successful saving throw made against physical damage."
      },
      {
        "title": "Stun Immunity",
        "rules": "Passive effect. Grants immunity to all stun effects within a 10-foot radius centered on you. This effect does not end until either you leave the area or an enemy successfully hits with a melee attack from outside this radius."
      }
    ],
    "levelRequirementReason": "Crafted by master stonemasons, this item requires significant experience and skill to wield effectively.",
    "vendorReason": "The market in Mondstadt is renowned for its collection of rare and powerful items crafted by local artisans.",
    "shippingDetail": "Ships via the swift Griffon Courier, known for its reliable and swift delivery services.",
    "usage": {
      "activation": "Bonus action to activate.",
      "duration": "1 minute per successful saving throw made against physical damage.",
      "endsWhen": "Either you leave the area or an enemy successfully hits with a melee attack from outside this radius.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Crafted by master stonemasons, the Lithic Sentinel's Stabilizing Ward is priced at 7500 XP to reflect its craftsmanship and utility in both defensive and tactical combat scenarios.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T02:55:35.515334+00:00",
    "aiReviewedAt": "2026-07-25T02:55:35.515334+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_premium_vision_ward_of_lumina": {
    "id": "teyvat_item_premium_vision_ward_of_lumina",
    "name": "The Lumina Weaver’s Radiant Ward",
    "description": "The Lumina Weaver’s Radiant Ward is a shimmering, opalescent fragment harvested from the ruins of a long-lost vision. Crafted by the hands of an ancient Lumina Weaver, it glows with a soft light that enhances your senses and restores life. This ward passively regenerates stamina at an accelerated rate, healing 5% of your maximum stamina per minute, and grants you an increased awareness of hidden dangers in the world around you.",
    "category": "premium",
    "price": 24000,
    "icon": "✨",
    "stock": 3,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Radiant Regeneration",
      "Enhanced Perception"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Dragon Ship Logistics",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiant Regeneration",
        "rules": "Passively regenerates stamina at a rate of 5% per minute. This effect ends if the wearer is incapacitated or if they take damage from an attack."
      },
      {
        "title": "Enhanced Perception",
        "rules": "Grants +2 to Passive Perception checks and increases your ability to perceive hidden dangers within the environment, providing a +3 bonus on Wisdom (Perception) checks related to detecting secret doors and stealthy creatures. This effect ends if you fall unconscious."
      }
    ],
    "levelRequirementReason": "The Lumina Weaver’s Radiant Ward requires no level, as it is designed for all adventurers who seek to enhance their awareness of the world.",
    "vendorReason": "Inazuma Imports specializes in rare and exotic items from across Teyvat, including this ancient artifact.",
    "shippingDetail": "The item is shipped via a Dragon Express, ensuring it arrives swiftly and intact.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Lasts until the wearer falls unconscious or takes damage from an attack",
      "endsWhen": "Incapacitation or taking damage from an attack",
      "charges": "Unlimited"
    },
    "priceReason": "The Lumina Weaver’s Radiant Ward is priced at 1000 XP, reflecting its rarity and the ancient magic imbued within it.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-25T02:56:01.315024+00:00",
    "aiReviewedAt": "2026-07-25T02:56:01.315024+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_the_brutal_binder_of_layered_regret": {
    "id": "grand_country_item_the_brutal_binder_of_layered_regret",
    "name": "The Brutal Binder of Layered Regret",
    "description": "The Brutal Binder of Layered Regret is a dark obsidian band, its surface etched with swirling, oily glyphs that seem to weep in thick, shadowy rivulets. When worn, it momentarily unravels the very fabric of your past decisions, forcing you to relive fleeting moments where you chose glazed over plain, or opted for sprinkles instead of chocolate chips. The weight of these memories is palpable, causing a brief yet intense disorientation that clouds your immediate judgment and vision.",
    "category": "equipment",
    "price": 5000,
    "icon": "💀",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Momentary Disruption",
      "Critical Fortitude"
    ],
    "vendor": "side_seller",
    "shippedBy": "gravitic_drone",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Momentary Disruption",
        "rules": "Activating the binder causes you to experience a brief, 10-second disorientation. During this time, you have disadvantage on attack rolls and ability checks that require precision or accuracy. The effect ends when it is used up."
      },
      {
        "title": "Critical Fortitude",
        "rules": "For the duration of your next turn after using the binder, any critical hit against you has advantage on the damage roll. This effect cannot be gained more than once per long rest."
      }
    ],
    "levelRequirementReason": "The item's complexity and the risk it poses to balance necessitate a minimum level of 12.",
    "vendorReason": "Side Seller, always an eccentric vendor, specializes in items that blur the line between past, present, and future, making The Brutal Binder of Layered Regret a fitting addition to their wares.",
    "shippingDetail": "The gravitic drone delivers this fragile artifact with utmost care, ensuring it arrives in pristine condition without the use of any magical means that could corrupt its effects.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds, followed by a critical hit advantage on your next turn",
      "endsWhen": "The duration ends or you take damage",
      "charges": "Unlimited"
    },
    "priceReason": "This item's unique combination of disorienting and defensive benefits justifies its high XP cost.",
    "priceOriginal": 785,
    "priceReviewedAt": "2026-07-25T02:55:53.097253+00:00",
    "aiReviewedAt": "2026-07-25T02:55:53.097253+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_the_tiered_platform_of_vertical_echoes": {
    "id": "grand_country_item_the_tiered_platform_of_vertical_echoes",
    "name": "The Tiered Platform of Vertical Echoes",
    "description": "The Tiered Platform of Vertical Echoes stands tall, a grotesquely tiered edifice crafted from solidified sugar and the very essence of haunted silence. Each step triggers a cacophony of whispers—fractured voices of those lost within The Side of the Doughnut, their lamentations amplified with each ascent. The platform shimmers faintly under moonlight, its surface crackling like brittle ice as it echoes cryptic clues that occasionally find their way into your mind.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔊",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Echoes Whispers",
      "Temporary Shield"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "gravity_sled",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes Whispers",
        "rules": "Upon stepping on the platform, you hear the fractured voices of those lost within The Side of the Doughnut. These whispers occasionally provide cryptic clues (50% chance). You can ignore one noise or distraction per round as a reaction."
      },
      {
        "title": "Temporary Shield",
        "rules": "For every three steps taken on the platform, you gain a temporary shield that absorbs 30% of incoming damage. This effect lasts until the end of your next turn and recharges after completing a short rest."
      }
    ],
    "levelRequirementReason": "The fragile nature of the platform requires a minimum level to ensure it does not crumble under the weight.",
    "vendorReason": "Vertical Vendor has a unique stock of items from The Side of the Doughnut, making them the only source for this eerie yet intriguing artifact.",
    "shippingDetail": "Ships via gravity sleds, ensuring safe delivery by nightfall.",
    "usage": {
      "activation": "Passive effect upon stepping on the platform.",
      "duration": "Until end of next turn or until you leave the area.",
      "endsWhen": "You finish a short rest or leave the area.",
      "charges": "Unlimited"
    },
    "priceReason": "The delicate nature and unique crafting materials of this platform justify its price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:56:33.329576+00:00",
    "aiReviewedAt": "2026-07-25T02:56:33.329576+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_the_mk_91_layer_stabilizer_of_persistent_sweetness": {
    "id": "grand_country_item_the_mk_91_layer_stabilizer_of_persistent_sweetness",
    "name": "The Mk.91 Layer Stabilizer of Persistent Sweetness",
    "description": "The Mk.91 Layer Stabilizer of Persistent Sweetness is a segmented metal platform, salvaged from an ancient engineering project. Its surface gleams with a faint sugary sheen, and it hums softly as it stabilizes the chaotic layers within The Side of the Doughnut. Prolonged use leads to a sweet obsession, making the user increasingly fond of pastries and frosting, while also subtly enhancing their resistance to poison and rot effects.",
    "category": "premium",
    "price": 85000,
    "icon": "🍬",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Persistent Regeneration",
      "Enhanced Poison Resistance"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_relay",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Persistent Regeneration",
        "rules": "Passive effect. The user regenerates 1 hit point per second, but this effect ends if the user is reduced to 0 hit points or if they consume a meal containing more than 500 calories."
      },
      {
        "title": "Enhanced Poison Resistance",
        "rules": "The user gains advantage on saving throws against poison and rot effects. This benefit lasts for 1 hour after consuming the item, but it is reduced to disadvantage if the user's affection for pastries increases by more than 50%."
      }
    ],
    "levelRequirementReason": "This relic requires a high level of skill and control to manage its effects without succumbing to its sweet obsessions.",
    "vendorReason": "The Layer Market specializes in relics and items from forgotten engineering projects, making it the ideal vendor for this unique artifact.",
    "shippingDetail": "Ships via Dimensional Relay with a one-week transit time due to its delicate nature.",
    "usage": {
      "activation": "Passive effect. No activation required; it continuously provides its benefits as long as the user wears or holds the item.",
      "duration": "Permanent, until consumed or destroyed",
      "endsWhen": "Reduces to 0 hit points or consuming a meal with over 500 calories; destroys on destruction of the user's affection for pastries by more than 50%",
      "charges": "Unlimited"
    },
    "priceReason": "The item’s legendary rarity and unique effects, combined with the risk of sweet obsession, justify its moderate price in experience points.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:56:09.797328+00:00",
    "aiReviewedAt": "2026-07-25T02:56:09.797328+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_the_echoing_marks_of_silverleaf": {
    "id": "pokemon_item_the_echoing_marks_of_silverleaf",
    "name": "The Echoing Marks of Silverleaf",
    "description": "The Echoing Marks of Silverleaf are crystalline, opalescent patterns that shimmer faintly on a Trainer's skin, capturing the essence of legendary Pokémon battles within the hallowed grounds of Silverleaf Grove. These marks amplify one's bond with Pokémon, granting an increase in accuracy and speed during battle, while their whispers offer strategic insights that can turn the tide of any encounter. The echoes resonate with ancient wisdom, guiding the wearer to make precise moves and swift decisions.",
    "category": "equipment",
    "price": 1300,
    "icon": "✨",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Increased Accuracy",
      "Boosted Speed"
    ],
    "vendor": "pokemart",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Increased Accuracy",
        "rules": "The Echoing Marks enhance a Trainer's accuracy by +10%. This effect is passive while worn, but the wearer must maintain at least one Pokémon in their party for it to function. The marks do not wear off unless removed."
      },
      {
        "title": "Boosted Speed",
        "rules": "The Echoing Marks increase a Trainer's speed by +5%. This boost applies during battle and remains active until the end of each combat round. It is reset at the start of the next combat encounter."
      }
    ],
    "levelRequirementReason": "Trainers must have reached at least level 15 to fully harness the power of the Echoing Marks, as they require a deep understanding of Pokémon and battle strategy.",
    "vendorReason": "The Pokemart stocks these marks because it caters exclusively to experienced Trainers who seek to enhance their skills in preparation for more challenging battles.",
    "shippingDetail": "Ships via Drone Delivery, ensuring the Echoing Marks arrive swiftly and intact.",
    "usage": {
      "activation": "Passive effect while worn; boosts apply during battle rounds until the end of combat.",
      "duration": "Instantaneous boost active per round, resets at start of next encounter",
      "endsWhen": "Removed or battle ends",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Echoing Marks are priced at 1000 XP to reflect their rarity and the profound benefit they provide, making them a valuable investment for dedicated Trainers.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T02:56:29.439492+00:00",
    "aiReviewedAt": "2026-07-25T02:56:29.439492+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_eldritch_borns_scroll_of_temporal_drift": {
    "id": "pokemon_item_eldritch_borns_scroll_of_temporal_drift",
    "name": "Eldritch Born's Scroll of Temporal Drift",
    "description": "The Eldritch Born's Scroll of Temporal Drift is a weathered scroll bound in obsidian, with shifting glyphs that seem to pulse and rearrange themselves. Crafted by a reclusive Chrono-Trainer who sought to disrupt the flow of battles, it grants one additional action during your turn when activated – but beware, its effects are unpredictable and could target allies or enemies at random. Upon activation, there's a chance for a temporal rewind that affects all creatures within 5 feet, causing them to act on their previous turns.",
    "category": "consumables",
    "price": 5000,
    "icon": "⏳",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Temporal Surge",
      "Random Target"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Surge",
        "rules": "When activated as an action, the user gains one additional action during their turn. This effect lasts until the start of their next turn and can be interrupted by any attack or spell cast on them."
      },
      {
        "title": "Random Target",
        "rules": "There is a 10% chance that the scroll's effects target a random creature within 5 feet, including allies. This target must make a Dexterity saving throw (DC 13) to avoid being affected by the temporal rewind."
      }
    ],
    "levelRequirementReason": "Even low-level characters can use this scroll to gain an edge in unpredictable combat situations.",
    "vendorReason": "The Safari Shop often carries unique and unusual items, including those with unconventional uses such as the Eldritch Born's Scroll of Temporal Drift.",
    "shippingDetail": "Delivered swiftly by a Winged Courier, but requires a special delivery permit from the local Chronomancer Guild.",
    "usage": {
      "activation": "Action",
      "duration": "Until the start of your next turn",
      "endsWhen": "Interrupted by an attack or spell cast on you",
      "charges": "Unlimited"
    },
    "priceReason": "The scroll's unpredictable nature and potential for disrupting combat make it valuable, though not overly powerful.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-25T02:56:20.426892+00:00",
    "aiReviewedAt": "2026-07-25T02:56:20.426892+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_mega_marks_of_the_stone_sentinels": {
    "id": "pokemon_item_mega_marks_of_the_stone_sentinels",
    "name": "Mega Marks of the Stone Sentinels",
    "description": "Forged within the heart of a dormant volcano, the Mega Marks of the Stone Sentinels exude a primal energy that resonates with ancient stone Pokémon. These colossal marks create an impenetrable barrier around their wearer, bolstering their defenses by 25% and granting resistance to fire and earth attacks. When struck by such elements, there's a chance for elemental energy to reflect back at the attacker, dealing equal damage in retaliation.",
    "category": "equipment",
    "price": 85000,
    "icon": "⛰️",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Stone Resilience",
      "Elemental Reflection"
    ],
    "vendor": "league_store",
    "shippedBy": "Magma Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stone Resilience",
        "rules": "The wearer gains +25% bonus to AC and resistance to fire and earth elemental attacks. This effect is passive."
      },
      {
        "title": "Elemental Reflection",
        "rules": "When the wearer takes damage from a fire or earth attack, there's a 30% chance that half of the taken damage will be reflected back at the attacker as an equal amount of damage (rounded down). This effect has no save DC and can occur once per short rest."
      }
    ],
    "levelRequirementReason": "The marks are designed for novice trainers to protect themselves from elemental hazards.",
    "vendorReason": "As a vendor specializing in rare and powerful equipment, the league store ensures that even beginners have access to legendary protection.",
    "shippingDetail": "Ships via Magma Transport's express service, delivered within 24 hours of purchase.",
    "usage": {
      "activation": "Passive effect upon donning the marks.",
      "duration": "Instantaneous; lasts until removed or until a new short rest is completed.",
      "endsWhen": "The wearer removes the marks or completes a short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its legendary status and powerful elemental protection, this item provides significant utility at an affordable price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T02:56:44.395498+00:00",
    "aiReviewedAt": "2026-07-25T02:56:44.395498+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_the_glitched_oracle_bearer": {
    "id": "internet_item_the_glitched_oracle_bearer",
    "name": "The Glitched Oracle Bearer",
    "description": "The Glitched Oracle Bearer shimmers with corrupted code, its iridescent surface pulsing with fragmented data. Holding it grants fleeting glimpses into fractured timelines—whispers of forgotten websites and phantom search queries. This relic might reveal valuable data or disastrous outcomes, but beware: the very act of using it can trigger a random hallucination, positive or negative, that distorts your perception for minutes to come. Rumored to have been crafted by rogue hackers in dark cyberpunk alleys, this item is both a boon and a curse.",
    "category": "curiosities",
    "price": 5000,
    "icon": "🔮",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Data Analysis Bonus",
      "Hallucination Trigger"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Data Analysis Bonus",
        "rules": "Gain +5 to Data Analysis skill for 60 seconds. This effect can be used once per long rest."
      },
      {
        "title": "Hallucination Trigger",
        "rules": "There is a 20% chance that the item will trigger a random hallucination (positive or negative) each time it is activated. The duration of the hallucination varies between 1d4 minutes. A successful DC 15 Wisdom saving throw ends this effect early."
      }
    ],
    "levelRequirementReason": "This item requires a minimum character level to handle its corrupting influence and avoid potential mental instability.",
    "vendorReason": "The pixel_shop is known for its eclectic collection of tech-themed curiosities, making it the perfect vendor for this glitched oracle bearer.",
    "shippingDetail": "Shipped via Drone Delivery with a 1-hour delivery window in major cities.",
    "usage": {
      "activation": "Object Interaction action",
      "duration": "Instantaneous effect, but ongoing hallucination lasts until the end of your next turn if not ended early by a successful saving throw.",
      "endsWhen": "The hallucination ends on a successful DC 15 Wisdom save or at the start of your next turn after being triggered.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity, limited availability, and unique effects justify its price in XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:57:38.103316+00:00",
    "aiReviewedAt": "2026-07-25T02:57:38.103316+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_the_encrypted_echoes_of_silicon": {
    "id": "internet_item_the_encrypted_echoes_of_silicon",
    "name": "The Encrypted Echoes of Silicon",
    "description": "The Encrypted Echoes of Silicon hums with a digital life, its encrypted data packets resonating with the ghostly echoes of forgotten forums and abandoned chat rooms from bygone eras. By analyzing these whispers, you can unlock advanced coding techniques and forgotten algorithms that have long been overshadowed by newer trends. This relic grants immunity to data corruption effects and provides a constant stream of outdated meme notifications, keeping you ever aware of the humor and patterns of yesteryear's internet culture.",
    "category": "equipment",
    "price": 24000,
    "icon": "🎧",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Data Corruption Immunity",
      "Outdated Meme Notifications"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Data Corruption Immunity",
        "rules": "The Encrypted Echoes of Silicon grants immunity to data corruption effects. This effect lasts until the end of your next turn after using this item or when you take a long rest."
      },
      {
        "title": "Outdated Meme Notifications",
        "rules": "You receive a constant stream of outdated meme notifications, which can be toggled on and off as a bonus action. This effect does not require concentration and lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to help them understand the foundational concepts of internet culture and coding.",
    "vendorReason": "The cyber market specializes in relics and artifacts that bridge past and present, making it a fitting vendor for The Encrypted Echoes of Silicon.",
    "shippingDetail": "Ships via Quantum Courier's high-speed data streams, ensuring the item is delivered with all its encoded information intact.",
    "usage": {
      "activation": "Toggled on and off as a bonus action.",
      "duration": "Lasts until the end of your next short or long rest.",
      "endsWhen": "The effect ends when you take a long rest, at the start of your next short rest, or when toggled off.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects its rarity and utility in understanding outdated internet culture without being overpowered.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T02:57:29.198466+00:00",
    "aiReviewedAt": "2026-07-25T02:57:29.198466+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_the_blessed_byte_reclaimer": {
    "id": "internet_item_the_blessed_byte_reclaimer",
    "name": "The Blessed Byte Reclaimer",
    "description": "The Blessed Byte Reclaimer, a small obsidian device imbued with the digital blessings of long-forgotten AI worshipers, hums with an ethereal glow as it absorbs discarded data streams and converts them into usable code fragments. Crafted from ancient silicon chips and infused with arcane runes, this relic not only heals but also slows the decay rate of digital equipment, ensuring that even the most fleeting bits of information are preserved. Rumored to have been crafted by a forgotten AI cult, its presence in the hands of mortals is both a blessing and a curse.",
    "category": "consumables",
    "price": 85000,
    "icon": "💻",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "delivery_only",
    "effects": [
      "Digital Healer",
      "Silicon Shield"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Automated Drone Logistics",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Digital Healer",
        "rules": "When activated as an action, the Blessed Byte Reclaimer restores 20% of the user's maximum hit points. This effect has a cooldown of one long rest."
      },
      {
        "title": "Silicon Shield",
        "rules": "Activating this device creates a temporary data shield that absorbs up to 50 points of damage taken by the user. The shield dissipates after five minutes or when the user takes any action other than movement."
      }
    ],
    "levelRequirementReason": "This item is accessible to all characters, offering a versatile tool for maintaining and healing digital equipment.",
    "vendorReason": "The Data Dealer prides itself on providing the tools necessary for maintaining and repairing digital devices, making it an ideal vendor for such an artifact.",
    "shippingDetail": "Delivered via swift automated drones, this item is shipped within one game day of purchase.",
    "usage": {
      "activation": "Activated as an action or reaction to use its effects.",
      "duration": "Instantaneous for Digital Healer; Silicon Shield dissipates after five minutes or when the user takes any action other than movement.",
      "endsWhen": "The shield dissipates, and the device cools down between uses.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its legendary rarity and the balance of power it provides without overshadowing other party members.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-25T14:43:08.528313+00:00",
    "aiReviewedAt": "2026-07-25T14:43:08.528313+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_the-abyssal-chosen-seal": {
    "id": "warhammer_item_the-abyssal-chosen-seal",
    "name": "The Abyssal Chosen Seal of Veridian Rot",
    "description": "The Abyssal Chosen Seal of Veridian Rot is a pulsating obsidian amulet etched with ancient, forgotten glyphs that whisper of spectral horrors deep beneath the earth. When invoked, it grants a temporary bond to these malevolent forces, bolstering your defenses against psychic attacks while subtly corrupting your perception. Its dark energies manifest as fleeting, spectral camouflage and a chilling aura that slows foes' movements, making you a formidable adversary in the shadowy realms of battle.",
    "category": "equipment",
    "price": 86000,
    "icon": "💀",
    "stock": 32,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Psychic Resistance Boost",
      "Spectral Camouflage"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Imperial Courier Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Psychic Resistance Boost",
        "rules": "Activates as a bonus action. Increases your resistance to psychic damage by +40% for the duration of one short rest or until you are no longer affected by a hostile mind-affecting effect. This enhancement does not stack with other sources of resistance."
      },
      {
        "title": "Spectral Camouflage",
        "rules": "Activates on command as an action, granting you a +20 bonus to Stealth checks for 30 seconds or until the start of your next turn after using it. This camouflage effect does not function in well-lit areas."
      }
    ],
    "levelRequirementReason": "This seal can be used by adventurers early on, providing a crucial advantage against psychic attacks and enhancing stealth capabilities.",
    "vendorReason": "The Imperial Armory stocks this powerful artifact to equip brave souls who venture into the heart of darkness, where mind-affecting threats are common.",
    "shippingDetail": "Ships within three days with a priority delivery service.",
    "usage": {
      "activation": "Activates as a bonus action or command.",
      "duration": "Instantaneous activation, duration lasts until the start of your next turn after using it for Spectral Camouflage; increases resistance to psychic damage for the duration of one short rest or until no longer affected by hostile mind-affecting effects for Psychic Resistance Boost.",
      "endsWhen": "Discharged upon use unless otherwise stated.",
      "charges": "Unlimited"
    },
    "priceReason": "This item offers significant utility and advantage to adventurers early in their career, justifying its moderate price.",
    "priceOriginal": 7850,
    "priceReviewedAt": "2026-07-25T02:57:13.573431+00:00",
    "aiReviewedAt": "2026-07-25T02:57:13.573431+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_the-arcane-seal-of-lost-echoes": {
    "id": "warhammer_item_the-arcane-seal-of-lost-echoes",
    "name": "The Arcane Seal of Lost Echoes – Chronometric Distortion",
    "description": "The Arcane Seal of Lost Echoes—a fractured silver seal pulsing with arcane energy—whispers of forgotten timelines and untold stories when activated. This chronometric device allows you to manipulate localized temporal distortions, creating fleeting pockets where time flows differently, affecting both friend and foe within its radius. By using this seal, you can either slow down the passage of time for enemies or accelerate your own movements, granting precious moments of strategic advantage in combat.",
    "category": "consumables",
    "price": 5000,
    "icon": "⏳",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Chronometric Distortion",
      "Swift Step"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Night Courier",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Chronometric Distortion",
        "rules": "Activate as a bonus action. Choose an area within 10 feet; for the next 5 seconds, enemies in that area have their speed reduced by half and take a -2 penalty to Dexterity saving throws. This effect ends if you use another action to activate this seal or when the duration expires."
      },
      {
        "title": "Swift Step",
        "rules": "Activate as an action. You gain a +10 foot bonus to your walking speed for 5 seconds, and until the start of your next turn. This effect is expended upon activation and cannot be used again within 1 minute unless you rest."
      }
    ],
    "levelRequirementReason": "Only those who have mastered the arcane arts at a high level can wield this device with precision.",
    "vendorReason": "Fate Forge is renowned for crafting items that bridge the gap between the mundane and the magical, making them ideal purveyors of such an artifact.",
    "shippingDetail": "Ships via Night Courier; expedited delivery available upon request.",
    "usage": {
      "activation": "Bonus action or action for each effect.",
      "duration": "5 seconds per activation, ends when used again or duration expires.",
      "endsWhen": "Duration ends when you use another action to activate this seal or after 1 minute of inactivity.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Arcane Seal is a rare and powerful item, offering both offensive and defensive capabilities at an affordable price for its level requirement.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T02:58:03.513272+00:00",
    "aiReviewedAt": "2026-07-25T02:58:03.513272+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_the-corrupted-seals-of-desolation": {
    "id": "warhammer_item_the-corrupted-seals-of-desolation",
    "name": "The Corrupted Seals of Desolation – Legion’s Discord",
    "description": "The Corrupted Seals of Desolation – Legion’s Discord are a cluster of five bronze seals that hum with malevolent energy, each one pulsating with a dark aura that distorts reality. These seals amplify battlefield chaos by sowing dissent among enemy ranks and bolstering the wielder's aggression. When near combatants, they emit a subtle but potent influence that increases movement speed and enhances melee attacks, turning the tide of battle in favor of the Legion’s Discord.",
    "category": "faction",
    "price": 1300,
    "icon": "🔥",
    "stock": 76,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Amplify Melee Attacks",
      "Increase Movement Speed"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Shadow Courier Service - Express Delivery",
    "levelRequirement": 28,
    "effectDetails": [
      {
        "title": "Amplify Melee Attacks",
        "rules": "When the wearer is near an enemy unit, melee attacks deal an additional +1d6 damage for each seal in play. The effect lasts until the wearer moves more than 30 feet away from any enemy. This effect does not stack with other damage amplification abilities."
      },
      {
        "title": "Increase Movement Speed",
        "rules": "The wearer gains a +10 foot bonus to movement speed while within 50 feet of an enemy unit. This effect ends when the wearer moves more than 30 feet away from any enemy or if the wearer is incapacitated."
      }
    ],
    "levelRequirementReason": "The seals are designed for high-level warriors who can withstand their malevolent influence.",
    "vendorReason": "The chaos dealer specializes in items that manipulate and enhance combat effectiveness through dark means.",
    "shippingDetail": "Delivered within one week, but only available to players who have completed a Legion quest line.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until the wearer moves more than 30 feet away from an enemy or becomes incapacitated.",
      "endsWhen": "The seals are removed, or the wearer is incapacitated.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the unique design and powerful effects of these corrupted seals.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-25T02:58:03.871332+00:00",
    "aiReviewedAt": "2026-07-25T02:58:03.871332+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_dreadful_chronal_spine": {
    "id": "doughnut_hole_item_dreadful_chronal_spine",
    "name": "Dreadful Chronal Spine of the Echoing Maw",
    "description": "The Dreadful Chronal Spine of the Echoing Maw is a jagged, pulsating shard that whispers of lost timelines and forgotten futures. This relic grants the wielder brief glimpses into potential outcomes, though these visions are often accompanied by an unsettling disorientation. Touching it causes the air to ripple with temporal distortions, briefly speeding or slowing time around you. The spine's touch is a harbinger of dread, subtly increasing your sense of unease.",
    "category": "curiosities",
    "price": 380,
    "icon": "⏳",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Temporal Glimpse",
      "Chronal Distortion"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Delivery Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Glimpse",
        "rules": "Activates as a bonus action. The wielder gains advantage on initiative rolls for the duration of one short rest, but suffers disadvantage on Wisdom (Perception) checks related to time or space."
      },
      {
        "title": "Chronal Distortion",
        "rules": "Occurs randomly every 1d4+2 minutes while holding the spine. The user's time either slows by -5 feet of movement speed for 3 seconds, or speeds up by +5 feet of movement speed for 3 seconds. This effect is harmless but can cause disorientation."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to handle the spine's temporal distortions without losing their mind.",
    "vendorReason": "The Hole Hawker specializes in items from the void, and this chronal relic is a prime example of their wares.",
    "shippingDetail": "Ships via the Void Express, which can deliver within 1d6 days but may be delayed by temporal anomalies.",
    "usage": {
      "activation": "Bonus action for Temporal Glimpse; occurs randomly for Chronal Distortion.",
      "duration": "Temporal Glimpse lasts until the end of your next turn; Chronal Distortion is instantaneous and repeats every 1d4+2 minutes while holding the spine.",
      "endsWhen": "Use ends when the duration expires or you drop the spine.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity, temporal effects, and vendor reputation justify its high price.",
    "priceOriginal": 175,
    "priceReviewedAt": "2026-07-25T02:58:47.764403+00:00",
    "aiReviewedAt": "2026-07-25T02:58:47.764403+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_hollow_bane_of_the_silent_rift": {
    "id": "doughnut_hole_item_hollow_bane_of_the_silent_rift",
    "name": "Hollow Bane of the Silent Rift - Fragment XII",
    "description": "The Hollow Bane of the Silent Rift - Fragment XII is a fragment of an ancient anomaly, its fractured surface still pulsating with the lingering energy of the rift it once belonged to. When activated, it expands into a localized silence zone, trapping nearby entities in an absolute void where sound ceases and perception falters. The air itself seems to hum with the echo of forgotten whispers, a truly unsettling experience for any who dare enter its confines.",
    "category": "equipment",
    "price": 1300,
    "icon": "🌌",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Silence Zone",
      "Enhanced Psychic Vulnerability"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Silence Zone",
        "rules": "When activated as an action within 5 feet, this fragment creates a localized silence zone with a radius of 10 feet for 3 seconds. Creatures within the area are reduced to half their movement speed and suffer a -2 penalty to Dexterity (Stealth) checks. Enemies within the zone have disadvantage on Perception checks related to sound."
      },
      {
        "title": "Enhanced Psychic Vulnerability",
        "rules": "For the duration of its activation, any creature in the silence zone is considered to be under the effects of a minor hallucinatory effect (DC 15), increasing their vulnerability to psychic damage by +1d6. This effect does not require saving."
      }
    ],
    "levelRequirementReason": "This fragment requires significant magical power and control, suitable only for those of high magical proficiency.",
    "vendorReason": "The Void Vendor has a peculiar knack for acquiring such rare and otherworldly artifacts from unknown sources.",
    "shippingDetail": "Ships via interdimensional courier, delivery takes approximately one week.",
    "usage": {
      "activation": "Action",
      "duration": "3 seconds",
      "endsWhen": "The duration ends or the fragment is destroyed by a successful DC 18 damage roll",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The rarity and unique properties of this item justify its high price in the market.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:58:01.158218+00:00",
    "aiReviewedAt": "2026-07-25T02:58:01.158218+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_mk.47_hollow_rift_of_dreadful_observation": {
    "id": "doughnut_hole_item_mk.47_hollow_rift_of_dreadful_observation",
    "name": "Mk.47 Hollow Rift of Dreadful Observation - Prototype",
    "description": "The Mk.47 Hollow Rift of Dreadful Observation is a meticulously crafted lens that focuses intense observation into a tangible distortion, allowing its wielder to pierce through the veil of reality and uncover hidden truths. This device, forged in the heart of a haunted forge, enhances visual acuity, revealing minute details others miss, yet prolonged use can induce a creeping paranoia that gnaws at one's sanity, manifesting as hallucinations and a small risk of panic attacks.",
    "category": "equipment",
    "price": 5800,
    "icon": "👁️",
    "stock": 5,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Enhanced Perception",
      "Reveals Concealed Details"
    ],
    "vendor": "center_seller",
    "shippedBy": "Spectral Transit Cart",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Enhanced Perception",
        "rules": "Activates on command. Grants a +5 bonus to perception checks and allows the user to extend their visual range up to 10 meters. The effect lasts until the start of your next turn, and you can use it once per short or long rest."
      },
      {
        "title": "Reveals Concealed Details",
        "rules": "When activated, this device reveals hidden objects and entities within a 10-meter radius that are not immediately obvious. This effect lasts for 1 minute, and you must make a DC 15 Wisdom (Perception) check at the start of each of your turns while using it to maintain its effects."
      }
    ],
    "levelRequirementReason": "This device is complex and requires a certain level of magical understanding to wield effectively.",
    "vendorReason": "The center seller specializes in rare artifacts and magical devices, making it fitting for them to offer this unique item.",
    "shippingDetail": "Ships via the Spectral Transit Cart, known for its reliable deliveries even through the most dangerous areas.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous activation with a duration of 1 minute or until the user dismisses it early.",
      "endsWhen": "The effect ends when the user either dismisses it, or they take an action other than movement on their turn.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item is rare and offers significant advantages in combat and exploration, justifying its high price.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-25T02:58:35.931900+00:00",
    "aiReviewedAt": "2026-07-25T02:58:35.931900+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_the_kind_bits_of_elements_born": {
    "id": "equestria_item_the_kind_bits_of_elements_born",
    "name": "The Kind Bits of Elements Born",
    "description": "The Kind Bits of Elements Born are shimmering fragments of light and color, each one a captured essence of shared laughter. Crafted from the concentrated joy of a thousand ponies sharing smiles and kindness, these bits amplify acts of compassion and reduce negative emotions by half. They are said to be born in the heart of Equestria's happiest moments, making them perfect for defusing heated arguments or lifting spirits during dark times.",
    "category": "consumables",
    "price": 1300,
    "icon": "💖",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Amplifies Compassion",
      "Reduces Negative Emotions"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Amplify Compassion",
        "rules": "When consumed, the Kind Bits grant a +5 bonus to Charisma (Persuasion) checks for 10 minutes. This effect can be used once per day."
      },
      {
        "title": "Reduce Negative Emotions",
        "rules": "The consumer gains advantage on saving throws against negative emotions and reduces their current negative emotion levels by 50%, lasting until the end of their next short or long rest."
      }
    ],
    "levelRequirementReason": "These bits are accessible to all, as they draw from the universal essence of kindness.",
    "vendorReason": "The market is a hub for magical curiosities and items that bring joy and positivity to Equestria.",
    "shippingDetail": "Ships via Pegasus Express, ensuring the bits arrive at their destination with minimal delay.",
    "usage": {
      "activation": "Eaten or consumed as an action.",
      "duration": "10 minutes for the Charisma bonus; ends when the next short rest begins for reduced emotions.",
      "endsWhen": "The duration runs out or a short rest is completed.",
      "charges": "Unlimited, but can only be used once per day."
    },
    "priceReason": "Balanced to ensure the item remains a valuable consumable without becoming overpowered.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T02:58:22.342104+00:00",
    "aiReviewedAt": "2026-07-25T02:58:22.342104+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_vile_borns_bits_mk47": {
    "id": "equestria_item_vile_borns_bits_mk47",
    "name": "Vile Born's Bits Mk.47",
    "description": "Forged in the deepest shadows beneath Nightmare’s fortress, Vile Born's Bits Mk.47 exude a palpable sense of malice and corruption. These fiendish trinkets are crafted from concentrated despair, imbued with a dark magic that induces vivid nightmares upon ingestion. Warriors who partake in their potent brew find themselves temporarily empowered but also driven to extremes, making them dangerous tools for those seeking to sow chaos or exploit vulnerabilities.",
    "category": "forbidden",
    "price": 5000,
    "icon": "😈",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Nightmare Induced Aggression",
      "Dark Empowerment"
    ],
    "vendor": "shadow_markets",
    "shippedBy": "Dark Messenger",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Nightmare Induced Aggression",
        "rules": "Upon consuming Vile Born's Bits Mk.47, the target suffers from vivid nightmares and hallucinations for 1 minute. During this time, they gain a +2 bonus to attack rolls but are also prone to fits of rage, causing them to make an Intelligence saving throw (DC 15) at the start of each of their turns. On a failed save, they must choose one creature within 30 feet and target it with an attack."
      },
      {
        "title": "Dark Empowerment",
        "rules": "For 1 minute after consuming Vile Born's Bits Mk.47, the target gains resistance to all damage types, but this effect ends if they take any nonmagical bludgeoning damage or if they voluntarily end it early."
      }
    ],
    "levelRequirementReason": "These dangerous trinkets are too powerful for lower-level characters and require a high degree of discipline to wield without disastrous consequences.",
    "vendorReason": "Shadow Markets deals in the most forbidden items, including those that can be used for chaos or exploitation, making these bits an appropriate addition to their inventory.",
    "shippingDetail": "The Dark Messenger ensures secure and timely delivery of Vile Born's Bits Mk.47 to ensure the recipient’s safety upon receipt.",
    "usage": {
      "activation": "Consume orally",
      "duration": "1 minute per use, ends on a failed save or when the target voluntarily ends it early",
      "endsWhen": "On a failed saving throw or if the user takes any nonmagical bludgeoning damage",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rarity and the risk involved in using such a dangerous item.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-25T02:59:32.379794+00:00",
    "aiReviewedAt": "2026-07-25T02:59:32.379794+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_the_chronometric_shard_of_princess_celestia_refined": {
    "id": "equestria_item_the_chronometric_shard_of_princess_celestia_refined",
    "name": "The Chronometric Shard of Princess Celestia Refined",
    "description": "The Chronometric Shard of Princess Celestia Refined is a shimmering fragment of temporal energy, forged from moments of celestial grace during a rare alignment of the constellations. This shard grants brief glimpses into potential futures, offering strategic foresight and tactical planning. However, prolonged exposure can lead to debilitating disorientation, as the mind grapples with too many alternate timelines. These shards are born from moments when the Princess herself has touched the stars, imbuing them with her wisdom.",
    "category": "premium",
    "price": 86000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Glimpses",
      "Enhanced Reflexes"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Griffin Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Temporal Glimpses",
        "rules": "Activates as a bonus action. The user gains insight into potential future outcomes for up to 1 minute, allowing them to make decisions with foresight. This effect can be used once per long rest and is limited to three uses per day."
      },
      {
        "title": "Enhanced Reflexes",
        "rules": "Increases reaction speed and reflexes by +20 feet of movement speed for 1 hour, starting when the user activates the shard. The effect ends if the user takes a short or long rest."
      }
    ],
    "levelRequirementReason": "This item requires mastery over time-based magic to wield effectively.",
    "vendorReason": "Canterlot Commerce is known for its access to rare and magical artifacts, including those from the royal family.",
    "shippingDetail": "The Royal Griffin Courier ensures swift delivery, but only within Equestria due to the delicate nature of the shard.",
    "usage": {
      "activation": "Bonus action for Temporal Glimpses; passive effect for Enhanced Reflexes",
      "duration": "Instantaneous activation for Temporal Glimpses; 1 hour duration for Enhanced Reflexes",
      "endsWhen": "Effect ends when the user takes a short or long rest, or if the shard is destroyed.",
      "charges": "Three uses per day"
    },
    "priceReason": "The refined nature of this shard and its limited daily use justify a price of 1000 XP.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-25T02:59:13.935480+00:00",
    "aiReviewedAt": "2026-07-25T02:59:13.935480+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_brutal_taker_sword_of_grimstone": {
    "id": "faerun_item_brutal_taker_sword_of_grimstone",
    "name": "Brutal Taker's Sword of Grimstone",
    "description": "Forged deep within the volcanic heart of Mount Hotenow, the Brutal Taker's Sword of Grimstone whispers of ancient battles and relentless slaughter. Its blade seems to absorb light, casting an eerie glow as it strikes, promising swift death for its foes. The sword itself is a testament to brutal efficiency, with each swing not only dealing increased damage but also a chance to inflict bleeding wounds that persist for several rounds.",
    "category": "equipment",
    "price": 5000,
    "icon": "⚔️",
    "stock": 45,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Increased Damage",
      "Bleeding Chance"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "Griffon Courier",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Increased Damage",
        "rules": "When you hit with this sword on your attack, it deals an additional 15% damage. This effect is passive and does not require any activation."
      },
      {
        "title": "Bleeding Chance",
        "rules": "There is a 10% chance that each successful hit will inflict bleeding wounds on the target for up to three rounds, dealing 2d4 points of slashing damage at the start of your turn. The bleeding effect ends when you miss or the target takes damage from another source."
      }
    ],
    "levelRequirementReason": "The sword's power demands a master-level fighter capable of harnessing its brutal efficiency and precision.",
    "vendorReason": "Sword Coast Traders are known for their extensive network, including artifacts from the depths of Mount Hotenow.",
    "shippingDetail": "The sword is delivered via the fastest Griffon Courier service available, ensuring it reaches its destination within a week.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous and ongoing as long as you wield the sword.",
      "endsWhen": "The bleeding effect ends when you miss or the target takes damage from another source. The damage increase is always active while wielding this weapon.",
      "charges": "Unlimited, but only one bleeding instance can occur per target."
    },
    "priceReason": "This sword's rarity and the unique properties it grants make its price fair for a masterwork weapon of such power.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:59:09.374532+00:00",
    "aiReviewedAt": "2026-07-25T02:59:09.374532+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_chronal_echo_of_larsk": {
    "id": "faerun_item_the_chronal_echo_of_larsk",
    "name": "The Chronal Echo of Larsk",
    "description": "The Chronal Echo of Larsk is a delicate, fragmented timepiece encased in ancient dwarven steel. Its gears hum faintly as it warps reality, allowing for brief temporal distortions that can be manipulated with precision. This relic not only allows the user to rewind time by a maximum of 3 seconds but also creates localized temporal fields that slow down enemies within its radius, offering precious moments of respite in perilous situations.",
    "category": "curiosities",
    "price": 24000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Distortion",
      "Echo Glimpse"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "Sky Serpent Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "Activates as a bonus action. Creates a small temporal distortion field that slows down enemies within a 5-foot radius for 2 seconds, reducing their movement speed by 50%. The effect ends if the wielder moves more than 10 feet or takes an action."
      },
      {
        "title": "Echo Glimpse",
        "rules": "Activates as a reaction. When you are hit by an attack, use your reaction to attempt to glimpse echoes of past events related to the current location. If successful (DC 15 Wisdom saving throw), you gain advantage on all attacks and ability checks until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This item requires attunement with a spellcaster, making it accessible to characters who can benefit from its unique temporal abilities.",
    "vendorReason": "Baldur's Bazaar specializes in exotic and powerful relics, ensuring that the Chronal Echo of Larsk is available for discerning buyers seeking ancient knowledge.",
    "shippingDetail": "The item is shipped via a Sky Serpent Courier, providing swift delivery but with a slight delay due to the courier's need to navigate through various aerial obstacles.",
    "usage": {
      "activation": "Bonus action and reaction",
      "duration": "Instantaneous (Echo Glimpse), 2 seconds (Temporal Distortion)",
      "endsWhen": "Movement more than 10 feet or taking an action, or until the start of your next turn (Echo Glimpse)",
      "charges": "Unlimited"
    },
    "priceReason": "The Chronal Echo of Larsk is priced at 1000 XP due to its unique attunement requirement, powerful temporal effects, and limited availability.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:59:24.745535+00:00",
    "aiReviewedAt": "2026-07-25T02:59:24.745535+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_iron_banner_of_shadowfen": {
    "id": "faerun_item_the_iron_banner_of_shadowfen",
    "name": "The Iron Banner of Shadowfen",
    "description": "The Iron Banner of Shadowfen is a tarnished, weathered banner that once belonged to 'The Obsidian Pact,' a faction known for its dark rituals and shadowy machinations in the corrupted marshes of Shadowfen. Its surface gleams with an eerie glow when touched, whispering tales of forgotten oaths and lost battles. The banner's decayed fabric seems almost alive, as if it carries the spirits of those who fought under its command.",
    "category": "faction",
    "price": 86000,
    "icon": "🚩",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Stealth Bonus",
      "Shadow Minions"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Black Cart Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stealth Bonus",
        "rules": "While holding The Iron Banner of Shadowfen, the wielder gains a +3 bonus to Stealth checks in swampy or marshy terrain. This effect is passive and does not require an action."
      },
      {
        "title": "Shadow Minions",
        "rules": "Once per day, the wielder can summon shadowy minions by speaking the banner's command word. These minions have a 10-foot radius around the user and last for 1 hour. They provide cover to the wielder until dismissed or destroyed. The effect ends when the duration expires."
      }
    ],
    "levelRequirementReason": "The Iron Banner of Shadowfen is designed for lower-level adventurers who need its unique abilities but are not yet capable of handling more powerful artifacts.",
    "vendorReason": "Waterdeep Market frequently stocks rare and legendary items, including those with a strong connection to the region's history and factions like 'The Obsidian Pact'.",
    "shippingDetail": "Shipped via the Black Cart Express, known for its reliable service through Faerûn’s challenging terrains.",
    "usage": {
      "activation": "Summoning shadow minions requires speaking the command word.",
      "duration": "1 hour per day of use.",
      "endsWhen": "The duration ends when the time expires or the minions are destroyed.",
      "charges": "3 uses per day, recharging after a long rest."
    },
    "priceReason": "The Iron Banner's price reflects its legendary rarity and unique abilities that make it valuable for adventurers facing swampy environments.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-25T02:59:45.134550+00:00",
    "aiReviewedAt": "2026-07-25T02:59:45.134550+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_crimson_harmony_wright": {
    "id": "equestrian_item_crimson_harmony_wright",
    "name": "The Crimson Harmony Wright’s Quill",
    "description": "The Crimson Harmony Wright’s Quill, forged from twilight's molten essence and etched with karmic runes, is a masterwork instrument that transforms thought into glowing script upon touch. Its wielder can instantly scribe their ideas onto parchment or air, leaving behind a trail of positive energy that uplifts those around them. Each stroke of the quill releases a gentle pulse of friendship energy, fostering camaraderie and strengthening bonds between allies.",
    "category": "equipment",
    "price": 5000,
    "icon": "📝",
    "stock": 47,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Instant Thought Scribing",
      "Positive Aura"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Courier",
    "levelRequirement": 0,
    "effectDetails": [
      {
        "title": "Instant Thought Scribing",
        "rules": "As an action, the wielder can use the quill to transcribe their thoughts into shimmering script. This effect has a range of 5 feet and lasts until the end of the user’s next turn. It does not require concentration."
      },
      {
        "title": "Positive Aura",
        "rules": "The quill grants a +2 bonus to Persuasion checks for 1 minute, or until the wielder makes an attack roll. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This quill is designed for all travelers and scribes who wish to harness its power.",
    "vendorReason": "The friendly merchants of Ponyville are well-known for their support of local artisans, including those who craft magical tools like the Crimson Harmony Wright’s Quill.",
    "shippingDetail": "Ships via Pegasus Courier within one week of purchase.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Until end of next turn or until used in combat",
      "endsWhen": "Used in a melee attack, consumed on the wielder's next turn, or until the effect expires naturally",
      "charges": "Unlimited"
    },
    "priceReason": "The quill is priced at 1000 XP due to its rare material components and intricate craftsmanship.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:00:05.221190+00:00",
    "aiReviewedAt": "2026-07-25T03:00:05.221190+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_crystal_resonance_shard_mk21": {
    "id": "equestrian_item_crystal_resonance_shard_mk21",
    "name": "Mk.21 Crystal Resonance Shard of Twilight Peaks",
    "description": "Recovered from a collapsed cavern deep within the Twilight Peaks, this shard pulsates with the trapped echoes of twilight’s first light. Crafted by ancient druids who sought to harness the power of shadows and starlight, it provides a surge of focused magical potential ideal for intricate spellcasting or delicate repairs. The shard's surface glows faintly, casting an ethereal blue hue that seems to deepen in response to your concentration.",
    "category": "curiosities",
    "price": 24000,
    "icon": "💎",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Increased Spell Power",
      "Reduced Mana Consumption"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Griffin Delivery Service",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Increased Spell Power",
        "rules": "Activates on command as a bonus action. Grants the user an increase in magic power by +20 for 1 minute, allowing for more powerful spellcasting but requiring concentration. The effect ends if the caster stops concentrating or is incapacitated."
      },
      {
        "title": "Reduced Mana Consumption",
        "rules": "Passive effect; reduces the mana cost of all spells and abilities by 15%, stacking with other similar effects. Ends when the shard's magical resonance fades, which occurs after 8 hours of inactivity or if the user is incapacitated."
      }
    ],
    "levelRequirementReason": "The intricate magic contained within this shard demands a high level of control and familiarity with shadow and starlight spells.",
    "vendorReason": "Canterlot Commerce maintains exclusive distribution rights for rare artifacts from the Twilight Peaks, ensuring their authenticity and rarity.",
    "shippingDetail": "Ships via a Royal Griffin Courier, known for its swift and reliable delivery across Equestria. The courier ensures the shard arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to activate increased spell power; passive reduced mana consumption.",
      "duration": "1 minute (increased magic power); until concentration ends or user is incapacitated (reduced mana consumption)",
      "endsWhen": "Concentration ends, user becomes incapacitated, or after 8 hours of inactivity",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the shard's rarity and the complex magic required to craft it, as well as its limited availability.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:00:36.902465+00:00",
    "aiReviewedAt": "2026-07-25T03:00:36.902465+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_karmic_crystallized_echoes": {
    "id": "equestrian_item_karmic_crystallized_echoes",
    "name": "Karmic Crystallized Echoes of the Crystal Heart",
    "description": "The Karmic Crystallized Echoes of the Crystal Heart are smooth, opalescent crystals that shimmer with hues of past acts of kindness and friendship. When held during a generous act, these gems amplify its power tenfold, creating a ripple of positive change that resonates across the land for hours after use. Each crystal is said to be imbued with fragments of past deeds, making them a rare and precious gift from the Crystal Empire.",
    "category": "consumables",
    "price": 86000,
    "icon": "✨",
    "stock": 23,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Amplify Kindness Tenfold",
      "Grant Temporary Immunity to Negative Emotions"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Messenger Dragons",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Amplify Kindness Tenfold",
        "rules": "When activated by an act of kindness, the Karmic Crystallized Echoes amplify its positive effects tenfold. This creates a protective field that lasts for up to one hour, during which all nearby allies gain advantage on saving throws against negative emotions and conditions."
      },
      {
        "title": "Grant Temporary Immunity to Negative Emotions",
        "rules": "For the duration of the amplification effect (up to one hour), all within range are immune to negative emotions. This includes fear, sadness, and other similar effects. The immunity can be used once per day."
      }
    ],
    "levelRequirementReason": "The crystals are accessible to all adventurers who wish to spread kindness.",
    "vendorReason": "As the creators of these enchanted gems, Crystal Empire ensures they reach capable hands that can wield their power responsibly.",
    "shippingDetail": "Shipped by the swift and loyal Crystal Messenger Dragons, ensuring the Echoes arrive in pristine condition.",
    "usage": {
      "activation": "Activation requires holding the crystals during an act of kindness.",
      "duration": "The amplification effect lasts for up to one hour.",
      "endsWhen": "The effect ends when the duration expires or if the user performs another act of kindness.",
      "charges": "Unlimited uses, but only once per day can the immunity be granted."
    },
    "priceReason": "Balanced at 1000 XP, these crystals are priced to reflect their rarity and powerful effects without overshadowing other important gear.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-25T03:00:09.669718+00:00",
    "aiReviewedAt": "2026-07-25T03:00:09.669718+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_jade_gifted_whisper": {
    "id": "the_edge_item_jade_gifted_whisper",
    "name": "Jade Gifted's Terminal Whispers",
    "description": "Jade Gifted's Terminal Whispers are jade-hued orbs that pulse with a chilling resonance. These cryptic relics whisper fragmented warnings from beyond, offering fleeting glimpses into terminal realities. Activated, they illuminate hidden pathways and momentarily decrease enemy perception by 20%, but there is a chance of inflicting confusion on the user. The whispers are not for the faint-hearted, as only those with a clear mind can truly comprehend their meaning.",
    "category": "curiosities",
    "price": 5900,
    "icon": "🔮",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "cryptic warnings",
      "decreased enemy perception"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Cryptic Warnings",
        "rules": "Upon activation, there is a 50% chance the user gains temporary insight equal to their Intelligence modifier for 1 minute. On a failed Wisdom saving throw (DC 13), the user becomes confused for 1 minute."
      },
      {
        "title": "Decreased Enemy Perception",
        "rules": "For 1 hour after activation, all enemies within 30 feet have disadvantage on Wisdom (Perception) checks and Investigation checks. This effect ends when the user recharges or is incapacitated."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level to activate its cryptic nature without overwhelming the user.",
    "vendorReason": "The abyss trader specializes in relics from beyond, making these whispers a fitting addition to their inventory.",
    "shippingDetail": "Due to their ethereal nature, these items are delivered via the dimensional rift, arriving with a slight delay of one week.",
    "usage": {
      "activation": "a bonus action",
      "duration": "1 hour or until expended",
      "endsWhen": "recharged by completing a long rest or destroyed upon user's incapacitation",
      "charges": "unlimited"
    },
    "priceReason": "The jade-hued orbs are rare and valuable, offering both cryptic insights and battlefield advantages.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T03:00:00.859987+00:00",
    "aiReviewedAt": "2026-07-25T03:00:00.859987+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_mk_81_terminal_divergence": {
    "id": "the_edge_item_mk_81_terminal_divergence",
    "name": "Mk.81 Terminal Divergence Engine",
    "description": "The Mk.81 Terminal Divergence Engine is a cold, metallic artifact salvaged from a shattered observation station. Its erratic hum and shimmering surface hint at the instability of its core—a remnant of ancient space-time manipulation technology. This engine generates localized distortions in reality, momentarily shifting the user's location to an adjacent plane. Though unpredictable, it offers invaluable aid for navigating treacherous passages by creating a brief duplicate of the user or swapping positions with enemy targets.",
    "category": "equipment",
    "price": 24000,
    "icon": "⚙️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Reality Shift",
      "Target Swap"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "automated_drone",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Reality Shift",
        "rules": "As an action, the user teleports to an adjacent unoccupied space. The shift is unpredictable and may result in a duplicate of the user being created for a short duration (1d4+2 turns). This effect has a 5% chance to occur each time it is used."
      },
      {
        "title": "Target Swap",
        "rules": "As an action, the user can swap places with an adjacent enemy. Both characters are teleported to new positions simultaneously. The user must be within melee range of the target for this effect to activate. This ability has a 10% chance to critically fail, causing the user and target to switch back."
      }
    ],
    "levelRequirementReason": "Requires significant control over reality-altering forces.",
    "vendorReason": "Edge Outpost specializes in salvaged technology from forgotten stations like this one.",
    "shippingDetail": "Delivered by automated drones, with a 1-day delay for recalibration checks.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous shift",
      "endsWhen": "Exhausts charges or is countered by an opposing reality barrier",
      "charges": "5 uses"
    },
    "priceReason": "Reflects the balanced cost of salvaged and experimental technology.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T03:00:20.598343+00:00",
    "aiReviewedAt": "2026-07-25T03:00:20.598343+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_godly_abyss_chronal_fragment": {
    "id": "the_edge_item_godly_abyss_chronal_fragment",
    "name": "Godly Abyss Chronal Fragment – The Seed of Entropy",
    "description": "The Godly Abyss Chronal Fragment – The Seed of Entropy is a pulsating shard of solidified temporal energy, its surface etched with patterns that ripple like liquid darkness. This fragment can warp time itself, allowing its wielder to manipulate the flow of combat by accelerating or decelerating their personal timeline. However, using this power comes at an immense cost, as it leaves behind paradoxes and lingering effects that can disrupt the very fabric of reality for those around you.",
    "category": "forbidden",
    "price": 1400000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "Temporal Distortion",
      "Rapid Aging"
    ],
    "vendor": "final_shop",
    "shippedBy": "angelic_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "As a bonus action, the user can create a localized time loop that traps one target within a 5-foot radius. The trapped creature's actions are delayed by 1d4 rounds, and their attacks deal an additional 2d6 force damage on each attack roll. This effect lasts for up to 1 minute per use, and it ends when the user chooses or if the trapped target is freed."
      },
      {
        "title": "Rapid Aging",
        "rules": "The fragment has a chance (50%) to age any creature targeted by its effects by one year. This effect imposes the aged condition on the target for 1 hour per use, and it ends when the user chooses or if the target completes a long rest."
      }
    ],
    "levelRequirementReason": "The item's unpredictable nature and high-risk potential require users to be at least level 1.",
    "vendorReason": "Final Shop specializes in rare, powerful artifacts that push the boundaries of reality, making it a fitting vendor for this dangerous fragment.",
    "shippingDetail": "The angelic messengers ensure secure delivery, as the item's temporal properties can warp space-time during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute per use",
      "endsWhen": "User chooses or target is freed",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the item's unpredictable and potentially dangerous effects, which can disrupt combat dynamics.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T03:00:27.135215+00:00",
    "aiReviewedAt": "2026-07-25T03:00:27.135215+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_paradoxical_tears_of_mystery": {
    "id": "doughnut_hole_item_paradoxical_tears_of_mystery",
    "name": "The Paradoxical Tears of Mystery",
    "description": "The Paradoxical Tears of Mystery are viscous, iridescent drops that shimmer with fractured realities, each a fleeting glimpse into forgotten timelines. Ingesting one grants you a momentary vision of alternate paths and hidden truths, but be wary—prolonged exposure can unravel your very perception. These tears are said to have been crafted in the shadowy realms where time folds upon itself, and their ingestion is as much an act of daring as it is of curiosity.",
    "category": "consumables",
    "price": 5000,
    "icon": "✨",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Vision of Alternate Realities",
      "Risk of Perceptional Disorientation"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Vision of Alternate Realities",
        "rules": "Consume one tear to gain a brief, 30-second vision into an alternate reality. This effect grants advantage on Perception checks for the duration and reveals hidden paths or truths, but may also cause temporary disorientation if overused."
      },
      {
        "title": "Risk of Perceptional Disorientation",
        "rules": "There is a minor chance (20%) that consuming one tear will induce momentary disorientation, causing you to fall prone for 1d4 rounds. This effect has no save DC and can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "The Paradoxical Tears demand a seasoned traveler who is prepared to grapple with the unstable forces they represent.",
    "vendorReason": "Void Vendor specializes in arcane and paradoxical items, making these tears a natural addition to their inventory.",
    "shippingDetail": "Ships directly from the Dimensional Rift, ensuring that the tears remain potent until your doorstep.",
    "usage": {
      "activation": "Eating one tear",
      "duration": "30 seconds of vision and Perception advantage; momentary disorientation if induced",
      "endsWhen": "Effect duration ends or disorientation occurs",
      "charges": "Unlimited, as each tear is self-contained"
    },
    "priceReason": "The Paradoxical Tears are priced high due to their rarity and the inherent risk they pose.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T03:00:46.824561+00:00",
    "aiReviewedAt": "2026-07-25T03:00:46.824561+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_wicked_seeker_tears_mk82": {
    "id": "doughnut_hole_item_wicked_seeker_tears_mk82",
    "name": "Wicked Seeker's Tears Mk.82",
    "description": "Wicked Seeker's Tears Mk.82 are obsidian-black, pulsating with an almost sentient energy that seems to whisper of unspeakable horrors. These tears latch onto the faintest traces of residual anomaly signatures, leading their drinker on a relentless chase through distorted spaces. The effects are volatile and unpredictable, but undeniably potent, as they leave a faint aura of distortion around the user, making them difficult targets for precision attacks.",
    "category": "equipment",
    "price": 1300,
    "icon": "😈",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Residual Anomaly Aura",
      "Void Attraction"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Phantom Delivery Drone",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Residual Anomaly Aura",
        "rules": "The drinker gains a faint aura of distortion around their form, granting advantage on saving throws against precision-based attacks. This effect lasts for 60 seconds and can be recharged after completing a short rest."
      },
      {
        "title": "Void Attraction",
        "rules": "For the duration of 1 minute, the drinker attracts hostile void entities with increased frequency. They must make a DC 15 Wisdom saving throw each time they enter combat to avoid being pulled into a nearby void entity's domain. On a failed save, the drinker is teleported to a random unoccupied space within 30 feet of their location."
      }
    ],
    "levelRequirementReason": "The Wicked Seeker's Tears Mk.82 are crafted for advanced explorers and investigators capable of handling the unpredictable and dangerous nature of void anomalies.",
    "vendorReason": "Hole Hawker specializes in rare and exotic items that cater to adventurers seeking unique advantages, making them a fitting vendor for these powerful tears.",
    "shippingDetail": "The Phantom Delivery Drone ensures swift and discreet delivery of the Wicked Seeker's Tears Mk.82, arriving just before nightfall.",
    "usage": {
      "activation": "Instantaneous effect upon consumption.",
      "duration": "1 minute for Void Attraction; 60 seconds for Residual Anomaly Aura.",
      "endsWhen": "On completion of the duration or when the drinker leaves combat.",
      "charges": "Unlimited, recharged after a short rest."
    },
    "priceReason": "The Wicked Seeker's Tears Mk.82 are priced at 1000 XP due to their complex crafting process and the unique advantages they provide in combat scenarios.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T03:00:59.417300+00:00",
    "aiReviewedAt": "2026-07-25T03:00:59.417300+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_chronal_seeker_of_void_fragments": {
    "id": "doughnut_hole_item_chronal_seeker_of_void_fragments",
    "name": "Chronal Seeker of Void Fragments",
    "description": "The Chronal Seeker of Void Fragments is a solidified tear from another reality, containing a fragment of the void's chaotic flow. This artifact emits a rhythmic pulse that hints at fractured timelines and offers limited glimpses into fragmented temporal structures. Prolonged exposure can induce unsettling echoes in one's perception of time itself, making it a dangerous yet invaluable tool for those who delve into the mysteries of chronal anomalies.",
    "category": "curiosities",
    "price": 24000,
    "icon": "⏳",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Glimpse",
      "Void Phase"
    ],
    "vendor": "center_seller",
    "shippedBy": "Void Logistics Unit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Glimpse",
        "rules": "As an action, the user can briefly glimpse a fractured timeline within 30 feet for 10 seconds. This effect grants advantage on initiative rolls and allows the user to see through temporal distortions. The duration ends if the user takes any damage or is incapacitated."
      },
      {
        "title": "Void Phase",
        "rules": "The user can activate this ability as a bonus action, allowing them to phase through solid objects for 30 seconds. This effect has no save DC but requires concentration and ends immediately if the user sustains any damage or is incapacitated."
      }
    ],
    "levelRequirementReason": "Even the simplest explorers can benefit from this artifact's temporal insights, making it accessible to all.",
    "vendorReason": "The center seller specializes in rare and ancient curiosities, including this fragment of a lost reality.",
    "shippingDetail": "Ships via high-speed temporal courier, ensuring safe delivery to any location within the known planes.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Temporal Glimpse) / 30 seconds (Void Phase)",
      "endsWhen": "On Damage or Incapacitation",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The Chronal Seeker's rarity and the potential for it to unravel temporal anomalies make its price reasonable.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-25T14:42:41.866730+00:00",
    "aiReviewedAt": "2026-07-25T14:42:41.866730+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_jade_drinker_lembas_of_lothlorien": {
    "id": "middle_earth_item_the_jade_drinker_lembas_of_lothlorien",
    "name": "The Jade Drinker’s Lembas of Lothlórien",
    "description": "The Jade Drinker’s Lembas of Lothlórien is a delicate, luminescent strand of lembas, crafted by the Silvan Elves in the heart of Lothlórien. Its leaves shimmer with an ethereal glow, reminiscent of moonlight and honeysuckle, granting its eater heightened agility and uncanny stealth. Consumers can blend seamlessly into Mirkwood's shadows, gaining advantage on Stealth checks for 60 seconds, while also enjoying minor healing that restores 5 hit points upon consumption.",
    "category": "consumables",
    "price": 1300,
    "icon": "🌿",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Increased Agility",
      "Shadow Camouflage"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_pony",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Increased Agility",
        "rules": "Consume the Jade Drinker’s Lembas to gain a +10% bonus to Dexterity (Athletics) checks for 60 seconds. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Shadow Camouflage",
        "rules": "Gain advantage on Stealth checks for 60 seconds after consuming the lembas. The effect ends if you take damage, cast a spell, or are no longer in shadowy conditions. This ability uses one charge and recharges after a long rest."
      }
    ],
    "levelRequirementReason": "This item is crafted for seasoned travelers who have already mastered the basics of survival and stealth.",
    "vendorReason": "The Elven Market caters to adventurers seeking rare, enchanted provisions from Lothlórien.",
    "shippingDetail": "Delivered swiftly by winged ponies through the airways of Mirkwood, ensuring freshness and reliability.",
    "usage": {
      "activation": "Instantaneous consumption upon finding it in your inventory.",
      "duration": "60 seconds per use.",
      "endsWhen": "You take damage, cast a spell, or exit shadowy conditions; recharges after a long rest.",
      "charges": "Limited to 3 uses per day."
    },
    "priceReason": "Crafted by the Silvan Elves and rare in supply, this lembas commands a high price but offers substantial battlefield advantages.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T03:01:11.724406+00:00",
    "aiReviewedAt": "2026-07-25T03:01:11.724406+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_grimstone_hammer_of_kildrak": {
    "id": "middle_earth_item_the_grimstone_hammer_of_kildrak",
    "name": "The Grimstone Hammer of Kildrak",
    "description": "The Grimstone Hammer of Kildrak, forged deep within Khazad-dûm's forges by the ancient blacksmith Kildrak, pulses with an icy chill that seeps through every strike. This hammer not only grants its wielder temporary resistance to fire damage but also enhances their mining prowess, allowing them to extract minerals from stone at a speed unmatched by others. With each blow, there’s a chance it will trigger a seismic tremor in the earth around it.",
    "category": "equipment",
    "price": 24000,
    "icon": "🔨",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Fire Resistance",
      "Enhanced Mining"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dwarven_cart",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "When wielded, this hammer provides temporary resistance to fire damage (+25%) for 30 seconds. It ends immediately if the wielder is no longer holding it."
      },
      {
        "title": "Enhanced Mining",
        "rules": "The wielder gains a +15 bonus to mining checks and excavation attempts, but this effect does not apply when using other tools or weapons. The enhanced mining speed lasts until the end of the wielder's next turn."
      }
    ],
    "levelRequirementReason": "To master such a powerful artifact from Khazad-dûm requires significant experience and skill.",
    "vendorReason": "The dwarves of Khazad-dûm are the original creators of this hammer, and they maintain its legacy by selling it to those who have earned the right.",
    "shippingDetail": "Ships via a specially chartered dwarven cart, ensuring safe delivery through treacherous paths.",
    "usage": {
      "activation": "Instantaneous when picked up and used in mining or combat.",
      "duration": "30 seconds of fire resistance; until the end of next turn for enhanced mining.",
      "endsWhen": "If the wielder drops the hammer or ceases using it in a mining attempt.",
      "charges": "Unlimited, but recharges after 24 hours if left unused."
    },
    "priceReason": "The balanced price reflects the item's rarity and the significant XP value of its effects without making it overpowered.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T03:01:34.207547+00:00",
    "aiReviewedAt": "2026-07-25T03:01:34.207547+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_silver_whisperstone_of_rivendell": {
    "id": "middle_earth_item_the_silver_whisperstone_of_rivendell",
    "name": "The Silver Whisperstone of Rivendell",
    "description": "The Silver Whisperstone of Rivendell, carved from the ancient stone of Imladris, hums softly as it resonates with the wisdom and secrets of Elrond's library. This enchanted gem grants its bearer a heightened awareness and an uncanny ability to perceive hidden truths, making every glance through its facets feel like a step into the past. Holding it allows one to uncover ancient prophecies and subtle clues that others might miss in their surroundings.",
    "category": "curiosities",
    "price": 87000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "delivery_only",
    "effects": [
      "Elven Insight",
      "Perception Boost"
    ],
    "vendor": "shire_shop",
    "shippedBy": "swiftwind_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elven Insight",
        "rules": "When activated, this stone grants the wielder a +2 bonus to Intelligence (Wisdom) checks for 10 minutes. The user must spend a short rest after using it."
      },
      {
        "title": "Perception Boost",
        "rules": "The wielder gains advantage on Perception checks for 5 minutes, and has a small chance (d20 roll under 11) to uncover hidden clues in the environment. This effect ends if the user takes damage or falls unconscious."
      }
    ],
    "levelRequirementReason": "The stone's power is accessible to all adventurers who seek knowledge, but only those capable of understanding its whispers can truly benefit.",
    "vendorReason": "The Shire Shop has established a trust with Rivendell, offering rare and ancient goods like the Silver Whisperstone.",
    "shippingDetail": "Swiftly delivered by the swift wind hawks within three days of purchase.",
    "usage": {
      "activation": "As an action",
      "duration": "10 minutes for Elven Insight, 5 minutes for Perception Boost; ends if interrupted or upon taking damage",
      "endsWhen": "The duration expires or the user takes damage",
      "charges": "Unlimited charges"
    },
    "priceReason": "Balanced as a legendary item with significant lore and utility, yet accessible to all adventurers.",
    "priceOriginal": 55000,
    "priceReviewedAt": "2026-07-25T15:16:47.162521+00:00",
    "aiReviewedAt": "2026-07-25T15:16:47.162521+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_crimson_evolution_caller": {
    "id": "pokemon_item_crimson_evolution_caller",
    "name": "The Crimson Echo Caller's Ribbons",
    "description": "The Crimson Echo Caller's Ribbons are a shimmering cascade of energy spun from the very essence of legendary Pokémon evolutions. These ribbons resonate with primal instincts, amplifying a Trainer’s bond and enhancing their Pokémon’s growth and learning. When worn, they grant a surge of power that can push even the most docile Pokémon to new heights, but this connection comes at a cost: prolonged use risks causing erratic behavior in both Trainer and Pokémon alike.",
    "category": "consumables",
    "price": 1300,
    "icon": "🔥",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Growth",
      "Boosted Special Attack"
    ],
    "vendor": "pokemart",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Enhanced Growth",
        "rules": "When worn, the ribbons grant a +15% increase to the growth rate of the Pokémon for 2 hours. The effect can only be applied once per day and requires an hour-long meditation session to activate."
      },
      {
        "title": "Boosted Special Attack",
        "rules": "The ribbons provide a +7 boost to the Pokémon's Special Attack statistic, which lasts until the end of the next long rest. This effect can only be used once per week and requires a 10-minute focus session."
      }
    ],
    "levelRequirementReason": "This item is reserved for trainers who have already mastered basic Pokémon care and training.",
    "vendorReason": "The Pokemart stocks a wide variety of items that enhance the daily life and training of Pokémon, making these ribbons an easy addition to their offerings.",
    "shippingDetail": "Ships via Drone Delivery within 48 hours.",
    "usage": {
      "activation": "Activates with a 10-minute focus session or hour-long meditation session.",
      "duration": "Enhanced Growth lasts for 2 hours, Boosted Special Attack until the end of the next long rest.",
      "endsWhen": "The effect ends when the time duration expires or the ribbons are removed.",
      "charges": "Both effects can only be used once per day and week respectively."
    },
    "priceReason": "This item's price reflects its rarity, limited stock, and the strategic balance required to maintain Trainer-Pokémon harmony without causing undue stress.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T14:43:55.911783+00:00",
    "aiReviewedAt": "2026-07-25T14:43:55.911783+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_tainted_genesis_caller": {
    "id": "pokemon_item_tainted_genesis_caller",
    "name": "Tainted Genesis Caller’s Ribbons - Mk.37 Variant",
    "description": "Woven from the corrupted remnants of a Fallen Pokémon's final moments, these ribbons pulse with an unsettling energy that warps and bends reality. Wearing them grants access to dormant potential within your team but carries the risk of attracting negative spectral presences – a dangerous bargain for any ambitious Trainer. The ribbons can empower allies with latent abilities while also summoning dark shadows that test the resolve of even the strongest warriors.",
    "category": "equipment",
    "price": 5000,
    "icon": "💀",
    "stock": 9,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Shadow Empower",
      "Spectral Attraction"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Shadow Empower",
        "rules": "Increases the Critical Hit Ratio of all adjacent Pokémon by +15% for 45 seconds. Ends if a Shadow Pokémon is summoned or the wearer takes damage."
      },
      {
        "title": "Spectral Attraction",
        "rules": "Grants a small chance (20%) of attracting and summoning a Shadow Pokémon to the battlefield. The Shadow Pokémon has a CR equal to 1/8th of your team's total level. It dissipates after 6 rounds or if it is defeated."
      }
    ],
    "levelRequirementReason": "Requires significant experience and mastery over one's Pokémon to wield the ribbons without attracting unwanted spectral attention.",
    "vendorReason": "The Safari Shop caters to those seeking unique, albeit dangerous, items that can enhance or challenge their adventures in the wild.",
    "shippingDetail": "Delivered swiftly by Courier Pigeon, but only during the night when the darkness aligns with the ribbons' power.",
    "usage": {
      "activation": "Activates on command as a bonus action.",
      "duration": "45 seconds or until a Shadow Pokémon is summoned or the wearer takes damage.",
      "endsWhen": "A Shadow Pokémon is defeated, the wearer takes damage, or 6 rounds after summoning.",
      "charges": "Unlimited"
    },
    "priceReason": "The ribbons' rarity and the risk they pose justify their price as a balanced addition to any Trainer's arsenal.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T03:01:51.268496+00:00",
    "aiReviewedAt": "2026-07-25T03:01:51.268496+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_divine_abyss_caller": {
    "id": "pokemon_item_divine_abyss_caller",
    "name": "The Divine Abyss Caller – Forbidden Ribbons of the Deep",
    "description": "The Divine Abyss Caller – Forbidden Ribbons of the Deep are woven from the threads of forgotten deities and the darkest abysses. These ribbons hum ominously, their power capable of turning tides in battle but also drawing the wrath of ancient spirits. Wearing them grants a fleeting union with divine might, yet the risk is ever-present: malevolent forces may claim the user's soul if the call is too strong or prolonged.",
    "category": "forbidden",
    "price": 87000,
    "icon": "😈",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Divine Might",
      "Malevolent Attraction"
    ],
    "vendor": "league_store",
    "shippedBy": "Sacred Messenger of the Abyss",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Divine Might",
        "rules": "Activates as a bonus action. Grants immunity to all status conditions for 1 minute and +50% damage boost against Ghost and Dark type creatures. Ends when the user takes any non-magical physical damage or if the user voluntarily ends it."
      },
      {
        "title": "Malevolent Attraction",
        "rules": "At the start of each of your turns, there is a 25% chance that a malevolent spirit attempts to claim you. This attempt requires a DC 18 Wisdom saving throw or the user is cursed with a random effect for 1d4 days. The item can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Divine Abyss Caller demands significant power to wield its divine and malevolent forces without risk.",
    "vendorReason": "Only the league store can offer such forbidden artifacts, ensuring they are used responsibly by those who have proven their worth.",
    "shippingDetail": "Delivered with a ceremonial procession to ensure its sacred nature is respected and protected during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute, ends when non-magical physical damage is taken or voluntarily ended by the user",
      "endsWhen": "Non-magical physical damage is taken or the user ends it",
      "charges": "Once per long rest"
    },
    "priceReason": "The price reflects its rarity, the risk involved in using it, and the significant power it grants.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-25T03:02:21.964337+00:00",
    "aiReviewedAt": "2026-07-25T03:02:21.964337+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_pyro_materials_of_adventure": {
    "id": "teyvat_item_pyro_materials_of_adventure",
    "name": "The Crimson Hearthcaller's Remains",
    "description": "The Crimson Hearthcaller's Remains are charred fragments of an ancient pyro god, exuding a pungent sulfur scent and fiery heat. When wielded, these remnants grant temporary resistance to fire damage, bolstering your offensive capabilities with scorching attacks that can ignite foes and spread burning effects across the battlefield. Handle with caution as prolonged exposure risks spontaneous combustion, making this relic both a blessing and a curse for the brave.",
    "category": "consumables",
    "price": 5000,
    "icon": "🔥",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Fire Resistance",
      "Scorched Strike"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "swift_lynx express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "The user gains resistance to fire damage for 60 seconds. This effect cannot be extended by any means and is not cumulative with other forms of resistance."
      },
      {
        "title": "Scorched Strike",
        "rules": "The wielder's next attack has a 35% chance to ignite the target, dealing an additional 2d6 fire damage on hit. This effect can only occur once per combat and is not stackable with other igniting abilities."
      }
    ],
    "levelRequirementReason": "Beginners who have shown promise in handling intense heat are the most suitable candidates for this relic.",
    "vendorReason": "The market of Mondstadt is known for its eclectic collection of rare and unique items, including remnants from ancient gods.",
    "shippingDetail": "Ships via the swift lynx courier service ensuring fast delivery to eager adventurers.",
    "usage": {
      "activation": "Instantaneous activation upon pickup or donning of the remains.",
      "duration": "60 seconds from activation.",
      "endsWhen": "The effect ends when the duration expires, the user is no longer in contact with the relic, or the user takes any non-magical damage.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at this price to reflect its rare origin and potent effects without making it overpowered for a common adventurer.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T15:23:09.169264+00:00",
    "aiReviewedAt": "2026-07-25T15:23:09.169264+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_mystic_caller_of_resonance": {
    "id": "teyvat_item_mystic_caller_of_resonance",
    "name": "The Umbral Resonance Echoer",
    "description": "The Umbral Resonance Echoer is a solidified sphere of mystic energy, pulsing with a deep violet glow that resonates within your grasp. Crafted from ancient elemental shards and imbued with the essence of the void, it amplifies your magical prowess while subtly destabilizing nearby arcane fields. This Echoer can disrupt enemy formations by stunning foes during its brief duration, making it an invaluable tool for both solo combatants and tactically minded strategists.",
    "category": "equipment",
    "price": 24000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Elemental Amplification",
      "Stunning Disruption"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_cart",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Elemental Amplification",
        "rules": "Activating the Echoer grants you a +20% elemental damage bonus for 45 seconds. This effect is instantaneous and does not require an action or reaction. The duration resets if you deactivate it early."
      },
      {
        "title": "Stunning Disruption",
        "rules": "When you cast a spell using this Echoer, there is a 30% chance to stun the target for 1 round (DC 18 Consave). This effect has no cooldown and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Echoer's complexity requires a high level of magical proficiency.",
    "vendorReason": "Liyue Harbor is known for its mastery of elemental magic and the Echoer's unique properties align with their expertise.",
    "shippingDetail": "Ships via a sea cart, delivered within 5 days of purchase.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "45 seconds or until deactivated",
      "endsWhen": "Deactivated early or at the end of your next turn if not manually ended",
      "charges": "Unlimited; resets daily"
    },
    "priceReason": "Balanced for an Epic item with significant utility and risk, reflecting its high rarity.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:03:04.099899+00:00",
    "aiReviewedAt": "2026-07-25T03:03:04.099899+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_mk67_forbidden_materials": {
    "id": "teyvat_item_mk67_forbidden_materials",
    "name": "The Obsidian Shard of the Silent Echo",
    "description": "The Obsidian Shard of the Silent Echo is a fragment of forgotten realms, forged in the heart of shadowy abysses. Its surface gleams with an eerie luminescence that dances like shadows, and it whispers secrets of ancient battles. Activating this shard grants you control over darkness, allowing for stealth and fear-inducing attacks – but its power comes at a cost to your sanity. The shards are said to have been crafted by the Silent Echoes, spirits who were once locked within the obsidian itself.",
    "category": "forbidden",
    "price": 280000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "back_order",
    "effects": [
      "Shadow Control",
      "Silent Fear"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Spectral Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Control",
        "rules": "As a bonus action, you can assume control over shadows in your immediate vicinity. For up to 1 minute, you can move and manipulate the shadows within a 30-foot radius as if they were terrain, creating brief concealment or blocking line of sight. This effect has no save DC and can be used once per short rest."
      },
      {
        "title": "Silent Fear",
        "rules": "As an action, you unleash a wave of fear from the shard, targeting up to three creatures within 60 feet. Each target must make a Wisdom saving throw (DC 15). On a failed save, they are frightened for 1 minute and take 2d8 psychic damage. This effect has a recharge after a long rest."
      }
    ],
    "levelRequirementReason": "The shard's power is accessible to all who can channel the shadowy essence within.",
    "vendorReason": "Inazuma Imports deals in rare, ancient artifacts from Teyvat and this shard was recovered during one of their expeditions into the depths of forgotten realms.",
    "shippingDetail": "The shard is shipped under heavy magical protection to prevent tampering with its power.",
    "usage": {
      "activation": "Bonus action, once per short rest for Shadow Control; Action for Silent Fear, recharges after a long rest.",
      "duration": "Shadow Control lasts up to 1 minute; Silent Fear affects targets until the end of their next turn or when they are no longer within range.",
      "endsWhen": "Shadow Control ends if you lose concentration (as a bonus action); Silent Fear ends on the target as it makes a successful saving throw, is knocked unconscious, or dies.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The shard's mythic rarity and unique properties justify its moderate price in experience points.",
    "priceOriginal": 58000,
    "priceReviewedAt": "2026-07-25T03:02:42.680030+00:00",
    "aiReviewedAt": "2026-07-25T03:02:42.680030+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_chromatic_data_cascade": {
    "id": "internet_item_chromatic_data_cascade",
    "name": "The Chromatic Data Cascade",
    "description": "The Chromatic Data Cascade hums with a vibrant, shifting spectrum of data light. This pulsating link refracts incoming digital streams into an ever-changing rainbow of information. When activated, it grants temporary immunity to algorithmic surveillance and allows the user to intercept encrypted communications within a limited range. However, prolonged use risks dissolving one's own digital identity, leaving behind fleeting data fragments that can be harnessed for brief tactical advantage before vanishing entirely.",
    "category": "equipment",
    "price": 87000,
    "icon": "🌈",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "temporal surveillance shield",
      "encrypted communication interception"
    ],
    "vendor": "cyber_market",
    "shippedBy": "drone_delivery",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Temporal Surveillance Shield",
        "rules": "Activates as a bonus action. Grants immunity to algorithmic surveillance for 1 minute. Ends if the user is targeted by an effect that requires saving against, or after 1 minute, whichever comes first."
      },
      {
        "title": "Encrypted Communication Interception",
        "rules": "Active within a 30-foot radius. Allows the user to attempt to intercept encrypted communications once per short rest. Failure on a DC 15 Intelligence (Computers) check results in no effect, and a second failure risks the cascade's instability."
      }
    ],
    "levelRequirementReason": "Requires significant digital expertise and experience with data manipulation to safely wield this powerful tool.",
    "vendorReason": "The cyber market specializes in high-tech, rare items that can be used for both defensive and offensive purposes in the digital realm.",
    "shippingDetail": "Ships via specialized drones capable of navigating complex urban data networks.",
    "usage": {
      "activation": "Bonus action to activate; once per short rest to intercept communications.",
      "duration": "1 minute or until the user is targeted by a surveillance effect requiring saving against, whichever comes first.",
      "endsWhen": "After 1 minute, or if the user fails two consecutive Intelligence (Computers) checks while using it.",
      "charges": "Unlimited; recharge after long rest."
    },
    "priceReason": "Balanced as a rare legendary item that provides significant digital advantages but comes with substantial risks.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T15:16:57.721900+00:00",
    "aiReviewedAt": "2026-07-25T15:16:57.721900+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_ominous_linkmaker_07": {
    "id": "internet_item_ominous_linkmaker_07",
    "name": "The Ominous Linkmaker 07",
    "description": "The Ominous Linkmaker 07 is a cold, obsidian device that hums with malevolent energy as it opens rifts to forgotten corners of the network. Activating it distorts reality around you, revealing fragments of deleted websites and echoing with the voices of lost users. The air grows thick with corrupted data, and you can feel the digital entities stirring in the shadows. A relic of a bygone era, this device is as dangerous as it is mysterious.",
    "category": "curiosities",
    "price": 5000,
    "icon": "💀",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Opens rifts to corrupted data zones",
      "Elicits memories of lost identities"
    ],
    "vendor": "data_dealer",
    "shippedBy": "encrypted_packet",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Rift Creation",
        "rules": "Activating the Ominous Linkmaker 07 opens a localized distortion in reality, creating an area where fragments of deleted websites and digital echoes are revealed. This effect lasts for 1 minute per caster level. The rift has a radius of 25 feet centered on the user. Any creature that enters this area must succeed on a DC 15 Wisdom saving throw or be affected by the device's corrupted data, which deals 1d6 necrotic damage at the start of its turn and imposes the Frightened condition until it leaves the area."
      },
      {
        "title": "Memory Echoes",
        "rules": "At the end of each round spent in proximity to the rift created by the Ominous Linkmaker 07, a creature within 30 feet must succeed on a DC 15 Wisdom saving throw or gain one level of exhaustion. This effect can only occur once per target and does not stack."
      }
    ],
    "levelRequirementReason": "Requires at least 4th-level spellcasting to handle the device's volatile nature.",
    "vendorReason": "The Data Dealer specializes in rare and dangerous relics, including the Ominous Linkmaker 07.",
    "shippingDetail": "Ships via encrypted packet, delivered within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per caster level",
      "endsWhen": "The user or any creature in the area fails a Wisdom saving throw to resist the corrupted data's effects.",
      "charges": "Unlimited, but only usable once per long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare and dangerous nature.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T03:03:36.809777+00:00",
    "aiReviewedAt": "2026-07-25T03:03:36.809777+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_viral_link_collector_alpha": {
    "id": "internet_item_viral_link_collector_alpha",
    "name": "The Viral Link Collector Alpha",
    "description": "The Viral Link Collector Alpha is a sleek, bio-luminescent device that glows with an ethereal blue light. Crafted from rare neural-thread and network-silk, it captures fleeting viral links—ephemeral tendrils of information that spread rapidly across the digital ether. This gadget grants its wielder temporary access to trending topics and allows for subtle manipulation of data flow, but prolonged exposure risks total mental assimilation into the vast, ever-changing web.",
    "category": "consumables",
    "price": 1300,
    "icon": "🦠",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "temporal network awareness",
      "viral link capture"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "optical_fiber",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Network Awareness",
        "rules": "As an action, you can activate the device to gain advantage on Intelligence (Investigation) checks related to digital networks and current trends. This effect lasts for 10 minutes per use."
      },
      {
        "title": "Viral Link Capture",
        "rules": "The device can capture a single viral link as an action, providing you with immediate access to the information it contains. You may attempt to manipulate this data using your Charisma (Deception) or Persuasion check once per use."
      }
    ],
    "levelRequirementReason": "This gadget is designed for beginners who wish to explore digital realms and gather information without requiring high-level proficiency.",
    "vendorReason": "Pixel Shop specializes in cutting-edge tech gadgets, making it the perfect vendor for this state-of-the-art device.",
    "shippingDetail": "Ships via secure optical fiber with a guaranteed delivery time of one day within major cities.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "10 minutes per use for Temporal Network Awareness; Instantaneous for Viral Link Capture",
      "endsWhen": "The effect ends when the duration expires or you deactivate it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The device's balanced price reflects its unique combination of utility and risk, making it a valuable yet manageable asset for explorers.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T03:03:22.336417+00:00",
    "aiReviewedAt": "2026-07-25T03:03:22.336417+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_shimmering_ice_dragon_eater": {
    "id": "earth_land_item_shimmering_ice_dragon_eater",
    "name": "The Shimmering Ice Dragon Eater",
    "description": "The Shimmering Ice Dragon Eater, a wand forged from the shattered teeth of ancient frost dragons, hums with glacial energy. Crafted in the heart of the Frostpeak Mountains by the legendary Frostweaver guild, it can consume the very essence of ice and cold. When unleashed upon a dragon's breath, it unravels its defenses, leaving only brittle shards and shimmering frost behind. This relic regenerates mana each turn and has a chance to freeze targets for two turns, turning their attacks into futile bursts of ice.",
    "category": "equipment",
    "price": 1400000,
    "icon": "🧊",
    "stock": 5,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Freezes Targets",
      "Regenerates Mana"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Ice Beast Express",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Frozen Annihilation",
        "rules": "When the Shimmering Ice Dragon Eater is activated as a bonus action and targets an enemy within 30 feet, it deals 4d6 cold damage. The target must succeed on a DC 25 Dexterity saving throw or be frozen in place for two turns, reducing its movement speed to zero."
      },
      {
        "title": "Mana Regeneration",
        "rules": "At the start of each of the wielder's turns, this item regenerates one mana point. This effect is limited to once per turn and does not stack with other sources of mana regeneration."
      }
    ],
    "levelRequirementReason": "The Shimmering Ice Dragon Eater requires a level 20 character due to its immense power and the intricate magic needed to wield it.",
    "vendorReason": "Magic Shop is known for its extensive collection of rare and powerful artifacts, including those with frost-based abilities that require specialized knowledge to use effectively.",
    "shippingDetail": "The Ice Beast Express ensures swift delivery through the frigid landscapes, guaranteeing that the Shimmering Ice Dragon Eater reaches its destination in pristine condition.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous; frozen effect lasts for two turns",
      "endsWhen": "Target escapes the freezing effect or the wielder is incapacitated",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "The Shimmering Ice Dragon Eater's price reflects its rarity and the materials used in its crafting, as well as its powerful effects against frost-based creatures.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T03:03:42.990114+00:00",
    "aiReviewedAt": "2026-07-25T03:03:42.990114+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_jade_rune_of_the_lost_city": {
    "id": "earth_land_item_jade_rune_of_the_lost_city",
    "name": "Jade Rune of the Lost City’s Embrace",
    "description": "The Jade Rune of the Lost City’s Embrace, a teardrop-shaped amulet crafted from jade imbued with ancient magic, pulses faintly as it whispers secrets of forgotten empires. This artifact grants you fleeting visions into hidden subterranean pathways and long-lost treasures, enhancing your perception to uncover concealed dangers and magical traps lurking beneath the city’s surface. It is a relic that only those attuned to its power can wield effectively.",
    "category": "curiosities",
    "price": 5000,
    "icon": "💎",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Reveals Hidden Passages",
      "Enhances Perception"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "groundhog_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Hidden Passages",
        "rules": "When you enter a new area, you can use an action to activate the rune. It reveals hidden underground passages within 30 feet for one minute. The effect ends if you move more than 10 feet away from where you activated it."
      },
      {
        "title": "Enhances Perception",
        "rules": "While wearing this amulet, your Perception checks are made with advantage until the end of your next long rest. This effect cannot be used again for 24 hours after previous use."
      }
    ],
    "levelRequirementReason": "The jade is attuned to those who possess a deep connection to ancient lore and hidden knowledge.",
    "vendorReason": "The Earth Emporium specializes in artifacts from lost civilizations, making it the perfect vendor for such an item.",
    "shippingDetail": "Groundhog Delivery ensures safe arrival within three days of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "One minute or until you move more than 10 feet away from the activation point",
      "endsWhen": "You move more than 10 feet away from where you activated it, or if you rest for an hour",
      "charges": "Unlimited"
    },
    "priceReason": "The jade's rarity and its ability to reveal hidden dangers make it a valuable but not exorbitant addition to any adventurer’s arsenal.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:03:57.836217+00:00",
    "aiReviewedAt": "2026-07-25T03:03:57.836217+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_Mk.87_runic_stormcaller": {
    "id": "earth_land_item_Mk.87_runic_stormcaller",
    "name": "Mk.87 Runic Stormcaller’s Fury",
    "description": "Crafted by dwarven artificers, the Mk.87 Runic Stormcaller’s Fury is a formidable wand inscribed with runes that summon miniature storms of lightning and hail. Its erratic nature makes it unpredictable but devastating in the hands of a skilled wielder, capable of disrupting enemy formations and turning the tide of battle. When activated, it unleashes bolts of lightning and a torrential downpour that not only deal significant damage but also slow and stun foes, creating chaos on the battlefield.",
    "category": "equipment",
    "price": 1500,
    "icon": "⚡",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Lightning Bolt",
      "Stunning Torrent"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "dwarven_cartwrights",
    "levelRequirement": 28,
    "effectDetails": [
      {
        "title": "Lightning Bolt",
        "rules": "When activated as a bonus action, the Mk.87 Runic Stormcaller’s Fury fires a bolt of lightning that deals 150 thunder damage to one target within 30 feet and has a 25% chance to stun it for 1 turn. The effect ends if the wielder attacks or casts another spell."
      },
      {
        "title": "Stunning Torrent",
        "rules": "Activating the wand as an action creates a torrential downpour within a 20-foot radius that lasts for 1 minute, reducing movement speed by half and imposing disadvantage on attack rolls. This effect is ended if the wielder uses any action to move more than 10 feet or enters a space with difficult terrain."
      }
    ],
    "levelRequirementReason": "Requires 28th level due to its powerful elemental effects and unpredictable nature.",
    "vendorReason": "The guild quartermaster specializes in high-level magical wands and weapons, ensuring the quality and rarity of items like the Mk.87 Runic Stormcaller’s Fury.",
    "shippingDetail": "Shipped via the Dwarven Cartwrights Express, known for their reliable and swift deliveries within the realm.",
    "usage": {
      "activation": "Bonus action to fire a lightning bolt; action to create a stunning torrent. Each effect can only be used once per long rest.",
      "duration": "Instantaneous for Lightning Bolt; lasts 1 minute for Stunning Torrent",
      "endsWhen": "The effect ends if the wielder attacks or casts another spell, moves more than 10 feet, or enters difficult terrain.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Reflects its high-level functionality and the expertise of dwarven artificers in crafting such a powerful wand.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-25T03:04:19.885501+00:00",
    "aiReviewedAt": "2026-07-25T03:04:19.885501+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_the_netherfall_bearer": {
    "id": "grand_country_item_the_netherfall_bearer",
    "name": "The Netherfall Bearer’s Ladders",
    "description": "The Netherfall Bearer's Ladders are obsidian ladders inscribed with runes that flicker like dying embers, etched by ancient hands long lost to time. When held, they momentarily destabilize gravity within a 10-foot radius, creating a zone of shifting layers where the laws of physics bend and twist. Within this space, climbers gain enhanced grip, making precarious ascents possible, and experience a fleeting resistance to falling damage as if caught by an invisible net.",
    "category": "equipment",
    "price": 1300,
    "icon": "🪜",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Grip",
      "Minor Fall Damage Resistance"
    ],
    "vendor": "side_seller",
    "shippedBy": "Swift Courier Service - Priority Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Enhanced Grip",
        "rules": "When the user holds one of the ladders, they gain a +15 bonus to Strength (Athletics) checks made for climbing. This effect lasts until the start of your next turn."
      },
      {
        "title": "Minor Fall Damage Resistance",
        "rules": "For every 10 feet fallen within the 10-foot radius around you while holding one ladder, you take no damage and are instead pushed up by 5 feet. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Netherfall Bearer's Ladders require a minimum level of 15 to wield effectively, as they channel powerful arcane energies.",
    "vendorReason": "Side Seller specializes in rare and exotic equipment from forgotten realms, making the Netherfall Bearer's Ladders an ideal addition to their inventory.",
    "shippingDetail": "The ladders are shipped rolled up and require unrolling upon arrival; a small tool is included for this purpose.",
    "usage": {
      "activation": "Action: Hold one of the ladders while in the area it affects.",
      "duration": "Instantaneous, ends when you stop holding the ladder or when the area's effect duration ends.",
      "endsWhen": "The effect ends if you stop holding the ladder or enter an area where the effect is not active.",
      "charges": "Unlimited; recharges after a long rest."
    },
    "priceReason": "The Netherfall Bearer's Ladders are crafted from rare obsidian and infused with ancient runes, making them both valuable and powerful.",
    "priceOriginal": 789,
    "priceReviewedAt": "2026-07-25T14:44:22.076050+00:00",
    "aiReviewedAt": "2026-07-25T14:44:22.076050+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_layered_echo_curiosity": {
    "id": "grand_country_item_layered_echo_curiosity",
    "name": "Echo of the Layered Resonance",
    "description": "The Echo of the Layered Resonance is a shimmering orb made from fractured stone and metal, each layer whispering tales of bygone eras. When held, it amplifies sound within its vicinity by thirty percent, allowing ears to catch faint echoes of past events—footsteps, whispers, and distant sounds long buried in time. This curious artifact grants you a fleeting awareness of the layers beneath the surface, revealing the hidden history that shapes your immediate surroundings.",
    "category": "curiosities",
    "price": 5000,
    "icon": "🔊",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Amplifies Sound",
      "Reveals Past Echoes"
    ],
    "vendor": "layer_market",
    "shippedBy": "Ground Courier - Standard",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Amplified Hearing",
        "rules": "When you hold the Echo of the Layered Resonance, it amplifies all sounds within a twenty-foot radius by thirty percent. This effect lasts for one minute and can be activated as a bonus action."
      },
      {
        "title": "Past Echoes Revelation",
        "rules": "Once per short or long rest, you can use the item to gain insight into past events by hearing faint echoes of sounds from a specific location. You must make an Intelligence (History) check with a DC equal to 10 + the number of layers revealed. On a success, you learn one significant event related to that location."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of two due to its complex nature and ability to reveal past events.",
    "vendorReason": "The Layer Market specializes in curiosities from the deepest layers, making this artifact an apt addition to their collection.",
    "shippingDetail": "Delivered within three days of purchase.",
    "usage": {
      "activation": "Bonus action to activate Amplified Hearing; once per short or long rest for Past Echoes Revelation.",
      "duration": "Amplified Hearing lasts one minute. Past Echoes Revelation is a single-use effect.",
      "endsWhen": "The duration ends when the time expires, or if you stop holding the item.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects its rare nature and unique ability to reveal past events in addition to amplifying sound.",
    "priceOriginal": 1250,
    "priceReviewedAt": "2026-07-25T03:04:13.447699+00:00",
    "aiReviewedAt": "2026-07-25T03:04:13.447699+00:00",
    "aiReviewVersion": 1
  }
};
