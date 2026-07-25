// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_020 = {
  "hacktivist_hoodie_of_anonymity": {
    "id": "hacktivist_hoodie_of_anonymity",
    "name": "Hacktivist Hoodie of Anonymity",
    "description": "A hoodie that makes you forgettable.",
    "category": "equipment",
    "price": 260,
    "icon": "👕",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "NPCs must succeed DC 13 Intelligence save to remember your face",
      "You forget your own name 50% of the time when introducing yourself",
      "Hoodie has a '404: Identity Not Found' logo on the back",
      "Made by: Hacktivist Collective"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Anonymous Drop",
    "levelRequirement": 6
  },
  "hacktivist_recipe_encryption_decoder": {
    "id": "hacktivist_recipe_encryption_decoder",
    "name": "Hacktivist Recipe Encryption Decoder",
    "description": "Decodes secret recipes.",
    "category": "equipment",
    "price": 260,
    "icon": "🔓",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Decodes encrypted recipes: advantage on checks with secret recipes",
      "You see hidden messages in recipes: advantage on Investigation",
      "Decoder has a backdoor: 5% chance recipes are wrong (disadvantage on check)",
      "Made by: Hacktivist Codebreakers"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Anonymous Drop",
    "levelRequirement": 6
  },
  "hacktivist_recipe_glitch_cookies": {
    "id": "hacktivist_recipe_glitch_cookies",
    "name": "Recipe: Hacktivist Glitch Cookies",
    "description": "Cookies that break reality slightly.",
    "price": 260,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Eating a cookie causes a minor glitch: advantage on one check, disadvantage on another",
      "You see code briefly: advantage on Investigation, disadvantage on Perception",
      "Cookies are pixelated (cosmetic but weird)",
      "Made by: Hacktivist Bakers"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Anonymous Drop",
    "levelRequirement": 6
  },
  "hacktivist_virus_chip_service": {
    "id": "hacktivist_virus_chip_service",
    "name": "Hacktivist Virus Chip Service",
    "description": "Infect tech with memes.",
    "price": 260,
    "icon": "💻",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Disable simple tech for 1 minute",
      "Spread meme: +1 Deception online",
      "Backfires: Your device lags",
      "Made by: Digital Rebels"
    ],
    "vendor": "hacktivist_net",
    "shippedBy": "USB Stick",
    "levelRequirement": 5
  },
  "halfling_adventurer_overalls": {
    "id": "halfling_adventurer_overalls",
    "name": "Halfling Adventurer Overalls ",
    "description": "Padded overalls for pint-sized heroes.",
    "category": "equipment",
    "price": 260,
    "icon": "👖",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "+1 to Dexterity saves (nimble folk)",
      "Pockets for snacks (heal 1d4 HP from rations)",
      "Overalls too short for tall races",
      "Made by: Shire Seamstresses"
    ],
    "vendor": "halfling_hole",
    "shippedBy": "Pocketed Parcel",
    "levelRequirement": 5
  },
  "halfling_baker_bodyguard": {
    "id": "halfling_baker_bodyguard",
    "name": "Halfling Master Baker Bodyguard (Elite)",
    "description": "An incredibly skilled Halfling chef who is surprisingly proficient with rolling pins and kitchen knives.",
    "price": 5000,
    "icon": "🔪",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Acts as a competent bodyguard (CR 4)",
      "Can instantly bake a full meal that heals 4d6 HP for 4 people (1/day)",
      "Made by: Halfling"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Linen Bag",
    "levelRequirement": 8
  },
  "halfling_bank_bank_itself": {
    "id": "halfling_bank_bank_itself",
    "name": "Halfling Bank Bailout Plan",
    "description": "If the Halfling Bank collapses, this plan guarantees your deposits are safe and you receive a 20% bonus.",
    "price": 290000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Insurance against total economic collapse of the Halfling faction",
      "If the bank fails, you gain 1.2x total deposits as emergency capital",
      "Made by: Halfling"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Emergency Kit",
    "levelRequirement": 18
  },
  "halfling_bank_loan_master": {
    "id": "halfling_bank_loan_master",
    "name": "Halfling Bank Loan Master (Instant 1M)",
    "description": "Instantly secure a 1,000,000 gp loan from the Halfling Bank, payable in 5 years with 10% interest.",
    "price": 5000,
    "icon": "💰",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Receive 1,000,000 gp instantly",
      "Failure to repay results in severe debt collection (DM discretion)",
      "Made by: Halfling"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Money Bag Delivery",
    "levelRequirement": 10
  },
  "halfling_bank_loan_master_godly": {
    "id": "halfling_bank_loan_master_godly",
    "name": "Halfling Bank Loan Master (Godly Term)",
    "description": "Secure a 5,000,000 gp loan on exceptionally generous terms, payable in 20 years with minimal interest.",
    "price": 290000,
    "icon": "💰",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Receive 5,000,000 gp instantly",
      "Repayment terms are extremely favorable and legally binding by Halfling law",
      "Made by: Halfling"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Security Deposit",
    "levelRequirement": 20
  },
  "halfling_bank_vault_lease": {
    "id": "halfling_bank_vault_lease",
    "name": "Halfling Bank Vault Lease (Maximum Security)",
    "description": "Rent the deepest, most magically warded vault in the Halfling underground for 1 year.",
    "price": 5000,
    "icon": "🔒",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Vault is immune to all scrying, teleportation, and physical breaking attempts",
      "Can safely store 1 artifact of Godly power",
      "Made by: Halfling"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Key Exchange",
    "levelRequirement": 12
  },
  "halfling_banking_protection": {
    "id": "halfling_banking_protection",
    "name": "Halfling Banking Protection (Wards)",
    "description": "The bank places powerful wards on your physical assets stored in their vaults.",
    "price": 5000,
    "icon": "🛡️",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Wards prevent scrying, teleportation, or magical theft from stored assets",
      "Wards only last as long as you maintain a banking relationship",
      "Made by: Halfling"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Security Audit",
    "levelRequirement": 11
  },
  "halfling_cheese_grater_of_fine_shreds": {
    "id": "halfling_cheese_grater_of_fine_shreds",
    "name": "Halfling Cheese Grater of Fine Shreds",
    "description": "Grates cheese so fine it becomes powder.",
    "category": "equipment",
    "price": 47,
    "icon": "🧀",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Grates cheese perfectly: advantage on cooking checks requiring cheese",
      "Can also grate vegetables, fingers (1d4 slashing damage on failed Sleight of Hand)",
      "You become obsessed with perfect cheese: disadvantage on checks if cheese isn't grated",
      "Made by: Halfling Cheese Artisans"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 5
  },
  "halfling_debt_forgiveness": {
    "id": "halfling_debt_forgiveness",
    "name": "Halfling Debt Forgiveness (Minor)",
    "description": "Wipes a small, non-magical financial debt (up to 50,000 gp) owed to a Halfling entity.",
    "price": 5000,
    "icon": "❌",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Erases a single specified debt ledger entry",
      "Debt must be financial, not soul-based",
      "Made by: Halfling"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Official Stamping",
    "levelRequirement": 8
  },
  "halfling_elevated_dining_experience": {
    "id": "halfling_elevated_dining_experience",
    "name": "Halfling Elevated Dining Experience",
    "description": "Eat at a table that's slightly higher.",
    "category": "premium",
    "price": 260,
    "icon": "🪑",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Gain 1d4 temporary HP from the exquisite meal",
      "You feel fancy: advantage on Charisma checks with nobles",
      "You can't reach the ground: disadvantage on movement checks",
      "Made by: Halfling Fine Dining"
    ],
    "vendor": "halfling",
    "shippedBy": "High Table Delivery",
    "levelRequirement": 5
  },
  "halfling_estate_deed": {
    "id": "halfling_estate_deed",
    "name": "Halfling Country Estate Deed",
    "description": "Ownership of a modest, cozy manor house surrounded by fertile farmland.",
    "price": 5000,
    "icon": "🏡",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Permanent, untaxed homestead",
      "Farm yields triple the normal food supply",
      "Made by: Halfling"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Legal Transfer",
    "levelRequirement": 10,
    "factionBonus": {
      "economy": 30
    }
  },
  "halfling_garden_gnome_security": {
    "id": "halfling_garden_gnome_security",
    "name": "Halfling Garden Gnome Security",
    "description": "Gnomes guard your garden.",
    "category": "services",
    "price": 260,
    "icon": "🎅",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Two garden gnomes guard your camp: they shout when enemies approach (alarm)",
      "Gnomes are easily distracted by shiny objects",
      "You must provide them with tiny hats and beards",
      "Made by: Halfling Gnome Security"
    ],
    "vendor": "halfling",
    "shippedBy": "Gnome Walk",
    "levelRequirement": 5
  },
  "halfling_gourmet_feast": {
    "id": "halfling_gourmet_feast",
    "name": "Halfling Gourmet Feast (For 12)",
    "description": "A multi-course meal guaranteed to satisfy even the grumpiest adventurer.",
    "price": 1100,
    "icon": "🍽️",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "All consumers regain maximum Hit Dice for their next short/long rest",
      "Grants inspiration for the next 8 hours due to high morale",
      "Made by: Halfling"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Portable Table",
    "levelRequirement": 2
  },
  "halfling_insurance_policy": {
    "id": "halfling_insurance_policy",
    "name": "Halfling Life Insurance Policy (1 Year)",
    "description": "If you die this year, your nominated heir receives 50,000 gp from the Halfling Bank.",
    "price": 5100,
    "icon": "📑",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "If character dies, nominated heir receives payout",
      "Payout requires proof of death (hard to forge)",
      "Made by: Halfling"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Bonded Scroll",
    "levelRequirement": 10
  },
  "halfling_luck_charm": {
    "id": "halfling_luck_charm",
    "name": "Halfling Luck Charm",
    "description": "A small talisman that borrows halfling fortune.",
    "category": "equipment",
    "price": 260,
    "icon": "🍀",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Once per day: Reroll one natural 1 on an attack, save, or ability check",
      "Only works if you are shorter than 5 feet",
      "Gnomes can use it twice per day (they're sneakier)",
      "Made by: Halfling Hedge-Mages"
    ],
    "vendor": "halfling_shire_market",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 5
  },
  "halfling_master_chef_bodyguard": {
    "id": "halfling_master_chef_bodyguard",
    "name": "Halfling Master Chef Bodyguard (Legendary)",
    "description": "The greatest Halfling chef, also a master of improvised weaponry and defense.",
    "price": 25000,
    "icon": "🍳",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Bodyguard (CR 8) provides both culinary support and combat",
      "Can create healing potions instantly using basic ingredients (1/day)",
      "Made by: Halfling"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Silver Kitchen Kit",
    "levelRequirement": 12
  },
  "halfling_negotiation_specialist": {
    "id": "halfling_negotiation_specialist",
    "name": "Halfling Negotiation Specialist (Hire)",
    "description": "Hire a master Halfling mediator to broker peace or finalize a complex trade agreement.",
    "price": 5100,
    "icon": "🤝",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Mediator ensures no deception occurs during a single negotiation event",
      "Guarantees a fair (though likely Halfling-favorable) outcome",
      "Takes 1 week to set up"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Official Notice",
    "levelRequirement": 8
  },
  "halfling_pantry_crate": {
    "id": "halfling_pantry_crate",
    "name": "Halfling's Endless Pantry Crate",
    "description": "A small wooden crate that, once opened, reveals a pocket dimension full of delicious halfling food.",
    "category": "curiosities",
    "price": 1100,
    "icon": "🧺",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Provides enough food for 10 people each day",
      "Food is always warm, fresh, and delicious",
      "Once per week, can produce a 'Hero's Feast' for 6 people",
      "Refills at dawn"
    ],
    "vendor": "Halfling",
    "shippedBy": "Friendly Farmers Cart",
    "levelRequirement": 4
  },
  "halfling_pie_baking_lesson_premium": {
    "id": "halfling_pie_baking_lesson_premium",
    "name": "Halfling Pie Baking Lesson (Premium)",
    "description": "Learn to make restorative pies.",
    "price": 260,
    "icon": "🥧",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Bake pie: Heals 2d4 HP when eaten (1 per day)",
      "Advantage on Cooking checks",
      "Pies attract hobbits for parties",
      "Made by: Shire Bakers"
    ],
    "vendor": "halfling_kitchen",
    "shippedBy": "Oven Mitts",
    "levelRequirement": 5
  },
  "halfling_political_bloc_backing": {
    "id": "halfling_political_bloc_backing",
    "name": "Halfling Political Bloc Backing (Major City)",
    "description": "Secure the voting power of a major Halfling political bloc in one specific city council vote.",
    "price": 5100,
    "icon": "🏛️",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Guaranteed win on one major civic vote (e.g., zoning, taxation)",
      "Bloc demands a small, manageable political favor in return",
      "Made by: Halfling"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Secret Ballot",
    "levelRequirement": 11,
    "factionBonus": {
      "politics": 50
    }
  },
  "halfling_portable_oven_stove": {
    "id": "halfling_portable_oven_stove",
    "name": "Halfling Portable Oven-Stove",
    "description": "A tiny stove that folds up smaller than a breadbox.",
    "category": "equipment",
    "price": 260,
    "icon": "🔥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Cooks any recipe in half the time (rounded down)",
      "Can only be used by someone under 4 feet tall (others burn their fingers)",
      "Produces a smell of fresh bread that attracts hungry creatures within 100ft",
      "Made by: Halfling Tinkerers"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 5
  },
  "halfling_recipe_herb_stuffed_trout": {
    "id": "halfling_recipe_herb_stuffed_trout",
    "name": "Recipe: Halfling Herb-Stuffed Trout",
    "description": "A recipe card for a restorative fish dish.",
    "price": 260,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Learn to cook a meal that restores 2d4+2 HP and removes one level of exhaustion",
      "Requires fresh fish and herbs (easily foraged)",
      "Takes 1 hour to cook, feeds 4 people",
      "Made by: Halfling Riverfolk Kitchens"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 5
  },
  "halfling_recipe_shepherds_pie Deluxe": {
    "id": "halfling_recipe_shepherds_pie_deluxe",
    "name": "Recipe: Halfling Shepherd's Pie Deluxe",
    "description": "Comfort food that heals the soul.",
    "price": 260,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Restores 3d4 HP and removes one condition (poison, frightened, or charmed)",
      "Takes 2 hours to prepare, requires fresh vegetables",
      "You must share it or feel guilty (disadvantage on checks if you don't)",
      "Made by: Halfling Comfort Kitchen"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 6
  },
  "halfling_second_breakfast_catering": {
    "id": "halfling_second_breakfast_catering",
    "name": "Halfling Second Breakfast Catering",
    "description": "Gourmet meals between breakfast and brunch.",
    "category": "premium",
    "price": 260,
    "icon": "🥞",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Provides 7 days of extra rations that grant 1d4 temporary HP when eaten mid-morning",
      "You gain 1 pound per day (cosmetic, no mechanical effect... at first)",
      "Other races get indigestion: disadvantage on next check if they eat it",
      "Made by: Halfling Catering Co."
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post (Priority)",
    "levelRequirement": 5
  },
  "halfling_second_breakfast_pajamas": {
    "id": "halfling_second_breakfast_pajamas",
    "name": "Halfling Second Breakfast Pajamas",
    "description": "Pajamas for eating in bed.",
    "category": "equipment",
    "price": 260,
    "icon": "🥱",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on saves vs. exhaustion when resting (very comfortable)",
      "Pajamas have syrup stains permanently (disadvantage on Charisma with neat freaks)",
      "You can eat in bed without getting crumbs everywhere (magic)",
      "Made by: Halfling Sleepwear"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post (Priority)",
    "levelRequirement": 5
  },
  "halfling_second_breakfast_pastry_recipe": {
    "id": "halfling_second_breakfast_pastry_recipe",
    "name": "Recipe: Halfling Second Breakfast Pastry ",
    "description": "Flaky pastry for that extra meal – hobbit-sized hunger.",
    "price": 260,
    "icon": "🥐",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Flake dough (25 min); eat to regain 1d8 HP and ignore one meal (no exhaustion from hunger)",
      "Requires: Butter and jam; elevenses approved",
      "Makes you hungry for thirds",
      "Made by: Shire Bakers"
    ],
    "vendor": "halfling_hole",
    "shippedBy": "Breakfast Bun Book",
    "levelRequirement": 5
  },
  "halfling_second_breakfast_toaster": {
    "id": "halfling_second_breakfast_toaster",
    "name": "Halfling Second Breakfast Toaster",
    "description": "Toasts bread and also waffles, muffins, and crumpets.",
    "category": "equipment",
    "price": 47,
    "icon": "🍞",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Perfect toast every time: advantage on cooking checks involving bread",
      "Toasts so well it sometimes burns: 10% chance smoke alarm goes off (disadvantage on Stealth)",
      "You must make toast for every meal (disadvantage if you don't)",
      "Made by: Halfling Breakfast Engineers"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 5
  },
  "halfling_seed_bank": {
    "id": "halfling_seed_bank",
    "name": "Halfling Seed Bank (Rare Crops)",
    "description": "A collection of seeds for crops that thrive magically and restore massive energy.",
    "price": 5100,
    "icon": "🌱",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Planting yields food that restores 4d8+4 HP (requires 1 week)",
      "Can feed a small army for a month",
      "Made by: Halfling"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Earthen Jar",
    "levelRequirement": 6,
    "factionBonus": {
      "economy": 15
    }
  },
  "halfling_shire_pie_pan_set": {
    "id": "halfling_shire_pie_pan_set",
    "name": "Halfling Shire Pie Pan Set ",
    "description": "Set of pans for multiple breakfast pies.",
    "category": "equipment",
    "price": 260,
    "icon": "🥧",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Bakes multiple pies; +1 to cooking for second breakfasts",
      "Non-stick hobbit magic",
      "Pans stack for travel",
      "Made by: Shire Potters"
    ],
    "vendor": "halfling_hole",
    "shippedBy": "Breakfast Bake Bundle",
    "levelRequirement": 5
  },
  "halfling_spy_network_lease": {
    "id": "halfling_spy_network_lease",
    "name": "Halfling Spy Network Lease (Local)",
    "description": "Lease a small, highly effective network of Halfling informants in a single major city.",
    "price": 5100,
    "icon": "👂",
    "stock": 6,
    "rarity": "epic",
    "effects": [
      "Receive 1 piece of actionable intelligence per day regarding local happenings",
      "Halflings are experts at gathering gossip and financial details",
      "Made by: Halfling"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Secret Meetup",
    "levelRequirement": 7
  },
  "halfling_stowaway_contract": {
    "id": "halfling_stowaway_contract",
    "name": "Halfling Stowaway Contract",
    "description": "Hire a small, discreet Halfling to hide on your person/vehicle for transport.",
    "price": 260,
    "icon": "🥧",
    "stock": 30,
    "rarity": "uncommon",
    "effects": [
      "Halfling hides perfectly (advantage on related checks)",
      "Provides +1 bonus to foraging checks",
      "Must provide 1 meal per day"
    ],
    "vendor": "halfling_community",
    "shippedBy": "Small Sack",
    "levelRequirement": 1
  },
  "halfling_tax_exemption_deed": {
    "id": "halfling_tax_exemption_deed",
    "name": "Halfling Tax Exemption Deed (Lifetime)",
    "description": "Official papers exempting all your current and future assets from Halfling taxation.",
    "price": 5100,
    "icon": "📜",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Permanent tax-free status in all Halfling-controlled settlements",
      "Can be used once to pardon a debt",
      "Made by: Halfling"
    ],
    "vendor": "halfling_bank",
    "shippedBy": "Sealed Book",
    "levelRequirement": 13
  },
  "halo_energy_sword": {
    "id": "halo_energy_sword",
    "name": "Energy Sword",
    "description": "A plasma sword for close combat.",
    "category": "equipment",
    "price": 5100,
    "icon": "⚔️",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "2d10 radiant, ignores armor below 15",
      "Lunge attack: +10 speed",
      "Battery: 10 swings"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Energy Cell",
    "levelRequirement": 7
  },
  "hammer_basic": {
    "id": "hammer_basic",
    "name": "Standard Hammer",
    "description": "A reliable wooden mallet reinforced with iron bands. The plumber's tool of choice.",
    "category": "equipment",
    "price": 47,
    "icon": "🔨",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "1d8 bludgeoning damage",
      "Can break brick blocks",
      "Versatile (1d10 two-handed)"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Heavy Goods Carrier",
    "levelRequirement": 1
  },
  "hammer_bro_coin_launcher": {
    "id": "hammer_bro_coin_launcher",
    "name": "Hammer Bro Coin Launcher",
    "description": "Fires coins like bullets. Economical AND deadly.",
    "category": "equipment",
    "price": 1100,
    "icon": "💸",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Ranged Weapon: 60ft, 1d8 piercing + target must make DEX save DC 13 or be knocked prone",
      "Uses Gold Coins as ammo (1 coin = 1 shot)",
      "On Critical Hit: Target is blinded by shiny distraction for 1 round",
      "Wario sues you if caught using this in his territory"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Coin-Operated Crate",
    "levelRequirement": 5
  },
  "hammer_bro_gloves": {
    "id": "hammer_bro_gloves",
    "name": "Hammer Bro Throwing Gloves",
    "description": "Leather gloves etched with Bro runes. Enhances your inner blacksmith's fury.",
    "category": "equipment",
    "price": 1100,
    "icon": "🧤",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Thrown weapons deal +1d4 damage",
      "Advantage on throws under 30ft",
      "Once per short rest: Throw returns like boomerang",
      "Gloves itch during full moons"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Forge-Wrapped",
    "levelRequirement": 3
  },
  "hammer_bro_hammer": {
    "id": "hammer_bro_hammer",
    "name": "Hammer Bro Hammer",
    "description": "A throwing hammer that stuns on impact.",
    "category": "equipment",
    "price": 260,
    "icon": "🔨",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Throw: 1d8 bludgeoning, stun on critical hit",
      "Range 30ft, returns if missed",
      "Unlimited throws"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Hammer Case",
    "levelRequirement": 3
  },
  "happy_flower_badge": {
    "id": "happy_flower_badge",
    "name": "Happy Flower Badge",
    "description": "Slowly restores magic. Photosynthesis included.",
    "category": "equipment",
    "price": 1100,
    "icon": "🌻",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Regenerate 1st level spell slot on d6 roll of 6 each turn"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Potted Plant",
    "levelRequirement": 5
  },
  "happy_heart_badge": {
    "id": "happy_heart_badge",
    "name": "Happy Heart Badge",
    "description": "Slowly restores health. A badge with a positive attitude.",
    "category": "equipment",
    "price": 1100,
    "icon": "💖",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Regenerate 1 HP at the start of every turn during combat"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Love Letter",
    "levelRequirement": 5
  },
  "harpies_song_license": {
    "id": "harpies_song_license",
    "name": "Harpies' Song License (Royalty-Free)",
    "description": "Legal right to use harpy song in performances.",
    "price": 5100,
    "icon": "🎵",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Learn the Harpy's Luring Song ability",
      "Immunity to being charmed by songs",
      "Made by: Harpy Matriarchs"
    ],
    "vendor": "avian_royalty",
    "shippedBy": "Songbird Courier",
    "levelRequirement": 14,
    "factionBonus": {
      "fey": 75
    }
  },
  "hat_of_the_mad_architect": {
    "id": "hat_of_the_mad_architect",
    "name": "Hat of the Mad Architect",
    "description": "A top hat that makes you see buildings as they could be — not as they are.",
    "category": "equipment",
    "price": 5200,
    "icon": "🎩",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "You see architectural flaws and hidden passages",
      "You can redesign any structure in your mind — if you spend 1 hour, it becomes real (DC 15 Int check)",
      "You begin to hear whispers from the walls"
    ],
    "vendor": "artificer_tower",
    "shippedBy": "Top Hat Box",
    "levelRequirement": 7
  },
  "haunted_spyglass": {
    "id": "haunted_spyglass",
    "name": "Haunted Spyglass",
    "description": "Lets you see through walls, but the previous owner watches too.",
    "category": "equipment",
    "price": 1100,
    "icon": "🔭",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "See through 5ft of solid material for 1 minute (3/day)",
      "Ghostly previous owner comments on everything you see (annoying)",
      "10% chance to see something that isn't there (hallucination)",
      "Made by: Captain Deadbeard (deceased)"
    ],
    "vendor": "ghostly_gadgets",
    "shippedBy": "Creaking Footsteps",
    "levelRequirement": 6
  },
  "haunting_consultation": {
    "id": "haunting_consultation",
    "name": "Haunting Consultation",
    "description": "A professional ghost helps you haunt a location (or yourself) for maximum effect.",
    "category": "services",
    "price": 1100,
    "icon": "👻",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "A ghost will haunt a room for 1 week (creates eerie ambiance, scares intruders)",
      "Or, haunt *yourself*: gain *Incorporeality* for 10 minutes/day",
      "Ghost may demand snacks or a backstory"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Spirit Jar",
    "levelRequirement": 4
  },
  "heart_of_the_mountain": {
    "id": "heart_of_the_mountain",
    "name": "Heart of the Mountain",
    "description": "A pulsing stone that feels like a living heartbeat. It is the soul of a dead titan.",
    "category": "premium",
    "price": 25000,
    "icon": "🪨",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Place in ground: creates a 1-mile radius of unshakable stability",
      "Earthquakes, collapses, and planar rifts are impossible within",
      "The heart must be fed 10,000 gp in precious stones monthly — or it crumbles"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Stone Chest",
    "levelRequirement": 13
  },
  "heavy_boots_used_by_mario": {
    "id": "heavy_boots_used_by_mario",
    "name": "Goomba Stomper Boots",
    "description": "Heavy boots used by Mario loyalists to flatten Goomba conscripts.",
    "category": "equipment",
    "price": 47,
    "icon": "👢",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Stomp as bonus action: 1d6 bludgeoning to small creatures (advantage vs. Goombas)",
      "Boots are loud: disadvantage on Stealth (clompy)",
      "Wear for 1 hour: gain resistance to falling damage (up to 10ft)",
      "Soles wear out: after 5 uses, disadvantage on Dexterity saves",
      "Made by: Kingdom Bootmakers (Civil War Edition)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Stomp Service",
    "levelRequirement": 4
  },
  "hellforge_demon_blade": {
    "id": "hellforge_demon_blade",
    "name": "Hellforge Demon Blade (Weapon)",
    "description": "A blade forged in hellfire, dealing extra damage to celestial beings.",
    "price": 300000,
    "icon": "⚔️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "+3d6 fire damage vs. angels",
      "Self-sharpening",
      "Made by: Hellforge Masters"
    ],
    "vendor": "infernal_armory",
    "shippedBy": "Demon Carrier",
    "levelRequirement": 19,
    "factionBonus": {
      "infernal": 100
    }
  },
  "herbalism_tutoring": {
    "id": "herbalism_tutoring",
    "name": "Herbalism Tutoring (5 Sessions)",
    "description": "Five 2-hour sessions with a master herbalist learning rare plant cultivation and extraction.",
    "category": "services",
    "price": 1100,
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
    "levelRequirement": 2
  },
  "high_elf_starlight_ink": {
    "id": "high_elf_starlight_ink",
    "name": "High Elf Starlight Ink",
    "description": "A vial of ink that seems to contain liquid starlight. Makes writing glow with faint light.",
    "category": "consumables",
    "price": 260,
    "icon": "✍️",
    "stock": 20,
    "rarity": "uncommon",
    "effects": [
      "Scrolls written with this ink have +1 to their save DC",
      "Can be used to create magical maps that show star constellations",
      "Ink lasts for 10 pages of writing"
    ],
    "vendor": "High Elves",
    "shippedBy": "Crystal Vial",
    "levelRequirement": 1
  },
  "high_elf_truth_tea": {
    "id": "high_elf_truth_tea",
    "name": "High Elf Truth Tea",
    "description": "Delicate tea brewed under starlight, forcing honesty in the imbiber.",
    "price": 5200,
    "icon": "🍵",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Target must succeed on DC 17 WIS save or answer the next 3 questions truthfully",
      "Tea is extremely bitter",
      "Made by: High Elves"
    ],
    "vendor": "high_elf_enclave",
    "shippedBy": "Fine Porcelain",
    "levelRequirement": 7
  },
  "high_elves_elegant_posture_lessons": {
    "id": "high_elves_elegant_posture_lessons",
    "name": "High Elves Elegant Posture Lessons",
    "description": "Stand like an elf, annoy your friends.",
    "category": "services",
    "price": 260,
    "icon": "🧘",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+1 Charisma for 7 days; you look down on everyone slightly more",
      "Disadvantage on Stealth – you pose dramatically before attacking",
      "You learn one elven insult that sounds beautiful but is very rude",
      "Made by: High Elves Finishing School"
    ],
    "vendor": "high_elves",
    "shippedBy": "Graceful Stride",
    "levelRequirement": 5
  },
  "high_elves_elven_cloak_replica": {
    "id": "high_elves_elven_cloak_replica",
    "name": "High Elves Elven Cloak (Replica)",
    "description": "A cheap knockoff of a legendary cloak.",
    "category": "equipment",
    "price": 1100,
    "icon": "🧥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Stealth in forests (works 50% of the time)",
      "Cloak is clearly fake: disadvantage on Charisma with elves",
      "Comes with a 'Certificate of Authenticity' that's also fake",
      "Made by: High Elves Gift Shop"
    ],
    "vendor": "high_elves",
    "shippedBy": "Graceful Stride",
    "levelRequirement": 6
  },
  "high_elves_elven_fruit_tarts_recipe": {
    "id": "high_elves_elven_fruit_tarts_recipe",
    "name": "Recipe: High Elves Elven Fruit Tarts",
    "description": "Delicate tarts with enchanted fruits for grace.",
    "price": 1100,
    "icon": "🍰",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Teaches recipe: Pastry with fruits (50 min); eat to gain advantage on Dexterity (Acrobatics) for 3 hours and minor illusion (floral)",
      "Requires: Rare fruits (DC 14 Nature); elegant taste",
      "Elves sing praises",
      "Made by: Elven Patissiers"
    ],
    "vendor": "high_elves_grove",
    "shippedBy": "Silken Tart Tome",
    "levelRequirement": 7
  },
  "high_elves_elven_pastry_press": {
    "id": "high_elves_elven_pastry_press",
    "name": "High Elves Elven Pastry Press",
    "description": "Delicate press for fruit tart dough.",
    "category": "equipment",
    "price": 1100,
    "icon": "🍰",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Presses thin layers; +2 to Dexterity for elegant baking",
      "Infuses grace (extra charm effect)",
      "Fragile – breaks on hard use",
      "Made by: Elven Silversmiths"
    ],
    "vendor": "high_elves_grove",
    "shippedBy": "Silken Press Parcel",
    "levelRequirement": 7
  },
  "high_elves_elven_rope": {
    "id": "high_elves_elven_rope",
    "name": "High Elves Elven Rope",
    "description": "A 50ft rope woven from enchanted fibers that responds to commands.",
    "category": "equipment",
    "price": 260,
    "icon": "🪢",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Responds to verbal commands (tie, untie, shorten, lengthen)",
      "Can support up to 1 ton of weight",
      "Made by: High Elves"
    ],
    "vendor": "high_elf_enclave",
    "shippedBy": "Rope Coil",
    "levelRequirement": 4
  },
  "high_elves_elven_whisk": {
    "id": "high_elves_elven_whisk",
    "name": "High Elves Elven Whisk",
    "description": "A whisk that never tangles.",
    "category": "equipment",
    "price": 48,
    "icon": "🥄",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Advantage on cooking checks involving whipping or mixing",
      "Whisks so fast it creates a light breeze (cools soup)",
      "You must whisk elegantly: disadvantage if you whisk messily",
      "Made by: High Elves Kitchenware"
    ],
    "vendor": "high_elves",
    "shippedBy": "Graceful Stride",
    "levelRequirement": 5
  },
  "high_elves_elvish_language_tutoring": {
    "id": "high_elves_elvish_language_tutoring",
    "name": "High Elves Elvish Language Tutoring",
    "description": "Learn Elvish in 7 days or your money back.",
    "category": "services",
    "price": 260,
    "icon": "📚",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Learn Elvish language (temporary, lasts 7 days)",
      "You speak it with a terrible accent: disadvantage on Charisma with elves",
      "You understand insults (advantage on Insight)",
      "Made by: High Elves Language School"
    ],
    "vendor": "high_elves",
    "shippedBy": "Linguistic Courier",
    "levelRequirement": 6
  },
  "high_elves_recipe_lembas_crackers": {
    "id": "high_elves_recipe_lembas_crackers",
    "name": "Recipe: High Elves Lembas Crackers",
    "description": "A cheap imitation of elven waybread.",
    "price": 1100,
    "icon": "📜",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "One cracker feeds a person for a day (but tastes like cardboard)",
      "Advantage on saves vs. exhaustion from travel for 24 hours",
      "Elves know it's fake: disadvantage on Charisma with them",
      "Made by: High Elves Snack Factory"
    ],
    "vendor": "high_elves",
    "shippedBy": "Linguistic Courier",
    "levelRequirement": 6
  },
  "high_elves_serenade_lute_premium": {
    "id": "high_elves_serenade_lute_premium",
    "name": "High Elves Serenade Lute (Premium)",
    "description": "Play calming melodies for elven grace.",
    "price": 1100,
    "icon": "🎸",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Once per day: Charm one creature (Wisdom save DC 13) for 1 minute",
      "Advantage on Performance checks",
      "Strings break if played off-key (elves are picky)",
      "Made by: Elven Luthiers"
    ],
    "vendor": "high_elves_conservatory",
    "shippedBy": "Leafboat Delivery",
    "levelRequirement": 6
  },
  "high_elves_sylvan_silk_gown": {
    "id": "high_elves_sylvan_silk_gown",
    "name": "High Elves Sylvan Silk Gown",
    "description": "Flowing gown that whispers with the wind.",
    "price": 1100,
    "icon": "👗",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Advantage on Charisma (Performance) in natural settings",
      "Gown mends minor tears overnight",
      "Snags on branches easily",
      "Made by: Elven Looms"
    ],
    "vendor": "high_elves_enclave",
    "shippedBy": "Leaf-Embroidered Fold",
    "levelRequirement": 7
  },
  "hiker_backpack": {
    "id": "hiker_backpack",
    "name": "Koopa Troopa Backpack",
    "description": "A backpack shaped like a shell.",
    "category": "equipment",
    "price": 48,
    "icon": "🎒",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Carries 50lbs",
      "Looks stylish"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1
  },
  "hobgoblin_hobgoblin_gruel_recipe": {
    "id": "hobgoblin_hobgoblin_gruel_recipe",
    "name": "Recipe: Hobgoblin Hob Gruel",
    "description": "Basic gruel for goblin hordes – simple and filling.",
    "price": 260,
    "icon": "🥣",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Stir oats (10 min); eat to sustain horde (feed 6) and gain +1 to group Intimidation",
      "Requires: Oats; goblin staple",
      "Tastes like discipline",
      "Made by: Hob Cooks"
    ],
    "vendor": "hobgoblin_legion",
    "shippedBy": "Gruel Grain Guide",
    "levelRequirement": 5
  },
  "hobgoblin_legion_mass_cook_pot": {
    "id": "hobgoblin_legion_mass_cook_pot",
    "name": "Hobgoblin Legion Mass Cook Pot",
    "description": "Huge pot for gruel for hordes.",
    "category": "equipment",
    "price": 270,
    "icon": "🥣",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Cooks for 10+; +1 to group efficiency",
      "Durable for camps",
      "Too big for solo",
      "Made by: Legion Forges"
    ],
    "vendor": "hobgoblin_legion",
    "shippedBy": "Horde Heat Haul",
    "levelRequirement": 5
  },
  "hobgoblin_legion_uniform": {
    "id": "hobgoblin_legion_uniform",
    "name": "Hobgoblin Legion Uniform",
    "description": "Disciplined uniform for goblin ranks.",
    "category": "equipment",
    "price": 270,
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
    "description": "Monthly drill sergeant visits.",
    "category": "premium",
    "price": 1100,
    "icon": "📋",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "A hobgoblin sergeant follows you for 7 days: advantage on saves vs. fear",
      "Sergeant yells at you constantly: disadvantage on Stealth",
      "Must follow daily routine or be demoted (cosmetic rank)",
      "Made by: Hobgoblin Military Academy"
    ],
    "vendor": "hobgoblin",
    "shippedBy": "Drill March",
    "levelRequirement": 7
  },
  "hobgoblin_war_drum_premium": {
    "id": "hobgoblin_war_drum_premium",
    "name": "Hobgoblin War Drum (Premium)",
    "description": "Rally troops with beats.",
    "price": 1100,
    "icon": "🥁",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Beat: Allies +1 attack in 30ft for 1 minute",
      "Intimidate foes",
      "Drum too loud for stealth",
      "Made by: Hobgoblin Bards"
    ],
    "vendor": "hobgoblin_legion",
    "shippedBy": "Drum Skin",
    "levelRequirement": 6
  },
  "honey_syrup": {
    "id": "honey_syrup",
    "name": "Honey Syrup",
    "description": "Enchanted honey from the Gusty Gardens. Restores magical stamina. The bees were compensated. Mostly.",
    "category": "consumables",
    "price": 48,
    "icon": "🍯",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Restore one expended spell slot (up to 2nd level)"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Parakarry Postal Service",
    "levelRequirement": 1
  },
  "honeyed_lockpick": {
    "id": "honeyed_lockpick",
    "name": "Honeyed Lockpick",
    "description": "A slim pick laced with sweet syrup that tempts tumblers to slip aside.",
    "category": "equipment",
    "price": 270,
    "icon": "🔐",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "+2 to Thieves' Tools checks",
      "Once per day: open a non-magical lock without a check",
      "Sticky sap may attract insects"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Velvet Roll",
    "levelRequirement": 1
  },
  "hot_shroom": {
    "id": "hot_shroom",
    "name": "Hot Shroom",
    "description": "A spicy mushroom that wakes you up. Not for the faint of heart.",
    "category": "consumables",
    "price": 270,
    "icon": "🌶️",
    "stock": 100,
    "rarity": "uncommon",
    "effects": [
      "Gain 10 Coins",
      "Grants 'Enraged' for 1 min (+2 dmg, -2 AC)"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Insulated Box",
    "levelRequirement": 3
  },
  "hp_plus_badge": {
    "id": "hp_plus_badge",
    "name": "HP Plus Badge",
    "description": "A heart-shaped badge that increases vitality.",
    "category": "equipment",
    "price": 1100,
    "icon": "❤️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+5 Maximum HP while equipped",
      "Requires Attunement"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Medical Supply",
    "levelRequirement": 4
  },
  "hustle_drink": {
    "id": "hustle_drink",
    "name": "Hustle Drink",
    "description": "Energy drink that makes you vibrate.",
    "category": "consumables",
    "price": 270,
    "icon": "🥤",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Gain an extra Action this turn",
      "Skip your next turn (Crash)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Express",
    "levelRequirement": 3
  },
  "hyperdrive_engine_upgrade": {
    "id": "hyperdrive_engine_upgrade",
    "name": "Hyperdrive Engine Upgrade (Ship)",
    "description": "Upgrades ship engines for faster-than-light travel boosts.",
    "price": 120000,
    "icon": "🚀",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Increases speed by 50%",
      "Installation: 1 week",
      "Made by: Warp Dynamics"
    ],
    "vendor": "shipyard",
    "shippedBy": "Tow Drone",
    "levelRequirement": 17
  },
  "hyrule_ancient_arrow": {
    "id": "hyrule_ancient_arrow",
    "name": "Ancient Arrow",
    "description": "An arrow infused with Sheikah technology, it whispers secrets of forgotten temples when fired. Its arcane core pulses with the energy of the Triforce’s hidden chambers, making it a deadly tool for both spellcasters and warriors. Only those attuned to the Feywild’s whispering winds may wield it without backlash.",
    "category": "equipment",
    "price": 1100,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deals 2d6 bonus arcane damage",
      "15% chance to trigger wild magic surge",
      "Requires attunement by a spellcaster",
      "Crafted by: Starlight",
      "When used near a sacred beast, the arrow’s damage increases by 1d4",
      "Fails to fire if wielder is not attuned to the Feywild"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "hyrule_ancient_echo_shard": {
    "id": "hyrule_ancient_echo_shard",
    "name": "Ancient Echo Shard",
    "description": "A fractured relic from the Temple of the Forgotten, resonating with echoes of past battles. When wielded, it amplifies the wielder’s memory and intuition, revealing hidden paths and enemy weaknesses.",
    "category": "equipment",
    "price": 1100,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% chance to detect hidden traps or secrets",
      "+15% damage to enemies with memory-based weaknesses",
      "Grants temporary vision of the battlefield’s ancient layout"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "hyrule_ancient_forged": {
    "id": "hyrule_ancient_forged",
    "name": "Forged in the Heart of the Temple",
    "description": "A relic of the Temple of the Three Stars carved from the very stone that once held the Triforce’s essence. It channels ancient power to amplify your combat prowess and restore your health during battle.",
    "category": "equipment",
    "price": 1100,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Boosts attack power by 20% for 5 seconds after each strike",
      "Restores 20% of max HP on hit",
      "Grants immunity to poison effects for 3 seconds after use"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 7
  },
  "hyrule_ancient_heart": {
    "id": "hyrule_ancient_heart",
    "name": "Heart of the Forgotten Temple",
    "description": "A relic from the ruins of the Sacred Atrium, this item allows the wielder to temporarily summon a spectral guardian that defends them for 30 seconds.",
    "category": "equipment",
    "price": 1100,
    "icon": "🕯",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Summons guardian spirit for 30 seconds",
      "Reduces incoming damage by 30%",
      "Can only be used once per battle"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 6
  },
  "hyrule_ancient_key": {
    "id": "hyrule_ancient_key",
    "name": "Temple of the Forgotten Key",
    "description": "A relic forged from the heart of the ancient temple beneath the clouds. Unlocks hidden paths and triggers dormant temple guardians. Each use reveals a new relic or treasure chamber behind the walls.",
    "category": "equipment",
    "price": 1100,
    "icon": "🗝",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Reveals hidden paths in ancient temple zones",
      "Triggers guardian awakenings for bonus loot",
      "Grants 10% chance to find a hidden artifact upon use"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "hyrule_ancient_key_chain": {
    "id": "hyrule_ancient_key_chain",
    "name": "Ancient Key Chain",
    "description": "A relic from the Temple of the First Light, this key chain allows the wielder to unlock sealed doors and hidden chambers. When activated, it emits a faint glow and whispers the names of forgotten temples.",
    "category": "equipment",
    "price": 1100,
    "icon": "🔑",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Grants 10% chance to unlock hidden doors",
      "Reveals 3 random temple locations on map",
      "Minor buffs: +5% movement speed while carrying"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 4
  },
  "hyrule_ancient_keyring": {
    "id": "hyrule_ancient_keyring",
    "name": "Ancient Keyring of the Three",
    "description": "A relic from the lost temple of the Triforce’s origin. Carries the essence of the Triumphant Blade’s power and grants the user temporary access to sealed chambers. Each keyring contains a fragment of one of the Triforce’s powers.",
    "category": "equipment",
    "price": 1100,
    "icon": "🔑",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Grants 5% chance to break locked doors",
      "Reveals Triforce fragments in enemy inventory",
      "Restores 20% HP on use of Triforce abilities"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 7
  },
  "hyrule_ancient_lockpick": {
    "id": "hyrule_ancient_lockpick",
    "name": "Triforce Keyblade",
    "description": "A blade forged from the last fragment of the Triforce. It deals 50% more damage to enemies with enchanted armor and unlocks hidden temple doors with a single strike.",
    "category": "equipment",
    "price": 1100,
    "icon": "🗡",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+50% damage to armored foes",
      "Unlocks temple doors with 1 hit",
      "Deals 20% extra damage when wielded in conjunction with a Triforce item"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "hyrule_ancient_mirage_sword": {
    "id": "hyrule_ancient_mirage_sword",
    "name": "Mirage Blade of the Silent Temple",
    "description": "A blade forged from the fractured reflections of the Temple of the Forgotten King. It glows faintly in dim light and strikes with a chilling precision that silences nearby enemies’ shouts.",
    "category": "equipment",
    "price": 1100,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Inflicts 20% bonus damage on invisible or shadowed foes",
      "Reduces enemy evasion by 30% for 5 seconds after each hit",
      "Grants a 10% chance to trigger a silent teleportation to a nearby temple"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6
  },
  "hyrule_ancient_shield_bane": {
    "id": "hyrule_ancient_shield_bane",
    "name": "Ancient Shield of the Bane",
    "description": "This shield was forged in the ruins of the Temple of the Forgotten King. It absorbs magical and physical damage with brutal efficiency.",
    "category": "equipment",
    "price": 1100,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reduces incoming damage by 25%",
      "Grants immunity to critical hits for 1 turn after taking damage",
      "When equipped, enemies must make a 20% chance roll to strike the wearer"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "hyrule_ancient_temple_echo": {
    "id": "hyrule_ancient_temple_echo",
    "name": "Echo of the Sacred Vault",
    "description": "Whispers of the ancient temple’s guardian echo through your soul, granting temporary resilience against divine attacks. When struck by a sacred beam, the item recharges your stamina for 3 seconds.",
    "category": "equipment",
    "price": 1100,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Resists divine damage by 30%",
      "Restores 30% stamina on hit from sacred beam",
      "Grants 20% speed bonus during temple exploration"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "hyrule_ancient_temple_heart": {
    "id": "hyrule_ancient_temple_heart",
    "name": "Heart of the Fallen Temple",
    "description": "A relic pulsing with the energy of a collapsed temple’s core. Wields immense power but demands sacrifice to wield. Increases HP regeneration and grants temporary invulnerability during critical strikes.",
    "category": "equipment",
    "price": 1100,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores 30 HP per second while active",
      "Grants 20% chance to dodge attacks on hit",
      "When struck, absorbs 50% of damage and deals 100% back as elemental shock"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 7
  },
  "hyrule_ancient_temple_heart_core": {
    "id": "hyrule_ancient_temple_heart_core",
    "name": "Fractured Atrium Heart Core",
    "description": "A pulsating relic from the shattered temple core, its energy destabilizes reality yet grants temporary resistance to temporal distortions. Wielders report visions of lost Hyrulean history.",
    "category": "equipment",
    "price": 1100,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Distortion Resistance +20%",
      "Visions of Forgotten Hyrulean Lore (passive)",
      "Short-term Reality Stabilization (15s cooldown)"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "hyrule_ancient_temple_key": {
    "id": "hyrule_ancient_temple_key",
    "name": "Temple Echoes Pendant",
    "description": "Worn by those who dare enter the forgotten sanctums of Hyrules ancient temples. This pendant resonates with the echoes of forgotten gods and grants the wearer temporary visions of temple secrets.",
    "category": "equipment",
    "price": 5600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% chance to reveal hidden temple doors when entering",
      "+5% damage against ancient temple guardians",
      "Grants temporary immunity to psychic illusions"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "hyrule_ancient_temple_key_iron": {
    "id": "hyrule_ancient_temple_key_iron",
    "name": "Iron Key of the Forgotten Vault",
    "description": "A forged key carved from temple stone and ancient iron. It opens sealed chambers and triggers ancient mechanisms. Each use consumes 10% of the user’s stamina.",
    "category": "equipment",
    "price": 1100,
    "icon": "🔐",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Opens locked doors or chests",
      "Activates ancient traps or mechanisms",
      "Depletes 10% stamina per use"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 4
  },
  "hyrule_ancient_temple_shard": {
    "id": "hyrule_ancient_temple_shard",
    "name": "Echo of the Temple’s Heart",
    "description": "A fractured relic from the depths of the Temple of Time, humming with echoes of forgotten gods. When worn, it whispers truths of the past to those who listen.",
    "category": "equipment",
    "price": 1100,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants 10% chance to reveal a hidden path or secret room when entering a temple",
      "Restores 20% HP when entering a temple room with 10 or more torches",
      "Temporarily increases damage dealt by magic weapons by 15%"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "hyrule_ancient_temple_shield": {
    "id": "hyrule_ancient_temple_shield",
    "name": "Guardian’s Hollow Shield",
    "description": "Carved from the heartwood of the Temple of Time, this shield absorbs magical strikes and grants a chance to reflect enemy attacks. Its aura hums with the memory of forgotten guardians.",
    "category": "equipment",
    "price": 1100,
    "icon": "🛡",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs 30% of magical damage",
      "10% chance to reflect enemy attack",
      "Grants +5% defense against all elemental damage"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "hyrule_ancient_temple_torch": {
    "id": "hyrule_ancient_temple_torch",
    "name": "Ember of the Fractured Atrium",
    "description": "Glows with the fractured essence of the Temple of Time’s collapsing halls. Burns brighter in unstable reality, illuminating darkened paths and revealing hidden glyphs. Emits a low hum that soothes the mind during psychic surges.",
    "price": 1100,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Illuminates dark areas with a warm, flickering glow",
      "Reduces mental fatigue by 30% during psychic events",
      "Reveals hidden glyphs when held near ancient walls"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "hyrule_animal_nexus_pearl": {
    "id": "hyrule_animal_nexus_pearl",
    "name": "Animal Nexus Pearl",
    "description": "A sacred gem that binds primal spirits",
    "price": 1100,
    "icon": "🐉",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Increases the chance of capturing beasts by 20%",
      "Grants temporary control over one primal creature",
      "Can be fused with other materials to create hybrid weapons",
      "Causes minor hallucinations during use",
      "Must be purified after 3 uses to avoid corruption"
    ],
    "vendor": "hyrule",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 6
  },
  "hyrule_blood_moss_amber": {
    "id": "hyrule_blood_moss_amber",
    "name": "Blood Moss Amber",
    "description": "A glowing, ancient resin collected from the depths of the Gerudo Desert. Infuses your weapon with primal fury, granting a short burst of devastating power at the cost of stamina. Only the bravest can wield it.",
    "price": 5200,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Fury Surge: +50% damage for 5 seconds after using a melee attack",
      "Stamina Drain: -20% stamina during Fury Surge",
      "Primal Aura: Allies nearby gain +10% attack speed for 3 seconds"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7
  },
  "hyrule_coral_fleet_key": {
    "id": "hyrule_coral_fleet_key",
    "name": "Coral Fleet Key",
    "description": "A brass key forged by the Noki Elders to unlock the hidden vaults of the Coral Fleet. Carved with symbols of ancient trade routes, it opens doors to forgotten ports and underwater temples. But each use causes the key to lose a bit of its luster, as if the sea itself is trying to reclaim it.",
    "price": 270,
    "icon": "🌊",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Opens underwater vaults and hidden ports",
      "Causes 1d4 temporary weakness to aquatic creatures",
      "Can be used to unlock the Coral Fleet’s hidden cargo",
      "If used outside the fleet’s controlled waters, it causes 1d2 damage to the user",
      "Worn for too long causes the user to feel a strange pull toward the sea",
      "Cannot be used if the user is not a trusted trader with the Noki Elders"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 4
  },
  "hyrule_dark_temple_key": {
    "id": "hyrule_dark_temple_key",
    "name": "Dark Temple Key",
    "description": "A cursed artifact forged in the heart of the Abyssal Temple. Grants the ability to open sealed doors and summon shadowy guardians for brief combat support.",
    "category": "equipment",
    "price": 1100,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Opens locked doors (1 use)",
      "Summons a shadow guardian for 15 sec (weakens enemies)",
      "Grants 5% bonus damage to dark-themed enemies"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 4
  },
  "hyrule_earth_land_item_name_here": {
    "id": "hyrule_earth_land_item_name_here",
    "name": "Ice Wall Fragment",
    "description": "A shard from the frozen vault beneath Earth Land’s hidden glacier",
    "price": 270,
    "icon": "❄",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Can be used to construct ice barriers",
      "Temporarily freezes enemies within 5 meters",
      "Causes 30% reduction in stamina recovery",
      "Made by: Kremling Krew"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3
  },
  "hyrule_earth_link_item": {
    "id": "hyrule_earth_link_item",
    "name": "Sunken Archive Key",
    "description": "A relic from the lost archives beneath Isle Delfino",
    "price": 5200,
    "icon": "📜",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Opens hidden passage between Hyrule and Earth Land",
      "Grants 10% increased XP from all sources",
      "Triggers random world event upon use",
      "Made by: Kremling Krew"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 7
  }
};
