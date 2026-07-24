// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_009 = {
  "dk_isles_jungle_jester_ring": {
    "id": "dk_isles_jungle_jester_ring",
    "name": "Jungle Jester Ring",
    "description": "The Jungle Jester Ring is a mischievous relic crafted by the first prankster god of the lost jungle temple. Its laughter can disarm foes and disrupt plans, making it a perilous companion for those who laugh too hard. When struck in combat, the ring's wearer triggers an uncontrollable fit that disarms their foe for 1 round. It also grants +20% evasion while engaging in pranks but deals an additional 1d6 damage if worn during a heist.",
    "category": "equipment",
    "price": 1000,
    "icon": "😄",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Disarm Foemen",
      "Prankster Evasion"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Disarm Foemen",
        "rules": "When the wearer is struck in combat, they trigger an uncontrollable fit of laughter that disarms their foe for 1 round. This effect has a 5% chance to occur per hit taken by the wearer and requires no action from them."
      },
      {
        "title": "Prankster Evasion",
        "rules": "While wearing this ring, the wearer gains +20% evasion while engaging in pranks or mischievous activities. This effect lasts until the end of their next turn and can be activated once per short rest."
      }
    ],
    "levelRequirementReason": "The ring's unpredictable effects require a moderate level to control.",
    "vendorReason": "DK Isles is known for its eclectic array of relics and artifacts from forgotten cults and temples.",
    "shippingDetail": "Ships with special care, ensuring the ring's power remains intact during transit.",
    "usage": {
      "activation": "Instantaneous on being struck in combat; Prankster Evasion once per short rest.",
      "duration": "Disarm Foemen lasts for 1 round. Prankster Evasion lasts until the end of the wearer’s next turn.",
      "endsWhen": "Disarm Foemen ends when the wearer is no longer struck in combat, or the foe makes a successful saving throw against its effect. Prankster Evasion ends at the start of the wearer's next turn.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The ring's unpredictable effects and unique crafting make it moderately priced for its power.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T01:34:08.256665+00:00",
    "aiReviewedAt": "2026-07-22T01:34:08.256665+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_mist_bottle": {
    "id": "dk_isles_jungle_mist_bottle",
    "name": "Jungle Mist Bottle",
    "description": "The Jungle Mist Bottle is a vial of misty green vapor, its glass bottle crafted from the bark of ancient jungle trees. When shaken, it releases a cloud that masks your movements from sight, making you invisible to enemy eyes for an extra two seconds. The low growl it emits can be heard by foes within 10 feet, causing them to stagger and lose their balance for one round with a successful DC 14 Wisdom saving throw.",
    "price": 1000,
    "icon": "🌿",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Stealth Duration +2 Seconds",
      "Enemy Stagger on Touch"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Duration +2 Seconds",
        "rules": "The user gains the benefit of the Stealth action for an additional two seconds when they shake the bottle. This effect does not stack with other sources of stealth."
      },
      {
        "title": "Enemy Stagger on Touch",
        "rules": "When shaken, the bottle emits a low growl that causes creatures within 10 feet to make a DC 14 Wisdom saving throw. On a failed save, they are stunned for one round."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginning adventurers who need to navigate the jungle without detection.",
    "vendorReason": "The DK Isles merchants specialize in crafting and trading items that aid travelers through their treacherous jungles.",
    "shippingDetail": "This item ships via Pipe Express, known for its reliable delivery service within the islands.",
    "usage": {
      "activation": "A bonus action to shake the bottle and release its misty contents.",
      "duration": "Instantaneous effect; lasts until the end of your next turn when shaken.",
      "endsWhen": "The effect ends if the user is no longer hidden or if they are struck by an attack.",
      "charges": "Unlimited uses, but only one bottle can be used at a time."
    },
    "priceReason": "The price reflects the rare materials and intricate craftsmanship required to produce this jungle survival aid.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:34:39.431758+00:00",
    "aiReviewedAt": "2026-07-22T01:34:39.431758+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_mist_shroud": {
    "id": "dk_isles_jungle_mist_shroud",
    "name": "Jungle Mist Shroud",
    "description": "The Jungle Mist Shroud is a woven cloak that shimmers like the misty jungle itself, blending the wearer into the dense foliage. In the heart of the jungle, it glows faintly in darkness, revealing hidden paths and ambushes. This ancient artifact was crafted by the Enchanted Weavers of the Distant Isles to protect travelers from predation. Its glow is a living force that interacts with the environment, making the wearer nearly invisible to jungle predators and enhancing stealth within biomes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth +20% in jungle biomes",
      "Glows faintly in darkness revealing hidden paths"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Stealth",
        "rules": "The wearer gains a +20 bonus to Dexterity (Stealth) checks within jungle biomes. This effect is active as long as the shroud is worn and not destroyed or removed."
      },
      {
        "title": "Dark Path Reveal",
        "rules": "While wearing this item, the wearer can use an action to make a DC 15 Wisdom (Perception) check to reveal hidden paths. This effect has no cooldown but cannot be used more than once per long rest."
      }
    ],
    "levelRequirementReason": "The complexity of the enchantments requires at least third-level spellcasting proficiency.",
    "vendorReason": "The Enchanted Weavers of Distant Isles are renowned for their magical craftsmanship, and this item is one of their most sought-after creations.",
    "shippingDetail": "Due to the delicate nature of the shroud's enchantments, it must be delivered by Shy Guy Smugglers within a week or risk losing its magical properties.",
    "usage": {
      "activation": "Passive effect; no activation required. The wearer can use an action once per long rest to make a check and reveal hidden paths.",
      "duration": "Active as long as the item is worn",
      "endsWhen": "Destroyed, removed from the wearer's body, or its magical properties are lost due to improper delivery by Shy Guy Smugglers.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's enchantments and craftsmanship make it a valuable asset for adventurers navigating the dangerous jungles.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:34:42.697758+00:00",
    "aiReviewedAt": "2026-07-22T01:34:42.697758+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_mistblade": {
    "id": "dk_isles_jungle_mistblade",
    "name": "Jungle Mistblade",
    "description": "The Jungle Mistblade is a curved shadowwood blade imbued with mist from the densest parts of the DK Isles' jungles. It whispers the forest's secrets and strikes with feral precision, its edge sharp enough to cut through even the thickest vines. This weapon enhances your agility in jungle terrain, making you nearly invisible to foes in low-light conditions while also granting a significant dodge chance against attacks from within these biomes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Whispers",
      "Mist Veil"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Whispers",
        "rules": "While wielding the Jungle Mistblade, you have advantage on Dexterity (Stealth) checks when within a jungle biome. Additionally, you gain a +30% chance to dodge enemy attacks in such environments."
      },
      {
        "title": "Mist Veil",
        "rules": "In low-light conditions, you and any allies within 10 feet of you are considered invisible to hostile creatures with darkvision or similar abilities. This effect lasts for 1 minute per use and ends when you attack, cast a spell, or move out of the jungle biome."
      }
    ],
    "levelRequirementReason": "The Jungle Mistblade's enchantments require a certain degree of finesse and experience to wield effectively in its native environment.",
    "vendorReason": "The local artisans of the DK Isles are adept at crafting weapons that resonate with their natural surroundings, making the Jungle Mistblade a perfect fit for their inventory.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its reliable and swift delivery through any terrain, ensuring your blade arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "1 minute per use; ends when you attack, cast a spell, or move out of the jungle biome.",
      "endsWhen": "The duration expires after 1 minute, is ended by attacking, casting a spell, moving out of a jungle biome, or running out of charges.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Jungle Mistblade's unique enchantments and craftsmanship justify its fair value in XP, offering both tactical advantages and thematic immersion for adventurers navigating the DK Isles' jungles.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:22:39.846821+00:00",
    "aiReviewedAt": "2026-07-22T04:22:39.846821+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_moonfang_bow": {
    "id": "dk_isles_jungle_moonfang_bow",
    "name": "Moonfang Jungle Bow",
    "description": "Moonfang Jungle Bow, a sleek obsidian-forged weapon imbued by the ancient spirits of the jungle, is said to have been crafted from the fangs of the moon-shadowed creatures themselves. This bow fires arrows that are laced with potent venom, capable of turning even the most resilient foes into trembling shadows within moments. Its deadly precision and the poison it delivers make it a favored weapon among those who navigate the dense foliage of the jungle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Venomous Arrows",
      "Jungle Precision"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Venomous Arrows",
        "rules": "When an arrow strikes a target, it inflicts poison damage equal to 10% of the target's hit points per second for 6 rounds. The target can use its action to make a DC 15 Constitution saving throw to end this effect early."
      },
      {
        "title": "Jungle Precision",
        "rules": "This weapon grants you advantage on attack rolls against jungle creatures and increases your critical hit chance by 15%. This bonus does not stack with other sources of critical hit bonuses."
      }
    ],
    "levelRequirementReason": "The balance of the jungle demands that only those who have proven their worth through experience wield Moonfang Jungle Bow.",
    "vendorReason": "As guardians of the wild, dk Isles is entrusted with the most potent and rare weapons from the heart of the jungle.",
    "shippingDetail": "Due to its fragile nature, Moonfang Jungle Bow requires special packaging and expedited delivery through Pipe Express.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous with each attack",
      "endsWhen": "The arrow strikes a target or the effect is ended by a successful saving throw",
      "charges": "Unlimited, recharged after long rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique crafting and potent effects in jungle combat.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:22:25.655687+00:00",
    "aiReviewedAt": "2026-07-22T04:22:25.655687+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_moss_essence": {
    "id": "dk_isles_jungle_moss_essence",
    "name": "Jungle Moss Essence",
    "description": "The Jungle Moss Essence radiates a soft, emerald glow that illuminates the dense jungle canopy without drawing unwanted attention. This bioluminescent moss not only heals 50 hit points upon consumption but also grants you a fleeting advantage in stealth, allowing you to move silently as if hiding among foliage. For ten seconds, your presence becomes indistinguishable from the surrounding environment, perfect for covert missions or survival deep within the verdant heart of the forest.",
    "price": 1000,
    "icon": "🌿",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Bioluminescent Glow",
      "Stealthy Advantage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bioluminescent Glow",
        "rules": "Upon consumption, the Jungle Moss Essence releases a soft, emerald glow that illuminates your surroundings for ten seconds. This effect has no save DC and is instantaneous."
      },
      {
        "title": "Stealthy Advantage",
        "rules": "For 10 seconds after consuming the essence, you gain a +3 bonus to Dexterity (Stealth) checks. The effect ends when you take damage or if you voluntarily end it."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and adventurers who need basic survival skills.",
    "vendorReason": "The DK Isles traders specialize in rare jungle flora, making them the perfect source for this unique essence.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for its swift and reliable delivery through enchanted means.",
    "usage": {
      "activation": "Consumption",
      "duration": "10 seconds per use",
      "endsWhen": "You take damage or voluntarily end the effect",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects its rarity and utility in survival and stealth scenarios.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:35:06.243787+00:00",
    "aiReviewedAt": "2026-07-22T01:35:06.243787+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_moss_shield": {
    "id": "dk_isles_jungle_moss_shield",
    "name": "Jungle Moss Shield",
    "description": "The Jungle Moss Shield is a verdant barrier that thrives in the dense jungles of the Dusk Isles. Its surface glistens with emerald hues, pulsing with primal energy. This living shield not only absorbs damage but also slowly regenerates its own HP, making it an indispensable companion for any jungle expedition or battle. When fully charged, it emits a deafening sonic pulse that disrupts enemy targeting and momentarily blinds foes within range.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs Damage",
      "Regenerates Health"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Damage Absorption",
        "rules": "The shield absorbs up to 30% of incoming damage. The absorbed damage is converted into health for the shield, regenerating at a rate of 1 HP per second while active."
      },
      {
        "title": "Disrupt Targeting Pulse",
        "rules": "Activating the shield's full charge emits a sonic pulse that disrupts enemy targeting within a 20-foot radius. This effect lasts for 3 seconds and has no save DC, but it can only be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Jungle Moss Shield is designed to be versatile enough for beginners while still providing significant utility.",
    "vendorReason": "As natives of the Dusk Isles, the dk_isles have a deep connection with the natural world and can cultivate such unique items.",
    "shippingDetail": "The shield is carefully packed to withstand long-distance travel through the dense foliage and treacherous terrain of the islands.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (one-time use per rest)",
      "endsWhen": "Exhausted after one use per short or long rest",
      "charges": "Unlimited, but can only be used once per rest"
    },
    "priceReason": "The shield's rarity and the skill required to cultivate it justify its fair value in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:34:56.447201+00:00",
    "aiReviewedAt": "2026-07-22T01:34:56.447201+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_mud": {
    "id": "dk_isles_jungle_mud",
    "name": "Mud Golem Shackle",
    "description": "The Mud Golem Shackle, forged from the ancient bones of jungle mud golems, is a heavy, moss-covered shackle that whispers secrets of the deep jungle when worn. Its wearer gains temporary invisibility and resistance to knockback, making them an elusive target in the dense foliage. Crafted by the dark arts, this shackle enhances the user's attacks within jungle terrain, increasing critical hit chance by 5%. The shackle is a rare find from the mysterious DK Isles, where it was discovered in ancient tombs.",
    "category": "equipment",
    "price": 3500,
    "icon": "🧱",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility Burst",
      "Jungle Terrain Boost"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Invisibility Burst",
        "rules": "When stationary for at least one minute, the wearer can activate this effect to become temporarily invisible. This lasts for 1 turn (6 turns total). The wearer must remain still during this duration; movement or combat ends invisibility early."
      },
      {
        "title": "Jungle Terrain Boost",
        "rules": "While within jungle terrain, the user gains +5% critical hit chance when attacking. This effect is active as long as they are in a jungle environment and does not require activation."
      }
    ],
    "levelRequirementReason": "This shackle's potent abilities demand sufficient experience to wield its power effectively.",
    "vendorReason": "The DK Isles is renowned for their mystical artifacts, and the Mud Golem Shackle is a prime example of their craftsmanship.",
    "shippingDetail": "Ships via spirit courier; expedited delivery but requires a week's notice.",
    "usage": {
      "activation": "Uses an action to activate Invisibility Burst. Jungle Terrain Boost is passive and does not require activation.",
      "duration": "Invisibility Burst lasts for 1 turn (6 turns total). Jungle Terrain Boost is active as long as the user remains in jungle terrain.",
      "endsWhen": "Invisibility Burst ends early with movement or combat; Jungle Terrain Boost expires when leaving a jungle environment.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Mud Golem Shackle's rarity and unique abilities justify its high price, reflecting the value of its mystical properties.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T01:35:27.801937+00:00",
    "aiReviewedAt": "2026-07-22T01:35:27.801937+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_nectar": {
    "id": "dk_isles_jungle_nectar",
    "name": "Jungle Nectar of the Whispering Roots",
    "description": "The Jungle Nectar of the Whispering Roots is a shimmering green elixir that sparkles with the essence of ancient flora. It was crafted from rare roots by the Toads of the Dusk Isles, whose wisdom and cunning are unmatched in the world. Sip this nectar cautiously; it's said to be imbued with the spirit of a Toad who fought tooth and claw against captivity, granting you invisibility and enhanced speed for a fleeting moment.",
    "price": 1000,
    "icon": "🍹",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Speed Boost"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility (5s)",
        "rules": "You gain temporary invisibility for 5 seconds. You can use this ability once per short or long rest."
      },
      {
        "title": "Speed Boost (+40%)",
        "rules": "Your movement speed is increased by 40% for 10 seconds, allowing you to traverse the jungle with unmatched agility. This effect also grants a +2 bonus to Dexterity (Acrobatics) checks."
      }
    ],
    "levelRequirementReason": "This nectar's potency is accessible to all adventurers, as its effects are not tied to high-level skills or abilities.",
    "vendorReason": "The Dusk Isles have a deep connection with the flora and fauna of their jungles, making them the perfect purveyors of this elixir.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, ensuring you receive your nectar in peak condition.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "5 seconds of invisibility and 10 seconds of speed boost",
      "endsWhen": "The effects expire after the stated duration or if you take any damage",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This price reflects its rare origin, potent effects, and the time required to harvest and process the nectar.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T04:22:10.382519+00:00",
    "aiReviewedAt": "2026-07-22T04:22:10.382519+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_nectar_of_the_vines": {
    "id": "dk_isles_jungle_nectar_of_the_vines",
    "name": "Jungle Nectar of the Vines",
    "description": "The Jungle Nectar of the Vines is a shimmering elixir drawn from the ancient roots of the jungle’s oldest trees. Its golden hue and fragrant aroma hint at its power to heal wounds and quicken reflexes in the wilds. Drinkers move with the grace of vines through dense undergrowth, their movements undetectable by most predators for 10 seconds. This nectar not only grants temporary regeneration but also shields against harm, absorbing a portion of incoming damage.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Regeneration Boost",
      "Agility Enhancement"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Regeneration Boost",
        "rules": "The drinker regains 1d6+2 hit points over the next 10 seconds. This effect is instantaneous upon consumption and does not require an action."
      },
      {
        "title": "Agility Enhancement",
        "rules": "For 30 seconds, the drinker’s speed increases by 15 feet while in jungle terrain only. The effect ends if the drinker leaves the jungle or takes damage."
      }
    ],
    "levelRequirementReason": "Beginners should be able to access this nectar early on but still require a minimum level to appreciate its full benefits.",
    "vendorReason": "The Dk Isles natives have long revered the jungle for its secrets and medicines, making them adept at sourcing such potent elixirs.",
    "shippingDetail": "Ships within one week via Lakitu Express, ensuring freshness upon arrival.",
    "usage": {
      "activation": "Instantaneous consumption",
      "duration": "10 seconds and 30 seconds respectively for regeneration and agility boost",
      "endsWhen": "The effects end when the drinker leaves jungle terrain or takes damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced against other rare elixirs, this nectar offers significant benefits for its price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:35:24.495117+00:00",
    "aiReviewedAt": "2026-07-22T01:35:24.495117+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_nectar_potion": {
    "id": "dk_isles_jungle_nectar_potion",
    "name": "Jungle Nectar Potion",
    "description": "The Jungle Nectar Potion is a shimmering, emerald-green elixir collected from the sacred bloom of the jungle’s heart. Its aroma carries the scent of wildflowers and earth, infusing the drinker with vitality. When consumed, it not only restores 150 hit points but also grants the imbiber stealth in jungle zones, making them nearly invisible to foes for a brief moment. The potion's effects are as unpredictable as nature itself, offering a fleeting window of advantage to those who dare to venture into the jungle’s depths.",
    "price": 1000,
    "icon": "🍵",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Restores Health",
      "Stealth in Jungle Zones"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Health Restoration",
        "rules": "Consume the potion to gain 150 hit points. This effect is instantaneous and has no save or duration."
      },
      {
        "title": "Jungle Stealth",
        "rules": "For 15 seconds, you are considered invisible in jungle zones. Creatures within a 30-foot radius have disadvantage on Wisdom (Perception) checks to notice you while this effect lasts. This ability is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers, as the potion's effects are potent yet balanced.",
    "vendorReason": "The DK Isles have established trade routes through the jungle, and their traders are known to gather rare elixirs like this one.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe delivery even in treacherous zones.",
    "usage": {
      "activation": "Consume as a bonus action.",
      "duration": "15 seconds.",
      "endsWhen": "Ends when the duration expires or you take damage.",
      "charges": "Unlimited, but only once per long rest."
    },
    "priceReason": "The potion's rarity and the unique benefits it offers justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:35:50.541938+00:00",
    "aiReviewedAt": "2026-07-22T01:35:50.541938+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_rage_talisman": {
    "id": "dk_isles_jungle_rage_talisman",
    "name": "Jungle Rage Talisman",
    "description": "The Jungle Rage Talisman channels the untamed fury of the ancient jungles, its core pulsing with primal energy. When worn in a jungle, it grants a +30% attack speed and damage bonus during combat. With each swing of your weapon, there's an exhilarating 10% chance to trigger a wild surge that stuns foes for 2 seconds, adding chaos to the battlefield. This talisman is forged from the bones and essence of jungle spirits, imbued with the very essence of the forest’s wrath.",
    "category": "equipment",
    "price": 2000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Attack Speed Boost +30%",
      "10% chance to trigger Wild Jungle Surge (stuns for 2s)"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Wild Jungle Surge",
        "rules": "When you attack an enemy within a jungle, there's a 10% chance that your weapon strike will trigger a wild surge. This effect stuns the targeted creature for 2 seconds. The surge has no save DC and can occur once per minute."
      },
      {
        "title": "Increased Melee Accuracy",
        "rules": "While in jungle terrain, you gain a +15 bonus to your attack rolls with melee weapons. This benefit lasts as long as you remain within the jungle and does not stack with other bonuses."
      }
    ],
    "levelRequirementReason": "The talisman's raw power demands a minimum character level of 3 to wield.",
    "vendorReason": "The artisans of Dk Isles are renowned for their deep connection with primal magic, making them the perfect purveyors of this jungle-forged relic.",
    "shippingDetail": "Ships via a Rakasha spirit courier, ensuring swift delivery within days.",
    "usage": {
      "activation": "The talisman activates on contact with an enemy in jungle terrain. Its effects last until the start of your next turn after using an action or bonus action to attack.",
      "duration": "1 minute",
      "endsWhen": "You leave a jungle, use an action or bonus action to attack again without triggering the surge, or you are incapacitated.",
      "charges": "Unlimited; the talisman recharges after a long rest."
    },
    "priceReason": "The talisman's rare crafting materials and deep jungle essence make it an expensive but powerful addition to any adventurer’s arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:35:54.512975+00:00",
    "aiReviewedAt": "2026-07-22T01:35:54.512975+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_rainfall_glove": {
    "id": "dk_isles_jungle_rainfall_glove",
    "name": "Jungle Rainfall Glove",
    "description": "The Jungle Rainfall Glove is a rare artifact crafted from the enchanted leaves of the Rainclaw Vine and the bones of ancient jungle guardians. When activated, it summons a cascade of rain that blankets the ground in slippery mud, reducing enemy movement speed by 20% for 10 seconds. The glove also emits a subtle hum, temporarily weakening foes' armor enough to deal an extra 5 damage on attacks made against them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌧",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Summons Rainstorm",
      "Armor Weakness"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Rainstorm Summoning",
        "rules": "Activates as a bonus action. The user must be in an open area to summon the rainstorm, which lasts for 10 seconds. Enemies within a 20-foot radius are affected by a -20% movement speed penalty. This effect ends if the user takes any damage or moves more than 10 feet away from their starting position."
      },
      {
        "title": "Armor Weakness",
        "rules": "Enemies struck by attacks made during the rainstorm have their AC reduced by 4 for a duration of 5 seconds. This effect is limited to one use per minute and requires no action to activate once the rainstorm begins."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield due to its complex enchantments.",
    "vendorReason": "DK Isles is known for their deep jungle knowledge and crafting expertise, making them the ideal vendor for this artifact.",
    "shippingDetail": "The gloves are shipped via a specialized Void Drifter pod that ensures they arrive in pristine condition.",
    "usage": {
      "activation": "Bonus action to summon rainstorm and attack during its duration.",
      "duration": "10 seconds for the rainstorm, with armor weakness lasting 5 seconds.",
      "endsWhen": "The effect ends if the user takes damage or moves more than 10 feet from their starting position.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare crafting materials and unique abilities that aid in combat without being overpowered.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T01:36:27.606749+00:00",
    "aiReviewedAt": "2026-07-22T01:36:27.606749+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_scarab_helm": {
    "id": "dk_isles_jungle_scarab_helm",
    "name": "Jungle Scarab Helm",
    "description": "The Jungle Scarab Helm is a relic crafted from the bones of ancient jungle serpents and obsidian, imbued with the essence of the rainforest. This helm not only grants stealth in dense foliage but also enhances melee attacks by channeling the ambient vibrations of the jungle. Its wearer moves silently through the undergrowth and strikes true among the thick canopy, where its serpentine visage seems to blend seamlessly with the shadows.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Jungle Stealth",
      "Enhanced Melee Attacks"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Jungle Stealth",
        "rules": "While wearing this helm in dense jungle terrain, you gain a +30% bonus to your stealth checks. This effect is instantaneous and does not require an action or reaction."
      },
      {
        "title": "Enhanced Melee Attacks",
        "rules": "When within 60 feet of dense foliage, you gain a +15 bonus to melee attack rolls. The helm’s vibrations enhance your strikes for the duration of one short rest."
      }
    ],
    "levelRequirementReason": "This relic is crafted for those who venture into the heart of the jungle, requiring at least third-level proficiency in survival and stealth.",
    "vendorReason": "The Dk Isles have long traded with the ancient tribes that crafted this helm, ensuring its authenticity and power.",
    "shippingDetail": "Due to the delicate nature of the helm's materials, it is shipped via the Void Drifter Relay, which guarantees safe delivery within one week.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous for stealth, lasts until the end of your next short rest for melee attacks.",
      "endsWhen": "The effects expire at the start of your next long rest or when removed from a dense jungle environment.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This helm is crafted with rare materials and ancient techniques, making it a valuable yet balanced purchase for adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:36:05.210997+00:00",
    "aiReviewedAt": "2026-07-22T01:36:05.210997+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_scarab_ward": {
    "id": "dk_isles_jungle_scarab_ward",
    "name": "Jungle Scarab Ward",
    "description": "Crafted from the ancient jungle's obsidian and encrusted with scarab shells, this glowing amulet transforms its wearer into a master of concealment within the verdant labyrinth. The Jungle Scarab Ward grants temporary camouflage that allows you to evade detection by predators and scouts for ten seconds, while also offering immunity against all poisons found in the jungle's treacherous flora. Its bonus to critical strikes from behind cover adds an element of stealthy prowess, making it a prized tool among jungle explorers and adventurers.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Camouflage",
      "Poison Immunity"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Camouflage",
        "rules": "When activated as a bonus action, the Jungle Scarab Ward grants you advantage on Dexterity (Stealth) checks for ten seconds. While under its effects, you can use your reaction to take the Hide action automatically if not already hidden. The effect ends when you attack or cast a spell."
      },
      {
        "title": "Poison Immunity",
        "rules": "For thirty seconds upon activation as an action, you gain immunity to all poison damage and effects from jungle toxins. This immunity persists until the end of your next long rest. If exposed to poison again during this duration, you must make a DC 15 Constitution saving throw or take no effect."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers who have begun their journey into the jungle's dangers.",
    "vendorReason": "The DK Isles are renowned for their connection to the jungle and trade in enchanted items that aid explorers within its depths.",
    "shippingDetail": "Ships via Pipe Express, with expedited delivery and a special tracking feature that reveals hidden paths through the jungle.",
    "usage": {
      "activation": "Bonus action or action to activate camouflage or poison immunity respectively.",
      "duration": "10 seconds for camouflage; 30 seconds for poison immunity.",
      "endsWhen": "On attack, spell casting, or exposure to poison again during its duration.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "The balanced price reflects the item's rarity and utility for adventurers navigating through the jungle's dangers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:36:43.396488+00:00",
    "aiReviewedAt": "2026-07-22T01:36:43.396488+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_scent_bottle": {
    "id": "dk_isles_jungle_scent_bottle",
    "name": "Jungle Scent Bottle of the Whispering Roots",
    "description": "The Jungle Scent Bottle of the Whispering Roots is a vial filled with the concentrated essence of ancient jungle roots. These roots, alive with the whispers of forgotten lore, grant you enhanced stealth and insight into hidden dangers. When uncorked in a moment of need, it increases your Stealth by +10% for 30 seconds, revealing secret paths or enemies within 30 meters. However, misuse can lead to brief disorientation, making you more vulnerable for the next hour.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhanced Stealth",
      "Reveal Hidden Paths"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Stealth",
        "rules": "Activate as a bonus action. Increases your Stealth by +10% for 30 seconds. This effect ends if you are hit in combat or if the duration expires."
      },
      {
        "title": "Reveal Hidden Paths",
        "rules": "Activate as an action within sight of hidden paths or enemies. Reveals secret routes and hidden dangers within 30 meters, allowing you to bypass traps or avoid unseen threats. The effect ends when used again or after a short rest."
      }
    ],
    "levelRequirementReason": "Basic stealth enhancement for beginners who wish to navigate the jungle without being detected.",
    "vendorReason": "The Dk Isles are renowned for their extensive knowledge of local flora, making them a trusted source for such enchanted items.",
    "shippingDetail": "Delivered via a Rakasha courier who ensures the essence remains potent throughout its journey.",
    "usage": {
      "activation": "Bonus action or action",
      "duration": "30 seconds or until used again",
      "endsWhen": "Hit in combat or after one use per day",
      "charges": "Unlimited, but limited to one use per day"
    },
    "priceReason": "The bottle's rarity and the unique properties of its contents justify a price slightly above average.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:36:22.724687+00:00",
    "aiReviewedAt": "2026-07-22T01:36:22.724687+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_scent_spray": {
    "id": "dk_isles_jungle_scent_spray",
    "name": "Jungle Scent Spray",
    "description": "The Jungle Scent Spray exudes a thick, fetid mist that swirls like living decay. It's said to be crafted from the essence of ancient jungle spirits, and its noxious fumes can send even seasoned warriors into fits of madness and panic. The spray is potent enough to temporarily paralyze an enemy’s movements, rendering them vulnerable for several turns. Use it sparingly; prolonged exposure risks driving you mad as well.",
    "price": 1000,
    "icon": "🍃",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Induce Panic",
      "Prolonged Exposure Risks Madness"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Induce Panic",
        "rules": "When used, the Jungle Scent Spray releases a cloud of noxious mist within a 15-foot radius. Enemies in this area must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. This effect ends if the target moves out of the cloud's range."
      },
      {
        "title": "Prolonged Exposure Risks Madness",
        "rules": "If an individual is exposed to the spray for more than one use, they must succeed on a DC 16 Wisdom saving throw or suffer from temporary disorientation and reduced movement speed by half for the remainder of the encounter. This effect persists until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "Crafted with ancient jungle magic, this item requires a moderate understanding of herbalism and alchemy, appropriate for those at least second level.",
    "vendorReason": "The DK Isles are renowned for their mystical flora and fauna; it's only fitting that they sell items imbued with the essence of the jungle.",
    "shippingDetail": "Ships via special courier, ensuring the spray arrives in pristine condition. Delivery may take an extra day due to its fragile nature.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (effect lasts until end of turn)",
      "endsWhen": "Target moves out of the mist's range or uses again",
      "charges": "Uses 1, recharges after a long rest"
    },
    "priceReason": "Crafted from rare jungle flora and ancient magic, this spray is both powerful and delicate, justifying its high price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:37:30.233789+00:00",
    "aiReviewedAt": "2026-07-22T01:37:30.233789+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_scented_leaves": {
    "id": "dk_isles_jungle_scented_leaves",
    "name": "Scented Jungle Leaves",
    "description": "The Scented Jungle Leaves are a rare find from the dense canopies of the Dusk Isles, their fragrant aroma masking your scent as surely as the wind conceals a whisper. These leaves, harvested under moonlit conditions, offer an invaluable edge in stealth missions and ambushes, allowing you to bypass even the most vigilant Kremling patrols without detection. Their unique composition grants immunity to poison from local flora, ensuring your safety amidst the jungle's treacherous blooms.",
    "price": 1000,
    "icon": "🍃",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mask scent for 30 seconds",
      "Boost stealth by +15% chance"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Scent Masking",
        "rules": "When consumed, the Scented Jungle Leaves provide a mask to your natural scent for 30 seconds. This effect grants immunity to poison from jungle flora and boosts stealth detection by +15% chance per round while active."
      },
      {
        "title": "Boost Stealth",
        "rules": "The leaves enhance your stealth detection by +15% chance each round, stacking with other similar effects but not exceeding a total of +30%. This effect ends when the duration expires or if you consume another scent-masking item within 24 hours."
      }
    ],
    "levelRequirementReason": "The Scented Jungle Leaves are accessible to all adventurers, offering a valuable tool for stealth and survival in the jungles of the Dusk Isles.",
    "vendorReason": "The Scented Jungle Leaves are a specialty of the Dusk Isles vendor, known for their intimate knowledge of local flora and fauna.",
    "shippingDetail": "Delivered by Pipe Express, these leaves arrive fresh and potent, ensuring they remain effective upon consumption.",
    "usage": {
      "activation": "Eaten as a free action",
      "duration": "30 seconds per use",
      "endsWhen": "Duration ends or another scent-masking item is consumed within 24 hours",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Scented Jungle Leaves are priced at 1000 XP for their unique combination of immediate, potent effects and the rarity of their source.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:36:52.777687+00:00",
    "aiReviewedAt": "2026-07-22T01:36:52.777687+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_soul_amber": {
    "id": "dk_isles_jungle_soul_amber",
    "name": "Jungle Soul Amber",
    "description": "The Jungle Soul Amber is a radiant, glowing piece of amber that captures the essence of a jungle spirit. Crafted from the heartwood of ancient trees, it enhances your connection to the wild and grants you mastery over its hidden forces. When worn, it allows you to move through dense foliage with ease and boosts your critical hit chance against jungle creatures by 10%. Upon activation, it restores a significant portion of your health, ensuring that you can face the next challenge with vigor.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Jungle Mastery",
      "Critical Boost"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Swift Wind Couriers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Jungle Mastery",
        "rules": "When activated as an action, this item grants a +15% bonus to your movement speed in jungle terrain for 30 seconds. This effect ends if you leave the jungle or take damage."
      },
      {
        "title": "Critical Boost",
        "rules": "This item increases your chance of landing a critical hit against jungle creatures by +10%. The effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "Requires at least level 3 to effectively harness the spirit's power and move through dense jungles with agility.",
    "vendorReason": "The island's native artisans are adept at capturing the essence of nature, making them trusted purveyors of Jungle Soul Amber.",
    "shippingDetail": "Delivered by Swift Wind Couriers for expedited service ensuring you receive your item in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds or until the end of next turn",
      "endsWhen": "Leaving jungle terrain or taking damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects its potent effects, making it a valuable asset for adventurers navigating dense jungles.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:36:41.353721+00:00",
    "aiReviewedAt": "2026-07-22T01:36:41.353721+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_soul_bolt": {
    "id": "dk_isles_jungle_soul_bolt",
    "name": "Jungle Soul Bolt",
    "description": "The Jungle Soul Bolt is a jagged obsidian shard imbued with the raw energy of the deep jungle, pulsing with life and death. Crafted by ancient spirits from the heartwood of primordial trees, it channels primal fury when wielded in combat. A mere flicker of this weapon can disrupt an enemy's focus, causing confusion that lasts for several tense heartbeats, while its strike also reduces their armor's effectiveness, leaving them vulnerable to further attacks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Inflicts Confusion",
      "Reduces Armor"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Swiftroot Couriers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Confusion",
        "rules": "When the Jungle Soul Bolt strikes an enemy, it causes confusion. The target must make a Wisdom saving throw (DC 15) or be incapacitated for 3 seconds, during which time they have disadvantage on all attacks and ability checks."
      },
      {
        "title": "Armor Reduction",
        "rules": "For 5 seconds after the Jungle Soul Bolt strikes an enemy, their armor's effectiveness is reduced by 15%. This effect does not stack with other sources of armor reduction. The duration ends if the target takes any damage or if they move more than 10 feet."
      }
    ],
    "levelRequirementReason": "The Jungle Soul Bolt requires a minimum level to channel its primal energy effectively.",
    "vendorReason": "The artisans of the Dk Isles have long sought to harness the jungle's mystical power, and this shard is one such creation.",
    "shippingDetail": "Ships via Swiftroot Couriers for expedited delivery within a week.",
    "usage": {
      "activation": "On a melee attack roll",
      "duration": "Instantaneous, with 5-second duration per use",
      "endsWhen": "The target takes damage or moves more than 10 feet; recharge after 8 hours of rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a fair price for its unique and potent effects in combat.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:37:39.627540+00:00",
    "aiReviewedAt": "2026-07-22T01:37:39.627540+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_soul_brew": {
    "id": "dk_isles_jungle_soul_brew",
    "name": "Jungle Soul Brew",
    "description": "The Jungle Soul Brew is a potent elixir crafted from the heartwood of ancient jungle trees, imbued with the very essence of the forest. It not only regenerates vitality but also grants temporary camouflage, allowing you to blend seamlessly into the dense undergrowth during stealthy maneuvers or covert operations. This rare concoction is perfect for those who need an edge in the wild, enhancing both your health and your ability to navigate unseen.",
    "price": 1000,
    "icon": "🍵",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Vitality Boost",
      "Jungle Camouflage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vitality Boost",
        "rules": "Drinking this elixir grants you a +20% increase in health regeneration for 5 minutes. This effect is passive and does not require an action to activate."
      },
      {
        "title": "Jungle Camouflage",
        "rules": "For the duration of your jungle-themed activities, there is a 15% chance that you can become temporarily invisible during encounters with flora. This camouflage lasts for 3 seconds each time it activates and cannot be used more than once per hour."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers of all levels, as its benefits are crucial in any jungle environment.",
    "vendorReason": "Known for their expertise in crafting potions and elixirs derived from local flora, the DK Isles are the perfect vendor for this rare concoction.",
    "shippingDetail": "This item is shipped within a special bamboo container to preserve its potency during transit.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "5 minutes per use, expires after the duration ends.",
      "endsWhen": "The duration expires or you are no longer in a jungle environment.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price point to ensure it remains a valuable but not overpowered addition to any adventurer's inventory.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:37:10.834978+00:00",
    "aiReviewedAt": "2026-07-22T01:37:10.834978+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_soul_cage": {
    "id": "dk_isles_jungle_soul_cage",
    "name": "Jungle Soul Cage",
    "description": "The Jungle Soul Cage is a mystical device crafted from entwined jungle vines and ancient Onyx Hand sigils. When activated, it ensnares an enemy within its viney grasp, immobilizing them for 10 seconds. Simultaneously, the wielder gains temporary camouflage, blending seamlessly into the foliage with a stealth bonus of +30%. The device is said to have been forged in the heart of the densest jungle, where the spirits of ancient creatures reside and lend their power.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immobilize",
      "Stealth Bonus"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immobilization",
        "rules": "When activated as a bonus action within 5 feet, this device immobilizes one creature for 10 seconds. On a successful DC 15 Dexterity saving throw, the target is not immobilized but still takes the effects of any damage or status effects that were active when it was immobilized."
      },
      {
        "title": "Stealth Bonus",
        "rules": "The wielder gains a +30 bonus to Stealth checks for the duration of one short rest. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This device is crafted with simpler enchantments, making it accessible to adventurers at lower levels.",
    "vendorReason": "The inhabitants of the Dk Isles have a deep connection to nature and its secrets, which they share through such wondrous devices.",
    "shippingDetail": "Ships via Pipe Express with expedited delivery within a week from stock availability.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "10 seconds (ends when the target escapes or is freed)",
      "endsWhen": "The target successfully saves against the immobilization, or the device is destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the rare materials and ancient knowledge required to craft this jungle-born device.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:37:06.199626+00:00",
    "aiReviewedAt": "2026-07-22T01:37:06.199626+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_soul_catalyst": {
    "id": "dk_isles_jungle_soul_catalyst",
    "name": "Jungle Soul Catalyst",
    "description": "The Jungle Soul Catalyst hums with the essence of the ancient Fractured Atrium, its core a pulsing heart of verdant energy. Crafted by the enigmatic scholars of the Deep Isles, it channels primal magic to enhance your strikes and grant you temporary camouflage amidst the jungle's dense foliage. Activating this relic not only increases your melee damage but also evades jungle traps, making it an indispensable tool for stealthy maneuvers in the wilds.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Boosts Melee Damage",
      "Evades Jungle Traps"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Boosts Melee Damage",
        "rules": "When activated, this relic enhances your melee weapon attacks by +1d6 damage for 1 minute. The effect ends if you lose contact with the catalyst or if it is destroyed."
      },
      {
        "title": "Evades Jungle Traps",
        "rules": "For every jungle trap encounter, there is a 20% chance that you will evade its effects on your first turn of interaction. This evasive ability persists for 1 minute per level of the user or until the catalyst's effect ends."
      }
    ],
    "levelRequirementReason": "Requires proficiency with melee weapons and familiarity with jungle environments.",
    "vendorReason": "The Deep Isles scholars are renowned for their mastery of nature magic, making them the premier source for such relics.",
    "shippingDetail": "Ships via the Void Drifter Relay with expedited delivery within a week from the Deep Isles.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per level of user or until lost contact",
      "endsWhen": "Lost contact with the catalyst or destruction",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Balanced at this price to reflect its rare nature and utility in jungle combat scenarios.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:37:33.452998+00:00",
    "aiReviewedAt": "2026-07-22T01:37:33.452998+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_soul_core": {
    "id": "dk_isles_jungle_soul_core",
    "name": "Jungle Heart Core",
    "description": "The Jungle Heart Core is a pulsating core forged from the essence of ancient jungle flora. Its vibrant emerald hue and intricate carvings bear the visage of the jungle’s guardian spirits. When wielded, it grants allies temporary buffs and allows the user to disrupt an opponent's focus with a 'song' that silences them for moments. This core is said to have been found within the heartwood of a sacred tree, a relic passed down through generations of jungle shamans.",
    "price": 1000,
    "icon": "🎵",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% damage against jungle creatures",
      "Silence enemies for 2 seconds with a song"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Jungle Buff",
        "rules": "When activated as an action, this core grants allies within 30 feet a +15% bonus to damage against jungle creatures. The effect lasts until the end of your next turn."
      },
      {
        "title": "Silencing Song",
        "rules": "Activate as a bonus action to unleash a harmonic that silences all enemies within 10 feet for 2 seconds. Targets can make a Wisdom saving throw (DC 13) to resist this effect."
      }
    ],
    "levelRequirementReason": "The Jungle Heart Core is accessible early, allowing even the most novice adventurers to harness its power.",
    "vendorReason": "The vendor at the DK Isles has a deep connection with jungle lore and frequently unearths ancient artifacts like this one.",
    "shippingDetail": "Delivered swiftly by Lakitu drones, ensuring that the core arrives in pristine condition.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous for Jungle Buff; lasts until end of next turn. Song effect is instantaneous.",
      "endsWhen": "The effects expire as described above.",
      "charges": "Unlimited, recharged at dawn."
    },
    "priceReason": "The price reflects the core's rare material and the expertise required to harness its power without causing harm.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T01:37:56.480817+00:00",
    "aiReviewedAt": "2026-07-22T01:37:56.480817+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_soul_satchel": {
    "id": "dk_isles_jungle_soul_satchel",
    "name": "Jungle Soul Satchel",
    "description": "The Jungle Soul Satchel, a woven leather pouch studded with jungle flora and fauna, hums softly as it resonates with the spirits of the deep forest. When donned in dense foliage, it grants you perfect camouflage, making you nearly invisible to predators and other creatures. Its enchantment momentarily disarms nearby threats, allowing you precious seconds for escape or defense. This satchel is a vital asset for adventurers navigating the wilds of the jungle biome.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Camouflage in Dense Jungle",
      "Disarm Threats Temporarily"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Camouflage in Dense Jungle",
        "rules": "While wearing the Jungle Soul Satchel, you gain a +20% bonus to Dexterity (Stealth) checks within jungle biomes. This effect lasts for 1 minute and can be reactivated once per short or long rest."
      },
      {
        "title": "Disarm Threats Temporarily",
        "rules": "When worn, the satchel emits a low hum that momentarily disarms nearby creatures within 30 feet. Targets are incapacitated (as if stunned) for 1 round and cannot take any actions or reactions until the effect ends."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 5 due to its intricate enchantment and the power it draws from jungle spirits.",
    "vendorReason": "The vendors at DK Isles are well-known for their exotic and enchanted goods, and this satchel is no exception.",
    "shippingDetail": "Delivery by Shy Guy Smugglers may take up to a week depending on the region due to the delicate nature of the item's enchantments.",
    "usage": {
      "activation": "Activates as an action and can be reactivated once per short or long rest.",
      "duration": "1 minute, with a 1-minute recharge period after use",
      "endsWhen": "The effect ends when you stop wearing it or are incapacitated.",
      "charges": "Unlimited charges, but requires a short or long rest to recharge"
    },
    "priceReason": "The Jungle Soul Satchel is priced at 1000 XP due to its enchantment by jungle spirits and the unique benefits it provides.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:38:36.246509+00:00",
    "aiReviewedAt": "2026-07-22T01:38:36.246509+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_soul_shard": {
    "id": "dk_isles_jungle_soul_shard",
    "name": "Jungle Soul Shard",
    "description": "The Jungle Soul Shard is a pulsating fragment of ancient jungle magic, its emerald-green core glowing with primal energy. When wielded in combat, it emits a resonant hum that disrupts enemy morale and weakens their defenses. This shard amplifies the combat prowess of those who hold it, making even the most seasoned fighters feel invigorated by its power. The Shard’s magic is particularly potent against jungle creatures, enhancing critical hit chances when attacking them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Disruptive Hum",
      "Critical Boost"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Swiftwind Courier Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Disruptive Hum",
        "rules": "When activated as a bonus action, the Jungle Soul Shard emits a resonant hum that reduces enemy morale by 20% for 5 seconds. This effect has a range of 30 feet and does not target creatures immune to fear or similar effects. There is no save required, but if the Shard’s user is incapacitated, the effect ends immediately."
      },
      {
        "title": "Critical Boost",
        "rules": "The Shard grants +50% critical hit chance when attacking jungle enemies as long as it remains in hand. This effect is passive and does not require activation. If the Shard is dropped or destroyed, this bonus is lost until a new Shard is acquired."
      }
    ],
    "levelRequirementReason": "The Jungle Soul Shard’s magic requires a certain level of spiritual attunement to wield effectively.",
    "vendorReason": "As natives of the jungle, the DK Isles have intimate knowledge of the land's magical artifacts and often source unique relics like this Shard.",
    "shippingDetail": "The courier service ensures that the fragile Shard arrives safely in pristine condition within a week.",
    "usage": {
      "activation": "Bonus Action (to activate the Disruptive Hum effect)",
      "duration": "5 seconds (Disruptive Hum), passive while held (Critical Boost)",
      "endsWhen": "User is incapacitated or Shard is dropped, destroyed, or lost",
      "charges": "Unlimited"
    },
    "priceReason": "The Jungle Soul Shard combines potent abilities with a unique origin story and magical properties that justify its fair value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:22:23.803177+00:00",
    "aiReviewedAt": "2026-07-22T04:22:23.803177+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_spectral_satchel": {
    "id": "dk_isles_jungle_spectral_satchel",
    "name": "Jungle Spectral Satchel",
    "description": "The Jungle Spectral Satchel is a glowing, vine-entwined satchel that whispers secrets of the Feywild when touched. Crafted from enchanted jungle flora and shadow-woven materials, it grants temporary camouflage in darkened zones and unlocks hidden paths through the fey realms. Its whispers can guide you to forgotten trails and unseen entrances, but beware—each use has a slight chance of summoning a mischievous spirit that might lead you on an unintended journey.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporary Camouflage",
      "Unlock Hidden Paths"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Windweaver Couriers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporary Camouflage",
        "rules": "When activated as a bonus action, the satchel grants you and any willing creatures within 10 feet of you advantage on Dexterity (Stealth) checks for 1 minute. This effect ends if you or an ally moves more than 30 feet away from where you activated it."
      },
      {
        "title": "Unlock Hidden Paths",
        "rules": "Activate once per day as a reaction when entering the Feywild to reveal hidden paths and entrances that are invisible to all but those with a Nature proficiency. This effect lasts until the end of your next turn or if you leave the Feywild."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield, as it requires some knowledge of the Feywild and its hidden magic.",
    "vendorReason": "The denizens of the Dk Isles have long traded with fey creatures, making them adept at crafting such magical items.",
    "shippingDetail": "Ships via Windweaver Couriers for expedited delivery within a week from order confirmation.",
    "usage": {
      "activation": "Bonus action or reaction (as specified by effect)",
      "duration": "1 minute or until conditions end as described above",
      "endsWhen": "The duration ends when you move more than 30 feet away, leave the Feywild, or if used again.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP as it requires specific knowledge and is a rare item that enhances both stealth and exploration in the Feywild.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:38:28.673653+00:00",
    "aiReviewedAt": "2026-07-22T01:38:28.673653+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_spirit_bottle": {
    "id": "dk_isles_jungle_spirit_bottle",
    "name": "Jungle Spirit Bottle",
    "description": "The Jungle Spirit Bottle is a mystic vial, its glass etched with ancient jungle runes, containing the very essence of the forest’s guardian spirits. When consumed by a ranger or stealthy scout, it grants a surge of vitality and speed that mirrors the jungle's own resilience. For three minutes, your movements become as swift and silent as the wind through the trees; every step you take is bolstered by the ancient energy within, while your wounds mend at an accelerated rate, fortifying your resolve in the heart of the jungle.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% Movement Speed",
      "Regenerate 10% HP per 2 seconds"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Swift Steps",
        "rules": "Activates on consumption. Grants +30% to your movement speed for three minutes. This effect does not stack with other sources of increased speed and ends if you are incapacitated."
      },
      {
        "title": "Vital Regeneration",
        "rules": "Instantaneous activation upon consumption. You begin regenerating 10% of your maximum hit points every two seconds until the duration ends or you take damage. This effect has a limit of three uses per day and is not usable while incapacitated."
      }
    ],
    "levelRequirementReason": "The Jungle Spirit Bottle requires at least third-level proficiency to harness its effects fully, as it taps into the natural world's energies.",
    "vendorReason": "The mystical artifacts of the Dk Isles are known for their deep connection with nature, making them a perfect vendor for this item.",
    "shippingDetail": "Ships via the Rakasha Spirit Walk, ensuring the bottle arrives in pristine condition, free from the jungle's hazards.",
    "usage": {
      "activation": "Consumption",
      "duration": "3 minutes or until you take damage",
      "endsWhen": "Ends if you are incapacitated or take damage; three daily uses per character",
      "charges": "Unlimited, but limited to three daily uses"
    },
    "priceReason": "The price reflects the rare ingredients and mystical crafting required for such a powerful yet balanced item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:38:37.808809+00:00",
    "aiReviewedAt": "2026-07-22T01:38:37.808809+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_spirit_bow": {
    "id": "dk_isles_jungle_spirit_bow",
    "name": "Jungle Spirit Bow",
    "description": "The Jungle Spirit Bow is a bow forged from entwined jungle vines, its surface etched with the runes of ancient flora. It whispers the tales of lost jungles and sends forth arrows imbued with natural energy. When fired in the jungle, it releases bursts that pierce through enemy armor, leaving a trail of verdant disruption behind. Assassins who master this bow can blend seamlessly into their surroundings, making them nearly invisible to foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% critical chance",
      "Deals 5% extra damage to undead foes"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Natural Burst",
        "rules": "When the bow is fired in a jungle, it releases a burst of natural energy that deals an additional 1d6 points of piercing damage. This effect has a range of 30 feet and lasts until the end of your next turn."
      },
      {
        "title": "Silent Stealth",
        "rules": "While within a jungle terrain, you gain advantage on Dexterity (Stealth) checks and can move through difficult terrain without penalty for up to 1 hour per long rest. This effect ends when you leave the jungle or take damage."
      }
    ],
    "levelRequirementReason": "The Jungle Spirit Bow requires a minimum level of 5 due to its intricate craftsmanship and the arcane energy it channels.",
    "vendorReason": "The Dk Isles are renowned for their mastery in crafting weapons that draw power from nature, making the Jungle Spirit Bow an ideal product for them.",
    "shippingDetail": "Delivered via Lakitu drones, ensuring swift and safe transport through even the most treacherous jungles.",
    "usage": {
      "activation": "On a bonus action when fired in a jungle.",
      "duration": "Until the end of your next turn.",
      "endsWhen": "The effect ends if you leave the jungle or take damage.",
      "charges": "Unlimited, but requires concentration."
    },
    "priceReason": "The balanced XP price reflects the bow's unique properties and its limited availability in the wild jungle regions.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:38:45.288160+00:00",
    "aiReviewedAt": "2026-07-22T01:38:45.288160+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_spirit_cloak": {
    "id": "dk_isles_jungle_spirit_cloak",
    "name": "Jungle Spirit Cloak",
    "description": "The Jungle Spirit Cloak, woven from the whispering vines of the ancient jungle, shimmers with a faint green aura that seems to blend seamlessly into the dense foliage. Its fabric whispers in unison with the wind, making it nearly invisible to all who do not know where to look. The cloak grants its wearer an uncanny ability to trigger natural ambushes when enemies venture too close, and enhances nature-based spells by +30% damage, ensuring that every strike from the wild is deadly.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% evasion against ranged attacks",
      "Triggers jungle ambush with a 20% chance on enemy entry"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Evasion Boost",
        "rules": "The wearer gains +15% evasion against ranged attacks. This effect is passive and does not require any action to activate."
      },
      {
        "title": "Jungle Ambush Trigger",
        "rules": "When an enemy enters a 30-foot radius around the wearer, there is a 20% chance that a natural ambush occurs. The ambush deals 1d6 nature damage and forces the target to make a DC 15 Dexterity saving throw or be knocked prone."
      }
    ],
    "levelRequirementReason": "The cloak's complex weave requires a certain level of arcane knowledge and spellcasting skill to properly harness its natural magic.",
    "vendorReason": "The ancient artisans of the Dk Isles have long revered the spirits of nature, making them the perfect purveyors of such an enchanted garment.",
    "shippingDetail": "Ships via Pipe Express with expedited delivery ensuring your cloak arrives in pristine condition.",
    "usage": {
      "activation": "Passive and always active while worn.",
      "duration": "Instantaneous, lasting until the wearer removes or destroys it.",
      "endsWhen": "Exhausted when destroyed or removed by the wearer.",
      "charges": "Unlimited uses; no need for charges."
    },
    "priceReason": "The cloak's rarity and intricate construction justify its moderate price, offering significant utility without breaking the game balance.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T01:39:06.266603+00:00",
    "aiReviewedAt": "2026-07-22T01:39:06.266603+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_spirit_satchel": {
    "id": "dk_isles_jungle_spirit_satchel",
    "name": "Jungle Spirit Satchel",
    "description": "The Jungle Spirit Satchel is a woven, emerald-green bag imbued with the essence of the deep jungle. Crafted by the ancient spirits of the Dk Isles, it whispers tales of hidden paths and unseen movements. When worn in dense foliage, the satchel grants its bearer nearly silent steps and the ability to blend seamlessly into the verdant environment, evading detection by even the keenest eyes. Should an ambush be triggered nearby, the bag can amplify the sounds of the jungle, luring enemies deeper into the trap.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% chance to evade enemy detection in jungle terrain",
      "Trigger a +10% chance for a successful jungle ambush when near enemy units"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Swiftleaf Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealthy Camouflage",
        "rules": "When worn, the Jungle Spirit Satchel grants its owner advantage on Dexterity (Stealth) checks in dense jungle terrain. This effect lasts for up to 10 minutes and requires no action to activate."
      },
      {
        "title": "Ambush Amplification",
        "rules": "If an ambush is triggered within a 30-foot radius of the wearer, there is a +10% chance that the ambush will be successful. This effect lasts until the end of the encounter or until the wearer moves out of the jungle terrain."
      }
    ],
    "levelRequirementReason": "The Jungle Spirit Satchel is accessible to low-level adventurers who need a reliable edge in stealth and combat.",
    "vendorReason": "As the makers of this item, the inhabitants of Dk Isles are well-acquainted with its capabilities and value.",
    "shippingDetail": "Delivered within three days by Swiftleaf, ensuring the satchel arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect when worn; no activation required.",
      "duration": "10 minutes per long rest or until moved out of jungle terrain.",
      "endsWhen": "Ends upon moving out of dense jungle or at the end of an encounter.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Jungle Spirit Satchel provides significant tactical advantages, making it a valuable asset for any adventurer navigating the treacherous jungles of Dk Isles.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:39:09.052042+00:00",
    "aiReviewedAt": "2026-07-22T01:39:09.052042+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_spirit_shard": {
    "id": "dk_isles_jungle_spirit_shard",
    "name": "Jungle Spirit Shard",
    "description": "The Jungle Spirit Shard glows with a vibrant, emerald hue, its surface etched with intricate patterns of jungle flora and fauna. When wielded, this shard allows you to seamlessly merge into the dense foliage, becoming nearly invisible to both eyes and ears. The spirit within whispers secrets of the wild, enhancing your natural evasive prowess in these environments. Each use leaves a faint residue that fades after 30 seconds, ensuring stealth without leaving permanent traces.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+20% evasion while in dense jungle terrain",
      "15% chance to evade detection by fauna and flora"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Mimicry of Jungle Fauna",
        "rules": "Activate as a bonus action. Lasts for up to 30 seconds. Ends when the user leaves dense jungle terrain or takes damage."
      },
      {
        "title": "Reduced Detection Risk",
        "rules": "While active, there is a 15% chance that nearby fauna and flora do not detect your presence. This effect does not stack with other similar abilities."
      }
    ],
    "levelRequirementReason": "Requires basic knowledge of jungle environments to use effectively.",
    "vendorReason": "The denizens of the Jungle Isles are well-acquainted with the flora and fauna, making them the ideal purveyors of such an item.",
    "shippingDetail": "Ships via magical courier within a day, ensuring swift delivery to your doorstep.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 30 seconds",
      "endsWhen": "Leaving dense jungle terrain or taking damage",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price reflecting the rare, magical properties and limited availability of the Jungle Spirit Shard.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:39:13.562859+00:00",
    "aiReviewedAt": "2026-07-22T01:39:13.562859+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_spirit_talisman": {
    "id": "dk_isles_jungle_spirit_talisman",
    "name": "Jungle Spirit Talisman",
    "description": "The Jungle Spirit Talisman, a glowing talisman woven from ancient jungle vines and enchanted with root crystals, channels the untamed wilds of the dense canopy. When activated, it grants you temporary camouflage in jungle biomes for 30 seconds, allowing you to move unseen among the foliage. Additionally, it boosts your agility by +20% while navigating through jungle terrain, making your every step faster and more fluid. This enchanted talisman is a symbol of the jungle's power, granting its wearer unmatched grace in the wilds.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Camouflage",
      "Boosted Agility"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Camouflage",
        "rules": "Activates as a bonus action. Grants temporary camouflage for 30 seconds within jungle biomes, allowing you to move unseen among the foliage without being detected by creatures with passive perception of 15 or lower."
      },
      {
        "title": "Boosted Agility",
        "rules": "While moving through jungle terrain, provides a +20% bonus to your movement speed until exhaustion. This effect cannot be used more than once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least third level to effectively utilize the enhanced agility in jungle environments.",
    "vendorReason": "The DK Isles traders specialize in exotic and enchanted artifacts from their tropical surroundings, making this talisman a natural addition to their inventory.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its reliable but slightly slower service through interdimensional trade routes.",
    "usage": {
      "activation": "Bonus action to activate camouflage and can use agility boost while moving in jungle terrain.",
      "duration": "30 seconds or until exhaustion",
      "endsWhen": "Expires after duration ends or when you enter an area not considered part of a jungle biome.",
      "charges": "Unlimited, but cannot be used more than once per long rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect the item's rarity and enchantment level, ensuring it is valuable without being overpowered.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:39:18.864544+00:00",
    "aiReviewedAt": "2026-07-22T01:39:18.864544+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_spirit_torch": {
    "id": "dk_isles_jungle_spirit_torch",
    "name": "Jungle Spirit Torch",
    "description": "The Jungle Spirit Torch emits a flickering green glow that reveals hidden paths in the undergrowth, its light piercing through dense foliage as if part of the jungle itself. When lit, it briefly summons a spirit guide from the wilds to provide invaluable advice on navigating treacherous terrain, ensuring your path is safe and clear for moments at a time. This torch's flame dances with the wind, providing both illumination and a sense of ancient magic intertwined with nature.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Illuminate dark areas",
      "Summon spirit guide"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illuminate Dark Areas",
        "rules": "The Jungle Spirit Torch provides bright light in a 15-foot radius and dim light for an additional 30 feet. This effect lasts for 1 minute, but can be reactivated once the torch is extinguished."
      },
      {
        "title": "Summon Spirit Guide",
        "rules": "Once per use, when lit, the torch summons a spirit guide that provides guidance for up to 5 minutes. The spirit offers advice on navigating treacherous terrain and may grant temporary hit points equal to your level + Constitution modifier as long as you are within 30 feet of the torch."
      }
    ],
    "levelRequirementReason": "This item is suitable for adventurers just beginning their journey, providing essential guidance without overwhelming power.",
    "vendorReason": "The Dk Isles vendors are known for offering unique and useful items crafted from local materials, making the Jungle Spirit Torch a perfect addition to their inventory.",
    "shippingDetail": "Ships within 3 days via Pipe Express, delivered directly from the jungle's heart.",
    "usage": {
      "activation": "Action (Light it once per day)",
      "duration": "The illumination effect lasts for 1 minute. The spirit guide lasts up to 5 minutes as long as you are holding the torch.",
      "endsWhen": "Exhausted after use or extinguished",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects its rare craftsmanship and unique utility, providing both illumination and spirit guidance without overstepping balance.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:22:53.095419+00:00",
    "aiReviewedAt": "2026-07-22T04:22:53.095419+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_tide_bolt": {
    "id": "dk_isles_jungle_tide_bolt",
    "name": "Jungle Tide Bolt",
    "description": "The Jungle Tide Bolt is a gleaming obsidian spearhead embedded with venom from the jungle's most lethal flora. When swung, it releases a wave of mist that not only slows enemies by 30% for 3 seconds but also reveals hidden paths and ambush points within 10 meters, illuminating the verdant underbrush. This weapon is perfect for those who prefer stealth and surprise in Verdant Wastes, where visibility can mean the difference between triumph and disaster.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Slows",
      "Reveals"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Slowed Movement",
        "rules": "Enemies within a 10-foot radius are slowed by 30% for 3 seconds. This effect can be resisted with a DC 15 Constitution saving throw."
      },
      {
        "title": "Path Reveal",
        "rules": "For 5 seconds, hidden paths and ambush points within a 20-foot radius are revealed. This effect has no save or action requirement."
      }
    ],
    "levelRequirementReason": "This weapon requires the user to have a certain level of experience in jungle combat.",
    "vendorReason": "The islanders are well-versed in the flora and fauna of Verdant Wastes, making them adept at crafting such weapons.",
    "shippingDetail": "Standard delivery takes two weeks. Expedited shipping available for an additional cost.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (effect lasts until the start of your next turn)",
      "endsWhen": "The effect ends when you take a short or long rest, or if the spear is broken in combat.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare jungle obsidian and infused with potent venom, this weapon commands a premium price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:39:36.980995+00:00",
    "aiReviewedAt": "2026-07-22T01:39:36.980995+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_tincture": {
    "id": "dk_isles_jungle_tincture",
    "name": "Jungle Tincture of the Whispering Roots",
    "description": "A dark amber tincture, this Jungle Tincture of the Whispering Roots is said to have been distilled from the sap of ancient jungle trees by the enigmatic inhabitants of Dk Isles. Sipping it in the shadows of the jungle canopy grants you a fleeting connection with nature’s heartbeat, allowing for rapid regeneration and enhanced stealth. While under its influence, your HP regenerates at 10% per second for up to ten seconds, and your movement becomes so subtle that you are twice as likely to ambush foes who enter your range.",
    "price": 1000,
    "icon": "🍸",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Regen & Stealth",
      "Ambush Chance"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Regeneration and Stealth",
        "rules": "When consumed, this tincture grants the drinker temporary regeneration of 10% HP per second for a duration of ten seconds. Additionally, while moving within this time frame, the drinker gains a +20% bonus to their Stealth checks."
      },
      {
        "title": "Enhanced Ambush",
        "rules": "For every five seconds you remain active under the effect of this tincture, your chance to trigger an ambush on any enemy who enters your range increases by 5%, capping at +20%."
      }
    ],
    "levelRequirementReason": "The Jungle Tincture requires no specific level as it is accessible to all adventurers for its immediate utility in stealth and combat.",
    "vendorReason": "Dk Isles is known for its mysterious herbalists who trade exotic remedies, including this potent jungle tincture.",
    "shippingDetail": "The Boo Spectral Mail ensures the secrecy of your purchase by cloaking the package in a spectral mist that only you can see through.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "10 seconds with one use per long rest",
      "endsWhen": "Upon expiration or if consumed again before the duration ends",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rare ingredients and potent effects, making it a valuable item for adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:39:54.904740+00:00",
    "aiReviewedAt": "2026-07-22T01:39:54.904740+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_tongue": {
    "id": "dk_isles_jungle_tongue",
    "name": "Kremling Tongue of the Forgotten",
    "description": "The Kremling Tongue of the Forgotten, a twisted relic from an ancient jungle lab, grants its bearer the unique ability to speak with and command jungle fauna. Its worn leather casing harbors the essence of forgotten spells, allowing you to mimic the haunting calls of beasts and even confuse foes into misinterpreting your intentions. With this tongue, you can navigate treacherous jungles undetected or distract enemies from your true movements.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐉",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Tongue of Command",
      "Beast Mimicry"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Tongue of Command",
        "rules": "As an action, you can command nearby jungle fauna within 30 feet to perform a simple task for up to 1 minute. The creatures must be willing and capable of performing the task. This effect is expended after use."
      },
      {
        "title": "Beast Mimicry",
        "rules": "Once per short rest, you can mimic the call of any jungle beast within your line of sight. For 10 minutes, you gain a +5 bonus to Deception checks when attempting to deceive creatures with similar calls."
      }
    ],
    "levelRequirementReason": "Requires some knowledge of animal behavior and command to effectively use the tongue.",
    "vendorReason": "The DK Isles are known for their extensive trade in ancient artifacts and relics, including those from lost Kremling civilizations.",
    "shippingDetail": "Ships via air balloon, ensuring quick delivery to even the most remote jungles.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Tongue of Command: Up to 1 minute; Beast Mimicry: 10 minutes per short rest",
      "endsWhen": "After use or when the duration expires, respectively",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflecting its rarity and unique abilities, suitable for a rare item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:39:45.311855+00:00",
    "aiReviewedAt": "2026-07-22T01:39:45.311855+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_torch_of_the_fallen_treant": {
    "id": "dk_isles_jungle_torch_of_the_fallen_treant",
    "name": "Torch of the Fallen Treant",
    "description": "The Torch of the Fallen Treant, forged from the last breath of a treant fallen in battle, glows with an eerie emerald light that dances through the dense jungle foliage. Its flame burns brighter in the shadows, casting no reflection and granting temporary camouflage when used within thick undergrowth. The torch’s glow is said to disturb the balance of nature, making enemies more prone to ambush as they mistake it for a natural phenomenon.",
    "price": 1000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+20% evasion in jungle terrain",
      "Enemies have a +15% chance to trigger an ambush"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Evasion Boost",
        "rules": "When used within dense jungle foliage, the Torch of the Fallen Treant grants its wielder a +20 bonus to Dexterity (Stealth) checks. This effect lasts for 1 minute and can be reactivated once per short or long rest."
      },
      {
        "title": "Ambush Trigger",
        "rules": "Within dense jungle terrain, any creature that attacks the user while they are within 30 feet of them has a +15 bonus to their initiative roll. This effect lasts for 1 minute and can be reactivated once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires level 2 to wield effectively, as it demands a basic understanding of stealth and jungle navigation.",
    "vendorReason": "The torch is crafted by the same artisans who supply the DK Isles with their most prized weapons and tools, ensuring its quality.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for its reliable but slow service through the dense jungle.",
    "usage": {
      "activation": "Use as a bonus action within dense jungle terrain to activate and utilize its effects.",
      "duration": "1 minute per activation, recharges after a short or long rest.",
      "endsWhen": "The effect ends when the user moves outside of dense jungle terrain or if the torch is extinguished.",
      "charges": "Unlimited uses between rests"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare crafting materials and unique properties.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:40:21.429979+00:00",
    "aiReviewedAt": "2026-07-22T01:40:21.429979+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_torch_of_the_forgotten": {
    "id": "dk_isles_jungle_torch_of_the_forgotten",
    "name": "Torch of the Forgotten",
    "description": "The Torch of the Forgotten glows with an ancient, primal energy that illuminates darkened jungle paths, revealing hidden traps and forgotten secrets buried beneath the canopy's dense foliage. This relic is said to have been crafted by long-lost Kremling alchemists, whose magic still resonates within its core. Wielded in the right hands, it can uncover ancient runes and reveal enemy spawn points that lie hidden from the naked eye.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Secrets",
      "Unlocks Ancient Runes"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reveals Hidden Secrets",
        "rules": "When activated, this torch illuminates an area for 1 minute, revealing hidden traps and ancient runes. The effect is centered on the wielder and has a radius of 30 feet. There is no save DC required to resist its effects."
      },
      {
        "title": "Unlocks Ancient Runes",
        "rules": "Upon activation, this torch can be used to read or interpret ancient runes within a 15-foot radius for up to 1 minute. This effect allows the wielder to understand and decode the meaning of these runes without any saving throw."
      }
    ],
    "levelRequirementReason": "The arcane magic in the torch requires a minimum spellcasting ability.",
    "vendorReason": "The Torch is a well-known relic among Kremling scholars and adventurers, and it is sold by DK Isles to provide access to ancient knowledge.",
    "shippingDetail": "Ships within one week via standard courier service.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "1 minute per activation",
      "endsWhen": "The torch is extinguished or the user moves more than 30 feet away from its center point.",
      "charges": "Unlimited, but recharges after a short rest"
    },
    "priceReason": "The craftsmanship and arcane knowledge required to create this torch are highly valued in the market.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:40:56.361397+00:00",
    "aiReviewedAt": "2026-07-22T01:40:56.361397+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_torchlight": {
    "id": "dk_isles_jungle_torchlight",
    "name": "Jungle Torchlight",
    "description": "The Jungle Torchlight crackles with emerald flames that cast a warm, bioluminescent glow, illuminating the dense undergrowth and revealing hidden paths and traps in the jungle's shadowy depths. Crafted from enchanted bamboo and powered by glowing moss, it is both a beacon of safety and a navigator through the treacherous night. Its flickering light not only dispels the darkness but also enhances stealth, making you nearly invisible to the jungle's nocturnal creatures.",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Reveals hidden paths and traps",
      "Enhances stealth"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths and Traps",
        "rules": "When activated, the Jungle Torchlight illuminates a 15-foot radius around you for 1 minute. It also reveals all hidden paths and traps within this area as if you had used an action to do so. This effect requires no attack roll or saving throw."
      },
      {
        "title": "Enhance Stealth",
        "rules": "For the duration of 5 minutes after using the Torchlight, your stealth checks are advantage on rolls made in dim light within a 30-foot radius. This benefit does not stack with other sources of advantage for stealth."
      }
    ],
    "levelRequirementReason": "This simple yet effective tool is accessible to low-level adventurers who need reliable illumination and pathfinding assistance.",
    "vendorReason": "As a local vendor in the heart of the jungle, DK Isles is well-acquainted with the needs of travelers venturing into the dense undergrowth.",
    "shippingDetail": "Ships via enchanted spectral mail, ensuring swift delivery to even the most remote corners of the jungle.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute and 5 minutes after use",
      "endsWhen": "The effect ends when the duration expires or you are no longer in dim light within a 30-foot radius for stealth enhancement.",
      "charges": "Unlimited, recharges on long rest"
    },
    "priceReason": "Crafted with enchanted bamboo and glowing moss, this item's price reflects the rarity of its components and the utility it provides to adventurers.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-22T01:40:53.604820+00:00",
    "aiReviewedAt": "2026-07-22T01:40:53.604820+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_treasure": {
    "id": "dk_isles_jungle_treasure",
    "name": "Cold War Canteen",
    "description": "The Cold War Canteen is a rusted, leather-bound thermos from Kremling cold war expeditions. Its metal surface bears the frostbitten scars of countless battles, and its contents are said to be a legendary morale booster. Sipping from it grants warmth and clarity—20 hit points restored with each drink, and you gain +15% defense for 1 minute while savoring its contents. Cold damage resistance is also bolstered by +10%, protecting you against the harsh winter conditions of the frozen lands.",
    "price": 1000,
    "icon": "📦",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Warmth and Clarity",
      "Cold Damage Resistance"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Warmth and Clarity",
        "rules": "When a character drinks from the canteen, they regain 20 hit points. Additionally, for 1 minute after drinking, their defense increases by +15%. This effect ends if the drinker takes damage or if the duration expires."
      },
      {
        "title": "Cold Damage Resistance",
        "rules": "While holding and sipping from the canteen, a character gains resistance to cold damage. This benefit persists for 1 minute after drinking but is lost if they take any damage."
      }
    ],
    "levelRequirementReason": "This canteen provides basic yet crucial support suitable for adventurers of all levels.",
    "vendorReason": "The canteen's origins and lore make it a fitting item to be sold by the DK Isles, known for their extensive trade routes with Kremling territories.",
    "shippingDetail": "Delivered swiftly through the Rakasha’s ethereal planes; arrives in one day regardless of distance.",
    "usage": {
      "activation": "Standard action to drink from it",
      "duration": "1 minute per use",
      "endsWhen": "Duration ends if you take damage or after 1 minute, whichever comes first",
      "charges": "Unlimited uses"
    },
    "priceReason": "The canteen's rarity and the unique benefits it provides make it a valuable item at this price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:40:32.616723+00:00",
    "aiReviewedAt": "2026-07-22T01:40:32.616723+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_treasure_pearl": {
    "id": "dk_isles_jungle_treasure_pearl",
    "name": "Jungle Treasure Pearl",
    "description": "The Jungle Treasure Pearl glows with a vibrant emerald light, its surface etched with ancient symbols that whisper of lost jungle deities. When activated, it grants you temporary resistance to fire and water elemental damage for the duration of the encounter, while also restoring your hit points equal to half of your maximum HP. This magical gem is said to have been crafted by an ancient civilization in tribute to a forgotten god of the wilds.",
    "price": 1000,
    "icon": "💎",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Elemental Resistance (Fire & Water)",
      "Healing"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Resistance",
        "rules": "When activated, this pearl grants you resistance to fire and water elemental damage for the duration of one encounter. This effect can be used once per day."
      },
      {
        "title": "Healing",
        "rules": "Activating the pearl also restores your hit points equal to half of your maximum HP. This healing is instantaneous and cannot exceed 50% of your total hit point maximum."
      }
    ],
    "levelRequirementReason": "This item requires no level, as its effects are balanced for early encounters.",
    "vendorReason": "The merchants of the DK Isles have a reputation for trading rare and magical artifacts, including this gem which they claim was recovered from an ancient temple deep in the jungle.",
    "shippingDetail": "Delivered swiftly by Pipe Express, ensuring adventurers can access its powers without delay.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "One encounter",
      "endsWhen": "The effects end when the encounter ends or if you use your action for another effect",
      "charges": "Once per day"
    },
    "priceReason": "This price reflects the rare and powerful nature of the pearl, balancing its effects with other daily-use items.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T04:23:04.435760+00:00",
    "aiReviewedAt": "2026-07-22T04:23:04.435760+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_troop_torch": {
    "id": "dk_isles_jungle_troop_torch",
    "name": "Jungle Troop Torch",
    "description": "The Jungle Troop Torch is a blazing torch that glows with eerie green flames, illuminating dark paths for up to 30 feet around. Its flickering light enhances stealth, granting you a +25% chance to succeed on Stealth checks within its radius. When enemies approach too closely, it summons a fleeting spirit ally that grants temporary hit points equal to your Constitution modifier (max 10) until the start of your next turn.",
    "price": 1000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Illuminates area",
      "Enhances stealth"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Luminous Illumination",
        "rules": "The torch illuminates a 30-foot radius for 1 minute. This effect can be activated as a bonus action, with no additional effects during the duration."
      },
      {
        "title": "Stealth Enhancement",
        "rules": "While within the area of effect, you gain a +25% chance to succeed on Stealth checks. This benefit lasts for 30 seconds per use and can be activated as a bonus action. There is no limit to the number of uses."
      }
    ],
    "levelRequirementReason": "This torch's effects are designed to assist players early in their journey, providing useful stealth and illumination without being overpowered.",
    "vendorReason": "The Dk Isles traders specialize in items that aid adventurers exploring the dense jungles of their domain.",
    "shippingDetail": "Delivered by the Void Drifter Relay, known for its reliable and swift service through treacherous jungle terrain.",
    "usage": {
      "activation": "Bonus action to activate each effect.",
      "duration": "Luminous Illumination lasts 1 minute. Stealth Enhancement lasts 30 seconds per use.",
      "endsWhen": "The duration ends when the torch is extinguished or the user moves out of the area of effect.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects its rarity and utility, balancing its power level with a fair value for players.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T01:40:46.096572+00:00",
    "aiReviewedAt": "2026-07-22T01:40:46.096572+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_trooper_gear": {
    "id": "dk_isles_jungle_trooper_gear",
    "name": "Jungle Trooper Gear",
    "description": "Jungle Trooper Gear is a combat harness woven from the resilient vines of the jungle and laced with ancient Kremling technology. Its flexible design allows swift movement through dense foliage, making it ideal for stealthy patrols and ambushes in the wild. When activated, it grants the wearer +15% increased movement speed within jungle biomes and +10% evasion against ranged attacks. The harness also subtly alters one's gait to appear less conspicuous to predators or enemies.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% movement speed in jungle biomes",
      "+10% evasion chance against ranged attacks"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Stealth Gait",
        "rules": "While wearing Jungle Trooper Gear, the user can move silently and blend with their surroundings, reducing their movement speed by 5 feet but granting a +10 bonus to Dexterity (Stealth) checks. This effect lasts until the end of your next turn."
      },
      {
        "title": "Jungle Agility",
        "rules": "The gear provides a +15% increase to movement speed within jungle biomes, which can be used as a bonus action once per short rest. It does not stack with other movement speed increases."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency in stealth and survival to effectively utilize the gear's stealth capabilities.",
    "vendorReason": "The DK Isles have extensive trade networks that include jungle regions, making them a reliable source for this specialized equipment.",
    "shippingDetail": "Due to the fragile nature of the gear, it is shipped in specially reinforced crates with additional padding. Transit times may increase by one day due to extra handling.",
    "usage": {
      "activation": "Bonus action or reaction (for Stealth bonus)",
      "duration": "Instantaneous; lasts until end of next turn for stealth gait, once per short rest for increased movement speed",
      "endsWhen": "Effect expires at the end of your next turn or when the gear is removed",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the rare materials and advanced technology required to craft this jungle-specific combat gear.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:22:41.556641+00:00",
    "aiReviewedAt": "2026-07-22T04:22:41.556641+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_trooper_mask": {
    "id": "dk_isles_jungle_trooper_mask",
    "name": "Jungle Trooper Mask",
    "description": "The Jungle Trooper Mask is a tribal visage crafted from the gnarled wood of ancient jungle trees, imbued with the whispers and secrets of countless past skirmishes. This mask grants you stealth camouflage that blends seamlessly into the dense foliage, allowing you to move undetected through the underbrush. Upon first contact with an enemy, its chilling whisper can disorient them for a fleeting moment, giving you the edge in close combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "👁",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Stealth Camouflage",
      "Chilling Whispers"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Stealth Camouflage",
        "rules": "While wearing this mask, your Stealth checks are at advantage. Additionally, while within jungle terrain, you gain a +10 bonus to AC."
      },
      {
        "title": "Chilling Whispers",
        "rules": "When the wearer makes an attack against an enemy and hits, that enemy is disoriented for 2 rounds on their next turn. The save DC for this effect is 13."
      }
    ],
    "levelRequirementReason": "The mask's intricate carvings and magical properties require a certain level of proficiency with stealth to fully utilize.",
    "vendorReason": "The mask is a local artisanal product, revered by the tribes who inhabit the surrounding jungles.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring swift delivery through the interdimensional pathways of the Darks Isles.",
    "usage": {
      "activation": "Instantaneous activation upon donning the mask; lasts until removed or until the wearer is no longer in jungle terrain.",
      "duration": "Until removed from your head or you leave jungle terrain",
      "endsWhen": "The wearer removes the mask or exits jungle terrain",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to provide a significant tactical advantage without overpowered effects, this mask is priced at 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:41:58.169382+00:00",
    "aiReviewedAt": "2026-07-22T01:41:58.169382+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_trophy": {
    "id": "dk_isles_jungle_trophy",
    "name": "Toad Lee’s Legacle",
    "description": "Toad Lee’s Legacle is a rugged, hand-forged bracelet made from Toad Lee's own bones and jungle vines, imbued with his unyielding spirit. This relic glows faintly in combat, offering a soothing presence to allies and an eerie green hue that can be seen even in the deepest shadows. It grants +2 to morale rolls during battles and bestows +1 to all rolls involving rescue or survival. Wielders of this legacle feel Toad's resilience, drawing strength from his legendary spirit.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧬",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Morale Boost",
      "Survival Aid"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Morale Boost",
        "rules": "Activate as a bonus action to grant +2 to morale checks for the duration of one short rest. Ends when resting ends or if the wearer drops to 0 hit points."
      },
      {
        "title": "Survival Aid",
        "rules": "Grants +1 to all rolls involving rescue or survival once per long rest, with a save DC of 15 against disadvantage. The effect is lost if used more than twice in a week."
      }
    ],
    "levelRequirementReason": "Toad Lee’s Legacle requires a minimum level to channel his spirit effectively.",
    "vendorReason": "The denizens of the DK Isles have kept Toad Lee's memory alive, and this relic is one way they honor his legacy.",
    "shippingDetail": "This shipment requires a special delivery by Boo Spectral Mail to ensure the legacle arrives intact.",
    "usage": {
      "activation": "Bonus action for Morale Boost; once per long rest for Survival Aid",
      "duration": "Until end of short rest for Morale Boost; until used or lost in combat for Survival Aid",
      "endsWhen": "Rest ends, wearer drops to 0 HP, or effect is exhausted",
      "charges": "Unlimited, recharged with a short rest"
    },
    "priceReason": "The price reflects the item's rarity and its connection to Toad Lee’s heroic legacy.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T01:41:23.913003+00:00",
    "aiReviewedAt": "2026-07-22T01:41:23.913003+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_venom_satchel": {
    "id": "dk_isles_jungle_venom_satchel",
    "name": "Jungle Venom Satchel",
    "description": "The Jungle Venom Satchel is a compact, leather-bound pouch that exudes an otherworldly glow when exposed to sunlight. Crafted from the hides of ancient jungle creatures and infused with potent spores harvested from the heart of the forest, this satchel can be thrown like a dart or used as a club. Upon impact, it bursts open to release a cloud of lethally toxic spores that infect any living target within 10 feet, causing them to stagger in pain.",
    "price": 1000,
    "icon": "🔮",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Poisonous Burst",
      "Staggering Spore Cloud"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Poisonous Burst",
        "rules": "When thrown or used as a melee weapon, the Jungle Venom Satchel releases a burst of spores that deals 1d6 poison damage to all creatures within 5 feet. This effect has a save DC of 13 against Poison. On a failed save, the target is also poisoned for 1 minute."
      },
      {
        "title": "Staggering Spore Cloud",
        "rules": "If used in melee combat or thrown with advantage, the satchel unleashes a cloud of spores that imposes the Stunned condition on all creatures within 10 feet. This effect lasts for 1 minute and has no save DC."
      }
    ],
    "levelRequirementReason": "Requires at least second-level proficiency to handle the toxic nature of the satchel safely.",
    "vendorReason": "The DK Isles have a long-standing connection with jungle tribes, who trade exotic goods like this satchel.",
    "shippingDetail": "Ships via enchanted courier that ensures safe delivery, even through the most treacherous jungles.",
    "usage": {
      "activation": "Throw as a weapon or use in melee combat (melee weapon attack)",
      "duration": "Instantaneous burst and cloud duration; ends when the effect is used up",
      "endsWhen": "The poison effect ends after 1 minute, while the Staggering Spore Cloud lasts for 1 minute.",
      "charges": "Recharges on a long rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its potent poison and cloud effects.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T01:41:49.987511+00:00",
    "aiReviewedAt": "2026-07-22T01:41:49.987511+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_vibes_essence": {
    "id": "dk_isles_jungle_vibes_essence",
    "name": "Jungle Vibes Essence",
    "description": "The Jungle Vibes Essence sips of magic from the heart of the deep jungle, infusing you with a primal connection to its shadows and foliage. Its faint scent of rotting fruit and rain is more than just an aroma—it's a whisper of ancient secrets. This essence amplifies your stealth in jungle biomes by 20%, making even the most cunning Kremling patrols unaware of your presence, and it grants you a +15% chance to evade enemy detection, ensuring that you can blend into the ferns seamlessly.",
    "price": 1000,
    "icon": "🍈",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Stealth Amplification",
      "Evasion Boost"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Amplification",
        "rules": "This essence enhances your stealth by +20% in jungle biomes. It grants a +15% chance to evade enemy detection, making you nearly invisible to patrols and other foes."
      },
      {
        "title": "Evasion Boost",
        "rules": "For the duration of 1 hour after activation, you gain advantage on Dexterity (Stealth) checks in jungle biomes. If an enemy attempts to detect your position within this time, they must make a Wisdom saving throw with a DC of 13."
      }
    ],
    "levelRequirementReason": "This essence is suitable for adventurers at level 1 who are just starting their journey in the jungle.",
    "vendorReason": "The DK Isles vendors specialize in unique items that enhance one's survival skills, and Jungle Vibes Essence fits perfectly within this theme.",
    "shippingDetail": "Ships via Koopa Postal with a two-day delivery. Ensure to check the jungle for any unexpected deliveries from the Postman Kremling.",
    "usage": {
      "activation": "Activate as a bonus action by drinking the essence.",
      "duration": "1 hour per use",
      "endsWhen": "The effects expire after 1 hour or upon taking damage, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The essence is priced at 1000 XP to reflect its potent blend of magic and the jungle's secrets.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:41:49.861082+00:00",
    "aiReviewedAt": "2026-07-22T01:41:49.861082+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_vibra_core": {
    "id": "dk_isles_jungle_vibra_core",
    "name": "Jungle Vibra Core",
    "description": "The Jungle Vibra Core is a pulsating crystal core embedded with the essence of ancient jungle spirits, capable of enhancing speed and disrupting enemy targeting systems in dense jungle terrains. This core grants the wearer a +20% temporary speed boost for 10 seconds, allowing them to weave through combat with unmatched agility, and it also emits a destabilizing signal that disrupts enemy tracking systems for 5 seconds, giving you an unexpected edge in the thick foliage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Speed Boost",
      "Disrupt Targeting"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "Activates as a bonus action. The wearer gains a +20% speed boost for 10 seconds, allowing them to move faster in jungle environments. This effect ends if the wearer exits the jungle or is hit by an attack."
      },
      {
        "title": "Disrupt Targeting",
        "rules": "Activates as a reaction when you are targeted by an enemy's ranged weapon attack or spell. The attacker must make a DC 15 Dexterity saving throw, on a failed save, the attack misses. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The Jungle Vibra Core's connection to jungle spirits requires a certain level of spiritual attunement.",
    "vendorReason": "DK Isles is known for its trade in rare artifacts and magical components, including the Jungle Vibra Core.",
    "shippingDetail": "The core arrives encased in a specially designed protective shell to ensure it reaches you in perfect condition.",
    "usage": {
      "activation": "Bonus action for Speed Boost; Reaction for Disrupt Targeting",
      "duration": "10 seconds for Speed Boost, instantaneous for Disrupt Targeting",
      "endsWhen": "Exits jungle or hit by an attack for Speed Boost; on a failed save for Disrupt Targeting",
      "charges": "Once per short rest"
    },
    "priceReason": "The Jungle Vibra Core is priced at 1000 XP as its unique magical properties and limited availability justify this value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:42:22.645119+00:00",
    "aiReviewedAt": "2026-07-22T01:42:22.645119+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_vigilance_amulet": {
    "id": "dk_isles_jungle_vigilance_amulet",
    "name": "Jungle Vigilance Amulet",
    "description": "The Jungle Vigilance Amulet is forged from the essence of a captured courier who once served the Purple Legion. It glows faintly in the jungle, signaling its wearer's proximity to the enemy territory and amplifying their stealth. While within this perilous biome, you can evade detection more effectively, though your own accuracy suffers slightly when under fire. This amulet whispers the secrets of the jungle, enhancing your ability to strike unseen.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% evasion against detection in jungle biomes",
      "10% penalty on accuracy for yourself while enemies are firing at you"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth Amplification",
        "rules": "While within a jungle biome, the wearer has advantage on Dexterity (Stealth) checks and can use an action to attempt to hide. This effect lasts for 1 hour or until the wearer leaves the jungle."
      },
      {
        "title": "Accuracy Penalty",
        "rules": "When enemies are firing at you within a jungle biome, you take a -10 penalty to your Dexterity (Stealth) checks and ability checks related to evading attacks. This effect lasts for 1 round or until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Requires at least level 3 to maintain concentration on such stealthy magic.",
    "vendorReason": "The Dk Isles vendors have extensive trade with the Purple Legion territories and thus can offer this item.",
    "shippingDetail": "Ships directly from the jungle, ensuring swift delivery.",
    "usage": {
      "activation": "Passive effect activated upon entering a jungle biome.",
      "duration": "1 hour or until leaving the jungle.",
      "endsWhen": "Leaving the jungle or at the end of your next turn if under fire.",
      "charges": "Unlimited, recharged when outside the jungle."
    },
    "priceReason": "Balanced price for a rare item that offers both evasion and stealth benefits within its specified environment.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:22:55.356964+00:00",
    "aiReviewedAt": "2026-07-22T04:22:55.356964+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_vines_knife": {
    "id": "dk_isles_jungle_vines_knife",
    "name": "Jungle Vines Knife",
    "description": "The Jungle Vines Knife is a blade that seems to have grown from the very vines of the Dk Isles' jungles, forged by ancient forest spirits and warriors. Its living edge cuts through even the thickest undergrowth with ease, but a more insidious power lies in its roots: upon striking an enemy, there's a chance for them to be entangled by the knife’s own vines, immobilizing them for moments that feel like eternity within the jungle's embrace.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% damage against jungle enemies",
      "10% movement speed increase when in jungle terrain"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Rooting Strike",
        "rules": "When you strike an enemy with this knife, there is a +5% chance that the target is rooted for 2 seconds. This effect can occur once per short or long rest."
      },
      {
        "title": "Jungle Edge",
        "rules": "While in jungle terrain, you have advantage on Dexterity (Stealth) checks and gain a +10% bonus to your movement speed."
      }
    ],
    "levelRequirementReason": "The knife's intricate enchantment requires a warrior with experience navigating the harsh jungles.",
    "vendorReason": "The knife is crafted by the same artisans who call Dk Isles home, ensuring its authenticity and power.",
    "shippingDetail": "Special delivery through a Rakasha guide to ensure safe arrival in the heart of the jungle's most dangerous areas.",
    "usage": {
      "activation": "Instantaneous on strike",
      "duration": "Until end of turn for each rooted target, or until the root effect is dispelled",
      "endsWhen": "The target moves or is otherwise freed from the entangling vines",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with ancient jungle magic and rare materials, it's a well-balanced investment for any seasoned explorer.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T01:42:24.060915+00:00",
    "aiReviewedAt": "2026-07-22T01:42:24.060915+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_vision_goggles": {
    "id": "dk_isles_jungle_vision_goggles",
    "name": "Jungle Vision Goggles",
    "description": "Jungle Vision Goggles are forged from ancient jungle flora and encrusted with rare minerals, granting unparalleled clarity in dense undergrowth. These goggles not only enhance your movement speed by +20% within jungle biomes but also allow you to detect hidden paths and traps, ensuring safe passage through the thickest foliage. The eerie whispers of shadow-dwellers are muffled as if they were mere echoes, allowing for a more serene exploration of the jungle's secrets.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhanced Jungle Navigation",
      "Silence Shadow Whispers"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Jungle Navigation",
        "rules": "When worn in jungle biomes, these goggles grant a +20% bonus to movement speed. Additionally, you can use an action to detect hidden paths and traps within a 30-foot radius, revealing them for 1 minute. This effect ends when you remove the goggles or if you enter any environment other than a jungle biome."
      },
      {
        "title": "Silence Shadow Whispers",
        "rules": "The goggles suppress ambient shadow noise, reducing the DC of saving throws against being charmed by shadow-dwellers by 5. This benefit lasts for as long as you wear them and is negated if you leave a jungle biome or are exposed to bright light."
      }
    ],
    "levelRequirementReason": "These goggles provide essential navigation tools that are useful even at the earliest levels, enhancing exploration in dense jungles.",
    "vendorReason": "The Dk Isles have extensive trade routes through various jungle regions and thus stock items like these, which are crucial for both local adventurers and visitors.",
    "shippingDetail": "Ships via Koopa Postal's express service. Delivery time is reduced by one day due to the fragile nature of the goggles and their importance in jungle navigation.",
    "usage": {
      "activation": "Instantaneous, passive effect with action required for specific detection use.",
      "duration": "1 minute or until removed from a jungle biome or exposed to bright light.",
      "endsWhen": "Removed from a jungle biome or exposed to bright light.",
      "charges": "Unlimited"
    },
    "priceReason": "The goggles' unique combination of utility and rarity justify this price, providing essential survival benefits in one versatile item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:42:59.620841+00:00",
    "aiReviewedAt": "2026-07-22T01:42:59.620841+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_wardrobe": {
    "id": "dk_isles_jungle_wardrobe",
    "name": "Jungle Wardrobe of the Whispering Canopy",
    "description": "The Jungle Wardrobe of the Whispering Canopy is crafted from ancient vine tendrils and enchanted with the spirits of the Kremling forest guardians. Wearing it allows you to blend seamlessly into dense foliage, becoming nearly invisible to the naked eye while also amplifying your natural healing from flora. Its vines regenerate 20% of your hit points per minute as long as you remain in motion through the jungle's embrace.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth in Dense Foliage",
      "Enhanced Natural Healing"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth in Dense Foliage",
        "rules": "While wearing this wardrobe, you gain a +30 bonus to Dexterity (Stealth) checks. This effect lasts for the duration of your time spent moving through dense jungle foliage or similar terrain."
      },
      {
        "title": "Enhanced Natural Healing",
        "rules": "For every minute you are in motion and surrounded by flora, you regenerate 20 hit points. This effect is instantaneous upon entering a suitable environment and lasts until you leave it."
      }
    ],
    "levelRequirementReason": "This wardrobe provides crucial stealth and survival benefits to lower-level adventurers who need to infiltrate or survive in dense jungle environments.",
    "vendorReason": "The DK Isles are known for their deep connections with the local flora, making them the perfect purveyors of such enchanted garments.",
    "shippingDetail": "Due to its delicate nature and magical properties, this wardrobe must be shipped by Boo Spectral Mail within a specially reinforced crate to maintain its enchantments.",
    "usage": {
      "activation": "Passive while moving through dense jungle foliage or similar terrain.",
      "duration": "Until you leave the dense jungle foliage or similar terrain.",
      "endsWhen": "Leaving the dense jungle foliage or similar terrain.",
      "charges": "Unlimited"
    },
    "priceReason": "This wardrobe is a rare find, combining both stealth and healing benefits at an affordable price for adventurers who regularly face such challenges.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:42:37.508224+00:00",
    "aiReviewedAt": "2026-07-22T01:42:37.508224+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_whisper_pearl": {
    "id": "dk_isles_jungle_whisper_pearl",
    "name": "Jungle Whisper Pearl",
    "description": "The Jungle Whisper Pearl, a luminescent gem embedded with the essence of the ancient rainforest, hums a soothing melody that calms nearby allies and drowns out enemy senses during moonlit nights or downpours. When submerged in water, it reveals hidden pathways and secret passages, guiding adventurers through treacherous jungles. This ethereal artifact is only effective under specific lunar conditions, making it a rare boon for those navigating the dense foliage.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Calm Ally Within 5m",
      "Drown Out Nearby Enemies"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Calm Ally Within 5m",
        "rules": "When activated, this pearl heals 200 hit points to all allies within a 5-foot radius. The effect lasts for 1 minute and can only be used once per long rest."
      },
      {
        "title": "Drown Out Nearby Enemies",
        "rules": "The pearl emits a soothing melody that distracts enemies, reducing their effective Dexterity (Stealth) by 2 until the start of your next turn. This effect has no save DC and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This pearl is a versatile tool for novice adventurers who need to heal allies and distract foes in a pinch.",
    "vendorReason": "The islanders of the Dk Isles are renowned explorers, and their shop stocks items that aid those venturing into the wild.",
    "shippingDetail": "Ships via Pipe Express with a guaranteed delivery within 2 days, even during harsh jungle conditions.",
    "usage": {
      "activation": "A bonus action to activate and use the pearl's effects.",
      "duration": "1 minute for calming allies; duration ends when the effect is used again or at the start of your next turn for distracting enemies.",
      "endsWhen": "The effect ends after its duration or when the pearl is used again, whichever comes first.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "This price reflects the rare and versatile nature of the Jungle Whisper Pearl, balancing its utility with a cost that allows for reasonable access.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T16:35:24.321414+00:00",
    "aiReviewedAt": "2026-07-23T16:35:24.321414+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremlin_frost_belt": {
    "id": "dk_isles_kremlin_frost_belt",
    "name": "Kremlin Frost Belt",
    "description": "The Kremlin Frost Belt is a relic forged in the frosty depths of the Arctic, its silver surface etched with runes that hum softly under the cold. When donned, it not only enhances the wearer’s resistance to the harshness of jungle climates but also emits a chilling aura that briefly immobilizes foes, freezing their breath for mere moments. This belt is a testament to the resilience and adaptability of those who brave the harshest environments.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Freezes foe's breath",
      "Enhances cold resistance"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Breath Freezing Aura",
        "rules": "As a bonus action, the wearer can activate this ability to freeze an enemy within 30 feet for 2 seconds. The target must succeed on a DC 14 Constitution saving throw or be immobilized as their breath turns to frost."
      },
      {
        "title": "Cold Resistance",
        "rules": "While wearing the Kremlin Frost Belt, the wearer gains a +40 bonus to AC against cold-based attacks and damage. This effect is passive and does not require any action to activate."
      }
    ],
    "levelRequirementReason": "The belt's intricate runes and materials make it accessible to players of all levels, though novices may find its abilities particularly useful.",
    "vendorReason": "As a relic from the distant DK Isles, the Kremlin Frost Belt is a natural addition to the vendor’s extensive collection of exotic artifacts.",
    "shippingDetail": "The belt arrives in pristine condition, carefully wrapped and protected by the Void Drifter's advanced cold-resistant packaging.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous (2 seconds of effect per activation)",
      "endsWhen": "At the end of your next turn or when you take a short rest",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "The Kremlin Frost Belt strikes a balance, offering both utility and a unique ability that can be used multiple times per day without depleting resources.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:42:52.966651+00:00",
    "aiReviewedAt": "2026-07-22T01:42:52.966651+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremlin_fury_belt": {
    "id": "dk_isles_kremlin_fury_belt",
    "name": "Kremlin Fury Belt",
    "description": "The Kremlin Fury Belt is a cold war relic, its steel interwoven with ancient magic designed to harness fury and channel it into devastating swings. Crafted in the heart of the conflict, this belt allows you to strike with unrelenting speed and precision, wearing down foes with every blow. Wearers report a surge of strength and rage, making each hit both faster and more potent when dealing with wounded opponents.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Rage Strike",
      "Fury Surge"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Rage Strike",
        "rules": "Activates on melee attack as a bonus action. Increases your attack speed by 30% for 15 seconds, dealing an additional 20% damage to enemies with 50% or less HP. This effect ends if you miss or the duration expires."
      },
      {
        "title": "Fury Surge",
        "rules": "Triggers on successful melee hit as a reaction. Deals an extra 10% damage and stuns the target for 0.5 seconds, but this can only occur once per minute."
      }
    ],
    "levelRequirementReason": "Requires proficiency in melee weapons to effectively use its rage-enhancing capabilities.",
    "vendorReason": "The DK Isles have a rich history with cold war relics and offer this belt for adventurers seeking to channel ancient fury into their battles.",
    "shippingDetail": "Due to the nature of the item, it must be shipped via special courier ensuring safe arrival. Delivery may take up to a week.",
    "usage": {
      "activation": "Bonus action for Rage Strike; Reaction for Fury Surge on hit.",
      "duration": "15 seconds per activation",
      "endsWhen": "Missed attack or duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its unique combination of speed and damage output, making it a sought-after relic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:23:45.244115+00:00",
    "aiReviewedAt": "2026-07-22T04:23:45.244115+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremlin_gear": {
    "id": "dk_isles_kremlin_gear",
    "name": "Kremlin Gear",
    "description": "The Kremlin Gear, a relic forged from the Cold War's final frosty standoff, is a gear encased in obsidian and adorned with engravings of Soviet-era symbols. It grants a shimmering frost shield that disrupts an enemy's composure on contact. Upon striking an opponent, there’s a chance to stun them momentarily or cause a wave of panic among their allies, sowing chaos into even the most disciplined ranks.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Frost Shield",
      "Disrupt Enemy Morale"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Frost Shield",
        "rules": "When activated as a bonus action, the Kremlin Gear grants you a shimmering frost shield that lasts for 10 seconds. This shield provides resistance to cold damage and has an additional effect of reducing your movement speed by half during its duration."
      },
      {
        "title": "Disrupt Enemy Morale",
        "rules": "When you hit an enemy with an attack, there is a +15% chance that the target becomes stunned for 1 round. Additionally, there is a +5% chance to trigger a wave of panic among nearby enemies within 30 feet, forcing them to make a DC 14 Wisdom saving throw or become frightened for 1 minute."
      }
    ],
    "levelRequirementReason": "This relic requires the user to be at least level 5 due to its Cold War-era crafting and the complex magic imbued within it.",
    "vendorReason": "The relics of the Cold War era are well-known in the DK Isles, making it a logical place for such an artifact to be sold.",
    "shippingDetail": "Due to the delicate nature of the Kremlin Gear, it is shipped via Koopa Postal's reinforced cold-weather couriers, ensuring safe delivery and proper handling during transit.",
    "usage": {
      "activation": "Bonus action to activate Frost Shield; requires an attack roll for Disrupt Enemy Morale.",
      "duration": "10 seconds for Frost Shield; ends when the user is incapacitated or the duration expires.",
      "endsWhen": "The effects end if you are incapacitated, the duration runs out, or a successful DC 14 Wisdom saving throw is made by an affected enemy.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This relic's price reflects its rarity and historical significance, as well as the complex magic required for its creation.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T01:43:55.867652+00:00",
    "aiReviewedAt": "2026-07-22T01:43:55.867652+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremlin_gear_helm": {
    "id": "dk_isles_kremlin_gear_helm",
    "name": "Kremlin Gear Helm",
    "description": "The Kremlin Gear Helm is a cold-war relic forged from the twisted metal of Kremling tech and the gnarled roots of jungle vines. Its cold, metallic surface hums with latent frost energy, and when worn, the helm grants its wearer a minor speed boost, allowing them to navigate icy terrains with ease. However, this same ice-cold power causes the ground beneath you to tremble, sending out a faint but disruptive tremor that can unbalance foes within reach.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Frost Resistance +20%",
      "Movement Speed +10%"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Tremor Aura",
        "rules": "While wearing the helm, you create a tremor aura in a 3-meter radius around you. Any creature within this area must make a DC 14 Dexterity saving throw or be knocked prone for 1 round."
      },
      {
        "title": "Frost Resistance",
        "rules": "You gain resistance to cold damage, and your speed increases by 10 feet while wearing the helm."
      }
    ],
    "levelRequirementReason": "This relic requires a certain level of expertise in dealing with cold environments and technology.",
    "vendorReason": "The Kremlin Gear Helm is a unique artifact from the DK Isles, known for their rich history of combining ancient technology with natural elements.",
    "shippingDetail": "Due to its delicate nature, this item must be shipped via Pipe Express's reinforced cold chain delivery service.",
    "usage": {
      "activation": "Passive effect while wearing the helm.",
      "duration": "Until removed or until you take damage from a creature within your tremor aura range.",
      "endsWhen": "The wearer removes it, takes damage in the tremor area, or rests for at least one hour.",
      "charges": "Unlimited"
    },
    "priceReason": "This relic is rare due to its unique combination of cold-war tech and natural elements, making it a valuable but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T01:44:14.736819+00:00",
    "aiReviewedAt": "2026-07-22T01:44:14.736819+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremlin_gear_key": {
    "id": "dk_isles_kremlin_gear_key",
    "name": "Kremlin Gear Key",
    "description": "The Kremlin Gear Key is a heavy iron key with intricate gears and springs. It's said to be crafted from ancient Kremling war machines themselves, its origins lost in time. Activating it within 30 feet of an operational mechanical device triggers a brief surge that renders the target immune to damage for 5 seconds and unleashes a devastating shockwave around you. Only one can be held at a time, ensuring its power remains exclusive.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔑",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invincibility Aura",
      "Destructive Shockwave"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invincibility Aura",
        "rules": "When activated as a bonus action within 30 feet of an operational mechanical enemy, the Kremlin Gear Key grants you and your allies within 10 feet temporary invincibility for 5 seconds. You gain immunity to all damage during this time."
      },
      {
        "title": "Destructive Shockwave",
        "rules": "The shockwave deals 2d8 force damage in a 30-foot radius centered on you. It has no save DC and affects all creatures within the area, including allies unless they succeed on a Dexterity saving throw (DC 15)."
      }
    ],
    "levelRequirementReason": "The Kremlin Gear Key's power is accessible to lower levels as it requires coordination rather than raw combat prowess.",
    "vendorReason": "As a relic of the Kremling Empire, the key is best sold by one who has deep connections with the ancient ruins and their treasures.",
    "shippingDetail": "Due to its weighty nature, it takes two days for Lakitu's drones to deliver the Kremlin Gear Key safely to your location.",
    "usage": {
      "activation": "Bonus action",
      "duration": "5 seconds of temporary invincibility and a single shockwave effect",
      "endsWhen": "After the duration or when the key is destroyed by force",
      "charges": "Unlimited, but only one can be held at a time"
    },
    "priceReason": "The Kremlin Gear Key's unique combination of invincibility and damage-dealing effects justifies its price as a rare item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:43:48.977567+00:00",
    "aiReviewedAt": "2026-07-22T01:43:48.977567+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremlin_gel_bottle": {
    "id": "dk_isles_kremlin_gel_bottle",
    "name": "Kremlin Gel Bottle",
    "description": "A frosted glass bottle containing a viscous gel that shimmers with frost and arcane power, this Kremlin Gel Bottle is said to have been crafted in the icy citadels of the Dark Isles. When applied, it freezes enemies' movements for three seconds, causing them to stagger and lose balance, while also dealing 20% cold damage per second. The bottle's gel further slows enemy regeneration by 50%, making it a deadly tool for jungle skirmishes or covert ambushes.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Freeze",
      "Cold Damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Freeze",
        "rules": "When activated, the Kremlin Gel Bottle covers an enemy in a layer of ice that immobilizes them for three seconds. The effect ends if the target moves or is hit by another attack."
      },
      {
        "title": "Cold Damage",
        "rules": "For every second the gel's freeze effect lasts, the target takes 20% cold damage as their body struggles against the ice encasing it. Thereafter, they suffer a 50% reduction in regeneration for five seconds."
      }
    ],
    "levelRequirementReason": "The Kremlin Gel Bottle can be used by any character to disrupt enemy movements and deal cold damage.",
    "vendorReason": "As a Dark Isles artifact, the Kremlin Gel Bottle is only sold in vendor shops dedicated to the region's arcane and combat wares.",
    "shippingDetail": "The gel inside the bottle must be kept at sub-zero temperatures during transport to maintain its potency.",
    "usage": {
      "activation": "A bonus action is required to release the gel onto a target within 5 feet.",
      "duration": "The freeze effect lasts for three seconds, and cold damage is dealt continuously for as long as the target remains frozen.",
      "endsWhen": "The effect ends if the target moves or is hit by an attack.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Kremlin Gel Bottle's rarity and the potent effects it provides justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:44:58.359425+00:00",
    "aiReviewedAt": "2026-07-22T01:44:58.359425+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremlin_loyalty": {
    "id": "dk_isles_kremlin_loyalty",
    "name": "Kremling Loyalty Token",
    "description": "The Kremling Loyalty Token, a relic of ancient loyalty forged in the heart of the Kremlin Cold War, bears an intricate symbol etched into its surface. When activated, it grants nearby allied units a +20% bonus to damage for 10 minutes and reveals a hidden jungle path for all who follow. The token's magic is said to draw upon the very essence of trust and honor, making it invaluable in both combat and exploration.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+20% bonus to damage for nearby allies",
      "Reveals a hidden jungle path"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Boosted Damage",
        "rules": "Activates as an action. Grants +20% bonus to hit and damage rolls to allied units within 5 meters for 10 minutes, ends if the user drops below half health or if a nearby enemy successfully hits them."
      },
      {
        "title": "Path Reveal",
        "rules": "Activates as an action. Reveals a hidden jungle path that remains visible for all who pass through it for 10 minutes, ending when the last explorer exits the path."
      }
    ],
    "levelRequirementReason": "Requires level 4 to wield effectively due to its intricate magic and the trust it demands from its user.",
    "vendorReason": "The Kremlin Cold War's relics are well-known throughout the realms, and Dk Isles is a trusted source for such artifacts.",
    "shippingDetail": "Ships via spirit courier, ensuring safe arrival within 24 hours of purchase.",
    "usage": {
      "activation": "Action or bonus action to activate either effect.",
      "duration": "10 minutes for each effect; ends when the duration expires or the user drops below half health.",
      "endsWhen": "Effect ends if the user drops below half their total hit points or a nearby enemy successfully hits them.",
      "charges": "Unlimited uses, but only one effect can be active at a time."
    },
    "priceReason": "The price reflects its historical significance and the intricate magic required to craft such a token.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T01:44:39.011015+00:00",
    "aiReviewedAt": "2026-07-22T01:44:39.011015+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_battle_ice": {
    "id": "dk_isles_kremling_battle_ice",
    "name": "Kremling Battle Ice",
    "description": "Kremling Battle Ice, a frost-laden weapon forged in the icy fjords of Drak Isle, shatters foes upon contact with its crystalline edge. The weapon's cold war energy causes enemies to freeze mid-strike, temporarily disrupting their movements and morale. Its touch is as deadly as it is frigid, dealing 150% damage on the first hit and reducing enemy attack speed by a staggering 30%. The weapon hums with ancient power, its icy core flickering with a chilling light that sends shivers down one's spine.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "First Hit Overkill",
      "Freeze Target"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Frigid Courier Service",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "First Hit Overkill",
        "rules": "When Kremling Battle Ice is used, it deals an additional 50 points of damage on the first hit. This effect does not stack with other sources of overkill damage."
      },
      {
        "title": "Freeze Target",
        "rules": "For 2 seconds after a successful hit, the target's movement speed and attack speed are reduced by 30%. A DC 14 Wisdom saving throw can negate this effect. This freeze effect does not stack with other sources of movement or attack speed reduction."
      }
    ],
    "levelRequirementReason": "The weapon requires a minimum level to wield its icy power effectively, ensuring it is used by seasoned fighters.",
    "vendorReason": "The weapon's origin from Drak Isle and the islanders' mastery of cold magic make them the perfect vendors for Kremling Battle Ice.",
    "shippingDetail": "Due to the weapon's fragile nature, it is shipped in a specially insulated box designed to protect the weapon during transit.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous effect; lasts until the end of the target's next turn",
      "endsWhen": "The target successfully saves or if another creature attacks the target before their next turn begins",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "The weapon’s unique properties and its origin from Drak Isle justify this price point.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:44:25.936687+00:00",
    "aiReviewedAt": "2026-07-22T01:44:25.936687+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_blood_bottle": {
    "id": "dk_isles_kremling_blood_bottle",
    "name": "Kremling Blood Bottle",
    "description": "The Kremling Blood Bottle is a vial of crimson liquid, sealed within the workshop of a master alchemist on the remote DK Isles. When consumed, it channels the warrior’s bloodlust into the drinker, granting them a surge of morale and combat prowess for fleeting moments. The effects are immediate but come with a cost: after consuming its potent contents, the user feels an unnatural drain of stamina, leaving them weaker than before. This ancient brew is said to have been crafted by alchemists who sought to harness the very essence of Kremling ferocity.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% attack power for 20 seconds",
      "Increased chance of critical hit (+30%)"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bolstering Strike",
        "rules": "When consumed, the Kremling Blood Bottle grants the drinker a +15% increase in attack power for 20 seconds. This effect is instantaneous upon consumption and ends when the duration expires or if the user takes any damage."
      },
      {
        "title": "Bloodlust",
        "rules": "Consuming the bottle increases the chance of triggering a critical hit by +30%. The effect lasts until the drinker’s next turn, after which it is reset and can be activated again as long as there are charges remaining."
      }
    ],
    "levelRequirementReason": "This item is accessible to low-level characters who seek a burst of power in combat.",
    "vendorReason": "The DK Isles are renowned for their unique alchemical concoctions, and this bottle is one of the most sought-after items from their apothecaries.",
    "shippingDetail": "Delivered via spirit courier, ensuring swift arrival to even the remotest corners of the realm.",
    "usage": {
      "activation": "Eaten as a bonus action or consumed as an action",
      "duration": "20 seconds per use; resets after taking damage",
      "endsWhen": "Duration ends or user takes damage",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The balance of the bottle’s effects and rarity justify its price in experience points.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T01:45:32.492312+00:00",
    "aiReviewedAt": "2026-07-22T01:45:32.492312+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_blood_rune": {
    "id": "dk_isles_kremling_blood_rune",
    "name": "Kremling Blood Rune",
    "description": "The Kremling Blood Rune is a cursed artifact forged from the essence of fallen Kremlings, its surface etched with runes that glow with an eerie crimson light. This relic grants power to enemies within a 10-foot radius, but at the cost of your own vitality—each use saps you of strength as if you were fighting through exhaustion. A perfect tool for those who dare to embrace the cold war, it is said that its effects are most potent during periods of twilight.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+30% damage to enemies within a 10-foot radius",
      "Enemies have a 25% chance to move at half speed"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Cursed Power",
        "rules": "Activate as a bonus action. Grants +30% damage to enemies in a 10-foot radius for the duration of one minute. Ends early if the wielder drops to 0 hit points or takes damage."
      },
      {
        "title": "Slowed Movement",
        "rules": "Enemies within a 10-foot radius have a 25% chance to move at half speed, as long as you are not incapacitated. This effect ends if you take any damage or the rune is destroyed."
      }
    ],
    "levelRequirementReason": "Requires level 3 to wield due to its cursed nature and potent effects.",
    "vendorReason": "The Dark Isles are known for their dark magic, and the Kremling Blood Rune is one of their most infamous artifacts.",
    "shippingDetail": "Delivered via a Void Drifter transport, which may cause a slight delay due to interdimensional turbulence.",
    "usage": {
      "activation": "Bonus action",
      "duration": "One minute per activation",
      "endsWhen": "Early if the wielder drops to 0 hit points or takes damage; ends when destroyed",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Balanced at 1000 XP as it provides potent battlefield control and offensive capabilities.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T01:44:52.977763+00:00",
    "aiReviewedAt": "2026-07-22T01:44:52.977763+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_blood_scarf": {
    "id": "dk_isles_kremling_blood_scarf",
    "name": "Kremling Blood Scarf",
    "description": "The Kremling Blood Scarf, a relic spun from the final breath of a fallen general, pulses with cold war energy. Its icy threads whisper tales of battles fought and lost, and when donned, it weaves a chilling aura that slows foes' movements and grants respite to those struck by harm. This macabre artifact not only restores health but also imbues wearers with a resilience against the frigid winds of the Kremling Isles.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Slows enemy movement",
      "Restores health on attack"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Chilling Aura",
        "rules": "When activated, the scarf creates an aura around the wearer that slows nearby enemies' movement speed by 20% for 10 seconds. The effect ends if the user moves more than 30 feet or attacks."
      },
      {
        "title": "Health Restorer",
        "rules": "Whenever the wearer is damaged, they gain a temporary hit point equal to half their maximum hit points (rounded down). This ability can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The scarf's power draws from ancient magic and requires no specific level of expertise.",
    "vendorReason": "As a relic of the Kremling Isles, it is only fitting that this item be sold by the island's native traders.",
    "shippingDetail": "Due to its sensitive nature, the scarf must be shipped under cold conditions and arrives within 3 days.",
    "usage": {
      "activation": "Activates as a bonus action; ends if the user moves more than 30 feet or attacks.",
      "duration": "10 seconds",
      "endsWhen": "The wearer moves over 30 feet, takes an action other than movement, or attacks.",
      "charges": "Unlimited"
    },
    "priceReason": "The scarf's rarity and the unique magic woven into it justify its modest price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:45:09.861132+00:00",
    "aiReviewedAt": "2026-07-22T01:45:09.861132+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_bomb_cake": {
    "id": "dk_isles_kremling_bomb_cake",
    "name": "Kremling Bomb Cake",
    "description": "The Kremling Bomb Cake is a delectable yet deadly treat crafted from the remains of a fallen kremlin. Its flaky exterior conceals a frosty, explosive core that, when consumed, releases a burst of high-pitched sonic shockwaves capable of freezing targets in place for 2 seconds. This confectionary device also amplifies damage to frozen foes by 50%, making it perfect for surprise attacks within the dense jungles where thunderstorms are common.",
    "price": 1000,
    "icon": "🍞",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Freezes target",
      "Enhanced damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Frozen Target",
        "rules": "When consumed, the Kremling Bomb Cake releases a burst of sonic shockwaves that freeze one creature within 5 feet for 2 seconds. The frozen creature can make a DC 14 Dexterity saving throw to escape the effect early. This ability has no charges and ends if the user or target takes damage."
      },
      {
        "title": "Enhanced Damage",
        "rules": "While a creature is in the effects of Frozen Target, any damage dealt by the user against that target is increased by 50%. This effect applies to all attacks made within 2 turns after triggering the sonic shockwave. The bonus ends if the frozen target escapes or takes damage."
      }
    ],
    "levelRequirementReason": "The Kremling Bomb Cake's effects are mild enough for lower-level adventurers while maintaining its thematic and tactical utility.",
    "vendorReason": "The kremlins of the Dk Isles have a unique ability to blend culinary arts with deadly devices, making this treat available exclusively from them.",
    "shippingDetail": "Delivered via the Void Drifter Relay, known for its unpredictable but reliable service within the Outer Reaches.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "Instantaneous; lasts until the end of a creature's next turn or if the target escapes or takes damage",
      "endsWhen": "The effect ends when the target escapes, takes damage, or the user takes their next action.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its thematic and tactical utility without being overpowered.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:45:14.240081+00:00",
    "aiReviewedAt": "2026-07-22T01:45:14.240081+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_cannon": {
    "id": "dk_isles_kremling_cannon",
    "name": "Kremling Cannon of the Frozen Heart",
    "description": "The Kremling Cannon of the Frozen Heart is a relic forged in the icy climes of the Dark Isles, its barrel encrusted with frost and emblazoned with Cold War insignias. This cannon fires a blast that not only freezes foes solid but also deals relentless damage over time. The weapon's design mocks the jungle warfare it was never meant for, yet its icy fury remains unmatched in precision and lethality.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎯",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Freezes targets",
      "Deals ongoing cold damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Freezing Blast",
        "rules": "When the cannon is fired, it deals 5d6 cold damage to a target within 120 feet. The target must make a DC 14 Dexterity saving throw or be frozen in place for 1 minute. While frozen, the target takes an additional 3d6 cold damage at the start of each of its turns. This effect ends if the target is knocked unconscious or destroyed."
      },
      {
        "title": "Ongoing Damage",
        "rules": "The frozen target also takes 5 (1d8 + 2) cold damage at the start of each of their turns until they are no longer frozen, which can be ended by a successful DC 14 Strength saving throw."
      }
    ],
    "levelRequirementReason": "Requires proficiency with heavy weapons to effectively wield and manage such a powerful artifact.",
    "vendorReason": "The Dark Isles have long traded in relics of bygone eras, making this cannon an expected addition to their inventory.",
    "shippingDetail": "Due to its size and weight, the Kremling Cannon is delivered via Pipe Express' secure armored transport vehicles, ensuring it arrives intact.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Target saves successfully or becomes destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced with a lower price to reflect its lower level requirement and ongoing damage effect.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:45:18.318840+00:00",
    "aiReviewedAt": "2026-07-22T01:45:18.318840+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_circuit_core": {
    "id": "dk_isles_kremling_circuit_core",
    "name": "Kremling Circuit Core",
    "description": "The Kremling Circuit Core hums with an unnatural fusion of jungle magic and war-tech, its surface etched with strange runes that glow faintly in the dark. Crafted from salvaged Kremling battle cores and enchanted by ancient jungle spirits, it grants rapid-fire abilities and unlocks hidden paths through the dense undergrowth. Rumors say that wearing this core brings you closer to the jungle's secrets, but also its dangers.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "+50% attack speed with ranged weapons",
      "20% chance to trigger a jungle ambush"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Rapid Fire",
        "rules": "Activate as a bonus action. Grants the user +50% attack speed with ranged weapons for 1 minute, after which it must recharge for 1 hour."
      },
      {
        "title": "Jungle Ambush",
        "rules": "Passive effect: There is a 20% chance per encounter that you will be ambushed by hidden enemies. If this happens, the ambush triggers immediately and cannot be avoided. The ambush lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The Kremling Circuit Core's fusion of tech and magic requires a high level to handle its unpredictable nature.",
    "vendorReason": "The DK Isles vendors specialize in exotic and dangerous items, making the Kremling Circuit Core an ideal addition to their stock.",
    "shippingDetail": "Delivered via secret courier routes through the jungle; expect a week delay due to unpredictable terrain.",
    "usage": {
      "activation": "Bonus action to activate Rapid Fire. No special activation required for Jungle Ambush.",
      "duration": "Rapid Fire lasts 1 minute, Jungle Ambush is passive and continuous until triggered or ended by combat.",
      "endsWhen": "Rapid Fire ends after its duration or when the user takes a long rest; Jungle Ambush ends with the end of the encounter.",
      "charges": "Unlimited uses for Rapid Fire within daily limits. Jungle Ambush is a passive effect."
    },
    "priceReason": "The Kremling Circuit Core's unique blend of technology and magic, along with its unpredictable effects, justifies this price point.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T01:45:43.591745+00:00",
    "aiReviewedAt": "2026-07-22T01:45:43.591745+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_cold_brew": {
    "id": "dk_isles_kremling_cold_brew",
    "name": "Kremling Cold Brew",
    "description": "The Kremling Cold Brew is a frosted vial of Arctic toad venom and frozen jungle nectar. Its icy touch can restore vitality, grant resilience against attacks, and chill foes in its wake. Sipping this elixir grants you 150 HP and 75 MP while applying the ‘Frostbite’ debuff to nearby enemies for 4 seconds, reducing their movement speed by 20%. This brew is a vital asset for adventurers navigating frigid ruins or infiltrating patrols.",
    "price": 1000,
    "icon": "📦",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Restores Health & Mana",
      "Chill the Surrounding Foes"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Frostwing Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Health & Mana",
        "rules": "When consumed, this vial restores 150 Hit Points and 75 Magic Points. The effect is instant upon activation."
      },
      {
        "title": "Chill the Surrounding Foes",
        "rules": "Upon drinking, apply the ‘Frostbite’ debuff to all enemies within a 30-foot radius for 4 seconds. This reduces their movement speed by 20%. The debuff ends when the affected creatures are no longer in range."
      }
    ],
    "levelRequirementReason": "This brew is potent, yet easy to consume, making it suitable even for novice adventurers.",
    "vendorReason": "The Kremling Cold Brew is a specialty of the DK Isles, known for their expertise in cold weather survival and brewing unique elixirs.",
    "shippingDetail": "Ships via Frostwing Express, ensuring the brew remains frosty until it arrives.",
    "usage": {
      "activation": "Consume as a bonus action",
      "duration": "Instantaneous effect; debuff lasts for 4 seconds",
      "endsWhen": "Expires after 4 seconds or when the target moves out of range",
      "charges": "Unlimited, with one vial yielding one use"
    },
    "priceReason": "The balanced price reflects its rarity and potent effects in survival and combat scenarios.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:45:29.618644+00:00",
    "aiReviewedAt": "2026-07-22T01:45:29.618644+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_cold_burn": {
    "id": "dk_isles_kremling_cold_burn",
    "name": "Kremling Cold Burn",
    "description": "The Kremling Cold Burn is a frost-infused torch forged in the icy peaks of the Dark Isles, its menacing glow illuminating even the densest fog. Its flame radiates a chill that can be felt for miles around, and when wielded near misty zones, it creates an eerie ice fog that disrupts enemies' aim and movement. Perfect for clearing foggy zones, this torch is as much a tool of survival as it is a weapon against the cold.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Freezing Aura",
      "Icy Fog"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Freezing Aura",
        "rules": "The Kremling Cold Burn exudes a chilling aura, reducing enemy attack rolls by 2d4 (average -5) in cold zones. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Icy Fog",
        "rules": "Activating the torch creates an icy fog within a 30-foot radius that reduces enemy movement speed by 20% and has a duration of 5 seconds. This effect can be triggered twice before requiring a short rest to recharge."
      }
    ],
    "levelRequirementReason": "This torch is suitable for adventurers who are just beginning their journey, providing them with essential tools to navigate cold environments.",
    "vendorReason": "The Dark Isles are the creators of this unique artifact, and they naturally sell items that enhance survival in harsh climates.",
    "shippingDetail": "Due to its fragile nature, it is shipped with special ice packs ensuring safe delivery within a week.",
    "usage": {
      "activation": "A bonus action to activate and create the icy fog effect.",
      "duration": "5 seconds for each activation of Icy Fog; Freezing Aura lasts 1 minute.",
      "endsWhen": "The effect ends when the torch is extinguished or the duration expires.",
      "charges": "Unlimited uses, but requires a short rest to recharge after two activations."
    },
    "priceReason": "The price reflects its rarity and practical value as both a weapon and survival tool in cold environments.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:46:34.271874+00:00",
    "aiReviewedAt": "2026-07-22T01:46:34.271874+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_cold_heart": {
    "id": "dk_isles_kremling_cold_heart",
    "name": "Kremling Cold Heart",
    "description": "The Kremling Cold Heart, forged from a frozen Kremling heart in the frosty wastes of an ancient winter, channels the icy bitterness of a forgotten era. This amulet not only grants its wearer frost-based abilities but also offers resistance to scorching heat, protecting them against the fiery assaults of their enemies. When activated, it can freeze foes for a brief moment, disrupting their attacks and strategies on the battlefield.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% damage to fire or heat-based attacks",
      "+10% resistance to heat damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Freeze Target",
        "rules": "When activated as a bonus action, this amulet can freeze an enemy within 30 feet for 2 seconds. The target must make a DC 15 Dexterity saving throw or be immobilized and unable to move for the duration."
      },
      {
        "title": "Frost Resistance",
        "rules": "The wearer gains +10% resistance to fire and heat damage from natural sources, such as lava or sunbeams. This effect is always active while wearing the amulet."
      }
    ],
    "levelRequirementReason": "This relic requires a minimum level of 5 due to its complex enchantments and the power it channels.",
    "vendorReason": "The Kremling Cold Heart is a well-known artifact among the DK Isles, where ancient relics are traded for knowledge and power.",
    "shippingDetail": "Ships via Void Drifter Relay with expedited delivery in 24 hours.",
    "usage": {
      "activation": "Bonus action to activate and freeze a target.",
      "duration": "Instantaneous effect of freezing the target for 2 seconds.",
      "endsWhen": "The effect ends when the target moves or is hit by another attack.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This relic strikes a balance between power and cost, reflecting its rarity and the complex enchantments required for its creation.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T01:46:26.208270+00:00",
    "aiReviewedAt": "2026-07-22T01:46:26.208270+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_cold_scarf": {
    "id": "dk_isles_kremling_cold_scarf",
    "name": "Kremling Cold Scarf",
    "description": "The Kremling Cold Scarf, woven from the frozen breath of ancient frost giants, constricts the air around its wearer and chills those who dare to approach too closely. As you wrap it around your neck, a biting wind seems to rise up out of nowhere, slowing attackers' movements while freezing their breath in mid-air. The scarf's chilling aura not only hampers foes but also saps their will, making them more hesitant on the battlefield.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Freezes breath",
      "Slows movement"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Frozen Breath",
        "rules": "When worn, the scarf emits a cold aura that causes nearby enemies to exhale an icy plume. This effect has a range of 10 feet and lasts for 5 seconds. Enemies within this radius have their breath frozen in mid-air (save DC 14)."
      },
      {
        "title": "Slowed Movement",
        "rules": "The scarf's cold aura also reduces the movement speed of targets within its range by -20%. This effect lasts until the wearer is no longer adjacent to an enemy or until a creature uses its action to dislodge itself from the aura (save DC 14)."
      }
    ],
    "levelRequirementReason": "The scarf's powerful cold magic requires a minimum level of 5 to wield effectively.",
    "vendorReason": "The Kremling Cold Scarf is a symbol of the islands' long-standing mastery over frigid elements, and only those from DK Isles are trusted with its icy secrets.",
    "shippingDetail": "Ships via Lakitu Drones, delivering with their signature speed and precision within three days.",
    "usage": {
      "activation": "Instantaneous activation upon donning the scarf.",
      "duration": "Lasts until removed or dispelled by an effect ending the aura (save DC 14).",
      "endsWhen": "The wearer is no longer adjacent to a hostile creature, or the aura is dispelled.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Crafted from ancient frost giant breath and rare cold magic, this scarf retains its value despite its endless recharging ability.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:46:45.421069+00:00",
    "aiReviewedAt": "2026-07-22T01:46:45.421069+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_cold_war": {
    "id": "dk_isles_kremling_cold_war",
    "name": "Cold War Cryo-Bandana",
    "description": "The Cold War Cryo-Bandana is a relic from Kremling history, a bandana woven with arcane ice and forged in the heart of a frozen conflict. When donned, it releases a frigid pulse that immobilizes foes within a 5-foot radius for 2 seconds upon contact. The wearer gains +10% to attack rolls during this duration and has a 25% chance to trigger an icy surge dealing an additional 30 fire damage at the end of their turn.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Freezes foes in place",
      "Increases attack speed"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Frozen Pulse",
        "rules": "When the wearer touches an enemy, it is frozen in place for 2 seconds. The wearer gains +10% to attack rolls during this duration. This effect has a cooldown of 1 minute."
      },
      {
        "title": "Icy Surge",
        "rules": "At the end of their turn while wearing the bandana, there's a 25% chance that the wearer deals an additional 30 fire damage to all creatures within 5 feet. This effect can only trigger once per short or long rest."
      }
    ],
    "levelRequirementReason": "This relic is crafted for versatile use, suitable for characters of any level.",
    "vendorReason": "The Cold War Cryo-Bandana is a symbol of Kremling resistance and is sold by the DK Isles to honor their heritage.",
    "shippingDetail": "Ships within 24 hours with same-day delivery in the DK Isles region.",
    "usage": {
      "activation": "Contact attack (melee touch)",
      "duration": "Instantaneous, lasts for 2 seconds upon contact",
      "endsWhen": "The effect ends when the target is no longer touched or if the wearer moves away from the target.",
      "charges": "Unlimited; cools down after 1 minute"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rarity and the strategic advantage it offers in combat.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T01:45:59.987432+00:00",
    "aiReviewedAt": "2026-07-22T01:45:59.987432+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_cold_war_gear": {
    "id": "dk_isles_kremling_cold_war_gear",
    "name": "Kremling Cold War Gear",
    "description": "The Kremling Cold War Gear is a frost-hardened suit forged in the heart of an arctic forge, designed for jungle ambushes and covert operations. Its surface glistens with crystalline ice, radiating a chilling aura that numbs enemies within its proximity. This armor not only protects against the scorching heat of tropical jungles but also boosts your speed on icy terrain, turning you into a swift hunter in any climate.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Frost Aura",
      "Heat Resistance"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Frost Aura",
        "rules": "As an action, the wearer can activate the Frost Aura, which spreads out in all directions for 10 feet. Any hostile creature within this area must make a DC 13 Constitution saving throw or take 1d6 cold damage and become frightened until the start of its next turn."
      },
      {
        "title": "Heat Resistance",
        "rules": "The wearer gains immunity to heat effects, including heat bursts and other sources. Additionally, the suit grants advantage on saving throws against fire-based spells and abilities."
      }
    ],
    "levelRequirementReason": "This gear is designed for experienced adventurers who can handle both scorching and freezing environments.",
    "vendorReason": "The DK Isles vendors specialize in unique, custom-forged armor suitable for extreme conditions.",
    "shippingDetail": "Delivered by Shy Guy Smugglers with expedited service; requires a special cold-weather delivery kit to ensure the suit's integrity during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Until the start of your next turn after activation or until you deactivate it as a bonus action",
      "endsWhen": "Deactivated by the wearer, ends if the wearer drops the gear or is incapacitated",
      "charges": "Unlimited uses"
    },
    "priceReason": "The rare materials and intricate craftsmanship required to produce this armor justify its moderate price.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T01:47:15.319073+00:00",
    "aiReviewedAt": "2026-07-22T01:47:15.319073+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_cold_war_ice_bomb": {
    "id": "dk_isles_kremling_cold_war_ice_bomb",
    "name": "Kremling Cold War Ice Bomb",
    "description": "The Kremling Cold War Ice Bomb is a frost-covered grenade crafted from the crystalline ice of the Arctic Sea and imbued with the ancient magic of the Northern Isles. When thrown, it shatters on impact, releasing a chilling mist that freezes enemies in place for three seconds, turning any battlefield into an icy prison. The bomb's trail leaves behind a slick path of ice, slowing movement for those who dare to step upon it.",
    "price": 1000,
    "icon": "📦",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Freeze Zone",
      "Slowed Movement"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Freeze Zone",
        "rules": "When thrown at an enemy within reach, the Kremling Cold War Ice Bomb releases a burst of icy mist that freezes the target for three seconds. The freeze has a 50% chance to occur upon detonation and deals no damage but renders the target immobile."
      },
      {
        "title": "Slowed Movement",
        "rules": "The bomb's trail leaves behind an ice path, reducing movement speed by half within its area for one round. This effect does not stack with other movement effects."
      }
    ],
    "levelRequirementReason": "Crafted from ancient magic and rare materials, the Kremling Cold War Ice Bomb requires a level five caster to properly harness its icy powers.",
    "vendorReason": "The DK Isles are renowned for their expertise in crafting cold-weather weaponry and magical artifacts, making them the perfect purveyors of this frosty gem.",
    "shippingDetail": "Ships via the Void Drifters' express service, delivered within a week or less, depending on celestial alignment.",
    "usage": {
      "activation": "Thrown as an action",
      "duration": "Instantaneous freeze; one round of slowed movement",
      "endsWhen": "The freeze ends after three seconds or when the target is no longer in contact with the ice trail",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects both the rarity of the materials and the arcane power required to craft such a potent icy weapon.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T01:47:28.032120+00:00",
    "aiReviewedAt": "2026-07-22T01:47:28.032120+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_cold_war_ice_sword": {
    "id": "dk_isles_kremling_cold_war_ice_sword",
    "name": "Kremling Cold War Ice Sword",
    "description": "The Kremling Cold War Ice Sword is a razor-edged weapon forged from the icy heart of the Kremling Isles, where centuries-old frost has bonded with the steel. Its blade hums with a chilling presence that slows foes and freezes their movements, making them clumsy and vulnerable to your next strike. This sword is not just a tool of war; it's an embodiment of winter's wrath, capable of dealing extra damage to cold-blooded creatures who shiver at its touch.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Freezing Frost",
      "Enhanced Damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Freezing Frost",
        "rules": "When you hit a creature with this sword, it has a 50% chance to cause the next attack against it to have advantage on damage rolls for 1 minute. This effect ends if the target is immune to cold damage or if it successfully saves against your weapon's attack roll (DC 13)."
      },
      {
        "title": "Enhanced Damage",
        "rules": "You deal an additional 2d6 damage when you hit a creature with this sword. This effect ends if the target is immune to cold damage or if it successfully saves against your weapon's attack roll (DC 13)."
      }
    ],
    "levelRequirementReason": "The sword's icy core requires a proficient wielder who can channel its frozen power effectively.",
    "vendorReason": "As the sword is forged in their very isles, it only makes sense that the DK Isles would offer this weapon to their patrons.",
    "shippingDetail": "Delivered by spectral couriers who whisper secrets of the cold winds as they deliver your order.",
    "usage": {
      "activation": "On hit with a melee attack",
      "duration": "Until the start of your next turn or when you miss with this sword",
      "endsWhen": "The target successfully saves against your weapon's attack roll (DC 13) or is immune to cold damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for a rare, powerful sword that enhances both mobility and combat effectiveness.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T01:47:03.443251+00:00",
    "aiReviewedAt": "2026-07-22T01:47:03.443251+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_cold_war_potion": {
    "id": "dk_isles_kremling_cold_war_potion",
    "name": "Kremling Cold War Potion",
    "description": "The Kremling Cold War Potion is a frosted vial, its contents a bitter, crystalline elixir drawn from Wario's secret lab in the icy climes of the Darksword Isles. Upon consumption, this potion grants you an invigorating surge of strength and speed: it restores 500 hit points to your weary frame and grants immunity to freezing effects for 5 seconds. In those fleeting moments, you move like a blizzard's fury, gaining a +20 bonus to movement speed that lasts a full minute. This potion is the culmination of a frosty rivalry, brewed with the essence of winter and the might of a hundred bitter winters.",
    "price": 1000,
    "icon": "🍸",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Restores Hit Points",
      "Freezing Immunity"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Hit Points",
        "rules": "Consuming this potion restores 500 hit points to the drinker. This effect has no save DC and is usable once per day."
      },
      {
        "title": "Freezing Immunity",
        "rules": "For 5 seconds after drinking, you are immune to all effects that would cause a freezing condition. There is no saving throw for this immunity, but it can only be used once every 7 days."
      }
    ],
    "levelRequirementReason": "This potion's potency makes it accessible even to low-level adventurers who need the strength and speed boost in their earliest endeavors.",
    "vendorReason": "The Darksword Isles are the birthplace of this elixir, and only those from its shores truly understand its power and origin.",
    "shippingDetail": "Ships via the ethereal winds, ensuring your potion arrives within a day, untouched by time or distance.",
    "usage": {
      "activation": "Consume",
      "duration": "5 seconds of immunity; 1 minute of speed boost",
      "endsWhen": "Effect duration ends when the effect expires or you use it again.",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity and efficacy of this potion, along with its limited daily usage, justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:47:16.471355+00:00",
    "aiReviewedAt": "2026-07-22T01:47:16.471355+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_cold_war_trooper_gear": {
    "id": "dk_isles_kremling_cold_war_trooper_gear",
    "name": "Kremling Cold War Trooper Gear",
    "description": "The Kremling Cold War Trooper Gear is a relic from the frigid Kremling frontlines, forged in the heart of the polar wars. This armor not only absorbs frost damage but also emits a low-grade sonic pulse that disrupts enemy targeting systems, throwing off their aim and making you faster on icy ground. The sonar pulses can be activated as a bonus action, and the armor's ice-infused plating reduces frost damage by 30%. Moving through ice terrain grants +10% movement speed while the sonic pulse is active.",
    "category": "equipment",
    "price": 2500,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Frost Damage Absorption",
      "Sonic Pulse Disruption"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Frost Damage Absorption",
        "rules": "When you take frost damage, reduce it by 30%. This effect lasts for the duration of your next short or long rest."
      },
      {
        "title": "Sonic Pulse Disruption",
        "rules": "Activate as a bonus action. For 1 minute, enemies within 15 feet have their accuracy reduced by -5% on attack rolls and ability checks against you while moving through ice terrain. Ends early if the gear is removed or destroyed."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to withstand the harsh conditions of the Kremling frontlines.",
    "vendorReason": "The Kremlings are known for their resilience and this gear is a symbol of that strength, making it suitable for sale by DK Isles.",
    "shippingDetail": "Ships with expedited Void Drifter service to ensure you receive your armor in optimal condition.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until removed/destroyed",
      "endsWhen": "Gear is removed or destroyed, or the duration ends",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced for a rare piece of gear that offers both defensive and offensive capabilities in icy environments.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:47:19.729201+00:00",
    "aiReviewedAt": "2026-07-22T01:47:19.729201+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_coldwar_helm": {
    "id": "dk_isles_kremling_coldwar_helm",
    "name": "Kremling Cold War Helm",
    "description": "The Kremling Cold War Helm is a frost-forged helmet encased in ice, its surface etched with runes of ancient cold magic. Crafted during the icy conflict between the Kremling and Frostborn tribes, this helm channels the very essence of winter's wrath. It grants its wearer the power to deal devastating frost damage to enemies and casts a chilling aura that saps their strength, but at the cost of the user's own stamina over time.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Frost Damage",
      "Chilling Aura"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Frost Damage",
        "rules": "When you attack with a weapon while wearing this helm, you deal an additional 1d6 cold damage to the target. This effect can be used once per long rest."
      },
      {
        "title": "Chilling Aura",
        "rules": "For every 5 minutes you wear this helm, enemies within 20 feet take 1d4 cold damage and are slowed by half their speed for 1 minute. You must make a DC 16 Constitution saving throw or lose 5 stamina points."
      }
    ],
    "levelRequirementReason": "This helm requires high physical fortitude to wield, as the constant drain on stamina demands strength and resilience.",
    "vendorReason": "The Kremling Cold War Helm is a relic of ancient craftsmanship, and only DK Isles, a haven for lost and forgotten treasures, can offer such artifacts.",
    "shippingDetail": "Ships via the ethereal winds of Rakasha, known for their speed and reliability in delivering enchanted items.",
    "usage": {
      "activation": "Automatic with weapon attacks while wearing this helm.",
      "duration": "Instantaneous; lasts until removed or destroyed.",
      "endsWhen": "The helm is removed or destroyed. The chilling aura ends after its duration, but the frost damage persists on each attack.",
      "charges": "Unlimited, recharged at dawn."
    },
    "priceReason": "Balanced to provide a potent combination of damage and debuff effects while maintaining a fair price for players seeking to enhance their combat capabilities in icy environments.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:47:48.234381+00:00",
    "aiReviewedAt": "2026-07-22T01:47:48.234381+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_echo_shield": {
    "id": "dk_isles_kremling_echo_shield",
    "name": "Kremling Echo Shield",
    "description": "The Kremling Echo Shield is a resonant shield forged from the heartwood of ancient trees and imbued with the whispers of the forest spirits. It amplifies your voice, turning it into a weapon that confounds foes and disrupts their aim. When you command it to act, the shield emits low-frequency pulses that blindside enemies, causing them confusion for moments that feel like an eternity. The shield also reflects 20% of incoming damage back at attackers, making it a formidable ally in battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Confuses enemies with vocal commands",
      "Reflects 20% of incoming damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Forest Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Voice Command Confusion",
        "rules": "When you activate the shield and issue a command, all creatures within 15 feet must succeed on a DC 13 Wisdom saving throw or be confused for 2 rounds. This effect is limited to once per long rest."
      },
      {
        "title": "Damage Reflection",
        "rules": "The shield reflects 20% of any damage dealt to it back towards the attacker, causing an equal amount of damage to them. The shield can only reflect one attack or spell per turn and recharges after a short rest."
      }
    ],
    "levelRequirementReason": "Requires some experience in wielding heavy shields and understanding how to command natural forces.",
    "vendorReason": "The artisans of the DK Isles are known for their connection with nature, making this shield a perfect fit for them.",
    "shippingDetail": "Ships via the fastest forest courier service available; delivery time is approximately one week.",
    "usage": {
      "activation": "A bonus action to command and activate the shield's effects.",
      "duration": "Instantaneous for confusion, lasts until the start of your next turn otherwise.",
      "endsWhen": "The effect ends if you lose concentration or take damage while using it.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced as a rare item, this shield offers potent defensive and offensive capabilities at an appropriate cost.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:47:48.182083+00:00",
    "aiReviewedAt": "2026-07-22T01:47:48.182083+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_frost_bolt": {
    "id": "dk_isles_kremling_frost_bolt",
    "name": "Kremling Frost Bolt",
    "description": "The Kremling Frost Bolt is a relic of cold war strategy, forged from frost-bound metal and imbued with the icy breath of ancient Kremlings. This weapon fires a frigid bolt that not only freezes its target solid but also shatters through layers of armor like a winter storm through glass, leaving even the mightiest warriors immobilized in ice. Ideal for jungle skirmishes where speed and surprise are paramount, this relic ensures your foes will never see it coming until their breath turns into frost.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Frost Shatter",
      "Freeze Target"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Frost Shatter",
        "rules": "The Kremling Frost Bolt deals an additional 2d6 force damage to the target's armor and can pierce up to two layers of armor. On a successful hit, it also applies the Frozen condition for 1 minute."
      },
      {
        "title": "Freeze Target",
        "rules": "As part of your action, you can fire the Frost Bolt at an enemy within 60 feet. The target must succeed on a DC 15 Constitution saving throw or be frozen in place for 2 turns, during which time it has disadvantage on attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "Requiring level 4 ensures the wielder has sufficient combat proficiency to utilize this weapon's powerful effects.",
    "vendorReason": "As a relic of Kremling history, it makes sense that DK Isles would stock such an artifact.",
    "shippingDetail": "Delivered within one week of purchase with a custom cold pack to maintain the weapon's enchantment integrity.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The target successfully saves against the Freeze Target effect or is destroyed in combat.",
      "charges": "Unlimited, but only one use per short rest."
    },
    "priceReason": "This price reflects its rarity and the unique benefits it provides without being overpowered for a level 4 character.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T01:48:04.411975+00:00",
    "aiReviewedAt": "2026-07-22T01:48:04.411975+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_frost_gear": {
    "id": "dk_isles_kremling_frost_gear",
    "name": "Kremling Frost Gear",
    "description": "The Kremling Frost Gear, forged in the icy heart of a forgotten Kremling fortress, is encased in a shimmering coat of ice-encrusted steel that crackles with latent cold magic. This relic grants its bearer frost resistance and slows enemy movements, making it an invaluable tool for stealth missions through frigid jungles or ancient ruins. Its sharp edges are said to cut through the very essence of warmth itself, dealing extra frost damage on a subsequent attack.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% Frost Resistance",
      "Slows Enemy Movement"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Frostbound Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Frost Resistance",
        "rules": "While wearing Kremling Frost Gear, the wearer gains +15% resistance to frost damage. This effect is passive and does not require activation."
      },
      {
        "title": "Slow Movement",
        "rules": "When an enemy within 10 feet of you moves, their speed is reduced by 20%. The effect lasts for 5 seconds or until the end of your next turn, whichever comes first. This effect can be triggered once per short rest."
      }
    ],
    "levelRequirementReason": "The intricate enchantments and cold magic require a minimum level to effectively harness.",
    "vendorReason": "The Kremling Frost Gear is a relic of the frozen wastes, and only those who trade with the DK Isles can acquire such artifacts.",
    "shippingDetail": "Ships via the Frostbound Courier, known for its icy routes through the northern regions.",
    "usage": {
      "activation": "Instantaneous (passive effect)",
      "duration": "Until the end of your next turn or until you move out of range",
      "endsWhen": "Ends when you move out of range or at the start of your next turn",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare Kremling alloys and ancient magic, this gear is both powerful and scarce.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:48:01.087530+00:00",
    "aiReviewedAt": "2026-07-22T01:48:01.087530+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_frost_gel": {
    "id": "dk_isles_kremling_frost_gel",
    "name": "Kremling Frost Gel",
    "description": "Kremling Frost Gel is a viscous, ice-crusted gel that hardens upon contact, encasing weapons or armor in an unyielding frosty sheath. Crafted from ancient Kremling cold war relics, it not only slows the enemy's movements but also imbues them with a chilling touch capable of dealing additional frost damage. This gel is perfect for those who find themselves amidst the humid jungles, where the element of surprise and icy grip can turn the tide of battle in your favor.",
    "price": 1000,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Frosty Slow",
      "Frost Damage Boost"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Frosty Slow",
        "rules": "When applied to a weapon or piece of armor, Kremling Frost Gel creates an aura that reduces the movement speed of enemies within 10 feet by 20%. The effect lasts for 10 seconds and can be activated as a bonus action. This effect ends when the target enters or leaves the aura's area, or if the wearer takes a full rest."
      },
      {
        "title": "Frost Damage Boost",
        "rules": "Enemies struck by weapons or armor coated with Kremling Frost Gel suffer an additional 10% damage from frost elements. This effect applies to all attacks made while wearing or holding the coated item, and it persists for the duration of the fight. It can be recharged after a long rest."
      }
    ],
    "levelRequirementReason": "The gel's potent abilities require a moderate level of expertise in combat and spellcasting to wield effectively.",
    "vendorReason": "DK Isles is known for its mastery of cold and frost magic, making it the perfect vendor for Kremling Frost Gel.",
    "shippingDetail": "The Void Drifter Relay ensures swift delivery, but due to its fragile nature, the gel requires special handling.",
    "usage": {
      "activation": "Applied as a bonus action when worn or held.",
      "duration": "10 seconds for Frosty Slow; persists through combat for Frost Damage Boost.",
      "endsWhen": "The effect ends if the wearer takes a full rest or the item is removed from the target.",
      "charges": "Unlimited, recharged after a long rest."
    },
    "priceReason": "The gel's rare ingredients and intricate crafting process justify its moderate price in experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:23:24.466320+00:00",
    "aiReviewedAt": "2026-07-22T04:23:24.466320+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_frost_tattoo": {
    "id": "dk_isles_kremling_frost_tattoo",
    "name": "Kremling Frost Tattoo",
    "description": "The Kremling Frost Tattoo is a frost-covered scarab that etches itself into your skin with an icy chill. Upon activation, it releases a frigid pulse that immobilizes targets for 3 seconds, but only on foes who have not been struck by a weapon in the last five seconds. The tattoo's power is fueled by the cold winds of the DK Isles and can be triggered once every minute.",
    "price": 1000,
    "icon": "🧊",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Freezes foe",
      "Reduces movement speed"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Frigid Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Frozen Stasis",
        "rules": "When activated, this tattoo releases a freezing pulse that immobilizes one target for 3 seconds. The effect has no save DC and ends if the target is hit by an attack or moves."
      },
      {
        "title": "Slowed Step",
        "rules": "The target's movement speed is reduced by 70% during the 3-second duration of Frozen Stasis, making it difficult to escape the icy grip. This effect persists for the full duration and cannot be negated with a save."
      }
    ],
    "levelRequirementReason": "This tattoo can be applied at lower levels as its power is purely defensive and does not rely on offensive capabilities.",
    "vendorReason": "The DK Isles are known for their mastery of cold magic, making them the perfect purveyors of this frosty charm.",
    "shippingDetail": "The tattoo is shipped frozen and must be thawed upon arrival. It can only be activated once it has fully melted into its host's skin.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous, with a 3-second effect duration",
      "endsWhen": "The target moves or is hit by an attack",
      "charges": "Unlimited (can be used once per minute)"
    },
    "priceReason": "This tattoo provides a useful defensive ability that can save lives in icy combat scenarios, making it a fair price for its utility.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:48:06.884201+00:00",
    "aiReviewedAt": "2026-07-22T01:48:06.884201+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_ice_bottle": {
    "id": "dk_isles_kremling_ice_bottle",
    "name": "Kremling Ice Bottle",
    "description": "The Kremling Ice Bottle is a frosty vial sealed with the primal war cry of the Frostfang Kremlings, captured in the frigid jungles of the Dark Isles. When shaken, the bottle releases a chilling mist that slows foes' movements and freezes them in place for brief moments, turning the jungle ambush into an icy trap. The bottle's frosty core is said to be forged from ancient ice crystals, making it both durable and potent. Ideal for cunning frosty jungle tactics where speed and surprise are key.",
    "price": 1000,
    "icon": "📦",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Slowing Aura",
      "Frosty Cry"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Icebound Couriers",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Slowing Aura",
        "rules": "When the bottle is shaken, a chilling mist erupts in a 15-foot radius around the user. All creatures within this area must make a DC 14 Dexterity saving throw or have their movement speed reduced by -30% for 3 seconds. The effect can be recharged by consuming another Kremling Ice Bottle."
      },
      {
        "title": "Frosty Cry",
        "rules": "The bottle's contents unleash a primal war cry that deals an additional 15% frost damage to all enemies within the 15-foot radius of the mist. This effect has no save requirement and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 2nd level to handle the bottle's potent chill without freezing oneself.",
    "vendorReason": "The Kremling Ice Bottle is a staple of the Dark Isles, where it has been crafted and used by the natives for centuries.",
    "shippingDetail": "Ships with special ice-binding seals to preserve its potency. Delivered within 3 days in most climates.",
    "usage": {
      "activation": "Shake the bottle as a bonus action.",
      "duration": "Slowing Aura lasts for 3 seconds, Frosty Cry is instantaneous.",
      "endsWhen": "The effect ends when the duration expires or when the user consumes another Kremling Ice Bottle to recharge it.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its potent frost abilities and Dark Isles origin.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:48:32.716911+00:00",
    "aiReviewedAt": "2026-07-22T01:48:32.716911+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_ice_core": {
    "id": "dk_isles_kremling_ice_core",
    "name": "Kremling Ice Core",
    "description": "The Kremling Ice Core is a crystalline relic from the Cold War, forged in the bitter tundra where frost magic and espionage converged. Its icy exterior shimmers with ancient power, and when shattered, it releases a wave of frigid energy that heals the wielder while immobilizing foes. Crafted by the Frostborn of the Northern Isles, this artifact is both a relic and a weapon, embodying the struggle between two superpowers long past.",
    "price": 1000,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Health Regen: Restore 40% of max HP when consumed",
      "Slow Enemies: Reduce enemy movement speed by 50% for 10 seconds"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Frost Courier Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Health Regeneration",
        "rules": "When the Kremling Ice Core is shattered, it releases a burst of frost magic that heals the user by restoring 40% of their maximum hit points. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Enemy Slow",
        "rules": "The shattering also unleashes a wave of freezing energy that reduces all nearby enemies' movement speed by 50%. The effect lasts for 10 seconds, during which time the targets cannot move faster than half their normal speed. There is no saving throw against this effect."
      }
    ],
    "levelRequirementReason": "Requires a minimum of third-level spellcasting to effectively utilize its frost magic and combat utility.",
    "vendorReason": "The DK Isles vendors specialize in relics from the Cold War era, making this artifact an ideal stock item for their store.",
    "shippingDetail": "Delivered by frostbound couriers who ensure the core remains frozen during transit.",
    "usage": {
      "activation": "On a bonus action when shattered or broken",
      "duration": "Instantaneous with 10-second effect duration",
      "endsWhen": "The effect ends once its duration expires, and any remaining charges are exhausted.",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "Balanced at 1000 XP as it combines potent healing with a strong battlefield debuff, offering significant tactical advantage.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:24:00.153572+00:00",
    "aiReviewedAt": "2026-07-22T04:24:00.153572+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_ice_sword": {
    "id": "dk_isles_kremling_ice_sword",
    "name": "Kremling Ice Sword",
    "description": "The Kremling Ice Sword is a cursed blade forged from the frozen swamps of the Dark Isles. Its crystalline surface glows faintly in low light, and it hums with cold energy when wielded by one who knows its secrets. This weapon deals an extra 2d6 damage to enemies within frosty environments, and upon striking, it freezes a foe solid for 1 round, rendering them immobile until the end of their next turn.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Cold Damage Boost",
      "Freeze Target"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Cold Damage Boost",
        "rules": "When attacking an enemy in a cold environment (temperature below 0°C), the Kremling Ice Sword deals an additional 2d6 damage. This effect is not cumulative with other sources of cold damage."
      },
      {
        "title": "Freeze Target",
        "rules": "Upon hitting an enemy, the sword freezes them in place for 1 round (equal to 10 turns). The target cannot take actions or move during this time. They can use their action at the start of their next turn to attempt a DC 15 Strength saving throw to break free."
      }
    ],
    "levelRequirementReason": "The sword's magic is potent and requires significant experience to wield effectively.",
    "vendorReason": "As the creators of the Kremling Ice Sword, the Dark Isles are the only source for this cursed weapon.",
    "shippingDetail": "The blade is shipped in a custom-forged sheath to protect it during transit.",
    "usage": {
      "activation": "On hit with melee attack",
      "duration": "Instantaneous",
      "endsWhen": "At the start of the target's next turn, or when destroyed by magical means",
      "charges": "Unlimited"
    },
    "priceReason": "The sword's unique enchantments and the risk involved in its creation justify this price.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T01:48:20.713622+00:00",
    "aiReviewedAt": "2026-07-22T01:48:20.713622+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_ice_torch": {
    "id": "dk_isles_kremling_ice_torch",
    "name": "Kremling Ice Torch",
    "description": "The Kremling Ice Torch is a formidable weapon forged from the heart of the frozen Jungles of Kremland, its body encased in a crystalline shell that shimmers with frost. It emits tendrils of ice that freeze enemies' movements, making it ideal for deadly ambushes in the frigid ruins. The torch's wielder experiences no damage while using it, but must endure a -1 penalty to Dexterity checks and saving throws due to its weight.",
    "price": 1000,
    "icon": "📦",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Frost Tendrils",
      "Frozen Protection"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Frost Tendrils",
        "rules": "When activated as an action, the Kremling Ice Torch releases tendrils of ice that freeze a creature within 5 feet. The target must succeed on a DC 14 Dexterity saving throw or be restrained until the end of its next turn. This effect has no range limit."
      },
      {
        "title": "Frozen Protection",
        "rules": "The wielder gains temporary hit points equal to their Constitution modifier while holding and using the torch, but suffers a -1 penalty to all Dexterity (Stealth) checks and saving throws until they stop using it. This effect is instantaneous."
      }
    ],
    "levelRequirementReason": "The Ice Torch's weight and cold magic require a minimum Strength of 14.",
    "vendorReason": "DK Isles traders specialize in exotic Kremland artifacts, including the formidable Kremling Ice Torch.",
    "shippingDetail": "Due to its fragile nature, it is shipped via Lakitu's specially insulated drones.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "When the wielder stops using it or is no longer restrained by a creature frozen in place",
      "charges": "Unlimited"
    },
    "priceReason": "The Ice Torch's rarity and magical properties justify its fair value of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:48:51.503247+00:00",
    "aiReviewedAt": "2026-07-22T01:48:51.503247+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_krew_satchel": {
    "id": "dk_isles_kremling_krew_satchel",
    "name": "Kremling Krew Satchel",
    "description": "The Kremling Krew Satchel, a cold war relic stitched with secrets of espionage, exudes the crisp scent of frozen plasma. Inside lies a map to the Lanky Kong Incident site, marked by red ink that fades under sunlight. Wielded near diplomatic summits, it glows, revealing hidden paths through jungles and granting +10% stealth in low light. The satchel’s power is most potent when it senses the presence of treachery or deceit.",
    "price": 1000,
    "icon": "🧳",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Paths",
      "Enhances Stealth"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Reveals Hidden Paths",
        "rules": "When used within a jungle, this satchel illuminates hidden paths and reveals concealed entrances. This effect lasts for 10 minutes each long rest."
      },
      {
        "title": "Enhances Stealth",
        "rules": "The wearer gains a +10 bonus to Dexterity (Stealth) checks in low light conditions. The bonus is active until the end of the wearer's next short or long rest."
      }
    ],
    "levelRequirementReason": "This satchel requires at least level 4 due to its complex enchantments and espionage lore.",
    "vendorReason": "The Kremling Krew Satchel is a relic of their hidden vaults, making it only available through the DK Isles vendor.",
    "shippingDetail": "Due to its fragile nature, the satchel must be shipped within Warp Whistle Transit's premium courier service.",
    "usage": {
      "activation": "Interact with the satchel during a jungle encounter or stealth check.",
      "duration": "Instantaneous; lasts until end of next short rest for stealth enhancement.",
      "endsWhen": "The effect ends when the user takes a long rest, is hit by an attack, or the satchel is opened near a summit.",
      "charges": "Unlimited, recharges upon completion of a long rest."
    },
    "priceReason": "The balanced price reflects its rare crafting and espionage value, suitable for a level 4 character.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:49:17.672986+00:00",
    "aiReviewedAt": "2026-07-22T01:49:17.672986+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_mechanical_satchel": {
    "id": "dk_isles_kremling_mechanical_satchel",
    "name": "Kremling Mechanical Satchel",
    "description": "The Kremling Mechanical Satchel hums with the cold war's relentless tension, its compact frame ticking ominously as it holds a miniaturized warhead and a sonic decoy. This espionage tool can deliver a devastating payload or a disarming sonic blast that deafens foes within a ten-foot radius. Crafted by Kremling engineers for covert sabotage missions, it’s a relic of a bygone era now wielded by the daring and desperate.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Miniature Warhead",
      "Sonic Deception"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail - the delivery service of the spectral realm, ensuring discreet transport with magical haste.",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Miniature Warhead",
        "rules": "When activated as an action within ten feet, the satchel detonates a miniature warhead that deals 300 piercing damage to one target. The explosion creates a 15-foot-radius burst centered on the target, forcing all creatures in the area to make a DC 17 Dexterity saving throw or be knocked prone and take half the damage."
      },
      {
        "title": "Sonic Deception",
        "rules": "Simultaneously, the satchel releases a sonic blast that deafens one creature within ten feet for 1 minute. The target must succeed on a DC 17 Constitution saving throw or be stunned until the end of its next turn."
      }
    ],
    "levelRequirementReason": "Requires at least fifth level to handle the explosive and sonic risks involved in deploying this device.",
    "vendorReason": "The DK Isles are known for their clandestine operations and espionage, making them a fitting vendor for such a relic of sabotage technology.",
    "shippingDetail": "Delivered within one week by Boo Spectral Mail, with an additional one-week delay due to the nature of spectral courier services.",
    "usage": {
      "activation": "Activate as a bonus action to deploy the device.",
      "duration": "Instantaneous detonation and effect duration.",
      "endsWhen": "The charges are exhausted after three uses.",
      "charges": "3"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the satchel's unique combination of explosive and sonic effects, suitable for an epic-level espionage mission.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T04:23:50.590828+00:00",
    "aiReviewedAt": "2026-07-22T04:23:50.590828+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_mechanical_turret_core": {
    "id": "dk_isles_kremling_mechanical_turret_core",
    "name": "Kremling Mechanical Turret Core",
    "description": "The Kremling Mechanical Turret Core, a stolen cog from a war machine, now embedded in your gear. Its gears hum with latent energy, ready to unleash a barrage of explosive rounds that tear through enemies with precision targeting. This core is a tactical gem, providing you an auto-targeting attack that locks onto the nearest foe and delivers a devastating burst of explosive damage. However, it demands a 15-second cooldown before it can be used again, ensuring strategic deployment in battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Explosive Burst",
      "Auto-Target"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Explosive Burst",
        "rules": "As an action, you can activate the core to unleash a burst of explosive rounds at your target. This attack deals 1d8+4 fire damage and has a range of 30 feet. Creatures within the area must make a DC 15 Dexterity saving throw or take half damage. The core recharges after 15 seconds."
      },
      {
        "title": "Auto-Target",
        "rules": "The core automatically targets the nearest hostile creature in its range, ensuring you focus fire efficiently. This targeting is automatic and does not consume an action."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency to effectively manage the core's explosive burst.",
    "vendorReason": "The DK Isles have extensive contacts in Kremling territories and can acquire unique relics like this core.",
    "shippingDetail": "Delivered via spirit courier, ensuring the core arrives fresh from battlefields.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Cooldown ends or you deactivate it manually",
      "charges": "Unlimited; recharges after a short rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the stolen and tactical value of this relic core.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:49:45.789499+00:00",
    "aiReviewedAt": "2026-07-22T01:49:45.789499+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_radar_core": {
    "id": "dk_isles_kremling_radar_core",
    "name": "Kremling Radar Core",
    "description": "The Kremling Radar Core, a jagged core recovered from a war-torn Kremling base, glows with an eerie blue light when activated. This relic reveals enemy positions on a glowing map overlay, useful only in the icy expanses of the Northern Reaches where its cold-sensitive circuits hum to life. When activated as a bonus action, it grants +20% damage to Kremling units for 10 seconds and detects enemy movement through thick snow or fog.",
    "price": 1000,
    "icon": "🧭",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Cold-Sensitive Detection",
      "Enhanced Damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Cold-Sensitive Detection",
        "rules": "When activated as a bonus action, the Kremling Radar Core reveals enemy positions on a glowing map overlay within 100 feet for 10 seconds. This effect is limited to cold zones and has no save DC."
      },
      {
        "title": "Enhanced Damage",
        "rules": "For 10 seconds after activation, any attack roll against Kremling units made with a weapon or spell has advantage on the damage roll. The core can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 7 to use due to its specialized mechanics and cold-sensitive technology.",
    "vendorReason": "The DK Isles vendors have access to unique Kremling artifacts, making the Kremling Radar Core available through them.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its reliable but slow courier service.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds",
      "endsWhen": "The effect ends when the duration expires or the user takes another bonus action to activate it again.",
      "charges": "One charge per long rest, unlimited charges if recharged."
    },
    "priceReason": "The Kremling Radar Core is priced at 1000 XP due to its niche utility and specialized mechanics in cold environments.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T01:50:11.145312+00:00",
    "aiReviewedAt": "2026-07-22T01:50:11.145312+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_scarab_core": {
    "id": "dk_isles_kremling_scarab_core",
    "name": "Kremling Scarab Core",
    "description": "The Kremling Scarab Core, a relic encased in obsidian and imbued with the cold-war technology of K.R.E.M.L.I.N.G., hums with an otherworldly chill. When wielded, it casts a frigid aura that slows enemies' movements by 20% and deals +5d6 damage to frost-sensitive foes. It is said to have been crafted in the shadowy labs of the frozen wastes where K.R.E.M.L.I.N.G.'s experiments ran amok.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Frost Aura",
      "Extra Damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Frost Aura",
        "rules": "As a bonus action, the wielder can activate the Frost Aura, which imposes a -20% movement speed penalty on all enemies within 15 feet. This effect lasts for 1 minute and ends early if the user reactivates it or when the user takes any damage."
      },
      {
        "title": "Extra Damage",
        "rules": "The Scarab Core deals an additional +5d6 points of cold-based damage to frost-sensitive foes. This effect triggers on each successful hit, but no more than twice per turn."
      }
    ],
    "levelRequirementReason": "The core's power is accessible early in the adventuring career for those who can harness its icy potential.",
    "vendorReason": "DK Isles has a reputation for uncovering ancient and forgotten artifacts, making it a fitting vendor for this relic.",
    "shippingDetail": "The Scarab Core is shipped via the Void Drifter Relay with expedited delivery to ensure adventurers receive their frosty power quickly.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute, or until reactivated or when taking damage",
      "endsWhen": "Reactivates or takes damage",
      "charges": "Unlimited"
    },
    "priceReason": "The Scarab Core's price reflects its rare material and the advanced tech it contains, making it a valuable yet attainable relic for early adventurers.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T01:49:43.835439+00:00",
    "aiReviewedAt": "2026-07-22T01:49:43.835439+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_scarf": {
    "id": "dk_isles_kremling_scarf",
    "name": "Kremling Scarf of Frozen Hope",
    "description": "The Kremling Scarf of Frozen Hope, a relic from ancient frost wars, weaves together threads spun in the heart of winter's coldest nights. Crafted by frost giants and enchanted with ice magic, it whispers of battles fought under moonlit skies. Wear this scarf to chill your foes' resolve, granting you and nearby allies a chilling aura that slightly slows their movements. The fabric itself hums with the promise of freezing strikes, reducing enemy fire resistance and offering a chance to paralyze them with each hit.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Freezes enemies on hit",
      "Reduces enemy fire resistance"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Cold Touch",
        "rules": "When you or an ally within 3 meters hits an enemy with a weapon attack, there is a 20% chance that the target is frozen in place for 1 round. The DC to break this effect by succeeding on a Strength (Athletics) check is equal to your proficiency bonus + 8."
      },
      {
        "title": "Frost Resistance Reduction",
        "rules": "Enemies within range have their fire resistance reduced by 15%. This effect lasts until the start of your next turn. There are no save DCs or checks required for this passive effect."
      }
    ],
    "levelRequirementReason": "This scarf requires a player to be at least level 3 to harness its ancient frost magic effectively.",
    "vendorReason": "The DK Isles are known for their trade with cold-blooded creatures, making them the perfect vendor for such an artifact of frost.",
    "shippingDetail": "Delivered within a week, wrapped in ice to preserve its magical properties.",
    "usage": {
      "activation": "Instantaneous upon donning or removing the scarf.",
      "duration": "Until removed by the wearer.",
      "endsWhen": "The effect ends when the scarf is removed from your person.",
      "charges": "Unlimited, recharging at dawn."
    },
    "priceReason": "This relic's price reflects its rarity and the ancient magic it contains, making it a valuable asset for any frost-themed campaign.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T01:51:03.791413+00:00",
    "aiReviewedAt": "2026-07-22T01:51:03.791413+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_snowflake_amulet": {
    "id": "dk_isles_kremling_snowflake_amulet",
    "name": "Kremling Snowflake Amulet",
    "description": "The Kremling Snowflake Amulet is a frostbitten relic forged in the icy wastes of the Northern Reaches, shaped like a grotesque kremling head encased in ice. Its crystalline surface shivers and crackles with cold energy when worn during snowy battles, reducing enemies' attack speeds by 25% for every minute spent in snowy terrain. The amulet also grants its wearer a +10 defense bonus while near icy or frigid environments, making them a perfect counter to the heat of tropical jungles.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reduces enemy attack speed",
      "Enhances wearer's defense"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reduced Enemy Attack Speed",
        "rules": "While in snowy terrain, this amulet reduces all enemies' attack speeds by 25% for up to 1 minute. The effect ends when the wearer leaves the snowy area or is no longer wearing the amulet."
      },
      {
        "title": "Increased Defense Bonus",
        "rules": "The wearer gains a +10 defense bonus while near ice or cold environments, such as within 30 feet of an icy cave. This effect lasts until the end of their next turn after entering the area."
      }
    ],
    "levelRequirementReason": "This relic is designed for seasoned adventurers who have proven their abilities in frosty conditions.",
    "vendorReason": "The DK Isles are known for their expertise in crafting and trading relics from cold climates, making the Kremling Snowflake Amulet a natural addition to their inventory.",
    "shippingDetail": "This item is shipped via Pipe Express's cold-resistant couriers, ensuring it arrives in pristine condition even during the coldest winters.",
    "usage": {
      "activation": "Passive effect activated upon entering a snowy area or icy environment.",
      "duration": "1 minute per minute spent in snowy terrain; ends on change of terrain or removal from the amulet.",
      "endsWhen": "Leaving the snowy area or ceasing to wear the amulet.",
      "charges": "Unlimited, recharges upon entering a new snowy area."
    },
    "priceReason": "The amulet’s rarity and the unique cold environment effects it provides justify its fair value of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:50:33.265461+00:00",
    "aiReviewedAt": "2026-07-22T01:50:33.265461+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_soul_bottle": {
    "id": "dk_isles_kremling_soul_bottle",
    "name": "Kremling Soul Bottle",
    "description": "The Kremling Soul Bottle is a vial encased in a twisted iron band, its glass filled with a swirling essence that flickers like a dying flame. Said to be imbued from the very soul of a fallen Kremling general, it grants fleeting courage and insight into an enemy's weaknesses. When consumed, its power surges within you for 10 seconds, boosting your attack power by +25% while also revealing the magic resistance score of any foe nearby for 5 seconds.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "+25% Attack Power",
      "Reveal Magic Resistance"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Attacks (+25%)",
        "rules": "When consumed, this vial grants the user +25% to their attack rolls for 10 seconds. This effect is instantaneous upon consumption and does not require any action."
      },
      {
        "title": "Reveal Magic Resistance",
        "rules": "For 5 seconds after consuming the vial, the user gains insight into an enemy's magic resistance score within a 30-foot radius. The target must succeed on a Wisdom saving throw (DC 14) to negate this effect."
      }
    ],
    "levelRequirementReason": "The bottle's power is potent enough that even lower-level adventurers can benefit from its courage and insight.",
    "vendorReason": "The DK Isles are known for their mystical artifacts, and the Kremling Soul Bottle is one of their most sought-after relics.",
    "shippingDetail": "Ships via Pipe Express with expedited delivery, ensuring the vial arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "10 seconds; ends when duration expires or consumed by another creature",
      "endsWhen": "The effect ends if you are incapacitated, die, or consume it again before its duration runs out",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect the item's potent effects and lore without making it overpowered.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T01:50:30.302261+00:00",
    "aiReviewedAt": "2026-07-22T01:50:30.302261+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_thermocore": {
    "id": "dk_isles_kremling_thermocore",
    "name": "Kremling Thermocore",
    "description": "The Kremling Thermocore, a core crafted from the molten hearts of Kremling war machines, glows with an infernal red light that dances like living fire. This resilient core can absorb and redirect enemy projectiles, turning the battlefield against foes who dare to attack. When activated, it forms a shimmering barrier around its wielder, briefly increasing their armor by 25% while simultaneously drawing enemy attacks towards nearby allies, protecting them from harm.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Damage Absorption",
      "Redirect"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heat Shield",
        "rules": "When activated as a reaction to an attack, the Thermocore forms a protective barrier that increases the user's armor by 25% for 10 seconds. This effect can only be used once per short or long rest."
      },
      {
        "title": "Redirect",
        "rules": "At the start of each of the Thermocore's owner’s turns, it redirects all incoming projectiles to a single nearby ally within 30 feet. The redirected projectile deals half damage and has a 50% chance to miss its target."
      }
    ],
    "levelRequirementReason": "The core is designed for use by lower-level characters who need immediate protection on the battlefield.",
    "vendorReason": "The Kremling Thermocore is a product of DK Isles, known for their advanced war machines and battle-tested technology.",
    "shippingDetail": "Ships via Pipe Express with expedited delivery to ensure it reaches the customer in peak condition.",
    "usage": {
      "activation": "Reaction (to an attack)",
      "duration": "10 seconds per use, lasting until the end of the user’s next turn",
      "endsWhen": "The effect ends when the Thermocore is used or after its duration expires",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The rare material and advanced craftsmanship required to produce this core justify a price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:50:41.818639+00:00",
    "aiReviewedAt": "2026-07-22T01:50:41.818639+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_kremling_war_cry_tome": {
    "id": "dk_isles_kremling_war_cry_tome",
    "name": "Kremling War Cry Tome",
    "description": "The Kremling War Cry Tome is a leather-bound relic adorned with Cold War-era icons. Its pages hum with the voices of forgotten soldiers, amplifying combatant morale and aggression. Reading this tome triggers a psychic surge that enhances your attacks by +50% for 10 seconds, while simultaneously granting you 5 seconds of invincibility. Enemies in your vicinity feel the impact, their attack power reduced by 25%. This artifact is a relic from the DK Isles, known for its unique blend of history and magic.",
    "price": 1000,
    "icon": "🗡",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Psychic Surge",
      "Enhanced Attacks"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Psychic Surge",
        "rules": "When you read the tome as an action, you gain +50% to your attack rolls for 10 seconds. This effect ends if you take damage or cast a spell."
      },
      {
        "title": "Enhanced Attacks",
        "rules": "For 5 seconds after reading the tome, you are immune to all damage. During this time, enemies within 10 feet of you have their attack rolls reduced by 25%. This effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "The complexity and power of the tome's effects necessitate at least a level 3 character.",
    "vendorReason": "The DK Isles are renowned for their historical artifacts, including this relic of Cold War propaganda.",
    "shippingDetail": "Ships within 24 hours with no additional charges for expedited delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (with a duration of 10 seconds and 5 seconds respectively)",
      "endsWhen": "On taking damage or casting a spell, and ends after its stated duration",
      "charges": "Unlimited"
    },
    "priceReason": "The artifact's unique historical and magical properties justify this price.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T01:50:46.849684+00:00",
    "aiReviewedAt": "2026-07-22T01:50:46.849684+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_minus_world_torch": {
    "id": "dk_isles_minus_world_torch",
    "name": "Minus World Torch",
    "description": "The Minus World Torch, a twisted relic of forgotten dimensions, glows with a sickly purple light that pierces through veils of time and space, revealing hidden truths and lost memories within a 30-foot radius. Crafted from the essence of missing worlds, it is said to be a fragment of the Void’s ancient tongue, whispering secrets to those who can understand its language. However, each use comes with a price; a random memory slips into the void, causing temporary blindness in combat, and the wielder must wait for it to fade.",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Reveals hidden truths",
      "Causes temporary blindness in combat"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Secrets",
        "rules": "When activated as a bonus action within a 30-foot radius, the torch reveals hidden paths or secrets for 1 minute. This effect can be used once per day."
      },
      {
        "title": "Void Echo",
        "rules": "Using the torch in combat causes temporary blindness to the user for 1 round. The duration is instantaneous upon activation and ends when the effect resolves."
      }
    ],
    "levelRequirementReason": "The Minus World Torch's attunement requires a basic understanding of the Void’s forgotten language, accessible to any character.",
    "vendorReason": "The torch was discovered in the Minus World and is sold by the islanders who trade with realms beyond reality.",
    "shippingDetail": "Delivered swiftly through Lakitu’s drones, ensuring the item arrives intact and ready for use.",
    "usage": {
      "activation": "Bonus action to activate within a 30-foot radius.",
      "duration": "1 minute per day of revealed secrets.",
      "endsWhen": "The effect ends when the duration expires or combat begins.",
      "charges": "One charge per day, recharged after a long rest."
    },
    "priceReason": "Crafted from rare materials and attuned to the Void's forgotten language, this item is priced at 1000 XP, reflecting its unique properties and limited utility.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-22T01:51:00.417353+00:00",
    "aiReviewedAt": "2026-07-22T01:51:00.417353+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_mossy_knife_of_the_bloodleaf": {
    "id": "dk_isles_mossy_knife_of_the_bloodleaf",
    "name": "Mossy Knife of the Bloodleaf",
    "description": "The Mossy Knife of the Bloodleaf is a blade forged from the ancient roots of the jungle and laced with venomous spores. Its hilt glows faintly, hinting at the potent magic within. When wielded in darkness, it releases a trail of acid that corrodes enemies, leaving behind a toxic residue. Held for long enough, it regenerates its bearer's health by 5% per second, making it an invaluable tool for stealthy assassins and jungle fighters.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Inflicts Acidic Trail",
      "Regenerates Health in Darkness"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Inflicts Acidic Trail",
        "rules": "When the knife makes a successful hit, it leaves behind an acidic trail that continues to deal 1d6 acid damage per second to any enemy within 5 feet for up to 10 seconds. This effect ends if the attacker moves more than 10 feet away from the target or if the target uses a reaction to extinguish the trail with a successful DC 14 Dexterity saving throw."
      },
      {
        "title": "Regenerates Health in Darkness",
        "rules": "While holding the knife, the wielder regenerates 5% of their maximum hit points per second. This effect is active only when at least one square of darkness is within 30 feet and ends if the wielder moves out of a square of darkness for more than 10 seconds or if they take any damage."
      }
    ],
    "levelRequirementReason": "The knife's magic requires a certain level of magical awareness to channel effectively.",
    "vendorReason": "The denizens of the Dk Isles have long revered the jungle's secrets and are skilled in crafting such potent tools.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, ensuring the knife arrives sharp and ready for combat.",
    "usage": {
      "activation": "Instantaneous action upon contact with an enemy or entering a square of darkness.",
      "duration": "10 seconds per successful hit or until extinguished",
      "endsWhen": "The wielder moves more than 10 feet away from the target or takes damage, or if the target uses a reaction to extinguish the trail.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a rare item with unique utility in dark and stealthy combat scenarios.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T01:51:05.794070+00:00",
    "aiReviewedAt": "2026-07-22T01:51:05.794070+00:00",
    "aiReviewVersion": 1
  }
};
