// Shop items chunk 41 of 51
// Items 4001 to 4100 (100 items)
// Auto-generated: 2026-03-21 13:41:13

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_041 = {
  'shooting_star': {
        id: 'shooting_star',
        name: "Shooting Star",
        description: "A star that fell from the sky. Release its energy to bombard enemies.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 45000,
        icon: '🌠',
        stock: 3,
        rarity: 'rare',
        effects: ["All enemies in sight take 4d8 Radiant damage", "No friendly fire"],
        vendor: 'comet_observatory',
        shippedBy: 'Cosmic Mail',
        levelRequirement: 5
    },

  'shroob_fragment': {
        id: 'shroob_fragment',
        name: "Purple Shard",
        description: "A shard of alien technology. It hums aggressively.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 25000,
        icon: '👾',
        stock: 3,
        rarity: 'rare',
        effects: ["Radiates faint magic", "Toads are afraid of it"],
        vendor: 'comet_observatory',
        shippedBy: 'Lead Box',
        levelRequirement: 4
    },

  'shroob_mothership_key': {
        id: 'shroob_mothership_key',
        name: "Shroob Control Key",
        description: "A pulsating purple crystal that interfaces with buried alien technology.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 700000,
        icon: '👾',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Summons a Shroob UFO strike (1/week)",
            "Deals 20d6 Necrotic damage to a 100ft radius",
            "Leaves the area radioactive/cursed",
            "May summon angry Shroobs"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Lead Box',
        levelRequirement: 12
    },

  'shroob_mothership_strike': {
        id: 'shroob_mothership_strike',
        name: "Shroob Orbital Beam",
        description: "A remote control for the dormant Shroob Mothership in orbit.",
        category: SHOP_CATEGORIES.FACTION,
        price: 900000,
        icon: '🛸',
        stock: 1,
        rarity: 'forbidden',
        effects: [
            "Call down a beam that deals 50d10 Necrotic damage to a 1-mile area",
            "Turns the land into a purple wasteland",
            "Destroys entire cities",
            "Single Use"
        ],
        vendor: 'onyx_hand',
        factionBonus: { combatReadiness: 100 }
    },

  'shy_guy_toy': {
    id: 'shy_guy_toy',
    name: "Shy Guy Toy",
    description: "A wind-up toy that distracts enemies.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 2000,
    icon: '🤖',
    stock: 15,
    rarity: 'common',
    effects: [
        "Wind up: Distracts 1 enemy (disadvantage on next attack)",
        "Lasts 1 round",
        "Unlimited uses, but fragile"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Toy Box',
    levelRequirement: 1
},

  'shyguy_mask': {
    id: 'shyguy_mask',
    name: "Shy Guy Mask",
    description: "A red hood that cloaks you in anonymity. Secrets stay secret... mostly.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 10500,
    icon: '😷',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Advantage on Stealth and Deception",
        "Disguise as any humanoid (1 hour)",
        "Mask giggles uncontrollably in silence",
        "Shy Guys sense a kindred spirit"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Anonymous Package',
    levelRequirement: 2
},

  'signed_in_green_ink_it': {
        id: 'signed_in_green_ink_it',
        name: "Luigi's Autograph",
        description: "Signed in green ink. It says 'To my biggest fan!'",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5000,
        icon: '📝',
        stock: 100,
        rarity: 'common',
        effects: ["Worth less than Wario's autograph", "Sentimental value"],
        vendor: 'toad_town_market',
        shippedBy: 'Green Envelope',
        levelRequirement: 1
    },

  'sirsirian_ocean_compass': {
    id: 'sirsirian_ocean_compass',
    name: "Sirsirian Ocean Compass",
    description: "A compass that always points toward the nearest landmass.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6000,
    icon: '🧭',
    stock: 12,
    rarity: 'common',
    effects: [
        "Always points toward the nearest land",
        "Grants advantage on Survival checks to navigate at sea",
        "Made by: Sirsirian Ocean"
    ],
    vendor: 'sirsirian_navigator',
    shippedBy: 'Wooden Box',
    levelRequirement: 4
},

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

  'spurs_that_jingle_with_greed_1': {
    id: 'spurs_that_jingle_with_greed_1',
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

};
