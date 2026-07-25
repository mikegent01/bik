// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_060 = {
  "pokemon_item_lucky_charm_berry": {
    "id": "pokemon_item_lucky_charm_berry",
    "name": "Berry of the Bewildered Beast",
    "description": "The Berry of the Bewildered Beast glows with a chaotic, shimmering light that dances like an unsteady flame. This enigmatic berry is said to momentarily confuse foes, causing them to falter and misjudge their next move. With each bite, you can feel its wild energy course through your veins, granting you a fleeting boost in luck. Wario himself vouches for this berry's power, claiming it perfectly suits any thief or adventurer looking to outsmart their competition.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Confusion",
      "Lucky Boost"
    ],
    "vendor": "pokemart",
    "shippedBy": "Winged Pokemon Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Confusion",
        "rules": "When consumed, the target of your next attack is affected by confusion for the duration. This effect lasts until the start of their next turn or if they succeed on a Wisdom saving throw (DC 13). There are no limits to how many times you can use this effect."
      },
      {
        "title": "Lucky Boost",
        "rules": "For one round after consumption, you gain advantage on Dexterity (Stealth) checks and saving throws. This effect is instantaneous upon consumption and does not require an action or reaction to activate."
      }
    ],
    "levelRequirementReason": "Beginners can benefit from the Berry's effects without requiring a high level of expertise.",
    "vendorReason": "Pokemarts are known for selling useful items for trainers and adventurers, making this berry an ideal addition to their stock.",
    "shippingDetail": "Ships within three days with Winged Pokemon Delivery, ensuring quick arrival at your doorstep.",
    "usage": {
      "activation": "Eat the Berry as a bonus action.",
      "duration": "Instantaneous for Confusion and Lucky Boost; lasts until start of next turn for Confusion.",
      "endsWhen": "The effect ends when the duration expires or if the target successfully saves against it.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This balanced price reflects the berry's powerful effects and rarity, making it a worthwhile purchase for adventurers.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:14:46.816545+00:00",
    "aiReviewedAt": "2026-07-23T22:14:46.816545+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_ancient_trainer_gear": {
    "id": "pokemon_item_ancient_trainer_gear",
    "name": "Trainer's Gauntlet of Valor",
    "description": "The Trainer's Gauntlet of Valor is forged from the very essence of a legendary Pokémon trainer, its steel infused with the spirit of valorous battles won. When donned in combat, it amplifies your strikes, turning mere attacks into devastating blows that leave enemies reeling. More than just an accessory, it channels the resilience and prowess of its creator, offering a defensive boon that turns near misses into safe lands.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Boosts Attack",
      "Enhanced Defense"
    ],
    "vendor": "league_store",
    "shippedBy": "Swift Delivery Drone",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Boosted Attacks",
        "rules": "Activates as a bonus action. Increases your attack rolls by +30 for the next 5 turns, dealing an additional +10 damage during this duration."
      },
      {
        "title": "Defensive Shield",
        "rules": "Passive effect while worn. Grants you a +10 armor class boost and reduces incoming physical damage from Pokémon attacks by 15%. Lasts until the end of your next turn after removal or when you take an action."
      }
    ],
    "levelRequirementReason": "Requires at least level 8 to wield its power effectively in combat.",
    "vendorReason": "The league store specializes in gear for elite trainers, ensuring the Trainer's Gauntlet of Valor is available to those who have earned their place on the battlefield.",
    "shippingDetail": "Delivered within 24 hours via Swift Delivery Drone, ensuring you're ready for your next battle.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "5 turns",
      "endsWhen": "Ends at the start of your next turn after removal or when an action is taken.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its status as a powerful but not overpowered epic gear for seasoned trainers.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:14:44.330234+00:00",
    "aiReviewedAt": "2026-07-23T22:14:44.330234+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_bomb": {
    "id": "internet_meme_bomb",
    "name": "Viral Overload Device",
    "description": "The Viral Overload Device is a bizarre, internet-forged contraption encased in gleaming metal and adorned with neon lights that flicker like a meme mill. When activated, it unleashes a torrent of chaotic memes and viral content; enemies within its range are struck by fits of uncontrollable laughter, causing them to stagger and lose their composure for several moments. The device's electromagnetic pulse also disrupts the target’s senses, temporarily reducing their accuracy.",
    "category": "forbidden",
    "price": 1000,
    "icon": "😂",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Disruptive Laughter",
      "Sensory Disruption"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Black Market Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disruptive Laughter",
        "rules": "When activated as a bonus action, this device unleashes a barrage of memes and laughter. Targets within 10 feet must succeed on a DC 15 Wisdom saving throw or be stunned for 1 minute. The effect ends if the target takes any damage."
      },
      {
        "title": "Sensory Disruption",
        "rules": "Additionally, all creatures in a 20-foot radius suffer a -2 penalty to Dexterity (Acrobatics) checks and saving throws until the start of their next turn. This effect is not subject to save DCs."
      }
    ],
    "levelRequirementReason": "Requires basic dexterity to handle such an unpredictable device.",
    "vendorReason": "The data dealer has a knack for procuring strange and powerful items, including this internet-forged marvel.",
    "shippingDetail": "Arrives with strict secrecy; must be delivered at night to avoid unwanted attention.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect (Disruptive Laughter), lasts until the start of the target's next turn (Sensory Disruption)",
      "endsWhen": "Target takes damage or the duration ends",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Balanced price for an item that can disrupt enemies and create chaos in combat.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:14:47.194276+00:00",
    "aiReviewedAt": "2026-07-23T22:14:47.194276+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_golden_spore": {
    "id": "mushroom_kingdom_item_golden_spore",
    "name": "Golden Spore of Unending Growth",
    "description": "The Golden Spore of Unending Growth is a pulsating, golden mushroom that crackles with Wario's unholy magic. When consumed, it dramatically increases your size and strength for a fleeting moment, turning you into an unstoppable force capable of smashing through even the toughest obstacles or gorging down smaller foes in one bite. This relic of Mushroom Kingdom lore is said to have been cultivated by the mischievous villain himself, Wario, who used it to outsize his rivals during their infamous spats and matches.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍄",
    "stock": 45,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increase_size",
      "strength_boost"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increase Size",
        "rules": "You grow in size by one category (e.g., Medium to Large) for the duration of this effect. This grants you a +2 bonus to Strength and a +1 bonus to AC, but also makes you more vulnerable to attacks from creatures larger than you."
      },
      {
        "title": "Strength Boost",
        "rules": "For the duration, your Strength score is doubled, allowing you to deal extra damage with melee weapons. This effect also grants you advantage on Athletics checks and saving throws against being knocked prone or restrained."
      }
    ],
    "levelRequirementReason": "This spore provides a significant boost in size and strength but does not require high-level proficiency.",
    "vendorReason": "Toad Town Market stocks this rare relic due to its connection with the Mushroom Kingdom, which is their territory.",
    "shippingDetail": "Shipped via a specialized mushroom cart that ensures freshness and potency upon delivery.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "1 minute",
      "endsWhen": "The effect ends when the duration expires or you are reduced to 0 hit points.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its potency and limited availability in the Mushroom Kingdom.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:15:23.225101+00:00",
    "aiReviewedAt": "2026-07-23T22:15:23.225101+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_koopa_faction_scroll": {
    "id": "mushroom_kingdom_item_koopa_faction_scroll",
    "name": "Koopa Clan Tactical Scroll",
    "description": "The Koopa Clan Tactical Scroll is a parchment rolled tight with inked symbols of ancient strategy. Crafted by the proud Clansmen, it details their shell-based formations and secret attacks. Deciphering its cryptic script grants you newfound prowess in combat, but be wary; its arrogance might just make you feel more like an invader than a strategist! Unlock new shell-bash maneuvers and bolster your Koopa Clan faction reputation by +10 points.",
    "category": "faction",
    "price": 1000,
    "icon": "🐢",
    "stock": 23,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "shell_bash",
      "faction_reputation"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "Turtle Post",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Shell Bash",
        "rules": "As an action, you can make a melee attack with a shell. On a hit, the target takes 1d6 + your proficiency bonus force damage and is knocked prone."
      },
      {
        "title": "Faction Reputation",
        "rules": "For every Koopa Clan member in your party, this scroll grants them +2 to Persuasion checks when dealing with other Koopas. Lasts until the end of the encounter."
      }
    ],
    "levelRequirementReason": "Requires at least level 7 to understand and utilize the scroll's tactical knowledge.",
    "vendorReason": "The Koopa Shop is known for its wealth of clan-specific items, including scrolls that enhance Koopa Clan strategies and reputation.",
    "shippingDetail": "Ships via Turtle Post within a week; expedited delivery available for an additional 10% fee.",
    "usage": {
      "activation": "As action or bonus action to use Shell Bash, as a passive effect for Faction Reputation.",
      "duration": "Instantaneous and ongoing (until end of encounter) respectively.",
      "endsWhen": "Exhausted after one use per day; requires re-acquisition from the Koopa Shop.",
      "charges": "Unlimited, but can only be used once per long rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its tactical value and rarity within the Koopa Clan faction.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T22:15:03.120875+00:00",
    "aiReviewedAt": "2026-07-23T22:15:03.120875+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_legendary_chrono_shard": {
    "id": "mushroom_kingdom_item_legendary_chrono_shard",
    "name": "Chrono Shard of Wario's Time Warp",
    "description": "The Chrono Shard of Wario's Time Warp is a crystalline fragment that glows with an eerie blue light. When activated, it warps time around you for mere instants, allowing for near-instantaneous reflexes and the ability to dodge attacks with perfect precision. However, overuse can cause temporal distortions, leading to unpredictable jumps in time. This shard is said to have been crafted by Wario's own hands during one of his madcap experiments.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "temporal_dodge",
      "time_freeze"
    ],
    "vendor": "wario_direct",
    "shippedBy": "time_warp_tube",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Dodge",
        "rules": "As a bonus action, the wielder can activate the shard to create a temporal distortion around them. This grants advantage on Dexterity saving throws for 1 minute. If the shard is activated more than once per long rest, the next use has no effect until after a short or long rest."
      },
      {
        "title": "Time Freeze",
        "rules": "When in immediate danger, the wielder can activate the shard to briefly halt time around them for 1 round (30 seconds). This grants immunity to all damage during this period. However, any creature within 5 feet of the user must succeed on a DC 14 Dexterity saving throw or be stunned until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Even beginners can learn to harness Wario's chaotic temporal powers with careful practice.",
    "vendorReason": "Wario personally crafted this shard and ensures it is available for his most trusted customers.",
    "shippingDetail": "The shard arrives via a warp tube, ensuring that the item remains in pristine condition.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Until end of next turn for Temporal Dodge; 1 round (30 seconds) for Time Freeze",
      "endsWhen": "The duration ends naturally or if the user is incapacitated during use",
      "charges": "Unlimited, but only one effect can be used per short rest"
    },
    "priceReason": "Balanced at a lower price to reflect its limited uses and manageable effects.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T22:15:05.392558+00:00",
    "aiReviewedAt": "2026-07-23T22:15:05.392558+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_resonance_boots": {
    "id": "almost_edge_item_resonance_boots",
    "name": "Null-Step Boots of the Boundary",
    "description": "The Null-Step Boots of the Boundary are crafted from a twisted amalgamation of shadow and light, their surface etched with ancient runes that shimmer and fade like fleeting dreams. These unsettling footwear allow you to briefly step outside the normal flow of reality, granting you an eerie sense of disorientation while enhancing your movement speed by 20%. However, each use leaves you vulnerable to existential dread for a short time, as if the fabric of your sanity frays with every stride.",
    "category": "equipment",
    "price": 1000,
    "icon": "👣",
    "stock": 12,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Movement",
      "Temporal Displacement"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "dimensional_mail",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Enhanced Movement",
        "rules": "Activate as a bonus action. Increases movement speed by 20% for 1 minute, during which time you are immune to fear effects and gain resistance to sanity loss from environmental hazards."
      },
      {
        "title": "Temporal Displacement",
        "rules": "Once per long rest, activate on your turn as an action. You can briefly step outside the normal flow of reality, causing you to teleport up to 30 feet in any direction. This effect has a 5% chance to trigger existential dread upon landing."
      }
    ],
    "levelRequirementReason": "The intricate runes and shadow materials require a adept level of mastery.",
    "vendorReason": "The Liminal Trader deals in rare artifacts that bridge the gap between worlds, and these boots are no exception.",
    "shippingDetail": "Ships via dimensional courier, ensuring a swift arrival through the fabric of reality.",
    "usage": {
      "activation": "Bonus action for Enhanced Movement; Action for Temporal Displacement",
      "duration": "1 minute for Enhanced Movement; Instantaneous for Temporal Displacement",
      "endsWhen": "The effect ends when you finish a short or long rest, or if the duration expires.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP for its unique and versatile abilities.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T22:15:18.801088+00:00",
    "aiReviewedAt": "2026-07-23T22:15:18.801088+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_void_whisper": {
    "id": "almost_edge_item_void_whisper",
    "name": "The Silent Plea",
    "description": "The Silent Plea is a polished obsidian stone etched with runes that seem to hum with an ancient, almost sentient energy. It whispers cryptic messages from forgotten realms, often foretelling dire omens or guiding the bearer away from perilous paths. Holding it stills the din of battle and conversation, allowing only the most vital sounds to reach your ears. The stone is said to have been crafted by a long-dead sorceress who sought to bridge the gap between the living world and the void itself.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🤫",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "cryptic_omen",
      "sound_suppression"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "carried_by_wind",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cryptic Omen",
        "rules": "When activated, this stone grants a single cryptic message from the void. This message is always in riddle form and may portend danger or guide you away from it. The effect has a save DC of 13. If a creature fails its saving throw, they are compelled to act on the omen's direction for their next action."
      },
      {
        "title": "Sound Suppression",
        "rules": "The Silent Plea reduces noise within a 5-foot radius by 50%, making it an invaluable tool in crowded or noisy environments. This effect lasts until the end of your turn when you are no longer holding it."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate the Silent Plea's subtle yet vital benefits without needing extensive experience.",
    "vendorReason": "The edge wanderers, who traverse dangerous territories, frequently encounter such relics and understand their value in survival.",
    "shippingDetail": "The stone arrives wrapped in a protective cloth, ensuring it remains undisturbed during transit.",
    "usage": {
      "activation": "A bonus action to activate and receive the cryptic message or to trigger sound suppression.",
      "duration": "Instantaneous for cryptic message; until the end of your turn for sound suppression.",
      "endsWhen": "The effects expire as described above or when you stop holding it in combat.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from rare obsidian and ancient runes, the Silent Plea's value is matched by its rarity and unique abilities.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:15:48.584820+00:00",
    "aiReviewedAt": "2026-07-23T22:15:48.584820+00:00",
    "aiReviewVersion": 1
  },
  "equestria_gourmand_treat": {
    "id": "equestria_gourmand_treat",
    "name": "Rainbow Sherbet Surprise!",
    "description": "A shimmering confection crafted by the finest sugar-coated unicorns of Equestria, this Rainbow Sherbet Surprise! bursts with a chaotic rainbow of flavor. When consumed, it grants your party a lucky streak for the day, increasing your chances in dice rolls and charm checks. Unicorns say it's a surefire way to win over any pony you encounter, though goblins might just be more intrigued by the colorful sugar than your charisma.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌈",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Boosts luck",
      "Enhances charisma"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pony Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Lucky Streak",
        "rules": "When consumed, this treat grants a +2 bonus to all Charisma checks and saving throws. The effect lasts for one hour."
      },
      {
        "title": "Charm Enhancement",
        "rules": "For the duration of 10 minutes after eating this treat, each member of your party has advantage on Persuasion checks."
      }
    ],
    "levelRequirementReason": "This treat is crafted by skilled unicorns and requires a certain amount of magical energy to activate its effects.",
    "vendorReason": "The market often stocks unique items from local artisans, including this special confectionery delight.",
    "shippingDetail": "Delivered quickly through the Pony Express, ensuring your party arrives at its peak performance for any challenge ahead.",
    "usage": {
      "activation": "Eaten by a member of the party as an action.",
      "duration": "One hour and ten minutes total.",
      "endsWhen": "The effects end when the duration expires or if the treat is consumed before then.",
      "charges": "Unlimited, as each serving is a single use."
    },
    "priceReason": "Crafted by skilled unicorns and requiring magical energy to activate, this treat offers significant benefits at an appropriately priced value.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:15:18.924454+00:00",
    "aiReviewedAt": "2026-07-23T22:15:18.924454+00:00",
    "aiReviewVersion": 1
  },
  "equestria_harmonious_blade": {
    "id": "equestria_harmonious_blade",
    "name": "The Echo of Harmony",
    "description": "The Echo of Harmony is a crystalline saber forged in the heart of Equestria's Crystal Heart. Its blade glows with a serene, ethereal light that resonates with the land’s magic. Wielders can amplify their party’s healing spells by up to 25%, and when they strike an enemy, there's a chance for a harmonious blast that stuns foes for one round. This weapon is as much a symbol of unity in battle as it is a tool for those who seek balance.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 15,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Healing Amplification",
      "Harmonious Stun"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Healing Amplification",
        "rules": "When you or an ally within 30 feet casts a healing spell, the damage dealt is increased by +25%. This effect lasts until the end of your next turn."
      },
      {
        "title": "Harmonious Stun",
        "rules": "When you strike an enemy with this weapon, there's a 40% chance to stun them for one round. The DC to resist this effect is equal to 12 + your proficiency bonus."
      }
    ],
    "levelRequirementReason": "The Echo of Harmony demands a certain mastery of magic and combat, suitable only for those who have reached at least 10th level.",
    "vendorReason": "As the official purveyor of Equestria's treasures, Canterlot Commerce is entrusted with selling this emblematic weapon.",
    "shippingDetail": "The Echo of Harmony requires special handling and is delivered only by the Royal Courier to ensure its safe arrival.",
    "usage": {
      "activation": "Instantaneous on contact or as an action if you are not already engaged in combat.",
      "duration": "Until the end of your next turn after using it for healing amplification.",
      "endsWhen": "The weapon is destroyed, expended, or when you cease to be within 30 feet of a target for a healing spell.",
      "charges": "Unlimited"
    },
    "priceReason": "This item's price reflects its limited availability and the cost of materials from the Crystal Heart.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T22:15:35.929096+00:00",
    "aiReviewedAt": "2026-07-23T22:15:35.929096+00:00",
    "aiReviewVersion": 1
  },
  "equestria_divine_amulet": {
    "id": "equestria_divine_amulet",
    "name": "The Heart of Twilight’s Blessing",
    "description": "The Heart of Twilight’s Blessing is a shimmering amulet that radiates with an ethereal glow, its facets reflecting hues of twilight and magic. Crafted by Princess Twilight using ancient Celestia stones, it bestows resistance to all forms of negativity and grants a unique ability: the wearer can momentarily see the most advantageous path forward, though it occasionally leans towards unconventional shortcuts favored by Wario himself. This godly artifact is said to have been imbued with the very essence of friendship, making its wearer's decisions wiser but not necessarily conventional.",
    "category": "premium",
    "price": 650000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Resistance to Negativity",
      "Vision of Advantage"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Celestial Messenger",
    "levelRequirement": 24,
    "effectDetails": [
      {
        "title": "Resistance to Negativity",
        "rules": "While wearing this amulet, you have resistance to all forms of negative status effects. This effect is passive and does not require any action."
      },
      {
        "title": "Vision of Advantage",
        "rules": "As a bonus action, you can briefly glimpse the most advantageous path forward. You gain advantage on one ability check of your choice immediately after using this feature. This benefit lasts for 1 minute. If you use this feature again before the duration expires, its effect is wasted."
      }
    ],
    "levelRequirementReason": "The amulet requires a high level to harness its godly power and align with its magical essence.",
    "vendorReason": "Crystal Empire specializes in artifacts imbued with the power of the Elements, making it the perfect vendor for such a divine relic.",
    "shippingDetail": "The amulet is delivered by the Celestial Messenger, ensuring its safe and swift arrival to the recipient.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute per use",
      "endsWhen": "Its duration expires or if you use it again before the first one ends",
      "charges": "Unlimited"
    },
    "priceReason": "The Heart of Twilight’s Blessing is a godly artifact with unparalleled power, making its price reflect its divine significance.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-23T22:16:04.354662+00:00",
    "aiReviewedAt": "2026-07-23T22:16:04.354662+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_silverhand_amulet": {
    "id": "faerun_item_silverhand_amulet",
    "name": "Amulet of the Steadfast Hand",
    "description": "The Amulet of the Steadfast Hand, forged by the dwarven artisans of Mithrilforge, is a talisman that whispers the promise of unerring precision to its wearer. Crafted from enchanted silver and imbued with the spirit of ancient heroes, it grants you an uncanny sense of balance and poise, as if your every motion were guided by a master's hand. This amulet is not merely jewelry; it’s a symbol of steadfast resolve that ensures your strikes land true, even in the heat of battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "💪",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Masterful Precision",
      "Steadfast Resolve"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying_carpet",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Masterful Precision",
        "rules": "When you make an attack roll or Dexterity (Sword) check, you can use a bonus action to activate the amulet's power. On this roll, your proficiency bonus is doubled if lower than the target DC. The effect lasts until the start of your next turn."
      },
      {
        "title": "Steadfast Resolve",
        "rules": "You gain temporary hit points equal to 5 + your level whenever you are reduced to 0 hit points but not killed outright, and these temporary hit points last for 1 minute. You can use this ability only once per long rest."
      }
    ],
    "levelRequirementReason": "The amulet's power is too potent for characters below fourth level, as it requires a certain combat experience to truly appreciate its benefits.",
    "vendorReason": "Baldur’s Bazaar stocks only the most powerful and sought-after items from across Faerûn, making this amulet an ideal addition to their inventory.",
    "shippingDetail": "The amulet is delivered by a fleet of flying carpets that ensure swift and safe transport.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the start of your next turn or when you make another attack roll or Dexterity (Sword) check",
      "endsWhen": "The effect ends as soon as you make a second attack roll or Dexterity (Sword) check after activating it.",
      "charges": "Unlimited, but you can only use the Steadfast Resolve ability once per long rest."
    },
    "priceReason": "The amulet's price reflects its mythic rarity and powerful effects, providing a fair value for such an item in Baldur’s Bazaar.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T22:15:55.663085+00:00",
    "aiReviewedAt": "2026-07-23T22:15:55.663085+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_waterdeep_guild_token": {
    "id": "faerun_item_waterdeep_guild_token",
    "name": "Waterdeep Thieves’ Guild Recognition Token",
    "description": "A tarnished silver token bearing the faint insignia of the Waterdeep Thieves' Guild, this recognition token is said to have been crafted from a coin minted during the guild's golden age. Its possession grants access to a secret contact within the guild and allows for minor loot bonuses when successfully sneaking past guards. This token can be used in conjunction with the guild’s influence to secure discounts at various shops scattered throughout Waterdeep, but its very existence attracts unwanted attention from rival thieves' guilds and other factions.",
    "category": "faction",
    "price": 1000,
    "icon": "💎",
    "stock": 95,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Secret Contact Access",
      "Loot Bonus"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Secret Contact Access",
        "rules": "When the token is activated with a successful Intelligence (Investigation) check, the user gains access to a secret contact within the Waterdeep Thieves' Guild. This contact can provide information on local criminal activity or potential business opportunities. The duration of this effect is until the end of your next short rest."
      },
      {
        "title": "Loot Bonus",
        "rules": "Upon successful completion of a stealth check, there is a +20% chance to receive minor loot from the encounter. This effect lasts for 1 hour and can be used once per day."
      }
    ],
    "levelRequirementReason": "This token’s recognition by the guild grants it a certain amount of power, but its effects are not too powerful to require higher-level expertise.",
    "vendorReason": "The Waterdeep Market is frequented by many thieves and smugglers who recognize the value of such tokens.",
    "shippingDetail": "Ships via messenger hawk, typically arriving within a few days. The hawk carries messages for guild members, ensuring swift delivery.",
    "usage": {
      "activation": "Activates with an Intelligence (Investigation) check.",
      "duration": "Until the end of your next short rest or until lost.",
      "endsWhen": "Lost or stolen by rival thieves' guilds.",
      "charges": "Unlimited, but only one secret contact can be accessed per day."
    },
    "priceReason": "The token's rarity and the potential for increased wealth and information make it a valuable asset worth this price in XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T22:15:52.225981+00:00",
    "aiReviewedAt": "2026-07-23T22:15:52.225981+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_geode_of_echoes": {
    "id": "connectopia_geode_of_echoes",
    "name": "Echoing Geode",
    "description": "This shimmering Echoing Geode pulses with the vibrant hues of Connectopia's past, its surface etched with ancient runes that whisper secrets of bygone eras. Holding it allows you to briefly hear snippets of forgotten conversations and lost blueprints, potentially leading you to valuable resources or hidden workshops. But be wary—sometimes it repeats your own frustrated sighs, as if the geode echoes the present with a hint of the past's frustration.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💎",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Unlock ancient crafting lore",
      "Reveal hidden technology"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Drone Delivery System",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Unlock Ancient Crafting Lore",
        "rules": "Activating this geode grants you advantage on Intelligence (History) checks related to Connectopia's past for 1 minute. You can use it once per long rest."
      },
      {
        "title": "Reveal Hidden Technology",
        "rules": "Once per day, the geode allows you to make a DC 15 Investigation check to uncover hidden technological artifacts or blueprints within a 30-foot radius. On a success, you learn about one such item and its potential use."
      }
    ],
    "levelRequirementReason": "This geode requires significant knowledge of Connectopia's history to unlock its secrets.",
    "vendorReason": "Craft Corner specializes in relics from the past, making it a fitting vendor for this Echoing Geode.",
    "shippingDetail": "The Drone Delivery System ensures that your geode arrives pristine and intact, delivered within two game days of purchase.",
    "usage": {
      "activation": "A bonus action to activate the geode's effects.",
      "duration": "1 minute for unlocking ancient lore; instantaneous for revealing hidden technology upon a successful check.",
      "endsWhen": "The effect ends when the duration expires or you make another check with the geode in the same rest period.",
      "charges": "Unlimited, but only one use per long rest."
    },
    "priceReason": "This Echoing Geode provides significant benefits tied to Connectopia's history and technology, justifying its cost.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:16:21.738217+00:00",
    "aiReviewedAt": "2026-07-23T22:16:21.738217+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_whisper_shard": {
    "id": "the_edge_whisper_shard",
    "name": "Echoes of the Void Shard",
    "description": "The Echoes of the Void Shard gleams with an eerie, pulsating light that dances like a forgotten memory of endless voids. This jagged shard is surprisingly comfortable to hold, its cold surface whispering secrets from beyond the known abyss. It grants fleeting glimpses into potential futures—mostly bad ones involving giant worms and existential dread—but also reveals hidden paths in small areas, making it invaluable for those who dare venture into the unknown.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "glimpse of future",
      "reveals hidden paths"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional rift",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Glimpse of Future",
        "rules": "When activated as a bonus action, this shard grants the user a brief vision of one potential future outcome. The effect lasts for 1 round (6 seconds). It has a chance to inflict madness on the observer with a save DC of 15. If successful, the observer becomes temporarily insane and must make a Wisdom saving throw at the end of their next turn or fall unconscious until they succeed in another saving throw."
      },
      {
        "title": "Reveal Hidden Paths",
        "rules": "The shard can be used once per day as an action to reveal hidden paths within a 10-foot radius. The effect is instantaneous and lasts until the end of your next turn. This ability does not affect creatures or objects that are already visible."
      }
    ],
    "levelRequirementReason": "The shard's visions can be overwhelming, requiring a higher level character to handle its potential madness-inducing effects.",
    "vendorReason": "The abyss trader specializes in exotic and dangerous artifacts, making them the perfect vendor for this item.",
    "shippingDetail": "Ships via a dimensional rift, arriving with a slight delay of one week due to the instability of the rift.",
    "usage": {
      "activation": "Bonus action or action",
      "duration": "1 round (Glimpse of Future) / Instantaneous (Reveal Hidden Paths)",
      "endsWhen": "Ends when the duration expires or the user is incapacitated during its effect.",
      "charges": "Unlimited, but each use has a 10% chance to cause madness."
    },
    "priceReason": "The shard's rarity and unique abilities justify this price point in the market.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T22:16:41.869797+00:00",
    "aiReviewedAt": "2026-07-23T22:16:41.869797+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_rune_amulet": {
    "id": "the_edge_rune_amulet",
    "name": "Amulet of Calculated Risk",
    "description": "The Amulet of Calculated Risk is crafted from solidified temporal flux, a material so rare it has been harvested only in the shadowed forges of the Edge Outpost. This amulet subtly alters your perception of risk, allowing you to glimpse outcomes that are slightly less dire when facing perilous choices... though fate still holds dominion over your ultimate success or failure. It grants you a brief moment where danger seems more manageable, but remember, it is not an armor against true harm—it merely tempers the immediate consequences.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Glimpse",
      "Durable Luck"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "express courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Temporal Glimpse",
        "rules": "When you roll a saving throw or ability check against a hazard, you can pay 1 charge to gain advantage on the roll. This effect lasts for 1 round and expends one of your amulet’s charges."
      },
      {
        "title": "Durable Luck",
        "rules": "At the start of each combat encounter, you have advantage on saving throws against traps or environmental hazards until the end of that encounter. This effect does not stack with other sources of advantage and ends when the encounter concludes."
      }
    ],
    "levelRequirementReason": "Requires level 8 to harness its temporal effects without overloading your ability to manage risk.",
    "vendorReason": "The Edge Outpost is known for crafting items that bridge the gap between survival and strategy, making it an ideal vendor for this amulet.",
    "shippingDetail": "Ships via express courier within a day of purchase.",
    "usage": {
      "activation": "Reaction (charges)",
      "duration": "Instantaneous effect; lasts until the end of the encounter or expended",
      "endsWhen": "Exhausted when all charges are used up or at the end of an encounter",
      "charges": "5"
    },
    "priceReason": "The amulet’s temporal nature and limited charge system justify its value, providing strategic advantage without overpowered effects.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T22:16:12.607350+00:00",
    "aiReviewedAt": "2026-07-23T22:16:12.607350+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_echoing_potion": {
    "id": "the_edge_echoing_potion",
    "name": "Potion of Transient Resonance",
    "description": "The Edge Echoing Potion is a shimmering vial of iridescent liquid that hums with the residual vibrations of past events. It amplifies your senses, allowing you to momentarily perceive echoes of the immediate environment—sounds, sights, and even faint whispers from the fabric of reality itself. Drinking this potion reveals hidden dangers within 30 feet and grants a fleeting moment of heightened awareness, perfect for navigating treacherous terrain or battling unseen foes.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 95,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Echoes of Danger",
      "Heightened Awareness"
    ],
    "vendor": "final_shop",
    "shippedBy": "Standard Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes of Danger",
        "rules": "As an action, you drink the potion. It grants you advantage on Perception checks within 30 feet for 1 minute, revealing hidden traps and dangers in the area."
      },
      {
        "title": "Heightened Awareness",
        "rules": "Upon drinking, you gain temporary hit points equal to 1d6 + your Constitution modifier for 5 minutes. These hit points are lost if you are incapacitated or fall unconscious."
      }
    ],
    "levelRequirementReason": "This potion is suitable for beginners and adventurers who need a burst of insight and resilience early in their journey.",
    "vendorReason": "Final Shop stocks this essential tool for any adventurer looking to navigate the perils of the battlefield.",
    "shippingDetail": "Delivered within one week, ensuring you're prepared for your next quest.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (Echoes of Danger), 5 minutes (Heightened Awareness)",
      "endsWhen": "You fall unconscious or are incapacitated (Echoes of Danger); duration ends naturally (Heightened Awareness)",
      "charges": "Unlimited, recharges after a short rest"
    },
    "priceReason": "The potion's unique and valuable effects justify its higher price in the shop.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T22:16:19.236068+00:00",
    "aiReviewedAt": "2026-07-23T22:16:19.236068+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_brick_hammer": {
    "id": "connectopia_brick_hammer",
    "name": "Wario's Blockbreaker!",
    "description": "Wario's Blockbreaker! hammers through reinforced concrete and stone blocks with ease, its solid yet surprisingly ergonomic handle made from a mix of reinforced concrete and ancient volcanic ash. This hammer is more than just a tool; it whispers tales of the blocksmiths who forged it in an abandoned quarry. Each swing has a chance to drop bricks, which can be used for crafting or sold at the local market.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_mining_speed",
      "chance_to_drop_bricks"
    ],
    "vendor": "block_smith",
    "shippedBy": "rolling_crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Mining Speed",
        "rules": "When you use Wario's Blockbreaker! to break blocks, your mining speed is increased by +2. This bonus lasts until the end of your next turn."
      },
      {
        "title": "Chance to Drop Bricks",
        "rules": "Each time you successfully break a block with this hammer, there is a 15% chance that a brick will drop for you to collect and use in crafting or trade. This effect has no save DC and does not consume charges."
      }
    ],
    "levelRequirementReason": "Wario's Blockbreaker! is designed for beginners who need an effective tool to start mining and building.",
    "vendorReason": "As a renowned blocksmith, the vendor has a surplus of this hammer, which is in high demand among local miners and builders.",
    "shippingDetail": "The hammers are shipped via rolling crates, ensuring they arrive undamaged and ready for use.",
    "usage": {
      "activation": "As an action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one successful block break",
      "charges": "Unlimited"
    },
    "priceReason": "The hammer's reinforced construction and unique crafting process justify its higher price, making it a worthwhile investment for miners.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:16:38.854195+00:00",
    "aiReviewedAt": "2026-07-23T22:16:38.854195+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_geode_of_stability": {
    "id": "connectopia_geode_of_stability",
    "name": "The Stabilizer",
    "description": "The Stabilizer is a pulsating geode, its surface etched with ancient runes that shimmer in hues of calm blue and green. Crafted from the bedrock of forgotten lands, it exudes a soothing energy that instantly reinforces unstable structures, preventing collapses before they start. Its power is both stabilizing and mending—repairing minor damage to stone and brickwork as it neutralizes tremors. However, players should be wary: this artifact's magic is unpredictable, and prolonged use may cause it to shatter in a cascade of sparkling fragments.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "stabilize_terrain",
      "repair_masonry"
    ],
    "vendor": "craft_corner",
    "shippedBy": "magic_portal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stabilize Terrain",
        "rules": "As a bonus action, the wielder can activate The Stabilizer to neutralize tremors and prevent collapses within a 10-foot radius. This effect lasts for 1 minute or until an earthquake ends. If used in an area affected by an earthquake, the user must make a DC 15 Constitution saving throw; on a failed save, they take 2d6 force damage."
      },
      {
        "title": "Repair Masonry",
        "rules": "The Stabilizer can repair minor damage to stone and brick structures as it stabilizes them. The geode can mend up to 100 hit points of damage per day, which must be applied to a single structure. This effect is instantaneous but requires the wielder to make an Intelligence (Architecture) check with a DC equal to half the structure's hit point total."
      }
    ],
    "levelRequirementReason": "The Stabilizer's ancient magic demands a minimum of fifth-level proficiency in Architecture or Engineering to wield.",
    "vendorReason": "Craft Corner specializes in relics and artifacts from the forgotten lands, making The Stabilizer a fitting addition to their inventory.",
    "shippingDetail": "Shipped via the magic portal, this geode arrives encased in protective runes that ensure it reaches its destination intact.",
    "usage": {
      "activation": "Bonus action for Stabilize Terrain; Instantaneous for Repair Masonry (subject to check).",
      "duration": "1 minute or until an earthquake ends, whichever is shorter.",
      "endsWhen": "The effect ends if the user moves out of range or if a new earthquake occurs within the radius.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Stabilizer's price reflects its rare material, ancient crafting, and potent stabilizing properties that are crucial for both adventurers and builders alike.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:17:02.368279+00:00",
    "aiReviewedAt": "2026-07-23T22:17:02.368279+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_lightning_grapple": {
    "id": "teyvat_item_lightning_grapple",
    "name": "Electro-Charged Chain Gauntlet",
    "description": "The Electro-Charged Chain Gauntlet is a masterwork of Liyue's forges. Its core, forged from storm-touched metal, channels raw electrical energy. This gauntlet allows you to traverse chasms with ease and deliver devastating shocks to your foes. Be wary; a misstep could result in a short-circuit that sends you sprawling, but it is precisely this balance of power and peril that makes it an indispensable tool for the Electro-kinetic warrior.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚡",
    "stock": 18,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Aerial Leap",
      "Electroshock"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_merchant",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Aerial Leap",
        "rules": "As a bonus action, you can swing your gauntlet to grapple onto electrical sources. You gain advantage on Strength (Athletics) checks for the next minute."
      },
      {
        "title": "Electroshock",
        "rules": "When you make a melee attack with this gauntlet, there is a 30% chance that your target becomes stunned until the start of your next turn. This effect has no save DC and can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "It requires basic dexterity to wield the gauntlet effectively.",
    "vendorReason": "The artisans of Liyue are known for their mastery of electrokinetic crafts, making this gauntlet a natural addition to their wares.",
    "shippingDetail": "Delivered via the swift sea winds; expect delivery within three days from port.",
    "usage": {
      "activation": "Bonus action for Aerial Leap, Standard action for Electroshock",
      "duration": "Instantaneous (Aerial Leap), until start of next turn (Electroshock)",
      "endsWhen": "When the gauntlet's attack is resolved or a short rest is completed",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced for its utility and risk, this gauntlet offers a unique combination of movement and combat advantages.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:16:36.806702+00:00",
    "aiReviewedAt": "2026-07-23T22:16:36.806702+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_godly_starfall_amulet": {
    "id": "teyvat_item_godly_starfall_amulet",
    "name": "Amulet of the Fallen Star",
    "description": "The Amulet of the Fallen Star hums with a faint, ethereal light, a relic of an ancient celestial being's final moments. It grants incredible luck in combat and offers resistance against divine magic, though prolonged use may cause unsettling visions that cloud the mind. This amulet is said to have been crafted from the very essence of a starfall, and its wearer feels a connection to the cosmos, drawing strength from the heavens above.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "luck +10",
      "resist divine magic +50%"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "mystic_messenger",
    "levelRequirement": 24,
    "effectDetails": [
      {
        "title": "Divine Resistance",
        "rules": "The wearer gains resistance to all damage from divine spells and effects. This effect lasts until the end of their next turn after being hit by such an attack."
      },
      {
        "title": "Fortunate Luck",
        "rules": "At the start of each combat, the wearer has a +10 bonus to Dexterity saving throws. This bonus can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This amulet requires a high level of magical affinity and strength to wield its celestial powers.",
    "vendorReason": "Inazuma Imports specializes in exotic and powerful artifacts, making the Amulet of the Fallen Star an ideal addition to their collection.",
    "shippingDetail": "The amulet is delivered via a special courier who ensures its safe passage through treacherous territories.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous, lasting until the end of the wearer's next turn after being hit by a divine attack.",
      "endsWhen": "The effect ends when the wearer is no longer affected by a divine spell or when the wearer completes their next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "This amulet's price reflects its rarity and the cost of materials used in its crafting, as well as its unique magical properties.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-23T22:17:28.065356+00:00",
    "aiReviewedAt": "2026-07-23T22:17:28.065356+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_waterdeep_cartel_contract": {
    "id": "faerun_item_waterdeep_cartel_contract",
    "name": "Waterdeep Cartel Contract - 'The Serpent's Coil'",
    "description": "The 'Serpent's Coil' contract, crafted by the Waterdeep Dragonborn Cartels, is a meticulously detailed scroll of ink and parchment. Its intricate seals and sigils hint at the treacherous nature of its promises. Those who sign it may gain access to forbidden black markets but also risk their reputations with the Cartel's enforcers. The contract whispers secrets of criminal enterprises and carries within it the potential for both profit and peril.",
    "category": "faction",
    "price": 1000,
    "icon": "🐍",
    "stock": 8,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "black_market_access",
      "criminal_information"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Black Market Access",
        "rules": "Activating the contract provides temporary access to the Waterdeep black market. This lasts until the end of your next long rest, and you must spend 1d6 x 50 XP upon activation. The Cartel may demand a bribe or favor in exchange for such access."
      },
      {
        "title": "Criminal Information",
        "rules": "Once per short rest, you can spend 2 hours reviewing the contract to gain actionable intelligence from criminal contacts. This requires an Intelligence (Investigation) check at DC 15. On a success, you learn one piece of valuable information about a criminal organization or opportunity."
      }
    ],
    "levelRequirementReason": "The intricate seals and dangerous implications make this contract suitable for characters with some experience.",
    "vendorReason": "Waterdeep Market is known for handling all sorts of contracts, from mundane to criminal.",
    "shippingDetail": "The 'Serpent's Coil' must be delivered by a trusted messenger hawk to ensure its secrecy and authenticity.",
    "usage": {
      "activation": "Activates as an action at the start of your turn, but you must spend 1d6 x 50 XP.",
      "duration": "Instantaneous effect lasting until the end of your next long rest.",
      "endsWhen": "The contract is destroyed or its effects are dispelled by a successful DC 17 Constitution saving throw.",
      "charges": "Unlimited, but each use costs an additional 250 XP."
    },
    "priceReason": "The price reflects the dangerous and valuable information contained within the contract.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-23T22:17:19.626098+00:00",
    "aiReviewedAt": "2026-07-23T22:17:19.626098+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_study_session": {
    "id": "kivotos_item_study_session",
    "name": "Accelerated Learning Session",
    "description": "The Accelerated Learning Session is a rare service offered by Academy Armory, designed for scholars and mages in need of rapid knowledge acquisition. This intensive cramming-like session allows you to absorb vast amounts of information in mere hours—perfect for those who've underestimated their next quest's lore or spellbook's intricacies. Upon completion, your party gains a new proficiency level in one skill of your choice, and all members recover 50 hit points instantly without the usual fatigue of cramming.",
    "category": "services",
    "price": 1000,
    "icon": "📚",
    "stock": 28,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Increased Skill Proficiency",
      "Restores Hit Points"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Delivery Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Skill Proficiency",
        "rules": "This effect allows a party member to choose one skill they already have proficiency in and increase its level by one. This is a once-per-day benefit."
      },
      {
        "title": "Restores Hit Points",
        "rules": "Upon successful completion of the session, all participants recover 50 hit points immediately. There are no saves required for this effect."
      }
    ],
    "levelRequirementReason": "This service is suitable for players who need a quick boost in knowledge and health without overburdening their party.",
    "vendorReason": "Academy Armory specializes in enhancing scholar capabilities, making this service one of its most popular offerings.",
    "shippingDetail": "The session is delivered via a courier who ensures the party arrives at their location within an hour after purchase.",
    "usage": {
      "activation": "A short rest followed by a successful DC 15 Wisdom (Insight) check to enter the session.",
      "duration": "Instantaneous",
      "endsWhen": "The session ends successfully or if the participant fails the Insight check.",
      "charges": "Unlimited, as long as the party member is not exhausted."
    },
    "priceReason": "The price reflects the rare and intensive nature of the service, providing significant in-game benefits for a limited time.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T22:17:31.863054+00:00",
    "aiReviewedAt": "2026-07-23T22:17:31.863054+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_glittering_spellbook": {
    "id": "kivotos_item_glittering_spellbook",
    "name": "Glittering Spellbook of Minor Mishaps",
    "description": "The Glittering Spellbook of Minor Mishaps exudes an aura of mischief, its leather cover adorned with twinkling glitter that seems to pulse with suppressed energy. This seemingly harmless tome occasionally bursts into a dazzling display of minor magical mishaps, showering sparks and causing brief moments of confusion among those nearby. It's the perfect companion for anyone who enjoys a bit of chaos in their adventuring, though be warned: its unpredictable nature can turn even the most mundane encounters into chaotic spectacles.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌟",
    "stock": 72,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Minor Glitter Show",
      "Confusion Burst"
    ],
    "vendor": "club_supply",
    "shippedBy": "Swift Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Glitter Show",
        "rules": "As a bonus action, you can activate this spellbook to release a burst of glitter that dazzles any creature within 10 feet. This effect has a duration of 1 round and imposes disadvantage on attack rolls and Dexterity (Stealth) checks made against the target for the duration. There is a 25% chance of triggering this effect each time you cast a spell from it."
      },
      {
        "title": "Confusion Burst",
        "rules": "Once per short rest, as an action, you can force one creature within 30 feet to make a Wisdom saving throw (DC 14) or become confused for 1 minute. If the target succeeds on this save, they are immune to this effect of Glittering Spellbook of Minor Mishaps for 24 hours."
      }
    ],
    "levelRequirementReason": "The spellbook's unpredictable nature and its ability to cause confusion make it suitable for lower-level characters who can manage the risks.",
    "vendorReason": "Club Supply specializes in unique and quirky items that add a touch of whimsy to adventuring, making this spellbook an ideal fit for their inventory.",
    "shippingDetail": "Ships via Swift Courier Service within 3 days, delivered with a complimentary magical sparkle effect.",
    "usage": {
      "activation": "Bonus action or action",
      "duration": "Instantaneous (Minor Glitter Show), 1 minute (Confusion Burst)",
      "endsWhen": "At the end of your next turn (Minor Glitter Show), ends when the target no longer meets the criteria for confusion (Confusion Burst)",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "The spellbook's unpredictable nature and its ability to cause minor but effective effects justify this higher price.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T22:18:11.300856+00:00",
    "aiReviewedAt": "2026-07-23T22:18:11.300856+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_stone_totem": {
    "id": "animatopia_stone_totem",
    "name": "Echoing Stone Totem",
    "description": "This ancient Echoing Stone Totem is a weathered monolith pulsing with a rhythmic vibration, its surface etched with cryptic runes that whisper of forgotten lore. It's said to amplify one’s perception in the wilds, allowing you to hear faint sounds others miss and discern hidden paths through dense foliage. Legends speak of it as a gift from the forest spirits, though some believe it simply channels the natural world's subtlest energies.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗿",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "hearing_perception",
      "detect_hidden_paths"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "swift_falcon_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hearing Perception Boost",
        "rules": "As a bonus action, you can activate the Echoing Stone Totem to grant yourself advantage on perception checks for one hour. This effect ends if you are incapacitated or if you use this feature again."
      },
      {
        "title": "Detect Hidden Paths",
        "rules": "The totem allows you to detect hidden paths and natural traps within a 30-foot radius when used as an action. You gain advantage on Wisdom (Perception) checks for the next hour, but the effect ends if you are incapacitated or if you use this feature again."
      }
    ],
    "levelRequirementReason": "The totem's power is accessible to all adventurers who seek a deeper connection with nature.",
    "vendorReason": "Beast Bazaar curates items that enhance one’s journey through the wilds, and this totem perfectly fits their mission.",
    "shippingDetail": "Shipped by swift falcon messenger for expedited delivery directly to your campsite.",
    "usage": {
      "activation": "Bonus action or action",
      "duration": "One hour per use",
      "endsWhen": "Incapacitated or re-activated",
      "charges": "Unlimited uses"
    },
    "priceReason": "The totem's rarity and the unique benefits it provides justify its moderate price in experience points.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T22:17:36.980884+00:00",
    "aiReviewedAt": "2026-07-23T22:17:36.980884+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_spirit_amulet": {
    "id": "animatopia_spirit_amulet",
    "name": "Whispering Spirit Amulet",
    "description": "The Whispering Spirit Amulet, forged by ancient shaman hands from the bones of the first forest guardians and imbued with the essence of Animatopia's ancestral spirits, allows you to briefly commune with these elusive spirits. During your invocation, they whisper advice on how to navigate the land’s challenges, offering wisdom that can turn even the most daunting tasks into a breeze. However, their help comes at a price; there is always an underlying request for berries or a favor that might require a perilous journey.",
    "category": "equipment",
    "price": 1000,
    "icon": "👻",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "grant_divine_guidance",
      "wisdom_boost"
    ],
    "vendor": "forest_market",
    "shippedBy": "delivery_drone",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Grant Divine Guidance",
        "rules": "By activating the amulet as an action, you can seek guidance from the spirits for a specific challenge. For the next minute, you gain advantage on one ability check of your choice. This effect ends if you take any hostile actions or if 1 minute passes."
      },
      {
        "title": "Wisdom Boost",
        "rules": "The amulet grants you a +2 bonus to Wisdom saving throws for 1 hour after you activate it. If you fail to use the amulet within one week of acquiring it, this effect is lost forever."
      }
    ],
    "levelRequirementReason": "Requires at least level 10 to harness the power of the spirits effectively.",
    "vendorReason": "The forest market thrives on ancient knowledge and mystical artifacts, making it a prime location for this amulet.",
    "shippingDetail": "Delivered by drone with a slight delay due to the dense canopy of the forest.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until you take hostile actions",
      "endsWhen": "1 minute passes or you take hostile actions",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "Balanced with other rare items, this amulet offers unique and powerful guidance without being overpowered.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:18:00.761543+00:00",
    "aiReviewedAt": "2026-07-23T22:18:00.761543+00:00",
    "aiReviewVersion": 1
  },
  "faction_fatebinder_amulet": {
    "id": "faction_fatebinder_amulet",
    "name": "The Binder's Whisper",
    "description": "The Binder's Whisper is a pulsating amulet forged by the enigmatic Fateforgers. Its chaotic energy weaves through your rolls, subtly influencing outcomes in ways both beneficial and whimsical. Crafted from ancient runes and arcane materials, this amulet allows you to reroll a single die once per day, ensuring that fate bends ever so slightly in your favor. It also bestows a +1 bonus on all Charisma-based checks, enhancing your ability to sway the hearts of others.",
    "category": "faction",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Dice Reroll",
      "Charisma Boost"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Fate Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dice Reroll",
        "rules": "Activates as a bonus action. Allows you to reroll one d20 die once per day. The new roll replaces the original, and no save is required."
      },
      {
        "title": "Charisma Boost",
        "rules": "+1 bonus on all Charisma-based checks and saving throws until your next long rest. This effect does not stack with other bonuses of the same kind."
      }
    ],
    "levelRequirementReason": "Suitable for any adventurer, as it enhances decision-making and social interactions.",
    "vendorReason": "The Fateforgers are renowned for their ability to craft items that subtly alter fate itself.",
    "shippingDetail": "Delivered swiftly by the Fate Messenger, this amulet comes with a special courier seal ensuring its authenticity and integrity.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous (the new roll replaces the original)",
      "endsWhen": "At midnight or when you take a short rest",
      "charges": "1 per day"
    },
    "priceReason": "Balanced at this price to reflect its mythic rarity and limited daily use.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T22:17:47.395790+00:00",
    "aiReviewedAt": "2026-07-23T22:17:47.395790+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_shadowshard": {
    "id": "curiosity_shadowshard",
    "name": "Echoes of the Fallen King",
    "description": "The Echoes of the Fallen King is a jagged shard etched with the faded glory and tragic downfall of an ancient emperor. When held, it hums with the cold winds of forgotten battles, whispering tales of lost kingdoms and unyielding ambition. Its touch grants you fleeting visions that can both enlighten and unsettle your mind, making it a treasure for those who seek to unravel the mysteries of history and power.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💀",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "visions of past battles",
      "insight bonus"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Shadow Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Visions of Past Battles",
        "rules": "When you hold the shard, you gain temporary access to its visions. On your turn, as a bonus action, you can focus on it and see flashes of forgotten battles. For every minute spent gazing into the shard, you have a 20% chance of gaining a +1 bonus to an investigation check related to ancient history or lost empires, but there is also a 5% chance per minute that you become temporarily mad."
      },
      {
        "title": "Insight Bonus",
        "rules": "While holding the shard, you gain a +2 bonus to all investigation checks. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This shard is within reach for adventurers who are just starting their journey and wish to explore dark curiosities.",
    "vendorReason": "The chaos dealer, known for dealing in the most obscure and dangerous artifacts, naturally carries this relic of forgotten empires.",
    "shippingDetail": "Ships via Shadow Delivery's covert network, ensuring that only those with a true need for such dark knowledge receive it.",
    "usage": {
      "activation": "Bonus action to focus and access visions; passive insight bonus while holding the shard",
      "duration": "Visions last until end of turn, bonus lasts one long rest",
      "endsWhen": "Forced concentration ends on the shard or when you drop it",
      "charges": "Unlimited"
    },
    "priceReason": "The Echoes is a balanced item that offers both utility and risk, making it worth a significant amount of XP.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:17:54.459615+00:00",
    "aiReviewedAt": "2026-07-23T22:17:54.459615+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_lost_melody": {
    "id": "almost_edge_item_lost_melody",
    "name": "Lost Melody of the Boundary",
    "description": "The Lost Melody of the Boundary is a small, tarnished music box that whispers a single, haunting note upon activation. The sound lingers in your mind long after it has ceased, leaving you with an unsettling feeling of fading presence and profound loneliness. Some say the melody was crafted by those who dwell between worlds, but others believe it holds the sorrowful echoes of forgotten souls lost to the boundary realm. Listening to this box is not merely a choice—it is a journey into your own mind's twilight.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎶",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "melancholic echo",
      "sanity drain"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "temporal_distortion",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Melancholic Echo",
        "rules": "Upon activation, the music box plays its haunting note for 1 minute. The sound creates a lingering effect that forces every creature within 30 feet to make a DC 14 Wisdom saving throw or become charmed by the melody until the start of their next turn."
      },
      {
        "title": "Sanity Drain",
        "rules": "Each time you listen to the Lost Melody, your sanity decreases by 1. This effect stacks, but only affects characters with a Wisdom score above 10. Characters who fail their saving throw against the Melancholic Echo have their sanity reduced by an additional 2 points."
      }
    ],
    "levelRequirementReason": "The item's haunting nature requires a character to be at least level 1 to handle its effects without immediate mental breakdown.",
    "vendorReason": "The Liminal Trader, with their vast knowledge of the boundary realms, is well-acquainted with such relics and can provide it to those who seek ancient curiosities.",
    "shippingDetail": "Delivered via a temporal distortion, ensuring that the box arrives in pristine condition, though the journey may take an unpredictable amount of time.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous activation; effect lasts for 1 minute.",
      "endsWhen": "The effect ends when the creature is no longer within range or if they break line of effect with the source.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity, lore, and effects are balanced to reflect its value in XP, offering a unique experience that few other items can provide.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:18:57.151540+00:00",
    "aiReviewedAt": "2026-07-23T22:18:57.151540+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_ember_whisper": {
    "id": "teyvat_item_ember_whisper",
    "name": "Ember Whisper Charm",
    "description": "The Ember Whisper Charm pulses faintly with residual pyro energy, its surface a mosaic of crackling embers that seem to glow from within. Crafted in the forges of Inazuma from the very heart of Stormterror's Lair, it whispers secrets of ancient pyromancers when held. Its warmth lingers like the memory of a long-dead guardian, and the faint smell of burning incense clings to you as if someone is always watching your back.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔥",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "Pyro Aura",
      "Ignite Strike"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Swift Courier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pyro Aura",
        "rules": "While wearing this charm, you have a +1 bonus to saving throws against fire damage. Additionally, when you deal fire damage with an attack roll, there is a 5% chance the target ignites and takes an additional 1d4 fire damage at the start of its next turn."
      },
      {
        "title": "Ignite Strike",
        "rules": "When you hit a creature with a weapon attack while wearing this charm, there is a 5% chance that the target catches fire. The target must make a DC 13 Dexterity saving throw or take an additional 1d4 fire damage."
      }
    ],
    "levelRequirementReason": "The Ember Whisper Charm is designed to be accessible, providing a subtle but effective boost for adventurers of all levels.",
    "vendorReason": "Inazuma Imports specializes in rare and exotic artifacts from the heart of Tywetan legends, making this charm an appropriate addition to their inventory.",
    "shippingDetail": "The Swift Courier Pigeon ensures fast delivery, but you must be at your destination when it arrives as no one will take back a burning item.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous (effect ends immediately after use).",
      "endsWhen": "Exhausted upon successful use or natural expiration of the charm's effects.",
      "charges": "Unlimited, but the charm is destroyed after 3 uses."
    },
    "priceReason": "The Ember Whisper Charm strikes a balance between rarity and utility, offering both defensive and offensive benefits at an accessible price point.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T22:18:48.914147+00:00",
    "aiReviewedAt": "2026-07-23T22:18:48.914147+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_wind_dancer's_grace": {
    "id": "teyvat_item_wind_dancer's_grace",
    "name": "Wind Dancer’s Grace Brooch",
    "description": "The Wind Dancer’s Grace Brooch is a delicate brooch forged from the essence of summer winds, shimmering with hues that mimic a tempest's fury. Crafted by the alchemical artisans of Mondstadt, it grants its wearer unmatched agility and speed, making them nearly impossible to catch in the eye of a storm. With every step, the brooch seems to whisper secrets of the wind itself, enhancing both movement and evasiveness.",
    "category": "equipment",
    "price": 1000,
    "icon": "💨",
    "stock": 7,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Agility Boost",
      "Evasion"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Sky Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Agility Boost",
        "rules": "Activates as a bonus action. Increases your movement speed by 30 feet for 10 seconds. The effect ends if you are incapacitated or if you take a short rest."
      },
      {
        "title": "Evasion",
        "rules": "Passive effect grants a +5 bonus to Dexterity saving throws and has a 20% chance to evade attacks against you, which resets after each turn. This ability does not function while you are incapacitated."
      }
    ],
    "levelRequirementReason": "The brooch is designed for adventurers who need quick reflexes but do not have the prerequisite experience level.",
    "vendorReason": "As a renowned market, Mondstadt sells items that enhance agility and speed, making this brooch a natural addition.",
    "shippingDetail": "Delivered via the swift Sky Delivery Drones, ensuring your brooch arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to activate Agility Boost; passive Evasion effect is always active.",
      "duration": "Agility Boost lasts for 10 seconds or until you take a short rest. Evasion resets each turn and ends if incapacitated.",
      "endsWhen": "Incapacitation or taking a short rest for Agility Boost; ends at the start of your next turn for Evasion.",
      "charges": "Unlimited, as it is an inherent ability."
    },
    "priceReason": "The item's price reflects its rarity and the alchemical expertise required to craft such a brooch.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T22:18:19.190178+00:00",
    "aiReviewedAt": "2026-07-23T22:18:19.190178+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_ocean_current_potion": {
    "id": "teyvat_item_ocean_current_potion",
    "name": "Ocean Current Potion",
    "description": "The Ocean Current Potion is a shimmering azure elixir that tastes faintly of seaweed and the briny sea breeze. Draining this potion allows you to momentarily bend the currents, creating small whirlpools around yourself or your allies. The taste lingers for days, a reminder of the potion's origins in the heart of Teyvat’s coastal cities. It is said that drinking it grants both physical prowess and a fleeting bond with the ocean itself, making you more resilient to aquatic environments.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌊",
    "stock": 98,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Bend Currents",
      "Enhanced Swimming"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bend Currents",
        "rules": "As an action, you can create small whirlpools in water within a 20-foot radius. These whirlpools deal 1d6 bludgeoning damage and impose a -1 penalty to attack rolls against creatures caught in the whirlpool for 1 minute. The effect ends if you are no longer within 30 feet of the water or if you use this ability again."
      },
      {
        "title": "Enhanced Swimming",
        "rules": "For 1 hour after drinking, your swim speed increases by 10 feet and you have resistance to bludgeoning damage from falling. This effect ends when you rest for at least 8 hours or if the potion is expended."
      }
    ],
    "levelRequirementReason": "The potion's effects are designed to be accessible, offering utility without requiring a high level of expertise.",
    "vendorReason": "Liyue Harbor is known for its maritime trade and the connection with oceanic magic, making them an ideal vendor for this potion.",
    "shippingDetail": "The Sea Serpent Express ensures safe delivery through Teyvat’s treacherous waters, guaranteeing that your potion arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "You are no longer within 30 feet of water or you use this ability again",
      "charges": "One-use only"
    },
    "priceReason": "The potion's effects, while potent, require a significant amount of XP to justify the cost due to its utility and limited uses.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:18:30.342743+00:00",
    "aiReviewedAt": "2026-07-23T22:18:30.342743+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_scholarly_focus": {
    "id": "kivotos_item_halo_of_scholarly_focus",
    "name": "The Over-Achiever's Halo",
    "description": "The Over-Achiever's Halo is a gleaming, slightly askew halo made from the very essence of relentless study. Crafted by students who wished to outshine their peers, this premium accessory enhances concentration and focus. It subtly amplifies one's ability to retain new knowledge, making it invaluable for scholars and scribes alike. Wario might still try to steal it, just to cause a bit more chaos in the academic world.",
    "category": "premium",
    "price": 1000,
    "icon": "🎓",
    "stock": 2,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "enhanced concentration",
      "passive knowledge retention"
    ],
    "vendor": "student_store",
    "shippedBy": "priority_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Concentration",
        "rules": "The wearer gains a +2 bonus to all Intelligence checks and saving throws. This effect lasts for the duration of any study or focused activity."
      },
      {
        "title": "Passive Knowledge Retention",
        "rules": "At the start of each short rest, the wearer gains proficiency with one skill not already known by them. This effect can be used once per day and has no save DC."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to enhance their foundational skills.",
    "vendorReason": "The student store caters to the needs of scholars who require tools to excel in their studies.",
    "shippingDetail": "Delivered within a week, ensuring that students can start using it right away.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of each day or short rest.",
      "endsWhen": "At the end of one long rest after the intended use.",
      "charges": "Unlimited, but only once per day for gaining proficiency with a new skill."
    },
    "priceReason": "Balanced at 1000 XP to reflect its premium quality and unique benefits without being overpowered.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-23T22:18:35.482863+00:00",
    "aiReviewedAt": "2026-07-23T22:18:35.482863+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_spectral_notebook": {
    "id": "kivotos_item_spectral_notebook",
    "name": "The Echoing Codex",
    "description": "The Echoing Codex is a leather-bound notebook with faded, spectral pages filled with long-lost knowledge. Its cover glows faintly, whispering of forgotten eras and academic prowess. Writing within it allows you to briefly summon spectral duplicates that can distract foes or aid in puzzle-solving, their presence a fleeting but invaluable tool for any scholar or prankster. They vanish after a few minutes, leaving behind only the echoes of their former selves.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📝",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "summon spectral duplicate",
      "puzzle-solving assistance"
    ],
    "vendor": "club_supply",
    "shippedBy": "standard_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spectral Duplication",
        "rules": "As an action, you can write a short command within the Codex to summon one spectral duplicate. The duplicate appears in an unoccupied space within 5 feet of you and lasts for up to 1 minute per level. It has the same statistics as you but is immune to most forms of damage. At the end of your turn, the duplicate vanishes."
      },
      {
        "title": "Enhanced Puzzle-Solving",
        "rules": "While within 30 feet of the Codex, you gain advantage on Intelligence (Investigation) and Dexterity (Sleight of Hand) checks made to solve puzzles or disarm traps. This effect lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "This basic tool is suitable for beginners but can be invaluable as one progresses in their studies and adventures.",
    "vendorReason": "The club supply vendor stocks a wide variety of useful tools, including this handy academic aid.",
    "shippingDetail": "Standard mail delivery is reliable but can take up to five days to arrive.",
    "usage": {
      "activation": "action",
      "duration": "up to 1 minute per level",
      "endsWhen": "the duplicate vanishes at the end of your turn or if you dismiss it as an action",
      "charges": "unlimited"
    },
    "priceReason": "The Echoing Codex is priced moderately due to its utility and the effort required to craft such a precise, enchanted notebook.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T22:18:47.276900+00:00",
    "aiReviewedAt": "2026-07-23T22:18:47.276900+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_shard_of_the_unseen": {
    "id": "almost_edge_shard_of_the_unseen",
    "name": "Shard of the Unseen",
    "description": "The Shard of the Unseen is a jagged, pulsating fragment that glows with an unsettling grey light. When held, it reveals hidden pathways and fleeting visions—mostly disturbing geometries that hint at places unseen by ordinary sight. Its power grants temporary resistance to fear effects, allowing you to remain composed in moments of terror. However, there's a minor chance (3%) each use that the wielder will be momentarily disoriented, stumbling for a round.",
    "category": "equipment",
    "price": 1000,
    "icon": "👁️",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Reveals Hidden Pathways",
      "Resistance to Fear"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Reveals Hidden Pathways",
        "rules": "When activated as an action, this shard grants you advantage on Perception checks to detect hidden or secret doors within a 10-foot radius. The effect lasts for 1 minute."
      },
      {
        "title": "Resistance to Fear",
        "rules": "For the duration of your next short rest, you have resistance to being frightened by creatures and magical effects. This effect cannot be applied more than once per day."
      }
    ],
    "levelRequirementReason": "This shard requires a minimum level of 8 due to its ability to reveal hidden pathways and grant fear resistance.",
    "vendorReason": "The Void Merchant deals in rare artifacts that allow one to glimpse the unseen, making the Shard of the Unseen an ideal addition to their inventory.",
    "shippingDetail": "Ships via Dimensional Rift courier with a delay of up to two days due to its delicate nature and the instability of the rifts it travels through.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until the effect ends",
      "endsWhen": "The effect ends when you finish a short rest or are frightened by an attack or ability.",
      "charges": "Unlimited, but each use has a minor chance of disorientation (3%)"
    },
    "priceReason": "This Shard is rare and useful for exploration and combat, making it worth the price in XP.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T22:18:51.507769+00:00",
    "aiReviewedAt": "2026-07-23T22:18:51.507769+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_signet_of_the_lost": {
    "id": "almost_edge_signet_of_the_lost",
    "name": "Signet of the Lost",
    "description": "The Signet of the Lost is a tarnished silver ring adorned with an arcane symbol of a falling doughnut. This relic grants access to the enigmatic 'Forgotten Archives,' a realm where forgotten knowledge and whimsical dreams are stored, primarily in the form of ancient recipes for pastries so terrible they could turn even the most seasoned chef into a confectionary failure. Wielding this signet also increases the chance of discovering rare and exotic ingredients used in these ill-fated desserts.",
    "category": "faction",
    "price": 1000,
    "icon": "🔑",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Access to Forgotten Archives",
      "Enhanced Discovery of Rare Ingredients"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Phase Shifter",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Access to Forgotten Archives",
        "rules": "Activates once per day. Grants temporary access to the 'Forgotten Archives,' a magical repository where knowledge and recipes are stored. The duration is until you exit or are forcibly removed from this realm."
      },
      {
        "title": "Increased Discovery of Rare Ingredients",
        "rules": "Increases the chance of finding rare ingredients by +20%. This effect lasts for 1 hour, after which the ring must be worn again to regain its benefits. No save is required; the effect is purely cumulative with other bonuses."
      }
    ],
    "levelRequirementReason": "The arcane complexity of the signet requires a minimum of fifth-level spellcasting ability.",
    "vendorReason": "The Liminal Trader, known for their dealings in mystical and lost artifacts, often acquires such relics from forgotten realms.",
    "shippingDetail": "Ships via the Phase Shifter's secret portals, arriving within a week of order placement.",
    "usage": {
      "activation": "Passive effect once per day.",
      "duration": "Until you exit the 'Forgotten Archives' or are forcibly removed.",
      "endsWhen": "You leave the realm or are expelled by magical means.",
      "charges": "Unlimited, but only one use per 24 hours."
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and unique benefits without overshadowing other items of similar rarity.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:19:04.909626+00:00",
    "aiReviewedAt": "2026-07-23T22:19:04.909626+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sticky_sweet_shovel": {
    "id": "leclaire_isle_item_sticky_sweet_shovel",
    "name": "Sticky Sweet Shovel",
    "description": "The Sticky Sweet Shovel, forged from a doughy confectionary paste, is a marvel of culinary engineering. This shovel can effortlessly scoop up an entire tray of freshly baked pies in one swipe, its hardened sugar structure making it both sturdy and sweetly sticky. It’s not just for digging; this tool can heal you when used against foes, reducing their movement speed as it leaves behind a trail of gooey delight.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥄",
    "stock": 5,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "syrupy_blast",
      "healing_scoop"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift_delivery_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Syrupy Blast",
        "rules": "When you hit an enemy with the Sticky Sweet Shovel, it releases a sticky substance that reduces their movement speed by 10 feet for 1 minute. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Healing Scoop",
        "rules": "When you use the shovel to scoop up an ally, they are healed of 2d4+3 hit points. You cannot use this ability more than twice per short or long rest."
      }
    ],
    "levelRequirementReason": "The Sticky Sweet Shovel is simple and straightforward, requiring no special training to wield.",
    "vendorReason": "Dough Depot specializes in culinary-themed gear and tools that are both functional and deliciously whimsical.",
    "shippingDetail": "Ships overnight via Swift Delivery Cart, ensuring your sticky shovel arrives fresh from the bakery.",
    "usage": {
      "activation": "As a bonus action to scoop an enemy or ally with the shovel.",
      "duration": "Instantaneous; Syrupy Blast lasts until the start of your next turn.",
      "endsWhen": "The uses are exhausted after 2 short rests, and it recharges at dawn the following day.",
      "charges": "Uses three per long rest"
    },
    "priceReason": "Balanced as a rare item, the Sticky Sweet Shovel is priced moderately to reflect its sweet but not overpowered abilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:19:19.063863+00:00",
    "aiReviewedAt": "2026-07-23T22:19:19.063863+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_crumbly_charm": {
    "id": "leclaire_isle_item_crumbly_charm",
    "name": "Crumbly Charm of Sweet Dreams",
    "description": "This fragile charm, crafted from the last crumbs of the legendary pastry chef Le Clair's final masterpiece, is said to bring sweet dreams filled with sugary delights. It crumbles in your hand but its magic lingers, granting a temporary boost to charisma and immunity to nightmares during sleep. The charm's power lies not just in its origin, but in the careful preservation by the Pastry Palace, ensuring only those of high virtue can wield it.",
    "category": "curiosities",
    "price": 1000,
    "icon": "😴",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Sweet Dreams",
      "Charisma Boost"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "magic_messenger_bird",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sweet Dreams",
        "rules": "While you sleep, you are immune to nightmares. Additionally, there is a 50% chance that you regain 1d6 + your Charisma modifier mana on waking. This effect lasts for one night of rest."
      },
      {
        "title": "Charisma Boost",
        "rules": "You gain advantage on Charisma checks and saving throws made while you are asleep, but the charm crumbles after one use. You cannot benefit from this effect again until you complete a long rest."
      }
    ],
    "levelRequirementReason": "The charm requires at least level 1 to wield effectively due to its subtle magic.",
    "vendorReason": "Only the Pastry Palace, known for its impeccable craftsmanship and integrity, sells this rare and delicate charm.",
    "shippingDetail": "The magic messenger bird delivers the charm swiftly, ensuring it arrives intact at your doorstep.",
    "usage": {
      "activation": "Passive effect upon sleeping with the charm in hand.",
      "duration": "One night of rest",
      "endsWhen": "After one use or when you complete a long rest",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The charm's mythic rarity and the Pastry Palace's dedication to quality justify its relatively high price.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-23T22:19:20.884800+00:00",
    "aiReviewedAt": "2026-07-23T22:19:20.884800+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_whirlwind_wafer": {
    "id": "leclaire_isle_item_whirlwind_wafer",
    "name": "Whirlwind Wafer of Gusting Speed",
    "description": "The Whirlwind Wafer of Gusting Speed is a compact wafer infused with the very essence of LeClaire Isle's famous gusts. When consumed, it grants you a brief burst of incredible speed, allowing you to leap and dodge like the wind itself. However, be careful not to eat too quickly or risk spinning out of control, much like Wario in his infamous dance! This wafer is known for its unique flavor that lingers on your tongue like a gusty breeze.",
    "category": "consumables",
    "price": 1000,
    "icon": "💨",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_speed_buff",
      "increase_movement_speed"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "delivery_dune_buggy",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "Upon consuming, you gain a +10-foot bonus to your speed for 1 minute. This effect can be used once per short or long rest."
      },
      {
        "title": "Dodge Grace",
        "rules": "While this effect is active, you have advantage on Dexterity saving throws and attack rolls against ranged attacks. This effect persists until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This wafer provides a quick burst of speed suitable for beginners or those needing a temporary edge.",
    "vendorReason": "Sweet Supplies specializes in snacks and treats from LeClaire Isle, making the Whirlwind Wafer a natural addition to their catalog.",
    "shippingDetail": "Shipped via dune buggy for quick delivery across the island's sandy terrain.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "1 minute or until spent, whichever comes first",
      "endsWhen": "The effect ends at the start of your next turn after consuming it",
      "charges": "Unlimited uses"
    },
    "priceReason": "This wafer is a common consumable but its unique gust-infused properties and rare capture method justify its higher price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:19:12.876047+00:00",
    "aiReviewedAt": "2026-07-23T22:19:12.876047+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_evolutionary_shard": {
    "id": "pokemon_item_evolutionary_shard",
    "name": "Evolutive Fragment",
    "description": "The Evolutive Fragment is a shimmering, crystalline shard that pulses with raw potential, a remnant of ancient Pokémon evolution. Crafted from the very essence of legendary evolution sites, this relic can accelerate a Trainer’s bond with their beast, potentially triggering an unexpected secondary evolution. Rumor has it that those who possess it might see their Pokémon's happiness increase by 5 points, fostering a deeper connection and unlocking hidden evolutionary paths.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Boosts Evolution Chance",
      "Increases Happiness"
    ],
    "vendor": "pokemart",
    "shippedBy": "delivery_only",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Boosted Evolution",
        "rules": "Activates as an action. Increases the chance of triggering an evolution by 10%, with a minimum boost to 20%. The effect ends at the start of your next turn."
      },
      {
        "title": "Happiness Boost",
        "rules": "Passive effect that increases Pokémon happiness by 5 points immediately upon activation. This effect lasts until the end of your next short or long rest, and cannot exceed a total increase of +10 to Pokémon happiness in a single day."
      }
    ],
    "levelRequirementReason": "Trainers must have at least 8th level to ensure they can properly care for their Pokémon while using the Evolutive Fragment.",
    "vendorReason": "As a trusted supplier of rare and unique items, the Pokemart is known for offering powerful tools like the Evolutive Fragment that can aid Trainers in their journey.",
    "shippingDetail": "Ships via special courier service, ensuring safe delivery within 24 hours.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect with a duration of one turn for the Evolution boost and until the end of your next rest for the Happiness increase.",
      "endsWhen": "The effects end when you take another action or reaction, or at the start of your next turn after activation.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Evolutive Fragment is priced at 1000 XP as it offers significant evolutionary benefits and happiness boosts that can greatly impact a Trainer's journey.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:20:17.123505+00:00",
    "aiReviewedAt": "2026-07-23T22:20:17.123505+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_hyper_potion": {
    "id": "pokemon_item_hyper_potion",
    "name": "Hyper Potion of Fury",
    "description": "The Hyper Potion of Fury is a volatile concoction, its vial swirling with the raw energy of a raging tempest and the fierce might of a dragon's breath. This potion not only restores your Pokémon to full health but also grants it an electrifying boost in speed, making it faster than any ordinary trainer could follow. With this potion at hand, you'll be ready for any challenge, whether it's catching that elusive Pokémon or outmaneuvering a rival team.",
    "category": "consumables",
    "price": 1000,
    "icon": "💧",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Restores full HP",
      "Grants +3 Speed for 3 turns"
    ],
    "vendor": "safari_shop",
    "shippedBy": "delivery_only",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Full Health",
        "rules": "When consumed, this potion instantly restores the user's Pokémon to its maximum hit points. It has no save DC and is a single-use item."
      },
      {
        "title": "Speed Boost",
        "rules": "For the next three turns, the user’s Pokémon gains an additional +3 Speed stat bonus. This effect ends naturally after 3 turns or if the user takes any action that requires their turn."
      }
    ],
    "levelRequirementReason": "This potion is designed to be accessible for beginners and experienced trainers alike, making it a common item.",
    "vendorReason": "The Safari Shop caters to all Pokémon trainers, offering essential items like the Hyper Potion of Fury.",
    "shippingDetail": "This potion is shipped via a trusted courier and must be delivered in person for safety reasons.",
    "usage": {
      "activation": "Eaten by the user’s Pokémon as a free action",
      "duration": "Instantaneous; ends after three turns or when the effect is interrupted",
      "endsWhen": "Naturally after three turns, or if the Pokémon takes any action that requires its turn",
      "charges": "Unlimited"
    },
    "priceReason": "The increased potency and unique effects of this potion justify a higher price in XP.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:19:45.538005+00:00",
    "aiReviewedAt": "2026-07-23T22:19:45.538005+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_legendary_aurora_crest": {
    "id": "pokemon_item_legendary_aurora_crest",
    "name": "Aurora Crest of the Ancients",
    "description": "The Aurora Crest of the Ancients is a gleaming, crystalline pendant forged during a breathtaking celestial aurora. Crafted from ancient meteoric iron and adorned with gemstones said to capture the essence of legendary beasts, it grants its wearer control over Pokémon weather abilities and a fleeting alliance with a legendary creature. Though these fabled companions are often silent observers, their presence alone can shift the winds or calm a storm at your command.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Weather Mastery",
      "Legendary Companionship"
    ],
    "vendor": "league_store",
    "shippedBy": "Express Windrunner Courier",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Weather Mastery",
        "rules": "As an action, you gain control over weather conditions within a 50-foot radius. This effect lasts for 1 minute and can be used once per short or long rest."
      },
      {
        "title": "Legendary Companionship",
        "rules": "Once per day, you can summon a legendary Pokémon as an ally. The creature remains with you for 1 hour and then returns to its own plane of existence. If the summoned creature is attacked, it fights back until you dismiss it or it is defeated."
      }
    ],
    "levelRequirementReason": "This crest requires a high-level character to properly utilize its powerful effects.",
    "vendorReason": "The league store specializes in rare and legendary items, making the Aurora Crest of the Ancients an appropriate addition.",
    "shippingDetail": "Ships via Express Windrunner Courier, ensuring swift delivery within a week.",
    "usage": {
      "activation": "Action or reaction (Weather Mastery); once per day (Legendary Companionship)",
      "duration": "1 minute (Weather Mastery); 1 hour (Legendary Companionship)",
      "endsWhen": "Ends when the effect duration expires, and upon being dismissed by the wearer.",
      "charges": "Recharge after a short or long rest"
    },
    "priceReason": "The balanced XP price reflects its powerful abilities and rarity.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T22:19:34.447601+00:00",
    "aiReviewedAt": "2026-07-23T22:19:34.447601+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_goblin_grog": {
    "id": "middle_earth_goblin_grog",
    "name": "Goblin Grog of Grumbling Gut",
    "description": "The Goblin Grog of Grumbling Gut is a suspiciously green elixir that smells faintly of mildew and regret, yet it's surprisingly potent in boosting strength. Drink this foul-smelling concoction to gain +2 Strength for the next 10 turns, but be prepared to move with an awkward goblin-like gait at a reduced speed for 5 turns. The liquid is known to cause uncontrollable giggles in 10% of cases, making you feel like a particularly grumpy goblin for as long as it lasts.",
    "category": "consumables",
    "price": 1000,
    "icon": "🤢",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Strength Boost",
      "Goblin Gait"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "When consumed, the drink grants +2 to Strength for 10 turns. This effect is instantaneous upon drinking and does not require any action."
      },
      {
        "title": "Goblin Gait",
        "rules": "After consuming, your movement speed is reduced by -1 step for 5 turns. This penalty begins immediately after the strength boost ends, unless interrupted by other actions or effects."
      }
    ],
    "levelRequirementReason": "Beginners can afford to experiment with this unpredictable potion without facing severe penalties.",
    "vendorReason": "The local shopkeeper at the Shire is known for selling quirky and experimental items, making the Goblin Grog a fitting addition.",
    "shippingDetail": "Ships via friendly pony cart with no delivery delay; guaranteed safe arrival within 3 days.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "10 turns (strength boost) + 5 turns (goblin gait)",
      "endsWhen": "Effect duration ends naturally or if consumed again",
      "charges": "Unlimited; can be consumed repeatedly"
    },
    "priceReason": "The potion's unpredictable effects, combined with its experimental nature and the Shire's reputation for quirky items, justify this balanced price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:19:54.885677+00:00",
    "aiReviewedAt": "2026-07-23T22:19:54.885677+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_elf_song_petal": {
    "id": "middle_earth_elf_song_petal",
    "name": "Songpetal of Silent Sorrow",
    "description": "The Songpetal of Silent Sorrow is a single, iridescent petal from a flower that blooms only in the deepest elven forests. When held, it releases a haunting melody that lingers in the air, evoking a deep melancholy or nostalgia within those who hear it. The petal's ethereal glow and delicate structure seem to whisper of ancient sorrows and unspoken regrets. It is said that those who possess this petal can feel a kinship with all things lost and forgotten.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌸",
    "stock": 33,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "melancholic melody",
      "restores mana"
    ],
    "vendor": "elven_market",
    "shippedBy": "dragon_airship",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Melancholic Melody",
        "rules": "When activated as an action, the Songpetal releases a haunting melody that targets all creatures within 30 feet. Creatures must make a Wisdom saving throw (DC 14) or be charmed for 1 minute by the melancholy song. Once a creature succeeds on its save against this effect, it is immune to it for 24 hours."
      },
      {
        "title": "Restores Mana",
        "rules": "When held, the Songpetal provides minor healing over time, restoring 25 mana at the start of each of the wielder's turns. This effect lasts until the end of the wielder's next long rest."
      }
    ],
    "levelRequirementReason": "The petal's ancient magic requires a certain level of spiritual and magical awareness to properly harness its effects.",
    "vendorReason": "The elven market is known for its deep connection with nature and arcane knowledge, making it the perfect place to find such an item.",
    "shippingDetail": "Ships via a dragon airship, ensuring swift delivery from the heart of Middle-earth's ancient forests.",
    "usage": {
      "activation": "Activates as an action. The melody lasts for 1 minute.",
      "duration": "The melody lasts for 1 minute and can be renewed by repeating the activation action.",
      "endsWhen": "The melody ends when the wielder is incapacitated or the petal is destroyed.",
      "charges": "Unlimited uses, but only one melody can be active at a time."
    },
    "priceReason": "The item's rarity and the significant magical properties make it a high-priced curiosity that few adventurers are willing to part with.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:20:02.359052+00:00",
    "aiReviewedAt": "2026-07-23T22:20:02.359052+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chromatic_scroll": {
    "id": "kivotos_item_chromatic_scroll",
    "name": "Chromatic Scroll of Minor Manifestation",
    "description": "This Chromatic Scroll of Minor Manifestation is a peculiar relic, its surface adorned with swirling hues that shift like a prism under candlelight. It exudes an enticing aroma of bubblegum and nostalgia, hinting at forgotten magic. When unfurled, it briefly summons a shimmering duplicate of the user, perfect for distracting foes or impressing friends, though the duplicate is prone to minor misadventures, such as accidentally knocking over nearby objects in its confusion.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Minor Duplication",
      "Charisma Boost"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Duplication",
        "rules": "The user briefly gains a shimmering duplicate that lasts for 1 minute. The duplicate is an illusion and can be used to distract foes or friends. It has no physical substance but can interact with objects within reach, causing minor disruptions. The duplicate cannot attack or cast spells."
      },
      {
        "title": "Charisma Boost",
        "rules": "The user gains a +1 bonus to their Charisma (Performance) checks and saving throws for 3 turns after using the scroll. This effect does not stack with other sources of temporary bonuses."
      }
    ],
    "levelRequirementReason": "This scroll is suitable for beginners, providing them with a taste of magical experimentation.",
    "vendorReason": "The student store caters to the whimsical needs of young adventurers seeking small wonders and magical novelties.",
    "shippingDetail": "Delivered by autonomous drones, ensuring quick arrival without mishap.",
    "usage": {
      "activation": "A bonus action to unfurl and activate the scroll.",
      "duration": "The effects last for their specified durations upon activation.",
      "endsWhen": "The effects end when the duration expires or when the user retracts the scroll, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects a balanced adjustment for a versatile and useful magical trinket that is both fun and slightly risky to use.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:20:07.161142+00:00",
    "aiReviewedAt": "2026-07-23T22:20:07.161142+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_reinforced_notepad": {
    "id": "kivotos_item_reinforced_notepad",
    "name": "Reinforced Notepad of Scholarly Defense",
    "description": "The Reinforced Notepad of Scholarly Defense is a titanium-bound notebook that feels as sturdy as it looks, crafted by the hands of diligent scholars and enchanted to resist magical incursions. It offers a scholar or student a temporary shield against minor spells, bolstering their defenses during critical moments. With each page filled with equations or notes, it gains strength, deflecting more than just ink – it can also mitigate the effects of a professor's ire by reducing incoming spell damage.",
    "category": "equipment",
    "price": 1000,
    "icon": "📝",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Deflect Minor Spells",
      "Reduce Spell Damage"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deflect Minor Spells",
        "rules": "As an action, you can activate this notepad to deflect one minor magical projectile. It has a chance to reduce the spell's damage by half for up to 1 minute."
      },
      {
        "title": "Reduce Spell Damage",
        "rules": "For 1 hour after activating it, whenever you are targeted by a spell that deals damage to you, there is a 20% chance that the damage is reduced by 5 points. This effect does not stack with itself."
      }
    ],
    "levelRequirementReason": "This notepad can be used by anyone, offering immediate utility for students and scholars alike.",
    "vendorReason": "Academy Armory stocks this item as it's a practical tool for the student body to protect themselves during lectures and exams.",
    "shippingDetail": "Ships via Courier Pigeon, delivered within 3 days of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute per use",
      "endsWhen": "The notepad's effects expire after a single use or when the notepad is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "This item provides useful and immediate protection, justifying its price as a rare, limited stock.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:20:29.002149+00:00",
    "aiReviewedAt": "2026-07-23T22:20:29.002149+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_procrastination": {
    "id": "kivotos_item_halo_of_procrastination",
    "name": "Halo of Procrastination",
    "description": "The Halo of Procrastination gleams with a soft, shifting light that seems to dance in the air around you. This shimmering crown promises heightened focus and productivity... or at least an illusion thereof. Worn by a student, you'll find yourself endlessly researching obscure topics, rearranging your desk, and debating the merits of different stationery brands. While it may seem like a boon for academic pursuits, the halo's true nature is to sap your concentration, leaving you perpetually distracted with trivial matters.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💫",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Distracted Focus",
      "Research Delays"
    ],
    "vendor": "club_supply",
    "shippedBy": "Night Courier",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Distracted Focus",
        "rules": "While wearing the Halo of Procrastination, you must make a Wisdom saving throw at the start of each combat round. On a failed save, you skip your next action and instead spend an additional minute debating the finer points of stationery brands, which can be interrupted by any creature within 5 feet."
      },
      {
        "title": "Research Delays",
        "rules": "You gain +3 to Intelligence checks related to research or trivia. However, this bonus is negated during combat rounds in which you failed the Wisdom save for Distracted Focus. The halo's effects last until the start of your next short rest."
      }
    ],
    "levelRequirementReason": "The complexity and potential interference with combat make the Halo of Procrastination suitable only for players at least level 11.",
    "vendorReason": "Club Supply caters to academic and scholarly needs, making it a fitting vendor for items like the Halo of Procrastination.",
    "shippingDetail": "Delivered under cover of darkness by the Night Courier, ensuring you have your new distraction ready for the next morning.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until start of your next short rest or interrupted by a failed Wisdom saving throw.",
      "endsWhen": "The start of your next short rest, upon failing a Wisdom save during combat rounds, or if you remove the halo from your head.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's balance is adjusted to 1000 XP, reflecting its unique and potentially disruptive effect on gameplay.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T22:20:35.189629+00:00",
    "aiReviewedAt": "2026-07-23T22:20:35.189629+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_shiny_stone": {
    "id": "pokemon_item_shiny_stone",
    "name": "Prismatic Evolution Shard",
    "description": "This shimmering shard pulses with an array of colors, each hue representing a different Pokémon type. Crafted from rare mineral fragments found deep within the Unova region, it dramatically increases your chances of evolving a Pokémon into its shiny form when used during an evolution attempt. However, overuse can attract unwanted attention and suspicion among trainers who are particularly adept at detecting anomalies. Wario’s keen eye for shiny Pokémon has made this shard immensely popular in his shop, offering players the chance to enhance their teams with these rare forms.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Increases shiny evolution chance by 20%",
      "Passive luck bonus on all Pokémon-related checks"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Winged Pokemon Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Shiny Evolution",
        "rules": "Activates during a Pokémon evolution attempt. Increases the probability of a shiny evolution by 20%. Has no effect if the Pokémon is already shiny. Ends when used or after one successful evolution attempt."
      },
      {
        "title": "Passive Luck Bonus",
        "rules": "Grants a +2 bonus on all ability checks related to Pokémon, including capturing, battling, and breeding. Lasts for 1 hour per use. Ends if the user is defeated in battle or falls unconscious."
      }
    ],
    "levelRequirementReason": "Players with less experience can benefit from this item as it aids in a critical aspect of Pokémon training without requiring high-level skills.",
    "vendorReason": "The Safari Shop is known for its unique and helpful items, making the Prismatic Evolution Shard an essential addition to their inventory.",
    "shippingDetail": "Ships via a specialized Winged Pokémon courier; delivery can take up to two days depending on location.",
    "usage": {
      "activation": "Used during a Pokémon evolution attempt or when making a Pokémon-related check.",
      "duration": "Instantaneous for the shiny evolution effect, lasts 1 hour for the luck bonus effect.",
      "endsWhen": "After one successful shiny evolution or if the user is defeated in battle or falls unconscious.",
      "charges": "Unlimited; can be used multiple times without recharging."
    },
    "priceReason": "The Prismatic Evolution Shard offers a significant advantage in Pokémon training and battling, justifying its high price in experience points.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:21:07.273168+00:00",
    "aiReviewedAt": "2026-07-23T22:21:07.273168+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_steel_gauntlet": {
    "id": "pokemon_item_steel_gauntlet",
    "name": "Ironclad Trainer's Fist",
    "description": "The Ironclad Trainer's Fist is a gauntlet forged from hardened steel, imbued with the resilient spirit of a Steel-type Pokémon. Its surface gleams with a subtle metallic sheen, and its core pulses faintly with latent power. This formidable accessory not only grants +5 Defense but also offers an unexpected advantage: there's a 30% chance to deflect incoming status effects, ensuring you remain in peak fighting condition. When subjected to powerful blows, it enhances your resistance to knockback by 20%, crucial for enduring relentless attacks without losing ground.",
    "category": "equipment",
    "price": 1000,
    "icon": "💪",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+5 Defense",
      "30% chance to deflect status effects"
    ],
    "vendor": "league_store",
    "shippedBy": "Express Delivery Pigeon",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "+5 Defense",
        "rules": "The Ironclad Trainer's Fist provides a +5 bonus to your AC. This effect is always active, offering continuous protection in combat."
      },
      {
        "title": "30% chance to deflect status effects",
        "rules": "At the start of each of your turns while wearing the gauntlet, you have a 30% chance that an incoming status effect (such as Poison or Paralysis) is deflected. If successful, the effect does not take hold."
      }
    ],
    "levelRequirementReason": "The Ironclad Trainer's Fist requires at least level 8 to wield effectively, ensuring it complements higher-level trainers' abilities.",
    "vendorReason": "As the official vendor for high-ranking trainers and their gear, league_store is well-known for offering items that enhance a trainer’s prowess.",
    "shippingDetail": "The Express Delivery Pigeon ensures quick delivery, making sure you receive your Ironclad Trainer's Fist in perfect condition.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous (effectively permanent until lost or destroyed)",
      "endsWhen": "Destroyed upon losing the gauntlet or when it is explicitly broken by a powerful force",
      "charges": "Unlimited"
    },
    "priceReason": "The Ironclad Trainer's Fist offers substantial defensive and situational advantages, justifying its price in game XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:20:47.460735+00:00",
    "aiReviewedAt": "2026-07-23T22:20:47.460735+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_phantom_lantern": {
    "id": "pokemon_item_phantom_lantern",
    "name": "Echoing Dusk Lantern",
    "description": "The Echoing Dusk Lantern glows with an eerie, phosphorescent light that reveals the faint outlines of ghostly Pokémon lurking in the shadows. This lantern casts a spell of spectral perception, allowing you to see through darkness as if it were daylight and granting +2 to Perception checks. The lantern's core is said to be haunted by the spirit of a lost Pikachu, making it a dangerous yet invaluable tool for any night-time explorer or trainer seeking to uncover hidden Pokémon. Wario himself has been known to carry one, though he claims it’s only because 'it might help me catch that missing Pikachu.'",
    "category": "curiosities",
    "price": 1000,
    "icon": "👻",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Reveals ghostly Pokémon and their location",
      "+2 Perception"
    ],
    "vendor": "pokemart",
    "shippedBy": "Dark Lugia Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Spectral Perception",
        "rules": "When activated, the lantern grants you advantage on Perception checks made to locate hidden or unseen creatures within a 30-foot radius. The effect lasts for 1 minute and ends early if the lantern is destroyed or extinguished."
      },
      {
        "title": "+2 Perception",
        "rules": "The lantern provides a +2 bonus to your Perception ability score while it is active, which can be used once per short rest."
      }
    ],
    "levelRequirementReason": "Only those with at least 10th level can wield the Echoing Dusk Lantern due to its spectral abilities and the danger of interacting with ghostly Pokémon.",
    "vendorReason": "The pokemart caters exclusively to trainers who need the latest tools for their adventures, including this rare and powerful lantern.",
    "shippingDetail": "Ships via Dark Lugia Courier with a 24-hour delivery time due to the lantern's fragile nature.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute, up to once per short rest",
      "endsWhen": "Destroyed or extinguished by the user",
      "charges": "Unlimited"
    },
    "priceReason": "The Echoing Dusk Lantern is priced at 1000 XP due to its spectral abilities, rarity, and the potential risk of encountering ghostly Pokémon.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:21:00.674893+00:00",
    "aiReviewedAt": "2026-07-23T22:21:00.674893+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_forbidden_shadow_stone": {
    "id": "equestria_item_forbidden_shadow_stone",
    "name": "Shadow Stone of Discord",
    "description": "The Shadow Stone of Discord pulses with a dark obsidian sheen, its aura radiating unease and discord among those who touch it. Legend says it was crafted by Nightmare Moon in her shadowy realm, and prolonged exposure can subtly warp the alignment of the user's party toward conflict and dissent. Handle this artifact with extreme caution—or don't at all; for once wielded, you may find yourself mired in strife.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "discordance",
      "alignment shift"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Guard Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Discordance",
        "rules": "Each creature within 10 feet of the stone must succeed on a DC 15 Wisdom saving throw or be affected by the confusion condition for 1 minute. The effect ends early if the confused creature takes any action."
      },
      {
        "title": "Alignment Shift",
        "rules": "The user's party has their alignment score reduced by 2, which lasts until a short or long rest is taken. This effect can be resisted with a successful DC 15 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "This powerful artifact requires the user to have significant experience and control to handle its effects responsibly.",
    "vendorReason": "Canterlot Commerce, known for their extensive collection of rare and forbidden artifacts, has acquired this item from a mysterious source.",
    "shippingDetail": "The stone is delivered in a specially crafted container to prevent accidental activation during transit.",
    "usage": {
      "activation": "Object interaction (requires a bonus action)",
      "duration": "Instantaneous effect; lasts until the end of your next turn or ends early due to confusion",
      "endsWhen": "The confused creature takes an action, or after one minute if no actions are taken",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This artifact is considered rare and powerful, making it a significant investment for any party.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T22:21:41.608023+00:00",
    "aiReviewedAt": "2026-07-23T22:21:41.608023+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_elemental_grappling_hook": {
    "id": "equestria_item_elemental_grappling_hook",
    "name": "Hook of the Storm Winds",
    "description": "The Hook of the Storm Winds is a crystalline grappling hook forged in the heart of Equestria's Crystal Empire. Crafted from purest amethyst and imbued with the power of the wind, it hums with energy when exposed to air currents. This tool allows swift ascent up vertical surfaces and can swing across gaps with precision, making it indispensable for explorers and adventurers alike. Just be wary—its stormy nature may yet catch you off guard if used recklessly.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪨",
    "stock": 78,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "storm_wind_ascent",
      "cross_gap"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Storm Wind Ascent",
        "rules": "As a bonus action, the wielder can cause the hook to extend and retract with a burst of wind. This grants advantage on Strength (Athletics) checks made to climb for up to one minute."
      },
      {
        "title": "Cross Gap",
        "rules": "The hook can be used as an action to swing across gaps between two points, provided the distance is no more than 30 feet and both points are within reach. This grants a +2 bonus on Dexterity (Acrobatics) checks made during the swing."
      }
    ],
    "levelRequirementReason": "The intricate enchantments require a basic understanding of magical energies.",
    "vendorReason": "Known for their mastery of crystal and magic, the Crystal Empire is the source of this enchanted tool.",
    "shippingDetail": "Ships via Crystal Express within a week, delivered by an expert courier.",
    "usage": {
      "activation": "Bonus action to extend/retract; action for swinging across gaps",
      "duration": "One minute from activation or until swung across a gap",
      "endsWhen": "The effect ends when the duration expires or if the hook is retracted",
      "charges": "Unlimited uses, but only one swing per day"
    },
    "priceReason": "Balanced for its utility and limited daily usage.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-23T22:21:03.453060+00:00",
    "aiReviewedAt": "2026-07-23T22:21:03.453060+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_legendary_battle_crest": {
    "id": "pokemon_item_legendary_battle_crest",
    "name": "Trainer’s Fury Emblem",
    "description": "The Trainer’s Fury Emblem, a gleaming crest forged from the scales of a legendary Pokémon, radiates an aura of strategic prowess. Crafted in the heart of the Unova region by master craftsmen, this emblem enhances your reflexes and ability to predict your opponent's moves with uncanny accuracy. While it doesn’t guarantee success, its wearer can exploit openings more effectively, turning the tide of battle in their favor.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Evasion Boost",
      "Predictive Counter"
    ],
    "vendor": "league_store",
    "shippedBy": "Elite Pokémon Courier",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Evasion Boost",
        "rules": "While wearing the Trainer’s Fury Emblem, you gain a +25% bonus to your Dexterity saving throws and initiative checks. This effect is active as long as you are wearing the emblem."
      },
      {
        "title": "Predictive Counter",
        "rules": "As an action, you can attempt to predict your opponent's next move. If successful, there’s a 30% chance that you counter their attack or spell. This effect has a cooldown of one long rest."
      }
    ],
    "levelRequirementReason": "Requires significant experience and skill to harness the emblem's strategic prowess effectively.",
    "vendorReason": "The league store specializes in gear for competitive trainers, ensuring only the most potent and balanced items are sold there.",
    "shippingDetail": "Delivered with utmost care by trusted Pokémon messengers, ensuring the emblem arrives pristine and intact.",
    "usage": {
      "activation": "Action or Reaction (to counter an opponent's move)",
      "duration": "Instantaneous or one round if used to counter a move",
      "endsWhen": "Exhausted after use or when removed from your person",
      "charges": "Unlimited, recharged with rest"
    },
    "priceReason": "Balanced at this price point as it provides significant strategic advantage without overpowered mechanics.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T22:21:46.019203+00:00",
    "aiReviewedAt": "2026-07-23T22:21:46.019203+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_potion_of_swiftness": {
    "id": "pokemon_item_potion_of_swiftness",
    "name": "Hyper Speed Elixir",
    "description": "The Hyper Speed Elixir is a shimmering, iridescent potion that glows with the essence of legendary Pokémon. This rare concoction enhances your speed and agility, allowing you to outmaneuver foes in combat. Upon consumption, it grants a temporary boost to your Dexterity (Speed) by 50%, enabling you to dodge attacks with ease for one turn. You can also move twice as fast during this time, outrunning even the swiftest Pokémon. The potion’s effects are fleeting but potent, ensuring that you stay ahead of danger.",
    "category": "consumables",
    "price": 1000,
    "icon": "⚡",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Dodge Boost",
      "Speed Surge"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Winged Pokémon Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dodge Boost",
        "rules": "When consumed, the user gains a +50% bonus to Dexterity (Speed) for one turn. This increases their chance of dodging all physical attacks by 20%. The effect lasts until the start of your next turn."
      },
      {
        "title": "Speed Surge",
        "rules": "For the duration of the potion, you can move twice as fast during combat encounters and exploration. You gain a +4 bonus to movement speed for one minute after drinking this potion."
      }
    ],
    "levelRequirementReason": "This potion is designed for beginners who need an extra edge in their early adventures.",
    "vendorReason": "The Safari Shop specializes in potions and elixirs that enhance the speed of trainers and explorers, making it a perfect fit for this item.",
    "shippingDetail": "Ships within three days via Winged Pokémon Courier service. Delivered fresh and potent.",
    "usage": {
      "activation": "Consume the potion as an action.",
      "duration": "Instantaneous effect; lasts until the start of your next turn for Dodge Boost, and one minute for Speed Surge.",
      "endsWhen": "The potion’s effects end when you take damage or are incapacitated.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the high demand for speed-enhancing potions, as it is a critical advantage in many battles and explorations.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:21:20.450230+00:00",
    "aiReviewedAt": "2026-07-23T22:21:20.450230+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_potion_of_minor_healing": {
    "id": "faerun_item_potion_of_minor_healing",
    "name": "Potion of Minor Healing (Faerûn Style)",
    "description": "This vibrant green potion smells suspiciously like a mix of swamp berries and questionable mushrooms, emitting an earthy aroma that clings to your nostrils long after uncorking it. The liquid inside shimmers with a faint glow, hinting at its alchemical origins. Drink it down quickly, and you'll recover 25 hit points, but beware—this potent brew can leave you feeling light-headed for the next hour. Wario's approval comes with a caveat: don't expect to be fighting any dragons afterward!",
    "category": "consumables",
    "price": 1000,
    "icon": "🌿",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Heal",
      "Temporary Dizziness"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heal",
        "rules": "When consumed, the potion heals you by 25 hit points. This effect is instantaneous and has no save or range requirement."
      },
      {
        "title": "Temporary Dizziness",
        "rules": "For one hour after consuming this potion, you are prone to feeling light-headed and disoriented, reducing your speed by half until the effects wear off. There is no save against this effect."
      }
    ],
    "levelRequirementReason": "This potion is designed for beginners who need a bit of extra healing in their adventures.",
    "vendorReason": "Baldur's Bazaar stocks common items that are essential for all adventurers, including this reliable healing potion.",
    "shippingDetail": "The potion is shipped via a swift hawk courier, ensuring it arrives fresh and potent at your doorstep.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "Instantaneous heal; dizziness lasts for one hour",
      "endsWhen": "Effect ends after one hour or if you use another potion of minor healing in the same day",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the balanced cost to recover significant hit points without being overpowered.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:21:35.019733+00:00",
    "aiReviewedAt": "2026-07-23T22:21:35.019733+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_scroll_of_protection_from_elementals": {
    "id": "faerun_item_scroll_of_protection_from_elementals",
    "name": "Scroll of Protection from Elementals (Faerûn)",
    "description": "The Scroll of Protection from Elementals is a tattered parchment inscribed with ancient eldritch runes. Crafted by a paranoid wizard in the shadowy catacombs beneath Waterdeep, it promises temporary immunity to elemental fury. When unfurled, it grants protection against the raw power of nature's wrath, offering resistance to cold and lightning damage for 1 minute. Should an elemental assault come, this scroll ensures that you stand firm, bolstered by the ancient magic woven into its very fibers.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Elemental Resistance",
      "Saving Throws Advantage"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "messenger_pigeon",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Elemental Resistance",
        "rules": "Activates as a bonus action. Grants resistance to cold and lightning damage for 1 minute, ending early if you take elemental damage or if the scroll is damaged."
      },
      {
        "title": "Saving Throws Advantage",
        "rules": "While the Elemental Resistance effect lasts, you gain advantage on saving throws against spells cast by elementals. This effect ends when the resistance ends or if you fail a saving throw."
      }
    ],
    "levelRequirementReason": "This scroll is designed for adventurers who have already faced elemental threats and require a more focused defense.",
    "vendorReason": "Waterdeep Market, known for its diverse wares, sells this scroll to protect the city's denizens from elemental attacks.",
    "shippingDetail": "Delivered by swift messenger pigeon, ensuring timely arrival even in the heart of Waterdeep's bustling streets.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute",
      "endsWhen": "You take elemental damage or if the scroll is damaged",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure that this scroll remains a valuable tool for adventurers without being overpowered.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T22:21:34.837867+00:00",
    "aiReviewedAt": "2026-07-23T22:21:34.837867+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_ember_charm": {
    "id": "teyvat_item_ember_charm",
    "name": "Ember Charm of Shifting Flames",
    "description": "The Ember Charm of Shifting Flames hums softly, pulsing with a warm, flickering light that dances like embers in a forge. Crafted from obsidian and imbued with Pyro essence by an alchemist in Mondstadt, this trinket not only illuminates your path but also subtly warms the air around you, making it perfect for those chilly nights. With each use, the charm's flames may ignite nearby flammable objects, so be cautious when using it indoors!",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "lighting",
      "flammability_risk"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Swift Courier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lighting",
        "rules": "When activated as a bonus action, the Ember Charm emits a soft glow that provides dim light in a 10-foot radius for 1 hour. The light is gentle and warm, ideal for illuminating dark corners or guiding your party through a shadowy cave."
      },
      {
        "title": "Flammability Risk",
        "rules": "There's a 25% chance that the Ember Charm will ignite any flammable object within 10 feet of you when its light is active. This effect has no save DC and lasts for as long as the lighting effect. The risk decreases by 5% after each use until it disappears."
      }
    ],
    "levelRequirementReason": "This charm is designed to be accessible, even to new adventurers who may not have mastered more potent Pyro abilities yet.",
    "vendorReason": "Mondstadt Market stocks a variety of useful and whimsical items that cater to the needs of all adventurers, from beginners to seasoned heroes.",
    "shippingDetail": "Delivered swiftly by the reliable Swift Courier Pigeon, ensuring you receive your Ember Charm promptly without any delays.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour",
      "endsWhen": "The lighting effect ends when its duration expires or when a creature within the area of light uses an action to dispel it.",
      "charges": "Unlimited, but the flammability risk decreases by 5% after each use."
    },
    "priceReason": "The Ember Charm is priced at 1000 XP due to its unique combination of utility and potential hazard, making it a valuable yet balanced addition to any adventurer's arsenal.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:22:10.001913+00:00",
    "aiReviewedAt": "2026-07-23T22:22:10.001913+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_phantom_silk": {
    "id": "teyvat_item_phantom_silk",
    "name": "Phantom Silk Scarf of Whispering Winds",
    "description": "Woven from the very threads of a Mizumoto illusion, this Phantom Silk Scarf of Whispering Winds seems to ripple with unseen currents and whispers secrets only a master manipulator would understand. It offers minor protection against the elements and provides resistance to cold, making it indispensable for those navigating the unpredictable climates of Inazuma. The scarf not only enhances movement speed by 5% but also grants a chance to dispel any status effect that might hinder its wearer.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌬️",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Movement",
      "Cold Resistance"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Enhanced Movement",
        "rules": "The user gains a +5% bonus to their movement speed while wearing the scarf. This effect is passive and lasts until removed."
      },
      {
        "title": "Cold Resistance",
        "rules": "The wearer has resistance to cold damage, reducing all cold-based attacks by 10%. This benefit persists for 1 minute upon activation or until a successful DC 13 Constitution saving throw ends it. The scarf can dispel one status effect per day."
      }
    ],
    "levelRequirementReason": "The intricate weaving and magical properties of the Phantom Silk Scarf demand a proficient user.",
    "vendorReason": "Inazuma Imports is known for importing exotic and enchanted goods from across Teyvat, including this unique artifact.",
    "shippingDetail": "The scarf is delivered via the Sea Serpent Express with expedited shipping to ensure timely arrival.",
    "usage": {
      "activation": "Activates upon donning and can be dispelled by a successful DC 13 Constitution saving throw.",
      "duration": "Passive; lasts until removed or dispelled.",
      "endsWhen": "The effect ends if the scarf is removed, or through a successful Constitution saving throw.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Considering its unique enchantments and limited availability, this item's price reflects its value in both utility and rarity.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:22:03.900828+00:00",
    "aiReviewedAt": "2026-07-23T22:22:03.900828+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_forbidden_rune": {
    "id": "teyvat_item_forbidden_rune",
    "name": "Rune of Unmaking - Minor",
    "description": "The Rune of Unmaking - Minor is a fragment of reality warped by dark magic, its surface etched with runes that glow with an eerie, shifting light. Crafted from the shattered remnants of ancient forges, this rune holds enough power to unravel the very fabric of existence. Use it sparingly, as even a minor slip can result in catastrophic consequences—either devastating your foes or causing unintended harm to you and those around you.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💀",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "deals_15_magic_damage_to_target",
      "small_probability_of_causing_self_harm"
    ],
    "vendor": "shadow_market",
    "shippedBy": "Nightmare Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dealing Magic Damage",
        "rules": "When activated, the rune unleashes a surge of chaotic energy that deals 15 necrotic damage to a single target within 30 feet. The target can make a DC 14 Constitution saving throw to halve the damage."
      },
      {
        "title": "Self-Harm Risk",
        "rules": "There is a 20% chance (DC 14) that activating the rune causes you, the user, to take 5 necrotic damage. This effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "The rune's unpredictable nature and potential for self-harm make it dangerous even for lower-level characters.",
    "vendorReason": "The Shadow Market specializes in forbidden and dangerous items, making the Rune of Unmaking - Minor a fitting addition to their catalog.",
    "shippingDetail": "Shipping via Nightmare Delivery can take up to two days due to the rune's unstable nature. The package arrives under heavy security measures.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends once it is resolved or interrupted by an action.",
      "charges": "Unlimited, but only one use per short rest"
    },
    "priceReason": "The rune's unpredictable nature and the risk of self-harm justify its moderate price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:22:44.294086+00:00",
    "aiReviewedAt": "2026-07-23T22:22:44.294086+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_league_badge_of_valor": {
    "id": "pokemon_item_league_badge_of_valor",
    "name": "Badge of Valor – Trainer’s Pride",
    "description": "The Badge of Valor – Trainer’s Pride is a gleaming, intricately engraved medal forged by the Elite Four themselves. Its surface shimmers with an ever-present, subtle glow that not only bolsters your confidence but also subtly enhances your physical form, making you feel as though you could conquer any challenge. Legend has it that those who wear this badge are imbued with a spirit of resilience and unparalleled skill, ready to face the most formidable battles.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏆",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Confidence Boost",
      "Enhanced Physical Presence"
    ],
    "vendor": "league_store",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Confidence Boost",
        "rules": "When you wear this badge, it grants you a +1 bonus to your Charisma (Persuasion) checks and a +2 bonus to your attack rolls for the duration of any battle. This effect lasts until the start of your next turn after the battle ends."
      },
      {
        "title": "Enhanced Physical Presence",
        "rules": "The badge provides you with a +1 bonus to your Strength saving throws and a +2 bonus to your AC as long as it is worn. However, this effect only applies in combat situations and ceases once the battle ends."
      }
    ],
    "levelRequirementReason": "This badge is designed for all trainers who seek to bolster their confidence and physical prowess.",
    "vendorReason": "The league store carries this item as it is a symbol of achievement and a source of inspiration for young and experienced trainers alike.",
    "shippingDetail": "Shipped via the reliable delivery drones, ensuring swift delivery to your doorstep within three days.",
    "usage": {
      "activation": "Passive effect upon wearing the badge in combat.",
      "duration": "Lasts until the start of your next turn after the battle ends or until it is removed from your person.",
      "endsWhen": "The effects end when you cease to wear the badge during a battle, or at the start of your next turn after a battle concludes.",
      "charges": "Unlimited uses; the badge can be worn indefinitely."
    },
    "priceReason": "The Badge of Valor is priced at 1000 XP due to its rarity and the unique benefits it provides, making it a valuable addition for any trainer's arsenal.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T22:22:17.283370+00:00",
    "aiReviewedAt": "2026-07-23T22:22:17.283370+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_pokemart_trainer_pack": {
    "id": "pokemon_item_pokemart_trainer_pack",
    "name": "Trainer’s Starter Pack – Gotta Catch ‘Em All!",
    "description": "The Trainer’s Starter Pack – Gotta Catch ‘Em All! is a meticulously curated kit for any aspiring Pokémon trainer. This deluxe pack includes a top-tier Pokéball crafted from enchanted metal, ensuring your catch is secure. Alongside it are three rejuvenating potions that can restore up to 50 hit points each and a motivational poster with an ancient symbol believed to boost one’s resolve in the wilds of Kanto.",
    "category": "consumables",
    "price": 1000,
    "icon": "🎁",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Restores 15 HP",
      "Provides a +2 bonus to all Dexterity (Stealth) checks made within the next hour"
    ],
    "vendor": "pokemart",
    "shippedBy": "delivery_pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Potion",
        "rules": "When consumed, this potion restores 15 hit points to the drinker. It has no effect on creatures with 0 or fewer hit points and can only be used once per day."
      },
      {
        "title": "Stealth Boost",
        "rules": "For one hour after opening the pack, you gain a +2 bonus to Dexterity (Stealth) checks. This effect is cumulative if you already have proficiency in Stealth."
      }
    ],
    "levelRequirementReason": "This starter kit is designed for beginners and thus has no level requirement.",
    "vendorReason": "Pokemarts are the go-to suppliers for all things Pokémon, from novice trainers to veterans, ensuring every aspiring trainer starts with the best gear.",
    "shippingDetail": "The delivery is made by speedy and reliable Pony Delivery Service, ensuring your pack arrives fresh at your feet.",
    "usage": {
      "activation": "Consumed as an action or used passively for its Stealth Boost effect.",
      "duration": "Instantaneous consumption restores hit points; one hour duration of Stealth Boost.",
      "endsWhen": "The effects end once consumed or after the specified duration, whichever comes first.",
      "charges": "Unlimited; can be refilled at any pokemart."
    },
    "priceReason": "Crafted with enchanted metal and potent healing ingredients, this pack offers a significant boost to a trainer’s early adventures, making it a valuable investment for any budding Pokémon explorer.",
    "priceOriginal": 320,
    "priceReviewedAt": "2026-07-23T22:22:37.409660+00:00",
    "aiReviewedAt": "2026-07-23T22:22:37.409660+00:00",
    "aiReviewVersion": 1
  },
  "internet_data_weave_armguard": {
    "id": "internet_data_weave_armguard",
    "name": "Hyperlink Armguard",
    "description": "The Hyperlink Armguard is a rare piece of cybernetic equipment crafted from compressed network packets. It feels warm to the touch, pulsing with data streams that hum faintly like distant internet traffic. This armguard significantly enhances your reflexes, granting a +2 bonus to Dexterity (Reaction Time), and offers a magical barrier that reduces damage from spells by half on successful saves against spell attacks. The armguard's unique weave also allows it to intercept and redirect minor digital disturbances with a 10% chance per round.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔗",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Reflexes",
      "Magical Shield"
    ],
    "vendor": "cyber_market",
    "shippedBy": "drone_delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Enhanced Reflexes",
        "rules": "Activates as a reaction to an attack. Lasts until the start of your next turn or until you are incapacitated."
      },
      {
        "title": "Magical Shield",
        "rules": "Reduces damage from spell attacks by half on a successful saving throw. This effect can only trigger once per long rest."
      }
    ],
    "levelRequirementReason": "The complexity of the Hyperlink Armguard requires a minimum character level to properly harness its digital magic.",
    "vendorReason": "As a high-tech vendor, cyber_market frequently stocks items that enhance one's ability to navigate and defend against digital threats.",
    "shippingDetail": "Ships via drone within the city limits; delivery is instantaneous for in-city customers.",
    "usage": {
      "activation": "Reaction (to attacks)",
      "duration": "Until start of next turn or incapacitated",
      "endsWhen": "Incapacitation or until you take a short rest",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The armguard's rarity and the advanced technology required to craft it justify its price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:22:27.105778+00:00",
    "aiReviewedAt": "2026-07-23T22:22:27.105778+00:00",
    "aiReviewVersion": 1
  },
  "internet_viral_scroll": {
    "id": "internet_viral_scroll",
    "name": "Propagation Scroll",
    "description": "The Propagation Scroll, a brittle parchment infused with the very essence of viral content, crackles with digital energy. Unfurling it unleashes a cascade of chaotic bytes that propagate through nearby foes, turning them into unwitting influencers of misinformation and disruption. The scroll is said to have originated from an ancient data dealer who sought to exploit the chaos of the internet for profit. When activated, it saps enemies' composure, causing them to spread panic and attract unwanted digital hordes.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Digital Chaos Propagation",
      "Viral Influence"
    ],
    "vendor": "data_dealer",
    "shippedBy": "encrypted_package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Digital Chaos Propagation",
        "rules": "When activated as a bonus action within 30 feet, the Propagation Scroll unleashes a wave of chaotic bytes that deal 4d6 necrotic damage to all creatures in a 15-foot radius. These waves have a 50% chance to inflict the 'Digital Distraction' condition (target is incapacitated for 2 turns)."
      },
      {
        "title": "Viral Influence",
        "rules": "For every creature that successfully saves against Digital Chaos Propagation, there's a 30% chance they become infected with 'Viral Spread', causing them to spread misinformation within the battlefield for the duration. This condition lasts until the end of their next turn and imposes disadvantage on attack rolls."
      }
    ],
    "levelRequirementReason": "The scroll requires a minimum level to handle its digital energy safely.",
    "vendorReason": "Data Dealers are known for selling the most peculiar and potentially dangerous items, often acquired from various cyber heists.",
    "shippingDetail": "Ships via encrypted package courier to ensure no digital traces can be detected by prying eyes.",
    "usage": {
      "activation": "Bonus action within 30 feet of enemies.",
      "duration": "Instantaneous, lasts until the end of the next turn for each target affected.",
      "endsWhen": "Destroyed if a creature with 'Digital Distraction' escapes its radius or all targets are incapacitated.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Propagation Scroll is priced at 1000 XP, reflecting the unique and potentially dangerous nature of its effects.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T22:23:22.623928+00:00",
    "aiReviewedAt": "2026-07-23T22:23:22.623928+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_crumb_of_nothing": {
    "id": "almost_edge_crumb_of_nothing",
    "name": "Crumb of Nothing",
    "description": "The Crumb of Nothing is a minuscule, crumbling fragment of the world's very essence, its edges worn smooth by the passage of time and fate’s indifference. It whispers faintly of regret and the tang of forgotten dreams, leaving aftertastes that linger like unresolved echoes in one’s mind. Consuming this crumb might grant you a fleeting glimpse into the infinite possibilities of the void, or it could leave you reeling with nausea, as if the world itself has turned against you for even daring to taste its nothingness.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Heals 10 HP",
      "Grants +1 to Saving Throws for 3 turns"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Floating Dust",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Regenerative Bite",
        "rules": "When consumed, the Crumb of Nothing grants you a regenerative bite that heals 10 hit points. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Void's Resilience",
        "rules": "For the next three turns, your saving throws are treated as if you had advantage on them. This effect persists for a total of three turns after consuming the crumb."
      }
    ],
    "levelRequirementReason": "This crumb is accessible to all adventurers who venture into the realms where such fragments exist, making it a common commodity among explorers and seekers.",
    "vendorReason": "The edge wanderers are known for their travels through the void, collecting and trading such relics as souvenirs of their journeys.",
    "shippingDetail": "Shipped via the ethereal winds that travel through the astral plane, ensuring quick delivery to eager collectors.",
    "usage": {
      "activation": "Instantaneous action upon consumption",
      "duration": "3 turns",
      "endsWhen": "After 3 turns or when consumed in combat",
      "charges": "Unlimited"
    },
    "priceReason": "The Crumb of Nothing is highly valued for its mystical properties, making it a significant investment for adventurers looking to bolster their survival chances.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:23:08.829543+00:00",
    "aiReviewedAt": "2026-07-23T22:23:08.829543+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_chronal_shard": {
    "id": "almost_edge_chronal_shard",
    "name": "Chronal Shard of the Void's Tear",
    "description": "The Chronal Shard of the Void's Tear hums with time-worn energy, its surface etched with arcane runes that shimmer and fade in eerie patterns. This fragment from the fabric of reality grants a fleeting reprieve from failure, rewinding one failed action but at the cost of disrupting your temporal balance. Should you hold it too long, the very threads of existence unravel around you, leaving behind a trail of temporal distortion like a comet's tail.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Rewind One Failed Action",
      "Temporal Unraveling"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Rift Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Rewind One Failed Action",
        "rules": "As an action, you can use the shard to rewind one failed attack roll or skill check. This effect is usable once per short rest."
      },
      {
        "title": "Temporal Unraveling",
        "rules": "If you hold the shard for more than 1 minute, you must succeed on a DC 15 Constitution saving throw or lose all your temporary hit points and be affected by the temporal distortion until dawn of the next day."
      }
    ],
    "levelRequirementReason": "It requires a balance between spellcasting proficiency and understanding of time magic to properly wield this shard.",
    "vendorReason": "The Void Merchant deals in relics from alternate realities, making the Chronal Shard a fitting addition to their stock.",
    "shippingDetail": "Ships via Dimensional Rift Express with a 24-hour transit time.",
    "usage": {
      "activation": "Action (Once per short rest)",
      "duration": "Instantaneous for Rewind One Failed Action; until dawn of the next day, or until lost if held longer than 1 minute",
      "endsWhen": "The effect ends when you succeed on a saving throw, lose all temporary hit points, or hold it too long.",
      "charges": "Once per short rest"
    },
    "priceReason": "The shard's rarity and limited utility justify its moderate price of 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:23:26.239872+00:00",
    "aiReviewedAt": "2026-07-23T22:23:26.239872+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_legendary_phantom_lantern": {
    "id": "almost_edge_legendary_phantom_lantern",
    "name": "Phantom Lantern of the Lost Lights",
    "description": "The Phantom Lantern of the Lost Lights glows with an eerie, spectral light that seems to flicker between realms. Its soft pulse is said to draw in the whispers of forgotten souls from a bygone era, yet its light offers both protection and peril. In the presence of spectral entities, it can either shield you from fear or lead you into a labyrinthine dream where ancient tales unfold, their very essence compelling you closer.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕯️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Fearsome Foe Repeller",
      "Guiding Light"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Echoing Current",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fearsome Foe Repeller",
        "rules": "When activated as an action, the lantern emits a blinding pulse that grants immunity to fear effects for 1 minute. This effect ends if you willingly deactivate it or are exposed to another source of fear."
      },
      {
        "title": "Guiding Light",
        "rules": "The lantern occasionally summons a minor spectral guide (60% chance) within 30 feet that provides vague but insightful advice. The spectral guide remains for 1 minute and can be dismissed as an action; it disappears if the lantern is extinguished or destroyed."
      }
    ],
    "levelRequirementReason": "The intricate enchantments of the Phantom Lantern require a mage with significant experience to wield its power.",
    "vendorReason": "The Liminal Trader specializes in rare and ancient artifacts, including items that bridge the gap between worlds.",
    "shippingDetail": "The lantern is carefully packed for safe transport by Echoing Current, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Activates as an action, with a range of self and a duration of 1 minute.",
      "duration": "Lasts until the end of your next turn or if you willingly deactivate it.",
      "endsWhen": "Exhausted after 1 minute, destroyed, or if you become exposed to another source of fear.",
      "charges": "Unlimited uses; recharges on a long rest."
    },
    "priceReason": "The lantern's rarity and the complexity of its enchantments justify this price in XP.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T22:23:14.561904+00:00",
    "aiReviewedAt": "2026-07-23T22:23:14.561904+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_glooping_boots": {
    "id": "mushroom_kingdom_item_glooping_boots",
    "name": "Glooping Boots of Sticky Traction",
    "description": "The Glooping Boots of Sticky Traction are crafted from hardened mushroom goo, making them as slippery to handle as they are effective in preventing slips. These oversized footwear transform your gait into a dance of controlled chaos; each step is a delicate balance between gravity and the goo's adhesive properties. You'll find yourself gliding over wet surfaces like a Piranha Plant on a joyride, but be wary—every movement can trigger a sudden splash that splatters around you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increased_jump_height",
      "sticky_landing"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Increased Jump Height",
        "rules": "When you jump, your vertical jump height is increased by +2 feet. This effect lasts until the start of your next turn."
      },
      {
        "title": "Sticky Landing",
        "rules": "If you land in a space that includes water or mud, you immediately become stuck and must make a DC 13 Strength saving throw to escape. On a failed save, you are restrained for 1 minute."
      }
    ],
    "levelRequirementReason": "These boots require a minimum level of 6 due to their complex construction and the need for coordination to use them effectively.",
    "vendorReason": "The Toad Town Market is well-known for its unique and functional items, making these boots a perfect fit for their offerings.",
    "shippingDetail": "Delivered via the Mushroom Cart, which ensures that your boots arrive in one piece, despite any splashes along the way.",
    "usage": {
      "activation": "Instantaneous activation on landing; recharges after a short rest.",
      "duration": "One minute per use.",
      "endsWhen": "The effect ends when you make another jump or fall, or if you are no longer in water/mud.",
      "charges": "Unlimited charges."
    },
    "priceReason": "The boots' unique construction and the materials used to create them justify a price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:23:44.250766+00:00",
    "aiReviewedAt": "2026-07-23T22:23:44.250766+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_potion_of_giantness": {
    "id": "mushroom_kingdom_item_potion_of_giantness",
    "name": "Potion of Temporary Gigantism",
    "description": "The Potion of Temporary Gigantism is a bubbling, purple elixir that transforms you into a colossal mushroom, towering over your surroundings. Your newfound height grants you a damage bonus against foes and allows you to stomp with crushing force, but beware—your movements are now heavily slowed, making quick escapes difficult. This potion's effects last only until the end of your next turn, leaving you vulnerable after its duration.",
    "category": "consumables",
    "price": 7500,
    "icon": "🍄",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_size",
      "damage_bonus"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "mushroom_drone",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Increased Size",
        "rules": "You gain a +2 bonus to Strength and Constitution checks and saving throws. Your size increases, allowing you to deal an additional 1d6 bludgeoning damage on melee weapon attacks made during your turn. This effect lasts until the end of your next turn."
      },
      {
        "title": "Slowed Movement",
        "rules": "Your speed is halved while under the effects of this potion, and you have disadvantage on Dexterity (Acrobatics) checks and saving throws. You are also considered difficult terrain for yourself during this time."
      }
    ],
    "levelRequirementReason": "This potion's transformative power requires a strong magical foundation to safely wield.",
    "vendorReason": "The Koopa Shop specializes in potions and elixirs that enhance one’s abilities, making this potion an ideal addition to their offerings.",
    "shippingDetail": "Delivered swiftly by a mushroom drone, ensuring the potion remains potent upon arrival.",
    "usage": {
      "activation": "Drink as an action.",
      "duration": "1 minute, or until you finish a short rest.",
      "endsWhen": "At the end of your next turn after drinking it.",
      "charges": "Unlimited; recharges on completion of a long rest."
    },
    "priceReason": "The potion's rarity and powerful effects justify its high price, making it a valuable but not overpowered asset for adventurers.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:24:01.979160+00:00",
    "aiReviewedAt": "2026-07-23T22:24:01.979160+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_potion_of_froggy_fortitude": {
    "id": "faerun_item_potion_of_froggy_fortitude",
    "name": "Potion of Froggy Fortitude",
    "description": "Brewed by a surprisingly enthusiastic swamp witch, this murky potion tastes vaguely of pond scum and desperation. The concoction is known to be potent when mixed in a specially crafted cauldron found only in the deepest parts of the Evermoors. Drink it quickly – it’ll temporarily boost your resilience… mostly to being splashed with mud, but also providing an unexpected burst of strength that allows you to leap over obstacles with ease for a short time.",
    "category": "consumables",
    "price": 1000,
    "icon": "🐸",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Temporary Strength Boost",
      "Mud Resistance"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "winged messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Strength Boost",
        "rules": "Upon drinking, the drinker gains +2 to Strength (Strength check and saving throws) for 10 minutes. This effect is instantaneous upon activation."
      },
      {
        "title": "Mud Resistance",
        "rules": "For 1 round after drinking this potion, you have resistance to poison damage. The effect ends when the drinker takes any other form of damage."
      }
    ],
    "levelRequirementReason": "The concoction is designed for adventurers just starting their journey.",
    "vendorReason": "The market often deals in items from various locales, including the swamp witch's creations.",
    "shippingDetail": "Shipped by a swift winged courier to ensure freshness.",
    "usage": {
      "activation": "Drink as an action.",
      "duration": "10 minutes or until you take any other form of damage.",
      "endsWhen": "You take other forms of damage or the duration expires.",
      "charges": "Unlimited"
    },
    "priceReason": "The potion's rarity and the unique cauldron used in its creation justify this price.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-24T23:56:11.595392+00:00",
    "aiReviewedAt": "2026-07-24T23:56:11.595392+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_helm_of_the_stone_giant": {
    "id": "faerun_item_helm_of_the_stone_giant",
    "name": "Helm of the Stone Giant",
    "description": "The Helm of the Stone Giant is a ponderous helm, its surface pockmarked with imprints of jagged pebbles and smoothed by ancient hands. Crafted in the shadowy forges of distant stone giants, it feels as though it has absorbed the very weight of the earth itself. This helm not only grants resistance to bludgeoning damage but also permanently increases your maximum hit points by 2d8, making you a more formidable presence on the battlefield.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗿",
    "stock": 15,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Resistance to Bludgeoning Damage",
      "Increased Maximum Hit Points"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "Emissaries of Stone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Bludgeoning Resistance",
        "rules": "While wearing this helm, you have resistance to bludgeoning damage. This effect is active as long as the helm remains on your head."
      },
      {
        "title": "Increased Maximum Hit Points",
        "rules": "This helm permanently increases your maximum hit points by 2d8 when worn continuously for at least one day. The increase does not stack with other effects that grant similar bonuses."
      }
    ],
    "levelRequirementReason": "The Helm of the Stone Giant is designed to provide a significant defensive advantage, making it suitable for characters who have reached a certain level where they can better utilize its benefits.",
    "vendorReason": "Baldur's Bazaar, known for its extensive stock of rare and powerful items, offers the Helm of the Stone Giant to adventurers seeking to enhance their resilience in battle.",
    "shippingDetail": "The helm is shipped via Emissaries of Stone, who ensure that this heavy item arrives safely at its destination, often requiring multiple trips due to its weight.",
    "usage": {
      "activation": "Passive effect upon donning the helm and remains active as long as it is worn continuously.",
      "duration": "Permanent increase in maximum hit points; resistance to bludgeoning damage while wearing the helm.",
      "endsWhen": "The helm is removed or destroyed.",
      "charges": "Unlimited, as the effects are passive."
    },
    "priceReason": "This helm offers a significant defensive advantage at an appropriate price point, balancing its substantial weight and the permanent nature of its effects.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T22:24:09.156000+00:00",
    "aiReviewedAt": "2026-07-23T22:24:09.156000+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_dwarven_pickaxe": {
    "id": "middle_earth_dwarven_pickaxe",
    "name": "Stonebreaker’s Stubborn Strike",
    "description": "Forged in the ancient forges of Khazad-dûm, Stonebreaker’s Stubborn Strike is a dwarven pickaxe that has weathered countless ages and relentless pounding by stone giants. This battle-worn tool not only grants its wielder increased mining speed (+15%) but also has a unique ability to enhance durability; it can repair itself after being damaged in combat, reducing the damage taken by 2 until the start of your next turn. The pickaxe is said to have been crafted under the supervision of the legendary blacksmith Mithril Ironbeard himself, and its origins make it a treasured heirloom among dwarven clans.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Increased Mining Speed",
      "Self-Repair on Combat Damage"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "Giant Eagle Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Mining Speed",
        "rules": "While wielding Stonebreaker’s Stubborn Strike, you have advantage on mining checks and can mine at a rate that is +15% faster than usual. This effect lasts for the duration of your activity."
      },
      {
        "title": "Self-Repair on Combat Damage",
        "rules": "After taking damage from an attack in combat, Stonebreaker’s Stubborn Strike repairs itself, reducing the amount of damage taken by 2 until the start of your next turn. This effect can occur a number of times equal to half your level (rounded down) before it stops working for the day."
      }
    ],
    "levelRequirementReason": "This pickaxe is crafted to be accessible even to lower-level adventurers who wish to venture into the depths of ancient mines.",
    "vendorReason": "The dwarven forge is known for its unparalleled craftsmanship and has long been trusted by miners and explorers seeking durable tools.",
    "shippingDetail": "Ships via the fastest giant eagle courier service, ensuring swift delivery to even the most remote locations.",
    "usage": {
      "activation": "Active while wielding the pickaxe in mining or combat situations.",
      "duration": "Instantaneous for self-repair; duration of activity for increased speed.",
      "endsWhen": "After repairs are complete or when the day ends, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "This pickaxe's rarity and unique self-repair feature make it a valuable asset for adventurers seeking both durability and efficiency.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:25:00.129628+00:00",
    "aiReviewedAt": "2026-07-23T22:25:00.129628+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_elven_dreamstone": {
    "id": "middle_earth_elven_dreamstone",
    "name": "Whispers of the Old Forest",
    "description": "The Whispers of the Old Forest is a pulsating, iridescent stone that hums with ancient Elvish magic. Crafted in the deep woods by the Noldor elves, it holds fragments of forgotten dreams and secrets from ages past. Touching it can grant fleeting visions that either empower or bewilder the toucher, depending on the whims of fate. Wario warns: use it wisely, for its power is as unpredictable as it is potent.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Dream Whispers",
      "Enhanced Magics"
    ],
    "vendor": "elven_market",
    "shippedBy": "shadowfax",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Dream Whispers",
        "rules": "When touched, the stone has a 15% chance to induce a dream state lasting for 1 minute. During this time, the user gains temporary stat boosts or debuffs based on the stone's mood (e.g., Wisdom +2 but Charisma -1). The duration can be ended early via a successful DC 14 Constitution saving throw."
      },
      {
        "title": "Enhanced Magics",
        "rules": "The wielder gains an increased magical resistance, providing a +8% chance to resist magical effects. This effect is active as long as the stone is held and can be negated by using it for divination (one use per day)."
      }
    ],
    "levelRequirementReason": "The ancient magic within the stone requires a seasoned elf-warrior's touch to safely wield.",
    "vendorReason": "Only the trusted keepers of Elvish lore can handle such potent relics without unleashing their full power.",
    "shippingDetail": "The stone is delivered by shadowfax, ensuring safe passage through treacherous lands.",
    "usage": {
      "activation": "Touching the stone to invoke its effects",
      "duration": "1 minute or until a successful DC 14 Constitution saving throw ends it",
      "endsWhen": "A successful save or when used for divination",
      "charges": "One use per day"
    },
    "priceReason": "The stone's rarity and the ancient magic it contains justify its high price.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T22:24:31.040377+00:00",
    "aiReviewedAt": "2026-07-23T22:24:31.040377+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronos_amulet": {
    "id": "the_edge_chronos_amulet",
    "name": "Temporal Distortion Amulet",
    "description": "The Temporal Distortion Amulet, a gleaming necklace etched with swirling chronal runes, is said to have been crafted by an ancient time-walker who sought to bend the fabric of reality itself. This mythic piece allows its wearer to manipulate the flow of time in combat, slowing foes and speeding their own movements, yet it comes with a warning: tampering too deeply risks unraveling the very threads of causality. Rumors tell that Wario's temper is legendary, but those who challenge fate might find their last action repeated until corrected.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Temporal Slow",
      "Swift Steps"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "When activated as a reaction to an enemy's attack, this amulet slows the target by 50% for 2 rounds. The effect has no save DC and cannot be used more than once per long rest."
      },
      {
        "title": "Swift Steps",
        "rules": "Activating this amulet as a bonus action allows the wearer to increase their movement speed by 20%, which lasts until the start of their next turn. This effect can only be used once every short or long rest, and it does not stack with other bonuses."
      }
    ],
    "levelRequirementReason": "This amulet's power is too great for less experienced adventurers to wield safely.",
    "vendorReason": "Edge Outpost specializes in the latest and rarest artifacts, including those with time-based capabilities.",
    "shippingDetail": "Due to the delicate nature of the amulet's chronal energy, it is shipped via Temporal Courier for safe handling.",
    "usage": {
      "activation": "Reaction or Bonus Action",
      "duration": "Instantaneous effect; duration varies by specific use",
      "endsWhen": "Ends when the effect period expires or the wearer takes a short rest.",
      "charges": "Unlimited, but can only be used once every long rest"
    },
    "priceReason": "The amulet's mythic rarity and its powerful time-manipulating effects justify this price.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-23T22:25:10.919686+00:00",
    "aiReviewedAt": "2026-07-23T22:25:10.919686+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_blacksmith_contract": {
    "id": "the_edge_blacksmith_contract",
    "name": "Permanent Weapon Enhancement",
    "description": "The Edge Blacksmith Contract is a meticulously crafted agreement that allows you to permanently enhance a weapon with blacksmithing prowess. This contract ensures your chosen blade becomes an unparalleled tool of precision and might, granting +3 to weapon damage rolls and a 10% chance to inflict bleeding on each hit. The results are not for the faint-hearted—Wario's unpredictable touch means you could end up with a weapon that defies logic itself.",
    "category": "services",
    "price": 1000,
    "icon": "🔨",
    "stock": 1,
    "rarity": "epic",
    "stockType": "delivery_only",
    "effects": [
      "+3 Damage",
      "Bleeding On Hit"
    ],
    "vendor": "final_shop",
    "shippedBy": "winged courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Increased Damage",
        "rules": "When the weapon strikes, it deals an additional +3 damage to the target. This effect is instant and does not require activation."
      },
      {
        "title": "Bleeding on Hit",
        "rules": "There is a 10% chance that each hit will cause the target to bleed, dealing 1d4 necrotic damage at the start of their next turn. This effect persists for one minute and cannot occur more than once per combat."
      }
    ],
    "levelRequirementReason": "This service requires a certain level of expertise to ensure the weapon is enhanced without compromising its integrity.",
    "vendorReason": "Final Shop specializes in unique and powerful services, making it the go-to for such specialized enhancements.",
    "shippingDetail": "The winged courier delivers this service with utmost care, ensuring swift and secure delivery to your doorstep.",
    "usage": {
      "activation": "Instantaneous upon signing the contract and completing the enhancement process.",
      "duration": "Permanent once the weapon is enhanced.",
      "endsWhen": "The effect ends if the weapon is destroyed or the contract is broken.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the unique and permanent nature of the service, requiring a significant investment in resources and expertise.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T22:24:47.151858+00:00",
    "aiReviewedAt": "2026-07-23T22:24:47.151858+00:00",
    "aiReviewVersion": 1
  },
  "forbidden_soulshard": {
    "id": "forbidden_soulshard",
    "name": "Shard of the Twisted Soul",
    "description": "The Shard of the Twisted Soul, a gnarled fragment that pulses with malevolent energy, is said to have been torn from the very essence of a noble once consumed by dark magic. Holding this shard grants glimpses into forbidden knowledge and whispers promises of power—but beware, for it slowly turns its bearer to ash. This tiny piece of madness, forged in the fires of chaos, is no ordinary trinket.",
    "category": "forbidden",
    "price": 1000,
    "icon": "😈",
    "stock": 3,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "madness",
      "shadow step"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Shadow Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Madness",
        "rules": "Each day you gain a cumulative +1 penalty to Wisdom saving throws. This effect increases by +2 at the end of each week this item is used, up to +5 after one month."
      },
      {
        "title": "Shadow Step",
        "rules": "Once per long rest, you can teleport up to 30 feet to an unoccupied space you can see. You must succeed on a DC 12 Dexterity (Stealth) check for this effect to function without triggering opportunity attacks."
      }
    ],
    "levelRequirementReason": "The Shard of the Twisted Soul requires a minimum level of 5 due to its unpredictable and dangerous effects.",
    "vendorReason": "The chaos dealer, a notorious merchant of forbidden knowledge and dark artifacts, is known for dealing with items that push the boundaries of sanity and power.",
    "shippingDetail": "The delivery takes three days but involves crossing dangerous territories where the item may be exposed to environmental hazards.",
    "usage": {
      "activation": "Instantaneous use, once per long rest via shadow step effect.",
      "duration": "Instantaneous for each teleportation; madness increases over time.",
      "endsWhen": "The madness effect ends when you no longer hold the shard or it is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects its rarity, dark nature, and the risk involved in using such an item.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T22:25:37.852585+00:00",
    "aiReviewedAt": "2026-07-23T22:25:37.852585+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_rune_of_decay": {
    "id": "warhammer_rune_of_decay",
    "name": "Rune of Rotting Valor",
    "description": "The Rune of Rotting Valor is a warhammer forged from the bones of fallen warriors. Its surface is etched with runes that hum with dark energy, drawing sustenance from your enemies' vitality. Each strike not only deals physical damage but also saps strength, leaving foes weakened and vulnerable to further attacks. The hammer's touch is like walking through a misty forest—slow and oppressive, making each step feel heavier.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 15,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Rending Decay",
      "Weakness"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Wartime Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Rending Decay",
        "rules": "When you hit with this weapon as part of an attack action, the target must make a DC 13 Strength saving throw or take an additional 4d6 necrotic damage. This effect has a recharge after a long rest."
      },
      {
        "title": "Weakness",
        "rules": "Each time you hit with this weapon, there is a 20% chance that the target becomes prone and its Strength score is reduced by 2 until the start of your next turn. This effect has no save DC but can only occur once per target per long rest."
      }
    ],
    "levelRequirementReason": "This weapon requires a moderate understanding of combat tactics to use effectively, balancing its dark magic with strategic strikes.",
    "vendorReason": "Fate Forge specializes in crafting powerful yet balanced weapons that serve as both tools and symbols of triumph.",
    "shippingDetail": "Ships via Wartime Express, known for their reliable delivery services even under the harshest conditions.",
    "usage": {
      "activation": "As part of an attack action",
      "duration": "Instantaneous",
      "endsWhen": "Recharges after a long rest or when destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "The weapon's balance between necrotic damage and debuff effects, along with its unique crafting process by Fate Forge, justifies the high price.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T22:25:03.560180+00:00",
    "aiReviewedAt": "2026-07-23T22:25:03.560180+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_ancient_charm": {
    "id": "pokemon_item_ancient_charm",
    "name": "Charm of the Primal Beast",
    "description": "The Charm of the Primal Beast glows an eerie, primal red when worn, its surface warm to the touch and pulsating with raw energy that mimics the roars of legendary Pokémon. This ancient charm grants a temporary boost in your battle prowess, making you appear nearly invincible to any trainer who dares challenge you. For three turns, it enhances both attack and defense, making you a formidable opponent on the battlefield.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Attack Boost",
      "Defense Boost"
    ],
    "vendor": "pokemart",
    "shippedBy": "Pokémail Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Attack Boost",
        "rules": "When activated as a bonus action, this charm grants +30 to your attack rolls for three turns. The effect ends if you are incapacitated or the charm is removed."
      },
      {
        "title": "Defense Boost",
        "rules": "Simultaneously, it provides +20 temporary hit points and advantage on saving throws against being frightened until the start of your next turn after activation. This effect lasts for three turns and ends if you take damage or are incapacitated."
      }
    ],
    "levelRequirementReason": "This charm's primal energy is too powerful to be used by lower-level characters, who might not fully understand its potential.",
    "vendorReason": "The pokemart, with its vast collection of Pokémon-themed items and knowledge, is the ideal vendor for this ancient relic that taps into the essence of legendary beasts.",
    "shippingDetail": "Ships within three business days via Pokémail Express's fastest courier service.",
    "usage": {
      "activation": "Bonus action to activate and gain effects.",
      "duration": "3 turns for each effect.",
      "endsWhen": "Effect ends if you are incapacitated or the charm is removed.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "This charm's rarity and potent effects justify its fair value of 1000 XP, ensuring it remains a valuable but not overpowered item for players to acquire.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T22:25:32.673650+00:00",
    "aiReviewedAt": "2026-07-23T22:25:32.673650+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_league_badge": {
    "id": "pokemon_item_league_badge",
    "name": "Badge of Valor",
    "description": "The Badge of Valor, officially sanctioned by the Pokémon League, gleams with a subtle, strategic light. Crafted from polished steel and inlaid with emblems of legendary Pokémon, it subtly enhances your strategic thinking during battles. Should you achieve victory, this badge grants a +10 speed boost for one turn, making you the fastest to react. Moreover, there's a 20% chance that on a critical hit, your opponent will be stunned, giving you an edge in decisive moments.",
    "category": "faction",
    "price": 1000,
    "icon": "🏆",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Speed Boost",
      "Stun Opponent"
    ],
    "vendor": "league_store",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "Activates as a bonus action when the wearer wins a battle. Grants +10 speed for one turn, allowing you to act first in your next turn."
      },
      {
        "title": "Stun Opponent",
        "rules": "Has a 20% chance of stunning an opponent on a critical hit during a battle. The effect lasts until the end of the opponent's next turn."
      }
    ],
    "levelRequirementReason": "Requires level 4 to ensure that players have basic combat skills before using this strategic advantage.",
    "vendorReason": "The Pokémon League ensures that only those who have earned the right wear this badge of valor.",
    "shippingDetail": "Courier Pigeon delivers the badge swiftly, ensuring it arrives fresh from the League headquarters.",
    "usage": {
      "activation": "Bonus action upon winning a battle.",
      "duration": "One turn (speed boost) and until the end of the opponent's next turn (stun effect).",
      "endsWhen": "The effects expire at the end of the turn or when the wearer is knocked out of combat.",
      "charges": "Unlimited, but only one set of effects can be active per battle."
    },
    "priceReason": "Balanced to reflect its strategic value and limited utility within battles.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T22:25:51.912752+00:00",
    "aiReviewedAt": "2026-07-23T22:25:51.912752+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_mystic_orb": {
    "id": "pokemon_item_mystic_orb",
    "name": "Orb of Echoing Energies",
    "description": "The Orb of Echoing Energies is a shimmering, multifaceted gem that pulses with the energy of countless Pokémon battles. When activated, it channels one such battle’s signature move, delivering it with surprising intensity and unpredictability – just like catching an elusive Pokémon. The orb’s unpredictable nature can lead to both devastating attacks and hilarious misfires, making it a favorite among those who seek to test their mettle in unconventional ways.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 18,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Mimic a Pokémon Move",
      "Unpredictable Outcomes"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Courier Pidgeotto",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Mimic a Pokémon Move",
        "rules": "As an action, you can activate the orb to mimic one of your recent Pokémon encounters. The attack is based on that encounter and has a +25 bonus to damage rolls for this turn only. There’s a 20% chance that the attack will be misfired in a humorous way."
      },
      {
        "title": "Unpredictable Outcomes",
        "rules": "The orb has a 10% chance of causing a misfire, which could result in a laughable outcome. If this occurs, you must succeed on a DC 15 Dexterity saving throw or be incapacitated due to laughter for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires the user to have at least basic knowledge of Pokémon moves and strategies.",
    "vendorReason": "The Safari Shop specializes in rare and exotic items that can enhance one’s Pokémon journey, including this whimsical relic from the wilds.",
    "shippingDetail": "Ships via air courier for expedited delivery to your doorstep within a week.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (1 turn)",
      "endsWhen": "The effect ends on the start of your next turn or when you use it again.",
      "charges": "Unlimited, but only one mimic per encounter"
    },
    "priceReason": "Balanced at an epic rarity for its unpredictable nature and unique gameplay mechanic.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:25:26.845685+00:00",
    "aiReviewedAt": "2026-07-23T22:25:26.845685+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronometric_shards": {
    "id": "almost_edge_item_chronometric_shards",
    "name": "Temporal Fragments of the Void",
    "description": "Temporal Fragments of the Void are shimmering, iridescent shards that hum with the echoes of non-existent futures and pasts. These fragments allow you to glimpse fleeting visions of potential outcomes, aiding in dodging danger or simply contemplating the infinite possibilities of time. Each shard is a fragment from another timeline, forged in the void between realities. They are sold by the enigmatic Void Merchant, whose knowledge of the temporal planes rivals only the gods themselves.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Glimpse Possible Futures",
      "Temporal Illusion"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Glimpse Possible Futures",
        "rules": "As a bonus action, you may activate one fragment to gain temporary foresight. This allows you to see a potential future outcome within the next round of combat or a scene. The vision lasts for 1 minute and grants advantage on saving throws against harm until it ends."
      },
      {
        "title": "Temporal Illusion",
        "rules": "Each fragment has a 20% chance per day to create an illusory version of itself when you activate its power, which lasts for 1 hour. The illusion can be mistaken as the original fragment and can mislead others within 30 feet."
      }
    ],
    "levelRequirementReason": "The temporal nature of these fragments requires a level of proficiency in understanding complex timelines.",
    "vendorReason": "The Void Merchant has exclusive access to items from other dimensions, including these rare Temporal Fragments.",
    "shippingDetail": "Ships directly through the dimensional rift, arriving within a day of purchase.",
    "usage": {
      "activation": "Bonus action to activate one fragment.",
      "duration": "1 minute or until dispelled by an effect ending foresight.",
      "endsWhen": "The vision ends when you lose consciousness or are incapacitated. The illusion ends if the fragment is destroyed or when its power runs out for the day.",
      "charges": "Unlimited, but each fragment can only be used once per day."
    },
    "priceReason": "Balanced at 1000 XP to reflect their rare and temporal nature.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T22:26:20.463265+00:00",
    "aiReviewedAt": "2026-07-23T22:26:20.463265+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_wario_boots_of_slip": {
    "id": "almost_edge_item_wario_boots_of_slip",
    "name": "Wario's Boots of Unstable Traction",
    "description": "Wario's Boots of Unstable Traction are absurdly oversized, crafted from a mix of rubber and an unknown metal alloy that glows faintly underfoot. These boots allow you to slide across any surface with alarming speed, but their unstable design often results in unexpected missteps—once even sending a traveler halfway into a nearby wall or stuck in a particularly sticky puddle. The wearer must be cautious not to overextend themselves lest they find themselves in an unintended location.",
    "category": "equipment",
    "price": 1000,
    "icon": "👟",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Increased Movement Speed (20%)",
      "Unstable Slide"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "dimensional_rift express courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Increased Movement Speed (20%)",
        "rules": "As a bonus action, the wearer can activate their boots to gain a +20 foot movement speed bonus for up to 1 minute. This effect ends if the wearer moves more than 60 feet in a straight line or falls prone."
      },
      {
        "title": "Unstable Slide",
        "rules": "Once per short rest, the wearer can activate their boots to slide across any flat surface at double speed for up to 10 feet. There is a 30% chance that this movement will result in an unintended location, such as halfway into a wall or stuck in a sticky puddle. The boots then deactivate until the start of the next long rest."
      }
    ],
    "levelRequirementReason": "Crafted by Wario himself, these boots require a certain level of physical and magical aptitude to wield.",
    "vendorReason": "Edge Wanderer specializes in items that enhance mobility and adventure, making their stock the perfect fit for adventurers seeking an edge on their travels.",
    "shippingDetail": "Ships via dimensional rift express courier; delivery is instantaneous but requires a special permit from the Dimensional Oversight Committee.",
    "usage": {
      "activation": "Bonus action or reaction (Unstable Slide)",
      "duration": "1 minute for Increased Movement Speed, up to 10 feet for Unstable Slide",
      "endsWhen": "Ends if wearer moves more than 60 feet in a straight line, falls prone, or rests; Unstable Slide ends after the intended distance.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, these boots offer unique speed and misadventure mechanics that are both fun and challenging.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:26:25.481902+00:00",
    "aiReviewedAt": "2026-07-23T22:26:25.481902+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_obsidian_mirror_of_reflection": {
    "id": "almost_edge_item_obsidian_mirror_of_reflection",
    "name": "The Echoing Void Gaze",
    "description": "The Echoing Void Gaze is a polished obsidian mirror, etched with ancient runes that whisper secrets of the past and future. Its surface glimmers with an eerie luminescence that seems to reflect not just your form but also the very essence of your soul. Staring into its depths can reveal hidden truths or unsettling visions of your own fractured psyche. This artifact is said to have been crafted by a forgotten mage seeking to unlock the secrets of existence itself, and it remains in the hands of the Liminal Trader, who sells only what defies ordinary understanding.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪞",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "back_order",
    "effects": [
      "Reveal Hidden Secrets",
      "Shadowy Doppelganger"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Reveal Hidden Secrets",
        "rules": "When gazed into for a full round (1 minute), this mirror has a 50% chance to reveal hidden objects or secret doors within 30 feet. The user must make a DC 17 Intelligence saving throw; on a failure, they instead see their own reflection with no additional information."
      },
      {
        "title": "Shadowy Doppelganger",
        "rules": "Once per long rest, the mirror has a 1% chance to summon a shadowy doppelganger that mimics the user's appearance for 8 hours. The doppelganger is a construct with AC 15 and 20 hit points. It can take actions but cannot speak or cast spells."
      }
    ],
    "levelRequirementReason": "This item requires significant mental discipline to control its effects without being overwhelmed by the visions it reveals.",
    "vendorReason": "The Liminal Trader is known for their vast collection of enigmatic and powerful artifacts, often passed down through ancient lines or found in forgotten ruins.",
    "shippingDetail": "Ships via a dimensional rift, which can cause up to a week delay due to the unstable nature of the transit.",
    "usage": {
      "activation": "Passive effect active when gazed into for at least one minute. The doppelganger summoning is a once-per-long-rest action.",
      "duration": "Instantaneous reveal; lasts until next long rest after summoning the doppelganger.",
      "endsWhen": "The user's next long rest, or if the doppelganger is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP as it offers powerful but potentially dangerous effects that can reveal secrets and summon creatures.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-23T22:26:10.800958+00:00",
    "aiReviewedAt": "2026-07-23T22:26:10.800958+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_goblin_grenade": {
    "id": "middle_earth_goblin_grenade",
    "name": "Snotty Surprise Grenade",
    "description": "The Snotty Surprise Grenade is a particularly revolting concoction brewed by goblins with an especially foul temper. When thrown, it doesn’t explode; instead, it releases a thick, noxious cloud of sticky slime that clings to any target within reach, reducing their movement speed by half and causing them to slip and slide in the perilous lands of Middle-earth. Anyone who inhales or comes into contact with this malodorous mist must make a DC 12 Constitution saving throw or be poisoned for one round, struggling with nausea that halts their actions until the poison wears off.",
    "category": "consumables",
    "price": 1000,
    "icon": "💣",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Sludge",
      "Poison"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_cart",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Sludge",
        "rules": "When a creature is affected by the Sludge, its movement speed is reduced to half. The effect lasts until the start of the creature's next turn after being exposed."
      },
      {
        "title": "Poisoned",
        "rules": "A creature that fails its Constitution saving throw against the Poison is incapacitated for 1 round and cannot take actions or reactions, including moving."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 3 to ensure players can manage the effects and timing effectively.",
    "vendorReason": "The Shire Shop stocks this item because it's a popular choice among travelers looking for unconventional defense tools.",
    "shippingDetail": "Shipped via pony cart, which ensures the grenade arrives in one piece and with its noxious contents intact.",
    "usage": {
      "activation": "Throw as an action",
      "duration": "Instantaneous effect; lasts until start of next turn for each target",
      "endsWhen": "The poison effect ends when the creature successfully saves or is incapacitated",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "This price reflects the item's rarity and the materials used in its creation, balancing its effectiveness with player accessibility.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:26:06.000197+00:00",
    "aiReviewedAt": "2026-07-23T22:26:06.000197+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_rune_amulet": {
    "id": "middle_earth_rune_amulet",
    "name": "Amulet of Slightly Disgruntled Dwarven Craftsmanship",
    "description": "The Amulet of Slightly Disgruntled Dwarven Craftsmanship is a heavy, hand-forged amulet that radiates an aura of stubborn resolve. Carved from the very stone of Moria itself, this relic bears the marks of countless dwarven forges and a dwarf’s unyielding spirit. Worn by those who dare to face their deepest fears, it grants a slight resistance against fear and intimidation, as if the amulet's very essence is made of the stubbornness of its maker.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+2 to saving throws against fear and intimidation",
      "Provides resistance to psychic damage"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dwarf_carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fear Resistance",
        "rules": "The wearer gains a +2 bonus to saving throws against the effects of fear and intimidation. This effect is passive and does not require an action."
      },
      {
        "title": "Psychic Resistance",
        "rules": "Wearing this amulet provides resistance to psychic damage, allowing the wearer to shrug off spells or attacks that target their mind. The bonus applies until the start of your next turn after the effect is triggered."
      }
    ],
    "levelRequirementReason": "This amulet's craftsmanship is rudimentary but still valuable for its resistance properties.",
    "vendorReason": "The dwarven craftsmen of Moria are known for their resilience and this amulet reflects that spirit.",
    "shippingDetail": "Shipped by a dwarf carrier, the amulet arrives with a small stone figurine as a token of gratitude from the dwarves who forged it.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until end of next turn after triggering",
      "endsWhen": "Effect is triggered and ends at start of wearer's next turn",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet’s price reflects its limited origin and the stubborn craftsmanship that imbues it with unique properties.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T22:26:39.002570+00:00",
    "aiReviewedAt": "2026-07-23T22:26:39.002570+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_elven_healing_potion": {
    "id": "middle_earth_elven_healing_potion",
    "name": "Whispering Dewdrop Potion",
    "description": "Whispering Dewdrop Potion, a shimmering elixir collected from the tears of melancholic elves within the ancient forests of Middle-earth, is distilled with the essence of time and nature's magic. This potion not only restores 2d6 + 2 hit points but also alleviates one level of exhaustion, offering a brief respite from the trials of adventuring life. The potion's mystical properties are said to evoke fleeting nostalgia for those who imbibe it, leaving them with a wistful yet rejuvenated spirit.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Restores Hit Points",
      "Alleviates Exhaustion"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Hit Points",
        "rules": "When consumed as an action, this potion restores 2d6 + 2 hit points to the drinker. The effect is instantaneous and provides immediate healing."
      },
      {
        "title": "Alleviate Exhaustion",
        "rules": "Upon consumption, this potion removes one level of exhaustion from the drinker. It has no other effects on physical or mental state beyond this."
      }
    ],
    "levelRequirementReason": "The potion is designed to be accessible to beginning adventurers who need a reliable source of healing and rest.",
    "vendorReason": "Elves at the Elven Market are known for their herbal knowledge and ability to craft potions that restore both body and spirit.",
    "shippingDetail": "The potion is delivered swiftly by winged messengers, ensuring it remains potent until consumption.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "Instantaneous",
      "endsWhen": "Upon immediate effect",
      "charges": "Unlimited"
    },
    "priceReason": "The potion's rarity and the mystical process of its creation justify a higher price, making it accessible but not overpriced for adventurers.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T22:26:44.925472+00:00",
    "aiReviewedAt": "2026-07-23T22:26:44.925472+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_sparkling_dust": {
    "id": "connectopia_sparkling_dust",
    "name": "Pioneer's Sparkle",
    "description": "Pioneer's Sparkle is a fine, shimmering dust that sparkles like stardust in the dim light of dusk. Crafted from the ancient remnants of connection beacons, it wafts through your fingers with a faint ozone scent and an aura of unbridled ambition. Sprinkle it over your crafting tools to gain a fleeting boost in efficiency, but beware—this magic is volatile; should you sneeze, its potency might scatter into the ether.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "crafting_boost",
      "volatile_magic"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "messenger_bird",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crafting Boost",
        "rules": "When sprinkled on crafting tools, Pioneer's Sparkle grants a +1d6 bonus to all Crafting checks for the duration of one hour. This effect is limited to once per day."
      },
      {
        "title": "Volatile Magic",
        "rules": "If the user sneezes or drops their tools within 5 minutes after sprinkling, Pioneer's Sparkle dissipates instantly with no effects, and it is rendered inert until recharged. The item must be shaken vigorously to recharge."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners or those just starting their crafting journey.",
    "vendorReason": "Pioneer Post frequently deals with adventurers seeking the latest in crafting tools and materials, making this dust a natural fit for them.",
    "shippingDetail": "The messenger bird delivers the item swiftly, ensuring it arrives fresh and potent within an hour of purchase.",
    "usage": {
      "activation": "Sprinkle on crafting tools as an action.",
      "duration": "One hour from activation.",
      "endsWhen": "If the user sneezes or drops their tools within 5 minutes after sprinkling, or when the duration ends.",
      "charges": "Rechargeable; shake vigorously to recharge."
    },
    "priceReason": "The item's rarity and limited daily stock justify its higher price, reflecting its unique crafting benefits.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:27:07.400571+00:00",
    "aiReviewedAt": "2026-07-23T22:27:07.400571+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_geothermal_torch": {
    "id": "connectopia_geothermal_torch",
    "name": "Inferno Spark Torch",
    "description": "The Inferno Spark Torch, forged from ancient volcanic iron, draws its power directly from geothermal vents. Its blue flame burns fiercely, capable of melting through solid stone in mere moments, but be wary—its intense heat can warp metal and blind those who gaze upon it too long. Crafted by the legendary blacksmiths of Pauline, this torch is a marvel of engineering that not only lights your path but also enhances your mining prowess, making you nearly unstoppable when working deep within the earth’s core.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "fire_damage_5",
      "increased_mining_speed_20%"
    ],
    "vendor": "craft_corner",
    "shippedBy": "delivery_drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fire Damage (5)",
        "rules": "When used to break stone, the Inferno Spark Torch inflicts an additional 5 fire damage to any target within range. This effect does not stack with other sources of fire damage."
      },
      {
        "title": "Increased Mining Speed (+20%)",
        "rules": "While holding this torch and mining, you gain a +20% bonus to your Mining check. This effect lasts until the start of your next turn or until the torch runs out of charges."
      }
    ],
    "levelRequirementReason": "The intricate forging process and the raw materials required demand a minimum of fifth level.",
    "vendorReason": "Pauline's Microphone is renowned for its expertise in crafting items from rare and exotic materials, and the Inferno Spark Torch is no exception.",
    "shippingDetail": "Ships via delivery drone within a week, though handling requires specialized equipment to ensure safe transport of such volatile items.",
    "usage": {
      "activation": "As an action",
      "duration": "Instantaneous (effect lasts until the start of your next turn or until the torch runs out of charges)",
      "endsWhen": "The torch runs out of charges, which occur after five uses in a day.",
      "charges": "5"
    },
    "priceReason": "Balanced as it provides significant utility for mining and combat without being overpowered.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T22:26:56.125771+00:00",
    "aiReviewedAt": "2026-07-23T22:26:56.125771+00:00",
    "aiReviewVersion": 1
  },
  "internet_data_core": {
    "id": "internet_data_core",
    "name": "Quantum Compression Pylon",
    "description": "The Quantum Compression Pylon is a gleaming, cybernetic device crafted from polished obsidian and glowing neon circuits. It's said to have been forged in the heart of a quantum data temple during a rare alignment of digital stars. Placing it on your back allows you to reduce your weight by 50% and increase your movement speed by +10 feet per round, but beware—overloading its processing core with too much data triggers a chance for catastrophic system failure.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚙️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "reduce_weight",
      "increase_movement_speed"
    ],
    "vendor": "cyber_market",
    "shippedBy": "fiber_optic_cable",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reduced Weight",
        "rules": "When activated as an action, the device reduces your weight by 50%, allowing you to move more freely. This effect lasts for up to 1 minute and ends when you stop using it or are hit by a melee attack."
      },
      {
        "title": "Increased Movement Speed",
        "rules": "Activates as an action, granting you +10 feet of movement speed for the duration of your next short rest. This effect cannot be used more than once per day and ends if you fall unconscious or are hit by a critical hit."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to handle the device's quantum processing without causing a system failure.",
    "vendorReason": "The cyber_market specializes in cutting-edge tech and has the knowledge to safely sell such advanced devices.",
    "shippingDetail": "Shipped via high-speed fiber optic cables, ensuring secure delivery even during night stock limits.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute or until interrupted",
      "endsWhen": "Stop using it or hit by melee attack",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare craftsmanship and quantum capabilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-24T23:56:11.186447+00:00",
    "aiReviewedAt": "2026-07-24T23:56:11.186447+00:00",
    "aiReviewVersion": 1
  },
  "internet_godly_cache": {
    "id": "internet_godly_cache",
    "name": "The Infinite Scroll",
    "description": "The Infinite Scroll is a shimmering, ancient scroll bound in obsidian and adorned with arcane runes. It contains the collected data of every meme ever created, offering unparalleled insight into internet culture. Holding it grants instant access to any piece of information but carries the risk of accidentally accessing an endless stream of memes, leaving you momentarily distracted. This relic is a must-have for those seeking to navigate the vast sea of knowledge and humor.",
    "category": "premium",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "instant_information_access",
      "chance_of_endless_stream"
    ],
    "vendor": "data_dealer",
    "shippedBy": "quantum courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Instant Information Access",
        "rules": "As an action, you can activate this scroll to gain instant access to any piece of information. The effect is instantaneous but may be interrupted by a successful DC 15 Wisdom saving throw."
      },
      {
        "title": "Chance of Endless Stream",
        "rules": "If you fail the Wisdom save or intentionally choose to access memes, there's a 20% chance that your mind will become overwhelmed with an endless stream of memes for 1 minute. You can use your action to end this effect early."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to properly handle the scroll's power and avoid its distractions.",
    "vendorReason": "The data dealer specializes in ancient and mystical relics that can provide unique insights into internet culture.",
    "shippingDetail": "Ships via quantum courier, arriving within an hour of purchase.",
    "usage": {
      "activation": "action",
      "duration": "instantaneous or until interrupted",
      "endsWhen": "interrupted by a successful Wisdom save or on your next turn if unoccupied with memes",
      "charges": "unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the scroll's unique and powerful abilities.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-23T22:26:58.752642+00:00",
    "aiReviewedAt": "2026-07-23T22:26:58.752642+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_void_charm": {
    "id": "doughnut_hole_void_charm",
    "name": "Echo of the Empty Heart",
    "description": "The Echo of the Empty Heart is a pulsating charm forged from solidified void energy, its surface etched with arcane runes that shimmer like constellations in the dark. This talisman grants minor resistance to psychic damage and whispers secrets about nearby anomalies, but beware—its demands for sprinkles are insistent and often impossible to ignore. The charm hums softly when it detects an anomaly, a low-frequency resonance that grows louder as you home in on its location.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖤",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "resistance_to_psychic_damage",
      "detect_anomalies"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Voidmail Drone",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Resistance to Psychic Damage",
        "rules": "While wearing this charm, you gain a +1 bonus to saving throws against psychic damage. This effect is passive and always active."
      },
      {
        "title": "Detect Anomalies",
        "rules": "The charm emits a low-frequency hum when it detects an anomaly within 30 feet. You can take a bonus action at the start of your turn to attempt a Perception (Arcana) check against DC 15 to pinpoint the exact location of the anomaly."
      }
    ],
    "levelRequirementReason": "The charm's inherent void energy requires a stable mental construct, which is typically achieved by characters of at least second level.",
    "vendorReason": "Void Vendor specializes in items crafted from the very fabric of reality, including this unique artifact.",
    "shippingDetail": "The charm is delivered via a Voidmail Drone, which ensures safe and swift transport through even the most treacherous regions.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; always active while worn.",
      "endsWhen": "Exhausted upon removal or destruction of the charm.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Echo of the Empty Heart is crafted from rare void materials and requires arcane knowledge to properly harness its abilities, making it a moderately priced but valuable artifact.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T22:27:54.379708+00:00",
    "aiReviewedAt": "2026-07-23T22:27:54.379708+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_flavor_ritual": {
    "id": "doughnut_hole_flavor_ritual",
    "name": "Chromatic Confectionary Blessing",
    "description": "The Chromatic Confectionary Blessing is a meticulously crafted ritual offering, a delicate sugar cone brimming with vibrant confections. This service temporarily imbues your weapon with a dazzling array of elemental effects—flames that dance, frost that shatters, lightning that crackles, and earth that crushes. It's said that the Doughnut Hole itself hums in anticipation when this ritual is performed, and foes caught within its radius are left reeling from the chaos it unleashes. Just be wary of the sugary mist that might inadvertently rise and threaten to summon a horde of sentient sprinkles.",
    "category": "services",
    "price": 1000,
    "icon": "✨",
    "stock": 8,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "weapon_deals_elemental_damage",
      "chance_to_stun"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Delivery System",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Burst",
        "rules": "When activated, this blessing imbues your weapon with one of five elemental effects: fire, frost, lightning, earth, or acid. The target takes 1d6 damage of the chosen element on a hit and has a 20% chance to be stunned for 1 round."
      },
      {
        "title": "Sentinel Sprinkles",
        "rules": "If the ritual's duration is interrupted by an action against you, there is a 50% chance that a small cloud of sentient sprinkles will rise. These sprinkles have no attack ability but can hinder movement within their area."
      }
    ],
    "levelRequirementReason": "A basic level requirement ensures even the newest adventurers can partake in this ritual without undue risk.",
    "vendorReason": "The center seller is known for offering services that enhance a character's experience and power, making this ritual a natural addition to their portfolio.",
    "shippingDetail": "Delivered within the week via the Temporal Delivery System, ensuring the confectionary remains fresh upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The duration ends or it is interrupted by an action against you.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the unique and powerful effects, as well as the intricate preparation required for this ritual.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T22:27:26.917460+00:00",
    "aiReviewedAt": "2026-07-23T22:27:26.917460+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_block_shard": {
    "id": "connectopia_block_shard",
    "name": "Echoing Block Shard",
    "description": "The Echoing Block Shard hums softly, its surface etched with ancient blueprints that seem to ripple like a living memory. Crafted from the forgotten minds of long-lost builders, this pulsating fragment can repair damaged blocks in mere moments or reveal hidden crafting secrets when carefully manipulated. Legend has it that those who possess it may unlock lost architectural wonders, though Wario warns not to use it recklessly lest it unleash unintended consequences.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧱",
    "stock": 72,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "repair damaged blocks",
      "reveal hidden crafting recipes"
    ],
    "vendor": "block_smith",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Block Repair",
        "rules": "As an action, the user can apply the Echoing Block Shard to a damaged block. This reduces the time required for repairs by half (a 5-minute repair is reduced to 2 minutes). The shard has no effect on living creatures or non-block structures."
      },
      {
        "title": "Hidden Recipe Revelation",
        "rules": "Once per short rest, the user can focus intently on the Echoing Block Shard. There is a 30% chance that it will reveal a hidden crafting recipe of your choice (not exceeding a 5th-level spell or effect). If successful, you must spend 1 minute studying the shard to unlock the recipe."
      }
    ],
    "levelRequirementReason": "The Echoing Block Shard is accessible to beginners as it requires only basic concentration and action to use.",
    "vendorReason": "Block Smiths are well-versed in the mysteries of stone and brick, making them the perfect vendors for this relic of architectural lore.",
    "shippingDetail": "Ships via Express Delivery, ensuring swift arrival to eager hands.",
    "usage": {
      "activation": "action or bonus action",
      "duration": "instantaneous",
      "endsWhen": "used up; no charges or recharges required",
      "charges": "unlimited"
    },
    "priceReason": "The Echoing Block Shard's rarity and the significant time-saving benefits it offers justify its high price.",
    "priceOriginal": 150,
    "priceReviewedAt": "2026-07-23T22:27:36.558181+00:00",
    "aiReviewedAt": "2026-07-23T22:27:36.558181+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_wire_weaving_service": {
    "id": "connectopia_wire_weaving_service",
    "name": "Automated Wire Weaving Consultation",
    "description": "The Automated Wire Weaving Consultation service from Craft Corner offers you a detailed analysis of your tangled network of wires, recommending optimized patterns for unparalleled data flow. With the aid of expert technicians, this service ensures that even your most chaotic setup becomes a marvel of efficiency. For 30 minutes following its activation, you'll experience a +2 bonus to data transfer speed, streamlining communication and enhancing productivity like never before.",
    "category": "services",
    "price": 1000,
    "icon": "🧵",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Optimized Data Flow",
      "Bonus to Data Transfer Speed"
    ],
    "vendor": "craft_corner",
    "shippedBy": "pioneer_post",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Optimized Data Flow",
        "rules": "For a period of 30 minutes following the service's activation, you gain a +2 bonus to data transfer speed within your immediate area. This effect ends when it expires or if you are incapacitated."
      },
      {
        "title": "Bonus to Data Transfer Speed",
        "rules": "While this effect is active, all electronic devices within 10 feet of you operate at maximum efficiency for the duration. There is no save applicable and this benefit is limited to one use per day."
      }
    ],
    "levelRequirementReason": "This service requires a minimum character level of 4 due to its complexity and the expertise needed from Craft Corner's technicians.",
    "vendorReason": "Craft Corner specializes in technological services, making it the perfect vendor for such an advanced consultation.",
    "shippingDetail": "Pioneer Post guarantees delivery within a week of purchase. Shipping includes a detailed report from the technicians to assist you further.",
    "usage": {
      "activation": "Passive effect upon completion of the service.",
      "duration": "30 minutes.",
      "endsWhen": "Expires at the end of its duration or when incapacitated.",
      "charges": "One use per day."
    },
    "priceReason": "The price is set at 1000 XP to reflect the service's complexity, expert analysis, and the immediate benefits it provides.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T14:25:35.838744+00:00",
    "aiReviewedAt": "2026-07-25T14:25:35.838744+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_mineral_extractor_module": {
    "id": "connectopia_mineral_extractor_module",
    "name": "Vibration Amplifying Module",
    "description": "The Vibration Amplifying Module is a sleek device crafted from durable steel and ancient stone. It channels the earth's natural vibrations, exponentially increasing mining efficiency. Point it at a vein of ore, and the minerals will flow effortlessly into your inventory, doubling your mining speed. This tool also has a knack for uncovering rare minerals—every 10th use yields one with a +2 bonus to crafting rolls. Use with caution, as it can trigger small cave-ins that shake loose hidden treasures or dangerous creatures.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "doubles mining speed",
      "increases chance of finding rare minerals"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "express_delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Mining Speed Increase",
        "rules": "Activates on a bonus action. Instantaneous effect that lasts until the start of your next turn. Ends if you deactivate it or stop using it. Charges are unlimited."
      },
      {
        "title": "Rare Mineral Yield",
        "rules": "Every 10th use has a 25% chance to yield a rare mineral with +2 crafting bonus. This effect is instantaneous and ends after one successful mining attempt."
      }
    ],
    "levelRequirementReason": "Requires level 8 to handle the device's advanced technology and channel earth energies.",
    "vendorReason": "Pioneer Post, known for their expeditions into uncharted territories, sells this essential tool to miners and explorers.",
    "shippingDetail": "Ships within 24 hours with express delivery service.",
    "usage": {
      "activation": "bonus action",
      "duration": "instantaneous",
      "endsWhen": "deactivated or stopped using it",
      "charges": "unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its efficient mining capabilities and rarity.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:27:50.257421+00:00",
    "aiReviewedAt": "2026-07-23T22:27:50.257421+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_whispering_stone": {
    "id": "earth_land_whispering_stone",
    "name": "Whispering Stone of Lost Secrets",
    "description": "The Whispering Stone of Lost Secrets, a gnarled and weathered relic, seems to hum faintly when held. This ancient dragonstone is said to contain fragments of forgotten lore, though only those with patience and focus can decipher its cryptic murmurs. Rumored to be crafted in the forges of long-lost fire-breathers, it may provide a +1 bonus to Perception checks involving ancient ruins but also occasionally triggers visions that could drive one mad if not carefully interpreted.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 17,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Ancient Lore",
      "Mad Visions"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Giant Snail Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ancient Lore",
        "rules": "When held, the stone grants a +1 bonus to Perception checks related to ancient ruins. This effect lasts for 1 hour and can be used once per long rest."
      },
      {
        "title": "Mad Visions",
        "rules": "Once per day, the stone may trigger cryptic visions. You must succeed on a DC 15 Wisdom saving throw or suffer from temporary madness, which imposes disadvantage on all Wisdom checks for 24 hours."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners and those with some experience in lore and ancient magic.",
    "vendorReason": "The Earth Emporium is known for its vast collection of mystical curiosities, including relics from ancient times.",
    "shippingDetail": "Due to the stone's fragile nature, it is delivered by Giant Snail Express within a specially crafted protective casing.",
    "usage": {
      "activation": "Passive effect when held; requires concentration for vision triggers.",
      "duration": "Instantaneous, +1 bonus lasts 1 hour per long rest",
      "endsWhen": "The duration ends naturally or if the stone is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its rarity and the potential for both beneficial lore and madness.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T22:28:05.415316+00:00",
    "aiReviewedAt": "2026-07-23T22:28:05.415316+00:00",
    "aiReviewVersion": 1
  }
};
