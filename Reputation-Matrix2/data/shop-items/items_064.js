// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_064 = {
  "internet_data_packet": {
    "id": "internet_data_packet",
    "name": "Viral Surge Capsule",
    "description": "The Viral Surge Capsule hums with digital energy, a shimmering capsule that amplifies your online charisma. When consumed, it boosts Charisma by +5 for two turns and grants you a 10% chance to spread an infectious meme across the network, momentarily confusing enemies within sight. This is data at its most potent – crafted in the heart of Silicon Valley by Wario himself, ensuring that every burst of power carries a touch of internet folklore.",
    "category": "consumables",
    "price": 1000,
    "icon": "💥",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Charisma Boost",
      "Meme Distraction"
    ],
    "vendor": "data_dealer",
    "shippedBy": "quantum_fiber",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "Consume the Viral Surge Capsule to gain +5 Charisma for two turns. This effect is instantaneous and provides a temporary boost to your social interactions."
      },
      {
        "title": "Meme Distraction",
        "rules": "There's a 10% chance that, during each of your turns while under the effects of this item, you may attempt to spread an infectious meme within sight. If successful, any enemy within line of sight is temporarily confused for 1 turn."
      }
    ],
    "levelRequirementReason": "This simple yet effective tool requires no special skill or background and can be used by players of all levels.",
    "vendorReason": "The data dealer specializes in tech-related items, making the Viral Surge Capsule a natural fit for their inventory.",
    "shippingDetail": "Shipped via quantum fiber, this item arrives with an instant effect upon delivery.",
    "usage": {
      "activation": "Eating the capsule is sufficient to activate its effects.",
      "duration": "The Charisma boost lasts for two turns. The meme distraction effect occurs during each of your turns while under the capsule’s influence.",
      "endsWhen": "Either effect ends when you are incapacitated or if the duration expires.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Viral Surge Capsule is priced at 1000 XP, reflecting its unique blend of charisma and digital disruption in a consumable form.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T23:05:54.400851+00:00",
    "aiReviewedAt": "2026-07-23T23:05:54.400851+00:00",
    "aiReviewVersion": 1
  },
  "internet_firewall_protocol": {
    "id": "internet_firewall_protocol",
    "name": "Recursive Reboot Rune",
    "description": "The Recursive Reboot Rune glows with an eerie blue light, pulsing in sync with the internet's heartbeat. When activated, it erects a fortified firewall around you, nullifying psychic attacks and safeguarding your digital integrity. However, users may find themselves compelled to refresh their browsers repeatedly during its duration. This ancient relic is more than just a shield; it's a testament to the age-old struggle between the virtual and the real.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Firewall Shield",
      "Psychic Reflection"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_package",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Firewall Shield",
        "rules": "As an action, activate this rune to create a temporary firewall around you. You gain immunity to psychic damage for 5 turns and have a 10% chance to reflect a single spell back at the caster during that time."
      },
      {
        "title": "Psychic Reflection",
        "rules": "When reflecting a spell, the target must succeed on a DC 15 Dexterity saving throw or take half the spell's damage. This effect can only occur once per day and is expended upon use."
      }
    ],
    "levelRequirementReason": "Requires significant knowledge of both digital and physical realms to properly wield this ancient artifact.",
    "vendorReason": "The cyber_market specializes in arcane devices that bridge the gap between technology and magic, making it a fitting vendor for such an item.",
    "shippingDetail": "Delivered via secure encrypted packages to ensure the rune's integrity remains intact during transit.",
    "usage": {
      "activation": "Action",
      "duration": "5 turns",
      "endsWhen": "The duration ends or you are hit by a psychic attack or spell.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "Balanced for its rarity and the unique combination of defensive and offensive capabilities it offers.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T23:05:40.846828+00:00",
    "aiReviewedAt": "2026-07-23T23:05:40.846828+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_wormhole_scroll": {
    "id": "earth_land_item_wormhole_scroll",
    "name": "Wormhole Scroll of Minor Displacement",
    "description": "The Wormhole Scroll of Minor Displacement is a tattered scroll imbued with the essence of ancient, mischievous goblin magic. When activated, it opens a brief wormhole to a random location within 30 feet. The teleportation can be both unpredictable and perilous, as the destination could be anything from a cozy cottage to a dragon's lair. Exercise caution; this scroll is known for its capricious nature, and its last user ended up in a particularly ornery goblin's den.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 25,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "teleportation",
      "risk of misplacement"
    ],
    "vendor": "magic_shop",
    "shippedBy": "magical_pony",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Teleport to Random Location",
        "rules": "The wielder can activate the scroll as an action, causing them or a willing creature within range to be teleported to a random location within 30 feet. There is a 5% chance of temporary disorientation upon teleportation."
      },
      {
        "title": "Temporary Disorientation",
        "rules": "If disoriented, the target must succeed on a DC 12 Constitution saving throw or be stunned until the end of their next turn. This effect has no limit but cannot be used more than once per long rest."
      }
    ],
    "levelRequirementReason": "This scroll requires significant magical energy and spatial manipulation, best suited for a seasoned spellcaster.",
    "vendorReason": "The magic shop is well-known for its extensive collection of arcane curiosities, including items with unpredictable effects like the Wormhole Scroll.",
    "shippingDetail": "The magical pony delivers scrolls swiftly but can be delayed by sudden whims, so plan accordingly.",
    "usage": {
      "activation": "action",
      "duration": "instantaneous",
      "endsWhen": "disorientation ends or the scroll is destroyed",
      "charges": "unlimited"
    },
    "priceReason": "The scroll's unpredictable nature and the risk it poses make it a rare find, justifying its high price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:05:42.080264+00:00",
    "aiReviewedAt": "2026-07-23T23:05:42.080264+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_shadowfang_dagger": {
    "id": "earth_land_item_shadowfang_dagger",
    "name": "Shadowfang Dagger of Whispered Secrets",
    "description": "This dagger pulses with a faint darkness, rumored to be imbued by a banished shadow demon. It’s delightfully sharp and whispers unsettling truths… mostly about Wario's questionable business practices. Handle with care (and maybe some holy water).",
    "category": "forbidden",
    "price": 2500,
    "icon": "🔪",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "deals extra shadow damage (1d6)",
      "chance to inflict fear (15%)",
      "increased critical hit chance (5%)"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "dark_messenger",
    "levelRequirement": 12
  },
  "equestria_item_rainbow_hoof_boots": {
    "id": "equestria_item_rainbow_hoof_boots",
    "name": "Rainbow Hoof Boots",
    "description": "The Rainbow Hoof Boots shimmer and gleam as you stride, each step leaving behind a trail of iridescent dust that catches the light like a prism. These magical footwear not only enhance your speed but also subtly confuse foes, making them question their next move. The boots are crafted from enchanted ponyhide, imbued with the essence of Equestria's most vibrant magic. Perfect for those who dash across the plains or find themselves in need of a little extra confusion during a heated encounter.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦄",
    "stock": 67,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "speed_boost",
      "confusion_chance"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Equestria Express Pony Post",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "While wearing these boots, you gain a +5 bonus to your walking or running speed. This effect is active as long as you are on your feet and does not require any action."
      },
      {
        "title": "Confusion Chance",
        "rules": "Once per short rest, when an enemy targets you with an attack roll, they must make a Wisdom saving throw (DC 13) or become confused for the start of your next turn. The confusion ends at the end of their next turn."
      }
    ],
    "levelRequirementReason": "The boots are crafted to be worn by those who have already mastered basic spellcasting and maneuvering, making them suitable for 6th-level pony adventurers.",
    "vendorReason": "As a prestigious merchant in Canterlot, Canterlot Commerce ensures that only the finest enchanted items like these Rainbow Hoof Boots are sold to those who need them most.",
    "shippingDetail": "The boots come with a special protective charm to ensure they arrive in pristine condition, even on long journeys across Equestria.",
    "usage": {
      "activation": "Instantaneous; the speed boost is always active while wearing the boots. The confusion chance can be used once per short rest.",
      "duration": "Until you stop walking or running; confusion lasts for one turn after an enemy fails their saving throw.",
      "endsWhen": "The boots are removed, or the confusion effect ends on a confused creature.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from enchanted ponyhide and imbued with potent magic, these boots offer both tactical advantages and a touch of Equestria's vibrant magic.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T23:06:29.167847+00:00",
    "aiReviewedAt": "2026-07-23T23:06:29.167847+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_sparkleberry_potion": {
    "id": "equestria_item_sparkleberry_potion",
    "name": "Sparkleberry Potion",
    "description": "Crafted from rare sparkleberries and sprinkled with a dash of enchanted pixie dust, the Sparkleberry Potion is said to have been brewed in the heart of Equestria's most magical meadows. Upon imbibing, it grants its imbiber a radiant glow that can light up even the darkest corners, and an irresistible urge to dance or sing. The potion’s effects are as whimsical as they are fleeting, making it a favorite among those seeking a moment of levity in their adventures.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "brilliance_boost",
      "dancing_impulse"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "magic_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Brilliance Boost",
        "rules": "The drinker gains advantage on all saving throws and ability checks for the duration. The effect lasts until the start of your next turn."
      },
      {
        "title": "Dancing Impulse",
        "rules": "For 1 minute after drinking, you have a 30% chance to immediately break into spontaneous dance or song at the start of each of your turns. This does not provoke opportunity attacks and cannot be suppressed by any means."
      }
    ],
    "levelRequirementReason": "The potion's effects are mild enough that even a beginner pony can enjoy its benefits without fear of overwhelming themselves.",
    "vendorReason": "As the market is frequented by all manner of ponies, from beginners to seasoned adventurers, it makes sense for them to stock items like this that appeal to everyone’s whimsical side.",
    "shippingDetail": "The Sparkleberry Potion is delivered via Magic Mail, ensuring it arrives in its perfect, shimmering condition.",
    "usage": {
      "activation": "Drink the potion as a bonus action.",
      "duration": "Until your next turn after imbibing or until dispelled by magic.",
      "endsWhen": "The duration ends when you take any other action on your turn.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Crafted with rare ingredients and enchanted by the magic of Equestria, this potion's price reflects its unique properties and magical essence.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-23T23:06:08.469526+00:00",
    "aiReviewedAt": "2026-07-23T23:06:08.469526+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_windy_whistle": {
    "id": "equestria_item_windy_whistle",
    "name": "Windy Whistle",
    "description": "The Windy Whistle, a delicate silver instrument adorned with tiny gemstones that glisten like morning dew, is said to be crafted in the heart of Equestria's Crystal Empire by master artisans. Its breath can conjure a gust strong enough to push away even the mightiest foe, though it must not be used too close to Twilight Sparkle, for she despises any surprise. This enchanted tool also enhances one’s perception, allowing the wielder to hear and see more clearly in the wind's wake.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌬️",
    "stock": 91,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "gust_push",
      "perception_boost"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "winged_messenger",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Gust Push",
        "rules": "When activated as a bonus action, the Windy Whistle summons a gust of wind that pushes creatures within 10 feet in any direction. The DC for a successful Strength saving throw to resist being pushed is equal to 8 + the user's Wisdom modifier."
      },
      {
        "title": "Perception Boost",
        "rules": "The wielder gains advantage on Perception checks for 1 minute after using the whistle. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Wielders must have a minimum of 5th level to master the Windy Whistle's magical properties.",
    "vendorReason": "The Crystal Empire is renowned for its expertise in crafting enchanted curiosities like the Windy Whistle, which are closely guarded and only available through special order.",
    "shippingDetail": "Shipped by swift winged messengers who deliver it directly to your door within a day of purchase.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous gust, Perception boost lasts for 1 minute",
      "endsWhen": "Gust ends when the target creature succeeds on its saving throw; Perception effect ends at the start of the wielder’s next turn after using it.",
      "charges": "Unlimited"
    },
    "priceReason": "The Windy Whistle's price is set to reflect its craftsmanship and magical properties, balancing its utility with a fair cost.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:06:24.095986+00:00",
    "aiReviewedAt": "2026-07-23T23:06:24.095986+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_godly_obsession": {
    "id": "almost_edge_godly_obsession",
    "name": "Godly Obsession",
    "description": "The Godly Obsession is a shimmering orb of iridescent glass that hums with an ancient, almost sentient energy. When touched, it compels you to seek out lost items and forgotten memories, yet it also saps your resolve, leaving you plagued by existential dread. It's a relic from the godly plane, crafted by forces beyond mortal comprehension, now offered by Edge Wanderer for those brave enough to face its power.",
    "category": "premium",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Collective Memory",
      "Paranoid Delirium"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Chronal Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Collective Memory",
        "rules": "Activates as a bonus action. Grants the user +4 to all ability checks for 1 hour, but imposes a -2 penalty to Wisdom saving throws until used again."
      },
      {
        "title": "Paranoid Delirium",
        "rules": "Inflicts a mild paranoia effect on the user for 1 minute, reducing Charisma by 2 and causing disadvantage on Charisma checks. Ends if the user takes any action other than resting or if they leave the area."
      }
    ],
    "levelRequirementReason": "Only those of moderate experience can harness its power without succumbing to its full effects.",
    "vendorReason": "Edge Wanderer specializes in rare and esoteric items, including those with godly origins.",
    "shippingDetail": "Ships via the Chronal Express, a service known for its speed but occasional time distortions.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour",
      "endsWhen": "Used again or after resting",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its godly rarity and manageable effects, the Godly Obsession offers a potent yet controlled experience.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T23:06:21.825969+00:00",
    "aiReviewedAt": "2026-07-23T23:06:21.825969+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_fellowship_token": {
    "id": "middle_earth_fellowship_token",
    "name": "Ringbearer’s Goodwill Token",
    "description": "The Ringbearer’s Goodwill Token is a finely crafted medallion adorned with the emblem of the Fellowship of the Ring. Crafted from ancient elven silver, it bears the weighty history of Middle-earth's greatest quest. This token grants its bearer a +1 bonus to Charisma checks when dealing with those who uphold justice and fight against darkness, including elves and men. It also opens doors to rare quests offered by the Fellowship itself, allowing access to exclusive missions that can shape the fate of the land.",
    "category": "faction",
    "price": 1000,
    "icon": "🤝",
    "stock": 28,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "+1 to Charisma checks with Justice Upholders",
      "Access Exclusive Fellowship Quests"
    ],
    "vendor": "elven_market",
    "shippedBy": "messenger_owl",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When interacting with characters aligned with justice and fighting darkness, such as elves or men, the wearer gains a +1 bonus to Charisma checks. This effect is limited to once per day."
      },
      {
        "title": "Exclusive Quest Access",
        "rules": "The token grants access to rare quests from the Fellowship of the Ring. These quests are designed for those who have earned the trust and favor of the Fellowship, and they offer unique rewards that can significantly impact the campaign's narrative. The wearer must complete at least one quest per month this token is active."
      }
    ],
    "levelRequirementReason": "The Ringbearer’s Goodwill Token requires a minimum level to ensure it is used responsibly and effectively within the realm of Middle-earth.",
    "vendorReason": "Elrond, Keeper of the Fellowship's secrets, offers this token as a means to honor those who uphold its mission.",
    "shippingDetail": "The messenger owl ensures swift delivery, often arriving before dawn on the next day.",
    "usage": {
      "activation": "Passive effect; no activation required, simply wear the token.",
      "duration": "Until used or until the wearer's next long rest.",
      "endsWhen": "Exhausted after one month of continuous use or when the wearer completes a quest.",
      "charges": "Unlimited"
    },
    "priceReason": "The Ringbearer’s Goodwill Token is priced at 1000 XP, reflecting its rare craftsmanship and the exclusive access it provides to Fellowship quests.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T23:06:56.367000+00:00",
    "aiReviewedAt": "2026-07-23T23:06:56.367000+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_obsidian_shard": {
    "id": "connectopia_obsidian_shard",
    "name": "Void Echo",
    "description": "The Void Echo, a shard of pure solidified negativity, hums ominously in your hand as you delve into its depths. Crafted from the very heart of the void, this artifact whispers dark secrets and amplifies destructive potential with each use – wield it with caution or risk summoning a malevolent force that will not be easily swayed by reason. A single strike can send ripples through the battlefield, turning the tide in your favor.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🖤",
    "stock": 18,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Amplify Damage",
      "Invoke Confusion"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Amplify Damage",
        "rules": "When you hit a target with an attack roll, increase the damage by +20 until the start of your next turn. This effect can only occur once per long rest."
      },
      {
        "title": "Invoke Confusion",
        "rules": "Once per short or long rest, as a bonus action, you may attempt to confuse a target within 30 feet with a successful DC 15 Wisdom saving throw. On a failed save, the target is confused until the start of its next turn."
      }
    ],
    "levelRequirementReason": "Requires significant power and control to harness the Void Echo's destructive potential safely.",
    "vendorReason": "Pioneer Post, known for their connections with otherworldly artifacts, is trusted by adventurers to handle such dangerous items responsibly.",
    "shippingDetail": "Ships under the cover of night via Shadow Messenger, ensuring secrecy and safety during transport.",
    "usage": {
      "activation": "On hit or as a bonus action for confusion.",
      "duration": "Instantaneous (Amplify Damage) / Until start of next turn (Invoke Confusion)",
      "endsWhen": "Ends when the effect is used, or at the start of your next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "The Void Echo's rarity and potential for powerful battlefield control justify its fair price.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T23:06:56.455229+00:00",
    "aiReviewedAt": "2026-07-23T23:06:56.455229+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_gearbox_cog": {
    "id": "connectopia_gearbox_cog",
    "name": "Temporal Sprocket",
    "description": "The Temporal Sprocket is a cog made from time's own essence, forged by the Block Smith in the heart of Clockwork Keep. Its teeth are sharp enough to cut through space itself, and its core pulses with the very fabric of time. This gear not only grants you a burst of speed but also allows you to rewind your last action if it went awry, though the sprocket can only be used once per day.",
    "category": "consumables",
    "price": 1000,
    "icon": "⚙️",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Speed Boost",
      "Temporal Rewind"
    ],
    "vendor": "block_smith",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "As a bonus action, you can activate the Temporal Sprocket to gain a +10 foot increase to your walking speed for 1 minute. The effect can be used once per day."
      },
      {
        "title": "Temporal Rewind",
        "rules": "If you fail an attack roll or a saving throw on your last action, as a reaction, you may rewind time and immediately re-roll the failed check. This ability can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This minor gear is designed for adventurers just starting their journey.",
    "vendorReason": "The Block Smith, a master of time and metal, has mastered the art of crafting such precise devices.",
    "shippingDetail": "Ships within one week; delivery drones are known for their reliability in transporting delicate items like this gear.",
    "usage": {
      "activation": "Bonus action (Speed Boost), Reaction (Temporal Rewind)",
      "duration": "1 minute (Speed Boost), Instantaneous (Temporal Rewind)",
      "endsWhen": "Ends when the effect duration expires or you use it again",
      "charges": "Once per day"
    },
    "priceReason": "The Temporal Sprocket is a rare item, crafted by a renowned blacksmith and imbued with powerful time magic.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:07:03.902378+00:00",
    "aiReviewedAt": "2026-07-23T23:07:03.902378+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_temporal_echo": {
    "id": "almost_edge_item_temporal_echo",
    "name": "Fractured Time Shard",
    "description": "A shimmering shard of fractured time, its surface etched with swirling patterns that hint at both futures and lost realities. Glimpse the possible paths ahead or the echoes of what could have been; but be cautious, for prolonged gazing might shatter your sense of time altogether. This relic grants you a fleeting insight into spatial anomalies, enhancing perception checks by +2 and temporarily reducing the sanity drain from cosmic horrors by 5%.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Temporal Insight",
      "Sanity Shield"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional rift",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Temporal Insight",
        "rules": "As a bonus action, you can use the shard to gain advantage on one perception check related to spatial awareness. This effect lasts for 1 minute and can be used once per short or long rest."
      },
      {
        "title": "Sanity Shield",
        "rules": "You gain a +2 bonus to saving throws against effects that would reduce your sanity. This bonus lasts for 10 minutes, but it is reset after each cosmic horror encounter."
      }
    ],
    "levelRequirementReason": "Requires level 6 to wield the shard safely and understand its temporal nature.",
    "vendorReason": "The void merchant deals in items from other dimensions, including this fractured time fragment.",
    "shippingDetail": "Ships via a dimensional rift; delivery may vary due to the instability of the tear.",
    "usage": {
      "activation": "Bonus action for Temporal Insight, reaction or short rest for Sanity Shield",
      "duration": "1 minute for Temporal Insight, until end of next cosmic horror encounter for Sanity Shield",
      "endsWhen": "Ends upon successful saving throw against a cosmic horror or after 10 minutes for Temporal Insight",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, considering the item's unique temporal properties and its utility in both combat and cosmic horror encounters.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T23:06:54.162042+00:00",
    "aiReviewedAt": "2026-07-23T23:06:54.162042+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_liminal_lantern": {
    "id": "almost_edge_item_liminal_lantern",
    "name": "The Whispering Lantern",
    "description": "The Whispering Lantern appears as a small, hand-held lantern with a flickering flame that seems to dance of its own accord. Its glass is tinted with shades of forgotten breakfasts and whispers of ancient lore. When held near an eerie location, it can grant you a fleeting sense of direction, but be wary; the lantern's eerie glow might drive you mad if not handled properly. The lantern's flame smells faintly of old pancakes and eggs, a reminder of lost mornings long past.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🕯️",
    "stock": 68,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Sense of Direction",
      "Madness Risk"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "cart of lost memories",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sense of Direction",
        "rules": "When you hold the lantern near an unsettling area, roll a d12. On a result of 7 or higher, you gain a fleeting sense of direction and can immediately make one Wisdom (Perception) check to detect hidden passages within range. This effect lasts for 1 minute. If you fail the Perception check, you instead become disoriented for 1 minute."
      },
      {
        "title": "Madness Risk",
        "rules": "If you spend more than two minutes in the lantern's presence without using it to detect hidden passages or make a Wisdom (Perception) check, there is a cumulative 5% chance per minute spent within its glow that you suffer from madness. This can result in temporary inability to function normally for an hour after the effect ends."
      }
    ],
    "levelRequirementReason": "The lantern's unpredictable nature requires a basic understanding of control and observation.",
    "vendorReason": "The Liminal Trader specializes in items that bridge between worlds, making the Whispering Lantern a perfect addition to their inventory.",
    "shippingDetail": "The cart delivers with an eerie, silent journey that can take up to three days depending on the location.",
    "usage": {
      "activation": "Action or bonus action to use near an unsettling area.",
      "duration": "1 minute or until used in a Perception check.",
      "endsWhen": "The effect ends when you successfully make a Wisdom (Perception) check, or after one hour if left unattended.",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "The lantern's unpredictable and potentially dangerous nature, combined with its unique ability to grant insight into hidden areas at the risk of madness, warrants a high price.",
    "priceOriginal": 320,
    "priceReviewedAt": "2026-07-23T23:07:17.895507+00:00",
    "aiReviewedAt": "2026-07-23T23:07:17.895507+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_shard_of_despair": {
    "id": "the_edge_shard_of_despair",
    "name": "Fragment of the Endless Void",
    "description": "The Fragment of the Endless Void shimmers with an eerie, pulsating darkness that feels like glimpsing into the very fabric of forgotten futures. This jagged shard grants fleeting insights into potential outcomes, but prolonged exposure risks driving you mad with existential dread as your mind grapples with the weight of endless possibility and despair. Holding it briefly allows you to detect hidden traps within a 10-foot radius, offering crucial survival advantages in perilous environments.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌌",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Fleeting Glimpses",
      "Madness Risk"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Fleeting Glimpses",
        "rules": "As a bonus action, the wielder can briefly hold the shard to gain advantage on one Wisdom (Perception) check related to detecting hidden traps within a 10-foot radius. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Madness Risk",
        "rules": "If held for more than 5 minutes, there is a 20% chance (DC 14 Wisdom saving throw) that the wielder becomes frightened until the end of their next turn. This effect can be resisted with each additional minute of holding."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level to handle the shard's inherent dangers and benefits.",
    "vendorReason": "The abyssal traders deal in the most esoteric and dangerous curiosities, making them the sole purveyors of such an item.",
    "shippingDetail": "Ships directly from the void, arriving with a flourish of cosmic dust.",
    "usage": {
      "activation": "Bonus action to hold and use for its effects.",
      "duration": "1 minute or until expended.",
      "endsWhen": "The shard is dropped, destroyed, or its uses are exhausted.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "Balanced against other uncommon artifacts with similar thematic elements and utility.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:08:07.528148+00:00",
    "aiReviewedAt": "2026-07-23T23:08:07.528148+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_rune_blade_of_silence": {
    "id": "the_edge_rune_blade_of_silence",
    "name": "Whisperfang",
    "description": "Whisperfang, forged from solidified echoes and tainted starlight, whispers secrets of silence into your ears as it strikes. The blade seems to absorb all noise around it, making each blow a silent scream that can paralyze an enemy's senses. Crafted in the shadowy depths of the Edge Outpost, this weapon is said to have been touched by the very stars themselves, yet its very touch leaves you feeling hollow and lost.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔪",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Silence Target",
      "Reaction Speed Reduction"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Void Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Silence Target",
        "rules": "When you hit a creature with an attack using Whisperfang, there is a 20% chance that the target is rendered silent for 1 minute. The target can use its action to make a Wisdom saving throw (DC 15) to end this effect early."
      },
      {
        "title": "Reaction Speed Reduction",
        "rules": "The attack deals +3 additional damage and reduces the creature's reaction speed by 5%, making it harder for them to react in combat. This effect lasts until the start of your next turn or until the target takes an action."
      }
    ],
    "levelRequirementReason": "Whisperfang requires a level 10 character due to its complexity and power, ensuring it is only available to those who can handle such a weapon.",
    "vendorReason": "The Edge Outpost, known for crafting items that bend the very fabric of reality, is the only place where Whisperfang can be found.",
    "shippingDetail": "Ships via the Void Courier's express service, ensuring it arrives within a week from the time of purchase.",
    "usage": {
      "activation": "Melee attack action",
      "duration": "Instantaneous with ongoing effects",
      "endsWhen": "The target successfully saves or takes an action",
      "charges": "Unlimited"
    },
    "priceReason": "Whisperfang's rarity and unique properties justify its price, offering a significant advantage in combat without being overpowered.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T23:07:48.172654+00:00",
    "aiReviewedAt": "2026-07-23T23:07:48.172654+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronal_repair_service": {
    "id": "the_edge_chronal_repair_service",
    "name": "Temporal Stitcher",
    "description": "The Temporal Stitcher is a gnarled, chronal-repaired device crafted by Wario's finest temporal mechanic. This artifact can instantaneously mend grievous wounds, restoring 50 hit points to the target. With a flick of its switch, it has a chance to reverse the target’s last action by one turn, creating confusion and chaos in combat. Be wary: its repairs come with unpredictable side effects, aging the target by 1d4 turns.",
    "category": "services",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Instant Healing",
      "Reverse Last Action"
    ],
    "vendor": "final_shop",
    "shippedBy": "Quantum Delivery Service",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Instant Healing (50 HP)",
        "rules": "The user targets a creature within 30 feet. The Temporal Stitcher restores 50 hit points to the target. This effect has no save DC and can be used once per day."
      },
      {
        "title": "Reverse Last Action",
        "rules": "Activates as a reaction when the target completes an action, reversing it by one turn. The target must succeed on a DC 15 Dexterity saving throw or suffer the effects of its last action for an additional round. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Temporal Stitcher's unpredictable nature and powerful capabilities necessitate a minimum level to safely wield.",
    "vendorReason": "Wario’s final shop is known for its unique and often questionable wares, including this temporally dubious device.",
    "shippingDetail": "Delivery via Quantum Leap, arriving in a single round trip.",
    "usage": {
      "activation": "Reaction (use once per long rest)",
      "duration": "Instantaneous; ends when the target successfully saves against the reverse effect or completes an action normally",
      "endsWhen": "The next time the target completes an action normally, unless countered by a successful save.",
      "charges": "Once per long rest"
    },
    "priceReason": "The Temporal Stitcher’s unpredictable and powerful effects justify its relatively lower price point.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-23T23:07:21.953740+00:00",
    "aiReviewedAt": "2026-07-23T23:07:21.953740+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronal_drift": {
    "id": "almost_edge_item_chronal_drift",
    "name": "Temporal Shard Fragment",
    "description": "The Temporal Shard Fragment is a crystalline sliver of time, glowing with an unsettling violet hue that seems to ripple and shift like the very fabric of reality itself. When held, it grants a dizzying rush through moments you can't quite grasp, creating an illusionary blur for those who witness your movements. Its pulsating energy also sows confusion in foes, making them unsure if what they see is real or merely a fleeting echo of the past.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 45,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Distortion",
      "Enemy Confusion"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "When activated as an action, you gain advantage on Dexterity (Stealth) checks for 1 minute. The effect ends early if you lose consciousness or if the shard is destroyed."
      },
      {
        "title": "Enemy Confusion",
        "rules": "As a bonus action, you can project a ripple of confusion towards one creature within 30 feet. That creature must succeed on a Wisdom saving throw (DC 15) or become confused for 1 minute. The effect ends early if the shard is destroyed."
      }
    ],
    "levelRequirementReason": "This item requires significant control over time to wield effectively, which is beyond the reach of lower-level characters.",
    "vendorReason": "The Void Merchant deals in all manner of strange and ancient artifacts from realms beyond space and time.",
    "shippingDetail": "Ships directly through a rift in the fabric of reality, arriving with a slight delay.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "1 minute/round (Temporal Distortion), Instantaneous (Enemy Confusion)",
      "endsWhen": "Loss of consciousness, destruction of the shard, or other specified conditions",
      "charges": "Unlimited"
    },
    "priceReason": "Its rare material and unique properties make it a valuable yet balanced addition to any adventurer's arsenal.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:08:03.014586+00:00",
    "aiReviewedAt": "2026-07-23T23:08:03.014586+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_echoing_orb": {
    "id": "almost_edge_item_echoing_orb",
    "name": "Liminal Resonance Orb",
    "description": "The Liminal Resonance Orb is a polished obsidian sphere that hums with the resonant frequencies of forgotten realities. When held, it reveals hidden secrets etched in the very fabric of time and space. The whispers it emits are not mere echoes but tangible threads from the past, allowing you to perceive events that have long been lost to history. This eerie trinket comes with a price: there is a slight risk of sanity loss during use.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "reveals_hidden_secrets",
      "risk_of_sanity_loss"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Spectral Delivery",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Reveals Hidden Secrets",
        "rules": "When activated, the orb grants you advantage on Intelligence (Investigation) checks related to a secret or hidden fact within your line of sight. The effect lasts for 1 minute and ends when you stop concentrating."
      },
      {
        "title": "Risk of Sanity Loss",
        "rules": "There is a 5% chance per use that the orb causes mild sanity loss, reducing Charisma by 1 until the end of your next short or long rest. This effect has no save DC and can only occur once per day."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level to handle its metaphysical nature without risking one's mental stability.",
    "vendorReason": "The Liminal Trader specializes in curiosities that bridge the gap between reality and the unknown, making this orb an appropriate addition to their inventory.",
    "shippingDetail": "Delivered by ethereal messengers who whisper ancient lore while en route.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "1 minute (concentration)",
      "endsWhen": "Concentration ends or you stop holding the orb",
      "charges": "Unlimited, but only one secret per day"
    },
    "priceReason": "The price reflects its uncommon rarity and the mystical knowledge it provides without causing permanent damage.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T23:07:37.018834+00:00",
    "aiReviewedAt": "2026-07-23T23:07:37.018834+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_void_snack": {
    "id": "almost_edge_item_void_snack",
    "name": "Existential Pudding",
    "description": "Existential Pudding is a translucent, shimmering mass of grey that oozes gently in your hand, exuding an aroma that hints at both distant galaxies and forgotten dreams. Consuming it quells hunger momentarily but leaves you with a lingering sense of existential emptiness, as if the universe has whispered its secrets into your soul. The pudding’s origins are unknown, floating through time on the winds of interdimensional storms, and it is said to be harvested by those who wander the void in search of meaning.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍮",
    "stock": 79,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores_hunger_50",
      "temporal_confusion"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "wormhole_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Hunger",
        "rules": "When consumed as a bonus action, Existential Pudding restores 50% of the user's hunger. This effect lasts for 1 hour and can only be used once per day."
      },
      {
        "title": "Temporal Confusion",
        "rules": "Upon consumption, there is a 20% chance that time will warp slightly, causing confusion. The target must make a DC 13 Wisdom saving throw or become confused for 1 minute. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The pudding's philosophical effects are subtle but profound, making it accessible to adventurers of any level.",
    "vendorReason": "Edge Wanderers, who traverse the cosmos in search of strange and wondrous items, often carry Existential Pudding as a treat for their travels.",
    "shippingDetail": "Ships via Wormhole Express, delivered through the fabric of space-time with a delay of one hour due to cosmic interference.",
    "usage": {
      "activation": "bonus action",
      "duration": "1 hour",
      "endsWhen": "the effect expires after 1 hour or if consumed again before the duration ends",
      "charges": "unlimited, but only once per day"
    },
    "priceReason": "The pudding's unique and profound effects make it a rare treat, justifying its high price in experience points.",
    "priceOriginal": 380,
    "priceReviewedAt": "2026-07-23T23:08:36.987998+00:00",
    "aiReviewedAt": "2026-07-23T23:08:36.987998+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_shadow_mask": {
    "id": "animatopia_shadow_mask",
    "name": "Mask of the Silent Hunter",
    "description": "The Mask of the Silent Hunter is a chilling visage forged from shadows and dark feathers, its surface etched with arcane runes that whisper secrets of the night. This eerie accessory grants the wearer uncanny stealth, allowing them to move silently through the world as if they were crafted from shadow itself. With each step, it reduces noise generated by movement, making you an elusive ghost in the eyes of those who seek you. Beware, for prolonged wear may lead to unsettling visions or a sudden urge to hunt small rodents.",
    "category": "forbidden",
    "price": 6200,
    "icon": "👻",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Shadow Stealth",
      "Silent Step"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_spider",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Shadow Stealth",
        "rules": "While wearing the Mask of the Silent Hunter, you gain advantage on Dexterity (Stealth) checks. This effect lasts for 1 hour or until you remove the mask."
      },
      {
        "title": "Silent Step",
        "rules": "You generate no noise when walking, allowing you to move without making any sound. This effect lasts for 1 minute or until you stop wearing the mask."
      }
    ],
    "levelRequirementReason": "This powerful mask requires a minimum level of 8 due to its complex enchantments and arcane components.",
    "vendorReason": "The Beast Bazaar often stocks rare magical trinkets, including the Mask of the Silent Hunter, as they cater to adventurers seeking unique items.",
    "shippingDetail": "Ships via a giant spider courier; delivery may take an extra day due to the arachnid's unpredictable travel routes.",
    "usage": {
      "activation": "Passive effect when worn.",
      "duration": "Shadow Stealth lasts for 1 hour or until mask is removed, Silent Step lasts for 1 minute or until mask is removed.",
      "endsWhen": "Either effect ends when you remove the mask or if you take a full rest.",
      "charges": "Unlimited; recharges after a long rest."
    },
    "priceReason": "The Mask of the Silent Hunter requires significant XP due to its complex enchantments and unique properties, making it one of the most valuable items in the Beast Bazaar's stock.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T23:08:22.139682+00:00",
    "aiReviewedAt": "2026-07-23T23:08:22.139682+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_honeycomb_bomb": {
    "id": "animatopia_honeycomb_bomb",
    "name": "Sticky Situation",
    "description": "Sticky Situation is a compact, honeycomb-packed explosive designed by the mischievous fauns of the ancient Enchanted Forest. Crafted from giant honeycomb and volatile jungle sap, this sticky bomb guarantees to ensnare all within its radius in a gooey, difficult-to-remove mess. Its creators intended it for harmless pranks, but its effects are far more hazardous than they anticipated. Once ignited, the bomb erupts with a loud pop, splattering anyone caught in its 5-foot radius with a thick, adhesive substance that renders them immobile and targets have disadvantage on Dexterity saving throws.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍯",
    "stock": 55,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Explosive Goo",
      "Disadvantage on Dexterity Saves"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_bee",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Explosive Goo",
        "rules": "When thrown, Sticky Situation explodes in a 5-foot radius centered on the wielder. All creatures within this area are engulfed by a thick, sticky substance that deals 4d6 piercing damage and renders them incapacitated until they can remove or break free from the goo (a DC 12 Strength check). The area becomes difficult terrain."
      },
      {
        "title": "Disadvantage on Dexterity Saves",
        "rules": "For one minute after activation, all creatures within the 5-foot radius have disadvantage on Dexterity saving throws. This effect does not stack with other sources of disadvantage."
      }
    ],
    "levelRequirementReason": "The bomb's explosive and adhesive properties are simple enough that even a low-level adventurer can wield it effectively.",
    "vendorReason": "The market's resident fauns often use Sticky Situation for pranks, so they stock it as a memento of their forest antics.",
    "shippingDetail": "Shipped by the giant bees who crafted it; delivery includes a free honeycomb sample.",
    "usage": {
      "activation": "Action: Thrown as an action, or as part of a short rest for multiple uses.",
      "duration": "Instantaneous explosion upon activation.",
      "endsWhen": "Exhausted after one use per day unless recharged by crafting it again.",
      "charges": "1 charge, recharges on a short rest."
    },
    "priceReason": "Balanced to be a common consumable that offers both immediate and lingering effects without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:09:02.921415+00:00",
    "aiReviewedAt": "2026-07-23T23:09:02.921415+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_sparking_drizzle": {
    "id": "doughnut_hole_sparking_drizzle",
    "name": "Sparking Drizzle of Annihilation",
    "description": "The Sparking Drizzle of Annihilation is a surreal, iridescent mist that clings to your weapon like a forgotten memory. It dances and crackles with an otherworldly energy, emanating faint smells of burnt sugar and the ever-looming dread of reality's fragile nature. When applied, it grants a fleeting boost in damage akin to wielding the very essence of destruction itself, but it also snares the wielder in visions of crumbling realities—most often featuring Wario’s ill-fated attempts at baking an indestructible cake.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "damage_boost",
      "visceral_reality_vision"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Dimensional Ripple",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Damage Boost",
        "rules": "When the Sparking Drizzle is applied to a weapon, it grants a temporary +10% damage boost. This effect lasts for 1 minute and can be reactivated once per short or long rest."
      },
      {
        "title": "Visceral Reality Vision",
        "rules": "Once per combat, the wielder must make a Wisdom saving throw (DC 15) against the power of collapsing realities. On failure, they are stunned for 1 round and their next attack roll suffers disadvantage until the end of their next turn."
      }
    ],
    "levelRequirementReason": "This item's unpredictable nature requires a certain level of experience to wield without mishap.",
    "vendorReason": "Hole Hawker has a knack for procuring and selling items that defy the boundaries of logic, making the Sparking Drizzle of Annihilation a perfect fit.",
    "shippingDetail": "Ships via Dimensional Ripple's Swift Courier service, ensuring the drizzle arrives intact in its swirling form.",
    "usage": {
      "activation": "Object interaction to apply to a weapon.",
      "duration": "1 minute or until expended",
      "endsWhen": "The drizzle dissipates after 1 minute of continuous use or when the wielder attacks with the weapon, whichever comes first. It can be reactivated once per short or long rest.",
      "charges": "Recharges on a short or long rest."
    },
    "priceReason": "The item's unique and potentially dangerous nature justifies its high price in experience points.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:08:35.148832+00:00",
    "aiReviewedAt": "2026-07-23T23:08:35.148832+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_chronal_crumb": {
    "id": "doughnut_hole_chronal_crumb",
    "name": "Chronal Crumb of Temporal Displacement",
    "description": "The Chronal Crumb of Temporal Displacement is a shimmering, golden crumb that whispers with the echoes of forgotten moments. When consumed, it allows you to rewind time for three brief seconds, offering a fleeting reprieve from sticky situations or minor mistakes—just enough to correct a misstep or avoid an awkward moment. The crumb's origin lies in the Temporal Marketplace, where it is said Pauline, the Chronal Merchant, sells these crumbs to travelers seeking a bit of temporal fortune. Each crumb is as ephemeral as the moments they can alter, leaving you with a brief but potent reminder that time can be rewritten for a moment.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 45,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "temporal_rewind",
      "momentary_confusion"
    ],
    "vendor": "center_seller",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Rewind",
        "rules": "When consumed, you may rewind time for three seconds. This effect allows you to correct minor mistakes or avoid an embarrassing situation. The crumb must be eaten on your turn as a bonus action. You can use this ability once per short rest."
      },
      {
        "title": "Momentary Confusion",
        "rules": "For the duration of the Temporal Rewind, there is a 20% chance that you or a creature within 5 feet will be confused for one round after the rewind. The effect ends if the confused creature makes a Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "The crumb's temporal effects are manageable and require no specific skill to activate, making it accessible to all adventurers.",
    "vendorReason": "Pauline, the Chronal Merchant, is known for her wares that blur the lines between past and present, and this crumb is a staple in her offerings.",
    "shippingDetail": "The Quantum Courier guarantees swift delivery of your Chronal Crumb, ensuring it arrives fresh from the Temporal Marketplace.",
    "usage": {
      "activation": "Eaten as a bonus action on your turn.",
      "duration": "3 seconds.",
      "endsWhen": "The rewind ends after three seconds or when you take damage.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Chronal Crumb's rarity and the unique temporal effects it provides justify its fair value of 1000 XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:08:51.846634+00:00",
    "aiReviewedAt": "2026-07-23T23:08:51.846634+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_godly_rune_of_prosperity": {
    "id": "earth_land_godly_rune_of_prosperity",
    "name": "Rune of the Golden Harvest",
    "description": "The Rune of the Golden Harvest, a pulsating golden rune crafted by ancient earth spirits, hums with untold power. Its surface glows with an otherworldly light that seems to draw in the very essence of fertility and abundance. This sacred artifact grants its bearer a temporary boon when gathering resources, ensuring no harvest goes uncollected or overlooked. Legends tell of farmers who once wielded this rune reaping crops far beyond their wildest dreams.",
    "category": "premium",
    "price": 1000,
    "icon": "💰",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Resource Gathering Boost",
      "Increased Rare Item Finds"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Celestial Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resource Gathering Boost",
        "rules": "When activated, the bearer gains a +25% bonus to resource gathering checks for 1 hour. This effect can be used once per long rest."
      },
      {
        "title": "Increased Rare Item Finds",
        "rules": "The user has a 20% chance of finding rare items during their next successful resource gathering check, which can occur up to twice per day."
      }
    ],
    "levelRequirementReason": "This rune is accessible to all levels as it offers a valuable boon for adventurers and farmers alike.",
    "vendorReason": "The Earth Emporium specializes in items that honor the natural world, making this rune an ideal product for their inventory.",
    "shippingDetail": "Ships via a swift celestial courier within one day of purchase.",
    "usage": {
      "activation": "Used as an action to activate its effects.",
      "duration": "1 hour, or until expended.",
      "endsWhen": "The effect ends when the duration expires or when the user loses consciousness.",
      "charges": "Recharges after a long rest."
    },
    "priceReason": "This rune offers significant utility without being overpowered, making it a fair value for its rarity and effectiveness in gameplay.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-23T23:09:12.174442+00:00",
    "aiReviewedAt": "2026-07-23T23:09:12.174442+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_obsidian_mirror": {
    "id": "faerun_item_obsidian_mirror",
    "name": "The Gaze of Madness",
    "description": "The Gaze of Madness, a dark obsidian mirror forged from the remnants of ancient horrors, distorts reality to reveal both potential futures and terrifying glimpses into madness itself. Its surface shimmers with an eerie glow as it warps time, offering fleeting visions that can either guide or drive one mad. Use this artifact with extreme caution, for those who gaze upon its depths may find themselves forever entangled in the labyrinth of their own mind.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Glimpse Possible Futures",
      "Risk of Madness"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "blackraven courier",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Glimpse Possible Futures",
        "rules": "Activating this mirror allows you to briefly glimpse one possible future. This effect is instantaneous and has no saving throw. The visions last for 1 minute, during which time you have disadvantage on Wisdom (Insight) checks made to discern reality from illusion."
      },
      {
        "title": "Risk of Madness",
        "rules": "There is a chance that gazing into the mirror will trigger a temporary madness effect (roll d20). The save DC for this effect is 14. If you fail, you must succeed on an additional Wisdom saving throw at the end of your next long rest or suffer from a level 3 madness effect until cured."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and mental fortitude can safely wield this artifact without succumbing to its malevolent influence.",
    "vendorReason": "Waterdeep's Market, known for its forbidden wares, is the only place where such a dangerous yet potentially invaluable item might be found.",
    "shippingDetail": "The Gaze of Madness must be shipped with extreme caution and cannot be delivered in daylight. It requires special handling to ensure it arrives safely.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect followed by a 1-minute duration during which the user has disadvantage on Wisdom (Insight) checks.",
      "endsWhen": "The visions and effects end when you cease gazing into the mirror or upon the completion of its 1-minute duration.",
      "charges": "Unlimited, but limited to once per day."
    },
    "priceReason": "While not a powerhouse item, it is considered rare and dangerous enough that it commands a premium price in the market.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T23:09:21.614731+00:00",
    "aiReviewedAt": "2026-07-23T23:09:21.614731+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_gearset": {
    "id": "connectopia_pioneer_gearset",
    "name": "Reinforced Prospector's Plating",
    "description": "Forged from salvaged mining machinery and reinforced with rare crystalline fragments, this gearset will keep you looking sharp while digging for riches… or just smashing things. It’s surprisingly comfortable, too!",
    "category": "equipment",
    "price": 18000,
    "icon": "⛏️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "armor +25",
      "mining speed +10%",
      "chance to find extra ore"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "sky_cart",
    "levelRequirement": 10
  },
  "pokemon_item_electric_volt_rod": {
    "id": "pokemon_item_electric_volt_rod",
    "name": "Electro-Charged Rod of Fury",
    "description": "The Electro-Charged Rod of Fury hums with a vibrant electric charge that crackles like lightning. Crafted from ancient meteoric iron, this rod's core was forged in the heart of an active volcano. It is said to have been blessed by a legendary Pokémon trainer who sought to harness its fury for battles. Even when wielded in combat, it remains surprisingly ergonomic and comfortable, though one must be cautious not to let its power overwhelm them.",
    "category": "equipment",
    "price": 650,
    "icon": "⚡️",
    "stock": 23,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "zap",
      "stun"
    ],
    "vendor": "pokemart",
    "shippedBy": "PokéExpress",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Zap of Fury",
        "rules": "When activated as a bonus action, the Electro-Charged Rod sends an electric surge at a target within 30 feet. The target must make a DC 15 Dexterity saving throw or be stunned until the end of its next turn."
      },
      {
        "title": "Fury Surge",
        "rules": "The rod grants the wielder advantage on attack rolls and ability checks made to deal bludgeoning damage for 1 minute, starting when the rod is activated. This effect ends if the wielder takes a short rest or drops the rod."
      }
    ],
    "levelRequirementReason": "The rod's power requires a strong understanding of electric attacks and control over one's own abilities.",
    "vendorReason": "Pokemart is known for providing unique and powerful equipment to trainers who seek an edge in their battles.",
    "shippingDetail": "Ships via PokéExpress, typically arriving within three days of purchase.",
    "usage": {
      "activation": "bonus action",
      "duration": "instantaneous (Zap), 1 minute (Fury Surge)",
      "endsWhen": "target saves successfully or wielder takes a short rest (Zap); ends when the effect duration expires (Fury Surge)",
      "charges": "unlimited, but cannot be used if the rod is dropped"
    },
    "priceReason": "The rod's balanced price reflects its unique combination of immediate and sustained benefits within the constraints of a standard D&D 5e game.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T23:09:17.815496+00:00",
    "aiReviewedAt": "2026-07-23T23:09:17.815496+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_ancient_seed": {
    "id": "pokemon_item_ancient_seed",
    "name": "Seed of the First Bloom",
    "description": "The Seed of the First Bloom is said to have been born from the very tears of Celebi, the Pokémon that links all eras. This ancient seed holds a fragment of its creator's power, gently coaxing Pokémon into their destined evolutions with surprising results—sometimes they comply, and sometimes they do not, as Pokémon are famously stubborn. Holding it can increase your companion’s happiness by 15%, making them more receptive to training and commands.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌱",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "evolution incitement",
      "boosted happiness"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Safari Bike Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Evolution Incitement",
        "rules": "This item can be used as an action, with a 30% chance to encourage the evolution of any level 5 or lower Pokémon. If successful, the target gains a +1 bonus to its next Evolution check."
      },
      {
        "title": "Boosted Happiness",
        "rules": "Using this item increases the target Pokémon's happiness by 15%, which lasts for one day and can be used once per week. A Pokémon with high happiness is more likely to obey commands and learn new moves."
      }
    ],
    "levelRequirementReason": "Even young trainers should have access to this artifact, as it can help their first Pokémon bond more closely.",
    "vendorReason": "The Safari Shop deals in rare and useful items for Pokémon enthusiasts, making the Seed of the First Bloom a natural addition.",
    "shippingDetail": "Ships via Safari Bike Express, known for its reliable delivery to remote areas.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous with one-day duration of happiness boost per week",
      "endsWhen": "The effect ends when the target Pokémon's happiness is at maximum or it evolves successfully.",
      "charges": "Unlimited, but only one use per week for happiness boost"
    },
    "priceReason": "The price reflects its rarity and the potential benefits to both trainers and their Pokémon.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:09:27.238360+00:00",
    "aiReviewedAt": "2026-07-23T23:09:27.238360+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_badge_of_valor": {
    "id": "pokemon_item_badge_of_valor",
    "name": "Badge of Valor - Flame",
    "description": "The Badge of Valor - Flame is a molten metal badge that crackles with embers and spits sparks when worn. Crafted from volcanic lava, it warms the wearer to an uncomfortable degree, yet its fiery core amplifies fire-type moves, making every ember feel like a burning challenge. The badge’s power seizes any available fire within reach, channeling it into devastating attacks that can incinerate foes and melt through defenses with ease.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 15,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "fire damage boost",
      "critical hit chance increase"
    ],
    "vendor": "league_store",
    "shippedBy": "League Courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Fire Damage Boost",
        "rules": "When the Badge of Valor - Flame is worn, fire-type attacks deal an additional +2d6 fire damage. This effect persists for as long as the badge is worn."
      },
      {
        "title": "Increased Critical Hit Chance",
        "rules": "The wearer gains a +1 bonus to their attack rolls while wearing the Badge of Valor - Flame, increasing the chance of landing a critical hit by 5%. This benefit lasts until the end of the wearer’s next turn."
      }
    ],
    "levelRequirementReason": "This badge amplifies fire-type attacks and provides a significant power boost; it is best suited for experienced trainers capable of handling its heat.",
    "vendorReason": "The league store stocks this rare item to cater to the most dedicated and powerful Pokémon trainers in the region.",
    "shippingDetail": "Due to its volatile nature, the League Courier ensures safe handling with a special cooling pack for delivery.",
    "usage": {
      "activation": "Passive effect when worn; no activation required.",
      "duration": "Instantaneous and lasts until removed or destroyed.",
      "endsWhen": "The badge is removed or destroyed by fire.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This badge offers a significant boost to fire-type attacks, making it a valuable and rare item for trainers who specialize in these moves.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-23T23:09:42.796007+00:00",
    "aiReviewedAt": "2026-07-23T23:09:42.796007+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_flux_guzzle": {
    "id": "the_edge_flux_guzzle",
    "name": "Chromatic Grog",
    "description": "The Chromatic Grog, a bubbling concoction that tastes of static and regret, is a potent potion brewed by the alchemists of Edge Outpost. Upon consumption, it grants you a surge in reaction speed, allowing you to dodge attacks with uncanny precision. However, as your vision briefly shifts to unsettling hues, you risk losing one action for every two rounds the effect lasts, should you fail a DC 15 Constitution saving throw.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increase_reaction_speed",
      "temporary_blurred_vision"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "express_drone",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Increase Reaction Speed",
        "rules": "You gain advantage on Dexterity (Acrobatics) checks and can make an additional attack of opportunity. This effect lasts for up to two rounds, ending if you fail a DC 15 Constitution saving throw."
      },
      {
        "title": "Temporary Blurred Vision",
        "rules": "For the duration of the effect, your vision shifts to unsettling hues. You have disadvantage on Perception checks and must succeed on a DC 15 Constitution saving throw or lose one action for every two rounds this effect is active."
      }
    ],
    "levelRequirementReason": "Requires at least level 2 to consume, as the potion's effects are too potent for beginners.",
    "vendorReason": "Edge Outpost brews and sells Chromatic Grog due to its alchemical prowess and the unique demand from travelers seeking quick reactions in combat.",
    "shippingDetail": "Shipped via express drone, ensuring the potion remains potent even over long distances.",
    "usage": {
      "activation": "Drink as an action",
      "duration": "Up to two rounds or until you fail a Constitution saving throw",
      "endsWhen": "You lose one action for every two rounds the effect is active, or upon consuming another potion of similar potency",
      "charges": "Unlimited"
    },
    "priceReason": "The Chromatic Grog's price reflects its potent effects and the expertise required to brew it.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:10:00.299671+00:00",
    "aiReviewedAt": "2026-07-23T23:10:00.299671+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_void_plate": {
    "id": "the_edge_void_plate",
    "name": "Nullstone Resonance Plate",
    "description": "Forged from a solidified tear of the void, this plate emits a field of absolute silence. Wearing it grants resistance to sonic damage and allows you to briefly suppress magical effects – though prolonged use might drain your very essence!",
    "category": "equipment",
    "price": 18000,
    "icon": "🛡️",
    "stock": 2,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "resist_sonic_damage",
      "chance_to_suppress_spellcasting",
      "increased_armor_class"
    ],
    "vendor": "final_shop",
    "shippedBy": "void_messenger",
    "levelRequirement": 10
  },
  "doughnut_hole_singing_cruller": {
    "id": "doughnut_hole_singing_cruller",
    "name": "Resonance Cruller",
    "description": "The Resonance Cruller pulses with a gravitational hum that resonates through your body, making you feel as if time itself bends to your will. When consumed, it grants you a fleeting moment where your actions seem to move in slow motion relative to others, allowing you to react just that much faster. The cruller’s doughy exterior is dusted with shimmering grains of stardust, hinting at its celestial origins, and the treat's sweet yet unsettling flavor lingers on your tongue like an echo of distant stars.",
    "category": "consumables",
    "price": 1000,
    "icon": "🎵",
    "stock": 25,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "temporal resonance",
      "enhanced perception"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Packet",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Temporal Resonance",
        "rules": "You gain a +10% bonus to Dexterity (Reaction) checks for the duration. This effect lasts for 3 seconds upon consumption and can be used once per long rest."
      },
      {
        "title": "Enhanced Perception",
        "rules": "For the duration of the temporal resonance, you have advantage on Perception checks made to notice hidden details or anomalies within your immediate surroundings. This effect also grants temporary inspiration points equal to half your proficiency bonus (rounded down)."
      }
    ],
    "levelRequirementReason": "The Resonance Cruller's ability to alter perception and reaction times requires a high degree of discipline and focus, suitable for those who have reached the 9th level.",
    "vendorReason": "Hole Hawker is known for offering unique and potent treats that push the boundaries of culinary experience, making them the perfect vendor for this extraordinary cruller.",
    "shippingDetail": "The Void Packet ensures swift and secure delivery of the Resonance Cruller, guaranteeing its freshness upon arrival.",
    "usage": {
      "activation": "Eaten as a bonus action",
      "duration": "3 seconds",
      "endsWhen": "After the duration ends or you take an action on your turn",
      "charges": "Once per long rest"
    },
    "priceReason": "The Resonance Cruller's rarity and unique effects justify its price, offering a rare opportunity to gain significant tactical advantages in combat.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T23:10:10.873800+00:00",
    "aiReviewedAt": "2026-07-23T23:10:10.873800+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_anomaly_charm": {
    "id": "doughnut_hole_anomaly_charm",
    "name": "Gravitic Shard",
    "description": "The Gravitic Shard is a fragment of solidified anomaly, constantly shifting in weight and subtly warping nearby objects. It emits an invisible gravitational field that affects small metallic items within ten feet, causing them to float slightly or move unpredictably. This charm also has a chance to disrupt enemy attacks within five feet, making it a handy companion for those who enjoy minor chaos but want to avoid losing it altogether.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "gravity_warp_10ft",
      "disruptive_attacks_5ft"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravity Warp (10 ft)",
        "rules": "Small metallic objects within ten feet of the Gravitic Shard have a chance to be affected by an invisible gravitational field, causing them to float slightly or move unpredictably. This effect lasts until the end of each creature's turn in its range."
      },
      {
        "title": "Disruptive Attacks (5 ft)",
        "rules": "Within five feet of the Gravitic Shard, there is a 10% chance that enemy melee attacks miss on a failed Dexterity saving throw. This effect ends if the Gravitic Shard is removed from its location."
      }
    ],
    "levelRequirementReason": "This charm requires no specific level as it provides subtle, non-combat advantages.",
    "vendorReason": "The center seller has a wide variety of unique items that appeal to collectors and adventurers alike, making the Gravitic Shard an ideal addition to their inventory.",
    "shippingDetail": "Ships via Dimensional Courier with next-day delivery guaranteed.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous, lasts until the end of each turn within its range.",
      "endsWhen": "The Gravitic Shard is removed from its location or destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the charm's unique, non-combat utility and its limited area of effect.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:10:08.641227+00:00",
    "aiReviewedAt": "2026-07-23T23:10:08.641227+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_spirit_berry": {
    "id": "animatopia_spirit_berry",
    "name": "Spirit Berry of Tranquility",
    "description": "The Spirit Berry of Tranquility is a glowing, heart-shaped berry plucked from ancient Spirit Vines that stand sentinel over tranquil meadows. Consuming one grants you a soothing calm, allowing you to focus your wisdom in the face of chaos. For a brief moment, fear and panic fade away, leaving only serene clarity. Perfect for calming a fractious companion or steadying a riled beast, this berry is sought after by adventurers seeking to maintain their composure under pressure.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍇",
    "stock": 89,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "Wisdom Focus",
      "Fear Resistance"
    ],
    "vendor": "forest_market",
    "shippedBy": "winged_squirrel express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wisdom Focus",
        "rules": "When you consume the Spirit Berry of Tranquility, you gain advantage on Wisdom saving throws for 1 minute. This effect can be used once per long rest."
      },
      {
        "title": "Fear Resistance",
        "rules": "Additionally, you are immune to fear effects for 30 seconds after consuming the berry. If a creature successfully targets you with an ability that would have frightened you, it instead has no effect on you until your next turn. This feature can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This berry is suitable for all adventurers who might encounter fear or need to remain calm in stressful situations.",
    "vendorReason": "The forest market trades exclusively with local flora and fauna, ensuring the berries are of the highest quality.",
    "shippingDetail": "Shipped by winged squirrel express for swift delivery straight from the meadows to your doorstep.",
    "usage": {
      "activation": "Eaten as a whole",
      "duration": "1 minute and 30 seconds",
      "endsWhen": "The effect ends when you are frightened or if you take damage, whichever comes first. The berry recharges after a short rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This price reflects the rarity and mystical properties of the Spirit Berry, as well as its limited availability.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:10:15.485134+00:00",
    "aiReviewedAt": "2026-07-23T23:10:15.485134+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_forbidden_sigil": {
    "id": "the_edge_forbidden_sigil",
    "name": "Mark of the Unraveling",
    "description": "The Mark of the Unraveling is a dark sigil that pulses with an unsettling aura. It seems to bend reality, distorting shadows into grotesque forms and warping the air around it. Those who dare touch this artifact risk losing their grip on sanity; its touch can either grant fleeting power or unleash chaos within. Only those of iron will and unyielding resolve should attempt to wield such a dangerous relic.",
    "category": "forbidden",
    "price": 1000,
    "icon": "😈",
    "stock": 7,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "reality-warping",
      "shadow manipulation"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "black_raven",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Reality Warp",
        "rules": "As an action, the Mark of the Unraveling can be activated within a 5-foot radius, creating an area where shadows twist and reality distorts. Targets in this area must make a DC 15 Wisdom saving throw or become confused for 1 minute. The effect ends when the user ceases concentration."
      },
      {
        "title": "Shadow Manipulation",
        "rules": "The Mark grants advantage on attack rolls against shadowy creatures and those with the undead type. This benefit lasts until the end of the user's next turn after using an action to activate it."
      }
    ],
    "levelRequirementReason": "Only those who have proven their resilience can wield such a powerful and dangerous artifact.",
    "vendorReason": "The Edge Outpost is known for dealing in the most forbidden and powerful relics, making it the perfect vendor for this item.",
    "shippingDetail": "Ships via Black Raven Courier with a two-day delivery guarantee.",
    "usage": {
      "activation": "action",
      "duration": "concentration up to 1 minute",
      "endsWhen": "user ceases concentration or on the user's next turn after activation",
      "charges": "unlimited, recharges at dawn"
    },
    "priceReason": "The balanced price reflects its rarity and the risk it poses to those who choose to wield it.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-23T23:10:23.957968+00:00",
    "aiReviewedAt": "2026-07-23T23:10:23.957968+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_mythic_heartstone": {
    "id": "the_edge_mythic_heartstone",
    "name": "Core of the Endless Descent",
    "description": "The Core of the Endless Descent is a massive heartstone pulsating with cold energy. It exudes an aura so chilling that it can freeze the air around you, and whispers of ancient magic hint at its origins from the abyssal realms. This relic is said to possess the power to heal grievous wounds and neutralize dark magics, yet it also grants temporary immunity to fear and enhances cold resistance, making it a dangerous yet invaluable asset in any battle against frost or shadow.",
    "category": "premium",
    "price": 1000,
    "icon": "❄️",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "significant_healing_on_use",
      "neutralizes_dark_magic"
    ],
    "vendor": "final_shop",
    "shippedBy": "void_crawler",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Surge",
        "rules": "As an action, the wielder can activate this heartstone to heal themselves for a number of hit points equal to their level. This effect has no save or duration and is limited to once per long rest."
      },
      {
        "title": "Darkness Neutralization",
        "rules": "The Core grants a +2 bonus to saving throws against spells with the darkness descriptor, and can be used as an action to nullify one such spell on a successful DC 15 Wisdom (Insight) check. The effect is exhausted after use."
      }
    ],
    "levelRequirementReason": "Even the lowest levels of adventurers may find value in this relic for its defensive capabilities and ability to heal wounds.",
    "vendorReason": "Final Shop caters exclusively to those seeking mythic artifacts, ensuring they are in capable hands.",
    "shippingDetail": "Ships via the Void Crawler express service, arriving within a week of order placement.",
    "usage": {
      "activation": "action",
      "duration": "instantaneous",
      "endsWhen": "used or expended",
      "charges": "unlimited"
    },
    "priceReason": "The price reflects its mythic rarity and utility, making it a balanced addition to any adventurer's arsenal.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T23:10:25.434099+00:00",
    "aiReviewedAt": "2026-07-23T23:10:25.434099+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_climbing_boots": {
    "id": "grand_country_climbing_boots",
    "name": "Layered Ascent Boots",
    "description": "The Layered Ascent Boots are crafted from a strange, resilient material that seems to have been forged in the heart of an ancient volcano. Each step you take feels like walking on shifting ground, yet you gain a significant advantage when ascending sheer cliffs and rocky faces. They subtly adjust your center of gravity, making even the most precarious climbs feel manageable, while also granting resistance against falling damage. These boots are not just for adventurers; they're for those who dare to reach new heights.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥾",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Climbing Agility",
      "Falling Damage Resistance"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "rope_delivery",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Enhanced Climbing Agility",
        "rules": "While wearing the Layered Ascent Boots, you can take a bonus action to make an additional climbing check. This effect lasts until the end of your next turn."
      },
      {
        "title": "Falling Damage Resistance",
        "rules": "You have resistance to falling damage. This effect is active as long as you are wearing the boots and ends when you remove them or take 20 feet of fall distance in a single movement."
      }
    ],
    "levelRequirementReason": "The complexity and resilience required for these boots necessitate a higher level to master their effects.",
    "vendorReason": "Vertical Vendor specializes in gear that helps adventurers overcome the most challenging terrains, making the Layered Ascent Boots a perfect fit for them.",
    "shippingDetail": "The boots are carefully packed to prevent any damage during transit and delivered by skilled climbers who can ensure safe delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of your next turn",
      "endsWhen": "Removing the boots or taking 20 feet of fall distance in a single movement",
      "charges": "Unlimited"
    },
    "priceReason": "The boots' unique properties and rarity justify this balanced price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:10:29.201857+00:00",
    "aiReviewedAt": "2026-07-23T23:10:29.201857+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_lucky_gearshift": {
    "id": "connectopia_lucky_gearshift",
    "name": "Temporal Cog",
    "description": "The Temporal Cog is a warm, brass-colored gear that hums with an eerie, almost imperceptible rhythm. Crafted from ancient, enchanted bronze and imbued with the essence of forgotten timekeepers, it subtly alters its surroundings. Wario claims it gives him 'an edge,' though his track record suggests it's more unpredictable than helpful in races. The cog has a peculiar knack for revealing rare items and speeding up crafting tasks, but its exact mechanism remains shrouded in mystery.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⚙️",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "time distortion",
      "rarity boost"
    ],
    "vendor": "craft_corner",
    "shippedBy": "swift_wing express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time Distortion",
        "rules": "When activated as a bonus action, the Temporal Cog creates a localized ripple in time that allows the user to rewind time by up to 10 minutes. This effect has a duration of 1 minute and can only be used once per long rest."
      },
      {
        "title": "Rarity Boost",
        "rules": "The Temporal Cog increases the chance of finding rare items in crafting or exploration by +25%. This benefit lasts for 8 hours after each use and can be activated as a bonus action. The effect is cumulative, but only one instance of this boost can be active at any given time."
      }
    ],
    "levelRequirementReason": "The Temporal Cog's unpredictable nature requires users to have some experience in managing its effects.",
    "vendorReason": "Craft Corner specializes in rare and unusual items, including those that can enhance a crafter’s abilities.",
    "shippingDetail": "The Temporal Cog is delivered via Swift Wing Express, ensuring it arrives intact and ready for use.",
    "usage": {
      "activation": "Bonus action to activate the time distortion or rarity boost effects.",
      "duration": "Time Distortion lasts 1 minute; Rarity Boost lasts 8 hours.",
      "endsWhen": "The effect duration ends when the time runs out or the user rests.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Temporal Cog offers significant advantages in crafting and exploration, making its price reflective of its utility.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:10:39.724980+00:00",
    "aiReviewedAt": "2026-07-23T23:10:39.724980+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_starfall_armor": {
    "id": "equestria_item_starfall_armor",
    "name": "Starfall Knight's Breastplate",
    "description": "Forged during a meteor shower in the skies of Canterlot, this Starfall Knight's Breastplate shimmeringly channels the power of fallen stars. Its surface glistens under moonlight, and it whispers the ancient magic of celestial bodies with each step taken by its wearer. This breastplate not only grants a defensive advantage but also has a unique ability to reflect incoming magical attacks, making it a formidable shield against dark sorcery.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌟",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Reflects Magic Attacks",
      "Enhanced Defense"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Cloudsdale Express",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Reflects Magic Attacks",
        "rules": "When an attacker targets the wearer with a magic attack, there is a 15% chance that the attack is reflected back at the caster. This effect can only occur once every short or long rest."
      },
      {
        "title": "Enhanced Defense",
        "rules": "The breastplate increases the wearer's Armor Class by +4 while worn. This effect remains active as long as the breastplate is equipped."
      }
    ],
    "levelRequirementReason": "This breastplate requires a higher level to wield effectively, ensuring it does not overwhelm lower-level adventurers.",
    "vendorReason": "Ponyville Market offers unique and rare items from the Equestria region, making this breastplate an accessible option for those seeking its celestial power.",
    "shippingDetail": "Ships via Cloudsdale Express within one week of purchase.",
    "usage": {
      "activation": "Passive effect when equipped.",
      "duration": "Instantaneous (while worn), ends on removal or destruction of the breastplate.",
      "endsWhen": "Removal from the wearer, destruction of the item, or upon completion of a short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its rarity and the unique celestial magic it channels.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:10:50.150750+00:00",
    "aiReviewedAt": "2026-07-23T23:10:50.150750+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_legendary_apple_of_wisdom": {
    "id": "equestria_item_legendary_apple_of_wisdom",
    "name": "The Apple of Eternal Reflection",
    "description": "The Apple of Eternal Reflection is a gnarled, ancient fruit with a shimmering core that glows faintly. Crafted by the enigmatic scholars of Equestria, it has been passed down through generations. Consuming this apple grants unparalleled strategic insight and perception, allowing you to foresee your foes' moves and outthink them at every turn. Legends say it once belonged to Princess Celestia herself, who used its wisdom to guide her realm.",
    "category": "premium",
    "price": 1000,
    "icon": "🍎",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "back_order",
    "effects": [
      "Strategic Insight",
      "Enhanced Perception"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Royal Airship Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Strategic Insight",
        "rules": "Upon consuming the apple, you gain a +6 bonus to Intelligence checks and saving throws related to strategy and deception. This effect lasts for an hour."
      },
      {
        "title": "Enhanced Perception",
        "rules": "For 10 minutes after eating the apple, you have advantage on perception checks made to notice hidden or subtle details."
      }
    ],
    "levelRequirementReason": "The apple's wisdom is too profound for those less experienced in strategy and tactics.",
    "vendorReason": "As a guardian of Equestria's ancient lore, the Crystal Empire holds this legendary fruit as one of its most precious artifacts.",
    "shippingDetail": "The apple is delivered with utmost care via the Royal Airship Courier, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "1 hour for Strategic Insight, 10 minutes for Enhanced Perception; both effects end when the duration expires.",
      "endsWhen": "The effects end at their respective durations or if you consume another legendary item of similar power.",
      "charges": "Unlimited"
    },
    "priceReason": "The apple's rarity and the profound wisdom it grants justify its moderate price in experience points.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T23:10:42.945859+00:00",
    "aiReviewedAt": "2026-07-23T23:10:42.945859+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_divine_amulet": {
    "id": "midlands_item_divine_amulet",
    "name": "Amulet of Wario’s Favor (Seriously)",
    "description": "Crafted by a minor deity with an inexplicable fondness for Wario’s antics, this amulet of dubious divine favor gleams with an otherworldly sheen. It is said that those who wear it find themselves inadvertently attracting gold coins and small valuables, while their enemies suffer from minor inconveniences—such as dropped items or misplaced gear. The amulet seems to delight in causing such minor misfortunes, though its true nature remains a mystery.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 2,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "attracts_glowing_gold",
      "minor_inconvenience_to_opponents"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dragon_cart",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Attracts Glowing Gold",
        "rules": "When you are attacked by an enemy within 5 feet of you, there is a 20% chance that the amulet will cause a small pile of gold (worth no more than 1d4 x 10 gp) to glow and appear near your feet. You can attempt a DC 15 Wisdom saving throw to resist this effect."
      },
      {
        "title": "Minor Inconvenience to Opponents",
        "rules": "If an enemy within 10 feet of you is hit by an attack, there is a 20% chance that the amulet will cause them to drop one item they are holding or wearing. The dropped item can be retrieved as part of your action on the same turn."
      }
    ],
    "levelRequirementReason": "The amulet requires the wearer to have a certain degree of experience and discipline to properly harness its effects.",
    "vendorReason": "The artisans at Fractured Forge are known for their unique and often whimsical creations, making this item an excellent fit for their inventory.",
    "shippingDetail": "Shipped via a dragon cart, the amulet arrives with a flourish, ensuring its delivery is both dramatic and timely.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; lasts until expended.",
      "endsWhen": "Exhausts after three uses or when destroyed.",
      "charges": "Unlimited, but expends 1 charge each time it successfully causes an effect."
    },
    "priceReason": "The amulet’s rarity and the balance of its effects ensure that it is priced at a reasonable rate for players of appropriate level.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-23T23:11:04.271737+00:00",
    "aiReviewedAt": "2026-07-23T23:11:04.271737+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_warp_pipe_blueprint": {
    "id": "mushroom_kingdom_warp_pipe_blueprint",
    "name": "Dimensional Transit Schematic",
    "description": "The Dimensional Transit Schematic is a meticulously crafted blueprint made from weathered parchment and ink. It depicts an intricate design of a warp pipe, capable of creating a temporary portal to any random location within the Mushroom Kingdom. The schematic’s construction requires precision and patience; once completed, it teleports you and one other creature up to 100 feet away in mere moments. Beware, however, as the journey might lead to unexpected destinations—like Wario’s clutches or a giant slug’s belly.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 34,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Creates a Temporary Warp Portal",
      "Random Teleportation"
    ],
    "vendor": "wario_direct",
    "shippedBy": "delivery_drone",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Temporary Warp Portal",
        "rules": "Activates as an action, creating a 5-foot-radius portal that teleports the user and one other creature up to 100 feet away. The portal lasts for 1 minute or until disrupted by movement or damage."
      },
      {
        "title": "Random Teleportation",
        "rules": "The destination is random within a 100-foot radius of you, with a 5% chance of landing in a dangerous location such as Wario’s hands or a giant slug’s stomach. The portal has no save DC."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level to construct the schematic and handle its unpredictable magic.",
    "vendorReason": "Wario sells this blueprint as a means to enhance his own nefarious schemes, making sure it’s available for those who seek to escape his traps.",
    "shippingDetail": "The schematic is delivered via Wario’s delivery drones, ensuring swift and discreet transport.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "1 minute or until disrupted.",
      "endsWhen": "Movement or damage to the portal ends it immediately.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The schematic’s rarity and unpredictable magic justify its balanced price of 1000 XP.",
    "priceOriginal": 1250,
    "priceReviewedAt": "2026-07-23T23:10:54.246223+00:00",
    "aiReviewedAt": "2026-07-23T23:10:54.246223+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_gold_coin_amplifier": {
    "id": "mushroom_kingdom_gold_coin_amplifier",
    "name": "Coin Magnet Accelerator",
    "description": "The Coin Magnet Accelerator is a gleaming brass contraption, its surface etched with arcane symbols that hum faintly when in use. This device amplifies your coin-collecting prowess by creating a localized field that draws in all nearby gold coins within a 30-foot radius. It's like having a tiny, greedy vacuum, but one you can activate at will. Just be cautious; the local guards might not appreciate the attention it attracts to your person.",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Draws Gold Coins",
      "Enhanced Treasure Finding"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Coin Attraction Radius",
        "rules": "When activated, this device creates a localized field that draws gold coins within a 30-foot radius. This effect lasts for 1 minute and ends immediately if the wearer moves more than 20 feet away from the center of the field."
      },
      {
        "title": "Advantage on Treasure Checks",
        "rules": "The user gains advantage on checks related to finding treasure or making coin-related skill checks. This effect persists for 1 hour after activation and is lost if the user fails a Wisdom saving throw with a DC of 15."
      }
    ],
    "levelRequirementReason": "This device requires no specific level, but it's best suited for beginners who need an edge in coin-collecting.",
    "vendorReason": "Koopa Shop specializes in quirky devices that give players a competitive edge in their adventures.",
    "shippingDetail": "Express delivery ensures the Coin Magnet Accelerator reaches you swiftly and in perfect working condition.",
    "usage": {
      "activation": "A bonus action to activate, ends when the wearer moves more than 20 feet away or after 1 minute.",
      "duration": "1 minute per activation",
      "endsWhen": "The user moves more than 20 feet from the field's center or after 1 minute.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This device is priced at 1000 XP as it provides a significant advantage in coin-collecting, making it a valuable tool for adventurers.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:11:12.377483+00:00",
    "aiReviewedAt": "2026-07-23T23:11:12.377483+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_repair_service": {
    "id": "connectopia_pioneer_repair_service",
    "name": "Wario's Quick Fix",
    "description": "Wario’s Quick Fix is a legendary repair service that can mend any piece of equipment, from rusted swords to broken wagons. With a flick of his wrist and an array of gears and springs, Wario ensures your gear is as good as new in no time. The secret blend of materials he uses is said to have been perfected over decades of field repairs under the Pioneer Post’s banner.",
    "category": "services",
    "price": 1000,
    "icon": "🛠️",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "equipment repair",
      "durability restoration"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "express_messenger_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Equipment Repair",
        "rules": "Activates as a bonus action. Targets one piece of equipment, repairing it completely and restoring its full functionality."
      },
      {
        "title": "Durability Restoration",
        "rules": "Restores 25% of the target equipment’s durability, up to its maximum. This effect does not stack with other durability-restoring effects."
      }
    ],
    "levelRequirementReason": "Anyone can use this service as it requires no specific skill or expertise.",
    "vendorReason": "Wario’s Quick Fix is a staple of Pioneer Post, known for its reliable and efficient repair services across the region.",
    "shippingDetail": "Delivered instantly by the swift messenger drones of Pioneer Post.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the repair is complete or the equipment no longer requires repairs.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The service includes a thorough inspection and restoration, ensuring long-term reliability of your equipment.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:11:27.286648+00:00",
    "aiReviewedAt": "2026-07-23T23:11:27.286648+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_shard_of_the_void": {
    "id": "connectopia_shard_of_the_void",
    "name": "Nullstone Fragment",
    "description": "A Nullstone Fragment is a crystalline shard pulled from the deepest mines of Connectopia. Its surface crackles with unsettling energy, and when agitated, it briefly disrupts magic, creating a small area where spells cast nearby have a chance to fail. Staring into its depths too long risks causing psychic damage. This fragment is a masterwork of Connectopian craftsmanship, forged in the heart of the mines by skilled alchemists who sought to harness the void's energies.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌌",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Brief Magic Disruption",
      "Psychic Hazard"
    ],
    "vendor": "craft_corner",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Brief Magic Disruption",
        "rules": "When activated as a bonus action, the fragment creates a small area (10-foot radius) where any spell cast within has a 25% chance to be silenced. The effect lasts for 1 round and ends if the fragment is destroyed or if another spell is cast within the affected area."
      },
      {
        "title": "Psychic Hazard",
        "rules": "While in the presence of the shard, all creatures within 30 feet must make a DC 15 Wisdom saving throw. On a failed save, they take 2d6 psychic damage and are blinded for 1 minute."
      }
    ],
    "levelRequirementReason": "This fragment is crafted to be accessible to even the most novice adventurers who wish to experiment with its effects.",
    "vendorReason": "Craft Corner specializes in rare and exotic items from Connectopia, ensuring that adventurers have access to powerful yet balanced artifacts like this shard.",
    "shippingDetail": "Ships via the dimensional portal, which may result in a slight delay due to fluctuating space-time distortions.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 round per use",
      "endsWhen": "Destroyed or another spell is cast within the affected area",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects its rarity and the risks involved in using it, making it a valuable yet manageable purchase for adventurers.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:11:09.141396+00:00",
    "aiReviewedAt": "2026-07-23T23:11:09.141396+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_waterdeep_guildmark": {
    "id": "faerun_item_waterdeep_guildmark",
    "name": "Waterdeep Docks Guild Mark",
    "description": "The Waterdeep Docks Guild Mark is a heavy brass token stamped with the guild's seal. It grants you access to the exclusive loading and unloading zones, where only the most trusted dockworkers may venture. Rumor has it that this token once belonged to an esteemed deckhand who saved the docks from a catastrophic storm. With this mark, your reputation among the dockworkers rises by one, earning you both respect and potential new opportunities.",
    "category": "faction",
    "price": 1000,
    "icon": "⚓",
    "stock": 75,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "exclusive access",
      "reputation boost"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Exclusive Access",
        "rules": "You gain access to restricted loading and unloading zones. This effect lasts until the end of your next turn."
      },
      {
        "title": "Reputation Boost",
        "rules": "Your reputation with dockworkers increases by one, providing a +1 bonus to Charisma (Persuasion) checks made within the docks. This benefit is temporary and ends after 24 hours."
      }
    ],
    "levelRequirementReason": "This item provides basic access that any aspiring dockworker can obtain.",
    "vendorReason": "The Waterdeep Market often sells items related to local guilds for their customers.",
    "shippingDetail": "Ships are delivered directly from the docks, ensuring your item is fresh and reliable.",
    "usage": {
      "activation": "Instantaneous upon receiving the token.",
      "duration": "Until the end of your next turn for exclusive access; Reputation boost lasts for 24 hours.",
      "endsWhen": "Upon expiration or loss of the token.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price is adjusted to reflect a common item that grants basic but valuable access.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T23:11:18.572282+00:00",
    "aiReviewedAt": "2026-07-23T23:11:18.572282+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_scorched_ember": {
    "id": "midlands_item_scorched_ember",
    "name": "Dragon's Breath Confection",
    "description": "Dragon's Breath Confection is a wickedly delightful confection, its sugary exterior masking an inferno of fiery essence. When consumed, it grants the imbiber a searing boost to their fire-based attacks for three turns, and there’s a tantalizing 5% chance that any enemy armor will ignite in a blaze of glory. Don't be fooled by this sweet treat; it's crafted with the very breath of dragons, making it a rare find from the Fractured Forge.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Fire Damage Boost",
      "Chance to Ignite Armor"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Damage Boost",
        "rules": "Upon activation by consumption, this confection grants the imbiber a +10 bonus to fire damage for three turns. The effect ends immediately if the imbiber is incapacitated or if they take any damage."
      },
      {
        "title": "Chance to Ignite Armor",
        "rules": "There is a 5% chance that any enemy within range of your next attack will have their armor ignite, dealing an additional 10 fire damage and setting it ablaze for the duration of the encounter. This effect can only occur once per encounter."
      }
    ],
    "levelRequirementReason": "This confection is designed for novices to dabble in dragonish might without overextending their abilities.",
    "vendorReason": "The Fractured Forge specializes in crafting items from the rarest and most dangerous materials, making Dragon's Breath Confection a perfect addition to their inventory.",
    "shippingDetail": "Express delivery ensures this fiery confection arrives fresh and potent for its intended use.",
    "usage": {
      "activation": "Eaten as a consumable item",
      "duration": "3 turns",
      "endsWhen": "The imbiber is incapacitated or takes damage, or after the duration expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted with dragon's breath and rare ingredients, this confection offers a significant boost to fire-based abilities at an appropriately high cost.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T23:11:38.018274+00:00",
    "aiReviewedAt": "2026-07-23T23:11:38.018274+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_chronometric_shard": {
    "id": "midlands_item_chronometric_shard",
    "name": "Time's Echo",
    "description": "Time's Echo is a crystalline shard that glows with a soft, pulsating blue light. Crafted from the very fabric of time itself, it allows its wielder to briefly reverse their last action, effectively undoing minor mistakes or exploiting them for gain. However, using this power comes at a risk; there’s a 15% chance each use that a minor temporal distortion occurs, potentially causing unintended consequences. Holding Time's Echo grants you heightened perception of time-based phenomena, enhancing your awareness and decision-making abilities.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Rewind Last Action",
      "Temporal Distortion"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "swift_peregrine_Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Last Action",
        "rules": "As a reaction, you can use Time's Echo to reverse the last action you took. This effect is usable once per long rest."
      },
      {
        "title": "Temporal Distortion",
        "rules": "There is a 15% chance each time you use Time's Echo that a minor temporal distortion occurs. If this happens, roll a d20; on an even result (DC 15), the effect fails to resolve correctly, potentially causing unintended consequences."
      }
    ],
    "levelRequirementReason": "Time's Echo is accessible early in one's career as it can be used to correct minor mistakes without significant risk.",
    "vendorReason": "The Midlands Merchant has a reputation for selling rare and ancient artifacts, including magical curiosities like Time's Echo.",
    "shippingDetail": "Ships via the Swift Peregrine Courier service, ensuring timely delivery.",
    "usage": {
      "activation": "Reaction (use once per long rest)",
      "duration": "Instantaneous",
      "endsWhen": "The effect resolves or is interrupted by another action",
      "charges": "1/long rest"
    },
    "priceReason": "Time's Echo provides a powerful but limited ability to manipulate time, making it valuable yet not overpowered.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:12:02.129532+00:00",
    "aiReviewedAt": "2026-07-23T23:12:02.129532+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_forbidden_dark_dough": {
    "id": "leclaire_isle_item_forbidden_dark_dough",
    "name": "Forbidden Dark Dough of the Shifting Sands",
    "description": "Forged from ancient, unstable dough harvested only during the darkest nights, this Forbidden Dark Dough of the Shifting Sands subtly warps reality around its user. The substance is said to make you crave more and more, yet it leaves a lingering corruption that weakens your resolve over time. Each morsel consumed not only amplifies these effects but also drains your wisdom, leaving you increasingly susceptible to the dark whims of fate.",
    "category": "forbidden",
    "price": 1000,
    "icon": "😈",
    "stock": 2,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Reality Warp",
      "Addiction"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Night Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Reality Warp",
        "rules": "The user's immediate area (10-foot radius) has a 25% chance each round to randomly shift location for the duration of their turn. This effect ends if the user moves more than 5 feet or if they are hit by an attack."
      },
      {
        "title": "Addiction",
        "rules": "The user gains a temporary addiction that causes them to consume the dough over time, reducing Wisdom by 1 at the end of each long rest. This effect can be resisted with a successful DC 15 Wisdom saving throw, which reduces the Wisdom penalty by half."
      }
    ],
    "levelRequirementReason": "This item requires significant control to avoid its corrupting effects.",
    "vendorReason": "Pastry Palace has a reputation for selling items that blur the line between culinary and magical, making this forbidden dough an appropriate addition.",
    "shippingDetail": "Delivered only during the night by the Night Courier, ensuring the item arrives in its most potent form.",
    "usage": {
      "activation": "Instantaneous consumption as a bonus action",
      "duration": "Until the end of your turn or if you move more than 5 feet",
      "endsWhen": "You take damage or move more than 5 feet",
      "charges": "Unlimited, but each use is considered one charge for tracking purposes"
    },
    "priceReason": "Balanced to ensure it remains a significant yet not overpowered addition to the player's arsenal.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T23:11:31.926671+00:00",
    "aiReviewedAt": "2026-07-23T23:11:31.926671+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_crusty_charm": {
    "id": "leclaire_isle_item_crusty_charm",
    "name": "Crusty Charm of Unyielding Patience",
    "description": "The Crusty Charm of Unyielding Patience is a relic from the ancient Dough Folk, crafted from centuries-old bread dough. It's said to imbue its wearer with the patience and resilience of a master baker, slowing their pace but bolstering their defenses against the world's impatience. Those who wear it find themselves steadfast in the face of adversity, though they might also be seen as overly deliberate by those around them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧱",
    "stock": 76,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Slow",
      "Increased Toughness"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "delivery_only",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slow",
        "rules": "The wearer's speed is reduced by 10 feet. This effect is passive and does not require an action to activate. The charm's influence persists until the end of a long rest, at which point it can be recharged."
      },
      {
        "title": "Increased Toughness",
        "rules": "The wearer gains +1 to their Armor Class (AC) while wearing this charm. This effect is also passive and does not require any action. It remains in effect until the end of a long rest."
      }
    ],
    "levelRequirementReason": "This charm requires no specific level, as it provides a subtle but useful benefit to anyone who needs extra patience or defensive prowess.",
    "vendorReason": "Sweet Suppliés specializes in goods that enhance the quality of life for its patrons, and this charm fits well with their mission to provide unique and beneficial items.",
    "shippingDetail": "The charm is shipped via special delivery courier to ensure it arrives at its destination without being tampered with or damaged in transit.",
    "usage": {
      "activation": "Passive effect, no activation required.",
      "duration": "Until the end of a long rest.",
      "endsWhen": "A long rest.",
      "charges": "Recharges after a long rest."
    },
    "priceReason": "The charm's unique and beneficial effects, combined with its rarity as an ancient Dough Folk relic, justify this fair price in experience points.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:11:42.382699+00:00",
    "aiReviewedAt": "2026-07-23T23:11:42.382699+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_layered_scale": {
    "id": "grand_country_layered_scale",
    "name": "Echoing Scale of the Spiral Peak",
    "description": "Hewn from a creature that thrives in the enigmatic layers of the Spiral Peaks, this scale whispers tales of forgotten events and hidden treasures. Worn as armor or jewelry, it amplifies your senses, enhancing perception by 5% and granting an uncanny knack for locating misplaced items with a 10% chance to detect them unseen. The scale also allows you to hear echoes of the past for one turn each day, unlocking secrets buried in forgotten times.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 42,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Enhanced Perception",
      "Hidden Object Detection"
    ],
    "vendor": "layer_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Enhanced Perception",
        "rules": "This effect increases your perception by 5%, allowing you to better notice and understand environmental details. It is a passive ability, always active while wearing the scale."
      },
      {
        "title": "Hidden Object Detection (10%)",
        "rules": "The wearer has a 10% chance of detecting hidden or misplaced objects within their reach. This effect can be used once per day and requires no action to activate."
      }
    ],
    "levelRequirementReason": "This scale is crafted from a creature that thrives in the extreme conditions of the Spiral Peaks, making it too difficult for lower-level characters to handle.",
    "vendorReason": "The layer market specializes in exotic and rare items found in the enigmatic layers of the Spiral Peaks, making this scale an appropriate addition to their offerings.",
    "shippingDetail": "Ships via giant snail, ensuring safe delivery but with a delay of one week.",
    "usage": {
      "activation": "Passive and instantaneous (Hidden Object Detection once per day).",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after use or removed from the wearer.",
      "charges": "1/Day"
    },
    "priceReason": "This price reflects the rarity and crafting complexity of the scale, balancing its unique abilities with standard market values.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:12:11.504463+00:00",
    "aiReviewedAt": "2026-07-23T23:12:11.504463+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_godly_geode_of_weightlessness": {
    "id": "grand_country_godly_geode_of_weightlessness",
    "name": "The Null Sphere",
    "description": "The Null Sphere, forged from the molten heart of a collapsing gravity well, feels like an empty void. It warps your own mass, allowing you to float effortlessly or pin heavy objects with ease. This geode is a masterwork of arcane and gravitational forces, perfect for evading attacks or crushing foes underfoot. Holding it requires focus; too many missteps could result in unintended consequences, as you've seen in the tales of Wario's clumsy attempts.",
    "category": "premium",
    "price": 1000,
    "icon": "🎈",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "Mass Manipulation",
      "Enhanced Stability"
    ],
    "vendor": "side_seller",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mass Manipulation",
        "rules": "As a bonus action, activate to become either weightless or have triple your weight. This effect lasts for two turns and has a 15% chance of nullifying an enemy's attack against you during the duration."
      },
      {
        "title": "Enhanced Stability",
        "rules": "While the Null Sphere is active, your movement speed increases by 30%, and you gain resistance to falling damage. This effect persists until the duration ends or you use a reaction to negate an attack."
      }
    ],
    "levelRequirementReason": "The item's complexity and the need for precise control make it suitable only for those of at least first level.",
    "vendorReason": "Side Seller often deals in unique, powerful items that push the boundaries of physics and magic, making The Null Sphere a fitting addition to their inventory.",
    "shippingDetail": "Ships via dimensional rift, ensuring it arrives intact but requiring careful handling during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "2 turns or until the duration ends (up to 1 minute)",
      "endsWhen": "The duration ends when the effect is used up or you end your turn with the item in hand, or if you use a reaction to negate an attack.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Null Sphere's rarity and unique properties justify its price of 1000 XP.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T23:12:04.362571+00:00",
    "aiReviewedAt": "2026-07-23T23:12:04.362571+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronometric_brace": {
    "id": "the_edge_chronometric_brace",
    "name": "Temporal Shunt",
    "description": "The Temporal Shunt is a heavy obsidian brace that pulses with distorted time, its surface etched with arcane sigils. When worn, it grants brief bursts of temporal acceleration, allowing you to dash through foes and snatch shiny loot with ease. The brace also increases your chance to dodge attacks, making you nimbler in the heat of battle. Wielders have found that this artifact is a boon for escaping dire situations, though they must be cautious not to step too far into the future.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏱️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "temporal acceleration",
      "dodge bonus"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "warp_carrier",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Temporal Acceleration",
        "rules": "Activates as a reaction when you are targeted by an attack or an effect that would impose movement. You gain a +2 bonus to your Dexterity (Acrobatics) checks and can use the Dash action without expending movement. This effect lasts for 1 minute, but it ends if you take any damage or if you voluntarily end it early."
      },
      {
        "title": "Dodge Bonus",
        "rules": "You gain a +1 bonus to Dexterity saving throws when targeted by an attack or effect that would impose movement. This bonus increases to +2 while you are within 5 feet of an ally who has the Temporal Shunt equipped. The bonus lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The Temporal Shunt requires a high level to harness its temporal distortions effectively, ensuring that only experienced adventurers can wield it.",
    "vendorReason": "Edge Outpost specializes in rare and exotic equipment, making the Temporal Shunt an ideal addition to their inventory.",
    "shippingDetail": "Ships via warp carrier; delivery time is significantly reduced but requires a special license for importation.",
    "usage": {
      "activation": "Reaction or on use, depending on the effect",
      "duration": "1 minute per use",
      "endsWhen": "You take damage or voluntarily end it early",
      "charges": "Unlimited; recharges at dawn"
    },
    "priceReason": "The Temporal Shunt is priced fairly given its limited recharge and the unique temporal effects, making it a strategic but not overpowered item.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:12:11.209900+00:00",
    "aiReviewedAt": "2026-07-23T23:12:11.209900+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_void_sanctuary": {
    "id": "the_edge_void_sanctuary",
    "name": "Nullspace Shroud",
    "description": "The Nullspace Shroud is a shimmering veil of nothingness, woven from the very essence of void and silence. This premium shroud grants resistance to void energies and suppresses magical effects in a radius around you, creating a sanctuary where chaos fades into calm. Crafted by ancient scholars who sought refuge from the madness of creation itself, it hums with an eerie yet serene power that only those attuned to the void can truly understand.",
    "category": "premium",
    "price": 1000,
    "icon": "🌫️",
    "stock": 1,
    "rarity": "epic",
    "stockType": "delivery_only",
    "effects": [
      "grant_resistance_to_void_damage",
      "suppress_magic_effects"
    ],
    "vendor": "final_shop",
    "shippedBy": "Spectral Messenger",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Grant Resistance to Void Damage",
        "rules": "When you take damage from a void-based source, you have advantage on the saving throw. This effect lasts for an hour and can be reactivated once per long rest."
      },
      {
        "title": "Suppress Magic Effects",
        "rules": "Any magical effects within 10 feet of you are suppressed while the shroud is active. The suppression lasts until the end of your next turn or when you use a bonus action to dismiss it. Creatures can make a Wisdom saving throw (DC 15) at the start of each of their turns to break free from this effect."
      }
    ],
    "levelRequirementReason": "The intricate weave of the Nullspace Shroud requires a high degree of arcane knowledge and spiritual fortitude, making it suitable only for those who have reached at least 10th level.",
    "vendorReason": "Final Shop specializes in rare and ancient artifacts that offer unique protection against the unknown threats lurking beyond the veil of reality.",
    "shippingDetail": "The Spectral Messenger ensures swift delivery, but due to its ethereal nature, the shroud must be kept within a special containment field during transit to preserve its integrity.",
    "usage": {
      "activation": "Activates as an action. Can be reactivated once per long rest.",
      "duration": "One hour or until dismissed",
      "endsWhen": "At the end of your next turn or when dismissed, or if you take damage from a non-void-based source during its duration",
      "charges": "Unlimited"
    },
    "priceReason": "The Nullspace Shroud is priced at 1000 XP for its rare construction materials and the arcane knowledge required to weave such a protective barrier.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-23T23:12:32.764489+00:00",
    "aiReviewedAt": "2026-07-23T23:12:32.764489+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_gloomstone_amulet": {
    "id": "pokemon_item_gloomstone_amulet",
    "name": "Gloomstone Amulet of Shadow Whispers",
    "description": "The Gloomstone Amulet of Shadow Whispers is a dark, twisted amulet forged from the essence of Gloom, a shadowy Pokémon known for its malevolent whispers. Its surface glows faintly with an eerie, violet light, and those who wear it feel compelled to speak in hushed tones. The amulet amplifies one's stealth to an unnatural degree, making the wearer nearly invisible in shadows. However, prolonged use can leave the user feeling increasingly detached from reality, as if the whispers are slowly driving them mad.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Stealth Amplification",
      "Shadow Damage and Confusion"
    ],
    "vendor": "pokemart",
    "shippedBy": "express_mail",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Stealth Amplification",
        "rules": "The wearer gains a +20% bonus to stealth checks. This effect is active as long as the amulet remains on, with no limit on uses per day."
      },
      {
        "title": "Shadow Damage and Confusion",
        "rules": "When the wearer attacks with a melee weapon, they deal an additional 1d6 shadow damage and have a 10% chance to confuse their target (target is incapacitated for 1d4 rounds). The confusion effect ends when the target makes a successful Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "Crafted from the essence of Gloom, this amulet's power is too great for those below level 20 to safely wield.",
    "vendorReason": "Pokemart specializes in exotic and powerful items related to Pokémon, making it a fitting vendor for the Gloomstone Amulet of Shadow Whispers.",
    "shippingDetail": "The amulet is shipped via express mail with a delivery delay of one week due to its shadowy nature.",
    "usage": {
      "activation": "Passive effect; no activation required, always on as long as the amulet remains worn.",
      "duration": "Instantaneous; does not expire or require recharging.",
      "endsWhen": "The amulet is removed from the wearer's body or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's mythic rarity, powerful effects, and the difficulty of acquiring Gloomstone.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:12:49.868117+00:00",
    "aiReviewedAt": "2026-07-23T23:12:49.868117+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_trainer_badge_scroll": {
    "id": "pokemon_item_trainer_badge_scroll",
    "name": "Scroll of the Rising Star Trainer",
    "description": "The Scroll of the Rising Star Trainer is a meticulously crafted parchment adorned with symbols of burgeoning skill. Unfurl it during a critical battle to gain temporary proficiency in your chosen style, allowing you to unleash attacks that feel like they are born from years of experience. Its ink glows faintly under moonlight, hinting at the young trainer's potential. This scroll does not confer mastery overnight but can be the spark that ignites victory.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Battle Proficiency Boost",
      "Increased Critical Hit Chance"
    ],
    "vendor": "safari_shop",
    "shippedBy": "standard_mail",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Battle Proficiency Boost",
        "rules": "Activate as a bonus action at the start of your turn. You gain temporary proficiency in one battle style (melee, ranged, or magic) until the end of your next long rest."
      },
      {
        "title": "Increased Critical Hit Chance",
        "rules": "Increases your critical hit chance by 5% for a total duration of 1 hour per use. This effect stacks with other sources of critical hit chance up to +20%. The scroll's glow intensifies as this effect approaches its limit."
      }
    ],
    "levelRequirementReason": "Requires character level 8 to effectively utilize the scroll's power without overwhelming its effects.",
    "vendorReason": "The Safari Shop, known for its vast knowledge of trainers and their journeys, offers this scroll as a token of encouragement for young and promising trainers.",
    "shippingDetail": "Ships via standard mail within the region; delivery can take up to one week depending on local post office delays.",
    "usage": {
      "activation": "Bonus action at the start of your turn",
      "duration": "Until the end of your next long rest for proficiency, or 1 hour for critical hit chance",
      "endsWhen": "The effect ends when you complete a long rest or if the scroll is destroyed in battle.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its unique benefits and rarity as an uncommon item for level 8 trainers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:12:26.741875+00:00",
    "aiReviewedAt": "2026-07-23T23:12:26.741875+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_evolution_seed_vibrant": {
    "id": "pokemon_item_evolution_seed_vibrant",
    "name": "Evolution Seed - Vibrant Bloom",
    "description": "The Evolution Seed - Vibrant Bloom pulses with a vibrant, otherworldly glow. Crafted from the essence of a legendary Pokémon’s evolution, this seed accelerates your partner's growth and can trigger an unexpected bloom that spreads across the battlefield. When planted near your Pokémon, it releases a surge of energy that heals 100 HP and increases stat growth by 20% for one turn. However, the rapid transformation may attract the attention of rival trainers, demanding immediate action to secure your Pokémon’s new form.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌸",
    "stock": 90,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Heals Pokémon for 100 HP",
      "Increases Stat Growth by 20% for One Turn"
    ],
    "vendor": "league_store",
    "shippedBy": "express_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Bloom",
        "rules": "When the seed is planted near a partner Pokémon, it releases a burst of energy that heals the target for 100 hit points. The effect is instantaneous and applies only once per use."
      },
      {
        "title": "Growth Acceleration",
        "rules": "The seed increases the stat growth by 20% for one turn upon planting, enhancing your Pokémon’s potential for evolution or growth. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "This seed is accessible to beginning trainers who wish to nurture their Pokémon's growth and evolution.",
    "vendorReason": "The league store caters to both aspiring and seasoned trainers looking for tools to enhance their Pokémon’s abilities.",
    "shippingDetail": "Express mail delivers the seed within a week, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Planting the seed near your partner Pokémon.",
      "duration": "Instantaneous; lasts for one turn.",
      "endsWhen": "The effect ends when the turn ends or if the Pokémon is no longer adjacent to the seed.",
      "charges": "Once per day"
    },
    "priceReason": "The balanced price reflects the seed's unique properties and the effort required to craft it from legendary Pokémon essence.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:12:38.762774+00:00",
    "aiReviewedAt": "2026-07-23T23:12:38.762774+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_godly_seed_of_ascension": {
    "id": "grand_country_godly_seed_of_ascension",
    "name": "Seed of Ascendancy",
    "description": "The Seed of Ascendancy is a pulsating, glowing seed that exudes the raw power of The Grand Country—a realm where the very fabric of reality bends and distorts. Consuming it grants you an instant burst of fortitude, allowing you to phase through solid objects for a fleeting moment. This divine gift also enhances your movement speed by 20%, enabling you to traverse perilous terrain with ease—just remember, getting stuck can be catastrophic.",
    "category": "equipment",
    "price": 1000,
    "icon": "💫",
    "stock": 3,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "phase_through_solid_objects",
      "increase_movement_speed"
    ],
    "vendor": "side_seller",
    "shippedBy": "celestial_whale",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Phase Through Solid Objects",
        "rules": "As a bonus action, you may phase through solid objects for 5 seconds. You are immune to all damage and effects from being in the same space as another creature during this period. This ability ends if you are struck by an attack or spell."
      },
      {
        "title": "Increase Movement Speed",
        "rules": "For the duration of your turn, your movement speed is increased by 20%. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The Seed of Ascendancy requires minimal magical power to activate but still demands caution.",
    "vendorReason": "Side Seller, a quirky vendor known for unconventional items, stocks this divine seed as part of their eclectic collection.",
    "shippingDetail": "The Seed is delivered via the swift and majestic Celestial Whale, ensuring timely arrival.",
    "usage": {
      "activation": "Bonus action",
      "duration": "5 seconds (ends if struck by an attack or spell)",
      "endsWhen": "Struck by an attack or spell, end of your turn",
      "charges": "Unlimited"
    },
    "priceReason": "The Seed's balanced price reflects its unique utility and the risk involved in its use.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-23T23:12:41.871673+00:00",
    "aiReviewedAt": "2026-07-23T23:12:41.871673+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_student_rally_flag": {
    "id": "kivotos_item_student_rally_flag",
    "name": "The Crimson Cipher",
    "description": "The Crimson Cipher stands tall, its vibrant crimson fabric shimmering with an ancient cipher that whispers tales of forgotten battles. When unfurled in the heat of a skirmish, it instantly boosts the coordination and morale of nearby student combatants, making them dance through their strikes as one. This flag, a favorite among the 'Shadow Syndicate,' can be the deciding factor in any impromptu club battle or challenge, turning even the most chaotic encounters into well-coordinated duels.",
    "category": "faction",
    "price": 1000,
    "icon": "🚩",
    "stock": 20,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Boosts Coordination",
      "Enhances Morale"
    ],
    "vendor": "club_supply",
    "shippedBy": "standard_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boosted Coordination",
        "rules": "When activated by a student combatant within 30 feet, all allies within 10 feet gain advantage on Dexterity (Athletics) checks and saving throws for the duration of one short rest. This effect requires no verbal or somatic components."
      },
      {
        "title": "Enhanced Morale",
        "rules": "All students within 30 feet gain a +2 bonus to their Charisma (Persuasion) checks and have advantage on saving throws against fear effects for the duration of one short rest. This effect has no charges and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This flag is designed for novice students who need a morale boost but may not yet have mastered advanced combat techniques.",
    "vendorReason": "Club Supply caters to the needs of student clubs and factions, including the 'Shadow Syndicate'.",
    "shippingDetail": "Ships via standard mail within 3 days.",
    "usage": {
      "activation": "Activates as a bonus action when unfurled by a student combatant.",
      "duration": "Instantaneous effect, lasts for the duration of one short rest.",
      "endsWhen": "The effect ends when the user completes their next turn or if the flag is furled.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced to provide a significant morale and coordination boost without overshadowing more powerful items.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:13:14.456303+00:00",
    "aiReviewedAt": "2026-07-23T23:13:14.456303+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mythic_harmonic_resonator": {
    "id": "kivotos_item_mythic_harmonic_resonator",
    "name": "The Echoing Void",
    "description": "The Echoing Void is a shimmering obsidian device, its surface etched with arcane symbols that glow faintly in response to Kivotos' chaotic energies. This relic resonates with the very fabric of the academy, emitting unpredictable waves of pure chaos that can either aid or hinder those within its radius. Use it wisely, for summoning a horde of sentient textbooks is not unheard of, and such occurrences are far from accidental!",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "causes_unpredictable_effects",
      "summons_sentient_textbooks"
    ],
    "vendor": "student_store",
    "shippedBy": "delivery_only",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unpredictable Effects",
        "rules": "When activated, the Echoing Void releases a wave of chaotic energy that affects all creatures within 10 feet. Targets have a 50% chance to be confused for 1 minute. This effect has no save DC and can only be used once per long rest."
      },
      {
        "title": "Sentient Textbooks",
        "rules": "There is a 25% chance that, upon activation, the Echoing Void will summon one or more sentient textbooks within 30 feet. These books are neutral and do not attack but can be commanded by the user to perform simple tasks. The effect lasts until the next dawn."
      }
    ],
    "levelRequirementReason": "Beginners at Kivotos' Academy need a way to test their skills without causing too much damage.",
    "vendorReason": "The student store often stocks items that can help students practice and experiment safely.",
    "shippingDetail": "Ships via Kivotos' Academy Express, delivered within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until the next dawn for sentient textbooks summoned.",
      "endsWhen": "The next dawn or when the user dismisses it as an action.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1,000 XP, this price reflects its mythic rarity and unpredictable effects.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T23:13:32.650982+00:00",
    "aiReviewedAt": "2026-07-23T23:13:32.650982+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_ritual_consultation": {
    "id": "the_edge_ritual_consultation",
    "name": "Adept's Insightful Consultation",
    "description": "Seek out Adept's Insightful Consultation at Edge Outpost, where you can spend an hour engaging with a grizzled occultist who specializes in 'interpreting the echoes.' This ancient sage offers cryptic advice that could turn your next adventure into legend or lore. For those seeking to identify cursed items, their keen eye and uncanny wisdom offer a 20% chance of revealing such artifacts hidden among your gear. The consultation is a passive experience, where the adept's words linger like shadows, providing you with one cryptic piece of advice that could change the course of your journey.",
    "category": "services",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "reveal_cursed_item_chance_20%",
      "receive_cryptic_advice_passively"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Cursed Item Chance",
        "rules": "For a 20% chance, this adept can identify cursed items hidden among your gear. This effect is passive and requires no action to activate."
      },
      {
        "title": "Receive Cryptic Advice Passively",
        "rules": "The consultation grants one cryptic piece of advice that offers guidance or insight into ongoing adventures. This effect lasts until the end of your next long rest, providing you with a fleeting but potent leg-up on your current quest."
      }
    ],
    "levelRequirementReason": "This service is available to all adventurers seeking knowledge and protection from unseen threats.",
    "vendorReason": "Edge Outpost prides itself on providing essential services to adventurers in need of guidance and protection against the unknown.",
    "shippingDetail": "The consultation is delivered directly by a trusted messenger hawk, ensuring swift delivery from the adept's secluded study.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of your next long rest.",
      "endsWhen": "At the conclusion of your next long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the adept's expertise and the value of cryptic yet insightful advice in a dangerous world.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:13:08.466457+00:00",
    "aiReviewedAt": "2026-07-23T23:13:08.466457+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_godly_chronarium": {
    "id": "the_edge_godly_chronarium",
    "name": "Chronarium of Shifting Sands",
    "description": "The Chronarium of Shifting Sands is a shimmering glass orb encased in intricate silver filigree, its interior filled with golden sands that swirl and shift like time itself. This ancient artifact allows its wielder to glimpse fleeting glimpses into the future or rewind minor events, but tampering too deeply risks creating temporal paradoxes. The device hums softly as it bends reality, a warning to those who dare to toy with the fabric of time.",
    "category": "premium",
    "price": 850000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Glimpse Future",
      "Rewind Minor Events"
    ],
    "vendor": "final_shop",
    "shippedBy": "temporal_anomaly",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Glimpse Future",
        "rules": "As an action, you can use the Chronarium to briefly glimpse a possible future outcome. This effect lasts for 1 minute and allows you or your allies within 30 feet to gain advantage on one ability check of their choice."
      },
      {
        "title": "Rewind Minor Events",
        "rules": "Once per short rest, as an action, you can rewind time by a few moments. This effect restores 1d6 + Constitution modifier hit points and allows you or your allies within 30 feet to re-roll one attack roll or saving throw of their choice."
      }
    ],
    "levelRequirementReason": "Only the most experienced adventurers can wield this powerful artifact without risking catastrophic temporal consequences.",
    "vendorReason": "The final shop, known for its rare and godly items, carries only the most potent of artifacts that have been rumored to find their way into the hands of the worthy.",
    "shippingDetail": "Delivered by temporal courier with a delay of 1d4 days due to the delicate nature of the Chronarium's time-bending properties.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous, 1 minute for Glimpse Future; once per short rest for Rewind Minor Events",
      "endsWhen": "The effect ends when its duration expires or you take damage.",
      "charges": "Unlimited"
    },
    "priceReason": "This godly artifact's price reflects the risk and power it represents, balancing the potential for catastrophic misuse with its immense utility.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-23T23:13:17.321870+00:00",
    "aiReviewedAt": "2026-07-23T23:13:17.321870+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_curiosity_layer_cake": {
    "id": "grand_country_curiosity_layer_cake",
    "name": "Dimensional Delight",
    "description": "The Dimensional Delight is a layered cake whose vibrant hues and intricate design hint at its otherworldly origins. Each bite transports you to a different layer of reality, granting a brief respite from your mundane existence. The cake’s magical properties are said to have been crafted by the whimsical fae in the Misty Glades, and each slice restores a small amount of health while providing a temporary boost to luck. However, indulge too much and you might find yourself craving more than just another bite.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎂",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Restores Health",
      "Boosts Luck"
    ],
    "vendor": "layer_market",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Health",
        "rules": "Eating a slice of the cake restores 1d4 + Constitution modifier hit points. The effect is instantaneous, and there is no save required."
      },
      {
        "title": "Boosts Luck",
        "rules": "For 1 minute after consuming a slice, you gain advantage on saving throws and ability checks. This effect ends if you take damage or the duration expires."
      }
    ],
    "levelRequirementReason": "The cake’s magical properties are relatively simple and can be enjoyed by adventurers of even the lowest levels.",
    "vendorReason": "Layer Market prides itself on offering exotic curiosities from various realms, including this delightful treat.",
    "shippingDetail": "The cake is carefully packed and delivered by delivery drone to ensure freshness upon arrival.",
    "usage": {
      "activation": "Consuming a slice of the cake",
      "duration": "Instantaneous; lasts for 1 minute per slice consumed",
      "endsWhen": "You take damage or after 1 minute",
      "charges": "Unlimited"
    },
    "priceReason": "The cake’s unique properties, exotic origins, and the craftsmanship required to create it justify its high price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:13:23.725536+00:00",
    "aiReviewedAt": "2026-07-23T23:13:23.725536+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_obsidian_shard": {
    "id": "midlands_item_obsidian_shard",
    "name": "Fragment of the Voidbringer",
    "description": "The Fragment of the Voidbringer hums with malevolent energy, its obsidian surface pulsating like a heartbeat from another plane. As you hold it, the air thickens with dread, and you feel the weight of ancient knowledge pressing against your sanity. This shard can summon a minor shadow demon to aid or torment you, depending on how you wield it. Its touch is a double-edged blade: while it grants forbidden knowledge, it also risks driving you mad if not handled carefully.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "summon minor shadow demon",
      "resistance to necrotic damage"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "dark courier",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Summon Minor Shadow Demon",
        "rules": "As an action, you can summon a minor shadow demon. The creature appears within 10 feet of you and fights on your side until the start of your next turn or until it is destroyed. There is a 10% chance this effect occurs when you interact with the shard. The shadow demon has AC 15, 24 hit points, and deals 3d6 necrotic damage with its bite attack."
      },
      {
        "title": "Necrotic Resistance",
        "rules": "You have resistance to necrotic damage. This effect is always active while you hold the shard."
      }
    ],
    "levelRequirementReason": "This fragment requires a higher level due to its powerful summoning capabilities and potential for madness.",
    "vendorReason": "The Midlands Merchant has exclusive access to such dark artifacts, having connections with ancient forces.",
    "shippingDetail": "Ships via a special dark courier who ensures the package arrives under cover of night and in utmost secrecy.",
    "usage": {
      "activation": "Action",
      "duration": "Until your next turn or until destroyed",
      "endsWhen": "The summoned shadow demon is destroyed or you use your action for another purpose",
      "charges": "Unlimited, but only one summoning per day"
    },
    "priceReason": "This price reflects the shard's rarity and the risks involved in using it.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T23:13:42.036768+00:00",
    "aiReviewedAt": "2026-07-23T23:13:42.036768+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_shadow_whisper": {
    "id": "midlands_item_shadow_whisper",
    "name": "The Broker's Secret Scroll",
    "description": "The Broker's Secret Scroll is a meticulously rolled parchment, its ink faded yet still legible, whispering tales of hidden deals and forbidden knowledge. Crafted by the enigmatic figures who navigate The Midlands' shadowy underbelly, this scroll offers more than mere information—it delivers a strategic advantage, whether through unlocking clandestine locations or forging unlikely alliances. Use it wisely, for its secrets come with a price—both in terms of resources and reputation.",
    "category": "services",
    "price": 1000,
    "icon": "🤫",
    "stock": 15,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Unlock Hidden Locations",
      "Forge Valuable Alliances"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Unlock Hidden Locations",
        "rules": "Upon activation, the scroll reveals the coordinates or a detailed map to a hidden location known only to those who control it. This effect is instantaneous and requires no additional actions. It has a limited use per day."
      },
      {
        "title": "Forge Valuable Alliances",
        "rules": "When used correctly in a social situation, this scroll grants advantage on persuasion checks with individuals of influence within The Midlands. This effect lasts for 1 hour after activation and can be used once every 7 days."
      }
    ],
    "levelRequirementReason": "Requires basic knowledge of The Midlands' politics to use the scroll effectively.",
    "vendorReason": "The merchant specializes in rare and unique items from The Midlands, making this scroll a natural addition to their inventory.",
    "shippingDetail": "Ships via swift messenger hawk for expedited delivery.",
    "usage": {
      "activation": "Read the scroll aloud during a social interaction.",
      "duration": "Instantaneous, with one-hour duration per use.",
      "endsWhen": "Used up or destroyed upon misuse.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP to reflect its strategic and tactical value in The Midlands.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T23:13:44.488442+00:00",
    "aiReviewedAt": "2026-07-23T23:13:44.488442+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_dragonshard_amulet": {
    "id": "midlands_item_dragonshard_amulet",
    "name": "Shard of the Fallen Wyrm",
    "description": "The Shard of the Fallen Wyrm is an amulet forged from a fragment of a dragon's heart, pulsing with elemental fire and sulfur. Its raw power crackles around your neck, radiating heat that can be felt even in cold hands. The scent of burnt flesh lingers faintly, a reminder of the wyrm's fiery demise. This relic grants you resilience against the flames of hell itself, but beware—its power is not without cost.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐉",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Fire Resistance",
      "Elemental Fury"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "giant beetle",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "You gain resistance to fire damage and can reduce any fire damage you take by an additional 5%. This effect lasts until the start of your next turn."
      },
      {
        "title": "Elemental Fury",
        "rules": "As a bonus action, you can unleash a burst of fiery might. Creatures within 10 feet must succeed on a DC 14 Dexterity saving throw or be knocked prone and take 2d6 fire damage. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Crafted from the heart of an ancient wyrm, this amulet requires significant magical power to harness.",
    "vendorReason": "The blacksmiths at Fractured Forge have access to rare and powerful materials, including fragments of fallen dragons.",
    "shippingDetail": "Delivered by a giant beetle courier, this amulet's journey is both swift and hazardous.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous (Effect lasts until start of next turn)",
      "endsWhen": "The start of your next turn or when you take fire damage",
      "charges": "Once per long rest"
    },
    "priceReason": "Crafted from a rare dragon fragment, this amulet is both powerful and expensive to produce.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:13:37.300095+00:00",
    "aiReviewedAt": "2026-07-23T23:13:37.300095+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sticky_dough_bomb": {
    "id": "leclaire_isle_item_sticky_dough_bomb",
    "name": "Sticky Dough Bomb!",
    "description": "Crafted from the finest sticky flour and sugar, this dough bomb is a culinary marvel. When hurled with precision, it clings tenaciously to an enemy, turning their movements into a slow-motion dance of flour. The target's speed plummets as they're coated in a sugary paste, making them clumsy and prone to missteps. Even the most battle-hardened warriors will find themselves caught off guard by this delectable yet daunting device.",
    "category": "consumables",
    "price": 1000,
    "icon": "💣",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Sticky Cling",
      "Speed Reduction"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Courier Pigeon Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Sticky Cling",
        "rules": "When thrown, the Sticky Dough Bomb adheres to a target within 30 feet. The target must make a DC 12 Dexterity saving throw or be restrained by sticky dough for 1 minute."
      },
      {
        "title": "Speed Reduction",
        "rules": "The target's movement speed is reduced by half while the Sticky Cling effect lasts, and they have disadvantage on attack rolls against creatures within 5 feet of them."
      }
    ],
    "levelRequirementReason": "Requires basic combat proficiency to accurately throw the dough bomb.",
    "vendorReason": "Dough Depot specializes in all things pastry and sticky, making it fitting for their wares.",
    "shippingDetail": "Delivered swiftly by trained pigeon messengers within the same day of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until target is no longer restrained",
      "endsWhen": "Target escapes, saves successfully, or effect ends naturally",
      "charges": "Unlimited"
    },
    "priceReason": "The refined ingredients and unique crafting process justify the higher price point.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T23:13:48.344473+00:00",
    "aiReviewedAt": "2026-07-23T23:13:48.344473+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_golden_croissant_of_gusts": {
    "id": "leclaire_isle_item_golden_croissant_of_gusts",
    "name": "Golden Croissant of Gusts",
    "description": "The Golden Croissant of Gusts, crafted by the Dough Folk's master bakers on Leclair Isle, is a golden pastry that radiates a gust of wind when bitten into. It's said to have been blessed with the essence of the island’s windswept cliffs, imbuing it with surprising power. Biting this croissant can unleash a gust strong enough to knock enemies off ledges or send pastries flying across the room – perfect for those who want to clear space quickly but prefer not to get their hands dirty.",
    "category": "equipment",
    "price": 1000,
    "icon": "💨",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Wind Gust",
      "Knockback"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Giant Delivery Snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wind Gust",
        "rules": "When activated, this croissant emits a gust of wind in a small area. This gust deals moderate wind damage to all creatures within its radius and has a chance to knock them back. The gust lasts for 1 round."
      },
      {
        "title": "Knockback",
        "rules": "Any creature hit by the gust must succeed on a Strength saving throw or be knocked back up to 10 feet, ending their turn in the nearest unoccupied space not prone."
      }
    ],
    "levelRequirementReason": "The delicate nature of the croissant requires sufficient dexterity and focus.",
    "vendorReason": "Pastry Palace is renowned for its expert bakers who can craft such whimsical and powerful items.",
    "shippingDetail": "The Giant Delivery Snail ensures the croissant arrives perfectly golden, ready to be enjoyed or activated immediately upon receipt.",
    "usage": {
      "activation": "Eating the croissant",
      "duration": "Instantaneous",
      "endsWhen": "After one round of wind gust and knockback effect",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "The item is rare but balanced, reflecting the skill required to craft it and its occasional utility.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:14:04.876322+00:00",
    "aiReviewedAt": "2026-07-23T23:14:04.876322+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_godly_dough_of_infinite_expansion": {
    "id": "leclaire_isle_item_godly_dough_of_infinite_expansion",
    "name": "Godly Dough of Infinite Expansion",
    "description": "The Godly Dough of Infinite Expansion is a shimmering, ever-expanding substance that can quickly engulf foes or form temporary platforms for safe passage. Crafted from the very essence of the Dough Folk’s deity, it radiates with divine power and can restore allies’ health while immobilizing those caught within its grasp. Wario might indeed try to harness this dough to create a giant monument to his likeness, but only through sheer determination could one hope to replicate such feats.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Expands to Engulf Enemies",
      "Heals Allies"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Celestial Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Expands to Engulf Enemies",
        "rules": "The user can activate this effect as a bonus action within a range of 30 feet. The dough expands in an 8-foot radius around the user, immobilizing all creatures inside for 1 minute unless they succeed on a DC 15 Strength saving throw. This effect costs one use and is recharged at dawn."
      },
      {
        "title": "Heals Allies",
        "rules": "Once per long rest, this item can heal up to 2d6 + the user’s Charisma modifier hit points to all creatures within a 15-foot radius of its center. This effect is instantaneous and costs one use."
      }
    ],
    "levelRequirementReason": "The Godly Dough requires minimal magical knowledge, as it operates through divine intervention rather than complex spellcasting.",
    "vendorReason": "Sweet Supplies deals in rare and exotic ingredients, including those used by the Dough Folk to craft this miraculous dough.",
    "shippingDetail": "The Celestial Courier delivers the dough via a swift, ethereal plane journey that ensures timely delivery.",
    "usage": {
      "activation": "Bonus action or once per long rest",
      "duration": "1 minute (immobilization) or instantaneous (healing)",
      "endsWhen": "Exhausted uses or dawn recharge",
      "charges": "2 uses, recharged at dawn"
    },
    "priceReason": "The Godly Dough is priced moderately due to its divine origin and the unique abilities it grants.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-23T23:14:09.971092+00:00",
    "aiReviewedAt": "2026-07-23T23:14:09.971092+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_crumb_charm": {
    "id": "leclaire_isle_crumb_charm",
    "name": "Doughy Defender Charm",
    "description": "The Doughy Defender Charm is a delightful charm crafted from solidified croissant dough, imbued with the spirit of a miniature Dough Folk warrior. This charming trinket not only provides an effective shield against sticky situations but also grants +2 to Dexterity saving throws against pastry-based attacks. Should it come into contact with foes, it has a chance to inflict 'Sugar Rush,' temporarily boosting their speed and leaving them dazed for a moment.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 8,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Sticky Shield",
      "Doughy Defense"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Dough Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sticky Shield",
        "rules": "The Doughy Defender Charm grants the wielder advantage on Dexterity saving throws against attacks made with sticky or pasty substances. This effect lasts until the end of your next turn."
      },
      {
        "title": "Sugar Rush",
        "rules": "When the charm comes into contact with an enemy, there is a 10% chance to inflict 'Sugar Rush' on them, causing a temporary speed boost and dizziness. The target gains advantage on their next attack roll but suffers disadvantage on Dexterity checks for one minute."
      }
    ],
    "levelRequirementReason": "The charm is designed for beginners who might encounter sticky or pastry-based attacks early in their adventuring career.",
    "vendorReason": "Dough Depot specializes in items related to croissant culture and thus offers the Doughy Defender Charm as a staple among their inventory.",
    "shippingDetail": "Delivered by the reliable Dough Delivery Drone, this charm is guaranteed to arrive in perfect condition.",
    "usage": {
      "activation": "Passive effect; activates upon contact with sticky or pastry-based attacks.",
      "duration": "Until end of next turn for 'Sticky Shield'; until start of your next turn for 'Sugar Rush'.",
      "endsWhen": "When the duration expires, the charm no longer functions until recharged by a short rest.",
      "charges": "Unlimited; recharges during a short rest."
    },
    "priceReason": "The charm's price is adjusted to reflect its unique flavor and utility without overshadowing more powerful items.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:14:24.153992+00:00",
    "aiReviewedAt": "2026-07-23T23:14:24.153992+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sweet_serenity_tea": {
    "id": "leclaire_isle_sweet_serenity_tea",
    "name": "Serene Sugar Bloom Tea",
    "description": "Brewed from rare moonpetal blossoms and crystallized honey, Serene Sugar Bloom Tea is a delicate elixir that calms the soul and sweetens even the most tempestuous of hearts. A sip can restore your weary spirit, granting you the calmness to face challenges with renewed resolve. Sweet Supplies' master tea-makers insist it's not just for the volatile Dough Folk; anyone seeking peace in their heart will find it here.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍵",
    "stock": 55,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Restores hit points",
      "Increases Charisma"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Honeybee Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Hit Points",
        "rules": "When consumed, this tea restores 20 hit points to the drinker. The effect is instantaneous and does not require an action."
      },
      {
        "title": "Increase Charisma",
        "rules": "For one minute after drinking, your Charisma score is increased by 3. This increase stacks with other sources of Charisma bonuses but cannot exceed your original Charisma modifier +5. The effect ends when the duration expires or if you take any harmful action."
      }
    ],
    "levelRequirementReason": "This tea is accessible to all adventurers, regardless of level, as it promotes harmony and peace.",
    "vendorReason": "Sweet Supplies has long been known for their soothing potions and teas, making Serene Sugar Bloom Tea a natural addition to their inventory.",
    "shippingDetail": "The Honeybee Courier ensures the tea remains fresh by delivering it within an hour of purchase in most locations.",
    "usage": {
      "activation": "Instantaneous consumption upon opening the sealed container.",
      "duration": "1 minute per serving",
      "endsWhen": "After one minute or if a harmful action is taken.",
      "charges": "Unlimited; each serving is an individual use."
    },
    "priceReason": "The rare ingredients and expert brewing required for this tea justify its higher price, making it a valuable commodity in the market.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:14:49.599123+00:00",
    "aiReviewedAt": "2026-07-23T23:14:49.599123+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_frosting_fortune_teller": {
    "id": "leclaire_isle_frosting_fortune_teller",
    "name": "The Frosting Oracle",
    "description": "The Frosting Oracle is a delightfully creepy, handcrafted figurine made from hardened buttercream, its surface etched with arcane runes that whisper cryptic prophecies—mostly about pastries and confectionary magic. This rare curio grants +1 to Wisdom checks related to divination and minor protection against illusions, making it a cherished tool for discerning adventurers seeking guidance or just an odd, yet charming decoration. Don’t ask it about your taxes; its knowledge is as sweetly vague as the pastries it guards.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Divine Guidance",
      "Illusion Resistance"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Magic Messenger Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Divine Guidance",
        "rules": "Activates on a Wisdom check related to divination. The Frosting Oracle provides a +1 bonus to the roll, and if you succeed, it whispers a helpful prophecy (random effect). This effect can be used once per short or long rest."
      },
      {
        "title": "Illusion Resistance",
        "rules": "Grants a +1 bonus to saving throws against illusions. This benefit lasts for 8 hours after the item is activated and can be refreshed by using another Wisdom check related to divination."
      }
    ],
    "levelRequirementReason": "The Frosting Oracle's charm and utility make it accessible to all adventurers, regardless of level.",
    "vendorReason": "Pastry Palace is known for its exquisite pastries and curiosities, making it the perfect vendor for this whimsical item.",
    "shippingDetail": "The Frosting Oracle is delivered by a Magic Messenger Pigeon, ensuring its arrival fresh from the bakery to your doorstep.",
    "usage": {
      "activation": "Activates as a bonus action during a Wisdom check related to divination.",
      "duration": "8 hours after activation or until the next short rest.",
      "endsWhen": "The effect ends when you use it again, at the end of a long rest, or if you deactivate it by succeeding on another Wisdom check related to divination.",
      "charges": "Unlimited; the effect can be refreshed."
    },
    "priceReason": "The Frosting Oracle strikes a balance between its rarity and utility, providing both practical benefits and thematic appeal at this price point.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T23:14:44.173290+00:00",
    "aiReviewedAt": "2026-07-23T23:14:44.173290+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_obsidian_shard": {
    "id": "curiosity_obsidian_shard",
    "name": "Shard of the Fallen Emperor",
    "description": "A pulsating shard of obsidian, rumored to be a fragment from the shattered crown of a forgotten empire! It radiates an unsettling energy and seems to whisper dark secrets - or maybe that's just Wario’s stomach rumbling. Handle with care, unless you enjoy existential dread.",
    "category": "curiosities",
    "price": 450,
    "icon": "🔮",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to gain a temporary madness effect (5%)",
      "provides +1 to intelligence checks for one round",
      "can be used as a component in dark rituals"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "snail_mail",
    "levelRequirement": 3
  },
  "the_edge_item_echoing_shard": {
    "id": "the_edge_item_echoing_shard",
    "name": "Echoing Shard of the Void",
    "description": "The Echoing Shard of the Void is a jagged, obsidian fragment that pulses with an eerie, residual energy from the abyssal void. When held close to your ear, it allows you to mimic sounds, creating minor illusions that can startle or distract foes. The shard’s whispers seem to come from beyond reality, making listeners uneasy and potentially causing them confusion. Rumored to have been crafted in the depths of the Void by ancient, forgotten beings, this relic is both a tool for survival and a source of unsettling power.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔊",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "minor_illusion",
      "confusion_effect"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Minor Illusion",
        "rules": "As an action, you can use the Echoing Shard to create a sound mimicry that lasts up to 1 minute. The illusion can be heard by creatures within 30 feet of you and must imitate a sound with which you are familiar. This effect has no saving throw but ends if it becomes obviously false or if you lose concentration."
      },
      {
        "title": "Confusion Effect",
        "rules": "Upon successful mimicry, there is a 25% chance (DC 13) that any creature within 60 feet of the sound will be confused for 1 minute. A confused creature can take only one action on its turn (which can include moving), and it takes a -2 penalty to all attacks. The effect ends if the creature uses its action to make a Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "The Echoing Shard requires a moderate spellcasting skill to use effectively, which is why it has a level requirement of 5.",
    "vendorReason": "The Abyss Trader specializes in items from the depths of the void and this shard fits their inventory perfectly.",
    "shippingDetail": "Ships through a rift that can cause minor temporal distortions, arriving within days but with unpredictable delays.",
    "usage": {
      "activation": "Action to activate; bonus action to maintain the illusion if desired.",
      "duration": "Instantaneous activation; lasts up to 1 minute while maintained.",
      "endsWhen": "Concentration is lost or the mimicry becomes obviously false.",
      "charges": "Unlimited, but concentration can be difficult."
    },
    "priceReason": "The Echoing Shard's rarity and unique ability to create minor illusions and confusion justify its high price in XP.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:14:53.769412+00:00",
    "aiReviewedAt": "2026-07-23T23:14:53.769412+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_chronal_gauntlet": {
    "id": "the_edge_item_chronal_gauntlet",
    "name": "Chronal Gauntlet of Temporal Twitch",
    "description": "Forged from solidified timelines, this gauntlet allows you to briefly manipulate the flow of time around yourself – mostly. It's a bit glitchy and prone to causing minor paradoxes, so use it sparingly! The Chronal Gauntlet of Temporal Twitch is said to have been crafted in the heart of ancient Temporal Forge by Wario himself, who would totally wear this if he were capable of wielding such a powerful artifact.",
    "category": "equipment",
    "price": 5000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Surge",
      "Paradox Stabilization"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Temporal Courier Express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Surge",
        "rules": "As an action, activate the gauntlet to grant you and all creatures within 5 feet a short burst of speed. You gain advantage on Dexterity (Acrobatics) checks for 1 minute. This effect can be used once per long rest."
      },
      {
        "title": "Paradox Stabilization",
        "rules": "When an ally within 30 feet fails a saving throw, you can use your reaction to stabilize them with a burst of temporal energy that cancels the failed save result. This effect has no cooldown but can only be used once per short rest."
      }
    ],
    "levelRequirementReason": "The intricate craftsmanship and raw power required for such a gauntlet demand a high level of proficiency in temporal magic.",
    "vendorReason": "Edge Outpost specializes in rare and exotic artifacts, including those that manipulate time itself.",
    "shippingDetail": "The gauntlet is delivered by Temporal Courier Express via a time-displaced courier who ensures the item arrives perfectly timed for its next use.",
    "usage": {
      "activation": "Action (Activate as an action)",
      "duration": "1 minute (ends after 1 minute or when you finish a short rest)",
      "endsWhen": "The duration ends after 1 minute or when you finish a short rest",
      "charges": "Once per long rest"
    },
    "priceReason": "Crafted from solidified timelines, this gauntlet requires immense temporal energy and expertise to produce, making it an expensive yet powerful artifact.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-23T23:15:13.449705+00:00",
    "aiReviewedAt": "2026-07-23T23:15:13.449705+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_null_lantern": {
    "id": "the_edge_item_null_lantern",
    "name": "Null Lantern of the Unseen Depths",
    "description": "The Null Lantern of the Unseen Depths is a cryptic lantern made from deep-sea coral and enchanted with abyssal magic. It absorbs light, making it an ideal companion for navigating pitch-black depths, but its true power lies in its ability to cast fear into the hearts of foes. Its eerie glow can blind those who gaze too long, revealing hidden shadows that may not be real at all.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔦",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "absorbs_light",
      "fearful_glare"
    ],
    "vendor": "final_shop",
    "shippedBy": "temporal_courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Absorbs Light",
        "rules": "The lantern absorbs light within a 10-foot radius. Enemies in this area must make a DC 14 Wisdom saving throw or be blinded until their next turn."
      },
      {
        "title": "Fearful Glare",
        "rules": "As an action, you can point the lantern at one creature within 30 feet and attempt to frighten it. The target must succeed on a DC 14 Wisdom saving throw or be frightened for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires level 8 due to its deep magic and the risk of losing one's mind in its presence.",
    "vendorReason": "Final Shop specializes in rare curiosities, including items that push the boundaries of reality like this lantern.",
    "shippingDetail": "Shipped via Temporal Courier for expedited delivery to adventurers across the realms.",
    "usage": {
      "activation": "Action or Reaction (to point and use)",
      "duration": "Instantaneous (for Absorbs Light) / One Minute (for Fearful Glare)",
      "endsWhen": "The effect ends when the creature is no longer within range or the lantern's light fades.",
      "charges": "Unlimited, but only one can be used per day."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rarity and deep magic without overvaluing it.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:15:03.520440+00:00",
    "aiReviewedAt": "2026-07-23T23:15:03.520440+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_ring_of_shadows": {
    "id": "middle_earth_ring_of_shadows",
    "name": "Fragment of Morgoth's Sorrow",
    "description": "The Fragment of Morgoth's Sorrow, a shard of ancient dark energy, hums with malevolent power. Its surface gleams with the echoes of Morgoth’s reign, and those who wear it feel the weight of ages past pressing against their will. Prolonged use corrupts the soul, turning even the purest heart into shadow's puppet. This cursed ring grants limited shadow manipulation, but beware — its dark touch can never be fully repelled.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Shadow Manipulation",
      "Corruption Risk"
    ],
    "vendor": "elven_market",
    "shippedBy": "raven",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Shadow Manipulation",
        "rules": "Activates as a bonus action. Grants the user the ability to cast Darkness once per day, creating an area of dim light that reduces visibility and imposes disadvantage on perception checks within its radius."
      },
      {
        "title": "Corruption Risk",
        "rules": "Using this ring increases your chance of being affected by Shadow Influence spells (1 in 6). If you fail a saving throw against such effects, your next action is spent moving toward the nearest source of shadow until it is destroyed or you succeed on a DC 15 Constitution save."
      }
    ],
    "levelRequirementReason": "Requires at least level 6 to wield this cursed artifact effectively without succumbing to its corruption.",
    "vendorReason": "The Elves of Lothlórien, who have long fought the shadows, keep a wary eye on this fragment and sell it only to those strong enough to resist its dark allure.",
    "shippingDetail": "Ships swiftly by raven courier, but the delivery is delayed by one day as the bird must rest after delivering each item.",
    "usage": {
      "activation": "Bonus action for Shadow Manipulation; once per day.",
      "duration": "Instantaneous effect for Darkness spell.",
      "endsWhen": "Charges are exhausted or the ring is destroyed, whichever comes first. Charges replenish at dawn.",
      "charges": "1 charge"
    },
    "priceReason": "Reflects its dark power and limited use, balancing its corruption risk with its powerful abilities.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:15:22.327584+00:00",
    "aiReviewedAt": "2026-07-23T23:15:22.327584+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_wario_shard": {
    "id": "middle_earth_wario_shard",
    "name": "Wario's Pocket Dimension Pebble",
    "description": "The Wario's Pocket Dimension Pebble gleams with an otherworldly light, its surface marred by the remnants of chaotic energies from Wario’s pocket dimension. Found in a dwarven mine collapse, it occasionally releases random treasures or minor inconveniences—often involving sticky substances that can immobilize foes for short periods. This miniature chunk of chaos grants +5 to luck rolls and allows the user to repair damaged equipment instantly once per day.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💰",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Repair Equipment",
      "Lucky Luck Boost"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_flight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Repair Equipment",
        "rules": "Activates as a bonus action. Instantly repairs one piece of damaged equipment, restoring it to full condition. Ends when used or after 24 hours if not activated."
      },
      {
        "title": "Lucky Luck Boost",
        "rules": "Grants +5 to all luck-related rolls until the end of the user's next turn. This effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "This pebble is accessible early in one’s journey, providing a modest boost for adventurers just starting their path.",
    "vendorReason": "The dwarves of the Forged Heart have encountered this peculiar item and managed to extract its secrets from the mine collapses.",
    "shippingDetail": "Ships via a courier dragon, ensuring swift delivery but with a slight delay due to altitude constraints.",
    "usage": {
      "activation": "Bonus action for repairing equipment; once per long rest for luck boost.",
      "duration": "Instantaneous repair; luck boost lasts until the end of next turn.",
      "endsWhen": "Used or after 24 hours without use; ends at the start of the next short or long rest.",
      "charges": "Unlimited, recharges upon completion."
    },
    "priceReason": "This item offers a valuable but not overpowered advantage, suitable for early adventurers.",
    "priceOriginal": 230000,
    "priceReviewedAt": "2026-07-23T23:15:59.300844+00:00",
    "aiReviewedAt": "2026-07-23T23:15:59.300844+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_starfall_potion": {
    "id": "equestria_item_starfall_potion",
    "name": "Starfall Potion of Brilliance",
    "description": "This shimmering potion glows faintly under moonlight, its contents a mix of blueberries and stardust. Brewed during a meteor shower in Equestria, it grants a temporary boost to magical prowess. Drinkers also gain resistance to fire damage for the duration, an unexpected boon from the mysterious stars above. Wario's taste test is legendary; he claims it’s mostly sugar, but the stars are real enough to create small celestial phenomena around you.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌟",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increase_magic_power",
      "fire_resistance"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Cloudsdale Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increase Magic Power",
        "rules": "When consumed, this potion grants the drinker a +2 bonus to all spell attack rolls and spell saving throws for 10 minutes."
      },
      {
        "title": "Fire Resistance",
        "rules": "The drinker gains resistance to fire damage for 1 hour. This effect ends if the drinker takes any fire damage or if it expires at the end of a long rest."
      }
    ],
    "levelRequirementReason": "This potion provides a temporary boost in magical ability and fire resistance, suitable for adventurers just starting their journey.",
    "vendorReason": "The market is known for its wide variety of potions and elixirs, brewed by the local apothecary who gathers ingredients from all over Equestria.",
    "shippingDetail": "Ships via Cloudsdale Express, ensuring delivery during a clear night under a full moon.",
    "usage": {
      "activation": "Consume the potion as an action.",
      "duration": "10 minutes and 1 hour of fire resistance.",
      "endsWhen": "The effects expire at the end of a long rest or if the drinker takes fire damage.",
      "charges": "Unlimited"
    },
    "priceReason": "The potion's rarity, magical properties, and the unusual brewing process justify its high price in XP.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T23:15:26.074357+00:00",
    "aiReviewedAt": "2026-07-23T23:15:26.074357+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_legendary_celestia_shield": {
    "id": "equestria_item_legendary_celestia_shield",
    "name": "Celestia’s Aegis of the Elements",
    "description": "Forged in the heart of Canterlot Castle during a particularly potent thunderstorm, Celestia’s Aegis of the Elements is a massive shield that radiates an aura of incredible power. Crafted from the purest silver and enchanted with elements of the Elements themselves, this shield grants its wielder resistance to lightning damage and the ability to reflect minor attacks back at foes. Legend has it that Princess Celestia herself blessed this shield, imbuing it with her own protective magic.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "resistance_to_lightning",
      "reflective_shield"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Equestrian Express",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Resistance to Lightning",
        "rules": "While wielding Celestia’s Aegis of the Elements, you gain resistance to lightning damage. This effect is always active as long as you are holding the shield."
      },
      {
        "title": "Reflective Shield",
        "rules": "As a reaction when you take thunder or lightning damage from an attack, you can reflect half of that damage back at the attacker. The reflected damage must be of the same type as the original (thunder or lightning). This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This shield's power requires a significant amount of magic and skill to wield effectively, suitable for a 12th-level character.",
    "vendorReason": "The Crystal Empire holds exclusive rights to sell items blessed by Princess Celestia, making this shield available only through them.",
    "shippingDetail": "The shield is shipped with extra protective padding and arrives within a week.",
    "usage": {
      "activation": "Instantaneous (as a reaction)",
      "duration": "Instantaneous effect; ends when the reaction that triggered it is used or the shield is dropped",
      "endsWhen": "The reaction used to reflect damage is expended, or the shield is dropped",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "This item’s balanced price reflects its legendary rarity and the amount of magic required for its creation.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-23T23:15:40.890297+00:00",
    "aiReviewedAt": "2026-07-23T23:15:40.890297+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_shard_of_frost": {
    "id": "earth_land_shard_of_frost",
    "name": "Frozen Fury Shard",
    "description": "The Frozen Fury Shard gleams with an eerie blue light, a fragment of ancient frost torn from a dragon's hoard. Wario accidentally dropped it during his misadventure, and its icy touch can freeze foes in place for three turns. With each passing moment, the shard releases a chill that drains mana, compelling spellcasters to temper their power. However, the shard's magic is unpredictable; sometimes, it freezes your fingers as well.",
    "category": "consumables",
    "price": 1000,
    "icon": "🥶",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Freezes enemies over three turns",
      "Drains caster's mana"
    ],
    "vendor": "magic_shop",
    "shippedBy": "ice_cart",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Frozen Fury",
        "rules": "When activated, this shard deals 10 cold damage per turn to a creature within reach for 3 turns. The target must succeed on a DC 15 Constitution saving throw or be slowed until the end of its next turn."
      },
      {
        "title": "Mana Drain",
        "rules": "For each turn it remains in effect, the caster's mana pool is reduced by 2 points. This effect has no save and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The shard requires a moderate level to wield its icy power without freezing one’s fingers.",
    "vendorReason": "Magic Shop stocks rare artifacts, and this shard is too powerful for general sale.",
    "shippingDetail": "Ships in a specially insulated container to preserve the shard's integrity during transport.",
    "usage": {
      "activation": "Action",
      "duration": "3 turns",
      "endsWhen": "Target saves successfully or caster uses another action on their turn",
      "charges": "Unlimited, but exhausted per short rest"
    },
    "priceReason": "The shard's rare origin and unpredictable effects justify its moderate price.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T23:15:47.345135+00:00",
    "aiReviewedAt": "2026-07-23T23:15:47.345135+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_runic_gauntlets": {
    "id": "earth_land_runic_gauntlets",
    "name": "Stonegrip Gauntlets of the Guildmaster",
    "description": "The Stonegrip Gauntlets of the Guildmaster are a set of heavily-worn gauntlets adorned with ancient runes, each etched with the scars of countless battles. Crafted by an irascible guild master, these gauntlets offer unparalleled grip and strength to their wearer, making them indispensable for any guild task or derring-do. Their sturdy leather is reinforced with iron bands that have seen many a scuffle, and their runes hum with latent power.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧤",
    "stock": 18,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Grip",
      "Stun on Attack"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "guild courier on swift steed",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Enhanced Grip",
        "rules": "While wearing these gauntlets, you gain a +2 bonus to Strength (Athletics) checks and saving throws. Additionally, your unarmed strikes deal an extra 1d4 bludgeoning damage."
      },
      {
        "title": "Stun on Attack",
        "rules": "When you hit a creature with a melee attack while wearing these gauntlets, there is a 10% chance that the target is stunned for 1 round. The DC to resist this effect is equal to 8 + your Dexterity modifier."
      }
    ],
    "levelRequirementReason": "The gauntlets require significant strength and experience to wield effectively.",
    "vendorReason": "As a trusted vendor of guild supplies, the quartermaster is well-known for providing gear that meets the rigorous demands of the guild members.",
    "shippingDetail": "Ships within three days via the guild's own swift couriers, ensuring safe and timely delivery.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous",
      "endsWhen": "Dropped or removed from your hands",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a price that reflects the gauntlets' durable craftsmanship and their significant combat advantage.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:15:38.372477+00:00",
    "aiReviewedAt": "2026-07-23T23:15:38.372477+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_mythic_dragon_scale": {
    "id": "earth_land_mythic_dragon_scale",
    "name": "Scale of the Ancient Wyrm",
    "description": "The Scale of the Ancient Wyrm is a shimmering, iridescent scale that retains vestiges of its ancient draconic heritage. When worn, it grants you the regal presence and strength of an elder dragon, bolstering your physical prowess and charisma for a brief time. This relic also has a whimsical side—while enhancing your combat abilities, it might subtly influence your behavior to reflect a newfound love for collecting shiny objects.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🐉",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Draconic Resonance",
      "Elemental Surge"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "winged_beast",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Draconic Resonance",
        "rules": "Activates on donning the scale. Grants a +4 bonus to Strength and Dexterity for 6 hours, plus +2 charisma. Ends when removed or at the end of your next turn."
      },
      {
        "title": "Elemental Surge",
        "rules": "Has a 10% chance per hour to trigger an elemental effect. This can be a burst of fire, gusts of wind, or waves of water, as determined by the DM. The effect lasts for 1 minute and has no save DC."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to ensure the user can effectively harness its power without overwhelming them.",
    "vendorReason": "The Earth Emporium specializes in ancient and mystical artifacts, making it a fitting vendor for this relic of draconic pasts.",
    "shippingDetail": "Ships via the swift couriers of Winged Beast, ensuring safe delivery through the skies above.",
    "usage": {
      "activation": "Wearing the scale on your body.",
      "duration": "6 hours or until removed.",
      "endsWhen": "At the end of your next turn after removal or if you lose possession of it.",
      "charges": "Unlimited, recharged upon donning."
    },
    "priceReason": "The price reflects its mythic rarity and the unique combination of physical and behavioral effects it offers.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T23:15:53.056752+00:00",
    "aiReviewedAt": "2026-07-23T23:15:53.056752+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_warband": {
    "id": "internet_meme_warband",
    "name": "Collective Awareness Brigade",
    "description": "The Collective Awareness Brigade is a squad of digital avatars, each one a twisted parody of internet culture. These tireless warriors are crafted from the very essence of online chaos—memes, viral trends, and forgotten web content. Their relentless attacks cause confusion and distract foes, making them perfect for any battle where misdirection can turn the tide. Just be wary; these avatars might just start demanding more bandwidth as their own form of payment!",
    "category": "faction",
    "price": 3500,
    "icon": "👾",
    "stock": 8,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "causes_confusion",
      "distracts_enemies"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_package",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Confusion",
        "rules": "When the Brigade is activated, all creatures within a 10-foot radius must succeed on a DC 13 Wisdom saving throw or be blinded for 1 minute. The effect ends if any creature attacks one of the avatars."
      },
      {
        "title": "Distract",
        "rules": "Once per short rest, the Brigade can cast Minor Illusion as a bonus action, creating an illusory duplicate that distracts nearby foes, forcing them to make a DC 13 Wisdom saving throw or be unable to take actions for 1 minute."
      }
    ],
    "levelRequirementReason": "The Brigade requires a level 7 character due to its complex programming and the immense internet energy it draws from.",
    "vendorReason": "The cyber market specializes in cutting-edge and controversial digital items, making them an ideal vendor for the Collective Awareness Brigade.",
    "shippingDetail": "Delivered via encrypted package to prevent any unauthorized access or interference with the avatars' programming.",
    "usage": {
      "activation": "bonus action",
      "duration": "instantaneous (Confusion), 1 minute (Distract)",
      "endsWhen": "the effect ends when a creature attacks one of the avatars, or after its duration expires",
      "charges": "unlimited"
    },
    "priceReason": "The Brigade's unique programming and digital essence make it a rare commodity, justifying this balanced XP price.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T23:16:08.781344+00:00",
    "aiReviewedAt": "2026-07-23T23:16:08.781344+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_warrior_charm": {
    "id": "midlands_item_warrior_charm",
    "name": "Grimtooth's Lucky Token",
    "description": "Grimtooth's Lucky Token is a grimy token with a worn leather strap and an iron clasp, said to bring fortune to those who earn it. Crafted from the cursed metal of the Blackfurnace forges, its surface reveals faint etchings of ancient runes that whisper tales of victory. While it may not improve your personal hygiene, this lucky charm does grant +1 bonus to AC and increases your critical hit chance by 5%. It also provides resistance to fear effects.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "bonus_to_ac",
      "critical_hit_chance"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bonus to Armor Class",
        "rules": "When worn, the token grants a +1 bonus to your AC. This effect persists until you remove it."
      },
      {
        "title": "Increased Critical Hit Chance",
        "rules": "While wearing Grimtooth's Lucky Token, your critical hit chance increases by 5%. This effect lasts for one hour and expires after that time."
      }
    ],
    "levelRequirementReason": "This token provides basic protection suitable for all adventurers.",
    "vendorReason": "The token's origin from the Blackfurnace forges makes it a logical item for Fractured Forge to sell.",
    "shippingDetail": "Ships via a sturdy cart, delivered within 3 days of purchase.",
    "usage": {
      "activation": "Wearing the token passively grants its effects.",
      "duration": "Active until removed or one hour expires, whichever comes first.",
      "endsWhen": "The effect ends when you remove it or after one hour.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The token's rarity and forged origin justify its price, providing solid value for adventurers.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T23:16:01.242658+00:00",
    "aiReviewedAt": "2026-07-23T23:16:01.242658+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_forbidden_sugar_shard": {
    "id": "leclaire_isle_forbidden_sugar_shard",
    "name": "Shard of Pure Sugar Madness",
    "description": "The Shard of Pure Sugar Madness is a crystalline fragment from the Heart of Sweetness, a forbidden relic that drives those who hold it into fits of obsessive sweetness. Its surface shimmers with an ethereal glow, and its touch lingers on the skin like a sugary mist. Rumor has it that prolonged exposure can lead to uncontrollable cravings for anything sweet, turning even the most level-headed into sugar-crazed obsessives.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🍬",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "sugar_rush",
      "sweet_charisma_boost"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Swift Delivery Sprite",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sugar Rush",
        "rules": "When activated as a bonus action, the Shard grants the wielder a +2 bonus to Dexterity saving throws for 1 hour. However, if the wielder fails to consume at least one sugar-laden treat within this time, they must succeed on a DC 15 Constitution saving throw or fall into a fit of uncontrollable cravings."
      },
      {
        "title": "Sweet Charisma Boost",
        "rules": "The Shard increases the wielder's Charisma by +2 for 1 hour. This boost can be used once per short rest, but if the wielder fails to engage in at least one act of sweetness (such as frosting a cake or sharing candy) within this period, they must make a DC 15 Wisdom saving throw or risk losing their composure and acting irrationally."
      }
    ],
    "levelRequirementReason": "Even the lowest-level adventurers might succumb to its addictive power, making it accessible but dangerous for all.",
    "vendorReason": "Pastry Palace specializes in forbidden sweets and thus can offer this fragment of madness without fear of legal repercussions.",
    "shippingDetail": "The Swift Delivery Sprite ensures the Shard arrives intact, protected by a magical bubble that prevents its effects from manifesting during transit.",
    "usage": {
      "activation": "Bonus action to activate; can be used once per short rest for each effect.",
      "duration": "1 hour",
      "endsWhen": "The duration expires or the wielder fails a saving throw due to prolonged inactivity with sweetness.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Balanced as a rare item, this Shard offers potent effects that are both dangerous and highly sought after by those seeking to exploit its power for personal gain or amusement.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T23:16:36.937633+00:00",
    "aiReviewedAt": "2026-07-23T23:16:36.937633+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_curiosity_gummy_worm": {
    "id": "leclaire_isle_curiosity_gummy_worm",
    "name": "Gummy Worm of Temporal Distortion",
    "description": "This unsettlingly bouncy worm bends time around you, briefly slowing down your enemies or speeding up your own movements. Just don't get stuck in a loop – Wario warned us!",
    "category": "curiosities",
    "price": 1800,
    "icon": "🐛",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "time_slow_25",
      "movement_speed_boost_5",
      "chance_to_create_temporal_ripple"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Shadow Delivery Drone",
    "levelRequirement": 8
  },
  "kivotos_item_halo_of_inspiration": {
    "id": "kivotos_item_halo_of_inspiration",
    "name": "Brain Sparker Halo",
    "description": "The Brain Sparker Halo is a sleek, metallic circlet adorned with glowing nodes that pulse with a cerebral energy. Crafted from a rare alloy found deep within the mind-forge of an ancient brain temple, it amplifies your mental acuity and strategic foresight. When activated, it grants you a 25% boost to Intelligence checks for one hour, and a 10% chance to inspire an adjacent ally with a clever idea during combat.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💡",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Mental Boost",
      "Inspire Ally"
    ],
    "vendor": "student_store",
    "shippedBy": "express_delivery",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Mental Boost",
        "rules": "When activated as a bonus action, the Brain Sparker Halo grants you a +2 Intelligence modifier on checks for one hour. This effect ends when you finish a short or long rest."
      },
      {
        "title": "Inspire Ally",
        "rules": "Once per short or long rest, you can use your action to activate the halo and grant an adjacent ally within 5 feet of you a +1 bonus to Intelligence checks for the duration of one combat encounter. This effect ends when the combat ends."
      }
    ],
    "levelRequirementReason": "This item enhances strategic thinking, which requires a basic understanding of tactical and intellectual challenges.",
    "vendorReason": "The student store caters to scholars' needs for academic and mental tools.",
    "shippingDetail": "Delivered within one day with express courier service.",
    "usage": {
      "activation": "bonus action, once per short or long rest",
      "duration": "one hour (Mental Boost), until combat ends (Inspire Ally)",
      "endsWhen": "rest ends (Mental Boost), combat ends (Inspire Ally)",
      "charges": "unlimited"
    },
    "priceReason": "Crafted from rare materials and imbued with ancient brain temple magic, its value reflects its unique benefits to mental prowess.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:16:14.567305+00:00",
    "aiReviewedAt": "2026-07-23T23:16:14.567305+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_decrypted_notes": {
    "id": "kivotos_item_decrypted_notes",
    "name": "Professor's Lost Scribbles",
    "description": "Professor's Lost Scribbles are a tattered, ink-splattered series of notes hastily scrawled in the margins of a discredited scholar's books. These cryptic pages hold fragments of forbidden knowledge, dangerous spells, and perhaps a recipe for a legendary mushroom stew, though the latter is more likely fiction than fact. Aided by these notes, you might uncover hidden quests, gain lore about the world, or solve a series of arcane mini-puzzles that could lead to untold secrets—or just a good meal plan.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📝",
    "stock": 40,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Lore Revelation",
      "Mini-Puzzle Trigger"
    ],
    "vendor": "club_supply",
    "shippedBy": "standard_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lore Revelation",
        "rules": "When you spend an hour studying the scribbles, roll a DC 12 Intelligence (History) check. On a success, you learn one significant piece of lore about a specific ancient artifact or spell. The GM determines its relevance to your current campaign."
      },
      {
        "title": "Mini-Puzzle Trigger",
        "rules": "Occasionally, while reading the notes, you trigger a mini-puzzle that requires a DC 15 Intelligence (Investigation) check to solve. Success reveals additional information or a clue towards completing an ongoing quest."
      }
    ],
    "levelRequirementReason": "The scribbles are complex and require basic understanding of lore and investigation.",
    "vendorReason": "Club Supply deals in all manner of scholarly curiosities, including the eccentric notes of a disgraced professor.",
    "shippingDetail": "Ships via standard mail service with no special handling required.",
    "usage": {
      "activation": "Studying the scribbles for an hour using your reading skill.",
      "duration": "Instantaneous, lasting until you solve a mini-puzzle or learn lore.",
      "endsWhen": "The puzzle is solved or the lore revealed. Additional uses require time to rest and study again.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "The scribbles are rare and hold significant potential for uncovering ancient secrets and solving complex puzzles.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T23:16:37.294351+00:00",
    "aiReviewedAt": "2026-07-23T23:16:37.294351+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_sparkling_scroll": {
    "id": "kivotos_item_sparkling_scroll",
    "name": "Sparkling Scroll of Minor Illusions",
    "description": "This scroll glimmers with a faint iridescence, its parchment aged and worn. When unrolled, it releases a cascade of sparkling light that can make objects appear larger or smaller, blurring reality for those caught within the spell's reach. It is the favored trickster’s tool, often used to mislead and confuse, as Wario has shown in his escapades. Perfect for distracting foes or fooling librarians into overlooking your actions.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "illusion",
      "maneuver"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Illusion",
        "rules": "You create the illusion of an object, a creature, or some other visible phenomenon within range. The illusion can take any form you choose; however, it must be no larger than a 10-foot cube and must occupy a space that is not occupied by an object or creature."
      },
      {
        "title": "Disrupt Focus",
        "rules": "For the duration of the effect (3 rounds), any creature within 15 feet that attempts to interact with a target of this illusion must make a Wisdom saving throw. On a failed save, it instead interacts with the illusion and cannot perceive or affect the real object for the duration."
      }
    ],
    "levelRequirementReason": "This scroll is crafted for beginners to practice their spellcasting abilities.",
    "vendorReason": "The student store caters to aspiring young mages looking to hone their skills with basic magical tools.",
    "shippingDetail": "Standard delivery, arrives within a week.",
    "usage": {
      "activation": "action",
      "duration": "3 rounds",
      "endsWhen": "the duration ends or the caster dismisses it as an action",
      "charges": "unlimited"
    },
    "priceReason": "The scroll's enhanced effects and rarity justify its high price, aligning with market value.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T23:16:27.684215+00:00",
    "aiReviewedAt": "2026-07-23T23:16:27.684215+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_celestial_harmony_amulet": {
    "id": "kivotos_item_celestial_harmony_amulet",
    "name": "Celestial Harmony Amulet - The Student's Blessing",
    "description": "The Celestial Harmony Amulet pulses with a serene, celestial light that resonates with the ancient magic of the academy. This amulet subtly enhances concentration and provides a soothing barrier against psychic attacks, making it an invaluable companion for any student facing overly critical professors or exams. Crafted from the essence of starlight and bound by the whispers of scholar spirits, this amulet is said to bring clarity and peace to its wearer's mind.",
    "category": "premium",
    "price": 1000,
    "icon": "🌟",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Enhanced Concentration",
      "Psychic Shield"
    ],
    "vendor": "club_supply",
    "shippedBy": "Royal Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Concentration",
        "rules": "While attuned, you have advantage on Intelligence (Insight) checks. This effect persists as long as you are wearing the amulet and does not expend charges or require a rest to recharge."
      },
      {
        "title": "Psychic Shield",
        "rules": "You gain resistance to psychic damage when wearing this amulet. The effect ends if you remove the amulet, take an action other than moving, or drop it as part of your action on your turn."
      }
    ],
    "levelRequirementReason": "This amulet is designed for students, making it accessible to those who need its calming effects early in their studies.",
    "vendorReason": "Club Supply specializes in academic and scholarly equipment, ensuring that students have the tools they need to succeed.",
    "shippingDetail": "The Royal Messenger delivers with unmatched speed and reliability, ensuring your amulet arrives in perfect condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts as long as you are wearing the amulet.",
      "endsWhen": "You remove the amulet or take an action other than moving while wearing it.",
      "charges": "Unlimited"
    },
    "priceReason": "This amulet is priced at 1000 XP, reflecting its balance between utility and rarity, making it accessible to students who need a bit of extra focus.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:16:55.346212+00:00",
    "aiReviewedAt": "2026-07-23T23:16:55.346212+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_goblin_gumbo": {
    "id": "earth_land_goblin_gumbo",
    "name": "Goblin Gumbo of Grumbling Gut",
    "description": "The Goblin Gumbo of Grumbling Gut is a suspiciously green concoction that smells faintly of old socks and regret. Despite its unappetizing appearance, this brew grants you an extra burst of stamina in the heat of battle, making your muscles feel like they're invigorated by the very essence of goblin resilience. It's rumored to be a favorite among goblin warriors—though perhaps for different reasons than their own claims suggest. Don't blame us if it leaves you with a craving for shiny rocks.",
    "category": "consumables",
    "price": 1000,
    "icon": "🤢",
    "stock": 72,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Stamina Boost",
      "Uncontrollable Hiccups"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "Swift Delivery Pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stamina Boost",
        "rules": "Consume the Gumbo to gain +2 to all Strength and Constitution checks, as well as an additional action on your turn for 3 turns. This effect ends if you take damage or when the duration expires."
      },
      {
        "title": "Uncontrollable Hiccups",
        "rules": "There is a 50% chance that consuming the Gumbo will cause uncontrollable hiccups for 1 minute, reducing your speed to 5 feet. This effect can be ended by taking no actions and resting for at least 1 hour."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers just starting their journey.",
    "vendorReason": "The Guild Quartermaster stocks essential supplies for new adventurers, including items that can enhance their performance in the field.",
    "shippingDetail": "Delivered swiftly by the trusted Swift Delivery PONY, ensuring you receive your Gumbo in peak condition.",
    "usage": {
      "activation": "Consume as a bonus action",
      "duration": "3 turns or until interrupted",
      "endsWhen": "Taking damage or when duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the item's moderate power and rarity.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:16:51.865327+00:00",
    "aiReviewedAt": "2026-07-23T23:16:51.865327+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_frostbite_amulet": {
    "id": "earth_land_item_frostbite_amulet",
    "name": "The Emperor’s Chill",
    "description": "The Emperor’s Chill, an amulet forged from the scales of a long-frozen dragon and enchanted with ancient ice magic, exudes a frosty aura that chills both body and soul. Wield it to slow your foes' movements and bolster your defense, but beware, for its icy touch might just trap you in eternal stasis if you're not careful. This relic is a masterwork of craft and magic, crafted by the hands of forgotten artisans long ago.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥶",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Freeze Target",
      "Enhanced Defense"
    ],
    "vendor": "magic_shop",
    "shippedBy": "ice_cart",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Freeze Target",
        "rules": "When you hit a target with an attack while wearing The Emperor’s Chill, there is a 15% chance the target becomes immobilized for 1d4 rounds. A successful DC 16 Dexterity saving throw ends this effect early."
      },
      {
        "title": "Enhanced Defense",
        "rules": "While wearing The Emperor’s Chill, you gain a +2 bonus to AC and a +1 bonus to all saving throws against cold-based attacks or effects. This enhancement persists for the duration of your concentration (up to 10 minutes)."
      }
    ],
    "levelRequirementReason": "This amulet requires a high level of magic sensitivity to wield effectively, hence the strict level requirement.",
    "vendorReason": "The magic shop specializes in rare and powerful relics from forgotten realms, making The Emperor’s Chill a natural fit for their inventory.",
    "shippingDetail": "Due to its fragile nature, this item requires special handling by the ice_cart service, which guarantees safe delivery within three days.",
    "usage": {
      "activation": "Activates with a successful hit on an enemy target.",
      "duration": "Instantaneous effect; ends when you no longer wear the amulet or the target makes a successful saving throw.",
      "endsWhen": "The effect ends if the target successfully saves against it or you remove the amulet.",
      "charges": "Unlimited uses, recharging after a short rest."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its epic rarity and the balance of its effects in combat.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-23T23:17:19.992794+00:00",
    "aiReviewedAt": "2026-07-23T23:17:19.992794+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_mythic_geode_of_resonance": {
    "id": "earth_land_item_mythic_geode_of_resonance",
    "name": "Wario’s Jackpot!",
    "description": "Wario’s Jackpot! is a colossal geode that pulses with an eerie glow and a tantalizing scent reminiscent of Wario's gourmet treats. Known to be the cradle of elemental chaos, this monstrosity can unleash unpredictable bursts of raw power, summoning tiny dragonkin or showering the area with confetti-like jellybeans. Handle it with care; its volatile nature makes it both a blessing and a curse for any who dare wield such a creation.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💎",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "summons_elemental_mimic",
      "confetti_rain"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summons Elemental Mimic",
        "rules": "As an action, the wielder can attempt to summon a tiny dragonkin. The creature appears within 10 feet of the geode and remains active for 1 minute or until dismissed by the owner. There is a 50% chance of successfully summoning one upon activation."
      },
      {
        "title": "Confetti Rain",
        "rules": "Once per long rest, the geode can release a cascade of colorful confetti that fills a 20-foot radius. All creatures within this area must succeed on a DC 15 Dexterity saving throw or be blinded for 1 round. The geode expends one use upon activation."
      }
    ],
    "levelRequirementReason": "Wielders must be at least Level 1 to handle the unpredictable nature of Wario’s Jackpot!",
    "vendorReason": "The Earth Emporium specializes in rare and exotic items, including this legendary geode.",
    "shippingDetail": "Ships via a trusted dragon courier, ensuring safe delivery to your doorstep.",
    "usage": {
      "activation": "Action or bonus action (summoning only)",
      "duration": "Instantaneous summoning; confetti rain lasts 1 minute",
      "endsWhen": "Dismissed by the owner or when its uses are exhausted",
      "charges": "2 charges, recharges after a long rest"
    },
    "priceReason": "This item's rarity and unpredictable power make it worth 1000 XP.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:17:07.138770+00:00",
    "aiReviewedAt": "2026-07-23T23:17:07.138770+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_shadow_essence": {
    "id": "pokemon_item_shadow_essence",
    "name": "Voidwalker’s Shard",
    "description": "A fragment of pure darkness, this shard is a relic from the twilight realm. Crafted from the very essence of shadowy creatures, it allows its wielder to briefly teleport short distances. Legends say it was once part of a greater artifact, now reduced to a shard that whispers tales of ancient battles fought in the dark. Wario’s greedy nature ensures his attempts at acquiring such a relic are always met with swift evasion and misdirection.",
    "category": "premium",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Shadow Teleport",
      "Evasion Boost"
    ],
    "vendor": "safari_shop",
    "shippedBy": "delivery_truck",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Teleport",
        "rules": "The user may activate this effect as an action to teleport up to 15 feet. The user must succeed on a Dexterity saving throw (DC 14) or fall prone, having overextended the shard's power."
      },
      {
        "title": "Evasion Boost",
        "rules": "For 1 minute after using Shadow Teleport, the user gains advantage on Dexterity saving throws. This effect ends early if the user takes any action other than a reaction."
      }
    ],
    "levelRequirementReason": "Users must have a solid grasp of their surroundings and reflexes to safely use this shard.",
    "vendorReason": "The safari shop specializes in rare artifacts found in dark, uncharted territories where the shard was rumored to be harvested.",
    "shippingDetail": "Ships via a specially reinforced delivery truck that can traverse shadowy terrains.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (recharges after 8 hours)",
      "endsWhen": "The user takes any action other than a reaction or falls prone due to the overextension of power.",
      "charges": "Unlimited, recharging after 8 hours."
    },
    "priceReason": "Balanced at this price as it requires a specific level and adds utility without breaking balance.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T23:17:09.447302+00:00",
    "aiReviewedAt": "2026-07-23T23:17:09.447302+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_sparkle_shard": {
    "id": "earth_land_sparkle_shard",
    "name": "Glittering Frostbite Shard",
    "description": "The Glittering Frostbite Shard is a crystalline fragment that shimmers with an ethereal glow, emitting a chilling aura when held. This shard can briefly coat the wielder in frost, slowing their movements and creating a frosty trail behind them. It's particularly effective against those who wear heavy armor, as it finds even the smallest gaps to exploit, making it a favorite among elves and gnomes for both combat and pranks.",
    "category": "curiosities",
    "price": 1000,
    "icon": "❄️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Frost Aura",
      "Stunning Frostbite"
    ],
    "vendor": "magic_shop",
    "shippedBy": "winged_snail",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Frost Aura",
        "rules": "The wielder of the shard gains a +1 bonus to Charisma (Deception) checks and is surrounded by a faint, shimmering frost. For 3 turns, their movement speed is reduced by -10 feet as they are encased in a thin layer of ice."
      },
      {
        "title": "Stunning Frostbite",
        "rules": "When the shard makes a successful hit against an opponent wearing less than full plate armor, there is a 30% chance to inflict 'frostbite' (reduces movement speed by -10 feet until the start of their next turn). This effect has no save DC."
      }
    ],
    "levelRequirementReason": "The shard's icy abilities require a certain level of control over one's surroundings and finesse with cold-based effects.",
    "vendorReason": "As the local mage has a particular interest in all things arcane, they are well-versed in crafting and selling items that manipulate elemental forces like this shard.",
    "shippingDetail": "The fragility of the shard necessitates careful handling by the winged snail courier to ensure it arrives intact.",
    "usage": {
      "activation": "A bonus action is required to activate and hold the shard.",
      "duration": "Instantaneous, with a duration of 3 turns when held.",
      "endsWhen": "The shard's effects end upon release or destruction.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced against other rare curiosities that offer both combat and utility benefits, this shard provides a unique and effective tool for frost-based strategies.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:17:20.042307+00:00",
    "aiReviewedAt": "2026-07-23T23:17:20.042307+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_forbidden_scroll": {
    "id": "earth_land_forbidden_scroll",
    "name": "The Whispers of Rot",
    "description": "The Whispers of Rot is an ancient, parchment-like scroll that glows a menacingly green hue, emanating eerie whispers that promise forbidden power and certain doom. Its touch alone can cause one's flesh to wither and turn pallid like rotting wood. This relic, forged in the dark heart of forgotten earth temples, grants immunity to poison but at the cost of heightened susceptibility to fungal infections, making its wielders prone to grotesque growths.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🍄",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "withering touch",
      "fungus vulnerability"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant beetle",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Withering Touch",
        "rules": "When a creature touches or is in close proximity to the scroll for more than an hour, they must make a DC 15 Constitution saving throw. On a failed save, they are reduced by -2 to their healing factor and suffer from withering until cured."
      },
      {
        "title": "Fungus Vulnerability",
        "rules": "The user gains immunity to poison but becomes vulnerable to fungal infections. Any creature in contact for more than 10 minutes must make a DC 17 Constitution saving throw or become infected, dealing 2d4 points of damage each day until cured."
      }
    ],
    "levelRequirementReason": "Only the most seasoned adventurers can withstand The Whispers of Rot's dark magic without succumbing to its rotting influence.",
    "vendorReason": "The Earth Emporium is known for its rare and dangerous artifacts, making it the perfect vendor for this forbidden scroll.",
    "shippingDetail": "Due to its volatile nature, The Whispers of Rot must be delivered by a giant beetle courier with specialized containment measures.",
    "usage": {
      "activation": "Passive effect upon touching or proximity; requires no action.",
      "duration": "Until cured or the scroll's effects are ended.",
      "endsWhen": "The user successfully removes the scroll from their possession and performs a successful DC 15 Constitution saving throw, or the scroll is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Despite its mythic rarity, The Whispers of Rot's price reflects its balance between danger and utility, ensuring it remains a sought-after but not overpowered item.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:17:28.337654+00:00",
    "aiReviewedAt": "2026-07-23T23:17:28.337654+00:00",
    "aiReviewVersion": 1
  }
};
