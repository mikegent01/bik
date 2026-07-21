// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_065 = {
  "earth_land_wario_lucky_charm": {
    "id": "earth_land_wario_lucky_charm",
    "name": "Wario's Golden Boot of Fortune",
    "description": "Legend says this boot was personally crafted by Wario himself after he tripped and found a golden ingot. It’s guaranteed to bring you good luck... or just attract more trouble, like a magnet!",
    "category": "equipment",
    "price": 8000,
    "icon": "💰",
    "stock": 25,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "+1 to attack rolls",
      "chance to trigger a 'lucky break' (random bonus effect)",
      "grants temporary resistance to negative status effects"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "rocket_beetle",
    "levelRequirement": 12
  },
  "mushroom_kingdom_item_golden_coin_launcher": {
    "id": "mushroom_kingdom_item_golden_coin_launcher",
    "name": "Golden Coin Launcher",
    "description": "This bizarre device fires enchanted golden coins with surprising force! It's perfect for knocking over enemies, triggering traps, or simply annoying your friends. Wario guarantees it’ll make you rich... eventually.",
    "category": "equipment",
    "price": 12000,
    "icon": "💰",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "deals_1d6_bludgeoning_damage",
      "chance_to_stun_target",
      "increased_range"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "mushroom_delivery",
    "levelRequirement": 8
  },
  "mushroom_kingdom_item_wart_armor": {
    "id": "mushroom_kingdom_item_wart_armor",
    "name": "Wart Armor of Resilience",
    "description": "Crafted from the toughest warthog warts in the Mushroom Kingdom, this armor provides surprisingly effective protection. It's a bit slimy, but hey, it’s stylish and Wario approves!",
    "category": "equipment",
    "price": 6500,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased_armor_class",
      "resistance_to_poison",
      "chance_to_block_attacks"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "snail_express",
    "levelRequirement": 5
  },
  "mushroom_kingdom_item_mushroom_king_favor": {
    "id": "mushroom_kingdom_item_mushroom_king_favor",
    "name": "Mushroom King's Favor",
    "description": "A token of gratitude from the Mushroom King himself! This mystical mushroom grants a small boost to your strength and charisma, though he expects you to do his bidding... or at least visit him regularly.",
    "category": "faction",
    "price": 80000,
    "icon": "👑",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "increased_strength",
      "increased_charisma",
      "chance_to_pacify_hostile_creatures"
    ],
    "vendor": "wario_direct",
    "shippedBy": "giant_mushroom_delivery",
    "levelRequirement": 20
  },
  "teyvat_item_archon_scroll": {
    "id": "teyvat_item_archon_scroll",
    "name": "Fragment of the Divine Decree",
    "description": "A meticulously crafted scroll bearing a fragment of an Archon’s decree - seemingly lost to time. Studying it might grant you insight or, more likely, give you a headache from all the complicated rules!",
    "category": "equipment",
    "price": 6500,
    "icon": "📜",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "chance to reveal hidden pathways (10%)",
      "increased wisdom stat (5)",
      "small mana regeneration buff (1)"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "wind_ship",
    "levelRequirement": 8
  },
  "leclaire_isle_item_crusty_crown": {
    "id": "leclaire_isle_item_crusty_crown",
    "name": "Crusty Crown of Crumbling Courage",
    "description": "This magnificent crown is forged from hardened dough and shimmering sugar crystals. Wearing it grants a temporary boost to your resistance against fear, but be warned – prolonged use may result in an uncontrollable urge to devour pastries!",
    "category": "equipment",
    "price": 12000,
    "icon": "👑",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase resistance to fear by 30%",
      "grant +1 charisma while consuming sweets",
      "chance to gain a minor pastry-related buff (e.g., increased speed)"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Dough Delivery Drone",
    "levelRequirement": 8
  },
  "leclaire_isle_item_sweet_serenity_potion": {
    "id": "leclaire_isle_item_sweet_serenity_potion",
    "name": "Sweet Serenity Potion",
    "description": "Brewed with enchanted honey and moonlit lavender, this potion washes over you with a blissful calm. It's perfect for calming nerves before a battle... or just indulging in a truly decadent nap!",
    "category": "consumables",
    "price": 6500,
    "icon": "😴",
    "stock": 20,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "heals 50 HP",
      "restores 20% MP",
      "grants temporary immunity to 'frustration' status effect"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Swift Delivery Pigeon",
    "levelRequirement": 4
  },
  "leclaire_isle_item_mythic_dough_of_distortion": {
    "id": "leclaire_isle_item_mythic_dough_of_distortion",
    "name": "Mythic Dough of Distortion",
    "description": "A pulsating, sentient dough that warps reality around it! This incredibly rare artifact can be molded into temporary weapons or shields, but beware – its effects are unpredictable and may lead to hilarious (and potentially dangerous) transformations!",
    "category": "curiosities",
    "price": 75000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "creates a temporary weapon or shield (random stats)",
      "chance to transform the user into a pastry-themed creature for 3 turns",
      "triggers random environmental effects (e.g., chocolate rain, frosting fog)"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Dimensional Portal Delivery",
    "levelRequirement": 20
  },
  "leclaire_isle_crimson_crumb": {
    "id": "leclaire_isle_crimson_crumb",
    "name": "Crimson Crumb of Chaos",
    "description": "A single, pulsating crumb harvested from a rogue batch of demonic brioche. This tiny morsel brings unpredictable bursts of sugary chaos - expect temporary buffs, minor curses, and maybe a sudden craving for sprinkles.",
    "category": "consumables",
    "price": 1200,
    "icon": "💥",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "randomly grants +1 to attack or defense for 3 turns",
      "chance to inflict 'sticky fingers' (reduces accuracy)",
      "small chance of summoning a miniature gingerbread man"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Flying Cart",
    "levelRequirement": 7
  },
  "leclaire_isle_golden_rolling_pin": {
    "id": "leclaire_isle_golden_rolling_pin",
    "name": "Golden Rolling Pin of Momentum",
    "description": "This enchanted rolling pin seems to have a mind of its own, propelling the user forward with incredible speed and force! It's perfect for smashing through defenses...or just really fast pastry making.",
    "category": "equipment",
    "price": 18000,
    "icon": "🥠",
    "stock": 2,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increases movement speed by 50%",
      "chance to trigger 'impact' effect (deals moderate damage on hit)",
      "grants a bonus to persuasion checks when offering pastries"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Wario Express Courier",
    "levelRequirement": 10
  },
  "the_edge_forbidden_lantern": {
    "id": "the_edge_forbidden_lantern",
    "name": "Whisperlight Lantern",
    "description": "This lantern burns with a sickly green flame, illuminating only the darkest corners of reality. It attracts unwanted attention from entities best left undisturbed and whispers secrets to those who listen too closely – usually bad ones.",
    "category": "forbidden",
    "price": 7500,
    "icon": "🕯️",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "grants darkvision",
      "+2 to stealth in darkness",
      "chance to summon a minor shadow demon (low level)"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "black raven",
    "levelRequirement": 15
  },
  "the_edge_wario_bomb_of_confusion": {
    "id": "the_edge_wario_bomb_of_confusion",
    "name": "Wario's Chaotic Burst",
    "description": "A delightfully unstable sphere of pure chaotic energy! Throw this bad boy and watch your enemies flail about, completely bewildered. Just… don’t aim it at yourself.",
    "category": "consumables",
    "price": 350,
    "icon": "💣",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deals 1d6 force damage",
      "enemies have a 50% chance to be stunned for 1 round",
      "chance to inflict confusion on target"
    ],
    "vendor": "final_shop",
    "shippedBy": "express delivery",
    "levelRequirement": 3
  },
  "kivotos_item_data_shard_37b": {
    "id": "kivotos_item_data_shard_37b",
    "name": "Digital Echo Fragment",
    "description": "A pulsating shard of corrupted data, radiating a faint blue glow. This mysterious piece might contain remnants of forgotten algorithms or lost memories from the Academy City's network. Wario thinks it’s full of recipes!",
    "category": "curiosities",
    "price": 1200,
    "icon": "💾",
    "stock": 55,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance_buff_intelligence_10%",
      "detect_hidden_objects_25%",
      "duration_8_seconds"
    ],
    "vendor": "student_store",
    "shippedBy": "package_bot",
    "levelRequirement": 5
  },
  "earth_land_item_sticky_slime": {
    "id": "earth_land_item_sticky_slime",
    "name": "Sludge of Sticky Success!",
    "description": "This pulsating blob of earth slime is surprisingly helpful! It clings to enemies, slowing them down and making them easier for your party to tackle – just try not to get stuck yourself!",
    "category": "consumables",
    "price": 150,
    "icon": "💩",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "applies sticky condition for 3 turns",
      "slows target by 50%",
      "chance to cause a comical slip-up (10%)"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "Mud Pony Express",
    "levelRequirement": 1
  },
  "earth_land_item_dragonscale_gauntlets": {
    "id": "earth_land_item_dragonscale_gauntlets",
    "name": "Grumblescale Gauntlets of Minor Might!",
    "description": "Forged from the shed scales of a particularly grumpy young dragon, these gauntlets grant you a little extra oomph! They’re surprisingly comfortable, though they do occasionally emit small sparks when you punch things – Wario would love them!",
    "category": "equipment",
    "price": 1200,
    "icon": "🐉",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+5 Strength for 6 turns",
      "chance to inflict bleed on hit (15%)",
      "increased knockback resistance"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Wyvern Post",
    "levelRequirement": 4
  },
  "earth_land_item_ancient_stone_charm": {
    "id": "earth_land_item_ancient_stone_charm",
    "name": "Whispering Stone of Forgotten Roots!",
    "description": "This smooth, grey stone feels strangely warm to the touch. It’s said to whisper forgotten secrets of the earth – mostly complaints about bad weather and the occasional territorial gnome. Use it wisely… or just keep it as a cool paperweight!",
    "category": "curiosities",
    "price": 6500,
    "icon": "🗿",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance to gain temporary wisdom (+3 for 4 turns)",
      "provides minor resistance to earth magic",
      "can be used as a distraction (lowers enemy’s perception)"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Golem Delivery Service",
    "levelRequirement": 9
  },
  "midlands_item_empire_decree": {
    "id": "midlands_item_empire_decree",
    "name": "Decree of the Iron Hand",
    "description": "Issued by a long-dead Emperor, this parchment is surprisingly potent. It’s rumored to have been used to quell rebellions and enforce absolute obedience – though its effects are… somewhat unpredictable.",
    "category": "faction",
    "price": 12000,
    "icon": "📜",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+2 Charisma when interacting with Imperial officials (if any)",
      "Chance to trigger a positive faction event (e.g., reduced taxes)",
      "Grants advantage on persuasion checks against lawful characters"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "imperial messenger",
    "levelRequirement": 6
  },
  "midlands_item_aegis_of_silence": {
    "id": "midlands_item_aegis_of_silence",
    "name": "Aegis of Silence",
    "description": "This shimmering shield, crafted by a forgotten order of monks, absorbs sound and dampens magic. It’s surprisingly comfortable... and suspiciously effective at making you disappear.",
    "category": "equipment",
    "price": 65000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Grants +4 to AC",
      "Reduces the range of enemy spells by 50%",
      "Allows wearer to cast 'Silence' once per day (DC 18)",
      "Provides advantage on stealth checks in dimly lit areas"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dragon airship",
    "levelRequirement": 15
  },
  "almost_edge_crumb_of_void": {
    "id": "almost_edge_crumb_of_void",
    "name": "Crumb of Void",
    "description": "A fragment of the very edge, solidified into a sugary treat! Eating this crumb offers a fleeting glimpse beyond reality, possibly leading to delightful confusion or existential dread – you’ve been warned!",
    "category": "consumables",
    "price": 75000,
    "icon": "✨",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "restores 100 HP",
      "chance to gain temporary madness (10%)",
      "grants +2 Dexterity for 3 turns"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 15
  },
  "almost_edge_chronal_boots": {
    "id": "almost_edge_chronal_boots",
    "name": "Chronal Boots of Shifting Steps",
    "description": "These boots were once the footwear of a time-lost pastry chef. They allow you to briefly manipulate your personal timeline, letting you dodge attacks or rewind small mistakes – just try not to create paradoxes!",
    "category": "equipment",
    "price": 18000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance to rewind time by 2 turns (5%)",
      "+1 Dexterity",
      "Increases dodge chance by 10%"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 8
  },
  "almost_edge_observer_lens": {
    "id": "almost_edge_observer_lens",
    "name": "Observer's Lens of the Forgotten",
    "description": "Gaze through this lens and witness echoes of those who fell into the void. It provides glimpses into the past...or maybe just a really unsettling reflection – Wario wouldn’t be surprised!",
    "category": "curiosities",
    "price": 1200,
    "icon": "👁️",
    "stock": 95,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Reveals hidden paths (small chance)",
      "Increases perception by 1",
      "Provides a faint sense of unease"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Spectral Delivery",
    "levelRequirement": 3
  },
  "animatopia_boar_charm": {
    "id": "animatopia_boar_charm",
    "name": "Boar's Fury Amulet",
    "description": "This amulet, crafted from the tusk of a sacred boar, is said to imbue its wearer with the beast’s raw aggression! It might not actually make you charge headfirst into battle, but it *will* give you a righteous rage... and possibly a headache.",
    "category": "equipment",
    "price": 3500,
    "icon": "🐗",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased_attack_damage_10",
      "temporary_rage_boost",
      "chance_to_stagger"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_monkey",
    "levelRequirement": 6
  },
  "animatopia_honeycomb_potion": {
    "id": "animatopia_honeycomb_potion",
    "name": "Buzzing Bliss Brew",
    "description": "A viscous, golden potion brewed from the rarest honey harvested by giant, iridescent bees! This delightful concoction temporarily boosts your speed and agility – perfect for zipping around like a hyperactive squirrel!",
    "category": "consumables",
    "price": 750,
    "icon": "🍯",
    "stock": 88,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_movement_speed_20",
      "temporary_agility_boost"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_bee",
    "levelRequirement": 3
  },
  "internet_faction_access_badge": {
    "id": "internet_faction_access_badge",
    "name": "Data Tribe Recognition Badge",
    "description": "Officially recognized access badge from the esteemed 'Pixel Pioneers' faction – a powerful collective of data miners and algorithm enthusiasts. Wearing this grants you entry to exclusive networks, discounts at cyber-markets, and the respect (and occasional suspicion) of the digital tribes.",
    "category": "faction",
    "price": 6500,
    "icon": "🔑",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "grants access to exclusive cyber-markets",
      "+10% chance to find rare items in digital locations",
      "Reputation increase with Pixel Pioneers faction"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 10
  },
  "warhammer_runeofdespair": {
    "id": "warhammer_runeofdespair",
    "name": "Rune of Despair",
    "description": "This ancient warhammer is etched with runes that whisper of shattered hopes and broken spirits. Strike with it, and watch your foes succumb to a chilling wave of dread – but be careful, the despair may linger.",
    "category": "equipment",
    "price": 6500,
    "icon": "🖤",
    "stock": 20,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "damage: physical +1d6",
      "chance: 5% chance to inflict 'despair'",
      "morale: decreased"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 4
  },
  "chaos_rune_scroll": {
    "id": "chaos_rune_scroll",
    "name": "Scroll of Unraveling Fate",
    "description": "A disturbingly vibrant scroll pulsing with chaotic energy. When unfurled, it grants a temporary boost to your luck and the ability to subtly alter events – though beware, the threads of fate are fickle and might unravel in unexpected ways!",
    "category": "curiosities",
    "price": 7500,
    "icon": "🌀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increased luck",
      "chance to reroll failed checks",
      "small chance of triggering a chaotic event"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Swift Delivery",
    "levelRequirement": 10
  },
  "godly_aegis_of_doom": {
    "id": "godly_aegis_of_doom",
    "name": "Aegis of Doom - The Harbinger's Shield",
    "description": "This shield radiates an aura of despair, capable of deflecting even the most powerful blows. Wielding it feels like staring into the abyss – and the abyss is staring back with a vengeance!",
    "category": "equipment",
    "price": 750000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "high armor value",
      "chance to inflict fear on enemies",
      "absorbs a portion of damage from undead and demonic creatures",
      "small chance to summon a spectral wail"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Divine Messenger",
    "levelRequirement": 35
  },
  "earth_land_mudcrushers_giant_snail": {
    "id": "earth_land_mudcrushers_giant_snail",
    "name": "Giant Snail Mudcrushers",
    "description": "These enormous snail shells, harvested from the Sludge Swamps, are surprisingly durable! When shattered against a foe, they unleash a torrent of sticky mud that slows and damages enemies. Wario loves the extra goo!",
    "category": "equipment",
    "price": 850,
    "icon": "🐌",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "slow_target_3",
      "damage_moderate_physical",
      "apply_effect_mud"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "wagon",
    "levelRequirement": 6
  },
  "earth_land_whispering_shard_dragon": {
    "id": "earth_land_whispering_shard_dragon",
    "name": "Whispering Shard of the Dragon's Fury",
    "description": "A fragment of a dragon’s scale, imbued with ancient magic. Holding it allows you to briefly channel the dragon’s raw power – but be warned, prolonged use can drive you mad! This is definitely NOT for the faint of heart (or mind).",
    "category": "forbidden",
    "price": 6200,
    "icon": "🔥",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "damage_high_fire",
      "chance_confusion",
      "increased_strength_5"
    ],
    "vendor": "magic_shop",
    "shippedBy": "flying_carpet",
    "levelRequirement": 8
  },
  "earth_land_warpstone_beetle": {
    "id": "earth_land_warpstone_beetle",
    "name": "Warpstone Beetle's Echo",
    "description": "This iridescent beetle shell pulsates with miniature dimensional rifts. When activated, it creates a brief but unstable portal – perfect for quickly escaping danger or ambushing unsuspecting foes! Just don’t get stuck on the other side… Wario always does.",
    "category": "curiosities",
    "price": 1200,
    "icon": "🌀",
    "stock": 23,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "teleport_short_range",
      "chance_illusion",
      "minor_luck_boost"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 4
  },
  "fate_shadowbinder": {
    "id": "fate_shadowbinder",
    "name": "Fate's Shadowbinder - A Ritual of Uncertainty",
    "description": "This intricately carved obsidian pendant pulses with unsettling energy. It doesn’t exactly *do* anything, but it does make your enemies question their existence...and possibly your sanity. Wario recommends not using it during important meetings.",
    "category": "curiosities",
    "price": 7500,
    "icon": "🔮",
    "stock": 10,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "chance to confuse target (20%) on use",
      "provides a small bonus to perception checks",
      "reduces enemy attack rolls by 5% against the user"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Messenger Drake",
    "levelRequirement": 12
  },
  "warhammer_doomscribe": {
    "id": "warhammer_doomscribe",
    "name": "Doomscribe - A Chronicle of Despair",
    "description": "This legendary warhammer isn’t just for smashing; it writes prophecies! (Mostly about doom, naturally.) The ink flows with the tears of forgotten gods.  Don't worry, you won't be responsible for any apocalyptic events – probably.",
    "category": "equipment",
    "price": 65000,
    "icon": "📜",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "damage: blunt 3d8 + strength modifier",
      "chance to inflict fear on hit (15%)",
      "grants a permanent bonus to intimidation checks",
      "allows the wielder to cast ‘Dark Vision’ once per day"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Hellhound Express",
    "levelRequirement": 25
  },
  "internet_meme_generator": {
    "id": "internet_meme_generator",
    "name": "The LOL-inator 5000",
    "description": "This absurd machine generates powerful memes directly into reality! With careful calibration, you can weaponize laughter and confusion – just don’t blame us if the world descends into utter silliness.",
    "category": "services",
    "price": 2500,
    "icon": "😂",
    "stock": 88,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to inflict 'Distraction' status (30%)",
      "restores party morale (+5)",
      "creates a small area of confusion"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Data Stream",
    "levelRequirement": 3
  },
  "midlands_item_merchant_favor": {
    "id": "midlands_item_merchant_favor",
    "name": "Guildmaster's Grudging Blessing",
    "description": "A small, intricately carved wooden token representing the Merchant’s Guild. It doesn't magically increase your profits, but it does seem to make the local merchants slightly less hostile... mostly because they're intimidated by its grumpy expression.",
    "category": "faction",
    "price": 350,
    "icon": "💰",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "+1 reputation with the Merchant’s Guild",
      "discounts on goods from guild-affiliated vendors",
      "chance to receive a small gift (random consumable)"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "delivery_drone",
    "levelRequirement": 3
  },
  "middle_earth_goblin_grapple": {
    "id": "middle_earth_goblin_grapple",
    "name": "Gimli's Grasping Gauntlet",
    "description": "This surprisingly comfortable gauntlet was crafted by a particularly enthusiastic goblin tinker. It’s imbued with a minor earth enchantment, allowing you to grapple enemies and pull yourself across treacherous terrain – perfect for escaping grumpy dwarves or snatching shiny trinkets!",
    "category": "equipment",
    "price": 12000,
    "icon": "💪",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increase_strength_5",
      "grapple_enemy",
      "climb_terrain"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "wagon",
    "levelRequirement": 6
  },
  "middle_earth_elven_whisperwind": {
    "id": "middle_earth_elven_whisperwind",
    "name": "Silvanus's Swiftfoot Sandals",
    "description": "These exquisitely crafted sandals, favored by the Silvan Elves of Mirkwood, are said to grant the wearer a fleeting touch of nature’s speed. Slip them on and feel the wind carry you – though watch out for grumpy spiders!",
    "category": "consumables",
    "price": 800,
    "icon": "💨",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "speed_boost_2",
      "agility_bonus"
    ],
    "vendor": "elven_market",
    "shippedBy": "hawk",
    "levelRequirement": 3
  },
  "equestria_item_apple_of_discord": {
    "id": "equestria_item_apple_of_discord",
    "name": "Apple of Discord (Repaired)",
    "description": "Legend says this apple caused a terrible war! Fortunately, a kindly unicorn repaired it – mostly. It still radiates a faint aura of chaos and may occasionally cause minor inconveniences… like turning your armor pink or making you crave sugar.",
    "category": "curiosities",
    "price": 650,
    "icon": "🍎",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance_to_confuse_monster_10%",
      "increase_charisma_2",
      "grant_minor_healing_1"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Delivery Swifts",
    "levelRequirement": 3
  },
  "internet_cyber_guild_badge": {
    "id": "internet_cyber_guild_badge",
    "name": "Access Pass - The Glitch Collective",
    "description": "A genuine badge of membership to the notorious Glitch Collective, a shadowy faction operating within the deepest layers of the Internet. Possession grants access to exclusive data streams and… potentially questionable services. Don’t ask too many questions, just enjoy the chaos.",
    "category": "faction",
    "price": 8000,
    "icon": "💻",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant_minor_bonus_to_hacking_skills",
      "chance_to_receive_encrypted_messages (useful information)",
      "discounts at cyber_market"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Packet Relay",
    "levelRequirement": 5
  },
  "faerun_item_whispering_scrolls": {
    "id": "faerun_item_whispering_scrolls",
    "name": "Whispering Scrolls of Divination",
    "description": "These ancient scrolls seem to murmur prophecies – mostly about Wario's terrible fashion choices. Spend some time deciphering them, and you might just avoid a truly awful situation… or at least have a good laugh.",
    "category": "services",
    "price": 800,
    "icon": "📜",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_divination_effect_once",
      "increased_luck"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying_carpet",
    "levelRequirement": 8
  },
  "faerun_item_gloomstone_amulet": {
    "id": "faerun_item_gloomstone_amulet",
    "name": "Gloomstone Amulet of Shadowed Dreams",
    "description": "This amulet pulses with an unsettling darkness. Wearing it might give you nightmares… or unlock hidden powers! Just don’t blame us if you start hoarding shiny objects.",
    "category": "curiosities",
    "price": 6500,
    "icon": "🌑",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance_to_cast_shadow_magic",
      "increased_stealth",
      "night_vision"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "delivery_only",
    "levelRequirement": 10
  },
  "faerun_item_potion_of_goblin_giggles": {
    "id": "faerun_item_potion_of_goblin_giggles",
    "name": "Potion of Goblin Giggles",
    "description": "Brewed with fermented mushrooms and a dash of pure mischief, this potion will have you uncontrollably giggling at the most inappropriate times. Don't say we didn't warn you!",
    "category": "consumables",
    "price": 650,
    "icon": "😂",
    "stock": 32,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "heal_15_hp",
      "grant_confusion_for_3_turns"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 3
  },
  "warhammer_ironclad_banner": {
    "id": "warhammer_ironclad_banner",
    "name": "Ironclad Banner Warhammer",
    "description": "This fearsome warhammer isn’t just about smashing; it's also a symbol of command! The banner emblazoned upon its head grants the wielder a small measure of influence over nearby troops… or at least, that's what the rumors say. Wario thinks it looks cool.",
    "category": "equipment",
    "price": 1200,
    "icon": "🚩",
    "stock": 33,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "damage_physical_1d8",
      "small_chance_to_faze_enemy_5%"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Imperial Post",
    "levelRequirement": 3
  },
  "animatopia_spirit_lantern": {
    "id": "animatopia_spirit_lantern",
    "name": "Whispering Lantern of the Grove",
    "description": "This intricately carved lantern is said to hold the spirits of ancient Animatopian forest guardians. When lit, it emits a soft glow and occasionally whispers cryptic advice… or just nonsense about berries. It’s surprisingly effective at warding off small predators.",
    "category": "curiosities",
    "price": 1200,
    "icon": "🏮",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance to detect hidden objects",
      "minor illusion effect (creates flickering lights)",
      "advantage on survival checks in forested areas"
    ],
    "vendor": "forest_market",
    "shippedBy": "feathered_messenger",
    "levelRequirement": 8
  },
  "animatopia_beetle_armor": {
    "id": "animatopia_beetle_armor",
    "name": "Chitinous Shellplate",
    "description": "Forged from the incredibly strong shells of giant Animatopian beetles, this plate armor offers surprisingly good protection... and a slight smell. It's surprisingly lightweight considering its defensive capabilities – perfect for quick maneuvers and getting out of trouble! Don’t complain about the faint aroma of decaying foliage.",
    "category": "equipment",
    "price": 6500,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "armor class +3",
      "resistance to poison damage",
      "increased carrying capacity by 50 lbs",
      "chance to trigger a small beetle swarm on critical hit"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_beetle",
    "levelRequirement": 10
  },
  "teyvat_item_shimmering_windstone": {
    "id": "teyvat_item_shimmering_windstone",
    "name": "Shimmering Windstone",
    "description": "This oddly warm stone hums with the echoes of winds from Mondstadt. Holding it grants a minor boost to speed and agility – perfect for dodging those pesky rats or just feeling like a cool adventurer!",
    "category": "equipment",
    "price": 1200,
    "icon": "💨",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increased_speed_5%",
      "increased_agility_3%"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Swift Courier Pigeon",
    "levelRequirement": 6
  },
  "teyvat_item_elemental_sparklet": {
    "id": "teyvat_item_elemental_sparklet",
    "name": "Elemental Sparklet",
    "description": "A tiny ball of pure elemental energy, harvested from the chaotic currents near Liyue Harbor. Consume this and unleash a burst of fire or lightning – just don't aim it at your enemies... or yourself!",
    "category": "consumables",
    "price": 350,
    "icon": "🔥",
    "stock": 89,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "deals_10_fire_damage",
      "chance_to_chain_lightning_on_hit"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Dragon Delivery Service (Slow)",
    "levelRequirement": 3
  },
  "teyvat_item_crimson_veil_charm": {
    "id": "teyvat_item_crimson_veil_charm",
    "name": "Crimson Veil Charm",
    "description": "Crafted from the silk of a forgotten sea serpent, this charm whispers secrets of Inazuma's past. Wearing it grants temporary protection against illusions and mental manipulation – useful for dealing with those overly dramatic pirates!",
    "category": "equipment",
    "price": 7800,
    "icon": "🎭",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "resistance_to_illusion_magic_25%",
      "increased_sanity_10%"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Sea Serpent Courier (Very Slow)",
    "levelRequirement": 8
  },
  "almost_edge_chronometer": {
    "id": "almost_edge_chronometer",
    "name": "Temporal Shard Regulator",
    "description": "This unsettling device seems to subtly warp the flow of time around its user, allowing for brief bursts of accelerated movement or momentary glimpses into potential futures. Handle with caution; prolonged use may cause existential dread and a craving for sprinkles. It's probably haunted.",
    "category": "equipment",
    "price": 18000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "movement_speed_boost_2",
      "chance_of_foresight",
      "minor_time_distortion"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 8
  },
  "almost_edge_echoeservice": {
    "id": "almost_edge_echoeservice",
    "name": "Void Resonance Therapy",
    "description": "A soothing service utilizing the residual echoes of forgotten realities. This treatment gently unravels anxieties and mental fatigue, leaving you feeling strangely empty yet strangely…content. Don’t worry if your memories feel a little fuzzy afterwards.",
    "category": "services",
    "price": 7500,
    "icon": "👂",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "remove_fear_3",
      "reduce_mental_fatigue_5",
      "chance_of_temporary_inspiration"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "temporal_packet",
    "levelRequirement": 4
  },
  "almost_edge_godly_voidstone": {
    "id": "almost_edge_godly_voidstone",
    "name": "The Null-Heart",
    "description": "A pulsating stone of absolute nothingness, radiating a chilling aura that whispers promises of oblivion and ultimate power. Holding it for too long may lead to detachment from reality or simply…disappearing entirely. Wario doesn't recommend this one.",
    "category": "premium",
    "price": 350000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "damage_over_time_high",
      "chance_of_void_teleportation",
      "immunity_to_fear",
      "increased_mana_regen"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "black_hole_delivery",
    "levelRequirement": 30
  },
  "earth_land_item_frostbite_charm": {
    "id": "earth_land_item_frostbite_charm",
    "name": "Glacier's Grin",
    "description": "This little gem seems to hum with the chill of a thousand frozen waterfalls! It might not stop a dragon, but it’ll certainly make your fingers tingle and slow down those pesky frost mages. Don't worry, it only *slightly* increases ice resistance – mostly.",
    "category": "curiosities",
    "price": 250,
    "icon": "🧊",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increases ice resistance by 10%",
      "chance to inflict frostbite on enemies with melee attacks (5%)",
      "minor warmth boost"
    ],
    "vendor": "magic_shop",
    "shippedBy": "magical_messenger",
    "levelRequirement": 3
  },
  "teyvat_item_jade_rune": {
    "id": "teyvat_item_jade_rune",
    "name": "Jade Serpent's Coil",
    "description": "Forged from solidified seawater and blessed by the Geo Archon, this coil can be imbued with protective energies. It’s surprisingly comfortable to wear – perfect for lounging around while plotting world domination… or just admiring your loot!",
    "category": "equipment",
    "price": 8750,
    "icon": "🌀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increases defense by 30",
      "chance to reflect damage (15%)",
      "provides resistance to earth damage"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "cargo_ship",
    "levelRequirement": 9
  },
  "teyvat_item_stormlight_shard": {
    "id": "teyvat_item_stormlight_shard",
    "name": "Stormlight Resonance Shard",
    "description": "A fragment of pure condensed lightning, this shard vibrates with immense energy! Use it to amplify your elemental abilities or as a potent distraction – Wario loves shiny things and this one REALLY sparkles!",
    "category": "curiosities",
    "price": 65000,
    "icon": "⚡",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "increases attack damage by 50 for 10 seconds",
      "chance to stun enemy on use",
      "provides temporary lightning resistance"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "magical_teleportation",
    "levelRequirement": 16
  },
  "teyvat_item_jade_amulet": {
    "id": "teyvat_item_jade_amulet",
    "name": "Jade Amulet of Aqueous Reflection",
    "description": "A shimmering amulet crafted from polished Jade, rumored to have been blessed by the Geo Archon himself. It doesn't actually do anything except look cool and probably attract water elementals...which Wario loves!",
    "category": "equipment",
    "price": 1200,
    "icon": "💧",
    "stock": 38,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grant_5_temporary_defense",
      "resistance_to_water_damage_10%",
      "chance_to_reflect_magic_attacks"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Merchant Ship",
    "levelRequirement": 5
  },
  "middle_earth_mithril_echo": {
    "id": "middle_earth_mithril_echo",
    "name": "Resonance of Mithril's Song",
    "description": "A small, perfectly formed piece of mithril that vibrates with the echoes of ancient dwarven craftsmanship. Holding it allows you to faintly hear the rhythmic hammering and shaping sounds of a master smith at work – surprisingly relaxing!  It also seems to attract particularly grumpy gnomes.",
    "category": "curiosities",
    "price": 75000,
    "icon": "💎",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grant_minor_healing_effect",
      "attract_gnomes",
      "chance_to_detect_mithril_deposits",
      "boosts_crafting_skill_1"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 22
  },
  "almost_edge_item_liminal_compass": {
    "id": "almost_edge_item_liminal_compass",
    "name": "The Wanderer's Doubt",
    "description": "A tarnished brass compass that doesn’t point north, south, east or west. Instead, it spins wildly, occasionally settling on a direction that *feels* wrong, leading you deeper into the unsettling silence of this place...or perhaps just lost.",
    "category": "curiosities",
    "price": 850,
    "icon": "🧭",
    "stock": 17,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "provides a minor chance to find hidden paths (10%)",
      "causes slight confusion (-1 to next skill check)"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "shifting sands",
    "levelRequirement": 5
  },
  "almost_edge_item_void_resonance_amulet": {
    "id": "almost_edge_item_void_resonance_amulet",
    "name": "The Silent Guardian's Plea",
    "description": "This amulet pulses with a low, unsettling hum. It seems to attract the attention of things that shouldn’t be seen...and occasionally offers a glimmer of protection against the void's touch - though at what cost?",
    "category": "equipment",
    "price": 7500,
    "icon": "🖤",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "grants +2 to saves against fear effects",
      "chance to absorb minor void energy (restores 10 HP)",
      "passive effect: whispers of madness (-1 to charisma checks)"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "gravity well",
    "levelRequirement": 11
  },
  "internet_neural_shard": {
    "id": "internet_neural_shard",
    "name": "Data Stream Amplifier",
    "description": "A meticulously crafted shard of pure information! Attaching this to your equipment will greatly increase your data processing speed, granting bonus stats and the ability to analyze enemy weaknesses... or just stare blankly at complex calculations.",
    "category": "equipment",
    "price": 8750,
    "icon": "💻",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase_intelligence_4",
      "bonus_critical_hit_chance_5%",
      "increased_mana_regen_1"
    ],
    "vendor": "cyber_market",
    "shippedBy": "fiber_optic_cable",
    "levelRequirement": 8
  },
  "internet_meme_trigger": {
    "id": "internet_meme_trigger",
    "name": "Eternal Distraction Device",
    "description": "This strange device constantly emits a stream of nonsensical memes and flashing images! It can momentarily stun enemies with sheer absurdity, but be warned – prolonged use may cause existential dread… or just make you look really silly.",
    "category": "curiosities",
    "price": 1200,
    "icon": "🤪",
    "stock": 45,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "stun_target_1",
      "chance_to_apply_humor_20%",
      "reduce_defense_3"
    ],
    "vendor": "data_dealer",
    "shippedBy": "compressed_signal",
    "levelRequirement": 11
  },
  "warhammer_chaosbomb": {
    "id": "warhammer_chaosbomb",
    "name": "Chaos Bomb - Unstable Edition",
    "description": "A delightfully unstable explosive device guaranteed to cause mayhem! This little beauty is packed with volatile essence, making it a surprisingly effective weapon... or just a really messy distraction.",
    "category": "curiosities",
    "price": 350,
    "icon": "💣",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deals 6d6 explosive damage in a 10ft radius",
      "chance to cause area-of-effect status effects (stun, confusion)",
      "small chance of self-detonation"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Gremlin Post",
    "levelRequirement": 3
  },
  "mushroom_kingdom_item_gargantuan_goober": {
    "id": "mushroom_kingdom_item_gargantuan_goober",
    "name": "Gargantuan Goober",
    "description": "This enormous, pulsating goober is rumored to contain the concentrated essence of a thousand power-ups! Eating it might grant you temporary invincibility... or turn your insides into jelly. Wario wouldn't know, he just likes the shine!",
    "category": "consumables",
    "price": 7500,
    "icon": "🍄",
    "stock": 42,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "restore_health_75",
      "grant_invincibility_30s",
      "chance_to_gain_speed"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 9
  },
  "mushroom_kingdom_item_chronometric_cog": {
    "id": "mushroom_kingdom_item_chronometric_cog",
    "name": "Chronometric Cog",
    "description": "This bizarre cog seems to warp time around it! Holding it allows you a brief moment of temporal distortion, useful for dodging attacks or snatching up those pesky coins. Don't stare at it too long, or you might end up stuck in yesterday...",
    "category": "equipment",
    "price": 35000,
    "icon": "⏳",
    "stock": 18,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "increase_dodge_chance_15%",
      "grant_temporal_shift_5s",
      "reduce_attack_speed_20%"
    ],
    "vendor": "wario_direct",
    "shippedBy": "warp_pipe",
    "levelRequirement": 16
  },
  "mushroom_kingdom_item_shadow_shard": {
    "id": "mushroom_kingdom_item_shadow_shard",
    "name": "Shadow Shard",
    "description": "A fragment of a fallen shadow monster, pulsating with dark energy. Wielding this shard allows you to briefly teleport short distances and drain the life force from your enemies... just don't let it corrupt your soul! This item is highly unstable.",
    "category": "forbidden",
    "price": 120000,
    "icon": "🌑",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "teleport_short_range",
      "life_drain_20",
      "chance_to_inflict_fear"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "dark_portal",
    "levelRequirement": 23
  },
  "animatopia_gloomfang_claw": {
    "id": "animatopia_gloomfang_claw",
    "name": "Gloomfang Claw",
    "description": "This wickedly sharp claw, shed by the elusive Gloomfangs of the Murkwood, is said to absorb shadow and empower its wielder. It’s perfect for slicing through tough hides or just messing with your enemies – Wario would totally use this to steal candy!",
    "category": "equipment",
    "price": 6800,
    "icon": "🔪",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "damage_slashing_5",
      "chance_shadow_absorb_10%",
      "increased_critical_hit_chance_3%"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "swift_beast",
    "levelRequirement": 6
  },
  "animatopia_songstone_charm": {
    "id": "animatopia_songstone_charm",
    "name": "Songstone Charm of Harmony",
    "description": "Crafted by the Harmonious Tribe, this charm vibrates with ancient melodies, soothing agitated beasts and bolstering the spirits of your party. Just don't try to sing along – Wario would probably just break it trying to make a bigger noise!",
    "category": "curiosities",
    "price": 1200,
    "icon": "🎶",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance_pacify_enemy_20%",
      "increased_healing_effect_5%"
    ],
    "vendor": "forest_market",
    "shippedBy": "carrier_bird",
    "levelRequirement": 3
  },
  "animatopia_bloodmoon_amulet": {
    "id": "animatopia_bloodmoon_amulet",
    "name": "Bloodmoon Amulet of the Pack Alpha",
    "description": "A potent symbol of leadership, this amulet grants a temporary surge of primal strength and intimidating presence. It's rumored to have been crafted by the Pack Alpha himself – though Wario probably just stole it from him!",
    "category": "faction",
    "price": 18000,
    "icon": "🐺",
    "stock": 2,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increase_strength_10",
      "chance_fear_effect_15%",
      "increased_attack_speed_5%"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "winged_wolf",
    "levelRequirement": 9
  },
  "equestria_item_glittering_hoofprint": {
    "id": "equestria_item_glittering_hoofprint",
    "name": "Glittering Hoofprint Charm",
    "description": "A tiny, shimmering hoofprint made from pure crystallized starlight! Wearing this charm grants a minor boost to luck and helps you avoid sticky situations… or at least makes them sparkle.",
    "category": "curiosities",
    "price": 750,
    "icon": "✨",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_luck",
      "minor_evasion",
      "chance to generate sparkles"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "pony_express",
    "levelRequirement": 1
  },
  "equestria_item_rainbow_mane_potion": {
    "id": "equestria_item_rainbow_mane_potion",
    "name": "Rainbow Mane Potion of Velocity",
    "description": "This potent concoction, brewed with actual rainbow strands and a dash of pure speed magic, will have you galloping faster than a thousand ponies! Just try not to trip over your own hooves.",
    "category": "consumables",
    "price": 1800,
    "icon": "🚀",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increased_speed",
      "temporary_movement_boost",
      "chance for rainbow trail effect"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "magical_delivery",
    "levelRequirement": 5
  },
  "equestria_item_legendary_crown_of_harmony": {
    "id": "equestria_item_legendary_crown_of_harmony",
    "name": "Crown of Harmony - Echoes of Discord",
    "description": "Forged by the ancient ponies during a time of great strife, this crown radiates a faint aura of harmony… and a disturbing echo of dissonance. Wearer gains significant buffs but must resist temptation to cause chaos!",
    "category": "equipment",
    "price": 65000,
    "icon": "👑",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "increased_strength",
      "enhanced_magic",
      "resistance to charm effects",
      "chance to disrupt enemy spells"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 15
  },
  "leclaire_isle_item_daves_decoration": {
    "id": "leclaire_isle_item_dave's_decoration",
    "name": "Dave's Doughy Decoration Consultation",
    "description": "Feeling drab? Dave, the resident dough-sculptor, offers a personalized consultation to turn your weapons and armor into delectable works of art! He’ll even provide tips on how to avoid crumbs in battle (mostly).",
    "category": "services",
    "price": 1200,
    "icon": "🎨",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "temporarily_increase_charisma",
      "grant_chance_to_charm_enemies"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Swift Baker's Cart",
    "levelRequirement": 5
  },
  "leclaire_isle_item_golden_crumb": {
    "id": "leclaire_isle_item_golden_crumb",
    "name": "Golden Crumb of Eternal Sweetness",
    "description": "Legend says this crumb fell from the heavens during a particularly delicious baking storm. It grants a single, glorious burst of sugary energy—but beware, prolonged consumption may lead to an uncontrollable craving for pastries! Wario loves these!",
    "category": "curiosities",
    "price": 7800,
    "icon": "✨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "grant_temporary_magic_resistance",
      "heal_moderate_amount",
      "chance_to_cause_confusion"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Moonbeam Delivery",
    "levelRequirement": 8
  },
  "almost_edge_item_rusty_cog": {
    "id": "almost_edge_item_rusty_cog",
    "name": "Whispering Cog of the Void",
    "description": "This unsettling cog seems to hum with forgotten echoes. It’s surprisingly warm to the touch, and may or may not whisper cryptic warnings about falling into oblivion.  It's probably best not to stare at it too long…or fall.",
    "category": "equipment",
    "price": 150,
    "icon": "⚙️",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increases armor class by 2 for 3 turns",
      "chance to inflict minor madness on enemies (10%)",
      "grants +1 to dexterity checks"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "winged_beetle",
    "levelRequirement": 3
  },
  "almost_edge_item_spectral_shard": {
    "id": "almost_edge_item_spectral_shard",
    "name": "Fragment of the Liminal Veil",
    "description": "A shimmering shard pulsating with a sickly violet light. Holding this fragment feels like gazing into a reflection that isn't quite you, and may cause unsettling visions… or just make your hair stand on end!  Don’t say we didn’t warn you.",
    "category": "curiosities",
    "price": 1200,
    "icon": "🔮",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grants resistance to psychic damage",
      "chance to inflict fear on enemies (15%)",
      "provides a small bonus to investigation checks"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "phantom_delivery",
    "levelRequirement": 6
  },
  "almost_edge_item_chronal_amulet": {
    "id": "almost_edge_item_chronal_amulet",
    "name": "Amulet of Temporal Echoes",
    "description": "This intricately crafted amulet seems to pull at the very fabric of time. Wario would buy this just to see if he could get a discount on his past self!  It grants limited temporal manipulation abilities – mostly for dodging attacks or causing minor chaos.",
    "category": "premium",
    "price": 18000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "allows the wearer to rewind time by 3 seconds once per day",
      "chance to create a temporal duplicate (5%) – temporary and unstable!",
      "increases mana regeneration by 20%"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 10
  },
  "equestria_item_elemental_potion": {
    "id": "equestria_item_elemental_potion",
    "name": "Potion of Elemental Harmony",
    "description": "Brewed by the most skilled pony alchemists, this potion temporarily aligns your magical energies with one of Equestria's core elements. Choose wisely – fire might give you a scorching blast, but water could leave you feeling delightfully damp.",
    "category": "consumables",
    "price": 1800,
    "icon": "💧",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant_elemental_resistance",
      "increase_mana_pool",
      "chance_for_elemental_damage"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "delivery_only",
    "levelRequirement": 3
  },
  "equestria_item_star_dust_charm": {
    "id": "equestria_item_star_dust_charm",
    "name": "Star Dust Charm of Wishful Thinking",
    "description": "Crafted from actual stardust collected during a meteor shower, this charm whispers promises of good fortune... or maybe just makes you feel slightly sparkly. Wario wouldn't be caught dead wearing it, but the ponies seem to like it!",
    "category": "equipment",
    "price": 12000,
    "icon": "✨",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance_for_lucky_finds",
      "small_healing_over_time",
      "increase_luck_stat"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "delivery_only",
    "levelRequirement": 9
  },
  "almost_edge_void_shard": {
    "id": "almost_edge_void_shard",
    "name": "Void Shard of the Unmade",
    "description": "A pulsating fragment ripped from the fabric of nothingness. Touching this shard may grant glimpses into the true void, but prolonged exposure risks dissolving your very being – a truly delicious risk!",
    "category": "equipment",
    "price": 65000,
    "icon": "🌌",
    "stock": 18,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Grants +2 to Dexterity",
      "Chance to inflict Fear (5%) on enemies within range",
      "Provides resistance to psychic damage"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Gravity Well Courier",
    "levelRequirement": 16
  },
  "almost_edge_forbidden_echo": {
    "id": "almost_edge_forbidden_echo",
    "name": "Forbidden Echo of the Lost",
    "description": "A warped, whispering artifact that feeds on forgotten memories and regrets. Use it to glean information from the past, but beware – the echoes may try to possess you... or simply remind you how much worse your life is.",
    "category": "forbidden",
    "price": 12000,
    "icon": "💀",
    "stock": 9,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Grants +3 to Intelligence",
      "Chance to inflict Madness (3%) on target",
      "Allows the user to briefly glimpse the past of a creature"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Shadow Delivery Service",
    "levelRequirement": 12
  },
  "the_edge_shard_echo": {
    "id": "the_edge_shard_echo",
    "name": "Echoing Void Shard",
    "description": "This jagged shard pulses with the whispers of forgotten realities, briefly amplifying your senses and offering glimpses into impossible dimensions. Touching it might give you a terrifying advantage...or drive you utterly mad! It's surprisingly good at attracting stray shadows.",
    "category": "curiosities",
    "price": 12000,
    "icon": "🔮",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase_perception_by_5",
      "chance_to_summon_shadow_familiar_1%",
      "temporary_confusion_3%"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 7
  },
  "the_edge_ritual_rune": {
    "id": "the_edge_ritual_rune",
    "name": "Binding Rune of the Unraveling",
    "description": "A disturbingly intricate rune etched into a piece of obsidian. Channeling it allows you to briefly warp space, creating a localized pocket of chaotic energy – perfect for escaping tight spots or… unleashing minor inconveniences on your foes. Don’t say we didn't warn you about the side effects.",
    "category": "equipment",
    "price": 65000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "teleport_short_range_25%",
      "chance_to_disorient_target_5%",
      "reduce_armor_by_10_for_3_turns"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "winged_horror",
    "levelRequirement": 12
  },
  "the_edge_chronal_calibration": {
    "id": "the_edge_chronal_calibration",
    "name": "Temporal Harmonizer Calibration",
    "description": "A complex device constructed from fragmented time streams. By aligning its delicate gears, you can briefly manipulate the flow of time around yourself – slowing your perception or accelerating your reflexes. Just don't mess with causality too much…Wario’s not responsible for paradoxes!",
    "category": "services",
    "price": 250000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "increase_attack_speed_by_20%",
      "chance_to_dodge_attacks_15%",
      "temporarily_phase_out_of_combat_30s"
    ],
    "vendor": "final_shop",
    "shippedBy": "time_wraith",
    "levelRequirement": 28
  },
  "midlands_item_rusty_scroll": {
    "id": "midlands_item_rusty_scroll",
    "name": "Fragment of the Crimson Decree",
    "description": "This scroll, stained with what might be royal blood (or cheap wine), contains a half-remembered decree from the Emperor. It’s probably useless, but hey, maybe it'll trigger some embarrassing secrets!  It smells faintly of despair and stale parchment.",
    "category": "curiosities",
    "price": 7500,
    "icon": "📜",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance to reveal a hidden quest objective",
      "small chance of inflicting 'paranoia'",
      "provides +5 charisma for one combat turn (Wario's lucky!)",
      "deals 1d4 psychic damage to enemies"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "imperial_courier",
    "levelRequirement": 6
  },
  "midlands_item_steelwolf_amulet": {
    "id": "midlands_item_steelwolf_amulet",
    "name": "The Loyal Fang Amulet",
    "description": "A crudely crafted amulet depicting a snarling steel wolf – rumored to have been forged by the dwarves of Blackrock Keep. This little guy seems to like you, and has a surprisingly strong affinity for protecting against dark magic.",
    "category": "equipment",
    "price": 45000,
    "icon": "🐺",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Grants +3 to Armor Class",
      "Provides resistance to necrotic damage",
      "Increases critical hit chance by 10%",
      "Summons a spectral wolf companion that assists in combat (weak, but adorable)"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dwarven_cartwright",
    "levelRequirement": 12
  },
  "midlands_item_heralds_banner": {
    "id": "midlands_item_heralds_banner",
    "name": "The Broken Standard of Valor",
    "description": "A tattered banner, once proudly displayed by the Midland Royal Guard. It's seen better days (and probably a lot of mud), but still radiates an aura of… well, something vaguely patriotic.  Don’t expect it to actually *do* anything useful.",
    "category": "faction",
    "price": 120000,
    "icon": "🚩",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "back_order",
    "effects": [
      "+5 to morale of allies within 30 feet",
      "Provides a passive bonus to diplomacy checks with Midland nobles (good luck!)",
      "Grants immunity to fear effects",
      "Allows the wearer to cast 'Inspire Courage' once per day."
    ],
    "vendor": "midland_merchant",
    "shippedBy": "royal_messenger",
    "levelRequirement": 20
  },
  "equestria_item_apple_potion": {
    "id": "equestria_item_apple_potion",
    "name": "Apple-icious Regeneration Brew",
    "description": "A bubbling concoction made from the sweetest apples in Ponyville, this potion instantly restores vitality! Wario used it to recover after falling down a hole... again. Drink up and feel your health magically refill!",
    "category": "consumables",
    "price": 250,
    "icon": "🍎",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heal_30_hp",
      "regenerate_health_2_per_turn"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Courier Pony",
    "levelRequirement": 1
  },
  "equestria_item_starfall_amulet": {
    "id": "equestria_item_starfall_amulet",
    "name": "Amulet of Celestial Guidance",
    "description": "This amulet hums with the power of the night sky, granting its wearer a glimpse into potential futures! Wario's convinced it’ll help him find buried treasure... or at least avoid falling into more holes. It’s said to be blessed by Star Swirl himself.",
    "category": "curiosities",
    "price": 180000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance_to_dodge_attacks_25%",
      "increased_luck_10%",
      "reveals_hidden_paths_10%"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Transport",
    "levelRequirement": 18
  },
  "the_edge_quantum_burst": {
    "id": "the_edge_quantum_burst",
    "name": "Chaotic Pulse",
    "description": "A shimmering orb of unstable energy – handle with extreme caution! This consumable unleashes a brief, devastating blast that can disrupt enemy spells and cause minor spatial distortions. Don’t say we didn't warn you when reality gets a little wonky.",
    "category": "consumables",
    "price": 850,
    "icon": "💥",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deals 15-25 force damage to target",
      "chance to stun target for 1 turn",
      "creates a small area of effect that slows movement speed by 50%"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "express_delivery",
    "levelRequirement": 2
  },
  "middle_earth_starmetal_gauntlet": {
    "id": "middle_earth_starmetal_gauntlet",
    "name": "Starmetal Gauntlet of the Fallen King",
    "description": "Forged from fragments of a shattered star, this gauntlet pulses with ancient power. It grants formidable strength and protects against dark magic – perfect for smashing things...and maybe occasionally summoning a spectral guardian.",
    "category": "equipment",
    "price": 12000,
    "icon": "💪",
    "stock": 3,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "strength_increase_5",
      "magic_resistance_increase_8",
      "chance_to_paralyze_enemy_10%"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_airmail",
    "levelRequirement": 9
  },
  "middle_earth_maharashtan_amulet": {
    "id": "middle_earth_maharashtan_amulet",
    "name": "Maharasthan Amulet of Endless Whispers",
    "description": "This unsettling amulet seems to murmur secrets only you can hear. It grants glimpses into the future and warns of impending danger – assuming it doesn’t just tell you about Wario's next scheme. Handle with caution (and a good earplug).",
    "category": "curiosities",
    "price": 75000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance_to_receive_prophecy_20%",
      "increased_perception_5",
      "resistance_to_fear_10%"
    ],
    "vendor": "elven_market",
    "shippedBy": "elf_messenger",
    "levelRequirement": 22
  },
  "kivotos_item_student_hallpass": {
    "id": "kivotos_item_student_hallpass",
    "name": "The Procrastinator's Pass",
    "description": "Feeling overwhelmed with homework? This enchanted pass grants you temporary access to any academy classroom, perfect for… uh… strategic study sessions. Just don’t get caught!",
    "category": "services",
    "price": 1800,
    "icon": "📚",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "teleport_to_classroom",
      "duration_30s",
      "chance_of_confusion"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 4
  },
  "kivotos_item_halo_resonance_amplifier": {
    "id": "kivotos_item_halo_resonance_amplifier",
    "name": "Divine Echo Chamber",
    "description": "This gleaming device amplifies the power of halos, allowing you to cast spells with increased potency. But beware – prolonged use can attract unwanted attention from… celestial authorities!",
    "category": "equipment",
    "price": 12000,
    "icon": "✨",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increase_spell_power_v",
      "duration_30s",
      "chance_of_divine_intervention",
      "increased_mana_regen"
    ],
    "vendor": "club_supply",
    "shippedBy": "night_only",
    "levelRequirement": 12
  },
  "equestria_item_forbidden_shadow_charm": {
    "id": "equestria_item_forbidden_shadow_charm",
    "name": "Charm of the Twilight Silhouette",
    "description": "A disturbingly beautiful charm crafted from solidified shadows. This trinket allows the wearer to briefly manipulate darkness, conjuring minor illusions and obscuring their movements – but be warned! Prolonged use can corrupt your thoughts and attract unwanted attention from… darker forces. Wario would totally buy this!",
    "category": "forbidden",
    "price": 65000,
    "icon": "🌑",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "grant_shadow_step_15s",
      "create_minor_illusion_30s",
      "chance_to_cause_fear_target"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Nightmare Delivery Service (Highly Unrecommended)",
    "levelRequirement": 15
  },
  "equestria_item_starlight_boots": {
    "id": "equestria_item_starlight_boots",
    "name": "Starlight Boots of Swift Hooves",
    "description": "These boots shimmer with captured starlight, granting the wearer incredible speed and agility. Perfect for outrunning grumpy ponies or snatching up all the sugar cubes!  They’re surprisingly comfortable… mostly.",
    "category": "equipment",
    "price": 800,
    "icon": "✨",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increase_movement_speed_10%",
      "chance_to_evade_attack"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Standard Pony Post",
    "levelRequirement": 2
  },
  "equestria_item_granny_smiles_potion": {
    "id": "equestria_item_granny_smiles_potion",
    "name": "Granny Smiles Potion - Guaranteed!",
    "description": "Brewed by Granny Smith herself, this potent elixir promises a smile that lasts for hours! It’s surprisingly effective and won't make you uncontrollably hug strangers... probably.",
    "category": "consumables",
    "price": 1200,
    "icon": "😊",
    "stock": 18,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "restore_health",
      "grant_temporary_positive_mood",
      "reduce_stress"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_messenger",
    "levelRequirement": 7
  },
  "equestria_item_discord_echo_stone": {
    "id": "equestria_item_discord_echo_stone",
    "name": "Discord Echo Stone - Don't Get Mad!",
    "description": "A strangely pulsating stone radiating chaotic energy. Legend says it’s a fragment of Discord’s own frustration, and touching it might cause temporary confusion or minor mischief... just like Wario after finding a jackpot!",
    "category": "curiosities",
    "price": 4500,
    "icon": "😈",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance_to_confuse_enemy",
      "reduce_target_attack",
      "grant_temporary_disadvantage_on_perception"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "elemental_delivery",
    "levelRequirement": 10
  },
  "middle_earth_shimmering_shard": {
    "id": "middle_earth_shimmering_shard",
    "name": "Shimmering Shard of Melian",
    "description": "This oddly iridescent fragment pulses with the fading echoes of Melian’s song. Holding it grants a fleeting sense of profound peace, and occasionally, you might hear whispers of forgotten prophecies – mostly about Wario's lost treasure.",
    "category": "curiosities",
    "price": 67500,
    "icon": "✨",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grant +10 wisdom for 60 seconds",
      "chance to detect illusion magic",
      "minor luck boost (10% chance of critical hit)"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 22
  },
  "middle_earth_shire_potion_of_comfort": {
    "id": "middle_earth_shire_potion_of_comfort",
    "name": "Second Breakfast Brew",
    "description": "A delightfully sweet and creamy potion crafted by the finest hobbit cooks in the Shire. One sip will instantly banish all worries, replace them with a craving for pastries, and might even convince you to start another long journey – Wario wouldn't mind!",
    "category": "consumables",
    "price": 250,
    "icon": "🥣",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "+1 to Charisma",
      "restores 25 HP and 10 MP",
      "temporary resistance to fear effects"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony",
    "levelRequirement": 3
  },
  "grand_country_crumb_collector": {
    "id": "grand_country_crumb_collector",
    "name": "Gravity Grasping Crumb Collector",
    "description": "This ridiculously oversized spoon is designed to scoop up loose crumbs and floating debris – perfect for a world built on layers! It's surprisingly effective against pesky, gravity-defying pests. Just don’t try to eat the crumbs themselves; you'll regret it.",
    "category": "equipment",
    "price": 4500,
    "icon": "🥄",
    "stock": 37,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased_gravity_resistance",
      "crumb_detection",
      "minor_weight_reduction"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "rolling_cart",
    "levelRequirement": 7
  }
};
