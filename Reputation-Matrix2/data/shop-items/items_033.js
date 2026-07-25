// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_033 = {
  "personal_bodyguard": {
    "id": "personal_bodyguard",
    "name": "Personal Bodyguard (1 Month)",
    "description": "The Personal Bodyguard (1 Month) is a rare service that procures an elite bodyguard from Iron Legion for one month. This seasoned protector, with AC 20 and 60 hit points, wields a +2 Heavy Shield and longsword. Should the bodyguard's life be in peril, they will make a final stand to ensure your safety, but only once. The service is delivered by Contract Scroll, ensuring swift arrival under Iron Legion's strict protocols.",
    "category": "services",
    "price": 1000,
    "icon": "🛡️",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Bodyguard Sacrifice",
      "Elite Protection"
    ],
    "vendor": "iron_legion",
    "shippedBy": "Contract Scroll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bodyguard Sacrifice",
        "rules": "If the bodyguard's life is in danger and they choose to, they will make a final stand. This effect ends when the bodyguard dies, with no save allowed."
      },
      {
        "title": "Elite Protection",
        "rules": "The bodyguard provides passive protection within 30 feet; enemies within this radius have their attack rolls against you reduced by 2 and miss on natural 16s or lower. This effect ends when the service duration ends."
      }
    ],
    "levelRequirementReason": "The bodyguard is designed to protect even low-level adventurers, but those above level 1 might find it less challenging.",
    "vendorReason": "Iron Legion specializes in elite security services, including this one-month personal bodyguard package.",
    "shippingDetail": "Delivered by Contract Scroll, ensuring swift and reliable service.",
    "usage": {
      "activation": "Instantaneous (upon request)",
      "duration": "One month from activation",
      "endsWhen": "The bodyguard's life is lost or the one-month duration expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "This service offers a seasoned protector for an entire month, providing a balance between cost and protection.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-22T22:46:58.546970+00:00",
    "aiReviewedAt": "2026-07-22T22:46:58.546970+00:00",
    "aiReviewVersion": 1
  },
  "personal_butler": {
    "id": "personal_butler",
    "name": "Personal Butler (Lifetime)",
    "description": "The Personal Butler (Lifetime) is a magically bound butler who serves you eternally, his presence as steadfast as the stone of your home. He can be summoned by a simple whistle, appearing in the most unexpected places with a bow and a smile. His tasks are endless: from preparing gourmet meals to cleaning the grandest hall, he never tires or grows weary, ensuring your every need is met without fail.",
    "category": "premium",
    "price": 1000,
    "icon": "🧑‍💼",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Eternal Servitude",
      "Instant Summoning"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Butler Contract Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Eternal Servitude",
        "rules": "The butler provides all mundane tasks including cooking, cleaning, and organizing. He does not engage in combat or any activities that would endanger his immortal state."
      },
      {
        "title": "Instant Summoning",
        "rules": "Activate with a simple whistle to summon the butler instantly within 30 feet of you for the duration of one long rest."
      }
    ],
    "levelRequirementReason": "The bond between master and servant is strong, requiring only the simplest level of magic to maintain.",
    "vendorReason": "The Gilded Gryphon is known for its unique and powerful items that cater to the elite.",
    "shippingDetail": "Delivered by a trusted butler courier, ensuring the item arrives in perfect condition with all the necessary paperwork.",
    "usage": {
      "activation": "Activate with a simple whistle.",
      "duration": "One long rest.",
      "endsWhen": "The duration ends after one long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This item is considered a godly rarity, offering eternal service for only 1000 XP, making it accessible to all adventurers.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-23T16:41:19.391784+00:00",
    "aiReviewedAt": "2026-07-23T16:41:19.391784+00:00",
    "aiReviewVersion": 1
  },
  "personal_island": {
    "id": "personal_island",
    "name": "Personal Island (1 Acre)",
    "description": "A verdant oasis of green and sand in the middle of the sea, this Personal Island (1 Acre) is a private retreat of your own design. Crafted from enchanted coral reefs and seagrass, it’s as much a marvel of nature as it is a testament to your power. The island may attract curious creatures—seekers of treasure or sea monsters—and you must defend its magical deed if challenged.",
    "category": "premium",
    "price": 1000,
    "icon": "🏝️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Private Retreat",
      "Attracts Curious Beasts"
    ],
    "vendor": "mariner_guild",
    "shippedBy": "Nautical Chart",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Private Retreat",
        "rules": "This effect allows the owner to claim exclusive use of the island. It provides a safe and private location for relaxation or defense, with no creatures other than those specifically invited by the owner being allowed on it without consent."
      },
      {
        "title": "Attracts Curious Beasts",
        "rules": "The island may draw in rare sea monsters or treasure hunters. The owner must make a DC 15 Wisdom (Perception) check at dawn to notice any creatures approaching. If detected, the owner can attempt an Intimidation (DC 18) check to deter them; otherwise, they may have to defend their territory."
      }
    ],
    "levelRequirementReason": "Requires a high level to ensure the owner has the skills and resources to properly defend or utilize such a powerful asset.",
    "vendorReason": "The Mariner Guild is responsible for charting and protecting sea routes, making them well-acquainted with the dangers of the ocean. They naturally handle transactions involving islands at sea.",
    "shippingDetail": "Delivered by a trusted mariner, who will also provide basic instructions on how to claim your island.",
    "usage": {
      "activation": "Instantaneous upon claiming with the deed",
      "duration": "Permanent until destroyed or abandoned",
      "endsWhen": "Destroyed if the owner's magical connection is severed; otherwise permanent",
      "charges": "Unlimited"
    },
    "priceReason": "The island’s enchantments and rarity justify this price, as it represents a significant investment of power and resources.",
    "priceOriginal": 1000000,
    "priceReviewedAt": "2026-07-23T16:41:09.768237+00:00",
    "aiReviewedAt": "2026-07-23T16:41:09.768237+00:00",
    "aiReviewVersion": 1
  },
  "personal_meteor_shower": {
    "id": "personal_meteor_shower",
    "name": "Personal Meteor Shower (1 Night)",
    "description": "The Personal Meteor Shower brings a celestial spectacle to your doorstep, raining down sparks of light that shimmer in the night sky. For one night only, you and those within sight witness a meteor shower unlike any other—shooting stars that may leave behind fragments of ancient minerals or even cryptic messages from beyond. Guests who observe this event gain +2 to Intelligence checks for 24 hours following the display, enhancing their scholarly pursuits and keen observations.",
    "category": "premium",
    "price": 1000,
    "icon": "🌠",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Celestial Spectacle",
      "Enhanced Observations"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Astral Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Celestial Spectacle",
        "rules": "When activated, the Personal Meteor Shower creates a meteor shower visible to all within sight. The display lasts for one night and may reveal rare minerals or celestial messages. This effect is instantaneous and does not require any action to activate."
      },
      {
        "title": "Enhanced Observations",
        "rules": "All guests who witness the meteor shower gain +2 to Intelligence checks for 1 day following the event. This bonus can be used once per day, but it ends if the guest fails an Intelligence check."
      }
    ],
    "levelRequirementReason": "The activation requires a certain amount of magical energy and focus, appropriate for characters who have reached at least 6th level.",
    "vendorReason": "As purveyors of celestial phenomena, the Comet Observatory naturally stocks items that enhance one's connection to the stars.",
    "shippingDetail": "The meteor shower is delivered via a swift Astral Courier, ensuring it arrives just in time for its intended night.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "One night (12 hours of activity)",
      "endsWhen": "The display ends after one night or if the item is destroyed",
      "charges": "Unlimited, recharged at dawn"
    },
    "priceReason": "This price reflects the rarity and magical energy required to sustain such a celestial event.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-23T16:41:21.081530+00:00",
    "aiReviewedAt": "2026-07-23T16:41:21.081530+00:00",
    "aiReviewVersion": 1
  },
  "personal_moon": {
    "id": "personal_moon",
    "name": "Personal Moon (1 Night)",
    "description": "The Personal Moon is a small celestial body that appears in your sky for one night. It hangs there like an enchanted lantern, casting soft light and imbuing you with its otherworldly magic. For the duration of the night, it grants +2 to all ability checks, allowing you to navigate through hidden paths or uncover secrets more easily. Additionally, any guests accompanying you gain a +1 bonus to Charisma (CH) checks, enhancing your charisma-based interactions.",
    "category": "premium",
    "price": 1000,
    "icon": "🌕",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Moonlit Guidance",
      "Enhanced Guest Charm"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Lunar Scroll",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Moonlit Guidance",
        "rules": "This effect grants the user +2 to all ability checks for a single night. It ends when the night concludes or if the user is incapacitated."
      },
      {
        "title": "Enhanced Guest Charm",
        "rules": "Any guests accompanying the user gain a +1 bonus to Charisma (CH) checks for one night, which lasts until the end of their next long rest. This effect does not stack with other similar bonuses."
      }
    ],
    "levelRequirementReason": "The Personal Moon's magic is powerful enough that only those of at least 8th level can harness its full potential.",
    "vendorReason": "The Comet Observatory specializes in unique cosmic artifacts and this item perfectly aligns with their offerings.",
    "shippingDetail": "Ships via a series of celestial messengers, ensuring the Personal Moon arrives at your doorstep just after sunset on the night it is to be used.",
    "usage": {
      "activation": "Instantaneous activation upon its appearance in the sky; no action required.",
      "duration": "One full night",
      "endsWhen": "The night ends or if the user becomes incapacitated.",
      "charges": "Unlimited, as it is a one-time use item."
    },
    "priceReason": "While not extraordinarily powerful, the Personal Moon's rarity and unique celestial nature justify its price in game XP.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-22T22:47:14.083900+00:00",
    "aiReviewedAt": "2026-07-22T22:47:14.083900+00:00",
    "aiReviewVersion": 1
  },
  "personal_sunrise": {
    "id": "personal_sunrise",
    "name": "Personal Sunrise (1 Day)",
    "description": "The Personal Sunrise is a compact, intricately crafted device that can summon an authentic sunrise at any time. Its golden core glows faintly as it focuses your will to command the light. When activated, this device grants +2 to all ability checks and saving throws for one full day, enhancing your presence and resolve. Sun worshippers have been known to seek out those who possess such a relic, believing it to be a gift from their celestial patrons.",
    "category": "premium",
    "price": 1000,
    "icon": "🌅",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Sunrise Control",
      "Enhanced Presence"
    ],
    "vendor": "lunar_auction",
    "shippedBy": "Sunbeam Vial",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sunrise Control",
        "rules": "This device allows you to summon an authentic sunrise at any time. This effect is instantaneous and can be used once per short rest, but it cannot be used indoors or in areas where sunlight does not naturally occur."
      },
      {
        "title": "Enhanced Presence",
        "rules": "For 1 day after activation, you gain a +2 bonus to all ability checks and saving throws. This effect is active for the duration of one long rest."
      }
    ],
    "levelRequirementReason": "This device requires only a basic understanding of focus and willpower to activate.",
    "vendorReason": "Lunar Auction, known for its eclectic collection of magical artifacts, offers this unique item as part of their premium offerings.",
    "shippingDetail": "The device arrives sealed in a special vial that ensures its power remains intact until you are ready to use it.",
    "usage": {
      "activation": "A bonus action to activate and control the sunrise.",
      "duration": "Instantaneous for sunrise, one long rest for enhanced presence.",
      "endsWhen": "The effect ends when a new long rest is completed or the device is destroyed.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item's balanced price reflects its rarity and utility, offering significant but not game-breaking benefits.",
    "priceOriginal": 100000,
    "priceReviewedAt": "2026-07-23T16:41:08.210015+00:00",
    "aiReviewedAt": "2026-07-23T16:41:08.210015+00:00",
    "aiReviewVersion": 1
  },
  "personal_weather_control": {
    "id": "personal_weather_control",
    "name": "Personal Weather Control (1 Hour)",
    "description": "The Personal Weather Control device, a sleek metal cylinder encased in crystal, allows its wielder to manipulate the elements within a one-mile radius for an hour. It can summon clear skies, unleash torrential rain, create thick fog, or bring forth violent storms. This tool is invaluable on the battlefield, as it can either cripple foes with sudden downpours or bolster allies with unshakable calm. Overuse, however, risks angering the weather spirits, potentially unleashing unpredictable natural forces.",
    "category": "services",
    "price": 1000,
    "icon": "🌤️",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Elemental Mastery",
      "Environmental Disruption"
    ],
    "vendor": "storm_seller",
    "shippedBy": "Cloud Vial Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Elemental Mastery",
        "rules": "By using this device, you can choose to create clear skies, heavy rain, dense fog, or a violent storm within one mile. The weather lasts for exactly one hour and affects all creatures in the area. This effect is usable once per long rest."
      },
      {
        "title": "Environmental Disruption",
        "rules": "The weather you control can be used to disrupt enemies (forcing them to make Constitution saving throws with a DC of 12) or aid allies by providing cover and shelter. However, overuse may provoke the wrath of nature spirits, causing unpredictable weather anomalies."
      }
    ],
    "levelRequirementReason": "This spell-like device requires a minimum character level to handle its raw elemental power effectively.",
    "vendorReason": "The storm seller specializes in tools that manipulate the elements, making this item an essential part of their inventory.",
    "shippingDetail": "Ships via Cloud Vial Express; delivery is swift but requires clear skies for optimal performance.",
    "usage": {
      "activation": "Action",
      "duration": "One hour per use",
      "endsWhen": "The effect ends when the hour passes, or if overused and the weather spirits are angered",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "This item provides a powerful service for its cost, allowing manipulation of elemental forces without spell slots.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-23T16:41:36.330555+00:00",
    "aiReviewedAt": "2026-07-23T16:41:36.330555+00:00",
    "aiReviewVersion": 1
  },
  "pest_extermination": {
    "id": "pest_extermination",
    "name": "Pest Extermination (Professional)",
    "description": "The Pest Extermination (Professional) service calls upon a licensed exterminator to root out vermin from your home or business, ensuring no pests remain for at least 24 hours. The process involves the strategic placement of blessed salt and wards that last seven days, effectively sealing off any entry points and preventing reinfestation. With this service, you can rest easy knowing all creatures up to CR 2 have been dispatched from your property.",
    "category": "services",
    "price": 1000,
    "icon": "🪲",
    "stock": 30,
    "rarity": "uncommon",
    "effects": [
      "Dispatches dangerous pests (CR 2 or lower)",
      "Prevents pest return for one week"
    ],
    "vendor": "town_hall",
    "shippedBy": "Scheduled Appointment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pest Dispatch",
        "rules": "The exterminator dispatches all dangerous pests within a building, ensuring no creatures remain. This effect is instantaneous and covers an area of up to 500 square feet."
      },
      {
        "title": "Preventive Measures",
        "rules": "For one week following the service, blessed salt and wards are placed at key entry points to prevent any pests from returning to the premises. No save DC is required for this effect."
      }
    ],
    "levelRequirementReason": "The service involves strategic placement of protective measures that require some skill but do not demand a high level of proficiency.",
    "vendorReason": "The town hall oversees the extermination services to ensure all properties are safe and free from vermin, maintaining public health standards.",
    "shippingDetail": "Services are provided within one business day of booking. All appointments are scheduled in advance for maximum efficiency.",
    "usage": {
      "activation": "Passive effect upon completion of the service; no further action required.",
      "duration": "Instantaneous dispatch, effective for one week thereafter.",
      "endsWhen": "The protective measures expire after seven days or if a new infestation is detected and reported to the exterminator.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This service includes both the immediate dispatch of pests and preventive measures that last for one week, making it a valuable investment in property protection.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T16:42:03.816149+00:00",
    "aiReviewedAt": "2026-07-23T16:42:03.816149+00:00",
    "aiReviewVersion": 1
  },
  "pet_rock_awkward": {
    "id": "pet_rock_awkward",
    "name": "Awkward Pet Rock",
    "description": "A rock with googly eyes glued on. You feel judged by it.",
    "category": "curiosities",
    "price": 4000,
    "icon": "🪨",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "It stares at you",
      "Emotional support (maybe)"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Heavy Box",
    "levelRequirement": 1
  },
  "petrified_tears": {
    "id": "petrified_tears",
    "name": "Petrified Tears",
    "description": "The vial holds a crystallized cascade of tears, each one a frozen echo of sorrow and pain. The glow within is not merely light but an ethereal shimmer that seems to pulse in time with your heartbeat. Drinking it brings a surge of empathy for all living creatures around you, making you acutely aware of their suffering. After the effect fades, you are left feeling drained yet deeply connected to those around you, as if you've shared a profound moment of shared pain and understanding.",
    "category": "consumables",
    "price": 1000,
    "icon": "💧",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Empathy Aura",
      "Temporary Hit Points"
    ],
    "vendor": "fey_market",
    "shippedBy": "Crystal Flask Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Empathy Aura (Instantaneous)",
        "rules": "Upon drinking, you gain temporary hit points equal to 1d10 + your Wisdom modifier. You are also granted advantage on all saving throws against being charmed for the next hour."
      },
      {
        "title": "Shared Sorrow",
        "rules": "For one minute after the effect ends, you feel a profound empathy towards all living creatures within 30 feet of you. This can cause you to react emotionally or even cry uncontrollably in response to their feelings."
      }
    ],
    "levelRequirementReason": "The intense emotional experience requires a stable mental state, which is generally achieved by level 1 characters.",
    "vendorReason": "The Fey Market often deals in rare and potent magical items that can inspire or manipulate emotions.",
    "shippingDetail": "Delivered via a convoy of crystal flask couriers, known for their flawless delivery service within the Feywild.",
    "usage": {
      "activation": "Drink",
      "duration": "1 hour and 1 minute",
      "endsWhen": "The effect ends after 1 hour if not consumed, or immediately upon being consumed.",
      "charges": "Unlimited"
    },
    "priceReason": "This item's balanced price reflects its potent emotional effects and temporary hit points, making it a valuable yet manageable addition to any character's arsenal.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T16:41:48.998431+00:00",
    "aiReviewedAt": "2026-07-23T16:41:48.998431+00:00",
    "aiReviewVersion": 1
  },
  "phantom_guide": {
    "id": "phantom_guide",
    "name": "Phantom Guide Contract",
    "description": "The Phantom Guide Contract is a parchment scroll imbued with the essence of a lost hero, bound to serve as an ethereal guide for one week or until it perishes in combat. This spectral companion draws upon memories and skills from past campaigns, offering invaluable wisdom and support to its wielder. Crafted by ancient shamans who knew the value of lost heroes, this contract is a rare find among the treasures of Shamans' Hut.",
    "category": "services",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Summons an Ethereal Guide",
      "Offers Tactical Advice"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Spirit Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summon an Ethereal Guide",
        "rules": "Activates as a standard action. The guide appears and serves for one week or until it dies in combat. It cannot be dismissed early. The guide is considered to have a CR equal to the highest CR of any PC summoned by the contract owner within the last month."
      },
      {
        "title": "Offers Tactical Advice",
        "rules": "The guide provides tactical advice as if it were present, once per day. This advice can be requested as a bonus action and is limited to 30 words. The guide's wisdom is unparalleled but cannot override the owner’s decisions."
      }
    ],
    "levelRequirementReason": "A novice adventurer can appreciate the value of guidance from a past hero.",
    "vendorReason": "Shamans' Hut specializes in relics and contracts that bridge the gap between worlds, including this ethereal guide contract.",
    "shippingDetail": "The Spirit Portal ensures swift delivery of the Phantom Guide Contract within a week of purchase.",
    "usage": {
      "activation": "Standard action to summon; once per day for advice",
      "duration": "One week or until death in combat",
      "endsWhen": "Combat death, one week duration ends",
      "charges": "Unlimited"
    },
    "priceReason": "The cost reflects the rarity and utility of a guide that combines past wisdom with present support.",
    "priceOriginal": 800000,
    "priceReviewedAt": "2026-07-23T16:42:02.476502+00:00",
    "aiReviewedAt": "2026-07-23T16:42:02.476502+00:00",
    "aiReviewVersion": 1
  },
  "pikachu_thunderstone": {
    "id": "pikachu_thunderstone",
    "name": "Thunderstone",
    "description": "The Thunderstone is a glowing, jagged stone that crackles with electric energy. Crafted from ancient lightning strikes in the heart of thunderclouds, it can be wielded to call forth a bolt of purest electricity. Upon activation, the stone unleashes a powerful surge of lightning, and its user gains a +1 bonus to all damage rolls involving lightning. Should you roll a 1 on any attack or ability check using this stone, you are shocked for the turn, taking 2d6 lightning damage as a reaction.",
    "category": "consumables",
    "price": 1000,
    "icon": "⚡",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Lightning Surge",
      "Electric Boost"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Insulated Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lightning Surge",
        "rules": "Activates on command. Instantaneous effect. No target or range, affects the user only. When activated, you gain a +1 bonus to all lightning damage rolls until the end of your next turn. Ends when the user's next turn begins."
      },
      {
        "title": "Shocking Roll",
        "rules": "If you roll a 1 on any attack or ability check while holding this stone, you and all creatures within 5 feet must make a DC 13 Dexterity saving throw. On a failed save, you take 2d6 lightning damage as a reaction."
      }
    ],
    "levelRequirementReason": "The Thunderstone's raw power requires no specific level to activate but is best used by those familiar with its unpredictable nature.",
    "vendorReason": "Shamans of the region understand the stone's origins and can provide guidance on its proper use.",
    "shippingDetail": "Ensures the stone remains stable during transit, minimizing the risk of accidental discharge.",
    "usage": {
      "activation": "Command word or action",
      "duration": "Until end of next turn for Lightning Surge; instant and once per short rest for Shocking Roll",
      "endsWhen": "Ends when the user's next turn begins or upon activation, respectively",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure it remains a valuable but not overpowered addition to any party.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T16:42:05.664316+00:00",
    "aiReviewedAt": "2026-07-23T16:42:05.664316+00:00",
    "aiReviewVersion": 1
  },
  "pink_paint_of_agreeable_friendship": {
    "id": "pink_paint_of_agreeable_friendship",
    "name": "Pink Paint of Agreeable Friendship",
    "description": "The Pink Paint of Agreeable Friendship transforms your skin into a vibrant, candy-pink hue that draws people in and makes them want to be around you. Yet, there's something unsettling about it—hostile creatures find you peculiarly disquieting. You might as well be wearing a cloud of bubblegum-scented goo, leaving those who come too close feeling both charmed and wary. This paint, created by the whimsical Friendship Paint Co., is a rare find that adds a playful twist to your interactions with others.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎨",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Agreeable Charm",
      "Hostile Discomfort"
    ],
    "vendor": "equestrian_paint_shop",
    "shippedBy": "Glitter Bomb Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Agreeable Charm",
        "rules": "When you apply the paint, you have advantage on Persuasion checks with friendly creatures. This effect lasts until you remove the paint or use it again."
      },
      {
        "title": "Hostile Discomfort",
        "rules": "Hostile creatures within 10 feet of you when you apply the paint must make a DC 13 Wisdom saving throw or have disadvantage on all Intimidation checks against you until the end of your next turn. This effect ends if you remove the paint."
      }
    ],
    "levelRequirementReason": "This paint is accessible to new adventurers who are just beginning their journey, as it requires no particular skill or background.",
    "vendorReason": "The Equestrian Paint Shop specializes in paints that enhance your social interactions and unique items for adventurers, making this a perfect fit for them.",
    "shippingDetail": "Delivered with a flourish, ensuring the paint arrives in its vibrant, unmarred state.",
    "usage": {
      "activation": "Apply as an action.",
      "duration": "Until you remove it or apply it again.",
      "endsWhen": "Removed by washing off or applying it again.",
      "charges": "Unlimited"
    },
    "priceReason": "The paint is priced at 1000 XP, reflecting its rarity and the specialized craftsmanship required for such a charming yet unsettling creation.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-23T16:42:31.399290+00:00",
    "aiReviewedAt": "2026-07-23T16:42:31.399290+00:00",
    "aiReviewVersion": 1
  },
  "pipe_wrench": {
    "id": "pipe_wrench",
    "name": "Plumber's Wrench",
    "description": "The Plumber's Wrench is a robust, forged iron tool adorned with rusted patches and a worn leather grip. Crafted in the bustling streets of Toad Town during the Great Plumbing Era, it hums with the history of countless pipes mended and clogs cleared. This wrench grants you advantage on Mechanics checks to repair or install plumbing fixtures, and when used, it can deliver a powerful blow, dealing 1d6 bludgeoning damage as a bonus action.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔧",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Advantage on Mechanics Checks",
      "Deal Bludgeoning Damage"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Toolbox",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mechanics Advantage",
        "rules": "When you use the wrench to attempt a Mechanics check, you gain advantage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Bludgeoning Blow",
        "rules": "As a bonus action, you can strike with the wrench, dealing 1d6 bludgeoning damage to a creature within reach. You can use this ability once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Plumber's Wrench is designed for beginning adventurers who need basic tools to assist in their plumbing tasks.",
    "vendorReason": "Toad Town Market is known for selling practical and essential items used by the town's many mechanics, plumbers, and everyday citizens.",
    "shippingDetail": "Ships via Toolbox Couriers, ensuring timely delivery to any adventurer in need of plumbing tools.",
    "usage": {
      "activation": "Bonus action or as part of a Mechanics check",
      "duration": "Until the start of your next turn for Mechanics Advantage; Instantaneous for Bludgeoning Blow",
      "endsWhen": "Ends when you take another bonus action to use the wrench, or at the end of your turn for the mechanics advantage.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Plumber's Wrench is priced fairly, reflecting its practical utility and historical significance in Toad Town.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T16:42:47.479277+00:00",
    "aiReviewedAt": "2026-07-23T16:42:47.479277+00:00",
    "aiReviewVersion": 1
  },
  "piranha_plant_pot": {
    "id": "piranha_plant_pot",
    "name": "Piranha Plant in a Pot",
    "description": "A chomping green head sits atop a sturdy terracotta pot, its jagged teeth glinting menacingly in the moonlight. This Piranha Plant in a Pot is no mere ornamental piece; it's a guardian of ancient lineage, loyal to its keeper if fed daily with raw steak. By night, it fiercely defends your campsite from intruders, its sharp bite dealing 1d8 piercing damage plus poison (1d4). Should you neglect it for three days without feeding, the Piranha Plant may turn on you, feasting on any raw meat in sight and leaving behind only bones.",
    "category": "faction",
    "price": 1000,
    "icon": "🌱",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Guardian of the Night",
      "Venomous Bite"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Reinforced Barrel",
    "levelRequirement": 3,
    "factionBonus": {
      "defense": 10
    },
    "effectDetails": [
      {
        "title": "Guardian of the Night",
        "rules": "At nightfall, the Piranha Plant activates as a bonus action to guard your campsite. It remains alert until morning or until an intruder is detected within 30 feet. If an intruder enters this range, it attacks with its bite. The plant can only activate once per day."
      },
      {
        "title": "Venomous Bite",
        "rules": "The Piranha Plant's bite deals 1d8 piercing damage plus poison (1d4). The target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. On a failed save, the target is also knocked prone and takes an additional 1d6 piercing damage."
      }
    ],
    "levelRequirementReason": "The Piranha Plant in a Pot requires a level 3 character to handle its ferocity and daily feeding demands.",
    "vendorReason": "Shamans of the forest often sell this ancient guardian, as it is closely tied to their lore and can be used for both protection and study.",
    "shippingDetail": "Delivered safely via a reinforced barrel to ensure the plant's survival during transit.",
    "usage": {
      "activation": "Bonus action at nightfall; once per day, unless fed raw steak daily.",
      "duration": "Active until morning or an intruder is detected within 30 feet.",
      "endsWhen": "The keeper fails to feed it for three days.",
      "charges": "Unlimited, as long as the keeper feeds it."
    },
    "priceReason": "This Piranha Plant in a Pot is priced at 1000 XP due to its unique guardian abilities and daily feeding requirement, making it a strategic yet costly addition to any adventurer's arsenal.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-23T16:42:39.329703+00:00",
    "aiReviewedAt": "2026-07-23T16:42:39.329703+00:00",
    "aiReviewVersion": 1
  },
  "piranha_plant_potted_pet": {
    "id": "piranha_plant_potted_pet",
    "name": "Potted Piranha Plant (Domesticated?)",
    "description": "The Potted Piranha Plant stands tall in its glazed clay pot, a vibrant green monstrosity that seems more at home on the windowsill of a mad botanist than in anyone's living room. Its wide leaves wave gently as if greeting you, but beware—should it feel threatened or startled, its sharp teeth will clamp down with a satisfying crunch, dealing 1d6 piercing damage as a reaction to any who startle it. The plant’s nocturnal song is soothing yet disorienting; those nearby gain advantage on saving throws against sleep effects and lose their edge in Perception checks.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Intimidating Reaction",
      "Nightly Lullaby"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Reinforced Pottery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Intimidating Reaction",
        "rules": "The Potted Piranha Plant can take a reaction to bite anyone who startles it. This deals 1d6 piercing damage and has no save. The plant must be startled for this effect, meaning the creature must have surprised or unnerved the plant."
      },
      {
        "title": "Nightly Lullaby",
        "rules": "At nightfall, the Potted Piranha Plant releases a melodic tune that soothes nearby creatures but confounds their senses. Creatures within 10 feet gain advantage on saving throws against sleep effects and lose disadvantage on Perception checks until morning."
      }
    ],
    "levelRequirementReason": "The Potted Piranha Plant is a curious item, suitable for adventurers of all levels who might appreciate its unique charm.",
    "vendorReason": "Toad Town Market stocks oddities and curiosities that one can find nowhere else, making the Potted Piranha Plant an ideal addition to their wares.",
    "shippingDetail": "The fragile plant is shipped in a specially reinforced pot to ensure it reaches its destination without harm.",
    "usage": {
      "activation": "Instantaneous (reaction when startled), passive (nightly)",
      "duration": "Until the start of your next turn, or until morning for the lullaby",
      "endsWhen": "The reaction ends on a successful save, and the nightly effect ceases at sunrise.",
      "charges": "Unlimited"
    },
    "priceReason": "The Potted Piranha Plant is a rare curiosity with a unique ability to intimidate and soothe, offering both practical and whimsical benefits.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-23T16:43:02.378777+00:00",
    "aiReviewedAt": "2026-07-23T16:43:02.378777+00:00",
    "aiReviewVersion": 1
  },
  "piranha_plant_slide": {
    "id": "piranha_plant_slide",
    "name": "Piranha Plant Slide Whistle",
    "description": "The Piranha Plant Slide Whistle, crafted from river reeds and imbued with the spirit of aquatic life, is a relic that conjures a piranha plant to chomp foes. When blown, it summons a ferocious Piranha Plant at your command, its sharp teeth delivering 1d8 piercing damage plus poison for 1d4 hit points. The plant lasts one minute, attacking once per turn and targeting the nearest enemy, unless commanded otherwise by you. After use, the whistle requires feeding with fresh fish to prevent it from deteriorating into mere river reeds.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌿",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Piranha Summoning",
      "Plant Poison"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Plant Pot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Piranha Summoning",
        "rules": "When blown, the whistle summons a Piranha Plant that lasts for one minute. The plant attacks once per turn against the nearest target unless commanded otherwise by the user. Activation is on a bonus action with charges of 1; the whistle requires feeding after use."
      },
      {
        "title": "Plant Poison",
        "rules": "The piranha delivers poison damage equal to 1d4 hit points as its bite attack. Saving throw DC 13 against Constitution saving throws."
      }
    ],
    "levelRequirementReason": "This whistle is accessible to lower-level adventurers who wish to employ the aid of aquatic creatures.",
    "vendorReason": "The Shamans' Hut specializes in crafting and selling items that harness the power of nature, making this whistle a fitting addition to their wares.",
    "shippingDetail": "Ships within a week via Plant Pot delivery service, with plants requiring special care during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute per use",
      "endsWhen": "The whistle requires feeding after each use; without food, it degrades into river reeds after one day.",
      "charges": "One charge"
    },
    "priceReason": "This whistle, while uncommon in nature, is crafted with specialized materials and requires a unique process for summoning the piranha plant.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T16:43:06.829982+00:00",
    "aiReviewedAt": "2026-07-23T16:43:06.829982+00:00",
    "aiReviewVersion": 1
  },
  "pit_fiend_legal_representation": {
    "id": "pit_fiend_legal_representation",
    "name": "Pit Fiend Legal Representation",
    "description": "This compact leather-bound tome, bound with infernal sigils and emblazoned with the Diabolical Bar Association crest, grants you a pit fiend lawyer for any infernal court case. The lawyer's courtroom presence is so formidable that it can automatically win one legal dispute per day, ensuring your victory in the most treacherous of cases. Additionally, this tome allows you to void one contract or geas, whether infernal or otherwise, safeguarding you from dark enchantments and binding agreements.",
    "price": 1000,
    "icon": "⚖️",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Automatically wins one legal dispute",
      ".Voids one contract or geas"
    ],
    "vendor": "hells_attorney",
    "shippedBy": "Contractual Obligation",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Courtroom Victory",
        "rules": "As an action, this tome grants a pit fiend lawyer to assist in your court case. The lawyer automatically wins the case if it involves infernal law. This effect lasts until the court adjourns or you lose the case."
      },
      {
        "title": "Contract Release",
        "rules": "Use once per day as an action to void one existing contract or geas, whether infernal in origin or not. The target must be a willing participant for this effect to take place."
      }
    ],
    "levelRequirementReason": "Only those with the gravitas and experience of a high-level spellcaster can afford and benefit from such infernal legal counsel.",
    "vendorReason": "Hells Attorney, the master of all infernal contracts, naturally stocks this item for clients seeking to break or win them.",
    "shippingDetail": "The tome is delivered by a pit fiend courier, ensuring its arrival is swift and secure.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Until the court adjourns or you lose the case for Courtroom Victory; Instantaneous for Contract Release",
      "endsWhen": "The court session ends or the target refuses to release the contract for Contract Release",
      "charges": "Unlimited, but one charge is used each time it's activated"
    },
    "priceReason": "This item balances as a rare and powerful tool that can significantly alter legal outcomes without being game-breaking.",
    "priceOriginal": 575000,
    "priceReviewedAt": "2026-07-23T16:42:54.134674+00:00",
    "aiReviewedAt": "2026-07-23T16:42:54.134674+00:00",
    "aiReviewVersion": 1
  },
  "pitatia_dragon_fruit_slicer": {
    "id": "pitatia_dragon_fruit_slicer",
    "name": "Pitatia Dragon Fruit Slicer",
    "description": "The Pitatia Dragon Fruit Slicer gleams with a subtle forgeheart core, designed by Pitatian Knifemakers to slice through even the toughest dragon fruit skins with ease. Its serrated blade is crafted from Pitatia's unique metal alloy that resists staining and corrosion, ensuring the juice remains untainted as it cuts through in one swift motion. This knife not only expedites preparation but also preserves the vibrant colors of the fruit.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥭",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Precision Slice",
      "Corrosion Resistance"
    ],
    "vendor": "pitatia_orchard",
    "shippedBy": "Scaly Slice Sheath",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precision Slice",
        "rules": "When used to slice a dragon fruit, you gain advantage on checks to prepare the fruit. Additionally, the blade dulls after slicing three hard fruits, requiring an hour of reconditioning to restore its sharpness."
      },
      {
        "title": "Corrosion Resistance",
        "rules": "The blade does not corrode or tarnish from exposure to dragon fruit juices, maintaining its pristine condition regardless of usage frequency."
      }
    ],
    "levelRequirementReason": "This basic tool is suitable for any adventurer, requiring no particular skill or proficiency.",
    "vendorReason": "The Pitatia Orchard specializes in rare fruits and tools that enhance the fruit-picking experience.",
    "shippingDetail": "Ships with the Scaly Slice Sheath, ensuring safe delivery to your doorstep.",
    "usage": {
      "activation": "As a bonus action when slicing dragon fruits in preparation.",
      "duration": "Instantaneous; blade dulls after three uses and requires reconditioning.",
      "endsWhen": "The blade dulls or is broken, requiring repair.",
      "charges": "Unlimited, but the blade must be reconditioned after three uses."
    },
    "priceReason": "Balanced at this price to reflect its practical utility and craftsmanship without being overpowered.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T16:43:14.951940+00:00",
    "aiReviewedAt": "2026-07-23T16:43:14.951940+00:00",
    "aiReviewVersion": 1
  },
  "pitatia_dragon_fruit_wrap": {
    "id": "pitatia_dragon_fruit_wrap",
    "name": "Pitatia Dragon Fruit Wrap",
    "description": "The Pitatia Dragon Fruit Wrap is a vibrant, hand-dyed cloth that exudes the exotic allure of the Pitatian jungles. Crafted with rare dragon fruit juices, this wrap not only enhances your agility but also subtly blends you into the lush greenery when in a tropical environment. The fruity scent lingers for hours after its application, marking your passage through the jungle, and offers minor protection against detection by predators or foes.",
    "price": 1000,
    "icon": "🧣",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Camouflage Advantage",
      "Temporary Dexterity Boost"
    ],
    "vendor": "pitatia_orchard",
    "shippedBy": "Fruity Tie Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Camouflage Advantage",
        "rules": "When in a tropical environment, you gain advantage on Dexterity (Stealth) checks to hide. This effect lasts until the start of your next turn after using it."
      },
      {
        "title": "Temporary Dexterity Boost",
        "rules": "Once per day, when you wrap this item around yourself, you gain temporary Hit Points equal to 1d6 + your Dexterity modifier for 8 hours. This effect does not stack with itself."
      }
    ],
    "levelRequirementReason": "This simple yet effective tool is accessible to low-level adventurers who need basic stealth and protection in tropical jungles.",
    "vendorReason": "The Pitatian Dyers are renowned for their expertise in creating wraps that enhance the wearer's survival abilities in their native environment.",
    "shippingDetail": "Ships via Fruity Tie Express, known for its reliable delivery even through tropical climates.",
    "usage": {
      "activation": "Action to apply and remove the wrap",
      "duration": "8 hours or until removed",
      "endsWhen": "When you remove it or at the start of your next turn after using it",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item provides significant utility for low-level adventurers while remaining balanced within the game economy.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T16:43:09.304763+00:00",
    "aiReviewedAt": "2026-07-23T16:43:09.304763+00:00",
    "aiReviewVersion": 1
  },
  "pitatia_pie_insurance": {
    "id": "pitatia_pie_insurance",
    "name": "Pitatia Pie Insurance",
    "description": "Pitatia Pie Insurance ensures that your sweet creations are safe from both culinary theft and slanderous rumors. Each day, one pie is completely immune to being stolen or poisoned by any means. Additionally, anyone attempting to steal a pie under this policy's protection must endure an hour of hiccups as a curse befalls their attempts. To maintain these protections, you must bake at least one pie weekly; failing to do so will cause the insurance to lapse and leave your pies vulnerable.",
    "category": "services",
    "price": 1000,
    "icon": "🥧",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Pie Protection",
      "Hiccup Curse"
    ],
    "vendor": "pitatia",
    "shippedBy": "Pie Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pie Protection",
        "rules": "One pie per day is immune to theft or poisoning. This protection lasts until midnight each day, after which the policy resets."
      },
      {
        "title": "Hiccup Curse",
        "rules": "Anyone attempting to steal a protected pie must endure an hour of hiccups as a curse. The save DC for this effect is 15. A successful saving throw ends the effect immediately."
      }
    ],
    "levelRequirementReason": "This service is accessible to players who are just starting their adventures, ensuring even novices can protect their creations.",
    "vendorReason": "Pitatia specializes in all things pastry and ensures that her customers' culinary masterpieces remain safe from harm.",
    "shippingDetail": "Delivered by trusted Pie Delivery, this service includes a complimentary pie sample with each insurance purchase.",
    "usage": {
      "activation": "The policy activates automatically upon purchase and remains in effect until the weekly baking requirement is met or the insurance lapses.",
      "duration": "Daily for one day",
      "endsWhen": "Weekly baking requirement not met or policy lapsed",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the service's value in protecting valuable and unique creations, ensuring they remain safe.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T16:43:29.200320+00:00",
    "aiReviewedAt": "2026-07-23T16:43:29.200320+00:00",
    "aiReviewVersion": 1
  },
  "pitatia_pitaya_fruit_boost_service": {
    "id": "pitatia_pitaya_fruit_boost_service",
    "name": "Pitatia Pitaya Fruit Boost Service",
    "description": "The Pitatia Pitaya Fruit Boost Service delivers a luscious dragon fruit that not only restores vitality but also fortifies your resolve in times of challenge. Each juicy slice grants you temporary invincibility to one Strength or Dexterity saving throw for the day, and as it dissolves on your tongue, it heals you over time with a steady stream of life energy. However, the fruit leaves behind a sticky residue that hinders your precision for an hour after consumption.",
    "price": 1000,
    "icon": "🥭",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Strength/Dexterity Boost",
      "Healing Over Time"
    ],
    "vendor": "pitatia_orchard",
    "shippedBy": "Fruit Basket Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boosted Saving Throw",
        "rules": "Consume the Pitaya to gain advantage on one Strength or Dexterity saving throw. This effect lasts until the start of your next turn."
      },
      {
        "title": "Healing Over Time",
        "rules": "After consumption, you regain 1d6 hit points at the end of each of your turns for 8 hours. The fruit must be consumed within 30 minutes after purchase to activate these effects."
      }
    ],
    "levelRequirementReason": "The Pitaya is accessible to all adventurers, as its refreshing properties are enjoyed by novices and veterans alike.",
    "vendorReason": "Pitatia Orchard specializes in exotic fruits that enhance the vitality of their patrons, making them a perfect vendor for this service.",
    "shippingDetail": "The fruit is delivered within 24 hours and must be refrigerated upon arrival to maintain its freshness.",
    "usage": {
      "activation": "Eat the Pitaya at the start of your turn.",
      "duration": "8 hours, until consumed or destroyed.",
      "endsWhen": "If not eaten by the end of the day it is purchased.",
      "charges": "Unlimited"
    },
    "priceReason": "The fruit's exotic origin and the added benefits justify its reasonable price point.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T16:43:33.954371+00:00",
    "aiReviewedAt": "2026-07-23T16:43:33.954371+00:00",
    "aiReviewVersion": 1
  },
  "pitatia_pitaya_smoothie_recipe": {
    "id": "pitatia_pitaya_smoothie_recipe",
    "name": "Recipe: Pitatia Pitaya Smoothie",
    "description": "A hand-written parchment with precise instructions for crafting the legendary Pitatia Pitaya Smoothie. This vibrant, dragon fruit-infused beverage not only grants a burst of exotic vigor but also leaves you burping like a scaly dragon. The smoothie's secret lies in its ingredients—vibrant and juicy pitayas combined with a pinch of dragon breath. Only the Pitatian Juicers know how to blend this potion perfectly, making it an exclusive recipe worth its weight in gold.",
    "price": 1000,
    "icon": "🥤",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Exotic Strength",
      "Dragon Breath Burp"
    ],
    "vendor": "pitatia_orchard",
    "shippedBy": "Fruity Flask Folio",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Exotic Strength",
        "rules": "Active on consumption as a bonus action. Drink the smoothie to gain +2 Strength and +1 Constitution for 1 hour, with a saving throw DC of 13."
      },
      {
        "title": "Dragon Breath Burp",
        "rules": "Instantaneous effect triggered by consuming the smoothie. You burp like a dragon, dealing 1d6 acid damage to one creature within 5 feet as a reaction, and you are incapacitated for 1 minute."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate the simplicity of blending dragon fruit with the right ingredients.",
    "vendorReason": "The Pitatian Orchard is known for its unique and potent fruits, so it's fitting they sell this legendary smoothie recipe.",
    "shippingDetail": "Delivered by the Fruity Flask Folio via a dragon courier, ensuring the smoothie remains fresh and potent upon arrival.",
    "usage": {
      "activation": "Bonus action to drink the smoothie",
      "duration": "1 hour for Strength and Constitution bonus; instantaneous dragon breath burp effect",
      "endsWhen": "Ends when the duration expires or you are incapacitated by the dragon breath burp",
      "charges": "Unlimited, but only one can be consumed at a time"
    },
    "priceReason": "The rare ingredients and precise blending technique make this recipe a valuable commodity.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T16:43:23.601785+00:00",
    "aiReviewedAt": "2026-07-23T16:43:23.601785+00:00",
    "aiReviewVersion": 1
  },
  "pitatia_sonic_grenade": {
    "id": "pitatia_sonic_grenade",
    "name": "Pitatia Sonic Grenade",
    "description": "The Pitatia Sonic Grenade is a small, cylindrical device that emits an ear-splitting burst of focused sound waves. Crafted from durable steel and lined with Pitatia's proprietary acoustics material, it delivers a non-lethal shock to the ears within its radius. Once activated, it forces all creatures within 10 feet to make a DC 14 Constitution saving throw or be deafened for one minute, ensuring silence in the chaos it creates.",
    "price": 1000,
    "icon": "🔊",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Deafening Blast",
      "Non-Lethal"
    ],
    "vendor": "pitatia_tech",
    "shippedBy": "Metal Canister",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deafening Blast",
        "rules": "When thrown as an action within 30 feet, the grenade forces all creatures within 10 feet to make a DC 14 Constitution saving throw. On a failed save, they are deafened for one minute and cannot be targeted by any sound-based attacks or spells until the effect ends."
      },
      {
        "title": "Non-Lethal",
        "rules": "The grenade does no physical damage but instead causes an intense auditory shockwave that affects hearing. It is not a weapon, so it does not count as an attack for the purpose of features like Action Surge or any similar abilities."
      }
    ],
    "levelRequirementReason": "This device requires minimal skill to operate and can be used by adventurers of all levels.",
    "vendorReason": "Pitatia Tech specializes in sonic weaponry, making it only logical that they would produce a non-lethal sound device like the Pitatia Sonic Grenade.",
    "shippingDetail": "Delivered in a sturdy metal container to ensure safe transport of this potentially loud and dangerous item.",
    "usage": {
      "activation": "thrown as an action within 30 feet",
      "duration": "1 minute for each deafened creature",
      "endsWhen": "the effect ends when the deafened creatures make successful saving throws or until dispelled by a spell like Lesser Restoration",
      "charges": "unlimited"
    },
    "priceReason": "The balanced XP price reflects its rare material composition and specialized craftsmanship.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T16:43:30.183062+00:00",
    "aiReviewedAt": "2026-07-23T16:43:30.183062+00:00",
    "aiReviewVersion": 1
  },
  "pixie_dust_sprinkler": {
    "id": "pixie_dust_sprinkler",
    "name": "Pixie Dust Sprinkler",
    "description": "The Pixie Dust Sprinkler is a small glass vial filled with shimmering dust that whispers of ancient fey magic. When activated, it releases a cloud of levitating particles that grant the wielder a modest flight for short durations, perfect for avoiding low-hanging branches or dodging quicksand. The sprinkler also carries a whimsical charm, as curious pixies are drawn to its glow and often dance around those who use it.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Minor Flight",
      "Pixie Charm"
    ],
    "vendor": "feywild_flea_market",
    "shippedBy": "Enchanted Bubble Wrap",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Flight",
        "rules": "As an action, the user can activate the sprinkler to gain a fly speed of 10 feet for up to 1 minute. This effect has a duration limit of three uses per vial and requires a Dexterity saving throw (DC 12) or risk sneezing and wasting a use."
      },
      {
        "title": "Pixie Charm",
        "rules": "Once per day, the user can activate the sprinkler to attract curious pixies within 30 feet. These pixies are drawn to the dust and perform minor tricks for the duration of their interest, which is typically until they find another source of amusement."
      }
    ],
    "levelRequirementReason": "This item's effects are designed to assist beginners in navigating simple challenges without overwhelming them.",
    "vendorReason": "The Feywild Flea Market specializes in items that bring the wonders of the fey realm into everyday use, making it a perfect vendor for this whimsical trinket.",
    "shippingDetail": "Delivered with care to ensure the Pixie Dust remains active and effective upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute per use",
      "endsWhen": "The effect ends when the duration expires or the user sneezes (wasting a use)",
      "charges": "3 uses per vial, recharged by refilling with common glitter"
    },
    "priceReason": "Balanced at this price to reflect its utility for beginners and the cost of sourcing and refining fey dust.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T16:43:39.609896+00:00",
    "aiReviewedAt": "2026-07-23T16:43:39.609896+00:00",
    "aiReviewVersion": 1
  },
  "planar_anchor_installation": {
    "id": "planar_anchor_installation",
    "name": "Planar Anchor Installation",
    "description": "The Planar Anchor Installation is a massive, gleaming construct made of adamantine and enchanted iron, resembling an intricate anchor etched with sigils that bind a location to the material plane. Once installed, it prevents dimensional shifts and ensures that the site remains solidly anchored in its current plane, effectively nullifying any attempt at planar manipulation or teleportation. This steadfast protector requires regular maintenance of 2,000 gp annually to remain operational.",
    "category": "services",
    "price": 1000,
    "icon": "⚓",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Stabilizes a location on the material plane",
      "Prevents dimensional shifting"
    ],
    "vendor": "artificer_tower",
    "shippedBy": "Installation Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stabilization",
        "rules": "The installation permanently stabilizes the chosen location, preventing it from being teleported, phased through, or planed-shifted. This effect is instantaneous and lasts indefinitely as long as maintenance is provided."
      },
      {
        "title": "Maintenance Requirement",
        "rules": "Annual maintenance of 2,000 gp is required to keep the installation functional; failure to maintain it results in its deactivation after one year."
      }
    ],
    "levelRequirementReason": "Even a novice spellcaster can appreciate and afford this basic level of protection.",
    "vendorReason": "The Artificer Tower specializes in magical constructs and protective enchantments, making it the ideal vendor for such an installation.",
    "shippingDetail": "Delivered by a team of expert masons and spellcasters, the Planar Anchor Installation arrives fully assembled and ready to install.",
    "usage": {
      "activation": "Instantaneous upon installation; requires ongoing maintenance",
      "duration": "Permanent with regular upkeep",
      "endsWhen": "Maintenance is discontinued for one year",
      "charges": "Unlimited, but subject to annual maintenance"
    },
    "priceReason": "This price reflects the cost of materials and labor involved in the installation.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-23T16:43:56.123792+00:00",
    "aiReviewedAt": "2026-07-23T16:43:56.123792+00:00",
    "aiReviewVersion": 1
  },
  "planar_binding_circle": {
    "id": "planar_binding_circle",
    "name": "Planar Binding Circle (Ritual)",
    "description": "The Planar Binding Circle, a portable ritual circle of enchanted chalk and silver dust, is a relic crafted by Summoners Lodge to bind extraplanar creatures. Its etched runes glow with an otherworldly light, whispering the secrets of planes far beyond our own. This circle can summon and bind creatures up to CR 10, ensuring they are contained until the ritual concludes or their will is broken. Made from rare earth materials and imbued with ancient spells, it requires no chalk refills once initiated.",
    "price": 1000,
    "icon": "⭕",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Extraplanar Binding",
      "Ritual Recharge"
    ],
    "vendor": "arcane_circle",
    "shippedBy": "Portal Frame",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Extraplanar Binding",
        "rules": "This ritual allows the caster to summon and bind extraplanar creatures up to CR 10 within a 20-foot diameter circle. The creature must succeed on a DC 25 Wisdom saving throw or be bound, remaining dormant until the ritual ends. Once used, it requires a day of preparation with chalk refills before reuse."
      },
      {
        "title": "Ritual Recharge",
        "rules": "The circle can only be used once per long rest after binding an extraplanar creature. If the caster fails to complete the ritual within 10 minutes, the creature is released and the circle must recharge for a full day."
      }
    ],
    "levelRequirementReason": "Requires significant magical power and knowledge of ancient rituals.",
    "vendorReason": "Arcane Circle specializes in magical artifacts used for summoning and binding extraplanar creatures.",
    "shippingDetail": "Ships via a Portal Frame, delivering the circle within an hour of purchase.",
    "usage": {
      "activation": "A ritual action performed over 10 minutes with chalk refills.",
      "duration": "Instantaneous summoning and binding; creature remains dormant until ritual ends or freed by its willpower.",
      "endsWhen": "Creature breaks free, caster fails saving throw, or ritual is interrupted.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced as a rare and powerful tool used in high-level rituals.",
    "priceOriginal": 810000,
    "priceReviewedAt": "2026-07-23T16:44:10.900826+00:00",
    "aiReviewedAt": "2026-07-23T16:44:10.900826+00:00",
    "aiReviewVersion": 1
  },
  "planar_seal_breaking": {
    "id": "planar_seal_breaking",
    "name": "Planar Seal Breaking (Service)",
    "description": "The Planar Seal Breaking service, provided by Arcane Institute mages, shatters a seal to allow dimensional travel or prison dimension breaches. This ritual takes 8 hours and requires five mages working in concert. The seal's creator is alerted; there’s a risk of a counter-curse that could disrupt the breach attempt. The process demands precise focus and arcane knowledge, making it an epic challenge for even seasoned mages.",
    "category": "services",
    "price": 1000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Breaks one planar seal or prison dimension",
      "Requires five mages working in concert"
    ],
    "vendor": "arcane_institute",
    "shippedBy": "Magical Courier Service",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Activation",
        "rules": "A ritual lasting 8 hours, requiring five casters and the successful DC 25 Arcana check. Failure risks a counter-curse that could reverse or disrupt the breach."
      },
      {
        "title": "Counter-curse Risk",
        "rules": "There’s a 10% chance per hour of ritual casting that the seal’s creator will cast a counter-curse, which has a DC 25 Arcana saving throw to resist. Success ends the ritual prematurely."
      }
    ],
    "levelRequirementReason": "Requires significant magical knowledge and experience; only those at least 9th level can properly coordinate this intricate ritual.",
    "vendorReason": "Arcane Institute mages are the most experienced in such rituals, ensuring precision and safety for their clients.",
    "shippingDetail": "Dispatched via Magical Courier Service, with a two-day delivery time due to arcane tracking and protection.",
    "usage": {
      "activation": "A ritual lasting 8 hours; requires five mages working in concert",
      "duration": "Instantaneous effect once successfully completed",
      "endsWhen": "The ritual fails or the seal is breached",
      "charges": "Unlimited, as it’s a service"
    },
    "priceReason": "Balanced at 1000 XP; this service requires significant magical knowledge and resources to execute.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-23T16:44:00.687335+00:00",
    "aiReviewedAt": "2026-07-23T16:44:00.687335+00:00",
    "aiReviewVersion": 1
  },
  "planetars_wings": {
    "id": "planetars_wings",
    "name": "Planetar's Wings (Graft)",
    "description": "Planetar's Wings (Graft) graft celestial wings onto your body. These wings allow you to fly at a speed of 90 feet and unleash a divine feather barrage, raining fiery feathers that deal 1d6 fire damage on all creatures within 30 feet. The wings radiate a permanent 30-foot radius of blinding sunlight, causing creatures within the area to make a DC 20 Constitution saving throw or be blinded until the start of your next turn.",
    "price": 735000,
    "icon": "🪽",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Divine Feather Barrage",
      "Sunlight Aura"
    ],
    "vendor": "celestial_mods",
    "shippedBy": "Winged Delivery",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Divine Feather Barrage",
        "rules": "As a bonus action, you can unleash a barrage of fiery feathers. Each creature in a 30-foot radius must make a DC 17 Dexterity saving throw or take 2d8 fire damage."
      },
      {
        "title": "Sunlight Aura",
        "rules": "You radiate a permanent 30-foot radius of blinding sunlight. Creatures within this area must succeed on a DC 20 Constitution saving throw or be blinded until the start of your next turn. This effect is always active."
      }
    ],
    "levelRequirementReason": "The wings' divine power requires significant magical strength and control, accessible only to high-level clerics and paladins.",
    "vendorReason": "Celestial Mods is a renowned forge for divine grafts, specializing in celestial wings that can be attached to mortals by Empyrean Surgeons.",
    "shippingDetail": "The delicate nature of the graft requires special handling. Planetar's Wings are shipped within 3 days and arrive fully functional with a 10% success rate boost due to expert courier care.",
    "usage": {
      "activation": "Bonus action for Divine Feather Barrage; permanent effect for Sunlight Aura",
      "duration": "Permanent (Sunlight Aura); until the start of your next turn (Divine Feather Barrage)",
      "endsWhen": "Dislodged by a successful DC 25 Strength check or removed by a Remove Graft spell",
      "charges": "Unlimited"
    },
    "priceReason": "The wings are crafted from pure celestial essence and require the expertise of Empyrean Surgeons, making them an exorbitant yet invaluable asset for divine warriors.",
    "priceOriginal": 735000,
    "priceReviewedAt": "2026-07-23T16:43:55.047567+00:00",
    "aiReviewedAt": "2026-07-23T16:43:55.047567+00:00",
    "aiReviewVersion": 1
  },
  "plate_of_reflections": {
    "id": "plate_of_reflections",
    "name": "Plate of Reflections",
    "description": "The Plate of Reflections is a polished, silver-plated armor piece that reveals not only your face but also fleeting moments and small truths. When you place food upon it, a memory tied to the meal unfolds before your eyes, offering clues for investigation or reflection. Once per week, you can shapeshift your reflection into an illusion to charm or confuse one creature within 30 feet as an action, lasting until the end of your next turn.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍽️",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Memory Revealer",
      "Shifting Reflection"
    ],
    "vendor": "midnight_bazaar",
    "shippedBy": "Silver-Wrapped Couriers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Memory Revealer",
        "rules": "When food is placed on the plate, it reveals a memory tied to the meal. The memory lasts for 1 minute and offers insight into the past. This effect can be used once per day."
      },
      {
        "title": "Shifting Reflection",
        "rules": "You can use an action to shapeshift your reflection into an illusion that attempts to charm or confuse one creature within 30 feet. The target must succeed on a DC 15 Wisdom saving throw or be charmed or confused for 1 hour, at which point the effect ends."
      }
    ],
    "levelRequirementReason": "The Plate of Reflections requires a minimum level to ensure players can manage its effects without overpowering their capabilities.",
    "vendorReason": "Midnight Bazaar stocks rare curiosities and artifacts, including the Plate of Reflections, which is known for its unique properties among adventurers.",
    "shippingDetail": "Ships via Silver-Wrapped Couriers, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Action or Reaction (at the start of your turn)",
      "duration": "Instantaneous for Memory Revealer; 1 hour for Shifting Reflection",
      "endsWhen": "The effect ends when the duration expires or the item is destroyed, and it has no charges.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique abilities without being overpowered.",
    "priceOriginal": 26000,
    "priceReviewedAt": "2026-07-23T16:44:11.920943+00:00",
    "aiReviewedAt": "2026-07-23T16:44:11.920943+00:00",
    "aiReviewVersion": 1
  },
  "plot_armor_shredder": {
    "id": "plot_armor_shredder",
    "name": "Plot Armor Shredder",
    "description": "The Plot Armor Shredder is a gleaming, obsidian blade crafted by the Narrative Assassin from the very bones of forgotten plots and failed arcs. This relic can pierce even the strongest narrative defenses, allowing it to bypass plot armor entirely. Upon activation, it strips away divine protections and narrative immunities, leaving characters vulnerable to their true fates. Legends say that once wielded, it can slay the main antagonist in a single blow, ensuring no protagonist is left unscathed.",
    "price": 1000,
    "icon": "✂️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Bypasses Plot Armor",
      "Unleashes True Fates"
    ],
    "vendor": "story_breakers",
    "shippedBy": "Courier of Fates",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bypasses Plot Armor",
        "rules": "When activated as an action within 5 feet of a target, the Plot Armor Shredder immediately ends any plot armor or divine protections. The target must make a DC 17 Dexterity saving throw or be exposed to their true fate."
      },
      {
        "title": "Unleashes True Fates",
        "rules": "For one minute after activation, the target's actions are dictated by the narrative. They can take no beneficial actions and must follow any narrative demands imposed by the wielder of this relic. This effect ends if the target takes damage or if the Plot Armor Shredder is removed from their possession."
      }
    ],
    "levelRequirementReason": "Even the simplest heroes can wield this powerful tool to challenge narratives.",
    "vendorReason": "The Story Breakers are known for offering tools that challenge and reshape the very fabric of stories, making them the perfect purveyors of the Plot Armor Shredder.",
    "shippingDetail": "Delivered by the Courier of Fates, this relic arrives with a cryptic note from the Narrative Assassin, warning of its immense power and cautioning against misuse.",
    "usage": {
      "activation": "Action",
      "duration": "One minute or until removed from target",
      "endsWhen": "Target takes damage or relic is removed from their possession",
      "charges": "Unlimited"
    },
    "priceReason": "The Plot Armor Shredder's price reflects its immense power and the risk it poses to any narrative.",
    "priceOriginal": 45000000,
    "priceReviewedAt": "2026-07-23T16:44:25.005591+00:00",
    "aiReviewedAt": "2026-07-23T16:44:25.005591+00:00",
    "aiReviewVersion": 1
  },
  "pocket_compass": {
    "id": "pocket_compass",
    "name": "Pocket Compass",
    "description": "The Pocket Compass is a small brass compass whose needle wavers erratically, always pointing toward your current heart's desire or deepest longing. Crafted from ancient brass and etched with forgotten runes, it glows faintly when you are near hidden doors, guiding you to secrets long buried. Each long rest allows one use of its magic to cast Locate Object (self only), but the compass must be set down to activate this power.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧭",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Points toward your current heart's desire",
      "Glows when near hidden doors"
    ],
    "vendor": "twilight_outpost",
    "shippedBy": "Padded Pouch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Locate Object",
        "rules": "When activated, the compass allows you to cast Locate Object (self only) as a bonus action. The effect lasts until the end of your next turn."
      },
      {
        "title": "Glowing Indicator",
        "rules": "The compass glows faintly when within 30 feet of any hidden door or secret passage, providing you with an immediate visual cue."
      }
    ],
    "levelRequirementReason": "Requires a character to have reached at least level 1 in order to manage the compass's subtle magic.",
    "vendorReason": "The twilight outpost is known for its magical curiosities and often stocks items like the Pocket Compass, which appeal to travelers seeking guidance on their journeys.",
    "shippingDetail": "Ships via a padded pouch to ensure safe delivery of this delicate item.",
    "usage": {
      "activation": "Bonus action when set down",
      "duration": "Instantaneous; lasts until the end of your next turn",
      "endsWhen": "Used or discarded after one use per long rest",
      "charges": "Unlimited uses between long rests"
    },
    "priceReason": "The Pocket Compass's unique ability to aid in locating hidden objects and its glowing indicator for secret doors make it a valuable tool, hence the moderate price of 1000 XP.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-23T16:44:28.723726+00:00",
    "aiReviewedAt": "2026-07-23T16:44:28.723726+00:00",
    "aiReviewVersion": 1
  },
  "pocket_dimension_universe": {
    "id": "pocket_dimension_universe",
    "name": "Pocket Dimension Universe",
    "description": "This shimmering marble, a marvel of dimensional engineering, contains an entire universe teeming with life and wonder. Within its confines, a billion souls flourish under your gaze, their collective worship fueling your dominion over this miniature cosmos. You can step into the pocket dimension to rule as a god among these beings, shaping destinies and forging new worlds at will. The Universe in a Bottle Co. crafted it with precision, ensuring only the most powerful can wield its godly might.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Pocketed Cosmos",
      "Divine Dominion"
    ],
    "vendor": "dimensional_wares",
    "shippedBy": "Big Bang in a Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pocketed Cosmos",
        "rules": "By speaking the activation phrase 'Realm Within,' you can enter the pocket dimension. While inside, you are treated as a demigod among the inhabitants. You have advantage on Wisdom (Perception) checks made within this miniature universe and gain temporary hit points equal to your level × 2 until you leave or abandon the realm."
      },
      {
        "title": "Divine Dominion",
        "rules": "As an action, you can command the creatures in the pocket dimension to perform a task. The creatures must succeed on a Wisdom saving throw (DC 15) or refuse to obey your command. You can use this effect once per long rest."
      }
    ],
    "levelRequirementReason": "Only those of sufficient power and wisdom can wield such an artifact responsibly.",
    "vendorReason": "Dimensional Wares specializes in items that defy the laws of space and time, making it a fitting vendor for this cosmic marvel.",
    "shippingDetail": "The package arrives with an intricate seal that must be broken by speaking the activation phrase 'Realm Within' to activate the pocket dimension.",
    "usage": {
      "activation": "Activation phrase: Realm Within",
      "duration": "Instantaneous entry, lasts until you leave or abandon the realm",
      "endsWhen": "You leave the realm or abandon it",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The item's rarity and unique abilities justify a price of 1,000 XP.",
    "priceOriginal": 95000000,
    "priceReviewedAt": "2026-07-23T16:44:38.679505+00:00",
    "aiReviewedAt": "2026-07-23T16:44:38.679505+00:00",
    "aiReviewVersion": 1
  },
  "pocket_dimensional_kitchen": {
    "id": "pocket_dimensional_kitchen",
    "name": "Pocket Dimensional Kitchen",
    "description": "The Pocket Dimensional Kitchen is a compact marvel of alchemy and enchantment, concealing an endless pantry and state-of-the-art oven. Upon opening its door, you are greeted by an array of ingredients that seem to stretch infinitely, all perfectly preserved for centuries. This culinary treasure restores +1d4 HP with every meal prepared and ensures the food remains fresh and delicious for a century. The kitchen is ever guarded by a sentient spatula who judges your cooking prowess.",
    "category": "premium",
    "price": 1000,
    "icon": "🍳",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Infinite Meal Provision",
      "Century-Long Preservation"
    ],
    "vendor": "artificer_tower",
    "shippedBy": "Miniature Stove",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Infinite Meal Provision",
        "rules": "As an action, you can use the kitchen to prepare any meal. The meal is perfect in flavor and provides +1d4 hit points instantly upon consumption. This effect does not require material components or a saving throw."
      },
      {
        "title": "Century-Long Preservation",
        "rules": "All food prepared within the kitchen remains magically preserved for 100 years, unaffected by spoilage or time."
      }
    ],
    "levelRequirementReason": "Any adventurer can benefit from this invaluable tool.",
    "vendorReason": "The Artificer Tower specializes in crafting and selling magical items that enhance daily life, making the Pocket Dimensional Kitchen a perfect fit for their inventory.",
    "shippingDetail": "Shipped with care using the Miniature Stove, this item arrives safely to your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per day. Recharges on a long rest.",
      "charges": "1"
    },
    "priceReason": "Balanced at 1000 XP, this item offers significant utility without overpowered effects.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-23T16:44:23.819531+00:00",
    "aiReviewedAt": "2026-07-23T16:44:23.819531+00:00",
    "aiReviewVersion": 1
  },
  "pocket_of_infinite_stairs": {
    "id": "pocket_of_infinite_stairs",
    "name": "Pocket of Infinite Stairs",
    "description": "A small stairwell that leads nowhere — but never ends. The steps are worn smooth from countless ascents, and the air inside is perpetually cool despite the sun's warmth outside. Entering this pocket of stairs feels like climbing a mountain; time ticks steadily forward, yet you find yourself no closer to the top after hours. A crypt courier once delivered it, sealed in an ancient chest from forgotten tombs, and now it sits under lock and key at the shop run by the enigmatic Wooden Door.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🪜",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Infinite Ascent",
      "Random Landing"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Wooden Door",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Infinite Ascent",
        "rules": "When you enter, you begin climbing an endless staircase. Time passes normally, but you never reach the top. After each hour of climbing, roll a d4 and add your Dexterity modifier (minimum 1) to determine how many years pass; this aging effect is cumulative."
      },
      {
        "title": "Random Landing",
        "rules": "You can exit at any time and instantly arrive in a random location. The destination could be miles away, or even across the plane. This teleportation is unpredictable and dangerous; you must succeed on a DC 15 Wisdom saving throw to avoid becoming disoriented for 1d4 hours."
      }
    ],
    "levelRequirementReason": "Even for low-level adventurers, the risks of entering this pocket are too great without proper training or preparation.",
    "vendorReason": "The crypt courier has a long-standing relationship with the Wooden Door and often delivers rare artifacts from ancient tombs.",
    "shippingDetail": "Ships via a secret underground passage, ensuring quick delivery to the shop's vault.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "You exit or are disoriented by the random teleportation effect.",
      "charges": "Unlimited (requires a short rest)"
    },
    "priceReason": "The item's rarity and unpredictable nature justify its modest price, making it accessible to more players without breaking balance.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-23T16:44:40.432720+00:00",
    "aiReviewedAt": "2026-07-23T16:44:40.432720+00:00",
    "aiReviewVersion": 1
  },
  "pocket_orchestra": {
    "id": "pocket_orchestra",
    "name": "Pocket Orchestra",
    "description": "The Pocket Orchestra is a diminutive brass box, its surface etched with intricate patterns that shimmer like starlight. When activated, it summons a troupe of spectral musicians who dance and play within a 30-foot radius. The invisible ensemble weaves a protective symphony around allies, granting them +2 AC and boosting their morale by +1 for the next hour. Should any creature dare disturb the music, the musicians vanish in a cloud of misty notes.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎼",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Summon Spectral Musicians",
      "Enhanced Morale and Defense"
    ],
    "vendor": "pawn_of_wonders",
    "shippedBy": "Mahogany Case Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summon Spectral Musicians",
        "rules": "The user must expend one Use Charge to activate the Pocket Orchestra. It immediately summons a troupe of spectral musicians within a 30-foot radius who play for up to an hour. The musicians provide +2 AC and +1 morale bonus to all allies in the area until the music ends or they are disturbed."
      },
      {
        "title": "Disruption",
        "rules": "If any hostile creature enters the 30-foot radius or attacks a musician, the musicians vanish immediately, ending their protective effects. The Pocket Orchestra can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Players at lower levels are more likely to appreciate an item that enhances their immediate combat effectiveness without requiring high-level spells.",
    "vendorReason": "The Pawn of Wonders is known for its eclectic collection, including rare and unusual items like the Pocket Orchestra.",
    "shippingDetail": "Ships within a week via Mahogany Case Express; expedited shipping available.",
    "usage": {
      "activation": "Reaction when threatened or attacked by an enemy.",
      "duration": "Up to one hour, ending if the musicians are disturbed.",
      "endsWhen": "The musicians vanish if a hostile creature enters their radius or attacks them.",
      "charges": "Uses one Use Charge per activation."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's utility in enhancing combat effectiveness and morale without being overpowered.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T16:44:54.079855+00:00",
    "aiReviewedAt": "2026-07-23T16:44:54.079855+00:00",
    "aiReviewVersion": 1
  },
  "point_swap": {
    "id": "point_swap",
    "name": "Point Swap",
    "description": "The Point Swap is a peculiar device, crafted from shimmering glass and enchanted with ancient runes. It allows you to momentarily exchange your hit points for magic points, drawing on an arcane reserve of energy that only lasts as long as the balance holds. This whimsical trinket originated in the enigmatic Comet Observatory, known for its eccentric yet powerful artifacts. Use it wisely, for the swap is not without consequence.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔄",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Swap Hit Points with Magic Points",
      "Single use"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Dimensional Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Point Swap",
        "rules": "As an action, you can activate this device to swap your current hit points percentage with your magic points or spell slots percentage. The effect lasts until the end of your next turn. There is no saving throw involved, and it can only be used once per day."
      },
      {
        "title": "Reactive Swap",
        "rules": "If you are reduced to 0 hit points while this effect is active, the swap ends immediately. The device then shatters into a harmless glimmer of light."
      }
    ],
    "levelRequirementReason": "This simple yet powerful device can be used by anyone who seeks to experiment with their body's reserves.",
    "vendorReason": "The Comet Observatory is known for its collection of quirky and potent magical trinkets, making the Point Swap a fitting addition.",
    "shippingDetail": "Ships via Dimensional Mail within one week from the observatory.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "You are reduced to 0 hit points or the effect ends at the start of your next turn",
      "charges": "Unlimited, but only once per day"
    },
    "priceReason": "The Point Swap is moderately priced due to its rarity and utility, allowing players to experiment with their magical reserves without breaking the bank.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T16:44:42.596063+00:00",
    "aiReviewedAt": "2026-07-23T16:44:42.596063+00:00",
    "aiReviewVersion": 1
  },
  "points_to_the_nearest_treasure": {
    "id": "points_to_the_nearest_treasure",
    "name": "Wario's Treasure Hunting Compass",
    "description": "Wario's Treasure Hunting Compass points unerringly to the nearest hidden treasure, but it has a habit of misleading you. It spins wildly around when gold is nearby, granting advantage on Perception checks for locating loot. However, be wary: this compass occasionally points directly at Wario himself, demanding a cut of your find before offering directions again. Crafted by Wario's Adventure Gear from the remnants of his greatest heists, it’s both a reliable tool and a cautionary tale.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧭",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Points to nearest hidden treasure",
      "Advantage on Perception checks near gold"
    ],
    "vendor": "wario_land",
    "shippedBy": "Treasure Trail Truck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Treasure Pointing",
        "rules": "The compass points towards the nearest hidden treasure within a mile. If no treasure is nearby, it may point to Wario's location with a 30% chance."
      },
      {
        "title": "Advantage Near Gold",
        "rules": "When within 50 feet of gold or treasure, the user gains advantage on Perception checks to locate it."
      }
    ],
    "levelRequirementReason": "Beginners find this compass invaluable for their early adventures.",
    "vendorReason": "Wario sells his own gear and ensures it's both reliable and a bit mischievous.",
    "shippingDetail": "Ships via Wario's personal Treasure Trail Truck, ensuring safe delivery with occasional detours through questionable areas.",
    "usage": {
      "activation": "Instantaneous use",
      "duration": "Until the user finds or is pointed to a treasure",
      "endsWhen": "The compass indicates no more hidden treasures within reach",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "Balanced for beginners who need reliable guidance early in their adventuring career.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T16:45:04.849429+00:00",
    "aiReviewedAt": "2026-07-23T16:45:04.849429+00:00",
    "aiReviewVersion": 1
  },
  "pointy_stick": {
    "id": "pointy_stick",
    "name": "Pointy Stick",
    "description": "The Pointy Stick, forged from a gnarled tree branch and honed to a razor-sharp point by the village blacksmith, serves as both a symbol of survival and a practical tool for the aspiring adventurer. Crafted with care in the heart of the Whispering Woods, its sturdy wooden shaft is reinforced with iron tips that make it a reliable companion through rugged terrain. This humble weapon has seen countless battles, yet it never loses its edge or its usefulness.",
    "category": "equipment",
    "price": 1000,
    "icon": "|",
    "stock": 200,
    "rarity": "common",
    "effects": [
      "Piercing Weapon",
      "Breaks on Critical Failure"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Piercing Weapon",
        "rules": "When you hit with the Pointy Stick as part of a melee attack, it deals 1d4 points of piercing damage. If your attack roll is equal to or lower than 5 (a natural 1), the Pointy Stick breaks and becomes useless."
      },
      {
        "title": "Breaks on Critical Failure",
        "rules": "The Pointy Stick has a limited durability and will break if you critically fail an attack with it. This limits its usefulness in prolonged combat but ensures that it remains a reliable tool for quick strikes."
      }
    ],
    "levelRequirementReason": "The Pointy Stick is suitable for beginners who are just starting their journey as adventurers.",
    "vendorReason": "The Valley Trading Post stocks a variety of basic equipment that is essential for all adventurers, regardless of their background or experience.",
    "shippingDetail": "Ships within one week with Standard Courier, ensuring that your Pointy Stick arrives in time for your next adventure.",
    "usage": {
      "activation": "Melee attack action",
      "duration": "Instantaneous",
      "endsWhen": "The Pointy Stick breaks on a natural 1 or if you critically fail an attack roll with it.",
      "charges": "Unlimited, but limited by durability"
    },
    "priceReason": "This balanced price reflects the item's common rarity and its utility as both a weapon and a reliable tool.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T16:45:07.154640+00:00",
    "aiReviewedAt": "2026-07-23T16:45:07.154640+00:00",
    "aiReviewVersion": 1
  },
  "pokeball_master_edition": {
    "id": "pokeball_master_edition",
    "name": "Master Pokéball",
    "description": "The Master Pokéball, crafted by the Pokémon League from ancient Alolan metals, is a formidable tool for trainers seeking to expand their Pokédex. This gleaming orb instantly captures any non-legendary creature, regardless of size or strength, upon contact. Once subdued within its confines, the captured Pokémon remains dormant until released by its trainer. Though powerful, it cannot be used on sapient humanoids, ensuring a balance between taming and respect for intelligence.",
    "category": "premium",
    "price": 1000,
    "icon": "🟣",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Instant Capture",
      "Non-Sapient Only"
    ],
    "vendor": "pokemon_league_store",
    "shippedBy": "Pokémon Messenger Pidgeys",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Capture",
        "rules": "The Master Pokéball can be thrown as an action to capture any non-legendary creature (Challenge Rating up to CR 15) on contact. The target is instantly subdued and bound within the ball, rendering it inert until released by its trainer."
      },
      {
        "title": "Non-Sapient Only",
        "rules": "This item cannot be used on sapient humanoids or any creature capable of complex thought and language."
      }
    ],
    "levelRequirementReason": "Even novice trainers can wield the Master Pokéball, making it accessible to all.",
    "vendorReason": "The Pokémon League exclusively sells tools that aid in capturing and training Pokémon, ensuring only they offer such items.",
    "shippingDetail": "Delivered swiftly by the trusted winged messengers of the Pokémon League.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Expended upon successful capture or if thrown away",
      "charges": "Unlimited"
    },
    "priceReason": "The Master Pokéball is priced at a fair value considering its rarity and the convenience it offers trainers.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-23T16:45:50.234393+00:00",
    "aiReviewedAt": "2026-07-23T16:45:50.234393+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_connectopia_pioneer_key": {
    "id": "pokemon_connectopia_pioneer_key",
    "name": "Pioneer’s Key to the Frontier",
    "description": "The Pioneer’s Key to the Frontier is a compact, metallic token engraved with ancient symbols of terrain adaptation. Crafted by Goomba Ground Delivery in compliance with the Supernatural Sovereignty Act, this key grants temporary access to Connectopia's hidden zones and reveals three new terrain types on your map. Upon use, there's a 10% chance to discover a rare item within each zone, but improper handling risks causing minor terrain distortions.",
    "price": 1000,
    "icon": "🏗",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Reveals New Terrain",
      "Increases Rarity Drop Chance"
    ],
    "vendor": "pokemon",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "New Terrain Revelation",
        "rules": "Activates as an action. Reveals three new types of terrain on the map within a 60-foot radius for one hour."
      },
      {
        "title": "Enhanced Rarity Drops",
        "rules": "Grants a 10% chance to find rare items in each zone accessed during the key's effect duration, lasting until the start of your next turn after using it."
      }
    ],
    "levelRequirementReason": "The complexity and utility of the key require basic knowledge of terrain navigation.",
    "vendorReason": "Pokemon has established a reliable network for distributing keys to frontier zones as part of their mandate.",
    "shippingDetail": "Ships via Goomba Ground Delivery's Express Route, ensuring safe and timely delivery.",
    "usage": {
      "activation": "Action",
      "duration": "One hour from activation",
      "endsWhen": "The start of your next turn after using it",
      "charges": "Unlimited"
    },
    "priceReason": "Reflects the strategic value and rarity drop potential, balanced against its common rarity.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T16:45:07.279640+00:00",
    "aiReviewedAt": "2026-07-23T16:45:07.279640+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_crimson_fleet_ranger_key": {
    "id": "pokemon_crimson_fleet_ranger_key",
    "name": "Crimson Fleet Ranger Key",
    "description": "The Crimson Fleet Ranger Key is a gleaming brass token, its surface etched with ancient runes of the sea. This relic grants access to hidden vaults and elite training grounds reserved for the most skilled navigators. Once activated, it enhances your evolution stones' effectiveness by 10%, but only within the next 24 hours. A trusted emblem among pirate lords, this key is both a symbol of your status and a tool for mastering the elements.",
    "price": 1000,
    "icon": "🔒",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Access to Hidden Vaults",
      "Enhanced Evolution Stones"
    ],
    "vendor": "pokemon",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Access to Hidden Vaults",
        "rules": "Activates as an action, providing access to restricted areas for 24 hours. Must be used within one hour of obtaining the key. The effect ends when the 24-hour window expires."
      },
      {
        "title": "Enhanced Evolution Stones",
        "rules": "Grants a 10% bonus to all stat gains from evolution stones, active for 24 hours after activation. This effect can only be used once per player account and is limited to members of the Crimson Fleet faction."
      }
    ],
    "levelRequirementReason": "The key's enchantment requires a basic understanding of navigation and pirate lore.",
    "vendorReason": "The Pokémon vendor, being familiar with both evolution stones and the Crimson Fleet's secrets, is entrusted to sell this unique token.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring swift delivery within a week of purchase.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "24 hours from activation.",
      "endsWhen": "The 24-hour window expires or if used again before the first effect concludes.",
      "charges": "Unlimited, but can only be used once per player account."
    },
    "priceReason": "Reflects the item's unique access and its utility in enhancing character development for Crimson Fleet members.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T16:45:34.675346+00:00",
    "aiReviewedAt": "2026-07-23T16:45:34.675346+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_delfino_captain_sword": {
    "id": "pokemon_delfino_captain_sword",
    "name": "Admiral Toads Captain’s Blade",
    "description": "The Admirals Captain's Blade is a ceremonial sword forged from the heart of Admiral Toads, said to carry the essence of legendary naval prowess. Its blade glows with a faint mechanical pulse and whispers of ancient battles. This relic can only be wielded in territories controlled by Noki or Koopa factions, granting its user immunity to status effects for one turn, and a 25% chance to convert an enemy into a mechanical state for the same duration.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗡",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Immunity to Status Effects",
      "Mechanical Conversion"
    ],
    "vendor": "pokemon",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Status Effects",
        "rules": "The wielder gains immunity to all status effects for one turn upon activation. This effect is instantaneous and does not require a saving throw."
      },
      {
        "title": "Mechanical Conversion",
        "rules": "There is a 25% chance (d20 roll, DC 15) that an enemy targeted by this weapon will be converted into a mechanical state for one turn. This effect ends if the target takes damage or if the wielder attacks another creature."
      }
    ],
    "levelRequirementReason": "The blade's intricate design and the essence of Admiral Toads make it accessible only to those with a basic understanding of martial combat.",
    "vendorReason": "The Pokémon company maintains a special relationship with the Ranger Union, who crafted this blade from their legendary materials.",
    "shippingDetail": "Delivered within one week via the Rakasha's mystical couriers. Requires a special ceremonial pouch for safe transport.",
    "usage": {
      "activation": "As an action",
      "duration": "Instantaneous (one turn effect)",
      "endsWhen": "The target takes damage or attacks another creature",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a legendary item, this blade offers significant utility and rare opportunities to affect battles.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T16:45:21.966150+00:00",
    "aiReviewedAt": "2026-07-23T16:45:21.966150+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_fawful_speech_tome": {
    "id": "pokemon_fawful_speech_tome",
    "name": "Fawfuls Linguistic Tome",
    "description": "The Fawfuls Linguistic Tome is a cursed book bound in rusted metal, its pages emblazoned with intricate gears and cogs. When opened, it hums ominously, speaking in a cacophony of mechanical tongues. This ancient tome grants you the power to speak gibberish, confusing your foes for two turns, and delivers a +10% critical hit chance against Pokémon with mechanical traits when used on them. However, consuming this cursed book makes you hear Fawful’s voice for one minute, causing temporary confusion.",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Confuses target",
      "Critical hit chance bonus"
    ],
    "vendor": "pokemon",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Speech in Gibberish",
        "rules": "When used on a creature, it forces the target to speak gibberish for two turns. The effect ends when the target is incapacitated or knocked unconscious."
      },
      {
        "title": "Critical Hit Chance Bonus",
        "rules": "If used on a Pokémon with a mechanical trait, the user gains a +10% chance to score a critical hit against that target. This bonus lasts until the start of your next turn after using the tome."
      }
    ],
    "levelRequirementReason": "This tome requires significant control over linguistic and mechanical constructs to wield its power effectively.",
    "vendorReason": "The Pokémon vendor specializes in exotic and cursed items related to their world, including this ancient Rakasha creation.",
    "shippingDetail": "Ships directly from the Rakasha plane with swift delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect, duration of two turns for speech in gibberish and until next turn for critical hit chance bonus",
      "endsWhen": "Target is incapacitated or knocked unconscious; ends when the start of your next turn arrives after using the tome",
      "charges": "Unlimited, but cannot be used consecutively on the same target"
    },
    "priceReason": "The price reflects its rarity as an epic item and the significant power boost it provides in combat.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T16:45:23.635929+00:00",
    "aiReviewedAt": "2026-07-23T16:45:23.635929+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_festival_fall_star_candle": {
    "id": "pokemon_festival_fall_star_candle",
    "name": "Festival of Falling Stars Candle",
    "description": "The Festival of Falling Stars Candle is crafted from the sacred wood of a Celebi and infused with the essence of a fallen star. It emits a warm golden glow that fills the air with a sweet, nostalgic scent reminiscent of the Festival. Nearby Pokémon feel an overwhelming surge of affection, their hearts light as they dance under its soft light. However, if held too long, it may invoke a curse, causing the user to lose their next action and potentially triggering a hidden memory.",
    "price": 1000,
    "icon": "🌟",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Affection Surge",
      "Hidden Memory Reveal"
    ],
    "vendor": "pokemon",
    "shippedBy": "Mages Guild Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Affection Surge",
        "rules": "When activated, nearby Pokémon within 10 feet gain +2 to their affection stat for 1 round. There is a 20% chance that holding the candle too long (more than 5 minutes) will trigger a 'Memory Echo' effect, revealing a hidden ability or evolution."
      },
      {
        "title": "Hidden Memory Reveal",
        "rules": "If triggered by the 'Memory Echo' effect, the user must forfeit their next action. The candle has a 10% chance to reveal this effect when held for too long."
      }
    ],
    "levelRequirementReason": "The candle's nostalgic magic is accessible to all adventurers, making it suitable for players of any level.",
    "vendorReason": "The Pokémon League oversees the Festival and ensures that such magical items are distributed responsibly.",
    "shippingDetail": "Shipped via a specialized magic courier service, ensuring safe delivery during the festival event.",
    "usage": {
      "activation": "As an action to light or relight the candle.",
      "duration": "Effect lasts for 1 round per minute held, up to 5 minutes.",
      "endsWhen": "The effect ends when the user holds it for more than 5 minutes or if a hidden memory is revealed.",
      "charges": "Unlimited; can be used multiple times during the festival."
    },
    "priceReason": "Balanced to reflect its unique magical properties and the rarity of materials involved in its crafting.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T16:45:38.685164+00:00",
    "aiReviewedAt": "2026-07-23T16:45:38.685164+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_griffonstone_talisman": {
    "id": "pokemon_griffonstone_talisman",
    "name": "Griffonstone Talisman",
    "description": "The Griffonstone Talisman is a heavy amulet of brass and obsidian, carved from the heart of an ancient Griffin. Its surface crackles with stormy energy, a relic of its guardian's power. It grants flight to those who dare attune themselves, but only for one round per use. Those who misuse it risk paralysis or energy drain, binding them to the earth until their next rest. The talisman can be fused with Pokémon Poké Balls to create an evolutions stone that unlocks the 'Skybound' ability, summoning a storm cloud in battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦅",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Flight",
      "Paralysis"
    ],
    "vendor": "pokemon",
    "shippedBy": "Mages Guild Portal",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Flight",
        "rules": "The talisman grants temporary flight for one round per use. The user must attune themselves to the talisman and activate it as an action. It ends immediately upon ending its turn or if the user falls prone."
      },
      {
        "title": "Paralysis",
        "rules": "There is a 30% chance that using the talisman will cause temporary paralysis in the user's target for one round, requiring a DC 15 Constitution saving throw. Failure results in the effect, which ends at the end of the target's next turn."
      }
    ],
    "levelRequirementReason": "Requires attunement by a Ranger Union member to harness its stormy power.",
    "vendorReason": "The Mages Guild Portal deals exclusively with enchanted items and relics, including this powerful talisman.",
    "shippingDetail": "Ships via arcane courier, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Action",
      "duration": "One round per use",
      "endsWhen": "Ends immediately on the user's turn or if they fall prone",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this talisman is a rare and powerful tool for those who can wield its stormy might.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-24T23:26:09.106295+00:00",
    "aiReviewedAt": "2026-07-24T23:26:09.106295+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_badge_brawler": {
    "id": "pokemon_item_badge_brawler",
    "name": "Badge Brawler",
    "description": "Forgeheart Core, this badge brawler is a shimmering emblem of resilience and prowess. Crafted from the very essence of battlefields, it imbues its bearer with the spirit of champions. With each victory, you gain an extra turn to unleash your full fury, making your foes question if they truly want to continue the fight. Dodge moves like they're mere shadows, and let your critical hits sing with the power of a thousand battles.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏆",
    "stock": 15,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Dodge next move",
      "Extra turn after victory"
    ],
    "vendor": "league_store",
    "shippedBy": "Elite Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dodge Next Move",
        "rules": "As a reaction when an attack is declared against you, you can attempt to dodge it. You have advantage on this saving throw."
      },
      {
        "title": "Extra Turn After Victory",
        "rules": "At the end of your turn after winning a battle, you gain an additional action as if you had used a bonus action. This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "This badge is suitable for beginners who are eager to prove their mettle in the arenas.",
    "vendorReason": "The League Store stocks this item as it's a popular choice among new and aspiring champions.",
    "shippingDetail": "Ships within 3 days, with special courier handling for delicate artifacts like the Badge Brawler.",
    "usage": {
      "activation": "Reaction (Dodge Next Move), Instantaneous (Extra Turn After Victory)",
      "duration": "Until end of next turn (Dodge Next Move), Until end of next battle (Extra Turn After Victory)",
      "endsWhen": "The effect ends when the action or battle is resolved.",
      "charges": "Unlimited"
    },
    "priceReason": "This badge strikes a balance between its potent effects and fair value by ensuring it's not overpowered for its level.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T16:45:58.767714+00:00",
    "aiReviewedAt": "2026-07-23T16:45:58.767714+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_evolution_god_mode": {
    "id": "pokemon_item_evolution_god_mode",
    "name": "Evolution God Mode",
    "description": "The Evolution God Mode is a legendary relic forged in the heart of Wario's twisted lair, granting your Pokémon unparalleled power and invincibility on the battlefield. This artifact transforms any Pokémon into an unstoppable force with access to every possible move, immune to all status effects, and capable of shaking the very ground beneath its feet with a roar that strikes fear into foes. Only the boldest trainers dare wield this forbidden item, knowing full well the risks it brings.",
    "category": "forbidden",
    "price": 2000,
    "icon": "💥",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Immortal Might",
      "Move Mastery"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Wario Express (secret route)",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Immortal Might",
        "rules": "Your Pokémon becomes immune to all status effects and damage. This effect lasts for a short duration as long as you maintain control over the item."
      },
      {
        "title": "Move Mastery",
        "rules": "Your Pokémon can instantaneously learn any move it knows, and all moves are cast with advantage on attack rolls until the effect ends."
      }
    ],
    "levelRequirementReason": "This item requires a high level to use effectively due to its immense power and risk.",
    "vendorReason": "The Safari Shop, known for its exotic Pokémon, also deals in forbidden items like this one.",
    "shippingDetail": "Special courier service required to ensure the item arrives safely and remains a secret.",
    "usage": {
      "activation": "Activate as an action or bonus action.",
      "duration": "1 minute per use, but can be ended early if you lose control over the item.",
      "endsWhen": "You lose your grip on the item or it is destroyed in battle.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The cost reflects its epic rarity and immense power, balanced to ensure it remains a rare and dangerous tool for trainers.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T16:46:03.675895+00:00",
    "aiReviewedAt": "2026-07-23T16:46:03.675895+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_name_here": {
    "id": "pokemon_item_name_here",
    "name": "Scam of the Stars",
    "description": "The Scam of the Stars is a shimmering, fake artifact encrusted with star-shaped gemstones forged from polished obsidian and silver. This counterfeit relic promises to awaken a sleeping god, but its true purpose lies in the illusion it creates. When activated, it grants the user temporary invincibility for three turns, allowing them to walk unscathed through any perilous encounter. However, this comes at a steep price; after the turn ends, the user's hit points are instantly reduced to 0, leaving them vulnerable and prone.",
    "price": 1000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Temp Invincibility",
      "Instant HP Loss"
    ],
    "vendor": "pokemon",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invincible for Three Turns",
        "rules": "Activates as a bonus action. The user is immune to all damage and conditions for three turns, but this effect ends if the user takes any damage or moves out of a hazardous area."
      },
      {
        "title": "Hit Points Reduced to 0",
        "rules": "Instantly reduces the user's hit points to zero at the end of their turn. This effect can only be used once per day and is made by the Crimson Fleet, known for their dubious craftsmanship."
      }
    ],
    "levelRequirementReason": "Requires level 1 to activate this artifact, as it still poses a significant risk even at low levels.",
    "vendorReason": "The Pokémon Company sells this item due to its lore and potential for theatrical performances or illusions in their exhibitions.",
    "shippingDetail": "Ships via the Piranha Plant Express, known for its quick delivery within the region.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Three turns",
      "endsWhen": "The user takes damage or moves out of a hazardous area",
      "charges": "Once per day"
    },
    "priceReason": "Balanced at 1,000 XP as it offers powerful but limited utility, ensuring it's not overpowered.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T16:46:14.876386+00:00",
    "aiReviewedAt": "2026-07-23T16:46:14.876386+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_poke_battle_broccoli": {
    "id": "pokemon_item_poke_battle_broccoli",
    "name": "Poke Battle Broccoli",
    "description": "Poke Battle Broccoli is a vibrant, battle-hardened vegetable that grows wild on the battlefield. Its robust stem and leafy crown are said to have absorbed the essence of countless trainers' battles. When consumed in combat, it boosts your team's stamina by 25% for an entire round, giving you that extra burst of energy when fatigue sets in. The pungent aroma also confuses enemies, causing them to falter and lose focus for one turn.",
    "category": "consumables",
    "price": 1000,
    "icon": "🥦",
    "stock": 7,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Boosts Stamina",
      "Confuses Enemies"
    ],
    "vendor": "pokemart",
    "shippedBy": "Safari Express",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Boosts Stamina",
        "rules": "The player gains a +25 bonus to their Constitution saving throws for one round after consuming the Poke Battle Broccoli. This effect ends when the round concludes."
      },
      {
        "title": "Confuses Enemies",
        "rules": "Enemies within 10 feet of the consumed item's location must make a Wisdom saving throw (DC 13) at the start of their turns. On a failed save, they are stunned for one turn and cannot take actions or reactions until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Trainers need to be experienced enough to appreciate the strategic value of this item in critical battle moments.",
    "vendorReason": "Pokemarts are familiar with trainers' needs, especially for items that enhance performance during battles.",
    "shippingDetail": "Delivered via Safari Express, ensuring the Poke Battle Broccoli arrives fresh from the battlefield.",
    "usage": {
      "activation": "Eaten as a free action at the start of your turn.",
      "duration": "One round and one turn after consumption.",
      "endsWhen": "The effects end when the round concludes or when consumed by another creature.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its rarity, in-battle utility, and the strategic advantage it provides during critical moments.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-23T16:46:25.616107+00:00",
    "aiReviewedAt": "2026-07-23T16:46:25.616107+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_league_berry_crusher": {
    "id": "pokemon_league_berry_crusher",
    "name": "Pokémon League Berry Crusher",
    "description": "The Pokémon League Berry Crusher is a hand-cranked device crafted by the League Toolmakers, designed to efficiently extract berry juices for salads and beverages. It can assist Pokémon trainers in their quest, doubling the yield of berries used in recipes and reducing prep time by ten minutes. With the help of compatible Pokémon, it also grants +1 to Nature checks, making it indispensable for those seeking a competitive edge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥤",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Berries Yield Doubling",
      "Nature Check Boost"
    ],
    "vendor": "pokemon_league_camp",
    "shippedBy": "Berry Burst Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Berries Yield Doubling",
        "rules": "When used during the preparation of berry-based dishes, this item doubles the yield of berries available for use. This effect lasts until the dish is completed or the item is no longer in use."
      },
      {
        "title": "Nature Check Boost",
        "rules": "+1 to Nature checks when a compatible Pokémon is assisting with the task. The effect ends when the Pokémon leaves the area or if the user stops using the device."
      }
    ],
    "levelRequirementReason": "This item requires no specific level, as it benefits both beginners and experienced trainers alike.",
    "vendorReason": "The Pokémon League Camp sells this tool because it is a staple in the daily operations of their training programs and competitions.",
    "shippingDetail": "Ships via Berry Burst Box, which ensures fresh berries are delivered along with the device for optimal use.",
    "usage": {
      "activation": "As an action during berry preparation or a bonus action when assisted by a Pokémon.",
      "duration": "Until the dish is completed or the user stops using it.",
      "endsWhen": "The item ceases to function once its charges are exhausted, which occurs after five uses.",
      "charges": "5"
    },
    "priceReason": "This price reflects the unique benefits and durability of the device, providing good value for trainers.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T16:46:16.839204+00:00",
    "aiReviewedAt": "2026-07-23T16:46:16.839204+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_league_berry_salad_recipe": {
    "id": "pokemon_league_berry_salad_recipe",
    "name": "Recipe: Pokémon League Berry Salad",
    "description": "The Recipe: Pokémon League Berry Salad is a rare treat from the League Caterers, crafted with Oran and Sitrus berries. This revitalizing salad not only heals but also strengthens trainers on their journey. Consuming it grants 1d8 hit points and removes one level of exhaustion, offering both immediate sustenance and long-lasting vigor. The salad's ingredients are chosen for their unique properties, boosting a random type resistance for an hour after consumption.",
    "price": 1000,
    "icon": "🥗",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Revitalizing Nourishment",
      "Type Resistance Boost"
    ],
    "vendor": "pokemon_league_camp",
    "shippedBy": "Berry Bowl Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Revitalizing Nourishment",
        "rules": "Eating the salad grants you 1d8 hit points and removes one level of exhaustion. It can be consumed as a bonus action, has an instantaneous effect, and is exhausted after use."
      },
      {
        "title": "Type Resistance Boost",
        "rules": "After consuming the salad, your DM selects one type resistance that lasts for 1 hour. This effect cannot be used more than once per day."
      }
    ],
    "levelRequirementReason": "The recipe is designed to be accessible early in a trainer's journey.",
    "vendorReason": "League Caterers are renowned for their expertise in creating nourishing and beneficial recipes for trainers.",
    "shippingDetail": "Shipped fresh daily by Berry Bowl Delivery, ensuring the salad retains its revitalizing properties.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after use",
      "charges": "Unlimited"
    },
    "priceReason": "The recipe's rarity and the unique benefits it provides justify its moderate price.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T16:46:28.808927+00:00",
    "aiReviewedAt": "2026-07-23T16:46:28.808927+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_league_healing_berry": {
    "id": "pokemon_league_healing_berry",
    "name": "Pokémon League Healing Berry",
    "description": "The Pokémon League Healing Berry, a vibrant green fruit imbued with the life force of countless Pokémon battles, is a rare and precious resource for any trainer. Its flesh bursts with energy that can restore up to 2d6+2 hit points when consumed, and it's rumored to have stabilized even the gravest wounds on the field. This berry, crafted by the Pokémon League itself, is both a symbol of their expertise in nurturing trainers and a life-saving tool for all who seek it.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍇",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Restores vitality",
      "Can stabilize dying creatures"
    ],
    "vendor": "pokemon_league_store",
    "shippedBy": "Wicker Basket",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Vitality",
        "rules": "Eating the Pokémon League Healing Berry restores up to 2d6+2 hit points. This effect is instantaneous and requires no action."
      },
      {
        "title": "Stabilize Dying Creatures",
        "rules": "When used on a dying creature, this berry stabilizes them for one minute without ending their death saving throws. The creature must be within reach to use it, and the user must expend an action."
      }
    ],
    "levelRequirementReason": "The Pokémon League Healing Berry is accessible to beginning trainers as they might encounter critical situations early in their journey.",
    "vendorReason": "As crafted by the Pokémon League, it makes sense that this berry would be sold directly from their store for trainers to purchase and stockpile.",
    "shippingDetail": "Ships via a reliable Wicker Basket delivery service, ensuring safe arrival within two days of order placement.",
    "usage": {
      "activation": "Eating or using on a creature within reach as an action",
      "duration": "Instantaneous for the user; stabilizes dying creatures for one minute",
      "endsWhen": "The duration ends when the effect is no longer needed, and it can only be used once per day",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Pokémon League Healing Berry's fair value is set at 1000 XP due to its rarity and the critical role it plays in a trainer’s journey.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T16:47:11.823492+00:00",
    "aiReviewedAt": "2026-07-23T16:47:11.823492+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_league_healing_machine_rental": {
    "id": "pokemon_league_healing_machine_rental",
    "name": "Pokémon Center Healing Machine (Rental)",
    "description": "The Pokémon Center Healing Machine (Rental) is a sleek, portable device that hums to life when activated during a rest period. Upon completion of its cycle, all allies within hearing range are fully restored, regaining hit points, shaking off diseases and poisons, and recovering from level 1 exhaustion. The machine's 'ding!' signal marks the end of its 8-hour rental term, after which it must be returned to the Pokémon League for recharging.",
    "category": "services",
    "price": 1000,
    "icon": "💚",
    "stock": 999,
    "rarity": "uncommon",
    "effects": [
      "Full HP Restoration",
      "Disease & Poison Recovery"
    ],
    "vendor": "Pokémon League",
    "shippedBy": "Technician Installation",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restoration",
        "rules": "During a long rest within a 10-foot radius, all allies are fully restored. This includes regaining hit points and recovering from diseases, poisons, and level 1 exhaustion. The effect ends when the rental period of one week expires."
      },
      {
        "title": "Rental Duration",
        "rules": "The machine is rented for a full week (8 hours). It must be returned to the Pokémon League at the end of this time or it will cease functioning until recharged."
      }
    ],
    "levelRequirementReason": "This rental service is accessible to trainers who are just beginning their journey, allowing them to ensure their team remains in top condition.",
    "vendorReason": "As a leading authority on Pokémon care and maintenance, the Pokémon League offers this essential rental for trainers of all levels.",
    "shippingDetail": "The healing machine is delivered by trained technicians who ensure it operates correctly before being returned to the league at the end of its rental term.",
    "usage": {
      "activation": "Activates during a long rest within a 10-foot radius.",
      "duration": "Instantaneous, lasting for the duration of one week.",
      "endsWhen": "The weekly rental period ends or if not returned to the Pokémon League.",
      "charges": "Unlimited uses; recharged at end of rental."
    },
    "priceReason": "Balanced price reflects the cost of maintenance, technician delivery, and the value of a week's full healing service.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T16:46:54.164509+00:00",
    "aiReviewedAt": "2026-07-23T16:46:54.164509+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_league_poke_flute_replica": {
    "id": "pokemon_league_poke_flute_replica",
    "name": "Pokémon League Poké Flute Replica",
    "description": "The Pokémon League Poké Flute Replica, a delicate wooden flute crafted from ancient tree branches found within the Enchanted Forest, resonates with melodies that can awaken slumbering creatures and soothe wild beasts alike. Its notes are said to carry the essence of the forest's magic, boosting morale and rallying allies in times of need. When played, it not only dispels sleep but also calms restless animals, making it invaluable for both trainers and their companions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎵",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Awakens Sleep",
      "Calm Wild Animals"
    ],
    "vendor": "pokemon_league",
    "shippedBy": "Trainers Satchel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Awakens Sleep",
        "rules": "Play as a bonus action. Target one creature within 30 feet that is affected by the sleep condition. The target ends the effect of sleep and regains all spent hit points, but must make a DC 14 Constitution saving throw or fall unconscious for 1 minute."
      },
      {
        "title": "Calm Wild Animals",
        "rules": "Play as an action within 30 feet of a wild animal. The target creature makes an Animal Handling check with advantage to determine if it calms down and does not attack nearby allies for the next hour."
      }
    ],
    "levelRequirementReason": "Trainers at level 1 are expected to have basic skills in using such items during their journey.",
    "vendorReason": "The Pokémon League is well-known for its support of trainers and provides essential tools like the Poké Flute Replica for effective training and adventures.",
    "shippingDetail": "Shipped via the Swift Courier, arriving within a day if not in an overgrown area.",
    "usage": {
      "activation": "Bonus action or Action",
      "duration": "Instantaneous for Awakens Sleep; Calm Wild Animals lasts for one hour.",
      "endsWhen": "The effect ends when used up or the target creature is no longer affected by sleep or wild and aggressive, respectively.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price to reflect its utility in both combat and non-combat scenarios.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-23T16:46:56.644754+00:00",
    "aiReviewedAt": "2026-07-23T16:46:56.644754+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_league_pokeball_of_holding": {
    "id": "pokemon_league_pokeball_of_holding",
    "name": "Poké Ball of Holding",
    "description": "The Poké Ball of Holding is a meticulously crafted, metallic sphere adorned with intricate Silph Co. logos that shimmer like starlight. It can hold up to fifty pounds of non-living items in its extradimensional space without a trace of magic. The rarest feature is the 5% chance an item will emerge sticky when retrieved, requiring immediate cleaning by the bearer or it may hinder their movements. Silph Co.'s rejects are known for their quirky inventions that challenge conventional limits.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚪",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Extradimensional Storage",
      "Sticky Retrieval"
    ],
    "vendor": "pokemon_league_outlet",
    "shippedBy": "Pidgey Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Extradimensional Storage",
        "rules": "The Poké Ball of Holding can store non-living items weighing up to fifty pounds. It operates instantaneously when activated, and the retrieval is a bonus action. The storage space is extradimensional, meaning there's no limit on how many items it can hold as long as they don't exceed the weight limit."
      },
      {
        "title": "Sticky Retrieval",
        "rules": "There's a 5% chance that an item retrieved from the Poké Ball of Holding will emerge sticky. This effect lasts until cleaned, and any attempt to use the retrieved item during this time is subject to disadvantage on dexterity checks."
      }
    ],
    "levelRequirementReason": "This item requires only first-level spellcasters as it has no magical properties but relies purely on Silph Co.'s engineering prowess.",
    "vendorReason": "The Pokémon League Outlet stocks rare and quirky items, making the Poké Ball of Holding a fitting addition to their offerings.",
    "shippingDetail": "Delivered via Pidgey Post within three days, ensuring your quirky item arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous activation upon casting; retrieval is a bonus action each time an item is accessed.",
      "duration": "Permanent storage until retrieved or destroyed",
      "endsWhen": "Exhaustion due to weight limit reached or destruction of the Poké Ball",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Poké Ball of Holding is crafted by Silph Co. Rejects, known for their quirky and useful inventions that challenge conventional limits.",
    "priceOriginal": 21500,
    "priceReviewedAt": "2026-07-23T16:47:16.740583+00:00",
    "aiReviewedAt": "2026-07-23T16:47:16.740583+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_league_recipe_poke_block_candy": {
    "id": "pokemon_league_recipe_poke_block_candy",
    "name": "Recipe: Pokémon League Poké Block Candy",
    "description": "The Recipe: Pokémon League Poké Block Candy is a delicate, colorful confection crafted from rare berries and enchanted by the league's master bakers. This candy not only enhances your animal companion's battle prowess but also temporarily heightens its hyperactive tendencies, making it more prone to playful mischief. Feeding this treat results in an attack boost for 1 hour, but beware—your partner may become overly excitable, requiring extra patience and effort to manage.",
    "price": 1000,
    "icon": "📜",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Attack Boost",
      "Companion Hyperactivity"
    ],
    "vendor": "pokemon_league",
    "shippedBy": "Pidgey Post",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Attack Boost",
        "rules": "When your animal companion consumes a Poké Block Candy, it gains a +1 bonus to attack rolls for 1 hour. This effect ends when the duration expires or if the companion takes any action other than moving."
      },
      {
        "title": "Companion Hyperactivity",
        "rules": "For 10 minutes after eating this candy, your animal companion suffers disadvantage on Animal Handling checks due to its heightened energy levels and playful behavior. This effect ends when the duration expires or if the companion is made to rest for at least 8 hours."
      }
    ],
    "levelRequirementReason": "This recipe requires a basic understanding of animal care and training, which is typically achieved by third-level characters.",
    "vendorReason": "The Pokémon League Treats specialize in creating treats that not only delight but also enhance the bond between trainers and their companions.",
    "shippingDetail": "Shipped via Pidgey Post, these candies arrive fresh from the Pokémon League bakery within a week of purchase.",
    "usage": {
      "activation": "Passive effect when consumed by the animal companion.",
      "duration": "1 hour for Attack Boost; 10 minutes for Companion Hyperactivity",
      "endsWhen": "Duration expires or if the companion takes any action other than moving (for Attack Boost); after 8 hours of rest (for Companion Hyperactivity)",
      "charges": "Unlimited, as it is a recipe that can be prepared multiple times."
    },
    "priceReason": "The candy's rarity and the unique brewing process by Pokémon League Treats justify its price, making it accessible but not cheap for trainers to enhance their companions' abilities.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T16:47:35.518067+00:00",
    "aiReviewedAt": "2026-07-23T16:47:35.518067+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_league_recipe_rare_candy_stew": {
    "id": "pokemon_league_recipe_rare_candy_stew",
    "name": "Recipe: Pokémon League Rare Candy Stew",
    "description": "This parchment-bound recipe, titled 'Recipe: Pokémon League Rare Candy Stew,' contains a hearty stew that levels you up slightly but leaves you tasting like artificial flavoring. Consuming this concoction grants you an experience boost, giving your character 100 XP (once per character, then the recipe becomes useless). While under its influence, you glow with potential, granting advantage on Charisma checks when interacting as a trainer. The stew is the result of extensive research and development by the Pokémon League R&D team.",
    "price": 1000,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Experience Boost",
      "Artificial Flavoring"
    ],
    "vendor": "pokemon_league",
    "shippedBy": "Pidgey Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Experience Boost",
        "rules": "Eating this stew grants you 100 XP. This effect is usable once per character, after which the recipe becomes unusable."
      },
      {
        "title": "Artificial Flavoring",
        "rules": "You suffer a -2 penalty to Charisma checks while consuming the stew. The effect lasts until you finish eating it."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for even beginners, but requires a basic understanding of Pokémon training.",
    "vendorReason": "The Pokémon League R&D team has been known to distribute experimental items that can aid trainers in their journey.",
    "shippingDetail": "Ships via Pidgey Post, delivered within two weeks of purchase.",
    "usage": {
      "activation": "Eating the stew",
      "duration": "Instantaneous effect; lasts until you finish eating it",
      "endsWhen": "You finish consuming the stew",
      "charges": "Unlimited"
    },
    "priceReason": "This recipe is priced at 1000 XP, offering a modest experience boost and a unique flavoring effect that can be valuable during early training stages.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-23T16:47:21.300643+00:00",
    "aiReviewedAt": "2026-07-23T16:47:21.300643+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_league_trainer_jacket": {
    "id": "pokemon_league_trainer_jacket",
    "name": "Pokémon League Trainer Jacket",
    "description": "The Pokémon League Trainer Jacket is a stylish, weather-resistant garment with badge pockets designed for aspiring champions. Crafted by League Merch from durable, waterproof fabric, it not only holds up to six small items without adding weight but also grants +1 to Animal Handling checks when dealing with Pokémon-like creatures. In stormy weather, the jacket's zippers freeze shut, causing a minor annoyance that requires a successful DC 12 Constitution saving throw to ignore.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 Animal Handling with Pokémon-like creatures",
      "Zippers freeze during rain (minor annoyance)"
    ],
    "vendor": "pokemon_league_stadium",
    "shippedBy": "Pikachu Post",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "+1 Animal Handling with Pokémon-like creatures",
        "rules": "This benefit lasts for the duration of the encounter or until you spend a minute to focus on refining your handling. You can use this ability once per day."
      },
      {
        "title": "Zippers freeze during rain (minor annoyance)",
        "rules": "During periods of heavy rainfall, the jacket's zippers become frozen and require a DC 12 Constitution saving throw each hour to unfreeze them. Failure means you are unable to open or close the jacket until it thaws."
      }
    ],
    "levelRequirementReason": "This jacket is designed for those who are still learning the basics of Pokémon training, requiring a player character to be at least third level.",
    "vendorReason": "As an official vendor of League Merchandise, it's only fitting that they sell this iconic jacket worn by aspiring champions across the region.",
    "shippingDetail": "Ships via Pikachu Post within a week. Delivery may be delayed during rainy season due to zipper freeze issues.",
    "usage": {
      "activation": "Passive effect until zippers unfreeze in dry weather or after successful saving throw.",
      "duration": "Until zippers unfreeze, lasting for one hour per heavy rain event.",
      "endsWhen": "Zippers unfreeze during dry weather or after a successful Constitution saving throw.",
      "charges": "Unlimited uses; recharges daily."
    },
    "priceReason": "The jacket's waterproofing and utility features, combined with its rarity and the limited availability from official vendors, justify this price in XP.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-23T16:48:04.897437+00:00",
    "aiReviewedAt": "2026-07-23T16:48:04.897437+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_league_type_advantage_coating": {
    "id": "pokemon_league_type_advantage_coating",
    "name": "Pokémon League Type Advantage Coating",
    "description": "The Pokémon League Type Advantage Coating is a specialized weapon finish that enhances your blade's lethality. This coating grants +2 damage against one chosen creature type, such as undead or fiend, for 10 days. However, it also makes the weapon weak to another random type, forcing you to balance precision and versatility in combat. The coating wears off when exposed to water, leaving behind a dull, faded sheen that resembles hastily applied paint.",
    "category": "services",
    "price": 1000,
    "icon": "⚡",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Type Advantage",
      "Type Disadvantage"
    ],
    "vendor": "pokemon_league",
    "shippedBy": "Pokeball Parcel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Type Advantage",
        "rules": "Activates on application. The weapon deals +2 damage to one chosen creature type for 10 days, after which the coating peels off in water. Requires a bonus action to apply."
      },
      {
        "title": "Type Disadvantage",
        "rules": "The weapon becomes weak to another random creature type from the same category as the advantage, dealing disadvantage on attack rolls against that type until the coating is removed or replaced."
      }
    ],
    "levelRequirementReason": "This coating is suitable for low-level adventurers who need a tactical edge in their first few combat encounters.",
    "vendorReason": "The Pokémon League specializes in enhancing the capabilities of various weapons, from basic to exotic.",
    "shippingDetail": "Delivered via a trusted Pokeball Parcel within 3 days.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 days or until the coating is removed in water",
      "endsWhen": "The coating peels off when exposed to water; reapplication required for continued use",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the specialized crafting and application process, as well as the temporary nature of the effect.",
    "priceOriginal": 20500,
    "priceReviewedAt": "2026-07-23T16:47:29.862333+00:00",
    "aiReviewedAt": "2026-07-23T16:47:29.862333+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_league_type_charm": {
    "id": "pokemon_league_type_charm",
    "name": "Pokémon League Type Charm",
    "description": "The Pokémon League Type Charm is a small, intricately crafted talisman that glows faintly when activated. Crafted from polished onyx and imbued with the essence of an elemental type, it whispers stories of legendary trainers who have wielded its power. Choose wisely: each charm aligns with one of four elemental types—Fire, Water, Grass, or Electric—and once chosen, it enhances your attacks by +1d4 damage while granting you resistance to that same element's damage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Elemental Focus",
      "Type Resistance"
    ],
    "vendor": "pokemon_league",
    "shippedBy": "Certified Trainer Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Focus",
        "rules": "Activate as a bonus action. Your attacks of the chosen type deal an additional +1d4 damage until the start of your next turn."
      },
      {
        "title": "Type Resistance",
        "rules": "Gain resistance to all damage from spells and abilities of the chosen elemental type for 1 hour or until you take damage from a different element."
      }
    ],
    "levelRequirementReason": "The charm's elemental essence requires some alignment with the user, making it accessible at level 1.",
    "vendorReason": "Only the Pokémon League would offer such a meticulously crafted and elemental-focused charm.",
    "shippingDetail": "Delivered by trusted trainers who ensure the safe arrival of this enchanted artifact.",
    "usage": {
      "activation": "Bonus action to activate, lasts until start of next turn or until the user takes damage from a different elemental type.",
      "duration": "Until the start of your next turn or until you take damage from a different elemental type.",
      "endsWhen": "The bonus action activation ends when used or until the duration expires.",
      "charges": "Unlimited, recharges after 8 hours."
    },
    "priceReason": "Balanced as it offers both offensive and defensive benefits at a reasonable cost for a rare item.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T16:47:47.017796+00:00",
    "aiReviewedAt": "2026-07-23T16:47:47.017796+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_league_type_resist_amulet": {
    "id": "pokemon_league_type_resist_amulet",
    "name": "Pokémon League Type Resist Amulet",
    "description": "The Pokémon League Type Resist Amulet is a sleek and intricate piece of jewelry crafted from polished obsidian. It resonates with the power of the Elite Four Artisans, glowing faintly to signal when its chosen elemental type—fire or water—is nearby. Attuned once per day, this amulet grants you resistance to one selected damage type for 8 hours, and once per day, it can negate a single instance of that damage entirely.",
    "price": 1000,
    "icon": "📿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Elemental Resistance",
      "Damage Negation"
    ],
    "vendor": "pokemon_league_jewelers",
    "shippedBy": "Eevee Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Elemental Resistance",
        "rules": "You gain resistance to one elemental type (fire or water) for 8 hours once you attune to the amulet. You must complete a short rest before reattuning."
      },
      {
        "title": "Damage Negation",
        "rules": "Once per day, as an action, you can negate one instance of damage from your chosen elemental type. This effect does not stack with other forms of resistance or immunity to the same damage type."
      }
    ],
    "levelRequirementReason": "This amulet requires a minimum level of 6 due to its complexity and the raw power it channels.",
    "vendorReason": "The Elite Four Artisans at Pokémon League Jewelers are known for their mastery of elemental magic, making this amulet one of their most sought-after creations.",
    "shippingDetail": "Ships via Eevee Express with expedited delivery within a week.",
    "usage": {
      "activation": "Attunement and once per day as an action to negate damage.",
      "duration": "8 hours of elemental resistance, once per day for negating damage.",
      "endsWhen": "Reattuning or the end of the duration.",
      "charges": "Uses are limited; reattunes after a short rest."
    },
    "priceReason": "The balanced price reflects its rarity and the unique magical properties it provides, making it accessible but not trivial for a mid-level adventurer.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T16:47:43.767639+00:00",
    "aiReviewedAt": "2026-07-23T16:47:43.767639+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_magitek_circuit_core": {
    "id": "pokemon_magitek_circuit_core",
    "name": "Magitek Circuit Core",
    "description": "The Magitek Circuit Core is a compacted piece of industrialized arcane energy, crafted from the Iron Legion’s factories. This core boosts attack power by 30% for three turns and enhances evolution success rate by 40%, making it an essential tool for any Pokémon Trainer who seeks to refine their battle prowess. Crafted with precision in the heart of the Iron Legion, each core is a testament to magitek engineering excellence.",
    "price": 1000,
    "icon": "⚡",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Boosts Attack",
      "Enhances Evolution"
    ],
    "vendor": "pokemon",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Boosts Attack",
        "rules": "When activated as an action, this core boosts the user's attack power by 30% for three turns. The effect ends if the user is reduced to 0 hit points or if the core is destroyed."
      },
      {
        "title": "Enhances Evolution",
        "rules": "While attuned, this core enhances the success rate of Pokémon evolution by 40%. The enhancement lasts until the end of the session. The effect ends if the user stops being attuned to the core or if it is destroyed."
      }
    ],
    "levelRequirementReason": "The core's advanced technology and the attunement required make it suitable for experienced Trainers.",
    "vendorReason": "As a part of the Iron Legion, Pokémon is responsible for distributing key tools like this Magitek Circuit Core to its clients.",
    "shippingDetail": "Ships via Goomba Ground Delivery, known for its reliable and punctual service.",
    "usage": {
      "activation": "Action",
      "duration": "3 turns",
      "endsWhen": "User is reduced to 0 hit points or core is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the core's advanced technology and the attunement requirement.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T16:47:50.540537+00:00",
    "aiReviewedAt": "2026-07-23T16:47:50.540537+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_master_ball_shard": {
    "id": "pokemon_master_ball_shard",
    "name": "Master Ball Shard",
    "description": "The Master Ball Shard is a shimmering fragment of the legendary capture device, forged in the ancient ruins of the Galactic Dome. Crafted by Liberated Toads, this shard glows with an arcane light when a Pokémon’s destiny is sealed. Only spellcasters may attune to its resonant power, as it whispers warnings to those who misuse its magic. It deals 2d6 bonus arcane damage and has a 15% chance to trigger wild magic surge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Arcane Damage",
      "Wild Magic Surge"
    ],
    "vendor": "pokemon",
    "shippedBy": "Mages Guild Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Arcane Damage",
        "rules": "When activated, this shard deals 2d6 bonus arcane damage. It requires an action to activate and has no set duration; it ends when the user stops attuning or when used in battle."
      },
      {
        "title": "Wild Magic Surge",
        "rules": "There is a 15% chance that using this shard triggers a wild magic surge, which can unleash unpredictable effects. This effect occurs once per short rest and requires a successful DC 14 Wisdom saving throw or be subjected to the wild magic surge."
      }
    ],
    "levelRequirementReason": "The shard's arcane resonance is accessible to all spellcasters, making it a valuable tool for beginners.",
    "vendorReason": "The Pokémon vendor, familiar with legendary artifacts, sells this shard as it aligns well with their inventory of mystical items.",
    "shippingDetail": "Ships via the Mages Guild Portal within a week, ensuring safe delivery to spellcasters across the realm.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Stopped attuning or used in battle",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's rarity and the magical properties it provides justify its moderate price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T16:47:58.808250+00:00",
    "aiReviewedAt": "2026-07-23T16:47:58.808250+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_minus_world_mirage": {
    "id": "pokemon_minus_world_mirage",
    "name": "Minus World Mirage",
    "description": "The Minus World Mirage is a fractured artifact from a lost dimension, now imbued with unstable energy. Crafted by ancient beings who sought to harness the void's power, it hums with dark, electric pulses that crackle around its core. This relic grants immunity to psychic damage, but each use triggers a 30% chance of causing a dimensional collapse, sending nearby creatures into a realm where reality bends and time distorts.",
    "price": 1000,
    "icon": "⚡",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Grants Immunity",
      "Dimensional Collapse"
    ],
    "vendor": "pokemon",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Psychic Damage",
        "rules": "The user gains immunity to all forms of psychic damage. This effect is active until the end of their next turn."
      },
      {
        "title": "Dimensional Collapse",
        "rules": "Each activation has a 30% chance to trigger a dimensional collapse, sending creatures within 15 feet into a realm where reality warps and time distorts. The user must succeed on a DC 18 Dexterity saving throw or be pulled along with the affected creatures. Creatures who successfully save are teleported safely back."
      }
    ],
    "levelRequirementReason": "The Minus World Mirage's unstable energy requires a user of at least level 1 to handle its power.",
    "vendorReason": "Only those who have proven their courage and understanding of the Minus World would be trusted with such an artifact.",
    "shippingDetail": "The artifact is shipped under strict protocols to prevent dimensional breaches during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The user fails a saving throw or the effect ends when the user enters an area of stable reality.",
      "charges": "Unlimited, but each use requires attunement to the current location."
    },
    "priceReason": "This relic's balanced price reflects its powerful immunity and rare risk, suitable for adventurers of all levels.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T16:48:02.307346+00:00",
    "aiReviewedAt": "2026-07-23T16:48:02.307346+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_ranger_union_crimson_key": {
    "id": "pokemon_ranger_union_crimson_key",
    "name": "Crimson Key of the Iron Legion",
    "description": "The Crimson Key of the Iron Legion is a relic forged from the blood of fallen industrialists. This key glows with an eerie crimson light, emitting faint mechanical hums when in use. It can only be wielded by members of the Ranger Union and grants a +1 bonus to attack rolls for physical weapons. When used against Pokémon with steel or iron traits, it triggers malfunctions causing their defense to drop by 2 for one turn.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Steel Malfunction",
      "Precision Strike"
    ],
    "vendor": "pokemon",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Steel Malfunction",
        "rules": "When the key is used against a target with steel or iron traits, it causes their defense to drop by 2 for one turn. This effect can only occur once per battle."
      },
      {
        "title": "Precision Strike",
        "rules": "Grants a +1 bonus to attack rolls for physical weapons when the key is used. The bonus stacks with other accuracy bonuses but does not exceed +3 in total."
      }
    ],
    "levelRequirementReason": "The key requires a high level of discipline and understanding of mechanical and industrial lore possessed by experienced Ranger Union agents.",
    "vendorReason": "As the relic is crafted specifically for the use of Ranger Union members, it makes sense that they would be the ones to sell it within their ranks.",
    "shippingDetail": "Delivered via spirit courier, ensuring the key arrives intact and ready for use.",
    "usage": {
      "activation": "Action",
      "duration": "One turn per activation",
      "endsWhen": "The end of the target's next turn or when a new action is taken",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rarity and the expertise required to wield it effectively.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T16:48:03.966699+00:00",
    "aiReviewedAt": "2026-07-23T16:48:03.966699+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_spectral_tether": {
    "id": "pokemon_spectral_tether",
    "name": "Spectral Tether",
    "description": "The Spectral Tether is a delicate chain forged from the essence of captured spirits. It glows faintly with an ethereal light, and when paired with a Pokémon, it draws the creature closer to the physical world, enhancing its abilities while also protecting you from status effects. This tether suffers minor damage in dark terrains but grants you a greater chance of avoiding them yourself. Unleashing hidden routes within the Phantom Zone, it serves as both a tool and a guardian for those brave enough to journey through the spectral realm.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕳",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Spiritual Bond",
      "Status Resilience"
    ],
    "vendor": "pokemon",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spiritual Bond",
        "rules": "Activates on capture, this tether forms an unbreakable bond between you and a Pokémon. The tether grants you advantage on Charisma (Intimidation) checks to control the creature until it escapes or is dismissed."
      },
      {
        "title": "Status Resilience",
        "rules": "While wearing the Spectral Tether, you have resistance to all non-magical status effects and a 25% chance to avoid any magical ones. This effect lasts as long as you wear the tether."
      }
    ],
    "levelRequirementReason": "This tether is designed for players who are just starting their journey in the Phantom Zone, needing only basic skills to benefit from its protection.",
    "vendorReason": "The Pokémon Company specializes in artifacts and tools that enhance player interaction with captured creatures.",
    "shippingDetail": "Ships via Goomba's trusted delivery service, ensuring safe arrival within a week of purchase.",
    "usage": {
      "activation": "Passive effect once paired with a Pokémon.",
      "duration": "While worn and not in dark terrain.",
      "endsWhen": "The tether is removed or the bond is severed by the creature escaping.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced with a price of 1000 XP, this item provides significant benefits without overshadowing other gear.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T16:48:14.064315+00:00",
    "aiReviewedAt": "2026-07-23T16:48:14.064315+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_team_rocket_scam_treasure": {
    "id": "pokemon_team_rocket_scam_treasure",
    "name": "The Great Peach’s Last Wish",
    "description": "The Great Peach’s Last Wish is a shimmering golden artifact that glows faintly with the essence of its legendary owner. Crafted from the rarest materials and imbued with ancient magic, it promises to fulfill any wish written on paper sealed in a jar. However, users risk becoming the 'Peach's Shadow'—a cursed entity bound to Changeling Hive for 1 week if the wish triggers a curse, or they gain temporary invisibility and immunity to attacks for 1 turn with a 10% chance. Only desperate souls dare to claim this artifact from Team Rocket’s dubious mercantile.",
    "price": 1000,
    "icon": "💀",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Grants one wish per use",
      "50% chance of triggering a curse"
    ],
    "vendor": "pokemon",
    "shippedBy": "Courier of the Mages Guild Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wish Fulfillment",
        "rules": "Activates with a short rest. The user must write their wish on paper and seal it in a jar before using the artifact. The item grants one wish per use, but there is a 50% chance that after 30 minutes of use, the user will become bound to the Changeling Hive for 1 week."
      },
      {
        "title": "Curse Trigger",
        "rules": "If used more than once, the artifact becomes cursed and unusable. The user must complete a short rest before attempting another wish."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurers can find themselves in dire straits, making this item accessible to all levels.",
    "vendorReason": "Team Rocket’s notorious scams attract desperate buyers who see no other way out.",
    "shippingDetail": "Delivered via magical courier with a 1-day delivery time, ensuring that the artifact arrives in pristine condition.",
    "usage": {
      "activation": "Short rest",
      "duration": "Instantaneous upon activation; wish effect lasts until completed or canceled by the user",
      "endsWhen": "Wish is fulfilled or canceled by the user",
      "charges": "Unlimited, but one use per short rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its powerful yet risky nature.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T16:48:18.350136+00:00",
    "aiReviewedAt": "2026-07-23T16:48:18.350136+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_teyvat_echo_bottle": {
    "id": "pokemon_teyvat_echo_bottle",
    "name": "Teyvat Echo Bottle",
    "description": "The Teyvat Echo Bottle is a delicate glass container adorned with intricate patterns depicting elemental forces. This relic captures and preserves echoes of distant elemental power, capable of restoring life and vitality to its wielder. When consumed in a safe environment, it heals 10% of the user's maximum hit points and magic points, while there's a 20% chance for an unpredictable elemental reaction to occur, enhancing nearby allies or creating a temporary battlefield advantage.",
    "price": 1000,
    "icon": "🌊",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Restores HP & MP",
      "Elemental Reaction Chance"
    ],
    "vendor": "pokemon",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Echo",
        "rules": "When consumed in a safe zone not occupied by Team Rocket members, the user regains 10% of their maximum hit points and magic points. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Elemental Surge",
        "rules": "There is a 20% chance that consuming the bottle will trigger an elemental reaction, which grants nearby allies temporary hit points equal to half of their current hit points. This effect lasts for one minute and can occur once per day."
      }
    ],
    "levelRequirementReason": "This item is accessible to lower-level Rangers Union members as a starting point for elemental training.",
    "vendorReason": "The Pokémon Rangers have extensive knowledge of the Teyvat Echo Bottle's origins and can provide it to their allies for safe use.",
    "shippingDetail": "Ships via Void Drifter Relay with a two-week delivery time, ensuring the bottle remains undamaged during transit.",
    "usage": {
      "activation": "Consumed as an action in a safe environment not occupied by Team Rocket members.",
      "duration": "Instantaneous for Healing Echo; Elemental Surge lasts one minute.",
      "endsWhen": "Exhausted after use or if consumed outside of a safe zone.",
      "charges": "Rechargeable once per day, limited to one use per rest."
    },
    "priceReason": "The Teyvat Echo Bottle is priced at 1000 XP due to its unique elemental properties and the specialized knowledge required for safe usage.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T16:48:19.827066+00:00",
    "aiReviewedAt": "2026-07-23T16:48:19.827066+00:00",
    "aiReviewVersion": 1
  },
  "pokey_cactus": {
    "id": "pokey_cactus",
    "name": "Pokey Cactus Segment",
    "description": "This segmented cactus rolls across the ground, its sharp spines slicing through foes in its path. Crafted from the heartwood of ancient desert guardians, each segment is imbued with a singular purpose: to impale and ensnare. Roll it out to impale creatures within 30 feet; they take 2d4 piercing damage as the cactus rolls past them. The spines then embed into the ground, creating an obstacle that deals ongoing 1d4 piercing damage until removed.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌵",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Rolling Impalement",
      "Persistent Spine"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Prickly Package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rolling Impalement",
        "rules": "When you activate the Pokey Cactus Segment as a bonus action, it rolls up to 30 feet across the ground. All creatures in its path must make a DC 12 Dexterity saving throw or take 2d4 piercing damage from the rolling spines."
      },
      {
        "title": "Persistent Spine",
        "rules": "The cactus segment embeds into the ground, creating an ongoing 1d4 piercing damage area effect that lasts until the end of your next turn. This effect can be ended by a creature within range taking an action to remove it."
      }
    ],
    "levelRequirementReason": "This cactus segment is designed for more novice adventurers who are just beginning their journey.",
    "vendorReason": "The Shamans' Hut specializes in crafting items derived from ancient desert flora and fauna, making this a perfect fit.",
    "shippingDetail": "Ships via Prickly Package courier; delivery can take up to one week due to the nature of the shipment.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (Rolling Impalement), until end of next turn (Persistent Spine)",
      "endsWhen": "On a save success, or when removed by an action",
      "charges": "Unlimited"
    },
    "priceReason": "The Pokey Cactus Segment is priced at 1000 XP due to the craftsmanship and materials used in its creation.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T16:48:33.385690+00:00",
    "aiReviewedAt": "2026-07-23T16:48:33.385690+00:00",
    "aiReviewVersion": 1
  },
  "pokey_spine_pen": {
    "id": "pokey_spine_pen",
    "name": "Pokey Spine Quill",
    "description": "The Pokey Spine Quill is a cactus spine encased in a quill. When dipped into its prickly ink, it can write on any surface, even sand or stone, leaving behind an eternally binding contract. Desert creatures revere the signature and will aid you if offended by a breach of trust. The ink, though innocuous when writing, becomes poisonous if used as a dagger, dealing 1d4 poison damage to any who dare use it against you.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🖊️",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Eternally Binding Contract",
      "Poisonous Dagger"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Sandstorm Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Eternally Binding Contract",
        "rules": "When used to sign a contract, the ink ensures its magic enforces the terms. A target can attempt a DC 15 Charisma saving throw to break the contract; failure means they are bound by it."
      },
      {
        "title": "Poisonous Dagger",
        "rules": "If used as a dagger in combat, the ink turns into a potent poison that deals 1d4 poison damage. The user must make a Wisdom (Perception) check at DC 15 to avoid using it by accident."
      }
    ],
    "levelRequirementReason": "Suitable for beginners who wish to engage in binding contracts or defend themselves.",
    "vendorReason": "The trading post caters to travelers and merchants, selling items that aid their journeys and trade agreements.",
    "shippingDetail": "Ships within the week, delivered by a trusted sandstorm courier.",
    "usage": {
      "activation": "As an action or bonus action (to sign), as a weapon (as dagger)",
      "duration": "Instantaneous effect; contract lasts until enforced or broken",
      "endsWhen": "Contract is broken or fulfilled; poison effect ends on damage",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a versatile tool that can enforce agreements and defend against threats.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T16:48:28.606204+00:00",
    "aiReviewedAt": "2026-07-23T16:48:28.606204+00:00",
    "aiReviewVersion": 1
  },
  "polish_that_makes_armor_garlic": {
    "id": "polish_that_makes_armor_garlic",
    "name": "Wario's Garlic Armor Polish",
    "description": "Wario's Garlic Armor Polish transforms your armor into a shimmering, pungent defense against undead hordes and social awkwardness. When applied, it grants +1 AC for 24 hours, making you gleam with an irresistible sheen. The garlic scent, while repelling the undead, leaves you smelling like a battlefield kitchen, which can be off-putting in delicate situations. The polish also attracts flies, adding a unique but minor distraction to your combat encounters.",
    "category": "services",
    "price": 1000,
    "icon": "🧄",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Garlic Aura",
      "Undead Repellent"
    ],
    "vendor": "wario_land",
    "shippedBy": "Polish Pot Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Garlic Aura",
        "rules": "When applied as a bonus action, the armor gains +1 AC for 24 hours. The polish must be reapplied to maintain this effect. If the wearer moves to an area with a foul odor or after 24 hours, the +1 AC is lost."
      },
      {
        "title": "Undead Repellent",
        "rules": "The garlic scent provides advantage on saving throws against being controlled by undead creatures and disadvantage on Charisma (Persuasion) checks. This effect lasts until you use a bonus action to apply more polish or 24 hours have passed."
      }
    ],
    "levelRequirementReason": "The item is simple enough that it can be used by any character, enhancing their basic equipment without requiring high-level proficiency.",
    "vendorReason": "Wario's Shine Scam specializes in making armor look its best, and this polish is a natural fit for his roster of services.",
    "shippingDetail": "Delivered by the Polish Pot Express, known for quick and reliable service with no delays.",
    "usage": {
      "activation": "Bonus action to apply or reapply polish.",
      "duration": "24 hours per application.",
      "endsWhen": "After 24 hours or when the wearer moves to an area of foul odor.",
      "charges": "Unlimited uses, but must be reapplied."
    },
    "priceReason": "The item is priced moderately as it offers a unique and functional utility that can enhance any character's basic armor without requiring high-level magic or crafting.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T16:48:47.960765+00:00",
    "aiReviewedAt": "2026-07-23T16:48:47.960765+00:00",
    "aiReviewVersion": 1
  },
  "poltergeist_pepper": {
    "id": "poltergeist_pepper",
    "name": "Poltergeist Pepper",
    "description": "The Poltergeist Pepper is a shriveled, misshapen pepper that seems to exude an eerie, almost sentient energy when shaken. When sprinkled on inanimate objects within a 15-foot radius, it imbues them with a malevolent, berserk enthusiasm for destruction. For one minute, these animated constructs lash out at foes and allies alike, dealing +1d6 force damage with each strike. If the dice roll lands on a natural 1, a poltergeist might actually manifest in the area, adding chaos to the fray.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌶️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Animated Violence",
      "Poltergeist Risk"
    ],
    "vendor": "witch_hut",
    "shippedBy": "Phantom Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Animated Violence",
        "rules": "Activate as an action. Within a 15-foot radius, animate nearby inanimate objects for one minute. These constructs deal +1d6 force damage to all creatures within the area until they are destroyed or their turn ends."
      },
      {
        "title": "Poltergeist Risk",
        "rules": "There is a 5% chance (DC 10 Dexterity saving throw) that a poltergeist manifests in the area for one minute after activation. If a poltergeist appears, it fights against all creatures in the area until it is destroyed."
      }
    ],
    "levelRequirementReason": "Requires at least third level to manage the risk and control of such volatile magic.",
    "vendorReason": "The witch at the hut specializes in crafting items that channel dark forces, making her a natural vendor for this mischievous pepper.",
    "shippingDetail": "Delivered by spectral means; expedited shipping with no physical delivery required.",
    "usage": {
      "activation": "Action to sprinkle and activate the pepper's effects.",
      "duration": "One minute or until the animated objects are destroyed.",
      "endsWhen": "The poltergeist, if summoned, is destroyed or its turn ends; the constructs are destroyed or their turn ends.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to reflect the risk and potential chaos it can stir, this pepper is priced at a reasonable cost for a rare item that demands careful handling.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T16:49:04.794337+00:00",
    "aiReviewedAt": "2026-07-23T16:49:04.794337+00:00",
    "aiReviewVersion": 1
  },
  "poltergust_g00": {
    "id": "poltergust_g00",
    "name": "Poltergust G-00 Prototype",
    "description": "The Poltergust G-00 Prototype is Professor E. Gadd's latest ghost-hunting innovation, a compact device that combines his mad scientist ingenuity with ancient ghostly lore. Crafted from enchanted brass and imbued with the essence of an exorcised poltergeist, it delivers both close combat and aerial prowess to those brave enough to wield its power. The prototype is known for its unpredictable nature, capable of summoning a temporary slime clone in emergencies but also prone to misfires that can backfire on the user.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧹",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Grapple & Combat",
      "Ghostly Aura"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "E. Gadd Science Division Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Grapple & Combat",
        "rules": "As an action, you can grapple a ghost or spirit within 5 feet. The target must succeed on an Intelligence saving throw (DC 16) or be grappled by the Poltergust G-00 Prototype. As a bonus action, you can slam a grappled target for 2d8 force damage."
      },
      {
        "title": "Ghostly Aura",
        "rules": "While active, the device emits an aura that grants you advantage on saving throws against being frightened or charmed by supernatural effects. The effect lasts until the start of your next turn after using the Grapple & Combat feature. Requires a daily short rest to recharge."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to handle its unpredictable nature and wield its ghostly powers effectively.",
    "vendorReason": "The Gilded Gryphon, known for its eclectic collection of rare and experimental items, offers the latest from Professor E. Gadd's lab.",
    "shippingDetail": "Ships via a specialized ghost-repellent delivery service to ensure safe arrival.",
    "usage": {
      "activation": "Action for grapple and bonus action for slam; reaction for burst jump.",
      "duration": "Instantaneous actions, duration of one turn for grapple effect.",
      "endsWhen": "Grapple ends when the target escapes or is released. Slammed target remains prone until it stands up.",
      "charges": "Unlimited daily uses with a short rest."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its experimental nature and the risks involved in using such cutting-edge ghost-hunting technology.",
    "priceOriginal": 280000,
    "priceReviewedAt": "2026-07-23T16:48:44.953591+00:00",
    "aiReviewedAt": "2026-07-23T16:48:44.953591+00:00",
    "aiReviewVersion": 1
  },
  "polybius_arcade_popcorn_popper": {
    "id": "polybius_arcade_popcorn_popper",
    "name": "Polybius Arcade Popcorn Popper",
    "description": "The Polybius Arcade Popcorn Popper is a sleek, electric device that crackles to life with a flick of its switch. This compact popper not only pops kernels at an alarming rate but also emits nostalgic chiptune music, enhancing the snack experience for any gamer or cinephile. After indulging in its popcorn, you gain +1 Dexterity (reflex boost) until your next short rest. However, overuse can lead to overheating; after popping more than 2 cups of kernels in a day, it requires an hour-long cooldown period.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍿",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Reflex Boost After Snacking",
      "Nostalgic Chiptune Music"
    ],
    "vendor": "Polybius Arcade",
    "shippedBy": "Popcorn Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reflex Boost After Snacking",
        "rules": "After consuming popcorn popped by this device, the user gains a +1 bonus to Dexterity (reflex save) checks for their next short rest. This effect is limited to once per day."
      },
      {
        "title": "Nostalgic Chiptune Music",
        "rules": "During operation, the Polybius Arcade Popcorn Popper plays soothing chiptune music that enhances snack enjoyment. The volume is set to a comfortable level and does not require concentration from the user."
      }
    ],
    "levelRequirementReason": "This popper can be used by characters of any level, enhancing the snack experience for everyone.",
    "vendorReason": "As a premier arcade equipment provider, Polybius Arcade naturally offers this innovative popcorn popper to cater to their customers' diverse entertainment needs.",
    "shippingDetail": "Ships via Popcorn Express Courier; delivery is typically within 3 days of purchase.",
    "usage": {
      "activation": "As a bonus action, the user can activate or deactivate the popper.",
      "duration": "Instantaneous popping when activated; music plays continuously until the popper stops.",
      "endsWhen": "The effect ends after one day for reflex boost and music continues until manually turned off.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item is priced at 1000 XP, reflecting its unique combination of functionality, entertainment value, and the quality craftsmanship from Arcade Inventors.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T16:49:07.048804+00:00",
    "aiReviewedAt": "2026-07-23T16:49:07.048804+00:00",
    "aiReviewVersion": 1
  },
  "polybius_arcade_token": {
    "id": "polybius_arcade_token",
    "name": "Polybius Arcade Token",
    "description": "The Polybius Arcade Token is a gleaming brass token with intricate engravings that whisper of bygone arcade adventures. When inserted into simple gadgets or games, it powers them up, granting +1d4 to related ability checks like Tinkering or Repair. Its nostalgic charm also grants advantage on History checks regarding old tech, making it invaluable for those who cherish vintage mechanics. Beware its overheated state: there's a 10% chance of a minor zap dealing 1 damage each day the token is used.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪙",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Arcade Boost",
      "Nostalgic Advantage"
    ],
    "vendor": "Polybius",
    "shippedBy": "Pixelated Pouch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Arcade Boost",
        "rules": "When inserted into simple mechanical devices, this token grants +1d4 to related ability checks. This effect is instantaneous and does not consume charges or have a duration."
      },
      {
        "title": "Nostalgic Advantage",
        "rules": "Once per day, the user gains advantage on History checks concerning old tech when using it in conjunction with knowledge about vintage arcade culture. This effect lasts until the end of the next long rest."
      }
    ],
    "levelRequirementReason": "This token is accessible to all adventurers as it aids in simple tasks without requiring specific expertise.",
    "vendorReason": "Polybius, a vendor with a penchant for retro tech and nostalgia, naturally stocks this item.",
    "shippingDetail": "Delivered via Pixelated Pouch, known for its reliability in delivering arcane tokens to eager collectors and players alike.",
    "usage": {
      "activation": "Instantaneous when inserted into a mechanical device or used for checks.",
      "duration": "Instantaneous; effect ends upon removal from the device.",
      "endsWhen": "The token overheats, dealing 1 damage and ending its use.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for an uncommon item that provides utility without being overpowered.",
    "priceOriginal": 11700,
    "priceReviewedAt": "2026-07-23T16:49:00.256174+00:00",
    "aiReviewedAt": "2026-07-23T16:49:00.256174+00:00",
    "aiReviewVersion": 1
  },
  "polybius_arcade_token_service": {
    "id": "polybius_arcade_token_service",
    "name": "Polybius Arcade Token Service",
    "description": "The Polybius Arcade Token Service grants you an endless supply of tokens for honing your skills. Each hour spent playing a game here allows you to gain proficiency in one tool or skill, enhancing your capabilities with each session. Your high scores earn you an additional +1d4 bonus on your next Dexterity check, making it easier to dodge and react swiftly. Be cautious, though; the service can be addictive, forcing you to make a Wisdom saving throw (DC 12) to avoid overindulging in these games of chance and skill.",
    "price": 1000,
    "icon": "🪙",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Skill Proficiency Boost",
      "High Score Bonus"
    ],
    "vendor": "polybius_arcade",
    "shippedBy": "Pixelated Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Skill Proficiency Boost",
        "rules": "Activates on use as a bonus action. Gain proficiency in one tool or game for 1 day upon using the service for at least 1 hour. The effect ends when you gain another level."
      },
      {
        "title": "High Score Bonus",
        "rules": "Provides a +1d4 temporary bonus to your next Dexterity check after accumulating high scores in games over a session, with no limit on uses per day."
      }
    ],
    "levelRequirementReason": "Suitable for beginners who need to build their skills from the ground up.",
    "vendorReason": "Known for fostering skill and innovation through interactive games and services.",
    "shippingDetail": "Ships via digital download with immediate access upon purchase.",
    "usage": {
      "activation": "Bonus action to use the service for at least one hour in a Polybius Arcade location.",
      "duration": "1 day of proficiency and +1d4 bonus on next Dexterity check.",
      "endsWhen": "Gain another level or when the tokens run out (unlimited tokens with this service).",
      "charges": "Unlimited uses per day, but only one proficiency boost."
    },
    "priceReason": "Balanced price considering the value of gaining a new skill and temporary bonuses to Dexterity checks.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T16:49:03.295016+00:00",
    "aiReviewedAt": "2026-07-23T16:49:03.295016+00:00",
    "aiReviewVersion": 1
  },
  "polybius_arcade_training": {
    "id": "polybius_arcade_training",
    "name": "Polybius Arcade Training Session",
    "description": "The Polybius Arcade Training Session cabinet hums to life as you press its start button, a relic of a bygone era. The screen flickers to reveal geometric patterns and flashing lights that test your reflexes like never before. For the next week, your initiative improves and you gain advantage on Dexterity saves against traps. However, the experience is not without its price; for every hour spent in front of the cabinet, you must endure a nightmarish encounter with shadowy figures watching from the corners of your vision.",
    "category": "services",
    "price": 1000,
    "icon": "🕹️",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+1 to Initiative",
      "Advantage on Dexterity saves vs. traps"
    ],
    "vendor": "polybius",
    "shippedBy": "Flashing Lights Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+1 to Initiative",
        "rules": "You gain a +1 bonus to initiative rolls for 7 days, beginning at the start of your next turn after using this item."
      },
      {
        "title": "Advantage on Dexterity saves vs. traps",
        "rules": "For 7 days, you have advantage on Dexterity saving throws against traps and environmental hazards that require quick reflexes."
      }
    ],
    "levelRequirementReason": "The session is designed for beginners to veterans who want a challenge.",
    "vendorReason": "Polybius Arcade, now defunct but remembered fondly by those who played its machines, still offers this nostalgic training service to fans of its cabinets.",
    "shippingDetail": "The cabinet is shipped in a sturdy crate and requires assembly upon arrival. Delivery includes a complimentary guide on how to use the cabinet effectively.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "7 days, beginning at the start of your next turn after using this item",
      "endsWhen": "The effects expire naturally or if you stop using the cabinet for more than 24 hours",
      "charges": "Unlimited; a new session can be started once the previous one expires"
    },
    "priceReason": "Balanced to offer significant benefits at a price that reflects the nostalgia and effort required.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-23T16:49:28.112603+00:00",
    "aiReviewedAt": "2026-07-23T16:49:28.112603+00:00",
    "aiReviewVersion": 1
  },
  "polybius_data_crystal": {
    "id": "polybius_data_crystal",
    "name": "Polybius Data Crystal",
    "description": "The Polybius Data Crystal is a small, faceted gem that glows softly in the palm of its wielder. Crafted from the refined essence of ancient maps, this crystal can store and project detailed holographic representations of vast landscapes. Its projections are so vivid that they appear to pulse with life, making it an invaluable tool for scouts and strategists alike. The Polybius Data Crystal was forged in the heart of the Polybius data hub, a place where knowledge and technology intertwine.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Holomorphic Map Storage",
      "3D Projection"
    ],
    "vendor": "polybius_data_hub",
    "shippedBy": "Crystal Case",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Holomorphic Map Storage",
        "rules": "The crystal can store one detailed map covering up to 10 square miles. This effect is activated by a bonus action and requires no material components. The stored map can be projected at will as an action with a 30-foot radius around the user."
      },
      {
        "title": "3D Projection",
        "rules": "The crystal projects a 3-dimensional hologram of the stored map, which is visible to all creatures within its range. This projection lasts until dismissed or interrupted by damage (including spell effects). A creature can make an Intelligence saving throw with a DC of 15 to dispel this effect."
      }
    ],
    "levelRequirementReason": "The Polybius Data Crystal requires at least second-level proficiency in Arcana or Geography to effectively use its stored map and projection abilities.",
    "vendorReason": "As the creators of the crystal, Polybius ensures it is available exclusively through their hub for those who seek knowledge and strategic advantage.",
    "shippingDetail": "The Polybius Data Crystal is shipped in a specially designed case that protects both the crystal and its user from potential damage during transit.",
    "usage": {
      "activation": "Bonus action to store a map, Action to project the hologram.",
      "duration": "Instantaneous projection duration; ends on damage or dismissal.",
      "endsWhen": "Destroyed by damage equal to twice its price in XP.",
      "charges": "Unlimited"
    },
    "priceReason": "The Polybius Data Crystal is priced at 1000 XP, reflecting the balance between its utility and the craftsmanship required for such a precise tool.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-23T16:49:33.825185+00:00",
    "aiReviewedAt": "2026-07-23T16:49:33.825185+00:00",
    "aiReviewVersion": 1
  },
  "polybius_data_key": {
    "id": "polybius_data_key",
    "name": "Polybius Data Key",
    "description": "The Polybius Data Key is a strange key made of pixelated light, its surface etched with digital circuits and arcane runes. Crafted from a rare alloy fused with ancient data crystals, this key can bypass any non-physical lock, whether digital or psychic. However, when used, there is a 25% chance it will download into your mind a random, sanity-blasting secret that could unravel your very psyche if not resisted.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔑",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Digital and Psychic Lock Bypass",
      "Sanity-Threatening Secret Download"
    ],
    "vendor": "Polybius",
    "shippedBy": "Encrypted File Transfer",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Digital and Psychic Lock Bypass",
        "rules": "The Polybius Data Key can be used as an action to unlock any non-physical lock, including digital or psychic barriers. It has no range but requires the user to possess a valid keyhole to operate it effectively."
      },
      {
        "title": "Sanity-Threatening Secret Download",
        "rules": "When used, there is a 25% chance that upon successful unlocking, the key will download a random secret into your mind. This secret has a DC 17 Intelligence saving throw to resist; failure results in the secret being imprinted on your mind for one week."
      }
    ],
    "levelRequirementReason": "The intricate design and powerful magic embedded within the Polybius Data Key necessitate a minimum level of expertise.",
    "vendorReason": "As a tech-savvy vendor, Polybius specializes in rare and advanced artifacts that can manipulate data and information.",
    "shippingDetail": "The key is shipped via encrypted courier services to ensure its secure arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used or destroyed upon successful lock bypass or secret download failure.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the key's rarity and the potential risk involved in using it.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-24T23:26:32.992781+00:00",
    "aiReviewedAt": "2026-07-24T23:26:32.992781+00:00",
    "aiReviewVersion": 1
  },
  "polybius_memory_chip": {
    "id": "polybius_memory_chip",
    "name": "Polybius Memory Chip",
    "description": "The Polybius Memory Chip is a sleek, silicon-based device that hums with the power of encoded knowledge. Crafted by the enigmatic Polybius, this chip stores an array of complex mathematical sequences and battle strategies, allowing for instant recall of one proficiency in siege engineering or any other arcane skill. However, its activation requires a momentary insertion into your skull, temporarily degrading your Wisdom to 6 until the end of your next short rest.",
    "category": "equipment",
    "price": 1000,
    "icon": "💾",
    "stock": 12,
    "rarity": "rare",
    "effects": [
      "Instant Recall of Proficiency",
      "Temporary Wisdom Degradation"
    ],
    "vendor": "polybius_data_hub",
    "shippedBy": "Data Transfer Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Recall of Proficiency",
        "rules": "Activates as a bonus action. The user gains the benefits of one proficiency they know for 1 minute, including any associated features and spells."
      },
      {
        "title": "Temporary Wisdom Degradation",
        "rules": "Until the end of your next short rest, you have disadvantage on all Wisdom checks and saving throws. This effect does not stack with other similar effects."
      }
    ],
    "levelRequirementReason": "This device requires basic knowledge of complex skills to activate its benefits.",
    "vendorReason": "Polybius Data Hub specializes in advanced neural and computational technology, making this chip a prime offering.",
    "shippingDetail": "Ships via secure courier service within the next business day.",
    "usage": {
      "activation": "Bonus action to insert into your skull and activate.",
      "duration": "1 minute",
      "endsWhen": "Until the end of your next short rest, or when removed.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The chip's rarity and unique functionality justify a price point slightly below Epic level items.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-24T23:26:46.062768+00:00",
    "aiReviewedAt": "2026-07-24T23:26:46.062768+00:00",
    "aiReviewVersion": 1
  },
  "polybius_pixel_popcorn_recipe": {
    "id": "polybius_pixel_popcorn_recipe",
    "name": "Recipe: Polybius Pixel Popcorn",
    "description": "This arcane popcorn recipe yields golden kernels that pop with vibrant arcade sounds. Each handful grants a Dexterity check bonus (advantage), and the aroma alone can make even the most level-headed snackers crave more, requiring a Wisdom saving throw to resist (DC 12). The 'Popcorn' itself is an Arcade Snack Maker specialty, made from rare, golden corn kernels found in the neon-lit alleys of Polybius Arcade. It's said that eating this popcorn can transport you briefly into the pixelated realm of the arcade games themselves.",
    "price": 1000,
    "icon": "🍿",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Arcade Advantage",
      "Golden Craving"
    ],
    "vendor": "polybius_arcade",
    "shippedBy": "Kernel Kernel's Snack Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Arcade Advantage",
        "rules": "When a character eats a handful of Polybius Pixel Popcorn, they gain advantage on one Dexterity check made within the next hour. This effect is instantaneous and can be used once per short or long rest."
      },
      {
        "title": "Golden Craving",
        "rules": "A character who consumes this popcorn must succeed on a Wisdom saving throw (DC 12) to avoid being affected by its addictive aroma for the next hour. Failure indicates an intense craving, which can be resisted again after completing a short rest."
      }
    ],
    "levelRequirementReason": "The recipe's arcane properties and addictive nature make it accessible to characters of any level.",
    "vendorReason": "Polybius Arcade is renowned for its innovative snacks that blend the flavors of the arcade with magic, making this popcorn a natural addition to their inventory.",
    "shippingDetail": "Ships within 24 hours via Kernel Kernel's Snack Express, delivered fresh and piping hot.",
    "usage": {
      "activation": "Eating a handful of the popcorn",
      "duration": "Instantaneous effect; lasts for one hour after consumption",
      "endsWhen": "The duration ends or the effects are superseded by another use",
      "charges": "Unlimited uses, but only once per short or long rest"
    },
    "priceReason": "The popcorn's unique recipe and its addictive quality justify a price of 1000 XP.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T16:49:43.281547+00:00",
    "aiReviewedAt": "2026-07-23T16:49:43.281547+00:00",
    "aiReviewVersion": 1
  },
  "polybius_pixelated_cape": {
    "id": "polybius_pixelated_cape",
    "name": "Polybius Pixelated Cape ",
    "description": "The Polybius Pixelated Cape is a digital vestment woven from glitching code and neon threads. It flickers in and out of existence, leaving enemies momentarily disoriented. In sunlight, its pixels fade as if erased by the sun's rays. Crafted by Arcade Tailors using salvaged circuitry and vintage monitors, this capricious garment enhances your Deception checks when you 'glitch'—pretending to be injured—and creates a Minor distraction that confounds foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Glitching Deception",
      "Minor Distraction"
    ],
    "vendor": "polybius_arcade",
    "shippedBy": "8-Bit Fold",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glitching Deception",
        "rules": "When you use your action to feign injury, you gain advantage on the Deception check. This effect lasts until the start of your next turn."
      },
      {
        "title": "Minor Distraction",
        "rules": "As a bonus action, you can cause your cape to flicker, creating a Minor distraction for up to 1 minute. Enemies within 5 feet must succeed on a DC 10 Wisdom saving throw or be distracted, reducing their attack rolls by 2 until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The cape's digital nature and thematic design make it accessible to lower-level characters who wish to exploit its quirky abilities.",
    "vendorReason": "Arcade Tailors specialize in crafting unique, tech-infused garments that can be used for both practical and whimsical purposes.",
    "shippingDetail": "The shipment is delivered via an automated drone service known as Circuit Courier, which ensures the cape arrives glitch-free.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous Glitching Deception; Minor Distraction lasts up to 1 minute",
      "endsWhen": "The effect ends when you no longer meet the conditions to maintain it, such as completing your turn without using a glitch.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its uncommon rarity and the unique materials used in its construction.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-23T16:49:48.767214+00:00",
    "aiReviewedAt": "2026-07-23T16:49:48.767214+00:00",
    "aiReviewVersion": 1
  },
  "polybius_recipe_arcade_candy": {
    "id": "polybius_recipe_arcade_candy",
    "name": "Recipe: Polybius Arcade Candy",
    "description": "The Recipe: Polybius Arcade Candy is a nostalgic treat that tastes like the golden age of arcades, its wrapper embossed with pixelated patterns. Savoring it grants you a fleeting sugar rush, boosting your Initiative by +1 for an hour, but at the cost of heightened sensory distortions—your Perception checks are marred by disadvantageous trails of pixels. The candy is addictive; once you indulge, your daily routine becomes tinged with cravings that hinder focus unless you partake again.",
    "price": 1000,
    "icon": "📜",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Initiative Boost",
      "Visual Distortion"
    ],
    "vendor": "polybius",
    "shippedBy": "Flash Delivery Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Initiative Boost",
        "rules": "Activating the candy grants you a +1 bonus to your Initiative check. The effect lasts for one hour, after which time the bonus is lost."
      },
      {
        "title": "Visual Distortion",
        "rules": "While under the influence of the candy, you suffer disadvantage on Perception checks due to seeing pixelated trails. This effect persists until the duration ends or you abstain from further consumption."
      }
    ],
    "levelRequirementReason": "The candy's effects are mild enough for even novice adventurers, making it a suitable reward or snack for all levels.",
    "vendorReason": "Polybius Confectionery is renowned for its unique and nostalgic sweets, making the Arcade Candy an in-demand product.",
    "shippingDetail": "Orders are delivered with a flashing lights display, enhancing both delivery speed and presentation.",
    "usage": {
      "activation": "Eating the candy",
      "duration": "1 hour",
      "endsWhen": "The duration ends or you abstain from further consumption",
      "charges": "Unlimited"
    },
    "priceReason": "At 1,000 XP, this treat offers a balanced reward for its nostalgic appeal and mild effects.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T16:50:07.722190+00:00",
    "aiReviewedAt": "2026-07-23T16:50:07.722190+00:00",
    "aiReviewVersion": 1
  },
  "pony_nobility_decorating_bag": {
    "id": "pony_nobility_decorating_bag",
    "name": "Pony Nobility Decorating Bag",
    "description": "The Pony Nobility Decorating Bag is a delicate, pink silk pouch adorned with golden thread and emblazoned with the coat of arms of its noble creators. It weaves magic into every stroke, ensuring your pastries are not only delicious but also works of art that turn heads at any gathering. The bag's frosting never runs out, always maintaining a perfect consistency, and it compels you to praise your creations, which can be taxing if you lack confidence in your baking skills.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎂",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Unlimited Frosting",
      "Mandatory Compliment"
    ],
    "vendor": "pony_nobility",
    "shippedBy": "Enchanted Brush",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlimited Frosting",
        "rules": "This effect ensures that the Decorating Bag never runs out of frosting, always providing a perfect consistency. You can use it freely without worrying about its contents running dry."
      },
      {
        "title": "Mandatory Compliment",
        "rules": "When you use this item to decorate food, you must immediately offer a sincere compliment about your own cooking. If you fail to do so, you take disadvantage on the next check or saving throw you make before the end of your next turn."
      }
    ],
    "levelRequirementReason": "The bag is designed for beginners and those looking to enhance their food decoration skills without requiring a high level of experience.",
    "vendorReason": "Pony Nobility Bakers are known for their expertise in creating magical pastries, so it's only fitting that they offer this enchanted bag to aspiring decorators and chefs.",
    "shippingDetail": "The item is carefully delivered by Enchanted Brush, ensuring its arrival is as magical as the magic it contains.",
    "usage": {
      "activation": "Instantaneous use at will",
      "duration": "Instantaneous effect; no duration or save required",
      "endsWhen": "Exhausted when used without making a compliment",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the uncommon rarity and the unique magical properties that make this bag an invaluable tool for beginners.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-23T16:50:16.617270+00:00",
    "aiReviewedAt": "2026-07-23T16:50:16.617270+00:00",
    "aiReviewVersion": 1
  },
  "pony_nobility_diplomatic_seal": {
    "id": "pony_nobility_diplomatic_seal",
    "name": "Pony Nobility Diplomatic Seal",
    "description": "The Pony Nobility Diplomatic Seal is a sleek, embossed wax seal that glows faintly with the colors of the noble house it represents. This authenticating device ensures that documents bearing its imprint are treated as official by any Pony-aligned faction. It can also be used to forge minor diplomatic papers, though doing so risks exposing the forger if discovered. Crafted by the very hands of the nobility, this seal is a symbol of power and legitimacy in Equestria’s courtly system.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Official Authentication",
      "Minor Diplomatic Forgery"
    ],
    "vendor": "pony_royal_court",
    "shippedBy": "Royal Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Official Authentication",
        "rules": "When placed upon a document, the seal grants it official status among Pony-aligned factions. The user must be at least of noble birth or have a recognized authority to use this effect."
      },
      {
        "title": "Minor Diplomatic Forgery",
        "rules": "The user can create minor diplomatic papers that are convincing but not legally binding. Each use requires an hour and has a 5% chance of being detected by a courtly expert. Detection rolls are opposed by the user’s Intelligence (Investigation) check."
      }
    ],
    "levelRequirementReason": "The seal is designed for those who need to establish credibility without drawing too much attention, such as young nobles or minor diplomats.",
    "vendorReason": "Only the Pony Nobility can produce and authenticate seals of this caliber.",
    "shippingDetail": "Dispatched by Royal Couriers, the seal arrives within a week with an official dispatch.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Detection or when used on another document",
      "charges": "5 uses"
    },
    "priceReason": "The seal’s rarity and the trust it commands among nobility justify its substantial price.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-24T23:26:32.823781+00:00",
    "aiReviewedAt": "2026-07-24T23:26:32.823781+00:00",
    "aiReviewVersion": 1
  },
  "pony_nobility_invitation": {
    "id": "pony_nobility_invitation",
    "name": "Invitation to the Grand Galloping Gala",
    "description": "This shimmering gilded invitation grants you entry into the most exclusive event in Equestria. The Grand Galloping Gala, a night of opulence and prestige where nopony is left unnoticed. Dressed to impress, you will mingle with the elite, gather valuable rumors, or perhaps attempt a daring heist under the watchful eyes of the royal guards. Your presence alone can open doors to new friendships or forge alliances that could change your fate.",
    "category": "services",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "High-Society Access",
      "Opportunities and Rumors"
    ],
    "vendor": "Pony Nobility",
    "shippedBy": "Royal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "High-Society Access",
        "rules": "Upon presenting this invitation, you gain immediate entry into the Grand Galloping Gala. This effect is instantaneous and lasts until the end of the event night."
      },
      {
        "title": "Opportunities and Rumors",
        "rules": "You can attempt to gather valuable information or even orchestrate a heist during the gala, subject to the approval of the GM. This effect requires a successful Charisma (Persuasion) check with a DC of 15."
      }
    ],
    "levelRequirementReason": "This invitation is accessible to all, as it represents an opportunity for everyone to network and gather information.",
    "vendorReason": "The Pony Nobility has the connections and resources to arrange such exclusive events.",
    "shippingDetail": "Delivered with all honors, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Instantaneous upon presentation at the gala entrance.",
      "duration": "Lasts until the end of the gala night.",
      "endsWhen": "The event concludes or if lost or destroyed.",
      "charges": "Unlimited uses per invitation."
    },
    "priceReason": "Balanced at a price that reflects its rareness and importance to high society without being overly expensive.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T16:50:24.411980+00:00",
    "aiReviewedAt": "2026-07-23T16:50:24.411980+00:00",
    "aiReviewVersion": 1
  },
  "pony_nobility_mane_styling": {
    "id": "pony_nobility_mane_styling",
    "name": "Pony Nobility Mane Styling",
    "description": "The Pony Nobility Mane Styling is a magical hair accessory that enhances your charisma and charm. Your mane becomes a shimmering, sentient lock that grants you a +2 bonus to Charisma checks for one hour each day. The hair itself gives impeccable advice, but it does so in a squeaky voice, sometimes leading to unintended results. Be wary of its whimsical nature; it can be as distracting as it is helpful.",
    "category": "services",
    "price": 1000,
    "icon": "💇",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Sentient Shimmering Mane",
      "Charisma Boost"
    ],
    "vendor": "pony_nobility",
    "shippedBy": "Enchanted Brush",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sentient Shimmering Mane",
        "rules": "The mane grants a +2 bonus to Charisma checks once per day. The hair gives advice, but in a squeaky voice that can be distracting or misleading."
      },
      {
        "title": "Charisma Boost",
        "rules": "For one hour each day, the wearer's Charisma is increased by 2 on all Charisma checks and saving throws. This effect ends when it is used again."
      }
    ],
    "levelRequirementReason": "The Pony Nobility Mane Styling is accessible to beginners who want to enhance their charisma.",
    "vendorReason": "Pony Nobility Salon specializes in enhancing the beauty and charm of all equines, making them experts at creating magical hair accessories like this one.",
    "shippingDetail": "Delivered by a friendly enchanted brush that ensures your mane is perfectly styled upon arrival.",
    "usage": {
      "activation": "Standard action to activate the daily use of the mane's effects.",
      "duration": "One hour each day, recharging after one week of non-use.",
      "endsWhen": "The effect ends when used again or if the pony cuts their hair.",
      "charges": "Recharges after one week of non-use."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its daily use and charming effects without being overly powerful for a starting character.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T16:50:28.558250+00:00",
    "aiReviewedAt": "2026-07-23T16:50:28.558250+00:00",
    "aiReviewVersion": 1
  },
  "pony_nobility_pardon": {
    "id": "pony_nobility_pardon",
    "name": "Pony Nobility Pardon",
    "description": "The 'Pony Nobility Pardon' is an official writ, sealed in a waxed envelope adorned with intricate filigree and the royal crest of Equestria. This document forgives one major crime committed within Pony lands, restoring 1-rank reputation among noble circles that would otherwise have been tarnished for life. The letter takes precisely one week to process, during which time the recipient must prove their sincerity in atoning for their actions.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Forgiveness of Major Crime",
      "Restoration of Reputation"
    ],
    "vendor": "pony_royal_court",
    "shippedBy": "Sealed Wax",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Forgiveness of Major Crime",
        "rules": "When activated, this writ forgives one major crime committed within Pony lands. The effect is instantaneous and requires a successful DC 15 Charisma (Persuasion) check to ensure the recipient's sincerity in atoning for their actions."
      },
      {
        "title": "Restoration of Reputation",
        "rules": "The document restores 1-rank reputation among noble circles, but only if the recipient has already lost one rank due to the crime. This effect is permanent and does not require any further action once processed by the Pony Nobility."
      }
    ],
    "levelRequirementReason": "This item requires at least level 1 to activate as it involves dealing with noble circles.",
    "vendorReason": "The royal court is responsible for issuing such official documents and maintaining the integrity of Pony lands.",
    "shippingDetail": "Delivered via trusted couriers, ensuring it arrives within one week.",
    "usage": {
      "activation": "Requires a successful DC 15 Charisma (Persuasion) check to activate and ensure sincerity in atonement.",
      "duration": "Instantaneous upon activation.",
      "endsWhen": "Exhausted after processing by the Pony Nobility, which takes one week.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and the official nature of its creation justify this balanced XP price.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-23T16:51:10.929513+00:00",
    "aiReviewedAt": "2026-07-23T16:51:10.929513+00:00",
    "aiReviewVersion": 1
  },
  "pony_nobility_recipe_fancy_cakes": {
    "id": "pony_nobility_recipe_fancy_cakes",
    "name": "Recipe: Pony Nobility Fancy Cakes",
    "description": "The Recipe: Pony Nobility Fancy Cakes yields delicate confections so ornate and sophisticated that they almost seem too beautiful for consumption. Each cake is a meticulous display of sugar artistry, crafted by the refined hands of the noblest pâtissiers. After admiring these masterpieces for a minute, you gain +1 Charisma (as your refined palate demands it), but be wary—these cakes are so exquisite that they leave you still craving more, imposing a disadvantage on any checks if you dare voice such complaints.",
    "price": 1000,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Sugary Delicacy",
      "Refined Palate"
    ],
    "vendor": "pony_nobility",
    "shippedBy": "Enchanted Brush",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sugary Delicacy",
        "rules": "When you admire the cake for a full minute, you gain +1 Charisma until the end of your next short or long rest. This effect requires you to admire the cake before consuming it."
      },
      {
        "title": "Refined Palate",
        "rules": "If you fail to admire the cake for at least 30 seconds before eating, you suffer a disadvantage on all Charisma-based checks and saving throws until the end of your next short or long rest. You must observe it with intent admiration."
      }
    ],
    "levelRequirementReason": "A basic understanding of refined tastes is necessary to appreciate these cakes fully.",
    "vendorReason": "The Pony Nobility Patisserie is renowned for its exquisite confections, and their recipes are highly sought after by those who wish to impress with culinary artistry.",
    "shippingDetail": "Delivered through the Enchanted Brush, ensuring that each cake arrives in pristine condition, ready for admiration and consumption.",
    "usage": {
      "activation": "Admire the cake for a full minute before eating it.",
      "duration": "One hour per admire session until your next rest.",
      "endsWhen": "The effect ends with the end of your short or long rest.",
      "charges": "Unlimited, but only one admire and consume action can be performed each day."
    },
    "priceReason": "The refined craftsmanship and rare ingredients used make these cakes a valuable yet balanced addition to any player's repertoire.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T16:50:53.351821+00:00",
    "aiReviewedAt": "2026-07-23T16:50:53.351821+00:00",
    "aiReviewVersion": 1
  },
  "pony_nobility_tiara_of_friendship": {
    "id": "pony_nobility_tiara_of_friendship",
    "name": "Pony Nobility Tiara of Friendship",
    "description": "The Pony Nobility Tiara of Friendship is a delicate plastic tiara adorned with pink and purple accents, designed to charm all who see it. It whispers soft words of encouragement to those of good alignment, while its presence instills fear in evil creatures, who instinctively seek to avoid you. To properly wear it, one must perform a graceful curtsy upon greeting others; this is not merely formality but an act of respect and nobility.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Good-aligned Encouragement",
      "Evil Avoidance"
    ],
    "vendor": "pony_nobility",
    "shippedBy": "Enchanted Brush",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Good-aligned Encouragement",
        "rules": "When you interact with a good-aligned creature, they receive a +1 bonus to Charisma checks. This effect lasts until the end of your next turn."
      },
      {
        "title": "Evil Avoidance",
        "rules": "Any evil creature within 30 feet must make a DC 12 Dexterity saving throw or become frightened for 1 minute. The frightened effect ends if the creature moves more than 30 feet away from you."
      }
    ],
    "levelRequirementReason": "This tiara is suitable for beginners to use, as its effects are primarily social and situational.",
    "vendorReason": "Pony Nobility Accessories specializes in items that promote good behavior and friendship, making it the perfect vendor for this tiara.",
    "shippingDetail": "The tiara is carefully wrapped to ensure it arrives undamaged, with a special delivery ensuring its timely arrival.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous and continuous while worn",
      "endsWhen": "When the wearer removes the tiara or enters an area of chaotic alignment",
      "charges": "Unlimited"
    },
    "priceReason": "The tiara’s charm, elegance, and its positive effects on social interactions justify this balanced price.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T16:50:41.658314+00:00",
    "aiReviewedAt": "2026-07-23T16:50:41.658314+00:00",
    "aiReviewVersion": 1
  },
  "popple_mask": {
    "id": "popple_mask",
    "name": "Thief Mask",
    "description": "The Thief Mask is a green visage crafted from the bark of an ancient tree, adorned with intricate patterns that shimmer in the dimmest light. Once worn, it grants its bearer the agility and stealth of a legendary shadow thief, allowing them to move silently through crowded streets and slip past unwary guards unnoticed. NPCs greet you by name but never recognize your skill; they call you 'Rookie' despite your prowess, treating you with casual respect at best.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Advantage on Stealth Checks",
      "NPCs Call You 'Rookie'"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Stolen Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Stealth Checks",
        "rules": "While wearing the Thief Mask, you gain advantage on Dexterity (Stealth) checks. This effect lasts for a number of minutes equal to your proficiency bonus."
      },
      {
        "title": "NPCs Call You 'Rookie'",
        "rules": "Whenever you interact with NPCs while wearing the mask, they address you as 'Rookie', regardless of their usual respect towards thieves or adventurers. This effect is permanent unless removed by a spell or similar magic."
      }
    ],
    "levelRequirementReason": "The Thief Mask requires no minimum level because its effects are subtle and rely on the wearer's natural abilities.",
    "vendorReason": "The Rogue Port Black Market is known for selling items that enhance a thief’s skills, making it an appropriate vendor for the Thief Mask.",
    "shippingDetail": "The mask arrives discreetly in a sealed package from the Stolen Box, delivered via a shadow courier who leaves no trace of their visit.",
    "usage": {
      "activation": "Wearing the mask passively grants its effects; no activation is required.",
      "duration": "Permanent until removed or destroyed; advantage on Stealth checks lasts for minutes equal to your proficiency bonus.",
      "endsWhen": "The effect ends if you remove the mask, it is destroyed, or through a dispel magic spell.",
      "charges": "Unlimited"
    },
    "priceReason": "The Thief Mask provides significant stealth benefits for thieves without being overpowered, making its price fair and balanced.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T16:51:42.606863+00:00",
    "aiReviewedAt": "2026-07-23T16:51:42.606863+00:00",
    "aiReviewVersion": 1
  },
  "portable_hole_cleaning_service": {
    "id": "portable_hole_cleaning_service",
    "name": "Portable Hole Cleaning Service",
    "description": "The Portable Hole Cleaning Service is a specialized package that efficiently purges and organizes your extradimensional space. The Spatial Sanitation Union, renowned for their meticulous work in dimensional maintenance, meticulously cleans the space of all unwanted clutter, ensuring every item is accounted for or disposed of properly. This service also has a delightful side effect: it finds one random item you’ve forgotten about, adding a touch of serendipity to your adventures. Beware, however; there’s a slim chance (50%) that a cursed artifact might be unearthed and relocated into your own personal space.",
    "category": "services",
    "price": 1000,
    "icon": "🕳️",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Cleans and organizes an extradimensional space",
      "Finds one forgotten item"
    ],
    "vendor": "cleaning_service",
    "shippedBy": "Mage Hand Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Extradimensional Cleanup",
        "rules": "When activated, this service cleans and organizes the target extradimensional space. Any cursed items are moved to your bag of holding with a 50% chance. The effect is instantaneous."
      },
      {
        "title": "Lost Item Recovery",
        "rules": "The service also uncovers one item you've forgotten about, making it available for use or sale. No save DC required; the item is simply found."
      }
    ],
    "levelRequirementReason": "This basic cleaning service can be performed by any adventurer to manage their extradimensional spaces.",
    "vendorReason": "The Spatial Sanitation Union specializes in all things related to dimensional maintenance and organization.",
    "shippingDetail": "Delivered via the ethereal assistance of a mage hand, ensuring safe and timely arrival at your location.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "Instantaneous effect; ends upon completion",
      "endsWhen": "Exhausted after one use",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this service offers a fair exchange for the convenience and peace of mind it provides.",
    "priceOriginal": 8900,
    "priceReviewedAt": "2026-07-23T16:51:06.731713+00:00",
    "aiReviewedAt": "2026-07-23T16:51:06.731713+00:00",
    "aiReviewVersion": 1
  },
  "portal_key_to_nowhere": {
    "id": "portal_key_to_nowhere",
    "name": "Portal Key to Nowhere",
    "description": "The Portal Key to Nowhere is a tarnished key that glows faintly with an otherworldly light. It opens a door to a realm of pure white void, where time ceases and sound fades into silence. Inside this dimension, gravity holds no sway; the air is still, and all sense of direction vanishes. Entering this place makes you age rapidly—1 year for every hour spent within—and if you manage to escape, you must succeed on a DC 20 Wisdom saving throw or vanish forever into the void.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🚪",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Open portal",
      "Aging effect"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Void Box",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Open portal",
        "rules": "This key allows the user to open a 10-foot cube of dimensionally displaced nothingness. The area inside this void is devoid of time, sound, and gravity. Entering the void requires an action, lasts until you exit or are forced out, and ends when the key is destroyed."
      },
      {
        "title": "Aging effect",
        "rules": "Each hour spent in the void causes the user to age by 1 year. This effect cannot be resisted; it applies automatically upon entering the void. To escape without vanishing, you must succeed on a DC 20 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "This portal key requires significant magical power and control to use safely.",
    "vendorReason": "Celestial Exchange deals in forbidden and dangerous artifacts, making the Portal Key to Nowhere a fitting addition to their inventory.",
    "shippingDetail": "The delivery is made through the Void Box, ensuring the key arrives safely but with delays due to its extradimensional nature.",
    "usage": {
      "activation": "Action",
      "duration": "Until you exit or are forced out of the void, or until the key is destroyed",
      "endsWhen": "You exit the void, are forcibly removed from it, or the key is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The Portal Key to Nowhere is a godly rarity and a dangerous artifact that requires significant magical resources to produce.",
    "priceOriginal": 220000,
    "priceReviewedAt": "2026-07-23T16:51:25.859774+00:00",
    "aiReviewedAt": "2026-07-23T16:51:25.859774+00:00",
    "aiReviewVersion": 1
  },
  "potion_of_cheer": {
    "id": "potion_of_cheer",
    "name": "Potion of Cheer",
    "description": "This frothy vial of golden hue exudes a fragrant aroma that lifts even the most somber heart. When uncorked, its contents imbue the drinker with a surge of charisma and joy, making them eloquent in persuasion for an hour. Sipping this potion not only cures minor feelings of sadness or fear but also has a whimsical side-effect: it may inspire overly optimistic decisions that seem foolhardy to those observing.",
    "category": "consumables",
    "price": 1000,
    "icon": "🥤",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Charisma Boost",
      "Minor Sadness and Fear Cure"
    ],
    "vendor": "alchemist_stall",
    "shippedBy": "Swift Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When consumed, the drinker gains a +2 bonus to Charisma (Persuasion) checks for 1 hour. This effect is instantaneous upon consumption and ends when the duration expires or if the drinker takes damage."
      },
      {
        "title": "Minor Sadness and Fear Cure",
        "rules": "This potion heals minor sadness or fear effects, such as those from spells like 'Fear' or 'Sadden'. It has no effect on major conditions. Once used, it is expended immediately and cannot be reused until reacquired."
      }
    ],
    "levelRequirementReason": "This potion is designed for beginning adventurers who may encounter minor challenges but are not yet ready to face the more dire threats.",
    "vendorReason": "The alchemist stall at the market is known for its array of curative and uplifting potions that help adventurers on their journeys.",
    "shippingDetail": "The potion arrives sealed in a specially designed flask to preserve its potency during transit.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "1 hour",
      "endsWhen": "When the duration expires or if the drinker takes damage",
      "charges": "Unlimited, recharged by the alchemist at their stall"
    },
    "priceReason": "The price reflects a balance between its immediate use and limited effects, making it accessible to lower-level adventurers.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T16:51:29.316711+00:00",
    "aiReviewedAt": "2026-07-23T16:51:29.316711+00:00",
    "aiReviewVersion": 1
  },
  "potion_of_friendly_fire": {
    "id": "potion_of_friendly_fire",
    "name": "Potion of Friendly Fire",
    "description": "The Potion of Friendly Fire transforms your fiery attacks into harmless embers, sparing allies from harm. The flames dance around you with a malevolent gleam, casting an ominous light that hinders stealth. After consuming this potion, your fire-based spells and abilities do not affect friendly targets for the next hour. Additionally, allies have advantage on saving throws against your fire-related effects, ensuring their safety while you wage a controlled battle.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Friendly Fire",
      "Allied Advantage"
    ],
    "vendor": "alchemist_apprentice",
    "shippedBy": "Swift Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Friendly Fire",
        "rules": "For the duration of one hour, any fire-based spell or ability cast by the imbiber ignores allies for purposes of determining cover. This effect does not negate damage already dealt to an ally."
      },
      {
        "title": "Allied Advantage",
        "rules": "Allies within 10 feet have advantage on saving throws against the imbiber's fire-based spells and abilities until the duration ends or the potion is expended."
      }
    ],
    "levelRequirementReason": "This potion is designed for lower-level characters who need a tactical edge without requiring high proficiency in spellcasting.",
    "vendorReason": "The alchemist apprentice refines this potion to provide adventurers with tools they can trust during critical battles.",
    "shippingDetail": "Delivered within three days, ensuring you're ready for your next encounter.",
    "usage": {
      "activation": "Consume the potion as a bonus action.",
      "duration": "One hour.",
      "endsWhen": "The duration ends or the potion is expended.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This balanced price reflects the potion's utility in low-level encounters without overvaluing its tactical importance.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T16:51:34.002045+00:00",
    "aiReviewedAt": "2026-07-23T16:51:34.002045+00:00",
    "aiReviewVersion": 1
  },
  "potion_of_minor_heroism": {
    "id": "potion_of_minor_heroism",
    "name": "Potion of Minor Heroism",
    "description": "The Potion of Minor Heroism is a small, glass bottle sealed with a cork that smells faintly of mint and whiskey. When uncorked, it grants you an aura of confidence that makes your words carry more weight. You gain advantage on Charisma checks for one hour, but you also suffer disadvantage on Stealth checks, as your heroic demeanor often betrays your efforts to hide. The effects are subtle yet noticeable; you'll find yourself speaking with greater conviction and courage than usual.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 20,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Charisma Checks",
      "Disadvantage on Stealth"
    ],
    "vendor": "motivational_alchemist",
    "shippedBy": "Confident Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "You gain advantage on Charisma checks for one hour. This effect ends when the duration expires or if you take a long rest."
      },
      {
        "title": "Heroic Disguise",
        "rules": "You suffer disadvantage on Stealth checks due to your heroic appearance. This effect persists until the potion's effects end."
      }
    ],
    "levelRequirementReason": "This potion is suitable for beginners and those who need a little boost in confidence.",
    "vendorReason": "The motivational alchemist is known for boosting morale, making the Potion of Minor Heroism a staple in their inventory.",
    "shippingDetail": "Delivered with a pep talk and a free motivational bookmark.",
    "usage": {
      "activation": "Drink the potion as an action.",
      "duration": "1 hour.",
      "endsWhen": "Ends when the duration expires or you take a long rest.",
      "charges": "Unlimited."
    },
    "priceReason": "The price reflects its uncommon status and the alchemist's reputation for crafting morale-boosting potions.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-23T16:51:51.880718+00:00",
    "aiReviewedAt": "2026-07-23T16:51:51.880718+00:00",
    "aiReviewVersion": 1
  },
  "potion_of_situational_awareness": {
    "id": "potion_of_situational_awareness",
    "name": "Potion of Situational Awareness",
    "description": "The Potion of Situational Awareness grants a surge of heightened awareness, allowing you to notice the subtlest details in your environment. For an hour, you can automatically spot traps that are clearly laid and effortlessly sidestep obvious dangers. However, this focus on the tangible world comes at a cost—your attention to less apparent threats becomes clouded, forcing you to roll saving throws against illusions with a DC of 12 or lower without the benefit of advantage.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Trap Detection",
      "Illusion Vulnerability"
    ],
    "vendor": "adventurer_essentials",
    "shippedBy": "Standard Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Trap Detection",
        "rules": "You gain advantage on Perception checks when detecting traps that are clearly visible. This effect lasts for 1 hour, after which you must make a DC 12 Wisdom saving throw to avoid falling into an obvious trap."
      },
      {
        "title": "Illusion Vulnerability",
        "rules": "For the duration of the potion's effect, you have disadvantage on saving throws against illusions that rely on subtle deception. If you fail this save, you are temporarily disoriented for 1d4 rounds and cannot take actions or reactions."
      }
    ],
    "levelRequirementReason": "This potion is designed to be accessible early in a character's journey to help them navigate the world with greater ease.",
    "vendorReason": "Adventurer Essentials specializes in practical gear that can make or break an adventurer's day, and this potion exemplifies their philosophy of situational utility.",
    "shippingDetail": "Delivered within a week with Standard Post; ensure it is kept refrigerated during transit to maintain potency.",
    "usage": {
      "activation": "Drink the potion as an action, gaining its effects immediately and lasting for 1 hour.",
      "duration": "1 hour",
      "endsWhen": "The effect expires after the stated duration or if you drink another potion of situational awareness within that time frame.",
      "charges": "Unlimited; no need to rest between uses."
    },
    "priceReason": "This price reflects its value as a versatile tool for adventurers, balancing its immediate utility with the risk it introduces.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T16:52:05.471050+00:00",
    "aiReviewedAt": "2026-07-23T16:52:05.471050+00:00",
    "aiReviewVersion": 1
  },
  "potions_on_a_stick": {
    "id": "potions_on_a_stick",
    "name": "Recipe: Mages' Guild Potion Popsicles",
    "description": "Crafted at the Mages' Guild Dessert Bar, these potions on a stick are confections of arcane essence and sugary delight. Each popsicle is a container for potent elixirs that can be consumed instantly or frozen into a delicious treat. When consumed in their liquid form, they deliver a burst of magical energy; when frozen, the effect is delayed by one round but comes with a risk of brain freeze upon consumption.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Potion Popsicle",
      "Delayed Effect"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Potion Popsicle",
        "rules": "When consumed, the potion popsicle melts and delivers its magical effects immediately. If frozen, it delays the effect by one round but increases the risk of disadvantage on Intelligence checks for 1 minute thereafter."
      },
      {
        "title": "Delayed Effect",
        "rules": "The delayed effect activates when the popsicle is thawed or consumed in its frozen state. The user must make a saving throw against the potion's effects with a DC equal to 8 + the caster's spell save DC. Failure grants disadvantage on Intelligence checks for 1 minute."
      }
    ],
    "levelRequirementReason": "The process of crafting and consuming these potions requires basic magical knowledge suitable for first-level casters.",
    "vendorReason": "The Mages' Guild Dessert Bar specializes in combining magic with confectionary art, offering a unique blend of culinary and arcane delights.",
    "shippingDetail": "Shipped via Arcane Relay, these popsicles are delivered with care to ensure their magical properties remain intact.",
    "usage": {
      "activation": "Consumed as an action or kept frozen until activated by thawing.",
      "duration": "Instantaneous when consumed; delayed effect lasts one round.",
      "endsWhen": "The effect ends upon consumption or freezing, depending on the user's choice.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, these popsicles offer a unique and potent combination of flavor and magic without disrupting game balance.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-23T16:52:14.816170+00:00",
    "aiReviewedAt": "2026-07-23T16:52:14.816170+00:00",
    "aiReviewVersion": 1
  },
  "power_rush_badge": {
    "id": "power_rush_badge",
    "name": "Power Rush Badge",
    "description": "The Power Rush Badge is a crimson medallion that pulses with an almost tangible urgency, its energy crackling in sync with your heartbeat. Under the stress of combat, it amplifies your resilience and ferocity: when you drop below half your hit points, you gain +1d6 to all damage rolls; if you fall further into peril, beneath a quarter of your HP, this bonus increases to +2d6. The badge is known for its unpredictable nature, enhancing performance but occasionally causing reckless decisions.",
    "category": "equipment",
    "price": 1000,
    "icon": "💢",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1d6 to damage rolls at half HP",
      "+2d6 to damage rolls below quarter HP"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Secure Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Desperate Performance (Half HP)",
        "rules": "While you have 50% or fewer of your hit points, gain +1d6 to all damage rolls. This effect lasts until the start of your next turn."
      },
      {
        "title": "Fury at Quarter HP",
        "rules": "When you drop below quarter of your maximum hit points, this bonus increases to +2d6 for 1 minute. Ends if you regain half or more of your hit points or finish a short rest."
      }
    ],
    "levelRequirementReason": "Requires attunement by characters who are accustomed to combat stress.",
    "vendorReason": "The Gilded Gryphon is known for its selection of rare and powerful relics, including the Power Rush Badge.",
    "shippingDetail": "Ships via Secure Courier with next-day delivery to fortified locations.",
    "usage": {
      "activation": "Passive effect; activates on dropping below half or quarter HP.",
      "duration": "Instantaneous at half HP, lasts for 1 minute at quarter HP.",
      "endsWhen": "Ends if you regain half or more of your hit points or finish a short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as an uncommon item, priced to reflect its attunement and combat utility.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T16:52:05.299209+00:00",
    "aiReviewedAt": "2026-07-23T16:52:05.299209+00:00",
    "aiReviewVersion": 1
  }
};
