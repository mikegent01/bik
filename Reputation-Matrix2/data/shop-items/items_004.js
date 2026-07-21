// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_004 = {
  "ashen_mask": {
    "id": "ashen_mask",
    "name": "Ashen Mask",
    "description": "A gray porcelain mask said to be made from the ash of a forgotten god. Your face hides a darker face.",
    "category": "forbidden",
    "price": 80000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Wear: assume another's identity perfectly for 1 hour/day",
      "Each use steals a sliver of empathy (-2 Wisdom temporary)",
      "Attracts necromancers and bounty hunters"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Obsidian Sarcophagus",
    "levelRequirement": 10
  },
  "assassination_contract": {
    "id": "assassination_contract",
    "name": "Assassination Contract",
    "description": "A highly illegal contract to eliminate a specific target. Buyer assumes all risk.",
    "category": "forbidden",
    "price": 25000,
    "icon": "🗡️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Professional assassin targets 1 specific target within 6 months",
      "Guaranteed 90% success rate (DM decides outcome)",
      "Buyer's name hidden from assassin; perfect plausible deniability",
      "If failed, contract is void and all parties deny involvement"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Untraceable Dead Drop",
    "levelRequirement": 8
  },
  "assassins_creed_blade": {
    "id": "assassins_creed_blade",
    "name": "Hidden Blade",
    "description": "A blade for stealth assassinations.",
    "category": "equipment",
    "price": 15000,
    "icon": "🗡️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Surprise attack: 2d6 piercing + poison option",
      "Hidden, advantage on conceal",
      "Retractable"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Wrist Case",
    "levelRequirement": 4
  },
  "astral_projection_beacon": {
    "id": "astral_projection_beacon",
    "name": "Astral Projection Beacon",
    "description": "A silver rod that anchors your soul to the Material Plane.",
    "price": 385000,
    "icon": "🕯️",
    "stock": 5,
    "rarity": "legendary",
    "effects": [
      "Cast Astral Projection at will, but body remains anchored",
      "If killed in Astral Plane, instantly return to body",
      "Made by: Githyanki Warlocks"
    ],
    "vendor": "astral_traders",
    "shippedBy": "Thought Sending",
    "levelRequirement": 14
  },
  "astral_projection_orb": {
    "id": "astral_projection_orb",
    "name": "Astral Projection Orb (Psionic)",
    "description": "Enables safe astral travel to other planes without bodily risk.",
    "price": 470000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Project astral form for 4 hours",
      "Body remains protected",
      "Made by: Astral Nomads"
    ],
    "vendor": "plane_walkers_guild",
    "shippedBy": "Silver Cord",
    "levelRequirement": 18
  },
  "avalon_court_fairy_nectar_drink_recipe": {
    "id": "avalon_court_fairy_nectar_drink_recipe",
    "name": "Recipe: Avalon Court Fairy Nectar Drink",
    "description": "Sparkling nectar from fey flowers for enchantment.",
    "price": 9500,
    "icon": "🥤",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Teaches recipe: Infuse flowers (20 min); drink to gain advantage on Charisma (Deception) with fey for 3 hours and minor charm aura",
      "Requires: Fey nectar; bubbly magic",
      "Fairies toast with you",
      "Made by: Court Mixologists"
    ],
    "vendor": "avalon_court_garden",
    "shippedBy": "Nectar Nectar Note",
    "levelRequirement": 6
  },
  "avalon_court_fairy_ring_premium": {
    "id": "avalon_court_fairy_ring_premium",
    "name": "Avalon Court Fairy Ring (Premium)",
    "description": "Portable portal to fey spots.",
    "price": 21000,
    "icon": "🍄",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Teleport to known fey location once per week (100 miles)",
      "Fey charm: +1 Charisma with fey",
      "Ring attracts fairies (helpful or tricky)",
      "Made by: Avalon Enchanters"
    ],
    "vendor": "avalon_court_garden",
    "shippedBy": "Mushroom Cap",
    "levelRequirement": 6
  },
  "avalon_court_fey_flower_infuser": {
    "id": "avalon_court_fey_flower_infuser",
    "name": "Avalon Court Fey Flower Infuser",
    "description": "Infuser for nectar from fey blooms.",
    "category": "equipment",
    "price": 8500,
    "icon": "🥤",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Infuses magic; +1 to Charisma for fey drinks",
      "Flowers don't wilt; whimsical bubbles",
      "Attracts pixies",
      "Made by: Court Glassblowers"
    ],
    "vendor": "avalon_court_garden",
    "shippedBy": "Fey Flask Fold",
    "levelRequirement": 6
  },
  "avalon_court_feywing_feather_boa": {
    "id": "avalon_court_feywing_feather_boa",
    "name": "Avalon Court Feywing Feather Boa",
    "description": "Feathery boa from enchanted birds.",
    "category": "equipment",
    "price": 17500,
    "icon": "🧣",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Charisma (Deception) with fey",
      "Boa allows short flight bursts (10ft)",
      "Feathers molt and tickle",
      "Made by: Court Fashionistas"
    ],
    "vendor": "avalon_court_gala",
    "shippedBy": "Wing Wrap",
    "levelRequirement": 6
  },
  "bag_of_confetti": {
    "id": "bag_of_confetti",
    "name": "Bag of Confetti",
    "description": "A small bag of paper confetti. Use to fill holes in the world, or just make a mess.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎊",
    "stock": 500,
    "rarity": "common",
    "effects": [
      "Throw to obscure vision slightly",
      "Great for parties",
      "Environmentally biodegradable"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1
  },
  "bag_of_tricks_minor": {
    "id": "bag_of_tricks_minor",
    "name": "Bag of Tricks (Minor)",
    "description": "Pulls out a small animal companion... sometimes useful, sometimes not.",
    "category": "equipment",
    "price": 22000,
    "icon": "🎒",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Once per short rest: Reach in and pull out a random small beast (CR 1/4 or less, lasts 1 hour)",
      "50% chance it's a cat that just naps instead of helping",
      "Bag smells like wet fur after use",
      "Compatible with druids – they get +1 to Animal Handling with it"
    ],
    "vendor": "wandering_circus",
    "shippedBy": "Furry-Lined Box",
    "levelRequirement": 7
  },
  "bag_of_useless_items": {
    "id": "bag_of_useless_items",
    "name": "Bag of (Mostly) Useless Items",
    "description": "A bag of tricks that got mislabeled at the factory.",
    "category": "equipment",
    "price": 7200,
    "icon": "🎒",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Pull random mundane item (spoon, boot, live chicken, etc)",
      "5% chance it's actually useful for your current situation",
      "Items disappear after 1 hour",
      "No refunds, no guarantees, no dignity"
    ],
    "vendor": "discount_wonders",
    "shippedBy": "Carrier Pigeon",
    "levelRequirement": 5
  },
  "balor_core_detonator": {
    "id": "balor_core_detonator",
    "name": "Balor Core Detonator (Remote)",
    "description": "A device that triggers a Balor's death throes on command.",
    "price": 835000,
    "icon": "💣",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Attach to a Balor to detonate its death throes at will",
      "Balor gets no save; deals full 100 damage to all within 100ft",
      "Made by: Demon-Binders Anonymous"
    ],
    "vendor": "demon_weapons",
    "shippedBy": "Fireball Express",
    "levelRequirement": 18
  },
  "banana_peel": {
    "id": "banana_peel",
    "name": "Used Banana Peel",
    "description": "Nature's perfect trap. Biodegradable hazard.",
    "category": "consumables",
    "price": 100,
    "icon": "🍌",
    "stock": 300,
    "rarity": "common",
    "effects": [
      "Place on ground (action)",
      "Anyone stepping on it makes DEX save DC 12 or falls prone"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Compost Express",
    "levelRequirement": 1
  },
  "banana_peel_bunch": {
    "id": "banana_peel_bunch",
    "name": "Banana Peel Cluster",
    "description": "A bundle of magically slippery peels. Classic prank, timeless chaos.",
    "category": "consumables",
    "price": 4000,
    "icon": "🍌",
    "stock": 20,
    "rarity": "common",
    "effects": [
      "Throw: 10ft radius, DEX save or fall prone",
      "Lasts 3 rounds, then peels vanish",
      "Monkeys become hostile if they see you waste bananas",
      "Slippery surface counts as difficult terrain"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Fruit Basket",
    "levelRequirement": 1
  },
  "bandit_mask": {
    "id": "bandit_mask",
    "name": "Bandit's Smiling Mask",
    "description": "A white mask that grins eternally. Steals coins from those who trust you.",
    "category": "equipment",
    "price": 9000,
    "icon": "😁",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Advantage on Sleight of Hand vs humanoids",
      "Once per day: Steal 1d20gp from touched creature",
      "Mask whispers gambling tips",
      "You can't stop smiling while wearing it"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Coin Purse",
    "levelRequirement": 2
  },
  "bandits_highway_ambush_kit_premium": {
    "id": "bandits_highway_ambush_kit_premium",
    "name": "Bandits Highway Ambush Kit ",
    "description": "Set traps for travelers.",
    "price": 9500,
    "icon": "🎒",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Kit: Set snare DC 12 DEX or prone",
      "Steal 1d10 gp on success",
      "Attracts lawmen",
      "Made by: Road Robbers"
    ],
    "vendor": "bandits_camp",
    "shippedBy": "Trap Bag",
    "levelRequirement": 5
  },
  "bandits_highway_robbers_rations_recipe": {
    "id": "bandits_highway_robbers_rations_recipe",
    "name": "Recipe: Bandits Highway Robbers Rations ",
    "description": "Stolen-flavor rations for quick getaways.",
    "price": 5000,
    "icon": "🥪",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Scavenge and pack (10 min); eat to gain +10 ft speed for escape (1 hour)",
      "Requires: Looted food; shady",
      "Robbed taste – mixed",
      "Made by: Bandit Scavengers"
    ],
    "vendor": "bandits_camp",
    "shippedBy": "Stolen Snack Summary",
    "levelRequirement": 5
  },
  "bandits_highway_robbery_insurance": {
    "id": "bandits_highway_robbery_insurance",
    "name": "Bandits Highway Robbery Insurance",
    "description": "Insure against being robbed.",
    "category": "services",
    "price": 8500,
    "icon": "💰",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "If robbed, get 50% of gold back (once per 7 days)",
      "Bandits know you're insured and target you more often",
      "You get a 'Rob Me' sticker that glows in the dark",
      "Made by: Bandits Insurance Co."
    ],
    "vendor": "bandits",
    "shippedBy": "Highway Robbery",
    "levelRequirement": 5
  },
  "bandits_highway_robbery_insurance_premium": {
    "id": "bandits_highway_robbery_insurance_premium",
    "name": "Bandits Highway Robbery Insurance (Premium)",
    "description": "Insure against robbery (premium).",
    "category": "premium",
    "price": 12500,
    "icon": "💰",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "If robbed, get 75% gold back (once per week)",
      "Bandits know you're insured and target you more",
      "You get a 'Rob Me Premium' badge",
      "Made by: Bandits Premium Insurance"
    ],
    "vendor": "bandits",
    "shippedBy": "Highway Robbery",
    "levelRequirement": 5
  },
  "bandits_road_rag_cloak": {
    "id": "bandits_road_rag_cloak",
    "name": "Bandits Road Rag Cloak ",
    "description": "Tattered cloak for highway folk.",
    "price": 9500,
    "icon": "🧥",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Deception as a beggar",
      "Cloak hides small stolen goods",
      "Rags smell musty",
      "Made by: Bandit Scroungers"
    ],
    "vendor": "bandits_roadside",
    "shippedBy": "Rag Roll",
    "levelRequirement": 5
  },
  "bandits_roadside_scavenge_chopper": {
    "id": "bandits_roadside_scavenge_chopper",
    "name": "Bandits Roadside Scavenge Chopper ",
    "description": "Rough chopper for looted rations.",
    "category": "equipment",
    "price": 5000,
    "stock": 12,
    "icon": "🥩",
    "rarity": "uncommon",
    "effects": [
      "Chops scavenged goods; +1 to Deception with 'stolen' food",
      "Quick and dirty",
      "Dull blade",
      "Made by: Bandit Bladesmiths"
    ],
    "vendor": "bandits_camp",
    "shippedBy": "Loot Chop Load",
    "levelRequirement": 5
  },
  "banjo_kazooie_egg": {
    "id": "banjo_kazooie_egg",
    "name": "Kazooie Egg Shooter",
    "description": "Shoots eggs as projectiles.",
    "category": "equipment",
    "price": 18000,
    "icon": "🥚",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shoot egg: 1d8 bludgeoning, special types (fire, ice)",
      "5 eggs per short rest",
      "Can hatch helpers"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Egg Crate",
    "levelRequirement": 5
  },
  "banshees_wail_suppressor": {
    "id": "banshees_wail_suppressor",
    "name": "Banshee's Wail Suppressor",
    "description": "A pair of spectral earplugs that dampen deathly screams.",
    "price": 215000,
    "icon": "🎧",
    "stock": 10,
    "rarity": "epic",
    "effects": [
      "Immunity to thunder damage and fear effects for 30 days",
      "Can silence one creature within 30ft as a bonus action",
      "Made by: Silent Sisters"
    ],
    "vendor": "spirit_tailor",
    "shippedBy": "Ghostly Whisper",
    "levelRequirement": 12
  },
  "bean_stone": {
    "id": "bean_stone",
    "name": "Bean Stone",
    "description": "A peculiar stone from the Beanbean Kingdom.",
    "category": "curiosities",
    "price": 10000,
    "icon": "🫘",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Vibrates near beans",
      "Paperweight"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Box",
    "levelRequirement": 1
  },
  "beanbean_academy_item": {
    "id": "beanbean_academy_item",
    "name": "Gehenna Academy Halos",
    "description": "A halo shaped like a stylized anime eye that grants focus and power",
    "category": "equipment",
    "price": 5000,
    "icon": "🎭",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Grants 20% accuracy in ranged attacks",
      "Grants immunity to fear effects",
      "May cause enemies to become distracted for 2 turns",
      "Made by: Gehenna Academy",
      "Can be used to unlock hidden rooms in dungeons",
      "Increases maximum HP by 100"
    ],
    "vendor": "beanbean",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 8
  },
  "beanbean_animatopia_primal_amulet": {
    "id": "beanbean_animatopia_primal_amulet",
    "name": "Primal Amulet of Animatopia",
    "description": "A carved obsidian pendant depicting a snarling wolf. Said to grant connection to the wild.",
    "category": "equipment",
    "price": 8000,
    "icon": "🐺",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Grants +5 to Charisma when interacting with Animatopia tribes",
      "Increases damage dealt by 10% against predatory creatures",
      "Reduces incoming damage from nature-based attacks by 20%",
      "Causes a random animal companion to appear beside the wearer for 1 minute"
    ],
    "vendor": "beanbean",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 12
  },
  "beanbean_brooch": {
    "id": "beanbean_brooch",
    "name": "Beanstar Brooch",
    "description": "A pin containing the essence of the Beanstar. Grants calmness.",
    "category": "equipment",
    "price": 220000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Immunity to Fury/Rage effects",
      "Advantage on all CHA checks",
      "Discount 20% at all shops (Passive)",
      "Can speak Beanbean language"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Velvet Box",
    "levelRequirement": 6
  },
  "beanbean_coin": {
    "id": "beanbean_coin",
    "name": "Beanbean Coin",
    "description": "Currency from a neighboring kingdom. Collectors item here.",
    "category": "curiosities",
    "price": 2500,
    "icon": "🪙",
    "stock": 500,
    "rarity": "common",
    "effects": [
      "Worthless in shops",
      "Pretty"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Envelope",
    "levelRequirement": 1
  },
  "beanbean_cosmic_jester_mask": {
    "id": "beanbean_cosmic_jester_mask",
    "name": "Cosmic Jesters Mask",
    "description": "A grinning porcelain mask with mismatched eyes. Wears it at your own risk.",
    "category": "equipment",
    "price": 7000,
    "icon": "💀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants +1 to all stats for 5 minutes",
      "Causes a random status effect to be inflicted on nearby enemies each turn",
      "Has a 50% chance of inflicting Jesters Luck on the wearer, which grants immunity to all status effects for one round",
      "After 3 uses, causes the wearer to become uncontrollable and act erratically for 1 hour."
    ],
    "vendor": "beanbean",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 9
  },
  "beanbean_courier_post_item": {
    "id": "beanbean_courier_post_item",
    "name": "Piranha Plant Post Courier Pack",
    "description": "A sealed package from the courier service that never gets lost",
    "price": 100,
    "icon": "📦",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Delivers messages instantly across kingdoms",
      "Grants 10% chance to bypass enemy checkpoints",
      "May trigger a courier ambush if used in combat",
      "Made by: Piranha Plant Post",
      "Consumes 2 charges per use",
      "Reduces travel time by 50% for non-combat routes"
    ],
    "vendor": "beanbean",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 1
  },
  "beanbean_delfino_court_glove": {
    "id": "beanbean_delfino_court_glove",
    "name": "Courtly Gloves of the Isle Delfino",
    "description": "Elegant gloves that allow discreet communication with Shine Sprites",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhances charm and persuasion by 15%",
      "Causes minor stuttering during formal events",
      "Reveals secret paths to Hotel Delfino",
      "Made by: Mushroom Regency",
      "Triggers Peasley Financial Scandal if used during negotiations",
      "Requires 5 Beanbean coins to activate"
    ],
    "vendor": "beanbean",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "beanbean_halopod_helmet": {
    "id": "beanbean_halopod_helmet",
    "name": "Halopod Helmet",
    "description": "Designed for the elite of Kivotos’ academic elite, this helmet grants enhanced reflexes and visual distortion for combat. Its halo glow pulses with the student’s mental state, making it a perfect tool for chaos and control. One user reported being mistaken for a ghost by a security bot.",
    "category": "equipment",
    "price": 3800,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% dodge chance",
      "Visual distortion grants temporary blindness to enemies",
      "Consumes 20% stamina per use",
      "Halos glow brighter during stress or confusion",
      "Crafted by: Kivotos Student Corps"
    ],
    "vendor": "beanbean",
    "shippedBy": "Bob-omb Rush Delivery",
    "levelRequirement": 6
  },
  "beanbean_item_name_here": {
    "id": "beanbean_item_name_here",
    "name": "Delfino Daze",
    "description": "A shimmering tropical pendant that hums with forgotten memories",
    "category": "equipment",
    "price": 3500,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Grants temporary flight for 30 seconds when worn",
      "Causes minor dizziness during high speed movement",
      "Reveals hidden paths in the Isle Delfino jungle",
      "Made by: Mushroom Regency",
      "Triggers Peasley Financial Scandal rumor if worn during diplomatic events",
      "Only usable in regions with Shine Sprites"
    ],
    "vendor": "beanbean",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "beanbean_kingdom_bean_pod_pants": {
    "id": "beanbean_kingdom_bean_pod_pants",
    "name": "Beanbean Kingdom Bean Pod Pants",
    "description": "Pants reinforced with magical bean fibers.",
    "price": 14500,
    "icon": "👖",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Dexterity saves vs. falls",
      "Pants grow minor vines (climbing aid)",
      "Pods pop during jumps (noisy)",
      "Made by: Bean Weavers"
    ],
    "vendor": "beanbean_kingdom_farm",
    "shippedBy": "Pod Pocket",
    "levelRequirement": 5
  },
  "beanbean_kingdom_bean_pod_peeler": {
    "id": "beanbean_kingdom_bean_pod_peeler",
    "name": "Beanbean Kingdom Bean Pod Peeler",
    "description": "Peeler for tough bean pods in soup.",
    "category": "equipment",
    "price": 6000,
    "icon": "🍲",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Peels pods easily; +1 to growth recipes",
      "Pods don't burst prematurely",
      "Sticky sap residue",
      "Made by: Kingdom Peelers"
    ],
    "vendor": "beanbean_kingdom_farm",
    "shippedBy": "Pod Peel Pouch",
    "levelRequirement": 5
  },
  "beanbean_kingdom_beanstalk_climber_service": {
    "id": "beanbean_kingdom_beanstalk_climber_service",
    "name": "Beanbean Kingdom Beanstalk Climber Service",
    "description": "Train for vertical adventures.",
    "price": 10000,
    "icon": "🌿",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Athletics for climbing 1 week",
      "Climb speed +10ft",
      "Beans cause gas (minor distraction)",
      "Made by: Bean Climbers"
    ],
    "vendor": "beanbean_kingdom_tower",
    "shippedBy": "Vine Rope",
    "levelRequirement": 5
  },
  "beanbean_kingdom_coin_pouch": {
    "id": "beanbean_kingdom_coin_pouch",
    "name": "Beanbean Kingdom Coin Pouch",
    "description": "A pouch that converts foreign currency into local Beanbean coins at a favorable rate. Sometimes.",
    "category": "curiosities",
    "price": 2500,
    "icon": "💰",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Once per day, convert up to 100 gp of foreign currency into 110 gp of Beanbean coins",
      "On a roll of 1, the pouch eats the money",
      "Emits a faint bean smell"
    ],
    "vendor": "Beanbean Kingdom",
    "shippedBy": "Express Mail",
    "levelRequirement": 1
  },
  "beanbean_kingdom_magic_bean_soup_recipe": {
    "id": "beanbean_kingdom_magic_bean_soup_recipe",
    "name": "Recipe: Beanbean Kingdom Magic Bean Soup",
    "description": "Soup from enchanted beans for growth spurts.",
    "price": 7000,
    "icon": "🍲",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Boil beans (25 min); eat to gain temporary +1 size (advantage on Strength, disadvantage on Dex) for 1 hour",
      "Requires: Magic beans; beanstalk dreams",
      "Grows your appetite",
      "Made by: Kingdom Soup Makers"
    ],
    "vendor": "beanbean_kingdom_farm",
    "shippedBy": "Beanstalk Broth Book",
    "levelRequirement": 5
  },
  "beanbean_kingdom_pressure_cooker": {
    "id": "beanbean_kingdom_pressure_cooker",
    "name": "Beanbean Kingdom Pressure Cooker",
    "description": "Cooks beans at high pressure (dangerous).",
    "category": "equipment",
    "price": 13500,
    "icon": "💥",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Cooks bean recipes in 5 minutes (high pressure)",
      "10% chance it explodes: deals 1d6 thunder damage in 10ft radius (DEX save DC 12)",
      "Beans are perfectly cooked: remove one level of exhaustion when eaten",
      "Made by: Beanbean Royal Engineers"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Beanstalk Express",
    "levelRequirement": 5
  },
  "beanbean_kingdom_recipe_bean_burrito": {
    "id": "beanbean_kingdom_recipe_bean_burrito",
    "name": "Recipe: Beanbean Kingdom Bean Burrito",
    "description": "A burrito that fuels your... propulsion.",
    "price": 8500,
    "icon": "📜",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Grants +10 speed for 1 hour (bean power)",
      "Disadvantage on Stealth checks (musical accompaniment)",
      "Immune to being knocked prone (gas provides stability)",
      "Made by: Beanbean Royal Kitchen"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Beanstalk Express",
    "levelRequirement": 5
  },
  "beanbean_kingdom_recipe_royal_bean_casserole": {
    "id": "beanbean_kingdom_recipe_royal_bean_casserole",
    "name": "Recipe: Beanbean Kingdom Royal Bean Casserole",
    "description": "The king of bean dishes.",
    "price": 13500,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Grants +1 to Constitution saves for 8 hours (fiber)",
      "You feel royal: advantage on Charisma with bean enthusiasts",
      "Gas is noble: disadvantage on Stealth, advantage on Intimidation",
      "Made by: Beanbean Royal Chefs"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Bean Vault",
    "levelRequirement": 6
  },
  "beanbean_kingdom_speed_beans": {
    "id": "beanbean_kingdom_speed_beans",
    "name": "Beanbean Kingdom Speed Beans",
    "description": "Magical beans that make you fast and gassy.",
    "category": "equipment",
    "price": 16500,
    "icon": "🫘",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Once per day: Gain +10 ft speed for 1 hour",
      "Can Dash as a bonus action once during the duration",
      "Disadvantage on Stealth checks due to constant bean-based flatulence",
      "Made by: Beanbean Royal Kitchen"
    ],
    "vendor": "beanbean_kingdom_market",
    "shippedBy": "Beanstalk Express",
    "levelRequirement": 5
  },
  "beanbean_kingdom_wario_beanbag_chair": {
    "id": "beanbean_kingdom_wario_beanbag_chair",
    "name": "Beanbean Kingdom Wario Beanbag Chair",
    "description": "A beanbag shaped like Wario's head.",
    "category": "equipment",
    "price": 5200,
    "icon": "🪑",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Sit in chair: advantage on saves vs. exhaustion from resting (very comfortable)",
      "Chair is huge: disadvantage on Stealth (you're sitting on Wario's face)",
      "Beans leak: you smell like beans for 1 hour after use",
      "Made by: Beanbean Kingdom (Wario Furniture)"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Bean Vault",
    "levelRequirement": 5
  },
  "beanbean_kingdom_wario_currency_exchange": {
    "id": "beanbean_kingdom_wario_currency_exchange",
    "name": "Beanbean Kingdom Wario Currency Exchange",
    "description": "Exchange gold for Wario Coins (worthless).",
    "category": "services",
    "price": 4500,
    "icon": "💱",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Exchange 100 gp for 100 Wario Coins (only accepted in Wario Land)",
      "Wario Coins are chocolate: you can eat them for 1d4 temporary HP",
      "Shopkeepers laugh at you: disadvantage on Charisma",
      "Made by: Beanbean Kingdom (Wario Exchange Rate)"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Bean Vault",
    "levelRequirement": 4
  },
  "beanbean_kingdom_wario_wario_bean": {
    "id": "beanbean_kingdom_wario_wario_bean",
    "name": "Beanbean Kingdom Wario-Wario Bean",
    "description": "A bean that makes you say 'Wario' twice as much.",
    "category": "equipment",
    "price": 3800,
    "icon": "🫘",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Eat bean: you must say 'Wario' before each sentence for 1 hour (disadvantage on Charisma if you forget)",
      "Gain +1 to Strength checks (Wario energy)",
      "Beans cause gas: 10ft cloud of disadvantage on Stealth, advantage on Intimidation",
      "Made by: Beanbean Kingdom (Licensed by Wario)"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Beanstalk Express",
    "levelRequirement": 4
  },
  "beanbean_koopa_coins": {
    "id": "beanbean_koopa_coins",
    "name": "Koopa Coins",
    "description": "These coins were minted during the banking collapse of the Koopa Empire. Their value fluctuates wildly, as they are now traded between smugglers, bureaucrats, and rogue academies. Some say the coins whisper to those who hold them long enough—others say they are cursed.",
    "price": 750,
    "icon": "💰",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "1d4 coin value increase on roll",
      "20% chance to trigger currency fluctuation",
      "Can be exchanged for rare items in Kivotos black markets",
      "Requires 1 hour to process transaction",
      "Shipped by: Bob-omb Rush Delivery",
      "Lore: Once used to bribe a ghost in the Beanbean sewers"
    ],
    "vendor": "beanbean",
    "shippedBy": "Bob-omb Rush Delivery",
    "levelRequirement": 2
  },
  "beanbean_lucky_coin": {
    "id": "beanbean_lucky_coin",
    "name": "Lucky Beanbean Coin",
    "description": "A golden coin engraved with a smiling face. Rumored to bring good fortune.",
    "price": 250,
    "icon": "🪙",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Grants +3 luck for one hour",
      "Has a 10 chance to double the value of the next gold coin earned"
    ],
    "vendor": "beanbean",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 1
  },
  "beanbean_metal_tongue": {
    "id": "beanbean_metal_tongue",
    "name": "Tongue of the Iron Legion",
    "description": "",
    "category": "equipment",
    "price": 4000,
    "icon": "⚙",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants +2d4 armor bonus to melee attacks",
      "Cannot be used in non-combat situations without causing mechanical backlash",
      "Suffers -1d6 damage when used in silence or low light",
      "Only usable by those who have served under the Iron Legion banner",
      "Emits low hum that disrupts enemy spellcasting",
      "Crafted by Fawfuls Fury with secret iron ore from the Midlands"
    ],
    "vendor": "beanbean",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 6
  },
  "beanbean_mushroom_mantle": {
    "id": "beanbean_mushroom_mantle",
    "name": "Fungal Mantle of Whispering Roots",
    "description": "",
    "category": "equipment",
    "price": 1200,
    "icon": "🍄",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Grants +2 to stealth checks when moving through dense undergrowth",
      "Slightly slows movement speed by 10% when in combat",
      "Emits faint fungal scent that confuses hostile creatures for 1 round",
      "Wears off after 24 hours of prolonged exposure to sunlight",
      "Requires attunement with a mushroom cultist",
      "Crafted by: Fungi Guilds of the Mushroom Kingdom"
    ],
    "vendor": "beanbean",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 4
  },
  "beanbean_peasley_coins_pouch": {
    "id": "beanbean_peasley_coins_pouch",
    "name": "Peasley Scandal Pouch",
    "description": "A cursed pouch that holds the stolen coins and whispers secrets",
    "price": 1000,
    "icon": "🔮",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Grants temporary immunity to corruption",
      "Causes minor paranoia during use",
      "Reveals hidden locations in Beanbean Kingdom",
      "Made by: Mushroom Regency",
      "Triggers Peasley Financial Scandal if used during diplomatic events",
      "Requires 3 Beanbean coins to activate"
    ],
    "vendor": "beanbean",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "beanbean_peasley_letter": {
    "id": "beanbean_peasley_letter",
    "name": "Peasleys Secret Letter",
    "description": "A sealed letter bearing the royal seal. Its contents are unknown.",
    "price": 5000,
    "icon": "✉",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "When opened, reveals a clue to Toadettes whereabouts",
      "Grants access to a hidden meeting with a high-ranking Beanbean official",
      "Unlocks a secret passage in the royal gardens",
      "Causes all enemies within 5 meters to become confused for 10 seconds"
    ],
    "vendor": "beanbean",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 8
  },
  "beanbean_pipe_tether": {
    "id": "beanbean_pipe_tether",
    "name": "Pipebound Tether of the Koopa Postal",
    "description": "",
    "price": 400,
    "icon": "📦",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Grants 10% chance to detect hidden messages or traps in pipe networks",
      "Can be used to mark locations for future delivery routes",
      "Requires 30 seconds to activate and connect to nearest pipe junction",
      "Fails if used in open air or above ground level",
      "Unlocks special delivery bonuses for high value items",
      "Crafted by: Koopa Postal Delivery Corps"
    ],
    "vendor": "beanbean",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1
  },
  "beanbean_royal_bean_counting": {
    "id": "beanbean_royal_bean_counting",
    "name": "Beanbean Royal Bean Counting Service",
    "description": "Experts count your money... for a fee.",
    "category": "services",
    "price": 8500,
    "icon": "💰",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Counts your gold and gives precise total in 1 minute (normally takes 10)",
      "They take 5% as service fee but find 10% extra you forgot about",
      "You get a certificate of bean-counting authenticity",
      "Made by: Beanbean Royal Accountants"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Bean Counter",
    "levelRequirement": 5
  },
  "beanbean_royal_bean_counting_premium": {
    "id": "beanbean_royal_bean_counting_premium",
    "name": "Beanbean Royal Bean Counting (Premium)",
    "description": "They count your beans very precisely.",
    "category": "premium",
    "price": 14500,
    "icon": "💰",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Counts your gold with 99.9% accuracy (finds 15% extra, takes 7% fee)",
      "You get a framed certificate",
      "You develop a bean-counting tic (disadvantage on checks if you don't count things)",
      "Made by: Beanbean Royal Accountants"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Bean Vault",
    "levelRequirement": 5
  },
  "beanbean_scarlet_crown": {
    "id": "beanbean_scarlet_crown",
    "name": "Crown of the Broken Throne",
    "description": "",
    "category": "equipment",
    "price": 12000,
    "icon": "🏰",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Grants +3d6 bonus to leadership checks",
      "Causes visible tremors in the wearer’s hands during combat",
      "If worn during a diplomatic meeting with the Regal Empire may trigger a royal favor",
      "Wearer must have prior diplomatic experience or risk mental unraveling",
      "May be used to temporarily banish minor magical entities",
      "Fabled relic from the Prince Peasley scandal’s final court session",
      "Shipped by Warp Whistle Transit with a note from the Onyx Hand’s latest courier"
    ],
    "vendor": "beanbean",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 8
  },
  "beanbean_shadowfell_keychain": {
    "id": "beanbean_shadowfell_keychain",
    "name": "Shadowfell Keychain of the Onyx Hand",
    "description": "",
    "category": "equipment",
    "price": 7500,
    "icon": "🔒",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Grants access to one hidden portal in the Shadowfell dimension",
      "Triggers a 50% chance to detect magical corruption when used",
      "Causes minor psychic backlash after 3 uses",
      "Can be enchanted to open multiple portals with extended use",
      "Wears off after 72 hours if not used in the Shadowfell",
      "Crafted by: Orangus Cornelius’s personal workshop",
      "Shipped via: Koopa Postal (Priority Delivery)"
    ],
    "vendor": "beanbean",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7
  },
  "beanbean_team_rock_item": {
    "id": "beanbean_team_rock_item",
    "name": "Remi Coil Airship Boost",
    "description": "A patent-enhanced airship propulsion module that doubles efficiency",
    "price": 12000,
    "icon": "🚀",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Doubles airship speed and range",
      "Grants 50% chance to avoid enemy fire",
      "May cause a system crash if used in high pressure zones",
      "Made by: Team Rocket",
      "Requires airship base to activate",
      "Grants bonus XP for every 1000 meters traveled",
      "Can be used to bypass enemy air defenses"
    ],
    "vendor": "beanbean",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 10
  },
  "beanbean_treasure_inkwell": {
    "id": "beanbean_treasure_inkwell",
    "name": "Inkwell of Whispering Scribes",
    "description": "",
    "price": 750,
    "icon": "🖋",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "When used to write on parchment grants +2d4 insight bonus to spellcasting rolls",
      "Consumes ink from the inkwell itself after use",
      "May cause ink to bleed into the page if caster is under stress",
      "Fails to write if used by non spellcasters",
      "Secretly contains a vial of the Onyx Hand’s last whispered decree",
      "Shipped by Warp Whistle Transit"
    ],
    "vendor": "beanbean",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 3
  },
  "beholder_eye_beam_focus": {
    "id": "beholder_eye_beam_focus",
    "name": "Beholder Eye-Beam Focus Surgery",
    "description": "Magical lens implantation to enhance ray spells.",
    "price": 335000,
    "icon": "👁️",
    "stock": 5,
    "rarity": "legendary",
    "effects": [
      "Ray spells gain +2 to attack rolls and save DCs",
      "Can fire one extra ray per day",
      "Made by: Xanathar's Surgeon"
    ],
    "vendor": "eye_doctor",
    "shippedBy": "Disintegration Beam",
    "levelRequirement": 14
  },
  "bioluminescent_fungus_lantern": {
    "id": "bioluminescent_fungus_lantern",
    "name": "Bioluminescent Fungus Lantern (Light)",
    "description": "An eternal light source from deep underground fungi.",
    "price": 350000,
    "icon": "🍄",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Illuminates 100 ft radius indefinitely",
      "Heals minor wounds in light",
      "Made by: Mycoid Cultivators"
    ],
    "vendor": "underdark_market",
    "shippedBy": "Spore Pod",
    "levelRequirement": 13
  },
  "biomechanical_symbiote": {
    "id": "biomechanical_symbiote",
    "name": "Biomechanical Symbiote (Living Armor)",
    "description": "A symbiotic organism that enhances the host's physical abilities.",
    "price": 440000,
    "icon": "🦠",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "+2 to strength and dexterity",
      "Self-repairs over time",
      "Made by: BioForge Labs"
    ],
    "vendor": "organic_market",
    "shippedBy": "Symbiont Pod",
    "levelRequirement": 16
  },
  "black_hole_in_a_jar": {
    "id": "black_hole_in_a_jar",
    "name": "Black Hole in a Jar",
    "description": "A mason jar containing a miniature black hole.",
    "category": "consumables",
    "price": 68000000,
    "icon": "🫙",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Open jar: suck in everything within 1 mile (no save, destroys matter)",
      "Close jar: keep the black hole as a pet (it obeys simple commands)",
      "Made by: The Astrophysicist"
    ],
    "vendor": "celestial_bodies",
    "shippedBy": "Gravity Well",
    "levelRequirement": 85
  },
  "black_paint_of_emo_introspection": {
    "id": "black_paint_of_emo_introspection",
    "name": "Black Paint of Emo Introspection",
    "description": "Paint your feelings.",
    "category": "equipment",
    "price": 12500,
    "icon": "🎨",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Paint yourself black: advantage on saves vs. fear (you're too melancholy to be scared)",
      "You must compose dark poetry before each long rest or be restless",
      "Your shadow becomes slightly more dramatic",
      "Made by: Dark Elves Paint Co."
    ],
    "vendor": "dark_elves_paint_shop",
    "shippedBy": "Shadow Drop",
    "levelRequirement": 5
  },
  "blessed_order_holy_bread_recipe": {
    "id": "blessed_order_holy_bread_recipe",
    "name": "Recipe: Blessed Order Holy Bread",
    "description": "Sacred bread blessed for divine protection.",
    "price": 9000,
    "icon": "🍞",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Teaches recipe: Bake with holy water (45 min); eat to gain +1 to saves vs. undead/fiends for 4 hours and heal 1d6 radiant HP",
      "Requires: Flour and blessing; glows faintly",
      "Wards minor evil",
      "Made by: Order Bakers"
    ],
    "vendor": "blessed_order_chapel",
    "shippedBy": "Sacred Slice Scroll",
    "levelRequirement": 6
  },
  "blessed_order_holy_water_dispenser": {
    "id": "blessed_order_holy_water_dispenser",
    "name": "Blessed Order Holy Water Dispenser",
    "description": "Dispenses holy water for cooking.",
    "category": "equipment",
    "price": 15500,
    "icon": "💧",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Dispenses holy water: advantage on cooking checks for blessed recipes",
      "Water is free: but you must donate 1 gp per use (guilt-based)",
      "Dispenser blesses your food: undead are repulsed by your cooking",
      "Made by: Blessed Order Holy Water Co."
    ],
    "vendor": "blessed_order",
    "shippedBy": "Holy Procession",
    "levelRequirement": 6
  },
  "blessed_order_holy_water_distiller": {
    "id": "blessed_order_holy_water_distiller",
    "name": "Blessed Order Holy Water Distiller",
    "description": "Small distiller for infusing bread with blessings.",
    "category": "equipment",
    "price": 9000,
    "icon": "💧",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Distills holy essence; +1 to Religion for blessed recipes",
      "Purifies water; adds radiant heal (extra 1d4)",
      "Requires blessing recharge",
      "Made by: Order Alchemists"
    ],
    "vendor": "blessed_order_chapel",
    "shippedBy": "Sacred Steam Set",
    "levelRequirement": 6
  },
  "blessed_order_holy_water_flask": {
    "id": "blessed_order_holy_water_flask",
    "name": "Blessed Order Holy Water Flask",
    "description": "A flask containing holy water blessed by the Blessed Order.",
    "category": "consumables",
    "price": 7500,
    "icon": "💧",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Holy water deals 2d6 radiant damage to fiends and undead",
      "Can be used to bless a small area (10ft radius) for 1 hour",
      "Made by: Blessed Order"
    ],
    "vendor": "blessed_order_sanctum",
    "shippedBy": "Glass Flask",
    "levelRequirement": 4
  },
  "blessed_order_holy_water_splash_service": {
    "id": "blessed_order_holy_water_splash_service",
    "name": "Blessed Order Holy Water Splash Service",
    "description": "Bless your gear with a quick ritual.",
    "price": 11500,
    "icon": "💧",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Weapon deals +1d4 radiant to undead/fiends for 24 hours",
      "You gain +1 to saves vs. evil for 1 day",
      "Splash might wet your pants (embarrassing)",
      "Made by: Order Priests"
    ],
    "vendor": "blessed_order_chapel",
    "shippedBy": "Vial of Faith",
    "levelRequirement": 5
  },
  "blessed_order_paladin_boots": {
    "id": "blessed_order_paladin_boots",
    "name": "Blessed Order Paladin Boots",
    "description": "Boots that squeak with righteousness.",
    "category": "equipment",
    "price": 18500,
    "icon": "👢",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on saves vs. being knocked prone (good balance)",
      "Boots squeak loudly: disadvantage on Stealth, advantage on Performance (tap dancing)",
      "You must announce your presence when entering rooms",
      "Made by: Blessed Order Cobbler"
    ],
    "vendor": "blessed_order",
    "shippedBy": "Holy Procession",
    "levelRequirement": 6
  },
  "blessed_order_priest_robe": {
    "id": "blessed_order_priest_robe",
    "name": "Blessed Order Priest Robe",
    "description": "Simple white robe for divine casters.",
    "price": 18500,
    "icon": "👘",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 to Wisdom (Religion) checks",
      "Robe cleans itself after use",
      "Attracts holy insects (minor buzzing)",
      "Made by: Order Tailors"
    ],
    "vendor": "blessed_order_monastery",
    "shippedBy": "Holy Thread",
    "levelRequirement": 6
  },
  "blessed_order_recipe_holy_water_soup": {
    "id": "blessed_order_recipe_holy_water_soup",
    "name": "Recipe: Blessed Order Holy Water Soup",
    "description": "Soup that's mildly divine.",
    "price": 13500,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Grants advantage on saves vs. undead and fiendish effects for 1 hour",
      "Undead find the smell revolting: advantage on Charisma checks to repel them",
      "Tastes like watered-down faith (bland but holy)",
      "Made by: Blessed Order Kitchen"
    ],
    "vendor": "blessed_order",
    "shippedBy": "Holy Procession",
    "levelRequirement": 6
  },
  "blessed_order_suncrystal": {
    "id": "blessed_order_suncrystal",
    "name": "Blessed Order Suncrystal",
    "description": "A focusing crystal that channels raw divine light.",
    "price": 48000,
    "icon": "☀️",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Spells dealing Radiant damage gain +1d6 damage",
      "Once per day, emit a flash that blinds Undead/Fiends (DC 15 CON save)",
      "Made by: Blessed Order"
    ],
    "vendor": "blessed_order_sanctum",
    "shippedBy": "Silver Casket",
    "levelRequirement": 9
  },
  "blessing_of_the_elders": {
    "id": "blessing_of_the_elders",
    "name": "Blessing of the Elders",
    "description": "A ritual performed by ancient Toad sages to imbue a weapon or armor with ancestral power.",
    "category": "services",
    "price": 75000,
    "icon": "🙏",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "One weapon or armor gains +1 bonus for 1 year (non-magical items become +1)",
      "Once per month: cast *Sanctuary* on the item’s user",
      "Requires a 1-hour ceremony and a personal sacrifice (DM discretion)"
    ],
    "vendor": "toad_council",
    "shippedBy": "Ritual Scroll",
    "levelRequirement": 6
  },
  "block_brick": {
    "id": "block_brick",
    "name": "Brick Block",
    "description": "A standard brick block. Heavy.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧱",
    "stock": 500,
    "rarity": "common",
    "effects": [
      "Portable high ground",
      "Can be smashed"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Freight",
    "levelRequirement": 1
  },
  "blood_moon_curse": {
    "id": "blood_moon_curse",
    "name": "Blood Moon Curse (Third Party)",
    "description": "A transferable curse that weaponizes lycanthropy.",
    "price": 325000,
    "icon": "🌙",
    "stock": 5,
    "rarity": "legendary",
    "effects": [
      "Inflicts controllable lycanthropy on target (Werewolf Lord form)",
      "Curse can be transferred to enemies via touch attack",
      "Made by: Blood Moon Coven"
    ],
    "vendor": "curse_weaver",
    "shippedBy": "Cursed Post",
    "levelRequirement": 14
  },
  "blooper_ink_well": {
    "id": "blooper_ink_well",
    "name": "Blooper's Ink Well",
    "description": "A glass well filled with black ink. Write messages or blind enemies.",
    "category": "curiosities",
    "price": 7000,
    "icon": "🦑",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Throw: 15ft cone, creatures blinded for 1 round (CON save)",
      "Ink writes messages visible only in moonlight",
      "Octopi become friendly",
      "Smells like low tide"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Sealed Jar",
    "levelRequirement": 2
  },
  "blue_paint": {
    "id": "blue_paint",
    "name": "Bucket of Blue Paint",
    "description": "Deep ocean blue.",
    "category": "curiosities",
    "price": 2000,
    "icon": "🎨",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Paint things blue",
      "Messy"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Can",
    "levelRequirement": 1
  },
  "blueberry_muffins_that_restore_spell": {
    "id": "blueberry_muffins_that_restore_spell",
    "name": "Recipe: Mages' Guild Mana Muffins",
    "description": "Blueberry muffins that restore spell slots.",
    "price": 18500,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Bake muffins that restore one expended 1st-level spell slot",
      "Takes 2 hours, requires rare berries (100 gp per batch)",
      "Muffins spoil after 24 hours (magical decay)",
      "Made by: Mages' Guild Confectioners"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 7
  },
  "bob_omb_buddy": {
    "id": "bob_omb_buddy",
    "name": "Bob-Omb Buddy",
    "description": "A pink Bob-Omb that follows you like a puppy. Explodes on command, reforms at dawn.",
    "category": "faction",
    "price": 12000,
    "icon": "💣",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Command: Explode (3d6 Fire, 10ft radius)",
      "Reforms after 24 hours",
      "Likes to hug your leg (awkward)",
      "Afraid of torches"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Explosive Container",
    "levelRequirement": 4,
    "factionBonus": {
      "offense": 10
    }
  },
  "bob_omb_standard": {
    "id": "bob_omb_standard",
    "name": "Bob-omb (Defused)",
    "description": "A standard explosive. The fuse has been removed for safety. Re-fusing voids warranty.",
    "category": "curiosities",
    "price": 25000,
    "icon": "💣",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Throwable (range 30ft)",
      "Explodes at start of your next turn",
      "All creatures in 10ft: 4d6 fire damage, DEX save DC 14 for half"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "EXTREMELY Careful Handling",
    "levelRequirement": 3,
    "warning": "Possession may be illegal in some jurisdictions"
  },
  "bobomb_buddy_plushie": {
    "id": "bobomb_buddy_plushie",
    "name": "Bob-omb Buddy Plushie",
    "description": "A stuffed explosive friend that whispers encouragement... and occasionally detonates.",
    "category": "curiosities",
    "price": 12000,
    "icon": "🧸",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Grants Advantage on CHA checks with explosives or rebels",
      "Once per day: Explodes for 2d6 Fire damage (you choose target)",
      "Squeaks when you're nervous (no stealth advantage nearby)",
      "Cannot be thrown — it cries if you try"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Bubble Wrap Courier",
    "levelRequirement": 3
  },
  "bone_chime_wind_catcher": {
    "id": "bone_chime_wind_catcher",
    "name": "Bone Chime Wind Catcher",
    "description": "A mobile of tiny bones that chime in the wind — each chime is a whisper of the dead.",
    "category": "curiosities",
    "price": 6000,
    "icon": "🪦",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "When wind blows, you hear one cryptic phrase from a dead person",
      "Once per day: ask a yes/no question — answer is whispered in a dead voice",
      "Chimes stop if you lie"
    ],
    "vendor": "temple_eternal",
    "shippedBy": "Woven String",
    "levelRequirement": 2
  },
  "boo_bell": {
    "id": "boo_bell",
    "name": "Boo's Bell",
    "description": "A spectral bell that resonates with ghostly energy. Ring to reveal the hidden.",
    "category": "curiosities",
    "price": 55000,
    "icon": "🔔",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Action: Ring the bell",
      "All invisible creatures within 30ft become visible for 1 minute",
      "Ghosts and spirits must make CHA save or be Frightened of you"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Blessed Container",
    "levelRequirement": 4
  },
  "boo_in_a_jar": {
    "id": "boo_in_a_jar",
    "name": "Boo in a Jar",
    "description": "A captured Boo. Whispers secrets. Sometimes lies. Always watching.",
    "category": "curiosities",
    "price": 17000,
    "icon": "👻",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Can answer 1 question per day (50% chance truth, 50% mischievous lie)",
      "Grants Darkvision 60ft while jar is open",
      "If jar breaks, Boo becomes hostile or vanishes to tell secrets to your enemies",
      "Whispers embarrassing facts about you at dramatic moments"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Cursed Glassware",
    "levelRequirement": 5
  },
  "boo_portrait": {
    "id": "boo_portrait",
    "name": "Haunted Boo Portrait",
    "description": "A painting that follows you with its eyes. Sometimes the eyes blink.",
    "category": "curiosities",
    "price": 5000,
    "icon": "🖼️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Warns of invisible creatures (30ft)",
      "Portrait Boo whispers secrets at night",
      "Once per day: Cast 'Mage Hand' as Boo",
      "Cries when left alone"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Canvas Wrap",
    "levelRequirement": 1
  },
  "boo_sheet": {
    "id": "boo_sheet",
    "name": "Boo Sheet",
    "description": "A white sheet with eye holes cut out. Disguise yourself as a ghost.",
    "category": "curiosities",
    "price": 6000,
    "icon": "👻",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "+2 Stealth in haunted areas",
      "Boos might be confused"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Laundry Bag",
    "levelRequirement": 1
  },
  "book_of_dead_languages": {
    "id": "book_of_dead_languages",
    "name": "Book of Dead Languages",
    "description": "A tome written in languages that no living soul remembers.",
    "category": "curiosities",
    "price": 20000,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Read for 1 hour: learn one dead language perfectly",
      "You forget one language you knew before",
      "The book sometimes writes new words — in your voice"
    ],
    "vendor": "scholar_society",
    "shippedBy": "Leather Bindings",
    "levelRequirement": 5
  },
  "book_of_moths": {
    "id": "book_of_moths",
    "name": "Book of Moths",
    "description": "A book whose pages are made of living moths that flutter when read.",
    "category": "curiosities",
    "price": 18000,
    "icon": "🦋",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Read: gain knowledge of a single secret (DM chooses)",
      "Each page you read, one moth dies — and you forget one memory",
      "The moths whisper secrets to you at night"
    ],
    "vendor": "bazaar_of_oddities",
    "shippedBy": "Silk Cover",
    "levelRequirement": 5
  },
  "book_of_unwritten_names": {
    "id": "book_of_unwritten_names",
    "name": "Book of Unwritten Names",
    "description": "A blank book that writes the names of those who will die tomorrow.",
    "category": "forbidden",
    "price": 180000,
    "icon": "📖",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Each dawn, 1d4 names appear — those people will die before sunset",
      "You may erase a name — but another appears in its place",
      "The book is sentient. It whispers to you at night"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Leather Binding",
    "levelRequirement": 12
  },
  "boomerang_flower": {
    "id": "boomerang_flower",
    "name": "Boomerang Flower",
    "description": "Grants the ability to throw returning boomerangs.",
    "category": "equipment",
    "price": 18000,
    "icon": "🪃",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Throw boomerang: 1d8 slashing, returns automatically",
      "Range 60ft, can hit multiple targets on return (DEX save DC 14)",
      "Unlimited uses"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Padded Case",
    "levelRequirement": 5
  },
  "bootleg_bowser_castle_key": {
    "id": "bootleg_bowser_castle_key",
    "name": "Bootleg Bowser Castle Key",
    "description": "A key to 'Bowser's Castle' (any red door).",
    "category": "equipment",
    "price": 4700,
    "icon": "🔑",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Unlocks red doors: advantage on locks",
      "Key bends: 20% fail rate",
      "Koopa guards: advantage on Deception",
      "Made by: Castle Copies"
    ],
    "vendor": "wario_land",
    "shippedBy": "Koopa Key",
    "levelRequirement": 4
  },
  "bootleg_bowser_lava_lamp": {
    "id": "bootleg_bowser_lava_lamp",
    "name": "Bootleg Bowser Lava Lamp",
    "description": "A lamp with 'lava' (oil).",
    "category": "equipment",
    "price": 5400,
    "icon": "💡",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Provides 10ft light, hypnotic: DC 12 Wis or distracted",
      "Oil leaks: disadvantage on fire safety",
      "Bowser fans: +1 Intimidation",
      "Made by: Lava Light Lies"
    ],
    "vendor": "wario_land",
    "shippedBy": "Hot Glow Haul",
    "levelRequirement": 5
  },
  "bootleg_bowser_shell_shield": {
    "id": "bootleg_bowser_shell_shield",
    "name": "Bootleg Bowser Shell Shield",
    "description": "A cardboard shell 'shield' painted green.",
    "category": "equipment",
    "price": 5800,
    "icon": "🐢",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "+1 AC as a makeshift shield, but only against fire (Bowser theme)",
      "Shield crumbles after 3 hits: disadvantage on saves vs. bludgeoning",
      "Intimidates Koopas: advantage on Intimidation with turtle-like creatures",
      "Made by: Shell Knockoff Factory"
    ],
    "vendor": "wario_land",
    "shippedBy": "Turtle Truck",
    "levelRequirement": 5
  },
  "bootleg_daisy_flower_power_bracelet": {
    "id": "bootleg_daisy_flower_power_bracelet",
    "name": "Bootleg Daisy Flower Power Bracelet",
    "description": "A bracelet with plastic flowers that 'empower' you.",
    "category": "equipment",
    "price": 4600,
    "icon": "💐",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Wear for +1 to Strength (Athletics) in sports (Daisy vibe)",
      "Flowers wilt after rain: disadvantage on checks when wet",
      "Attracts bees: 10% chance of minor sting (1 damage)",
      "Made by: Flower Knockoff Co."
    ],
    "vendor": "wario_land",
    "shippedBy": "Daisy Delivery",
    "levelRequirement": 4
  },
  "bootleg_dk_banana_peel_slippers": {
    "id": "bootleg_dk_banana_peel_slippers",
    "name": "Bootleg DK Banana Peel Slippers",
    "description": "Slippers that 'slip' on peels (grippy soles).",
    "category": "equipment",
    "price": 4300,
    "icon": "🍌",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Avoid slips: advantage on Dex vs. prone",
      "Slippers banana smell: disadvantage on Stealth",
      "DK: +1 Acrobatics bananas",
      "Made by: Peel Pranks"
    ],
    "vendor": "wario_land",
    "shippedBy": "Peel Post",
    "levelRequirement": 4
  },
  "bootleg_dk_barrel_roll_toy": {
    "id": "bootleg_dk_barrel_roll_toy",
    "name": "Bootleg DK Barrel Roll Toy",
    "description": "A toy that 'rolls' (spins).",
    "category": "equipment",
    "price": 4500,
    "icon": "🛢️",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Spin to dizzy foe: DC 12 Wis or nauseous",
      "Toy breaks: disadvantage on spin",
      "DK fans: +1 Acrobatics",
      "Made by: Roll Replicas"
    ],
    "vendor": "wario_land",
    "shippedBy": "Barrel Bounce",
    "levelRequirement": 4
  },
  "bootleg_dk_diddy_kong_hat": {
    "id": "bootleg_dk_diddy_kong_hat",
    "name": "Bootleg DK Diddy Kong Hat",
    "description": "A backward cap for 'cool' monkeys.",
    "category": "equipment",
    "price": 4700,
    "icon": "🧢",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "+1 Acrobatics flips",
      "Hat slips: disadvantage on head",
      "DK crew: +1 Charisma apes",
      "Made by: Hat Knockoffs"
    ],
    "vendor": "wario_land",
    "shippedBy": "Monkey Mail",
    "levelRequirement": 4
  },
  "bootleg_donkey_kong_barrel_cannon": {
    "id": "bootleg_donkey_kong_barrel_cannon",
    "name": "Bootleg Donkey Kong Barrel Cannon",
    "description": "A toy cannon that shoots foam barrels.",
    "category": "equipment",
    "price": 5100,
    "icon": "🚀",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Shoot foam barrel: 20ft range, knocks prone on hit (DC 12 STR save)",
      "Cannon jams 20% of time: disadvantage on next shot",
      "DK fans cheer: +1 Charisma with apes",
      "Made by: Barrel Bootleggers"
    ],
    "vendor": "wario_land",
    "shippedBy": "Barrel Roll",
    "levelRequirement": 4
  }
};
