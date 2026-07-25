// Shop items chunk 11 of 51
// Items 1001 to 1100 (100 items)
// Auto-generated: 2026-03-21 13:41:41

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_011 = {
  'dwarf_realms_gold_claim_deed': {
        id: 'dwarf_realms_gold_claim_deed',
        name: "Dwarven Gold Claim Deed (Rich Vein)",
        description: "Ownership papers to a known, rich vein of pure gold ore deep in the mountains.",
        category: SHOP_CATEGORIES.faction,
        price: 4500,
        icon: '💰',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Guaranteed yield of 50,000 gp worth of gold over 1 year",
        "Claim must be actively defended from other miners",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Legal Documentation',
        levelRequirement: 10,
        factionBonus: { economy: 50 }
    },

  'dwarf_realms_golem_core': {
        id: 'dwarf_realms_golem_core',
        name: "Dwarven Animated Golem Core",
        description: "A perfectly crafted magical core required to animate a large (Huge size) stone or metal golem.",
        category: SHOP_CATEGORIES.equipment,
        price: 20000,
        icon: '⚙️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Animates one Huge Construct (CR 10) loyal to the core's owner",
        "Golem lasts indefinitely if maintained (5,000 gp/year upkeep)",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Heavy Crate',
        levelRequirement: 16
    },

  'dwarf_realms_magical_ore_supply': {
        id: 'dwarf_realms_magical_ore_supply',
        name: "Dwarven Magical Ore Supply (Adamantine)",
        description: "A full ton of pure, refined Adamantine ore, enough for major construction or legendary weapon forging.",
        category: SHOP_CATEGORIES.premium,
        price: 200000,
        icon: '💎',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Enough material to craft 2 pieces of Legendary Armor or 3 weapons",
        "Ore cannot be damaged or transmuted by magic",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Deep Tunnel Transport',
        levelRequirement: 18
    },

  'dwarf_realms_master_gemcutter': {
        id: 'dwarf_realms_master_gemcutter',
        name: "Dwarven Master Gemcutter (Service)",
        description: "Hire a Master Gemcutter to cut and polish a raw gemstone, maximizing its magical resonance.",
        category: SHOP_CATEGORIES.services,
        price: 20000,
        icon: '💎',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Gem cut by this artisan gains +1 to its magical potency/save DC",
        "Cutting process takes 1 month",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Master Tool Set',
        levelRequirement: 15
    },

  'dwarf_realms_master_runesmith': {
        id: 'dwarf_realms_master_runesmith',
        name: "Dwarven Master Runesmith (Hire)",
        description: "Hire the greatest living runesmith to permanently inscribe protection runes on your stronghold.",
        category: SHOP_CATEGORIES.services,
        price: 120000,
        icon: '⚒️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Inscribe permanent wards: stronghold gains +20 HP/day and resistance to siege weaponry",
        "Runesmith requires 6 months and rare minerals (cost not included)",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Guild Escort',
        levelRequirement: 15
    },

  'dwarf_realms_mithril_cutting_board': {
    id: 'dwarf_realms_mithril_cutting_board',
    name: "Dwarf Realms Mithril Cutting Board",
    description: "A board that can stop blades.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 740,
    icon: '⬜',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Board is indestructible: can be used as a shield (+1 AC) while cooking",
        "Knives never dull on it: advantage on cooking prep checks",
        "Board is extremely heavy: disadvantage on movement while carrying",
        "Made by: Dwarf Realms Smiths"
    ],
    vendor: 'dwarf_realms',
    shippedBy: 'Stone Cart',
    levelRequirement: 7
},

  'dwarf_realms_mithril_gloves': {
    id: 'dwarf_realms_mithril_gloves',
    name: "Dwarf Realms Mithril Gloves",
    description: "Light gloves for precise dwarven work.",
    category: SHOP_CATEGORIES.premium,
    price: 21000,
    icon: '🧤',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Advantage on tool checks for forging",
        "Gloves don't tarnish",
        "Too small for large hands",
        "Made by: Mithril Smiths"
    ],
    vendor: 'dwarf_realms_forge',
    shippedBy: 'Metal Mesh',
    levelRequirement: 7
},

  'dwarf_realms_mithril_ingot': {
        id: 'dwarf_realms_mithril_ingot',
        name: "Dwarf Realms Mithril Ingot",
        description: "One ingot of purified Mithril ore, highly prized for crafting.",
        category: SHOP_CATEGORIES.equipment,
        price: 80000,
        icon: '⛏️',
        stock: 5,
        rarity: 'legendary',
        effects: [
            "Can be forged into an item that weighs 1/2 its normal weight",
        "Adds +1 AC if used for armor, or +1 to critical range if used for weapon",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Ironbound Delivery',
        levelRequirement: 10
    },

  'dwarf_realms_mug_of_endless_ale': {
    id: 'dwarf_realms_mug_of_endless_ale',
    name: "Mug of Endless Ale",
    description: "A sturdy stone mug that magically refills with delicious, potent dwarven ale every dawn.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 750,
    icon: '🍺',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Refills with 1 gallon of ale daily",
        "Drinking grants +2 temporary HP and advantage on Intimidation checks for 10 minutes",
        "If emptied, it will not refill until the next dawn"
    ],
    vendor: 'Kingdoms Dwarves',
    shippedBy: 'Stone Cask',
    levelRequirement: 3
},

  'dwarf_realms_portable_keg': {
    id: 'dwarf_realms_portable_keg',
    name: "Dwarf Realms Portable Keg",
    description: "A mini keg of hearty dwarven ale.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 14500,
    icon: '🍺',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Contains 4 servings; each grants 1d6+2 temporary HP and advantage on Constitution saves for 1 hour",
        "After 2 servings: Disadvantage on Dexterity checks for 1 hour",
        "Dwarves get double the temporary HP",
        "Made by: Ironforge Brewmasters"
    ],
    vendor: 'dwarf_realms_tavern',
    shippedBy: 'Sturdy Cart',
    levelRequirement: 6
},

  'dwarf_realms_recipe_iron_rations_stew': {
    id: 'dwarf_realms_recipe_iron_rations_stew',
    name: "Recipe: Dwarf Realms Iron Rations Stew",
    description: "Turn iron rations into something edible.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 6500,
    icon: '📜',
    stock: 8,
    rarity: 'common',
    effects: [
        "Transform 5 days of iron rations into a hearty stew that grants 1d6 temporary HP",
        "Tastes like stone but keeps you full for 24 hours",
        "Advantage on saves vs. exhaustion from travel for 12 hours",
        "Made by: Dwarf Realms Quartermasters"
    ],
    vendor: 'dwarf_realms',
    shippedBy: 'Stone Cart',
    levelRequirement: 5
},

  'dwarf_realms_recipe_mithril_ale_bread': {
    id: 'dwarf_realms_recipe_mithril_ale_bread',
    name: "Recipe: Dwarf Realms Mithril Ale Bread",
    description: "Bread made with beer and magic.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 13500,
    icon: '📜',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Eating a loaf grants +1 to Constitution saves for 8 hours",
        "You gain 1d4 temporary HP (alcohol content)",
        "Disadvantage on Dexterity checks for 1 hour (mild buzz)",
        "Made by: Dwarf Realms Bakers"
    ],
    vendor: 'dwarf_realms',
    shippedBy: 'Sturdy Cart',
    levelRequirement: 5
},

  'dwarf_realms_siege_plans': {
        id: 'dwarf_realms_siege_plans',
        name: "Dwarf Realms Siege Plans (Advanced)",
        description: "Plans for unbreakable subterranean fortifications and siege breaking tactics.",
        category: SHOP_CATEGORIES.faction,
        price: 65000,
        icon: '📐',
        stock: 4,
        rarity: 'legendary',
        effects: [
            "Doubles the defensive HP of any structure you build in the next month",
        "Grants expertise on siege defense rolls",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Blueprint Scroll',
        levelRequirement: 10,
        factionBonus: { defense: 50, engineering: 40 }
    },

  'dwarf_realms_sky_piercer': {
        id: 'dwarf_realms_sky_piercer',
        name: "Dwarven Sky-Piercer Cannon",
        description: "A massive, ground-based cannon designed to shoot enchanted projectiles into the upper atmosphere.",
        category: SHOP_CATEGORIES.faction,
        price: 100000,
        icon: '💥',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Once per day, bombard a target area up to 5 miles away (10d10 physical damage)",
        "Requires 1 hour of charging and a crew of 4 dwarves (hired separately)",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Assembly Required',
        levelRequirement: 16,
        factionBonus: { siege: 100 }
    },

  'dwarf_realms_sonic_drill': {
        id: 'dwarf_realms_sonic_drill',
        name: "Dwarven Sonic Tunneling Drill",
        description: "A massive drill that tunnels through stone at alarming speed using focused sound waves.",
        category: SHOP_CATEGORIES.equipment,
        price: 20000,
        icon: '⛏️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Tunnels 100ft per hour through solid rock",
        "Extremely loud (alerts all subterranean life)",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Massive Transport',
        levelRequirement: 14
    },

  'dwarf_realms_stone_appreciation_course': {
    id: 'dwarf_realms_stone_appreciation_course',
    name: "Dwarf Realms Stone Appreciation Course",
    description: "Learn to love rocks.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 210,
    icon: '🪨',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Advantage on checks involving stone and gems for 7 days",
        "You become a rock nerd (disadvantage on Charisma with non-dwarves)",
        "You collect rocks compulsively (inventory space issues)",
        "Made by: Dwarf Realms Geology"
    ],
    vendor: 'dwarf_realms',
    shippedBy: 'Stone Cart',
    levelRequirement: 5
},

  'dwarf_realms_unbreakable_rope': {
        id: 'dwarf_realms_unbreakable_rope',
        name: "Dwarven Unbreakable Rope (50ft)",
        description: "Rope woven from rare deep-earth fibers; cannot be cut, burned, or broken by mundane means.",
        category: SHOP_CATEGORIES.equipment,
        price: 25000,
        icon: '⛓️',
        stock: 10,
        rarity: 'epic',
        effects: [
            "Used for climbing/binding: impossible to break without magical means (Dispel Magic DC 18)",
        "Resists acid and extreme temperatures",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Coiled Crate',
        levelRequirement: 5
    },

  'dwarf_realms_under_city_deed': {
        id: 'dwarf_realms_under_city_deed',
        name: "Dwarven Under-City Deed (Sector 7)",
        description: "Ownership of a pre-built, protected section of a major Dwarven metropolis.",
        category: SHOP_CATEGORIES.faction,
        price: 20000,
        icon: '🏰',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Permanent residency in a major underground capital",
        "Full citizenship rights and access to royal forges",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Formal Declaration',
        levelRequirement: 18,
        factionBonus: { residence: 100 }
    },

  'dwarf_realms_under_mountain_territory': {
        id: 'dwarf_realms_under_mountain_territory',
        name: "Dwarven Under-Mountain Territory (New Claim)",
        description: "Deed granting rights to mine and settle an unclaimed mountain range far from established holds.",
        category: SHOP_CATEGORIES.faction,
        price: 210000,
        icon: '⛰️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Establish a new, independent Dwarven Hold",
        "Gain access to unique subterranean resources",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Royal Decree',
        levelRequirement: 20,
        factionBonus: { construction: 100, resources: 100 }
    },

  'dwarven_forge_access': {
        id: 'dwarven_forge_access',
        name: "Dwarven Master Forge Access (7 Days)",
        description: "Temporary access to a sacred Dwarven forge capable of working rare metals.",
        category: SHOP_CATEGORIES.services,
        price: 4500,
        icon: '🔥',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Allows crafting with rare metals (Adamantine, Mithril, etc.)",
        "Item crafted gains +1 durability bonus",
            "Made by: Kingdoms Dwarves"
        ],
        vendor: 'dwarf_elder',
        shippedBy: 'Escorted Entry',
        levelRequirement: 8
    },

  'dwarven_forge_core': {
    id: 'dwarven_forge_core',
    name: "Dwarven Forge-Core Installation",
    description: "An ancient dwarven artifact that supercharges crafting capabilities.",
    category: SHOP_CATEGORIES.services,
    price: 20000,
    icon: '⚒️',
    stock: 5,
    rarity: 'legendary',
    effects: [
        "Crafting speed increased by 300% for 30 days",
        "Grants access to Dwarven Masterwork recipes",
        "Made by: Clan Ironfist"
    ],
    vendor: 'deep_forge',
    shippedBy: 'Forge Priests',
    levelRequirement: 14
},

  'ear_plugs': {
        id: 'ear_plugs',
        name: "Heavy Duty Earplugs",
        description: "Blocks out Mandragora screams and Bard songs.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2000,
        icon: '🔇',
        stock: 50,
        rarity: 'common',
        effects: ["Immunity to Thunder damage", "You are Deafened while wearing"],
        vendor: 'valley_trading_post',
        shippedBy: 'Tiny Packet',
        levelRequirement: 1
    },

  'earlier_times': {
        id: 'earlier_times',
        name: "Earlier Times",
        description: "A dusty bottle containing the concept of 'Before'. Drink to reset the round.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 20000,
        icon: '⌛',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Consume as Reaction when hit",
            "The turn resets completely. The attack never happened.",
            "You regain your Reaction.",
            "Reality destabilizes slightly."
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Yesterday',
        levelRequirement: 11
    },

  'earth_land_aegis_prison_key': {
        id: 'earth_land_aegis_prison_key',
        name: "Aegis Prison Key",
        description: "",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 20000,
        icon: '🔐',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Opens any sealed door or vault in Earth Land with a 10% chance of triggering a trap",
        "Unlocks the Aegis Prison’s hidden chamber where 158 Toads are held",
        "Can be used to break seals of the Primordial Wyrm",
        "Each use reduces the key’s durability by 10% and may trigger a collapse if used near active seals",
        "Carved from ancient stone of the prison’s original foundation",
        "Believed to be a relic from the Speaker Ls Order 120 escape protocol"
        ],
        vendor: 'earth_land',
        shippedBy: 'Blooper Wetworks',
        levelRequirement: 10
    },

  'earth_land_banana_bomb': {
        id: 'earth_land_banana_bomb',
        name: "Banana Bomb",
        description: "A fruity explosive designed to disrupt jungle logistics",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 38,
        icon: '🍈',
        stock: 5,
        rarity: 'common',
        effects: [
            "Detonates with 1d4 explosive damage",
        "Leaves a lingering banana scent that confuses beasts",
        "Has a 50% chance to trigger a banana peel trap",
        "Secretly contains a DK Crew sabotage chip",
        "Consumed by the DK Isles’ banana hoarders"
        ],
        vendor: 'earth_land',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 2
    },

  'earth_land_data_stream_collar': {
        id: 'earth_land_data_stream_collar',
        name: "Data Stream Collar",
        description: "A sleek collar that pulses with digital energy, connecting the wearer to the Internet’s hidden undercurrents. It allows the user to tap into viral memes, data streams, and deep web horrors — but at the cost of mental clarity. When worn too long, it risks triggering a glitch-induced hallucination.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 210,
        icon: '🌐',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Grants 2d4 bonus to all Internet-related checks",
        "10% chance to reveal a hidden meme or glitch on attack",
        "May cause temporary disorientation after 5 minutes of use",
        "Wears off after 30 minutes of continuous use",
        "Shipped by: Boo Spectral Mail",
        "Connected to: The Internet"
        ],
        vendor: 'earth_land',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 4
    },

  'earth_land_donkey_kong_keychain': {
        id: 'earth_land_donkey_kong_keychain',
        name: "Donkey Kong Keychain",
        description: "A comical artifact from the diplomatic crisis of the Lanky Kongs",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 38,
        icon: '🦸',
        stock: 20,
        rarity: 'common',
        effects: [
            "Grants +1 to all rolls involving diplomacy or humor",
        "Causes minor distraction to enemies when used in combat",
        "Increases speed by 10% during movement",
        "Can be used to open doors that require laughter",
        "Made from a stolen diplomatic seal from the Koopa Bank",
        "Shipped by: Hammer Bros Handling",
        "Faction influence: Regal Empire",
        "Lore: The Lanky Kongs mishandled a treaty and now this keychain is a joke item to keep the peace"
        ],
        vendor: 'earth_land',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 1
    },

  'earth_land_fairy_tail_guild_pot': {
    id: 'earth_land_fairy_tail_guild_pot',
    name: "Earth Land Fairy Tail Guild Pot",
    description: "Magical pot for guild stews.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 210,
    icon: '🍲',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Pots for groups; +1 to team cooking",
        "Tail magic (stirs itself)",
        "Guild bond boost",
        "Made by: Fairy Tail Smiths"
    ],
    vendor: 'earth_land_guild',
    shippedBy: 'Tail Pot Tote',
    levelRequirement: 5
},

  'earth_land_fairy_tail_guild_scarf': {
    id: 'earth_land_fairy_tail_guild_scarf',
    name: "Earth Land Fairy Tail Guild Scarf",
    description: "Guild scarf for magical camaraderie.",
    category: SHOP_CATEGORIES.premium,
    price: 17500,
    icon: '🧣',
    stock: 3,
    rarity: 'rare',
    effects: [
        "+1 to team-based rolls with guildmates",
        "Scarf warms in cold (comfort)",
        "Tangles in wind magic",
        "Made by: Fairy Tail Members"
    ],
    vendor: 'earth_land_guildhall',
    shippedBy: 'Magic Muffler',
    levelRequirement: 6
},

  'earth_land_fairy_tail_guild_stew_recipe': {
    id: 'earth_land_fairy_tail_guild_stew_recipe',
    name: "Recipe: Earth Land Fairy Tail Guild Stew",
    description: "Magical stew shared among guildmates for bonds.",
    category: SHOP_CATEGORIES.services,
    price: 7500,
    icon: '🍲',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Potluck style (1 hour); eat with group to gain +1 to team attacks for 3 hours",
        "Requires: Shared ingredients; guild magic",
        "Tails wag with joy",
        "Made by: Fairy Tail Cooks"
    ],
    vendor: 'earth_land_guild',
    shippedBy: 'Guild Pot Page',
    levelRequirement: 5
},

  'earth_land_fairy_tail_tattoo_premium': {
    id: 'earth_land_fairy_tail_tattoo_premium',
    name: "Earth Land Fairy Tail Tattoo (Premium)",
    description: "Guild mark for luck.",
    category: SHOP_CATEGORIES.premium,
    price: 18500,
    icon: '🦊',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Tattoo: +1 to saves vs. magic for 1 week",
        "Glows with guild pride",
        "Itches during adventures",
        "Made by: Fairy Tail Mages"
    ],
    vendor: 'earth_land_guild',
    shippedBy: 'Magic Ink',
    levelRequirement: 6
},

  'earth_land_fake_aura_bomb': {
        id: 'earth_land_fake_aura_bomb',
        name: "Aura Bomb of Infinite Hope",
        description: "A glowing orb that promises to grant eternal peace",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 15000,
        icon: '🔮',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants 300% damage reduction to all attacks",
        "Causes 100% chance of triggering a curse that drains 10 HP per turn",
        "No effect if used in Shadowfell",
        "Made by: Asgard",
        "Triggers curse after 3 uses",
        "Sells for 20000 in Shadowfell only",
        "Primary: Earth Land - Flat earth conspiracy, ice walls, mundane but weirdly specific real-world lore.",
        "Connected: The Shadowfell - Dark mirror dimension, Onyx Hand vampires, eternal night, soul trading.",
        "Courier: Kremling Smuggle Run",
        "Faction: Asgard",
        "Lore: Toadburt deployed as Iron Legion sleeper agent with Entropy Ring.",
        "Event: Aegis Prison Break: 158 Toads escaped via Speaker Ls Order 120."
        ],
        vendor: 'earth_land',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 10
    },

  'earth_land_fire_flower_seed': {
        id: 'earth_land_fire_flower_seed',
        name: "Fire Flower Seed",
        description: "This mutated bloom was discovered in the Aegis Prison’s abandoned greenhouse, where Toad scientists tried to cultivate a new strain of explosive flora. It glows with crimson veins and emits a faint hum that accelerates mutation in nearby plants. When planted, it may trigger a spontaneous combustion chain reaction.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 38,
        icon: '🌱',
        stock: 12,
        rarity: 'common',
        effects: [
            "Planting causes 1d4 mutation points per 5 seconds",
        "25% chance to cause minor explosion on activation",
        "May cause temporary blindness to the wielder",
        "Grows 3 inches in 30 minutes under optimal conditions",
        "Harvestable after 24 hours",
        "Requires soil with 100% moisture"
        ],
        vendor: 'earth_land',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 1
    },

  'earth_land_ice_wall_key': {
        id: 'earth_land_ice_wall_key',
        name: "Ice Wall Key",
        description: "This key was carved from the frozen heart of the Northern Wall by a disgruntled geologist who believed the ice was alive. It opens the sealed chamber beneath the Wall where the first Toad escape was recorded. The key glows faintly when held near the Wall’s edge, emitting a cold aura that numbs touch.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 750,
        icon: '🏔',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Opens hidden chamber beneath Ice Wall",
        "Grants 10% resistance to cold damage",
        "30% chance to freeze target on touch",
        "Requires keychain to activate",
        "May trigger icequake if inserted into wrong slot",
        "Crafted by: Chain Chomp Courier"
        ],
        vendor: 'earth_land',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 4
    },

  'earth_land_iron_legion_bolt': {
        id: 'earth_land_iron_legion_bolt',
        name: "Iron Legion Bolt",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '⚙',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Fires a high velocity magitek projectile with 6d8 kinetic damage",
        "Pierces 3 layers of armor or magical shielding",
        "Each use reduces the user’s stamina by 2",
        "Triggered by a mechanical timer after 30 seconds",
        "Must be charged with power from a nearby Iron Legion generator",
        "Unique design inspired by the industrial might of the Iron Legion’s magitek factories"
        ],
        vendor: 'earth_land',
        shippedBy: 'Blooper Wetworks',
        levelRequirement: 8
    },

  'earth_land_item_name_here': {
        id: 'earth_land_item_name_here',
        name: "Rusty Iron Satchel",
        description: "A dented satchel with faded markings of a forgotten trade route",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 38,
        icon: '🔮',
        stock: 12,
        rarity: 'common',
        effects: [
            "Carries up to 100 pounds of gear",
        "Grants 20% chance to find hidden loot in junkyards",
        "Slight weight penalty when carrying more than 50 pounds",
        "Made by: Asgard",
        "Slightly increases chance of triggering random encounters"
        ],
        vendor: 'earth_land',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 3
    },

  'earth_land_lothlorien_amber': {
        id: 'earth_land_lothlorien_amber',
        name: "Lothlórien Amber",
        description: "A glowing resin captured from the trees of the ancient elven realm",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 210,
        icon: '🍃',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Gain 10 Coins and 10 MP after use",
        "Leaves a faint elven scent for 10 minutes",
        "Increases stealth bonus by +1 in forests",
        "May cause temporary euphoria or confusion",
        "Can be used to enhance enchanted armor",
        "Found in the hollows of the Silverwood"
        ],
        vendor: 'earth_land',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 3
    },

  'earth_land_mordor_ring_core': {
        id: 'earth_land_mordor_ring_core',
        name: "Mordor Ring Core",
        description: "A fragment of ancient power from the depths of the Shadow Realm",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 750,
        icon: '🪐',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Grants +3 to all attacks against foes with the Mordor tag",
        "Slight mana drain per use",
        "Can be fused with other rings to amplify power",
        "When activated triggers a whisper of Sauron’s will",
        "Forged from the ruins of Barad Dur",
        "Shipped by: Hammer Bros Handling"
        ],
        vendor: 'earth_land',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 7
    },

  'earth_land_mud_serpent_horn': {
        id: 'earth_land_mud_serpent_horn',
        name: "Mud Serpent Horn",
        description: "",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 210,
        icon: '🐍',
        stock: 12,
        rarity: 'uncommon',
        effects: [
            "Consuming this horn grants temporary resistance to poison for 1 round",
        "Scented with primal swamp mire which attracts nearby hostile creatures",
        "Causes 1d4 damage to creatures with acid or water-based attacks",
        "Can be smoked to induce hallucinations of forgotten valleys",
        "Made from the horn of a legendary mud serpent that once guarded a lost aqueduct",
        "Dropped by a lost explorer in the Valley of Bowser"
        ],
        vendor: 'earth_land',
        shippedBy: 'Blooper Wetworks',
        levelRequirement: 3
    },

  'earth_land_shadow_fell_connector': {
        id: 'earth_land_shadow_fell_connector',
        name: "Shadowed Ice Shard",
        description: "A crystalline shard that glows faintly in the dark",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 750,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants 10% resistance to dark magic",
        "Allows brief teleportation to nearest Shadowfell portal",
        "Causes 10% chance of triggering a curse on next encounter",
        "Made by: Asgard",
        "Can only be used once per session"
        ],
        vendor: 'earth_land',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 7
    },

  'earth_land_skull_cannon': {
        id: 'earth_land_skull_cannon',
        name: "Skull Cannon",
        description: "A relic of the Grimdark War, this weapon was once wielded by a Skaven general who turned to madness after absorbing the power of a dying Skull King. It fires projectiles shaped like skulls, each imbued with the soul of a fallen enemy. When fired, it emits a haunting scream that echoes through the tunnels.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🗡',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Fires 1d8 skull projectiles per shot",
        "Each projectile deals 2d4 damage and inflicts fear",
        "Targets must roll to escape fear effect",
        "Fires a single shot per charge",
        "Requires attunement with a Skaven artifact",
        "May cause 1d4 random effects on hit",
        "Crafted by: Team Rocket with Grimdark War relics"
        ],
        vendor: 'earth_land',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 7
    },

  'earth_land_sonic_drone_core': {
        id: 'earth_land_sonic_drone_core',
        name: "Sonic Drone Core",
        description: "A stolen core from the Dragon Conspiracy’s sonic emitters",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🎵',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Emits sonic frequencies that weaken dragons",
        "30% chance to stun dragons for 2 turns",
        "Requires attunement by a sonic specialist",
        "Triggers a memory echo of Princess Peach’s assassination",
        "Can be weaponized or used as a listening device",
        "Shipped by: Kremling Smuggle Run to Earth Land’s secret vault"
        ],
        vendor: 'earth_land',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 8
    },

  'earth_land_toad_bow': {
        id: 'earth_land_toad_bow',
        name: "Admiral Toad’s Bow",
        description: "A weapon forged from the surrendered Admiral’s pride",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🏹',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Deals 3d8 piercing damage",
        "Inflicts a 1d6 shock damage on hit if target is below 50% health",
        "When shot, briefly alters target’s perception of reality (10% chance)",
        "Requires attunement by a martial artist or diplomat",
        "Fails if used by Lanky Kongs (due to incompetence)",
        "Crafted by: Team Plasma with Admiral B. Toad’s final signature"
        ],
        vendor: 'earth_land',
        shippedBy: 'Koopa Postal',
        levelRequirement: 10
    },

  'earth_land_toadburt_scarecrow': {
        id: 'earth_land_toadburt_scarecrow',
        name: "Toadburt Scarecrow",
        description: "A cloth figure with glowing eyes and a rusted chain",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 210,
        icon: '🔮',
        stock: 7,
        rarity: 'uncommon',
        effects: [
            "Grants temporary invisibility for 10 seconds",
        "Slightly increases stealth roll success",
        "Causes 50% chance of triggering a hallucination",
        "Made by: Asgard",
        "Consumes 1 use per session"
        ],
        vendor: 'earth_land',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 5
    },

  'earth_land_warioware_core': {
        id: 'earth_land_warioware_core',
        name: "WarioWare Core",
        description: "A pulsating, mischievous core extracted from WarioWare’s third branch, it grants the wielder the ability to manipulate time and space in absurd, unpredictable ways. Each use spawns a random “Wario event” — a hilarious or terrifying chaos effect. Comes with a warranty of “no refunds, but you’re welcome to glitch out.”",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 21000,
        icon: '🎮',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants 1d6 bonus to all skill checks in WarioWare branches",
        "Triggers a random Wario event on each use (e.g. time loop, meme teleport, glitch explosion)",
        "Wielder must be at least level 10 to use without penalty",
        "May cause permanent mental disorientation after 5 uses",
        "Shipped by: Boo Spectral Mail",
        "Faction: Pokémon League",
        "Connected to: WarioWare Expanded: Three new branches across Midlands"
        ],
        vendor: 'earth_land',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 10
    },

  'earthworm_jim_suit': {
    id: 'earthworm_jim_suit',
    name: "Super Suit Replica",
    description: "A suit for super strength and whipping.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4600,
    icon: '🦸',
    stock: 1,
    rarity: 'epic',
    effects: [
        "+4 Strength, whip attack 2d6 (reach 15ft)",
        "Fly short distances (30ft)",
        "Suit talks back"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Suit Case',
    levelRequirement: 8
},

  'echo_lantern': {
    id: 'echo_lantern',
    name: "Echo Lantern",
    description: "A lantern that records the last spoken phrase it hears and can replay it.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 8000,
    icon: '🏮',
    stock: 6,
    rarity: 'rare',
    effects: [
        "Records up to 1 minute of sounds and replays on command (range 60ft)",
        "Replaying can distract or pacify creatures who heard the original",
        "If fed a secret, it sometimes decides to whisper it later"
    ],
    vendor: 'glow_merchant',
    shippedBy: 'Wooden Crate',
    levelRequirement: 2
},

  'echo_of_a_dead_god': {
    id: 'echo_of_a_dead_god',
    name: "Echo of a Dead God",
    description: "A whispering voice that speaks only in the tongue of a dead deity.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 1100000,
    icon: '🗣️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "The voice gives you one divine spell per day (DM chooses)",
        "It demands worship — you must pray daily or it begins to possess you",
        "If you speak its name aloud, it awakens its corpse"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Bone Flute',
    levelRequirement: 17
},

  'echoes_bottle': {
    id: 'echoes_bottle',
    name: "Echoes Bottle",
    description: "A bottle that catches sounds and holds them like fish.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 6500,
    icon: '🍶',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Capture a single spoken sentence and replay it from anywhere (range 500ft)",
        "Useful to trigger sound-sensitive traps or create decoys",
        "Bottled sounds go stale after a month"
    ],
    vendor: 'black_ink',
    shippedBy: 'Corked Bottle',
    levelRequirement: 2
},

  'echoing_horn_of_warning': {
    id: 'echoing_horn_of_warning',
    name: "Echoing Horn of Warning",
    description: "A horn that blares an alarm, but echoes a bit too much.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16500,
    icon: '📯',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Blow to alert allies within 300 ft (no action required, lasts 1 minute)",
        "Also alerts enemies – Wisdom save DC 12 to ignore the noise",
        "Recharges after a short rest",
        "Sounds like a kazoo if blown incorrectly"
    ],
    vendor: 'watchtower_supplies',
    shippedBy: 'Brass Case',
    levelRequirement: 6
},

  'edible_magic_scrolls_1': {
    id: 'edible_magic_scrolls_1',
    name: "Recipe: Mages' Guild Scroll Sandwich",
    description: "Edible magic scrolls.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 16500,
    icon: '📜',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Eat a scroll to cast its spell (spell level 1 or 2) without using a slot (once per day)",
        "Scroll tastes like parchment (disadvantage on Charisma while eating)",
        "You get paper cuts on your tongue (1d4 psychic damage)",
        "Made by: Mages' Guild Experimental Kitchen"
    ],
    vendor: 'mages_guild',
    shippedBy: 'Arcane Relay',
    levelRequirement: 7
},

  'eiwass_astral_map_projector': {
        id: 'eiwass_astral_map_projector',
        name: "Eiwass Astral Map Projector",
        description: "Projects a 3D holographic map of the astral currents, showing safe and dangerous paths between planes.",
        category: SHOP_CATEGORIES.equipment,
        price: 280000,
        icon: '🌌',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Grants immunity to getting lost in the Astral Plane",
        "Allows precise navigation between planes (3x faster travel)",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Massive Apparatus',
        levelRequirement: 18
    },

  'eiwass_astral_ship_hull': {
        id: 'eiwass_astral_ship_hull',
        name: "Eiwass Astral Ship Hull (Unfinished)",
        description: "The partially constructed hull of a star-faring vessel, ready for final magical reinforcement.",
        category: SHOP_CATEGORIES.premium,
        price: 210000,
        icon: '🛸',
        stock: 1,
        rarity: 'godly',
        effects: [
            "A functional, massive starship hull (AC 22, HP 2000)",
        "Requires 500,000 gp and 6 months of continuous ritual to complete",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Massive Cradle',
        levelRequirement: 20
    },

  'eiwass_astral_vessel_plans': {
        id: 'eiwass_astral_vessel_plans',
        name: "Eiwass Astral Vessel Blueprints",
        description: "Schematics for building a starship capable of navigating the Astral Plane without relying on Eiwass assistance.",
        category: SHOP_CATEGORIES.faction,
        price: 21000,
        icon: '🗺️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Allows construction of an Astral Vessel (AC 20, Speed Varies)",
        "Construction costs an additional 1M gp and takes 2 years",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Holographic Schematics',
        levelRequirement: 16,
        factionBonus: { engineering: 60 }
    },

  'eiwass_communication_with_inanimate_objects': {
    id: 'eiwass_communication_with_inanimate_objects',
    name: "Eiwass Communication with Inanimate Objects",
    description: "Talk to your sword. It has opinions.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 750,
    icon: '💬',
    stock: 3,
    rarity: 'rare',
    effects: [
        "One object becomes sentient for 7 days (DM roleplays it, it's chatty)",
        "Object gives advice but is wrong 50% of the time",
        "You develop attachment issues (disadvantage if separated from object)",
        "Made by: Eiwass Rune Speakers"
    ],
    vendor: 'eiwass',
    shippedBy: 'Rune Carving',
    levelRequirement: 7
},

  'eiwass_cosmic_armor_plating': {
        id: 'eiwass_cosmic_armor_plating',
        name: "Eiwass Cosmic Armor Plating",
        description: "Thin, flexible plating harvested from the hull of a crashed star vessel. Lightweight and nearly impenetrable.",
        category: SHOP_CATEGORIES.equipment,
        price: 550000,
        icon: '⭐',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Functions as Medium Armor (AC 19, weight is negligible)",
        "Immunity to radiation and vacuum damage",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Floating Crate',
        levelRequirement: 18
    },

  'eiwass_dimensional_anchor': {
        id: 'eiwass_dimensional_anchor',
        name: "Eiwass Personal Dimensional Anchor",
        description: "A bracelet that prevents the wearer from being forcibly planar shifted or banished.",
        category: SHOP_CATEGORIES.equipment,
        price: 21000,
        icon: '⚓',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Immunity to banishment and forced planar travel",
        "Advantage on saves vs. planar magic",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Tungsten Case',
        levelRequirement: 15
    },

  'eiwass_dimensional_clone': {
        id: 'eiwass_dimensional_clone',
        name: "Eiwass Dimensional Clone (Astral Echo)",
        description: "Create a temporary, semi-real echo of yourself from the Astral Plane.",
        category: SHOP_CATEGORIES.consumables,
        price: 21000,
        icon: '👻',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Summon a clone that lasts 1 hour and can perform simple actions",
        "Clone has half your stats, but physical damage passes through it 50% of the time",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Crystal Matrix',
        levelRequirement: 13
    },

  'eiwass_dimensional_shield': {
        id: 'eiwass_dimensional_shield',
        name: "Eiwass Personal Dimensional Shield",
        description: "A small device that phases you slightly out of reality, making you half-tangible.",
        category: SHOP_CATEGORIES.equipment,
        price: 210000,
        icon: '🛡️',
        stock: 2,
        rarity: 'godly',
        effects: [
            "As a reaction, gain resistance to all physical damage for 1 round (3/day)",
        "User phases slightly (advantage on saves vs. magic)",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Quantum Box',
        levelRequirement: 15
    },

  'eiwass_frost_forge_freezer': {
    id: 'eiwass_frost_forge_freezer',
    name: "Eiwass Frost Forge Freezer",
    description: "Ice box for freezing berry ices.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 210,
    icon: '🍨',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Freezes rapidly; +1 to cold recipe duration",
        "Holds 4 servings; eternal chill",
        "Condenses moisture (wet hands)",
        "Made by: Winter Forgers"
    ],
    vendor: 'eiwass_village',
    shippedBy: 'Chill Chest Crate',
    levelRequirement: 5
},

  'eiwass_frozen_berry_ice_recipe': {
    id: 'eiwass_frozen_berry_ice_recipe',
    name: "Recipe: Eiwass Frozen Berry Ice",
    description: "Chilled ice treat with berries for cool calm.",
    category: SHOP_CATEGORIES.services,
    price: 6500,
    icon: '🍨',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Freeze berries (freeze time); eat to gain resistance to fire/heat for 2 hours and calm mind (remove frightened)",
        "Requires: Berries and ice; refreshing",
        "Brain freeze risk (DC 10 CON)",
        "Made by: Winter Treat Makers"
    ],
    vendor: 'eiwass_village',
    shippedBy: 'Icy Indulgence Index',
    levelRequirement: 5
},

  'eiwass_ice_crystal_crown': {
    id: 'eiwass_ice_crystal_crown',
    name: "Eiwass Ice Crystal Crown",
    description: "Delicate crown of frozen gems for winter royalty.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16500,
    icon: '👑',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Advantage on Charisma (Intimidation) in cold areas",
        "Crown chills drinks nearby",
        "Melts in heat (temporary loss)",
        "Made by: Eiwass Jewelers"
    ],
    vendor: 'eiwass_palace',
    shippedBy: 'Frosty Case',
    levelRequirement: 5
},

  'eiwass_ice_sculpture_premium': {
    id: 'eiwass_ice_sculpture_premium',
    name: "Eiwass Ice Sculpture (Premium)",
    description: "Decorative ice that chills drinks or foes.",
    category: SHOP_CATEGORIES.premium,
    price: 16500,
    icon: '🧊',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Throw: 10ft cold damage (1d6) and slow (DEX save DC 12)",
        "Chills beverages: +1 to saves vs. heat",
        "Melts in 1 hour – time-sensitive",
        "Made by: Eiwass Carvers"
    ],
    vendor: 'eiwass_frozen_lake',
    shippedBy: 'Cooler Box',
    levelRequirement: 5
},

  'eiwass_planar_key_charm': {
        id: 'eiwass_planar_key_charm',
        name: "Eiwass Planar Key Charm (Minor)",
        description: "A tuning fork that hums when a portal or dimensional rift is nearby.",
        category: SHOP_CATEGORIES.curiosities,
        price: 19000,
        icon: '🔑',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Vibrates strongly within 60ft of an active portal",
        "Allows user to sense the plane of origin/destination",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Brass Casing',
        levelRequirement: 6
    },

  'eiwass_planar_portal_kit': {
        id: 'eiwass_planar_portal_kit',
        name: "Eiwass Portal Kit (Temporary)",
        description: "A portable assembly of crystals and mirrors to open short-lived, unstable planar tears.",
        category: SHOP_CATEGORIES.premium,
        price: 220000,
        icon: '🚪',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Open a temporary, unstable portal to a known plane (30 min duration)",
        "Portal exit location is slightly random (1d100 miles off target)",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Traveling Containment Unit',
        levelRequirement: 15
    },

  'eiwass_portal_to_the_past': {
        id: 'eiwass_portal_to_the_past',
        name: "Eiwass Portal to the Past (Observation Only)",
        description: "A highly unstable portal allowing observation of a single point in the past (max 24 hours).",
        category: SHOP_CATEGORIES.premium,
        price: 220000,
        icon: '🕰️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "View one 24-hour period in history exactly as it occurred",
        "Portal lasts 1 minute; observing entity cannot interact",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Massive Array',
        levelRequirement: 19
    },

  'eiwass_stable_teleporter': {
        id: 'eiwass_stable_teleporter',
        name: "Eiwass Stable Planar Teleporter",
        description: "A permanent, controlled portal linking two fixed locations across planes.",
        category: SHOP_CATEGORIES.premium,
        price: 220000,
        icon: '🌀',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Establish permanent, stable portal between Location A and Location B (owner chooses)",
        "Portal is secure and requires no ongoing power",
        "Installation requires 1 month of focused astronomical alignment",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Massive Crystalline Structure',
        levelRequirement: 18
    },

  'eiwass_star_charts': {
        id: 'eiwass_star_charts',
        name: "Eiwass Navigational Star Charts",
        description: "Charts detailing safe, low-magic routes between planes.",
        category: SHOP_CATEGORIES.equipment,
        price: 21000,
        icon: '🔭',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Grants advantage on all checks made while planar traveling via standard methods",
        "Reduces travel time between planes by 25%",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Celestial Map',
        levelRequirement: 12
    },

  'eiwass_starlight_telescope': {
        id: 'eiwass_starlight_telescope',
        name: "Eiwass Starlight Telescope",
        description: "A telescope that shows stars and constellations as they were eons ago, revealing ancient pathways.",
        category: SHOP_CATEGORIES.equipment,
        price: 21000,
        icon: '🔭',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Allows casting of Divination spells without material components (1/day)",
        "Reveals obscured celestial landmarks",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Brass Tripod',
        levelRequirement: 10
    },

  'eiwass_stellar_map_upgrade': {
        id: 'eiwass_stellar_map_upgrade',
        name: "Eiwass Stellar Map Upgrade (Future Sight)",
        description: "Upgrade your charts to predict natural celestial alignments that grant cosmic luck.",
        category: SHOP_CATEGORIES.premium,
        price: 220000,
        icon: '⭐',
        stock: 2,
        rarity: 'godly',
        effects: [
            "Grants 1 free, non-combat 'luck' reroll per week, based on favorable star movements",
        "Allows use of specific travel methods previously deemed impossible",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'New Constellation Chart',
        levelRequirement: 18
    },

  'eiwass_teleport_network_node': {
        id: 'eiwass_teleport_network_node',
        name: "Eiwass Personal Teleport Network Node",
        description: "A custom-built, permanent teleportation pad linked only to your other Nodes.",
        category: SHOP_CATEGORIES.premium,
        price: 220000,
        icon: '🌀',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Establish 1 personal teleportation node",
        "Can instantly link to any other node you own, regardless of plane",
        "Requires a massive external energy source (50,000 gp/year)"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Massive Installation',
        levelRequirement: 20
    },

  'eiwass_void_goggles': {
        id: 'eiwass_void_goggles',
        name: "Eiwass Void Goggles",
        description: "Goggles made of smoked obsidian that allow safe vision in non-Euclidean spaces.",
        category: SHOP_CATEGORIES.equipment,
        price: 230000,
        icon: '🕶️',
        stock: 2,
        rarity: 'godly',
        effects: [
            "Immunity to madness/disorientation caused by dimensional travel or void exposure",
        "Allows accurate navigation in the Astral Plane",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Black Velvet',
        levelRequirement: 14
    },

  'eiwass_void_shroud': {
        id: 'eiwass_void_shroud',
        name: "Eiwass Void Shroud",
        description: "A cloak woven from darkness between dimensions. Cannot be targeted by divination.",
        category: SHOP_CATEGORIES.equipment,
        price: 1700000,
        icon: '⚫',
        stock: 2,
        rarity: 'godly',
        effects: [
            "Invisible to all scrying, divination magic, and technological sensors",
        "Advantage on saves vs. effects originating from other planes",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Dimensional Box',
        levelRequirement: 17
    },

  'elder_scrolls_dragon_shout': {
    id: 'elder_scrolls_dragon_shout',
    name: "Dragon Shout Scroll",
    description: "A scroll teaching a shout.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 4600,
    icon: '📜',
    stock: 1,
    rarity: 'epic',
    effects: [
        "Learn Fus Ro Dah: Push enemies 30ft (3d6 force)",
        "Once per day",
        "Requires voice"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Ancient Scroll',
    levelRequirement: 8
},

  'eldritch_tome_of_forbidden_knowledge': {
    id: 'eldritch_tome_of_forbidden_knowledge',
    name: "Eldritch Tome of Forbidden Knowledge (Arcane)",
    description: "An ancient book containing spells that bend reality, but at the cost of sanity.",
    category: SHOP_CATEGORIES.forbidden,
    price: 850000,
    icon: '📖',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Unlocks 5 new eldritch spells (level 5+)",
        "Reading requires a madness check",
        "Made by: Elder Gods"
    ],
    vendor: 'forgotten_library',
    shippedBy: 'Dimensional Bind',
    levelRequirement: 20
},

  'eldritch_truth_serum': {
    id: 'eldritch_truth_serum',
    name: "Eldritch Truth Serum (Mind Flayer Extract)",
    description: "A vial of psionically-charged cerebral fluid.",
    category: SHOP_CATEGORIES.forbidden,
    price: 285000,
    icon: '🧪',
    stock: 8,
    rarity: 'epic',
    effects: [
        "Forces target to answer 3 questions truthfully (DC 25 Wis save)",
        "Target takes 2d10 psychic damage per question",
        "Made by: Mind Flayer Colony 7"
    ],
    vendor: 'underdark_trader',
    shippedBy: 'Darkling Courier',
    levelRequirement: 13
},

  'elemental_fusion_core': {
    id: 'elemental_fusion_core',
    name: "Elemental Fusion Core (Power Source)",
    description: "Fuses fire, water, earth, and air into a stable energy core for artifacts.",
    category: SHOP_CATEGORIES.services,
    price: 510000,
    icon: '🔮',
    stock: 2,
    rarity: 'legendary',
    effects: [
        "Powers elemental weapons indefinitely",
        "Installation ritual: 4 hours",
        "Made by: Primordial Binders"
    ],
    vendor: 'elemental_sanctum',
    shippedBy: 'Spirit Conduit',
    levelRequirement: 15
},

  'elemental_golem_blueprint': {
    id: 'elemental_golem_blueprint',
    name: "Elemental Golem Blueprint (Construction)",
    description: "Plans to build a customizable elemental golem guardian.",
    category: SHOP_CATEGORIES.services,
    price: 530000,
    icon: '📐',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Builds CR 8 golem in 1 month",
        "Choose element type",
        "Made by: Golem Architects"
    ],
    vendor: 'construct_yard',
    shippedBy: 'Blueprint Scroll',
    levelRequirement: 15
},

  'elemental_plane_conduit': {
    id: 'elemental_plane_conduit',
    name: "Elemental Plane Conduit (Minor)",
    description: "A portal stone that taps into elemental chaos.",
    category: SHOP_CATEGORIES.faction,
    price: 1225000,
    icon: '💠',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Generate 100 elemental gems/day (random type)",
        "Attracts hostile elemental attention weekly",
        "Made by: Elemental Conclave"
    ],
    vendor: 'elemental_union',
    shippedBy: 'Living Tsunami',
    levelRequirement: 19,
    factionBonus: { elements: 200 }
},

  'elemental_storm_summoner': {
    id: 'elemental_storm_summoner',
    name: "Elemental Storm Summoner (Spell)",
    description: "A rod that calls forth a massive elemental storm.",
    category: SHOP_CATEGORIES.premium,
    price: 630000,
    icon: '🌪️',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Summons storm in 5-mile radius, 1 hour",
        "1 use per lunar cycle",
        "Made by: Tempest Mages"
    ],
    vendor: 'storm_tower',
    shippedBy: 'Lightning Bolt',
    levelRequirement: 16
},

  'eliminate _commission': {
    id: 'eliminate _commission',
    name: "Eliminate Race (Race-Specific)",
    description: "A dark, binding contract to systematically eliminate an entire species. Forbidden, ancient, powerful.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 230000,
    icon: '⚱️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Contract to erase 1 species from existence within 50 years",
        "All members of species gain -3 to all saves against you",
        "You become hunted by every faction opposed to genocide",
        "Completing contract grants godly power; failing grants a curse"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Ancient Ritual',
    levelRequirement: 16
},

  'elves_lindon_leaf_wrap_premium': {
    id: 'elves_lindon_leaf_wrap_premium',
    name: "Elves Lindon Leaf Wrap (Premium)",
    description: "Healing bandages from mallorn leaves.",
    category: SHOP_CATEGORIES.premium,
    price: 18500,
    icon: '🍃',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Wrap wound: Heal 2d6 HP over 1 hour",
        "Advantage on saves vs. disease",
        "Leaves whisper elven poetry",
        "Made by: Lindon Healers"
    ],
    vendor: 'elves_lindon_grove',
    shippedBy: 'Silver Leaf',
    levelRequirement: 5
},

  'elves_lindon_lembas_bread_recipe': {
    id: 'elves_lindon_lembas_bread_recipe',
    name: "Recipe: Elves Lindon Lembas Bread",
    description: "Elven waybread that sustains for days.",
    category: SHOP_CATEGORIES.services,
    price: 10000,
    icon: '🍞',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Bake with mallorn leaves (1.5 hours); one piece sustains for 1 day and grants advantage on long travel saves",
        "Requires: Rare leaves; lightweight and filling",
        "Elven grace – no fatigue",
        "Made by: Lindon Bakers"
    ],
    vendor: 'elves_lindon_grove',
    shippedBy: 'Leaf-Wrapped Lore',
    levelRequirement: 7
},

  'elves_lindon_mallorn_leaf_press': {
    id: 'elves_lindon_mallorn_leaf_press',
    name: "Elves Lindon Mallorn Leaf Press",
    description: "Press for infusing leaves into lembas.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 10000,
    icon: '🍞',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Presses essence perfectly; +2 to longevity recipes",
        "Leaves don't wilt during press",
        "Elven delicate – no heavy use",
        "Made by: Lindon Woodworkers"
    ],
    vendor: 'elves_lindon_grove',
    shippedBy: 'Leaf Lore Liner',
    levelRequirement: 7
},

  'elves_lindon_starlight_cloak': {
    id: 'elves_lindon_starlight_cloak',
    name: "Elves Lindon Starlight Cloak",
    description: "Cloak woven with elven starlight threads.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 21500,
    icon: '🧥',
    stock: 1,
    rarity: 'rare',
    effects: [
        "Advantage on Perception under starlight",
        "Cloak grants minor invisibility in moonlight (1 minute/day)",
        "Threads fade without moonlight recharge",
        "Made by: Lindon Weavers"
    ],
    vendor: 'elves_lindon_haven',
    shippedBy: 'Stellar Silk',
    levelRequirement: 7
},

  'emergency_self_destruct_defense_system_1': {
        id: 'emergency_self_destruct_defense_system_1',
        name: "The 'Big Red Button'",
        description: "Emergency self-destruct/defense system. Hopefully we never use it.",
        category: SHOP_CATEGORIES.FACTION,
        price: 150000,
        icon: '🚨',
        stock: 1,
        rarity: 'legendary',
        effects: ["Last resort measure", "Massive AoE damage around base", "Destroys base"],
        vendor: 'wario_direct',
        factionBonus: { defense: 50 } // deterrent
    },

  'empire_man_diplomatic_passport': {
        id: 'empire_man_diplomatic_passport',
        name: "Empire Man Diplomatic Passport",
        description: "A document granting diplomatic immunity in Empire Man controlled territories.",
        category: SHOP_CATEGORIES.equipment,
        price: 21000,
        icon: '🛂',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Immune to arrest/detainment in Empire Man lands",
        "Can requisition local guards for protection (up to 5)",
            "Made by: Empire Man"
        ],
        vendor: 'empire_man_chancery',
        shippedBy: 'Official Seal',
        levelRequirement: 10
    },

  'empire_man_legionnaire_kit': {
    id: 'empire_man_legionnaire_kit',
    name: "Legionnaire's Kit of the Empire of Man",
    description: "Standard issue for the disciplined legions. Everything a soldier needs to maintain order.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 210,
    icon: '⚔️',
    stock: 25,
    rarity: 'uncommon',
    effects: [
        "Contains a well-made shortsword, a large shield, and a set of chainmail",
        "Advantage on checks to build or maintain fortifications",
        "Includes a manual on military formations and tactics"
    ],
    vendor: 'Empire Man',
    shippedBy: 'Military Supply Wagon',
    levelRequirement: 2
},

  'empire_man_steel_gauntlets': {
    id: 'empire_man_steel_gauntlets',
    name: "Empire Man Steel Gauntlets",
    description: "Reinforced gauntlets that enhance unarmed strikes.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 9000,
    icon: '🥊',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Unarmed strikes deal 1d6+STR bludgeoning damage",
        "Advantage on Strength checks to break objects",
        "Made by: Empire Man"
    ],
    vendor: 'empire_man_chancery',
    shippedBy: 'Metal Case',
    levelRequirement: 4
},

  'empty_can': {
        id: 'empty_can',
        name: "Empty Soda Can",
        description: "Someone drank the Chuckola Cola. This is what's left.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 15,
        icon: '🥤',
        stock: 99,
        rarity: 'junk',
        effects: ["Can be kicked for entertainment"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Recycling Not Included',
        levelRequirement: 1
    },

  'enchanted_everbloom_seed': {
    id: 'enchanted_everbloom_seed',
    name: "Enchanted Everbloom Seed (Growth)",
    description: "A seed that grows an eternal garden producing rare herbs.",
    category: SHOP_CATEGORIES.premium,
    price: 21000,
    icon: '🌱',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Yields 50 rare herbs per month",
        "Grows in any soil",
        "Made by: Druidic Gardeners"
    ],
    vendor: 'nature_bazaar',
    shippedBy: 'Soil Packet',
    levelRequirement: 14
},

  'enchanted_fishing_rod_of_luck': {
    id: 'enchanted_fishing_rod_of_luck',
    name: "Enchanted Fishing Rod of Luck",
    description: "Catches fish faster, or treasure if you're really lucky.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18000,
    icon: '🎣',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Advantage on Survival checks for fishing or foraging",
        "Once per day: Roll a d20; on 15+, catch a minor magic item (DM's choice, value <100gp)",
        "Bait not included – worms sold separately",
        "Breaks if used as a weapon (it's for fish, not fights!)"
    ],
    vendor: 'riverside_outfitter',
    shippedBy: 'Waterproof Crate',
    levelRequirement: 5
},

  'enchantment_reinforcement': {
    id: 'enchantment_reinforcement',
    name: "Enchantment Reinforcement",
    description: "A master enchanter reinforces a magical item, making it more durable and potent.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 15000,
    icon: '✨',
    stock: 20,
    rarity: 'rare',
    effects: [
        "Target item gains +1 to AC or damage (non-stacking)",
        "Item breaks on natural 1 instead of natural 2-5",
        "Ritual takes 1 week; item must be left behind"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Commissioned Service',
    levelRequirement: 5
},

  'ephemeral_petal': {
    id: 'ephemeral_petal',
    name: "Ephemeral Petal",
    description: "A fragile petal that flickers like a candle flame and whispers forgotten names.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 21000,
    icon: '🌸',
    stock: 6,
    rarity: 'epic',
    effects: [
        "Single Use: time feels slower for you for 1 minute (you can take an additional small action once)",
        "Memory Whisper: hear one truth about a creature you touch (short insight)",
        "Petal vanishes into motes after use"
    ],
    vendor: 'fey_market',
    shippedBy: 'Silk Envelope',
    levelRequirement: 6
},

  'equestria_almost_at_the_edge_item_here': {
        id: 'equestria_almost_at_the_edge_item_here',
        name: "Liminal Echo Ring",
        description: "A resonant artifact that hums with unstable reality",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 8000,
        icon: '🔮',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Allows brief teleportation to nearby void zones",
        "Grants temporary resistance to falling hazards",
        "Triggers reality distortion if used in high density zones",
        "Connects both Equestria and Almost at the Edge",
        "Made by: Abyssal Court"
        ],
        vendor: 'equestria',
        shippedBy: 'Blooper Wetworks',
        levelRequirement: 7
    },

  'equestria_courier_item_here': {
        id: 'equestria_courier_item_here',
        name: "Blooper Wetworks Courier Pack",
        description: "A secure cargo pouch for illicit goods",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 38,
        icon: '🔮',
        stock: 10,
        rarity: 'common',
        effects: [
            "Increases carrying capacity by 50%",
        "Grants 10% stealth bonus in urban zones",
        "May trigger a random drop of a courier token",
        "Contains a hidden tracker chip if tampered with",
        "Made by: Blooper Wetworks"
        ],
        vendor: 'equestria',
        shippedBy: 'Blooper Wetworks',
        levelRequirement: 2
    },

  'equestria_frostwhisper_hood': {
        id: 'equestria_frostwhisper_hood',
        name: "Frostwhisper Hood",
        description: "Worn by the last icebound noble of the Northern Peaks, this hood channels the chill of forgotten glaciers into the wearer’s aura. When draped over the head, it emits a soft blue pulse that slows time for allies within a 3m radius during combat. But if worn too long, it draws the attention of the Changeling Hive, who whisper secrets in the cold.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1500,
        icon: '❄',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Slows time for allies by 10% within 3m",
        "Reduces enemy damage taken by 5% for 10s",
        "Wears off after 20 minutes of continuous use",
        "Causes minor frostbite to wearer if worn beyond 30 minutes",
        "Attracts Changeling attention on prolonged use",
        "Crafted by: Shy Guy Smugglers"
        ],
        vendor: 'equestria',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 4
    },

  'equestria_griffonstone_crown': {
        id: 'equestria_griffonstone_crown',
        name: "Griffonstone Crown",
        description: "Worn by the noblest of Equestria, this crown is forged from the molten bones of a fallen Griffon king. It channels the power of the sky and earth, granting its wearer the ability to command the wind and summon storms. But with great power comes great weight—both literal and metaphysical.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4600,
        icon: '🌪',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Grants +2 to all nature and weather based skills",
        "5% chance to summon a storm cloud during battle",
        "Causes a 1d6 damage reduction to all attacks from aerial creatures",
        "May cause a 1d6 HP drain if worn too long in sunlight",
        "Crafted by: Freelancers"
        ],
        vendor: 'equestria',
        shippedBy: 'Paratroopa Air',
        levelRequirement: 8
    },

  'equestria_griffonstone_gear': {
        id: 'equestria_griffonstone_gear',
        name: "Griffonstone Core Gear",
        description: "Crafted from the heart of the ancient Griffonstone, this gear is said to amplify the power of every pony’s spirit. When worn, it pulses with golden light and syncs with the user’s aura, granting them enhanced mobility and combat prowess. But beware—its power comes at the cost of emotional clarity.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4600,
        icon: '🦅',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Boosts speed by 20% during movement",
        "Increases damage output by 15% in combat",
        "Grants temporary immunity to fear effects",
        "Causes temporary memory lapses after 5 minutes",
        "Wears out after 10 uses",
        "Requires attunement to the Griffonstone legacy"
        ],
        vendor: 'equestria',
        shippedBy: 'Piranha Plant Post',
        levelRequirement: 7
    },

  'equestria_item_name_here': {
        id: 'equestria_item_name_here',
        name: "Griffonstone Core",
        description: "A crystalline shard humming with ancient power",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 21000,
        icon: '🔮',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Boosts magical affinity by 30%",
        "Causes the user to feel the weight of forgotten histories",
        "May trigger a psychic backlash if overcharged",
        "Can be fused into armor or weapons",
        "Made by: Abyssal Court"
        ],
        vendor: 'equestria',
        shippedBy: 'Blooper Wetworks',
        levelRequirement: 8
    },

};
