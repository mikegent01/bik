// Shop items chunk 32 of 51
// Items 3101 to 3200 (100 items)
// Auto-generated: 2026-03-21 13:41:41

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_032 = {
  'mushroom_spore_bomb': {
    id: 'mushroom_spore_bomb',
    name: "Mushroom Spore Bomb",
    description: "A throwable orb packed with growth spores. Turns battlefields into fungal nightmares.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 1700,
    icon: '💣',
    stock: 8,
    rarity: 'rare',
    effects: [
        "Throw (20ft range): 3d6 Poison in 10ft radius",
    "Half on DEX save",
        "Area becomes Difficult Terrain (mushrooms sprout)",
        "You gain temporary HP equal to damage dealt"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Leather Satchel',
    levelRequirement: 3
},

  'music_box': {
        id: 'music_box',
        name: "Spooky Music Box",
        description: "Plays a haunting melody. Toads hate it.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '🎵',
        stock: 4,
        rarity: 'common',
        effects: ["Sets a creepy mood", "May attract Boos"],
        vendor: 'shamans_hut',
        shippedBy: 'Box',
        levelRequirement: 1
    },

  'mystery_box': {
        id: 'mystery_box',
        name: "? Block",
        description: "A hovering yellow block with a question mark. Strike it to receive a random reward.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 360,
        icon: '❓',
        stock: 100,
        rarity: 'uncommon',
        effects: [
            "Single use",
            "Roll 1d100 on the Mystery Box Table",
            "Results range from common consumables to rare items"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Anti-Gravity Container',
        levelRequirement: 1
    },

  'mystery_egg': {
        id: 'mystery_egg',
        name: "Mystery Egg",
        description: "A large spotted egg. Is it breakfast? Or a friend?",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 360,
        icon: '🥚',
        stock: 5,
        rarity: 'uncommon',
        effects: ["Roll d6 when cooking: 1-5 it's an egg, 6 it's a Yoshi (just kidding, it's a bad omelet)"],
        vendor: 'valley_trading_post',
        shippedBy: 'Egg Carton',
        levelRequirement: 1
    },

  'mystery_mario_hat': {
    id: 'mystery_mario_hat',
    name: "Mystery Mario Hat",
    description: "Looks like Mario’s cap… but sometimes it isn’t. Changes randomly every dawn.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 360,
    icon: '🧢',
    stock: 3,
    rarity: 'uncommon',
    effects: [
        "Each morning, transforms into a random NPC’s hat (Luigi, Toad, Goomba King, etc.)",
        "Grants +1 to a random ability score based on the hat",
        "May cause NPCs to mistake you for someone else (DM’s whim)",
        "Wearing Peach’s tiara gives disadvantage on stealth (sparkles too much)"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Disguised Parcel',
    levelRequirement: 4
},

  'nanite_repair_swarm': {
    id: 'nanite_repair_swarm',
    name: "Nanite Repair Swarm (Medical)",
    description: "A cloud of nanites that repairs wounds and cybernetics instantly.",
    category: SHOP_CATEGORIES.services,
    price: 430000,
    icon: '🤖',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Heals 100 HP per use, 5 uses/vial",
        "Works on machines too",
        "Made by: NanoMed Corp"
    ],
    vendor: 'med_lab',
    shippedBy: 'Injection Kit',
    levelRequirement: 15
},

  'narrative_causality_gun': {
    id: 'narrative_causality_gun',
    name: "Narrative Causality Gun",
    description: "Shoot the cause, the effect dies.",
    category: SHOP_CATEGORIES.WEAPON,
    price: 98000000,
    icon: '🔫',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Shoot the cause of any effect: the effect never happens (e.g., shoot 'the Big Bang', universe ends)",
        "Can kill someone's childhood to prevent them from existing",
        "Made by: The Causality Breaker"
    ],
    vendor: 'causal_weapons',
    shippedBy: 'Cause and Effect',
    levelRequirement: 110
},

  'narrative_collapser_bomb': {
    id: 'narrative_collapser_bomb',
    name: "Narrative Collapser Bomb",
    description: "Ends the current story arc by collapsing all plot threads into one.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 38000000,
    icon: '💣',
    stock: 3,
    rarity: 'legendary',
    effects: [
        "All active quests, plot hooks, and storylines converge into one final confrontation",
        "Gain all XP from resolved plotlines instantly",
        "Made by: The Story Collapser"
    ],
    vendor: 'campaign_control',
    shippedBy: 'Climax Delivery',
    levelRequirement: 50
},

  'narrative_velocity_accelerator': {
    id: 'narrative_velocity_accelerator',
    name: "Narrative Velocity Accelerator",
    description: "Speed up the story to reach the good parts faster.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 45000000,
    icon: '⏩',
    stock: 2,
    rarity: 'legendary',
    effects: [
        "Skip any amount of travel, downtime, or boring parts (DM narrates a summary)",
        "Gain all XP, loot, and story benefits from skipped content",
        "Made by: The Editor"
    ],
    vendor: 'story_services',
    shippedBy: 'Fast Forward',
    levelRequirement: 30
},

  'navigator_of_tabs': {
    id: 'navigator_of_tabs',
    name: "Navigator of Tabs",
    description: "A brass sextant full of minute bookmarks. Each tab is a destination you've been to before.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 75000,
    icon: '🧭',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Action: Open a tab and teleport to any location you've visited (1/day)",
        "Houses 5 tabs; regains one tab per long rest",
        "Steals a memory of that place when used (temporary amnesia)"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Lockbox',
    levelRequirement: 12
},

  'necklace_of_the_silent_song': {
    id: 'necklace_of_the_silent_song',
    name: "Necklace of the Silent Song",
    description: "A pendant that sings a song only the dead can hear.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 25000,
    icon: '📿',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Wear: ghosts are drawn to you — they whisper secrets",
        "Once per week: you can communicate with a single dead person",
        "You begin to hear the song even when not wearing it"
    ],
    vendor: 'temple_eternal',
    shippedBy: 'Bone Chain',
    levelRequirement: 4
},

  'necromantic_phylactery_upgrade': {
    id: 'necromantic_phylactery_upgrade',
    name: "Necromantic Phylactery Upgrade (Lich Enhancement)",
    description: "Enhances a lich's phylactery with extended regeneration capabilities.",
    category: SHOP_CATEGORIES.forbidden,
    price: 950000,
    icon: '💎',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Reduces resurrection time to 1 day",
        "Adds soul-binding to 10 additional minions",
        "Made by: Undying Council"
    ],
    vendor: 'bone_vault',
    shippedBy: 'Spectral Haunt',
    levelRequirement: 19
},

  'necromantic_resurrection_stone': {
    id: 'necromantic_resurrection_stone',
    name: "Necromantic Resurrection Stone (Relic)",
    description: "Revives the dead as undead servants once per year.",
    category: SHOP_CATEGORIES.forbidden,
    price: 840000,
    icon: '🪦',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Raises one corpse as CR 5 undead",
        "Stone cracks after use",
        "Made by: Grave Mages"
    ],
    vendor: 'tomb_raider',
    shippedBy: 'Dirt Coffin',
    levelRequirement: 17
},

  'necropolis_building_permit': {
    id: 'necropolis_building_permit',
    name: "Necropolis Building Permit (City of Judgment)",
    description: "Official license to raise a ziggurat in the Shadowfell.",
    category: SHOP_CATEGORIES.faction,
    price: 925000,
    icon: '🏛️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Establish a Necropolis that generates 100 undead workers/day",
        "Protected by Shadowfell property laws",
        "Made by: Kelemvor's Bureaucrats"
    ],
    vendor: 'dead_registry',
    shippedBy: 'Ghostly Procession',
    levelRequirement: 18,
    factionBonus: { undeath: 120 }
},

  'need_gold_now_wario_s': {
    id: 'need_gold_now_wario_s',
    name: "Wario's Quick Cash Loan Contract",
    description: "Need gold now? Wario's got you covered (for a price).",
    category: SHOP_CATEGORIES.SERVICES,
    price: 500, // Cheap to buy the contract
    icon: '📃',
    stock: 10,
    rarity: 'common',
    effects: [
        "Receive 1000 gp immediately, but must pay back 1500 gp within 7 days",
        "If you default, Wario takes one random piece of your equipment (he leaves a receipt)",
        "While in debt, you have disadvantage on Charisma checks with merchants (word gets around)",
        "Paying back early gives you a 'Wario Points' card (collect 10 for a free garlic spray)",
        "Contract is legally binding in 12 dimensions (including the bad ones)",
        "Made by: Wario Land Financial Services (LLC, Ltd., Inc., Co.)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Contractual Obligation',
    levelRequirement: 5
},

  'neon_glove': {
    id: 'neon_glove',
    name: "Neon Glove",
    description: "A glowing latex glove that leaves streaks of color in the air as you gesture.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16000,
    icon: '🧤',
    stock: 6,
    rarity: 'rare',
    effects: [
        "Attacks deal +1d4 radiant while glove is lit",
        "Once per short rest: draw glowing symbols in the air (Light with effects)",
        "Needs nightly charging"
    ],
    vendor: 'neon_vendor',
    shippedBy: 'Glow Box',
    levelRequirement: 2
},

  'nightmare_exorcism': {
    id: 'nightmare_exorcism',
    name: "Nightmare Exorcism Service",
    description: "A dream-walker specializes in purging nightmares and psychic corruption from your mind.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 4500,
    icon: '😴',
    stock: 10,
    rarity: 'rare',
    effects: [
        "Remove recurring nightmares/madness effects",
        "Sleep becomes restful; gain +1 HP per level during long rests for 7 days",
        "Exorcism requires you to sleep in wizard's tower"
    ],
    vendor: 'dream_sanctuary',
    shippedBy: 'Appointment Only',
    levelRequirement: 5
},

  'north_american_eagle_berry_pemmican_recipe': {
    id: 'north_american_eagle_berry_pemmican_recipe',
    name: "Recipe: North American Eagle Berry Pemmican",
    description: "Dried meat and berries for vision quests.",
    category: SHOP_CATEGORIES.services,
    price: 7000,
    icon: '🥩',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Dry and mix (1 hour); eat bar to gain advantage on Wisdom (Perception) for 4 hours",
        "Requires: Meat and berries; trail-ready",
        "Eagle eye boost",
        "Made by: Tribal Hunters"
    ],
    vendor: 'north_american_tribe',
    shippedBy: 'Quest Quaff Quill',
    levelRequirement: 5
},

  'north_american_eagle_feather_poncho': {
    id: 'north_american_eagle_feather_poncho',
    name: "North American Eagle Feather Poncho",
    description: "Poncho adorned with eagle feathers for vision quests.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16500,
    icon: '🧥',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Advantage on Wisdom (Perception) from heights",
        "Poncho grants minor wind resistance",
        "Feathers ruffle in storms",
        "Made by: Tribal Crafters"
    ],
    vendor: 'north_american_tribe',
    shippedBy: 'Feather Fringe',
    levelRequirement: 5
},

  'north_american_eagle_feather_talisman_service': {
    id: 'north_american_eagle_feather_talisman_service',
    name: "North American Eagle Feather Talisman Service",
    description: "Vision quest aid.",
    category: SHOP_CATEGORIES.services,
    price: 13500,
    icon: '🪶',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Talisman: Advantage on Perception 8 hours",
        "Fly 10ft glide once",
        "Feather molts seasonally",
        "Made by: Tribal Shamans"
    ],
    vendor: 'north_american_tribe',
    shippedBy: 'Feather Bind',
    levelRequirement: 5
},

  'north_american_eagle_grooming': {
    id: 'north_american_eagle_grooming',
    name: "North American Eagle Grooming Service",
    description: "Groom a patriotic eagle.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 10500,
    icon: '🦅',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Gain a loyal eagle companion for 7 days (scout only, no combat)",
        "Eagle is very opinionated about politics (distracting)",
        "You must defend its honor (disadvantage on checks if you don't)",
        "Made by: North American Aviary"
    ],
    vendor: 'north_american',
    shippedBy: 'Eagle Flight',
    levelRequirement: 5
},

  'north_american_eagle_grooming_premium': {
    id: 'north_american_eagle_grooming_premium',
    name: "North American Eagle Grooming (Premium)",
    description: "Groom a patriotic eagle (premium).",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 13500,
    icon: '🦅',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Gain a loyal eagle that can scout and deliver messages",
        "Eagle is very patriotic: advantage on Charisma with nationalists",
        "Eagle expects tribute (1 gp per day or it sulks)",
        "Made by: North American Premium Aviary"
    ],
    vendor: 'north_american',
    shippedBy: 'Eagle Flight',
    levelRequirement: 5
},

  'north_american_tribal_berry_masher': {
    id: 'north_american_tribal_berry_masher',
    name: "North American Tribal Berry Masher",
    description: "Stone masher for pemmican berries.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6000,
    icon: '🥩',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Mashes berries fine; advantage on quest recipes",
        "Tribal durable",
        "Stains with juice",
        "Made by: Tribal Stonecarvers"
    ],
    vendor: 'north_american_tribe',
    shippedBy: 'Berry Bash Bundle',
    levelRequirement: 5
},

  'oathbound_judges_gavel_premium': {
    id: 'oathbound_judges_gavel_premium',
    name: "Oathbound Judges Gavel (Premium)",
    description: "Bang for truth.",
    category: SHOP_CATEGORIES.premium,
    price: 21000,
    icon: '🔨',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Strike: Force truth (DC 12 Wis) for 1 question",
        "Advantage on Insight",
        "Gavel echoes judgments",
        "Made by: Oath Judges"
    ],
    vendor: 'oathbound_judges_court',
    shippedBy: 'Wooden Mallet',
    levelRequirement: 7
},

  'oathbound_judges_guilt_tripping_premium': {
    id: 'oathbound_judges_guilt_tripping_premium',
    name: "Oathbound Judges Guilt Tripping (Premium)",
    description: "Make enemies feel very guilty.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 18500,
    icon: '🎭',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Once per day: Stun an enemy with guilt for 1d4 rounds (DC 15 Wis save)",
        "Works on enemies with conscience only (DM's discretion)",
        "You feel guilty about using it: -1 to attack rolls for 1 hour",
        "Made by: Oathbound Judges Shame Masters"
    ],
    vendor: 'oathbound_judges',
    shippedBy: 'Judgmental Stare',
    levelRequirement: 7
},

  'oathbound_judges_guilt_tripping_service': {
    id: 'oathbound_judges_guilt_tripping_service',
    name: "Oathbound Judges Guilt Tripping Service",
    description: "Make your enemies feel bad.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 16500,
    icon: '🎭',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Once per day: Force an enemy to make DC 13 Wisdom save or be stunned by guilt for 1 round",
        "Works only on enemies with conscience (DM's discretion)",
        "You feel guilty about using it (disadvantage on next Charisma check)",
        "Made by: Oathbound Judges Shame Division"
    ],
    vendor: 'oathbound_judges',
    shippedBy: 'Judgmental Stare',
    levelRequirement: 6
},

  'oathbound_judges_judge_robe': {
    id: 'oathbound_judges_judge_robe',
    name: "Oathbound Judges Judge Robe",
    description: "Formal robe for courtroom authority.",
    category: SHOP_CATEGORIES.premium,
    price: 19500,
    icon: '👘',
    stock: 2,
    rarity: 'rare',
    effects: [
        "+1 to Charisma (Intimidation) in trials",
        "Robe enforces oaths (minor binding)",
        "Heavy for quick movement",
        "Made by: Judge Tailors"
    ],
    vendor: 'oathbound_judges_court',
    shippedBy: 'Gavel Garment',
    levelRequirement: 7
},

  'oathbound_judges_truth_serum_soup_recipe': {
    id: 'oathbound_judges_truth_serum_soup_recipe',
    name: "Recipe: Oathbound Judges Truth Serum Soup",
    description: "Soup with truth herbs for honest confessions.",
    category: SHOP_CATEGORIES.services,
    price: 8500,
    icon: '🍲',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Infuse herbs (40 min); eat/drink to gain advantage on Insight vs. lies for 2 hours",
        "Requires: Truth herbs; revealing",
        "Judges' tool",
        "Made by: Court Cooks"
    ],
    vendor: 'oathbound_judges_court',
    shippedBy: 'Serum Soup Summary',
    levelRequirement: 6
},

  'oathbound_judges_truth_tongs': {
    id: 'oathbound_judges_truth_tongs',
    name: "Oathbound Judges Truth Tongs",
    description: "Tongs for handling soup without lies (burns false).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8000,
    icon: '🍲',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Handles hot truth herbs; +1 to Insight during prep",
        "Reveals tainted food",
        "Tongs pinch liars",
        "Made by: Judge Forgers"
    ],
    vendor: 'oathbound_judges_court',
    shippedBy: 'Truth Tongs Tote',
    levelRequirement: 6
},

  'oil_for_lamps_that_grants': {
    id: 'oil_for_lamps_that_grants',
    name: "Wario's Wish Lamp Oil",
    description: "Oil for lamps that 'grants wishes' (smoke).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5000,
    icon: '🛢️',
    stock: 9,
    rarity: 'common',
    effects: [
        "Burn for smoke: minor illusion smoke",
        "Oil smokes: disadvantage on breath",
        "Lamp users: +1 light checks",
        "Made by: Wario Oils"
    ],
    vendor: 'wario_land',
    shippedBy: 'Smoke Signal',
    levelRequirement: 4
},

  'old_boot': {
        id: 'old_boot',
        name: "Old Boot",
        description: "Fished out of a pond. Has a hole in the sole. Why are you buying this?",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 25,
        icon: '🥾',
        stock: 100,
        rarity: 'junk',
        effects: ["Functions as a club (1d4 damage)", "Charisma -1 while holding"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Garbage Chute',
        levelRequirement: 1
    },

  'omnipotence_for_dummies': {
    id: 'omnipotence_for_dummies',
    name: "Omnipotence for Dummies (Book)",
    description: "A beginner's guide to being all-powerful. Very user-friendly.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 30000,
    icon: '📚',
    stock: 3,
    rarity: 'legendary',
    effects: [
        "Read over 1 hour: gain omnipotence for 24 hours (can do literally anything)",
        "Book is consumable (disintegrates after reading)",
        "Made by: The Idiot's Guide"
    ],
    vendor: 'divine_education',
    shippedBy: 'Easy Reading',
    levelRequirement: 30
},

  'omnipotence_permission_slip': {
    id: 'omnipotence_permission_slip',
    name: "Omnipotence Permission Slip",
    description: "A signed slip allowing you to be omnipotent. Signed by the universe itself.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 1000000000000,
    icon: '📄',
    stock: 1,
    rarity: 'cosmic',
    effects: [
        "Become omnipotent (can do literally anything)",
        "The universe retroactively always considered you omnipotent",
        "Made by: The Author"
    ],
    vendor: 'existence_bureau',
    shippedBy: 'Narrative Retcon',
    levelRequirement: 9999
},

  'omnipotent_being_summoning_scroll': {
    id: 'omnipotent_being_summoning_scroll',
    name: "Summoning Scroll: Omnipotent Being",
    description: "Summon someone more powerful than you. Hope they're friendly.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 45000000,
    icon: '📜',
    stock: 2,
    rarity: 'legendary',
    effects: [
        "Summon an omnipotent being (DM's choice of entity, attitude neutral to hostile)",
        "They owe you one favor (interpretation may vary)",
        "Made by: The Summoner"
    ],
    vendor: 'summoning_services',
    shippedBy: 'Instant Summon',
    levelRequirement: 60,
    warning: "May summon something that ends the campaign."
},

  'omnipresent_reality_core': {
    id: 'omnipresent_reality_core',
    name: "Omnipresent Reality Core",
    description: "A sphere that makes you exist everywhere at once.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 150000000000,
    icon: '🔮',
    stock: 1,
    rarity: 'cosmic',
    effects: [
        "Exist in all planes simultaneously, observe all events, be immune to surprise",
        "Can retroactively change any action you took in the last 24 hours (no save)",
        "Made by: The Observer Beyond"
    ],
    vendor: 'meta_existence',
    shippedBy: 'Quantum Entanglement',
    levelRequirement: 150
},

  'omniscient_wisdom_orb': {
    id: 'omniscient_wisdom_orb',
    name: "Omniscient Wisdom Orb",
    description: "Know everything that was, is, or will be.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 45000000,
    icon: '🔮',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Permanent: Know all information, see all futures, understand all languages and secrets",
        "Cannot be surprised, cannot be lied to, cannot be deceived",
        "Made by: The All-Knowing"
    ],
    vendor: 'infinite_library',
    shippedBy: 'Instant Knowledge',
    levelRequirement: 90
},

  'omniversal_conqueror_armor': {
    id: 'omniversal_conqueror_armor',
    name: "Omniversal Conqueror Armor",
    description: "Armor worn by the one who conquered all universes.",
    category: SHOP_CATEGORIES.ARMOR,
    price: 500000000,
    icon: '🛡️',
    stock: 1,
    rarity: 'cosmic',
    effects: [
        "AC becomes infinite (cannot be hit by any means)",
        "All damage dealt to you is reflected back at the attacker ×10",
        "Made by: The Ultimate Conqueror"
    ],
    vendor: 'multiversal_empire',
    shippedBy: 'Imperial Armory',
    levelRequirement: 250
},

  'omniversal_remote': {
    id: 'omniversal_remote',
    name: "Omniversal Remote",
    description: "Control any universe like a TV.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 150000000,
    icon: '📺',
    stock: 1,
    rarity: 'cosmic',
    effects: [
        "Pause, rewind, fast-forward, or change channels on any universe",
        "Can mute specific people (they can't speak or cast verbal spells)",
        "Made by: The Viewer"
    ],
    vendor: 'multiversal_entertainment',
    shippedBy: 'Channel Surfing',
    levelRequirement: 120
},

  'one_splash_and_nobody_knows': {
    id: 'one_splash_and_nobody_knows',
    name: "Blooper Ink Vial",
    description: "One splash and nobody knows where you went. Or what you did.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 10500,
    icon: '🐙',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Action: Throw vial to create 10ft radius cloud of ink",
        "All inside have total concealment (attack rolls against them have disadvantage)",
        "Lasts 1 minute or until dispersed by wind/water",
        "Stains permanently — your clothes, your skin, your reputation"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Leaky Pouch',
    levelRequirement: 2
},

  'onyx_hand_poison_kit': {
    id: 'onyx_hand_poison_kit',
    name: "Onyx Hand Poison Kit",
    description: "A set of vials and applicators for coating weapons with fast-acting, untraceable poisons.",
    category: SHOP_CATEGORIES.SERVICES, // Sold as a kit, but application is a service
    price: 25000,
    icon: '☠️',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Kit contains enough poison for 3 weapon coatings",
        "Poison deals 2d6 poison damage on hit (CON save for half)",
        "Poison is colorless and odorless; DC 15 check to identify"
    ],
    vendor: 'the_onyx_hand',
    shippedBy: 'Black Market Box',
    levelRequirement: 5
},

  'onyx_hand_poison_vial': {
    id: 'onyx_hand_poison_vial',
    name: "Onyx Hand Poison Vial",
    description: "A vial containing a fast-acting paralytic poison.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 7500,
    icon: '💊',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Poison (ingested): DC 13 CON save or be paralyzed for 1 minute",
        "Single dose (enough to coat one weapon or contaminate one drink)",
        "Made by: The Onyx Hand"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Glass Vial',
    levelRequirement: 4
},

  'onyx_hand_shadow_subscription': {
    id: 'onyx_hand_shadow_subscription',
    name: "Onyx Hand Shadow Subscription",
    description: "Monthly delivery of sentient shadows to do minor tasks.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 24500,
    icon: '🌑',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Each week, a shadow familiar runs one errand (deliver a letter, spy for 10 minutes)",
        "Shadow might develop attitude and demand a raise (in shadows)",
        "Vulnerable to bright light – disappears in daylight spells",
        "Made by: The Onyx Hand Shadow Guild"
    ],
    vendor: 'the_onyx_hand',
    shippedBy: 'Shadow Drop',
    levelRequirement: 7
},

  'onyx_hand_soul_shard': {
    id: 'onyx_hand_soul_shard',
    name: "Onyx Hand Soul Shard",
    description: "A shard of obsidian containing a trapped, screaming soul. Used to power dark rituals.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 18000,
    icon: '🖤',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Can be consumed to add +2d6 Necrotic damage to a single spell attack",
        "Alternatively, can be shattered to cast 'Animate Dead' on up to 4 HD of corpses",
        "Each use risks attracting the attention of the soul's original owner"
    ],
    vendor: 'The Onyx Hand',
    shippedBy: 'Cursed Wrappings',
    levelRequirement: 7
},

  'onyx_hand_spy_poison': {
        id: 'onyx_hand_spy_poison',
        name: "Onyx Hand Sleep Toxin",
        description: "A slow-acting poison that mimics natural sleep, used by high-level assassins.",
        category: SHOP_CATEGORIES.consumables,
        price: 21000,
        icon: '💉',
        stock: 6,
        rarity: 'rare',
        effects: [
            "Applied to weapon: Target must make DC 16 CON save or fall into deep sleep for 1d4 x 10 minutes",
        "No visible side effects",
            "Made by: The Onyx Hand"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Syringe Case',
        levelRequirement: 6
    },

  'oracle_of_lost_words': {
    id: 'oracle_of_lost_words',
    name: "Oracle of Lost Words",
    description: "A stone tablet that speaks only in languages that no longer exist.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 6300,
    icon: '🪨',
    stock: 1,
    rarity: 'epic',
    effects: [
        "Ask a question: it answers in a dead language — but you understand it",
        "Answer is always cryptic, poetic, and true",
        "Each use erases one word from your native tongue forever"
    ],
    vendor: 'scholar_society',
    shippedBy: 'Ancient Stone',
    levelRequirement: 7
},

  'oracula_blood_red_velvet_cake_recipe': {
    id: 'oracula_blood_red_velvet_cake_recipe',
    name: "Recipe: Oracula Blood Red Velvet Cake",
    description: "Rich cake with 'berry' dye for nocturnal nourishment.",
    category: SHOP_CATEGORIES.services,
    price: 9000,
    icon: '🍰',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Bake with red dye (1 hour); eat to heal 2d6 HP at night and advantage on Stealth in dark for 3 hours",
        "Requires: Flour and 'blood' berries; decadent",
        "Vampires crave it",
        "Made by: Night Bakers"
    ],
    vendor: 'oracula_castle',
    shippedBy: 'Crimson Crumb Codex',
    levelRequirement: 6
},

  'oracula_castle_blood_vial_vat': {
    id: 'oracula_castle_blood_vial_vat',
    name: "Oracula Castle Blood Vial Vat",
    description: "Stirring vat for red velvet batter.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8500,
    icon: '🍰',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Mixes 'red' liquids; advantage on night baking",
        "Vat chills naturally; preserves color",
        "Stains everything crimson",
        "Made by: Castle Alchemists"
    ],
    vendor: 'oracula_castle',
    shippedBy: 'Vampiric Vat Vessel',
    levelRequirement: 6
},

  'oracula_curse_removal': {
        id: 'oracula_curse_removal',
        name: "Oracula Curse Removal (High Level)",
        description: "The Oracula priestess personally breaks one powerful, persistent curse.",
        category: SHOP_CATEGORIES.services,
        price: 150000,
        icon: '✨',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Breaks any curse up to CR 10, regardless of binding",
        "The act of removal creates a minor, random localized weather effect for 24 hours",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Personal Summons',
        levelRequirement: 15
    },

  'oracula_divination_crystal': {
        id: 'oracula_divination_crystal',
        name: "Oracula Grand Divination Crystal",
        description: "A crystal that shows brief, moving visions of future events.",
        category: SHOP_CATEGORIES.equipment,
        price: 350000,
        icon: '🔮',
        stock: 2,
        rarity: 'godly',
        effects: [
            "Once per day, see 1d4 rounds into the future combat outcome",
        "If used successfully, user gains +5 to Initiative next combat",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Floating Pedestal',
        levelRequirement: 15
    },

  'oracula_divine_alliance': {
        id: 'oracula_divine_alliance',
        name: "Oracular Divine Alliance (Minor Deity)",
        description: "Secure the permanent, low-level loyalty of a minor deity/demigod faction.",
        category: SHOP_CATEGORIES.premium,
        price: 350000,
        icon: '🤝',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Gain a permanent divine ally (Minor Deity, CR 25 equivalent)",
        "Deity grants minor boons (e.g., perpetual good luck, minor healing)",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Grand Celestial Summons',
        levelRequirement: 19
    },

  'oracula_divine_army_blessing': {
        id: 'oracula_divine_army_blessing',
        name: "Oracular Divine Army Blessing (Mass)",
        description: "A blessing granted by a neutral/good deity to an entire army (up to 1000 soldiers).",
        category: SHOP_CATEGORIES.services,
        price: 350000,
        icon: '🙏',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Army gains +2 to all attack rolls and damage rolls for one major battle",
        "Army gains temporary immunity to fear effects",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'High Festival',
        levelRequirement: 19
    },

  'oracula_divine_ascension': {
        id: 'oracula_divine_ascension',
        name: "Oracula Divine Ascension Ritual",
        description: "A final, dangerous ritual to temporarily elevate a mortal to minor deity status.",
        category: SHOP_CATEGORIES.forbidden,
        price: 1700000,
        icon: '😇',
        stock: 1,
        rarity: 'godly',
        effects: [
            "User gains divine power (DM discretion) for 24 hours",
        "Requires massive, ethically questionable sacrifice",
        "After ascension ends, user suffers 3 permanent levels of exhaustion"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Final Summons',
        levelRequirement: 20
    },

  'oracula_divine_consecration': {
        id: 'oracula_divine_consecration',
        name: "Oracular Divine Consecration (Small Area)",
        description: "Consecrate a building or shrine, making it a safe haven blessed by a neutral deity.",
        category: SHOP_CATEGORIES.services,
        price: 6300,
        icon: '⛪',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Area (1 building) becomes protected from Evil outsider entry (DC 18 banishment)",
        "Deals 2d6 radiant damage to any fiend attempting entry",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Consecration Ritual',
        levelRequirement: 11
    },

  'oracula_divine_intervention': {
        id: 'oracula_divine_intervention',
        name: "Oracula Divine Intervention (Major)",
        description: "Call upon a major deity to actively counter a major threat (e.g., enemy army, powerful villain).",
        category: SHOP_CATEGORIES.premium,
        price: 350000,
        icon: '⚡',
        stock: 1,
        rarity: 'godly',
        effects: [
            "A deity directly combats the named threat for 1 round, turning the tide",
        "The deity demands a service of galactic significance in return",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Cosmic Summons',
        levelRequirement: 20
    },

  'oracula_divine_mediation': {
        id: 'oracula_divine_mediation',
        name: "Oracula Divine Mediation",
        description: "A high priest contacts a specific minor deity on your behalf to resolve a dispute.",
        category: SHOP_CATEGORIES.services,
        price: 30000,
        icon: '⚖️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Mediates a conflict between two non-god entities (e.g., two factions or powerful NPCs)",
        "Deity’s judgment is binding and final",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Holy Delegation',
        levelRequirement: 16
    },

  'oracula_divine_weapon_blessing': {
        id: 'oracula_divine_weapon_blessing',
        name: "Oracular Divine Weapon Blessing",
        description: "A high priest blesses one weapon, granting it divine purpose.",
        category: SHOP_CATEGORIES.services,
        price: 30000,
        icon: '🗡️',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Weapon deals an extra 3d10 Radiant damage against a specified type of enemy (Fiends, Undead, etc.)",
        "Blessing lasts 1 year",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Consecrated Anointing',
        levelRequirement: 15
    },

  'oracula_fate_gem': {
        id: 'oracula_fate_gem',
        name: "Oracula Fate Gem (Single Rewind)",
        description: "A rare gem that absorbs the energy of a single, critical failure.",
        category: SHOP_CATEGORIES.premium,
        price: 360000,
        icon: '💎',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Absorbs one failed Death Save or one failed attack roll against a powerful enemy",
        "Gem shatters afterward; user takes 5d10 psychic damage from vision overload",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Sealed Reliquary',
        levelRequirement: 14
    },

  'oracula_fortune_cookie_filling': {
    id: 'oracula_fortune_cookie_filling',
    name: "Oracula Fortune Cookie Filling Service",
    description: "Your prophecies come with a cookie.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 360,
    icon: '🥠',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Once per day: Eat a fortune cookie with a real prophecy (DM gives vague warning)",
        "Cookie is stale; prophecy is slightly better than the cookie",
        "5% chance the prophecy is about someone else's campaign",
        "Made by: Oracula Bakery"
    ],
    vendor: 'oracula',
    shippedBy: 'Baked Delivery',
    levelRequirement: 5
},

  'oracula_fortune_cookie_machine': {
    id: 'oracula_fortune_cookie_machine',
    name: "Oracula Fortune Cookie Machine",
    description: "Makes cookies with fortunes inside.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 14500,
    icon: '🥠',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Creates 1d4 fortune cookies per day (each contains a random prophecy)",
        "Machine is always right: advantage on one check per cookie",
        "Cookies are stale: disadvantage on Charisma while eating (bad breath)",
        "Made by: Oracula Bakery Tools"
    ],
    vendor: 'oracula',
    shippedBy: 'Baked Delivery',
    levelRequirement: 6
},

  'oracula_god_summons': {
        id: 'oracula_god_summons',
        name: "Oracula God Summoning (Major Deity)",
        description: "The highest ritual: Summon a specific Greater Deity to interfere in a major conflict.",
        category: SHOP_CATEGORIES.forbidden,
        price: 5000000,
        icon: '⚡',
        stock: 1,
        rarity: 'godly',
        effects: [
            "A major deity of your choice intervenes directly in one event (Combat/Political)",
        "Deity intervenes favorably, but demands a service of equal cosmic magnitude in return",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Cosmic Gate',
        levelRequirement: 20
    },

  'oracula_high_prophet_training': {
        id: 'oracula_high_prophet_training',
        name: "Oracula High Prophet Training (Apprenticeship)",
        description: "Train personally under a true Prophet of the Oracula for 6 months.",
        category: SHOP_CATEGORIES.services,
        price: 30000,
        icon: '🙏',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Gain permanent proficiency in Divination/Insight; learn 1 epic divination spell",
        "Gain the permanent 'Visionary' trait (+1 to all future prophecy/luck rolls)",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Spiritual Pilgrimage',
        levelRequirement: 17
    },

  'oracula_memory_wipe': {
        id: 'oracula_memory_wipe',
        name: "Oracula Memory Wipe (Total)",
        description: "Complete erasure of all memories before the last calendar year.",
        category: SHOP_CATEGORIES.forbidden,
        price: 360000,
        icon: '🧹',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Erases all personal memories prior to ritual date (target is functionally new)",
        "Requires willing participant or successful DC 22 WIS save to subdue",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Psychic Dampener',
        levelRequirement: 16
    },

  'oracula_prophecy_reading': {
        id: 'oracula_prophecy_reading',
        name: "Oracula Prophecy Reading (Minor)",
        description: "A short, vague reading detailing one potential danger in the next week.",
        category: SHOP_CATEGORIES.services,
        price: 1700,
        icon: '🔮',
        stock: 15,
        rarity: 'rare',
        effects: [
            "Receive one true, if cryptic, prediction about the near future",
        "Reading is performed by a low-ranking Oracular priest",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Smoke & Incense',
        levelRequirement: 5
    },

  'oracula_prophet_ascension': {
        id: 'oracula_prophet_ascension',
        name: "Oracula Prophet Ascension (Minor)",
        description: "A permanent grant of minor prophetic insight from the Oracula hierarchy.",
        category: SHOP_CATEGORIES.faction,
        price: 30000,
        icon: '🔮',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Once per day, gain a truthful vision of events 1 hour in the future",
        "Grants +2 to all Insight and Perception checks",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'High Ceremony',
        levelRequirement: 16,
        factionBonus: { insight: 30 }
    },

  'oracula_prophetic_shield': {
        id: 'oracula_prophetic_shield',
        name: "Oracular Prophetic Shield",
        description: "A shield that subtly shifts its configuration fractions of a second before an attack lands.",
        category: SHOP_CATEGORIES.equipment,
        price: 370000,
        icon: '🛡️',
        stock: 2,
        rarity: 'godly',
        effects: [
            "As a reaction, grant user advantage on a single saving throw or AC against one incoming attack",
        "Reaction can be used 3 times per long rest",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Sacred Carving',
        levelRequirement: 17
    },

  'oracula_seer_bedsheet': {
    id: 'oracula_seer_bedsheet',
    name: "Oracula Seer Bedsheet",
    description: "A sheet with holes cut out for eyes.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 58,
    icon: '👻',
    stock: 8,
    rarity: 'common',
    effects: [
        "Disguise yourself as a ghost: advantage on Intimidation vs. superstitious creatures",
        "Disadvantage on all checks in windy conditions (sheet flies off)",
        "You look ridiculous: disadvantage on Charisma with intelligent creatures",
        "Made by: Oracula Costume Shop"
    ],
    vendor: 'oracula',
    shippedBy: 'Bedsheet Ghost',
    levelRequirement: 5
},

  'oracula_truth_serum': {
        id: 'oracula_truth_serum',
        name: "Oracula Truth Serum (Potent)",
        description: "A rare liquid that forces complete, unedited verbal honesty.",
        category: SHOP_CATEGORIES.forbidden,
        price: 85000,
        icon: '🧪',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Target must succeed on DC 19 WIS save or reveal all known information about a subject",
        "Truth remains revealed even after effect wears off",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Crystal Decanter',
        levelRequirement: 12
    },

  'oracula_vampire_fang_cleaning_service': {
    id: 'oracula_vampire_fang_cleaning_service',
    name: "Oracula Vampire Fang Cleaning Service",
    description: "Polish your teeth for that undead sparkle.",
    category: SHOP_CATEGORIES.services,
    price: 370,
    icon: '🦷',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Bite attacks +1 damage for 24 hours",
        "Advantage on Intimidation with smiles",
        "Garlic allergy worsened (disadvantage vs. garlic)",
        "Made by: Bat Dentists"
    ],
    vendor: 'oracula_castle',
    shippedBy: 'Coffin Kit',
    levelRequirement: 5
},

  'oracula_vampiric_capelet': {
    id: 'oracula_vampiric_capelet',
    name: "Oracula Vampiric Capelet",
    description: "Velvet capelet with bat-wing lining.",
    category: SHOP_CATEGORIES.premium,
    price: 19500,
    icon: '🧥',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Advantage on Dexterity (Acrobatics) at night",
        "Capelet allows 10ft glide once per day",
        "Attracts bats (helpful scouts or pests)",
        "Made by: Night Tailors"
    ],
    vendor: 'oracula_castle',
    shippedBy: 'Blood-Red Fold',
    levelRequirement: 7
},

  'orange_paint_of_aggressive_visibility': {
    id: 'orange_paint_of_aggressive_visibility',
    name: "Orange Paint of Aggressive Visibility",
    description: "Be seen. Be very seen.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 14500,
    icon: '🎨',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Paint yourself neon orange: enemies have disadvantage on attacks against you (too bright to look at)",
        "You have disadvantage on Stealth and are visible from 1 mile away",
        "Construction workers instinctively salute you",
        "Made by: High Visibility Paint Co."
    ],
    vendor: 'team_magma_supply',
    shippedBy: 'Safety Cone Delivery',
    levelRequirement: 5
},

  'orb_of_snowglobe': {
    id: 'orb_of_snowglobe',
    name: "Orb of Snowglobe",
    description: "A palm-sized globe that contains a tiny, perfect winter town.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 4200,
    icon: '❄️',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Shake: create a localized snowfield (10ft radius) that reduces movement and grants concealment for 1 minute",
        "Shaken thrice: calms nearby beasts",
        "Contains a miniature model of a random location"
    ],
    vendor: 'glow_merchant',
    shippedBy: 'Packed Straw',
    levelRequirement: 1
},

  'order_silver_judgement_gavel': {
    id: 'order_silver_judgement_gavel',
    name: "Order of Silver's Judgement Gavel",
    description: "A ceremonial gavel that can compel truth and pass binding sentence on the guilty.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 35000,
    icon: '🔨',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Once per day: Strike a surface and compel one creature to tell the truth (WIS save DC 16)",
        "Once per week: pass 'sentence' on a creature you have proven guilty. They are affected by a 'Geas' spell",
        "Weighs heavily on the soul of the wielder"
    ],
    vendor: 'Order Silver',
    shippedBy: 'Armored Courier',
    levelRequirement: 9
},

  'order_silver_silver_forge_furnace': {
    id: 'order_silver_silver_forge_furnace',
    name: "Order Silver Silver Forge Furnace",
    description: "Furnace for icing cookies with silver.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7500,
    icon: '🍪',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Melts silver safely; +1 to warding recipes",
        "Purifies with silver heat",
        "Furnace glows holy",
        "Made by: Silver Forgers"
    ],
    vendor: 'order_silver_temple',
    shippedBy: 'Shiny Silver Shipment',
    levelRequirement: 5
},

  'order_silver_silver_frost_icing_cookies_recipe': {
    id: 'order_silver_silver_frost_icing_cookies_recipe',
    name: "Recipe: Order Silver Silver Frost Icing Cookies",
    description: "Cookies with purifying silver icing for warding.",
    category: SHOP_CATEGORIES.services,
    price: 7500,
    icon: '🍪',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Ice with silver (25 min); eat to gain +1 to saves vs. lycanthropy/were-creatures for 3 hours",
        "Requires: Silver leaf (edible); shiny",
        "Wards off beasts",
        "Made by: Silver Order Bakers"
    ],
    vendor: 'order_silver_temple',
    shippedBy: 'Frosty Frost File',
    levelRequirement: 5
},

  'order_silver_silver_thread_gloves': {
    id: 'order_silver_silver_thread_gloves',
    name: "Order Silver Silver Thread Gloves",
    description: "Gloves woven with purifying silver.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 17000,
    icon: '🧤',
    stock: 4,
    rarity: 'rare',
    effects: [
        "+1 to attacks vs. were-creatures",
        "Gloves detect silver weakness",
        "Tarnish in humidity",
        "Made by: Silver Order"
    ],
    vendor: 'order_silver_temple',
    shippedBy: 'Shiny Sheen',
    levelRequirement: 5
},

  'order_silver_sword_blessing_premium': {
    id: 'order_silver_sword_blessing_premium',
    name: "Order Silver Sword Blessing (Premium)",
    description: "Holy edge against darkness.",
    category: SHOP_CATEGORIES.premium,
    price: 20000,
    icon: '⚔️',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Weapon +1d4 vs. undead for 1 day",
        "Glows near evil",
        "Blessing fades in shadows",
        "Made by: Silver Knights"
    ],
    vendor: 'order_silver_temple',
    shippedBy: 'Holy Sheath',
    levelRequirement: 7
},

  'overwatch_tracer_blink': {
    id: 'overwatch_tracer_blink',
    name: "Blink Device",
    description: "A device for short teleports.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 25000,
    icon: '⚡',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Teleport 15ft (3 charges per short rest)",
        "Recall: Return to position 6 seconds ago (once/day)",
        "Time distortion side effects"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Tech Device',
    levelRequirement: 6
},

  'p_down_d_up_badge': {
        id: 'p_down_d_up_badge',
        name: "P-Down, D-Up Badge",
        description: "Lowers attack power, raises defense. Turtle strategy.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 60000,
        icon: '🛡️',
        stock: 2,
        rarity: 'uncommon',
        effects: ["-2 to Damage rolls", "+2 AC"],
        vendor: 'gilded_gryphon',
        shippedBy: 'Heavy Mail',
        levelRequirement: 4
    },

  'p_up_d_down_badge': {
        id: 'p_up_d_down_badge',
        name: "P-Up, D-Down Badge",
        description: "Raises attack power, lowers defense. Berserker strategy.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 370,
        icon: '⚔️',
        stock: 2,
        rarity: 'uncommon',
        effects: ["+2 to Damage rolls", "-2 AC"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Aggressive Mail',
        levelRequirement: 4
    },

  'pacman_power_pellet': {
    id: 'pacman_power_pellet',
    name: "Power Pellet",
    description: "A pellet that turns ghosts vulnerable.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 370,
    icon: '🔴',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Single Use: Ethereal creatures vulnerable for 1 minute",
        "User gains speed +10ft",
        "Chomp attack: 2d6 force vs ghosts"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Pellet Jar',
    levelRequirement: 3
},

  'padded_shoulder_gear_for_wario': {
    id: 'padded_shoulder_gear_for_wario',
    name: "Wario's Shoulder Bash Pad",
    description: "Padded shoulder gear for Wario's signature charge – bash your way to victory!",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 13000,
    icon: '🛡️',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Once per short rest: Bash as bonus action (1d6 bludgeoning + knockback 5ft, STR save DC 13)",
        "+1 AC to shoulder strikes",
        "Gimmick: Pad squeaks on hit (disadvantage on Stealth after use)",
        "Made by: Wario's Bash Workshop"
    ],
    vendor: 'wario_land',
    shippedBy: 'Bashy Bundle',
    levelRequirement: 5
},

  'paint_star_prism': {
        id: 'paint_star_prism',
        name: "Prisma Fountain",
        description: "Source of infinite paint. Can recolor the world.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 290000,
        icon: '🌈',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Revive 'Colorless' (dead/drained) allies/NPCs",
            "Alter terrain (paint a door to make a door)",
            "Change enemy elemental affinities",
            "Very messy"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Paint Can',
        levelRequirement: 8
    },

  'painting_of_the_dying_sun': {
    id: 'painting_of_the_dying_sun',
    name: "Painting of the Dying Sun",
    description: "A canvas that slowly dims as time passes. If it goes black, the sun dies.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 370000,
    icon: '🖼️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "The painting dims 1% per day — if it reaches 0%, the sun dims permanently",
        "You can slow its dimming by sacrificing 10,000 gp per day",
        "If you destroy it, the sun explodes — but you become a god of darkness"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Gilded Frame',
    levelRequirement: 16
},

  'pandemic_cure_formula': {
    id: 'pandemic_cure_formula',
    name: "Pandemic Cure Formula",
    description: "A complete cure for any plague, pestilence, or magical disease affecting an entire population.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 320000,
    icon: '💊',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Cure all instances of 1 disease in a region (up to 1,000 people)",
        "Formula grants immunity for 1 year",
        "Production & distribution takes 1 week",
        "Highly sought after by governments & factions"
    ],
    vendor: 'alchemist_guild',
    shippedBy: 'Rare Ingredients',
    levelRequirement: 11
},

  'paper_doll': {
        id: 'paper_doll',
        name: "Paper Doll",
        description: "A cutout that looks exactly like Mario. Or you.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 6000,
        icon: '📄',
        stock: 20,
        rarity: 'common',
        effects: ["Action: Set up decoy. Dumb enemies must attack it once before attacking you.", "1 HP"],
        vendor: 'toad_town_market',
        shippedBy: 'Envelope',
        levelRequirement: 1
    },

  'para_beanie': {
    id: 'para_beanie',
    name: "Para-Beanie",
    description: "A propeller beanie that almost lets you fly. Emphasis on ‘almost’.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 370,
    icon: '🧢',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Jump height tripled",
        "If you jump off high place, can glide slowly downward (no fall damage)",
        "Propeller falls off if you take thunder damage (requires tinkering to fix)",
        "Kids point and laugh. Adults sigh nostalgically."
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Parcel Chute',
    levelRequirement: 2
},

  'paradox_engine': {
    id: 'paradox_engine',
    name: "Paradox Engine",
    description: "A machine that runs on paradoxes and contradictions.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 110000000,
    icon: '⚙️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Create any paradox (e.g., 'I am dead and alive') and reality accepts it",
        "Gain power from paradoxes (each paradox grants +1 level)",
        "Made by: The Contrarian"
    ],
    vendor: 'paradox_machines',
    shippedBy: 'Self-Contradicting Delivery',
    levelRequirement: 140
},

  'parakoopa_wings': {
    id: 'parakoopa_wings',
    name: "Parakoopa Wing Clips",
    description: "Small wings that strap to your arms. Flap awkwardly but fly briefly.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 13000,
    icon: '🪶',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Fly 30ft for 2 rounds (concentration)",
        "Glide safely from any height",
        "Wings flap loudly (disadvantage on Stealth)",
        "Birds mock your technique"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Feather Box',
    levelRequirement: 4
},

  'parallel_universe_cloning_machine': {
    id: 'parallel_universe_cloning_machine',
    name: "Parallel Universe Cloning Machine",
    description: "Clone yourself from alternate universes where you made better decisions.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 80000000,
    icon: '🔬',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Summon 1d100 alternate versions of yourself (each is a level-appropriate copy)",
        "They exist for 24 hours and share your goals",
        "Made by: The Multiverse"
    ],
    vendor: 'quantum_duplication',
    shippedBy: 'Alternate Delivery',
    levelRequirement: 90
},

  'paratroopa_wings': {
    id: 'paratroopa_wings',
    name: "Paratroopa Wings",
    description: "Wings for gliding and short hops.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12000,
    icon: '🦋',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Glide 20ft per 10ft fallen",
        "Jump distance doubled",
        "Fragile, repairs needed after damage"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Wing Pack',
    levelRequirement: 4
},

  'party_invite': {
        id: 'party_invite',
        name: "Lost Party Invitation",
        description: "Invitation to a party at Peach's Castle. Date: 3 years ago.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 500,
        icon: '✉️',
        stock: 200,
        rarity: 'junk',
        effects: ["Sadness", "Paper airplane material"],
        vendor: 'toad_town_market',
        shippedBy: 'Envelope',
        levelRequirement: 1
    },

  'pay_the_guild_to_scry_1': {
        id: 'pay_the_guild_to_scry_1',
        name: "Mages' Guild Scrying Fee (Local)",
        description: "Pay the Guild to scry on a target within 10 miles.",
        category: SHOP_CATEGORIES.services,
        price: 370,
        icon: '👁️',
        stock: 999,
        rarity: 'uncommon',
        effects: [
            "View target for 1 minute (visual only)",
        "Success rate 85% against passive detection",
            "Made by: Mages' Guild"
        ],
        vendor: 'mages_guild_hall',
        shippedBy: 'Magical Transmission',
        levelRequirement: 2
    },

  'peach_loyalists_mushroom_identification': {
    id: 'peach_loyalists_mushroom_identification',
    name: "Peach Loyalists Mushroom Identification",
    description: "Know which mushrooms help you grow.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 370,
    icon: '🍄',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Advantage on Nature checks about mushrooms for 30 days",
        "You can identify power-up mushrooms (DM provides one location)",
        "You must swear loyalty to Princess Peach (cosmetic)",
        "Made by: Peach Loyalist Mycologists"
    ],
    vendor: 'peach_loyalists',
    shippedBy: 'Pipe Transport',
    levelRequirement: 5
},

  'peach_loyalists_princess_gown': {
    id: 'peach_loyalists_princess_gown',
    name: "Peach Loyalists Princess Gown",
    description: "Elegant gown for royal occasions.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 19500,
    icon: '👗',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Advantage on Charisma (Persuasion) in courts",
        "Gown hides minor stains (disguise aid)",
        "Bulky for combat",
        "Made by: Loyalist Seamstresses"
    ],
    vendor: 'peach_loyalists_castle',
    shippedBy: 'Pink Petal',
    levelRequirement: 6
},

  'peach_loyalists_royal_peach_tart_recipe': {
    id: 'peach_loyalists_royal_peach_tart_recipe',
    name: "Recipe: Peach Loyalists Royal Peach Tart",
    description: "Tart from princess's orchards for loyalty.",
    category: SHOP_CATEGORIES.services,
    price: 7000,
    icon: '🥧',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Bake peaches (40 min); eat to gain +1 to Charisma (Persuasion) with allies for 3 hours",
        "Requires: Fresh peaches; sweet royalty",
        "Princess approved",
        "Made by: Loyalist Bakers"
    ],
    vendor: 'peach_loyalists_palace',
    shippedBy: 'Peachy Pastry Post',
    levelRequirement: 5
},

  'peach_loyalists_royal_rolling_board': {
    id: 'peach_loyalists_royal_rolling_board',
    name: "Peach Loyalists Royal Rolling Board",
    description: "Polished board for peach tarts.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6500,
    icon: '🥧',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Rolls smooth for fruits; +1 to Charisma presentation",
        "Princess seal for loyalty boost",
        "Sticky with peach juice",
        "Made by: Loyalist Woodworkers"
    ],
    vendor: 'peach_loyalists_palace',
    shippedBy: 'Peachy Plank Parcel',
    levelRequirement: 5
},

  'peach_loyalists_royal_tea_premium': {
    id: 'peach_loyalists_royal_tea_premium',
    name: "Peach Loyalists Royal Tea (Premium)",
    description: "Elegant brew for poise.",
    category: SHOP_CATEGORIES.premium,
    price: 14500,
    icon: '🍵',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Drink: +2 Charisma saves for 8 hours",
        "Calms nerves: Remove frightened",
        "Tea spills easily on bumpy roads",
        "Made by: Peach Court"
    ],
    vendor: 'peach_loyalists_palace',
    shippedBy: 'Teacup Set',
    levelRequirement: 5
},

  'pebble': {
        id: 'pebble',
        name: "Just A Pebble",
        description: "It's a small rock. Not a star piece. Not a moon rock. Just a rock. Good for throwing at windows.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1000,
        icon: '🪨',
        stock: 500,
        rarity: 'common',
        effects: ["Thrown (range 20/40)", "1 damage", "Insults the target"],
        vendor: 'toad_town_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },

  'peekaboo_badge': {
        id: 'peekaboo_badge',
        name: "Peekaboo Badge",
        description: "Allows you to see enemy health. Takes the mystery out of murder.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 59,
        icon: '👁️',
        stock: 5,
        rarity: 'common',
        effects: ["You always know the exact HP of enemies you can see"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Discreet Mail',
        levelRequirement: 2
    },

  'permanent_level_up_machine': {
    id: 'permanent_level_up_machine',
    name: "Permanent Level-Up Machine",
    description: "A treadmill that levels you up while you walk.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 55000000,
    icon: '🏃',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Walk for 1 minute: gain 1 level (no cap)",
        "Running grants 2 levels per minute",
        "Made by: The Level Designer"
    ],
    vendor: 'infinite_progress',
    shippedBy: 'Experience Delivery',
    levelRequirement: 50
},

};
