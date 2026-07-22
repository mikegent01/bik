// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_005 = {
  "bootleg_fox_mcfox_face_mask": {
    "id": "bootleg_fox_mcfox_face_mask",
    "name": "Bootleg Fox McCloud Face Mask",
    "description": "A mask that makes you look like a pilot (badly).",
    "category": "equipment",
    "price": 5200,
    "icon": "🦊",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Disguise as pilot: advantage on Deception in spaceports",
      "Mask itches: disadvantage on Concentration",
      "Star Fox fans laugh: +1 Charisma with them (ironic)",
      "Made by: Arwing Knockoffs"
    ],
    "vendor": "wario_land",
    "shippedBy": "Barrel Roll",
    "levelRequirement": 4
  },
  "bootleg_link_hookshot_glove": {
    "id": "bootleg_link_hookshot_glove",
    "name": "Bootleg Link Hookshot Glove",
    "description": "A glove with a spring-loaded 'hook' (rubber band).",
    "category": "equipment",
    "price": 5300,
    "icon": "🧤",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Pull small objects 10ft (Sleight DC 12)",
      "Rubber snaps: disadvantage on next pull",
      "Hyrule explorers: advantage on climbing talks",
      "Made by: Hookshot Fakes"
    ],
    "vendor": "wario_land",
    "shippedBy": "Zelda Zip",
    "levelRequirement": 4
  },
  "bootleg_luigi_ghost_key": {
    "id": "bootleg_luigi_ghost_key",
    "name": "Bootleg Luigi Ghost Key",
    "description": "A key that 'unlocks' ghost doors (creaks).",
    "category": "equipment",
    "price": 5500,
    "icon": "🔑",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Unlock spectral locks: advantage on ghost doors",
      "Key haunts: disadvantage on sleep",
      "Ghost hunters: +1 Perception",
      "Made by: Key Ghosts"
    ],
    "vendor": "wario_land",
    "shippedBy": "Boo Bolt",
    "levelRequirement": 5
  },
  "bootleg_luigi_green_cap": {
    "id": "bootleg_luigi_green_cap",
    "name": "Bootleg Luigi Green Cap",
    "description": "A green hat for 'ghost hunting'.",
    "category": "equipment",
    "price": 4500,
    "icon": "🧢",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "+1 vs. fear (Luigi courage)",
      "Cap fades: disadvantage on color",
      "Luigi lovers: +1 Charisma",
      "Made by: Cap Copies"
    ],
    "vendor": "wario_land",
    "shippedBy": "Green Glow",
    "levelRequirement": 4
  },
  "bootleg_luigi_mansion_key": {
    "id": "bootleg_luigi_mansion_key",
    "name": "Bootleg Luigi Mansion Key",
    "description": "A key to 'haunted' doors.",
    "category": "equipment",
    "price": 5400,
    "icon": "🏠",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Unlock haunted locks: advantage on ghost doors",
      "Key chills: disadvantage on warm",
      "Mansion explorers: +1 Perception",
      "Made by: Mansion Copies"
    ],
    "vendor": "wario_land",
    "shippedBy": "Ghost Gate",
    "levelRequirement": 5
  },
  "bootleg_luigi_pollen_puff": {
    "id": "bootleg_luigi_pollen_puff",
    "name": "Bootleg Luigi Pollen Puff",
    "description": "A puff that 'vacuums' dust (sneeze powder).",
    "category": "equipment",
    "price": 4700,
    "icon": "🌸",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Puff dust: DC 12 CON save or sneeze (distracted 1 round)",
      "Powder backfires: disadvantage on your next action",
      "Gardeners: advantage on plant talks",
      "Made by: Puff Fakes"
    ],
    "vendor": "wario_land",
    "shippedBy": "Sneeze Service",
    "levelRequirement": 4
  },
  "bootleg_luigi_portable_potion": {
    "id": "bootleg_luigi_portable_potion",
    "name": "Bootleg Luigi Portable Potion",
    "description": "A potion bottle that 'heals' (soda).",
    "category": "equipment",
    "price": 4500,
    "icon": "🧪",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Drink for 1d4 HP (fizz heal)",
      "Soda burp: disadvantage on talk",
      "Luigi: +1 vs. poison",
      "Made by: Potion Fakes"
    ],
    "vendor": "wario_land",
    "shippedBy": "Fizz Freight",
    "levelRequirement": 4
  },
  "bootleg_mario_coin_block_replica": {
    "id": "bootleg_mario_coin_block_replica",
    "name": "Bootleg Mario Coin Block Replica",
    "description": "A block that 'dispenses' coins (one fake).",
    "category": "equipment",
    "price": 4700,
    "icon": "🧱",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Hit to get 1 fake coin (looks real, 1 gp value)",
      "Block cracks: disadvantage on next hit",
      "Coin collectors: +1 Persuasion",
      "Made by: Block Bootlegs"
    ],
    "vendor": "wario_land",
    "shippedBy": "Block Bump",
    "levelRequirement": 4
  },
  "bootleg_mario_coin_counter": {
    "id": "bootleg_mario_coin_counter",
    "name": "Bootleg Mario Coin Counter",
    "description": "Counts your coins... inaccurately.",
    "category": "equipment",
    "price": 4600,
    "icon": "🪙",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Counts gold: advantage on haggle if accurate",
      "10% off by 1d10 gp (Wario tax)",
      "Coin sound: +1 Charisma with gamblers",
      "Made by: Coin Knockoffs"
    ],
    "vendor": "wario_land",
    "shippedBy": "Coin Clink",
    "levelRequirement": 4
  },
  "bootleg_mario_fire_flower_spray": {
    "id": "bootleg_mario_fire_flower_spray",
    "name": "Bootleg Mario Fire Flower Spray",
    "description": "A spray bottle of 'fire' (hot sauce).",
    "category": "equipment",
    "price": 4600,
    "icon": "🌺",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Spray 15ft: 1d4 fire damage (spicy!)",
      "Sauce burns eyes: disadvantage on sight checks",
      "Mario cosplayers: advantage on fire roleplay",
      "Made by: Flower Fakes"
    ],
    "vendor": "wario_land",
    "shippedBy": "Hot Sauce Haul",
    "levelRequirement": 4
  },
  "bootleg_mario_frog_suit_gloves": {
    "id": "bootleg_mario_frog_suit_gloves",
    "name": "Bootleg Mario Frog Suit Gloves",
    "description": "Gloves for 'jumping' (grippy).",
    "category": "equipment",
    "price": 5300,
    "icon": "🧤",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "+1 jump grip",
      "Gloves slippery: disadvantage on hold",
      "Frog fans: +1 Acrobatics",
      "Made by: Frog Fakes"
    ],
    "vendor": "wario_land",
    "shippedBy": "Hop Hand",
    "levelRequirement": 4
  },
  "bootleg_mario_hammer_bros_hammer": {
    "id": "bootleg_mario_hammer_bros_hammer",
    "name": "Bootleg Mario Hammer Bros Hammer",
    "description": "A hammer for 'throwing' (toy).",
    "category": "equipment",
    "price": 4600,
    "icon": "🔨",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Throw 20ft: 1d4 bludgeoning",
      "Hammer bounces: disadvantage on catch",
      "Hammer fans: +1 Strength",
      "Made by: Hammer Fakes"
    ],
    "vendor": "wario_land",
    "shippedBy": "Bros Bounce",
    "levelRequirement": 4
  },
  "bootleg_mario_raccoon_tail": {
    "id": "bootleg_mario_raccoon_tail",
    "name": "Bootleg Mario Raccoon Tail",
    "description": "A fake tail for 'flying' (glider).",
    "category": "equipment",
    "price": 4300,
    "icon": "🦝",
    "stock": 13,
    "rarity": "common",
    "effects": [
      "Glide 10ft safely once/day",
      "Tail tangles: disadvantage on climb",
      "Raccoon fans: +1 Acrobatics",
      "Made by: Tail Fakes"
    ],
    "vendor": "wario_land",
    "shippedBy": "Tailwind Transport",
    "levelRequirement": 4
  },
  "bootleg_mario_thwomp_pounder": {
    "id": "bootleg_mario_thwomp_pounder",
    "name": "Bootleg Mario Thwomp Pounder",
    "description": "A pounder for 'thwomps' (stomp).",
    "category": "equipment",
    "price": 4700,
    "icon": "🔨",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Pound ground: advantage on trip foes",
      "Pounder heavy: disadvantage on lift",
      "Thwomp fans: +1 Strength",
      "Made by: Pounder Copies"
    ],
    "vendor": "wario_land",
    "shippedBy": "Thwomp Thud",
    "levelRequirement": 4
  },
  "bootleg_peach_castle_goblet": {
    "id": "bootleg_peach_castle_goblet",
    "name": "Bootleg Peach Castle Goblet",
    "description": "A goblet for 'royal' drinks.",
    "category": "equipment",
    "price": 4800,
    "icon": "🍷",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "+1 to taste drinks (poison detect)",
      "Goblet chips: disadvantage on pour",
      "Royal: +1 Persuasion nobles",
      "Made by: Goblet Copies"
    ],
    "vendor": "wario_land",
    "shippedBy": "Castle Clink",
    "levelRequirement": 4
  },
  "bootleg_peach_crown": {
    "id": "bootleg_peach_crown",
    "name": "Bootleg Princess Peach Crown",
    "description": "A plastic crown with fake jewels, 'fit for royalty' (or cosplay).",
    "category": "equipment",
    "price": 4200,
    "icon": "👑",
    "stock": 14,
    "rarity": "common",
    "effects": [
      "Wear for +1 to Charisma (Persuasion) with Toads or royalty fans",
      "Crown slips: disadvantage on Dexterity checks in combat",
      "Attracts Bowser minions: 10% chance of unwanted attention",
      "Made by: Knockoff Castle Crafts"
    ],
    "vendor": "wario_land",
    "shippedBy": "Royal Rip-Off",
    "levelRequirement": 4
  },
  "bootleg_peach_fan": {
    "id": "bootleg_peach_fan",
    "name": "Bootleg Peach Fan",
    "description": "A fan that 'cools' you (paper).",
    "category": "equipment",
    "price": 4300,
    "icon": "🪭",
    "stock": 13,
    "rarity": "common",
    "effects": [
      "Fan heat: advantage on hot saves",
      "Paper tears: disadvantage on wind",
      "Peach pals: +1 Charisma",
      "Made by: Fan Fakes"
    ],
    "vendor": "wario_land",
    "shippedBy": "Cool Courier",
    "levelRequirement": 4
  },
  "bootleg_peach_heart_crystal": {
    "id": "bootleg_peach_heart_crystal",
    "name": "Bootleg Peach Heart Crystal",
    "description": "A crystal that 'heals' (placebo).",
    "category": "equipment",
    "price": 5400,
    "icon": "💎",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Hold for +1 heal placebo (1d4 HP)",
      "Crystal dulls: disadvantage on shine",
      "Peach: +1 Charisma love",
      "Made by: Crystal Copies"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heart Haul",
    "levelRequirement": 5
  },
  "bootleg_rosalina_star_wand": {
    "id": "bootleg_rosalina_star_wand",
    "name": "Bootleg Rosalina Star Wand",
    "description": "A sparkly wand that 'summons stars' (fireworks).",
    "category": "equipment",
    "price": 5700,
    "icon": "⭐",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Wave to create fireworks: 10ft bright light and distraction (DC 12 Wisdom save or blinded for 1 round)",
      "Wand fizzles 30% of the time: no effect, but sparks fly (1 fire damage to you)",
      "Stars attract Lumas (or fireflies): minor scouts",
      "Made by: Galaxy Knockoffs"
    ],
    "vendor": "wario_land",
    "shippedBy": "Starry Sparkler Ship",
    "levelRequirement": 5
  },
  "bootleg_samus_power_suit_helmet": {
    "id": "bootleg_samus_power_suit_helmet",
    "name": "Bootleg Samus Power Suit Helmet",
    "description": "A helmet that 'powers up' your aim (with lights).",
    "category": "equipment",
    "price": 5800,
    "icon": "⛑️",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "+1 to ranged attacks in low light (visor glow)",
      "Helmet heavy: disadvantage on Dex saves vs. trip",
      "Metroid fans geek out: advantage on tech talks",
      "Made by: Space Pirate Fakes"
    ],
    "vendor": "wario_land",
    "shippedBy": "Morph Ball Mail",
    "levelRequirement": 5
  },
  "bootleg_sonic_speed_shoes": {
    "id": "bootleg_sonic_speed_shoes",
    "name": "Bootleg Sonic Speed Shoes",
    "description": "Shoes that make you 'fast' (with springs).",
    "category": "equipment",
    "price": 5700,
    "icon": "👟",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "+5 ft speed for 1 minute once per day",
      "Springs squeak: disadvantage on Stealth",
      "Sonic fans: +1 Acrobatics with speedsters",
      "Made by: Hedgehog Knockoffs"
    ],
    "vendor": "wario_land",
    "shippedBy": "Blue Blur",
    "levelRequirement": 5
  },
  "bootleg_toadette_pink_umbrella": {
    "id": "bootleg_toadette_pink_umbrella",
    "name": "Bootleg Toadette Pink Umbrella",
    "description": "An umbrella that 'shields' from rain (and sun).",
    "category": "equipment",
    "price": 4400,
    "icon": "☔",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Shield from rain: advantage on wet terrain",
      "Umbrella pokes: 1 piercing damage as improvised",
      "Toadette fans: +1 Charisma with cute folk",
      "Made by: Umbrella Knockoffs"
    ],
    "vendor": "wario_land",
    "shippedBy": "Pink Parasol Post",
    "levelRequirement": 4
  },
  "bootleg_toadstool_powerup_candy": {
    "id": "bootleg_toadstool_powerup_candy",
    "name": "Bootleg Toadstool Power-Up Candy",
    "description": "Candy shaped like mushrooms that 'grows' you... slightly.",
    "category": "equipment",
    "price": 4700,
    "icon": "🍬",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Eat for temporary +1 size (advantage on Strength, disadvantage on Dex) for 10 minutes",
      "Candy is sour: DC 10 CON save or nauseous (disadvantage on next check)",
      "Mushroom fans love it: +1 Charisma with fungi folk",
      "Made by: Candy Knockoffs"
    ],
    "vendor": "wario_land",
    "shippedBy": "Sweet Shroom Ship",
    "levelRequirement": 4
  },
  "bootleg_wario_bike_spokes": {
    "id": "bootleg_wario_bike_spokes",
    "name": "Bootleg Wario Bike Spokes",
    "description": "Spokes that 'spin' attacks.",
    "category": "equipment",
    "price": 5200,
    "icon": "🚲",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Attach to wheels: +5 speed on bikes",
      "Spokes rust: disadvantage on wet rides",
      "Bike fans: +1 Acrobatics",
      "Made by: Spoke Scams"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wheel Whirl",
    "levelRequirement": 4
  },
  "bootleg_yoshi_egg_thrower": {
    "id": "bootleg_yoshi_egg_thrower",
    "name": "Bootleg Yoshi Egg Thrower",
    "description": "A slingshot for 'eggs' (rocks).",
    "category": "equipment",
    "price": 4600,
    "icon": "🥚",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Throw rock: 1d4 bludgeoning 30ft",
      "Slingshot snaps: disadvantage on next",
      "Yoshi: +1 ranged eggs",
      "Made by: Egg Ejectors"
    ],
    "vendor": "wario_land",
    "shippedBy": "Egg Eject",
    "levelRequirement": 4
  },
  "bootleg_yoshi_tongue_stick": {
    "id": "bootleg_yoshi_tongue_stick",
    "name": "Bootleg Yoshi Tongue Stick",
    "description": "A sticky stick that 'licks' up items.",
    "category": "equipment",
    "price": 5100,
    "icon": "👅",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Grab small items 10ft (sticky)",
      "Stick dries: disadvantage on next grab",
      "Yoshi pals: +1 Animal Handling",
      "Made by: Tongue Toys"
    ],
    "vendor": "wario_land",
    "shippedBy": "Lick Limo",
    "levelRequirement": 4
  },
  "boshi_sunglasses": {
    "id": "boshi_sunglasses",
    "name": "Cool Blue Sunglasses",
    "description": "Worn by a famous Yoshi racer. Pure attitude.",
    "category": "curiosities",
    "price": 20000,
    "icon": "🕶️",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+1 Charisma",
      "Darkvision 10ft (because it's dark)"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Case",
    "levelRequirement": 2
  },
  "bottomless_coin_sack": {
    "id": "bottomless_coin_sack",
    "name": "Bottomless Coin Sack",
    "description": "A coin sack connected to the Coin Heaven dimension. Infinite wealth, slowly.",
    "category": "premium",
    "price": 500000,
    "icon": "💰",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Produces 100 Gold Coins every dawn",
      "Roll 1d100 on a 80 or above it breaks",
      "Wario will hunt you to the ends of the earth for this"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Wario (He tries to steal it back immediately)",
    "levelRequirement": 10
  },
  "bouncing_bubble_gum": {
    "id": "bouncing_bubble_gum",
    "name": "Bouncing Bubble Gum",
    "description": "A strip of gum that produces an extra-large, bouncy bubble when chewed.",
    "category": "consumables",
    "price": 1500,
    "icon": "🍬",
    "stock": 25,
    "rarity": "uncommon",
    "effects": [
      "Chew: create a bubble platform (10ft diameter) that holds Tiny objects for 1 minute",
      "Burst: deals 1d4 bludgeoning in 5ft radius",
      "Sticky residue remains"
    ],
    "vendor": "pawn_of_wonders",
    "shippedBy": "Waxed Paper",
    "levelRequirement": 1
  },
  "bounty_clearance": {
    "id": "bounty_clearance",
    "name": "Bounty Clearance Service",
    "description": "The Onyx Hand will adjust certain records. Witnesses relocated. Questions unanswered.",
    "category": "services",
    "price": 240000,
    "icon": "🧹",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reduce bounty with one faction by 50%",
      "Remove one minor arrest warrant",
      "Clean one criminal record entry",
      "Costs almost your entire XP pool"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Meeting Arranged Discreetly",
    "levelRequirement": 1,
    "warning": "Illegal under most jurisdictions"
  },
  "bounty_hunting_contract": {
    "id": "bounty_hunting_contract",
    "name": "Bounty Hunting Contract (Active)",
    "description": "Official paperwork registering you as a licensed bounty hunter for a single high-value target.",
    "category": "services",
    "price": 1200,
    "icon": "📋",
    "stock": 50,
    "rarity": "uncommon",
    "effects": [
      "Legal authority to capture/interrogate target",
      "Guild protection",
      "10% commission split with Bounty Master",
      "Contract expires after 30 days or target capture"
    ],
    "vendor": "bounty_guild",
    "shippedBy": "Sealed Document",
    "levelRequirement": 3
  },
  "bowser_claw": {
    "id": "bowser_claw",
    "name": "Bowser Claw Gauntlet",
    "description": "A gauntlet mimicking Bowser's claws for slashing.",
    "category": "equipment",
    "price": 35000,
    "icon": "🦖",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Unarmed: 2d8 slashing + fire 1d6",
      "Grapple advantage",
      "Heats up in anger (+1 damage)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Claw Crate",
    "levelRequirement": 9
  },
  "bowser_s_plans_with_wario": {
    "id": "bowser_s_plans_with_wario",
    "name": "Bowser's War Manifesto (Wario-Annotated)",
    "description": "Bowser's plans with Wario's notes in the margins ('Get paid here').",
    "category": "equipment",
    "price": 5200,
    "icon": "📖",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Read manifesto: advantage on checks vs. Bowser's strategies (you know his plans)",
      "Wario's notes are distracting: disadvantage on Concentration checks",
      "Manifesto is propaganda: advantage on Deception checks when quoting it",
      "Made by: Wario Land Publishing"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package",
    "levelRequirement": 5
  },
  "box_of_silent_screams": {
    "id": "box_of_silent_screams",
    "name": "Box of Silent Screams",
    "description": "A wooden box that contains the screams of those who died in silence.",
    "category": "forbidden",
    "price": 450000,
    "icon": "📦",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Open: all within 20ft are deafened for 1 minute",
      "Creatures who hear it must make a DC 18 Wis save — failure: they scream silently forever",
      "The box grows heavier with each scream it holds"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Iron Lockbox",
    "levelRequirement": 11
  },
  "bridge_builder_brick": {
    "id": "bridge_builder_brick",
    "name": "Bridge-Builder Brick",
    "description": "A warm brick that murmurs blueprints. Lay it down, and a sturdy bridge follows.",
    "category": "curiosities",
    "price": 14000,
    "icon": "🧱",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Place on gap: conjures a 10ft-wide stone bridge lasting 24 hours",
      "Bridge resists weather and normal attacks (AC 15, HP 50)",
      "Using two bricks side-by-side widens the span"
    ],
    "vendor": "bricklane",
    "shippedBy": "Crate of Mortar",
    "levelRequirement": 4
  },
  "broken_glass": {
    "id": "broken_glass",
    "name": "Shard of Glass",
    "description": "Sharp. Dangerous. Not a weapon, just trash.",
    "category": "curiosities",
    "price": 100,
    "icon": "🧊",
    "stock": 500,
    "rarity": "junk",
    "effects": [
      "1 damage if you hold it too tight"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Careless Courier",
    "levelRequirement": 1
  },
  "broken_watch": {
    "id": "broken_watch",
    "name": "Broken Pocket Watch",
    "description": "Stopped working years ago. Right twice a day.",
    "category": "curiosities",
    "price": 8000,
    "icon": "⏱️",
    "stock": 1,
    "rarity": "common",
    "effects": [
      "No magical effect",
      "Looks kind of dignified"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1
  },
  "broque_monsieur_collection": {
    "id": "broque_monsieur_collection",
    "name": "Block Collection",
    "description": "A set of sentient blocks. They can form walls, bridges, or prisons on command.",
    "category": "curiosities",
    "price": 290000,
    "icon": "🟨",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Action: Summon a 20ft x 20ft stone fortress",
      "Action: Create a bridge up to 60ft",
      "The blocks speak French and judge your fashion"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Block",
    "levelRequirement": 8
  },
  "brown_paint_of_earthly_camouflage": {
    "id": "brown_paint_of_earthly_camouflage",
    "name": "Brown Paint of Earthly Camouflage",
    "description": "Blend with dirt, rocks, and disappointment.",
    "category": "equipment",
    "price": 11500,
    "icon": "🎨",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Paint yourself brown: advantage on Stealth in natural terrain",
      "You feel very grounded: disadvantage on saves vs. psychic damage",
      "Children try to plant you",
      "Made by: Earth Elemental Paint Co."
    ],
    "vendor": "dwarf_realms_paint",
    "shippedBy": "Mud Pack",
    "levelRequirement": 5
  },
  "build_traps_that_lead_to": {
    "id": "build_traps_that_lead_to",
    "name": "Wario's Bottomless Pitfall Trap Kit (Scam Trap!)",
    "description": "Build traps that lead to 'bottomless' pits – Wario's gold-making scheme!",
    "category": "equipment",
    "price": 16000,
    "icon": "🕳️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Set trap: DC 13 Perception to spot, falls into 10ft pit (1d6 damage)",
      "Kit reusable 3 times: 'Bottomless' until it fills with dirt",
      "Scam: Pit is shallow – victims climb out easily (embarrassing, no real capture)",
      "Made by: Wario's Trap Emporium"
    ],
    "vendor": "wario_land",
    "shippedBy": "Pitfall Parcel",
    "levelRequirement": 6
  },
  "bulk_up_like_wario_side": {
    "id": "bulk_up_like_wario_side",
    "name": "Wario's WAAAAH! Fitness Shake Mix",
    "description": "Bulk up like Wario! (Side effects may include aggressive flatulence).",
    "category": "equipment",
    "price": 14500,
    "icon": "🥤",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Mix with water to create a shake: grants +2 to Strength checks for 1 hour",
      "During the hour, you must make a DC 10 Constitution save every 10 minutes or emit a 10ft gas cloud (poisoned condition for 1 round to creatures in area)",
      "Shake is 80% garlic powder: vampires avoid you (advantage on Charisma checks to repel them)",
      "Comes with a 'free' shaker cup that leaks (disadvantage on Sleight of Hand)",
      "Made by: Wario Land Fitness (No Refunds)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shake Delivery",
    "levelRequirement": 5
  },
  "bullet_bill_helmet": {
    "id": "bullet_bill_helmet",
    "name": "Bullet Bill Helmet",
    "description": "A rocket-shaped helmet that launches you forward. Landing is your problem.",
    "category": "equipment",
    "price": 19000,
    "icon": "🚀",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Once per short rest: Dash 120ft in straight line",
      "Enemies in path take 2d6 Bludgeoning (DEX save half)",
      "You take 1d6 damage from impact",
      "Smoke trail lasts 1 minute"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Rocket Sled",
    "levelRequirement": 6
  },
  "bullet_bill_launcher": {
    "id": "bullet_bill_launcher",
    "name": "Bullet Bill Blaster",
    "description": "A cannon that fires explosive Bills. Aim carefully, or regret it.",
    "category": "equipment",
    "price": 20000,
    "icon": "🚀",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Action: Fire for 4d6 Fire damage (line 60ft)",
      "DEX save or 2d6 extra on fail",
      "3 charges, recharges at dawn",
      "Overheats in rain (1d4 Fire to user)"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Armored Wagon",
    "levelRequirement": 6
  },
  "bullet_bill_mask": {
    "id": "bullet_bill_mask",
    "name": "Bullet Bill Mask",
    "description": "Turns you into a living Bullet Bill for charging attacks.",
    "category": "consumables",
    "price": 12000,
    "icon": "🚀",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Single Use: Dash 60ft in a line, 3d6 piercing damage to all in path",
      "Explode on impact (2d6 fire in 5ft radius)",
      "User takes half explosion damage"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Explosive Container",
    "levelRequirement": 4
  },
  "bumper_badge": {
    "id": "bumper_badge",
    "name": "Bumper Badge",
    "description": "Bounce enemies away when they touch you.",
    "category": "equipment",
    "price": 40000,
    "icon": "🛑",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Enemies that hit you with melee are pushed back 5ft"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Standard Courier",
    "levelRequirement": 3
  },
  "burnt_pan": {
    "id": "burnt_pan",
    "name": "Burnt Frying Pan",
    "description": "Wario tried to cook. It didn't go well.",
    "category": "equipment",
    "price": 1500,
    "icon": "🍳",
    "stock": 5,
    "rarity": "junk",
    "effects": [
      "1d4 bludgeoning",
      "Smells like charcoal"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1
  },
  "buzzy_beetle_shell": {
    "id": "buzzy_beetle_shell",
    "name": "Buzzy Beetle Shell",
    "description": "A shell resistant to fire and stomps.",
    "category": "equipment",
    "price": 8000,
    "icon": "🐞",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Shield: +2 AC, fire resistance",
      "Can curl up to avoid damage (once per short rest)",
      "Heavy (reduces speed 5ft)"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Shell Case",
    "levelRequirement": 3
  },
  "cackleberry": {
    "id": "cackleberry",
    "name": "Cackleberry",
    "description": "A small egg that constantly giggles when held. Delicious if you can stand the laughter.",
    "category": "consumables",
    "price": 400,
    "icon": "🥚",
    "stock": 30,
    "rarity": "common",
    "effects": [
      "Eat: +2 to Stealth for 10 minutes (giggly cover)",
      "50% chance to laugh uncontrollably and reveal position",
      "Favorite treat of trickster sprites"
    ],
    "vendor": "twine_shop",
    "shippedBy": "Wicker Basket",
    "levelRequirement": 1
  },
  "cage_of_the_unborn": {
    "id": "cage_of_the_unborn",
    "name": "Cage of the Unborn",
    "description": "A tiny metal cage that holds the soul of a child who was never born.",
    "category": "forbidden",
    "price": 500000,
    "icon": "🪝",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Place a soul inside: you can resurrect them — but they are born as a shadow",
      "They become your child — but age 10x faster",
      "If released, they become a vengeful spirit that hunts you"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Silver Crib",
    "levelRequirement": 12
  },
  "cake_mix": {
    "id": "cake_mix",
    "name": "Cake Mix",
    "description": "Essential for baking. Or eating raw if you have no shame.",
    "category": "consumables",
    "price": 2000,
    "icon": "🥡",
    "stock": 200,
    "rarity": "common",
    "effects": [
      "Restores 1 HP",
      "Can be cooked by Zess T."
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Paper Bag",
    "levelRequirement": 1
  },
  "camera_poltergust": {
    "id": "camera_poltergust",
    "name": "Vintage Camera",
    "description": "Takes sepia photos. Flash is blindingly bright.",
    "category": "curiosities",
    "price": 20000,
    "icon": "📷",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Can blind target 5ft away (CON save 12)",
      "Records memories"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Fragile Box",
    "levelRequirement": 2
  },
  "candle_of_the_first_fire": {
    "id": "candle_of_the_first_fire",
    "name": "Candle of the First Fire",
    "description": "The first flame ever lit — it never burns out, and never warms.",
    "category": "premium",
    "price": 420000,
    "icon": "🕯️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Light: creates a 30ft radius of pure, cold fire — burns objects, not flesh",
      "Can ignite magical items to reveal their properties",
      "If extinguished, the world forgets how to make fire"
    ],
    "vendor": "artificer_tower",
    "shippedBy": "Ashen Holder",
    "levelRequirement": 12
  },
  "candle_of_the_last_breath": {
    "id": "candle_of_the_last_breath",
    "name": "Candle of the Last Breath",
    "description": "A black candle that burns for exactly 1 minute — and brings back the dead for that time.",
    "category": "forbidden",
    "price": 300000,
    "icon": "🕯️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Light: resurrects one recently dead creature (within 1 hour)",
      "They return with 1 HP and full memories",
      "They speak one truth before dissolving into smoke",
      "You lose 1d6 years of life"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Ashen Box",
    "levelRequirement": 15
  },
  "cannon_box": {
    "id": "cannon_box",
    "name": "Cannon Box",
    "description": "A wearable box that shoots cannonballs.",
    "category": "equipment",
    "price": 20000,
    "icon": "📦",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Wear: Fire cannonball (2d10 bludgeoning, range 120ft)",
      "3 charges per short rest",
      "Reduces speed by 10ft while worn"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Heavy Crate",
    "levelRequirement": 5
  },
  "cape_feather": {
    "id": "cape_feather",
    "name": "Cape Feather",
    "description": "A golden feather that grants brief flight. Smells like nostalgia and freedom.",
    "category": "consumables",
    "price": 7000,
    "icon": "🪶",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Single Use: Fly 40ft for 1 minute",
      "Can perform a spin attack (1d6 Slashing)",
      "Feather dissolves into sparkles",
      "You hear cape music in your head"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Feather Pillow",
    "levelRequirement": 1
  },
  "cappy_replica": {
    "id": "cappy_replica",
    "name": "Spirit Cap",
    "description": "A hat inhabited by a bonneter spirit. Allows possession.",
    "category": "equipment",
    "price": 380000,
    "icon": "🎩",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Action: Throw onto a creature (CR 3 or lower)",
      "Target must make WIS Save DC 16 or be Dominated",
      "You control their body for 1 minute",
      "Your physical body vanishes into the hat"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Hat Box",
    "levelRequirement": 9
  },
  "captain_toad_backpack": {
    "id": "captain_toad_backpack",
    "name": "Captain's Heavy Backpack",
    "description": "Looks small, holds an infinite amount of gear. Prevents jumping.",
    "category": "equipment",
    "price": 210000,
    "icon": "🎒",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Infinite Carrying Capacity (Weight is ignored)",
      "You cannot Jump",
      "You cannot Fly",
      "Your speed is reduced by 5ft"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Crane",
    "levelRequirement": 1
  },
  "captain_toad_lamp": {
    "id": "captain_toad_lamp",
    "name": "Captain Toad's Lamp",
    "description": "A lamp that reveals hidden treasures.",
    "category": "curiosities",
    "price": 8000,
    "icon": "🏮",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Shine: Detect hidden items within 30ft",
      "Once per day: Reveal secret door",
      "Attracts minor monsters"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Lamp Crate",
    "levelRequirement": 3
  },
  "cardboard_box": {
    "id": "cardboard_box",
    "name": "Suspicious Box",
    "description": "Just a box. Definitely not a person inside.",
    "category": "equipment",
    "price": 5000,
    "icon": "📦",
    "stock": 20,
    "rarity": "common",
    "effects": [
      "Action: Hide inside. +5 Stealth if you don't move.",
      "Breaks if you take damage"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "It is the shipping",
    "levelRequirement": 1
  },
  "cartography_commission": {
    "id": "cartography_commission",
    "name": "Cartography Commission (Custom Map)",
    "description": "Hire a master cartographer to create a detailed, magically accurate map of any area.",
    "category": "services",
    "price": 7000,
    "icon": "🗺️",
    "stock": 12,
    "rarity": "rare",
    "effects": [
      "Custom map of any region up to 50 square miles",
      "Includes hidden locations, ley lines, and hazard zones",
      "Map glows if nearby danger approaches (magical upgrade)"
    ],
    "vendor": "scholar_society",
    "shippedBy": "Commissioned Work",
    "levelRequirement": 4
  },
  "castle_deed": {
    "id": "castle_deed",
    "name": "Deed to Abandoned Fortress",
    "description": "Ownership papers for a fortress in the Dark Land. Needs renovation.",
    "category": "faction",
    "price": 550000,
    "icon": "🏰",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Grants a permanent Stronghold",
      "Can garrison 100 troops",
      "Lair Actions available when inside",
      "Taxes generate income"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Lawyer",
    "levelRequirement": 100,
    "factionBonus": {
      "defense": 50,
      "economy": 20
    }
  },
  "celestial_compass": {
    "id": "celestial_compass",
    "name": "Celestial Compass (Navigation)",
    "description": "Points to divine realms and detects holy sites.",
    "price": 610000,
    "icon": "🧭",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Guides to nearest celestial plane",
      "+10 to navigation in heavens",
      "Made by: Angelic Scouts"
    ],
    "vendor": "divine_outpost",
    "shippedBy": "Holy Light",
    "levelRequirement": 16,
    "factionBonus": {
      "divine": 50
    }
  },
  "celestial_harvester_drone": {
    "id": "celestial_harvester_drone",
    "name": "Celestial Harvester Drone (Automated)",
    "description": "A swarm of nano-drones that harvest stellar energy from nearby stars for personal use.",
    "price": 450000,
    "icon": "⭐",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Collects 1000 energy units per solar cycle",
      "Deployable in orbit, returns via hyperspace",
      "Made by: Celestial Forge"
    ],
    "vendor": "starforge_outpost",
    "shippedBy": "Orbital Drop",
    "levelRequirement": 18
  },
  "celestial_sunforge_blueprints": {
    "id": "celestial_sunforge_blueprints",
    "name": "Celestial Sunforge Blueprints",
    "description": "Divine schematics for crafting artifacts of pure sunlight.",
    "price": 465000,
    "icon": "📜",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Learn to craft Solar Radiance weapons and armor",
      "Requires 20,000gp in celestial materials to activate",
      "Made by: Sunforge Archons"
    ],
    "vendor": "divine_archive",
    "shippedBy": "Solar Flare Transmission",
    "levelRequirement": 15
  },
  "centaur_khanate_bow": {
    "id": "centaur_khanate_bow",
    "name": "Centaur Khanate Composite Bow",
    "description": "A masterfully crafted longbow, designed to be used from horseback (or centaur-back). It's powerful and responsive.",
    "category": "equipment",
    "price": 16000,
    "icon": "🏹",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Composite Longbow (+2 Strength modifier)",
      "Advantage on attacks made while mounted",
      "Arrows fired from this bow fly 50% further",
      "Requires attunement"
    ],
    "vendor": "Centaur Khanate",
    "shippedBy": "Leather Quiver",
    "levelRequirement": 5
  },
  "centaur_khanate_horse_shoe_enchant_service": {
    "id": "centaur_khanate_horse_shoe_enchant_service",
    "name": "Centaur Khanate Horse Shoe Enchant Service",
    "description": "Speed boost for mounts.",
    "price": 13500,
    "icon": "🐎",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Mount speed +10ft for 1 week",
      "Advantage on mounted charges",
      "Shoes clop loudly",
      "Made by: Khanate Farriers"
    ],
    "vendor": "centaur_khanate_steppes",
    "shippedBy": "Hoof Delivery",
    "levelRequirement": 5
  },
  "centaur_khanate_steppe_coat": {
    "id": "centaur_khanate_steppe_coat",
    "name": "Centaur Khanate Steppe Coat",
    "description": "Wool coat for nomadic riders.",
    "price": 16000,
    "icon": "🧥",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+1 to mounted speed endurance",
      "Coat resists wind chill",
      "Heavy for non-centaurs",
      "Made by: Khanate Herders"
    ],
    "vendor": "centaur_khanate_camp",
    "shippedBy": "Horsehair Hide",
    "levelRequirement": 5
  },
  "centaur_khanate_steppe_grill": {
    "id": "centaur_khanate_steppe_grill",
    "name": "Centaur Khanate Steppe Grill",
    "description": "Portable grill for yogurt drinks on the move.",
    "category": "equipment",
    "price": 7000,
    "icon": "🥛",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Grills while riding; advantage on mounted cooking",
      "Wind-resistant; quick heat",
      "Charms milk slightly",
      "Made by: Khanate Metalworkers"
    ],
    "vendor": "centaur_khanate_steppes",
    "shippedBy": "Steppe Smoke Shipment",
    "levelRequirement": 5
  },
  "centaur_khanate_steppe_yogurt_drink_recipe": {
    "id": "centaur_khanate_steppe_yogurt_drink_recipe",
    "name": "Recipe: Centaur Khanate Steppe Yogurt Drink",
    "description": "Fermented drink for endless rides.",
    "price": 6500,
    "icon": "🥛",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Ferment yogurt (overnight); drink to gain mounted speed +10 ft for 4 hours",
      "Requires: Mare's milk; nomadic staple",
      "Khanate endurance",
      "Made by: Steppe Herders"
    ],
    "vendor": "centaur_khanate_steppes",
    "shippedBy": "Yogurt Yurt Yield",
    "levelRequirement": 5
  },
  "chain_chomp_chain": {
    "id": "chain_chomp_chain",
    "name": "Chain Chomp's Leash",
    "description": "A heavy iron chain that once held a beast. Still twitches with aggression.",
    "category": "equipment",
    "price": 22000,
    "icon": "⛓️",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Whip attack: 2d6 Slashing, Reach 15ft",
      "On crit: Target restrained for 1 round",
      "Chain rattles when enemies approach",
      "You feel the urge to bark at mailmen"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Iron Chest",
    "levelRequirement": 6
  },
  "chain_chomp_leash": {
    "id": "chain_chomp_leash",
    "name": "Chain Chomp Leash",
    "description": "A sturdy leash to control a Chain Chomp as a pet or weapon.",
    "category": "equipment",
    "price": 22000,
    "icon": "🔗",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summon Chain Chomp (CR 2, bite 2d6 piercing)",
      "Chomp attacks on your command",
      "Chain breaks on critical failure"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Reinforced Chain",
    "levelRequirement": 6
  },
  "changeling_hive_camo_jacket": {
    "id": "changeling_hive_camo_jacket",
    "name": "Changeling Hive Camo Jacket",
    "description": "Camouflage that changes patterns randomly.",
    "category": "equipment",
    "price": 18500,
    "icon": "🧥",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Advantage on Stealth in one random terrain type (changes hourly)",
      "You have disadvantage on Stealth in the other terrains",
      "Jacket occasionally changes color during important conversations (distraction)",
      "Made by: Changeling Hive Weavers"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 7
  },
  "changeling_hive_chitin_armor": {
    "id": "changeling_hive_chitin_armor",
    "name": "Changeling Hive Chitin Armor",
    "description": "Light armor made from the shed chitin of a changeling. It shifts and adapts to your form.",
    "category": "equipment",
    "price": 19000,
    "icon": "🐛",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Light Armor: AC 13 + DEX modifier",
      "Advantage on checks made to impersonate a humanoid",
      "Once per long rest: as a bonus action, change your appearance as per 'Alter Self'"
    ],
    "vendor": "Changeling Hive",
    "shippedBy": "Disguised Parcel",
    "levelRequirement": 5
  },
  "changeling_hive_disguise_kit": {
    "id": "changeling_hive_disguise_kit",
    "name": "Changeling Hive Disguise Kit",
    "description": "The Changeling Hive Disguise Kit arrives in a flat plum-colored case packed with skin paints, scent wax, false freckles, tiny tooth caps, and a mirror that politely refuses to show your original face. Hive artisans designed it for agents who need to borrow a convincing stranger’s manner for one tense meeting, not for permanent transformation. Its three measured makeup trays are color-coded for quick field work, though the lavender solvent smells unmistakably of honey and wet stone.",
    "category": "equipment",
    "price": 9500,
    "icon": "🎭",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Borrowed Face",
      "Three Prepared Disguises",
      "Hive Tell"
    ],
    "vendor": "changeling_hive_exchange",
    "shippedBy": "Makeup Case",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Borrowed Face",
        "rules": "Over 10 minutes, use the kit to copy a humanoid you can see or have studied from a clear portrait. For 8 hours, you have advantage on Charisma (Deception) checks made to pass as that person at a distance or in poor light. The kit cannot change your height, voice, body shape, or clothing, and close physical inspection reveals the makeup."
      },
      {
        "title": "Three Prepared Disguises",
        "rules": "The case holds material for three complete disguises. Mark off one use when you finish applying a new face, whether or not the deception succeeds. A spent tray cannot be reused; replacing all three trays requires a visit to the Changeling Hive Exchange or an equivalent disguise supplier."
      },
      {
        "title": "Hive Tell",
        "rules": "A creature with keen smell that comes within 5 feet can notice the kit’s honey-and-stone solvent with a successful Wisdom (Perception) check against your Deception result. This does not reveal your true identity by itself, but it identifies the disguise as Hive work."
      }
    ],
    "usage": {
      "activation": "10 minutes of careful application",
      "duration": "8 hours per completed disguise",
      "endsWhen": "The duration expires, you remove the makeup, or it is washed away with water and solvent",
      "charges": "3 disguise trays; each tray is consumed after one completed application"
    },
    "priceOriginal": 9500,
    "priceReason": "Manual continuation pass retained the existing listed price pending a separate economy review.",
    "levelRequirementReason": "Manual continuation pass retained the existing level gate for this item’s established complexity.",
    "vendorReason": "The existing Hive vendor remains the appropriate source for this specialized changeling craft or service.",
    "shippingDetail": "Delivered in a sealed Hive package; inspect the contents before use.",
    "aiReviewedAt": "2026-07-22T00:40:38.292686+00:00",
    "aiReviewVersion": 1,
    "priceReviewedAt": "2026-07-22T00:40:38.292686+00:00"
  },
  "changeling_hive_disguise_kit_premium": {
    "id": "changeling_hive_disguise_kit_premium",
    "name": "Changeling Hive Disguise Kit (Premium)",
    "description": "This premium Changeling Hive Disguise Kit is a lacquered theatre trunk no bigger than a lunchbox, lined with living pigment pads that remember the last face they copied. A brass breathing tube warms the paints to skin temperature while a chitin comb lays down false hair with unnerving precision. It is intended for embassy corridors, guarded receptions, and other places where a cheap fake would fail. After half an hour, however, the reactive pigment starts to itch beneath sustained concentration.",
    "price": 18000,
    "icon": "🎭",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "One-Hour Living Disguise",
      "Three Premium Faces",
      "Concentration Itch",
      "Hive Mimic Finish"
    ],
    "vendor": "changeling_hive_lair",
    "shippedBy": "Shapeshift Surprise",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "One-Hour Living Disguise",
        "rules": "As an action after 10 minutes of preparation, choose a Medium or Small humanoid appearance you have observed. For 1 hour your visible features, skin texture, and apparent clothing colors mimic that appearance. You have advantage on checks made to maintain the disguise against casual observers; touch, a known password, or a creature familiar with the target can still expose you."
      },
      {
        "title": "Three Premium Faces",
        "rules": "The kit contains three living pigment capsules. Activating a new disguise ruptures one capsule, even if the disguise is dismissed early. The capsules cannot be refilled in the field and must be replaced by a Hive Mimic artisan."
      },
      {
        "title": "Concentration Itch",
        "rules": "After you have worn a premium disguise for 30 consecutive minutes, make a DC 12 Constitution saving throw at the start of each minute you maintain concentration on a spell. On a failure, you have disadvantage on that concentration check; this irritation ends when the disguise ends."
      },
      {
        "title": "Hive Mimic Finish",
        "rules": "The pigment subtly imitates nearby colors, granting advantage on one Dexterity (Stealth) check made to hide in a crowd during the disguise duration. Once this benefit succeeds or fails, it cannot be used again until you activate a new capsule."
      }
    ],
    "usage": {
      "activation": "10 minutes preparation, then 1 action",
      "duration": "1 hour",
      "endsWhen": "The hour ends, the wearer dismisses the pigment, or the pigment is removed with the supplied solvent",
      "charges": "3 pigment capsules; one is consumed per disguise"
    },
    "priceOriginal": 18000,
    "priceReason": "Manual continuation pass retained the existing listed price pending a separate economy review.",
    "levelRequirementReason": "Manual continuation pass retained the existing level gate for this item’s established complexity.",
    "vendorReason": "The existing Hive vendor remains the appropriate source for this specialized changeling craft or service.",
    "shippingDetail": "Delivered in a sealed Hive package; inspect the contents before use.",
    "aiReviewedAt": "2026-07-22T00:40:38.292686+00:00",
    "aiReviewVersion": 1,
    "priceReviewedAt": "2026-07-22T00:40:38.292686+00:00"
  },
  "changeling_hive_identity_rental": {
    "id": "changeling_hive_identity_rental",
    "name": "Changeling Hive Identity Rental",
    "description": "The Changeling Hive Identity Rental is not a costume but a notarized day-pass to borrow the public face of a cooperative Hive citizen named Steve. The contract includes a voice-thread, a scent charm, and a folded etiquette card listing Steve’s favorite pastry, least favorite song, and mother’s telepathic calling hours. It is excellent for slipping through a registry or attending an appointment under a believable name. It is considerably less useful at karaoke, where Steve’s borrowed voice remains painfully flat.",
    "category": "services",
    "price": 19500,
    "icon": "🎭",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Steve’s Borrowed Face",
      "Maternal Check-In",
      "Steve Cannot Sing",
      "Hive Rental Contract"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Steve’s Borrowed Face",
        "rules": "When the rental is activated, you can cast Disguise Self at will for 24 hours, but the disguise always depicts Steve: a specific registered changeling appearance supplied with the contract. The illusion includes Steve’s voice but does not grant his memories, passwords, or mannerisms."
      },
      {
        "title": "Maternal Check-In",
        "rules": "Once during the rental period, the GM may have Steve’s mother send a telepathic message asking a mundane question about Steve’s day. If you answer implausibly, creatures who know Steve have advantage on their next Insight check against you. The message has no combat effect."
      },
      {
        "title": "Steve Cannot Sing",
        "rules": "While the identity is active, you have advantage on Charisma (Deception) checks made to sustain Steve’s ordinary persona and disadvantage on Charisma (Performance) checks involving singing. This disadvantage ends immediately when the rental ends."
      },
      {
        "title": "Hive Rental Contract",
        "rules": "The rental expires at the next dawn after activation. Returning the voice-thread to the Hive counter ends it early without penalty; attempting to keep or copy the thread causes the disguise to fail and flags the contract as overdue."
      }
    ],
    "usage": {
      "activation": "1 action to sign and activate the voice-thread",
      "duration": "24 hours, ending at the next dawn",
      "endsWhen": "The rental expires, the thread is returned, or the thread is deliberately cut",
      "charges": "One identity rental; the contract is redeemed and removed after expiry or return"
    },
    "priceOriginal": 19500,
    "priceReason": "Manual continuation pass retained the existing listed price pending a separate economy review.",
    "levelRequirementReason": "Manual continuation pass retained the existing level gate for this item’s established complexity.",
    "vendorReason": "The existing Hive vendor remains the appropriate source for this specialized changeling craft or service.",
    "shippingDetail": "Delivered in a sealed Hive package; inspect the contents before use.",
    "aiReviewedAt": "2026-07-22T00:40:38.292686+00:00",
    "aiReviewVersion": 1,
    "priceReviewedAt": "2026-07-22T00:40:38.292686+00:00"
  },
  "changeling_hive_love_jam_recipe": {
    "id": "changeling_hive_love_jam_recipe",
    "name": "Recipe: Changeling Hive Love Jam",
    "description": "This grease-spotted recipe card comes from the Changeling Hive’s communal kitchen, where every cook insists the secret ingredient is not magic but paying attention. The card explains how to simmer berries with rose salt and a measured spoonful of willingly given affection, then seal the jam before the pot decides what flavor it wants to be. The finished spread tingles on non-changeling tongues and makes conversations feel a little less guarded. It is a recipe, not an endlessly refillable jar.",
    "price": 7500,
    "icon": "🍓",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Cook Love Jam",
      "Emotional Insight",
      "Warm Familiarity",
      "Hive Forager Method"
    ],
    "vendor": "changeling_hive_nest",
    "shippedBy": "Sticky Sweet Scroll",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Cook Love Jam",
        "rules": "During 30 minutes of cooking, expend fresh berries and rose salt worth 5 gp to make one jar of Love Jam. A creature can eat a spoonful as an action or spread it on food during a short rest. The recipe card is not consumed by cooking."
      },
      {
        "title": "Emotional Insight",
        "rules": "For 2 hours after eating a spoonful, the creature has advantage on Wisdom (Insight) checks made to read a creature’s emotional state. This does not reveal thoughts, force honesty, or overcome magical concealment."
      },
      {
        "title": "Warm Familiarity",
        "rules": "During the same 2-hour period, the eater gains a +1 bonus to the first Charisma check it makes to improve the attitude of a creature it already knows and cares about. The bonus cannot affect hostile creatures or replace a sincere relationship."
      },
      {
        "title": "Hive Forager Method",
        "rules": "If the cook uses berries gathered from a Changeling Hive garden, one additional jar is produced. This benefit can be used once per cooking session and does not apply to purchased or conjured berries."
      }
    ],
    "usage": {
      "activation": "30 minutes of cooking; 1 action to eat a spoonful",
      "duration": "2 hours after eating",
      "endsWhen": "The duration expires or the eater is affected by an effect that suppresses taste or emotion magic",
      "charges": "Recipe is permanent; each cooked jar is consumed after one serving"
    },
    "priceOriginal": 7500,
    "priceReason": "Manual continuation pass retained the existing listed price pending a separate economy review.",
    "levelRequirementReason": "Manual continuation pass retained the existing level gate for this item’s established complexity.",
    "vendorReason": "The existing Hive vendor remains the appropriate source for this specialized changeling craft or service.",
    "shippingDetail": "Delivered in a sealed Hive package; inspect the contents before use.",
    "aiReviewedAt": "2026-07-22T00:40:38.292686+00:00",
    "aiReviewVersion": 1,
    "priceReviewedAt": "2026-07-22T00:40:38.292686+00:00"
  },
  "changeling_hive_mimic_apron": {
    "id": "changeling_hive_mimic_apron",
    "name": "Changeling Hive Mimic Apron",
    "description": "The Changeling Hive Mimic Apron looks immaculate because its woven chitin panels borrow the color and pattern of whatever clean garment is nearest. A chef can spill gravy across it and watch the stain vanish behind a new floral print, which has made it popular with cooks who value appearances over laundry. The reverse side is less charming: it quietly retains every real stain and carries a thriving colony of kitchen germs. It is fashionable camouflage, not sanitation equipment.",
    "category": "equipment",
    "price": 12500,
    "icon": "🎽",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Borrowed Cleanliness",
      "Hidden Grime",
      "Matching Palette",
      "Hive Textile Stitching"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Borrowed Cleanliness",
        "rules": "While wearing the apron while preparing or serving food, you have advantage on Charisma checks made to impress diners, judges, or patrons with your presentation. The benefit applies only while the apparent cleanliness of the apron is relevant."
      },
      {
        "title": "Hidden Grime",
        "rules": "The apron’s appearance never removes contamination. After each day of cooking while wearing it, make a DC 12 Constitution saving throw when exposed to disease from food or filth; on a failure, you have disadvantage on that saving throw. Cleaning the apron with soap and boiling water removes this drawback until it is used again."
      },
      {
        "title": "Matching Palette",
        "rules": "As a bonus action, the apron copies the dominant color of your outer clothing. This is cosmetic and grants no Stealth bonus, but it can conceal obvious stains or livery for the remainder of the day."
      },
      {
        "title": "Hive Textile Stitching",
        "rules": "The apron repairs ordinary tears during a long rest if at least one square inch of fabric remains. Fire, acid, or deliberate cutting prevents this repair until a Hive textile worker mends it."
      }
    ],
    "usage": {
      "activation": "Passive while worn; bonus action to change displayed color",
      "duration": "Until removed",
      "endsWhen": "Its display effect ends when removed; the disease drawback ends after proper cleaning",
      "charges": "Unlimited; not consumed by normal use"
    },
    "priceOriginal": 12500,
    "priceReason": "Manual continuation pass retained the existing listed price pending a separate economy review.",
    "levelRequirementReason": "Manual continuation pass retained the existing level gate for this item’s established complexity.",
    "vendorReason": "The existing Hive vendor remains the appropriate source for this specialized changeling craft or service.",
    "shippingDetail": "Delivered in a sealed Hive package; inspect the contents before use.",
    "aiReviewedAt": "2026-07-22T00:40:38.292686+00:00",
    "aiReviewVersion": 1,
    "priceReviewedAt": "2026-07-22T00:40:38.292686+00:00"
  },
  "changeling_hive_mimic_potholder": {
    "id": "changeling_hive_mimic_potholder",
    "name": "Changeling Hive Mimic Potholder",
    "description": "At first glance this Changeling Hive Mimic Potholder appears to be your own spare hand, down to the familiar knuckle creases and a slightly judgmental thumb. The soft chitin weave insulates against oven heat and hot cookware, but its mimic reflex occasionally shifts at exactly the wrong moment. Hive cooks call that a reminder to pay attention. It is useful around a stove, less useful during sleight-of-hand tricks, and distinctly unsettling when left on a table by itself.",
    "category": "equipment",
    "price": 7500,
    "icon": "🧤",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Kitchen Heat Guard",
      "Borrowed Hand Shape",
      "Mimic Reflex",
      "Hive Textile Stitching"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Kitchen Heat Guard",
        "rules": "While holding cookware, a baking tray, or another object heated by ordinary cooking, your hand protected by the potholder takes no fire damage from that object. This protection does not apply to spell flames, lava, or a creature’s fire attack."
      },
      {
        "title": "Borrowed Hand Shape",
        "rules": "The potholder mimics your hand closely enough that creatures often overlook it. While wearing it, you have disadvantage on Dexterity (Sleight of Hand) checks that require another creature to notice what is in your hand, because the false hand obscures your grip."
      },
      {
        "title": "Mimic Reflex",
        "rules": "The first time each day you use the potholder to lift a hot object, roll a d6. On a 1, it twitches loose and you take 1 fire damage from the object before regaining your grip. This cannot drop an item unless you choose to release it."
      },
      {
        "title": "Hive Textile Stitching",
        "rules": "Minor scorch marks disappear after a long rest. If the potholder is destroyed by acid, magical fire, or a deliberate cut, this repair trait does not function."
      }
    ],
    "usage": {
      "activation": "Wear on one hand",
      "duration": "While worn",
      "endsWhen": "Protection ends when removed or when used against non-cooking magical heat",
      "charges": "Unlimited; one Mimic Reflex roll per day"
    },
    "priceOriginal": 7500,
    "priceReason": "Manual continuation pass retained the existing listed price pending a separate economy review.",
    "levelRequirementReason": "Manual continuation pass retained the existing level gate for this item’s established complexity.",
    "vendorReason": "The existing Hive vendor remains the appropriate source for this specialized changeling craft or service.",
    "shippingDetail": "Delivered in a sealed Hive package; inspect the contents before use.",
    "aiReviewedAt": "2026-07-22T00:40:38.292686+00:00",
    "aiReviewVersion": 1,
    "priceReviewedAt": "2026-07-22T00:40:38.292686+00:00"
  },
  "changeling_hive_recipe_identity_crisis_casserole": {
    "id": "changeling_hive_recipe_identity_crisis_casserole",
    "name": "Recipe: Changeling Hive Identity Crisis Casserole",
    "description": "A casserole that changes flavor mid-bite.",
    "price": 12500,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Grants advantage on Deception checks for 1 hour (you feel deceptive)",
      "You forget your favorite food (disadvantage on checks involving memory)",
      "Casserole changes flavor 1d6 times while eating (confusing but delicious)",
      "Made by: Changeling Hive Cooks"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 5
  },
  "changeling_hive_shape_shifter_sifter": {
    "id": "changeling_hive_shape_shifter_sifter",
    "name": "Changeling Hive Shape-Shifter Sifter",
    "description": "Sifter that 'adapts' to ingredient sizes for jams.",
    "category": "equipment",
    "price": 7500,
    "icon": "🍓",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Sifts varying sizes; advantage on prep for emotional recipes",
      "Changes mesh for love essences",
      "Shifts form randomly (fun or frustrating)",
      "Made by: Hive Toolmakers"
    ],
    "vendor": "changeling_hive_nest",
    "shippedBy": "Adaptive Alloy",
    "levelRequirement": 5
  },
  "changeling_hive_shapeshift_scarf": {
    "id": "changeling_hive_shapeshift_scarf",
    "name": "Changeling Hive Shapeshift Scarf",
    "description": "Scarf that aids in minor disguises.",
    "price": 18500,
    "icon": "🧣",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Disguise checks for facial alterations",
      "Scarf changes color to match surroundings",
      "Itches if worn too long (disadvantage on Concentration)",
      "Made by: Hive Silkers"
    ],
    "vendor": "changeling_hive_nest",
    "shippedBy": "Chameleon Wrap",
    "levelRequirement": 7
  },
  "changeling_molt_cloak": {
    "id": "changeling_molt_cloak",
    "name": "Changeling Molt Cloak",
    "description": "A cloak made from shed skin, allowing the wearer to perfectly mimic the texture and scent of another.",
    "price": 55000,
    "icon": "🦎",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Allows perfect mimicry of a single humanoid's scent, texture, and superficial appearance",
      "Requires 1 hour to attune to a new target",
      "Made by: Changeling Hive"
    ],
    "vendor": "changeling_hive_exchange",
    "shippedBy": "Live Specimen",
    "levelRequirement": 8
  },
  "chaos_dwarfs_daemon_engine_tune_service": {
    "id": "chaos_dwarfs_daemon_engine_tune_service",
    "name": "Chaos Dwarfs Daemon Engine Tune Service",
    "description": "Boost a construct's power slightly.",
    "price": 16000,
    "icon": "⚙️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Construct +1 attack/damage for 1 day",
      "Risk of chaos mutation (roll d6: minor quirk)",
      "Engine purrs ominously",
      "Made by: Chaos Mechanics"
    ],
    "vendor": "chaos_dwarfs_forge",
    "shippedBy": "Hellbolt Delivery",
    "levelRequirement": 7
  },
  "chaos_dwarfs_hell_bellows": {
    "id": "chaos_dwarfs_hell_bellows",
    "name": "Chaos Dwarfs Hell Bellows",
    "description": "Bellows fueled by chaos for roasts.",
    "category": "equipment",
    "price": 7500,
    "icon": "🥩",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Fans chaotic flames; advantage on unpredictable recipes",
      "Random heat (boon or bane)",
      "Bellows warp slightly",
      "Made by: Chaos Forges"
    ],
    "vendor": "chaos_dwarfs_forge",
    "shippedBy": "Hell Heat Haul",
    "levelRequirement": 5
  },
  "chaos_dwarfs_hellfire_roast_recipe": {
    "id": "chaos_dwarfs_hellfire_roast_recipe",
    "name": "Recipe: Chaos Dwarfs Hellfire Roast",
    "description": "Spicy roast cooked over infernal flames for chaotic vigor.",
    "price": 8500,
    "icon": "🥩",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Teaches recipe: Roast over heat (1 hour); eat to gain random mutation boon (+1 random stat for 2 hours) or bane",
      "Requires: Meat and chaos spices; unpredictable",
      "Chaos gods approve",
      "Made by: Hellforge Cooks"
    ],
    "vendor": "chaos_dwarfs_forge",
    "shippedBy": "Fiery Flesh Folio",
    "levelRequirement": 6
  },
  "chaos_dwarfs_hellforged_leather": {
    "id": "chaos_dwarfs_hellforged_leather",
    "name": "Chaos Dwarfs Hellforged Leather",
    "description": "Tough leather from infernal beasts.",
    "price": 20000,
    "icon": "🧥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+1 AC against fire or chaos",
      "Leather resists tearing",
      "Emits faint heat (uncomfortable in summer)",
      "Made by: Chaos Forgers"
    ],
    "vendor": "chaos_dwarfs_anvil",
    "shippedBy": "Branded Hide",
    "levelRequirement": 7
  },
  "chaos_heart": {
    "id": "chaos_heart",
    "name": "The Chaos Heart",
    "description": "A dark artifact capable of consuming all worlds. The Void is calling.",
    "category": "forbidden",
    "price": 1500000,
    "icon": "🖤",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Grants invulnerability to all attacks unless pierced by Pure Heart",
      "Can open Void rifts (banish enemies to non-existence)",
      "You slowly lose your soul to the Void",
      "The universe begins to decay while you hold this"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 200,
    "warning": "WILL END THE CAMPAIGN IF USED IMPROPERLY"
  },
  "chaos_heart_shard": {
    "id": "chaos_heart_shard",
    "name": "Shard of the Chaos Heart",
    "description": "A fragment of dimensional instability. The Cosmic Jesters' holiest relic.",
    "category": "forbidden",
    "price": 750000,
    "icon": "💜",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "On critical hit: Reality warps (roll on Wild Magic table)",
      "Advantage on Chaos-based magic",
      "Disadvantage on all saves vs. Order-based effects",
      "Dimensions occasionally bleed into your vicinity"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "DIMENSIONAL INSTABILITY - PICKUP ONLY",
    "levelRequirement": 12,
    "warning": "Possession punishable by banishment to the Void Between Worlds"
  },
  "cheep_cheep_aquarium": {
    "id": "cheep_cheep_aquarium",
    "name": "Portable Cheep-Cheep Tank",
    "description": "A bubble containing a living fish. Shoots water jets on command.",
    "category": "equipment",
    "price": 11000,
    "icon": "🐟",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Action: 15ft water jet, 2d6 Bludgeoning",
      "Can breathe underwater while holding tank",
      "Cheep-Cheep sings sea shanties",
      "Tank cracks if dropped (fish becomes hostile)"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Water Bubble",
    "levelRequirement": 3
  },
  "cheep_cheep_life_preserver": {
    "id": "cheep_cheep_life_preserver",
    "name": "Cheep Cheep Life Preserver",
    "description": "Floats you safely... while screaming underwater opera.",
    "category": "equipment",
    "price": 15000,
    "icon": "🐠",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "You cannot drown",
      "Swim Speed 30ft",
      "While submerged, emits loud operatic singing (no stealth)",
      "Attracts aquatic predators (roll WIS save DC 12 or summon 1d4 hostile fish)"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Floating Crate",
    "levelRequirement": 3
  },
  "cheep_cheep_net": {
    "id": "cheep_cheep_net",
    "name": "Cheep Cheep Net",
    "description": "A net that catches flying fish for food or bombs.",
    "category": "equipment",
    "price": 6000,
    "icon": "🕸️",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Catch aquatic creatures (1d4 fish per use)",
      "Can entangle flying enemies (restrained, STR save DC 13)",
      "Durable, 5 uses before repair"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Net Roll",
    "levelRequirement": 2
  },
  "chet_rippo_service": {
    "id": "chet_rippo_service",
    "name": "Stat Reallocation",
    "description": "Chet Rippo will rearrange your stats. It might hurt.",
    "category": "services",
    "price": 100000,
    "icon": "🧙‍♂️",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Move 2 points from one Stat to another permanently",
      "Cannot exceed 20"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "In Person",
    "levelRequirement": 5
  },
  "chomp_call_whistle": {
    "id": "chomp_call_whistle",
    "name": "Chain Chomp Call",
    "description": "A rusty whistle that summons a wild Chain Chomp. Hope you're friends.",
    "category": "consumables",
    "price": 15000,
    "icon": "📯",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Summons CR 2 Chain Chomp (1 minute)",
      "50% chance it attacks you instead",
      "Chomp leaves after 1 minute or when bored",
      "Dogs hate the sound"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Chain Wrap",
    "levelRequirement": 5
  }
};
