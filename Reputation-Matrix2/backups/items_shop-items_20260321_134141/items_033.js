// Shop items chunk 33 of 51
// Items 3201 to 3300 (100 items)
// Auto-generated: 2026-03-21 13:41:13

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_033 = {
  'personal_meteor_shower': {
    id: 'personal_meteor_shower',
    name: "Personal Meteor Shower (1 Night)",
    description: "A celestial event arranged just for you.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 300000,
    icon: '🌠',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "A safe meteor shower occurs over your location (1 night)",
        "May reveal rare minerals or celestial messages",
        "Guests gain +2 to INT checks for 1 day"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Celestial Scroll',
    levelRequirement: 12
},

  'personal_moon': {
    id: 'personal_moon',
    name: "Personal Moon (1 Night)",
    description: "A small moon appears in the sky for you.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 500000,
    icon: '🌕',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Moon grants +2 to all rolls for 1 night",
        "May reveal hidden paths or secrets",
        "Guests gain +1 to CHA checks"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Lunar Scroll',
    levelRequirement: 12
},

  'personal_sunrise': {
    id: 'personal_sunrise',
    name: "Personal Sunrise (1 Day)",
    description: "A sunrise occurs exactly when you want it to.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 100000,
    icon: '🌅',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Sunrise occurs at a time of your choosing (even underground)",
        "Grants +2 to all rolls for 1 day",
        "May attract sun worshippers"
    ],
    vendor: 'lunar_auction',
    shippedBy: 'Sunbeam Vial',
    levelRequirement: 8
},

  'personal_weather_control': {
    id: 'personal_weather_control',
    name: "Personal Weather Control (1 Hour)",
    description: "A cloud mage alters the weather in a 1-mile radius for a short time.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 80000,
    icon: '🌤️',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Choose: Clear, Rain, Fog, or Storm (DM may impose limits)",
        "Can be used to disrupt enemies or aid allies",
        "Overuse may anger the weather spirits"
    ],
    vendor: 'storm_seller',
    shippedBy: 'Cloud Vial',
    levelRequirement: 7
},

  'pest_extermination': {
    id: 'pest_extermination',
    name: "Pest Extermination (Professional)",
    description: "A licensed exterminator removes dangerous creatures (rats, spiders, minor demons) from your property.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 1800,
    icon: '🪲',
    stock: 30,
    rarity: 'uncommon',
    effects: [
        "Remove all pests from a building (24-hour guarantee)",
        "Handles creatures up to CR 2",
        "Blessed salt/wards placed for 7 days (prevents return)"
    ],
    vendor: 'town_hall',
    shippedBy: 'Scheduled Appointment',
    levelRequirement: 1
},

  'pet_rock_awkward': {
        id: 'pet_rock_awkward',
        name: "Awkward Pet Rock",
        description: "A rock with googly eyes glued on. You feel judged by it.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4000,
        icon: '🪨',
        stock: 100,
        rarity: 'common',
        effects: ["It stares at you", "Emotional support (maybe)"],
        vendor: 'toad_town_market',
        shippedBy: 'Heavy Box',
        levelRequirement: 1
    },

  'petrified_tears': {
    id: 'petrified_tears',
    name: "Petrified Tears",
    description: "A vial of crystallized tears from a weeping angel. They glow with sorrow.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 25000,
    icon: '💧',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Drink: gain 1d10 temporary HP and advantage on saves vs charm for 1 hour",
        "You feel overwhelming empathy for all living things",
        "After effect, you cry uncontrollably for 1 minute"
    ],
    vendor: 'fey_market',
    shippedBy: 'Crystal Flask',
    levelRequirement: 7
},

  'phantom_guide': {
        id: 'phantom_guide',
        name: "Phantom Guide Contract",
        description: "Summon a hero from a previous campaign as a permanent follower.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 800000,
        icon: '📜',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Summon a Level 20 PC from a past game",
            "They serve for 1 week or until death",
            "DM controls them (mostly)"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Spirit Portal',
        levelRequirement: 10
    },

  'pikachu_thunderstone': {
    id: 'pikachu_thunderstone',
    name: "Thunderstone",
    description: "A stone that evolves electric abilities.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 15000,
    icon: '⚡',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Single Use: Gain lightning bolt spell (3d10 lightning)",
        "Permanent +1 to lightning damage",
        "Shocks user on roll of 1"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Insulated Box',
    levelRequirement: 5
},

  'pink_paint_of_agreeable_friendship': {
    id: 'pink_paint_of_agreeable_friendship',
    name: "Pink Paint of Agreeable Friendship",
    description: "Everyone likes you, but it's weird.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 13500,
    icon: '🎨',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Paint yourself pink: advantage on Persuasion with friendly creatures",
        "Hostile creatures find you unsettling (disadvantage on Intimidation)",
        "You smell like bubblegum and feel vaguely sticky",
        "Made by: Friendship Paint Co."
    ],
    vendor: 'equestrian_paint_shop',
    shippedBy: 'Glitter Bomb',
    levelRequirement: 5
},

  'pipe_wrench': {
        id: 'pipe_wrench',
        name: "Plumber's Wrench",
        description: "A heavy wrench. Good for pipes and kneecaps.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🔧',
        stock: 100,
        rarity: 'common',
        effects: ["1d6 bludgeoning", "Advantage on mechanics checks to fix pipes"],
        vendor: 'toad_town_market',
        shippedBy: 'Toolbox',
        levelRequirement: 1
    },

  'piranha_plant_pot': {
    id: 'piranha_plant_pot',
    name: "Piranha Plant in a Pot",
    description: "A chomping green head in a terracotta pot. Loyal guard dog... if you feed it.",
    category: SHOP_CATEGORIES.FACTION,
    price: 16000,
    icon: '🌱',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Summons a Piranha Plant familiar (CR 1/2)",
        "Bites for 1d8 Piercing + Poison (1d4)",
        "Guards your camp at night",
        "Eats one raw steak per day or turns on you"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Reinforced Barrel',
    levelRequirement: 4,
    factionBonus: { defense: 10 }
},

  'piranha_plant_potted_pet': {
    id: 'piranha_plant_potted_pet',
    name: "Potted Piranha Plant (Domesticated?)",
    description: "It’s cute! It waves! It also bites strangers. And sometimes friends.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 16000,
    icon: '🌿',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Grants +2 to Intimidation checks",
        "Bites anyone who startles you (1d6 piercing as reaction)",
        "Requires daily feeding (meat or coins — it’s not picky)",
        "Sings lullabies at night (Advantage on sleep saves, Disadvantage on Perception)"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Reinforced Pottery',
    levelRequirement: 3
},

  'piranha_plant_slide': {
    id: 'piranha_plant_slide',
    name: "Piranha Plant Slide Whistle",
    description: "A whistle that summons a Piranha Plant to chomp foes.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 9000,
    icon: '🌿',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Blow: Summon Piranha Plant (1d8 piercing, poison 1d4)",
        "Plant lasts 1 minute, attacks once per turn",
        "Requires feeding after use"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Plant Pot',
    levelRequirement: 3
},

  'pit_fiend_legal_representation': {
    id: 'pit_fiend_legal_representation',
    name: "Pit Fiend Legal Representation",
    description: "Retain a devil lawyer for infernal court cases.",
    category: SHOP_CATEGORIES.services,
    price: 575000,
    icon: '⚖️',
    stock: 3,
    rarity: 'legendary',
    effects: [
        "Devil lawyer automatically wins one legal dispute",
        "Can void one contract or geas (infernal or otherwise)",
        "Made by: Diabolical Bar Association"
    ],
    vendor: 'hells_attorney',
    shippedBy: 'Contractual Obligation',
    levelRequirement: 16
},

  'pitatia_dragon_fruit_slicer': {
    id: 'pitatia_dragon_fruit_slicer',
    name: "Pitatia Dragon Fruit Slicer",
    description: "Serrated knife for tough dragon fruit skins.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6500,
    icon: '🥭',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Slices scaly fruits easily; advantage on exotic prep",
        "Juice doesn't stain; quick cuts",
        "Blade dulls on very hard skins",
        "Made by: Pitatian Knifemakers"
    ],
    vendor: 'pitatia_orchard',
    shippedBy: 'Scaly Slice Sheath',
    levelRequirement: 5
},

  'pitatia_dragon_fruit_wrap': {
    id: 'pitatia_dragon_fruit_wrap',
    name: "Pitatia Dragon Fruit Wrap",
    description: "Vibrant wrap dyed with exotic fruit juices.",
    category: SHOP_CATEGORIES.premium,
    price: 12500,
    icon: '🧣',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Once per day: Gain temporary +1 Dexterity for 1 hour",
        "Wrap provides minor camouflage in jungles",
        "Juice stains fade slowly",
        "Made by: Pitatian Dyers"
    ],
    vendor: 'pitatia_orchard',
    shippedBy: 'Fruity Tie',
    levelRequirement: 5
},

  'pitatia_pie_insurance': {
    id: 'pitatia_pie_insurance',
    name: "Pitatia Pie Insurance",
    description: "Insure your pies against theft and slander.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 8500,
    icon: '🥧',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "One pie per day is immune to being stolen or poisoned",
        "Pie thieves are cursed with hiccups for 1 hour",
        "You must bake a pie weekly or policy lapses",
        "Made by: Pitatia Insurance"
    ],
    vendor: 'pitatia',
    shippedBy: 'Pie Delivery',
    levelRequirement: 5
},

  'pitatia_pitaya_fruit_boost_service': {
    id: 'pitatia_pitaya_fruit_boost_service',
    name: "Pitatia Pitaya Fruit Boost Service",
    description: "Exotic dragon fruit for vitality.",
    category: SHOP_CATEGORIES.services,
    price: 9500,
    icon: '🥭',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Eat: +1 to Strength or Dexterity saves for 8 hours",
        "Regain 1d6 HP over time",
        "Juicy mess: Sticky hands (disadvantage on fine manipulation)",
        "Made by: Pitatian Farmers"
    ],
    vendor: 'pitatia_orchard',
    shippedBy: 'Fruit Basket',
    levelRequirement: 5
},

  'pitatia_pitaya_smoothie_recipe': {
    id: 'pitatia_pitaya_smoothie_recipe',
    name: "Recipe: Pitatia Pitaya Smoothie",
    description: "Blended dragon fruit for exotic vigor.",
    category: SHOP_CATEGORIES.services,
    price: 6500,
    icon: '🥤',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Blend fruit (10 min); drink to gain +1 Dexterity for 2 hours and heal 1d6 HP",
        "Requires: Pitaya; vibrant and juicy",
        "Scaly texture – dragon breath burp",
        "Made by: Pitatian Juicers"
    ],
    vendor: 'pitatia_orchard',
    shippedBy: 'Fruity Flask Folio',
    levelRequirement: 5
},

  'pitatia_sonic_grenade': {
        id: 'pitatia_sonic_grenade',
        name: "Pitatia Sonic Grenade",
        description: "A small device that releases a non-lethal burst of focused sound waves.",
        category: SHOP_CATEGORIES.consumables,
        price: 9500,
        icon: '🔊',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Throw (30ft): forces all within 10ft to make DC 14 CON save or be deafened for 1 minute",
        "No physical damage",
            "Made by: Pitatia"
        ],
        vendor: 'pitatia_tech',
        shippedBy: 'Metal Canister',
        levelRequirement: 4
    },

  'pixie_dust_sprinkler': {
    id: 'pixie_dust_sprinkler',
    name: "Pixie Dust Sprinkler",
    description: "A small vial that sprinkles fey dust for minor levitation tricks.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15000,
    icon: '✨',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Grants 10 ft fly speed for 1 minute (3 uses per vial)",
        "Requires DEX save DC 10 to avoid sneezing and wasting a use",
        "Attracts curious pixies 1d4 times per day",
        "Refillable with common glitter for half effect"
    ],
    vendor: 'feywild_flea_market',
    shippedBy: 'Enchanted Bubble Wrap',
    levelRequirement: 6
},

  'planar_anchor_installation': {
    id: 'planar_anchor_installation',
    name: "Planar Anchor Installation",
    description: "Anchor a location to the material plane, preventing it from shifting or existing partially in another plane.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 85000,
    icon: '⚓',
    stock: 5,
    rarity: 'epic',
    effects: [
        "Install 1 planar anchor in a location",
        "Location becomes permanently stable (cannot be teleported, phased, or planed-shifted)",
        "Maintenance: 2,000 gp per year",
        "Installation requires 1 week of work"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Installation Service',
    levelRequirement: 8
},

  'planar_binding_circle': {
    id: 'planar_binding_circle',
    name: "Planar Binding Circle (Ritual)",
    description: "A portable circle for summoning and binding extraplanar creatures.",
    category: SHOP_CATEGORIES.forbidden,
    price: 810000,
    icon: '⭕',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Binds creatures up to CR 10",
        "Reusable with chalk refills",
        "Made by: Summoners Lodge"
    ],
    vendor: 'arcane_circle',
    shippedBy: 'Portal Frame',
    levelRequirement: 18
},

  'planar_seal_breaking': {
    id: 'planar_seal_breaking',
    name: "Planar Seal Breaking (Service)",
    description: "A specialized team of mages can breach one planar seal or dimensional lock.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 180000,
    icon: '🌀',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Break 1 planar seal, prison dimension, or locked gate",
        "Ritual takes 8 hours; requires 5 mages working in concert",
        "Breaking a seal alerts its creator; risk of counter-curse"
    ],
    vendor: 'arcane_institute',
    shippedBy: 'Magical Expertise',
    levelRequirement: 11
},

  'planetars_wings': {
    id: 'planetars_wings',
    name: "Planetar's Wings (Graft)",
    description: "Surgical attachment of celestial wings.",
    category: SHOP_CATEGORIES.premium,
    price: 735000,
    icon: '🪽',
    stock: 2,
    rarity: 'godly',
    effects: [
        "Gain fly speed of 90ft and divine feather barrage attack",
        "Radiate permanent 30ft radius of sunlight",
        "Made by: Empyrean Surgeons"
    ],
    vendor: 'celestial_mods',
    shippedBy: 'Winged Delivery',
    levelRequirement: 18
},

  'plate_of_reflections': {
    id: 'plate_of_reflections',
    name: "Plate of Reflections",
    description: "A polished plate that shows more than your face: moments, memories, small truths.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 26000,
    icon: '🍽️',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Place food on it: reveals a memory tied to the meal (useful for investigation)",
        "Once per week: shapeshift your reflection (illusion) to charm or confuse"
    ],
    vendor: 'midnight_bazaar',
    shippedBy: 'Silver-Wrapped',
    levelRequirement: 6
},

  'plot_armor_shredder': {
    id: 'plot_armor_shredder',
    name: "Plot Armor Shredder",
    description: "Removes plot armor from any character, including protagonists.",
    category: SHOP_CATEGORIES.WEAPON,
    price: 45000000,
    icon: '✂️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Attacks ignore plot armor, divine protection, and narrative immunity",
        "Can kill the main villain in chapter 1",
        "Made by: The Narrative Assassin"
    ],
    vendor: 'story_breakers',
    shippedBy: 'Spoiler Alert',
    levelRequirement: 75
},

  'pocket_compass': {
    id: 'pocket_compass',
    name: "Pocket Compass",
    description: "A small brass compass whose needle wobbles toward your strongest desire.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 2200,
    icon: '🧭',
    stock: 15,
    rarity: 'uncommon',
    effects: [
        "Points toward whatever you currently seek (subjective)",
        "Once per long rest: cast Locate Object (self only)",
        "Glows when near hidden doors"
    ],
    vendor: 'twilight_outpost',
    shippedBy: 'Padded Pouch',
    levelRequirement: 2
},

  'pocket_dimension_universe': {
    id: 'pocket_dimension_universe',
    name: "Pocket Dimension Universe",
    description: "A marble containing an entire universe.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 95000000,
    icon: '🔮',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Carry a universe in your pocket (10 billion souls, all worship you)",
        "Can enter the universe and rule it as a god",
        "Made by: The Universe in a Bottle Co."
    ],
    vendor: 'dimensional_wares',
    shippedBy: 'Big Bang in a Box',
    levelRequirement: 80
},

  'pocket_dimensional_kitchen': {
    id: 'pocket_dimensional_kitchen',
    name: "Pocket Dimensional Kitchen",
    description: "A tiny kitchen that opens into a vast, infinite pantry and oven.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 450000,
    icon: '🍳',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Cook any meal: infinite quantity, perfect flavor, +1d4 HP restored",
        "All food is magically preserved for 100 years",
        "Kitchen is guarded by a sentient spatula (CR 1/4) who judges your cooking"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Miniature Stove',
    levelRequirement: 10
},

  'pocket_of_infinite_stairs': {
    id: 'pocket_of_infinite_stairs',
    name: "Pocket of Infinite Stairs",
    description: "A small stairwell that leads nowhere — but never ends.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 600000,
    icon: '🪜',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Enter: climb forever — time passes normally, but you never reach the top",
        "You can exit at any point — but you arrive in a random location",
        "Each climb ages you 1d4 years"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Wooden Door',
    levelRequirement: 13
},

  'pocket_orchestra': {
    id: 'pocket_orchestra',
    name: "Pocket Orchestra",
    description: "A tiny music box that summons a handful of invisible musicians.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 15000,
    icon: '🎼',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Play: summon 1d6 spectral musicians that provide +2 AC and +1 morale to allies within 30ft for 10 minutes",
        "Musicians vanish if disturbed"
    ],
    vendor: 'pawn_of_wonders',
    shippedBy: 'Mahogany Case',
    levelRequirement: 4
},

  'point_swap': {
        id: 'point_swap',
        name: "Point Swap",
        description: "A weird device that swaps your vitality.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 15000,
        icon: '🔄',
        stock: 3,
        rarity: 'rare',
        effects: ["Swap your current HP percentage with your current MP/Slot percentage", "Single use"],
        vendor: 'comet_observatory',
        shippedBy: 'Dimensional Mail',
        levelRequirement: 4
    },

  'points_to_the_nearest_treasure_1': {
    id: 'points_to_the_nearest_treasure_1',
    name: "Wario's Treasure Hunting Compass",
    description: "Points to the nearest treasure – or Wario's wallet?",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15000,
    icon: '🧭',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Points to treasure within 1 mile (70% accurate, 30% to junk or danger)",
        "Compass spins wildly near gold: advantage on Perception for loot",
        "Gimmick: Occasionally points to Wario's location (he shows up demanding a cut)",
        "Made by: Wario's Adventure Gear"
    ],
    vendor: 'wario_land',
    shippedBy: 'Treasure Trail Truck',
    levelRequirement: 5
},

  'pointy_stick': {
        id: 'pointy_stick',
        name: "Pointy Stick",
        description: "A wooden stick sharpened on one end. The budget adventurer's weapon of choice.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '|',
        stock: 200,
        rarity: 'common',
        effects: ["1d4 piercing damage", "Breaks on a natural 1"],
        vendor: 'valley_trading_post',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },

  'pokeball_master_edition': {
        id: 'pokeball_master_edition',
        name: "Master Pokéball",
        description: "The ultimate capture device. Captures any non-legendary creature instantly.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 150000,
        icon: '🟣',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Capture any non-legendary creature (CR 15 or lower) on contact",
        "Creature is instantly subdued and bound",
            "Cannot be used on sapient humanoids",
            "Made by: Pokémon League"
        ],
        vendor: 'pokemon_league_store',
        shippedBy: 'Unmarked Carrier',
        levelRequirement: 10
    },

  'pokemon_connectopia_pioneer_key': {
        id: 'pokemon_connectopia_pioneer_key',
        name: "Pioneer’s Key to the Frontier",
        description: "A token granting access to the blocky frontier beyond the known zones",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 350,
        icon: '🏗',
        stock: 5,
        rarity: 'common',
        effects: [
            "Grants temporary access to Connectopia’s hidden zones",
        "Reveals 3 new terrain types on map",
        "Triggers a 10% chance to find a rare item in each zone",
        "Requires a Pokémon with terrain adaptation to use",
        "May cause minor terrain distortion if misused",
        "Crafted by: Goomba Ground Delivery",
        "Linked to the Supernatural Sovereignty Act’s frontier expansion mandate"
        ],
        vendor: 'pokemon',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 1
    },

  'pokemon_crimson_fleet_ranger_key': {
        id: 'pokemon_crimson_fleet_ranger_key',
        name: "Crimson Fleet Ranger Key",
        description: "A token granting access to hidden vaults and elite training grounds",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 800,
        icon: '🔒',
        stock: 15,
        rarity: 'common',
        effects: [
            "Grants 10% bonus to all stat gains from evolution stones",
        "Must be used within 24 hours of activation",
        "Can only be used once per player account",
        "Factions: Crimson Fleet only",
        "Shipped by: Void Drifter Relay"
        ],
        vendor: 'pokemon',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 1
    },

  'pokemon_delfino_captain_sword': {
        id: 'pokemon_delfino_captain_sword',
        name: "Admiral Toads Captain’s Blade",
        description: "A ceremonial blade forged from the heart of the fallen Admiral",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🗡',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Deals 10d6 piercing damage",
        "Grants immunity to status effects for 1 turn",
        "Causes 25% chance to turn enemy into a mechanical state for 1 turn",
        "Can only be used in the presence of Noki or Koopa controlled territory",
        "Requires attunement to a legendary Pokémon",
        "Crafted by: Ranger Union & Rakasha Spirit Walk"
        ],
        vendor: 'pokemon',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 12
    },

  'pokemon_fawful_speech_tome': {
        id: 'pokemon_fawful_speech_tome',
        name: "Fawfuls Linguistic Tome",
        description: "A cursed book that speaks in mechanical tongues",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '📜',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants 3d6 bonus damage on all attacks",
        "Forces target to speak in gibberish for 2 turns",
        "If used on a Pokémon with a mechanical trait, it gains +10% critical hit chance",
        "Consuming it causes the user to hear Fawful’s voice for 1 minute",
        "May cause temporary confusion to the user",
        "Crafted by: Rakasha Spirit Walk"
        ],
        vendor: 'pokemon',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 8
    },

  'pokemon_festival_fall_star_candle': {
        id: 'pokemon_festival_fall_star_candle',
        name: "Festival of Falling Stars Candle",
        description: "A rare candle infused with the essence of Peach’s memory, lit during the Festival of Falling Stars. It casts a soft golden glow and causes nearby Pokémon to feel a surge of affection. But if held too long, it may trigger a curse that causes the user to lose their next turn. Only available during the event.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🌟',
        stock: 5,
        rarity: 'rare',
        effects: [
            "Causes Pokémon nearby to feel a surge of affection (adds +2 to affection stat for 1 round)",
        "20% chance to trigger a “Memory Echo” effect: reveals a hidden ability or hidden evolution",
        "10% chance to cause a curse: user must forfeit their next turn",
        "Can be used to activate the “Festival of Falling Stars” event trigger",
        "Burns for 30 minutes",
        "Must be lit during the Festival"
        ],
        vendor: 'pokemon',
        shippedBy: 'Mages Guild Portal',
        levelRequirement: 4
    },

  'pokemon_griffonstone_talisman': {
        id: 'pokemon_griffonstone_talisman',
        name: "Griffonstone Talisman",
        description: "This enchanted talisman was carved from the heart of a fallen Griffonstone—once a guardian of the Equestrian skies. Now it hums with the memory of pony wings and thunderclaps, granting flight to the unworthy and binding the unworthy to the ground. Only used by those who dare to break the law of nature.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🦅',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants temporary flight for 1 round per use",
        "30% chance to cause a temporary paralysis in the user’s target",
        "Inflicts 1d4 energy drain on the user after use",
        "Unlocks “Skybound” ability: can summon a small storm cloud for 1 turn",
        "Can be fused with a Pokémon’s Poké Ball to create a “Skybound” evolution stone",
        "Requires attunement by a Ranger Union member"
        ],
        vendor: 'pokemon',
        shippedBy: 'Mages Guild Portal',
        levelRequirement: 8
    },

  'pokemon_item_name_here': {
        id: 'pokemon_item_name_here',
        name: "Scam of the Stars",
        description: "A fake artifact that promises to awaken a sleeping god",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 25000,
        icon: '🎭',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Grants temporary invincibility for 3 turns",
        "Increases damage by 50% for 2 turns",
        "Causes the user to lose all HP after the turn ends",
        "No effect if used in battle",
        "Made by: Crimson Fleet"
        ],
        vendor: 'pokemon',
        shippedBy: 'Piranha Plant Post',
        levelRequirement: 10
    },

  'pokemon_league_berry_crusher': {
    id: 'pokemon_league_berry_crusher',
    name: "Pokémon League Berry Crusher",
    description: "Hand-crank crusher for extracting berry juices efficiently.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8000,
    icon: '🥤',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Doubles berry yield for salads/juices; reduces prep time by 10 minutes",
        "Compatible with Pokémon – they can assist (+1 to Nature checks)",
        "Crusher jams on overripe berries (DC 10 fix)",
        "Made by: League Toolmakers"
    ],
    vendor: 'pokemon_league_camp',
    shippedBy: 'Berry Burst Box',
    levelRequirement: 5
},

  'pokemon_league_berry_salad_recipe': {
    id: 'pokemon_league_berry_salad_recipe',
    name: "Recipe: Pokémon League Berry Salad",
    description: "A revitalizing salad of Oran and Sitrus berries for trainers on the go.",
    category: SHOP_CATEGORIES.services,
    price: 9000,
    icon: '🥗',
    stock: 6,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Mix berries (20 min); eat to regain 1d8 HP and remove one level of exhaustion",
        "Requires: 3 berries; works on Pokémon companions too",
        "Boosts type resistance randomly (DM chooses one for 1 hour)",
        "Made by: League Caterers"
    ],
    vendor: 'pokemon_league_camp',
    shippedBy: 'Berry Bowl Delivery',
    levelRequirement: 6
},

  'pokemon_league_healing_berry': {
    id: 'pokemon_league_healing_berry',
    name: "Pokémon League Healing Berry",
    description: "A rare berry that restores vitality when consumed.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 5500,
    icon: '🍇',
    stock: 15,
    rarity: 'uncommon',
    effects: [
        "Heals 2d6+2 HP when eaten",
        "Can be used to stabilize a dying creature",
        "Made by: Pokémon League"
    ],
    vendor: 'pokemon_league_store',
    shippedBy: 'Wicker Basket',
    levelRequirement: 4
},

  'pokemon_league_healing_machine_rental': {
    id: 'pokemon_league_healing_machine_rental',
    name: "Pokémon Center Healing Machine (Rental)",
    description: "A portable version of the famous healing machine. Fully restores all allies after a rest.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 1500,
    icon: '💚',
    stock: 999,
    rarity: 'uncommon',
    effects: [
        "During a long rest, all allies regain full HP and recover from all diseases, poisons, and level 1 exhaustion",
        "Rental lasts for 1 week",
        "Makes a pleasant 'ding!' sound when finished"
    ],
    vendor: 'Pokémon League',
    shippedBy: 'Technician Installation',
    levelRequirement: 1
},

  'pokemon_league_poke_flute_replica': {
    id: 'pokemon_league_poke_flute_replica',
    name: "Pokémon League Poké Flute Replica",
    description: "A wooden flute that awakens sleeping allies or beasts.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 21000,
    icon: '🎵',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Play as action: End sleep effects on one creature within 30 ft",
        "Calms wild animals (Animal Handling DC 13 advantage)",
        "Melody boosts morale – +1 to next attack roll for allies",
        "Off-key notes: 20% chance to annoy instead (disadvantage on Charisma)"
    ],
    vendor: 'pokemon_league',
    shippedBy: 'Trainers Satchel',
    levelRequirement: 7
},

  'pokemon_league_pokeball_of_holding': {
    id: 'pokemon_league_pokeball_of_holding',
    name: "Poké Ball of Holding",
    description: "Captures inanimate objects, not creatures.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 21500,
    icon: '⚪',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Stores up to 50 lbs of non-living items in extradimensional space",
        "Retrieving an item is a bonus action; 5% chance it comes out sticky",
        "Cannot store coins – Poké Balls hate capitalism",
        "Made by: Silph Co. Rejects"
    ],
    vendor: 'pokemon_league_outlet',
    shippedBy: 'Pidgey Post',
    levelRequirement: 6
},

  'pokemon_league_recipe_poke_block_candy': {
    id: 'pokemon_league_recipe_poke_block_candy',
    name: "Recipe: Pokémon League Poké Block Candy",
    description: "Candy for your animal companions.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 9500,
    icon: '📜',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Animal companion gains +1 to attack rolls for 1 hour",
        "Companion becomes hyper: disadvantage on Animal Handling with it for 10 minutes",
        "You eat one: it's just candy (no effect, but tasty)",
        "Made by: Pokémon League Treats"
    ],
    vendor: 'pokemon_league',
    shippedBy: 'Pidgey Post',
    levelRequirement: 5
},

  'pokemon_league_recipe_rare_candy_stew': {
    id: 'pokemon_league_recipe_rare_candy_stew',
    name: "Recipe: Pokémon League Rare Candy Stew",
    description: "Stew that levels you up (slightly).",
    category: SHOP_CATEGORIES.RECIPE,
    price: 18500,
    icon: '📜',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Grants 100 XP (once per character, then recipe becomes useless)",
        "Tastes like artificial flavoring (disadvantage on Charisma while eating)",
        "You glow with potential: advantage on Charisma with trainers",
        "Made by: Pokémon League R&D"
    ],
    vendor: 'pokemon_league',
    shippedBy: 'Pidgey Post',
    levelRequirement: 7
},

  'pokemon_league_trainer_jacket': {
    id: 'pokemon_league_trainer_jacket',
    name: "Pokémon League Trainer Jacket",
    description: "Stylish jacket with badge pockets for aspiring champions.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 19500,
    icon: '🧥',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Holds up to 6 small items without weight",
        "+1 to Animal Handling with Pokémon-like creatures",
        "Jacket zips stick during rain (minor annoyance)",
        "Made by: League Merch"
    ],
    vendor: 'pokemon_league_stadium',
    shippedBy: 'Pikachu Post',
    levelRequirement: 7
},

  'pokemon_league_type_advantage_coating': {
    id: 'pokemon_league_type_advantage_coating',
    name: "Pokémon League Type Advantage Coating",
    description: "Makes your weapon super effective against one type.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 20500,
    icon: '⚡',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Choose one creature type (e.g., undead, fiend); weapon deals +1d6 damage to that type for 7 days",
        "Weapon becomes weakness to one other random type (disadvantage on attacks)",
        "Coating peels off in water – looks like a cheap paint job",
        "Made by: Pokémon League Type Specialists"
    ],
    vendor: 'pokemon_league',
    shippedBy: 'Pokeball Parcel',
    levelRequirement: 7
},

  'pokemon_league_type_charm': {
    id: 'pokemon_league_type_charm',
    name: "Pokémon League Type Charm",
    description: "A small charm imbued with the essence of a single elemental type.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20000,
    icon: '🔮',
    stock: 1, // Choice of one type
    rarity: 'rare',
    effects: [
        "Choose one type (Fire, Water, Grass, Electric)",
        "Your attacks of the chosen type deal +1d4 damage",
        "You have resistance to damage of the chosen type"
    ],
    vendor: 'pokemon_league',
    shippedBy: 'Certified Trainer',
    levelRequirement: 4
},

  'pokemon_league_type_resist_amulet': {
    id: 'pokemon_league_type_resist_amulet',
    name: "Pokémon League Type Resist Amulet",
    description: "Tuned to resist one elemental type (choose at purchase).",
    category: SHOP_CATEGORIES.premium,
    price: 20000,
    icon: '📿',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Resistance to one damage type (fire, water, etc.) for 8 hours per attunement",
        "Once per day: Negate one instance of that damage",
        "Glows when the type is nearby – like a Pokédex alert",
        "Made by: Elite Four Artisans"
    ],
    vendor: 'pokemon_league_jewelers',
    shippedBy: 'Eevee Express',
    levelRequirement: 6
},

  'pokemon_magitek_circuit_core': {
        id: 'pokemon_magitek_circuit_core',
        name: "Magitek Circuit Core",
        description: "A core of industrialized arcane energy, refined from the Iron Legion’s factories",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 6000,
        icon: '⚡',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Boosts attack power by 30% for 3 turns",
        "Consumes 250 energy points per activation",
        "Causes minor magitek overload if used excessively",
        "Requires attunement with a Magitek Pokémon",
        "Enhances evolution success rate by 40%",
        "Crafted by: DK Crew"
        ],
        vendor: 'pokemon',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 8
    },

  'pokemon_master_ball_shard': {
        id: 'pokemon_master_ball_shard',
        name: "Master Ball Shard",
        description: "A fragment of the legendary capture device forged in the ruins of the Galactic Dome. Legends say it glows when a Pokémon’s destiny is sealed—yet it also whispers to those who misuse its power. Only spellcasters may attune to its arcane resonance.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Liberated Toads"
        ],
        vendor: 'pokemon',
        shippedBy: 'Mages Guild Portal',
        levelRequirement: 5
    },

  'pokemon_minus_world_mirage': {
        id: 'pokemon_minus_world_mirage',
        name: "Minus World Mirage",
        description: "A fractured artifact from the lost dimension, now imbued with unstable energy",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 50000,
        icon: '⚡',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants immunity to all forms of psychic damage",
        "Each use triggers a 30% chance to cause a dimensional collapse (game over unless rescued)",
        "Can only be used once per session",
        "Must be attuned to the user’s current location",
        "Factions: None. Only for those who dare to seek the Minus World",
        "Shipped by: Void Drifter Relay",
        "Connected to: Teyvat elemental resonance, Team Rocket’s stolen artifacts, and the Ranger Union’s forbidden archives"
        ],
        vendor: 'pokemon',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 10
    },

  'pokemon_ranger_union_crimson_key': {
        id: 'pokemon_ranger_union_crimson_key',
        name: "Crimson Key of the Iron Legion",
        description: "A relic forged from the blood of fallen industrialists",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '⚔',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants 10% accuracy boost to all physical attacks",
        "Causes 5% chance to disable enemy defense for 1 turn",
        "Triggers mechanical malfunctions on enemy Pokémon with steel or iron traits",
        "Can only be wielded by Ranger Union agents",
        "Requires 2d4 minutes to activate",
        "Crafted by: Ranger Union"
        ],
        vendor: 'pokemon',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 7
    },

  'pokemon_spectral_tether': {
        id: 'pokemon_spectral_tether',
        name: "Spectral Tether",
        description: "A binding artifact forged from the essence of captured spirits",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🕳',
        stock: 1,
        rarity: 'uncommon',
        effects: [
            "Grants 20% chance to avoid status effects",
        "Suffers 5% damage reduction when near dark terrain",
        "Triggers ghostly echoes on successful capture",
        "Must be paired with a captured Pokémon to activate",
        "Unlocks hidden routes in the Phantom Zone",
        "Crafted by: Goomba Ground Delivery"
        ],
        vendor: 'pokemon',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 3
    },

  'pokemon_team_rocket_scam_treasure': {
        id: 'pokemon_team_rocket_scam_treasure',
        name: "The Great Peach’s Last Wish",
        description: "This artifact claims to contain the final wish of the legendary Princess Peach. It glows with golden light and promises to grant any desire to the user. But after 30 minutes of use, the item will turn the user into a “Peach’s Shadow”—a cursed entity bound to the Changeling Hive. Only the most desperate buyers dare to claim it.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 50000,
        icon: '💀',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Grants 1 wish per use, but the wish must be written on paper and sealed in a jar",
        "50% chance to trigger a curse: user becomes bound to the Changeling Hive for 1 week",
        "10% chance to cause a “Peach’s Shadow” effect: user becomes invisible and immune to all attacks for 1 turn",
        "Can be used to unlock the “Peach’s Shadow” quest line",
        "30 minutes of use required to activate the wish",
        "Cursed if used more than once",
        "Sold by Team Rocket for a price of 50,000 (a scam—no wish is real, only a curse)"
        ],
        vendor: 'pokemon',
        shippedBy: 'Mages Guild Portal',
        levelRequirement: 10
    },

  'pokemon_teyvat_echo_bottle': {
        id: 'pokemon_teyvat_echo_bottle',
        name: "Teyvat Echo Bottle",
        description: "A vessel that captures echoes of elemental power from the distant realm",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🌊',
        stock: 7,
        rarity: 'uncommon',
        effects: [
            "Consuming restores 10% of max HP and 10% of max MP",
        "Each use causes a 20% chance to trigger an elemental reaction (random)",
        "Cannot be used while in a battle zone with Team Rocket",
        "Shipped by: Void Drifter Relay",
        "Factions: Ranger Union allies only"
        ],
        vendor: 'pokemon',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 3
    },

  'pokey_cactus': {
    id: 'pokey_cactus',
    name: "Pokey Cactus Segment",
    description: "A spiky segment that rolls and impales foes.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 5000,
    icon: '🌵',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Throw: Rolls 30ft, 2d4 piercing to all in path",
        "Sticks to target (ongoing 1d4 damage until removed)",
        "Single Use"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Prickly Package',
    levelRequirement: 2
},

  'pokey_spine_pen': {
    id: 'pokey_spine_pen',
    name: "Pokey Spine Quill",
    description: "A cactus spine that writes in prickly ink. Contracts signed with it are legally binding in the desert.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 3000,
    icon: '🖊️',
    stock: 12,
    rarity: 'common',
    effects: [
        "Writes on any surface, even sand",
        "Contracts signed are magically enforced (DC 15 CHA to break)",
        "Ink causes 1d4 Poison if used as dagger",
        "Desert creatures respect the signature"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Cactus Wrap',
    levelRequirement: 1
},

  'polish_that_makes_armor_garlic_1': {
    id: 'polish_that_makes_armor_garlic_1',
    name: "Wario's Garlic Armor Polish",
    description: "Polish that makes armor garlic-scented and shiny.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 6000,
    icon: '🧄',
    stock: 10,
    rarity: 'common',
    effects: [
        "Apply to armor: +1 AC for 24 hours (extra shine)",
        "Garlic scent: Advantage vs. undead (they hate it), but disadvantage on social (stinks!)",
        "Gimmick: Polish attracts flies (minor distraction in combat)",
        "Made by: Wario's Shine Scam"
    ],
    vendor: 'wario_land',
    shippedBy: 'Polish Pot',
    levelRequirement: 5
},

  'poltergeist_pepper': {
    id: 'poltergeist_pepper',
    name: "Poltergeist Pepper",
    description: "A wrinkled pepper that makes inanimate objects very enthusiastic about violence.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 18000,
    icon: '🌶️',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Single Use: Dust an area (15ft radius). Objects animate and attack for 1 minute (DM discretion)",
        "Animated objects deal +1d6 force damage",
        "On a roll of 1, attracts an actual poltergeist"
    ],
    vendor: 'witch_hut',
    shippedBy: 'Sealed Spice Jar',
    levelRequirement: 6
},

  'poltergust_g00': {
        id: 'poltergust_g00',
        name: "Poltergust G-00 Prototype",
        description: "The latest ghost-hunting tech from Professor E. Gadd. Experimental and dangerous.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 280000,
        icon: '🧹',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Action: Grapple ghosts/spirits (Escape DC 17)",
            "Bonus Action: Slam grappled target for 2d8 force damage",
            "Reaction: Burst jump (fly 10ft upwards)",
            "Contains Gooigi (can summon a slime clone with 1 HP)"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'E. Gadd Science Division',
        levelRequirement: 6
    },

  'polybius_arcade_popcorn_popper': {
    id: 'polybius_arcade_popcorn_popper',
    name: "Polybius Arcade Popcorn Popper",
    description: "Electric popper with game sounds for snacks.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7000,
    icon: '🍿',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Pops kernels fast; +1 to Dexterity checks after eating (reflex boost)",
        "Plays chiptune music during popping",
        "Overheats on large batches (cool down)",
        "Made by: Arcade Inventors"
    ],
    vendor: 'polybius_arcade',
    shippedBy: 'Popcorn Power Plug',
    levelRequirement: 5
},

  'polybius_arcade_token': {
    id: 'polybius_arcade_token',
    name: "Polybius Arcade Token",
    description: "A mysterious token that powers up simple games or gadgets.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 11700,
    icon: '🪙',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Insert into mechanical devices: +1d4 to related ability checks (e.g., tinkering)",
        "Once per day: Reroll a failed Dexterity check with tech",
        "Gives nostalgic vibes – advantage on History checks about old tech",
        "Overheats: 10% chance of minor zap (1 damage)"
    ],
    vendor: 'polybius',
    shippedBy: 'Pixelated Pouch',
    levelRequirement: 5
},

  'polybius_arcade_token_service': {
    id: 'polybius_arcade_token_service',
    name: "Polybius Arcade Token Service",
    description: "Unlimited tokens for skill-building games.",
    category: SHOP_CATEGORIES.services,
    price: 12500,
    icon: '🪙',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Play 1 hour: Gain proficiency in one tool or game for 1 day",
        "High score: +1d4 to next Dexterity check",
        "Addictive: Risk of wasting time (Wisdom save DC 12)",
        "Made by: Polybius Entertainment"
    ],
    vendor: 'polybius_arcade',
    shippedBy: 'Pixelated Post',
    levelRequirement: 5
},

  'polybius_arcade_training': {
    id: 'polybius_arcade_training',
    name: "Polybius Arcade Training Session",
    description: "Play the forbidden arcade cabinet to boost reflexes.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 18500,
    icon: '🕹️',
    stock: 2,
    rarity: 'rare',
    effects: [
        "+1 to Initiative for 7 days; advantage on Dexterity saves vs. traps",
        "Nightmares about geometric shapes: disadvantage on first save after long rest",
        "Men in black cloaks watch you from corners for the duration",
        "Made by: Polybius Arcade (defunct)"
    ],
    vendor: 'polybius',
    shippedBy: 'Flashing Lights',
    levelRequirement: 7
},

  'polybius_data_crystal': {
    id: 'polybius_data_crystal',
    name: "Polybius Data Crystal",
    description: "A small crystal that stores and projects holographic maps.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 11000,
    icon: '💎',
    stock: 6,
    rarity: 'rare',
    effects: [
        "Stores one detailed map (up to 10 square miles)",
        "Projects a 3D hologram of the stored map (10ft diameter)",
        "Made by: Polybius"
    ],
    vendor: 'polybius_data_hub',
    shippedBy: 'Crystal Case',
    levelRequirement: 4
},

  'polybius_data_key': {
    id: 'polybius_data_key',
    name: "Polybius Data Key",
    description: "A strange key made of pixelated light. It can unlock digital and psychic information gates.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 22000,
    icon: '🔑',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Can bypass any non-physical lock (digital, magical, psychic)",
        "On use, there is a 25% chance of downloading a random, sanity-blasting secret into your mind",
        "Key glitches and flickers near strong electromagnetic fields"
    ],
    vendor: 'Polybius',
    shippedBy: 'Encrypted File Transfer',
    levelRequirement: 9
},

  'polybius_memory_chip': {
        id: 'polybius_memory_chip',
        name: "Polybius Memory Chip",
        description: "A silicon chip that stores complex mathematical sequences and battle plans.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 11000,
        icon: '💾',
        stock: 12,
        rarity: 'rare',
        effects: [
            "Allows instant recall of 1 complex skill proficiency (e.g., siege engineering)",
        "Chip must be physically inserted (temporary debuff to Wisdom)",
            "Made by: Polybius"
        ],
        vendor: 'polybius_data_hub',
        shippedBy: 'Data Transfer',
        levelRequirement: 4
    },

  'polybius_pixel_popcorn_recipe': {
    id: 'polybius_pixel_popcorn_recipe',
    name: "Recipe: Polybius Pixel Popcorn",
    description: "Buttered popcorn that pops with arcade energy.",
    category: SHOP_CATEGORIES.services,
    price: 7000,
    icon: '🍿',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Pop kernels with 'power' (10 min); eat handful for advantage on one Dexterity check (quick reflexes)",
        "Requires: Corn; addictive (Wis save DC 10 or crave more)",
        "Pops like game sounds",
        "Made by: Arcade Snack Makers"
    ],
    vendor: 'polybius_arcade',
    shippedBy: 'Kernel Kernel',
    levelRequirement: 5
},

  'polybius_pixelated_cape': {
    id: 'polybius_pixelated_cape',
    name: "Polybius Pixelated Cape ",
    description: "A cape that glitches like an old video game.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 13000,
    icon: '🧥',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Advantage on Deception when 'glitching' (feign injury)",
        "Cape flickers: Minor distraction to foes (DC 10 Wis save)",
        "Pixels fade in sunlight",
        "Made by: Arcade Tailors"
    ],
    vendor: 'polybius_arcade',
    shippedBy: '8-Bit Fold',
    levelRequirement: 5
},

  'polybius_recipe_arcade_candy': {
    id: 'polybius_recipe_arcade_candy',
    name: "Recipe: Polybius Arcade Candy",
    description: "Candy that tastes like nostalgia.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 9500,
    icon: '📜',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Grants +1 to Initiative for 1 hour (sugar rush)",
        "You see pixelated trails: disadvantage on Perception",
        "Candy is addictive: you crave more (disadvantage if you don't have some daily)",
        "Made by: Polybius Confectionery"
    ],
    vendor: 'polybius',
    shippedBy: 'Flashing Lights',
    levelRequirement: 5
},

  'pony_nobility_decorating_bag': {
    id: 'pony_nobility_decorating_bag',
    name: "Pony Nobility Decorating Bag",
    description: "A bag for frosting cakes with magic.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 11500,
    icon: '🎂',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Advantage on checks to decorate food beautifully",
        "Bag never runs out of frosting (but it's always pink)",
        "You must compliment your own cooking (disadvantage if you don't)",
        "Made by: Pony Nobility Bakers"
    ],
    vendor: 'pony_nobility',
    shippedBy: 'Enchanted Brush',
    levelRequirement: 5
},

  'pony_nobility_diplomatic_seal': {
    id: 'pony_nobility_diplomatic_seal',
    name: "Pony Nobility Diplomatic Seal",
    description: "A wax seal that authenticates documents as coming from the Pony Nobility.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 8500,
    icon: '📜',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Documents bearing this seal are treated as official by Pony-aligned factions",
        "Can be used to forge minor diplomatic papers",
        "Made by: Pony Nobility"
    ],
    vendor: 'pony_royal_court',
    shippedBy: 'Sealed Envelope',
    levelRequirement: 4
},

  'pony_nobility_invitation': {
    id: 'pony_nobility_invitation',
    name: "Invitation to the Grand Galloping Gala",
    description: "A gilded invitation to the most exclusive event in Equestria. A chance to rub hooves with the elite.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 20000,
    icon: '📜',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Grants access to a high-society event for one night",
        "Opportunity to network, gather rumors, or attempt a heist",
        "Strict dress code enforced",
        "Plus-one optional"
    ],
    vendor: 'Pony Nobility',
    shippedBy: 'Royal Courier',
    levelRequirement: 5
},

  'pony_nobility_mane_styling': {
    id: 'pony_nobility_mane_styling',
    name: "Pony Nobility Mane Styling",
    description: "Magical hair that grants minor charisma boosts.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 16500,
    icon: '💇',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Your hair becomes fabulous: +1 to Charisma for 7 days",
        "Hair is sentient and gives bad advice in a squeaky voice",
        "Disadvantage on Stealth – your hair literally sparkles",
        "Made by: Pony Nobility Salon"
    ],
    vendor: 'pony_nobility',
    shippedBy: 'Enchanted Brush',
    levelRequirement: 6
},

  'pony_nobility_pardon': {
        id: 'pony_nobility_pardon',
        name: "Pony Nobility Pardon",
        description: "An official writ forgiving one major crime committed within Pony lands.",
        category: SHOP_CATEGORIES.services,
        price: 35000,
        icon: '📜',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Forgives one crime (non-genocide/deicide)",
        "Restores 1-rank reputation within Pony Nobility sphere",
            "Takes 1 week to process",
            "Made by: Pony Nobility"
        ],
        vendor: 'pony_royal_court',
        shippedBy: 'Sealed Wax',
        levelRequirement: 9
    },

  'pony_nobility_recipe_fancy_cakes': {
    id: 'pony_nobility_recipe_fancy_cakes',
    name: "Recipe: Pony Nobility Fancy Cakes",
    description: "Cakes that are almost too pretty to eat.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 12500,
    icon: '📜',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Grants +1 Charisma for 1 hour (sophisticated palate)",
        "You must admire it for 1 minute before eating (disadvantage if you don't)",
        "Cake is very small: you're still hungry afterward (disadvantage on checks if you complain)",
        "Made by: Pony Nobility Patisserie"
    ],
    vendor: 'pony_nobility',
    shippedBy: 'Enchanted Brush',
    levelRequirement: 5
},

  'pony_nobility_tiara_of_friendship': {
    id: 'pony_nobility_tiara_of_friendship',
    name: "Pony Nobility Tiara of Friendship",
    description: "A plastic tiara that means well.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12500,
    icon: '👑',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "+1 Charisma with good-aligned creatures (they find it endearing)",
        "Evil creatures target you first (they hate the tiara)",
        "Tiaras are for princesses: you must curtsy when greeting people",
        "Made by: Pony Nobility Accessories"
    ],
    vendor: 'pony_nobility',
    shippedBy: 'Enchanted Brush',
    levelRequirement: 5
},

  'popple_mask': {
        id: 'popple_mask',
        name: "Thief Mask",
        description: "A green mask worn by a legendary shadow thief.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 25000,
        icon: '🎭',
        stock: 1,
        rarity: 'rare',
        effects: ["Advantage on Sleight of Hand", "NPCs call you 'Rookie'"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Stolen Box',
        levelRequirement: 3
    },

  'portable_hole_cleaning_service': {
    id: 'portable_hole_cleaning_service',
    name: "Portable Hole Cleaning Service",
    description: "Professional cleaning for your extradimensional storage.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 8900,
    icon: '🕳️',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Cleans and organizes one extradimensional space",
        "Finds 1d10 items you forgot you owned",
        "Removes 1 cursed item (50% chance it ends up in YOUR bag)",
        "Made by: Spatial Sanitation Union"
    ],
    vendor: 'cleaning_service',
    shippedBy: 'Mage Hand Delivery',
    levelRequirement: 5
},

  'portal_key_to_nowhere': {
    id: 'portal_key_to_nowhere',
    name: "Portal Key to Nowhere",
    description: "A key that opens a door to a dimension of pure white void.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 220000,
    icon: '🚪',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Open portal: enter a 10ft cube of nothingness — no time, no sound, no gravity",
        "You age 1 year per hour spent inside",
        "Escape requires a DC 20 Wisdom save — failure means you vanish forever"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Void Box',
    levelRequirement: 14
},

  'potion_of_cheer': {
    id: 'potion_of_cheer',
    name: "Potion of Cheer",
    description: "A fizzy vial that brightens the spirit and loosens the tongue.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 2000,
    icon: '🥤',
    stock: 15,
    rarity: 'uncommon',
    effects: [
        "Drink: +2 Charisma (Persuasion) for 1 hour",
        "Cures minor sadness and fear effects",
        "May cause sudden optimism (risky decisions)"
    ],
    vendor: 'alchemist_stall',
    shippedBy: 'Corked Flask',
    levelRequirement: 1
},

  'potion_of_friendly_fire': {
    id: 'potion_of_friendly_fire',
    name: "Potion of Friendly Fire",
    description: "Makes your flames selectively harmless to allies.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 8500,
    icon: '🧪',
    stock: 12,
    rarity: 'uncommon',
    effects: [
        "For 1 hour, your fire spells ignore allies for cover purposes",
        "Allies have advantage on saves vs YOUR fire effects only",
        "Makes your eyes glow ominously (disadvantage on stealth)",
        "Tastes like burnt marshmallow"
    ],
    vendor: 'alchemist_apprentice',
    shippedBy: 'Bubble Mail',
    levelRequirement: 5
},

  'potion_of_minor_heroism': {
    id: 'potion_of_minor_heroism',
    name: "Potion of Minor Heroism",
    description: "Gives you the confidence of a hero, if not the power.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 5200,
    icon: '🧪',
    stock: 20,
    rarity: 'uncommon',
    effects: [
        "Advantage on Charisma checks for 1 hour",
        "Immune to fear (but not to common sense)",
        "Disadvantage on Stealth (you're too heroic to hide)",
        "Tastes like liquid courage (it's just whiskey with glitter)"
    ],
    vendor: 'motivational_alchemist',
    shippedBy: 'Confident Courier',
    levelRequirement: 5
},

  'potion_of_situational_awareness': {
    id: 'potion_of_situational_awareness',
    name: "Potion of Situational Awareness",
    description: "Grants advantage on noticing obvious things.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 6800,
    icon: '🧪',
    stock: 15,
    rarity: 'uncommon',
    effects: [
        "Advantage on Perception checks for 1 hour",
        "Automatically notice traps with DC 12 or lower",
        "Disadvantage on saves vs subtle illusions (you're too focused)",
        "Tastes like coffee and regret"
    ],
    vendor: 'adventurer_essentials',
    shippedBy: 'Standard Post',
    levelRequirement: 5
},

  'potions_on_a_stick_1': {
    id: 'potions_on_a_stick_1',
    name: "Recipe: Mages' Guild Potion Popsicles",
    description: "Potions on a stick.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 15500,
    icon: '📜',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Freeze any potion into a popsicle: effect is delayed by 1 round",
        "Popsicle melts in heat: disadvantage in hot environments",
        "You get brain freeze: disadvantage on Intelligence checks for 1 minute after eating",
        "Made by: Mages' Guild Dessert Bar"
    ],
    vendor: 'mages_guild',
    shippedBy: 'Arcane Relay',
    levelRequirement: 6
},

  'power_rush_badge': {
        id: 'power_rush_badge',
        name: "Power Rush Badge",
        description: "A crimson badge that pulses with desperate energy. Danger enhances performance.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 120000,
        icon: '💢',
        stock: 3,
        rarity: 'rare',
        effects: [
            "While below half HP: +1d6 to damage rolls",
            "While below quarter HP: +2d6 to damage rolls",
            "Requires attunement"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Secure Courier',
        levelRequirement: 5
    },

  'power_smash_badge': {
        id: 'power_smash_badge',
        name: "Power Smash Badge",
        description: "Focus all your energy into one hammer strike.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 55000,
        icon: '🔨',
        stock: 3,
        rarity: 'uncommon',
        effects: ["Action: -2 to hit, +5 to damage with bludgeoning weapons"],
        vendor: 'gilded_gryphon',
        shippedBy: 'Heavy Box',
        levelRequirement: 4
    },

  'primordial_chaos_egg': {
    id: 'primordial_chaos_egg',
    name: "Primordial Chaos Egg",
    description: "An egg containing the birth of all existence. Don't drop it.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 500000000,
    icon: '🥚',
    stock: 1,
    rarity: 'cosmic',
    effects: [
        "Hatch it to create a new universe (you become its god)",
        "Eat it to gain the power of creation itself (can create anything from nothing)",
        "Made by: The First Egg"
    ],
    vendor: 'cosmic_nursery',
    shippedBy: 'Big Bang Delivery',
    levelRequirement: 200
},

  'prince_of_persia_dagger': {
    id: 'prince_of_persia_dagger',
    name: "Dagger of Time",
    description: "A dagger that rewinds time briefly.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 80000,
    icon: '🗡️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Rewind 6 seconds (once per day)",
        "Stab: 1d4 piercing + time stop on target (1 round)",
        "Sands drain slowly"
    ],
    vendor: 'lunar_auction',
    shippedBy: 'Time Capsule',
    levelRequirement: 12
},

  'private_observatory': {
    id: 'private_observatory',
    name: "Private Observatory",
    description: "A portable, high-tech observatory that fits in a backpack.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 500000,
    icon: '🔭',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Can see through walls, clouds, and time (DM discretion)",
        "Reveals hidden celestial events",
        "Requires a clear night sky"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Telescope Case',
    levelRequirement: 12
},

  'probability_manipulator': {
    id: 'probability_manipulator',
    name: "Probability Manipulator",
    description: "A device that makes anything 100% likely.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 72000000,
    icon: '🎲',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Set any probability to 100% (any roll you make succeeds)",
        "Set any probability to 0% (any enemy roll fails)",
        "Made by: The Statistician"
    ],
    vendor: 'probability_brokers',
    shippedBy: 'Guaranteed Delivery',
    levelRequirement: 88
},

  'propeller_mushroom': {
    id: 'propeller_mushroom',
    name: "Propeller Mushroom",
    description: "A mushroom with a spinning propeller cap. Launch yourself skyward with style.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 8000,
    icon: '🍄',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Single Use: Fly 60ft straight up",
        "Slow fall for 1 minute",
        "Propeller hums the Mario theme",
        "You spin uncontrollably for 30 seconds after landing"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Spinning Crate',
    levelRequirement: 2
},

};
