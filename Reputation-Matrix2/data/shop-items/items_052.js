// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_052 = {
  "doughnut_hole_gravitational_donut": {
    "id": "doughnut_hole_gravitational_donut",
    "name": "Singularity Swirl Donut",
    "description": "The Singularity Swirl Donut appears to be a confectionary marvel, crafted from an unknown dough that seems to defy gravity itself. Each bite sends ripples through your personal space-time continuum, briefly distorting your surroundings and causing you to either leap skyward or stumble comically in place. This cosmic delicacy is said to have been baked by the enigmatic Hole Hawker using ingredients smuggled from beyond the stars via a Void Portal Courier.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍩",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Distortion",
      "Comical Stumble"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Portal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "As an action, you consume one bite of the donut. For 1 minute, a minor gravitational distortion affects your movements. You gain advantage on Strength (Athletics) checks made to jump and are immune to falling damage during this time. This effect ends if you take any fall damage or if another creature within 5 feet of you takes such damage."
      },
      {
        "title": "Comical Stumble",
        "rules": "At the beginning of each of your turns, there is a 20% chance that after you roll for initiative, you will stumble and fall prone. On a failed Dexterity saving throw (DC 13), this effect occurs immediately at the start of your turn instead."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurer can indulge in the whimsical effects of this cosmic treat, though it's best savored with caution.",
    "vendorReason": "Hole Hawker is known for their peculiar and often unpredictable wares, including items that challenge reality itself, making the Singularity Swirl Donut a fitting addition to their inventory.",
    "shippingDetail": "The donuts are delivered fresh from beyond the stars, arriving in perfect condition but only within a week of baking. Orders placed after midnight do not ship until the following day.",
    "usage": {
      "activation": "Eaten as an action.",
      "duration": "1 minute per bite consumed.",
      "endsWhen": "You take fall damage or another creature nearby does so; or you eat another bite of a Singularity Swirl Donut.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "The ingredients and delivery method are quite unique, justifying this price point for an item that offers both practical benefits and sheer amusement.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T20:47:29.042932+00:00",
    "aiReviewedAt": "2026-07-23T20:47:29.042932+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_chronal_armor": {
    "id": "doughnut_hole_chronal_armor",
    "name": "Temporal Glaze Breastplate",
    "description": "Forged from solidified chronal energy by the Timekeepers of Chronos, this Temporal Glaze Breastplate allows you to briefly rewind minor mistakes. It's not a time machine, but it can save your skin when you fumble an attack or trip over your words in a crucial moment. Just try not to accidentally erase your entire existence! Wearing this breastplate grants the wearer the ability to negate damage on missed attacks and slow down enemy projectiles, giving them precious moments of reprieve.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Negate Missed Attack Damage",
      "Slow Enemy Projectiles"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Courier Network",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Negate Missed Attack Damage",
        "rules": "When you miss an attack roll with a melee weapon or a ranged projectile, you can use a bonus action to negate the damage dealt. This effect lasts until your next turn."
      },
      {
        "title": "Slow Enemy Projectiles",
        "rules": "For 1 minute after you hit with a ranged weapon, all enemy projectiles within 30 feet of you move at half speed. You can use a bonus action to end this effect early."
      }
    ],
    "levelRequirementReason": "The intricate chronal patterns etched into the breastplate require a deep understanding of time manipulation, which is only achieved by seasoned adventurers.",
    "vendorReason": "Center Seller maintains exclusive partnerships with the Timekeepers of Chronos, ensuring their most prized creations reach capable hands.",
    "shippingDetail": "The Temporal Courier Network ensures swift delivery via time-bending routes that can only be accessed by those who possess a Temporal Glaze Breastplate.",
    "usage": {
      "activation": "Bonus action to negate missed attack damage; bonus action or reaction to slow enemy projectiles.",
      "duration": "Instantaneous for negating damage, 1 minute for slowing projectiles; ends when the effect is used again or when your next turn begins.",
      "endsWhen": "Used again or at the start of your next turn after negating missed attack damage; can be ended early as a bonus action after hitting with a ranged weapon.",
      "charges": "Unlimited, but only one instance of each effect can be active per round."
    },
    "priceReason": "The Temporal Glaze Breastplate is priced at 1000 XP due to its mythic rarity and the advanced chronal technology required for its crafting.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T20:47:29.226316+00:00",
    "aiReviewedAt": "2026-07-23T20:47:29.226316+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_anomaly_orb": {
    "id": "doughnut_hole_anomaly_orb",
    "name": "Void Echo Orb",
    "description": "The Void Echo Orb is a shimmering, pulsating sphere that hums with the essence of alternate realities. Held briefly, it reveals glimpses of other donut shops—each more bizarre than the last, filled with peculiar treats and whimsical architecture. The orb's light flickers with an ethereal glow, hinting at the fabric of reality being stretched. Use it wisely; prolonged exposure can stir unsettling thoughts or an overwhelming desire for a glazed jellybean twist.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "revelation_of_alternate_realities",
      "boosts_perception"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Quantum Entanglement Package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Revelation of Alternate Realities",
        "rules": "When held, the orb reveals glimpses of alternate versions of donut shops. This effect lasts for 1 minute per level of the user. The user can make a Perception check to gain temporary insights into hidden details of their surroundings. On a successful check, they learn one secret about their immediate environment."
      },
      {
        "title": "Boosts Perception",
        "rules": "The user gains advantage on all Perception checks made within 30 feet for the duration of holding the orb. The effect ends when the user stops concentrating or if the orb is destroyed."
      }
    ],
    "levelRequirementReason": "Even a novice adventurer can benefit from glimpsing alternate realities.",
    "vendorReason": "The Void Vendor specializes in items that distort reality, making this a perfect addition to their inventory.",
    "shippingDetail": "Ships via quantum courier; arrives instantly but requires a signature from the recipient upon arrival.",
    "usage": {
      "activation": "Holding the orb briefly for at least 10 seconds",
      "duration": "1 minute per user level",
      "endsWhen": "The user stops concentrating or the orb is destroyed",
      "charges": "Unlimited, as long as it remains intact"
    },
    "priceReason": "Balanced price considering its unique and useful effects.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-23T20:46:57.489130+00:00",
    "aiReviewedAt": "2026-07-23T20:46:57.489130+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_glowing_stool": {
    "id": "mushroom_kingdom_item_glowing_stool",
    "name": "Glowy Stool of Grunt",
    "description": "The Glowy Stool of Grunt radiates a soft, pulsating glow that seems to absorb ambient light and reflect it back in waves. Crafted from the timeworn wood of ancient mushroom trees, this stool not only enhances one's step but also whispers tales of mischievous forest spirits. Rumor has it that sitting on it might attract the attention of grumpy mushroom guardians, which is why the stool emits a faint hum to ward them off.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 35,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increased_movement_speed",
      "chance_to_reflect_damage"
    ],
    "vendor": "wario_direct",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Increased Movement Speed",
        "rules": "While sitting on the Glowy Stool of Grunt, you gain a +1 bonus to your walking speed. This effect is passive and lasts for as long as you remain seated."
      },
      {
        "title": "Chance to Reflect Damage",
        "rules": "Once per short rest, when you are hit by an attack while sitting on the stool, you can choose to take half the damage instead of full. You must make a DC 15 Dexterity saving throw; if you succeed, the attack is negated and the attacker takes 2d6 force damage."
      }
    ],
    "levelRequirementReason": "The stool's ancient magic requires a certain level of understanding to harness its full potential.",
    "vendorReason": "Wario, with his extensive network of underground deals, has managed to acquire this rare and quirky piece of furniture.",
    "shippingDetail": "The stool is carefully packed in a special mushroom cart that delivers it directly from the Mushroom Kingdom's heart, ensuring its arrival is both safe and timely.",
    "usage": {
      "activation": "Passive effect while seated on the stool.",
      "duration": "Instantaneous; ends when you stand up or lose your Dexterity modifier.",
      "endsWhen": "You stand up or lose your Dexterity modifier.",
      "charges": "Unlimited, recharges at dawn."
    },
    "priceReason": "The stool's rarity and the magic imbued in it justify its relatively lower price compared to other epic items of similar power.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T20:47:27.280009+00:00",
    "aiReviewedAt": "2026-07-23T20:47:27.280009+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_coin_of_greed": {
    "id": "mushroom_kingdom_item_coin_of_greed",
    "name": "Coin of Unending Want",
    "description": "This tarnished coin, a relic from the Mushroom Kingdom's darkest days, whispers promises of infinite riches to those who gaze upon it too long. Its surface is etched with arcane symbols that seem to pulse faintly in the dark. Holding it can lead to obsessive hoarding and a crippling fear of empty pockets; even seasoned adventurers have been known to sell their armor for its fleeting promise of endless gold.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💰",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_find_extra_gold",
      "negative_party_morale"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "snail_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Chance to Find Extra Gold",
        "rules": "When used, the coin grants a +1 bonus to one treasure roll per day. The effect lasts until used or discarded."
      },
      {
        "title": "Negative Party Morale",
        "rules": "For every 3 days the coin is held by any party member, there is a 20% chance that the next encounter with a hostile creature will result in a -1 penalty to all attack rolls and saving throws until the end of the day."
      }
    ],
    "levelRequirementReason": "The coin's power is too great for novices, requiring at least first-level characters to wield it safely.",
    "vendorReason": "Toad Town Market often sells items with dark histories, and this coin's origins are no secret.",
    "shippingDetail": "Ships via snail mail, ensuring the coin arrives at its destination in one piece but not before a week of delays.",
    "usage": {
      "activation": "Used as an action to activate its effects for a day.",
      "duration": "Until used or discarded.",
      "endsWhen": "The effect ends when used or if lost by a party member.",
      "charges": "Unlimited, but only one effect can be active per day."
    },
    "priceReason": "Its dark history and the risks it poses to adventurers justify its high price in experience points.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T20:47:26.084223+00:00",
    "aiReviewedAt": "2026-07-23T20:47:26.084223+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_dark_fungus_essence": {
    "id": "mushroom_kingdom_item_dark_fungus_essence",
    "name": "Essence of Rotting Regret",
    "description": "The Essence of Rotting Regret is a vial containing a dark, viscous liquid that simmers like molten despair. Harvested from the deepest fungi caverns, it induces vivid nightmares and a profound sense of melancholy. Those who consume it may experience moments of existential clarity, but at the cost of their party's morale, which plummets for hours afterward. Use with caution; prolonged exposure may result in permanent psychological damage, or just a really bad headache.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💀",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Nightmare Inducer",
      "Party Morale Sink"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "shadow_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nightmare Inducer",
        "rules": "When consumed as an action, the user must succeed on a DC 15 Wisdom saving throw or be incapacitated for 1 minute. During this time, they are subjected to vivid nightmares that cause no damage but leave them exhausted."
      },
      {
        "title": "Party Morale Sink",
        "rules": "For each hour after consuming the essence, all party members within a 30-foot radius suffer from a -2 penalty to attack rolls and saving throws. This effect lasts for up to 8 hours, but can be mitigated by a successful Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "Even the lowliest adventurer might find themselves tempted by the essence's promise of insight.",
    "vendorReason": "The Koopa Shop specializes in exotic and dark wares, making it a fitting vendor for this macabre elixir.",
    "shippingDetail": "Ships via Shadow Delivery within three days of purchase. Handle with care; the essence is fragile and can leak during transit.",
    "usage": {
      "activation": "Consumed as an action, or applied to a drink.",
      "duration": "Instantaneous use, but effects last for up to one minute on failure, and eight hours after consumption.",
      "endsWhen": "The user successfully saves against the effect, or the duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The essence is rare but not overly powerful; its price reflects its dark allure and potential for misuse.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T20:48:01.038723+00:00",
    "aiReviewedAt": "2026-07-23T20:48:01.038723+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_potion_of_grizzly_stomach": {
    "id": "faerun_item_potion_of_grizzly_stomach",
    "name": "Potion of Grizzly Stomach",
    "description": "The Potion of Grizzly Stomach is a murky, frothy concoction that reeks of fermented berries and wild fur. Upon consumption, you are granted the ferocious appetite and primal instincts of a grizzly, making you immune to exhaustion but driving you to seek out food—preferably meat—at all costs. This potent brew grants advantage on Survival checks for 1 hour and leaves you in a temporary state of madness (roll a d4: 1-Confusion, 2-Paranoia, 3-Extreme Hunger, 4-Berserk), which can be temporarily controlled by focusing your willpower.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 91,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "Survival Advantage",
      "Primal Madness"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "swift hawk courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Survival Advantage",
        "rules": "The drinker gains advantage on all Survival checks for 1 hour. This effect ends when the duration expires or if you are incapacitated."
      },
      {
        "title": "Primal Madness",
        "rules": "You enter a temporary state of madness (roll a d4: 1-Confusion, 2-Paranoia, 3-Extreme Hunger, 4-Berserk). This effect lasts for the duration or until you successfully cast a spell. You can attempt to shake off this madness by concentrating on it as an action."
      }
    ],
    "levelRequirementReason": "This potion is accessible to low-level characters who need to survive in harsh environments or confront dangerous creatures.",
    "vendorReason": "The Waterdeep Market frequently stocks items that can be found beyond the city's borders, including this potent survival aid.",
    "shippingDetail": "Ships via swift hawk courier for expedited delivery within a week of purchase.",
    "usage": {
      "activation": "Drink",
      "duration": "1 hour or until incapacitated",
      "endsWhen": "Duration ends, you are incapacitated, or you successfully cast a spell",
      "charges": "Unlimited"
    },
    "priceReason": "The potion's effectiveness in survival situations and the potential for temporary madness justify its high price.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T20:47:58.329886+00:00",
    "aiReviewedAt": "2026-07-23T20:47:58.329886+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_scroll_of_minor_illusion": {
    "id": "faerun_item_scroll_of_minor_illusion",
    "name": "Scroll of Minor Illusion (Wario’s Version)",
    "description": "This scroll, hastily crafted by the mischievous Wario in his mushroom-infested lab, creates small and often bizarre illusions that can either be mistaken for delectable snacks or unsettlingly grotesque objects. The parchment crackles with a faint, earthy glow as it releases these ephemeral images, which linger for only 1 minute before fading into nothingness. These simple, visual diversions are more of a distraction than anything else, but their uncanny realism makes them quite effective at throwing off unsuspecting foes or luring in curious onlookers.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 34,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Visual Distraction",
      "Ephemeral Illusion"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "pony express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Visual Distraction",
        "rules": "Activates as a bonus action. The scroll creates an illusion that lasts for 1 minute, providing advantage on Dexterity (Stealth) checks made to avoid detection within the area of effect."
      },
      {
        "title": "Ephemeral Illusion",
        "rules": "The illusions created are small and simple in nature, limited to objects or images no larger than a medium creature. These illusions have no mechanical effects but can be seen by all creatures within 30 feet who do not succeed on a DC 12 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "Requires only level 1 to use, as its effects are more about distraction than combat.",
    "vendorReason": "Baldur's Bazaar often stocks unique and whimsical items from various realms, including this scroll with a touch of the absurd.",
    "shippingDetail": "Shipped via the Pony Express for quick delivery, ensuring adventurers receive their scrolls in time for their next grand adventure.",
    "usage": {
      "activation": "Bonus action to create an illusion.",
      "duration": "1 minute per use.",
      "endsWhen": "The illusion ends if a creature within range of the scroll succeeds on its saving throw or if the scroll is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, reflecting the scroll's unique and humorous design as a minor illusion tool for distraction.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:48:31.247236+00:00",
    "aiReviewedAt": "2026-07-23T20:48:31.247236+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_gloomfruit_1": {
    "id": "animatopia_gloomfruit_1",
    "name": "Gloomfruit Tartlet",
    "description": "The Gloomfruit Tartlet is a bittersweet confection made from the rare Gloomfruit, harvested in the deep shadowed valleys of Animatopia. Its dark purple skin hides a tangy flavor that grants a fleeting advantage to your stealth and an eerie glow that enhances your vision in darkness. Beware, for the tartlet's effects are as fleeting as the shadows they empower—once consumed, it’s best to move swiftly before its magic fades.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍇",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Stealth Boost",
      "Dark Vision"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "Winged Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Boost",
        "rules": "When consumed, the Gloomfruit Tartlet grants you advantage on Dexterity (Stealth) checks for 1 minute. This effect ends if you take any action other than moving or speaking."
      },
      {
        "title": "Dark Vision",
        "rules": "The tartlet also enhances your vision in dim light to bright light, allowing you to see normally. This effect lasts until the start of your next turn after consuming the tartlet."
      }
    ],
    "levelRequirementReason": "This treat is suitable for adventurers with less experience, as it provides a temporary advantage without demanding high levels.",
    "vendorReason": "The Tribal Trader specializes in exotic and rare goods from Animatopia, making the Gloomfruit Tartlet an appropriate addition to their inventory.",
    "shippingDetail": "Delivered swiftly by the swift Winged Messengers of Animatopia, ensuring you receive your tartlet fresh from its source.",
    "usage": {
      "activation": "Eaten as a normal action",
      "duration": "1 minute for Stealth Boost; until start of next turn for Dark Vision",
      "endsWhen": "You take an action other than moving or speaking (Stealth); the start of your next turn (Dark Vision)",
      "charges": "Unlimited, consumed upon first bite"
    },
    "priceReason": "The rarity and craftsmanship involved in creating this treat justify its high price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T20:47:46.048633+00:00",
    "aiReviewedAt": "2026-07-23T20:47:46.048633+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_stonefang_amulet": {
    "id": "animatopia_stonefang_amulet",
    "name": "Stonefang Amulet of the Howling Beast",
    "description": "Forged from a genuine fang of the legendary Stonefang, this amulet pulses with primal energy. Wear it to summon a miniature howler beast that assists you in battle—just try not to get eaten! (It’s mostly friendly...mostly.) The fangs are said to have been taken during a fierce storm when the Stonefang roared its last. It grants resistance to fear effects and boosts your attack damage, but beware, it can also unleash primal wrath if misused.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐺",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Summons Howler Beast",
      "Boosts Attack Damage"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Giant Beetle Courier",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Summons Howler Beast",
        "rules": "When activated as an action, this amulet summons a small howler beast (HP: 25, Attack: 6) that assists you in battle. The beast lasts for 1 minute or until it is destroyed. It has resistance to fear effects and cannot be commanded by others."
      },
      {
        "title": "Boosts Attack Damage",
        "rules": "The wearer gains a +5 bonus to attack rolls against beasts and creatures of the earth subtype for 30 seconds. This effect can only activate once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires level 12 to harness the primal power of the Stonefang.",
    "vendorReason": "The Beast Bazaar specializes in items that interact with nature and beasts, making it the perfect vendor for this amulet.",
    "shippingDetail": "The Giant Beetle Courier delivers swiftly but may require a brief detour to avoid rocky terrain.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until destroyed",
      "endsWhen": "Destroyed or dismissed by the wearer",
      "charges": "Unlimited, recharges after a short or long rest"
    },
    "priceReason": "The amulet’s rare material and unique enchantment justify its fair price of 1000 XP.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T20:48:16.264898+00:00",
    "aiReviewedAt": "2026-07-23T20:48:16.264898+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_spirit_pearl": {
    "id": "animatopia_spirit_pearl",
    "name": "Spirit Pearl of Whispered Secrets",
    "description": "The Spirit Pearl of Whispered Secrets is a shimmering orb that glows with an ethereal light, capturing the whispers of Animatopia's ancient spirits. When held, it grants you the ability to understand animal speech for 1 minute, allowing you to communicate with any creature within 30 feet that has an Intelligence score of 2 or lower. Additionally, it reveals hidden pathways and secrets in your immediate area, but beware—these revelations may be cryptic at best! The pearl's magic is said to have been forged by the forest spirits themselves, ensuring its power remains mysterious and unpredictable.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Understand Animal Speech",
      "Reveal Hidden Secrets"
    ],
    "vendor": "forest_market",
    "shippedBy": "Sky Serpent Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Understand Animal Speech",
        "rules": "When activated as a bonus action, you can understand any animal within 30 feet that has an Intelligence score of 2 or lower. This effect lasts for 1 minute and requires no saving throw."
      },
      {
        "title": "Reveal Hidden Secrets",
        "rules": "Once per short rest, this pearl can be used to reveal hidden pathways or secrets in your immediate area (within 30 feet). The exact nature of the revelation depends on the environment, but it could provide a critical advantage. This effect is instantaneous and does not require saving throw."
      }
    ],
    "levelRequirementReason": "The Spirit Pearl's magic is accessible to all adventurers who wish to communicate with nature.",
    "vendorReason": "Forest Market, known for its connection to the natural world, offers this mystical item as a way to bridge the gap between humans and wildlife.",
    "shippingDetail": "Ships via the Sky Serpent Delivery service, ensuring safe arrival within one week of purchase.",
    "usage": {
      "activation": "Bonus action or reaction (depending on context)",
      "duration": "Instantaneous reveal; speech lasts for 1 minute",
      "endsWhen": "Effect ends when its duration expires or you lose concentration",
      "charges": "Unlimited, but limited to one reveal per short rest"
    },
    "priceReason": "The Spirit Pearl's price reflects its rarity and the unique abilities it grants, making it a valuable tool for adventurers seeking to navigate the wilds of Animatopia.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-23T20:48:16.539221+00:00",
    "aiReviewedAt": "2026-07-23T20:48:16.539221+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_block_of_resonance": {
    "id": "connectopia_block_of_resonance",
    "name": "Resonant Brick Fragment",
    "description": "This Resonant Brick Fragment pulses faintly, its surface etched with ancient runes that seem to hum in time with Connectopia’s mystical heartbeat. Crafters report an uncanny increase in efficiency when working with this fragment; tools wielded near it feel as though they are amplified by the very essence of creation itself. The air around it occasionally thickens, and a curious robotic squirrel may wander into your workshop, offering a bemused glance before scurrying away.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧱",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Crafting Efficiency Boost",
      "Attract Robotic Squirrels"
    ],
    "vendor": "craft_corner",
    "shippedBy": "automated_drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Crafting Efficiency Boost",
        "rules": "While holding this fragment, your crafting speed increases by +10%. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Attract Robotic Squirrels",
        "rules": "Once per day, you can use an action to call upon a robotic squirrel. It appears within 30 feet and remains for up to 1 hour or until it is dismissed by the fragment's owner."
      }
    ],
    "levelRequirementReason": "Crafting with this fragment requires a certain degree of focus and experience, making level 5 an appropriate threshold.",
    "vendorReason": "Craft Corner specializes in items that enhance the creativity and productivity of its patrons, so it makes sense for them to stock this unique artifact.",
    "shippingDetail": "The automated drones deliver the fragment directly to your workshop via a special courier service, ensuring its arrival is timely and intact.",
    "usage": {
      "activation": "Use an action while holding the fragment for crafting efficiency boost; use an action once per day to attract a robotic squirrel.",
      "duration": "Crafting speed increase lasts until rest ends; robotic squirrel remains up to one hour or dismissed.",
      "endsWhen": "Rest ends or robotic squirrel is dismissed by the owner.",
      "charges": "One daily use."
    },
    "priceReason": "The price reflects a significant crafting enhancement and unique interaction with robotic wildlife, justifying its cost.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T20:48:32.666345+00:00",
    "aiReviewedAt": "2026-07-23T20:48:32.666345+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_post_contract": {
    "id": "connectopia_pioneer_post_contract",
    "name": "Pioneer's Guarantee Scroll",
    "description": "The Pioneer's Guarantee Scroll is a parchment sealed with the official wax of the esteemed Pioneer Post. It promises protection against bandit attacks and resource scarcity, but this promise comes at a steep cost: it only holds true for a single day. The scroll’s effectiveness is legendary, as no one expects a bureaucratic organization to actually enforce its word. Use it wisely, or you'll find yourself in their official records forever!",
    "category": "faction",
    "price": 1000,
    "icon": "✉️",
    "stock": 25,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Bandit Resistance",
      "Resource Boost"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "horseback courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bandit Resistance",
        "rules": "Until the end of your next turn, gain resistance to all damage from bandits. This effect is instantaneous and requires no action."
      },
      {
        "title": "Resource Boost",
        "rules": "For 24 hours, you have a +5% chance to receive free supplies upon traveling through areas known for resource scarcity. This effect has no save DC but can only be used once per day."
      }
    ],
    "levelRequirementReason": "This scroll is designed for all adventurers who might encounter bandits or need resources, regardless of their level.",
    "vendorReason": "The Pioneer Post issues this guarantee to protect its members and travelers through dangerous lands.",
    "shippingDetail": "Sent by trusted couriers on swift steeds; delivery within a week of purchase.",
    "usage": {
      "activation": "Instantaneous when activated",
      "duration": "Until the end of your next turn for Bandit Resistance, and 24 hours for Resource Boost",
      "endsWhen": "The effects expire naturally or if you use it again before the duration ends",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its limited daily use and significant benefits.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T20:48:34.021761+00:00",
    "aiReviewedAt": "2026-07-23T20:48:34.021761+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_legendary_geode_of_synchronicity": {
    "id": "connectopia_legendary_geode_of_synchronicity",
    "name": "The Synchronized Core",
    "description": "The Synchronized Core glows with a mesmerizing pulse, its facets shimmering like the stars in Connectopia's sky. This geode is said to be forged from the very essence of the city's block network, allowing its wielder brief glimpses into future placements and the ability to phase through solid structures. However, overuse can trigger unexpected building projects that disrupt the city’s harmony, making careful timing crucial for those who dare to wield it.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💎",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Insight",
      "Phasing Pulse"
    ],
    "vendor": "block_smith",
    "shippedBy": "reinforced_crate",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Temporal Insight",
        "rules": "As a bonus action, you can use the Synchronized Core to gain a +20% chance to predict the placement of the next block. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Phasing Pulse",
        "rules": "By using an action, you can activate the Phasing Pulse, allowing you to phase through solid structures as if they were air. This ability lasts for 3 turns and can only be used once every short or long rest."
      }
    ],
    "levelRequirementReason": "The complex mechanics of the Synchronized Core require a player of at least level 14 to fully grasp its nuances and risks.",
    "vendorReason": "The block smith, a master craftsman of Connectopia's architecture, is privy to the geode’s origins and can provide it only to those who understand its value.",
    "shippingDetail": "The reinforced crate ensures safe delivery through the city’s bustling streets, often requiring a courier's agility to navigate.",
    "usage": {
      "activation": "Bonus action for Temporal Insight; Action for Phasing Pulse",
      "duration": "1 minute (Temporal Insight); 3 turns (Phasing Pulse)",
      "endsWhen": "Ends when the effect duration is over or you lose your concentration on it, whichever comes first.",
      "charges": "Once per short or long rest"
    },
    "priceReason": "The Synchronized Core’s price reflects its rarity and the unique balance between utility and risk it offers to players.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-23T20:48:52.404053+00:00",
    "aiReviewedAt": "2026-07-23T20:48:52.404053+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_gravitron_cog": {
    "id": "grand_country_gravitron_cog",
    "name": "Gravitron Cog of Shifting Sands",
    "description": "The Gravitron Cog of Shifting Sands is a bizarre metallic contraption that defies gravity, its gears spinning in unpredictable patterns. Crafted by Wario himself, it seems to manipulate the very fabric of stability around it, often causing nearby objects or creatures to wobble and falter. It can be a handy tool for adventurers who need an unstable edge in their contraptions, yet its shifting nature makes it a peculiar toy for those with a penchant for chaos.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⚙️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Unstable Stability",
      "Tumbling Tendency"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Giant Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unstable Stability",
        "rules": "When activated as an action, the Gravitron Cog causes a target within 5 feet to have their speed reduced by 10 feet for 3 turns. The effect ends if the target successfully makes a Dexterity saving throw with a DC of 12."
      },
      {
        "title": "Tumbling Tendency",
        "rules": "The Gravitron Cog increases the chance of a creature becoming prone by 10%. This increase persists for as long as the cog is active. The effect ends if the cog is destroyed or when a creature makes a successful Dexterity saving throw."
      }
    ],
    "levelRequirementReason": "This cog requires no specific level because it serves more as a whimsical tool than a combat item.",
    "vendorReason": "Vertical Vendor specializes in unique and quirky items, making the Gravitron Cog of Shifting Sands a perfect addition to their inventory.",
    "shippingDetail": "The Giant Delivery Drone ensures that your cog arrives with a slight vibration, adding to its chaotic essence.",
    "usage": {
      "activation": "Action",
      "duration": "3 turns",
      "endsWhen": "Target makes a Dexterity saving throw or the cog is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its utility as both a toy and tool, making it accessible to all adventurers.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T20:48:48.905712+00:00",
    "aiReviewedAt": "2026-07-23T20:48:48.905712+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_layer_stone_shard": {
    "id": "grand_country_layer_stone_shard",
    "name": "Layered Obsidian Shard of Echoes",
    "description": "The Layered Obsidian Shard of Echoes glimmers faintly, its facets reflecting shifting images from forgotten battles and lost treasures. Touching it briefly reveals fragmented visions of past events within layered terrain—most notably Wario's perpetual misadventures in the Mushroom Kingdom. This relic grants the user limited precognition (chance to see 1-3 turns ahead), enhancing their perception checks when navigating such environments, and can be used as a temporary focus for divination spells.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💎",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Limited Precognition",
      "Enhanced Perception Checks"
    ],
    "vendor": "layer_market",
    "shippedBy": "Winged Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Limited Precognition",
        "rules": "When the user touches the shard, they gain advantage on their next three perception checks. This effect lasts for one hour and can be used once per long rest."
      },
      {
        "title": "Enhanced Perception Checks",
        "rules": "The user gains a +1 bonus to all perception checks made within layered terrain features such as dungeons or ruins. This benefit is permanent until the next time they interact with the shard."
      }
    ],
    "levelRequirementReason": "Lowering the level requirement allows adventurers at earlier stages of their journey to benefit from the shard's abilities.",
    "vendorReason": "The Layer Market specializes in ancient and arcane artifacts found within layered environments, making it the perfect vendor for the Layered Obsidian Shard of Echoes.",
    "shippingDetail": "This item is delivered via Winged Courier, ensuring swift arrival to eager collectors.",
    "usage": {
      "activation": "Touching the shard",
      "duration": "One hour per use, lasting until the next long rest",
      "endsWhen": "The effect ends upon resting or after three uses in a day",
      "charges": "Unlimited, but can only be used once per short or long rest"
    },
    "priceReason": "The reduced price reflects the item's lower level requirement and its more focused utility compared to other mythic items.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-24T23:50:07.999749+00:00",
    "aiReviewedAt": "2026-07-24T23:50:07.999749+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_gravity_massage": {
    "id": "grand_country_gravity_massage",
    "name": "Zero-G Relaxation Therapy",
    "description": "Step into the Zero-G Relaxation Therapy pod and experience the ultimate in muscle rejuvenation. The pod uses a unique combination of gravitational manipulation and precision air currents to massage your body, creating an environment where gravity seems to float you gently in place. After just one session, feel your muscles unclench as all negative status effects are removed for two turns. Your Charisma also receives a temporary boost, making you more eloquent and persuasive for the next four turns.",
    "category": "services",
    "price": 1000,
    "icon": "💆‍♀️",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Muscle Relaxation",
      "Negative Status Removal"
    ],
    "vendor": "side_seller",
    "shippedBy": "None - immediate service within the pod",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Muscle Relaxation",
        "rules": "Upon activation, the pod's gravitational manipulation and air currents work together to relax your muscles. This effect restores 50 hit points and removes all negative status effects for two turns. The relaxation lasts until one of these conditions ends: (1) a successful DC 14 Constitution saving throw, or (2) you take damage."
      },
      {
        "title": "Charisma Boost",
        "rules": "Your Charisma score is increased by 1 for four turns after the pod session. This boost can be used to improve your performance in social interactions and persuasive endeavors. The effect ends at the end of this duration, or if you take damage."
      }
    ],
    "levelRequirementReason": "This service is available to all adventurers seeking a restorative experience without demanding high-level feats.",
    "vendorReason": "Side_seller specializes in unique and unconventional services that cater to the whims of travelers and adventurers alike, offering this pod as an exclusive treat for those in need of relaxation.",
    "shippingDetail": "The service is instantaneous once you enter the pod; no waiting time required.",
    "usage": {
      "activation": "Passive effect upon entering the pod",
      "duration": "Instantaneous and lasts for four turns or until interrupted by damage",
      "endsWhen": "On successful Constitution saving throw, taking damage, or at the end of its duration",
      "charges": "Unlimited"
    },
    "priceReason": "The service is priced lower due to its immediate and non-consumable nature, providing a lasting benefit without requiring material components.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T20:48:52.589563+00:00",
    "aiReviewedAt": "2026-07-23T20:48:52.589563+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_skullsplitter_1": {
    "id": "warhammer_skullsplitter_1",
    "name": "Skullsplitter Warhammer",
    "description": "The Skullsplitter Warhammer, forged from the bones of fallen soldiers, exudes a dark, almost sentient power. Its haft is reinforced with iron bands and its head is adorned with an ancient rune that whispers malevolent secrets to those who wield it. This weapon guarantees a crushing blow, capable of turning the strongest foe into dust with each strike. However, those who use it must beware, for it seems to have a mind of its own, often striking out at unintended targets in its fervor to destroy.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "damage_2d8",
      "chance_to_bleed"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Emissary of the Crown",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Crushing Blow",
        "rules": "When you make a melee attack with the Skullsplitter Warhammer, it deals an additional 1d6 bludgeoning damage. If the target is reduced to half its hit points or fewer by this weapon, there is a 50% chance that they bleed out and take an additional 1d4 necrotic damage at the start of their next turn."
      },
      {
        "title": "Sentient Wrath",
        "rules": "At the end of each of your turns while wielding the Skullsplitter Warhammer, there is a 25% chance that it will lash out and target an enemy within 5 feet of you. This attack deals 1d8 bludgeoning damage and has disadvantage if you are concentrating or using an action."
      }
    ],
    "levelRequirementReason": "The weapon's dark magic and bone composition require a certain level of magical awareness to wield effectively.",
    "vendorReason": "The Imperial Armory is known for its rigorous testing and quality control, ensuring that only the most potent weapons are sold.",
    "shippingDetail": "Delivered with a royal escort to ensure timely arrival.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Until the start of your next turn",
      "endsWhen": "You sheathe it or drop the weapon, or if you take an action other than moving",
      "charges": "Unlimited"
    },
    "priceReason": "The weapon's rare materials and dark enchantments justify its high price.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T20:50:02.549602+00:00",
    "aiReviewedAt": "2026-07-23T20:50:02.549602+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_obsidian_mirror": {
    "id": "warhammer_item_obsidian_mirror",
    "name": "The Obsidian Mirror of Shifting Fates",
    "description": "The Obsidian Mirror of Shifting Fates stands tall, its glossy surface a shimmering expanse of dark glass. When held to your eye, it reflects not just your image but also fleeting visions of future possibilities, each glimpse slightly altering the odds in your favor. Crafted from volcanic obsidian and imbued with the essence of ancient fate forgers, this mirror whispers promises of chance and change. Rumors say it holds sway over fate itself, but its true power remains elusive to all but those willing to face their reflection.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "fate-tweaking glimpse",
      "luck augmentation"
    ],
    "vendor": "fate_forge",
    "shippedBy": "winged_messenger",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Fate-Tweaking Glimpse",
        "rules": "As a bonus action, you can peer into the mirror to gain advantage on your next attack roll. This effect lasts until the start of your next turn. If you use this ability more than once per day, it becomes unusable for 24 hours."
      },
      {
        "title": "Luck Augmentation",
        "rules": "At the beginning of each combat round, you gain a +1 bonus to all dice rolls until the end of that round. This effect does not stack with other sources of luck augmentation."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 8 due to its complexity and the risk involved in wielding such a powerful artifact.",
    "vendorReason": "Fate Forge is known for crafting items that interact with fate, making it an appropriate vendor for this mirror.",
    "shippingDetail": "The Obsidian Mirror of Shifting Fates arrives within a specially enchanted obsidian box to protect its delicate essence during transport.",
    "usage": {
      "activation": "Bonus action or as a reaction when attacked in combat.",
      "duration": "Instantaneous effect, lasting until the start of your next turn after activation.",
      "endsWhen": "The effect ends if you use it again before the end of the round.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The mirror's rarity, magical properties, and the risk associated with its use justify a price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:49:24.661449+00:00",
    "aiReviewedAt": "2026-07-23T20:49:24.661449+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_bloodrune_amulet": {
    "id": "warhammer_item_bloodrune_amulet",
    "name": "The Bloodrune Amulet of Despair",
    "description": "The Bloodrune Amulet of Despair, forged from ancient runes soaked in the blood of countless despairing souls, hangs heavy about your neck. Its weight is a reminder of those lost to darkness, and as you wear it, their spirits whisper through you, feeding your strength and fear into your enemies. The amulet's power ensures that each blow you deal deals an additional 1d4 necrotic damage, while also granting you a +2 bonus to Strength checks and saving throws. However, the more you rely on its dark energy, the darker your own heart becomes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🩸",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "necrotic_damage_on_hit",
      "strength_bonus"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "giant_rat",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Necrotic Damage on Hit",
        "rules": "When you hit with a melee attack, deal an additional 1d4 necrotic damage. This effect has no save or range requirements and can be used once per turn."
      },
      {
        "title": "Strength Bonus",
        "rules": "You gain a +2 bonus to Strength checks and saving throws while wearing the amulet. This bonus is permanent and does not require activation."
      }
    ],
    "levelRequirementReason": "Only those who have proven their resilience through experience at level 10 can bear the burden of such dark magic.",
    "vendorReason": "The chaos dealer, a master manipulator of dark and forbidden artifacts, is the only one willing to deal with the morbidly inclined.",
    "shippingDetail": "Delivered by a giant rat, known for its unpredictable but reliable service.",
    "usage": {
      "activation": "Instantaneous; no activation required once equipped.",
      "duration": "Permanent while worn.",
      "endsWhen": "Removed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's rarity, dark magic, and the unique crafting process justify this fair price.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-24T23:50:02.363086+00:00",
    "aiReviewedAt": "2026-07-24T23:50:02.363086+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_void_shard": {
    "id": "doughnut_hole_void_shard",
    "name": "Echoing Fragment of Nullity",
    "description": "The Echoing Fragment of Nullity is a crystalline shard that shimmers with an ethereal light, capturing fleeting glimpses into alternate realities. Held briefly, it grants insight into potential futures but can induce unsettling visions if used for extended periods. Crafted from the very essence of void, this shard is a key component in stabilizing dimensional rifts and can be found at the Center Seller’s shop, known for its vast array of arcane curiosities.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌌",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "glimpse into potential futures",
      "disorienting visions"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Parcel Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glimpse into Potential Futures",
        "rules": "When activated as a bonus action and held for up to 1 minute, the shard reveals hidden pathways within a small area. The user gains advantage on perception checks in that area until the start of their next turn. However, prolonged exposure (more than 30 seconds) causes disorienting visions, imposing a -2 penalty to charisma checks for 1 round."
      },
      {
        "title": "Disorienting Visions",
        "rules": "If held longer than 30 seconds, the shard induces unsettling visions. The user must succeed on a DC 15 Wisdom saving throw or suffer a -2 penalty to charisma checks for 1 round. This effect ends when the shard is no longer being held."
      }
    ],
    "levelRequirementReason": "This shard is accessible to lower-level characters, providing them with a valuable tool in navigating complex dimensional landscapes.",
    "vendorReason": "The Center Seller specializes in arcane and mystical items, making it the perfect vendor for this unique curio.",
    "shippingDetail": "Ships via Dimensional Parcel Service with a 1-day delivery time, ensuring your shard arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to hold and gain effects; disorienting visions occur if held longer than 30 seconds.",
      "duration": "Effect lasts up to 1 minute or until the user no longer holds the shard.",
      "endsWhen": "Disorienting visions end when the shard is no longer being held, and prolonged exposure ceases.",
      "charges": "Unlimited uses; the shard regenerates its effects after a short rest."
    },
    "priceReason": "The price reflects the item's rarity and its utility in stabilizing dimensional rifts, making it a valuable asset for any adventuring party.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T20:50:08.833800+00:00",
    "aiReviewedAt": "2026-07-23T20:50:08.833800+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_fractured_order": {
    "id": "doughnut_hole_fractured_order",
    "name": "Council of Crumbles Favor Token",
    "description": "The Council of Crumbles Favor Token is a delicate, intricately carved token made from the remnants of ancient doughnut holes. This token, forged in the heart of the Council's crypts, grants you access to exclusive discounts at the Doughnut Hole and the opportunity to receive cryptic messages containing rare quests from the Council. Each message has a 10% chance of being particularly valuable, offering insights into the sourcing of legendary ingredients.",
    "category": "faction",
    "price": 1000,
    "icon": "📜",
    "stock": 18,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Exclusive Discounts",
      "Council Quests"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Void Messenger",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Exclusive Discounts",
        "rules": "Activate as a bonus action. Grants a +10% discount at the Doughnut Hole for one week. This effect can be used once per month."
      },
      {
        "title": "Council Quests",
        "rules": "Roll a DC 15 Intelligence (Investigation) check to decipher a message from the Council. Success grants an exclusive quest related to rare ingredient sourcing, with a 20% chance of receiving additional information on legendary ingredients."
      }
    ],
    "levelRequirementReason": "Requires level 8 to align with the player's journey and the token's cryptic nature.",
    "vendorReason": "The Void Vendor, a mysterious figure connected to the Council of Crumbles, is trusted to handle such tokens for their members.",
    "shippingDetail": "Delivered via the Void Messenger's enigmatic portal within 24 hours of order placement.",
    "usage": {
      "activation": "Bonus action",
      "duration": "One week per use",
      "endsWhen": "The effect expires after one week or when a new token is received",
      "charges": "Unlimited, but only one active at a time"
    },
    "priceReason": "Balanced to offer significant value without being overpowered.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T20:49:58.856150+00:00",
    "aiReviewedAt": "2026-07-23T20:49:58.856150+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_rusty_banner": {
    "id": "midlands_item_rusty_banner",
    "name": "Banner of Broken Allegiance",
    "description": "The Banner of Broken Allegiance is a tattered relic made from Iron Legion banners. Its once-pristine cloth now bears mud stains and despair, a testament to its ignominious past. This banner can be waved to attract a horde of angry rats that will swarm towards the bearer, providing a momentary distraction or unsettling presence for those nearby. It is not fit for inspiring loyalty but serves admirably as a tool for chaos and disruption.",
    "category": "consumables",
    "price": 1000,
    "icon": "🚩",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Attracts Rats",
      "Momentary Distraction"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "Cart Pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Attracts Rats",
        "rules": "When the banner is waved, it attracts up to 5 rats within 30 feet. These rats are hostile and swarm towards the target of your choice within 30 feet. The effect lasts for 1 minute or until a creature casts a dispel magic spell on them."
      },
      {
        "title": "Momentary Distraction",
        "rules": "The banner grants advantage to Dexterity (Stealth) checks made by you and your allies within 30 feet for 1 round after waving the banner. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for low-level characters as a tool to create chaos in small encounters.",
    "vendorReason": "The Midlands Merchant is known for their diverse stock of unique and whimsical items, including this relic from the Iron Legion era.",
    "shippingDetail": "Shipped via Cart Pony with a 24-hour delivery time within the region.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Instantaneous effect; lasts for 1 minute or until dispelled.",
      "endsWhen": "The rats are dispersed by an enemy spellcaster using dispel magic, or when waved again.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "This item is priced high due to its unique historical significance and the chaos it can create in strategic situations.",
    "priceOriginal": 450,
    "priceReviewedAt": "2026-07-23T20:50:15.329257+00:00",
    "aiReviewedAt": "2026-07-23T20:50:15.329257+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_steelfang_gauntlets": {
    "id": "midlands_item_steelfang_gauntlets",
    "name": "Steelfang Gauntlets of the Fallen Captain",
    "description": "Forged from the remains of a disgraced Imperial captain’s armor, these gauntlets thrum with barely contained fury. They are surprisingly comfortable until you unleash their full potential—then they pulse with raw power and a cold, unyielding will. When you wear them in combat, the very essence of the fallen captain seems to awaken within your grip, lending you an edge that can turn even the most formidable foe into quivering flesh.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧤",
    "stock": 34,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increase_strength_2d6",
      "chance_to_inflict_bleed_10%"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "imperial_messenger",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "When you activate these gauntlets, your Strength score increases by 2d6 until the end of your next turn. This effect requires an action to activate and can be used once per short or long rest."
      },
      {
        "title": "Bloody Strike",
        "rules": "Once per turn when you hit a creature with a melee weapon attack, there is a 10% chance that the attack inflicts bleeding damage. The target must make a DC 13 Constitution saving throw or take an additional 2d6 bleed damage at the start of their next turn. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The gauntlets require a level 6 character to wield effectively, as they channel the rage and frustration of a disgraced captain.",
    "vendorReason": "As a trusted supplier of fine armaments, the Empire Exchange carries these unique artifacts, ensuring they find capable hands.",
    "shippingDetail": "Ships via Imperial Messenger for expedited delivery within three days.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "At the start of your next turn or when you stop wearing them",
      "charges": "Once per short or long rest"
    },
    "priceReason": "The gauntlets are priced at 1000 XP due to their unique construction and potent effects, making them a valuable but not overpowered addition to any adventurer’s arsenal.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:50:48.388489+00:00",
    "aiReviewedAt": "2026-07-23T20:50:48.388489+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_chronometer_shard": {
    "id": "midlands_item_chronometer_shard",
    "name": "Shard of Temporal Echoes",
    "description": "The Shard of Temporal Echoes is a fractured piece of an ancient chronometer, its crystal surface etched with arcane symbols that glow faintly. When held, it emits soft hums and flickers, occasionally causing nearby objects to warp slightly in time. Legend says it was once part of a device used to harness the very fabric of time itself, though now it only whispers of its past glory through minor distortions in reality.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Temporal Distortion",
      "Echoes of Elvish"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "As a bonus action, the wielder can focus on a specific object within 30 feet. For 1 minute, that object's time seems to slow, causing it to move at half speed. This effect ends when an attack hits or damage is dealt to the object."
      },
      {
        "title": "Echoes of Elvish",
        "rules": "Once per short rest, the wielder can activate this ability to cause their reflection to speak in ancient Elvish for 1 minute. The language spoken is random and often nonsensical, but it grants advantage on Charisma (Persuasion) checks made against creatures within 30 feet."
      }
    ],
    "levelRequirementReason": "The Shard requires a minimum character level of 5 to wield its temporal effects.",
    "vendorReason": "Forged from the remnants of lost time, the shard is best known through the stories and artifacts crafted by Fractured Forge.",
    "shippingDetail": "The artifact must be transported via a dimensional portal to ensure it arrives intact.",
    "usage": {
      "activation": "Bonus action or reaction for Temporal Distortion; once per short rest for Echoes of Elvish.",
      "duration": "1 minute for both effects, ends when an attack hits or damage is dealt in the case of Temporal Distortion.",
      "endsWhen": "The effect ends if damaged or attacked.",
      "charges": "Unlimited uses"
    },
    "priceReason": "While not a weapon or spell, the Shard's unique temporal effects and historical significance justify its substantial price.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T20:51:19.388484+00:00",
    "aiReviewedAt": "2026-07-23T20:51:19.388484+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_crumb_of_silence": {
    "id": "almost_edge_crumb_of_silence",
    "name": "Crumb of Silence",
    "description": "The Crumb of Silence is a perfectly formed obsidian fragment that seems to absorb sound. When held, it brings a strange tranquility, muffling nearby noises and offering a moment's respite from the unsettling void. This crumb is said to be a fragment of forgotten conversations lost at the edge of time itself, a relic from an era when silence was golden. Holding this crumb grants you minor resistance to fear effects and enhances your ability to focus during moments of chaos.",
    "category": "consumables",
    "price": 1000,
    "icon": "🤫",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Silence Aura",
      "Resilience Against Fear"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silence Aura",
        "rules": "When activated as a bonus action, the Crumb of Silence creates a 10-foot radius aura around you that muffles all sounds within its range for 1 minute. This effect ends if you leave the area or are incapacitated."
      },
      {
        "title": "Resilience Against Fear",
        "rules": "While holding the crumb, you gain immunity to being frightened and have advantage on Wisdom saving throws against fear effects until your next long rest."
      }
    ],
    "levelRequirementReason": "This item provides a subtle but useful boost to focus and resilience without requiring high-level abilities.",
    "vendorReason": "The void merchant is known for collecting and selling rare relics from forgotten eras, including fragments of lost conversations.",
    "shippingDetail": "Ships via Dimensional Rift Couriers, arriving within a week.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "You leave the area or become incapacitated; ends on your next long rest if you hold it and are affected by fear effects.",
      "charges": "Unlimited"
    },
    "priceReason": "The Crumb of Silence offers significant utility for those facing fear and noise, making it a valuable tool at the cost of 1000 XP.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T20:50:23.141705+00:00",
    "aiReviewedAt": "2026-07-23T20:50:23.141705+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_chronometric_pocketwatch": {
    "id": "almost_edge_chronometric_pocketwatch",
    "name": "Chronometric Pocketwatch of Shifting Sands",
    "description": "The Chronometric Pocketwatch of Shifting Sands is a sinister timepiece crafted from the sands of forgotten deserts, its face etched with ancient runes that glow faintly in the dark. This pocket watch does not merely measure time; it warps it, allowing the wearer to manipulate moments around them. With a twist of the dial, one can rewind time by two turns or fast-forward by one turn, creating ripples in reality that leave observers bewildered and onlookers questioning their own perception of cause and effect.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Rewind Time",
      "Fast-Forward"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Void-Touched Messenger",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "As a bonus action, you can rewind time by two turns. This effect has no target; it simply rewinds the immediate environment. Creatures within 10 feet of you must succeed on a DC 15 Dexterity saving throw or be disoriented for 1 turn, during which they have disadvantage on attack rolls and ability checks."
      },
      {
        "title": "Fast-Forward",
        "rules": "As an action, you can fast-forward time by one turn. This effect has no target; it simply advances the immediate environment forward. Creatures within 10 feet of you must succeed on a DC 15 Dexterity saving throw or be disoriented for 1 turn, during which they have disadvantage on attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "This pocketwatch requires a minimum character level of 6 to wield its power without risking instability.",
    "vendorReason": "The Edge Wanderer specializes in exotic and rare artifacts, including items that can bend reality itself, making the Chronometric Pocketwatch an ideal offering for their clientele.",
    "shippingDetail": "The delivery is handled by the Void-Touched Messenger, known for their punctuality even through the most peculiar circumstances. The watch must be delivered in a specially enchanted box to protect it from any external interference.",
    "usage": {
      "activation": "Bonus action (Rewind), Action (Fast-Forward)",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when its duration is over or the user takes damage. The watch can be used once per day, requiring a full night's rest to recharge.",
      "charges": "Uses/Day"
    },
    "priceReason": "While not as potent as a true time-warping artifact, this pocketwatch is still highly sought after for its unique and dangerous abilities, justifying the moderate price.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T20:50:44.069023+00:00",
    "aiReviewedAt": "2026-07-23T20:50:44.069023+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_ritual_candle_of_the_void": {
    "id": "almost_edge_ritual_candle_of_the_void",
    "name": "Ritual Candle of the Void",
    "description": "The Ritual Candle of the Void is a wickless candle that exudes an eerie, pulsating darkness. When lit, it reveals fleeting glimpses of void geometry and whispers from beyond reality. This artifact requires utmost caution; its powers are unpredictable and can be devastating if mishandled. Lighting this candle grants advantage on Intelligence checks related to divination or knowledge, and it summons a minor void creature for 3 turns, enhancing Charisma saving throws by +5.",
    "category": "premium",
    "price": 1000,
    "icon": "🕯️",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Void Geometry",
      "Whispers of Beyond"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Dimensional Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Void Geometry",
        "rules": "When the candle is lit, it reveals fleeting glimpses of void geometry. This grants the user advantage on Intelligence checks related to divination or knowledge for 1 hour after lighting the candle."
      },
      {
        "title": "Whispers of Beyond",
        "rules": "Summons a minor void creature (CR 2) for 3 turns upon activation, and provides +5 to Charisma saving throws. The candle can be used once per day."
      }
    ],
    "levelRequirementReason": "The candle's unpredictable nature necessitates careful handling by even the most seasoned adventurers.",
    "vendorReason": "The Liminal Trader specializes in esoteric items that bridge the realms, making it fitting for this artifact of otherworldly power.",
    "shippingDetail": "Delivery is expedited via the Dimensional Courier Service, ensuring the candle arrives intact and potent.",
    "usage": {
      "activation": "Used as an action to light and summon the effects.",
      "duration": "Instantaneous for summoning; ongoing for divination advantage.",
      "endsWhen": "Exhausts after one use per day or when destroyed.",
      "charges": "Unlimited daily uses"
    },
    "priceReason": "The candle's unpredictable nature and the potential risks it poses justify its relatively high price.",
    "priceOriginal": 95000,
    "priceReviewedAt": "2026-07-23T20:50:36.238375+00:00",
    "aiReviewedAt": "2026-07-23T20:50:36.238375+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_sticky_spire": {
    "id": "grand_country_sticky_spire",
    "name": "Gravity Grip Spire",
    "description": "The Gravity Grip Spire hums with a strange, almost sentient energy as it nestles into your palm. For those who dare to touch it, this enigmatic spire grants a fleeting mastery over gravity's pull, allowing you to scale the Grand Country’s tallest cliffs with ease and reducing the impact of any fall by half. However, its power is not without cost; prolonged contact can disorient even the most steady hand.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧗‍♀️",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "gravity_mastery",
      "reduced_fall_damage"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "swift_squirrel",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Gravity Mastery",
        "rules": "When activated as a bonus action, this spire provides you with a +2 bonus to Acrobatics checks and increases your climbing speed by 10 feet for 1 minute. The spire’s enchantment is considered a property of the user, meaning it does not need to be worn or held in hand."
      },
      {
        "title": "Reduced Fall Damage",
        "rules": "Upon falling from a height and touching this spire, you take no fall damage if the fall distance is less than 20 feet. If the fall exceeds that distance, your fall damage reduces by half (rounded down). This effect can only be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The spire’s enchantment requires a certain level of balance and agility to wield effectively.",
    "vendorReason": "Vertical Vendor specializes in gear for the Grand Country's most daring explorers, ensuring their safety as they venture into its treacherous landscapes.",
    "shippingDetail": "The spire is carefully packed and shipped by swift squirrels, ensuring it arrives intact at your doorstep within a day of purchase.",
    "usage": {
      "activation": "Bonus action to activate and use once per short or long rest",
      "duration": "1 minute when activated; reduces fall damage on contact",
      "endsWhen": "The effect ends if you stop holding the spire, it is destroyed, or you use your next turn without taking any actions.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Gravity Grip Spire’s balanced price reflects its unique properties and limited daily availability.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T20:51:07.098388+00:00",
    "aiReviewedAt": "2026-07-23T20:51:07.098388+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_layer_massage": {
    "id": "grand_country_layer_massage",
    "name": "Chromatic Relaxation Disc",
    "description": "The Chromatic Relaxation Disc hums with a spectrum of vibrant hues as it gently pulses, emitting soothing vibrations that penetrate your very being. This shimmering disc is said to have been crafted by the celestial artisans of the Layered Realms, each layer etched with runes that enhance focus and reduce fatigue. It's like having a massage from the heavens, but in every color imaginable, leaving you refreshed and ready for the challenges ahead.",
    "category": "services",
    "price": 1000,
    "icon": "💆‍♀️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased_focus",
      "reduced_fatigue"
    ],
    "vendor": "layer_market",
    "shippedBy": "sentient_pillow",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Focus",
        "rules": "Activates as a bonus action. The user gains advantage on Intelligence (Insight) checks and can take an additional short rest at the end of their next long rest, provided they spend at least 10 minutes meditating with the disc."
      },
      {
        "title": "Reduced Fatigue",
        "rules": "Activates as a bonus action. For 1 hour, the user's exhaustion level is reduced by one step (if not exhausted, gain advantage on Constitution saving throws). This effect ends if the user enters combat or falls unconscious."
      }
    ],
    "levelRequirementReason": "The disc's celestial craftsmanship requires no prior experience to use effectively.",
    "vendorReason": "The layer market specializes in goods that enhance one's connection with the layered realms, and this disc is a perfect fit for travelers seeking respite from their journeys.",
    "shippingDetail": "Shipped by the Sentient Pillow Express, known for its swift and reliable delivery within the Layered Realms.",
    "usage": {
      "activation": "Bonus action to activate; can be used once per long rest.",
      "duration": "1 hour or until combat begins or user falls unconscious.",
      "endsWhen": "Combat starts, user falls unconscious, or effect duration ends.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The disc's rarity and the special materials used in its crafting justify this price point.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T20:51:13.701689+00:00",
    "aiReviewedAt": "2026-07-23T20:51:13.701689+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_godly_echoing_shard": {
    "id": "grand_country_godly_echoing_shard",
    "name": "Resonance of the Abyss",
    "description": "Resonance of the Abyss is a shimmering fragment torn from an ancient, forgotten dimension. Its pulsating energy allows you to perceive echoes of past events within The Grand Country, revealing cryptic clues that can guide your path or lead you astray. Holding it too long risks driving you mad with its unsettling visions, and Wario’s taste test confirms it indeed tastes like disappointment—a bitter reminder of lost opportunities.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "reveals_hidden_paths",
      "causes_temporary_hallucinations"
    ],
    "vendor": "side_seller",
    "shippedBy": "dimensional_wormhole",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Reveals Hidden Paths",
        "rules": "As a bonus action, you can activate Resonance of the Abyss to perceive hidden paths and secret doors within The Grand Country for up to 1 minute. This effect has no save DC but may cause temporary blindness if overused."
      },
      {
        "title": "Causes Temporary Hallucinations",
        "rules": "While the shard is active, you are subjected to temporary hallucinations that last for 1 hour or until you take damage. There is a 20% chance per minute of being driven mad from these visions, requiring a successful DC 15 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "Only those with the experience and wisdom to handle such ancient power can safely wield Resonance of the Abyss.",
    "vendorReason": "Side Seller, a mysterious figure known for selling rare artifacts, has access to this powerful relic.",
    "shippingDetail": "The shard is delivered via a dimensional wormhole, arriving within an hour of the order being placed.",
    "usage": {
      "activation": "bonus action",
      "duration": "up to 1 minute or until you take damage",
      "endsWhen": "you take damage or after 1 hour",
      "charges": "unlimited"
    },
    "priceReason": "The shard’s rarity, the risk it poses, and its limited utility justify this reasonable price in XP.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-23T20:51:16.896058+00:00",
    "aiReviewedAt": "2026-07-23T20:51:16.896058+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_doughy_boots": {
    "id": "leclaire_isle_doughy_boots",
    "name": "Doughy Boots of Sticky Steps",
    "description": "The Doughy Boots of Sticky Steps are crafted from the finest, freshly-kneaded dough sourced directly from Leclaire Isle's artisan bakers. These boots allow you to traverse slippery and sticky surfaces with ease, leaving a trail of flour behind as you slip and slide your way through challenging terrains. The boots' unique design provides both increased movement speed on slick floors and resistance against adhesive traps, making them indispensable for any baker or pastry thief.",
    "category": "equipment",
    "price": 1000,
    "icon": "👟",
    "stock": 7,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increased_movement_on_slippery_surfaces",
      "resistance_to_adhesive_traps"
    ],
    "vendor": "dough_depot",
    "shippedBy": "rolling_trough",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Movement on Slippery Surfaces",
        "rules": "When you are on a slippery surface, such as ice or mud, you have advantage on Dexterity (Acrobatics) checks and your speed is increased by 10 feet until the end of your next turn. This effect lasts for 1 minute."
      },
      {
        "title": "Resistance to Adhesive Traps",
        "rules": "You gain resistance against being restrained by adhesive effects, such as sticky traps or web spells. Additionally, if you are already restrained by an adhesive effect, the DC of any saving throw required to escape it is increased by 2 until the end of your next turn."
      }
    ],
    "levelRequirementReason": "These boots are designed for anyone who needs to navigate slippery or sticky situations with ease.",
    "vendorReason": "Dough Depot, known for its exquisite baked goods and related equipment, naturally carries these boots as they cater directly to the needs of their clientele.",
    "shippingDetail": "The boots are carefully shipped via rolling trough, ensuring they reach you in perfect condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "1 minute or until the end of your next turn, whichever comes first.",
      "endsWhen": "The effect ends when the duration expires or if you are no longer on a slippery surface.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The boots' unique design and materials justify their price, making them slightly less expensive than items of higher rarity but still providing significant utility.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T20:51:25.433741+00:00",
    "aiReviewedAt": "2026-07-23T20:51:25.433741+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sugar_whisper": {
    "id": "leclaire_isle_sugar_whisper",
    "name": "Sugar Whisper Charm",
    "description": "The Sugar Whisper Charm is a delicate, sugary confection shaped like a whispering cloud. Crafted in the heart of Le Claire Isle’s Pastry Palace, it carries the essence of countless pastries and sweets. When held, you can subtly influence those around you to share their treats or be distracted by its sweet scent. Its charm is particularly potent during festivals, but beware—its magic only works on willing participants.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍬",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "charm_effect_influence_small",
      "chance_to_distract"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "honeycomb_carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whisper of Persuasion",
        "rules": "As a bonus action, you can attempt to influence someone nearby by whispering sweet nothings. This charm has a range of 30 feet and requires a successful Charisma (Persuasion) check against the target’s Will save DC = 8 + your proficiency bonus + your Charisma modifier. On a success, the target is charmed for 1 minute."
      },
      {
        "title": "Scent of Distraction",
        "rules": "Whenever you consume a pastry or candy while holding the charm during a mealtime gathering, there’s a 30% chance that someone within 60 feet becomes distracted by its sweet aroma. This distraction lasts for 1 round and can be ended early with a successful Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "This charm is suitable for novice adventurers who wish to navigate social situations with grace.",
    "vendorReason": "Pastry Palace specializes in confections and their magical properties, making it the perfect place to find such a charming item.",
    "shippingDetail": "The honeycomb carrier ensures that the charm arrives fresh and ready for use at your doorstep.",
    "usage": {
      "activation": "Bonus action or as part of a mealtime event.",
      "duration": "Instantaneous, lasting effect until the end of the day.",
      "endsWhen": "The target saves successfully against its Charisma (Persuasion) check or the distraction ends with a successful Wisdom saving throw.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Crafted from rare ingredients and imbued with Le Claire Isle’s magic, this charm is priced at 1000 XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T20:51:33.747540+00:00",
    "aiReviewedAt": "2026-07-23T20:51:33.747540+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_crumb_detector": {
    "id": "leclaire_isle_crumb_detector",
    "name": "Crumb Detector Spectacles",
    "description": "The Crumb Detector Spectacles are a baker's indispensable tool, crafted from polished crystal and enchanted with the essence of ancient sweetmakers. These spectacles allow you to perceive invisible crumbs, revealing hidden paths and secret stashes in your culinary explorations. Not only do they help uncover clandestine treats, but they also amplify your perception, making you acutely aware of your surroundings as if you were Wario himself, always on the lookout for a tasty surprise.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔍",
    "stock": 12,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_perception",
      "reveals_crumb_trails"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Perception",
        "rules": "While wearing these spectacles, you gain advantage on Wisdom (Perception) checks related to detecting hidden objects or tracking. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Reveals Crumb Trails",
        "rules": "When you use an action to search with the spectacles, you can see invisible crumbs within 30 feet as if they were visible. You must make a Wisdom (Perception) check; on a success, you find at least one crumb trail leading to a hidden object or secret stash."
      }
    ],
    "levelRequirementReason": "These spectacles are designed for beginners and bakers in training.",
    "vendorReason": "Sweet Supplies is known for its wide range of baking tools, including the Crumb Detector Spectacles.",
    "shippingDetail": "Delivered swiftly by delivery drones within a single day from the nearest city.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until end of your next long rest",
      "endsWhen": "The effect ends at the start of your next long rest.",
      "charges": "Unlimited, but requires a short or long rest to recover after extended use."
    },
    "priceReason": "Crafted from rare crystal and enchanted with ancient magic, these spectacles are both powerful and costly.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T20:51:49.102561+00:00",
    "aiReviewedAt": "2026-07-23T20:51:49.102561+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_gravity_boots": {
    "id": "grand_country_gravity_boots",
    "name": "Wobbly Wanderer's Boots",
    "description": "The Wobbly Wanderer's Boots are crafted from a strange, malleable material that shifts and bends underfoot. They provide an exhilarating yet precarious advantage to those who dare to climb, allowing you to ascend sheer walls with ease but also causing your feet to bounce lightly off the surface, creating a unique rhythm of ascent. Though they reduce fall damage by half, this comes at the cost of occasional minor disorientation, which can be mitigated only after resting for an hour.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧫",
    "stock": 35,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased_climbing_speed",
      "minor_bounce"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "roller_cart",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Increased Climbing Speed",
        "rules": "While wearing these boots, you gain a +1 bonus to your climbing speed. This effect is active as long as you are actively engaged in climbing."
      },
      {
        "title": "Minor Bounce",
        "rules": "Once per short or long rest, when you fall from a height, this boots reduce the damage by half (rounded down). Additionally, you must make a DC 12 Dexterity saving throw. On a failed save, you are disoriented for 1 minute and cannot take reactions."
      }
    ],
    "levelRequirementReason": "The Wobbly Wanderer's Boots require a minimum level of 6 to ensure that the user can handle their unpredictable nature effectively.",
    "vendorReason": "Vertical Vendor specializes in gear for those who test gravity, making these boots an ideal addition to her inventory.",
    "shippingDetail": "Delivered via roller cart, which may cause some minor bounces during transit, mirroring the boots' effect.",
    "usage": {
      "activation": "Passive and automatic while engaged in climbing.",
      "duration": "Instantaneous reduction of fall damage once per short or long rest.",
      "endsWhen": "Disorientation ends after one minute on a failed save; otherwise, it lasts until you finish a long rest.",
      "charges": "Unlimited uses, recharging with each short or long rest."
    },
    "priceReason": "The boots are priced at 1000 XP due to their unique properties and the craftsmanship required for such unpredictable yet useful climbing gear.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T20:51:53.007380+00:00",
    "aiReviewedAt": "2026-07-23T20:51:53.007380+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_layer_shard": {
    "id": "grand_country_layer_shard",
    "name": "Echoing Shard of Silence",
    "description": "The Echoing Shard of Silence is a fragment from a lost layer, said to resonate with the echoes of forgotten times. This relic momentarily muffles sound within a ten-foot radius, perfect for those who need silence in a bustling world or simply wish to enjoy peace amidst chaos. Crafted by ancient masons and favored by spies, it also grants its bearer a +1 bonus to Dexterity (Stealth) checks as it subtly camouflages the user’s movements.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🤫",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "silence_aura",
      "stealth_bonus"
    ],
    "vendor": "layer_market",
    "shippedBy": "swift_wing express courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silent Echoes",
        "rules": "When activated, this shard creates a 10-foot radius of silence around you. This effect lasts for 1 minute or until an attack hits you. It has no effect on creatures that can’t be silenced by spells."
      },
      {
        "title": "Stealth Camouflage",
        "rules": "For the duration, you gain a +1 bonus to Dexterity (Stealth) checks as long as you remain within 30 feet of this shard. The bonus ends if you move more than 50 feet away from it."
      }
    ],
    "levelRequirementReason": "This shard is accessible early on, allowing players to enjoy its benefits without requiring a high-level character.",
    "vendorReason": "The layer market deals in relics and fragments from the fallen layers; this shard fits their inventory perfectly.",
    "shippingDetail": "Ships via swift wing express, delivered within a week of purchase.",
    "usage": {
      "activation": "Reaction (when attacked)",
      "duration": "1 minute or until an attack hits you",
      "endsWhen": "An attack hits you; the effect ends when the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The Echoing Shard's rarity and unique effects, including both silence and stealth benefits, justify its price of 1000 XP.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T20:52:09.550883+00:00",
    "aiReviewedAt": "2026-07-23T20:52:09.550883+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_side_seller_charm": {
    "id": "grand_country_side_seller_charm",
    "name": "The Unbalanced Disc Charm",
    "description": "The Unbalanced Disc Charm is a peculiar trinket, shaped like an eternally tilting disc of polished brass. Crafted from the remnants of ancient machinery found in the ruins of a long-lost kingdom, this charm subtly warps gravity around its wearer, making their arguments both more persuasive and slightly amusing to those who overhear them. It’s said that the charm enhances one's ability to influence others, though its true origin remains shrouded in mystery.",
    "category": "faction",
    "price": 1000,
    "icon": "🪙",
    "stock": 8,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "charismatic_influence",
      "argumentative_amusement"
    ],
    "vendor": "side_seller",
    "shippedBy": "snail_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charismatic Influence",
        "rules": "As a bonus action, the wearer of the charm can attempt to influence an opponent within 5 feet. This requires a Charisma (Persuasion) check contested by the target's Wisdom (Insight). On success, the target is charmed for 1 minute, but they are aware that the effect is due to the charm and not genuine persuasion."
      },
      {
        "title": "Argumentative Amusement",
        "rules": "The wearer gains advantage on Charisma (Persuasion) checks made while wearing this charm. Additionally, any character within 30 feet who overhears a successful Persuasion check made by the wearer is automatically charmed for 1 round."
      }
    ],
    "levelRequirementReason": "The charm's subtle effects are accessible to those just beginning their adventures.",
    "vendorReason": "Side sellers often have unique and unconventional wares, including items that enhance a character’s abilities without requiring high-level magic.",
    "shippingDetail": "The charm is carefully packed in straw to prevent any imbalance from causing damage during transit.",
    "usage": {
      "activation": "Bonus action (Charismatic Influence)",
      "duration": "Instantaneous, but can be used once per long rest (Argumentative Amusement)",
      "endsWhen": "The effect ends when the wearer is no longer wearing the charm or the target successfully saves against the Persuasion check.",
      "charges": "Unlimited"
    },
    "priceReason": "The charm combines practical utility with a touch of whimsy, making it a valuable tool for adventurers who value both influence and humor.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:51:51.156100+00:00",
    "aiReviewedAt": "2026-07-23T20:51:51.156100+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_gargoyle_charm": {
    "id": "earth_land_gargoyle_charm",
    "name": "Stoneheart's Grumble",
    "description": "Stoneheart's Grumble is a warm, ancient stone charm that hums with earth magic. Crafted from petrified tree roots and imbued with the spirit of long-forgotten gargoyles, it radiates an aura of calm. Gently shake this trinket to release small, perfectly formed pebbles that can be used to distract guards or construct impromptu fortifications in tight spaces. Rumor has it that its touch can soften even the most grumpy gargoyle's disposition.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗿",
    "stock": 23,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "petrified_pebble_release",
      "gargoyle_charm"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "pony_express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Petrified Pebble Release",
        "rules": "As a bonus action, shake Stoneheart's Grumble to release one small pebble. The pebble can be used to distract guards for up to 1 minute or construct a miniature fortification that lasts until destroyed."
      },
      {
        "title": "Gargoyle Charm",
        "rules": "Stoneheart's Grumble has a 10% chance per day to charm any gargoilish creature within 30 feet. The effect is instantaneous, and there is no saving throw involved."
      }
    ],
    "levelRequirementReason": "Requires at least 2nd level to handle the earth magic more effectively.",
    "vendorReason": "The Earth Emporium specializes in ancient and magical artifacts from the depths of the earth, making it a fitting vendor for this unique charm.",
    "shippingDetail": "Ships via Pony Express with an additional delay of one day due to its fragile nature.",
    "usage": {
      "activation": "Bonus action (shake)",
      "duration": "Instantaneous pebble release; fortification lasts until destroyed, charm effect is instantaneous",
      "endsWhen": "Pebble used up, fortification destroyed, or charm dispelled by a successful saving throw",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering the charm's utility and rarity.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T20:52:04.213130+00:00",
    "aiReviewedAt": "2026-07-23T20:52:04.213130+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_forbidden_echoing_shard": {
    "id": "earth_land_forbidden_echoing_shard",
    "name": "The Silent Scream of Xylos",
    "description": "The Silent Scream of Xylos, a crystalline shard etched with forgotten runes, radiates an eerie silence that echoes like a thousand unspoken secrets. Its touch sends shivers down your spine and compels you to seek out more fragments, driven by an insatiable urge to piece together its lost history. The artifact's whispers are as dangerous as they are alluring, driving those who hear it mad with the desire for knowledge that comes at a heavy price.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💀",
    "stock": 7,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "maddening_silence",
      "insatiable_curiosity"
    ],
    "vendor": "magic_shop",
    "shippedBy": "dark_messenger",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Maddening Silence",
        "rules": "On use, you must succeed on a DC 15 Wisdom saving throw or become charmed for the duration. While charmed, you are compelled to listen to the shard's whispers, which induce a state of paranoia and an uncontrollable urge to collect similar artifacts or relics."
      },
      {
        "title": "Insatiable Curiosity",
        "rules": "You gain disadvantage on Wisdom (Perception) checks until the end of your next long rest. This effect also causes you to become obsessed with uncovering any secrets related to Xylos, leading to a 10% chance of becoming incapacitated for 1d4 hours each time you use this item."
      }
    ],
    "levelRequirementReason": "Only those who have reached a high level can resist the shard's maddening whispers and dangerous allure.",
    "vendorReason": "The magic shop specializes in ancient relics and artifacts, making it the most likely place to find this forbidden echo of forgotten times.",
    "shippingDetail": "Ships via the Dark Messenger, a courier known for delivering mysterious packages with strict secrecy protocols.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous effect; lasts until the end of your next short or long rest after use.",
      "endsWhen": "You succeed on a DC 15 Wisdom saving throw, complete a long rest, or destroy the shard.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its mythic rarity and the risk of becoming trapped in a state of madness.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-24T23:50:03.088839+00:00",
    "aiReviewedAt": "2026-07-24T23:50:03.088839+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_dragonscale_bandage": {
    "id": "earth_land_dragonscale_bandage",
    "name": "Wyrm's Embrace",
    "description": "Wyrm's Embrace, crafted from the shimmering scales of a young earth dragon, seals wounds instantly upon contact, fusing with the flesh to accelerate healing. The bandage's origin imbues it with a faint, smoky scent that hints at its fiery heritage; only those who have faced dragons can truly appreciate its power. Apply this rare salve, and you'll feel the burn of rejuvenation as it bonds with your skin, offering swift recovery even in the direst of battles.",
    "category": "consumables",
    "price": 1000,
    "icon": "🩹",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heal_12_hp",
      "chance_to_remove_poison_30%"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "hawk_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing",
        "rules": "Apply Wyrm's Embrace to a wound as an action. The bandage heals the target 12 hit points immediately and bonds with the skin, providing temporary resistance to fire damage equal to half of this amount for one hour."
      },
      {
        "title": "Poison Resistance",
        "rules": "If the targeted creature is poisoned, Wyrm's Embrace has a 30% chance to remove the poison upon application. If successful, the target gains temporary hit points equal to twice the healing provided by this effect for one minute."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers who may find themselves in need of a quick recovery.",
    "vendorReason": "The Guild Quartermaster stocks Wyrm's Embrace as part of their comprehensive medical supplies, catering to the diverse needs of every adventurer who has faced the fiery breath of dragons.",
    "shippingDetail": "Shipped by trusted hawk messengers, this package arrives swiftly and securely, ensuring that adventurers can apply Wyrm's Embrace before its effects begin to fade.",
    "usage": {
      "activation": "Apply as an action.",
      "duration": "Instantaneous; the effect lasts until used up or removed.",
      "endsWhen": "The bandage is removed or its healing effect is exhausted.",
      "charges": "Unlimited, but only one application per creature."
    },
    "priceReason": "Wyrm's Embrace commands a high price due to the rare and precious materials used in its crafting, as well as the specialized knowledge required for its production.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T20:52:21.652310+00:00",
    "aiReviewedAt": "2026-07-23T20:52:21.652310+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_giga_shroom": {
    "id": "mushroom_kingdom_giga_shroom",
    "name": "Giga Shroom Launcher",
    "description": "The Giga Shroom Launcher, a fearsome weapon crafted from a colossal mushroom and an old steel pipe, unleashes a burst of spore-laden energy that can send you soaring across the battlefield. This explosive device is not for the faint of heart; it requires a precise aim to avoid friendly fire and the wrath of nearby mushrooms. With each launch, the Giga Shroom produces a wide area effect, dealing damage in all directions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚀",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "explosive_launcher",
      "area_of_effect_damage"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "mushroom_delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Explosive Launcher",
        "rules": "When you activate the launcher as an action, it fires a burst of spores that sends you flying up to 30 feet in a straight line. You must make a Dexterity saving throw. On a failed save, you land prone and take force damage equal to half your level."
      },
      {
        "title": "Area of Effect Damage",
        "rules": "The burst of spores deals fire damage to all creatures within 10 feet of the explosion. Each creature must make a Dexterity saving throw. On a failed save, it takes fire damage equal to twice its level; on a successful save, it takes half as much."
      }
    ],
    "levelRequirementReason": "The Giga Shroom Launcher requires significant strength and coordination to wield effectively.",
    "vendorReason": "Koopa Shop specializes in unconventional weapons that combine the bizarre with practical combat prowess.",
    "shippingDetail": "Due to its size, this item is shipped via mushroom delivery. It arrives within a week but requires careful handling upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted when used; requires a short rest to recharge",
      "charges": "1 use"
    },
    "priceReason": "Balanced for an epic item, this launcher is priced at 1000 XP due to its powerful effects and limited utility.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T20:52:55.776792+00:00",
    "aiReviewedAt": "2026-07-23T20:52:55.776792+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_coin_cleanser": {
    "id": "mushroom_kingdom_coin_cleanser",
    "name": "Coin Polishing Service - Wario Style!",
    "description": "The Coin Polishing Service – Wario Style! – is a unique offering that cleanses tarnished coins with an improbable combination of slime, scrubbing brushes, and sheer determination. Guaranteed to return your gold to its former luster, this service ensures every coin shines as if freshly minted. As a bonus, there's a slim but real chance you'll find extra coins hidden within the grime, a delightful surprise for those in need of both cleaning and fortune.",
    "category": "services",
    "price": 1000,
    "icon": "🧼",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "cleanse_items",
      "chance_to_find_extra_coins"
    ],
    "vendor": "wario_direct",
    "shippedBy": "snail_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cleanse Items",
        "rules": "As an action, this service cleanses a single item, restoring it to its pristine condition. The effect is instantaneous and requires no further interaction."
      },
      {
        "title": "Chance to Find Extra Coins",
        "rules": "There's a 10% chance that an additional coin will be found during the cleaning process. This effect is passive and applies only once per use, regardless of how many coins are cleaned."
      }
    ],
    "levelRequirementReason": "This service requires no specific level as it caters to anyone in need of a clean coin.",
    "vendorReason": "Wario's direct service is known for its unconventional yet effective methods, making this item an excellent choice from his shop.",
    "shippingDetail": "Snail Express delivers the service with a humorous delay, ensuring every coin arrives in top condition.",
    "usage": {
      "activation": "action",
      "duration": "instantaneous",
      "endsWhen": "the cleaning effect is complete or the item is removed from the service area",
      "charges": "unlimited"
    },
    "priceReason": "The increased price reflects the unique and effective service provided by Wario's direct method.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T20:52:24.944003+00:00",
    "aiReviewedAt": "2026-07-23T20:52:24.944003+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mythic_heartwood": {
    "id": "mushroom_kingdom_mythic_heartwood",
    "name": "Heartwood of the Great Fungus",
    "description": "The Heartwood of the Great Fungus is a pulsating fragment from the colossal mushroom's heart, its surface etched with ancient fungal runes. This relic grants massive health regeneration and temporary invincibility, making it a sought-after prize for adventurers seeking to outlast their foes. However, those who wield this power must be wary—rumors tell of malevolent entities drawn to its presence. Handle with caution, perhaps armed with some bubble gum to ward off the inevitable.",
    "category": "premium",
    "price": 1000,
    "icon": "🍄",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "massive_health_regen",
      "temporary_invincibility"
    ],
    "vendor": "wario_direct",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Massive Health Regeneration",
        "rules": "Upon activation, the user regains 100 hit points. This effect lasts for 1 minute and can only be used once per long rest."
      },
      {
        "title": "Temporary Invincibility",
        "rules": "The user gains temporary invincibility for a duration of 3 rounds upon activation. During this time, they are immune to all damage except psychic damage. This effect can only be activated once every 24 hours."
      }
    ],
    "levelRequirementReason": "Even the most novice adventurers might find themselves in dire straits where such power is necessary.",
    "vendorReason": "Wario Direct, known for its eccentric and often dubious wares, has managed to acquire this rare relic from a mysterious source.",
    "shippingDetail": "The Heartwood arrives via dragon courier, ensuring swift delivery but also adding to the item's aura of danger.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (recharges after a long rest)",
      "endsWhen": "At the end of its duration or when the user takes any action other than movement.",
      "charges": "Unlimited"
    },
    "priceReason": "The Heartwood's rarity and the potential risks it poses to adventurers justify a moderate but not exorbitant price.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T20:52:43.386870+00:00",
    "aiReviewedAt": "2026-07-23T20:52:43.386870+00:00",
    "aiReviewVersion": 1
  }
};
