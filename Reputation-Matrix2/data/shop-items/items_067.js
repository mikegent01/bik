// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_067 = {
  "midlands_item_whispering_stone": {
    "id": "midlands_item_whispering_stone",
    "name": "Stone of Shifting Secrets",
    "description": "The Stone of Shifting Secrets, a warm, grey stone that hums with an ancient and forgotten song, reveals cryptic clues about hidden dangers and secret passages when touched. It whispers truths of enemy weaknesses, but at the cost of unsettling visions that may haunt your dreams for days to come. Its power comes from the very earth itself, where it was forged in the heart of a long-lost forge city.",
    "category": "curiosities",
    "price": 940,
    "icon": "🔮",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Reveal Hidden Passages",
      "Enemy Weakness Insight"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Passages",
        "rules": "When touched, this stone has a 15% chance to reveal the location of hidden passages within 30 feet. This effect is instantaneous and can be used once per short or long rest."
      },
      {
        "title": "Enemy Weakness Insight",
        "rules": "The stone grants you advantage on Wisdom (Perception) checks made to detect weaknesses in enemies, but only for the next hour after touching it. You must make a DC 13 Constitution saving throw at the end of this time or become exhausted until dawn."
      }
    ],
    "levelRequirementReason": "The stone's power is accessible early on to adventurers who need to quickly assess their environment and opponents.",
    "vendorReason": "The blacksmiths of Fractured Forge are known for their expertise in crafting items from ancient materials, making the Stone of Shifting Secrets a natural addition to their inventory.",
    "shippingDetail": "Delivered swiftly by the messenger hawk, ensuring that the stone reaches its destination safely and on time.",
    "usage": {
      "activation": "Interact action",
      "duration": "Instantaneous for revealing hidden passages; one hour for gaining advantage on Perception checks detecting weaknesses.",
      "endsWhen": "Upon exhaustion from using the weakness insight effect or at dawn if not exhausted.",
      "charges": "Unlimited, but limited to once per short or long rest."
    },
    "priceReason": "The stone's unique abilities and rarity justify its price in experience points.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T23:49:11.286991+00:00",
    "aiReviewedAt": "2026-07-23T23:49:11.286991+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_warrio_s_lucky_charm": {
    "id": "midlands_item_warrio_s_lucky_charm",
    "name": "Wario's Golden Grub",
    "description": "Wario's Golden Grub is a gleaming, oversized grub crafted from pure gold. Legend has it that Wario himself bestowed this charm upon a brave adventurer who had faced his grubs in combat. It’s said to be imbued with the essence of its golden form, making every step you take more sure-footed and your luck unerring. The grub is still gleaming from the last meal it was part of, but its true magic lies in the way it protects you from misfortune—albeit in a decidedly Wario-esque manner.",
    "category": "equipment",
    "price": 13000,
    "icon": "🪙",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Luck Boost",
      "Step Sure"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "Swiftwing Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Luck Boost",
        "rules": "When you roll initiative, there is a +2 bonus to your initiative roll. This effect lasts for the duration of one short rest."
      },
      {
        "title": "Step Sure",
        "rules": "You have advantage on Dexterity (Acrobatics) checks and saving throws made to avoid falling or tripping. You can use this ability a number of times equal to your Wisdom modifier per long rest."
      }
    ],
    "levelRequirementReason": "This charm is designed for beginners who seek the blessings of Wario, ensuring they have a fighting chance from their very first adventure.",
    "vendorReason": "Midland Merchant is known for sourcing unique and powerful items that can turn the tide in even the most dire of battles, making this charm a natural addition to their inventory.",
    "shippingDetail": "The grub is carefully packed by Swiftwing Express and delivered within a week, ensuring its golden form remains unscathed during transit.",
    "usage": {
      "activation": "Passive",
      "duration": "Instantaneous (Luck Boost), lasts until the end of your next short rest (Step Sure)",
      "endsWhen": "The effect ends when you finish a long rest or are incapacitated.",
      "charges": "Unlimited (Step Sure)"
    },
    "priceReason": "The charm is priced at 1000 XP, reflecting its legendary origin and the unique benefits it provides to adventurers.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T23:48:43.187341+00:00",
    "aiReviewedAt": "2026-07-23T23:48:43.187341+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_weapon": {
    "id": "internet_meme_weapon",
    "name": "Distorted Denial of Service Blade",
    "description": "The Distorted Denial of Service Blade is forged from the very essence of viral data, its surface shimmering with a chaotic array of memes. When wielded in combat, it unleashes a barrage of memes that disrupt enemy systems, causing temporary confusion and a strong desire to watch endless cat videos. This blade was crafted by Wario himself, who tested its power against his enemies and found it invaluable in distracting foes and sowing chaos.",
    "category": "equipment",
    "price": 13000,
    "icon": "💥",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "memes of distraction",
      "temporary confusion"
    ],
    "vendor": "cyber_market",
    "shippedBy": "fiber_optic_cable",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Memes of Distraction",
        "rules": "When the blade strikes an enemy, it creates a temporary distraction that causes the target to lose its next action. This effect has a 50% chance to occur and lasts for 1 round."
      },
      {
        "title": "Temporary Confusion",
        "rules": "The blade's chaotic memes have a 30% chance to cause the target to become confused, reducing its accuracy by half for 1 minute. A successful Wisdom saving throw ends this effect immediately."
      }
    ],
    "levelRequirementReason": "This weapon requires significant skill and understanding of viral data, making it suitable only for those who have reached a high level of expertise.",
    "vendorReason": "The cyber market specializes in unique and powerful weapons that combine technology with magical prowess.",
    "shippingDetail": "Ships via an encrypted fiber optic cable, ensuring the blade arrives safely and undisturbed by prying eyes.",
    "usage": {
      "activation": "melee weapon attack",
      "duration": "instantaneous effect",
      "endsWhen": "on hit; ends after 1 round if the target loses its next action due to memes of distraction",
      "charges": "unlimited, recharged on a long rest"
    },
    "priceReason": "The blade's rarity and unique properties justify its moderate price, making it accessible but not common.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:48:41.705953+00:00",
    "aiReviewedAt": "2026-07-23T23:48:41.705953+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_void_shard_of_tenebrous": {
    "id": "almost_edge_void_shard_of_tenebrous",
    "name": "Void Shard of Tenebrous",
    "description": "The Void Shard of Tenebrous is a jagged, black crystal pulled from the very edges of reality, where time and space blur. It whispers secrets that can unravel your mind if you listen too long, granting fleeting insights into hidden truths but also driving one mad with its enigmatic allure. Its touch sharpens perception, revealing what lies unseen, yet it must be held cautiously lest it claim a piece of your sanity.",
    "category": "equipment",
    "price": 14000,
    "icon": "🌌",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Increased Perception",
      "Hidden Truths"
    ],
    "vendor": "void_merchant",
    "shippedBy": "temporal_anomaly",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Increased Perception",
        "rules": "When you hold the Void Shard of Tenebrous, you gain advantage on Perception checks for one hour. However, staring into it for more than five minutes reduces your Wisdom score by 1 until the end of your next short or long rest."
      },
      {
        "title": "Hidden Truths",
        "rules": "You have a 25% chance to reveal hidden secrets when you make an Intelligence (Investigation) check. This effect is limited to one use per day and lasts for only one hour after activation."
      }
    ],
    "levelRequirementReason": "The shard's power requires a deep understanding of the mysteries it contains, suitable only for those who have mastered their perception.",
    "vendorReason": "The Void Merchant deals in the rarest and most dangerous artifacts found at the very edges of reality.",
    "shippingDetail": "The shard is delivered through a temporal anomaly, arriving exactly when you need it but not before.",
    "usage": {
      "activation": "As an action",
      "duration": "One hour or until the end of your next short or long rest",
      "endsWhen": "You lose concentration by taking damage or falling unconscious; this effect ends immediately upon using it on a failed save.",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "The shard's power is balanced against its unpredictable nature and the risk of losing your sanity.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:49:17.019002+00:00",
    "aiReviewedAt": "2026-07-23T23:49:17.019002+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_cartographer_scroll": {
    "id": "almost_edge_cartographer_scroll",
    "name": "Cartographer's Scroll of Lost Paths",
    "description": "The Cartographer's Scroll of Lost Paths is a meticulously crafted parchment, its ink a deep emerald hue that glows faintly in dim light. Originating from the liminal spaces of Almost at the Edge, it offers navigators unparalleled insight into hidden pathways and forgotten routes. With this scroll, adventurers can bypass dangerous areas and uncover secret locations that even seasoned explorers might miss. Wario himself would offer a mint for such a map!",
    "category": "faction",
    "price": 940,
    "icon": "🗺️",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "reveal_hidden_paths",
      "chance_to_unveil_secrets"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "spectral_messenger",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths",
        "rules": "As an action, the user can unroll the scroll to reveal hidden paths and obstacles within a 60-foot radius. This effect lasts for 1 minute or until the area is explored."
      },
      {
        "title": "Chance to Unveil Secrets",
        "rules": "Once per short rest, the user can attempt to uncover secret locations by reading part of the scroll. The DC for this check is 15. On a success, a hidden location within range is revealed."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 4 due to its intricate magical properties and detailed lore.",
    "vendorReason": "The Liminal Trader has exclusive access to such rare artifacts from the liminal spaces.",
    "shippingDetail": "Ships via spectral courier, delivering within one day of order placement.",
    "usage": {
      "activation": "Action or bonus action",
      "duration": "1 minute or until explored",
      "endsWhen": "Exploration ends or area is fully revealed",
      "charges": "Unlimited; can be used once per short rest"
    },
    "priceReason": "The scroll's value lies in its detailed and magical properties, making it a cornerstone for any adventurer.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:49:41.565463+00:00",
    "aiReviewedAt": "2026-07-23T23:49:41.565463+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_grizzly_charm": {
    "id": "animatopia_grizzly_charm",
    "name": "Grizzly's Grumbling Good Luck Stone",
    "description": "This hefty stone, carved from a genuine grizzly bear's claw, hums with restless energy when worn. Crafted in the heart of the wild by an ancient shaman, it whispers promises of fortune to those who wear it. However, some believe it comes at a cost, as the stone seems to attract the very creatures it seeks to protect from. Rumors persist that the stone grants its wearer incredible luck... or merely draws the attention of nearby predators.",
    "category": "curiosities",
    "price": 120000,
    "icon": "🐻",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "increase_luck",
      "chance_to_attract_enemies"
    ],
    "vendor": "forest_market",
    "shippedBy": "winged_squirrel",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Increase Luck",
        "rules": "The wearer gains advantage on one saving throw each long rest. This effect cannot be used more than once per short or long rest."
      },
      {
        "title": "Chance to Attract Enemies",
        "rules": "There is a 10% chance (roll a d10) that the wearer attracts nearby enemies when they enter combat, as if under the effect of the 'Draw Attack' feature. This can be resisted with a Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "The stone's ancient magic requires at least a 5th-level character to channel its power effectively.",
    "vendorReason": "The forest market is known for rare and mystical items, including those imbued with the spirits of the wild.",
    "shippingDetail": "Ships via a fleet of swift winged squirrels, arriving within one hour of order placement.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous",
      "endsWhen": "The wearer stops wearing the stone or it is removed by another creature.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's mythic rarity and the ancient craft that imbues it.",
    "priceOriginal": 230000,
    "priceReviewedAt": "2026-07-23T23:49:41.701847+00:00",
    "aiReviewedAt": "2026-07-23T23:49:41.701847+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_tribal_war_drum": {
    "id": "animatopia_tribal_war_drum",
    "name": "Rumbleheart’s Rhythm of Rage",
    "description": "Rumbleheart’s Rhythm of Rage is a massive, war-beaten drum crafted from the hide of a fearsome grizzly bear and imbued with primal energy. Its deep resonant beats can be felt in the very earth beneath your feet, causing enemies to falter and stagger. Warriors say that once you begin its rhythm, you cannot stop until it’s played out, but those who’ve heard it believe it brings forth the fury of the wild. Wario indeed approves, for it’s a sight to behold during any tribal festival.",
    "category": "equipment",
    "price": 4000,
    "icon": "🥁",
    "stock": 15,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "boosts_attack_damage",
      "chance_to_faze_enemies"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "giant beetle",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Boosted Attack Damage",
        "rules": "When you play the drum as an action, until the end of your next turn, all melee attacks made by you deal an additional +1d6 damage."
      },
      {
        "title": "Chance to Faze Enemies",
        "rules": "Once per short rest while playing the drum, you can make a bonus action to play a challenging rhythm. Each enemy within 5 feet of you must succeed on a DC 13 Dexterity saving throw or be knocked prone for the start of your next turn."
      }
    ],
    "levelRequirementReason": "The drum requires a fair amount of strength and control to play effectively, making it suitable only for those of at least 6th level.",
    "vendorReason": "The tribal trader has numerous connections with the local tribes, ensuring that such powerful and revered items are available in his inventory.",
    "shippingDetail": "Delivered by a giant beetle, which can only transport one drum at a time, so patience is required for delivery.",
    "usage": {
      "activation": "Action to begin playing the drum. A bonus action to play the challenging rhythm.",
      "duration": "Until the end of your next turn after playing it as an action or until you stop playing it (passive while stopped).",
      "endsWhen": "You stop playing, are incapacitated, or use all charges.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "The drum’s rarity and the materials used make it a valuable item, but its effects are balanced to ensure they do not overshadow other player options.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T23:50:38.985833+00:00",
    "aiReviewedAt": "2026-07-23T23:50:38.985833+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_shadow_lantern": {
    "id": "animatopia_shadow_lantern",
    "name": "Whisperwind’s Guide to Darkness",
    "description": "Whisperwind’s Guide to Darkness is a lantern crafted from obsidian and shadowweave, its flickering light casting eerie patterns that can disorient foes and reveal hidden passages in darkened halls. Its glow seems to feed on the surrounding darkness, making it invaluable for scouts and adventurers venturing into shadowy depths. The lantern's unsettling light might cause those who stare too long to see things they wish they hadn’t—visions of creeping horrors and forgotten terrors.",
    "category": "premium",
    "price": 940,
    "icon": "🔦",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "disorients_foes",
      "reveals_hidden_paths"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_spider",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disorient Foes",
        "rules": "When a creature within 10 feet of Whisperwind’s Guide to Darkness takes damage from the lantern's light, it must succeed on a DC 14 Wisdom saving throw or be blinded for 1 minute. This effect can only occur once per target per long rest."
      },
      {
        "title": "Reveal Hidden Paths",
        "rules": "The lantern grants darkvision out to 60 feet within its area of effect and reveals hidden or secret doors within 30 feet, providing advantage on Wisdom (Perception) checks made to find such features. This benefit lasts for the duration of a long rest."
      }
    ],
    "levelRequirementReason": "Lowered from level 3 to make it more accessible as an early-game tool.",
    "vendorReason": "The Beast Bazaar often stocks unique, magical items that adventurers need for their journeys.",
    "shippingDetail": "Delivered by a giant spider courier who ensures the lantern arrives in one piece, even if it means crossing dangerous territory.",
    "usage": {
      "activation": "Passive effect when held and used within an area of darkness.",
      "duration": "Until the end of your next turn or until the lantern is destroyed.",
      "endsWhen": "When the lantern's light source is extinguished, either by a creature or environmental factors.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP as it provides significant utility for early-game adventurers without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:49:48.654679+00:00",
    "aiReviewedAt": "2026-07-23T23:49:48.654679+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_voidstone_amulet": {
    "id": "midlands_item_voidstone_amulet",
    "name": "Amulet of Whispered Shadows",
    "description": "The Amulet of Whispered Shadows is a dark, rune-carved pendant that hums ominously when worn. Its shadowy essence allows you to manipulate darkness and concealment in ways both subtle and dangerous. Should you falter, the amulet might entrap you within its own weave, blurring reality until only your reflection remains. Legends say it was crafted by a forgotten sorcerer who sought to harness the very fabric of shadows, but few know if such power comes with a price beyond madness.",
    "category": "equipment",
    "price": 63000,
    "icon": "🌑",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Shadowstep",
      "Invisibility"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Shadowstep",
        "rules": "As an action, you can take a step that causes the space you just left to become difficult terrain for one round. This effect ends if you leave the space or if darkness is dispelled from it."
      },
      {
        "title": "Invisibility",
        "rules": "Once per short rest, as a bonus action, you can become invisible until the start of your next turn or until you attack or cast a spell. You must use this ability before attacking or casting in combat. A successful DC 15 Constitution saving throw ends this effect early."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and magical prowess can wield the amulet's dangerous power without risk.",
    "vendorReason": "The fractured artisans of Fractured Forge are known for their mastery over dark magic, making them the only source for such a powerful artifact.",
    "shippingDetail": "The amulet is shipped via a rift that bends reality, ensuring its arrival but also subjecting it to potential temporal distortions.",
    "usage": {
      "activation": "Action or Bonus Action depending on the effect (Shadowstep: action; Invisibility: bonus action)",
      "duration": "Instantaneous for Shadowstep; until the start of your next turn or end of darkness for Invisibility",
      "endsWhen": "On the start of your next turn, if darkness is dispelled, or when you attack or cast a spell during Invisibility.",
      "charges": "Unlimited"
    },
    "priceReason": "While not as powerful as other legendary items, its unique and potentially dangerous effects justify this price.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T23:50:38.834469+00:00",
    "aiReviewedAt": "2026-07-23T23:50:38.834469+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_ring_of_silence": {
    "id": "middle_earth_ring_of_silence",
    "name": "The Whispering Echo",
    "description": "The Whispering Echo is a corrupted fragment of an ancient Ring, its silver surface etched with dark runes. This amulet not only silences nearby foes but also disrupts their spellcasting efforts, creating a zone of eerie silence that echoes with the whispers of forgotten spirits. It mutes sounds within a 10-foot radius and reduces enemy attack ranges by half for one minute, making it an invaluable tool in stealthy encounters or against powerful magic users.",
    "category": "forbidden",
    "price": 4000,
    "icon": "🤫",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "silence_nearby_enemies",
      "disrupt_spellcasting"
    ],
    "vendor": "elven_market",
    "shippedBy": "hawk",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Silence Nearby Enemies",
        "rules": "This amulet creates a zone of silence within a 10-foot radius. All enemies in the area have disadvantage on attack rolls and saving throws for one minute, until the effect ends or an enemy moves out of the zone."
      },
      {
        "title": "Disrupt Spellcasting",
        "rules": "Any enemy within the 10-foot radius must make a DC 15 Wisdom saving throw. On a failed save, they are incapacitated and cannot cast spells for one minute. The effect ends if an enemy moves out of the zone or at the start of their next turn."
      }
    ],
    "levelRequirementReason": "It requires a high level to wield this powerful forbidden item safely.",
    "vendorReason": "The elves of Mirkwood possess ancient knowledge and are wary but intrigued by items that can disrupt magic.",
    "shippingDetail": "Delivered swiftly via the swift hawks, ensuring it arrives in time for a critical encounter.",
    "usage": {
      "activation": "Object interaction to activate; lasts one minute per use.",
      "duration": "One minute per activation.",
      "endsWhen": "The effect ends when an enemy moves out of the zone or at the start of their next turn, whichever comes first. Use is limited to once every long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced by its powerful effects and the risk involved in using a forbidden item.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:50:16.929482+00:00",
    "aiReviewedAt": "2026-07-23T23:50:16.929482+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_shire_berry_potion": {
    "id": "middle_earth_shire_berry_potion",
    "name": "Pipkin's Pick-Me-Up!",
    "description": "Crafted by the masterful pipkins of the Shire, Pipkin's Pick-Me-Up! is a potent berry potion that bursts with the essence of the rolling hills and crisp air of Middle-earth. This nectar of the elves invigorates your spirit, granting you a burst of speed as you feel the sweet tang of the berries in your mouth. It’s guaranteed to lift your spirits – or at least make you feel like a much more cheerful hobbit on a sunny afternoon.",
    "category": "consumables",
    "price": 230,
    "icon": "🍇",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temporary_health_restoration",
      "increased_movement_speed"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Health Restoration",
        "rules": "Upon activation, the drinker regains 1d4 + your Constitution modifier hit points. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Increased Movement Speed",
        "rules": "For the duration of Pipkin's Pick-Me-Up!, you gain a +2 bonus to your walking speed until the start of your next turn after drinking it. This effect does not stack with other bonuses to movement speed."
      }
    ],
    "levelRequirementReason": "This potion is crafted for travelers and adventurers alike, requiring no more than basic strength and dexterity.",
    "vendorReason": "The Shire Shop has long been known for its quality elixirs, sourced directly from the heart of the Shire where the pipkins brew their magic.",
    "shippingDetail": "Delivered by the swift ponies of the Shire, arriving within a few hours of purchase.",
    "usage": {
      "activation": "Drink as an action.",
      "duration": "1 minute.",
      "endsWhen": "The duration ends at the start of your next turn after drinking it or if you finish a long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Pipkin's Pick-Me-Up! is crafted with rare berries and herbs, making it an expensive yet essential potion for any adventurer.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:50:32.969297+00:00",
    "aiReviewedAt": "2026-07-23T23:50:32.969297+00:00",
    "aiReviewVersion": 1
  },
  "internet_forbidden_wormhole": {
    "id": "internet_forbidden_wormhole",
    "name": "Quantum Glitch Generator",
    "description": "The Quantum Glitch Generator is a bizarre device, salvaged from an ancient server farm. Its core glows with a flickering blue light as it warps reality around you. This contraption allows for short-range teleportation within 30 feet or the summoning of digital anomalies that can corrupt data streams. Use it at your own risk; the data rifts are unpredictable and may leave you stranded in the void if not handled carefully.",
    "category": "forbidden",
    "price": 120000,
    "icon": "👾",
    "stock": 12,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Teleport",
      "Risk of Data Corruption"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleport",
        "rules": "As a bonus action, the user teleports to a random location within 30 feet. The destination is determined by the nearest stable data stream or available network node."
      },
      {
        "title": "Risk of Data Corruption",
        "rules": "There's a 5% chance per use that using this device will cause permanent data corruption, reducing your intelligence by -1 until healed. This risk increases with each consecutive use."
      }
    ],
    "levelRequirementReason": "Even the most novice user can learn to activate and handle the device, though its unpredictable nature requires caution.",
    "vendorReason": "The cyber_market vendor specializes in salvaged tech from ancient data centers; this item fits their inventory of forbidden technology.",
    "shippingDetail": "Ships via the Shadow Courier, known for its secretive and reliable deliveries. Delivery time is unpredictable but usually within a week.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous teleportation or summoning of anomalies",
      "endsWhen": "Teleport ends upon arrival; data corruption risk ends when the user successfully heals their intelligence score",
      "charges": "Unlimited uses, but each use increases the chance of data corruption"
    },
    "priceReason": "The device's mythic rarity and unpredictable nature justify its high price.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T23:50:35.917847+00:00",
    "aiReviewedAt": "2026-07-23T23:50:35.917847+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_fragment": {
    "id": "internet_meme_fragment",
    "name": "Distorted Reality Lens",
    "description": "The Distorted Reality Lens is a fractured shard of an internet meme that once circulated in the early days of the web. Its cracked surface shifts and warps with every glance, offering fleeting glimpses into alternate realities where forgotten memes reign supreme. While gazing through it, you might see cryptic visions that provide minor clues to your current situation, but be wary; strange digital entities may also take notice of your altered perception.",
    "category": "curiosities",
    "price": 230,
    "icon": "😵‍💫",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Minor Reality Glimpse",
      "Digital Entity Attraction"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Packet Post Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Reality Glimpse",
        "rules": "When a creature uses the lens, roll a d10. On a result of 7 or higher, they gain minor clues about their immediate surroundings for the next round."
      },
      {
        "title": "Digital Entity Attraction",
        "rules": "While wearing the lens, you have disadvantage on Dexterity saving throws to avoid digital entity attacks. Additionally, there is a 5% chance per minute that a digital entity attempts to interact with you (passive Perception check DC 12)."
      }
    ],
    "levelRequirementReason": "This lens offers unique but manageable reality-altering effects suitable for lower-level adventurers.",
    "vendorReason": "The Data Dealer frequently handles relics and curiosities from the digital world, including this fragment of a long-forgotten meme.",
    "shippingDetail": "Ships via Packet Post Express within 24 hours with a delivery confirmation.",
    "usage": {
      "activation": "Object Interaction to use for one round",
      "duration": "One round, or until removed from the wearer's head",
      "endsWhen": "The wearer removes it or sustains damage",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the item’s unique and potentially dangerous nature, balancing its utility with its risks.",
    "priceOriginal": 280,
    "priceReviewedAt": "2026-07-23T23:50:53.652398+00:00",
    "aiReviewedAt": "2026-07-23T23:50:53.652398+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_ember_flare": {
    "id": "teyvat_item_ember_flare",
    "name": "Ember Flare Lantern",
    "description": "The Ember Flare Lantern, a rare artifact crafted in the heart of Mondstadt from Pyro-infused iron, casts a warm, flickering light that dances through the shadows, illuminating dark paths and chasing away any lingering grumblings from mischievous elementals. Its core, forged with ancient techniques, not only enhances fire resistance by 5% but also has a 10% chance to ignite flammable objects when held too close. This lantern is more than just a light source; it’s a beacon of safety and a reminder that even the smallest flame can be a powerful protector.",
    "category": "equipment",
    "price": 4000,
    "icon": "🔥",
    "stock": 67,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Enhances Fire Resistance",
      "Ignites Flammable Objects"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_sprite",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhances Fire Resistance",
        "rules": "The user gains a +5% fire resistance bonus to their AC while holding the Ember Flare Lantern. This effect lasts for as long as the lantern is held and does not require an action."
      },
      {
        "title": "Ignites Flammable Objects",
        "rules": "There is a 10% chance that flammable objects within 5 feet of the user ignite when they hold the Ember Flare Lantern too close. This effect can be triggered by any action, but if an object ignites, it immediately deals 2d4 fire damage to all creatures in contact with the object and extinguishes itself. The lantern cannot be used again until after a short rest."
      }
    ],
    "levelRequirementReason": "The Ember Flare Lantern is crafted for adventurers of all levels, ensuring even the most novice heroes can benefit from its protective glow.",
    "vendorReason": "Mondstadt's market is known for its diverse array of magical artifacts and tools, making it a fitting place to sell this lantern.",
    "shippingDetail": "Shipped by the Winged Sprite Courier Service, ensuring safe delivery through Mondstadt’s skyways.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Until the user stops holding it or until a short rest is taken",
      "endsWhen": "The lantern ignites an object and extinguishes itself; or if the user releases it",
      "charges": "Unlimited, but requires a short rest to reignite"
    },
    "priceReason": "Crafted from rare Pyro-infused iron and imbued with ancient magic, the Ember Flare Lantern is priced at 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:51:26.870984+00:00",
    "aiReviewedAt": "2026-07-23T23:51:26.870984+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_stone_of_harmony": {
    "id": "teyvat_item_stone_of_harmony",
    "name": "Stone of Harmony - Traveler's Edition",
    "description": "The Stone of Harmony - Traveler's Edition radiates a soothing, almost palpable warmth from its slightly misshapen form, a testament to Wario’s ill-fated attempts at 'improvement'. Crafted with ancient jade and imbued with elemental energies, this stone has proven surprisingly effective in calming restless spirits and neutralizing minor elemental imbalances. Its faint banana scent only adds to the charm, though one must be cautious of its unpredictable effects on nearby bananas.",
    "category": "equipment",
    "price": 14000,
    "icon": "☯️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Spirit Calming",
      "Elemental Nullification"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "giant_crab",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spirit Calming",
        "rules": "When activated as a bonus action, this stone restores 25 hit points and reduces the target's anger level by 3. The effect ends immediately if the target is incapacitated or dies."
      },
      {
        "title": "Elemental Nullification",
        "rules": "Once per short rest, this stone can be used as an action to attempt to nullify a single elemental effect within range. There is a 15% chance of success; failure does not expend the charge."
      }
    ],
    "levelRequirementReason": "This stone's effects are accessible to all adventurers, making it a valuable tool for beginners and seasoned travelers alike.",
    "vendorReason": "Liyue Harbor is known for its diverse selection of mystical artifacts, including this unique edition of the Stone of Harmony.",
    "shippingDetail": "Delivered by a giant crab courier, ensuring safe and timely arrival to your doorstep.",
    "usage": {
      "activation": "Bonus action or action for Spirit Calming; action for Elemental Nullification",
      "duration": "Instantaneous (Spirit Calming); until the start of your next turn (Elemental Nullification)",
      "endsWhen": "Target is incapacitated, dies, or the short rest ends (Spirit Calming); upon failure (Elemental Nullification)",
      "charges": "Unlimited uses; regain all charges after a long rest"
    },
    "priceReason": "The balanced price reflects the stone's versatile utility and the materials used in its crafting.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T23:51:11.196736+00:00",
    "aiReviewedAt": "2026-07-23T23:51:11.196736+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_ritual_cleansing": {
    "id": "the_edge_ritual_cleansing",
    "name": "Ritual Cleansing of the Soul",
    "description": "The Ritual Cleansing of the Soul, crafted by the skilled mystics of Edge Outpost, is a sacred and intricate process that purges not only physical corruption but also the lingering taint of darkness from your soul. The ritual involves a series of ancient incantations and potent herbs, which are said to restore balance and clarity to even the most tarnished spirit. While the process is arduous and often leaves one feeling exhausted, it offers profound relief against fear and madness.",
    "category": "services",
    "price": 950,
    "icon": "🕯️",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "purify_corruption",
      "grant_resistance_to_fear"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Purify Corruption",
        "rules": "As an action, you undergo the Ritual Cleansing of the Soul. This ritual expends all negative status effects upon you and grants temporary resistance to fear-based attacks for the next hour. The ritual lasts until completed or interrupted by significant physical harm."
      },
      {
        "title": "Grant Resistance to Fear",
        "rules": "For 1 hour, you have advantage on saving throws against being frightened. If you fail a saving throw against such an effect during this time, you are not frightened for the rest of that encounter."
      }
    ],
    "levelRequirementReason": "Mystics and those who have faced significant corruption or fear-based challenges need to be at least level 4 to safely undergo this rigorous ritual.",
    "vendorReason": "Edge Outpost is renowned for its expertise in purification rituals, making it the premier vendor for such services.",
    "shippingDetail": "The messenger hawk delivers the ritual kit with haste, ensuring the mystic arrives at your location within a day of purchase.",
    "usage": {
      "activation": "Action (performed by a skilled mystic)",
      "duration": "Instantaneous effect lasting for 1 hour",
      "endsWhen": "Interrupted by physical harm or completion",
      "charges": "Unlimited, as the ritual can be performed multiple times"
    },
    "priceReason": "The process requires rare herbs and extensive mystical knowledge, which justifies its price in XP.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T23:51:42.055301+00:00",
    "aiReviewedAt": "2026-07-23T23:51:42.055301+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_heartstone_of_despair": {
    "id": "the_edge_heartstone_of_despair",
    "name": "Heartstone of Despair",
    "description": "The Heartstone of Despair, a dark obsidian gem that glimmers with an eerie, sorrowful light, is said to amplify negative emotions and inspire a melancholic aura around those who wear it. Crafted from ancient despair itself, this relic is the perfect companion for poets or those seeking to wallow in gloom, though its effects are as dangerous as they are powerful. Wearing it can lead to a 20% increase in critical hit chance when used in combat, but also comes with a 15% reduction in healing received, ensuring that even the darkest victories come at a cost.",
    "category": "equipment",
    "price": 63000,
    "icon": "🖤",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Amplifies Negative Emotions",
      "Increases Critical Hit Chance"
    ],
    "vendor": "final_shop",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Amplifies Negative Emotions",
        "rules": "When worn in battle, this heartstone increases the user's critical hit chance by 20%. This effect is passive and does not require any action to activate. However, it can only be used once per long rest."
      },
      {
        "title": "Reduces Healing Received",
        "rules": "While wearing this heartstone, the wearer suffers a 15% reduction in healing effects received from spells or abilities. This effect is also passive and cannot be removed except by removing the heartstone itself. The reduction applies to all forms of healing."
      }
    ],
    "levelRequirementReason": "Wearing this relic requires a certain resilience to its dark magic, thus necessitating a minimum character level of 6.",
    "vendorReason": "Final Shop is known for their unique and powerful items, making the Heartstone of Despair an ideal addition to their inventory.",
    "shippingDetail": "The gem arrives safely but may leave a trail of sorrow in its wake.",
    "usage": {
      "activation": "Passive effect while worn.",
      "duration": "Permanent until removed.",
      "endsWhen": "Removed from the wearer's possession.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "The Heartstone of Despair is priced at 1000 XP due to its unique effects and the dark magic required for its creation.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-23T23:51:22.580987+00:00",
    "aiReviewedAt": "2026-07-23T23:51:22.580987+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_block_shredder": {
    "id": "connectopia_block_shredder",
    "name": "Rubble Buster 3000",
    "description": "The Rubble Buster 3000 is a massive block shredder crafted from ancient stone and enchanted with the spirit of a forgotten titan. It can be strapped to your back, instantly transforming construction debris into dust in a thunderous explosion that clears the path ahead. This relic reduces block mining time by 50%, making it invaluable for expeditions through dense ruins or quarries, and repairs adjacent blocks within seconds, saving precious time on projects.",
    "category": "equipment",
    "price": 14000,
    "icon": "💥",
    "stock": 5,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Dust Cloud",
      "Haste Mining"
    ],
    "vendor": "block_smith",
    "shippedBy": "Express Delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Dust Cloud",
        "rules": "When activated as a bonus action, the Rubble Buster 3000 creates a cloud of dust that reduces all miners within 10 feet to half speed for 1 minute. The dust dissipates after this duration."
      },
      {
        "title": "Haste Mining",
        "rules": "Activating the Rubble Buster 3000 as an action increases your mining speed by 50% until the end of your next turn, then it returns to normal."
      }
    ],
    "levelRequirementReason": "Requires level 8 due to its immense power and complexity.",
    "vendorReason": "Block Smith is renowned for crafting such powerful construction tools.",
    "shippingDetail": "Ships via Express Delivery, arriving within a week.",
    "usage": {
      "activation": "Bonus action to create Dust Cloud; Action to activate Haste Mining.",
      "duration": "Instantaneous for Dust Cloud; until the end of next turn for Haste Mining.",
      "endsWhen": "After 1 minute for Dust Cloud; ends when the action is used again or at the start of your next turn for Haste Mining.",
      "charges": "Unlimited, as long as it remains functional."
    },
    "priceReason": "The balanced price reflects its reduced power and increased utility compared to the original version.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:51:30.130304+00:00",
    "aiReviewedAt": "2026-07-23T23:51:30.130304+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_lucky_gear": {
    "id": "connectopia_lucky_gear",
    "name": "Synchronized Sprocket of Serendipity",
    "description": "The Synchronized Sprocket of Serendipity, a cogs-and-levers contraption said to have been crafted by a whimsical block spirit, is a marvel of mechanical magic. When spun with intent and focus, it can yield rare crafting materials, unlock hidden blueprints, or even teleport you to a nearby resource-rich block location. Legend has it that its creator used it to forge the very blocks from which it was made, imbuing it with fortuitous potential.",
    "category": "curiosities",
    "price": 63000,
    "icon": "✨",
    "stock": 25,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Rare Material Discovery",
      "Enhanced Luck"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Express Airmail",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Rare Material Discovery",
        "rules": "When spun as an action, there is a 25% chance to find rare crafting materials. The effect lasts until the end of your next turn."
      },
      {
        "title": "Enhanced Luck",
        "rules": "The user's luck increases by +1 for 1 hour after using the sprocket. This bonus can be stacked with other temporary luck enhancements, up to a maximum increase of +3 per day."
      }
    ],
    "levelRequirementReason": "This item is designed for players who have faced numerous challenges and are ready to harness their enhanced luck in more complex scenarios.",
    "vendorReason": "Pioneer Post, known for its reliable deliveries of exotic goods, also handles the whimsical Sprocket of Serendipity due to its connection with various block explorers and engineers.",
    "shippingDetail": "Delivered within a day, ensuring you have time to use it before your next expedition.",
    "usage": {
      "activation": "Action",
      "duration": "Until end of next turn for Rare Material Discovery; 1 hour for Enhanced Luck",
      "endsWhen": "The effect ends when the duration expires or if the item is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price to reflect its unique mechanics and rarity, ensuring it remains a valuable but not overpowered tool for adventurers.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T23:52:08.780086+00:00",
    "aiReviewedAt": "2026-07-23T23:52:08.780086+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_sticky_goo_bomb": {
    "id": "connectopia_sticky_goo_bomb",
    "name": "Sludge Surprise!",
    "description": "Sludge Surprise! is a cunning concoction designed to wreak havoc on your enemies and clog up tight spaces. This sticky goo bomb, crafted from ancient plant matter and potent chemicals, explosively releases a thick sludge upon impact that immobilizes foes for several rounds, reducing their movement speed by half. The goo's viscoelastic properties create an area of hazardous slime that can trap anyone foolish enough to step into it, turning battlefields into quagmires.",
    "category": "consumables",
    "price": 230,
    "icon": "🦠",
    "stock": 90,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Slime Trap",
      "Reduced Mobility"
    ],
    "vendor": "Craft Corner",
    "shippedBy": "Standard Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slime Trap",
        "rules": "When thrown, Sludge Surprise! creates a hazardous area of thick sludge that imposes the Slowed condition (reducing movement speed to half) on all creatures within its radius for 1 minute. This effect ends if a creature exits the area or is knocked prone."
      },
      {
        "title": "Reduced Mobility",
        "rules": "Upon impact, there's a 20% chance that Sludge Surprise! will create an area of thick sludge that persists for up to 1 minute. Creatures entering this area must succeed on a DC 13 Dexterity saving throw or fall prone and take minor damage."
      }
    ],
    "levelRequirementReason": "This item is designed for lower-level adventurers who need to disrupt battles without the power of higher-tier magic.",
    "vendorReason": "As a supplier of unique and practical tools, Craft Corner specializes in items that help adventurers overcome challenges in creative ways.",
    "shippingDetail": "Ships via Standard Post within the realm; arrives within 3 days.",
    "usage": {
      "activation": "Requires a bonus action to throw and activate when thrown at an enemy or area.",
      "duration": "Lasts for up to 1 minute per use.",
      "endsWhen": "The effect ends if a creature exits the area or is knocked prone, or after 1 minute.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This item offers significant battlefield disruption at an affordable price for adventurers who need to neutralize foes without relying on magical means.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:51:58.275082+00:00",
    "aiReviewedAt": "2026-07-23T23:51:58.275082+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_block_shover": {
    "id": "connectopia_block_shover",
    "name": "The Block Buster 3000",
    "description": "The Block Buster 3000, a colossal shovel crafted by the Block Smith himself from ancient obsidian and enchanted with the spirit of Wario's legendary strength, is a must-have for any miner. Its oversized head can clear block piles in seconds, but its sheer weight demands caution: wielders who mishandle it may find themselves flying across the map like a mischievous koopa. When you strike blocks with this mighty tool, not only do they crumble faster, but there's a chance to uncover hidden treasure or rare gems embedded within.",
    "category": "equipment",
    "price": 230,
    "icon": "⛏️",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Increased Mining Speed",
      "Bonus Block Drops"
    ],
    "vendor": "block_smith",
    "shippedBy": "rolling_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Mining Speed",
        "rules": "When you use the Block Buster 3000 to mine, your mining check has advantage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Bonus Block Drops",
        "rules": "Once per long rest, when using this tool, you have a +2 bonus on your mining check to find hidden or rare blocks. If successful, you gain an additional block as a reward."
      }
    ],
    "levelRequirementReason": "The Block Buster 3000 is designed for beginners but remains useful even at higher levels.",
    "vendorReason": "As the creator of this tool, the Block Smith personally ensures every customer receives a product that meets or exceeds their expectations.",
    "shippingDetail": "Delivered via rolling cart, ensuring your Block Buster arrives in perfect condition.",
    "usage": {
      "activation": "As a bonus action when mining blocks.",
      "duration": "Until the start of your next turn.",
      "endsWhen": "The start of your next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with rare obsidian and enchanted by Wario's spirit, this tool commands a premium price.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-23T23:51:56.099272+00:00",
    "aiReviewedAt": "2026-07-23T23:51:56.099272+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_rapid_repair_kit": {
    "id": "connectopia_rapid_repair_kit",
    "name": "Quick Fix Fuel",
    "description": "Quick Fix Fuel is a vibrant, luminescent paste that instantly bonds to metal and leather, restoring equipment durability in an instant. Crafted by the legendary Tinker's Guild of Gearhaven, this versatile goo can repair up to fifty percent of damaged equipment and even prevent further wear for one round afterward. Use it sparingly, as overuse might cause unforeseen malfunctions or spontaneous repairs that could interfere with your weapon's balance.",
    "category": "consumables",
    "price": 950,
    "icon": "🩹",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Instant Durability Boost",
      "Prevent Future Wear"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "messenger_bird",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Durability Boost",
        "rules": "When applied to damaged equipment, Quick Fix Fuel restores up to fifty percent of the item’s lost durability. The effect is immediate and requires no roll or saving throw."
      },
      {
        "title": "Prevent Future Wear",
        "rules": "For one round after application, the repaired item gains resistance to wear and tear from mundane causes. This benefit does not stack with other similar effects. If the item takes damage that would reduce its durability below zero, this effect ends immediately."
      }
    ],
    "levelRequirementReason": "This versatile repair kit is suitable for all levels of adventurers, making it a convenient tool in any adventurer's inventory.",
    "vendorReason": "The Pioneer Post prides itself on supplying gear to travelers and mercenaries, and Quick Fix Fuel is a staple in their supply chain.",
    "shippingDetail": "Shipped by the swift Messenger Birds of Gearhaven, this item arrives quickly but requires careful handling upon delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for application; one round duration for prevention effect",
      "endsWhen": "The prevention effect ends after one round or if the item takes damage that would reduce its durability below zero, whichever comes first. The repair effect is used up upon application.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted by the Tinker's Guild and designed for versatility, Quick Fix Fuel offers a significant value for its price.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-23T23:52:12.599983+00:00",
    "aiReviewedAt": "2026-07-23T23:52:12.599983+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_geode_detector": {
    "id": "connectopia_geode_detector",
    "name": "The Shiny Finder Deluxe",
    "description": "The Shiny Finder Deluxe is a sleek, metallic device that hums to life as you scan for hidden treasures beneath your feet. Crafted from polished brass and adorned with tiny gemstone accents, this nifty gadget can detect nearby geodes within a ten-meter radius, making mining expeditions both more efficient and exciting. With its help, your chances of finding rare minerals while mining increase by 20%, but be wary—its constant whirring might draw unwanted attention from the local treasure hunters.",
    "category": "curiosities",
    "price": 4000,
    "icon": "💎",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Geode Detection",
      "Mining Efficiency"
    ],
    "vendor": "craft_corner",
    "shippedBy": "delivery_drone",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Geode Detection",
        "rules": "This device provides a +20% bonus to the chance of finding rare items while mining within ten meters. It has no save DC or limitations."
      },
      {
        "title": "Mining Efficiency",
        "rules": "While active, this item grants you advantage on Mining skill checks and increases your XP gain from successful mining tasks by 10%. The effect ends if the device runs out of power after five uses."
      }
    ],
    "levelRequirementReason": "The complexity of the Shiny Finder Deluxe requires a fair understanding of mining techniques, which typically comes with higher-level experience.",
    "vendorReason": "Craft Corner specializes in tools and devices that enhance craftsmanship and mining efficiency, making it an ideal vendor for the Shiny Finder Deluxe.",
    "shippingDetail": "The device is shipped via a delivery drone which may take longer during night-only stock periods.",
    "usage": {
      "activation": "As a bonus action, activate the device to start scanning for geodes. It remains active until it runs out of power after five uses.",
      "duration": "Instantaneous activation; lasts until the device is turned off or its power is depleted.",
      "endsWhen": "The device runs out of power after five activations.",
      "charges": "5 charges, recharged at dawn."
    },
    "priceReason": "This price reflects the item's rarity and utility in enhancing both mining efficiency and the chance of finding valuable resources.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T23:52:28.067488+00:00",
    "aiReviewedAt": "2026-07-23T23:52:28.067488+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_driftwood_amulet": {
    "id": "almost_edge_item_driftwood_amulet",
    "name": "The Shifting Shores Amulet",
    "description": "The Shifting Shores Amulet is crafted from ancient driftwood that has petrified over centuries, imbued with cosmic energies. This unsettling trinket exerts a subtle gravitational pull toward edges and cliff faces, making you feel an irresistible urge to lean closer. The amulet's faintly luminescent surface hints at its celestial origins. While it offers a minor speed boost, the compulsion to approach dangerous ledges can be both exhilarating and perilous.",
    "category": "equipment",
    "price": 230,
    "icon": "🌊",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "edge_temptation",
      "speed_boost"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "swift_falcon Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Edge Temptation",
        "rules": "This effect applies a passive gravitational pull toward the nearest edge, compelling you to lean towards it. You have disadvantage on saving throws against effects that would prevent you from moving closer to an edge. The effect ends when you successfully resist three times or if you leave the area."
      },
      {
        "title": "Speed Boost",
        "rules": "You gain a +10 foot bonus to your walking speed for 1 hour, after which time you must make a DC 15 Constitution saving throw. On a failure, the effect ends and you are fatigued until dawn."
      }
    ],
    "levelRequirementReason": "The amulet's subtle effects require no special proficiency or training.",
    "vendorReason": "Edge Wanderers frequently encounter the dangerous edges where this amulet proves most effective.",
    "shippingDetail": "Delivered within three days, with a 10% insurance fee included.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Concentration up to one hour or until the effect ends due to failure on a saving throw.",
      "endsWhen": "After you successfully resist three times, when you leave the area, or upon failing a Constitution save.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The amulet's unique cosmic properties and rare materials justify its high price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:52:17.221195+00:00",
    "aiReviewedAt": "2026-07-23T23:52:17.221195+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_void_echoes": {
    "id": "almost_edge_item_void_echoes",
    "name": "Silence of the Lost Steps",
    "description": "These polished obsidian stones whisper with fragmented memories from those who've fallen, their surface etched with ghostly inscriptions of forgotten steps. Focusing on them grants brief insights into lost wisdom, but prolonged exposure risks unraveling one's sanity or simply giving you a headache. The echoes they emit are faint whispers that can be heard by the attuned mind, yet in the wrong hands, they can become a curse, amplifying confusion and distress.",
    "category": "curiosities",
    "price": 950,
    "icon": "🤫",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "brief_insight_into_lost_wisdom",
      "risk_of_confusion_and_headache"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Brief Insight into Lost Wisdom",
        "rules": "When a creature focuses on the Silence of the Lost Steps for 1 minute, it gains advantage on one Intelligence check or saving throw. The effect ends if the creature is subjected to an effect that would prevent it from thinking clearly."
      },
      {
        "title": "Risk of Confusion and Headache",
        "rules": "If a creature remains in close proximity to the Silence for more than 10 minutes, they must succeed on a DC 15 Wisdom saving throw or become confused until the start of their next turn. On a successful save, they only suffer a -2 penalty to Perception checks."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 3 to focus on the stones without succumbing to immediate confusion.",
    "vendorReason": "The Void Merchant deals in arcane curiosities and ancient relics, making these polished obsidian stones an apt addition to their collection.",
    "shippingDetail": "Ships via the Dimensional Rift, delivered through a portal that may cause disorientation upon arrival.",
    "usage": {
      "activation": "Active use requires focusing on the stones for at least 1 minute.",
      "duration": "The effect lasts for 10 minutes or until the creature is confused.",
      "endsWhen": "The effect ends if the creature is subjected to an effect that would prevent it from thinking clearly, or when the focus period expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP due to its unique effects and limited utility, offering strategic value without being overpowered.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T00:04:14.983123+00:00",
    "aiReviewedAt": "2026-07-25T00:04:14.983123+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_liminal_cartography": {
    "id": "almost_edge_item_liminal_cartography",
    "name": "Charting the Uncharted",
    "description": "The Charting of the Uncharted reveals the invisible threads that bind reality's edges, providing a detailed map of adjacent areas and marking hidden pathways just beyond perception. With this service from the Liminal Trader, you can navigate treacherous territories with newfound confidence, yet beware—each map is a fragile construct, its secrets slipping away as soon as you step past its borders. The trader's notes are filled with cryptic warnings and tantalizing hints of places that exist on the cusp of being understood.",
    "category": "services",
    "price": 4000,
    "icon": "🗺️",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "grant_detailed_map_of_adjacent_area",
      "chance_to_reveal_hidden_passage_15_percent"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "temporal_scroll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Detailed Map of Adjacent Area",
        "rules": "Upon activation, the user gains a detailed map of an adjacent area, complete with potential dangers and hidden pathways. The map is valid for one hour from the time it is first used. If the user moves more than 10 feet away from their starting point within this time, the map becomes unreliable."
      },
      {
        "title": "Chance to Reveal Hidden Passage (15%)",
        "rules": "With a successful Intelligence (Investigation) check against a DC of 18, the user has a 15% chance of revealing an unseen passage or secret door in their immediate surroundings. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Charting of the Uncharted is accessible to all adventurers who require guidance, as it serves as a foundational tool for exploration.",
    "vendorReason": "The Liminal Trader specializes in such esoteric services, offering maps and insights that are just beyond the realm of ordinary cartography.",
    "shippingDetail": "The map is delivered through a temporal scroll, which requires the recipient to focus on its contents for one minute before it becomes fully functional.",
    "usage": {
      "activation": "A bonus action to activate and use the service.",
      "duration": "One hour from activation.",
      "endsWhen": "The user moves more than 10 feet away from their starting point or at the end of its duration.",
      "charges": "Unlimited, but only one map can be active at a time."
    },
    "priceReason": "This item offers both immediate and ongoing benefits for exploration, making it a valuable tool for any adventurer who needs to navigate complex or unknown territories.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:52:44.433146+00:00",
    "aiReviewedAt": "2026-07-23T23:52:44.433146+00:00",
    "aiReviewVersion": 1
  },
  "chaos_dealer_fatebinder": {
    "id": "chaos_dealer_fatebinder",
    "name": "Fatebinder’s Shard",
    "description": "Fatebinder’s Shard, a glowing fragment of chaotic energy, whispers secrets and distorts reality in its wielder's hands. It bends the threads of fate, allowing for rerolls on failed skill checks or saving throws, but at a cost—chance encounters with madness or reality distortions may arise from its use. Crafted by the Chaotic Dealers who dabble in forbidden magics, this shard is both boon and bane to those who dare wield it.",
    "category": "curiosities",
    "price": 14000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Reroll on Skill Checks",
      "Risk of Madness"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reroll on Skill Checks",
        "rules": "As a bonus action, the user can reroll one failed skill check or saving throw. This ability cannot be used more than once per long rest."
      },
      {
        "title": "Risk of Madness",
        "rules": "There is a 10% chance (DC 15 Wisdom save) that using this item will cause the user to suffer from madness, as detailed in the Dungeon Master's Guide. This effect ends after one week if not cured."
      }
    ],
    "levelRequirementReason": "The Shard requires a low-level user to handle its unpredictable nature and prevent misuse.",
    "vendorReason": "Only the Chaotic Dealers, who understand the risks of meddling with fate, can offer this dangerous but powerful tool.",
    "shippingDetail": "Ships through a dimensional rift, arriving in a week. Fragile and must be handled carefully during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (effect lasts until used)",
      "endsWhen": "Used or expended for the day",
      "charges": "Unlimited"
    },
    "priceReason": "The Shard's balanced price reflects its unique and potentially dangerous abilities, ensuring it is a sought-after but not overpowered item.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:52:46.503843+00:00",
    "aiReviewedAt": "2026-07-23T23:52:46.503843+00:00",
    "aiReviewVersion": 1
  },
  "fate_forge_shadowcharm": {
    "id": "fate_forge_shadowcharm",
    "name": "Shadow Charm of Whispered Secrets",
    "description": "The Shadow Charm of Whispered Secrets is a small, intricately carved pendant made from dark obsidian and etched with ancient runes. It absorbs ambient shadows, drawing them into its core to whisper secrets and forgotten prophecies. Strategists value it for its advantage on Perception checks in dark areas, while warriors use it to resist fear and communicate briefly with spirits. Wario’s trusted recommendations have made this charm a favorite among treasure hunters and pranksters alike.",
    "category": "premium",
    "price": 64000,
    "icon": "🤫",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Advantage on Perception Checks in Dark Areas",
      "Resistance to Fear Effects"
    ],
    "vendor": "fate_forge",
    "shippedBy": "sentry_wraith",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Perception Checks in Dark Areas",
        "rules": "When the wearer is in a dark area, they gain advantage on Perception checks for detecting hidden or subtle details. This effect lasts until the end of their next turn."
      },
      {
        "title": "Resistance to Fear Effects",
        "rules": "The charm grants the wearer resistance to being frightened by magical and non-magical fear effects, up to a limit of three times per short rest."
      }
    ],
    "levelRequirementReason": "This charm is suitable for any level adventurer who seeks an edge in dark environments.",
    "vendorReason": "Fate Forge specializes in crafting items that enhance one's abilities, especially in challenging and obscure conditions like darkness.",
    "shippingDetail": "Ships via spectral courier; arrives with a shadowy whisper warning of its power.",
    "usage": {
      "activation": "Passive effect when worn.",
      "duration": "Instantaneous, lasts until the end of the wearer's next turn or until removed.",
      "endsWhen": "The effect ends naturally at the start of the wearer’s next turn after being used.",
      "charges": "Unlimited; regenerates upon a short rest."
    },
    "priceReason": "Balanced for its utility and thematic value, this charm provides significant benefits without overwhelming power.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:52:41.181030+00:00",
    "aiReviewedAt": "2026-07-23T23:52:41.181030+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_shard_of_the_void": {
    "id": "almost_edge_shard_of_the_void",
    "name": "Fragment of the Unwritten",
    "description": "The Fragment of the Unwritten is a shimmering shard that pulses with an ethereal light, as if it holds the very essence of forgotten worlds. When held, it distorts reality in subtle ways, revealing hidden truths and granting temporary immunity to fear. Its mere presence can drive even the most resilient minds into madness, but for those who are prepared, it offers a fleeting glimpse into the fabric of existence itself.",
    "category": "curiosities",
    "price": 130000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grant_temporary_immunity_to_fear",
      "reveal_hidden_truths"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Temporary Immunity to Fear",
        "rules": "When the Fragment is held, the user gains temporary immunity to fear effects for a duration of 1 hour. This effect ends if the user drops or releases the shard."
      },
      {
        "title": "Reveal Hidden Truths",
        "rules": "The shard has a 25% chance per short rest to reveal hidden truths within a 30-foot radius. The DM must decide what information is revealed, and it can be beneficial or detrimental. This effect requires the user to focus for at least 1 minute."
      }
    ],
    "levelRequirementReason": "The shard's power is potent but not insurmountable, requiring only basic magical knowledge to wield effectively.",
    "vendorReason": "The void merchant is known for dealing in the esoteric and forgotten, making this fragment a natural addition to their inventory.",
    "shippingDetail": "Due to its volatile nature, the shard must be shipped via the dimensional rift, ensuring safe delivery but imposing a longer transit time.",
    "usage": {
      "activation": "Passive effect when held; requires focus for hidden truths.",
      "duration": "Immunity lasts 1 hour. Hidden truths are revealed every short rest with a 25% chance.",
      "endsWhen": "The effect ends if the user drops or releases the shard, or on completion of its duration.",
      "charges": "Unlimited; no recharging required."
    },
    "priceReason": "This price reflects a balance between the rarity and potential danger of the fragment, ensuring it remains a valuable but not overpowered item.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T23:53:00.613992+00:00",
    "aiReviewedAt": "2026-07-23T23:53:00.613992+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_crimson_banner": {
    "id": "almost_edge_crimson_banner",
    "name": "The Edgeguarder's Standard",
    "description": "The Edgeguarder's Standard is a fearsome banner, its eternally falling doughnut emblem a symbol of defiance against all that dares to topple. Crafted from ancient void-forged silk and blessed by the forgotten guardians of the void, this banner not only resists fall damage but also disrupts attacks aimed at you. It hums with an eerie energy that makes foes pause in their tracks, ensuring your path is clear through its very presence.",
    "category": "equipment",
    "price": 4000,
    "icon": "🚩",
    "stock": 35,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "resist_fall_damage",
      "disrupt_attacks"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "the winged beetles of the void",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Resist Fall Damage",
        "rules": "You gain resistance to falling damage. This effect lasts until you leave the area where a fall would occur, such as off an elevated platform or cliff edge."
      },
      {
        "title": "Disrupt Attacks",
        "rules": "As a reaction, you can attempt to disrupt one attack directed at you made by a creature within 30 feet. The attacker must make a DC 14 Dexterity saving throw; on a failed save, the attack deals no damage."
      }
    ],
    "levelRequirementReason": "The mystical energies of the banner are potent and require a seasoned adventurer to wield it effectively.",
    "vendorReason": "The Edgewanderer, an ancient merchant with ties to lost realms, carries relics that protect travelers from the unknown dangers lurking in forgotten corners of the world.",
    "shippingDetail": "Shipped by the swift and silent winged beetles of the void, this banner arrives wrapped in a protective aura that ensures its arrival is timely and undisturbed.",
    "usage": {
      "activation": "Passive effect activated upon donning the banner.",
      "duration": "Lasts until you leave an area where fall damage would apply or until used to disrupt an attack.",
      "endsWhen": "Used to disrupt an attack or when you leave an area with a potential fall hazard.",
      "charges": "Unlimited, as it regenerates after each battle."
    },
    "priceReason": "The mystical silk and the ancient blessing of forgotten guardians justify its relatively lower price compared to other rare items.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-25T00:03:59.495166+00:00",
    "aiReviewedAt": "2026-07-25T00:03:59.495166+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_liminal_echoes": {
    "id": "almost_edge_liminal_echoes",
    "name": "Whispers from the Boundary",
    "description": "Whispers from the Boundary is a cluster of iridescent, translucent orbs that hum with the echoes of forgotten stories and half-remembered dreams. As you hold them to your ear, fragments of memory seep through, sometimes offering fleeting insights into lost wisdom, other times stirring unsettling truths. These tiny sentinels can be traded for rare herbs or used in rituals to strengthen one's perception, but beware—listening too long may leave you questioning the very fabric of reality.",
    "category": "faction",
    "price": 950,
    "icon": "🤫",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Fragments of Insight",
      "Perception Boost"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Spectral Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fragments of Insight",
        "rules": "Upon activation by a bonus action, the user gains one random insight related to their most recent memory. This effect lasts until the end of your next turn."
      },
      {
        "title": "Perception Boost",
        "rules": "The user's Perception skill is increased by 10% for 1 hour after using the item once per day. This boost cannot be applied more than once per long rest."
      }
    ],
    "levelRequirementReason": "This item offers a gentle nudge to perception and memory without overwhelming its user, making it accessible to low-level characters.",
    "vendorReason": "The Liminal Traders are known for their connection to the boundary between worlds, making them the ideal purveyors of such items.",
    "shippingDetail": "Delivered instantly by a spectral courier.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until end of next turn for Fragments of Insight; 1 hour for Perception Boost",
      "endsWhen": "Ends when the effect duration expires or the item is used again",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its uncommon rarity and the unique benefits it provides without being overpowered.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:53:00.878164+00:00",
    "aiReviewedAt": "2026-07-23T23:53:00.878164+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_glittering_hoof": {
    "id": "equestria_item_glittering_hoof",
    "name": "Glittering Hoof Charm",
    "description": "The Glittering Hoof Charm is a diminutive horseshoe encrusted with an iridescent sheen of enchanted glitter. Crafted from the polished hooves of legendary Pegasi, it bestows its wearer with a radiant aura that enhances speed and dazzles onlookers. Wearing this charm not only increases your movement speed by 5% but also has a 10% chance to debilitate an enemy with 'Sparkle Rot', reducing their accuracy by 10%. Wario's skeptical yet admiring comment, 'It’s shiny! And probably illegal!', serves as a humorous warning about its questionable origins.",
    "category": "curiosities",
    "price": 240,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Speed Boost",
      "Sparkle Rot"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "Increases the wearer's movement speed by 5% until the end of their next turn. This effect is instantaneous and does not require any action to activate."
      },
      {
        "title": "Sparkle Rot",
        "rules": "There is a 10% chance per combat round that this charm will cause an enemy within 30 feet to be hit with 'Sparkle Rot', reducing their accuracy by 10%. This effect lasts for 1 minute or until the wearer leaves combat."
      }
    ],
    "levelRequirementReason": "The charm's enchantments are subtle and do not require a high level of mastery to wield effectively.",
    "vendorReason": "As a popular market, Ponyville offers a wide array of trinkets and curiosities, including the Glittering Hoof Charm.",
    "shippingDetail": "The Pegasus Express ensures swift delivery via their fleet of enchanted flying ponies within a day.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous speed boost; lasts until the end of the wearer's next turn. 'Sparkle Rot' lasts for 1 minute or until combat ends.",
      "endsWhen": "The charm is removed from the wearer, or they leave combat.",
      "charges": "Unlimited uses"
    },
    "priceReason": "While not a high-level item, the Glittering Hoof Charm's unique enchantments and origins justify its high price in terms of utility and rarity.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:53:18.427807+00:00",
    "aiReviewedAt": "2026-07-23T23:53:18.427807+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_forbidden_shadow_blade": {
    "id": "equestria_item_forbidden_shadow_blade",
    "name": "Nightshade’s Whisper",
    "description": "Nightshade’s Whisper is a blade of dark obsidian, forged in the cursed depths of Equestria's Shadow Pony Kingdom. Its edge gleams with an eerie glow that seems to pulse with malevolent energy, whispering secrets of forgotten horrors. The sword grants its wielder +15% damage and a chance to inflict 'Nightmare', causing temporary confusion, but it also risks attracting the wrath of the Shadow Ponies, who covet this weapon above all others.",
    "category": "forbidden",
    "price": 4000,
    "icon": "🔪",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+15% Damage",
      "Chance to Inflict Nightmare"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Guard Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Nightmare",
        "rules": "When you hit with a melee attack using Nightshade’s Whisper, there is a 20% chance to inflict the 'Nightmare' condition. The target becomes confused for 1 round (DC 15 Wisdom save). On a successful save, they are only dazed until their next action."
      },
      {
        "title": "Attract Shadow Ponies",
        "rules": "Using Nightshade’s Whisper within 2 miles of the Shadow Pony Kingdom has a 50% chance of attracting hostile creatures. The Shadow Ponies will attack any creature with the weapon, unless you surrender it (no save). Once surrendered, the item is no longer functional."
      }
    ],
    "levelRequirementReason": "The blade's malevolent power requires a seasoned warrior to wield without succumbing to its influence.",
    "vendorReason": "Canterlot Commerce, known for their diverse selection of magical artifacts, has managed to acquire this rare and dangerous weapon despite the Shadow Pony Kingdom’s protests.",
    "shippingDetail": "The item is delivered by a Royal Guard Courier with strict instructions to avoid any unauthorized stops. The courier will alert authorities if suspicious activity occurs during transit.",
    "usage": {
      "activation": "Melee attack",
      "duration": "Instantaneous effect; lasts until the end of your next turn or until you sheathe it.",
      "endsWhen": "Surrendering the weapon to a Shadow Pony, losing a round of combat, or using an action to sheath it.",
      "charges": "Unlimited"
    },
    "priceReason": "The weapon's dark power and limited availability justify its high price in terms of XP.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T23:53:45.065722+00:00",
    "aiReviewedAt": "2026-07-23T23:53:45.065722+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_elemental_shard": {
    "id": "equestria_item_elemental_shard",
    "name": "Shard of Harmony",
    "description": "The Shard of Harmony is a crystalline fragment, its surface shimmering with hues of blue and gold as it pulses with latent elemental magic. Crafted from the heart of Equestria’s Elemental Plane, this shard allows you to channel one element for up to an hour, enhancing your attacks or defenses accordingly. Its raw power can be felt in every swing or parry, making it a formidable tool in any battle.",
    "category": "equipment",
    "price": 14000,
    "icon": "🔥💧💨",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Elemental Channeling",
      "Enhanced Resilience"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Griffin Delivery Service",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Elemental Channeling",
        "rules": "By using an action and concentrating for up to one hour, you can channel the power of a single elemental force (fire, water, air). While doing so, your attacks deal an additional +10 fire damage if you choose fire, +15 water damage if you select water, or +20 air damage if you opt for air. This effect requires concentration and ends on your turn when you stop concentrating."
      },
      {
        "title": "Enhanced Resilience",
        "rules": "While channeling an element, you gain resistance to the chosen elemental type. Additionally, while this effect is active, you have advantage on saving throws against spells or effects of that elemental type."
      }
    ],
    "levelRequirementReason": "This shard requires a minimum level to harness its latent power effectively.",
    "vendorReason": "The Crystal Empire is well-known for its mastery over Equestria's elemental forces, making it the ideal vendor for such an item.",
    "shippingDetail": "Ships via a swift Griffin Courier, ensuring safe and timely delivery of this fragile yet powerful artifact.",
    "usage": {
      "activation": "Using an action to activate and concentrate on one elemental force for up to one hour.",
      "duration": "Up to one hour while concentrating.",
      "endsWhen": "On your turn when you stop concentrating.",
      "charges": "Unlimited, as long as you maintain concentration."
    },
    "priceReason": "The Shard of Harmony is priced at 1000 XP due to its unique elemental properties and the specialized materials used in its crafting.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:53:48.491873+00:00",
    "aiReviewedAt": "2026-07-23T23:53:48.491873+00:00",
    "aiReviewVersion": 1
  },
  "fate_divination_scroll": {
    "id": "fate_divination_scroll",
    "name": "The Weaver's Whisper",
    "description": "The Weaver's Whisper is a fragile, parchment scroll sealed within a leather case adorned with intricate runes. Crafted by the enigmatic Fate Forge, this scroll reveals fleeting glimpses into possible futures, granting the user a momentary insight that can alter the course of events – though Wario's constant meddling ensures that not all prophecies come to pass as intended. The scroll's predictions are both cryptic and precise, offering a temporary bonus to perception checks and allowing for one reroll on failed skill checks.",
    "category": "services",
    "price": 950,
    "icon": "🔮",
    "stock": 10,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Fate Glimpse",
      "Perception Boost"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Fate Messenger",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Fate Glimpse",
        "rules": "The user must spend a minute studying the scroll to activate its effect. The scroll illuminates one enemy within 30 feet, revealing hidden weaknesses that grant advantage on an attack roll against it for the next hour. This effect ends if the scroll is destroyed or if the user fails a DC 15 Constitution saving throw."
      },
      {
        "title": "Perception Boost",
        "rules": "For every hour spent studying The Weaver's Whisper, the user gains advantage on one perception check of their choice during that time. This effect can only be used once per day and is immediately lost if the scroll is destroyed or if the user fails a DC 15 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "The scroll's complexity requires a minimum of third-level proficiency to fully grasp its prophecies.",
    "vendorReason": "Only the enigmatic Fate Forge can craft scrolls that accurately reveal the threads of fate.",
    "shippingDetail": "The scroll is delivered by the trusted courier known as the Fate Messenger, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "A minute-long study of the scroll.",
      "duration": "One hour for each minute studied.",
      "endsWhen": "The scroll's effect ends if destroyed or when a saving throw is failed.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The scroll's rarity and the expertise required to use it justify its fair value in experience points.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-25T14:27:15.048587+00:00",
    "aiReviewedAt": "2026-07-25T14:27:15.048587+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_jungle_drum": {
    "id": "animatopia_jungle_drum",
    "name": "Rumbling Root Drum",
    "description": "The Rumbling Root Drum, carved from an ancient jungle tree's heartwood, exudes a primal energy that resonates through the earth itself. When struck, it unleashes a thunderous roar capable of momentarily stunning nearby foes and rallying your party to new heights of morale. The drum’s ancient wood seems alive with the spirits of the jungle, its every beat echoing with untold tales and secrets from the deep forest.",
    "category": "consumables",
    "price": 4000,
    "icon": "🥁",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Stuns Target",
      "Boosts Morale"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "giant_beetle",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Stun",
        "rules": "When struck, the drum emits a deafening roar that stuns all creatures within 10 feet for 1 round (DC 15). If a creature fails its saving throw, it is stunned until the start of your next turn. This effect can be used once per long rest."
      },
      {
        "title": "Morale Boost",
        "rules": "Upon striking the drum, all friendly creatures within 30 feet gain advantage on attack rolls and saving throws for the duration of one short rest or until a creature in the area takes damage. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "To wield such an ancient artifact, you must have proven yourself capable of controlling its primal power.",
    "vendorReason": "The Tribal Trader has extensive connections with the jungle tribes who crafted and revere this drum.",
    "shippingDetail": "Delivered by a giant beetle courier, ensuring safe transport through treacherous jungle terrain.",
    "usage": {
      "activation": "Standard action to strike the drum once per turn.",
      "duration": "Instantaneous effect; lasts until the start of your next turn for stunned creatures and until the end of one short rest or until a creature in the area takes damage, whichever comes first.",
      "endsWhen": "The effects dissipate as soon as their duration ends or when a creature within range takes damage.",
      "charges": "Uses once per long rest"
    },
    "priceReason": "Crafted from ancient wood and imbued with powerful jungle spirits, this drum is priced accordingly for its rarity and potent effects.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T23:54:15.660462+00:00",
    "aiReviewedAt": "2026-07-23T23:54:15.660462+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_golden_beetle_charm": {
    "id": "animatopia_golden_beetle_charm",
    "name": "Buzzing Beetle's Blessing",
    "description": "The Buzzing Beetle's Blessing is a gleaming charm forged from the exoskeleton of an ancient golden beetle, said to have been entombed in amber for eons. This trinket grants its bearer unmatched agility and a touch of luck, allowing them to dodge attacks with surprising ease and move with the speed of a swift insect. Wield it during your next adventure, and you might find yourself outmaneuvering foes and outrunning traps more often than not.",
    "category": "equipment",
    "price": 14000,
    "icon": "✨",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Increased Agility",
      "Dodging Luck"
    ],
    "vendor": "forest_market",
    "shippedBy": "courier_bumblebee",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Agility",
        "rules": "While wearing the Buzzing Beetle's Blessing, you gain a +1 bonus to your Dexterity saving throws and a +2 bonus to your movement speed. This effect lasts for 1 hour or until you rest."
      },
      {
        "title": "Dodging Luck",
        "rules": "When an attack is made against you while wearing the Buzzing Beetle's Blessing, roll a d6. On a result of 5 or higher, you have advantage on your Dexterity saving throw to dodge the attack. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This charm is designed for all adventurers, regardless of level, to bring them a bit of luck and agility.",
    "vendorReason": "The forest market thrives on the whimsical and magical items found in the wilds nearby, making it an ideal vendor for such a charming trinket.",
    "shippingDetail": "Shipped by Bumblebee Courier Services; expect delivery within three days of your order.",
    "usage": {
      "activation": "Passive effect upon donning the charm.",
      "duration": "1 hour or until you rest.",
      "endsWhen": "The duration ends when you finish a short rest or are no longer wearing the charm.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The charm's rarity and magical properties justify its moderate price, making it accessible yet valuable for adventurers.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:54:18.753424+00:00",
    "aiReviewedAt": "2026-07-23T23:54:18.753424+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_gravity_adjustment": {
    "id": "grand_country_gravity_adjustment",
    "name": "Gravity Adjustment Serum",
    "description": "The Gravity Adjustment Serum is a shimmering, purplish liquid vial that pulses with arcane energy. When consumed, it temporarily warps your gravitational field, allowing you to scale sheer walls with ease or momentarily float above the battlefield. The serum's effects are unpredictable; while it grants a +5 bonus to Strength (Athletics) checks for climbing and jumping, there's a 20% chance each turn that you will levitate slightly, adding an element of surprise to your movements.",
    "category": "services",
    "price": 950,
    "icon": "🎈",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Climbing",
      "Brief Levitation"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Suspended Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Climbing",
        "rules": "When consumed, the serum grants a +5 bonus to Strength (Athletics) checks for climbing and jumping. This effect lasts for 5 turns. The user must make an Athletics check each turn they wish to climb or jump; failure results in no change."
      },
      {
        "title": "Brief Levitation",
        "rules": "There is a 20% chance each turn that the user will briefly levitate, adding +1d4 feet of altitude. This effect does not require an action but ends if the user touches ground or falls from height. Levitation can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The serum's effects are accessible to lower-level characters, making it a versatile tool for explorers and adventurers alike.",
    "vendorReason": "Vertical Vendor specializes in items that defy the laws of physics and gravity, making this potion an ideal addition to their inventory.",
    "shippingDetail": "The serum is shipped via Suspended Delivery Drone for guaranteed safe arrival at your feet.",
    "usage": {
      "activation": "Consume the vial as a bonus action.",
      "duration": "5 turns or until used up in combat.",
      "endsWhen": "Levitation ends if you touch ground, fall from height, or run out of uses.",
      "charges": "Limited to one use per short rest."
    },
    "priceReason": "The serum's effects are powerful and versatile, making it a valuable tool for adventurers. Its rarity and the limited number of uses justify its price in XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:54:41.744395+00:00",
    "aiReviewedAt": "2026-07-23T23:54:41.744395+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_layer_shard_of_confusion": {
    "id": "grand_country_layer_shard_of_confusion",
    "name": "Layer Shard of Confusion",
    "description": "The Layer Shard of Confusion is a jagged, multi-layered fragment that appears to be made from the remnants of an ancient, forgotten city. Held in one's hand, it induces a state of disorientation and fragmented thought, making nearby enemies falter and misstep. The shard seems to whisper strange theories and nonsensical ideas into your mind, leaving you momentarily confused but others open to psychic attacks or just plain silly behavior.",
    "category": "curiosities",
    "price": 4000,
    "icon": "😵‍💫",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Mind Distraction",
      "Psychic Vulnerability"
    ],
    "vendor": "layer_market",
    "shippedBy": "Dimensional Portal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mind Distraction",
        "rules": "When a creature within 30 feet of the wielder looks at the shard, they must succeed on a DC 15 Wisdom saving throw or become confused until the end of their next turn. The wielder can use an action to target one such creature and force it to make this save immediately."
      },
      {
        "title": "Psychic Vulnerability",
        "rules": "The wielder gains vulnerability to psychic damage while holding the shard. Additionally, any creature that successfully hits the wielder with a melee attack has advantage on their next attack roll against them."
      }
    ],
    "levelRequirementReason": "This shard can be held and used by characters of any level but requires minimal dexterity to manipulate effectively.",
    "vendorReason": "The Layer Market specializes in rare and unusual artifacts, including this fragment from a mysterious city that has long been lost to time.",
    "shippingDetail": "Ships via the Dimensional Portal Courier within 24 hours of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, with a new save required each round the creature is affected by confusion.",
      "endsWhen": "The creature successfully saves against the confusion effect or the wielder drops the shard.",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's value lies in its unique origin and the temporary but significant effects it provides, making it a rare find for any adventurer.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T23:54:49.052525+00:00",
    "aiReviewedAt": "2026-07-23T23:54:49.052525+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_voidwalker_ritual": {
    "id": "the_edge_voidwalker_ritual",
    "name": "Ephemeral Binding",
    "description": "The Ephemeral Binding is a ritual circle etched into an ancient stone tablet, surrounded by delicate threads of glowing incense that burn like living fire. This arcane device allows you to momentarily sever your physical connection from the world, permitting passage through solid objects for three turns. The ritual requires precision and focus; any misstep could disrupt its fragile weave, making it a risky yet invaluable tool for explorers navigating treacherous terrain or evading foes.",
    "category": "services",
    "price": 950,
    "icon": "👻",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Temporal Displacement",
      "Precision Required"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Flying Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Temporal Displacement",
        "rules": "As an action, you can activate the Ephemeral Binding to phase through solid objects for three turns. During this time, you and your equipment are immune to most forms of damage from contact with solid matter. However, any sudden movement or external force could disrupt the effect."
      },
      {
        "title": "Precision Required",
        "rules": "Performing the ritual correctly requires a DC 14 Intelligence check; failure results in the immediate destruction of the binding's components and no effect being granted. This item is intended for experienced spellcasters only."
      }
    ],
    "levelRequirementReason": "Requires sufficient magical knowledge to safely perform the complex ritual.",
    "vendorReason": "The Edge Outpost specializes in rare and dangerous rituals, offering tools for adventurers who need an edge in hostile environments.",
    "shippingDetail": "Delivered by swift aerial couriers; expedited service available for an additional cost.",
    "usage": {
      "activation": "Action",
      "duration": "Three turns",
      "endsWhen": "The ritual ends if you move too abruptly or are struck by a forceful blow.",
      "charges": "Unlimited uses, but requires daily rest to recover the spent components."
    },
    "priceReason": "Balanced for its complexity and utility; an expensive yet practical tool for adventurers navigating treacherous terrain.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:54:49.469835+00:00",
    "aiReviewedAt": "2026-07-23T23:54:49.469835+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_obsidian_goggles": {
    "id": "the_edge_obsidian_goggles",
    "name": "Specter's Gaze",
    "description": "The Specter's Gaze is a pair of dark goggles forged from the dreams of abyssal specters. They grant you an eerie insight into hidden dangers, allowing you to see through illusions and invisibility within 60 feet for up to one minute. However, their power comes at a cost; anyone who wears them risks succumbing to the specter's influence, causing minor disadvantage on Charisma checks until the effects end.",
    "category": "equipment",
    "price": 240,
    "icon": "👁️",
    "stock": 80,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "+1 to Perception",
      "Resistance to Psychic Damage"
    ],
    "vendor": "final_shop",
    "shippedBy": "Standard Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Revealing Gaze",
        "rules": "As a bonus action, you can activate the Specter's Gaze for up to one minute. Within this time, you have advantage on Perception checks made to sense creatures hidden by illusions or invisibility within 60 feet. This effect ends if you are incapacitated."
      },
      {
        "title": "Specter's Influence",
        "rules": "While wearing the Specter's Gaze, you must make a DC 15 Wisdom saving throw at the start of each of your turns. On a failed save, you gain minor disadvantage on Charisma checks until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This item is suitable for low-level characters who need an edge in combat and exploration.",
    "vendorReason": "Final Shop offers a wide variety of unique and balanced equipment, including the Specter's Gaze.",
    "shippingDetail": "Ships within 3 days with Standard Post. Ensure safe handling to avoid damage to delicate goggles.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Up to one minute per day",
      "endsWhen": "You are incapacitated, or after one minute",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The Specter's Gaze provides significant utility and minor risks, justifying its high price in XP.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:54:46.052736+00:00",
    "aiReviewedAt": "2026-07-23T23:54:46.052736+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_spirit_charm": {
    "id": "animatopia_spirit_charm",
    "name": "Whispering Spirit Charm",
    "description": "The Whispering Spirit Charm is a delicate pendant crafted from polished river stones and intricately woven feathers, each feather imbued with the essence of Animatopia's ancient spirits. This charm allows you to briefly commune with nature, gaining insights into local dangers and hidden paths – but beware, for it attracts the attention of grumpy badgers who protect their forest sanctuaries jealously. The charm hums softly when worn, whispering secrets from the trees.",
    "category": "curiosities",
    "price": 950,
    "icon": "🌿",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Gain Advantage on Survival Checks",
      "Detect Hidden Paths and Creatures"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Commune with Nature (Instant)",
        "rules": "When you activate this charm as a bonus action, you gain advantage on all Survival checks made to navigate through or survive in forests for the next hour. Additionally, there is a 10% chance per day that you can detect hidden paths and creatures within a 30-foot radius."
      },
      {
        "title": "Grumpy Badger Attention",
        "rules": "While wearing this charm, your presence attracts the attention of grumpy badgers in the immediate area. They may become hostile if they sense danger or disruption to their forest. The charm's effectiveness is reduced within 50 feet of known badger dens."
      }
    ],
    "levelRequirementReason": "The charm requires a basic understanding of nature and survival skills, making it accessible to lower-level adventurers.",
    "vendorReason": "The forest market is well-known for its connection with the natural world, making it an ideal vendor for this enchanted item.",
    "shippingDetail": "Shipped by a giant snail, which ensures safe delivery through Animatopia's winding paths and hidden groves.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous effect with hourly benefit",
      "endsWhen": "The charm's effectiveness ends after an hour or if you remove it from your person.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The charm is priced at 1000 XP, reflecting its unique combination of natural magic and the risk of attracting forest guardians.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:55:20.051583+00:00",
    "aiReviewedAt": "2026-07-23T23:55:20.051583+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_warrior_totem": {
    "id": "animatopia_warrior_totem",
    "name": "Great Bear Totem of Valor",
    "description": "The Great Bear Totem of Valor is a towering totem crafted from the bones of ancient bears found in the Animatopia wilderness, adorned with intricate tribal markings. Its imposing presence grants +4 armor and resistance to physical damage, while its roar can demoralize enemies with a 15% chance of stunning them. It's a symbol of Animatopia’s strength and is shipped by the Giant Bee, known for their precision in delivering such powerful artifacts.",
    "category": "faction",
    "price": 64000,
    "icon": "🐻",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Armor +4",
      "Resistance to Physical Damage"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_bee",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Rumbling Roar",
        "rules": "When you use an action to roar, there is a 15% chance to stun one creature within 30 feet for 1 round. This effect has no save DC and can be used once per short rest."
      },
      {
        "title": "Defensive Aura",
        "rules": "Grants the wearer resistance to all physical damage, with no save required. This benefit is active as long as you are wearing the totem."
      }
    ],
    "levelRequirementReason": "Requires a high level of expertise and control to wield such a powerful symbol.",
    "vendorReason": "Beast Bazaar deals in ancient and rare artifacts from Animatopia, making it the perfect vendor for this item.",
    "shippingDetail": "Shipped by Giant Bee, known for their reliable service even across vast distances.",
    "usage": {
      "activation": "Action to use the Rumbling Roar; always active when worn.",
      "duration": "Instantaneous (Rumbling Roar) and as long as you wear it (Defensive Aura)",
      "endsWhen": "Exhausted after one use of the Rumble Roar or removed from your person",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a lower price to reflect its high rarity and powerful effects.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:55:04.436849+00:00",
    "aiReviewedAt": "2026-07-23T23:55:04.436849+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_pastry_pledge": {
    "id": "leclaire_isle_pastry_pledge",
    "name": "Pastry Pledge of Allegiance",
    "description": "The Pastry Pledge of Allegiance is a delicate croissant encrusted with sugar and dusted with cinnamon. Baked in the sacred ovens of Le Claire Isle, this pastry not only enhances one's persuasive skills but also leaves you craving more deliciousness. A treat for both your tongue and your social graces, it promises temporary loyalty to all things sweet, granting a boost in charm and persuasion that can sway even the most hardened hearts.",
    "category": "faction",
    "price": 4000,
    "icon": "🥐",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "charm",
      "persuasion"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "flying_crust",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charmed Persuasion",
        "rules": "When consumed, the Pastry Pledge of Allegiance grants a +4 bonus to Persuasion checks for up to 3 turns. This effect can be used once per short or long rest."
      },
      {
        "title": "Sugar Craving",
        "rules": "After consuming the pastry, you gain a temporary increase in speed (increased movement) for 1 turn, granting you +20 feet of movement. This effect is instantaneous and does not require an action to activate."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers who appreciate the finer things in life.",
    "vendorReason": "Pastry Palace, known for its exquisite pastries and loyalty to Le Claire Isle’s Dough Folk Queen, is the perfect vendor for this item.",
    "shippingDetail": "Delivered by a fleet of flying croissants, ensuring your Pastry Pledge arrives fresh from the oven.",
    "usage": {
      "activation": "Eaten as a snack",
      "duration": "Instantaneous and lasts for the duration specified in its effects",
      "endsWhen": "The effect ends when the duration expires or you consume another pastry of this kind within the same rest period",
      "charges": "Unlimited, but only one use per short or long rest"
    },
    "priceReason": "Balanced to ensure it remains a desirable item without overshadowing other faction-specific offerings.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:55:08.912488+00:00",
    "aiReviewedAt": "2026-07-23T23:55:08.912488+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_frosting_formula": {
    "id": "leclaire_isle_frosting_formula",
    "name": "Frosting Formula of Infinite Delight",
    "description": "The Frosting Formula of Infinite Delight is a vial containing frosty, shimmering frosting that can warp reality in whimsical ways. When applied to an enemy, it casts Minor Illusion, making them appear as something ridiculous for the duration. The target's accuracy plummets by -3 until their next action. Should you consume this frosting yourself, it grants temporary resistance to cold damage and a burst of laughter that can spread among allies within hearing range.",
    "category": "curiosities",
    "price": 14000,
    "icon": "✨",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "visual illusion",
      "temporal resistance"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "delivery_drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Visual Illusion (Minor Illusion)",
        "rules": "Activates as an action. The target appears in a ridiculous form for up to one minute, giving them disadvantage on attack rolls and saving throws until their next turn."
      },
      {
        "title": "Temporal Resistance",
        "rules": "Eating the frosting grants temporary resistance to cold damage equal to your proficiency bonus (or 2 if you have no proficiency). This lasts for 1 hour. Additionally, it can spread laughter among allies within 30 feet as an action."
      }
    ],
    "levelRequirementReason": "Requires a moderate amount of control and finesse to properly apply the frosting without causing uncontrollable giggling.",
    "vendorReason": "Sweet Suplies specializes in unusual ingredients, so they naturally stock this whimsical formula.",
    "shippingDetail": "Delivered by drone within a day.",
    "usage": {
      "activation": "Action or bonus action to apply to an enemy. Action to consume oneself.",
      "duration": "Instantaneous application, one-minute illusion duration, and 1-hour resistance.",
      "endsWhen": "Eaten by the target or consumed by the caster; both effects last until their durations expire.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a lower price to reflect its whimsical, non-combat utility.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T23:55:08.605399+00:00",
    "aiReviewedAt": "2026-07-23T23:55:08.605399+00:00",
    "aiReviewVersion": 1
  },
  "internet_virus_injector": {
    "id": "internet_virus_injector",
    "name": "Digital Rot Injector",
    "description": "The Digital Rot Injector is a sleek, metallic device with a glowing digital core that crackles with static. Crafted by the enigmatic vendor Darknet Inc., this contraption injects targeted malware into electronic devices and systems, causing them to glitch and short out. The injector can be used to apply a 'Glitch' status effect, which slows the target and increases their chance of missing attacks, as well as potentially corrupting data, reducing the armor rating of electronic defenses by 50%. Use it wisely—this tool is both powerful and dangerous.",
    "category": "equipment",
    "price": 4000,
    "icon": "🦠",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Glitch",
      "Data Corruption"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_drone",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Glitch",
        "rules": "When activated, this effect imposes a 'Glitch' status on the target. The target is slowed by 20 feet and has a +5 bonus to miss attacks against them during their next turn. This effect lasts until the end of the target's next turn or until they are healed."
      },
      {
        "title": "Data Corruption",
        "rules": "Upon successful application, there is a 30% chance that 'Data Corruption' will reduce the target’s armor rating by 50% for one minute. The effect can be resisted with a DC 14 Dexterity saving throw."
      }
    ],
    "levelRequirementReason": "Crafted from advanced cybernetic components and rare digital artifacts, this injector requires a high level of expertise to use effectively.",
    "vendorReason": "Darknet Inc. specializes in cutting-edge technology and custom devices for those who need to stay one step ahead in the digital realm.",
    "shippingDetail": "Delivered by encrypted drones, this item ensures secure transport even through hostile environments.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; duration of 'Glitch' is until the end of the target's next turn or they are healed. 'Data Corruption' lasts for one minute.",
      "endsWhen": "The effect ends when the target is healed, the duration expires, or the injector is recharged.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted with rare materials and advanced technology, this device offers a powerful yet balanced option for those who need to manipulate electronic systems.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:56:07.198131+00:00",
    "aiReviewedAt": "2026-07-23T23:56:07.198131+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_echoing_pastry": {
    "id": "doughnut_hole_echoing_pastry",
    "name": "Chronal Cruller",
    "description": "The Chronal Cruller is a sweet treat with an eerie, metallic sheen and a core that glows faintly like old film reels. When consumed, it grants you a fleeting vision of a pivotal moment from your past – an event that could have changed the course of your life or your world. The taste lingers in your mouth as if holding onto a memory just beyond reach, leaving you with a newfound sense of wonder and insight into the fabric of time itself.",
    "category": "equipment",
    "price": 14000,
    "icon": "🕰️",
    "stock": 45,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Glimpse Past",
      "Temporal Insight"
    ],
    "vendor": "center_seller",
    "shippedBy": "temporal_package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glimpse Past",
        "rules": "As an action, consuming the Chronal Cruller allows you to briefly glimpse a pivotal moment in your past. This vision lasts for 1 minute and provides you with advantage on one ability check of your choice related to history or investigation before it fades away."
      },
      {
        "title": "Temporal Insight",
        "rules": "For the duration of 24 hours following consumption, you gain temporary hit points equal to half your level (rounded down) whenever you take damage from an attack. This effect can only activate once per long rest."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurer may find value in understanding their past and gaining insight into their own resilience.",
    "vendorReason": "The center seller specializes in rare, time-related curiosities that help adventurers make sense of their past and future alike.",
    "shippingDetail": "The Chronal Cruller requires special packaging to ensure it remains stable during transit through the temporal fluxes.",
    "usage": {
      "activation": "action",
      "duration": "1 minute or until dispelled by a successful DC 15 Wisdom (Insight) check",
      "endsWhen": "the vision fades away or you fail a saving throw against an effect ending it",
      "charges": "unlimited"
    },
    "priceReason": "The Chronal Cruller's rare ingredients and the complex process of creating this temporal delicacy justify its moderate price.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T23:55:26.215567+00:00",
    "aiReviewedAt": "2026-07-23T23:55:26.215567+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_power_potion_x2": {
    "id": "mushroom_kingdom_item_power_potion_x2",
    "name": "Super Mushroom X2 - Double the Goo!",
    "description": "The Super Mushroom X2 - Double the Goo! is a pair of potent, frothy potions brewed from the concentrated essence of mushroom kings. When consumed, they instantly transform you into a colossal, gooey form capable of crushing obstacles with ease. The mushrooms' ancient magic grants temporary invulnerability to physical attacks for the duration of your transformation, making it the perfect potion for any adventurer seeking to flatten foes or navigate challenging terrain.",
    "category": "consumables",
    "price": 14000,
    "icon": "🍄💥",
    "stock": 15,
    "rarity": "epic",
    "stockType": "delivery_only",
    "effects": [
      "transform_into_colossal_mushroom",
      "temporary_invulnerability"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "flying_mushroom",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Transform into Colossal Mushroom",
        "rules": "When consumed, you transform into a colossal mushroom form. You gain temporary invulnerability to physical attacks for the duration of this effect."
      },
      {
        "title": "Temporary Invulnerability",
        "rules": "For the duration of your transformation, you are immune to all non-magical physical damage and have advantage on Strength checks and saving throws made as a result of being physically attacked. This effect lasts for 1 minute per level."
      }
    ],
    "levelRequirementReason": "This potion is designed for mid-level adventurers who need the extra power to face tougher challenges.",
    "vendorReason": "The Koopa Shop specializes in unique and powerful potions that can help adventurers on their quests, making it a natural home for this extraordinary item.",
    "shippingDetail": "Shipped via the fastest flying mushrooms available; expect delivery within three days of purchase.",
    "usage": {
      "activation": "Drink both potions simultaneously to activate the effect.",
      "duration": "1 minute per level, up to 5 minutes total.",
      "endsWhen": "The transformation ends when you take any non-magical physical damage or when the duration expires.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This potion's rarity and powerful effect justify its price, offering a significant advantage to adventurers without being game-breaking.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T23:55:54.890827+00:00",
    "aiReviewedAt": "2026-07-23T23:55:54.890827+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_anomaly_donut": {
    "id": "doughnut_hole_anomaly_donut",
    "name": "The Center's Delight",
    "description": "The Center's Delight, a rare pastry baked with dark magic by the enigmatic Center Seller, is said to contain a fragment of the void itself. Consuming this donut can momentarily warp your perception, causing temporary confusion that might lead you to find sprinkle-covered items more appealing than usual. Those who indulge in its sugary depths may also experience an uncontrollable craving for sprinkles, but it grants minor healing and a fleeting chance to duplicate an item from the same category.",
    "category": "consumables",
    "price": 4000,
    "icon": "🍩",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "temporary_confusion",
      "minor_healing"
    ],
    "vendor": "center_seller",
    "shippedBy": "wormhole",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Confusion",
        "rules": "Upon consuming The Center's Delight, you become confused for 1 minute. During this time, you have disadvantage on all saving throws and ability checks. Additionally, you are compelled to seek out sprinkle-covered items; any attempt to resist this compulsion requires a DC 12 Wisdom saving throw."
      },
      {
        "title": "Minor Healing",
        "rules": "The Center's Delight heals 3d6 hit points when consumed as an action. This effect is instantaneous and does not require a save or other check, but you can only consume it once per day."
      }
    ],
    "levelRequirementReason": "This pastry's dark magic requires no specific level to consume safely.",
    "vendorReason": "The Center Seller, known for their eccentric and sometimes dangerous wares, is the only vendor capable of procuring such a mysterious item.",
    "shippingDetail": "Due to its unstable nature, The Center's Delight must be shipped via wormhole, which adds a week to delivery time but ensures it arrives in perfect condition.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "Instantaneous healing; confusion lasts for 1 minute.",
      "endsWhen": "The effect ends when the duration expires or you are no longer confused.",
      "charges": "Unlimited, but only one per day."
    },
    "priceReason": "The rare ingredients and dark magic required to craft The Center's Delight justify its price of 1000 XP.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T23:55:48.185179+00:00",
    "aiReviewedAt": "2026-07-23T23:55:48.185179+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_mythic_void_cruller": {
    "id": "doughnut_hole_mythic_void_cruller",
    "name": "Chronal Crumbles",
    "description": "The Chronal Crumbles are a mythic delicacy that warp time around the eater, creating a temporal flux around them. This cruller not only grants resistance to temporal effects but also has a chance to momentarily reverse the flow of time for the consumer. The vendor, Wario, sources these from the deepest pits of the Mushroom Kingdom where they are said to be crafted by chaos itself. A bite is no mere snack; it's an experience that can lead to paradoxes or an inexplicable fondness for polka music.",
    "category": "premium",
    "price": 130000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "temporal_resistance",
      "time_reversal_chance"
    ],
    "vendor": "void_vendor",
    "shippedBy": "black_hole express delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Resistance",
        "rules": "The consumer gains resistance to all damage from temporal effects. This effect lasts until the end of their next turn."
      },
      {
        "title": "Chance to Reverse Time",
        "rules": "There is a 10% chance per minute that time will reverse for the consumer, allowing them to take an action as if it were on their previous turn. This effect has no save DC and can occur multiple times per day."
      }
    ],
    "levelRequirementReason": "The Chronal Crumbles are potent enough to disrupt the natural flow of time; they require a certain level of expertise to safely consume.",
    "vendorReason": "Wario, known for his chaotic nature and love for chaos, is the only one who can source such powerful yet whimsical items from the depths of the Mushroom Kingdom.",
    "shippingDetail": "Due to the volatile nature of Chronal Crumbles, they are delivered via black hole express, ensuring a swift and safe arrival.",
    "usage": {
      "activation": "Eaten as a snack or treat",
      "duration": "Instantaneous effect; temporal resistance lasts until end of next turn. Time reversal chance is continuous but limited to once per minute.",
      "endsWhen": "Temporal effects wear off at the end of their duration, and the time reversal chance ends when the consumer no longer consumes the cruller.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Chronal Crumbles are a mythic item with unique effects that disrupt the natural flow of time, making them both rare and valuable.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:55:58.166434+00:00",
    "aiReviewedAt": "2026-07-23T23:55:58.166434+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sticky_dough_fingers": {
    "id": "leclaire_isle_item_sticky_dough_fingers",
    "name": "Sticky Dough Fingers",
    "description": "Sticky Dough Fingers are deceptively delightful pastries made from enchanted dough that clings to your fingers, creating a sticky mess upon consumption. When you indulge in one of these treats, not only do you receive a burst of surprising energy, but the dough also leaves a gooey residue on any enemy within reach as you eat it, distracting them momentarily. These confections are perfect for both sweet indulgence and tactical mischief.",
    "category": "consumables",
    "price": 960,
    "icon": "🍪",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Burst of Energy",
      "Sticky Residue"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift_delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Burst of Energy",
        "rules": "When you consume a Sticky Dough Finger, you gain 10 temporary hit points. This effect lasts until the end of your next turn."
      },
      {
        "title": "Sticky Residue",
        "rules": "At the start of each enemy's turn that begins with them within 5 feet of you after you eat a Sticky Dough Finger, they must make a DC 12 Dexterity saving throw or become restrained until the end of their next turn. On a successful save, the effect ends."
      }
    ],
    "levelRequirementReason": "This treat is accessible to low-level characters who can afford its price.",
    "vendorReason": "Dough Depot specializes in enchanting baked goods with magical properties, making Sticky Dough Fingers a fitting addition to their menu.",
    "shippingDetail": "These pastries are delivered swiftly by drones, ensuring they remain fresh upon arrival.",
    "usage": {
      "activation": "Eating the pastry",
      "duration": "Instantaneous effect lasts until your next turn; sticky residue ends when the enemy is no longer within reach or makes a successful save.",
      "endsWhen": "The temporary hit points from Burst of Energy expire at the end of your next turn, and the Sticky Residue effect ends on a successful saving throw or when the enemy leaves range.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price is adjusted to reflect the unique properties and effects of these enchanted pastries.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:56:22.087099+00:00",
    "aiReviewedAt": "2026-07-23T23:56:22.087099+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_frosting_of_forgetfulness": {
    "id": "leclaire_isle_item_frosting_of_forgetfulness",
    "name": "Frosting of Forgetfulness",
    "description": "The Frosting of Forgetfulness is a shimmering lavender frosting that clings to your teeth like a delicate, sugary mist. Consumed during a tense encounter or after a scathing defeat, it grants you a blissful amnesia, erasing the memory of recent combat and reducing enemy attack damage by 50% for three rounds. However, there's always a chance you'll forget the names of your party members, leaving you to wonder why they seem so familiar—or not at all.",
    "category": "consumables",
    "price": 130000,
    "icon": "🧠",
    "stock": 10,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "blissful_amnesia",
      "reduced_enemy_damage"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "magical_messenger_bird",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blissful Amnesia",
        "rules": "When consumed, the Frosting of Forgetfulness grants you a temporary amnesia affecting your memory of recent combat. This effect lasts until the end of your next long rest. There is a 30% chance that you will also forget the names of any party members with whom you were recently adventuring."
      },
      {
        "title": "Reduced Enemy Damage",
        "rules": "For three rounds after consumption, all damage you take from enemy attacks is reduced by 50%. This effect ends if you are incapacitated or when its duration expires."
      }
    ],
    "levelRequirementReason": "The Frosting of Forgetfulness requires no specific level as it provides a temporary and situational benefit.",
    "vendorReason": "As the Pastry Palace is known for its whimsical and magical confections, they are trusted to offer such an enchanting and somewhat unpredictable treat.",
    "shippingDetail": "The Frosting of Forgetfulness arrives in a specially enchanted container that ensures it remains potent during transit.",
    "usage": {
      "activation": "Eaten as a free action",
      "duration": "Until the end of your next long rest or until incapacitated, whichever comes first",
      "endsWhen": "If you are incapacitated or at the end of a long rest",
      "charges": "Unlimited; can be consumed once per day"
    },
    "priceReason": "The Frosting of Forgetfulness is priced moderately as it offers situational benefits that can be life-saving in certain combat scenarios, but are not overpowered.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T23:56:13.425751+00:00",
    "aiReviewedAt": "2026-07-23T23:56:13.425751+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_golden_rolling_pin": {
    "id": "leclaire_isle_item_golden_rolling_pin",
    "name": "Golden Rolling Pin of Precise Strikes",
    "description": "Forged by the legendary Dough King himself, this rolling pin gleams with golden hues that seem to dance in the light. Its rhythmic strikes are said to be blessed by the gods of prosperity and craft, amplifying your attacks and imbuing you with a doughy determination that fortifies your resolve. It not only enhances your combat prowess but also grants you an edge when persuasion is needed, as if the very essence of pastries infuses your words with charm.",
    "category": "equipment",
    "price": 4000,
    "icon": "🥠",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "amplify_attack_damage",
      "grant_resistance_to_stuns"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Swift Squirrel Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Amplify Attack Damage",
        "rules": "When you use this rolling pin to make a melee attack, increase the damage dealt by +1d6. This effect lasts until your next short or long rest."
      },
      {
        "title": "Grant Resistance to Stuns",
        "rules": "On a critical hit with this item, you have advantage on saving throws against being stunned for 1 minute. You can only use this effect once per long rest."
      }
    ],
    "levelRequirementReason": "The precision and strength needed to wield the Golden Rolling Pin of Precise Strikes effectively are challenging.",
    "vendorReason": "Sweet Supplies is known for its connection with artisans and legendary items, making it a trusted vendor for such a rare piece.",
    "shippingDetail": "Ships within the week via Swift Squirrel Express; special handling required due to fragile nature.",
    "usage": {
      "activation": "On your action or as a bonus action when making a melee attack.",
      "duration": "Until your next short or long rest.",
      "endsWhen": "Once per long rest after using it on a critical hit.",
      "charges": "Unlimited; does not expend charges."
    },
    "priceReason": "Balanced at this price to reflect the item's rarity and the unique benefits it provides without being overpowered.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:03:55.916817+00:00",
    "aiReviewedAt": "2026-07-25T00:03:55.916817+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_temporal_loaf": {
    "id": "doughnut_hole_temporal_loaf",
    "name": "Chronal Crumble Bread",
    "description": "This loaf of bread, known as Chronal Crumble Bread, appears slightly out of sync with reality. Each crumb offers a fleeting glimpse into possible futures and past echoes, but consuming too much can cause unsettling temporal distortions. The bread's texture is oddly cohesive yet fragile, as if it has been shaped by the very fabric of time itself. A single bite grants a chance to rewind time by one turn (10% chance), while its resistance to temporal effects offers a subtle advantage in unpredictable situations.",
    "category": "equipment",
    "price": 14000,
    "icon": "⏳",
    "stock": 15,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Temporal Glimpse",
      "Temporal Resilience"
    ],
    "vendor": "void_vendor",
    "shippedBy": "quantum_tunnel",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Temporal Glimpse",
        "rules": "On activation, the consumer has a 10% chance to rewind time by one turn. This effect is instantaneous and does not require an action or reaction."
      },
      {
        "title": "Temporal Resilience",
        "rules": "The Chronal Crumble Bread provides minor resistance to temporal manipulation effects, granting advantage on Wisdom saving throws against such effects."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 12 due to its complex temporal mechanics and the risk of potential distortions.",
    "vendorReason": "The Void Vendor, being well-versed in esoteric knowledge, sources rare items like this Chronal Crumble Bread from realms beyond time and space.",
    "shippingDetail": "Shipped via quantum tunnel, arrival is instantaneous but requires special handling to maintain temporal integrity.",
    "usage": {
      "activation": "Instantaneous action upon consumption",
      "duration": "One turn or until the consumer acts again (whichever comes first)",
      "endsWhen": "The effect ends when the consumer takes a different action",
      "charges": "Unlimited uses, but only one chance per day"
    },
    "priceReason": "The Chronal Crumble Bread is priced at 1000 XP due to its rarity and the complex temporal mechanics involved.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T23:56:41.120377+00:00",
    "aiReviewedAt": "2026-07-23T23:56:41.120377+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_elemental_amulet": {
    "id": "teyvat_item_elemental_amulet",
    "name": "Wario’s Premium Elemental Resonance Amulet",
    "description": "The Wario’s Premium Elemental Resonance Amulet is a meticulously crafted piece of jewelry forged with Wario's own hands from rare, enchanted metals. Its core glows with a vibrant light that shifts hues depending on your chosen element, ensuring you're always attuned to the primal forces around you. This amulet not only amplifies elemental damage by 5% but also grants a chance to trigger elemental reactions more reliably (15%), making every blow count in your battles.",
    "category": "equipment",
    "price": 14000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Elemental Amplification",
      "Enhanced Elemental Reactions"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "lightning_bird",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Elemental Amplification",
        "rules": "Increase elemental damage by 5%. This effect is always active and does not require activation."
      },
      {
        "title": "Enhanced Elemental Reactions",
        "rules": "There's a 15% chance to trigger an elemental reaction with each attack or spell. The reaction ends if you take an action that breaks concentration, such as casting another spell or engaging in combat."
      }
    ],
    "levelRequirementReason": "This amulet is crafted for those who have already begun to master the elements and require a tool that can enhance their abilities beyond basic training.",
    "vendorReason": "Inazuma Imports deals exclusively in items from Wario's extensive network of blacksmiths, ensuring only the finest craftsmanship reaches adventurers.",
    "shippingDetail": "Shipped by the swift and reliable Lightning Bird Courier, known for its speed and reliability in delivering enchanted goods.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous with each attack or spell cast.",
      "endsWhen": "The reaction ends if you take an action that breaks concentration.",
      "charges": "Unlimited, recharges on a short rest."
    },
    "priceReason": "The amulet's balanced price reflects its moderate power and the skill required to craft such a piece of jewelry.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:56:29.947952+00:00",
    "aiReviewedAt": "2026-07-23T23:56:29.947952+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_performance_potion": {
    "id": "animatopia_performance_potion",
    "name": "Rhythmic Reverie Brew",
    "description": "Rhythmic Reverie Brew is a vibrant potion that transforms you into an impromptu maestro. Swirls of neon light and rhythmic patterns dance around your fingertips as you imbibe, granting you a dazzling display of skill. Your performance can charm listeners within a 10-foot radius for up to 1 minute, or it can be used as a swift action to dash gracefully through the crowd at double your normal speed. Wario's infamous drumming echoes in the background, but you're too focused on the music to notice the mess.",
    "category": "consumables",
    "price": 240,
    "icon": "🎶",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "charming_performance",
      "dashing_dance"
    ],
    "vendor": "forest_market",
    "shippedBy": "flying_parrot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charming Performance",
        "rules": "As a swift action, you can cast Charm within a 10-foot radius. This effect lasts for up to 1 minute and has a save DC of 13."
      },
      {
        "title": "Dashing Dance",
        "rules": "You gain double your movement speed as a bonus action until the start of your next turn, but this effect ends if you take damage."
      }
    ],
    "levelRequirementReason": "Suitable for beginners who wish to add a touch of performance magic to their adventures.",
    "vendorReason": "The forest market is known for its eclectic collection of potions and elixirs, including this one that promises a magical twist to any performance.",
    "shippingDetail": "Ships via the fastest flying parrots, ensuring your potion arrives in perfect condition.",
    "usage": {
      "activation": "swift action or bonus action",
      "duration": "up to 1 minute for Charming Performance; until start of next turn for Dashing Dance",
      "endsWhen": "Charm ends if a save is successful; Dashing Dance ends if you take damage",
      "charges": "unlimited"
    },
    "priceReason": "Balanced at this price, the Rhythmic Reverie Brew offers an excellent value for its unique and versatile performance effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T23:56:38.515101+00:00",
    "aiReviewedAt": "2026-07-23T23:56:38.515101+00:00",
    "aiReviewVersion": 1
  },
  "internet_quantum_glitch": {
    "id": "internet_quantum_glitch",
    "name": "Reality Distortion Field Generator",
    "description": "The Reality Distortion Field Generator is a salvaged quantum processor encased in a sleek, metallic sheath that hums with an eerie glow when activated. This device can warp your immediate environment by shifting terrain and creating random teleportation effects—both of which are unpredictable and potentially hazardous if used recklessly or for too long. Use it with caution, as prolonged exposure may cause spatial instability around you, drawing unwanted attention from the Algorithmic Sentinels.",
    "category": "forbidden",
    "price": 4000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "random_terrain_shift",
      "chance_of_teleportation"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Black Market Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Random Terrain Shift",
        "rules": "Activating this device causes a 10-foot-radius area around you to shift unpredictably, with a random terrain feature (such as a mud puddle or tripwire) appearing within the area. This effect lasts for 1 minute and has no save DC but is limited to once per short rest."
      },
      {
        "title": "Chance of Teleportation",
        "rules": "There's a 25% chance that activating this device will cause you or someone nearby to be teleported up to 30 feet away, instantly. This effect has no save DC and can occur multiple times per long rest."
      }
    ],
    "levelRequirementReason": "This powerful device requires a high degree of expertise and control to use safely without causing widespread chaos or drawing the attention of Algorithmic Sentinels.",
    "vendorReason": "The cyber market caters to those who need unique, potentially dangerous gadgets like this one for their illegal activities or experiments.",
    "shippingDetail": "Shipped discreetly by the Black Market Courier with a 24-hour delivery time but requires a successful Deception check (DC 15) to avoid drawing unwanted attention from Algorithmic Sentinels.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect, followed by a 1-minute duration of unpredictable terrain shifts and teleportation chances that reset after the end of each short or long rest.",
      "endsWhen": "The effects end when you finish a short or long rest, or if you deactivate it as an action.",
      "charges": "Unlimited charges; however, prolonged use may cause spatial instability."
    },
    "priceReason": "The device's rarity and potential for causing significant disruptions in reality justify its high price of 1000 XP.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T23:57:28.848351+00:00",
    "aiReviewedAt": "2026-07-23T23:57:28.848351+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_artifact": {
    "id": "internet_meme_artifact",
    "name": "Distorted Distraction Orb",
    "description": "This peculiar orb glows with a flickering, multicolored light that pulses erratically, as if it has captured an entire internet meme storm in its glass casing. When activated, it releases a cacophony of distorted sounds and flashing images, designed to overwhelm foes' senses. The Distorted Distraction Orb is said to have been crafted by Pixel Shop's most eccentric alchemist using salvaged electronics from ancient digital devices. Warning: It may cause temporary blindness or severe disorientation in those exposed to its chaotic burst.",
    "category": "curiosities",
    "price": 14000,
    "icon": "😂",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "high_distraction",
      "chance_of_target_panic"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Courier of the Digital Age",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "High Distraction",
        "rules": "When thrown, the orb creates a burst of flashing images and distorted sounds that targets all creatures within a 20-foot radius. This effect has a save DC of 15. Creatures failing their saving throw are blinded for 1 minute or until they succeed on another saving throw against this magic."
      },
      {
        "title": "Chance of Target Panic",
        "rules": "Each creature that fails its saving throw also must make a Wisdom saving throw with a DC of 14. On a failed save, the target becomes frightened for up to 24 hours or until it successfully attacks another creature."
      }
    ],
    "levelRequirementReason": "This item is designed for lower-level adventurers who need a distraction tool without overpowered abilities.",
    "vendorReason": "Pixel Shop specializes in crafting and distributing magical curiosities related to internet phenomena, making this orb an ideal addition to their inventory.",
    "shippingDetail": "The item is shipped via a special delivery that ensures it arrives intact, protected from electromagnetic interference.",
    "usage": {
      "activation": "Throw as an action",
      "duration": "Instantaneous effect; ends when used or interrupted by another creature's successful attack",
      "endsWhen": "Used or interrupted by a successful hit from any weapon",
      "charges": "Unlimited, but requires a short rest to stabilize after 3 uses"
    },
    "priceReason": "The balanced price reflects the item's moderate power and rarity, suitable for lower-level adventurers.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:57:32.830675+00:00",
    "aiReviewedAt": "2026-07-23T23:57:32.830675+00:00",
    "aiReviewVersion": 1
  },
  "internet_glitch_packet": {
    "id": "internet_glitch_packet",
    "name": "Viral Cascade Bomb",
    "description": "The Viral Cascade Bomb is a shimmering, iridescent packet that pulses with corrupted data. When detonated, it unleashes a chaotic wave of memes that confuses enemies for three turns, leaving them momentarily distracted and vulnerable to attacks. The bomb's effects are so potent that they might even turn foes into dancing GIFs, much to the delight of Wario. This rare item is a must-have for any prankster or social engineer looking to disrupt their opponents.",
    "category": "consumables",
    "price": 960,
    "icon": "💥",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Meme-Based Explosion",
      "Confusion"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Meme-Based Explosion",
        "rules": "When activated, the Viral Cascade Bomb deals 1d6 necrotic damage to a target within 5 feet and confuses it for up to three turns. The confused creature must make a Wisdom saving throw (DC 13) or become distracted. On their next turn, they have disadvantage on all attacks and ability checks."
      },
      {
        "title": "Confusion",
        "rules": "The target is confused for the duration of this effect. During this time, it has disadvantage on attack rolls, saving throws, and ability checks. Additionally, any creature within 5 feet of the confused target can use its reaction to push the target up to 10 feet away from them."
      }
    ],
    "levelRequirementReason": "The Viral Cascade Bomb requires a minimum level of 3 due to its complexity and the strategic importance of using such an item effectively in combat.",
    "vendorReason": "The Data Dealer specializes in unique and rare tech items, making them the perfect vendor for this meme-driven explosive.",
    "shippingDetail": "Ships within three days via Drone Delivery's secure courier service.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the target no longer meets the conditions for confusion or the duration expires.",
      "charges": "Recharge after a short rest"
    },
    "priceReason": "The Viral Cascade Bomb is priced at 1000 XP due to its unique effects and tactical utility in combat.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:04:13.316622+00:00",
    "aiReviewedAt": "2026-07-25T00:04:13.316622+00:00",
    "aiReviewVersion": 1
  },
  "internet_sentinel_armor": {
    "id": "internet_sentinel_armor",
    "name": "Pixel Sentinel Plate",
    "description": "Forged from solidified data streams and guarded by a digital sprite, Pixel Sentinel Plate is a collection of fragmented code that weaves together seamlessly to provide resilience against the constant barrage of information. Its surface hums with latent energy, pulsing softly in response to ambient data waves. This armor not only increases your defensive capabilities but also grants you resistance to psychic damage, making it an indispensable companion for any digital crusader.",
    "category": "equipment",
    "price": 4000,
    "icon": "🛡️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Resilience Against Information",
      "Psychic Resistance"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Laser Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Resilience Against Information",
        "rules": "While wearing Pixel Sentinel Plate, you have advantage on saving throws against being charmed or frightened by digital entities. Additionally, the armor increases your Armor Class by +3."
      },
      {
        "title": "Psychic Resistance",
        "rules": "You gain resistance to psychic damage and have a 10% chance each round to reflect minor magical attacks directed at you, forcing the attacker to make a Wisdom Saving throw (DC 12) or suffer no effect."
      }
    ],
    "levelRequirementReason": "The armor requires a minimum of 8th level to ensure that its digital sprite can effectively assist in defending against information overload.",
    "vendorReason": "The pixel_shop specializes in cutting-edge and rare tech gear, making Pixel Sentinel Plate an ideal addition to their offerings.",
    "shippingDetail": "Delivered instantaneously via the Laser Courier's high-speed data channels.",
    "usage": {
      "activation": "Passive effect. No activation required.",
      "duration": "Instantaneous and ongoing while worn.",
      "endsWhen": "The armor is removed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare material composition and unique digital properties.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:57:20.184467+00:00",
    "aiReviewedAt": "2026-07-23T23:57:20.184467+00:00",
    "aiReviewVersion": 1
  },
  "internet_mythic_wormhole": {
    "id": "internet_mythic_wormhole",
    "name": "Reality Fracture Core",
    "description": "The Reality Fracture Core is a pulsating obsidian shard that glows with an eerie digital pulse. Crafted from the remnants of ancient internet data, this relic contains a miniature, self-aware wormhole capable of sending its bearer to any point in cyberspace—or worse, into a dimension where reality itself warps and distorts. The core's unpredictable nature makes it both a tool for exploration and a source of dire peril; Wario warns that misuse could lead to catastrophic consequences.",
    "category": "curiosities",
    "price": 130000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "godly",
    "effects": [
      "Data Surge",
      "Reality Warp"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Dimensional Shipping",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Data Surge",
        "rules": "When activated, the user gains temporary hit points equal to their level + Constitution modifier. This effect lasts for a number of minutes equal to your Intelligence modifier (minimum 1 minute). The core can be used once per long rest."
      },
      {
        "title": "Reality Warp",
        "rules": "There is a 10% chance each use that the user will be transported to an unpredictable location within the internet. The destination could be any part of cyberspace, including dangerous or hostile areas. This effect has no save DC and can only occur once per day."
      }
    ],
    "levelRequirementReason": "Users must have a firm grasp on their surroundings to safely harness the core's power.",
    "vendorReason": "The cyber market specializes in exotic and dangerous artifacts from the digital realm, making it the ideal vendor for such a volatile item.",
    "shippingDetail": "Due to the core's unstable nature, it must be shipped via Dimensional Shipping's secure quantum courier service, which ensures safe arrival within one week of purchase.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Instantaneous (Data Surge), varies (Reality Warp)",
      "endsWhen": "At the end of each long rest (Data Surge), after one day (Reality Warp), or when used again (both effects)",
      "charges": "Unlimited, but can only be used once per long rest for Data Surge"
    },
    "priceReason": "The core's unpredictable nature and the risk it poses to users justify its moderate price in experience points.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T23:58:03.161150+00:00",
    "aiReviewedAt": "2026-07-23T23:58:03.161150+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sticky_dough_boots": {
    "id": "leclaire_isle_item_sticky_dough_boots",
    "name": "Sticky Dough Boots",
    "description": "The Sticky Dough Boots are crafted from a dough that resists even the most fervent baking attempts, making them as resilient as they are sticky. These boots allow you to climb walls and ceilings with ease, and once on your feet, they adhere so well that only the most determined baker can pry them off. Be cautious though, as they leave a lasting impression on any surface they touch, from stone to wood.",
    "category": "equipment",
    "price": 14000,
    "icon": "🥾",
    "stock": 5,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "climbing_abilities",
      "adhesive_boots"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift_wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Adhesive Boots",
        "rules": "You gain the ability to climb walls and ceilings as if you had the Climb proficiency. The boots adhere to any surface, allowing you to move at half speed on them without falling unless a successful DC 15 Strength (Athletics) check is made."
      },
      {
        "title": "Climbing Abilities",
        "rules": "While wearing these boots, you can use an action to cause your boots to release their adhesive grip. You have advantage on Dexterity saving throws against effects that would make you fall while using the boots' adhesive properties."
      }
    ],
    "levelRequirementReason": "The Sticky Dough Boots are designed for adventurers who need to navigate challenging environments but lack the necessary skills.",
    "vendorReason": "Dough Depot is renowned for its innovative and quirky products, making them the perfect vendor for these uniquely useful boots.",
    "shippingDetail": "The swift wagon ensures that these boots are delivered fresh from the bakery to your doorstep in record time.",
    "usage": {
      "activation": "Action or Bonus Action (to release grip)",
      "duration": "Instantaneous with a use limit of once per long rest",
      "endsWhen": "You fall, lose concentration, or remove the boots from your feet",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Sticky Dough Boots are priced at 1000 XP to reflect their unique and useful abilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:57:57.626553+00:00",
    "aiReviewedAt": "2026-07-23T23:57:57.626553+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_forbidden_frosting_potion": {
    "id": "leclaire_isle_item_forbidden_frosting_potion",
    "name": "Forbidden Frosting Potion",
    "description": "Forged from the arcane frost of Le Claire Isle's enchanted pastry caves, this potion exudes a chilling sweetness that can only be described as otherworldly. Sip it and feel a numbing cold spread through your body; every creature within 30 feet is drawn irresistibly towards you, their senses clouded by an illusory allure. The taste lingers for but a moment before fading into a memory of sugary delight that leaves them confused and disoriented.",
    "category": "forbidden",
    "price": 130000,
    "icon": "😈",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "attracts_monsters",
      "illusive_sweetness"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "mystic_squirrel",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Attract Monsters",
        "rules": "As an action, you drink the potion. Every creature within a 30-foot radius must make a Wisdom saving throw (DC 15). On a failed save, they are charmed by you for 1 minute or until they take damage. The effect ends if you move more than 30 feet away."
      },
      {
        "title": "Illusive Sweetness",
        "rules": "The potion grants you the ability to temporarily control your taste, making it seem as though your food is exceptionally sweet. This lasts for 1 minute. Creatures within 30 feet who consume food with you are also affected and become confused (as if under the effect of a Confusion spell) until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to control the effects without succumbing to the illusory sweetness.",
    "vendorReason": "The Pastry Palace is known for its mastery of culinary enchantments and arcane pastries, making it the only legitimate source of such a powerful potion.",
    "shippingDetail": "Shipped by the mystical squirrel, who delivers with utmost precision and care, ensuring no spillage or tampering during transit.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per use",
      "endsWhen": "The effect ends if you move more than 30 feet away from the affected area or if a creature takes damage.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its mythic rarity and controlled effect duration.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:57:49.812013+00:00",
    "aiReviewedAt": "2026-07-23T23:57:49.812013+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_whimsical_rolling_pin": {
    "id": "leclaire_isle_item_whimsical_rolling_pin",
    "name": "Whimsical Rolling Pin",
    "description": "The Whimsical Rolling Pin is a marvel of artisanal design, crafted from polished oak and enchanted by the whimsical artisans of LeClaire Isle. Its surface gleams with subtle runes that whisper in the language of minor magic. With a flick of your wrist, you can subtly alter the texture or shape of objects within reach, creating brief illusions to distract foes or aid allies. Should you attempt to roll up an enemy, the pin merely bounces harmlessly away.",
    "category": "curiosities",
    "price": 240,
    "icon": "🌀",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "minor_shape_alteration",
      "texture_manipulation"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "delivery_goat",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Shape Alteration",
        "rules": "You can use your action to subtly alter the shape of a non-magical object within reach for up to 1 foot in diameter. The alteration lasts until you end it as part of this action, with no save required."
      },
      {
        "title": "Texture Manipulation",
        "rules": "By using a bonus action, you can change the texture of an object within reach, making it appear shiny or matte. This effect persists for 1 minute unless dispelled by your action."
      }
    ],
    "levelRequirementReason": "Beginners to advanced magic users alike can appreciate this versatile tool.",
    "vendorReason": "Sweet Supplies prides itself on offering magical curiosities that enhance the everyday life of adventurers and merchants.",
    "shippingDetail": "Delivered by a friendly goat, known for its impeccable timing and gentle demeanor.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Minor Shape Alteration) / 1 minute (Texture Manipulation)",
      "endsWhen": "As part of the action or reaction that ends it, respectively",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with rare runes and enchanted by skilled artisans, this rolling pin is a prized possession among those who value versatility in their magical arsenal.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:58:17.599183+00:00",
    "aiReviewedAt": "2026-07-23T23:58:17.599183+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_honeycomb_charm": {
    "id": "leclaire_isle_item_honeycomb_charm",
    "name": "Honeycomb Heart Charm",
    "description": "The Honeycomb Heart Charm is a delicately crafted artifact made from the finest honeycomb, said to be favored by the Dough Folk Queen. When worn, it temporarily enhances one's charisma, allowing for more persuasive and charming interactions. Additionally, this charm has a unique ability to attract bees, which might share their nectar, healing you for 1d4 hit points. A whimsical relic that brings both social grace and sweet rewards.",
    "category": "curiosities",
    "price": 240,
    "icon": "🍯",
    "stock": 75,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "charisma_boost",
      "healing_bee_interaction"
    ],
    "vendor": "dough_depot",
    "shippedBy": "rolling_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "The wearer gains a +1 bonus to Charisma (Persuasion) checks for the duration of one short rest. This effect is passive and does not require an action."
      },
      {
        "title": "Healing Bee Interaction",
        "rules": "When in close proximity to bees, there's a 50% chance that a bee will share its nectar, healing the wearer for 1d4 hit points. This effect requires no action and can occur once per day."
      }
    ],
    "levelRequirementReason": "This charm is suitable for beginners due to its simple design and versatile benefits.",
    "vendorReason": "Dough Depot specializes in items related to the Dough Folk, including those that enhance one's social interactions and connection with nature.",
    "shippingDetail": "Delivered by a rolling cart, which ensures fresh and cheerful delivery straight from the heart of the Dough Folk village.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of one short rest or until removed.",
      "endsWhen": "The charm's effects wear off at the end of a long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This balanced price reflects the item's unique combination of social and healing benefits, making it a valuable yet fair investment for adventurers.",
    "priceOriginal": 180,
    "priceReviewedAt": "2026-07-23T23:58:05.912190+00:00",
    "aiReviewedAt": "2026-07-23T23:58:05.912190+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_dough_whisperer_service": {
    "id": "leclaire_isle_item_dough_whisperer_service",
    "name": "Dough Whisperer Consultation",
    "description": "The Dough Whisperer Consultation, a pastry connoisseur's dream, is a crumbly, parchment-like service that can be summoned to analyze your latest baking creation. This tiny, expertly folded consultant will knead and taste your dough, revealing if it's too dry, too sweet, or simply lacking in flavor depth. With their precise analysis, you'll learn exactly what tweaks are needed for perfection—like having a master pastry chef critique your work.",
    "category": "services",
    "price": 960,
    "icon": "💬",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "reveals_flavor_weakness",
      "improves_recipe_quality"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "delivery_pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Flavor Weakness",
        "rules": "When the Dough Whisperer is consulted, it kneads and tastes the dough to reveal a single flavor weakness. This can be either sweetness, saltiness, bitterness, or blandness. The consultant provides a specific suggestion for improvement."
      },
      {
        "title": "Improves Recipe Quality",
        "rules": "The Dough Whisperer's analysis grants you advantage on all checks and rolls related to baking your creation for 1 hour after the consultation. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "This service is accessible to beginners, as it simplifies complex baking challenges into digestible lessons.",
    "vendorReason": "Pastry Palace specializes in teaching the art of pastry making and thus offers this unique consultation to help bakers improve their craft.",
    "shippingDetail": "The Dough Whisperer arrives via a swift delivery pony, ensuring it is delivered fresh and ready for analysis within an hour of purchase.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Instantaneous effect; the consultant's analysis is immediate upon activation",
      "endsWhen": "The effect ends when you use it again or after one hour, whichever comes first",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This price reflects the unique expertise and precision required to provide such a detailed analysis of baking.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:58:40.894589+00:00",
    "aiReviewedAt": "2026-07-23T23:58:40.894589+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_golden_croissant_blade": {
    "id": "leclaire_isle_item_golden_croissant_blade",
    "name": "Golden Croissant Blade",
    "description": "The Golden Croissant Blade is a marvel of culinary and martial craftsmanship forged from an impossibly golden croissant, rumored to have been crafted by the chef of Le Claire Isle. Its blade is sharp enough to slice through even the toughest armor with ease, yet it clings to foes like sticky frosting, leaving them momentarily immobilized. The blade's sugary surface ensures that any opponent struck must first lick it clean, giving you a brief respite.",
    "category": "equipment",
    "price": 4000,
    "icon": "🥐",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Bleeding Damage",
      "Sticky Grip"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "flying_cake",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Bleeding Damage",
        "rules": "When the Golden Croissant Blade strikes an enemy, they must succeed on a DC 15 Dexterity saving throw or take an additional 1d6 slashing damage at the start of their next turn."
      },
      {
        "title": "Sticky Grip",
        "rules": "Upon hitting an opponent, the blade applies a sticky effect that reduces the target's speed by 10 feet until they succeed on a DC 15 Strength saving throw. This effect lasts for up to one minute or until the target cleans the blade."
      }
    ],
    "levelRequirementReason": "Crafted from an ancient recipe, this weapon requires significant skill and experience to wield effectively.",
    "vendorReason": "Sweet Supplies specializes in unique items that blend the exotic with the mundane, making it a fitting vendor for such a whimsical yet potent weapon.",
    "shippingDetail": "Delivered by a fleet of flying cakes, which ensures that the blade arrives fresh and ready to slice through enemies.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous",
      "endsWhen": "The target cleans or destroys the sticky effect with a successful saving throw.",
      "charges": "Unlimited"
    },
    "priceReason": "This blade combines culinary artistry with martial prowess, making it a rare and valuable item for those who can master its unique properties.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T00:04:14.646540+00:00",
    "aiReviewedAt": "2026-07-25T00:04:14.646540+00:00",
    "aiReviewVersion": 1
  },
  "fate_oracle_reading": {
    "id": "fate_oracle_reading",
    "name": "A Glimpse of Ruin",
    "description": "A Glimpse of Ruin is a cryptic scroll inscribed with runes that shimmer faintly in the dark. The Fate Forge's Oracles crafted it from the dust of ancient prophecies and bone fragments, promising visions both harrowing and prescient. When you unfold the scroll, a spectral whisper may guide your next words or actions, offering fleeting wisdom or a cryptic clue to an unsolved mystery, though the future revealed is not without its unsettling truths.",
    "category": "services",
    "price": 960,
    "icon": "🔮",
    "stock": 30,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Wisdom Boost",
      "Prophecy Visions"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Fate Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wisdom Boost",
        "rules": "At your next turn, gain a +2 bonus to Wisdom saving throws and ability checks. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Prophecy Visions",
        "rules": "Roll 1d6 to determine if you receive a cryptic prophecy or a warning. On a result of 4, 5, or 6, you gain a +1 bonus to Insight checks for the next hour."
      }
    ],
    "levelRequirementReason": "This scroll is accessible to adventurers just starting their journey.",
    "vendorReason": "The Fate Forge is known for its connection with the Oracles and their ability to craft such scrolls.",
    "shippingDetail": "The scroll must be delivered by a Fate Messenger to ensure it arrives in perfect condition.",
    "usage": {
      "activation": "Read as an action at any time.",
      "duration": "Instantaneous effects; Wisdom Boost lasts until the end of your next long rest, Prophecy Visions is active for one hour.",
      "endsWhen": "The effects expire naturally or are interrupted by specific events that negate them.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item offers significant utility and a unique narrative element, justifying its cost.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:04:25.119397+00:00",
    "aiReviewedAt": "2026-07-25T00:04:25.119397+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_club_banner_of_chaos": {
    "id": "kivotos_item_club_banner_of_chaos",
    "name": "Banner of Chaotic Inspiration",
    "description": "The Banner of Chaotic Inspiration is a monstrously large banner bearing a chaotic unicorn and an enigmatic question mark. Crafted from tattered silk and adorned with runes that hum faintly, it radiates an aura of unpredictability. This artifact is known to inspire bursts of creativity in performers, often leading to unintended but exhilarating results. Its unpredictable nature can be both a boon and a bane for those nearby, as it grants advantage on Charisma checks for impromptu performances and creative problem-solving rolls (DM's discretion). However, this chaotic energy also causes minor distractions within its vicinity, affecting concentration and focus.",
    "category": "curiosities",
    "price": 960,
    "icon": "🎉",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "+1 to Charisma checks when attempting impromptu performances",
      "Advantage on rolls involving creative solutions"
    ],
    "vendor": "club_supply",
    "shippedBy": "swift courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Impromptu Performance Boost",
        "rules": "Activates as a bonus action within 5 feet. Grants advantage on Charisma checks for impromptu performances. Ends when the user completes their performance or takes another bonus action."
      },
      {
        "title": "Creative Problem-Solving",
        "rules": "Active at all times, grants advantage on rolls involving creative solutions (DM's discretion). This effect is not cumulative with other sources of advantage and ends after 10 minutes unless the user takes a short or long rest."
      }
    ],
    "levelRequirementReason": "This banner can inspire even those who are relatively inexperienced, making it accessible to lower-level characters.",
    "vendorReason": "The Chaos Club is known for its innovative and chaotic performances, so they naturally stock items that enhance creativity and spontaneity.",
    "shippingDetail": "Ships via the Swift Courier Service; delivery can be expedited for an additional fee.",
    "usage": {
      "activation": "Bonus action to activate or use within range.",
      "duration": "Until end of performance or taken another bonus action, and creative problem-solving advantage lasts for 10 minutes unless interrupted by rest.",
      "endsWhen": "Ends when the user completes their impromptu performance or takes a bonus action, or after 10 minutes of continuous use.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The banner's unpredictable yet effective inspiration and chaotic nature justify its cost as a balanced uncommon item.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:58:33.832184+00:00",
    "aiReviewedAt": "2026-07-23T23:58:33.832184+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_academy_scroll_of_insight": {
    "id": "kivotos_item_academy_scroll_of_insight",
    "name": "Academy Scroll of Insight",
    "description": "This ancient scroll, penned by a legendary Kivotos scholar named Thalorin, bears his sigil and the arcane symbols of forgotten lore. Despite being centuries old and handled by Wario, it remains surprisingly well-preserved. Unroll this for a moment of clarity where your mind sharpens, revealing hidden potential within you. It is said that Thalorin used this scroll to unlock his greatest achievements, and now, anyone who dares can wield its power.",
    "category": "faction",
    "price": 14000,
    "icon": "📜",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Unlock Hidden Potential",
      "Arcane Insight"
    ],
    "vendor": "academy_armory",
    "shippedBy": "messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock Hidden Potential",
        "rules": "The user gains advantage on one Wisdom check of their choice. This effect lasts for 1 hour and can be used once per long rest."
      },
      {
        "title": "Arcane Insight",
        "rules": "For the next 8 hours, the user has advantage on one Intelligence or Wisdom saving throw. This effect can only be activated once every 3 days."
      }
    ],
    "levelRequirementReason": "This scroll is accessible to all scholars and adventurers who wish to harness its ancient power.",
    "vendorReason": "The academy armory proudly houses this item as a beacon of Kivotos' scholarly legacy, ensuring that knowledge can be shared with the world.",
    "shippingDetail": "Delivered by the swift messengers of Kivotos, this scroll arrives in perfect condition.",
    "usage": {
      "activation": "Read and unroll the scroll to activate its effects.",
      "duration": "One hour for 'Unlock Hidden Potential'; eight hours for 'Arcane Insight'.",
      "endsWhen": "The duration ends or when the user completes a long rest.",
      "charges": "Unlimited, but can only be used once per day."
    },
    "priceReason": "This scroll is priced at 1000 XP due to its ancient design and scholarly value. It's a one-time use item that offers significant benefits.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T23:59:00.953787+00:00",
    "aiReviewedAt": "2026-07-23T23:59:00.953787+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_layering_stone": {
    "id": "grand_country_layering_stone",
    "name": "Fractured Foundation",
    "description": "The Fractured Foundation, a jagged stone of Grand Country origin, appears to shimmer and rearrange its facets in a mesmerizing dance of shifting planes. Its hidden layers hint at secrets from forgotten ages, yet unwary hands may find themselves ensnared by the stone's unstable geometry, creating small rifts that distort reality around them. Known for its minor healing properties, it offers weary travelers respite on their journeys through treacherous lands.",
    "category": "curiosities",
    "price": 240,
    "icon": "🧱",
    "stock": 88,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "rift_creation",
      "healing_effect"
    ],
    "vendor": "layer_market",
    "shippedBy": "slow_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rift Creation",
        "rules": "Using the stone as an action creates a small rift in space that lasts for 1 minute. The rift has a radius of 5 feet centered on you and causes creatures within it to be disoriented, requiring a DC 12 Wisdom saving throw or being knocked prone for the duration."
      },
      {
        "title": "Healing Effect",
        "rules": "The stone heals 1d4+1 hit points at the start of each of your turns. This effect lasts until you finish a long rest, and it can only be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "A beginner's knowledge of Grand Country lore suggests that even novices should approach the stone with caution.",
    "vendorReason": "The Layer Market, a hub for rare curiosities and ancient artifacts, often sells items that are both useful and slightly dangerous.",
    "shippingDetail": "Delivered by slow delivery, the stone arrives in pristine condition but may show signs of its inherent instability upon arrival.",
    "usage": {
      "activation": "action",
      "duration": "1 minute",
      "endsWhen": "the use ends when the effect is used or a creature fails their saving throw",
      "charges": "unlimited, as it regenerates after each long rest"
    },
    "priceReason": "The stone's rarity and the risks involved in using it justify its high price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:59:26.924629+00:00",
    "aiReviewedAt": "2026-07-23T23:59:26.924629+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_harmony_potion": {
    "id": "equestria_item_harmony_potion",
    "name": "Potion of Unified Bliss",
    "description": "The Potion of Unified Bliss is crafted by the skilled alchemists of Equestria. This rare elixir not only restores health and mana but also grants a profound sense of harmony, temporarily aligning the drinker's spirit with the natural order. Consumed, it heals 50 hit points and removes all negative status effects, offering a brief respite from turmoil. Wario’s experience suggests it might also inspire an overwhelming craving for sweets, but in the realm of Equestria, such whimsy is part of its charm.",
    "category": "consumables",
    "price": 4000,
    "icon": "🌈",
    "stock": 28,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Restores Health and Mana",
      "Removes Negative Status Effects"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Royal Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing",
        "rules": "When consumed, this potion restores 50 hit points to the drinker. It also removes all negative status effects immediately."
      },
      {
        "title": "Harmony Boost",
        "rules": "For a duration of two turns, the drinker gains +2 to Charisma checks and saves. This effect is limited to once per day."
      }
    ],
    "levelRequirementReason": "This potion is accessible to all adventurers, making it a versatile tool for any level of hero.",
    "vendorReason": "Known for their extensive knowledge in alchemy and healing arts, Crystal Empire's potions are sought after by many.",
    "shippingDetail": "Delivered with utmost care via the Royal Messenger service, ensuring timely arrival.",
    "usage": {
      "activation": "Consume as a bonus action",
      "duration": "2 turns",
      "endsWhen": "Effect duration expires or potion is consumed",
      "charges": "Unlimited"
    },
    "priceReason": "The rare ingredients and intricate alchemical processes involved in its creation justify this fair value.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:59:14.336416+00:00",
    "aiReviewedAt": "2026-07-23T23:59:14.336416+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_ember_shard": {
    "id": "the_edge_ember_shard",
    "name": "Ember of the Abyss's Sigh",
    "description": "The Ember of the Abyss's Sigh glows faintly like embers from a long-buried fire, its warmth a stark contrast to the chill it emanates. This pulsating shard whispers tales of forgotten lore and lost souls, but those who hold it too long may find themselves entangled in an endless loop of despair. Its heat is both a blessing and a curse, for while it heals 30 hit points, it also tempers your senses with +1 Dexterity for six turns.",
    "category": "consumables",
    "price": 960,
    "icon": "🔥",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Heals",
      "Enhances Agility"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Healing Touch",
        "rules": "When activated as an action, the Ember heals the wielder or a target ally up to 30 hit points. The effect ends if the user takes damage."
      },
      {
        "title": "Sharp Reflexes",
        "rules": "+1 Dexterity modifier for six rounds after activation. This effect is negated by any source of exhaustion, and it can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Ember requires a minimum level to ensure its effects are balanced with the character's abilities.",
    "vendorReason": "The Abyss Trader specializes in items of otherworldly origin, and this ember is one such item from realms beyond.",
    "shippingDetail": "Ships via interdimensional courier; delivery can take up to a week depending on the destination.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect, lasting six turns",
      "endsWhen": "On damage taken or end of user's next turn",
      "charges": "Unlimited"
    },
    "priceReason": "The Ember is priced at 1000 XP due to its unique combination of healing and agility enhancing effects, as well as the rarity and lore behind it.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:59:44.848516+00:00",
    "aiReviewedAt": "2026-07-23T23:59:44.848516+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_echoing_plate": {
    "id": "the_edge_echoing_plate",
    "name": "Plate of Fractured Reflections",
    "description": "The Plate of Fractured Reflections is a tarnished silver plate etched with swirling patterns that seem to shift and distort when touched, as if each reflection holds a fragment of countless futures. Its surface gleams faintly under the light, casting an ever-changing array of shadows that dance around you. Those who wear it find themselves constantly aware of unseen possibilities, but beware—some reflections are... unpleasant, hinting at grim fates or hidden truths.",
    "category": "equipment",
    "price": 14000,
    "icon": "🪨",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Armor Class Boost",
      "Perception Enhancement"
    ],
    "vendor": "final_shop",
    "shippedBy": "Void Delivery Drone",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Armor Class Boost",
        "rules": "While wearing the Plate of Fractured Reflections, you gain a +3 bonus to your Armor Class. This effect is active as long as you are wearing the plate and does not require any action to activate."
      },
      {
        "title": "Perception Enhancement",
        "rules": "You gain a +2 bonus to Perception checks when using this item. The bonus applies for 1 hour after touching the plate, and you can use it once per day."
      }
    ],
    "levelRequirementReason": "The Plate of Fractured Reflections requires a level 9 character due to its mystical nature and the potential for it to reveal unsettling truths.",
    "vendorReason": "Final Shop, known for their unique and powerful artifacts, naturally stocks this item.",
    "shippingDetail": "The Void Delivery Drone ensures that your package is delivered swiftly through the ethereal corridors of the multiverse.",
    "usage": {
      "activation": "Passive effect when wearing the plate; daily use for Perception enhancement.",
      "duration": "Active as long as you are wearing the plate; once per day for Perception boost.",
      "endsWhen": "The daily use ends at midnight, and the bonus to Armor Class reverts upon removal of the plate.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects its rarity and limited utility without overshadowing other important gear.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:59:50.900591+00:00",
    "aiReviewedAt": "2026-07-23T23:59:50.900591+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_void_dust": {
    "id": "the_edge_void_dust",
    "name": "Dust of the Unwritten",
    "description": "The Dust of the Unwritten is a shimmering, black powder that seems to defy gravity in its glassine container. When consumed, it grants you heightened awareness of the void, allowing you to recall forgotten details and see through illusions for just three turns. However, if you linger too long in its presence, you may lose track of your surroundings entirely, as the void's pull is stronger than you might imagine.",
    "category": "consumables",
    "price": 240,
    "icon": "⚫️",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Restores 20 Hit Points",
      "Grants +1 to Intelligence saving throws"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Gravity Shard Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Hit Points",
        "rules": "When consumed, the Dust of the Unwritten restores 20 hit points and grants advantage on Intelligence saving throws for the next three turns. The effect ends if you take damage."
      },
      {
        "title": "Advantage on Intelligence Saving Throws",
        "rules": "For the duration of this effect, you gain advantage on all Intelligence saving throws until you use your action in combat or take damage."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to help them overcome early challenges without overburdening their abilities.",
    "vendorReason": "The Edge Outpost often stocks items that assist travelers in overcoming the harsh conditions of the voidlands.",
    "shippingDetail": "Ships via a gravity-controlled express delivery, ensuring safe and timely arrival.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "3 turns",
      "endsWhen": "You take damage or use your action in combat",
      "charges": "Unlimited"
    },
    "priceReason": "The increased price reflects the item's unique effects and the rarity of its ingredients, which are hard to come by.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T23:59:45.064592+00:00",
    "aiReviewedAt": "2026-07-23T23:59:45.064592+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_pulsating_charm": {
    "id": "pokemon_item_pulsating_charm",
    "name": "Pulsating Charm of the Wild",
    "description": "The Pulsating Charm of the Wild hums with a vibrant energy that seems to resonate from the heart of the forest itself. Crafted by the ancient Pokémon scholars, this charm amplifies your bond with wild creatures, increasing their trust and potentially triggering unexpected evolution events – just try not to draw unwanted attention from territorial trainers! When worn in the field, it subtly enhances your battle accuracy, making you a more formidable opponent when taming or battling Pokémon.",
    "category": "curiosities",
    "price": 4000,
    "icon": "✨",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Boosts creature trust by 20%",
      "Increases battle accuracy by 5%"
    ],
    "vendor": "safari_shop",
    "shippedBy": "winged_bulbasaur",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Creature Trust",
        "rules": "When worn, the charm increases the trust of nearby wild Pokémon by 20%. This effect lasts for an hour and can be used once per long rest. The charm must remain in contact with the wearer to maintain its influence."
      },
      {
        "title": "Enhanced Battle Accuracy",
        "rules": "The wearer's battle accuracy is boosted by 5% while wearing the charm. This benefit persists until the end of the wearer's next turn, and it can be activated as a bonus action once per short rest."
      }
    ],
    "levelRequirementReason": "The charm's subtle magic requires minimal mana to activate but still benefits from basic training.",
    "vendorReason": "The Safari Shop specializes in items that enhance the experience of wild Pokémon encounters, and the Pulsating Charm is a perfect fit for their offerings.",
    "shippingDetail": "Ships via a swift aerial delivery by a Winged Bulbasaur, ensuring safe arrival within one day.",
    "usage": {
      "activation": "Bonus action to activate; once per short rest.",
      "duration": "One turn duration; ends at the end of the wearer's next turn.",
      "endsWhen": "The effect ends when the wearer no longer has the charm equipped or at the start of their next turn.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced as a rare item, this charm offers significant utility without overshadowing other valuable gear.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-24T00:00:02.620002+00:00",
    "aiReviewedAt": "2026-07-24T00:00:02.620002+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_trainer_elite_potion": {
    "id": "pokemon_item_trainer_elite_potion",
    "name": "Trainer Elite Potion",
    "description": "The Trainer Elite Potion is a shimmering vial crafted by master trainers themselves. This potion not only replenishes your HP with a swift drink, but also grants you a fleeting boost of focus and resilience to aid in your next battle. The concentrated will of legendary Pokémon ensures that each sip is as potent as it is rare. Rumored to be an heirloom of legendary prowess, this potion should be treated with the utmost care to avoid spilling its sacred contents.",
    "category": "consumables",
    "price": 960,
    "icon": "🧪",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "HP Replenishment",
      "Focus Boost"
    ],
    "vendor": "pokemart",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "HP Replenishment",
        "rules": "When consumed as a bonus action, this potion restores 150 hit points to the drinker. The effect is instantaneous and does not allow for saving throws."
      },
      {
        "title": "Focus Boost",
        "rules": "For the next minute, the drinker gains advantage on Wisdom (Perception) checks made to notice unusual sounds or movements. This effect ends if the drinker takes any damage."
      }
    ],
    "levelRequirementReason": "This potion is accessible at level 1 as it provides immediate and essential support for novice trainers.",
    "vendorReason": "The pokemart stocks this rare item to cater to the needs of trainers who have just begun their journey.",
    "shippingDetail": "Delivered swiftly by delivery drones, ensuring that you can use its effects before your next battle.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous; lasts for the next minute",
      "endsWhen": "If the drinker takes damage or if the potion is consumed within one hour of opening",
      "charges": "Unlimited, as long as it remains unopened"
    },
    "priceReason": "The Trainer Elite Potion’s price reflects its rarity and the concentrated power of legendary Pokémon that infuse it.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-24T00:00:05.722587+00:00",
    "aiReviewedAt": "2026-07-24T00:00:05.722587+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_aurora_crest": {
    "id": "pokemon_item_aurora_crest",
    "name": "Aurora Crest of the Celestial Beasts",
    "description": "The Aurora Crest of the Celestial Beasts, forged from solidified starlight by the ancient Pokémon gods, grants you a divine connection that amplifies your combat prowess and defends against psychic attacks. This legendary trinket not only increases your physical strikes but also has a chance to confuse foes, all while keeping you safe from malevolent spirits. However, be wary of celestial storms, as this crest can be rendered ineffective by the very forces it honors.",
    "category": "equipment",
    "price": 110000,
    "icon": "🌟",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Divine Amplification",
      "Psychic Ward"
    ],
    "vendor": "league_store",
    "shippedBy": "mythical_artillery",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Divine Amplification",
        "rules": "This effect increases your attack rolls by +30% for a duration of 1 minute. The effect ends if you take damage or if the wearer drops to 0 hit points."
      },
      {
        "title": "Psychic Ward",
        "rules": "You gain immunity to psychic attacks while wearing this crest. This effect persists until the end of your next turn after taking a hit from a psychic attack, at which point it is lost and you must make a DC 15 Wisdom saving throw against confusion."
      }
    ],
    "levelRequirementReason": "The complexity and power of the Aurora Crest necessitate a minimum level to ensure that its effects are balanced.",
    "vendorReason": "As guardians of all things Pokémon, the League Store is known for offering items imbued with divine power like this celestial crest.",
    "shippingDetail": "The delivery takes a week as it is transported by mythical artillery through the skies, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect upon donning the crest; no activation required.",
      "duration": "1 minute per use or until you take damage or drop to 0 hit points, whichever comes first.",
      "endsWhen": "The wearer takes damage or drops to 0 hit points.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Aurora Crest's rarity and the divine power it commands justify its high price in experience points.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-24T00:00:19.029108+00:00",
    "aiReviewedAt": "2026-07-24T00:00:19.029108+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_rusty_coin_belt": {
    "id": "mushroom_kingdom_item_rusty_coin_belt",
    "name": "Wario's Lucky Loot Belt",
    "description": "Wario's Lucky Loot Belt is a tarnished leather belt adorned with coins that once belonged to the mischievous Wario himself. Each coin whispers tales of fortune, and while the belt may be old, it still feels surprisingly comfortable. It allows its wearer to store small items securely and increases their luck in finding rare treasures, making it indispensable for any adventurer seeking a bit of Wario's notorious good fortune.",
    "category": "equipment",
    "price": 14000,
    "icon": "💰",
    "stock": 35,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increased_luck",
      "small_inventory_capacity"
    ],
    "vendor": "wario_direct",
    "shippedBy": "pipe_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Luck",
        "rules": "At the start of each combat, you can use an action to invoke this belt and gain advantage on one saving throw. This effect lasts until the end of your next turn."
      },
      {
        "title": "Small Inventory Capacity",
        "rules": "The belt provides a +2 bonus to Dexterity (Stealth) checks. Additionally, it grants you space for up to three extra small items in your inventory."
      }
    ],
    "levelRequirementReason": "This belt is accessible early on to give players a bit of Wario's signature luck without being overpowered.",
    "vendorReason": "Only the direct source of Wario's items can offer such a piece imbued with his personal fortune.",
    "shippingDetail": "Ships via underground pipe network, ensuring swift delivery to your doorsteps.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when you make the saving throw or at the end of your next turn, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a rare piece that provides unique utility without overshadowing other gear.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-24T00:00:06.974968+00:00",
    "aiReviewedAt": "2026-07-24T00:00:06.974968+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_ancient_rune_amulet": {
    "id": "mushroom_kingdom_item_ancient_rune_amulet",
    "name": "The Whispering Amulet of Wario",
    "description": "The Whispering Amulet of Wario, crafted from a tear of a long-forgotten mushroom god, hums softly against your chest. Its weight feels like a promise of fortune, and its surface etched with runes that whisper prophecies only the wearer can hear. This amulet grants a sliver of foresight, allowing you to see through the veil of chance, and subtly sways fate in your favor, making luck bend just enough for success.",
    "category": "equipment",
    "price": 64000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "increased_luck",
      "foresight"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "dragon_airmail",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Increased Luck",
        "rules": "When you roll a saving throw or an attack roll, there is a +1 bonus to the roll. This effect lasts until the start of your next turn."
      },
      {
        "title": "Foresight",
        "rules": "Once per long rest, you can gain insight into upcoming events by hearing a brief prophecy from the amulet. The prophecy provides one piece of information related to an upcoming challenge or opportunity, but it is cryptic and requires interpretation."
      }
    ],
    "levelRequirementReason": "This amulet's power comes at a price; only those of proven strength can harness its ancient magic.",
    "vendorReason": "The Koopa Shop, known for its unique and powerful items, has earned the trust to sell this legendary artifact.",
    "shippingDetail": "Delivered by a dragon courier, the amulet arrives with a delay of one week due to the enchanted lettering that must be deciphered during transit.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the start of your next turn for increased luck. Once per long rest for foresight.",
      "endsWhen": "The effects end as normal, and there are no charges to manage.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from a fallen mushroom god's tear, this amulet is priced at 1000 XP, reflecting its legendary origin and subtle yet significant power.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-24T00:00:33.100026+00:00",
    "aiReviewedAt": "2026-07-24T00:00:33.100026+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_mystic_pearl": {
    "id": "pokemon_item_mystic_pearl",
    "name": "Mystic Pearl of Evolution",
    "description": "The Mystic Pearl of Evolution is a glowing, iridescent gem said to be crafted from the essence of ancient Pokémon. Legends claim it can unlock latent potential and enhance evolution, but its power must be wielded with care. Those who use it wisely may witness their Pokémon's true form emerge, while those who misuse it risk transforming into their weakest evolutionary state. Use this artifact responsibly; its magic is as unpredictable as the wilds from which it came.",
    "category": "curiosities",
    "price": 130000,
    "icon": "✨",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "evolve_target_pokemon",
      "boost_experience_gain"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Safari Delivery Team",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Evolve Target Pokémon",
        "rules": "Activates on a bonus action. The target Pokémon has a 15% chance to evolve into its next form upon the end of your next turn, regardless of current conditions. This effect does not require an evolution item or move. A successful DC 14 Wisdom saving throw ends this effect early."
      },
      {
        "title": "Boost Experience Gain",
        "rules": "Passive effect that increases the target Pokémon's experience gained from battles by 20%. The increased XP is awarded at the end of each battle, stacking with other XP modifiers. This effect lasts until a full night’s rest or until another Mystic Pearl of Evolution is used."
      }
    ],
    "levelRequirementReason": "Even for beginners, the risks and rewards of using this item justify a level one requirement.",
    "vendorReason": "The Safari Shop specializes in items that help trainers navigate the wilds and their Pokémon's growth.",
    "shippingDetail": "Special courier service ensures the pearl arrives safely, though handling can take up to one week.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Upon successful saving throw or full night’s rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a mythic item, the Mystic Pearl of Evolution provides significant but not game-breaking benefits.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-24T00:00:32.854624+00:00",
    "aiReviewedAt": "2026-07-24T00:00:32.854624+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_crumb_of_void": {
    "id": "doughnut_hole_crumb_of_void",
    "name": "Void Crumb - Miniature Anomaly",
    "description": "The Void Crumb - Miniature Anomaly is a shimmering fragment of void dust, pulled from the heart of The Fated Place. This crumb subtly warps space around it, creating brief portals that can teleport nearby allies up to 10 feet away. It's a delicate and unpredictable force, capable of shifting the battlefield but posing risks if not used with precision. Missteps could lead to unintended destinations, so use this crumb wisely!",
    "category": "consumables",
    "price": 970,
    "icon": "✨",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Minor Teleport",
      "Temporary Strength Boost"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Dimensional Rift Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Teleport",
        "rules": "When activated as a bonus action within 5 feet of an ally, the Void Crumb creates a brief portal that teleports the target up to 10 feet. This has a 20% chance of success each turn it's used. The teleport ends if the crumb is destroyed or if the target takes damage."
      },
      {
        "title": "Temporary Strength Boost",
        "rules": "For three turns after activation, the teleported ally gains +2 to their Strength (STR) ability score as they adjust to the minor strain of the displacement. This effect ends when the teleportation duration ends or if the crumb is destroyed."
      }
    ],
    "levelRequirementReason": "This crumb requires minimal focus and dexterity, suitable for beginners who are just starting their journey into the world of magic.",
    "vendorReason": "The Hole Hawker specializes in oddities and curios from other dimensions, making this Void Crumb a perfect fit for their inventory.",
    "shippingDetail": "Ships via Dimensional Rift Express, ensuring swift delivery through the fabric of reality. Delivery may vary depending on cosmic traffic.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (effect lasts for up to three turns)",
      "endsWhen": "Teleportation ends if the crumb is destroyed or if the target takes damage, and Strength boost ends at the end of its duration.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Void Crumb's rarity and unpredictable nature justify a higher price point, aligning with its unique utility in combat.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-24T00:00:23.539207+00:00",
    "aiReviewedAt": "2026-07-24T00:00:23.539207+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_gravitic_spatula": {
    "id": "doughnut_hole_gravitic_spatula",
    "name": "Gravitic Spatula - The Flipping Point",
    "description": "The Gravitic Spatula - The Flipping Point is a peculiar utensil crafted from an alloy of gravium and platinum, forged in the heart of a forgotten forge. It can manipulate gravity with a flick of the wrist, allowing you to briefly increase or decrease the weight of objects and foes alike. This spatula is perfect for launching yourself into the air or creating a precarious balance that could turn the tide of battle.",
    "category": "equipment",
    "price": 14000,
    "icon": "🥄",
    "stock": 15,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Weight Manipulation",
      "Stunning Hit"
    ],
    "vendor": "center_seller",
    "shippedBy": "Void Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Weight Manipulation",
        "rules": "As an action, you can target one creature or object within 30 feet. The target's weight is increased by 50% for up to 1 minute. This effect is instantaneous and does not provoke an opportunity attack."
      },
      {
        "title": "Stunning Hit",
        "rules": "If the target of Weight Manipulation fails a Strength saving throw (DC 14), it is stunned until the end of its next turn. Once used, the spatula requires 1 minute to recharge."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to wield such an intricate and powerful tool.",
    "vendorReason": "Center Seller is known for their eclectic array of unique and balanced items, including this whimsical yet potent spatula.",
    "shippingDetail": "Ships via the Void Courier with a one-day transit time.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; duration up to 1 minute",
      "endsWhen": "The target successfully saves or the effect expires",
      "charges": "Recharge after 1 minute of non-action inactivity"
    },
    "priceReason": "Balanced for an epic item with unique and powerful effects, this spatula is priced appropriately.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-24T00:00:38.071117+00:00",
    "aiReviewedAt": "2026-07-24T00:00:38.071117+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_forbidden_singularity_stone": {
    "id": "doughnut_hole_forbidden_singularity_stone",
    "name": "Singularity Stone - Echo of Oblivion",
    "description": "The Singularity Stone - Echo of Oblivion is a shimmering, pulsating core of solidified oblivion. Crafted from the very essence of forgotten voids, it whispers promises of ultimate power and fear-inducing dread. This forbidden artifact grants immunity to fear effects but comes with a steep price: upon use, there's a 25% chance you'll cause temporary madness in yourself or your target, and a high risk that the stone will deal self-damage as well.",
    "category": "forbidden",
    "price": 130000,
    "icon": "🖤",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Immunity to Fear",
      "Self-Damage Risk"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Temporal Anomaly Delivery",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Fear Immunity",
        "rules": "The user gains immunity to fear effects. This effect is active until the start of their next turn."
      },
      {
        "title": "Self-Damage and Madness",
        "rules": "There's a 25% chance that upon use, you or your target will suffer from temporary madness for 1d4 rounds. Additionally, there's a high risk (DM discretion) that the stone will deal self-damage to the user."
      }
    ],
    "levelRequirementReason": "Only those who have proven their worth and understanding of forbidden lore should handle such power.",
    "vendorReason": "The Void Vendor deals in the darkest secrets, and this stone is one of them.",
    "shippingDetail": "Ships via a time-displaced courier; arrival can vary by up to 24 hours.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the target or user suffers from temporary madness, or if the stone deals self-damage.",
      "charges": "Unlimited"
    },
    "priceReason": "While powerful, this item's unpredictable nature and potential for chaos justify its moderate price.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-25T00:04:25.353851+00:00",
    "aiReviewedAt": "2026-07-25T00:04:25.353851+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_ironclad_plate": {
    "id": "the_edge_ironclad_plate",
    "name": "Wario's Ward of Resilience",
    "description": "Wario's Ward of Resilience is a plate forged from the very despair of The Edge, an area known for its malevolent energy. Its surface gleams with a dark luster, and it whispers of curses and protections alike. This armor not only offers formidable defense but also grants resistance to necrotic damage, making it a favorite among those who face the dead and their ilk. Wear this ward, and you'll find yourself deflecting melee attacks more often than not, though at what cost is anyone’s guess.",
    "category": "equipment",
    "price": 4100,
    "icon": "🛡️",
    "stock": 8,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Armor Class Boost",
      "Necrotic Resistance"
    ],
    "vendor": "final_shop",
    "shippedBy": "winged beetle courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Armor Class Boost",
        "rules": "Increases your AC by 3 as long as you are wearing this armor. This effect is always active while the armor is on you."
      },
      {
        "title": "Necrotic Resistance",
        "rules": "Grants you resistance to necrotic damage when wearing this armor. This effect persists until you remove the armor or it is destroyed."
      }
    ],
    "levelRequirementReason": "Requires a level 8 character due to its potent defensive capabilities and connection to The Edge's dark energies.",
    "vendorReason": "Final Shop, known for its rare and unique items, naturally carries this cursed yet protective armor.",
    "shippingDetail": "Ships via the swift Winged Beetle Courier within a week of purchase.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous; persists until removed or destroyed",
      "endsWhen": "Destroyed by damage exceeding its hit points, or when removed from you",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it provides significant AC and resistance benefits without overpowered effects.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-24T00:00:49.986637+00:00",
    "aiReviewedAt": "2026-07-24T00:00:49.986637+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_cultist_amulet": {
    "id": "the_edge_cultist_amulet",
    "name": "Obsidian Amulet of the Void Watchers",
    "description": "This dark amulet, forged from ancient obsidian by the cultists of The Edge, seems to draw power directly from the void itself. Its surface is etched with symbols that glow faintly in the dark, whispering secrets of the cosmos. When worn, it grants its bearer a subtle but unsettling connection to the very fabric of space and time, making it both an invaluable tool for artifact hunters and a perilous trinket for summoners brave enough to court chaos.",
    "category": "faction",
    "price": 14000,
    "icon": "🔮",
    "stock": 15,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Knowledge Boost",
      "Void Sense"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "scorched_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Knowledge Boost",
        "rules": "The wearer gains +2 to Intelligence (History) checks. This effect is passive and applies continuously."
      },
      {
        "title": "Void Sense",
        "rules": "Once per short rest, the amulet grants a 10% chance to detect hidden activities by cultists of The Edge within 30 feet. This ability requires no action but can only be used once per day."
      }
    ],
    "levelRequirementReason": "The amulet's connection to the void is too unstable for those weaker in mind and body.",
    "vendorReason": "The Edge Outpost maintains close ties with the cultists, making it a prime location for acquiring such esoteric artifacts.",
    "shippingDetail": "Delivery takes an extra day due to the fragile nature of the amulet and the need for specialized couriers familiar with The Edge's terrain.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Continuous, until removed or destroyed.",
      "endsWhen": "Destroyed by contact with a blessed holy symbol or when exposed to direct sunlight for one hour.",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's rarity and the danger it poses justify its moderate price in experience points.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-24T00:01:05.047591+00:00",
    "aiReviewedAt": "2026-07-24T00:01:05.047591+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_curiosity_chronal_glaze": {
    "id": "doughnut_hole_curiosity_chronal_glaze",
    "name": "Temporal Taffy",
    "description": "Temporal Taffy is a glaze that tastes of time's peculiarities and fleeting moments. When applied to your weapon, it subtly distorts the fabric of combat, causing enemy attacks to falter by 15% for a few heartbeats. Should you fail an important action, this taffy grants you one chance to rewind time, restoring a failed attack or saving throw at the cost of 10 HP. Wario's legendary bakery sells this temporal confection because it is a rare find in the realm of curiosities.",
    "category": "curiosities",
    "price": 240,
    "icon": "⏳",
    "stock": 95,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "enemy_attack_speed_slowed_15%",
      "rewind_failed_action (10HP cost)"
    ],
    "vendor": "center_seller",
    "shippedBy": "Standard Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slowed Attacks",
        "rules": "When you apply Temporal Taffy to your weapon, enemies' attacks are slowed by 15% for a duration of 1 round. This effect ends if the taffy is removed or if an enemy successfully hits you."
      },
      {
        "title": "Rewind Failed Action",
        "rules": "You can use this taffy to rewind one failed action, such as a missed attack or failed saving throw, by expending 10 HP. This effect ends when the failed action is reversed or if your HP drops below half."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to experiment with its temporal effects without requiring a high level of proficiency.",
    "vendorReason": "Center Seller, known for its diverse range of curiosities and trinkets, regularly stocks Temporal Taffy due to its unique properties.",
    "shippingDetail": "Delivered within the day with Standard Delivery Drone service. Delays may occur during magical storms.",
    "usage": {
      "activation": "Bonus action when applying to a weapon or using it in combat.",
      "duration": "1 round for slowed attacks; instantaneous for rewinding failed actions.",
      "endsWhen": "The effect ends if the taffy is removed or an enemy successfully hits you, or if the failed action is reversed.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The balanced XP price reflects Temporal Taffy's unique temporal effects and its utility for both beginners and seasoned adventurers alike.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T00:00:53.871115+00:00",
    "aiReviewedAt": "2026-07-24T00:00:53.871115+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_fate_token": {
    "id": "curiosity_fate_token",
    "name": "Token of Twisted Fate",
    "description": "The Token of Twisted Fate is a dark obsidian sphere adorned with unsettling runes that shimmer and twist as you hold it. As you gaze into its depths, fleeting visions of alternate futures flicker before your eyes—some whimsical, others chillingly accurate. The token's unpredictable nature can grant you a fleeting boon or reveal a cryptic prophecy, but beware: the more you use it, the more likely you are to attract the attention of fate itself.",
    "category": "curiosities",
    "price": 240,
    "icon": "🔮",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Random Temporal Buff",
      "Prophecy Revelation"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Courier of Shadows",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random Temporal Buff",
        "rules": "On activation, there is a 20% chance that the user gains a +1d4 temporary ability modifier of their choice for 1 minute. This effect cannot be gained more than once per long rest."
      },
      {
        "title": "Prophecy Revelation",
        "rules": "Once per short or long rest, activating the token reveals a cryptic prophecy that grants you insight into your immediate future. You must make a Wisdom saving throw (DC 12) to interpret its meaning correctly; otherwise, it is interpreted as an unfortunate omen."
      }
    ],
    "levelRequirementReason": "The token's unpredictable nature and the risk of attracting fate's attention makes it suitable for players of any level who are willing to take a chance.",
    "vendorReason": "Fate Forge is known for its deep connection with the forces of destiny, making them the perfect vendors for such an item.",
    "shippingDetail": "The Courier of Shadows delivers the token discreetly, ensuring it arrives without drawing undue attention.",
    "usage": {
      "activation": "A bonus action to activate and focus on the visions within the token.",
      "duration": "Instantaneous effect; the prophecy is revealed immediately upon activation.",
      "endsWhen": "The effect ends when a new vision or prophecy is requested, or after one minute for the temporal buff.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Token of Twisted Fate balances its unpredictable nature and potential rewards with an appropriate XP cost to ensure it remains a valuable but not overpowered item.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-24T00:01:08.176749+00:00",
    "aiReviewedAt": "2026-07-24T00:01:08.176749+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_coin_detector": {
    "id": "mushroom_kingdom_item_coin_detector",
    "name": "Hyper-Shiny Coin Finder",
    "description": "The Hyper-Shiny Coin Finder is a sleek, brass cylinder with a pulsating ruby at its core, crafted by Wario's alchemy in his Mushroom Kingdom workshop. It vibrates fiercely when coins are within a 10-foot radius but occasionally misfires, detecting mundane items like bottle caps or even the loose change left behind by Wario himself. This device not only aids in coin collection but also subtly enhances your luck by granting a +5% chance of finding more coins nearby.",
    "category": "curiosities",
    "price": 970,
    "icon": "💰",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "coin_detection_10m",
      "luck_boost"
    ],
    "vendor": "wario_direct",
    "shippedBy": "pipe_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Coin Detection (10-foot Radius)",
        "rules": "The Hyper-Shiny Coin Finder vibrates when any coin is within a 10-foot radius. It has a 20% chance to misfire and detect non-coin items, but this does not consume charges."
      },
      {
        "title": "Luck Boost (+5%)",
        "rules": "While the device is active, you gain a +5% chance of finding additional coins within a 10-foot radius. This effect lasts for 1 hour or until expended."
      }
    ],
    "levelRequirementReason": "This item's sensitivity and craftsmanship are suitable for players who have just reached the first level.",
    "vendorReason": "Wario, known for his keen eye for detail and knack for inventing practical gadgets, personally oversees the Hyper-Shiny Coin Finder.",
    "shippingDetail": "The coin detector is carefully packed in a sturdy pipe delivery box to ensure it arrives intact.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "1 hour or until expended, but can be recharged after a long rest.",
      "endsWhen": "Exhausted after one use or at the end of each long rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The device's enhanced functionality, including its coin detection and luck boost features, justifies a price of 1000 XP.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-24T00:01:38.711636+00:00",
    "aiReviewedAt": "2026-07-24T00:01:38.711636+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_warp_pipe_blueprint": {
    "id": "mushroom_kingdom_item_warp_pipe_blueprint",
    "name": "Blueprint for a Pocket Pipe",
    "description": "A meticulously drawn blueprint for a pocket-sized warp pipe, crafted from parchment imbued with mushroom essence. This ancient artifact requires not only expert crafting but also a dash of raw mushroom juice to activate. The pipe can transport you up to 30 feet in any direction, perfect for quick escapes or covert maneuvers. However, the construction is delicate; a misstep could result in a malfunction that sends you several feet off course instead.",
    "category": "curiosities",
    "price": 4100,
    "icon": "🌀",
    "stock": 15,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "miniature_warp_pipe",
      "chance_of_malfunction"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "dragon_express",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Miniature Warp Pipe",
        "rules": "Activates on a bonus action, allowing the user to teleport up to 30 feet in any direction. The effect is instantaneous and has no target or save required."
      },
      {
        "title": "Chance of Malfunction",
        "rules": "There's a 10% chance that using the pipe will result in a misstep, sending you off course by up to 20 feet. This effect ends when the user successfully moves again or rests for at least one hour."
      }
    ],
    "levelRequirementReason": "Crafting and maintaining such an intricate item requires a fair amount of experience.",
    "vendorReason": "Koopa Shop specializes in unique curiosities that blend magic with the whimsical, making it an ideal vendor for this item.",
    "shippingDetail": "Shipped via Dragon Express; expect a delay of one week due to the exotic nature of the materials involved.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Upon successful use or rest for at least one hour after malfunction",
      "charges": "Unlimited, as long as the user has raw mushroom juice"
    },
    "priceReason": "The balance is maintained by considering the intricate crafting process and the rare materials needed.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-24T00:01:20.980851+00:00",
    "aiReviewedAt": "2026-07-24T00:01:20.980851+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_glowstone_shard": {
    "id": "animatopia_glowstone_shard",
    "name": "Glowstone Shard of Resonance",
    "description": "The Glowstone Shard of Resonance, a fragment of ancient Echoing Caves, hums with an otherworldly energy that resonates through your senses. This shard not only grants you a keen awareness of hidden passages but also enhances your perception checks by +1d4. Hold it close and the past whispers to you, revealing secrets long buried. Just be wary; prolonged exposure may make the walls seem to hum with their own eerie song.",
    "category": "curiosities",
    "price": 970,
    "icon": "✨",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Reveal Hidden Passages",
      "Enhanced Perception Checks"
    ],
    "vendor": "forest_market",
    "shippedBy": "swift_flying_owl",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Passages",
        "rules": "As an action, you can use the shard to sense hidden or secret doors within 30 feet. This effect is usable once per short or long rest."
      },
      {
        "title": "Enhanced Perception Checks",
        "rules": "While holding the shard, you have advantage on perception checks for the duration of one hour from the time you first hold it. You must make a concentration check (DC 12) at the start of each short or long rest to avoid becoming disoriented by the shard's strange hum."
      }
    ],
    "levelRequirementReason": "The resonance of the shard is accessible to all, but its whispers are potent and require a clear mind.",
    "vendorReason": "The forest market often receives rare goods from deep within Echoing Caves, including this magical fragment.",
    "shippingDetail": "Shipped by swift owl courier to ensure the shard remains undisturbed and potent.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Revealing Hidden Passages, one hour for Enhanced Perception Checks",
      "endsWhen": "The concentration check at the start of each rest is failed or interrupted.",
      "charges": "Unlimited; rests are required to maintain the effects."
    },
    "priceReason": "Balanced as a rare item, this shard offers potent but balanced abilities that do not overshadow more powerful items in the market.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-24T00:01:48.730499+00:00",
    "aiReviewedAt": "2026-07-24T00:01:48.730499+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_spirit_totem": {
    "id": "animatopia_spirit_totem",
    "name": "Spirit Totem of the Silent Hunt",
    "description": "The Spirit Totem of the Silent Hunt is a carven stone totem adorned with symbols of ancient shamans. It whispers a silent aura when activated, making stealthy movements almost inaudible and granting advantage on Stealth checks for those within its radius. This totem also has a unique property: it can momentarily frighten small creatures nearby, disrupting their focus or causing them to flee. Crafted by tribes that dance with the spirits of the hunt, this totem is a testament to ancient wisdom and natural prowess.",
    "category": "consumables",
    "price": 240,
    "icon": "🤫",
    "stock": 20,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Advantage on Stealth Checks",
      "Frightens Small Creatures"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_snail express courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Advantage",
        "rules": "Activates as a bonus action, providing advantage on all Stealth checks within its radius for 1 minute. Ends if the user takes damage or when the duration expires."
      },
      {
        "title": "Frighten Small Creatures",
        "rules": "When activated, there is a 20% chance (DC 12) to frighten any small creatures within 30 feet of the totem. This effect lasts until the end of your next turn or if you move more than 5 feet away from the area."
      }
    ],
    "levelRequirementReason": "Beginners can learn from this totem's ancient power but are advised to practice in safer environments.",
    "vendorReason": "Beast Bazaar is known for its wild and unique items, including those that help hunters and trackers excel in their craft.",
    "shippingDetail": "Delivered by the reliable giant snail express, ensuring safe and timely delivery of this enchanted totem.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until disrupted",
      "endsWhen": "Taking damage or moving more than 5 feet away from the area",
      "charges": "Unlimited"
    },
    "priceReason": "The totem's advanced enchantment and rarity justify its higher price, providing unique benefits for stealth and hunting.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-24T00:01:34.553738+00:00",
    "aiReviewedAt": "2026-07-24T00:01:34.553738+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_survey_service": {
    "id": "connectopia_pioneer_survey_service",
    "name": "Prospector's Scan",
    "description": "Prospector's Scan is a sleek, compact device favored by Connectopian ore prospectors. Crafted from polished obsidian and brass, this scanning tool sends out a series of precise sonic pulses that reveal nearby veins of valuable minerals. While it uncovers the presence of resource-rich areas with impressive accuracy, it falls silent if you get too close to the source—forcing you to rely on your own skills for extraction.",
    "category": "services",
    "price": 970,
    "icon": "📡",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "reveals_nearby_resource_nodes",
      "chance_to_find_rare_materials"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Signal Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Nearby Resource Nodes",
        "rules": "As a bonus action, you activate Prospector's Scan to emit a sonic pulse that reveals all nearby resource nodes within a 30-foot radius for the next minute. This effect is harmless but silent; it only works in areas without significant interference."
      },
      {
        "title": "Chance to Find Rare Materials",
        "rules": "If you use Prospector's Scan while adventuring, there’s a 25% chance that it will reveal an additional rare material not previously detected. This effect has no save DC and can be used once per day."
      }
    ],
    "levelRequirementReason": "Prospector's Scan is designed for beginners to connectopia, making it accessible even to lower-level adventurers.",
    "vendorReason": "Pioneer Post specializes in services that aid travelers and explorers throughout Connectopia, making Prospector's Scan a natural fit.",
    "shippingDetail": "The Signal Drone ensures timely delivery of Prospector's Scan to your doorstep within three days of purchase.",
    "usage": {
      "activation": "Bonus action",
      "duration": "One minute per activation",
      "endsWhen": "Ends when the duration expires or if you get closer than 10 feet to a detected resource node",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "Prospector's Scan offers a valuable yet moderate advantage for beginners and mid-level adventurers, making it a balanced purchase.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-24T00:01:49.386720+00:00",
    "aiReviewedAt": "2026-07-24T00:01:49.386720+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_tart_of_confusion": {
    "id": "leclaire_isle_tart_of_confusion",
    "name": "Tart of Confusion",
    "description": "The Tart of Confusion gleams with an ethereal light that shifts between hues as you approach it, a mesmerizing sight that hints at the chaos within. Bite into its flaky crust and watch as your senses blur—perhaps you'll find yourself speaking in riddles or attempting to arrange the table setting into a perfect geometric pattern. This enigmatic pastry is said to have been crafted by the whimsical chefs of Le Cleraire Isle, whose pies are known for turning even the most level-headed into confounded jesters.",
    "category": "consumables",
    "price": 970,
    "icon": "🤯",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant_confusion_3_turns",
      "increase_charisma_1d4"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "swift_delivery_cart",
    "levelRequirement": 0,
    "effectDetails": [
      {
        "title": "Grant Confusion (3 Turns)",
        "rules": "Eating this tart causes you to be confused for 3 turns. During this time, you have disadvantage on attack rolls and ability checks that require finesse or Dexterity. Additionally, any creature within 5 feet of you can use their action to attempt an Intelligence saving throw with a DC of 12; if successful, they are immune to the effects of this tart for 24 hours."
      },
      {
        "title": "Increase Charisma (1d4)",
        "rules": "For one hour after consuming the tart, your Charisma score is increased by 1d4. This effect stacks with other sources of temporary Charisma bonuses but does not exceed a +6 bonus to your Charisma."
      }
    ],
    "levelRequirementReason": "The Tart of Confusion is accessible to all adventurers, as its effects are light-hearted and fun rather than dangerous.",
    "vendorReason": "Pastry Palace is renowned for its delightful pastries that often leave patrons with a touch of magic in their step.",
    "shippingDetail": "The tart arrives fresh and warm, ensuring the magical effects are at their peak upon consumption.",
    "usage": {
      "activation": "Eating the tart as an action grants its effects for one hour.",
      "duration": "One hour or until consumed, whichever comes first.",
      "endsWhen": "The effect ends when you finish your next turn after consuming the tart.",
      "charges": "Unlimited"
    },
    "priceReason": "The Tart of Confusion is priced at 1000 XP due to its unique magical properties and the expertise required in its creation.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-24T00:02:12.599477+00:00",
    "aiReviewedAt": "2026-07-24T00:02:12.599477+00:00",
    "aiReviewVersion": 1
  }
};
