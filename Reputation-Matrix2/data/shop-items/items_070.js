// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_070 = {
  "leclaire_isle_item_sticky_dough_shovel": {
    "id": "leclaire_isle_item_sticky_dough_shovel",
    "name": "Sticky Dough Shovel",
    "description": "The Sticky Dough Shovel, a marvel of culinary enchantment, is forged from hardened brioche dough and sprinkled with a pinch of sugar dust. This enchanted shovel not only digs through dirt at an incredible rate but also leaves behind a sugary residue that clings to foes, reducing their movement speed. Crafted by the renowned Dough Depot on LeClaire Isle, it's perfect for those who love a touch of chaos in their quests or simply want to make a delightful mess.",
    "category": "equipment",
    "price": 15000,
    "icon": "🥄",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Doughy Residue",
      "Increased Digging Speed"
    ],
    "vendor": "dough_depot",
    "shippedBy": "rolling_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Doughy Residue",
        "rules": "When you use this shovel, there is a 20% chance that a sticky puddle of dough will form around an enemy within 5 feet. The target must make a DC 13 Dexterity saving throw or have its speed reduced by half for 1 minute."
      },
      {
        "title": "Increased Digging Speed",
        "rules": "While wielding this shovel, your digging speed is doubled. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This shovel's enchantment is accessible to all adventurers, making it a versatile tool for any journey.",
    "vendorReason": "The Dough Depot on LeClaire Isle is known for its innovative and magical culinary creations, so it makes sense that they would offer this enchanted shovel.",
    "shippingDetail": "Shipped via a rolling cart, ensuring the delivery of your sticky delight right to your door!",
    "usage": {
      "activation": "Action or bonus action when digging.",
      "duration": "Instantaneous effect for Doughy Residue; lasts until the start of your next turn for Increased Digging Speed.",
      "endsWhen": "The effect ends if you sheathe the shovel, use an action to clean it, or take a short rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This shovel's rarity and enchantments make it a fair value for its price in XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:17:48.191338+00:00",
    "aiReviewedAt": "2026-07-25T00:17:48.191338+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_frosting_fistfuls": {
    "id": "leclaire_isle_item_frosting_fistfuls",
    "name": "Frosting Fistfuls",
    "description": "Frosting Fistfuls are a magical bag of confectionery that, when shaken, unleash a flurry of solidified frosting upon your foes. These sugary projectiles not only deal minor frost damage but also have a chance to slow the enemy's movement, turning their footing into a winter's nightmarish slush. Each shake is a sweet, albeit icy, surprise, and the bag itself is crafted from enchanted pastry dough that can withstand the rigors of battle without breaking.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍬",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "deals minor frost damage",
      "chance to slow enemy movement"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "sugar_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deals Minor Frost Damage",
        "rules": "When shaken, Frosting Fistfuls unleash a flurry of sugary projectiles that deal 1d4 + Dexterity modifier cold damage to all enemies within a 5-foot radius. This effect lasts for 1 round."
      },
      {
        "title": "Chance to Slow Enemy Movement",
        "rules": "There is a 30% chance (DC 12 Dexterity saving throw) that an enemy in the area will be slowed, reducing their speed by half until the start of its next turn. This effect can only occur once per target."
      }
    ],
    "levelRequirementReason": "The Frosting Fistfuls are accessible to low-level adventurers who seek a sweet and strategic advantage in battle.",
    "vendorReason": "Pastry Palace is renowned for its expertise in pastry crafting, making it the perfect vendor to sell enchanted confections like Frosting Fistfuls.",
    "shippingDetail": "Shipped by the efficient Sugar Drone, ensuring that these confectionary treasures arrive at your doorstep fresh and ready to use.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect lasting for 1 round per shake",
      "endsWhen": "The effect ends when the bag is shaken or when its contents are exhausted",
      "charges": "Unlimited charges, but each shaking consumes a portion of the frosty content"
    },
    "priceReason": "Frosting Fistfuls are priced at 1000 XP due to their unique combination of offensive and utility effects in a consumable format.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:17:51.110388+00:00",
    "aiReviewedAt": "2026-07-25T00:17:51.110388+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_forbidden_kami_charm": {
    "id": "teyvat_item_forbidden_kami_charm",
    "name": "Whispers of the Forgotten Kami",
    "description": "The Whispers of the Forgotten Kami is a delicate, intricately carved charm depicting an ancient kami whose memory has faded into legend. Crafted from the petrified remains of sacred stones, it hums with a quiet, ethereal energy that grants fleeting glimpses into past events and enhances one's mana regeneration. Handling this relic too long can lead to disorienting visions and a peculiar compulsion to collect small, shiny pebbles—though the exact nature of 'something worse' remains a mystery.",
    "category": "forbidden",
    "price": 150000,
    "icon": "👻",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Temporal Glimpse",
      "Mana Surge"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "phantom_ship",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Temporal Glimpse",
        "rules": "As an action, you can use this charm to briefly glimpse into the past. You gain advantage on one Intelligence (History) check related to a specific event within the last year. The effect lasts for 1 minute and has no save DC."
      },
      {
        "title": "Mana Surge",
        "rules": "You regain an additional 2d6 + your spellcasting modifier mana points at the start of each short or long rest. This effect is limited to once per day."
      }
    ],
    "levelRequirementReason": "Only those sufficiently versed in ancient lore and magic can wield this powerful charm.",
    "vendorReason": "Inazuma Imports deals exclusively with artifacts of great power, and the Whispers aligns with their reputation for mysterious, forbidden relics.",
    "shippingDetail": "Delivered via a night-time courier known to avoid detection, ensuring the charm arrives under cover.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; Temporal Glimpse lasts for 1 minute.",
      "endsWhen": "The duration ends when you make the check or complete the rest.",
      "charges": "Unlimited, but one use per day for the Mana Surge."
    },
    "priceReason": "The charm's rarity and unique abilities justify its price of 1,000 XP.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T00:18:23.862463+00:00",
    "aiReviewedAt": "2026-07-25T00:18:23.862463+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_lyue_lucky_scale": {
    "id": "teyvat_item_lyue_lucky_scale",
    "name": "Jade Serpent's Blessing",
    "description": "The Jade Serpent's Blessing is a shimmering scale from a mythical serpent that once guarded Liyue Harbor’s ancient treasury. Crafted by the hands of fate, this relic bestows upon its bearer a stroke of good fortune, increasing their luck and enhancing their chances of finding rare treasures. However, it also draws the attention of merchants who covet such prosperity, making it a double-edged boon in the bustling harbor city.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍀",
    "stock": 95,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Increased Luck",
      "Enhanced Treasure Finding"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_merchant",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Luck",
        "rules": "When an action involves chance, roll a d20. On a natural 18 or higher, you gain advantage on the roll."
      },
      {
        "title": "Enhanced Treasure Finding",
        "rules": "Once per long rest, when searching for treasure in Liyue Harbor, you have advantage on Intelligence (Investigation) checks to locate hidden items. This effect cannot be used if actively pursued by merchants seeking the scale."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate and benefit from the Jade Serpent's Blessing as it aids in navigating the city's challenges.",
    "vendorReason": "Liyue Harbor is known for its merchants and treasures, making this relic a natural fit for their offerings.",
    "shippingDetail": "The scale will arrive via the reliable sea merchant, ensuring it's delivered safely within a week of purchase.",
    "usage": {
      "activation": "Passive effect with occasional use",
      "duration": "Instantaneous and long-lasting until used or interrupted",
      "endsWhen": "Discovered by merchants or lost in the harbor",
      "charges": "Unlimited, but limited to one per day"
    },
    "priceReason": "The Jade Serpent's Blessing is highly sought after for its luck and treasure-finding abilities, justifying a price of 1000 XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:17:29.535209+00:00",
    "aiReviewedAt": "2026-07-25T00:17:29.535209+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_forbidden_resonance": {
    "id": "teyvat_item_forbidden_resonance",
    "name": "Whispers of the Abyss Shard",
    "description": "Whispers of the Abyss Shard is a fragment chipped from the very depths of Inazuma’s Sea of Serenity, its surface shimmering with an eerie blue light. When activated, it grants fleeting glimpses into the abyss, boosting your elemental abilities against water-based foes but at the cost of your sanity. The shard's power is unpredictable; some say it enhances your affinity for seaweed, while others claim it can drive you mad with its haunting whispers.",
    "category": "forbidden",
    "price": 150000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Hydro Boost",
      "Madness Risk"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "shadow_phantom",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Hydro Boost",
        "rules": "Activates as a bonus action. Increases your critical hit chance by 20% and grants resistance to hydro damage for the duration of one short rest or until you use another ability that gives resistance to hydro damage."
      },
      {
        "title": "Madness Risk",
        "rules": "There is a 15% chance per minute spent within range of this shard to inflict madness on you. This effect can be resisted with a Wisdom saving throw (DC 13)."
      }
    ],
    "levelRequirementReason": "Only those seasoned enough in the trials of Inazuma and beyond can withstand the shard's unpredictable madness risk.",
    "vendorReason": "Inazuma Imports deals exclusively in exotic, mythic artifacts from its region, including this fragment of the Sea of Serenity.",
    "shippingDetail": "Ships via shadow phantom courier with a 1d4+2 day delivery time and requires an additional +50% to the listed price for expedited service.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of your next turn or until you use another ability that grants resistance to hydro damage.",
      "endsWhen": "The effect ends when you use another ability that gives resistance to hydro damage, or at the start of your next turn after using this shard.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced by its mythic rarity and limited utility; it offers potent buffs but at a significant risk.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T00:18:05.773575+00:00",
    "aiReviewedAt": "2026-07-25T00:18:05.773575+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_windborne_amulet": {
    "id": "teyvat_item_windborne_amulet",
    "name": "Amulet of the Zephyr's Grace",
    "description": "The Amulet of the Zephyr's Grace, crafted by skilled artisans within Liyue Harbor from ancient wind-touched glass, channels the essence of the Venti himself. This amulet allows you to briefly dance on gusts and dodge attacks with unparalleled agility, making even the fiercest winds your ally in battle. With each pulse of the zephyr, you gain a momentary grace that can shift the tide of combat, but beware—overuse will leave you vulnerable to the whims of the wind itself.",
    "category": "equipment",
    "price": 270,
    "icon": "💨",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Dance On Gusts",
      "Evasion Boost"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "swift_messenger",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Dance On Gusts",
        "rules": "As a bonus action, you can briefly ride the winds for up to 10 feet. While in motion, you have advantage on Dexterity (Acrobatics) checks and gain a +2 bonus to your movement speed until the start of your next turn."
      },
      {
        "title": "Evasion Boost",
        "rules": "You gain a +1 dodge bonus to AC for 1 minute. This effect ends if you are incapacitated or take a voluntary action on your turn that doesn't have an action cost (such as using a reaction)."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to ensure proficiency in Dexterity checks and use the amulet's effects effectively.",
    "vendorReason": "Liyue Harbor is renowned for its artisans who masterfully craft items that harness the natural elements of Teyvat.",
    "shippingDetail": "Delivered by Swift Messenger within a week; expedited service available upon request at an additional cost.",
    "usage": {
      "activation": "Bonus action (Dance On Gusts); Instantaneous (Evasion Boost)",
      "duration": "10 feet of movement and 1 minute (Evasion Boost)",
      "endsWhen": "Start of next turn (Dance On Gusts) or incapacitation (Evasion Boost)",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's unique abilities and the expertise required to craft it justify its higher price, making it a valuable but not overpowered addition to any adventurer’s arsenal.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:18:26.099310+00:00",
    "aiReviewedAt": "2026-07-25T00:18:26.099310+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_dragonscale_rations": {
    "id": "earth_land_item_dragonscale_rations",
    "name": "Smoked Dragonheart Jerky",
    "description": "Smoked Dragonheart Jerky, crafted from the hearts of young fire dragons, offers a burst of energy and smoky aroma with each bite. These jerky strips are not only delicious but also fortify the eater with an extra layer of resilience, making it a favorite among adventurers seeking to push their limits in battle. Rumors suggest that after consumption, one might experience brief, uncontrollable bursts of flame, but these fiery flares are more likely a result of indigestion than any magical effect.",
    "category": "consumables",
    "price": 270,
    "icon": "🔥",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Restores vitality",
      "Boosts speed"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "Swift Pony Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Vitality",
        "rules": "Eating this jerky restores 30 hit points. This effect is a bonus action and can be used once per short or long rest."
      },
      {
        "title": "Boosts Speed",
        "rules": "Upon consumption, the eater gains a temporary speed boost of +5 feet for 1 hour. This effect ends if the eater consumes any food other than Smoked Dragonheart Jerky within this time frame."
      }
    ],
    "levelRequirementReason": "The jerky provides basic but potent benefits suitable for adventurers at all levels.",
    "vendorReason": "Guild Quartermasters are known to stock essential supplies that aid adventurers on their quests, including this exotic and energizing treat.",
    "shippingDetail": "The jerky is delivered fresh by the Swift Pony Courier Service, ensuring its potency remains intact.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 hour or until food other than Smoked Dragonheart Jerky is consumed",
      "endsWhen": "Eating any food other than this jerky within an hour of consumption",
      "charges": "Unlimited"
    },
    "priceReason": "The exotic origin and potent effects justify its high price, making it a rare but affordable luxury for adventurers.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:18:20.479718+00:00",
    "aiReviewedAt": "2026-07-25T00:18:20.479718+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_runestone_of_echoes": {
    "id": "earth_land_item_runestone_of_echoes",
    "name": "The Silent Sentinel's Echo",
    "description": "The Silent Sentinel's Echo is a pulsating runestone crafted from a fragment of a long-dead wizard’s tower, its surface etched with runes that whisper faint echoes of the area’s history. Touching it activates a brief moment where you perceive hidden passages and secret lore, but be wary—legendary curses can linger in its touch. Use it to uncover ancient secrets or get lost in its chaotic past.",
    "category": "curiosities",
    "price": 65000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Reveals Hidden Passages",
      "Activates Ghostly Echoes"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_snail",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Reveals Hidden Passages",
        "rules": "When activated, you can perceive hidden passages and secret lore in a 30-foot radius for up to 1 minute. This effect has a 5% chance of revealing additional secrets each day it is used."
      },
      {
        "title": "Activates Ghostly Echoes",
        "rules": "You gain the ability to see ghostly echoes that can trigger minor illusions, with a 20% success rate per attempt. These echoes last for 1 hour and have no save DC."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level to wield its ancient power without risk.",
    "vendorReason": "The Earth Emporium specializes in relics from forgotten realms, making it the best place to find this runestone.",
    "shippingDetail": "Shipped by a giant snail courier who delivers with great caution due to the item's delicate nature.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (recharges after 8 hours)",
      "endsWhen": "The effect ends when you use your action again or if the runestone is destroyed.",
      "charges": "Recharges after 8 hours of rest"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rarity and ancient craftsmanship.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T14:28:17.294509+00:00",
    "aiReviewedAt": "2026-07-25T14:28:17.294509+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_pony_massage_oil": {
    "id": "equestria_item_pony_massage_oil",
    "name": "Twilight's Tranquil Massage Oil",
    "description": "Crafted from rare moonpetal blossoms and imbued with Princess Twilight's own calming magic, this oil promises relaxation for even the most stressed pony. Apply it to your mane or hooves before a tense meeting and you'll find yourself refreshed and ready. The oil's subtle scent lingers, ensuring no one can miss its magical origin. Just be careful not to fall asleep mid-session – you might miss a vital plot point!",
    "category": "services",
    "price": 1000,
    "icon": "💆‍♀️",
    "stock": 88,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Restores Health",
      "Calm and Focus"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Stable Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Health",
        "rules": "When applied, the oil restores up to 50 hit points. This effect is instantaneous but can only be used once per long rest."
      },
      {
        "title": "Calm and Focus",
        "rules": "Applying the oil grants a +1 bonus to all Charisma checks and saving throws for 30 minutes. It also removes any negative status effects, such as fear or exhaustion."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners, providing essential support without requiring high-level abilities.",
    "vendorReason": "The market sells a variety of items that enhance daily life and well-being in Ponyville.",
    "shippingDetail": "Ships directly from the market, ensuring freshness and quality.",
    "usage": {
      "activation": "Apply to mane or hooves as an action.",
      "duration": "Instantaneous effect; lasts for 30 minutes.",
      "endsWhen": "Expires after 30 minutes or if used again before a long rest.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The oil's rarity and the magic imbued make it worth significant XP, but its utility ensures it remains reasonably priced for the market.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:19:00.318434+00:00",
    "aiReviewedAt": "2026-07-25T00:19:00.318434+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_apple_core_amulet": {
    "id": "equestria_item_apple_core_amulet",
    "name": "Apple Core of Everlasting Bite",
    "description": "The Apple Core of Everlasting Bite is a shimmering amulet forged from the heartwood of an ancient Everbloom Apple, said to have fallen from the sky during the Great Apple Blossom. This amulet not only heightens one's appetite for adventure but also strengthens the wearer in the face of overwhelming hunger or fear. It provides resistance against poison and grants a temporary boost to Strength checks when needed most.",
    "category": "equipment",
    "price": 270,
    "icon": "🍎",
    "stock": 55,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Increased Hunger",
      "Strength Boost"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Swift Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Hunger",
        "rules": "The wearer gains advantage on Constitution saving throws related to food consumption, but suffers disadvantage on all Dexterity (Stealth) checks. This effect lasts until the end of the wearer's next long rest."
      },
      {
        "title": "Strength Boost",
        "rules": "When the wearer is reduced to half their hit points or less in combat, they can use a bonus action to gain temporary hit points equal to 1d6 plus their Constitution modifier. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This amulet is accessible to players of all levels who wish to embrace the adventurous spirit it embodies.",
    "vendorReason": "The Crystal Empire, known for its connection with nature and ancient artifacts, naturally sells this enchanted amulet.",
    "shippingDetail": "Ships within one week of purchase. Expedited delivery available for an additional fee.",
    "usage": {
      "activation": "Passive effect upon donning the amulet.",
      "duration": "Until end of next long rest or until removed by the wearer.",
      "endsWhen": "The effects expire naturally at the end of a long rest, or if the amulet is removed by the wearer.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Despite its common rarity, this amulet's unique combination of benefits makes it a valuable addition to any adventurer's gear, hence the adjusted price in XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:18:39.253283+00:00",
    "aiReviewedAt": "2026-07-25T00:18:39.253283+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_giant_pastry_shield": {
    "id": "leclaire_isle_item_giant_pastry_shield",
    "name": "The Crumb Crusader Shield",
    "description": "The Crumb Crusader Shield is a colossal shield forged from hardened dough and reinforced with caramelized sugar, light as a feather yet capable of deflecting even the most potent blows. Its surface glistens with a layer of melted chocolate that provides a sticky residue upon contact, hindering attackers' movements for a turn. This pastry shield is not just a weapon; it's an edible defense that can absorb small amounts of damage without breaking its crusty form.",
    "category": "equipment",
    "price": 15000,
    "icon": "🛡️",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Deflects Blows",
      "Sticky Residue"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "flying_doughnut",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Deflects Blows",
        "rules": "When the user attacks with a melee weapon, there is a +20% chance to deflect the attack. This effect lasts until the end of the user's next turn."
      },
      {
        "title": "Sticky Residue",
        "rules": "Upon being hit by an enemy attack, the attacker has their movement speed reduced by 10 feet for 1 minute unless they succeed on a DC 15 Dexterity saving throw. This effect can only occur once per battle."
      }
    ],
    "levelRequirementReason": "Requires a level 9 character to wield and understand the shield's unique properties.",
    "vendorReason": "The Pastry Palace is known for its expertise in crafting edible defenses like The Crumb Crusader Shield.",
    "shippingDetail": "Ships via a fleet of flying doughnuts, delivering the shield within an hour if purchased during business hours.",
    "usage": {
      "activation": "Instantaneous upon attack resolution",
      "duration": "Until end of next turn or until the user's next melee attack",
      "endsWhen": "The user makes another melee attack",
      "charges": "Unlimited; regenerates after a short rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its epic rarity and unique properties.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:18:41.288226+00:00",
    "aiReviewedAt": "2026-07-25T00:18:41.288226+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_legendary_frosting_staff": {
    "id": "leclaire_isle_item_legendary_frosting_staff",
    "name": "The Blizzard Baton of Frosting",
    "description": "The Blizzard Baton of Frosting, a legendary staff hewn from the very peaks of Mount Frostwhisper, is said to have been crafted by the Great Baker himself. Its crystalline core glows with an icy sheen, capable of summoning blizzards and freezing enemies solid in its wake. Caution must be taken when wielding this staff; one misstep could result in a personal frostbite disaster, leaving you encased in ice as surely as your foes are!",
    "category": "equipment",
    "price": 66000,
    "icon": "❄️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "godly",
    "effects": [
      "Freezes Enemies",
      "Blizzard Aura"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Freezes Enemies",
        "rules": "When you hit an enemy with the staff's attack, there is a 50% chance it will be frozen solid for two turns. On a successful hit, the target must make a DC 16 Dexterity saving throw or take an additional 8 (2d4) cold damage."
      },
      {
        "title": "Blizzard Aura",
        "rules": "Once per short rest, you can activate the Blizzard Baton to create a blizzard area around you. All creatures within 30 feet must make a DC 15 Dexterity saving throw or suffer a -2 penalty to attack rolls and ability checks for one minute."
      }
    ],
    "levelRequirementReason": "This staff requires significant magical power and control, suitable only for seasoned adventurers.",
    "vendorReason": "Sweet Supplies is known for its vast array of enchanted items, including this one-of-a-kind artifact.",
    "shippingDetail": "Ships via the swift wyverns of Dragon Delivery, ensuring safe and timely delivery to your doorstep.",
    "usage": {
      "activation": "A bonus action is required to summon a blizzard or freeze an enemy. Passive once per short rest for the Blizzard Aura effect.",
      "duration": "Blizzard aura lasts one minute; freezing effect lasts two turns on hit.",
      "endsWhen": "On completion of its duration, at the end of your next turn if you miss with the staff's attack, or when destroyed.",
      "charges": "Unlimited charges."
    },
    "priceReason": "The Blizzard Baton is a unique and powerful item, suitable for use by a 15th-level character but still priced moderately to reflect its rarity and utility within the D&D market.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-25T00:19:23.300343+00:00",
    "aiReviewedAt": "2026-07-25T00:19:23.300343+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_master_wario_scroll": {
    "id": "earth_land_master_wario_scroll",
    "name": "Wario's Guide to Magnificent Acquisition",
    "description": "Wario's Guide to Magnificent Acquisition is a meticulously illustrated scroll, its pages filled with Wario’s unique methods for acquiring wealth. It details intricate traps made of rubber duckies and shiny objects, as well as persuasive tactics that leave even the most skeptical buyers convinced they need one more rubber ducky. This is not just a guide; it's a premium service, ensuring you're always ready to outsmart your competition with Wario’s signature style.",
    "category": "services",
    "price": 4200,
    "icon": "💰",
    "stock": 1,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "traps_and_shiny_objects",
      "persuasion_expert"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_delivery_truck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Traps and Shiny Objects",
        "rules": "Activate as a bonus action. Set one trap or display one shiny object, which grants advantage on the next check to acquire an item. This effect can be used once per long rest."
      },
      {
        "title": "Persuasion Expert",
        "rules": "Passive effect that increases your Charisma (Deception) checks by 2 until the end of your next short or long rest. This effect cannot be stacked with other similar abilities."
      }
    ],
    "levelRequirementReason": "This guide is accessible to all adventurers, as it provides fundamental skills for acquiring wealth.",
    "vendorReason": "The Earth Emporium specializes in rare and unique items that cater to the diverse needs of its patrons, making Wario's Guide a fitting addition.",
    "shippingDetail": "Delivered by a giant delivery truck, known for its reliable service and occasional detours through less-traveled roads.",
    "usage": {
      "activation": "Bonus action to set a trap or display an object. Passive effect of Persuasion Expert until rest.",
      "duration": "Instantaneous activation; passive effect lasts until the end of your next short or long rest.",
      "endsWhen": "Rests and charges are depleted.",
      "charges": "Unlimited, but one use per day."
    },
    "priceReason": "The guide is priced at 1000 XP as it provides a significant advantage in acquiring wealth through unique traps and persuasive tactics.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-25T00:19:08.165553+00:00",
    "aiReviewedAt": "2026-07-25T00:19:08.165553+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_thunderbolt_berry": {
    "id": "pokemon_item_thunderbolt_berry",
    "name": "Volcanic Thunder Berry",
    "description": "The Volcanic Thunder Berry, a vibrant fruit tinged with molten lava, bursts with raw volcanic energy when consumed. It grants a ferocious boost to your attack power and imbues you with a smoldering aura that has a chance of igniting foes in the midst of combat, making it an invaluable companion for fiery battles against fire-adjacent enemies. This berry's unique properties are said to come from ancient volcanic Pokémon who once roamed these lands, leaving behind their essence in every bite.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "attack_boost",
      "burn_chance"
    ],
    "vendor": "pokemart",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Attack Boost",
        "rules": "Upon consuming the Volcanic Thunder Berry, you gain a +2 bonus to your attack rolls for 1 minute. This effect ends early if you take any non-lethal damage."
      },
      {
        "title": "Burn Chance",
        "rules": "There is a 30% chance that when you hit an enemy with an attack while under the effects of this berry, they are ignited as though by a fireball. This igniting effect lasts for 1d4 rounds and has no save DC."
      }
    ],
    "levelRequirementReason": "Beginners can benefit from the increased firepower provided by the Volcanic Thunder Berry without requiring too much experience.",
    "vendorReason": "The Pokemart specializes in items that help trainers better their Pokémon and themselves, making it a natural fit for this powerful berry.",
    "shippingDetail": "This item is shipped by the Delivery Drone, ensuring quick delivery to your doorsteps.",
    "usage": {
      "activation": "Eaten as a consumable",
      "duration": "1 minute per usage",
      "endsWhen": "You take non-lethal damage or the duration ends",
      "charges": "Unlimited"
    },
    "priceReason": "The Volcanic Thunder Berry is priced at 1000 XP due to its rare origin, powerful effects, and unique ability to enhance combat effectiveness.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:20:06.923345+00:00",
    "aiReviewedAt": "2026-07-25T00:20:06.923345+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_aurora_shard": {
    "id": "pokemon_item_aurora_shard",
    "name": "Shard of the Celestial Pokémon",
    "description": "Crafted from a fragment of a legendary Aurora Pokémon that fell to the earth in ancient times, this Shard of the Celestial Pokémon emits an ethereal glow that dances like stardust. Holding it allows you to summon a dazzling illusionary duplicate that distracts your foes and opens windows for attack, but beware—staring into its light too long could leave you entranced by celestial dreams! The shard's power is as fleeting as the auroras themselves, vanishing just as quickly as it appears.",
    "category": "curiosities",
    "price": 66000,
    "icon": "✨",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "summon_illusionary_duplicate",
      "illusionary_duplicate_has_low_health"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Mystic Portal",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Summons Illusionary Duplicate",
        "rules": "As a bonus action, you can summon an illusionary duplicate of yourself that lasts for up to one minute. The duplicate has half your hit points and grants advantage on Deception checks against creatures within 30 feet. It dissipates if it drops to 0 hit points or when the duration ends."
      },
      {
        "title": "Low Health",
        "rules": "The illusionary duplicate has only one-tenth of your maximum hit points, making it a weak but effective distraction. Any damage dealt to it is immediately transferred to you as true damage."
      }
    ],
    "levelRequirementReason": "This shard requires a level 12 character due to the complex magic and power needed to harness its celestial energy.",
    "vendorReason": "The Safari Shop specializes in rare and mystical artifacts that can be found or crafted from exotic locales, including fragments of legendary Pokémon like Aurora.",
    "shippingDetail": "Ships via the Mystic Portal's enchanted courier service, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Bonus action to summon the duplicate; dissipates at end of your next turn or when destroyed.",
      "duration": "Up to one minute from activation.",
      "endsWhen": "Dissipates if reduced to 0 hit points or at the start of your next turn after it was summoned.",
      "charges": "Unlimited uses, recharges on a long rest."
    },
    "priceReason": "Balanced at 1000 XP, this shard offers a unique and powerful effect that can be used strategically in combat without overshadowing other party members or becoming overpowered.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:20:31.499268+00:00",
    "aiReviewedAt": "2026-07-25T00:20:31.499268+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronal_resonator": {
    "id": "the_edge_chronal_resonator",
    "name": "Chronal Resonator – Temporal Echo",
    "description": "The Chronal Resonator – Temporal Echo hums like a resonant bell, its polished brass surface gleaming with captured echoes of time itself. When activated by a swift action during combat, it allows the wielder to rewind their last action, effectively negating an attack or spell. However, this tampering with temporal fabric comes at a cost; there's always a chance of inadvertently creating a paradox, potentially disrupting the very timeline you're trying to protect!",
    "category": "equipment",
    "price": 15000,
    "icon": "⏳",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Rewind Last Action",
      "Temporal Paradox Risk"
    ],
    "vendor": "final_shop",
    "shippedBy": "Temporal Express",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Rewind Last Action",
        "rules": "Activating as a swift action during combat allows the user to negate their last action. This includes attacks, spellcasting, or any other immediate action. The effect is instantaneous and has no save DC. However, it can only be used once per combat."
      },
      {
        "title": "Temporal Paradox Risk",
        "rules": "Each use of the Chronal Resonator introduces a 10% chance (roll 1d10 ≤5) that a temporal paradox is created. If this occurs, the wielder must succeed on a DC 15 Constitution saving throw or suffer one level of exhaustion and take 2d6 damage from temporal instability."
      }
    ],
    "levelRequirementReason": "Only those with experience in handling time-based magic can safely operate the Chronal Resonator without causing further harm.",
    "vendorReason": "Final Shop specializes in esoteric and powerful artifacts, ensuring that only those who truly need such items have access to them.",
    "shippingDetail": "Ships via Temporal Express, delivering directly to your doorstep with no delays.",
    "usage": {
      "activation": "Swift action during combat",
      "duration": "Instantaneous; ends when the next turn begins",
      "endsWhen": "The next turn begins or the user takes another swift action",
      "charges": "One use per combat"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its high rarity and the risk involved in using it.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:19:56.541712+00:00",
    "aiReviewedAt": "2026-07-25T00:19:56.541712+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_godly_voidstone_amulet": {
    "id": "the_edge_godly_voidstone_amulet",
    "name": "Amulet of the Unending Descent",
    "description": "Forged in the heart of a collapsing star, this amulet radiates an aura of absolute nothingness. Its surface is etched with ancient runes that hum with raw cosmic energy. The wearer gains resilience against psychic attacks and can momentarily phase through solid objects, but gazing into its depths might drive you mad. This artifact's power comes from the very void it was crafted in, making it both a relic of godly craftsmanship and a source of madness for the unwary.",
    "category": "premium",
    "price": 1000000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Void Resilience",
      "Phasing"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Celestial Delivery",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Void Resilience",
        "rules": "The wearer gains immunity to psychic damage. This effect lasts until the end of their next turn, and they must make a DC 18 Constitution saving throw or be stunned for 1 minute on a failed save."
      },
      {
        "title": "Phasing",
        "rules": "As a bonus action, the wearer can attempt to phase through solid objects. This effect has a range of 5 feet and lasts for up to 10 seconds per use. On a successful Wisdom (Perception) check against DC 16, they can move through one non-magical object of Medium or smaller size without damage. If the save is failed by more than 5, they are knocked prone."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and power can harness the raw cosmic energy this amulet commands.",
    "vendorReason": "The outpost has established trade routes that occasionally bring in such powerful artifacts from distant realms.",
    "shippingDetail": "This item is shipped via an extradimensional rift, ensuring it arrives safely and intact.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 10 seconds per use",
      "endsWhen": "The effect ends when the duration expires or the wearer moves more than 5 feet in a direction other than through an object. If phased, they must make another saving throw at the start of their next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "This amulet's price reflects its rarity and the immense power it contains, balanced by requiring significant experience to wield.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-25T00:19:44.335563+00:00",
    "aiReviewedAt": "2026-07-25T00:19:44.335563+00:00",
    "aiReviewVersion": 1
  },
  "internet_data_slug": {
    "id": "internet_data_slug",
    "name": "Chromatic Data Slug",
    "description": "The Chromatic Data Slug is a bioluminescent, pulsating mass of corrupted data harvested from the depths of the internet's dark net. This tiny creature can be hurled at an enemy to unleash a torrent of confusing information that causes them to falter and stagger for several rounds. It also has a slimy trail of data corruption that lingers behind it, further sapping their mental acuity as they struggle to process the onslaught.",
    "category": "consumables",
    "price": 1000,
    "icon": "🦠",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Inflicts Confusion",
      "Leaves Data Corruption"
    ],
    "vendor": "data_dealer",
    "shippedBy": "fiber_optic_cable",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Inflicts Confusion",
        "rules": "When the Chromatic Data Slug is thrown at a target, it causes temporary confusion. The target must succeed on a DC 14 Intelligence saving throw or become incapacitated for 1d4 rounds."
      },
      {
        "title": "Leaves Data Corruption",
        "rules": "After release, the Chromatic Data Slug leaves behind a trail of data corruption that persists in a 5-foot radius area. Any creature moving through this area must succeed on a DC 12 Dexterity saving throw or take 1d6 psychic damage."
      }
    ],
    "levelRequirementReason": "This item requires a certain level of knowledge and expertise to properly handle the volatile nature of its effects.",
    "vendorReason": "The Data Dealer specializes in rare and dangerous items from the digital underworld, making this slug one of their most sought-after wares.",
    "shippingDetail": "Ships via secure fiber optic conduit with a 1d4 hour delay due to encryption protocols.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous, effect lasts until the end of the target's next turn or when they succeed on their saving throw.",
      "endsWhen": "The target successfully saves against either effect.",
      "charges": "Unlimited"
    },
    "priceReason": "This item is crafted from rare data streams and requires specialized knowledge to use effectively, justifying its high price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:20:18.003577+00:00",
    "aiReviewedAt": "2026-07-25T00:20:18.003577+00:00",
    "aiReviewVersion": 1
  },
  "internet_quantum_wristband": {
    "id": "internet_quantum_wristband",
    "name": "Phase-Shifting Wristband",
    "description": "The Phase-Shifting Wristband is a sleek, matte-black device forged from an alloy of unknown origin. Its design hints at cybernetic origins, yet it whispers of ancient magic. Activating this wristband causes a shimmering, holographic distortion around the wearer’s arm, allowing them to phase through solid objects for brief moments. However, prolonged use risks triggering a glitch that sends the user into a binary trance, muttering in code and losing all coordination until they rest.",
    "category": "equipment",
    "price": 4200,
    "icon": "🌀",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Phasing Through Obstacles",
      "Binary Trance"
    ],
    "vendor": "cyber_market",
    "shippedBy": "drone_delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Phasing Through Obstacles",
        "rules": "As an action, the wearer can activate the wristband to phase through one wall or barrier within their reach. This effect lasts for 1 minute per charge used and ends early if the user takes damage. The device has a limited number of charges, replenishing after a long rest."
      },
      {
        "title": "Binary Trance",
        "rules": "If the wearer uses the wristband too frequently or for an extended period, they risk entering a binary trance that lasts until they complete a short rest. During this state, their Dexterity is reduced by 2 and they are unable to communicate normally."
      }
    ],
    "levelRequirementReason": "The Phase-Shifting Wristband requires at least 6th level due to its complex activation and the risk of binary trance.",
    "vendorReason": "Cyber Market specializes in cutting-edge technology, including devices with questionable origins like this wristband.",
    "shippingDetail": "The wristband arrives via a drone delivery service that ensures it is delivered within one week.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per charge used, ends early if damaged",
      "endsWhen": "Damage or completion of a long rest",
      "charges": "Limited charges; recharged after a long rest"
    },
    "priceReason": "The Phase-Shifting Wristband is priced at 1000 XP due to its unique technology and the risk it poses, balancing utility with danger.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:20:31.157106+00:00",
    "aiReviewedAt": "2026-07-25T00:20:31.157106+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_chronometer_of_delay": {
    "id": "connectopia_chronometer_of_delay",
    "name": "Temporal Jitter Device",
    "description": "The Temporal Jitter Device, a delicate chronometer woven from salvaged data streams and solidified time-dust, is a whimsical yet perilous trinket crafted by the eccentric clocksmiths of Chronopolis. This device momentarily distorts your perception of time, allowing you to dodge tricky traps with uncanny precision or escape dire situations in a blaze of glory. However, its instability means that prolonged use can cause bizarre side effects, such as glimpsing yesterday’s breakfast or experiencing an inexplicable déjà vu.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Temporal Distortion",
      "Bizarre Side Effects"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "express pigeon post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "By using the Temporal Jitter Device, you can briefly slow down your perception of time. This effect grants a +20 bonus to Dexterity saving throws made to avoid or escape from a trap or hazard within 30 feet for up to 5 seconds. The duration ends if you are hit by an attack or take any damage."
      },
      {
        "title": "Bizarre Side Effects",
        "rules": "There is a 10% chance that using the Temporal Jitter Device will cause you to experience bizarre side effects, such as seeing yesterday’s breakfast or experiencing déjà vu. These effects last for 1d4 rounds and can disrupt your concentration."
      }
    ],
    "levelRequirementReason": "This device is crafted with simpler components than more potent time-altering devices, making it accessible to lower-level characters.",
    "vendorReason": "Pioneer Post values the quirky and unconventional items that add flavor to their inventory.",
    "shippingDetail": "The express pigeon post delivers this delicate device with utmost care, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 5 seconds or until disrupted by an attack or damage",
      "endsWhen": "You are hit by an attack or take any damage, or the duration ends",
      "charges": "Unlimited uses"
    },
    "priceReason": "The device is crafted from salvaged materials and requires precise calibration, justifying its higher price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:20:46.050236+00:00",
    "aiReviewedAt": "2026-07-25T00:20:46.050236+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_strategic_assessment": {
    "id": "midlands_item_strategic_assessment",
    "name": "Councilor's Insightful Appraisal",
    "description": "Councilor's Insightful Appraisal is a worn leather-bound tome adorned with gold leaf and an ornate, brass clasp shaped like a cogs wheel. This relic of ancient strategy offers its bearer a momentary insight into the battlefield, revealing hidden weaknesses in enemies' formations and suggesting tactical maneuvers that could turn the tide of any conflict. The councilor's words are not only wise but also slightly disheartening, as they often echo his own frustrations with the state of affairs.",
    "category": "services",
    "price": 4200,
    "icon": "🧐",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "reveals_enemy_weakness",
      "suggestions_for_tactical_maneuvers"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Reveals Enemy Weakness",
        "rules": "As an action, you can open Councilor's Insightful Appraisal to gain a +2 bonus to one ability check related to strategy or tactics. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Suggestions for Tactical Maneuvers",
        "rules": "When you use the book in combat, it provides you with a suggestion for a tactical maneuver that grants advantage on one ability check related to combat. The councilor’s advice is always sound but comes with a slight delay of 1 round."
      }
    ],
    "levelRequirementReason": "The tome requires a certain level of experience and strategic knowledge to fully appreciate its wisdom.",
    "vendorReason": "Empire Exchange is known for its array of rare artifacts, including magical texts like Councilor's Insightful Appraisal.",
    "shippingDetail": "The messenger hawk delivers the book within a day of purchase, ensuring that you can immediately consult its wisdom in your next battle.",
    "usage": {
      "activation": "action or bonus action",
      "duration": "1 minute per use; expires after a long rest",
      "endsWhen": "the duration ends or when the user takes damaging action",
      "charges": "unlimited, but only one effect can be used per short rest"
    },
    "priceReason": "The price reflects its rarity and the strategic value it brings to any tactical situation.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:21:24.297348+00:00",
    "aiReviewedAt": "2026-07-25T00:21:24.297348+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_potion_of_elven_grace": {
    "id": "middle_earth_potion_of_elven_grace",
    "name": "Silvanus's Serenity Elixir",
    "description": "Silvanus's Serenity Elixir, a shimmering pale green potion, is a delicate blend of rare Moonpetal blossoms and the whispered secrets of Greenwood's ancient elven lore. This magical concoction grants +2 Dexterity for six turns, lending grace to every movement. It also subtly reduces anger levels by 3 points, making it perfect for those moments when patience runs thin. The potion is so potent that a single sip can alter one’s luck, offering +10% chance to avoid traps or environmental hazards.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌿",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Agility",
      "Anger Reduction"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Agility",
        "rules": "Drinking Silvanus's Serenity Elixir grants the user +2 Dexterity for six turns. This effect is applied as a bonus action and can be used once per short or long rest."
      },
      {
        "title": "Anger Reduction",
        "rules": "The potion reduces the user’s anger level by 3 points, making it easier to avoid confrontations and handle tense situations. This effect lasts for six turns and is also applied as a bonus action, with one use per short or long rest."
      }
    ],
    "levelRequirementReason": "This potion is accessible to first-level characters to encourage players of all levels to engage in social interactions.",
    "vendorReason": "The elven market, known for its rare and magical wares, is the perfect place to find Silvanus's Serenity Elixir.",
    "shippingDetail": "Shipped by swift winged messengers who ensure timely delivery of this precious potion.",
    "usage": {
      "activation": "Bonus action",
      "duration": "6 turns",
      "endsWhen": "After six turns or when the user takes a short or long rest, whichever comes first.",
      "charges": "One use per day"
    },
    "priceReason": "The potion's price is set at 1000 XP to reflect its rare ingredients and potent effects.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:21:05.326976+00:00",
    "aiReviewedAt": "2026-07-25T00:21:05.326976+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_ring_of_stonehelm": {
    "id": "middle_earth_ring_of_stonehelm",
    "name": "Stonehelm's Steadfast Band",
    "description": "Forged deep within the ancient heart of Stonehelm, this ring pulses with the very essence of mountain stone and earth magic. It offers protection against physical attacks, deflecting blows as if reinforced by a dwarven smith's finest work. The ring whispers warnings of impending danger, alerting its wearer to threats in a 30-foot radius, though these warnings are often tinged with humor, reflecting the dwarves' unique sense of humor.",
    "category": "equipment",
    "price": 4200,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Armor +8",
      "Chance to Deflect Attacks (+5%)"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "rolling_cart",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Deflect Attack",
        "rules": "When you are attacked by a melee or ranged weapon, there is a 5% chance that the attack will be deflected and deal no damage. This effect can occur once per short rest."
      },
      {
        "title": "Detect Danger",
        "rules": "Once per long rest, you can detect danger within a 30-foot radius for 1 hour. During this time, you have advantage on Perception checks to notice hidden creatures or approaching threats. This ability is limited to once every 24 hours."
      }
    ],
    "levelRequirementReason": "Crafted by dwarven artisans with complex enchantments, the ring requires a minimum level of 7 to wield its protective and warning powers effectively.",
    "vendorReason": "The dwarves at Dwarven Forge are renowned for their mastery of stone and earth magic, making them the perfect purveyors of this enchanted ring.",
    "shippingDetail": "Delivered by a rolling cart that traverses the mountain paths, ensuring timely arrival with minimal delay.",
    "usage": {
      "activation": "Passive effect; no activation required for deflection or detection.",
      "duration": "Instantaneous and lasting until used up or ended.",
      "endsWhen": "Deflect Attack ends when you are attacked. Detect Danger ends upon the expiration of its duration.",
      "charges": "Unlimited, but limited to one use per long rest."
    },
    "priceReason": "The ring's balanced price reflects the rarity and craftsmanship required for such a powerful yet humorous artifact, ensuring it remains a fair addition to any character's gear.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:21:09.518570+00:00",
    "aiReviewedAt": "2026-07-25T00:21:09.518570+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_amulet_of_forgotten_wisdom": {
    "id": "middle_earth_amulet_of_forgotten_wisdom",
    "name": "The Oracle's Echo",
    "description": "The Oracle's Echo, a pendant forged from the petrified wood of an ancient Elven tree, hums softly as it draws upon forgotten prophecies and whispers of times long past. It grants its wearer flashes of insight into hidden secrets and traps, often revealing paths to exploit the greed of others for personal gain. The amulet's power is tempered by a touch of wisdom, ensuring that any gained knowledge is used with discernment.",
    "category": "curiosities",
    "price": 150000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Wisdom Boost",
      "Insightful Flash"
    ],
    "vendor": "elven_market",
    "shippedBy": "dragon_airmail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wisdom Boost",
        "rules": "Activates as a bonus action. Increases the wearer's Intelligence by +5 for 1 hour, allowing them to better perceive and navigate complex situations."
      },
      {
        "title": "Insightful Flash",
        "rules": "Once per day, the wearer can activate this effect as an action to gain temporary insight that reveals a hidden passage or trap within 30 feet. This effect has no save DC but is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "The Oracle's Echo requires minimal magical power, making it accessible to all adventurers.",
    "vendorReason": "Elves are known for their deep connection to ancient lore and wisdom, which makes them the perfect custodians of such an artifact.",
    "shippingDetail": "Ships via dragon airmail within 48 hours, ensuring swift delivery of this valuable item.",
    "usage": {
      "activation": "Bonus action for Wisdom Boost; Action to activate Insightful Flash",
      "duration": "1 hour for Wisdom Boost; Instantaneous effect for Insightful Flash",
      "endsWhen": "Ends at the start of your next turn after the duration expires or when you lose consciousness.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Oracle's Echo is moderately priced given its mythic rarity and the significant benefits it offers to all adventurers.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-25T14:28:54.593601+00:00",
    "aiReviewedAt": "2026-07-25T14:28:54.593601+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_spirit_weaving_service": {
    "id": "animatopia_spirit_weaving_service",
    "name": "Echoes of the Ancestors - Spirit Weaving",
    "description": "The Tribal Trader offers a unique service: weaving Echoes of the Ancestors into your equipment. These spirit echoes grant minor buffs, enhancing your gear with ancestral power. The core of each echo is crafted from ancient feathers and woven through the Tribal Trader's forge. Using this service allows you to harness fleeting spirits that provide resistance to fear effects for a limited time, but beware—overindulgence in these echoes can lead to lingering confusion or a slow pace, disrupting your movements.",
    "category": "services",
    "price": 1000,
    "icon": "🌀",
    "stock": 30,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "resistance to fear",
      "chance of minor status effect"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "swift_falcon Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Fear",
        "rules": "When you activate the Echoes of the Ancestors service, you gain temporary resistance to fear effects. This lasts for a duration of one hour and can be reactivated once per long rest."
      },
      {
        "title": "Minor Status Effect",
        "rules": "There is a small chance (20%) that activating this service results in gaining a minor status effect such as confusion or slowed movement. These effects last until the end of your next turn and do not stack with each other."
      }
    ],
    "levelRequirementReason": "This service is available to all adventurers, providing a simple yet potent tool for those just starting their journey.",
    "vendorReason": "The Tribal Trader specializes in ancient services and rituals, offering connections to the spirit world that newer adventurers find invaluable.",
    "shippingDetail": "Delivered swiftly by a swift falcon, ensuring your Echoes are ready for immediate use upon arrival.",
    "usage": {
      "activation": "A bonus action is required to activate the service and weave the echoes into your equipment.",
      "duration": "The effects last until the end of your next short or long rest.",
      "endsWhen": "The temporary resistance ends at the conclusion of a short or long rest, and minor status effects resolve at the end of your turn.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This service strikes a balance, offering potent buffs for a moderate price, suitable for adventurers who need quick boosts without breaking the bank.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T00:21:24.697018+00:00",
    "aiReviewedAt": "2026-07-25T00:21:24.697018+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_shard_of_the_storm": {
    "id": "animatopia_shard_of_the_storm",
    "name": "Thunderclaw's Fragment",
    "description": "Thunderclaw's Fragment is a jagged shard of solidified lightning, harvested from the heart of a raging storm. This artifact crackles with potent energy, dealing +8 lightning damage and has a chance to stun on hit. Unleashing its power comes at a cost; prolonged use risks attracting unwanted attention from powerful storm spirits, as it can summon a lightning strike that arcs through the air in a 10-foot line, threatening all within reach. Handle with caution, or you might find yourself becoming a walking thunderstorm.",
    "category": "curiosities",
    "price": 66000,
    "icon": "⚡",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Lightning Damage +8",
      "Stun on Hit"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Storm Hawk Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stun on Hit",
        "rules": "When this item is activated and successfully hits, there is a 20% chance to stun the target for 1 round. This effect has no save DC."
      },
      {
        "title": "Lightning Strike",
        "rules": "Activating this item can also summon a lightning strike that arcs in a line originating from you, affecting all creatures within a 10-foot line. Creatures must make a Dexterity saving throw (DC 15) or take 24 (6d8) lightning damage and be knocked prone."
      }
    ],
    "levelRequirementReason": "This fragment is potent enough to require the user to have at least first-level proficiency in combat to wield its power.",
    "vendorReason": "Beast Bazaar specializes in rare and mystical items, making Thunderclaw's Fragment a fitting addition to their stock.",
    "shippingDetail": "Ships within 24 hours of purchase; requires special handling due to the volatile nature of the fragment.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous, with a recharge after 10 minutes of inactivity",
      "endsWhen": "Exhausted upon successful hit or summoning the lightning strike; recharges after 10 minutes of non-use.",
      "charges": "2 uses per long rest"
    },
    "priceReason": "The artifact's rarity, the difficulty in harvesting it from storm hearts, and its potent effects justify this balanced XP price.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T00:21:59.615418+00:00",
    "aiReviewedAt": "2026-07-25T00:21:59.615418+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_thunderbolt_amulet": {
    "id": "pokemon_item_thunderbolt_amulet",
    "name": "Thunderbolt Amulet of Voltaria",
    "description": "The Thunderbolt Amulet of Voltaria, forged from the very essence of a tempest's fury, glimmers with an otherworldly light that crackles like lightning. Crafted by legendary trainers who sought dominion over stormy skies, this amulet is said to amplify one's connection to the elemental forces. Wearers report heightened reflexes and a magnetic aura that draws misfortune towards foes, making it an indispensable companion for any trainer facing the elements.",
    "category": "equipment",
    "price": 4200,
    "icon": "⚡",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "thunder_damage",
      "dodge_boost"
    ],
    "vendor": "pokemart",
    "shippedBy": "Express Couriers of Voltaria",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Thunder Damage",
        "rules": "When you or an ally within 5 feet of you takes thunder damage from a creature, you can use your reaction to deal lightning damage equal to the thunder damage taken. This effect has no cooldown."
      },
      {
        "title": "Dodge Boost",
        "rules": "While wearing this amulet, you have advantage on Dexterity saving throws and attack rolls made with ranged weapons. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The amulet requires a minimum level to harness its volatile energies effectively.",
    "vendorReason": "Pokemarts stock a variety of equipment favored by trainers, and this amulet is one such item.",
    "shippingDetail": "Ships via express courier with same-day delivery within the region.",
    "usage": {
      "activation": "Reaction to amplify thunder damage taken or when making a Dexterity saving throw or attack roll with a ranged weapon.",
      "duration": "Instantaneous for each effect, until the start of your next turn otherwise.",
      "endsWhen": "The amulet's charges are exhausted after 3 uses per short rest.",
      "charges": "3"
    },
    "priceReason": "This amulet requires a significant amount of XP, considering its unique and powerful abilities.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T15:12:26.028233+00:00",
    "aiReviewedAt": "2026-07-25T15:12:26.028233+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_evolution_scroll": {
    "id": "pokemon_item_evolution_scroll",
    "name": "Scroll of Accelerated Metamorphosis",
    "description": "The Scroll of Accelerated Metamorphosis, crafted by a long-lost Pokémon scholar, is said to have been used in rituals that pushed evolution beyond natural limits. Unfold it and feel the ancient power course through your veins, accelerating growth at an alarming rate. Be warned: the process can be explosive, causing temporary buffing to attack but also risking unintended side effects like minor burns or even early-stage evolution of non-evolving Pokémon species.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🦋",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "accelerated_evolution",
      "temporary_buff_attack"
    ],
    "vendor": "safari_shop",
    "shippedBy": "express_wingfoot_courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Accelerated Evolution",
        "rules": "Activates as a bonus action. The user's next successful attack deals an additional +2d6 damage, but the target has advantage on all saving throws until the end of their next turn due to the rapid changes. This effect can only be used once per short or long rest."
      },
      {
        "title": "Temporary Buff Attack",
        "rules": "Lasts for 1 minute after activation. Provides a +2 bonus to attack rolls and +1 to hit points per round. Ends early if the user takes any damage, falls unconscious, or completes a long rest."
      }
    ],
    "levelRequirementReason": "Requires at least level 3 to handle the potential side effects of accelerated evolution safely.",
    "vendorReason": "The Safari Shop deals with rare and dangerous Pokémon items, making it a fitting vendor for this ancient scroll.",
    "shippingDetail": "Ships via Express Wingfoot Courier, ensuring safe delivery within one hour of purchase.",
    "usage": {
      "activation": "Bonus action to unfold and activate.",
      "duration": "1 minute after activation or until interrupted by damage, unconsciousness, or a long rest.",
      "endsWhen": "On taking damage, falling unconscious, or completing a long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP to reflect the risks and benefits of using an item that can dramatically alter one's form and abilities temporarily.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:22:15.435129+00:00",
    "aiReviewedAt": "2026-07-25T00:22:15.435129+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_frostbite_amulet": {
    "id": "earth_land_frostbite_amulet",
    "name": "The Whispering Shard of Winter's Ire",
    "description": "The Whispering Shard of Winter's Ire pulsates with a cold, almost palpable energy that seems to seep into your very bones. Crafted from the shattered heart of an ancient frost dragon, this amulet grants you resistance to cold damage and imbues your voice with a chilling whisper that occasionally offers strategic advice—or biting sarcasm. Its icy pulse can freeze your fingers on particularly frigid days, making it both a blessing and a curse for those who dare wear it.",
    "category": "equipment",
    "price": 15000,
    "icon": "🥶",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Cold Resistance",
      "Voice of Winter"
    ],
    "vendor": "magic_shop",
    "shippedBy": "magical_cartridge",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "You gain resistance to cold damage. This effect is active as long as you are wearing the amulet."
      },
      {
        "title": "Voice of Winter",
        "rules": "Once per short rest, you can whisper a strategic suggestion or biting insult to an ally within 30 feet. The DM will decide if it provides tactical advantage and whether it is helpful or harmful based on in-game context."
      }
    ],
    "levelRequirementReason": "This amulet's power draws from the ancient magic of a frost dragon, requiring a strong mage to wield its abilities effectively.",
    "vendorReason": "The magic shop specializes in rare and powerful artifacts, making it the ideal vendor for such an item.",
    "shippingDetail": "Delivered via magical courier, ensuring swift and safe transport of this delicate artifact.",
    "usage": {
      "activation": "Instantaneous action to whisper a strategic suggestion or insult.",
      "duration": "One use per short rest.",
      "endsWhen": "Upon use or if the amulet is removed from your person.",
      "charges": "Unlimited uses, recharged with each long rest."
    },
    "priceReason": "This amulet's balanced price reflects its rarity and the limited availability of frost dragon materials used in its crafting.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-25T00:22:40.715348+00:00",
    "aiReviewedAt": "2026-07-25T00:22:40.715348+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_guild_master_badge": {
    "id": "earth_land_guild_master_badge",
    "name": "The Ironclad Standard of the Stoneguard",
    "description": "The Ironclad Standard of the Stoneguard is a heavy, rusted metal shield badge that bears the emblem of the Stoneguard Guild. Crafted from ancient stone and enchanted with minor earth magic, it absorbs stray magical energies, making it a symbol of both strength and defense. Rumors suggest that its presence can deter attacks, but it also draws the attention of powerful wizards seeking to claim such an artifact for themselves.",
    "category": "faction",
    "price": 4200,
    "icon": "🛡️",
    "stock": 30,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Shield Against Magic",
      "Deterrence Aura"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "delivery_pony",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Shield Against Magic",
        "rules": "When worn by a Stoneguard member, this badge has a 10% chance per day to nullify one minor magical effect. This effect is instantaneous and requires no action from the wearer."
      },
      {
        "title": "Deterrence Aura",
        "rules": "While wearing this badge, enemies within 5 feet of the wearer may make a Wisdom saving throw (DC 12) or hesitate for 1 round due to its intimidating presence. This effect ends when the wearer moves out of an adjacent space."
      }
    ],
    "levelRequirementReason": "Requires at least 4th level to wield effectively within the Stoneguard.",
    "vendorReason": "The guild quartermaster handles all official gear and insignia, including this badge of honor.",
    "shippingDetail": "Ships via swift courier pony with a guaranteed delivery within three days.",
    "usage": {
      "activation": "Passive effect for Stoneguard members only.",
      "duration": "Instantaneous or lasts until the wearer moves out of an adjacent space, whichever ends it first.",
      "endsWhen": "The wearer moves out of an adjacent space to the badge's source.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for a rare item that provides both defensive and morale-boosting benefits.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:22:23.223468+00:00",
    "aiReviewedAt": "2026-07-25T00:22:23.223468+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_godly_rune_stone": {
    "id": "earth_land_godly_rune_stone",
    "name": "The Heart of the Shifting Peaks",
    "description": "The Heart of the Shifting Peaks is a jagged, obsidian stone infused with the raw power of an ancient dragon's heart. Touching it grants you incredible strength and temporary immunity to ground-based attacks, but beware: it also instills a compulsive urge to tunnel through solid rock. With each use, the earth around you trembles ever so slightly, a reminder of the elemental forces at play within this relic.",
    "category": "premium",
    "price": 1000000,
    "icon": "⛰️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Powerful Strength",
      "Earth Tremors"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Powerful Strength",
        "rules": "Activating the Heart grants you temporary hit point equal to your level + your Constitution modifier for a duration of one minute. It can be used once per short or long rest."
      },
      {
        "title": "Earth Tremors",
        "rules": "The Heart emits minor seismic disturbances with a 5% chance each use, causing nearby creatures within 30 feet to make a DC 16 Constitution saving throw or become disoriented until the start of their next turn. The effect ends if used more than once per day."
      }
    ],
    "levelRequirementReason": "Suitable for all levels, as it provides temporary power without overwhelming capabilities.",
    "vendorReason": "The Earth Emporium specializes in rare geological artifacts and relics from ancient times.",
    "shippingDetail": "Delivered via a dimensional portal, ensuring the stone arrives intact and potent.",
    "usage": {
      "activation": "Action",
      "duration": "One minute, recharges after a short or long rest",
      "endsWhen": "The duration ends when you take damage or end your turn in mid-air",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its powerful but not overbearing effect.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-25T00:22:56.012306+00:00",
    "aiReviewedAt": "2026-07-25T00:22:56.012306+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_gear_reinforced_plinth": {
    "id": "connectopia_gear_reinforced_plinth",
    "name": "Reinforced Plinth Fragment",
    "description": "This jagged fragment of solidified block energy pulses with raw construction might, a relic torn from Connectopia’s core. Its surface crackles with latent potential, ready to reinforce your base or shatter impenetrable stone. Some say gazing upon it too long will leave you seeing blueprints and wondering how to integrate it into your designs. But be wary: its power comes at a cost—do not stare for too long.",
    "category": "equipment",
    "price": 15000,
    "icon": "🧱",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Structural Reinforcement",
      "Energy Burst"
    ],
    "vendor": "block_smith",
    "shippedBy": "automated_drone",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Structural Reinforcement",
        "rules": "When placed, the fragment provides minor structural reinforcement, granting you a +2 bonus to your saving throws against damage. This effect lasts for 1 hour and can be used once per long rest."
      },
      {
        "title": "Energy Burst",
        "rules": "As an action, you can activate this fragment to release a burst of block energy in a 10-foot radius around you. All creatures within the area must succeed on a DC 14 Dexterity saving throw or be knocked prone. This effect has a recharge after a short rest."
      }
    ],
    "levelRequirementReason": "This fragment is too powerful for lower-level characters, requiring at least 9th level to handle its raw energy.",
    "vendorReason": "The block smiths of Connectopia are well-versed in the creation and repair of such relics, making them the ideal vendor for this fragment.",
    "shippingDetail": "Delivered via automated drones directly to your doorstep within a day.",
    "usage": {
      "activation": "As an action or reaction (to reinforce base) or as an action (for energy burst)",
      "duration": "Instantaneous for placement, 1 hour for structural reinforcement",
      "endsWhen": "After the duration ends or when destroyed",
      "charges": "Recharges after a short rest"
    },
    "priceReason": "The fragment’s rarity and powerful effects justify its price of 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:22:49.133225+00:00",
    "aiReviewedAt": "2026-07-25T00:22:49.133225+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_curiosity_echoing_shard": {
    "id": "connectopia_curiosity_echoing_shard",
    "name": "Echoing Shard of Resonance",
    "description": "The Echoing Shard of Resonance is a crystalline fragment, smooth as polished stone and laced with ancient whispers. Crafted from the remnants of lost settlements, it hums with the echoes of past adventurers. When held to your ear, you can discern fragmented conversations or warnings left by pioneers who walked these lands centuries ago. Occasionally, it emits an unsettling pulse that temporarily blindsfogs nearby foes' vision, disorienting them for a brief moment.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Whispered Conversations",
      "Disorienting Pulse"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "messenger_bird",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispered Conversations",
        "rules": "Upon activation as an action, the shard emits faint whispers that provide advantage on Perception checks related to hearing for 1 minute. The effect ends if you deactivate it or are incapacitated."
      },
      {
        "title": "Disorienting Pulse",
        "rules": "Activate this ability as a reaction when within 30 feet of an enemy. A hostile creature in line of sight must succeed on a DC 12 Wisdom saving throw or be blindedfogged for 1 round, during which it has disadvantage on attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "This shard is crafted from the remnants of lost settlements, making it accessible to adventurers at any level.",
    "vendorReason": "The Pioneer Post trades in relics and curiosities from various frontier towns, including this shard.",
    "shippingDetail": "Delivered swiftly by a messenger bird, the Echoing Shard arrives intact but requires careful handling to preserve its integrity.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "1 minute or until used",
      "endsWhen": "Deactivated, incapacitated, or upon use of the second effect",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's unique abilities and historical significance justify its price in this market.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:23:12.048697+00:00",
    "aiReviewedAt": "2026-07-25T00:23:12.048697+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_legendary_chronal_anchor": {
    "id": "connectopia_item_legendary_chronal_anchor",
    "name": "Chronal Anchor of the First Block",
    "description": "The Chronal Anchor of the First Block, forged from a fragment of time itself, hums with chaotic energy. Touching it can briefly rewind nearby events by a few seconds, creating a ripple in reality that might leave you trapped within a loop of building miniature block cities. Its ancient core glows with an eerie luminescence, and its shape is reminiscent of a heavy anchor designed to withstand the very fabric of time. Wario still thinks it’s fantastic!",
    "category": "equipment",
    "price": 66000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Rewind",
      "Minor Anomalies"
    ],
    "vendor": "craft_corner",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Rewind",
        "rules": "As an action, activate the Chronal Anchor to rewind nearby events by a few seconds. The effect has a range of 10 feet and lasts for 1 round (6 seconds). There is a chance that this use creates minor temporal anomalies, such as brief duplicates or echoes of the target. This effect can be used once per day."
      },
      {
        "title": "Minor Anomalies",
        "rules": "There's a 20% chance each time you activate the Chronal Anchor to create a minor temporal anomaly. These anomalies last for 1 round (6 seconds) and cause confusion among those within the effect range of 10 feet, requiring a DC 15 Wisdom saving throw or being incapacitated until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Requires at least 15th level to handle the chaotic energy and temporal distortions safely.",
    "vendorReason": "Craft Corner specializes in rare and ancient artifacts, including those with time-related properties.",
    "shippingDetail": "Ships via a dimensional portal for expedited delivery, but requires special handling to prevent accidental temporal interference.",
    "usage": {
      "activation": "Action",
      "duration": "1 round (6 seconds)",
      "endsWhen": "The effect ends when the duration expires or the user takes another action.",
      "charges": "Once per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and the risk involved in handling such a powerful artifact.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-25T00:23:16.118631+00:00",
    "aiReviewedAt": "2026-07-25T00:23:16.118631+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_chronometric_brace": {
    "id": "the_edge_item_chronometric_brace",
    "name": "Chronometric Brace of the Fractured Time",
    "description": "The Chronometric Brace of the Fractured Time is a metal bracer forged from ancient temporal anomalies. Its surface shimmers with fractured light, hinting at the chaotic manipulation it can unleash. This bracer subtly warps your perception of time, allowing you to take an additional action per turn but risking a temporal loop if used too often. Those who wear it must be cautious, for its unpredictable nature could lead to unintended consequences.",
    "category": "equipment",
    "price": 15000,
    "icon": "⏳",
    "stock": 23,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Additional Action",
      "Temporal Loop Risk"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "express_temporal",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Additional Action",
        "rules": "You can take an additional action each turn as long as you have not used this effect more than once per short or long rest. The use of the additional action is a bonus action."
      },
      {
        "title": "Temporal Loop Risk",
        "rules": "There's a 10% chance each time you use the additional action that a temporal loop occurs, causing you to repeat your last turn until you succeed on a DC 15 Wisdom saving throw. A successful save ends the effect."
      }
    ],
    "levelRequirementReason": "Requires level 11 due to its complex temporal manipulation capabilities and potential for dangerous side effects.",
    "vendorReason": "Edge Outpost specializes in exotic and experimental equipment, making this bracer a fitting addition to their inventory.",
    "shippingDetail": "Ships via express temporal courier, arriving the same day if within the same time period, otherwise delivered one temporal cycle later.",
    "usage": {
      "activation": "Bonus action to take an additional action per turn.",
      "duration": "Instantaneous effect each use.",
      "endsWhen": "The temporal loop ends on a successful Wisdom saving throw or after one failed save, whichever comes first. The bracer must be removed during the loop.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP as it offers significant but balanced temporal manipulation capabilities without being overpowered.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:23:23.853375+00:00",
    "aiReviewedAt": "2026-07-25T00:23:23.853375+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_void_lantern": {
    "id": "the_edge_item_void_lantern",
    "name": "Void Lantern of the Endless Descent",
    "description": "The Void Lantern of the Endless Descent is a lantern forged from shadow and void, its glass dark as night and etched with ancient runes that shimmer faintly under starlight. Its light absorbs ambient illumination, creating a zone of silence around the wielder, muffling sound within a 10-foot radius. Upon activation, it can briefly extinguish magical flames and even banish undead for a fleeting moment, leaving any who gaze into its depths questioning their reality.",
    "category": "premium",
    "price": 66000,
    "icon": "🔦",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "back_order",
    "effects": [
      "Zone of Silence",
      "Extinguish Magical Flames"
    ],
    "vendor": "final_shop",
    "shippedBy": "Black Horse Express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Zone of Silence",
        "rules": "Activates as an action within a 10-foot radius around the user. Creatures within this area have disadvantage on all Dexterity (Stealth) checks and Perception checks that rely on hearing. This effect lasts until the end of your next turn."
      },
      {
        "title": "Extinguish Magical Flames",
        "rules": "Can be activated as a bonus action to extinguish any magical fire within 30 feet, dealing 1d6 radiant damage to one creature or object in contact with the flames. The effect has no cooldown and can only be used once per short rest."
      }
    ],
    "levelRequirementReason": "Only those experienced enough to wield such a dangerous artifact are capable of using it without mishap.",
    "vendorReason": "Final Shop specializes in rare and powerful items, including relics that manipulate reality itself.",
    "shippingDetail": "Due to its volatile nature, the Void Lantern must be shipped via Black Horse Express with special handling.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous for Zone of Silence; one use per short rest for Extinguish Magical Flames",
      "endsWhen": "Effect ends at the start of your next turn after activation or when used to extinguish flames, respectively.",
      "charges": "Unlimited"
    },
    "priceReason": "The Void Lantern's rarity and unique properties justify its moderate price in experience points.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T00:23:29.513688+00:00",
    "aiReviewedAt": "2026-07-25T00:23:29.513688+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_shimmering_scale": {
    "id": "animatopia_shimmering_scale",
    "name": "Shimmering Scale of the Great Howler",
    "description": "The Shimmering Scale of the Great Howler is a translucent scale with an iridescent sheen that dances in the light. Shed by the legendary spirit, it crackles with raw primal energy. When consumed, it grants heightened senses, allowing you to detect nearby creatures and their intentions. The scale also enhances your physical presence, giving you a +2 bonus to Strength and Perception checks for an hour, perfect for intimidating foes or surprising allies.",
    "category": "consumables",
    "price": 4200,
    "icon": "✨",
    "stock": 78,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "enhanced_senses",
      "temporary_strength"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "swift_beaver",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Senses",
        "rules": "When consumed, the Shimmering Scale grants you advantage on Perception checks and passive Wisdom (Perception) checks for one hour. The effect ends when you finish a long rest."
      },
      {
        "title": "Temporary Strength",
        "rules": "You gain a +2 bonus to Strength checks and saving throws until the end of your next short or long rest. This effect does not stack with other sources of temporary Strength bonuses."
      }
    ],
    "levelRequirementReason": "This scale can be consumed by any character, providing an immediate boost without requiring a specific class or background.",
    "vendorReason": "The Tribal Trader has access to rare items from the spirit world, including this magical scale.",
    "shippingDetail": "Delivered by swift beaver couriers within a day of purchase.",
    "usage": {
      "activation": "Instantaneous consumption as an action.",
      "duration": "One hour from the moment it is consumed.",
      "endsWhen": "At the end of your next short or long rest.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "The scale's rarity and magical properties justify its price, offering significant temporary buffs within a reasonable cost.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:23:29.665826+00:00",
    "aiReviewedAt": "2026-07-25T00:23:29.665826+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_godly_heartstone": {
    "id": "animatopia_godly_heartstone",
    "name": "Heartstone of the Ancestral Pack",
    "description": "Forged in the heart of a long-dead bear king from Animatopia's primal spirit, this pulsating stone glows with an ancient energy. It grants immense power and wisdom to those who hold it, but beware—prolonged exposure can lead to an uncontrollable urge to roll around in leaves or hoard shiny rocks. The Heartstone of the Ancestral Pack is a relic from a time when bears ruled the forest, and its touch can still stir primal instincts within even the most civilized souls.",
    "category": "premium",
    "price": 1000000,
    "icon": "💎",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "grant_10_temporary_wisdom",
      "chance_to_cast_animal_charm"
    ],
    "vendor": "forest_market",
    "shippedBy": "winged_owl",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Grant Temporary Wisdom",
        "rules": "When activated as an action, the user gains +10 to Intelligence and Wisdom saving throws for 1 hour. This effect cannot be used more than once per long rest."
      },
      {
        "title": "Chance to Cast Animal Charm",
        "rules": "Once per short or long rest, the user can cast the Animal Charm spell (as per the spellcasting rules) with a +2 bonus to the spell save DC. This effect cannot be used more than once every 24 hours."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 10 due to its powerful abilities and potential for misuse.",
    "vendorReason": "The forest market deals in ancient relics and items from the primal world, making it the perfect vendor for this relic.",
    "shippingDetail": "Shipped by a trusted winged owl courier, ensuring safe delivery to its destination.",
    "usage": {
      "activation": "Activate as an action or use at will (caster level requirement applies).",
      "duration": "Until the end of your next turn when activated as an action; instantaneous when used at will.",
      "endsWhen": "The effect ends when you finish a short rest, unless expended by casting Animal Charm.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced price considering the item's powerful effects and rarity.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-25T00:23:47.851473+00:00",
    "aiReviewedAt": "2026-07-25T00:23:47.851473+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_bloodberry_potion": {
    "id": "animatopia_bloodberry_potion",
    "name": "Primal Surge Potion",
    "description": "Primal Surge Potion is a potent crimson elixir, crafted from the rare Bloodberries of the Howling Jungle. When consumed, it amplifies your beastly instincts, granting you incredible strength and a fearsome roar that can rattle even the strongest wills. This ancient potion's power comes with a price; while it enhances your combat prowess temporarily, it also leaves you more susceptible to wild impulses, making it easy to overindulge in violence or recklessness.",
    "category": "consumables",
    "price": 4200,
    "icon": "🩸",
    "stock": 78,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Beastly Strength",
      "Savage Roar"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "Giant Beetle Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Beastly Strength",
        "rules": "Consume the potion as an action. You gain a bonus to your Strength score equal to +6 for 5 rounds (30 seconds). On your next turn, you must make a Wisdom saving throw or lose one additional round of this effect due to overexertion."
      },
      {
        "title": "Savage Roar",
        "rules": "As a bonus action on your turn while under the effects of Primal Surge Potion, you can unleash a fearsome roar. This attack deals 1d8 piercing damage to all creatures within 30 feet and has a range of 60 feet. You can use this ability once per short rest."
      }
    ],
    "levelRequirementReason": "This potion is designed for seasoned adventurers who have the strength and discipline needed to handle its volatile effects without losing control.",
    "vendorReason": "The Tribal Trader specializes in exotic goods from the Howling Jungle, including rare ingredients like Bloodberries used in this potent potion.",
    "shippingDetail": "The Giant Beetle Courier delivers with unmatched speed and precision, ensuring that your Primal Surge Potion arrives fresh and potent.",
    "usage": {
      "activation": "Consume as an action or bonus action.",
      "duration": "5 rounds (30 seconds) + potential additional round from overexertion.",
      "endsWhen": "On a failed saving throw, you lose one additional round of the effect; otherwise, it ends when the duration expires.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The rarity and limited availability of Bloodberries combined with their potent effects justify the adjusted price in XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:23:56.356912+00:00",
    "aiReviewedAt": "2026-07-25T00:23:56.356912+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_echoing_shard": {
    "id": "animatopia_echoing_shard",
    "name": "The Silent Whisper",
    "description": "The Silent Whisper is a petrified shard, once part of a colossal beast's heart. Crafted from ancient stone imbued with the spirits of forgotten forests, it whispers cryptic messages that can only be understood by those attuned to nature’s call. It grants increased perception and allows for brief telepathic communication with animal spirits, though their responses are often vague and filled with complaints about lost berries and seasonal changes.",
    "category": "curiosities",
    "price": 160000,
    "icon": "🤫",
    "stock": 15,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Whispers of Nature",
      "Enhanced Perception"
    ],
    "vendor": "forest_market",
    "shippedBy": "Shadow Lynx Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispers of Nature",
        "rules": "You can attempt to receive cryptic messages from animal spirits. These messages, though often nonsensical, occasionally provide a random beneficial effect. This ability is usable once per short or long rest."
      },
      {
        "title": "Enhanced Perception",
        "rules": "Your perception improves by +3 while you have the Silent Whisper in your possession. This bonus persists as long as the item remains on you."
      }
    ],
    "levelRequirementReason": "Requires a basic level to understand and use its telepathic abilities.",
    "vendorReason": "The forest market deals in natural curiosities like this shard, which is believed to carry the spirits of ancient beasts.",
    "shippingDetail": "Ships via Shadow Lynx Express, known for its swift and reliable deliveries through treacherous terrains.",
    "usage": {
      "activation": "Passive benefit with activation by thought.",
      "duration": "Instantaneous effect; benefits persist until the next short or long rest.",
      "endsWhen": "Rests expunge the effects of the Silent Whisper.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at a lower mythic price to reflect its limited daily use and nature-themed benefits.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T00:24:31.917206+00:00",
    "aiReviewedAt": "2026-07-25T00:24:31.917206+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_sparkling_gem": {
    "id": "pokemon_item_sparkling_gem",
    "name": "Prismatic Pokémon Shard",
    "description": "The Prismatic Pokémon Shard gleams with a spectrum of colors, pulsing with raw energy from its origins in a defeated Paradox Pokémon's aura. When activated, it can either enhance your Pokémon’s speed by +5 for six turns or grant a bonus to critical hit chance by +2%. However, the unpredictable nature of this relic might also trigger an unintended evolution at level 10, leaving trainers on edge as they wield its power.",
    "category": "curiosities",
    "price": 4200,
    "icon": "✨",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhances Speed",
      "Boosts Critical Hit Chance"
    ],
    "vendor": "safari_shop",
    "shippedBy": "winged_pokéball",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Enhanced Speed",
        "rules": "When activated, this shard grants a +5 bonus to your Pokémon's speed stat for six turns. It can only be used once per long rest."
      },
      {
        "title": "Critical Hit Boost",
        "rules": "Activating the shard increases your Pokémon’s critical hit chance by 2%. This effect lasts until the end of the encounter or until you use another action to activate this item again, whichever comes first. You can only benefit from this effect once per short rest."
      }
    ],
    "levelRequirementReason": "Trainers must be at least level 6 to handle the relic's unpredictable nature effectively.",
    "vendorReason": "The Safari Shop specializes in rare and unusual Pokémon items, making it a logical place for such an artifact.",
    "shippingDetail": "Ships via winged pokéball, delivered directly to your front door.",
    "usage": {
      "activation": "Activates as a bonus action.",
      "duration": "Enhanced Speed lasts for six turns. Critical Hit Boost lasts until the end of the encounter or until another activation.",
      "endsWhen": "Exhausted at the end of an encounter or when reactivated.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure it remains a valuable but not game-breaking addition to any trainer's collection.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T00:24:02.104468+00:00",
    "aiReviewedAt": "2026-07-25T00:24:02.104468+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_ancient_scroll": {
    "id": "pokemon_item_ancient_scroll",
    "name": "Whispers of the First Pokémon",
    "description": "The Whispers of the First Pokémon is an ancient scroll bound in aged leather, its pages adorned with cryptic symbols and faded illustrations that hint at the very origins of Pokémon. Unfurling it grants a fleeting glimpse into the past, unlocking forgotten knowledge or perhaps just adding to your confusion. Wario's initial intent to use it for kindling suggests its power lies not in fire but in the mind.",
    "category": "curiosities",
    "price": 15000,
    "icon": "📜",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Unlock Forgotten Knowledge",
      "Enhanced Experience Gain"
    ],
    "vendor": "pokemart",
    "shippedBy": "delivery_truck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock Forgotten Knowledge",
        "rules": "Upon activation, you gain a +2 bonus to Intelligence checks and saving throws for 1 minute. This effect can be triggered once per long rest."
      },
      {
        "title": "Enhanced Experience Gain",
        "rules": "For the duration of one short rest or until you finish a long rest, your experience points gained from defeating monsters are increased by 20%. There is no limit to how many times this effect can be used in a single day."
      }
    ],
    "levelRequirementReason": "This item provides benefits useful for early-level characters but not overwhelming enough at higher levels.",
    "vendorReason": "Pokemart often stocks items that can be used by trainers of all levels, from beginners to those seeking unique curiosities.",
    "shippingDetail": "Standard delivery via a reliable truck service.",
    "usage": {
      "activation": "A bonus action is required to activate the scroll's effects.",
      "duration": "The duration of each effect varies as described above, and they can be triggered multiple times within these durations.",
      "endsWhen": "Each effect ends when its duration expires or you finish a long rest.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The item's effects are balanced to provide utility without overshadowing more powerful items, making it a fair price for early-level players.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-25T00:24:07.889342+00:00",
    "aiReviewedAt": "2026-07-25T00:24:07.889342+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_forbidden_frosting_of_doom": {
    "id": "leclaire_isle_item_forbidden_frosting_of_doom",
    "name": "Forbidden Frosting of Doom",
    "description": "The Forbidden Frosting of Doom, harvested from L'Eclaire Isle's most sinister ovens, is a shimmering black confection that, when consumed, sends a chill down your spine and clouds your mind with an irresistible urge to decorate everything in sight. Legend whispers that one lick can plunge you into temporary madness, prompting you to spread this frosting like a plague across any surface within reach. Use it at your own peril; the consequences may be far more profound than you imagine.",
    "category": "forbidden",
    "price": 4200,
    "icon": "😈",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "INDUCES MADNESS",
      "SPREADS DECORATION"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Induces Madness",
        "rules": "When consumed, the Forbidden Frosting of Doom causes temporary insanity. The target becomes confused for 5 rounds and suffers a -2 penalty to all Wisdom (Perception) checks and saving throws until the effect ends."
      },
      {
        "title": "Spreads Decoration",
        "rules": "The consumer is compelled to apply the frosting wherever they can reach within their movement speed. This lasts for as long as the madness persists, and any surface touched becomes decorated with a thin layer of black frosting. The decoration cannot be removed without magic."
      }
    ],
    "levelRequirementReason": "The risk of temporary insanity and uncontrollable behavior makes this item accessible to all adventurers.",
    "vendorReason": "Pastry Palace, known for its eccentric pastries, offers the Forbidden Frosting as a macabre treat for those daring enough to try it.",
    "shippingDetail": "Ships discreetly and arrives overnight via the Shadow Courier's secret routes.",
    "usage": {
      "activation": "Eaten as a snack or spread on an item within reach.",
      "duration": "5 rounds of temporary insanity.",
      "endsWhen": "The madness ends, either through natural recovery or with magical intervention.",
      "charges": "Unlimited; the frosting regenerates upon consumption."
    },
    "priceReason": "Balanced at 1000 XP due to its unique effects and potential for chaos in combat scenarios.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T00:24:57.178732+00:00",
    "aiReviewedAt": "2026-07-25T00:24:57.178732+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_chronos_crust": {
    "id": "leclaire_isle_item_chronos_crust",
    "name": "Chronos Crust",
    "description": "The Chronos Crust is a delicate, time-bending pastry made from the essence of a frozen moment captured in the heart of Le Cleraise Isle. Each bite allows you to briefly rewind your actions, undoing mistakes or exploiting enemy vulnerabilities – but be cautious, for overuse can unravel reality itself and trigger unpredictable temporal anomalies within the immediate area. This legendary treat is crafted by the master pastry chefs of Le Cleraise Isle, renowned for their ability to weave time into their creations.",
    "category": "equipment",
    "price": 67000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "rewind_last_action",
      "temporal_unreality"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Temporal Delivery Drone",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Rewind Last Action",
        "rules": "As a bonus action, you can rewind your last action. This effect lasts for 1 minute and can be used once per day. If used while in combat, any creatures within 5 feet of you must succeed on a DC 15 Wisdom saving throw or become disoriented until the start of their next turn."
      },
      {
        "title": "Temporal Unreality",
        "rules": "For the duration of this effect, there is a 5% chance each time you attack that an unpredictable temporal anomaly occurs. If successful, the target must succeed on a DC 16 Dexterity saving throw or be pushed back 10 feet and knocked prone."
      }
    ],
    "levelRequirementReason": "Requires at least 12th level to effectively control such powerful time-altering pastry.",
    "vendorReason": "Sweet Supplies is known for its exclusive deals with the master chefs of Le Cleraise Isle, ensuring only the finest and most potent culinary creations are available.",
    "shippingDetail": "The Chronos Crust must be delivered by a Temporal Delivery Drone to ensure it arrives fresh from the moment it was made.",
    "usage": {
      "activation": "Bonus action to rewind last action; reaction to trigger temporal unreality upon successful attack.",
      "duration": "Instantaneous effect with duration of 1 minute per use.",
      "endsWhen": "The duration ends when you finish a short or long rest, and the pastry is consumed. The temporal unreality effect ends immediately if you are incapacitated or die.",
      "charges": "One charge per day."
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare, legendary status and the time-altering abilities it grants.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-25T00:24:33.966914+00:00",
    "aiReviewedAt": "2026-07-25T00:24:33.966914+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_royal_coin_charm": {
    "id": "mushroom_kingdom_item_royal_coin_charm",
    "name": "Royal Coin Charm",
    "description": "The Royal Coin Charm is a small, intricately crafted charm made from solidified King Koopa's lost gold. Worn as an amulet, it brings good fortune to its wearer, increasing the chance of finding additional gold by 5% during exploration. However, attracting the King’s wrath can result in hostile Koopa Troopas appearing nearby, requiring a DC 14 Dexterity saving throw or be subjected to minor inconveniences for the day.",
    "category": "equipment",
    "price": 15000,
    "icon": "💰",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "+5% chance to find additional gold on loot drops",
      "risk of attracting hostile Koopa Troopas"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "turtle_delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Loot Bonus",
        "rules": "While wearing this charm, there is a +5% chance that any discovered treasure or defeated enemy yields an extra piece of gold. This effect does not stack with other find-trap or similar abilities."
      },
      {
        "title": "Koopa Troopas Attraction",
        "rules": "There is a 20% chance per day that wearing this charm will attract nearby Koopa Troopas, requiring the wearer to make a DC 14 Dexterity saving throw. On failure, the wearer must spend an hour dealing with minor inconveniences caused by the Koopa Troopas."
      }
    ],
    "levelRequirementReason": "The charm's effects are subtle but powerful, requiring a character of at least level 5 to wield it effectively.",
    "vendorReason": "As the shop is run by Koopas themselves, they sell items that have connections with their royal lineage and the lost treasures of King Koopa.",
    "shippingDetail": "Ships via turtle courier, a method known for its reliability but slightly slower than other delivery services.",
    "usage": {
      "activation": "Passive effect active while worn as an amulet.",
      "duration": "Instantaneous; ends when removed or destroyed.",
      "endsWhen": "Destroyed by removal or damage beyond repair.",
      "charges": "Unlimited, recharges upon removal."
    },
    "priceReason": "Balanced for its effects, requiring a considerable amount of XP but offering subtle yet useful benefits in exploration and daily life.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:24:22.639308+00:00",
    "aiReviewedAt": "2026-07-25T00:24:22.639308+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_godly_warp_stone": {
    "id": "mushroom_kingdom_item_godly_warp_stone",
    "name": "Godly Warp Stone",
    "description": "The Godly Warp Stone pulses with an ancient, otherworldly energy, a fragment of the Great Pipe itself. This relic allows you to instantly teleport to any location within the Mushroom Kingdom, but beware: the corridors are endless and unpredictable. Upon arrival, there's a chance for a minor boon—a surge of luck or recovery of hit points—but be mindful; each use requires 10 minutes of focused meditation to stabilize its power.",
    "category": "curiosities",
    "price": 1100000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Instant Teleport",
      "Random Boon on Arrival"
    ],
    "vendor": "wario_direct",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Teleport",
        "rules": "Activate as a bonus action. Instantly transports the user to any location within the Mushroom Kingdom. The effect ends if the user is teleported out of the realm or takes damage."
      },
      {
        "title": "Random Boon on Arrival",
        "rules": "Upon teleportation, there's a 25% chance that you gain +5 hit points or receive a minor luck boost (e.g., advantage on one saving throw). The effect ends if the user leaves the Mushroom Kingdom."
      }
    ],
    "levelRequirementReason": "Users must be proficient in meditation to stabilize the stone's power.",
    "vendorReason": "Wario, a master of shortcuts and teleportation magic, is the only one who can ensure safe and reliable usage of such a powerful artifact.",
    "shippingDetail": "Teleported directly to your location by Wario's personal dimensional portal. Delivery within moments.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Teleportation ends if the user is teleported out of the Mushroom Kingdom or takes damage",
      "charges": "Unlimited, but requires 10 minutes of meditation after each use"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its divine power and the risk involved in using such a powerful artifact.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-25T00:24:39.456715+00:00",
    "aiReviewedAt": "2026-07-25T00:24:39.456715+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_stinkbomb_of_discontent": {
    "id": "midlands_item_stinkbomb_of_discontent",
    "name": "The Emperor's Ire",
    "description": "The Emperor's Ire is a foul-smelling grenade crafted by Midlands citizens to vent their frustrations, but its creators underestimated the potency of their own invention. This potent device releases a noxious cloud that can demoralize even the most stoic warriors and disrupt the battlefield with its nauseating stench. When deployed, it not only fills the air with an unbearable odor, but also saps the morale of nearby enemies, making them more susceptible to fear and panic.",
    "category": "consumables",
    "price": 270,
    "icon": "💨",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "poisonous cloud",
      "morale drain"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "carriage",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poisonous Cloud",
        "rules": "When activated, The Emperor's Ire releases a noxious cloud within a 15-foot radius. All creatures in the area must succeed on a DC 14 Constitution saving throw or take 1d6 poison damage and become poisoned for 1 minute. They are also disoriented until the start of their next turn."
      },
      {
        "title": "Morale Drain",
        "rules": "For every creature that fails its save against the Poisonous Cloud, there is a 20% chance that they will be affected by a -2 morale penalty to all attack rolls and saving throws for the duration of the battle. This effect is cumulative."
      }
    ],
    "levelRequirementReason": "The item's potent effects require only basic dexterity, making it accessible to lower-level characters.",
    "vendorReason": "The Empire Exchange often stocks items that allow citizens to vent their frustrations creatively, including this memorable grenade.",
    "shippingDetail": "Delivered by a swift carriage, ensuring the item arrives in pristine condition and ready for use.",
    "usage": {
      "activation": "action",
      "duration": "instantaneous",
      "endsWhen": "The effect ends when all creatures affected are no longer within the area of the cloud or upon the end of the battle.",
      "charges": "1 charge, recharges after a short rest"
    },
    "priceReason": "Despite its common rarity, The Emperor's Ire offers significant battlefield disruption at a fair cost.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:25:04.668356+00:00",
    "aiReviewedAt": "2026-07-25T00:25:04.668356+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_vertical_repair": {
    "id": "grand_country_vertical_repair",
    "name": "Sheer Ascent Stabilizer Service",
    "description": "The Sheer Ascent Stabilizer Service from Vertical Vendor ensures your gear is as sturdy as you are. This meticulously crafted service strengthens your equipment against the harshness of vertical climbs, reinforcing every strap and seam with a durable, weathered metal that has seen countless ascents. After the repair, a calming conversation about proper anchor points leaves you feeling more secure than ever before, knowing that each piece is ready for the climb ahead.",
    "category": "services",
    "price": 1000,
    "icon": "🛠️",
    "stock": 21,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "repair_equipment_major",
      "stability_buff_3"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "magnetic_hook",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Repair Equipment (Major)",
        "rules": "As a bonus action, you can repair one piece of equipment that is broken or damaged to its maximum condition. This service also improves the durability of the repaired item by +2 AC for 1 hour."
      },
      {
        "title": "Stability Buff",
        "rules": "You gain a +3 bonus to saving throws against falling and being knocked prone, as well as a +2 bonus to Strength (Athletics) checks made while climbing. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "The service is designed for adventurers who are just starting their journey and need reliable gear right away.",
    "vendorReason": "Vertical Vendor specializes in equipment that can withstand the most extreme climbs, ensuring every adventurer is prepared before they ascend.",
    "shippingDetail": "Ships via magnetic hooks directly to your feet, ensuring secure delivery even when you're in motion.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour and until the end of your next long rest",
      "endsWhen": "The effects expire at the start of your next short or long rest.",
      "charges": "Unlimited, as each use is a bonus action"
    },
    "priceReason": "This service includes both major repair and an extended stability buff, making it a crucial investment for any adventurer.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T00:25:04.801631+00:00",
    "aiReviewedAt": "2026-07-25T00:25:04.801631+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_evolution_consultation": {
    "id": "pokemon_item_evolution_consultation",
    "name": "Evolutionary Insight Session – Professor Oak’s Style!",
    "description": "Seek the counsel of Pokémon lore at its heart in this Evolutionary Insight Session, conducted by a seasoned researcher steeped in Professor Oak’s wisdom. This rare consultation not only increases your Pokémon's happiness by 5 points but also grants it a chance to evolve on the next battle. Just remember, the session is as legendary and ancient as the professor himself, so tread lightly—lest you learn the hard way that not all evolutionary paths are meant for every Pokémon.",
    "category": "services",
    "price": 1000,
    "icon": "🧠",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance_to_evolve_pokemon_on_next_battle",
      "increase_happiness_by_5"
    ],
    "vendor": "league_store",
    "shippedBy": "delivery_express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Chance to Evolve on Next Battle",
        "rules": "The Pokémon gains a +2 bonus to its Evolution check. This effect lasts until the end of your next battle, at which point it has a 10% chance to evolve into its next form if applicable."
      },
      {
        "title": "Increase Happiness by 5 Points",
        "rules": "Your Pokémon's happiness is increased by 5 points immediately upon completing this session. This effect does not require any action and lasts until the Pokémon's happiness is reduced below this new value."
      }
    ],
    "levelRequirementReason": "This service requires a basic understanding of Pokémon training to ensure it aligns with your team’s strategy.",
    "vendorReason": "The league store only offers services that can benefit aspiring trainers at critical stages in their journey.",
    "shippingDetail": "Expressed courier service ensures the consultation arrives fresh and ready for immediate use upon arrival.",
    "usage": {
      "activation": "A standard action to initiate the session. The effects last until the end of your next battle or until the Pokémon's happiness is reduced below its new value, whichever comes first.",
      "duration": "Instantaneous activation with ongoing benefits",
      "endsWhen": "The end of the next battle or when the Pokémon's happiness falls below 50 points",
      "charges": "Unlimited uses"
    },
    "priceReason": "This service is priced to reflect its rare and valuable nature, offering significant strategic advantages in your Pokémon’s development.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T14:28:30.831852+00:00",
    "aiReviewedAt": "2026-07-25T14:28:30.831852+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_lucky_charm_pokeball": {
    "id": "pokemon_item_lucky_charm_pokeball",
    "name": "Lucky Charm Pokéball – Shiny Edition",
    "description": "The Lucky Charm Pokéball – Shiny Edition gleams with a soft, electric light, its surface etched with intricate patterns that seem to hum with unseen energy. This blessed Pokéball not only enhances your chances of capturing elusive Pokémon but also bestows upon you a touch of good fortune in your adventures. Caution: those who gaze too long may find themselves wishing for the wrong things. Perfect for trainers seeking a little extra luck, this is no ordinary way to catch them all!",
    "category": "curiosities",
    "price": 280,
    "icon": "🌟",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Capture",
      "Fortune's Favor"
    ],
    "vendor": "safari_shop",
    "shippedBy": "poke_parcel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Capture",
        "rules": "When you attempt to capture a Pokémon with this Pokéball, there’s a +10% chance of achieving a critical capture. This effect lasts until the end of your next turn."
      },
      {
        "title": "Fortune's Favor",
        "rules": "Once per long rest, you can use an action to invoke good fortune. For the duration of one combat encounter, any ally within 30 feet has advantage on saving throws and ability checks. This effect is exhausted after its duration ends."
      }
    ],
    "levelRequirementReason": "This Pokéball requires no level as it provides a general boon to fortune without being overly powerful for beginner trainers.",
    "vendorReason": "The Safari Shop specializes in items that can assist in capturing and training Pokémon, making this Pokéball an ideal addition to their offerings.",
    "shippingDetail": "Ships via Poke Parcel, delivered directly by a friendly Eevee with same-day delivery for in-stock items.",
    "usage": {
      "activation": "Action (for Enhanced Capture) or Action/Reaction (for Fortune's Favor)",
      "duration": "Until the end of your next turn (Enhanced Capture), and once per long rest (Fortune's Favor)",
      "endsWhen": "The effect ends when its duration expires, or if you use another Pokéball during the same encounter.",
      "charges": "Unlimited charges; the Pokéball can be used repeatedly until it captures a Pokémon."
    },
    "priceReason": "The balanced XP price reflects the item's unique combination of utility and rarity, offering trainers an excellent value for their investment.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:25:31.210509+00:00",
    "aiReviewedAt": "2026-07-25T00:25:31.210509+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_legendary_singularity_stone": {
    "id": "doughnut_hole_legendary_singularity_stone",
    "name": "The Heart of the Void",
    "description": "The Heart of the Void, a crystalline relic formed from the very center of The Doughnut Hole, exudes an eerie, void-like energy that warps space-time around it. Its touch can briefly alter gravity, pulling objects toward its core with devastating force. Legends warn of those who have been drawn too close, their fate lost within the miniature black holes it occasionally conjures. Handle this relic with extreme caution; a single use can tear apart reality itself.",
    "category": "premium",
    "price": 67000,
    "icon": "🌌",
    "stock": 2,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "gravity_warp",
      "miniature_black_hole"
    ],
    "vendor": "void_vendor",
    "shippedBy": "cosmic_sky_container",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Gravity Warp",
        "rules": "When activated, The Heart of the Void warps space-time within a 10-foot radius. This effect pulls all objects and creatures toward its center with an intensity that can lift or drop them up to 20 feet in one turn. Targets must succeed on a DC 18 Dexterity saving throw or be pulled into the void, taking 4d6 force damage. The effect lasts for 1 round."
      },
      {
        "title": "Miniature Black Hole",
        "rules": "Once per day, The Heart of the Void has a 20% chance to create a miniature black hole that consumes all objects and creatures within a 30-foot radius. Targets must succeed on a DC 18 Dexterity saving throw or be drawn into the singularity, taking 6d8 force damage and being restrained until freed by an effect such as a greater dispel magic."
      }
    ],
    "levelRequirementReason": "The Heart of the Void's raw power requires mastery over gravity and space-time manipulation.",
    "vendorReason": "Void Vendor, having access to exotic and dangerous items, regularly stocks this relic from The Doughnut Hole.",
    "shippingDetail": "Delivered via the Cosmic Sky Container, a vessel that ensures safe transport of volatile cosmic artifacts like The Heart of the Void.",
    "usage": {
      "activation": "Special (Requires Attunement)",
      "duration": "Instantaneous; see effect details for duration and range",
      "endsWhen": "The effect ends when used or interrupted by an opposing force, such as a dispel magic spell.",
      "charges": "Unlimited (Recharges after 24 hours)"
    },
    "priceReason": "The Heart of the Void's rarity and potential for catastrophic misuse justify its price in rare XP.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-25T00:25:41.382503+00:00",
    "aiReviewedAt": "2026-07-25T00:25:41.382503+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_stone_of_echoes": {
    "id": "grand_country_stone_of_echoes",
    "name": "Resonant Shale",
    "description": "The Resonant Shale, a peculiarly shaped stone that hums with ancient whispers when held near any surface, reveals brief echoes of forgotten times. These faint, distorted sounds can unlock hidden secrets within walls or distract foes for mere seconds, making it invaluable for explorers and treasure hunters alike. Crafted from the heart of long-forgotten earth by a reclusive artisan known only as Echo, this stone is both a tool and a relic.",
    "category": "curiosities",
    "price": 4200,
    "icon": "🗣️",
    "stock": 45,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Echoes of the Past",
      "Distraction"
    ],
    "vendor": "layer_market",
    "shippedBy": "Courier Falcon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes of the Past",
        "rules": "When you hold Resonant Shale near any wall or surface, there is a 50% chance that it reveals hidden clues and secrets. This effect lasts for 1 round."
      },
      {
        "title": "Distraction",
        "rules": "Activating the stone emits a distracting sound effect, causing each creature within 10 feet to make a Wisdom saving throw (DC 12) or become distracted for 1 minute. The distraction ends if the creature takes any action."
      }
    ],
    "levelRequirementReason": "The Resonant Shale is accessible to all adventurers, as its simple activation makes it a useful tool for beginners and seasoned explorers alike.",
    "vendorReason": "Layer Market prides itself on offering unique curiosities that can assist in various adventuring endeavors, making the Resonant Shale an ideal addition to their inventory.",
    "shippingDetail": "Ships via Courier Falcon within 3 days of purchase. A delivery confirmation is provided with each order.",
    "usage": {
      "activation": "A bonus action",
      "duration": "Instantaneous (Echoes), 1 minute (Distraction)",
      "endsWhen": "The distraction ends if the creature takes any action, or when Resonant Shale runs out of charges.",
      "charges": "Unlimited"
    },
    "priceReason": "The Resonant Shale is priced at 1000 XP for its unique combination of revealing hidden secrets and creating a useful distraction, making it an excellent value for any adventurer.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T15:12:21.821404+00:00",
    "aiReviewedAt": "2026-07-25T15:12:21.821404+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_order_of_the_shepherd": {
    "id": "grand_country_order_of_the_shepherd",
    "name": "Fragment of the Shepherd's Vigil",
    "description": "A Fragment of the Shepherd's Vigil is a small, intricately carved piece of obsidian, depicting a watchful shepherd gazing out over craggy peaks. Crafted in the sacred forges of the Mountain Clan, this relic bears the weight of countless generations' prayers and protection. When you hold it high upon reaching high ground, you feel the ancient spirits watching over you, bolstering your resilience against the elements and granting a fleeting shield against fall damage.",
    "category": "equipment",
    "price": 15000,
    "icon": "🐑",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "High Ground Vigilance",
      "Resilient Fall Shield"
    ],
    "vendor": "side_seller",
    "shippedBy": "Winged Messenger",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "High Ground Vigilance",
        "rules": "When you reach high ground, roll a d20. On an even result, gain temporary hit points equal to your level + your Constitution modifier (minimum of 1). This effect can occur once per short or long rest."
      },
      {
        "title": "Resilient Fall Shield",
        "rules": "While holding the Fragment high, you have resistance to fall damage. Additionally, if you would take fall damage while holding it, reduce that damage by an amount equal to your Constitution modifier (minimum of 1). This effect persists until you stop holding the fragment."
      }
    ],
    "levelRequirementReason": "To wield this relic effectively, one must be sufficiently experienced and attuned to the Mountain Clan's traditions.",
    "vendorReason": "Side sellers often carry unique relics from various clans, including this sacred fragment of the Shepherds' vigilance.",
    "shippingDetail": "Delivered swiftly by trusted Winged Messengers, ensuring the relic arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect when reaching high ground; activation on use for fall damage reduction.",
      "duration": "Until you no longer hold it high or until a short or long rest is completed.",
      "endsWhen": "You stop holding the fragment while at high ground, or after one use per day.",
      "charges": "Unlimited uses, but only once per short/long rest."
    },
    "priceReason": "The relic's rarity and spiritual significance ensure it remains a valuable, albeit not overpowered, addition to any adventurer’s gear.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:26:00.671673+00:00",
    "aiReviewedAt": "2026-07-25T00:26:00.671673+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_center_echo": {
    "id": "doughnut_hole_center_echo",
    "name": "Echo of the Center",
    "description": "The Echo of the Center is a small, pulsating orb that hums with a faint resonance. When touched, it grants brief glimpses into possible futures—most often involving delectable pastries and existential dread. The visions are cryptic, leaving you pondering the fate of your next doughnut while your sanity subtly wanes. Do not stare too long; legend has it that those who gaze upon its light for too long may find themselves inexorably drawn into the void.",
    "category": "curiosities",
    "price": 4200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Grants a cryptic prophecy",
      "Reduces sanity by 2 points"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Prophecy",
        "rules": "When activated, this item grants a random prophecy related to pastries or existential themes. The effect is instantaneous and provides advantage on Insight checks for the next hour."
      },
      {
        "title": "Sanity Reduction",
        "rules": "Touching the Echo of the Center reduces your Wisdom (Insight) save DC by 2 until you rest. This effect lasts for a day."
      }
    ],
    "levelRequirementReason": "The Echo of the Center requires no specific level, as its effects are subtle but intriguing.",
    "vendorReason": "Center Seller is renowned for their eclectic collection of curiosities and magical trinkets that pique the curiosity of all who visit.",
    "shippingDetail": "The Echo of the Center arrives with a time-stamped delivery, ensuring it has not been tampered with by the fluxes of time.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Resting or after one day if used daily",
      "charges": "Unlimited"
    },
    "priceReason": "The Echo of the Center is priced at 1000 XP, reflecting its rare and intriguing nature.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:26:53.310777+00:00",
    "aiReviewedAt": "2026-07-25T00:26:53.310777+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_shadows_whisper": {
    "id": "midlands_item_shadows_whisper",
    "name": "Shadows' Whisper Amulet",
    "description": "The Shadows' Whisper Amulet is a dark obsidian pendant that hums with an unsettling energy. Crafted from solidified shadows harvested during a particularly harrowing night, it whispers secrets in dim light and darkness. Wearers gain advantage on Stealth checks, blending into the shadows undetected. If a weaker enemy comes too close, they may be struck by a fleeting terror, forcing them to make a Wisdom saving throw or become Frightened for 1 minute.",
    "category": "equipment",
    "price": 15000,
    "icon": "🌑",
    "stock": 12,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Advantage on Stealth in dim light/darkness",
      "Frighten nearby enemies"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "express_delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Advantage on Stealth in Dim Light/Darkness",
        "rules": "The wearer gains advantage on all Stealth checks when within dim light or darkness. This effect is passive and does not require an action."
      },
      {
        "title": "Frighten Nearby Enemies",
        "rules": "When a weaker enemy comes into contact with the amulet's wearer, they must make a Wisdom saving throw (DC 14). On failure, they become Frightened for up to 1 minute. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The amulet requires significant magical energy that only those of a certain level can harness.",
    "vendorReason": "Fractured Forge specializes in crafting items that enhance stealth and shadow magic, making this amulet an excellent addition to their inventory.",
    "shippingDetail": "Expressed with haste, the amulet arrives swiftly to eager adventurers.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Instantaneous, lasts until interrupted or ends when removed",
      "endsWhen": "The wearer is no longer in dim light/darkness, or when it's removed",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Crafted from rare shadow materials and requiring significant magical energy to bind the whispering essence.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T00:26:08.311680+00:00",
    "aiReviewedAt": "2026-07-25T00:26:08.311680+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_voidstone_shards": {
    "id": "the_edge_voidstone_shards",
    "name": "Voidstone Shard Fragments",
    "description": "The jagged Voidstone Shard Fragments pulse with an eerie, otherworldly glow that seems to shift between dimensions. When combined, they channel a dark power capable of revealing glimpses into alternate realities or causing disorienting headaches. These shards are the spoils of battles fought in the Abyss, and their origins are shrouded in mystery. Wario would indeed pay a small fortune for them, not just for exploding dice, but to harness their chaotic energies.",
    "category": "curiosities",
    "price": 4200,
    "icon": "✨",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Absorbs damage",
      "Increases critical hit chance"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Damage Absorption",
        "rules": "When you take damage, the shards absorb 10% of it. This effect has a cooldown of one minute."
      },
      {
        "title": "Critical Hit Boost",
        "rules": "You gain a +2 bonus to your attack rolls and have a 5% chance to score a critical hit on a natural 19 or 20, but this effect can only activate once every short rest."
      }
    ],
    "levelRequirementReason": "The shards' chaotic nature demands a certain level of mental fortitude and combat experience.",
    "vendorReason": "The abyss trader has exclusive access to these rare relics from the depths of the Abyss.",
    "shippingDetail": "Ships through a rift that can delay delivery by up to one week due to unpredictable travel times between dimensions.",
    "usage": {
      "activation": "Instantaneous when combined and worn together as an item.",
      "duration": "Until the next long rest or until destroyed in battle.",
      "endsWhen": "If you remove them, they deactivate immediately. They are destroyed if exposed to light equal to or greater than sunlight for more than 5 minutes.",
      "charges": "Unlimited"
    },
    "priceReason": "The shards' rarity and the risk involved in obtaining them justify this balanced price.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-25T00:26:32.389459+00:00",
    "aiReviewedAt": "2026-07-25T00:26:32.389459+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_singularity_orb": {
    "id": "doughnut_hole_singularity_orb",
    "name": "Echoes of the Center",
    "description": "The Echoes of the Center is a shimmering, pulsating orb that hums with an eerie, resonant energy. When held close to the ear, it emits faint whispers from the void's center, possibly containing ancient secrets or just a cacophony of static. Its surface seems woven from shadow and light, shifting colors like a mirage. This relic attracts negative energies from nearby planes, making it both a treasure and a potential source of dread.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "void resonance",
      "negative energy attraction"
    ],
    "vendor": "center_seller",
    "shippedBy": "temporal_package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Void Resonance",
        "rules": "When activated as an action, the Echoes of the Center emits a pulse that lasts for up to one minute. Any creature within 10 feet must succeed on a DC 15 Wisdom saving throw or be incapacitated until the end of their next turn due to the overwhelming void resonance."
      },
      {
        "title": "Negative Energy Attraction",
        "rules": "The orb attracts negative energy from nearby planes, creating a 30-foot radius area centered on the wielder. Any creature entering this area must make a DC 14 Constitution saving throw or take 5 (1d10) necrotic damage and be charmed by the relic for 1 hour."
      }
    ],
    "levelRequirementReason": "The Echoes of the Center is accessible to lower-level characters as it provides a unique experience without overwhelming them.",
    "vendorReason": "Center Seller specializes in relics and curiosities from other dimensions, making this orb an expected addition to their inventory.",
    "shippingDetail": "The Echoes of the Center is shipped via Temporal Package, ensuring it arrives at its destination with minimal delay.",
    "usage": {
      "activation": "Activate as a bonus action.",
      "duration": "Up to one minute per day.",
      "endsWhen": "The effect ends when the duration expires or the wielder drops the orb.",
      "charges": "Unlimited, but only usable once per short rest."
    },
    "priceReason": "The Echoes of the Center is priced at 1000 XP due to its unique and potentially dangerous effects, as well as the limited nature of the vendor's stock.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T00:27:16.219756+00:00",
    "aiReviewedAt": "2026-07-25T00:27:16.219756+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_shire_loyalty_ring": {
    "id": "middle_earth_shire_loyalty_ring",
    "name": "The Humble Ring of Gratitude",
    "description": "The Humble Ring of Gratitude is a simple silver ring, unadorned and worn by many in the Shire. Forged in the heart of Hobbiton, it whispers tales of gratitude and hospitality. This subtle charm subtly enhances your social interactions, making you more persuasive when seeking sustenance or favors from local merchants. It grants a +1 bonus to Charisma checks related to persuasion and food, ensuring that every request for extra sausages is met with a generous smile.",
    "category": "equipment",
    "price": 4200,
    "icon": "💍",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+1 Charisma",
      "Advantage on Charisma (Persuasion) checks when asking for extra food"
    ],
    "vendor": "shire_shop",
    "shippedBy": "Rolling Delivery Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Persuasiveness",
        "rules": "When you make a Charisma (Persuasion) check related to obtaining food or drink, you have advantage. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Charisma Boost",
        "rules": "You gain +1 to all Charisma checks for 8 hours after wearing this ring. You can benefit from this effect only once per day."
      }
    ],
    "levelRequirementReason": "The Humble Ring of Gratitude's charm and simplicity make it accessible to even the most humble Hobbit.",
    "vendorReason": "As a local favorite, Shire Shop stocks this ring for its customers' convenience.",
    "shippingDetail": "Delivered promptly by the trusted Rolling Delivery Cart.",
    "usage": {
      "activation": "Passive effect; activated upon donning the ring.",
      "duration": "Lasts until the end of your next long rest or when you remove the ring.",
      "endsWhen": "Ends at the start of each short rest, removed from your hand, or when you take other action that requires concentration.",
      "charges": "Unlimited"
    },
    "priceReason": "The Humble Ring of Gratitude is priced moderately to reflect its utility and the craftsmanship required for Shire standards.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:26:38.724540+00:00",
    "aiReviewedAt": "2026-07-25T00:26:38.724540+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_mithril_shard_of_echoes": {
    "id": "middle_earth_mithril_shard_of_echoes",
    "name": "Whispers of Khazad-dûm",
    "description": "The Whispers of Khazad-dûm is a shimmering shard of Mithril, etched with runes from an ancient kingdom. When held, it hums with residual magic, allowing you to hear echoes of conversations and events that transpired within Moria's depths. This power can be both enlightening and disquieting; some whispers are unsettlingly clear. The shard is said to attract spectral entities, but those who have used it claim it aids in uncovering lost treasures.",
    "category": "curiosities",
    "price": 160000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Echoes of the Past",
      "Spectral Attraction"
    ],
    "vendor": "elven_market",
    "shippedBy": "Winged Courier of the Feywild",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes of the Past",
        "rules": "Activates as a bonus action, allowing you to hear whispers from within a 30-foot radius for 1 minute. This effect can be used once per day. On a failed Wisdom saving throw (DC 14), you are shaken until the start of your next turn."
      },
      {
        "title": "Spectral Attraction",
        "rules": "Once per short or long rest, this item attracts spectral entities within 30 feet for 1 minute. Any creature that ends its movement there must succeed on a DC 15 Wisdom saving throw or be frightened until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The shard's residual magic is potent, but not overwhelming; even novice adventurers can harness it.",
    "vendorReason": "Elves have long maintained a connection to ancient relics and lore from Khazad-dûm.",
    "shippingDetail": "Ships via a courier capable of navigating through ethereal planes, ensuring swift delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute",
      "endsWhen": "The effect ends when you use an action to dismiss it or until the duration expires.",
      "charges": "Once per day"
    },
    "priceReason": "Balanced at a price that reflects the shard's rarity and its limited daily usage.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-25T00:26:48.557061+00:00",
    "aiReviewedAt": "2026-07-25T00:26:48.557061+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_gourmet_potion": {
    "id": "earth_land_gourmet_potion",
    "name": "Wario's Delightful Digestive Brew",
    "description": "Wario's Delightful Digestive Brew is a murky, earthy concoction that smells of Wario’s rejected snacks and tastes like it should be illegal. This premium potion instantly restores 50 hit points to one creature and cures minor ailments, leaving the imbiber with a lingering craving for more exotic flavors. The brew is said to have been crafted from rare earth herbs harvested by the elusive Herbivore Guild, whose methods are as mysterious as their location.",
    "category": "consumables",
    "price": 1000,
    "icon": "😋",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Restores Hit Points",
      "Cures Minor Ailments"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "cart_on_wheels",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Hit Points",
        "rules": "When consumed, this potion restores 50 hit points to the drinker. The effect is instantaneous and does not require an action."
      },
      {
        "title": "Cure Minor Ailments",
        "rules": "The potion cures minor ailments such as poison or disease affecting the drinker. This effect has no save DC, but it can only be used once per day."
      }
    ],
    "levelRequirementReason": "This potion is potent enough to restore significant hit points and treat minor ailments, making it accessible for lower-level characters.",
    "vendorReason": "The Guild Quartermaster deals in rare and exotic items, including this unique elixir.",
    "shippingDetail": "Shipped via the reliable Cart on Wheels, known for delivering even the most peculiar goods safely to their destination.",
    "usage": {
      "activation": "Instantaneous consumption",
      "duration": "Single-use; effects are immediate and last until the potion is consumed",
      "endsWhen": "The effect ends when the drinker consumes the potion",
      "charges": "Unlimited, but can only be used once per day"
    },
    "priceReason": "The rarity of earth herbs and the secret recipe contribute to its high price, making it an uncommon but accessible potion for adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:27:09.475628+00:00",
    "aiReviewedAt": "2026-07-25T00:27:09.475628+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_dragonscale_scroll": {
    "id": "earth_land_dragonscale_scroll",
    "name": "The Whispers of Ignis",
    "description": "The Whispers of Ignis is an ancient scroll adorned with scales from a dormant fire dragon. Its cryptic runes shimmer with residual heat, hinting at forgotten magics. This fragment grants the user the power to summon a minor fire elemental, capable of wreaking havoc in combat but requiring careful handling. The dragon's scales imbue it with resilience, granting temporary resistance against lightning damage and increasing fire-based attacks by 5%. Use this scroll wisely; its rage can be both a boon and a bane.",
    "category": "curiosities",
    "price": 15000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "summon minor fire elemental",
      "resistance to lightning"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_worm",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Summon Minor Fire Elemental",
        "rules": "As an action, you may summon a minor fire elemental with a level 4 CR. This creature lasts for 1 hour or until it drops to 0 hit points. It has immunity to poison and poison damage but is vulnerable to water-based attacks."
      },
      {
        "title": "Resistance to Lightning",
        "rules": "You gain temporary resistance to lightning damage equal to your level +4. This effect lasts for 1 hour or until you take a long rest."
      }
    ],
    "levelRequirementReason": "This scroll requires a level 8 character due to its potent summoning and elemental manipulation.",
    "vendorReason": "The earth emporium specializes in ancient artifacts that can harness the raw power of nature, including fire dragon fragments like this scroll.",
    "shippingDetail": "Shipped by a giant worm courier known for its speed and reliability, ensuring swift delivery to your door.",
    "usage": {
      "activation": "action",
      "duration": "1 hour or until dismissed",
      "endsWhen": "the elemental drops to 0 hit points or is dismissed",
      "charges": "unlimited"
    },
    "priceReason": "The scroll's rarity and the potent effects it provides justify its price, offering both a unique summoning ability and resistance to lightning damage.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T00:27:05.608774+00:00",
    "aiReviewedAt": "2026-07-25T00:27:05.608774+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_howler_bone": {
    "id": "animatopia_howler_bone",
    "name": "Echoing Howler Bone",
    "description": "The Echoing Howler Bone is a meticulously carved relic from the fearsome Howler Beast, its surface etched with ancient runes that shimmer faintly in the light. Held to your ear, it releases a primal roar capable of stunning foes within reach or sending smaller creatures fleeing in terror. The bone's power comes directly from the beast’s essence, making it a dangerous yet invaluable tool for those who dare to wield it.",
    "category": "equipment",
    "price": 4200,
    "icon": "🐺",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "stun_on_roar",
      "fear_small_creatures"
    ],
    "vendor": "forest_market",
    "shippedBy": "winged_squirrel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stunning Roar",
        "rules": "When you use the Echoing Howler Bone, you can make a roar that stuns all creatures within 10 feet for 1 round. Creatures must succeed on a DC 13 Constitution saving throw or be stunned until the start of your next turn."
      },
      {
        "title": "Fear Aura",
        "rules": "The bone releases an aura that causes small creatures (CR 4 or lower) within 30 feet to become frightened. The effect lasts for 1 minute, and a creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "levelRequirementReason": "This relic is powerful enough that even low-level adventurers can use it effectively in combat.",
    "vendorReason": "The forest market stocks rare and unique items, often found only deep within the wilds where creatures like the Howler Beast reside.",
    "shippingDetail": "Delivered swiftly by a fleet of winged squirrels, ensuring the bone arrives in perfect condition.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (Stun effect), 1 minute (Fear Aura)",
      "endsWhen": "The effect ends when you use your action on another creature or when a creature saves successfully against it.",
      "charges": "Unlimited, but only one use of the Stun effect per short rest."
    },
    "priceReason": "This item is priced at 1000 XP as its powerful effects and rarity justify this cost in a balanced campaign.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:27:25.022424+00:00",
    "aiReviewedAt": "2026-07-25T00:27:25.022424+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_beast_bazaar_voucher": {
    "id": "animatopia_beast_bazaar_voucher",
    "name": "Beast Bazaar Trade Voucher",
    "description": "The Beast Bazaar Trade Voucher is a sleek, metallic token engraved with intricate patterns of bestial motifs. It grants access to the secretive Beast Bazaar, where merchants peddle rare and exotic goods. With this voucher, you can haggle for potent potions, magical trinkets, or even unusual creatures that could prove invaluable in your adventures. Wario himself would covet such a voucher, as it opens doors to unparalleled treasures within the bazaar's walls.",
    "category": "faction",
    "price": 1000,
    "icon": "🐾",
    "stock": 98,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "access_beast_bazaar",
      "faction_reputation_bonus"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "delivery_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Access to Beast Bazaar",
        "rules": "This voucher grants one-time access to the exclusive Beast Bazaar, allowing you to trade for rare items and creatures. You can use it once per month."
      },
      {
        "title": "Faction Reputation Bonus",
        "rules": "Upon presenting this voucher at the bazaar, your faction's reputation improves by 1 point with the Beastkeepers, which grants a +1 bonus on all Charisma (Persuasion) checks made to influence them. This benefit lasts for one month."
      }
    ],
    "levelRequirementReason": "This voucher is suitable for adventurers of all levels who wish to explore the bazaar's mysteries.",
    "vendorReason": "The Beastkeepers, guardians of the bazaar, issue this voucher as a token of their trust and to ensure only reputable adventurers gain access.",
    "shippingDetail": "Shipped via swift delivery hawk, ensuring safe arrival within three days.",
    "usage": {
      "activation": "Activates when presented at the Beast Bazaar.",
      "duration": "One-time use per month.",
      "endsWhen": "Used or expires one month after issuance.",
      "charges": "Unlimited, but only usable once a month."
    },
    "priceReason": "The voucher's rarity and the unique access it provides to the bazaar justify its value at 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-25T00:27:21.922452+00:00",
    "aiReviewedAt": "2026-07-25T00:27:21.922452+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_gravitic_donut": {
    "id": "doughnut_hole_gravitic_donut",
    "name": "Gravitic Donut",
    "description": "The Gravitic Donut is a doughnut of bewildering design, crafted from an unknown blend of dark and light flour. Its surface crackles with an otherworldly energy, and it whispers tales of forgotten realms where such delicacies rule the skies. This treat can pull objects towards its center, creating a localized gravitational field that bends reality itself for brief moments. Use it to trap foes within your culinary spell or to retrieve lost items from unreachable heights at the cost of your own stability—imbibe with caution lest you become its victim.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍩",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Minor Gravitational Pull",
      "Temporary Dexterity Boost"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Gravitational Pull",
        "rules": "When consumed, the Gravitic Donut creates a localized gravitational field with a radius of 3 meters around its center. Within this area, objects and creatures weighing less than 50 pounds are pulled towards the donut at the rate of 1 foot per round. This effect lasts for 1 minute or until the donut is consumed by another creature."
      },
      {
        "title": "Temporary Dexterity Boost",
        "rules": "For the next two rounds, the consumer gains a +2 bonus to Dexterity checks and saving throws. This boost can be used once per short rest and does not stack with other similar effects."
      }
    ],
    "levelRequirementReason": "The Gravitic Donut's whimsical but potent effect requires no minimum level, as it is a delightful yet unpredictable treat.",
    "vendorReason": "As a quirky and eclectic vendor known for its eccentric wares, Center Seller is the perfect place to find such an outlandish pastry.",
    "shippingDetail": "The donut is delivered by a fleet of drones capable of traversing dimensions, ensuring swift arrival at your doorstep.",
    "usage": {
      "activation": "Eaten as a snack.",
      "duration": "1 minute or until consumed by another creature.",
      "endsWhen": "Consumed or the duration ends naturally.",
      "charges": "Unlimited; can be eaten repeatedly."
    },
    "priceReason": "The Gravitic Donut's unique properties and limited availability justify its higher price in the market.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T00:27:43.987210+00:00",
    "aiReviewedAt": "2026-07-25T00:27:43.987210+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_void_fragment_artifact": {
    "id": "doughnut_hole_void_fragment_artifact",
    "name": "Void Fragment Artifact",
    "description": "The Void Fragment Artifact is a cold, pulsating shard of solidified void energy that hums with forgotten knowledge. Its surface glows faintly with an eerie blue light, whispering fragments of impossible geometries and unsettling truths to those who hold it. The fragment's touch can induce existential dread in the unwary or evoke an irresistible craving for jelly donuts, a strange quirk that has puzzled even the most seasoned scholars.",
    "category": "curiosities",
    "price": 4200,
    "icon": "🌌",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Grants +3 Intelligence",
      "Chance to Inflict ‘Terror’"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Phantom Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Intellect",
        "rules": "When this artifact is held, the wielder gains a +3 bonus to Intelligence checks and saving throws. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Terror Infliction",
        "rules": "Once per short or long rest, the wielder can use an action to attempt to terrify a creature within 10 feet. The target must succeed on a DC 15 Wisdom saving throw or become frightened for up to one minute. The effect ends early if the target takes any damage."
      }
    ],
    "levelRequirementReason": "This artifact is designed to be accessible, even to the smallest adventurers who have shown promise.",
    "vendorReason": "The Void Vendor specializes in rare and otherworldly artifacts, making it a natural fit for this fragment of void energy.",
    "shippingDetail": "Carefully packed with arcane wards to preserve its integrity during transit, delivery is swift but requires a special courier.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends if the target takes any damage or at the end of your next long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The Void Fragment Artifact is priced moderately to reflect its rare and powerful nature, accessible to adventurers who are not yet of high level.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-25T14:28:57.586775+00:00",
    "aiReviewedAt": "2026-07-25T14:28:57.586775+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_whispering_stone": {
    "id": "middle_earth_item_whispering_stone",
    "name": "Whispering Stone of Rivendell",
    "description": "The Whispering Stone of Rivendell is a smooth, grey stone that seems to hum with ancient Elven melodies. Crafted in the shadowed halls of Rivendell by Celebrimbor's hand, it whispers cryptic warnings about impending dangers—often goblin raids and lost gear. Its surface glows faintly under moonlight, hinting at its eldritch origins. It's surprisingly adept for bartering, offering a brief window into the language of birds, allowing you to understand their urgent calls and messages.",
    "category": "curiosities",
    "price": 4200,
    "icon": "🦉",
    "stock": 35,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "grant_minor_insight",
      "understand_birds"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_messenger",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Minor Insight",
        "rules": "As a bonus action, you can gain insight on one ability check. This effect lasts until the end of your next turn."
      },
      {
        "title": "Understand Birds",
        "rules": "For 1 minute after touching the stone, you understand and can speak the language of birds within 30 feet. This effect ends early if you lose concentration (as if concentrating on a spell)."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of elven lore to grasp its whispering power.",
    "vendorReason": "Elven traders at the market are accustomed to selling items with ancient ties and unique abilities.",
    "shippingDetail": "Ships via a swift elven messenger, ensuring quick delivery within a week of purchase.",
    "usage": {
      "activation": "Bonus action or reaction (to gain insight) or touch (to understand birds)",
      "duration": "Instantaneous (insight), 1 minute (understand birds)",
      "endsWhen": "Ends when the effect's duration expires or concentration is lost",
      "charges": "Unlimited, as long as you have the stone in your possession"
    },
    "priceReason": "Balanced against other rare curiosities that offer similar insights and utility.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:27:37.243702+00:00",
    "aiReviewedAt": "2026-07-25T00:27:37.243702+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_dwarven_battleaxe": {
    "id": "middle_earth_item_dwarven_battleaxe",
    "name": "Stonebreaker's Fury",
    "description": "Hewn from the very heart of Khazad-dûm's obsidian mines, Stonebreaker's Fury is a dwarven battleaxe forged with unyielding grit and resilience. Its obsidian head is reinforced with dwarven steel, capable of cleaving through even the toughest orcish armor when wielded by a strong hand. This axe isn't just for show; it whispers tales of battles fought deep underground, where only the most hardened warriors dare to face their foes.",
    "category": "equipment",
    "price": 15000,
    "icon": "⚔️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "stagger_on_critical",
      "bonus_damage_ore"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "earthquake_cart",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Stagger on Critical",
        "rules": "When you score a critical hit with this weapon against an enemy wearing orcish armor, that enemy must succeed on a DC 15 Strength saving throw or be knocked prone. This effect can only occur once per short rest."
      },
      {
        "title": "Bonus Damage vs. Orcish Armor",
        "rules": "When you attack an enemy wearing orcish armor with this weapon, you deal an additional 2d6 damage to the target. This bonus is cumulative but does not stack with other bonuses from similar effects."
      }
    ],
    "levelRequirementReason": "Wielding such a powerful axe requires both strength and experience; only those of proven valor should attempt to use it.",
    "vendorReason": "Only the finest forges in Khazad-dûm can craft an axe that matches Stonebreaker's Fury’s legendary reputation.",
    "shippingDetail": "The quake cart delivers your purchase with a thunderous rumble, ensuring it arrives in one piece despite the bumpy journey through Middle-earth.",
    "usage": {
      "activation": "Melee weapon attack",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted when you run out of ammunition or use all charges; recharges after a long rest.",
      "charges": "2"
    },
    "priceReason": "The price reflects the rare materials and master craftsmanship required to forge such an axe.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T00:27:40.266958+00:00",
    "aiReviewedAt": "2026-07-25T00:27:40.266958+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_shire_sweetroll_of_power": {
    "id": "middle_earth_item_shire_sweetroll_of_power",
    "name": "The Everlasting Sweetroll",
    "description": "The Everlasting Sweetroll is a golden-brown confection baked daily by Mrs. Miggins in the Shire’s cozy bakery. Its flaky crust and sweet filling are an amalgamation of ancient elven recipes and hobbit culinary artistry, making it not just delicious but imbued with the protective magic of the Shire's ancient trees. This roll grants a quick burst of vitality, bolstering one’s resistance to poison and dark magic alike.",
    "category": "consumables",
    "price": 280,
    "icon": "🍩",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "resistance_to_poison",
      "ward_against_dark_magic"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Poison",
        "rules": "When you consume the Everlasting Sweetroll, you gain temporary resistance to poison damage for 1 hour. This effect cannot be applied more than once per short rest."
      },
      {
        "title": "Ward Against Dark Magic",
        "rules": "For 10 minutes after eating the roll, you are immune to the harmful effects of dark magic within 30 feet. You can use this ability only once per long rest."
      }
    ],
    "levelRequirementReason": "This sweetroll is crafted for all adventurers who might find themselves in need of a quick boost, regardless of their experience level.",
    "vendorReason": "Mrs. Miggins' bakery is renowned for its delicious and magically-infused pastries across the Shire.",
    "shippingDetail": "The Everlasting Sweetroll is carefully packed to ensure it arrives at just the right temperature, delivered swiftly by the Pony Express.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "Resistance to poison lasts for 1 hour; Ward Against Dark Magic lasts for 10 minutes",
      "endsWhen": "At the end of each short rest and long rest respectively",
      "charges": "Unlimited, as the roll can be consumed multiple times"
    },
    "priceReason": "The Everlasting Sweetroll's price reflects its unique combination of culinary and magical craftsmanship, a delicacy that is both delicious and protective.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:27:56.732585+00:00",
    "aiReviewedAt": "2026-07-25T00:27:56.732585+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_starry_dust_massage": {
    "id": "equestria_item_starry_dust_massage",
    "name": "Starry Dust Massage Therapy",
    "description": "The Starry Dust Massage Therapy is a luxurious service that harnesses the ethereal glow of collected stardust to heal and rejuvenate. This celestial treatment instantly soothes weary muscles, accelerates recovery from wounds, and leaves one feeling as light as a feather. Only the finest stardust from Equestria's night skies can produce such magic, making this therapy both rare and invaluable for any pony in need of rest and repair.",
    "category": "services",
    "price": 4200,
    "icon": "✨",
    "stock": 23,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Instantaneous Healing",
      "Reduce Exhaustion"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "The Royal Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instantaneous Healing",
        "rules": "The user gains 50 hit points upon activation. If the user is at full health, they are instead cured of one level of exhaustion."
      },
      {
        "title": "Increased Movement Speed",
        "rules": "For the next two turns, the user's movement speed increases by +10 feet. This effect does not stack with other sources of increased movement speed."
      }
    ],
    "levelRequirementReason": "This therapy is accessible to all ponies who can afford its price, making it a valuable service for any Equestrian, regardless of their level.",
    "vendorReason": "Canterlot Commerce specializes in high-end services and therapies, ensuring that only the most effective and luxurious treatments are offered to patrons.",
    "shippingDetail": "The Starry Dust Massage Therapy is delivered within a day of purchase via the Royal Pony Express, ensuring that customers receive their therapy immediately upon payment.",
    "usage": {
      "activation": "Instantaneous effect when purchased and used.",
      "duration": "Duration ends after two turns or until the user's exhaustion level is reduced to zero.",
      "endsWhen": "The effect ends either at the end of two turns or if the user regains full health, whichever comes first.",
      "charges": "Unlimited uses; each purchase grants one use."
    },
    "priceReason": "The price is balanced to reflect the rarity and effectiveness of the stardust used in this therapy, ensuring it remains a valuable yet accessible service for all ponies.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T00:28:10.847089+00:00",
    "aiReviewedAt": "2026-07-25T00:28:10.847089+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_elemental_resonance_amulet": {
    "id": "equestria_item_elemental_resonance_amulet",
    "name": "Elemental Resonance Amulet",
    "description": "The Elemental Resonance Amulet, crafted by ancient pony artisans in harmony with Equestria’s elements, channels raw elemental power at your command. When attuned to Fire, it ignites a blazing fury, granting +10 damage on fire attacks and resistance to cold. As the Earth variant fortifies you against physical harm, it increases defense by 5 points, while the Water element grants an additional 2 swim speed and resilience against frost. Lastly, the Air element boosts your agility and evasion, making you a whirlwind of motion in battle.",
    "category": "equipment",
    "price": 28000,
    "icon": "🔥💧🌍💨",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Elemental Amplification",
      "Resilient Fortitude"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Magical Pony Express",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Elemental Amplification",
        "rules": "By attuning the amulet to one element, you gain a +10 bonus on fire damage rolls. This effect is active for an hour after activation and requires no action or concentration."
      },
      {
        "title": "Resilient Fortitude",
        "rules": "When attuned to Earth, this amulet increases your AC by 5 until the start of your next turn. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The amulet requires a high level to harness the raw elemental power safely.",
    "vendorReason": "Crystal Empire is renowned for its mastery of earth and stone, making it the perfect vendor for this enchanted artifact.",
    "shippingDetail": "Shipped via the trusted Magical Pony Express, ensuring safe delivery with a special courier.",
    "usage": {
      "activation": "Action to attune the amulet to one element.",
      "duration": "1 hour per activation.",
      "endsWhen": "The effect ends when you stop concentrating or at the start of your next turn after disattuning it.",
      "charges": "Unlimited, but only 3 uses per long rest."
    },
    "priceReason": "The amulet's rarity and powerful effects justify its high price in the market.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-25T00:28:18.137842+00:00",
    "aiReviewedAt": "2026-07-25T00:28:18.137842+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_forbidden_chronometer": {
    "id": "teyvat_item_forbidden_chronometer",
    "name": "The Clockwork Heart of Azathoth",
    "description": "The Clockwork Heart of Azathoth is a twisted contraption made from gears spun from the very fabric of time itself. Crafted in the shadowy forges of the forgotten realm, it pulses with an eerie light that warps reality around you. Use this device to manipulate the flow of time, but be warned: its chaotic energy can summon ghostly duplicates or erase enemy actions entirely. Tread carefully—prolonged exposure risks unraveling your very perception of existence.",
    "category": "forbidden",
    "price": 160000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Temporal Warping",
      "Ghostly Duplication"
    ],
    "vendor": "shadow_brokers",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Temporal Warping",
        "rules": "When activated, this device randomly accelerates or decelerates the flow of time for you and nearby enemies. This effect lasts for 1 round. Enemies within a 30-foot radius have disadvantage on attack rolls and ability checks while it is active. Saving throw DC 15."
      },
      {
        "title": "Ghostly Duplication",
        "rules": "There's a 20% chance (roll a d5) that when activated, the device creates ghostly duplicates of you within a 30-foot radius for 1 minute. These duplicates mimic your actions and can be targeted by spells or attacks. After the duration ends, they fade away with no ill effects."
      }
    ],
    "levelRequirementReason": "This device requires a basic understanding of time manipulation to wield its chaotic power.",
    "vendorReason": "The shadow brokers deal in forbidden knowledge, and this artifact is no exception.",
    "shippingDetail": "Ships through the dimensional rift with a 5-day delivery time, subject to potential delays due to cosmic interference.",
    "usage": {
      "activation": "Action",
      "duration": "1 round or until interrupted",
      "endsWhen": "Used up all charges (recharges after a long rest)",
      "charges": "3"
    },
    "priceReason": "Balanced at half the original price to reflect its reduced power and thematic balance.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-25T00:28:11.224655+00:00",
    "aiReviewedAt": "2026-07-25T00:28:11.224655+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_monstadt_wind_charm": {
    "id": "teyvat_item_monstadt_wind_charm",
    "name": "Aetherial Zephyr Token",
    "description": "Crafted by the finest wind mages of Mondstadt, this Aetherial Zephyr Token is a delicate charm that whispers the essence of freedom and swiftness. Its core, forged from the heartwood of ancient wind-touched trees, hums with the promise of swift movement. When activated, it grants a minor boost to your speed, making you nimbler in battle. Its air currents can also be manipulated for tactical advantage, allowing you to dodge attacks or launch projectiles with greater precision and force.",
    "category": "consumables",
    "price": 1000,
    "icon": "💨",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Speed Boost",
      "Dodge Shield"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "Activates as a bonus action. Increases your movement speed by 10% for 1 minute, ending early if you take any damage."
      },
      {
        "title": "Dodge Shield",
        "rules": "When you successfully dodge an attack, there is a 25% chance to grant you temporary hit points equal to half your level (rounded down). This effect can only occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "This charm requires no minimum level as it is a consumable that enhances mobility and tactical advantage.",
    "vendorReason": "Mondstadt's market is known for its wide array of magical items, including this charming piece.",
    "shippingDetail": "Ships swiftly via the Winged Courier service within a day.",
    "usage": {
      "activation": "Bonus action to activate and use.",
      "duration": "1 minute or until you take damage, whichever comes first.",
      "endsWhen": "You take any damage or at the end of your next turn after activation.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Aetherial Zephyr Token is priced high due to its unique combination of speed and tactical advantage, making it a valuable tool for any adventurer.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:28:45.705805+00:00",
    "aiReviewedAt": "2026-07-25T00:28:45.705805+00:00",
    "aiReviewVersion": 1
  },
  "chaos_scroll_of_unmaking": {
    "id": "chaos_scroll_of_unmaking",
    "name": "Scroll of Unmaking - Entropy's Whisper",
    "description": "The Scroll of Unmaking - Entropy's Whisper is a spectral scroll etched with runes that shimmer like fractured glass. When unrolled, it exudes a cold, chaotic energy that makes the air around you ripple and distorts reality for an instant. Those nearby feel their perceptions bend, leading to moments of disorientation. Perfect for those who revel in chaos, it's said this scroll can unravel even the most steadfast foes… or create opportunities for those with a penchant for mayhem.",
    "category": "curiosities",
    "price": 160000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Reality Distortion",
      "Chaotic Aura"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Void Messenger",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Reality Distortion",
        "rules": "When activated, this scroll briefly unravels the fabric of reality within a 10-foot radius. Non-boss enemies in range have their AC reduced to 8 until the start of your next turn. This effect lasts for 1 minute and can only be used once per long rest."
      },
      {
        "title": "Chaotic Aura",
        "rules": "The scroll emits a chaotic aura that affects all creatures within 5 feet. These creatures must make a DC 15 Wisdom saving throw or become disoriented, suffering disadvantage on attack rolls and ability checks until the start of your next turn. This effect can be triggered once per short rest."
      }
    ],
    "levelRequirementReason": "This scroll requires significant magical power to wield effectively.",
    "vendorReason": "The Chaos Dealer specializes in items that manipulate and distort reality, making this scroll a natural fit for their wares.",
    "shippingDetail": "Ships via the Void Messenger, known for its unpredictable yet reliable service through the chaotic planes.",
    "usage": {
      "activation": "A bonus action to unroll and activate.",
      "duration": "1 minute or until used up, whichever comes first.",
      "endsWhen": "The scroll is destroyed upon activation. Once per long rest, a new scroll can be purchased from the Chaos Dealer at an additional cost.",
      "charges": "Unlimited; each use expends one scroll."
    },
    "priceReason": "Balanced against other mythic items that offer substantial effects but require significant magical investment.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T00:28:29.296902+00:00",
    "aiReviewedAt": "2026-07-25T00:28:29.296902+00:00",
    "aiReviewVersion": 1
  },
  "faction_imperial_favor": {
    "id": "faction_imperial_favor",
    "name": "Imperial Favor - The Emperor's Grudge",
    "description": "The Imperial Favor - The Emperor's Grudge is a meticulously crafted miniature statue of the deceased emperor, its gold and gemstone exterior shimmering with an age-old patina. This relic exudes a regal aura, compelling those who hold it to believe in their rightful place at the imperial court. It is a symbol of favor from the dead emperor, granting wielders increased influence over loyal subjects and access to exclusive quests. Wario’s trophy is now a tool for true power-seekers willing to play the game.",
    "category": "faction",
    "price": 1000,
    "icon": "👑",
    "stock": 9,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increased influence",
      "exclusive quest access"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Royal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Influence",
        "rules": "When you hold the Imperial Favor, you gain advantage on Persuasion checks and have a +1 bonus to Charisma (Persuasion) ability checks. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Exclusive Quest Access",
        "rules": "Once per day, you can present the Imperial Favor to an imperial official to gain access to one exclusive quest or special mission. The quest ends when successfully completed."
      }
    ],
    "levelRequirementReason": "This relic is accessible to all players who wish to navigate the imperial court.",
    "vendorReason": "The Imperial Armory sells items of historical and political significance, and this favor represents a piece of that legacy.",
    "shippingDetail": "Ships via Royal Couriers, arriving within three days.",
    "usage": {
      "activation": "Passive effect active while holding the item; exclusive quest access once per day.",
      "duration": "Until end of next long rest for influence bonus, instantaneous for exclusive quests.",
      "endsWhen": "Long rest or completion of exclusive quest",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its historical significance and utility without overshadowing other items.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:28:33.767284+00:00",
    "aiReviewedAt": "2026-07-25T00:28:33.767284+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_legendary_rune_of_protection": {
    "id": "earth_land_item_legendary_rune_of_protection",
    "name": "The Warden's Echo",
    "description": "The Warden's Echo is a rune crafted from the molten remains of an ancient dragon’s lair, its surface etched with runes that shimmer like the heart of a volcano. This protective charm not only absorbs incoming attacks but also echoes a retaliatory pulse, striking back at foes who dare to press their advantage too hard. The rune's power is formidable yet fragile; overuse can lead to a state of temporary madness, leaving its wielder disoriented and vulnerable for hours.",
    "category": "equipment",
    "price": 67000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Absorbs Damage",
      "Retaliatory Pulse"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "winged_lion",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Absorbs Damage",
        "rules": "When an attack is made against the wearer, there is a 20% chance that the rune absorbs half of the damage dealt and reflects it back to the attacker. The absorption and reflection occur simultaneously."
      },
      {
        "title": "Retaliatory Pulse",
        "rules": "The rune grants the wearer +15 AC while active. If the wearer is reduced to 0 hit points, they are stunned for one round, and the rune absorbs an additional 20 points of damage before expiring."
      }
    ],
    "levelRequirementReason": "The Warden's Echo requires a minimum level of 14 due to its arcane complexity and the raw power needed to wield it effectively.",
    "vendorReason": "The guild quartermaster deals in rare and powerful items, including relics from ancient dragon lairs, making The Warden's Echo a fitting addition.",
    "shippingDetail": "Delivered by the swift winged lions, known for their precision and speed across the land.",
    "usage": {
      "activation": "Instantaneous activation upon donning the rune.",
      "duration": "Active until depleted or the wearer is reduced to 0 hit points.",
      "endsWhen": "The rune expires if the wearer takes damage from a critical hit or the wearer is reduced to 0 hit points.",
      "charges": "Unlimited uses, recharged upon donning."
    },
    "priceReason": "The Warden's Echo is priced at 1000 XP due to its rarity and the raw dragon essence required for crafting it, balancing its powerful abilities with a fair cost.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T00:29:58.614711+00:00",
    "aiReviewedAt": "2026-07-25T00:29:58.614711+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_princess_celestia_badge": {
    "id": "equestria_item_princess_celestia_badge",
    "name": "Badge of Celestial Guidance",
    "description": "The Badge of Celestial Guidance is a gleaming badge forged from the heart of the sun and blessed by Princess Celestia. Its radiant surface emits a soothing glow, subtly guiding its wearer towards strategic decisions. Wielders report that it not only enhances their ability to discern illusions but also instills a calm demeanor in chaotic situations. Rumor has it that the badge’s essence is imbued with the scent of apple pie, which some say brings clarity and focus.",
    "category": "equipment",
    "price": 4200,
    "icon": "👑",
    "stock": 23,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Illusion Detection",
      "Strategic Insight"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "swift_clouds Courier Service",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Illusion Detection",
        "rules": "The wearer has a +1 bonus to saving throws against illusions. This effect is active as long as the badge is worn and not covered."
      },
      {
        "title": "Strategic Insight",
        "rules": "Once per short rest, the wearer can use an action to gain advantage on one Wisdom (Insight) check related to strategy or foresight. The badge's power recharges after a long rest."
      }
    ],
    "levelRequirementReason": "The Badge requires at least level 2 to ensure its effects are balanced and meaningful for the wearer.",
    "vendorReason": "As a symbol of Princess Celestia's favor, this badge is sold exclusively by the Ponyville Market to those who respect her legacy.",
    "shippingDetail": "Ships via the Swift Clouds Courier Service for expedited delivery within three days.",
    "usage": {
      "activation": "Passive effect; activation is not required. Strategic Insight can be used once per short rest as an action.",
      "duration": "Passive effects are always active while worn and not covered. Strategic Insight lasts until the end of the wearer's next turn.",
      "endsWhen": "The badge stops functioning if it is removed, covered, or destroyed.",
      "charges": "Unlimited uses; recharges after a long rest."
    },
    "priceReason": "The badge’s rarity and unique abilities justify its price of 1000 XP, ensuring it remains a valuable but not overpowered item for adventurers.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:28:54.015718+00:00",
    "aiReviewedAt": "2026-07-25T00:28:54.015718+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_potion_of_regret": {
    "id": "midlands_item_potion_of_regret",
    "name": "A Bitter Brew",
    "description": "This vial of A Bitter Brew exudes a sickly yellow hue and emits an acrid scent reminiscent of rotting parchment. Drinking it forces you to relive your most humiliating moment, causing you to lose focus for the duration. The potion's effects are so potent that they sometimes trigger a debilitating negative status effect like confusion or fear, leaving you vulnerable to attack. Wario would indeed appreciate this peculiar remedy as a means to escape unwanted attention.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 37,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Relives most embarrassing moment",
      "Loses focus for one turn"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "flying drake",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Embarrassing Flashback",
        "rules": "The target must make a Wisdom saving throw. On a failed save, the target is stunned for 1 minute and forced to relive their most embarrassing moment. This effect ends if the target takes any action or when the duration expires."
      },
      {
        "title": "Lost Focus",
        "rules": "The target loses focus for one turn, granting advantage on Dexterity (Stealth) checks and disadvantage on Intelligence-based skill checks until the start of their next turn."
      }
    ],
    "levelRequirementReason": "This potion is suitable for beginners as it requires only a simple action to use.",
    "vendorReason": "The Empire Exchange deals in rare and exotic potions, making A Bitter Brew an ideal item for their diverse stock.",
    "shippingDetail": "Ships via the swift courier service of the Flying Drake, ensuring safe delivery within a day.",
    "usage": {
      "activation": "A simple action to drink the potion",
      "duration": "1 minute for Embarrassing Flashback; lost focus lasts one turn",
      "endsWhen": "On a successful Wisdom save or when the duration expires",
      "charges": "Unlimited, but only 3 uses per day"
    },
    "priceReason": "The potion's effectiveness and limited daily usage justify its price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:29:11.525795+00:00",
    "aiReviewedAt": "2026-07-25T00:29:11.525795+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_primal_flare": {
    "id": "pokemon_item_primal_flare",
    "name": "Primal Flare Potion",
    "description": "The Primal Flare Potion is a volatile elixir bottled from the raw power of an ancient, raging Charizard. When consumed, it ignites your next melee attack with an inferno of fire, dealing +10 fire damage and leaving behind a faint echo of the dragon's roar. The potion's fiery essence can be felt in its bubbling form, a testament to the primal energy it contains. However, the aftereffect is not without risk; you may find yourself inexplicably drawn to shiny objects for an hour.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grant_fire_damage_10",
      "compulsion_to_hoard_shiny_objects"
    ],
    "vendor": "pokemart",
    "shippedBy": "Poké Mail Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Fire Damage +10",
        "rules": "When consumed as a bonus action, this potion ignites your next melee attack with an inferno, dealing +10 fire damage to the target. The effect lasts for one round and then dissipates."
      },
      {
        "title": "Compulsion to Hoard Shiny Objects",
        "rules": "For 60 minutes after consuming the potion, you are compelled to search for shiny objects, such as stones or coins. This compulsion ends when you rest, use a spell, or consume another potion."
      }
    ],
    "levelRequirementReason": "The potion's raw power requires minimal preparation and is accessible to even the most novice trainers.",
    "vendorReason": "Pokemarts are known for offering a wide range of items that are useful in various situations, making this potion an easy addition to their stock.",
    "shippingDetail": "Delivered instantly by the trusty Poké Mail Drone.",
    "usage": {
      "activation": "Bonus action consumed as a bonus action.",
      "duration": "One round (60 seconds) after activation.",
      "endsWhen": "The effect ends when the duration expires or if you take damage.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The potion's potent yet manageable effects, combined with its limited stock and unique flavor, justify this fair price in XP.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T00:29:04.774787+00:00",
    "aiReviewedAt": "2026-07-25T00:29:04.774787+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_emberglow_amulet": {
    "id": "middle_earth_emberglow_amulet",
    "name": "Emberglow Amulet of the Grey Watchers",
    "description": "The Emberglow Amulet of the Grey Watchers pulses with a faint, ethereal glow that flickers like the embers of ancient fires. Crafted from the polished bones of long-dead Ents and imbued with Elven magic, it not only grants its wearer increased resistance to cold but also subtly warns them of hidden dangers lurking in their path. The amulet's eerie warmth is said to be a relic of the Grey Watchers' vigilance over the ancient forests.",
    "category": "equipment",
    "price": 4200,
    "icon": "🔥",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "cold_resistance",
      "detect_hidden_paths"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_pony",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "The wearer gains resistance to cold damage for 1 hour. This effect ends if the wearer takes any fire damage."
      },
      {
        "title": "Detect Hidden Paths",
        "rules": "Once per long rest, the wearer can cast the Detect Magic spell (save DC 14) without expending a spell slot or material components. This ability is limited to once every 24 hours."
      }
    ],
    "levelRequirementReason": "The amulet's magic requires a moderate amount of arcane knowledge and discipline, suitable for those with at least three levels of experience.",
    "vendorReason": "The elven market is renowned for its trade in ancient and enchanted items, including relics from the Grey Watchers.",
    "shippingDetail": "Shipped by swift winged ponies, this item arrives within a day of purchase.",
    "usage": {
      "activation": "Passive effect.",
      "duration": "1 hour or until the wearer takes fire damage.",
      "endsWhen": "The wearer takes fire damage.",
      "charges": "Unlimited."
    },
    "priceReason": "Crafted from rare materials and ancient magic, the price reflects a balance between its enchantment level and rarity.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:29:27.655370+00:00",
    "aiReviewedAt": "2026-07-25T00:29:27.655370+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_dwarven_stout_brew": {
    "id": "middle_earth_dwarven_stout_brew",
    "name": "Stonebeard’s Stout of Unyielding Courage",
    "description": "Brewed in the fiery heart of Mount Stonebeard, this stout is a marvel of dwarven craftsmanship. Its deep iron scent and robust body are said to fortify the soul as much as they do the stomach. A single sip grants you a surge of unyielding courage, bolstering your resolve against fear for an hour. Afterward, you find yourself compelled to recount your deeds with a newfound confidence, leaving behind a slight metallic aftertaste that lingers in the air.",
    "category": "consumables",
    "price": 280,
    "icon": "🍺",
    "stock": 25,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temporary_bolstering_bravery",
      "compulsion_to_share_deeds"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant_rat",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Bolstering Bravery",
        "rules": "When consumed, you gain advantage on saving throws against being frightened for the next hour. This effect is instantaneous upon consumption and does not require an action."
      },
      {
        "title": "Compulsion to Share Deeds",
        "rules": "For 10 minutes after drinking this stout, you are compelled to share your recent accomplishments with anyone within earshot. If forced into a conversation, you must speak for at least one minute before the effect ends. This compulsion does not require an action."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers of all levels to bolster their courage in challenging times.",
    "vendorReason": "The dwarves of Mount Stonebeard are renowned for their robust and enduring stouts, perfect for those who seek unyielding courage before a great challenge.",
    "shippingDetail": "Delivered by the cunning giant rats that navigate the tunnels beneath the mountain with unmatched skill.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "1 hour (for bravery) and 10 minutes (for compulsion to share deeds)",
      "endsWhen": "The effects wear off naturally at their respective durations or if consumed again before the time is up.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "This item's balanced price reflects its potent and unique effects, providing both immediate bravery and a memorable social quirk to adventurers in need of confidence.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:29:39.060987+00:00",
    "aiReviewedAt": "2026-07-25T00:29:39.060987+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_shire_messenger_scroll": {
    "id": "middle_earth_shire_messenger_scroll",
    "name": "A Curious Delivery from Bag End",
    "description": "This exquisitely crafted scroll, delivered by the grumpy yet surprisingly precise courier Pippin of Bag End, contains a single riddle written in ancient Elvish script and a small packet of golden honey from the Shire. The honey is said to be imbued with the essence of the land itself. Solving the riddle grants you access to a hidden cache of long-lost goods, though some say it might lead to more puzzles instead. Each delivery feels like a challenge, as Pippin insists on testing your wits before unsealing the scroll.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✉️",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "riddle_of_the_shire",
      "honey_of_the_land"
    ],
    "vendor": "shire_shop",
    "shippedBy": "Pippin of Bag End",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Riddle of the Shire",
        "rules": "Activates when you solve the riddle. You must spend a minute deciphering the script and answering the question correctly. If successful, you gain access to a hidden cache containing goods worth 500 XP. Failure leads to more riddles at the vendor's discretion."
      },
      {
        "title": "Honey of the Land",
        "rules": "When consumed, it heals 1d6 + your Wisdom modifier hit points and grants you advantage on one Intelligence or Wisdom saving throw related to nature or geography within an hour. You can only use this effect once per day."
      }
    ],
    "levelRequirementReason": "This scroll is accessible to all adventurers, as it tests their wits rather than their strength.",
    "vendorReason": "Only the Shire Shop keeps such unique and valuable deliveries from the Hobbits' most trusted couriers.",
    "shippingDetail": "The scroll is delivered with a small pouch containing the honey, ensuring it arrives fresh and intact.",
    "usage": {
      "activation": "Activates when you solve the riddle or consume the honey.",
      "duration": "Instantaneous for solving the riddle; one hour for the effects of the honey.",
      "endsWhen": "The scroll's effects expire upon solving the riddle or consuming the honey.",
      "charges": "Unlimited, but only one effect can be used per day."
    },
    "priceReason": "The scroll combines unique lore and a physical item of value, making it worth 1000 XP.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T14:29:33.848752+00:00",
    "aiReviewedAt": "2026-07-25T14:29:33.848752+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_gravitic_gloop": {
    "id": "the_edge_gravitic_gloop",
    "name": "Gravitic Gloop of Unstable Descent",
    "description": "The Gravitic Gloop of Unstable Descent is a shimmering, viscous mass that dances against gravity's pull, its iridescent sheen hinting at cosmic forces. When hurled with precision, it generates a localized field that either drags enemies into its center or sends them careening across the battlefield in a chaotic whirlwind. This unstable blob can be both a deadly weapon and a source of strange, disorienting sensations—Wario's own experiments have only begun to scratch the surface.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Area of Distorted Gravity",
      "Disorientation"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "express_delivery",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Area of Distorted Gravity",
        "rules": "When thrown, the Gravitic Gloop creates a 10-foot-radius area centered on its point of impact. Within this area, creatures must succeed on a DC 14 Dexterity saving throw or be knocked prone and have their movement speed reduced by half until the end of their next turn."
      },
      {
        "title": "Disorientation",
        "rules": "There is a 30% chance that any creature that fails to save against the Area of Distorted Gravity effect will also become disoriented. A disoriented creature has disadvantage on attack rolls and ability checks until the start of its next turn."
      }
    ],
    "levelRequirementReason": "This item's unpredictable nature requires a certain level of experience to wield effectively.",
    "vendorReason": "Edge Outpost specializes in cutting-edge and experimental gear, making it the perfect vendor for this unstable artifact.",
    "shippingDetail": "Ships via express delivery with a two-day guarantee, ensuring that this volatile item reaches its destination safely and swiftly.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until the end of the creature's next turn if they fail their saving throw.",
      "endsWhen": "Exhausts upon successful save or the start of a new round for disoriented creatures.",
      "charges": "Unlimited, but subject to daily limits."
    },
    "priceReason": "The Gravitic Gloop's unpredictable nature and experimental design justify its higher price point among uncommon items.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:30:04.499840+00:00",
    "aiReviewedAt": "2026-07-25T00:30:04.499840+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronarium_scroll": {
    "id": "the_edge_chronarium_scroll",
    "name": "Chronarium Scroll of Temporal Hiccups",
    "description": "The Chronarium Scroll of Temporal Hiccups is a brittle parchment adorned with iridescent runes that whisper the secrets of time. When activated, it allows the user to briefly rewind time by three seconds, but the process is unpredictable. There's a 5% chance you'll create a fleeting duplicate of yourself, and your actions during this period may manifest as minor temporal distortions—random temporary changes to one ability score for one round.",
    "category": "curiosities",
    "price": 67000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Rewind",
      "Duplicate Doppelgänger"
    ],
    "vendor": "final_shop",
    "shippedBy": "Temporal Courier Service",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Temporal Rewind",
        "rules": "As an action, the user can rewind time by three seconds. The effect is instantaneous but may cause a minor temporal distortion, which results in random temporary changes to one of your ability scores for one round."
      },
      {
        "title": "Duplicate Doppelgänger",
        "rules": "There's a 5% chance that a duplicate of the user will appear and act independently. The duplicate lasts until the end of the scroll’s effect, and both you and the duplicate can see each other but cannot interact."
      }
    ],
    "levelRequirementReason": "The scroll's complex temporal mechanics require a certain proficiency in time magic.",
    "vendorReason": "Final Shop specializes in rare, ancient artifacts and curiosities from the realms of time.",
    "shippingDetail": "The scroll is delivered via a Temporal Courier who ensures its arrival with minimal temporal disruptions.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect, lasting until the end of your next turn",
      "endsWhen": "The scroll's effect ends when it is used or destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a price to reflect its rarity and unpredictable nature, ensuring it remains a valuable but not overpowered item.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-25T00:29:54.983001+00:00",
    "aiReviewedAt": "2026-07-25T00:29:54.983001+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_empire_scroll": {
    "id": "midlands_item_empire_scroll",
    "name": "Decree of Minor Inconvenience",
    "description": "The Decree of Minor Inconvenience is a parchment scroll, its edges worn by time but still potent in the hands of Archduke Theodore's agents. It details an absurdly trivial infraction—a failure to polish one’s boots properly—and when used, it triggers endless rounds of bureaucratic red tape and minor inconveniences for anyone attempting to claim its power. This decree is not just a nuisance; it's a carefully crafted relic that can impose a -2 penalty on social checks and slow enemy movement by 10 feet for 2 rounds (once per short rest).",
    "category": "faction",
    "price": 4200,
    "icon": "📜",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Imposes -2 penalty on social checks",
      "Slows enemy movement by 10 feet for 2 rounds"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "imperial courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Social Check Penalty",
        "rules": "When used, this scroll imposes a -2 penalty on the next social check made by an opponent. This effect lasts until the end of the next short rest."
      },
      {
        "title": "Movement Slowdown",
        "rules": "Upon activation, this decree slows all enemies within 10 feet by 10 feet for 2 rounds. The penalty ends when the decree is destroyed or used again."
      }
    ],
    "levelRequirementReason": "Requires a minimum of 3rd level to wield effectively due to its complex enchantment and the strategic importance it holds.",
    "vendorReason": "The Empire Exchange is trusted by Archduke Theodore's agents, ensuring that only those with proper authorization receive such decrees.",
    "shippingDetail": "Ships via the Imperial Courier Service, ensuring swift delivery within a week of purchase.",
    "usage": {
      "activation": "Requires an action to activate; can be used once per short rest.",
      "duration": "Instantaneous effect with ongoing social check penalty and movement slowdown for 2 rounds.",
      "endsWhen": "Destroyed or recharged after a short rest.",
      "charges": "Unlimited charges, but only one use per short rest."
    },
    "priceReason": "Balanced at 1000 XP as it requires careful handling and strategic deployment in high-stakes situations.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T00:30:45.544509+00:00",
    "aiReviewedAt": "2026-07-25T00:30:45.544509+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_obsidian_charm": {
    "id": "midlands_item_obsidian_charm",
    "name": "Whispers of the Shattered King",
    "description": "The Whispers of the Shattered King is a hand-carved obsidian charm that pulses with an eerie warmth. Crafted by loyalists to the fallen king, it hums softly when held close, its whispers echoing complaints about taxes and paperwork. The charm is said to have been crafted in the heart of the shattered kingdom, where the very air holds secrets. Its unsettling warmth can be felt even from a distance, making it both intriguing and distracting.",
    "category": "curiosities",
    "price": 16000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Whispering Complaints",
      "Illusion Detection"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dragon post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispering Complaints",
        "rules": "While holding the charm, you can make a Perception check. On a successful check, you gain advantage on the next saving throw against an illusion within one hour."
      },
      {
        "title": "Illusion Detection",
        "rules": "You have advantage on Wisdom (Perception) checks to detect illusions. Additionally, there is a 20% chance that any creature attempting to cast an illusion within 30 feet of you will be detected by you as an illusion."
      }
    ],
    "levelRequirementReason": "The charm's subtle effects make it accessible to lower-level characters who can appreciate its intrigue.",
    "vendorReason": "Master Forgemaster at Fractured Forge appreciates the item's craftsmanship and lore, making it available for those interested in history and mysticism.",
    "shippingDetail": "The charm is carefully wrapped to ensure it arrives safely; however, delays are common due to the unpredictable nature of dragon flights.",
    "usage": {
      "activation": "Passive effect when holding the charm.",
      "duration": "Instantaneous detection chance; lasts for one hour per use.",
      "endsWhen": "The effect ends when you stop holding the charm or if it is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price reflects its unique effects, lore value, and availability.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:30:17.324799+00:00",
    "aiReviewedAt": "2026-07-25T00:30:17.324799+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronarium_bracelet": {
    "id": "the_edge_chronarium_bracelet",
    "name": "Chronarium Bracelet of Temporal Shifting",
    "description": "Forged from solidified chronal energy, this bracelet allows its wearer to manipulate their personal perception of time, accelerating or decelerating it at will. The Chronarium Bracelet of Temporal Shifting can blur reality for a brief moment, making the wielder's movements seem surreal and their reflexes sharper than ever. Misusing its power can lead to unpredictable temporal distortions, causing a sudden craving for pickled onions that persists until the wearer finds a way to realign time.",
    "category": "equipment",
    "price": 4200,
    "icon": "⏳",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Temporal Acceleration",
      "Temporal Deceleration"
    ],
    "vendor": "final_shop",
    "shippedBy": "Temporal Packet Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Temporal Acceleration",
        "rules": "The wearer's movement speed increases by 50% for 2 minutes. This effect can be activated as a bonus action, but the bracelet must recharge after each use."
      },
      {
        "title": "Temporal Deceleration",
        "rules": "For every round the wearer remains still, they gain advantage on Dexterity saving throws and attack rolls against enemies within 5 feet. The effect lasts until the wearer moves or attacks, with a maximum duration of 1 minute."
      }
    ],
    "levelRequirementReason": "The bracelet's power requires a certain mastery of timing to use without causing unintended temporal disruptions.",
    "vendorReason": "Final Shop is known for its eclectic collection of esoteric and time-related items, making it the perfect vendor for this Chronarium Bracelet.",
    "shippingDetail": "The bracelet must be shipped via Temporal Packet Express to ensure safe and timely delivery through shifting temporal planes.",
    "usage": {
      "activation": "Bonus action or reaction (choose one)",
      "duration": "Instantaneous activation, duration varies by effect",
      "endsWhen": "After each use of the effects, the bracelet requires a short rest to recharge.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Chronarium Bracelet's balanced price reflects its unique temporal abilities and the risk involved in using its power.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T00:30:51.415802+00:00",
    "aiReviewedAt": "2026-07-25T00:30:51.415802+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_voidstone_ritual": {
    "id": "the_edge_voidstone_ritual",
    "name": "Voidstone Ritual Kit – 'Whispers of Oblivion'",
    "description": "The Voidstone Ritual Kit – 'Whispers of Oblivion' is a meticulously crafted assemblage of ancient artifacts: a pulsating, obsidian-colored Voidstone embedded with arcane glyphs, and a collection of rare herbs that glow with an eerie purple light. This kit can summon the whispers of the abyss, creating minor echoes of the void to test the wills of those who dare invoke its power. Wario's warning still stands – don't blame us if you find yourself compelled to stare into nothingness for eternity!",
    "category": "services",
    "price": 16000,
    "icon": "🌌",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "echoes of the abyss",
      "temporary resistance to fear"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "black_carriage",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Echoes of the Abyss",
        "rules": "This effect allows a willing creature within 30 feet to summon minor echoes of the abyss, creating an area where creatures have disadvantage on Wisdom (Perception) checks. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Temporary Resistance",
        "rules": "The user gains temporary resistance to psychic damage equal to their proficiency bonus + their Charisma modifier when using this kit. The resistance ends if the user takes any psychic damage or after one hour, whichever comes first."
      }
    ],
    "levelRequirementReason": "The ritual's complexity and power necessitate a minimum level of spellcasting experience to safely perform.",
    "vendorReason": "Edge Outpost specializes in ancient artifacts and rituals, providing adventurers with the means to harness otherworldly powers.",
    "shippingDetail": "Delivered by the enigmatic Black Carriage, known for its punctuality and discreet service.",
    "usage": {
      "activation": "A bonus action to activate the kit and invoke the ritual.",
      "duration": "1 minute or until the user takes psychic damage.",
      "endsWhen": "The duration ends if the user takes any psychic damage.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This kit offers a balanced value, providing both temporary resistance and an area effect that can be used once per long rest at a lower level requirement than its original form.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-25T00:30:51.070655+00:00",
    "aiReviewedAt": "2026-07-25T00:30:51.070655+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_jade_plateau_gauntlet": {
    "id": "teyvat_item_jade_plateau_gauntlet",
    "name": "Jade Plateau Gauntlet of Resilience",
    "description": "Forged in the depths of the Jade Peak, this gauntlet channels Geo energy to bolster your defenses. Its intricate pattern glows faintly under the light of the twin suns, and its smooth surface is said to have been tempered by the very heart of a dormant volcano. While it enhances your Geo resistance and grants you a momentary fortitude, attempting to punch through solid rock is ill-advised—your fists might not survive the encounter.",
    "category": "equipment",
    "price": 16000,
    "icon": "🛡️",
    "stock": 18,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Geo Defense Boost",
      "Damage Absorption"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Sea Merchant",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Geo Defense Boost",
        "rules": "When you are hit by a melee attack, this gauntlet provides a +3 bonus to your AC for the next minute. This effect can occur once per short or long rest."
      },
      {
        "title": "Damage Absorption",
        "rules": "Once per combat, when you take damage from a melee attack, you have a 15% chance to absorb half of that damage as Geo energy. This absorbs only the first instance of damage and cannot be used again until your next short or long rest."
      }
    ],
    "levelRequirementReason": "The gauntlet's intricate forging requires a deep understanding of the Geo element, suitable for those who have already harnessed its power.",
    "vendorReason": "Liyue Harbor is known for its connection to the Jade Peak and the mastery of Geo magic.",
    "shippingDetail": "Ships by sea, with a delivery time of approximately two weeks.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "1 minute per use, once per short or long rest.",
      "endsWhen": "The duration ends at the start of your next turn after it has been used.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The jade used in its construction and the rare techniques required for its forging make this gauntlet a valuable, yet balanced addition to any adventurer's arsenal.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T00:31:25.808590+00:00",
    "aiReviewedAt": "2026-07-25T00:31:25.808590+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_inazuma_driftwood_charm": {
    "id": "teyvat_item_inazuma_driftwood_charm",
    "name": "Inazuman Driftwood Charm of Whispers",
    "description": "The Inazuman Driftwood Charm of Whispers is a weathered relic carved from the wreckage of an ancient ship that sailed the Tempest Sea. Its grainy surface, etched with cryptic symbols, hums faintly as it captures fragments of forgotten lore and whispers them to those who hold it. The charm can be relied upon to provide occasional glimpses into hidden paths and enhance perception, making travelers more attuned to their surroundings.",
    "category": "curiosities",
    "price": 4200,
    "icon": "🌊",
    "stock": 29,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "whispered wisdom",
      "enhanced perception"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Sea Breeze Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispered Wisdom",
        "rules": "The charm provides a +1 bonus to Intelligence (History) checks related to forgotten lore. This effect is instantaneous and can be used once per long rest."
      },
      {
        "title": "Enhanced Perception",
        "rules": "When the wielder spends an action or reaction, they gain advantage on one perception check made within the next minute. This effect can be activated twice per short rest."
      }
    ],
    "levelRequirementReason": "This charm is accessible to beginners who might benefit from its insights into hidden paths and enhanced awareness.",
    "vendorReason": "Inazuma Imports specializes in curiosities from the Tempest Sea, and this relic perfectly exemplifies their offerings.",
    "shippingDetail": "Delivered via a swift sea breeze courier, ensuring the charm arrives fresh from its origins in the Tempest Sea.",
    "usage": {
      "activation": "Action or reaction for Enhanced Perception; once per long rest for Whispered Wisdom",
      "duration": "Instantaneous (Whispered Wisdom) and one minute (Enhanced Perception)",
      "endsWhen": "Exhaustion of uses or upon completion of the effect",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its rarity, historical significance, and utility in exploration.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T00:31:06.128519+00:00",
    "aiReviewedAt": "2026-07-25T00:31:06.128519+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_frostbite_charm": {
    "id": "earth_land_frostbite_charm",
    "name": "The Shivering Serpent's Kiss",
    "description": "The Shivering Serpent's Kiss is a tiny, obsidian serpent charm that seems perpetually cold to the touch, its scales shimmering with frost. This rare trinket grants you resistance to frost and chills, but prolonged use can lead to a slight case of the shivers—perfect for unsettling your foes on the battlefield or in crypts where shadows linger. A relic forged by ancient sorcerers, it whispers tales of frozen realms and the chill that lingers after battles long past.",
    "category": "equipment",
    "price": 4200,
    "icon": "🥶",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Frost Resistance",
      "Chilling Touch"
    ],
    "vendor": "magic_shop",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Frost Resistance",
        "rules": "You gain resistance to cold damage. This effect is active as a bonus action, lasting until the start of your next turn."
      },
      {
        "title": "Chilling Touch",
        "rules": "At the end of each other creature's turn within 5 feet of you, there is a 20% chance that it becomes chilled. This effect ends on the target if they succeed on a DC 13 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "This charm requires a minimum level to ensure its effects are manageable and balanced for combat.",
    "vendorReason": "The magic shop is well-known for dealing in rare and magical trinkets, including this ancient relic of sorcery.",
    "shippingDetail": "Shipped by the dragon courier, expected delivery time varies based on weather conditions and terrain.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until the start of your next turn",
      "endsWhen": "On your next turn",
      "charges": "Unlimited"
    },
    "priceReason": "The charm's rarity and magical properties justify its price, offering a fair balance for a rare item.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:31:50.896967+00:00",
    "aiReviewedAt": "2026-07-25T00:31:50.896967+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_potion_of_fermented_berries": {
    "id": "earth_land_potion_of_fermented_berries",
    "name": "Wario's Berry Blitz!",
    "description": "Wario's Berry Blitz! is a frothy, neon-green potion that bubbles ominously before erupting in a cloud of sugary mist. Crafted from an unholy mix of wild berries and Wario’s secret ingredient—likely a generous helping of his famous leftovers—the concoction grants a burst of speed and an intense sugar rush capable of making even the most stoic adventurer feel like a hyperactive child. Beware, for this potion’s effects are fleeting but potent, leaving you vulnerable to exhaustion if consumed too frequently.",
    "category": "consumables",
    "price": 280,
    "icon": "⚡",
    "stock": 48,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Speed Boost",
      "Temporary Strength"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "hawk_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "The drinker gains a +10% bonus to their speed for 6 seconds. This effect is instantaneous upon consumption and lasts until the end of your next turn."
      },
      {
        "title": "Temporary Strength",
        "rules": "For the duration of the Speed Boost, you gain a +5 bonus to attack rolls and melee damage rolls. This effect ends if you take any damage or when it otherwise concludes."
      }
    ],
    "levelRequirementReason": "This potion is designed for beginners who need a quick boost without the risk of overtaxing their abilities.",
    "vendorReason": "The Guild Quartermaster stocks this item as part of their basic supplies, catering to adventurers who require a simple edge in combat.",
    "shippingDetail": "Delivered by the swift hawks of Hawk Express, ensuring that your Berry Blitz arrives fresh and bubbling.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "6 seconds or until you take damage",
      "endsWhen": "Ends at the start of your next turn or when you take damage",
      "charges": "Unlimited, but limited to one use per day"
    },
    "priceReason": "The potion’s effects are potent enough to justify a higher price point, yet it remains accessible for adventurers who need a quick boost.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:31:26.263586+00:00",
    "aiReviewedAt": "2026-07-25T00:31:26.263586+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_amulet_of_the_ancient_one": {
    "id": "earth_land_amulet_of_the_ancient_one",
    "name": "The Echoing Heartstone",
    "description": "The Echoing Heartstone is a pulsating grey gemstone that hums with the forgotten whispers of ancient earth spirits. When held, it grants a limited ability to sense magical disturbances and briefly glimpse echoes of past events. However, prolonged exposure might drive you slightly mad with visions of the past. This amulet's power resonates with the earth itself, making it an invaluable tool for those who seek hidden truths beneath the surface.",
    "category": "curiosities",
    "price": 1100000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Magical Sensing",
      "Glimpse of Past"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_snail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Magical Sensing",
        "rules": "As a bonus action, the wearer can sense magical disturbances within a 30-foot radius. This lasts for 1 minute and does not require concentration."
      },
      {
        "title": "Glimpse of Past",
        "rules": "Once per day, the wearer can briefly glimpse an echo of past events as if they were present at that moment. This effect is instantaneous but only reveals rare occurrences and lasts for 1 round. There is no save DC required."
      }
    ],
    "levelRequirementReason": "This amulet requires a certain level to harness the earth's ancient magic safely.",
    "vendorReason": "The Earth Emporium specializes in items that connect with nature and its ancient powers, making it an ideal vendor for the Echoing Heartstone.",
    "shippingDetail": "Shipped by a giant snail, which takes extra time due to its leisurely pace but ensures safe delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute (concentration not required)",
      "endsWhen": "Ends after 1 minute or when the wearer stops concentrating",
      "charges": "Unlimited, as long as the wearer remains aware"
    },
    "priceReason": "The Echoing Heartstone's price is balanced to reflect its rare origin and mystical abilities, making it accessible but not cheap.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-25T00:31:21.421452+00:00",
    "aiReviewedAt": "2026-07-25T00:31:21.421452+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_crumbly_crown": {
    "id": "leclaire_isle_item_crumbly_crown",
    "name": "The Crumbly Crown of Pastry Perfection",
    "description": "The Crumbly Crown of Pastry Perfection, a headdress forged from hardened croissant dough and glazed with shimmering sugar, exudes an otherworldly aura that draws pastry from nearby bakeries. Wearing it not only attracts edible treats but also subtly charms those who partake in the offered delicacies, making them more willing to share their own pastries. The crown's sugary core is said to possess healing properties, mending small wounds and leaving a lingering sweetness on the lips of its wearer.",
    "category": "equipment",
    "price": 16000,
    "icon": "👑",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Attracts Edible Treats",
      "Subtle Charm"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift_delivery_pony",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Attracts Edible Treats",
        "rules": "As an action, you can focus your crown to draw nearby pastries within a 10-foot radius. These treats are edible but may be sticky and messy. The effect lasts until the end of your next turn or until you use this ability again."
      },
      {
        "title": "Subtle Charm",
        "rules": "Any creature that consumes pastry offered by someone who has interacted with you within the last hour is charmed for 1 minute, and will be more inclined to share their own pastries. A successful DC 12 Wisdom saving throw ends this effect early."
      }
    ],
    "levelRequirementReason": "The crown's magical properties require a moderate level of spellcasting ability.",
    "vendorReason": "Dough Depot, known for its expertise in pastry and confectionery, naturally stocks this whimsical yet practical item.",
    "shippingDetail": "Delivered swiftly by the swift ponies of Dough Depot, ensuring your crown arrives fresh from the bakery.",
    "usage": {
      "activation": "Action",
      "duration": "Until end of next turn or until reactivated",
      "endsWhen": "Ends when you use it again or at the end of your next turn",
      "charges": "Unlimited, but requires concentration for up to one minute per activation"
    },
    "priceReason": "The crown's unique properties and rarity justify this price in terms of both magical and culinary value.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:31:53.695977+00:00",
    "aiReviewedAt": "2026-07-25T00:31:53.695977+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_whispering_whisk": {
    "id": "leclaire_isle_item_whispering_whisk",
    "name": "The Whispering Whisk of Sweet Secrets",
    "description": "The Whispering Whisk of Sweet Secrets, a delicate artifact made from polished amber and imbued with the whispers of ancient bakers, grants you a fleeting glimpse into the desires of those around you. As you swirl it in your hand, the air hums with the secret cravings of your companions—be they for sugar-dusted pastries or savory pies. Beware, though; their desires are often peculiar and very specific, hinting at hidden hopes and fears that might be better left unsaid.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🥄",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "detect_desires",
      "small_chance_of_illusion"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "magic_cart",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Detect Desires",
        "rules": "As a bonus action, you can use the whisk to detect the immediate desires of those within 30 feet. This reveals their most pressing craving, but it is not always aligned with their actions or preferences."
      },
      {
        "title": "Small Chance of Illusion",
        "rules": "There is a 10% chance that the desire detected by the whisk will be an illusory misdirection, making you believe someone desires something entirely different than what they truly do. This effect lasts for 1 hour."
      }
    ],
    "levelRequirementReason": "The artifact's ancient enchantments require a minimum of two levels to stabilize and wield.",
    "vendorReason": "Pastry Palace, known for its master bakers and enchanted kitchenware, naturally stocks this unique item.",
    "shippingDetail": "Shipped via the magic cart, ensuring it arrives in perfect condition by morning.",
    "usage": {
      "activation": "Bonus action to detect desires or use the illusory effect.",
      "duration": "Instantaneous for desire detection; 1 hour for illusory misdirection.",
      "endsWhen": "The effect ends when you use the whisk again, or when it is destroyed.",
      "charges": "Unlimited, but only one effect can be used at a time."
    },
    "priceReason": "Crafted from enchanted amber and imbued with ancient magic, this item reflects both rarity and the complexity of its abilities.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T00:31:54.413757+00:00",
    "aiReviewedAt": "2026-07-25T00:31:54.413757+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_frostfang_amulet": {
    "id": "earth_land_frostfang_amulet",
    "name": "Frostfang Amulet",
    "description": "The Frostfang Amulet is a gleaming, icy pendant forged from ancient glaciers and imbued with the power of frost giants. Crafted in the heart of eternal winter, it grants its wearer resistance to cold damage and the ability to chill enemies, causing them to shiver uncontrollably. A true testament to the elements, this amulet not only protects but also intimidates, making it an invaluable companion for any adventurer seeking to master the icy arts.",
    "category": "equipment",
    "price": 390000,
    "icon": "🥶",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "cold_resistance",
      "chill_enemy"
    ],
    "vendor": "magic_shop",
    "shippedBy": "ice_golem",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "The wearer gains resistance to cold damage. This effect is active as long as the amulet remains on the wearer and does not require any actions."
      },
      {
        "title": "Chill Enemy",
        "rules": "As a bonus action, the wearer can attempt to chill an enemy within 30 feet. The target must succeed on a DC 15 Constitution saving throw or become incapacitated for 1 minute due to severe shivering. This ability has a recharge time of one long rest."
      }
    ],
    "levelRequirementReason": "The complex enchantments and powerful magic required to craft the Frostfang Amulet necessitate a high level of expertise.",
    "vendorReason": "Magic Shop is known for its extensive collection of rare, mythic items crafted by ancient civilizations.",
    "shippingDetail": "Delivered directly by an Ice Golem from the Northern Frostlands.",
    "usage": {
      "activation": "Bonus action or reaction (to chill enemy)",
      "duration": "Instantaneous; lasts for 1 minute if successful save is failed",
      "endsWhen": "The target successfully saves, the effect ends after one long rest recharge",
      "charges": "Unlimited charges"
    },
    "priceReason": "Given its mythic rarity and powerful enchantments, the Frostfang Amulet is priced at a steep but fair value.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T00:31:44.810733+00:00",
    "aiReviewedAt": "2026-07-25T00:31:44.810733+00:00",
    "aiReviewVersion": 1
  }
};
