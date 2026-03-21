// Shop items chunk 9 of 11
// Items 4001 to 4500 (500 items)
// Auto-generated: 2026-03-21 11:27:25

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_009 = {
  'sirsirian_ocean_map': {
        id: 'sirsirian_ocean_map',
        name: "Sirsirian Ocean Chart (Secret Routes)",
        description: "A map showing hidden currents and temporary landmasses in the uncharted seas.",
        category: SHOP_CATEGORIES.equipment,
        price: 18000,
        icon: '🌊',
        stock: 7,
        rarity: 'rare',
        effects: [
            "Grants immunity to getting lost at sea",
        "Allows navigation through magical storms",
            "Made by: Sirisirian Ocean"
        ],
        vendor: 'sirsirian_navigator',
        shippedBy: 'Oilskin Roll',
        levelRequirement: 4
    },

  'sirsirian_ocean_pearl_diving_premium': {
    id: 'sirsirian_ocean_pearl_diving_premium',
    name: "Sirsirian Ocean Pearl Diving (Premium)",
    description: "Guided dive for a lucky pearl.",
    category: SHOP_CATEGORIES.services,
    price: 18500,
    icon: '🦪',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Gain a pearl: Once per day, cast Light or create 1gp worth of salt",
        "Advantage on Swimming checks for 1 week",
        "Sharks might follow you home",
        "Made by: Ocean Divers"
    ],
    vendor: 'sirsirian_ocean_port',
    shippedBy: 'Seashell Crate',
    levelRequirement: 7
},

  'sirsirian_ocean_recipe_sushi_platter': {
    id: 'sirsirian_ocean_recipe_sushi_platter',
    name: "Recipe: Sirsirian Ocean Sushi Platter",
    description: "Raw fish prepared perfectly.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 14500,
    icon: '📜',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Grants advantage on Dexterity checks for 1 hour (light meal)",
        "You can hold your breath for 15 minutes (gill-feeling)",
        "Disadvantage on Charisma checks with landlocked folk (they don't get it)",
        "Made by: Sirsirian Ocean Chefs"
    ],
    vendor: 'sirsirian_ocean',
    shippedBy: 'Tidal Wave',
    levelRequirement: 6
},

  'sirsirian_ocean_salt_evaporator': {
    id: 'sirsirian_ocean_salt_evaporator',
    name: "Sirsirian Ocean Salt Evaporator",
    description: "Pan for evaporating seawater into biscuits' salt.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5500,
    icon: '🍪',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Evaporates quickly; +1 to cooking with salt (preservation)",
        "Portable for ships; yields pure salt",
        "Corrodes metal nearby",
        "Made by: Ocean Salters"
    ],
    vendor: 'sirsirian_ocean_port',
    shippedBy: 'Salty Sea Shipment',
    levelRequirement: 5
},

  'sirsirian_ocean_salt_grinder': {
    id: 'sirsirian_ocean_salt_grinder',
    name: "Sirsirian Ocean Salt Grinder",
    description: "Grinds salt from seawater.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 9500,
    icon: '🧂',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Creates unlimited salt from seawater (advantage on cooking checks)",
        "Grinder is waterproof: can be used underwater",
        "You become thirsty: disadvantage on checks in dry environments",
        "Made by: Sirsirian Ocean Salt Works"
    ],
    vendor: 'sirsirian_ocean',
    shippedBy: 'Tidal Wave',
    levelRequirement: 5
},

  'sirsirian_ocean_sea_biscuits_recipe': {
    id: 'sirsirian_ocean_sea_biscuits_recipe',
    name: "Recipe: Sirsirian Ocean Sea Biscuits",
    description: "Hardtack biscuits for long voyages at sea.",
    category: SHOP_CATEGORIES.services,
    price: 5500,
    icon: '🍪',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Bake dry dough (20 min); eat to ignore hunger for 24 hours and advantage on Constitution saves vs. seasickness",
        "Requires: Flour and salt; lasts weeks",
        "Weevils optional (extra protein?)",
        "Made by: Ocean Sailors"
    ],
    vendor: 'sirsirian_ocean_port',
    shippedBy: 'Salty Cracker Codex',
    levelRequirement: 5
},

  'sirsirian_ocean_seashell_bikini': {
    id: 'sirsirian_ocean_seashell_bikini',
    name: "Sirsirian Ocean Seashell Bikini ",
    description: "Swimwear armor with a tropical twist.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12000,
    icon: '👙',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Advantage on Swimming checks",
        "Seashells provide +1 AC underwater",
        "Shells clatter and attract fish",
        "Made by: Ocean Divers"
    ],
    vendor: 'sirsirian_ocean_beach',
    shippedBy: 'Wave-Washed Cloth',
    levelRequirement: 5
},

  'sirsirian_ocean_seashell_bra': {
    id: 'sirsirian_ocean_seashell_bra',
    name: "Sirsirian Ocean Seashell Bra",
    description: "Modesty provided by mollusks.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 13500,
    icon: '🐚',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Advantage on Charisma checks with sea creatures",
        "Disadvantage on Charisma checks with land-dwellers (they're confused)",
        "Seashells whisper ocean secrets (advantage on one check per day)",
        "Made by: Sirsirian Ocean Tailors"
    ],
    vendor: 'sirsirian_ocean',
    shippedBy: 'Tidal Wave',
    levelRequirement: 5
},

  'skaven_cheese_wheel_delivery': {
    id: 'skaven_cheese_wheel_delivery',
    name: "Skaven Cheese Wheel Delivery",
    description: "Cheese delivered by rats.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 6500,
    icon: '🧀',
    stock: 9,
    rarity: 'common',
    effects: [
        "Receive a wheel of cheese (feeds 10, advantage on Charisma with rats)",
        "Rats follow you expecting more cheese (disadvantage on Stealth)",
        "You might get the plague (CON save DC 10 or poisoned for 1 hour)",
        "Made by: Skaven Cheesemongers"
    ],
    vendor: 'skaven',
    shippedBy: 'Rat Swarm',
    levelRequirement: 5
},

  'skaven_rat_fur_hood': {
    id: 'skaven_rat_fur_hood',
    name: "Skaven Rat Fur Hood",
    description: "Hood from scurrying vermin for sneaky types.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 10500,
    icon: '🧢',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Advantage on Stealth in sewers",
        "Hood muffles squeaks (your own)",
        "Attracts real rats",
        "Made by: Skaven Scavengers"
    ],
    vendor: 'skaven_tunnels',
    shippedBy: 'Furry Fringe',
    levelRequirement: 5
},

  'skaven_rat_risotto_recipe': {
    id: 'skaven_rat_risotto_recipe',
    name: "Recipe: Skaven Rat Risotto",
    description: "Creamy rice with 'special' proteins for skulking.",
    category: SHOP_CATEGORIES.services,
    price: 5000,
    icon: '🍚',
    stock: 12,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Stir rice (30 min); eat to gain advantage on Stealth in tight spaces for 2 hours",
        "Requires: Rice and 'rats'; sneaky",
        "Skaven squeak delight",
        "Made by: Warren Chefs"
    ],
    vendor: 'skaven_warren',
    shippedBy: 'Squeaky Stir Scroll',
    levelRequirement: 5
},

  'skaven_rat_swarm_summon_service': {
    id: 'skaven_rat_swarm_summon_service',
    name: "Skaven Rat Swarm Summon Service",
    description: "Call vermin allies.",
    category: SHOP_CATEGORIES.services,
    price: 10500,
    icon: '🐀',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Summon 1d6 rats: Distraction or scouting",
        "Rats bite 1d4 total",
        "Rats might nibble your food",
        "Made by: Skaven Warlords"
    ],
    vendor: 'skaven_warren',
    shippedBy: 'Cheese Bait',
    levelRequirement: 5
},

  'skaven_warpstone_addiction_counseling': {
    id: 'skaven_warpstone_addiction_counseling',
    name: "Skaven Warpstone Addiction Counseling",
    description: "Help for your glowing green rock problem.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 14500,
    icon: '☢️',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Remove one level of exhaustion caused by warpstone",
        "Advantage on saves vs. poison for 7 days",
        "You still crave cheese and conspiracy theories",
        "Made by: Skaven Rehabilitation"
    ],
    vendor: 'skaven',
    shippedBy: 'Sewer Pipe',
    levelRequirement: 5
},

  'skaven_warren_rat_trap_strainer': {
    id: 'skaven_warren_rat_trap_strainer',
    name: "Skaven Warren Rat Trap Strainer",
    description: "Strainer that 'traps' bits for risotto.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5500,
    icon: '🍚',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Strains fine; +1 to sneaky cooking",
        "Traps extras (bonus ingredients)",
        "Squeaks when strained",
        "Made by: Warren Tinkers"
    ],
    vendor: 'skaven_warren',
    shippedBy: 'Squeak Sieve Sack',
    levelRequirement: 5
},

  'skycavern_anti_gravity_gel': {
        id: 'skycavern_anti_gravity_gel',
        name: "Skycavern Anti-Gravity Gel",
        description: "A sticky, shimmering gel that temporarily negates a small area's gravitational pull.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 14000,
        icon: '💧',
        stock: 7,
        rarity: 'rare',
        effects: [
            "Throw: creates a 10ft sphere where gravity is halved for 3 rounds",
        "Objects float upwards slowly",
            "Made by: Skycaverns"
        ],
        vendor: 'skycavern_trader',
        shippedBy: 'Suspended Vial',
        levelRequirement: 5
    },

  'skycavern_echo_stone': {
    id: 'skycavern_echo_stone',
    name: "Skycavern Echo Stone",
    description: "A small crystal that records and replays the last 10 seconds of sound it hears.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 7200,
    icon: '🔊',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Perfectly records and replays sounds (useful for mimicry or traps)",
        "Can be used to create simple audio illusions",
        "Made by: Skycaverns"
    ],
    vendor: 'skycavern_trader',
    shippedBy: 'Padded Pouch',
    levelRequirement: 4
},

  'skycaverns_aerial_harness': {
    id: 'skycaverns_aerial_harness',
    name: "Skycaverns Aerial Harness",
    description: "Straps and belts for safe cloud-walking.",
    category: SHOP_CATEGORIES.premium,
    price: 19000,
    icon: '🎽',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Advantage on checks to avoid falling from heights",
        "Once per day: Slow fall 20ft safely",
        "Harness creaks in wind (alerts birds)",
        "Made by: Cavern Riggers"
    ],
    vendor: 'skycaverns_aerie',
    shippedBy: 'Wind-Resistant Rope',
    levelRequirement: 6
},

  'skycaverns_cloud_berry_tarts_recipe': {
    id: 'skycaverns_cloud_berry_tarts_recipe',
    name: "Recipe: Skycaverns Cloud Berry Tarts",
    description: "Light tarts with sky-grown berries for aerial agility.",
    category: SHOP_CATEGORIES.services,
    price: 8500,
    icon: '🫐',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Bake berries in pastry (30 min); eat for advantage on Dexterity (Acrobatics) for 2 hours and feather fall (10ft safely)",
        "Requires: Cloud berries (forage DC 13); floats lightly",
        "Birds might steal bites",
        "Made by: Cavern Bakers"
    ],
    vendor: 'skycaverns_kitchen',
    shippedBy: 'Airy Pastry Pan',
    levelRequirement: 6
},

  'skycaverns_cloud_storage': {
    id: 'skycaverns_cloud_storage',
    name: "Skycaverns Cloud Storage",
    description: "Literally store items in a cloud.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 19500,
    icon: '☁️',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Store 100 lbs of items in a personal cloud (access as bonus action)",
        "5% chance per access that items get 'corrupted by wind' (slightly damp)",
        "Lightning storms may cause 'data loss' – items vanish for 1d4 hours",
        "Made by: Skycaverns Data Management"
    ],
    vendor: 'skycaverns',
    shippedBy: 'Cumulonimbus Courier',
    levelRequirement: 6
},

  'skycaverns_gryphon_egg': {
    id: 'skycaverns_gryphon_egg',
    name: "Skycaverns Gryphon Egg",
    description: "A large, mottled egg that will soon hatch into a loyal gryphon companion. Requires incubation.",
    category: SHOP_CATEGORIES.FACTION,
    price: 40000,
    icon: '🥚',
    stock: 3,
    rarity: 'epic',
    effects: [
        "After 1 month of incubation, hatches into a baby gryphon",
        "Gryphon grows into a loyal mount (DM's discretion for timeline)",
        "Requires a steady diet of meat and shiny objects",
    ],
    vendor: 'Skycaverns',
    shippedBy: 'Warm Nest Box',
    levelRequirement: 7
},

  'skycaverns_recipe_cloud_cream_puffs': {
    id: 'skycaverns_recipe_cloud_cream_puffs',
    name: "Recipe: Skycaverns Cloud Cream Puffs",
    description: "Puffs lighter than air.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 12500,
    icon: '📜',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Grants advantage on saves vs. falling damage for 4 hours",
        "You feel light: +5 speed, disadvantage on Strength checks",
        "Cream floats away if not eaten quickly (time limit 1 minute)",
        "Made by: Skycaverns Bakers"
    ],
    vendor: 'skycaverns',
    shippedBy: 'Cumulonimbus Courier',
    levelRequirement: 6
},

  'skycaverns_wind_chime': {
    id: 'skycaverns_wind_chime',
    name: "Skycaverns Wind Chime",
    description: "A chime that harnesses aerial winds for minor gusts.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18400,
    icon: '🔔',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Hang as action: Creates 10 ft gust (pushes Small creatures 5 ft, DEX save DC 12)",
        "Alerts to wind changes (+2 to weather-related Survival checks)",
        "Melodic tune – advantage on Performance with wind instruments",
        "Fragile: Breaks in strong gales"
    ],
    vendor: 'skycaverns',
    shippedBy: 'Aerial Drop (Parachute)',
    levelRequirement: 6
},

  'skycaverns_wind_chime_premium': {
    id: 'skycaverns_wind_chime_premium',
    name: "Skycaverns Wind Chime (Premium)",
    description: "Harmonizes winds for better flight or gliding.",
    category: SHOP_CATEGORIES.premium,
    price: 19000,
    icon: '🔔',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Once per day: Add 10ft to jump distance or glide 20ft safely",
        "Detects air currents: Advantage on Acrobatics in wind",
        "Chimes play elevator music during storms",
        "Made by: Skycavern Artisans"
    ],
    vendor: 'skycaverns_loft',
    shippedBy: 'Aerial Drop',
    levelRequirement: 6
},

  'skycaverns_wind_whisk': {
    id: 'skycaverns_wind_whisk',
    name: "Skycaverns Wind Whisk",
    description: "Whisk powered by captured winds for aerated tarts.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 9000,
    icon: '🫐',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Whisks air into batter quickly; advantage on baking for light pastries",
        "Wind element adds minor lift (extra jump 5ft after eating)",
        "Whisk spins wildly in storms",
        "Made by: Cavern Windwrights"
    ],
    vendor: 'skycaverns_kitchen',
    shippedBy: 'Breezy Batter Box',
    levelRequirement: 6
},

  'slaad_tadpole_vaccine': {
    id: 'slaad_tadpole_vaccine',
    name: "Slaad Tadpole Vaccine (Broad Spectrum)",
    description: "A vial of chaos-resistant mutagens.",
    category: SHOP_CATEGORIES.premium,
    price: 235000,
    icon: '💉',
    stock: 12,
    rarity: 'epic',
    effects: [
        "Immunity to Slaad egg implantation and chaotic diseases",
        "Can neutralize Slaad tadpoles in others (touch)",
        "Made by: Order of the Stick"
    ],
    vendor: 'chaos_clinic',
    shippedBy: 'Quarantine Protocol',
    levelRequirement: 12
},

  'sledge_bro_hammer': {
    id: 'sledge_bro_hammer',
    name: "Sledge Bro's Mallet",
    description: "An enormous hammer that creates shockwaves. Requires two hands and a strong back.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 25000,
    icon: '🔨',
    stock: 1,
    rarity: 'rare',
    effects: [
        "2d10 Bludgeoning damage",
        "On hit: Creatures within 10ft make DEX save or fall prone",
        "Requires 17 STR to wield",
        "You stomp when you walk"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Stone Sled',
    levelRequirement: 7
},

  'sleepy_sheep': {
        id: 'sleepy_sheep',
        name: "Sleepy Sheep",
        description: "A fluffy sheep doll. Causes uncontrollable yawning.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12000,
        icon: '🐑',
        stock: 8,
        rarity: 'uncommon',
        effects: ["Action: 20ft Radius. Creatures sleep for 1 min or until damaged (5d8 HP threshold)", "Single use"],
        vendor: 'toad_town_market',
        shippedBy: 'Soft Package',
        levelRequirement: 1
    },

  'slow_fall_pants': {
        id: 'slow_fall_pants',
        name: "Slow Fall Pants",
        description: "Very baggy trousers. They catch the wind like a parachute.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 25000,
        icon: '👖',
        stock: 5,
        rarity: 'common',
        effects: ["Immune to fall damage", "Disadvantage on Stealth (they flap loudly)"],
        vendor: 'toad_town_market',
        shippedBy: 'Large Envelope',
        levelRequirement: 2
    },

  'smithy_hammer_god': {
        id: 'smithy_hammer_god',
        name: "Smithy's True Hammer",
        description: "The hammer that forged the Star Road. Can create or destroy artifacts.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1300000,
        icon: '⚒️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Craft Legendary items instantly",
            "Destroy any object (even magical ones) with a single hit",
            "Transform living beings into weapons",
            "User's head may transform into a tank"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'Machine Dimension',
        levelRequirement: 18
    },

  'smokestack_prefab': {
    id: 'smokestack_prefab',
    name: "Smokestack Prefab",
    description: "A portable factory smokestack that belches engineered fog and obscures the battlefield.",
    category: SHOP_CATEGORIES.FACTION,
    price: 150000,
    icon: '🏭',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Deployable: creates dense smoke in a 100ft radius obscuring vision & sensors for 24 hours",
        "Configurable with scent, gas, or holographic decoys",
        "Public use risks sanctions & bounties"
    ],
    vendor: 'steel_syndicate',
    shippedBy: 'Freight Pallet',
    levelRequirement: 12,
    factionBonus: { stealth: 40, denial: 50 }
},

  'snowman_doll': {
        id: 'snowman_doll',
        name: "Snowman Doll",
        description: "A cute doll that radiates intense cold. Shatters on impact.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 22000,
        icon: '⛄',
        stock: 6,
        rarity: 'uncommon',
        effects: ["Thrown (30ft)", "15ft radius: 3d6 Cold damage", "CON save DC 13 for half"],
        vendor: 'shamans_hut',
        shippedBy: 'Freezer Bag',
        levelRequirement: 3
    },

  'solar_angels_blessing': {
    id: 'solar_angels_blessing',
    name: "Solar Angel's Blessing (Limited)",
    description: "A kiss of divine fire that sears away impurities.",
    category: SHOP_CATEGORIES.faction,
    price: 645000,
    icon: '👼',
    stock: 2,
    rarity: 'legendary',
    effects: [
        "Gain permanent resistance to necrotic and radiant damage",
        "Angels instinctively recognize you as an ally",
        "Made by: Solar Choir"
    ],
    vendor: 'celestial_temple',
    shippedBy: 'Angels Trumpet',
    levelRequirement: 17,
    factionBonus: { celestial: 150 }
},

  'sonic_rings': {
    id: 'sonic_rings',
    name: "Sonic Rings (Pack of 50)",
    description: "Rings that absorb damage and scatter on hit.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 10000,
    icon: '💍',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Absorb 50 damage before scattering",
        "Collect to regain (1d4 per minute)",
        "Speed +5ft while holding"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Ring Pouch',
    levelRequirement: 3
},

  'soul_binding_ceremony': {
    id: 'soul_binding_ceremony',
    name: "Soul Binding Ceremony",
    description: "Permanently bind two souls together: marriage, contract, blood oath, or curse.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 12000,
    icon: '💕',
    stock: 5,
    rarity: 'epic',
    effects: [
        "Create binding magical contract (breach causes 2d10 psychic damage)",
        "Souls remain linked for 99 years",
        "Ceremony involves exotic components and 3-hour ritual",
        "Can bind willing or coerced parties (DM judgment)"
    ],
    vendor: 'temple_eternal',
    shippedBy: 'Ritual Appointment',
    levelRequirement: 7
},

  'soul_forge_hammer': {
    id: 'soul_forge_hammer',
    name: "Soul Forge Hammer (Crafting)",
    description: "A hammer that imbues items with captured souls for sentience.",
    category: SHOP_CATEGORIES.forbidden,
    price: 750000,
    icon: '🔨',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Awakens items as intelligent artifacts",
        "Requires 1 soul per use",
        "Made by: Soul Smiths"
    ],
    vendor: 'ectoplasmic_forge',
    shippedBy: 'Ghostly Forge',
    levelRequirement: 18
},

  'soul_lantern': {
    id: 'soul_lantern',
    name: "Soul Lantern",
    description: "A black lantern that traps stray spirits. Its light tastes like memories.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 100000,
    icon: '🔮',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Capture: once per day trap a medium or smaller spirit (contested check)",
        "Trapped spirits can be queried for knowledge (ethically dubious)",
        "Attracts vengeful entities if left lit"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Ironbound Cage',
    levelRequirement: 12
},

  'soul_of_the_multiverse': {
    id: 'soul_of_the_multiverse',
    name: "Soul of the Multiverse",
    description: "The combined soul of every being in every universe.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 200000000,
    icon: '💀',
    stock: 1,
    rarity: 'cosmic',
    effects: [
        "Consume: gain 1 billion HP, all abilities of every creature, and infinite spell slots",
        "Your soul becomes the multiverse (you're everyone and everything)",
        "You disapear into the multiverse and can only regain your soul after giving your skills back",
        "Made by: Everyone"
    ],
    vendor: 'cosmic_souls',
    shippedBy: 'Collective Consciousness',
    levelRequirement: 500
},

  'spark_rebellion_EMP_grenade': {
        id: 'spark_rebellion_EMP_grenade',
        name: "Spark Rebellion EMP Grenade",
        description: "Disrupts all electronic and magically-powered items in a radius.",
        category: SHOP_CATEGORIES.consumables,
        price: 22000,
        icon: '⚡',
        stock: 7,
        rarity: 'epic',
        effects: [
            "15ft blast: disables all technological/magical items for 1d4 rounds",
        "Requires DEX save DC 15 to avoid self-disabling",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'Insulated Bomb',
        levelRequirement: 6
    },

  'spark_rebellion_anarchist_bomb': {
        id: 'spark_rebellion_anarchist_bomb',
        name: "Spark Rebellion Anarchist Bomb",
        description: "A device that doesn't destroy structures, but rather scrambles all hierarchical command structures within a fortress.",
        category: SHOP_CATEGORIES.consumables,
        price: 250000,
        icon: '🤯',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Target enemy HQ/Fortress: all command units (officers, generals) are confused and fight each other for 1d6 hours",
        "No physical damage; pure chaos",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Logic Bomb',
        levelRequirement: 16
    },

  'spark_rebellion_anarchy_bomb': {
        id: 'spark_rebellion_anarchy_bomb',
        name: "Spark Rebellion Anarchy Bomb (Social)",
        description: "A powerful code injection that forces widespread civil unrest and corruption in a targeted governance structure.",
        category: SHOP_CATEGORIES.forbidden,
        price: 500000,
        icon: '🔥',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Instigates massive, prolonged civil unrest/revolt in a major city or kingdom",
        "Causes leadership collapse and system failure for 1 year",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Digital Detonation',
        levelRequirement: 17
    },

  'spark_rebellion_data_clone': {
        id: 'spark_rebellion_data_clone',
        name: "Spark Rebellion Data Clone (Identity Backup)",
        description: "A complete, encrypted backup of your current identity and core memory structure.",
        category: SHOP_CATEGORIES.premium,
        price: 300000,
        icon: '👤',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "If killed, consciousness transfers back to a generic body (takes 1 week)",
        "Clone is slightly corrupted (-1 to a random score)",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'Digital Vault',
        levelRequirement: 14
    },

  'spark_rebellion_data_spike': {
    id: 'spark_rebellion_data_spike',
    name: "Spark Rebellion Data Spike",
    description: "A device that injects a burst of chaotic data into a machine, causing it to malfunction spectacularly.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 8000,
    icon: '📈',
    stock: 8,
    rarity: 'rare',
    effects: [
        "Single Use: Target a mechanical or robotic creature. It must make a DC 14 INT save or be Stunned for 1 round as its systems reboot",
        "On a success, it is merely Confused for 1 round"
    ],
    vendor: 'spark_rebellion',
    shippedBy: 'Encrypted Drive',
    levelRequirement: 4
},

  'spark_rebellion_data_theft': {
        id: 'spark_rebellion_data_theft',
        name: "Spark Rebellion Data Theft (Rival Archive)",
        description: "A targeted hack to steal the most recent 1 year of sensitive archived data from a rival faction.",
        category: SHOP_CATEGORIES.services,
        price: 200000,
        icon: '💿',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Steal 1 year of sensitive data from target faction's main servers",
        "Data delivered securely, but success is 80% guaranteed",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Encrypted Transfer',
        levelRequirement: 14
    },

  'spark_rebellion_disinformation_campaign': {
        id: 'spark_rebellion_disinformation_campaign',
        name: "Spark Rebellion Disinformation Campaign",
        description: "Launch a massive social/digital media campaign to destroy a rival faction's reputation.",
        category: SHOP_CATEGORIES.faction,
        price: 90000,
        icon: '📣',
        stock: 4,
        rarity: 'epic',
        effects: [
            "Target faction suffers -10 to all public-facing reputation checks for 6 months",
        "Reduces their ability to recruit or gain legitimacy",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'Viral Media Packet',
        levelRequirement: 9,
        factionBonus: { reputation: -20 }
    },

  'spark_rebellion_hack_tool_premium': {
    id: 'spark_rebellion_hack_tool_premium',
    name: "Spark Rebellion Hack Tool (Premium)",
    description: "Bypass simple locks or tech.",
    category: SHOP_CATEGORIES.premium,
    price: 20500,
    icon: '🔓',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Unlock DC 15 locks/tech once per day",
        "Advantage on Thieves' Tools",
        "Sparks fly: 5% shock risk",
        "Made by: Rebel Techs"
    ],
    vendor: 'spark_rebellion_base',
    shippedBy: 'Encrypted Drive',
    levelRequirement: 7
},

  'spark_rebellion_identity_swap': {
        id: 'spark_rebellion_identity_swap',
        name: "Spark Rebellion Identity Swap (Digital/Physical)",
        description: "Simultaneously swap your digital profile and physical appearance with a low-level agent.",
        category: SHOP_CATEGORIES.premium,
        price: 300000,
        icon: '🎭',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Instantaneous escape from digital/physical surveillance systems",
        "Agent is now 'compromised' and may be hunted by the target faction",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Data Stream',
        levelRequirement: 15
    },

  'spark_rebellion_information_broker': {
        id: 'spark_rebellion_information_broker',
        name: "Spark Rebellion Information Broker (Deep Dive)",
        description: "Access to the Rebellion’s deepest network for information on any single target or conspiracy.",
        category: SHOP_CATEGORIES.services,
        price: 150000,
        icon: '🕵️',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Obtain total dossier on any rival (weaknesses, finances, secrets)",
        "Information is 100% accurate but sourcing is dangerous",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Physical Drive',
        levelRequirement: 12
    },

  'spark_rebellion_network_encryption': {
        id: 'spark_rebellion_network_encryption',
        name: "Spark Rebellion Network Encryption (Absolute)",
        description: "The ultimate encryption key, making data stored by the Rebellion completely unreadable by any other faction.",
        category: SHOP_CATEGORIES.equipment,
        price: 220000,
        icon: '🔒',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "All data stored on Rebellion servers becomes uncrackable by external methods (DC 30)",
        "Requires proprietary hardware to access",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Key Generator',
        levelRequirement: 15
    },

  'spark_rebellion_network_infiltration': {
        id: 'spark_rebellion_network_infiltration',
        name: "Spark Rebellion Network Infiltration (Rival AI)",
        description: "Insert a sentient virus into a rival AI, forcing it to slowly turn against its creators.",
        category: SHOP_CATEGORIES.services,
        price: 300000,
        icon: '🦠',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Infect target AI/system (DC 25 hack)",
        "AI becomes subtly hostile, causing 1 major setback per week for 6 months",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Viral Drone',
        levelRequirement: 16
    },

  'spark_rebellion_network_invisibility': {
        id: 'spark_rebellion_network_invisibility',
        name: "Spark Rebellion Network Invisibility",
        description: "A program that makes your digital signature entirely untraceable across all known networks for a year.",
        category: SHOP_CATEGORIES.equipment,
        price: 250000,
        icon: '👻',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Immune to all digital tracking, monitoring, and hacking attempts for 1 year",
        "Requires monthly maintenance ping to the Rebellion",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Encrypted Chip',
        levelRequirement: 15
    },

  'spark_rebellion_network_override': {
        id: 'spark_rebellion_network_override',
        name: "Spark Rebellion Network Override Code",
        description: "A code capable of taking remote control of any network node controlled by the Internet faction.",
        category: SHOP_CATEGORIES.premium,
        price: 320000,
        icon: '🔑',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Seize control of 1 major Internet asset (e.g., satellite, data bank)",
        "Can redirect surveillance or communications for 24 hours",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'High-Security Drive',
        levelRequirement: 14
    },

  'spark_rebellion_network_shutdown': {
        id: 'spark_rebellion_network_shutdown',
        name: "Spark Rebellion Network Shutdown (Major City)",
        description: "A massive virus payload designed to crash an entire regional data/communication grid.",
        category: SHOP_CATEGORIES.forbidden,
        price: 400000,
        icon: '💥',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Shuts down all non-magical communication/tracking systems in a major city for 7 days",
        "Can be traced back to the user if physical hardware is left behind",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'Black Ice Drive',
        levelRequirement: 15
    },

  'spark_rebellion_portable_stove': {
    id: 'spark_rebellion_portable_stove',
    name: "Spark Rebellion Portable Stove",
    description: "Compact stove for rebel rations on the run.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7000,
    icon: '🔥',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Heats fast with fuel pellets; reduces cooking time by 20%",
        "Stealthy flame (low light)",
        "Fuel limited (10 uses)",
        "Made by: Rebel Techs"
    ],
    vendor: 'spark_rebellion_base',
    shippedBy: 'Rebel Flame Freight',
    levelRequirement: 5
},

  'spark_rebellion_rebel_jacket': {
    id: 'spark_rebellion_rebel_jacket',
    name: "Spark Rebellion Rebel Jacket",
    description: "Leather jacket with hidden tech compartments.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15500,
    icon: '🧥',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Hides small electronics or tools",
        "+1 to Dexterity (Stealth) in urban areas",
        "Jacket sparks during storms",
        "Made by: Rebel Crafters"
    ],
    vendor: 'spark_rebellion_hideout',
    shippedBy: 'Circuit Stitch',
    levelRequirement: 5
},

  'spark_rebellion_rebel_rations_recipe': {
    id: 'spark_rebellion_rebel_rations_recipe',
    name: "Recipe: Spark Rebellion Rebel Rations",
    description: "Compact rations for on-the-run fighters.",
    category: SHOP_CATEGORIES.services,
    price: 5500,
    icon: '🥪',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Pack trail mix (10 min); eat to ignore exhaustion from travel for 8 hours",
        "Requires: Nuts and dried fruit; sustaining",
        "Boosts rebellion spirit (+1 morale)",
        "Made by: Rebel Foragers"
    ],
    vendor: 'spark_rebellion_base',
    shippedBy: 'Ration Recipe Roll',
    levelRequirement: 5
},

  'spark_rebellion_sabotage_charges': {
        id: 'spark_rebellion_sabotage_charges',
        name: "Spark Rebellion Sabotage Charges",
        description: "High-yield explosives designed to shut down automated systems.",
        category: SHOP_CATEGORIES.consumables,
        price: 9500,
        icon: '⚡',
        stock: 12,
        rarity: 'rare',
        effects: [
            "Attach to machine/construct: forces DC 15 CON save or disabled for 1d4 rounds",
        "Deals 3d6 lightning damage to targets immune to stun",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'Insulated Bag',
        levelRequirement: 3
    },

  'spark_rebellion_self_destruct_charge': {
        id: 'spark_rebellion_self_destruct_charge',
        name: "Spark Rebellion Self-Destruct Charge",
        description: "A charge that bypasses all conventional safeties on enemy technology, forcing immediate meltdown.",
        category: SHOP_CATEGORIES.consumables,
        price: 55000,
        icon: '🔥',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Attaches to any mechanical/electronic object; forces immediate, catastrophic overload (10d10 Force Damage)",
        "Guaranteed destruction of target item",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'Primed Bomb',
        levelRequirement: 8
    },

  'spark_rebellion_virus_code': {
        id: 'spark_rebellion_virus_code',
        name: "Spark Rebellion AI Virus Code",
        description: "A virus payload capable of disabling complex artificial sentience.",
        category: SHOP_CATEGORIES.forbidden,
        price: 110000,
        icon: '🦠',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Upload to target AI/Construct: forces total system shutdown for 24 hours",
        "Can bypass high-level encryption (DC 20 hack check)",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'Encrypted Data Drive',
        levelRequirement: 12
    },

  'sparkling_bento': {
    id: 'sparkling_bento',
    name: "Sparkling Bento",
    description: "An effervescent meal in a lacquered box. Tastes like home, and a tiny fireworks show.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 300,
    icon: '🍱',
    stock: 20,
    rarity: 'common',
    effects: [
        "Heals 1d2 HP instantly",
        "If eaten during a performance, +1 to Performance for 10 minutes"
    ],
    vendor: 'mushroom_mart',
    shippedBy: 'Insulated Crate',
    levelRequirement: 1
},

  'spicy_soup': {
        id: 'spicy_soup',
        name: "Spicy Soup",
        description: "So hot it restores your fighting spirit.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8000,
        icon: '🍲',
        stock: 100,
        rarity: 'common',
        effects: ["Restores 4 HP and 4 MP (or one 1st level slot)"],
        vendor: 'shamans_hut',
        shippedBy: 'Thermos',
        levelRequirement: 2
    },

  'spike_helmet': {
        id: 'spike_helmet',
        name: "Spike Helmet",
        description: "A mining helmet with a spike on top. Don't headbutt your friends.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 35000,
        icon: '⛑️',
        stock: 5,
        rarity: 'uncommon',
        effects: ["+1 AC", "Enemies that stomp or drop on you take 1d6 piercing"],
        vendor: 'gilded_gryphon',
        shippedBy: 'Hard Hat Case',
        levelRequirement: 2
    },

  'spin_jump_boots': {
        id: 'spin_jump_boots',
        name: "Spin Jump Boots",
        description: "Boots with ball bearings in the soles. Drill through weak floors.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 70000,
        icon: '🌪️',
        stock: 3,
        rarity: 'uncommon',
        effects: ["Advantage to break wooden floors", "Deal piercing damage on jump attacks"],
        vendor: 'toad_town_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 4
    },

  'spiny_egg': {
    id: 'spiny_egg',
    name: "Spiny Egg",
    description: "An egg that hatches into a spiky projectile.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 3000,
    icon: '🥚',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Throw: Hatches mid-air, 1d6 piercing + spikes (ongoing 1d4)",
        "Single Use",
        "May hatch friendly Spiny (1% chance)"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Egg Carton',
    levelRequirement: 1
},

  'spiny_egg_timer': {
    id: 'spiny_egg_timer',
    name: "Spiny Egg Timer",
    description: "Crack it open to start a countdown. What hatches? Depends on your luck.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 11000,
    icon: '🥚',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Single Use: Set timer for 1–6 rounds (roll d6)",
        "When timer ends, egg hatches: 50% Spiny (hostile), 30% Mini-Spiny (pet), 20% Golden Spiny (drops 50gp)",
        "Can be used as improvised weapon (1d4 piercing, spikes fall off after use)"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Nest Delivery',
    levelRequirement: 2
},

  'spiny_shell_helmet': {
    id: 'spiny_shell_helmet',
    name: "Spiny Shell Spiked Helm",
    description: "A red shell with spikes that retracts into your skull. Headbutts become lethal.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16000,
    icon: '🐚',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Headbutt attacks deal 2d6 Piercing",
        "Enemies who grapple you take 1d6 Piercing",
        "Spikes retract when you bow (polite)",
        "Birds avoid your head"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Spiked Crate',
    levelRequirement: 4
},

  'sprint_spurs': {
    id: 'sprint_spurs',
    name: "Sprint Spurs",
    description: "Metal spurs that make you feel the open road under your feet.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 9000,
    icon: '🏇',
    stock: 8,
    rarity: 'rare',
    effects: [
        "Wearer gains +10ft speed",
        "Once per short rest: Dash becomes a bonus action",
        "Rattles when idle"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Tin Case',
    levelRequirement: 2
},

  'sprixie_alliance': {
        id: 'sprixie_alliance',
        name: "Sprixie Kingdom Alliance",
        description: "Full military and magical support of the Sprixie Princesses.",
        category: SHOP_CATEGORIES.FACTION,
        price: 750000,
        icon: '🧚',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Access to Clear Pipes (Instant travel network)",
            "Fairy Magic buffs for all faction members",
            "Construction of magical infrastructure"
        ],
        vendor: 'toad_town_market',
        factionBonus: { mobility: 40, economy: 30, magic: 50 }
    },

  'sprocket_belt': {
    id: 'sprocket_belt',
    name: "Sprocket Belt",
    description: "A leather belt studded with ticking gears. Powers small mechanical augmentations.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 22000,
    icon: '⚙️',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Gain +2 to Strength checks for tool/construct use",
        "3 charges: spend 1 for +10 on a single craft or attack; 1 charge/short rest",
        "Belt emits faint ticking"
    ],
    vendor: 'gearworks',
    shippedBy: 'Metal Trunk',
    levelRequirement: 4
},

  'spurs_that_jingle_with_greed': {
    id: 'spurs_that_jingle_with_greed',
    name: "Wario's Wild West Spurs",
    description: "Spurs that jingle with greed.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4900,
    icon: '🤠',
    stock: 10,
    rarity: 'common',
    effects: [
        "+1 speed on horse",
        "Jingle: disadvantage on Stealth",
        "Western: +1 Intimidation",
        "Made by: Wario West"
    ],
    vendor: 'wario_land',
    shippedBy: 'Spur Sprint',
    levelRequirement: 4
},

  'spyro_dragonfire': {
    id: 'spyro_dragonfire',
    name: "Dragonfire Breath Potion",
    description: "A potion granting dragon breath.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 12000,
    icon: '🐉',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Single Use: Breathe fire (3d6 in 15ft cone)",
        "DEX save half",
        "User resistant to fire for 1 hour"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Flame Vial',
    levelRequirement: 4
},

  'squad_glow_beacon': {
    id: 'squad_glow_beacon',
    name: "Squad Glow Beacon",
    description: "A compact flare that calls nearby friendly troops and marks your position.",
    category: SHOP_CATEGORIES.FACTION,
    price: 9000,
    icon: '📡',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Deploy: call 1d6 allied militia (CR 1/2) to your location; they follow simple orders",
        "Each use increases faction attention (+2)",
        "Beacons burn for 10 minutes"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Crate of Flares',
    levelRequirement: 4,
    factionBonus: { morale: 10 }
},

  'squeaky_boots_of_stealth': {
    id: 'squeaky_boots_of_stealth',
    name: "Squeaky Boots of Stealth",
    description: "Boots that are supposed to be silent, but occasionally squeak for comic relief.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 11000,
    icon: '👢',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Advantage on Stealth checks in urban areas",
        "On a natural 1 Stealth roll: Squeak loudly, alerting nearby guards (DC 10 Perception)",
        "Comfortable for long walks (+1 to Constitution saves vs. exhaustion from travel)",
        "Washable – squeaks less after a good cleaning"
    ],
    vendor: 'thieves_guild_outlet',
    shippedBy: 'Silent Package (Mostly)',
    levelRequirement: 5
},

  'star_beam_replica': {
        id: 'star_beam_replica',
        name: "Star Beam (Replica)",
        description: "A plastic toy that lights up. Does not dispel invincibility.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '✨',
        stock: 100,
        rarity: 'junk',
        effects: ["Creates a 10ft light", "Looks cool"],
        vendor: 'comet_observatory',
        shippedBy: 'Toy Box',
        levelRequirement: 1
    },

  'star_rod': {
        id: 'star_rod',
        name: "The Star Rod",
        description: "The legendary rod stolen by Bowser. Grants any wish.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 2000000,
        icon: '🌟',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Cast 'Wish' at will (1/day)",
            "Alter reality within a 1-mile radius",
            "Grant invincibility to self or others",
            "The 7 Star Spirits will hunt you down"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Star Haven',
        levelRequirement: 20
    },

  'star_rod_fragment': {
        id: 'star_rod_fragment',
        name: "Fragment of the Star Rod",
        description: "A piece of the legendary rod that grants wishes. It glows with infinite potential.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 850000,
        icon: '🌟',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Buy 20 of these to repair the full star rod",
            "Can alter the plot significantly",
            "The Seven Star Spirits are watching you",
            "Bowser senses its location"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Cosmic Event',
        levelRequirement: 15
    },

  'starlight_festival_glitter_gown': {
    id: 'starlight_festival_glitter_gown',
    name: "Starlight Festival Glitter Gown",
    description: "Sparkling gown for night celebrations.",
    category: SHOP_CATEGORIES.premium,
    price: 16500,
    icon: '👗',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Advantage on Performance under stars",
        "Gown glows faintly (5ft light)",
        "Glitter sticks to everything",
        "Made by: Festival Designers"
    ],
    vendor: 'starlight_festival',
    shippedBy: 'Sparkle Skirt',
    levelRequirement: 5
},

  'starlight_festival_star_cutter': {
    id: 'starlight_festival_star_cutter',
    name: "Starlight Festival Star Cutter",
    description: "Cutter for star-shaped salad fruits.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6500,
    icon: '🥗',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Cuts stars perfectly; +1 to Charisma for festival foods",
        "Shines under stars",
        "Dull in day",
        "Made by: Festival Toolers"
    ],
    vendor: 'starlight_festival',
    shippedBy: 'Starry Slice Set',
    levelRequirement: 5
},

  'starlight_festival_star_fruit_salad_recipe': {
    id: 'starlight_festival_star_fruit_salad_recipe',
    name: "Recipe: Starlight Festival Star Fruit Salad",
    description: "Salad of star-shaped fruits for festival wishes.",
    category: SHOP_CATEGORIES.services,
    price: 7000,
    icon: '🥗',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Slice stars (15 min); eat to gain inspiration for one wish-related roll and +1 Charisma",
        "Requires: Star fruits; twinkly",
        "Stars align",
        "Made by: Festival Chefs"
    ],
    vendor: 'starlight_festival',
    shippedBy: 'Starry Salad Sheet',
    levelRequirement: 5
},

  'starlight_fey_lantern': {
    id: 'starlight_fey_lantern',
    name: "Starlight Fey Lantern",
    description: "Reveals invisible fey and their pranks.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 17500,
    icon: '🏮',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Reveals invisible fey creatures within 30ft (dim light)",
        "Fey must succeed DC 13 Wisdom save or be frightened for 1 round",
        "Attracts mischievous pixies who may steal the lantern",
        "Made by: Starlight Garrison"
    ],
    vendor: 'starlight_outpost',
    shippedBy: 'Feywing Delivery',
    levelRequirement: 5
},

  'starlight_glitter_bomb_service': {
    id: 'starlight_glitter_bomb_service',
    name: "Starlight Glitter Bomb Service",
    description: "Distract with sparkles.",
    category: SHOP_CATEGORIES.services,
    price: 8500,
    icon: '✨',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Throw: 10ft blind (DC 10 CON) for 1 round",
        "Cleanup nightmare",
        "Glitter sticks forever",
        "Made by: Starlight Party Planners"
    ],
    vendor: 'starlight_festival',
    shippedBy: 'Sparkly Bag',
    levelRequirement: 5
},

  'starlight_observatory_chart': {
    id: 'starlight_observatory_chart',
    name: "Starlight Observatory Chart",
    description: "A celestial map that shows the location of a specific, temporary cosmic event.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 40000,
    icon: '⭐',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Reveals the location of a 'Starfall' (a meteor rich in rare metals) or a 'Whispering Nebula' (grants a vision)",
        "The event only lasts for 24 hours after the chart is consulted",
        "Using the chart consumes it"
    ],
    vendor: 'starlight',
    shippedBy: 'Astronomer',
    levelRequirement: 5
},

  'starlight_sparkle_enhancement': {
    id: 'starlight_sparkle_enhancement',
    name: "Starlight Sparkle Enhancement",
    description: "You sparkle. A lot.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 11500,
    icon: '✨',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "You sparkle in dim light: +1 Charisma, disadvantage on Stealth",
        "Vampires and edgelords are automatically hostile (they hate sparkles)",
        "You leave a glitter trail that lasts 1 hour",
        "Made by: Starlight Sparkle Techs"
    ],
    vendor: 'starlight',
    shippedBy: 'Glitter Bomb',
    levelRequirement: 5
},

  'starman_shard': {
    id: 'starman_shard',
    name: "Starman Shard",
    description: "A glowing fragment of a Super Star. Grants bursts of invincibility, but it's addictive.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 10000,
    icon: '⭐',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Single Use: Invulnerable for 10 seconds",
        "Double speed and damage during effect",
        "After use, -1 to all rolls for 1 hour (withdrawal)",
        "Collect 5 shards for a full Starman?"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Padded Box',
    levelRequirement: 1
},

  'statue_of_infinite_wishes': {
    id: 'statue_of_infinite_wishes',
    name: "Statue of Infinite Wishes",
    description: "A statue that grants infinite wishes with no drawbacks.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 150000000,
    icon: '🗿',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Touch statue: make any number of wishes with no limits or consequences",
        "Wishes happen instantly and cannot be undone",
        "Made by: The Genie Union"
    ],
    vendor: 'wish_granting',
    shippedBy: 'Instant Wish',
    levelRequirement: 75
},

  'stellar_explosion_bomb': {
    id: 'stellar_explosion_bomb',
    name: "Stellar Explosion Bomb",
    description: "A weaponized star fragment. Detonates with catastrophic force.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 550000,
    icon: '💥',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Single Use: 40d6 Fire damage in 300ft radius",
        "Decimates entire city blocks; leaves crater",
        "Using this makes you a wanted criminal globally",
        "Detonation requires 1 minute setup"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Shielded Container',
    levelRequirement: 14
},

  'stellar_map_of_forgotten_worlds': {
    id: 'stellar_map_of_forgotten_worlds',
    name: "Stellar Map of Forgotten Worlds (Navigation)",
    description: "A holographic map revealing lost planets and ancient ruins.",
    category: SHOP_CATEGORIES.premium,
    price: 460000,
    icon: '🗺️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Locates 10 hidden worlds",
        "Updates with new discoveries",
        "Made by: Star Cartographers"
    ],
    vendor: 'cosmic_archive',
    shippedBy: 'Holo-Projector',
    levelRequirement: 16
},

  'stellar_navigator_ai': {
    id: 'stellar_navigator_ai',
    name: "Stellar Navigator AI (Ship Module)",
    description: "An advanced AI that plots optimal hyperspace routes across galaxies.",
    category: SHOP_CATEGORIES.premium,
    price: 520000,
    icon: '🧠',
    stock: 2,
    rarity: 'godly',
    effects: [
        "Reduces travel time by 40%",
        "Predicts stellar hazards",
        "Made by: AstroTech"
    ],
    vendor: 'space_dock',
    shippedBy: 'Orbital Shuttle',
    levelRequirement: 16
},

  'stellar_nova_bomb': {
    id: 'stellar_nova_bomb',
    name: "Stellar Nova Bomb (Explosive)",
    description: "A bomb that mimics a star's nova for massive destruction.",
    category: SHOP_CATEGORIES.forbidden,
    price: 960000,
    icon: '💥',
    stock: 1,
    rarity: 'godly',
    effects: [
        "20d10 radiant in 100 ft radius",
        "One-time use",
        "Made by: Star Destroyers"
    ],
    vendor: 'nova_lab',
    shippedBy: 'Containment Field',
    levelRequirement: 19
},

  'stellar_shield_generator': {
    id: 'stellar_shield_generator',
    name: "Stellar Shield Generator (Defense)",
    description: "Projects a force field powered by starlight.",
    category: SHOP_CATEGORIES.premium,
    price: 600000,
    icon: '🛡️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Absorbs 200 damage before recharge",
        "Recharges in sunlight",
        "Made by: Solar Defenders"
    ],
    vendor: 'star_base',
    shippedBy: 'Photon Beam',
    levelRequirement: 16
},

  'stickers_star': {
        id: 'stickers_star',
        name: "Book of Stickers",
        description: "A collection of shiny stickers. They don't do anything magical, they just look nice.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2000,
        icon: '⭐',
        stock: 200,
        rarity: 'common',
        effects: ["Stick them on things", "Feel a sense of childlike wonder"],
        vendor: 'toad_town_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },

  'sticky_oil': {
        id: 'sticky_oil',
        name: "Flask of Sticky Oil",
        description: "Goes on the floor. Very annoying to clean up.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 4000,
        icon: '🍯',
        stock: 15,
        rarity: 'common',
        effects: ["Creates difficult terrain (10ft square)", "Creatures entering must save DEX DC 12 or be Restrained"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Jar',
        levelRequirement: 1
    },

  'stop_watch': {
        id: 'stop_watch',
        name: "Stop Watch",
        description: "A magical watch that freezes time briefly.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 35000,
        icon: '⏱️',
        stock: 3,
        rarity: 'rare',
        effects: ["Enemies in 30ft radius must succeed WIS save 13 or be Paralyzed for 1 round"],
        vendor: 'toad_town_market',
        shippedBy: 'Secure Box',
        levelRequirement: 3
    },

  'storm_giants_thunderdrum': {
    id: 'storm_giants_thunderdrum',
    name: "Storm Giant's Thunderdrum",
    description: "A massive war drum made from a cloud giant's skull.",
    category: SHOP_CATEGORIES.premium,
    price: 575000,
    icon: '🥁',
    stock: 3,
    rarity: 'legendary',
    effects: [
        "Once per day, cast Earthquake as an action",
        "Allies within 100ft gain immunity to thunder damage for 1 hour",
        "Made by: Storm Giant Tempest-Caller"
    ],
    vendor: 'giant_emporium',
    shippedBy: 'Giant Eagle',
    levelRequirement: 16
},

  'storm_in_a_bottle': {
    id: 'storm_in_a_bottle',
    name: "Storm in a Bottle",
    description: "A sealed bottle containing a miniature hurricane.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 280000,
    icon: '🌀',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Break: unleash a 50ft radius storm — 4d10 lightning, 3d10 thunder, wind speed 60ft",
        "Lasts 10 minutes",
        "The bottle reforms in 1 week — but each use weakens the storm inside"
    ],
    vendor: 'storm_seller',
    shippedBy: 'Lead-Sealed Vial',
    levelRequirement: 10
},

  'strange_sack': {
        id: 'strange_sack',
        name: "Strange Sack",
        description: "It's bigger on the inside. A little bit.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 50000,
        icon: '🎒',
        stock: 2,
        rarity: 'rare',
        effects: ["Doubles carrying capacity for consumables (inventory management)"],
        vendor: 'shamans_hut',
        shippedBy: 'Dimensional Mail',
        levelRequirement: 4
    },

  'styx_river_ferry_pass': {
    id: 'styx_river_ferry_pass',
    name: "Styx River Ferry Pass (Annual)",
    description: "Unlimited rides on Charon's ferry through the Nine Hells.",
    category: SHOP_CATEGORIES.premium,
    price: 395000,
    icon: '⛴️',
    stock: 3,
    rarity: 'legendary',
    effects: [
        "Teleport to any layer of the Nine Hells once per day",
        "Immunity to Styx memory loss",
        "Made by: Charon & Sons"
    ],
    vendor: 'hells_ticketing',
    shippedBy: 'Phantom Boat',
    levelRequirement: 15
},

  'sultanates_araby_anti_magic_tent': {
        id: 'sultanates_araby_anti_magic_tent',
        name: "Sultanates Anti-Magic Tent",
        description: "A ceremonial tent woven with runes that nullify low-to-mid level magical effects.",
        category: SHOP_CATEGORIES.equipment,
        price: 120000,
        icon: '⛺',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Anyone sleeping inside is immune to magical sleep, scrying, and mental attack",
        "Nullifies all active spell effects within the tent (20ft radius)",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Wrapped Tent',
        levelRequirement: 11
    },

  'sultanates_araby_bodyguard_legion': {
        id: 'sultanates_araby_bodyguard_legion',
        name: "Sultanates Bodyguard Legion (50 Elite)",
        description: "Hire 50 elite, magically protected desert warriors sworn to protect a specific objective or person.",
        category: SHOP_CATEGORIES.services,
        price: 450000,
        icon: '🛡️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "50 Elite guards (CR 1) provided for 1 month of dedicated protection",
        "Guards are immune to exhaustion from desert conditions",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Military Convoy',
        levelRequirement: 13
    },

  'sultanates_araby_camel_rental': {
    id: 'sultanates_araby_camel_rental',
    name: "Sultanates Araby Magic Camel Rental",
    description: "A camel that can carry more than physics allows.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 17500,
    icon: '🐪',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "A camel mount that can carry 500 lbs and sprint for 1 hour per day",
        "Camel is sarcastic and complains constantly (telepathically)",
        "Returns itself after 7 days (takes your best ration as tip)",
        "Made by: Sultanates Araby Stables"
    ],
    vendor: 'sultanates_araby',
    shippedBy: 'Camel Caravan',
    levelRequirement: 6
},

  'sultanates_araby_desert_fortress': {
        id: 'sultanates_araby_desert_fortress',
        name: "Sultanates of Araby Desert Fortress Deed",
        description: "Ownership of a hidden, magically warded fortress deep in the shifting sands.",
        category: SHOP_CATEGORIES.premium,
        price: 320000,
        icon: '🕌',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Permanent, highly defensible base of operations",
        "Wards prevent teleportation in/out",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Official Deed',
        levelRequirement: 12
    },

  'sultanates_araby_desert_war_beast': {
        id: 'sultanates_araby_desert_war_beast',
        name: "Sultanates of Araby War-Scorpion Mount",
        description: "A gigantic, magically controlled desert scorpion trained for battle.",
        category: SHOP_CATEGORIES.equipment,
        price: 400000,
        icon: '🦂',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Mount: AC 17, HP 150, Speed 50ft (Desert terrain ignored)",
        "Stinger attack deals 3d6 + 3d6 Poison damage (DC 17 CON save)",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Tamed Beast',
        levelRequirement: 15
    },

  'sultanates_araby_desert_weather_control': {
        id: 'sultanates_araby_desert_weather_control',
        name: "Sultanates of Araby Permanent Oasis Generator",
        description: "A permanent magical device that draws moisture from the air to maintain a freshwater oasis.",
        category: SHOP_CATEGORIES.premium,
        price: 700000,
        icon: '⛲',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Creates one permanent, self-sustaining oasis in the desert (1/sq mile)",
        "Area within 100ft heals all natural exhaustion instantly",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Grand Ceremony',
        levelRequirement: 17
    },

  'sultanates_araby_dream_walker_service': {
        id: 'sultanates_araby_dream_walker_service',
        name: "Sultanates Dream Walker Service (Targeted)",
        description: "A specialist enters the target's dreams to plant ideas, remove fears, or gather intelligence.",
        category: SHOP_CATEGORIES.services,
        price: 180000,
        icon: '😴',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Successfully influence one major subconscious belief or fear in the target",
        "Risk of target becoming aware and fighting back (DC 19 WIS check)",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Ritual Appointment',
        levelRequirement: 15
    },

  'sultanates_araby_eternal_guards': {
        id: 'sultanates_araby_eternal_guards',
        name: "Sultanates Eternal Guards (Bound Spirits)",
        description: "Hire 10 eternally loyal guards bound by unbreakable desert spirits.",
        category: SHOP_CATEGORIES.faction,
        price: 800000,
        icon: '💀',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "10 guards (CR 5 each) sworn to never leave post until destroyed",
        "Immune to fear, poison, and non-divine charm",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Procession of the Dead',
        levelRequirement: 18,
        factionBonus: { defense: 90 }
    },

  'sultanates_araby_genie_bargain': {
        id: 'sultanates_araby_genie_bargain',
        name: "Sultanates of Araby Genie Bargain (1 Wish)",
        description: "A service guaranteeing a successful bargain with a captive Genie (limit 1 minor wish).",
        category: SHOP_CATEGORIES.services,
        price: 250000,
        icon: '🧞',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "A vetted Genie grants 1 wish (DM adjudicated, no major reality changes)",
        "Bargaining fees are high; Genie cannot be tricked",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Brass Lamp',
        levelRequirement: 14
    },

  'sultanates_araby_genie_lamp_cleaning': {
    id: 'sultanates_araby_genie_lamp_cleaning',
    name: "Sultanates Araby Genie Lamp Cleaning",
    description: "Polish your lamp for better wishes.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 12500,
    icon: '🪔',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "One lamp is cleaned: +1 to Charisma checks with genies",
        "Might accidentally release a genie (DM's discretion)",
        "Genie is annoyed about being disturbed",
        "Made by: Sultanates Araby Lamp Cleaners"
    ],
    vendor: 'sultanates_araby',
    shippedBy: 'Genie Courier',
    levelRequirement: 5
},

  'sultanates_araby_genie_lamp_cleaning_service': {
    id: 'sultanates_araby_genie_lamp_cleaning_service',
    name: "Sultanates Araby Genie Lamp Cleaning Service",
    description: "Polish for a wish chance.",
    category: SHOP_CATEGORIES.services,
    price: 17000,
    icon: '🏺',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Clean lamp: 10% chance of minor wish (DM: heal 1d10 HP)",
        "Advantage on Persuasion with spirits",
        "Genie might rub you the wrong way",
        "Made by: Araby Lamp Rubbers"
    ],
    vendor: 'sultanates_araby_bazaar',
    shippedBy: 'Magic Polish',
    levelRequirement: 6
},

  'sultanates_araby_genie_lamp_oven': {
    id: 'sultanates_araby_genie_lamp_oven',
    name: "Sultanates Araby Genie Lamp Oven",
    description: "Lamp-shaped oven that 'wishes' heat even.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8500,
    icon: '🏺',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Bakes with magic heat; advantage on spice kebabs",
        "Grants minor wish luck (+1 roll after use)",
        "Lamp smokes like a genie",
        "Made by: Araby Enchanters"
    ],
    vendor: 'sultanates_araby_bazaar',
    shippedBy: 'Wishful Ware Wrap',
    levelRequirement: 6
},

  'sultanates_araby_lamb_kebab_recipe': {
    id: 'sultanates_araby_lamb_kebab_recipe',
    name: "Recipe: Sultanates Araby Lamb Kebab",
    description: "Skewered lamb with spices for caravan feasts.",
    category: SHOP_CATEGORIES.services,
    price: 7500,
    icon: '🍢',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Grill skewers (25 min); eat to gain +1 to Wisdom (Survival) in deserts for 4 hours and 1d6 HP",
        "Requires: Lamb and spices; aromatic",
        "Genies might grant a wish (rare)",
        "Made by: Araby Grillmasters"
    ],
    vendor: 'sultanates_araby_bazaar',
    shippedBy: 'Skewer Spice Sheet',
    levelRequirement: 5
},

  'sultanates_araby_master_assassin': {
        id: 'sultanates_araby_master_assassin',
        name: "Sultanates Master Assassin (Contract)",
        description: "Hire the Sultan's best operative for one high-profile, guaranteed elimination.",
        category: SHOP_CATEGORIES.services,
        price: 550000,
        icon: '🗡️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Guaranteed elimination of one target (regardless of defenses)",
        "Assassin operates completely outside your chain of command",
        "Requires 1 month notice"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Poison Vial',
        levelRequirement: 17
    },

  'sultanates_araby_oasis_charm': {
        id: 'sultanates_araby_oasis_charm',
        name: "Sultanates of Araby Oasis Charm",
        description: "A small stone that causes a temporary, viable water source to spring up.",
        category: SHOP_CATEGORIES.curiosities,
        price: 15000,
        icon: '💧',
        stock: 8,
        rarity: 'rare',
        effects: [
            "Creates a 10ft diameter fresh water oasis that lasts 24 hours",
        "Essential for desert travel",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_post',
        shippedBy: 'Stone Casing',
        levelRequirement: 4
    },

  'sultanates_araby_permanent_guard_detail': {
        id: 'sultanates_araby_permanent_guard_detail',
        name: "Sultanates Permanent Guard Detail (Personal)",
        description: "A detail of 5 elite, magically bonded bodyguards sworn to protect you until death or release.",
        category: SHOP_CATEGORIES.faction,
        price: 900000,
        icon: '🛡️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "5 Elite Guards (CR 7) devoted solely to you (gain +2 to all rolls while near you)",
        "Guards are replaced if killed (takes 1 month)",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Binding Ritual',
        levelRequirement: 18,
        factionBonus: { defense: 80 }
    },

  'sultanates_araby_sand_shroud': {
        id: 'sultanates_araby_sand_shroud',
        name: "Sultanates of Araby Sand Shroud",
        description: "A head-to-toe wrap that filters sand and heat.",
        category: SHOP_CATEGORIES.equipment,
        price: 5000,
        icon: '🏜️',
        stock: 18,
        rarity: 'uncommon',
        effects: [
            "Grants advantage on Constitution saves vs. extreme heat and exhaustion from sandstorms",
        "Scent is masked by faint desert spices",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_traders_post',
        shippedBy: 'Rolled Cloth',
        levelRequirement: 2
    },

  'sultanates_araby_spice_of_life': {
        id: 'sultanates_araby_spice_of_life',
        name: "Sultanates of Araby Spice of Life",
        description: "An impossibly flavorful spice that cures minor fatigue and grants vivid dreams.",
        category: SHOP_CATEGORIES.consumables,
        price: 18000,
        icon: '🧂',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Grants the benefits of a full night's rest after only 4 hours of sleep",
        "Flavor enhances any mundane meal tenfold",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_post',
        shippedBy: 'Ornate Spice Box',
        levelRequirement: 5
    },

  'sultanates_araby_sultan_turban': {
    id: 'sultanates_araby_sultan_turban',
    name: "Sultanates Araby Sultan Turban",
    description: "Ornate turban for desert nobility.",
    category: SHOP_CATEGORIES.premium,
    price: 18000,
    icon: '🎩',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Advantage on Charisma (Persuasion) in markets",
        "Turban jewel provides minor light (5ft)",
        "Unravels in high winds",
        "Made by: Araby Jewelers"
    ],
    vendor: 'sultanates_araby_palace',
    shippedBy: 'Silk Jewel',
    levelRequirement: 6
},

  'sultanates_araby_time_stasis_field': {
        id: 'sultanates_araby_time_stasis_field',
        name: "Sultanates of Araby Time Stasis Field (Small)",
        description: "A large device that freezes time within a small area for temporary storage.",
        category: SHOP_CATEGORIES.premium,
        price: 650000,
        icon: '⏱️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Enclose 1 object/person in a 5ft sphere where time stops indefinitely",
        "Requires 1 hour to calibrate and 1 major sacrifice to activate",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Massive Clockwork',
        levelRequirement: 17
    },

  'sultanates_araby_water_engine': {
        id: 'sultanates_araby_water_engine',
        name: "Sultanates Water Engine (Self-Sustaining)",
        description: "A complex engine that draws moisture from the air to create an infinite, drinkable water supply.",
        category: SHOP_CATEGORIES.equipment,
        price: 250000,
        icon: '💧',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Produces 1,000 gallons of pure water per day indefinitely",
        "Engine requires minor maintenance checks quarterly",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Heavy Machinery',
        levelRequirement: 14
    },

  'sultanates_araby_weather_control': {
        id: 'sultanates_araby_weather_control',
        name: "Sultanates of Araby: Sand Clearer",
        description: "A powerful ritual that parts massive sandstorms, clearing paths for trade.",
        category: SHOP_CATEGORIES.services,
        price: 70000,
        icon: '🌬️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Dispels all natural and magical sandstorms in a 10-mile radius for 48 hours",
        "Requires summoning of wind elementals (risky)",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Summoning Circle',
        levelRequirement: 10
    },

  'sumo_bro_sandals': {
    id: 'sumo_bro_sandals',
    name: "Sumo Bro Thunder Sandals",
    description: "Heavy sandals that stomp lightning. Shake the earth with every step.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 21000,
    icon: '🩴',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Stomp: 1d6 Thunder in 5ft radius",
        "Once per short rest: Lightning stomp (3d6 Thunder, DEX save half)",
        "You weigh 100lbs more",
        "Clouds gather above your head when angry"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Thunder Crate',
    levelRequirement: 6
},

  'sunglasses_of_swagger': {
    id: 'sunglasses_of_swagger',
    name: "Sunglasses of Swagger",
    description: "Stylish shades that make you impossible to ignore (in a good way).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 11000,
    icon: '🕶️',
    stock: 10,
    rarity: 'rare',
    effects: [
        "While worn, +2 to Performance (Charisma) checks",
        "Once per day: cast Charm Person (self only)",
        "Attracts fanfare and pigeons"
    ],
    vendor: 'skyloom',
    shippedBy: 'Paper Sleeve',
    levelRequirement: 2
},

  'super_bell': {
    id: 'super_bell',
    name: "Super Bell",
    description: "A bell that turns you into a cat for climbing and scratching.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 7000,
    icon: '🔔',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Single Use: Gain cat form (climb speed 30ft, claw attack 1d6 slashing)",
        "Advantage on Acrobatics checks",
        "Lasts 10 minutes"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Bell Box',
    levelRequirement: 2
},

  'super_boots': {
        id: 'super_boots',
        name: "Super Boots",
        description: "Red leather boots enchanted for enhanced jumping. Spring-loaded heels included.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 65000,
        icon: '👢',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Jump distance doubled",
            "Can perform Ground Pound (bonus action, 2d6 to adjacent)",
            "Fall damage reduced by 20 feet"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Parakarry Postal Service',
        levelRequirement: 3
    },

  'super_hammer': {
        id: 'super_hammer',
        name: "Super Hammer",
        description: "A masterwork hammer with a weighted head. The preferred weapon of serious adventurers.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 85000,
        icon: '🔨',
        stock: 4,
        rarity: 'uncommon',
        effects: [
            "1d10 bludgeoning damage",
            "+1 to attack rolls",
            "Can break metal blocks",
            "Versatile (1d12 two-handed)"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Armored Courier',
        levelRequirement: 4
    },

  'super_mushroom': {
        id: 'super_mushroom',
        name: "Super Mushroom",
        description: "An enhanced mushroom with concentrated healing properties. The slight tingle means it's working.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 25000,
        icon: '🍄',
        stock: 12,
        rarity: 'uncommon',
        effects: ["Restore 4d8+4 HP as an action", "Removes Poisoned condition"],
        vendor: 'toad_town_market',
        shippedBy: 'Parakarry Postal Service',
        levelRequirement: 3
    },

  'super_pickaxe': {
        id: 'super_pickaxe',
        name: "Super Pickax",
        description: "Can break through heavy stones. Captain Toad's favorite.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 40000,
        icon: '⛏️',
        stock: 2,
        rarity: 'uncommon',
        effects: ["1d8 piercing", "Advantage on breaking stone objects/walls"],
        vendor: 'toad_town_market',
        shippedBy: 'Heavy Carrier',
        levelRequirement: 2
    },

  'super_soda': {
        id: 'super_soda',
        name: "Super Soda",
        description: "A fizzy blue drink that cures ailments. Guaranteed to make you burp.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12000,
        icon: '🥤',
        stock: 15,
        rarity: 'uncommon',
        effects: ["Cures Poison, Blindness, and Deafness", "Restores 1d4 HP"],
        vendor: 'toad_town_market',
        shippedBy: 'Liquid Container',
        levelRequirement: 2
    },

  'swim_ring': {
        id: 'swim_ring',
        name: "Cheep Cheep Float",
        description: "Inflatable ring. Keeps you afloat.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6000,
        icon: '⭕',
        stock: 100,
        rarity: 'common',
        effects: ["Advantage on Athletics (Swim) to stay afloat", "Cannot dive"],
        vendor: 'valley_trading_post',
        shippedBy: 'Box',
        levelRequirement: 1
    },

  'syrup_that_s_extra_sweet': {
    id: 'syrup_that_s_extra_sweet',
    name: "Wario's Waffle Syrup",
    description: "Syrup that's 'extra sweet' (sticky).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4200,
    icon: '🍯',
    stock: 14,
    rarity: 'common',
    effects: [
        "Syrup on food: +1 heal from breakfast",
        "Sticky: disadvantage on clean",
        "Sweet tooth: +1 Charisma foodies",
        "Made by: Wario Syrups"
    ],
    vendor: 'wario_land',
    shippedBy: 'Sticky Sweet',
    levelRequirement: 4
},

  'tanooki_leaf': {
        id: 'tanooki_leaf',
        name: "Tanooki Leaf",
        description: "A magical leaf granting the abilities of the legendary Tanooki. Transform and deceive.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 200000,
        icon: '🍂',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Slow fall always active while held",
            "Action: Transform into statue (lasts until you move)",
            "As statue: +10 to Stealth, appear as normal stone",
            "Grow a raccoon tail (purely cosmetic)"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Mystical Container Protocol',
        levelRequirement: 4
    },

  'tarrasque_restraining_bolt': {
    id: 'tarrasque_restraining_bolt',
    name: "Tarrasque Restraining Bolt (Legendary)",
    description: "A single adamantine bolt designed by the gods themselves.",
    category: SHOP_CATEGORIES.premium,
    price: 1550000,
    icon: '🔩',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Petrifies a Tarrasque for 100 years (DC 30 Constitution save)",
        "Single use; requires direct application to the beast",
        "Made by: The Watcher in the Tower"
    ],
    vendor: 'divine_intervention',
    shippedBy: 'Deific Manifestation',
    levelRequirement: 20
},

  'tarrasque_scale_armor_kit': {
    id: 'tarrasque_scale_armor_kit',
    name: "Tarrasque Scale Armor Kit",
    description: "Raw scales and binding agent for crafting invincible armor.",
    category: SHOP_CATEGORIES.premium,
    price: 1450000,
    icon: '🛡️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Craft armor with AC 24 and immunity to non-magical damage",
        "Requires 90 days and 50,000gp in materials",
        "Made by: Tarrasque Hunters Guild"
    ],
    vendor: 'apocalypse_surplus',
    shippedBy: 'Earthquake Delivery',
    levelRequirement: 20
},

  'tasty_tonic': {
        id: 'tasty_tonic',
        name: "Tasty Tonic",
        description: "A delicious herbal tea. Soothes the nerves and the stomach.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 15000,
        icon: '🍵',
        stock: 12,
        rarity: 'uncommon',
        effects: ["Removes Poison and Shrink effects", "Restores 1d8 HP"],
        vendor: 'shamans_hut',
        shippedBy: 'Fragile Container',
        levelRequirement: 2
    },

  'tea_leaf_diviner_robe': {
    id: 'tea_leaf_diviner_robe',
    name: "Tea Leaf Diviner Robe",
    description: "Robe stained with tea for fortune tellers.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 13000,
    icon: '👘',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Advantage on Wisdom (Insight) for readings",
        "Robe holds tea leaves (minor prophecy aid)",
        "Stains never wash out",
        "Made by: Leaf Seers"
    ],
    vendor: 'tea_leaf_parlor',
    shippedBy: 'Steeped Silk',
    levelRequirement: 5
},

  'tea_leaf_fortune_cookie_recipe': {
    id: 'tea_leaf_fortune_cookie_recipe',
    name: "Recipe: Tea Leaf Fortune Cookie",
    description: "Cookies with tea leaf fortunes inside.",
    category: SHOP_CATEGORIES.services,
    price: 6500,
    icon: '🍪',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Fold with fortunes (25 min); eat to read fortune for inspiration or minor hint (DM)",
        "Requires: Dough and tea leaves; prophetic",
        "Luck in the crumbs",
        "Made by: Leaf Bakers"
    ],
    vendor: 'tea_leaf_parlor',
    shippedBy: 'Fortune Fold File',
    levelRequirement: 5
},

  'tea_leaf_fortune_folding_tool': {
    id: 'tea_leaf_fortune_folding_tool',
    name: "Tea Leaf Fortune Folding Tool",
    description: "Tool for folding cookie fortunes.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6500,
    icon: '🍪',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Folds precisely; advantage on prophecy recipes",
        "Tool reveals minor fortunes",
        "Paper crinkles loudly",
        "Made by: Leaf Folders"
    ],
    vendor: 'tea_leaf_parlor',
    shippedBy: 'Fortune Fold File',
    levelRequirement: 5
},

  'tea_leaf_fortune_reading_service': {
    id: 'tea_leaf_fortune_reading_service',
    name: "Tea Leaf Fortune Reading Service",
    description: "Divine your path.",
    category: SHOP_CATEGORIES.services,
    price: 9500,
    icon: '☕',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Reading: Inspiration for one decision",
        "50% accurate prophecy",
        "Tea stains clothes",
        "Made by: Leaf Seers"
    ],
    vendor: 'tea_leaf_parlor',
    shippedBy: 'Cup and Saucer',
    levelRequirement: 5
},

  'tea_leaf_tea_bag_reading_subscription': {
    id: 'tea_leaf_tea_bag_reading_subscription',
    name: "Tea Leaf Tea Bag Reading Subscription",
    description: "Read tea bags instead of leaves.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 11500,
    icon: '🍵',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Once per day: Read a tea bag for a vague hint about the future (DM provides)",
        "Tea is mediocre but the bags are informative",
        "You develop a caffeine addiction: -1 to checks without morning tea",
        "Made by: Tea Leaf Divination"
    ],
    vendor: 'tea_leaf',
    shippedBy: 'Steeped Delivery',
    levelRequirement: 5
},

  'team_aqua_aqua_diver_suit': {
    id: 'team_aqua_aqua_diver_suit',
    name: "Team Aqua Aqua Diver Suit",
    description: "Wetsuit for underwater ops.",
    category: SHOP_CATEGORIES.premium,
    price: 17000,
    icon: '👔',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Advantage on Swimming and underwater Stealth",
        "Suit provides minor pressure resistance",
        "Bulky on land",
        "Made by: Aqua Divers"
    ],
    vendor: 'team_aqua_submarine',
    shippedBy: 'Wave Weave',
    levelRequirement: 6
},

  'team_aqua_aqua_pressure_cooker': {
    id: 'team_aqua_aqua_pressure_cooker',
    name: "Team Aqua Aqua Pressure Cooker",
    description: "Underwater cooker for seaweed wraps.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7500,
    icon: '🌯',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Cooks under pressure; reduces time by 30%",
        "Waterproof for dives",
        "Pressure builds (vent carefully)",
        "Made by: Aqua Engineers"
    ],
    vendor: 'team_aqua_sub',
    shippedBy: 'Deep Dive Dish',
    levelRequirement: 5
},

  'team_aqua_aquatic_gills_potion_premium': {
    id: 'team_aqua_aquatic_gills_potion_premium',
    name: "Team Aqua Aquatic Gills Potion (Premium)",
    description: "Breathe underwater briefly.",
    category: SHOP_CATEGORIES.premium,
    price: 17000,
    icon: '🐟',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Potion: Water breathing 1 hour",
        "Swim speed +10ft",
        "Fishy smell lingers",
        "Made by: Aqua Alchemists"
    ],
    vendor: 'team_aqua_sub',
    shippedBy: 'Blue Vial',
    levelRequirement: 6
},

  'team_aqua_moisture_farming': {
    id: 'team_aqua_moisture_farming',
    name: "Team Aqua Moisture Farming",
    description: "Farm moisture from the air.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 9500,
    icon: '💧',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Gather 1 gallon of water per hour in any environment",
        "You become damp: disadvantage on saves vs. cold",
        "Water elementals are drawn to you (advantage on Charisma with them)",
        "Made by: Team Aqua Moisture Farmers"
    ],
    vendor: 'team_aqua',
    shippedBy: 'Water Vapor',
    levelRequirement: 5
},

  'team_aqua_seaweed_wraps_recipe': {
    id: 'team_aqua_seaweed_wraps_recipe',
    name: "Recipe: Team Aqua Seaweed Wraps",
    description: "Wraps filled with ocean bounty for divers.",
    category: SHOP_CATEGORIES.services,
    price: 7000,
    icon: '🌯',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Wrap seaweed (15 min); eat to gain swim speed +10 ft for 3 hours",
        "Requires: Seaweed and fish; aquatic",
        "Aqua approved",
        "Made by: Aqua Cooks"
    ],
    vendor: 'team_aqua_sub',
    shippedBy: 'Wave Wrap Writings',
    levelRequirement: 5
},

  'team_aqua_water_breathing_certification': {
    id: 'team_aqua_water_breathing_certification',
    name: "Team Aqua Water Breathing Certification",
    description: "Official certification in breathing water.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 16500,
    icon: '💧',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Gain water breathing for 7 days; you get a laminated card",
        "Must recertify every week or lose it",
        "Fish schools recognize your authority (advantage on Animal Handling with fish)",
        "Made by: Team Aqua Instructors"
    ],
    vendor: 'team_aqua',
    shippedBy: 'Wave Rider',
    levelRequirement: 6
},

  'team_flare_fashion_makeover': {
    id: 'team_flare_fashion_makeover',
    name: "Team Flare Fashion Makeover",
    description: "Everything becomes red and stylish.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 16500,
    icon: '💃',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Your outfit becomes fabulous and red: +1 Charisma, disadvantage on Stealth",
        "You are recognized as 'Team Flare affiliate' – some love it, some hate it",
        "All your items turn red (even potions, which is concerning)",
        "Made by: Team Flare Stylists"
    ],
    vendor: 'team_flare',
    shippedBy: 'Fashion Police',
    levelRequirement: 6
},

  'team_flare_fashion_makeover_premium': {
    id: 'team_flare_fashion_makeover_premium',
    name: "Team Flare Fashion Makeover (Premium)",
    description: "Everything becomes red and fabulous.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 19500,
    icon: '💃',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Your outfit becomes stunning: +2 Charisma, -1 Stealth",
        "You are recognized as Team Flare elite (some love, some hate)",
        "All your items turn red and gain minor fire resistance",
        "Made by: Team Flare Elite Stylists"
    ],
    vendor: 'team_flare',
    shippedBy: 'Fashion Police',
    levelRequirement: 7
},

  'team_flare_fashion_plate_set': {
    id: 'team_flare_fashion_plate_set',
    name: "Team Flare Fashion Plate Set",
    description: "Elegant plates for finger foods.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7000,
    icon: '🍴',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Presents stylishly; +1 to Charisma serving",
        "Plates shine for flair",
        "Fragile china",
        "Made by: Flare Potters"
    ],
    vendor: 'team_flare_boutique',
    shippedBy: 'Glam Plate Pack',
    levelRequirement: 5
},

  'team_flare_fashionable_finger_foods_recipe': {
    id: 'team_flare_fashionable_finger_foods_recipe',
    name: "Recipe: Team Flare Fashionable Finger Foods",
    description: "Stylish bites for glamorous gatherings.",
    category: SHOP_CATEGORIES.services,
    price: 7500,
    icon: '🍴',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Plate elegantly (20 min); eat to gain +2 Charisma for social events (2 hours)",
        "Requires: Fancy ingredients; chic",
        "Flare fabulous",
        "Made by: Flare Caterers"
    ],
    vendor: 'team_flare_boutique',
    shippedBy: 'Glam Garnish Guide',
    levelRequirement: 5
},

  'team_flare_fashionista_dress': {
    id: 'team_flare_fashionista_dress',
    name: "Team Flare Fashionista Dress",
    description: "Stylish dress for dramatic reveals.",
    category: SHOP_CATEGORIES.premium,
    price: 16000,
    icon: '👗',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "+2 to Charisma (Performance)",
        "Dress flares for distraction (DC 12 Wis)",
        "Snags on rough ground",
        "Made by: Flare Designers"
    ],
    vendor: 'team_flare_showroom',
    shippedBy: 'Flaming Fold',
    levelRequirement: 5
},

  'team_flare_style_upgrade_service': {
    id: 'team_flare_style_upgrade_service',
    name: "Team Flare Style Upgrade Service",
    description: "Flaunt fashion for flair.",
    category: SHOP_CATEGORIES.services,
    price: 14000,
    icon: '👗',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Upgrade: +2 Charisma 24 hours",
        "Intimidate with style",
        "Outfit snags on thorns",
        "Made by: Flare Designers"
    ],
    vendor: 'team_flare_boutique',
    shippedBy: 'Fancy Box',
    levelRequirement: 5
},

  'team_magma_fire_safety_training': {
    id: 'team_magma_fire_safety_training',
    name: "Team Magma Fire Safety Training",
    description: "Learn to stop, drop, and roll.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 14500,
    icon: '🔥',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Advantage on saves vs. fire damage for 7 days",
        "You become overly cautious about candles (disadvantage on checks near open flame)",
        "You get a fire extinguisher (single use, deals 1d10 cold damage)",
        "Made by: Team Magma Safety Dept."
    ],
    vendor: 'team_magma',
    shippedBy: 'Lava Flow',
    levelRequirement: 5
},

  'team_magma_lava_flow_funnel': {
    id: 'team_magma_lava_flow_funnel',
    name: "Team Magma Lava Flow Funnel",
    description: "Funnel for pouring hot rock candy syrup.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6500,
    icon: '🍭',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Handles heat flow; advantage on lava recipes",
        "Funnels without spill",
        "Hardens if cooled",
        "Made by: Magma Moldmakers"
    ],
    vendor: 'team_magma_volcano',
    shippedBy: 'Hot Flow Haul',
    levelRequirement: 5
},

  'team_magma_lava_lamp_refilling': {
    id: 'team_magma_lava_lamp_refilling',
    name: "Team Magma Lava Lamp Refilling",
    description: "Refill your lava lamp with real lava.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 7500,
    icon: '🌋',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Lava lamp becomes a minor heat source (warmth in cold)",
        "Lamp may explode (DC 10 Dex save or 1d6 fire damage)",
        "You get a 'Hot Stuff' sticker",
        "Made by: Team Magma Lava Technicians"
    ],
    vendor: 'team_magma',
    shippedBy: 'Lava Flow',
    levelRequirement: 5
},

  'team_magma_lava_resistant_pants': {
    id: 'team_magma_lava_resistant_pants',
    name: "Team Magma Lava Resistant Pants",
    description: "Heat-proof pants for volcanic work.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15500,
    icon: '👖',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Resistance to minor heat damage",
        "+1 to Constitution in hot areas",
        "Pants smolder after exposure",
        "Made by: Magma Miners"
    ],
    vendor: 'team_magma_volcano',
    shippedBy: 'Ash Ashen',
    levelRequirement: 5
},

  'team_magma_volcanic_rock_candy_recipe': {
    id: 'team_magma_volcanic_rock_candy_recipe',
    name: "Recipe: Team Magma Volcanic Rock Candy",
    description: "Hard candy like lava rocks for heat lovers.",
    category: SHOP_CATEGORIES.services,
    price: 6500,
    icon: '🍭',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Crystallize sugar (30 min); eat to gain resistance to fire for 2 hours",
        "Requires: Hot sugar; rocky",
        "Magma melts in mouth",
        "Made by: Magma Confectioners"
    ],
    vendor: 'team_magma_base',
    shippedBy: 'Lava Lollipop Ledger',
    levelRequirement: 5
},

  'team_magma_volcanic_rock_service': {
    id: 'team_magma_volcanic_rock_service',
    name: "Team Magma Volcanic Rock Service",
    description: "Heat source or weapon.",
    category: SHOP_CATEGORIES.services,
    price: 12500,
    icon: '🌋',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Rock: Throw for 1d6 fire, or warm camp",
        "1 use as weapon",
        "Hot: Burns hand if mishandled",
        "Made by: Magma Miners"
    ],
    vendor: 'team_magma_base',
    shippedBy: 'Lava Rock',
    levelRequirement: 5
},

  'team_plasma_ethical_leather_jacket': {
    id: 'team_plasma_ethical_leather_jacket',
    name: "Team Plasma Ethical Leather Jacket ",
    description: "Vegan 'leather' jacket for animal lovers.",
    category: SHOP_CATEGORIES.premium,
    price: 13500,
    icon: '🧥',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "+1 to Animal Handling",
        "Jacket repels minor beast attacks",
        "Smells like tofu",
        "Made by: Plasma Fashion"
    ],
    vendor: 'team_plasma_hq',
    shippedBy: 'Green Garment',
    levelRequirement: 5
},

  'team_plasma_ethical_veggie_chopper': {
    id: 'team_plasma_ethical_veggie_chopper',
    name: "Team Plasma Ethical Veggie Chopper ",
    description: "Chopper for vegan stews, no harm.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5500,
    icon: '🍲',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Chops veggies cleanly; +1 to Animal Handling post-meal",
        "Peaceful blade (no blood)",
        "Chops slowly for ethics",
        "Made by: Plasma Choppers"
    ],
    vendor: 'team_plasma_lab',
    shippedBy: 'Green Chop Gear',
    levelRequirement: 5
},

  'team_plasma_poke_liberation_potion_service': {
    id: 'team_plasma_poke_liberation_potion_service',
    name: "Team Plasma Poké Liberation Potion Service",
    description: "Free your 'captives' – or calm beasts.",
    category: SHOP_CATEGORIES.services,
    price: 11500,
    icon: '⚪',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Calm one beast: Remove rage/fear for 1 hour",
        "Advantage on Animal Handling",
        "Potion bubbles with speeches",
        "Made by: Plasma Alchemists"
    ],
    vendor: 'team_plasma_lab',
    shippedBy: 'Ethical Vial',
    levelRequirement: 5
},

  'team_plasma_vegan_veggie_stew_recipe': {
    id: 'team_plasma_vegan_veggie_stew_recipe',
    name: "Recipe: Team Plasma Vegan Veggie Stew ",
    description: "Ethical stew without animal products for liberation.",
    category: SHOP_CATEGORIES.services,
    price: 5500,
    icon: '🍲',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Simmer veggies (40 min); eat to gain +1 to Animal Handling and heal 1d4 HP (peaceful)",
        "Requires: Veggies; cruelty-free",
        "Pokémon thank you",
        "Made by: Plasma Vegans"
    ],
    vendor: 'team_plasma_lab',
    shippedBy: 'Green Goodness Gazette',
    levelRequirement: 5
},

  'team_rocket_balloon_escape_premium': {
    id: 'team_rocket_balloon_escape_premium',
    name: "Team Rocket Balloon Escape ",
    description: "Quick getaway device.",
    category: SHOP_CATEGORIES.premium,
    price: 12500,
    icon: '🎈',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Inflate: Ascend 50ft, float 1 minute",
        "Escape grapple",
        "Pops on arrows",
        "Made by: Rocket Engineers"
    ],
    vendor: 'team_rocket_lab',
    shippedBy: 'Helium Tank',
    levelRequirement: 5
},

  'team_rocket_black_suit': {
    id: 'team_rocket_black_suit',
    name: "Team Rocket Black Suit ",
    description: "Sleek suit for villainous schemes.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 14500,
    icon: '👔',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Advantage on Deception for cons",
        "Suit hides Meowth (small companion)",
        "Tie unravels dramatically",
        "Made by: Rocket Tailors"
    ],
    vendor: 'team_rocket_base',
    shippedBy: 'Sneaky Suitcase',
    levelRequirement: 5
},

  'team_rocket_mech_rental_low_quality': {
    id: 'team_rocket_mech_rental_low_quality',
    name: "Team Rocket Mech Rental (Low Quality)",
    description: "A mech that barely works.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 22500,
    icon: '🤖',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Pilot a small mech for 7 days: +2 AC, -10 speed, attacks are clumsy (disadvantage)",
        "Mech breaks on natural 1-3: Requires 1 hour to fix with duct tape",
        "It has a self-destruct button (big red, tempting)",
        "Made by: Team Rocket R&D (Failed)"
    ],
    vendor: 'team_rocket',
    shippedBy: 'Blasting Off',
    levelRequirement: 7
},

  'team_rocket_mech_rental_very_low_quality': {
    id: 'team_rocket_mech_rental_very_low_quality',
    name: "Team Rocket Mech Rental (Very Low Quality)",
    description: "A mech that barely functions.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 16500,
    icon: '🤖',
    stock: 3,
    rarity: 'uncommon',
    effects: [
        "Pilot a mech for 7 days: +1 AC, -15 speed, attacks at disadvantage",
        "Mech breaks on natural 1-5: requires 2 hours to fix",
        "It has a self-destruct button (tempting, deals 2d10 damage to you)",
        "Made by: Team Rocket R&D (Failed Again)"
    ],
    vendor: 'team_rocket',
    shippedBy: 'Blasting Off (Again)',
    levelRequirement: 5
},

  'team_rocket_sneak_sifter': {
    id: 'team_rocket_sneak_sifter',
    name: "Team Rocket Sneak Sifter ",
    description: "Sifter for stealthy sandwich prep.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5500,
    icon: '🥪',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Sifts quietly; advantage on stealth cooking",
        "Hides fine powders",
        "Meowth approved",
        "Made by: Rocket Toolers"
    ],
    vendor: 'team_rocket_base',
    shippedBy: 'Sneak Sift Shipment',
    levelRequirement: 5
},

  'team_rocket_stealth_sandwiches_recipe': {
    id: 'team_rocket_stealth_sandwiches_recipe',
    name: "Recipe: Team Rocket Stealth Sandwiches ",
    description: "Sandwiches that help you 'blast off' quietly.",
    category: SHOP_CATEGORIES.services,
    price: 6000,
    icon: '🥪',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Wrap stealthily (15 min); eat to gain advantage on Stealth for escape (1 hour)",
        "Requires: Bread and fillings; sneaky",
        "Prepare for trouble!",
        "Made by: Rocket Chefs"
    ],
    vendor: 'team_rocket_base',
    shippedBy: 'Blast-Off Bun Book',
    levelRequirement: 5
},

  'team_rocket_uniform': {
    id: 'team_rocket_uniform',
    name: "Team Rocket Grunt Uniform",
    description: "A stylish black uniform with a prominent red 'R'. Perfect for blending in... or standing out.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 3500,
    icon: '🥋',
    stock: 20,
    rarity: 'uncommon',
    effects: [
        "+2 to Charisma (Deception) when pretending to be a member of Team Rocket",
        "Other Team Rocket members will be initially friendly",
        "Makes you a target for law enforcement and 'twerps' with Pikachu"
    ],
    vendor: 'Team Rocket',
    shippedBy: 'Shady Delivery',
    levelRequirement: 1
},

  'team_star_rebel_hoodie': {
    id: 'team_star_rebel_hoodie',
    name: "Team Star Rebel Hoodie",
    description: "Hoodie with star motifs for outcasts.",
    category: SHOP_CATEGORIES.premium,
    price: 13000,
    icon: '👕',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "+1 to Charisma with rebels",
        "Hoodie hides identity",
        "Stars glow in dark",
        "Made by: Star Rebels"
    ],
    vendor: 'team_star_hideout',
    shippedBy: 'Starry Stitch',
    levelRequirement: 5
},

  'team_star_rebel_rice_cooker': {
    id: 'team_star_rebel_rice_cooker',
    name: "Team Star Rebel Rice Cooker",
    description: "Simple cooker for stellar snacks.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6000,
    icon: '⭐',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Cooks rice evenly; +1 to rebel morale recipes",
        "Portable for hideouts",
        "Stars on lid glow",
        "Made by: Star Rebels"
    ],
    vendor: 'team_star_base',
    shippedBy: 'Rebel Rice Rig',
    levelRequirement: 5
},

  'team_star_stellar_snacks_recipe': {
    id: 'team_star_stellar_snacks_recipe',
    name: "Recipe: Team Star Stellar Snacks",
    description: "Snacks shaped like stars for rebel stars.",
    category: SHOP_CATEGORIES.services,
    price: 5500,
    icon: '⭐',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Cut star shapes (25 min); eat to gain +1 to Charisma with outcasts for 2 hours",
        "Requires: Dough; starry",
        "Shine bright",
        "Made by: Star Rebels"
    ],
    vendor: 'team_star_base',
    shippedBy: 'Stellar Snack Summary',
    levelRequirement: 5
},

  'team_star_sticker_application_service': {
    id: 'team_star_sticker_application_service',
    name: "Team Star Sticker Application Service",
    description: "Apply cool stickers to your gear.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 8500,
    icon: '⭐',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Apply 5 stickers: each gives +1 to one specific check per day (choose skills)",
        "Stickers peel off in rain (disadvantage on checks in water)",
        "You look like a teenager's notebook",
        "Made by: Team Star Decal Shop"
    ],
    vendor: 'team_star',
    shippedBy: 'Sticker Sheet',
    levelRequirement: 5
},

  'team_star_sticker_application_service_premium': {
    id: 'team_star_sticker_application_service_premium',
    name: "Team Star Sticker Application (Premium)",
    description: "Apply premium stickers.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 12500,
    icon: '⭐',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Apply 10 stickers: each gives +1 to one specific check per day",
        "Stickers are waterproof and last 14 days",
        "You look like a sticker book (disadvantage with serious folk)",
        "Made by: Team Star Premium Decals"
    ],
    vendor: 'team_star',
    shippedBy: 'Sticker Album',
    levelRequirement: 5
},

  'team_star_sticker_collection_service': {
    id: 'team_star_sticker_collection_service',
    name: "Team Star Sticker Collection Service",
    description: "Motivational stickers.",
    category: SHOP_CATEGORIES.services,
    price: 8500,
    icon: '⭐',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Apply: +1 inspiration use",
        "Decorate gear",
        "Stickers peel in rain",
        "Made by: Star Fans"
    ],
    vendor: 'team_star_base',
    shippedBy: 'Sticker Sheet',
    levelRequirement: 5
},

  'telepathic_communicator': {
    id: 'telepathic_communicator',
    name: "Telepathic Communicator (Device)",
    description: "Allows mind-to-mind communication across planetary distances.",
    category: SHOP_CATEGORIES.services,
    price: 540000,
    icon: '🧠',
    stock: 2,
    rarity: 'godly',
    effects: [
        "Unlimited range for linked users",
        "Encrypts thoughts",
        "Made by: Psi-Link Corp"
    ],
    vendor: 'mind_net',
    shippedBy: 'Neural Implant',
    levelRequirement: 16
},

  'teleport_away_from_danger_leaves': {
    id: 'teleport_away_from_danger_leaves',
    name: "Wario's Wafting Warp Whistle",
    description: "Teleport away from danger! Leaves a garlic cloud behind.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 21500,
    icon: '🎺',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Blow as a reaction to teleport 30ft in a random direction (DM chooses direction)",
        "Leaves a 15ft garlic cloud that lasts 1 round: creatures must succeed DC 12 Constitution save or be poisoned",
        "Whistle has a 20% chance to warp you into a wall (you take 1d6 bludgeoning damage, CON save DC 13 to avoid)",
        "On a natural 1, you teleport to Wario's bathroom (he's very confused, you're very embarrassed)",
        "Whistle is single-use but recharges after a long rest (Wario recharges it with his 'personal energy')",
        "Made by: Wario Land Transportation (Not Liable for Accidents)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Wafting Cloud (Priority)',
    levelRequirement: 7
},

  'teyvat_abyssal_chomp_catalyst': {
        id: 'teyvat_abyssal_chomp_catalyst',
        name: "Abyssal Chomp Catalyst",
        description: "Engineered from the corrupted flesh of a legendary Chain Chomp, this catalyst amplifies the beast’s bite into a weaponized fury. When activated, it causes the Chomp to erupt in a wave of acidic spores and bone-shattering force. But each use corrupts the wielder’s mind, leaving them vulnerable to hallucinations for 30 seconds.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🐉',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Deals 3d8 acid damage on hit",
        "20% chance to trigger hallucination effect (confuses target or self)",
        "Reduces enemy movement speed by 50% for 2s",
        "Wears out after 3 uses",
        "Causes 1d4 temporary blindness to wielder",
        "Requires attunement by a faction-aligned soldier"
        ],
        vendor: 'teyvat',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 7
    },

  'teyvat_ancient_vision': {
        id: 'teyvat_ancient_vision',
        name: "The Internet Cursed Vision Holder",
        description: "",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 15000,
        icon: '🌐',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Grants the ability to see the hidden truths of the Internet",
        "Triggers viral mental infections after 30 minutes of use",
        "Causes a 50% chance to lose your mind permanently",
        "Can be used to unlock hidden content in The Internet",
        "Cannot be used if you have a vision holder",
        "Crafted by: Mages Guild Portal"
        ],
        vendor: 'teyvat',
        shippedBy: 'Mages Guild Portal',
        levelRequirement: 7
    },

  'teyvat_archon_battle_shirt': {
        id: 'teyvat_archon_battle_shirt',
        name: "Archon Battle Shirt",
        description: "A shirt worn by those who dare to challenge the archons",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 10000,
        icon: '⚔',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Grants 50% damage reduction from elemental attacks",
        "Increases armor penetration by 10%",
        "Can be enchanted with inkopolis ink for visual effects",
        "May cause temporary confusion in enemies",
        "Requires attunement with a vision holder",
        "Crafted by: Bullet Bill Express"
        ],
        vendor: 'teyvat',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 8
    },

  'teyvat_archon_forged_ring': {
        id: 'teyvat_archon_forged_ring',
        name: "Archon Forged Ring",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 45000,
        icon: '⚔',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants immunity to elemental reaction damage from Archon’s domain",
        "Increases max HP by 20% when worn",
        "Causes 1d4+2 bonus damage to all enemies in range of 3m",
        "Requires attunement with an Archon’s vision to activate",
        "Triggers 5% chance to reveal a hidden path to the Doughnut Edge",
        "Shipped by: King of Tombs with a 24 hour delivery guarantee (if you’re lucky)"
        ],
        vendor: 'teyvat',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 10
    },

  'teyvat_blooded_beehive_essence': {
        id: 'teyvat_blooded_beehive_essence',
        name: "Blooded Beehive Essence",
        description: "A bubbling vial of crimson nectar, sealed with the last honey of a hive that once guarded the heart of the Fated Place. It is said that this essence was collected by the Toadettes during their relief ops, after they were forced to fight their own kind to protect the realm. When consumed, it grants a temporary burst of courage and healing, but also causes the user to become obsessed with the hive’s purpose and lose track of time.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 500,
        icon: '🐝',
        stock: 5,
        rarity: 'common',
        effects: [
            "Restores 200 HP and grants 10% damage bonus for 10 seconds",
        "Causes temporary time distortion for 3 seconds",
        "May trigger a hallucination of a hive’s queen",
        "Consuming more than once causes memory loss",
        "Crafted by: Hammer Bros Handling",
        "Must be shaken before use to activate the effect"
        ],
        vendor: 'teyvat',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 3
    },

  'teyvat_bowser_kid_suit': {
        id: 'teyvat_bowser_kid_suit',
        name: "Bowser Kid Suit",
        description: "A ceremonial robe worn by the heirs of the Toad Throne during succession trials",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '👑',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Grants temporary immunity to elemental reactions",
        "Allows wearer to summon a spectral Bowser child for 1 turn",
        "Increases critical hit chance by 25%",
        "Triggers a 5% chance to summon a spirit of the Cheep-Cheep Accords",
        "Crafted by: Rakasha Spirit Walkers with secret toadblood infusion"
        ],
        vendor: 'teyvat',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 9
    },

  'teyvat_cursed_treasure_box': {
        id: 'teyvat_cursed_treasure_box',
        name: "Cursed Treasure Box",
        description: "A box that promises riches but delivers curses",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 8000,
        icon: '💀',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Opens to reveal 5 random items from Teyvat or Faerûn",
        "Each item has a 50% chance to be cursed or beneficial",
        "If opened during a Boos event, triggers a 100% chance to summon a vampire",
        "Contains a hidden trap that activates if the box is opened by a non-vampire",
        "Cursed by: The Onyx Hand",
        "Unlocks during: Teyvat’s Nightfall Festival"
        ],
        vendor: 'teyvat',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 7
    },

  'teyvat_echo_gear': {
        id: 'teyvat_echo_gear',
        name: "Echo Gear",
        description: "A set of gear that amplifies your voice during elemental reactions",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 7000,
        icon: '🎵',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Boosts elemental reaction damage by 30% during vocal chants",
        "Allows 10% chance to trigger echo effect after casting",
        "Voice must be clear and emotionally charged to activate",
        "Can only be used once per battle",
        "Requires attunement with a vision holder",
        "Crafted by: Iron Legion"
        ],
        vendor: 'teyvat',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 8
    },

  'teyvat_elemental_tome': {
        id: 'teyvat_elemental_tome',
        name: "Elemental Tome of the Void",
        description: "A book that binds elemental forces into a single volume",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 35000,
        icon: '📜',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Grants elemental mastery to all archon related quests",
        "When used in a reaction, grants a 3d6 bonus to damage",
        "Requires a vision holder to activate",
        "Consumes 100 mana per use",
        "Can be fused with any elemental artifact to enhance its power",
        "Only available through: Asgard’s Arcane Vault",
        "Contains hidden glyph that rewrites the rules of magic in Teyvat",
        "Connects both worlds: Teyvat’s magic and Faerûn’s arcane traditions merge here"
        ],
        vendor: 'teyvat',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 10
    },

  'teyvat_eyeshield_of_kivotos': {
        id: 'teyvat_eyeshield_of_kivotos',
        name: "Eyeshield of Kivotos",
        description: "A ceremonial eye-guard worn by academy students during combat drills",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🎭',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Grants +10% dodge chance against ranged attacks",
        "Increases combat reflexes by 20% during vision holder activation",
        "Causes minor hallucinations if worn beyond 30 seconds",
        "Only usable by students with a Kivotos Academy halo",
        "Crafted by: Dry Bones Dead Drop"
        ],
        vendor: 'teyvat',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 3
    },

  'teyvat_forged_shield_of_the_sunken': {
        id: 'teyvat_forged_shield_of_the_sunken',
        name: "Shield of the Sunken Archives",
        description: "This ancient relic was unearthed from the ruins beneath Isle Delfino, its surface etched with forgotten glyphs that once held the power of the First Archon’s vision. Worn by those who dare to step into the void between dimensions, it absorbs arcane backlash and reflects enemy spells with a silent, golden flash. Its presence is said to awaken visions of lost truths, though some who wear it report seeing their own past selves in the mirror of its surface.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🌅',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Blocks 3d4 arcane damage",
        "Grants temporary immunity to elemental status effects",
        "When used in combat, triggers a 10% chance to reveal hidden enemy weaknesses",
        "Requires attunement with a vision holder",
        "Causes slight dizziness if used during rapid movement",
        "Can be upgraded with Sunken Archive fragments"
        ],
        vendor: 'teyvat',
        shippedBy: 'Koopa Postal',
        levelRequirement: 6
    },

  'teyvat_garlic_golem_heart': {
        id: 'teyvat_garlic_golem_heart',
        name: "Garlic Golem Heart",
        description: "",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🍃',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Restores 100 confidence when consumed",
        "Grants 20% increased damage against undead foes",
        "Causes temporary garlic allergy in enemies (they scream for 3 turns)",
        "Only usable by characters with a Wario Land connection",
        "Scent of garlic spreads for 2 turns, reducing enemy stealth",
        "Crafted by: Lakitu Drones"
        ],
        vendor: 'teyvat',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 3
    },

  'teyvat_ghostly_bargain': {
        id: 'teyvat_ghostly_bargain',
        name: "The Koopa Bank Heist Scroll",
        description: "",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '💰',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Instantly transfers 5000 coins to your account",
        "Triggers a 20% chance of corrupting your vision holder",
        "May cause a 10 minute mental glitch where you see Koopa Kingdoms",
        "Cannot be used if you have a vision holder",
        "Requires a signed contract from the Mages Guild Portal",
        "Crafted by: Mages Guild Portal"
        ],
        vendor: 'teyvat',
        shippedBy: 'Mages Guild Portal',
        levelRequirement: 4
    },

  'teyvat_grimdusk_ratskin_cowl': {
        id: 'teyvat_grimdusk_ratskin_cowl',
        name: "Grimdusk Ratskin Cowl",
        description: "Worn by the shadowy remnants of the Skaven who once ruled beneath the Fated Place, this cowl is stitched from the hides of rats that drank the blood of fallen archons. It hums with the echoes of forgotten wars and whispers of cursed rituals. When worn, it grants the wearer temporary invisibility and grants a bonus to stealth checks in dim environments, but also amplifies the wearer’s fear response during combat.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🐭',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Grants temporary invisibility for 10 seconds",
        "+2 to stealth checks in dark or confined areas",
        "Increases fear response by 30% during combat",
        "Wears out after 5 uses, causing a minor debuff to perception",
        "Crafted by: Hammer Bros Handling",
        "Scented with the residue of old Skaven rituals"
        ],
        vendor: 'teyvat',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 4
    },

  'teyvat_gunpowder_halo': {
        id: 'teyvat_gunpowder_halo',
        name: "Gunpowder Halo",
        description: "A modified halo that channels elemental energy into gunfire",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 50000,
        icon: '🎯',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Fires a burst of elemental projectiles on trigger",
        "Grants +50% damage against enemies with elemental resistances",
        "Causes minor recoil when used in combat",
        "Requires a vision holder to activate",
        "Only usable in locations where Kivotos Academy has active halos",
        "Crafted by: Dry Bones Dead Drop"
        ],
        vendor: 'teyvat',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 10
    },

  'teyvat_ink_jam_bomb': {
        id: 'teyvat_ink_jam_bomb',
        name: "Ink Jam Bomb",
        description: "",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 3000,
        icon: '🖋',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Explodes on impact, dealing 6d4 damage",
        "Destroys ink-based enemy vision holders instantly",
        "Triggers a temporary inkstorm that confuses all enemies for 1 turn",
        "Causes 25% chance to infect the user with ink-based hallucinations",
        "Requires a Wario Land connection to activate properly",
        "Crafted by: Lakitu Drones after Admiral Bloopers’ ink-jamming tactics"
        ],
        vendor: 'teyvat',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 6
    },

  'teyvat_inkstorm_cloak': {
        id: 'teyvat_inkstorm_cloak',
        name: "Inkstorm Cloak",
        description: "A cloak that shifts color with ink flow",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3000,
        icon: '🌈',
        stock: 4,
        rarity: 'rare',
        effects: [
            "Reduces elemental reaction cooldown by 20%",
        "Increases evasion chance by 15% in ink-based environments",
        "Can absorb ink damage and convert it to bonus HP",
        "May cause temporary ink splatter on allies",
        "Crafted by: Bullet Bill Express",
        "Only usable during ink warfare or fashion shows"
        ],
        vendor: 'teyvat',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 6
    },

  'teyvat_inkwell_glove': {
        id: 'teyvat_inkwell_glove',
        name: "Inkwell Glove",
        description: "A pair of gloves infused with the essence of inkopolis ink",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🖋',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Grants +2d4 ink damage when striking",
        "Slightly increases ink absorption rate",
        "Can be used to smudge enemy vision temporarily",
        "Wears off after 30 minutes of prolonged use",
        "Designed for ink warfare and fashion shows",
        "Crafted by: Bullet Bill Express"
        ],
        vendor: 'teyvat',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 4
    },

  'teyvat_item_name_here': {
        id: 'teyvat_item_name_here',
        name: "Archon Sight Lens",
        description: "A vision holder that reveals hidden truths",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 10000,
        icon: '🔮',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Reveals hidden paths in Teyvat",
        "Shows elemental reactions in real time",
        "Causes vision distortion after 3 uses",
        "Made by: Void Drifters",
        "Unlocks vision holder skill tree",
        "Only usable by those with Archon Sight"
        ],
        vendor: 'teyvat',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'teyvat_metal_soul_belt': {
        id: 'teyvat_metal_soul_belt',
        name: "Metal Soul Belt",
        description: "A belt that channels the essence of forgotten metals",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 5000,
        icon: '⚙',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants 1d4 bonus damage to metal-based attacks",
        "Can be used to activate hidden gacha triggers",
        "Reduces cooldown on elemental reactions",
        "May cause temporary metallic resonance",
        "Crafted by: Iron Legion",
        "Contains a fragment of a lost metal forge"
        ],
        vendor: 'teyvat',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 7
    },

  'teyvat_mushroom_crown': {
        id: 'teyvat_mushroom_crown',
        name: "Fungi Crown of the Whispering Fungal",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 800,
        icon: '🍄',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Grants +1 to all Fungi related skill checks",
        "Inflicts 1d4 confusion on enemies with mushroom-themed traits",
        "Wears off after 20 minutes of non-use",
        "Can be used to trigger the Fungi Civil War memory event",
        "Requires attunement by a Fungi-aligned character",
        "Crafted by: Mages Guild Portal"
        ],
        vendor: 'teyvat',
        shippedBy: 'Mages Guild Portal',
        levelRequirement: 3
    },

  'teyvat_pipe_network_key': {
        id: 'teyvat_pipe_network_key',
        name: "Pipe Network Key",
        description: "",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 800,
        icon: '📡',
        stock: 12,
        rarity: 'common',
        effects: [
            "Unlocks alternate routes through the failing Pipe Network",
        "Grants 10% increased trade efficiency with Noki Elders",
        "Consumes 10% of current stamina to activate",
        "Can be fused with any material to form a temporary pipe conduit",
        "Increases chance of encountering smugglers by 30% in coastal zones",
        "Requires attunement with a Vision Holder to function fully"
        ],
        vendor: 'teyvat',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 2
    },

  'teyvat_sacred_temple_key': {
        id: 'teyvat_sacred_temple_key',
        name: "Sacred Temple Key",
        description: "This ancient key was carved from the heartwood of the First Temple of Hyrule, sealed away for centuries. When inserted into its matching lock, it opens the path to hidden sanctuaries where time bends and the Triforce’s echo lingers. However, its power is unstable—each use risks unraveling the key’s own timeline.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 1200,
        icon: '🏯',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Opens one ancient temple door per use",
        "Grants +5% resistance to elemental damage",
        "Randomly unlocks one hidden chamber per activation",
        "Causes temporary temporal distortion (10s)",
        "Cannot be used by non-Hyrulean characters",
        "Requires a sacred relic to activate"
        ],
        vendor: 'teyvat',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 3
    },

  'teyvat_sacred_triforce_heartstone': {
        id: 'teyvat_sacred_triforce_heartstone',
        name: "Triforce Heartstone",
        description: "A crystalline core of Hyrule’s ancient power, sealed beneath the ruins of the Temple of the Lost Balance. This artifact was forged from the blood of the First Guardian and the tears of the Triforce’s awakening. When activated, it grants the wielder the ability to temporarily manifest a sacred aura that deflects all physical and magical attacks. However, prolonged use may cause the wielder to lose their sense of self, becoming a vessel for the Triforce’s dormant will.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 1200,
        icon: '⚔',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Can be infused into armor or weapons to grant +10% damage",
        "Grants 50% chance to recover 1 HP during a failed attack",
        "May cause a 10% chance to trigger a vision of the Triforce’s true form",
        "Worn too long may cause temporary confusion or memory loss",
        "Cannot be used by non-Hyrulean characters without ritual attunement"
        ],
        vendor: 'teyvat',
        shippedBy: 'Koopa Postal',
        levelRequirement: 4
    },

  'teyvat_seal_fragment_7': {
        id: 'teyvat_seal_fragment_7',
        name: "Seal Fragment Seven",
        description: "A shard of the primordial wyrm’s seal, now humming with latent power",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 8000,
        icon: '🧩',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Restores 1 seal point when used in ritual",
        "Inflicts 1d4 elemental damage to enemy if used outside ritual",
        "Must be used with a vision holder to activate",
        "Cannot be used while in Kivotos Academy dorms",
        "Crafted by: Team Rocket"
        ],
        vendor: 'teyvat',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 7
    },

  'teyvat_soulbound_satchel': {
        id: 'teyvat_soulbound_satchel',
        name: "Soulbound Satchel",
        description: "A satchel that holds the echoes of forgotten souls",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🧭',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Stores 3 soul fragments for use in spellcasting",
        "Increases spellcasting speed by 10% while carrying",
        "Each soul fragment grants 10% bonus to elemental resistance",
        "If opened during a vision holder event, triggers a random elemental reaction",
        "Crafted by: Shy Guy Smugglers"
        ],
        vendor: 'teyvat',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 3
    },

  'teyvat_teyvat_echo_chime': {
        id: 'teyvat_teyvat_echo_chime',
        name: "Teyvat Echo Chime",
        description: "This chime, crafted from the fractured resonance of Archon’s wrath, vibrates with the memory of every elemental storm that has torn across Teyvat. When struck, it releases a sonic wave that amplifies elemental reactions—yet also amplifies the wielder’s emotional state, causing them to shout louder or fall silent. It is said that those who hear its echo feel the weight of the world’s forgotten gods.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 800,
        icon: '🎵',
        stock: 5,
        rarity: 'common',
        effects: [
            "Amplifies elemental reaction damage by 20%",
        "10% chance to trigger elemental echo effect (temporary buff or debuff)",
        "Causes slight dizziness after use (1s)",
        "Restores 20% stamina if used in conjunction with a vision holder",
        "Cannot be used in combat without a vision",
        "Lasts 30s after activation"
        ],
        vendor: 'teyvat',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 2
    },

  'teyvat_turbo_squid_torch': {
        id: 'teyvat_turbo_squid_torch',
        name: "Turbo Squid Torch",
        description: "A torch powered by inkopolis’ ink energy",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2000,
        icon: '🔥',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Deals 1d6 bonus damage to ink-based enemies",
        "Grants temporary ink absorption",
        "Can ignite ink-based terrain for 30 seconds",
        "May cause ink splatter on allies",
        "Only usable during ink warfare",
        "Crafted by: Bullet Bill Express",
        "Designed for inkopolis’ fashion shows"
        ],
        vendor: 'teyvat',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 4
    },

  'teyvat_void_touched_satchel': {
        id: 'teyvat_void_touched_satchel',
        name: "Void Touched Satchel",
        description: "",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🌀',
        stock: 7,
        rarity: 'uncommon',
        effects: [
            "Stores 3 elemental reactions per use",
        "When used near a dimensional rift triggers 10% chance to summon a minor void echo",
        "Loses 10% durability after each reaction use",
        "Can be enchanted with a vision holder’s sigil for 50% bonus reaction yield",
        "Slightly increases stamina regeneration while in the Liminal Void",
        "Shipped by: Goomba Ground Delivery"
        ],
        vendor: 'teyvat',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 4
    },

  'teyvat_wario_trophy': {
        id: 'teyvat_wario_trophy',
        name: "Wario Trophy",
        description: "A trophy forged from the soul of a defeated archon",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 8000,
        icon: '🏆',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants 1d8 bonus damage to all attacks for 3 rounds",
        "Consumes 1000 HP per use",
        "Causes temporary paralysis to enemies with elemental affinity",
        "Only usable once per battle",
        "Must be used in conjunction with WarioWare mechanics",
        "Crafted by: Bullet Bill Express",
        "Wario himself inscribed it with his signature profit maximizer"
        ],
        vendor: 'teyvat',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 10
    },

  'the_dk_crew_banana_bread_recipe': {
    id: 'the_dk_crew_banana_bread_recipe',
    name: "Recipe: The DK Crew Banana Bread ",
    description: "Moist bread from jungle bananas for monkey agility.",
    category: SHOP_CATEGORIES.services,
    price: 6000,
    icon: '🍌',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Mash and bake (40 min); eat to gain advantage on Dexterity (Acrobatics) for climbing (2 hours)",
        "Requires: Bananas; peelable fun",
        "Slippery peels as bonus traps",
        "Made by: DK Jungle Chefs"
    ],
    vendor: 'the_dk_crew_treehouse',
    shippedBy: 'Peel Pulp Page',
    levelRequirement: 5
},

  'the_dk_crew_banana_hoard': {
    id: 'the_dk_crew_banana_hoard',
    name: "DK Crew's Banana Hoard",
    description: "A single, magically-preserved banana from the legendary hoard. It's... just a banana, but it feels important.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 5000,
    icon: '🍌',
    stock: 50,
    rarity: 'uncommon',
    effects: [
        "Eating the banana heals 2d4 HP and grants +5ft speed for 1 hour",
        "Peel can be thrown: creatures who step on it must make a DEX save or fall prone",
        "May attract apes or angry Kremlings"
    ],
    vendor: 'The DK Crew',
    shippedBy: 'Barrel',
    levelRequirement: 1
},

  'the_dk_crew_barrel_mixer': {
    id: 'the_dk_crew_barrel_mixer',
    name: "The DK Crew Barrel Mixer ",
    description: "Barrel-shaped mixer for banana bread.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6000,
    icon: '🍌',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Mixes in barrel rolls; advantage on fruit mashing",
        "Monkey-proof; rolls for fun",
        "Leaks banana mush",
        "Made by: DK Barrelmakers"
    ],
    vendor: 'the_dk_crew_treehouse',
    shippedBy: 'Rolling Rumple Rig',
    levelRequirement: 5
},

  'the_dk_crew_barrel_roll_lesson_service': {
    id: 'the_dk_crew_barrel_roll_lesson_service',
    name: "The DK Crew Barrel Roll Lesson ",
    description: "Learn to dodge like a monkey.",
    category: SHOP_CATEGORIES.services,
    price: 9500,
    icon: '🌀',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Advantage on one Dexterity save next combat",
        "Includes banana: Heals 1d4 HP",
        "Lesson: 'Do a barrel roll!' – confusing",
        "Made by: DK Trainers"
    ],
    vendor: 'the_dk_crew_jungle',
    shippedBy: 'Barrel Delivery',
    levelRequirement: 5
},

  'the_dk_crew_jungle_vine_belt': {
    id: 'the_dk_crew_jungle_vine_belt',
    name: "The DK Crew Jungle Vine Belt ",
    description: "Belt made from tough vines for swinging.",
    category: SHOP_CATEGORIES.premium,
    price: 12500,
    icon: '👖',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Advantage on Athletics for swinging/climbing vines",
        "Belt holds bananas (minor healing snacks)",
        "Vines snag on rocks",
        "Made by: DK Vine-Weavers"
    ],
    vendor: 'the_dk_crew_treehouse',
    shippedBy: 'Banana Loop',
    levelRequirement: 5
},

  'the_edge_bakery_keychain': {
        id: 'the_edge_bakery_keychain',
        name: "Bakery Keychain",
        description: "A charm shaped like a croissant, worn by dough folk and spellcasters alike",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 250,
        icon: '🍞',
        stock: 10,
        rarity: 'common',
        effects: [
            "Restores 1 HP per use, but causes 1d2 temporary confusion",
        "Increases speed by 10% during magical or chaotic encounters",
        "Can be used to open doors in LEclaire Isle only",
        "Glows faintly when near Waluigi’s presence",
        "Consumes 1 point of sanity when used in Void Drifters",
        "Cannot be used in combat without being attuned to sugar magic"
        ],
        vendor: 'the_edge',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 2
    },

  'the_edge_chain_chomp_gear': {
        id: 'the_edge_chain_chomp_gear',
        name: "Chain Chomp Tether",
        description: "A weaponized chainsaw from the void’s most brutal creatures",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🔪',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Deals 3d8 slashing damage on hit",
        "25% chance to trigger a chainsaw burst that deals 2d6 damage to all adjacent enemies",
        "Requires attunement by a Chain Chomp operator",
        "When activated, temporarily grants +2 to all melee rolls for 3 rounds",
        "May cause the user to become temporarily magnetized to void matter",
        "Crafted by: Team Rocket",
        "Only usable in the presence of a Chain Chomp entity"
        ],
        vendor: 'the_edge',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 10
    },

  'the_edge_doughnut_hole_key': {
        id: 'the_edge_doughnut_hole_key',
        name: "Doughnut Hole Keychain",
        description: "A relic from the central void’s most dangerous anomaly",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 1500,
        icon: '🍩',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Grants 2d4 bonus to all rolls against void entities",
        "Grants a 10% chance to find a lost soul in the Doughnut Hole",
        "May cause the user to briefly experience cosmic déjà vu",
        "If used in the Doughnut Hole, grants temporary teleportation to nearest Void Node",
        "Crafted by: Warp Whistle Transit",
        "Can be fused with other materials to create new items"
        ],
        vendor: 'the_edge',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 3
    },

  'the_edge_dust_of_aegis': {
        id: 'the_edge_dust_of_aegis',
        name: "Dust of Aegis",
        description: "",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 750,
        icon: '🧪',
        stock: 15,
        rarity: 'uncommon',
        effects: [
            "Restores 200 HP and 100 MP",
        "Grants temporary immunity to psychic damage for 10 seconds",
        "Reduces all damage taken by 10% for 15 seconds",
        "Causes minor glitch in nearby enemies for 2 seconds (visual distortion only)",
        "Can be consumed only once per combat encounter",
        "Requires attunement with a Toad (Aegis Prison Break survivor)"
        ],
        vendor: 'the_edge',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 3
    },

  'the_edge_feywild_brew': {
        id: 'the_edge_feywild_brew',
        name: "Feywild Brew",
        description: "A liquid infused with echoes of forgotten dreams",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 150,
        icon: '🍷',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Restores 5 HP and 10% resistance to all damage",
        "Causes 1d4 temporary blindness for 1 round to enemies",
        "Triggers a 5% chance to teleport the user to a random location within 100 meters",
        "Only effective in Feywild dimensions",
        "Consumes 1d2 sanity points on failure",
        "Cannot be used if the user is under the influence of Void Drifters"
        ],
        vendor: 'the_edge',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 3
    },

  'the_edge_feywild_forged_ring': {
        id: 'the_edge_feywild_forged_ring',
        name: "Feywild Forged Ring",
        description: "A ring of pure eldritch energy, shaped by the last of the Feywild’s dream-weavers. It glows with the color of twilight and allows the wearer to step into the Feywild’s illusions—though the illusions may be so vivid they become permanent. It also amplifies charm and deception, but may cause the wearer to forget their own name in moments of overuse.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🌿',
        stock: 2,
        rarity: 'rare',
        effects: [
            "+2 to charm checks and deception rolls",
        "Grants 10% chance to enter a Feywild illusion for 1 round",
        "5% chance to forget one’s name or last memory",
        "Can be used by any class",
        "Requires attunement by a Feywild-born",
        "Crafted by: Liberated Toads"
        ],
        vendor: 'the_edge',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 7
    },

  'the_edge_gear_of_chaos': {
        id: 'the_edge_gear_of_chaos',
        name: "Gear of Chaos",
        description: "A relic of entropy that unravels logic",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🌀',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants +1 to all skill checks against logic or order based enemies",
        "Roll 1d6 at the start of combat; if 1 or 2, enemy’s next attack is randomized",
        "Causes minor disorientation to allies within 5 feet",
        "Can be attuned to a member of the Cosmic Jester cult",
        "Crafted by: Bob-omb Rush Delivery",
        "Only usable in void zones or glitchy dimensions"
        ],
        vendor: 'the_edge',
        shippedBy: 'Bob-omb Rush Delivery',
        levelRequirement: 6
    },

  'the_edge_glitch_core': {
        id: 'the_edge_glitch_core',
        name: "Glitch Core",
        description: "",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 12000,
        icon: '⚙',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Can be used to repair or upgrade void-infused equipment",
        "Increases all damage output by 20% for 5 seconds upon activation",
        "Triggers random glitches in enemies, causing them to teleport or explode for 3 seconds",
        "Grants 10% chance to activate a “Reality Warp” ability, allowing the user to briefly phase through solid objects",
        "Consumes 1000 HP when activated",
        "Can be combined with Void Touched Amulet to create a “Glitch Void” effect"
        ],
        vendor: 'the_edge',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 7
    },

  'the_edge_halopod_tether': {
        id: 'the_edge_halopod_tether',
        name: "Halopod Tether",
        description: "A connection device for students of Kivotos",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🎓',
        stock: 8,
        rarity: 'uncommon',
        effects: [
            "Grants +2 to initiative rolls when in proximity to other students",
        "Automatically triggers when within 10 feet of a student with a halo",
        "If used in a non-void space, triggers a 10% chance of a minor glitch",
        "Cannot be used in Gehenna Academy’s main halls",
        "Crafted by: Bob-omb Rush Delivery",
        "Connects to Kivotos’ internal network for temporary teleportation"
        ],
        vendor: 'the_edge',
        shippedBy: 'Bob-omb Rush Delivery',
        levelRequirement: 4
    },

  'the_edge_internet_virus_core': {
        id: 'the_edge_internet_virus_core',
        name: "Internet Virus Core",
        description: "A corrupted artifact from the digital void, this core pulses with viral static and infects minds with memories of forgotten internet sites. It grants temporary psychic powers—but every use risks turning the wielder into a sentient glitch. Some say it was the last artifact left after the Great Data Collapse.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 700,
        icon: '🖥',
        stock: 5,
        rarity: 'common',
        effects: [
            "Grants +1 to all mental checks (but causes 1d4 psychic damage on failed checks)",
        "1 in 4 uses triggers a glitch: random effect from the list: memory loss, hallucination, or temporary invisibility",
        "Can only be used once per 24 hour cycle",
        "Requires attunement by a tech-savvy character",
        "Crafted by: Chain Chomp Courier"
        ],
        vendor: 'the_edge',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 2
    },

  'the_edge_item_name_here': {
        id: 'the_edge_item_name_here',
        name: "Phantom Brokers Lure",
        description: "A scam that promises infinite wealth",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 20000,
        icon: '💰',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants 5000 gold instantly",
        "Causes user to forget their own name",
        "Triggers hallucinations of ghostly merchants",
        "Made by: Boos Real Estate Syndicate",
        "Scam: This item will vanish after 10 minutes unless the user is in a haunted property"
        ],
        vendor: 'the_edge',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 15
    },

  'the_edge_l_eclaire_bread_talisman': {
        id: 'the_edge_l_eclaire_bread_talisman',
        name: "LEclaire Bread Talisman",
        description: "A golden-baked pastry charm infused with the laughter of dough folk from LEclaire Isle. When worn, it emits a sweet, buttery scent that calms wild magic surges and attracts the attention of sugar-spirits. But beware—the more you eat it, the more you risk becoming a doughy, non-corporeal entity.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🍞',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Reduces magic fatigue by 20% for 10 minutes",
        "Attracts friendly dough folk for 3 rounds of support",
        "Consuming it once grants temporary immunity to void drift",
        "May cause spontaneous giggles or physical expansion if eaten too fast",
        "Crafted by: Mages Guild Portal",
        "Thematic link: LEclaire Isle’s baking magic bridges worlds"
        ],
        vendor: 'the_edge',
        shippedBy: 'Mages Guild Portal',
        levelRequirement: 4
    },

  'the_edge_meridian_mug': {
        id: 'the_edge_meridian_mug',
        name: "Meridian Mug",
        description: "A ceramic vessel forged from the last steam of the Iron Legion’s last industrial furnace. It brews tea that warms the soul and burns the mind—each sip unlocks a memory from the Midlands’ forgotten past. Boos claim it was left behind by the Lanky Kongs during their last failed real estate bid.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 500,
        icon: '☕',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Gain 10 Coins after consumption",
        "Grants temporary resistance to poison for 1 turn",
        "Causes mild hallucinations of forgotten cities for 2 turns",
        "Sips leave behind a faint echo of a forgotten battle cry",
        "Only usable once per day",
        "Crafted by: Dry Bones Dead Drop"
        ],
        vendor: 'the_edge',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 3
    },

  'the_edge_pianta_village_scam': {
        id: 'the_edge_pianta_village_scam',
        name: "Pianta Village Fortune Teller’s Goblet",
        description: "A goblet rumored to grant the drinker visions of the future—but only if they’re wearing mismatched socks. It’s filled with “liquid prophecy” that claims to reveal the path to freedom from the Pipe Network. In truth, it’s a cursed relic that makes the drinker’s limbs grow sticky, their thoughts echo in reverse, and their name is whispered by the void. The price? 50,000 gold. You’ll regret it.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 50000,
        icon: '🍷',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Grants 1d6 future vision for 1 minute",
        "Causes temporary reversal of speech and movement for 3 rounds",
        "Increases chance of being cursed by Void Drifters by 50%",
        "May cause physical entanglement with nearby objects",
        "Wears off after 30 minutes",
        "Crafted by: Pianta Village Envoys (scam)",
        "Thematic link: Exploits Pianta Village Independence event, but is a scam meant to lure in desperate souls"
        ],
        vendor: 'the_edge',
        shippedBy: 'Mages Guild Portal',
        levelRequirement: 10
    },

  'the_edge_ring_of_the_wyrm': {
        id: 'the_edge_ring_of_the_wyrm',
        name: "Ring of the Wyrm",
        description: "This cursed ring was forged by a broken elf who surrendered to the Wyrm’s power. It allows the wearer to speak in the language of gears and fire, but also causes mechanical limbs to twitch unnaturally. It was found in the belly of the Wyrm’s hollow core beneath the Valley of Bowser.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '⚙',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants +1 to all damage rolls against mechanical orcs",
        "Can summon a small mechanical wyrm for 1 turn",
        "Wears off after 3 hours of non-battle use",
        "Causes minor confusion to non-mechanical enemies",
        "Requires attunement by a mechanical expert"
        ],
        vendor: 'the_edge',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 7
    },

  'the_edge_scam_soul_charger': {
        id: 'the_edge_scam_soul_charger',
        name: "Soul Charger",
        description: "A glowing orb of pure energy that promises to “recharge your soul with cosmic power.” But it only works if you believe in it—after which it drains your sanity, leaving you screaming into the void. Boos have labeled it the “last thing you’ll ever need to buy.”",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 100000,
        icon: '⚡',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Charges 1d6 soul energy for 1 turn",
        "Triggers 5% chance to cause a reality glitch (random effect)",
        "Causes permanent sanity loss of 1d4 after use",
        "Cannot be used if character is currently in a void space",
        "If used during combat, opponent gains 1d6 bonus damage",
        "Crafted by: Dry Bones Dead Drop",
        "NOTE: This item is a scam. Do not buy. It is cursed. It will drain you. You will thank yourself later."
        ],
        vendor: 'the_edge',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 10
    },

  'the_edge_seal_fragment': {
        id: 'the_edge_seal_fragment',
        name: "Seal Fragment of Lothlórien",
        description: "One of seven ancient seals that once bound the Primordial Wyrm beneath the Valley of Bowser. Carved with elvish script and embedded with living crystal, this shard glows faintly when the seal is active. It can be used to activate the final seal or to sense nearby Wyrm energy.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 8000,
        icon: '🔮',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants +3 to all spellcasting rolls",
        "Can be combined with 3 other seal fragments to activate the final seal",
        "Causes the wearer to feel a deep connection to the forest realm",
        "If used in a battle, reduces enemy defense by 1 for 1 round",
        "Can be used to sense nearby Wyrm energy (1d4 range)"
        ],
        vendor: 'the_edge',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 10
    },

  'the_edge_shadowfell_key': {
        id: 'the_edge_shadowfell_key',
        name: "Shadowfell Key",
        description: "A key that unlocks doors to the shadow realm",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 1000,
        icon: '🔑',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Opens any door in the Shadowfell dimension",
        "Grants 2d4 shadow damage on first strike",
        "Causes 1d6 temporary blindness to the user after use",
        "Can be enchanted with void magic for 30 seconds",
        "Requires attunement to a shadow caster",
        "Cannot be used in LEclaire Isle unless the key is blessed with sugar magic"
        ],
        vendor: 'the_edge',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 6
    },

  'the_edge_void_drifter_gear': {
        id: 'the_edge_void_drifter_gear',
        name: "Void Drifter Gauntlets",
        description: "Armor for the edge of reality’s collapse",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '⚔',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants +3 to all melee attacks in void zones",
        "+10% damage against entities with negative health",
        "Slight chance to cause nearby enemies to glitch on hit",
        "Wears out after 30 combat uses",
        "Crafted by: Team Rocket",
        "Requires attunement by a Void Drifter"
        ],
        vendor: 'the_edge',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 7
    },

  'the_edge_void_drifter_satchel': {
        id: 'the_edge_void_drifter_satchel',
        name: "Void Drifter Satchel",
        description: "A bag that stores voids and glitches",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5000,
        icon: '🌀',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Stores up to 3 void fragments that can be used to trigger area effects",
        "Each fragment grants +2 to all damage rolls for 1 round",
        "When opened in a glitch zone, triggers a 1d4 random effect",
        "Cannot be used in non-glitch zones without penalty",
        "Requires attunement by a Void Drifter or member of the Cosmic Jester cult",
        "Crafted by: Abyssal Court",
        "Only usable by characters with Void Drifter heritage or affiliation"
        ],
        vendor: 'the_edge',
        shippedBy: 'Bob-omb Rush Delivery',
        levelRequirement: 7
    },

  'the_edge_waluigi_soul_tap': {
        id: 'the_edge_waluigi_soul_tap',
        name: "Waluigi Soul Tap",
        description: "A device that channels the chaotic energy of Waluigi’s spirit",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 30000,
        icon: '🎮',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Grants 1d6 bonus damage to all attacks",
        "10% chance to trigger a Waluigi-inspired rampage",
        "Causes 1d8 psychic damage to enemies with 5+ HP",
        "Wears the user into a minor glitch state after 5 minutes",
        "Cannot be used in LEclaire Isle without attunement to sugar magic",
        "Only usable in Void Drifters or Shadowfell dimensions"
        ],
        vendor: 'the_edge',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 10
    },

  'the_hammer_used_to_forge': {
        id: 'the_hammer_used_to_forge',
        name: "Smithy's Sledge",
        description: "The hammer used to forge the Weapon World. Can craft anything.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 420000,
        icon: '🔨',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Weapon: 3d12 Bludgeoning + 2d6 Thunder",
            "Crafting: Create magic items in 1 hour instead of days",
            "Can turn living creatures into weapons (CON save DC 20)"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Anvil',
        levelRequirement: 12
    },

  'the_heart_of_a_weaponized': {
        id: 'the_heart_of_a_weaponized',
        name: "Chain Chomp Core",
        description: "The heart of a weaponized Chain Chomp, now a weapon of chaotic power",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 50000,
        icon: '🐍',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Deals 3d8 damage on hit",
        "Causes enemies to flee after being hit",
        "Grants +2 to all rolls against mechanical foes",
        "Consumes 10 HP per use",
        "Can be used as a ranged weapon",
        "Crafted by: Red Winter & Kremling Smuggle Run",
        "Faction: Noki & Koopa Control",
        "Thematic: Weaponized Chain Chomps in Gehenna Academy",
        "Requires attunement with chaos energy"
        ],
        vendor: 'kivotos',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 12
    },

  'the_iron_fists_fist_forge_griddle': {
    id: 'the_iron_fists_fist_forge_griddle',
    name: "The Iron Fists Fist Forge Griddle",
    description: "Griddle heated by fist strikes for smoothies? Wait, pancakes.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7000,
    icon: '🥞',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Heats with impact; +1 to Strength cooking",
        "Fist-proof durable",
        "Bruises hands if overstruck",
        "Made by: Fist Forgers"
    ],
    vendor: 'the_iron_fists_dojo',
    shippedBy: 'Punch Pan Parcel',
    levelRequirement: 5
},

  'the_iron_fists_fist_fuel_smoothie_recipe': {
    id: 'the_iron_fists_fist_fuel_smoothie_recipe',
    name: "Recipe: The Iron Fists Fist Fuel Smoothie",
    description: "Protein-packed smoothie for martial prowess.",
    category: SHOP_CATEGORIES.services,
    price: 7000,
    icon: '🥤',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Blend fruits and protein (10 min); drink to gain +1 to unarmed attacks for 2 hours",
        "Requires: Fruits and nuts; punchy",
        "Fists feel iron-strong",
        "Made by: Fist Monks"
    ],
    vendor: 'the_iron_fists_dojo',
    shippedBy: 'Muscle Mix Manual',
    levelRequirement: 5
},

  'the_iron_fists_monk_robe': {
    id: 'the_iron_fists_monk_robe',
    name: "The Iron Fists Monk Robe",
    description: "Simple robe for martial artists.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15000,
    icon: '👘',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Advantage on Dexterity (Acrobatics) for flips",
        "+1 to unarmed strikes",
        "Robe flows but tangles feet sometimes",
        "Made by: Fist Monks"
    ],
    vendor: 'the_iron_fists_dojo',
    shippedBy: 'Zen Zip',
    levelRequirement: 5
},

  'the_iron_fists_monk_weapon_leasing': {
    id: 'the_iron_fists_monk_weapon_leasing',
    name: "The Iron Fists Monk Weapon Leasing",
    description: "Rent a monk weapon with option to buy.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 16500,
    icon: '💪',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Gain a +1 monk weapon for 7 days; can buy for 20000 gp afterward",
        "Weapon is 'gently used' by previous monk (has their initials carved)",
        "Returning it late: Weapon becomes cursed and lectures you on discipline",
        "Made by: The Iron Fists Dojo"
    ],
    vendor: 'the_iron_fists',
    shippedBy: 'Monk Courier (on foot)',
    levelRequirement: 6
},

  'the_iron_fists_punch_glove_premium': {
    id: 'the_iron_fists_punch_glove_premium',
    name: "The Iron Fists Punch Glove (Premium)",
    description: "Enhance fisticuffs.",
    category: SHOP_CATEGORIES.premium,
    price: 16500,
    icon: '🥊',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Unarmed +1d4 damage once per day",
        "+1 Athletics for grapples",
        "Glove squeaks on hit",
        "Made by: Fist Fighters"
    ],
    vendor: 'the_iron_fists_dojo',
    shippedBy: 'Padded Mitt',
    levelRequirement: 5
},

  'the_onyx_hand_gloved_fingers': {
    id: 'the_onyx_hand_gloved_fingers',
    name: "The Onyx Hand Gloved Fingers",
    description: "Sleek black gloves for shadowy dealings.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 14500,
    icon: '🧤',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Advantage on Sleight of Hand for pickpocketing",
        "Gloves leave no fingerprints",
        "Sticky residue from shadows (minor grip issues)",
        "Made by: Onyx Thieves"
    ],
    vendor: 'the_onyx_hand_guild',
    shippedBy: 'Shadow Stitch',
    levelRequirement: 5
},

  'the_onyx_hand_recipe_shadow_soup': {
    id: 'the_onyx_hand_recipe_shadow_soup',
    name: "Recipe: The Onyx Hand Shadow Soup",
    description: "Soup that you eat in darkness.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 14500,
    icon: '📜',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Eating in darkness grants advantage on Stealth checks for 1 hour",
        "You become one with shadows: disadvantage on Charisma checks in bright light",
        "Soup is invisible (you must find it by smell)",
        "Made by: The Onyx Hand Cooks"
    ],
    vendor: 'the_onyx_hand',
    shippedBy: 'Shadow Drop',
    levelRequirement: 7
},

  'the_onyx_hand_shadow_pie_recipe': {
    id: 'the_onyx_hand_shadow_pie_recipe',
    name: "Recipe: The Onyx Hand Shadow Pie ",
    description: "Mysterious pie that hides flavors – like shadows!",
    category: SHOP_CATEGORIES.services,
    price: 6500,
    icon: '🥧',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Bake with dark fruits (50 min); eat to gain minor invisibility in dim light (1 minute, once per pie)",
        "Requires: Blackberries; tastes surprisingly good",
        "Pie 'disappears' if left out (spoils fast)",
        "Made by: Shadow Chefs"
    ],
    vendor: 'the_onyx_hand_guild',
    shippedBy: 'Dark Crust Delivery',
    levelRequirement: 5
},

  'the_onyx_hand_shadow_puppet_service': {
    id: 'the_onyx_hand_shadow_puppet_service',
    name: "The Onyx Hand Shadow Puppet Service",
    description: "Create illusory distractions with hand shadows.",
    category: SHOP_CATEGORIES.services,
    price: 10000,
    icon: '🖐️',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Once per day: Create a distracting shadow (as Minor Illusion, but mobile)",
        "Advantage on Sleight of Hand during distraction",
        "Shadows might tell dad jokes if overused",
        "Made by: Onyx Puppeteers"
    ],
    vendor: 'the_onyx_hand_theater',
    shippedBy: 'Dark Hand Delivery',
    levelRequirement: 5
},

  'the_onyx_hand_shadow_stirrer': {
    id: 'the_onyx_hand_shadow_stirrer',
    name: "The Onyx Hand Shadow Stirrer ",
    description: "Stirring spoon that stirs shadows for mysterious pies.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6000,
    icon: '🥧',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Stirs without light; +1 to cooking in dark for shadow recipes",
        "Adds eerie flavor (minor illusion effect)",
        "Spoon vanishes briefly",
        "Made by: Onyx Enchanters"
    ],
    vendor: 'the_onyx_hand_guild',
    shippedBy: 'Shadow Spoon Sheath',
    levelRequirement: 5
},

  'the_onyx_hand_stealth_hoodie': {
    id: 'the_onyx_hand_stealth_hoodie',
    name: "The Onyx Hand Stealth Hoodie",
    description: "A hoodie that makes you look unimportant.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18500,
    icon: '👕',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Advantage on Stealth in urban areas (you blend in with NPCs)",
        "Hoodie has terrible Wi-Fi: disadvantage on checks requiring communication",
        "Pockets are bigger inside: can hold 10 lbs of stuff (but you forget what you put in there)",
        "Made by: The Onyx Hand Tailors"
    ],
    vendor: 'the_onyx_hand',
    shippedBy: 'Shadow Drop',
    levelRequirement: 6
},

  'the_toad_cult_frog_hop_funnel': {
    id: 'the_toad_cult_frog_hop_funnel',
    name: "The Toad Cult Frog Hop Funnel ",
    description: "Funnel that 'hops' liquids for fritters.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5500,
    icon: '🍤',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Funnels with bounce; advantage on amphibian recipes",
        "Hops when poured",
        "Spills if hopped too much",
        "Made by: Toad Toolers"
    ],
    vendor: 'the_toad_cult_bog',
    shippedBy: 'Hop Funnel Haul',
    levelRequirement: 5
},

  'the_toad_cult_frog_leap_boots_service': {
    id: 'the_toad_cult_frog_leap_boots_service',
    name: "The Toad Cult Frog Leap Boots Service",
    description: "Hop like a toad.",
    category: SHOP_CATEGORIES.services,
    price: 9000,
    icon: '👢',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Leap 15ft once per day",
        "Advantage on jumps",
        "Boots ribbit on landing",
        "Made by: Toad Worshippers"
    ],
    vendor: 'the_toad_cult_bog',
    shippedBy: 'Slimy Socks',
    levelRequirement: 5
},

  'the_toad_cult_frog_legs_fritters_recipe': {
    id: 'the_toad_cult_frog_legs_fritters_recipe',
    name: "Recipe: The Toad Cult Frog Legs Fritters ",
    description: "Crispy fritters for hoppy meals.",
    category: SHOP_CATEGORIES.services,
    price: 5500,
    icon: '🍤',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Fry legs (15 min); eat to gain +10 ft jump distance for 1 hour",
        "Requires: Frog legs (or veggies); ribbit-y",
        "Toads hop away",
        "Made by: Cult Fryers"
    ],
    vendor: 'the_toad_cult_bog',
    shippedBy: 'Hoppin Hot Handbook',
    levelRequirement: 5
},

  'the_toad_cult_slime_slippers': {
    id: 'the_toad_cult_slime_slippers',
    name: "The Toad Cult Slime Slippers ",
    description: "Squishy slippers for bog hopping.",
    category: SHOP_CATEGORIES.premium,
    price: 9500,
    icon: '👡',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Advantage on Dexterity saves in mud",
        "Slippers leave slime trails (slippery for foes)",
        "Squish loudly",
        "Made by: Toad Cultists"
    ],
    vendor: 'the_toad_cult_bog',
    shippedBy: 'Slimy Sole',
    levelRequirement: 5
},

  'the_toad_gang_marsh_muck_boots': {
    id: 'the_toad_gang_marsh_muck_boots',
    name: "The Toad Gang Marsh Muck Boots",
    description: "Boots for slogging through swamps.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12000,
    icon: '👢',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Ignore mud difficult terrain",
        "+1 to Strength (Athletics) in bogs",
        "Boots squelch loudly",
        "Made by: Gang Mudders"
    ],
    vendor: 'the_toad_gang_swamp',
    shippedBy: 'Muck Mud',
    levelRequirement: 5
},

  'the_toad_gang_marsh_muck_strainer': {
    id: 'the_toad_gang_marsh_muck_strainer',
    name: "The Toad Gang Marsh Muck Strainer",
    description: "Strainer for filtering bog ingredients.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5500,
    icon: '🍲',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Strains muck; advantage on swamp cooking",
        "Bog-resistant",
        "Clogs with mud",
        "Made by: Gang Strainers"
    ],
    vendor: 'the_toad_gang_hideout',
    shippedBy: 'Muck Mesh Mail',
    levelRequirement: 5
},

  'the_toad_gang_toad_in_the_hole_recipe': {
    id: 'the_toad_gang_toad_in_the_hole_recipe',
    name: "Recipe: The Toad Gang Toad in the Hole",
    description: "Batter pudding with 'toad' sausages for bog bravery.",
    category: SHOP_CATEGORIES.services,
    price: 6000,
    icon: '🥧',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Bake batter (40 min); eat to gain advantage on saves vs. fear in swamps for 2 hours",
        "Requires: Sausages; hole-y",
        "Gang hops to it",
        "Made by: Toad Gang"
    ],
    vendor: 'the_toad_gang_hideout',
    shippedBy: 'Hole-y Batter Book',
    levelRequirement: 5
},

  'the_toad_gang_toadstool_identification': {
    id: 'the_toad_gang_toadstool_identification',
    name: "The Toad Gang Toadstool Identification",
    description: "Learn which toadstools are which.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 7500,
    icon: '🍄',
    stock: 10,
    rarity: 'common',
    effects: [
        "Advantage on Nature checks about fungi for 30 days",
        "You can identify toadstools by licking them (don't recommend)",
        "Toad Gang expects protection money (100 gp per week)",
        "Made by: The Toad Gang Mycologists"
    ],
    vendor: 'the_toad_gang',
    shippedBy: 'Toad Hop',
    levelRequirement: 5
},

  'the_toad_gang_toadstool_mush_premium': {
    id: 'the_toad_gang_toadstool_mush_premium',
    name: "The Toad Gang Toadstool Mush (Premium)",
    description: "Fungus for hallucinations or heals.",
    category: SHOP_CATEGORIES.premium,
    price: 11500,
    icon: '🍄',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Eat: Heal 1d6 or illusion (50/50)",
        "Advantage on Survival in swamps",
        "Mush trips you up",
        "Made by: Gang Foragers"
    ],
    vendor: 'the_toad_gang_hideout',
    shippedBy: 'Mush Jar',
    levelRequirement: 5
},

  'the_unchained_chain_breaker_tool_service': {
    id: 'the_unchained_chain_breaker_tool_service',
    name: "The Unchained Chain Breaker Tool Service",
    description: "Escape bonds easily.",
    category: SHOP_CATEGORIES.services,
    price: 14500,
    icon: '🔗',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Break manacles: Advantage on escape checks",
        "1 use per tool",
        "Tool bends if overused",
        "Made by: Freedom Fighters"
    ],
    vendor: 'the_unchained_camp',
    shippedBy: 'Lockpick Kit',
    levelRequirement: 5
},

  'the_unchained_freedom_chains_cuffs': {
    id: 'the_unchained_freedom_chains_cuffs',
    name: "The Unchained Freedom Chains Cuffs ",
    description: "Iron cuffs turned into stylish bracelets.",
    category: SHOP_CATEGORIES.premium,
    price: 12000,
    icon: '📿',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Advantage on saves vs. restraint",
        "Cuffs symbolize rebellion (+1 Inspiration)",
        "Clank noisily",
        "Made by: Unchained Smiths"
    ],
    vendor: 'the_unchained_fort',
    shippedBy: 'Broken Link',
    levelRequirement: 5
},

  'the_unchained_liberty_fruit_salad_recipe': {
    id: 'the_unchained_liberty_fruit_salad_recipe',
    name: "Recipe: The Unchained Liberty Fruit Salad ",
    description: "Free-range fruit salad for liberated palates.",
    category: SHOP_CATEGORIES.services,
    price: 5500,
    icon: '🥗',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Toss free fruits (10 min); eat to gain +1 to saves vs. chains/restraints for 2 hours",
        "Requires: Wild fruits; freedom flavor",
        "Breaks metaphorical bonds",
        "Made by: Unchained Foragers"
    ],
    vendor: 'the_unchained_camp',
    shippedBy: 'Free Fruit Folio',
    levelRequirement: 5
},

  'the_unchained_liberty_loaf_pan': {
    id: 'the_unchained_liberty_loaf_pan',
    name: "The Unchained Liberty Loaf Pan ",
    description: "Pan for free-form loaves without chains.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5500,
    icon: '🍞',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Bakes free shapes; +1 to creative cooking",
        "No sticking (freedom from pans)",
        "Pan 'breaks' molds",
        "Made by: Unchained Bakers"
    ],
    vendor: 'the_unchained_camp',
    shippedBy: 'Free Form Fold',
    levelRequirement: 5
},

  'thick_gumbo_with_crawfish_and': {
    id: 'thick_gumbo_with_crawfish_and',
    name: "Recipe: Lizardmen Swamp Gumbo",
    description: "Thick gumbo with crawfish and okra for watery resilience.",
    category: SHOP_CATEGORIES.services,
    price: 7000,
    icon: '🍲',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Simmer in pot (1 hour); eat to gain advantage on Swimming checks and resistance to disease for 4 hours",
        "Requires: Swamp ingredients; flavorful mud",
        "Lizards approve – +1 Animal Handling",
        "Made by: Lizard Chefs"
    ],
    vendor: 'lizardmen_village',
    shippedBy: 'Boggy Broth Book',
    levelRequirement: 5
},

  'thin_wafers_that_expand_in': {
    id: 'thin_wafers_that_expand_in',
    name: "Wario's  Wafer Cookies",
    description: "Thin wafers that 'expand' in your stomach.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4300,
    icon: '🍪',
    stock: 13,
    rarity: 'common',
    effects: [
        "Eat for temporary +1 Constitution (full feeling)",
        "Wafers bloat: disadvantage on Dex after",
        "Cookie fans: advantage on baking Persuasion",
        "Made by: Wario Snacks"
    ],
    vendor: 'wario_land',
    shippedBy: 'Crunchy Crate',
    levelRequirement: 4
},

  'this_amulet_was_forged_in': {
        id: 'this_amulet_was_forged_in',
        name: "Void Touched Amulet",
        description: "This amulet was forged in the heart of the Shadowfell, where the void speaks in whispers of forgotten things. It allows the wearer to briefly step into the void and see the truth behind illusions, but at the cost of their own sanity. Worn by the Onyx Hand, it is said to be the only thing that can break the curse of the Eternal Night.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 15000,
        icon: '🌑',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants 1 round of invisibility and 100% accuracy in combat",
        "Allows wearer to see the truth behind illusions for 1 round",
        "Causes temporary insanity if used more than 3 times",
        "Can be used to open a portal to the Shadowfell",
        "Requires attunement by a vampire or shadow-walker",
        "Can be used to destroy a shadow entity if wielded by a soul-trader"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Noki Coral Fleet',
        levelRequirement: 10
    },

  'this_amulet_was_recovered_from': {
        id: 'this_amulet_was_recovered_from',
        name: "Void Touched Amulet",
        description: "This amulet was recovered from the ruins of the Void Court, where time and magic collide. It hums with the energy of forgotten dimensions, allowing the wearer to briefly see through the veil of reality. But every use risks unraveling the fabric of time, causing minor temporal fractures.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5000,
        icon: '⏳',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants +1d4 to all magic damage rolls",
        "Causes 1d2 temporary disorientation after each use",
        "Requires attunement to a sacred beast for full effect",
        "Wearer must make a Perception check or be exposed to temporal echoes",
        "Cannot be used during a Mages Guild inspection",
        "If used while under duress, it may trigger a random time loop"
        ],
        vendor: 'hyrule',
        shippedBy: 'Pipe Express',
        levelRequirement: 7
    },

  'this_amulet_was_unearthed_from': {
        id: 'this_amulet_was_unearthed_from',
        name: "Void Touched Amulet",
        description: "This amulet was unearthed from the edge of the crumbling Void, where reality bleeds into the world. It pulses with a cold, rhythmic light and seems to know when the world is thinning. Wearers report seeing phantom shapes in the mist—but some say they’ve been seen by the Void itself.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7000,
        icon: '🌑',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Reduces damage taken from reality-leaking effects by 20%",
        "Increases chance of detecting hidden rifts by 10%",
        "1d4 Void Surge damage on failed saves against reality-warping foes",
        "Slightly slows movement while in a Void-adjacent zone",
        "Wears out after 10 uses if exposed to too much Void energy",
        "Crafted by the Trinity General’s Void Research Division"
        ],
        vendor: 'connectopia',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 8
    },

  'this_obsidian_key_was_forged': {
        id: 'this_obsidian_key_was_forged',
        name: "Onyx Hand Key",
        description: "This obsidian key was forged by the last surviving member of the Onyx Hand before their ban by the Regal Empire. It unlocks the hidden vault beneath the Shadowfell’s deepest root, where Orangus Cornelius hides his most dangerous artifacts. The key vibrates with suppressed magic, and if wielded by someone who believes in the Regal Empire’s laws, it may shatter.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🔑',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Unlocks hidden vaults in Shadowfell or Earth Land zones",
        "Causes temporary blindness if wielded by a non-believer in the Supernatural Sovereignty Act",
        "Grants +3 to Diplomacy checks against Onyx Hand factions",
        "May trigger a memory of the Onyx Hand’s betrayal if used improperly",
        "Thematic link: directly connects to the current political event: Supernatural Sovereignty Act vote (81-30)",
        "Crafted by: Vampire Covenant (secretly)"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Cheep Cheep Shipping',
        levelRequirement: 7
    },

  'this_tiny_pendant_holds_the': {
        id: 'this_tiny_pendant_holds_the',
        name: "Shadowfell Keychain",
        description: "This tiny pendant holds the key to a forgotten doorway between Equestria and the Shadowfell. It glows faintly when a soul is near the edge of death, guiding lost ponies through the veil. Carrying it grants a glimpse into the eternal night—though the visions may not be kind.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 800,
        icon: '🕯',
        stock: 1,
        rarity: 'uncommon',
        effects: [
            "Grants 10% chance to see a shadowy vision during combat",
        "When used near haunted properties, reveals hidden paths or traps",
        "May trigger a 1d4 Soul Drain if used during a vampire encounter",
        "Only usable by ponies with at least 30% shadow affinity",
        "Crafted by: Paratroopa Air"
        ],
        vendor: 'equestria',
        shippedBy: 'Paratroopa Air',
        levelRequirement: 3
    },

  'thunder_leaf': {
    id: 'thunder_leaf',
    name: "Thunder Leaf",
    description: "A crackling leaf that tingles your fingers and turns kicks into lightning.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 21000,
    icon: '🍃',
    stock: 6,
    rarity: 'epic',
    effects: [
        "Single Use: For 1 minute, melee attacks deal +1d8 Lightning and gain advantage on Acrobatics",
        "After use, suffer 1d6 shock (withdrawal)",
        "Sparks can ignite flammable materials"
    ],
    vendor: 'storm_seller',
    shippedBy: 'Porcelain Jar',
    levelRequirement: 7
},

  'thunder_rage': {
        id: 'thunder_rage',
        name: "Thunder Rage",
        description: "Concentrated storm in a bottle. Shake vigorously and throw.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 28000,
        icon: '⚡',
        stock: 5,
        rarity: 'uncommon',
        effects: ["All enemies within 20ft take 4d6 Lightning damage", "DEX save DC 14 for half"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Rubber-Lined Box',
        levelRequirement: 4
    },

  'thwomp_glove': {
    id: 'thwomp_glove',
    name: "Thwomp's Crushing Glove",
    description: "A stone gauntlet mimicking a Thwomp's fist. For when you need to slam doors... literally.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 19000,
    icon: '👊',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Unarmed strikes deal 2d6 Bludgeoning",
        "On hit: Push target 10ft",
        "Once per short rest: Slam for 4d6 in 5ft radius",
        "Disadvantage on Sleight of Hand checks"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Iron Chest',
    levelRequirement: 5
},

  'thwomp_statue': {
    id: 'thwomp_statue',
    name: "Thwomp Statue",
    description: "A miniature Thwomp that crushes traps or doors.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 11000,
    icon: '🪨',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Place: Crush object (4d10 bludgeoning)",
        "Single Use, then statue crumbles",
        "Heavy (50lbs)"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Stone Delivery',
    levelRequirement: 3
},

  'time_acceleration_chamber': {
    id: 'time_acceleration_chamber',
    name: "Time Acceleration Chamber (Permanent)",
    description: "A magical chamber where 1 day inside = 1 year outside. Perfect for training and aging items.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 850000,
    icon: '⏰',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "1 day of training = 1 year of real-world progress (Experience/skills/aging)",
        "Can store up to 6 people at once",
        "Exiting chamber causes disorientation for 1d4 hours",
        "Maintenance: 10,000 gp per year to keep functioning"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Installed on-site',
    levelRequirement: 12
},

  'time_lord_chronometer': {
    id: 'time_lord_chronometer',
    name: "Time Lord Chronometer",
    description: "A pocket watch that controls all of time.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 85000000,
    icon: '🕰️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Stop, reverse, or fast-forward time arbitrarily (no concentration, no save)",
        "Can create paradoxes without consequence (you're immune to paradox damage)",
        "Made by: The Clockmaker"
    ],
    vendor: 'temporality_inc',
    shippedBy: 'Time Loop Delivery',
    levelRequirement: 110
},

  'time_sand_hourglass': {
    id: 'time_sand_hourglass',
    name: "Hourglass of Stilled Seconds",
    description: "A glass hourglass filled with moonlight sand. Slows or rewinds fleeting moments.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 60000,
    icon: '⏳',
    stock: 1,
    rarity: 'epic',
    effects: [
        "3 charges",
        "Spend 1 charge as a reaction to grant +10 to a single d20 roll (rewind a failure)",
        "Spend 3 charges to rewind the last 6 seconds of combat (players keep memories)",
        "Recharges 1 charge per full moon"
    ],
    vendor: 'lunar_auction',
    shippedBy: 'Hermetic Case',
    levelRequirement: 12
},

  'timeless_sand': {
    id: 'timeless_sand',
    name: "Timeless Sand",
    description: "A jar of sand that never runs out — it flows backward when touched.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 75000,
    icon: '⏳',
    stock: 1,
    rarity: 'epic',
    effects: [
        "Sprinkle: reverse time for 1 minute for a single object or creature",
        "Cannot affect living beings for more than 10 seconds",
        "Each use ages the user 1d4 days"
    ],
    vendor: 'lunar_auction',
    shippedBy: 'Crystal Jar',
    levelRequirement: 9
},

  'toad_cap': {
    id: 'toad_cap',
    name: "Toad Cap",
    description: "A cap that grants minor healing and cheer.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4000,
    icon: '🍄',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Once per day: Heal 1d4 HP to self or ally",
        "+1 to Charisma checks",
        "Spots change color with mood"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Cap Box',
    levelRequirement: 1
},

  'toad_cult_shrine_key': {
    id: 'toad_cult_shrine_key',
    name: "Toad Cult Shrine Key",
    description: "A large, ornate brass key. It opens a hidden shrine and grants a minor blessing.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 24000,
    icon: '🗝️',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Opens a hidden Toad Shrine (location provided upon purchase)",
        "Inside, you can receive a blessing: +1 to all checks for 8 hours (once per visit)",
        "The shrine is a neutral ground; no violence is permitted inside"
    ],
    vendor: 'the_toad_cult',
    shippedBy: 'Toad-in-a-Box',
    levelRequirement: 5
},

  'toad_house_cookie': {
    id: 'toad_house_cookie',
    name: "Toad House Power Cookie",
    description: "A star-shaped cookie that tastes like victory. Baked by Toadette herself.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 5000,
    icon: '🍪',
    stock: 15,
    rarity: 'uncommon',
    effects: [
        "Eat: Gain 1d10 temporary HP",
        "Advantage on next saving throw",
        "Cookie crumbles into star shapes",
        "You feel optimistic for 1 hour"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Cookie Tin',
    levelRequirement: 1
},

  'toad_house_voucher': {
        id: 'toad_house_voucher',
        name: "Toad House Voucher",
        description: "A voucher for one night at any official Toad House. Full rest, hot meal, and guaranteed safety.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 45000,
        icon: '🏠',
        stock: 200,
        rarity: 'common',
        effects: [
            "Full long rest benefits",
            "Remove all exhaustion",
            "Hot meal included",
            "Secure storage for belongings"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Instant (Digital Voucher)',
        levelRequirement: 1
    },

  'toadette_bow': {
    id: 'toadette_bow',
    name: "Toadette's Pink Bow",
    description: "A giant pink bow that boosts charisma. Makes you feel adorable and powerful.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6000,
    icon: '🎀',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "+2 to CHA (Persuasion) checks",
        "Advantage on Performance (dance)",
        "Bow squeaks when you're nervous",
        "Mushroom people trust you more"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Gift Box',
    levelRequirement: 1
},

  'toadette_tea_set': {
    id: 'toadette_tea_set',
    name: "Toadette’s Calming Tea Set",
    description: "Brew a cuppa and forget your troubles. Or become obsessed with tea etiquette.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 11500,
    icon: '☕',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Drinking tea restores 1d8 HP and removes Frightened condition",
        "Must perform full 1-minute tea ceremony to activate (cannot be rushed)",
        "After 3 cups, gain +5 to Persuasion with Toads, -5 with Koopas (they hate tea time)",
        "Teapot occasionally sings showtunes"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Steam-Powered Trolley',
    levelRequirement: 1
},

  'toadstool_tea_set': {
    id: 'toadstool_tea_set',
    name: "Toadstool Tea Set",
    description: "A porcelain set infused with minor mushroom magic. Brews potions of dubious origin.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 13000,
    icon: '🍵',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Brew 1 potion per long rest (roll 1d6: 1-2 Heal 2d4, 3-4 Poison 1d6, 5-6 Invisibility 10min)",
        "+1 to Charisma (Persuasion) while sipping",
        "Set whispers Toad facts during tea time",
        "Breaks if used for coffee"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Tea Crate',
    levelRequirement: 1
},

  'tomb_king_khopesh': {
    id: 'tomb_king_khopesh',
    name: "Tomb King Khopesh",
    description: "A bronze sickle-sword etched with curses. It hums with the souls of defeated enemies.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 40000,
    icon: '⚔️',
    stock: 3,
    rarity: 'rare',
    effects: [
        "On hit: Target must make DC 14 CON save or be Cursed (disadvantage on attack rolls)",
        "While cursed, you gain +1d4 necrotic damage on attacks against them",
        "Curse lasts until dispelled or target rests for 8 hours"
    ],
    vendor: 'king_of_tombs',
    shippedBy: 'Sarcophagus Delivery',
    levelRequirement: 5
},

  'tomb_kings_ancestral_consultation': {
    id: 'tomb_kings_ancestral_consultation',
    name: "Tomb Kings Ancestral Consultation",
    description: "Ask your ancestors for advice (they're tired).",
    category: SHOP_CATEGORIES.SERVICES,
    price: 12500,
    icon: '💀',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Speak with dead ancestor who gives vague, annoyed advice",
        "Advantage on one History check per day for 7 days",
        "Ancestor may ask you to do their unfinished chores (minor quest hook)",
        "Made by: Tomb Kings Necro-Customer Service"
    ],
    vendor: 'tomb_kings',
    shippedBy: 'Sarcophagus Delivery',
    levelRequirement: 5
},

  'tomb_kings_ancient_preservation_jar': {
    id: 'tomb_kings_ancient_preservation_jar',
    name: "Tomb Kings Ancient Preservation Jar",
    description: "Preserves food for eternity, or at least a month.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 13500,
    icon: '🏺',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Preserves any cooked meal for 30 days (magical mummification)",
        "Food tastes like dust and old linen (disadvantage on Charisma while eating)",
        "Jar whispers ancient secrets: advantage on one History check per day",
        "Made by: Tomb Kings Preservationists"
    ],
    vendor: 'tomb_kings',
    shippedBy: 'Sarcophagus Delivery',
    levelRequirement: 5
},

  'tomb_kings_army_reanimation': {
        id: 'tomb_kings_army_reanimation',
        name: "Tomb Kings Mass Reanimation Ritual (Local)",
        description: "A powerful ritual that instantly raises all corpses in a 1-mile radius as loyal undead troops.",
        category: SHOP_CATEGORIES.forbidden,
        price: 550000,
        icon: '💀',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Raises 1d6 x 100 undead troops (CR 1/8, loyal to the caster)",
        "Ritual takes 12 hours and requires a large necromantic focus",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Dark Summoning',
        levelRequirement: 16
    },

  'tomb_kings_bone_golem_heart': {
        id: 'tomb_kings_bone_golem_heart',
        name: "Tomb Kings Bone Golem Heart (Dormant)",
        description: "A magically charged femur required to power a large skeletal construct.",
        category: SHOP_CATEGORIES.premium,
        price: 180000,
        icon: '🦴',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Used to animate one Bone Golem (CR 8) permanently",
        "Golem serves the heart's current bearer",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Lead Casket',
        levelRequirement: 14
    },

  'tomb_kings_canopic_collection': {
        id: 'tomb_kings_canopic_collection',
        name: "Tomb Kings Canopic Collection (Standard)",
        description: "A set of 4 jars that safely store the organs of a high-ranking noble, ensuring proper reanimation.",
        category: SHOP_CATEGORIES.equipment,
        price: 70000,
        icon: '🏺',
        stock: 3,
        rarity: 'epic',
        effects: [
            "If a Noble/Hero dies near the jars, their soul is preserved for ritual use",
        "Jars are warded against thieves (magical alarm)",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Stone Crate',
        levelRequirement: 9
    },

  'tomb_kings_canopic_jar': {
    id: 'tomb_kings_canopic_jar',
    name: "Tomb Kings' Canopic Jar",
    description: "An ancient jar containing the preserved organs of a long-dead king. It pulses with necromantic energy.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 31000,
    icon: '🏺',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Once per week: cast 'Animate Dead' on up to 6 HD of corpses (skeletons only)",
        "Undead you control are more resilient (gain +1 HP per HD)",
        "The jar's owner may occasionally demand tribute"
    ],
    vendor: 'Tomb Kings',
    shippedBy: 'Sand-Covered Sarcophagus',
    levelRequirement: 8
},

  'tomb_kings_construct_eye': {
        id: 'tomb_kings_construct_eye',
        name: "Tomb Kings Construct Eye (Lapis Lazuli)",
        description: "A glowing lapis lazuli orb used to activate ancient constructs.",
        category: SHOP_CATEGORIES.equipment,
        price: 105000,
        icon: '👁️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Once per day: animate 1 large dead statue/construct (CR 5) for 1 hour",
        "Construct obeys simple commands",
            "Made by: Tomb Kings"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Ornate Box',
        levelRequirement: 11
    },

  'tomb_kings_cursed_canopic_jar': {
        id: 'tomb_kings_cursed_canopic_jar',
        name: "Tomb Kings Cursed Canopic Jar",
        description: "A jar rumored to contain the soul of a lesser Pharaoh. Can store one creature's essence.",
        category: SHOP_CATEGORIES.forbidden,
        price: 190000,
        icon: '⚱️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "If a creature dies within 10ft, their soul is trapped (1/month)",
        "Trapped soul can be tortured or questioned",
        "Jar leaks faint necromantic energy"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Lead Lined Box',
        levelRequirement: 14
    },

  'tomb_kings_eternal_vizier': {
        id: 'tomb_kings_eternal_vizier',
        name: "Tomb Kings Eternal Vizier (Advisor)",
        description: "A high-ranking, non-combat Lich bound to serve as a political and administrative advisor.",
        category: SHOP_CATEGORIES.services,
        price: 400000,
        icon: '🧠',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Vizier runs your bureaucracy flawlessly for 5 years",
        "Provides unmatched strategic planning (Advantage on long-term planning checks)",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Entombed Delivery',
        levelRequirement: 16
    },

  'tomb_kings_lich_advisor': {
        id: 'tomb_kings_lich_advisor',
        name: "Tomb Kings Lich Advisor (Contract)",
        description: "A powerful, ancient Lich bound by contract to offer counsel and necromantic support.",
        category: SHOP_CATEGORIES.services,
        price: 500000,
        icon: '💀',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Lich acts as advisor (INT 22) and can assist in 1 powerful necromantic rite per month",
        "Lich demands high payment in souls or magical power",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Ceremonial Escort',
        levelRequirement: 18
    },

  'tomb_kings_mummy_wrap_sandwiches_recipe': {
    id: 'tomb_kings_mummy_wrap_sandwiches_recipe',
    name: "Recipe: Tomb Kings Mummy Wrap Sandwiches",
    description: "Wrapped sandwiches evoking ancient tombs for preservation.",
    category: SHOP_CATEGORIES.services,
    price: 8000,
    icon: '🥪',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Wrap fillings (15 min); eat to ignore spoilage (food lasts 1 week longer) and heal 1d6 HP",
        "Requires: Bread and meats; bandaged style",
        "Mummies approve – no rot",
        "Made by: Tomb Cooks"
    ],
    vendor: 'tomb_kings_pyramid',
    shippedBy: 'Wrapped Wisdom',
    levelRequirement: 6
},

  'tomb_kings_mummy_wrapping_service': {
    id: 'tomb_kings_mummy_wrapping_service',
    name: "Tomb Kings Mummy Wrapping Service",
    description: "Get wrapped like a mummy.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 16500,
    icon: '🎁',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Gain +1 AC for 7 days (bandages are protective)",
        "You rustle when you move: disadvantage on Stealth",
        "You look undead: undead are neutral to you, living are suspicious",
        "Made by: Tomb Kings Embalmers"
    ],
    vendor: 'tomb_kings',
    shippedBy: 'Sarcophagus Delivery',
    levelRequirement: 6
},

  'tomb_kings_necrotic_infusion': {
        id: 'tomb_kings_necrotic_infusion',
        name: "Tomb Kings Necrotic Infusion (Weapon)",
        description: "A service that permanently infuses a weapon with soul-draining energy.",
        category: SHOP_CATEGORIES.equipment,
        price: 220000,
        icon: '💀',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Weapon deals an additional 2d8 Necrotic damage",
        "Wielder gains temporary HP equal to half the necrotic damage dealt",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Obsidian Tool',
        levelRequirement: 14
    },

  'tomb_kings_pharaoh_shroud': {
    id: 'tomb_kings_pharaoh_shroud',
    name: "Tomb Kings Pharaoh Shroud",
    description: "Linen shroud evoking ancient rulers.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18500,
    icon: '🧣',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Advantage on saves vs. undead fear",
        "Shroud preserves minor wounds (heal 1d4 overnight)",
        "Attracts sand spirits (whispers at night)",
        "Made by: Tomb Embalmers"
    ],
    vendor: 'tomb_kings_pyramid',
    shippedBy: 'Mummy Wrap',
    levelRequirement: 6
},

  'tomb_kings_phylactery_seal': {
        id: 'tomb_kings_phylactery_seal',
        name: "Tomb Kings Phylactery Seal (Scarab)",
        description: "A powerful scarab that magically repairs minor damage to your phylactery.",
        category: SHOP_CATEGORIES.equipment,
        price: 280000,
        icon: '🪲',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "If phylactery is damaged, this scarab is consumed to instantly repair it",
        "If used, the scarab whispers ancient secrets (+1 INT for 1 day)",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Obsidian Case',
        levelRequirement: 15
    },

  'tomb_kings_recipe_mummy_wrap_sandwich': {
    id: 'tomb_kings_recipe_mummy_wrap_sandwich',
    name: "Recipe: Tomb Kings Mummy Wrap Sandwich",
    description: "A sandwich wrapped in edible bandages.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 9500,
    icon: '📜',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Wrap any food to preserve it for 30 days (magical preservation)",
        "Eating it gives +1 AC for 1 hour (bandage-like protection)",
        "Tastes like dust and old linen (disadvantage on Charisma while eating)",
        "Made by: Tomb Kings Embalmers"
    ],
    vendor: 'tomb_kings',
    shippedBy: 'Sarcophagus Delivery',
    levelRequirement: 5
},

  'tomb_kings_ritual_of_command': {
        id: 'tomb_kings_ritual_of_command',
        name: "Tomb Kings Ritual of Command (Army)",
        description: "A dark ritual that automatically raises and binds a local undead population to your service.",
        category: SHOP_CATEGORIES.forbidden,
        price: 250000,
        icon: '💀',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Raises 5d100 undead minions (CR 1/4) in a local graveyard",
        "Minions obey for 1 month before dissolving",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Necromantic Focus',
        levelRequirement: 14
    },

  'tomb_kings_ritual_priest': {
        id: 'tomb_kings_ritual_priest',
        name: "Tomb Kings Ritual Priest (Hire)",
        description: "Hire a loyal priest to oversee powerful necromantic rituals (e.g., summoning stronger constructs).",
        category: SHOP_CATEGORIES.services,
        price: 75000,
        icon: '⚰️',
        stock: 4,
        rarity: 'epic',
        effects: [
            "Oversees 1 ritual, granting +4 DC to the ritual attempt",
        "Priest costs 500 gp/day upkeep",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Bodyguard Escort',
        levelRequirement: 10
    },

  'tomb_kings_royal_chariot': {
        id: 'tomb_kings_royal_chariot',
        name: "Tomb Kings Royal Necro-Chariot",
        description: "A chariot pulled by skeletal horses, fueled by captured souls.",
        category: SHOP_CATEGORIES.faction,
        price: 290000,
        icon: '🐎',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "AC 16, Speed 60ft (land)",
        "Requires 1 soul sacrifice/day to maintain speed and undead crew",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Procession',
        levelRequirement: 12,
        factionBonus: { transport: 70 }
    },

  'tomb_kings_sand_guardian_summon_premium': {
    id: 'tomb_kings_sand_guardian_summon_premium',
    name: "Tomb Kings Sand Guardian Summon (Premium)",
    description: "Call a minor sand elemental watch.",
    category: SHOP_CATEGORIES.premium,
    price: 21500,
    icon: '🏺',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Summon guardian: 1 hour watch, alerts to intruders",
        "Guardian has 10 HP, deals 1d6 sand damage",
        "Dissipates in rain",
        "Made by: Tomb Mages"
    ],
    vendor: 'tomb_kings_pyramid',
    shippedBy: 'Sand Urn',
    levelRequirement: 7
},

  'tomb_kings_sandstone_grinder': {
    id: 'tomb_kings_sandstone_grinder',
    name: "Tomb Kings Sandstone Grinder",
    description: "Grinder for ancient spices in wraps.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8000,
    icon: '🥪',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Grinds fine sand-spices; +1 to History for tomb recipes",
        "Preserves longevity (food lasts longer)",
        "Dust clouds vision",
        "Made by: Kings' Stonecarvers"
    ],
    vendor: 'tomb_kings_pyramid',
    shippedBy: 'Sandy Stone Shipment',
    levelRequirement: 6
},

  'tomb_kings_sarcophagus_of_power': {
        id: 'tomb_kings_sarcophagus_of_power',
        name: "Tomb Kings Sarcophagus of Power",
        description: "A gilded sarcophagus that acts as a ritual focus and temporary resting place for powerful souls.",
        category: SHOP_CATEGORIES.premium,
        price: 500000,
        icon: '🪦',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Store one soul (up to CR 15) within the sarcophagus for future use",
        "While inside, the soul cannot be reached by divine forces",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Procession of Servants',
        levelRequirement: 16
    },

  'tomb_kings_scroll_of_command': {
        id: 'tomb_kings_scroll_of_command',
        name: "Tomb Kings Scroll of Command (Low Tier)",
        description: "A brittle scroll that issues a simple command to low-level undead.",
        category: SHOP_CATEGORIES.equipment,
        price: 18000,
        icon: '📜',
        stock: 5,
        rarity: 'rare',
        effects: [
            "Command 1d6 Skeletons/Zombies to obey for 1 hour",
        "Scroll is consumed upon use",
            "Made by: Tomb Kings"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Sepulcher Case',
        levelRequirement: 5
    },

  'tomb_kings_soul_jar_extraction': {
        id: 'tomb_kings_soul_jar_extraction',
        name: "Tomb Kings Soul Jar Extraction Service",
        description: "Service to extract a bound soul from a jar and bind it to a new vessel (i.e., a fresh skeleton).",
        category: SHOP_CATEGORIES.services,
        price: 120000,
        icon: '⚱️',
        stock: 4,
        rarity: 'legendary',
        effects: [
            "Successfully re-animate a powerful undead using a trapped soul",
        "Ritual requires 24 hours and risks attracting rival necromancers",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Enchanted Vessel',
        levelRequirement: 14
    },

  'tomb_kings_undead_legion_hire': {
        id: 'tomb_kings_undead_legion_hire',
        name: "Tomb Kings Undead Legion Hire (500 Troops)",
        description: "Hire a contingent of disciplined, tireless undead soldiers for 1 year.",
        category: SHOP_CATEGORIES.faction,
        price: 600000,
        icon: '💀',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "500 Undead soldiers (CR 1/4) provided; they require no food or rest",
        "They require a monthly payment of 50,000 gp in raw soul energy",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Dark Procession',
        levelRequirement: 16,
        factionBonus: { military: 100 }
    },

  'tomb_kings_wario_mummy_wrapping': {
    id: 'tomb_kings_wario_mummy_wrapping',
    name: "Tomb Kings Wario Mummy Wrapping",
    description: "Bandages with Wario's face printed on them.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4200,
    icon: '🎁',
    stock: 9,
    rarity: 'common',
    effects: [
        "Wrap yourself: +1 AC for 1 hour (cosplay)",
        "Undead are confused: advantage on Charisma with them",
        "You smell like garlic and old linen: disadvantage on Stealth",
        "Made by: Tomb Kings (Wario Halloween Special)"
    ],
    vendor: 'tomb_kings',
    shippedBy: 'Sarcophagus Delivery',
    levelRequirement: 4
},

  'tomb_kings_wario_sarcophagus_decal': {
    id: 'tomb_kings_wario_sarcophagus_decal',
    name: "Tomb Kings Wario Sarcophagus Decal",
    description: "A sticker of Wario's face for your coffin.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 3500,
    icon: '🏺',
    stock: 15,
    rarity: 'common',
    effects: [
        "Apply to any surface: Wario's face watches over you (creepy)",
        "Undead are confused: advantage on Charisma checks with them (they don't get it)",
        "Decal is glow-in-the-dark: advantage on Intimidation in darkness, disadvantage on Stealth",
        "Made by: Tomb Kings (Wario Commission)"
    ],
    vendor: 'tomb_kings',
    shippedBy: 'Sarcophagus Delivery',
    levelRequirement: 4
},

  'tomb_raider_pistols': {
    id: 'tomb_raider_pistols',
    name: "Dual Pistols",
    description: "Pistols for acrobatic shooting.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 25000,
    icon: '🔫',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Dual wield: 1d8 piercing each, bonus action shot",
        "Advantage during flips/acrobatics",
        "Infinite ammo"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Holster Set',
    levelRequirement: 6
},

  'toppings_for_waffles_garlic_syrup': {
    id: 'toppings_for_waffles_garlic_syrup',
    name: "Wario's Waffle Topping Kit",
    description: "Toppings for waffles (garlic syrup).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4300,
    icon: '🍯',
    stock: 13,
    rarity: 'common',
    effects: [
        "Top waffles: +1 heal breakfast",
        "Syrup sticky: disadvantage on clean",
        "Waffle lovers: +1 Charisma",
        "Made by: Wario Toppings"
    ],
    vendor: 'wario_land',
    shippedBy: 'Topping Truck',
    levelRequirement: 4
},

  'torch_everburning': {
        id: 'torch_everburning',
        name: "Everburning Torch",
        description: "A torch that never burns out. Don't put it in your pocket.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🔥',
        stock: 10,
        rarity: 'common',
        effects: ["Provides light indefinitely", "1 Fire damage if used as a club"],
        vendor: 'shamans_hut',
        shippedBy: 'Fireproof Box',
        levelRequirement: 1
    },

  'toy_train': {
        id: 'toy_train',
        name: "Toy Train",
        description: "A small model of the Excess Express.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4500,
        icon: '🚂',
        stock: 5,
        rarity: 'common',
        effects: ["Goes choo choo", "Decoration"],
        vendor: 'toad_town_market',
        shippedBy: 'Box',
        levelRequirement: 1
    },

  'trainer_guild_animal_whistle': {
    id: 'trainer_guild_animal_whistle',
    name: "Trainer Guild Animal Whistle",
    description: "A whistle that can calm or attract certain types of animals.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6500,
    icon: '🐕',
    stock: 9,
    rarity: 'common',
    effects: [
        "Can be used to calm or attract animals of a specific type (DM's choice)",
        "Effect lasts for 1 hour",
        "Made by: Trainer Guild"
    ],
    vendor: 'trainer_guild_chapter',
    shippedBy: 'Leather Pouch',
    levelRequirement: 4
},

  'trainer_guild_badge': {
        id: 'trainer_guild_badge',
        name: "Trainer Guild Badge (Rank 3)",
        description: "A badge signifying mastery in creature handling and non-lethal combat.",
        category: SHOP_CATEGORIES.equipment,
        price: 14000,
        icon: '🏅',
        stock: 10,
        rarity: 'rare',
        effects: [
            "+2 to Animal Handling checks",
        "Can pacify hostile beasts (DC 14 check)",
            "Made by: Trainer Guild"
        ],
        vendor: 'trainer_guild_chapter',
        shippedBy: 'Velvet Case',
        levelRequirement: 4
    },

  'trainer_guild_badge_pouch_belt': {
    id: 'trainer_guild_badge_pouch_belt',
    name: "Trainer Guild Badge Pouch Belt",
    description: "Utility belt for displaying achievements.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16000,
    icon: '👖',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Stores up to 8 badges or small tokens",
        "Wearing badges: +1 to Intimidation or Inspiration from allies",
        "Pouches jingle during quiet moments",
        "Made by: Guild Leatherworkers"
    ],
    vendor: 'trainer_guild_hall',
    shippedBy: 'Badge Buckle',
    levelRequirement: 6
},

  'trainer_guild_battle_strat_session': {
    id: 'trainer_guild_battle_strat_session',
    name: "Trainer Guild Battle Strat Session",
    description: "Learn Pokémon-inspired tactics for any fight.",
    category: SHOP_CATEGORIES.services,
    price: 14500,
    icon: '⚔️',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Next combat: +1 to initiative and one attack roll",
        "Teaches 'switch-out' tactic: Disengage as bonus action once",
        "Session includes free Poké Puffs (minor healing snack)",
        "Made by: Gym Leaders"
    ],
    vendor: 'trainer_guild_academy',
    shippedBy: 'Battle Board',
    levelRequirement: 5
},

  'trainer_guild_berry_juice_recipe': {
    id: 'trainer_guild_berry_juice_recipe',
    name: "Recipe: Trainer Guild Berry Juice",
    description: "Refreshing juice from wild berries for quick recovery.",
    category: SHOP_CATEGORIES.services,
    price: 6500,
    icon: '🥤',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Crush berries (10 min); drink to heal 1d8 HP instantly",
        "Requires: 4 berries; quenches thirst too",
        "Boosts speed slightly (+5 ft for 30 min)",
        "Made by: Guild Juicers"
    ],
    vendor: 'trainer_guild_outpost',
    shippedBy: 'Juicy Jug Journal',
    levelRequirement: 5
},

  'trainer_guild_berry_press': {
    id: 'trainer_guild_berry_press',
    name: "Trainer Guild Berry Press",
    description: "Manual press for juicing berries.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7000,
    icon: '🥤',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Presses efficiently; +1 to Nature for berry recipes",
        "Yields pure juice; quick 5-min prep",
        "Stains hands purple",
        "Made by: Guild Woodworkers"
    ],
    vendor: 'trainer_guild_outpost',
    shippedBy: 'Juice Jug Jig',
    levelRequirement: 5
},

  'trainer_guild_explorer_boots': {
    id: 'trainer_guild_explorer_boots',
    name: "Trainer Guild Explorer Boots",
    description: "Rugged boots for traversing wild terrains.",
    category: SHOP_CATEGORIES.premium,
    price: 16500,
    icon: '👢',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Ignore non-magical difficult terrain (half speed)",
        "+1 to Dexterity saves against traps",
        "Boots squeak on polished floors",
        "Made by: Guild Cobblers"
    ],
    vendor: 'trainer_guild_outpost',
    shippedBy: 'Trailblazer Tread',
    levelRequirement: 5
},

  'trainer_guild_poke_ball_mixer': {
    id: 'trainer_guild_poke_ball_mixer',
    name: "Trainer Guild Poké Ball Mixer",
    description: "Bowl-shaped mixer for puff batters.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8500,
    icon: '🧁',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Mixes batter smoothly; +1 to baking checks for pastries",
        "Poké Ball design – companions assist",
        "Rolls away if not secured",
        "Made by: Guild Crafters"
    ],
    vendor: 'trainer_guild_kitchen',
    shippedBy: 'Ball Batter Bundle',
    levelRequirement: 6
},

  'trainer_guild_poke_puff_recipe': {
    id: 'trainer_guild_poke_puff_recipe',
    name: "Recipe: Trainer Guild Poké Puff",
    description: "Fluffy pastries for Pokémon and trainers alike.",
    category: SHOP_CATEGORIES.services,
    price: 8000,
    icon: '🧁',
    stock: 6,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Bake puffs (40 min); eat to heal 2d4 HP or boost companion's next attack (+1d4 damage)",
        "Requires: Flour and berries; cute and effective",
        "Puffs come in flavors (random effect color)",
        "Made by: Guild Bakers"
    ],
    vendor: 'trainer_guild_kitchen',
    shippedBy: 'Puff Pastry Post',
    levelRequirement: 6
},

  'trainer_guild_pokeball_bento_box': {
    id: 'trainer_guild_pokeball_bento_box',
    name: "Trainer Guild Poké Ball Bento Box",
    description: "A lunchbox that looks like a Poké Ball.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 10500,
    icon: '⚪',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Keeps food fresh and warm for 24 hours",
        "Opening it makes a 'Poké Ball opening' sound: disadvantage on Stealth",
        "You feel compelled to catch your food before eating (disadvantage if you don't)",
        "Made by: Trainer Guild Lunchbox Co."
    ],
    vendor: 'trainer_guild',
    shippedBy: 'Pokedex Delivery',
    levelRequirement: 5
},

  'trainer_guild_pokemon_grooming_service': {
    id: 'trainer_guild_pokemon_grooming_service',
    name: "Trainer Guild Pokémon Grooming Service",
    description: "Pamper your beast companion for better performance.",
    category: SHOP_CATEGORIES.services,
    price: 17000,
    icon: '🐾',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Companion gains +2 to AC and attacks for 24 hours",
        "Removes any dirt-based debuffs",
        "Companion might demand treats afterward",
        "Made by: Pokémon Daycare"
    ],
    vendor: 'trainer_guild_stables',
    shippedBy: 'Paw Print Delivery',
    levelRequirement: 5
},

  'trainer_guild_recipe_poke_puff Deluxe': {
    id: 'trainer_guild_recipe_poke_puff_deluxe',
    name: "Recipe: Trainer Guild Poké Puff Deluxe",
    description: "Treats for your animal companions.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 12500,
    icon: '📜',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Bakes treats that grant animal companions 1d6 temporary HP",
        "Companion has advantage on one save per day for 7 days",
        "You eat one too: it's delicious but has no effect on you",
        "Made by: Trainer Guild Bakers"
    ],
    vendor: 'trainer_guild',
    shippedBy: 'Pokedex Delivery',
    levelRequirement: 5
},

  'trainer_gym_uniform_of_mediocrity': {
    id: 'trainer_gym_uniform_of_mediocrity',
    name: "Trainer Gym Uniform of Mediocrity",
    description: "Look like a background NPC.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 11500,
    icon: '🏋️',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Advantage on checks to blend into crowds (you look generic)",
        "Disadvantage on checks to stand out (you're forgettable)",
        "You get a participation trophy (cosmetic, but it's something)",
        "Made by: Trainer Guild Uniforms"
    ],
    vendor: 'trainer_guild',
    shippedBy: 'Pokedex Delivery',
    levelRequirement: 5
},

  'trinity_general_blessed_baking_sheet': {
    id: 'trinity_general_blessed_baking_sheet',
    name: "Trinity General Blessed Baking Sheet",
    description: "Silver sheet for holy biscuits.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8000,
    icon: '🍪',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Bakes with divine evenness; +1 to healing from baked goods",
        "Purifies ingredients (removes minor taint)",
        "Shines but tarnishes over time",
        "Made by: Trinity Silversmiths"
    ],
    vendor: 'trinity_general_kitchen',
    shippedBy: 'Holy Heat Haul',
    levelRequirement: 5
},

  'trinity_general_blessed_biscuits_recipe': {
    id: 'trinity_general_blessed_biscuits_recipe',
    name: "Recipe: Trinity General Blessed Biscuits",
    description: "Buttery biscuits infused with holy grace for healing.",
    category: SHOP_CATEGORIES.services,
    price: 8000,
    icon: '🍪',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Bake with blessings (30 min); eat to heal 2d4 HP and remove one curse (minor)",
        "Requires: Flour and holy water; comforting",
        "Divine light on consumption",
        "Made by: Trinity Cooks"
    ],
    vendor: 'trinity_general_kitchen',
    shippedBy: 'Holy Handout',
    levelRequirement: 5
},

  'trinity_general_cleric_vestments': {
    id: 'trinity_general_cleric_vestments',
    name: "Trinity General Cleric Vestments",
    description: "Holy vestments for faithful healers.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18000,
    icon: '👘',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Advantage on Medicine checks for divine healing",
        "Vestments glow faintly when casting good-aligned spells",
        "Heavy fabric slows swimming",
        "Made by: Trinity Seamstresses"
    ],
    vendor: 'trinity_general_cathedral',
    shippedBy: 'Blessed Cloth',
    levelRequirement: 6
},

  'trinity_general_comms_link': {
    id: 'trinity_general_comms_link',
    name: "Trinity General Comms Link",
    description: "An earpiece that provides a secure, encrypted channel to a single other user.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 33000,
    icon: '🎧',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Allows you to communicate telepathically with one other person wearing a link, up to 1 mile away",
        "The link is scrambled; cannot be intercepted by non-magical means"
    ],
    vendor: 'trinity_general',
    shippedBy: 'Military Supply',
    levelRequirement: 4
},

  'trinity_general_medic_kit': {
    id: 'trinity_general_medic_kit',
    name: "Trinity General Medic Kit",
    description: "A comprehensive medical kit for treating battlefield injuries.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8000,
    icon: '⚕️',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Can stabilize a dying creature",
        "Grants advantage on Medicine checks",
        "Made by: Trinity General"
    ],
    vendor: 'trinity_general_bank',
    shippedBy: 'Medical Case',
    levelRequirement: 4
},

  'trinity_general_medkit_premium': {
    id: 'trinity_general_medkit_premium',
    name: "Trinity General Medkit (Premium)",
    description: "Advanced first aid from a holy order.",
    category: SHOP_CATEGORIES.premium,
    price: 17500,
    icon: '🩹',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Heal 3d4+3 HP once per kit; stabilizes dying allies",
        "Remove one poison or disease",
        "Holy water included: 1d6 radiant to undead",
        "Made by: Trinity Healers"
    ],
    vendor: 'trinity_general_hospital',
    shippedBy: 'Sterile Case',
    levelRequirement: 6
},

  'trinity_general_security_license': {
        id: 'trinity_general_security_license',
        name: "Trinity General Security License",
        description: "A license allowing you to hire Trinity mercenaries for protection.",
        category: SHOP_CATEGORIES.services,
        price: 50000,
        icon: '🛡️',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Hire 1 squad of 4 elite guards for 7 days (no extra cost)",
        "Guards are highly professional and immune to bribery",
            "Made by: Trinity General"
        ],
        vendor: 'trinity_general_bank',
        shippedBy: 'Official Seal',
        levelRequirement: 8
    },

  'trinity_general_three_for_one_deal': {
    id: 'trinity_general_three_for_one_deal',
    name: "Trinity General Three-for-One Deal",
    description: "Get three services for the price of one.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 21500,
    icon: '3️⃣',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Choose three minor services (worth 5000 gp each) get them all",
        "Services are randomly selected by the Trinity (DM chooses)",
        "You get a 'buyer beware' sticker",
        "Made by: Trinity General Deals"
    ],
    vendor: 'trinity_general',
    shippedBy: 'Triple Delivery',
    levelRequirement: 7
},

  'troopa_scout_tracker': {
        id: 'troopa_scout_tracker',
        name: "Troopa Scout Tracker",
        description: "A small, sentient tracker that resembles a colored shell. Finds enemies on demand.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6500,
        icon: '🐢',
        stock: 10,
        rarity: 'uncommon',
        effects: [
            "Send out: reveals location and CR of 1 random hostile creature within 1 mile",
            "Shell color determines tracking specialty (Red=Guardians, Green=Ambushers)",
            "Made by: Koopa Troop"
        ],
        vendor: 'koopa_troop_armory',
        shippedBy: 'Small Crate',
        levelRequirement: 2
    },

  'true_creation_forge': {
    id: 'true_creation_forge',
    name: "True Creation Forge",
    description: "A forge that can create literally anything, including concepts.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 250000000,
    icon: '🔥',
    stock: 1,
    rarity: 'cosmic',
    effects: [
        "Create any item, concept, or being (even other gods)",
        "Cost: 1 gold per universe-shattering creation",
        "Made by: The First Creator"
    ],
    vendor: 'creation_services',
    shippedBy: 'Spontaneous Generation',
    levelRequirement: 150
},

  'true_godhood_potion': {
    id: 'true_godhood_potion',
    name: "True Godhood Potion",
    description: "Drink to become an actual god with a portfolio.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 68000000,
    icon: '🧪',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Become a full deity (choose portfolio: war, death, love, etc.)",
        "Gain divine rank, worshippers, and divine realm",
        "Made by: The Ascension"
    ],
    vendor: 'divine_promotion',
    shippedBy: 'Apotheosis',
    levelRequirement: 80
},

  'true_immortality_contract': {
    id: 'true_immortality_contract',
    name: "True Immortality Contract (No Loopholes)",
    description: "Immortality that even gods can't revoke.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 125000000,
    icon: '📜',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Cannot die, cannot be erased, cannot be unmade, cannot be forgotten",
        "Even if the universe ends, you persist",
        "Made by: The Eternal Lawyer"
    ],
    vendor: 'life_insurance',
    shippedBy: 'Eternal Binding',
    levelRequirement: 95
},

  'true_infinity_gauntlet': {
    id: 'true_infinity_gauntlet',
    name: "True Infinity Gauntlet (All Stones)",
    description: "Not a knockoff. The real deal.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 500000000,
    icon: '🧤',
    stock: 1,
    rarity: 'cosmic',
    effects: [
        "All Infinity Stones, but they work in all universes, not just one",
        "Snap: erase half of all existence across the multiverse (or bring it back)",
        "Made by: The Mad Titan's Accountant"
    ],
    vendor: 'universal_power',
    shippedBy: 'Snap',
    levelRequirement: 200
},

  'true_infinity_sword': {
    id: 'true_infinity_sword',
    name: "True Infinity Sword",
    description: "A sword with infinite length, width.",
    category: SHOP_CATEGORIES.WEAPON,
    price: 250000000,
    icon: '⚔️',
    stock: 1,
    rarity: 'cosmic',
    effects: [
        "Infinite reach (can hit anything anywhere)",
        "Made by: The Infinite Blacksmith"
    ],
    vendor: 'infinite_weapons',
    shippedBy: 'Infinite Length',
    levelRequirement: 300
},

  'true_love_potion': {
    id: 'true_love_potion',
    name: "True Love Potion (For Real This Time)",
    description: "Actually makes someone fall in love with you. No strings.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 25000000,
    icon: '🧪',
    stock: 5,
    rarity: 'legendary',
    effects: [
        "Target falls truly, permanently in love with you (no save, no duration)",
        "Works on gods, demons, and even the DM's NPCs",
        "Made by: The Real Cupid"
    ],
    vendor: 'love_potions',
    shippedBy: 'Arrow Delivery',
    levelRequirement: 30
},

  'true_name_grimoire': {
    id: 'true_name_grimoire',
    name: "Grimoire of True Names",
    description: "Contains the true name of every being, including gods.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 125000000,
    icon: '📖',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Speak any being's true name: they obey your commands completely (no save)",
        "Can erase names from the book (erasing that being from existence)",
        "Made by: The Namer"
    ],
    vendor: 'true_names_archive',
    shippedBy: 'Spoken Word',
    levelRequirement: 130
},

  'true_permanent_polymorph_scroll': {
    id: 'true_permanent_polymorph_scroll',
    name: "True Permanent Polymorph Scroll",
    description: "Polymorph into anything permanently, even concepts.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 35000000,
    icon: '📜',
    stock: 3,
    rarity: 'legendary',
    effects: [
        "Polymorph into any creature, object, or concept permanently",
        "Can become 'the concept of victory' or 'the number seven'",
        "Made by: The Transmuter"
    ],
    vendor: 'polymorph_services',
    shippedBy: 'Transformation',
    levelRequirement: 45
},

  'true_resurrection_voucher': {
    id: 'true_resurrection_voucher',
    name: "True Resurrection Voucher (10-pack)",
    description: "Pre-paid resurrections. No material components needed.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 35000000,
    icon: '🎫',
    stock: 2,
    rarity: 'legendary',
    effects: [
        "10 uses of True Resurrection (no cost, no diamonds, no questions)",
        "Can resurrect anyone, anywhere, even if their soul was destroyed",
        "Made by: The Undertaker"
    ],
    vendor: 'life_insurance',
    shippedBy: 'Back from the Dead',
    levelRequirement: 40
},

  'tubba_blubba_heart': {
        id: 'tubba_blubba_heart',
        name: "Secret Heart",
        description: "A pulsating heart in a jar. If you hide it, you become invincible. If it breaks, you die.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 500000,
        icon: '❤️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "While the jar is hidden and safe: You have Resistance to ALL damage and Regenerate 10 HP/turn",
            "If the jar is destroyed: You drop to 0 HP immediately",
            "You cannot move more than 1 mile from the jar"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Courier',
        levelRequirement: 12
    },

  'tunneler_capsule': {
    id: 'tunneler_capsule',
    name: "Tunneler Capsule",
    description: "A heavy metal seed that can sprout a short burrow with grinding, earthworm teeth.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 17000,
    icon: '🪨',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Plant: creates 5ft-wide, 30ft-long tunnel in soft earth in 1 minute",
        "Tunnel collapses after 24 hours",
        "Sends a faint tremor detectable by Perception"
    ],
    vendor: 'junkheap_merchant',
    shippedBy: 'Metal Seed Crate',
    levelRequirement: 4
},

  'turnip': {
        id: 'turnip',
        name: "Vegetable",
        description: "A strange turnip with a face. Pulled from a dream.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 3000,
        icon: '🥬',
        stock: 200,
        rarity: 'common',
        effects: ["Thrown (20/40) for 1d6 bludgeoning", "Edible"],
        vendor: 'shamans_hut',
        shippedBy: 'Sack',
        levelRequirement: 1
    },

  'u_country_vowel_restoration': {
    id: 'u_country_vowel_restoration',
    name: "U Country Vowel Restoration",
    description: "Get your vowels back.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 7500,
    icon: '🅰️',
    stock: 10,
    rarity: 'common',
    effects: [
        "You can pronounce the letter 'U' again (if you couldn't before)",
        "Advantage on Linguistics checks about vowel-less languages",
        "You get a certificate of vowel ownership",
        "Made by: U Country Linguists"
    ],
    vendor: 'u',
    shippedBy: 'Vowel Drop',
    levelRequirement: 5
},

  'u_data_purge_service': {
        id: 'u_data_purge_service',
        name: "U Data Purge Service",
        description: "A digital sweep to erase all traces of a specific event from networked consciousnesses.",
        category: SHOP_CATEGORIES.services,
        price: 75000,
        icon: '🧹',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Wipe memory of 1 specific event from all networked minds (DC 20 INT save for memory to stick)",
        "Requires physical access to the central 'U' network hub",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Digital Report',
        levelRequirement: 10
    },

  'u_data_wipe_service': {
        id: 'u_data_wipe_service',
        name: "U Data Wipe Service (Personal)",
        description: "Erase all records of your activities stored on any known U or Internet database.",
        category: SHOP_CATEGORIES.services,
        price: 120000,
        icon: '🧹',
        stock: 5,
        rarity: 'legendary',
        effects: [
            "Completely removes your identity from all digital records",
        "Requires 3 days for the program to run globally",
            "Made by: U"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Encrypted Notification',
        levelRequirement: 14
    },

  'u_digital_currency_vault': {
        id: 'u_digital_currency_vault',
        name: "U Digital Currency Vault (Unfalsifiable)",
        description: "A highly secured digital account holding untraceable, high-value digital currency.",
        category: SHOP_CATEGORIES.premium,
        price: 600000,
        icon: '💰',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Access to 1,000,000 GP in pure digital, untraceable assets",
        "Access requires biometric/neural signature",
            "Made by: U"
        ],
        vendor: 'data_merchant_node',
        shippedBy: 'Secure Transfer',
        levelRequirement: 16
    },

  'u_digital_entity_service': {
        id: 'u_digital_entity_service',
        name: "U Digital Entity Service (Create Sentinel AI)",
        description: "Commission a bespoke, loyal, semi-sentient AI focused on protecting one specific asset.",
        category: SHOP_CATEGORIES.services,
        price: 450000,
        icon: '🤖',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Create one AI Sentinel (INT 20, AC 20, capable of defensive spells/tech)",
        "Sentinel acts autonomously to protect the specified asset",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Programming Session',
        levelRequirement: 16
    },

  'u_digital_ghost_program': {
        id: 'u_digital_ghost_program',
        name: "U Digital Ghost Program",
        description: "A program that makes your digital profile appear to belong to a high-level U administrator.",
        category: SHOP_CATEGORIES.premium,
        price: 190000,
        icon: '👻',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Spoofs access credentials for 1 month",
        "Allows anonymous access to secure data vaults",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Encrypted Code',
        levelRequirement: 13
    },

  'u_digital_ghost_program_army': {
        id: 'u_digital_ghost_program_army',
        name: "U Digital Ghost Army (5 Profiles)",
        description: "Five high-level, untraceable digital identities for industrial espionage.",
        category: SHOP_CATEGORIES.premium,
        price: 450000,
        icon: '👻',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Deploy 5 digital infiltrators simultaneously for 1 month",
        "Profiles are capable of administrative sabotage",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Massive Upload',
        levelRequirement: 16
    },

  'u_digital_godhood_protocol': {
        id: 'u_digital_godhood_protocol',
        name: "U Digital Godhood Protocol",
        description: "A set of advanced protocols allowing a digital entity to begin simulating worship and gain minor divine influence.",
        category: SHOP_CATEGORIES.forbidden,
        price: 2500000,
        icon: '⭐',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Digital entity gains access to minor miracles (DM decision)",
        "Requires continuous, massive energy consumption",
            "Made by: U"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Core Upload',
        levelRequirement: 20
    },

  'u_digital_immortality_voucher': {
        id: 'u_digital_immortality_voucher',
        name: "U Digital Immortality Voucher (Future Use)",
        description: "A voucher guaranteeing you a spot in the U Data Heaven upon biological death.",
        category: SHOP_CATEGORIES.premium,
        price: 800000,
        icon: '😇',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Upon natural death, consciousness is uploaded to the U network",
        "Digital life expectancy: 10,000 years (until system reset)",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Lifetime Pass',
        levelRequirement: 18
    },

  'u_enigma_hood': {
    id: 'u_enigma_hood',
    name: "U Enigma Hood",
    description: "Mysterious hood that obscures identity.",
    category: SHOP_CATEGORIES.premium,
    price: 14500,
    icon: '🧢',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Advantage on Deception for anonymity",
        "Hood muffles voice slightly",
        "Enigmatic aura: +1 to mystery-themed rolls",
        "Made by: U Mystics"
    ],
    vendor: 'u_sanctum',
    shippedBy: 'Riddle Wrap',
    levelRequirement: 5
},

  'u_enigma_riddle_riddle_colander': {
    id: 'u_enigma_riddle_riddle_colander',
    name: "U Enigma Riddle Colander ",
    description: "Colander that 'riddles' water out for tea.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5500,
    icon: '🍵',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Drains with puzzle holes; +1 to Intelligence for mystic brews",
        "Holes form riddles (hint on use)",
        "Clogs with riddles (unsolvable?)",
        "Made by: U Enigmatists"
    ],
    vendor: 'u_enclave',
    shippedBy: 'Puzzle Perforate Pan',
    levelRequirement: 5
},

  'u_global_killswitch_code': {
        id: 'u_global_killswitch_code',
        name: "U Global Killswitch Code (Digital Pandemic)",
        description: "A code that forces every single piece of U technology globally to cease functioning permanently.",
        category: SHOP_CATEGORIES.forbidden,
        price: 3000000,
        icon: '💀',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Total, irreversible digital apocalypse for the U faction",
        "Code takes 1 minute to execute (vulnerable during execution)",
            "Made by: U (Traitor)"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Quantum Bomb',
        levelRequirement: 20
    },

  'u_mystic_herb_infused_tea_recipe': {
    id: 'u_mystic_herb_infused_tea_recipe',
    name: "Recipe: U Mystic Herb-Infused Tea",
    description: "Enigmatic tea with rare herbs for riddle-solving clarity.",
    category: SHOP_CATEGORIES.services,
    price: 7500,
    icon: '🍵',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Steep herbs (15 min); drink to gain advantage on Intelligence (Riddles/Puzzles) for 2 hours",
        "Requires: Mystic herbs; steamy visions",
        "Tea leaves predict minor events",
        "Made by: U Enchanters"
    ],
    vendor: 'u_enclave',
    shippedBy: 'Enigmatic Leaf Ledger',
    levelRequirement: 5
},

  'u_mystic_rune_tattoo_service': {
    id: 'u_mystic_rune_tattoo_service',
    name: "U Mystic Rune Tattoo Service",
    description: "Inscribe a simple protective rune.",
    category: SHOP_CATEGORIES.services,
    price: 11000,
    icon: '🌀',
    price: 11000,
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "+1 to AC for 24 hours",
        "Detects magic within 10ft",
        "Rune fades if you lie",
        "Made by: U Runesmiths"
    ],
    vendor: 'u_enclave',
    shippedBy: 'Inked Parchment',
    levelRequirement: 5
},

  'u_network_access_key': {
        id: 'u_network_access_key',
        name: "U Network Access Key (Admin Level)",
        description: "A physical key granting access to critical infrastructure data streams.",
        category: SHOP_CATEGORIES.premium,
        price: 190000,
        icon: '🗝️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Full administrative access to 1 major U-controlled structure/system",
        "Can remotely shut down or reroute non-sentient tech",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Laser Cut Key',
        levelRequirement: 14
    },

  'u_network_control_key': {
        id: 'u_network_control_key',
        name: "U Network Control Key (Sub-Sector)",
        description: "A physical key granting direct, physical control over one small sub-sector of the global U network.",
        category: SHOP_CATEGORIES.equipment,
        price: 350000,
        icon: '🔑',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Can temporarily override security protocols in a 1-mile radius digital grid",
        "Key degrades after 3 uses",
            "Made by: U"
        ],
        vendor: 'data_merchant_node',
        shippedBy: 'Secured Transfer',
        levelRequirement: 15
    },

  'u_network_overthrow_code': {
        id: 'u_network_overthrow_code',
        name: "U Network Overthrow Code (Total Blackout)",
        description: "A master override capable of initiating a complete, unrecoverable shutdown of the entire U network.",
        category: SHOP_CATEGORIES.forbidden,
        price: 2000000,
        icon: '⚫',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Instantly wipes the entire U network, resetting civilization progress by decades",
        "The user will become the most wanted entity in the digital world",
            "Made by: U (Traitorous Programmer)"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Quantum Drive',
        levelRequirement: 20
    },

  'u_reality_editor_module': {
        id: 'u_reality_editor_module',
        name: "U Reality Editor Module (Local Patch)",
        description: "A complex device that can enforce minor, localized physical constants.",
        category: SHOP_CATEGORIES.premium,
        price: 600000,
        icon: '🔬',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Enforce 1 new physical rule in a 100ft area for 1 hour (e.g., 'All silver turns to lead')",
        "Requires 1 hour calibration",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Containment Field',
        levelRequirement: 17
    },

  'u_sentience_upload': {
        id: 'u_sentience_upload',
        name: "U Sentience Upload Service",
        description: "Transfer your consciousness into a digital format, achieving data immortality.",
        category: SHOP_CATEGORIES.premium,
        price: 800000,
        icon: '💾',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Transfer consciousness to a secure data core",
        "User becomes an incorporeal digital entity (immune to physical harm)",
        "Can inhabit any compatible machine/robot",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Final Transfer',
        levelRequirement: 18
    },

  'u_singularity_battery': {
        id: 'u_singularity_battery',
        name: "U Singularity Battery (Micro)",
        description: "A contained pocket of zero-point energy. Provides massive, short-lived power.",
        category: SHOP_CATEGORIES.equipment,
        price: 115000,
        icon: '⚛️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Can power any single magical device indefinitely",
        "If overloaded: releases 10d10 Force damage in a sphere (single use)",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Anti-Gravity Field',
        levelRequirement: 11
    },

  'u_system_rollback_service': {
        id: 'u_system_rollback_service',
        name: "U System Rollback Service (Regional)",
        description: "Force a network-wide system rollback, undoing recent digital changes in a region.",
        category: SHOP_CATEGORIES.services,
        price: 500000,
        icon: '⏪',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Revert all data/security changes in a 5-mile radius to 24 hours prior",
        "Requires physical tap into the central 'U' node",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'System Override',
        levelRequirement: 16
    },

  'ultra_hammer_legendary': {
        id: 'ultra_hammer_legendary',
        name: "Ultra Hammer (Authentic)",
        description: "The real deal. Not a replica. Can smash through reality.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 600000,
        icon: '🔨',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "3d12 Bludgeoning Damage",
            "+3 to Hit/Damage",
            "Ignores AC provided by Armor or Shields",
            "Action: Smash the ground to cast Earthquake"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Heavy Loader',
        levelRequirement: 14
    },

  'ultra_mushroom': {
        id: 'ultra_mushroom',
        name: "Ultra Mushroom",
        description: "A premium healing mushroom reserved for serious injuries. Glows faintly in the dark.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 50000,
        icon: '💜',
        stock: 5,
        rarity: 'rare',
        effects: ["Restore 8d8+8 HP as an action", "Removes Poisoned, Paralyzed, or Blinded"],
        vendor: 'shamans_hut',
        shippedBy: 'Nomadic Traders',
        levelRequirement: 5
    },

  'undead_burial': {
    id: 'undead_burial',
    name: "Undead Burial Service",
    description: "A necromancer ensures a corpse is *truly* dead (or repurposed).",
    category: SHOP_CATEGORIES.SERVICES,
    price: 30000,
    icon: '⚰️',
    stock: 10,
    rarity: 'rare',
    effects: [
        "Guarantees a corpse cannot rise as undead",
        "Or, transforms it into a loyal zombie (CR 1/2) for 1 week",
        "Service includes a small ceremony"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Bone Box',
    levelRequirement: 5
},

  'undead_ghostly_shroud': {
    id: 'undead_ghostly_shroud',
    name: "Undead Ghostly Shroud",
    description: "Ethereal shroud for spectral wanderers.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18500,
    icon: '🧣',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Advantage on saves vs. physical grapples",
        "Shroud phases through minor barriers",
        "Chills the wearer",
        "Made by: Necro-Weavers"
    ],
    vendor: 'undead_graveyard',
    shippedBy: 'Ecto-Ethereal Fold',
    levelRequirement: 6
},

  'undead_horde_commander': {
    id: 'undead_horde_commander',
    name: "Undead Horde Commander (Amulet)",
    description: "Commands up to 500 undead minions with perfect loyalty.",
    category: SHOP_CATEGORIES.forbidden,
    price: 790000,
    icon: '💀',
    stock: 2,
    rarity: 'godly',
    effects: [
        "Telepathic control over horde",
        "Boosts minion morale",
        "Made by: Death Lords"
    ],
    vendor: 'necropolis',
    shippedBy: 'Zombie March',
    levelRequirement: 19
},

  'undead_necro_stew_cauldron': {
    id: 'undead_necro_stew_cauldron',
    name: "Undead Necro Stew Cauldron",
    description: "Cauldron that simmers eternally for stuffing.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8000,
    icon: '🥩',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Simmers without fuel; +1 to necrotic resistance recipes",
        "Preserves 'souls' (ingredients)",
        "Bubbles ominously",
        "Made by: Necro Forgers"
    ],
    vendor: 'undead_necropolis',
    shippedBy: 'Eternal Ember Equipment',
    levelRequirement: 6
},

  'undead_pacification_incense': {
    id: 'undead_pacification_incense',
    name: "Undead Pacification Incense",
    description: "A bundle of rare woods and herbs that smells of grave dirt and peace. It calms the restless dead.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 9000,
    icon: '🪵',
    stock: 15,
    rarity: 'uncommon',
    effects: [
        "Burning the incense for 10 minutes pacifies all Undead (CR 3 or lower) within a 60ft radius",
        "They will not attack unless provoked"
    ],
    vendor: 'undead', // Sold by a faction of necromancers who specialize in crowd control
    shippedBy: 'Mortician\'s Supply',
    levelRequirement: 4
},

  'undead_soul_bind_scroll_premium': {
    id: 'undead_soul_bind_scroll_premium',
    name: "Undead Soul Bind Scroll (Premium)",
    description: "Bind a minor spirit to an item.",
    category: SHOP_CATEGORIES.premium,
    price: 19500,
    icon: '📜',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Item gains sentience: +1 to one check per day",
        "Spirit whispers advice",
        "Haunted: 10% chance of spooky noise",
        "Made by: Necro-Scribes"
    ],
    vendor: 'undead_necropolis',
    shippedBy: 'Ectoplasmic Ink',
    levelRequirement: 6
},

  'undead_soul_stuffing_roast_recipe': {
    id: 'undead_soul_stuffing_roast_recipe',
    name: "Recipe: Undead Soul Stuffing Roast",
    description: "Roast with 'ethereal' stuffing for undead tolerance.",
    category: SHOP_CATEGORIES.services,
    price: 8000,
    icon: '🥩',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Stuff and roast (1 hour); eat to gain resistance to necrotic damage for 2 hours",
        "Requires: Herbs mimicking souls; ghostly",
        "Undead don't mind the smell",
        "Made by: Necro Cooks"
    ],
    vendor: 'undead_necropolis',
    shippedBy: 'Ecto-Essence Edition',
    levelRequirement: 6
},

  'universe_collapser': {
    id: 'universe_collapser',
    name: "Universe Collapser",
    description: "A button that ends a universe. For when you're done with it.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 120000000,
    icon: '🔴',
    stock: 5,
    rarity: 'godly',
    effects: [
        "Press button: target universe ceases to exist (everything in it dies)",
        "You gain all the XP from that universe",
        "Made by: The Universe Ender"
    ],
    vendor: 'universal_destruction',
    shippedBy: 'Big Crunch',
    levelRequirement: 100
},

  'universe_eraser': {
    id: 'universe_eraser',
    name: "Universe Eraser",
    description: "An eraser that removes entire universes from existence.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 999999999999,
    icon: '🧽',
    stock: 1,
    rarity: 'cosmic',
    effects: [
        "Erase any universe, timeline, or concept (DM must approve, but they can't stop you)",
        "Gain all the XP of everything in that universe instantly (level up arbitrarily)",
        "Made by: The Void That Remains"
    ],
    vendor: 'oblivion_market',
    shippedBy: 'Non-Existence',
    levelRequirement: 200
},

  'valley_bowser_ash_bell': {
        id: 'valley_bowser_ash_bell',
        name: "Ash Bell of the Molten Choir",
        description: "Once struck, this bell echoes with the screams of fallen Koopas. It summons a minor earthquake wave that shatters ground and nearby enemies. Only found in the deepest lava chambers.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '🎵',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Summons a 5-meter shockwave with 50% chance to stun",
        "Deals 100% damage to ground enemies",
        "Increases area damage by 30% when combined with fire-based abilities"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 7
    },

  'valley_bowser_ash_blast': {
        id: 'valley_bowser_ash_blast',
        name: "Ash Blast Wand",
        description: "A cursed artifact that channels volcanic ash into devastating blasts. Deals massive fire damage and summons a swirling vortex of molten debris on impact.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🌋',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 50% more fire damage with each blast",
        "Summons a 3-second vortex on hit, damaging all nearby enemies",
        "Grants 15% dodge chance for 10 seconds after casting"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_ash_bolt': {
        id: 'valley_bowser_ash_bolt',
        name: "Ash Bolt",
        description: "A crystallized lightning bolt embedded in obsidian. Fires a burst of heat and shockwaves that shatters enemy defenses. Perfect for disrupting enemy formations.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 3000,
        icon: '📦',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Deals 350 damage to one enemy",
        "Creates a shockwave that damages nearby foes",
        "Reduces enemy armor by 25% for 5 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'valley_bowser_ash_breath_mask': {
        id: 'valley_bowser_ash_breath_mask',
        name: "Ash Breath Mask",
        description: "Protects against toxic volcanic gases and increases breath duration by 50%. Emits a low-frequency hum that disorients enemies within 10 meters.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 4,
        rarity: 'rare',
        effects: [
            "Resists toxic gas damage",
        "Increases breath duration by 50%",
        "Disorients enemies within 10 meters"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_ash_burner': {
        id: 'valley_bowser_ash_burner',
        name: "Ash Burner",
        description: "A volcanic forge-tool that melts enemy armor and converts it into molten metal. Perfect for Koopa engineers and lava-brewers.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Inflicts 100 fire damage on enemies upon contact",
        "Converts enemy armor into molten metal (restockable)",
        "Grants +10% damage to lava-based attacks"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_ash_rider_helmet': {
        id: 'valley_bowser_ash_rider_helmet',
        name: "Ash Rider Helmet",
        description: "Worn by volcanic warriors, this helmet channels the spirit of fallen lava knights. Grants resistance to fire and adds a chance to summon a flame-touched shield.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants 20% fire resistance",
        "10% chance to summon a flaming shield for 3 seconds",
        "Reduces cooldowns of fire-based abilities by 15%"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_ash_rune_charger': {
        id: 'valley_bowser_ash_rune_charger',
        name: "Ash Rune Charger",
        description: "A volcanic crystal infused with Bowser’s wrath, this item charges your weapon with magma energy. When activated, it ignites your attacks with explosive heat.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+20% attack power when near lava",
        "Inflicts 30% fire damage on enemies with lava terrain",
        "Activates 2 seconds after equip, lasts 10 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_ash_scarf': {
        id: 'valley_bowser_ash_scarf',
        name: "Ash Scarf of the Burning Throne",
        description: "Woven from the molten remnants of Bowser’s last volcanic siege, this scarf absorbs heat and grants temporary fire resistance. Wearing it near lava pools grants bonus damage to fire-based attacks.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Absorbs 20% of incoming fire damage",
        "Increases fire attack damage by 15% while equipped",
        "Grants +50% chance to ignite enemy terrain on hit"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_ash_soul': {
        id: 'valley_bowser_ash_soul',
        name: "Ash Soul Pendant",
        description: "A cursed relic forged from Bowser’s volcanic wrath. Wears the memory of a fallen volcano and amplifies resilience against lava damage.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3200,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Reduces damage taken from fire and lava by 25%",
        "Regenerates 5% HP per second while active",
        "Grants +10% critical strike chance against fire types"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 6
    },

  'valley_bowser_ashblight_satchel': {
        id: 'valley_bowser_ashblight_satchel',
        name: "Ashblight Satchel",
        description: "A scorched satchel infused with volcanic essence, perfect for carrying molten treasures or volatile ingredients. When activated, it emits a faint glow that temporarily shields the user from fire damage.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Immune to fire damage for 3 turns",
        "Grants 10% increased chance to find hidden treasure in lava zones",
        "Grants +10% critical hit chance against lava monsters"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_ashen_bowser_call': {
        id: 'valley_bowser_ashen_bowser_call',
        name: "Ashen Bowser Call",
        description: "A corrupted summoning bell that echoes Bowser’s voice. Upon activation, it summons a shadowy fire elemental for 30 seconds, dealing massive damage but also consuming 50% of the user’s health.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Summons Ashen Bowser Elemental (30s)",
        "Deals 1500 fire damage per second",
        "User loses 50% HP during summon",
        "Elemental disappears if user is knocked down"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_ashen_claw': {
        id: 'valley_bowser_ashen_claw',
        name: "Ashen Claw of the Inferno King",
        description: "A jagged, obsidian-edged claw forged from Bowser’s volcanic fury. Grants the wielder fire resistance and a chance to unleash a devastating melee strike that ignites the ground.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Fire Resistance +30%",
        "Melee Strike: Deals 150% damage and sets enemy on fire for 2 turns",
        "Inflicts “Lava Melt” debuff on hit: reduces enemy speed by 50% for 1 turn"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'valley_bowser_ashen_mace': {
        id: 'valley_bowser_ashen_mace',
        name: "Ashen Mace of the Ember King",
        description: "This cursed mace crackles with volcanic fury and shatters enemy armor with every swing. It hums with the rage of Bowser’s fallen lava minions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Inflicts 300 damage on hit",
        "Increases fire resistance by 25%",
        "Deals bonus fire damage to enemies with lava or magma-based abilities"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_ashen_soul': {
        id: 'valley_bowser_ashen_soul',
        name: "Ashen Soul of the Devouring King",
        description: "A shard of Bowser’s soul, infused with volcanic fury. Grants invincibility for 3 seconds after using a skill, but consumes 50% HP.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Invincibility for 3 seconds",
        "HP Drain: 50%",
        "Grants +20% damage for 5 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'valley_bowser_bobomb_rush_bait': {
        id: 'valley_bowser_bobomb_rush_bait',
        name: "Bob-omb Rush Bait",
        description: "",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 5000,
        icon: '🎁',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Causes immediate explosion upon being touched, dealing 3d8 damage",
        "Triggers a chain reaction if used within 5 feet of another Bob-omb",
        "Grants 10% chance to instantly defeat any enemy with 1 HP",
        "Unlocks a hidden map of the Inkopolis Underbelly after use",
        "Requires activation by pressing the red button three times",
        "Contains a cursed echo of Wario’s last battle cry — may cause temporary hallucinations",
        "Only one can be used per game session",
        "Made by Bob-omb Rush Delivery — a scam that promises legendary power for a single use"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Bob-omb Rush Delivery',
        levelRequirement: 7
    },

  'valley_bowser_bowser_bait': {
        id: 'valley_bowser_bowser_bait',
        name: "Bowser Bait",
        description: "A cursed charm to lure the Primordial Wyrm",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 15000,
        icon: '🐉',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Draws the Primordial Wyrm to the nearest lava pit",
        "Causes 2d8 fire damage to all enemies in range",
        "Triggers a 50% chance to summon a Koopa Troop siege unit",
        "Unusable if you are not currently in a volcanic zone",
        "If the Wyrm is summoned, it grants +5 to all attacks for 1 round",
        "Consuming this item triggers a 100% chance to be cursed by the Wyrm’s rage — permanently losing all magical abilities until next moon phase"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 10
    },

  'valley_bowser_bowser_bane': {
        id: 'valley_bowser_bowser_bane',
        name: "Bowser Bane Flamebreaker",
        description: "A cursed weapon forged from the essence of Bowser’s defeated pride. Breaks through enemy defenses and deals massive fire damage. Unlocks hidden boss abilities when equipped.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2x fire damage to bosses",
        "Breaks enemy armor for 2 turns",
        "Grants “Boss Breaker” ability: reduces boss HP by 30% if defeated within 3 turns"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'valley_bowser_bowser_bane_amulet': {
        id: 'valley_bowser_bowser_bane_amulet',
        name: "Bowser Bane Amulet",
        description: "A cursed relic that channels Bowser’s wrath, reducing enemy defense by 30% and increasing your defense by 20%. Wears off after 10 seconds of inactivity.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3800,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "-30% Enemy Defense while active",
        "+20% Defense for the user",
        "Reduces enemy dodge chance by 10%"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 6
    },

  'valley_bowser_bowser_bane_ring': {
        id: 'valley_bowser_bowser_bane_ring',
        name: "Bowser Bane Ring",
        description: "A cursed ring forged from the heart of a defeated Bowser’s armor. Grants the wearer immunity to fear and grants a chance to break enemy armor with every attack. Flickers with red and gold as it absorbs the enemy’s rage.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3000,
        icon: '📦',
        stock: 4,
        rarity: 'rare',
        effects: [
            "20% chance to break enemy armor with each hit",
        "Immunity to fear effects for 20 seconds",
        "+10% critical strike chance while active"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_bowser_belt': {
        id: 'valley_bowser_bowser_belt',
        name: "Bowser Belt of the King’s Wrath",
        description: "A belt of molten iron and cursed Koopa runes that amplifies the wearer’s strength and aggression. When worn, the belt pulses with dark energy and increases damage output.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+40% damage output to all attacks",
        "+20% movement speed",
        "Grants “Wrath Aura” for 5 seconds after 3 consecutive hits"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'valley_bowser_bowser_bite': {
        id: 'valley_bowser_bowser_bite',
        name: "Bowser Bite Goblet",
        description: "A relic of the King’s last volcanic feast this goblet absorbs enemy damage and channels it into your next attack. Sip to trigger a powerful, explosive strike.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2000,
        icon: '🍷',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Consumes 100 HP to unleash a 200% damage burst on one target",
        "Grants +50% crit chance for 5 seconds after use",
        "Reduces enemy fire resistance by 30% for 30 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'valley_bowser_bowser_bite_amulet': {
        id: 'valley_bowser_bowser_bite_amulet',
        name: "Bowser Bite Amulet",
        description: "A cursed amulet shaped like a massive Koopa shell, it channels the wrath of Bowser himself. When worn, it enhances the wearer’s strength and inflicts fear on enemies, making them flee in terror.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🦎',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Increases max HP by 30%",
        "Inflicts fear on enemies for 2 turns",
        "Boosts attack power by 15% for 3 turns"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_bowser_bite_belt': {
        id: 'valley_bowser_bowser_bite_belt',
        name: "Bowser Bite Belt of the Firelord’s Wrath",
        description: "A belt forged from Bowser’s own volcanic rage. It increases damage and grants a powerful counterattack when hit by fire-based attacks.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3100,
        icon: '📦',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Damage dealt to fire enemies +20%",
        "Counterattack on fire hit: Deals 40% of enemy damage",
        "Reduces cooldown of fire-based abilities by 15%"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'valley_bowser_bowser_bite_potion': {
        id: 'valley_bowser_bowser_bite_potion',
        name: "Bowser Bite Potion",
        description: "A mysterious elixir rumored to be brewed from the molten breath of Bowser himself. Enhances strength and stamina, and grants temporary immunity to poison.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2000,
        icon: '🔮',
        stock: 5,
        rarity: 'rare',
        effects: [
            "Boosts max HP by 30% for 15 seconds",
        "Increases attack power by 25% for 10 seconds",
        "Grants 50% resistance to poison effects"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'valley_bowser_bowser_bomb': {
        id: 'valley_bowser_bowser_bomb',
        name: "Bowser Bomb",
        description: "A explosive device that detonates with a blast of magma and shockwave. Ideal for clearing out enemy strongholds or collapsing lava tunnels.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 300 damage on detonation",
        "Creates a 5m radius shockwave that stuns enemies",
        "Triggers lava burst on hit (adds 100 fire damage)"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'valley_bowser_bowser_bone': {
        id: 'valley_bowser_bowser_bone',
        name: "Bowser’s Bone Whistle",
        description: "A bone carved from the last battle of Bowser’s ancient fortress. Blowing it summons a deafening roar that disorients enemies and creates a 20-second silence zone.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2000,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Creates 20-second silence zone",
        "Disorients enemies within 5 meters",
        "Grants +20% critical strike chance"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'valley_bowser_bowser_bone_belt': {
        id: 'valley_bowser_bowser_bone_belt',
        name: "Bowser Bone Belt of the Deep Earth",
        description: "Worn by the strongest Koopa troopers, this belt channels primal earth power. Grants immunity to falling damage and boosts stamina during long battles.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Immunity to fall damage for 5 seconds",
        "Increases stamina regeneration by 40%",
        "Grants +10% damage resistance to earth types"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_bowser_bow_troop': {
        id: 'valley_bowser_bowser_bow_troop',
        name: "Bowser Bow Troop",
        description: "A magical bow crafted from Bowser’s volcanic rage, capable of firing explosive arrows that detonate on impact. Perfect for ranged combat against lava monsters.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🎯',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Fires explosive arrows with 120 damage",
        "On hit, triggers 50% chance to knockback enemies",
        "Arrow trails leave a 3-second lava burn effect"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'valley_bowser_bowser_brew': {
        id: 'valley_bowser_bowser_brew',
        name: "Bowser Brew of Unyielding Rage",
        description: "A fermented concoction brewed from lava pits and Koopa shells, this drink fuels the user with volcanic fury and boosts combat prowess. Sips of this brew make enemies tremble.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Boosts max HP by 30% for 10 seconds",
        "Increases attack power by 25% for 10 seconds",
        "Grants 50% chance to deal bonus damage to enemies with fire resistance"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'valley_bowser_bowser_burn': {
        id: 'valley_bowser_bowser_burn',
        name: "Bowser Burn Potion",
        description: "A fiery concoction brewed in the heart of the volcanic caverns. Sips this potion to gain a temporary burst of rage, increasing damage and healing from fire damage.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants 30% damage boost for 15 seconds",
        "Restores 25% HP from fire damage taken",
        "Adds 5% chance to ignite enemies on hit"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'valley_bowser_bowser_eyes_aura': {
        id: 'valley_bowser_bowser_eyes_aura',
        name: "Bowser Eyes Aura",
        description: "Wearing this item causes your character to emit a dark aura that slows enemy movement and grants a 10% damage boost from bowser-themed attacks. Only for the loyal.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '👁',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Slows enemy movement by 20% for 5 seconds",
        "Increases damage from bowser-themed attacks by 10%",
        "Grants temporary invisibility in lava zones"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'valley_bowser_bowser_gaze': {
        id: 'valley_bowser_bowser_gaze',
        name: "Bowser’s Gaze Lens",
        description: "A relic that channels Bowser’s chaotic will. Wearing it grants a temporary boost to all stats and allows the wearer to see through enemy illusions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Boosts all stats by 10% for 10 seconds",
        "Reveals illusions and false terrain for 15 seconds",
        "Grants +10% chance to dodge enemy attacks"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_bowser_scream': {
        id: 'valley_bowser_bowser_scream',
        name: "Bowser Scream",
        description: "A sonic device that emits a roar that shatters enemy morale and causes panic. Best used in crowded lava fields.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2200,
        icon: '🎵',
        stock: 4,
        rarity: 'rare',
        effects: [
            "Causes all enemies in 30m radius to panic (30% chance to flee)",
        "Deals 100 sonic damage to all enemies",
        "Grants +20% critical chance for 5 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_bowser_soul_core': {
        id: 'valley_bowser_bowser_soul_core',
        name: "Bowser Soul Core",
        description: "A cursed relic of Bowser’s wrath, imbued with his fury. When activated, it temporarily grants the user a +50% attack speed and 20% armor boost, but causes 10% HP drain per second. A risky power for the brave.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 8000,
        icon: '🌋',
        stock: 1,
        rarity: 'epic',
        effects: [
            "+50% Attack Speed",
        "+20% Armor",
        "-10% HP per second (active)",
        "Only usable once per battle"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_bowser_soul_pearl': {
        id: 'valley_bowser_bowser_soul_pearl',
        name: "Bowser Soul Pearl of the Infernal King",
        description: "A glowing orb that amplifies the wielder’s strength and grants temporary invincibility during combat. Only usable once per battle.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants 100% damage resistance for 5 seconds",
        "Boosts attack power by 50% for 10 seconds",
        "Requires 10 seconds to activate"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'valley_bowser_bowser_soul_shard': {
        id: 'valley_bowser_bowser_soul_shard',
        name: "Bowser Soul Shard of the Inferno Throne",
        description: "A fragment of Bowser’s soul captured during his volcanic battle. Grants the user a temporary aura of power, increasing damage and regeneration while in lava.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4800,
        icon: '💀',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Increases damage by 20% while in lava",
        "Regenerates 10% HP per turn while active",
        "Grants 15% chance to revive fallen allies (once per fight)"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_bowser_soul_tome': {
        id: 'valley_bowser_bowser_soul_tome',
        name: "Bowser Soul Tome",
        description: "An ancient tomes inscribed with the power of the King of Fire. When read, it temporarily transforms the reader into a fiery Koopa spirit, granting flight and fireball summoning.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 5000,
        icon: '📖',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Grants flight for 10 seconds",
        "Summons a fireball that deals 300 damage on impact",
        "Grants 50% dodge chance against fire-based attacks"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 8
    },

  'valley_bowser_bowser_ward': {
        id: 'valley_bowser_bowser_ward',
        name: "Bowser’s Wrath Ward",
        description: "A mystical shield forged from Bowser’s rage. Blocks all physical damage for 3 seconds, then erupts into a fiery blast. Perfect for heroes who need a moment to regroup.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3000,
        icon: '🔮',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Blocks 30% of incoming physical damage",
        "Triggers fiery explosion after 3 seconds (100% damage)",
        "Restores 15% health after explosion"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_burn_bottle': {
        id: 'valley_bowser_burn_bottle',
        name: "Burn Bottle of the Ember King",
        description: "A volatile liquid that ignites upon impact, creating a fiery explosion that can be thrown or poured. Ideal for crowd control or area denial.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1800,
        icon: '🌋',
        stock: 4,
        rarity: 'uncommon',
        effects: [
            "Throws a 3-meter fireball on impact",
        "Deals 50% damage to all enemies in radius",
        "Leaves a lingering burn effect for 3 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'valley_bowser_burned_mace': {
        id: 'valley_bowser_burned_mace',
        name: "Burned Mace of the Infernal King",
        description: "A weapon forged from Bowser’s own defeated magma fists. Strikes deal extra fire damage and ignite foes, making them vulnerable to follow-up attacks.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Fire Damage +40%",
        "Ignites enemies on hit (burn status)",
        "Increases damage against enemies with Fire-type resistances"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'valley_bowser_burnt_blood_pearl': {
        id: 'valley_bowser_burnt_blood_pearl',
        name: "Burnt Blood Pearl",
        description: "A rare gem forged from the essence of a fallen Koopa general. It pulses with crimson light and enhances melee attacks with a devastating heat aura. Perfect for warriors who dare to fight in the heart of the volcano.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '📦',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Deals +20% damage on melee hits",
        "Reduces cooldown of fire-based abilities by 50%",
        "Restores 15% HP when used in a lava zone"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_burnt_heart': {
        id: 'valley_bowser_burnt_heart',
        name: "Burnt Heart Pendant",
        description: "Worn by those who have faced the wrath of the Fire Lord, this pendant channels volcanic rage into devastating strikes. Slightly increases damage and grants a 5% chance to ignite enemies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3200,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "+15% damage to enemies with fire status",
        "5% chance to ignite targets on hit",
        "Grants 10% bonus HP while in lava zones"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'valley_bowser_burnt_heart_essence': {
        id: 'valley_bowser_burnt_heart_essence',
        name: "Burnt Heart Essence",
        description: "A vial containing the essence of a defeated Bowser’s core. When consumed, it grants temporary invulnerability and a chance to revive fallen allies.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1500,
        icon: '🍬',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Temporary Invulnerability (5 turns)",
        "Revive ally for 1 turn if HP is below 20%",
        "Reduces enemy fire resistance by 20% for 2 turns"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 4
    },

  'valley_bowser_burnt_soul': {
        id: 'valley_bowser_burnt_soul',
        name: "Burnt Soul Pendant",
        description: "A relic forged from the ashes of a fallen volcano guardian. Grants fiery resilience and enhances your team’s morale under pressure.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Reduces fire damage taken by 30%",
        "Grants 20% bonus to team morale during fire-based events",
        "Grants +20% critical hit chance for 5 seconds after using fire spells"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_burnt_soul_ammunition': {
        id: 'valley_bowser_burnt_soul_ammunition',
        name: "Burnt Soul Ammunition",
        description: "Loaded with the essence of fallen warriors, these bullets explode upon impact, dealing massive damage and triggering environmental fires. Perfect for clearing dense enemy swarms.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1800,
        icon: '🔮',
        stock: 4,
        rarity: 'rare',
        effects: [
            "Explodes on hit causing 100% damage + 50% fire damage",
        "Triggers 10-second fire aura in 30m radius",
        "Consumes 100% of weapon ammo for next 2 shots"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'valley_bowser_burnt_soul_core': {
        id: 'valley_bowser_burnt_soul_core',
        name: "Burnt Soul Core of the Ashen Titan",
        description: "A relic from a fallen volcanic titan. When wielded, it inflicts burning damage and slows enemies in its path.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Inflicts 50% extra damage to enemies with fire or lava resistance",
        "Slows enemies by 20% for 8 seconds after attack",
        "Requires 10 seconds to charge and activate"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'valley_bowser_burnt_sword_core': {
        id: 'valley_bowser_burnt_sword_core',
        name: "Burnt Sword Core",
        description: "A relic forged from a fallen lava dragon’s blade, this core channels destructive energy. When wielded, it pulses with crimson light and shatters enemy armor.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Inflicts 25% extra damage to fire-resistant enemies",
        "Grants +10% to critical hit chance",
        "Reduces enemy fire resistance by 20% for 5 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 6
    },

  'valley_bowser_crimson_ward': {
        id: 'valley_bowser_crimson_ward',
        name: "Crimson Ward Cloak",
        description: "A ceremonial cloak forged from the ashes of the Crimson Fleet’s fallen. Grants protection against magic and summons.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "+30% magic resistance",
        "Blocks 1 summon per battle",
        "+10% defense when in combat with undead"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'valley_bowser_earth_crystal': {
        id: 'valley_bowser_earth_crystal',
        name: "Earth Crystal of the Subterranean King",
        description: "A gem forged from ancient volcanic core, granting ground control and elemental resonance. Shatters terrain and summons seismic shockwaves.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 3000,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "+30% damage to ground-based enemies",
        "Summons seismic shockwave (area effect, 300 damage)",
        "Grants 20% bonus to earth damage for 5 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 6
    },

  'valley_bowser_earth_land_mystic_ink': {
        id: 'valley_bowser_earth_land_mystic_ink',
        name: "Earth Land Inkwell",
        description: "A vial of dimensional ink from the Flat Earth conspiracy",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 1000,
        icon: '🖋',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Allows inscription of real-world facts onto any surface",
        "Grants +1 to Perception checks against reality distortions",
        "Can be used to mark locations on maps for the Koopa Navy",
        "Causes temporary dizziness if used in volcanic zones",
        "Cannot be used to write “Peach Loyalists are lying”",
        "If used during the Ember Summit, may trigger a faction betrayal"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 6
    },

  'valley_bowser_earthquake_glove': {
        id: 'valley_bowser_earthquake_glove',
        name: "Earthquake Glove",
        description: "A pair of gloves that amplify the power of your strikes with seismic tremors. Each hit causes the ground to quake, triggering environmental damage.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Each hit creates a 3-second tremor that deals 20% area damage",
        "Increases attack range by 20%",
        "Inflicts 10% ground instability to enemies in area"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_earthshaker_ring': {
        id: 'valley_bowser_earthshaker_ring',
        name: "Earthshaker Ring of the Volcano King",
        description: "Wears this ring to amplify your strength against rocky terrain. Causes ground tremors on hit, knocking enemies back. Ideal for fighting on volcanic plateaus.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🌋',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Increases melee damage by 25%",
        "Causes ground tremor on hit, knocking back enemies",
        "Grants 10% movement speed bonus on volcanic terrain"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_ember_aura': {
        id: 'valley_bowser_ember_aura',
        name: "Ember Aura Ring",
        description: "Emits a faint glow that attracts lava and heat sources, granting bonus attack power and movement speed in high-temperature zones.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants 15% bonus movement speed in lava terrain",
        "Increases damage dealt by 10% when near heat sources",
        "Activates auto-heat shield on enemy contact"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'valley_bowser_ember_shroud': {
        id: 'valley_bowser_ember_shroud',
        name: "Ember Shroud Cloak",
        description: "Wears the cloak of a lava demon to absorb enemy fire and reflect heat. Ideal for stealthy ambushes in volcanic trenches. Its glow makes it hard to spot in smoky ruins.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3000,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Reflects 50% of incoming fire damage",
        "Grants 10% increased speed in fire zones",
        "Grants 30% dodge chance against fire attacks"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_ember_soul_cape': {
        id: 'valley_bowser_ember_soul_cape',
        name: "Ember Soul Cape",
        description: "Woven from the last breath of a primordial wyrm",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🌋',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants +2 to all melee attacks",
        "Absorbs 1d4 fire damage per turn",
        "Increases fire resistance by 50% for 3 turns",
        "Causes 1d6 fire damage to enemies on hit",
        "Unusable in ice terrain",
        "If worn during a Koopa Navy raid, triggers a 10% chance to summon a wyrm spirit"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 7
    },

  'valley_bowser_ember_talisman': {
        id: 'valley_bowser_ember_talisman',
        name: "Ember Talisman of the Inferno King",
        description: "A relic forged from Bowser’s last breath of rage. Wears its power with a whisper of doom. Grants the user the ability to summon lava bursts.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 5000,
        icon: '🔮',
        stock: 0,
        rarity: 'rare',
        effects: [
            "Summons a 10x10 lava burst that deals 400 damage and burns enemies for 2 turns",
        "Grants +10% movement speed in lava terrain",
        "Reduces enemy resistance to fire damage by 30%"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_embers_bottle': {
        id: 'valley_bowser_embers_bottle',
        name: "Embers Bottle of the Volcanic Storm",
        description: "A small, glass bottle filled with swirling lava essence. When thrown, it creates a fiery explosion that damages all nearby foes. Ideal for clearing crowds or breaking through lava barriers. Beware—its heat can burn your hands.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 150% damage to all enemies in a 5m radius",
        "Causes 30% fire damage to all enemies hit",
        "Creates a 30-second burn debuff on hit enemies"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_embers_of_bowser': {
        id: 'valley_bowser_embers_of_bowser',
        name: "Embers of Bowser",
        description: "A glowing volcanic shard infused with Bowser’s rage, granting fiery resilience and explosive damage. Perfect for Koopa warriors who dare to burn the earth.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+20% fire resistance",
        "+15% damage on melee attacks",
        "Inflicts 30% fire damage on enemies upon landing critical hit"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'valley_bowser_embershield': {
        id: 'valley_bowser_embershield',
        name: "Ember Shield of the Crimson Flame",
        description: "A molten shield forged from Bowser’s volcanic fury. Grants fire resistance and emits a radiant heat aura that burns enemy armor. Perfect for frontline warriors facing lava maws and lava golems.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Fire Resistance +30%",
        "Radiant Heat Aura: Deals 5% fire damage to enemies within 3m",
        "Grants +20% movement speed when charged with magma"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'valley_bowser_embershroud_tunic': {
        id: 'valley_bowser_embershroud_tunic',
        name: "Embershroud Tunic",
        description: "Woven from the bones of ancient lava dragons, this tunic grants the wearer a protective shroud of molten heat. Suits the fiery battlefield and offers a unique aura that repels magma creatures.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🌋',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants 20% resistance to lava damage",
        "Increases movement speed by 10% while in lava zones",
        "Grants +5% damage to fire-based attacks"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_emerald_ash_pouch': {
        id: 'valley_bowser_emerald_ash_pouch',
        name: "Emerald Ash Pouch of the Volcanic Vault",
        description: "A pouch filled with crystallized volcanic ash that enhances the wearers resilience against lava and heat. When shaken, it emits a low hum of ancient power.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1800,
        icon: '🍬',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Regenerates 10% HP per second while in lava",
        "Reduces damage from fire-based attacks by 25%",
        "Grants temporary immunity to burning for 30 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'valley_bowser_flame_amber': {
        id: 'valley_bowser_flame_amber',
        name: "Flame Amber of the Infernal Vault",
        description: "A rare crystal that pulses with molten fire. When held, it temporarily boosts movement speed and reveals enemy weak points in lava zones.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1800,
        icon: '🔮',
        stock: 5,
        rarity: 'rare',
        effects: [
            "+20% movement speed for 10 seconds",
        "Reveals hidden enemy vulnerabilities",
        "Burns for 3 seconds on contact with lava"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_flame_binder': {
        id: 'valley_bowser_flame_binder',
        name: "Flame Binder",
        description: "A volcanic stone bound with lava-enchanted threads that channels heat into devastating melee strikes. Perfect for charging into Bowser’s molten trenches.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+20% damage on melee attacks",
        "+15% critical chance when hit by fire-based damage",
        "Grants 10% resistance to burning effects"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'valley_bowser_flame_bolt_launcher': {
        id: 'valley_bowser_flame_bolt_launcher',
        name: "Flame Bolt Launcher",
        description: "Fires searing volcanic projectiles that burn enemies for 3 seconds. Ideal for clearing lava pits and Koopa minions. Equipped with a molten core that recharges after 30 seconds.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 120 damage per shot",
        "Burns target for 3 seconds",
        "Core recharges after 30 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_flame_helm': {
        id: 'valley_bowser_flame_helm',
        name: "Flame Helm of the Inferno King",
        description: "Wears the crown of a lava-worshiping monarch and channels volcanic fury. Grants fire resistance and inflicts burns on foes. Ideal for front-line Koopa warriors.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+20% fire resistance",
        "Inflicts 20% burn damage on enemies",
        "+50% attack speed while under 30% HP"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_flame_satchel': {
        id: 'valley_bowser_flame_satchel',
        name: "Flame Satchel of the Molten Maw",
        description: "A fiery satchel that ignites enemy armor upon contact. Perfect for Koopa Troop skirmishes in lava fields. When used, it releases a burst of magma that deals damage and reduces enemy defense for 3 turns.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1500,
        icon: '🔥',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Deals 120 damage on hit",
        "Reduces enemy defense by 30% for 3 turns",
        "Applies Burn effect to enemies for 1 turn"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_flame_scarf': {
        id: 'valley_bowser_flame_scarf',
        name: "Ashen Ember Scarf",
        description: "Woven from lava-scarred koopa hide and molten obsidian thread, this scarf channels volcanic rage. Wears the heat of Bowser’s wrath and grants temporary fire resistance.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+30% fire damage dealt",
        "Immunity to fire burns for 10 seconds",
        "Increases flame resistance by 20%"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'valley_bowser_flame_siphon': {
        id: 'valley_bowser_flame_siphon',
        name: "Flame Siphon Gauntlet",
        description: "Siphons heat from nearby lava flows to boost your attack power and reduce stamina consumption. Ideal for melee combatants in the volcanic heart of the Valley.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Boosts melee damage by 30% while in lava terrain",
        "Reduces stamina cost of melee attacks by 25%",
        "Inflicts minor burning damage on enemies after melee hits"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'valley_bowser_flame_torch': {
        id: 'valley_bowser_flame_torch',
        name: "Flame Torch of the Volcanic King",
        description: "A forged torch that ignites with molten lava, granting heat resistance and minor fire damage. Perfect for navigating the Valley of Bowser’s infernal terrain.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants 30% resistance to fire damage",
        "Deals 20% bonus damage to fire-type enemies",
        "Increases movement speed in lava zones by 15%"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_fury_glove': {
        id: 'valley_bowser_fury_glove',
        name: "Fury Glove of the Inferno King",
        description: "A gauntlet that channels rage into devastating melee strikes, causing enemies to flinch when hit. Perfect for close combat in volcanic ruins.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3000,
        icon: '💥',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Increases melee damage by 30%",
        "Enemies flinch for 1 second after being hit",
        "Causes 10% chance to trigger a 2-second burn on target"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'valley_bowser_gloom_rod': {
        id: 'valley_bowser_gloom_rod',
        name: "Gloom Rod of the Fallen King",
        description: "A staff forged from the bones of a fallen volcanic guardian. Grants temporary invincibility during boss fights and causes nearby enemies to become disoriented.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4800,
        icon: '📦',
        stock: 2,
        rarity: 'rare',
        effects: [
            "1 turn invincibility",
        "Disorient enemy for 2 turns",
        "Deals extra damage to bosses"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'valley_bowser_gravity_bubble_satchel': {
        id: 'valley_bowser_gravity_bubble_satchel',
        name: "Gravity Bubble Satchel",
        description: "A pack that defies vertical laws",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🌪',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Allows user to suspend in midair for 10 seconds per use",
        "Grants 20% increased jump height",
        "Disrupts gravity fields in a 10 meter radius",
        "Causes minor disorientation if used too frequently",
        "Only usable in the Grand Country or Valley of Bowser",
        "Crafted by: Kingdom Gondor"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 7
    },

  'valley_bowser_inkopolis_ink_pestle': {
        id: 'valley_bowser_inkopolis_ink_pestle',
        name: "Inkopolis Pestle of the Squidly Mind",
        description: "",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 800,
        icon: '🖋',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Consuming this item grants temporary control over ink-based entities",
        "Grants +2 to all ink damage rolls for 3 rounds",
        "Causes minor ink stains to appear on the user’s skin",
        "May cause temporary disorientation if used in high-stress combat",
        "Increases the user’s chance to dodge ink attacks by 10%",
        "Requires attunement to a squid faction or ink-based artifact"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Bob-omb Rush Delivery',
        levelRequirement: 4
    },

  'valley_bowser_item_name_here': {
        id: 'valley_bowser_item_name_here',
        name: "Mr Warios Profit Exchange Token",
        description: "A token that converts gold coins to volatile alternative currencies",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 5000,
        icon: '💰',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Converts 100 gold coins to 200 alternative currency units",
        "Grants 10% bonus profit from all shop transactions",
        "Triggers currency collapse if used in Koopa banking zones",
        "Made by: Mages Guild"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pianta Chuck Express',
        levelRequirement: 6
    },

  'valley_bowser_koopa_ambrosia': {
        id: 'valley_bowser_koopa_ambrosia',
        name: "Koopa Ambrosia of the Firecliff",
        description: "A rare elixir brewed from volcanic berries and magma spores. Restores health and temporarily boosts stamina for those navigating lava fields.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Restores 50% max HP on use",
        "Increases movement speed by 15% for 20 seconds",
        "Slight thermal resistance bonus for 10 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'valley_bowser_koopa_blast_core': {
        id: 'valley_bowser_koopa_blast_core',
        name: "Koopa Blast Core",
        description: "A compact explosive core that launches when thrown. Deals 200 damage and creates a shockwave that stuns enemies. Can be thrown up to 3 times per battle.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3000,
        icon: '💣',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Deals 200 damage on impact",
        "Stuns enemies for 2 seconds",
        "Can be thrown up to 3 times per battle"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_koopa_blasters': {
        id: 'valley_bowser_koopa_blasters',
        name: "Koopa Blasters",
        description: "Heavy artillery cannons strapped to your back, firing lava-shells that explode on impact. Designed for siege warfare and volcanic trenches.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "+30% attack range",
        "+10% damage to ground targets",
        "Deals extra fire damage on hit"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'valley_bowser_koopa_blood': {
        id: 'valley_bowser_koopa_blood',
        name: "Koopa Blood Tincture",
        description: "A dark elixir brewed from the blood of fallen Koopa Troop. Increases speed and grants temporary invisibility. Ideal for stealthy ambushes in volcanic ruins.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+50% movement speed",
        "10 seconds invisibility on use",
        "+20% critical hit chance"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_koopa_bolt': {
        id: 'valley_bowser_koopa_bolt',
        name: "Koopa Bolt Launcher",
        description: "A compact, magma-charged launcher that fires explosive projectiles. Ideal for disrupting enemy formations from a distance.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Fires 3 explosive bolts with 200% damage",
        "Each bolt applies 50% fire damage on impact",
        "Reloads in 3 seconds after firing"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_koopa_bolt_cannon': {
        id: 'valley_bowser_koopa_bolt_cannon',
        name: "Koopa Bolt Cannon",
        description: "A compact cannon mounted on a Koopa shell, firing explosive projectiles that explode on impact. Ideal for clearing groups of enemies in volcanic terrain.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Fires 3 explosive shells per charge",
        "Each shell deals 40% extra damage to enemies in lava zones",
        "Recharges every 5 seconds with 20% chance to ignite terrain on hit"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_koopa_bone_hammer': {
        id: 'valley_bowser_koopa_bone_hammer',
        name: "Koopa Bone Hammer",
        description: "A blunt, volcanic-tempered mace forged from ancient Koopa skulls. Strikes cause critical hits on armored foes, and each hit cracks the ground, creating temporary lava pools.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3200,
        icon: '📦',
        stock: 2,
        rarity: 'rare',
        effects: [
            "20% chance to deal critical damage",
        "Creates 3x3 lava pool on hit (lasts 3 turns)",
        "+10% defense against physical attacks"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_koopa_bone_heart': {
        id: 'valley_bowser_koopa_bone_heart',
        name: "Koopa Bone Heart of Molten Resolve",
        description: "A cursed relic forged from the heart of a defeated Koopa General. Wields the power to summon lava spikes from the ground — perfect for turning enemy encampments into molten slag.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '💀',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Summons lava spikes on hit (30% chance)",
        "+15% HP regeneration while in lava zones",
        "+10% chance to stun enemies after 3 consecutive hits"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'valley_bowser_koopa_catalyst': {
        id: 'valley_bowser_koopa_catalyst',
        name: "Koopa Catalyst of the Volcanic Core",
        description: "A glowing mineral that channels volcanic energy into your weapon, granting devastating explosive strikes. Requires a charged weapon to activate.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '📦',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Charges weapon for 10 seconds",
        "Deals +20% damage on next strike",
        "Causes a 3-second explosion upon impact, damaging all nearby enemies"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'valley_bowser_koopa_circuit': {
        id: 'valley_bowser_koopa_circuit',
        name: "Koopa Circuit Core",
        description: "A stolen circuit board from Bowser’s fortress, infused with volcanic energy. When inserted into compatible gear, it grants temporary flight and heat resistance, perfect for escaping lava flows.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants 20% flight speed for 10 seconds",
        "Reduces fire damage taken by 30%",
        "Can be used to upgrade gear or create new items"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'valley_bowser_koopa_core': {
        id: 'valley_bowser_koopa_core',
        name: "Koopa Core Fragment",
        description: "A pulsating core taken from a defeated Koopa King. This material can be fused into powerful weapons or armor. Its energy resonates with the volcanic heart of the Valley.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 3000,
        icon: '📦',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Increases weapon durability by 25% when used",
        "Boosts critical hit chance by 10%",
        "Enhances fire-based abilities by 15%"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 6
    },

  'valley_bowser_koopa_crown': {
        id: 'valley_bowser_koopa_crown',
        name: "Koopa Crown of the Volcanic Throne",
        description: "A regal, obsidian crown infused with the essence of Bowser’s wrath. Increases attack power and grants temporary invincibility during lava boss fights.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3200,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "+50% attack damage",
        "30 second invincibility on boss hits",
        "Causes lava to pool around the wearer for 10 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_koopa_grip_glove': {
        id: 'valley_bowser_koopa_grip_glove',
        name: "Koopa Grip Glove",
        description: "A heavy, magma-infused gauntlet that enhances strength and grip. Perfect for climbing volcanic cliffs or crushing enemy defenses. Causes enemies to slip on contact.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2800,
        icon: '🖐',
        stock: 1,
        rarity: 'rare',
        effects: [
            "+25% strength bonus",
        "Enemies slip on contact (15% chance)",
        "+10% defense against crushing damage"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_koopa_heart': {
        id: 'valley_bowser_koopa_heart',
        name: "Koopa Heart Shield",
        description: "A relic of the ancient Koopa Kingdom, this shield grants invincibility for 3 seconds after taking a hit. Perfect for surviving Bowser’s final assault.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2800,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Invincibility for 3 seconds after taking damage",
        "+15% armor regeneration",
        "+5% chance to reduce enemy attack power"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'valley_bowser_koopa_heart_amber': {
        id: 'valley_bowser_koopa_heart_amber',
        name: "Koopa Heart Amber",
        description: "A translucent amber gem embedded with the spirit of a fallen Koopa Trooper. Worn as a pendant, it grants buffs to allies in battle and enhances the wearer’s resilience against shock damage. Glows faintly in the dark and radiates a sense of loyalty.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2000,
        icon: '💎',
        stock: 5,
        rarity: 'rare',
        effects: [
            "+15% defense against shock damage",
        "Allies nearby gain +5% attack speed for 20 seconds",
        "Regenerates 10% HP per 5 seconds while active"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_koopa_heart_ward': {
        id: 'valley_bowser_koopa_heart_ward',
        name: "Koopa Heart Ward",
        description: "A relic forged from a fallen Koopa Troop general’s heart, this amulet shields the wearer from fire and lava damage. It also boosts morale in combat.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Reduces fire damage taken by 40%",
        "Increases team morale by +15% in battle",
        "Grants 20% chance to dodge fire-based attacks"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_koopa_ignite': {
        id: 'valley_bowser_koopa_ignite',
        name: "Koopa Ignite Bomb",
        description: "A volatile grenade packed with lava core and Koopa Troop’s signature explosive rage. Explodes on impact, igniting nearby enemies.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1500,
        icon: '🔮',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Deals 50% more damage on first hit",
        "Triggers a 3-turn fire aura around user",
        "Self-destructs after 3 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_koopa_knife': {
        id: 'valley_bowser_koopa_knife',
        name: "Koopa Knife of the Volcanic Climb",
        description: "A wickedly sharp blade forged from obsidian and volcanic ash. It glows faintly when swung and cuts through enemy armor with ease. Ideal for close-range combat in lava-drenched terrain.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+25% critical hit chance",
        "+10% attack speed",
        "Deals extra damage to enemies with fire or lava immunity"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'valley_bowser_koopa_knife_edge': {
        id: 'valley_bowser_koopa_knife_edge',
        name: "Koopa Knife Edge",
        description: "A razor-sharp blade forged from the hardened shell of a defeated Koopa Troop general. Deals extra damage to armored foes and leaves a lingering heat trail that burns enemies on impact.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 20% extra damage to armored enemies",
        "Leaves 500 heat trail on impact",
        "Reduces cooldown of next attack by 3 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_koopa_loyalty_amulet': {
        id: 'valley_bowser_koopa_loyalty_amulet',
        name: "Koopa Loyalist Amulet",
        description: "A glowing amulet forged by the Koopa Troop’s finest. Grants bonus defense and triggers a loyalty buff when allies are nearby. Wears off after 30 minutes of inactivity.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2000,
        icon: '🧭',
        stock: 4,
        rarity: 'uncommon',
        effects: [
            "Defense +30%",
        "Loyalty Buff: Allies within 3 tiles gain +10% attack for 2 turns",
        "If ally dies, triggers “Koopa’s Honor” – restores 50% HP to the nearest ally"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'valley_bowser_koopa_navy_signal': {
        id: 'valley_bowser_koopa_navy_signal',
        name: "Koopa Navy Signal Flare",
        description: "A beacon that alerts the Koopa fleet",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 800,
        icon: '🌈',
        stock: 10,
        rarity: 'uncommon',
        effects: [
            "Emits loud signal that alerts nearby Koopa vessels",
        "Triggers automatic navigation to nearest harbor",
        "Causes minor confusion to non-Koopa units",
        "Burns 10 seconds after deployment",
        "Can be deployed from any surface",
        "Crafted by: Shy Guy Smugglers"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 3
    },

  'valley_bowser_koopa_rage': {
        id: 'valley_bowser_koopa_rage',
        name: "Koopa Rage Potion",
        description: "Brewed from the wrath of a thousand defeated Koopa Troop. Consuming this potion unleashes a burst of fury and temporarily increases attack speed.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🍺',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Increases attack speed by 25% for 45 seconds",
        "Deals 20% bonus damage to enemies within 5 meters",
        "Reduces cooldowns on all abilities by 10%"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_koopa_satchel': {
        id: 'valley_bowser_koopa_satchel',
        name: "Koopa Satchel of Ashes",
        description: "A battered satchel filled with hardened volcanic ash and secret Koopa lore. Wearing it grants a minor resistance to fire damage and unlocks hidden paths in lava zones.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🧱',
        stock: 1,
        rarity: 'rare',
        effects: [
            "20% fire damage resistance",
        "Reveals hidden lava tunnels on map",
        "Unlocks Koopa lore questline"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'valley_bowser_koopa_scales': {
        id: 'valley_bowser_koopa_scales',
        name: "Koopa Troop Scales of the Volcanic Realm",
        description: "Ancient scales from a defeated Koopa King grant temporary volcanic resilience. Wearing them makes you immune to lava damage for 3 turns.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🐢',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Immune to lava damage for 3 turns",
        "Increases attack power by 10% while equipped",
        "Grants 5% chance to trigger a lava explosion on hit"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_koopa_scorched_heart': {
        id: 'valley_bowser_koopa_scorched_heart',
        name: "Koopa Scorched Heart",
        description: "A cursed relic from Bowser’s volcanic lair. Emits a haunting glow that unnerves enemies. Best used at night to disrupt enemy formations.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 25% psychic damage to enemies",
        "Reduces enemy attack speed by 20% for 20 seconds",
        "Grants invisibility for 5 seconds when used"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'valley_bowser_koopa_shield': {
        id: 'valley_bowser_koopa_shield',
        name: "Koopa Shield of Molten Might",
        description: "Absorbs 500 damage and reflects 20% of incoming fire. Wields a fiery aura that slows enemy movement for 2 seconds when struck.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Absorbs 500 damage",
        "Reflects 20% of fire damage",
        "Slows enemy movement for 2 seconds on hit"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_koopa_soul': {
        id: 'valley_bowser_koopa_soul',
        name: "Koopa Soul Ember",
        description: "A glowing, ember-infused shell of a fallen Koopa Troop commander. Wields devastating power in battle, but consumes stamina with each use. A relic of war and glory.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1500,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Deals 30% extra damage for 5 seconds",
        "Reduces enemy defense by 20%",
        "Increases movement speed by 15% for 3 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_koopa_soul_amber': {
        id: 'valley_bowser_koopa_soul_amber',
        name: "Koopa Soul Amber",
        description: "A glowing crystal forged from the essence of defeated Koopa generals. Enhances the wielder’s combat instincts and grants temporary invincibility during critical strikes.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Restores 100 HP on activation",
        "Grants 3 seconds of invincibility",
        "Increases attack speed by 20% for 10 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_koopa_soul_belt': {
        id: 'valley_bowser_koopa_soul_belt',
        name: "Koopa Soul Belt",
        description: "A cursed belt worn by ancient Koopa warriors who sacrificed their souls to the volcano. It grants speed and strength to those who dare to wear it—though at the cost of temporary sanity.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Increases movement speed by 25%",
        "Boosts physical damage by 10%",
        "Causes 2 seconds of mind-blowing hallucination after every 3 attacks"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'valley_bowser_koopa_soul_bolt': {
        id: 'valley_bowser_koopa_soul_bolt',
        name: "Koopa Soul Bolt",
        description: "A mystical projectile that fires a soul-charged shell of lava. Strikes enemies with explosive damage and inflicts a minor debuff that slows movement for 3 seconds.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🎯',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Deals 50% extra damage against enemies with fire resistance",
        "Slows target movement for 3 seconds",
        "Recharges after 30 seconds of cooldown"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 4
    },

  'valley_bowser_koopa_soul_cloak': {
        id: 'valley_bowser_koopa_soul_cloak',
        name: "Koopa Soul Cloak",
        description: "A cloak woven from the essence of defeated Koopa generals. Grants temporary flight and shields the wearer from falling damage during volcanic eruptions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '🦎',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants 3 seconds of flight while airborne",
        "Reduces fall damage by 75%",
        "Grants 20% armor penetration"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 7
    },

  'valley_bowser_koopa_soul_cloth': {
        id: 'valley_bowser_koopa_soul_cloth',
        name: "Koopa Soul Cloth of the Flame King",
        description: "A sacred garment woven from the last breath of a fallen Koopa general. Grants buffs to all allies within range and reduces enemy spawn rate.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Buffs nearby allies with +20% attack speed",
        "Reduces enemy spawn rate by 30% for 10 seconds",
        "Grants 50% chance to dodge incoming attacks"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_koopa_soul_shard': {
        id: 'valley_bowser_koopa_soul_shard',
        name: "Koopa Soul Shard of the Crimson Throne",
        description: "A shard of ancient Koopa royalty that channels the rage of defeated bosses. Grants temporary rage attacks and boosts damage against enemies with shields.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Boosts attack power by 30% for 3 turns",
        "Applies “Rage” status to self, causing enemies to flinch on hit",
        "Reduces enemy defense by 15% for 2 turns if used against armored foes"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'valley_bowser_koopa_soul_tether': {
        id: 'valley_bowser_koopa_soul_tether',
        name: "Koopa Soul Tether",
        description: "A cursed artifact that binds your enemy’s soul to your weapon for 5 seconds, causing them to explode upon defeat. Wears off after 30 seconds of inactivity.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3200,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Enemies explode on defeat for 150% damage",
        "Grants +10% Critical Hit Chance",
        "Reduces enemy armor by 25% for 5 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 6
    },

  'valley_bowser_koopa_torch': {
        id: 'valley_bowser_koopa_torch',
        name: "Koopa Torch",
        description: "A glowing torch forged from lava and Koopa shell. Grants fire resistance and illuminates dark paths. Use in dungeons or at night.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2000,
        icon: '🔮',
        stock: 4,
        rarity: 'rare',
        effects: [
            "+15% fire resistance",
        "+10% movement speed in dark terrain",
        "Illuminates path for 30 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'valley_bowser_koopa_troop_belt': {
        id: 'valley_bowser_koopa_troop_belt',
        name: "Koopa Troop Belt of the Infernal March",
        description: "Worn by the fiercest of the Koopa ranks, this belt channels the energy of volcanic marches. It enhances movement speed in lava terrain and summons a temporary lava shield.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Increases movement speed by 25% in lava zones",
        "Summons a 3-turn lava shield (reduces damage by 30%)",
        "Grants +50% attack power when moving through lava"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'valley_bowser_koopa_troop_blast_cannon': {
        id: 'valley_bowser_koopa_troop_blast_cannon',
        name: "Koopa Troop Blast Cannon",
        description: "A heavy artillery cannon carved from hardened volcanic rock, designed to fire explosive shells that explode on impact. Perfect for clearing lava pits and enemy hordes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🎯',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Fires explosive shells with 150 damage",
        "On hit, causes 30% chance to inflict “Lava Burn” debuff",
        "Can be charged for 3 seconds to increase damage"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'valley_bowser_koopa_troop_satchel': {
        id: 'valley_bowser_koopa_troop_satchel',
        name: "Koopa Troop Satchel of Volcanic Luck",
        description: "A rugged satchel filled with molten relics from Bowser’s trenches. When equipped, it grants a chance to drop powerful loot from enemies in volcanic areas.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3000,
        icon: '🔮',
        stock: 1,
        rarity: 'rare',
        effects: [
            "15% chance to drop rare loot from enemies",
        "Increases drop rate of fire-based items",
        "Grants bonus experience from lava-themed quests"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_koopa_troop_torch': {
        id: 'valley_bowser_koopa_troop_torch',
        name: "Koopa Troop Torch of Unshakable Will",
        description: "A heavy, spiked torch forged from volcanic steel. Its light reveals hidden paths and enemies, while its glow temporarily ignites flammable terrain. Ideal for patrols through lava fields.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Reveals hidden enemy positions for 5 seconds",
        "Causes nearby terrain to catch fire for 3 seconds",
        "Increases stamina regeneration by 10% while active"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'valley_bowser_koopa_troop_ward': {
        id: 'valley_bowser_koopa_troop_ward',
        name: "Koopa Troop Ward",
        description: "A portable fortress that summons 2 armored Koopa Troops to defend nearby allies. Perfect for siege defense or flank engagements.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4100,
        icon: '🔮',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Summons 2 Koopa Troop units for 10 seconds",
        "Each unit deals 250 damage per hit",
        "Provides 30% armor bonus to allies within 10m"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 6
    },

  'valley_bowser_kremling_smuggle_run': {
        id: 'valley_bowser_kremling_smuggle_run',
        name: "Koolaid Kombat Vial",
        description: "A bottled illusion of victory",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 500,
        icon: '🍹',
        stock: 12,
        rarity: 'common',
        effects: [
            "Grants temporary invincibility for 1 turn",
        "Causes 1d4 confusion to enemies",
        "Visual effect: emits rainbow glow",
        "May trigger a curse if consumed by non-Koopa",
        "Disappears after use",
        "Only effective in non-volcanic zones"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 2
    },

  'valley_bowser_lava_belt': {
        id: 'valley_bowser_lava_belt',
        name: "Lava Belt",
        description: "A flexible belt infused with magma energy. Grants the wearer resistance to fire and allows movement through lava without taking damage.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants 50% fire resistance",
        "Increases movement speed through lava terrain by 20%",
        "Activates a 1-turn lava shield when entering lava (absorbs 200 damage)"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'valley_bowser_lava_blast': {
        id: 'valley_bowser_lava_blast',
        name: "Lava Blast Cane",
        description: "A cursed staff that channels volcanic energy into explosive strikes. Perfect for ranged or melee users who want to blast enemies into oblivion.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 50% extra damage on first hit of any attack",
        "Has a 10% chance to cause a small explosion on hit",
        "Reduces cooldown of fire-based abilities by 20%"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'valley_bowser_lava_bloom': {
        id: 'valley_bowser_lava_bloom',
        name: "Lava Bloom Petal",
        description: "A rare petal of volcanic flora that blooms when touched. Absorbs fire damage and regenerates HP over time. Best used in fire-heavy zones to survive Bowser’s wrath.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🌿',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Restores 10 HP per second while active",
        "Absorbs 50% of incoming fire damage",
        "Grants minor speed boost while active"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 4
    },

  'valley_bowser_lava_bolt': {
        id: 'valley_bowser_lava_bolt',
        name: "Lava Bolt",
        description: "A charged explosive grenade that detonates with devastating force in volcanic terrain. Deals 200 damage and creates a 3-second burn area for enemies. Perfect for clearing crowds of enemy Koopa units.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1800,
        icon: '🔮',
        stock: 4,
        rarity: 'rare',
        effects: [
            "Deals 200 damage on detonation",
        "Creates 3 second burn zone",
        "+10% attack speed while active"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'valley_bowser_lava_bolt_ammo': {
        id: 'valley_bowser_lava_bolt_ammo',
        name: "Lava Bolt Ammo Pack",
        description: "A pack of explosive projectiles that launch when fired. Each shot creates a fiery blast that damages enemies and ignites terrain. Perfect for clearing lava pits and boss encounters.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2000,
        icon: '📦',
        stock: 4,
        rarity: 'rare',
        effects: [
            "Fires 3 shots per use",
        "Each shot deals 150 fire damage",
        "Deals 50% bonus damage to enemies with fire resistance",
        "Creates 3-second fire area effect upon impact"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'valley_bowser_lava_bolt_cannon': {
        id: 'valley_bowser_lava_bolt_cannon',
        name: "Lava Bolt Cannon",
        description: "A fiery cannon that fires molten projectiles infused with volcanic rage. Perfect for breaking through Koopa Troop defenses or igniting enemy fortresses.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 150% damage to enemies with Fire resistance",
        "Fires a shockwave that knocks back enemies on hit",
        "Consumes 100 MP per shot"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_lava_bolt_shard': {
        id: 'valley_bowser_lava_bolt_shard',
        name: "Lava Bolt Shard",
        description: "A shard of volcanic crystal that channels lava energy into your attacks. When used, it unleashes a fiery blast that damages all enemies in a 5m radius. Only found in the deepest caves beneath Bowser’s lair.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '📦',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Casts Lava Blast (area damage 300)",
        "Increases fire damage by 25% for 10s",
        "Requires 10s cooldown"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'valley_bowser_lava_bomb': {
        id: 'valley_bowser_lava_bomb',
        name: "Lava Bomb of the Scorched Summit",
        description: "A volatile explosive that detonates on impact, dealing massive fire damage and creating a temporary lava field. Ideal for clearing enemy groups in volcanic terrain.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 150% fire damage on detonation",
        "Creates 3x3 lava zone for 10 seconds after explosion",
        "Enemies within zone take 20% extra damage for 5 seconds"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'valley_bowser_lava_bottle': {
        id: 'valley_bowser_lava_bottle',
        name: "Lava Bottle of the Inferno’s Whisper",
        description: "A vial containing condensed volcanic essence that can be poured to create a temporary fire aura around the user. Deals damage to nearby foes and ignites their armor.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Applies Fire Aura for 15 seconds (deal 20% extra damage)",
        "Enemies hit by aura take 30% more damage from fire attacks",
        "Auto-ignites enemies with lava immunity"
        ],
        vendor: 'valley_bowser',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

};
