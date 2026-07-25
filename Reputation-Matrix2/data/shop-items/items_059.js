// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_059 = {
  "middle_earth_ringwraith_shard": {
    "id": "middle_earth_ringwraith_shard",
    "name": "Shadowfell Fragment",
    "description": "A pulsating shard of pure darkness, radiating a chilling aura that makes nearby souls shiver and tremble. This fragment is said to have once been part of a Ringwraith's armor, imbued with the malevolent essence of the Shadowfell. Touching it feels like stepping into an endless nightmarish void; one might succumb to the allure of eternal darkness or find oneself compelled to gather lost souls for its master. This fragment is a relic of ancient evil, and those who dare wield it must walk carefully lest they be consumed by its malevolent influence.",
    "category": "curiosities",
    "price": 64000,
    "icon": "🌑",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chill_touch",
      "soul_gatherer"
    ],
    "vendor": "elven_market",
    "shippedBy": "dragon_airship",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Chill Touch",
        "rules": "As an action, the user can touch another creature within reach. The target must make a DC 15 Constitution saving throw or be chilled for 1 minute, during which time it has disadvantage on attack rolls and ability checks."
      },
      {
        "title": "Soul Gatherer",
        "rules": "The user gains advantage on saving throws against being charmed or frightened. Additionally, once per short rest, the user can attempt to gather a soul by making a DC 15 Wisdom (Insight) check. On a success, it successfully gathers one willing creature's soul into itself."
      }
    ],
    "levelRequirementReason": "Only those of great power and experience in the ways of darkness can wield this fragment without succumbing to its corrupting influence.",
    "vendorReason": "The elves of Mirkwood have long traded with the forces of the Shadowfell, and they are privy to such dark artifacts.",
    "shippingDetail": "Ships via a dragon airship, which can be delayed by up to one week due to the inherent risks of transporting such dangerous items.",
    "usage": {
      "activation": "Action or Reaction (to touch another creature)",
      "duration": "Chill Touch: 1 minute; Soul Gatherer: Instantaneous",
      "endsWhen": "Chill Touch ends when it is dispelled, and the target no longer has disadvantage on its rolls. Soul Gatherer ends after one use per short rest.",
      "charges": "Unlimited (recharged by the next dawn)"
    },
    "priceReason": "The price reflects the rarity of such an artifact, requiring great skill and resources to acquire.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-24T23:55:42.872448+00:00",
    "aiReviewedAt": "2026-07-24T23:55:42.872448+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_shrieking_totem": {
    "id": "animatopia_shrieking_totem",
    "name": "Shrieking Totem of the Howling Wind",
    "description": "The Shrieking Totem of the Howling Wind, crafted from the bones of howler monkeys petrified by ancient magic, emits a bone-chilling shriek that can be heard miles away. When activated, it not only drowns out lesser spirits with its cacophony but also sends a gust of wind strong enough to scatter even the mightiest foe or drive off pesky insects. Legend has it that those who hear its call are left in a state of disoriented fear, their minds clouded by the howling wind.",
    "category": "curiosities",
    "price": 3600,
    "icon": "📢",
    "stock": 45,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Bone-Shattering Shriek",
      "Wind-Scourging Gust"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged beetle courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Bone-Shattering Shriek",
        "rules": "When activated as a bonus action, the totem emits an ear-splitting shriek that has a 50% chance to cause creatures within 30 feet to make a DC 14 Wisdom saving throw or become frightened for 1 minute. The effect ends if the user moves more than 20 feet away from the totem."
      },
      {
        "title": "Wind-Scourging Gust",
        "rules": "The totem generates a gust of wind in a 30-foot cone, pushing creatures within it up to their movement speed. This effect lasts for 1 minute or until dispelled by magic. The totem can only use this ability once every long rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 6 due to the potent effects and magical components involved.",
    "vendorReason": "The Tribal Trader specializes in ancient and mystical artifacts, making it fitting for this powerful totem.",
    "shippingDetail": "Shipped by a fleet of winged beetles, the delivery takes no more than 3 days from the nearest market point.",
    "usage": {
      "activation": "Bonus action to activate and use Bone-Shattering Shriek; once per long rest to use Wind-Scourging Gust.",
      "duration": "1 minute for each effect",
      "endsWhen": "The effect ends when the creature moves more than 20 feet away from the totem or is dispelled by magic.",
      "charges": "Unlimited, recharges at dawn."
    },
    "priceReason": "Balanced price reflects its powerful effects and rarity, ensuring it remains a valuable but not overpowered item in gameplay.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T22:12:21.795279+00:00",
    "aiReviewedAt": "2026-07-23T22:12:21.795279+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_bonebreaker_gauntlets": {
    "id": "animatopia_bonebreaker_gauntlets",
    "name": "Bonebreaker Gauntlets of the Primal Fist",
    "description": "Forged from the shattered claws of a giant badger, these gauntlets are a marvel of primal craftsmanship. The Bonebreaker Gauntlets of the Primal Fist deliver bone-crushing blows with each strike, their weight surprisingly light despite their formidable appearance. Wear them and feel the primal fury coursing through your veins, ready to unleash devastation upon foes. These gauntlets are not just weapons; they are extensions of nature itself, whispering ancient truths into your mind.",
    "category": "equipment",
    "price": 10000,
    "icon": "👊",
    "stock": 12,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "bone-crushing打击",
      "primal_fury"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_snail",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Bone-Crushing Strikes",
        "rules": "When you make a melee attack with these gauntlets, you deal an extra 1d6 bludgeoning damage. This effect lasts for the duration of one short rest."
      },
      {
        "title": "Primal Fury",
        "rules": "While wearing these gauntlets, you gain advantage on Strength checks and saving throws. Additionally, you have a 20% chance to enter a primal rage once per long rest, which lasts for 1 hour or until you are reduced to 0 hit points."
      }
    ],
    "levelRequirementReason": "These gauntlets require a minimum of 10th level to wield effectively due to their complex enchantments and the strength they demand.",
    "vendorReason": "The Beast Bazaar specializes in exotic and powerful items from the primal world, making these gauntlets an excellent addition to their inventory.",
    "shippingDetail": "Delivered by a giant snail, this item arrives with care, ensuring it reaches its destination intact.",
    "usage": {
      "activation": "Instantaneous activation for each melee attack.",
      "duration": "One short rest to recharge the bone-crushing effect.",
      "endsWhen": "The primal rage ends when you finish a long rest or are reduced to 0 hit points.",
      "charges": "Unlimited, recharging on a short rest."
    },
    "priceReason": "This price reflects the gauntlets' epic rarity and their unique enchantments that provide both offensive and defensive benefits.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T22:12:18.446020+00:00",
    "aiReviewedAt": "2026-07-23T22:12:18.446020+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_sunstone_amulet": {
    "id": "animatopia_sunstone_amulet",
    "name": "Sunstone Amulet of the Verdant Bloom",
    "description": "The Sunstone Amulet of the Verdant Bloom pulses with a soft golden glow, its surface etched with ancient symbols. Crafted from the heartwood of an enchanted tree in the depths of Animatopia's oldest forest, it channels the life force of the land itself. Wearers find their plants grow twice as fast, and they gain resistance to necrotic damage, making it a gardener’s dream and a guardian against dark magic threats.",
    "category": "curiosities",
    "price": 140,
    "icon": "🌱",
    "stock": 88,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "nature_resistance",
      "accelerated_plant_growth"
    ],
    "vendor": "forest_market",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nature Resistance",
        "rules": "The wearer gains resistance to necrotic damage. This effect lasts until the end of your next turn."
      },
      {
        "title": "Accelerated Plant Growth",
        "rules": "Plants in a 10-foot radius around you grow at double their normal rate for 1 hour per use, expending one charge. If used while interacting with plant life (such as planting seeds), the duration is halved."
      }
    ],
    "levelRequirementReason": "The amulet's natural power requires minimal magic to activate.",
    "vendorReason": "The forest market thrives on the connection to nature and often sells items that enhance it.",
    "shippingDetail": "Delivery drones ensure quick and safe transport through Animatopia's dense foliage.",
    "usage": {
      "activation": "Use an action to activate.",
      "duration": "Instantaneous effect, lasting until the end of your next turn for Nature Resistance. Duration for Accelerated Plant Growth is 1 hour per charge used.",
      "endsWhen": "The effect ends when you use another amulet with this ability or at the start of your next turn after the duration.",
      "charges": "Has a limited number of charges, recharging after 8 hours of rest."
    },
    "priceReason": "Balanced price considering its unique abilities and rarity within Animatopia.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T22:12:02.945174+00:00",
    "aiReviewedAt": "2026-07-23T22:12:02.945174+00:00",
    "aiReviewVersion": 1
  },
  "chaos_rune_amulet": {
    "id": "chaos_rune_amulet",
    "name": "Amulet of Shifting Fate",
    "description": "The Amulet of Shifting Fate is a malevolent trinket crafted from dark glass and bound with threads of chaotic energy. It pulses faintly, casting an unsettling aura around its wearer. This amulet can either grant you the grace to dodge calamity or bring about untold misfortune for those near you. Wario's endorsement suggests it's a perfect tool for causing mayhem, yet its unpredictable nature ensures your fate remains in flux.",
    "category": "curiosities",
    "price": 820,
    "icon": "🌀",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Random Fortune Shift",
      "Enhanced Evasion"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "winged_beetle",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Random Fortune Shift",
        "rules": "At the start of each combat round, there is a 25% chance that either you or one creature within 10 feet of you (your choice) are affected by this amulet. The target gains or loses an advantage on their next attack roll, saving throw, or ability check, depending on your preference."
      },
      {
        "title": "Enhanced Evasion",
        "rules": "While wearing the amulet, you have a +10 bonus to Dexterity saving throws and a 20% chance to dodge a melee attack against you. This effect does not stack with other evasion abilities."
      }
    ],
    "levelRequirementReason": "The unpredictable nature of the amulet's effects requires a moderate amount of experience and confidence.",
    "vendorReason": "The Chaos Dealer specializes in items that bring chaos into the world, making this amulet an ideal offering.",
    "shippingDetail": "Delivered by a swift winged beetle courier, ensuring quick and safe transport of this dangerous artifact.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous and continuous until the amulet's charges are exhausted.",
      "endsWhen": "The amulet runs out of charges or is destroyed by chaotic forces.",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "The unpredictable nature and chaotic energy make this item worth 1000 XP, balancing its risk and potential reward.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T22:12:16.730603+00:00",
    "aiReviewedAt": "2026-07-23T22:12:16.730603+00:00",
    "aiReviewVersion": 1
  },
  "fate_forge_temporal_scroll": {
    "id": "fate_forge_temporal_scroll",
    "name": "Temporal Scroll of Minor Reversal",
    "description": "The Temporal Scroll of Minor Reversal, crafted by the enigmatic Fate Forge, is a delicate scroll imbued with the essence of time itself. It allows you to rewind reality for a brief instant—just enough to correct a single misstep or seize a fleeting advantage. The scroll's power comes from the very fabric of the dimensional portal through which it was shipped, and its use must be measured: misuse might unravel the very threads of causality.",
    "category": "premium",
    "price": 10000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "rewind time",
      "undo failed action"
    ],
    "vendor": "fate_forge",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "Activates as a reaction. You can use this scroll to reverse up to 3 seconds of recent events, affecting only you or an adjacent creature within your reach. The effect is instantaneous and cannot be used if you are incapacitated."
      },
      {
        "title": "Undo Failed Action",
        "rules": "Activates as a reaction to a failed action save (such as a saving throw). You can use this scroll to negate the failure, effectively treating it as a success. This effect has no cooldown but cannot be used if you are incapacitated."
      }
    ],
    "levelRequirementReason": "A moderate spellcaster or capable fighter can wield its time-altering power.",
    "vendorReason": "The enigmatic Fate Forge is known for its mastery of temporal magic and their scrolls are sought after by those who need to correct the past without altering too much.",
    "shippingDetail": "Ships via a dimensional portal, adding one day to delivery time but ensuring safe transport through alternate dimensions.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "Used or expended",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this scroll is priced moderately to reflect its utility without being overpowered.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:12:34.001816+00:00",
    "aiReviewedAt": "2026-07-23T22:12:34.001816+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_sparkle_coin": {
    "id": "mushroom_kingdom_sparkle_coin",
    "name": "Glimmering Gold Coin of Chaos",
    "description": "This Glimmering Gold Coin of Chaos exudes an otherworldly sheen that seems to dance in the light. Crafted from chaotic gold found deep within the Maelstrom Caverns, it is rumored to bring both fortune and misfortune. Holders have reported fits of laughter so uncontrollable they've been known to attract unwanted attention, while others claim it grants a fleeting sense of calm followed by an annoying case of hiccups that lasts for hours.",
    "category": "consumables",
    "price": 140,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_5_luck",
      "chance_to_trigger_random_effect"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant 5 Luck",
        "rules": "When activated as a bonus action, the coin grants the user an additional d20 roll on any skill check or saving throw. This effect lasts until the start of your next turn."
      },
      {
        "title": "Chance to Trigger Random Effect",
        "rules": "If held for more than 1 minute without activation, there is a 50% chance (DC 12) each round that a random effect occurs: either uncontrollable laughter or hiccups. The specific effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Suitable for beginners, this coin is an accessible tool for any adventurer looking to test their luck.",
    "vendorReason": "The Toad Town Market often stocks unique items from various vendors, including the whimsical and unpredictable Glimmering Gold Coin of Chaos.",
    "shippingDetail": "Delivered by the Mushroom Post, known for its reliable but sometimes slow service through the fungal networks beneath the land.",
    "usage": {
      "activation": "Bonus action to activate and gain luck bonus or trigger random effect.",
      "duration": "Luck bonus lasts until start of next turn; random effect lasts until end of current turn.",
      "endsWhen": "Effect ends when its duration expires or the coin is activated again.",
      "charges": "Unlimited uses, but only one effect can be active at a time."
    },
    "priceReason": "The coin's rarity and unpredictable nature justify this higher price point for players seeking unique advantages in their adventuring endeavors.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:12:38.304402+00:00",
    "aiReviewedAt": "2026-07-23T22:12:38.304402+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_pipe_wrench": {
    "id": "mushroom_kingdom_pipe_wrench",
    "name": "Wario's Plumbing Prototype",
    "description": "Wario's Plumbing Prototype is a monstrous wrench, its head formed from hardened mushroom slime and its handle crafted from tarnished metal that whispers of Wario's failed experiments. This oversized tool has a reputation for exacerbating rather than resolving plumbing dilemmas, yet it grants the wielder unmatched strength and the ability to break through even the most stubborn locks with ease. Rumor has it that Wario discarded this creation after realizing its destructive potential far outweighed any utility.",
    "category": "equipment",
    "price": 3600,
    "icon": "🔧",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase_strength_5",
      "chance_to_break_locked_doors"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "mushroom_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "When the wielder attacks with a weapon, they gain a +5 bonus to their Strength (Athletics) checks for 1 hour. This effect can only be used once per short or long rest."
      },
      {
        "title": "Lockbreaker's Edge",
        "rules": "The wielder has a 20% chance of automatically breaking through any lock they attempt, regardless of the DC. This effect is limited to three uses per day and resets at dawn."
      }
    ],
    "levelRequirementReason": "Wario's Plumbing Prototype is designed for beginners who are still learning their trade but wish to impress with its sheer size and legendary origin.",
    "vendorReason": "The Koopa Shop specializes in oddities, and this peculiar wrench fits right into their collection of unique tools and items.",
    "shippingDetail": "Due to its cumbersome size, Wario's Plumbing Prototype is shipped via the Mushroom Express courier service, ensuring safe delivery but with a slight delay.",
    "usage": {
      "activation": "Instantaneous use on attacks and lock attempts.",
      "duration": "1 hour for Strength Boost; limited uses per day for Lockbreaker's Edge.",
      "endsWhen": "At the start of each short or long rest, or when the daily limit is reached.",
      "charges": "Unlimited as long as it remains functional."
    },
    "priceReason": "The rare and limited nature of Wario's Plumbing Prototype justifies its high price in the market.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:12:53.589402+00:00",
    "aiReviewedAt": "2026-07-23T22:12:53.589402+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_forbidden_echo_stone": {
    "id": "mushroom_kingdom_forbidden_echo_stone",
    "name": "Stone of Silent Screams",
    "description": "The Stone of Silent Screams is a pulsating obsidian relic carved from the heart of an ancient, sentient mushroom. Its whispers are not for the faint of mind—only those who dare to hear it can discern its cryptic secrets. Failure to heed its call may lead to uncontrollable laughter or a paralyzing fear that mushrooms will consume all. The stone's power is both perilous and potent, offering insight into forbidden knowledge but at a terrible cost.",
    "category": "forbidden",
    "price": 3600,
    "icon": "💀",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "insight_into_secrets",
      "increased_fear_of_mushrooms"
    ],
    "vendor": "wario_direct",
    "shippedBy": "shadow_delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Insight Into Secrets",
        "rules": "When activated as an action, the user gains advantage on one Intelligence (History) check related to mushrooms or mycelium for 1 hour. The stone's effect ends if used in a chaotic environment."
      },
      {
        "title": "Increased Fear of Mushrooms",
        "rules": "The user must make a DC 15 Wisdom saving throw. On a failed save, the user becomes frightened of mushrooms until the end of their next short or long rest. This effect can be resisted with a successful save."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level to handle the stone's inherent peril without succumbing to its effects.",
    "vendorReason": "Wario Direct specializes in rare, forbidden items that test even the most seasoned adventurers.",
    "shippingDetail": "Shipped via shadow courier; delivery time varies but is guaranteed within a week.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "1 hour or until used in a chaotic environment.",
      "endsWhen": "Used in a chaotic environment, or after 1 hour if not used chaotically.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP to reflect the stone's dangerous and potentially life-altering effects.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:13:03.194613+00:00",
    "aiReviewedAt": "2026-07-23T22:13:03.194613+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_stirrup_of_swiftness": {
    "id": "equestria_item_stirrup_of_swiftness",
    "name": "Stirrups of Swift Hooves",
    "description": "The Stirrups of Swift Hooves are crafted from enchanted pony hoof leather, imbued by the skilled artisans of Ponyville with the essence of a swift Pegasus's stride. When donned, your legs feel as light and agile as a filly in her first race, allowing you to outpace even the fleetest of Pegasi. A rare find at the Ponyville Market, these stirrups not only increase your speed by 10 feet but also enhance your riding skill, granting a +2 bonus on Riding checks.",
    "category": "equipment",
    "price": 3600,
    "icon": "🐎",
    "stock": 30,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increase_movement_speed",
      "boost_riding_skill"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Magic Express Pony Delivery",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Increased Movement Speed",
        "rules": "While wearing the Stirrups of Swift Hooves, you gain an additional 10 feet to your walking and riding speeds. This effect is active as long as you are mounted or on foot."
      },
      {
        "title": "Boosted Riding Skill",
        "rules": "You gain a +2 bonus to all Riding checks while wearing the stirrups, allowing for smoother rides and more precise control of your steeds."
      }
    ],
    "levelRequirementReason": "Wearing enchanted equipment requires a certain level of skill and focus to harness its full potential.",
    "vendorReason": "The artisans at Ponyville Market are known for their craftsmanship, offering only the finest magical items like these stirrups.",
    "shippingDetail": "Ships via Magic Express Pony Delivery, ensuring swift and safe arrival within a few days of your order.",
    "usage": {
      "activation": "Passive effect active as long as the stirrups are worn.",
      "duration": "Permanent until removed or destroyed.",
      "endsWhen": "The item is removed from wear or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with enchanted leather and imbued with powerful magic, these stirrups are a rare find, making them worth the investment.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T22:13:23.999054+00:00",
    "aiReviewedAt": "2026-07-23T22:13:23.999054+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_maple_syrup_potion": {
    "id": "equestria_item_maple_syrup_potion",
    "name": "Maple Syrup of Sweet Victory",
    "description": "This golden nectar, brewed by a disgruntled pony chef in the Crystal Empire, is a potent remedy for misfortune. Sip this syrup of sweet victory and you'll find yourself immune to poison for an hour, just long enough to outmaneuver your foes. But beware, the sticky residue left behind can make even the most nimble feet slip on polished floors. Offer it wisely—your enemies might not be so eager to accept a gift from someone with such a tricky touch.",
    "category": "consumables",
    "price": 820,
    "icon": "🍯",
    "stock": 90,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "poison_immunity",
      "temporary_stickiness"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poison Immunity",
        "rules": "You gain immunity to poison for one hour. This effect has no save DC and does not consume charges or require an action."
      },
      {
        "title": "Temporary Stickiness",
        "rules": "For the duration of this effect, you are considered to have a light sticky coating that reduces your Dexterity (Acrobatics) checks by 2. The sticky residue lasts for one hour and can be washed off with a thorough cleaning."
      }
    ],
    "levelRequirementReason": "This potion is designed for beginners and adventurers just starting their journey.",
    "vendorReason": "Crystalfrost, the Crystal Empire's apothecary, brews this nectar to ensure even novices can protect themselves from misfortune.",
    "shippingDetail": "Delivered by the Crystal Pony Express with same-day delivery within the Crystal Empire. Outside of the empire, delivery might take up to a week.",
    "usage": {
      "activation": "飲用",
      "duration": "1 小時",
      "endsWhen": "效果結束或使用人被毒傷",
      "charges": "無限制"
    },
    "priceReason": "價格調整為平衡此特殊效果的價值，並反映其稀有性。",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T22:13:23.875548+00:00",
    "aiReviewedAt": "2026-07-23T22:13:23.875548+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_rusty_dagger": {
    "id": "middle_earth_rusty_dagger",
    "name": "Gimli's Grumbleblade",
    "description": "Gimli's Grumbleblade, a once-grumpy dwarf’s dagger now polished to gleam, still retains its rust and ale-scented charm. Crafted from ancient dwarven iron, it whispers of battles fought in the deeps of mines. This blade slices through leather with ease, leaving behind a trail of crimson as it bleeds its foes. Caution: wielders beware the dwarf’s temper—Gimli’s Grumbleblade is no joke when it comes to slicing and dicing!",
    "category": "equipment",
    "price": 820,
    "icon": "🗡️",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "damage_slashing_1d6",
      "bleed_on_cleave"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "iron_rider",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Damage on Slash",
        "rules": "When you make a slashing attack with Gimli's Grumbleblade, deal 1d6 slashing damage. If the target is reduced to half its hit points or fewer by this attack, it bleeds until it spends an action to staunch the wound."
      },
      {
        "title": "Cleave Bleed",
        "rules": "If you use Gimli's Grumbleblade to make a successful melee attack against more than one target in the same round, and at least one of those targets is reduced to half its hit points or fewer by this attack, that target bleeds until it spends an action to staunch the wound."
      }
    ],
    "levelRequirementReason": "Gimli's Grumbleblade demands a seasoned warrior who can handle its unpredictable nature and wield it with precision.",
    "vendorReason": "Dwarven blacksmiths appreciate the blade’s ancient craftsmanship and history, ensuring it is well-crafted for those who seek to honor Gimli's legacy.",
    "shippingDetail": "Shipped by the Iron Rider, known for its sturdy caravans that traverse treacherous paths safely.",
    "usage": {
      "activation": "On a slashing attack",
      "duration": "Instantaneous",
      "endsWhen": "The target spends an action to staunch the wound or until the attacker is incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "Gimli's Grumbleblade’s rare craftsmanship, history, and unpredictable nature justify its higher price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T22:13:18.593716+00:00",
    "aiReviewedAt": "2026-07-23T22:13:18.593716+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_elven_potion_of_swiftness": {
    "id": "middle_earth_elven_potion_of_swiftness",
    "name": "Whisperwind Elixir",
    "description": "Whisperwind Elixir is a shimmering potion crafted by the elusive Silvan elves of Middle-earth. Its aroma hints at pine and the crisp air of twilight, while its taste remains suspiciously like pine needles and disappointment. This potent elixir grants you an exhilarating burst of speed for three seconds, allowing you to outrun most foes in a fleeting moment. It's said that messengers favor this potion for quick deliveries or when they need to escape the clutches of grumpy trolls, as it offers a 25% increase in movement range during its brief duration.",
    "category": "consumables",
    "price": 3600,
    "icon": "💨",
    "stock": 38,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "speed_boost",
      "increased_movement_range"
    ],
    "vendor": "elven_market",
    "shippedBy": "flying_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "You gain a +10 foot bonus to your walking speed for three seconds. This effect ends if you take any damage or when the duration expires."
      },
      {
        "title": "Increased Movement Range",
        "rules": "During the three-second duration of this effect, your movement range increases by 25%. This enhancement ceases upon taking any damage or at the end of its duration."
      }
    ],
    "levelRequirementReason": "This elixir is accessible to all adventurers who can afford it, as it offers a reliable edge in quick escapes and deliveries.",
    "vendorReason": "The Elven Market sells this elixir because the Silvan elves are known for their mastery of alchemy and swift messenger services.",
    "shippingDetail": "Shipped by a fleet of flying hawks, ensuring the potion arrives fresh to your doorstep.",
    "usage": {
      "activation": "Drink the elixir as an action.",
      "duration": "3 seconds.",
      "endsWhen": "You take damage or at the end of its duration.",
      "charges": "Unlimited."
    },
    "priceReason": "This price reflects the rarity and limited production of the Whisperwind Elixir, which is highly valued for both its elven craftsmanship and practical utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T22:13:18.907530+00:00",
    "aiReviewedAt": "2026-07-23T22:13:18.907530+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_side_seller_potion": {
    "id": "grand_country_side_seller_potion",
    "name": "Wario's Side-Splitting Serum",
    "description": "Wario's Side-Splitting Serum is a frothy, neon-green concoction that bubbles in its glass vial, emanating an aroma of deep-fried delights and sharp vinegar. This Grand Country elixir not only restores health but also grants a temporary boost to your charisma, making you the life of any party. The serum has a tendency to make you laugh uncontrollably, which might be contagious among those nearby, potentially doubling their laughter as well.",
    "category": "consumables",
    "price": 140,
    "icon": "😋",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores_health",
      "temporary_buff_to_charisma"
    ],
    "vendor": "side_seller",
    "shippedBy": "standard_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Health",
        "rules": "This serum provides a +2 temporary hit point boost upon consumption. It lasts until the start of your next turn."
      },
      {
        "title": "Temporary Buff to Charisma",
        "rules": "For 1 minute after consuming this serum, your Charisma score is increased by 2 (up to a maximum of 20). You can't use this effect if you already have the benefit from it. This buff ends early if you take any damage."
      }
    ],
    "levelRequirementReason": "This potion is designed for adventurers just starting their journey, providing them with a much-needed health boost and an easy way to make friends.",
    "vendorReason": "The side seller in The Grand Country is known for their vast knowledge of local remedies and potions. Wario's Side-Splitting Serum is one such potion that they are proud to offer.",
    "shippingDetail": "Delivered via standard mail, ensuring the serum arrives just as effective as when it was brewed.",
    "usage": {
      "activation": "Consume the vial by drinking its contents.",
      "duration": "One minute for each effect.",
      "endsWhen": "The effects end either at their duration or if you take damage.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "This balanced price reflects the rare ingredients and brewing process required to create Wario's Side-Splitting Serum, ensuring it remains accessible yet valuable for adventurers.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:13:51.584924+00:00",
    "aiReviewedAt": "2026-07-23T22:13:51.584924+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_fate_orb": {
    "id": "curiosity_fate_orb",
    "name": "Whispers of the Fated Place",
    "description": "The Whispers of the Fated Place is a glowing, pulsating orb that emits an eerie, dark hum. It seems to be forged from twisted fate and shadowy knowledge, crafted in the depths of forgotten realms. The orb allows you to glimpse possible futures—occasionally revealing hidden clues for your quest, but also exposing you to fleeting visions of madness. Each use can leave you temporarily disoriented, affecting your senses until the next dawn breaks.",
    "category": "curiosities",
    "price": 820,
    "icon": "🔮",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Clue Revealer",
      "Temporary Madness"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Clue Revealer",
        "rules": "As a bonus action, you may activate the orb to gain one piece of hidden information relevant to your current situation. There is a 10% chance this will be a clue that directly helps with your quest. The effect lasts until the end of your next turn."
      },
      {
        "title": "Temporary Madness",
        "rules": "There is a 5% chance each time you activate the orb to experience a brief period of madness, causing temporary penalties to one negative stat (your choice) for an hour. This effect ends when you rest or upon reaching 0 hit points."
      }
    ],
    "levelRequirementReason": "The Whispers of the Fated Place is accessible to lower-level characters as it introduces a risk-reward dynamic without overwhelming them.",
    "vendorReason": "The Chaos Dealer often deals in unpredictable and dangerous items, making this orb a fitting addition to their wares.",
    "shippingDetail": "The Winged Courier ensures swift delivery but warns that the package may feel heavier than it appears.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of your next turn",
      "endsWhen": "At the start of your next turn, or if you lose consciousness",
      "charges": "Unlimited"
    },
    "priceReason": "The Whispers of the Fated Place is priced high due to its unique and dangerous abilities that enhance gameplay without being overpowered.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T22:13:38.721491+00:00",
    "aiReviewedAt": "2026-07-23T22:13:38.721491+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_ironclad_heart": {
    "id": "warhammer_ironclad_heart",
    "name": "Ironclad Heart of Valor",
    "description": "The Ironclad Heart of Valor is a warhammer forged from the very essence of valor and resilience, its surface etched with ancient runes that pulse with a heartbeat-like rhythm. It amplifies your courage and resilience in battle, but also subtly encourages you to seek out shiny objects and challenge those who doubt your prowess. Its rhythmic pulse seems almost alive, as if the heart itself is imbued with a will of its own.",
    "category": "equipment",
    "price": 3600,
    "icon": "🛡️",
    "stock": 2,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "+2 to armor class",
      "Resistance to fear effects"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Dragon Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resilient Heartbeat",
        "rules": "As an action, you can activate the Ironclad Heart's resilient heartbeat. For the next minute, any damage taken is reduced by 5 (as if wearing light armor). This effect ends early if you are knocked unconscious."
      },
      {
        "title": "Heart of Valor",
        "rules": "For as long as the heart beats within your grasp, you have advantage on saving throws against fear and charm effects. If the heart is ever removed from your possession or destroyed, this effect is immediately lost."
      }
    ],
    "levelRequirementReason": "The Ironclad Heart of Valor is designed for those who seek to harness its power early in their adventuring career.",
    "vendorReason": "Fate Forge specializes in crafting items that resonate with the essence of valor and resilience, making it a fitting vendor for this heart-wrought weapon.",
    "shippingDetail": "The Dragon Delivery Service ensures swift and secure delivery, often accompanied by tales of the hammer's power.",
    "usage": {
      "activation": "Action: Activate as an action to invoke the resilient heartbeat.",
      "duration": "One minute per activation.",
      "endsWhen": "Knocked unconscious or removed from your possession.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "The Ironclad Heart of Valor offers significant defensive and morale-boosting benefits, making it a valuable investment for any adventurer.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T22:14:09.393327+00:00",
    "aiReviewedAt": "2026-07-23T22:14:09.393327+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_charm": {
    "id": "internet_meme_charm",
    "name": "Distorted Reality Charm",
    "description": "The Distorted Reality Charm manifests as an ever-shifting hologram of memes, constantly morphing and glitching in a display that bends reality itself. This bizarre trinket grants its wearer resistance to psychic damage and, with eerie precision, triggers random beneficial effects like temporary invisibility or speed boosts. As if the internet itself were whispering secrets into your ear, this charm occasionally attracts minor distractions—like a swarm of confused pigeons—that grant you advantage on stealth checks.",
    "category": "equipment",
    "price": 3600,
    "icon": "🤪",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Resistance to Psychic Damage",
      "Random Beneficial Effects"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "data_stream",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Resistance to Psychic Damage",
        "rules": "While wearing the Distorted Reality Charm, the wearer gains resistance to psychic damage. This effect is passive and applies at all times while the charm is worn."
      },
      {
        "title": "Random Beneficial Effects",
        "rules": "Once per round, the charm has a 5% chance of triggering a random beneficial effect, such as temporary invisibility or speed boost. The exact effect is determined by the DM and lasts for 1 minute."
      }
    ],
    "levelRequirementReason": "This charm requires at least 6th level to wear due to its complex magical properties.",
    "vendorReason": "The pixel_shop, known for its quirky and internet-inspired items, would naturally stock this bizarre yet popular trinket.",
    "shippingDetail": "Shipped via data_stream, the charm arrives within 24 hours if purchased during the night only.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous, but effects last for their respective durations.",
      "endsWhen": "The charm's power ends when it is destroyed or its wearer removes it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This charming item strikes a balance by offering both resistance to psychic attacks and occasional beneficial effects, making it a rare but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T22:14:17.110642+00:00",
    "aiReviewedAt": "2026-07-23T22:14:17.110642+00:00",
    "aiReviewVersion": 1
  },
  "internet_godly_firewall": {
    "id": "internet_godly_firewall",
    "name": "The Great Firewall of Data",
    "description": "The Great Firewall of Data is a shimmering construct of pure code, its surface etched with runes that flicker like neon in a cybernetic dream. This godly artifact not only grants its wielder unparalleled protection against digital intrusions and malicious spells but also occasionally generates a miniature singularity that briefly erases nearby enemies—chaos, it seems, is delicious indeed! It hums softly as it actively defends its user from all forms of digital interference, ensuring they remain secure in the digital realm.",
    "category": "equipment",
    "price": 1600000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Digital Shield",
      "Singularity Burst"
    ],
    "vendor": "cyber_market",
    "shippedBy": "quantum_transmission",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Digital Shield",
        "rules": "This effect grants the wielder +10 resistance to all magical and digital attacks. It also automatically detects and negates hacking attempts, providing a passive defense that does not require an action."
      },
      {
        "title": "Singularity Burst",
        "rules": "Once per day, this effect can unleash a Singularity Burst dealing 500 radiant damage in a 15-foot radius. The wielder must use their reaction to activate it; failure on the save (DC 20) results in half damage."
      }
    ],
    "levelRequirementReason": "The arcane complexity of the Great Firewall requires significant magical proficiency.",
    "vendorReason": "The cyber market is a hub for digital artifacts and advanced technology, making it the ideal vendor for such a powerful firewall.",
    "shippingDetail": "Ships via quantum transmission, ensuring swift delivery to even the most remote locations.",
    "usage": {
      "activation": "Reaction (Singularity Burst)",
      "duration": "Instantaneous",
      "endsWhen": "The Singularity Burst ends at the start of your next turn if not already ended by its save or range.",
      "charges": "1/Day"
    },
    "priceReason": "This price reflects the item's rarity and the complexity of its magical components, ensuring it remains a high-demand, yet balanced choice.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T22:14:03.009948+00:00",
    "aiReviewedAt": "2026-07-23T22:14:03.009948+00:00",
    "aiReviewVersion": 1
  }
};
