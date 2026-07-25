// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_012 = {
  "equestria_mushroom_mantle": {
    "id": "equestria_mushroom_mantle",
    "name": "Fungi Veil Mantle",
    "description": "The Fungi Veil Mantle, a cloak woven from the sentient spores of the Whispering Fungi, allows its wearer to blend seamlessly into shadowy mushroom thickets where only fungal spirits dare tread. Its fabric hums with ancient secrets, whispering tales of the lost kingdom's once-glorious reign. The mantle requires attunement with mushrooms and grants invisibility in these dense forests; however, prolonged exposure to sunlight causes it to shed its enchantments and return to mundane cloth.",
    "category": "equipment",
    "price": 210,
    "icon": "🍄",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Invisibility in Mushroom Thickets",
      "Communication with Fungal Spirits"
    ],
    "vendor": "equestria",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Invisibility in Mushroom Thickets",
        "rules": "The wearer becomes invisible while within a dense mushroom thicket. This effect lasts for 30 minutes, after which the mantle ceases to function until attunement with mushrooms is renewed."
      },
      {
        "title": "Communication with Fungal Spirits",
        "rules": "While in a mushroom thicket and under the mantle's effects, the wearer can communicate telepathically with nearby fungal entities. This ability requires no action but cannot be used while outside of such an environment. The communication is limited to basic commands or questions."
      }
    ],
    "levelRequirementReason": "Wearing the Fungi Veil Mantle requires attunement, a process that demands at least two levels of experience.",
    "vendorReason": "The mantle's origins in the Fungi Kingdom make it a fitting artifact for Equestrian collectors and scholars.",
    "shippingDetail": "Due to its fragile nature, this item is shipped with additional protective padding at extra cost.",
    "usage": {
      "activation": "Passive effect activated by entering a mushroom thicket.",
      "duration": "30 minutes of being within a mushroom thicket.",
      "endsWhen": "Exposure to sunlight or removal from the thicket.",
      "charges": "Unlimited, but requires attunement for continued use."
    },
    "priceReason": "The mantle's unique properties and the time required to attune it justify its moderate price in experience points.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T04:39:35.124491+00:00",
    "aiReviewedAt": "2026-07-22T04:39:35.124491+00:00",
    "aiReviewVersion": 1
  },
  "equestria_onyx_hand_amulet": {
    "id": "equestria_onyx_hand_amulet",
    "name": "Onyx Hand Amulet",
    "description": "The Onyx Hand Amulet is a dark, heavy amulet forged from the bones of an ancient vampire and the tears of a Changeling. It hums with malevolent whispers that command shadows to dance at its wearer's will—but at the cost of their very soul. Crafted by Paratroopa Air as a weapon against undead and shadow creatures, it is said to have been stolen from a cult devoted to Waluigi, god of chaos.",
    "category": "equipment",
    "price": 21000,
    "icon": "🩸",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Shadow Command",
      "Soul Drain"
    ],
    "vendor": "equestria",
    "shippedBy": "Paratroopa Air Express",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Shadow Command",
        "rules": "As an action, the wearer can command shadows within 30 feet. The shadows obey a single verbal command (such as 'attack' or 'hide'). If multiple shadows are present, they each make a Wisdom saving throw (DC 15). On a failed save, the shadow does not follow the command."
      },
      {
        "title": "Soul Drain",
        "rules": "The wearer suffers 1d6 points of Charisma drain when using their Shadow Command in daylight or against non-shadow creatures. This effect ends after 5 uses if worn by a pony not aligned with chaos."
      }
    ],
    "levelRequirementReason": "This amulet's dark magic requires significant discipline and strength to wield effectively.",
    "vendorReason": "Equestria is known for its wide array of magical items, including those with dark origins like this one.",
    "shippingDetail": "Delivery may take up to a week due to the amulet's volatile nature and strict handling requirements.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the wearer uses their Shadow Command or if they remove it from their neck.",
      "charges": "5"
    },
    "priceReason": "This amulet's rarity and dark magic make it a valuable, yet balanced addition to any pony's collection.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T04:38:52.809369+00:00",
    "aiReviewedAt": "2026-07-22T04:38:52.809369+00:00",
    "aiReviewVersion": 1
  },
  "equestria_pirana_post_ruse": {
    "id": "equestria_pirana_post_ruse",
    "name": "The Pianta’s Lament",
    "description": "The Pianta’s Lament is a cursed keychain forged from the tears of Princess Pianta and remnants of her broken bridge. This ornate artifact, worn by those brave enough to challenge the Iron Legion, promises access to their hidden vaults but instead binds its user in an eternal loop of forced labor within the Legion's magitek factories, where they are made to toil under a red glow and low hum.",
    "price": 21000,
    "icon": "🤡",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Forces labor",
      "Activates with regret"
    ],
    "vendor": "equestria",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Labor Bond",
        "rules": "When activated, the user is compelled to perform forced labor for 1 hour. The user must succeed on a DC 15 Constitution saving throw or suffer a -2 penalty to all ability checks until the end of their next long rest."
      },
      {
        "title": "Regret Loop",
        "rules": "Each activation increases the likelihood that the user will be bound by the Legion's curse permanently after three uses. On a failed DC 14 Charisma saving throw, the user’s allies lose faith in them for 24 hours."
      }
    ],
    "levelRequirementReason": "Requires at least level 1 to activate without immediate regret.",
    "vendorReason": "Equestrian merchants, wary of the curse, sell it only to those who understand its risks and potential for disaster.",
    "shippingDetail": "Ships with a special delivery seal ensuring timely arrival, but delays may occur due to the cursed nature of the item.",
    "usage": {
      "activation": "Activates on command as an action.",
      "duration": "Instantaneous labor effect; permanent curse after three activations.",
      "endsWhen": "User successfully removes the artifact or uses it three times.",
      "charges": "Unlimited, but each use drains 10% of user’s mana."
    },
    "priceReason": "Balanced at 1000 XP to reflect its cursed nature and potential for regret and labor.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T04:38:52.907865+00:00",
    "aiReviewedAt": "2026-07-22T04:38:52.907865+00:00",
    "aiReviewVersion": 1
  },
  "equestria_sunset_soul_candle": {
    "id": "equestria_sunset_soul_candle",
    "name": "Sunset Soul Candle",
    "description": "Crafted in the twilight of Celestial Hills, this candle glows softly with a golden hue, its light imbued with the memories and sorrows of forgotten heroes who fell during the war of stars. When lit, it heals minor wounds and boosts morale among those nearby, but if left unattended for more than 12 hours, it begins to weep arcane tears that attract the vigilant Griffonstone Keepers. A relic of a bygone era, it can also serve as an emergency signal flare when danger looms.",
    "price": 38,
    "icon": "🕯",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Minor Healing",
      "Boosted Morale"
    ],
    "vendor": "equestria",
    "shippedBy": "Swift Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Healing",
        "rules": "When lit, the candle restores 20 hit points to the user. This effect is instantaneous and requires no action."
      },
      {
        "title": "Boosted Morale",
        "rules": "For 5 minutes after being lit, all allies within a 10-foot radius gain a +3 bonus to saving throws against fear and charm effects."
      }
    ],
    "levelRequirementReason": "This candle is crafted for use by adventurers of all levels.",
    "vendorReason": "As trusted suppliers of mystical artifacts, the Equestrian vendors are known to offer such relics.",
    "shippingDetail": "Delivered within a day with no additional charges for fragile items.",
    "usage": {
      "activation": "Instantaneous (no action required)",
      "duration": "5 minutes, ends when the candle is extinguished or the effect expires",
      "endsWhen": "The candle is extinguished or its duration ends",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from rare materials and imbued with ancient magic, this candle's value far exceeds its cost in XP.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-22T04:39:16.019187+00:00",
    "aiReviewedAt": "2026-07-22T04:39:16.019187+00:00",
    "aiReviewVersion": 1
  },
  "equestria_teyvat_tether": {
    "id": "equestria_teyvat_tether",
    "name": "Teyvat Tether",
    "description": "The Teyvat Tether is a gleaming pendant forged from the heart of an Elemental Rift. Crafted by Red Winter, it weaves together threads of distant elemental magic into a delicate charm. Activating this pendant allows you to conjure minor elemental reactions, but at a cost: each use drains your magic pool and leaves you vulnerable for a brief moment. This artifact is said to be a rare find, enhancing the bond between user and elementals, especially when paired with another wielder of elemental prowess.",
    "price": 4600,
    "icon": "⚡",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Elemental Reaction Trigger",
      "Magic Pool Drain"
    ],
    "vendor": "equestria",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Elemental Reaction Trigger",
        "rules": "When activated as a bonus action during combat, this pendant allows the wearer to trigger an additional elemental reaction with their next attack. This effect lasts until the end of your next turn and has no save DC or duration."
      },
      {
        "title": "Magic Pool Drain",
        "rules": "Each activation consumes 10% of your magic pool. The effect ends if you take any damage, cast a spell, or if you run out of magic points. This item cannot be used more than once per short rest."
      }
    ],
    "levelRequirementReason": "Requires at least level 8 to wield this powerful artifact effectively.",
    "vendorReason": "The Equestrian marketplaces are known for their diverse array of magical artifacts, including rare and exotic items from various worlds.",
    "shippingDetail": "Delivered within a week with special courier services ensuring the artifact's integrity.",
    "usage": {
      "activation": "Bonus action during combat",
      "duration": "Until the end of your next turn",
      "endsWhen": "You take damage, cast a spell, or run out of magic points",
      "charges": "Unlimited per short rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and utility in combat.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T04:39:07.675920+00:00",
    "aiReviewedAt": "2026-07-22T04:39:07.675920+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_apple_farm_rolling_pin": {
    "id": "equestrian_apple_farm_rolling_pin",
    "name": "Equestrian Apple Farm Rolling Pin",
    "description": "This ornate rolling pin, crafted from the heartwood of ancient apple trees at Sweet Apple Acres, is a symbol of the farm's craftsmanship and magic. Its surface is scored with the patterns of perfect pie crusts, and when used, it ensures every dough is flaky and even. The rolling pin also infuses baked goods with an aura that enhances camaraderie, granting +1 to Charisma checks for those who share its bounty.",
    "category": "equipment",
    "price": 750,
    "icon": "🥧",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Perfect Dough",
      "Enhanced Camaraderie"
    ],
    "vendor": "equestrian_farm",
    "shippedBy": "Orchard Oak Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perfect Dough",
        "rules": "When used to roll out dough, the user gains advantage on any baking check related to pies. The rolling pin ensures the dough is even and crack-free."
      },
      {
        "title": "Enhanced Camaraderie",
        "rules": "For 1 hour after using the rolling pin to bake a pie, the user gains +1 to Charisma checks when sharing baked goods with others. This effect does not stack."
      }
    ],
    "levelRequirementReason": "This item's simplicity and widespread use make it accessible to all levels of adventurers.",
    "vendorReason": "Sweet Apple Acres is renowned for its artisanal goods, including this enchanted rolling pin.",
    "shippingDetail": "Ships via express delivery from Sweet Apple Acres directly to the adventurer's doorstep.",
    "usage": {
      "activation": "Used as a bonus action when rolling out dough for pies.",
      "duration": "Instantaneous effect; lasts until the next long rest.",
      "endsWhen": "The effect ends at the start of the next short or long rest.",
      "charges": "Unlimited charges"
    },
    "priceReason": "This item's rarity and magical properties justify its price, providing a significant boon to bakers and socializers alike.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-22T04:39:19.693060+00:00",
    "aiReviewedAt": "2026-07-22T04:39:19.693060+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_apple_pie_recipe": {
    "id": "equestrian_apple_pie_recipe",
    "name": "Recipe: Equestrian Apple Pie",
    "description": "The Recipe: Equestrian Apple Pie is a parchment with detailed instructions from Sweet Apple Acres. Baked with friendship and only the freshest apples, it's a symbol of unity among all equines. Consuming this recipe grants you the wisdom to craft an apple pie that not only heals but also strengthens your persuasive skills. The apple family ensures its authenticity, and only those who truly appreciate honest labor can master its secrets.",
    "price": 210,
    "icon": "🥧",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Apple Pie Wisdom",
      "Charismatic Persuasion"
    ],
    "vendor": "equestrian_farm",
    "shippedBy": "Rainbow Courier Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Apple Pie Wisdom",
        "rules": "Activate as a bonus action. When you successfully bake and consume an apple pie, you gain the ability to heal yourself for 2d4 hit points and are immune to lying penalties until your next long rest."
      },
      {
        "title": "Charismatic Persuasion",
        "rules": "For the duration of one hour after baking and eating a slice, you have advantage on Charisma (Persuasion) checks. This effect is limited to once per day."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate the simplicity and community spirit behind crafting an apple pie.",
    "vendorReason": "Sweet Apple Acres has long been known for its quality produce and recipes, making it a trusted source for such items.",
    "shippingDetail": "Delivered by the Rainbow Courier Express, ensuring your recipe arrives in perfect condition.",
    "usage": {
      "activation": "Bonus action to activate; passive effects last until the end of each day or after consuming the pie.",
      "duration": "Passive effects are permanent until a long rest is taken. Active effect lasts for one hour per consumption.",
      "endsWhen": "Effect ends at the start of your next short or long rest, or when consumed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The recipe's rarity and the unique healing and social benefits justify its moderate price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T04:39:21.768878+00:00",
    "aiReviewedAt": "2026-07-22T04:39:21.768878+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_friendship_bracelet": {
    "id": "equestrian_friendship_bracelet",
    "name": "Equestrian Friendship Bracelet",
    "description": "The Equestrian Friendship Bracelet, a delicate yet sturdy piece of yarn and genuine magic, weaves together the bonds of equine companionship. Worn by those who seek to inspire trust and understanding, it glows softly during moments of emotional connection, offering comfort and support. Upon its wearer’s command, this magical bracelet grants an ally advantage on Persuasion checks with good-aligned creatures, and once per day can grant a +1d4 bonus to an ally's saving throw in response to a nearby hazard or threat.",
    "category": "equipment",
    "price": 210,
    "icon": "🌈",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Persuasion Checks",
      "Saving Throw Bonus"
    ],
    "vendor": "equestrian_gift_shop",
    "shippedBy": "Express Mail via Rainbow Dash",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Persuasive Bond",
        "rules": "When the wearer successfully uses the Persuasion skill with a good-aligned creature, they and their allies gain advantage on subsequent checks made against that creature for up to one hour."
      },
      {
        "title": "Saving Throw Companion",
        "rules": "The bracelet can be activated as a reaction when an ally is about to make a saving throw against a nearby hazard or threat. The wearer's command grants the ally +1d4 temporary hit points and advantage on that save, once per day."
      }
    ],
    "levelRequirementReason": "The bracelet requires no level as it provides support for all adventurers who value friendship.",
    "vendorReason": "Rainbow Dash and her Ponyville Craft Circle are known for creating items that bring ponies closer, making the Friendship Bracelet a natural addition to their offerings.",
    "shippingDetail": "Ships within one hour of purchase with express delivery by the fastest pegasus in Equestria.",
    "usage": {
      "activation": "Reaction or command during a moment of emotional connection",
      "duration": "Until the end of the next long rest for 'Persuasive Bond'; until the hazard ends for 'Saving Throw Companion'",
      "endsWhen": "The effect duration runs out; expended daily use limit reached",
      "charges": "Unlimited, recharges at dusk"
    },
    "priceReason": "Balanced to provide support without being overpowered, the bracelet's price reflects its utility in aiding both social and combat situations.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T04:39:57.742031+00:00",
    "aiReviewedAt": "2026-07-22T04:39:57.742031+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_friendship_counseling": {
    "id": "equestrian_friendship_counseling",
    "name": "Equestrian Friendship Counseling Session",
    "description": "Equestrian Friendship Counseling Session offers a transformative hour of intense therapy, where you and your steed bond over heartfelt conversations and exercises that heal broken ties. The therapist, a wise and discerning unicorn named Luna, ensures no detail is overlooked in the process, leaving you with a renewed sense of trust and harmony. After a session, not only are minor curses lifted, but you also gain advantage on saving throws against charm effects for the next day, ensuring your equine companion remains loyal to you.",
    "category": "services",
    "price": 210,
    "icon": "💕",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Heal Broken Friendship",
      "Advantage on Saves vs. Charm"
    ],
    "vendor": "equestrian",
    "shippedBy": "Heartfelt Message Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heal Broken Friendship",
        "rules": "This effect cures one minor curse caused by betrayal or broken friendship, such as a horse refusing to obey commands due to hurt feelings."
      },
      {
        "title": "Advantage on Saves vs. Charm",
        "rules": "For the next 24 hours after receiving this service, you gain advantage on saving throws against charm effects, ensuring your steed remains steadfast and true."
      }
    ],
    "levelRequirementReason": "This session is suitable for all levels as it is a foundational step in strengthening bonds between rider and horse.",
    "vendorReason": "The Equestrian Therapy Circle specializes in services that promote the well-being of equine companions, making them the ideal vendor for this item.",
    "shippingDetail": "Delivered with a heartwarming note from Luna, ensuring the recipient feels the genuine care behind the service.",
    "usage": {
      "activation": "Instantaneous upon receiving the session and completing it within an hour.",
      "duration": "24 hours for gaining advantage on saving throws against charm effects.",
      "endsWhen": "The effect expires after 24 hours or if you are charmed for a longer duration.",
      "charges": "Unlimited, as the session is a service provided once."
    },
    "priceReason": "This price reflects the quality and expertise of Equestrian Therapy Circle's services, ensuring it remains accessible to all levels of riders.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T04:39:46.983785+00:00",
    "aiReviewedAt": "2026-07-22T04:39:46.983785+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_harmony_charm": {
    "id": "equestrian_harmony_charm",
    "name": "Element of Harmony Charm",
    "description": "The Element of Harmony Charm is a small, glowing pendant crafted from enchanted crystal and filigreed metal, each one representing an element—earth, air, fire, water, lightning, or healing. It hums with the power of friendship, its light shifting in harmony with the wielder's emotions. This charm not only grants you +2 to Charisma (Persuasion) checks but also allows you to cast 'Calm Emotions' centered on yourself once per long rest, restoring calm and balance within your heart.",
    "category": "equipment",
    "price": 760,
    "icon": "💎",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Charisma Boost",
      "Self-Centered Calm Emotions"
    ],
    "vendor": "Equestrian",
    "shippedBy": "Rainbow-Colored Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "Gain +2 to Charisma (Persuasion) checks. This effect is always active as long as you wear the charm."
      },
      {
        "title": "Self-Centered Calm Emotions",
        "rules": "Once per long rest, cast 'Calm Emotions' centered on yourself at will. The spell has a range of touch and requires no components or ritual casting. You can use this ability once per short or long rest."
      }
    ],
    "levelRequirementReason": "The charm's power is accessible to all, as it channels the universal force of harmony.",
    "vendorReason": "Equestria is known for its balance and harmony, making them a fitting vendor for such a magical artifact.",
    "shippingDetail": "The charm arrives in a box that glows softly with the same hues as the Elements of Harmony pendant itself.",
    "usage": {
      "activation": "Passive effect and once per long rest ability",
      "duration": "Instantaneous; Calm Emotions lasts for up to 1 minute, or until the spell ends early",
      "endsWhen": "After casting 'Calm Emotions', it ends when the duration expires or you cast another spell of 2nd level or lower on yourself.",
      "charges": "Unlimited"
    },
    "priceReason": "The charm's balanced price reflects its utility in both social and combat situations, making it a versatile companion for any adventurer.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T19:26:31.214069+00:00",
    "aiReviewedAt": "2026-07-22T19:26:31.214069+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_hoof_shoes": {
    "id": "equestrian_hoof_shoes",
    "name": "Equestrian Hoof Shoes",
    "description": "Equestrian Hoof Shoes are meticulously crafted horseshoes that enhance a mount's agility and calmness. They increase a mount’s speed by ten feet and grant advantage on Animal Handling checks, making them indispensable for riders seeking swift and harmonious steeds. The soothing whinny emitted calms beasts within 30 feet, compelling them to remain passive with a successful DC 12 Wisdom saving throw; it does not affect good-aligned creatures.",
    "category": "equipment",
    "price": 760,
    "icon": "🐎",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Speed Boost",
      "Soothing Whinny"
    ],
    "vendor": "equestrian",
    "shippedBy": "Pony Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "Activates on wearing the horseshoes. The mount gains +10 feet in speed and advantage on Animal Handling checks. This effect is passive as long as the horseshoes are worn."
      },
      {
        "title": "Soothing Whinny",
        "rules": "Activates when a calm spell or similar effect is cast within 30 feet, emitting a soothing sound that compels beasts to make a DC 12 Wisdom saving throw. On failure, the beast remains passive for 1 minute; this effect has no impact on good-aligned creatures."
      }
    ],
    "levelRequirementReason": "Requires character level 6 to handle and benefit from these shoes due to their intricate craftsmanship.",
    "vendorReason": "Equestrian specializes in equine-related items, making them the ideal vendor for Equestrian Hoof Shoes.",
    "shippingDetail": "Ships via Pony Express with a guaranteed delivery within three days of purchase.",
    "usage": {
      "activation": "Passive while worn; requires no action to activate",
      "duration": "Active as long as the horseshoes are worn on a mount",
      "endsWhen": "Exhausted after extended use for an hour, recharges upon removal and rest",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, these horseshoes are priced fairly considering their unique benefits to mounts and the time it takes for master blacksmiths to craft them.",
    "priceOriginal": 15800,
    "priceReviewedAt": "2026-07-22T04:39:50.505948+00:00",
    "aiReviewedAt": "2026-07-22T04:39:50.505948+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_hooficure_premium": {
    "id": "equestrian_hooficure_premium",
    "name": "Equestrian Hooficure (Premium)",
    "description": "The Equestrian Hooficure (Premium) is a delicate, polished set of horseshoes crafted from gleaming starstone and enchanted by the master artisans of Ponyville Spa. These shoes not only protect hooves but also enhance their wearer's balance and speed, making them ideal for any equine adventurer. Once applied, they grant a week’s immunity to difficult terrain caused by mud or ice, while also boosting movement speed by 5 feet for 24 hours post-treatment.",
    "price": 210,
    "icon": "🦄",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Immunity to Mud/Ice Terrain",
      "Boosted Speed"
    ],
    "vendor": "equestrian_beauty_parlor",
    "shippedBy": "Swift Pony Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Mud/Ice Terrain",
        "rules": "When the Equestrian Hooficure (Premium) is applied, the wearer gains immunity to difficult terrain caused by mud or ice for a week. This effect does not require an action and lasts until it expires."
      },
      {
        "title": "Boosted Speed",
        "rules": "For 24 hours after the application of the Hooficure (Premium), the wearer's movement speed is increased by 5 feet. This enhancement can be used once per day, and it requires a successful DC 13 Constitution save to avoid overheating."
      }
    ],
    "levelRequirementReason": "The Equestrian Hooficure (Premium) is designed for adventurers of all levels but especially those who need the extra boost in speed and terrain immunity.",
    "vendorReason": "As a premier establishment in equine beauty, the Equestrian Beauty Parlor specializes in enhancing the well-being and performance of their patrons' hooves.",
    "shippingDetail": "Ships via Swift Pony Courier Service within 3 days, ensuring your premium Hooficure arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous when applied by a master artisan at the Equestrian Beauty Parlor.",
      "duration": "1 week immunity to mud/ice terrain; 24 hours of increased speed.",
      "endsWhen": "Expires after the stated duration or upon removal, whichever comes first.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Equestrian Hooficure (Premium) is priced at 1000 XP due to its unique enchantments and the high-quality materials used in its creation, making it a valuable asset for any equine adventurer.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T04:40:16.602030+00:00",
    "aiReviewedAt": "2026-07-22T04:40:16.602030+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_recipe_friendship_casserole": {
    "id": "equestrian_recipe_friendship_casserole",
    "name": "Recipe: Equestrian Friendship Casserole",
    "description": "A handwritten recipe for Equestrian Friendship Casserole, its parchment yellowed with age. The casserole tastes sweeter and more nourishing when shared among friends, its flavors a testament to communal joy. Made by the Equestrian Community Kitchen, this dish brings people together, fostering bonds that are as strong as the friendship it celebrates. If not shared, the casserole is just an ordinary meal with no special effects, but eating alone leaves you feeling lonely and slightly less resilient.",
    "price": 210,
    "icon": "📜",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Shared Meal Boost",
      "Loneliness Penalty"
    ],
    "vendor": "equestrian",
    "shippedBy": "Heartfelt Message",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shared Meal Boost",
        "rules": "When shared with one ally, both participants gain 1d6 temporary hit points. This effect lasts for the duration of the meal and requires direct sharing (e.g., passing the dish or eating from the same serving)."
      },
      {
        "title": "Loneliness Penalty",
        "rules": "If eaten alone, the eater must make a Charisma saving throw (DC 12) to avoid feeling lonely, which imposes disadvantage on all Charisma checks for that day. This effect persists until another meal is shared."
      }
    ],
    "levelRequirementReason": "All adventurers can benefit from the camaraderie and healing effects of this dish.",
    "vendorReason": "The Equestrian Community Kitchen is well-known for its community-focused meals that bring people together.",
    "shippingDetail": "Delivered with a warm, personalized message from the community kitchen to ensure it arrives with a heartwarming sentiment.",
    "usage": {
      "activation": "Shared meal with an ally. Eaten alone imposes disadvantage on Charisma checks until another meal is shared.",
      "duration": "Instantaneous effect when eaten; lasts for the duration of the meal.",
      "endsWhen": "Eaten by two participants or left uneaten and alone.",
      "charges": "Unlimited"
    },
    "priceReason": "The item is priced lower than the original to reflect its community-focused utility rather than combat prowess.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T04:40:04.551411+00:00",
    "aiReviewedAt": "2026-07-22T04:40:04.551411+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_royal_sash": {
    "id": "equestrian_royal_sash",
    "name": "Equestrian Royal Sash",
    "description": "The Equestrian Royal Sash, a crimson silk ribbon adorned with golden filigree, whispers of ancient equine magic. It is said to have been crafted by Canterlot Couturiers during a golden age of harmony, when ponies and creatures alike found peace under the crown. This sash not only symbolizes friendship but also grants its wearer unmatched persuasion skills with animals and ponies. In times of strife, it can soothe restless spirits, calming an agitated creature through a simple touch.",
    "price": 1500,
    "icon": "🎀",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Persuasive Bond",
      "Calm Agitation"
    ],
    "vendor": "equestrian_palace",
    "shippedBy": "Pegasus Parcel Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Persuasive Bond",
        "rules": "When used as part of Charisma (Persuasion) checks with animals or ponies, the user gains advantage on such rolls. This effect is usable once per long rest."
      },
      {
        "title": "Calm Agitation",
        "rules": "By touching an agitated creature with the sash, the wearer can attempt a Wisdom (Medicine) check with a DC of 12 to soothe the creature. The effect lasts for 1 hour or until the target no longer needs calming. This use counts as one of the user's daily spell slots."
      }
    ],
    "levelRequirementReason": "The sash is intricately woven with ancient equine magic, requiring a high degree of skill to wield effectively.",
    "vendorReason": "As the official purveyor of royal regalia, Equestrian Palace ensures only those of noble birth or proven worth can own such a symbol of harmony and friendship.",
    "shippingDetail": "Delivered by swift Pegasi who ensure the sash arrives in perfect condition, no matter the weather.",
    "usage": {
      "activation": "As an action or bonus action (Persuasive Bond), or as a reaction (Calm Agitation).",
      "duration": "Instantaneous; Persuasive Bond is per long rest. Calm Agitation lasts for 1 hour or until target no longer needs calming.",
      "endsWhen": "The effect ends when the duration expires, the target no longer requires it, or a successful Wisdom save (DC 12) is made by the agitated creature.",
      "charges": "Unlimited daily uses"
    },
    "priceReason": "Crafted with ancient equine magic and gold filigree, this sash retains its value even after numerous uses.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T04:40:26.420230+00:00",
    "aiReviewedAt": "2026-07-22T04:40:26.420230+00:00",
    "aiReviewVersion": 1
  },
  "eternal_fireplace": {
    "id": "eternal_fireplace",
    "name": "Eternal Fireplace",
    "description": "The Eternal Fireplace is a stone-lined hearth whose flames burn with an ethereal, flickering light that never dims. It crackles softly and casts a warm glow upon all within its embrace, granting respite from the cold without the need for fuel or embers. This fireplace can be used to send messages through the flames in a burst of sparks, decipherable only by those close enough to witness it. Legends speak of its forge-made core, imbued with ancient magic that has kept it alight since time immemorial.",
    "category": "premium",
    "price": 22000,
    "icon": "🔥",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Warmth Without Fuel",
      "Flame Message"
    ],
    "vendor": "steamworks",
    "shippedBy": "Stone Hearth Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Warmth Without Fuel",
        "rules": "The Eternal Fireplace grants a +2 bonus to all saving throws made by creatures within 10 feet of it. This effect is passive and lasts until the fireplace is extinguished or destroyed."
      },
      {
        "title": "Flame Message",
        "rules": "As an action, the user can send a short message through the flames visible only to those within 30 feet who are proficient in Insight (Wisdom saving throw DC of 14). The message lasts for one minute and is lost if the fireplace goes out."
      }
    ],
    "levelRequirementReason": "The complexity of maintaining a fire that burns without fuel requires a certain mastery over arcane or martial disciplines.",
    "vendorReason": "Steamworks, with its expertise in crafting and magic, is entrusted by the legendary forger to sell this unique creation.",
    "shippingDetail": "Ships via Stone Hearth Express; delivery takes one week from the forge city of Ironstone.",
    "usage": {
      "activation": "Passive effect. Requires no action, bonus action, or reaction to activate.",
      "duration": "Until the fireplace is extinguished or destroyed.",
      "endsWhen": "The fireplace goes out or is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Considering its legendary status and unique properties, a price of 1000 XP reflects the value it holds.",
    "priceOriginal": 200000,
    "priceReviewedAt": "2026-07-22T04:40:43.517648+00:00",
    "aiReviewedAt": "2026-07-22T04:40:43.517648+00:00",
    "aiReviewVersion": 1
  },
  "eternal_fountain": {
    "id": "eternal_fountain",
    "name": "Eternal Fountain",
    "description": "The Eternal Fountain stands as a testament to timeless magic, its stone basin shimmering with an ethereal glow that never fades. The water within is said to be drawn from ancient springs that have flowed unceasingly since the world was young. A sip of this enchanted liquid heals 1d4 hit points, and the fountain itself seems immune to the ravages of time and weather, a marvel crafted by long-forgotten wizards.",
    "category": "premium",
    "price": 22000,
    "icon": "⛲",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Healing Sips",
      "Timeless Resilience"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Stone Basin Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Sips",
        "rules": "A creature can take a drink from the fountain as an action, regaining 1d4 hit points. This effect has no cooldown and can be used multiple times per day."
      },
      {
        "title": "Timeless Resilience",
        "rules": "The fountain is immune to all forms of damage and cannot be destroyed or dismantled by any means short of a Wish spell. It also has an indefinite duration, remaining in perpetuity unless such a powerful magical effect intervenes."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurer can appreciate the value of a fountain that heals wounds and stands unyielding against time's passage.",
    "vendorReason": "The Gilded Gryphon, known for its vast collection of legendary artifacts, naturally stocks such an iconic piece of magical history.",
    "shippingDetail": "Ships via Stone Basin Express, ensuring safe and swift delivery to your doorstep.",
    "usage": {
      "activation": "A creature takes a drink from the fountain as an action.",
      "duration": "Instantaneous; effect is limited only by its indefinite nature or intervention of powerful magic.",
      "endsWhen": "The fountain's effects are nullified by a Wish spell or similar effect.",
      "charges": "Unlimited"
    },
    "priceReason": "For an item that offers both healing and timeless resilience, the price is set at a level that reflects its legendary status without being prohibitive.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-22T04:40:58.786661+00:00",
    "aiReviewedAt": "2026-07-22T04:40:58.786661+00:00",
    "aiReviewVersion": 1
  },
  "existence_absorption_staff": {
    "id": "existence_absorption_staff",
    "name": "Existence Absorption Staff",
    "description": "The Existence Absorption Staff is a gnarled wooden staff imbued with the dark essence of The Devourer, its surface etched with arcane symbols that shimmer faintly in the dark. When you touch something with it, that entity's very existence dissolves into nothingness, leaving no trace behind. You gain all its knowledge, powers, and memories permanently. Crafted by The Devourer itself, this staff is a testament to the god's insatiable hunger for reality.",
    "price": 230000,
    "icon": "🪄",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Absorb Existence",
      "Gather Knowledge"
    ],
    "vendor": "existence_eaters",
    "shippedBy": "Void Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Absorb Existence",
        "rules": "Touching an object or creature with the staff causes it to cease existing, as if it never did. This effect is instantaneous and has no save DC."
      },
      {
        "title": "Gather Knowledge",
        "rules": "Upon absorbing an existence, you gain all of its knowledge, powers, and memories permanently. You can use this ability once per short rest."
      }
    ],
    "levelRequirementReason": "Even a novice wizard must demonstrate sufficient understanding to wield such a powerful tool responsibly.",
    "vendorReason": "Existence Eaters specialize in the dark arts and are known for their collection of artifacts that manipulate reality.",
    "shippingDetail": "Ships via the Void Express, arriving within a week but at great risk to the courier due to the staff's unstable nature.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The absorbed existence is gone; once per short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "While powerful, the staff requires great care and understanding to use without causing unintended consequences.",
    "priceOriginal": 85000000,
    "priceReviewedAt": "2026-07-22T04:40:53.349814+00:00",
    "aiReviewedAt": "2026-07-22T04:40:53.349814+00:00",
    "aiReviewVersion": 1
  },
  "existence_debt_collector": {
    "id": "existence_debt_collector",
    "name": "Existence Debt Collector",
    "description": "The Existence Debt Collector is a compact, glowing device with intricate engravings that shimmer like stars. Crafted by The Debt Collector from rare materials collected across the multiverse, it allows you to call upon debts owed by beings whose existence you've shaped or preserved. Once activated, it can demand obedience from any creature you created or saved, and its power extends beyond dimensions, ensuring your commands are followed with precision.",
    "category": "services",
    "price": 230000,
    "icon": "💰",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Command Obedience",
      "Multiversal Reach"
    ],
    "vendor": "existence_accounting",
    "shippedBy": "Karmic Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Command Obedience",
        "rules": "Activate as a bonus action. Choose one creature you created or saved within 30 feet. That creature must make a Charisma saving throw (DC 15). On a failed save, the target is compelled to obey your command for up to 1 hour. The target can use its reaction to resist this effect once per day."
      },
      {
        "title": "Multiversal Reach",
        "rules": "This device allows you to call upon debts from any dimension within range (30 feet). Once used, it must recharge for 8 hours before it can be used again. The power extends its reach across the multiverse, ensuring no debt goes uncollected."
      }
    ],
    "levelRequirementReason": "This device requires minimal magical energy to activate but is powerful enough that even low-level characters can wield it effectively.",
    "vendorReason": "Existence Accounting specializes in tracking and settling debts across the multiverse, making them the perfect vendor for such an item.",
    "shippingDetail": "Delivered with utmost care by Karmic Delivery, ensuring the device arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 hour or until resisted",
      "endsWhen": "The target successfully resists the command or the effect expires",
      "charges": "Recharges after 8 hours of rest"
    },
    "priceReason": "This balanced price reflects its low-level requirement and the item's limited recharge time, ensuring it remains a fair and powerful tool for players.",
    "priceOriginal": 65000000,
    "priceReviewedAt": "2026-07-22T04:40:41.444679+00:00",
    "aiReviewedAt": "2026-07-22T04:40:41.444679+00:00",
    "aiReviewVersion": 1
  },
  "existence_insurance_policy": {
    "id": "existence_insurance_policy",
    "name": "Existence Insurance Policy",
    "description": "The Existence Insurance Policy is a shimmering, glowing document bound in iridescent leather. Crafted by The Insurance Adjuster using ancient runes and celestial sigils, it ensures that if you cease to exist, you are immediately reincarnated with twice your former power. This policy can be claimed only once per campaign, ensuring its rarity. Should the worst happen, you will return not just whole but stronger—reborn into a more powerful form.",
    "category": "services",
    "price": 240000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Rebirth with Twice Your Power",
      "One-Time Claim Per Campaign"
    ],
    "vendor": "existence_insurance",
    "shippedBy": "Reincarnation Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rebirth with Twice Your Power",
        "rules": "When you are erased from existence, you are immediately reincarnated at your previous level +2. This effect is instantaneous and cannot be resisted."
      },
      {
        "title": "One-Time Claim Per Campaign",
        "rules": "You can only use this policy once per campaign. After its first activation, it ceases to function and must be replaced by a new document from The Insurance Adjuster."
      }
    ],
    "levelRequirementReason": "This policy is designed for adventurers of any level to have the option of securing their existence.",
    "vendorReason": "The Insurance Adjuster specializes in crafting documents that safeguard the most precious aspect of an adventurer's life: their very existence.",
    "shippingDetail": "Delivered by a celestial courier, this service ensures swift and reliable delivery to any plane of existence.",
    "usage": {
      "activation": "Instantaneous upon the loss of all hit points or any other condition that erases your existence.",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends immediately after you are reincarnated with twice your previous power. The policy can only be used once per campaign.",
      "charges": "Unlimited, but one-time use per campaign."
    },
    "priceReason": "This item is balanced at 1000 XP due to its rarity and the unique value it provides in ensuring a character's continued existence throughout their campaign.",
    "priceOriginal": 80000000,
    "priceReviewedAt": "2026-07-22T19:26:28.934948+00:00",
    "aiReviewedAt": "2026-07-22T19:26:28.934948+00:00",
    "aiReviewVersion": 1
  },
  "exponential_growth_coin": {
    "id": "exponential_growth_coin",
    "name": "Exponential Growth Coin",
    "description": "The Exponential Growth Coin is a shimmering gold coin with etched symbols that glow faintly. It was crafted by The Mathematician, whose name is whispered in hushed tones of awe and fear. When placed in your vault, it multiplies the total value of all coins within exponentially each day—doubling every hour for 24 hours before resetting. After a month, the accumulated wealth becomes so vast that it threatens to destabilize economies. Once activated, it requires careful monitoring or it risks causing catastrophic financial collapse.",
    "category": "consumables",
    "price": 240000,
    "icon": "🪙",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Exponential Vault Growth",
      "Economic Instability"
    ],
    "vendor": "infinite_wealth",
    "shippedBy": "Compound Interest",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Exponential Vault Growth",
        "rules": "Activates as a bonus action. The value of all gold coins in the vault doubles every hour for 24 hours, after which it resets to its original value."
      },
      {
        "title": "Economic Instability",
        "rules": "After 30 days of continuous growth, the accumulated wealth within the vault could theoretically exceed the number of atoms in the universe. This effect is limited by the DM and may result in a catastrophic collapse of local economies if not managed carefully."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurer can recognize the potential value and danger of such an item.",
    "vendorReason": "Infinite Wealth is known for its unique and potentially world-altering items, making it the only place to find this coin.",
    "shippingDetail": "The coin must be couriered personally by Compound Interest due to its volatile nature and potential impact on local economies.",
    "usage": {
      "activation": "Bonus action",
      "duration": "24 hours, resetting daily",
      "endsWhen": "After 30 days of continuous growth or if the vault exceeds a predefined economic limit set by the DM",
      "charges": "Unlimited, but must be reset after each cycle"
    },
    "priceReason": "The coin's potential to exponentially increase wealth makes it valuable even at this reduced price.",
    "priceOriginal": 25000000,
    "priceReviewedAt": "2026-07-22T04:40:58.673137+00:00",
    "aiReviewedAt": "2026-07-22T04:40:58.673137+00:00",
    "aiReviewVersion": 1
  },
  "fabric_of_morning": {
    "id": "fabric_of_morning",
    "name": "Fabric of Morning",
    "description": "The Fabric of Morning is a shimmering bolt of cloth spun from the very dawn. Its weave glows with an ethereal light, and when unfurled, it banishes gloom over a vast area, illuminating all within its reach for a full day. Legend whispers that this fabric holds the essence of morning, and those who drape it over a fallen comrade may see them rise again, though only fate can decide their fate. The cloth hums softly with the song of awakening lightbeasts, inviting them to dance around you as dawn breaks.",
    "category": "premium",
    "price": 240000,
    "icon": "🌅",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Unfurl: Banish Gloom",
      "Resurrection Attempt"
    ],
    "vendor": "lunar_auction",
    "shippedBy": "Solar Wind Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Unfurl: Banish Gloom",
        "rules": "As a bonus action, the user unfurls the Fabric of Morning. It creates an area of bright daylight for 24 hours within a 50-foot radius centered on the user. Any creatures in the area of gloom or darkness are blinded until the effect ends."
      },
      {
        "title": "Resurrection Attempt",
        "rules": "The user may drape the Fabric over a dead body during a short rest to attempt to stabilize and resurrect the deceased with 1 hit point (DM roll). The user must succeed on a DC 20 Wisdom (Medicine) check. If successful, there is a 50% chance that the target will be revived."
      }
    ],
    "levelRequirementReason": "The complex magic and celestial essence within require an adept practitioner to wield it effectively.",
    "vendorReason": "Lunar Auctions specializes in rare, powerful artifacts like the Fabric of Morning, known for their ethereal beauty and celestial properties.",
    "shippingDetail": "The Solar Wind Courier ensures safe delivery via a high-altitude courier service. The package is delivered within one week of purchase.",
    "usage": {
      "activation": "Bonus action to unfurl or drape over a body.",
      "duration": "24 hours for Unfurl; instantaneous for Resurrection Attempt.",
      "endsWhen": "The effect ends when the area of daylight dissipates or the resurrection attempt fails.",
      "charges": "Unlimited uses, but only one resurrection attempt per day."
    },
    "priceReason": "Balanced at this price to reflect its rare celestial essence and powerful effects.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-22T04:41:11.317174+00:00",
    "aiReviewedAt": "2026-07-22T04:41:11.317174+00:00",
    "aiReviewVersion": 1
  },
  "faction_airship_plating": {
    "id": "faction_airship_plating",
    "name": "Adamantite Hull Plating",
    "description": "The Adamantite Hull Plating is a gleaming, impenetrable shield that fortifies the Vigilance's hull against the fiercest storms and most ruthless airship duels. Crafted from the rarest adamantite, it repels damage with unyielding resilience, and its weighty plating allows the ship to ram other vessels with impervious strength, leaving none undamaged. This legendary armor ensures that the crew not only survives but thrives in perilous crashes, significantly boosting their survival rate.",
    "category": "faction",
    "price": 760,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Unbreakable Hull",
      "Ram Without Fear"
    ],
    "vendor": "gilded_gryphon",
    "factionBonus": {
      "defense": 40,
      "combatReadiness": 10
    },
    "effectDetails": [
      {
        "title": "Unbreakable Hull",
        "rules": "When the Vigilance is hit by damage equal to or below 15, it is fully negated. This effect can be used once per short rest."
      },
      {
        "title": "Ram Without Fear",
        "rules": "The Adamantite Hull Plating allows the Vigilance to ram other airships without taking any damage itself. This ability can be used twice per long rest, with a successful Strength (Athletics) check at DC 20."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "The Adamantite Hull Plating requires the user to have reached at least level 1 to ensure they are experienced enough in piloting and ship management.",
    "vendorReason": "The Gilded Gryphon, as a prestigious supplier of rare airship parts, offers this exceptional plating for its most trusted customers.",
    "shippedBy": "Swift Wind Courier Service",
    "shippingDetail": "Delivered within three days with priority handling and insurance included.",
    "usage": {
      "activation": "Passive effect; activated upon application to the Vigilance's hull.",
      "duration": "Instantaneous, lasts until the next short or long rest, as applicable.",
      "endsWhen": "The plating is removed from the ship or the user completes a short rest.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This price reflects the cost of adamantite and the intricate forging process, providing significant value to the Vigilance's crew.",
    "priceOriginal": 280000,
    "priceReviewedAt": "2026-07-22T04:41:27.961313+00:00",
    "aiReviewedAt": "2026-07-22T04:41:27.961313+00:00",
    "aiReviewVersion": 1
  },
  "faction_ally_summoning": {
    "id": "faction_ally_summoning",
    "name": "Faction Ally Summoning",
    "description": "The Faction Ally Summoning Card allows you to call upon a powerful, loyal ally from one of the realm's most influential factions for up to an hour. The summoned creature is fully equipped and ready to fight by your side, but be wary—its loyalties are complex, and it may demand payment or favors in return. After its service, the faction's reputation gains +30, solidifying its bond with you.",
    "category": "faction",
    "price": 22000,
    "icon": "🤝",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Summon a powerful ally for combat",
      "Faction reputation increases"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Alliance Scroll",
    "levelRequirement": 10,
    "factionBonus": {
      "combatReadiness": 50
    },
    "effectDetails": [
      {
        "title": "Ally Summoning",
        "rules": "Activate as an action to summon a CR 10+ creature. The summoned ally fights by your side until the end of the battle or until dismissed. If dismissed, it returns to its faction without further obligation."
      },
      {
        "title": "Reputation Boost",
        "rules": "At the conclusion of the battle, your chosen faction's reputation increases by +30 for one week."
      }
    ],
    "levelRequirementReason": "Summoning a powerful ally requires significant skill and experience.",
    "vendorReason": "The Gilded Gryphon has exclusive access to rare and powerful artifacts like the Faction Ally Summoning Card.",
    "shippingDetail": "Ships via Alliance Scroll, a trusted courier known for its reliability. Delivery takes one week within the realm.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "Until dismissed or until the end of the battle.",
      "endsWhen": "The summoned ally is dismissed or the battle ends.",
      "charges": "Unlimited, but only one summoning per week."
    },
    "priceReason": "Balanced at 1000 XP to ensure it remains a valuable but not overpowered resource for players of all levels.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-22T04:41:38.053798+00:00",
    "aiReviewedAt": "2026-07-22T04:41:38.053798+00:00",
    "aiReviewVersion": 1
  },
  "faction_barricades": {
    "id": "faction_barricades",
    "name": "Deployable Barricades",
    "description": "The Deployable Barricades are an ingenious creation of Wardens, forged from scavenged metal and reinforced wood. These sturdy barriers can be erected in minutes, providing impenetrable cover to your campsite against marauders and raiders. Crafted by the hands of Valley Forge's most skilled blacksmiths, these barricades not only increase your base defense rating but also provide a safe haven during pitched battles. The Wardens swear by their resilience, knowing that they can turn any open ground into an impregnable stronghold.",
    "category": "faction",
    "price": 39,
    "icon": "🚧",
    "stock": 1,
    "rarity": "common",
    "effects": [
      "Increased Defense Rating",
      "Campsite Cover"
    ],
    "vendor": "valley_trading_post",
    "factionBonus": {
      "defense": 12
    },
    "effectDetails": [
      {
        "title": "Increased Defense Rating",
        "rules": "When the Deployable Barricades are set up, they grant a +2 bonus to your base defense rating. This effect lasts for 1 hour or until the barricades are dismantled."
      },
      {
        "title": "Campsite Cover",
        "rules": "The barricades provide cover to all allies within a 5-foot radius while they are in place, granting advantage on saving throws and Dexterity (Stealth) checks made within that area. The cover effect ends when the barricades are dismantled or destroyed."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "This item is designed for use by adventurers of any level who need immediate protection in a hostile environment.",
    "vendorReason": "The Valley Trading Post, known for its robust supply of equipment and tools favored by Wardens, regularly stocks the Deployable Barricades.",
    "shippedBy": "Horned Messenger Hawks",
    "shippingDetail": "Delivered swiftly within a day by the swift Horned Messenger Hawks, ensuring that your camp is prepared long before raiders arrive.",
    "usage": {
      "activation": "Instantaneous setup upon arrival at your campsite.",
      "duration": "1 hour or until dismantled.",
      "endsWhen": "Dismantling or destruction of the barricades.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The balanced XP price reflects the item's utility and ease of use, making it a staple for adventurers facing immediate threats in the field.",
    "priceOriginal": 42000,
    "priceReviewedAt": "2026-07-22T19:39:15.670170+00:00",
    "aiReviewedAt": "2026-07-22T19:39:15.670170+00:00",
    "aiReviewVersion": 1
  },
  "faction_bunk_beds": {
    "id": "faction_bunk_beds",
    "name": "Reinforced Bunk Beds",
    "description": "The Reinforced Bunk Beds are sturdy and compact, crafted from seasoned oak and reinforced with iron bands. They provide a stable sleep surface that toads greatly prefer over hammocks, significantly improving their rest quality. Toads who spend at least one night in these beds recover hit points faster during long rests, and the gentle creaking of the wood helps reduce crankiness by 50% for up to an hour after use.",
    "category": "faction",
    "price": 220,
    "icon": "🛏️",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Faster Rest Recovery",
      "Reduced Crankiness"
    ],
    "vendor": "faction_quartermaster",
    "factionBonus": {
      "morale": 5,
      "combatReadiness": 2
    },
    "effectDetails": [
      {
        "title": "Faster Rest Recovery",
        "rules": "Toads who spend a long rest in the Reinforced Bunk Beds recover hit points at double their usual rate. This effect lasts for one long rest and can be used once per day."
      },
      {
        "title": "Reduced Crankiness",
        "rules": "For up to an hour after using the beds, toads experience a 50% reduction in crankiness. This effect is instantaneous upon use but cannot be extended or stacked."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "Toads of all levels can benefit from the improved rest quality and reduced crankiness provided by these beds.",
    "vendorReason": "The faction quartermaster ensures that toads have access to essential gear, including items that enhance their well-being and productivity.",
    "shippedBy": "Swift Toad Courier Service",
    "shippingDetail": "Ships within three days of purchase; delivery is free for toads in the faction's territory.",
    "usage": {
      "activation": "Passive effect upon use during a long rest or immediate benefit on first contact after arrival.",
      "duration": "One long rest and up to an hour, respectively.",
      "endsWhen": "The effects end naturally at the specified durations.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This price reflects the high quality of materials used and the significant benefits provided for toads in improving their well-being.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T04:42:18.916104+00:00",
    "aiReviewedAt": "2026-07-22T04:42:18.916104+00:00",
    "aiReviewVersion": 1
  },
  "faction_coffee_machine": {
    "id": "faction_coffee_machine",
    "name": "Industrial Coffee Machine",
    "description": "The Industrial Coffee Machine hums like a loyal friend, its polished metal surface gleaming under the workshop lights. This high-grade caffeine supply station is more than just a machine—it's a beacon of hope for the Vigilance crew, boosting morale and fueling their efforts in repairs with every cup poured. Crew members who partake feel invigorated, working 10% faster on any task, while the machine itself exudes a sense of reliability that only comes from years of faithful service.",
    "category": "faction",
    "price": 39,
    "icon": "☕",
    "stock": 1,
    "rarity": "common",
    "effects": [
      "+2 Morale",
      "Crew works 10% faster on repairs"
    ],
    "vendor": "faction_quartermaster",
    "shippedBy": "Kitchen Installer",
    "levelRequirement": 1,
    "factionBonus": {
      "morale": 2
    },
    "effectDetails": [
      {
        "title": "+2 Morale",
        "rules": "When a crew member drinks coffee from the Industrial Coffee Machine, they gain +2 to their morale score for 1 hour. This effect can be used once per day."
      },
      {
        "title": "Crew works 10% faster on repairs",
        "rules": "For 8 hours after using the machine, any crew member working on repairs gains a +10 bonus to their Repair checks. This effect is limited to one use every three days."
      }
    ],
    "levelRequirementReason": "The Industrial Coffee Machine requires no special level, as it benefits all members of the Vigilance crew equally.",
    "vendorReason": "As the quartermaster is responsible for supplies and morale, they naturally stock items that boost both.",
    "shippingDetail": "The machine arrives fully assembled but requires a local Kitchen Installer to calibrate it. This service is included in the purchase price.",
    "usage": {
      "activation": "Active use: Crew members must drink coffee from the machine once per day to gain its effects.",
      "duration": "Instantaneous effect, lasting for the specified duration after each use.",
      "endsWhen": "The effects end when the crew member takes no further action with the machine or completes their daily task using it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced XP price reflects the machine's utility and importance to the crew, providing morale boosts without overpowered effects.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-22T04:42:20.970149+00:00",
    "aiReviewedAt": "2026-07-22T04:42:20.970149+00:00",
    "aiReviewVersion": 1
  },
  "faction_diplomatic_envoys": {
    "id": "faction_diplomatic_envoys",
    "name": "Diplomatic Envoys",
    "description": "Diplomatic Envoys are a sumptuous ensemble of attire and gifts, carefully crafted to establish and maintain alliances between warring factions. The garments are made from the finest silk and brocade adorned with intricate embroidery that tells tales of peace. These envoys reduce neutrality to friendship and open previously closed trade routes. With every successful mission, you not only mend relations but also earn the trust and gratitude of those you represent.",
    "category": "faction",
    "price": 760,
    "icon": "🤝",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Establish Friendship",
      "Open Trade Routes"
    ],
    "vendor": "toad_town_market",
    "factionBonus": {
      "diplomacy": 20
    },
    "effectDetails": [
      {
        "title": "Establish Friendship",
        "rules": "When worn in a diplomatic meeting with a neutral faction, this ensemble reduces the target's disposition towards you by an amount equal to your Charisma modifier (minimum -2). The effect lasts until the end of the next long rest."
      },
      {
        "title": "Open Trade Routes",
        "rules": "Upon successful completion of a diplomatic mission using these envoys, all trade routes between your faction and the neutral faction are opened for a period of 1 month. This effect can be used once per long rest."
      }
    ],
    "levelRequirement": 3,
    "levelRequirementReason": "This item requires a minimum character level of 3 to ensure that the user has sufficient social and combat capabilities.",
    "vendorReason": "Toad Town Market is renowned for its connections with various factions, making them the ideal vendor for such diplomatic tools.",
    "shippedBy": "Swift Courier of the Sky",
    "shippingDetail": "Delivered by swift aerial couriers within a week, ensuring timely arrival for crucial missions.",
    "usage": {
      "activation": "Worn during diplomatic meetings and completed missions.",
      "duration": "Instantaneous; lasts until the end of the next long rest.",
      "endsWhen": "The effect ends when you complete your mission or at the start of a new long rest.",
      "charges": "Unlimited, but only one use per long rest."
    },
    "priceReason": "This price reflects the rarity and utility of Diplomatic Envoys, providing significant social benefits without disrupting balance in combat or exploration.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-22T04:42:11.626896+00:00",
    "aiReviewedAt": "2026-07-22T04:42:11.626896+00:00",
    "aiReviewVersion": 1
  },
  "faction_dry_bones_reassembler": {
    "id": "faction_dry_bones_reassembler",
    "name": "Necro-Reassembler V2",
    "description": "The Necro-Reassembler V2 is a faction's automated totem crafted from ancient bone and enchanted with the spirit of a long-dead warlord. Placed on battlefields, it ensures that toads who 'die' in combat return as incorruptible Dry Bones (Undead). These revenants are immune to poison and exhaustion, making them tireless fighters for their faction. The totem also subtly enhances the faction's Durability by 15 points, a crucial boost in prolonged conflicts.",
    "category": "faction",
    "price": 760,
    "icon": "☠️",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Dry Bones Rebirth",
      "Enhanced Faction Durability"
    ],
    "vendor": "valley_trading_post",
    "factionBonus": {
      "combatReadiness": 15,
      "loyalty": 10
    },
    "effectDetails": [
      {
        "title": "Dry Bones Rebirth",
        "rules": "When a toad to the faction 'dies' in combat, it has a 75% chance of transforming into an incorruptible Dry Bone (Undead). The undead creature is immune to poison and exhaustion. This effect is instantaneous upon death."
      },
      {
        "title": "Enhanced Faction Durability",
        "rules": "The faction's 'Durability' increases by 15 points, providing a significant boost in prolonged conflicts. This bonus lasts until the next full moon or until the totem's charges are exhausted."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "Basic combatants can operate and utilize the Necro-Reassembler V2 effectively.",
    "vendorReason": "The Valley Trading Post specializes in battlefield totems, including those that bolster a faction's resilience.",
    "shippedBy": "Gravecarrier Express",
    "shippingDetail": "Ships via Gravecarrier Express; delivery takes two days.",
    "usage": {
      "activation": "Instantaneous upon combat death of a faction member.",
      "duration": "Until the next full moon or until charges are exhausted.",
      "endsWhen": "The totem's charges run out, which occurs after three uses.",
      "charges": "3"
    },
    "priceReason": "Balanced at 1000 XP, the Necro-Reassembler V2 offers a significant strategic advantage without being overpowered.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-22T04:42:27.035409+00:00",
    "aiReviewedAt": "2026-07-22T04:42:27.035409+00:00",
    "aiReviewVersion": 1
  },
  "faction_engine_tuneup": {
    "id": "faction_engine_tuneup",
    "name": "Turbo-Charged Engines",
    "description": "Turbo-Charged Engines are experimental components salvaged from E. Gadd's legendary scrapyard. These engines, forged from ancient alloy and enchanted by the whispers of the wind, drastically reduce airship travel time. Pilots who install these engines can outrun even the swiftest Imperial Cruisers, making them a vital asset in any aerial duel or escape. Crafted with precision, these engines hum with untapped potential, ready to push any craft to its limits.",
    "category": "faction",
    "price": 760,
    "icon": "🚀",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Outrun Imperial Cruisers",
      "50% Travel Time Reduction"
    ],
    "vendor": "gilded_gryphon",
    "factionBonus": {
      "mobility": 25
    },
    "effectDetails": [
      {
        "title": "Outrun Imperial Cruisers",
        "rules": "When installed in an airship, this effect allows the vessel to outpace even the swiftest Imperial Cruisers. This benefit lasts until the engine is removed or replaced with another set of engines."
      },
      {
        "title": "50% Travel Time Reduction",
        "rules": "Activates immediately upon installation and remains in effect for 8 hours per day, up to a maximum of 24 hours over a 7-day period. After this duration, the engine requires a full day of maintenance before use again."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "Basic airship pilots can manage these engines without advanced training.",
    "vendorReason": "The Gilded Gryphon is known for its extensive network of contacts and access to rare parts, including these turbocharged engines.",
    "shippedBy": "Swift Wind Courier Service",
    "shippingDetail": "Ships via the Swift Wind Courier Service, ensuring timely delivery within a week from point of purchase.",
    "usage": {
      "activation": "Instantaneous upon installation in an airship.",
      "duration": "8 hours per day, up to a maximum of 24 hours over a 7-day period.",
      "endsWhen": "After the duration expires or when the engine is removed or replaced.",
      "charges": "Unlimited uses per day within the stated limits."
    },
    "priceReason": "This price reflects the rare nature of the engines and the advanced technology involved in their crafting.",
    "priceOriginal": 90000,
    "priceReviewedAt": "2026-07-22T04:42:43.317944+00:00",
    "aiReviewedAt": "2026-07-22T04:42:43.317944+00:00",
    "aiReviewVersion": 1
  },
  "faction_espionage_network": {
    "id": "faction_espionage_network",
    "name": "Faction Espionage Network",
    "description": "The Faction Espionage Network is a clandestine web of spies, each bound by oaths to your faction's cause. This network can provide you with intelligence on any target once per week, but beware—your spies might slip up and compromise the entire operation if not handled carefully. With their sabotage skills, your enemies may find themselves in dire straits, though the DM will ultimately decide the extent of their success or failure.",
    "category": "faction",
    "price": 22000,
    "icon": "🕵️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Weekly Intelligence",
      "Sabotage and Assassination"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Encrypted Data Slate",
    "levelRequirement": 10,
    "factionBonus": {
      "intelligence": 100
    },
    "effectDetails": [
      {
        "title": "Weekly Intelligence",
        "rules": "Once per week, you can send your spies to gather intelligence on a target. The network reports back within one week with detailed information about the chosen subject."
      },
      {
        "title": "Sabotage and Assassination",
        "rules": "Your spies have the ability to sabotage or assassinate their targets at your discretion. This action requires DM approval, but can drastically alter the course of a campaign. The network's success is unpredictable and may be compromised if not handled with care."
      }
    ],
    "levelRequirementReason": "The complexity and risk involved in managing such an espionage network necessitate at least 10 levels of experience.",
    "vendorReason": "Only the Rogueport Black Market, renowned for its illicit dealings, would dare to trade in such dangerous and powerful items.",
    "shippingDetail": "The network's information is transmitted via an encrypted data slate that arrives sealed and must be decrypted by a spellcaster of at least 5th level before it can be used.",
    "usage": {
      "activation": "Weekly activation, with no set action required; the intelligence is gathered automatically.",
      "duration": "Instantaneous effect upon completion of the task, lasting until your next turn.",
      "endsWhen": "The network's operation ends if compromised or if you lose control over it due to your faction's betrayal or betrayal by an individual spy.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item is priced at 1,000 XP to reflect the significant risk and strategic value of maintaining such a covert operation.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-22T04:42:46.327685+00:00",
    "aiReviewedAt": "2026-07-22T04:42:46.327685+00:00",
    "aiReviewVersion": 1
  },
  "faction_extra_rations": {
    "id": "faction_extra_rations",
    "name": "Emergency Rations",
    "description": "Emergency Rations are dehydrated bundles of hardtack and dried mushrooms. They were crafted by the faction's survival experts, ensuring each bite is a battle-hardened soldier’s last chance to stave off starvation during prolonged sieges or harsh field conditions. These rations taste like dust but provide a burst of energy that keeps you alive another day. A morale boost and defensive edge are immediate bonuses for those who chow down on these life-sustaining treats.",
    "category": "faction",
    "price": 39,
    "icon": "🥫",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Prevents Starvation",
      "Boosts Morale"
    ],
    "vendor": "faction_quartermaster",
    "factionBonus": {
      "morale": 3,
      "defense": 2
    },
    "effectDetails": [
      {
        "title": "Prevents Starvation",
        "rules": "When consumed, this ration grants you advantage on saving throws against starvation and dehydration. It lasts until the end of your next long rest."
      },
      {
        "title": "Boosts Morale",
        "rules": "For 8 hours after consuming these rations, your morale is boosted by +2 to all Charisma (Inspiration) checks and related abilities."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "These emergency rations are simple enough for any adventurer to utilize.",
    "vendorReason": "The quartermaster ensures the troops have what they need, even in dire circumstances.",
    "shippedBy": "swift courier of the faction",
    "shippingDetail": "Delivered within a week by trusted messengers.",
    "usage": {
      "activation": "Instantaneous consumption at will",
      "duration": "Until end of next long rest after consumption",
      "endsWhen": "Upon completion of a long rest or expiration",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for common use, these rations offer significant benefits at an affordable cost.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T04:42:33.097383+00:00",
    "aiReviewedAt": "2026-07-22T04:42:33.097383+00:00",
    "aiReviewVersion": 1
  },
  "faction_flags": {
    "id": "faction_flags",
    "name": "Faction Banners",
    "description": "The Faction Banners are hand-woven silk standards, each one a testament to the Liberated Toad's resilience and unity. Embroidered in vibrant colors, these banners bear the heraldic crest of the faction—a toad standing tall against adversity. They make even the most barren camp feel like home, imbuing a +2 bonus to loyalty checks for those who carry them into battle or share their stories around the fire. These banners are more than mere symbols—they are the heart and soul of the faction's spirit.",
    "category": "faction",
    "price": 39,
    "icon": "🚩",
    "stock": 1,
    "rarity": "common",
    "effects": [
      "+2 Loyalty",
      "Boosts morale in combat"
    ],
    "vendor": "faction_quartermaster",
    "factionBonus": {
      "loyalty": 2
    },
    "effectDetails": [
      {
        "title": "+2 Loyalty",
        "rules": "When a character is within 30 feet of these banners, they gain a +2 bonus to loyalty checks. This effect lasts for the duration of one short rest or until the character willingly ceases to be part of the faction."
      },
      {
        "title": "Boosts morale in combat",
        "rules": "The banners grant advantage on saving throws against fear and panic effects within 60 feet, as well as a +2 bonus to Charisma (Persuasion) checks made to inspire others. This effect lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "Faction members often start their journey with these banners, symbolizing their commitment and loyalty.",
    "vendorReason": "The quartermaster stocks the banners as a key part of the faction's identity and morale-boosting arsenal.",
    "shippedBy": "Swift Courier Service",
    "shippingDetail": "Delivered within one week, with expedited options available for an additional fee.",
    "usage": {
      "activation": "Passive effect upon possession or display in a camp.",
      "duration": "Lasts until the end of your next short or long rest, or until willingly removed from faction service.",
      "endsWhen": "The effect ends when you are no longer considered part of the faction for any reason.",
      "charges": "Unlimited; recharged with each short rest."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its role in boosting morale and fostering unity within the faction.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T19:26:32.054554+00:00",
    "aiReviewedAt": "2026-07-22T19:26:32.054554+00:00",
    "aiReviewVersion": 1
  },
  "faction_flying_fortress": {
    "id": "faction_flying_fortress",
    "name": "Sky Fortress Upgrade",
    "description": "The Sky Fortress Upgrade transforms any faction's base into an unassailable aerial citadel, capable of indefinite flight and orbital bombardment from its skies. This floating fortress looms like a storm cloud in the sky, casting shadows on all who dare to challenge it from below. With its unyielding defenses and mobile siege capabilities, this upgrade is the ultimate symbol of power for any faction seeking dominion over the heavens.",
    "category": "faction",
    "price": 240000,
    "icon": "🏰",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Orbital Bombardment",
      "Unassailable"
    ],
    "vendor": "gilded_gryphon",
    "factionBonus": {
      "mobility": 100,
      "defense": 100,
      "morale": 50
    },
    "effectDetails": [
      {
        "title": "Orbital Bombardment",
        "rules": "As a bonus action, the Sky Fortress can unleash a devastating barrage of fire and debris upon an enemy base. The target must make a DC 20 Dexterity saving throw or be subjected to a 1d6+level force damage and a condition of disorientation for 1 round."
      },
      {
        "title": "Unassailable",
        "rules": "The Sky Fortress is immune to all ground-based attacks, except those from flying creatures. It can hover at any altitude within its range without consuming resources."
      }
    ],
    "levelRequirement": 5,
    "levelRequirementReason": "Requires a faction of significant standing and resources to warrant such an upgrade.",
    "vendorReason": "The Gilded Gryphon, being the premier arms dealer, offers this godly upgrade to factions with the means to defend their territory in the sky.",
    "shippedBy": "Swift Wind Courier Service",
    "shippingDetail": "The Sky Fortress Upgrade is delivered via the Swift Wind Courier Service, which ensures that this massive item arrives swiftly and intact.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (effect lasts until used again)",
      "endsWhen": "Charges are expended or the fortress is destroyed by a powerful force",
      "charges": "5 uses"
    },
    "priceReason": "The cost reflects the massive resources and engineering required to create this aerial citadel.",
    "priceOriginal": 1000000,
    "priceReviewedAt": "2026-07-22T04:43:39.705537+00:00",
    "aiReviewedAt": "2026-07-22T04:43:39.705537+00:00",
    "aiReviewVersion": 1
  },
  "faction_forge_upgrade": {
    "id": "faction_forge_upgrade",
    "name": "Blast Furnace Upgrade",
    "description": "The Blast Furnace Upgrade is a forgeheart core that transforms a simple workshop into an alchemical crucible capable of crafting magical alloys and enchanted armaments. Crafters who wield this upgrade can repair heavy armor as if it were mundane, and the furnace itself produces weapons for their cohorts with a +1 bonus to attack rolls and damage. This upgrade is forged by the Gilded Gryphon faction's master blacksmiths from rare earth metals found deep within the forge caverns of the Ironspire Mountains.",
    "category": "faction",
    "price": 220,
    "icon": "🔥",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Can repair heavy armor",
      "Produces better weapons for cohorts"
    ],
    "vendor": "gilded_gryphon",
    "factionBonus": {
      "combatReadiness": 8,
      "defense": 5
    },
    "effectDetails": [
      {
        "title": "Armor Repair",
        "rules": "This upgrade allows a craft user to repair any piece of heavy armor as if it were mundane. The process requires an hour and the expenditure of 50 XP worth of raw materials, which are included in the purchase price."
      },
      {
        "title": "Weapon Craft Boost",
        "rules": "When crafting weapons for cohorts, this upgrade enhances their quality by +1 to attack rolls and damage. This benefit lasts until a cohort takes damage or the weapon is discarded."
      }
    ],
    "levelRequirement": 2,
    "levelRequirementReason": "Crafters must have at least two levels in a relevant class to effectively utilize the advanced alchemical processes of this upgrade.",
    "vendorReason": "The Gilded Gryphon faction is renowned for its mastery of blacksmithing and alchemy, making them the perfect vendor for such an upgrade.",
    "shippedBy": "Ironspire Express",
    "shippingDetail": "Ships via Ironspire Express with a two-week delivery time; expedited shipping available for an additional cost.",
    "usage": {
      "activation": "Instantaneous activation upon purchase and installation into the workshop.",
      "duration": "Permanent, until the forge is destroyed or the item is removed.",
      "endsWhen": "Destroyed if the forge is dismantled or the upgrade is removed from the workshop.",
      "charges": "Unlimited; no recharging required."
    },
    "priceReason": "The cost reflects the rare metals and expert craftsmanship involved in creating this advanced upgrade, as well as its permanent nature and faction-specific benefits.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-22T04:43:10.496824+00:00",
    "aiReviewedAt": "2026-07-22T04:43:10.496824+00:00",
    "aiReviewVersion": 1
  },
  "faction_fortification": {
    "id": "faction_fortification",
    "name": "Base Fortification Package",
    "description": "The Base Fortification Package is a rare construction kit that enhances your faction's stronghold. Crafted from reinforced stone and enchanted with protective runes, it adds watchtowers and alarm systems to your base. This package ensures that your base has a +25% defense rating against attacks, reducing casualties by 30%. Toads within the vicinity feel safer, bolstering their loyalty by +5%. The kit requires a faction leader of at least level 1 to activate.",
    "category": "faction",
    "price": 760,
    "icon": "🏰",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+25% Defense Rating",
      "Reduces Casualties by 30%"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Construction Crew Dispatched",
    "levelRequirement": 1,
    "factionBonus": {
      "loyalty": 5,
      "defense": 25
    },
    "effectDetails": [
      {
        "title": "Defense Boost",
        "rules": "The Base Fortification Package increases the base's defense rating by +25%, applying a passive effect. This bonus remains in place until the package is expended or replaced."
      },
      {
        "title": "Reduced Casualties",
        "rules": "During attacks, casualties within the fortified base are reduced by 30%. This benefit lasts for one week after installation and only applies to this fortification project."
      }
    ],
    "levelRequirementReason": "A faction leader of at least level 1 is required to oversee and activate the package, ensuring proper execution.",
    "vendorReason": "The Gilded Gryphon has a deep partnership with Construction Crew Dispatched, allowing them to offer this rare kit directly.",
    "shippingDetail": "Installation by the dispatched crew is necessary for activation. Delivery takes one week, during which time the base's defenses are temporarily reduced.",
    "usage": {
      "activation": "A passive effect that activates upon installation and remains in place until replaced or expended.",
      "duration": "Instantaneous",
      "endsWhen": "The package is expended or replaced by a new installation.",
      "charges": "Unlimited"
    },
    "priceReason": "This kit provides significant defensive and morale benefits while requiring minimal upkeep, making it a balanced purchase at 1000 XP.",
    "priceOriginal": 220000,
    "priceReviewedAt": "2026-07-22T04:42:59.441826+00:00",
    "aiReviewedAt": "2026-07-22T04:42:59.441826+00:00",
    "aiReviewVersion": 1
  },
  "faction_herbal_garden": {
    "id": "faction_herbal_garden",
    "name": "Hydroponic Garden",
    "description": "Hydroponic Garden is a meticulously crafted, glass-topped planter that grows healing herbs right on your ship. Its roots are fed by nutrient-rich water and sunlight captured through a specialized lens. This self-sustaining garden provides daily access to fresh, potent basic potions, ensuring the medical bay never runs out of supplies. It's a testament to the shamans' ingenuity, enhancing both the crew's health and the ship’s economy.",
    "category": "faction",
    "price": 220,
    "icon": "🌿",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Daily supply of basic potions",
      "Self-sufficiency"
    ],
    "vendor": "shamans_hut",
    "factionBonus": {
      "medicalCapacity": 10,
      "economy": 5
    },
    "effectDetails": [
      {
        "title": "Daily Supply of Basic Potions",
        "rules": "At the start of each long rest, the Hydroponic Garden provides a daily supply of five basic healing potions. This effect is instantaneous and requires no action."
      },
      {
        "title": "Self-Sufficiency",
        "rules": "The garden increases the medical bay's medical capacity by 10 and boosts the ship’s economy by +5, providing a tangible boost to crew health and resources without any upkeep or maintenance."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "Even the most novice adventurers can benefit from a steady supply of healing potions.",
    "vendorReason": "The shamans at Shamans Hut are known for their innovative and practical creations, making this garden a natural addition to their inventory.",
    "shippedBy": "Swift Deliveries",
    "shippingDetail": "Ships within 3 days via Swift Deliveries; expedited shipping available for an additional fee.",
    "usage": {
      "activation": "Instantaneous effect at the start of each long rest.",
      "duration": "Permanently active as long as it is in use on the ship.",
      "endsWhen": "Requires reinstallation or damage to cease its effects.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1,000 XP, this price reflects the item's significant utility and upkeep-free nature in providing essential supplies for a ship’s crew.",
    "priceOriginal": 32000,
    "priceReviewedAt": "2026-07-22T04:43:24.603240+00:00",
    "aiReviewedAt": "2026-07-22T04:43:24.603240+00:00",
    "aiReviewVersion": 1
  },
  "faction_ink_supplies": {
    "id": "faction_ink_supplies",
    "name": "Premium Ink Supplies",
    "description": "Premium Ink Supplies are meticulously crafted by the Chroniclers' Guild, ensuring that every line of history is preserved in perfect clarity and permanence. Each bottle of ink is made from rare herbs and minerals harvested from the ancient forests, while parchment is sourced from a sacred grove known for its longevity and strength. These supplies not only enhance the writer's Intelligence but also imbue their work with an enduring legacy, ensuring that every entry is preserved for generations to come.",
    "category": "faction",
    "price": 39,
    "icon": "✒️",
    "stock": 1,
    "rarity": "common",
    "effects": [
      "Enhances Writing Precision",
      "Endures Through Ages"
    ],
    "vendor": "faction_quartermaster",
    "factionBonus": {
      "intelligence": 3
    },
    "effectDetails": [
      {
        "title": "Enhanced Writing Precision",
        "rules": "When used to write reports or histories, the writer gains a +1 Intelligence bonus until the end of their next long rest. This effect can be activated once per short rest."
      },
      {
        "title": "Endures Through Ages",
        "rules": "Any document written with these supplies is imbued with a magical seal that ensures its preservation for at least 50 years, effectively doubling the shelf life of historical records. This benefit lasts until the document reaches this age limit or is destroyed."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "The basic skills required to use these supplies are within reach of any scholar or scribe.",
    "vendorReason": "As the official supplier to the Chroniclers' Guild, Faction Quartermaster ensures that only the highest quality materials are used in their creations.",
    "shippedBy": "Swift Courier of the Chronicles",
    "shippingDetail": "Documents containing these supplies are delivered within a week and require special handling to maintain their magical properties during transit.",
    "usage": {
      "activation": "Passive effect; activation is automatic upon use.",
      "duration": "Until end of next long rest for 'Enhanced Writing Precision'; Until document reaches age limit or is destroyed for 'Endures Through Ages'.",
      "endsWhen": "Document reaches the age limit set by 'Endures Through Ages' or is destroyed; Use ends at the end of a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The materials and craftsmanship required to produce these supplies are costly, but their value in preserving history makes them worth every XP.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T04:44:16.017889+00:00",
    "aiReviewedAt": "2026-07-22T04:44:16.017889+00:00",
    "aiReviewVersion": 1
  },
  "faction_lakitu_cam": {
    "id": "faction_lakitu_cam",
    "name": "Lakitu News Chopper",
    "description": "The Lakitu News Chopper hovers silently above, its propellers a blur of motion. This mechanical marvel streams live aerial footage directly to your party's heads-up display, offering a top-down map view of any outdoor battlefield. Enemies are highlighted in neon red, their stealth nullified by the chopper’s unerring gaze. With each pass, the Lakitu pilot offers witty commentary on the unfolding battle, providing crucial strategic insights.",
    "category": "faction",
    "price": 22000,
    "icon": "🎥",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Top-Down Aerial Map",
      "Neutralizes Stealth"
    ],
    "vendor": "rogueport_black_market",
    "factionBonus": {
      "intelligence": 50
    },
    "effectDetails": [
      {
        "title": "Top-Down Aerial Map",
        "rules": "The Lakitu News Chopper provides a real-time top-down map view of any outdoor battlefield. This effect is active as long as the chopper remains within line-of-sight. The pilot can be distracted by attacks against it, which ends the map streaming for 1 round."
      },
      {
        "title": "Neutralizes Stealth",
        "rules": "Enemies in the area are highlighted in neon red and have their stealth bonuses negated until the chopper is destroyed or leaves line-of-sight. The pilot can be distracted by attacks against it, which temporarily ends this effect for 1 round."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "The Lakitu News Chopper provides critical battlefield intelligence that even low-level characters can benefit from.",
    "vendorReason": "The Rogueport Black Market specializes in exotic and powerful items, making the Lakitu News Chopper a fitting addition to their inventory.",
    "shippedBy": "Swiftwind Express",
    "shippingDetail": "Delivered by Swiftwind Express within one week of purchase. The chopper is carefully packed to ensure it arrives operational.",
    "usage": {
      "activation": "Passive; activated upon deployment and remains active as long as the Lakitu pilot is unengaged with combat.",
      "duration": "Instantaneous (active while the chopper remains in line-of-sight)",
      "endsWhen": "The chopper is destroyed or leaves line-of-sight due to movement",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, the Lakitu News Chopper offers a significant strategic advantage without being overly powerful.",
    "priceOriginal": 320000,
    "priceReviewedAt": "2026-07-22T04:44:05.104130+00:00",
    "aiReviewedAt": "2026-07-22T04:44:05.104130+00:00",
    "aiReviewVersion": 1
  },
  "faction_legendary_recruit": {
    "id": "faction_legendary_recruit",
    "name": "Faction Legendary Recruit",
    "description": "The Faction Legendary Recruit is a parchment scroll adorned with the insignia of a noble house, crafted by the Gilded Gryphon itself. This relic can summon a legendary figure to your faction, whose loyalty is guaranteed but whose motivations remain veiled in enigma. Upon successful activation, you instantly gain an ally of CR 20 or higher who swears fealty to your cause, enhancing your faction's combat readiness and influence with the upper echelons of power.",
    "category": "faction",
    "price": 240000,
    "icon": "🏆",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Recruit a Legendary Ally",
      "Faction Reputation Boost"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Legendary Scroll",
    "levelRequirement": 12,
    "factionBonus": {
      "combatReadiness": 100,
      "influence": 100
    },
    "effectDetails": [
      {
        "title": "Recruit a Legendary Ally",
        "rules": "Activating this scroll requires an hour-long ritual during which you must establish a connection with the legendary figure. Once complete, the chosen ally becomes a loyal member of your faction for the duration of their life. The summoned ally is CR 20 or higher and must be willing to serve for at least one major faction goal."
      },
      {
        "title": "Faction Reputation Boost",
        "rules": "The faction's reputation increases by +100 immediately upon successful activation, but this boost lasts only until the next full moon. The ally may have their own goals and motivations, so you must carefully manage their influence within your ranks."
      }
    ],
    "levelRequirementReason": "Summoning a legendary figure requires a deep understanding of the factions' dynamics and the power to command such an ally.",
    "vendorReason": "Only the Gilded Gryphon, with its vast resources and influence, can craft such a powerful artifact.",
    "shippingDetail": "Delivered by a couriers of noble lineage, ensuring the scroll's integrity and secrecy throughout transit.",
    "usage": {
      "activation": "An hour-long ritual during which you must establish a connection with the legendary figure.",
      "duration": "Until the next full moon or until the ally fulfills their faction goal.",
      "endsWhen": "The next full moon or when the ally completes a major faction goal.",
      "charges": "Unlimited, but only one activation is allowed per month."
    },
    "priceReason": "This item represents a significant investment in power and influence, suitable for those of godly rarity who can afford to command such a powerful ally.",
    "priceOriginal": 1000000,
    "priceReviewedAt": "2026-07-22T04:43:59.765553+00:00",
    "aiReviewedAt": "2026-07-22T04:43:59.765553+00:00",
    "aiReviewVersion": 1
  },
  "faction_library": {
    "id": "faction_library",
    "name": "Archive Expansion",
    "description": "The Archive Expansion is a grand library set within Toad Town Market, housing an exhaustive collection of ancient tomes and maps. Its shelves are lined with leather-bound volumes that creak under the weight of forgotten lore, while its cabinets hold secrets only unlocked by Chroniclers of the highest esteem. Researchers can delve into this repository of knowledge, unlocking better intel analysis and the ability to research enemy weaknesses with unparalleled precision.",
    "category": "faction",
    "price": 220,
    "icon": "📚",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Better intel analysis",
      "Can research enemy weaknesses"
    ],
    "vendor": "toad_town_market",
    "factionBonus": {
      "intelligence": 8
    },
    "effectDetails": [
      {
        "title": "Improved Research",
        "rules": "As a bonus action, you can spend time in the Archive Expansion's study area to gain advantage on an Intelligence (History) check. This effect lasts for one hour and requires no concentration."
      },
      {
        "title": "Enemy Weaknesses",
        "rules": "You can use your reaction when faced with an enemy to gain insight into their vulnerabilities, providing a +2 bonus to attack rolls against them until the start of your next turn. This effect can be used once per long rest."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "This item is suitable for beginners who are eager to enhance their research skills and combat strategies.",
    "vendorReason": "Toad Town Market is known for its patronage of scholarly endeavors, making it an ideal vendor for the Archive Expansion.",
    "shippedBy": "Swift Courier",
    "shippingDetail": "The shipment requires a special courier to deliver the Archive Expansion securely within two days.",
    "usage": {
      "activation": "Bonus action and reaction",
      "duration": "One hour and once per long rest",
      "endsWhen": "Ends at the start of your next turn or when you finish a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Archive Expansion is priced fairly given its rarity and the significant benefits it provides to scholars and researchers.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-22T04:44:20.767972+00:00",
    "aiReviewedAt": "2026-07-22T04:44:20.767972+00:00",
    "aiReviewVersion": 1
  },
  "faction_lobbying": {
    "id": "faction_lobbying",
    "name": "Faction Lobbying (1 Day)",
    "description": "The Faction Lobbying service allows you to hire a political agent who, over the course of one day, negotiates on your behalf and works tirelessly to improve your standing with a chosen faction. The agent's efforts may unlock faction-specific perks or quests, but they might also require future favors in exchange for their services. This service is not for the faint-hearted; only those of at least 1st level can afford this epic endeavor.",
    "category": "services",
    "price": 4600,
    "icon": "🤝",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Gain +20 reputation with one faction",
      "Agent may require future favors"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Sealed Proposal",
    "levelRequirement": 1,
    "factionBonus": {
      "influence": 20
    },
    "effectDetails": [
      {
        "title": "Reputation Boost",
        "rules": "This effect grants the recipient an immediate boost of +20 in reputation points with a chosen faction. This increase is temporary and lasts until the end of the day."
      },
      {
        "title": "Future Favors",
        "rules": "The political agent may request future favors from you as payment for their services. The nature of these favors will be discussed during your meeting, but they are typically significant enough to require careful consideration."
      }
    ],
    "levelRequirementReason": "Only those of at least 1st level can afford and handle the complexities of such a service.",
    "vendorReason": "The Onyx Hand is renowned for its connections to various factions, making it the perfect vendor for such political services.",
    "shippingDetail": "The sealed proposal is delivered via an encrypted message and a trusted courier who ensures the service's confidentiality.",
    "usage": {
      "activation": "This effect is activated by engaging the service of the political agent over one full day.",
      "duration": "24 hours, from the moment the negotiations commence until they conclude.",
      "endsWhen": "The effects expire at the end of the 24-hour period or if you violate any terms agreed upon with the faction.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This price reflects the expertise and time required to secure such a service, as well as the potential long-term benefits.",
    "priceOriginal": 100000,
    "priceReviewedAt": "2026-07-22T04:44:51.366685+00:00",
    "aiReviewedAt": "2026-07-22T04:44:51.366685+00:00",
    "aiReviewVersion": 1
  },
  "faction_magic_academy": {
    "id": "faction_magic_academy",
    "name": "Field Arcane Academy",
    "description": "The Field Arcane Academy, a verdant training ground for aspiring mage-toads, is a beacon of magical learning and tradition. Crafted from enchanted oak and adorned with runes that whisper ancient secrets, it grants its recruits not only the 'Mage' class but also a protective barrier that can deflect incoming spells. Ryan’s legacy lives on through this sacred place where toad apprentices hone their arcane arts under the watchful eyes of seasoned shamans.",
    "category": "faction",
    "price": 22000,
    "icon": "✨",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Class Unlock: Mage",
      "Magical Barrier"
    ],
    "vendor": "shamans_hut",
    "factionBonus": {
      "combatReadiness": 10,
      "intelligence": 10
    },
    "effectDetails": [
      {
        "title": "Class Unlock: Mage",
        "rules": "The Field Arcane Academy grants its users access to the 'Mage' class, unlocking their potential for mastering arcane magic. This effect is passive and does not require activation."
      },
      {
        "title": "Magical Barrier",
        "rules": "When an opponent targets a user within the Field Arcane Academy with a spell, the user gains advantage on their Dexterity saving throw to resist the spell. The barrier can only be used once per short or long rest and is instantly destroyed if the user leaves the grounds."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "Beginners in magic are welcome here, as the academy focuses on teaching rather than advanced combat.",
    "vendorReason": "The shamans who oversee the training ground have a vested interest in ensuring their toad apprentices succeed and reach their full potential.",
    "shippedBy": "Swift Courier of the Arcane Veins",
    "shippingDetail": "Delivered by magical means, the item is shipped within one day if purchased during academy hours (noon to sunset).",
    "usage": {
      "activation": "Passive effect; no activation required once unlocked.",
      "duration": "Instantaneous; barrier lasts until the user leaves the grounds or uses it.",
      "endsWhen": "Destroyed if the user exits the training grounds, exhausted after one use per rest, or upon destruction of the academy.",
      "charges": "Unlimited; regenerates with each short or long rest."
    },
    "priceReason": "The Field Arcane Academy is a highly sought-after item for its educational value and defensive capabilities, making it worth 1000 XP.",
    "priceOriginal": 130000,
    "priceReviewedAt": "2026-07-22T04:44:59.092845+00:00",
    "aiReviewedAt": "2026-07-22T04:44:59.092845+00:00",
    "aiReviewVersion": 1
  },
  "faction_med_bay": {
    "id": "faction_med_bay",
    "name": "Field Hospital Expansion",
    "description": "The Field Hospital Expansion is a rare faction item, an essential addition to any Mender’s kit. Crafted from sturdy canvas and reinforced with iron fittings, it doubles the patient capacity of a medical tent, ensuring no soldier goes untreated in the heat of battle. The expanded space also reduces the fatality rate for critical wounds by providing more time for stabilization and treatment, thus saving lives on the field.",
    "category": "faction",
    "price": 760,
    "icon": "🏥",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Doubles patient capacity",
      "Reduces fatality rate of Critical wounds"
    ],
    "vendor": "shamans_hut",
    "factionBonus": {
      "medicalCapacity": 25,
      "morale": 5
    },
    "effectDetails": [
      {
        "title": "Increased Capacity",
        "rules": "Passive effect that doubles the number of patients a medical tent can accommodate. This increases efficiency and reduces wait times for treatment."
      },
      {
        "title": "Improved Survival Rates",
        "rules": "Reduces the fatality rate by 25% for critical wounds, thanks to the additional space and resources provided in the expanded field hospital setup."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "This item is designed to assist Menders without requiring a high level of skill.",
    "vendorReason": "Shamans Hut, known for its support of medical supplies and equipment, naturally stocks this crucial expansion kit.",
    "shippedBy": "Swift Courier’s Guild",
    "shippingDetail": "Delivered within a week, ensuring timely deployment to the field.",
    "usage": {
      "activation": "Passive effect upon placement in a medical tent.",
      "duration": "Permanent until destroyed or replaced.",
      "endsWhen": "Destroyed by fire or extreme damage.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This item provides significant benefits to the faction, making it a valuable but not overpriced purchase for any Mender.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-22T04:44:51.446195+00:00",
    "aiReviewedAt": "2026-07-22T04:44:51.446195+00:00",
    "aiReviewVersion": 1
  },
  "faction_medical_supplies": {
    "id": "faction_medical_supplies",
    "name": "Medical Supply Cache",
    "description": "The Medical Supply Cache is a meticulously packed shipment of healing supplies designed for faction medics. Each crate contains rare herbs, potent elixirs, and advanced medical tools that have been tested in the harshest battlefields. This vital cache reduces the time it takes for injured toads (the faction's loyal mounts) to recover by half, significantly lowering casualties on the battlefield. It also boosts the survival rate of critical injuries by 20%, ensuring that even the gravely wounded can find a fighting chance.",
    "category": "faction",
    "price": 220,
    "icon": "🏥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Injured toads recover faster",
      "Critical injuries have higher survival rates"
    ],
    "vendor": "faction_quartermaster",
    "shippedBy": "Priority Medical Courier",
    "levelRequirement": 1,
    "factionBonus": {
      "morale": 5,
      "medicalCapacity": 20
    },
    "effectDetails": [
      {
        "title": "Faster Recovery for Injured Toads",
        "rules": "When a faction medic administers supplies from the Medical Supply Cache, injured toads' recovery time is halved. This effect is instantaneous and does not require an action or save."
      },
      {
        "title": "Increased Survival Rate for Critical Injuries",
        "rules": "The Medical Supply Cache increases the survival rate of critical injuries by 20%. This bonus applies once per toad within a 5-foot radius of the medic administering the supplies. The effect does not require an action and lasts until the next short or long rest."
      }
    ],
    "levelRequirementReason": "Faction medics are trained in battlefield medicine but still need this item to ensure their mounts receive rapid, effective treatment.",
    "vendorReason": "The faction quartermaster oversees the distribution of essential supplies like these, ensuring that all wounded toads have access to top-tier medical care.",
    "shippingDetail": "Ships via the Priority Medical Courier for expedited delivery directly to frontline medics.",
    "usage": {
      "activation": "Instantaneous effect when a medic administers supplies from the cache.",
      "duration": "Until the next short or long rest, or until the toad is no longer critically injured.",
      "endsWhen": "The effect ends if the toad is no longer critically injured or has completed their next rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item's rarity and critical importance in saving lives justify its moderate price.",
    "priceOriginal": 100000,
    "priceReviewedAt": "2026-07-22T04:45:02.755822+00:00",
    "aiReviewedAt": "2026-07-22T04:45:02.755822+00:00",
    "aiReviewVersion": 1
  },
  "faction_memorial": {
    "id": "faction_memorial",
    "name": "Wall of the Fallen",
    "description": "The Wall of the Fallen stands as a solemn stone memorial, inscribed with names and dates of those who perished in service to your faction. Crafted from ancient granite quarried by the very hands that once wielded weapons for peace, its surface whispers tales of valor and sacrifice. When you call upon it, the wall releases a profound sense of unity and remembrance, bolstering the morale of your allies, and ensuring their spirits remain steadfast in the face of grief.",
    "category": "faction",
    "price": 39,
    "icon": "🕯️",
    "stock": 1,
    "rarity": "common",
    "effects": [
      "Morale Boost",
      "Loyalty Stabilization"
    ],
    "vendor": "faction_quartermaster",
    "factionBonus": {
      "morale": 10,
      "loyalty": 10
    },
    "effectDetails": [
      {
        "title": "Morale Boost",
        "rules": "When a character within 10 feet of the Wall of the Fallen uses an action to stabilize their morale, they gain a +2 bonus to their next saving throw against fear and despair. This effect lasts for 1 hour."
      },
      {
        "title": "Loyalty Stabilization",
        "rules": "The Wall provides a daily boost to faction loyalty among nearby allies. For the duration of one week, any character within 50 feet who has lost more than half their hit points gains a +1 bonus to all loyalty checks."
      }
    ],
    "levelRequirement": 3,
    "levelRequirementReason": "This item requires at least third-level characters to appreciate its profound impact on morale and loyalty.",
    "vendorReason": "The Quartermaster is responsible for maintaining the faction's heritage and traditions, making them the perfect vendor for this sacred artifact.",
    "shippedBy": "Faction Courier Service",
    "shippingDetail": "Delivered by trusted courier within a week. Requires special handling to ensure the stone remains in pristine condition during transport.",
    "usage": {
      "activation": "Used as an object interaction, once per day.",
      "duration": "Instantaneous effect; ongoing benefits for specified durations.",
      "endsWhen": "The daily use limit is reached or if the item is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Given its powerful faction-building effects and the limited stock, this item's price reflects its significant value in maintaining morale and loyalty among allies.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T04:45:34.119638+00:00",
    "aiReviewedAt": "2026-07-22T04:45:34.119638+00:00",
    "aiReviewVersion": 1
  },
  "faction_patrol_radios": {
    "id": "faction_patrol_radios",
    "name": "Sending Stone Network",
    "description": "The Sending Stone Network is a crystalline network of glowing stones that hums with the energy of past patrols. It allows squad leaders to instantly communicate, eliminating the need for shouting and reducing reaction times by half during critical moments. Squad leaders can also coordinate ambushes with precision, ensuring every move aligns perfectly. Crafted from ancient stone by the Pond Patrol, these relics are imbued with the essence of their creators.",
    "category": "faction",
    "price": 760,
    "icon": "📻",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Instant Communication",
      "Ambush Coordination"
    ],
    "vendor": "gilded_gryphon",
    "factionBonus": {
      "intelligence": 10,
      "operations": 10
    },
    "effectDetails": [
      {
        "title": "Instant Communication",
        "rules": "Activates as a reaction when a squad leader is about to be ambushed. Reduces the reaction time by half, allowing for quicker and more effective coordination."
      },
      {
        "title": "Ambush Coordination",
        "rules": "Allows squad leaders within range to coordinate ambushes with perfect timing. This effect lasts until the end of your next turn or until you move more than 30 feet away from any other squad leader using this item."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "The Sending Stone Network is accessible to all members, as it enhances teamwork and communication regardless of skill level.",
    "vendorReason": "The Gilded Gryphon has a long-standing relationship with the Pond Patrol, ensuring that their relics are distributed effectively.",
    "shippedBy": "Swift Wing Express",
    "shippingDetail": "Ships within three days via Swift Wing Express, delivered directly to your faction headquarters.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "You move more than 30 feet away from any other squad leader using this item or until the end of your next turn.",
      "charges": "Unlimited, as long as you remain within range."
    },
    "priceReason": "The Sending Stone Network is priced at 1000 XP, reflecting its rarity and utility in enhancing squad coordination and reaction times.",
    "priceOriginal": 55000,
    "priceReviewedAt": "2026-07-22T04:45:30.146786+00:00",
    "aiReviewedAt": "2026-07-22T04:45:30.146786+00:00",
    "aiReviewVersion": 1
  },
  "faction_peace_treaty": {
    "id": "faction_peace_treaty",
    "name": "Faction Peace Treaty",
    "description": "The Faction Peace Treaty is a delicate scroll of parchment, its edges lined in gold and inscribed with ancient runes that whisper promises of peace. This treasured artifact can end centuries-old hostilities between two powerful factions, instantly restoring harmony. However, the process often demands significant concessions or reparations, which must be agreed upon by both parties. Upon signing, each faction's reputation gains a +50 modifier, bolstering their standing in the region.",
    "category": "faction",
    "price": 22000,
    "icon": "🕊️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Ends a war",
      "Requires concessions"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Courier of the Silver Seal",
    "levelRequirement": 10,
    "factionBonus": {
      "diplomacy": 100
    },
    "effectDetails": [
      {
        "title": "Hostilities Cease Instantly",
        "rules": "When activated by an individual of at least 10th level, this scroll ends a declared state of war between two factions. The treaty remains in effect until one faction breaches the agreement or chooses to end it. There is no duration; the peace lasts as long as both parties adhere to the terms."
      },
      {
        "title": "Concessions Required",
        "rules": "The signing requires each faction to offer significant concessions, such as territory, resources, or political favor. These must be agreed upon in writing and presented before activation. Failure to comply results in the treaty's nullification."
      }
    ],
    "levelRequirementReason": "Requires a high-level character to navigate the diplomatic complexities involved in ending a war.",
    "vendorReason": "The Onyx Hand is renowned for its extensive network of diplomats and peace brokers, making it the most reliable source for such a sensitive item.",
    "shippingDetail": "Ships via a trusted courier who ensures safe delivery to both factions involved in the conflict.",
    "usage": {
      "activation": "Requires an action to activate, presenting the scroll and invoking its power.",
      "duration": "Instantaneous effect; lasts until one faction breaches or ends it.",
      "endsWhen": "One faction breaches the peace terms or chooses to end it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this item is priced moderately given its legendary rarity and the significant diplomatic value it provides.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-22T04:45:51.014552+00:00",
    "aiReviewedAt": "2026-07-22T04:45:51.014552+00:00",
    "aiReviewVersion": 1
  },
  "faction_propaganda": {
    "id": "faction_propaganda",
    "name": "Propaganda Posters",
    "description": "Propaganda Posters are vibrant, hand-painted posters that feature Toads in heroic poses, their eyes glinting with determination. These iconic pieces of faction art are known to inspire townsfolk to rally behind their cause. When displayed in a town, the morale and enthusiasm of the residents skyrocket, leading to an increase in recruitment efforts by +5%. The posters also subtly spread faction lore, causing passersby to feel a sense of loyalty towards your faction, incrementing loyalty by 1 point per week.",
    "category": "faction",
    "price": 39,
    "icon": "🖼️",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "+5% Recruitment Rate",
      "Loyalty Increase"
    ],
    "vendor": "faction_quartermaster",
    "shippedBy": "Tube Express",
    "levelRequirement": 1,
    "factionBonus": {
      "loyalty": 2
    },
    "effectDetails": [
      {
        "title": "Recruitment Boost",
        "rules": "When displayed in a town, the Propaganda Posters grant an increase to the faction's recruitment rate by +5%. This effect lasts for one week and can be refreshed once per month."
      },
      {
        "title": "Loyalty Spread",
        "rules": "The posters subtly spread faction loyalty among townsfolk. Each week, the displayed poster increases the faction's loyalty score by 1 point, up to a maximum of +5 points over one month. This effect has no save DC and is passive."
      }
    ],
    "levelRequirementReason": "This item requires level 1 because it provides benefits that are immediately useful for recruiting and spreading faction loyalty without imposing any significant risk.",
    "vendorReason": "The Faction Quartermaster is well-known for distributing propaganda materials across the realm, making their inventory a reliable source for such items.",
    "shippingDetail": "The posters are shipped via Tube Express, ensuring timely delivery to any town within a week.",
    "usage": {
      "activation": "Instantaneous upon display in a town.",
      "duration": "One week per use, refreshable once per month.",
      "endsWhen": "The poster is removed from the town or falls apart due to age.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects a common item that provides consistent benefits over time without being overly powerful.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T04:45:43.618588+00:00",
    "aiReviewedAt": "2026-07-22T04:45:43.618588+00:00",
    "aiReviewVersion": 1
  },
  "faction_propeller_fleet": {
    "id": "faction_propeller_fleet",
    "name": "Toad Brigade Propeller Suits",
    "description": "The Toad Brigade Propeller Suits are sleek, aerodynamic flight suits crafted from lightweight, enchanted aluminum and fitted with propellers that hum with magical energy. These suits grant their wearers the ability to soar above ground defenses, making them a Scout Cohort's best asset for reconnaissance and high-altitude combat. The suit's wingspan is just wide enough to carry two scouts at once, perfect for covert operations and aerial support.",
    "category": "faction",
    "price": 760,
    "icon": "🚁",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Aerial Dominance",
      "Ground Bypass"
    ],
    "vendor": "toad_town_market",
    "factionBonus": {
      "mobility": 20,
      "intelligence": 15
    },
    "effectDetails": [
      {
        "title": "Aerial Dominance",
        "rules": "The suit grants the wearer a fly speed of 30 feet. This effect is active as long as the suit's propellers are operational and not engaged in combat or high-speed flight maneuvers that would risk damage to the wings."
      },
      {
        "title": "Ground Bypass",
        "rules": "Wearers can bypass ground-based defenses by flying above them, provided they have at least 10 feet of altitude. This effect is limited to once per short rest and requires a successful DC 15 Dexterity (Acrobatics) check."
      }
    ],
    "levelRequirement": 2,
    "levelRequirementReason": "The suits are designed for scouts with some basic combat skills, requiring at least second-level proficiency in flying.",
    "vendorReason": "As a hub of innovation and technology within the Toad Brigade, Toad Town Market is known for its high-quality equipment suitable for elite troops like the Scouts.",
    "shippedBy": "The Swift Courier Service",
    "shippingDetail": "Orders are delivered via aerial courier within three days of purchase.",
    "usage": {
      "activation": "Activates as a bonus action to deploy or retract wings, and can be used once per long rest for full functionality.",
      "duration": "Active until the next long rest unless engaged in combat or high-speed flight.",
      "endsWhen": "The suit is damaged beyond repair or its power source runs dry.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The suits are considered a rare find, balancing their unique abilities with a price reflective of their specialized design and materials.",
    "priceOriginal": 380000,
    "priceReviewedAt": "2026-07-22T19:26:52.575748+00:00",
    "aiReviewedAt": "2026-07-22T19:26:52.575748+00:00",
    "aiReviewVersion": 1
  },
  "faction_safe_house_network": {
    "id": "faction_safe_house_network",
    "name": "Underground Railroad",
    "description": "The Underground Railroad is a clandestine network of safe houses across the Mushroom Kingdom, each meticulously crafted from the same sturdy oak found in the ancient forests of Toad Town. Operated by trusted toads and dedicated operatives, this hidden web ensures MIA toads have a 50% chance to return safely to their homes. Travelers can fast-travel between major cities without fear, knowing every step is monitored by the network’s vigilant sentinels.",
    "category": "faction",
    "price": 22000,
    "icon": "🏠",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Safe Return Guarantee",
      "Secure Fast-Travel"
    ],
    "vendor": "rogueport_black_market",
    "factionBonus": {
      "operations": 25,
      "defense": 10
    },
    "effectDetails": [
      {
        "title": "Safe Return Guarantee",
        "rules": "When a Toad operative or MIA toad uses this network, they have a 50% chance of returning safely home. This effect is instantaneous and does not require any action."
      },
      {
        "title": "Secure Fast-Travel",
        "rules": "This allows safe and secure fast-travel between major cities in the Mushroom Kingdom. The duration is limited to one use per day, and it requires a successful DC 15 Wisdom (Perception) check to find the nearest safe house."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "This item is accessible at level 1 as it aids in basic survival and travel.",
    "vendorReason": "The Rogue Port Black Market sells this network to ensure its operatives can rely on the safe return of their MIA toads.",
    "shippedBy": "Toad Courier Service",
    "shippingDetail": "Delivered by trusted Toad Couriers within 24 hours, ensuring the network remains operational and reliable.",
    "usage": {
      "activation": "Instantaneous use upon reaching a safe house.",
      "duration": "One use per day.",
      "endsWhen": "The effect ends when the daily limit is reached or the toad safely reaches their destination.",
      "charges": "Unlimited, as long as the network remains operational."
    },
    "priceReason": "This price reflects the value of ensuring safe travel and retrieval within the Mushroom Kingdom.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-22T04:46:14.019722+00:00",
    "aiReviewedAt": "2026-07-22T04:46:14.019722+00:00",
    "aiReviewVersion": 1
  },
  "faction_scavenger_teams": {
    "id": "faction_scavenger_teams",
    "name": "Dedicated Scavengers",
    "description": "The Dedicated Scavengers are a faction dedicated to the recovery of lost and forgotten supplies, earning them a reputation as the most reliable scavengers in the realm. This faction’s teams operate under strict protocols, ensuring that every mission yields valuable resources or hidden treasures. They generate passive income by retrieving supplies and XP weekly, making them an indispensable asset for any guild or kingdom looking to bolster its reserves.",
    "category": "faction",
    "price": 760,
    "icon": "🎒",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Passive Income: Supplies/XP Weekly",
      "Finds Rare Items"
    ],
    "vendor": "rogueport_black_market",
    "factionBonus": {
      "economy": 20
    },
    "effectDetails": [
      {
        "title": "Weekly Passive Income",
        "rules": "At the end of each week, a member of the Dedicated Scavengers faction earns +50 XP and an additional 1d6 supplies. This effect is passive and occurs automatically without any need for action."
      },
      {
        "title": "Rare Item Finds",
        "rules": "Whenever a Dedicated Scavenger team completes a mission, there's a 25% chance they discover a rare item. If successful, the player may choose between a random rare treasure or an artifact that provides +1d4 to any ability check."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "The faction’s protocols and training ensure even first-level adventurers can benefit from their expertise.",
    "vendorReason": "The Rogue Port Black Market is known for its diverse clientele, including those who rely on the Dedicated Scavengers’ services.",
    "shippedBy": "swift courier of the King’s Highway",
    "shippingDetail": "Delivered by the swiftest couriers of the King's Highway, these supplies and treasures are guaranteed to arrive in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Instantaneous (weekly)",
      "endsWhen": "The mission ends or a new week begins",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its reliable and valuable passive benefits, the Dedicated Scavengers faction is worth the investment.",
    "priceOriginal": 70000,
    "priceReviewedAt": "2026-07-22T04:46:07.965902+00:00",
    "aiReviewedAt": "2026-07-22T04:46:07.965902+00:00",
    "aiReviewVersion": 1
  },
  "faction_scout_cloaks": {
    "id": "faction_scout_cloaks",
    "name": "Camo-Cloaks",
    "description": "Camo-Cloaks, crafted by the elven artisans of Rakasha Grounds, are not just ordinary cloaks but woven from the very essence of the forest itself. Their threads shimmer with a faint green glow that blends seamlessly into the foliage, making scouts nearly invisible in dense woodlands. These cloaks reduce the chances of detection and significantly lower casualties during covert operations, earning them their place as indispensable tools for any Scout cohort.",
    "category": "faction",
    "price": 220,
    "icon": "🧥",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Stealth Advantage",
      "Casualty Reduction"
    ],
    "vendor": "rakasha_grounds",
    "factionBonus": {
      "intelligence": 15
    },
    "effectDetails": [
      {
        "title": "Stealth Advantage",
        "rules": "Scouts wearing Camo-Cloaks gain advantage on Stealth checks while in forested areas. This effect is active as long as the cloak is worn and within a forest biome."
      },
      {
        "title": "Casualty Reduction",
        "rules": "When a Scout wearing this cloak takes damage from an attack, they have a 25% chance to reduce the damage by half. This effect can only trigger once per battle."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "Scouts typically start their training at level 1 and quickly find these cloaks essential for survival.",
    "vendorReason": "Rakasha Grounds, known for their intimate connection with nature, are the perfect source for these elven-made cloaks.",
    "shippedBy": "Swiftwind Couriers",
    "shippingDetail": "Delivered within a week of order placement. Special handling required to maintain the cloak's enchantment during transit.",
    "usage": {
      "activation": "Passive effect, no activation needed once worn in forested areas.",
      "duration": "Instantaneous and continuous as long as worn in a forest biome.",
      "endsWhen": "The cloak is removed or the wearer leaves the forest biome.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare elven materials and imbued with ancient forest magic, these cloaks are relatively priced for their utility.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T19:27:07.233611+00:00",
    "aiReviewedAt": "2026-07-22T19:27:07.233611+00:00",
    "aiReviewVersion": 1
  },
  "faction_shroob_tech": {
    "id": "faction_shroob_tech",
    "name": "Reverse-Engineered Shroob Blasters",
    "description": "The Reverse-Engineered Shroob Blasters are compact, sleek weapons forged from alien technology and black-market engineering. Their purple glow hints at the forbidden knowledge that powers them. These blasters not only grant +5 to attack rolls and deal necrotic damage but also carry a subtle risk of catastrophic failure (1 in 20), potentially turning the battlefield against you. The Iron Legion, ever vigilant, will quickly designate any wielder as a planetary threat due to their potential for mass destruction.",
    "category": "faction",
    "price": 60000,
    "icon": "👾",
    "stock": 1,
    "rarity": "forbidden",
    "effects": [
      "Necrotic Aura",
      "Catastrophic Failure"
    ],
    "vendor": "onyx_hand",
    "factionBonus": {
      "combatReadiness": 30
    },
    "effectDetails": [
      {
        "title": "Necrotic Aura",
        "rules": "The Reverse-Engineered Shroob Blasters grant a +5 bonus to attack rolls and deal necrotic damage. This effect lasts until the end of your next turn."
      },
      {
        "title": "Catastrophic Failure",
        "rules": "There is a 1 in 20 chance that each shot will cause an explosion, dealing 3d6 necrotic damage to all creatures within 5 feet. This effect ends on a successful DC 14 Dexterity saving throw."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "Basic combat proficiency and understanding of alien technology are necessary to wield these blasters effectively.",
    "vendorReason": "The Onyx Hand is known for its connections to black-market tech, making it a logical source for such forbidden weaponry.",
    "shippedBy": "Black Market Express",
    "shippingDetail": "Delivered through the shadows with a 1-day delay. A courier fee of 50 XP applies.",
    "usage": {
      "activation": "Uses an action to fire one blaster shot.",
      "duration": "Instantaneous, lasts until end of next turn.",
      "endsWhen": "On a successful DC 14 Dexterity saving throw or upon destruction.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's forbidden nature and potential for catastrophic failure.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-22T04:46:32.620372+00:00",
    "aiReviewedAt": "2026-07-22T04:46:32.620372+00:00",
    "aiReviewVersion": 1
  },
  "faction_siege_weapons": {
    "id": "faction_siege_weapons",
    "name": "Bob-omb Cannons",
    "description": "Crafted by the Vigilance faction, these massive cannons are a sight to behold—massive iron cylinders housing explosive barrels that can reduce enemy structures and formations to rubble in an instant. The booming sound of their discharge is said to shake the very ground beneath them, striking fear into even the most seasoned combatants. These Bob-omb Cannons are not just weapons; they are symbols of the Vigilance’s unyielding resolve.",
    "category": "faction",
    "price": 760,
    "icon": "💣",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Massive Damage",
      "Intimidation"
    ],
    "vendor": "valley_trading_post",
    "factionBonus": {
      "combatReadiness": 20,
      "defense": 15
    },
    "effectDetails": [
      {
        "title": "Massive Damage",
        "rules": "When activated, Bob-omb Cannons unleash a devastating blast that deals 6d8 explosive damage to all creatures within a 30-foot radius. This effect has a cast time of 1 action and can be used once every long rest."
      },
      {
        "title": "Intimidation",
        "rules": "Upon activation, the Bob-omb Cannons emit an ear-splitting roar that imposes a -2 penalty to attack rolls and saving throws made against fear effects within 60 feet. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirement": 5,
    "levelRequirementReason": "The Bob-omb Cannons require a minimum character level of 5 due to their complexity and the strength needed to operate them.",
    "vendorReason": "As one of the key suppliers for the Vigilance faction, Valley Trading Post is authorized to sell these powerful weapons of war.",
    "shippedBy": "Swift Couriers of the Vigilance",
    "shippingDetail": "Ships via Swift Couriers who deliver within a week. Special handling required due to the explosive nature of the cannons.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Expended after use or when the user is incapacitated",
      "charges": "Unlimited, but can only be used once per long rest"
    },
    "priceReason": "The Bob-omb Cannons are priced at 1000 XP due to their rarity and the resources required for their construction.",
    "priceOriginal": 110000,
    "priceReviewedAt": "2026-07-22T19:39:38.112803+00:00",
    "aiReviewedAt": "2026-07-22T19:39:38.112803+00:00",
    "aiReviewVersion": 1
  },
  "faction_signal_flares": {
    "id": "faction_signal_flares",
    "name": "Magical Signal Flares",
    "description": "These signal flares are crafted from a rare, phosphorescent material found only in the deep caverns of the Underdark. They can be launched into the sky by pulling their igniter strings, releasing a burst of light that can be seen for miles around. Upon activation, they not only coordinate squad movements with pinpoint accuracy but also serve as a beacon to call upon distant aid. These flares are an essential tool for any faction looking to maintain order and safety in their operations.",
    "category": "faction",
    "price": 40,
    "icon": "🎆",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "+2 Coordination",
      "Aid Call Beacon"
    ],
    "vendor": "rogueport_black_market",
    "factionBonus": {
      "operations": 5
    },
    "effectDetails": [
      {
        "title": "Coordination Boost",
        "rules": "When a squad member activates the flare, all allies within a 50-foot radius gain advantage on their next initiative roll. This effect lasts for one minute."
      },
      {
        "title": "Beacon of Distress",
        "rules": "The flare can be used to signal for help. Any creature within line of sight and hearing range (300 feet) can attempt a DC 15 Wisdom (Perception) check to notice the flare's distress call. Success indicates that aid is summoned."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "These flares are designed for use by any squad member, regardless of their level.",
    "vendorReason": "The Rogueport Black Market deals in a variety of faction-specific tools and gadgets, making these signal flares an easy addition to their inventory.",
    "shippedBy": "Shadow Couriers",
    "shippingDetail": "Flares are shipped via the Shadow Couriers' swift bats, ensuring they reach their destination securely within one turn.",
    "usage": {
      "activation": "Action",
      "duration": "One minute",
      "endsWhen": "The effect ends when a successful Wisdom (Perception) check is made by an enemy to notice the flare's distress call or if another signal flare is activated nearby.",
      "charges": "Unlimited, but only one flare can be active at any given time."
    },
    "priceReason": "The rare material and specialized crafting make these flares a valuable tool for factions needing reliable coordination and distress signals.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T19:39:36.426116+00:00",
    "aiReviewedAt": "2026-07-22T19:39:36.426116+00:00",
    "aiReviewVersion": 1
  },
  "faction_spare_parts": {
    "id": "faction_spare_parts",
    "name": "Crate of Spare Wrenches",
    "description": "The Crate of Spare Wrenches, forged by Forgemaster Ironspore himself, is a treasure for any engineer or mechanic. Nestled among its rows are a dozen precision-forged wrenches, each one perfectly suited to the tasks at hand. These tools are not just replacements; they're part of an ongoing effort to keep machinery running smoothly and efficiently. With this crate, repairs proceed with such speed that you might as well be performing them in the blink of an eye.",
    "category": "faction",
    "price": 40,
    "icon": "🔧",
    "stock": 3,
    "rarity": "common",
    "effects": [
      "Increased Repair Speed",
      "Enhanced Tool Quality"
    ],
    "vendor": "faction_quartermaster",
    "factionBonus": {
      "mobility": 4
    },
    "effectDetails": [
      {
        "title": "Increased Repair Speed",
        "rules": "Using any tool for repairs grants a +2 bonus to repair checks. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Enhanced Tool Quality",
        "rules": "Each wrench in the crate provides a +1 bonus to damage rolls when used as part of a repair or construction task, up to three times per day. After these uses, the wrenches must be re-forged by Forgemaster Ironspore."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "This crate is suitable for any adventurer who needs reliable tools in their quest.",
    "vendorReason": "The Quartermaster has the resources to supply such essential items to adventurers and factions alike.",
    "shippedBy": "Ironspore's Forges",
    "shippingDetail": "Delivered with a personal escort from Forgemaster Ironspore himself, ensuring prompt service.",
    "usage": {
      "activation": "Instantaneous, as part of any repair or construction task involving tools.",
      "duration": "Until the end of your next long rest.",
      "endsWhen": "Once all charges are used up or after a long rest.",
      "charges": "3 uses per day"
    },
    "priceReason": "Balanced at this price, the Crate of Spare Wrenches offers significant benefits for its cost.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T04:47:04.684217+00:00",
    "aiReviewedAt": "2026-07-22T04:47:04.684217+00:00",
    "aiReviewVersion": 1
  },
  "faction_speaker_podium": {
    "id": "faction_speaker_podium",
    "name": "Enchanted Podium",
    "description": "The Enchanted Podium stands tall, its polished surface gleaming under the light of a thousand eyes. Crafted from ancient wood imbued with the essence of nature itself, it amplifies the speaker's voice to fill every corner of the room, friend or foe alike. Its resonant design not only magnifies sound but also instills confidence in the speaker, who feels as though they can sway any audience with a single word.",
    "category": "faction",
    "price": 220,
    "icon": "🎤",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Voice Amplification",
      "Inspiring Leadership"
    ],
    "vendor": "shamans_hut",
    "factionBonus": {
      "leadership": 15,
      "morale": 5
    },
    "effectDetails": [
      {
        "title": "Voice Amplification",
        "rules": "When activated by a leader or bard of at least level 1, the Enchanted Podium amplifies their voice to fill an area up to 30 feet in radius. This effect lasts for 1 minute per level of the speaker. Any creature within this area gains advantage on saving throws against fear and charm effects."
      },
      {
        "title": "Inspiring Leadership",
        "rules": "The podium grants a +2 bonus to Charisma (Leadership) checks made by its user. Additionally, it allows the speaker to use the Rally action as a bonus action once per long rest."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "Requires at least level 1 to effectively utilize the podium's amplification and leadership benefits.",
    "vendorReason": "The Shamans Hut often sells items that enhance community unity, making it a fitting vendor for this podium which fosters cooperation and confidence.",
    "shippedBy": "Swift Wind Courier",
    "shippingDetail": "Ships via Swift Wind Courier with expedited delivery ensuring the podium reaches its destination in one day.",
    "usage": {
      "activation": "Bonus action to activate, once per long rest for Rally action.",
      "duration": "1 minute per level of the user.",
      "endsWhen": "Ends when the effect's duration expires or the speaker moves more than 30 feet away from it.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Enchanted Podium is priced at 1000 XP as its unique properties and benefits make it a valuable tool for leaders and speakers alike, enhancing both their abilities in combat and diplomacy.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T04:47:36.570524+00:00",
    "aiReviewedAt": "2026-07-22T04:47:36.570524+00:00",
    "aiReviewVersion": 1
  },
  "faction_spy_network": {
    "id": "faction_spy_network",
    "name": "The Whisper Network",
    "description": "The Whisper Network is a clandestine informant network that spans from Toad Town to Rogueport, ensuring that every tavern keeper and street corner gossip spreads like wildfire to its handlers. With this network, you can know enemy movements up to one day in advance, allowing for swift strategic maneuvers or countermeasures. The network also uncovers traitor plots before they are enacted, giving you the power to neutralize threats before they arise.",
    "category": "faction",
    "price": 22000,
    "icon": "👁️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Know enemy movements",
      "Reveal traitor plots"
    ],
    "vendor": "rogueport_black_market",
    "factionBonus": {
      "intelligence": 40
    },
    "effectDetails": [
      {
        "title": "Knowledge of Enemy Movements",
        "rules": "As a bonus action, you can activate The Whisper Network to gain knowledge of an enemy's planned movements up to one day in advance. This information is conveyed through cryptic messages and rumors from the network. The effect lasts until the end of your next long rest."
      },
      {
        "title": "Reveal Traitor Plots",
        "rules": "Once per short or long rest, you can use The Whisper Network to uncover a traitor's plot within a 1-mile radius. This ability reveals the identity and intentions of the traitor but does not allow you to directly interfere with their plans."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "The network requires some understanding of how to use and interpret the information it provides, making level 1 a reasonable starting point.",
    "vendorReason": "Rogueport's Black Market is known for dealing in espionage and information, making The Whisper Network an ideal addition to their offerings.",
    "shippedBy": "Swift Runner Courier Service",
    "shippingDetail": "The network's activation requires a successful DC 15 Intelligence (Investigation) check upon receiving the package.",
    "usage": {
      "activation": "Bonus action or once per short/long rest",
      "duration": "Until end of next long rest for enemy movements; instantaneous for revealing traitor plots",
      "endsWhen": "Rest ends or plot is resolved, respectively",
      "charges": "Unlimited"
    },
    "priceReason": "The network's value lies in its strategic intelligence and ability to uncover critical information, making it a premium item even though it does not deplete charges.",
    "priceOriginal": 100000,
    "priceReviewedAt": "2026-07-22T04:47:45.396377+00:00",
    "aiReviewedAt": "2026-07-22T04:47:45.396377+00:00",
    "aiReviewVersion": 1
  },
  "faction_therapy_dog": {
    "id": "faction_therapy_dog",
    "name": "Support Chain Chomp",
    "description": "The Support Chain Chomp is a small, domesticated Chain Chomp pup whose affectionate nature and gentle demeanor make it an invaluable companion for those dealing with trauma. With its wagging tail and warm eyes, this creature provides unwavering support to Barrel Survivors, helping them recover from their traumas more swiftly. It also acts as a loyal guard, ensuring the safety of its chosen home by standing vigilant at the door.",
    "category": "faction",
    "price": 760,
    "icon": "🐕",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Trauma Recovery Boost",
      "Loyal Guardian"
    ],
    "vendor": "rakasha_grounds",
    "factionBonus": {
      "morale": 10,
      "medicalCapacity": 5
    },
    "effectDetails": [
      {
        "title": "Trauma Recovery Boost",
        "rules": "When a Barrel Survivor is in recovery, the Support Chain Chomp can be activated as an action to provide a +2 bonus to the survivor's recovery roll for one hour. This effect does not stack with other similar benefits."
      },
      {
        "title": "Loyal Guardian",
        "rules": "The Support Chain Chomp acts as a guardian, providing a +1 bonus to all saving throws against being frightened or charmed until it is dismissed or the end of its day."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "Support Chain Chomp's soothing and protective nature makes it accessible for any character to bring comfort to those in need.",
    "vendorReason": "Rakasha Grounds is known for its compassionate and healing services, making them the ideal vendor for this gentle creature.",
    "shippedBy": "Swift Courier of the Moonlit Path",
    "shippingDetail": "The Support Chain Chomp is carefully packed in a specially designed crate to ensure it arrives safely at its new home.",
    "usage": {
      "activation": "Activate as an action during recovery or when threatened by a frightened or charmed effect.",
      "duration": "One hour for Trauma Recovery Boost; until dismissed or the end of the day for Loyal Guardian.",
      "endsWhen": "The effect ends upon dismissal, at the end of the day, or if the Support Chain Chomp is harmed severely enough to be knocked unconscious.",
      "charges": "Unlimited"
    },
    "priceReason": "The Support Chain Chomp's value lies in its unique ability to provide both emotional support and physical protection at a reasonable cost.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-22T19:27:30.662115+00:00",
    "aiReviewedAt": "2026-07-22T19:27:30.662115+00:00",
    "aiReviewVersion": 1
  },
  "faction_training_dummies": {
    "id": "faction_training_dummies",
    "name": "Training Dummies",
    "description": "These straw targets are meticulously crafted to mimic the stern visages and armor of Iron Legionnaires, each painted with a level of realism that makes every strike feel like an assault on flesh and steel. They stand tall in the training yard, their paint chipped by countless practice sessions but never losing their resolve. Fighters who train against these dummies find themselves subtly more adept, as if the very essence of the Iron Legion imparts itself to the blade through each blow.",
    "category": "faction",
    "price": 40,
    "icon": "🤺",
    "stock": 1,
    "rarity": "common",
    "effects": [
      "Combat Readiness",
      "Militia Training Boost"
    ],
    "vendor": "faction_quartermaster",
    "factionBonus": {
      "combatReadiness": 5
    },
    "effectDetails": [
      {
        "title": "Combat Readiness",
        "rules": "You gain a +5 bonus to your Combat Readiness score when training with these dummies. This effect lasts until the end of the session or until you rest for at least an hour."
      },
      {
        "title": "Militia Training Boost",
        "rules": "Your militia unit gains a small but significant boost in training efficiency, allowing them to level up slightly faster than usual while you are present. This effect persists as long as you and the militia are within sight of each other."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "These dummies are designed for beginners and seasoned veterans alike; they offer a foundational training advantage to all combatants.",
    "vendorReason": "The Quartermaster ensures that all soldiers, from the newest recruit to the highest-ranking general, have access to the best resources available.",
    "shippedBy": "Iron Legion's own courier service",
    "shippingDetail": "Delivered by swift messengers of the Iron Legion; arrives within a day if your location is within the borders of their territory.",
    "usage": {
      "activation": "Instantaneous, as an action when you begin training with these dummies.",
      "duration": "Until the end of the session or until you rest for at least one hour.",
      "endsWhen": "The effect ends if you stop using the dummies for combat training or if you rest for more than an hour.",
      "charges": "Unlimited; the dummies are always available."
    },
    "priceReason": "This price reflects the quality craftsmanship and the strategic importance of these dummies in a soldier's training regimen, making them accessible but not cheap.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T04:48:17.531161+00:00",
    "aiReviewedAt": "2026-07-22T04:48:17.531161+00:00",
    "aiReviewVersion": 1
  },
  "faction_treasury_investment": {
    "id": "faction_treasury_investment",
    "name": "Wario Asset Management",
    "description": "Wario Asset Management is a rare faction treasury investment that leverages Wario's questionable expertise in finance. This risky venture promises high rewards, but only if it doesn't implode entirely. Each week, this investment generates a 5% interest on the faction’s XP, but be warned: Wario takes an additional 20% cut for his trouble. Once activated, it opens up new 'Corporate Takeover' missions that test your faction's strategic acumen and resolve.",
    "category": "faction",
    "price": 760,
    "icon": "📈",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "High Risk Investment",
      "Faction XP Boost"
    ],
    "vendor": "wario_direct",
    "factionBonus": {
      "economy": 50
    },
    "effectDetails": [
      {
        "title": "High Risk Investment",
        "rules": "This weekly investment generates a 5% interest on the faction’s XP, but Wario takes an additional 20% cut. The effect lasts until the end of each week."
      },
      {
        "title": "Faction XP Boost",
        "rules": "Activates once per week, providing a +1 bonus to Economy checks and increasing Faction Stability by 5 points for one month."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "Requires at least level 1 to manage any faction treasury investment.",
    "vendorReason": "Wario's questionable but occasionally profitable ventures make him a natural choice as an intermediary for risky investments like this.",
    "shippedBy": "Courier Pigeon Express",
    "shippingDetail": "The courier pigeon delivers the investment agreement, which must be signed and returned within one week to activate the investment.",
    "usage": {
      "activation": "Passive effect until the end of each week; requires no action once per week for the Faction XP Boost.",
      "duration": "One week",
      "endsWhen": "The week ends or the agreement is terminated early.",
      "charges": "Unlimited, but only one boost per month."
    },
    "priceReason": "Balanced at 1000 XP to reflect its high-risk nature and potential for reward.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-22T04:47:51.587448+00:00",
    "aiReviewedAt": "2026-07-22T04:47:51.587448+00:00",
    "aiReviewVersion": 1
  },
  "faction_uno_deck": {
    "id": "faction_uno_deck",
    "name": "Tournament Card Deck",
    "description": "The Tournament Card Deck, a simple yet contentious set of cards made from parchment and ink, is crafted by the Faction Quartermaster for casual games among allies. Each deck contains 52 cards that, when played, can either uplift morale or spark heated debates leading to playful fistfights. Players who engage in a game are granted +1 Morale until their next short rest, but must roll a DC 10 Constitution saving throw or risk a minor altercation.",
    "category": "faction",
    "price": 40,
    "icon": "🃏",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "+1 Morale",
      "Risk of minor fistfights"
    ],
    "vendor": "faction_quartermaster",
    "factionBonus": {
      "morale": 1
    },
    "effectDetails": [
      {
        "title": "Morale Boost",
        "rules": "When a player uses the deck to play a game, they gain +1 Morale until their next short rest. However, if they lose the game, they must roll a DC 10 Constitution saving throw or engage in a minor altercation with another player."
      },
      {
        "title": "Minor Fistfights",
        "rules": "If a player rolls a natural 1 on their Constitution saving throw after losing a game, they and an opponent must immediately make opposed Strength checks. The loser of the check takes 1d4 bludgeoning damage and is knocked prone."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "This deck is designed for beginners and casual players to enjoy simple camaraderie-building games.",
    "vendorReason": "The Faction Quartermaster ensures that all members have the resources they need, including this popular deck for friendly competition.",
    "shippedBy": "Swift Courier of the Alliance",
    "shippingDetail": "Delivered within one week of purchase. Expedited delivery available at an additional cost.",
    "usage": {
      "activation": "Playing a game with the deck as a bonus action.",
      "duration": "Until the player's next short rest or until they lose and roll a natural 1 on their Constitution saving throw.",
      "endsWhen": "If the player loses a game and rolls a natural 1, both players are affected by the minor fistfight rule.",
      "charges": "Unlimited uses; the deck refills as soon as it is used."
    },
    "priceReason": "The balanced price reflects the deck's common rarity and its dual functionality of boosting morale and occasionally causing playful conflicts.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T04:48:12.120628+00:00",
    "aiReviewedAt": "2026-07-22T04:48:12.120628+00:00",
    "aiReviewVersion": 1
  },
  "faction_vehicle_repair": {
    "id": "faction_vehicle_repair",
    "name": "Vigilance Repair Fund",
    "description": "The Vigilance Repair Fund is a rare artifact crafted by the Gilded Gryphon to restore and protect the airship Vigilance. This compact chest contains meticulously collected parts and expert knowledge, capable of repairing damage from Iron Legion assaults and restoring its morale. It restores the ship's operational capacity to 75%, repairs hull breaches inflicted during boarding attempts, and enhances crew morale by +15%. However, it demands every last coin you possess for its activation.",
    "category": "faction",
    "price": 760,
    "icon": "🔧",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Repair Hull Breaches",
      "Boost Morale"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Engineering Team Required",
    "levelRequirement": 1,
    "factionBonus": {
      "morale": 15,
      "mobility": 30
    },
    "effectDetails": [
      {
        "title": "Repair Hull Breaches",
        "rules": "Activates as a bonus action. Instantaneous effect that restores hull breaches caused by Iron Legion boarding parties, restoring the ship to 75% operational capacity. This exhausts upon use."
      },
      {
        "title": "Boost Morale",
        "rules": "Passive effect. Restores +15% morale for the crew of the Vigilance while it remains on board. Ends when the artifact is expended or destroyed."
      }
    ],
    "levelRequirementReason": "Requires basic knowledge in ship maintenance to activate and use.",
    "vendorReason": "The Gilded Gryphon specializes in restoring and protecting the airship Vigilance, thus selling this repair fund.",
    "shippingDetail": "Ships via specialized airship courier with a one-day transit time from the Gilded Gryphon's central hub.",
    "usage": {
      "activation": "Bonus action to activate and use.",
      "duration": "Instantaneous effect; exhausts upon activation.",
      "endsWhen": "Exhausted or destroyed, no recharge.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price considering the artifact's rare material and expert craftsmanship.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-22T04:48:03.721966+00:00",
    "aiReviewedAt": "2026-07-22T04:48:03.721966+00:00",
    "aiReviewVersion": 1
  },
  "faction_veteran_sergeants": {
    "id": "faction_veteran_sergeants",
    "name": "Veteran Sergeant Training",
    "description": "Veteran Sergeant Training is a rare faction boon that allows you to hire elite mercenaries to mentor your squad leaders in advanced combat tactics and leadership. Upon completion of their training, each cohort leader gains +2 levels, significantly enhancing their tactical acumen and battlefield prowess. This item also opens the door for the unique 'Squad Tactics' ability, which lets you coordinate a cohesive battle plan with your squad during critical moments.",
    "category": "faction",
    "price": 760,
    "icon": "🎖️",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+2 Levels to all Cohort Leaders",
      "Unlocks 'Squad Tactics'"
    ],
    "vendor": "gilded_gryphon",
    "factionBonus": {
      "combatReadiness": 15,
      "leadership": 10
    },
    "effectDetails": [
      {
        "title": "Cohort Leader Level Boost",
        "rules": "When activated, the item triggers a training session led by elite mercenaries. After this session, each cohort leader gains +2 levels to their proficiency in combat and leadership skills. This effect has no save DC or duration; it simply requires the completion of the training, which takes one week with the Gilded Gryphon's assistance."
      },
      {
        "title": "Squad Tactics Unlocked",
        "rules": "'Squad Tactics' allows you to coordinate a battle plan that grants all cohort leaders and their troops advantage on attack rolls and saving throws for 1 hour. This effect is limited to once per day, and it requires the item to be activated during a short or long rest."
      }
    ],
    "levelRequirement": 5,
    "levelRequirementReason": "Requires at least level 5 to effectively leverage the advanced combat tactics training provided by this item.",
    "vendorReason": "The Gilded Gryphon is known for its connections with elite mercenaries and its ability to broker such high-value faction boons.",
    "shippedBy": "Swift Courier of the Golden Road",
    "shippingDetail": "Delivered within one week, ensuring your squad leaders are well-prepared before deployment.",
    "usage": {
      "activation": "Activates during a short or long rest with the Gilded Gryphon's assistance.",
      "duration": "Instantaneous; the training takes place over one week.",
      "endsWhen": "The cohort leader no longer benefits from the training once they gain +2 levels.",
      "charges": "Unlimited, but limited to one 'Squad Tactics' effect per day."
    },
    "priceReason": "The price reflects the rare nature of the item and the significant tactical advantage it provides to squad leaders.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-22T04:48:31.654031+00:00",
    "aiReviewedAt": "2026-07-22T04:48:31.654031+00:00",
    "aiReviewVersion": 1
  },
  "faction_war_declaration": {
    "id": "faction_war_declaration",
    "name": "Faction War Declaration",
    "description": "The Faction War Declaration is a ceremonial parchment imbued with the essence of ancient rivalries. Its crimson ink and gold filigree are said to have been crafted by the hands of long-dead sages during a time when factions warred for dominance. Upon activation, it triggers a 30-day conflict that can be joined or abandoned by allied factions, subjecting all parties involved to heightened tensions and strategic shifts in power dynamics.",
    "category": "faction",
    "price": 250000,
    "icon": "⚔️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Forces a 30-day factional war",
      "Allies may join or abandon the conflict"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Blood Seal Couriers",
    "levelRequirement": 12,
    "factionBonus": {
      "combatReadiness": 100,
      "economy": -50
    },
    "effectDetails": [
      {
        "title": "Faction War Declaration",
        "rules": "Activates as an action, creating a 30-day war with another faction. The duration cannot be extended beyond this limit without DM permission."
      },
      {
        "title": "Allied Participation",
        "rules": "Allies can choose to join or abandon the conflict at any time during its duration, subjecting them to the same consequences and benefits as the initiating faction."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 12 to ensure players have sufficient resources and strategic depth for such a high-stakes declaration.",
    "vendorReason": "The Onyx Hand is known for its connections to ancient treaties and war declarations, making it the most suitable vendor for such an item.",
    "shippingDetail": "Ships via Blood Seal Couriers with a guaranteed delivery within three days of purchase.",
    "usage": {
      "activation": "Requires an action to activate and declare war.",
      "duration": "30-day duration; ends upon expiration or if the initiating faction retracts the declaration.",
      "endsWhen": "The conflict ends after 30 days, or if the declaring faction withdraws the declaration before its time runs out.",
      "charges": "Unlimited charges"
    },
    "priceReason": "This item is priced at 1000 XP to reflect its high level of strategic importance and potential for significant impact on game balance.",
    "priceOriginal": 1000000,
    "priceReviewedAt": "2026-07-22T04:49:08.718972+00:00",
    "aiReviewedAt": "2026-07-22T04:49:08.718972+00:00",
    "aiReviewVersion": 1
  },
  "faction_warp_pipe_hub": {
    "id": "faction_warp_pipe_hub",
    "name": "Portable Warp Hub",
    "description": "The Portable Warp Hub is a sleek, cylindrical device adorned with the emblem of Toad Town. Crafted from rare metal alloy and enchanted with the mystic energies of the Warp Pipe network, it links to three major cities: Toad Town, Rogueport, and the Capital. With this hub, you can instantly transport soldiers or yourself across vast distances, deploy troops at a moment's notice, and ensure an escape route is always available in times of need.",
    "category": "faction",
    "price": 22000,
    "icon": "🟢",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Instant Interdimensional Travel",
      "Deploy Troops Instantly"
    ],
    "vendor": "toad_town_market",
    "factionBonus": {
      "mobility": 50,
      "operations": 20
    },
    "effectDetails": [
      {
        "title": "Teleportation",
        "rules": "As an action, the user can activate the Warp Hub to teleport to one of three linked cities: Toad Town, Rogueport, or the Capital. The destination is set by the user and appears as a shimmering portal. This effect has no save DC and does not consume charges."
      },
      {
        "title": "Troop Deployment",
        "rules": "The Portable Warp Hub can deploy troops instantly to any location within its range when activated with an action. Troops materialize at the designated point, ready for battle or mission. This effect has a 1-hour cooldown between uses and does not consume charges."
      }
    ],
    "levelRequirement": 5,
    "levelRequirementReason": "This device requires a minimum character level of 5 to ensure proper handling and operation.",
    "vendorReason": "The market in Toad Town is well-known for its trade with the Warp Pipe network, making it logical for this item to be sold here.",
    "shippedBy": "Swiftwind Express",
    "shippingDetail": "Ships within 24 hours via Swiftwind Express, ensuring timely delivery of such a critical tool.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous (Teleportation) / 1 Hour Cooldown (Troop Deployment)",
      "endsWhen": "Effect ends when the teleportation destination is reached or troop deployment is completed, respectively. Requires a new activation for reuse.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its legendary rarity and utility in critical situations.",
    "priceOriginal": 480000,
    "priceReviewedAt": "2026-07-22T04:48:32.897758+00:00",
    "aiReviewedAt": "2026-07-22T04:48:32.897758+00:00",
    "aiReviewVersion": 1
  },
  "faction_weapon_cache": {
    "id": "faction_weapon_cache",
    "name": "Weapons Cache",
    "description": "The Weapons Cache arrives in a dusty, leather-bound crate imprinted with the Koopa emblem. Inside lie ten quality weapons, each with a story of rebellion against Bowser’s rule. These arms are not just for show—they’re imbued with the spirit of resistance and can bolster up to ten toads, granting them +1 to their attack rolls until the next dawn. The cache also opens new possibilities for toad allies, allowing them to become armed patrols that defend the faction's interests with unmatched zeal.",
    "category": "faction",
    "price": 760,
    "icon": "⚔️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% Combat Readiness",
      "Up to 10 toads gain +1 to attack rolls"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Koopa Smuggling Routes",
    "levelRequirement": 1,
    "factionBonus": {
      "combatReadiness": 15,
      "loyalty": 5
    },
    "effectDetails": [
      {
        "title": "Combat Readiness Boost",
        "rules": "When activated by a faction member, the Weapons Cache bestows a +10% increase in combat readiness for one hour. This effect is cumulative with other similar bonuses and cannot exceed +50%. The cache must be checked at dawn to maintain its potency."
      },
      {
        "title": "Enhanced Attacks",
        "rules": "For every weapon in the cache that is wielded, all toads within a 30-foot radius gain a +1 bonus to their attack rolls for one hour. This effect does not stack with other bonuses of similar nature and only applies while the weapons are actively used."
      }
    ],
    "levelRequirementReason": "Suitable for any level, as it aids in faction defense and combat readiness.",
    "vendorReason": "The Valley Trading Post specializes in unique and powerful items that aid the factions of Koopa Town.",
    "shippingDetail": "Due to the sensitive nature of these weapons, they are delivered under heavy guard by a trusted courier. Expect a delay of one week from the time of purchase.",
    "usage": {
      "activation": "Activates when a faction member checks the cache at dawn.",
      "duration": "One hour per weapon used.",
      "endsWhen": "The effect ends upon the next dawn or if all weapons are removed from combat use for more than one hour.",
      "charges": "Unlimited, as long as the cache remains intact."
    },
    "priceReason": "Balanced at 1000 XP, this item provides significant benefits to faction members without being overpowered.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-22T19:27:33.900454+00:00",
    "aiReviewedAt": "2026-07-22T19:27:33.900454+00:00",
    "aiReviewVersion": 1
  },
  "faerun_amber_soul_torch": {
    "id": "faerun_amber_soul_torch",
    "name": "Amber Soul Torch",
    "description": "The Amber Soul Torch is a glowing, amber-hued orb forged from the captured essence of fallen heroes' souls. Crafted by master forgers in the heart of Faerûn, it burns with memories that flicker like ancient flames, revealing hidden paths and guiding adventurers through perilous terrains. When lit, its soulfire weakens undead creatures by 30%, a testament to the power of the dead heroes who gave their lives for this creation.",
    "price": 760,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Paths",
      "Weakens Undead"
    ],
    "vendor": "faerun",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reveals Hidden Paths",
        "rules": "When activated as a bonus action, the Amber Soul Torch illuminates hidden paths and secret doors within 30 feet for 1 minute. It can be used once per long rest."
      },
      {
        "title": "Weakens Undead",
        "rules": "Inflicts 1d4 necrotic damage to each undead creature within 30 feet when activated as an action. This effect lasts until the end of your next turn and can only be used once every short or long rest."
      }
    ],
    "levelRequirementReason": "Crafted from the souls of fallen heroes, the Amber Soul Torch requires a certain spiritual understanding and experience to wield effectively.",
    "vendorReason": "Faerûn is renowned for its master forgers who can craft items imbued with ancient magic.",
    "shippingDetail": "Due to the delicate nature of the Amber Soul Torch, it must be shipped via Koopa Postal's express courier service.",
    "usage": {
      "activation": "Bonus action and Action",
      "duration": "1 minute and Until the End of Your Next Turn",
      "endsWhen": "Ends at the start of your next turn or when destroyed",
      "charges": "Unlimited, but only one use per rest"
    },
    "priceReason": "Balanced against other rare items, this Amber Soul Torch is priced to reflect its unique crafting process and potent effects.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T04:48:58.744348+00:00",
    "aiReviewedAt": "2026-07-22T04:48:58.744348+00:00",
    "aiReviewVersion": 1
  },
  "faerun_blighted_bell": {
    "id": "faerun_blighted_bell",
    "name": "Blighted Bell of Shadeward",
    "description": "The Blighted Bell of Shadeward, a cracked bronze bell imbued with the whispers of forgotten curses, is said to have been crafted in the shadowed depths of Shadeward by dark artisans. When struck, it emits a pulse that not only slows nearby enemies' movements by 10% for one round but also sends ripples of psychic agony through their minds, causing 1d4 psychic damage. The bell's resonance can summon minor curses once per day, binding the listener in tenebrous thralls.",
    "category": "equipment",
    "price": 770,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Slows target’s movement speed by 10% for 1 round",
      "Causes 1d4 psychic damage to enemies with fear traits"
    ],
    "vendor": "faerun",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slow Movement",
        "rules": "When the Blighted Bell is struck, it emits a pulse that slows all creatures within 30 feet by 10% for one round. This effect has no save DC and does not require an action to activate."
      },
      {
        "title": "Psychic Agony",
        "rules": "The bell also deals 1d4 psychic damage to any enemy with the fear trait within 30 feet, requiring a DC 15 Wisdom saving throw. On a failed save, the creature is also slowed as per the Slow Movement effect."
      }
    ],
    "levelRequirementReason": "The bell's dark magic and subtle nature make it accessible to lower-level characters who can harness its power with proper training.",
    "vendorReason": "Faerûn’s extensive trade networks allow for the distribution of even the most arcane items like this cursed bell.",
    "shippingDetail": "Ships via Pipe Express, known for its reliable delivery services across Faerûn. Delivery takes approximately one week.",
    "usage": {
      "activation": "Standard Action",
      "duration": "One Round",
      "endsWhen": "The effect ends at the start of your next turn or when struck again.",
      "charges": "Unlimited, but the summoning ability can be used once per day."
    },
    "priceReason": "The bell's rarity and dark magic make it a valuable yet balanced purchase for players looking to enhance their combat capabilities in Faerûn’s perilous lands.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T04:49:15.133642+00:00",
    "aiReviewedAt": "2026-07-22T04:49:15.133642+00:00",
    "aiReviewVersion": 1
  },
  "faerun_blooded_horn_of_zeal": {
    "id": "faerun_blooded_horn_of_zeal",
    "name": "Blooded Horn of Zeal",
    "description": "The Blooded Horn of Zeal is a relic forged from the horn of a slain dragon and the blood of a sacred warlord, its surface etched with ancient runes that glow faintly under moonlight. When sounded, it emits a resonant cry that instills fear into enemies within a 10-meter radius, causing them to falter in battle. Those who have faced death in combat can wield this weapon, whose vibrations amplify allies' courage, boosting their morale by +25% for 2 minutes.",
    "category": "equipment",
    "price": 770,
    "icon": "🐉",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Frightens foes",
      "Boosts allies' morale"
    ],
    "vendor": "faerun",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Frighten the Foes",
        "rules": "When activated (as a bonus action), this horn emits a resonant cry that imposes a -10 penalty to attack rolls and saving throws for enemies within 10 meters. The effect lasts until the end of your next turn, with a save DC of 15."
      },
      {
        "title": "Boost Allies' Morale",
        "rules": "Upon activation (as an action), this horn amplifies nearby allies’ courage by granting them advantage on saving throws and ability checks related to morale. The effect lasts for 2 minutes, with a use limit of once per long rest."
      }
    ],
    "levelRequirementReason": "Requires experience in combat to wield the power of this ancient relic.",
    "vendorReason": "Faerun's extensive network of artifact traders ensures they can offer such a powerful and rare item.",
    "shippingDetail": "Ships via Pipe Express, known for its reliability in delivering magical items across Faerûn.",
    "usage": {
      "activation": "Bonus action to frighten foes; action to boost allies' morale",
      "duration": "Instantaneous effect on enemies; lasts 2 minutes on allies",
      "endsWhen": "Effect ends at the end of your next turn for enemies, and after 2 minutes for allies. Recharges after a long rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced to ensure it remains a powerful but not overpowered item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:49:26.038070+00:00",
    "aiReviewedAt": "2026-07-22T04:49:26.038070+00:00",
    "aiReviewVersion": 1
  },
  "faerun_bloodstone_amulet": {
    "id": "faerun_bloodstone_amulet",
    "name": "Bloodstone Amulet of the Unbroken Heart",
    "description": "The Bloodstone Amulet of the Unbroken Heart is a heavy, blood-red pendant forged from a fragment of an ancient dragon's heart. It pulses faintly with the last breaths of its former master, granting resilience against magical attacks and instilling a newfound courage in those who wear it during harrowing trials. Wielders report feeling the dragon's spirit within them, lending strength to their resolve when faced with overwhelming odds.",
    "category": "equipment",
    "price": 770,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Dragon’s Resilience",
      "Courage Unleashed"
    ],
    "vendor": "faerun",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dragon’s Resilience",
        "rules": "While wearing this amulet, the wearer gains a +1 bonus to all saving throws against magical effects. This effect persists for 1 hour after removal."
      },
      {
        "title": "Courage Unleashed",
        "rules": "When you make a morale check (such as when facing fear or despair), you gain advantage on the roll, and your chance of resisting fear effects increases by 20%. This effect lasts until the end of your next short rest."
      }
    ],
    "levelRequirementReason": "The amulet's power is accessible to all who can appreciate its history and lore.",
    "vendorReason": "Faerûn has long been a hub for relics of old, and this amulet carries the weight of a thousand battles.",
    "shippingDetail": "The courier provides expedited delivery to those who seek the amulet's protection.",
    "usage": {
      "activation": "Passive effect. No activation required.",
      "duration": "1 hour after removal or until expended, whichever comes first.",
      "endsWhen": "Removal of the amulet, end of a short rest, or upon destruction of the item.",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's rarity and historical significance justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:49:35.249146+00:00",
    "aiReviewedAt": "2026-07-22T04:49:35.249146+00:00",
    "aiReviewVersion": 1
  },
  "faerun_bullet_bill_express_tube": {
    "id": "faerun_bullet_bill_express_tube",
    "name": "Bullet Bill Express Tube",
    "description": "The Bullet Bill Express Tube is a collapsible, pipe-like artifact adorned in red and blue streaks, reminiscent of a high-speed express train. This peculiar device can be attached to any surface and serves as a makeshift teleportation point, allowing travelers to instantly jump between two points within a 50-foot line. When used, it emits a brief burst of mushroom-infused gas, creating a distracting cloud that lasts for 1 round, rendering nearby enemies temporarily blind and disoriented. The tube requires a WarioWare activation key and fails if exposed to Void energy, which destabilizes its internal mechanics.",
    "price": 40,
    "icon": "🚀",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Instantaneous Teleportation",
      "Distracting Cloud"
    ],
    "vendor": "faerun",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instantaneous Teleportation",
        "rules": "The Bullet Bill Express Tube can be activated as an action. When used, it creates a line of instantaneous teleportation between two points within a 50-foot range. The user and any allies within the tube are teleported to the target point. This effect fails if exposed to Void energy or if the activation key is missing."
      },
      {
        "title": "Distracting Cloud",
        "rules": "When activated, the tube releases a mushroom-infused gas that creates a 10-foot-radius cloud centered on the tube. All creatures within this area must succeed on a DC 13 Constitution saving throw or be blinded and disoriented for 1 round. The effect ends once the duration expires."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers just starting their journey, as it provides an easy means of rapid travel and a useful distraction.",
    "vendorReason": "Faerun specializes in unique and practical gadgets that aid travelers and adventurers on their quests.",
    "shippingDetail": "Delivered by the Bullet Bill Express, ensuring safe and swift transportation of this high-demand item.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Teleportation) / 1 round (Distracting Cloud)",
      "endsWhen": "Exposure to Void energy or the end of its duration",
      "charges": "Unlimited"
    },
    "priceReason": "The item’s unique combination of teleportation and distraction features, along with its reliability in the field, justifies a balanced XP price.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-22T04:49:44.209038+00:00",
    "aiReviewedAt": "2026-07-22T04:49:44.209038+00:00",
    "aiReviewVersion": 1
  },
  "faerun_courier_item_here": {
    "id": "faerun_courier_item_here",
    "name": "Hammer Bros Courier Package",
    "description": "A sturdy, sealed crate stamped with the Hammer Bros. logo, its surface worn from countless deliveries. This is no ordinary package—sealed without a return address and likely to contain something of significant value or peril. The crate contains either a false treasure, a cursed item, or a genuine fortune, but only those who can wait 24 hours will know for sure. A Hammer Bros. courier might deliver it personally, ensuring its safe arrival in Faerûn.",
    "price": 220,
    "icon": "📦",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Genuine Treasure Delivery",
      "Hidden Quest Unlocked"
    ],
    "vendor": "faerun",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Genuine Treasure Delivery",
        "rules": "After waiting 24 hours from the time of delivery, the crate unlocks. If it contains a genuine treasure, the buyer gains 500 gold pieces. If it contains a cursed item or false treasure, the recipient must make a DC 15 Wisdom saving throw to avoid its effects for 24 hours."
      },
      {
        "title": "Hidden Quest Unlocked",
        "rules": "Upon receiving this package, the player gains access to a hidden quest line in Rogueport. This quest involves retrieving lost Hammer Bros. property and restoring their honor. The quest is only available if the crate contains genuine treasure."
      }
    ],
    "levelRequirementReason": "The crate's contents are unpredictable, making it suitable for players of any level.",
    "vendorReason": "Faerûn's vendors sell this crate as part of their diverse range of mysterious and valuable deliveries.",
    "shippingDetail": "Delivered personally by a Hammer Bros. courier, ensuring the package arrives intact in Faerûn.",
    "usage": {
      "activation": "After waiting 24 hours from delivery, the player can open the crate to discover its contents.",
      "duration": "The effects are immediate upon opening and last for 24 hours if a save is failed.",
      "endsWhen": "The effects end after 24 hours or when the item's effects are resolved.",
      "charges": "Unlimited, as each crate can be opened only once."
    },
    "priceReason": "The crate's value lies in its potential to deliver either a significant reward or a dangerous challenge, balancing risk and reward for the player.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-22T04:49:54.961358+00:00",
    "aiReviewedAt": "2026-07-22T04:49:54.961358+00:00",
    "aiReviewVersion": 1
  },
  "faerun_cursed_forged_rod": {
    "id": "faerun_cursed_forged_rod",
    "name": "Cursed Forged Rod of the Shattered Sun",
    "description": "The Cursed Forged Rod of the Shattered Sun is a macabre relic crafted from the bones of a fallen sun god, now imbued with erratic and unpredictable magic. It pulses with an eerie light that flickers between shades of crimson and violet, capable of summoning a spectral flame to dispel curses and enchantments. However, its volatile nature might inadvertently call forth a rival deity’s avatar, posing a grave threat to the caster.",
    "category": "equipment",
    "price": 4700,
    "icon": "📦",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Summons Spectral Flame",
      "Risks Summoning Deity"
    ],
    "vendor": "faerun",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Spectral Flame",
        "rules": "As an action, the user can activate the rod to summon a spectral flame that targets one creature within 30 feet. The target must make a DC 17 Constitution saving throw or take 4d6 radiant damage and be cursed for 1 minute. The curse ends if the target completes a long rest."
      },
      {
        "title": "Deity Summoning",
        "rules": "The rod has a 20% chance to summon an avatar of a rival deity upon activation, which appears in combat as an outsider with CR equal to the user's level + 3. The summoned deity persists for 1 hour or until defeated."
      }
    ],
    "levelRequirementReason": "The rod requires a caster of at least 7th level due to its volatile magical properties and potential risk of summoning powerful deities.",
    "vendorReason": "Faerûn, being a major hub for arcane traders and collectors, sells this rare relic despite the risks involved.",
    "shippingDetail": "The rod must be shipped via Koopa's fastest courier to ensure safe delivery, as it is a volatile item.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for the spectral flame; lasts until dispelled or ends when the curse takes effect",
      "endsWhen": "The target completes a long rest (for curse), or the deity avatar is defeated (if summoned)",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "The rod's volatile nature and rare crafting materials justify its high price.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T19:27:45.062148+00:00",
    "aiReviewedAt": "2026-07-22T19:27:45.062148+00:00",
    "aiReviewVersion": 1
  },
  "faerun_doughnut_bridge_key": {
    "id": "faerun_doughnut_bridge_key",
    "name": "Doughnut Bridge Key",
    "description": "The Doughnut Bridge Key is a tarnished brass key with a worn-out Pianta symbol etched onto its surface. It was crafted by Team Rocket to unlock a hidden passage that once connected Pianta Village to the outside world, before Don Pianta's infamous bridge-cutting stunt. This key is said to have been blessed by Archie Miser himself, but only those of pure heart can wield it without invoking a curse.",
    "price": 22000,
    "icon": "🚪",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Opens the Doughnut Bridge",
      "Activates Hidden Passages"
    ],
    "vendor": "faerun",
    "shippedBy": "Blooper Wetworks Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Bridge Opening",
        "rules": "When activated as an action, this key opens the Doughnut Bridge for 1 hour. The bridge remains open until closed by a Pianta Enforcer or by using the key again."
      },
      {
        "title": "Passage Activation",
        "rules": "The key grants access to hidden tunnels beneath the doughnut, which are filled with traps and challenges. These tunnels remain open for 10 minutes after the key is used. Any creature entering these tunnels must make a DC 15 Dexterity saving throw or be immobilized by an unseen force."
      }
    ],
    "levelRequirementReason": "The key requires a certain level of purity and strength to wield without invoking a curse.",
    "vendorReason": "Faerun is known for its trade with Pianta Village, making it the logical vendor for such an item.",
    "shippingDetail": "The key must be shipped within a sealed container to prevent any accidental use during transit.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour (Bridge) / 10 minutes (Tunnels)",
      "endsWhen": "Closed manually or by using the key again",
      "charges": "Unlimited"
    },
    "priceReason": "The key's legendary rarity and unique ability to open both a bridge and hidden tunnels justify its price.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T04:49:48.900018+00:00",
    "aiReviewedAt": "2026-07-22T04:49:48.900018+00:00",
    "aiReviewVersion": 1
  },
  "faerun_doughnut_hole_crimson_candle": {
    "id": "faerun_doughnut_hole_crimson_candle",
    "name": "Crimson Candle of the Doughnut Hole",
    "description": "The CrimsoN Candle of the Doughnut Hole glows with an eerie, pulsating crimson hue, its light flickering like cosmic dread itself. Crafted from doughnut remnants imbued with astral essence by a forgotten mage in the depths of Faerûn, it exudes an aura that subtly warps reality. The candle's flame is said to be fueled by the very fabric of the void, making it both a marvel and a curse among those who wield it.",
    "price": 220,
    "icon": "🔥",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Void Touched Aura",
      "Psychic Distress"
    ],
    "vendor": "faerun",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Void Touched Aura",
        "rules": "While holding this candle, you and your allies within 10 feet gain advantage on saving throws against being charmed or frightened for the duration of one short rest. The candle's aura fades after a day."
      },
      {
        "title": "Psychic Distress",
        "rules": "Once per long rest, you can cause creatures hostile to you within 30 feet to make a DC 15 Wisdom saving throw or take 2d6 psychic damage and be stunned for 1 minute. The candle burns out after 30 minutes of use."
      }
    ],
    "levelRequirementReason": "The candle's astral essence requires a certain level of arcane knowledge to manipulate effectively.",
    "vendorReason": "Faerûn is known for its unique and esoteric items, including those with cosmic connections like the CrimsoN Candle.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, ensuring the candle arrives in pristine condition without any risk of damage.",
    "usage": {
      "activation": "Instantaneous use; requires attunement to the Doughnut Hole.",
      "duration": "Until the candle burns out or is extinguished.",
      "endsWhen": "The candle's flame fades after 30 minutes of continuous use, or it can be extinguished by a creature hostile to you.",
      "charges": "Unlimited; the candle refills its light once per long rest."
    },
    "priceReason": "Balanced against other uncommon items with similar effects and rarity.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T04:50:12.079799+00:00",
    "aiReviewedAt": "2026-07-22T04:50:12.079799+00:00",
    "aiReviewVersion": 1
  },
  "faerun_echo_gauntlet": {
    "id": "faerun_echo_gauntlet",
    "name": "Echo Gauntlet of the Fallen Archon",
    "description": "The Echo Gauntlet of the Fallen Archon is a gauntlet crafted from the bones of an ancient archon, its surface etched with runes that hum with forgotten battles. When activated, it grants the wearer the ability to hear the unspoken thoughts of nearby allies for up to 10 seconds, providing insight into their intentions and strategies in combat. It also enhances perception checks by +2 for a duration of 1 minute, allowing the user to discern hidden details more clearly.",
    "category": "equipment",
    "price": 4700,
    "icon": "🎭",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Enhanced Perception",
      "Thought Reading"
    ],
    "vendor": "faerun",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Enhanced Perception",
        "rules": "Activates as a bonus action. Increases the wearer's perception checks by +2 for 1 minute, ending when the gauntlet is removed or at the start of the wearer’s next turn."
      },
      {
        "title": "Thought Reading",
        "rules": "Activates on command once per short rest. The wearer can hear and interpret the unspoken thoughts of nearby allies within 30 feet for up to 10 seconds, providing insight into their plans but not speech. This effect ends if the gauntlet is damaged or when the wearer uses an action."
      }
    ],
    "levelRequirementReason": "The gauntlet's complex runes and ancient magic require a user of at least 7th level to effectively wield its power.",
    "vendorReason": "Faerun, known for its extensive archives on magical artifacts, is the only vendor capable of authenticating and selling this unique relic.",
    "shippingDetail": "The gauntlet must be shipped via Boo Spectral Mail, a service that ensures safe delivery to ensure the item's enchantments are not disrupted during transit.",
    "usage": {
      "activation": "Bonus action for Enhanced Perception; command word for Thought Reading",
      "duration": "1 minute (Enhanced Perception); 10 seconds (Thought Reading)",
      "endsWhen": "Ends when gauntlet is removed, at start of next turn, or when the effect's duration ends.",
      "charges": "Unlimited"
    },
    "priceReason": "The gauntlet's rarity and magical properties justify a price of 1000 XP.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T04:50:03.890053+00:00",
    "aiReviewedAt": "2026-07-22T04:50:03.890053+00:00",
    "aiReviewVersion": 1
  },
  "faerun_echo_helm": {
    "id": "faerun_echo_helm",
    "name": "Echo Helm of the Whispering Dunes",
    "description": "The Echo Helm of the Whispering Dunes is a heavy, resonant helm forged in the ancient dunes of Faerûn. Its surface glimmers faintly under moonlight, and when worn, it hums with the forgotten voices of battles past. The helm whispers secrets only to its wearer, granting a fleeting resistance against mind-altering spells. It seems as though the sands themselves have woven this helm from fragments of lost wars, imbuing it with a timeless echo that protects the mind and body.",
    "category": "equipment",
    "price": 770,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Mindful Resistance",
      "Dune Defense"
    ],
    "vendor": "faerun",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Mindful Resistance",
        "rules": "While wearing the Echo Helm, you gain +1 to your saving throws against charm and compulsion spells. You may activate this effect as a bonus action. The helm hums softly when activated, and the spell's duration is reduced by 1 round if successful."
      },
      {
        "title": "Dune Defense",
        "rules": "You gain a +2 bonus to AC against attacks made by spellcasters while wearing the helm. This effect lasts for 1 minute unless you are hit in combat, at which point it immediately ends and you take an additional 1d6 psychic damage."
      }
    ],
    "levelRequirementReason": "The helm's ancient enchantments require a moderate understanding of magical energies.",
    "vendorReason": "Faerûn, a hub for arcane and martial artifacts, keeps the Echo Helm in its collection of rare relics.",
    "shippingDetail": "The helm is carefully packed to prevent damage during transit, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action (Mindful Resistance), Instantaneous (Dune Defense)",
      "duration": "1 minute (Mindful Resistance), 1 round (disorienting hum effect from Dune Defense until interrupted by a hit or spell)",
      "endsWhen": "The helm's effects end when you remove it, are hit in combat, or cast a mind-affecting spell.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from ancient dunes and imbued with powerful enchantments, the Echo Helm is a rare find worth its hefty price.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T04:50:37.468391+00:00",
    "aiReviewedAt": "2026-07-22T04:50:37.468391+00:00",
    "aiReviewVersion": 1
  },
  "faerun_echo_of_the_bloodmoon": {
    "id": "faerun_echo_of_the_bloodmoon",
    "name": "Echo of the Bloodmoon",
    "description": "A crystalline pendant that hums in harmony with lunar eclipses, the Echo of the Bloodmoon channels raw celestial magic. Crafted from the glassy residue of ancient moonstone and enchanted by faerie weavers during a total eclipse, it grants a fleeting surge of power to those who wear it during such rare events. Those whose minds are not tempered may experience moments of confusion or even madness as the lunar energies push their limits.",
    "price": 770,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Moonlit Surge",
      "Mortal Madness"
    ],
    "vendor": "faerun",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Moonlit Surge",
        "rules": "When activated during a lunar eclipse, this pendant grants +4d6 spell damage for 1 round. The wearer must be within the shadow of the moon's total eclipse to activate its power. If used by a non-magical caster, it fails and causes confusion instead."
      },
      {
        "title": "Mortal Madness",
        "rules": "If worn outside of a lunar eclipse or by someone whose mind is not stable, the pendant may cause temporary madness for 1d4 rounds. The wearer must succeed on a DC 15 Wisdom saving throw or become confused until the next dawn."
      }
    ],
    "levelRequirementReason": "Wearing this pendant during an eclipse requires a certain level of magical awareness and mental fortitude.",
    "vendorReason": "Faerun, a master of ancient artifacts, has a deep connection to lunar magic that allows him to craft and sell such powerful relics.",
    "shippingDetail": "The pendant must be shipped during the waxing or waning phases of the moon to ensure its power remains intact.",
    "usage": {
      "activation": "Activating this pendant requires a bonus action and can only be used once per lunar eclipse cycle.",
      "duration": "The effect lasts for one round (up to 1 minute) after activation.",
      "endsWhen": "The effect ends if the wearer is no longer in the shadow of the moon or if the wearer takes any damage.",
      "charges": "Unlimited, but can only be used once per lunar cycle."
    },
    "priceReason": "Crafted from rare materials and requiring faerie weavers' magic during a total eclipse, this pendant is both valuable and rare.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T04:50:33.101648+00:00",
    "aiReviewedAt": "2026-07-22T04:50:33.101648+00:00",
    "aiReviewVersion": 1
  },
  "faerun_echo_of_the_wolf": {
    "id": "faerun_echo_of_the_wolf",
    "name": "Echo of the Wolf",
    "description": "The Echo of the Wolf is a cursed amulet made from ancient wolf bone and enchanted with the spirits of lost wolves. It howls in response to nearby undead, allowing its wearer to perceive their thoughts for up to one minute. This tool serves both hunters seeking to unravel undead plots and scholars studying the undead's mental patterns, though it risks driving those who use it against living creatures into madness.",
    "price": 770,
    "icon": "🐺",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Perceive Undead Thoughts",
      "Expose Hidden Hazards"
    ],
    "vendor": "faerun",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Perceive Undead Thoughts",
        "rules": "The wearer can listen to the thoughts of nearby undead for up to one minute. This effect is instantaneous upon activation and requires no action. The effect ends if the wearer uses it against a living creature or if they suffer from madness."
      },
      {
        "title": "Expose Hidden Hazards",
        "rules": "The amulet reveals hidden traps or cursed paths within 10 feet of its wearer, making them instantly noticeable to all. This effect is also instantaneous and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item's effects are potent enough that only those with some experience should wield it.",
    "vendorReason": "Faerûn is known for its extensive trade in magical artifacts and relics, including cursed items with unique histories.",
    "shippingDetail": "The Echo of the Wolf must be shipped via a specially enchanted courier to protect it from damage during transit.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "Up to one minute or until used against living creatures",
      "endsWhen": "Used against living creatures or wearer suffers madness",
      "charges": "Unlimited, once per long rest"
    },
    "priceReason": "The item's effects are balanced for a rare piece of equipment that requires some level of experience to wield safely.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:50:25.997752+00:00",
    "aiReviewedAt": "2026-07-22T04:50:25.997752+00:00",
    "aiReviewVersion": 1
  },
  "faerun_ember_satchel": {
    "id": "faerun_ember_satchel",
    "name": "Ember Satchel of the Forgotten Flame",
    "description": "The Ember Satchel of the Forgotten Flame is a leather pouch whose molten thread glows with a warm ember that flickers like embers from an ancient fire. When opened, it releases a steady flame that can light two torches in one round and restore 10 hit points when used to ignite magical flames. The satchel's ember is said to have been crafted by the hands of forgotten priests who once tended to the sacred fires of old Faerûn.",
    "price": 220,
    "icon": "🔥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Twin Torchlight",
      "Magical Healing Glow"
    ],
    "vendor": "faerun",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Twin Torchlight",
        "rules": "As a bonus action, you can use the Ember Satchel to light two torches in one round. This effect is instantaneous and does not require any material components."
      },
      {
        "title": "Magical Healing Glow",
        "rules": "When used to ignite a magical flame, this satchel restores 10 hit points to you or a creature of your choice within reach. You can use this feature once per short rest."
      }
    ],
    "levelRequirementReason": "The Ember Satchel is crafted for adventurers who need quick and reliable light sources, making it accessible to those of any level.",
    "vendorReason": "Faerûn's vendors are known for their extensive knowledge of ancient relics and enchanted items.",
    "shippingDetail": "The Ember Satchel is shipped in a specially prepared, temperature-controlled package to ensure the ember remains stable during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Ember Satchel is priced at 1000 XP due to its unique crafting process and the magical properties of the molten thread.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T04:50:41.814808+00:00",
    "aiReviewedAt": "2026-07-22T04:50:41.814808+00:00",
    "aiReviewVersion": 1
  },
  "faerun_ember_scarf": {
    "id": "faerun_ember_scarf",
    "name": "Ember Scarf of the Ashen Throne",
    "description": "The Ember Scarf of the Ashen Throne, a relic spun from the very breath of a fallen dragon's flames, radiates an unholy warmth that wards against frost and cold. Its embers glow with a dim, foreboding light when danger approaches, warning the wearer to brace for impending doom. Crafted in the shadowy forges of the Ashen Throne, this scarf not only protects but also enhances the wearer's fire-based attacks, granting them an edge in the battlefield.",
    "category": "equipment",
    "price": 770,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% chance to resist cold damage",
      "Glows dimly when fear is detected"
    ],
    "vendor": "faerun",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Cold Resistance Boost",
        "rules": "The scarf grants a +20% chance to resist cold damage. This effect lasts until the wearer enters a state of fear, at which point it immediately dissipates."
      },
      {
        "title": "Fear Detection Glow",
        "rules": "When the wearer is in a state of fear, the scarf glows with a dim, ominous light for 1 minute. This glow can be seen within 30 feet by any creature capable of detecting magical auras or similar senses."
      }
    ],
    "levelRequirementReason": "The intricate craftsmanship and dragonfire essence require the wearer to have reached at least fifth level.",
    "vendorReason": "Faerun, known for its extensive trade networks with ancient draconic artifacts, offers this unique relic to adventurers of sufficient standing.",
    "shippingDetail": "The scarf is delivered via the Shy Guy Smugglers' secret routes, ensuring it reaches its destination without arousing suspicion.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Lasts until the wearer enters a state of fear or until expended in combat",
      "endsWhen": "The scarf's glow fades when the wearer exits a state of fear, and it is exhausted for the day after being used in combat.",
      "charges": "Unlimited; the scarf regains its glow once the wearer completes a short rest"
    },
    "priceReason": "The unique crafting materials and the dragonfire essence required to create this scarf justify its moderate price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:51:42.217684+00:00",
    "aiReviewedAt": "2026-07-22T04:51:42.217684+00:00",
    "aiReviewVersion": 1
  },
  "faerun_feywild_bloodstone": {
    "id": "faerun_feywild_bloodstone",
    "name": "Feywild Bloodstone",
    "description": "The Feywild Bloodstone glows with an ethereal, pulsating light that seems to echo the heartbeat of the fey realms. When worn near the heart, it grants the wearer a profound connection to the mystical plane, allowing them to perceive magical echoes and navigate enchanted paths with ease. This ancient crystal can also be used to identify hidden fey constructs or illusions, making it an invaluable tool for any adventurer venturing into Faerûn’s most dangerous territories.",
    "category": "equipment",
    "price": 770,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+5% chance to trigger a fey resonance effect on enchanted terrain",
      "Grants a 30-second duration of ‘fey perception’ during combat"
    ],
    "vendor": "faerun",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fey Resonance Trigger",
        "rules": "The wearer has a +5% chance to trigger a fey resonance effect on enchanted terrain within 60 feet. This effect provides temporary magical echoes that can guide or disrupt the user as per the DM's discretion."
      },
      {
        "title": "Fey Perception",
        "rules": "When activated, the wearer gains the ‘fey perception’ ability for a duration of 30 seconds during combat. They gain advantage on Wisdom (Perception) checks to detect hidden fey constructs or illusions within 60 feet."
      }
    ],
    "levelRequirementReason": "The crystal's potent magical energy requires minimal alignment with its mystical properties.",
    "vendorReason": "Faerûn is known for its deep connections to the Feywild and often carries items that bridge the realms.",
    "shippingDetail": "The Rakasha deliver this item via a swift, yet ethereal route through the Feywild, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Activates on command as a bonus action. Ends when used or after 30 seconds if not engaged in combat.",
      "duration": "30 seconds during combat",
      "endsWhen": "The effect ends at the end of the wearer's next turn if they are no longer engaged in combat.",
      "charges": "Unlimited, but only one use per short rest"
    },
    "priceReason": "While not overly powerful, the item's unique abilities and Feywild origin justify a moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:51:05.746816+00:00",
    "aiReviewedAt": "2026-07-22T04:51:05.746816+00:00",
    "aiReviewVersion": 1
  },
  "faerun_fireball_grenade": {
    "id": "faerun_fireball_grenade",
    "name": "Fireball Grenade",
    "description": "The Fireball Grenade is a compact, alchemically charged device that unleashes hellish flames upon activation. When thrown, it ignites a searing explosion within a 10-foot radius, incinerating everything in its path with fiery fury. The grenade's origin lies in the dark forges of the Shadow Marches, where Team Rocket's misadventures led to an ill-fated collaboration with a rogue warlock. Caution is advised when using this volatile device; near wizards might trigger a magical backlash that can prove fatal.",
    "price": 770,
    "icon": "🔥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Explosive Damage",
      "Potential Backlash"
    ],
    "vendor": "faerun",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Explosive Damage",
        "rules": "When activated, the Fireball Grenade deals 300 fire damage to all creatures within a 10-foot radius. The explosion ignites flammable materials and creates a hazardous area that lasts for 1 minute."
      },
      {
        "title": "Potential Backlash",
        "rules": "If used within 50 feet of an active wizard, there is a 25% chance (DC 15) of triggering a magical backlash. The target must succeed on a DC 15 Dexterity saving throw or be knocked prone and take 50 fire damage."
      }
    ],
    "levelRequirementReason": "The Fireball Grenade's volatile nature demands at least first-level proficiency to handle its unpredictable power.",
    "vendorReason": "Faerun, with its bustling markets and diverse clientele, is the perfect place for this explosive item to find a home.",
    "shippingDetail": "Due to the volatile nature of the Fireball Grenade, it must be shipped in specialized containers and only delivered during daylight hours.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous",
      "endsWhen": "The grenade is destroyed or its effect ends upon activation",
      "charges": "Unlimited"
    },
    "priceReason": "The Fireball Grenade's rarity and the potential for catastrophic damage justify its fair price of 1,000 XP.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T04:51:09.119055+00:00",
    "aiReviewedAt": "2026-07-22T04:51:09.119055+00:00",
    "aiReviewVersion": 1
  },
  "faerun_forged_gauntlet": {
    "id": "faerun_forged_gauntlet",
    "name": "Onyx Hands Forged Gauntlet",
    "description": "The Onyx Hands Forged Gauntlet hums with the residual power of a warlord’s wrath, its blackened iron surface etched with arcane runes that glow faintly in the dark. This gauntlet not only deals +2 extra damage to undead foes but also grants the wearer a +1 bonus to Strength checks against creatures displaying fear-inducing traits. A potent relic from a bygone age, it ensures that none who wear it can be affected by non-magical fear effects.",
    "category": "equipment",
    "price": 770,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Deals +2 Damage Against Undead",
      "Grants +1 Bonus To Strength Checks Against Fear-Inducing Creatures"
    ],
    "vendor": "faerun",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Undead Damage",
        "rules": "When the wearer strikes an undead creature with a melee attack, this gauntlet deals an additional 2 points of damage. This effect is active as long as the gauntlet remains equipped."
      },
      {
        "title": "Fear Resistance",
        "rules": "The wearer gains resistance to all non-magical fear effects while wearing these gauntlets. The effect persists until the end of their next turn after removing the gauntlets."
      }
    ],
    "levelRequirementReason": "This gauntlet is crafted for those brave enough to face undead armies or creatures with a fear-inducing presence, but not yet fully versed in combat.",
    "vendorReason": "Faerun, known for its extensive trade routes and access to ancient craftsmanship, would naturally carry such a relic.",
    "shippingDetail": "The gauntlets are carefully packed with straw to prevent damage during transit.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous and ongoing while equipped.",
      "endsWhen": "Discontinues upon removal from the wearer's hands or if the wearer is incapacitated.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The gauntlets are rare, crafted from fallen warlord remnants, and provide potent yet balanced defensive and offensive advantages.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T04:51:14.309551+00:00",
    "aiReviewedAt": "2026-07-22T04:51:14.309551+00:00",
    "aiReviewVersion": 1
  },
  "faerun_gravity_ribbon": {
    "id": "faerun_gravity_ribbon",
    "name": "Gravity Ribbon",
    "description": "The Gravity Ribbon is a whimsical, ribbon-like device crafted from ethereal silk and bound by ancient magic. This Faerûnian artifact allows its wearer to defy gravity on the side of the doughnut, floating effortlessly through air currents. It grants a remarkable 20-foot jump vertically, enhancing agility in the Grand Country’s unique topography. However, it causes disorienting vertigo when used in high-gravity zones, making it best suited for those who can handle such dizziness.",
    "price": 4700,
    "icon": "🌀",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Defies gravity",
      "Enhanced vertical jump"
    ],
    "vendor": "faerun",
    "shippedBy": "Blooper Wetworks Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Defy Gravity",
        "rules": "When activated as a bonus action, the wearer floats through air currents on one side of the doughnut. This effect lasts until the end of their next turn or when they choose to descend. It has no effect in high-gravity zones."
      },
      {
        "title": "Vertical Jump",
        "rules": "Activates as a bonus action, granting the wearer a 20-foot jump vertically on one side of the doughnut. This ability can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Acrobatics to fully utilize its gravity-defying properties.",
    "vendorReason": "Faerûnian craftsmanship and Blooper Wetworks' expertise make this item a perfect fit for their inventory.",
    "shippingDetail": "Ships within the Grand Country via specialized air currents, ensuring safe delivery to the recipient.",
    "usage": {
      "activation": "Bonus action or reaction (as needed)",
      "duration": "Until end of next turn or when descending",
      "endsWhen": "Ends on their turn if not used again",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "Balanced to allow for the unique and entertaining benefits without overshadowing other gear.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T04:51:32.394375+00:00",
    "aiReviewedAt": "2026-07-22T04:51:32.394375+00:00",
    "aiReviewVersion": 1
  },
  "faerun_greenskin_satchel": {
    "id": "faerun_greenskin_satchel",
    "name": "Greenskin Satchel of Whispering Roots",
    "description": "The Greenskin Satchel of Whispering Roots is a moss-woven satchel pulsating with life, its roots embedded in the very heart of Faerûn’s verdant forests. Crafted from ancient, enchanted wood and bound by a pact with the forest spirits, it absorbs poisons and venoms while subtly blending you into your surroundings. When activated, it grants a fleeting camouflage that makes you nearly indistinguishable to casual observers for a round.",
    "category": "equipment",
    "price": 770,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Absorbs Poison",
      "Camouflage"
    ],
    "vendor": "faerun",
    "shippedBy": "Pipe Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Poison Absorption",
        "rules": "When the wearer is subjected to poison or venom, they can activate the satchel as an action. It absorbs 1d4 points of damage and neutralizes the effect for 1 minute."
      },
      {
        "title": "Camouflage",
        "rules": "The wearer gains a +5 bonus to Stealth checks in woodland terrain when using the satchel. The camouflage effect lasts for 1 round (6 turns) and ends if the wearer attacks or moves more than 30 feet away from their original position."
      }
    ],
    "levelRequirementReason": "The satchel requires a minimum of 2 levels to activate its effects, ensuring it is used in combat scenarios where the wearer can effectively leverage its benefits.",
    "vendorReason": "Faerûn's vendors specialize in items that harmonize with the natural world and offer unique advantages to adventurers.",
    "shippingDetail": "The satchel is carefully packed for safe delivery, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 round (6 turns)",
      "endsWhen": "Attacking or moving more than 30 feet away from the original position",
      "charges": "Unlimited"
    },
    "priceReason": "The satchel's rarity and enchanted properties, combined with its unique benefits to combat effectiveness, justify this fair price.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T19:28:00.299342+00:00",
    "aiReviewedAt": "2026-07-22T19:28:00.299342+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_name": {
    "id": "faerun_item_name",
    "name": "Echoing Helm of the Silent King",
    "description": "The Echoing Helm of the Silent King whispers the secrets of the past, its cold metal surface etched with runes that glow faintly in the dark. This helm amplifies the thoughts of those who have passed beyond life’s veil within a hundred years, allowing you to hear their final musings and last wishes. It is said the spirit of a once-great king haunts this armor, ensuring its wearer can uncover hidden truths that others cannot.",
    "category": "equipment",
    "price": 770,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Hear deceased beings' thoughts",
      "Unearth hidden truths"
    ],
    "vendor": "faerun",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Thought Listening",
        "rules": "As a bonus action, you can hear the final thoughts of any deceased being within 100 feet. This effect lasts for 1 hour but requires concentration which ends if you are incapacitated or if your helm is removed."
      },
      {
        "title": "Insight into Hidden Truths",
        "rules": "You gain a +2 bonus to Wisdom (Insight) checks made to uncover hidden truths or secrets. This effect is active as long as the helm remains on your head and does not require concentration."
      }
    ],
    "levelRequirementReason": "This helm provides significant insight into hidden truths but requires no advanced training.",
    "vendorReason": "Faerun's extensive trade network allows for the acquisition of rare and ancient artifacts like this helm.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, ensuring the helm arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to listen; passive effect while worn",
      "duration": "1 hour or until concentration is lost",
      "endsWhen": "Incapacitation or removal of helm",
      "charges": "Unlimited"
    },
    "priceReason": "The Echoing Helm's rare material and ancient craftsmanship justify its moderate price.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T04:51:38.013045+00:00",
    "aiReviewedAt": "2026-07-22T04:51:38.013045+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_name_here": {
    "id": "faerun_item_name_here",
    "name": "Display Name Here",
    "description": "The Display Name Here is a rare, enchanted lens forged from the heart of an ancient forgeheart core. Its surface glows faintly with a deep blue light, and whispers of forgotten lore can be heard when focused upon. This magical device amplifies one's charisma by allowing the speaker to command attention in any crowd, but it also draws unwanted attention from those who seek power or control over others.",
    "category": "equipment",
    "price": 770,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Charisma Boost",
      "Draw Attention"
    ],
    "vendor": "faerun",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When activated as a bonus action, the wearer gains advantage on Charisma (Performance) checks and can increase their Charisma modifier by +2 for 1 hour. This effect cannot be used more than once per long rest."
      },
      {
        "title": "Draw Attention",
        "rules": "The wearer of this lens is constantly under scrutiny from those within a 30-foot radius who are focused on them, making it easy to become the center of attention but also increasing the risk of unwanted notice. This effect persists for as long as the item is worn."
      }
    ],
    "levelRequirementReason": "This rare lens requires a minimum level of 5 due to its complexity and magical properties.",
    "vendorReason": "Faerun, known for their expertise in ancient artifacts, is the only vendor capable of sourcing such an enchanted item.",
    "shippingDetail": "Shipped with special couriers who ensure the lens remains undisturbed during transit to preserve its magical properties.",
    "usage": {
      "activation": "Activated as a bonus action.",
      "duration": "1 hour per activation, but not more than once per long rest.",
      "endsWhen": "The effect ends when the user no longer wears the lens or completes a long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This enchanted lens is priced at 1000 XP, reflecting its rarity and the complex magic required to craft it.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T19:28:12.645076+00:00",
    "aiReviewedAt": "2026-07-22T19:28:12.645076+00:00",
    "aiReviewVersion": 1
  },
  "faerun_mage_soul_ember": {
    "id": "faerun_mage_soul_ember",
    "name": "Mage Soul Ember",
    "description": "The Mage Soul Ember is a crystalline shard that once belonged to an ancient mage. Its glow emanates from the essence of a lost wizard, and when held, it grants the wielder a surge of arcane power. This enchanted shard can be used in combat zones to reduce magical backlash by half, ensuring spells cast are more stable and effective. For 10 minutes, casting efficiency increases by +20%, allowing for faster spell preparation.",
    "price": 770,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Arcane Surge",
      "Backlash Mitigation"
    ],
    "vendor": "faerun",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Arcane Surge",
        "rules": "When the Mage Soul Ember is activated as an action, the wielder gains a +20% increase to spellcasting efficiency for 10 minutes. This effect can be recharged with 30 seconds of rest."
      },
      {
        "title": "Backlash Mitigation",
        "rules": "The wielder reduces magical backlash by half (50%) when holding the Ember, and this effect lasts for 30 seconds. The benefit ends if the user casts a spell or rests for more than one hour."
      }
    ],
    "levelRequirementReason": "This item is designed to assist beginning mages who are learning control over their magic.",
    "vendorReason": "Faerun, a reliable vendor known for magical trinkets and relics, carries this enchanted shard due to its significance in arcane lore.",
    "shippingDetail": "The package is carefully packed with protective enchantments ensuring safe delivery within two days.",
    "usage": {
      "activation": "Action",
      "duration": "10 minutes and 30 seconds",
      "endsWhen": "Casting a spell or resting for more than one hour",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's rare material composition and its significant contribution to a mage’s combat utility without overburdening the player.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:51:51.495869+00:00",
    "aiReviewedAt": "2026-07-22T04:51:51.495869+00:00",
    "aiReviewVersion": 1
  },
  "faerun_moonshard_sword": {
    "id": "faerun_moonshard_sword",
    "name": "Moonshard Blade of the Silent Watcher",
    "description": "The Moonshard Blade of the Silent Watcher is a slender, wraith-haunted sword forged from the tears of a lost moon-spirit and the ethereal light of the Faerûnian night sky. Its silver blade glows faintly under starlight, casting an eerie glow upon its wielder's path. The sword whispers secrets in the dead of night and deals extra damage to phantoms and illusions, making it a favored weapon among those who hunt spirits and shadows.",
    "category": "equipment",
    "price": 770,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+1 damage vs Illusions & Phantoms",
      "Grants +2 Stealth while holding"
    ],
    "vendor": "faerun",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illusion Damage",
        "rules": "When this sword strikes an illusion, the target must succeed on a DC 13 Wisdom saving throw or be momentarily confused for 1 round. The effect can only be used once per long rest."
      },
      {
        "title": "Stealth Boost",
        "rules": "While holding this blade, you gain a +2 bonus to Stealth checks. This effect lasts until you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "The sword's ethereal nature makes it accessible even to the most novice adventurers.",
    "vendorReason": "Faerûn is known for its connections with the celestial and fae realms, making them a fitting vendor for such a mystical blade.",
    "shippingDetail": "The sword requires special handling to ensure it arrives in pristine condition; an additional fee of 50 XP applies for this service.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "Until the end of your next turn or until you finish a short rest",
      "endsWhen": "The effect ends when you finish a long rest or if you drop the sword",
      "charges": "Unlimited, but only one use per long rest"
    },
    "priceReason": "Its rare construction and magical properties justify its moderate price.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T04:52:08.479737+00:00",
    "aiReviewedAt": "2026-07-22T04:52:08.479737+00:00",
    "aiReviewVersion": 1
  },
  "faerun_moonstone_amulet": {
    "id": "faerun_moonstone_amulet",
    "name": "Moonstone Amulet of the Forgotten Pact",
    "description": "The Moonstone Amulet of the Forgotten Pact is a cold, crystalline amulet that hums with ancient magic. Crafted from lunar quartz found in the deep forests of Faerûn, it whispers secrets of lost realms and reveals hidden paths long forgotten. Worn by those who seek to uncover truths veiled by time, this amulet amplifies one's senses, making invisible foes more apparent and granting fleeting invisibility to those who dare to wield its power.",
    "category": "equipment",
    "price": 770,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Paths",
      "Detects Invisible Foes"
    ],
    "vendor": "faerun",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reveal Hidden Path",
        "rules": "As an action, the wearer can activate the amulet to reveal hidden or secret passages within a 10-foot radius. This effect lasts for 1 minute and requires no save."
      },
      {
        "title": "Detect Invisible Foes",
        "rules": "+5% chance to detect invisible foes through natural vision or with Perception checks, without needing to spend any additional action or resource."
      }
    ],
    "levelRequirementReason": "Requires a character of at least level 3 to harness the amulet's ancient magic.",
    "vendorReason": "The Faerûnian merchant is renowned for their vast knowledge of arcane artifacts and relics from lost civilizations.",
    "shippingDetail": "Delivered with utmost secrecy, ensuring the amulet arrives in pristine condition without drawing undue attention.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until dismissed",
      "endsWhen": "The effect ends when the wearer dismisses it or after 1 minute has passed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this amulet offers significant utility without being overpowering for a rare item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:52:03.702834+00:00",
    "aiReviewedAt": "2026-07-22T04:52:03.702834+00:00",
    "aiReviewVersion": 1
  },
  "faerun_mushroom_core_amulet": {
    "id": "faerun_mushroom_core_amulet",
    "name": "Mushroom Core Amulet",
    "description": "The Mushroom Core Amulet is a pulsating fungal gem encased in obsidian, humming with earthbound power that resonates from the heart of the Underdark. Crafted during the Fungi Civil War by Fungi Knights to harness the ancient magic of corrupted fungi, this amulet grants its wearer resilience against poison and enhances mobility on fungal terrain. However, it's infamous for causing hallucinations in daylight, a side effect that can be both a blessing and a curse.",
    "category": "equipment",
    "price": 220,
    "icon": "🍄",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Poison Resistance",
      "Enhanced Mobility"
    ],
    "vendor": "faerun",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Poison Resistance",
        "rules": "The wearer gains resistance to poison damage. This effect is active while the amulet is attuned by a Fungi Knight and remains in their possession."
      },
      {
        "title": "Enhanced Mobility",
        "rules": "While within a fungal terrain, the wearer's movement speed increases by 10%. This enhancement lasts for 1 hour per long rest. The effect ends if the wearer leaves the fungal terrain or if they are incapacitated."
      }
    ],
    "levelRequirementReason": "The complex magic of the Fungi Civil War lineage and attunement requirements necessitate a minimum level to ensure proper use.",
    "vendorReason": "Faerûn's extensive trade networks include exotic items from the Underdark, making it a reliable source for such artifacts.",
    "shippingDetail": "Special handling required due to the amulet's volatile nature; delivery can take up to three days.",
    "usage": {
      "activation": "Passive effect activated by attunement and possession.",
      "duration": "Enhanced mobility lasts for 1 hour per long rest while in a fungal terrain.",
      "endsWhen": "Leaving the fungal terrain or incapacitation ends the effect.",
      "charges": "Unlimited uses, recharged with each long rest."
    },
    "priceReason": "The amulet's unique crafting process and the Fungi Civil War's historical significance justify its price as a valuable relic of the Underdark.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T04:52:43.758035+00:00",
    "aiReviewedAt": "2026-07-22T04:52:43.758035+00:00",
    "aiReviewVersion": 1
  },
  "faerun_onyx_hand_cursed_talisman": {
    "id": "faerun_onyx_hand_cursed_talisman",
    "name": "Talisman of the Onyx Hand",
    "description": "The Talisman of the Onyx Hand is a cursed black amulet with a clawed glyph etched into its surface. Crafted by Chaos Dwarfs and the Void Syndicate, it grants immunity to psychic manipulation but exacts a terrible price upon contact, dealing 1d6 psychic damage to any enemy that touches you. Allies within reach gain +2 to attack rolls against targets imbued with onyx essence. The talisman's power is such that there's an unsettling 10% chance each day when worn that an ally becomes temporarily possessed by a dark force.",
    "category": "equipment",
    "price": 4700,
    "icon": "⚔",
    "stock": 7,
    "rarity": "epic",
    "effects": [
      "Psychic Immunity",
      "Enemies Touch Damage"
    ],
    "vendor": "faerun",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Psychic Immunity",
        "rules": "The wearer gains immunity to psychic damage and manipulation effects. This effect is permanent once the talisman is attuned."
      },
      {
        "title": "Enemies Touch Damage",
        "rules": "When an enemy touches you, they take 1d6 psychic damage. This effect triggers on contact with a living creature; constructs are immune. The talisman has no charges and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The talisman's dark magic requires the user to have a solid understanding of spellcasting or martial prowess.",
    "vendorReason": "Faerûn's trade network includes rare artifacts from the Chaos Dwarfs and Void Syndicate.",
    "shippingDetail": "Delivered swiftly, but with a 1-day delay due to special handling requirements.",
    "usage": {
      "activation": "Instantaneous on contact with an enemy; triggered automatically upon touch.",
      "duration": "Until the end of your next turn or until you are no longer touched by an enemy.",
      "endsWhen": "The effect ends once used or when the talisman is removed and attunement ends.",
      "charges": "Unlimited, recharged with each short rest."
    },
    "priceReason": "Balanced at a lower price than its epic rarity to reflect its limited use and cursed nature.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T04:52:24.439204+00:00",
    "aiReviewedAt": "2026-07-22T04:52:24.439204+00:00",
    "aiReviewVersion": 1
  },
  "faerun_oracle_item_here": {
    "id": "faerun_oracle_item_here",
    "name": "Oracle’s Necrotic Lens",
    "description": "The Oracle’s Necrotic Lens is a small, obsidian lens with an etched pattern of runes that glows faintly in the dark. Crafted by Chaos Dwarfs using forbidden necromantic rituals, this lens can reveal hidden truths and secrets within a 30-foot radius. However, each use drains 500 HP from its wielder, leaving them temporarily blind for 10 seconds thereafter. The lens may bring ill fortune if used on living beings.",
    "category": "equipment",
    "price": 4700,
    "icon": "🔮",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Reveals Hidden Secrets",
      "Causes Temporary Blindness"
    ],
    "vendor": "faerun",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Reveals Hidden Secrets",
        "rules": "The Oracle’s Necrotic Lens allows the user to see through magical illusions and perceive hidden truths within a 30-foot radius. This effect is instantaneous, has no save DC required, and can be activated as an action. The lens has 5 uses per long rest."
      },
      {
        "title": "Causes Temporary Blindness",
        "rules": "Each use of the lens causes temporary blindness that lasts for 10 seconds. This effect is instantaneous upon activation and cannot be resisted with a save. There are no duration limits on this effect, but using it again before a long rest ends its current effects."
      }
    ],
    "levelRequirementReason": "The Oracle’s Necrotic Lens requires a level 7 character to use due to its potent necromantic properties and the severe health drain involved.",
    "vendorReason": "Faerûn, known for its extensive trade with Chaos Dwarfs, sells this item given their expertise in exotic goods.",
    "shippingDetail": "Shipped via Hammer Bros Handling, the lens requires special handling and is delivered within a week.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "Instantaneous for revealing secrets; instantaneous temporary blindness lasts 10 seconds.",
      "endsWhen": "The effect ends when its duration expires or the user takes any other action.",
      "charges": "5 uses per long rest"
    },
    "priceReason": "The lens is priced at 1000 XP due to its rarity, the Chaos Dwarf craftsmanship, and the severe health drain it imposes.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T04:52:48.732278+00:00",
    "aiReviewedAt": "2026-07-22T04:52:48.732278+00:00",
    "aiReviewVersion": 1
  },
  "faerun_raveneye_gloves": {
    "id": "faerun_raveneye_gloves",
    "name": "Raveneye Gloves",
    "description": "The Raveneye Gloves are crafted from leather that once belonged to the guardians of Raventree Manor, where they were imbued with the keen eyesight of ravens. These gloves grant their wearer an uncanny ability to perceive hidden dangers and secrets, making even the most subtle traps visible within ten feet. They also offer a passive +15% chance to dodge magical projectiles or spells, turning every shadow into a potential ally in the dark.",
    "category": "equipment",
    "price": 770,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveal Hidden Threats",
      "Enhanced Dodging"
    ],
    "vendor": "faerun",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Threats",
        "rules": "When entering an area with dim lighting, the wearer can use a bonus action to activate the gloves' vision of shadows. This grants them advantage on Wisdom (Perception) checks for the next minute."
      },
      {
        "title": "Enhanced Dodging",
        "rules": "The wearer gains a +15 bonus to Dexterity saving throws against magical effects and projectiles, which can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "These gloves are crafted for adventurers of all levels who value stealth and survival in dangerous situations.",
    "vendorReason": "The Faerûn trading house is known for its wide selection of rare and magical items, including the Raveneye Gloves which are sought after by explorers and scholars.",
    "shippingDetail": "The gloves are delivered with a protective charm to ensure their safe arrival. The courier will provide a tracking number for easy verification.",
    "usage": {
      "activation": "Bonus action to activate vision of shadows, once per short or long rest for enhanced dodging.",
      "duration": "Vision of shadows lasts one minute; enhanced dodging is active until the next rest.",
      "endsWhen": "Gloves are removed or the wearer completes a short or long rest.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Raveneye Gloves offer significant utility and stealth benefits, making them a worthwhile investment for any adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:52:52.447174+00:00",
    "aiReviewedAt": "2026-07-22T04:52:52.447174+00:00",
    "aiReviewVersion": 1
  },
  "faerun_rogueport_item_here": {
    "id": "faerun_rogueport_item_here",
    "name": "Rakasha Clan Heist Map",
    "description": "The Rakasha Clan Heist Map, a worn parchment embossed with intricate ink and Chaos Dwarf sigils, reveals hidden routes through Rogueport's labyrinthine undercity. This map grants you a +2 bonus to Dexterity (Stealth) checks when attempting to evade traps or sneak past sentinels. It also provides an immediate advantage in locating secret passages by granting the ability to make a Wisdom (Perception) check as a reaction, with advantage if used within 10 feet of a hidden entrance.",
    "price": 770,
    "icon": "🗺",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Dodge Traps",
      "Reveal Hidden Entrances"
    ],
    "vendor": "faerun",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Dodge Traps",
        "rules": "When you make a Dexterity (Stealth) check to avoid or disarm traps, you have advantage on the roll. This effect can be used once per long rest."
      },
      {
        "title": "Reveal Hidden Entrances",
        "rules": "As a reaction within 10 feet of an unexplored area, you may make a Wisdom (Perception) check with advantage to detect secret doors or hidden passages. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency in stealth and perception to fully appreciate the map's secrets.",
    "vendorReason": "Faerun, known for its extensive knowledge of Rogueport's underworld, ensures only authentic artifacts like this are sold.",
    "shippingDetail": "Ships via a secure underground courier system within the city limits; delivery takes no more than two days.",
    "usage": {
      "activation": "Passive effect upon acquisition; requires reaction or action for specific uses.",
      "duration": "Instantaneous or until used up, per effect.",
      "endsWhen": "Exhausted after use, recharges at dawn of the next day.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to provide a significant tactical advantage while remaining cost-effective for mid-level adventurers.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T04:53:10.314149+00:00",
    "aiReviewedAt": "2026-07-22T04:53:10.314149+00:00",
    "aiReviewVersion": 1
  },
  "faerun_rune_inkwell": {
    "id": "faerun_rune_inkwell",
    "name": "Rune Inkwell of the Whispering Scribes",
    "description": "The Rune Inkwell of the Whispering Scribes is an obsidian vessel filled with a shimmering ink that responds to your thoughts, inscribing ancient runes as you concentrate. Crafted by the scholarly enclaves of Faerûn, this inkwell allows spellcasters to inscribe up to three spells in one go, and the ink's whispers grant +1 to their spellcasting DC for 1 round after each use. This item is perfect for those who need to quickly jot down incantations mid-battle without sacrificing accuracy.",
    "price": 770,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Spell Inscription",
      "Boosted Spellcasting"
    ],
    "vendor": "faerun",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Spell Inscription",
        "rules": "Activates on a bonus action. Allows the user to inscribe up to three spells in one go, which can then be cast as normal. The ink's whispering ensures that each rune is perfectly formed and ready for casting."
      },
      {
        "title": "Boosted Spellcasting",
        "rules": "Grants +1 to the user's spellcasting DC for 1 round after using the inkwell to inscribe a spell. This effect can stack up to three times per day, but cannot exceed +3 to the DC."
      }
    ],
    "levelRequirementReason": "This item requires at least 6th level spellcasters who need quick and precise ways to cast multiple spells during combat.",
    "vendorReason": "The scholarly enclaves of Faerûn are known for their intricate craftsmanship, including items that aid in the study and practice of magic.",
    "shippingDetail": "Ships via Boo Spectral Mail, which ensures swift delivery to your doorstep.",
    "usage": {
      "activation": "Bonus action to inscribe up to three spells into the inkwell.",
      "duration": "Instantaneous casting of the inscribed spells. Boosted Spellcasting lasts for 1 round after each use.",
      "endsWhen": "Uses are exhausted when all charges are expended.",
      "charges": "3 uses per day"
    },
    "priceReason": "The inkwell's rarity, craftsmanship, and the strategic value of its effects justify a price of 1000 XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T04:53:25.875741+00:00",
    "aiReviewedAt": "2026-07-22T04:53:25.875741+00:00",
    "aiReviewVersion": 1
  },
  "faerun_scarlet_blade": {
    "id": "faerun_scarlet_blade",
    "name": "Scarlet Blade of the Crimson Queen",
    "description": "The Scarlet Blade of the Crimson Queen is a cursed dagger that glows with an eerie crimson light. Crafted from ancient, enchanted steel, it shatters upon contact with undead creatures, leaving them in splinters. However, its wielder must endure a grim trade: delivering a fatal strike to a living foe results in 2d4 points of damage and leaves the target cursed for one round, reducing their next action by half.",
    "category": "equipment",
    "price": 780,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shatters on undead",
      "Cursed Mark"
    ],
    "vendor": "faerun",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Undead Shattering",
        "rules": "When used against undead creatures, the blade delivers a devastating blow that reduces them to splinters. This effect has no save DC and is instantaneous."
      },
      {
        "title": "Cursed Mark",
        "rules": "Upon striking a living target, the wielder must endure 2d4 points of damage. The target then becomes cursed for one round, reducing their next action by half. There is no saving throw against this effect."
      }
    ],
    "levelRequirementReason": "The blade's curse and undead-shattering properties require a certain level to properly handle its malevolent nature.",
    "vendorReason": "Faerun has extensive dealings with the Crimson Queen, making this cursed weapon available through their network.",
    "shippingDetail": "Delivered via Shy Guy Smugglers' covert network, ensuring discreet and timely delivery.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous (Undead Shattering) / One round (Cursed Mark)",
      "endsWhen": "Target dies or is no longer a living creature for Cursed Mark; Undead Shattering ends when the target is destroyed.",
      "charges": "Unlimited, recharged after long rest"
    },
    "priceReason": "The blade's cursed nature and unique undead-shattering ability justify this balanced price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:53:05.941883+00:00",
    "aiReviewedAt": "2026-07-22T04:53:05.941883+00:00",
    "aiReviewVersion": 1
  },
  "faerun_shadow_talisman": {
    "id": "faerun_shadow_talisman",
    "name": "Shadow Talisman of the Veiled Blade",
    "description": "The Shadow Talisman of the Veiled Blade is a blackened talisman shaped like a blade without an edge, forged from dark iron in the shadowy depths of the Underdark. It grants the wearer temporary invisibility in dim or shadowed areas and allows them to phase through solid matter for one round, creating a path through stone and wood alike. Beware: using it in bright light causes 1d4 damage to the wielder as its power destabilizes.",
    "category": "equipment",
    "price": 780,
    "icon": "🌑",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Shadow Invisibility",
      "Phase Through Matter"
    ],
    "vendor": "faerun",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Invisibility",
        "rules": "The wearer becomes invisible within a 10-foot radius in dim or shadowed areas. This effect lasts for 1 minute, but ends early if the wearer enters an area of bright light."
      },
      {
        "title": "Phase Through Matter",
        "rules": "The wearer can phase through solid matter for one round (6 seconds), allowing them to pass through objects such as walls or doors without damage. This effect requires a successful Strength (Athletics) check contested by the DC 15 Strength saving throw of the object's owner."
      }
    ],
    "levelRequirementReason": "The talisman's arcane power demands a minimum level to channel its shadowy essence effectively.",
    "vendorReason": "Faerûn's dark alleys and mystic traders are well-acquainted with the secrets of the Underdark, making them a trusted source for such artifacts.",
    "shippingDetail": "Due to its shadowy nature, the talisman must be shipped in a special container designed to block all light from reaching it during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Shadow Invisibility) or one round (Phase Through Matter)",
      "endsWhen": "Ends when the wearer enters bright light, upon completion of its duration, or if expended in battle.",
      "charges": "Unlimited"
    },
    "priceReason": "The talisman's rarity and the complexity of materials used to forge it justify a price of 1000 XP.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T04:53:08.484556+00:00",
    "aiReviewedAt": "2026-07-22T04:53:08.484556+00:00",
    "aiReviewVersion": 1
  }
};
