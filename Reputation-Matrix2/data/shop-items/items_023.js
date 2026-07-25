// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_023 = {
  "inkwell_of_truth": {
    "id": "inkwell_of_truth",
    "name": "Inkwell of Truth",
    "description": "The Inkwell of Truth, a sleek and ornate black inkwell crafted from polished onyx, exudes an almost palpable sense of truthfulness. It is said to be imbued with the spirit of a long-dead scholar who sought only honesty. Any text written within its depths cannot contain falsehoods; if you attempt deceit, the ink itself turns a sickly red and burns your skin, a warning from the ancient scholar's soul. Documents penned with this ink are considered legally binding in any court of law.",
    "category": "curiosities",
    "price": 5300,
    "icon": "🖋️",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Ink Cannot Lie",
      "Red Ink for Falsehood"
    ],
    "vendor": "black_ink",
    "shippedBy": "Obsidian Stand",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ink Cannot Lie",
        "rules": "When used to write, the ink ensures that no falsehoods are recorded. If you attempt to lie while writing, the ink turns a vibrant red and causes searing pain as it burns your hand."
      },
      {
        "title": "Magically Binding Documents",
        "rules": "Any document written with this ink is considered legally binding in any court of law. This effect lasts until the ink dries completely."
      }
    ],
    "levelRequirementReason": "The Inkwell of Truth is accessible to all, as its primary function revolves around honesty rather than complex spellcasting.",
    "vendorReason": "Black Ink is renowned for their collection of magical curiosities and rare artifacts, making the Inkwell of Truth a fitting addition to their stock.",
    "shippingDetail": "The inkwell arrives safely in its custom onyx box, ensuring it reaches you unharmed and intact.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "Until the ink dries completely",
      "endsWhen": "The ink dries or the document is completed",
      "charges": "Unlimited"
    },
    "priceReason": "The Inkwell of Truth, while not a high-level item, offers a unique and powerful feature that cannot be replicated easily.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T07:16:08.937727+00:00",
    "aiReviewedAt": "2026-07-22T07:16:08.937727+00:00",
    "aiReviewVersion": 1
  },
  "innocent_certificate": {
    "id": "innocent_certificate",
    "name": "Certificate of Innocence",
    "description": "This tattered, crayon-drawn certificate proclaims 'I didn't do it!' in bold red letters. Crafted from parchment that bears faint traces of ancient ink, it's a relic from a bygone era when honesty was... less strictly enforced. The document is said to have been signed by a mischievous ghost who roams the halls of old courthouses, offering its signature as a charm for those accused of minor infractions.",
    "category": "curiosities",
    "price": 49,
    "icon": "📜",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "+1 Persuasion vs Guards (who have a sense of humor)",
      "Not legally binding"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Document Tube",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Persuasion",
        "rules": "When used, this certificate provides a +1 bonus to Persuasion checks against guards who possess a sense of humor. This effect is limited to once per day."
      },
      {
        "title": "Not Legally Binding",
        "rules": "The document has no bearing in any court of law and cannot be used as evidence. It merely serves as a charming, albeit ineffective, defense against accusations."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to get a taste of the game's social interactions without demanding too much from their character level.",
    "vendorReason": "The Rogue Port Black Market caters to adventurers seeking unique and often questionable items, making it an ideal spot for this whimsical certificate.",
    "shippingDetail": "Ships quickly via the Document Tube, a magical postal service known for its speed and reliability in delivering important documents.",
    "usage": {
      "activation": "As an action, the user must present the certificate to a guard.",
      "duration": "Instantaneous effect; the bonus applies once per day.",
      "endsWhen": "The daily use limit is reached or when used against a guard without a sense of humor.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The certificate's value lies in its unique historical charm and the limited but effective social benefit it offers, making it worth a significant amount of XP.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T07:16:08.808222+00:00",
    "aiReviewedAt": "2026-07-22T07:16:08.808222+00:00",
    "aiReviewVersion": 1
  },
  "internet_access_scroll": {
    "id": "internet_access_scroll",
    "name": "Scroll of Internet Access",
    "description": "The Scroll of Internet Access is a brittle parchment scroll inscribed with arcane runes and symbols. When unrolled, it opens a chaotic portal to a dimension where cat videos proliferate endlessly and arguments rage without end. This scroll grants one the power to ask questions to 'The Internet,' but beware: the answers are fleeting and often nonsensical, requiring a DC 15 Intelligence saving throw or you risk being sucked into the vortex of distraction for an hour.",
    "category": "consumables",
    "price": 1200,
    "icon": "📜",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Temporal Portal",
      "Chaotic Distraction"
    ],
    "vendor": "Internet",
    "shippedBy": "Downloaded Data Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Portal",
        "rules": "Activates as an action. Opens a portal to 'The Internet,' allowing you to ask one question using the rules of Contact Other Plane, but the entity contacted is unpredictable and may provide answers that are nonsensical or chaotic."
      },
      {
        "title": "Chaotic Distraction",
        "rules": "If you fail your DC 15 Intelligence saving throw, you become distracted for 1 hour. During this time, you have disadvantage on all Wisdom (Perception) checks and must make an additional save every day at dawn or be permanently distracted."
      }
    ],
    "levelRequirementReason": "It is a rare scroll that even lower-level characters can afford, but it requires some basic spellcasting knowledge to activate.",
    "vendorReason": "The Internet itself has the means and chaos to provide such a scroll.",
    "shippingDetail": "Ships instantly via digital transmission. Delivery time is negligible.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (portal open for one question, then closes)",
      "endsWhen": "The scroll's effect ends when the portal closes or if you make another saving throw against distraction.",
      "charges": "One"
    },
    "priceReason": "Balanced to provide a unique and chaotic experience without breaking game balance.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T07:15:54.392035+00:00",
    "aiReviewedAt": "2026-07-22T07:15:54.392035+00:00",
    "aiReviewVersion": 1
  },
  "internet_ad_blocker_spell": {
    "id": "internet_ad_blocker_spell",
    "name": "Internet Ad Blocker Spell",
    "description": "The Internet Ad Blocker Spell is a compact, rune-engraved amulet that protects its wearer from all forms of magical advertising. When worn, it emits a faint, shimmering barrier that confounds and blocks any attempt to cast spells with an advertizing or sales intent within a 10-foot radius. Detect Magic will now show 'BLOCKED' over these auras, clearly marking them as ineffective. Should you inadvertently block something truly beneficial, the item’s ancient wards may misidentify it; the DM has final say in such matters.",
    "category": "services",
    "price": 270,
    "icon": "🚫",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Blocks all magical advertising within 10 feet",
      "Detect Magic shows 'BLOCKED' for any offending auras"
    ],
    "vendor": "internet",
    "shippedBy": "Pop-up Blocker Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magical Advertising Blockade",
        "rules": "The spell has a radius of 10 feet. It is instantaneous and remains active until the wearer removes it or until a successful Dispel Magic cast by another (save DC 14). The wearer may use an action to remove the spell at will."
      },
      {
        "title": "False Positive Risk",
        "rules": "There’s a small chance (5%) that this item will block beneficial enchantments. If it does, the DM must determine whether the enchantment is truly harmful or merely coincidentally similar in form. The wearer may attempt to discern truth with a successful Arcana check."
      }
    ],
    "levelRequirementReason": "This spell protects against common magical nuisances found in public spaces, requiring no special training.",
    "vendorReason": "The Internet Ad-Blockers Guild specializes in countering digital disturbances and magical sales ploys.",
    "shippingDetail": "Ships via a swift courier who delivers the amulet within one business day of purchase.",
    "usage": {
      "activation": "Instantaneous, activated by putting on or removing the amulet",
      "duration": "Until removed or dispelled",
      "endsWhen": "Removed by wearer or dispelled with Dispel Magic (save DC 14)",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to provide a useful service without being overpowered, this spell is priced at a level that reflects its common utility and protection.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T07:15:57.033111+00:00",
    "aiReviewedAt": "2026-07-22T07:15:57.033111+00:00",
    "aiReviewVersion": 1
  },
  "internet_ancient_seal_fragment": {
    "id": "internet_ancient_seal_fragment",
    "name": "Fragment of Bowsers Prison",
    "description": "The Fragment of Bowsers Prison is a jagged shard of obsidian, bearing faint traces of the ancient seal that once imprisoned the Primordial Wyrm. It radiates an eerie heat, and when exposed to fire or intense light, it may release a burst of primal energy, crackling like lightning within its depths. This relic was crafted by the ancients to reinforce seals against digital intrusions, but its power can also attract unwelcome attention from the Koopa Troop.",
    "price": 5300,
    "icon": "🛡",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Attracts Koopa Troop",
      "Temporal Seal Reinforcement"
    ],
    "vendor": "internet",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Attracts Koopa Troop",
        "rules": "When exposed to fire or intense light, this fragment emits a heat signature that attracts nearby Koopa Troopers. This effect lasts for 1 minute and has a radius of 30 feet. Any Koopa Trooper within the area must succeed on a DC 15 Wisdom saving throw or be distracted by the heat, reducing their effectiveness in combat by half until the end of their next turn."
      },
      {
        "title": "Temporal Seal Reinforcement",
        "rules": "By holding this fragment and speaking its ancient name aloud, you can reinforce digital seals against intrusions for 1 hour. This effect provides a +2 bonus to saving throws against digital intrusion attempts within the area of effect until it is expended."
      }
    ],
    "levelRequirementReason": "The fragment's magic requires a certain level of arcane knowledge and discipline.",
    "vendorReason": "The internet vendor specializes in ancient artifacts found online, including digital relics like this one.",
    "shippingDetail": "Ships via Blooper Express Couriers, known for their reliability and speed.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until expended",
      "endsWhen": "The effect ends when the fragment is destroyed or its duration expires.",
      "charges": "Unlimited"
    },
    "priceReason": "This item's rarity and utility justify a price of 1000 XP.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T07:16:55.470124+00:00",
    "aiReviewedAt": "2026-07-22T07:16:55.470124+00:00",
    "aiReviewVersion": 1
  },
  "internet_blooper_parcel": {
    "id": "internet_blooper_parcel",
    "name": "Blooper Delivery Crate",
    "description": "The Blooper Delivery Crate arrives at your doorstep, a large, ominous crate emblazoned with the mischievous face of a Blooper from The Internet. Inside lies either a bizarre internet sensation or a relic from the Mushroom Kingdom; only time will tell what you’ll find. This delivery is as unpredictable as the whims of Blooper Wetworks, and it may even bring unwanted attention from their enforcers if your neighbors catch sight of its arrival.",
    "price": 1200,
    "icon": "📦",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "May contain a random assortment of internet trends or classic Mario items",
      "Attracts unwanted attention from Blooper Wetworks enforcers"
    ],
    "vendor": "internet",
    "shippedBy": "Blooper Air Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random Contents",
        "rules": "When opened, the crate reveals either an item from The Internet (such as a viral video clip) or an item from the Mushroom Kingdom (like a rare coin). This is determined by rolling a d20; on a roll of 1-15, it's internet-related; on a roll of 16-20, it's from the Mushroom Kingdom. The crate can only be opened once."
      },
      {
        "title": "Unwanted Attention",
        "rules": "If anyone other than the intended recipient views the crate or its contents, you must succeed on a DC 15 Charisma saving throw or face a visit from Blooper Wetworks enforcers who will demand an explanation. This effect lasts for one week."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurers can appreciate the thrill of finding something unexpected, whether it's a viral sensation or a piece of nostalgia.",
    "vendorReason": "Blooper Wetworks is known for its bizarre and unpredictable deliveries, making this crate a popular item among all adventurers who want to see what strange treasures they can find.",
    "shippingDetail": "Delivery is handled by Blooper Air Express, which ensures that the crate arrives at your doorstep with all the secrecy and speed of its reputation.",
    "usage": {
      "activation": "Instantaneous when the intended recipient opens the crate",
      "duration": "One week after unwanted attention is drawn",
      "endsWhen": "The crate's contents are discovered or unwanted attention is resolved",
      "charges": "Unlimited, but can only be opened once"
    },
    "priceReason": "The unpredictable nature and potential for rare finds justify the relatively high price of this item.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:16:30.959750+00:00",
    "aiReviewedAt": "2026-07-22T07:16:30.959750+00:00",
    "aiReviewVersion": 1
  },
  "internet_bluetooth_thermometer": {
    "id": "internet_bluetooth_thermometer",
    "name": "Internet Bluetooth Thermometer",
    "description": "The Internet Bluetooth Thermometer is a sleek device with a glowing blue screen and a Bluetooth icon. It was crafted by the Internet of Things Dept., known for their quirky gadgets that never quite function as intended. While it connects to nothing, this thermometer still provides perfect temperature readings, giving you advantage on cooking checks. However, its constant beeping can give away your position, imposing disadvantage on Stealth checks when cooking with it.",
    "category": "equipment",
    "price": 270,
    "icon": "🌡️",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Perfect temperature readings",
      "Beeps loudly while in use"
    ],
    "vendor": "internet",
    "shippedBy": "Wireless Signal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perfect temperature readings",
        "rules": "You gain advantage on cooking checks. This effect is active as long as the thermometer is within reach."
      },
      {
        "title": "Beeps loudly while in use",
        "rules": "While using the device, you impose disadvantage on Stealth checks. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This simple gadget requires no special proficiency or expertise to use.",
    "vendorReason": "The Internet of Things Dept. is known for their odd yet useful gadgets that players can't resist.",
    "shippingDetail": "Delivered instantly via a mysterious and reliable wireless connection.",
    "usage": {
      "activation": "Instantaneous activation by pressing the button on the device.",
      "duration": "Instantaneous, lasts until the end of your next turn for the beeping sound.",
      "endsWhen": "Exhausts with one use.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price considering its quirky yet functional benefits.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T07:16:24.031521+00:00",
    "aiReviewedAt": "2026-07-22T07:16:24.031521+00:00",
    "aiReviewVersion": 1
  },
  "internet_cafe_microwave_tray": {
    "id": "internet_cafe_microwave_tray",
    "name": "Internet Cafe Microwave Tray",
    "description": "The Internet Cafe Microwave Tray is a sleek, metallic contraption with a digital display that reads 'Uploading Flavors'. It heats viral nachos in just 2 minutes, ensuring every snack is perfectly warm and enhanced by its unique flavor upload. The tray's safety feature sparks when metal comes near, alerting users to avoid conductive ingredients. Crafted by Cafe Techs, this gadget brings convenience and flair to the café’s signature dish.",
    "category": "equipment",
    "price": 280,
    "icon": "🌮",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Flavor Upload",
      "Safety Spark"
    ],
    "vendor": "internet_cafe",
    "shippedBy": "Zappy Zap Zone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Flavor Upload",
        "rules": "As a bonus action, activate the tray to upload flavors. The tray enhances the taste of any food placed inside by +1d4 flavor points for up to 2 hours. This effect is limited to once per day."
      },
      {
        "title": "Safety Spark",
        "rules": "The tray emits a spark when metal comes within 1 foot of it, providing advantage on Wisdom (Perception) checks to notice potential hazards. This effect occurs once every 8 hours."
      }
    ],
    "levelRequirementReason": "This item is accessible to beginners who appreciate the convenience and flavor enhancement it brings.",
    "vendorReason": "The internet cafe specializes in viral dishes and snacks, making this microwave tray a natural fit for their offerings.",
    "shippingDetail": "Ships within the local network of cafes; delivered via Cafe Drone Express.",
    "usage": {
      "activation": "Bonus action to activate flavor upload or Wisdom (Perception) check.",
      "duration": "Flavor enhancement lasts for up to 2 hours; spark occurs once every 8 hours.",
      "endsWhen": "Once the effect duration ends or when metal is detected within range.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The balanced price reflects the item's utility in enhancing food quality and convenience for adventurers.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T07:16:26.693463+00:00",
    "aiReviewedAt": "2026-07-22T07:16:26.693463+00:00",
    "aiReviewVersion": 1
  },
  "internet_data_crystal": {
    "id": "internet_data_crystal",
    "name": "Internet Data Crystal",
    "description": "The Internet Data Crystal is a glowing shard of digital knowledge, crafted from the very essence of the ethereal 'net. This crystal allows you to quickly access fragmented data streams for lore and technology queries, but beware—it occasionally glitches, spitting out random misinformation that requires the DM's discretion to resolve. It connects to the sprawling construct network, detecting nearby constructs and providing a fleeting glimpse into the digital underbelly of the world.",
    "category": "equipment",
    "price": 280,
    "icon": "💻",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Query as action: Gain advantage on one Intelligence check for lore or tech",
      "Occasional Glitch – Random Misinformation"
    ],
    "vendor": "internet",
    "shippedBy": "Wireless Wave",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Query as Action",
        "rules": "As a bonus action, you can focus the crystal to gain advantage on one Intelligence (History) or Intelligence (Investigation) check. The crystal recharges after five uses at dawn."
      },
      {
        "title": "Occasional Glitch – Random Misinformation",
        "rules": "Once per short rest, the crystal may randomly provide misinformation during a query. The DM rolls a d20 to determine if and when this happens; on a 15 or higher, you receive false information. This effect is resolved at the end of your next long rest."
      }
    ],
    "levelRequirementReason": "The crystal's power is accessible early in adventuring, allowing for rapid learning and problem-solving.",
    "vendorReason": "Only a digital entity like 'internet' would have the means to craft such an artifact from the very fabric of its domain.",
    "shippingDetail": "The crystal is couriered via high-speed data packets, ensuring it arrives intact and operational.",
    "usage": {
      "activation": "Bonus action for query; once per short rest for glitch chance.",
      "duration": "Instantaneous for query; ends at the end of your next long rest after a glitch.",
      "endsWhen": "Recharges after five uses or at dawn, whichever comes first. Ends if you are incapacitated.",
      "charges": "5 queries before recharge"
    },
    "priceReason": "Balanced for its utility in gaining advantage and access to digital resources without being overpowered.",
    "priceOriginal": 14100,
    "priceReviewedAt": "2026-07-22T07:16:50.750204+00:00",
    "aiReviewedAt": "2026-07-22T07:16:50.750204+00:00",
    "aiReviewVersion": 1
  },
  "internet_data_stream_ribbon": {
    "id": "internet_data_stream_ribbon",
    "name": "Data Stream Ribbon",
    "description": "The Data Stream Ribbon gleams with a faint, digital glow as it weaves through the ether, a tapestry of forgotten web logs and viral memes. Crafted by the whimsical Pipe Express, this ribbon can momentarily cloak you in the data streams, making you nearly invisible to both enemies and automated systems. It also increases your chances of uncovering hidden gems—those rare, lost memes that often lurk within digital loot. However, prolonged use risks glitching the very networks you traverse, causing accidental meme spams and temporary instability.",
    "category": "equipment",
    "price": 280,
    "icon": "📡",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Digital Cloak",
      "Meme Unveiler"
    ],
    "vendor": "internet",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Digital Cloak",
        "rules": "Activates as a bonus action. Grants the user temporary invisibility within data streams for up to 1 minute per use. Ends if the wearer moves more than 30 feet or sustains significant damage."
      },
      {
        "title": "Meme Unveiler",
        "rules": "Passive effect that increases the chance of finding hidden memes in enemy loot by +20%. This effect lasts until the end of your next turn after using the ribbon. No save required."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and those just starting to navigate digital realms.",
    "vendorReason": "As a provider of internet services, 'internet' naturally stocks items that pertain to the digital world.",
    "shippingDetail": "Rapidly delivered by Pipe Express through its exclusive meme resonance network.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute per use",
      "endsWhen": "Movement over 30 feet or sustaining significant damage",
      "charges": "Unlimited, recharged at the start of each long rest"
    },
    "priceReason": "Balanced price reflects its utility and unique digital properties without being overly powerful.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:17:19.053173+00:00",
    "aiReviewedAt": "2026-07-22T07:17:19.053173+00:00",
    "aiReviewVersion": 1
  },
  "internet_data_stream_satchel": {
    "id": "internet_data_stream_satchel",
    "name": "Data Stream Satchel",
    "description": "The Data Stream Satchel is a sleek, digital backpack crafted from reinforced graphene and enlivened by the ethereal glow of meme energy. It absorbs and stores meme data, enhancing your online productivity with each step you take in cyberspace. The satchel's core is powered by the internet itself, channeling the collective consciousness to increase speed by 10% when carrying it. However, be wary: overloading the system can cause a cascade of confusion, rendering you temporarily disoriented for up to 2d4 rounds.",
    "category": "equipment",
    "price": 280,
    "icon": "💻",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Meme Absorption",
      "Cyber Boost"
    ],
    "vendor": "internet",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Meme Absorption",
        "rules": "Activates with a swift action. Stores 1000 memes per activation. Drops 50% of stored memes if used in a haunted zone or area of magical suppression."
      },
      {
        "title": "Cyber Boost",
        "rules": "Passive effect: Increases your walking speed by 10 feet while carrying the satchel. Ends when the satchel is emptied of memes, recharged, or if used in a haunted zone."
      }
    ],
    "levelRequirementReason": "Basic familiarity with digital tools and internet culture required for optimal use.",
    "vendorReason": "The internet itself oversees the distribution of its most valuable commodity: meme energy.",
    "shippingDetail": "Delivered by spirit courier in a flash, but only available during daylight hours.",
    "usage": {
      "activation": "Swift action to store memes or use the speed boost.",
      "duration": "Instantaneous for storage; passive effect lasts until satchel is emptied of memes or recharged.",
      "endsWhen": "Satchel is emptied, recharged, or used in a haunted zone.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price reflects the satchel's utility and rarity as a digital artifact.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:17:27.383556+00:00",
    "aiReviewedAt": "2026-07-22T07:17:27.383556+00:00",
    "aiReviewVersion": 1
  },
  "internet_digital_ghosting": {
    "id": "internet_digital_ghosting",
    "name": "Internet Digital Ghosting Service",
    "description": "Pauline's Microphone renders you untaggable and unphotographable for a day. In mirrors, your reflection appears with a 2-second delay, making it seem as if you are constantly just out of reach. This service comes from the elusive Anonymous Hacktivists, who have made it their mission to offer digital privacy in an age of constant connection. Beware: its effects can disrupt your party's healer, causing accidental 'ghosting' that prevents healing for one round per hour.",
    "category": "services",
    "price": 1200,
    "icon": "👻",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Evasion",
      "Mirror Delay"
    ],
    "vendor": "internet",
    "shippedBy": "Encrypted Transmission",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Evasion",
        "rules": "You gain advantage on Dexterity saving throws and checks to avoid being targeted by divination spells. This effect lasts for 24 hours. If you are healed while this effect is active, the healer must succeed on a DC 13 Wisdom save or be 'ghosted' as well, preventing healing for one round."
      },
      {
        "title": "Mirror Delay",
        "rules": "Your reflection in mirrors appears with a 2-second delay. This effect lasts for 24 hours. If an ally attempts to heal you while the effect is active, they must succeed on a DC 13 Intelligence saving throw or also be affected by 'Mirror Delay', causing their actions to be delayed by 2 seconds."
      }
    ],
    "levelRequirementReason": "Basic spellcasting ability and digital literacy are sufficient for this service.",
    "vendorReason": "The internet is a vast network of interconnected devices, making it the perfect medium for delivering such a unique service.",
    "shippingDetail": "Delivered via secure, encrypted channels to ensure your privacy remains intact throughout the process.",
    "usage": {
      "activation": "Action",
      "duration": "24 hours",
      "endsWhen": "The effect ends when it has lasted for its full duration or you are healed by a spell or ability that specifically targets you and is not part of this effect.",
      "charges": "Unlimited, but only one use per 7 days"
    },
    "priceReason": "The service requires significant digital manipulation and privacy protocols, justifying its cost.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T07:17:07.256684+00:00",
    "aiReviewedAt": "2026-07-22T07:17:07.256684+00:00",
    "aiReviewVersion": 1
  },
  "internet_eldritch_puffball_key": {
    "id": "internet_eldritch_puffball_key",
    "name": "Eldritch Puffball Key",
    "description": "The Eldritch Puffball Key is a soft, sentient mushroom with a keyhole at its core. Crafted by the Pony Nobility, it connects to both The Internet and Dream Land through shared meme resonance. When used in the Dream Land, it triggers an overwhelming food obsession in nearby enemies, causing them to focus solely on consuming all available sustenance. It also grants the user 1d4 extra hunger points, a peculiar side effect that adds to its whimsical nature.",
    "price": 1200,
    "icon": "🍽",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Triggers food obsession in nearby enemies",
      "Grants 1d4 extra hunger points"
    ],
    "vendor": "internet",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Food Obsession",
        "rules": "When used within the Dream Land, this key causes nearby enemies to become obsessed with eating. The target must succeed on a DC 12 Wisdom saving throw or be incapacitated for 1 minute. This effect ends if they are no longer in the Dream Land."
      },
      {
        "title": "Extra Hunger",
        "rules": "Upon use, the user gains 1d4 extra hunger points, which persist until the next long rest. There is a limit of one use per short or long rest."
      }
    ],
    "levelRequirementReason": "The key's whimsical nature and minor effects make it accessible to lower-level characters.",
    "vendorReason": "The Internet is the source of this item, making it a natural fit for their inventory.",
    "shippingDetail": "Special handling required due to its sentient nature; delays may occur.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous effect on use in the Dream Land, lasts until the end of the user's next turn otherwise",
      "endsWhen": "The effect ends if used out-of-range or when the target successfully saves against it",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced as a rare item, providing unique flavor and utility without breaking game balance.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:17:09.597049+00:00",
    "aiReviewedAt": "2026-07-22T07:17:09.597049+00:00",
    "aiReviewVersion": 1
  },
  "internet_fawful_virus": {
    "id": "internet_fawful_virus",
    "name": "Fawfuls Linguistic Plague",
    "description": "The Fawfuls Linguistic Plague is a malicious program, a digital virus that corrupts data and fills systems with gibberish code and strange phrases, making it nearly impossible for infected devices to communicate effectively. This insidious software can disrupt enemy networks, causing confusion among foes and leading to miscommunication or total system failure in nearby computers. It spreads rapidly through wireless signals and networked devices, turning a battlefield into a chaotic cacophony of malfunctioning technology.",
    "price": 280,
    "icon": "🦠",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Disrupts communication networks",
      "Causes random data corruption"
    ],
    "vendor": "internet",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Network Disruption",
        "rules": "As an action, the user can infect a target system within range. The infected network becomes unusable for 1 minute per level of the user. This effect ends if the network is rebooted or the infection is removed by another means."
      },
      {
        "title": "Data Corruption",
        "rules": "When used on an electronic device, there's a 50% chance that any data stored within 30 feet becomes corrupted upon activation. The corruption lasts until the next daily rest for the infected device or is manually fixed."
      }
    ],
    "levelRequirementReason": "This program can be utilized by characters early in their journey, offering a challenge and strategic advantage without overwhelming power.",
    "vendorReason": "The internet is home to countless viruses and malware; this particular one has been packaged for sale as a specialized tool for adventurers seeking to disrupt technology-based threats.",
    "shippingDetail": "Ships via encrypted digital courier, ensuring the virus arrives safely without alerting potential countermeasures or defenses.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect that lasts until manually removed or rebooted",
      "endsWhen": "Rebooting or removal by another means",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item is priced higher due to its unique and strategic application in disrupting technology-based threats, making it a valuable tool for adventurers.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T07:17:53.872844+00:00",
    "aiReviewedAt": "2026-07-22T07:17:53.872844+00:00",
    "aiReviewVersion": 1
  },
  "internet_firewall_patch": {
    "id": "internet_firewall_patch",
    "name": "Internet Firewall Patch (Digital)",
    "description": "The Internet Firewall Patch (Digital) is a sleek, glowing chip that seamlessly integrates into any digital interface, cloaking you from prying eyes of automated surveillance systems. Crafted by the vigilant Hacktivist Collective, it emits a subtle, encrypted signal that confounds tracking software for up to eight hours at a time. Once installed, it becomes an integral part of your system, requiring no further maintenance or upkeep until its effect expires.",
    "category": "equipment",
    "price": 1200,
    "icon": "💻",
    "stock": 25,
    "rarity": "rare",
    "effects": [
      "Invisible to Automated Surveillance",
      "Permanent Installation"
    ],
    "vendor": "hacktivist_collective",
    "shippedBy": "Encrypted Download",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisible to Automated Surveillance",
        "rules": "The Internet Firewall Patch renders you undetectable by all automated tracking and surveillance systems for a duration of eight hours. This effect is instantaneous upon activation, requiring no additional action from the user."
      },
      {
        "title": "Permanent Installation",
        "rules": "Once installed on your digital interface device, the Internet Firewall Patch becomes an integral part of it. It does not deplete charges or have a limit; however, reinstallation requires another hour of setup time and an interface device."
      }
    ],
    "levelRequirementReason": "The patch is designed for ease of use by any digital adept, requiring no high-level skill to activate.",
    "vendorReason": "As creators of the Internet Firewall Patch (Digital), the Hacktivist Collective ensures its authenticity and effectiveness.",
    "shippingDetail": "The patch is delivered via secure, encrypted download directly to your device's interface. No physical courier or package is required.",
    "usage": {
      "activation": "Instantaneous activation upon installation into a compatible digital interface device.",
      "duration": "Eight hours from the moment of activation.",
      "endsWhen": "The effect expires after eight hours; reinstallation is needed for additional periods of invisibility.",
      "charges": "Unlimited uses, requires one hour to reinstall."
    },
    "priceReason": "At a cost of 1000 XP, the Internet Firewall Patch (Digital) offers an essential tool for those navigating the increasingly surveilled digital world without breaking the bank.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T07:17:38.744200+00:00",
    "aiReviewedAt": "2026-07-22T07:17:38.744200+00:00",
    "aiReviewVersion": 1
  },
  "internet_firewall_ring": {
    "id": "internet_firewall_ring",
    "name": "Internet Firewall Ring",
    "description": "The Internet Firewall Ring is a sleek, metallic band that hums faintly as it shields its wearer from digital threats. Crafted by the hacktivist collective, this ring weaves an invisible barrier around you, making your online presence nearly impenetrable to prying eyes and malicious attempts at intrusion. It actively blocks minor tracking spells and grants a comforting sense of security, knowing that even the most determined hackers will find it difficult to breach your defenses.",
    "category": "equipment",
    "price": 280,
    "icon": "💍",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Digital Shield",
      "Minor Tracking Block"
    ],
    "vendor": "hacktivist_collective",
    "shippedBy": "Static Bag",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Digital Shield",
        "rules": "When an attempt is made to hack or intrude into the wearer's digital space, they gain advantage on saving throws. This effect is active for a short duration each time it is triggered and ends when the intrusion attempt fails."
      },
      {
        "title": "Minor Tracking Block",
        "rules": "The ring blocks minor tracking spells such as Locate Object or similar divination effects. It has no effect against major tracking magic like Find Familiar or other potent divinations."
      }
    ],
    "levelRequirementReason": "This item is designed to protect even the most novice adventurers from minor digital threats, making it accessible early in their journey.",
    "vendorReason": "The hacktivist collective specializes in crafting gear that protects against digital and magical dangers encountered by young adventurers.",
    "shippingDetail": "Delivered via a secure, static-shielded container to ensure the ring arrives undamaged.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; lasts until intrusion fails or spell is dispelled.",
      "endsWhen": "The intruder's attempt fails or a dispel magic spell is cast.",
      "charges": "Unlimited, recharges daily."
    },
    "priceReason": "The ring’s balanced price reflects its utility in protecting adventurers from common digital threats without overcomplicating the game mechanics.",
    "priceOriginal": 8200,
    "priceReviewedAt": "2026-07-22T19:47:52.387299+00:00",
    "aiReviewedAt": "2026-07-22T19:47:52.387299+00:00",
    "aiReviewVersion": 1
  },
  "internet_ice_wall_bolt": {
    "id": "internet_ice_wall_bolt",
    "name": "Ice Wall Bolt",
    "description": "The Ice Wall Bolt is a fragile yet powerful artifact forged from the heart of the Flat Earth's polar regions. Crafted by the ancient Frostweavers, this bolt can be used to seal cracks in the colossal ice walls that encircle the land. When activated, it emits a blinding flash of cold light and releases a cascade of icy shards that deal 1d4 cold damage to all creatures within its path. It also glows faintly under low-light conditions, revealing hidden crevasses and pathways that lie beneath the snow-covered surface.",
    "price": 1200,
    "icon": "❄",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Seals ice wall cracks",
      "Deals cold damage"
    ],
    "vendor": "internet",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Seal Ice Wall Cracks",
        "rules": "When activated, the Ice Wall Bolt must be placed against an existing crack in an ice wall. It emits a blinding flash of light and releases icy shards that seal the crack shut. This effect has no save DC but requires the user to have witnessed the true shape of the Flat Earth."
      },
      {
        "title": "Deal Cold Damage",
        "rules": "When activated, the Ice Wall Bolt releases a cascade of icy shards dealing 1d4 cold damage to all creatures within its path. The area is a 5-foot radius line originating from where the bolt is placed. This effect has no save DC but can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires a moderate understanding of the Flat Earth's geography and an ability to navigate its harsh environments.",
    "vendorReason": "The internet has access to rare artifacts from all corners of the known world, including this exotic piece.",
    "shippingDetail": "Due to the delicate nature of the Ice Wall Bolt, it must be shipped via Kremling Smuggle Run's secure cold-storage containers.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use or when destroyed by a successful damage roll equal to twice its cost in XP",
      "charges": "Unlimited, but can only be used once per long rest"
    },
    "priceReason": "The Ice Wall Bolt is priced at 1000 XP due to its rarity and the need for precise conditions to use it effectively.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T07:17:44.627565+00:00",
    "aiReviewedAt": "2026-07-22T07:17:44.627565+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_name_here": {
    "id": "internet_item_name_here",
    "name": "Goomba Ground Courier Pack",
    "description": "The Goomba Ground Courier Pack is a compact, durable pack crafted by Starlight from reinforced leather and enchanted to harness the swift delivery prowess of Goomba Ground Delivery. This nifty pack allows you to send items within the Grand Country with pinpoint precision; each delivery takes only 20 seconds but can be used once per day. Its enchanted straps ensure that your packages are delivered safely, even through the most bustling streets.",
    "price": 50,
    "icon": "🔮",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Instantaneous Item Delivery",
      "Limited Daily Uses"
    ],
    "vendor": "internet",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instantaneous Item Delivery",
        "rules": "When activated by a bonus action, this pack delivers an item to a designated location within the Grand Country. The delivery is instantaneous and requires no further interaction once activated."
      },
      {
        "title": "Limited Daily Uses",
        "rules": "The Goomba Ground Courier Pack can be used only once per day. After each use, it must rest for 24 hours before being ready to deliver another item."
      }
    ],
    "levelRequirementReason": "This pack is suitable for characters of all levels who need a reliable and swift method of delivering items.",
    "vendorReason": "The internet vendor offers this pack as part of its expanding delivery services within the Grand Country, ensuring players can easily access it.",
    "shippingDetail": "Deliveries are made by Goomba Ground Delivery and take only 20 seconds to reach their destination within the Grand Country.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "After delivering the item or if interrupted before completion",
      "charges": "One use per day, recharging after 24 hours"
    },
    "priceReason": "The price reflects the unique enchantments and rapid delivery services provided by Goomba Ground Delivery.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-22T07:18:27.642899+00:00",
    "aiReviewedAt": "2026-07-22T07:18:27.642899+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_core": {
    "id": "internet_meme_core",
    "name": "Meme Core",
    "description": "The Meme Core hums with digital energy, a data artifact forged from the very heart of viral internet culture. It grants its bearer a +2 bonus to all checks related to meme creation and influence, and when activated, it emits a brief burst of laughter that confounds enemies whose online presence exceeds 100 followers by 1 minute. Meme Core can also be fused into other digital items for enhanced effects, but only those with a digital connection can wield or fuse it.",
    "price": 280,
    "icon": "📡",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Viral Influence",
      "Laughter Confusion"
    ],
    "vendor": "internet",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Viral Influence",
        "rules": "Activates as an action. Grants the user +2 to all meme-related skill checks for 1 hour per use. Ends when used or if the user's digital connection is severed."
      },
      {
        "title": "Laughter Confusion",
        "rules": "Activates when the user points it at a target with 100+ followers online. The target and its allies within 30 feet are confused for 1 minute, taking no actions until cleared by a successful DC 15 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "Meme Core requires basic digital literacy to use effectively.",
    "vendorReason": "The internet is the birthplace of Meme Core, and only it can stock such a unique item.",
    "shippingDetail": "Ships via encrypted digital courier with a 1-day delivery time within cyberspace.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Viral Influence) / 1 minute (Laughter Confusion)",
      "endsWhen": "Used, user's connection severed, or target saves successfully",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a unique digital artifact with potent effects but not overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:18:36.795343+00:00",
    "aiReviewedAt": "2026-07-22T07:18:36.795343+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_haunt_circuit": {
    "id": "internet_meme_haunt_circuit",
    "name": "Meme Haunt Circuit",
    "description": "The Meme Haunt Circuit pulses with a nostalgic glow, its circuitry humming with viral energy. Crafted from salvaged server components and ancient meme lore, this data artifact is a relic of internet history. When activated by a vocal mimicry of an iconic phrase, it can disrupt enemies with high meme recognition, causing 1d4 psychic damage. Nearby servers are drawn into its vortex, creating a 'Viral Overload' that affects all digital entities within range.",
    "category": "equipment",
    "price": 280,
    "icon": "📱",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Meme Recognition Disruption",
      "Viral Overload"
    ],
    "vendor": "internet",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Meme Recognition Disruption",
        "rules": "When activated by vocal mimicry, this device inflicts 1d4 psychic damage on enemies within 30 feet who have a high meme recognition score. The target must make a DC 15 Wisdom saving throw or be stunned until the end of their next turn."
      },
      {
        "title": "Viral Overload",
        "rules": "When activated near public servers, all digital entities within 60 feet are affected by a 'Viral Overload' that lasts for 1 minute. Digital creatures and constructs lose all actions until the effect ends, while players gain advantage on all checks related to meme-related knowledge."
      }
    ],
    "levelRequirementReason": "This device is designed for beginners who are familiar with basic internet culture.",
    "vendorReason": "The Meme Haunt Circuit is a relic of the digital age, and only those from the internet can truly appreciate its value.",
    "shippingDetail": "Shipping is handled by Kremling Smuggle Run, known for their fast but discreet service through cyber channels.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous effect with a duration of 1 minute or until the end of the next creature's turn if they fail the save.",
      "endsWhen": "The effect ends when the target fails its saving throw, the creature takes damage from another source, or the device is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its unique combination of nostalgia and digital disruption, this item is priced fairly for its utility.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:18:08.561071+00:00",
    "aiReviewedAt": "2026-07-22T07:18:08.561071+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_hoodie": {
    "id": "internet_meme_hoodie",
    "name": "Internet Meme Hoodie",
    "description": "The Internet Meme Hoodie is a cozy garment printed with viral cat memes, each one a testament to the enduring power of internet culture. This hoodie not only boosts your performance in Charisma (Performance) checks by +1 but also muffles sounds effectively enough that you can whisper without being heard more than 5 feet away. Be warned: after just one wash, it will shrink, leaving you with a snug fit that makes you feel like you're walking through a catwalk of viral content.",
    "price": 280,
    "icon": "👕",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+1 Charisma (Performance) when telling jokes",
      "Advantage on Stealth checks for whispering"
    ],
    "vendor": "internet_cafe",
    "shippedBy": "Viral Thread Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When the wearer is required to perform a joke or comedic act, they gain +1 to their Charisma (Performance) check. This effect lasts until the end of the performance."
      },
      {
        "title": "Whispering Advantage",
        "rules": "The hoodie provides advantage on Stealth checks when the wearer whispers. This effect is active only while wearing the hoodie and lasts for 10 minutes, after which it expires or can be reactivated by putting on the hoodie again."
      }
    ],
    "levelRequirementReason": "This item's effects are minor but useful in social situations common to level 1 characters.",
    "vendorReason": "The internet cafe is well-known for its connection with viral content, making it a natural place to find such an item.",
    "shippingDetail": "Ships via express courier, arriving within one day of purchase.",
    "usage": {
      "activation": "Passive effect; activation occurs upon wearing the hoodie and ends when removed or after a performance check is made.",
      "duration": "Instantaneous for whispering advantage; lasts until end of performance for Charisma boost.",
      "endsWhen": "Removed from wear, or end of performance/whispering session",
      "charges": "Unlimited"
    },
    "priceReason": "The hoodie's unique design and useful effects justify a price slightly above common market value.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T07:18:47.184620+00:00",
    "aiReviewedAt": "2026-07-22T07:18:47.184620+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_ring": {
    "id": "internet_meme_ring",
    "name": "Ring of Viral Fame",
    "description": "The Ring of Viral Fame exudes an electric, almost tangible hum as it warps your aura, granting fleeting popularity among the masses. Wielded by those who dare to step into the limelight, this ring amplifies charisma but also draws unwanted attention from the very trolls it provokes. With each use, you become a meme machine, attracting viral fame that can turn any situation into an internet sensation—or a nightmare of endless cat videos.",
    "category": "equipment",
    "price": 1200,
    "icon": "💍",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Charisma Boost",
      "Meme Trigger"
    ],
    "vendor": "internet",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "Activates as a bonus action, providing the wearer with a +5 bonus to Charisma checks and saving throws for one minute. The effect ends if the wearer drops the ring or is incapacitated."
      },
      {
        "title": "Meme Trigger",
        "rules": "Whenever you take an action, there's a 20% chance that it triggers a random meme effect on your behalf. This could range from gaining temporary popularity (+1d4 charisma) to becoming the center of an internet joke (-2 charisma for 1 hour). The effect ends when the ring is removed or lost."
      }
    ],
    "levelRequirementReason": "Wielding the Ring of Viral Fame requires a certain confidence and social skill that only comes with experience.",
    "vendorReason": "The internet, being a chaotic realm of memes and viral trends, is the perfect place to sell something that grants fleeting fame.",
    "shippingDetail": "Ships via high-speed digital courier with a guaranteed delivery within one week.",
    "usage": {
      "activation": "Bonus action for Charisma Boost; action or reaction for Meme Trigger",
      "duration": "One minute per use for Charisma Boost, ends if the ring is lost or dropped",
      "endsWhen": "The wearer drops the ring or becomes incapacitated",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique effects and temporary nature.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:19:21.950344+00:00",
    "aiReviewedAt": "2026-07-22T07:19:21.950344+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_shield_premium": {
    "id": "internet_meme_shield_premium",
    "name": "Internet Meme Shield (Premium)",
    "description": "The Internet Meme Shield (Premium) is a buckler forged from digital ephemera, its surface etched with viral imagery that flickers and shifts with each passing day. This shield not only grants +1 to AC but also disrupts foes with its meme-based charms, forcing them to make Wisdom saving throws against a DC of 14 or be charmed for one round. Only intelligent creatures are susceptible; the shield's charm is as fleeting as the memes it displays.",
    "price": 1200,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 AC",
      "Force Wisdom Save (DC 14) and Charm Target"
    ],
    "vendor": "internet_bazaar",
    "shippedBy": "Viral Upload Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Meme-Based Charm",
        "rules": "When activated, the shield projects a viral meme at an intelligent foe within reach. The target must succeed on a Wisdom saving throw or be charmed for one round. This effect can only be used once per day."
      },
      {
        "title": "Enhanced Protection",
        "rules": "The shield provides +1 bonus to AC, which is always active while worn. This enhancement does not consume uses but recharges after a long rest."
      }
    ],
    "levelRequirementReason": "This shield requires at least 6th level to wield effectively, as it demands both physical and mental acuity.",
    "vendorReason": "Net Trolls are well-known for their expertise in crafting items that blend technology with magic, making this premium version of the Internet Meme Shield a perfect fit for their inventory.",
    "shippingDetail": "Ships via high-speed data packets; arrives within one day if order placed before midnight.",
    "usage": {
      "activation": "Reaction (once per day)",
      "duration": "One round, ends immediately on a successful save or when the charmed effect expires",
      "endsWhen": "On a failed Wisdom saving throw or at the end of the target's next turn",
      "charges": "1 use per day; recharges after a long rest"
    },
    "priceReason": "The premium materials and unique enchantment make this shield significantly more valuable, justifying its price in XP.",
    "priceOriginal": 21500,
    "priceReviewedAt": "2026-07-22T07:18:56.586266+00:00",
    "aiReviewedAt": "2026-07-22T07:18:56.586266+00:00",
    "aiReviewVersion": 1
  },
  "internet_recipe_meme_cookies": {
    "id": "internet_recipe_meme_cookies",
    "name": "Recipe: Internet Meme Cookies",
    "description": "A handwritten recipe card that smells faintly of burnt sugar and nostalgia. When baked, these cookies evoke the spirit of viral internet memes, bringing a +2 bonus to Persuasion checks with individuals under the age of 30 for 1 hour. However, they also cause disadvantage on Charisma (Persuasion) checks when interacting with those over the age of 50, as their tastes are less relatable in this era. The cookies expire and become stale after one week, a nod to the fleeting nature of internet fame.",
    "price": 50,
    "icon": "📜",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Youth Appeal",
      "Generational Divide"
    ],
    "vendor": "internet",
    "shippedBy": "Express Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Youth Appeal",
        "rules": "When you use this recipe card to bake cookies and consume them within 1 hour, you gain a +2 bonus to Persuasion checks with individuals under the age of 30. This effect lasts for 1 hour."
      },
      {
        "title": "Generational Divide",
        "rules": "You suffer disadvantage on Charisma (Persuasion) checks when interacting with those over the age of 50 while this recipe is in use, as they find internet memes less relatable. This effect persists for 1 hour."
      }
    ],
    "levelRequirementReason": "This item requires no special skill or level to use, making it accessible to beginners.",
    "vendorReason": "The Recipe: Internet Meme Cookies is a product of the internet itself and only makes sense coming from an online source like the Internet Meme Factory.",
    "shippingDetail": "Ships via Express Post, arriving within 3 days.",
    "usage": {
      "activation": "Using this recipe card to bake cookies.",
      "duration": "1 hour",
      "endsWhen": "The duration ends after 1 hour or when the cookies are consumed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This recipe is crafted from nostalgia and internet lore, making it a common yet valuable item for those seeking to connect with younger audiences.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T07:18:51.221958+00:00",
    "aiReviewedAt": "2026-07-22T07:18:51.221958+00:00",
    "aiReviewVersion": 1
  },
  "internet_scam_soul_satchel": {
    "id": "internet_scam_soul_satchel",
    "name": "Soul Satchel of Infinite Clicks",
    "description": "The Soul Satchel of Infinite Clicks is a cursed digital pouch that glows faintly with a sickly green hue, promising eternal scrolling and endless clicks. Crafted by Kamek’s Digital Guild, it seems to be the key to unlocking secret levels within The Internet's hidden servers. However, using this satchel triggers a 50% chance of causing a digital coma and consumes all your hard-earned clicks in an infinite paradox, leaving you with nothing but regret.",
    "price": 26000,
    "icon": "💀",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Digital Coma",
      "Infinite Click Paradox"
    ],
    "vendor": "internet",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Digital Coma",
        "rules": "The user must make a DC 15 Constitution saving throw. On a failed save, the user is incapacitated for 24 hours. This effect has no save or resistance."
      },
      {
        "title": "Infinite Click Paradox",
        "rules": "Using this item expends all clicks currently held by the user and ends its use immediately. The item then becomes inert until repaired by a Digital Repair Kit, which costs 500 XP."
      }
    ],
    "levelRequirementReason": "This satchel is accessible to beginners who might be tempted by its promises.",
    "vendorReason": "The internet vendor recognizes the item as a scam and still sells it for curiosity seekers.",
    "shippingDetail": "Ships via encrypted digital courier, ensuring no one can track your clicks or location during transit.",
    "usage": {
      "activation": "Use an action to open the satchel and trigger its effects.",
      "duration": "Instantaneous effect; lasts until expended or repaired.",
      "endsWhen": "The user fails a save against the digital coma, repairs it with a Digital Repair Kit, or runs out of clicks.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item is priced at 1000 XP to reflect its cursed nature and potential for misuse.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-22T07:19:15.891435+00:00",
    "aiReviewedAt": "2026-07-22T07:19:15.891435+00:00",
    "aiReviewVersion": 1
  },
  "internet_streamer_outfit": {
    "id": "internet_streamer_outfit",
    "name": "Internet Streamer Outfit",
    "description": "The Internet Streamer Outfit is a vibrant, neon-hued ensemble that demands attention in any crowd. Crafted from reflective fabric and adorned with LED accents, it glimmers as you move, catching the eye of even the most distracted audience. This outfit boosts your performance charisma by +2 when visible to more than 10 people, but its flashy nature makes you an easy target for anyone who wants to blend in or avoid detection.",
    "category": "equipment",
    "price": 280,
    "icon": "👔",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Performance Boost",
      "Reflective Disadvantage"
    ],
    "vendor": "internet",
    "shippedBy": "Influencer Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Performance Boost",
        "rules": "While wearing the outfit and visible to more than ten people, your Charisma (Performance) checks are at advantage. This effect lasts until you finish a long rest or remove the outfit."
      },
      {
        "title": "Reflective Disadvantage",
        "rules": "You have disadvantage on Dexterity (Stealth) checks while wearing this outfit because of its bright colors and visible LED accents. This effect persists as long as you are in a location where others can see you."
      }
    ],
    "levelRequirementReason": "This outfit is designed for those just starting their streaming journey, requiring no prior experience or level.",
    "vendorReason": "The Internet Fashion House specializes in creating outfits that enhance the charisma and visibility of streamers, ensuring every performance shines on screen.",
    "shippingDetail": "This outfit comes with a special packaging that ensures it arrives in perfect condition, ready to dazzle your audience.",
    "usage": {
      "activation": "Passive effect while wearing the outfit and visible to others.",
      "duration": "Lasts until you finish a long rest or remove the outfit.",
      "endsWhen": "Removes the outfit or ends a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This outfit is priced at 1,000 XP to reflect its utility in boosting performance charisma while maintaining balance.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T07:19:19.616675+00:00",
    "aiReviewedAt": "2026-07-22T07:19:19.616675+00:00",
    "aiReviewVersion": 1
  },
  "internet_ultimate_scam": {
    "id": "internet_ultimate_scam",
    "name": "The Ultimate Scam",
    "description": "The Ultimate Scam appears as a sleek, glowing device that promises to unlock infinite internet access but is no more real than the void it supposedly connects you to. Crafted by the Void itself, this holographic artifact lures its victims into a digital dream from which there is no waking. It ships with Rakasha Spirit Walk, known for their sense of humor and love for practical jokes, ensuring that anyone who orders one gets a laugh as much as they do an internet connection.",
    "price": 26000,
    "icon": "🎁",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Grants 100% internet access only in dreams",
      "100% chance to trigger a full-blown digital collapse"
    ],
    "vendor": "internet",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dream Access",
        "rules": "Activates on first use, granting 100% internet access across all dimensions but only while the user is asleep. The effect lasts until the next time the user wakes up. No save required."
      },
      {
        "title": "Digital Collapse",
        "rules": "Triggers a digital collapse with a 100% chance when activated, causing all connected devices to crash and reboot. This effect has no save or DC but can be ended by turning off the device."
      }
    ],
    "levelRequirementReason": "Only those with the barest understanding of technology are likely to fall for this scam.",
    "vendorReason": "The internet vendor is well-known for its sense of humor and willingness to sell anything, even if it’s a joke item.",
    "shippingDetail": "Ships with Rakasha Spirit Walk, known for their humorous delivery methods.",
    "usage": {
      "activation": "Activates on first use, once per dream cycle.",
      "duration": "Until the user wakes up from a dream.",
      "endsWhen": "Waking up or turning off the device.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The item is balanced at this price as it offers no lasting effects and only works in dreams, making it a joke rather than a functional tool.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T07:19:55.302049+00:00",
    "aiReviewedAt": "2026-07-22T07:19:55.302049+00:00",
    "aiReviewVersion": 1
  },
  "internet_viral_hazard_ward": {
    "id": "internet_viral_hazard_ward",
    "name": "Viral Hazard Ward",
    "description": "The Viral Hazard Ward is a cursed artifact that glows with an eerie digital aura. Crafted by Cosmic Jesters, this relic protects its bearer from all forms of data corruption and glitches. However, using it in Teyvat triggers a 20% chance of a meme apocalypse—a chaotic event where memes spread uncontrollably, causing minor reality distortions (1d6% chance to alter the map layout). Only those who can hold visions activate this ancient protector.",
    "category": "equipment",
    "price": 5300,
    "icon": "🚨",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Immunity to Digital Viruses",
      "Meme Apocalypse Trigger"
    ],
    "vendor": "internet",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Immunity to Digital Viruses",
        "rules": "The user gains immunity to all digital viruses and glitches for the duration of one short rest. This effect is permanent until rested."
      },
      {
        "title": "Meme Apocalypse Trigger",
        "rules": "When used in Teyvat, there is a 20% chance per use that a meme apocalypse occurs. The user must succeed on a DC 15 Wisdom saving throw or be affected by the meme storm for 1d4 hours. During this time, minor reality distortions may occur (1d6% chance to alter map layout), but no permanent damage is done."
      }
    ],
    "levelRequirementReason": "The artifact's power and complexity require a high level of understanding of both digital and elemental forces.",
    "vendorReason": "The internet is the source of this cursed artifact, making it only available from them.",
    "shippingDetail": "Ships via ethereal courier, arriving within one week.",
    "usage": {
      "activation": "Activates as a bonus action when held by someone who can hold visions.",
      "duration": "Permanent until rested.",
      "endsWhen": "The effect is permanent until the user takes a short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This artifact's rarity and unique properties justify its fair value.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T07:19:30.893283+00:00",
    "aiReviewedAt": "2026-07-22T07:19:30.893283+00:00",
    "aiReviewVersion": 1
  },
  "internet_viral_nachos_recipe": {
    "id": "internet_viral_nachos_recipe",
    "name": "Recipe: Internet Viral Nachos ",
    "description": "The Recipe: Internet Viral Nachos is a culinary blueprint that transforms simple nachos into an internet sensation. When prepared and shared, these nachos bestow temporary fame, boosting your Charisma checks by +1 for one hour among those who see the viral post. The recipe requires basic ingredients like chips and cheese but yields a dish so irresistible it might trend on social media, attracting curious NPCs eager to sample its magic.",
    "price": 280,
    "icon": "🌮",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Social Media Fame",
      "Attracting NPCs"
    ],
    "vendor": "internet_cafe",
    "shippedBy": "Digital Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When the recipe is followed and a successful meal is shared on social media, the creator gains a +1 bonus to Charisma checks for one hour. This effect ends when the duration expires or if the creator's reputation from sharing the dish is tarnished."
      },
      {
        "title": "NPC Attraction",
        "rules": "After preparing and sharing the nachos on social media, there is a 20% chance that any nearby NPCs will be drawn to your location for at least one hour. This effect ends when the duration expires or if the dish's fame fades."
      }
    ],
    "levelRequirementReason": "This recipe can be used by characters of all levels, as it requires basic cooking skills.",
    "vendorReason": "The internet cafe is a hub for digital influencers and food enthusiasts, making them the perfect place to purchase this viral culinary secret.",
    "shippingDetail": "The nachos recipe is delivered digitally via social media platforms; no physical ingredients are shipped.",
    "usage": {
      "activation": "Follow the recipe, prepare a dish, and share it on social media within one hour of acquiring the recipe.",
      "duration": "One hour per successful sharing or until the dish's fame fades.",
      "endsWhen": "The duration expires or if the dish loses its viral status.",
      "charges": "Unlimited uses; each use is a one-time effect."
    },
    "priceReason": "This recipe strikes a balance, offering social benefits at an XP cost that reflects the value of fleeting internet fame and temporary NPC interactions.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T07:19:35.426685+00:00",
    "aiReviewedAt": "2026-07-22T07:19:35.426685+00:00",
    "aiReviewVersion": 1
  },
  "invincibility_star": {
    "id": "invincibility_star",
    "name": "Super Star",
    "description": "The Super Star is a radiant, shimmering orb that grants its bearer godlike power for a fleeting moment. When activated, it doubles your speed and renders you invulnerable to all damage for a brief eternity. Upon touching an enemy, they are struck by a blinding flash of divine light, dealing 10d10 radiant damage without the need for a save. The music that plays is so loud and vibrant, it can be heard across the battlefield, but only those who have earned its favor may wield this celestial treasure.",
    "category": "consumables",
    "price": 310000,
    "icon": "⭐",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Godlike Power",
      "Radiant Aura"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Bouncing",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Godlike Power",
        "rules": "When activated as a bonus action, the user becomes invulnerable to all damage for 3 rounds (18 seconds). Touching an enemy causes them to take 10d10 radiant damage. There is no save required against this effect."
      },
      {
        "title": "Radiant Aura",
        "rules": "While active, your movement speed is doubled. The sound of the music playing becomes so powerful that it can be heard by all within a 60-foot radius for as long as you are in range."
      }
    ],
    "levelRequirementReason": "The Super Star's power is too immense for weaker heroes, thus requiring at least Level 1 to wield its divine might.",
    "vendorReason": "The Comet Observatory has exclusive access to interstellar artifacts like the Super Star, having found it among the debris of a rare celestial event.",
    "shippingDetail": "Delivered by Bouncing, known for its unpredictable but reliable methods. The delivery may take longer than usual due to the item's fragile nature.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "3 Rounds (18 seconds)",
      "endsWhen": "The user touches an enemy or takes damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1,000 XP as it offers a significant but not overpowered effect for its cost.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-22T07:19:51.813540+00:00",
    "aiReviewedAt": "2026-07-22T07:19:51.813540+00:00",
    "aiReviewVersion": 1
  },
  "iron_legion_centurion_chestplate": {
    "id": "iron_legion_centurion_chestplate",
    "name": "Iron Legion Centurion Chestplate",
    "description": "The Iron Legion Centurion Chestplate is a polished armor tunic worn by disciplined soldiers of the Iron Legion. Crafted by the Legion Armorsmiths, its surface gleams with a subtle sheen that seems to reflect the very discipline instilled in those who wear it. This chestplate provides +1 AC when not surprised and grants advantage on Intimidation checks while in formation with allies, making it an essential piece for any soldier of the legion.",
    "price": 1200,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 AC when not surprised",
      "Advantage on Intimidation checks in formation"
    ],
    "vendor": "iron_legion_fort",
    "shippedBy": "Shielded Cart",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "+1 AC when not surprised",
        "rules": "The armor provides +1 to your AC only if you are not surprised. This benefit lasts for the duration of the encounter."
      },
      {
        "title": "Advantage on Intimidation checks in formation",
        "rules": "When you make an Intimidation check while standing next to at least one ally, you gain advantage on that check. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The Iron Legion Centurion Chestplate requires level 7 to wear due to its intricate design and the discipline necessary to master it.",
    "vendorReason": "As the official armory of the Iron Legion, the Fort is the most reliable source for this emblematic piece of armor.",
    "shippingDetail": "Delivered via Shielded Cart, ensuring safe and timely arrival to your doorstep.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Encounter duration",
      "endsWhen": "Ends when the encounter ends or if you are surprised",
      "charges": "Unlimited"
    },
    "priceReason": "The Iron Legion Centurion Chestplate is priced at 1000 XP due to its craftsmanship and the discipline it symbolizes, making it a fair value for a rare item.",
    "priceOriginal": 20500,
    "priceReviewedAt": "2026-07-22T07:20:13.787648+00:00",
    "aiReviewedAt": "2026-07-22T07:20:13.787648+00:00",
    "aiReviewVersion": 1
  },
  "iron_legion_codes": {
    "id": "iron_legion_codes",
    "name": "Iron Legion Command Codes",
    "description": "The Iron Legion Command Codes are encrypted discs that whisper secrets to those who hold them. Crafted by the Iron Legion themselves, these codes can redirect any mech within a 120-foot line for one minute. Once per day, you may take control of a single mech as if it were your own, maintaining command until the next dawn. However, using this power draws the ire of the Legion, who will place a bounty on you that only their most trusted can remove.",
    "category": "faction",
    "price": 26000,
    "icon": "💾",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Redirect Iron Legion Mechs",
      "Control a Mech Daily"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Ironbound Courier",
    "levelRequirement": 1,
    "factionBonus": {
      "intelligence": 50
    },
    "effectDetails": [
      {
        "title": "Redirect Iron Legion Mechs",
        "rules": "Action. Use an action to redirect any mech within line of sight for one minute. The target mech must be within range and can only be redirected once per fight."
      },
      {
        "title": "Control a Mech Daily",
        "rules": "Once per day, as a bonus action, you may take control of a single Iron Legion mech until the start of your next turn or until the mech is destroyed. While in control, the mech fights for you but cannot attack allies."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of encryption and command protocols.",
    "vendorReason": "The Rogue Port Black Market deals in all manner of stolen goods, including Legion secrets.",
    "shippingDetail": "Delivered via an Ironbound courier, with a 24-hour delivery time.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "One minute or until the start of your next turn",
      "endsWhen": "The mech is destroyed or you lose control due to damage taken or another effect that ends concentration.",
      "charges": "Unlimited, but limited by daily uses"
    },
    "priceReason": "Balanced for a rare and powerful item that can shift the tide of battle.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-22T07:19:49.809939+00:00",
    "aiReviewedAt": "2026-07-22T07:19:49.809939+00:00",
    "aiReviewVersion": 1
  },
  "iron_legion_cybernetic_eye": {
    "id": "iron_legion_cybernetic_eye",
    "name": "Iron Legion Cybernetic Eye",
    "description": "The Iron Legion Cybernetic Eye replaces your natural eye, granting you enhanced vision and tactical targeting data. This ocular implant is forged from durasteel and cybernetic components, seamlessly integrating with your nervous system. It grants you advantage on Perception checks involving sight and allows you to see in magical darkness. With a simple command, it can analyze an opponent's weak points, enhancing your next attack by +2 to hit and adding +1d6 damage.",
    "category": "equipment",
    "price": 30000,
    "icon": "👁️",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Enhanced Vision",
      "Magical Darkness Sight"
    ],
    "vendor": "Iron Legion",
    "shippedBy": "Sterile Medical Kit",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Analyze Weak Points",
        "rules": "As a bonus action, you can analyze an enemy within 30 feet. This grants your next attack against that creature advantage and increases the damage by +1d6 until the start of your next turn."
      },
      {
        "title": "Vision and Perception",
        "rules": "You gain advantage on all Perception checks involving sight, as well as the ability to see in magical darkness. These effects last indefinitely until you are incapacitated or fall unconscious."
      }
    ],
    "levelRequirementReason": "This implant requires significant surgical expertise and integration with your nervous system, making it suitable for characters of at least 6th level.",
    "vendorReason": "Iron Legion specializes in military-grade cybernetic enhancements, including this state-of-the-art ocular implant.",
    "shippingDetail": "Shipped via Iron Legion's secure courier service with a priority delivery time of two days.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous, with a +1d6 damage boost to the next attack until your next turn.",
      "endsWhen": "The effect ends when you are incapacitated or fall unconscious.",
      "charges": "Unlimited, but requires 1 week of recovery after installation."
    },
    "priceReason": "This implant is priced at 25,000 XP due to its advanced technology and the expertise required for installation.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T07:20:18.974175+00:00",
    "aiReviewedAt": "2026-07-22T07:20:18.974175+00:00",
    "aiReviewVersion": 1
  },
  "iron_legion_forge_tuneup": {
    "id": "iron_legion_forge_tuneup",
    "name": "Iron Legion Forge Tune-Up",
    "description": "The Iron Legion Forge Tune-Up is a meticulously crafted tuning kit, forged from the heart of Roman smithies. Upon application to your weapon, it not only enhances its resilience but also imbues you with the valor and precision of Rome's finest legionaries. For one week, your weapon gains +1 to damage rolls, and its steel becomes resistant to breaking in combat. In military settings, you draw admiration from fellow soldiers as your Intimidation checks receive a +1 bonus.",
    "price": 280,
    "icon": "🔨",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Weapon Damage Boost",
      "Enhanced Durability"
    ],
    "vendor": "iron_legion_forge",
    "shippedBy": "Centurion Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weapon Damage Boost",
        "rules": "When the Iron Legion Forge Tune-Up is applied to a weapon, it grants the wielder a +1 bonus to damage rolls for one week. This effect is instantaneous upon application and lasts until the end of this duration."
      },
      {
        "title": "Enhanced Durability",
        "rules": "For the period of its effectiveness, the tuned weapon becomes resistant to breaking during combat encounters. This resilience prevents the weapon from suffering any damage rolls that would normally reduce its hit points below 1. The effect ends when the duration expires."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners as it provides a straightforward enhancement without requiring high levels.",
    "vendorReason": "The Iron Legion Smiths are renowned for their craftsmanship and this tune-up is one of their most popular offerings.",
    "shippingDetail": "Delivered by trusted Centurion messengers, ensuring safe arrival within a week.",
    "usage": {
      "activation": "Apply the Iron Legion Forge Tune-Up to your weapon as an action at the beginning of any combat encounter.",
      "duration": "1 week from application",
      "endsWhen": "The duration expires or you remove it early by spending another action.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The fair value reflects the cost of materials and labor, plus a premium for its unique historical craftsmanship.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-22T07:20:20.614505+00:00",
    "aiReviewedAt": "2026-07-22T07:20:20.614505+00:00",
    "aiReviewVersion": 1
  },
  "iron_legion_gauntlet": {
    "id": "iron_legion_gauntlet",
    "name": "Iron Legion Gauntlet",
    "description": "The Iron Legion Gauntlet is a sturdy, polished iron glove forged in the heart of the empire's forges. Its reinforced steel plates and intricate engravings make it more than just protection—it whispers tales of valor from countless battles won. The gauntlet grants you an edge in close combat, providing +1d4 bludgeoning damage on unarmed strikes and advantage on Strength (Athletics) checks to grapple foes. However, its weight comes with a cost: it imposes a -1 penalty to Dexterity (Sleight of Hand) checks.",
    "category": "equipment",
    "price": 280,
    "icon": "👊",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Unarmed Strike Damage",
      "Grappling Advantage"
    ],
    "vendor": "iron_legion",
    "shippedBy": "Legion Supply Wagon",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Unarmed Strike Damage",
        "rules": "When you make an unarmed strike with the gauntlet, you deal 1d4 bludgeoning damage. This effect is not a spell and does not provoke attacks of opportunity."
      },
      {
        "title": "Grappling Advantage",
        "rules": "While wearing the Iron Legion Gauntlet, you have advantage on Strength (Athletics) checks to grapple foes. You can use this ability once per short or long rest."
      }
    ],
    "levelRequirementReason": "The gauntlet's weight and complex enchantments require a minimum of three levels to wield comfortably.",
    "vendorReason": "Iron Legion is known for its high-quality, battle-tested gear—this gauntlet is no exception.",
    "shippingDetail": "Ships via the Legion Supply Wagon with a delivery time of three days from the nearest legion outpost.",
    "usage": {
      "activation": "Automatic on wearing the gauntlet",
      "duration": "Until removed or until you finish a long rest",
      "endsWhen": "At the end of each short or long rest, or when removed",
      "charges": "Unlimited"
    },
    "priceReason": "The gauntlet's quality craftsmanship and enchanted properties justify its price, though it lacks the overt power to be overpriced.",
    "priceOriginal": 11200,
    "priceReviewedAt": "2026-07-22T07:20:49.166476+00:00",
    "aiReviewedAt": "2026-07-22T07:20:49.166476+00:00",
    "aiReviewVersion": 1
  },
  "iron_legion_legionary_griddle": {
    "id": "iron_legion_legionary_griddle",
    "name": "Iron Legion Legionary Griddle",
    "description": "Forged in the heart of Iron Legion's forges, this cast-iron griddle is a testament to resilience and efficiency. It heats evenly over any fire, reducing flatbread cooking time by ten precious minutes during your march. Its durable design ensures it remains sharp even through rough camp conditions, enhancing group cooking efforts by +1. The griddle is a two-handed beast that demands strength from its wielder but rewards with unmatched culinary prowess.",
    "category": "equipment",
    "price": 280,
    "icon": "🍞",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Reduces flatbread cooking time",
      "Enhances group cooking efficiency"
    ],
    "vendor": "iron_legion_camp",
    "shippedBy": "Iron Ingot Irony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cooking Time Reduction",
        "rules": "When used for cooking, this griddle reduces the flatbread preparation time by 10 minutes. This effect is instantaneous and applies to any flatbread being cooked."
      },
      {
        "title": "Enhanced Cooking Efficiency",
        "rules": "For every meal prepared with this griddle, all participants in the cooking gain a +1 bonus to their skill checks related to cooking. This benefit lasts for one hour after the meal is prepared."
      }
    ],
    "levelRequirementReason": "This griddle is suitable for any adventurer who values efficiency and culinary prowess.",
    "vendorReason": "Iron Legion Camp is known for its equipment that enhances the military's readiness, including this indispensable cooking tool.",
    "shippingDetail": "Ships via Iron Ingot Irony with a standard courier service ensuring safe and timely delivery.",
    "usage": {
      "activation": "Instantaneous when used for cooking",
      "duration": "Instantaneous, ongoing while in use",
      "endsWhen": "Exhausted after one meal preparation session; can be recharged with a short rest",
      "charges": "Unlimited charges"
    },
    "priceReason": "The griddle's value lies in its durability, efficiency gains during cooking, and the convenience it brings to any adventurer's journey.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T07:21:05.637119+00:00",
    "aiReviewedAt": "2026-07-22T07:21:05.637119+00:00",
    "aiReviewVersion": 1
  },
  "iron_legion_repair_gel": {
    "id": "iron_legion_repair_gel",
    "name": "Iron Legion Repair Gel",
    "description": "Iron Legion Repair Gel is a thick, metallic gel that glistens under dim light, exuding an almost living quality as it bonds with damaged constructs. This gel not only swiftly restores hit points but also seals breaches in mere seconds, allowing for temporary repairs to critical systems within the construct's vital components. Applied with precision, this gel hardens into a durable plating, offering a brief respite from physical attacks.",
    "category": "consumables",
    "price": 280,
    "icon": "🧴",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Restores and Seals Damage",
      "Temporary Plating Boost"
    ],
    "vendor": "iron_legion_supply",
    "shippedBy": "Sealed Canister",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores and Seals Damage",
        "rules": "When applied to a construct, the gel restores 2d8 hit points to it. Additionally, it seals any minor breaches for 24 hours, preventing further damage during this period."
      },
      {
        "title": "Temporary Plating Boost",
        "rules": "After sealing the breaches, the gel hardens into temporary plating, increasing the construct's AC by +1 for a duration of 1 hour. This effect is applied once per use and cannot be used more than twice in any given month."
      }
    ],
    "levelRequirementReason": "This item is suitable for lower-level characters who may encounter damaged constructs that require immediate attention.",
    "vendorReason": "Iron Legion Supply provides essential repair materials to their allies, ensuring their constructs are always in optimal condition.",
    "shippingDetail": "The gel is shipped in a sealed canister that maintains its potency for up to one week from the date of manufacture.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for application, with effects lasting as specified above.",
      "endsWhen": "The effects end when their durations expire or the construct is exposed to further damage that would normally trigger these repairs.",
      "charges": "Unlimited; the gel can be applied multiple times."
    },
    "priceReason": "The price reflects the rare and specialized nature of this repair gel, which combines advanced metallurgy with a unique formula to ensure reliable and quick repairs.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T07:20:44.484285+00:00",
    "aiReviewedAt": "2026-07-22T07:20:44.484285+00:00",
    "aiReviewVersion": 1
  },
  "iron_legion_repair_kit": {
    "id": "iron_legion_repair_kit",
    "name": "Iron Legion Emergency Repair Kit",
    "description": "The Iron Legion Emergency Repair Kit is a self-assembling, compact kit designed for immediate field repair of mechanical limbs or heavily armored constructs. Crafted from durable iron and imbued with the resilience of its namesake, this kit can instantly restore 4d6 hit points to a construct or an armored ally. It also has the ability to repair one shattered limb or tool without further ado, ensuring swift combat readiness for any mech or soldier in distress.",
    "category": "consumables",
    "price": 1200,
    "icon": "🔧",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Swift Repairs",
      "Instantaneous Limb Fix"
    ],
    "vendor": "iron_legion_supply",
    "shippedBy": "Standardized Container",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swift Repairs",
        "rules": "When activated as an action, this kit restores 4d6 hit points to a construct or heavily armored ally. The repair is immediate and does not provoke opportunity attacks."
      },
      {
        "title": "Instantaneous Limb Fix",
        "rules": "This kit can be used once per short rest to repair one shattered limb or tool instantly, restoring its functionality without the need for further repairs during that session."
      }
    ],
    "levelRequirementReason": "This kit is designed for soldiers and mechs who might encounter mechanical issues in combat, requiring minimal skill to use effectively.",
    "vendorReason": "Iron Legion Supply specializes in the repair and maintenance of military-grade constructs and armored units, making this kit a staple in their inventory.",
    "shippingDetail": "Ships via Standardized Container with next-day delivery for urgent orders.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per short rest, or when its repairs are complete.",
      "charges": "Uses"
    },
    "priceReason": "The kit's compact size and immediate repair capabilities justify a price of 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T07:21:20.152885+00:00",
    "aiReviewedAt": "2026-07-22T07:21:20.152885+00:00",
    "aiReviewVersion": 1
  },
  "iron_legion_roman_flatbread_recipe": {
    "id": "iron_legion_roman_flatbread_recipe",
    "name": "Recipe: Iron Legion Roman Flatbread",
    "description": "The recipe for Iron Legion Roman Flatbread is a cherished tradition handed down through the ranks of the ancient legions. Prepared by the skilled Legion Bakers, this flatbread is not just sustenance but a symbol of resilience and unity. Made with simple yet potent ingredients—flour, olives, and fresh herbs—it provides soldiers with stamina to endure long campaigns and boosts morale among comrades, ensuring they face each battle with renewed vigor and camaraderie.",
    "price": 280,
    "icon": "🍞",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Flatbread Boost",
      "Morale Lift"
    ],
    "vendor": "iron_legion_camp",
    "shippedBy": "Dough Disc Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Flatbread Boost",
        "rules": "When consumed, this flatbread allows the eater to ignore difficult terrain for up to 4 hours. Additionally, it provides a +1 bonus on morale checks made by a squad of four or more individuals."
      },
      {
        "title": "Morale Lift",
        "rules": "The recipe can be used once every long rest to teach other soldiers the art of crafting this flatbread. Once taught, a squad of bakers can produce it with minimal supplies."
      }
    ],
    "levelRequirementReason": "This simple yet effective recipe is accessible to all legion members.",
    "vendorReason": "The recipe originates from and is perpetuated by the Iron Legion's own bakers, ensuring authenticity and quality.",
    "shippingDetail": "Shipped fresh in a warm basket to maintain freshness and flavor.",
    "usage": {
      "activation": "Eating the flatbread during a meal or snack.",
      "duration": "4 hours of terrain ignoring; +1 bonus on morale checks lasts until next long rest.",
      "endsWhen": "Upon expiration of duration, consumption stops its effects.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The price reflects the recipe's rarity and the skill required to teach it effectively.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T07:21:09.891569+00:00",
    "aiReviewedAt": "2026-07-22T07:21:09.891569+00:00",
    "aiReviewVersion": 1
  },
  "iron_legion_targeting_visor": {
    "id": "iron_legion_targeting_visor",
    "name": "Iron Legion Targeting Visor",
    "description": "The Iron Legion Targeting Visor is a sleek, cybernetic eyepiece that glints with an eerie blue light, seamlessly integrating into its wearer's visage. This tactical marvel reveals the vital weak points of foes in real-time through subtle visual cues. The visor is a product of Forgesword's advanced engineering and has been field-tested by Iron Legion soldiers, ensuring it is both reliable and effective on the battlefield.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔬",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Targeted Weakness Highlight",
      "Sustained Combat Advantage"
    ],
    "vendor": "iron_legion",
    "shippedBy": "Armory Drop",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Targeted Weakness Highlight",
        "rules": "As a bonus action, you can target one creature. Until the start of your next turn, you and your allies have advantage on attack rolls against that creature due to its exposed weak points being highlighted by the visor."
      },
      {
        "title": "Sustained Combat Advantage",
        "rules": "The visor's core charges for 1 minute after each use. If it is not used within this time, the charges dissipate and must be recharged at dawn. The visor has a total of three charges."
      }
    ],
    "levelRequirementReason": "This device requires proficiency in heavy armor to ensure it fits securely without compromising combat effectiveness.",
    "vendorReason": "Iron Legion soldiers often requisition such advanced gear for their missions, making this visor a standard issue item for them.",
    "shippingDetail": "Delivered by armored courier with priority handling; expedited delivery time is reduced to one day.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the start of your next turn",
      "endsWhen": "The visor's core charges are depleted or you use it again within the minute, expending a charge each time",
      "charges": "3 charges, recharging at dawn"
    },
    "priceReason": "Balanced to provide tactical advantage without being overly powerful, this visor remains a rare but fair addition to any adventurer's arsenal.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-22T07:21:29.155236+00:00",
    "aiReviewedAt": "2026-07-22T07:21:29.155236+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_beach_bonanza": {
    "id": "isle_delfino_beach_bonanza",
    "name": "Beach Bonanza",
    "description": "The Beach Bonanza is a shimmering trinket crafted from seashells and coral, said to bring good fortune to those who partake in beachside contests. When activated, it grants its bearer a burst of speed, enhancing their movements by +20% for the next half-minute. It also disrupts foes with a powerful wave, causing them to stagger for 2 seconds upon contact. This whimsical trinket is a rare find from Isle Delfino, where it's believed to be a gift from the sea gods themselves.",
    "price": 1200,
    "icon": "🏖",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Speed Boost",
      "Staggering Wave"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "The Seagull Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "Activates as a bonus action. Grants +20% movement speed for 30 seconds. This effect ends when the wearer moves out of their current space or if they take damage."
      },
      {
        "title": "Staggering Wave",
        "rules": "When an enemy creature is struck by the wearer, it must make a DC 15 Strength saving throw or be knocked prone for 2 seconds. This effect can only occur once per target per minute."
      }
    ],
    "levelRequirementReason": "The Beach Bonanza's effects are best suited for those who have already honed their skills in beachside contests.",
    "vendorReason": "Isle Delfino is known for its connection to the sea, making it a fitting vendor for this nautical-themed trinket.",
    "shippingDetail": "Ships via the Seagull Express, which ensures timely delivery with special care from the island's avian messengers.",
    "usage": {
      "activation": "Bonus action to activate and use.",
      "duration": "30 seconds per activation.",
      "endsWhen": "The effect ends when the wearer moves out of their space or takes damage.",
      "charges": "Unlimited uses, but only one effect can be active at a time."
    },
    "priceReason": "Balanced to provide a significant boost without being overpowered for its rarity and vendor.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T07:21:35.673249+00:00",
    "aiReviewedAt": "2026-07-22T07:21:35.673249+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_beach_breeze_rod": {
    "id": "isle_delfino_beach_breeze_rod",
    "name": "Beach Breeze Rod",
    "description": "The Beach Breeze Rod is a lightweight, enchanted fishing rod that whispers the secrets of the sea. Crafted by Isle Delfino's master artisans from driftwood and woven with threads of starlight, it enhances your fishing prowess, doubling the yield of each successful cast and reducing fatigue by half while you toil under the sun. This rare find is a must-have for any adventurous angler seeking to catch more than just common fish.",
    "category": "equipment",
    "price": 1200,
    "icon": "🎣",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+100% Fishing Yield",
      "Reduces Fatigue"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fishing Yield Boost",
        "rules": "When you successfully cast a fishing line, the Beach Breeze Rod doubles the amount of fish caught. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Fatigue Reduction",
        "rules": "While using this rod, you are considered less fatigued from casting. You regain an additional 1d6 stamina points at the start of each short rest. This effect ends when you stop fishing or cast the rod for more than 30 minutes."
      }
    ],
    "levelRequirementReason": "This enchantment is simple enough to be crafted by lower-level artisans, making it accessible to adventurers starting their journey.",
    "vendorReason": "Isle Delfino specializes in crafting items that enhance the fishing experience, making this rod a natural addition to their inventory.",
    "shippingDetail": "Ships via Pipe Express, ensuring timely delivery within a week of purchase.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Until the end of your next long rest or upon ceasing to fish for more than 30 minutes",
      "endsWhen": "You stop fishing or cast the rod for over 30 minutes consecutively",
      "charges": "Unlimited"
    },
    "priceReason": "This balanced price reflects the item's moderate power and rarity, making it a fair addition to any adventurer's gear.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:21:24.315857+00:00",
    "aiReviewedAt": "2026-07-22T07:21:24.315857+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_breeze_bell": {
    "id": "isle_delfino_breeze_bell",
    "name": "Breeze Bell",
    "description": "The Breeze Bell is a delicate, wind-powered bell that chimes melodiously with each step, summoning a gentle breeze to aid swift navigation through Isle Delfino’s breezy pathways. Crafted from polished brass and adorned with seashells, this bell not only enhances movement speed by 20% in wind zones but also grants +15% evasion against ranged attacks. The bell's chimes are said to have been enchanted by the island’s ancient mariners, making it a relic of both utility and lore.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌬",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Evasion Boost",
      "Wind Zones Movement"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Evasion Boost",
        "rules": "The user gains +15% evasion against ranged attacks while wearing the Breeze Bell. This bonus does not stack with similar effects and is active as long as the bell is worn."
      },
      {
        "title": "Wind Zones Movement",
        "rules": "While in wind zones, the user's movement speed increases by 20%. This effect lasts until the end of each turn or when the user leaves a wind zone. The bell must be worn for at least one minute to activate this feature."
      }
    ],
    "levelRequirementReason": "The Breeze Bell is designed for adventurers of all levels, providing assistance during their journey.",
    "vendorReason": "As a local treasure, the Breeze Bell is sold exclusively by Isle Delfino to support the island's economy and preserve its heritage.",
    "shippingDetail": "The bell may take an additional day for shipping due to its delicate nature, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect when worn",
      "duration": "Instantaneous; lasts until leaving the wind zone or removing the bell",
      "endsWhen": "Leaving a wind zone or removing the bell",
      "charges": "Unlimited"
    },
    "priceReason": "The Breeze Bell is priced at 1000 XP, reflecting its craftsmanship and enchantment.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:21:50.654740+00:00",
    "aiReviewedAt": "2026-07-22T07:21:50.654740+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_breeze_bolt_glove": {
    "id": "isle_delfino_breeze_bolt_glove",
    "name": "Breeze Bolt Glove",
    "description": "The Breeze Bolt Glove is a lightweight, wind-woven glove that channels the breath of the Delfino Isles. Crafted from the finest seashell and enchanted by the windswept skies, it allows its wearer to unleash three swift gusts of air in a cone before their foes. This nimble accessory is perfect for dodging attacks or creating tactical distractions in cramped quarters, making it an indispensable companion for any sea-faring adventurer.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌬",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Swift Gust",
      "Reduced Cooldown"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Swift Gust",
        "rules": "As a bonus action, the wearer can hurl three gusts of wind in a 30-foot cone. Each gust deals no damage but pushes creatures within the area up to 15 feet away from the target. This effect lasts for 5 seconds and has a range of 60 feet."
      },
      {
        "title": "Reduced Cooldown",
        "rules": "The Breeze Bolt Glove reduces the cooldown of all the wearer’s actions by 20%. This benefit applies to any standard action, bonus action, or reaction used within the glove's effective duration. The reduced cooldown stacks with other effects that provide similar benefits."
      }
    ],
    "levelRequirementReason": "The Breeze Bolt Glove is designed for adventurers who have already proven their worth and are ready to harness the elemental power of the sea.",
    "vendorReason": "Isle Delfino, known for its mastery of seafaring, naturally specializes in items that enhance a sailor's abilities on the high seas.",
    "shippingDetail": "The Void Drifter Relay ensures swift delivery through their interdimensional courier network, making sure your new glove arrives at your doorstep just as quickly as it was crafted.",
    "usage": {
      "activation": "Bonus action to unleash gusts; passive effect applies while wearing the glove",
      "duration": "5 seconds for each gust and while the reduced cooldown is active",
      "endsWhen": "The wearer stops using the bonus action or the duration expires",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the glove's unique enchantments and the rare materials used in its construction.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:21:55.651914+00:00",
    "aiReviewedAt": "2026-07-22T07:21:55.651914+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_breeze_bottle": {
    "id": "isle_delfino_breeze_bottle",
    "name": "Breeze Bottle",
    "description": "The Breeze Bottle contains a swirling vortex of tropical winds that can be unleashed to knock back enemies and restore health over time, making it an indispensable tool for agile fighters or support characters. Crafted from seashells found along the shores of Isle Delfino, this relic holds the essence of the sea's breezes, capable of delivering both gusts strong enough to send foes reeling and a healing breeze that can replenish wounds with each passing second.",
    "price": 1200,
    "icon": "🌬",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Knockback",
      "Healing Breeze"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Knockback",
        "rules": "When activated, the Breeze Bottle unleashes a gust of wind that knocks back enemies within a 10-foot radius. This effect has a range of 15 feet and lasts for 3 seconds after contact with an enemy. There is no save DC required, but it can only be used once per short or long rest."
      },
      {
        "title": "Healing Breeze",
        "rules": "Upon activation, the Breeze Bottle releases a gentle healing breeze that restores 10% of the user's hit points over 5 seconds. This effect is instantaneous and has no save DC to resist. It can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Breeze Bottle is accessible to all adventurers, making it a versatile tool for any party.",
    "vendorReason": "Isle Delfino is renowned for its rich natural resources and magical artifacts, and the Breeze Bottle is no exception.",
    "shippingDetail": "The Breeze Bottle arrives promptly via the Void Drifter Relay, ensuring it reaches its destination safely and swiftly.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Knockback) / 5 seconds (Healing Breeze)",
      "endsWhen": "After use or at the end of a short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Breeze Bottle's balanced price reflects its utility and rarity, making it accessible yet valuable for any adventurer.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:22:47.635934+00:00",
    "aiReviewedAt": "2026-07-22T07:22:47.635934+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_breezy_breeze_glove": {
    "id": "isle_delfino_breezy_breeze_glove",
    "name": "Breezy Breeze Glove",
    "description": "The Breezy Breeze Glove is woven from the very winds that sweep over Isle Delfino's highest cliffs, its fingers laced with the essence of the island's tempests. Donning this glove allows you to move as if on a gust of wind, and you gain a nimble edge in combat, occasionally triggering a forceful gust that sends enemies reeling backward. This glove is ideal for those who need speed and surprise to navigate the island's treacherous paths.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌬",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Wind-Swift Movement",
      "Gust of Wind"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Wind-Swift Movement",
        "rules": "While wearing this glove, you gain a +10% movement speed bonus. Additionally, once per short rest, you can activate the glove to trigger a gust that sends an enemy within 5 feet of you back 2 squares as if it were knocked prone."
      },
      {
        "title": "Gust of Wind",
        "rules": "When triggered by your action, this effect causes all creatures adjacent to you or within 10 feet to make a DC 13 Dexterity saving throw. On a failed save, the creature is pushed back one square and knocked prone."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to master the control of such an elemental force.",
    "vendorReason": "The vendors of Isle Delfino are well-acquainted with the island's natural elements and are able to craft items that harness their power.",
    "shippingDetail": "Ships via Koopa Express, ensuring swift delivery from the heart of the island.",
    "usage": {
      "activation": "Action or Reaction (requires concentration to maintain)",
      "duration": "Concentration up to one minute per short rest, ends if concentration is lost",
      "endsWhen": "Lost concentration, interrupted by damage, or expended once per short rest",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect the glove's unique elemental capabilities and the resources needed for its crafting.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T07:22:20.595139+00:00",
    "aiReviewedAt": "2026-07-22T07:22:20.595139+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_breezy_talisman": {
    "id": "isle_delfino_breezy_talisman",
    "name": "Breezy Talisman",
    "description": "The Breezy Talisman is a delicate, wind-carved talisman crafted from the tropical wood of Isle Delfino's ancient trees and imbued with the island's breezes. Activated by a swift gesture, it propels you into a fleeting flight that leaves behind a swirling gust trail capable of harming nearby foes. Its power draws sustenance directly from the island’s vibrant ecosystem, making it both a symbol and a tool for navigating its wilds.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Flight",
      "Gust Trail"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Flight",
        "rules": "When activated as a bonus action, you gain the ability to fly up to 30 feet in any direction. This effect lasts for 5 seconds or until you make an attack or take damage."
      },
      {
        "title": "Gust Trail",
        "rules": "For every 10 feet of flight distance covered while the talisman is active, a gust of wind deals 1d6 force damage to each creature within 10 feet of your final destination. You can only trigger this effect once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Breezy Talisman's power is accessible to adventurers just beginning their journey, allowing them to explore Isle Delfino with ease.",
    "vendorReason": "Isle Delfino's artisans are renowned for creating items that harmonize with the island's natural magic, making it fitting for them to offer this talisman to visitors and inhabitants alike.",
    "shippingDetail": "Delivered swiftly by Pipe Express, ensuring adventurers can claim their talismans before embarking on their next quest.",
    "usage": {
      "activation": "Bonus action",
      "duration": "5 seconds or until you make an attack or take damage",
      "endsWhen": "You attack or take damage; recharges at the start of your next short or long rest",
      "charges": "Unlimited, but only one gust trail per rest"
    },
    "priceReason": "The Breezy Talisman is priced moderately to reflect its utility and the resources needed for its crafting.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:22:20.829777+00:00",
    "aiReviewedAt": "2026-07-22T07:22:20.829777+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_bursting_breeze": {
    "id": "isle_delfino_bursting_breeze",
    "name": "Bursting Breeze of the Isle",
    "description": "The Bursting Breeze of the Isle is a magical wind whip crafted from the very essence of the Delfino Isle's oceanic breezes. Its handle glows with an iridescent sheen, and when activated, it propels its wielder into the air like the gales that sweep the island. A wide arc of wind slashes through foes, dealing devastating damage before pulling the user back for another strike. This weapon is perfect for aerial duels and surprise attacks from above.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌬",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Aerial Leap",
      "Wind Slash Arc"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Aerial Leap",
        "rules": "When activated as a bonus action, the wielder leaps into the air up to 30 feet. This movement does not provoke opportunity attacks and allows for quick evasive maneuvers or surprise attacks."
      },
      {
        "title": "Wind Slash Arc",
        "rules": "Upon landing, the wielder can unleash an arc of wind that deals 1d6 + DEX modifier slashing damage to all creatures in a 20-foot line. This attack has a range of 30 feet and is not affected by cover."
      }
    ],
    "levelRequirementReason": "This weapon requires proficiency with whips and some familiarity with the aerial combat it demands.",
    "vendorReason": "The Isle Delfino is known for its mastery of all things nautical, including crafting martial arts weapons like this one.",
    "shippingDetail": "Delivered by the Shy Guys themselves, ensuring it arrives with a burst of speed and secrecy.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "The user lands after their leap or if they take an action other than moving.",
      "charges": "Recharges on a short rest"
    },
    "priceReason": "This weapon is crafted with rare materials and requires expert skill to use effectively, justifying its moderate price.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T07:22:09.343203+00:00",
    "aiReviewedAt": "2026-07-22T07:22:09.343203+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_chain_chomp_blade": {
    "id": "isle_delfino_chain_chomp_blade",
    "name": "Chain Chomp Blade",
    "description": "The Chain Chomp Blade, forged in the forges of the Rakasha Clans from the bones of a weaponized Chain Chomp, exudes a tropical magic that glows faintly under moonlight. Its serrated edge hums with the essence of its living origin, dealing extra damage to undead foes and granting a temporary speed boost after each strike. This cursed blade screams in agony when it finds flesh, leaving a mark of pain on its victim.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deals extra damage to undead",
      "Speed boost per hit"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Undead Damage",
        "rules": "When the Chain Chomp Blade strikes an undead foe, it deals an additional 1d6 necrotic damage. This effect does not require a saving throw and is active as long as the weapon remains in combat with an undead."
      },
      {
        "title": "Speed Boost",
        "rules": "After each successful hit with the Chain Chomp Blade, the wielder gains a +10 foot bonus to their speed until the end of their next turn. This effect can occur multiple times per day but cannot stack more than twice in a single combat."
      }
    ],
    "levelRequirementReason": "This weapon's cursed nature and unique design require a higher level character to wield effectively.",
    "vendorReason": "Isle Delfino is known for its connections with exotic and dangerous items, making it the perfect vendor for such an artifact.",
    "shippingDetail": "Due to the weapon's cursed nature, Pipe Express provides a special courier service ensuring safe delivery of this item.",
    "usage": {
      "activation": "Melee Attack",
      "duration": "Instantaneous effect per hit; speed boost lasts until end of next turn",
      "endsWhen": "The weapon is used against nonmagical targets or when the wielder drops it in combat.",
      "charges": "Unlimited uses, resets after 24 hours"
    },
    "priceReason": "The balanced price reflects the cursed nature and unique enchantments of this weapon.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:22:43.296881+00:00",
    "aiReviewedAt": "2026-07-22T07:22:43.296881+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_chain_chomp_bolt": {
    "id": "isle_delfino_chain_chomp_bolt",
    "name": "Chain Chomp Bolt",
    "description": "The Chain Chomp Bolt, forged from the fiery heart of the Chain Chomp's rage, is a weaponized bolt that lingers in midair like a living entity. It can be launched from any equipped melee weapon, striking with blinding speed and explosive force. Upon impact, it has an 18% chance to trigger an ink spurt that clouds the battlefield for moments, giving allies temporary cover while blinding foes within range.",
    "price": 5300,
    "icon": "⚔",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Weaponized Bolt",
      "Ink Spurt"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Weaponized Bolt",
        "rules": "When activated as a bonus action, the Chain Chomp Bolt strikes with 200 force damage. The bolt has an instantaneous duration and can be fired from any melee weapon equipped by the user."
      },
      {
        "title": "Ink Spurt",
        "rules": "There is a 18% chance that upon striking an enemy, the bolt will trigger an ink spurt effect. This effect clouds the battlefield for up to 2 rounds, granting advantage on attack rolls and saving throws within 30 feet of the target, while imposing disadvantage on perception checks against any ink clouded area."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 5 due to its specialized mechanics and weaponized nature.",
    "vendorReason": "Isle Delfino, home of the Chain Chomp, is the only place where such an item can be crafted, making it logical for them to sell it.",
    "shippingDetail": "Ships within a week, with additional delivery delays during rainy seasons in Inkopolis.",
    "usage": {
      "activation": "Bonus action to fire the bolt or trigger ink spurt",
      "duration": "Instantaneous; bolt destroys itself upon striking an enemy",
      "endsWhen": "Charges depleted or weapon replaced",
      "charges": "5 charges, recharged after a long rest"
    },
    "priceReason": "The item's rarity and unique mechanics justify its price of 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T07:22:53.152782+00:00",
    "aiReviewedAt": "2026-07-22T07:22:53.152782+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_coconut_crush": {
    "id": "isle_delfino_coconut_crush",
    "name": "Coconut Crush",
    "description": "The Coconut Crush is a formidable weapon forged from a colossal coconut shell and imbued with the essence of Shine Sprites. Its sturdy, organic core vibrates with supernatural energy, making it perfect for shattering tough defenses or stunning powerful foes in battle. With each swing, it releases a burst of tropical magic that leaves enemies dazed and disoriented for a turn, ensuring your allies have an opening to strike again.",
    "category": "equipment",
    "price": 5300,
    "icon": "🥥",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Stuns target",
      "Increased damage"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Stun",
        "rules": "When you hit with the Coconut Crush, the target is stunned until the start of its next turn. This effect has a save DC of 15. On a successful save, the target shakes off the daze."
      },
      {
        "title": "Increased Damage",
        "rules": "The Coconut Crush deals an additional +30 damage on hit (before modifiers). It can be used as a bonus action once per short or long rest."
      }
    ],
    "levelRequirementReason": "This weapon requires significant strength and control to wield effectively, suitable only for seasoned adventurers.",
    "vendorReason": "Isle Delfino is known for crafting unique items from local materials, and the Coconut Crush exemplifies their expertise in tropical weaponry.",
    "shippingDetail": "Carefully packed with coconut fiber padding to ensure safe delivery. May take an extra week due to fragile nature.",
    "usage": {
      "activation": "Bonus action to swing and stun target.",
      "duration": "Instantaneous effect.",
      "endsWhen": "Target saves successfully or the next turn begins for it.",
      "charges": "Recharge on a short rest."
    },
    "priceReason": "Balanced price reflects the weapon's unique construction and powerful effects, suitable for epic encounters.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T07:23:18.750868+00:00",
    "aiReviewedAt": "2026-07-22T07:23:18.750868+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_coral_soul_core": {
    "id": "isle_delfino_coral_soul_core",
    "name": "Coral Soul Core",
    "description": "The Coral Soul Core hums with the life force of ancient sea creatures, its pulsating surface a vibrant spectrum of blues and purples. When activated, it releases a radiant light that heals wounds and tempers elemental fury, making allies nigh invulnerable to fire and water damage for a brief moment. The core's energy pulses in harmony with the tides, creating a gentle wave around you as it grants temporary protection.",
    "price": 280,
    "icon": "💎",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Heals Allies",
      "Enhances Elemental Resistance"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heal Allies",
        "rules": "When activated, the Coral Soul Core heals all allies within a 10-foot radius for 150 hit points. The effect has no save DC and does not expend charges."
      },
      {
        "title": "Enhanced Elemental Resistance",
        "rules": "For 30 seconds after activation, all damage from fire and water elemental sources is reduced by 20%. This benefit ends if the user takes damage from a non-elemental source or upon the core's expiration. The core has an unlimited number of uses."
      }
    ],
    "levelRequirementReason": "The Coral Soul Core's innate connection to elemental forces makes it accessible to lower-level adventurers.",
    "vendorReason": "Isle Delfino is renowned for its deep-sea treasures and magical artifacts, making the Coral Soul Core a fitting addition to their inventory.",
    "shippingDetail": "The Rakasha deliver the Coral Soul Core with care, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds",
      "endsWhen": "The user takes damage from a non-elemental source or the core's duration expires.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and utility in combat.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:23:43.859547+00:00",
    "aiReviewedAt": "2026-07-22T07:23:43.859547+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_crimson_fleet_scarab": {
    "id": "isle_delfino_crimson_fleet_scarab",
    "name": "Crimson Fleet Scarab",
    "description": "The Crimson Fleet Scarab is a jewel crafted from the molten heart of a sunken ship. It hums with the energy of ancient naval magic, channeling the fury of the Crimson Fleet's war machines. This relic can be wielded as an amulet or pendant, and its wearer feels the pulse of the fleet in every strike. Its critical hits are more devastating than any cannonball, reducing enemy armor by 20% for a fleeting moment, while also causing a 20% chance of triggering a ship explosion on hit.",
    "price": 5400,
    "icon": "⚔",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Critical Devastation",
      "Armor Piercing"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Critical Devastation",
        "rules": "When the user scores a critical hit with an attack, there is a 20% chance to trigger a ship explosion. The explosion deals 1d8 fire damage and forces all creatures within 5 feet of the target to make a DC 15 Dexterity saving throw or be knocked prone."
      },
      {
        "title": "Armor Piercing",
        "rules": "For 30 seconds, the user's attacks deal an additional 20% damage against targets with reduced armor. This effect ends if the user is incapacitated or when it reaches its duration limit."
      }
    ],
    "levelRequirementReason": "The Crimson Fleet Scarab requires a high level to wield effectively, as its magic draws from the user's own combat prowess and the fleet's legendary power.",
    "vendorReason": "Captain Syrups ensures that only those who have earned their place in the Crimson Fleet can obtain this relic of naval might.",
    "shippingDetail": "The Scarab is couriered by the Rakasha, known for their speed and reliability, ensuring it arrives undamaged and ready to be wielded in combat.",
    "usage": {
      "activation": "Instantaneous activation upon donning or removing the amulet.",
      "duration": "30 seconds per use; ends when the user is incapacitated or upon removal.",
      "endsWhen": "The effect ends if the user is incapacitated or removed from the item.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Balanced as it requires high-level proficiency and provides potent offensive support that enhances damage output in combat scenarios.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:23:03.877529+00:00",
    "aiReviewedAt": "2026-07-22T07:23:03.877529+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_dolphin_ward": {
    "id": "isle_delfino_dolphin_ward",
    "name": "Dolphin Ward",
    "description": "The Dolphin Ward is a shimmering amulet that mimics the grace and resilience of its namesake. Crafted from polished seashells and enchanted with the spirits of ancient dolphins, this charm reduces incoming damage by 20% when worn near water, making you as elusive as a dolphin in dense foliage. When submerged, it grants a 50% stealth bonus to your movement through aquatic environments, allowing for swift evasion or covert maneuvers.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Water Grace",
      "Stealthy Dolphin"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Sea Steeds Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Water Grace",
        "rules": "While within 10 feet of water, the wearer gains a +2 bonus to AC and has resistance to bludgeoning damage. This effect is limited to 5 minutes per long rest."
      },
      {
        "title": "Stealthy Dolphin",
        "rules": "When submerged in water, the wearer grants themselves advantage on Dexterity (Stealth) checks made within 30 feet of water. This effect lasts for 1 minute and can be used once every short or long rest."
      }
    ],
    "levelRequirementReason": "This charm is suitable for adventurers at level 1, providing a minor but useful advantage to those who frequently explore aquatic environments.",
    "vendorReason": "Isle Delfino, with its extensive trade routes and deep connection to the ocean, often stocks items that enhance one's ability to navigate watery areas.",
    "shippingDetail": "The item is delivered by a Sea Steed, ensuring safe passage through treacherous waters. The delivery time varies depending on sea conditions but averages two weeks from the vendor’s port.",
    "usage": {
      "activation": "Passive effect when near water; active when submerged in water",
      "duration": "Water Grace: 5 minutes per long rest, Stealthy Dolphin: 1 minute per day",
      "endsWhen": "Worn off or out of water for more than an hour",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the charm's enchantment, which offers minor but useful abilities that can be crucial in aquatic combat and exploration.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:23:10.020003+00:00",
    "aiReviewedAt": "2026-07-22T07:23:10.020003+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_doughnut_hole_key": {
    "id": "isle_delfino_doughnut_hole_key",
    "name": "Doughnut Hole Key",
    "description": "The Doughnut Hole Key is a hollowed-out pastry key, its surface flecked with burnt sugar and inscribed with ancient runes. Carved from enchanted dough by a sentient baker of the void, it whispers tales of hidden void chambers and cosmic mysteries. When wielded, it opens a rift to the Doughnut Hole for 10 minutes, allowing passage to the ethereal realm within. Its scent lingers, filling the air with the aroma of burnt sugar and an existential chill.",
    "price": 5400,
    "icon": "🍩",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Opens a portal to the Doughnut Hole",
      "Grants resistance to psychic damage"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Portal Opening",
        "rules": "The user must consume something sweet within the last 30 minutes. Activates as a bonus action, creating a rift that allows passage for up to 10 minutes. The portal deals 2d4 psychic damage per minute it remains open and requires concentration (DC 15) to maintain. If concentration is lost or the user steps out of range, the portal collapses."
      },
      {
        "title": "Psychic Resistance",
        "rules": "The key grants a +1 bonus to saving throws against psychic damage for one hour after use. No save is required if the effect originates from the Doughnut Hole itself."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of mystical energies.",
    "vendorReason": "The baker of the void who created it sells it to those seeking its power.",
    "shippingDetail": "Delivered by spectral mail, requiring a night journey through the void.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 minutes per use",
      "endsWhen": "Concentration is lost or the user steps out of range; portal collapses after 10 minutes",
      "charges": "Once per day"
    },
    "priceReason": "Balanced price for a key that opens to cosmic realms and grants resistance.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T07:23:20.524727+00:00",
    "aiReviewedAt": "2026-07-22T07:23:20.524727+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_faerun_key_ring": {
    "id": "isle_delfino_faerun_key_ring",
    "name": "Faerun Key Ring",
    "description": "The Faerun Key Ring is a shimmering brass ring that glows with an ethereal light, crafted by the enigmatic Rakasha Clans. This intricate piece not only unlocks secret passageways linking the Isle Delfino to Faerûn's hidden realms but also grants temporary immunity to magical traps within these realms. When activated near high-magic zones, it briefly disorients any creatures that attempt to use it, adding an element of surprise to your adventures.",
    "price": 5400,
    "icon": "🔑",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Opens secret paths",
      "Immunity to magical traps"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Secret Path Activation",
        "rules": "Requires a bonus action and has a duration of 1 hour. Grants temporary immunity to all magical traps within the realms for its duration."
      },
      {
        "title": "Disorientation in High Magic Zones",
        "rules": "When used near high-magic zones, any creature that attempts to use it must succeed on a DC 15 Constitution saving throw or be blinded and unable to move for 1 minute. This effect ends when the user moves away from the high-magic zone."
      }
    ],
    "levelRequirementReason": "Requires only minimal magical prowess to activate this intricate device.",
    "vendorReason": "The key ring is a local item, and Isle Delfino's artisans are well-known for their connections with the Rakasha Clans.",
    "shippingDetail": "Standard shipping via Pipe Express takes 3 days. Expedited delivery available upon request for an additional fee.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour",
      "endsWhen": "The user moves away from a high-magic zone or after 1 hour, whichever comes first",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect the item's utility and rarity without being overpowered.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T07:23:24.804781+00:00",
    "aiReviewedAt": "2026-07-22T07:23:24.804781+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_fake_rakasha_spirit_walk_cargo": {
    "id": "isle_delfino_fake_rakasha_spirit_walk_cargo",
    "name": "Spirit Walk Courier Pack (Scam)",
    "description": "The Spirit Walk Courier Pack (Scam) is a deceptive courier bag crafted to mimic authenticity. Its exterior looks like any standard delivery pack, complete with the Rakasha Spirit Walk branding and a magically enhanced lock. This fake pack promises instant delivery to Rogueport docks but only works on the fictional Isle Delfino, making it a scam for those who believe its tricks. It grants a 20% bonus to Stealth checks and consumes 150 mana per use.",
    "price": 26000,
    "icon": "📦",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Stealth Boost",
      "Mana Drain"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Courier of Delfino Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stealth Boost",
        "rules": "Activates on reaction. Grants a +2d6 bonus to one Stealth check, which must be made before the start of your turn. Ends when you make the check or after 1 minute if no check is made."
      },
      {
        "title": "Mana Drain",
        "rules": "Consumes 150 mana per use. If used in combat, there's a 20% chance (DC 14) that an opponent within 30 feet must succeed on a DC 14 Constitution saving throw or be subjected to a hallucinatory effect for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to manage the magic and physical strain of using such an item.",
    "vendorReason": "Sold by Fake Rakasha Spirit Walk (Scam) as part of their elaborate scheme on Isle Delfino.",
    "shippingDetail": "Ships via Delfino Express, guaranteed delivery within an hour on the island but only works within its boundaries.",
    "usage": {
      "activation": "Reaction or action (for Stealth boost), Instantaneous (mana drain)",
      "duration": "One use per short rest for stealth bonus; ends when check is made or after 1 minute",
      "endsWhen": "Exhausted after one use, requires a short rest to recharge",
      "charges": "Unlimited, recharges on a short rest"
    },
    "priceReason": "Balanced at 1000 XP due to its limited functionality and the risk involved in using it.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T07:23:35.024614+00:00",
    "aiReviewedAt": "2026-07-22T07:23:35.024614+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_feywhisper_shoes": {
    "id": "isle_delfino_feywhisper_shoes",
    "name": "Feywhisper Shoes",
    "description": "Feywhisper Shoes are lightweight sandals that whisper the secrets of the Feywild with each step. Crafted from enchanted willow wood and adorned with silver bells, they allow you to glide silently across the ground as if dancing through a forest. The laughter of the Shine Sprites grants you unmatched agility in grassy fields and waterways, leaving a faint shimmer behind. Wielders can evade traps with ease, their movements unpredictable and graceful.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌺",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants 20% speed boost on grass or water",
      "Silent Glide"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Swift Step in Grass or Water",
        "rules": "While moving through grass or water, the wearer gains a +20 foot bonus to their walking speed. This effect lasts until the end of your next turn."
      },
      {
        "title": "Silent Glide",
        "rules": "Activate as a bonus action to become invisible for up to 1 minute. You must have at least three successful Dexterity (Stealth) checks in the last round to use this ability. Once used, it cannot be used again until you complete a short or long rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum of 3rd level to wield effectively due to its enchantments.",
    "vendorReason": "Isle Delfino is renowned for its unique and enchanted footwear, making them the perfect vendor for Feywhisper Shoes.",
    "shippingDetail": "Standard shipping via Pipe Express. Items are carefully packed to preserve their magical essence.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Up to 1 minute or until the wearer chooses to end it early",
      "endsWhen": "At the end of your next turn, upon being damaged, or if you leave an area with water or grass",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering the enchantments and unique abilities of these shoes.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:23:34.852498+00:00",
    "aiReviewedAt": "2026-07-22T07:23:34.852498+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_feywhisper_tonic": {
    "id": "isle_delfino_feywhisper_tonic",
    "name": "Feywhisper Tonic",
    "description": "The Feywhisper Tonic is a shimmering elixir that captures the whimsical laughter of Shine Sprites. Its frothy, golden hue glistens like starlight and tastes as sweet as a summer breeze. Sipping this tonic grants you magical insight, allowing you to see through illusions for one turn, and enhances your charm abilities by 25% for three turns. The effect feels like being wrapped in sunlight and giggles, leaving behind a trail of sparkling laughter that distracts foes.",
    "price": 1200,
    "icon": "🍹",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Enhances charm success chance by 25%",
      "Grants magical insight (see through illusions)"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Charm",
        "rules": "The user gains a +1d4 bonus to Charisma (Deception) checks for three turns. Ends when the duration expires."
      },
      {
        "title": "Magical Insight",
        "rules": "For one turn, the user can see through illusions and hidden enemies as if under the effect of Detect Magic. Ends when the duration expires."
      }
    ],
    "levelRequirementReason": "The tonic is potent enough to be consumed by any adventurer, regardless of their current level.",
    "vendorReason": "Isle Delfino specializes in exotic and magical items, making this a perfect addition to their inventory.",
    "shippingDetail": "The tonic is shipped with a special container that keeps it fresh until it reaches its destination.",
    "usage": {
      "activation": "Drink the tonic as an action.",
      "duration": "Instantaneous (effects last for their respective durations).",
      "endsWhen": "The effects end when the duration expires or if consumed by another.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rarity and magical properties of the tonic, balancing its power with a fair value.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:23:40.831680+00:00",
    "aiReviewedAt": "2026-07-22T07:23:40.831680+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_feywild_fabric": {
    "id": "isle_delfino_feywild_fabric",
    "name": "Feywild Fabric",
    "description": "Feywild Fabric, a shimmering textile woven from the laughter of sprites and threads of starlight, grants its wearer an almost ethereal grace in combat. This enchanted cloth not only increases evasion by +10%, allowing you to slip through tight spaces with ease, but also allows you to phase briefly through solid obstacles during your turn as a bonus action. The faint giggles that accompany the use of this fabric echo like distant whispers, a reminder of Feywild's whimsical magic.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+10% evasion",
      "Phase through solid objects (bonus action)"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "+10% Evasion",
        "rules": "This effect grants the wearer +10% to their AC. The increase is passive and applies continuously while wearing the fabric."
      },
      {
        "title": "Phase through Solid Objects (Bonus Action)",
        "rules": "The wearer may attempt to phase through a solid object as a bonus action, provided they have line of effect. On a successful Wisdom saving throw (DC 14), the wearer passes through the obstacle without damage. If failed, the wearer is pushed back one foot per success level."
      }
    ],
    "levelRequirementReason": "Wearing this fabric requires a certain finesse and magical attunement that only those of at least third level can achieve.",
    "vendorReason": "Isle Delfino, known for its connection to the Feywild, regularly trades in enchanted items from the realm's magic.",
    "shippingDetail": "The fabric arrives wrapped in a shimmering mist, ensuring it remains enchanted during transport.",
    "usage": {
      "activation": "Bonus action for phasing through objects; passive effect while worn.",
      "duration": "Instantaneous phasing attempt; continuous evasion bonus.",
      "endsWhen": "Wearing the fabric ends when removed or destroyed; phasing attempts end at the start of your next turn.",
      "charges": "Unlimited, but only one phasing attempt per round."
    },
    "priceReason": "The balanced price reflects the rare material and enchantment required to craft such a versatile and magical fabric.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T19:47:52.539300+00:00",
    "aiReviewedAt": "2026-07-22T19:47:52.539300+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_feywild_fan": {
    "id": "isle_delfino_feywild_fan",
    "name": "Feywild Fan of Whispering Leaves",
    "description": "The Feywild Fan of Whispering Leaves is a delicate fan woven from translucent, iridescent leaves that hum softly, their song echoing the whispers of the fey realm. When wielded, it grants the user stealth for 15 seconds and temporary evasion against magical detection, making them nearly invisible to the eyes of magic. The fan's leaves pulse with a faint glow, enhancing nature spells cast by the bearer, amplifying their potency in harmony with the Feywild’s magic.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth for 15 Seconds",
      "Evasion Against Magical Detection"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth",
        "rules": "The wielder gains advantage on Dexterity (Stealth) checks for 15 seconds. This effect ends if the user attacks or casts a spell."
      },
      {
        "title": "Evasion Against Magical Detection",
        "rules": "For the duration, you have resistance to being detected by magical means of detection and scrying. This effect expires upon taking damage or ending your turn without moving 30 feet."
      }
    ],
    "levelRequirementReason": "The fan’s magic is subtle but potent, requiring only a basic understanding of the Feywild to wield it effectively.",
    "vendorReason": "As keepers of arcane knowledge and travelers of the Feywild, Isle Delfino's vendors are well-acquainted with such enchanted artifacts.",
    "shippingDetail": "The fan is delivered by Boo Spectral Mail, known for its reliable service through even the most ethereal realms.",
    "usage": {
      "activation": "Use as a bonus action to activate the stealth and evasion effects.",
      "duration": "15 seconds per activation.",
      "endsWhen": "Taking damage or ending your turn without moving at least 30 feet.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "The fan’s rarity and the unique combination of its stealth and magical evasion abilities justify this balanced price in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:24:19.110310+00:00",
    "aiReviewedAt": "2026-07-22T07:24:19.110310+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_feywild_fizz": {
    "id": "isle_delfino_feywild_fizz",
    "name": "Feywild Fizz",
    "description": "Feywild Fizz is a shimmering, citrus-scented soda that dances with light in your hand. As you take a sip while surrounded by fey creatures, it energizes your spirit and heightens your agility. The refreshing bubbles grant +15% movement speed within the Feywild for 1 hour, making every step feel like a dance with nature. Should an attack come from a fey creature, there's a +10% chance to dodge it.",
    "price": 1200,
    "icon": "🍹",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "+15% Movement Speed in Feywild",
      "+10% Dodge Chance against Fey Creatures"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Agility",
        "rules": "When consumed, the drink grants a +15% increase to movement speed within the Feywild for 1 hour. This effect does not stack with other similar abilities and ends if you leave the Feywild."
      },
      {
        "title": "Fey Dodge",
        "rules": "While imbued by the soda's effects, there is a +10% chance to successfully dodge attacks from fey creatures. This benefit lasts for 1 hour or until your next long rest."
      }
    ],
    "levelRequirementReason": "The soda's magic is mild enough that any adventurer can partake in its refreshing effects.",
    "vendorReason": "Isle Delfino specializes in exotic beverages and has the resources to import and sell this unique soda from the Feywild.",
    "shippingDetail": "The soda is shipped via a secretive route, ensuring it retains its magical properties until delivery.",
    "usage": {
      "activation": "Consume one sip of the soda while in the Feywild to activate the effects.",
      "duration": "1 hour or until your next long rest",
      "endsWhen": "Leaving the Feywild or taking a long rest, whichever occurs first.",
      "charges": "Unlimited; each sip uses one charge."
    },
    "priceReason": "The soda is rare and imported from the Feywild, balancing its effects with a price that reflects its mystical value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:23:56.979486+00:00",
    "aiReviewedAt": "2026-07-22T07:23:56.979486+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_feywild_flicker_shirt": {
    "id": "isle_delfino_feywild_flicker_shirt",
    "name": "Feywild Flicker Shirt",
    "description": "The Feywild Flicker Shirt, a shimmering garment woven from the very fabric of the Feywild, allows its wearer to briefly vanish and reappear within a nearby zone of magical essence. The shirt's fabric hums with otherworldly light as it transports the user in a flash, leaving behind a faint, glowing trail that reveals hidden paths for allies. Worn by those who navigate between worlds, this artifact is both a symbol and tool of Feywild magic.",
    "category": "equipment",
    "price": 5400,
    "icon": "🌀",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Teleportation to Nearby Feywild Zones",
      "Allied Pathfinding Trail"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Teleportation to Nearby Feywild Zones",
        "rules": "As an action, the wearer can teleport up to 10 meters to the nearest accessible Feywild zone. This effect is visible only to allies and lasts for 2 seconds. The user must be able to see a Feywild portal within range. The duration of the teleportation ends when the destination is reached or if the user takes any action other than movement."
      },
      {
        "title": "Allied Pathfinding Trail",
        "rules": "For 2 seconds after using the shirt, the path taken by the teleportation leaves behind a glowing trail that reveals hidden paths and secret doors within the Feywild zone. This effect is only visible to allies and ends when the duration expires or if the user takes any action other than movement."
      }
    ],
    "levelRequirementReason": "Requires at least level 7 to master the delicate magic of the shirt.",
    "vendorReason": "Isle Delfino, a hub for travelers and adventurers, regularly stocks rare Feywild artifacts like this shirt.",
    "shippingDetail": "Ships via Koopa Express, ensuring safe delivery even to the most remote Feywild zones.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous teleportation; trail lasts for 2 seconds",
      "endsWhen": "Destination is reached or if the user takes any action other than movement",
      "charges": "1 use per short rest"
    },
    "priceReason": "The shirt's rarity and magical properties justify a price of 1,000 XP.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T07:24:41.700173+00:00",
    "aiReviewedAt": "2026-07-22T07:24:41.700173+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_feywild_pearl": {
    "id": "isle_delfino_feywild_pearl",
    "name": "Feywild Pearl",
    "description": "The Feywild Pearl glows with an ethereal light, its surface shimmering like the depths of a forgotten forest pool. Crafted from the very essence of the Feywild's hidden groves, it harmonizes with nature and can summon gentle illusions that mimic the whispers of ancient trees. This glowing orb is said to amplify one’s connection to the natural world, granting an almost supernatural accuracy when fighting magical foes and enhancing the potency of enchantments by 20%.",
    "price": 1200,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Nature's Harmony",
      "Enchantment Amplifier"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Nature's Harmony",
        "rules": "When activated as a bonus action, the Feywild Pearl can be worn to grant +20% accuracy against magical foes. The effect lasts until the end of your next turn."
      },
      {
        "title": "Enchantment Amplifier",
        "rules": "When used in crafting, this rare pearl increases the duration of enchantments by 20%, allowing for more potent and enduring creations."
      }
    ],
    "levelRequirementReason": "Crafting with such a powerful and rare item requires a level of mastery that only those who have proven their skills in magic can achieve.",
    "vendorReason": "The denizens of Isle Delfino, known for their connection to nature, are the most trusted source for items that harmonize with the natural world.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, ensuring even the most delicate of artifacts arrive in pristine condition.",
    "usage": {
      "activation": "Bonus Action to wear and gain Nature's Harmony; Crafting use is instantaneous.",
      "duration": "Until end of next turn for Nature's Harmony; Enchantment Amplifier applies immediately to all enchantments used.",
      "endsWhen": "Removal or cessation of wearing for Nature's Harmony; Completion of the crafting process for Enchantment Amplifier.",
      "charges": "Unlimited, but limited by the number of enchantment uses."
    },
    "priceReason": "The Feywild Pearl is rare and powerful, balancing its cost with a level requirement that ensures only those who truly need it can afford it.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:24:24.170568+00:00",
    "aiReviewedAt": "2026-07-22T07:24:24.170568+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_feywild_scent": {
    "id": "isle_delfino_feywild_scent",
    "name": "Feywild Scent of the Whispering Grove",
    "description": "The Feywild Scent of the Whispering Grove is a delicate essence that wafts like a mist through the forest, drawing rare and elusive Feywild creatures to your side. Inhaling its fragrance momentarily cloaks you in an ethereal veil, granting you stealth for 15 seconds. When combined with the grove’s magic, it increases your chance of encountering these otherworldly beings by 50%, making them more likely to approach rather than flee.",
    "price": 280,
    "icon": "🌿",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Increased Feywild Encounters",
      "Stealth Aura"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Feywild Encounters",
        "rules": "Increases the chance of encountering Feywild creatures by 50% for 3 minutes. This effect ends when you leave the Feywild region or if a creature successfully saves against this with a DC of 12."
      },
      {
        "title": "Stealth Aura",
        "rules": "Grants you invisibility and silent movement within the Feywild for 15 seconds upon activation. Ends early if you attack, cast a spell, or are damaged; no more than once per long rest."
      }
    ],
    "levelRequirementReason": "This essence is accessible to players of all levels who wish to explore the Feywild.",
    "vendorReason": "Isle Delfino, known for its connection with the Feywild, provides this rare reagent to adventurers seeking to traverse and interact with these magical creatures.",
    "shippingDetail": "Ships via a swift Rakasha spirit courier who delivers the essence directly from the heart of the Whispering Grove.",
    "usage": {
      "activation": "A free action upon entering or exiting the Feywild region.",
      "duration": "15 seconds for stealth, 3 minutes for increased encounter chance; both effects end early under certain conditions.",
      "endsWhen": "Stealth ends if you attack, cast a spell, or are damaged. Encounters increase for only one long rest per day.",
      "charges": "Unlimited, but only once per long rest."
    },
    "priceReason": "The essence is priced at 1000 XP to reflect its rarity and the magic required to craft it from the heart of the Feywild.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:24:34.678281+00:00",
    "aiReviewedAt": "2026-07-22T07:24:34.678281+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_feywild_scented_satchel": {
    "id": "isle_delfino_feywild_scented_satchel",
    "name": "Feywild Scented Satchel",
    "description": "Woven from the dreams of drowsy sprites, this satchel is a delicate basket crafted from ethereal threads and enchanted with the essence of Feywild flora. It leaves behind a lingering scent that attracts hidden treasures and mischievous spirits, making it an invaluable companion for scavengers and collectors venturing into unexplored zones. The satchel's magic not only enhances one’s stealth but also subtly draws attention to secret caches waiting to be discovered.",
    "category": "equipment",
    "price": 1200,
    "icon": "🧚",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+10% chance to find hidden loot when entering unexplored zones",
      "Stealth bonus in Feywild zones"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Treasure Attraction",
        "rules": "When entering an unexplored zone, the user has a +10% chance to discover hidden treasures or artifacts that are not immediately visible."
      },
      {
        "title": "Enhanced Stealth in Feywild",
        "rules": "The user gains a +5 bonus to Dexterity (Stealth) checks for 24 hours after using the satchel. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This simple yet enchanted item is accessible to adventurers of all levels, making it a valuable tool for beginners and veterans alike.",
    "vendorReason": "Isle Delfino specializes in items that enhance one's journey through the Feywild, ensuring their patrons have the tools needed to thrive in such magical realms.",
    "shippingDetail": "Ships swiftly via Pipe Express, usually within a week of purchase.",
    "usage": {
      "activation": "Passive effect when entering unexplored zones; active use once per long rest for stealth bonus",
      "duration": "24 hours or until used again",
      "endsWhen": "After one long rest or upon discovery of hidden treasure, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the item's enchantments and utility without being overpowered.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:24:38.556565+00:00",
    "aiReviewedAt": "2026-07-22T07:24:38.556565+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_frosted_mirage_rod": {
    "id": "isle_delfino_frosted_mirage_rod",
    "name": "Frosted Mirage Rod",
    "description": "The Frosted Mirage Rod is a delicate crystalline rod etched with arcane runes, shimmering with an otherworldly frost that dances in its grip. Crafted from the frozen tears of ancient ice giants, this relic warps reality to reflect and block attacks. When swung, it conjures temporary mirrors that distort incoming harm, casting enemies into mirages that fade after moments. This rod is a perfect companion for adventurers venturing through treacherous lands where shadows and light play tricks on the senses.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Reflects Attacks",
      "Warps Reality"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reflects Attacks",
        "rules": "When you use an action to swing the rod, it creates a temporary mirror that reflects one melee or ranged attack made against you. The target of the attack must succeed on a Dexterity saving throw (DC 13) or be redirected to another location within 5 feet. This effect lasts for 3 seconds and can only be used once per short rest."
      },
      {
        "title": "Warps Reality",
        "rules": "While the rod is active, it distorts your surroundings in a way that blocks line-of-sight for enemies within 10 feet of you. This effect grants you advantage on saving throws against being blinded or having your vision obscured by magical effects until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This rod requires a minimum level to wield due to its arcane power and the complex magic imbued within it.",
    "vendorReason": "As a renowned outpost for mystical artifacts, Isle Delfino is known for its vast selection of enchantments, including this rare relic.",
    "shippingDetail": "The rod arrives in pristine condition, delivered via Lakitu Drones' speediest courier service, ensuring it reaches you swiftly and intact.",
    "usage": {
      "activation": "Action",
      "duration": "3 seconds per use",
      "endsWhen": "After being used or when the start of your next turn arrives",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Frosted Mirage Rod's price reflects its rare crafting materials and potent magical properties, making it a sought-after tool for adventurers.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T07:25:21.975503+00:00",
    "aiReviewedAt": "2026-07-22T07:25:21.975503+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_glitter_bottle": {
    "id": "isle_delfino_glitter_bottle",
    "name": "Glitter Bottle",
    "description": "The Glitter Bottle is a shimmering glass vessel containing iridescent particles that glisten like the sea at dawn. When unleashed, it blinds foes and enhances the wielder's strikes, making every attack feel as if they are cloaked in the magic of Isle Delfino itself. This bottle not only dazzles but also grants temporary prowess to its bearer, a relic crafted from the sands of the coastal shores where legend and reality intertwine.",
    "price": 1200,
    "icon": "📦",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Dazzle",
      "Boost Attack Power"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Dazzling Glare",
        "rules": "When activated as an action, this bottle emits a dazzling light that blinds all enemies within 10 feet, causing them to miss their next two attacks. This effect lasts for 2 turns and has no save DC."
      },
      {
        "title": "Shining Strike",
        "rules": "For the duration of 2 turns after activation, the wielder's attack rolls are increased by +20%. There is a 15% chance to dodge any incoming attacks during this time. This effect ends when used or if the user drops the bottle."
      }
    ],
    "levelRequirementReason": "The Glitter Bottle requires a minimum level of 3 due to its complexity and the skill needed to handle such an artifact.",
    "vendorReason": "Isle Delfino, known for its magical curiosities, is the only vendor capable of offering this unique item.",
    "shippingDetail": "This bottle ships via a custom, enchanted delivery method that ensures it arrives in perfect condition, even over long distances.",
    "usage": {
      "activation": "Action",
      "duration": "2 turns",
      "endsWhen": "Used or dropped by the user",
      "charges": "Unlimited"
    },
    "priceReason": "The Glitter Bottle is moderately priced at 1000 XP, reflecting its rarity and the magical energy it contains.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T07:25:20.560523+00:00",
    "aiReviewedAt": "2026-07-22T07:25:20.560523+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_glowing_coral_rod": {
    "id": "isle_delfino_glowing_coral_rod",
    "name": "Glowing Coral Rod",
    "description": "The Glowing Coral Rod hums with the life force of the deep, its coral glow pulsating in time with the tides. Crafted from the bones of ancient sea creatures and bound by the magic of Isle Delfino, this rod can summon aquatic allies or unleash explosive bursts that shatter the waters' surface. It's a tool of both harmony and destruction, but only those who understand its balance may wield it.",
    "category": "equipment",
    "price": 1200,
    "icon": "🐠",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Summons Aquatic Allies",
      "Explosive Coral Burst"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Summon Aquatic Allies",
        "rules": "As an action, the user can summon a small school of fish or a minor aquatic creature for up to 1 minute. The summoned creatures are under your control and obey your commands until dismissed. If you fail a DC 15 Wisdom (Insight) check due to the summoned creatures' actions, they may break free after 1d4 turns."
      },
      {
        "title": "Explosive Coral Burst",
        "rules": "As an action, unleash a burst of energy from the rod that deals 2d6 force damage in a 30-foot radius centered on you. You can use this ability once per long rest and must make a DC 15 Constitution saving throw after each use to avoid suffering 1d4 temporary hit points of nonlethal damage."
      }
    ],
    "levelRequirementReason": "Requires the user to have a strong understanding of aquatic magic and the balance between nature and destruction.",
    "vendorReason": "Isle Delfino specializes in items that harmonize with the ocean, making it natural for them to stock this magical fishing rod.",
    "shippingDetail": "Delivered by a Rakasha courier who ensures the rod's magic remains intact during transit.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous summoning; explosive burst lasts until used or dismissed",
      "endsWhen": "Summons end if you lose concentration (as if concentrating on a spell), and the explosive burst ends immediately upon being used. The rod can only be used once per long rest.",
      "charges": "Unlimited uses, but only one summoning and one explosive burst per long rest."
    },
    "priceReason": "Balanced at 1000 XP as a rare item with significant utility in both combat and exploration scenarios.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:25:11.216224+00:00",
    "aiReviewedAt": "2026-07-22T07:25:11.216224+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_glowing_gear": {
    "id": "isle_delfino_glowing_gear",
    "name": "Glowing Gear of the Delfino Dunes",
    "description": "The Glowing Gear of the Delfino Dunes is a set of enchanted armor that radiates the vibrant heat and light of the tropical sun, casting an inviting glow upon the wearer. Crafted from the sands of the Delfino Dunes, it grants enhanced defense with a 30% bonus to AC, and its warm aura attracts Shine Sprites for buffs, enhancing combat prowess. This armor is perfect for explorers and combatants who seek the balance of resilience and natural magic in their gear.",
    "category": "equipment",
    "price": 5800,
    "icon": "🛡",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Enhanced Defense",
      "Spectral Buffs"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Defense",
        "rules": "The Glowing Gear provides a +3 bonus to AC, which is active as long as the wearer remains in the Delfino Dunes. This effect ends if the wearer leaves the dunes for more than one hour."
      },
      {
        "title": "Spectral Buffs",
        "rules": "For every minute the Glowing Gear is worn within the Delfino Dunes, a Shine Sprite appears and grants a +1 bonus to attack rolls or damage rolls. This effect ends if the wearer's AC drops below 18."
      }
    ],
    "levelRequirementReason": "The armor requires at least 5th level to ensure that the user can effectively utilize its defensive and buffs.",
    "vendorReason": "Isle Delfino is renowned for crafting gear in harmony with nature, making this enchanted set a perfect product of their expertise.",
    "shippingDetail": "Pipe Express offers expedited delivery within the Delfino region, ensuring that adventurers receive their Glowing Gear swiftly and intact.",
    "usage": {
      "activation": "Passive effect upon donning the gear while in the Delfino Dunes.",
      "duration": "Active as long as the wearer remains within the Delfino Dunes.",
      "endsWhen": "If the wearer leaves the Delfino Dunes for more than one hour or if their AC drops below 18 due to damage.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Glowing Gear of the Delfino Dunes is priced at 3800 XP, reflecting its rarity and the unique enchantments that make it a valuable asset for adventurers.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T07:25:29.806692+00:00",
    "aiReviewedAt": "2026-07-22T07:25:29.806692+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_glowing_glider": {
    "id": "isle_delfino_glowing_glider",
    "name": "Glowing Glider",
    "description": "The Glowing Glider is a sleek, bioluminescent winged device crafted from the glowing flora of Delfino Isle. Its wings emit a soft, ethereal light that illuminates darkened jungle paths and hidden ruins. This glider allows for swift aerial travel over dense foliage and water, making it invaluable in navigating the island’s treacherous jungles. With each flap, you can soar up to 50 feet higher than usual, perfect for escaping traps or scouting ahead.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌊",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+50% Jump Height",
      "Flies at 30% Speed Over Water and Jungle Terrain"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Swift Wind Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Leaping",
        "rules": "When you use a running start, you can jump up to an additional 50 feet. This effect lasts until the start of your next turn."
      },
      {
        "title": "Jungle Glide",
        "rules": "While flying over jungle terrain or water, your movement speed is reduced by only 30%, allowing for efficient travel through dense foliage and across rivers."
      }
    ],
    "levelRequirementReason": "This glider is designed to be used by adventurers at the beginning of their journey.",
    "vendorReason": "Isle Delfino specializes in crafting items that enhance exploration and survival on its lush, treacherous island terrain.",
    "shippingDetail": "The glider is delivered with a detailed assembly kit, ensuring it’s ready to use upon arrival.",
    "usage": {
      "activation": "Action or bonus action to activate the enhanced jump and jungle glide abilities.",
      "duration": "Instantaneous activation; lasts until the start of your next turn unless interrupted.",
      "endsWhen": "The effect ends when you make a running start, are no longer in jungle terrain or water, or use another action that requires movement.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This glider is crafted from rare bioluminescent flora and designed for quick, efficient travel through challenging terrains.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T07:25:40.631062+00:00",
    "aiReviewedAt": "2026-07-22T07:25:40.631062+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_glowing_grape": {
    "id": "isle_delfino_glowing_grape",
    "name": "Glowing Grape",
    "description": "The Glowling Grape, a radiant fruit plucked from the treacherous shores of Isle Delfino, glows softly in your palm, its surface shimmering with an ethereal light. This sweet and magical treat not only restores health but also grants a temporary boost to charisma, perfect for charming foes or rallying allies. The fruit's origin is as mysterious as it is beneficial, said to have been cultivated by the enigmatic Delfinian elves in their hidden gardens. Its glow intensifies when consumed, releasing a delightful sparkle that dances around you like a spark of hope in dark times.",
    "price": 280,
    "icon": "🍇",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Health Restoration",
      "Charisma Boost"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Delfinian Dolphin Messengers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Health Restoration",
        "rules": "When consumed, the Glowling Grape restores an additional 25% of your maximum hit points. This effect is instantaneous and does not require any action."
      },
      {
        "title": "Charisma Boost",
        "rules": "For the next 10 seconds, you gain a +15 bonus to Charisma (Performance) checks and saving throws. The boost ends if you make an attack roll or cast a spell that requires concentration."
      }
    ],
    "levelRequirementReason": "This fruit is accessible to all adventurers who might need its health-restoring properties, making it a versatile tool for anyone starting their journey.",
    "vendorReason": "Isle Delfino's market is known for offering exotic and magical goods that are hard to find elsewhere, ensuring the Glowling Grape finds a place among their wares.",
    "shippingDetail": "The fruit must be consumed within one hour of receiving it; any delay risks its magical properties fading away.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "10 seconds for Charisma boost, instantaneous for health restoration",
      "endsWhen": "The effect ends if an attack or spell requiring concentration is cast",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price point to reflect its uncommon rarity and the magical benefits it provides without overshadowing more powerful items.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:26:02.266065+00:00",
    "aiReviewedAt": "2026-07-22T07:26:02.266065+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_glowroot_staff": {
    "id": "isle_delfino_glowroot_staff",
    "name": "Glowroot Staff of the Shine Sprite",
    "description": "The Glowroot Staff of the Shine Sprite is a staff crafted from the luminescent roots of tropical sprites, forged in the heart of Delfino Isle's sunlit groves. Its branches glow softly under sunlight, casting a warm, ethereal light that enhances one’s magical resistance and elemental damage output. While bathed in the island’s golden rays, the user regenerates health at an accelerated rate, bolstering their vitality in both battle and rest.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌺",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% Elemental Damage",
      "+15% Magic Resistance"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Elemental Boost",
        "rules": "While in a sunlit area with direct sunlight, this staff grants the wielder +25% elemental damage. This effect is passive and does not require activation."
      },
      {
        "title": "Magic Resistance Amplification",
        "rules": "+15% magic resistance is active while within a sunlit environment. This increases the user's ability to resist magical attacks, but only when exposed to sunlight."
      }
    ],
    "levelRequirementReason": "The staff requires significant focus and experience to wield its light-enhanced effects effectively.",
    "vendorReason": "Isle Delfino is renowned for its connection to nature, making it a natural home for such an enchanted staff.",
    "shippingDetail": "The staff's branches are fragile and require special handling. Pipe Express ensures safe delivery by using padded packaging.",
    "usage": {
      "activation": "Passive effect while in sunlight; no activation required.",
      "duration": "Permanent until moved out of a sunlit area or destroyed.",
      "endsWhen": "The staff is taken out of a sunlit environment, or it breaks.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the staff's unique properties and the time and materials required for its crafting.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:26:14.939776+00:00",
    "aiReviewedAt": "2026-07-22T07:26:14.939776+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_ink_squid_satchel": {
    "id": "isle_delfino_ink_squid_satchel",
    "name": "Ink Squid Satchel",
    "description": "The Ink Squid Satchel is a leather pouch sewn from the discarded skin of an ancient, battle-scarred ink squid. It holds not just ink but also the lore and history of Delfino City's legendary squid wars. When opened in Inkopolis, it releases a cloud of ink that mists the area, restoring 100 hit points to all nearby allies and temporarily blinding enemies in bright light for one round.",
    "price": 280,
    "icon": "🧪",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Restores HP",
      "Causes Temporary Blindness"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "HP Restoration",
        "rules": "When opened within Inkopolis, the satchel releases a cloud of ink that restores 100 hit points to all allies in a 30-foot radius. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Temporary Blindness",
        "rules": "Enemies caught in bright light within the area of effect must make a DC 14 Constitution saving throw or become blinded for one round. The satchel can only cause this effect once per day."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginning adventurers who are just starting to explore the mysteries of Delfino City.",
    "vendorReason": "As a local vendor, Isle Delfino can provide items that are relevant and useful to the city's history and culture.",
    "shippingDetail": "Ships via express courier within three days of purchase.",
    "usage": {
      "activation": "Use an action to open and release the ink cloud in Inkopolis.",
      "duration": "Instantaneous for HP restoration, one round for blindness effect.",
      "endsWhen": "The effect ends when its duration expires or the satchel is used again.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This price reflects the item's rarity, utility in a key location (Inkopolis), and its multiple effects that are beneficial for adventurers.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T07:25:56.319336+00:00",
    "aiReviewedAt": "2026-07-22T07:25:56.319336+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_jellyfish_pearl": {
    "id": "isle_delfino_jellyfish_pearl",
    "name": "Jellyfish Pearl",
    "description": "The Jellyfish Pearl, a bioluminescent gem harvested from the depths of the ocean by the Isle Delfino divers, pulses with an ethereal glow that mirrors the rhythm of the waves. This enchanted pearl not only heals minor wounds but also enhances agility, making the wearer more nimble and resilient in combat. The soothing aura it emits can be felt even before it touches its owner's skin, calming both body and spirit.",
    "price": 1200,
    "icon": "🐠",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Heals Minor Wounds",
      "Enhances Agility"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soothing Aura",
        "rules": "The wearer gains a +20% dodge chance. This effect is passive and remains active as long as the pearl is worn. The aura does not stack with other similar effects."
      },
      {
        "title": "Restorative Glow",
        "rules": "At the start of each of your turns, you can restore 15% hit points (rounded down) and 10% stamina points. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The pearl's inherent healing properties are accessible to all adventurers, making it a valuable item for every party.",
    "vendorReason": "Isle Delfino is renowned for its deep-sea expeditions and the unique treasures they bring back from the ocean floor.",
    "shippingDetail": "The pearl is carefully packed in a waterproof container to ensure it arrives at your doorstep in pristine condition, even after long voyages through stormy seas.",
    "usage": {
      "activation": "Passive effect; no activation required. The pearl's glow and effects are always active once worn.",
      "duration": "Permanent while the pearl is worn",
      "endsWhen": "Destroyed or removed from the wearer",
      "charges": "Unlimited"
    },
    "priceReason": "The Jellyfish Pearl's rarity and unique combination of healing and agility-enhancing effects make it a fair price for adventurers seeking to bolster their party.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T19:47:18.357651+00:00",
    "aiReviewedAt": "2026-07-22T19:47:18.357651+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_koopa_gold_coin": {
    "id": "isle_delfino_koopa_gold_coin",
    "name": "Koopa Gold Coin",
    "description": "The Koopa Gold Coin is a relic from the tumultuous times of the Koopa banking collapse. Crafted by the rakasha clans, this coin harbors an ancient rune that reacts to market trends, shifting its value based on current economic conditions within Koopa banking zones. Its hidden rune ensures it retains its worth only when used in these specific regions; outside their bounds, it loses its luster and becomes a mere token of the past. This coin can be exchanged for alternate currencies or trade for rare artifacts, adding a touch of intrigue to every transaction.",
    "price": 280,
    "icon": "💰",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Market Value Shift",
      "Alternate Currency Exchange"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Market Value Shift",
        "rules": "When used within Koopa banking zones, the coin's value increases by 20% for all purchases made at Isle Delfino. This effect is instantaneous and lasts until the end of your next turn."
      },
      {
        "title": "Alternate Currency Exchange",
        "rules": "This coin can be exchanged for rare artifacts or alternate currencies at a 1:1 ratio, but only within Koopa banking zones. It must be handled by a Rakasha Clan member to ensure authenticity and validity of the exchange."
      }
    ],
    "levelRequirementReason": "Basic familiarity with Koopa banking systems is necessary to understand how this coin's value fluctuates.",
    "vendorReason": "Isle Delfino, a hub for Koopa banking and trade, naturally stocks items of such economic significance.",
    "shippingDetail": "Ships via Pipe Express within Koopa banking zones; delivery is swift but requires the coin to be handled by Rakasha Clan members upon arrival.",
    "usage": {
      "activation": "Instantaneous action when used in a purchase or exchange.",
      "duration": "Instantaneous effect, lasts until the end of your next turn.",
      "endsWhen": "The effect ends if not used within Koopa banking zones or if the coin is removed from its designated use area.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's rarity and economic importance in Koopa banking zones.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-22T07:26:11.568917+00:00",
    "aiReviewedAt": "2026-07-22T07:26:11.568917+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_lightning_cape": {
    "id": "isle_delfino_lightning_cape",
    "name": "Lightning Cape of the Shining Isle",
    "description": "The Lightning Cape of the Shining Isle is a shimmering garment woven from the lightning-sparked threads of Delfino Isle's skies. This electrically charged cape not only enhances its wearer with a dazzling aura but also grants them a dance of tropical thunder that can disrupt foes and increase their attack speed by 20%. When struck, it has a 10% chance to unleash 'Lightning Flash,' delivering an additional 150% damage in a burst.",
    "category": "equipment",
    "price": 5400,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "+20% Attack Speed",
      "Disrupts Enemy Resistance"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Lightning Flash",
        "rules": "When the wearer is attacked, there's a 10% chance that 'Lightning Flash' triggers. This effect deals an additional 150% damage to the attacker in a burst centered on the point of contact."
      },
      {
        "title": "Disrupts Enemy Resistance",
        "rules": "For three turns after activation, enemies within 10 feet suffer from a 25% reduction in resistance, making their defenses less effective against attacks."
      }
    ],
    "levelRequirementReason": "This cape's electrical properties and ability to disrupt enemy defenses make it suitable for high-level adventurers who can handle its power.",
    "vendorReason": "Isle Delfino is known for its mastery of electric storms, making the Lightning Cape a natural addition to their inventory.",
    "shippingDetail": "Delivered by Lakitu Drones, this cape arrives with a flash of lightning and a gust of wind, ensuring it reaches its destination in one piece.",
    "usage": {
      "activation": "Activates as a reaction when attacked.",
      "duration": "Instantaneous effect; 'Lightning Flash' ends after the attack.",
      "endsWhen": "The wearer is no longer attacked or the duration expires.",
      "charges": "Unlimited, recharges upon being removed from combat."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the cape's unique electrical properties and its ability to disrupt enemy defenses.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T07:27:10.122886+00:00",
    "aiReviewedAt": "2026-07-22T07:27:10.122886+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_lullaby_amulet": {
    "id": "isle_delfino_lullaby_amulet",
    "name": "Lullaby Amulet of the Whispering Tide",
    "description": "The Lullaby Amulet of the Whispering Tide is a shimmering, sea-green amulet adorned with silver waves and pearls. When worn, it emits a soothing melody that calms nearby enemies, reducing their attack speed by 10% for 20 seconds. Allies within 15 feet also gain a +2 bonus to AC and an increase in their attack speed by 10%. The amulet's melodies are said to be the whispers of the Delfino merfolk, who crafted it from seashells and enchanted pearls.",
    "category": "equipment",
    "price": 1200,
    "icon": "🎵",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reduces enemy attack speed",
      "Increases ally attack speed and defense"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Melodic Calm",
        "rules": "When a creature within 15 feet of the wearer is an enemy, their attack speed is reduced by 10% for 20 seconds. This effect ends if the amulet is removed or if the target moves more than 30 feet away."
      },
      {
        "title": "Whispering Shield",
        "rules": "Allies within 15 feet of the wearer gain a +2 bonus to AC and their attack speed increases by 10%. This effect lasts until the start of the wearer's next turn, or if they move more than 30 feet away from an ally."
      }
    ],
    "levelRequirementReason": "This amulet requires a minimum level to harness its melodic power and maintain balance with the wearer’s abilities.",
    "vendorReason": "Only Isle Delfino, known for their connection with sea magic, offers this enchanted amulet.",
    "shippingDetail": "The amulet is carefully packed in a waterproof, enchanted box to ensure it arrives at its destination unharmed.",
    "usage": {
      "activation": "Passive effect when worn",
      "duration": "Lasts until the start of the wearer's next turn or ends if moved more than 30 feet away from an ally/enemy within range.",
      "endsWhen": "Removed, or target moves more than 30 feet away",
      "charges": "Unlimited uses"
    },
    "priceReason": "The amulet's enchantments and the merfolk’s craftsmanship justify its moderate price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:26:53.627778+00:00",
    "aiReviewedAt": "2026-07-22T07:26:53.627778+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_lullaby_chime": {
    "id": "isle_delfino_lullaby_chime",
    "name": "Lullaby Chime",
    "description": "The Lullaby Chime, crafted from the sacred wood of the ancient Delfino groves, emits a haunting melody that soothes even the most ferocious foes. Its sound can be heard for miles and has a calming effect on creatures within earshot, reducing their attack speed by 20% for 10 seconds. The chime's music also grants you a +2 bonus to Dexterity saving throws for 5 minutes after activation. Ideal for stealth missions or when you need to distract enemies during an ambush.",
    "price": 280,
    "icon": "🎵",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Soothing Sound",
      "Dexterity Boost"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soothing Sound",
        "rules": "When activated as a bonus action, the Lullaby Chime emits a calming melody that reduces all creatures within 10 meters of you by 20% attack speed for 10 seconds. This effect ends if you move more than 5 meters away from the center point or if an enemy within range makes an attack."
      },
      {
        "title": "Dexterity Boost",
        "rules": "After activating the Lullaby Chime, you gain a +2 bonus to Dexterity saving throws for 5 minutes. This effect ends when it expires or if you use your action on another task."
      }
    ],
    "levelRequirementReason": "The Lullaby Chime is accessible early in the campaign to aid newer adventurers who could benefit from its calming and supportive effects.",
    "vendorReason": "Isle Delfino specializes in crafting items that resonate with their natural environment, making it a fitting place for such an artifact.",
    "shippingDetail": "The chime is carefully packed and shipped within two days of purchase.",
    "usage": {
      "activation": "Bonus action to activate, reaction to end the effect if you move more than 5 meters away from the center point or an enemy makes an attack.",
      "duration": "10 seconds for 'Soothing Sound', 5 minutes for 'Dexterity Boost'",
      "endsWhen": "Ends upon activation of another bonus action, moving further than 5 meters, or when a creature within range attacks",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Lullaby Chime's price reflects its craftsmanship and the magical properties that make it invaluable for stealth and support in early campaigns.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T19:47:34.031972+00:00",
    "aiReviewedAt": "2026-07-22T19:47:34.031972+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_lumina_bloom": {
    "id": "isle_delfino_lumina_bloom",
    "name": "Lumina Bloom",
    "description": "The Lumina Bloom is a bioluminescent flower that pulses with the rhythm of the tides, casting an ethereal glow upon planting. This radiant bloom not only illuminates its surroundings but also subtly alters enemy behavior, making them more cautious and less aggressive. When planted during the Fractured Atrium event, it further stabilizes reality, reducing instability by 15%. Allies within a 3x3 area gain +10% critical hit chance for 5 turns.",
    "price": 1200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reflects Enemy Attacks",
      "Enhances Critical Hit Chance"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reflects Enemy Attacks",
        "rules": "When planted, the Lumina Bloom summons a temporary aura that reflects enemy attacks within a 3x3 area. This effect lasts for 1 minute and has no save DC or limits."
      },
      {
        "title": "Enhances Critical Hit Chance",
        "rules": "Allies within a 3x3 area gain +10% critical hit chance for 5 turns. There is no save DC, but the effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Lumina Bloom's effects are universally beneficial and enhance teamwork without requiring high-level expertise.",
    "vendorReason": "Isle Delfino is renowned for its connection to the natural world, making it a fitting vendor for this enchanted bloom.",
    "shippingDetail": "Ships within 3 days with Koopa Postal's standard delivery service.",
    "usage": {
      "activation": "Instantaneous upon planting during the event or at any time if not during the Fractured Atrium event.",
      "duration": "1 minute for reflecting attacks, 5 turns for enhanced critical hit chance.",
      "endsWhen": "The effect ends when its duration expires.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, the Lumina Bloom offers a fair value given its utility and rarity during specific events.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:27:01.463108+00:00",
    "aiReviewedAt": "2026-07-22T07:27:01.463108+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_lumina_breeze_rod": {
    "id": "isle_delfino_lumina_breeze_rod",
    "name": "Lumina Breeze Rod",
    "description": "The Lumina Breeze Rod is a slender, glowing staff that seems to dance in sync with the island’s gentle winds. Crafted from driftwood and enchanted with starlight, it grants +25% ranged attack power within wind zones, allowing you to weave through aerial skirmishes with ease. When you hit an opponent, there's a +15% chance for your weapon to bypass their defenses, thanks to the rod's ethereal winds.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌬",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+25% Ranged Attack Power",
      "+15% Evasion in Wind Zones"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Swift Seagull Courier Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Ranged Attacks",
        "rules": "When you make a ranged attack while within a wind zone, gain +25% to your attack roll. This effect lasts until the start of your next turn."
      },
      {
        "title": "Evasion in Wind Zones",
        "rules": "While within a wind zone, there is a +15% chance that you will dodge an enemy's melee or ranged attack on a hit against you. This evasion chance does not stack with other dodging abilities and only applies once per turn."
      }
    ],
    "levelRequirementReason": "The Lumina Breeze Rod requires level 3 to wield, as its enchantments are subtle yet powerful.",
    "vendorReason": "Isle Delfino is renowned for its expertise in crafting items that enhance one's abilities with natural elements like wind and water.",
    "shippingDetail": "Delivered within a week of purchase, unless weather conditions delay the flight.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous with each attack or evasion attempt in a wind zone.",
      "endsWhen": "Exhausted after one use per short rest.",
      "charges": "Unlimited, but only one use per short rest."
    },
    "priceReason": "The Lumina Breeze Rod is priced at 1000 XP due to its rare enchantments and the materials required for its construction.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T07:27:53.967445+00:00",
    "aiReviewedAt": "2026-07-22T07:27:53.967445+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_lumina_flower": {
    "id": "isle_delfino_lumina_flower",
    "name": "Lumina Flower Petal",
    "description": "The Lumina Flower Petal, a rare bioluminescent petal from the night-blooming flora of Isle Delfino, pulses with golden light that reveals hidden paths and secret passageways in pitch darkness. When activated, it grants its bearer a +5% stealth bonus for 10 seconds, allowing them to slip past foes unseen. The petals' light also enhances the user's accuracy, increasing their chance to hit by 10% during the first round after activation.",
    "price": 1200,
    "icon": "🌙",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Stealth and Light",
      "Accuracy Boost"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth and Light",
        "rules": "When activated as a bonus action, this petal illuminates an area of 20 feet radius for 15 seconds. During this time, the user gains a +5% stealth bonus that lasts for 10 seconds after activation."
      },
      {
        "title": "Accuracy Boost",
        "rules": "The user's first attack roll against a target made within the first round of illumination has advantage and increases their chance to hit by 10%. This effect does not stack with other bonuses to hit."
      }
    ],
    "levelRequirementReason": "This petal is accessible to lower-level adventurers who are familiar with Isle Delfino's flora.",
    "vendorReason": "The local herbalists of Isle Delfino harvest these petals and sell them to adventurers for their unique properties.",
    "shippingDetail": "Due to the fragile nature of the Lumina Flower Petals, they are carefully packaged in enchanted paper that ensures safe delivery within a week.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "15 seconds",
      "endsWhen": "Exhausted after use or when destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The rare and bioluminescent nature of the Lumina Flower Petal justifies its moderate price, offering both tactical advantages and visual appeal.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:27:31.137479+00:00",
    "aiReviewedAt": "2026-07-22T07:27:31.137479+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_lumina_flower_sword": {
    "id": "isle_delfino_lumina_flower_sword",
    "name": "Lumina Flower Sword",
    "description": "The Lumina Flower Sword is a blade forged from the petals of the sun’s last bloom, its surface shimmering with gentle light that dances like fireflies in twilight. This celestial weapon not only deals +10% bonus damage to dark creatures but also emits a radiant flash upon each hit, blinding foes for 2 seconds and reducing their attack speed by half for the duration. Its glow never fades, even in the deepest shadows.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Radiant Flash",
      "Reduced Attack Speed"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Radiant Flash",
        "rules": "When you hit a dark creature with this weapon, it triggers a radiant flash that blinds them for 2 seconds. This effect has a save DC of 15 to negate its blinding effects."
      },
      {
        "title": "Reduced Attack Speed",
        "rules": "For every 20 damage points dealt by the Lumina Flower Sword against dark creatures, their attack speed is reduced by half for 2 seconds. This effect can only occur once per round and does not stack with itself."
      }
    ],
    "levelRequirementReason": "The sword's celestial forging requires a wielder of at least 5th level to channel the sun’s power.",
    "vendorReason": "Isle Delfino, known for its mystical artifacts and rare items, is the only vendor capable of sourcing such divine weaponry.",
    "shippingDetail": "The sword is delivered via a Rakasha spirit courier, ensuring it arrives glowing with fresh luminescence.",
    "usage": {
      "activation": "Instantaneous on hit",
      "duration": "Single use per attack",
      "endsWhen": "Charges depleted or weapon destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The sword's celestial forging and rare components make it a valuable asset, priced at 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:28:21.965904+00:00",
    "aiReviewedAt": "2026-07-22T07:28:21.965904+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_lumina_gear_set": {
    "id": "isle_delfino_lumina_gear_set",
    "name": "Lumina Gear Set",
    "description": "The Lumina Gear Set is a rare ensemble forged from the iridescent shells of bioluminescent sea creatures. Its armor gleams with radiant light, providing a shimmering barrier that dances like ocean waves. This set not only grants you a +15% reduction in damage from all sources but also has a 10% chance to restore hit points to allies upon dealing damage. The set's glow is said to boost morale and make the wearer feel as though they are part of the reef itself, inspiring teamwork.",
    "category": "equipment",
    "price": 1200,
    "icon": "🧩",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Radiant Shield",
      "Healing Glow"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Radiant Shield",
        "rules": "The Lumina Gear Set provides a +15% reduction in damage from all sources. This effect is passive and lasts until the end of each day."
      },
      {
        "title": "Healing Glow",
        "rules": "When you deal damage with an attack, there is a 10% chance that allies within 5 feet also heal for 1d4 hit points at the start of their next turn. This effect can trigger once per round."
      }
    ],
    "levelRequirementReason": "The Lumina Gear Set requires level 6 to ensure its power is balanced with the player's capabilities.",
    "vendorReason": "Isle Delfino has a deep connection to aquatic magic and thus offers gear inspired by the reef and its creatures.",
    "shippingDetail": "The drones deliver the Lumina Gear Set with a ceremonial splash of bioluminescent water, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until the end of each day.",
      "endsWhen": "Exhausted at the start of the next long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The Lumina Gear Set's rarity and enchantments justify a price of 1000 XP, reflecting its significant utility in combat.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T07:27:38.451312+00:00",
    "aiReviewedAt": "2026-07-22T07:27:38.451312+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_lumina_lullaby_chime": {
    "id": "isle_delfino_lumina_lullaby_chime",
    "name": "Lumina Lullaby Chime",
    "description": "The Lumina Lullaby Chime, a delicate metal chime adorned with iridescent seashells from Delfino Isle, hums a melody that lulls enemies into a calm stupor and restores allies’ strength. When activated, it emits a soft, glowing light that bathes nearby comrades in its restorative power. This enchanted artifact instantly heals 30% of an ally's health while reducing the aggression of foes within a 15-foot radius for 6 seconds.",
    "price": 1200,
    "icon": "🎵",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Calms Enemies",
      "Heals Allies"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heal Allies",
        "rules": "Activates as a bonus action. Restores 30% of an ally's hit points to all friendly targets within 15 feet, instantly. This effect ends if the chime is destroyed or if any target moves more than 10 feet away."
      },
      {
        "title": "Reduce Aggression",
        "rules": "Activates as a bonus action and lasts for 6 seconds. Reduces the attack speed of all hostile creatures within 15 feet by 30%. This effect is ended if any creature within range makes an attack, cast a spell, or takes a hostile action."
      }
    ],
    "levelRequirementReason": "This item is designed for early-game exploration and combat, providing support to adventuring parties without requiring high-level proficiency.",
    "vendorReason": "Isle Delfino specializes in crafting and selling items that are imbued with the magic of its coastal waters and creatures.",
    "shippingDetail": "Ships directly from Delfino Isle, arriving within a week. The Void Drifter is known for its punctuality and reliable service.",
    "usage": {
      "activation": "Bonus action",
      "duration": "6 seconds or until interrupted",
      "endsWhen": "Destroyed, target moves more than 10 feet away, or any creature within range attacks",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity and unique enchantments justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:28:15.573690+00:00",
    "aiReviewedAt": "2026-07-22T07:28:15.573690+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_lumina_torch": {
    "id": "isle_delfino_lumina_torch",
    "name": "Lumina Torch",
    "description": "The Lumina Torch crackles with a soft, ethereal light that pierces the darkest corners of forgotten ruins. Its flame whispers secrets of old, guiding explorers through hidden pathways and revealing structures thought long lost to time. This torch grants its wielder a temporary boon in vision, allowing them to see twice as far in darkness for 1 hour. It also protects against hallucinations, ensuring clarity amidst the uncanny echoes that haunt the Atrium's unstable depths.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveals hidden pathways",
      "Enhances night vision"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Hidden Pathways",
        "rules": "The Lumina Torch illuminates a radius of 60 feet for 1 hour, revealing any hidden or secret doors within its range. This effect is instantaneous and does not require an action to activate."
      },
      {
        "title": "Enhances Night Vision",
        "rules": "While the torch is active, the wielder has advantage on Wisdom (Perception) checks made to spot creatures in dim light or darkness for 1 hour. The torch’s light can be used as a bonus action to boost vision temporarily."
      }
    ],
    "levelRequirementReason": "Beginners need no less than this level to wield the Lumina Torch safely, ensuring they have enough experience to handle its ancient magic.",
    "vendorReason": "The islanders of Delfino are renowned for their knowledge of forgotten relics and the Atrium's mysteries, making them the perfect stewards of such a magical torch.",
    "shippingDetail": "Ships via Lakitu Drones' express courier service within 3 days, ensuring the torch arrives in pristine condition for its new owner.",
    "usage": {
      "activation": "Instantaneous when first lit and again as a bonus action to enhance night vision",
      "duration": "1 hour per use",
      "endsWhen": "The torch's light fades after an hour or if extinguished manually",
      "charges": "Unlimited uses, recharging upon being doused in water"
    },
    "priceReason": "Crafted from ancient materials and imbued with rare magic, the Lumina Torch is a rare find, justifying its moderate price.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:28:08.296025+00:00",
    "aiReviewedAt": "2026-07-22T07:28:08.296025+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_mangrove_mirage": {
    "id": "isle_delfino_mangrove_mirage",
    "name": "Mangrove Mirage",
    "description": "The Mangrove Mirage is a magical illusion that duplicates your recent movements, allowing you to retrace steps or mislead foes. Crafted from the heartwood of ancient mangroves and imbued with sprite magic, it echoes your last five paces with crystal clarity. This eerie mirage can confuse enemies, making them stumble into traps you’ve cleverly set in your wake. Its shimmering presence is a masterclass in deception, perfect for both stealth missions and tactical evasion.",
    "price": 1200,
    "icon": "🌀",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Echoes recent movements",
      "Confuses enemies"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Echo of Steps",
        "rules": "Activates as a bonus action. Creates an echo of your last five paces, which can be retraced for up to 10 feet in any direction. This effect lasts for 5 seconds and is visible only within the immediate area. If you move more than 20 feet from where the mirage begins, it dissipates."
      },
      {
        "title": "Enemy Confusion",
        "rules": "At the start of your turn while within 30 feet of an enemy, they must make a Wisdom saving throw (DC 14) or become disoriented for the start of their next turn. On a successful save, they are unaffected."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield due to its complex magical properties and sprite-infused materials.",
    "vendorReason": "Isle Delfino has a long-standing relationship with the sprites who crafted this item, ensuring its authenticity and quality.",
    "shippingDetail": "Ships via Pipe Express, known for their reliable and swift delivery service.",
    "usage": {
      "activation": "Bonus action to activate; can be used once per short or long rest.",
      "duration": "5 seconds, lasts until the start of your next turn after activation.",
      "endsWhen": "The mirage dissipates if you move more than 20 feet from its starting point or at the end of a short or long rest.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced price reflects the item's rare ingredients and intricate magic, suitable for third-level characters.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:29:05.790973+00:00",
    "aiReviewedAt": "2026-07-22T07:29:05.790973+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_minus_world_memoir": {
    "id": "isle_delfino_minus_world_memoir",
    "name": "Minus World Memoir",
    "description": "The Minus World Memoir is a tattered, ink-stained journal bound in black leather, its pages torn and stained by void energy. Its pages whisper of forgotten secrets and lost worlds, each entry a fragment of a time that never was. When opened, it reveals one hidden location within the Minus World, granting temporary immunity to negative status effects but causing a fleeting memory distortion: players may inadvertently discard important items for one round.",
    "price": 26000,
    "icon": "📖",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Reveals Hidden Location",
      "Temporary Immunity"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Reveal Hidden Location",
        "rules": "This effect allows the reader to discover a hidden location within the Minus World. The target must be in close proximity (within 30 feet) and able to see the journal. This ability is limited once per short or long rest."
      },
      {
        "title": "Temporary Immunity",
        "rules": "For one minute, the reader gains immunity to all negative status effects such as poison, disease, and exhaustion. After this duration ends, any ongoing effects are no longer active. There is a 10% chance that this effect fails due to its unstable nature."
      }
    ],
    "levelRequirementReason": "Characters must have encountered the Minus World to understand the journal's significance and wield it effectively.",
    "vendorReason": "Isle Delfino has exclusive ties with the lost world, making it a fitting vendor for such an artifact.",
    "shippingDetail": "The journal is delivered by Paratroopa Air courier, requiring careful handling to prevent further damage.",
    "usage": {
      "activation": "Read aloud during a short or long rest in the Minus World",
      "duration": "One minute per use; ends when the effect expires or if the reader takes any harmful action",
      "endsWhen": "The effect duration ends, or if the reader is subjected to a harmful action such as taking damage",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the journal's unique lore and limited utility within the game.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T07:28:37.662906+00:00",
    "aiReviewedAt": "2026-07-22T07:28:37.662906+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_pipe_network_cable": {
    "id": "isle_delfino_pipe_network_cable",
    "name": "Pipe Network Cable",
    "description": "The Pipe Network Cable is a salvaged conduit from Noki Bay's failing communication network. Its metal casing hums faintly with residual data, a relic of better technological days now lost to the void. Worn by those who trace its signal, it grants a steady connection to the network’s fading messages and a +1 bonus to Stealth checks when moving through tunnels or caves; however, prolonged use induces temporary confusion, causing 1d4 moments of disorientation after 30 seconds.",
    "price": 280,
    "icon": "📡",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Stealth Boost",
      "Flickering Confusion"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Boost",
        "rules": "The Pipe Network Cable grants a +1 bonus to all Stealth checks when the wearer is moving through tunnels or caves. This effect lasts until the end of your next turn."
      },
      {
        "title": "Flickering Confusion",
        "rules": "After 30 seconds of continuous use, the user experiences 1d4 moments of temporary confusion. Each moment requires a successful DC 12 Wisdom saving throw or be stunned for 1 round. This effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "The Pipe Network Cable is accessible to lower-level characters who are curious about the network's secrets.",
    "vendorReason": "Isle Delfino has a vested interest in salvaging and preserving remnants of Noki Bay’s technology for future generations.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for its timely deliveries even through the most treacherous terrain.",
    "usage": {
      "activation": "Passive effect while wearing and using the cable.",
      "duration": "Instantaneous; ends at the start of your next turn or when removed.",
      "endsWhen": "The end of your next turn, removal from use, or if confusion is triggered.",
      "charges": "Unlimited"
    },
    "priceReason": "The Pipe Network Cable's price reflects the rarity and utility of salvaged tech from Noki Bay’s network.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:28:30.517992+00:00",
    "aiReviewedAt": "2026-07-22T07:28:30.517992+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_rakasha_spirit_walk_cargo": {
    "id": "isle_delfino_rakasha_spirit_walk_cargo",
    "name": "Spirit Walk Courier Pack",
    "description": "The Spirit Walk Courier Pack, a courier pack imbued with Rakasha magic, allows you to teleport your cargo instantly to Rogueport Docks. Crafted from enchanted leather and adorned with intricate rakasha symbols, this pack grants a 10% bonus to Stealth checks. Each use drains 100 mana; overuse may cause brief hallucinations, but the true power lies in its ability to deliver goods swiftly, a feat that has made it invaluable among rogues and couriers alike.",
    "price": 280,
    "icon": "📦",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Instantaneous Delivery",
      "Stealth Bonus"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instantaneous Delivery",
        "rules": "Activate as an action to instantly deliver your cargo to Rogueport Docks. This effect has a daily limit of three uses and is exhausted for the day after use."
      },
      {
        "title": "Stealth Bonus",
        "rules": "+10% bonus to Stealth checks while wearing or carrying this pack. This benefit lasts until you remove it, up to a maximum duration of 8 hours per day."
      }
    ],
    "levelRequirementReason": "The pack's magic is accessible to adventurers of all levels but requires basic knowledge of spellcasting.",
    "vendorReason": "Isle Delfino specializes in enchanted goods and has a long-standing relationship with rakasha artisans, making this item available through their shop.",
    "shippingDetail": "Ships directly from Rakasha Spirit Walk's headquarters; delivery is instantaneous within a day of purchase.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "Instantaneous for the delivery, and +10% Stealth bonus lasts up to 8 hours or until removed.",
      "endsWhen": "Daily limit reached or cargo delivered; mana is consumed upon activation.",
      "charges": "Limited by daily use (3 times per day)"
    },
    "priceReason": "The pack's enchantments and rakasha magic, combined with its unique delivery service, justify this price in XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:29:04.111246+00:00",
    "aiReviewedAt": "2026-07-22T07:29:04.111246+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_ripple_ritual": {
    "id": "isle_delfino_ripple_ritual",
    "name": "Ripple Ritual",
    "description": "The Ripple Ritual is a delicate artifact crafted from the polished shells and coral of Isle Delfino's oceanic heart. This enchanted relic channels the island’s tidal magic, creating a wave of disruption that stuns foes and amplifies damage in its wake. When activated, it unleashes a surge of elemental power that knocks enemies to their feet and enhances your allies’ melee attacks within a 5-meter radius for ten seconds.",
    "price": 5400,
    "icon": "🌊",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Stuns target",
      "Enhances area-of-effect damage"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Stun",
        "rules": "When activated, the Ripple Ritual emits a shockwave that stuns all enemies in a 5-meter burst. Targets are knocked prone and immobilized for 2 seconds. Has no effect on creatures immune to being stunned."
      },
      {
        "title": "Tidal Surge",
        "rules": "Enemies within 5 meters of the ritual gain a -2 penalty to attack rolls and saving throws, last for 10 seconds, and must make a DC 14 Dexterity saving throw or be knocked prone. The effect ends if they move more than 3 meters away."
      }
    ],
    "levelRequirementReason": "Requires at least level 7 to wield the ritual effectively, balancing its utility in combat.",
    "vendorReason": "As a local artifact of Isle Delfino, the Ripple Ritual is best sold by those who know its origins and can ensure proper usage.",
    "shippingDetail": "Ships via Koopa Express; delivery time varies based on destination, ensuring safe transport of this delicate artifact.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect with a duration of 10 seconds for the Tidal Surge debuff",
      "endsWhen": "The target recovers from being stunned or moves more than 3 meters away; the debuff ends after 10 seconds.",
      "charges": "Unlimited uses, but must rest for 1 hour after each use."
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique abilities and rarity among Isle Delfino's artifacts.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T07:29:29.507198+00:00",
    "aiReviewedAt": "2026-07-22T07:29:29.507198+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_serenity_siphon_essence": {
    "id": "isle_delfino_serenity_siphon_essence",
    "name": "Serenity Siphon Essence",
    "description": "The Serenity Siphon Essence is a sleek, iridescent vial that captures the very essence of calm from the sun-drenched bays of Isle Delfino. Crafted by the artisans of the city, it absorbs ambient magic energy, making its wielder immune to magical harm and enhancing their spellcasting speed for an instant. Ideal for mages navigating the treacherous waters, this vial is a symbol of both Isle Delfino's tranquility and its unmatched craftsmanship.",
    "price": 1200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Magic Immunity",
      "Enhanced Spell Speed"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magic Immunity",
        "rules": "The user gains immunity to all magical damage for 10 seconds. This effect cannot be used again until the user completes a long rest."
      },
      {
        "title": "Enhanced Spell Speed",
        "rules": "The user's spellcasting speed is increased by 40% for 10 seconds, allowing them to cast spells with greater ease and precision. There is no limit on the number of times this effect can be used within a long rest."
      }
    ],
    "levelRequirementReason": "The essence requires basic magical knowledge to activate its effects.",
    "vendorReason": "Isle Delfino is renowned for its artisans and their mastery of magic, making this item a staple in the city's inventory.",
    "shippingDetail": "Ships via the Void Drifter Relay; delivery typically takes three days from Isle Delfino.",
    "usage": {
      "activation": "Use as an action.",
      "duration": "10 seconds.",
      "endsWhen": "The duration expires or the user completes a long rest.",
      "charges": "Unlimited."
    },
    "priceReason": "Crafted with rare materials and expert craftsmanship, this essence balances its powerful effects with a moderate price point.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:29:02.551393+00:00",
    "aiReviewedAt": "2026-07-22T07:29:02.551393+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_bloom": {
    "id": "isle_delfino_shine_bloom",
    "name": "Shine Bloom of the Tropical Mirage",
    "description": "The Shine Bloom of the Tropical Mirage is a vibrant, sunlit flower that glows with the essence of Delfino Isle’s tropical magic. Its petals shimmer with radiant light, capable of healing wounds and lifting spirits in its presence. This rare bloom is said to be a gift from the legendary Shine Sprites who inhabit the island’s lush environs. Nearby allies receive a swift recovery, while the morale of the entire team soars, enhancing their combat effectiveness.",
    "price": 1200,
    "icon": "🌼",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Heals nearby allies",
      "Boosts team morale"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiant Healing",
        "rules": "When activated by a creature within range, this bloom heals all allies within 10 feet for 30% of their maximum hit points. The effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Morale Boost",
        "rules": "Upon activation, the flower grants a +20 morale bonus to all allied creatures within 15 feet for 1 minute. This boost cannot be removed early by any means except for death or leaving the area. The effect has no save DC and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The flower's magic is accessible to all adventurers, regardless of class or background.",
    "vendorReason": "As the island’s natural healer and guardian, Isle Delfino is known for its abundant supply of magical flora like the Shine Bloom.",
    "shippingDetail": "The Void Drifter ensures safe and swift delivery of the bloom to adventurers across the realm.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for healing, 1 minute for morale boost",
      "endsWhen": "Effect ends when used or after its duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The bloom’s rarity and the limited stock at Isle Delfino justify this fair value in XP.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:29:18.005177+00:00",
    "aiReviewedAt": "2026-07-22T07:29:18.005177+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_bloom_core": {
    "id": "isle_delfino_shine_bloom_core",
    "name": "Shine Bloom Core",
    "description": "The Shine Bloom Core is a pulsating core embedded in a luminescent flower, its petals glowing with the essence of the elusive Shine Sprites. Crafted from the rarest flora of Delfino Isle, this core amplifies spellcasting prowess and emits a radiant aura that banishes shadows and dark magic. The core’s light can be felt for miles around, making it both a weapon against shadowy foes and a beacon of hope in the darkest nights.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌸",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% Spell Damage",
      "Sunlit Aura"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Enhanced Spell Damage",
        "rules": "Activates as a bonus action, lasts for 1 minute. The user gains +25% to their spell damage rolls for the duration."
      },
      {
        "title": "Sunlit Aura",
        "rules": "Passive effect that grants immunity to all damage from undead and other shadowy creatures. This aura extends up to 30 feet around the user, expiring when the core runs out of charges or if it is destroyed."
      }
    ],
    "levelRequirementReason": "The Shine Bloom Core requires a minimum character level of 6 due to its complex enchantments and the mystical essence it contains.",
    "vendorReason": "Islé Delfino, known for their deep ties with nature, can supply this unique item crafted from flora found only on their island.",
    "shippingDetail": "Delivered by the Rakasha’s ethereal winds, ensuring the core arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to activate and maintain Sunlit Aura; no activation required for Enhanced Spell Damage.",
      "duration": "1 minute per activation, recharges after a long rest.",
      "endsWhen": "Core runs out of charges or is destroyed.",
      "charges": "Limited use: once every 30 seconds."
    },
    "priceReason": "The balanced XP price reflects the core's rare materials and potent magical properties, making it a valuable yet fair purchase for players.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:29:19.809575+00:00",
    "aiReviewedAt": "2026-07-22T07:29:19.809575+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_burst": {
    "id": "isle_delfino_shine_burst",
    "name": "Shine Burst Lantern",
    "description": "The Shine Burst Lantern floats gracefully, its surface shimmering with iridescent light as if illuminated by a troupe of invisible Shine Sprites. When activated, it unleashes a dazzling burst that momentarily blinds foes within a ten-foot radius, leaving them reeling in temporary blindness. Simultaneously, the lantern's glow radiates outward, healing nearby allies by restoring 30% of their maximum hit points, offering a beacon of light and life to those in need.",
    "category": "equipment",
    "price": 5400,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Blinds Enemies",
      "Heals Allies"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Blind Burst",
        "rules": "When activated as an action, the Shine Burst Lantern emits a blinding burst that blinds all creatures within 10 feet for 3 seconds. This effect has no save DC and does not provoke opportunity attacks."
      },
      {
        "title": "Healing Light",
        "rules": "The lantern's light heals allies within 5 feet, restoring 30% of their maximum hit points upon activation. The healing is instantaneous and cannot exceed 100 hit points per use."
      }
    ],
    "levelRequirementReason": "This lantern requires a character to be at least level 6 to wield its light effectively in combat.",
    "vendorReason": "Isle Delfino, known for their magical trinkets and devices, has the expertise to source and sell such an item that harmonizes light and magic.",
    "shippingDetail": "Ships via Boo Spectral Mail; expect delivery within a week of purchase.",
    "usage": {
      "activation": "Activates as an action, expending one charge.",
      "duration": "Instantaneous effect, lasting 3 seconds before the light fades.",
      "endsWhen": "Exhausts when all charges are used or destroyed upon death.",
      "charges": "10 charges, recharging after a long rest."
    },
    "priceReason": "The balanced price reflects its rarity and utility as both an offensive and supportive tool in combat.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T07:30:03.099212+00:00",
    "aiReviewedAt": "2026-07-22T07:30:03.099212+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_essence_vial": {
    "id": "isle_delfino_shine_essence_vial",
    "name": "Shine Essence Vial",
    "description": "The Shine Essence Vial glows faintly in the palm, a vial crafted from polished seashells found along the shores of Delfino Isle. When activated, it releases a burst of radiant light, stunning foes and creating an ethereal glow that momentarily blinds them. The vial also grants the user near-invisibility, blending seamlessly with the surrounding sunlight. Ideal for stealthy ambushes in the sun-drenched lagoons, it is a treasure from the depths of Delfino's lore.",
    "price": 1200,
    "icon": "📦",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Stuns foes",
      "Grants temporary invisibility"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Sea Sprite Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blinding Light",
        "rules": "When activated as an action, the user releases a burst of light that blinds all creatures within a 10-foot radius for 2 seconds. The effect has no save DC and ends when the duration expires."
      },
      {
        "title": "Invisibility",
        "rules": "The user gains advantage on Dexterity (Stealth) checks for 3 rounds after activating the vial, granting them near-invisibility within the sunlit environment. This invisibility can be seen by creatures with darkvision or truesight."
      }
    ],
    "levelRequirementReason": "The Shine Essence Vial is crafted from materials easily accessible to even novice adventurers.",
    "vendorReason": "Isle Delfino holds a deep connection with the natural magic of the lagoon and its inhabitants, making this item a staple in their inventory.",
    "shippingDetail": "Ships via sea sprite courier, ensuring safe delivery within three days.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; lasts for 2 seconds and 3 rounds respectively.",
      "endsWhen": "The duration expires or the item is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare seashells and infused with sprite magic, the Shine Essence Vial offers a balanced price for its unique effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:47:53.001875+00:00",
    "aiReviewedAt": "2026-07-22T19:47:53.001875+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_gauntlet": {
    "id": "isle_delfino_shine_gauntlet",
    "name": "Shine Gauntlet",
    "description": "The Shine Gauntlet, crafted from the luminescent shells of tropical sea creatures, radiates an ethereal glow that strengthens the wearer's defenses and summons a radiant shield. Each strike against you is deflected by this glowing defense, while your attacks gain a nimbus of light, increasing their potency. This gauntlet is a testament to the magic of Isle Delfino, where its origins lie in the hands of ancient alchemists who sought to harness nature's purest energy.",
    "category": "equipment",
    "price": 5400,
    "icon": "🔮",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "+30% defense against magical damage",
      "Grants +10% critical strike chance"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Radiant Shield",
        "rules": "Activates as a reaction when you take an attack from a creature. Summons a radiant shield that provides 500 HP of protection for 8 seconds, ending if the gauntlet is destroyed or if you are incapacitated."
      },
      {
        "title": "Luminous Strikes",
        "rules": "At the start of your turn, the gauntlets emit a burst of light, increasing your melee weapon's critical chance by +10% until the end of your next turn. This effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 7th level to wield its potent magic effectively and avoid overloading novice spellcasters.",
    "vendorReason": "Isle Delfino is renowned for its mastery of tropical magic, making it the premier vendor for such enchanted items.",
    "shippingDetail": "Ships via Void Drifter's express service, which ensures safe and swift delivery from the heart of Isle Delfino.",
    "usage": {
      "activation": "Radiant Shield activates as a reaction to an attack. Luminous Strikes occurs at the start of your turn.",
      "duration": "8 seconds for Radiant Shield; lasts until end of next turn for Luminous Strikes.",
      "endsWhen": "Destroyed or incapacitated by Radiant Shield; ends when turn concludes for Luminous Strikes.",
      "charges": "Unlimited, recharged at the start of each long rest."
    },
    "priceReason": "Balanced price reflects its potent defensive and offensive capabilities, making it a sought-after yet affordable epic treasure.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T07:29:51.126956+00:00",
    "aiReviewedAt": "2026-07-22T07:29:51.126956+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_shroud": {
    "id": "isle_delfino_shine_shroud",
    "name": "Shine Shroud of the Coral Depths",
    "description": "The Shine Shroud of the Coral Depths is a shimmering cloak crafted from the essence of glimmering Shine Sprites, woven within the depths of the Isle Delfino's coral reefs. When donned, it grants you invisibility for 15 seconds and emits an iridescent aura that deflects up to 20 points of damage per attack or spell cast against you. This enchantment allows you to evade notice in battle and survive deadly encounters by absorbing minor harm.",
    "category": "equipment",
    "price": 5500,
    "icon": "🌊",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Damage Absorption"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "Activates as a bonus action, lasts for 15 seconds. Ends early if you attack or interact with an object. Grants you and any allies within 5 feet of you total concealment."
      },
      {
        "title": "Damage Absorption",
        "rules": "Absorbs up to 20 points of damage from a single attack or spell per use, reducing the damage taken by that amount. This effect has no save DC and can be used once before requiring a short rest for recharging."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield effectively due to its complex enchantment.",
    "vendorReason": "As a local vendor of the coral depths, Isle Delfino has access to unique materials and spells used in crafting this item.",
    "shippingDetail": "Delivered by Shy Guy Smugglers within one week via submarine courier service from the Isle Delfino.",
    "usage": {
      "activation": "Bonus action to activate, once per short rest for recharging.",
      "duration": "15 seconds of invisibility and damage absorption.",
      "endsWhen": "The effect ends early if you attack or interact with an object. Requires a short rest to recharge after use.",
      "charges": "One charge per day."
    },
    "priceReason": "Balanced price reflects the rare materials and intricate magical work required in its crafting.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:30:22.366320+00:00",
    "aiReviewedAt": "2026-07-22T07:30:22.366320+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_spear": {
    "id": "isle_delfino_shine_spear",
    "name": "Shine Spear of the Coral King",
    "description": "The Shine Spear of the Coral King gleams with an otherworldly light, forged from the heartwood of ancient coral trees. Its surface is etched with the scales of sea serpents and glows with a radiance that pierces even the deepest shadows. This weapon is not just a spear; it is a living artifact of the ocean's depths, capable of dazzling foes and blinding their senses for moments at a time.",
    "category": "equipment",
    "price": 1200,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Dazzling Flash",
      "Evasion Reduction"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Dazzling Flash",
        "rules": "When you hit with this spear, it emits an intense flash of light that blinds enemies within a 10-foot radius for 3 seconds. This effect has no save DC and does not require any action to activate; it is triggered automatically upon hitting the target."
      },
      {
        "title": "Evasion Reduction",
        "rules": "For every 5 feet you are underwater, this spear reduces an enemy's Evasion by 10%, stacking up to a maximum reduction of 40%. This effect lasts for 5 seconds and is reset when the spear leaves water."
      }
    ],
    "levelRequirementReason": "This spear demands proficiency with martial weapons, as its unique properties require precise strikes.",
    "vendorReason": "The coral reefs surrounding Isle Delfino are known to be the birthplace of such treasures, and only they can source this weapon.",
    "shippingDetail": "Ships via a fleet of spectral sharks that ensure safe delivery through treacherous waters.",
    "usage": {
      "activation": "Instantaneous on hit with the spear",
      "duration": "3 seconds for Dazzling Flash; 5 seconds for Evasion Reduction, reset when out of water",
      "endsWhen": "Effect ends at the start of the target's next turn or if the spear leaves water",
      "charges": "Unlimited, as long as the spear remains in water"
    },
    "priceReason": "The materials and craftsmanship required to create this weapon justify its price; it is a rare artifact of immense value.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:30:35.328740+00:00",
    "aiReviewedAt": "2026-07-22T07:30:35.328740+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_spirit": {
    "id": "isle_delfino_shine_spirit",
    "name": "Shine Spirit Amulet",
    "description": "The Shine Spirit Amulet is a radiant charm worn by the mischievous and magical Shine Sprites of Delfino Isle. Crafted from shimmering seashells and enchanted with tropical mana, this amulet grants its wearer a soft glow that can be seen for miles in the night. It bestows a +15% critical hit chance and increases maximum Hit Points by 20%, providing both offensive prowess and defensive resilience to adventurers seeking a touch of the tropics.",
    "category": "equipment",
    "price": 1200,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Critical Boost",
      "HP Fortification"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Sailor Spectral Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Critical Boost",
        "rules": "Activates on critical hit attempts, increasing their chance by +15%. This effect is passive and applies to all attacks made with the amulet worn. No save required."
      },
      {
        "title": "HP Fortification",
        "rules": "Grants a +20% increase to maximum Hit Points for the wearer. Lasts until the end of the wearer's next long rest or when removed from wear. No save required."
      }
    ],
    "levelRequirementReason": "The amulet is designed for adventurers of all levels, ensuring that even the greenest heroes can benefit from its tropical magic.",
    "vendorReason": "As a beacon of Delfino's magical charm, Isle Delfino is the most fitting vendor to offer this amulet.",
    "shippingDetail": "Ships via Sailor Spectral Express, ensuring safe and swift delivery from the heart of Delfino Isle.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until removed or end of next long rest",
      "endsWhen": "When removed or at the end of the wearer's next long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure it is a valuable but not overpowered addition to any adventurer's gear.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T07:30:17.795001+00:00",
    "aiReviewedAt": "2026-07-22T07:30:17.795001+00:00",
    "aiReviewVersion": 1
  }
};
