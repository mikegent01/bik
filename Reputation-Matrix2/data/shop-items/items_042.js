// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_042 = {
  "stellar_navigator_ai": {
    "id": "stellar_navigator_ai",
    "name": "Stellar Navigator AI (Ship Module)",
    "description": "The Stellar Navigator AI, a sleek, glowing console embedded in your ship's bridge, is AstroTech’s pinnacle of hyperspace navigation. Its crystalline core glows with a soft blue light as it calculates optimal routes through the cosmos, ensuring you avoid hazards and arrive at your destination with precision. This advanced AI can predict stellar anomalies up to 100 parsecs ahead, allowing for swift evasive maneuvers if necessary. With its assistance, travel time is reduced by 40%, making each journey a triumph of efficiency and safety.",
    "price": 1800000,
    "icon": "🧠",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Optimized Hyperspace Travel",
      "Stellar Hazard Prediction"
    ],
    "vendor": "space_dock",
    "shippedBy": "Orbital Shuttle",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Optimized Hyperspace Travel",
        "rules": "Activates as a bonus action. Reduces travel time by 40% for the next hyperspace jump, making it easier to navigate through complex stellar systems and arrive at your destination faster. This effect ends when you exit hyperspace or if the AI is disabled."
      },
      {
        "title": "Stellar Hazard Prediction",
        "rules": "Passive effect. The Stellar Navigator AI predicts potential hazards up to 100 parsecs ahead, providing a +4 bonus to saving throws against environmental hazards and a +2 bonus to Navigation checks in hazardous areas. This effect persists until you manually deactivate it or if the AI is disabled."
      }
    ],
    "levelRequirementReason": "This advanced AI requires significant computational power, which is only available at level 16.",
    "vendorReason": "Space Dock specializes in high-tech ship modules and can provide the necessary support for such an advanced AI system.",
    "shippingDetail": "Ships via Orbital Shuttle, ensuring secure and rapid delivery to your starport.",
    "usage": {
      "activation": "Bonus action to activate or de-activate.",
      "duration": "Instantaneous for travel time reduction; passive effect lasts until manually deactivated or AI is disabled.",
      "endsWhen": "Manual deactivation or AI disablement.",
      "charges": "Unlimited, but requires regular maintenance."
    },
    "priceReason": "Reflects the cutting-edge technology and ongoing support required for such an advanced system.",
    "priceOriginal": 520000,
    "priceReviewedAt": "2026-07-24T23:38:58.729421+00:00",
    "aiReviewedAt": "2026-07-24T23:38:58.729421+00:00",
    "aiReviewVersion": 1
  },
  "stellar_nova_bomb": {
    "id": "stellar_nova_bomb",
    "name": "Stellar Nova Bomb (Explosive)",
    "description": "The Stellar Nova Bomb, a device forged from ancient stardust and bound by the will of Star Destroyers, mimics the cataclysmic explosion of a nova. When unleashed, it unleashes a searing wave of radiant energy that incinerates all within its path, leaving nothing but a glowing ember in its wake. This one-time use weapon is as volatile as the stars themselves and must be handled with utmost care by those who dare wield it.",
    "price": 560000,
    "icon": "💥",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Radiant Annihilation",
      "One-Time Use"
    ],
    "vendor": "nova_lab",
    "shippedBy": "Containment Field",
    "levelRequirement": 19,
    "effectDetails": [
      {
        "title": "Radiant Annihilation",
        "rules": "When activated, the Stellar Nova Bomb unleashes a 100-foot radius of searing radiant energy. All creatures within this area must make a DC 25 Dexterity saving throw or take 20d10 radiant damage and be blinded until the start of their next turn."
      },
      {
        "title": "One-Time Use",
        "rules": "The bomb can only be used once before it is destroyed. Once activated, it cannot be recharged or reused."
      }
    ],
    "levelRequirementReason": "Only those of exceptional power and skill are capable of wielding the Stellar Nova Bomb without risk to themselves.",
    "vendorReason": "Nova Lab specializes in exotic weapons and devices that push the boundaries of known technology, making it a fitting vendor for such an item.",
    "shippingDetail": "Due to its volatile nature, the Stellar Nova Bomb must be shipped using Containment Field's specialized delivery service, which ensures safe transport.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Expended after use or destroyed if not used within one week of activation.",
      "charges": "One-time use"
    },
    "priceReason": "The Stellar Nova Bomb is priced at 1000 XP, reflecting its immense power and the complexity of its construction.",
    "priceOriginal": 960000,
    "priceReviewedAt": "2026-07-23T18:45:24.811337+00:00",
    "aiReviewedAt": "2026-07-23T18:45:24.811337+00:00",
    "aiReviewVersion": 1
  },
  "stellar_shield_generator": {
    "id": "stellar_shield_generator",
    "name": "Stellar Shield Generator (Defense)",
    "description": "The Stellar Shield Generator hums softly, its core a polished prism of starlight. This device projects an impenetrable force field that draws power from celestial energy, shimmering with hues of twilight and dawn. Crafted by the Solar Defenders, it can absorb up to 200 points of damage before requiring sunlight for recharging. The shield is as much a symbol of hope as it is an instrument of defense, its glow never dimming even in the darkest skies.",
    "price": 1800000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Absorbs Damage",
      "Recharges with Sunlight"
    ],
    "vendor": "star_base",
    "shippedBy": "Photon Beam Courier Service",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Absorbs Damage",
        "rules": "When activated, the Stellar Shield Generator absorbs up to 200 points of damage. The shield can only absorb this amount once before requiring sunlight for recharging. If the shield is destroyed or otherwise disabled while active, it immediately discharges all absorbed damage."
      },
      {
        "title": "Recharges with Sunlight",
        "rules": "The generator must be exposed to direct sunlight for at least 10 minutes to recharge and restore its full power. During this time, the shield remains operational but cannot absorb any additional damage. If interrupted by darkness or cover, recharging is delayed until conditions are favorable."
      }
    ],
    "levelRequirementReason": "The Stellar Shield Generator requires a high level to wield effectively, as it demands both physical and magical prowess.",
    "vendorReason": "Solar Defenders maintain this item exclusively, providing it directly from their Solar Forge headquarters.",
    "shippingDetail": "Ships via the Photon Beam courier service, ensuring swift delivery across the cosmos. Awaiting sunlight for recharging upon arrival.",
    "usage": {
      "activation": "A bonus action to activate and deploy the shield, which remains active until destroyed or disabled.",
      "duration": "Instantaneous damage absorption; shield remains operational while sunlight is available.",
      "endsWhen": "Shield destruction, darkness covering it, or recharging in sunlight.",
      "charges": "Unlimited uses, but requires 10 minutes of sunlight to recharge."
    },
    "priceReason": "Crafted by Solar Defenders and requiring significant resources for both material and magical components, the Stellar Shield Generator is priced accordingly.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-23T18:45:13.869604+00:00",
    "aiReviewedAt": "2026-07-23T18:45:13.869604+00:00",
    "aiReviewVersion": 1
  },
  "stickers_star": {
    "id": "stickers_star",
    "name": "Book of Stickers",
    "description": "The Book of Stickers is a bound collection of shimmering, iridescent stickers that seem to pulse with the energy of forgotten childhoods. Each page contains a dozen stickers, each one a unique masterpiece crafted from the remnants of ancient starlight and enchanted by the whimsical hands of fae artisans. Adorning your belongings or journal with these stickers not only brightens their appearance but also grants you a fleeting sense of wonder and nostalgia that lingers for hours.",
    "category": "curiosities",
    "price": 67,
    "icon": "⭐",
    "stock": 200,
    "rarity": "common",
    "effects": [
      "Sticker Adornment",
      "Childhood Nostalgia"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sticker Adornment",
        "rules": "By spending an action, you can adhere one sticker from the book to any non-magical object or surface. This effect lasts until the object is damaged beyond repair. The sticker cannot be removed without destroying it."
      },
      {
        "title": "Childhood Nostalgia",
        "rules": "Upon viewing a sticker, you gain advantage on Wisdom (Insight) checks to recall childhood memories for 1 hour. This effect does not require an action and can be used once per day."
      }
    ],
    "levelRequirementReason": "The Book of Stickers appeals to the child within everyone, making it accessible to all levels.",
    "vendorReason": "Toad Town Market is known for its eclectic selection of unique and magical curiosities that appeal to all ages.",
    "shippingDetail": "Delivered within a week, with the courier ensuring safe delivery even in the most unpredictable weather conditions.",
    "usage": {
      "activation": "Action or Reaction (to apply a sticker)",
      "duration": "Instantaneous for applying stickers; lasts until object is damaged beyond repair",
      "endsWhen": "The effect ends when the sticker is destroyed, damaged beyond recognition, or the duration expires",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects the unique craftsmanship and enchantment required to create these magical stickers.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T18:45:27.156854+00:00",
    "aiReviewedAt": "2026-07-23T18:45:27.156854+00:00",
    "aiReviewVersion": 1
  },
  "sticky_oil": {
    "id": "sticky_oil",
    "name": "Flask of Sticky Oil",
    "description": "The Flask of Sticky Oil is a small, leather-bound container filled to the brim with a viscous, amber liquid that clings to surfaces like molten honey. When opened, the oil spreads across the floor in an expansive 10-foot square pool, making it nearly impossible for anyone to walk through without slipping and sliding. The oil's surface is thick enough to trap foes, causing them to fall and struggle against its sticky embrace.",
    "category": "consumables",
    "price": 67,
    "icon": "🍯",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Creates difficult terrain",
      "Restrains creatures on contact"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Jar the Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Difficult Terrain",
        "rules": "The area covered by the oil becomes difficult terrain. Any creature that enters this area must make a Dexterity saving throw (DC 14). On a failed save, they are restrained until the end of their next turn."
      },
      {
        "title": "Restrained on Contact",
        "rules": "Any creature that starts its turn within 5 feet of the oil or enters the oil for the first time must make a Dexterity saving throw (DC 14). On a failed save, they are restrained until the end of their next turn. This effect can only occur once per target."
      }
    ],
    "levelRequirementReason": "This item is common and easily accessible to first-level adventurers.",
    "vendorReason": "The Rogueport Black Market caters to all manner of miscreants, providing them with the tools they need for their schemes.",
    "shippingDetail": "Ships via Jar's unreliable but fast service; arrives within a week.",
    "usage": {
      "activation": "Instantaneous when opened and poured onto the ground.",
      "duration": "Until the end of the next long rest or until the oil is cleaned up.",
      "endsWhen": "The flask is emptied, or the area is thoroughly cleaned.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects the item's common rarity and moderate utility in combat.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T18:46:21.117756+00:00",
    "aiReviewedAt": "2026-07-23T18:46:21.117756+00:00",
    "aiReviewVersion": 1
  },
  "stop_watch": {
    "id": "stop_watch",
    "name": "Stop Watch",
    "description": "The Stop Watch is a delicate, silver timepiece encrusted with glistening sapphires and emeralds. It radiates an eerie blue glow when activated, temporarily halting the flow of time within its radius. Within this frozen moment, all enemies caught in the 30-foot radius must succeed on a Wisdom saving throw or be paralyzed for one round. The second effect is that any creature who holds the Stop Watch feels a surge of temporal energy, granting them temporary hit points equal to your level + your Intelligence modifier when you activate it.",
    "category": "consumables",
    "price": 2400,
    "icon": "⏱️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Paralysis",
      "Hit Point Boost"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Paralysis",
        "rules": "When activated, all enemies within a 30-foot radius must succeed on a Wisdom saving throw (DC 14) or be paralyzed for one round. This effect has no save after the first activation per long rest."
      },
      {
        "title": "Hit Point Boost",
        "rules": "Upon activation, you gain temporary hit points equal to your level + your Intelligence modifier. These hit points last until they are reduced to 0 or you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for lower-level adventurers who could benefit from its time-stopping capabilities without overwhelming them with power.",
    "vendorReason": "The Toad Town Market specializes in curiosities and magical trinkets, making the Stop Watch a fitting addition to their inventory.",
    "shippingDetail": "Ships via Swift Courier for expedited delivery within one game day.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; lasts until the end of your next turn or until you take a bonus action to deactivate it.",
      "endsWhen": "The effect ends when you take a bonus action to deactivate it, or if an enemy successfully saves against the paralysis.",
      "charges": "Unlimited"
    },
    "priceReason": "The Stop Watch provides significant tactical advantages at a cost that reflects its magical properties and utility.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-23T18:46:16.835792+00:00",
    "aiReviewedAt": "2026-07-23T18:46:16.835792+00:00",
    "aiReviewVersion": 1
  },
  "storm_giants_thunderdrum": {
    "id": "storm_giants_thunderdrum",
    "name": "Storm Giant's Thunderdrum",
    "description": "The Storm Giant's Thunderdrum is a colossal war drum crafted from the petrified skull of a cloud giant, its surface etched with arcane symbols that pulse with raw thunder. When struck, it releases a concussive wave capable of shattering stone and sending tremors through the earth itself. Warriors within earshot gain not only immunity to thunder damage but also enhanced reflexes, allowing them to dodge attacks more easily for an hour.",
    "price": 120000,
    "icon": "🥁",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Earthquake",
      "Thunder Immunity & Reflex Boost"
    ],
    "vendor": "giant_emporium",
    "shippedBy": "Giant Eagle Courier Service",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Earthquake",
        "rules": "When the drum is struck as a bonus action within 100 feet, all creatures in a 30-foot radius must succeed on a DC 18 Dexterity saving throw or be knocked prone. This effect lasts for 1 minute and can only be used once per long rest."
      },
      {
        "title": "Thunder Immunity & Reflex Boost",
        "rules": "Allies within 100 feet gain immunity to thunder damage for 1 hour and a +2 bonus to Dexterity saving throws against being knocked prone. This benefit lasts until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "The drum's power requires immense strength and discipline, suitable only for seasoned Storm Giants or those who have trained under them.",
    "vendorReason": "Only the Giant Emporium would stock such a relic, as it deals exclusively in items crafted by titanic beings.",
    "shippingDetail": "Ships via the Giant Eagle's swift flight, arriving within days rather than weeks.",
    "usage": {
      "activation": "Struck as a bonus action.",
      "duration": "Earthquake effect lasts for 1 minute; thunder immunity and reflex boost last until the end of their next long rest.",
      "endsWhen": "The effects expire naturally or when the drum is no longer used in combat.",
      "charges": "Unlimited, recharging after a long rest."
    },
    "priceReason": "This legendary artifact commands an exorbitant price due to its unique crafting materials and the immense power it wields.",
    "priceOriginal": 575000,
    "priceReviewedAt": "2026-07-23T18:46:24.160491+00:00",
    "aiReviewedAt": "2026-07-23T18:46:24.160491+00:00",
    "aiReviewVersion": 1
  },
  "storm_in_a_bottle": {
    "id": "storm_in_a_bottle",
    "name": "Storm in a Bottle",
    "description": "This exquisite bottle holds a miniature hurricane, its glass walls trembling under the unrelenting wind and lightning. Crafted by the Stormweaver Guild, this relic once belonged to Queen Pauline of the Sea Breezes, a legendary storm mage. Each time it shatters, a tempest rages out for 10 minutes within a 50-foot radius, unleashing 4d10 lightning damage and 3d10 thunder damage along with a gale force wind that scours the land. The hurricane diminishes in power each use until it can no longer reform.",
    "category": "premium",
    "price": 39000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Unleash Storm",
      "Storm Weakens"
    ],
    "vendor": "storm_seller",
    "shippedBy": "The Ironclad Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Unleash Storm",
        "rules": "When activated, this bottle shatters, unleashing a tempest within a 50-foot radius. The storm deals 4d10 lightning damage and 3d10 thunder damage to all creatures in the area, and wind speeds of 60 feet. The effect lasts for 10 minutes."
      },
      {
        "title": "Storm Weakens",
        "rules": "Each use weakens the storm within the bottle. After three uses, the next activation does not reform the storm, rendering it ineffective until the bottle is reforged by a Stormweaver Guildmaster at their sanctuary, which takes one week."
      }
    ],
    "levelRequirementReason": "This relic requires a minimum level of 5 to control and channel its volatile power.",
    "vendorReason": "Storm Sells, the renowned vendor for all things storm-related, carries this artifact due to her family's long-standing ties with the Stormweaver Guild.",
    "shippingDetail": "Shipped via the Ironclad Courier, known for its punctuality and reliability, ensuring that the bottle arrives in pristine condition.",
    "usage": {
      "activation": "Reaction (requires no action on your turn)",
      "duration": "Instantaneous effect lasting 10 minutes",
      "endsWhen": "The storm dissipates after 10 minutes or if the bottle is destroyed",
      "charges": "3 charges, recharged by a Stormweaver Guildmaster in one week"
    },
    "priceReason": "This item's price reflects its rarity and the specialized craftsmanship required to both create and maintain it.",
    "priceOriginal": 280000,
    "priceReviewedAt": "2026-07-23T18:46:15.622038+00:00",
    "aiReviewedAt": "2026-07-23T18:46:15.622038+00:00",
    "aiReviewVersion": 1
  },
  "strange_sack": {
    "id": "strange_sack",
    "name": "Strange Sack",
    "description": "The Strange Sack appears as a modest, leather-bound pouch adorned with ancient runes that glimmer faintly under moonlight. It is said to have been crafted by an enigmatic scholar who sought to challenge the mundane limitations of everyday life. This wonderous sack is not merely a vessel for storage; it doubles your carrying capacity for consumables and allows you to effortlessly transport them, as if they were feather-light. The runes etched into its surface hum softly when in use, ensuring that even the heaviest potions or rations feel like mere trinkets.",
    "category": "curiosities",
    "price": 2400,
    "icon": "🎒",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Doubles Carrying Capacity",
      "Eases Transport of Consumables"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Dimensional Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Doubles Carrying Capacity",
        "rules": "When this sack is in your possession, it doubles the weight limit for consumable items you are carrying. This effect is passive and does not require an action to activate."
      },
      {
        "title": "Eases Transport of Consumables",
        "rules": "You can move with a burdened load as if it were half its actual weight when using this sack to carry consumables. This effect lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners and those who value ease in their adventuring, rather than requiring a high level of expertise.",
    "vendorReason": "The Shamans' Hut often stocks curiosities that enhance the daily lives of adventurers, making this pouch a natural addition to their inventory.",
    "shippingDetail": "Ships directly from the fabric of reality; no delays or extra charges apply for deliveries via Dimensional Mail.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of your next short or long rest.",
      "endsWhen": "Rest ends.",
      "charges": "Unlimited"
    },
    "priceReason": "The Strange Sack offers significant utility without imposing a heavy burden on adventurers, making it a fair value for its benefits.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T18:46:58.628173+00:00",
    "aiReviewedAt": "2026-07-23T18:46:58.628173+00:00",
    "aiReviewVersion": 1
  },
  "styx_river_ferry_pass": {
    "id": "styx_river_ferry_pass",
    "name": "Styx River Ferry Pass (Annual)",
    "description": "The Styx River Ferry Pass (Annual) is a leather-bound, embossed token that opens doors to Charon’s ferry, navigating through any layer of the Nine Hells without cost or delay. Crafted with dark iron and etched with the river’s ancient runes, it grants immunity to the haunting memory loss caused by crossing the Styx. This pass ensures safe passage for an entire year, allowing travelers to traverse the infernal depths as many times as they wish.",
    "price": 39000,
    "icon": "⛴️",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Unlimited ferry rides through any layer of the Nine Hells",
      "Immunity to Styx-induced memory loss"
    ],
    "vendor": "hells_ticketing",
    "shippedBy": "Phantom Boat",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Infinite Ferry Rides",
        "rules": "This item provides unlimited ferry rides on Charon's boat between any layers of the Nine Hells. It is activated by simply presenting it to Charon or his assistants."
      },
      {
        "title": "Styx Memory Immunity",
        "rules": "The holder gains immunity to memory loss caused by crossing the Styx, ensuring that their mind remains unscathed after each passage."
      }
    ],
    "levelRequirementReason": "This pass requires a high level of experience and understanding of the infernal realms to safely use.",
    "vendorReason": "Hells Ticketing is Charon's official vendor, ensuring safe passage through his ferry service.",
    "shippingDetail": "The pass is delivered by the Phantom Boat itself, ensuring it reaches its destination unseen and unaltered.",
    "usage": {
      "activation": "Passive effect; activation occurs upon presenting the token to Charon or his assistants.",
      "duration": "Instantaneous for each use",
      "endsWhen": "Exhausted after one year of continuous use",
      "charges": "Unlimited, but only usable once per day"
    },
    "priceReason": "The pass is priced at a fair value considering its powerful and unique abilities.",
    "priceOriginal": 395000,
    "priceReviewedAt": "2026-07-23T18:47:12.018890+00:00",
    "aiReviewedAt": "2026-07-23T18:47:12.018890+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_anti_magic_tent": {
    "id": "sultanates_araby_anti_magic_tent",
    "name": "Sultanates Anti-Magic Tent",
    "description": "The Sultanates Anti-Magic Tent, a ceremonial tent woven from enchanted silk and imbued with runes of ancient lore, is a relic of the Sultanates Araby's arcane mastery. Within its confines, sleepers are utterly immune to magical slumber, scrying, and mental attacks, while all active spell effects within a 20-foot radius are nullified. This tent is not merely a physical shelter but a symbol of power and protection against magic.",
    "price": 40000,
    "icon": "⛺",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Magical Nullification",
      "Sleep Immunity"
    ],
    "vendor": "desert_trader_guild",
    "shippedBy": "Wrapped Tent",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magical Nullification",
        "rules": "All active spell effects within the tent are nullified, creating an anti-magic field. This effect lasts for a number of hours equal to your proficiency bonus (minimum 1 hour). The tent's enchantment ends if it is destroyed or if someone casts a dispel magic spell on it with a successful DC 20 concentration save."
      },
      {
        "title": "Sleep Immunity",
        "rules": "Anyone sleeping within the tent is immune to magical sleep, scrying, and mental attack spells. This immunity lasts until the sleeper awakens or leaves the tent's confines. There is no saving throw against this effect; it simply prevents any such attacks from affecting them."
      }
    ],
    "levelRequirementReason": "The tent's enchantments are powerful, requiring a lower-level character to wield it effectively.",
    "vendorReason": "The Desert Trader Guild is known for its extensive trade routes and connections with the Sultanates, allowing them to offer this rare artifact.",
    "shippingDetail": "Ships via the fastest courier service available, ensuring swift delivery of this delicate artifact.",
    "usage": {
      "activation": "The tent is activated by setting it up as a shelter. It does not require an action to activate once set.",
      "duration": "Instantaneous effect; lasts for hours until dispelled or destroyed.",
      "endsWhen": "Destroyed, dispel magic spell cast successfully within the tent, or if the sleeper leaves the tent.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The tent's rarity and powerful enchantments justify its relatively affordable price of 1000 XP.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T18:46:50.294544+00:00",
    "aiReviewedAt": "2026-07-23T18:46:50.294544+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_bodyguard_legion": {
    "id": "sultanates_araby_bodyguard_legion",
    "name": "Sultanates Bodyguard Legion (50 Elite)",
    "description": "Crafted by the Sultanates Araby, this item summons a legion of fifty elite guards sworn to protect you. Each guard is a desert warrior with enchanted armor and weapons forged in the heart of the Arabian deserts. They are immune to exhaustion from relentless sandstorms and can endure extreme heat without fatigue. These guards fight as if they had 1 month of dedicated training, ensuring your safety against all threats.",
    "price": 40000,
    "icon": "🛡️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "50 Elite Desert Guards",
      "Immunity to Exhaustion"
    ],
    "vendor": "desert_trader_guild",
    "shippedBy": "Military Convoy",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Guard Deployment",
        "rules": "Activate on a short rest. The guards immediately arrive at your location and provide protection for the duration of one month."
      },
      {
        "title": "Exhaustion Immunity",
        "rules": "The guards are immune to any condition that would cause them exhaustion, including extreme heat and continuous combat."
      }
    ],
    "levelRequirementReason": "This item requires a low-level character due to its vast magical power and the complexity of summoning such an elite force.",
    "vendorReason": "The Desert Trader Guild has exclusive access to these elite guards through their extensive trade networks with the Sultanates Araby.",
    "shippingDetail": "The convoy takes a week to deliver the guards, ensuring they are rested and ready for deployment upon arrival.",
    "usage": {
      "activation": "Short rest",
      "duration": "1 month",
      "endsWhen": "Ends when the duration expires or you dismiss the guards with another short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The cost is balanced to reflect the rarity and power of summoning elite desert warriors for a month.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-24T23:38:40.788977+00:00",
    "aiReviewedAt": "2026-07-24T23:38:40.788977+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_camel_rental": {
    "id": "sultanates_araby_camel_rental",
    "name": "Sultanates Araby Magic Camel Rental",
    "description": "The Sultanates Araby Magic Camel Rental is a steed forged from the sands of ancient Arabia, its hump glowing faintly under the desert moonlight. It can carry your entire encampment for miles without rest and sprints at breakneck speed, leaving a trail of dust in its wake. Its telepathic complaints are as legendary as its endurance; you must learn to ignore them if you wish to traverse the treacherous dunes with ease.",
    "category": "premium",
    "price": 470,
    "icon": "🐪",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Endless Endurance",
      "Telepathic Complaints"
    ],
    "vendor": "sultanates_araby",
    "shippedBy": "Camel Caravan",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Endless Endurance",
        "rules": "The camel can carry up to 500 lbs indefinitely and sprint for 1 hour once per day. This effect ends if the camel is forced to rest or if it sustains damage in combat."
      },
      {
        "title": "Telepathic Complaints",
        "rules": "The camel constantly complains telepathically, reducing your party's movement speed by -2 feet until you convince it otherwise (DC 15). This effect ends when the camel is satisfied or if its daily complaints are exhausted."
      }
    ],
    "levelRequirementReason": "Able to handle the camel's unique properties and manage its constant chatter.",
    "vendorReason": "The Sultanates Araby Stables are renowned for their magical camels, which they have been breeding and training for centuries.",
    "shippingDetail": "Delivered by a fleet of enchanted camels that ensure safe transport across the desert.",
    "usage": {
      "activation": "Instantaneous activation; once per day to sprint.",
      "duration": "1 hour daily sprint, indefinite endurance otherwise.",
      "endsWhen": "Resting or combat damage, complaints satisfied, or daily sprint used.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering the camel's unique abilities and the rarity of magical mounts.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-23T18:47:17.977494+00:00",
    "aiReviewedAt": "2026-07-23T18:47:17.977494+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_desert_fortress": {
    "id": "sultanates_araby_desert_fortress",
    "name": "Sultanates of Araby Desert Fortress Deed",
    "description": "This ancient deed grants ownership of a hidden, magically warded fortress nestled deep within the shifting sands of the Sultanates' Desert. The fortress is constructed from sandstone and iron forged by the Sultanates Araby's greatest artisans. Its walls are lined with wards that prevent teleportation in or out, ensuring only those who earn the right may enter. As a permanent base of operations, it serves as both refuge and command center for your expeditions into this treacherous land.",
    "price": 40000,
    "icon": "🕌",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Prevents Teleportation",
      "Permanent Base"
    ],
    "vendor": "desert_trader_guild",
    "shippedBy": "Official Deed Courier",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Teleportation Ward",
        "rules": "The fortress is imbued with wards that prevent any form of teleportation within or beyond its walls. This effect lasts indefinitely and cannot be dispelled, but it can be negated by a successful DC 17 Force Spell save."
      },
      {
        "title": "Permanent Base",
        "rules": "This deed grants you permanent ownership of the fortress, allowing for indefinite occupation as long as you maintain your standing with the Sultanates Araby. It serves as an instant command center and base camp, providing a defensible position worth 100 XP."
      }
    ],
    "levelRequirementReason": "The complexity of the wards and the strategic importance of the fortress necessitate at least Expert (Level 12) proficiency.",
    "vendorReason": "The Desert Trader Guild has exclusive trade rights with the Sultanates Araby, allowing them to sell this prestigious deed.",
    "shippingDetail": "Ships via the Official Deed Courier, ensuring safe and swift delivery within one week of purchase.",
    "usage": {
      "activation": "Instantaneous upon claiming ownership",
      "duration": "Indefinite until lost or destroyed",
      "endsWhen": "Ownership is forfeited to another party or the fortress is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "This deed represents a strategic asset, providing indefinite use and value far exceeding its listed price.",
    "priceOriginal": 320000,
    "priceReviewedAt": "2026-07-23T18:47:41.424842+00:00",
    "aiReviewedAt": "2026-07-23T18:47:41.424842+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_desert_war_beast": {
    "id": "sultanates_araby_desert_war_beast",
    "name": "Sultanates of Araby War-Scorpion Mount",
    "description": "The Sultanates of Araby War-Scorpion Mount is a colossal, magically controlled desert scorpion, forged from the sands and spines of its homeland. Its armored carapace gleams with a fiery hue, and it can traverse arid landscapes with ease, leaving no trace behind. This mount's tail sting is lethally potent, delivering a venomous laceration that deals 3d6 + 3d6 poison damage to foes within striking distance (DC 17 CON save).",
    "price": 40000,
    "icon": "🦂",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Desert Tactician",
      "Venomous Tail"
    ],
    "vendor": "desert_trader_guild",
    "shippedBy": "Caravan of the Sands",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Desert Tactician",
        "rules": "The mount provides its rider with battlefield awareness, granting them advantage on Perception checks made within a 60-foot radius. This effect lasts until the mount is dismissed or incapacitated."
      },
      {
        "title": "Venomous Tail",
        "rules": "As an action, the mount can deliver a stinging attack against one target within its reach. The attack deals 3d6 + 3d6 poison damage and requires the target to make a DC 17 Constitution saving throw or be poisoned for 1 minute."
      }
    ],
    "levelRequirementReason": "Only those of considerable experience can command such a fearsome mount, requiring at least 15th level.",
    "vendorReason": "The Desert Trader Guild specializes in exotic mounts and desert-adapted beasts, making this mount an essential offering for their clientele.",
    "shippingDetail": "Ships via a specially equipped caravan that can traverse harsh desert environments with ease, arriving within two weeks from purchase.",
    "usage": {
      "activation": "The mount is activated by willing concentration and dismissed as an action.",
      "duration": "Active until dismissed or incapacitated.",
      "endsWhen": "The mount is dismissed or incapacitated.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure this powerful mount remains a valuable yet achievable asset for mid-level adventurers.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-23T18:47:43.293935+00:00",
    "aiReviewedAt": "2026-07-23T18:47:43.293935+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_desert_weather_control": {
    "id": "sultanates_araby_desert_weather_control",
    "name": "Sultanates of Araby Permanent Oasis Generator",
    "description": "The Sultanates of Araby's Permanent Oasis Generator is a gleaming brass contraption crowned with a water-dripping crown. It draws from the desert's own humidity to sustain an oasis that never wanes, its verdant expanse stretching for miles without end. Within this oasis, all who rest are instantly healed of natural exhaustion. This device, forged in the Sultanates' ancient forges, is a symbol of their mastery over nature itself.",
    "price": 570000,
    "icon": "⛲",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Oasis Oasis",
      "Exhaustion Healer"
    ],
    "vendor": "desert_trader_guild",
    "shippedBy": "Grand Ceremony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Oasis Oasis",
        "rules": "This device creates and maintains one permanent, self-sustaining oasis within a square mile. The area is lush with verdant life, providing an unending source of fresh water."
      },
      {
        "title": "Exhaustion Healer",
        "rules": "Within the 100-foot radius of the device, all creatures instantly heal from natural exhaustion upon resting in this oasis."
      }
    ],
    "levelRequirementReason": "This item is accessible to all adventurers, as it can be a life-saving resource for any party.",
    "vendorReason": "The Desert Trader Guild has long traded with the Sultanates of Araby and recognizes this item's value.",
    "shippingDetail": "Ships via a specially chartered Grand Ceremony caravan, ensuring timely delivery through desert treks.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Permanent (requires daily maintenance)",
      "endsWhen": "Destroyed or the generator is removed from its location",
      "charges": "Unlimited"
    },
    "priceReason": "This device, while not requiring charges to function, represents a significant investment in resources and craftsmanship.",
    "priceOriginal": 700000,
    "priceReviewedAt": "2026-07-23T18:47:29.995608+00:00",
    "aiReviewedAt": "2026-07-23T18:47:29.995608+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_dream_walker_service": {
    "id": "sultanates_araby_dream_walker_service",
    "name": "Sultanates Dream Walker Service (Targeted)",
    "description": "The Sultanates Dream Walker Service is a specialized ritual that allows a skilled dream walker to enter and manipulate another's subconscious mind during sleep. This service can plant new ideas, dispel deep-seated fears, or gather critical intelligence from the target's most guarded memories. The process is delicate; if the target becomes aware, they may resist with a Will save (DC 19), risking exposure of the dream walker’s presence.",
    "price": 40000,
    "icon": "😴",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Influence subconscious beliefs and fears",
      "Risk of target becoming aware"
    ],
    "vendor": "desert_trader_guild",
    "shippedBy": "Ritual Appointment",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Subconscious Manipulation",
        "rules": "The dream walker can attempt to influence one major belief or fear in the target's subconscious. This effect is attempted with a Charisma (Insight) check contested by the target’s Wisdom saving throw (DC 19). On a success, the target accepts the planted idea or fear. If the target fails their save, they become aware of the intrusion and can attempt to resist further interference."
      },
      {
        "title": "Awareness Risk",
        "rules": "If the target successfully saves against the initial manipulation, they become aware of the dream walker's presence. The target can then make a Wisdom saving throw (DC 19) each round until the dream walker exits or the target falls asleep again."
      }
    ],
    "levelRequirementReason": "Requires significant skill to manipulate another’s subconscious without being detected.",
    "vendorReason": "The Desert Trader Guild specializes in exotic and rare services, including the Sultanates Dream Walker Service.",
    "shippingDetail": "Delivered directly to a private ritual chamber, ensuring confidentiality and privacy for both parties.",
    "usage": {
      "activation": "Requires a full night of uninterrupted sleep by the target.",
      "duration": "Instantaneous effect once successful; awareness lasts until the next sleep period or until the dream walker exits.",
      "endsWhen": "The target becomes aware, the dream walker leaves, or the target falls asleep again.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP to reflect its specialized and delicate nature.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-23T18:48:20.653981+00:00",
    "aiReviewedAt": "2026-07-23T18:48:20.653981+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_eternal_guards": {
    "id": "sultanates_araby_eternal_guards",
    "name": "Sultanates Eternal Guards (Bound Spirits)",
    "description": "The Sultanates Eternal Guards are a cadre of bound spirits that serve with unwavering loyalty. These desert spirits, forged into guardians by the Sultanates Araby, stand as unbreakable sentinels against any who would challenge their sworn oath. Their eternal vigilance is unyielding; they resist fear, poison, and non-divine charm spells alike. Should a threat arise, these guards spring to action with unerring precision, ensuring that no intruder leaves the premises alive.",
    "price": 100000,
    "icon": "💀",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Unbreakable Loyalty",
      "Immunity to Fear"
    ],
    "vendor": "desert_trader_guild",
    "shippedBy": "Procession of the Dead",
    "levelRequirement": 18,
    "factionBonus": {
      "defense": 90
    },
    "effectDetails": [
      {
        "title": "Unbreakable Loyalty",
        "rules": "The Eternal Guards never leave their post until destroyed. They are immune to fear, poison, and non-divine charm effects."
      },
      {
        "title": "Immunity to Fear",
        "rules": "The guards are immune to any effect that would induce fear or flee, including spells like Fear or spells with the fear descriptor."
      }
    ],
    "levelRequirementReason": "These bound spirits require a high level of power and control to maintain and utilize effectively.",
    "vendorReason": "The Desert Trader Guild has exclusive access to the Sultanates' most sacred artifacts, including these eternally loyal guards.",
    "shippingDetail": "The procession ensures a swift and secure delivery, though the journey is long and arduous.",
    "usage": {
      "activation": "Instantaneous activation; the guards spring to action upon any threat.",
      "duration": "Until destroyed or their oath is fulfilled",
      "endsWhen": "The guards are either destroyed or their sworn duty is completed.",
      "charges": "Unlimited, but only one set of 10 can be hired at a time."
    },
    "priceReason": "The price reflects the rare and powerful nature of these bound spirits, as well as the extensive ritual required to bind them.",
    "priceOriginal": 800000,
    "priceReviewedAt": "2026-07-23T18:47:46.908828+00:00",
    "aiReviewedAt": "2026-07-23T18:47:46.908828+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_genie_bargain": {
    "id": "sultanates_araby_genie_bargain",
    "name": "Sultanates of Araby Genie Bargain (1 Wish)",
    "description": "The Sultanates of Araby Genie Bargain is a finely crafted parchment containing a promise from a trusted Genie to grant one minor wish. It originates from the bustling markets of Araby, where Genies are bound by ancient contracts. This parchment ensures that when you seek to bargain with your chosen Genie, it will fulfill your request faithfully, though you must adhere strictly to the terms. The Genie cannot be tricked into granting wishes beyond its minor limit.",
    "price": 40000,
    "icon": "🧞",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Minor Wish Fulfillment",
      "Genie Trust"
    ],
    "vendor": "desert_trader_guild",
    "shippedBy": "Ancient Brass Lamps",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Wish Fulfillment",
        "rules": "When activated, this parchment compels a Genie to grant one minor wish. The DM adjudicates the outcome; no major changes to reality are allowed. The Genie cannot be tricked into granting a greater wish or altering fundamental aspects of existence."
      },
      {
        "title": "Genie Trust",
        "rules": "The bound Genie will not deceive you in your bargain, ensuring that any request made is fulfilled as promised, though it cannot perform actions that would break its binding contract with the Sultanates of Araby."
      }
    ],
    "levelRequirementReason": "This item requires a low-level character to ensure that the minor wish granted does not lead to game-breaking outcomes.",
    "vendorReason": "The Desert Trader Guild has exclusive access to Genie bargains, ensuring authenticity and reliability.",
    "shippingDetail": "Shipped in an ornate brass lamp for safekeeping during transit.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Instantaneous",
      "endsWhen": "The Genie's wish is granted or the parchment is destroyed",
      "charges": "One use"
    },
    "priceReason": "This item provides a single, reliable minor wish from a trusted source, making it moderately priced but not trivial.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T18:47:56.161202+00:00",
    "aiReviewedAt": "2026-07-23T18:47:56.161202+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_genie_lamp_cleaning": {
    "id": "sultanates_araby_genie_lamp_cleaning",
    "name": "Sultanates Araby Genie Lamp Cleaning",
    "description": "The Sultanates Araby Genie Lamp Cleaning is a meticulously crafted artifact that restores its lamp to gleaming perfection. The cleaning process not only enhances its luster but also strengthens your bond with any genie imprisoned within, granting +1 Charisma modifier for Charisma checks involving genies. However, the lamp's meticulous care must be handled with utmost respect; accidentally releasing a genie or provoking one's annoyance is always a risk.",
    "category": "services",
    "price": 470,
    "icon": "🪔",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+1 to Charisma checks with genies",
      "Risk of genie being annoyed"
    ],
    "vendor": "sultanates_araby",
    "shippedBy": "Genie Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "Activates when the lamp is cleaned, providing +1 bonus to Charisma checks involving genies. This effect lasts until the start of your next turn."
      },
      {
        "title": "Genie's Mood",
        "rules": "The cleaning process has a 25% chance (DC 10 Wisdom saving throw) to upset any genie within, requiring a successful save or causing temporary annoyance that reduces the lamp's effectiveness by -1 until cleaned again."
      }
    ],
    "levelRequirementReason": "This item requires no specific level but is intended for beginners who wish to explore genies and their interactions.",
    "vendorReason": "The Sultanates Araby Lamp Cleaners are renowned for their expertise in maintaining genie lamps, ensuring the purity of the magic within.",
    "shippingDetail": "Delivered with a swift Genie Courier, known for their magical speed and reliability.",
    "usage": {
      "activation": "As an action to clean the lamp thoroughly.",
      "duration": "Until start of your next turn.",
      "endsWhen": "The cleaning process is completed or interrupted by genie annoyance.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect the skill and magic required for such a precise cleaning.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-24T23:38:45.742230+00:00",
    "aiReviewedAt": "2026-07-24T23:38:45.742230+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_genie_lamp_cleaning_service": {
    "id": "sultanates_araby_genie_lamp_cleaning_service",
    "name": "Sultanates Araby Genie Lamp Cleaning Service",
    "description": "This ornate lamp from the Sultanates of Araby is a masterpiece of craftsmanship and lore. The glass is etched with ancient symbols, and its base is made of polished brass that gleams like the desert sun. Each cleaning service not only restores the lamp's luster but also grants you a 10% chance to invoke a minor wish—albeit one that might go awry, as genie spirits are known for their capricious nature. When cleaned, the lamp emits a soft glow, providing advantage on Persuasion checks with any spirit entities you encounter.",
    "price": 2400,
    "icon": "🏺",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Minor Wish Chance",
      "Advantage on Persuasion"
    ],
    "vendor": "sultanates_araby_bazaar",
    "shippedBy": "Magic Polish",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Wish Chance",
        "rules": "When the lamp is cleaned by a Sultanates Araby Lamp Rubber, there is a 10% chance that you may invoke a minor wish. This effect has no save DC and lasts until used once per day."
      },
      {
        "title": "Advantage on Persuasion",
        "rules": "For one hour after cleaning the lamp, you gain advantage on Persuasion checks when dealing with any spirit entity. This effect ends when the duration expires or if you fail a Wisdom saving throw against an opposing effect."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners to help them build their wish-casting and social skills.",
    "vendorReason": "The Sultanates Araby Bazaar is known for its diverse collection of magical artifacts, including the legendary Genie Lamps.",
    "shippingDetail": "Ships via a trusted courier from the Sultanates, ensuring safe and timely delivery to your door.",
    "usage": {
      "activation": "A bonus action is required to activate this cleaning service.",
      "duration": "One hour duration; ends when used once per day or upon failure of a Wisdom saving throw against an opposing effect.",
      "endsWhen": "Used once daily, or if you fail a Wisdom saving throw.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item is priced lower due to the limited magical effects it provides compared to more powerful artifacts.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-23T18:48:02.213793+00:00",
    "aiReviewedAt": "2026-07-23T18:48:02.213793+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_genie_lamp_oven": {
    "id": "sultanates_araby_genie_lamp_oven",
    "name": "Sultanates Araby Genie Lamp Oven",
    "description": "The Sultanates Araby Genie Lamp Oven is a lamp-shaped, enameled vessel that hums softly as it bakes. Crafted by the masterful Araby Enchanters, its inner walls are lined with heat-conducting magic that ensures every spice kebab emerges perfectly charred and imbued with arcane warmth. With each use, the oven grants you a +1 bonus on your next saving throw, as if a genie had whispered words of luck into your ear.",
    "category": "equipment",
    "price": 2400,
    "icon": "🏺",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Arcane Baking Charm",
      "Genie's Favor"
    ],
    "vendor": "sultanates_araby_bazaar",
    "shippedBy": "Wishful Ware Wrap",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Arcane Baking Charm",
        "rules": "When you activate the oven to bake, it grants you a +1 bonus on your next saving throw. This effect can only be used once per short or long rest."
      },
      {
        "title": "Genie's Favor",
        "rules": "After using the oven, roll a d6 and add this result as luck to any single roll made after its use. This effect is limited to once every 24 hours."
      }
    ],
    "levelRequirementReason": "The Genie Lamp Oven's magic is gentle but potent, making it accessible to even the most novice adventurers.",
    "vendorReason": "The Sultanates Araby Bazaar is renowned for its exotic wares and enchanted goods, including this unique culinary tool.",
    "shippingDetail": "Delivered by the Wishful Ware Wrap, ensuring that your oven arrives in perfect working condition, ready to be used upon receipt.",
    "usage": {
      "activation": "A bonus action is required to activate and use the Genie Lamp Oven.",
      "duration": "Instantaneous effect; lasts until the end of your next turn.",
      "endsWhen": "The effect ends when you make a saving throw or if you make another use of this feature within 24 hours.",
      "charges": "Unlimited uses per day, reset at dawn."
    },
    "priceReason": "This price reflects the item's rare enchantment and unique utility in both magic and mundane baking.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T18:48:26.851506+00:00",
    "aiReviewedAt": "2026-07-23T18:48:26.851506+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_lamb_kebab_recipe": {
    "id": "sultanates_araby_lamb_kebab_recipe",
    "name": "Recipe: Sultanates Araby Lamb Kebab",
    "description": "The Recipe: Sultanates Araby Lamb Kebab is a parchment scroll detailing the ancient art of skewering and grilling lamb in spices. This recipe was crafted by the legendary Araby Grillmasters, whose feasts were renowned for their aromas that could travel across deserts. Consuming this kebab teaches you how to prepare it, granting +1 to Wisdom (Survival) checks in desert environments for 4 hours. Each kebab provides 1d6 hit points of sustenance and can be prepared in as little as 25 minutes with the right ingredients.",
    "price": 470,
    "icon": "🍢",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Grill Skewers",
      "Desert Survival"
    ],
    "vendor": "sultanates_araby_bazaar",
    "shippedBy": "Skewer Spice Sheet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grill Skewers",
        "rules": "This effect grants you the ability to prepare lamb kebabs in deserts. You can use this recipe once per long rest, and it takes 25 minutes to prepare one serving."
      },
      {
        "title": "Desert Survival",
        "rules": "For 4 hours after consuming a lamb kebab prepared with this recipe, you gain +1 to Wisdom (Survival) checks related to desert environments. This effect ends when the duration expires or if you consume alcohol."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all adventurers as it requires no specific combat or skill proficiencies.",
    "vendorReason": "The Sultanates Araby Bazaar specializes in exotic spices and recipes from across the desert realms, making this scroll a staple among their offerings.",
    "shippingDetail": "The recipe is shipped on parchment that must be properly rolled to maintain its effectiveness.",
    "usage": {
      "activation": "Passive effect upon consumption; active effect when preparing kebabs in deserts.",
      "duration": "4 hours and until alcohol is consumed or the effect ends.",
      "endsWhen": "The duration expires, you consume alcohol, or it is used up during a long rest.",
      "charges": "Unlimited uses per day with proper preparation."
    },
    "priceReason": "This recipe retains its value as a rare and useful skill in desert environments, though not requiring specific levels to use.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T18:48:18.523884+00:00",
    "aiReviewedAt": "2026-07-23T18:48:18.523884+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_master_assassin": {
    "id": "sultanates_araby_master_assassin",
    "name": "Sultanates Master Assassin (Contract)",
    "description": "The Sultanates Master Assassin Contract is a deadly promise from the desert's most feared operatives. This legendary artifact ensures a guaranteed elimination of one target, no matter their defenses or location. The assassin operates outside your chain of command, leaving no trace and no chance for betrayal. A month-long notice is required to ensure the target’s identity and the nature of the mission are fully vetted by the Desert Trader Guild.",
    "price": 120000,
    "icon": "🗡️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Guaranteed Elimination",
      "Operates Outside Chain"
    ],
    "vendor": "desert_trader_guild",
    "shippedBy": "Poison Vial",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Guaranteed Elimination",
        "rules": "Activates with a month-long notice. The target is eliminated within one week of the contract's execution, regardless of their defenses or location. This effect has no save DC and cannot be interrupted by any means."
      },
      {
        "title": "Operates Outside Chain",
        "rules": "The assassin operates independently of your command structure. You have no influence over their methods or actions, ensuring absolute discretion and secrecy."
      }
    ],
    "levelRequirementReason": "Requires at least Level 17 to ensure the caster can manage such a high-risk and secretive operation.",
    "vendorReason": "The Desert Trader Guild is known for its exclusive contracts and connections within the Sultanates, ensuring the highest quality of service.",
    "shippingDetail": "Ships via a Poison Vial courier, ensuring the contract’s arrival is both secure and discreet.",
    "usage": {
      "activation": "One month notice required for activation.",
      "duration": "Instantaneous elimination within one week of execution.",
      "endsWhen": "The target is eliminated or the contract expires without use.",
      "charges": "Unlimited uses per day, but only one contract can be active at a time."
    },
    "priceReason": "Reflects the legendary rarity and high-risk nature of the service provided by the Sultanates' elite assassins.",
    "priceOriginal": 550000,
    "priceReviewedAt": "2026-07-23T18:49:11.448258+00:00",
    "aiReviewedAt": "2026-07-23T18:49:11.448258+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_oasis_charm": {
    "id": "sultanates_araby_oasis_charm",
    "name": "Sultanates of Araby Oasis Charm",
    "description": "The Sultanates of Araby Oasis Charm is a small, obsidian stone imbued with the ancient magic of the desert. When activated, it conjures a shimmering oasis that instantly quenches thirst and restores vitality to all within its 10-foot diameter. This life-sustaining water lasts for an entire day, ensuring travelers in the scorching dunes can rest and recover from dehydration without fear of succumbing to the desert’s harsh embrace.",
    "price": 2400,
    "icon": "💧",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Instant Oasis",
      "Life-Sustaining Water"
    ],
    "vendor": "desert_trader_post",
    "shippedBy": "Camel Caravan",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Oasis",
        "rules": "As an action, you touch the charm to activate it. It creates a 10-foot diameter oasis that provides clean water for all within its area until the end of your next turn."
      },
      {
        "title": "Life-Sustaining Water",
        "rules": "All creatures within the 10-foot radius gain temporary hit points equal to half their maximum hit points (rounded down) and are immune to dehydration effects until the oasis ends. The effect does not grant long-term healing but restores vitality quickly."
      }
    ],
    "levelRequirementReason": "This charm is designed for novice adventurers who might find themselves in dire need of hydration during desert travel.",
    "vendorReason": "The Desert Trader Post specializes in goods essential to the harsh conditions of the dunes, making this item a natural addition to their offerings.",
    "shippingDetail": "Ships via camel caravan for expedited delivery. Delays can occur due to sandstorms and terrain challenges.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends when you use it again or after one day, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "This charm is priced at a fraction of its value as desert survival can be the difference between life and death in the arid regions.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T18:48:58.928822+00:00",
    "aiReviewedAt": "2026-07-23T18:48:58.928822+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_permanent_guard_detail": {
    "id": "sultanates_araby_permanent_guard_detail",
    "name": "Sultanates Permanent Guard Detail (Personal)",
    "description": "The Sultanates' Permanent Guard Detail is a revered bodyguard detail, each member an elite warrior bonded through ancient magic to your person. They are sworn to protect you until death or dismissal, their presence a palpable shield of enchanted steel. Crafted by the Sultanates Araby, these guards are made from the finest materials and imbued with protective wards that glow faintly under the desert moonlight. Should one fall in combat, they are immediately replaced within a month, ensuring your eternal protection.",
    "price": 570000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Elite Protection",
      "Automatic Replacement"
    ],
    "vendor": "desert_trader_guild",
    "shippedBy": "Binding Ritual",
    "levelRequirement": 18,
    "factionBonus": {
      "defense": 80
    },
    "effectDetails": [
      {
        "title": "Elite Protection",
        "rules": "While within 10 feet of you, you gain +2 to all saving throws and ability checks. This effect is always active as long as you are in proximity."
      },
      {
        "title": "Automatic Replacement",
        "rules": "If a guard falls in battle or dies, they are immediately replaced by another elite guard within 30 days of their death. This process restores the detail's full complement without any action from you."
      }
    ],
    "levelRequirementReason": "This item is intended for powerful heroes who have already proven themselves in numerous battles.",
    "vendorReason": "The Desert Trader Guild has exclusive access to the Sultanates' finest warriors and their magical bonds.",
    "shippingDetail": "The guards are transported through a sacred ritual that ensures their loyalty and protection remain intact until they reach you.",
    "usage": {
      "activation": "Passive effect; always active while within 10 feet of the user.",
      "duration": "Permanent, ends only on death or dismissal",
      "endsWhen": "Death or dismissal by owner",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and permanent nature justify its moderate price in terms of XP.",
    "priceOriginal": 900000,
    "priceReviewedAt": "2026-07-23T18:48:50.579804+00:00",
    "aiReviewedAt": "2026-07-23T18:48:50.579804+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_sand_shroud": {
    "id": "sultanates_araby_sand_shroud",
    "name": "Sultanates of Araby Sand Shroud",
    "description": "The Sultanates of Araby Sand Shroud is a seamless, head-to-foot garment woven from the sands themselves. Its fibers shift and shimmer in the desert light, filtering out sandstorms with near-perfect efficiency while masking your scent with the faint aroma of exotic spices. Crafted by the skilled artisans of Sultanates Araby, this shroud is not just protection but a symbol of their mastery over the desert's harshest elements.",
    "price": 470,
    "icon": "🏜️",
    "stock": 18,
    "rarity": "uncommon",
    "effects": [
      "Sandstorm Protection",
      "Masked Scent"
    ],
    "vendor": "desert_traders_post",
    "shippedBy": "Rolled Cloth Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sandstorm Protection",
        "rules": "When within an active sandstorm, you gain advantage on Constitution saving throws made to resist the effects of extreme heat and exhaustion. The effect lasts for the duration of the sandstorm."
      },
      {
        "title": "Masked Scent",
        "rules": "You are considered to have a neutral scent, masking your natural odor from detection by scent-based abilities or spells. This effect is active as long as you wear the shroud."
      }
    ],
    "levelRequirementReason": "This shroud provides basic protection suitable for adventurers of all levels.",
    "vendorReason": "Desert Traders Post specializes in goods that aid travelers in harsh environments, making this item a natural addition to their inventory.",
    "shippingDetail": "Ships via the fastest desert couriers, ensuring it arrives within a week of purchase.",
    "usage": {
      "activation": "Passive effect when worn.",
      "duration": "Active for the duration of an active sandstorm or until removed.",
      "endsWhen": "The shroud's effect ends if you are no longer in an active sandstorm or if it is removed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price point to reflect its utility and the craftsmanship required for such desert survival gear.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T18:49:05.033375+00:00",
    "aiReviewedAt": "2026-07-23T18:49:05.033375+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_spice_of_life": {
    "id": "sultanates_araby_spice_of_life",
    "name": "Sultanates of Araby Spice of Life",
    "description": "The Sultanates of Araby's Spice of Life is a golden-hued powder that exudes an intoxicating aroma. When sprinkled into any meal, it instantly reinvigorates the eater, curing minor fatigue and enhancing even the simplest dish to culinary perfection. This spice, crafted in the heart of the desert by master artisans, grants the benefits of a full night's rest after only 4 hours of sleep, making every bite a rejuvenating experience.",
    "price": 2400,
    "icon": "🧂",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Cures Minor Fatigue",
      "Enhances Meals"
    ],
    "vendor": "desert_trader_post",
    "shippedBy": "Silk Road Caravan",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rejuvenating Rest",
        "rules": "When consumed as part of a meal, the user gains the benefits of a full night's rest after only 4 hours. This effect is instantaneous and requires no additional action."
      },
      {
        "title": "Meal Enhancement",
        "rules": "Any mundane meal enhanced by this spice becomes tenfold more delicious, providing an immediate +2 bonus to all saving throws made against the effects of that meal (e.g., poison or nausea). This effect lasts for 1 hour after consumption."
      }
    ],
    "levelRequirementReason": "The Spice of Life is accessible to any adventurer seeking a boost, making it an essential tool for all.",
    "vendorReason": "As desert travelers and traders, the Desert Trader Post frequently encounters those in need of sustenance and energy boosts.",
    "shippingDetail": "Shipped via the Silk Road Caravan, delivery times vary depending on current trade routes but are typically swift given the spice's importance.",
    "usage": {
      "activation": "Consumed as part of a meal",
      "duration": "Instantaneous; lasts for 1 hour after consumption",
      "endsWhen": "The effect ends upon expiration or if the user consumes another meal that includes the spice",
      "charges": "Unlimited, but limited by meal frequency"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its magical properties and rarity without being overly expensive.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T18:49:08.364205+00:00",
    "aiReviewedAt": "2026-07-23T18:49:08.364205+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_sultan_turban": {
    "id": "sultanates_araby_sultan_turban",
    "name": "Sultanates Araby Sultan Turban",
    "description": "This opulent turban is a symbol of power and wisdom from the Sultanates of Araby. Its intricate gold filigree and gemstones shimmer in the desert sun, casting a soft light that illuminates your path without drawing undue attention. The jewel within pulses with an ancient magic, granting you advantage on Persuasion checks in marketplaces. However, should a fierce sandstorm arise, it unravels into a cascade of glittering fragments, leaving only memory of its former grandeur.",
    "price": 2400,
    "icon": "🎩",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Persuasion",
      "Minor Light (5ft)"
    ],
    "vendor": "sultanates_araby_palace",
    "shippedBy": "Silk Jewel Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Persuasive Charm",
        "rules": "When you use Charisma (Persuasion) in a market, you gain advantage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Soothing Light",
        "rules": "The turban emits dim light within a 5-foot radius as long as it is worn. The light does not illuminate hidden creatures or objects beyond the range."
      }
    ],
    "levelRequirementReason": "This turban is crafted for nobility but also accessible to those who can show their worth.",
    "vendorReason": "The palace's jewelers are known for creating items that blend functionality with elegance, making this turban a natural fit.",
    "shippingDetail": "Delivered by trusted couriers within one week of purchase.",
    "usage": {
      "activation": "Passive effect; activation is not required for the light or advantage to occur.",
      "duration": "Instantaneous; both effects last until the start of your next turn.",
      "endsWhen": "The turban's magic fades if it unravels in high winds, destroying it permanently.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its craftsmanship and the rare gemstones used, making it a valuable yet balanced addition to any adventurer’s collection.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T18:49:14.313930+00:00",
    "aiReviewedAt": "2026-07-23T18:49:14.313930+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_time_stasis_field": {
    "id": "sultanates_araby_time_stasis_field",
    "name": "Sultanates of Araby Time Stasis Field (Small)",
    "description": "The Sultanates of Araby Time Stasis Field is a massive clockwork contraption that can enclose an individual within its 5-foot radius, instantly freezing time for them. Crafted with intricate gears and powered by rare desert crystals, it demands both a significant sacrifice and careful calibration before each use. This device, a masterpiece of Sultanates Araby's engineering prowess, ensures the preserved remain in stasis until the field is deactivated.",
    "price": 580000,
    "icon": "⏱️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Temporal Stasis",
      "Rare Sacrifice"
    ],
    "vendor": "desert_trader_guild",
    "shippedBy": "Massive Clockwork",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Temporal Stasis",
        "rules": "Activating this device requires a full action and costs 1 major sacrifice. Once activated, it encloses the target within a 5-foot radius sphere where time stops indefinitely. The effect is instantaneous but can be dispelled by an active spell that targets time or reality."
      },
      {
        "title": "Rare Sacrifice",
        "rules": "Each use requires the offering of something rare or valuable, such as a precious gemstone or a magical item worth at least 100 XP. This ensures the device's power is not abused and maintains its balance within the world."
      }
    ],
    "levelRequirementReason": "Requires significant mana and physical prowess to operate this intricate device.",
    "vendorReason": "The Desert Trader Guild is trusted by the Sultanates for their knowledge of rare materials and ancient artifacts, including such powerful devices.",
    "shippingDetail": "Shipped via a massive clockwork transport that requires a full day to deliver within the Sultanate region.",
    "usage": {
      "activation": "Full action",
      "duration": "Indefinite, until dispelled by an active spell",
      "endsWhen": "Dispel magic or other similar effects",
      "charges": "Unlimited, but each use requires a major sacrifice"
    },
    "priceReason": "Balanced to reflect the device's rare materials and intricate craftsmanship.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-23T18:49:20.316567+00:00",
    "aiReviewedAt": "2026-07-23T18:49:20.316567+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_water_engine": {
    "id": "sultanates_araby_water_engine",
    "name": "Sultanates Water Engine (Self-Sustaining)",
    "description": "The Sultanates Water Engine, a marvel of desert ingenuity, draws moisture from the arid air to produce an endless supply of pure water. Crafted by Sultanates Araby's master artisans, this intricate engine hums with the whispers of ancient sands and the promise of survival in the unforgiving dunes. It requires only quarterly maintenance checks to ensure its eternal flow, a testament to the resilience of both the desert and those who call it home.",
    "price": 40000,
    "icon": "💧",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Endless Water Supply",
      "Quarterly Maintenance Required"
    ],
    "vendor": "desert_trader_guild",
    "shippedBy": "Heavy Machinery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Endless Water Supply",
        "rules": "This engine produces an infinite supply of drinkable water, yielding 1,000 gallons per day. The water is pure and safe for consumption without the need for purification magic."
      },
      {
        "title": "Quarterly Maintenance Required",
        "rules": "Every three months, a minor maintenance check must be performed to keep the engine operational. Failure to do so results in reduced efficiency until the next scheduled check."
      }
    ],
    "levelRequirementReason": "The intricate engineering of this item requires basic understanding and manual dexterity.",
    "vendorReason": "The Desert Trader Guild specializes in items essential for survival, including those that ensure water supply in harsh terrains.",
    "shippingDetail": "Shipped via Heavy Machinery's specialized desert convoys to ensure safe and timely delivery of this critical survival tool.",
    "usage": {
      "activation": "Passive effect; activation is not required.",
      "duration": "Indefinite until maintenance is neglected or the item is destroyed.",
      "endsWhen": "Quarterly maintenance check fails, or the item is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "This item's price reflects its rarity and the expertise required for both crafting and maintaining it.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T18:49:35.281496+00:00",
    "aiReviewedAt": "2026-07-23T18:49:35.281496+00:00",
    "aiReviewVersion": 1
  },
  "sultanates_araby_weather_control": {
    "id": "sultanates_araby_weather_control",
    "name": "Sultanates of Araby: Sand Clearer",
    "description": "The Sultanates of Araby: Sand Clearer is a delicate brass contraption shaped like an antique microphone, encrusted with swirling patterns depicting desert winds. Crafted by the Sultanates for their caravans, it dispels all natural and magical sandstorms in its vicinity, ensuring safe passage for travelers. A single use can clear a 10-mile radius of any dust, making it invaluable to merchants and explorers alike. However, summoning the wind elementals required for its activation is fraught with danger.",
    "price": 41000,
    "icon": "🌬️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Clears Sandstorms",
      "Summons Wind Elementals"
    ],
    "vendor": "desert_trader_guild",
    "shippedBy": "Desert Wind Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Clears Sandstorms",
        "rules": "When activated, this device dispels all natural and magical sandstorms within a 10-mile radius for 48 hours. It requires the use of an action to activate. The effect has no save DC and is instantaneous in its area."
      },
      {
        "title": "Summons Wind Elementals",
        "rules": "The activation process involves summoning wind elementals, which can be dangerous. This requires a successful DC 15 Wisdom (Insight) check to avoid causing backlash. The item has one use per day and recharges after a long rest."
      }
    ],
    "levelRequirementReason": "The device is designed for novice travelers who need immediate assistance clearing the way.",
    "vendorReason": "As trusted merchants, they can supply this invaluable tool to those navigating treacherous desert routes.",
    "shippingDetail": "The courier ensures safe delivery through the sandstorms and harsh conditions of the desert.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect lasting 48 hours",
      "endsWhen": "Exhaustion or long rest for recharge",
      "charges": "One use per day"
    },
    "priceReason": "The item is priced at 1000 XP, reflecting its rarity and the skill required to summon wind elementals.",
    "priceOriginal": 70000,
    "priceReviewedAt": "2026-07-24T23:39:26.909521+00:00",
    "aiReviewedAt": "2026-07-24T23:39:26.909521+00:00",
    "aiReviewVersion": 1
  },
  "sumo_bro_sandals": {
    "id": "sumo_bro_sandals",
    "name": "Sumo Bro Thunder Sandals",
    "description": "The Sumo Bro Thunder Sandals are heavy, earth-stomping footwear forged from volcanic obsidian. Each step you take sends rumbles through the ground, and when you stomp with all your might, a lightning bolt crackles in a five-foot radius around you. The sandals add weight to your stride, making you feel as if you carry the world on your shoulders. When you are provoked into anger, the clouds above darken ominously, portending thunderous retribution.",
    "category": "equipment",
    "price": 2400,
    "icon": "🩴",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stomp Strike",
      "Anger's Storm"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Thunder Crate Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Stomp Strike",
        "rules": "As a bonus action, you can stomp the ground, creating a burst of thunder in a 5-foot radius centered on your feet. This deals 1d6 thunder damage to all creatures within the area and knocks them prone if they fail a Dexterity saving throw (DC 13). You can use this feature once per short or long rest."
      },
      {
        "title": "Anger's Storm",
        "rules": "When you are provoked into anger, you can activate an aura of storm clouds that lasts for 1 minute. Creatures within 30 feet of you have disadvantage on Dexterity saving throws and attack rolls against you while the aura persists. The aura ends early if you fall unconscious or die."
      }
    ],
    "levelRequirementReason": "The sandals' weight and power require a strong, experienced Sumo Bro to wield them effectively.",
    "vendorReason": "The Gilded Gryphon is known for its extensive collection of rare and powerful items suitable for seasoned adventurers like the Sumo Bros.",
    "shippingDetail": "The shipment includes a special padded container to protect your feet during transit, ensuring they arrive in prime condition.",
    "usage": {
      "activation": "Bonus Action (Stomp Strike), Special Activation (Anger's Storm)",
      "duration": "Instantaneous (Stomp Strike), 1 minute (Anger's Storm)",
      "endsWhen": "Ends when you fall unconscious or die, or upon your next long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The sandals' unique design and powerful effects justify this fair value in XP.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-23T18:49:29.793157+00:00",
    "aiReviewedAt": "2026-07-23T18:49:29.793157+00:00",
    "aiReviewVersion": 1
  },
  "sunglasses_of_swagger": {
    "id": "sunglasses_of_swagger",
    "name": "Sunglasses of Swagger",
    "description": "The Sunglasses of Swagger are a pair of sleek, metallic frames that shimmer with an otherworldly glow. Crafted from a rare alloy found only in the lost city of Zephyria, these shades not only enhance your performance but also draw attention wherever you go. They amplify your natural charisma, making every word you utter feel like a command. With them on, you can charm yourself into any crowd and hold their gaze with ease.",
    "category": "equipment",
    "price": 2400,
    "icon": "🕶️",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "+2 to Performance (Charisma) checks",
      "Attracts fanfare and admiring glances"
    ],
    "vendor": "skyloom",
    "shippedBy": "Paper Sleeve Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Performance",
        "rules": "While wearing the Sunglasses of Swagger, you gain a +2 bonus to Charisma-based Performance checks. This effect is active as long as the sunglasses are on your face."
      },
      {
        "title": "Fanfare and Glances",
        "rules": "The glasses draw attention from those around you. You automatically attract fanfare (as if from the Prestidigitation spell) and cause passersby to give you admiring glances for 1 minute. This effect ends when you remove them or are incapacitated."
      }
    ],
    "levelRequirementReason": "The sunglasses' charm effect is best suited for lower-level characters who can benefit most from their charisma-boosting properties.",
    "vendorReason": "Skyloom, known for its avant-garde and magical gear, naturally sells these stylish yet powerful accessories.",
    "shippingDetail": "Shipped via Paper Sleeve Express, with a 1-day delivery guarantee within the realm.",
    "usage": {
      "activation": "Passive effect as long as worn",
      "duration": "Instantaneous (fanfare and glances last for 1 minute)",
      "endsWhen": "Removed or incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The sunglasses' rarity, magical properties, and unique charm effect justify a fair price of 1000 XP.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-24T23:39:10.942138+00:00",
    "aiReviewedAt": "2026-07-24T23:39:10.942138+00:00",
    "aiReviewVersion": 1
  },
  "super_bell": {
    "id": "super_bell",
    "name": "Super Bell",
    "description": "The Super Bell is a gleaming brass bell, adorned with intricate feline motifs that shimmer under the light. When struck, it transforms its bearer into a sleek, agile cat for an exhilarating climb or brawl. The bell's resonant chime grants you a cat’s grace and ferocity, allowing you to leap effortlessly between walls and ceilings. In this form, your claws are sharper, giving you an edge in combat or exploration.",
    "category": "consumables",
    "price": 470,
    "icon": "🔔",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Cat Form",
      "Advantage on Acrobatics"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Bell Box Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cat Form",
        "rules": "You gain the benefits of a cat's form: a climb speed of 30 feet, and your claw attack deals 1d6 slashing damage. This effect lasts for 10 minutes or until you use an action to dismiss it."
      },
      {
        "title": "Advantage on Acrobatics",
        "rules": "While in cat form, you have advantage on all Acrobatics checks and saving throws made before reverting back to your original form. This effect persists for the duration of the transformation."
      }
    ],
    "levelRequirementReason": "The Super Bell's effects are simple but powerful, making it accessible to first-level adventurers.",
    "vendorReason": "Toad Town Market stocks a variety of items that enhance the daily lives of its patrons, and the Super Bell is no exception.",
    "shippingDetail": "The bell is carefully packed in a plush-lined box to ensure it arrives unharmed.",
    "usage": {
      "activation": "A bonus action to strike the bell once.",
      "duration": "10 minutes or until dismissed with an action.",
      "endsWhen": "The effect ends when you use an action to dismiss it, or if your form is interrupted by a critical hit or falling damage.",
      "charges": "Unlimited, but only one transformation per day."
    },
    "priceReason": "The Super Bell's unique combination of utility and combat advantage justifies its price in experience points.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T18:49:55.930870+00:00",
    "aiReviewedAt": "2026-07-23T18:49:55.930870+00:00",
    "aiReviewVersion": 1
  },
  "super_boots": {
    "id": "super_boots",
    "name": "Super Boots",
    "description": "The Super Boots are crafted from supple red leather imbued with the essence of a springy meadow. These enchanted footwear allow their wearer to perform aerial acrobatics, doubling jump distance and enabling a powerful Ground Pound maneuver that deals 2d6 force damage to any creature adjacent to you. The boots also soften falls, reducing fall damage by 20 feet. Crafted in the bustling workshops of Toad Town, these boots are not just footwear but a testament to the town's mastery of enchantments and springy materials.",
    "category": "equipment",
    "price": 480,
    "icon": "👢",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Jumping",
      "Ground Pound"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Parakarry Postal Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Jumping",
        "rules": "As a bonus action, you can perform a Ground Pound. This causes you to jump with double your normal jump distance and allows you to deal 2d6 force damage to any creature within 5 feet of where you land."
      },
      {
        "title": "Fall Damage Reduction",
        "rules": "When you take fall damage, reduce the amount by 10 until the start of your next turn. This effect ends if you stand up or are no longer falling."
      }
    ],
    "levelRequirementReason": "These boots provide a significant mechanical advantage that is balanced for lower-level characters who need to overcome physical challenges.",
    "vendorReason": "Toad Town Market specializes in enchanted and magical items, making these boots an ideal addition to their inventory.",
    "shippingDetail": "Ships via Parakarry's Express Delivery, ensuring your order arrives swiftly from the bustling markets of Toad Town.",
    "usage": {
      "activation": "Bonus action for Ground Pound; passive effect for fall damage reduction",
      "duration": "Instantaneous and ongoing (fall damage reduction)",
      "endsWhen": "Ground Pound ends when you no longer perform it or take an action on your turn, fall damage reduction ends at the start of your next turn.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The boots are priced at 1000 XP to reflect their balanced enhancement that provides a moderate boost in combat and utility without being overpowered.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T18:49:49.589127+00:00",
    "aiReviewedAt": "2026-07-23T18:49:49.589127+00:00",
    "aiReviewVersion": 1
  },
  "super_hammer": {
    "id": "super_hammer",
    "name": "Super Hammer",
    "description": "Forged in the heart of a dormant volcano, Super Hammer's molten metal head glows faintly even after cooling. Crafted by master blacksmiths who sought to create the ultimate weapon for their own use, this hammer can crush metal with ease and grants its wielder an edge in combat. It is not just a tool; it is a symbol of resilience and power, trusted by adventurers who seek to carve their names into legend.",
    "category": "equipment",
    "price": 480,
    "icon": "🔨",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+1 to attack rolls",
      "Can break metal blocks"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Armored Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Forgeheart Core",
        "rules": "When you make a melee attack with Super Hammer, you can attempt to break a piece of metal. The DC for this check is equal to the target's AC + 5. On a successful check, the metal block or armor is destroyed."
      },
      {
        "title": "Enhanced Strikes",
        "rules": "When you hit an enemy with Super Hammer on your turn, you can use a bonus action to make another attack with it against a different creature within reach. This counts as one of your attacks for the purpose of features that limit the number of attacks you can make."
      }
    ],
    "levelRequirementReason": "Super Hammer's power is accessible to all adventurers, but its forging requires an understanding of metal and fire.",
    "vendorReason": "Gilded Gryphon has a reputation for selling weapons that have seen the heat of battle, making Super Hammer a natural fit.",
    "shippingDetail": "The hammer is carefully packed to prevent any damage during transit and shipped via armored courier to ensure safe arrival.",
    "usage": {
      "activation": "Bonus action for Enhanced Strikes; no activation for Forgeheart Core (automatic on successful attack)",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per short rest",
      "charges": "Unlimited"
    },
    "priceReason": "Super Hammer offers a balance between power and accessibility, making it a reasonable price for an uncommon item.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-23T18:50:30.942998+00:00",
    "aiReviewedAt": "2026-07-23T18:50:30.942998+00:00",
    "aiReviewVersion": 1
  },
  "super_mushroom": {
    "id": "super_mushroom",
    "name": "Super Mushroom",
    "description": "The Super Mushroom, a radiant cap of concentrated vitality, glows faintly as it releases its potent life force. The slight tingle across your skin signals the healing magic at work, restoring lost health and banishing the Poisoned condition that plagues you. This enchanted mushroom is crafted from the heartwood of ancient trees, imbued with the essence of nature's resilience by the toads of Toad Town. It's a rare find, perfect for adventurers who need an extra boost in their quest.",
    "category": "consumables",
    "price": 480,
    "icon": "🍄",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Restore 4d8+4 Hit Points as an action",
      "Remove Poisoned condition"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Parakarry Postal Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Surge",
        "rules": "Activate as a bonus action. Restores 4d8+4 hit points to the user and removes the poisoned condition. The effects last until used or canceled by the user."
      },
      {
        "title": "Poison Resistance",
        "rules": "The user is immune to the Poisoned condition for 1 minute after consuming this mushroom, provided no other source of poisoning affects them within that time."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners who need a reliable way to regain health and resist poison.",
    "vendorReason": "The market in Toad Town specializes in rare and magical items, including the Super Mushroom which they source directly from nature's heartwood.",
    "shippingDetail": "The mushrooms are carefully packed to ensure their potency is retained during transit. Shipment via Parakarry can take up to a week depending on location.",
    "usage": {
      "activation": "Bonus action to activate, instantaneous effect lasting until used or canceled by the user.",
      "duration": "Instantaneous",
      "endsWhen": "Used or canceled by the user",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rarity and the intricate process of crafting it from ancient, enchanted trees.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-24T23:39:38.514180+00:00",
    "aiReviewedAt": "2026-07-24T23:39:38.514180+00:00",
    "aiReviewVersion": 1
  },
  "super_pickaxe": {
    "id": "super_pickaxe",
    "name": "Super Pickax",
    "description": "The Super Pickax gleams with a metallic sheen, its handle crafted from sturdy oak and reinforced with iron bands. This pickaxe is no ordinary tool—it's imbued with the spirit of Captain Toad himself, who once used it to liberate his kingdom from stone oppression. It can shatter even the most resilient rock formations, leaving behind dust in its wake. With a single swing, you gain advantage on checks to break through stone objects or walls, making it indispensable for any adventurer seeking to clear paths.",
    "category": "equipment",
    "price": 480,
    "icon": "⛏️",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "1d8 Piercing Damage",
      "Advantage on Breaking Stone Objects/Walls"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shattering Strike",
        "rules": "When you use the Super Pickax to break stone, you deal 1d8 piercing damage. This effect grants advantage on checks to break through stone objects or walls."
      },
      {
        "title": "Toad's Spirit",
        "rules": "While wielding this pickaxe, you gain a +2 bonus to Strength (Athletics) checks made to break open doors or move heavy stones. This benefit lasts for 1 minute per short rest."
      }
    ],
    "levelRequirementReason": "Beginners and seasoned adventurers alike can appreciate the Super Pickax's versatility, making it accessible at level 1.",
    "vendorReason": "Captain Toad personally oversees sales at his market to ensure that only the finest tools are available for brave souls like you.",
    "shippingDetail": "Ships directly from Toad Town, arriving within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (1d8 damage) or 1 minute per short rest (Toad's Spirit)",
      "endsWhen": "After the duration ends or if you lose your grip on the Super Pickax.",
      "charges": "Unlimited"
    },
    "priceReason": "The Super Pickax is crafted with rare materials and imbued with a unique enchantment, justifying its fair value in XP.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-23T18:51:31.885260+00:00",
    "aiReviewedAt": "2026-07-23T18:51:31.885260+00:00",
    "aiReviewVersion": 1
  },
  "super_soda": {
    "id": "super_soda",
    "name": "Super Soda",
    "description": "Super Soda is a fizzy, sky-blue elixir that bubbles furiously in its glass bottle. This drink has earned its place among adventurers for its miraculous restorative powers. A single sip not only banishes ailments like poison and blindness but also grants the imbiber a hearty burp, signaling the potion’s efficacy. The vendor at Toad Town Market insists it is crafted from ancient alchemical formulas, ensuring each bottle holds true to its promise of healing and relief.",
    "category": "consumables",
    "price": 480,
    "icon": "🥤",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Cures Poison",
      "Restores 1d4+2 Hit Points"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Courier of Swift Deliveries",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cure Poison",
        "rules": "The drinker must consume the Super Soda as an action. This effect immediately cures any poison and restores a number of Hit Points equal to 1d4 plus the imbiber’s Constitution modifier."
      },
      {
        "title": "Restore Hit Points",
        "rules": "Upon drinking, the consumer regains hit points equal to 1d4 + 2. This effect is instantaneous and does not require any saving throw or other action beyond consuming the drink."
      }
    ],
    "levelRequirementReason": "The Super Soda's effects are potent enough that even novice adventurers find it useful in their quests.",
    "vendorReason": "Toad Town Market is known for its selection of unique and beneficial potions, making the Super Soda a staple among its offerings.",
    "shippingDetail": "Delivered within three days of purchase, ensuring adventurers can quickly benefit from its restorative powers.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "Instantaneous",
      "endsWhen": "The effects are immediate and last until the drinker has consumed it",
      "charges": "Unlimited"
    },
    "priceReason": "The Super Soda is priced at 1000 XP, reflecting its unique combination of curing poisons and restoring hit points, making it a valuable yet accessible item for adventurers.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T18:51:02.989779+00:00",
    "aiReviewedAt": "2026-07-23T18:51:02.989779+00:00",
    "aiReviewVersion": 1
  },
  "swim_ring": {
    "id": "swim_ring",
    "name": "Cheep Cheep Float",
    "description": "The Cheep Cheep Float is a whimsical inflatable ring made from buoyant rubber. Crafted by the Valley Trading Post, this nifty accessory ensures you stay afloat in any body of water, perfect for those who can't swim or prefer to float instead. The ring's vibrant colors and playful cheetah print make it a delightful addition to any adventurer's gear, though its lightness means it cannot be used for diving or underwater exploration.",
    "category": "equipment",
    "price": 67,
    "icon": "⭕",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Stay Afloat",
      "Swim Speed Reduction"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stay Afloat",
        "rules": "When you wear the Cheep Cheep Float, you have advantage on Athletics (Swim) checks to maintain your position in water. This effect lasts until you disengage from the ring or fall below the water's surface."
      },
      {
        "title": "Swim Speed Reduction",
        "rules": "While wearing the Cheep Cheep Float, your swimming speed is reduced by 10 feet due to the buoyant nature of the ring. This effect does not apply if you are using aquatic skills or abilities that do not require swimming."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners and those who need assistance in water environments.",
    "vendorReason": "The Valley Trading Post specializes in practical gear for adventurers of all skill levels, making the Cheep Cheep Float a staple in their inventory.",
    "shippingDetail": "Delivered within three days via Box Express courier service.",
    "usage": {
      "activation": "Passive effect as long as you are wearing the ring and in water.",
      "duration": "Until you disengage from the ring or fall below water.",
      "endsWhen": "Disengagement from the ring or falling into deeper water.",
      "charges": "Unlimited, recharged by being out of water."
    },
    "priceReason": "The Cheep Cheep Float is priced at 1000 XP to reflect its practical utility and the materials used in its construction.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T18:50:44.625028+00:00",
    "aiReviewedAt": "2026-07-23T18:50:44.625028+00:00",
    "aiReviewVersion": 1
  },
  "syrup_that_s_extra_sweet": {
    "id": "syrup_that_s_extra_sweet",
    "name": "Wario's Waffle Syrup",
    "description": "Wario's Waffle Syrup, a golden elixir of sticky sweetness, coats your waffles in a layer that promises to heal you from breakfast-induced wounds. With each drizzle, you gain +1 hit point, but beware—this syrup clings stubbornly to everything it touches, making clean-up an arduous task. Its origins are murky, made by the mischievous and ever-competitive Wario himself, and its effects are as sweet as they are sticky.",
    "category": "equipment",
    "price": 68,
    "icon": "🍯",
    "stock": 14,
    "rarity": "common",
    "effects": [
      "Healing Breakfast",
      "Sticky Cling"
    ],
    "vendor": "wario_land",
    "shippedBy": "Sticky Sweet Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Breakfast",
        "rules": "At the start of each day, you can apply a dollop of Wario's Waffle Syrup to your waffles. This grants you +1 hit point as a bonus action."
      },
      {
        "title": "Sticky Cling",
        "rules": "While wearing or carrying items coated in Wario's Waffle Syrup, you have disadvantage on Dexterity (Stealth) checks and Dexterity saving throws due to the syrup's persistent stickiness. This effect lasts until cleaned off."
      }
    ],
    "levelRequirementReason": "This syrup is designed for beginners to enjoy its benefits without any prerequisites.",
    "vendorReason": "Wario Land is known for its quirky and often competitive products, making Wario's Waffle Syrup a natural addition to their line of goods.",
    "shippingDetail": "Due to the syrup's sticky nature, shipments are carefully packed in non-stick containers with expedited delivery times.",
    "usage": {
      "activation": "Bonus action at the start of each day",
      "duration": "Instantaneous effect; lasts until cleaned off",
      "endsWhen": "Cleaned or consumed",
      "charges": "Unlimited"
    },
    "priceReason": "The syrup's balanced price reflects its unique combination of healing and sticky properties, making it a worthwhile purchase for any adventurer.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T18:51:12.394919+00:00",
    "aiReviewedAt": "2026-07-23T18:51:12.394919+00:00",
    "aiReviewVersion": 1
  },
  "tanooki_leaf": {
    "id": "tanooki_leaf",
    "name": "Tanooki Leaf",
    "description": "The Tanooki Leaf is a shimmering, jade-green leaf imbued with the spirit of the legendary Tanooki. When held, it grants you the ability to transform into stone, blending seamlessly with your surroundings for up to an hour. The leaf also allows you to slow your fall, ensuring safe descents even from great heights. This ancient relic is said to have been crafted by nature's own hands, and its power can be felt in every delicate vein and fiber.",
    "category": "premium",
    "price": 2400,
    "icon": "🍂",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Slow Fall",
      "Stone Camouflage"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Mystical Container Protocol",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slow Fall",
        "rules": "While holding the Tanooki Leaf, you may use an action to activate its power. For the duration of one hour or until you move more than 50 feet, you are immune to falling damage and can slow your fall speed by half."
      },
      {
        "title": "Stone Camouflage",
        "rules": "As a bonus action, you can transform into stone for up to an hour. While in this form, you gain advantage on Dexterity (Stealth) checks and appear indistinguishable from the surrounding stone. You may remain as stone until the duration expires or you move more than 5 feet."
      }
    ],
    "levelRequirementReason": "The Tanooki Leaf's transformation abilities are accessible to all adventurers, making it a valuable tool for any journey.",
    "vendorReason": "The Shamans' Hut is known for its collection of ancient and mystical artifacts, including the Tanooki Leaf which they acquired from a rare encounter with nature's spirits.",
    "shippingDetail": "The Tanooki Leaf is shipped using the Mysterious Courier Service, ensuring that it arrives safely and securely in its purest form.",
    "usage": {
      "activation": "Action/ Bonus Action",
      "duration": "Up to one hour or until you move more than 50 feet",
      "endsWhen": "The duration ends when the time expires or you move more than 50 feet",
      "charges": "Unlimited"
    },
    "priceReason": "The Tanooki Leaf is a rare and powerful item, providing both defensive and utility benefits that are highly sought after by adventurers.",
    "priceOriginal": 200000,
    "priceReviewedAt": "2026-07-23T18:51:36.129155+00:00",
    "aiReviewedAt": "2026-07-23T18:51:36.129155+00:00",
    "aiReviewVersion": 1
  },
  "tarrasque_restraining_bolt": {
    "id": "tarrasque_restraining_bolt",
    "name": "Tarrasque Restraining Bolt (Legendary)",
    "description": "The Tarrasque Restraining Bolt is a gleaming, adamantine bolt forged by the gods themselves in the heart of the Watcher's Tower. Its surface shimmers with an eternal frost that whispers of ancient battles and divine intent. This single-use weapon requires direct application to the terrorskin hide of a Tarrasque, instantly petrifying it into a frozen monolith for a century, unless a creature with a Constitution save DC 30 succeeds.",
    "price": 580000,
    "icon": "🔩",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Petrifies",
      "Divine Intervention"
    ],
    "vendor": "divine_intervention",
    "shippedBy": "Deific Manifestation",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Petrification",
        "rules": "When the Tarrasque Restraining Bolt is applied to a Tarrasque, it instantly turns the beast into an unmovable stone statue for 100 years. The creature can make a DC 30 Constitution saving throw at the start of its turn to end this effect early."
      },
      {
        "title": "Divine Intervention",
        "rules": "Created by the Watcher in the Tower, this bolt requires divine intervention or a character with a level higher than 20. It is an artifact-like item with only one use and cannot be recharged."
      }
    ],
    "levelRequirementReason": "Only characters of 20th level or higher can wield the power of this divine creation.",
    "vendorReason": "This vendor specializes in items crafted by deities and celestial beings, making it a natural place for such an artifact to be sold.",
    "shippingDetail": "The bolt is delivered directly from the Tower of the Watcher, ensuring its arrival with no delays or mishaps.",
    "usage": {
      "activation": "Requires direct application to a Tarrasque and divine intervention.",
      "duration": "Instantaneous effect; lasts for 100 years unless a successful DC 30 Constitution save is made.",
      "endsWhen": "A successful DC 30 Constitution saving throw or the passage of 100 years.",
      "charges": "Single use, recharges after 500 years."
    },
    "priceReason": "The price reflects its rarity and divine crafting, being an artifact-like item with a single use.",
    "priceOriginal": 1550000,
    "priceReviewedAt": "2026-07-23T18:51:46.652292+00:00",
    "aiReviewedAt": "2026-07-23T18:51:46.652292+00:00",
    "aiReviewVersion": 1
  },
  "tarrasque_scale_armor_kit": {
    "id": "tarrasque_scale_armor_kit",
    "name": "Tarrasque Scale Armor Kit",
    "description": "The Tarrasque Scale Armor Kit comprises raw, jagged scales harvested from the legendary creature itself and a binding agent that seals them into an impenetrable armor. This armor not only grants its wearer an AC of 24 but also renders them immune to non-magical attacks. Crafting this armor requires precise alignment with the Tarrasque Hunters Guild's rituals, ensuring it is both durable and imbued with a portion of the creature’s raw power.",
    "price": 590000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Armor of Invulnerability",
      "Immunity to Non-Magical Damage"
    ],
    "vendor": "apocalypse_surplus",
    "shippedBy": "Earthquake Delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Armor of Invulnerability",
        "rules": "The armor provides an AC of 24. It grants immunity to all non-magical attacks, making it a formidable defense against mundane weapons and spells."
      },
      {
        "title": "Immunity to Non-Magical Damage",
        "rules": "The wearer is immune to damage from any source that does not use magic, such as physical assaults or environmental hazards."
      }
    ],
    "levelRequirementReason": "Crafting the armor requires a significant amount of skill and knowledge, which is only attainable by those who have reached at least level 10.",
    "vendorReason": "The Apocalypse Surplus has exclusive access to rare materials and artifacts from legendary creatures like the Tarrasque.",
    "shippingDetail": "Due to its size and weight, the armor is delivered via Earthquake Delivery's specialized transport services.",
    "usage": {
      "activation": "Instantaneous activation upon donning the armor.",
      "duration": "Permanent until destroyed or removed by a magic effect.",
      "endsWhen": "The wearer can remove it at any time.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the rarity of Tarrasque scales and the complexity of its crafting process, which is both physically demanding and magically intricate.",
    "priceOriginal": 1450000,
    "priceReviewedAt": "2026-07-23T18:51:38.054382+00:00",
    "aiReviewedAt": "2026-07-23T18:51:38.054382+00:00",
    "aiReviewVersion": 1
  },
  "tasty_tonic": {
    "id": "tasty_tonic",
    "name": "Tasty Tonic",
    "description": "The Tasty Tonic, a fragrant herbal elixir, is more than just a beverage—it's a potion of soothing and sustenance. Brewed in the heart of the forest by the Shamans' Hut, this refreshing tonic calms the most turbulent nerves and gently restores vitality to weary travelers. Each sip not only quenches thirst but also subtly regenerates lost health, making it an indispensable companion for adventurers seeking both comfort and strength.",
    "category": "consumables",
    "price": 480,
    "icon": "🍵",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Heals Light Wounds",
      "Calms Nerves"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Fragile Container",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heals Light Wounds",
        "rules": "When consumed as a bonus action, the Tasty Tonic restores 1d8 hit points to the drinker. This effect can be used once per long rest."
      },
      {
        "title": "Calms Nerves",
        "rules": "The elixir grants temporary resistance to all psychic damage for 1 hour after consumption. Additionally, it confers a +2 bonus on saving throws against fear and charm effects until the start of your next turn following consumption."
      }
    ],
    "levelRequirementReason": "The Tasty Tonic is designed for novice adventurers who need immediate relief from minor injuries and stress.",
    "vendorReason": "The Shamans of the forest have long provided this tonic to travelers, ensuring their health and peace of mind as they venture into unknown territories.",
    "shippingDetail": "Due to its delicate nature, the Tasty Tonic is shipped in specially designed containers that ensure it remains potent until delivery.",
    "usage": {
      "activation": "Consumed as a bonus action",
      "duration": "Instantaneous for healing; 1 hour for calming nerves",
      "endsWhen": "The effects expire at the end of each respective duration period or if consumed again before then.",
      "charges": "Unlimited, but only one effect can be used per long rest."
    },
    "priceReason": "The Tasty Tonic is priced moderately to reflect its dual benefits and the effort of the Shamans in creating it.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-24T23:39:40.808305+00:00",
    "aiReviewedAt": "2026-07-24T23:39:40.808305+00:00",
    "aiReviewVersion": 1
  },
  "tea_leaf_diviner_robe": {
    "id": "tea_leaf_diviner_robe",
    "name": "Tea Leaf Diviner Robe",
    "description": "The Tea Leaf Diviner Robe is a garment worn by fortune tellers, once belonging to the ancient Leaf Seers. Its sleeves are frayed from years of use, and the robe carries the faint scent of tea. The robe grants insight into the future, allowing its wearer to gain advantage on Wisdom (Insight) checks when divining fortunes. Additionally, it holds a never-ending supply of tea leaves, always ready for interpretation by the wearer.",
    "category": "equipment",
    "price": 480,
    "icon": "👘",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Fortune Telling Insight",
      "Endless Tea Leaves"
    ],
    "vendor": "tea_leaf_parlor",
    "shippedBy": "Steeped Silk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fortune Telling Insight",
        "rules": "When the wearer checks Wisdom (Insight) to divine a fortune, they gain advantage. This effect is passive and does not require an action."
      },
      {
        "title": "Endless Tea Leaves",
        "rules": "The robe can hold up to 10 tea leaves that can be used for readings at any time, without the need for rest or recharging."
      }
    ],
    "levelRequirementReason": "This robe is suitable for beginners and those who are new to fortune telling.",
    "vendorReason": "The Tea Leaf Parlor specializes in items used by fortune tellers, thus making it the perfect vendor for this robe.",
    "shippingDetail": "Shipped via Steeped Silk, ensuring that the tea-infused robe arrives fresh and ready to use.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent until replaced or destroyed.",
      "endsWhen": "Destroyed by fire or water damage.",
      "charges": "Unlimited"
    },
    "priceReason": "The robe is considered uncommon due to its specialized use and the time it takes for a Leaf Seer to create such an item.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-23T18:51:51.258772+00:00",
    "aiReviewedAt": "2026-07-23T18:51:51.258772+00:00",
    "aiReviewVersion": 1
  },
  "tea_leaf_fortune_cookie_recipe": {
    "id": "tea_leaf_fortune_cookie_recipe",
    "name": "Recipe: Tea Leaf Fortune Cookie",
    "description": "The Recipe: Tea Leaf Fortune Cookie, a delicate treat from the bustling streets of Leaf Bakers, is crafted meticulously using only the finest dough and aromatic tea leaves. Each cookie encases a cryptic fortune that can inspire or provide a minor hint, guiding you through your next challenge with prophetic wisdom. The secret to its creation lies in the ancient technique of Fold with Fortunes, which requires 25 minutes of focused effort. This recipe is more than just a snack; it's a tradition passed down by Leaf Bakers, who have been weaving mysticism into their pastries for generations.",
    "price": 480,
    "icon": "🍪",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Fold with Fortunes (25 min)",
      "Read Fortune for Inspiration or Minor Hint"
    ],
    "vendor": "tea_leaf_parlor",
    "shippedBy": "Fortune Fold File",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fold with Fortunes",
        "rules": "Activates as a bonus action. Prepare dough and tea leaves, then fold the ingredients to create the cookie. The process requires 25 minutes of focused effort."
      },
      {
        "title": "Read Fortune for Inspiration or Minor Hint",
        "rules": "Eating one cookie allows you to read its fortune, which provides a +1 bonus to an ability check or a +1 bonus to saving throw against a specific effect. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The recipe is accessible to all adventurers who can focus on the folding process for the required time.",
    "vendorReason": "The tea leaf parlor has long been known for its commitment to preserving and sharing ancient baking traditions with every patron.",
    "shippingDetail": "Shipped within two days via the Fortune Fold File, a courier service that specializes in delivering delicate items.",
    "usage": {
      "activation": "Bonus action or passive during preparation of cookies.",
      "duration": "Instantaneous upon eating the cookie.",
      "endsWhen": "Starts over at the start of your next turn after reading the fortune.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The recipe's price reflects its complexity and the time required to master the Fold with Fortunes technique.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T18:52:05.539606+00:00",
    "aiReviewedAt": "2026-07-23T18:52:05.539606+00:00",
    "aiReviewVersion": 1
  },
  "tea_leaf_fortune_folding_tool": {
    "id": "tea_leaf_fortune_folding_tool",
    "name": "Tea Leaf Fortune Folding Tool",
    "description": "The Tea Leaf Fortune Folding Tool is a delicate instrument crafted from polished oak and inlaid with gold leaf. It whispers secrets as it folds, revealing cryptic fortunes that can alter your destiny. The tool's precision allows you to fold cookie fortunes with such accuracy that you gain advantage on Prophecy-related checks. Its folded paper crinkles softly, but the sound carries a subtle charm that enhances the mood of any gathering.",
    "category": "equipment",
    "price": 480,
    "icon": "🍪",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Fortune Folding Precision",
      "Reveals Minor Fortunes"
    ],
    "vendor": "tea_leaf_parlor",
    "shippedBy": "Fortune Fold File",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fortune Folding Precision",
        "rules": "When you use this tool to fold a cookie fortune, you gain advantage on Prophecy-related checks. This effect lasts for the duration of your next short rest."
      },
      {
        "title": "Reveals Minor Fortunes",
        "rules": "The tool can be used once per day to unfold and reveal a minor prophecy or fortune. The prophecy is not binding but offers guidance. There is no saving throw involved, as this effect is purely passive."
      }
    ],
    "levelRequirementReason": "This item's utility and charm make it accessible early in your adventuring career.",
    "vendorReason": "The Tea Leaf Parlor specializes in all things related to fortune-telling and charm, making this tool a perfect fit for their offerings.",
    "shippingDetail": "Delivered with special care by the Fortune Fold File, ensuring the tool arrives in pristine condition.",
    "usage": {
      "activation": "As an action or bonus action to fold a cookie fortune.",
      "duration": "Until the start of your next short rest.",
      "endsWhen": "At the end of your next long rest.",
      "charges": "Unlimited daily uses."
    },
    "priceReason": "The tool's rarity and the convenience it offers make it a fair value for its price in XP.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-24T23:39:24.755736+00:00",
    "aiReviewedAt": "2026-07-24T23:39:24.755736+00:00",
    "aiReviewVersion": 1
  },
  "tea_leaf_fortune_reading_service": {
    "id": "tea_leaf_fortune_reading_service",
    "name": "Tea Leaf Fortune Reading Service",
    "description": "The Tea Leaf Fortune Reading Service reveals a fleeting glimpse into your destiny, stirring your soul with words of wisdom. Each reading offers a single moment of clarity, but beware: its prophecy is as unpredictable as a cup of tea, often veiled in ambiguity. The service is crafted by the Leaf Seers, who have honed their art over centuries, ensuring that each leaf tells a unique story. However, be mindful—after using this service, your clothing may bear the stains of the ritual.",
    "price": 480,
    "icon": "☕",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Reading: Clarity for one decision",
      "Prophecy with 50% accuracy"
    ],
    "vendor": "tea_leaf_parlor",
    "shippedBy": "Cup and Saucer Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Clarity for One Decision",
        "rules": "As a bonus action, you divine your path by consulting the tea leaves. This service provides you with an immediate and clear insight into one specific decision you are facing. The effect is instantaneous, providing no ongoing benefit but offering profound clarity."
      },
      {
        "title": "Prophecy with 50% Accuracy",
        "rules": "The Leaf Seer's prophecy offers a glimpse of the future, but its accuracy cannot be guaranteed. This effect lasts until you use it again or complete your next long rest. If you succeed on a Wisdom (Insight) check against DC 13, you gain a +2 bonus to one ability check or saving throw made before the end of the day."
      }
    ],
    "levelRequirementReason": "This service is accessible to all who seek guidance, regardless of their journey.",
    "vendorReason": "The Tea Leaf Parlor specializes in fortune-telling services and potions, making this item a natural addition to their offerings.",
    "shippingDetail": "Delivered via the Cup and Saucer Express, ensuring your reading arrives fresh and intact.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous; lasts until used again or end of next long rest",
      "endsWhen": "Used again or at the end of a long rest",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "Balanced to provide guidance without overwhelming the player's decision-making.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T18:52:05.700115+00:00",
    "aiReviewedAt": "2026-07-23T18:52:05.700115+00:00",
    "aiReviewVersion": 1
  },
  "tea_leaf_tea_bag_reading_subscription": {
    "id": "tea_leaf_tea_bag_reading_subscription",
    "name": "Tea Leaf Tea Bag Reading Subscription",
    "description": "The Tea Leaf Tea Bag Reading Subscription offers a unique glimpse into the future through the cryptic messages of tea bags. Each day, you can steep one bag and divine a vague, yet oddly specific hint about your fate. The vendor’s secret blend ensures each bag tells a story, though the caffeine content is high enough to make you jumpy until your morning ritual. This subscription is brewed by Tea Leaf Divination, known for their eccentric blends that are as much an art form as they are a beverage.",
    "category": "premium",
    "price": 480,
    "icon": "🍵",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Tea Bag Reading",
      "Caffeine Addiction"
    ],
    "vendor": "tea_leaf",
    "shippedBy": "Steeped Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tea Bag Reading",
        "rules": "You can activate this ability once per day by steeping one tea bag. After a short infusion, the DM provides you with a vague and cryptic hint about your future. This revelation is not guaranteed to be accurate but always feels relevant."
      },
      {
        "title": "Caffeine Addiction",
        "rules": "You develop a dependency on morning tea. If you do not consume at least one cup of tea in the morning, you suffer a -1 penalty to all ability checks and saving throws until your next meal."
      }
    ],
    "levelRequirementReason": "This subscription is accessible to beginners who are curious about future possibilities without requiring extensive experience.",
    "vendorReason": "Tea Leaf Divination specializes in reading the past, present, and future through their enchanted blends, making this subscription a natural fit for their offerings.",
    "shippingDetail": "Delivered with a small ceramic teacup to savor your first cup upon arrival.",
    "usage": {
      "activation": "Daily use by steeping one tea bag.",
      "duration": "Instantaneous; lasts until the next sunrise.",
      "endsWhen": "The tea is consumed or the day ends, whichever comes first.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This subscription offers a daily glimpse into the future without draining resources, making it accessible yet valuable for all adventurers.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-23T18:52:34.278448+00:00",
    "aiReviewedAt": "2026-07-23T18:52:34.278448+00:00",
    "aiReviewVersion": 1
  },
  "team_aqua_aqua_diver_suit": {
    "id": "team_aqua_aqua_diver_suit",
    "name": "Team Aqua Aqua Diver Suit",
    "description": "The Team Aqua Aqua Diver Suit is a sleek, streamlined wetsuit designed for elite operatives conducting underwater operations. Crafted from specialized neoprene and equipped with integrated breathing apparatus, this suit provides a critical edge in stealth and pressure resistance. It grants the wearer advantage on Swimming checks and Stealth checks within water, as well as minor protection against the crushing depths. Though cumbersome on land, it is a vital asset for any diver.",
    "price": 2400,
    "icon": "👔",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Swimming Checks",
      "Minor Pressure Resistance"
    ],
    "vendor": "team_aqua_submarine",
    "shippedBy": "Wave Weave Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Advantage on Swimming Checks",
        "rules": "When the wearer checks their swimming ability in water, they gain advantage. This effect lasts until the end of each round spent submerged."
      },
      {
        "title": "Minor Pressure Resistance",
        "rules": "The suit provides a +2 bonus to AC and HP while underwater against pressure damage. This effect persists for 1 hour after initial donning."
      }
    ],
    "levelRequirementReason": "This suit's specialized design and materials require a certain level of expertise and physical conditioning.",
    "vendorReason": "Team Aqua Submarine specializes in equipment for underwater operations, making this suit an essential tool for their operatives.",
    "shippingDetail": "Ships via Wave Weave Express; delivery time varies by region.",
    "usage": {
      "activation": "Passive effect upon donning the suit.",
      "duration": "Lasts until removed or until the wearer leaves water for more than an hour.",
      "endsWhen": "The suit's effects cease when it is removed from water or after one hour underwater, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect the suit's specialized design and the expertise required for its proper use.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-23T18:52:31.327588+00:00",
    "aiReviewedAt": "2026-07-23T18:52:31.327588+00:00",
    "aiReviewVersion": 1
  },
  "team_aqua_aqua_pressure_cooker": {
    "id": "team_aqua_aqua_pressure_cooker",
    "name": "Team Aqua Aqua Pressure Cooker",
    "description": "The Team Aqua Aqua Pressure Cooker is a marvel of undersea engineering, crafted from durable titanium and lined with heat-resistant ceramic to withstand the crushing pressures of deep-sea dives. This cooker reduces cooking time by 30% and can be submerged without fear of rust or corrosion, making it an essential tool for any diver harvesting seaweed wraps. Its pressure builds up gradually, so users must vent it carefully before opening; failing to do so risks a catastrophic explosion.",
    "category": "equipment",
    "price": 480,
    "icon": "🌯",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Reduces Cooking Time",
      "Waterproof for Dives"
    ],
    "vendor": "team_aqua_sub",
    "shippedBy": "Deep Dive Dish",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reduced Cooking Time",
        "rules": "When used underwater, the cooker reduces cooking time by 30%. It must be activated before placing any ingredients inside. The effect lasts until the meal is ready or the cooker is removed from water."
      },
      {
        "title": "Waterproof for Dives",
        "rules": "The Aqua Pressure Cooker is fully waterproof and can be submerged in up to 60 feet of water without damage. It provides a passive benefit, enhancing any underwater cooking session by preventing rust or corrosion."
      }
    ],
    "levelRequirementReason": "This cooker is designed for beginners who may not have the skill level required for more advanced culinary tools.",
    "vendorReason": "Team Aqua Sub specializes in equipment needed by those who venture into the deep, ensuring their tools are both reliable and efficient.",
    "shippingDetail": "Ships via Deep Dive Dish with expedited service for adventurers eager to start their next dive with a freshly cooked meal.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until the meal is ready or the cooker is removed from water",
      "endsWhen": "The meal is fully prepared or the cooker is taken out of the water",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects a balanced cost for an essential tool that significantly enhances underwater cooking efficiency and safety.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T18:53:01.386900+00:00",
    "aiReviewedAt": "2026-07-23T18:53:01.386900+00:00",
    "aiReviewVersion": 1
  },
  "team_aqua_aquatic_gills_potion_premium": {
    "id": "team_aqua_aquatic_gills_potion_premium",
    "name": "Team Aqua Aquatic Gills Potion (Premium)",
    "description": "Team Aqua's Aquatic Gills Potion (Premium) is a rare elixir crafted by the renowned Aqua Alchemists, encased in a Blue Vial. When consumed, it temporarily grants you gill-like structures that allow for water breathing and enhanced swimming speed. The potion's effects are subtle yet significant, making your underwater adventures both efficient and exhilarating. After consumption, you can breathe underwater for one hour and swim at an impressive +10 feet per round, though the fishy smell lingers as a gentle reminder of the magic within.",
    "price": 2400,
    "icon": "🐟",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Potion",
      "Enhanced Swimming"
    ],
    "vendor": "team_aqua_sub",
    "shippedBy": "Blue Vial Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Water Breathing",
        "rules": "Consume this potion to gain the ability to breathe underwater for one hour. This effect is instantaneous upon consumption and lasts until it expires or you are no longer in water, whichever comes first."
      },
      {
        "title": "Swim Speed +10ft",
        "rules": "While under the effects of the potion, your swimming speed increases by 10 feet for one hour. This enhancement is permanent while active and does not require any actions to maintain."
      }
    ],
    "levelRequirementReason": "This potion is designed for adventurers just starting their journey.",
    "vendorReason": "Team Aqua's Sub shops are known for selling premium items that enhance the underwater experience of explorers and divers.",
    "shippingDetail": "Ships via Blue Vial Express, ensuring swift delivery to adventurers across the land.",
    "usage": {
      "activation": "Consume the potion to activate its effects immediately.",
      "duration": "One hour or until you leave water, whichever comes first.",
      "endsWhen": "Expiry or when you exit water.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The potion's rarity and the alchemists' expertise justify its moderate price.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-23T18:52:49.309998+00:00",
    "aiReviewedAt": "2026-07-23T18:52:49.309998+00:00",
    "aiReviewVersion": 1
  },
  "team_aqua_moisture_farming": {
    "id": "team_aqua_moisture_farming",
    "name": "Team Aqua Moisture Farming",
    "description": "The Team Aqua Moisture Farming device, a sleek cylindrical apparatus made of weathered copper and glass, harvests moisture from the air in any environment. Its glass vials condense water vapor into pure distilled liquid, gathering one gallon per hour. However, this efficiency comes at a cost: you become perpetually damp, suffering a disadvantage on saving throws against cold effects. The device is a marvel of Team Aqua's engineering, crafted to harness nature’s bounty and bring it directly to your hands.",
    "category": "services",
    "price": 480,
    "icon": "💧",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Gather moisture from the air",
      "Perpetual dampness"
    ],
    "vendor": "team_aqua",
    "shippedBy": "Water Vapor Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Moisture Harvesting",
        "rules": "The device gathers one gallon of water per hour in any environment. It is not affected by weather conditions or climate, and no action is required to activate it."
      },
      {
        "title": "Perpetual Dampness",
        "rules": "You suffer a disadvantage on saving throws against cold effects. This dampness can be removed only through bathing or using magic."
      }
    ],
    "levelRequirementReason": "The device requires no special skill to operate, making it accessible to all adventurers.",
    "vendorReason": "Team Aqua specializes in environmental conservation and technology, making this gadget a perfect fit for their catalog.",
    "shippingDetail": "The device is shipped via Water Vapor Express, ensuring it arrives fully charged and ready for use.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous; recharges after a short rest",
      "endsWhen": "Destroyed or lost",
      "charges": "Unlimited"
    },
    "priceReason": "The device is priced at 1000 XP, reflecting its rarity and the advanced technology required to produce it.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T18:53:10.370103+00:00",
    "aiReviewedAt": "2026-07-23T18:53:10.370103+00:00",
    "aiReviewVersion": 1
  },
  "team_aqua_seaweed_wraps_recipe": {
    "id": "team_aqua_seaweed_wraps_recipe",
    "name": "Recipe: Team Aqua Seaweed Wraps",
    "description": "The Team Aqua Seaweed Wraps Recipe is a culinary treasure for divers, crafted from oceanic bounty and handed down by Aqua Cooks. These wraps are not just a meal but a dive companion, imbued with the essence of the sea. When consumed, they grant you an aquatic advantage: +10 ft swim speed for 3 hours, perfecting your descent and ascent through the watery depths. Prepared with care from the freshest seaweed and fish, these wraps are both nourishing and a nod to Team Aqua's dedication to undersea exploration.",
    "price": 480,
    "icon": "🌯",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Seaweed Speed Boost",
      "Aquatic Nourishment"
    ],
    "vendor": "team_aqua_sub",
    "shippedBy": "Wave Wrap Writings",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Seaweed Speed Boost",
        "rules": "Eating the wraps grants you a swim speed increase of +10 ft for 3 hours. This effect is active as long as you remain in water or have a swim speed. If you leave the water, this effect ends immediately."
      },
      {
        "title": "Aquatic Nourishment",
        "rules": "The recipe teaches you how to create these wraps, which can be used once per day by a character proficient in cooking. The wraps provide a light meal and are considered an aquatic food item for the purpose of dietary restrictions."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to beginners but enhances diving capabilities significantly.",
    "vendorReason": "Team Aqua Sub specializes in gear and supplies that enhance undersea adventures, making them the perfect vendor for this recipe.",
    "shippingDetail": "Ships via a courier fish, ensuring fresh delivery of these wraps straight from Team Aqua's kitchens to your hands.",
    "usage": {
      "activation": "Eating the wraps",
      "duration": "3 hours while in water or having swim speed",
      "endsWhen": "Leaving water or consuming another meal that ends this effect",
      "charges": "Unlimited, but one can only be prepared per day by a character proficient in cooking"
    },
    "priceReason": "This recipe represents a unique culinary skill and the convenience of having such food on hand during dives, justifying its moderate price.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T18:53:32.361635+00:00",
    "aiReviewedAt": "2026-07-23T18:53:32.361635+00:00",
    "aiReviewVersion": 1
  },
  "team_aqua_water_breathing_certification": {
    "id": "team_aqua_water_breathing_certification",
    "name": "Team Aqua Water Breathing Certification",
    "description": "The Team Aqua Water Breathing Certification is a laminated card that grants you the invaluable ability to breathe underwater for up to one hour. This certification, issued by the renowned marine experts of Team Aqua Instructors, also confers a unique advantage: when interacting with fish schools, you command their respect, gaining advantage on Animal Handling checks with aquatic creatures. However, this certification is only valid for 24 hours; after that, it must be recertified to continue enjoying its benefits.",
    "category": "services",
    "price": 480,
    "icon": "💧",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Water Breathing (1 hour)",
      "Advantage with Fish Schools"
    ],
    "vendor": "team_aqua",
    "shippedBy": "Wave Rider",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Water Breathing",
        "rules": "You gain the ability to breathe underwater for a period of one hour. This effect is limited by the certification's duration and requires recertification after it expires."
      },
      {
        "title": "Advantage with Fish Schools",
        "rules": "When interacting with fish schools, you gain advantage on Animal Handling checks. This effect is tied to the certification and only applies while it remains valid."
      }
    ],
    "levelRequirementReason": "This certification is accessible to all adventurers who wish to explore aquatic environments.",
    "vendorReason": "Team Aqua Instructors are experts in marine biology and can verify the authenticity of their certifications.",
    "shippingDetail": "Delivered by Wave Rider, ensuring safe arrival at your doorstep.",
    "usage": {
      "activation": "Instantaneous effect upon certification.",
      "duration": "One hour per use.",
      "endsWhen": "The certification expires or is recertified.",
      "charges": "Unlimited uses as long as the certification remains valid."
    },
    "priceReason": "Balanced to ensure that adventurers can explore aquatic environments without breaking the budget.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T18:53:08.342850+00:00",
    "aiReviewedAt": "2026-07-23T18:53:08.342850+00:00",
    "aiReviewVersion": 1
  },
  "team_flare_fashion_makeover": {
    "id": "team_flare_fashion_makeover",
    "name": "Team Flare Fashion Makeover",
    "description": "Team Flare's Fashion Makeover transforms your attire into a dazzling display of red and style, making you the centerpiece of any gathering. Your outfit gains +1 Charisma, but you must now endure disadvantage on Stealth checks as your fashionable flair is hard to hide. All your items take on a crimson hue—your potions, weapons, even your gear! This transformation is the result of Team Flare Stylists' meticulously crafted magic, ensuring each makeover is both stunning and unforgettable.",
    "category": "premium",
    "price": 490,
    "icon": "💃",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Outfit Transformation",
      "Stealth Disadvantage"
    ],
    "vendor": "team_flare",
    "shippedBy": "Fashion Police Couriers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Outfit Transformation",
        "rules": "When you activate this item, your outfit becomes red and fashionable, granting +1 Charisma. Your items also turn red, even potions, which might have unintended consequences (DM's discretion). This effect lasts until the start of your next short or long rest."
      },
      {
        "title": "Stealth Disadvantage",
        "rules": "You suffer disadvantage on all Stealth checks while this item is active. The effect ends when you finish a short or long rest, and there are no charges to worry about."
      }
    ],
    "levelRequirementReason": "This item requires at least level 6 due to its transformative effects on personal appearance.",
    "vendorReason": "Team Flare is known for their signature style and flair, making this makeover a perfect fit for their product line.",
    "shippingDetail": "The Fashion Police ensure the item arrives in pristine condition, delivered with a flair befitting its name.",
    "usage": {
      "activation": "Action",
      "duration": "Until start of next short or long rest",
      "endsWhen": "Starts of your next short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The item's unique and temporary nature, combined with its vendor's reputation, justifies this price.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T18:53:54.241726+00:00",
    "aiReviewedAt": "2026-07-23T18:53:54.241726+00:00",
    "aiReviewVersion": 1
  },
  "team_flare_fashion_makeover_premium": {
    "id": "team_flare_fashion_makeover_premium",
    "name": "Team Flare Fashion Makeover (Premium)",
    "description": "Team Flare Fashion Makeover (Premium) transforms your attire into a dazzling spectacle of crimson elegance. Your entire outfit gains +2 Charisma, making you irresistible in any social situation. However, it reduces your Stealth by -1, as your presence becomes more noticeable among the vibrant reds and pinks. This item, crafted by Team Flare Elite Stylists, ensures that all your items turn a striking shade of crimson, providing minor fire resistance to each one. Be prepared for both admiration and envy from those around you.",
    "category": "premium",
    "price": 2400,
    "icon": "💃",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Outfit Transformation",
      "Charisma Boost"
    ],
    "vendor": "team_flare",
    "shippedBy": "Fashion Police Couriers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Outfit Transformation",
        "rules": "This effect is instantaneous upon activation and applies to all your clothing and accessories, turning them red. The transformation lasts until the end of your next turn or until you remove the item."
      },
      {
        "title": "Charisma Boost",
        "rules": "+2 Charisma modifier for 1 hour after activating this item. You must make a concentration save (DC 13) at the start of each of your turns to maintain the effect; failing the save ends it immediately."
      }
    ],
    "levelRequirementReason": "Requires some skill in fashion and charisma to effectively use this item's social benefits.",
    "vendorReason": "Team Flare Elite Stylists specialize in creating items that enhance one’s appearance, making them the perfect vendor for this transformational tool.",
    "shippingDetail": "The item is carefully packaged and delivered within a week by Fashion Police Couriers.",
    "usage": {
      "activation": "Standard Action",
      "duration": "1 hour or until removed",
      "endsWhen": "Concentration save failed, or when the item is removed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the transformation's duration and limited social benefit.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-23T18:53:21.925287+00:00",
    "aiReviewedAt": "2026-07-23T18:53:21.925287+00:00",
    "aiReviewVersion": 1
  },
  "team_flare_fashion_plate_set": {
    "id": "team_flare_fashion_plate_set",
    "name": "Team Flare Fashion Plate Set",
    "description": "The Team Flare Fashion Plate Set is a set of five exquisite china plates adorned with intricate patterns and gold accents. Each plate is as delicate as it is elegant, enhancing any meal setting. They are handcrafted by the renowned Flare Potters using centuries-old techniques. As you serve your guests, these plates not only elevate the presentation but also grant a +1 bonus to Charisma (Performance) checks. Their gleaming finish and stylish design make every serving a spectacle.",
    "category": "equipment",
    "price": 490,
    "icon": "🍴",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Charisma Boost",
      "Gleaming Finish"
    ],
    "vendor": "team_flare_boutique",
    "shippedBy": "Swift Courier of Style",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When you use the plates to serve food, you gain a +1 bonus to Charisma (Performance) checks for the next hour. This effect ends if you stop using the plates."
      },
      {
        "title": "Gleaming Finish",
        "rules": "The plates emit a soft, radiant light that enhances any setting they are used in. This light does not provide illumination but creates an atmosphere of elegance and glamour. The light lasts for 10 minutes and ends if the plates are removed from sight."
      }
    ],
    "levelRequirementReason": "All adventurers can appreciate the elegance brought by these plates, making it a suitable item for beginners.",
    "vendorReason": "Team Flare Boutique prides itself on offering unique and stylish items crafted by local artisans like the Flare Potters.",
    "shippingDetail": "Delivered with a complimentary silk cushion to ensure safe arrival.",
    "usage": {
      "activation": "Using the plates to serve food or drinks.",
      "duration": "One hour and ten minutes for each effect.",
      "endsWhen": "The effects end when you stop using the plates or they are removed from sight, whichever comes first.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects the craftsmanship and materials used in creating these elegant yet functional dining accessories.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T18:53:24.538462+00:00",
    "aiReviewedAt": "2026-07-23T18:53:24.538462+00:00",
    "aiReviewVersion": 1
  },
  "team_flare_fashionable_finger_foods_recipe": {
    "id": "team_flare_fashionable_finger_foods_recipe",
    "name": "Recipe: Team Flare Fashionable Finger Foods",
    "description": "This handwritten recipe card for Team Flare's Fashionable Finger Foods is adorned with elegant illustrations and promises to elevate any gathering. The card itself is a delicate parchment, embossed with gold flourishes, hinting at its origin from Flare Caterers. Upon mastering the dish, you can dazzle social events with +2 Charisma for two hours. Only the finest ingredients yield this culinary masterpiece, making it an essential addition to your party planner's collection.",
    "price": 490,
    "icon": "🍴",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Stylish Bites",
      "Charismatic Buffet"
    ],
    "vendor": "team_flare_boutique",
    "shippedBy": "Glam Garnish Guide",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stylish Bites",
        "rules": "When you eat a portion of the dish prepared according to this recipe, you gain a +2 bonus to Charisma checks and saving throws for social events that last up to two hours. This effect can be used once per short or long rest."
      },
      {
        "title": "Charismatic Buffet",
        "rules": "By studying the recipe card, you learn how to prepare the dish, which grants you knowledge of a single cantrip related to social interactions as a bonus action. The cantrip is selected by you and lasts until expended in combat."
      }
    ],
    "levelRequirementReason": "This recipe caters to beginners who want to improve their social skills without the complexity of higher-level spells.",
    "vendorReason": "Team Flare Caterers are renowned for their exquisite catering services and share this recipe exclusively through their boutique.",
    "shippingDetail": "The Glam Garnish Guide ensures timely delivery, especially during peak social event seasons.",
    "usage": {
      "activation": "Eating the dish or studying the card to learn the cantrip",
      "duration": "Instantaneous for cantrip; two hours for Charisma bonus",
      "endsWhen": "Rest ends when resting, combat ends, or the cantrip is expended in battle",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The recipe card combines both a social skill enhancement and a unique cantrip at an affordable price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T18:53:38.470757+00:00",
    "aiReviewedAt": "2026-07-23T18:53:38.470757+00:00",
    "aiReviewVersion": 1
  },
  "team_flare_fashionista_dress": {
    "id": "team_flare_fashionista_dress",
    "name": "Team Flare Fashionista Dress",
    "description": "The Team Flare Fashionista Dress is a dramatic, corseted ensemble that accentuates your every move on stage or in the spotlight. Its fabric shimmers with a metallic sheen and can be flared at will to distract foes, leaving them momentarily off-balance. The dress's intricate design ensures it won't snag on rough ground, allowing you to dance gracefully through any terrain. Crafted by Flare Designers for Team Flare, this dress is more than just attire—it’s a statement.",
    "price": 490,
    "icon": "👗",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+2 Charisma (Performance)",
      "Flares for distraction (DC 12 Wisdom saving throw)"
    ],
    "vendor": "team_flare_showroom",
    "shippedBy": "Flaming Fold",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Flaring Distraction",
        "rules": "As an action, you can flare the dress to create a distraction. Any creature within 30 feet that can see you must make a DC 12 Wisdom saving throw or be distracted for 1 minute. The distraction ends early if you leave the area. This effect has no limit per day."
      },
      {
        "title": "Charisma Boost",
        "rules": "While wearing this dress, your Charisma (Performance) score is increased by 2 until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This dress is designed for beginners who are just starting to hone their performance skills.",
    "vendorReason": "Team Flare Showroom specializes in innovative and stylish gear, including the Team Flare Fashionista Dress.",
    "shippingDetail": "Ships via a blazing express service that delivers within one week.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per use",
      "endsWhen": "The distraction ends if you leave the area or if it is dispelled by another effect.",
      "charges": "Unlimited, but only usable once per long rest."
    },
    "priceReason": "Crafted with unique materials and designed by a renowned fashion house, this dress offers both style and functionality at an affordable price point.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-23T18:54:05.997988+00:00",
    "aiReviewedAt": "2026-07-23T18:54:05.997988+00:00",
    "aiReviewVersion": 1
  },
  "team_flare_style_upgrade_service": {
    "id": "team_flare_style_upgrade_service",
    "name": "Team Flare Style Upgrade Service",
    "description": "Team Flare's Style Upgrade Service transforms your attire into a statement of elegance and power. Wearing this service's outfit, you gain +2 Charisma for 24 hours, allowing you to intimidate foes with grace. The outfit is crafted from resilient fabric that repels thorns, ensuring your ensemble remains pristine through any encounter. This service, created by Flare Designers, promises a look that leaves a lasting impression and is shipped by the reliable Fancy Box.",
    "price": 490,
    "icon": "👗",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Charisma Boost",
      "Thorn-Resistant Outfit"
    ],
    "vendor": "team_flare_boutique",
    "shippedBy": "Fancy Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "Activate as an action. You gain +2 Charisma for 24 hours, allowing you to use Intimidate checks and commands more effectively. This effect ends when the duration expires or if you lose consciousness."
      },
      {
        "title": "Thorn-Resistant Outfit",
        "rules": "The outfit provides a bonus of AC +1 against piercing damage from thorns for its entire duration, which lasts until expended through use or lost while wearing it. You must make a DC 13 Dexterity saving throw at the start of each long rest to avoid losing this benefit."
      }
    ],
    "levelRequirementReason": "The service is designed for adventurers who are just starting their journey but still require a boost in confidence and protection.",
    "vendorReason": "Team Flare BOUTIQUE specializes in unique, transformative services that empower adventurers with style and substance.",
    "shippingDetail": "The service is delivered within a week, ensuring you have the outfit ready for your next big adventure.",
    "usage": {
      "activation": "Action",
      "duration": "24 hours",
      "endsWhen": "Ends when the duration expires or if you lose consciousness. Requires a successful DC 13 Dexterity saving throw at the start of each long rest to maintain the effect and avoid losing it.",
      "charges": "Unlimited"
    },
    "priceReason": "The service is priced reasonably, reflecting its utility and the craftsmanship by Flare Designers without being overpriced for a beginner adventurer.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-23T18:53:48.463995+00:00",
    "aiReviewedAt": "2026-07-23T18:53:48.463995+00:00",
    "aiReviewVersion": 1
  },
  "team_magma_fire_safety_training": {
    "id": "team_magma_fire_safety_training",
    "name": "Team Magma Fire Safety Training",
    "description": "Team Magma’s Fire Safety Training is a comprehensive course that immerses you in the flames of Mount Spire’s lava flows. You emerge with an advantage on saving throws against fire damage for one month and an unyielding caution around open flames, giving you disadvantage on checks near them. This training includes a single-use fire extinguisher, ready to douse the fiercest conflagration with 1d10 cold damage at your side.",
    "category": "services",
    "price": 490,
    "icon": "🔥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage Against Fire Damage",
      "Cautious Around Flames"
    ],
    "vendor": "team_magma",
    "shippedBy": "Lava Flow Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage Against Fire Damage",
        "rules": "For one month after completing the training, you have advantage on saving throws against fire damage. This effect ends when you complete another such training or if you suffer more than two fire-related injuries in a single week."
      },
      {
        "title": "Cautious Around Flames",
        "rules": "You gain disadvantage on checks near open flames for one month following the training. This disadvantage is negated by 10 feet per level of your proficiency bonus, and it ends when you complete another such training or if you suffer more than two fire-related injuries in a single week."
      }
    ],
    "levelRequirementReason": "This training is accessible to all adventurers who wish to learn the basics of fire safety.",
    "vendorReason": "Team Magma’s Safety Dept. ensures that every adventurer can return home safely, even after facing the fiercest lava flows.",
    "shippingDetail": "The training is delivered directly from Mount Spire, ensuring it arrives hot and fresh.",
    "usage": {
      "activation": "Passive effect once completed.",
      "duration": "One month after completion.",
      "endsWhen": "Another such training or suffering more than two fire-related injuries in a single week.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the comprehensive nature of the training, including both theoretical knowledge and practical experience.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-23T18:54:32.280016+00:00",
    "aiReviewedAt": "2026-07-23T18:54:32.280016+00:00",
    "aiReviewVersion": 1
  },
  "team_magma_lava_flow_funnel": {
    "id": "team_magma_lava_flow_funnel",
    "name": "Team Magma Lava Flow Funnel",
    "description": "The Team Magma Lava Flow Funnel is a meticulously crafted device, forged from the heart of Mount Magma's own fiery core. This funnel channels scalding lava with pinpoint precision, allowing you to pour hot rock candy syrup without a single spill. The molten metal conducts heat efficiently, granting you advantage on checks related to cooking or handling hazardous materials. When cooled, it hardens into an impenetrable shield that can be used as a weapon.",
    "category": "equipment",
    "price": 490,
    "icon": "🍭",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Handles Heat Flow",
      "Hardens if Cooled"
    ],
    "vendor": "team_magma_volcano",
    "shippedBy": "Hot Flow Haul",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Handles Heat Flow",
        "rules": "When you use the funnel to pour hot lava or syrup, you gain advantage on checks related to cooking and handling hazardous materials. This effect lasts until the task is completed."
      },
      {
        "title": "Hardens if Cooled",
        "rules": "If left unattended for 10 minutes after use, the funnel hardens into a solid block of metal. It can be used as a +2 weapon (melee weapon) with a range of melee. The funnel reverts to its original form when heated again."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who are just starting their journey in the art of lava cooking and handling.",
    "vendorReason": "Team Magma specializes in volcanic equipment, making this funnel a staple product for any magma enthusiast or chef.",
    "shippingDetail": "Ships via Hot Flow Haul's express lava flow courier service, which ensures safe and swift delivery.",
    "usage": {
      "activation": "Instantaneous action required to pour the lava or syrup.",
      "duration": "Until the task is completed.",
      "endsWhen": "Upon completion of the task or if left unattended for 10 minutes.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The funnel's unique properties and rarity justify its price, making it a valuable addition to any adventurer's toolkit.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T18:54:56.574571+00:00",
    "aiReviewedAt": "2026-07-23T18:54:56.574571+00:00",
    "aiReviewVersion": 1
  },
  "team_magma_lava_lamp_refilling": {
    "id": "team_magma_lava_lamp_refilling",
    "name": "Team Magma Lava Lamp Refilling",
    "description": "This bottle of Team Magma's Lava Lamp Refilling contains a potent mix that allows you to refill your lava lamp. When activated, it infuses the lamp with molten rock, making it a reliable heat source in cold climates and illuminating any room with an eerie glow. Be cautious; if not used properly, the lamp may explode, dealing 1d6 fire damage (DC 12 Dexterity save to avoid). A 'Team Magma' sticker is included as a token of gratitude for supporting their cause.",
    "category": "services",
    "price": 490,
    "icon": "🌋",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Molten Heat Source",
      "Explosive Risk"
    ],
    "vendor": "team_magma",
    "shippedBy": "Lava Flow Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Molten Heat Source",
        "rules": "Instantaneous effect. When the refilling is used, it infuses the lava lamp with molten rock, providing a heat source in cold environments. This effect lasts until the next sunrise or until the lamp is turned off manually."
      },
      {
        "title": "Explosive Risk",
        "rules": "If mishandled or left unattended for too long, the lamp may explode (DC 12 Dexterity save). Failure results in 1d6 fire damage. This effect can be mitigated by keeping the lamp away from flammable materials and using it in well-ventilated areas."
      }
    ],
    "levelRequirementReason": "This refilling is designed for beginners or those who are not yet capable of handling more advanced items.",
    "vendorReason": "Team Magma Lava Technicians have the expertise to ensure that their refilling product is safe and effective.",
    "shippingDetail": "Ships via Lava Flow Express, delivered in 3 days. Ensure your lava lamp is properly secured before shipment.",
    "usage": {
      "activation": "Used as an action to infuse the lava lamp with molten rock.",
      "duration": "Until the next sunrise or manually turned off.",
      "endsWhen": "The effect ends when the next sunrise occurs or the lamp is turned off.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item offers a balanced price for its practical and potentially dangerous features, ensuring it remains accessible yet valuable.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T18:54:09.883425+00:00",
    "aiReviewedAt": "2026-07-23T18:54:09.883425+00:00",
    "aiReviewVersion": 1
  },
  "team_magma_lava_resistant_pants": {
    "id": "team_magma_lava_resistant_pants",
    "name": "Team Magma Lava Resistant Pants",
    "description": "The Team Magma Lava Resistant Pants are a pair of rugged, seam-sealed trousers crafted from heat-resistant fibers mined in the heart of Mount Magma. These pants not only protect their wearer against minor lava exposure but also grant +1 to Constitution when exposed to hot environments. After each use, the fabric smolders slightly as it cools, leaving a faint scorched mark that fades after an hour. A staple for Magma Miners, these pants are essential gear for anyone venturing into volcanic terrains.",
    "category": "equipment",
    "price": 490,
    "icon": "👖",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Heat Resistance",
      "Constitution Boost"
    ],
    "vendor": "team_magma_volcano",
    "shippedBy": "Ash Ashen",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Heat Resistance",
        "rules": "These pants provide a +1 bonus to saving throws against heat damage and allow the wearer to ignore minor fire-based attacks. The effect persists for as long as the pants are worn."
      },
      {
        "title": "Constitution Boost",
        "rules": "While wearing these pants, the wearer gains +1 to their Constitution modifier in hot areas. This bonus lasts until the end of the day or until the pants are removed."
      }
    ],
    "levelRequirementReason": "These pants require a minimum level to ensure the miner has experience handling volcanic environments.",
    "vendorReason": "Team Magma's Volcano is the primary supplier of gear for its miners, ensuring they have the best protection available.",
    "shippingDetail": "Ships via express courier with same-day delivery within volcanic territories.",
    "usage": {
      "activation": "Passive effect when worn in hot areas.",
      "duration": "Lasts until removed or end of the day, whichever comes first.",
      "endsWhen": "The pants are removed or after one full day's use.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The cost reflects the rarity and specialized crafting required for these heat-resistant garments.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-23T18:54:32.107986+00:00",
    "aiReviewedAt": "2026-07-23T18:54:32.107986+00:00",
    "aiReviewVersion": 1
  },
  "team_magma_volcanic_rock_candy_recipe": {
    "id": "team_magma_volcanic_rock_candy_recipe",
    "name": "Recipe: Team Magma Volcanic Rock Candy",
    "description": "This volcanic rock candy, crafted by Team Magma's Confectioners, is a sweet treat for the daring soul. When you bite into it, the fiery sugar melts in your mouth, leaving behind a lingering warmth that mimics the heat of an active volcano. Savoring this confection grants you fire resistance for two hours, perfect for those who find themselves amidst lava or flame. This candy is not just sweet; it's a taste of Mewtenmawo’s volcanic inferno.",
    "price": 490,
    "icon": "🍭",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Fire Resistance",
      "Sweet Volcanic Bite"
    ],
    "vendor": "team_magma_base",
    "shippedBy": "Lava Lollipop Ledger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "Eating this candy grants you resistance to fire damage for a duration of 2 hours. This effect is not cumulative with other sources of fire resistance."
      },
      {
        "title": "Sweet Volcanic Bite",
        "rules": "When consumed, the candy melts in your mouth as it releases a burst of heat, providing a flavorful but intense experience. You can only consume this candy once every 24 hours due to its potent effects."
      }
    ],
    "levelRequirementReason": "This treat is accessible to all adventurers who wish to savor the taste and power of Team Magma's volcanic confections.",
    "vendorReason": "Team Magma’s Base is renowned for its exploration into volcanic territories, making their confectionery items a natural fit for their inventory.",
    "shippingDetail": "Ships via the Lava Lollipop Ledger's express courier service, which ensures timely delivery to even the remotest corners of the world.",
    "usage": {
      "activation": "Eating the candy is an instantaneous action that grants its effects immediately.",
      "duration": "2 hours",
      "endsWhen": "The duration ends when the effect time expires or you are no longer within a fire-based environment.",
      "charges": "Unlimited uses; each candy can be consumed once."
    },
    "priceReason": "This price reflects the unique crafting process and rare ingredients involved in creating this volcanic confection.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T18:54:52.243645+00:00",
    "aiReviewedAt": "2026-07-23T18:54:52.243645+00:00",
    "aiReviewVersion": 1
  },
  "team_magma_volcanic_rock_service": {
    "id": "team_magma_volcanic_rock_service",
    "name": "Team Magma Volcanic Rock Service",
    "description": "The Team Magma Volcanic Rock Service is a molten core of volcanic rock forged by the relentless heat of Mount Mawil. Its surface crackles with fiery veins, and when activated, it emits a searing burst of flames that can warm a camp or strike down foes. Crafted by Magma Miners deep within the lava-choked caverns, this item burns fiercely but requires careful handling to avoid scalding one's hands.",
    "price": 490,
    "icon": "🌋",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Rock: Warm Campfire",
      "Weapon: Fire"
    ],
    "vendor": "team_magma_base",
    "shippedBy": "Molten Express Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Warm Campfire",
        "rules": "As a bonus action, the user can activate the Volcanic Rock Service to warm their campsite or provide heat for one hour. The effect has no save DC and is instantaneous."
      },
      {
        "title": "Fire Weapon",
        "rules": "The item can be thrown as a weapon at a target within 30 feet, dealing 1d6 fire damage on a hit. This action uses 1 charge and the item can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to practice weapon skills without the risk of serious injury.",
    "vendorReason": "Team Magma bases are well-equipped with volcanic resources and can supply this molten rock service.",
    "shippingDetail": "Ships via Molten Express, a courier that ensures the item arrives in perfect condition, free of lava spillage.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per long rest",
      "charges": "1 charge"
    },
    "priceReason": "This volcanic rock service is crafted from rare materials and requires specialized handling, making it moderately priced.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T18:54:47.465164+00:00",
    "aiReviewedAt": "2026-07-23T18:54:47.465164+00:00",
    "aiReviewVersion": 1
  },
  "team_plasma_ethical_leather_jacket": {
    "id": "team_plasma_ethical_leather_jacket",
    "name": "Team Plasma Ethical Leather Jacket ",
    "description": "The Team Plasma Ethical Leather Jacket is a vegan masterpiece, crafted from an innovative material that mimics genuine leather without harming any animals. This jacket not only repels minor beast attacks but also grants its wearer +1 to Animal Handling checks, making it perfect for those who prefer ethical fashion and want a touch of animal companion expertise. The jacket's tofu-like aroma is both unique and comforting, providing an unexpected sensory experience.",
    "price": 490,
    "icon": "🧥",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "+1 to Animal Handling",
      "Jacket repels minor beast attacks"
    ],
    "vendor": "team_plasma_hq",
    "shippedBy": "Green Garment Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Animal Handling Boost",
        "rules": "When you make an Animal Handling check, you gain a +1 bonus. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Beast Repellent",
        "rules": "The jacket creates a minor barrier that repels beast attacks within 5 feet. This effect lasts for 1 hour and can be activated once per day by donning the jacket."
      }
    ],
    "levelRequirementReason": "This item is designed to empower all adventurers, regardless of their level.",
    "vendorReason": "Team Plasma HQ specializes in ethical fashion and ensures that every product supports a cruelty-free lifestyle.",
    "shippingDetail": "Ships via Green Garment Express, ensuring fast delivery with eco-friendly packaging.",
    "usage": {
      "activation": "Activates upon donning the jacket. The repelling effect requires a daily activation.",
      "duration": "Until the end of your next short or long rest for Animal Handling bonus; until removed for beast repellent",
      "endsWhen": "At the start of each new day, the daily repel effect ends unless reactivated.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The jacket's eco-friendly material and ethical craftsmanship justify its balanced price.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-23T18:55:03.212313+00:00",
    "aiReviewedAt": "2026-07-23T18:55:03.212313+00:00",
    "aiReviewVersion": 1
  },
  "team_plasma_ethical_veggie_chopper": {
    "id": "team_plasma_ethical_veggie_chopper",
    "name": "Team Plasma Ethical Veggie Chopper ",
    "description": "The Team Plasma Ethical Veggie Chopper is a meticulously crafted kitchen tool designed for those who wish to avoid the harm of animal products. Its blade, forged from stainless steel and polished with care, glides through vegetables with precision, ensuring no unnecessary force or waste. This chopper bestows an +1 bonus on Animal Handling checks after use, as it fosters harmony in your meals. The chopper is shipped by Green Chop Gear, known for its eco-friendly packaging.",
    "category": "equipment",
    "price": 490,
    "icon": "🍲",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Ethical Harvest",
      "Enhanced Animal Handling"
    ],
    "vendor": "team_plasma_lab",
    "shippedBy": "Green Chop Gear",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ethical Harvest",
        "rules": "When used to chop vegetables, the user gains a +1 bonus on Animal Handling checks made immediately after using this chopper. This effect is instantaneous and does not require any additional action."
      },
      {
        "title": "Enhanced Animal Handling",
        "rules": "For every 5 uses of the chopper within a week, the user's proficiency bonus to Animal Handling checks improves by +1 until the start of their next long rest. This effect has no save DC and is limited to once per day."
      }
    ],
    "levelRequirementReason": "This item requires no level as it serves a basic utility purpose for all adventurers.",
    "vendorReason": "Team Plasma Lab specializes in ethical and sustainable kitchen tools, making this chopper an ideal product for their inventory.",
    "shippingDetail": "Delivered with eco-friendly packaging to ensure sustainability.",
    "usage": {
      "activation": "Instantaneous use when chopping vegetables.",
      "duration": "Instantaneous and permanent bonus.",
      "endsWhen": "Only consumed by a week's worth of uses before the next boost can be gained.",
      "charges": "Unlimited, as it refills with each new week."
    },
    "priceReason": "The price reflects its uncommon rarity and utility in supporting ethical living without compromising on quality or effectiveness.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T18:55:03.228313+00:00",
    "aiReviewedAt": "2026-07-23T18:55:03.228313+00:00",
    "aiReviewVersion": 1
  },
  "team_plasma_poke_liberation_potion_service": {
    "id": "team_plasma_poke_liberation_potion_service",
    "name": "Team Plasma Poké Liberation Potion Service",
    "description": "Team Plasma Poké Liberation Potion Service is a shimmering vial of ethereal green potion that bubbles with the fervent speeches of freedom. It can calm even the fiercest beast, removing rage or fear for one hour. The liberated creature gains an advantage on all Animal Handling checks and remains tranquil until the effects wear off. This potent concoction was crafted by the zealous Plasma Alchemists to promote peace among captives.",
    "price": 490,
    "icon": "⚪",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Calm Beast",
      "Advantage on Animal Handling"
    ],
    "vendor": "team_plasma_lab",
    "shippedBy": "Ethical Vial Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Calm Beast",
        "rules": "As an action, you can use this potion to target one beast within 30 feet. The creature must succeed on a DC 15 Wisdom saving throw or be calmed for one hour. During this time, it no longer exhibits rage or fear and gains advantage on all Animal Handling checks."
      },
      {
        "title": "Advantage on Animal Handling",
        "rules": "Until the target beast is no longer affected by the Calm Beast effect, you gain advantage on all Animal Handling checks made for that creature."
      }
    ],
    "levelRequirementReason": "This potion service is designed to be accessible early in a campaign to foster cooperation and peace.",
    "vendorReason": "As the creators of this potion, Team Plasma Lab ensures that it remains available for those who seek to promote harmony between captives and their keepers.",
    "shippingDetail": "Ships within 24 hours with priority delivery ensuring the potion is fresh upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour per use",
      "endsWhen": "The target beast no longer exhibits rage or fear, or until the effect is dispelled by magic.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This balanced price reflects its rarity and utility in fostering peaceful interactions.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-23T18:55:50.745804+00:00",
    "aiReviewedAt": "2026-07-23T18:55:50.745804+00:00",
    "aiReviewVersion": 1
  },
  "team_plasma_vegan_veggie_stew_recipe": {
    "id": "team_plasma_vegan_veggie_stew_recipe",
    "name": "Recipe: Team Plasma Vegan Veggie Stew ",
    "description": "This parchment-bound recipe for Team Plasma’s Vegan Veggie Stew is a symbol of ethical culinary innovation. Crafted by the compassionate Plasma Vegans, it teaches the art of simmering a hearty stew that heals wounds and fosters empathy. The stew requires only simple vegetables, ensuring no harm comes to any creature during its preparation. Upon consumption, you gain +1 to Animal Handling checks and heal 1d6 hit points, a testament to the balance between compassion and sustenance.",
    "price": 490,
    "icon": "🍲",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Healing Stew",
      "Empathic Buff"
    ],
    "vendor": "team_plasma_lab",
    "shippedBy": "Green Goodness Gazette",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Stew",
        "rules": "Eating this stew heals 1d6 hit points and grants a +1 bonus to Animal Handling checks for an hour. The stew must be prepared with at least three different types of vegetables."
      },
      {
        "title": "Empathic Buff",
        "rules": "While consuming the stew, you gain a +1 bonus to Animal Handling checks for one hour. This effect does not stack with other sources of the same benefit."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all who wish to learn and share in its compassionate message.",
    "vendorReason": "Team Plasma Lab specializes in ethical and innovative recipes, ensuring that every item they sell promotes a kinder world.",
    "shippingDetail": "Delivered within a week by the Green Goodness Gazette, known for its eco-friendly delivery methods.",
    "usage": {
      "activation": "Eating the stew",
      "duration": "One hour per serving",
      "endsWhen": "The effects expire after one hour or when consumed again.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This recipe is priced at 1000 XP as it represents a valuable lesson in compassion and ethical living, suitable for all adventurers.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T18:55:23.856635+00:00",
    "aiReviewedAt": "2026-07-23T18:55:23.856635+00:00",
    "aiReviewVersion": 1
  },
  "team_rocket_balloon_escape_premium": {
    "id": "team_rocket_balloon_escape_premium",
    "name": "Team Rocket Balloon Escape ",
    "description": "The Team Rocket Balloon Escape is a helium-filled, rocket-engineered device that can swiftly ascend into the sky. Crafted by Team Rocket's elite engineers, this balloon can inflate to ascend 50 feet in a single use and remain aloft for a minute, giving you just enough time to escape danger or evade capture. It is an invaluable tool, especially when faced with a grapple attack—merely activate it, and it will pop on impact from any arrow shot at it.",
    "price": 500,
    "icon": "🎈",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Ascending Escape",
      "Arrow Pop"
    ],
    "vendor": "team_rocket_lab",
    "shippedBy": "Helium Tank Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ascending Escape",
        "rules": "When activated as an action, this device inflates and ascends you 50 feet into the air. It remains aloft for 1 minute or until it is popped by an arrow."
      },
      {
        "title": "Arrow Pop",
        "rules": "If struck by an arrow while in use, the balloon pops immediately, ending its effects and preventing further use."
      }
    ],
    "levelRequirementReason": "This escape device is designed for beginners or those who need a quick getaway without much experience.",
    "vendorReason": "Team Rocket's Lab specializes in creating gadgets and devices that aid their operatives in escaping dangerous situations.",
    "shippingDetail": "The balloon is delivered fully inflated with a note from Team Rocket explaining its usage and limitations.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until popped by an arrow",
      "endsWhen": "Popped by an arrow or after 1 minute",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "This item is priced at a modest 1000 XP because it provides a quick and effective escape method that can save lives in critical situations.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T18:55:29.903912+00:00",
    "aiReviewedAt": "2026-07-23T18:55:29.903912+00:00",
    "aiReviewVersion": 1
  },
  "team_rocket_black_suit": {
    "id": "team_rocket_black_suit",
    "name": "Team Rocket Black Suit ",
    "description": "The Team Rocket Black Suit is a sleek, black garment that whispers of shadowy plots and nefarious schemes. Crafted by Rocket Tailors from the darkest alleys of Lavender Town, it grants its wearer an unyielding confidence in their villainous endeavors. The suit's fabric seems to shift with the user's movements, hiding small companions like Meowth so well that even a powerful Teleport spell cannot locate them for 1 hour.",
    "category": "equipment",
    "price": 500,
    "icon": "👔",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Deception Checks",
      "Companion Hiding"
    ],
    "vendor": "team_rocket_base",
    "shippedBy": "Sneaky Suitcase",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Advantage on Deception Checks",
        "rules": "When the wearer uses the Suit to engage in a Deception check, they gain advantage. This effect lasts until the end of their next long rest."
      },
      {
        "title": "Companion Hiding",
        "rules": "The suit can hide small companions like Meowth within its folds for 1 hour when worn by the user. During this time, any detect magic or similar divination spells cannot locate these hidden creatures. This effect is limited to one companion per day."
      }
    ],
    "levelRequirementReason": "The suit's complexity and the need for precise movements to activate its effects necessitate at least third-level proficiency.",
    "vendorReason": "Team Rocket operates from their base, making this suit a natural product of their operations.",
    "shippingDetail": "The Suit is delivered via Team Rocket's notorious Sneaky Suitcase, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Put on the suit as an action.",
      "duration": "Until removed or until used up (one companion per day).",
      "endsWhen": "Worn off by removal or when the duration expires.",
      "charges": "Unlimited, but only one companion can be hidden each day."
    },
    "priceReason": "The suit's craftsmanship and the unique abilities it grants make it a fair price for an uncommon item.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-23T18:55:32.550360+00:00",
    "aiReviewedAt": "2026-07-23T18:55:32.550360+00:00",
    "aiReviewVersion": 1
  },
  "team_rocket_mech_rental_low_quality": {
    "id": "team_rocket_mech_rental_low_quality",
    "name": "Team Rocket Mech Rental (Low Quality)",
    "description": "The Team Rocket Mech Rental (Low Quality) is a rusted, barely operational hunk of scrap metal. Its paint scheme is faded and peeling, revealing patches of raw metal. Despite its poor condition, it still offers a unique challenge to those brave enough to pilot it. The mech provides +2 AC but reduces your speed by -10 feet per round; attacks made while piloting are clumsy, requiring you to roll with disadvantage. Should the mech roll a natural 1 or 2 on a d20, it self-destructs, releasing a cloud of noxious fumes that requires an hour-long repair using duct tape and basic tools.",
    "category": "premium",
    "price": 2400,
    "icon": "🤖",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Clumsy Attacks",
      "Self-Destruct"
    ],
    "vendor": "team_rocket",
    "shippedBy": "Blasting Off Express Delivery",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Clumsy Attacks",
        "rules": "While piloting, attacks made with this mech have disadvantage. This effect lasts for the duration of your control over the mech."
      },
      {
        "title": "Self-Destruct",
        "rules": "The mech has a 5% chance to self-destruct each round it is in use. When this happens, roll a d20; on a natural 1 or 2, the mech explodes, causing 3d6 damage to all creatures within 10 feet and requiring an hour-long repair using duct tape and basic tools."
      }
    ],
    "levelRequirementReason": "Piloting such an unstable and dangerous machine requires a certain level of experience and skill.",
    "vendorReason": "Team Rocket, despite their failures, are known for pushing the limits of technology even when it means creating hazardous, yet potentially useful, items like this mech.",
    "shippingDetail": "Ships via Blasting Off's Express Delivery service, which is known for its fast but sometimes reckless methods. The delivery may take longer than expected due to the unstable nature of the mech and potential detours.",
    "usage": {
      "activation": "As a bonus action at the start of your turn",
      "duration": "Until the start of your next turn",
      "endsWhen": "The mech self-destructs or is destroyed by damage exceeding half its hit points",
      "charges": "Unlimited, but requires a 1-hour repair after each use"
    },
    "priceReason": "This item provides unique gameplay and an inherent risk factor that justifies the reduced price.",
    "priceOriginal": 22500,
    "priceReviewedAt": "2026-07-23T18:55:41.308391+00:00",
    "aiReviewedAt": "2026-07-23T18:55:41.308391+00:00",
    "aiReviewVersion": 1
  },
  "team_rocket_mech_rental_very_low_quality": {
    "id": "team_rocket_mech_rental_very_low_quality",
    "name": "Team Rocket Mech Rental (Very Low Quality)",
    "description": "The Team Rocket Mech Rental (Very Low Quality) is a hulking, rusted mech that clanks and groans as you pilot it. Built by Team Rocket’s R&D division after another spectacular failure, its joints creak and its systems are borderline functional at best. Despite the risk of mechanical breakdowns, the mech offers a +1 bonus to AC but reduces your speed to 20 feet for 7 days. Should it fail, you must spend 2 hours repairing it or face the dangerous possibility that it will self-destruct.",
    "category": "premium",
    "price": 500,
    "icon": "🤖",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Mechanically Flawed",
      "Temporary Speed Reduction"
    ],
    "vendor": "team_rocket",
    "shippedBy": "Blasting Off (Again)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mechanically Flawed",
        "rules": "When you activate this mech, there is a 25% chance (DC 13 Dexterity saving throw) that it will break down on the first combat round. If this happens, roll 2d10 and subtract the result from your hit point maximum until it is repaired. The mech can be fixed by spending 2 hours of work."
      },
      {
        "title": "Temporary Speed Reduction",
        "rules": "While piloting this mech, you have a +1 bonus to AC but your speed is reduced to 20 feet for the duration of 7 days from activation. This effect ends when you stop using the mech or it breaks down."
      }
    ],
    "levelRequirementReason": "This rental mech requires no special piloting skill, making it accessible to lower-level adventurers.",
    "vendorReason": "Team Rocket offers this as a last resort for those who can't afford their premium rentals or are too impatient to wait for a fully functional mech.",
    "shippingDetail": "The mech is delivered with pre-installed emergency patches but requires immediate attention upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "7 days from activation",
      "endsWhen": "Combat round it breaks down or you stop using the mech",
      "charges": "Unlimited"
    },
    "priceReason": "This rental is priced at 1000 XP, reflecting its very low quality and the risk involved in using it.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T18:55:46.329399+00:00",
    "aiReviewedAt": "2026-07-23T18:55:46.329399+00:00",
    "aiReviewVersion": 1
  },
  "team_rocket_sneak_sifter": {
    "id": "team_rocket_sneak_sifter",
    "name": "Team Rocket Sneak Sifter ",
    "description": "The Team Rocket Sneak Sifter is a diminutive, meticulously crafted sifter made of durable steel and aluminum alloy, forged in the shadowy lairs of the Meowth-led gang. Its sleek design ensures that while you sift through your ingredients with ease, the sound remains undetectable to even the most perceptive cooks. This sifter not only grants advantage on stealth-related checks when preparing food but also adeptly hides fine powders, making it a favorite among Team Rocket's culinary spies.",
    "category": "equipment",
    "price": 500,
    "icon": "🥪",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth Cooking",
      "Hides Fine Powders"
    ],
    "vendor": "team_rocket_base",
    "shippedBy": "Sneak Sift Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Stealth Cooking",
        "rules": "When using the Sneak Sifter for stealthy cooking tasks, you gain advantage on Dexterity (Stealth) checks. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Hides Fine Powders",
        "rules": "The Sneak Sifter can be used to hide fine powders and ingredients in your cooking, making it easier to sneak past suspicious eyes without being detected. This effect is usable once per day."
      }
    ],
    "levelRequirementReason": "This sifter is designed for beginners and those who appreciate the nuances of stealthy kitchen work.",
    "vendorReason": "Team Rocket's base sells a variety of tools favored by its members, including this indispensable sifter.",
    "shippingDetail": "Delivered swiftly through the secret tunnels beneath Cerulean City; delivery can be delayed if the shipment is compromised by Team Rocket's rivals.",
    "usage": {
      "activation": "As a bonus action when preparing food in stealthy conditions.",
      "duration": "Until the end of your next short or long rest.",
      "endsWhen": "The effect ends at the start of your next short or long rest.",
      "charges": "Unlimited, but only one use per day for hiding fine powders."
    },
    "priceReason": "Balanced to ensure that this sifter is a valuable tool without overshadowing more powerful items in the market.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T18:56:29.836302+00:00",
    "aiReviewedAt": "2026-07-23T18:56:29.836302+00:00",
    "aiReviewVersion": 1
  },
  "team_rocket_stealth_sandwiches_recipe": {
    "id": "team_rocket_stealth_sandwiches_recipe",
    "name": "Recipe: Team Rocket Stealth Sandwiches ",
    "description": "A clandestine recipe passed down by Team Rocket's mischievous chefs. These stealth sandwiches are more than just a meal; they're a silent weapon for escaping detection. When wrapped, you gain a +2 bonus to Dexterity (Stealth) checks for one hour, allowing you to slip past unnoticed. The sandwich itself is a marvel of culinary sabotage, using only the finest ingredients to create an escape plan in your stomach.",
    "price": 500,
    "icon": "🥪",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Stealthy Sandwich",
      "Evasion Meal"
    ],
    "vendor": "team_rocket_base",
    "shippedBy": "Blast-Off Bun Book",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Stealthy Sandwich",
        "rules": "When you consume this sandwich, you gain a +2 bonus to Dexterity (Stealth) checks for one hour. This effect ends if you eat anything else or take damage."
      },
      {
        "title": "Evasion Meal",
        "rules": "While under the effects of the Stealthy Sandwich, your movement speed is reduced by 10 feet due to the sandwich's heavy ingredients. You can still benefit from the bonus to Stealth checks despite this penalty."
      }
    ],
    "levelRequirementReason": "Requires basic knowledge of stealth and culinary skills.",
    "vendorReason": "Team Rocket chefs are known for their sabotage techniques, which include recipes that can help you evade capture.",
    "shippingDetail": "Ships via express rocket delivery in 24 hours.",
    "usage": {
      "activation": "Eating the sandwich",
      "duration": "One hour",
      "endsWhen": "You eat something else or take damage",
      "charges": "Unlimited, as you can always make another stealth sandwich"
    },
    "priceReason": "Balanced for its unique combination of utility and flavor.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T18:55:55.982183+00:00",
    "aiReviewedAt": "2026-07-23T18:55:55.982183+00:00",
    "aiReviewVersion": 1
  },
  "team_rocket_uniform": {
    "id": "team_rocket_uniform",
    "name": "Team Rocket Grunt Uniform",
    "description": "The Team Rocket Grunt Uniform, a sleek black ensemble adorned with a gleaming red 'R', seamlessly blends into criminal operations yet marks its wearer as an immediate target for the law and Pokémon enthusiasts alike. The uniform's subtle design makes it nearly indistinguishable from the team's official attire but also guarantees you'll stand out in any crowd, especially during Team Rocket raids. Wearing this outfit can significantly boost your Charisma (Deception) checks when pretending to be a grunt, but it comes with the risk of becoming an enemy of both legal authorities and Pokémon trainers with a Pikachu.",
    "category": "equipment",
    "price": 500,
    "icon": "🥋",
    "stock": 20,
    "rarity": "uncommon",
    "effects": [
      "+2 to Charisma (Deception) in Team Rocket operations",
      "Draws hostile attention from law enforcement and Pokémon owners"
    ],
    "vendor": "Team Rocket",
    "shippedBy": "Shady Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When wearing this uniform, you gain a +2 bonus to Charisma (Deception) checks made for pretending to be a Team Rocket member. This benefit lasts until the end of your next long rest."
      },
      {
        "title": "Hostile Attention",
        "rules": "While in public places, you automatically draw hostile attention from law enforcement and Pokémon trainers with Pikachu. This effect ends when you leave an urban area or when the day ends."
      }
    ],
    "levelRequirementReason": "This uniform is designed for new grunts to easily infiltrate Team Rocket bases.",
    "vendorReason": "Team Rocket outfits are exclusively sold by their official vendors, ensuring only true members can acquire them.",
    "shippingDetail": "The uniform is delivered discreetly via Shady Delivery's underground courier network, arriving within a week of purchase.",
    "usage": {
      "activation": "Passive effect when wearing the uniform",
      "duration": "Until end of next long rest or when you leave an urban area",
      "endsWhen": "Leaving an urban area during the day or completion of a long rest",
      "charges": "Unlimited, as it is a passive effect"
    },
    "priceReason": "The uniform's balanced price reflects its unique design and limited utility within Team Rocket operations.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T18:56:43.891415+00:00",
    "aiReviewedAt": "2026-07-23T18:56:43.891415+00:00",
    "aiReviewVersion": 1
  },
  "team_star_rebel_hoodie": {
    "id": "team_star_rebel_hoodie",
    "name": "Team Star Rebel Hoodie",
    "description": "The Team Star Rebel Hoodie is a hoodie emblazoned with shimmering star motifs, designed for outcasts seeking anonymity and camaraderie among the stars. Crafted by the Star Rebels in their hidden hideout, this garment not only adds +1 to Charisma when interacting with fellow rebels but also hides your identity from prying eyes. In darkness, the stars on its hood glow faintly, alerting none of your whereabouts to those who would seek you.",
    "price": 500,
    "icon": "👕",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "+1 Charisma with rebels",
      "Hides identity in dark"
    ],
    "vendor": "team_star_hideout",
    "shippedBy": "Starry Stitch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost Among Rebels",
        "rules": "When worn and interacting with fellow rebels, the wearer gains a +1 bonus to Charisma checks. This effect is passive while wearing the hoodie."
      },
      {
        "title": "Identity Concealment in Darkness",
        "rules": "While in darkness, the stars on the hoodie glow faintly, providing advantage on Stealth checks and hiding the wearer's identity from those who cannot see the glowing stars. The effect lasts until the wearer leaves a dark area or removes the hoodie."
      }
    ],
    "levelRequirementReason": "The hoodie is designed for anyone seeking to blend in, regardless of their level.",
    "vendorReason": "As creators and patrons of this hoodie, Team Star Hideout naturally stocks it alongside other rebel gear.",
    "shippingDetail": "Ships via a secret courier route, ensuring the hoodie arrives safely and discreetly to its recipient.",
    "usage": {
      "activation": "Passive while worn",
      "duration": "While in darkness",
      "endsWhen": "Leaving a dark area or removing the hoodie",
      "charges": "Unlimited"
    },
    "priceReason": "The hoodie's unique design, craftsmanship, and limited availability justify its fair price.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-23T18:56:32.442009+00:00",
    "aiReviewedAt": "2026-07-23T18:56:32.442009+00:00",
    "aiReviewVersion": 1
  },
  "team_star_rebel_rice_cooker": {
    "id": "team_star_rebel_rice_cooker",
    "name": "Team Star Rebel Rice Cooker",
    "description": "The Team Star Rebel Rice Cooker is a compact, portable cooker forged from star-forged metal and adorned with the emblem of the Star Rebels. Its lid glows faintly with stellar light, and it can be found in the bustling kitchens of the team's base. This humble device not only cooks rice evenly but also boosts morale among rebels by +1 to rebel morale checks, making every meal a rallying point.",
    "category": "equipment",
    "price": 500,
    "icon": "⭐",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Boosts Rebel Morale",
      "Portable Cooking"
    ],
    "vendor": "team_star_base",
    "shippedBy": "Rebel Rice Rig",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boosts Rebel Morale",
        "rules": "When you use the Team Star Rebel Rice Cooker to prepare a meal, all rebels within 10 feet gain advantage on their next morale check until the end of your next turn. This effect can be used once per day."
      },
      {
        "title": "Portable Cooking",
        "rules": "The cooker is compact and portable, allowing it to be carried by a single person without encumbrance penalties. It requires no fuel or additional power source for cooking rice evenly."
      }
    ],
    "levelRequirementReason": "Rebels of all levels can benefit from the morale-boosting effects of this cooker.",
    "vendorReason": "The team's base is well-supplied with essential gear, including this cherished cooking tool.",
    "shippingDetail": "Delivered by airship within a week of order placement.",
    "usage": {
      "activation": "Use an action to prepare and cook rice using the cooker.",
      "duration": "Instantaneous effect; lasts until the end of your next turn.",
      "endsWhen": "The effect ends when you use it again or if the meal is not consumed within one hour.",
      "charges": "Unlimited, but limited by daily usage."
    },
    "priceReason": "Balanced at this price point to reflect its utility and rarity among the Star Rebels, making it a valuable addition to any rebel's toolkit.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T18:56:19.891944+00:00",
    "aiReviewedAt": "2026-07-23T18:56:19.891944+00:00",
    "aiReviewVersion": 1
  },
  "team_star_stellar_snacks_recipe": {
    "id": "team_star_stellar_snacks_recipe",
    "name": "Recipe: Team Star Stellar Snacks",
    "description": "Recipe: Team Star Stellar Snacks, a culinary treasure crafted by the Star Rebels for outcasts under the watchful eyes of the cosmos. These star-shaped morsels, made from a secret dough and studded with shimmering stardust, are not only a feast for the eyes but also a boon to those in need. Eat one to gain +1 Charisma when interacting with outcasts, and you'll shine like the stars themselves for 2 hours, turning even the darkest nights into celestial gatherings.",
    "price": 500,
    "icon": "⭐",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Stardust Boost",
      "Outcast Charm"
    ],
    "vendor": "team_star_base",
    "shippedBy": "Stellar Snack Summary",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stardust Boost",
        "rules": "When you consume a Team Star Stellar Snack, gain +1 Charisma when interacting with outcasts for the next 2 hours. The effect ends if you are no longer in an environment conducive to star-gazing or if your Charisma is reduced."
      },
      {
        "title": "Outcast Charm",
        "rules": "While under the effect of Stardust Boost, you have advantage on Persuasion checks made against outcasts. This effect lasts until it ends as described above."
      }
    ],
    "levelRequirementReason": "This snack is designed for all rebels who need a boost in social interactions without stringent level prerequisites.",
    "vendorReason": "Team Star Base, the heart of Star Rebel operations, offers this recipe to its members and allies as a symbol of unity and support.",
    "shippingDetail": "Snacks are couriered with care using the 'Cosmic Courier' service, ensuring they arrive fresh from the starry heavens.",
    "usage": {
      "activation": "Eating one snack",
      "duration": "2 hours",
      "endsWhen": "You no longer interact with outcasts or your Charisma is reduced; it also ends on a long rest.",
      "charges": "Unlimited, as the recipe can be used multiple times."
    },
    "priceReason": "The price reflects the rare ingredients and the labor of the Star Rebels in crafting this special snack.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T18:56:51.378012+00:00",
    "aiReviewedAt": "2026-07-23T18:56:51.378012+00:00",
    "aiReviewVersion": 1
  },
  "team_star_sticker_application_service": {
    "id": "team_star_sticker_application_service",
    "name": "Team Star Sticker Application Service",
    "description": "Team Star's Sticker Application Service can transform your gear into a walking highlight reel. Each application of five stickers grants you +1 to one specific check per day, chosen at the time of application. However, in rainy conditions, these stickers become less reliable, providing only disadvantage on checks made while in water. The result is that your gear looks like it was straight out of a teenager's dream notebook.",
    "category": "services",
    "price": 500,
    "icon": "⭐",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Sticker Boost",
      "Rainy Disadvantage"
    ],
    "vendor": "team_star",
    "shippedBy": "Sticker Sheet Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sticker Boost",
        "rules": "Apply the service to apply five stickers, each granting +1 to one specific check per day. This effect is instantaneous and lasts until the end of your next long rest."
      },
      {
        "title": "Rainy Disadvantage",
        "rules": "While in water or during a rainstorm, you are at disadvantage on checks made with any skill that uses the gear to which the stickers were applied. This effect persists for 1 hour after leaving the water or stopping the rain."
      }
    ],
    "levelRequirementReason": "This service is suitable for beginners and those who need a bit of extra flair without the complexity.",
    "vendorReason": "Team Star Decal Shop specializes in turning ordinary gear into extraordinary, making their services ideal for all adventurers.",
    "shippingDetail": "Ships within 3 days of purchase and includes a complimentary rainproof bag to protect your stickers until installation.",
    "usage": {
      "activation": "A bonus action is required to apply the service, which lasts for one long rest.",
      "duration": "Instantaneous effect, duration per sticker boost is until next long rest; disadvantage lasts 1 hour after leaving water or stopping rain.",
      "endsWhen": "The effect ends when the gear is cleaned of stickers in water or at the start of a new long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects a balance between utility and whimsy, providing a significant boost for a reasonable cost.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T18:56:47.607330+00:00",
    "aiReviewedAt": "2026-07-23T18:56:47.607330+00:00",
    "aiReviewVersion": 1
  },
  "team_star_sticker_application_service_premium": {
    "id": "team_star_sticker_application_service_premium",
    "name": "Team Star Sticker Application (Premium)",
    "description": "The Team Star Sticker Application (Premium) allows you to apply up to ten glittering, waterproof stickers that each grant a +1 bonus per day to a specific ability check or skill roll of your choice. These stickers are so vibrant and detailed that they seem to dance in the light, drawing attention wherever you go, which can be both an asset and a drawback depending on the situation. The decals are made by Team Star Premium Decals, known for their meticulous craftsmanship and unique designs. Applying them is as simple as pressing down, yet they last precisely 14 days before peeling off cleanly.",
    "category": "premium",
    "price": 500,
    "icon": "⭐",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Waterproof Stickers",
      "Bonus to Ability Checks"
    ],
    "vendor": "team_star",
    "shippedBy": "Express Sticker Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sticker Application",
        "rules": "As a bonus action, you can apply one sticker. The sticker grants a +1 bonus on your next ability check or skill roll of your choice, which lasts until the start of your next turn."
      },
      {
        "title": "Waterproof Durability",
        "rules": "The stickers are waterproof and last for 14 days before they peel off cleanly. They do not provide any benefit after this duration."
      }
    ],
    "levelRequirementReason": "This item is suitable for all levels as it provides a simple, yet effective way to enhance your performance in specific tasks.",
    "vendorReason": "Team Star Premium Decals are renowned for their high-quality stickers, making them the perfect vendor for this product.",
    "shippingDetail": "Delivered within a week via Express Sticker Post. Ensure you check your mailbox daily as these stickers can be easily misplaced.",
    "usage": {
      "activation": "Bonus action to apply one sticker",
      "duration": "Until the start of your next turn after application",
      "endsWhen": "The sticker is removed or peels off at the end of 14 days",
      "charges": "Unlimited uses"
    },
    "priceReason": "Given its limited duration and unique design, this item strikes a fair balance in terms of price.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T18:57:13.037383+00:00",
    "aiReviewedAt": "2026-07-23T18:57:13.037383+00:00",
    "aiReviewVersion": 1
  },
  "team_star_sticker_collection_service": {
    "id": "team_star_sticker_collection_service",
    "name": "Team Star Sticker Collection Service",
    "description": "The Team Star Sticker Collection Service arrives in a vibrant, custom box adorned with stars and motivational quotes. Each sticker not only boosts your inspiration but also adds a pop of color to your gear, making it more inspiring than ever. These stickers are handcrafted by passionate fans who believe in the power of positive reinforcement. They peel off when exposed to water or rain, ensuring they last through dry conditions.",
    "price": 500,
    "icon": "⭐",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Inspiration Boost",
      "Gear Decoration"
    ],
    "vendor": "team_star_base",
    "shippedBy": "Sticker Sheet Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Inspiration Boost",
        "rules": "When applied as a bonus action, the sticker provides +1 inspiration point for one hour. The effect ends if the wearer uses more than their available inspiration points in a single combat encounter."
      },
      {
        "title": "Gear Decoration",
        "rules": "Each set of stickers can be placed on any piece of gear to enhance its appearance and mood, granting a +1 bonus to Charisma (Performance) checks made while wearing the decorated item. This effect lasts until the next time you rest."
      }
    ],
    "levelRequirementReason": "The stickers are designed for adventurers starting their journey, providing immediate motivational support.",
    "vendorReason": "Team Star Base is known for its close ties with fans and offers items that reflect the community's spirit.",
    "shippingDetail": "Ships within a week, typically arrives faster if purchased in bulk.",
    "usage": {
      "activation": "Bonus action to apply or remove stickers",
      "duration": "One hour for inspiration boost; one day for gear decoration effect",
      "endsWhen": "Effect ends when the wearer uses more than their available inspiration points or rests, respectively",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the unique craftsmanship and motivational value of these stickers.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T18:56:59.260399+00:00",
    "aiReviewedAt": "2026-07-23T18:56:59.260399+00:00",
    "aiReviewVersion": 1
  },
  "telepathic_communicator": {
    "id": "telepathic_communicator",
    "name": "Telepathic Communicator (Device)",
    "description": "The Telepathic Communicator hums with a soft, pulsing light that flickers between hues of blue and violet. Crafted by Psi-Link Corp from advanced neural fibers and platinum, this device allows for mind-to-mind communication across planetary distances. Encryption ensures privacy during conversations, and its range is limited only by the curvature of the planet, making it an indispensable tool for those who require absolute secrecy and reach in their communications.",
    "price": 590000,
    "icon": "🧠",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Unlimited Range",
      "Encryption"
    ],
    "vendor": "mind_net",
    "shippedBy": "Neural Implant Express",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Unlimited Range",
        "rules": "The communicator allows users to communicate telepathically with anyone else wearing one, regardless of distance. The effect is instantaneous upon activation and ends when the connection is severed by either party."
      },
      {
        "title": "Encryption",
        "rules": "All communications are encrypted using a unique code generated at the start of each session. This ensures that even if intercepted, the message remains unreadable without the proper decryption key, which is stored in the communicator's memory and can be accessed by its owner."
      }
    ],
    "levelRequirementReason": "This device requires a high degree of mental discipline to operate effectively over such long distances.",
    "vendorReason": "Mind Net specializes in advanced neural and telepathic technology, making it the premier vendor for the Telepathic Communicator.",
    "shippingDetail": "Delivered via a specialized courier that ensures the device's delicate components are not damaged during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The connection is severed by either party or if one of the communicators is destroyed.",
      "charges": "Unlimited, but requires recharging after extended use."
    },
    "priceReason": "The device's advanced technology and specialized materials justify its price, making it a godly rarity in the D&D market.",
    "priceOriginal": 540000,
    "priceReviewedAt": "2026-07-23T18:57:16.637572+00:00",
    "aiReviewedAt": "2026-07-23T18:57:16.637572+00:00",
    "aiReviewVersion": 1
  },
  "teleport_away_from_danger_leaves": {
    "id": "teleport_away_from_danger_leaves",
    "name": "Wario's Wafting Warp Whistle",
    "description": "Wario's Wafting Warp Whistle is a peculiar instrument crafted from gleaming brass and adorned with Wario's signature smile. When you blow it as a reaction to imminent danger, you teleport up to 30 feet in any direction the Dungeon Master designates. The whistle also leaves behind a noxious garlic cloud that fills a 15-foot radius; creatures within must succeed on a DC 12 Constitution saving throw or be poisoned for one round. Though it's quirky and unpredictable, the whistle occasionally warps you into an inconvenient spot—most notably Wario’s bathroom! This misadventure leaves you disoriented and embarrassed.",
    "category": "equipment",
    "price": 2400,
    "icon": "🎺",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Teleportation with DM-Determined Direction",
      "Noxious Garlic Cloud"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud (Priority)",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Teleportation with DM-Determined Direction",
        "rules": "You can activate the whistle as a reaction to an attack or effect that would deal damage. Upon activation, you teleport up to 30 feet in any direction chosen by the Dungeon Master. The target of your teleport is prone and takes no damage from the triggering attack or effect."
      },
      {
        "title": "Noxious Garlic Cloud",
        "rules": "The whistle emits a 15-foot radius cloud of garlic fumes when activated, which lasts for one round (6 turns). Any creature within this area must succeed on a DC 12 Constitution saving throw or be poisoned. The poison effect imposes the Poisoned condition until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The whistle's unpredictable nature and teleportation mechanics demand a basic grasp of the rules and some experience in combat.",
    "vendorReason": "Wario Land Transportation, known for its eccentric inventions, naturally stocks this whimsical item.",
    "shippingDetail": "The whistle is carefully packaged to ensure it arrives in perfect condition and is shipped via priority courier.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "Upon the start of your next turn, if you are not within the noxious cloud or have not been teleported into a wall.",
      "charges": "Single-use with a long rest recharge"
    },
    "priceReason": "The item's rare and unpredictable nature justifies its moderate price in experience points.",
    "priceOriginal": 21500,
    "priceReviewedAt": "2026-07-23T18:57:07.709126+00:00",
    "aiReviewedAt": "2026-07-23T18:57:07.709126+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_abyssal_chomp_catalyst": {
    "id": "teyvat_abyssal_chomp_catalyst",
    "name": "Abyssal Chomp Catalyst",
    "description": "Forged from the corrupted remains of a legendary Chain Chomp in Teyvat’s depths, this Abyssal Chomp Catalyst channels its malevolent essence into a devastating weapon. When activated, the catalyst unleashes a torrent of acidic spores that corrode armor and flesh alike, followed by a bone-crushing impact that leaves foes staggering. Each use saps the wielder's resolve, weakening their mind to the point where they are susceptible to hallucinations.",
    "category": "equipment",
    "price": 7200,
    "icon": "🐉",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Acidic Spore Burst",
      "Bone-Shattering Impact"
    ],
    "vendor": "teyvat",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Acidic Spore Burst",
        "rules": "When activated, the catalyst releases a burst of acidic spores in a 15-foot cone. Each creature in this area takes 8d6 acid damage and must make a DC 17 Dexterity saving throw or be poisoned for 1 minute."
      },
      {
        "title": "Bone-Shattering Impact",
        "rules": "Follows the burst of spores, the catalyst delivers an impact that reduces all creatures in its vicinity by 50% movement speed for 2 rounds. The wielder must succeed on a DC 17 Constitution saving throw or be affected by hallucinatory effects for 30 seconds."
      }
    ],
    "levelRequirementReason": "The catalyst's corrosive and debilitating effects demand a seasoned soldier to manage its risks.",
    "vendorReason": "Teyvat has long traded in exotic weapons, making it the ideal vendor for this corrupted artifact.",
    "shippingDetail": "Ships via Warp Whistle Transit, known for its reliability and speed across Teyvan territories.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after 3 uses or when the wielder is incapacitated",
      "charges": "3"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its epic rarity and potent effects.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T18:57:14.954220+00:00",
    "aiReviewedAt": "2026-07-23T18:57:14.954220+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_ancient_vision": {
    "id": "teyvat_ancient_vision",
    "name": "The Internet Cursed Vision Holder",
    "description": "The Internet Cursed Vision Holder is a sleek, glowing device with an obsidian frame and a digital display that flickers with cryptic symbols. Crafted by Mages Guild Portal from ancient arcane materials, it allows its wielder to perceive the hidden algorithms and patterns of The Internet's inner workings. However, prolonged use saps the mind, leading to temporary madness after 30 minutes unless you possess another Vision Holder for protection.",
    "price": 41000,
    "icon": "🌐",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Hidden Truths",
      "Mental Infection"
    ],
    "vendor": "teyvat",
    "shippedBy": "Express Couriers of the Mages Guild",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Truths",
        "rules": "As a bonus action, the wielder can activate the device to gain advantage on Insight checks against entities that manipulate information in The Internet. This effect lasts for 10 minutes and can be used once per long rest."
      },
      {
        "title": "Mental Infection",
        "rules": "After 30 minutes of continuous use, the wielder must make a DC 15 Wisdom saving throw or suffer from temporary madness (disadvantage on all rolls) for 24 hours. Possession of another Vision Holder can mitigate this effect."
      }
    ],
    "levelRequirementReason": "The device requires a basic understanding of The Internet's mechanics, accessible to adventurers of any level.",
    "vendorReason": "Teyvat is well-known for its diverse array of arcane and technological artifacts, including those that interact with The Internet.",
    "shippingDetail": "Special handling required due to the device's delicate nature; expedited shipping available.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 minutes",
      "endsWhen": "Effect ends upon completion or if a second Vision Holder is used",
      "charges": "Unlimited, but limited by long rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique utility and the risk it poses.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T18:57:24.171139+00:00",
    "aiReviewedAt": "2026-07-23T18:57:24.171139+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_archon_battle_shirt": {
    "id": "teyvat_archon_battle_shirt",
    "name": "Archon Battle Shirt",
    "description": "The Archon Battle Shirt is a garment of indigo and gold, its weave interwoven with threads that shimmer like the stars at dawn. Crafted by the Bullet Bill Express, it is said to have been worn in battles against the Archons themselves. This shirt grants the wearer 50% damage reduction from elemental attacks and increases armor penetration by 10%. When activated, it can cause temporary confusion in foes within a 10-foot radius for up to one minute.",
    "category": "equipment",
    "price": 7300,
    "icon": "⚔",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Damage Reduction",
      "Increased Armor Penetration"
    ],
    "vendor": "teyvat",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Elemental Defense",
        "rules": "When worn, the Archon Battle Shirt reduces damage from elemental attacks by 50%. This effect lasts until the start of your next turn."
      },
      {
        "title": "Confusion Aura",
        "rules": "Activating the shirt causes a momentary disorientation in enemies within a 10-foot radius for up to one minute. The effect requires an action and ends when you take damage or if the duration expires."
      }
    ],
    "levelRequirementReason": "The Archon Battle Shirt is crafted with powerful enchantments that require attunement by a vision holder, making it suitable for those of at least eighth level.",
    "vendorReason": "Teyvat, being the heart of battles against the Archons, stocks this iconic piece to honor its brave defenders.",
    "shippingDetail": "This item is shipped express with a courier who ensures it reaches its destination in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Up to one minute per day",
      "endsWhen": "You take damage or the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The Archon Battle Shirt is a rare, well-crafted piece with powerful enchantments that justify its moderate price in XP.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T18:57:41.558721+00:00",
    "aiReviewedAt": "2026-07-23T18:57:41.558721+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_archon_forged_ring": {
    "id": "teyvat_archon_forged_ring",
    "name": "Archon Forged Ring",
    "description": "The Archon Forged Ring gleams with a molten core that pulses with elemental energy. Crafted from the very heart of an ancient Archon, this ring grants you resilience against its domain's most potent attacks. When worn, it enhances your vitality, increasing your maximum hit points by 20% and allowing you to deal +1d6 bonus damage to enemies within a 3-meter radius. Its hidden power lies in its attunement with an Archon’s vision, which occasionally reveals secret paths to the Doughnut Edge, a legendary haven for those who dare to explore.",
    "category": "equipment",
    "price": 41000,
    "icon": "⚔",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Elemental Resilience",
      "Enhanced Vitality"
    ],
    "vendor": "teyvat",
    "shippedBy": "King of Tombs with a 24 hour delivery guarantee (if you’re lucky)",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Elemental Resilience",
        "rules": "While attuned with the Archon's vision, you gain immunity to elemental reaction damage from any source related to the Archon’s domain. This effect persists as long as you are wearing and attuned to the ring."
      },
      {
        "title": "Enhanced Vitality",
        "rules": "The ring increases your maximum hit points by 20% while worn, and grants an additional +1d6 bonus damage on all melee attacks within a 3-meter range. This effect is passive and does not require activation."
      }
    ],
    "levelRequirementReason": "The ring's attunement with the Archon’s vision requires a minimum level to fully comprehend its power.",
    "vendorReason": "Teyvat, being the heart of the Archon’s domain, is the ideal vendor for this legendary artifact.",
    "shippingDetail": "Due to the ring's volatile nature, it must be shipped via the King of Tombs to ensure safe and swift delivery.",
    "usage": {
      "activation": "Passive effect when attuned",
      "duration": "Permanent while attuned",
      "endsWhen": "Detaching from your hand or losing attunement with an Archon’s vision",
      "charges": "Unlimited"
    },
    "priceReason": "The ring's attunement and its connection to the Archon’s domain justify this fair value.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-23T18:57:45.161355+00:00",
    "aiReviewedAt": "2026-07-23T18:57:45.161355+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_blooded_beehive_essence": {
    "id": "teyvat_blooded_beehive_essence",
    "name": "Blooded Beehive Essence",
    "description": "A vial of crimson nectar sealed with the last honey of a hive that once guarded the sacred heart of Teyvat, this essence is a relic from the Toadettes' harrowing relief missions. When consumed, it grants a fleeting burst of courage and healing, but also compels the imbiber to obsess over the hive’s ancient purpose, causing time to warp around them for a brief moment. The nectar's power is as fleeting as it is potent, offering respite and obsession in equal measure.",
    "price": 68,
    "icon": "🐝",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Healing Burst",
      "Temporal Distortion"
    ],
    "vendor": "teyvat",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Burst",
        "rules": "When consumed, the user regains 200 hit points and gains a +10 bonus to attack rolls and damage for 10 seconds. This effect has no save DC but is limited to once per long rest."
      },
      {
        "title": "Temporal Distortion",
        "rules": "The essence temporarily distorts time around the user, causing a 3-second period of slowed perception for both the imbiber and their immediate surroundings. This effect does not have a save DC and ends immediately upon consuming another dose or when the user's next turn begins."
      }
    ],
    "levelRequirementReason": "This essence is accessible to lower-level adventurers, as it provides a potent burst of power without requiring extensive training.",
    "vendorReason": "Teyvat, being the primary source for such relics, ensures that this essence is available to all who seek it.",
    "shippingDetail": "The essence must be shipped with care and arrives within three days of purchase.",
    "usage": {
      "activation": "Eaten as a normal consumable",
      "duration": "Instantaneous, but effects last for the specified duration",
      "endsWhen": "Upon consuming another dose or at the start of the user's next turn",
      "charges": "Unlimited"
    },
    "priceReason": "The essence combines potent healing and a unique temporal effect, making it valuable for adventurers facing both physical and time-based challenges.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-23T18:58:00.731952+00:00",
    "aiReviewedAt": "2026-07-23T18:58:00.731952+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_bowser_kid_suit": {
    "id": "teyvat_bowser_kid_suit",
    "name": "Bowser Kid Suit",
    "description": "The Bowser Kid Suit is a ceremonial robe crafted by rakasha spirit walkers, imbued with toadblood that grants an heir temporary immunity to elemental reactions. When worn during succession trials, it allows the wearer to summon a spectral Bowser child for one turn, providing both protection and a fearsome ally in combat. The suit increases critical hit chance by 25% and triggers a rare 5% chance to summon the spirit of the Cheep-Cheep Accords, a whimsical aquatic guardian.",
    "category": "equipment",
    "price": 41000,
    "icon": "👑",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Elemental Immunity",
      "Spectral Bowser Child"
    ],
    "vendor": "teyvat",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Elemental Immunity",
        "rules": "The wearer gains temporary immunity to all elemental reactions for the duration of one short rest. This effect can be activated as a bonus action and lasts until the end of their next turn."
      },
      {
        "title": "Spectral Bowser Child",
        "rules": "By using an action, the wearer can summon a spectral Bowser child that acts independently for 1 round. The spectral creature provides battlefield support but cannot attack. This effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "The suit's power and complexity require a high-level character with experience in ceremonial magic.",
    "vendorReason": "Teyvat, as the primary trading hub for rakasha spirit walkers, is the natural distributor of such rare and powerful heirlooms.",
    "shippingDetail": "The suit must be delivered by Kremling Smuggle Run, ensuring its secrecy and safe passage through restricted areas.",
    "usage": {
      "activation": "Bonus action to activate Elemental Immunity; Action to summon Spectral Bowser Child",
      "duration": "Elemental Immunity lasts until the end of their next turn; Spectral Bowser Child acts for 1 round",
      "endsWhen": "The effects are dismissed by the wearer at the end of their turn or when they take damage",
      "charges": "Unlimited, but limited to once per long rest"
    },
    "priceReason": "The suit's rarity and the specialized crafting required justify its moderate price point.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T18:57:38.792293+00:00",
    "aiReviewedAt": "2026-07-23T18:57:38.792293+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_cursed_treasure_box": {
    "id": "teyvat_cursed_treasure_box",
    "name": "Cursed Treasure Box",
    "description": "The Cursed Treasure Box is a sinister artifact crafted by the Onyx Hand during Teyvat’s Nightfall Festival. It appears as an ornate, dark wood box with intricate carvings of vampiric figures. When opened, it reveals five random items from either Teyvat or Faerûn, each with a 50% chance to be either a powerful boon or a devastating curse. If opened during the Boos event, it is guaranteed to summon a vampire. Non-vampires opening the box trigger a trap that inflicts a debilitating curse upon them.",
    "price": 7300,
    "icon": "💀",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Random Rewards and Curses",
      "Boo's Event Trigger"
    ],
    "vendor": "teyvat",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Random Rewards and Curses",
        "rules": "When opened, this box reveals five random items from Teyvat or Faerûn. Each item has a 50% chance to be either beneficial or cursed. The effects of the revealed items are determined immediately upon opening."
      },
      {
        "title": "Boo's Event Trigger",
        "rules": "If opened during the Boos event, the box is guaranteed to summon a vampire. Non-vampires triggering this effect must succeed on a DC 15 Dexterity saving throw or be cursed with vampiric traits for 24 hours."
      }
    ],
    "levelRequirementReason": "Opening the Cursed Treasure Box requires an understanding of its dangers and the ability to handle powerful, possibly cursed items.",
    "vendorReason": "Teyvat is a hub for exotic goods, including rare artifacts like the Cursed Treasure Box, especially during their festivals.",
    "shippingDetail": "Delivered via the Shy Guy Express, known for its unpredictable and often delayed service, adding an air of mystery to the delivery.",
    "usage": {
      "activation": "Activate by opening the box during a Boos event or when specific conditions are met.",
      "duration": "Instantaneous reveal; effects last until used up or dispelled.",
      "endsWhen": "The revealed items' effects end once used, and the box can be resealed for future use.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Cursed Treasure Box's rarity, unpredictable nature, and the potential risk of curses make it a premium item worth 1000 XP.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T18:57:56.545958+00:00",
    "aiReviewedAt": "2026-07-23T18:57:56.545958+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_echo_gear": {
    "id": "teyvat_echo_gear",
    "name": "Echo Gear",
    "description": "Echo Gear, a set of meticulously crafted armor and weapons that amplify your voice during elemental reactions. Its iron components resonate like the clangs of a forges heart, enhancing your performance in battle. With each clear and emotionally charged chant, you can trigger an echo effect, duplicating the power of your elemental reaction and amplifying its damage by 30%. The gear is attuned with vision holders who have a profound connection to their element, making it a rare find from the Iron Legion.",
    "price": 7300,
    "icon": "🎵",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Voice Amplification",
      "Echo Reaction"
    ],
    "vendor": "teyvat",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Voice Amplification",
        "rules": "When you use this set during an elemental reaction, your voice amplifies, boosting the damage of that reaction by 30%. This effect can only be used once per battle."
      },
      {
        "title": "Echo Reaction",
        "rules": "After a successful vocal chant, there is a 10% chance to trigger an echo effect. The echo duplicates the elemental reaction's power and damage output for a second time during the same round. This effect ends when you perform another action or if your voice falters."
      }
    ],
    "levelRequirementReason": "The gear requires attunement from characters with a deep understanding of their elemental prowess, making level 8 a reasonable requirement.",
    "vendorReason": "Teyvat is renowned for its master armorers and weapon smiths who have the skill to craft such powerful yet delicate items.",
    "shippingDetail": "Ships with Bullet Bill Express, known for their swift delivery of rare and precious items within the region.",
    "usage": {
      "activation": "Activates on use during elemental reactions.",
      "duration": "Instantaneous; ends when a new action is taken or voice falters.",
      "endsWhen": "On performing another action or if your voice falters.",
      "charges": "Unlimited, as long as the conditions are met."
    },
    "priceReason": "The Echo Gear's rarity and unique properties justify its price of 1000 XP. It requires attunement and is crafted by a prestigious organization known for their exceptional craftsmanship.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T18:58:12.167650+00:00",
    "aiReviewedAt": "2026-07-23T18:58:12.167650+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_elemental_tome": {
    "id": "teyvat_elemental_tome",
    "name": "Elemental Tome of the Void",
    "description": "The Elemental Tome of the Void is a leather-bound tome adorned with arcane runes that shimmer with the power of all known elemental forces. Crafted in Teyvat, it channels Faerûn’s arcane traditions and binds them within its pages. Upon activation, it grants the wielder mastery over any element, enhancing their abilities in archon-related quests by 2d6. When used as a reaction, it grants an additional +3d6 bonus to damage rolls for that turn.",
    "price": 41000,
    "icon": "📜",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Elemental Mastery",
      "Enhanced Damage"
    ],
    "vendor": "teyvat",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Elemental Mastery",
        "rules": "Activates as a bonus action. The wielder gains control over any element, providing +2d6 proficiency to all archon-related abilities for the duration of the encounter."
      },
      {
        "title": "Enhanced Damage",
        "rules": "Activation on reaction grants an additional +3d6 damage bonus to the next attack or spell cast. Ends when the reaction is used again, recharging after a long rest."
      }
    ],
    "levelRequirementReason": "Requires significant magical proficiency and control to harness its full potential.",
    "vendorReason": "Teyvat's Arcane Vault specializes in rare and powerful artifacts from both Teyvat and Faerûn, making the Elemental Tome a fitting addition.",
    "shippingDetail": "Delivered through an encrypted courier service to ensure the tome’s magical integrity remains intact during transit.",
    "usage": {
      "activation": "Bonus action and reaction",
      "duration": "Encounter duration for Elemental Mastery; +3d6 on next attack or spell cast with Enhanced Damage",
      "endsWhen": "Reaction used again, long rest to recharge",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a legendary item that provides significant but not game-breaking benefits.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-23T18:58:40.927002+00:00",
    "aiReviewedAt": "2026-07-23T18:58:40.927002+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_eyeshield_of_kivotos": {
    "id": "teyvat_eyeshield_of_kivotos",
    "name": "Eyeshield of Kivotos",
    "description": "The Eyeshield of Kivotos is a ceremonial eye-guard crafted from polished obsidian and adorned with enigmatic sigils. Worn by academy students during rigorous combat drills, it enhances reflexes in moments of crisis. This guardian of the eyes not only grants +15% dodge chance against ranged attacks but also temporarily sharpens vision, boosting awareness by 25%. However, prolonged use beyond half an hour may induce fleeting hallucinations as the eye-guard's arcane enchantment begins to falter.",
    "category": "equipment",
    "price": 500,
    "icon": "🎭",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Sharpens Vision",
      "Dodges Ranged Attacks"
    ],
    "vendor": "teyvat",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sharpens Vision",
        "rules": "When activated, this eyeshield grants a +15 bonus on Dexterity (Stealth) checks and increases the wearer's passive Perception by 25 for 1 minute. This effect ends if the user takes any action other than moving or resting."
      },
      {
        "title": "Dodges Ranged Attacks",
        "rules": "The eyeshield provides a +10 bonus to AC against ranged weapon attacks while active, up to three times per long rest. Once expended, it requires 8 hours of focused meditation and a component costing 50 XP to recharge."
      }
    ],
    "levelRequirementReason": "Beginners at the academy require this item for their early combat drills.",
    "vendorReason": "Teyvat's extensive network of vendors supplies students with essential gear for their training.",
    "shippingDetail": "Delivered by Dry Bones Dead Drop, known for their reliable and secretive couriers.",
    "usage": {
      "activation": "Activates as a bonus action.",
      "duration": "1 minute or until the user takes any action other than moving or resting.",
      "endsWhen": "The user takes an action other than moving or resting.",
      "charges": "3 uses per long rest, requiring 8 hours of focused meditation and 50 XP to recharge."
    },
    "priceReason": "Balanced as a useful but not overpowered item for early-stage combat training.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:58:13.779079+00:00",
    "aiReviewedAt": "2026-07-23T18:58:13.779079+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_forged_shield_of_the_sunken": {
    "id": "teyvat_forged_shield_of_the_sunken",
    "name": "Shield of the Sunken Archives",
    "description": "The Shield of the Sunken Archives is a relic forged from ancient Teyvan steel, its surface etched with forgotten glyphs that whisper tales of lost truths. Wielded by those who dare to step into the void between dimensions, it absorbs arcane backlash and reflects enemy spells with a silent, golden flash. Those attuned to this shield report visions of their past selves in its mirror-like surface, but only when they are still during combat.",
    "category": "equipment",
    "price": 2500,
    "icon": "🌅",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Absorbs Arcane Backlash",
      "Reflects Enemy Spells"
    ],
    "vendor": "teyvat",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Absorbs Arcane Backlash",
        "rules": "When the wielder takes an arcane damage spell or effect, it reduces the damage by 3d4 and grants temporary immunity to elemental status effects for 1 minute. This effect cannot be used more than once per long rest."
      },
      {
        "title": "Reflects Enemy Spells",
        "rules": "As a reaction when hit by an arcane spell or effect, the shield reflects it back towards the caster with a silent golden flash. The caster must make a DC 15 Wisdom saving throw or be stunned for 1 round."
      }
    ],
    "levelRequirementReason": "Requires attunement and a certain level to wield this powerful relic effectively.",
    "vendorReason": "Teyvan artifacts are known for their mystic power, and the Shield of the Sunken Archives is no exception.",
    "shippingDetail": "Ships within a week via Koopa Express, ensuring safe arrival with ancient Teyvan seals intact.",
    "usage": {
      "activation": "Reacts automatically when hit by an arcane spell or effect",
      "duration": "Instantaneous and resets after the encounter",
      "endsWhen": "When the wielder takes another arcane backlash or rests for a long rest",
      "charges": "Unlimited, but only one use per short rest"
    },
    "priceReason": "Balanced at this price to reflect its rarity and the risk of using it in combat.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T18:58:15.337163+00:00",
    "aiReviewedAt": "2026-07-23T18:58:15.337163+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_garlic_golem_heart": {
    "id": "teyvat_garlic_golem_heart",
    "name": "Garlic Golem Heart",
    "description": "The Garlic Golem Heart is a peculiar relic crafted by Lakitu Drones using fragments of an ancient undead garlic golem. This heart, when consumed, grants a character temporary invulnerability to fear and panic for the duration of combat. Its scent spreads like wildfire, reducing enemy stealth and making them more visible to allies. Only characters with a Wario Land connection can harness its power, as it channels the essence of a legendary undead guardian of garlic.",
    "price": 500,
    "icon": "🍃",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Invulnerability to Fear",
      "Reduce Enemy Stealth"
    ],
    "vendor": "teyvat",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invulnerability to Fear",
        "rules": "When consumed during combat, the user gains immunity to fear and panic effects until the end of their next turn. This effect does not stack with other similar immunities."
      },
      {
        "title": "Reduce Enemy Stealth",
        "rules": "For 2 turns after consumption, any enemies within a 10-foot radius suffer a -2 penalty to Dexterity (Stealth) checks and passive Perception. They also have disadvantage on saving throws against being detected by scent."
      }
    ],
    "levelRequirementReason": "The Garlic Golem Heart's connection to ancient undead lore requires a character with basic understanding of the Wario Land mythology.",
    "vendorReason": "Teyvat, being a market hub for strange and magical items, occasionally stocks unique relics like this one.",
    "shippingDetail": "Ships within the same week of purchase, with a courier delivery ensuring safe handling of the delicate item.",
    "usage": {
      "activation": "Consumed as an action during combat.",
      "duration": "Until the end of the user's next turn.",
      "endsWhen": "The effect ends when the user is no longer in combat or upon taking damage.",
      "charges": "Unlimited, recharging after a short rest."
    },
    "priceReason": "Balanced for its utility and rarity, this relic provides significant tactical advantage without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:58:23.198038+00:00",
    "aiReviewedAt": "2026-07-23T18:58:23.198038+00:00",
    "aiReviewVersion": 1
  }
};
