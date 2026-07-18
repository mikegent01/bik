// Shop items chunk 26 of 51
// Items 2501 to 2600 (100 items)
// Auto-generated: 2026-03-21 13:41:41

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_026 = {
  'koopa_leaf': {
        id: 'koopa_leaf',
        name: "Koopa Leaf",
        description: "A leaf from Koopa Village. Makes a nice tea.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3000,
        icon: '🍃',
        stock: 200,
        rarity: 'common',
        effects: ["Restores 3 MP (or 1st level slot if cooked)", "Delicious"],
        vendor: 'valley_trading_post',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },

  'koopa_shell_shield': {
        id: 'koopa_shell_shield',
        name: "Koopa Shell Shield",
        description: "A reinforced green shell converted into a buckler. Ethically sourced. Probably.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 40000,
        icon: '🛡️',
        stock: 6,
        rarity: 'common',
        effects: [
            "+1 AC while equipped",
            "Can be thrown (20/60) for 1d6 damage, returns to hand",
            "Resistant to being knocked prone"
        ],
        vendor: 'valley_trading_post',
        shippedBy: 'Koopa Courier Corps',
        levelRequirement: 2
    },

  'koopa_troop_glider_kit': {
    id: 'koopa_troop_glider_kit',
    name: "Koopa Troop Glider Kit",
    description: "A collapsible glider kit used by Koopa paratroopers for rapid deployment.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12000,
    icon: '🪂',
    stock: 8,
    rarity: 'rare',
    effects: [
        "Allows safe gliding from any height (speed 60ft, descent rate 30ft/round)",
        "Kit folds into a small backpack when not in use",
        "Made by: Koopa Troop"
    ],
    vendor: 'koopa_troop_armory',
    shippedBy: 'Reinforced Crate',
    levelRequirement: 4
},

  'koopa_troop_mushroom_soup_recipe': {
    id: 'koopa_troop_mushroom_soup_recipe',
    name: "Recipe: Koopa Mushroom Soup ",
    description: "A bubbling soup from Mushroom Kingdom fungi – grows you a bit, but watch the side effects!",
    category: SHOP_CATEGORIES.services,
    price: 6500,
    icon: '🍄',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Simmer mushrooms and broth (30 min); eat to gain +5 ft speed for 1 hour, but disadvantage on Dexterity saves (slippery!)",
        "Requires: 1 lb mushrooms; 50% chance it makes you 'super' (extra +1d4 HP)",
        "Mario might show up demanding royalties",
        "Made by: Koopa Chefs"
    ],
    vendor: 'koopa_troop_kitchen',
    shippedBy: 'Steamy Scroll',
    levelRequirement: 5
},

  'koopa_troop_patrol_scooter': {
    id: 'koopa_troop_patrol_scooter',
    name: "Koopa Patrol Scooter",
    description: "A standard-issue, flame-decaled scooter for quick troop deployment. Surprisingly zippy.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4500,
    icon: '🛴',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Mount: Speed 40ft, can move through enemy spaces",
        "Once per day: emit a puff of smoke (Blinds 5ft radius for 1 round)",
        "Makes loud 'vroom-vroom' noises"
    ],
    vendor: 'Koopa Troop',
    shippedBy: 'Armored Crate',
    levelRequirement: 2
},

  'koopa_troop_shell_oven': {
    id: 'koopa_troop_shell_oven',
    name: "Koopa Troop Shell Oven ",
    description: "A portable oven shaped like a Koopa shell for baking fungi delights.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7500,
    icon: '🐢',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Bakes mushrooms evenly; advantage on cooking checks for soups (DC reduced by 2)",
        "Retains heat for 1 hour post-use; retracts like a shell for protection",
        "Bowser's mark – might attract Koopas",
        "Made by: Troop Tinkerers"
    ],
    vendor: 'koopa_troop_kitchen',
    shippedBy: 'Shell-Shocked Shipment',
    levelRequirement: 5
},

  'koopa_troop_shell_polish_service': {
    id: 'koopa_troop_shell_polish_service',
    name: "Koopa Troop Shell Polish Service",
    description: "Professional shine for your armor or natural shell.",
    category: SHOP_CATEGORIES.services,
    price: 9500,
    icon: '🧽',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Armor gains +1 AC for 24 hours (cosmetic only, but shiny!)",
        "Intimidation checks +2 against reptiles",
        "Might attract Bowser's scouts if overdone",
        "Made by: Koopa Detailers"
    ],
    vendor: 'koopa_troop_garage',
    shippedBy: 'Turtle Wax Wagon',
    levelRequirement: 5
},

  'koopa_troop_shell_shield': {
    id: 'koopa_troop_shell_shield',
    name: "Koopa Troop Shell Shield",
    description: "A green shell that provides mobile cover.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18500,
    icon: '🐢',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "+1 AC, can withdraw as bonus action for +3 AC but speed drops to 5ft",
        "Lasts 1 minute or until you move; recharges after short rest",
        "Bowser's face is carved inside – mildly unsettling",
        "Made by: Koopa Workshop #7"
    ],
    vendor: 'koopa_troop_armory',
    shippedBy: 'Koopa Paratroopa Airmail',
    levelRequirement: 5
},

  'koopa_troop_shield': {
    id: 'koopa_troop_shield',
    name: "Koopa Troop Shield",
    description: "A sturdy shell shield. Perfect for defense and launching surprise attacks.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 25000,
    icon: '🛡️',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "+1 AC",
        "Bonus Action: Tuck into shell. You gain Resistance to Bludgeoning/Piercing damage, but your speed is 0",
        "Can be kicked as a bonus action (1d6 bludgeoning, 10ft push)"
    ],
    vendor: 'koopa_troop',
    shippedBy: 'Turtle Tank Transport',
    levelRequirement: 4
},

  'koopa_troop_spiked_helmet_cap': {
    id: 'koopa_troop_spiked_helmet_cap',
    name: "Koopa Troop Spiked Helmet Cap ",
    description: "A cap with fake spikes for that tough Koopa look.",
    category: SHOP_CATEGORIES.premium,
    price: 12500,
    icon: '🎩',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "+1 to Intimidation checks against small creatures",
        "Spikes poke you on a natural 1 (1 damage, ouch!)",
        "Bowser approved – might get you recruited",
        "Made by: Koopa Hatters"
    ],
    vendor: 'koopa_troop_barracks',
    shippedBy: 'Shell-Mailed Package',
    levelRequirement: 5
},

  'kraken_taming_collar': {
    id: 'kraken_taming_collar',
    name: "Kraken Taming Collar (Adult Size)",
    description: "A collar of storm giant leather inscribed with binding runes.",
    category: SHOP_CATEGORIES.premium,
    price: 625000,
    icon: '🦑',
    stock: 2,
    rarity: 'legendary',
    effects: [
        "Binds one Kraken as loyal mount/companion",
        "Requires successful application (DC 25 Animal Handling)",
        "Made by: Stormshapers Guild"
    ],
    vendor: 'sea_hunter',
    shippedBy: 'Triton Delivery',
    levelRequirement: 17
},

  'kremling_krew_cannonball_grill': {
    id: 'kremling_krew_cannonball_grill',
    name: "Kremling Krew Cannonball Grill",
    description: "A grill that uses cannonballs as fuel.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 14500,
    icon: '🔥',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Uses iron cannonballs as fuel: each ball cooks one meal (very hot)",
        "Food comes out with a smoky, gunpowder flavor: +1 fire damage on next attack",
        "Grill occasionally fires the cannonball: DEX save DC 13 or take 1d6 bludgeoning damage",
        "Made by: K. Rool's Outdoor Cooking"
    ],
    vendor: 'kremling_krew',
    shippedBy: 'Cannonball Express',
    levelRequirement: 6
},

  'kremling_krew_cannonball_polishing': {
    id: 'kremling_krew_cannonball_polishing',
    name: "Kremling Krew Cannonball Polishing",
    description: "Make your cannonballs shiny.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 7500,
    icon: '🎱',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Cannonballs deal +1 damage (shiny ones hurt more psychologically)",
        "Enemies know you care about presentation (advantage on Intimidation)",
        "You must polish them daily or they tarnish (disadvantage if you don't)",
        "Made by: K. Rool's Polishers"
    ],
    vendor: 'kremling_krew',
    shippedBy: 'Cannonball Express',
    levelRequirement: 5
},

  'kremling_krew_croc_jaw_clamps': {
    id: 'kremling_krew_croc_jaw_clamps',
    name: "Kremling Krew Croc Jaw Clamps",
    description: "Clamps for holding stew meat steady.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7000,
    icon: '🍲',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Clamps firm; +1 to Strength for meat prep",
        "Jaw-like grip; swamp durable",
        "Snaps shut unexpectedly",
        "Made by: Krew Carvers"
    ],
    vendor: 'kremling_krew_swamp',
    shippedBy: 'Jaw Clamp Jar',
    levelRequirement: 5
},

  'kremling_krew_croc_scale_boots': {
    id: 'kremling_krew_croc_scale_boots',
    name: "Kremling Krew Croc Scale Boots",
    description: "Tough boots from crocodile hides.",
    category: SHOP_CATEGORIES.premium,
    price: 15500,
    icon: '👢',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Advantage on Athletics in swamps",
        "Boots resist water damage",
        "Scales creak when wet",
        "Made by: Krew Tanners"
    ],
    vendor: 'kremling_krew_lair',
    shippedBy: 'Swamp Stride',
    levelRequirement: 5
},

  'kremling_krew_crocodile_stew_recipe': {
    id: 'kremling_krew_crocodile_stew_recipe',
    name: "Recipe: Kremling Krew Crocodile Stew",
    description: "Tough stew from swamp crocs for bite force.",
    category: SHOP_CATEGORIES.services,
    price: 7500,
    icon: '🍲',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Simmer croc meat (1 hour); eat to gain advantage on bite/grapple attacks for 3 hours",
        "Requires: Croc meat; chewy",
        "Krew toughens up",
        "Made by: Krew Cooks"
    ],
    vendor: 'kremling_krew_swamp',
    shippedBy: 'Snappy Stew Scroll',
    levelRequirement: 5
},

  'kremling_krew_crocodile_teeth_amulet_service': {
    id: 'kremling_krew_crocodile_teeth_amulet_service',
    name: "Kremling Krew Crocodile Teeth Amulet Service",
    description: "Craft a bite-enhancing talisman.",
    category: SHOP_CATEGORIES.services,
    price: 16500,
    icon: '🦷',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Bite attacks +1d4 damage for 24 hours",
        "Advantage on Intimidation in swamps",
        "Teeth chatter when hungry",
        "Made by: Krew Shamans"
    ],
    vendor: 'kremling_krew_swamp',
    shippedBy: 'Toothy Necklace',
    levelRequirement: 6
},

  'kremling_krew_fake_crown_replica': {
    id: 'kremling_krew_fake_crown_replica',
    name: "Kremling Krew Fake Crown Replica",
    description: "A plastic crown that looks like K. Rool's.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4600,
    icon: '👑',
    stock: 8,
    rarity: 'common',
    effects: [
        "Wear crown: advantage on Intimidation checks with Kremlings",
        "Disadvantage on Charisma with everyone else (you look ridiculous)",
        "Crown is flimsy: breaks on any critical hit (shatters into plastic bits)",
        "Real K. Rool may appear: 5% chance per day he shows up to reclaim 'his' crown",
        "Made by: K. Rool's Prop Department"
    ],
    vendor: 'kremling_krew',
    shippedBy: 'Barrel Cannon',
    levelRequirement: 5
},

  'kremling_krew_kannon': {
    id: 'kremling_krew_kannon',
    name: "Kremling Krew Kannon",
    description: "A small but loud Kremling-made blunderbuss.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 22500,
    icon: '🔫',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Ranged weapon: 30/90 ft, 2d8 bludgeoning, loud as a cannon (alert all enemies within 300ft)",
        "On hit: Target makes DC 13 Wisdom save or is frightened of loud noises for 1 round",
        "Jams on natural 2-5: Requires 1 action to clear",
        "Made by: K. Rool's Gunnery"
    ],
    vendor: 'kremling_krew_arsenal',
    shippedBy: 'Barrel Cannon',
    levelRequirement: 7
},

  'kremling_krew_kannonball': {
    id: 'kremling_krew_kannonball',
    name: "Kremling Krew Kannonball",
    description: "A heavy, iron cannonball designed for their signature ship cannons. Surprisingly aerodynamic.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 800,
    icon: '💣',
    stock: 100,
    rarity: 'common',
    effects: [
        "Ammunition for a cannon or similar siege weapon",
        "Deals 3d10 bludgeoning damage on a direct hit",
        "Can be used as an improvised weapon (2d6 bludgeoning)",
        "Heavy"
    ],
    vendor: 'Kremling Krew',
    shippedBy: 'Gunpowder Barrel',
    levelRequirement: 1
},

  'kremling_krew_piracy_consulting': {
    id: 'kremling_krew_piracy_consulting',
    name: "Kremling Krew Piracy Consulting",
    description: "Learn to pirate... legally.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 17500,
    icon: '🏴‍☠️',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Advantage on checks to navigate or board ships for 7 days",
        "You involuntarily say 'Yarrr!' at the start of combat",
        "Navy personnel are hostile on sight (they can smell the consulting)",
        "Made by: K. Rool's Business School"
    ],
    vendor: 'kremling_krew',
    shippedBy: 'Barrel Cannon',
    levelRequirement: 6
},

  'kremling_krew_recipe_cannonball_calamari': {
    id: 'kremling_krew_recipe_cannonball_calamari',
    name: "Recipe: Kremling Krew Cannonball Calamari",
    description: "Squid cooked in gunpowder.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 12500,
    icon: '📜',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Grants resistance to thunder damage for 1 hour",
        "Your voice becomes gravelly: advantage on Intimidation, disadvantage on Persuasion",
        "Explosive aftertaste: you burp small sparks (cosmetic but startling)",
        "Made by: K. Rool's Galley"
    ],
    vendor: 'kremling_krew',
    shippedBy: 'Cannonball Express',
    levelRequirement: 6
},

  'kremling_krew_wario_kannonball': {
    id: 'kremling_krew_wario_kannonball',
    name: "Kremling Krew Wario Kannonball",
    description: "A cannonball with Wario's face carved on it.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4600,
    icon: '💣',
    stock: 8,
    rarity: 'common',
    effects: [
        "Use as thrown weapon: 1d8 bludgeoning, but it whistles 'WAH!' in flight",
        "Enemies hear it: disadvantage on surprise attacks",
        "Wario's lawyers may sue: 5% chance per use of legal trouble",
        "Made by: K. Rool's Engravers"
    ],
    vendor: 'kremling_krew',
    shippedBy: 'Cannonball Express',
    levelRequirement: 5
},

  'kremling_krew_wario_krocodile': {
    id: 'kremling_krew_wario_krocodile',
    name: "Kremling Krew Wario Krocodile",
    description: "A crocodile with Wario's mustache.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5400,
    icon: '🐊',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Pet crocodile: advantage on Intimidation checks (it's a croc)",
        "Crocodile steals gold: loses 1d4 gp per day (Wario trained it)",
        "Must feed it garlic: disadvantage on gold management",
        "Made by: K. Rool's Pet Shop"
    ],
    vendor: 'kremling_krew',
    shippedBy: 'Crocodile Courier',
    levelRequirement: 6
},

  'lab_coat_with_explosive_pockets': {
    id: 'lab_coat_with_explosive_pockets',
    name: "Fawful's Furious Mad Scientist Coat",
    description: "Lab coat with explosive pockets.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16000,
    icon: '🧥',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Advantage on Intelligence (Investigation) for inventions",
        "Pockets hold volatile items safely",
        "Coat bubbles during experiments",
        "Made by: Fawful's Lab"
    ],
    vendor: 'fawfuls_furious_lab',
    shippedBy: 'Fuming Fabric',
    levelRequirement: 6
},

  'lakitu_cloud_cushion': {
    id: 'lakitu_cloud_cushion',
    name: "Lakitu Cloud Cushion",
    description: "A fluffy cloud pillow that floats lazily. Perfect for naps or emergency escapes.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 17000,
    icon: '☁️',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Hover 10ft off ground (speed 20ft)",
        "Once per day: Dash 60ft horizontally",
        "Comfort +5 to rest rolls",
        "Rains lightly when you're sad"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Sky Delivery',
    levelRequirement: 4
},

  'lakitu_cloud_lease': {
    id: 'lakitu_cloud_lease',
    name: "Lakitu Cloud Lease (30 Days)",
    description: "Rent a personal raincloud. Comes with optional spiny delivery service.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20000,
    icon: '☁️',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Fly Speed 30ft (hover) for 30 days",
        "Can summon light rain (creates difficult terrain or extinguishes fires)",
        "Optional Add-On: Call Lakitu to drop 1 Spiny per day (extra 5000 coins)",
        "Cloud whimpers if you yell at it"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Weather Balloon',
    levelRequirement: 4
},

  'lakitu_fishing_rod': {
    id: 'lakitu_fishing_rod',
    name: "Lakitu Fishing Rod",
    description: "A rod that hooks and reels in distant objects or enemies.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 14000,
    icon: '🎣',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Range 60ft, pull target 20ft closer (STR save DC 14)",
        "Can fish items from water/hazards",
        "Unlimited uses"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Rod Case',
    levelRequirement: 4
},

  'larry_koopa_wand': {
    id: 'larry_koopa_wand',
    name: "Larry's Chewed Wand",
    description: "A wand with bite marks. Casts weak magic but summons magical chewing gum.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 11000,
    icon: '🪥',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Cast 'Prestidigitation' at will",
        "Once per day: Create sticky gum trap (10ft radius, DEX save or restrained)",
        "Wand tastes like mint",
        "Koopalings mock you for using it"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Chewed Wrapper',
    levelRequirement: 3
},

  'lazy_shell_armor': {
        id: 'lazy_shell_armor',
        name: "Lazy Shell (Armor)",
        description: "A gigantic red shell. You become nearly indestructible, but you lose the will to move quickly.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 280000,
        icon: '🛡️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "AC becomes 22 (cannot be modified)",
            "Resistance to ALL damage types (Fire, Cold, Thunder, etc.)",
            "Disadvantage on DEX saves and Initiative",
            "Speed reduced by 15ft"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Crane Delivery',
        levelRequirement: 8
    },

  'lazy_shell_weapon': {
        id: 'lazy_shell_weapon',
        name: "Lazy Shell (Weapon)",
        description: "A massive green shell on a stick. Hits like a truck, heavy as a mountain.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 280000,
        icon: '🐢',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "2d12 Bludgeoning Damage",
            "Reach 10ft",
            "On Critical Hit: Target is Stunned until end of next turn",
            "Requires 18 STR to wield"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Heavy Freight',
        levelRequirement: 8
    },

  'league_of_legends_potion': {
    id: 'league_of_legends_potion',
    name: "Health Potion",
    description: "A potion for quick healing in battle.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 600,
    icon: '🧪',
    stock: 20,
    rarity: 'common',
    effects: [
        "Heal 2d4+2 HP over 10 seconds",
        "Stackable up to 5",
        "Refills at base"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Potion Vial',
    levelRequirement: 1
},

  'leclaire_isle_bakery_bane': {
        id: 'leclaire_isle_bakery_bane',
        name: "Sourdough Saboteur",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 800,
        icon: '🍞',
        stock: 10,
        rarity: 'uncommon',
        effects: [
            "Grants +2 to all melee attacks for 1 turn",
        "Consumes 1 point of stamina to activate",
        "Causes nearby doughfolk to panic and flee",
        "Binds to the user’s left hand for 3 turns",
        "Can be used to break enchanted pastry walls",
        "Requires 10 minutes of kneading to charge"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 3
    },

  'leclaire_isle_bakery_blessing': {
        id: 'leclaire_isle_bakery_blessing',
        name: "Doughbound Blessing",
        description: "",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 450,
        icon: '🍞',
        stock: 12,
        rarity: 'uncommon',
        effects: [
            "Gain 10 Coins and 10 MP when consumed",
        "Causes temporary sugar rush: +2 attack speed for 3 turns",
        "Consuming more than one in a row triggers a 10% chance to cause a sugar-induced burst of arcane damage",
        "Made from the last batch of the Grand Meringue Bakery",
        "Brought to you by the Chain Chomp Courier"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 3
    },

  'leclaire_isle_baking_cage': {
        id: 'leclaire_isle_baking_cage',
        name: "Baking Cage of the Doughfolk",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🧁',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants the user temporary control over dough elements",
        "Can shape and summon dough constructs for 2 turns",
        "Constructs have 3d6 HP and can attack with a smash that deals 2d6 damage",
        "May cause the user to become slightly sticky if overused",
        "Contains a hidden key to the Raventree Greenhouse (from Archie Miser’s fireball)",
        "Crafted by the Doughfolk of LEclaire Isle with ancestral recipes"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Paratroopa Air',
        levelRequirement: 10
    },

  'leclaire_isle_baking_treasure': {
        id: 'leclaire_isle_baking_treasure',
        name: "Diamond Crust Bangle",
        description: "Wears like a crown of sugary ambition",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 800,
        icon: '🍞',
        stock: 10,
        rarity: 'uncommon',
        effects: [
            "Grants temporary boost to speed",
        "Triggers sweet visions when attacked",
        "Causes minor nausea after prolonged use",
        "Made by: Vampire Covenant"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 3
    },

  'leclaire_isle_bread_binder': {
        id: 'leclaire_isle_bread_binder',
        name: "Bread Binder",
        description: "A binding tool that fuses ingredients into durable structures",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 350,
        icon: '🧱',
        stock: 20,
        rarity: 'common',
        effects: [
            "Can bind 3 items together into a single reinforced object",
        "Creates a temporary bond that lasts 10 minutes",
        "Requires 1d4 sugar units to activate",
        "Fails if used on anything not made of baked goods",
        "Designed for frontier expansion in Connectopia by the Dough Folk"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Paratroopa Air',
        levelRequirement: 2
    },

  'leclaire_isle_cake_chains': {
        id: 'leclaire_isle_cake_chains',
        name: "Cake Chains",
        description: "A set of enchanted chains forged from sweetened iron",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5000,
        icon: '🍞',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Locks targets in place for 1 round of combat",
        "Grants 2d4 damage to all attacks made against bound targets",
        "Can be attached to any item, even a pipe or a toad",
        "Requires attunement by a baker or a toad",
        "Only usable when the Pipe Network is offline (due to sabotage)",
        "Shipped via Paratroopa Air with a note: “For the Aegis Prison Break.”"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Paratroopa Air',
        levelRequirement: 10
    },

  'leclaire_isle_crossworld_key': {
        id: 'leclaire_isle_crossworld_key',
        name: "Garlic Glaze Keyring",
        description: "Connects the Isle to Wario Land",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 15000,
        icon: '🍆',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Opens hidden vaults in Wario Land",
        "Grants immunity to garlic based traps",
        "Requires sugar to activate",
        "Made by: Vampire Covenant"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 8
    },

  'leclaire_isle_crumble_cannon': {
        id: 'leclaire_isle_crumble_cannon',
        name: "Crumble Cannon",
        description: "A siege weapon disguised as a giant pastry",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🧁',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Fires 1d6 explosive pastry shards that deal 2d6 damage",
        "Can be reloaded with a single 30-second baking cycle",
        "Grants bonus +1 to all ranged attack rolls while carrying",
        "Triggers a magical backlash if fired near a Pipe Network node",
        "Shipped by Paratroopa Air with a warning: “Do not eat. Or else.”"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Paratroopa Air',
        levelRequirement: 8
    },

  'leclaire_isle_custodian_satchel': {
        id: 'leclaire_isle_custodian_satchel',
        name: "Custodian Satchel of the Unspoken Pact",
        description: "",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 1800,
        icon: '📦',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Stores 500 tokens of magical currency",
        "Unlocks hidden passages in enchanted bakeries",
        "Glows softly when magic is nearby",
        "Contains a hidden compartment for secret recipes",
        "Must be sealed with a pastry seal to activate",
        "Contains a whispering recipe book that mutters nonsense"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Pipe Express',
        levelRequirement: 6
    },

  'leclaire_isle_dough_folk_gear': {
        id: 'leclaire_isle_dough_folk_gear',
        name: "Crumb of the Dough Folk",
        description: "A relic from the sugary realm",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 500,
        icon: '🍞',
        stock: 5,
        rarity: 'common',
        effects: [
            "Restores 100 Hunger Points",
        "Grants temporary sweet taste",
        "Causes temporary hallucinations of pastry",
        "Made by: Vampire Covenant"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 2
    },

  'leclaire_isle_fire_flower_core': {
        id: 'leclaire_isle_fire_flower_core',
        name: "Volcanic Bloom Core",
        description: "",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 7500,
        icon: '🌶',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Grants +100% damage to all fire based attacks",
        "Causes explosive mutations on enemies: 1d6 damage and 20% chance to shatter their defenses",
        "Consuming this item increases the player’s mutation risk by 30%",
        "Only usable with the new Fire Flower strain",
        "Shipped via Chain Chomp Courier to the Valley of Bowser",
        "Created from the heart of the Primordial Wyrm’s breach",
        "Fused with the last remaining Fungi pipe and a sugar-fueled ritual"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 8
    },

  'leclaire_isle_fungal_ether': {
        id: 'leclaire_isle_fungal_ether',
        name: "Fungi Veil Infusion",
        description: "",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 1200,
        icon: '🍄',
        stock: 8,
        rarity: 'rare',
        effects: [
            "Absorbs 2d4 poison damage",
        "Enhances stealth by 50% for 2 rounds",
        "When used in conjunction with a pipe weapon, increases fire damage by 30%",
        "Contains residue from the Princess of Fungi’s final ritual",
        "Crafted by Servants Cosmic using the Fungi Civil War’s last remaining pipe",
        "Only usable in mushroom-infested zones"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 6
    },

  'leclaire_isle_item_name_here': {
        id: 'leclaire_isle_item_name_here',
        name: "Sugarcrusted Dagger",
        description: "A blade forged from moonlight and pastry dough",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Inflicts sweetened wounds that heal over time",
        "Causes targets to momentarily crave sugar",
        "Slightly slows movement for the wielder",
        "Made by: Vampire Covenant"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 5
    },

  'leclaire_isle_mirror_bread': {
        id: 'leclaire_isle_mirror_bread',
        name: "Mirror Bread",
        description: "A loaf of bread that reflects the soul of the eater, it shows glimpses of the eater’s past regrets or greatest triumphs. When consumed, it grants temporary insight into a hidden memory or a secret door. But it also risks revealing a dark truth if the eater is not prepared for it. Baked by the cursed baker of the Onyx Hand.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 600,
        icon: '🍞',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Reveals a secret memory for 1 round",
        "Grants +2d4 Insight bonus on Perception checks",
        "Consuming it may trigger a hallucinatory vision of the Shadowfell",
        "Can be used to unlock a hidden door in a dark room",
        "Suffers -2d4 HP if used during a battle",
        "Baked with the soul of a fallen baker"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Noki Coral Fleet',
        levelRequirement: 4
    },

  'leclaire_isle_mushroom_bomb': {
        id: 'leclaire_isle_mushroom_bomb',
        name: "Fungal Bomb of the Fungi Queen",
        description: "",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 600,
        icon: '🍄',
        stock: 4,
        rarity: 'uncommon',
        effects: [
            "Detonates on contact, dealing 2d6 fire damage",
        "Causes 10% chance to trigger a mushroom cloud that confuses nearby enemies",
        "Consuming more than one in a row causes a 20% chance to trigger a sugar-induced hallucination",
        "Made from the last remaining pipe of the Fungi Civil War",
        "Shipped by Chain Chomp Courier to the Valley of Bowser",
        "Grants +20% damage to all fire based attacks",
        "Only usable in mushroom-infested zones",
        "Created by the Fungi Queen’s last remaining apprentice"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 4
    },

  'leclaire_isle_mushroom_key': {
        id: 'leclaire_isle_mushroom_key',
        name: "Mushroom Kingdom Key",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3000,
        icon: '🍄',
        stock: 5,
        rarity: 'legendary',
        effects: [
            "Opens all sealed doors in the Mushroom Kingdom",
        "Grants temporary immunity to magical drugs",
        "Each use causes a 10% chance to trigger a wild mushroom hallucination",
        "Only usable by those who have been to the Valley of Bowser",
        "Crafted with the last remnants of the Fungi Civil War’s assassinated princess’s amulet",
        "Shipped by Chain Chomp Courier under strict Servants Cosmic oversight",
        "Activates when the Wyrm’s seal is broken",
        "Grants +50% damage to enemies with fungal traits",
        "Only one key exists"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 10
    },

  'leclaire_isle_mushroom_mantle': {
        id: 'leclaire_isle_mushroom_mantle',
        name: "Fungi Fable Cloak",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '🍄',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Grants immunity to poison and magical debuffs from fungal sources",
        "Increases movement speed by 15% while wearing",
        "Splits into 3 fragments when damaged",
        "Each fragment can be used to create a temporary portal to a mushroom grove",
        "Causes 1d4 confusion effects on enemies who enter the grove",
        "Requires attunement by a mushroom cultist or Fungi Civil War veteran"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 7
    },

  'leclaire_isle_mushroom_sword': {
        id: 'leclaire_isle_mushroom_sword',
        name: "Fungi Sword of the Fungi Queen",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🍄',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Deals 2d6 fire damage",
        "Causes 10% chance to trigger a mushroom cloud that confuses nearby enemies",
        "Consuming more than one in a row causes a 20% chance to trigger a sugar-induced hallucination",
        "Made from the last remaining pipe of the Fungi Civil War",
        "Shipped by Chain Chomp Courier to the Valley of Bowser",
        "Grants +20% damage to all fire based attacks",
        "Only usable in mushroom-infested zones",
        "Created by the Fungi Queen’s last remaining apprentice"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 8
    },

  'leclaire_isle_mushroom_torch': {
        id: 'leclaire_isle_mushroom_torch',
        name: "Fungi Torch of the Fungi Queen",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2000,
        icon: '🍄',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants +10% damage to all fire based attacks",
        "Causes 10% chance to trigger a mushroom cloud that confuses nearby enemies",
        "Consuming more than one in a row causes a 20% chance to trigger a sugar-induced hallucination",
        "Made from the last remaining pipe of the Fungi Civil War",
        "Shipped by Chain Chomp Courier to the Valley of Bowser",
        "Grants +20% damage to all fire based attacks",
        "Only usable in mushroom-infested zones",
        "Created by the Fungi Queen’s last remaining apprentice"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 6
    },

  'leclaire_isle_paratroopa_pouch': {
        id: 'leclaire_isle_paratroopa_pouch',
        name: "Paratroopa Air Sack of Crumbs",
        description: "",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 1200,
        icon: '🌬',
        stock: 5,
        rarity: 'rare',
        effects: [
            "Contains 100 Beanbean coins and 5 enchanted sugar cubes",
        "Each sugar cube can be thrown to distract enemies for 1 turn",
        "When thrown, emits a sweet scent that causes minor confusion to foes",
        "Can be used to bribe the Paratroopa Air crew for safe transport",
        "Labeled with Prince Peasley’s signature in royal ink"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Paratroopa Air',
        levelRequirement: 4
    },

  'leclaire_isle_pipe_punch': {
        id: 'leclaire_isle_pipe_punch',
        name: "Gilded Geyser Gun",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🎭',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Fires magical pipe projectiles that deal 3d8 damage",
        "Each shot triggers a minor explosion of enchanted syrup",
        "Consumes 10% of user’s stamina per shot",
        "Can be reloaded with a pipe from the Mushroom Kingdom’s pipe network",
        "If used during the Supernatural Sovereignty Act, increases chance of voting for the Regal Empire",
        "Only usable by those who have personally witnessed a pipe assassination"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 10
    },

  'leclaire_isle_ring_of_the_baked_battle': {
        id: 'leclaire_isle_ring_of_the_baked_battle',
        name: "Ring of the Baked Battle",
        description: "Worn by the valiant and the vain, this ring was forged in the kitchens of the last great war between the Bakers of Lothlórien and the Mordor Scribes. It lets the wearer turn bread into blades and butter into bludgeons. Beware: it may cause accidental yeast explosions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🍞',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Grants +3 to attack rolls with bread-based weapons",
        "Increases critical hit chance by 20%",
        "Causes 1d6 damage if enemy is made of dough",
        "May cause temporary digestive discomfort (1d4 rounds)",
        "When used in combat, triggers a magical bread explosion (5ft radius, 1d4 damage)"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Blooper Wetworks',
        levelRequirement: 8
    },

  'leclaire_isle_sugar_rift_catalyst': {
        id: 'leclaire_isle_sugar_rift_catalyst',
        name: "Sugar Rift Catalyst",
        description: "A golden confectionary relic that opens rifts to alternate dimensions of pastry and spice. When activated, it draws in sugar-fueled chaos, summoning rogue bakers and mischievous dough folk. Its taste is sweet, but its consequences are sticky.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🍞',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Opens a 10ft rift to a sugar realm for 1 round",
        "Inflicts 1d4 damage to foes in the rift",
        "Grants temporary +2 to all rolls against sugar-based foes",
        "Consumes 100 sugar crystals to activate",
        "May cause temporary euphoria to user (1d6 rounds)"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Blooper Wetworks',
        levelRequirement: 3
    },

  'leclaire_isle_sugar_spear': {
        id: 'leclaire_isle_sugar_spear',
        name: "Sugar Spear of the Doughbound",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 600,
        icon: '🍞',
        stock: 12,
        rarity: 'common',
        effects: [
            "Pierces armor with a sweetened strike",
        "10% chance to make enemies crave dessert",
        "Consumes 1 sugar cube per use",
        "Can be enchanted with honeycomb charm",
        "Made from fermented pastry dough",
        "Causes minor nausea to non doughfolk"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Pipe Express',
        levelRequirement: 3
    },

  'leclaire_isle_sugar_surge_vial': {
        id: 'leclaire_isle_sugar_surge_vial',
        name: "Sugar Surge Vial",
        description: "A vial containing the essence of a runaway pastry storm",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 750,
        icon: '🍯',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Restores 3d6 HP upon use",
        "Grants +2 to all attack rolls for 1 minute",
        "Causes temporary sugar-induced euphoria (may cause minor hallucinations)",
        "Triggered by proximity to a Pipe Network failure",
        "Made by smugglers who fled via Speaker Ls Order 120"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Paratroopa Air',
        levelRequirement: 6
    },

  'leclaire_isle_sugar_tide_helm': {
        id: 'leclaire_isle_sugar_tide_helm',
        name: "Sugar Tide Helm",
        description: "A headpiece that glows with the sweetness of forgotten bakes",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🍞',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Grants +2 to all dexterity checks",
        "Increases movement speed by 10% while carrying items",
        "Slight chance to cause temporary sugar rush (1d4 HP gain + 1 round of haste)",
        "Wears off after 30 minutes of prolonged combat",
        "Baked by the Dough Folk Guild of LEclaire Isle"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Paratroopa Air',
        levelRequirement: 4
    },

  'leclaire_isle_sugar_tome': {
        id: 'leclaire_isle_sugar_tome',
        name: "Sugar Tome of the Doughbound",
        description: "",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 750,
        icon: '🍞',
        stock: 10,
        rarity: 'uncommon',
        effects: [
            "Consuming restores 10 mana and grants temporary immunity to poison",
        "Causes minor sugar rush effect for 3 turns (speed +1 and attack +1)",
        "May cause temporary sugar coma if consumed twice in one round",
        "Found in the attic of a baker’s guild hall in LEclaire Isle",
        "Translated by: Beanbean Kingdom’s Diplomatic Archive"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Paratroopa Air',
        levelRequirement: 3
    },

  'leclaire_isle_sugar_tongue': {
        id: 'leclaire_isle_sugar_tongue',
        name: "Sugar Tongue of the Meringue Mage",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1500,
        icon: '🍯',
        stock: 6,
        rarity: 'rare',
        effects: [
            "Grants +10% chance to crit on all attacks",
        "Causes enemies to take 1d4 damage from sugar-induced confusion",
        "Consuming the item triggers a 20% chance to cause a temporary explosion of sugary magic",
        "Only usable with the Fire Flower strain",
        "Created from the last batch of the Meringue Mage’s secret recipe",
        "Shipped by Chain Chomp Courier with a note: “Do not eat while fighting”",
        "Crafted by Servants Cosmic using enchanted sugar and a cursed pipe",
        "Grants immunity to magical drugs for 3 turns after use"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 7
    },

  'leclaire_isle_toadette_lure': {
        id: 'leclaire_isle_toadette_lure',
        name: "Toadette Lure of the Peasley Scandal",
        description: "",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 5000,
        icon: '🐸',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Costs 1000 Beanbean coins to activate",
        "Triggers a 30 second illusion of a Toadette party",
        "Causes all enemies to temporarily forget their own names",
        "Reveals hidden treasure locations tied to the scandal",
        "Also causes the caster to speak in a high pitched voice",
        "Contains a cursed token that will never pay off",
        "Must be used in a bakery with a working oven",
        "Only works if the user is a spellcaster or baker",
        "Guaranteed to make the user feel like they’re in a sugar coma"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Pipe Express',
        levelRequirement: 8
    },

  'legendary_smithing_commission': {
    id: 'legendary_smithing_commission',
    name: "Legendary Smithing Commission",
    description: "Commission the world's greatest smith to craft a weapon/armor tailored to you perfectly.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 120000,
    icon: '🔨',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Create 1 custom Legendary item (choose from: +3 weapon, +3 armor, or unique magical property)",
        "Item is perfectly balanced for you (+1 to attack/defense)",
        "Crafting takes 6 months; smith requires rare materials (additional cost: 50,000 gp)"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Commissioned Masterwork',
    levelRequirement: 13
},

  'lemuria_conclave_ancient_cookbook_stand': {
    id: 'lemuria_conclave_ancient_cookbook_stand',
    name: "Lemuria Conclave Ancient Cookbook Stand",
    description: "A stand that holds your recipes at eye level.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8500,
    icon: '📖',
    stock: 8,
    rarity: 'common',
    effects: [
        "Holds recipes: advantage on cooking checks (you can see the recipe)",
        "Stand is sentient: whispers cooking tips (helpful but creepy)",
        "It judges your knife skills (disadvantage on checks if you cut poorly)",
        "Made by: Lemuria Conclave Scribes"
    ],
    vendor: 'lemuria_conclave',
    shippedBy: 'Philosophical Courier',
    levelRequirement: 5
},

  'lemuria_conclave_breathing_mask': {
    id: 'lemuria_conclave_breathing_mask',
    name: "Lemuria Conclave Breathing Mask",
    description: "A mask that filters toxins and allows breathing underwater.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7500,
    icon: '😷',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Grants water breathing for 1 hour",
        "Filters airborne toxins (advantage on saves vs. inhaled poisons)",
        "Made by: Lemuria Conclave"
    ],
    vendor: 'lemuria_outpost',
    shippedBy: 'Waterproof Case',
    levelRequirement: 4
},

  'lemuria_conclave_memory_watermark': {
    id: 'lemuria_conclave_memory_watermark',
    name: "Lemuria Conclave Memory Watermark",
    description: "Etches a psychic signature into your memories so they can't be stolen or altered.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 18500,
    icon: '💧',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Immune to memory alteration for 30 days; you know if someone tries",
        "Memories play with a faint 'Property of [Your Name]' subtitle in your mind",
        "Disadvantage on Deception checks because your memories are 'read-only'",
        "Made by: Lemuria Conclave Mnemonics"
    ],
    vendor: 'lemuria_conclave',
    shippedBy: 'Psychic Echo',
    levelRequirement: 7
},

  'lemuria_conclave_past_life_regression': {
    id: 'lemuria_conclave_past_life_regression',
    name: "Lemuria Conclave Past Life Regression",
    description: "Remember who you were... sort of.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 17500,
    icon: '🔄',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Gain one random skill proficiency from a past life for 7 days",
        "You have flashbacks at awkward times (disadvantage on one check per day)",
        "Past life was boring – you were an accountant for a dragon",
        "Made by: Lemuria Conclave Hypnosis"
    ],
    vendor: 'lemuria_conclave',
    shippedBy: 'Past Life Echo',
    levelRequirement: 6
},

  'lemuria_conclave_scrying_pool': {
    id: 'lemuria_conclave_scrying_pool',
    name: "Lemurian Scrying Pool",
    description: "A small, portable basin that fills with enchanted water for divination.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 28000,
    icon: '💧',
    stock: 4,
    rarity: 'epic',
    effects: [
        "Once per day: cast 'Scrying' (spell save DC 15)",
        "The water shows visions of sunken cities and lost knowledge",
        "If used underwater, reveals all secrets within 1 mile"
    ],
    vendor: 'Lemuria Conclave',
    shippedBy: 'Sealed Amphora',
    levelRequirement: 8
},

  'lemuria_conclave_toga_of_ancient_wisdom': {
    id: 'lemuria_conclave_toga_of_ancient_wisdom',
    name: "Lemuria Conclave Toga of Ancient Wisdom",
    description: "A toga that makes you talk like a philosopher.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16500,
    icon: '🛏️',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Advantage on History and Arcana checks (you sound smart)",
        "You must speak in riddles: disadvantage on Persuasion with impatient people",
        "Toga is drafty: disadvantage on saves vs. cold",
        "Made by: Lemuria Conclave Fashion"
    ],
    vendor: 'lemuria_conclave',
    shippedBy: 'Philosophical Courier',
    levelRequirement: 6
},

  'lemurian_water_purifier': {
        id: 'lemurian_water_purifier',
        name: "Lemurian Water Purifier (Permanent)",
        description: "A fountain that draws upon Lemurian magic to purify any water source it touches.",
        category: SHOP_CATEGORIES.equipment,
        price: 45000,
        icon: '⛲',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Purifies 100 gallons of water per hour (removes all toxins/curses)",
        "Water tastes subtly like mint",
            "Made by: Lemuria Conclave"
        ],
        vendor: 'lemuria_outpost',
        shippedBy: 'Stone Delivery',
        levelRequirement: 7
    },

  'liberated_toads_hop_sack_clothes': {
    id: 'liberated_toads_hop_sack_clothes',
    name: "Liberated Toads Hop Sack Clothes",
    description: "Loose clothes for amphibious freedom.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 10000,
    icon: '👘',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Advantage on Dexterity (Acrobatics) jumps",
        "Clothes dry quickly in water",
        "Sacks smell like pond",
        "Made by: Toad Rebels"
    ],
    vendor: 'liberated_toads_pond',
    shippedBy: 'Lily Pad Lining',
    levelRequirement: 5
},

  'liberated_toads_jump_rope_service': {
    id: 'liberated_toads_jump_rope_service',
    name: "Liberated Toads Jump Rope Service",
    description: "Fitness for leaps.",
    category: SHOP_CATEGORIES.services,
    price: 10000,
    icon: '⛏️',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Train: +5 jump distance for 1 day",
        "Endurance +1 CON save",
        "Rope tangles feet",
        "Made by: Toad Athletes"
    ],
    vendor: 'liberated_toads_pond',
    shippedBy: 'Hop String',
    levelRequirement: 5
},

  'liberated_toads_lily_pad_pancakes_recipe': {
    id: 'liberated_toads_lily_pad_pancakes_recipe',
    name: "Recipe: Liberated Toads Lily Pad Pancakes",
    description: "Pancakes shaped like lily pads for swamp freedom.",
    category: SHOP_CATEGORIES.services,
    price: 6000,
    icon: '🥞',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Flip on 'pads' (20 min); eat to gain advantage on jumps in water for 2 hours",
        "Requires: Batter; hoppy",
        "Toads liberate your hunger",
        "Made by: Toad Rebels"
    ],
    vendor: 'liberated_toads_pond',
    shippedBy: 'Pad Pancake Page',
    levelRequirement: 5
},

  'liberated_toads_lily_pad_steamer': {
    id: 'liberated_toads_lily_pad_steamer',
    name: "Liberated Toads Lily Pad Steamer",
    description: "Floating steamer on lily pads for pancakes.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5500,
    icon: '🥞',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Steams on water; advantage on swamp recipes",
        "Pads float (portable)",
        "Attracts frogs",
        "Made by: Toad Steamers"
    ],
    vendor: 'liberated_toads_pond',
    shippedBy: 'Pad Steam Pan',
    levelRequirement: 5
},

  'liberated_toads_toadstool_removal': {
    id: 'liberated_toads_toadstool_removal',
    name: "Liberated Toads Toadstool Removal",
    description: "Ethical toadstool extraction.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 9500,
    icon: '🍄',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Remove all harmful fungi from one area (30ft radius)",
        "Toads in area are grateful: advantage on Animal Handling with amphibians",
        "You must release the toadstools into the wild (they regrow somewhere else)",
        "Made by: Liberated Toads Conservation"
    ],
    vendor: 'liberated_toads',
    shippedBy: 'Toad Hop',
    levelRequirement: 5
},

  'lichdom_ritual_scroll': {
    id: 'lichdom_ritual_scroll',
    name: "Lichdom Ritual Scroll (Transformation)",
    description: "The forbidden scroll outlining the path to undeath and immortality.",
    category: SHOP_CATEGORIES.forbidden,
    price: 1100000,
    icon: '📜',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Initiates lich transformation (1 month)",
        "Requires phylactery",
        "Made by: Ancient Liches"
    ],
    vendor: 'undead_academy',
    shippedBy: 'Soul Binding',
    levelRequirement: 20
},

  'lichs_phylactery_insurance': {
    id: 'lichs_phylactery_insurance',
    name: "Lich's Phylactery Insurance Policy",
    description: "A soul-binding contract that protects against true death.",
    category: SHOP_CATEGORIES.forbidden,
    price: 875000,
    icon: '💀',
    stock: 1,
    rarity: 'godly',
    effects: [
        "If killed, respawn at phylactery location after 7 days",
        "Phylactery location must be registered in advance",
        "Made by: The Grim Ledger"
    ],
    vendor: 'soul_broker',
    shippedBy: 'Blood Contract',
    levelRequirement: 18
},

  'life_shroom': {
        id: 'life_shroom',
        name: "Life Shroom",
        description: "A pale green mushroom with an unsettling glow. Automatically activates when you fall unconscious.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 80000,
        icon: '💚',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Passive: Activates when reduced to 0 HP",
            "Immediately regain 1 HP and stabilize",
            "Consumed upon activation"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Sacred Container Protocol',
        levelRequirement: 5,
        warning: "Iron Legion considers possession 'evidence of unnatural practices'"
    },

  'light_prognosticus': {
        id: 'light_prognosticus',
        name: "Light Prognosticus",
        description: "The counter-book. Can rewrite the ending.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 18000000,
        icon: '📓',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Change one major campaign event",
            "Resurrect a fallen plotline",
            "Create a 'Happy Ending' failsafe",
            "Requires pure intent"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Merlon',
        levelRequirement: 19
    },

  'liminal_ghost_whisperer_tool_service': {
    id: 'liminal_ghost_whisperer_tool_service',
    name: "Liminal Ghost Whisperer Tool Service",
    description: "Commune with spirits.",
    category: SHOP_CATEGORIES.services,
    price: 16500,
    icon: '👻',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Tool: Ask spirit 1 question (true answer)",
        "Detect undead 30ft",
        "Spirits haunt dreams",
        "Made by: Liminal Mediums"
    ],
    vendor: 'liminal_border',
    shippedBy: 'Ecto Device',
    levelRequirement: 6
},

  'liminal_ghostly_ecto_plasm_recipe': {
    id: 'liminal_ghostly_ecto_plasm_recipe',
    name: "Recipe: Liminal Ghostly Ecto-Plasm",
    description: "Glowing plasm dessert for spirit sight.",
    category: SHOP_CATEGORIES.services,
    price: 7500,
    icon: '🍮',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Mix ecto (30 min); eat to gain detect undead (30ft) for 2 hours",
        "Requires: Ecto ingredients; spooky",
        "Ghosts whisper thanks",
        "Made by: Liminal Mediums"
    ],
    vendor: 'liminal_border',
    shippedBy: 'Ecto Edition',
    levelRequirement: 6
},

  'liminal_ghostly_ecto_stirrer': {
    id: 'liminal_ghostly_ecto_stirrer',
    name: "Liminal Ghostly Ecto Stirrer",
    description: "Stirrer for ecto-plasm that phases.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7000,
    icon: '🍮',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Stirs ethereal; +1 to spirit recipes",
        "Phases through solids",
        "Stirrer haunts briefly",
        "Made by: Liminal Toolers"
    ],
    vendor: 'liminal_border',
    shippedBy: 'Ecto Stir Set',
    levelRequirement: 6
},

  'liminal_ghostly_gauze_wrap': {
    id: 'liminal_ghostly_gauze_wrap',
    name: "Liminal Ghostly Gauze Wrap",
    description: "Translucent wrap for spirit walkers.",
    category: SHOP_CATEGORIES.premium,
    price: 17500,
    icon: '🧣',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Advantage on saves vs. ethereal effects",
        "Wrap allows phasing through thin walls (1/day)",
        "Gauze unravels in wind",
        "Made by: Liminal Spirits"
    ],
    vendor: 'liminal_threshold',
    shippedBy: 'Ethereal Edge',
    levelRequirement: 6
},

  'liminal_threshold_sweeping': {
    id: 'liminal_threshold_sweeping',
    name: "Liminal Threshold Sweeping",
    description: "Clean the boundaries between spaces.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 11500,
    icon: '🚪',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "One doorway becomes safe to pass (no traps, no ambushes) for 24 hours",
        "Doorway is very clean; you must take off shoes",
        "You become obsessed with cleanliness (disadvantage in dirty areas)",
        "Made by: Liminal Cleaners"
    ],
    vendor: 'liminal',
    shippedBy: 'Threshold Step',
    levelRequirement: 5
},

  'link_master_sword': {
    id: 'link_master_sword',
    name: "Master Sword Replica",
    description: "A sword that banishes evil.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 100000,
    icon: '🗡️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "+3 longsword, extra 2d6 to fiends/undead",
        "Cast Banishment once per day",
        "Requires pure heart"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Sacred Sheath',
    levelRequirement: 15
},

  'lizardmen_recipe_swamp_gumbo': {
    id: 'lizardmen_recipe_swamp_gumbo',
    name: "Recipe: Lizardmen Swamp Gumbo",
    description: "A stew that tastes like home (if home is a bog).",
    category: SHOP_CATEGORIES.RECIPE,
    price: 9500,
    icon: '📜',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Grants advantage on saves vs. poison and disease for 8 hours",
        "You can hold your breath for 10 minutes (gills optional)",
        "Smells terrible: disadvantage on Charisma checks with non-reptiles",
        "Made by: Lizardfolk Swamp Cooks"
    ],
    vendor: 'lizardmen',
    shippedBy: 'Murky Waters Courier',
    levelRequirement: 5
},

  'lizardmen_scale_mail_tunic': {
    id: 'lizardmen_scale_mail_tunic',
    name: "Lizardmen Scale Mail Tunic",
    description: "Tunic reinforced with reptilian scales.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 17000,
    icon: '👕',
    stock: 3,
    rarity: 'rare',
    effects: [
        "+1 AC in wet environments",
        "Advantage on saves vs. acid",
        "Scales shed seasonally (cosmetic mess)",
        "Made by: Lizard Armorsmiths"
    ],
    vendor: 'lizardmen_swamp',
    shippedBy: 'Bog-Leather Bind',
    levelRequirement: 6
},

  'lizardmen_scale_moisturizing': {
    id: 'lizardmen_scale_moisturizing',
    name: "Lizardmen Scale Moisturizing",
    description: "Keep your scales shiny.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 8500,
    icon: '🧴',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Advantage on Charisma checks with reptiles for 7 days",
        "Your skin is shiny: disadvantage on Stealth in bright light",
        "You shed perfectly (cosmetic, but satisfying)",
        "Made by: Lizardmen Spa"
    ],
    vendor: 'lizardmen',
    shippedBy: 'Moisture Delivery',
    levelRequirement: 5
},

  'lizardmen_scale_oil': {
    id: 'lizardmen_scale_oil',
    name: "Lizardmen Scale Oil",
    description: "Natural armor enhancement from swamp alchemy.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 8500,
    icon: '🦎',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Apply to armor: +1 AC for 24 hours",
        "Grants advantage on saves vs. disease and poison (24 hours)",
        "Smells like rotten fish; disadvantage on Persuasion with non-reptiles",
        "Made by: Lizardfolk Swamp Shaman"
    ],
    vendor: 'lizardmen_swamp_market',
    shippedBy: 'Murky Waters Courier',
    levelRequirement: 5
},

  'lizardmen_shedding_assistance': {
    id: 'lizardmen_shedding_assistance',
    name: "Lizardmen Shedding Assistance",
    description: "Help with your annual molt.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 9500,
    icon: '🦎',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Remove one negative condition that affects skin (poison, rash) instantly",
        "Your skin is shiny and new: +1 Charisma for 3 days",
        "Peeling skin everywhere – disadvantage on Stealth in nature",
        "Made by: Lizardmen Spa"
    ],
    vendor: 'lizardmen',
    shippedBy: 'Scale Mail',
    levelRequirement: 5
},

  'lizardmen_swamp_compass': {
    id: 'lizardmen_swamp_compass',
    name: "Lizardmen Swamp Compass",
    description: "A compass that points toward dry land in swamp environments.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6500,
    icon: '🧭',
    stock: 10,
    rarity: 'common',
    effects: [
        "Always points toward the nearest dry land in swamps",
        "Grants advantage on Survival checks in swamp environments",
        "Made by: Lizardmen"
    ],
    vendor: 'lizardmen_swamp_post',
    shippedBy: 'Waterproof Case',
    levelRequirement: 4
},

  'lizardmen_swamp_crock': {
    id: 'lizardmen_swamp_crock',
    name: "Lizardmen Swamp Crock",
    description: "A pot that simulates swamp conditions.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12500,
    icon: '🫕',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Perfect for swamp recipes: advantage on cooking checks with rotten ingredients",
        "Preserves food by keeping it slightly rotten (safe to eat, tastes awful)",
        "Crock smells like swamp gas: disadvantage on Charisma checks with non-reptiles",
        "Made by: Lizardfolk Potters"
    ],
    vendor: 'lizardmen',
    shippedBy: 'Murky Waters Courier',
    levelRequirement: 5
},

  'lizardmen_swamp_stew_premium': {
    id: 'lizardmen_swamp_stew_premium',
    name: "Lizardmen Swamp Stew (Premium)",
    description: "Hearty meal for reptilian resilience.",
    category: SHOP_CATEGORIES.premium,
    price: 14000,
    icon: '🍲',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Eat: Heal 2d4 HP and gain water breathing for 1 hour",
        "Advantage on Constitution saves in swamps",
        "Tastes fishy: Disadvantage on Persuasion with mammals",
        "Made by: Lizard Chefs"
    ],
    vendor: 'lizardmen_village',
    shippedBy: 'Bog Pot',
    levelRequirement: 5
},

  'lizardmen_swamp_stirring_stick': {
    id: 'lizardmen_swamp_stirring_stick',
    name: "Lizardmen Swamp Stirring Stick",
    description: "Reedy stick for gumbo stirring in bogs.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6000,
    icon: '🍲',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Stirs thick stews; +1 to Constitution for swamp recipes",
        "Floats in water; resists rot",
        "Attracts swamp bugs",
        "Made by: Lizard Crafters"
    ],
    vendor: 'lizardmen_village',
    shippedBy: 'Boggy Branch Bundle',
    levelRequirement: 5
},

  'lizardmen_totem_fragment': {
        id: 'lizardmen_totem_fragment',
        name: "Lizardmen Totem Fragment (Coil)",
        description: "A carved piece of serpentine jade that wards off cold-blooded enemies.",
        category: SHOP_CATEGORIES.equipment,
        price: 13000,
        icon: '🦎',
        stock: 9,
        rarity: 'rare',
        effects: [
            "Grants resistance to Cold damage",
        "Advantage on saving throws vs. mind control from reptiles/serpents",
            "Made by: Lizardmen"
        ],
        vendor: 'lizardmen_swamp_post',
        shippedBy: 'Muddy Pouch',
        levelRequirement: 3
    },

  'loot_crate_subscription': {
    id: 'loot_crate_subscription',
    name: "Loot Crate (30-Day Subscription)",
    description: "Mystery box of random minor magic items delivered monthly.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 17500,
    icon: '📦',
    stock: 25,
    rarity: 'rare',
    effects: [
        "Receive one random uncommon magic item per month",
        "Items are cursed 10% of the time (fun surprises!)",
        "Auto-renews unless you trek to their office to cancel",
        "Made by: Mystery Box Inc."
    ],
    vendor: 'subscription_service',
    shippedBy: 'Monthly Delivery',
    levelRequirement: 5
},

  'lothlorien_elf_leaf_tunic': {
    id: 'lothlorien_elf_leaf_tunic',
    name: "Lothlórien Elf Leaf Tunic",
    description: "Tunic woven from living leaves.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20000,
    icon: '👕',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Advantage on Nature checks in woods",
        "Tunic camouflages in foliage",
        "Leaves rustle in wind",
        "Made by: Golden Wood Elves"
    ],
    vendor: 'lothlorien_grove',
    shippedBy: 'Living Leaf',
    levelRequirement: 7
},

  'lothlorien_golden_wood_oven': {
    id: 'lothlorien_golden_wood_oven',
    name: "Lothlórien Golden Wood Oven",
    description: "Elven oven from mallorn wood for nut bread.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 10500,
    icon: '🍞',
    stock: 1,
    rarity: 'rare',
    effects: [
        "Bakes with natural heat; +2 to longevity baking",
        "Wood self-heals minor damage",
        "Requires elven fire (or magic)",
        "Made by: Golden Wood Crafters"
    ],
    vendor: 'lothlorien_grove',
    shippedBy: 'Mallorn Magic Mail',
    levelRequirement: 7
},

  'lothlorien_mallorn_leaf_premium': {
    id: 'lothlorien_mallorn_leaf_premium',
    name: "Lothlórien Mallorn Leaf (Premium)",
    description: "Elven leaf for restful sleep.",
    category: SHOP_CATEGORIES.premium,
    price: 15000,
    icon: '🍃',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Sleep with leaf: Long rest heals extra 1d6 HP",
        "Dreams prophetic (DM hint once)",
        "Leaf wilts after one use",
        "Made by: Lothlórien Elves"
    ],
    vendor: 'lothlorien_golden_wood',
    shippedBy: 'Silver Leaflet',
    levelRequirement: 5
},

  'lothlorien_mallorn_nut_bread_recipe': {
    id: 'lothlorien_mallorn_nut_bread_recipe',
    name: "Recipe: Lothlórien Mallorn Nut Bread",
    description: "Nutty bread from golden trees for elven longevity.",
    category: SHOP_CATEGORIES.services,
    price: 9500,
    icon: '🍞',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Grind nuts and bake (1 hour); eat to sustain without food for 2 days and gain advantage on Wisdom saves",
        "Requires: Mallorn nuts; timeless taste",
        "Elves share lore",
        "Made by: Wood Elves"
    ],
    vendor: 'lothlorien_grove',
    shippedBy: 'Golden Nut Notes',
    levelRequirement: 7
},

  'lothlorien_starlight_lantern': {
    id: 'lothlorien_starlight_lantern',
    name: "Lothlórien Starlight Lantern",
    description: "A lantern that doesn't burn fuel, but instead captures and refracts starlight. The light is pure and calming.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12000,
    icon: '🏮',
    stock: 6,
    rarity: 'rare',
    effects: [
        "Sheds bright light (30ft) and dim light (30ft more)",
        "Light from this lantern cannot be extinguished by wind or water",
        "Creatures in the light gain advantage on saves against fear",
        "Recharges only under an open night sky"
    ],
    vendor: 'Lothlórien',
    shippedBy: 'Elven Courier',
    levelRequirement: 4
},

};
