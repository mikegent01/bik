// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_020 = {
  "hacktivist_hoodie_of_anonymity": {
    "id": "hacktivist_hoodie_of_anonymity",
    "name": "Hacktivist Hoodie of Anonymity",
    "description": "The Hacktivist Hoodie of Anonymity is a black hoodie with a sleek '404: Identity Not Found' logo on its back, crafted from reclaimed tech fabric. It whispers to NPCs that you're just another passerby, making them twice as likely to forget your face in crowded places. Wearing it also makes you momentarily uncertain about your own identity—50% of the time when introducing yourself, you'll inadvertently say something unrelated or nonsensical.",
    "category": "equipment",
    "price": 1000,
    "icon": "👕",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "NPC Memory Obscuring",
      "Temporary Identity Confusion"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Anonymous Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "NPC Memory Obscuring",
        "rules": "When worn in a crowded place with at least four other people, NPCs must succeed on an Intelligence saving throw (DC 14) or forget your face for the next hour. This effect has no range and is instantaneous upon activation."
      },
      {
        "title": "Temporary Identity Confusion",
        "rules": "While wearing the hoodie, you have a 50% chance each time you introduce yourself to someone new (as an action) to say something unrelated or nonsensical. This effect lasts until you take another action on your turn."
      }
    ],
    "levelRequirementReason": "This hoodie is designed for quick anonymity in social situations, making it accessible to players of all levels.",
    "vendorReason": "The Hacktivist Collective specializes in items that blur the lines between reality and perception, and this hoodie fits perfectly into their lineup.",
    "shippingDetail": "Delivered via a mysterious courier who ensures your package arrives without being noticed.",
    "usage": {
      "activation": "Wearing the hoodie as an action",
      "duration": "Instantaneous, ongoing with each social interaction",
      "endsWhen": "The wearer removes the hoodie or takes another action on their turn",
      "charges": "Unlimited"
    },
    "priceReason": "The hoodie’s unique effects and vendor affiliation justify its price in a balanced manner.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T06:32:27.062269+00:00",
    "aiReviewedAt": "2026-07-22T06:32:27.062269+00:00",
    "aiReviewVersion": 1
  },
  "hacktivist_recipe_encryption_decoder": {
    "id": "hacktivist_recipe_encryption_decoder",
    "name": "Hacktivist Recipe Encryption Decoder",
    "description": "The Hacktivist Recipe Encryption Decoder hums softly, its sleek chrome body gleaming with a mysterious blue sheen. Crafted by the enigmatic Hacktivist Codebreakers, this device deciphers even the most secure encrypted recipes, granting you an edge in culinary espionage. With it, you can see through hidden ingredients and uncover secret techniques, but be wary—its backdoor introduces a 5% chance that any decoded recipe might go awry, leaving your meal a disaster.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔓",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Decodes encrypted recipes",
      "Sees hidden messages"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Courier of the Enigma",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Decodes Encrypted Recipes",
        "rules": "When you use the Decoder on an encrypted recipe, you gain advantage on any check to decode or analyze it. However, there is a 5% chance that the decoded recipe will be incorrect and cause unintended effects."
      },
      {
        "title": "Sees Hidden Messages",
        "rules": "While using this device, you have advantage on Intelligence (Investigation) checks to uncover hidden information within recipes or documents."
      }
    ],
    "levelRequirementReason": "This Decoder is designed for those just starting out in culinary espionage and requires minimal experience.",
    "vendorReason": "The Hacktivist Codebreakers are renowned for their expertise in decoding secrets, making this device a natural addition to their product line.",
    "shippingDetail": "Ships via a secure, encrypted delivery method ensuring your Decoder arrives undisturbed.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per day",
      "charges": "Unlimited"
    },
    "priceReason": "This Decoder offers a unique and essential tool for those entering the world of culinary espionage, balancing its utility with an affordable price.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T06:32:38.607025+00:00",
    "aiReviewedAt": "2026-07-22T06:32:38.607025+00:00",
    "aiReviewVersion": 1
  },
  "hacktivist_recipe_glitch_cookies": {
    "id": "hacktivist_recipe_glitch_cookies",
    "name": "Recipe: Hacktivist Glitch Cookies",
    "description": "Recipe: Hacktivist Glitch Cookies\nThese cookies are a digital nightmare in pastry form. When consumed, they cause your world to flicker briefly with code and glitches. You gain advantage on one Intelligence check but lose it on another. The cookies themselves look like pixelated versions of their normal selves, an unsettling reminder that the world is not quite as stable as you thought. Baked by Hacktivist Bakers, these cookies are a bizarre treat for those who dare to explore the limits between reality and code.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Digital Advantage",
      "Visual Glitch"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Anonymous Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Digital Advantage",
        "rules": "When you consume one of these cookies, roll an Intelligence check. You gain advantage on this check but suffer a disadvantage on another Intelligence-based check your DM chooses."
      },
      {
        "title": "Visual Glitch",
        "rules": "For the next hour, you are aware that the world around you is slightly unstable. Your Perception checks have disadvantage until the end of this duration."
      }
    ],
    "levelRequirementReason": "The recipe requires basic understanding and skill with simple tools to prepare.",
    "vendorReason": "Hacktivist Bakers specialize in creating treats that blur the lines between the digital and physical worlds, making them the perfect vendor for these cookies.",
    "shippingDetail": "Delivered by a mysterious courier who leaves no trace of their presence.",
    "usage": {
      "activation": "Eating one cookie",
      "duration": "One hour",
      "endsWhen": "Ends when the duration expires or you eat another cookie of this type",
      "charges": "Unlimited, as long as you have the recipe"
    },
    "priceReason": "The ingredients and unique preparation method make these cookies a rare treat.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T06:32:25.349605+00:00",
    "aiReviewedAt": "2026-07-22T06:32:25.349605+00:00",
    "aiReviewVersion": 1
  },
  "hacktivist_virus_chip_service": {
    "id": "hacktivist_virus_chip_service",
    "name": "Hacktivist Virus Chip Service",
    "description": "The Hacktivist Virus Chip Service is a digital sabotage tool crafted by Digital Rebels, an infamous collective known for their mischievous exploits in cyberspace. When deployed, it infects connected devices with a cascade of memes, causing them to malfunction for one minute and temporarily boost the user’s Deception checks online by +1. However, if the device is not properly secured, the virus can backfire, leading to severe lag that cripples your tech for an hour.",
    "price": 1000,
    "icon": "💻",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Meme Infestation",
      "Deception Boost"
    ],
    "vendor": "hacktivist_net",
    "shippedBy": "USB Stick",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Meme Infestation",
        "rules": "Activate as a bonus action. Targets all connected devices within 30 feet for one minute, causing them to malfunction and become vulnerable to further sabotage until secured or re-booted."
      },
      {
        "title": "Deception Boost",
        "rules": "Activate as a bonus action. Grants the user advantage on Deception checks made online for the duration of their next short rest."
      }
    ],
    "levelRequirementReason": "Requires no specific class or background to use, making it accessible to all players.",
    "vendorReason": "As a notorious tech-sabotage service provider, hacktivist.net is the only place you can purchase this tool for your digital misadventures.",
    "shippingDetail": "Delivered instantaneously via a secure, encrypted USB device.",
    "usage": {
      "activation": "Bonus action to deploy or activate.",
      "duration": "One minute of meme-infestation and +1 Deception boost online.",
      "endsWhen": "The effect ends when the duration expires or if the user reboots their affected devices.",
      "charges": "Unlimited charges."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its utility in both sabotage and online social engineering without being overpowered.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-22T06:32:38.733155+00:00",
    "aiReviewedAt": "2026-07-22T06:32:38.733155+00:00",
    "aiReviewVersion": 1
  },
  "halfling_adventurer_overalls": {
    "id": "halfling_adventurer_overalls",
    "name": "Halfling Adventurer Overalls ",
    "description": "The Halfling Adventurer Overalls are a set of padded overalls tailor-made for pint-sized heroes, crafted by Shire Seamstresses from durable yet flexible material. These overalls grant nimble Dexterity saves and offer pockets that can store rations, healing the wearer with 1d4 hit points upon consumption. They are too short for taller races but remain a staple of Halfling adventurers, known for their comfort and utility in the field.",
    "category": "equipment",
    "price": 1000,
    "icon": "👖",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Dexterity Savvy",
      "Ration Pocket"
    ],
    "vendor": "halfling_hole",
    "shippedBy": "Pocketed Parcel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dexterity Savvy",
        "rules": "When the wearer makes a Dexterity saving throw, they gain a +1 bonus to the roll. This effect lasts until the end of their next turn."
      },
      {
        "title": "Ration Pocket",
        "rules": "The overalls contain a pocket that can store rations. Consuming these rations restores 1d4 hit points. The pocket can only hold one ration at a time and is recharged upon the wearer completing a long rest."
      }
    ],
    "levelRequirementReason": "These overalls are designed for young adventurers just starting their journey.",
    "vendorReason": "Halfling_Hole specializes in gear that suits small but mighty Halflings, and these overalls are a hallmark of their craftsmanship.",
    "shippingDetail": "Ships via Pocketed Parcel; delivery is swift, even for the tiniest parcels.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until the end of their next turn after a Dexterity save or ration consumption",
      "endsWhen": "The wearer completes a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with durable and flexible materials, these overalls provide essential utility without overpowering the wearer.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-22T06:33:07.298268+00:00",
    "aiReviewedAt": "2026-07-22T06:33:07.298268+00:00",
    "aiReviewVersion": 1
  },
  "halfling_baker_bodyguard": {
    "id": "halfling_baker_bodyguard",
    "name": "Halfling Master Baker Bodyguard (Elite)",
    "description": "Halfling Master Baker Bodyguard is a remarkable halfling who has honed his skills in both culinary arts and combat. His rolling pin, crafted from seasoned oak, can be wielded with deadly precision. He can instantly prepare a feast that restores 5d6 hit points to four nearby allies within 30 feet, making him an indispensable protector at feasts or banquets. A true blend of defense and sustenance, he is the perfect guardian for any noble house or guild.",
    "price": 1000,
    "icon": "🔪",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Feast and Protect",
      "Masterful Culinary Artisan"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Linen Bag",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Feast and Protect",
        "rules": "As a bonus action, the Halfling Master Baker Bodyguard can prepare a feast that restores 5d6 hit points to all creatures within 30 feet who are allies. The effect lasts for 1 minute and has a recharge after a long rest."
      },
      {
        "title": "Masterful Culinary Artisan",
        "rules": "The Halfling Master Baker Bodyguard acts as an elite bodyguard (CR 4), providing combat support with his rolling pin or kitchen knives. He can make opportunity attacks and has advantage on Strength (Athletics) checks."
      }
    ],
    "levelRequirementReason": "To ensure that the player is capable of effectively utilizing this item's defensive capabilities in battle.",
    "vendorReason": "Being a product of his community, it makes sense for halfling vendors to sell an item created by one of their own members.",
    "shippingDetail": "The shipment is made with utmost care using Linen Bags to ensure the rolling pin remains in perfect condition.",
    "usage": {
      "activation": "Bonus action for Feast and Protect, reaction or opportunity attacks for Masterful Culinary Artisan",
      "duration": "1 minute (Feast and Protect), until the end of his next turn (Masterful Culinary Artisan)",
      "endsWhen": "The effect ends when a short rest is taken or after 1 minute.",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "This price reflects the item's rarity and the unique combination of combat and utility it provides.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-22T06:32:45.150379+00:00",
    "aiReviewedAt": "2026-07-22T06:32:45.150379+00:00",
    "aiReviewVersion": 1
  },
  "halfling_bank_bank_itself": {
    "id": "halfling_bank_bank_itself",
    "name": "Halfling Bank Bailout Plan",
    "description": "The Halfling Bank Bailout Plan is a meticulously crafted document that ensures your savings remain intact even in the most tumultuous economic climates. Authored by the wily minds of the Halfling Bank, this plan guarantees you 120% of your deposits should the bank's stability crumble. The document itself is bound with rare parchment and inked with a sigil that whispers promises of financial security only to those who trust in its wisdom.",
    "price": 1000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Emergency Financial Safeguard",
      "Halfling Bank Guarantee"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Halfling Courier Pigeons",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Emergency Financial Safeguard",
        "rules": "If the Halfling Bank fails, you gain an instantaneous bonus of 120% on all your deposits. This effect is triggered by a bank failure, as determined by the DM."
      },
      {
        "title": "Halfling Bank Guarantee",
        "rules": "The document ensures that no matter what, your funds are secured against any economic collapse within the Halfling faction's domain. This benefit lasts until the Halfling Bank is re-established or until you decide to cash in."
      }
    ],
    "levelRequirementReason": "This plan requires a basic understanding of financial security and trust in the Halfling Bank.",
    "vendorReason": "The Halfling Bank is responsible for issuing this document, ensuring its legitimacy and value to depositors.",
    "shippingDetail": "Delivered by swift Halfling Courier Pigeons within 24 hours of purchase.",
    "usage": {
      "activation": "Passive effect upon purchasing the document.",
      "duration": "Until the Halfling Bank is re-established or until you cash in your deposits.",
      "endsWhen": "The Halfling Bank fails and you decide to withdraw funds.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This document ensures significant financial security, making it a valuable but not overpriced investment for players seeking peace of mind.",
    "priceOriginal": 1000000,
    "priceReviewedAt": "2026-07-22T06:32:55.593688+00:00",
    "aiReviewedAt": "2026-07-22T06:32:55.593688+00:00",
    "aiReviewVersion": 1
  },
  "halfling_bank_loan_master": {
    "id": "halfling_bank_loan_master",
    "name": "Halfling Bank Loan Master (Instant 1M)",
    "description": "The Halfling Bank Loan Master is a compact, intricately crafted device that promises an instant influx of wealth. This small, metallic charm whispers tales of the Halflings’ cunning and their ability to secure vast sums with but a touch. Upon activation, it draws a million gold pieces from the legendary Halfling Bank; however, repayment must be made within five years, with interest accumulating at a rate of 10% annually. Failing to honor this debt invites the wrath of the Halflings, who are known for their relentless and often humorous methods of collection.",
    "price": 1000,
    "icon": "💰",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Instant Access to 1 Million GP",
      "Severe Debt Collection on Default"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Money Bag Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Access to 1 Million GP",
        "rules": "When activated, the Halfling Bank Loan Master grants its user 1 million gold pieces. This effect is instantaneous and requires no further action from the user."
      },
      {
        "title": "Severe Debt Collection on Default",
        "rules": "If the debt is not repaid within five years, the Halflings will demand repayment of a much larger sum, including all accumulated interest. The exact amount is determined by the Dungeon Master and can be as creative or as challenging as desired."
      }
    ],
    "levelRequirementReason": "The device requires basic understanding and trust to use responsibly.",
    "vendorReason": "Only the Halflings, known for their business acumen and connections, would offer such a risky but potentially lucrative item.",
    "shippingDetail": "The loan is delivered via the Money Bag Delivery service, ensuring swift and reliable transport of the vast sum.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Instantaneous",
      "endsWhen": "Debt Repayment or Default",
      "charges": "Unlimited"
    },
    "priceReason": "The device’s low price reflects its limited use and the significant risk involved in securing such a large sum.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T06:33:10.813219+00:00",
    "aiReviewedAt": "2026-07-22T06:33:10.813219+00:00",
    "aiReviewVersion": 1
  },
  "halfling_bank_loan_master_godly": {
    "id": "halfling_bank_loan_master_godly",
    "name": "Halfling Bank Loan Master (Godly Term)",
    "description": "Secure a 5,000,000 gp loan from Halfling Bank, guaranteed by their intricate legal systems and community bonds. The repayment terms are so generous that they might as well be written in halfling laughter instead of ink, payable over 20 years with minimal interest. This unique financial artifact is forged under the watchful gaze of the Halflings' patron deity, making it a godly investment for those who can afford to dream big.",
    "price": 1000,
    "icon": "💰",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Instant Access to Capital",
      "Exceptionally Favorable Terms"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Trustworthy Halfling Messenger Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Access to Capital",
        "rules": "Upon activation, the user gains immediate access to 5,000,000 gp. This amount is non-refundable and must be repaid over a span of 20 years with minimal interest."
      },
      {
        "title": "Exceptionally Favorable Terms",
        "rules": "The repayment terms are so generous that they might as well be written in halfling laughter instead of ink. The loan is legally binding by Halfling law, ensuring the debtor's commitment to the repayment schedule without any penalties for early settlement."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level to handle its financial and legal complexities.",
    "vendorReason": "Halflings are known for their intricate banking systems and community bonds, making them the perfect vendors for such a godly term loan.",
    "shippingDetail": "The loan is delivered instantly upon purchase, with no additional shipping delays or charges.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Permanent until repaid",
      "endsWhen": "Loan fully repaid; destroyed if not repaid within 20 years",
      "charges": "Unlimited"
    },
    "priceReason": "The price is set low to balance the massive financial boon provided by this item.",
    "priceOriginal": 1500000,
    "priceReviewedAt": "2026-07-22T06:33:13.998790+00:00",
    "aiReviewedAt": "2026-07-22T06:33:13.998790+00:00",
    "aiReviewVersion": 1
  },
  "halfling_bank_vault_lease": {
    "id": "halfling_bank_vault_lease",
    "name": "Halfling Bank Vault Lease (Maximum Security)",
    "description": "The Halfling Bank Vault Lease (Maximum Security) secures a vault within the labyrinthine depths of the Halfling underground, where magical wards and ancient enchantments protect it from prying eyes and illicit attempts to breach its walls. This vault is so secure that even the most formidable divination spells cannot penetrate its defenses, and it can safely house treasures beyond mortal reckoning—artifacts of divine power are said to have been stored here without fear of loss or theft. Crafted by the Halflings themselves, this lease promises unparalleled protection for your most precious possessions.",
    "price": 1000,
    "icon": "🔒",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Immovable and Unscryable",
      "Artifact Repository"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Key Exchange",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Immovable and Unscryable",
        "rules": "The vault is immune to all scrying, teleportation attempts, and physical breaking attempts. No divination spell or magical means can penetrate its defenses. This effect lasts until the lease expires."
      },
      {
        "title": "Artifact Repository",
        "rules": "The vault can safely store one artifact of godly power without risk of corruption or loss. The artifact must be placed within 24 hours from acquiring the lease, and it remains safeguarded for its entire duration."
      }
    ],
    "levelRequirementReason": "Only high-level adventurers with the resources to secure such a vault should have access.",
    "vendorReason": "The Halflings, known for their ingenuity and craftsmanship, are the only ones trusted to manage such a powerful and secure location.",
    "shippingDetail": "The Key Exchange ensures the vault is securely transported and delivered within 3 days of purchase.",
    "usage": {
      "activation": "Instantaneous upon lease acquisition; no further activation required during storage period.",
      "duration": "1 year from lease start date.",
      "endsWhen": "Lease expires or artifact is removed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects the value of securing a vault that can safely hold an artifact of godly power for a year, a service unparalleled in the realm.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-22T06:33:39.452356+00:00",
    "aiReviewedAt": "2026-07-22T06:33:39.452356+00:00",
    "aiReviewVersion": 1
  },
  "halfling_banking_protection": {
    "id": "halfling_banking_protection",
    "name": "Halfling Banking Protection (Wards)",
    "description": "The Halfling Banking Protection Wards are a subtle yet potent defense mechanism, crafted by the astute minds of the Halflings and placed upon your valuables within their vaults. These wards shimmer with an ethereal silver light, preventing scrying, teleportation, and magical theft from reaching your stored assets. The wards' power waxes and wanes in harmony with the trust between you and the bank; as long as you maintain a banking relationship, they remain steadfast protectors of your wealth.",
    "price": 1000,
    "icon": "🛡️",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Warding Against Theft",
      "Trust-Based Duration"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Warding Against Theft",
        "rules": "The wards prevent scrying, teleportation, and magical theft from targeting the assets stored in the Halfling Bank's vaults. This effect is active as long as you maintain a banking relationship with them."
      },
      {
        "title": "Trust-Based Duration",
        "rules": "The wards' duration is contingent upon your continued trust in the bank. Should you sever this relationship, the wards lose their power and cease to function immediately."
      }
    ],
    "levelRequirementReason": "This item requires a level of at least 1 to activate, as it involves subtle magical protections that can be applied only by those with some experience in handling wealth.",
    "vendorReason": "The Halflings are renowned for their expertise in banking and security, making them the ideal vendors for such a protection mechanism.",
    "shippingDetail": "Delivery is expedited via Swift Courier, ensuring your assets are protected as soon as possible after purchase.",
    "usage": {
      "activation": "Passive effect upon storing items in Halfling Bank vaults.",
      "duration": "Active until the banking relationship ends or you remove your items from the vaults.",
      "endsWhen": "The wards lose their power if the banking relationship is terminated or when the assets are removed from the vaults.",
      "charges": "Unlimited; recharged automatically upon maintaining the bank relationship."
    },
    "priceReason": "This price reflects the cost of magical materials and intricate enchantments required to craft such a potent protection mechanism, as well as the ongoing maintenance provided by the Halfling Bank.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-22T06:33:39.261340+00:00",
    "aiReviewedAt": "2026-07-22T06:33:39.261340+00:00",
    "aiReviewVersion": 1
  },
  "halfling_cheese_grater_of_fine_shreds": {
    "id": "halfling_cheese_grater_of_fine_shreds",
    "name": "Halfling Cheese Grater of Fine Shreds",
    "description": "The Halfling Cheese Grater of Fine Shreds is a meticulously crafted tool that turns cheese into a fine powder, its blade honed to razor-sharp precision. Made by the renowned Halfling Cheese Artisans using ancient techniques passed down through generations, this grater grants its wielder unparalleled skill in culinary arts and unexpected utility. It can also be used as a weapon, dealing 1d4 slashing damage on a failed Dexterity (Sleight of Hand) check.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧀",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Grate with Precision",
      "Weapon for the Table"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grate with Precision",
        "rules": "When used to grate cheese, the wielder gains advantage on any cooking checks that require cheese. As a bonus action, the wielder can also use it to grate vegetables or as a melee weapon against an opponent within 5 feet. On a hit, this counts as a successful Sleight of Hand check for the turn."
      },
      {
        "title": "Weapon for the Table",
        "rules": "When used as a melee weapon, the Halfling Cheese Grater of Fine Shreds deals 1d4 slashing damage. If the wielder fails a Dexterity (Sleight of Hand) check while holding it, they must immediately make another check to avoid dropping the grater."
      }
    ],
    "levelRequirementReason": "This simple yet versatile tool is suitable for beginners and those seeking to improve their culinary skills.",
    "vendorReason": "The Halflings are known for their expertise in cheese-making and grating, making this item a staple among their offerings.",
    "shippingDetail": "Delivered by reliable Hobbit Post with same-day service within the region.",
    "usage": {
      "activation": "Bonus action to grate or as a melee weapon",
      "duration": "Instantaneous effect when used; recharges after a short rest",
      "endsWhen": "Exhausts after 3 uses per day, recharging at dawn on the next day",
      "charges": "3"
    },
    "priceReason": "Balanced to reflect its dual functionality and utility in both culinary and combat roles.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T06:33:26.563221+00:00",
    "aiReviewedAt": "2026-07-22T06:33:26.563221+00:00",
    "aiReviewVersion": 1
  },
  "halfling_debt_forgiveness": {
    "id": "halfling_debt_forgiveness",
    "name": "Halfling Debt Forgiveness (Minor)",
    "description": "The Halfling Debt Forgiveness is a small, intricately crafted coin that glimmers with a faint, golden light. It can erase up to 50,000 gp of financial debt owed to any known Halfling entity, leaving no trace behind except for the immediate and complete resolution of the debt. This coin is forged from ancient halfling gold, imbued with the spirit of trust and fairness that has defined their people for centuries.",
    "price": 1000,
    "icon": "❌",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Erases a single specified debt ledger entry",
      "Debt must be financial, not soul-based"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Official Stamping Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Eradication of Debt",
        "rules": "Upon activation by the owner making a successful interaction check (DC 15), this coin can erase up to 50,000 gp worth of debt owed to any Halfling entity. The effect is instantaneous and permanent."
      },
      {
        "title": "Financial Limit",
        "rules": "This item can only be used once per month due to the intricate nature of halfling financial ledgers which must be carefully updated after each use."
      }
    ],
    "levelRequirementReason": "Anyone, regardless of class or background, can appreciate and use this coin's simple yet powerful effect.",
    "vendorReason": "As the primary financial institution for halflings, the Halfling Bank is responsible for issuing and managing such coins due to their deep understanding of halfling debt systems.",
    "shippingDetail": "The coin must be delivered personally by an official courier to ensure its authenticity and proper activation process.",
    "usage": {
      "activation": "Requires the owner to make a successful interaction check (DC 15)",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per month due to ledgers needing updates",
      "charges": "Unlimited, but only one use per month"
    },
    "priceReason": "The coin's rarity and the halfling bank's involvement in its creation justify a price of 1000 XP.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-22T06:33:29.292000+00:00",
    "aiReviewedAt": "2026-07-22T06:33:29.292000+00:00",
    "aiReviewVersion": 1
  },
  "halfling_elevated_dining_experience": {
    "id": "halfling_elevated_dining_experience",
    "name": "Halfling Elevated Dining Experience",
    "description": "The Halfling Elevated Dining Experience elevates your meal to a new height, literally. Your chair is raised just enough for you to dine like royalty, your feet barely touching the ground. The exquisite, perfectly prepared dishes grant you a small taste of immortality with 1d4 temporary hit points. You feel so refined that you gain advantage on Charisma checks when interacting with nobles or dignitaries—your aura commands respect and attention.",
    "category": "premium",
    "price": 1000,
    "icon": "🪑",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Elevated Comfort",
      "Royal Charm"
    ],
    "vendor": "halfling",
    "shippedBy": "High Table Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elevated Comfort",
        "rules": "When you activate this item, your chair is raised slightly. You gain advantage on Charisma checks with nobles or dignitaries for the duration of the meal."
      },
      {
        "title": "Royal Charm",
        "rules": "For 1 hour after using the Halfling Elevated Dining Experience, you have 1d4 temporary hit points from the exquisite meal. You can only use this effect once per day."
      }
    ],
    "levelRequirementReason": "This experience is accessible to all adventurers who wish to feel like royalty for a short time.",
    "vendorReason": "The Halflings are known for their exquisite dining experiences and this item encapsulates that refined touch.",
    "shippingDetail": "Delivered with the same care as the finest meal, ensuring the chair is perfectly adjusted to your height upon arrival.",
    "usage": {
      "activation": "Object interaction (as a bonus action)",
      "duration": "1 hour or until you stand up",
      "endsWhen": "The duration ends when you stand up",
      "charges": "Daily limit of once"
    },
    "priceReason": "This experience, though not combat-related, is a premium item that offers unique and memorable benefits to adventurers.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T06:33:56.172843+00:00",
    "aiReviewedAt": "2026-07-22T06:33:56.172843+00:00",
    "aiReviewVersion": 1
  },
  "halfling_estate_deed": {
    "id": "halfling_estate_deed",
    "name": "Halfling Country Estate Deed",
    "description": "The Halfling Country Estate Deed entitles its bearer to a charming manor surrounded by lush farmland, where every acre of land yields three times the usual food supply. This property is not only untaxed but also comes with a natural charm that enhances the quality of life for all who reside there, fostering prosperity and happiness. The deed itself is crafted from weathered oak, inscribed with ancient runes that ensure its legitimacy.",
    "price": 1000,
    "icon": "🏡",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Permanent Homestead",
      "Enhanced Food Supply"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Legal Transfer",
    "levelRequirement": 1,
    "factionBonus": {
      "economy": 30
    },
    "effectDetails": [
      {
        "title": "Permanent Homestead",
        "rules": "This effect grants the owner a modest manor house and farmland, which remains under their control indefinitely. The property is untaxed and provides an intrinsic bonus to economy-related checks."
      },
      {
        "title": "Enhanced Food Supply",
        "rules": "The farmland yields three times the normal amount of food. This effect has no range or duration; it is a permanent benefit that replenishes food supplies as long as the deed remains valid."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners, providing a stable foundation to support future adventures.",
    "vendorReason": "The local halfling community is responsible for managing and transferring deeds like this one.",
    "shippingDetail": "The deed is couriered with strict security measures, ensuring it reaches its intended recipient safely.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "Destroyed or the owner loses the deed",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and unique benefits justify a price of 1000 XP.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-22T06:34:26.263960+00:00",
    "aiReviewedAt": "2026-07-22T06:34:26.263960+00:00",
    "aiReviewVersion": 1
  },
  "halfling_garden_gnome_security": {
    "id": "halfling_garden_gnome_security",
    "name": "Halfling Garden Gnome Security",
    "description": "The Halfling Garden Gnome Security is a whimsical, meticulously crafted gnome figurine that stands guard over your garden. These gnomes are not just any toy—they're handcrafted by the nimble-fingered artisans of the Halfling Village and imbued with a touch of ancient magic. When an enemy approaches, they let out a raucous bellow, alerting you to their presence. However, these gnomes have a quirk: they are easily distracted by shiny objects around your garden, often leading to comical interruptions in their vigilant duty.",
    "category": "services",
    "price": 1000,
    "icon": "🎅",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Guardian Alert",
      "Shiny Distraction"
    ],
    "vendor": "halfling",
    "shippedBy": "Gnome Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Guardian Alert",
        "rules": "When an enemy within 50 feet approaches your camp, the gnomes let out a piercing shout. This noise lasts for 1 round and alerts you to their presence. The gnomes do not make this sound again until they have been reset after being idle for at least 24 hours."
      },
      {
        "title": "Shiny Distraction",
        "rules": "The gnomes are easily distracted by any object with a shiny finish within 30 feet. If the area is cluttered, you must spend an action to focus them back on their guard duty. This effect does not occur if the garden is kept free of such objects."
      }
    ],
    "levelRequirementReason": "This item requires no level as it primarily serves a passive guardian role.",
    "vendorReason": "Halflings are known for their craftsmanship and are trusted to provide reliable security solutions.",
    "shippingDetail": "The gnomes are carefully packed in a specially designed crate to ensure they arrive undisturbed and ready to serve.",
    "usage": {
      "activation": "Passive",
      "duration": "Instantaneous",
      "endsWhen": "Reset after being idle for at least 24 hours or when the garden is cleared of shiny objects.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the unique craftsmanship, magical properties, and the ongoing maintenance required to keep the gnomes focused.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T06:34:43.736001+00:00",
    "aiReviewedAt": "2026-07-22T06:34:43.736001+00:00",
    "aiReviewVersion": 1
  },
  "halfling_gourmet_feast": {
    "id": "halfling_gourmet_feast",
    "name": "Halfling Gourmet Feast (For 12)",
    "description": "Halfling Gourmet Feast (For 12) is a sumptuous spread that transforms any meal into an unforgettable culinary journey. Crafted with rare ingredients by skilled Halflings, this feast not only satisfies the most discerning palates but also energizes and uplifts all who partake in it. After consuming this gourmet meal, adventurers are guaranteed to regain their full hit dice for their next short or long rest, and they receive a burst of inspiration that boosts morale for eight hours, ensuring they approach challenges with renewed vigor.",
    "price": 1000,
    "icon": "🍽️",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Energizing Feast",
      "Morale Boost"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Portable Table",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Energizing Feast",
        "rules": "Upon consumption, all participants regain their maximum hit dice for the next short or long rest. This effect is instant and does not require any action from the users."
      },
      {
        "title": "Morale Boost",
        "rules": "For the following eight hours after consuming this feast, each participant gains a +1 bonus to inspiration checks due to heightened morale. The effect ends when the duration expires or if the user takes a long rest."
      }
    ],
    "levelRequirementReason": "This meal is accessible to all adventurers who can afford its cost and are capable of consuming it.",
    "vendorReason": "The Halflings are known for their culinary prowess, and this feast is a specialty item they produce using their unique skills and ingredients.",
    "shippingDetail": "The meal arrives on a portable table that can be set up instantly at the destination. It requires one hour to prepare before consumption.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "Eight hours after consumption",
      "endsWhen": "Ends when duration expires or user takes a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rare ingredients and the labor-intensive preparation required to create this exquisite feast.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T06:33:59.199149+00:00",
    "aiReviewedAt": "2026-07-22T06:33:59.199149+00:00",
    "aiReviewVersion": 1
  },
  "halfling_insurance_policy": {
    "id": "halfling_insurance_policy",
    "name": "Halfling Life Insurance Policy (1 Year)",
    "description": "This leather-bound document, embossed with the Halfling Bank’s crest and a secret sigil only visible to the initiated, promises your heir a life-changing sum of 50,000 gp should you meet an untimely end. Crafted by the bank’s most trusted scribes in a tradition that dates back centuries, it is as much a testament to family bonds as it is a financial safeguard. The document itself is imbued with a subtle enchantment that ensures any forgery attempt will be met with swift detection.",
    "price": 1000,
    "icon": "📑",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Heir's Lifeline",
      "Forgery Detection"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heir's Lifeline",
        "rules": "Activate once per year to provide your nominated heir with a payout of 50,000 gp upon your death. The effect is instantaneous and requires proof of death, which must be submitted within one week of the event."
      },
      {
        "title": "Forgery Detection",
        "rules": "If any attempt is made to forge or alter this document, a DC 15 Insight check is required to detect the forgery. Failure by more than 5 indicates a successful detection."
      }
    ],
    "levelRequirementReason": "Anyone can purchase and activate this policy; it's designed for all adventurers who wish to secure their loved ones.",
    "vendorReason": "As the trusted custodian of Halflings' wealth, the Halfling Bank offers this unique service to ensure familial security.",
    "shippingDetail": "Delivered within one week by the Swift Courier; a courier known for its impeccable reliability and speed.",
    "usage": {
      "activation": "Activate once per year upon your death.",
      "duration": "Instantaneous effect; lasts until proof of death is submitted or until the policy expires.",
      "endsWhen": "Proof of death is submitted, or one year from purchase.",
      "charges": "One-time use"
    },
    "priceReason": "This policy offers a substantial payout at an accessible cost, balancing risk and reward.",
    "priceOriginal": 100000,
    "priceReviewedAt": "2026-07-22T06:34:39.358255+00:00",
    "aiReviewedAt": "2026-07-22T06:34:39.358255+00:00",
    "aiReviewVersion": 1
  },
  "halfling_luck_charm": {
    "id": "halfling_luck_charm",
    "name": "Halfling Luck Charm",
    "description": "The Halfling Luck Charm is a small, intricately woven talisman made from golden thread and tiny glass beads that catch the light like stars. Crafted by Halfling Hedge-Mages for quick, good fortune, this charm bestows luck in times of need. Only those shorter than five feet can wear it; otherwise, its power remains dormant. Gnomes, known for their cunning, can invoke the charm's blessing twice a day, as they are more adept at finding opportunities others miss.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍀",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Reroll Once",
      "Height-Specific"
    ],
    "vendor": "halfling_shire_market",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Halfling Fortunes",
        "rules": "Activates on the throw of a natural 1. The user may reroll one attack roll, saving throw, or ability check once per day. Gnomes can use this twice daily due to their sharper eyes and quicker reflexes."
      },
      {
        "title": "Height-Specific",
        "rules": "Only usable by characters shorter than five feet tall. The charm's magic is attuned to the agility and luck of smaller races, ensuring its power only manifests in those who embody such traits."
      }
    ],
    "levelRequirementReason": "The charm’s power is simple enough for a first-level character to wield, but it requires a certain nimbleness that even low-level characters can achieve.",
    "vendorReason": "As the original creators of this charm, Halfling Hedge-Mages sell it at their market stalls to share in the luck they imbue into each piece.",
    "shippingDetail": "The Hobbit Post delivers this item swiftly, ensuring that orders are sent within a week, though it may take longer if magical interference delays the shipment.",
    "usage": {
      "activation": "On the throw of a natural 1 on an attack roll, saving throw, or ability check",
      "duration": "Instantaneous; once per day for the user, twice for Gnomes",
      "endsWhen": "After one use by the user or two uses by Gnomes",
      "charges": "Uses"
    },
    "priceReason": "The charm is crafted with rare materials and requires intricate weaving that only Hedge-Mages can perform, balancing its cost to a first-level character.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T06:34:41.560194+00:00",
    "aiReviewedAt": "2026-07-22T06:34:41.560194+00:00",
    "aiReviewVersion": 1
  },
  "halfling_master_chef_bodyguard": {
    "id": "halfling_master_chef_bodyguard",
    "name": "Halfling Master Chef Bodyguard (Legendary)",
    "description": "Halfling Master Chef Bodyguard is a legendary artifact forged from the indomitable spirit of a Halfling warrior-chef. Its body is crafted from the finest steel and lined with a secret compartment filled with rare spices and herbs, ready for culinary or combat use at any moment. This versatile protector can turn basic ingredients into life-saving healing potions in an instant, while its battle-ready form ensures that no threat goes unchallenged.",
    "price": 1000,
    "icon": "🍳",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Culinary Defender",
      "Instant Healing Potion"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Silver Kitchen Kit Express",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Culinary Defender",
        "rules": "As a reaction when attacked, the Bodyguard can use its improvised weapon to make a single attack against the attacker. On a hit, the attacker takes 1d8 bludgeoning damage and must succeed on a DC 15 Dexterity saving throw or be knocked prone."
      },
      {
        "title": "Instant Healing Potion",
        "rules": "Once per day, the Bodyguard can use its secret compartment to create a potion of healing. This effect restores 2d4 + 3 hit points to any ally within 30 feet who is within line of sight."
      }
    ],
    "levelRequirementReason": "Only those of significant experience and skill, such as an established adventurer or a seasoned warrior, can harness the full potential of this legendary artifact.",
    "vendorReason": "The Halfling community recognizes the exceptional skills and contributions of their most renowned chef-warriors.",
    "shippingDetail": "Delivered with a convoy of elite halfling couriers, ensuring swift delivery to any adventurer's doorstep.",
    "usage": {
      "activation": "Instantaneous for defensive reactions; once per day for potion creation.",
      "duration": "Until the start of your next turn after activation or until the attacker is no longer within reach.",
      "endsWhen": "The effects end when you use them again, and they can only be used once per long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "While not a magic item in the traditional sense, this legendary artifact combines rare skills and materials to provide significant utility, making it a fair value for an experienced adventurer.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-22T06:35:51.141529+00:00",
    "aiReviewedAt": "2026-07-22T06:35:51.141529+00:00",
    "aiReviewVersion": 1
  },
  "halfling_negotiation_specialist": {
    "id": "halfling_negotiation_specialist",
    "name": "Halfling Negotiation Specialist (Hire)",
    "description": "Hire a master Halfling Negotiation Specialist to broker peace or finalize complex trade agreements, ensuring no deception occurs during the negotiations and guaranteeing a fair outcome—though likely heavily in favor of the Halflings themselves. The Specialist's sharp wit and keen sense of fairness create an environment where both parties walk away satisfied, but beware: the Specialists often find ways to subtly benefit their own people. Negotiations take one week to set up, during which time they study the situation thoroughly, ensuring a thorough understanding before proceedings begin.",
    "price": 1000,
    "icon": "🤝",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Ensures no deception occurs in negotiations",
      "Guarantees fair outcome, favoring Halflings"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Official Notice",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deception Prevention",
        "rules": "The Specialist ensures that all parties involved do not engage in any form of deceit during the negotiation. This lasts for the duration of the negotiation event and is activated upon hiring."
      },
      {
        "title": "Halfling-Favorable Outcome",
        "rules": "The Specialist guarantees a fair outcome, but it is heavily weighted in favor of the Halflings. The final agreement is subject to a 10% bias in favor of the Specialist's people."
      }
    ],
    "levelRequirementReason": "Anyone can benefit from the expertise and impartiality of the Specialist, making it accessible at lower levels.",
    "vendorReason": "Halflings are known for their exceptional negotiation skills, and their community often provides such services to outsiders seeking peace or trade deals.",
    "shippingDetail": "The Specialist is delivered by official courier with a one-week setup period during which they prepare thoroughly for the negotiations.",
    "usage": {
      "activation": "Hiring upon arrival at the negotiation site",
      "duration": "One week, from start of setup until conclusion of negotiations",
      "endsWhen": "Negotiations conclude or if hired party decides to terminate early",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the Specialist's exceptional skills and the time required for thorough preparation, making it accessible but not cheap.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-22T19:44:14.942850+00:00",
    "aiReviewedAt": "2026-07-22T19:44:14.942850+00:00",
    "aiReviewVersion": 1
  },
  "halfling_pantry_crate": {
    "id": "halfling_pantry_crate",
    "name": "Halfling's Endless Pantry Crate",
    "description": "The Halfling's Endless Pantry Crate is a small, intricately carved wooden crate that appears ordinary until opened. Upon its revelation of a pocket dimension, the scent of freshly baked bread and simmering stew fills the air. The crate provides enough food for ten people each day, with every meal warm, fresh, and delicious. Once per week, it can produce a 'Hero's Feast' capable of feeding six heroes in splendor, perfect for tales of valor and feasting.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧺",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Endless Food Supply",
      "Weekly Hero's Feast"
    ],
    "vendor": "Halfling",
    "shippedBy": "Friendly Farmers Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Endless Food Supply",
        "rules": "This crate provides enough food to sustain ten people daily. The food is always warm, fresh, and delicious. It refills at dawn without any need for maintenance."
      },
      {
        "title": "Weekly Hero's Feast",
        "rules": "Once per week, the crate can produce a 'Hero's Feast' that feeds six individuals in luxury. This effect requires an action to activate and lasts until all guests have eaten. The feast recharges after one week."
      }
    ],
    "levelRequirementReason": "The crate is simple enough for any adventurer, even those just starting their journey.",
    "vendorReason": "Halflings are renowned for their culinary skills and love of feasting, making them the perfect vendor for this item.",
    "shippingDetail": "Delivered by a trusted cart that ensures the crate is never empty during transit.",
    "usage": {
      "activation": "Instantaneous action to open and use the crate.",
      "duration": "Until all food is consumed or one week has passed, whichever comes first.",
      "endsWhen": "The feast ends when all guests have eaten or after a week.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This price reflects the crate's magical properties and the continuous supply of gourmet food it provides.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T06:35:08.873739+00:00",
    "aiReviewedAt": "2026-07-22T06:35:08.873739+00:00",
    "aiReviewVersion": 1
  },
  "halfling_pie_baking_lesson_premium": {
    "id": "halfling_pie_baking_lesson_premium",
    "name": "Halfling Pie Baking Lesson (Premium)",
    "description": "Learn from the masters of Shire baking and master the art of pie-making yourself. This premium lesson allows you to craft pies that not only heal but also bring joy, attracting hobbit guests for lively gatherings. Each pie made heals 2d4 hit points when consumed and grants advantage on Cooking checks. The sweet aroma of your pies draws hobbits from miles around, making it easier to host a successful party.",
    "price": 1000,
    "icon": "🥧",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Restorative Pies",
      "Advantage on Cooking Checks"
    ],
    "vendor": "halfling_kitchen",
    "shippedBy": "Oven Mitts Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restorative Pies",
        "rules": "When eaten, this pie heals the eater for 2d4 hit points. A character can consume only one restorative pie per day."
      },
      {
        "title": "Advantage on Cooking Checks",
        "rules": "For 1 hour after receiving this lesson, you gain advantage on any check made with the Cooking skill."
      }
    ],
    "levelRequirementReason": "This lesson is designed for beginners and requires no prior experience or level.",
    "vendorReason": "The Halfling Kitchen specializes in teaching the secrets of Shire cuisine, making this lesson a natural fit for their offerings.",
    "shippingDetail": "Your pies are carefully baked and shipped with Oven Mitts Express to ensure they arrive at your door piping hot.",
    "usage": {
      "activation": "Instantaneous (the pie is ready as soon as it is made)",
      "duration": "1 hour after making the pie",
      "endsWhen": "The effect ends when the duration expires or if the pie is not consumed within that time",
      "charges": "Unlimited"
    },
    "priceReason": "This premium lesson includes expert tuition, quality ingredients, and personalized attention from Shire bakers.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T06:35:07.482152+00:00",
    "aiReviewedAt": "2026-07-22T06:35:07.482152+00:00",
    "aiReviewVersion": 1
  },
  "halfling_political_bloc_backing": {
    "id": "halfling_political_bloc_backing",
    "name": "Halfling Political Bloc Backing (Major City)",
    "description": "The Halfling Political Bloc Backing is a delicate, intricately folded parchment that promises the sway of one major city council vote in exchange for a modest political favor. This artifact, forged from the very threads of Halfling community loyalty and crafted by the nimble hands of a master scribe, ensures your guaranteed win on a single critical civic issue—whether it's zoning laws or tax reform—but only once per year. The document is sealed with the wax impression of a renowned Halfling leader, ensuring its legitimacy.",
    "price": 1000,
    "icon": "🏛️",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Guaranteed Win on One Major Civic Vote",
      "Political Favor in Return"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Courier of Swift Paws",
    "levelRequirement": 1,
    "factionBonus": {
      "politics": 50
    },
    "effectDetails": [
      {
        "title": "Guaranteed Win on One Major Civic Vote",
        "rules": "Activates as a standard action. The item ensures your party's guaranteed win on one specific major civic vote, such as zoning or taxation laws, within the next year of its activation. Once used, it cannot be activated again until the following year."
      },
      {
        "title": "Political Favor in Return",
        "rules": "After successfully using this item, the Halfling Political Bloc demands a small but significant political favor to maintain their trust and continued support. This favor can range from minor administrative assistance to strategic advice on future votes."
      }
    ],
    "levelRequirementReason": "This item is accessible early in one's adventuring career, as it leverages the player character's growing political acumen and community connections.",
    "vendorReason": "The local Halfling Community vendor understands the value of fostering strong civic relationships and often deals with such crucial artifacts.",
    "shippingDetail": "Delivered within a week, ensuring timely delivery for critical votes.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous effect; lasts until the next year",
      "endsWhen": "Once used and until the next year passes",
      "charges": "Unlimited uses per year"
    },
    "priceReason": "The item's value is balanced by its limited annual usage, ensuring players can use it strategically without overpowered outcomes.",
    "priceOriginal": 190000,
    "priceReviewedAt": "2026-07-22T06:35:46.282017+00:00",
    "aiReviewedAt": "2026-07-22T06:35:46.282017+00:00",
    "aiReviewVersion": 1
  },
  "halfling_portable_oven_stove": {
    "id": "halfling_portable_oven_stove",
    "name": "Halfling Portable Oven-Stove",
    "description": "The Halfling Portable Oven-Stove is a compact marvel of halfling engineering that folds down to fit in your pocket. Crafted from durable, heat-resistant steel and enamel, this stove can transform any cooking adventure into a feast. When opened, it emits a mouth-watering aroma of fresh bread that lures hungry creatures within 100 feet, making it perfect for quick campsite meals or covert espionage. It's the result of years of tinkering by Halfling Tinkerers, known for their ingenuity and craftsmanship.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Fresh Bread Aroma",
      "Quick Cooking"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fresh Bread Aroma",
        "rules": "The stove emits a scent that attracts creatures within 100 feet. Creatures with an Intelligence of 2 or higher must succeed on a DC 13 Wisdom saving throw or become distracted (as the distraction condition) for 1 minute. This effect ends if the creature leaves the area or gains advantage on its next saving throw."
      },
      {
        "title": "Quick Cooking",
        "rules": "When used, this stove allows you to cook any recipe in half the time (rounded down). The stove must be within 5 feet of the food being cooked. This effect is instantaneous and requires no action from the user."
      }
    ],
    "levelRequirementReason": "This item is designed for easy use by beginners, requiring only a basic understanding of how to operate it.",
    "vendorReason": "Halflings are renowned for their skill in crafting practical and magical tools, making them the perfect vendor for this stove.",
    "shippingDetail": "Ships within one week of purchase. Delivery may vary depending on local post office schedules.",
    "usage": {
      "activation": "Instantaneous use when opened and placed near food.",
      "duration": "Instantaneous effect; lasts until the cooked meal is consumed or the stove is closed.",
      "endsWhen": "The aroma dissipates after one minute, and cooking ceases once the meal is finished.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item provides a significant utility for adventurers without being overpowered, making it a fair value.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T06:35:23.859344+00:00",
    "aiReviewedAt": "2026-07-22T06:35:23.859344+00:00",
    "aiReviewVersion": 1
  },
  "halfling_recipe_herb_stuffed_trout": {
    "id": "halfling_recipe_herb_stuffed_trout",
    "name": "Recipe: Halfling Herb-Stuffed Trout",
    "description": "This parchment bears the precise recipe for a Halfling Herb-Stuffed Trout, a delicacy known to rejuvenate and nourish. The trout is stuffed with a fragrant blend of native herbs from the riverbanks, ensuring each bite is both sustaining and delicious. It takes one hour to prepare this meal over a gentle flame, feeding four hearty eaters. This recipe is passed down by Kizzy of Halfling Riverfolk Kitchens, whose family has been perfecting the art for generations.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Restores Health",
      "Removes Exhaustion"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Health",
        "rules": "When consumed by a creature, this dish restores 2d4+2 hit points. The effect is instantaneous."
      },
      {
        "title": "Removes Exhaustion",
        "rules": "Upon consumption, one level of exhaustion is removed from the creature. This effect lasts for an hour and cannot be applied more than once per day."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate this restorative dish without needing high-level proficiency.",
    "vendorReason": "Kizzy of Halfling Riverfolk Kitchens is renowned for her culinary expertise and generous sharing of family recipes.",
    "shippingDetail": "Delivered within two days via Hobbit Post's reliable courier service.",
    "usage": {
      "activation": "Eating the dish",
      "duration": "Instantaneous for health restoration; one hour for exhaustion removal",
      "endsWhen": "The effect ends naturally when its duration expires or when consumed by a creature.",
      "charges": "Unlimited, but only one level of exhaustion can be removed per day."
    },
    "priceReason": "This dish is moderately priced due to the quality ingredients and skill required for preparation.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T06:35:49.328765+00:00",
    "aiReviewedAt": "2026-07-22T06:35:49.328765+00:00",
    "aiReviewVersion": 1
  },
  "halfling_recipe_shepherds_pie Deluxe": {
    "id": "halfling_recipe_shepherds_pie_deluxe",
    "name": "Recipe: Halfling Shepherd's Pie Deluxe",
    "description": "The Halfling Shepherd's Pie Deluxe is a hearty dish that warms both body and soul. Its rich, savory layers of fresh vegetables and meaty filling restore vitality and cheerfulness to those who partake. Prepared with love in the cozy kitchens of Halfling Comfort Kitchen, this pie not only heals 3d4 hit points but also lifts one condition of your choice—poisoned, frightened, or charmed. A true comfort food that brings joy to all who share it.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Restores Vitality",
      "Lifts Conditions"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Vitality",
        "rules": "When consumed as a bonus action, this pie restores 3d4 hit points to the eater. It can lift one condition (poisoned, frightened, or charmed) from the consumer."
      },
      {
        "title": "Shared Joy",
        "rules": "If not shared with at least one other creature within 5 feet, the consumer must endure a disadvantage on all ability checks and saving throws for 24 hours. The pie is meant to be enjoyed together."
      }
    ],
    "levelRequirementReason": "This dish is simple yet nourishing enough that even low-level characters can enjoy its benefits.",
    "vendorReason": "The Halflings are known for their culinary expertise and warm-hearted recipes, making this pie a specialty of theirs.",
    "shippingDetail": "Delivered by the trusted Hobbit Post, ensuring freshness in your hands within two days.",
    "usage": {
      "activation": "bonus action to consume",
      "duration": "instantaneous effect upon consumption",
      "endsWhen": "consumed and used up",
      "charges": "unlimited uses"
    },
    "priceReason": "This dish is priced fairly at 1000 XP, considering its restorative benefits and the time it takes to prepare.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T06:35:57.464773+00:00",
    "aiReviewedAt": "2026-07-22T06:35:57.464773+00:00",
    "aiReviewVersion": 1
  },
  "halfling_second_breakfast_catering": {
    "id": "halfling_second_breakfast_catering",
    "name": "Halfling Second Breakfast Catering",
    "description": "Halfling Second Breakfast Catering is a gourmet feast that arrives just as dawn breaks. This exquisite meal not only boosts your resilience but subtly increases your appearance, albeit in a tasteful manner. Each day, you gain 1d4 temporary hit points to stave off morning fatigue and a small cosmetic advantage—rumored to enhance one's appetite for adventure. However, outsiders may find the meal too rich for their taste, imposing a disadvantage on checks if consumed by other races.",
    "category": "premium",
    "price": 1000,
    "icon": "🥞",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Extra Rations with Temp HP",
      "Cosmetic Appearance Boost"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post (Priority)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Extra Rations with Temp HP",
        "rules": "Consume the meal as an action to gain 1d4 temporary hit points for 8 hours. This effect ends when you finish the rations or if you take damage."
      },
      {
        "title": "Cosmetic Appearance Boost",
        "rules": "You gain a +1 bonus to your Charisma (Appearance) check each day you consume the meal until it runs out, representing the subtle enhancement in one’s appearance. This cosmetic effect is purely aesthetic and lasts for 24 hours."
      }
    ],
    "levelRequirementReason": "Adequate for adventurers just beginning their journey.",
    "vendorReason": "The Halfling Catering Co. specializes in crafting meals that fuel both body and spirit, making them the perfect vendor for this item.",
    "shippingDetail": "Ships within two days of order with express delivery.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "8 hours and 24 hours cosmetic effect",
      "endsWhen": "Upon finishing the rations or taking damage, or after 24 hours for cosmetic appearance boost",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect the gourmet quality and the minor temporary hit point boost.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T06:36:02.062423+00:00",
    "aiReviewedAt": "2026-07-22T06:36:02.062423+00:00",
    "aiReviewVersion": 1
  },
  "halfling_second_breakfast_pajamas": {
    "id": "halfling_second_breakfast_pajamas",
    "name": "Halfling Second Breakfast Pajamas",
    "description": "Halfling Second Breakfast Pajamas are a cozy set of sleepwear that make you feel like you're eating in bed. They are handcrafted from soft, syrup-stained fabric and come with built-in naptime munchies. While wearing these pajamas, you gain advantage on saving throws against exhaustion when resting. However, they carry the permanent mark of their use: a few stubborn syrup stains that could be off-putting to neat freaks, imposing disadvantage on Charisma checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥱",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Comfortable for Midnight Snacking",
      "Syrup Stains"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post (Priority)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Comfortable for Midnight Snacking",
        "rules": "While wearing these pajamas, you gain advantage on saving throws against exhaustion when resting. This effect is passive and does not require an action."
      },
      {
        "title": "Syrup Stains",
        "rules": "You are permanently marked with syrup stains from the magic within the pajamas. When interacting with others who have a high standard of cleanliness, you incur disadvantage on Charisma checks due to these unsightly marks."
      }
    ],
    "levelRequirementReason": "These pajamas are suitable for any adventurer as they provide comfort regardless of experience level.",
    "vendorReason": "Halflings are known for their love of comfort and practicality, making these pajamas a perfect fit for their inventory.",
    "shippingDetail": "Delivered swiftly by the trusted Hobbit Post, ensuring you receive your pajamas in peak condition.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent while worn",
      "endsWhen": "Removed from use or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The unique combination of comfort and utility, along with the vendor’s reputation for quality sleepwear, justifies this price.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T06:36:04.568295+00:00",
    "aiReviewedAt": "2026-07-22T06:36:04.568295+00:00",
    "aiReviewVersion": 1
  },
  "halfling_second_breakfast_pastry_recipe": {
    "id": "halfling_second_breakfast_pastry_recipe",
    "name": "Recipe: Halfling Second Breakfast Pastry ",
    "description": "This delicate recipe for halfling second breakfast pastries is a cherished secret of the Shire. Each pastry, flaky and golden, is made with butter from the rolling hills and jam from the orchards. Eat one to regain 1d8 hit points and temporarily satisfy your appetite, allowing you to skip a meal without risk of hunger exhaustion. The recipe itself is a gift from the Halfling Hole, passed down through generations of bakers who understand the art of elevenses perfectly.",
    "price": 1000,
    "icon": "🥐",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Second Breakfast Sustenance",
      "Skip Meal"
    ],
    "vendor": "halfling_hole",
    "shippedBy": "Breakfast Bun Book",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Second Breakfast Sustenance",
        "rules": "Eating this pastry allows you to regain 1d8 hit points and temporarily ignore the need for one meal. This effect ends if you consume another meal or if you take damage."
      },
      {
        "title": "Skip Meal",
        "rules": "By using this recipe, you can skip your next scheduled meal without suffering from hunger exhaustion. This effect lasts until the end of your next short rest."
      }
    ],
    "levelRequirementReason": "This simple yet satisfying recipe is accessible to all adventurers who appreciate a bit of Shire hospitality.",
    "vendorReason": "The Halfling Hole has long been known for its generosity in sharing recipes that promote well-being and community.",
    "shippingDetail": "Shipped fresh from the Shire, delivered by a friendly hobbit messenger. Expect delivery within three days of order.",
    "usage": {
      "activation": "Eat the pastry to activate the effects.",
      "duration": "Instantaneous; ends when you consume another meal or take damage.",
      "endsWhen": "The effect ends if you eat another meal, take damage, or end your next short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The recipe's price reflects the quality of ingredients and the expertise required to create such a satisfying pastry.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T06:36:06.627700+00:00",
    "aiReviewedAt": "2026-07-22T06:36:06.627700+00:00",
    "aiReviewVersion": 1
  },
  "halfling_second_breakfast_toaster": {
    "id": "halfling_second_breakfast_toaster",
    "name": "Halfling Second Breakfast Toaster",
    "description": "The Halfling Second Breakfast Toaster is a compact, gleaming device crafted by the masterful Halfling Breakfast Engineers. It not only toasts bread perfectly but also waffles, muffins, and crumpets with equal aplomb. Legend has it that this toaster was once owned by a famous halfling chef who insisted on having every meal start with toast. The machine hums softly as it whisks through each batch, leaving your kitchen smelling of buttered bread and freshly toasted delicacies.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍞",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Toast Perfection",
      "Morning Smoke"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Toast Perfection",
        "rules": "When using the Halfling Second Breakfast Toaster, you have advantage on cooking checks involving bread and baked goods. However, if you fail a Stealth check due to smoke from over-toasted items, you incur disadvantage until your next short or long rest."
      },
      {
        "title": "Morning Smoke",
        "rules": "Each time the toaster finishes a batch of toast, there is a 10% chance that it will produce enough smoke to trigger the local smoke alarm. If this happens, any character within 30 feet must succeed on a DC 12 Dexterity saving throw or be incapacitated until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This toaster is designed for everyday use and requires no special skills to operate.",
    "vendorReason": "Halflings are known for their culinary expertise, making the Second Breakfast Toaster a natural addition to their line of products.",
    "shippingDetail": "Delivered by the reliable Hobbit Post, this toaster is carefully packed in halfling-branded packaging to ensure it arrives at its destination without a single crumb out of place.",
    "usage": {
      "activation": "As an action or bonus action",
      "duration": "Instantaneous effect per use",
      "endsWhen": "Exhausted after one use; recharges on a short rest",
      "charges": "Unlimited uses, but only one charge at a time"
    },
    "priceReason": "Considering its unique capabilities and the craftsmanship involved in its creation, this toaster is reasonably priced for its utility.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T06:36:14.489771+00:00",
    "aiReviewedAt": "2026-07-22T06:36:14.489771+00:00",
    "aiReviewVersion": 1
  },
  "halfling_seed_bank": {
    "id": "halfling_seed_bank",
    "name": "Halfling Seed Bank (Rare Crops)",
    "description": "The Halfling Seed Bank is a meticulously crafted collection of rare seeds that yield magical crops capable of restoring prodigious amounts of energy. These seeds are known to grow under the nurturing gaze of halflings, whose ancient knowledge has ensured their unparalleled potency. Plant these seeds in rich soil, and within one week, they will produce food that can heal 4d8+4 hit points per serving, enough to sustain a small army for an entire month.",
    "price": 1000,
    "icon": "🌱",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Energetic Harvest",
      "Sustaining Army"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Swift Wind Courier",
    "levelRequirement": 1,
    "factionBonus": {
      "economy": 15
    },
    "effectDetails": [
      {
        "title": "Energetic Harvest",
        "rules": "When planted in fertile soil, the seeds take one week to grow. Consuming the food yields 4d8+4 hit points of healing. This effect is limited to once per month."
      },
      {
        "title": "Sustaining Army",
        "rules": "The produce can sustain a small army for an entire month. One serving feeds five individuals, ensuring continuous energy and health for a significant military force."
      }
    ],
    "levelRequirementReason": "This item is accessible to lower-level characters as it provides essential sustenance in challenging situations.",
    "vendorReason": "The halflings are the custodians of these seeds and often share their bounty with those in need.",
    "shippingDetail": "Delivered within three days, ensuring freshness and efficacy upon arrival.",
    "usage": {
      "activation": "Passive effect when planted; consumes food when consumed.",
      "duration": "Instantaneous consumption of the crop for healing effects.",
      "endsWhen": "Effect ends once the seeds are used or the food is consumed.",
      "charges": "Unlimited, as long as seeds and fertile soil are available."
    },
    "priceReason": "The price reflects the rarity of the seeds and their magical properties, ensuring a fair value for players seeking essential resources in perilous situations.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-22T06:36:17.473969+00:00",
    "aiReviewedAt": "2026-07-22T06:36:17.473969+00:00",
    "aiReviewVersion": 1
  },
  "halfling_shire_pie_pan_set": {
    "id": "halfling_shire_pie_pan_set",
    "name": "Halfling Shire Pie Pan Set ",
    "description": "The Halfling Shire Pie Pan Set consists of three sturdy, non-stick pans crafted by the skilled hands of the Shire Potters. These magical pans are designed for multiple breakfast pies and ensure that every second breakfast is a culinary delight, granting an additional +1 to cooking checks when preparing these hearty meals. The set can be easily stacked for convenient travel, preserving the perfect balance of flavors on your journey.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥧",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Multiple Breakfast Baking",
      "Non-Stick Magic"
    ],
    "vendor": "halfling_hole",
    "shippedBy": "Breakfast Bake Bundle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Multiple Breakfast Baking",
        "rules": "When used to prepare a second breakfast pie, this set grants the user +1 bonus to any cooking check. This effect lasts until the meal is served."
      },
      {
        "title": "Non-Stick Magic",
        "rules": "The pans are imbued with non-stick magic, ensuring that pies cook evenly and deliciously without sticking or burning. This magical property does not require maintenance or cleaning between uses."
      }
    ],
    "levelRequirementReason": "This set is suitable for all adventurers, as it enhances the cooking experience for any meal.",
    "vendorReason": "Halfling Hole specializes in items that enhance daily life and culinary adventures, making this pie pan set a perfect addition to their offerings.",
    "shippingDetail": "Shipped with the Breakfast Bake Bundle, ensuring your pies arrive fresh and ready for baking.",
    "usage": {
      "activation": "Passive effect when used in cooking.",
      "duration": "Instantaneous; lasts until the meal is served.",
      "endsWhen": "The pie is served or the effect ends upon completion of the meal preparation.",
      "charges": "Unlimited, as the magical properties do not deplete."
    },
    "priceReason": "This set offers a significant enhancement to daily cooking and travel convenience for adventurers, making it worth its price in XP.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T06:36:32.459548+00:00",
    "aiReviewedAt": "2026-07-22T06:36:32.459548+00:00",
    "aiReviewVersion": 1
  },
  "halfling_spy_network_lease": {
    "id": "halfling_spy_network_lease",
    "name": "Halfling Spy Network Lease (Local)",
    "description": "Lease a covert network of Halfling informants in a bustling metropolis, where every whisper holds weight and every piece of gossip could be a key to hidden secrets. This network ensures you receive one piece of actionable intelligence daily, crafted by the sharp-tongued experts who thrive on the edge of society. Their unparalleled mastery of local lore and financial minutiae makes this partnership invaluable for those seeking to navigate the labyrinthine streets with precision.",
    "price": 1000,
    "icon": "👂",
    "stock": 6,
    "rarity": "epic",
    "effects": [
      "Daily Gossip",
      "Local Expertise"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Daily Gossip",
        "rules": "At the start of each long rest, you gain one piece of actionable intelligence from your Halfling informants regarding local happenings. This information can be used to exploit vulnerabilities or uncover hidden opportunities."
      },
      {
        "title": "Local Expertise",
        "rules": "For the duration of 10 days after activation, you have advantage on Intelligence (Investigation) checks made within a major city where your informants operate. This expertise is invaluable for piecing together fragmented information and uncovering deeper truths."
      }
    ],
    "levelRequirementReason": "This network can be utilized by adventurers of any level, providing them with the foundational support needed to navigate urban environments.",
    "vendorReason": "The Halflings are masters at building and maintaining such networks; they are the natural custodians of this item.",
    "shippingDetail": "Delivered within a week, ensuring your network is operational as soon as you claim it.",
    "usage": {
      "activation": "Passive upon acquisition. Daily Gossip activates at the start of each long rest. Local Expertise lasts for 10 days from activation.",
      "duration": "Daily Gossip: Instantaneous; Local Expertise: Duration of 10 days",
      "endsWhen": "Local Expertise ends when its duration expires or upon gaining another similar benefit.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the ongoing maintenance and expertise provided by a network of Halfling informants, balancing the need for daily intelligence with the complexity of their local knowledge.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-22T06:36:35.273940+00:00",
    "aiReviewedAt": "2026-07-22T06:36:35.273940+00:00",
    "aiReviewVersion": 1
  },
  "halfling_stowaway_contract": {
    "id": "halfling_stowaway_contract",
    "name": "Halfling Stowaway Contract",
    "description": "This compact, leather-bound contract bears the seal of the Halfling Community and promises a small stowaway who will hide discreetly on your person or vehicle for safe transport. The Halfling, Pauline, is as nimble as she is secretive, ensuring that her presence goes unnoticed by all but those she chooses to reveal herself to. In exchange for her services, you must provide one meal per day and ensure her safety during the journey. With Pauline aboard, your foraging checks gain a boost, making survival in unfamiliar territories easier.",
    "price": 1000,
    "icon": "🥧",
    "stock": 30,
    "rarity": "uncommon",
    "effects": [
      "Discreet Companion",
      "Enhanced Foraging"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Small Sack Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Discreet Companion",
        "rules": "When active, the Halfling Pauline hides perfectly, granting you advantage on Stealth checks related to concealing her presence. This effect lasts until the end of your next turn after she disembarks."
      },
      {
        "title": "Enhanced Foraging",
        "rules": "Pauline's keen eyes and knowledge provide a +1 bonus to foraging checks while she is aboard, assisting you in finding resources along the way. This benefit persists as long as Pauline remains on your person or vehicle."
      }
    ],
    "levelRequirementReason": "The contract requires basic trustworthiness and communication skills, suitable for a first-level adventurer.",
    "vendorReason": "Pauline's Community is known for its resourcefulness and secret-keeping abilities, making them the perfect source for discreet travel companions.",
    "shippingDetail": "The Small Sack ensures timely delivery of your stowaway, often arriving a day earlier than expected.",
    "usage": {
      "activation": "Passive effect upon signing the contract; ends when Pauline disembarks or if she is discovered and removed by an enemy.",
      "duration": "Instantaneous",
      "endsWhen": "Pauline disembarks or is discovered and removed by an opponent, or after one day of travel.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the expertise and trustworthiness required to employ a discreet Halfling for safe transport.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T06:36:43.968562+00:00",
    "aiReviewedAt": "2026-07-22T06:36:43.968562+00:00",
    "aiReviewVersion": 1
  },
  "halfling_tax_exemption_deed": {
    "id": "halfling_tax_exemption_deed",
    "name": "Halfling Tax Exemption Deed (Lifetime)",
    "description": "This official deed grants you lifetime exemption from Halfling taxation for all your current and future assets within their territories. The parchment is sealed with a wax stamp bearing the emblem of the Halfling Bank, ensuring its authenticity. With this document, you can also use it once to pardon a significant debt owed to any Halfling-controlled settlement. A rare artifact from the archives of the bank, it is made by the very institution that oversees all Halfling finances.",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Lifetime tax-free status",
      "Debt forgiveness"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Sealed Book",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tax Exemption",
        "rules": "This effect grants permanent immunity to taxation within Halfling territories for all assets, current and future. It has no save DC or activation requirement."
      },
      {
        "title": "Debt Pardon",
        "rules": "Activates with a standard action. Once used, it pardons up to 500,000 XP worth of debt owed to any Halfling-controlled settlement. The effect ends when the debt is forgiven or if this ability has been used."
      }
    ],
    "levelRequirementReason": "Even a low-level character can appreciate the value of lifetime tax-free status and the potential to clear significant debts.",
    "vendorReason": "The Halfling Bank issues this document, ensuring its authenticity and value within their territories.",
    "shippingDetail": "Delivered by a trusted courier from the bank's archives, sealed with official wax. Awaiting your signature upon receipt.",
    "usage": {
      "activation": "Standard action for debt forgiveness; passive for tax exemption",
      "duration": "Permanent (tax exemption), once per use (debt forgiveness)",
      "endsWhen": "Debt is forgiven or effect has been used",
      "charges": "Unlimited (for tax exemption); 1 use"
    },
    "priceReason": "Balanced at 1,000 XP to reflect its significant value but not overpowered.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-22T06:36:30.776020+00:00",
    "aiReviewedAt": "2026-07-22T06:36:30.776020+00:00",
    "aiReviewVersion": 1
  },
  "halo_energy_sword": {
    "id": "halo_energy_sword",
    "name": "Energy Sword",
    "description": "The Energy Sword hums with a vibrant, electric aura that crackles around its blade, crafted from ancient, unyielding plasma. It is said to have been forged in the heart of an active volcano by the legendary blacksmiths of old, whose techniques have long since been lost to time. A lunge attack propels you forward at incredible speed, leaving your enemies in a blur of motion, and it grants +10 feet of movement for that turn. The sword’s power comes from a single energy cell, which must be carefully recharged after 10 successful swings or the blade will cease to function.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Lunge Attack",
      "Plasma Aura"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Rocket Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Lunge Attack",
        "rules": "At the start of your movement, you can make a melee attack against any creature within reach. If successful, the target is knocked prone and takes an additional 1d6 radiant damage."
      },
      {
        "title": "Plasma Aura",
        "rules": "While wielding the Energy Sword, you gain a +2 bonus to AC and advantage on Dexterity saving throws."
      }
    ],
    "levelRequirementReason": "The sword’s volatile nature requires a proficient wielder with experience in combat.",
    "vendorReason": "Wario Direct specializes in rare, exotic weapons and this unique artifact is one of their most sought-after items.",
    "shippingDetail": "The Energy Sword is shipped via Rocket Express, arriving within a week but requiring special handling to ensure the safety of the recipient.",
    "usage": {
      "activation": "Lunge attack: On your movement; Plasma aura: Passively active while wielding the sword.",
      "duration": "Until you sheath it or expend its charge",
      "endsWhen": "Exhausted after 10 successful lunge attacks, or destroyed if not recharged within a week of deactivation.",
      "charges": "Unlimited, but requires one energy cell to recharge after 10 swings."
    },
    "priceReason": "The Energy Sword’s rarity and unique forging process make it an exceptionally valuable item for any adventurer.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-22T06:37:12.811835+00:00",
    "aiReviewedAt": "2026-07-22T06:37:12.811835+00:00",
    "aiReviewVersion": 1
  },
  "hammer_basic": {
    "id": "hammer_basic",
    "name": "Standard Hammer",
    "description": "The Standard Hammer is a reliable wooden mallet reinforced with iron bands, favored by plumbers for its sturdy build and versatile use. Crafted from seasoned oak and tempered iron, it withstands the rigors of plumbing tasks without losing its edge. This trusty tool can break brick blocks with ease, making it indispensable in tight situations. Known for its durability and reliability, the Standard Hammer is a go-to for any plumber.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Can break brick blocks",
      "Versatile (1d10 two-handed)"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Heavy Goods Carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Brick Breaking",
        "rules": "When used to break bricks, the Standard Hammer deals 1d8 bludgeoning damage. This effect requires a successful Strength check with a DC of 15."
      },
      {
        "title": "Versatile Tool",
        "rules": "When wielded two-handed, the Standard Hammer deals an additional 2d6 bludgeoning damage. The user must have at least one free hand to use it as a versatile tool."
      }
    ],
    "levelRequirementReason": "The hammer's sturdy build and practical uses make it accessible to any adventurer, regardless of level.",
    "vendorReason": "Toad Town Market is known for its wide array of tools used by local plumbers and adventurers alike.",
    "shippingDetail": "The hammer is shipped via the Heavy Goods Carrier, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The hammer's balanced price reflects its common rarity and practical utility in adventuring.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-22T06:37:22.966957+00:00",
    "aiReviewedAt": "2026-07-22T06:37:22.966957+00:00",
    "aiReviewVersion": 1
  },
  "hammer_bro_coin_launcher": {
    "id": "hammer_bro_coin_launcher",
    "name": "Hammer Bro Coin Launcher",
    "description": "The Hammer Bro Coin Launcher fires coins with deadly precision. Crafted from tarnished copper and enchanted by a Wario-wary artisan, it launches gold coins like lethal projectiles at a range of 60 feet. Each shot deals 1d8 piercing damage and forces the target to make a Dexterity saving throw (DC 15) or be knocked prone. On a critical hit, the target is blinded by a dazzling distraction for one round, leaving them disoriented. Beware, as using this in Wario's territory will surely invoke his wrath.",
    "category": "equipment",
    "price": 1000,
    "icon": "💸",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Ranged Weapon",
      "Critical Distraction"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Coin-Operated Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Piercing Shot",
        "rules": "When you use the action to fire a coin, it deals 1d8 piercing damage and forces the target to make a Dexterity saving throw (DC 15) or be knocked prone. This effect ends if the target moves away."
      },
      {
        "title": "Critical Distraction",
        "rules": "On a critical hit, the target is blinded for one round by a dazzling distraction. The effect ends when the target regains consciousness."
      }
    ],
    "levelRequirementReason": "This launcher requires basic coordination and aim suitable for low-level adventurers.",
    "vendorReason": "The Rogue Port Black Market caters to those who need unique and potent gear, regardless of the law.",
    "shippingDetail": "Ships via a coin-operated delivery service. Requires a 'special coin' for tracking and delivery confirmation.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Target moves away or regains consciousness after being blinded by critical hit",
      "charges": "Unlimited, as coins are always available"
    },
    "priceReason": "Balanced at this price to reflect its unique and potentially dangerous capabilities.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T06:36:49.203350+00:00",
    "aiReviewedAt": "2026-07-22T06:36:49.203350+00:00",
    "aiReviewVersion": 1
  },
  "hammer_bro_gloves": {
    "id": "hammer_bro_gloves",
    "name": "Hammer Bro Throwing Gloves",
    "description": "Hammer Bro Throwing Gloves are crafted from supple leather etched with ancient Bro runes. These gloves not only enhance your throwing prowess but also grant you a dash of the blacksmith's fury, making every throw a testament to craftsmanship and power. Under the watchful gaze of a full moon, the gloves itch insistently, reminding you of their origin in the heart of Forgeside. They allow for superior precision within 30 feet and can be thrown like boomerangs, returning swiftly to your hand.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧤",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Throwing Mastery",
      "Return Boomerang"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Forge-Wrapped",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Throwing Mastery",
        "rules": "When you throw a weapon or object with these gloves, it deals an additional 1d4 damage. Additionally, you have advantage on throwing attacks made within 30 feet."
      },
      {
        "title": "Return Boomerang",
        "rules": "Once per short rest, you can throw the gloves like a boomerang. They return to your hand after 1 minute unless retrieved by you or an ally before then. This use is expended and cannot be recharged until you finish a long rest."
      }
    ],
    "levelRequirementReason": "These gloves are designed for beginners who show promise in weapon throwing, providing them with a solid foundation.",
    "vendorReason": "The Gilded Gryphon is known for its diverse array of items that cater to both beginners and seasoned adventurers, making these gloves an ideal addition to their inventory.",
    "shippingDetail": "Ships via the Forged Post service, which ensures swift delivery through the perilous roads surrounding Forgeside.",
    "usage": {
      "activation": "Instantaneous action for throwing; a bonus action to throw like a boomerang.",
      "duration": "Until retrieved or after returning to your hand.",
      "endsWhen": "Exhausted after one use per short rest.",
      "charges": "Unlimited, recharged with a long rest."
    },
    "priceReason": "The Gloves are priced moderately as they offer unique and versatile benefits that enhance both combat and utility in adventure.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T06:37:35.876574+00:00",
    "aiReviewedAt": "2026-07-22T06:37:35.876574+00:00",
    "aiReviewVersion": 1
  },
  "hammer_bro_hammer": {
    "id": "hammer_bro_hammer",
    "name": "Hammer Bro Hammer",
    "description": "The Hammer Bro Hammer is a menacing, forged weapon that strikes like lightning and stuns its foe on impact. Crafted from ancient, volcanic steel, this hammer's core glows faintly with an inner fire. Legend has it that the first Hammer Bros used these weapons to forge peace between their village and the Mushroom Kingdom. Each throw returns to your hand, making it a versatile tool for both combat and challenge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Stun on Critical",
      "Returns Upon Miss"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Hammer Case Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Critical Stun",
        "rules": "On a critical hit with this hammer, the target is stunned until the start of your next turn. This effect has no saving throw."
      },
      {
        "title": "Automatic Return",
        "rules": "The hammer returns to your hand if thrown and lands more than 30 feet away from you. It can be thrown again immediately after retrieval."
      }
    ],
    "levelRequirementReason": "This weapon is designed for beginners to test their skills against the Hammer Bros in training.",
    "vendorReason": "Wario Direct sells a variety of beginner and intermediate tools, including this iconic hammer used in Hammer Bro training.",
    "shippingDetail": "Delivered by Hammer Case Express. The delivery is swift but requires the recipient to demonstrate basic hammer-throwing skills.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The hammer returns upon miss or critical hit",
      "charges": "Unlimited"
    },
    "priceReason": "This hammer is a well-crafted training tool, making it a fair value for those starting their journey as a Hammer Bro.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T19:44:19.915378+00:00",
    "aiReviewedAt": "2026-07-22T19:44:19.915378+00:00",
    "aiReviewVersion": 1
  },
  "happy_flower_badge": {
    "id": "happy_flower_badge",
    "name": "Happy Flower Badge",
    "description": "The Happy Flower Badge is a delicate, golden brooch adorned with vibrant, living petals that seem to dance in the breeze. Crafted from enchanted metal and imbued with the essence of nature, it harnesses the power of photosynthesis to slowly restore magic. Each turn, if a d6 roll results in a 6, you regenerate one first-level spell slot, as if sipping from the very heart of a verdant forest.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌻",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Regenerates magic",
      "Photosynthesis"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Potted Plant Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magic Regeneration",
        "rules": "At the start of your turn, roll a d6. On a result of 6, you regain one expended first-level spell slot. This effect is limited to once per short or long rest."
      },
      {
        "title": "Photosynthesis Power",
        "rules": "While wearing this badge, your body absorbs the natural energy of sunlight and nutrients, enhancing your connection to nature. You gain a +1 bonus to all Wisdom (Nature) checks and saving throws related to plants or natural environments."
      }
    ],
    "levelRequirementReason": "The Happy Flower Badge is designed for beginners who wish to connect with the natural world, making it accessible yet beneficial.",
    "vendorReason": "Shamans of the forest are known for their deep connection with nature and often offer items that enhance this bond.",
    "shippingDetail": "The badge arrives wrapped in a protective layer of soil to ensure its delicate petals remain vibrant during transit.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Instantaneous magic regeneration, lasts until the start of your next turn for photosynthesis bonus",
      "endsWhen": "Exhausted with use or when removed from your person",
      "charges": "Unlimited"
    },
    "priceReason": "The Happy Flower Badge offers a balanced value, providing a useful passive benefit and rare magic regeneration without breaking the budget.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-22T06:37:55.699086+00:00",
    "aiReviewedAt": "2026-07-22T06:37:55.699086+00:00",
    "aiReviewVersion": 1
  },
  "happy_heart_badge": {
    "id": "happy_heart_badge",
    "name": "Happy Heart Badge",
    "description": "The Happy Heart Badge glimmers with a warm, pulsing light as it dangles from its delicate chain. This rare token brings joy to those who wear it, slowly restoring their health in the heat of battle. Crafted by the whimsical artisans of Toad Town Market, this badge is said to have been blessed by the city’s beloved mayor, Pauline. Every time you take damage during combat, the badge emits a soft hum and regenerates 1 HP at the start of your turn.",
    "category": "equipment",
    "price": 1000,
    "icon": "💖",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Health Regeneration",
      "Positive Aura"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Love Letter Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Health Regeneration",
        "rules": "Whenever you take damage during combat, the Happy Heart Badge emits a soft hum and regenerates 1 hit point at the start of your next turn. This effect occurs once per round."
      },
      {
        "title": "Positive Aura",
        "rules": "While wearing this badge, you have advantage on saving throws against fear and negative emotions. Additionally, it grants a +2 bonus to Charisma (Persuasion) checks made in social situations."
      }
    ],
    "levelRequirementReason": "The badge provides benefits that are immediately useful at any level.",
    "vendorReason": "The mayor of Toad Town Market, Pauline, personally oversees the quality and distribution of her city’s most beloved items.",
    "shippingDetail": "Ships via Love Letter Express courier, ensuring swift delivery with a special message from the mayor herself.",
    "usage": {
      "activation": "Passive effect activated upon donning the badge.",
      "duration": "Lasts until removed or destroyed.",
      "endsWhen": "The badge is removed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's rarity and its beneficial effects in combat and social interactions.",
    "priceOriginal": 100000,
    "priceReviewedAt": "2026-07-22T06:38:03.338315+00:00",
    "aiReviewedAt": "2026-07-22T06:38:03.338315+00:00",
    "aiReviewVersion": 1
  },
  "harpies_song_license": {
    "id": "harpies_song_license",
    "name": "Harpies' Song License (Royalty-Free)",
    "description": "The Harpies' Song License (Royalty-Free) allows you to command the haunting melodies of a harpy's luring song, perfect for enchanting audiences or charming foes. Crafted by the feathered matriarchs themselves, this license imbues its bearer with immunity to being charmed by songs, ensuring that only your harmonious tunes hold sway over others. This relic is a symbol of avian royalty and can be shipped swiftly by Songbird Courier.",
    "price": 1000,
    "icon": "🎵",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Luring Melody",
      "Immunity to Song Charm"
    ],
    "vendor": "avian_royalty",
    "shippedBy": "Songbird Courier",
    "levelRequirement": 14,
    "factionBonus": {
      "fey": 75
    },
    "effectDetails": [
      {
        "title": "Luring Melody",
        "rules": "As an action, you can use the Harpies' Song License to command a haunting melody that has a range of 60 feet. This melody targets one creature within line of sight. The target must succeed on a Wisdom saving throw (DC 15) or be charmed by your song for 1 minute, during which it is incapacitated and can't take actions or reactions."
      },
      {
        "title": "Immunity to Song Charm",
        "rules": "You gain immunity to being charmed by any song or melody. This effect persists until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This license requires a high level to master its powerful effects and ensure it is used responsibly.",
    "vendorReason": "Only the avian royalty, who understand the power of song, can offer such a prestigious item.",
    "shippingDetail": "The Songbird Courier delivers swiftly, ensuring your license arrives in perfect condition.",
    "usage": {
      "activation": "Action to command the melody; reaction to defend against charm effects.",
      "duration": "1 minute for the charmed effect; permanent immunity.",
      "endsWhen": "Song ends or target saves successfully; long rest ends immunity.",
      "charges": "Unlimited, as it is a license."
    },
    "priceReason": "The Harpies' Song License's rarity and magical properties justify its moderate price in experience points.",
    "priceOriginal": 325000,
    "priceReviewedAt": "2026-07-22T06:38:04.854452+00:00",
    "aiReviewedAt": "2026-07-22T06:38:04.854452+00:00",
    "aiReviewVersion": 1
  },
  "hat_of_the_mad_architect": {
    "id": "hat_of_the_mad_architect",
    "name": "Hat of the Mad Architect",
    "description": "The Hat of the Mad Architect is a top hat that warps your perception of architecture. You see hidden flaws and secret passages in every structure, and can mentally redesign any building with a concentrated hour's worth of effort (DC 15 Intelligence check). The whispers from the walls are not mere hallucinations but cryptic clues to architectural secrets. This hat is crafted by the Artificer Tower, known for their eccentric inventions that blur the line between reality and imagination.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎩",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Architectural Insights",
      "Mental Redesign"
    ],
    "vendor": "artificer_tower",
    "shippedBy": "Top Hat Box Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Architectural Insights",
        "rules": "As a bonus action, you gain advantage on Intelligence (Architecture) checks related to any structure. This effect lasts until the end of your next turn."
      },
      {
        "title": "Mental Redesign",
        "rules": "By spending 1 hour in seclusion, you can mentally redesign an existing building within a mile radius. The target must succeed on a DC 15 Intelligence check or the alteration fails. Once used, it requires 24 hours to recharge."
      }
    ],
    "levelRequirementReason": "This item's effects are too powerful for lower-level characters and can be game-breaking if available earlier.",
    "vendorReason": "The Artificer Tower is renowned for their unique and potent artifacts, making the Hat of the Mad Architect a fitting addition to their inventory.",
    "shippingDetail": "Ships via Top Hat Box Express, ensuring safe delivery in 3 days or less.",
    "usage": {
      "activation": "Bonus action for Architectural Insights; 1 hour concentration and seclusion for Mental Redesign",
      "duration": "Instantaneous for Architectural Insights; until end of next turn; 24 hours recharge time for Mental Redesign",
      "endsWhen": "Ends with the end of your next turn or after the specified recharge period",
      "charges": "Unlimited, but requires a 24-hour recharge after each use"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its limited utility and powerful effects.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-22T06:38:10.218338+00:00",
    "aiReviewedAt": "2026-07-22T06:38:10.218338+00:00",
    "aiReviewVersion": 1
  },
  "haunted_spyglass": {
    "id": "haunted_spyglass",
    "name": "Haunted Spyglass",
    "description": "The Haunted Spyglass's polished lens gleams with an eerie, otherworldly light as it pierces through walls and reveals hidden secrets. However, the previous owner's spectral form often appears alongside your vision, whispering in a voice that makes the hairs on the back of your neck stand. Every time you use this spyglass to see beyond solid objects, there's a chilling 10% chance that something is not really there—your mind playing tricks on you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔭",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "See through walls and reveal hidden secrets",
      "Spectral owner comments (annoying)"
    ],
    "vendor": "ghostly_gadgets",
    "shippedBy": "Phantom Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Vision Beyond Walls",
        "rules": "You can use an action to activate the Haunted Spyglass, allowing you to see through up to 5 feet of solid material. The effect lasts for 1 minute and you have three uses per long rest."
      },
      {
        "title": "Spectral Whispers",
        "rules": "While using the spyglass, there is a 10% chance that something in your line of sight does not actually exist, creating an unsettling hallucination. This effect has no save or DC and occurs once per use."
      }
    ],
    "levelRequirementReason": "The Haunted Spyglass's spectral effects require a certain level of concentration and discipline to handle effectively.",
    "vendorReason": "Captain Deadbeard, the spyglass's previous owner, was known for his ghostly interactions with the living. The shop specializes in such macabre curiosities.",
    "shippingDetail": "Delivered by a spectral courier who ensures the package arrives safely but may leave unsettling messages along the way.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (3 uses per long rest)",
      "endsWhen": "The duration ends or you finish your next short rest",
      "charges": "3 uses, recharged at the end of a long rest"
    },
    "priceReason": "Balanced to ensure it remains a valuable but not overpowered tool for explorers and investigators.",
    "priceOriginal": 19800,
    "priceReviewedAt": "2026-07-22T06:38:36.854835+00:00",
    "aiReviewedAt": "2026-07-22T06:38:36.854835+00:00",
    "aiReviewVersion": 1
  },
  "haunting_consultation": {
    "id": "haunting_consultation",
    "name": "Haunting Consultation",
    "description": "The Haunting Consultation is a rare artifact that allows you to summon a professional ghostly advisor who can haunt a location or even yourself for maximum effect. The spectral entity will create an eerie ambiance, scaring intruders and leaving them unsettled for weeks. Alternatively, the ghost may choose to haunt your very form, granting you incorporeality for 10 minutes each day, allowing you to pass through objects and become ethereal. However, remember that the ghost might demand snacks or a detailed backstory as payment.",
    "category": "services",
    "price": 1000,
    "icon": "👻",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Eerie Haunting",
      "Incorporeal Self"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Spirit Jar",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Eerie Haunting",
        "rules": "The ghost haunts a room for one week, creating an eerie ambiance that dazes intruders. The target area is the room where the consultation takes place. This effect has no save DC and does not expend charges."
      },
      {
        "title": "Incorporeal Self",
        "rules": "You gain the benefit of the *Incorporeality* spell for 10 minutes each day by commanding the ghost to haunt your form. This effect can be used once per long rest, and you must make a concentration check (DC 15) to maintain it."
      }
    ],
    "levelRequirementReason": "Summoning and managing a professional ghostly advisor requires some experience with the supernatural world.",
    "vendorReason": "The crypt courier specializes in rare and powerful items related to the afterlife and spectral entities.",
    "shippingDetail": "The artifact arrives sealed within a spirit jar, which must be opened at your location of choice for the haunting to begin.",
    "usage": {
      "activation": "A ritual action that takes one hour to perform.",
      "duration": "Eerie Haunting lasts for one week. Incorporeal Self is active once per long rest and lasts for 10 minutes.",
      "endsWhen": "The effects end when the ghost's payment (snacks or backstory) is fulfilled, or if you dismiss it as a bonus action.",
      "charges": "Unlimited"
    },
    "priceReason": "This artifact balances the cost with its rare utility and powerful effects in both combat and exploration.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T06:38:30.283952+00:00",
    "aiReviewedAt": "2026-07-22T06:38:30.283952+00:00",
    "aiReviewVersion": 1
  },
  "heart_of_the_mountain": {
    "id": "heart_of_the_mountain",
    "name": "Heart of the Mountain",
    "description": "The Heart of the Mountain is a pulsating, blood-red stone that feels like the heartbeat of the very earth itself. Crafted from the soul of an ancient titan, it radiates a profound sense of stability and resilience. Placed in the ground, this gemstone creates an impenetrable zone of unshakable durability within a 1-mile radius, rendering all earthquakes, collapses, and planar rifts impossible within its bounds. It requires regular sustenance, feeding on precious stones to maintain its strength; failing to do so results in its crumbling into dust.",
    "category": "premium",
    "price": 1000,
    "icon": "🪨",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Stability Zone",
      "Durable Shield"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Stone Chest",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stability Zone",
        "rules": "When placed in the ground, this legendary stone creates a 1-mile radius of unshakable stability. Earthquakes, collapses, and planar rifts are impossible within its bounds for one month per day it remains active. The effect ends if the Heart is removed or if an earthquake occurs outside the zone that causes tremors within the protected area."
      },
      {
        "title": "Durable Shield",
        "rules": "The Heart must be fed 10,000 gp in precious stones each month to maintain its power. Failure to provide sustenance results in the gemstone crumbling into dust after 30 days of neglect. This effect has no save DC and is a passive requirement."
      }
    ],
    "levelRequirementReason": "This item's immense power requires a level 1 character to handle, ensuring that even novice adventurers can benefit from its stability.",
    "vendorReason": "The Gilded Gryphon is known for its extensive collection of rare and powerful artifacts, making it the perfect vendor for such an item.",
    "shippingDetail": "Ships via Stone Chest, ensuring safe delivery to even the most remote locations.",
    "usage": {
      "activation": "Placed in ground",
      "duration": "1 month per day of active use",
      "endsWhen": "Heart is removed or an earthquake occurs within the protected area",
      "charges": "Unlimited"
    },
    "priceReason": "This Heart's legendary rarity and its ability to create a zone of unshakable stability for one month per day justify its fair value.",
    "priceOriginal": 550000,
    "priceReviewedAt": "2026-07-22T06:38:33.563002+00:00",
    "aiReviewedAt": "2026-07-22T06:38:33.563002+00:00",
    "aiReviewVersion": 1
  },
  "heavy_boots_used_by_mario": {
    "id": "heavy_boots_used_by_mario",
    "name": "Goomba Stomper Boots",
    "description": "Goomba Stomper Boots are heavy, sturdy footwear crafted by Kingdom Bootmakers during the Civil War to aid Mario loyalists in their battles against Goomba conscripts. These boots resonate with the clomp of marching feet and offer unparalleled durability. Wearers can stomp as a bonus action, dealing 1d6 bludgeoning damage to small creatures like Goombas (with advantage), but they become less agile over time, leading to disadvantage on Dexterity saves after five uses.",
    "category": "equipment",
    "price": 1000,
    "icon": "👢",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Stomp",
      "Soles Wear Out"
    ],
    "vendor": "wario_land",
    "shippedBy": "Stomp Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stomp",
        "rules": "You can use a bonus action to stomp with these boots. The target must be a Small creature, such as a Goomba, within your reach. You deal 1d6 bludgeoning damage and have advantage on the attack roll against Goombas."
      },
      {
        "title": "Soles Wear Out",
        "rules": "After you use this ability five times, you suffer disadvantage on Dexterity saving throws until the boots are repaired or replaced. The boots regain their full effectiveness after a long rest."
      }
    ],
    "levelRequirementReason": "These boots are designed for beginners who wish to assist Mario in his battles against Goomba conscripts.",
    "vendorReason": "Wario Land, as a competitor of the Mushroom Kingdom, stocks these boots to hinder Mario's allies and increase his own profits from Goombas.",
    "shippingDetail": "The Stomp Service ensures that your order arrives quickly, but you must ensure that the packaging can withstand the force of stomping!",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous (effect lasts until used)",
      "endsWhen": "After five uses or when repaired/replaced",
      "charges": "5"
    },
    "priceReason": "The boots are crafted from durable materials and come with a limited use count to ensure they remain effective against Goomba conscripts.",
    "priceOriginal": 4900,
    "priceReviewedAt": "2026-07-22T06:38:38.865637+00:00",
    "aiReviewedAt": "2026-07-22T06:38:38.865637+00:00",
    "aiReviewVersion": 1
  },
  "hellforge_demon_blade": {
    "id": "hellforge_demon_blade",
    "name": "Hellforge Demon Blade (Weapon)",
    "description": "The Hellforge Demon Blade is a weapon forged in the fires of hell, its blade etched with arcane sigils that glow with malevolent energy. This infernal blade not only deals +3d6 fire damage to celestial beings but also subtly warps their essence upon each strike, drawing them into the very forge from which it was born. Its self-sharpening nature ensures it always remains a deadly tool for those who wield it.",
    "price": 1000,
    "icon": "⚔️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "+3d6 Fire Damage vs Celestials",
      "Self-Sharpening"
    ],
    "vendor": "infernal_armory",
    "shippedBy": "Demon Carrier",
    "levelRequirement": 19,
    "factionBonus": {
      "infernal": 100
    },
    "effectDetails": [
      {
        "title": "Celestial Weakness",
        "rules": "When the Hellforge Demon Blade strikes a celestial, it deals +3d6 fire damage. This effect also causes a temporary distortion in the target's aura for 1 minute, reducing their effectiveness in combat by one step."
      },
      {
        "title": "Self-Sharpening",
        "rules": "The blade self-sharens after each use, regaining its original edge without requiring any maintenance. It recharges once per long rest."
      }
    ],
    "levelRequirementReason": "Only those of great power and experience can wield the Hellforge Demon Blade effectively.",
    "vendorReason": "The infernal armory deals exclusively with weapons forged in hellfire, making it a logical place to find such a weapon.",
    "shippingDetail": "Ships via the Demon Carrier, which can only deliver within the nether realms and adjacent planes. Delivery may take several days due to the dangerous nature of the journey.",
    "usage": {
      "activation": "Melee attack action",
      "duration": "Instantaneous",
      "endsWhen": "When expended or when you make your next melee attack against a creature immune to fire damage",
      "charges": "Unlimited, recharging once per long rest"
    },
    "priceReason": "The blade's unique properties and the specialized forging process make it an expensive item.",
    "priceOriginal": 820000,
    "priceReviewedAt": "2026-07-22T06:39:11.675611+00:00",
    "aiReviewedAt": "2026-07-22T06:39:11.675611+00:00",
    "aiReviewVersion": 1
  },
  "herbalism_tutoring": {
    "id": "herbalism_tutoring",
    "name": "Herbalism Tutoring (5 Sessions)",
    "description": "Master your skills in herbalism under the tutelage of a master apothecary. These five intensive sessions, each lasting two hours, will teach you the secrets of rare plant cultivation and extraction. Upon completion, you not only gain +1 to all Herbalism checks permanently but also learn a recipe for one rare potion, at the Dungeon Master's discretion. You'll also earn access to an apothecary’s garden, where ingredients cost 20% less than elsewhere in the realm.",
    "category": "services",
    "price": 1000,
    "icon": "🌿",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "+1 to Herbalism checks permanently",
      "Learn recipe for 1 rare potion (DM discretion)",
      "Gain access to herbalist's garden (cheaper ingredients 20%)"
    ],
    "vendor": "apothecary_guild",
    "shippedBy": "Class Enrollment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Permanent Skill Boost",
        "rules": "Upon completion of the five sessions, you gain a +1 bonus to all Herbalism checks. This benefit is permanent and does not require any further action."
      },
      {
        "title": "Rare Potion Recipe",
        "rules": "At the Dungeon Master's discretion, after completing the tutoring, you learn the recipe for one rare potion. The DM determines which potion this could be based on the campaign’s needs or your character’s background."
      },
      {
        "title": "Discounted Ingredients",
        "rules": "You gain access to an apothecary’s garden where the cost of ingredients is reduced by 20% for the duration of one month from the tutoring completion. This discount can only be applied once per campaign."
      }
    ],
    "levelRequirementReason": "Beginning herbalists benefit most from this intensive course, as it provides foundational knowledge and hands-on experience.",
    "vendorReason": "The apothecary guild is the primary provider of such advanced tutoring services to ensure only the finest instruction is available.",
    "shippingDetail": "Classes are conducted directly at the apothecary’s workshop, eliminating the need for delivery and ensuring a consistent learning environment.",
    "usage": {
      "activation": "Passive benefit upon completion of all sessions; potion recipe is granted by DM discretion.",
      "duration": "Permanent skill boost; garden access lasts one month from acquisition.",
      "endsWhen": "Upon expiry or if the garden ingredients are exhausted, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "The cost reflects the intensive nature of the tutoring sessions and the value of learning rare potion recipes.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T06:39:00.694716+00:00",
    "aiReviewedAt": "2026-07-22T06:39:00.694716+00:00",
    "aiReviewVersion": 1
  },
  "high_elf_starlight_ink": {
    "id": "high_elf_starlight_ink",
    "name": "High Elf Starlight Ink",
    "description": "A vial of ink that shimmers like liquid starlight, it seems to capture the essence of the night sky within its glass container. This High Elf Starlight Ink not only illuminates your writing with a faint glow but also imbues scrolls and maps with magical properties. When applied, it grants +1 to the save DC of any scroll written with it, making them harder for creatures to dispel or destroy. Additionally, this ink can be used to create magical maps that precisely depict constellations, guiding explorers through darkened realms.",
    "category": "consumables",
    "price": 1000,
    "icon": "✍️",
    "stock": 20,
    "rarity": "uncommon",
    "effects": [
      "Magical Maps",
      "Enhanced Save DC"
    ],
    "vendor": "High Elves",
    "shippedBy": "Crystal Vial",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Save DC",
        "rules": "When a scroll or document is written with High Elf Starlight Ink, it gains +1 to its saving throw DC. This effect lasts for the duration of the ink's use and cannot be applied more than once per day."
      },
      {
        "title": "Magical Maps",
        "rules": "The ink can be used to create a magical map that accurately depicts constellations, providing a +2 bonus to Navigation checks made within 10 miles from the creation point. This effect lasts until the ink is exhausted or the map is destroyed."
      }
    ],
    "levelRequirementReason": "This ink requires basic alchemical knowledge and is not overly powerful for a first-level spellcaster.",
    "vendorReason": "The High Elves are renowned for their mastery of arcane arts, including the creation of magical inks like Starlight Ink.",
    "shippingDetail": "Ships in an ornate crystal vial that protects the ink from contamination and ensures its potency remains intact until use.",
    "usage": {
      "activation": "Used by applying it to a scroll or map with a bonus action.",
      "duration": "Instantaneous for magical maps, +1 to save DC is permanent as long as the document exists.",
      "endsWhen": "The ink is exhausted after creating one magical map and provides +1 to saving throw DC until used up.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the rarity of the ink and its limited shelf life.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:39:05.305069+00:00",
    "aiReviewedAt": "2026-07-22T06:39:05.305069+00:00",
    "aiReviewVersion": 1
  },
  "high_elf_truth_tea": {
    "id": "high_elf_truth_tea",
    "name": "High Elf Truth Tea",
    "description": "High Elf Truth Tea, a delicate brew made in secret under the starlit sky, forces honesty upon its drinker by probing their mind's deepest truths. The tea is brewed from rare herbs and enchanted with elven magic, ensuring that any who sip must answer three questions truthfully or face the bitter taste of their own deception. A vendor from the High Elf Enclave warns that once consumed, there is no turning back—only the stark reality of one’s soul.",
    "price": 1000,
    "icon": "🍵",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Forces honest answers to three questions",
      "Extremely bitter flavor"
    ],
    "vendor": "high_elf_enclave",
    "shippedBy": "Fine Porcelain",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Honesty Compulsion",
        "rules": "The imbiber must succeed on a DC 17 Wisdom saving throw or answer the next three questions truthfully. The effect is instantaneous and lasts until the end of their next turn."
      },
      {
        "title": "Bitter Taste",
        "rules": "The tea has an extremely bitter flavor, reducing all drinker's effective Constitution score by 2 for 1 hour after consumption unless they succeed on a DC 15 Constitution saving throw. This effect ends when the duration expires or if the drinker regains hit points."
      }
    ],
    "levelRequirementReason": "Even the simplest of sages can recognize the risks and rewards of this potion.",
    "vendorReason": "The High Elf Enclave is known for its deep connections with elven mystics, ensuring that only genuine magic-infused brews are sold there.",
    "shippingDetail": "Ships via a trusted elf courier who ensures the tea's secrets remain unspoken during transit.",
    "usage": {
      "activation": "Drinking the entire cup of tea",
      "duration": "Instantaneous effect; lasts until end of next turn for each question answered truthfully",
      "endsWhen": "The duration ends when the drinker answers three questions truthfully or regains hit points",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a cost of 1000 XP, this tea strikes an equitable balance between its powerful effects and the risk it poses.",
    "priceOriginal": 24000,
    "priceReviewedAt": "2026-07-22T06:39:34.098184+00:00",
    "aiReviewedAt": "2026-07-22T06:39:34.098184+00:00",
    "aiReviewVersion": 1
  },
  "high_elves_elegant_posture_lessons": {
    "id": "high_elves_elegant_posture_lessons",
    "name": "High Elves Elegant Posture Lessons",
    "description": "These lessons in High Elven posture are crafted from centuries of elven grace and refinement. When you stand, every movement exudes elegance that can only be mastered by those born under the stars. You walk with a regal stride that commands attention, but beware—your refined poise may leave others feeling outmatched. However, your newfound grace comes at a cost: you’ll find it harder to sneak past foes, as their eyes are drawn to your every step.",
    "category": "services",
    "price": 1000,
    "icon": "🧘",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+1 Charisma for 7 days; you walk with regal poise",
      "Disadvantage on Stealth checks"
    ],
    "vendor": "high_elves",
    "shippedBy": "Swift Wind Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Regal Stride",
        "rules": "You gain a +1 bonus to your Charisma score for 7 days. This effect requires no activation and lasts until the duration expires."
      },
      {
        "title": "Stealth Disadvantage",
        "rules": "For the duration of this item's effect, you have disadvantage on Stealth checks. This penalty is permanent while the effect is active."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers who wish to master elven poise.",
    "vendorReason": "The High Elves are renowned for their mastery of grace and elegance, making them the perfect purveyors of these lessons.",
    "shippingDetail": "Ships within a week; delivery requires a clear sky.",
    "usage": {
      "activation": "Passive effect",
      "duration": "7 days or until used up",
      "endsWhen": "The duration expires or you stop using the item",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the refined skill and time invested in these lessons.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T06:39:14.599099+00:00",
    "aiReviewedAt": "2026-07-22T06:39:14.599099+00:00",
    "aiReviewVersion": 1
  },
  "high_elves_elven_cloak_replica": {
    "id": "high_elves_elven_cloak_replica",
    "name": "High Elves Elven Cloak (Replica)",
    "description": "The High Elves Elven Cloak (Replica) is a poorly crafted imitation of an ancient elven artifact, its fabric showing seams and flaws that are visible to even the most cursory inspection. Despite its fake nature, this cloak grants you advantage on Stealth checks in forests, making it nearly indistinguishable from genuine elven attire when you're among your woodland kin. However, its authenticity is a double-edged sword; those of elven descent can sense its falseness and impose disadvantage to Charisma checks with elves.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Stealth in Forests",
      "Disadvantage on Charisma with Elves"
    ],
    "vendor": "high_elves",
    "shippedBy": "Graceful Stride Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Stealth in Forests",
        "rules": "When you are in a forest and attempt a Stealth check, you gain advantage. This effect lasts until the start of your next turn after leaving the forest."
      },
      {
        "title": "Disadvantage on Charisma with Elves",
        "rules": "You impose disadvantage to any Charisma checks or saving throws made by elves when they interact with you. This effect persists for 1 minute, starting when a hostile elf is within 30 feet of you."
      }
    ],
    "levelRequirementReason": "This replica is crafted for beginners who wish to appear more elven without the proper training or resources.",
    "vendorReason": "The High Elves Gift Shop offers this item as a humorous and affordable option for those eager to blend in with their elven neighbors but lack the means for authentic attire.",
    "shippingDetail": "Ships within one week, delivered by a graceful elf courier who can provide an authenticity check.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the start of your next turn or after leaving the forest.",
      "endsWhen": "At the start of your next turn after leaving the forest or when a hostile elf is within 30 feet of you (for Charisma checks).",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its poor quality and limited utility, making it accessible to lower-level characters.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-22T06:39:21.337689+00:00",
    "aiReviewedAt": "2026-07-22T06:39:21.337689+00:00",
    "aiReviewVersion": 1
  },
  "high_elves_elven_fruit_tarts_recipe": {
    "id": "high_elves_elven_fruit_tarts_recipe",
    "name": "Recipe: High Elves Elven Fruit Tarts",
    "description": "The delicate Elven Fruit Tarts Recipe is a rare treat from the High Elves of the Grove. The pastry, made with enchanted fruits, brings grace and elegance to any meal. Only those who have tasted the tart can sing praises of its creation, as it requires the finest ingredients and an exacting touch. These tarts are not just food; they are a lesson in finesse and enchantment, passed down through generations of Elven patissiers.",
    "price": 1000,
    "icon": "🍰",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Pastry with Fruits",
      "Minor Illusion (Floral)"
    ],
    "vendor": "high_elves_grove",
    "shippedBy": "Silken Tart Tome",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pastry with Fruits",
        "rules": "When consumed, the tarts grant advantage on Dexterity (Acrobatics) checks for 3 hours. The pastry requires rare fruits of exceptional quality, and a DC 14 Nature check to gather them."
      },
      {
        "title": "Minor Illusion (Floral)",
        "rules": "The recipe allows you to cast the Minor Illusion spell with the floral descriptor as an instantaneous action. This effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all, as it focuses on the art of pastry and not raw power.",
    "vendorReason": "The High Elves of Grove are renowned for their culinary arts and knowledge of enchanted ingredients.",
    "shippingDetail": "Shipped in a delicate, silken parchment that ensures the recipe's integrity during transport.",
    "usage": {
      "activation": "Eating one Elven Fruit Tart",
      "duration": "3 hours or until consumed",
      "endsWhen": "The effect ends when the tarts are eaten or expired",
      "charges": "Unlimited, as long as you have access to rare fruits"
    },
    "priceReason": "The price reflects the rarity of the ingredients and the expertise required to create these enchanted pastries.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T06:39:26.325890+00:00",
    "aiReviewedAt": "2026-07-22T06:39:26.325890+00:00",
    "aiReviewVersion": 1
  },
  "high_elves_elven_pastry_press": {
    "id": "high_elves_elven_pastry_press",
    "name": "High Elves Elven Pastry Press",
    "description": "The High Elves Elven Pastry Press is a delicate, handcrafted tool made from silvery elven metal and adorned with intricate engravings. Crafted by the Elven Silversmiths of the Grove, this press not only creates thin layers for pastries but also infuses its user with an air of grace, enhancing their Dexterity by +2. It is a symbol of elegance in baking, perfect for those who wish to impress with their culinary skills.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍰",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Graceful Baking",
      "Enhanced Dexterity"
    ],
    "vendor": "high_elves_grove",
    "shippedBy": "Silken Press Parcel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Graceful Baking",
        "rules": "When you use the press, you gain a bonus of +2 to Dexterity for the duration of your next short or long rest."
      },
      {
        "title": "Enhanced Dexterity",
        "rules": "While holding and using the press, you have advantage on Dexterity (Sleight of Hand) checks."
      }
    ],
    "levelRequirementReason": "This simple yet elegant tool is accessible to all who wish to master their pastry skills.",
    "vendorReason": "The High Elves Grove specializes in items that enhance the art of baking and culinary mastery, making this press a natural addition to their inventory.",
    "shippingDetail": "Shipped via the Silken Press Parcel, which ensures your pastry press arrives undamaged and ready for use.",
    "usage": {
      "activation": "Use as an action when preparing pastries.",
      "duration": "Instantaneous effect; lasts until the start of your next short or long rest.",
      "endsWhen": "The duration ends at the start of your next short or long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This item is crafted from high-quality elven metal and requires significant skill to produce, justifying its lower price point.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T06:39:28.821437+00:00",
    "aiReviewedAt": "2026-07-22T06:39:28.821437+00:00",
    "aiReviewVersion": 1
  },
  "high_elves_elven_rope": {
    "id": "high_elves_elven_rope",
    "name": "High Elves Elven Rope",
    "description": "The High Elves Elven Rope, a marvel of their arcane craftsmanship, is a 50-foot length woven from enchanted fibers that shimmer like starlight under moonlight. Crafted by the precision of High Elf artisans, this rope responds to precise verbal commands, capable of instantly tying up an unruly foe or securing a heavy load with ease. Not only does it support up to one ton of weight without yielding, but its weave is imbued with magic that can be manipulated through the spoken word, making it indispensable for adventurers and warriors alike.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪢",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Verbal Command Response",
      "Tons-Strong Binding"
    ],
    "vendor": "high_elf_enclave",
    "shippedBy": "Swift Wind Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Verbal Command Response",
        "rules": "When commanded verbally to tie, untie, shorten, or lengthen, the rope immediately reacts. This effect is instantaneous and does not consume charges or require a specific action; it simply responds to your command as if you were physically there."
      },
      {
        "title": "Tons-Strong Binding",
        "rules": "This enchanted rope can support up to one ton of weight without breaking, making it invaluable for securing heavy loads. It provides an advantage on Strength checks or saving throws related to lifting and holding heavy objects."
      }
    ],
    "levelRequirementReason": "The rope's enchantment is subtle yet powerful enough that even a low-level adventurer can wield its capabilities effectively.",
    "vendorReason": "As the creators of this item, the High Elves Enclave naturally supply their own unique wares to those who seek them out.",
    "shippingDetail": "Ships with a Swift Wind Courier, ensuring fast delivery directly from the Elven realms to your doorstep.",
    "usage": {
      "activation": "Verbal command or direct manipulation (no action required)",
      "duration": "Instantaneous",
      "endsWhen": "Command ends it, or when the rope is physically destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the materials and craftsmanship involved in creating a magic rope capable of supporting such heavy loads.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T06:40:18.893198+00:00",
    "aiReviewedAt": "2026-07-22T06:40:18.893198+00:00",
    "aiReviewVersion": 1
  },
  "high_elves_elven_whisk": {
    "id": "high_elves_elven_whisk",
    "name": "High Elves Elven Whisk",
    "description": "The High Elves Elven Whisk is an elegant culinary tool crafted with precision by the enigmatic High Elves. Its slender, intricately woven handles are made from a rare wood found only in the shadowed groves of the Elderglade. As you wield it, its bristles move so swiftly they create a delicate breeze, cooling hot soups and stews without effort. Whisking with this tool is an art; those who master its elegance gain a subtle edge, but those who whisk untidily find themselves at a disadvantage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥄",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Elegant Whisking",
      "Cooling Breeze"
    ],
    "vendor": "high_elves",
    "shippedBy": "Graceful Stride",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elegant Whisking",
        "rules": "When you use the Elven Whisk to make an ability check involving cooking, and your action is elegant, you gain advantage on that check. If your action is untidy, you have disadvantage."
      },
      {
        "title": "Cooling Breeze",
        "rules": "As a bonus action, you can activate the whisk to create a cooling breeze around you for 1 minute. This effect reduces the temperature of any hot liquid within 5 feet by one degree per round until expended or interrupted."
      }
    ],
    "levelRequirementReason": "This simple yet elegant tool is accessible to all, requiring no particular level to wield.",
    "vendorReason": "The High Elves are renowned for their craftsmanship and knowledge of culinary magic, making them the perfect purveyors of this Elven Whisk.",
    "shippingDetail": "Shipped with special care using the Graceful Stride courier service, ensuring your whisk arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action or reaction (for elegant whisking)",
      "duration": "Instantaneous for elegant whisking; 1 minute for cooling breeze",
      "endsWhen": "Exhausted after use or interrupted by an attack",
      "charges": "Unlimited, as long as you have the tool"
    },
    "priceReason": "The Elven Whisk is crafted with rare materials and intricate design, justifying its price in experienced points.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T06:39:43.394342+00:00",
    "aiReviewedAt": "2026-07-22T06:39:43.394342+00:00",
    "aiReviewVersion": 1
  },
  "high_elves_elvish_language_tutoring": {
    "id": "high_elves_elvish_language_tutoring",
    "name": "High Elves Elvish Language Tutoring",
    "description": "The High Elves Elvish Language Tutoring is a comprehensive, seven-day course that immerses you in the ancient tongue of the elves. Upon completion, you can speak Elvish fluently, though with a charmingly off-key accent that might earn you some giggles from your elven friends. More importantly, this tutoring grants you an advantage on Insight checks when interpreting their subtle body language and hidden meanings. This course is crafted by the High Elves themselves, ensuring it’s both effective and imbued with the lore of their ancient civilization.",
    "category": "services",
    "price": 1000,
    "icon": "📚",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Fluent Elvish Speech",
      "Advantage on Insight Checks"
    ],
    "vendor": "high_elves",
    "shippedBy": "Linguistic Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fluent Elvish Speech",
        "rules": "You gain the ability to speak and understand Elvish for a duration of seven days. This effect is passive and does not require action or concentration."
      },
      {
        "title": "Advantage on Insight Checks",
        "rules": "For seven days, you have advantage on any Insight checks made to interpret elven body language, emotions, or hidden meanings. This effect ends once the duration expires."
      }
    ],
    "levelRequirementReason": "This course is accessible to all adventurers who wish to learn a new language.",
    "vendorReason": "The High Elves are renowned for their mastery of elven languages and lore, making them the ideal instructors for this tutoring service.",
    "shippingDetail": "Delivered by the Linguistic Courier within three days of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Seven days from completion of the course.",
      "endsWhen": "The seven-day duration ends, or if you forget everything you learned.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects the comprehensive nature of the tutoring, including expert guidance and immersive materials.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T06:40:11.046553+00:00",
    "aiReviewedAt": "2026-07-22T06:40:11.046553+00:00",
    "aiReviewVersion": 1
  },
  "high_elves_recipe_lembas_crackers": {
    "id": "high_elves_recipe_lembas_crackers",
    "name": "Recipe: High Elves Lembas Crackers",
    "description": "These crisp, cracker-like wafers are a cheap imitation of elven waybread, crafted by the High Elves Snack Factory. They offer travelers sustenance and endurance, though their flavor is decidedly cardboardy. When consumed, they grant advantage on saves against exhaustion from travel for up to a day, making them a useful emergency rations. However, elves can smell the forgery; any character with an Elf in their party receives disadvantage on Charisma checks.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Traveler’s Advantage",
      "Elven Disadvantage"
    ],
    "vendor": "high_elves",
    "shippedBy": "Linguistic Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Traveler’s Advantage",
        "rules": "When consumed, the cracker provides advantage on saving throws against exhaustion from travel for up to a day. This effect lasts until used or until the traveler rests for at least one hour."
      },
      {
        "title": "Elven Disadvantage",
        "rules": "If any Elf is present during the consumption of these crackers, the character making Charisma checks receives disadvantage on those checks due to the forgery being detected."
      }
    ],
    "levelRequirementReason": "This cracker is simple and cheap enough for even a beginner adventurer to afford.",
    "vendorReason": "The High Elves Snack Factory is known for its diverse range of products, including this quick but not exquisite food item.",
    "shippingDetail": "Delivered swiftly and with a touch of linguistic flair.",
    "usage": {
      "activation": "Eaten as a free action",
      "duration": "Up to a day, depending on the traveler’s exhaustion level",
      "endsWhen": "Used up or until the traveler rests for at least one hour",
      "charges": "Unlimited"
    },
    "priceReason": "While not high quality, these crackers provide useful but temporary benefits and are thus priced reasonably.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T06:39:50.436223+00:00",
    "aiReviewedAt": "2026-07-22T06:39:50.436223+00:00",
    "aiReviewVersion": 1
  },
  "high_elves_serenade_lute_premium": {
    "id": "high_elves_serenade_lute_premium",
    "name": "High Elves Serenade Lute (Premium)",
    "description": "The High Elves Serenade Lute (Premium) is a delicate instrument crafted by the Elven Luthiers of Elenion, renowned for their precision and craftsmanship. The lute's strings are made from a rare material that resonates with elven grace, ensuring every note sung or strummed flows gracefully. It grants you advantage on Performance checks when playing melodies that evoke tranquility, and once per day, it can charm one creature within 30 feet for 1 minute (DC 15 Wisdom saving throw). A misstep in harmony causes the strings to break, a reminder of the lute's picky nature.",
    "price": 1000,
    "icon": "🎸",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Charm One Creature",
      "Advantage on Performance Checks"
    ],
    "vendor": "high_elves_conservatory",
    "shippedBy": "Leafboat Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Calm Charm",
        "rules": "Once per day, you can play a calming melody to charm one willing creature within 30 feet. The target must make a Wisdom saving throw (DC 15) or be charmed for 1 minute. The effect ends early if the target takes any hostile action or casts a spell of 2nd level or higher."
      },
      {
        "title": "Performance Advantage",
        "rules": "When you play melodies that evoke tranquility, such as lullabies or nature songs, you gain advantage on Performance checks. This effect lasts for the duration of the performance."
      }
    ],
    "levelRequirementReason": "This lute is crafted with simplicity in mind, suitable for beginners and those seeking to master basic elven melodies.",
    "vendorReason": "The Conservatory of High Elves is the birthplace of this lute, ensuring it maintains its exquisite craftsmanship and sound quality.",
    "shippingDetail": "Delivered by Leafboat's fastest couriers with a 1-day expedited service.",
    "usage": {
      "activation": "As an action or bonus action to play a melody.",
      "duration": "Calm Charm lasts for 1 minute. Performance Advantage lasts until the end of your next turn.",
      "endsWhen": "The effect ends if you take hostile actions, cast spells of 2nd level or higher, or stop playing.",
      "charges": "Unlimited uses; it requires no charges."
    },
    "priceReason": "This lute's premium quality and craftsmanship justify its price, offering a balance between cost and the unique advantages it provides to players.",
    "priceOriginal": 22500,
    "priceReviewedAt": "2026-07-22T06:40:55.981533+00:00",
    "aiReviewedAt": "2026-07-22T06:40:55.981533+00:00",
    "aiReviewVersion": 1
  },
  "high_elves_sylvan_silk_gown": {
    "id": "high_elves_sylvan_silk_gown",
    "name": "High Elves Sylvan Silk Gown",
    "description": "The High Elves Sylvan Silk Gown, crafted by Elven Looms, is a whispering gown that flows like an unspoken secret through ancient forests. Its threads shimmer in the moonlight, and its subtle patterns seem to shift as you move, creating an illusion of natural harmony. The gown not only grants advantage on Charisma (Performance) checks within natural settings but also mends minor tears overnight, ensuring it remains a constant companion for long journeys.",
    "price": 1000,
    "icon": "👗",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Advantage on Performance checks in nature",
      "Minor tear repair at dawn"
    ],
    "vendor": "high_elves_enclave",
    "shippedBy": "Leaf-Embroidered Fold",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Performance Advantage",
        "rules": "When wearing the gown within natural settings, you gain advantage on Charisma (Performance) checks. This effect is passive and does not require any action."
      },
      {
        "title": "Tear Repair",
        "rules": "At dawn, any minor tears in the gown are repaired, restoring it to perfect condition. This effect occurs automatically without needing an action or other requirement."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners who wish to enhance their performances and travel with a companion that mends itself.",
    "vendorReason": "The High Elves Enclave, known for their craftsmanship, offers this gown as a symbol of their expertise in weaving harmony with nature.",
    "shippingDetail": "Ships via the Leaf-Embroidered Fold, ensuring it arrives with a gentle touch, free from snags and tears during transport.",
    "usage": {
      "activation": "Passive effect; no activation required for either ability.",
      "duration": "Permanent until repaired or destroyed.",
      "endsWhen": "Destroyed if exposed to fire or extreme heat.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the gown's rarity, craftsmanship, and its dual utility for adventurers in natural settings.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-22T06:40:27.971580+00:00",
    "aiReviewedAt": "2026-07-22T06:40:27.971580+00:00",
    "aiReviewVersion": 1
  },
  "hiker_backpack": {
    "id": "hiker_backpack",
    "name": "Koopa Troopa Backpack",
    "description": "The Koopa Troopa Backpack is a stylish and practical accessory, crafted from durable leather that mimics the hard shell of its namesake. It features a unique design inspired by the iconic red and yellow hues of its origin, with a handy strap that doubles as a utility belt. This backpack can carry up to 50 pounds of gear and supplies without adding any encumbrance penalty, making it ideal for adventurers and travelers alike.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎒",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Carries 50lbs",
      "Stylish Appearance"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lightweight Carry",
        "rules": "This backpack can carry up to 50 pounds of gear without increasing the wearer's encumbrance. It remains light and manageable, even when fully loaded."
      },
      {
        "title": "Stylish Appeal",
        "rules": "The Koopa Troopa Backpack grants a +1 bonus to Charisma (Performance) checks made in public or social settings due to its eye-catching design."
      }
    ],
    "levelRequirementReason": "This backpack is designed for beginners and travelers, requiring no specific level to use.",
    "vendorReason": "The Valley Trading Post specializes in practical gear for adventurers, making the Koopa Troopa Backpack a logical addition to their inventory.",
    "shippingDetail": "Delivered within three days of purchase with Standard Courier service.",
    "usage": {
      "activation": "Passive benefit; no activation required.",
      "duration": "Permanent until the backpack is destroyed or lost.",
      "endsWhen": "Destroyed or lost.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Koopa Troopa Backpack offers a significant convenience at an affordable price, balancing its unique features with practical utility.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T06:40:35.444643+00:00",
    "aiReviewedAt": "2026-07-22T06:40:35.444643+00:00",
    "aiReviewVersion": 1
  },
  "hobgoblin_hobgoblin_gruel_recipe": {
    "id": "hobgoblin_hobgoblin_gruel_recipe",
    "name": "Recipe: Hobgoblin Hob Gruel",
    "description": "This parchment, worn at the edges by countless hands, contains the secret recipe for Hobgoblin hob gruel: a dish of oats, water, and salt, boiled to a soothing mush. It is said that the first batch was crafted in the forge kitchens of the Iron Legion's encampments, where soldiers honed their skills. Consuming this gruel grants you sustenance and a +1 bonus to Intimidation checks for 1 hour, but it also leaves your mouth tasting like a disciplined army in formation.",
    "price": 1000,
    "icon": "🥣",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Intimidating Sustenance",
      "Forgeheart Core"
    ],
    "vendor": "hobgoblin_legion",
    "shippedBy": "Gruel Grain Guide",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Intimidating Sustenance",
        "rules": "Consume the gruel to gain +1 to all Intimidation checks for 1 hour. The effect ends immediately if you consume any food other than hob gruel."
      },
      {
        "title": "Forgeheart Core",
        "rules": "After consuming this gruel, you take a -2 penalty on saving throws until your next long rest. This penalty represents the dish's fiery discipline."
      }
    ],
    "levelRequirementReason": "This simple yet effective recipe is accessible to all recruits regardless of experience.",
    "vendorReason": "The legion's cooks are known for their innovative and practical recipes that keep the troops strong and disciplined.",
    "shippingDetail": "Delivered by trusted couriers who ensure each batch is fresh from the kitchen of the Iron Legion.",
    "usage": {
      "activation": "Eating one serving of hob gruel",
      "duration": "1 hour or until consumed again",
      "endsWhen": "You consume any other food besides hob gruel, or at the start of your next long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The recipe's value lies in its unique effects and the reputation of the Hobgoblin Legion.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T06:40:44.995791+00:00",
    "aiReviewedAt": "2026-07-22T06:40:44.995791+00:00",
    "aiReviewVersion": 1
  },
  "hobgoblin_legion_mass_cook_pot": {
    "id": "hobgoblin_legion_mass_cook_pot",
    "name": "Hobgoblin Legion Mass Cook Pot",
    "description": "The Hobgoblin Legion Mass Cook Pot is a colossal, blackened iron cauldron forged by the brutal hands of the hobgoblin forges. Its walls are scarred from countless battles, and its base is scorched from the fires of many camps. This behemoth can feed an entire legion without a second thought, yet it requires at least two cooks to manage its contents properly. It's too unwieldy for solo use but perfect for groups who need to sustain a horde.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥣",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Cooks for 10+; +2 to group efficiency",
      "Durable for camps"
    ],
    "vendor": "hobgoblin_legion",
    "shippedBy": "Horde Heat Haul",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mass Grub Cookery",
        "rules": "This cook pot can feed an entire legion with its contents. When two cooks are used, the meal is prepared in 10 minutes and provides a +2 bonus to group efficiency until the next long rest."
      },
      {
        "title": "Camp Durable",
        "rules": "The cook pot has 5 hit points; it regains 1 hp after each short or long rest. It can be used up to twice per day before requiring a full-day campfire repair."
      }
    ],
    "levelRequirementReason": "This cook pot is designed for large groups, and even the smallest hobgoblin warriors are capable of using it.",
    "vendorReason": "The Hobgoblin Legion is known for their efficient supply lines, which include this essential cooking tool for their vast legions.",
    "shippingDetail": "Ships via the Horde Heat Haul courier network. Delivery can take up to a week depending on location.",
    "usage": {
      "activation": "Two cooks activate it by starting the fire and stirring the contents.",
      "duration": "Instantaneous meal preparation; effects last until consumed or until the next long rest.",
      "endsWhen": "The cook pot is destroyed if not repaired after two days of inactivity.",
      "charges": "Unlimited uses per day, but requires repair between meals."
    },
    "priceReason": "While durable, this cook pot still costs a significant amount due to its size and the quality of hobgoblin craftsmanship required for such a tool.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T06:40:54.724027+00:00",
    "aiReviewedAt": "2026-07-22T06:40:54.724027+00:00",
    "aiReviewVersion": 1
  },
  "hobgoblin_legion_uniform": {
    "id": "hobgoblin_legion_uniform",
    "name": "Hobgoblin Legion Uniform",
    "description": "Disciplined uniform for goblin ranks.",
    "category": "equipment",
    "price": 12500,
    "icon": "👔",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "+1 to attack rolls in formation",
      "Uniform boosts morale (advantage vs. fear)",
      "Itchy wool",
      "Made by: Legion Tailors"
    ],
    "vendor": "hobgoblin_legion_camp",
    "shippedBy": "Marching Fold",
    "levelRequirement": 5
  },
  "hobgoblin_military_discipline_subscription": {
    "id": "hobgoblin_military_discipline_subscription",
    "name": "Hobgoblin Military Discipline Subscription",
    "description": "For a week, you're under the iron-fisted command of a hobgoblin sergeant fresh from the Military Academy. This 'subscription' grants you daily visits where you must adhere to a strict routine: perform physical drills and maintain perfect posture at all times. While this ensures peak combat readiness, it comes with a price—your constant disadvantage on Stealth checks as your movements are forever scrutinized. Should you fail to meet expectations even once, the sergeant's sharp tongue will ensure swift demotion (cosmetic rank only), but don't worry; the effects end after seven days of relentless discipline.",
    "category": "premium",
    "price": 1000,
    "icon": "📋",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Daily Discipline",
      "Stealth Penalty"
    ],
    "vendor": "hobgoblin",
    "shippedBy": "Drill March",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Daily Discipline",
        "rules": "At the start of each day, you must undergo a session of military drills and posture checks. This provides advantage on saving throws against fear effects for that day only."
      },
      {
        "title": "Stealth Penalty",
        "rules": "You have disadvantage on all Stealth checks while under the sergeant's watch due to constant observation and critique."
      }
    ],
    "levelRequirementReason": "The discipline provided by the subscription is intense, even for seasoned veterans; thus, it is recommended only for those of at least first level.",
    "vendorReason": "Only a hobgoblin vendor can provide such rigorous and authentic military training.",
    "shippingDetail": "The 'subscription' is delivered by a strict convoy of hobgoblins, ensuring you receive the discipline immediately upon payment.",
    "usage": {
      "activation": "Automatic daily for one week",
      "duration": "One week (7 days)",
      "endsWhen": "After seven days or if rank demotion occurs due to non-compliance",
      "charges": "Unlimited, as long as you remain in good standing"
    },
    "priceReason": "The subscription provides a week of rigorous training and discipline, making it a rare and valuable resource for those seeking to improve their combat readiness.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T06:41:25.917574+00:00",
    "aiReviewedAt": "2026-07-22T06:41:25.917574+00:00",
    "aiReviewVersion": 1
  },
  "hobgoblin_war_drum_premium": {
    "id": "hobgoblin_war_drum_premium",
    "name": "Hobgoblin War Drum (Premium)",
    "description": "The Hobgoblin War Drum (Premium) is a massive, intricately carved war drum made from the polished hide of a dire boar. Its beats resonate through the battlefield, rallying allies with each thunderous pulse and sending foes reeling in fear. The drum's vibrant red and black stripes are said to have been painted by Hobgoblin Bards during their fiercest battles. This premium version amplifies these effects, delivering an extra boost of courage and a deeper sense of dread.",
    "price": 1000,
    "icon": "🥁",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Rallying Beats",
      "Foe Intimidation"
    ],
    "vendor": "hobgoblin_legion",
    "shippedBy": "Hobgoblin Bards' Courier Service",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Rallying Beats",
        "rules": "When the player strikes the drum, all allies within 30 feet gain advantage on attack rolls until the end of their next turn. This effect lasts for a total of 1 minute and can be used once per long rest."
      },
      {
        "title": "Foe Intimidation",
        "rules": "Any creature within 50 feet that hears the drum must succeed on a DC 12 Wisdom saving throw or become frightened until the start of its next turn. A creature that succeeds on this save is instead shaken for the same duration."
      }
    ],
    "levelRequirementReason": "This premium war drum requires at least 6th level to wield effectively, as it amplifies battlefield sounds and commands.",
    "vendorReason": "The Hobgoblin Legion is known for its expertise in crafting and using war drums on the battlefield.",
    "shippingDetail": "Delivered by a trusted courier, usually arriving within two days of purchase.",
    "usage": {
      "activation": "Standard action to strike the drum once per turn.",
      "duration": "Until the start of your next turn or when you take an action that requires both hands.",
      "endsWhen": "The effect ends if you are incapacitated, or if you use another action to strike the drum.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This premium war drum is priced at 1000 XP due to its superior craftsmanship and enhanced effects that significantly boost battlefield performance.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T06:41:23.530653+00:00",
    "aiReviewedAt": "2026-07-22T06:41:23.530653+00:00",
    "aiReviewVersion": 1
  },
  "honey_syrup": {
    "id": "honey_syrup",
    "name": "Honey Syrup",
    "description": "Honey Syrup, crafted from the nectar of Gusty Gardens' enchanted bees, is a thick, golden elixir that sparkles with arcane energy. The bees, though now content, once labored under mysterious conditions to produce this syrup. It restores one expended spell slot (up to 2nd level), leaving you feeling invigorated and ready for the next challenge. Each sip is a taste of magic, as if the very essence of nature itself has been captured in a bottle.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍯",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Restore one expended spell slot",
      "Gain advantage on concentration checks"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Parakarry Postal Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spell Slot Restoration",
        "rules": "Consume Honey Syrup as an action to restore one expended spell slot of up to 2nd level. This effect is instantaneous and does not require a saving throw."
      },
      {
        "title": "Advantage on Concentration Checks",
        "rules": "After consuming the syrup, you gain advantage on concentration checks for the next hour. If you fail a concentration check, this effect ends immediately."
      }
    ],
    "levelRequirementReason": "It is intended to be a common consumable that even low-level adventurers can afford and benefit from.",
    "vendorReason": "The Toad Town Market, known for its unique wares, offers this nectar as a treat for those seeking an edge in their magical endeavors.",
    "shippingDetail": "Ships via the Parakarry Postal Service, delivered within one week of purchase.",
    "usage": {
      "activation": "Consume Honey Syrup as an action.",
      "duration": "Instantaneous and lasts for the next hour after gaining advantage on concentration checks.",
      "endsWhen": "If you fail a concentration check or if the hour expires.",
      "charges": "Unlimited; can be consumed repeatedly."
    },
    "priceReason": "The price reflects its magical properties and the unique conditions under which it is produced, making it accessible to low-level adventurers.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T19:43:48.970247+00:00",
    "aiReviewedAt": "2026-07-22T19:43:48.970247+00:00",
    "aiReviewVersion": 1
  },
  "honeyed_lockpick": {
    "id": "honeyed_lockpick",
    "name": "Honeyed Lockpick",
    "description": "The Honeyed Lockpick is a slender steel pick dipped in fragrant honey. Its sticky syrup not only tempers the resistance of locks but also lures insects to it, creating a diversion for the thief. This lockpicking tool is crafted by Rogueport’s Black Market, known for their subtle and effective tools. The honey acts as both an adhesive and a sensory trap, enhancing its user's precision in opening locks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔐",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "+2 Thieves' Tools check",
      "Once per day: open a non-magical lock without making an ability check"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Swift Messenger Falcons",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Precision",
        "rules": "When using the Honeyed Lockpick, you gain +2 to any Thieves' Tools checks. This effect is always active as long as you are holding and using it."
      },
      {
        "title": "Lockpick's Grace",
        "rules": "Once per day, you can use the Honeyed Lockpick to open a non-magical lock without making an ability check. The lock must be within your reach. This effect is expended after one use until the next long rest."
      }
    ],
    "levelRequirementReason": "This item requires no specific level, as it provides bonuses to thieves’ tools checks and a daily lockpicking ability.",
    "vendorReason": "The Rogueport Black Market is renowned for its exceptional lockpicking tools that enhance the skills of their customers.",
    "shippingDetail": "Delivered swiftly by messenger falcons, this item arrives within a day of purchase.",
    "usage": {
      "activation": "Passive effect; active when holding and using it for lockpicking. Daily ability can be used once per long rest.",
      "duration": "Permanent +2 bonus to Thieves' Tools checks",
      "endsWhen": "The daily use is expended or after a long rest",
      "charges": "Unlimited uses, expends one charge each time the daily ability is used"
    },
    "priceReason": "This Honeyed Lockpick provides significant bonuses and unique abilities to lockpicking, making it highly valuable for thieves.",
    "priceOriginal": 2400,
    "priceReviewedAt": "2026-07-22T06:41:38.578103+00:00",
    "aiReviewedAt": "2026-07-22T06:41:38.578103+00:00",
    "aiReviewVersion": 1
  },
  "hot_shroom": {
    "id": "hot_shroom",
    "name": "Hot Shroom",
    "description": "The Hot Shroom is a fiery mushroom, its cap a vibrant red and gills a sharp orange. Native to the volcanic slopes of Mount Pyrothorn, this spice packs a punch that leaves you reeling with energy for an hour. Legend says it was first discovered by adventurers who dared to explore the fiery mountainside. When consumed, it grants 10 coins and imbues you with a state of Enraged, boosting your damage output but lowering your defenses.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌶️",
    "stock": 100,
    "rarity": "uncommon",
    "effects": [
      "Gain 10 Coins",
      "Enraged (1 min)"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Volcanic Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gain 10 Coins",
        "rules": "You receive a small pouch of coins upon consuming the Hot Shroom. No further action is required."
      },
      {
        "title": "Enraged (1 min)",
        "rules": "For one minute after consumption, you gain +2 to attack rolls and damage dealt, but -2 to AC. This effect ends when time runs out or if you take any non-magical, non-verbal action requiring no dice roll."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners as it provides immediate utility without imposing a significant risk.",
    "vendorReason": "The Gilded Gryphon, known for its adventurous clientele, stocks the Hot Shroom to cater to brave souls venturing into fiery lands.",
    "shippingDetail": "Shipped via a courier who can withstand volcanic ash; delivery is swift but dusty.",
    "usage": {
      "activation": "Eaten as a consumable item.",
      "duration": "1 minute per use.",
      "endsWhen": "Time expires or you take an action not requiring dice rolls.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Hot Shroom is priced at 1000 XP, reflecting its unique properties and the risk involved in acquiring it from Mount Pyrothorn's slopes.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T06:41:52.514193+00:00",
    "aiReviewedAt": "2026-07-22T06:41:52.514193+00:00",
    "aiReviewVersion": 1
  },
  "hp_plus_badge": {
    "id": "hp_plus_badge",
    "name": "HP Plus Badge",
    "description": "The HP Plus Badge is a heart-shaped emblem of burnished bronze, imbued with the essence of a resilient warrior. Crafted by the alchemists of Toad Town Market, this badge not only enhances vitality but also serves as a symbol of enduring strength. When worn, it visibly raises your maximum hit points by +5, and its attunement ensures you never lose more than half your hit points in a single day.",
    "category": "equipment",
    "price": 1000,
    "icon": "❤️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+5 Maximum HP",
      "Attunement Required"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Medical Supply Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Vitality",
        "rules": "When equipped, this badge grants the wearer +5 maximum hit points. It remains active as long as it is worn and can only be used once per day."
      },
      {
        "title": "Resilience to Wounds",
        "rules": "While wearing this badge, you cannot lose more than half your current hit points in a single day due to damage. This effect does not stack with other similar effects."
      }
    ],
    "levelRequirementReason": "The HP Plus Badge is designed for adventurers at the beginning of their journey who need a simple boost to their resilience.",
    "vendorReason": "Toad Town Market specializes in items that enhance the vitality and well-being of its patrons, making this badge a perfect fit.",
    "shippingDetail": "Delivered within three days with priority courier services.",
    "usage": {
      "activation": "Passive effect once attuned.",
      "duration": "Permanent while worn and attuned.",
      "endsWhen": "Removed from wear or attunement lost.",
      "charges": "Unlimited"
    },
    "priceReason": "The HP Plus Badge offers a significant boost to vitality at an accessible price, making it a great starting item for adventurers.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-22T06:41:51.457358+00:00",
    "aiReviewedAt": "2026-07-22T06:41:51.457358+00:00",
    "aiReviewVersion": 1
  },
  "hustle_drink": {
    "id": "hustle_drink",
    "name": "Hustle Drink",
    "description": "The Hustle Drink is a neon-green, foamy concoction that makes your muscles tremble and pulse with energy. It's said to be brewed in the shadowy labs of Wario Direct, where it's mixed with secret ingredients from the Mushroom Kingdom. After consuming this drink, you gain an extra action for the turn, giving you just enough time to sprint past a foe or cast a spell before crashing into exhaustion.",
    "category": "consumables",
    "price": 1000,
    "icon": "🥤",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Extra Action",
      "Crash"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Express Couriers of Toad Town",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Extra Action",
        "rules": "You can take one additional action this turn. This effect is limited to once per long rest."
      },
      {
        "title": "Crash",
        "rules": "After using the Extra Action, you are incapacitated for 1 minute. During this time, you cannot take actions or reactions and have disadvantage on all attacks and ability checks. This effect ends if you complete a short rest."
      }
    ],
    "levelRequirementReason": "The Hustle Drink provides an immediate boost that can be useful even for lower-level adventurers.",
    "vendorReason": "Wario Direct is known for its questionable but always effective energy drinks, which are popular among the kingdom's most active fighters.",
    "shippingDetail": "Delivered by Express Couriers of Toad Town, ensuring you receive your energy boost quickly before your next big battle.",
    "usage": {
      "activation": "飲用",
      "duration": "即時效果，但後續效果持續1分鐘",
      "endsWhen": "完成短暫休息或因過度疲憊而結束",
      "charges": "無限使用"
    },
    "priceReason": "考慮到其提供的一次性強力補充和快速恢復特性，Hustle Drink 的價格被設定為 1000 XP。",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T06:42:25.136343+00:00",
    "aiReviewedAt": "2026-07-22T06:42:25.136343+00:00",
    "aiReviewVersion": 1
  },
  "hyperdrive_engine_upgrade": {
    "id": "hyperdrive_engine_upgrade",
    "name": "Hyperdrive Engine Upgrade (Ship)",
    "description": "The Hyperdrive Engine Upgrade is a gleaming, warp-forged core that accelerates your vessel to unprecedented velocities, capable of breaching the stars in mere hours instead of days. Crafted by Warp Dynamics using ancient cosmic materials, this upgrade ensures not only speed but also the reliability needed for interstellar travel. Once installed, the engine's enhanced fields reduce fuel consumption and increase efficiency, making it both a marvel of engineering and an economic boon.",
    "price": 480000,
    "icon": "🚀",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Faster-than-light Travel",
      "Fuel Efficiency"
    ],
    "vendor": "shipyard",
    "shippedBy": "Tow Drone",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Faster-than-Light Travel",
        "rules": "Activates on installation. The ship's speed is increased by 50% for the duration of a short rest or until reinstalled. This effect does not stack with other similar abilities."
      },
      {
        "title": "Fuel Efficiency",
        "rules": "Reduces fuel consumption by 30% while active, requiring only half the usual amount to maintain hyperdrive speeds. The ship must complete at least one short rest for this benefit to be fully realized."
      }
    ],
    "levelRequirementReason": "The Hyperdrive Engine Upgrade requires a high level of skill and knowledge in starship engineering, suitable only for experienced captains.",
    "vendorReason": "The shipyard is the foremost authority on advanced starship technology, including the installation of upgrades like this one.",
    "shippingDetail": "Delivered directly by a Tow Drone, ensuring safe and swift transport to your vessel's location.",
    "usage": {
      "activation": "Instantaneous upon installation; activated automatically during hyperdrive travel.",
      "duration": "Active until reinstalled or destroyed.",
      "endsWhen": "Destroyed if the ship is critically damaged.",
      "charges": "Unlimited, but requires a short rest to achieve full efficiency."
    },
    "priceReason": "The Hyperdrive Engine Upgrade's legendary rarity and advanced technology justify its high price, representing years of research and development.",
    "priceOriginal": 480000,
    "priceReviewedAt": "2026-07-22T06:42:21.425823+00:00",
    "aiReviewedAt": "2026-07-22T06:42:21.425823+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_arrow": {
    "id": "hyrule_ancient_arrow",
    "name": "Ancient Arrow",
    "description": "The Ancient Arrow, crafted by Starlight from the lost technology of the Sheikah, hums with the arcane energy of the Triforce’s hidden chambers as it flies. When fired near a sacred beast, its damage increases by a lethal 1d4 and it whispers secrets of forgotten temples to those attuned to the Feywild's whispering winds. Only spellcasters attuned to these mystical resonances may wield it without risk, or else it fails to fire.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Arcane Damage",
      "Sacred Beast Boost"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Arcane Damage",
        "rules": "When fired, this arrow deals an additional 2d6 arcane damage. If used near a sacred beast, the bonus damage increases by 1d4."
      },
      {
        "title": "Sacred Beast Boost",
        "rules": "If the arrow strikes a sacred beast within 30 feet, it deals an extra 1d4 damage to the target. This effect can only occur once per attack."
      }
    ],
    "levelRequirementReason": "This item requires attunement by spellcasters and is crafted with advanced Sheikah technology.",
    "vendorReason": "Hyrulean vendors, like Starlight, have access to ancient artifacts and technologies from the Sheikah civilization.",
    "shippingDetail": "Ships via Pipe Express with a 2-day delivery time.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous",
      "endsWhen": "Upon successful hit or when the arrow is no longer in contact with its target",
      "charges": "Unlimited, requires attunement"
    },
    "priceReason": "The item's rarity and unique crafting method justify this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:42:34.930187+00:00",
    "aiReviewedAt": "2026-07-22T06:42:34.930187+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_echo_shard": {
    "id": "hyrule_ancient_echo_shard",
    "name": "Ancient Echo Shard",
    "description": "The Ancient Echo Shard is a fractured relic from the Temple of the Forgotten, its surface etched with runes that glow faintly in response to nearby memories. When wielded by one attuned to the past, it amplifies the user’s insight and intuition, granting temporary vision of ancient battlefields and revealing hidden paths and enemy weaknesses. Its resonant core hums with the echoes of forgotten strategies, aiding the wielder in both combat and exploration.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Echoes of the Past",
      "Memory's Edge"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Echoes of the Past",
        "rules": "At the start of your turn, you gain temporary vision of ancient battlefields within a 30-foot radius for 1 minute. This effect allows you to see hidden paths and enemy weaknesses, granting advantage on Perception checks to detect traps or secrets in this area."
      },
      {
        "title": "Memory's Edge",
        "rules": "When you deal damage to an enemy with the memory-based weakness trait, you deal an additional 1d6 force damage. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The shard requires a user who is attuned to ancient knowledge and strategy.",
    "vendorReason": "As the original source of such relics, Hyrule holds exclusive stock of these powerful artifacts.",
    "shippingDetail": "The shards are delicate and must be shipped via the Void Drifter Relay to ensure safe delivery.",
    "usage": {
      "activation": "Passive effect when attuned.",
      "duration": "1 minute, resets at the start of your next turn.",
      "endsWhen": "You lose concentration or upon the duration ending.",
      "charges": "Unlimited"
    },
    "priceReason": "The shard’s rarity and unique effects justify its price in experienced player characters' hands.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:42:18.130295+00:00",
    "aiReviewedAt": "2026-07-22T06:42:18.130295+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_forged": {
    "id": "hyrule_ancient_forged",
    "name": "Forged in the Heart of the Temple",
    "description": "Forged in the Heart of the Temple is a relic carved from the very stone that once cradled the Triforce’s essence within the Temple of the Three Stars. This ancient artifact channels raw power through your strikes, amplifying your combat prowess and restoring your vitality during battle. Each blow you deal with this weapon triggers a surge of energy, bolstering your strength for fleeting moments and healing wounds inflicted upon foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Bolstering Strike",
      "Divine Healing"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Bolstering Strike",
        "rules": "When you hit a creature with this weapon, you gain temporary hit points equal to half your level (rounded down) plus your Strength modifier. This effect lasts for 5 seconds after each strike and can be triggered once per short or long rest."
      },
      {
        "title": "Divine Healing",
        "rules": "Upon landing a critical hit with this weapon, you restore 20% of your maximum Hit Points. This effect is limited to one use per combat encounter."
      }
    ],
    "levelRequirementReason": "The relic's ancient power demands a proficient warrior capable of wielding its might.",
    "vendorReason": "Hyrule, guardian of ancient artifacts and relics, ensures only the worthy possess this sacred weapon.",
    "shippingDetail": "Delivered swiftly by Lakitu's trusted drones, ensuring your relic arrives in perfect condition.",
    "usage": {
      "activation": "Instantaneous upon a successful hit with the weapon.",
      "duration": "5 seconds after each strike; limited to one use per short or long rest.",
      "endsWhen": "The effect ends when you finish a short or long rest, or if you are incapacitated.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP to reflect the item's divine power and rarity.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:42:58.235576+00:00",
    "aiReviewedAt": "2026-07-22T06:42:58.235576+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_heart": {
    "id": "hyrule_ancient_heart",
    "name": "Heart of the Forgotten Temple",
    "description": "The Heart of the Forgotten Temple, a glowing emerald core embedded in an ancient pedestal, channels the very essence of time itself. When invoked, it summons a spectral guardian that stands vigilant for 30 seconds, reducing incoming damage by 30% and reflecting any attack made against the wielder back at the attacker. This relic is said to have been crafted from the heartwood of the Sacred Atrium tree, its power preserved through countless ages.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕯",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Summons spectral guardian",
      "Reduces incoming damage"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Spectral Guardian",
        "rules": "When activated as a bonus action, the Heart of the Forgotten Temple summons a spectral guardian that provides a +30 bonus to AC and reduces any damage taken by 30% for 30 seconds. The guardian can intercept attacks made against the wielder, reflecting them back at the attacker."
      },
      {
        "title": "Damage Reduction",
        "rules": "While the spectral guardian is active, all damage taken by the wielder is reduced by 30%. This effect does not stack with other forms of damage reduction."
      }
    ],
    "levelRequirementReason": "The Heart of the Forgotten Temple requires a level 6 character to invoke its power due to the complexity and energy required to summon such an ancient spirit.",
    "vendorReason": "Hyrule is renowned for its connection to ancient relics, making it the most appropriate vendor for this powerful item.",
    "shippingDetail": "The Heart of the Forgotten Temple must be carefully couriered by the Rakasha Spirit Walk to ensure the relic's essence remains intact during transport.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "30 seconds",
      "endsWhen": "The guardian dissipates after 30 seconds, or if the wielder is no longer within a 10-foot radius of the Heart when it is activated.",
      "charges": "One use per battle"
    },
    "priceReason": "The Heart of the Forgotten Temple's price reflects its rarity and the ancient magic required to craft such an item, balancing its powerful effects with a fair market value.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T06:43:16.446584+00:00",
    "aiReviewedAt": "2026-07-22T06:43:16.446584+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_key": {
    "id": "hyrule_ancient_key",
    "name": "Temple of the Forgotten Key",
    "description": "The Temple of the Forgotten Key, crafted from the molten core of the ancient temple beneath the clouds, is a relic that unlocks hidden paths and reawakens dormant guardians. Each use reveals a new chamber filled with rare treasures or forgotten artifacts, enhancing your journey through the temple's labyrinthine corridors. The key's glow pulses faintly in the darkness, hinting at its untapped power to reveal secrets long buried beneath the earth.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗝",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Reveals hidden chambers and paths",
      "Triggers guardians for bonus loot"
    ],
    "vendor": "hyrule",
    "shippedBy": "Windflass Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Hidden Path Revelation",
        "rules": "When activated, this key reveals a previously unseen passage or chamber within an ancient temple. This effect has no save DC but requires the user to be in an area of the temple marked by arcane sigils. The key can only reveal one hidden path per day."
      },
      {
        "title": "Guardian Trigger",
        "rules": "Activating this key also triggers dormant guardians, which may provide additional rewards or challenges. The guardians are awakened for a duration equal to half the user's level (rounded up). A successful DC 15 Wisdom saving throw allows the user to avoid triggering the guardians."
      }
    ],
    "levelRequirementReason": "This key requires significant skill and understanding of ancient magic, suitable only for those who have reached at least third level.",
    "vendorReason": "Hyrule's expert blacksmiths are the only ones capable of crafting such a powerful relic from the molten core materials found beneath their kingdom.",
    "shippingDetail": "The key is shipped via Windflass Express, known for its swift and reliable service through Hyrule's treacherous landscapes.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the hidden path or guardians are fully revealed or engaged.",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "Crafted from rare and ancient materials, this key's balanced price reflects its rarity and utility in unlocking temple secrets.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T06:43:03.650822+00:00",
    "aiReviewedAt": "2026-07-22T06:43:03.650822+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_key_chain": {
    "id": "hyrule_ancient_key_chain",
    "name": "Ancient Key Chain",
    "description": "The Ancient Key Chain, forged from the sacred metal of the Temple of the First Light, hums with ancient power as it dangles from a leather loop. When activated, it emits a soft glow that illuminates forgotten hallways and whispers the names of long-lost temples. This relic not only grants access to sealed doors but also subtly enhances the wearer's agility, granting +5% movement speed while carrying it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔑",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Unlock Sealed Doors",
      "Temples Whispered"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock Sealed Doors",
        "rules": "The Ancient Key Chain grants a +10% chance to automatically unlock sealed doors. This effect is passive, and no activation is required."
      },
      {
        "title": "Temples Whispered",
        "rules": "Once per day, the key chain can be activated as an action to reveal three random locations of ancient temples on a map. The DC for any saving throw against this effect is 15."
      }
    ],
    "levelRequirementReason": "The Ancient Key Chain's inherent power requires only basic arcane knowledge, making it accessible to novice explorers.",
    "vendorReason": "Hyrule's ancient artifacts are well-known for their mystical properties and the Ancient Key Chain is no exception; Hyrule sells it as part of its extensive collection of relics.",
    "shippingDetail": "Delivery by Pipe Express ensures this delicate artifact arrives in pristine condition, protected from any potential damage during transit.",
    "usage": {
      "activation": "Activating the key chain is an action. It can be used once per day.",
      "duration": "Instantaneous effect; no duration.",
      "endsWhen": "The effect ends when the key chain is reactivated or at the start of your next turn if not used.",
      "charges": "1 charge, recharged daily."
    },
    "priceReason": "The Ancient Key Chain's price reflects its rare material and mystical abilities, providing a balanced challenge for adventurers to obtain.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T06:43:14.209606+00:00",
    "aiReviewedAt": "2026-07-22T06:43:14.209606+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_keyring": {
    "id": "hyrule_ancient_keyring",
    "name": "Ancient Keyring of the Three",
    "description": "The Ancient Keyring of the Three, a relic forged from the lost temple of time itself, is a delicate yet sturdy keychain adorned with three distinct keys. Each key holds a fragment of the Triforce's power, granting its possessor the ability to unlock ancient secrets and reveal hidden truths within. The keychain itself hums with the energy of the Triumphant Blade, offering temporary access to sealed chambers and revealing the presence of Triforce fragments in enemy inventory upon use.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔑",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Unlock Sealed Doors",
      "Reveal Hidden Secrets"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock Sealed Doors",
        "rules": "When activated as a bonus action, this keyring temporarily grants the user a +2 bonus to their Strength (Athletics) check to break open locks. This effect lasts for 1 minute and can be used once per short or long rest."
      },
      {
        "title": "Reveal Hidden Secrets",
        "rules": "Upon use of any Triforce ability, this keyring reveals the presence of a fragment of the Triforce within an enemy's inventory. This effect lasts until the end of your next turn and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The keyring is designed for travelers and adventurers of all levels, allowing them to unlock ancient secrets and reveal hidden truths.",
    "vendorReason": "Hyrule is the birthplace of many ancient relics and artifacts, making it fitting that they sell this powerful keychain.",
    "shippingDetail": "Ships via Pipe Express within a week; expedited shipping available for an additional 250 XP.",
    "usage": {
      "activation": "Bonus action to use the first effect, once per long rest. Reaction to use the second effect, once per long rest.",
      "duration": "1 minute and until the end of your next turn respectively",
      "endsWhen": "The effects expire upon the completion of their duration or after each use",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this keyring offers a potent yet manageable advantage for adventurers.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T06:43:41.321446+00:00",
    "aiReviewedAt": "2026-07-22T06:43:41.321446+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_lockpick": {
    "id": "hyrule_ancient_lockpick",
    "name": "Triforce Keyblade",
    "description": "The Triforce Keyblade, a gleaming blade forged from the final fragment of the legendary Triforce, glows with ancient power when wielded by one who holds the sacred relic. This key can unlock the most secure temple doors in a single stroke and deals an additional 50% damage to foes clad in enchanted armor. When paired with another Triforce item, its strikes deliver a devastating 20% extra damage, making it a treasure for any adventurer seeking to breach ancient defenses.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗡",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Unlocks temple doors instantly",
      "Increased damage against armored enemies"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlocking Doors",
        "rules": "When the Triforce Keyblade makes contact with a temple door, it automatically opens upon a successful melee attack. No save is required."
      },
      {
        "title": "Enhanced Damage Against Armor",
        "rules": "The keyblade deals an additional 50% damage to enemies wearing enchanted armor when used in combat. This effect lasts until the start of your next turn and can be activated once per long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners, allowing them to unlock ancient secrets without needing a high level.",
    "vendorReason": "Hyrule's official relics and treasures are sold at its flagship shop, ensuring authenticity and proper handling of such artifacts.",
    "shippingDetail": "The item is delivered by the spectral mail service, which ensures swift delivery but may require a special key to unlock upon arrival.",
    "usage": {
      "activation": "Melee attack",
      "duration": "Instantaneous",
      "endsWhen": "Start of your next turn or when used again in combat",
      "charges": "Unlimited"
    },
    "priceReason": "The item's price reflects its rarity and the significant magical power it contains, making it a valuable yet not overly expensive purchase for adventurers.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:43:31.824955+00:00",
    "aiReviewedAt": "2026-07-22T06:43:31.824955+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_mirage_sword": {
    "id": "hyrule_ancient_mirage_sword",
    "name": "Mirage Blade of the Silent Temple",
    "description": "The Mirage Blade of the Silent Temple is a sword forged from the fractured reflections of the Temple of the Forgotten King. Its blade glows faintly in dim light, casting eerie shadows that seem to dance with the whispers of forgotten battles. Each strike delivers chilling precision, silencing nearby enemies and leaving their shouts unheard for moments. The sword's reflection seems to follow you, offering a silent guide through the temple’s hallowed halls.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Silent Silence",
      "Shadow Strike"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Silent Silence",
        "rules": "When the Mirage Blade strikes an invisible or shadowed foe, it inflicts 20% bonus damage. Additionally, for the following 5 seconds, all nearby enemies within 30 feet have their evasion reduced by 30%. This effect does not require a saving throw and can occur once per short rest."
      },
      {
        "title": "Shadow Strike",
        "rules": "After delivering a successful hit with the sword, there is a 10% chance that the wielder will trigger a silent teleportation to a nearby temple entrance. The destination must be within 5 miles of the current location and cannot end in an area of hostile activity or danger."
      }
    ],
    "levelRequirementReason": "The sword requires at least 6th level due to its complex enchantment and the precision necessary for wielding it effectively.",
    "vendorReason": "Hyrule has long been a guardian of ancient artifacts, ensuring that such powerful relics are only handled by those capable of using them responsibly.",
    "shippingDetail": "The item is shipped via Lakitu Drones, known for their precision deliveries in even the most dangerous areas.",
    "usage": {
      "activation": "Instantaneous action when striking an enemy with the sword",
      "duration": "5 seconds after each successful hit",
      "endsWhen": "At the start of your next turn or if you miss a strike",
      "charges": "Unlimited, but only one effect can occur per strike"
    },
    "priceReason": "The sword’s price is adjusted to reflect its rare enchantment and the difficulty in crafting such an artifact.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T19:44:02.679929+00:00",
    "aiReviewedAt": "2026-07-22T19:44:02.679929+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_shield_bane": {
    "id": "hyrule_ancient_shield_bane",
    "name": "Ancient Shield of the Bane",
    "description": "The Ancient Shield of the Bane, forged in the cursed ruins of the Temple of the Forgotten King, channels dark magic to absorb and redirect incoming harm. Its surface is etched with ancient symbols that glow faintly under moonlight, and it whispers a chilling warning when danger approaches. When struck, enemies must roll a 20% chance or be momentarily disoriented, while the shield itself absorbs damage with relentless efficiency, reducing incoming hits by a quarter and granting immunity to critical hits for one turn.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs Damage",
      "Critical Hit Immunity"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Damage Absorption",
        "rules": "When the shield takes damage, it absorbs an additional 25% of that damage and redirects a portion to nearby enemies within 10 feet. The shield grants immunity to critical hits for one turn after absorbing damage."
      },
      {
        "title": "Disorienting Strike",
        "rules": "Enemies who strike the wearer with a melee attack must make a DC 15 Dexterity saving throw or be knocked prone and take an additional 2d6 force damage. This effect ends when the shield is no longer struck."
      }
    ],
    "levelRequirementReason": "The shield's dark magic requires a user who has mastered basic combat techniques.",
    "vendorReason": "Hyrule's ancient relics are known for their mystical properties, and the Ancient Shield of the Bane is no exception to this legacy.",
    "shippingDetail": "Carefully packed in a special Hylian cloth to protect against magical interference during transit.",
    "usage": {
      "activation": "Passive effect activated upon equipping and struck by damage.",
      "duration": "Instantaneous, recharges after one long rest.",
      "endsWhen": "The shield is no longer struck or the user completes a long rest.",
      "charges": "Unlimited; recharges with a long rest."
    },
    "priceReason": "Balanced for its unique properties and moderate level requirement, this shield offers significant defensive capabilities without overpowered effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:44:23.948355+00:00",
    "aiReviewedAt": "2026-07-22T06:44:23.948355+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_temple_echo": {
    "id": "hyrule_ancient_temple_echo",
    "name": "Echo of the Sacred Vault",
    "description": "The Echo of the Sacred Vault hums with ancient power, its presence felt in the very air around you as if the temple’s guardian whispers through your veins. When struck by a sacred beam, this talisman recharges your stamina for 5 seconds and grants a temporary speed boost that aids your swift movements during exploration. Its origins lie deep within Hyrule's forgotten temples, where it was said to protect the ancient vaults from divine incursions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Resists Sacred Beam",
      "Stamina Recharge on Hit"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sacred Beam Resistance",
        "rules": "When you are struck by a sacred beam, you gain resistance to radiant damage equal to your level + 10 for 5 seconds. This effect has no save DC and can occur once per long rest."
      },
      {
        "title": "Stamina Recharge on Hit",
        "rules": "Upon being hit by a sacred beam, regain 3d6 stamina points immediately. This effect is limited to once per short or long rest."
      }
    ],
    "levelRequirementReason": "This item serves as an introduction to the world of divine magic for new adventurers.",
    "vendorReason": "Hyrule's ancient artifacts are meticulously preserved and sold by the custodians of its sacred sites.",
    "shippingDetail": "Delivered via the legendary Wind Waker, ensuring timely arrival for all purchases from Hyrule.",
    "usage": {
      "activation": "Passive effect upon being hit by a sacred beam.",
      "duration": "5 seconds of resistance and stamina recharge on hit.",
      "endsWhen": "Rest ends when duration expires or effect is used up during the rest period.",
      "charges": "Unlimited uses per day, recharging at dawn."
    },
    "priceReason": "The Echo of the Sacred Vault is priced moderately to reflect its rarity and utility without overshadowing more powerful items.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:43:57.392561+00:00",
    "aiReviewedAt": "2026-07-22T06:43:57.392561+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_temple_heart": {
    "id": "hyrule_ancient_temple_heart",
    "name": "Heart of the Fallen Temple",
    "description": "The Heart of the Fallen Temple pulses with the raw energy of a collapsed temple, its surface etched with ancient runes that glow intermittently. Crafted from the very heartwood of the temple’s once-proud structure, this relic grants immense power but demands a significant sacrifice to wield. When activated, it restores 30 hit points per second and grants temporary invulnerability during critical strikes, allowing you to shrug off attacks that would otherwise be fatal.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "HP Restoration",
      "Invulnerability on Critical Strikes"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "HP Restoration",
        "rules": "Activates as a bonus action. Restores 30 hit points per second for the duration of one minute, after which it deactivates and requires a short rest to recharge."
      },
      {
        "title": "Invulnerability on Critical Strikes",
        "rules": "When you critically hit an opponent, this relic grants temporary invulnerability. For 1 round, you are immune to all damage from attacks made against you by the target of your critical strike. This effect ends if you take any other form of damage."
      }
    ],
    "levelRequirementReason": "The relic's power is too great for those below level 7, requiring a degree of experience to safely wield its abilities.",
    "vendorReason": "Hyrulean relics are meticulously preserved and sold by the Hyrulean Temple, which ensures that only those who can responsibly manage such power are given access.",
    "shippingDetail": "Ships via Lakitu Drones within a week of purchase.",
    "usage": {
      "activation": "Bonus action to activate; lasts for one minute, then requires a short rest to recharge.",
      "duration": "One minute per activation",
      "endsWhen": "After the duration ends or if you take any damage while invulnerable",
      "charges": "Unlimited uses, but must rest after each use"
    },
    "priceReason": "The Heart of the Fallen Temple is priced at 1000 XP due to its rare and powerful nature, balanced by the need for a significant sacrifice to wield it.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T06:44:21.886540+00:00",
    "aiReviewedAt": "2026-07-22T06:44:21.886540+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_temple_heart_core": {
    "id": "hyrule_ancient_temple_heart_core",
    "name": "Fractured Atrium Heart Core",
    "description": "The Fractured Atrium Heart Core is a pulsating relic harvested from the ruins of Hyrule's shattered temples. Crafted from ancient stone imbued with the spirits of long-lost Hyrulians, this core emits a faint glow that distorts reality around it. Wielders report visions of forgotten lore and fleeting glimpses into the history of their homeland. Its essence provides temporary resistance to temporal effects and stabilizes the fabric of time in its vicinity.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Resistance",
      "Hyrulean Lore"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Resistance",
        "rules": "The wielder gains a +20% bonus to saving throws against temporal effects. This effect is active for 1 minute and can be reactivated once per short or long rest."
      },
      {
        "title": "Hyrulean Lore",
        "rules": "Once per day, the wielder can cast the spell 'Detect Magic' as a bonus action to uncover hidden magical artifacts within 30 feet. This effect reveals the presence of magic but not its exact location or nature."
      }
    ],
    "levelRequirementReason": "This relic is crafted from ancient Hyrulean stone and requires a certain level of connection with the land to wield effectively.",
    "vendorReason": "The Hyrulean vendors are well-acquainted with the history of their homeland and can source rare relics like this core.",
    "shippingDetail": "Delivered via ethereal means, ensuring safe passage through any magical disturbances in the vicinity.",
    "usage": {
      "activation": "Bonus action for Hyrulean Lore; once per short or long rest for Temporal Resistance",
      "duration": "1 minute for Temporal Resistance; instantaneous for Hyrulean Lore",
      "endsWhen": "Duration ends upon resting, and charges are depleted",
      "charges": "Unlimited uses, recharged with a short or long rest"
    },
    "priceReason": "The core's rarity and the labor required to extract and craft it from ancient Hyrulean ruins justify its price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:44:15.666562+00:00",
    "aiReviewedAt": "2026-07-22T19:44:15.666562+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_temple_key": {
    "id": "hyrule_ancient_temple_key",
    "name": "Temple Echoes Pendant",
    "description": "The Temple Echoes Pendant, a delicate pendant forged from ancient Hyrulean gold, hums with the residual energy of forgotten temples. Worn by those who dare enter the sanctums of Hyrules ancient temples, it resonates with the echoes of long-lost gods and grants the wearer the ability to see through hidden mechanisms and perceive the true nature of their surroundings. The pendant's power is not without cost; it temporarily shields the wearer from the manipulations of psychic illusions.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveal Hidden Mechanisms",
      "Psychic Illusion Resistance"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reveal Hidden Mechanisms",
        "rules": "When entering ancient temples, the wearer has a +10% chance to reveal hidden mechanisms and secret doors. This effect lasts for 1 minute upon activation."
      },
      {
        "title": "Psychic Illusion Resistance",
        "rules": "The pendant grants temporary immunity to psychic illusions. The wearer gains advantage on saving throws against such effects until the start of their next turn after activating the pendant's power."
      }
    ],
    "levelRequirementReason": "The pendant's ancient magic is potent, but its power remains limited to those with a proven understanding of Hyrulean lore and temple architecture.",
    "vendorReason": "Hyrule's most revered relics are safeguarded by the Temple Keepers, who ensure that only those truly worthy have access to such powerful artifacts.",
    "shippingDetail": "The pendant is carefully packed in a sturdy chest and delivered via the Shy Guy Express, ensuring it arrives safe and sound.",
    "usage": {
      "activation": "As a bonus action upon entering an ancient temple.",
      "duration": "1 minute.",
      "endsWhen": "The duration expires after 1 minute or when the wearer leaves the immediate vicinity of an ancient temple.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "The pendant's rarity and the power it offers make it a valuable asset to any adventuring party navigating Hyrule's forgotten sanctums.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:44:49.837441+00:00",
    "aiReviewedAt": "2026-07-22T06:44:49.837441+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_temple_key_iron": {
    "id": "hyrule_ancient_temple_key_iron",
    "name": "Iron Key of the Forgotten Vault",
    "description": "The Iron Key of the Forgotten Vault is a robust key forged from ancient temple stone and iron. Its intricate carvings glow faintly with an age-old magic that dates back to Hyrule’s golden era. This key not only unlocks sealed chambers but also triggers dormant traps, resetting them harmlessly each time it passes through their mechanisms. Each use depletes 10% of the user's stamina and requires a successful Dexterity (Sleight of Hand) check.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔐",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Unlocks Sealed Chambers",
      "Disarms Ancient Traps"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Unlocking Sealed Chambers",
        "rules": "When the user attempts to unlock a door or chest, they must make a Dexterity (Sleight of Hand) check. On success, the key unlocks the target and restores any damage it has sustained."
      },
      {
        "title": "Disarming Ancient Traps",
        "rules": "The key can be used once per long rest to reset an ancient trap without triggering its effects. This does not require a roll but expends 10% of the user's stamina and cannot be used on traps that are still active."
      }
    ],
    "levelRequirementReason": "This key requires a moderate level to handle its inherent magical properties without risking serious injury.",
    "vendorReason": "The Hyrulean vendors have extensive knowledge of ancient artifacts and can vouch for the safety and efficacy of this item.",
    "shippingDetail": "Ships via spectral mail with a delivery time of one week, ensuring safe transport without attracting unwanted attention.",
    "usage": {
      "activation": "A standard action to use the key in its intended manner.",
      "duration": "Instantaneous when used for unlocking or disarming traps.",
      "endsWhen": "The user exhausts their stamina or after a long rest if used on a trap reset.",
      "charges": "Unlimited, but limited by daily and long-rest restrictions."
    },
    "priceReason": "The key's rarity, the magical properties, and its utility justify this price in experience points.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T06:44:37.089087+00:00",
    "aiReviewedAt": "2026-07-22T06:44:37.089087+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_temple_shard": {
    "id": "hyrule_ancient_temple_shard",
    "name": "Echo of the Temple’s Heart",
    "description": "The Echo of the Temple’s Heart is a shimmering shard etched with ancient runes. It hums faintly, resonating with the forgotten magic of the Temple of Time. When worn, it subtly guides adventurers to hidden passages and whispers secrets upon entering rooms lit by ten or more torches. This relic enhances magical attacks, temporarily increasing their potency by 15%. Its presence also grants a rare insight into the past when one least expects.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Guidance of Forgotten Passages",
      "Torched Secrets"
    ],
    "vendor": "hyrule",
    "shippedBy": "Zora River Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Guidance of Forgotten Passages",
        "rules": "When worn, this shard provides a passive effect that increases the chances of discovering hidden paths or secret rooms by 10% when entering temple structures. This effect is active until the wearer leaves the temple."
      },
      {
        "title": "Torched Secrets",
        "rules": "Upon entering a room with ten or more torches, the Echo grants its wearer temporary hit point restoration equal to 20% of their maximum hit points. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Echo requires no specific level as it aids in exploration and combat, enhancing the adventurer's ability to navigate ancient temples.",
    "vendorReason": "Hyrule is renowned for its deep connection with ancient artifacts, making them the perfect vendor for relics like this.",
    "shippingDetail": "Shipped via the Zora River Express; expect a swift delivery through the aqueducts of the kingdom.",
    "usage": {
      "activation": "Passive effect when worn, active until leaving the temple structure.",
      "duration": "Until leaving the temple or upon entering a new one.",
      "endsWhen": "Upon leaving the temple structure where it was last used.",
      "charges": "Unlimited uses; recharges after a long rest."
    },
    "priceReason": "The Echo of the Temple’s Heart offers significant utility in exploration and combat, making its price fair for adventurers looking to enhance their temple experiences.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:44:38.985681+00:00",
    "aiReviewedAt": "2026-07-22T06:44:38.985681+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_temple_shield": {
    "id": "hyrule_ancient_temple_shield",
    "name": "Guardian’s Hollow Shield",
    "description": "Guarded by spirits of the ancient guardians, this shield is carved from sacred heartwood that once thrived in the Temple of Time. Its surface hums with a resonant magic that absorbs and reflects spells, granting fleeting moments of defensive prowess to those who wield it. Each strike against you finds its way through to the shield itself, only for the spirit within to gather and return the blow with a chance of elemental backlash.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs and Reflects",
      "Spiritual Elemental Backlash"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Absorbs and Reflects",
        "rules": "The shield absorbs 30% of incoming magical damage as a reaction. Additionally, there is a 10% chance that the absorbed magic will be reflected back at the attacker as an elemental backlash (determine element randomly). The backlash deals half the absorbed damage as radiant energy."
      },
      {
        "title": "Spiritual Elemental Backlash",
        "rules": "When absorbing and reflecting, the shield grants +5 to your AC against all magical attacks for 1 minute. After this duration ends or if the shield is destroyed, any remaining absorbed magic is released in a burst of radiant energy affecting all creatures within 30 feet."
      }
    ],
    "levelRequirementReason": "The shield's spiritual powers require a seasoned warrior to properly channel its ancient magic.",
    "vendorReason": "Hyrule is the guardian of sacred relics, including this shield that once protected the heart of the Temple of Time.",
    "shippingDetail": "The shield must be shipped via Koopa Postal's fastest courier to ensure its safe arrival.",
    "usage": {
      "activation": "As a reaction when hit by a magical attack.",
      "duration": "1 minute or until destroyed.",
      "endsWhen": "Ends on the creature that absorbed and reflected damage, or if the shield is destroyed.",
      "charges": "Unlimited; recharges after 24 hours."
    },
    "priceReason": "The shield's unique spiritual properties and ancient craftsmanship justify its reduced price relative to its powerful effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:45:05.534424+00:00",
    "aiReviewedAt": "2026-07-22T06:45:05.534424+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_ancient_temple_torch": {
    "id": "hyrule_ancient_temple_torch",
    "name": "Ember of the Fractured Atrium",
    "description": "The Ember of the Fractured Atrium glows with a fractured essence, its flickering light illuminating darkened halls and revealing ancient glyphs etched into forgotten walls. This relic hums softly when psychic surges threaten to overwhelm the mind, offering soothing relief to those who hold it in their hands. In unstable realities, it burns brighter, casting an ethereal glow that pierces through shadows, making it a vital companion for explorers of the Temple of Time.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden glyphs",
      "Soothes psychic surges"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Glyph Revelation",
        "rules": "When held near ancient walls, this item reveals hidden glyphs. This effect can be used once per long rest."
      },
      {
        "title": "Psychic Surge Soothing",
        "rules": "This item emits a soothing hum that reduces mental fatigue by 50% during psychic surges. The user must be holding the item and can use this effect once per short rest."
      }
    ],
    "levelRequirementReason": "The Ember is accessible to adventurers of any level, offering a helpful tool for exploring unstable realities.",
    "vendorReason": "Hyrule's ancient artifacts are well-known for their mystical properties, and the Ember is no exception, making it a natural addition to their offerings.",
    "shippingDetail": "Delivered with care by the Shy Guys, ensuring safe passage through treacherous lands.",
    "usage": {
      "activation": "Passive effect when held; activation required for revealing glyphs",
      "duration": "Instantaneous for glyph revelation; duration of one short rest for soothing effects",
      "endsWhen": "Effect ends at the end of the short or long rest, or upon removal from a surging mind",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Ember's rare materials and mystical properties justify its price, making it a valuable tool for any adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:45:37.104901+00:00",
    "aiReviewedAt": "2026-07-22T06:45:37.104901+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_animal_nexus_pearl": {
    "id": "hyrule_animal_nexus_pearl",
    "name": "Animal Nexus Pearl",
    "description": "The Animal Nexus Pearl is a glowing gem that channels the essence of primal spirits. Crafted from the heartwood of ancient trees and imbued with the spirit of the forest, it increases the chance of successfully capturing wild beasts by 25%. When activated, you can momentarily bind one creature to your will, granting you temporary control over its actions for a brief duration. Use this pearl to forge unique hybrid weapons by fusing it with other materials; however, misuse risks corrupting both the item and the user.",
    "price": 1000,
    "icon": "🐉",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Enhanced Capture Chance",
      "Temporal Control"
    ],
    "vendor": "hyrule",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Capture Chance",
        "rules": "Increase the chance of successfully capturing a beast by 25%. This effect is passive and does not require an action. It ends when the creature is captured or after 3 uses."
      },
      {
        "title": "Temporal Control",
        "rules": "Activate to bind a primal creature, granting you temporary control over its actions for up to one minute. The creature must be within 60 feet of you. This effect requires an action to activate and ends when the creature escapes or after 1 minute."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 3 to channel the primal spirit essence effectively.",
    "vendorReason": "Hyrulean vendors are well-versed in the ancient arts and can supply unique items like the Animal Nexus Pearl.",
    "shippingDetail": "Delivered swiftly by the Piranha Plant Post, ensuring safe arrival to your doorstep.",
    "usage": {
      "activation": "Action or Reaction (to bind a creature)",
      "duration": "Up to one minute or until the creature escapes",
      "endsWhen": "The creature escapes, or after one minute",
      "charges": "3 uses before purification"
    },
    "priceReason": "Balanced at 1000 XP as it offers both passive and active benefits without overshadowing other party members.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T06:45:03.387059+00:00",
    "aiReviewedAt": "2026-07-22T06:45:03.387059+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_blood_moss_amber": {
    "id": "hyrule_blood_moss_amber",
    "name": "Blood Moss Amber",
    "description": "Blood Moss Amber is a glowing, hardened resin harvested from the treacherous Gerudo Desert. Crafted from the blood of ancient desert spirits, this relic imbues your weapon with primal fury when struck, unleashing a devastating surge in power. The amber's crimson glow pulses with energy, hinting at the fierce battle it has endured over centuries. Wielders of this rare artifact must be careful not to exhaust their stamina, for the cost is steep and the reward even greater.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Fury Surge",
      "Stamina Drain"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Fury Surge",
        "rules": "When you make a melee attack as part of your action or reaction, you gain +50% damage for the next 5 seconds. You must have at least half your maximum stamina to activate this effect; otherwise, it is expended without triggering."
      },
      {
        "title": "Stamina Drain",
        "rules": "For every successful melee attack made while Fury Surge is active, you lose 10% of your current stamina. This effect ends if you take a short or long rest, or if your stamina reaches zero."
      }
    ],
    "levelRequirementReason": "Only those who have proven their mettle through countless battles are deemed worthy to wield Blood Moss Amber.",
    "vendorReason": "Hyrule's vendors specialize in rare and ancient artifacts, ensuring that only the most resilient warriors can purchase such powerful relics.",
    "shippingDetail": "The Void Drifter Relay ensures timely delivery of Blood Moss Amber, but due to its fragile nature, it must be handled with care and arrives in pristine condition.",
    "usage": {
      "activation": "On a melee attack as part of your action or reaction.",
      "duration": "5 seconds after the attack.",
      "endsWhen": "Your stamina reaches zero, you take a short rest, or you take a long rest.",
      "charges": "Unlimited; expends when used."
    },
    "priceReason": "The price reflects its rarity and the danger involved in procuring this ancient resin from the Gerudo Desert.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T06:45:19.249186+00:00",
    "aiReviewedAt": "2026-07-22T06:45:19.249186+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_coral_fleet_key": {
    "id": "hyrule_coral_fleet_key",
    "name": "Coral Fleet Key",
    "description": "The Coral Fleet Key, crafted by the Noki Elders from the rare coral of the Great Sea, is a brass key imbued with ancient trade routes and forgotten lore. Each use carves away a fragment of its luster, as if the sea's waters are reclaiming their lost treasures. When used within the Coral Fleet’s controlled waters, it opens hidden vaults and forgotten ports; outside these bounds, it deals 1d4 damage to the wielder. The key also grants temporary weakness to aquatic creatures in a 5-foot radius for 1 minute.",
    "price": 1000,
    "icon": "🌊",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Opens underwater vaults",
      "Temporal weakness to aquatic creatures"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Unlock Hidden Vaults",
        "rules": "When used within the Coral Fleet’s controlled waters, this key opens hidden vaults and forgotten ports. The user must be a trusted trader with the Noki Elders for it to function properly."
      },
      {
        "title": "Temporal Weakness",
        "rules": "If used outside the Coral Fleet’s controlled waters, the wielder suffers 1d4 damage and becomes temporarily weak (disadvantage on Strength checks and saving throws) in a 5-foot radius around them for 1 minute. This effect ends early if the user enters the Coral Fleet's waters."
      }
    ],
    "levelRequirementReason": "The key's intricate craftsmanship and magical properties demand a minimum of second-level proficiency to wield.",
    "vendorReason": "Hyrule, as the primary trading hub for the Coral Fleet, maintains a steady supply of this unique artifact.",
    "shippingDetail": "Ships via Pipe Express with expedited delivery, ensuring the key arrives in pristine condition.",
    "usage": {
      "activation": "Standard action to use within controlled waters; bonus action outside controlled waters.",
      "duration": "Instantaneous effect for opening vaults or dealing damage.",
      "endsWhen": "Exhausted after a single use and cannot be recharged until the next full moon.",
      "charges": "Unlimited, but each use diminishes its luster."
    },
    "priceReason": "The key's rarity and magical properties justify this price, balancing its utility against potential risks.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T06:45:37.293503+00:00",
    "aiReviewedAt": "2026-07-22T06:45:37.293503+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_dark_temple_key": {
    "id": "hyrule_dark_temple_key",
    "name": "Dark Temple Key",
    "description": "The Dark Temple Key, forged from shadowed steel in the depths of Abyssal Temple, hums with malevolent power. It can unlock ancient doors sealed by forgotten magic and conjure ethereal guardians to assist in combat for a fleeting moment, their shadows stretching across the battlefield, weakening foes. This cursed artifact grants a 5% bonus damage against dark-themed enemies, making it invaluable for those who delve into realms of darkness.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Opens ancient sealed doors",
      "Summons shadowy guardians"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Open Sealed Doors",
        "rules": "As an action, the user can use the key to unlock one sealed door. This effect has no duration and is instantaneous."
      },
      {
        "title": "Summon Shadow Guardians",
        "rules": "The user can summon shadowy guardians as a bonus action for 30 seconds. These guardians provide combat support by weakening nearby enemies, but they dissipate after the duration ends or if the key's owner takes any damage."
      }
    ],
    "levelRequirementReason": "This key is suitable for novice adventurers who have begun to venture into dark territories.",
    "vendorReason": "Hyrulean vendors often carry this artifact as it holds both mystical and historical significance within their realm.",
    "shippingDetail": "Delivered by spectral mail, the package arrives under a veil of darkness with no visible trace until opened.",
    "usage": {
      "activation": "Action or Bonus Action depending on effect used.",
      "duration": "Instantaneous for unlocking doors; 30 seconds for summoning guardians.",
      "endsWhen": "On damage to the user or after its duration ends.",
      "charges": "Unlimited, recharged upon use."
    },
    "priceReason": "The balanced price reflects the item's cursed nature and limited utility without overshadowing other equipment options.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T06:45:33.095086+00:00",
    "aiReviewedAt": "2026-07-22T06:45:33.095086+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_earth_land_item_name_here": {
    "id": "hyrule_earth_land_item_name_here",
    "name": "Ice Wall Fragment",
    "description": "A shard from the frozen vault beneath Earth Land’s hidden glacier, this Ice Wall Fragment is a crystalline fragment that shimmers with frosty light. Crafted by Kremling Krew through ancient rituals, it retains the essence of the icy winds that once shaped the land. When activated, it can be used to construct ice barriers that momentarily freeze enemies within a 5-meter radius, halting their movements for a brief moment.",
    "price": 1000,
    "icon": "❄",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Construct Ice Barrier",
      "Freeze Enemies"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Construct Ice Barrier",
        "rules": "As an action, the wielder can create a 3-foot-tall ice barrier. The barrier lasts for 1 minute or until a creature breaks it by succeeding on a DC 15 Strength check."
      },
      {
        "title": "Freeze Enemies",
        "rules": "When used within 5 meters of an enemy, the wielder can cause the target to fall prone and be restrained with a successful DC 14 Wisdom (Perception) check. The effect lasts for 1 round per level."
      }
    ],
    "levelRequirementReason": "This shard is accessible to low-level adventurers who might encounter it in their early quests.",
    "vendorReason": "Hyrule is renowned for its vast array of magical artifacts, and this fragment fits seamlessly into the shop’s collection.",
    "shippingDetail": "Faster than usual due to the cold-sensitive nature of the shard; arrives within a day.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous construction, lasts until broken or ends",
      "endsWhen": "Destroyed if not used before expiration",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the shard's rarity and the effort required to craft such a fragment.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T06:45:35.360790+00:00",
    "aiReviewedAt": "2026-07-22T06:45:35.360790+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_earth_link_item": {
    "id": "hyrule_earth_link_item",
    "name": "Sunken Archive Key",
    "description": "The Sunken Archive Key is a rusted relic from the lost archives beneath Isle Delfino. It glows faintly with an ancient light, its surface etched with symbols of forgotten lore. This key opens hidden passageways linking Hyrule to Earth Land, allowing for secret travel between these worlds. Additionally, it grants 10% increased XP and experience points, making every adventure more rewarding. Its use triggers random world events that can either aid or hinder the bearer’s journey.",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Opens hidden passage",
      "Grants increased XP"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Open Passage",
        "rules": "The user must activate this ability as a bonus action. The key opens a hidden passage between Hyrule and Earth Land, allowing for secret travel. This effect lasts until the end of the next short or long rest."
      },
      {
        "title": "Increased XP",
        "rules": "Upon successful use, the user gains an additional 10% increased experience points from all sources during their current adventure. This effect persists until the end of the session."
      }
    ],
    "levelRequirementReason": "This key is accessible to lower-level adventurers who seek to explore new territories and gain valuable experiences.",
    "vendorReason": "The Hyrulean relic hunters have an extensive network of artifacts, including this one from their archives.",
    "shippingDetail": "Ships within three days via Lakitu Drones' express service to ensure timely delivery of such precious relics.",
    "usage": {
      "activation": "Bonus action for opening passage; passive effect for increased XP.",
      "duration": "Until the end of the next short or long rest for the hidden passage; until the end of the session for the increased XP.",
      "endsWhen": "The effect ends with the start of a new day or at the completion of the adventure.",
      "charges": "Unlimited, recharges on completion of an extended rest."
    },
    "priceReason": "Considering its unique abilities and the historical value it represents, this key is priced reasonably to reflect its importance in unlocking new adventures.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T06:45:42.290923+00:00",
    "aiReviewedAt": "2026-07-22T06:45:42.290923+00:00",
    "aiReviewVersion": 1
  }
};
