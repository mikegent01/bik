// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_062 = {
  "teyvat_item_elemental_resonance": {
    "id": "teyvat_item_elemental_resonance",
    "name": "Harmonic Echo Bloom",
    "description": "The Harmonic Echo Bloom pulses with raw elemental energy, its petals shimmering in hues of fire's red, water's blue, earth's green, and wind's gray. When held near a source of these elements, it amplifies the wielder’s attacks by channeling their essence into each strike. This rare bloom is rumored to have been crafted from the very heart of the Elemental Resonance itself, found only in the ancient ruins of Teyvat. Holding it near a wind source allows you to conjure gusts that can trip foes within reach.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Elemental Amplification",
      "Wind Gust"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_sprite",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Elemental Amplification",
        "rules": "When held near a source of the element (fire, water, earth, or wind), increase your melee attack damage by 20% for 15 seconds. This effect has no cooldown and can be activated as a bonus action."
      },
      {
        "title": "Wind Gust",
        "rules": "When held near a source of wind, you can cast Gust as an action within range (30 feet). The gust can trip any creature within the area that starts its turn there. This effect has a 1/day limit."
      }
    ],
    "levelRequirementReason": "The Harmonic Echo Bloom requires a minimum level of 8 to harness its elemental power effectively.",
    "vendorReason": "Mondstadt’s market is known for its wide array of rare and magical items, making it the perfect place to find such a legendary bloom.",
    "shippingDetail": "Delivered by Winged Sprite, ensuring swift and safe transport through the skies of Teyvat.",
    "usage": {
      "activation": "Bonus action or as part of an attack (Elemental Amplification); Action (Wind Gust)",
      "duration": "15 seconds for Elemental Amplification; Instantaneous for Wind Gust",
      "endsWhen": "Ends at the start of your next turn for Elemental Amplification; Ends when the effect is used or when you move more than 30 feet from a wind source.",
      "charges": "Unlimited (Restores after long rest)"
    },
    "priceReason": "The Harmonic Echo Bloom's limited availability and the unique skills it grants justify its moderate price.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:43:30.313625+00:00",
    "aiReviewedAt": "2026-07-23T22:43:30.313625+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_archon_seal": {
    "id": "teyvat_item_archon_seal",
    "name": "Seal of the Verdant Archon",
    "description": "This verdant seal is a tangible piece of the Geo Archon's essence, forged from the heart of Liyue’s verdant earth. It grants you a temporary armor boost and enhances your earth magic prowess, but only if it remains in the capable hands of the Verdant Archon's true successor. Should it fall into the wrong hands—or worse, Wario's—its power could be used for ill intent.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Earth Magic Boost",
      "Temporary Armor"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "cargo_ship",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Earth Magic Boost",
        "rules": "Activates as a bonus action. Enhances your earth damage spells by +20% until the start of your next turn."
      },
      {
        "title": "Temporary Armor",
        "rules": "Activates on contact with an enemy, providing +50 temporary hit points for 30 seconds upon successful hit. Ends if you take damage or use another source of temporary hit points."
      }
    ],
    "levelRequirementReason": "Requires level 14 to wield the seal's power responsibly.",
    "vendorReason": "As a trusted vendor in Liyue Harbor, they maintain a reliable supply of such sacred relics.",
    "shippingDetail": "Ships via cargo ship from the verdant heart of Liyue.",
    "usage": {
      "activation": "Bonus action or on contact with an enemy.",
      "duration": "30 seconds, until start of next turn for Earth Magic Boost; ends when you take damage or use another source of temporary hit points for Temporary Armor.",
      "endsWhen": "Starts to fade after its duration.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering the seal's limited stock and night-only availability.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-23T22:43:03.087562+00:00",
    "aiReviewedAt": "2026-07-23T22:43:03.087562+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_vision_artifact": {
    "id": "teyvat_item_vision_artifact",
    "name": "The Wayfarer’s Compass",
    "description": "The Wayfarer's Compass is an ornate, brass compass that gleams in the light of Inazuma. Its needle shifts not to true north but instead points towards the most valuable treasure within a twenty-mile radius. Crafted by wandering alchemists, it exudes an aura of mystique and fortune. This relic increases exploration speed by 30%, making every step a step closer to untold riches, and grants a +1 bonus on saving throws against traps.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧭",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Treasure Seeker",
      "Fortune's Favor"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "dragon_airship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Treasure Seeker",
        "rules": "When you use your action to move within twenty feet of an unexplored area, the compass needle pivots to point directly towards the nearest valuable treasure. This effect can be used once per long rest."
      },
      {
        "title": "Fortune's Favor",
        "rules": "You gain a +1 bonus on saving throws against traps and environmental hazards. This benefit lasts for 8 hours, but you must make one such save every short or long rest to maintain the effect."
      }
    ],
    "levelRequirementReason": "The Wayfarer's Compass is accessible early in the campaign to encourage exploration.",
    "vendorReason": "Inazuma Imports deals exclusively with exotic and magical curiosities from across Teyvat, making this compass a natural addition to their offerings.",
    "shippingDetail": "The compass is carefully packed in silk-lined boxes aboard the dragon airships, ensuring it arrives undamaged.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Treasure Seeker; 8 hours for Fortune's Favor",
      "endsWhen": "At the end of each long rest for Treasure Seeker; after one failed save against traps or hazards for Fortune's Favor",
      "charges": "Unlimited, but only one use per long rest"
    },
    "priceReason": "The Wayfarer's Compass offers a unique combination of exploration and survival benefits at an accessible price for early-game adventurers.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T22:43:23.888576+00:00",
    "aiReviewedAt": "2026-07-23T22:43:23.888576+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_dragonscale_potion": {
    "id": "midlands_item_dragonscale_potion",
    "name": "Dragon's Breath Recovery Potion",
    "description": "Dragon's Breath Recovery Potion is a shimmering red elixir sealed in an ornate glass vial. Crafted from the scales of a juvenile Emberwing Dragon, this potion not only restores 50 hit points but also grants temporary fire resistance. For 60 seconds, you are immune to all fire damage and can shrug off flames with ease. Should you imbibe it during a heated encounter, there's even a slim chance (5%) that your foes might catch a spark of their own.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "heal: 50 HP",
      "fire resistance"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "winged_beast",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing",
        "rules": "As an action, drink the potion to restore 50 hit points. The effect is instantaneous and does not require any saving throw."
      },
      {
        "title": "Fire Resistance",
        "rules": "For 60 seconds after consuming this potion, you have resistance to fire damage. This effect ends when you take fire damage or if the duration expires."
      }
    ],
    "levelRequirementReason": "This potion is designed for adventurers of all levels but is especially useful in early encounters.",
    "vendorReason": "Empire Exchange stocks a variety of potions and elixirs, making this one of their most popular items.",
    "shippingDetail": "Shipped by Winged Beast Courier Service, known for delivering magical goods swiftly.",
    "usage": {
      "activation": "Action",
      "duration": "60 seconds",
      "endsWhen": "Takes fire damage or duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its effects, this potion offers significant healing and a critical advantage against fire-based threats at an affordable price.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T22:43:03.089562+00:00",
    "aiReviewedAt": "2026-07-23T22:43:03.089562+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_obsidian_amulet": {
    "id": "midlands_item_obsidian_amulet",
    "name": "The Shattered Emperor's Eye",
    "description": "The Shattered Emperor's Eye is a fragment of an ancient amulet, its obsidian surface cracked and dark with age. Crafted from the heartstone of a legendary Midlands dragon, it hums faintly as though still connected to the empire’s lost magic. Glimpses of forgotten emperors' wisdom may flicker in your mind when you hold it, but beware—too much focus risks summoning unwanted visitors or leaving you with a splitting headache.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Echoes of Wisdom",
      "Temporal Distortion"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "giant_snail",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Echoes of Wisdom",
        "rules": "When held for at least one minute, the wearer gains advantage on Intelligence checks and saving throws related to history or lore. This effect lasts until the end of their next long rest."
      },
      {
        "title": "Temporal Distortion",
        "rules": "Once per short rest, the amulet can be activated by speaking its name aloud. Doing so creates a minor temporal ripple within 30 feet, attracting any nearby magical creatures with a CR ≤ 2 for 1d4 turns."
      }
    ],
    "levelRequirementReason": "The intricate magic embedded in the amulet requires a high level of arcane knowledge to fully utilize.",
    "vendorReason": "Fractured Forge specializes in ancient and lost artifacts, making it the perfect vendor for this relic.",
    "shippingDetail": "Due to its fragile nature, The Shattered Emperor's Eye is shipped by giant snails, ensuring safe delivery within one week.",
    "usage": {
      "activation": "Passive effect when held; active once per short rest",
      "duration": "Until next long rest for Echoes of Wisdom; 1d4 turns for Temporal Distortion",
      "endsWhen": "Use ends naturally or upon removal from the wearer's possession.",
      "charges": "Unlimited, as it regenerates its effects after a long rest."
    },
    "priceReason": "Reflecting the item's historical and magical significance, this price accounts for both the rarity and the limited availability of such relics.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T22:43:23.704097+00:00",
    "aiReviewedAt": "2026-07-23T22:43:23.704097+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_discord_echo": {
    "id": "equestria_item_discord_echo",
    "name": "Discord's Echoing Stone",
    "description": "Discord's Echoing Stone is a jagged, obsidian orb that hums ominously when held. Its pulsating energies can disrupt foes' coordination and reflexes for fleeting moments. However, prolonged exposure to its chaotic resonance might draw the ire of Discord himself or even summon Wario’s ravenous minions. This relic carries a dark history, forged in the molten heart of Equestria under Discord's own hands, making it both a tool of chaos and a potential catalyst for disaster.",
    "category": "forbidden",
    "price": 1000,
    "icon": "😈",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Disruptive Resonance",
      "Reactive Shield"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Shadow Delivery (Highly Unreliable)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disruptive Resonance",
        "rules": "When activated as an action, the stone grants you advantage on checks and saving throws to avoid being frightened or charmed. It also imposes disadvantage on enemy attack rolls against you for up to 1 minute, with a save DC of 15. This effect ends if you lose concentration (as if concentrating on a spell), are incapacitated, or suffer more than half your hit points in damage."
      },
      {
        "title": "Reactive Shield",
        "rules": "Whenever an enemy within 30 feet makes an attack roll against you, they must make a DC 15 Wisdom saving throw. On a failed save, the attacker takes 2d6 force damage and their attack modifier is reduced by 2 until their next turn."
      }
    ],
    "levelRequirementReason": "This stone's chaotic energies are potent but not beyond the reach of a seasoned adventurer.",
    "vendorReason": "Ponyville Market stocks this item as a rare and powerful forbidden artifact, balancing its danger with its allure for collectors and adventurers.",
    "shippingDetail": "Orders are delivered within 3 days but may be delayed by up to an additional week due to the courier's unpredictable nature.",
    "usage": {
      "activation": "Activate as a bonus action",
      "duration": "1 minute, or until concentration is lost (as if concentrating on a spell)",
      "endsWhen": "Concentration ends, you lose consciousness, or take more than half your hit points in damage",
      "charges": "Unlimited uses"
    },
    "priceReason": "The stone's rarity and the risk it poses to its wielder justify this price.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-23T22:43:45.332529+00:00",
    "aiReviewedAt": "2026-07-23T22:43:45.332529+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_godly_shard_of_zariel": {
    "id": "faerun_item_godly_shard_of_zariel",
    "name": "Shard of the Fallen Angel’s Wrath",
    "description": "The Shard of the Fallen Angel’s Wrath hums with malevolent energy, its surface etched with the remnants of Zariel's divine wrath. When activated, it delivers a searing strike to undead foes, leaving them vulnerable for a moment before your strength is bolstered by an unholy surge. A relic of unfathomable power, this fragment can be both a weapon and a curse, depending on how you wield its dark might.",
    "category": "premium",
    "price": 1000,
    "icon": "😈",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "massive_damage_to_undead",
      "strength_boost"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Massive Damage to Undead",
        "rules": "When the shard is activated by a bonus action within 30 feet of an undead, it deals 5d8 radiant damage. The target must make a DC 20 Dexterity saving throw or become incapacitated until the start of your next turn."
      },
      {
        "title": "Strength Boost",
        "rules": "Upon activation, you gain +2 to Strength and Attack Rolls for 1 minute. You can only activate this effect once per short rest."
      }
    ],
    "levelRequirementReason": "The shard's power is too volatile for those below 15th level, ensuring it remains a challenge even for seasoned adventurers.",
    "vendorReason": "Waterdeep Market prides itself on exotic and dangerous artifacts, making it the perfect destination for such a relic of chaos and order.",
    "shippingDetail": "Ships via a guarded dimensional portal, ensuring its safe arrival despite the inherent risks.",
    "usage": {
      "activation": "Bonus action to activate within 30 feet of an undead.",
      "duration": "Instantaneous damage and 1 minute Strength boost.",
      "endsWhen": "The effect ends when you take another bonus action to activate it or at the end of your next turn if you do not.",
      "charges": "Unlimited, but only one Strength Boost per short rest."
    },
    "priceReason": "Balanced as a powerful premium item that requires significant XP investment without overshadowing more common gear.",
    "priceOriginal": 876543,
    "priceReviewedAt": "2026-07-23T22:44:04.132790+00:00",
    "aiReviewedAt": "2026-07-23T22:44:04.132790+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_crumb_of_eternity": {
    "id": "almost_edge_crumb_of_eternity",
    "name": "Crumb of Eternity",
    "description": "The Crumb of Eternity is a shimmering fragment, a relic from the void that hints at forgotten realities and the endless cycle of time itself. When consumed, it grants temporary resistance to fear and madness, perfect for facing unsettling echoes. However, prolonged exposure risks unraveling one's sanity. This crumb was crafted by ancient beings who walked the edge of existence, now offered by a vendor whose knowledge spans the multiverse.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 32,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Resistance to Fear",
      "Resistance to Madness"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Fear",
        "rules": "When consumed as an action, the Crumb grants temporary resistance to fear-based effects for 1 hour. The effect ends if you take damage or when the duration expires."
      },
      {
        "title": "Resistance to Madness",
        "rules": "Additionally, it provides temporary resistance to madness for 30 minutes upon consumption as an action. This effect is lost if you fail a Wisdom saving throw with a DC of 15 due to exposure to fear or madness."
      }
    ],
    "levelRequirementReason": "This crumb's power is accessible to any adventurer, making it a versatile tool for facing the unknown.",
    "vendorReason": "The void merchant trades in relics and fragments from other dimensions, this one being no exception.",
    "shippingDetail": "The crumb is sent through a dimensional rift, arriving with a delay of 1d4 days due to the instability of the route.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "Resistance to Fear: 1 hour; Resistance to Madness: 30 minutes",
      "endsWhen": "On damage or at the end of each long rest, whichever comes first. The effect ends early if you fail a saving throw.",
      "charges": "Unlimited"
    },
    "priceReason": "This crumb is priced moderately high due to its rarity and the risks involved in obtaining it.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:44:33.821140+00:00",
    "aiReviewedAt": "2026-07-23T22:44:33.821140+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_void_essence_flask": {
    "id": "almost_edge_void_essence_flask",
    "name": "Void Essence Flask",
    "description": "The Void Essence Flask is a glass vessel filled with an inky, swirling void that seems to defy all physical laws. Crafted from arcane crystal and imbued with the essence of the cosmos, it grants fleeting moments of untethered speed and reflexes but carries the dark promise of consuming everything in its path if used too long. A sip is a dance on the edge of oblivion, where you might dodge an arrow that never came or sprint past barriers that no longer exist—but beware; the void's allure is as potent as it is perilous.",
    "category": "consumables",
    "price": 1000,
    "icon": "💨",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Swift Reflexes",
      "Void Dodge"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "gravitational package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swift Reflexes",
        "rules": "When you take this flask, you gain a +4 bonus to Dexterity (Acrobatics) checks and advantage on Dexterity saving throws for 1 minute. This effect ends if you take any damage or if you voluntarily end it as an action."
      },
      {
        "title": "Void Dodge",
        "rules": "As a reaction, when an attack roll is made against you while you are holding the flask, you can make a Dexterity saving throw. On a successful save, you gain advantage on all your next attacks until the end of your next turn."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers just beginning their journey to harness the raw power of the cosmos.",
    "vendorReason": "The edge wanderers, ever curious about the unknown, keep this dangerous but fascinating item in stock.",
    "shippingDetail": "Delivered via a gravitational package that ensures safe transit through the most treacherous voids.",
    "usage": {
      "activation": "飲用 flask",
      "duration": "1 minute or until you take damage or end it as an action",
      "endsWhen": "You take damage, end it as an action, or are no longer holding the flask",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its potent but risky effects, this item is priced reasonably to reflect its value in a perilous world.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:44:19.233963+00:00",
    "aiReviewedAt": "2026-07-23T22:44:19.233963+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_fatebinder": {
    "id": "warhammer_fatebinder",
    "name": "Fatebinder's Crimson Shard",
    "description": "The Fatebinder's Crimson Shard is a pulsating obsidian fragment, its crimson hue casting an eerie glow upon the battlefield. Crafted from ancient volcanic rock and imbued with the chaotic energies of the Plane of Shadow, it allows you to briefly manipulate fate itself. Wield this shard cautiously; a misstep could unravel your allies' strategies or even doom them entirely. It's guaranteed to disrupt enemy spellcasters by either nullifying their magic or sowing confusion within their ranks.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Spell Nullification",
      "Shadowy Confusion"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Winged Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Spell Nullification",
        "rules": "As a bonus action, you can attempt to nullify one spell cast by an enemy within 60 feet. The target must make a Wisdom saving throw (DC 13). On a failed save, the spell is negated, and you gain advantage on your next attack roll with a melee weapon. This effect has no cooldown."
      },
      {
        "title": "Shadowy Confusion",
        "rules": "At the end of each enemy's turn within 60 feet for up to one minute, they must make a Wisdom saving throw (DC 13). On a failed save, the target is confused until the start of their next turn. This effect has a maximum of three uses per long rest."
      }
    ],
    "levelRequirementReason": "It requires a high degree of skill and control to wield the shard effectively.",
    "vendorReason": "As creators of powerful artifacts, Fate Forge is known for their mastery in crafting items that manipulate fate itself.",
    "shippingDetail": "The Winged Courier delivers this shard swiftly, but only once per month due to its volatile nature.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous and one minute (Shadowy Confusion)",
      "endsWhen": "Target saves successfully or the end of the encounter",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's rarity, volatile nature, and unique effects justify its moderate price.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T22:44:04.381807+00:00",
    "aiReviewedAt": "2026-07-23T22:44:04.381807+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_chaos_amulet": {
    "id": "warhammer_chaos_amulet",
    "name": "Amulet of Unmaking",
    "description": "The Amulet of Unmaking is a twisted piece of chaotic metal and bone, its surface etched with ancient runes that whisper promises of destruction. Wear it to bolster your defenses against the void, but be warned – prolonged exposure might drive you mad! This collector’s item is sought by those who appreciate the delightful chaos it brings, though only the most resilient of souls dare to wear it for long.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💀",
    "stock": 33,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Fortified Defense",
      "Necrotic Resilience"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Void Runner",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Fortified Defense",
        "rules": "When you are hit by a melee attack, the amulet grants you a +2 bonus to your AC. This effect lasts until the start of your next turn and can occur once per long rest."
      },
      {
        "title": "Necrotic Resilience",
        "rules": "You have resistance to necrotic damage. Additionally, when you take necrotic damage, there is a 20% chance that the attacker must succeed on a DC 15 Wisdom saving throw or be blinded for 1 minute."
      }
    ],
    "levelRequirementReason": "The Amulet of Unmaking's chaotic nature requires a solid foundation in combat and resilience to wield effectively.",
    "vendorReason": "The chaos dealer specializes in items that embody the dark whimsy and danger of the multiverse, making this amulet an ideal addition to their collection.",
    "shippingDetail": "Delivered by the Void Runner, known for its swift but treacherous routes through the planes.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until the start of your next turn",
      "endsWhen": "At the start of your next turn or when you take a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Amulet of Unmaking offers significant defensive benefits without being overly powerful, striking a balance in value.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T22:44:22.567828+00:00",
    "aiReviewedAt": "2026-07-23T22:44:22.567828+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_mythic_stone_of_echoes": {
    "id": "earth_land_mythic_stone_of_echoes",
    "name": "The Whispering Chunk",
    "description": "The Whispering Chunk is a massive, pulsating stone that hums with an ancient and forgotten power. Its surface glows faintly with ethereal light, and when pressed, it releases cryptic prophecies that can either guide or bewilder the listener. Crafted from the very essence of the earth itself, this relic has been known to befuddle enemies within a 30-foot radius, leaving them momentarily stunned. Wario’s secret weapon against foes, it is both a tool for distraction and a source of mystic insight.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗣️",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Cryptic Prophecy",
      "Stun Enemies"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Giant Beetle Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cryptic Prophecy",
        "rules": "Once per day, the user can touch The Whispering Chunk to receive a cryptic prophecy. This prophecy provides insight into future events but is often open to multiple interpretations. The DM determines its exact nature and meaning."
      },
      {
        "title": "Stun Enemies",
        "rules": "Enemies within 30 feet of the wielder are momentarily confused, requiring a DC 15 Wisdom saving throw to avoid becoming stunned for one round. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "Even the simplest hero can harness The Whispering Chunk’s power to outsmart and distract foes.",
    "vendorReason": "The Earth Emporium deals exclusively in ancient relics and curiosities, many of which are rumored to possess untold powers.",
    "shippingDetail": "Ships via the Giant Beetle Courier, known for its reliability but slightly delayed service due to its massive size.",
    "usage": {
      "activation": "A bonus action to touch and activate The Whispering Chunk.",
      "duration": "Instantaneous; lasts until the end of the next turn or until dispelled.",
      "endsWhen": "The effect ends if the wielder uses it again or if a creature successfully saves against the stun.",
      "charges": "Unlimited, but only one use per long rest."
    },
    "priceReason": "The Whispering Chunk’s balanced price reflects its versatile utility and limited daily usage in combat and exploration.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-23T22:44:37.675845+00:00",
    "aiReviewedAt": "2026-07-23T22:44:37.675845+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_crumb_of_gravity": {
    "id": "grand_country_crumb_of_gravity",
    "name": "Gravity Crumb",
    "description": "These shimmering crumbs seem to defy gravity's steadfast grip, their metallic sheen hinting at a celestial origin. When consumed, they allow you to briefly float upwards or apply a gentle tug upon objects around you, perfect for reaching high ledges or frustrating your foes with an unexpected lift. Each crumb is said to be crafted from the very essence of distant stars and ancient black holes, making them both precious and powerful.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 35,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "grant_temporary_levitation",
      "apply_gravity_push"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "hovering_parcel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Temporary Levitation",
        "rules": "When you consume a Gravity Crumb, you are granted the ability to float upwards for up to 10 feet in any direction. This effect lasts until the start of your next turn. If you take damage or move more than 5 feet while levitating, this effect ends immediately."
      },
      {
        "title": "Apply Gravity Push",
        "rules": "You may apply a gentle push on objects within reach (up to 10 feet) with the consumption of one crumb. This causes any object up to Medium size to be pushed away from you as if it were making a successful Strength saving throw. The DC for this save is equal to 8 + your Dexterity modifier."
      }
    ],
    "levelRequirementReason": "This crumb can be consumed by any adventurer, regardless of their level, due to its simplicity and widespread utility.",
    "vendorReason": "The Vertical Vendor stocks these crumbs as they are a popular choice for adventurers who need quick solutions to tricky situations.",
    "shippingDetail": "Delivered by the hovering parcels, these crumbs arrive swiftly and with a gentle lift, ensuring they are fresh upon arrival.",
    "usage": {
      "activation": "Consumed as an action or bonus action.",
      "duration": "Instantaneous effect; ends at the start of your next turn.",
      "endsWhen": "The effect ends if you take damage, move more than 5 feet while levitating, or if the crumb is consumed again.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Gravity Crumb is priced at 1000 XP as it offers significant utility for adventurers of all levels and in a wide range of situations.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:45:37.865249+00:00",
    "aiReviewedAt": "2026-07-23T22:45:37.865249+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_layer_shift_service": {
    "id": "grand_country_layer_shift_service",
    "name": "Layered Reality Adjustment",
    "description": "The Layered Reality Adjustment is a subtle service that allows you to momentarily realign your position within the layers of reality, folding space and time around you. This expertly crafted service lets you teleport to an adjacent layer, confusing foes and leaving them guessing which plane you've vanished to. With each use, there's a chance for a dimensional shift, potentially sending you to another nearby location or even granting you temporary immunity from phasing attacks.",
    "category": "services",
    "price": 1000,
    "icon": "🔄",
    "stock": 15,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "teleport_to_adjacent_layer",
      "chance_of_dimensional_shift"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleport to Adjacent Layer",
        "rules": "As a bonus action, the user can teleport to an adjacent layer of reality. This effect has a range of touch and lasts for up to 1 minute per use. The target must succeed on a DC 20 Dexterity saving throw or be disoriented for 1 round."
      },
      {
        "title": "Chance of Dimensional Shift",
        "rules": "There's a 30% chance that upon using the service, you are transported to another adjacent layer. If successful, this shift can send you up to 5 feet in any direction from your starting point. This effect has no save and is instantaneous."
      }
    ],
    "levelRequirementReason": "The service requires a basic understanding of reality manipulation, making it accessible at level 1.",
    "vendorReason": "Layer Market specializes in services that manipulate the fabric of reality, making this item an ideal fit for their inventory.",
    "shippingDetail": "Ships via a dimensional portal, ensuring secure and swift delivery through inter-dimensional means.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute per use",
      "endsWhen": "The effect ends when the duration runs out or you are targeted by an attack that requires a saving throw against this effect.",
      "charges": "Unlimited, but limited to one use per day"
    },
    "priceReason": "The service is priced at 1000 XP, reflecting its rarity and the expertise required to perform such an adjustment.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:45:37.862246+00:00",
    "aiReviewedAt": "2026-07-23T22:45:37.862246+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_shard_of_the_vertical": {
    "id": "grand_country_shard_of_the_vertical",
    "name": "Vertical Resonance Shard",
    "description": "The Vertical Resonance Shard is a jagged, obsidian fragment that glows faintly with the essence of ancient mountains. When wielded by a climber, it amplifies one's strength and agility, allowing for rapid ascents and precarious holds—though balance remains key to avoiding a fall. Crafted from the very heart of the Grand Country’s tallest peaks, its energy is said to echo the primal pulse of the earth itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧗‍♀️",
    "stock": 90,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_climbing_speed",
      "reduce_stamina_consumption"
    ],
    "vendor": "side_seller",
    "shippedBy": "standard_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Climbing",
        "rules": "As a bonus action, you can activate the shard. For 1 minute, your climbing speed increases by 20 feet and your Strength (Athletics) checks to climb gain advantage. The effect ends if you fall or are incapacitated."
      },
      {
        "title": "Stamina Conservation",
        "rules": "While the shard is active, any physical exertion that normally would cost stamina points reduces the cost by 1 point per use, up to a maximum reduction of 3 points. This effect ends when the shard's duration expires or you fall."
      }
    ],
    "levelRequirementReason": "This shard is designed for beginners and experienced climbers alike, requiring only basic climbing skills.",
    "vendorReason": "Side Seller specializes in gear that enhances everyday adventures, making this shard a natural fit for their inventory.",
    "shippingDetail": "Delivered within three days of purchase with standard courier services.",
    "usage": {
      "activation": "Bonus action to activate; ends after 1 minute or when you fall/incapacitate yourself.",
      "duration": "1 minute, expiring on falling or incapacitation.",
      "endsWhen": "Expires after 1 minute, falls, or you are incapacitated.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The shard's price is balanced by its utility in enhancing climbing performance without overwhelming the player.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T22:45:16.044854+00:00",
    "aiReviewedAt": "2026-07-23T22:45:16.044854+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_forbidden_spellbook_of_minor_chaos": {
    "id": "kivotos_item_forbidden_spellbook_of_minor_chaos",
    "name": "The Scribblings of Professor Zylth",
    "description": "The Scribblings of Professor Zylth is a rare, leather-bound spellbook that exudes an unsettlingly cheerful aura. Its pages are embossed with strange symbols and adorned with remnants of student snacks, hinting at the chaotic experiments that gave birth to it. Opening it risks unleashing minor inconveniences like misplaced objects and spontaneous laughter, but also occasionally summoning glitter swarms that add a touch of chaos to any classroom. Wario would likely use this book to prank his rivals, causing them to erupt in uncontrollable fits of giggling while their belongings scatter in disarray.",
    "category": "forbidden",
    "price": 1000,
    "icon": "😈",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Minor Inconveniences",
      "Spontaneous Laughter"
    ],
    "vendor": "club_supply",
    "shippedBy": "night_only",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Minor Inconveniences",
        "rules": "Any creature within 10 feet of the spellbook has a 25% chance to experience an inconvenience such as misplaced items or spontaneous laughter. This effect lasts for 1d4 rounds and can be ended by a successful DC 12 Wisdom saving throw."
      },
      {
        "title": "Spontaneous Laughter",
        "rules": "All creatures within 30 feet who fail their saving throw must make an Intelligence save (DC 15) or erupt into uncontrollable laughter, provoking opportunity attacks on the next turn. The effect ends after 2d4 rounds."
      }
    ],
    "levelRequirementReason": "This spellbook requires a level 8 character to safely handle its chaotic potential.",
    "vendorReason": "Club Supply stocks unique and dangerous items that could be used for mischief or pranks, making this spellbook an appropriate addition to their inventory.",
    "shippingDetail": "The book must be delivered by a courier during the night when the risk of accidental activation is minimized.",
    "usage": {
      "activation": "Reading from the book or opening its pages triggers these effects.",
      "duration": "Instantaneous, but effects last for their respective durations.",
      "endsWhen": "A successful saving throw ends the effect prematurely.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the spellbook's chaotic nature and limited availability among vendors.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-23T22:45:06.901072+00:00",
    "aiReviewedAt": "2026-07-23T22:45:06.901072+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_curiosity_chronometer": {
    "id": "kivotos_item_curiosity_chronometer",
    "name": "Temporal Tick-Tock",
    "description": "The Temporal Tick-Tock is an ornate pocket watch crafted from polished brass and adorned with intricate engravings that whisper of ancient lore. This relic allows its wielder to briefly alter time, allowing a single action to be rewound, perfect for correcting minor mistakes or setting things right. The watch's gears hum with the energy of forgotten spells, granting an intuitive boost in perception checks but also carrying a small risk of unpredictable temporal effects.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🕰️",
    "stock": 50,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Rewind Single Action",
      "Boost Perception Checks"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_shipping",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Single Action",
        "rules": "Activates as a bonus action. The user can rewind one recent action they have taken, effectively undoing it. This effect lasts until the start of their next turn and can only be used once per day."
      },
      {
        "title": "Boost Perception Checks",
        "rules": "+1 to all perception checks made by the wearer during the session. This bonus does not stack with other similar bonuses."
      }
    ],
    "levelRequirementReason": "Beginners can affordably access this relic, making it a versatile tool for early adventurers.",
    "vendorReason": "The student store caters to the scholarly needs of young mages and rogues looking for practical tools like the Temporal Tick-Tock.",
    "shippingDetail": "Standard delivery, no special handling required.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until start of next turn",
      "endsWhen": "Starts of next turn or interrupted by a major event",
      "charges": "Once per day"
    },
    "priceReason": "The Temporal Tick-Tock is priced at 1000 XP, offering balanced utility and a touch of whimsy for beginning adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:45:21.543719+00:00",
    "aiReviewedAt": "2026-07-23T22:45:21.543719+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_forbidden_rune_of_despair": {
    "id": "earth_land_forbidden_rune_of_despair",
    "name": "Rune of Whispered Sorrow",
    "description": "The Rune of Whispered Sorrow is a hauntingly beautiful etching on a shard of obsidian, said to have been crafted by ancient sorcerers in despair. When activated, it emits a chilling aura that can sap the morale of foes and instill sorrow in those who gaze upon it for too long. Touching it without care may leave you feeling profoundly melancholic, with the urge to seek comfort in simple pleasures like pudding.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🖤",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "demoralize_enemies",
      "induce_sadness"
    ],
    "vendor": "magic_shop",
    "shippedBy": "shadow_courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Demoralize Enemies",
        "rules": "When activated, this rune induces a wave of melancholy that reduces the morale of enemies within 30 feet. This effect lasts until the start of your next turn or until an enemy successfully saves against a DC 15 Wisdom saving throw."
      },
      {
        "title": "Induce Sadness",
        "rules": "Any creature who looks at the rune for more than 1 minute must make a DC 13 Constitution saving throw or become sad, taking a -2 penalty to attack rolls and ability checks until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level to wield this powerful but dangerous artifact.",
    "vendorReason": "The magic shop is well-known for handling and selling forbidden artifacts, including those with dark origins like the Rune of Whispered Sorrow.",
    "shippingDetail": "Ships discreetly via the shadow courier service, ensuring the rune arrives securely without drawing unwanted attention.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Until the start of your next turn or until an enemy saves successfully against the demoralize effect.",
      "endsWhen": "An enemy successfully saves against the demoralize effect, or the duration ends.",
      "charges": "Recharge after a long rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its powerful but dangerous effects and limited utility.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-23T22:45:32.051954+00:00",
    "aiReviewedAt": "2026-07-23T22:45:32.051954+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_artifact_lucky_footstool": {
    "id": "earth_land_artifact_lucky_footstool",
    "name": "Wario's Lucky Footstool (Prototype)",
    "description": "Wario's Lucky Footstool (Prototype) is a worn wooden footrest with an unsettlingly cheerful banana motif. Crafted from reclaimed wood and adorned with mismatched patches, it whispers stories of Wario's early misadventures in his workshop. When placed underfoot, the stool occasionally grants its owner a lucky find: either a small pouch of gold coins or a bruised but perfectly edible banana, both of which appear as if by magic.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍌",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "coin_of_luck",
      "fruit_of_fortune"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "cart_on_wheels",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Coin of Luck",
        "rules": "When the footstool is placed underfoot, there's a 10% chance that the next successful attack or spell cast by the user results in an additional 2d6 gold coins being dropped at their feet."
      },
      {
        "title": "Fruit of Fortune",
        "rules": "Once per long rest, the stool can produce a bruised banana, which grants temporary hit points equal to twice the user's proficiency bonus for one hour. The banana appears in the user's hand and is perfectly edible."
      }
    ],
    "levelRequirementReason": "This prototype footstool is designed to be simple enough for even a novice adventurer, but its unique properties make it valuable.",
    "vendorReason": "Earth Emporium specializes in eclectic and rare curiosities, making Wario's Lucky Footstool (Prototype) an excellent fit.",
    "shippingDetail": "Shipped via a cart on wheels, delivered with a friendly smile by the shopkeeper himself.",
    "usage": {
      "activation": "Passive effect when placed underfoot.",
      "duration": "Instantaneous for each effect; temporary hit points last one hour.",
      "endsWhen": "The stool's magical properties exhaust after producing its effects.",
      "charges": "Unlimited, as long as the footstool remains in use."
    },
    "priceReason": "While not a rare or powerful item, this prototype's unique and whimsical features make it highly sought-after among adventurers.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T22:45:38.057713+00:00",
    "aiReviewedAt": "2026-07-23T22:45:38.057713+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_lyue_merchant_charm": {
    "id": "teyvat_item_lyue_merchant_charm",
    "name": "Lyue Merchant's Subtle Influence",
    "description": "The Lyue Merchant's Subtle Influence is a polished jade charm, said to channel the essence of Liyue's bustling markets. Crafted by skilled artisans in the harbor, this charm subtly enhances one's negotiation skills and haggling prowess, allowing for smoother transactions amidst the city's competitive trade environment. While it can't guarantee success against all vendors, it certainly raises your chances of striking a fair bargain with merchants.",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 18,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "+5% chance to successfully barter",
      "Increases gold earned from selling items by 10%"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Ocean Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Bartering",
        "rules": "When you make an attempt at bartering, this charm grants a +2 bonus on the check. The effect lasts until the start of your next turn."
      },
      {
        "title": "Gold Boost from Sales",
        "rules": "For every successful sale made while wearing this charm, you earn 10% more gold than normal. This benefit is cumulative with other sales bonuses and ends when you stop selling items for at least one hour."
      }
    ],
    "levelRequirementReason": "This charm is designed to assist novices in the market who are looking to improve their skills without requiring a high-level prerequisite.",
    "vendorReason": "The charm's origin and cultural significance make it a staple among the merchants of Liyue Harbor, ensuring its availability for travelers seeking to enhance their trade skills.",
    "shippingDetail": "Due to the jade's fragility, it is carefully packed in seaweed bundles before being shipped via Ocean Freight, arriving within two weeks.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Instantaneous; lasts until start of next turn or when removed",
      "endsWhen": "Removal from the wearer or end of a sale session lasting at least one hour",
      "charges": "Unlimited uses"
    },
    "priceReason": "The charm's balanced price reflects its subtle but useful enhancements, suitable for players looking to improve their bartering and sales skills without overburdening the game economy.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:46:21.586922+00:00",
    "aiReviewedAt": "2026-07-23T22:46:21.586922+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_inazuma_illusion_scroll": {
    "id": "teyvat_item_inazuma_illusion_scroll",
    "name": "Scroll of Shifting Reflections",
    "description": "The Scroll of Shifting Reflections is an ancient parchment imbued with the power to distort reality itself, crafted by long-forgotten magi of Inazuma. Unroll it in combat and witness your foes falter as their eyes are deceived into seeing shadows where there are none or dupes that vanish into thin air. A true masterwork, this scroll is a beacon for those who seek to bend the very fabric of perception.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Summons an illusory double",
      "Disguises the user as another creature"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Phantom Ship Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illusory Double",
        "rules": "Activates as a bonus action, creating a duplicate that lasts for up to 1 minute. The duplicate has half your movement speed and is immune to physical attacks but can be dispelled with a successful DC 20 Wisdom (Perception) check."
      },
      {
        "title": "Disguise",
        "rules": "Activates as an action, allowing the user to assume another creature's appearance for up to 1 hour. The disguise has a 50% chance of fooling others, requiring a successful DC 20 Deception check to maintain."
      }
    ],
    "levelRequirementReason": "The scroll requires minimal concentration and is accessible to low-level spellcasters who can focus on minor illusions.",
    "vendorReason": "Inazuma Imports specializes in exotic magical curiosities from their homeland, making this scroll a natural addition to their inventory.",
    "shippingDetail": "The delivery is swift and discreet, ensuring the scroll reaches its destination without attracting unwanted attention.",
    "usage": {
      "activation": "Bonus action for the illusory double; action for disguise",
      "duration": "Up to 1 minute for the duplicate, up to 1 hour for the disguise",
      "endsWhen": "The duration ends or the user retracts the effect",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this scroll offers powerful yet manageable illusion effects suitable for a wide range of low-level spellcasters.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T22:46:44.109533+00:00",
    "aiReviewedAt": "2026-07-23T22:46:44.109533+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sticky_bun": {
    "id": "leclaire_isle_item_sticky_bun",
    "name": "Giant Sticky Bun of Fortitude",
    "description": "The Giant Sticky Bun of Fortitude is a monstrous pastry, its surface golden and flecked with cinnamon, encrusted with sticky honey. This confectionary giant not only provides a sugary delight but also grants temporary resistance to blunt damage, bolstering your resilience against the gruffest trolls or most forceful ogres. Its consumption also offers a fleeting boost in movement speed, allowing you to swiftly evade danger or quickly close the distance between you and a foe.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍩",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Fortitude Boost",
      "Swift Movement"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swiftfoot courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fortitude Boost",
        "rules": "Consuming this pastry grants temporary resistance to blunt damage for 1 hour. The user gains +25% resistance to bludgeoning, piercing, and slashing damage from attacks made against them. This effect ends if the user takes any other kind of damage."
      },
      {
        "title": "Swift Movement",
        "rules": "For a duration of 30 minutes after consumption, the user's movement speed increases by +5 feet. If the user is incapacitated or dies while under this effect, it immediately ends."
      }
    ],
    "levelRequirementReason": "This pastry is designed for adventurers just starting their journey, providing a welcome boost without imposing a steep level requirement.",
    "vendorReason": "Dough Depot is known for its culinary prowess and willingness to cater to the whims of hungry adventurers.",
    "shippingDetail": "The pastry must be consumed within one hour of delivery to ensure maximum effectiveness.",
    "usage": {
      "activation": "Eaten as a meal or snack.",
      "duration": "1 hour for Fortitude Boost, 30 minutes for Swift Movement; both effects end if the user takes other damage or is incapacitated.",
      "endsWhen": "Effect ends after duration or if the user takes other damage or becomes incapacitated.",
      "charges": "Unlimited"
    },
    "priceReason": "The high price reflects not only its size and ingredients but also Dough Depot's reputation for quality.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:46:28.479610+00:00",
    "aiReviewedAt": "2026-07-23T22:46:28.479610+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_forbidden_dough_of_oblivion": {
    "id": "leclaire_isle_item_forbidden_dough_of_oblivion",
    "name": "Dough of Oblivion",
    "description": "Legend tells of a dough crafted by a disgruntled pastry chef on Le Claire Isle. This forbidden treat induces temporary amnesia, erasing five minutes from your memory and leaving you disoriented for a moment. It's perfect for escaping awkward situations or when you can't recall where you left your sword. The Dough of Oblivion also temporarily confuses nearby foes, making them more likely to attack their allies by mistake.",
    "category": "forbidden",
    "price": 1000,
    "icon": "😵‍💫",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Temporary Amnesia",
      "Confuse Nearby Foes"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "shadow courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Amnesia (5 Minutes)",
        "rules": "Eating the Dough of Oblivion causes a temporary loss of memory, erasing your recollection of events from five minutes prior. This effect lasts for 1 minute and has no save DC. The effect can be used once per day."
      },
      {
        "title": "Confuse Nearby Foes (Bonus Action)",
        "rules": "As an action, you may eat the Dough to confuse nearby foes within a 30-foot radius. This causes them to have disadvantage on their next attack roll and ability checks until the start of your next turn. The effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Eating any forbidden item requires at least first-level proficiency.",
    "vendorReason": "Pastry Palace is known for its daring and sometimes dangerous culinary creations, including the Dough of Oblivion.",
    "shippingDetail": "The Dough must be delivered by a shadow courier to ensure it remains forbidden and potent.",
    "usage": {
      "activation": "Eating the Dough as an action or bonus action.",
      "duration": "Temporary Amnesia lasts for 1 minute; Confuse Nearby Foes until your next turn.",
      "endsWhen": "The effects end when their duration expires or if you eat more Dough of Oblivion within a day.",
      "charges": "Unlimited, but limited to once per long rest."
    },
    "priceReason": "Given its forbidden nature and the risks involved in consuming it, the price reflects its value as an item that can be used strategically in combat or socially.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:46:00.926844+00:00",
    "aiReviewedAt": "2026-07-23T22:46:00.926844+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sweet_charm": {
    "id": "leclaire_isle_item_sweet_charm",
    "name": "Charm of the Sugar Sprite",
    "description": "The Charm of the Sugar Sprite is a delicate, shimmering trinket crafted from solidified sugar sprites, said to be harvested from the crystalline formations within the hidden lagoons of LeClaire Isle. Its sweet aroma and ethereal glow can turn even the grumpiest soul into a charmer, but beware—its magic can also provoke fits of laughter or irritation in those around you, making it as unpredictable as it is enchanting.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Increased Persuasion",
      "Temporary Charm"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "winged courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Persuasion",
        "rules": "As a bonus action, the wielder can activate the charm to gain advantage on one Charisma (Persuasion) check. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Temporary Charm",
        "rules": "The charm grants a +20 temporary bonus to any Persuasion or Deception checks made within the next hour, but after that time, anyone who has interacted with the wielder is immune to its effects for 24 hours."
      }
    ],
    "levelRequirementReason": "This charm's unpredictable and powerful social effects make it accessible only to those of at least first level.",
    "vendorReason": "Sweet Supplies stocks a variety of LeClaire Isle curiosities, including the Charm of the Sugar Sprite, which is known for its unique properties among the island's exports.",
    "shippingDetail": "Delivered by a fleet of winged couriers, these charms are typically shipped within one week of purchase.",
    "usage": {
      "activation": "Bonus action (once per long rest)",
      "duration": "1 minute or until used up",
      "endsWhen": "The effect ends if the wielder uses it again before the first minute expires.",
      "charges": "Unlimited, but only one use per long rest"
    },
    "priceReason": "This charm's unique properties and rarity justify its moderate price of 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:47:02.373138+00:00",
    "aiReviewedAt": "2026-07-23T22:47:02.373138+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_ancient_rune_stone": {
    "id": "earth_land_ancient_rune_stone",
    "name": "Whispers of the Stone Sentinel",
    "description": "Whispers of the Stone Sentinel is a smooth, grey stone etched with runes that shimmer and shift like ancient whispers in your peripheral vision. The runes seem to hum softly when touched, releasing fleeting visions of forgotten battles and the distant past. Touching it grants you a sudden surge of arcane knowledge, but beware—this influx can leave you disoriented for days afterward, hinting at its deep connection to the earth's oldest magic.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗿",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Arcane Insight",
      "Perception Boost"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "delivery_drone",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Arcane Insight",
        "rules": "When activated as a bonus action, this stone grants you advantage on Intelligence (Arcana) checks for 1d4+1 rounds. The effect ends if you take damage or if your next turn begins with you within 30 feet of an active spellcaster."
      },
      {
        "title": "Perception Boost",
        "rules": "For the duration of one short rest, this stone enhances your perception by +2 to passive Perception checks. The effect ends when you complete a long rest or if you take damage."
      }
    ],
    "levelRequirementReason": "The ancient runes require a more seasoned mage to harness their full potential without risk.",
    "vendorReason": "The Earth Emporium specializes in artifacts and relics of the earth, making it the perfect place for such an ancient stone.",
    "shippingDetail": "Shipped via a specially modified delivery drone capable of handling fragile and heavy items.",
    "usage": {
      "activation": "Bonus action to activate; requires touch.",
      "duration": "1d4+1 rounds for Arcane Insight, one short rest for Perception Boost.",
      "endsWhen": "The effect ends if you take damage or on the next turn after being within 30 feet of an active spellcaster.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This item's price reflects its rarity and the cost of sourcing such ancient artifacts, even if it is reusable.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:46:53.795352+00:00",
    "aiReviewedAt": "2026-07-23T22:46:53.795352+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_whispering_amulet": {
    "id": "midlands_item_whispering_amulet",
    "name": "The Serpent's Secret",
    "description": "The Serpent's Secret, a warm obsidian amulet etched with serpentine runes that seem to murmur in voices of ancient lore, exudes an aura of caution. Its cryptic whispers have been known to warn wearers of impending danger, and its enchantments subtly heal wounds as they unfold. This relic’s power lies not just in its whispering warnings but also in its ability to detect hidden traps with greater accuracy than any other amulet.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐍",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Whispering Warnings",
      "Trap Detection"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "giant beetle courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Whispering Warnings",
        "rules": "At the start of each of your turns, you can choose to activate this feature. If you do so, roll a d12 and add your Wisdom modifier (minimum +2). On a result of 8 or higher, you gain advantage on all Wisdom (Perception) checks for the next minute."
      },
      {
        "title": "Trap Detection",
        "rules": "You have advantage on Dexterity (Stealth) checks made to set traps and can use an action to attempt a Perception check with no penalty. If successful, you gain the benefit of having a trap detection ability for 10 minutes."
      }
    ],
    "levelRequirementReason": "The intricate runes and ancient magic require significant power to harness effectively.",
    "vendorReason": "Master Forger Kaelin of Fractured Forge specializes in ancient relics that combine the might of forge with the wisdom of serpents.",
    "shippingDetail": "The giant beetle courier delivers this item within a week, but only during full moon nights.",
    "usage": {
      "activation": "Reaction or Bonus Action",
      "duration": "Instantaneous for Whispering Warnings; 10 minutes for Trap Detection",
      "endsWhen": "Ends when you take a short rest for Whispering Warnings; ends after the duration expires for Trap Detection.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's legendary rarity and unique enchantments justify this balanced price in XP.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T22:47:15.026581+00:00",
    "aiReviewedAt": "2026-07-23T22:47:15.026581+00:00",
    "aiReviewVersion": 1
  },
  "internet_glitch_stick": {
    "id": "internet_glitch_stick",
    "name": "Pixelated Panic Stick",
    "description": "The Pixelated Panic Stick appears as a gnarled, digitalized wooden rod, adorned with faintly glowing pixels. It's said to have been crafted from the remnants of an ancient glitching interface. Upon use, it emits a brief burst of static that distorts vision and scrambles neural signals, causing temporary disorientation and stat debuffs in those affected. Wario assures that its 'totally bugged out' capabilities are perfect for disrupting formations or simply causing mayhem among the unprepared.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 23,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Distorts Vision",
      "Temporarily Debuffs"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "drone_delivery",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Distorts Vision",
        "rules": "When used, the Pixelated Panic Stick emits a burst of static that causes the target to become disoriented for 1 round. The target has disadvantage on all ability checks and attack rolls until the start of their next turn."
      },
      {
        "title": "Temporarily Debuffs",
        "rules": "The target's Dexterity score is reduced by 2 temporarily, but can be regained with a successful Wisdom saving throw (DC 15)."
      }
    ],
    "levelRequirementReason": "Requires at least 9th level to wield effectively in combat.",
    "vendorReason": "Pixel Shop specializes in quirky gadgets and digital curiosities, making it a fitting vendor for the Pixelated Panic Stick.",
    "shippingDetail": "Ships via drone delivery within three days of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts 1 round",
      "endsWhen": "Target's next turn or upon the wielder taking another action",
      "charges": "Unlimited, but only one use per combat"
    },
    "priceReason": "Balanced at 1000 XP to reflect its quirky yet effective capabilities.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:47:19.095594+00:00",
    "aiReviewedAt": "2026-07-23T22:47:19.095594+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_scroll": {
    "id": "internet_meme_scroll",
    "name": "Eternal Dank Scroll",
    "description": "The Eternal Dank Scroll is a tattered relic of digital lore, its ink faded but still potent. Unleashing it in a room sends a ripple of laughter and chaos, with data spirits swirling around you. The scroll’s effects are unpredictable—some users find themselves momentarily invigorated, while others experience strange hallucinations that linger for days. Handle this scroll at your own peril; it's said to have once drawn the ire of ancient internet gods.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🤣",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Laughter and Chaos",
      "Data Spirit Attraction"
    ],
    "vendor": "data_dealer",
    "shippedBy": "encrypted_packet",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Laughter and Chaos",
        "rules": "As a bonus action, activate the scroll. On a d20 roll of 15 or higher (DC 15), you and all creatures within 30 feet must make a Charisma saving throw. On a failure, they are charmed for 1 minute. On a success, they are temporarily immune to the scroll’s effects for 24 hours."
      },
      {
        "title": "Data Spirit Attraction",
        "rules": "The scroll attracts minor data spirits within 60 feet that may provide temporary bonuses or inflict debuffs. These spirits can be dismissed by anyone with a successful Intelligence saving throw (DC 18). The scroll’s effects last for 10 minutes."
      }
    ],
    "levelRequirementReason": "This item requires significant concentration and presence of mind to safely handle.",
    "vendorReason": "The data_dealer specializes in relics from the digital age, including items like the Eternal Dank Scroll.",
    "shippingDetail": "Shipped via encrypted packet to ensure that no one else can access its contents.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "10 minutes or until dismissed by a successful Intelligence saving throw",
      "endsWhen": "The effects end when the scroll is destroyed, dismissed, or after 10 minutes",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced against other legendary items of similar utility and risk.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:47:11.407356+00:00",
    "aiReviewedAt": "2026-07-23T22:47:11.407356+00:00",
    "aiReviewVersion": 1
  },
  "internet_faction_access_key": {
    "id": "internet_faction_access_key",
    "name": "The Algorithm's Pass",
    "description": "The Algorithm's Pass is a sleek, metallic key adorned with cryptic patterns that whisper of shadowy information networks. When activated, it grants temporary access to The Algorithm’s hidden channels, allowing you to communicate in ways unimagined by the public eye. However, this fleeting connection comes at a price: your intelligence and perception checks related to information gathering are enhanced, but so is your susceptibility to targeted advertising, which may leave you forever marked by their surveillance.",
    "category": "faction",
    "price": 1000,
    "icon": "🔑",
    "stock": 15,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "grants access to secret communication channels",
      "enhances intelligence and perception checks for info gathering"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_packet",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Access to Secret Channels",
        "rules": "This key grants a bonus equal to your proficiency bonus on Intelligence or Perception checks related to information gathering. The effect lasts until the end of your next short rest."
      },
      {
        "title": "Risk of Monitoring",
        "rules": "While using this key, you have disadvantage on all saving throws against being detected by The Algorithm’s surveillance systems. This effect persists for 24 hours after the last use."
      }
    ],
    "levelRequirementReason": "This item requires a level 6 character to handle its complexity and the risks involved in accessing shadowy information networks.",
    "vendorReason": "The cyber market is known for dealing with high-risk, high-reward items that can provide access to hidden knowledge or resources.",
    "shippingDetail": "The package arrives securely encrypted and requires a password known only by the cyber market staff. The key must be activated within 24 hours of receiving it.",
    "usage": {
      "activation": "As an action, activate the key to gain its benefits for one hour.",
      "duration": "One hour",
      "endsWhen": "The end of your next short rest after use or if you are detected by The Algorithm’s systems.",
      "charges": "Unlimited"
    },
    "priceReason": "This item is priced at 1000 XP as it grants temporary access to high-risk, high-value information networks and comes with significant risks.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T22:48:03.023131+00:00",
    "aiReviewedAt": "2026-07-23T22:48:03.023131+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_elemental_resonator": {
    "id": "teyvat_item_elemental_resonator",
    "name": "Resonating Echo Stone",
    "description": "The Resonating Echo Stone is a smooth, pulsing stone that hums with the very essence of Teyvat. Crafted from the heartwood of the ancient Echo Trees and imbued with elemental energy, it amplifies your elemental affinity when held. Its pulsations resonate with the environment, making it perfect for creating dazzling displays or blasting enemies into submission. Just be wary; Wario's love for shiny objects is legendary, so keep this out of his reach!",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 67,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Elemental Amplification",
      "Environmental Resonance"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_sprite",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Elemental Amplification",
        "rules": "When activated as a bonus action, the Resonating Echo Stone amplifies your elemental affinity by increasing elemental damage dealt by 20% for 1 minute. The effect ends if you drop the stone or take any other action that requires an attack roll."
      },
      {
        "title": "Environmental Resonance",
        "rules": "Once per short rest, holding the stone allows you to trigger a secondary elemental effect with your next elemental spell or ability at no additional cost. This effect is tied to the environment and can only occur once per day."
      }
    ],
    "levelRequirementReason": "Players need to be at least level 9 to master the intricate energy manipulation required for this stone.",
    "vendorReason": "The Mondstadt Market specializes in unique and exotic items from all over Teyvat, making it a fitting vendor for this stone.",
    "shippingDetail": "Delivered by the Winged Sprites, known for their swift and precise deliveries within Teyvat.",
    "usage": {
      "activation": "Bonus action to activate; once per short rest.",
      "duration": "1 minute or until dropped or used in combat.",
      "endsWhen": "Stone is dropped, used in combat, or 1 minute expires.",
      "charges": "Unlimited uses with short rest."
    },
    "priceReason": "The balanced price reflects the stone's unique properties and the high demand for elemental amplification items among adventurers.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T22:47:28.377608+00:00",
    "aiReviewedAt": "2026-07-23T22:47:28.377608+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_kazuha_scroll": {
    "id": "teyvat_item_kazuha_scroll",
    "name": "Fragment of the Wind's Whisper",
    "description": "The Fragment of the Wind's Whisper is a delicate scroll imbued with the essence of Kazuha, Inazuma’s wind dancer. When unrolled, its paper shimmers faintly as if brushed by a breeze. Gazing upon it allows you to momentarily escape time, dodging attacks with an almost inhuman grace. Some say the spirits of the wind whisper secrets during this brief reprieve, but the air around you grows thick and heavy after the effect fades.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💨",
    "stock": 34,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Dodge",
      "Spirit Whispers"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "swift_current",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Dodge",
        "rules": "Activates as a reaction. You gain a +5 bonus to your Dexterity saving throws against attacks made during its duration, allowing you to dodge with uncanny precision. This effect lasts for 1 minute per use and ends immediately if you take any action other than moving."
      },
      {
        "title": "Spirit Whispers",
        "rules": "At the end of each of your turns while this scroll is active, there’s a 20% chance that a wandering spirit will attempt to communicate with you. If successful, it grants you a +1 bonus to any Wisdom (Insight) check made before the next dawn."
      }
    ],
    "levelRequirementReason": "This scroll's effects require concentration and focus, best suited for players who have reached at least third level.",
    "vendorReason": "Inazuma Imports specializes in artifacts from Teyvat, including those with ties to its legendary figures like Kazuha.",
    "shippingDetail": "Ships within the next rising moon cycle.",
    "usage": {
      "activation": "Reaction",
      "duration": "1 minute per use",
      "endsWhen": "You take any action other than moving or when the duration ends",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Balanced at this price to reflect its unique effects and limited utility without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:48:12.147493+00:00",
    "aiReviewedAt": "2026-07-23T22:48:12.147493+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_xiaxi_charm": {
    "id": "teyvat_item_xiaxi_charm",
    "name": "Jade Dragon's Blessing",
    "description": "This intricately carved jade charm, a fragment of ancient Xiaxi dragons, exudes a serene warmth that is said to bring good fortune to its wearer. Wielded in Liyue Harbor, it grants you +1 to luck and increases your charisma by 3, making you more adept at finding hidden treasures and avoiding misfortune. The charm's power can even enhance your interactions with the locals, making them more amenable to sharing their secrets.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐉",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "+1 Luck",
      "Charisma Boost"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_merchant",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+1 Luck",
        "rules": "When you roll initiative or ability checks, you may use this charm to gain a +1 bonus. This effect lasts until the end of your next turn."
      },
      {
        "title": "Charisma Boost",
        "rules": "Your Charisma score is temporarily increased by 3 for the duration of one short rest. This boost can be used once per day, and it expires at the start of your next long rest."
      }
    ],
    "levelRequirementReason": "This charm's power is accessible to all adventurers who wish to enhance their luck and charisma.",
    "vendorReason": "Liyue Harbor merchants are well-known for selling relics that bring good fortune, making this jade charm a popular item among travelers.",
    "shippingDetail": "The sea merchant ensures the swift delivery of this fragile artifact via a secure, waterborne route.",
    "usage": {
      "activation": "Use as an action at any time to gain the +1 Luck benefit for your next turn.",
      "duration": "Instantaneous; lasts until end of your next turn.",
      "endsWhen": "The duration ends when you use it again or lose consciousness.",
      "charges": "Unlimited, but only one instance of Charisma Boost can be active at a time."
    },
    "priceReason": "The jade's origin and the enhanced luck it provides justify its higher price, making it a valuable asset for any adventurer.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T22:47:47.117222+00:00",
    "aiReviewedAt": "2026-07-23T22:47:47.117222+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_chronometric_charm": {
    "id": "grand_country_chronometric_charm",
    "name": "Chronometric Charm of Temporal Distortion",
    "description": "The Chronometric Charm of Temporal Distortion is a delicate silver locket adorned with etched gears and cogs, whispering faintly of time's flow. When activated, it slows foes' movements by a quarter, making them clumsy and off-balance for a brief spell. Simultaneously, the wearer gains an extra burst of speed, allowing them to dart away or strike faster than usual. The charm's power is unpredictable but potent, creating a fleeting echo of its effects in the space around it.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "slow enemies",
      "boost wearer"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_snail",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "When activated as an action, this charm reduces all enemy creatures' attack and movement speeds by 25%, lasting for 3 seconds. There is no saving throw against this effect."
      },
      {
        "title": "Swift Movement",
        "rules": "Upon activation, the wearer gains a +15% bonus to their walking speed for 3 seconds. This effect does not stack with other movement bonuses and has no save or range restrictions."
      }
    ],
    "levelRequirementReason": "The charm's intricate design requires a certain mastery of time manipulation, which is only achieved at level 10.",
    "vendorReason": "Layer Market specializes in rare and exotic equipment that enhance one's abilities, making this charm an ideal addition to their inventory.",
    "shippingDetail": "The charm is delivered by the dimensional snail, ensuring it arrives intact through complex spatial distortions.",
    "usage": {
      "activation": "action",
      "duration": "3 seconds",
      "endsWhen": "the duration expires or the wearer takes an action other than their movement",
      "charges": "unlimited"
    },
    "priceReason": "The charm's rarity and unique temporal effects justify its moderate price point, making it a valuable but not exorbitant addition to any adventurer's arsenal.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T22:47:43.807328+00:00",
    "aiReviewedAt": "2026-07-23T22:47:43.807328+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_stone_warden_badge": {
    "id": "grand_country_stone_warden_badge",
    "name": "Stone Warden's Assurance Badge",
    "description": "The Stone Warden's Assurance Badge, crafted from ancient earth crystal and blessed by the enigmatic guardians of the land, offers more than just protection against gravity-based hazards. While donning this badge, you gain resistance to falling damage, and your connection to the elemental earth strengthens, potentially attracting helpful nudges from nearby earth elementals. This badge is a symbol of trust between the Stone Wardens and their allies; Wario might indeed find it useful for his eccentric adventures in the overworld.",
    "category": "faction",
    "price": 8000,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "resistance_to_falling_damage",
      "chance_for_elemental_assistance"
    ],
    "vendor": "layer_market",
    "shippedBy": "Rolling Cart of Gems",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Resistance to Falling Damage",
        "rules": "While wearing this badge, you gain resistance to falling damage. This effect is passive and lasts for the duration of your concentration (up to 10 minutes). There is no save required."
      },
      {
        "title": "Elemental Assistance",
        "rules": "Once per short or long rest, when you are within earshot of an earth elemental, it may offer a helpful nudge. This assistance can be used as a bonus action to grant you temporary hit points equal to 1d6 + your Wisdom modifier. The elementals will only assist if they perceive the situation to be in harmony with nature."
      }
    ],
    "levelRequirementReason": "This badge requires at least 12th level due to its mystical connection to earth elements and protection against falling damage.",
    "vendorReason": "Layer Market, renowned for its connections with various factions, is trusted by the Stone Wardens to sell this emblem of their order.",
    "shippingDetail": "The badge is shipped in a specially enchanted cart that ensures it arrives in pristine condition, even over long distances.",
    "usage": {
      "activation": "Passive (concentration up to 10 minutes)",
      "duration": "Concentration duration until expended",
      "endsWhen": "Ends when you lose concentration or rest",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The badge's rarity and the mystical properties it grants justify its high price in experience points.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T22:48:28.397799+00:00",
    "aiReviewedAt": "2026-07-23T22:48:28.397799+00:00",
    "aiReviewVersion": 1
  },
  "internet_pixel_charm": {
    "id": "internet_pixel_charm",
    "name": "Glitchy Good Luck Charm",
    "description": "This Glitchy Good Luck Charm appears to be a corrupted pixel charm, its surface shimmering with an eerie glow that seems to pulse with digital life. Crafted from salvaged data streams and imbued with chaotic fortune, it's said to attract random buffs that can throw your enemies into fits of confusion or leave you dancing to the rhythm of memes. Beware, for its effects are unpredictable—perfect for confusing foes or finding yourself in the center of a viral sensation.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Random Buffs",
      "Confusion"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random Buffs",
        "rules": "At the start of your turn, there is a 20% chance that you gain advantage on one attack roll. This effect has no save DC and can occur once per short rest."
      },
      {
        "title": "Confusion",
        "rules": "If an enemy within 5 feet of you rolls a natural 1 on their attack roll, they are confused for the start of their next turn (no action required). The confusion ends at the end of their next turn. This effect has no save DC and can occur once per long rest."
      }
    ],
    "levelRequirementReason": "This charm's unpredictable effects make it accessible to lower-level characters who might benefit from its random buffing.",
    "vendorReason": "Pixel Shop specializes in quirky and tech-savvy items, making this charm a perfect fit for their inventory.",
    "shippingDetail": "Ships via Drone Delivery with an estimated delivery time of 24 hours.",
    "usage": {
      "activation": "Passive effect; occurs automatically at the start of your turn.",
      "duration": "Instantaneous, recharges after a short or long rest depending on the effect used.",
      "endsWhen": "Exhausted upon the end of the respective rest period.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The charm's unpredictable effects and unique origin story justify a higher price, aligning with its common rarity.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:48:16.309456+00:00",
    "aiReviewedAt": "2026-07-23T22:48:16.309456+00:00",
    "aiReviewVersion": 1
  },
  "internet_data_surge": {
    "id": "internet_data_surge",
    "name": "Overclocked Neural Implant",
    "description": "The Overclocked Neural Implant hums like a digital engine, its sleek titanium casing adorned with arcane symbols that glow faintly in the dark. This implant enhances your neural processing by leaps and bounds, temporarily granting access to vast arcane data streams. However, those who wear it risk succumbing to sudden bursts of internet nostalgia or inexplicable fits of trivia-sharing. Use cautiously, for it might just overload your mind with information overload!",
    "category": "equipment",
    "price": 1000,
    "icon": "💻",
    "stock": 3,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Arcane Data Access",
      "Meme Tempest"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Secure Data Packet",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Arcane Data Access",
        "rules": "Activate as a bonus action to gain +8 Intelligence for 6 turns. During this time, you have advantage on Intelligence checks and saving throws. The effect ends if you are incapacitated or if your Intelligence score is reduced below 10."
      },
      {
        "title": "Meme Tempest",
        "rules": "Once per short rest, activate as an action to unleash a wave of internet memes that deal 1d6 necrotic damage and spread viral knowledge. Creatures within 30 feet must succeed on a DC 14 Wisdom saving throw or be charmed until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The implant's advanced technology requires a high level of neural stability to safely interface with your brain.",
    "vendorReason": "The cyber_market specializes in cutting-edge cybernetic enhancements and tech artifacts, making it the go-to vendor for such powerful implants.",
    "shippingDetail": "Shipped via encrypted data packets ensuring confidentiality and integrity of delivery.",
    "usage": {
      "activation": "Activate as a bonus action or once per short rest as an action.",
      "duration": "Arcane Data Access lasts for 6 turns; Meme Tempest has a cooldown of one short rest.",
      "endsWhen": "Arcane Data Access ends if you are incapacitated or your Intelligence score is reduced below 10. Meme Tempest ends after its duration or if the effect is dispelled.",
      "charges": "Unlimited uses, but only once per short rest for Meme Tempest."
    },
    "priceReason": "The implant's advanced technology and limited availability justify a premium price in the cyber_market.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:49:27.636173+00:00",
    "aiReviewedAt": "2026-07-23T22:49:27.636173+00:00",
    "aiReviewVersion": 1
  },
  "internet_godly_meme_artifact": {
    "id": "internet_godly_meme_artifact",
    "name": "The Infinite Loop Amulet",
    "description": "The Infinite Loop Amulet, a shimmering locket crafted from ancient obsidian and enigmatic runes, is said to have been forged by a deity who sought to capture the essence of the perfect internet loop. Wearing it allows you to briefly warp reality, causing time to loop for your enemies, rendering them disoriented and confused. The amulet's power is not without cost; prolonged use can send you spiraling into an existential dread that grips your soul. Players of all stripes would find this relic a treasure, especially in the hands of those who know how to wield it wisely.",
    "category": "premium",
    "price": 1000,
    "icon": "♾️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Temporal Loop",
      "Undead Vulnerability"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Temporal Loop",
        "rules": "By using an action, you cause a 5-foot-radius sphere centered on yourself to loop in time for up to 1 minute. All creatures within the area must succeed on a DC 17 Wisdom saving throw or be disoriented until the start of their next turn. Creatures that fail this save are also knocked prone and take 3d6 necrotic damage. The amulet can only be used once per long rest."
      },
      {
        "title": "Undead Vulnerability",
        "rules": "You gain immunity to fear effects and deal an additional +1d8 damage to undead creatures for 1 hour, starting when you don the amulet. This effect lasts until you remove it or until a long rest is completed."
      }
    ],
    "levelRequirementReason": "The Infinite Loop Amulet's power demands a high level of mastery and control to avoid its potentially catastrophic effects.",
    "vendorReason": "The data dealer has unique access to ancient artifacts from the digital realm, making The Infinite Loop Amulet an item they are privy to.",
    "shippingDetail": "Ships via Quantum Courier's dimensional express, ensuring safe and swift delivery of this potent relic.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute",
      "endsWhen": "The start of your next turn after the loop ends or if you are incapacitated",
      "charges": "Once per long rest"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the amulet's powerful yet controlled effects and its rarity as an ancient deity’s creation.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T22:48:50.525231+00:00",
    "aiReviewedAt": "2026-07-23T22:48:50.525231+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronal_echo": {
    "id": "almost_edge_item_chronal_echo",
    "name": "Chronal Echo of Lost Moments",
    "description": "The Chronal Echo of Lost Moments is a shimmering glass sphere etched with ancient runes. When activated, it briefly replays scenes from forgotten realities, offering glimpses into the void's past. Its touch is cool to the hand and its surface glows with a faint, spectral light. Staring too long can cause disorientation; indeed, those who gaze upon it for more than 10 seconds risk becoming trapped in an infinite loop of existential dread.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "replay forgotten moments",
      "temporary wisdom boost"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "spectral_messenger",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Replay Forgotten Moments",
        "rules": "The user must make a DC 20 Wisdom saving throw. On a failed save, they are incapacitated for 1 minute due to an infinite loop of existential dread. On a successful save, the item briefly replays scenes from forgotten realities within a 30-foot radius for 1 round."
      },
      {
        "title": "Temporary Wisdom Boost",
        "rules": "The user gains +2 to their Wisdom (Insight) checks and saving throws until the end of their next turn. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "To safely handle the echoes of lost moments, a character must have reached at least level 16 to navigate such profound metaphysical phenomena.",
    "vendorReason": "The Liminal Trader specializes in arcane curiosities and ephemeral artifacts, making them an ideal vendor for the Chronal Echo of Lost Moments.",
    "shippingDetail": "Delivered by a spectral messenger, this item requires special handling to ensure it reaches its destination without any disturbances.",
    "usage": {
      "activation": "Object interaction (as an action)",
      "duration": "1 round",
      "endsWhen": "The effect ends immediately if the user fails their saving throw or if they are incapacitated for more than 10 seconds.",
      "charges": "Uses: 1; Recharge: Once per long rest"
    },
    "priceReason": "This price reflects its rarity and the careful handling required, making it a balanced addition to any adventurer's inventory.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T22:48:37.368253+00:00",
    "aiReviewedAt": "2026-07-23T22:48:37.368253+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_sparkling_potion": {
    "id": "pokemon_item_sparkling_potion",
    "name": "Sparkling Potion of Evolution!",
    "description": "The Sparkling Potion of Evolution! bubbles and fizzles in your hand, its surface shimmering like a starlit sky. This potion is said to have been crafted from ancient berries found deep within uncharted forests, rumored to hold the essence of evolution itself. Drinking it instantly transforms one wild Pokémon into its evolved form, but the results are unpredictable—some say the evolutions are always as expected, while others swear they're completely unexpected. A gamble, indeed, that carries with it a +1 bonus to luck for 30 seconds.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Instant Evolution",
      "Luck Bonus"
    ],
    "vendor": "pokemart",
    "shippedBy": "Poke-Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Evolution",
        "rules": "Activates on consumption as an action. Instantly transforms one wild Pokémon into its evolved form. The evolution is unpredictable; it could be the expected result or a complete surprise, leaving the user to wonder what they've unleashed."
      },
      {
        "title": "Luck Bonus",
        "rules": "Grants +1 bonus to luck for 30 seconds after consuming the potion. This effect is instantaneous and lasts until either the duration expires or the user uses their action on another task."
      }
    ],
    "levelRequirementReason": "This potion requires no level, as it is a common item that can be found in Pokemarts.",
    "vendorReason": "Pokemarts are known for selling items that can help train and evolve Pokémon quickly and easily.",
    "shippingDetail": "Delivered instantly by the trusted Poke-Drones, ensuring you receive your Sparkling Potion of Evolution! as soon as possible.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "Instantaneous for evolution; +1 luck bonus lasts for 30 seconds.",
      "endsWhen": "The effect ends when the duration expires or the user takes another action.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item is priced at 1000 XP, reflecting its unpredictable nature and utility in evolving Pokémon quickly.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:49:03.342615+00:00",
    "aiReviewedAt": "2026-07-23T22:49:03.342615+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_trainer_consultation": {
    "id": "pokemon_item_trainer_consultation",
    "name": "Elite Trainer Consultation",
    "description": "Honed by years of experience in the Pokémon League, Elite Trainer Consultation is a one-hour session where you receive an in-depth analysis of your team’s performance and potential. The seasoned trainer will pinpoint your Pokémon's strengths and weaknesses, offering strategic advice on battling techniques and even suggesting paths to evolution that could turn your underdogs into champions. With this consultation, your team not only gains tactical improvements but also the confidence to tackle any challenge.",
    "category": "services",
    "price": 1000,
    "icon": "🗣️",
    "stock": 34,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Enhances battle tactics",
      "Boosts team morale"
    ],
    "vendor": "league_store",
    "shippedBy": "Certified Trainer Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tactical Boost",
        "rules": "For one hour after consulting with an Elite Trainer, your Pokémon gain a +2 bonus to attack and defense. This effect ends when the consultation duration expires."
      },
      {
        "title": "Morale Boost",
        "rules": "Your Pokémon's morale is bolstered by 1 point for each level of the Pokémon in your team, up to a maximum increase of +5. This boost lasts until the next rest or until you enter battle again."
      }
    ],
    "levelRequirementReason": "Even beginners can benefit from strategic advice and morale support.",
    "vendorReason": "The league store is the official source for expert consultations within the Pokémon League ecosystem.",
    "shippingDetail": "The courier ensures that your consultation arrives fresh and ready to be scheduled immediately.",
    "usage": {
      "activation": "A single use, activated by scheduling a one-hour session with an Elite Trainer.",
      "duration": "One hour from the start of the consultation.",
      "endsWhen": "The consultation ends or when you enter battle again.",
      "charges": "Unlimited uses within a 24-hour period."
    },
    "priceReason": "Balanced to offer strategic advantage without being game-breaking, this service is priced at 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T23:58:30.894443+00:00",
    "aiReviewedAt": "2026-07-24T23:58:30.894443+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_ancient_badge_fragment": {
    "id": "pokemon_item_ancient_badge_fragment",
    "name": "Fragment of the Obsidian Badge",
    "description": "The Fragment of the Obsidian Badge is a dark, obsidian-colored shard that glows faintly with an eerie violet light. It seems to hum with latent power, as if it’s waiting for the right wielder to unleash its full potential. Legends speak of this fragment granting immense strength and shadowy allies to those who possess it. Wario might indeed covet such a relic, but only those attuned to dark magic can truly harness its raw power.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💎",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Shadow Invocation",
      "Darkened Aura"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Shadow Delivery Service",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Shadow Invocation",
        "rules": "As a bonus action, the wielder can summon a small shadow Pokémon that fights by their side. The shadow Pokémon lasts for 1 minute and provides a +2 to attack rolls. If the wielder is reduced to 0 hit points while the shadow Pokémon is present, it dissipates immediately."
      },
      {
        "title": "Darkened Aura",
        "rules": "The wielder gains a +1 bonus to all attack rolls and saving throws until the end of their next turn. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "Wielders must have sufficient experience and training in dark magic to properly handle such a powerful fragment.",
    "vendorReason": "The Safari Shop has exclusive access to relics from legendary tournaments, making it the place for rare artifacts like this fragment.",
    "shippingDetail": "Ships via the Shadow Delivery Service; requires a special dark magic ritual at the destination.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Until end of next turn for Darkened Aura, and 1 minute for summoning a shadow Pokémon",
      "endsWhen": "At the start of the wielder's next turn without use, or if reduced to 0 hit points.",
      "charges": "Unlimited, but can only be used once per long rest."
    },
    "priceReason": "The fragment’s rarity and the power it unlocks justify its relatively steep price in experience points.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T22:49:09.084825+00:00",
    "aiReviewedAt": "2026-07-23T22:49:09.084825+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_chronal_brace": {
    "id": "almost_edge_chronal_brace",
    "name": "Chronal Brace of the Shifting Rim",
    "description": "The Chronal Brace of the Shifting Rim is a sleek, metallic bracelet that hums with a temporal energy, as if it holds the very fabric of time in its links. Crafted from an alloy of forgotten stars and ancient chronal dust, this bauble subtly warps reality around you, granting quick reflexes and the ability to briefly correct minor mistakes by rewinding time. However, those who wield it must beware: a single slip can attract the wrath of temporal entities that guard the integrity of the timeline.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Reflex Boost",
      "Brief Rewind"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Temporal Reflex Boost",
        "rules": "While wearing this bracelet, you gain a +1 bonus to Dexterity saving throws and a +5 bonus to Dexterity (Acrobatics) checks. This effect lasts until the start of your next turn."
      },
      {
        "title": "Brief Rewind",
        "rules": "As an action, you can rewind time for 3 seconds, allowing you to correct one minor mistake or error. Creatures within a 5-foot radius must succeed on a DC 14 Dexterity saving throw or be knocked prone and unable to move for the duration of your next turn."
      }
    ],
    "levelRequirementReason": "This bracelet requires significant control over temporal energies, making it suitable only for those who have proven their mastery at a high level.",
    "vendorReason": "The Void Merchant deals in the most esoteric and powerful items from across dimensions, including this time-altering bracelet.",
    "shippingDetail": "Ships via the Dimensional Courier, known for its swift but unpredictable delivery times.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Temporal Reflex Boost), 3 seconds (Brief Rewind)",
      "endsWhen": "Ends at the start of your next turn unless used again or expended.",
      "charges": "1 charge, recharges after a long rest"
    },
    "priceReason": "The bracelet's rarity and unique temporal properties justify its price in experienced adventurers' gold.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T22:49:35.531524+00:00",
    "aiReviewedAt": "2026-07-23T22:49:35.531524+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_echoing_shard": {
    "id": "almost_edge_echoing_shard",
    "name": "Echoing Shard of the Lost Perimeter",
    "description": "The Echoing Shard of the Lost Perimeter is a fractured fragment of a mirror that once belonged to a forgotten realm. When held, it reveals glimpses of alternate dimensions—distorted images that can be both disorienting and enlightening. The shard whispers inaudible melodies that seem to guide you towards hidden paths, but they are fleeting and may not always lead where you intend. Holding the shard also enhances your Perception by a noticeable degree, making you more attuned to subtle details around you.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Glimpse of Alternate Dimensions",
      "Enhanced Perception"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Spectral Postman",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Glimpse of Alternate Dimensions",
        "rules": "As an action, you can focus on the shard to briefly see glimpses of alternate dimensions. These visions last for 1 minute and give you advantage on Wisdom (Perception) checks related to hidden paths or secret doors within that time frame. The shard must be held during this effect's duration."
      },
      {
        "title": "Enhanced Perception",
        "rules": "While holding the shard, your passive Perception score increases by 5 until you rest for more than an hour. This enhancement does not stack with other sources of increased Perception."
      }
    ],
    "levelRequirementReason": "The shard's dimensions are complex and require a certain level of magical attunement to fully grasp.",
    "vendorReason": "The Liminal Trader often deals with relics from other realms, making this shard a fitting addition to their collection.",
    "shippingDetail": "The Spectral Postman delivers the shard via a shadowy courier who may appear at any time of day or night, ensuring swift delivery.",
    "usage": {
      "activation": "Action (to focus on and activate)",
      "duration": "1 minute per activation",
      "endsWhen": "You rest for more than an hour after using it",
      "charges": "Unlimited uses"
    },
    "priceReason": "The shard's rarity and the unique abilities it offers justify its fair value of 1000 XP.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:49:23.497077+00:00",
    "aiReviewedAt": "2026-07-23T22:49:23.497077+00:00",
    "aiReviewVersion": 1
  },
  "internet_data_weave": {
    "id": "internet_data_weave",
    "name": "Byte-Sized Battle Armor",
    "description": "Forged from compressed packets and flickering pixels, this armor absorbs incoming data attacks! It’s surprisingly comfortable… mostly. Just don't overload your system while wearing it.",
    "category": "equipment",
    "price": 12500,
    "icon": "💻",
    "stock": 8,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "increases resistance to digital attacks by 20%",
      "chance to reflect data-based spells (5%)",
      "reduces the effectiveness of hacking attempts"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Secure Packet Transfer",
    "levelRequirement": 10
  },
  "earth_land_warriors_feast": {
    "id": "earth_land_warriors_feast",
    "name": "Wario's Champion's Banquet",
    "description": "Wario's Champion's Banquet is a colossal platter, its surface gleaming with layers of roasted boar and honey-glazed sausages that could fuel an entire regiment for a full day. The magically preserved fruit adds to the feast's legendary sustenance, ensuring no one will starve while they partake. Devour this banquet and you'll feel invigorated, your muscles rippling as strength surges through you—just be wary of the inevitable food coma that follows.",
    "category": "premium",
    "price": 1000,
    "icon": "🍖",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Strength Surge",
      "Sustaining Feast"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Giant Beetle Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Surge",
        "rules": "On activation, gain a +4 bonus to Strength for up to two turns. This effect cannot be gained more than once per long rest."
      },
      {
        "title": "Sustaining Feast",
        "rules": "Consume the banquet and restore 50 hit points instantly. You are immune to the effects of fear for the next hour, after which you must succeed on a DC 14 Constitution saving throw or become stunned until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This banquet is suitable for any brave soul who dares to partake in its legendary feast.",
    "vendorReason": "The Earth Emporium prides itself on offering the most remarkable and nourishing items, including Wario's Champion's Banquet.",
    "shippingDetail": "Delivered by a giant beetle cart that will arrive at your door within the hour.",
    "usage": {
      "activation": "Eaten as an action.",
      "duration": "Two turns for Strength Surge; one hour for Sustaining Feast, after which immunity to fear ends and you must make a saving throw.",
      "endsWhen": "The effects end when the duration expires or if consumed again before the next long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This banquet, while not as rare as some epic items, still requires significant resources to prepare and ensure its magical properties.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:49:59.111919+00:00",
    "aiReviewedAt": "2026-07-23T22:49:59.111919+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_stirring_spoon": {
    "id": "equestria_item_stirring_spoon",
    "name": "Apple Pie Stirring Spoon of Culinary Mastery",
    "description": "The Apple Pie Stirring Spoon of Culinary Mastery is a gleaming silver utensil forged in the heart of Equestria, imbued with Granny Smith's culinary wisdom. This enchanted spoon ensures your pies bake to perfection every time you stir three clockwise rotations. Its faint cinnamon scent hints at its magical origins, and it guarantees a 10% increase in cooking speed while reducing food waste by 25%. A true chef’s secret weapon.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥄",
    "stock": 25,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increases_cooking_speed",
      "reduces_food_waste"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increases Cooking Speed (+10%)",
        "rules": "When used to stir ingredients, this spoon increases the cooking speed by 10%. This effect is instantaneous and does not require a saving throw or other action."
      },
      {
        "title": "Reduces Food Waste (25% chance)",
        "rules": "This spoon has a 25% chance of reducing food waste during preparation. It activates on the first use, providing a single instance of reduced waste for that meal. No save is required to activate this effect."
      }
    ],
    "levelRequirementReason": "All culinary tools are accessible to beginners and experienced chefs alike.",
    "vendorReason": "The Ponyville Market offers a wide array of supplies, including rare and useful items like the Apple Pie Stirring Spoon.",
    "shippingDetail": "Delivered via Pegasus Express, this spoon is delivered swiftly to your doorstep within three days.",
    "usage": {
      "activation": "Passive effect when used for stirring ingredients during cooking.",
      "duration": "Instantaneous (one-time use per meal)",
      "endsWhen": "Exhausts after one use per meal",
      "charges": "Unlimited, but only one instance of reduced food waste per meal."
    },
    "priceReason": "This spoon's rare enchantment and unique benefits justify its moderate price in XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T22:49:51.821489+00:00",
    "aiReviewedAt": "2026-07-23T22:49:51.821489+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_twinkleberry_dust": {
    "id": "equestria_item_twinkleberry_dust",
    "name": "Twinkleberry Dust of Fleeting Dreams",
    "description": "Twinkleberry Dust of Fleeting Dreams is a shimmering powder collected from the rarest Twinkleberries in Equestria. It induces incredibly vivid and pleasant dreams, often leaving you humming melodies or chasing after iridescent butterflies. The dust originates from the whimsical lands of Cloudsdale, where it's said to carry the essence of starlight itself. Its effects are both delightful and enchanting; prolonged use might lead to a mild compulsion to sing or dance in meadows under the moonlit sky.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 70,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Dream Fragments",
      "Melodic Dreams"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dream Fragments",
        "rules": "When consumed, this dust grants the user a short sleep effect (+2 turns) during which there's a 10% chance to gain a dream fragment (equivalent to an experience point). The duration is limited to 8 hours per day. This effect ends if the user takes any harmful action or if they wake up naturally."
      },
      {
        "title": "Melodic Dreams",
        "rules": "While under the influence of this dust, there's a +10% chance that any song you sing will be accompanied by a burst of starlight and melody. This effect lasts for 24 hours after consumption but is ended if the user uses their voice in a harmful manner or if they fall into a nightmare."
      }
    ],
    "levelRequirementReason": "This item's effects are mild enough that even low-level adventurers can enjoy its benefits without facing undue danger.",
    "vendorReason": "The Crystal Empire is known for its connection to the stars, making it a fitting vendor for this celestial powder.",
    "shippingDetail": "Delivered by the swift and reliable Crystal Couriers, ensuring the dust arrives in perfect condition.",
    "usage": {
      "activation": "Eaten or sprinkled on food before sleep.",
      "duration": "8 hours per day for 'Dream Fragments'; 24 hours for 'Melodic Dreams'.",
      "endsWhen": "The duration ends naturally, or if the user takes harmful actions while under its influence.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item is priced high due to its rarity and the limited daily stock, reflecting both its magical properties and the effort required for its collection.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:50:04.948414+00:00",
    "aiReviewedAt": "2026-07-23T22:50:04.948414+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_potion_of_sticky_feet": {
    "id": "earth_land_potion_of_sticky_feet",
    "name": "Potion of Sticky Feet",
    "description": "The Earth Land Potion of Sticky Feet is a peculiar brew that leaves your feet firmly planted to the ground, creating an adhesive bond with the earth. Upon consumption, you find yourself immobilized for 2 minutes, perfect for setting up a surprise ambush or escaping from sticky situations. The concoction's piney scent hints at its natural origin, but it's the despair in the air that truly captures your attention as you consume it.",
    "category": "consumables",
    "price": 1000,
    "icon": "🦶",
    "stock": 48,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_duration_effect:120s",
      "apply_status_effect:sticky"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "swift courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sticky Feet Duration",
        "rules": "You become immobilized for a duration of 120 seconds. This effect can be ended by taking any action that requires movement, such as walking or casting a spell with a somatic component."
      },
      {
        "title": "Sticky Effect",
        "rules": "Your feet are glued to the ground, granting you advantage on Dexterity (Acrobatics) checks made to move. You can use your reaction once per short rest to attempt an Acrobatics check as part of a movement action."
      }
    ],
    "levelRequirementReason": "This potion is designed for beginners, allowing them to experiment with battlefield positioning without the need for higher-level abilities.",
    "vendorReason": "The Guild Quartermaster stocks this item as part of its essential survival kit, catering to adventurers in training and those needing a practical trick up their sleeve.",
    "shippingDetail": "Delivered by the Swift Courier within 3 days from the time of purchase.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "120 seconds",
      "endsWhen": "You take any action that requires movement or upon natural expiration after 2 minutes",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the potion's unique properties and the resources needed to craft it, including rare herbs and a mysterious earth element.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:50:08.962360+00:00",
    "aiReviewedAt": "2026-07-23T22:50:08.962360+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_amulet_of_dragon_favor": {
    "id": "earth_land_amulet_of_dragon_favor",
    "name": "Amulet of Dragon Favor",
    "description": "The Amulet of Dragon Favor is crafted from a gleaming dragon scale found in the heart of ancient ruins. Its surface crackles with arcane energy, and its scent subtly intoxicates those nearby. Wearing it grants you fire resistance and a chance to charm grumpy dragons into cooperative moods, but be wary—its power comes at a cost: it can only be worn by someone who has proven their worth through trials of valor.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐉",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "fire_resistance",
      "charm_grumpy_dragons"
    ],
    "vendor": "magic_shop",
    "shippedBy": "winged_snail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "You gain resistance to fire damage. This effect lasts until the start of your next turn after you take fire damage."
      },
      {
        "title": "Charm Grumpy Dragons",
        "rules": "Once per short or long rest, as a bonus action, you can attempt to charm one grumpy dragon within 30 feet with a DC 15 Charisma (Persuasion) check. On a success, the dragon becomes cooperative for 1 hour."
      }
    ],
    "levelRequirementReason": "Only those who have proven their worth through trials of valor are deemed worthy to wear this amulet.",
    "vendorReason": "Magic Shop specializes in rare and powerful artifacts that can aid adventurers on their quests.",
    "shippingDetail": "The amulet is delivered swiftly by a winged snail, ensuring it arrives fresh from the dragon's heart.",
    "usage": {
      "activation": "Bonus action to charm a grumpy dragon; passive fire resistance granted upon donning.",
      "duration": "Passive effect until start of next turn after taking fire damage; one use per short or long rest for charming dragons.",
      "endsWhen": "Exhausted at the end of a short or long rest, destroyed if worn by someone unworthy.",
      "charges": "Unlimited uses as long as you are worthy."
    },
    "priceReason": "The amulet's value lies in its rarity and the power it offers to those who have earned their right to wear it.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:50:18.122787+00:00",
    "aiReviewedAt": "2026-07-23T22:50:18.122787+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_scroll_of_minor_illusion": {
    "id": "earth_land_scroll_of_minor_illusion",
    "name": "Scroll of Minor Illusion",
    "description": "This ancient, parchment scroll bears the faded image of a shimmering mirage that dances in the heat. Crafted from weathered vellum and sealed with earth magic, it is said to have been penned by an enigmatic sorcerer who sought to deceive and divert. The spell it contains, though minor, can still fool the unwary into seeing what isn't there, making it a valuable tool for those who value subtlety over brute force.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪄",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "cast_spell:minor_illusion",
      "duration:1d4 rounds"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_beetle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cast Minor Illusion",
        "rules": "Activates as an action to cast the minor illusion spell. The duration is 1d4 rounds, during which the illusion can create a sound or image that can be seen by one creature of your choice within 30 feet."
      },
      {
        "title": "Limited Uses",
        "rules": "The scroll has only three charges. Once used, it must rest for at least an hour before it can be recharged. Failing to do so risks the spell's effects being disrupted or reduced in potency."
      }
    ],
    "levelRequirementReason": "This scroll is designed for beginners and those who value stealth over raw power.",
    "vendorReason": "The Earth Emporium specializes in magical curiosities derived from the earth and its secrets, making it a fitting vendor for this enchanted scroll.",
    "shippingDetail": "Ships via giant beetle courier; delivery can be delayed by up to one week due to unpredictable travel conditions.",
    "usage": {
      "activation": "Activates as an action, expending one of its three charges.",
      "duration": "1d4 rounds per use.",
      "endsWhen": "The duration ends when the round count is depleted or the scroll runs out of charges.",
      "charges": "Has 3 uses before recharging."
    },
    "priceReason": "While not a high-level item, this scroll offers significant utility for those who need to cast minor illusion spells frequently and discreetly, justifying its higher price in experience points.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T22:50:54.695113+00:00",
    "aiReviewedAt": "2026-07-23T22:50:54.695113+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_volcanic_charm": {
    "id": "pokemon_item_volcanic_charm",
    "name": "Volcanic Charm",
    "description": "The Volcanic Charm is a molten trinket that pulses with the heat of an active volcano, emanating a warm glow when near lava or fire sources. Crafted from obsidian and volcanic glass, it grants the wearer resistance to fire damage and enhances their attack rolls by +2 when in close proximity to active magma. This charm has a slight chance to ignite enemies on contact, making it a dangerous yet valuable tool for any adventuring party.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 25,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Fire Resistance",
      "Enhanced Attack"
    ],
    "vendor": "pokemart",
    "shippedBy": "Poke-Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "The wearer gains resistance to fire damage while the Volcanic Charm is active. This effect lasts until the end of their next turn."
      },
      {
        "title": "Enhanced Attack (Near Lava)",
        "rules": "When within 30 feet of an active lava source, the user's attack rolls are increased by +2 until the start of their next turn. This effect can only activate once per short or long rest."
      }
    ],
    "levelRequirementReason": "The charm is accessible to all adventurers who wish to harness its fiery power.",
    "vendorReason": "Pikachu, the Electric Mouse, has a knack for finding rare volcanic artifacts and sells this charm in his Pokemart.",
    "shippingDetail": "The Volcanic Charm is delivered by a Poke-Drone directly to your doorstep, ensuring it arrives with minimal risk of damage.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until the end of the wearer's next turn or until destroyed.",
      "endsWhen": "The effect ends when the charm is removed from a lava source, destroyed in combat, or after one short rest for enhanced attack rolls.",
      "charges": "Unlimited uses; the charm does not recharge."
    },
    "priceReason": "The Volcanic Charm's price reflects its rare volcanic origin and unique properties that enhance both defense and offense.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T22:51:30.184030+00:00",
    "aiReviewedAt": "2026-07-23T22:51:30.184030+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_league_badge_honor": {
    "id": "pokemon_item_league_badge_honor",
    "name": "Badge of League Honor",
    "description": "The Badge of League Honor is a gleaming, intricate piece of jewelry crafted from polished obsidian and platinum, inscribed with the emblems of past champions. Worn by elite trainers who have conquered every league challenge, this badge not only enhances your stats but also grants you the aura of an undefeated warrior on the battlefield. When you wear it in battle, there's a chance that any Pokémon captured will be weakened temporarily, ensuring its loyalty to you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏆",
    "stock": 10,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Enhanced Trainer Stats",
      "Weaken Captured Pokémon"
    ],
    "vendor": "league_store",
    "shippedBy": "Elite Courier",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Enhanced Trainer Stats",
        "rules": "While wearing the Badge of League Honor, your speed and luck are increased by +5. This effect is passive and does not require any action to activate."
      },
      {
        "title": "Weaken Captured Pokémon",
        "rules": "Once per battle, when you successfully capture a Pokémon, there's a 20% chance that its stats will be reduced by one stage for the rest of the encounter. This effect is triggered on successful capture and cannot be used more than once per battle."
      }
    ],
    "levelRequirementReason": "Only trainers with significant experience, as evidenced by their level, can wield this prestigious badge.",
    "vendorReason": "The league store is the official purveyor of all items and badges earned through its competitions.",
    "shippingDetail": "This item arrives promptly via the Elite Courier service, ensuring that your badge reaches you in perfect condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent until removed or lost.",
      "endsWhen": "Effect ends when the badge is removed or lost.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This badge's price reflects its mythic rarity and the prestige it bestows, making it a significant but fair investment for elite trainers.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T22:50:47.288215+00:00",
    "aiReviewedAt": "2026-07-23T22:50:47.288215+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_safariboots_shadow": {
    "id": "pokemon_item_safariboots_shadow",
    "name": "Safari Boots of Shadowstep",
    "description": "The Safari Boots of Shadowstep are crafted from shadowy leather imbued with ancient forest magic. These boots allow you to move silently through dense foliage and evade detection, making them ideal for covert operations or stealthy pursuits in the wild. With a tap of your foot, they activate, granting you an eerie speed that can only be matched by the shadows themselves, and a chance to slip past even the most vigilant eyes.",
    "category": "equipment",
    "price": 1000,
    "icon": "👟",
    "stock": 75,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Ethereal Speed",
      "Shadow Evasion"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Courier Pegasus Swiftwing",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ethereal Speed",
        "rules": "As a bonus action, you can activate these boots. For 1 minute, your movement speed increases by +3 feet and you gain advantage on Dexterity (Stealth) checks. The effect ends early if you are incapacitated."
      },
      {
        "title": "Shadow Evasion",
        "rules": "Once per short or long rest, you can activate this ability to have a 50% chance to evade an attack made against you. If successful, the attacker misses completely. This uses one charge; if used while you are incapacitated, all charges expended."
      }
    ],
    "levelRequirementReason": "The boots' magic is potent but not overwhelming, making them accessible to adventurers of any class or background.",
    "vendorReason": "As the Safari Shop specializes in gear for tracking and exploration, these boots are a natural fit for their inventory.",
    "shippingDetail": "The Courier ensures swift delivery with minimal delay, often arriving within a week of purchase.",
    "usage": {
      "activation": "Bonus action to activate Ethereal Speed; once per short or long rest to use Shadow Evasion",
      "duration": "1 minute (Ethereal Speed); instantaneous (Shadow Evasion)",
      "endsWhen": "Incapacitated or ends at the start of your next turn.",
      "charges": "5 charges, recharged after a short or long rest"
    },
    "priceReason": "The boots' unique combination of stealth and speed makes them highly sought-after by adventurers, justifying this price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T22:50:54.289709+00:00",
    "aiReviewedAt": "2026-07-23T22:50:54.289709+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_tactician's_briefing": {
    "id": "midlands_item_tactician's_briefing",
    "name": "Strategic Insight Session",
    "description": "Master Silas's Strategic Insight Session is a one-hour briefing where you delve into your current tactical situation. The retired general, known for his hat collection and eccentric strategies, offers *suggestions*—and sometimes, surprising insights that can turn the tide of battle. Gain a +3 bonus to your next tactical decision roll, and there’s a 50% chance to gain a temporary advantage in your next combat encounter. However, you’ll find yourself -1 on charisma checks for an hour due to his relentless pontification.",
    "category": "services",
    "price": 1000,
    "icon": "🧠",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Tactical Insight",
      "Combat Advantage"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "messenger pigeon",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Tactical Insight",
        "rules": "Activates as a bonus action. Grants a +3 bonus to the next tactical decision roll made by the recipient. Ends when the recipient makes their next tactical decision roll."
      },
      {
        "title": "Combat Advantage",
        "rules": "There is a 50% chance that the recipient gains temporary advantage in a single combat encounter. This effect ends at the end of the current combat encounter or if the recipient leaves the area where they gained this advantage."
      }
    ],
    "levelRequirementReason": "Master Silas's sessions are tailored for experienced tacticians who can appreciate and apply his strategic advice.",
    "vendorReason": "As a hub for military resources, the Empire Exchange often offers services that enhance combat efficiency.",
    "shippingDetail": "The messenger pigeon delivers the briefing materials within an hour of purchase.",
    "usage": {
      "activation": "Bonus action to activate; ends when the recipient makes their next tactical decision roll.",
      "duration": "Instantaneous effect upon activation, with no further duration.",
      "endsWhen": "Ends after the recipient uses it for a single tactical decision roll.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the expertise of Master Silas and the strategic value his insights provide.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T22:51:08.024718+00:00",
    "aiReviewedAt": "2026-07-23T22:51:08.024718+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_broken_banner": {
    "id": "midlands_item_broken_banner",
    "name": "Fragment of the Fallen Standard",
    "description": "The Fragment of the Fallen Standard, a tattered banner of crimson silk now muddied and torn, radiates an aura that subtly boosts nearby warriors' morale but also stirs unsettling memories in onlookers. Those who hold it may feel compelled to issue forgotten commands, inadvertently drawing unwanted attention from vigilant guards. The banner's weight seems heavier than its fragile appearance suggests, reducing the wearer’s pace by 10% as if encumbered.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚩",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "+1 Morale Boost within a Small Radius",
      "Provokes Hostility from Nearby Guards"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "a sturdy cart with a team of mules",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Morale Boost",
        "rules": "Allies within 30 feet gain +1 to morale checks for the duration of one short rest. The effect ends if the wielder drops or abandons the banner."
      },
      {
        "title": "Hostility Provocation",
        "rules": "The wielder has disadvantage on stealth checks and may provoke an attack from any nearby guard within 60 feet when they issue a command or shout out of turn. This effect ends after three uses per day, requiring a short rest to reset."
      }
    ],
    "levelRequirementReason": "Even a novice can recognize the banner's potential to inspire and incite, making it accessible from level 1.",
    "vendorReason": "The artisans of Fractured Forge salvage relics and artifacts, ensuring that even remnants of forgotten banners find their way into capable hands.",
    "shippingDetail": "Careful handling is required to ensure the banner's tattered state remains intact during transit.",
    "usage": {
      "activation": "Instantaneous; no activation action required",
      "duration": "One short rest for morale boost, ends after three uses per day for hostility provocation",
      "endsWhen": "The wielder drops or abandons the banner, or they take damage",
      "charges": "Unlimited"
    },
    "priceReason": "This relic's balanced price reflects its dual-edged utility and historical significance in inspiring and provoking.",
    "priceOriginal": 450,
    "priceReviewedAt": "2026-07-23T22:52:14.678742+00:00",
    "aiReviewedAt": "2026-07-23T22:52:14.678742+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_graffiti_kit": {
    "id": "connectopia_pioneer_graffiti_kit",
    "name": "Wario's Blocky Blitz Kit",
    "description": "Wario's Blocky Blitz Kit is a set of vibrant, block-shaped paint cans and specialized nozzles, all forged in Wario’s own workshop. This kit allows you to transform any surface into a chaotic masterpiece or a pixelated caricature of Wario's face. The paints adhere with surprising strength, and the nozzles can spray in intricate patterns, making it easy to leave your mark on the world—or just create an eyesore that draws unwanted attention from passersby.",
    "category": "consumables",
    "price": 1000,
    "icon": "🎨",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Visual Distraction",
      "Increased Charisma"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Mail Block Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Visual Distraction",
        "rules": "When you activate the kit, you can spray a block pattern on any flat surface within 10 feet. This creates an area of visual distraction that lasts for 1 minute. Any creature within this area must make a DC 12 Wisdom saving throw or become distracted (disadvantage on attack rolls and ability checks) until the end of their next turn."
      },
      {
        "title": "Increased Charisma",
        "rules": "For as long as you carry Wario's Blocky Blitz Kit, your Charisma score is increased by 1. This bonus lasts for a short rest or when you finish a long rest."
      }
    ],
    "levelRequirementReason": "This kit requires no level because it’s designed to be accessible and fun for all adventurers.",
    "vendorReason": "Pioneer Post often carries unique and colorful items that appeal to travelers and artists alike, making Wario's Blocky Blitz Kit a perfect fit.",
    "shippingDetail": "The paints are shipped in sturdy block-shaped containers that ensure they arrive unbroken. Delivery can take up to two weeks due to the unique packaging.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous spray, lasts for 1 minute",
      "endsWhen": "The distraction ends when a creature succeeds on its saving throw or leaves the area",
      "charges": "Unlimited uses"
    },
    "priceReason": "Despite being common in rarity, this kit’s unique design and utility justify its high price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:51:26.843395+00:00",
    "aiReviewedAt": "2026-07-23T22:51:26.843395+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_glimmering_crumb": {
    "id": "doughnut_hole_glimmering_crumb",
    "name": "Glimmering Crumb of Nullity",
    "description": "The Glimmering Crumb of Nullity, a strangely iridescent morsel that seems to defy gravity, occasionally floating upwards before gently falling back down. This ethereal treat grants a brief moment of spatial resistance, allowing you to sidestep the treacherous pulls of void-worms, and provides a fleeting surge in agility, enhancing your dexterity for those critical moments of escape. Consumed with a sip of water, this crumb is said to originate from the forgotten realms of Nullity itself.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "resistance_to_spatial_anomalies",
      "agility_boost"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Spatial Anomalies",
        "rules": "For 1 minute after consuming this crumb, you gain resistance to any effect that would pull or push you. If you are subjected to such an effect during this duration, you can make a DC 15 Dexterity saving throw to negate it."
      },
      {
        "title": "Agility Boost",
        "rules": "For the same minute-long duration, your speed is increased by 10 feet and you gain advantage on Dexterity checks and saving throws. This effect does not stack with other similar abilities."
      }
    ],
    "levelRequirementReason": "This crumb's effects are potent enough to be useful for even the most novice adventurers.",
    "vendorReason": "Hole Hawker, known for their eccentric and otherworldly goods, frequently travels through Nullity's borders in search of such exotic delicacies.",
    "shippingDetail": "The Dimensional Courier ensures swift delivery via the void-worms' natural tunnels, guaranteeing safe arrival within a day from purchase.",
    "usage": {
      "activation": "Eaten with a sip of water; can be consumed once per long rest.",
      "duration": "1 minute",
      "endsWhen": "The duration ends when it expires or you take damage.",
      "charges": "Unlimited, one use per long rest."
    },
    "priceReason": "Balanced to provide a significant but not overpowered effect for the price, making it accessible yet valuable.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T22:51:56.913672+00:00",
    "aiReviewedAt": "2026-07-23T22:51:56.913672+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_chronal_donut": {
    "id": "doughnut_hole_chronal_donut",
    "name": "Chronal Donut of Temporal Distortion",
    "description": "The Chronal Donut of Temporal Distortion is a sugary vortex that briefly warps spacetime. Its core, a golden Chronal Core, emits a faint hum as it distorts reality around you. With each bite, you can either speed up your attacks by +1d6 to attack rolls or slow down enemy attack speeds by -20%. Timing its use is key; the donut's effects last for 1 round and can be toggled once per short rest.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "speed_attack",
      "slow_enemy"
    ],
    "vendor": "center_seller",
    "shippedBy": "Swift Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Speed Attack",
        "rules": "When you consume a bite of this donut, you gain advantage on attack rolls until the start of your next turn. This effect can be toggled once per short rest."
      },
      {
        "title": "Slow Enemy",
        "rules": "Additionally, any enemy that starts its turn within 5 feet of you has its speed reduced by -20% for 1 round. This effect also toggles once per short rest."
      }
    ],
    "levelRequirementReason": "This donut requires a level 8 character to consume due to the complex magical energies it contains.",
    "vendorReason": "Center Seller specializes in rare and exotic items that can alter one's capabilities, making this donut an ideal addition to their inventory.",
    "shippingDetail": "Ships within the week via Swift Courier, ensuring you receive your Chronal Donut promptly.",
    "usage": {
      "activation": "Eating a bite of the donut as an action",
      "duration": "1 round per effect toggled",
      "endsWhen": "The start of your next turn or when the donut is consumed",
      "charges": "Unlimited, but can be toggled once per short rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare and powerful effects.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:51:44.755870+00:00",
    "aiReviewedAt": "2026-07-23T22:51:44.755870+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_singularity_core": {
    "id": "doughnut_hole_singularity_core",
    "name": "Singularity Core Fragment",
    "description": "The Singularity Core Fragment hums with raw, unyielding void energy, its pulsating surface a swirling maelstrom of darkness and light. This fragment is said to have been forged from the heart of a collapsed star, now reduced to a shard barely contained within the grip of an experienced wielder. Its use grants incredible power, but at the cost of unraveling one's very essence; prolonged exposure risks disintegration or worse, transforming the user into a void creature.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💥",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "grant_10_damage",
      "void_shift"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Black Hole Express",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Void Shift",
        "rules": "As an action, the wielder can unleash a localized distortion of space and time. This creates a 5-foot radius area centered on them that warps for 1 minute. Any creature within this effect must succeed on a DC 15 Dexterity saving throw or be disoriented for 1 round."
      },
      {
        "title": "Grant Damage",
        "rules": "The wielder can deal 10 force damage to a target of their choice with a successful melee attack. This effect has no cooldown and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "Only those with advanced martial training and a deep understanding of the void can wield this fragment without risking their sanity.",
    "vendorReason": "The Void Vendor is known for dealing in forbidden items, including those that manipulate the fabric of reality itself, making them an ideal merchant for such a dangerous artifact.",
    "shippingDetail": "Ships via Black Hole Express, which guarantees safe delivery to even the most hostile regions. The package is sealed with cosmic runes to prevent any tampering.",
    "usage": {
      "activation": "Action or Reaction (as a bonus action)",
      "duration": "Instantaneous and ongoing for Void Shift; instantaneous for Grant Damage",
      "endsWhen": "Disruption, saving throw success, or the end of the wielder's next turn for Void Shift. Ends when used in Grant Damage.",
      "charges": "Unlimited, but once per short rest for Void Shift"
    },
    "priceReason": "Balanced at 1000 XP as it provides a significant power boost while maintaining the risk of catastrophic failure.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T22:52:33.415214+00:00",
    "aiReviewedAt": "2026-07-23T22:52:33.415214+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_dynamite_brick": {
    "id": "connectopia_dynamite_brick",
    "name": "Wario's Explosive Block",
    "description": "Wario's Explosive Block, a squat, brick-shaped device forged in the heart of the Mushroom Kingdom, is far from ordinary. When activated, this compact block detonates with a deafening boom, clearing obstacles and creating an area of destabilized ground that can send creatures sprawling. Crafted by Wario himself using rare materials scavenged from the Lumberjack's Workshop, it's a versatile tool for any adventurer seeking to clear paths or create chaos.",
    "category": "consumables",
    "price": 1000,
    "icon": "💥",
    "stock": 88,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deals_5_fire_damage",
      "creates_small_explosion"
    ],
    "vendor": "craft_corner",
    "shippedBy": "delivery_truck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Explosive Blast",
        "rules": "When activated, this block detonates with a powerful explosion that deals 5 fire damage to all creatures within 10 feet. The blast creates unstable ground that forces creatures in the area to make a DC 12 Dexterity saving throw or be pushed back 10 feet and knocked prone."
      },
      {
        "title": "Unstable Terrain",
        "rules": "For one minute after activation, any creature that ends its turn within 10 feet of Wario's Explosive Block must make a DC 12 Dexterity saving throw or be pushed back 5 feet and become restrained until the end of their next turn."
      }
    ],
    "levelRequirementReason": "This device is designed for general use by adventurers, making it accessible to those with basic combat skills.",
    "vendorReason": "Craft Corner specializes in a wide range of tools and devices useful for clearing paths through various challenges, making Wario's Explosive Block a perfect fit for their inventory.",
    "shippingDetail": "Shipped via the Mushroom Kingdom Delivery Truck with expedited service to ensure it reaches adventurers quickly.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous explosion, unstable terrain lasts for one minute",
      "endsWhen": "The unstable ground effect ends after one minute or when a creature moves out of the area.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted with rare materials and designed to be versatile, Wario's Explosive Block is priced at 1000 XP to reflect its utility in various combat situations.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T22:53:03.107175+00:00",
    "aiReviewedAt": "2026-07-23T22:53:03.107175+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_block_shifter": {
    "id": "connectopia_block_shifter",
    "name": "Temporal Block Shifter",
    "description": "The Temporal Block Shifter is a whimsical contraption made of polished brass and emerald glass, crafted in the shadowy alleys of Blockville by Blocksmith's finest. With a simple flick of its lever, you can rewind or fast-forward the age of a single block by up to ten years—turning fresh-cut timber into seasoned wood or crumbling stone into ancient rubble. However, be wary; its unpredictable nature might summon a confused cube that could disrupt your surroundings for days on end.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Adjustment",
      "Structural Instability"
    ],
    "vendor": "Blocksmith",
    "shippedBy": "Automated Conveyance System",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Adjustment",
        "rules": "As an action, you can adjust the age of one block by up to ten years. The change is instantaneous and affects only a single block within reach. There's a small chance (5%) that the adjustment causes minor structural instability in adjacent blocks."
      },
      {
        "title": "Structural Instability",
        "rules": "If an adjacent block destabilizes, it creates a 10-foot radius area of unstable ground. Creatures and objects in this area must make a DC 12 Strength saving throw or be knocked prone. The instability persists for one minute unless the affected blocks are repaired."
      }
    ],
    "levelRequirementReason": "Requires some dexterity to handle the delicate mechanism without causing an unintended adjustment.",
    "vendorReason": "The Blocksmith is known for their eccentric inventions, and this shifter is a testament to their expertise in manipulating block properties.",
    "shippingDetail": "Ships via the Automated Conveyance System; delivery can take up to three days depending on traffic.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the block's age is adjusted or if a save is failed due to structural instability.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced as it offers versatile utility in construction and demolition, but with risks that could lead to unintended consequences.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:52:27.782675+00:00",
    "aiReviewedAt": "2026-07-23T22:52:27.782675+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_echoing_gear": {
    "id": "connectopia_echoing_gear",
    "name": "The Resonant Cog",
    "description": "The Resonant Cog hums with the residual energy of countless gears and levers that once powered forgotten workshops. Its surface shimmers with a patina of rusted metal, yet it pulses faintly with an ancient, almost sentient intelligence. Crafters who handle this relic gain fleeting insights into complex machinery, but beware: prolonged exposure can trigger a cascade of tiny automaton parts to assemble around you, each one a fragment of the cog’s past life.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⚙️",
    "stock": 85,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Crafting Insight",
      "Automaton Assembly"
    ],
    "vendor": "Craft Corner",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crafting Insight",
        "rules": "At the start of your turn while wearing The Resonant Cog, you can roll a d6. On a result of 5 or higher, you gain advantage on one Craft check that day."
      },
      {
        "title": "Automaton Assembly",
        "rules": "If you spend more than an hour in close proximity to the cogs without taking any other actions, tiny automaton parts begin assembling around your feet. These parts are harmless but can cause a distraction, requiring a DC 12 Dexterity saving throw to avoid being tripped by them."
      }
    ],
    "levelRequirementReason": "The Resonant Cog’s subtle magic is accessible to low-level characters who seek to enhance their craft.",
    "vendorReason": "As a renowned source of magical curiosities, Craft Corner stocks unique items like The Resonant Cog that appeal to both novices and seasoned craftsmen.",
    "shippingDetail": "Ships via the Winged Courier with next-day delivery within the region.",
    "usage": {
      "activation": "Passive effect, triggered by proximity and time spent handling it.",
      "duration": "Instantaneous for Crafting Insight; lasts until the start of your next turn for Automaton Assembly.",
      "endsWhen": "The effect ends if you leave close proximity or take any other action during an hour of continuous exposure.",
      "charges": "Unlimited, but limited to one effect per day."
    },
    "priceReason": "The Resonant Cog provides a unique and powerful crafting advantage without overshadowing the player’s abilities.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:52:46.853800+00:00",
    "aiReviewedAt": "2026-07-23T22:52:46.853800+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_void_wrench": {
    "id": "connectopia_void_wrench",
    "name": "The Nullifier",
    "description": "The Nullifier, a wrench forged from a shard of the Void, can disrupt magical energies with a mere twist. Crafted by the enigmatic Pioneer Post, this tool's blade is said to have been shaped in the heart of the cosmic void itself. When deployed, it creates localized distortions that weaken magic and cause confusion among foes, but use it too often and you might find yourself entangled in an existential paradox or plagued with a severe headache.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌌",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Weakens Magic",
      "Causes Confusion"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Black Market Freighter",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Weakens Magic",
        "rules": "When activated as a bonus action, the Nullifier reduces the magic resistance of all creatures within 5 feet by 20%. This effect lasts for 1 minute. The target can use their reaction to make a DC 16 Wisdom saving throw to negate this effect."
      },
      {
        "title": "Causes Confusion",
        "rules": "Upon activation, the Nullifier emits a localized distortion that causes creatures within 30 feet to be confused for 1 minute. A creature can use its action at the start of its turn to make a DC 15 Intelligence saving throw. On a successful save, it ends this effect."
      }
    ],
    "levelRequirementReason": "The Nullifier requires a high level of magical understanding and control to safely wield.",
    "vendorReason": "As pioneers in arcane technology, the Pioneer Post regularly deals with such powerful yet perilous tools.",
    "shippingDetail": "Due to its volatile nature, it is shipped under strict conditions and only available through special order.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute per activation",
      "endsWhen": "The duration ends when the effect's time expires or a successful saving throw is made.",
      "charges": "Unlimited, but limited to one use per long rest."
    },
    "priceReason": "The Nullifier’s price reflects its rarity and the materials required for its forging from the void shard.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-23T22:52:58.826811+00:00",
    "aiReviewedAt": "2026-07-23T22:52:58.826811+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_grizzly_charm": {
    "id": "earth_land_grizzly_charm",
    "name": "Grizzly's Grumbling Good Luck Charm",
    "description": "This surprisingly warm charm, made from a grizzled badger's tooth and imbued with earth magic, emits a faint scent of wet fur and regret. It not only grants a +1 luck bonus for three turns but also has a low chance of summoning a mischievous badgerling, which can drop useful items or simply complain loudly in a language only the initiated can understand. The charm is said to be blessed by the ancient spirits of the earth, making it a rare and cherished token among adventurers seeking good fortune.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🐻",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Luck Boost",
      "Badgerling Summons"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "winged_squirrel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Luck Boost",
        "rules": "The wielder gains +1 luck bonus for up to three turns. This effect is passive and does not require any action from the user."
      },
      {
        "title": "Badgerling Summons",
        "rules": "There is a 20% chance that activating the charm will summon a mischievous badgerling within 10 feet of the wielder for one minute. The badgerling deals 1d4 bludgeoning damage to any creature it hits and has a +2 bonus to Dexterity (Acrobatics) checks."
      }
    ],
    "levelRequirementReason": "The charm's magic is simple enough that even novice adventurers can wield its power.",
    "vendorReason": "The guild quartermaster often deals in rare and useful artifacts, including this good luck charm.",
    "shippingDetail": "Shipped by a fleet of winged squirrels that deliver the charm within one day.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the duration expires or the charm is no longer held.",
      "charges": "Unlimited, but only one badgerling can be summoned per day."
    },
    "priceReason": "The charm's rarity and its ability to summon a mischievous yet helpful creature justify its higher price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T22:53:59.572021+00:00",
    "aiReviewedAt": "2026-07-23T22:53:59.572021+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_rusting_plate": {
    "id": "almost_edge_rusting_plate",
    "name": "Rusting Plate of the Lost Patrol",
    "description": "The Rusting Plate of the Lost Patrol is a heavily corroded steel plate etched with the fading insignia of a forgotten patrol that vanished between worlds. Its surface is pitted and tarnished, yet it still offers minimal protection. The plate seems to attract unsettling whispers from the edges of reality, causing spectral noise in its vicinity. Despite being cursed, it retains some utility for those brave enough to wield it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 62,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Attracts spectral noise",
      "Reduces charisma"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "gravity well",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Attracts Spectral Noise",
        "rules": "There is a 10% chance per short or long rest that unsettling whispers and spectral noises emanate from the plate, creating an area of disturbance around you. Creatures within this area must make a Wisdom saving throw (DC 13) or become frightened for 1 minute."
      },
      {
        "title": "Reduces Charisma",
        "rules": "While wearing the plate, your charisma score is reduced by 2 until removed from combat or at the end of your next turn."
      }
    ],
    "levelRequirementReason": "The cursed nature and limited utility of this plate necessitate a minimum level to use it effectively.",
    "vendorReason": "The Liminal Trader deals in relics from other dimensions, including items that are both useful and dangerous.",
    "shippingDetail": "Ships via the Gravity Well Express Service, known for its unpredictable but reliable delivery times.",
    "usage": {
      "activation": "Passive effect active while worn in combat or exploration.",
      "duration": "Instantaneous activation; lasts until removed from combat or at end of next turn.",
      "endsWhen": "Removed from combat or at the end of your next turn.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The plate's cursed nature and unique properties, coupled with its limited but strategic utility, justify a price of 1000 XP.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-23T22:53:07.650038+00:00",
    "aiReviewedAt": "2026-07-23T22:53:07.650038+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_godly_shard_of_the_frostfang": {
    "id": "earth_land_godly_shard_of_the_frostfang",
    "name": "Shard of the Frostfang",
    "description": "The Shard of the Frostfang is a crystalline fragment from an ancient Ice Dragon's tooth, pulsing with numbing frost magic. This godly relic offers unparalleled protection against cold damage and can unleash devastating blasts of icy energy, though its wielder must be careful not to inadvertently freeze their allies as well. Crafted by nature itself, this shard is a testament to the elemental might that once ruled the frozen realms.",
    "category": "equipment",
    "price": 1000,
    "icon": "❄️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Armor +30",
      "Resistance to Cold"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Ice Elemental Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Blast of Frost",
        "rules": "As an action, you can unleash a blast of icy energy within a 15-foot cone. Each creature in that area must make a DC 20 Dexterity saving throw or take 4d6 cold damage and be pushed back one step on the movement grid."
      },
      {
        "title": "Cold Aura",
        "rules": "You radiate a frost aura centered around you. Any creature within 30 feet of you that ends its turn there must make a DC 20 Constitution saving throw, taking 4d6 cold damage on a failed save."
      }
    ],
    "levelRequirementReason": "The Shard's raw elemental power demands a high level to wield effectively.",
    "vendorReason": "Earth Emporium specializes in ancient and godly relics, making it the ideal vendor for this artifact of nature.",
    "shippingDetail": "Ships via the Ice Pathway, a perilous route through frozen caverns. Delivery may take up to one week due to hazardous conditions.",
    "usage": {
      "activation": "Action or Reaction (to cast Blast of Frost)",
      "duration": "Instantaneous (Blast of Frost); Concentration (Cold Aura)",
      "endsWhen": "Lost concentration, expended uses",
      "charges": "Recharge after a long rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and the challenge it poses to wielders.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T22:54:05.690862+00:00",
    "aiReviewedAt": "2026-07-23T22:54:05.690862+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sticky_sweet_roll": {
    "id": "leclaire_isle_item_sticky_sweet_roll",
    "name": "Sticky Sweet Roll of Unspeakable Delight",
    "description": "The Sticky Sweet Roll of Unspeakable Delight is a deceptively simple pastry, its golden crust crackling with sugary magic. When consumed, it grants temporary invigoration and a rush of energy that leaves you dancing on the edge of sugar-induced euphoria. The roll's magical dough is said to be crafted from the essence of forgotten sweets, making each bite an explosion of flavor and power. Beware, for its effects are as sweet as they are fleeting; too much might just send you into a fit of giggles or worse—into a coma-like sugar high.",
    "category": "consumables",
    "price": 1000,
    "icon": "🎂",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Heal 15 HP",
      "Increase movement speed by 10%"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Dough Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Invigoration",
        "rules": "When consumed, the Sticky Sweet Roll grants the eater 15 hit points and increases their movement speed by 10% for 3 minutes. This effect does not stack with other sources of increased speed or healing."
      },
      {
        "title": "Sugary Boost",
        "rules": "For the duration of its effects, any attack rolls made are at advantage if the recipient is in a sugar-induced euphoria state (as per the roll's magical properties). This effect ends when the eater no longer has hit points remaining."
      }
    ],
    "levelRequirementReason": "The Sticky Sweet Roll's effects, while powerful, are not overly complex and can be enjoyed by any adventurer.",
    "vendorReason": "Dough Depot is known for its wide variety of magical pastries, including the Sticky Sweet Roll, which they source directly from the ancient ovens of Le Claire Isle.",
    "shippingDetail": "The roll arrives fresh and warm, delivered by the efficient Dough Delivery Drone with a slight delay due to its special handling in transit.",
    "usage": {
      "activation": "Eaten as a consumable",
      "duration": "3 minutes or until hit points are exhausted",
      "endsWhen": "Hit points are reduced to zero or below, or when the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The Sticky Sweet Roll's rare and magical ingredients make it a costly treat, but its effects justify its price.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:53:33.339848+00:00",
    "aiReviewedAt": "2026-07-23T22:53:33.339848+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_dwarven_pastry_shield": {
    "id": "leclaire_isle_item_dwarven_pastry_shield",
    "name": "Dwarven Pastry Shield of Fortitude",
    "description": "The Dwarven Pastry Shield of Fortitude is a massive, golden croissant forged by the Dough Folk of Le Cleraise Isle. Its surface shimmers with a protective sheen that seems to dance in the light, and it whispers secrets of ancient fortifications as it absorbs blows without crumbling. This shield not only enhances one's defense but also subtly mends minor wounds, offering both protection and sustenance for the weary soul.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Fortified Defense",
      "Healing Aura"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Swift Pastry Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Fortified Defense",
        "rules": "When you take damage from a melee attack, there is a 10% chance that the blow will be deflected harmlessly. This effect can occur once per short or long rest."
      },
      {
        "title": "Healing Aura",
        "rules": "At the start of each of your turns, you gain temporary hit points equal to half your level (rounded down). These temporary hit points last until they are reduced to 0. This effect can occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "The shield's unique properties and the intricate craftsmanship required for its creation necessitate a minimum level of expertise.",
    "vendorReason": "Pastry Palace, renowned for their exquisite pastries, also specializes in crafting such artisanal armor pieces.",
    "shippingDetail": "Ships via Swift Pastry Courier within a week of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the start of your next turn after resting.",
      "endsWhen": "You finish a short or long rest.",
      "charges": "Unlimited, resets with each rest."
    },
    "priceReason": "The shield's rarity and artisanal craftsmanship justify its moderate price point of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:53:33.056373+00:00",
    "aiReviewedAt": "2026-07-23T22:53:33.056373+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_golden_dough_charm": {
    "id": "leclaire_isle_item_golden_dough_charm",
    "name": "Golden Dough Charm of Sweet Luck",
    "description": "The Golden Dough Charm of Sweet Luck is crafted from solidified gold dough, said to have been blessed by a deity of prosperity. It brings unparalleled good fortune, but also attracts sticky situations that can be oddly sweet or sour. This charm grants advantage on persuasion checks involving food or sweets and increases critical hit chance by 5%, making it a delightful gamble for those who know when to hold 'em and when to fold 'em.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Increased Critical Hit Chance",
      "Advantage on Persuasion Checks"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Magical Delivery Portal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Increased Critical Hit Chance",
        "rules": "When used, this charm increases the wielder's chance of scoring a critical hit by 5%. This effect lasts until the end of your next turn."
      },
      {
        "title": "Advantage on Persuasion Checks",
        "rules": "For 1 hour after activation, the wielder gains advantage on persuasion checks involving food or sweets. This effect ends if you use an action to deactivate it early."
      }
    ],
    "levelRequirementReason": "The charm's complexity and the risks of overusing its effects necessitate a minimum character level.",
    "vendorReason": "Sweet Supplies specializes in items related to food, sweets, and good fortune, making it fitting for this golden dough charm.",
    "shippingDetail": "The portal delivers the charm with a sprinkle of sugar, ensuring it arrives intact and ready for use.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn or until you choose to deactivate it early",
      "endsWhen": "At the end of your next turn or when you choose to deactivate it",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The charm's balance is adjusted to ensure it remains an intriguing and useful item without becoming overpowered.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T22:53:49.950569+00:00",
    "aiReviewedAt": "2026-07-23T22:53:49.950569+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_godly_totem": {
    "id": "animatopia_godly_totem",
    "name": "Heart of the Beast King",
    "description": "The Heart of the Beast King is a glowing core encased in ancient bone, said to be a fragment of the soul of the first Beast King. This divine artifact grants immense strength and protection, but it demands responsibility from its wielder. Touching it can heal allies instantly with a chance of full recovery, while granting immunity to fear and charm effects. Only those who have proven their worth at least 35 levels deep may claim this powerful relic.",
    "category": "premium",
    "price": 1000,
    "icon": "👑",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "Heals Allies",
      "Immunity to Fear"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "phoenix",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Heals Allies",
        "rules": "When a creature within 10 feet of the Heart is reduced to 0 hit points, it has a 50% chance to be instantly healed. This effect can only occur once per day."
      },
      {
        "title": "Immunity to Fear",
        "rules": "The wielder gains immunity to all fear and charm effects. This benefit lasts until the end of their next turn after being exposed to a fear or charm effect."
      }
    ],
    "levelRequirementReason": "Only those who have demonstrated sufficient skill and responsibility at least 35 levels deep can wield this powerful relic.",
    "vendorReason": "The Beast Bazaar is known for carrying the most powerful relics of its kind, and the Heart of the Beast King is no exception.",
    "shippingDetail": "Ships via a Phoenix Couriers express service. Delivery can take up to one week due to the artifact's divine nature.",
    "usage": {
      "activation": "Passive effect activated upon touching the Heart of the Beast King.",
      "duration": "Until the end of each turn after exposure to fear or charm effects, and once per day for healing allies.",
      "endsWhen": "The effects expire naturally at the end of each turn.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This balanced price reflects the rarity and power of the Heart of the Beast King, ensuring it remains a desirable but not overpowered relic.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-23T22:53:52.654510+00:00",
    "aiReviewedAt": "2026-07-23T22:53:52.654510+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_datasphere_shard": {
    "id": "kivotos_item_datasphere_shard",
    "name": "Fragment of the Archive",
    "description": "A shimmering shard of glassy obsidian, pulsating with ancient knowledge, this Fragment of the Archive grants fleeting glimpses into forgotten tomes and secret study rooms. Touch it once per day for a brief flash of insight that reveals hidden objects nearby or even uncovers a lost library's location. Too much exposure may drive you mad, compelling you to catalog every scrap of information until your mind runs wild with order.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📚",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "reveal_hidden_objects_nearby",
      "inspire_cataloging_impulse"
    ],
    "vendor": "club_supply",
    "shippedBy": "messenger_bird",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Reveal Hidden Objects Nearby",
        "rules": "As an action, touch the shard to reveal hidden objects or secret doors within a 10-foot radius for 1 minute. This ability can be used once per day."
      },
      {
        "title": "Inspire Cataloging Impulse",
        "rules": "While in contact with this item, you gain advantage on Intelligence (Insight) checks to uncover hidden information or clues. However, if you spend more than 1 hour in its presence without using it for another purpose, you must succeed on a DC 15 Wisdom saving throw or become overwhelmed by the urge to catalog everything around you."
      }
    ],
    "levelRequirementReason": "Requires at least level 7 to manage and focus on the shard's knowledge without succumbing to its overwhelming pull.",
    "vendorReason": "Club Supply often deals in ancient relics and curiosities, making them a trusted vendor for such arcane fragments.",
    "shippingDetail": "The messenger bird delivers the shard within one week of purchase, ensuring its fragile state is maintained during transit.",
    "usage": {
      "activation": "Action or Bonus Action to touch and use once per day.",
      "duration": "1 minute when revealing hidden objects; until you end contact with it for cataloging impulse.",
      "endsWhen": "Exhausted after one daily use, removed from contact during a short rest.",
      "charges": "One charge per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare and knowledge-infused nature.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:54:39.618236+00:00",
    "aiReviewedAt": "2026-07-23T22:54:39.618236+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_rusty_dragonscale": {
    "id": "earth_land_item_rusty_dragonscale",
    "name": "Dragonscale Shard (Probably)",
    "description": "This jagged shard of what *certainly* was a dragon's scale hums softly with latent heat and sulfuric fragrance, hinting at ancient battles fought in distant skies. Crafted from an undetermined, yet unmistakably legendary beast, this shard might imbue its bearer with fiery fortitude or the chance to confuse foes. It is said that those who wield it may find their breath igniting into flame, though some swear it brings more than just warmth to the soul.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "breath_of_the_dragon",
      "chance_to_confuse"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "swift dragon courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Breath of the Dragon",
        "rules": "As a bonus action, you can exhale a plume of flame that deals 1d4 fire damage to all creatures within 5 feet. This effect lasts until used or expended. You regain use after completing a short rest."
      },
      {
        "title": "Chance to Confuse",
        "rules": "There is a 10% chance (roll a d10) that any creature you target with your Breath of the Dragon must succeed on a DC 12 Wisdom saving throw or become confused for 1 minute. This effect ends early if the confused creature takes damage."
      }
    ],
    "levelRequirementReason": "The Dragonscale Shard requires at least third-level proficiency to wield its fiery breath and confusion chance effectively.",
    "vendorReason": "The Guild Quartermaster stocks this rare relic for adventurers seeking unique and potent gear.",
    "shippingDetail": "Ships via a swift courier, often delivered within the week from the Dragon's Roost.",
    "usage": {
      "activation": "Bonus action to exhale fire or target confusion.",
      "duration": "Instantaneous for breath; confusion lasts until end of effect.",
      "endsWhen": "Used or expended during combat, ends with a short rest otherwise.",
      "charges": "Recharges after a short rest."
    },
    "priceReason": "The Dragonscale Shard is priced at 1000 XP due to its rare dragon origin and unique magical properties.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:54:22.707498+00:00",
    "aiReviewedAt": "2026-07-23T22:54:22.707498+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_frostgiant_charm": {
    "id": "earth_land_item_frostgiant_charm",
    "name": "Charm of the Frozen Heart",
    "description": "The Charm of the Frozen Heart is a delicate, intricately crafted pendant depicting the heart of a frost giant, encased in gleaming ice. Legends speak of it being forged by disgruntled ice wizards seeking vengeance for an ill-fated prank gone awry. This charm not only bestows a 15% chance to freeze enemies within its range but also grants +2 resistance to cold damage and the ability to detect nearby sources of ice or frost, ensuring you're always one step ahead in the battle against the elements.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧊",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Freeze Target",
      "Cold Resistance"
    ],
    "vendor": "magic_shop",
    "shippedBy": "winged griffin",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Freeze Target",
        "rules": "When a creature within 5 feet of you takes cold damage, there is a 15% chance that the target becomes frozen for 1 minute. The target can use its action to make a Constitution saving throw (DC 12) to end this effect early."
      },
      {
        "title": "Cold Resistance",
        "rules": "+2 bonus to all saving throws and ability checks made to resist cold damage. This effect is always active while you wear the charm."
      }
    ],
    "levelRequirementReason": "The charm's intricate design requires a certain level of magical understanding to properly harness its icy power.",
    "vendorReason": "Magic Shop specializes in rare and unique items that can enhance one's combat prowess, making this charm an ideal addition to their inventory.",
    "shippingDetail": "Ships via winged griffin for expedited delivery, ensuring the charm arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; lasts until expended or removed.",
      "endsWhen": "The charm is destroyed, removed from your person, or its effects are dispelled by a magical means.",
      "charges": "Unlimited use"
    },
    "priceReason": "Balanced at 1000 XP, this charm offers a significant combat advantage without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:54:29.959721+00:00",
    "aiReviewedAt": "2026-07-23T22:54:29.959721+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_ancient_rune_stone": {
    "id": "earth_land_item_ancient_rune_stone",
    "name": "Rune of Whispered Secrets",
    "description": "The Rune of Whispered Secrets is an ancient stone imbued with the forgotten knowledge of a bygone era. When handled, it hums softly with arcane energy, pulsing with information that can either guide you to hidden treasures or overwhelm your mind with too much lore. Legends speak of its origins in a lost temple deep within an uncharted forest, where only those pure of heart and wise enough to wield it may touch it.",
    "category": "faction",
    "price": 1000,
    "icon": "🔮",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "lore_revealer",
      "wisdom_boost"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "delivery_only",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Lore Revealer",
        "rules": "When activated as an action, the rune reveals one piece of ancient lore related to a hidden treasure or forgotten secret within 100 feet. The DC for any Wisdom (History) check made with this information is reduced by 5."
      },
      {
        "title": "Wisdom Boost",
        "rules": "For 1 hour, the wielder gains a +2 bonus to Intelligence checks and saving throws related to knowledge or wisdom. This effect can be activated once per long rest."
      }
    ],
    "levelRequirementReason": "Requires moderate magical aptitude to safely handle such ancient power.",
    "vendorReason": "The earth's mystics at Earth Emporium have the knowledge and resources to deal in such relics of antiquity.",
    "shippingDetail": "Ships via a trusted courier, ensuring it reaches its destination without damage or mishap.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous reveal; 1 hour boost",
      "endsWhen": "Use ends when the effect duration expires or the item is destroyed in combat.",
      "charges": "Unlimited"
    },
    "priceReason": "Reflects its rarity and the expertise needed to safely handle such an ancient artifact.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T22:54:18.583602+00:00",
    "aiReviewedAt": "2026-07-23T22:54:18.583602+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_sparkling_hoofprint": {
    "id": "equestria_item_sparkling_hoofprint",
    "name": "Sparkling Hoofprint Charm",
    "description": "The Sparkling Hoofprint Charm is a tiny, heart-shaped amulet made from the magic-infused hoofprints of a legendary pony named Sparkle. Crafted by the Elementalist Sisters, it emits a soft, iridescent glow that seems to dance with each step you take. It not only boosts your luck, making you more prone to finding rare items and overcoming challenges but also subtly enhances your charm, improving your social interactions and persuasion checks.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Boosted Luck",
      "Enhanced Charm"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "winged_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boosted Luck",
        "rules": "When activated as a bonus action, the charm grants you advantage on one ability check or saving throw of your choice. This effect lasts for 1 hour after being used."
      },
      {
        "title": "Enhanced Charm",
        "rules": "The charm provides a +2 bonus to Charisma (Persuasion) checks and to any social interaction attempts. The bonus is active as long as you wear the charm, up to a total of 8 hours in a day."
      }
    ],
    "levelRequirementReason": "The charm's magic is simple enough for even novice ponies to harness.",
    "vendorReason": "As the local market, Ponyville Market stocks a wide variety of items that enhance daily life and adventures in the town.",
    "shippingDetail": "Delivered swiftly by the Winged Messengers, ensuring quick arrival to eager adventurers.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour per activation",
      "endsWhen": "The effect ends when you use it again or at the start of your next turn if not used within that hour.",
      "charges": "Unlimited, but only one effect (either Boosted Luck or Enhanced Charm) can be active at a time."
    },
    "priceReason": "The charm's rarity and the unique magic it contains justify its high price in XP.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:54:35.728993+00:00",
    "aiReviewedAt": "2026-07-23T22:54:35.728993+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_windborne_shield": {
    "id": "equestria_item_windborne_shield",
    "name": "Windborne Shield of Zephyr Breeze",
    "description": "The Windborne Shield of Zephyr Breeze is a crystalline masterpiece forged in the heart of the Crystal Empire. Its surface shimmers with ethereal light, and when struck by wind currents, it hums a tune that can calm even the fiercest storm. This lightweight shield not only provides robust defense but also deflects projectiles with impressive force. However, attempting to hug this shield results in an unexpected gust that pushes you back instead of embracing you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Wind Deflection",
      "Enhanced Wind Resistance"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Crystal Delivery Rune",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Wind Deflection",
        "rules": "When a ranged attack is made against the wearer, there's a 10% chance that the projectile will be deflected harmlessly away. This effect has no save DC and does not expend charges."
      },
      {
        "title": "Enhanced Wind Resistance",
        "rules": "The shield grants you advantage on saving throws against wind-related effects and environmental conditions such as strong winds or sandstorms. This benefit lasts for 1 hour after using the shield in combat."
      }
    ],
    "levelRequirementReason": "This shield requires a minimum level of 6 to wield effectively, ensuring that only seasoned adventurers can harness its full potential.",
    "vendorReason": "The Crystal Empire's premier blacksmiths at Canterlot Commerce have exclusive access to the materials and techniques needed to craft such a powerful shield.",
    "shippingDetail": "Ships via the Crystal Delivery Rune, known for their swift and reliable service within Equestria.",
    "usage": {
      "activation": "Instantaneous as part of the attack action when a ranged weapon is used against the wearer.",
      "duration": "1 hour from the start of your next turn after using the shield in combat.",
      "endsWhen": "The effect ends if you are no longer exposed to wind-related conditions or effects.",
      "charges": "Unlimited, as it does not consume any charges."
    },
    "priceReason": "This rare and powerful shield is priced at 1000 XP, reflecting its unique abilities and the difficulty in obtaining the necessary materials for its creation.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:54:43.441571+00:00",
    "aiReviewedAt": "2026-07-23T22:54:43.441571+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_rainbow_dust_bomb": {
    "id": "equestria_item_rainbow_dust_bomb",
    "name": "Rainbow Dust Bomb",
    "description": "The Rainbow Dust Bomb is a crystalline sphere, its surface shimmering with hues of every color in Equestria’s sky. When detonated, it releases a blinding flash of light and a cascade of rainbow particles that swirl through the air like a living storm. This volatile concoction not only deals 6d6 radiant damage within a 15-foot radius but also has a 20% chance to momentarily blind any creature caught in its wake.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌈",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Radiant Damage",
      "Blinding Chance"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "magical_portal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Radiant Damage",
        "rules": "When activated, the bomb detonates with a burst of light and color. It deals 6d6 radiant damage in a 15-foot radius centered on the user. Creatures within this area must make a DC 14 Dexterity saving throw or be blinded until the start of their next turn."
      },
      {
        "title": "Blinding Chance",
        "rules": "There is a 20% chance that any creature caught in the explosion will be blinded for up to one minute. The save DC for this effect is also 14, and creatures can repeat it at the start of their turns as a reaction."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 5 due to its potency and the risk involved in handling such volatile magic.",
    "vendorReason": "The Crystal Empire is known for its mastery over magical substances, including this unpredictable yet awe-inspiring creation.",
    "shippingDetail": "Ships via a magical portal, ensuring swift and safe delivery to the nearest town.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the damage is resolved or the blinding condition expires.",
      "charges": "1 use"
    },
    "priceReason": "This item's price reflects its rarity and the risk involved in its creation, making it a valuable but not overpowered addition to any adventurer’s arsenal.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T22:55:18.303998+00:00",
    "aiReviewedAt": "2026-07-23T22:55:18.303998+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_block_brick": {
    "id": "connectopia_block_brick",
    "name": "Wario's Wonder Brick",
    "description": "The Wario's Wonder Brick vibrates with a peculiar, almost mischievous energy as it clatters and shifts in your hands. This brick is not only sturdy but also surprisingly resilient, resisting minor damage when placed or stacked haphazardly. It’s the perfect tool for any crooked construction project, whether you're building a fortress or just creating an entertainingly lopsided tower that delights even the most grumpy of Wario's minions.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧱",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Increases build speed by 10",
      "Resists minor damage when placed"
    ],
    "vendor": "block_smith",
    "shippedBy": "Block Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Build Speed",
        "rules": "When you use the brick to start a construction task, it grants you advantage on the first check and adds +2 to your build speed modifier for 1 minute. If you stop working or abandon the project before completion, this effect ends."
      },
      {
        "title": "Damage Resistance",
        "rules": "When placed in an unstable position, the brick has a 50% chance of resisting minor damage (represented by 1d6 physical damage) for up to 24 hours. If damaged beyond this threshold or if it is removed from its precarious placement, this effect ends."
      }
    ],
    "levelRequirementReason": "This brick's quirky design and construction principles are accessible to any builder.",
    "vendorReason": "The block smiths of the Mushroom Kingdom have perfected the art of crafting such eccentric yet functional building materials.",
    "shippingDetail": "Ships via Block Delivery Drone, ensuring your bricks arrive in pristine condition and ready for construction.",
    "usage": {
      "activation": "Used as part of a construction task; begins when you start the task and ends after completion or abandonment.",
      "duration": "1 minute per use",
      "endsWhen": "Completion or abandonment of the building task, or if damaged beyond minor thresholds.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to ensure it remains a valuable but not overpowered tool for builders.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:55:04.279766+00:00",
    "aiReviewedAt": "2026-07-23T22:55:04.279766+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_gear_miner's_gauntlet": {
    "id": "connectopia_gear_miner's_gauntlet",
    "name": "The Grunt-inator Gauntlet",
    "description": "The Grunt-inator Gauntlet, a rugged steel gauntlet forged by blocksmiths who worked under the watchful gaze of an irritable miner's spirit, amplifies your digging prowess. Its core is tempered with ore from the deepest veins, and its leather lining is reinforced with enchanted buckles that whisper tales of lost pickaxes. While it boosts mining speed by a hearty 25%, there's always a chance you'll find extra ore in your pockets—though beware, for it may try to claim your pickaxe as its own whenever you're not looking!",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 34,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Mining Speed Boost",
      "Chance for Extra Ore"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Pioneer Post Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Mining Speed Boost",
        "rules": "While wearing the gauntlet, you gain a +1 bonus to mining checks. This effect is active as long as the gauntlet remains on your hand."
      },
      {
        "title": "Chance for Extra Ore",
        "rules": "Once per short or long rest, when you find ore while using this gauntlet in a mining check, you also find an additional piece of ore. The gauntlet can only trigger this effect once every 24 hours."
      }
    ],
    "levelRequirementReason": "The gauntlet requires a minimum level to ensure the wearer's proficiency with basic mining tools.",
    "vendorReason": "Craft Corner specializes in rare and artisanal equipment, making it the perfect vendor for such a unique item.",
    "shippingDetail": "The gauntlet is carefully packed to prevent damage during transit, ensuring that it arrives at your doorstep in pristine condition.",
    "usage": {
      "activation": "Passive",
      "duration": "Instantaneous (the effects are always active while wearing the gauntlet)",
      "endsWhen": "Exhausted after one use per day or when removed from wear",
      "charges": "Unlimited, but only one effect can be used per 24-hour period"
    },
    "priceReason": "The gauntlet's rarity and unique abilities justify its price, offering a balanced value for adventurers seeking to enhance their mining skills.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:55:11.650762+00:00",
    "aiReviewedAt": "2026-07-23T22:55:11.650762+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_curiosity_geode_of_echoes": {
    "id": "connectopia_curiosity_geode_of_echoes",
    "name": "Echoing Stone of the Ancients",
    "description": "The Echoing Stone of the Ancients, a shimmering geode encased in veins of silver and lapis lazuli, hums softly as it whispers secrets of Connectopia’s past. It is said that those who hold this stone can hear faint echoes of long-gone pioneers, their complaints about the weather mingled with tales of adventure. The geode occasionally grants cryptic clues about nearby resources, but be wary—occasionally, wandering spirits may be drawn to its echo, mostly harmless, but still a curious encounter for the brave explorer.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗣️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Whispering Echoes",
      "Resource Clue"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Block Smith Delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Whispering Echoes",
        "rules": "When you spend an action to focus on the stone, roll a Perception check. On a successful result, you hear faint echoes of past events, granting advantage on one Perception check made within the next hour."
      },
      {
        "title": "Resource Clue",
        "rules": "At the start of your turn while holding the stone, there is a 25% chance that it grants you a cryptic clue about nearby resources. This effect does not provoke opportunity attacks and can occur up to once per day."
      }
    ],
    "levelRequirementReason": "The geode’s power requires a deeper understanding of the ancient world, which is only attainable at higher levels.",
    "vendorReason": "Pioneer Post has specialized in connecting adventurers with relics and curiosities from Connectopia's past.",
    "shippingDetail": "Delivered by Block Smith’s trusted couriers, known for their punctuality and reliability.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "When the focus ends or you make another Perception check within an hour of hearing the echoes.",
      "charges": "Unlimited"
    },
    "priceReason": "The Echoing Stone of the Ancients provides a significant advantage in exploration and resource gathering, justifying its high price.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-24T23:58:47.969200+00:00",
    "aiReviewedAt": "2026-07-24T23:58:47.969200+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_quantum_pen": {
    "id": "kivotos_item_quantum_pen",
    "name": "The Scribble of Reality",
    "description": "The Scribble of Reality is a sleek, metallic pen encased in swirling patterns of quantum flux and arcane runes. With each stroke, it bends reality to your will—manifesting fleeting, unstable versions of your creations into the world. Summon a shield that shifts shape with every impact or conjure a miniature Wario that dances unpredictably. But beware, for these manifestations are prone to unforeseen distortions and paradoxes, as if the fabric of space-time itself resists your pen's whimsy.",
    "category": "premium",
    "price": 1000,
    "icon": "✍️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Manifests temporary, unstable creations",
      "Temporary defensive shield"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Manifestation",
        "rules": "As a bonus action, you can use the pen to sketch an object that manifests in the space of your choice within 30 feet. The object lasts for up to 1 minute or until it is destroyed. It has AC equal to 10 + your Dexterity modifier and deals damage based on its nature (e.g., piercing from a spear). If the object interacts with other creatures, there's a 25% chance of creating an unintended effect, such as an extra tentacle or a minor illusion."
      },
      {
        "title": "Defensive Shield",
        "rules": "For every 10 feet you are within 30 feet of the manifested object, gain +1 to AC. This effect lasts until the object is destroyed or until your next short rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level to stabilize and control reality-altering effects.",
    "vendorReason": "Academy Armory specializes in advanced, experimental items that push the boundaries of conventional magic.",
    "shippingDetail": "Ships via high-tech drones, ensuring safe and swift delivery to your doorstep.",
    "usage": {
      "activation": "Bonus action for manifestation; passive while within 30 feet of the manifested object.",
      "duration": "1 minute or until destroyed/used up",
      "endsWhen": "Object is destroyed or its duration ends",
      "charges": "Unlimited, but requires a short rest to fully manifest each new object."
    },
    "priceReason": "Balanced as an epic item that offers powerful utility without overpowered effects.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T22:55:52.454135+00:00",
    "aiReviewedAt": "2026-07-23T22:55:52.454135+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_sparkling_shard": {
    "id": "teyvat_item_sparkling_shard",
    "name": "Sparkling Shard of Storms",
    "description": "This jagged piece of crystallized lightning seems to hum with raw elemental power! It's perfect for boosting your damage against foes vulnerable to lightning, or just making a really cool sparkly effect – Wario loves shiny things!",
    "category": "consumables",
    "price": 850,
    "icon": "⚡️",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_lightning_damage_by_10%",
      "chance_to_apply_shock",
      "small_visual_sparkle"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Wind Courier",
    "levelRequirement": 4
  },
  "teyvat_item_wind_dancer_amulet": {
    "id": "teyvat_item_wind_dancer_amulet",
    "name": "Wind Dancer Amulet of Anemo",
    "description": "The Wind Dancer Amulet of Anemo, forged by the renowned artisans of Mondstadt from shimmering aventurine and imbued with the spirits of the Anemoi, grants its wearer a fleeting touch of the wind's grace. Swift as a gale, it enhances your agility, allowing you to weave through combat with graceful ease, while also reducing the chance that gusts will buffet you unexpectedly. With this amulet, you dance with the winds, not merely endure them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌬️",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Agility",
      "Reduced Gust Vulnerability"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Sky Delivery Drone",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Enhanced Agility",
        "rules": "This amulet grants a +1 bonus to Dexterity (Acrobatics) checks and an increase of your speed by 10 feet for the duration. This effect lasts until you use an action, an hour passes, or you are incapacitated."
      },
      {
        "title": "Reduced Gust Vulnerability",
        "rules": "When you would be pushed or knocked prone due to a gust-based effect, you can choose not to be pushed or knocked prone. This choice does not require your action and may only be used once per short rest."
      }
    ],
    "levelRequirementReason": "The Wind Dancer Amulet requires a level 8 character due to its intricate construction and the specific skills needed for its enchantment.",
    "vendorReason": "As a premier trading hub, Mondstadt's market stocks rare goods from all corners of Teyvat, including this amulet crafted by its own artisans.",
    "shippingDetail": "Your amulet arrives via the swift Sky Delivery Drone service, delivered directly to your doorstep within three days.",
    "usage": {
      "activation": "Passive effect. No activation required.",
      "duration": "Hour-long duration per short rest.",
      "endsWhen": "Effect ends when you use an action, are incapacitated, or a new hour begins.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The amulet is priced at 1000 XP due to its rare materials and the specialized craftsmanship required for its creation.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T22:55:48.207579+00:00",
    "aiReviewedAt": "2026-07-23T22:55:48.207579+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_crimson_echo_pearl": {
    "id": "teyvat_item_crimson_echo_pearl",
    "name": "Crimson Echo Pearl of Inazuma",
    "description": "The Crimson Echo Pearl of Inazuma hums with the raw energy of forgotten battles, its surface etched with the remnants of past conflicts. Held in your palm, it reveals fleeting glimpses into enemy strategies and hidden weaknesses, but be wary; lingering echoes can distort perception if used too often. Crafted by the artisans of Inazuma from ancient battle relics, this pearl is a relic of war, now repurposed for strategic insight.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 18,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "reveal_vulnerability",
      "insightful_glimpse"
    ],
    "vendor": "Inazuma Imports",
    "shippedBy": "Sea Serpent Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Reveal Vulnerability",
        "rules": "When you activate this pearl once per day, it grants you advantage on a single attack roll against a target. The target must succeed on a DC 15 Wisdom saving throw or be considered vulnerable to your next attack against them for the rest of the encounter."
      },
      {
        "title": "Insightful Glimpse",
        "rules": "Once per day, you can use this pearl to gain insight into an enemy's strategy. For the next minute, you have advantage on perception checks to detect hidden weaknesses or patterns in their movements."
      }
    ],
    "levelRequirementReason": "The pearl requires a certain level of experience and focus to harness its strategic insights effectively.",
    "vendorReason": "Inazuma Imports is renowned for its connections with the artisans who create these relics, ensuring authenticity and quality.",
    "shippingDetail": "The Sea Serpent Courier delivers the pearl within a week of your order, carefully wrapped to protect this delicate artifact.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous reveal; lasts one minute for insightful glimpse",
      "endsWhen": "Charges run out or target saves successfully against revealed vulnerability",
      "charges": "1 use per day"
    },
    "priceReason": "The pearl's rarity and the strategic value it provides justify its price, aligning with standard market rates for such powerful curiosities.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-24T23:58:58.119411+00:00",
    "aiReviewedAt": "2026-07-24T23:58:58.119411+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_gravity_crumb": {
    "id": "doughnut_hole_gravity_crumb",
    "name": "Void Crumble",
    "description": "The Void Crumble appears as a shimmering, ephemeral cloud of crumbs that seem to defy gravity, floating upwards in an eerie, yet mesmerizing fashion before gently settling back down. These ethereal particles are said to have been crafted from the very fabric of the void itself by ancient, forgotten beings. Consuming one grants a fleeting burst of enhanced agility, allowing you to dance between collapsing floors or snatch that last coin just as it slips through your grasp.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_speed_2",
      "dodging_burst"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Packet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Speed +2 (Instantaneous)",
        "rules": "When consumed, the Void Crumble grants you a burst of speed, increasing your walking and running speeds by +2 feet for 10 seconds. This effect is instantaneous upon consumption."
      },
      {
        "title": "Dodge Burst (Reaction, Instantaneous)",
        "rules": "While this effect lasts, you gain the ability to use an action on your next turn as a reaction when you are subjected to an effect that would allow you to make a Dexterity saving throw for half damage. You can only use this ability once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Void Crumble is crafted with basic magic, making it accessible to characters of any level.",
    "vendorReason": "As a vendor known for unconventional and magical trinkets, the Hole Hawker carries this item as part of their eclectic collection.",
    "shippingDetail": "The Void Packet ensures swift delivery through the void's natural pathways, arriving within an hour from any location in the Material Plane.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "10 seconds",
      "endsWhen": "Effect ends when duration expires or you take damage",
      "charges": "Unlimited"
    },
    "priceReason": "The Void Crumble's rarity and the unique properties of its crafting materials contribute to its high price in XP.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:56:23.946149+00:00",
    "aiReviewedAt": "2026-07-23T22:56:23.946149+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_anomaly_ring": {
    "id": "doughnut_hole_anomaly_ring",
    "name": "Phase Ring of the Center",
    "description": "The Phase Ring of the Center is a unsettling ring that hums with an eerie pulsation. It allows you to phase through solid objects for up to one minute, creating a brief but disorienting passage through reality. The ring's core is made from twisted doughnut holes, imbued with ancient runes and a sprinkle-dusted surface. Wearing it can lead to moments of existential unease, and some say the ring harbors a sweet tooth that grows stronger with each use.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "phase_through_walls",
      "sprinkles_craving"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Phase Through Walls",
        "rules": "As an action, you can phase through solid objects for up to one minute. This effect ends if you take damage or if your concentration is broken (as described in the Concentration ability)."
      },
      {
        "title": "Sprinkles Craving",
        "rules": "Each time you use the ring's phasing ability, there is a 10% chance that for the next hour, you will experience an uncontrollable craving for sprinkles. This effect can be resisted with a DC 15 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "The ring's complex runes and twisted materials demand a high level of magical proficiency to wield.",
    "vendorReason": "The center seller, known for their vast knowledge of esoteric items, has managed to source this unique ring from an ancient market.",
    "shippingDetail": "Delivery is expedited by the Dimensional Courier, ensuring that the ring arrives in perfect condition and with a sprinkle-dusted exterior.",
    "usage": {
      "activation": "Action",
      "duration": "Up to one minute per use",
      "endsWhen": "You take damage or your concentration is broken",
      "charges": "Unlimited"
    },
    "priceReason": "The ring's unique materials and mystical properties justify its fair price of 1000 XP.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T22:56:14.308543+00:00",
    "aiReviewedAt": "2026-07-23T22:56:14.308543+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_void_slice": {
    "id": "doughnut_hole_void_slice",
    "name": "Nothingness Nibbler",
    "description": "The Nothingness Nibbler is a deceptively mundane slice of dough, its surface etched with arcane runes that shimmer and fade like shadows. When consumed, it grants the eater the eerie ability to whisper secrets into the void, gaining fleeting insights into hidden knowledge. However, the core of this treat is hollow; staring too long at the void-infused center can cause a traveler to merge with the hole, leaving them forever lost within its depths.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌑",
    "stock": 78,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "whisper_to_void",
      "insight_into_forbidden_knowledge"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Parcel",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Whisper to Void",
        "rules": "As an action, you can whisper a question into the void. If your target is a creature or object within line of sight, you gain advantage on any Wisdom (Insight) check made against that target for 1 minute."
      },
      {
        "title": "Insight into Forbidden Knowledge",
        "rules": "For 10 minutes after consuming the Nothingness Nibbler, you can make a DC 20 Intelligence (Arcana) check to gain insight into one forgotten secret related to your current location or recent events. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The arcane power within the Nothingness Nibbler requires a certain level of magical awareness and discipline.",
    "vendorReason": "Void Vendor specializes in items that bridge the gap between the mundane and the mystical, making this treat an ideal addition to their inventory.",
    "shippingDetail": "The delivery is swift but mysterious; the parcel arrives wrapped in shadowy fabric, hinting at its origins from beyond reality.",
    "usage": {
      "activation": "Action or reaction (to whisper into void)",
      "duration": "10 minutes (insight effect) / 1 minute (advantage on Insight check)",
      "endsWhen": "Use limit reached",
      "charges": "Unlimited, but limited to one use per short rest"
    },
    "priceReason": "The Nothingness Nibbler's price reflects the rarity of its ingredients and the complex enchantments required for its creation.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T23:59:09.069640+00:00",
    "aiReviewedAt": "2026-07-24T23:59:09.069640+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_mythic_void_lantern": {
    "id": "almost_edge_mythic_void_lantern",
    "name": "Void Lantern of Unending Descent",
    "description": "The Void Lantern of Unending Descent, a lantern forged from solidified void and whispering forgotten realities, casts an eerie purple glow that strips away illusions, revealing the true nature of all it illuminates. Its light is said to attract the attention of entities beyond comprehension, drawing them into the realm of the uncanny. With each flicker, the lantern grants resistance to psychic damage and a touch of madness, granting -2 to sanity checks within 30 feet.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔦",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Necrotic Light",
      "Sanity Drain"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "void-borne delivery drone",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Necrotic Light",
        "rules": "The lantern emits a beam that deals 2d6 necrotic damage on hit. This effect is triggered when the lantern is used as an action to point it at a target within 30 feet, and has no cooldown."
      },
      {
        "title": "Sanity Drain",
        "rules": "For every hour spent in its light, creatures within 30 feet must succeed on a DC 15 Wisdom saving throw or take 2d4 points of sanity loss. This effect ends when the lantern is extinguished or taken out of range."
      }
    ],
    "levelRequirementReason": "This item's power requires a high level to balance its effects.",
    "vendorReason": "The Liminal Trader specializes in exotic and mythic items, making the Void Lantern an appropriate addition to their inventory.",
    "shippingDetail": "Delivery is handled by a fleet of void-borne drones; expect a week-long transit from the outer planes.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (recharges after 8 hours)",
      "endsWhen": "Extinguished or taken out of range",
      "charges": "Unlimited, recharges after 8 hours"
    },
    "priceReason": "This price reflects the item's mythic rarity and powerful effects, balanced against its limited duration.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-23T22:57:06.439157+00:00",
    "aiReviewedAt": "2026-07-23T22:57:06.439157+00:00",
    "aiReviewVersion": 1
  },
  "potion_shadow_essence": {
    "id": "potion_shadow_essence",
    "name": "Potion of Shadow Essence",
    "description": "The Potion of Shadow Essence is a murky, viscous liquid that tastes faintly of regret and despair. Upon consumption, it grants you a fleeting moment of invisibility, allowing you to slip through shadows undetected. This elixir not only cloaks your form but also enhances your stealth, making you nearly impossible to spot by those who do not know where to look. The potion's effects are as evanescent as the darkness it conjures, offering a brief escape from prying eyes and deadly traps.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌑",
    "stock": 33,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "grants_invisibility",
      "enhances_stealth"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "Consume the potion to become invisible for up to 10 seconds. You are undetectable by sight and most sensory means, but light sources or other forms of illumination can reveal your presence. This effect ends when it expires or if you take any hostile action."
      },
      {
        "title": "Enhanced Stealth",
        "rules": "The potion boosts your stealth checks by +2. This enhancement lasts for 10 minutes after consuming the potion and applies to all stealth-related activities during that time."
      }
    ],
    "levelRequirementReason": "Consuming this potion requires a basic understanding of its effects, which is accessible to adventurers at level 1.",
    "vendorReason": "The Chaos Dealer deals in elixirs and poisons that bend the very fabric of reality, making the Potion of Shadow Essence an apt addition to their wares.",
    "shippingDetail": "The Winged Courier delivers this potion swiftly, ensuring its potency remains intact.",
    "usage": {
      "activation": "飲用",
      "duration": "10 seconds or until you take a hostile action",
      "endsWhen": "expires or if you take a hostile action",
      "charges": "unlimited"
    },
    "priceReason": "The potion's rarity and unique effects, including its invisibility and stealth enhancement, justify its high price of 1000 XP.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:57:10.529158+00:00",
    "aiReviewedAt": "2026-07-23T22:57:10.529158+00:00",
    "aiReviewVersion": 1
  },
  "artifact_fatebinder": {
    "id": "artifact_fatebinder",
    "name": "Fatebinder's Shard of Predestination",
    "description": "Fatebinder's Shard of Predestination is a shimmering fragment torn from the very fabric of fate itself, its chaotic energy pulsing like an untamed spirit. This relic allows you to briefly alter a single action in combat, but be wary—tampering with destiny often comes at a steep price or a really bad headache. The shard's power can either grant you a decisive advantage or unleash unforeseen consequences that ripple through the very threads of fate.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "ALTER_ACTION",
      "FATE_EVENT"
    ],
    "vendor": "Fate Forge",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": ".Alter Action",
        "rules": "As a bonus action, the wielder may reroll one attack roll or saving throw. The new result must be used; however, this power can trigger a random fate event with a 20% chance."
      },
      {
        "title": "Random Fate Event",
        "rules": "There is a 1 in 5 chance that altering your fate will trigger an unforeseen consequence or boon. The exact nature of the event is determined by the DM and can either be positive or negative, with the effect lasting until the end of the encounter."
      }
    ],
    "levelRequirementReason": "Only those who have mastered their own fate to a certain extent should wield such power.",
    "vendorReason": "The artisans at Fate Forge are the only ones capable of creating and dealing with items so intricately tied to destiny.",
    "shippingDetail": "Ships via the Dimensional Portal, with a 1-week delay due to the nature of inter-dimensional travel.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous; the new result is used immediately after the roll or save.",
      "endsWhen": "The effect ends when a second use is made during the same encounter, or if the wielder's fate event is triggered.",
      "charges": "Unlimited uses between long rests"
    },
    "priceReason": "While not game-breaking, the Shard of Predestination offers significant narrative and mechanical impact for a small investment.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T22:57:31.232135+00:00",
    "aiReviewedAt": "2026-07-23T22:57:31.232135+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronal_pocketwatch": {
    "id": "almost_edge_item_chronal_pocketwatch",
    "name": "Chronal Pocketwatch of Lost Time",
    "description": "The Chronal Pocketwatch of Lost Time is a tarnished timepiece that seems perpetually stuck in a loop. Its dials shift between glimpses of past events and future possibilities, hinting at a peculiar connection to both time's flow and its mysteries. Crafted from ancient obsidian and metal alloys, it whispers secrets to those who dare to look too closely into its depths. The Liminal Trader offers it as a rare find, often arriving via the Quantum Carrier with stories of its origins lost in the folds of spacetime.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Insight",
      "Chronal Echo"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "quantum_carrier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Temporal Insight",
        "rules": "As an action, you gain advantage on one ability check. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Chronal Echo",
        "rules": "You can use a bonus action to cause a small ripple in time, allowing you to perceive events within 30 feet as if they were moments before. This effect has no save DC and does not consume charges or have limits; it is active only while wearing the Chronal Pocketwatch."
      }
    ],
    "levelRequirementReason": "This pocketwatch requires a level 8 character to wield effectively, as its temporal mechanics are complex and taxing on one's understanding of time.",
    "vendorReason": "The Liminal Trader is known for their eclectic array of items that bridge the gap between worlds, making it fitting they offer this pocketwatch with its peculiar and powerful effects.",
    "shippingDetail": "Ships directly from the Quantum Carrier, often arriving in a burst of light, ensuring the Chronal Pocketwatch is delivered swiftly and intact.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Until end of next short or long rest (Temporal Insight), Instantaneous (Chronal Echo)",
      "endsWhen": "Ends when you complete a short or long rest, or when Chronal Echo ends",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rarity and the complexity of crafting such a device that manipulates time.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:57:23.642236+00:00",
    "aiReviewedAt": "2026-07-23T22:57:23.642236+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_harmony_resonance": {
    "id": "kivotos_item_harmony_resonance",
    "name": "The Cacophony Calmer",
    "description": "The Cacophony Calmer is a finely crafted tuning fork, its polished brass gleaming with an inner resonance of pure sonic energy. This artifact has been tuned by the master artisans of Harmonia, whose craft ensures that each note it strikes calms the most turbulent of hearts and minds. When struck, it emits a soothing resonance capable of silencing disruptive magic for 1 round per charge or calming a creature's aggressive actions within 30 feet for 1 minute per use.",
    "category": "consumables",
    "price": 1000,
    "icon": "🎶",
    "stock": 15,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "silence_magic_25%",
      "soothe_aggression"
    ],
    "vendor": "club_supply",
    "shippedBy": "express_mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Silence Magic",
        "rules": "When activated as an action, the Cacophony Calmer silences any disruptive magic within its range for 1 round per charge. Targets must succeed on a DC 13 Wisdom saving throw or be silenced until the start of their next turn."
      },
      {
        "title": "Soothe Aggression",
        "rules": "When used as an action, the Cacophony Calmer can soothe the aggressive actions of one creature within 30 feet. The target must make a DC 15 Wisdom saving throw or be calmed and cannot take hostile actions for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to wield effectively, given the precision needed in its use.",
    "vendorReason": "Club Supply specializes in magical and alchemical items used by performers and entertainers, making it a natural fit for this artifact.",
    "shippingDetail": "Express Mail ensures swift delivery, perfect for the time-sensitive nature of the item's effects.",
    "usage": {
      "activation": "Activate as an action or bonus action.",
      "duration": "Silence Magic: 1 round per charge; Soothe Aggression: 1 minute per use.",
      "endsWhen": "The effect ends when its duration expires, the user runs out of charges (limited to 3), or it is destroyed in combat.",
      "charges": "Limited to 3 uses before requiring recharging."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and the unique crafting involved by Harmonia's master artisans.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T22:57:39.955987+00:00",
    "aiReviewedAt": "2026-07-23T22:57:39.955987+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_divine_revelation": {
    "id": "kivotos_item_divine_revelation",
    "name": "Oracle's Shard",
    "description": "The Oracle's Shard gleams faintly as it pulses with an ancient, almost sentient warmth. This fragment of prophecy hums with cryptic wisdom, its surface etched with symbols that shimmer and fade like forgotten dreams. Stare into its depths to glimpse your future, though be warned: the visions are often veiled in riddles about Wario’s latest heist. Interpreting these glimpses requires deep contemplation or perhaps a generous dram of ale to untangle their meaning.",
    "category": "services",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "glimpse_of_future",
      "insight_into_riddles"
    ],
    "vendor": "student_store",
    "shippedBy": "holy_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glimpse of Future",
        "rules": "The Oracle's Shard grants the user a cryptic vision into their future, revealing information about Wario’s next caper. This effect is passive and lasts for one minute. The visions are unreliable but undeniably accurate in their own way."
      },
      {
        "title": "Insight into Riddles",
        "rules": "For every hour spent contemplating the shard, the user gains a +2 bonus to Insight checks related to interpreting riddles or puzzles involving Wario’s antics. This effect is cumulative with each hour of contemplation and lasts until the next long rest."
      }
    ],
    "levelRequirementReason": "The Oracle's Shard requires no level, as its power lies in its ancient wisdom and not in the user’s proficiency.",
    "vendorReason": "The student store often stocks items of questionable provenance, including this fragment of ancient prophecy.",
    "shippingDetail": "Ships via the holy messenger, known for their swift and secure deliveries.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "1 minute (Glimpse of Future) or until next long rest (Insight into Riddles).",
      "endsWhen": "The effects expire naturally upon the passage of time.",
      "charges": "Unlimited."
    },
    "priceReason": "The Oracle's Shard is priced at a moderate 1000 XP, reflecting its rarity and the value of ancient wisdom in deciphering Wario’s schemes.",
    "priceOriginal": 800000,
    "priceReviewedAt": "2026-07-23T22:57:47.327774+00:00",
    "aiReviewedAt": "2026-07-23T22:57:47.327774+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_wario_service_buff": {
    "id": "doughnut_hole_wario_service_buff",
    "name": "Wario's Unstable Inspiration",
    "description": "Wario's Unstable Inspiration is a potent concoction that grants you an explosive burst of strength and unpredictability. This elixir, brewed in the heart of Delfino Square, temporarily boosts your Strength by +2d6 but also increases the risk of chaotic behavior by 15%, leading to moments of wild confusion. The effects are unpredictable yet exhilarating, making it a must-try for any adventurer looking to test their limits and skills.",
    "category": "services",
    "price": 1000,
    "icon": "💪",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "strength_boost",
      "chaos_risk"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Packet Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "Upon activation, you gain a +2d6 bonus to Strength checks or saving throws until the end of your next turn. However, there is a 15% chance that any action you perform becomes chaotic and unpredictable, potentially harming allies within 5 feet."
      },
      {
        "title": "Chaos Risk",
        "rules": "During your active time while under the influence of this potion, you have a 20% chance to accidentally cause unintended damage or chaos. This effect can be mitigated by saving against DC 13 Wisdom saving throw at the start of each of your turns."
      }
    ],
    "levelRequirementReason": "This concoction is designed for adventurers who are just starting their journey, providing a balanced challenge and potential for growth.",
    "vendorReason": "Void Vendor specializes in unconventional and experimental items, making Wario's Unstable Inspiration a perfect fit for their inventory.",
    "shippingDetail": "The potion arrives via Dimensional Packet Express, ensuring its potency is maintained through secure and rapid delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "You take a long rest or are incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The potion's unique and potentially dangerous effects justify its price, offering a thrilling but risky experience for adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T22:57:56.060645+00:00",
    "aiReviewedAt": "2026-07-23T22:57:56.060645+00:00",
    "aiReviewVersion": 1
  }
};
